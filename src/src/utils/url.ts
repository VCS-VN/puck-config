export type UrlState = Record<string, any>;

export const parseUrlState = (): UrlState => {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const getNum = (k: string) => {
    const v = p.get(k);
    if (v == null || v === "") return undefined;
    const n = Number(v);
    return Number.isFinite(n) ? n : undefined;
  };
  const getBool = (k: string) => {
    const v = p.get(k);
    if (v == null) return undefined;
    return v === "1" || v === "true";
  };
  return {
    q: p.get("q") || undefined,
    page: getNum("page") || 1,
    sortBy: p.get("sortBy") || undefined,
    sortOrder: p.get("sortOrder") || undefined,
    hideOutOfStock: getBool("hideOutOfStock"),
    priceMin: getNum("priceMin"),
    priceMax: getNum("priceMax"),
    categoryId: p.get("categoryId") || undefined,
  };
};

export const pushUrlState = (state: UrlState) => {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  const p = url.searchParams;
  Object.entries(state).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") {
      p.delete(k);
    } else {
      p.set(k, String(v));
    }
  });
  // Avoid creating history entries on every small change
  window.history.replaceState({}, "", url.toString());
};

