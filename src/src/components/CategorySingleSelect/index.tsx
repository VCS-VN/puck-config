import { FieldLabel } from "@measured/puck";
import { useEffect, useMemo, useState } from "react";
import { getCategories } from "@/services/sale/category/category.api";

type Option = { id: string; name: string };

type Props = {
  name: string;
  value?: string;
  onChange: (v?: string) => void;
};

export const CategorySingleSelect = ({ name, value, onChange }: Props) => {
  const [items, setItems] = useState<Option[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const ctl = new AbortController();
    const storeId = import.meta.env.VITE_ENTITY_ID || "";
    (async () => {
      try {
        const res = await getCategories({ storeId, limit: 200, query: search }, ctl.signal);
        const pickArray = (obj: any): any[] => {
          if (!obj) return [];
          if (Array.isArray(obj)) return obj;
          const candidates = [obj?.data, obj?.items, obj?.rows, obj?.records, obj?.list, obj?.results];
          for (const c of candidates) if (Array.isArray(c)) return c;
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
            } as Option;
          })
          .filter((c: any) => c.id !== "");
        const seen = new Set<string>();
        const cleaned = normalized.filter((c: any) => {
          if (seen.has(c.id)) return false;
          seen.add(c.id);
          return true;
        });
        setItems(cleaned as any);
      } catch (e) {
        // ignore
      }
    })();
    return () => ctl.abort();
  }, [search]);

  const selected = useMemo(() => items.find((i) => String(i.id) === String(value)), [items, value]);

  return (
    <FieldLabel label="Parent Category">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: 6, border: "1px solid #ddd", borderRadius: 4 }}
          name={`${name}__search`}
        />
        <select
          name={name}
          value={value || ""}
          onChange={(e) => onChange(e.target.value || undefined)}
          style={{ padding: 6, border: "1px solid #ddd", borderRadius: 4 }}
        >
          <option value="">-- None --</option>
          {items.map((opt) => (
            <option key={String(opt.id)} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
        {selected ? (
          <div style={{ color: "#666", fontSize: 12 }}>Selected: {selected.name}</div>
        ) : null}
      </div>
    </FieldLabel>
  );
};

export default CategorySingleSelect;
