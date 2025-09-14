import { atom, useRecoilState } from 'recoil';
import { useCallback, useEffect, useRef } from 'react';

export type QueryObject = Record<string, any>;

interface UseUrlQueryOptions {
  /** Luôn ưu tiên lấy lại từ URL khi mount, kể cả đã có state (mặc định: false) */
  alwaysInitFromUrl?: boolean;
  /** Đồng bộ URL khi cập nhật query (mặc định: true) */
  syncUrlOnUpdate?: boolean;
  /** Loại bỏ các key có giá trị '' (chuỗi rỗng) khỏi URL (mặc định: true) */
  omitEmptyString?: boolean;
  /** Chuyển key về sort alphabet để URL ổn định (mặc định: true) */
  sortKeys?: boolean;
}

interface UpdateOptions {
  /** pushState (mặc định) hoặc replaceState */
  historyMode?: 'push' | 'replace';
  /** Ghi đè toàn bộ thay vì merge (mặc định: false) */
  overwrite?: boolean;
  /** Đồng bộ lên URL (mặc định: kế thừa syncUrlOnUpdate của hook) */
  syncUrl?: boolean;
}

const queryState = atom<QueryObject>({
  key: 'app.queryState',
  default: {}
});

/** Parse window.location.search -> object */
function parseSearchParams(search: string): QueryObject {
  const sp = new URLSearchParams(search);
  const obj: QueryObject = {};
  sp.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
}

/** Tạo string query từ object */
function buildSearchString(
  obj: QueryObject,
  {
    omitEmptyString = true,
    sortKeys = true
  }: Pick<UseUrlQueryOptions, 'omitEmptyString' | 'sortKeys'>
): string {
  const entries = Object.entries(obj).filter(([_, v]) => {
    if (v == null) return false;
    if (omitEmptyString && v === '') return false;
    return true;
  });
  if (sortKeys) {
    entries.sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
  }
  const sp = new URLSearchParams();
  for (const [k, v] of entries) sp.set(k, v);
  const qs = sp.toString();
  return qs ? `?${qs}` : '';
}

export function useUrlQuery(options: UseUrlQueryOptions = {}) {
  const {
    alwaysInitFromUrl = false,
    syncUrlOnUpdate = true,
    omitEmptyString = true,
    sortKeys = true
  } = options;

  const [query, setQuery] = useRecoilState(queryState);

  const hasInitRef = useRef(false);
  const skipNextPopRef = useRef(false);

  // Khởi tạo từ URL khi mount
  useEffect(() => {
    if (hasInitRef.current && !alwaysInitFromUrl) return;
    if (typeof window === 'undefined') return;

    const urlObj = parseSearchParams(window.location.search);

    // Chỉ set nếu:
    //  - chưa init, hoặc
    //  - alwaysInitFromUrl bật
    //  - hoặc state hiện đang rỗng
    const shouldSet =
      alwaysInitFromUrl ||
      !hasInitRef.current ||
      Object.keys(query).length === 0;

    if (shouldSet) {
      setQuery(urlObj);
    }

    hasInitRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lắng nghe popstate (Back/Forward)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handler = () => {
      if (skipNextPopRef.current) {
        skipNextPopRef.current = false;
        return;
      }
      const current = parseSearchParams(window.location.search);
      setQuery(current);
    };

    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, [setQuery]);

  // Cập nhật (merge hoặc overwrite)
  const updateQuery = useCallback(
    (
      partial: QueryObject,
      updateOptions: UpdateOptions = {}
    ) => {
      const {
        historyMode = 'push',
        overwrite = false,
        syncUrl
      } = updateOptions;

      setQuery(prev => {
        const base = overwrite ? {} : prev;
        const next: QueryObject = { ...base };

        // Áp dụng partial
        Object.entries(partial).forEach(([k, v]) => {
          if (v == null) {
            // Xoá nếu null/undefined
            delete next[k];
          } else {
            next[k] = String(v);
          }
        });

        // Cập nhật URL nếu cần
        const shouldSync =
          typeof window !== 'undefined' &&
          (syncUrl ?? syncUrlOnUpdate);

        if (shouldSync) {
          const searchString = buildSearchString(next, {
            omitEmptyString,
            sortKeys
          });
          const newUrl =
            window.location.pathname + searchString + window.location.hash;

          // Tránh trigger popstate handler logic khi tự đổi
          skipNextPopRef.current = true;
          if (historyMode === 'replace') {
            window.history.replaceState(null, '', newUrl);
          } else {
            window.history.pushState(null, '', newUrl);
          }
        }

        return next;
      });
    },
    [omitEmptyString, setQuery, sortKeys, syncUrlOnUpdate]
  );

  // Ghi đè toàn bộ
  const replaceQuery = useCallback(
    (next: QueryObject, opt?: Omit<UpdateOptions, 'overwrite'>) =>
      updateQuery(next, { ...opt, overwrite: true }),
    [updateQuery]
  );

  return {
    isGetQuery: hasInitRef.current,
    query,
    updateQuery,   // merge
    replaceQuery,  // overwrite toàn bộ
    setQueryRaw: setQuery // tránh dùng nếu không thật sự cần
  };
}
