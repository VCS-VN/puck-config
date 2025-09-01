import { FieldLabel } from "@measured/puck";
import { useEffect, useMemo, useState } from "react";
import { getProducts } from "@/services/sale/product/product.api";

type Product = { id: string; name: string; image?: string; price?: number };

type Props = {
  name: string;
  value?: Product[];
  onChange: (v: Product[]) => void;
};

export const ProductMultiSelect = ({ name, value, onChange }: Props) => {
  const [items, setItems] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const selected = useMemo<Product[]>(() => value || [], [value]);
  const storeId = import.meta.env.VITE_ENTITY_ID || "";

  useEffect(() => {
    const ctl = new AbortController();
    (async () => {
      try {
        const res = await getProducts(
          {
            storeId,
            query: search,
            isGettingModels: true,
            isGettingDefaultModel: true,
            limit: 20,
            page,
          },
          ctl.signal
        );
        const data = Array.isArray(res?.data) ? res.data : [];
        const mapped = data.map((p: any) => ({
          id: String(p.id),
          name: String(p.name || ""),
          image: p.image,
          price: p?.defaultModel?.price ?? p?.price,
        }));
        setItems(mapped);
      } catch (e) {
        // ignore errors in field UI
      }
    })();
    return () => ctl.abort();
  }, [search, page, storeId]);

  const isChecked = (id: string) => selected.some((s) => s.id === id);

  const toggle = (prod: Product) => {
    if (isChecked(prod.id)) {
      onChange(selected.filter((s) => s.id !== prod.id));
    } else {
      onChange([...selected, prod]);
    }
  };

  const clearAll = () => onChange([]);

  return (
    <FieldLabel label="Choose Products">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          style={{ padding: 6, border: "1px solid #ddd", borderRadius: 4 }}
          name={`${name}__search`}
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
          {items.map((p) => (
            <label key={p.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: 4 }}>
              <input
                type="checkbox"
                checked={isChecked(p.id)}
                onChange={() => toggle(p)}
                name={`${name}__${p.id}`}
              />
              <span>{p.name}</span>
            </label>
          ))}
          {!items.length && (
            <div style={{ color: "#999", fontSize: 12 }}>No products</div>
          )}
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button type="button" onClick={clearAll} style={{ padding: "4px 8px" }}>
            Clear
          </button>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <button type="button" onClick={() => setPage((p) => Math.max(1, p - 1))}>
              Prev
            </button>
            <button type="button" onClick={() => setPage((p) => p + 1)}>Next</button>
          </div>
        </div>
        {!!selected.length && (
          <div style={{ color: "#666", fontSize: 12 }}>
            Selected: {selected.map((s) => s.name).join(", ")}
          </div>
        )}
      </div>
    </FieldLabel>
  );
};

export default ProductMultiSelect;

