import { FieldLabel } from "@measured/puck";
import { useEffect, useMemo, useState } from "react";
import { getCategories } from "@/services/sale/category/category.api";

type Category = { id: string; name: string; icon?: string };

type Props = {
  name: string;
  value?: Category[];
  onChange: (v: Category[]) => void;
};

export const CategoryMultiSelect = ({ name, value, onChange }: Props) => {
  const [items, setItems] = useState<Category[]>([]);
  const [search, setSearch] = useState<string>("");
  const selected = useMemo<Category[]>(() => Array.isArray(value) ? value : [], [value]);
  const selectedIds = useMemo<Set<string>>(
    () => new Set(selected.map((s) => String(s.id))),
    [selected]
  );
  // Emit a minimal change if ids equal but names changed (fix stale Puck cache cases)
  const stableSelected = useMemo(() => selected.map((s) => ({ id: String(s.id), name: String(s.name || s.id) })), [selected]);

  useEffect(() => {
    const shouldAbort = new AbortController();
    const storeId = import.meta.env.VITE_ENTITY_ID || "";
    (async () => {
      try {
        const res = await getCategories(
          { storeId, limit: 200, query: search },
          shouldAbort.signal
        );
        const pickArray = (obj: any): any[] => {
          if (!obj) return [];
          if (Array.isArray(obj)) return obj;
          const candidates = [obj?.data, obj?.items, obj?.rows, obj?.records, obj?.list, obj?.results];
          for (const c of candidates) if (Array.isArray(c)) return c;
          // one more level deep if shape is { data: { items: [] } }
          const nested = [obj?.data?.data, obj?.data?.items, obj?.data?.rows, obj?.data?.records, obj?.data?.list, obj?.data?.results];
          for (const c of nested) if (Array.isArray(c)) return c;
          return [];
        };
        const raw = pickArray(res?.data);
        const normalized = (raw as any[])
          .map((c: any) => {
            const id = c?.id ?? c?.entityId ?? c?.value ?? c?._id ?? c?.code ?? c?.slug ?? c?.uuid ?? c?.uid ?? c?.key ?? c?.categoryId;
            const name = c?.name ?? c?.label ?? c?.title ?? c?.slug ?? c?.code ?? c?.displayName ?? c?.text ?? c?.categoryName ?? c?.shortName;
            return {
              id: id != null ? String(id) : "",
              name: name != null && String(name).trim() !== "" ? String(name) : (id != null ? String(id) : ""),
            } as Category;
          })
          .filter((c: any) => c.id !== "");
        // de-duplicate by id
        const seen = new Set<string>();
        const cleaned = normalized.filter((c: any) => {
          if (seen.has(c.id)) return false;
          seen.add(c.id);
          return true;
        });
        setItems(cleaned as any);
      } catch (e) {
        // ignore fetch errors in field UI
      }
    })();

    return () => shouldAbort.abort();
  }, [search]);

  const isChecked = (id: string, name?: string) => {
    if (selectedIds.has(String(id))) return true;
    // Fallback: also match by (id + name) in case API ids are duplicated
    return selected.some((s) => String(s.id) === String(id) && String(s.name) === String(name ?? ""));
  };

  const toggle = (cat: Category, nextChecked: boolean) => {
    if (nextChecked) {
      // add (dedupe by id)
      const dedup = new Map<string, Category>();
      [...selected, cat].forEach((c) => dedup.set(String(c.id), { id: String(c.id), name: c.name }));
      onChange(Array.from(dedup.values()));
    } else {
      // remove by id
      onChange(selected.filter((s) => String(s.id) !== String(cat.id)));
    }
  };

  const clearAll = () => onChange([]);

  return (
    <FieldLabel label="Choose Categories">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: 6, border: "1px solid #ddd", borderRadius: 4 }}
        />
        <div
          style={{
            maxHeight: 220,
            overflow: "auto",
            border: "1px solid #eee",
            borderRadius: 4,
            padding: 6,
          }}
        >
          {items.map((c) => {
            const inputId = `${name}__${c.id}`;
            return (
              <div key={String(c.id)} style={{ display: "flex", alignItems: "center", gap: 8, padding: 4 }}>
                <input
                  id={inputId}
                  type="checkbox"
                  checked={!!isChecked(c.id, c.name)}
                  onChange={(e) => toggle(c, e.target.checked)}
                />
                <label htmlFor={inputId} style={{ cursor: "pointer" }}>
                  {c.name}
                </label>
              </div>
            );
          })}
          {!items.length && (
            <div style={{ color: "#999", fontSize: 12 }}>No categories</div>
          )}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button type="button" onClick={clearAll} style={{ padding: "4px 8px" }}>
            Clear
          </button>
        </div>
        {!!selected.length && (
          <div style={{ color: "#666", fontSize: 12 }}>
            Selected: {stableSelected.map((s) => s.name).join(", ")}
          </div>
        )}
      </div>
    </FieldLabel>
  );
};

export default CategoryMultiSelect;
