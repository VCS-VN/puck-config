function qt(d, m) {
  for (var h = 0; h < m.length; h++) {
    const i = m[h];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const a in i)
        if (a !== "default" && !(a in d)) {
          const f = Object.getOwnPropertyDescriptor(i, a);
          f && Object.defineProperty(d, a, f.get ? f : {
            enumerable: !0,
            get: () => i[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var G = {};
(function() {
  const d = (t) => {
    let e = t;
    return {
      get: () => e,
      set: (o) => {
        e = o;
      }
    };
  };
  var m = tinymce.util.Tools.resolve("tinymce.PluginManager");
  const h = (t) => ({ isEnabled: () => t.get() }), i = (t, e) => t.dispatch("VisualChars", { state: e }), a = (t, e, s) => {
    var n;
    return s(t, e.prototype) ? !0 : ((n = t.constructor) === null || n === void 0 ? void 0 : n.name) === e.name;
  }, f = (t) => {
    const e = typeof t;
    return t === null ? "null" : e === "object" && Array.isArray(t) ? "array" : e === "object" && a(t, String, (s, n) => n.isPrototypeOf(s)) ? "string" : e;
  }, T = (t) => (e) => f(e) === t, N = (t) => (e) => typeof e === t, I = (t) => (e) => t === e, C = T("string"), q = T("object"), k = I(null), K = N("boolean"), U = (t) => t == null, X = (t) => !U(t), J = N("number");
  class c {
    constructor(e, s) {
      this.tag = e, this.value = s;
    }
    static some(e) {
      return new c(!0, e);
    }
    static none() {
      return c.singletonNone;
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
      return this.tag ? c.some(e(this.value)) : c.none();
    }
    bind(e) {
      return this.tag ? e(this.value) : c.none();
    }
    exists(e) {
      return this.tag && e(this.value);
    }
    forall(e) {
      return !this.tag || e(this.value);
    }
    filter(e) {
      return !this.tag || e(this.value) ? this : c.none();
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
      return X(e) ? c.some(e) : c.none();
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
  c.singletonNone = new c(!1);
  const Q = (t, e) => {
    const s = t.length, n = new Array(s);
    for (let o = 0; o < s; o++) {
      const r = t[o];
      n[o] = e(r, o);
    }
    return n;
  }, y = (t, e) => {
    for (let s = 0, n = t.length; s < n; s++) {
      const o = t[s];
      e(o, s);
    }
  }, Y = (t, e) => {
    const s = [];
    for (let n = 0, o = t.length; n < o; n++) {
      const r = t[n];
      e(r, n) && s.push(r);
    }
    return s;
  }, Z = Object.keys, L = (t, e) => {
    const s = Z(t);
    for (let n = 0, o = s.length; n < o; n++) {
      const r = s[n], u = t[r];
      e(u, r);
    }
  }, z = typeof window < "u" ? window : Function("return this;")(), tt = (t, e) => {
    let s = e ?? z;
    for (let n = 0; n < t.length && s !== void 0 && s !== null; ++n)
      s = s[t[n]];
    return s;
  }, A = (t, e) => {
    const s = t.split(".");
    return tt(s, e);
  }, et = (t, e) => A(t, e), st = (t, e) => {
    const s = et(t, e);
    if (s == null)
      throw new Error(t + " not available on this browser");
    return s;
  }, nt = Object.getPrototypeOf, ot = (t) => st("HTMLElement", t), rt = (t) => {
    const e = A("ownerDocument.defaultView", t);
    return q(t) && (ot(e).prototype.isPrototypeOf(t) || /^HTML\w*Element$/.test(nt(t).constructor.name));
  }, ct = 1, lt = 3, it = (t) => t.dom.nodeType, O = (t) => t.dom.nodeValue, P = (t) => (e) => it(e) === t, S = (t) => at(t) && rt(t.dom), at = P(ct), ut = P(lt), dt = (t, e, s) => {
    if (C(s) || K(s) || J(s))
      t.setAttribute(e, s + "");
    else
      throw console.error("Invalid call to Attribute.set. Key ", e, ":: Value ", s, ":: Element ", t), new Error("Attribute value was not simple");
  }, $ = (t, e, s) => {
    dt(t.dom, e, s);
  }, ht = (t, e) => {
    const s = t.dom.getAttribute(e);
    return s === null ? void 0 : s;
  }, M = (t, e) => {
    t.dom.removeAttribute(e);
  }, w = (t, e) => {
    const s = ht(t, e);
    return s === void 0 || s === "" ? [] : s.split(" ");
  }, ft = (t, e, s) => {
    const o = w(t, e).concat([s]);
    return $(t, e, o.join(" ")), !0;
  }, gt = (t, e, s) => {
    const n = Y(w(t, e), (o) => o !== s);
    return n.length > 0 ? $(t, e, n.join(" ")) : M(t, e), !1;
  }, E = (t) => t.dom.classList !== void 0, mt = (t) => w(t, "class"), pt = (t, e) => ft(t, "class", e), vt = (t, e) => gt(t, "class", e), bt = (t, e) => {
    E(t) ? t.dom.classList.add(e) : pt(t, e);
  }, yt = (t) => {
    (E(t) ? t.dom.classList : mt(t)).length === 0 && M(t, "class");
  }, wt = (t, e) => {
    E(t) ? t.dom.classList.remove(e) : vt(t, e), yt(t);
  }, Et = (t, e) => {
    const n = (e || document).createElement("div");
    if (n.innerHTML = t, !n.hasChildNodes() || n.childNodes.length > 1) {
      const o = "HTML does not have a single root node";
      throw console.error(o, t), new Error(o);
    }
    return g(n.childNodes[0]);
  }, Tt = (t, e) => {
    const n = (e || document).createElement(t);
    return g(n);
  }, Nt = (t, e) => {
    const n = (e || document).createTextNode(t);
    return g(n);
  }, g = (t) => {
    if (t == null)
      throw new Error("Node cannot be null or undefined");
    return { dom: t };
  }, p = {
    fromHtml: Et,
    fromTag: Tt,
    fromText: Nt,
    fromDom: g,
    fromPoint: (t, e, s) => c.from(t.dom.elementFromPoint(e, s)).map(g)
  }, v = {
    " ": "nbsp",
    "­": "shy"
  }, D = (t, e) => {
    let s = "";
    return L(t, (n, o) => {
      s += o;
    }), new RegExp("[" + s + "]", e ? "g" : "");
  }, Ct = (t) => {
    let e = "";
    return L(t, (s) => {
      e && (e += ","), e += "span.mce-" + s;
    }), e;
  }, kt = D(v), Lt = D(v, !0), At = Ct(v), j = "mce-nbsp", V = (t) => t.dom.contentEditable, Ot = (t) => '<span data-mce-bogus="1" class="mce-' + v[t] + '">' + t + "</span>", b = (t) => t.nodeName.toLowerCase() === "span" && t.classList.contains("mce-nbsp-wrap"), Pt = (t) => {
    const e = O(t);
    return ut(t) && C(e) && kt.test(e);
  }, St = (t) => S(t) && V(t) === "false", $t = (t, e) => {
    if (S(t) && !b(t.dom)) {
      const s = V(t);
      if (s === "true")
        return !0;
      if (s === "false")
        return !1;
    }
    return e;
  }, B = (t, e, s) => {
    let n = [];
    const o = t.dom, r = Q(o.childNodes, p.fromDom), u = (l) => b(l.dom) || !St(l);
    return y(r, (l) => {
      s && u(l) && e(l) && (n = n.concat([l])), n = n.concat(B(l, e, $t(l, s)));
    }), n;
  }, Mt = (t, e) => {
    for (; t.parentNode; ) {
      if (t.parentNode === e)
        return e;
      t = t.parentNode;
    }
  }, Dt = (t) => t.replace(Lt, Ot), H = (t, e) => {
    const s = t.dom, n = B(p.fromDom(e), Pt, t.dom.isEditable(e));
    y(n, (o) => {
      var r;
      const u = o.dom.parentNode;
      if (b(u))
        bt(p.fromDom(u), j);
      else {
        const l = Dt(s.encode((r = O(o)) !== null && r !== void 0 ? r : "")), It = s.create("div", {}, l);
        let W;
        for (; W = It.lastChild; )
          s.insertAfter(W, o.dom);
        t.dom.remove(o.dom);
      }
    });
  }, x = (t, e) => {
    const s = t.dom.select(At, e);
    y(s, (n) => {
      b(n) ? wt(p.fromDom(n), j) : t.dom.remove(n, !0);
    });
  }, _ = (t) => {
    const e = t.getBody(), s = t.selection.getBookmark();
    let n = Mt(t.selection.getNode(), e);
    n = n !== void 0 ? n : e, x(t, n), H(t, n), t.selection.moveToBookmark(s);
  }, F = (t, e) => {
    i(t, e.get());
    const s = t.getBody();
    e.get() === !0 ? H(t, s) : x(t, s);
  }, jt = (t, e) => {
    e.set(!e.get());
    const s = t.selection.getBookmark();
    F(t, e), t.selection.moveToBookmark(s);
  }, Vt = (t, e) => {
    t.addCommand("mceVisualChars", () => {
      jt(t, e);
    });
  }, Bt = (t) => (e) => e.options.get(t), Ht = (t) => {
    const e = t.options.register;
    e("visualchars_default_state", {
      processor: "boolean",
      default: !1
    });
  }, xt = Bt("visualchars_default_state"), _t = (t, e) => {
    t.on("init", () => {
      F(t, e);
    });
  }, Ft = (t, e) => {
    let s = null;
    return {
      cancel: () => {
        k(s) || (clearTimeout(s), s = null);
      },
      throttle: (...r) => {
        k(s) && (s = setTimeout(() => {
          s = null, t.apply(null, r);
        }, e));
      }
    };
  }, Rt = (t, e) => {
    const s = Ft(() => {
      _(t);
    }, 300);
    t.on("keydown", (n) => {
      e.get() === !0 && (n.keyCode === 13 ? _(t) : s.throttle());
    }), t.on("remove", s.cancel);
  }, R = (t, e) => (s) => {
    s.setActive(e.get());
    const n = (o) => s.setActive(o.state);
    return t.on("VisualChars", n), () => t.off("VisualChars", n);
  }, Wt = (t, e) => {
    const s = () => t.execCommand("mceVisualChars");
    t.ui.registry.addToggleButton("visualchars", {
      tooltip: "Show invisible characters",
      icon: "visualchars",
      onAction: s,
      onSetup: R(t, e)
    }), t.ui.registry.addToggleMenuItem("visualchars", {
      text: "Show invisible characters",
      icon: "visualchars",
      onAction: s,
      onSetup: R(t, e)
    });
  };
  var Gt = () => {
    m.add("visualchars", (t) => {
      Ht(t);
      const e = d(xt(t));
      return Vt(t, e), Wt(t, e), Rt(t, e), _t(t, e), h(e);
    });
  };
  Gt();
})();
const Ut = /* @__PURE__ */ qt({
  __proto__: null,
  default: G
}, [G]);
export {
  Ut as i
};
//# sourceMappingURL=index-xGmiqU8g.js.map
