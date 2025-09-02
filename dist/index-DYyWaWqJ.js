function F(h, a) {
  for (var m = 0; m < a.length; m++) {
    const o = a[m];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const u in o)
        if (u !== "default" && !(u in h)) {
          const p = Object.getOwnPropertyDescriptor(o, u);
          p && Object.defineProperty(h, u, p.get ? p : {
            enumerable: !0,
            get: () => o[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(h, Symbol.toStringTag, { value: "Module" }));
}
var N = {};
(function() {
  var h = tinymce.util.Tools.resolve("tinymce.PluginManager");
  const a = (t, e, s) => {
    const n = e === "UL" ? "InsertUnorderedList" : "InsertOrderedList";
    t.execCommand(n, !1, s === !1 ? null : { "list-style-type": s });
  }, m = (t) => {
    t.addCommand("ApplyUnorderedListStyle", (e, s) => {
      a(t, "UL", s["list-style-type"]);
    }), t.addCommand("ApplyOrderedListStyle", (e, s) => {
      a(t, "OL", s["list-style-type"]);
    });
  }, o = (t) => (e) => e.options.get(t), u = (t) => {
    const e = t.options.register;
    e("advlist_number_styles", {
      processor: "string[]",
      default: "default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman".split(",")
    }), e("advlist_bullet_styles", {
      processor: "string[]",
      default: "default,circle,square".split(",")
    });
  }, p = o("advlist_number_styles"), O = o("advlist_bullet_styles"), f = (t) => t == null, y = (t) => !f(t);
  var T = tinymce.util.Tools.resolve("tinymce.util.Tools");
  class l {
    constructor(e, s) {
      this.tag = e, this.value = s;
    }
    static some(e) {
      return new l(!0, e);
    }
    static none() {
      return l.singletonNone;
    }
    fold(e, s) {
      return this.tag ? s(this.value) : e();
    }
    isSome() {
      return this.tag;
    }
    isNone() {
      return !this.tag;
    }
    map(e) {
      return this.tag ? l.some(e(this.value)) : l.none();
    }
    bind(e) {
      return this.tag ? e(this.value) : l.none();
    }
    exists(e) {
      return this.tag && e(this.value);
    }
    forall(e) {
      return !this.tag || e(this.value);
    }
    filter(e) {
      return !this.tag || e(this.value) ? this : l.none();
    }
    getOr(e) {
      return this.tag ? this.value : e;
    }
    or(e) {
      return this.tag ? this : e;
    }
    getOrThunk(e) {
      return this.tag ? this.value : e();
    }
    orThunk(e) {
      return this.tag ? this : e();
    }
    getOrDie(e) {
      if (this.tag)
        return this.value;
      throw new Error(e ?? "Called getOrDie on None");
    }
    static from(e) {
      return y(e) ? l.some(e) : l.none();
    }
    getOrNull() {
      return this.tag ? this.value : null;
    }
    getOrUndefined() {
      return this.value;
    }
    each(e) {
      this.tag && e(this.value);
    }
    toArray() {
      return this.tag ? [this.value] : [];
    }
    toString() {
      return this.tag ? `some(${this.value})` : "none()";
    }
  }
  l.singletonNone = new l(!1);
  const C = (t, e, s) => {
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      if (e(r, n))
        return l.some(r);
      if (s(r, n))
        break;
    }
    return l.none();
  }, w = (t) => /\btox\-/.test(t.className), x = (t, e) => t.dom.isChildOf(e, t.getBody()), v = (t) => (e) => y(e) && t.test(e.nodeName), A = v(/^(OL|UL|DL)$/), B = v(/^(TH|TD)$/), P = (t, e, s) => C(e, (n) => A(n) && !w(n), B).exists((n) => n.nodeName === s && x(t, n)), U = (t) => {
    const e = t.dom.getParent(t.selection.getNode(), "ol,ul"), s = t.dom.getStyle(e, "listStyleType");
    return l.from(s);
  }, E = (t, e) => e !== null && !t.dom.isEditable(e), k = (t, e) => {
    const s = t.dom.getParent(e, "ol,ul,dl");
    return E(t, s) && t.selection.isEditable();
  }, _ = (t, e) => {
    const s = t.selection.getNode();
    return e({
      parents: t.dom.getParents(s),
      element: s
    }), t.on("NodeChange", e), () => t.off("NodeChange", e);
  }, $ = (t) => t.replace(/\-/g, " ").replace(/\b\w/g, (e) => e.toUpperCase()), b = (t) => f(t) || t === "default" ? "" : t, L = (t, e) => (s) => {
    const n = (r, g) => {
      const d = r.selection.getStart(!0);
      s.setActive(P(r, g, e)), s.setEnabled(!k(r, d) && r.selection.isEditable());
    };
    return _(t, (r) => n(t, r.parents));
  }, D = (t, e, s, n, i, r) => {
    t.ui.registry.addSplitButton(e, {
      tooltip: s,
      icon: i === "OL" ? "ordered-list" : "unordered-list",
      presets: "listpreview",
      columns: 3,
      fetch: (g) => {
        const d = T.map(r, (c) => {
          const q = i === "OL" ? "num" : "bull", z = c === "disc" || c === "decimal" ? "default" : c, M = b(c), W = $(c);
          return {
            type: "choiceitem",
            value: M,
            icon: "list-" + q + "-" + z,
            text: W
          };
        });
        g(d);
      },
      onAction: () => t.execCommand(n),
      onItemAction: (g, d) => {
        a(t, i, d);
      },
      select: (g) => U(t).map((c) => g === c).getOr(!1),
      onSetup: L(t, i)
    });
  }, I = (t, e, s, n, i, r) => {
    t.ui.registry.addToggleButton(e, {
      active: !1,
      tooltip: s,
      icon: i === "OL" ? "ordered-list" : "unordered-list",
      onSetup: L(t, i),
      onAction: () => t.queryCommandState(n) || r === "" ? t.execCommand(n) : a(t, i, r)
    });
  }, S = (t, e, s, n, i, r) => {
    r.length > 1 ? D(t, e, s, n, i, r) : I(t, e, s, n, i, b(r[0]));
  }, j = (t) => {
    S(t, "numlist", "Numbered list", "InsertOrderedList", "OL", p(t)), S(t, "bullist", "Bullet list", "InsertUnorderedList", "UL", O(t));
  };
  var H = () => {
    h.add("advlist", (t) => {
      t.hasPlugin("lists") ? (u(t), j(t), m(t)) : console.error("Please use the Lists plugin together with the Advanced List plugin.");
    });
  };
  H();
})();
const G = /* @__PURE__ */ F({
  __proto__: null,
  default: N
}, [N]);
export {
  G as i
};
//# sourceMappingURL=index-DYyWaWqJ.js.map
