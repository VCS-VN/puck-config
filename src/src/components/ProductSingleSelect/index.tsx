import { FieldLabel } from "@measured/puck";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/sale/product/product.api";

type Props = {
  name: string;
  value?: string;
  onChange: (v?: string) => void;
};

export const ProductSingleSelect = ({ name, value, onChange }: Props) => {
  const [items, setItems] = useState<{ id: string; name: string }[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const ctl = new AbortController();
    const storeId = import.meta.env.VITE_ENTITY_ID || "";
    (async () => {
      try {
        const res = await getProducts({ storeId, query: search, limit: 20, page: 1 }, ctl.signal);
        const data = Array.isArray(res?.data) ? res.data : [];
        setItems(data.map((p: any) => ({ id: String(p.id), name: String(p.name || "") })));
      } catch (e) {}
    })();
    return () => ctl.abort();
  }, [search]);

  return (
    <FieldLabel label="Product">
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
          <option value="">-- Select --</option>
          {items.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
    </FieldLabel>
  );
};

export default ProductSingleSelect;

