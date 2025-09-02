function sr(_, Y) {
  for (var j = 0; j < Y.length; j++) {
    const L = Y[j];
    if (typeof L != "string" && !Array.isArray(L)) {
      for (const S in L)
        if (S !== "default" && !(S in _)) {
          const I = Object.getOwnPropertyDescriptor(L, S);
          I && Object.defineProperty(_, S, I.get ? I : {
            enumerable: !0,
            get: () => L[S]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var Ke = {};
(function() {
  var _ = tinymce.util.Tools.resolve("tinymce.PluginManager");
  const Y = (t, e, n) => {
    var s;
    return n(t, e.prototype) ? !0 : ((s = t.constructor) === null || s === void 0 ? void 0 : s.name) === e.name;
  }, j = (t) => {
    const e = typeof t;
    return t === null ? "null" : e === "object" && Array.isArray(t) ? "array" : e === "object" && Y(t, String, (n, s) => s.isPrototypeOf(n)) ? "string" : e;
  }, L = (t) => (e) => j(e) === t, S = (t) => (e) => typeof e === t, I = L("string"), z = L("object"), Qe = L("array"), Ge = S("boolean"), Ze = (t) => t == null, h = (t) => !Ze(t), P = S("function"), Xe = S("number"), Je = () => {
  }, Ye = (t, e) => (n) => t(e(n)), zt = (t) => () => t, Vt = (t, e) => t === e;
  function tn(t, ...e) {
    return (...n) => {
      const s = e.concat(n);
      return t.apply(null, s);
    };
  }
  const Wt = (t) => (e) => !t(e), qt = zt(!1);
  class u {
    constructor(e, n) {
      this.tag = e, this.value = n;
    }
    static some(e) {
      return new u(!0, e);
    }
    static none() {
      return u.singletonNone;
    }
    fold(e, n) {
      return this.tag ? n(this.value) : e();
    }
    isSome() {
      return this.tag;
    }
    isNone() {
      return !this.tag;
    }
    map(e) {
      return this.tag ? u.some(e(this.value)) : u.none();
    }
    bind(e) {
      return this.tag ? e(this.value) : u.none();
    }
    exists(e) {
      return this.tag && e(this.value);
    }
    forall(e) {
      return !this.tag || e(this.value);
    }
    filter(e) {
      return !this.tag || e(this.value) ? this : u.none();
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
      return h(e) ? u.some(e) : u.none();
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
  u.singletonNone = new u(!1);
  const en = Array.prototype.slice, nn = Array.prototype.indexOf, sn = Array.prototype.push, on = (t, e) => nn.call(t, e), gt = (t, e) => on(t, e) > -1, Kt = (t, e) => {
    for (let n = 0, s = t.length; n < s; n++) {
      const o = t[n];
      if (e(o, n))
        return !0;
    }
    return !1;
  }, v = (t, e) => {
    const n = t.length, s = new Array(n);
    for (let o = 0; o < n; o++) {
      const r = t[o];
      s[o] = e(r, o);
    }
    return s;
  }, p = (t, e) => {
    for (let n = 0, s = t.length; n < s; n++) {
      const o = t[n];
      e(o, n);
    }
  }, D = (t, e) => {
    const n = [];
    for (let s = 0, o = t.length; s < o; s++) {
      const r = t[s];
      e(r, s) && n.push(r);
    }
    return n;
  }, rn = (t, e) => {
    if (t.length === 0)
      return [];
    {
      let n = e(t[0]);
      const s = [];
      let o = [];
      for (let r = 0, c = t.length; r < c; r++) {
        const a = t[r], l = e(a);
        l !== n && (s.push(o), o = []), n = l, o.push(a);
      }
      return o.length !== 0 && s.push(o), s;
    }
  }, V = (t, e, n) => (p(t, (s, o) => {
    n = e(n, s, o);
  }), n), tt = (t, e, n) => {
    for (let s = 0, o = t.length; s < o; s++) {
      const r = t[s];
      if (e(r, s))
        return u.some(r);
      if (n(r, s))
        break;
    }
    return u.none();
  }, et = (t, e) => tt(t, e, qt), cn = (t) => {
    const e = [];
    for (let n = 0, s = t.length; n < s; ++n) {
      if (!Qe(t[n]))
        throw new Error("Arr.flatten item " + n + " was not an array, input: " + t);
      sn.apply(e, t[n]);
    }
    return e;
  }, Qt = (t, e) => cn(v(t, e)), ht = (t) => {
    const e = en.call(t, 0);
    return e.reverse(), e;
  }, Gt = (t, e) => e >= 0 && e < t.length ? u.some(t[e]) : u.none(), nt = (t) => Gt(t, 0), st = (t) => Gt(t, t.length - 1), Zt = (t, e) => {
    const n = [], s = P(e) ? (o) => Kt(n, (r) => e(r, o)) : (o) => gt(n, o);
    for (let o = 0, r = t.length; o < r; o++) {
      const c = t[o];
      s(c) || n.push(c);
    }
    return n;
  }, Xt = (t, e, n = Vt) => t.exists((s) => n(s, e)), ln = (t, e, n = Vt) => yt(t, e, n).getOr(t.isNone() && e.isNone()), yt = (t, e, n) => t.isSome() && e.isSome() ? u.some(n(t.getOrDie(), e.getOrDie())) : u.none(), an = 8, un = 9, mn = 11, Jt = 1, dn = 3, fn = (t, e) => {
    const s = (e || document).createElement("div");
    if (s.innerHTML = t, !s.hasChildNodes() || s.childNodes.length > 1) {
      const o = "HTML does not have a single root node";
      throw console.error(o, t), new Error(o);
    }
    return W(s.childNodes[0]);
  }, pn = (t, e) => {
    const s = (e || document).createElement(t);
    return W(s);
  }, gn = (t, e) => {
    const s = (e || document).createTextNode(t);
    return W(s);
  }, W = (t) => {
    if (t == null)
      throw new Error("Node cannot be null or undefined");
    return { dom: t };
  }, m = {
    fromHtml: fn,
    fromTag: pn,
    fromText: gn,
    fromDom: W,
    fromPoint: (t, e, n) => u.from(t.dom.elementFromPoint(e, n)).map(W)
  }, bt = (t, e) => {
    const n = t.dom;
    if (n.nodeType !== Jt)
      return !1;
    {
      const s = n;
      if (s.matches !== void 0)
        return s.matches(e);
      if (s.msMatchesSelector !== void 0)
        return s.msMatchesSelector(e);
      if (s.webkitMatchesSelector !== void 0)
        return s.webkitMatchesSelector(e);
      if (s.mozMatchesSelector !== void 0)
        return s.mozMatchesSelector(e);
      throw new Error("Browser lacks native selectors");
    }
  }, ot = (t, e) => t.dom === e.dom, hn = (t, e) => {
    const n = t.dom, s = e.dom;
    return n === s ? !1 : n.contains(s);
  }, Yt = bt, yn = typeof window < "u" ? window : Function("return this;")(), bn = (t, e) => {
    let n = e ?? yn;
    for (let s = 0; s < t.length && n !== void 0 && n !== null; ++s)
      n = n[t[s]];
    return n;
  }, te = (t, e) => {
    const n = t.split(".");
    return bn(n, e);
  }, Cn = (t, e) => te(t, e), Ln = (t, e) => {
    const n = Cn(t, e);
    if (n == null)
      throw new Error(t + " not available on this browser");
    return n;
  }, Sn = Object.getPrototypeOf, vn = (t) => Ln("HTMLElement", t), Nn = (t) => {
    const e = te("ownerDocument.defaultView", t);
    return z(t) && (vn(e).prototype.isPrototypeOf(t) || /^HTML\w*Element$/.test(Sn(t).constructor.name));
  }, T = (t) => t.dom.nodeName.toLowerCase(), ee = (t) => t.dom.nodeType, rt = (t) => (e) => ee(e) === t, Dn = (t) => ee(t) === an || T(t) === "#comment", Tn = (t) => Ct(t) && Nn(t.dom), Ct = rt(Jt), En = rt(dn), wn = rt(un), kn = rt(mn), ne = (t) => (e) => Ct(e) && T(e) === t, On = (t) => m.fromDom(t.dom.ownerDocument), An = (t) => wn(t) ? t : On(t), ct = (t) => u.from(t.dom.parentNode).map(m.fromDom), Bn = (t) => u.from(t.dom.parentElement).map(m.fromDom), In = (t) => u.from(t.dom.nextSibling).map(m.fromDom), q = (t) => v(t.dom.childNodes, m.fromDom), se = (t, e) => {
    const n = t.dom.childNodes;
    return u.from(n[e]).map(m.fromDom);
  }, it = (t) => se(t, 0), Lt = (t) => se(t, t.dom.childNodes.length - 1), Pn = (t) => kn(t) && h(t.dom.host), $n = P(Element.prototype.attachShadow) && P(Node.prototype.getRootNode) ? (t) => m.fromDom(t.dom.getRootNode()) : An, xn = (t) => {
    const e = $n(t);
    return Pn(e) ? u.some(e) : u.none();
  }, Mn = (t) => m.fromDom(t.dom.host), oe = (t) => {
    const e = En(t) ? t.dom.parentNode : t.dom;
    if (e == null || e.ownerDocument === null)
      return !1;
    const n = e.ownerDocument;
    return xn(m.fromDom(e)).fold(() => n.body.contains(e), Ye(oe, Mn));
  };
  var re = (t, e, n, s, o) => t(n, s) ? u.some(n) : P(o) && o(n) ? u.none() : e(n, s, o);
  const St = (t, e, n) => {
    let s = t.dom;
    const o = P(n) ? n : qt;
    for (; s.parentNode; ) {
      s = s.parentNode;
      const r = m.fromDom(s);
      if (e(r))
        return u.some(r);
      if (o(r))
        break;
    }
    return u.none();
  }, ce = (t, e, n) => re((o, r) => r(o), St, t, e, n), Rn = (t, e, n) => St(t, (s) => bt(s, e), n), Un = (t, e, n) => re((o, r) => bt(o, r), Rn, t, e, n), Hn = (t) => Un(t, "[contenteditable]"), Fn = (t, e = !1) => oe(t) ? t.dom.isContentEditable : Hn(t).fold(zt(e), (n) => _n(n) === "true"), _n = (t) => t.dom.contentEditable, ie = (t, e) => {
    ct(t).each((s) => {
      s.dom.insertBefore(e.dom, t.dom);
    });
  }, jn = (t, e) => {
    In(t).fold(() => {
      ct(t).each((o) => {
        E(o, e);
      });
    }, (s) => {
      ie(s, e);
    });
  }, zn = (t, e) => {
    it(t).fold(() => {
      E(t, e);
    }, (s) => {
      t.dom.insertBefore(e.dom, s.dom);
    });
  }, E = (t, e) => {
    t.dom.appendChild(e.dom);
  }, Vn = (t, e) => {
    p(e, (n) => {
      ie(t, n);
    });
  }, lt = (t, e) => {
    p(e, (n) => {
      E(t, n);
    });
  }, le = (t) => {
    t.dom.textContent = "", p(q(t), (e) => {
      vt(e);
    });
  }, vt = (t) => {
    const e = t.dom;
    e.parentNode !== null && e.parentNode.removeChild(e);
  };
  var ae = tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"), ue = tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"), at = tinymce.util.Tools.resolve("tinymce.util.VK");
  const me = (t) => v(t, m.fromDom), Wn = Object.keys, Nt = (t, e) => {
    const n = Wn(t);
    for (let s = 0, o = n.length; s < o; s++) {
      const r = n[s], c = t[r];
      e(c, r);
    }
  }, qn = (t) => (e, n) => {
    t[n] = e;
  }, Kn = (t, e, n, s) => {
    Nt(t, (o, r) => {
      (e(o, r) ? n : s)(o, r);
    });
  }, Qn = (t, e) => {
    const n = {};
    return Kn(t, e, qn(n), Je), n;
  }, Gn = (t, e, n) => {
    if (I(n) || Ge(n) || Xe(n))
      t.setAttribute(e, n + "");
    else
      throw console.error("Invalid call to Attribute.set. Key ", e, ":: Value ", n, ":: Element ", t), new Error("Attribute value was not simple");
  }, K = (t, e) => {
    const n = t.dom;
    Nt(e, (s, o) => {
      Gn(n, o, s);
    });
  }, Dt = (t) => V(t.dom.attributes, (e, n) => (e[n.name] = n.value, e), {}), Zn = (t, e) => m.fromDom(t.dom.cloneNode(e)), Xn = (t) => Zn(t, !0), Jn = (t, e) => {
    const n = m.fromTag(e), s = Dt(t);
    return K(n, s), n;
  }, Tt = (t, e) => {
    const n = Jn(t, e);
    jn(t, n);
    const s = q(t);
    return lt(n, s), vt(t), n;
  };
  var Et = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"), b = tinymce.util.Tools.resolve("tinymce.util.Tools");
  const de = (t) => (e) => h(e) && e.nodeName.toLowerCase() === t, Q = (t) => (e) => h(e) && t.test(e.nodeName), C = (t) => h(t) && t.nodeType === 3, G = (t) => h(t) && t.nodeType === 1, g = Q(/^(OL|UL|DL)$/), Yn = Q(/^(OL|UL)$/), fe = de("ol"), ut = Q(/^(LI|DT|DD)$/), ts = Q(/^(DT|DD)$/), es = Q(/^(TH|TD)$/), w = de("br"), ns = (t) => {
    var e;
    return ((e = t.parentNode) === null || e === void 0 ? void 0 : e.firstChild) === t;
  }, wt = (t, e) => h(e) && e.nodeName in t.schema.getTextBlockElements(), kt = (t, e) => h(t) && t.nodeName in e, ss = (t, e) => h(e) && e.nodeName in t.schema.getVoidElements(), os = (t, e) => w(e) ? t.isBlock(e.nextSibling) && !w(e.previousSibling) : !1, k = (t, e, n) => {
    const s = t.isEmpty(e);
    return n && t.select("span[data-mce-type=bookmark]", e).length > 0 ? !1 : s;
  }, pe = (t, e) => t.isChildOf(e, t.getRoot()), Ot = (t) => (e) => e.options.get(t), rs = (t) => {
    const e = t.options.register;
    e("lists_indent_on_tab", {
      processor: "boolean",
      default: !0
    });
  }, cs = Ot("lists_indent_on_tab"), is = Ot("forced_root_block"), ls = Ot("forced_root_block_attrs"), ge = (t, e) => {
    const n = t.dom, s = t.schema.getBlockElements(), o = n.createFragment(), r = is(t), c = ls(t);
    let a, l, i = !1;
    for (l = n.create(r, c), kt(e.firstChild, s) || o.appendChild(l); a = e.firstChild; ) {
      const d = a.nodeName;
      !i && (d !== "SPAN" || a.getAttribute("data-mce-type") !== "bookmark") && (i = !0), kt(a, s) ? (o.appendChild(a), l = null) : (l || (l = n.create(r, c), o.appendChild(l)), l.appendChild(a));
    }
    return !i && l && l.appendChild(n.create("br", { "data-mce-bogus": "1" })), o;
  }, N = Et.DOM, as = (t, e, n) => {
    const s = (i) => {
      const d = i.parentNode;
      d && b.each(o, (f) => {
        d.insertBefore(f, n.parentNode);
      }), N.remove(i);
    }, o = N.select('span[data-mce-type="bookmark"]', e), r = ge(t, n), c = N.createRng();
    c.setStartAfter(n), c.setEndAfter(e);
    const a = c.extractContents();
    for (let i = a.firstChild; i; i = i.firstChild)
      if (i.nodeName === "LI" && t.dom.isEmpty(i)) {
        N.remove(i);
        break;
      }
    t.dom.isEmpty(a) || N.insertAfter(a, e), N.insertAfter(r, e);
    const l = n.parentElement;
    l && k(t.dom, l) && s(l), N.remove(n), k(t.dom, e) && N.remove(e);
  }, us = ne("dd"), he = ne("dt"), ms = (t, e) => {
    us(e) ? Tt(e, "dt") : he(e) && Bn(e).each((n) => as(t, n.dom, e.dom));
  }, ds = (t) => {
    he(t) && Tt(t, "dd");
  }, fs = (t, e, n) => {
    e === "Indent" ? p(n, ds) : p(n, (s) => ms(t, s));
  }, ye = (t, e) => {
    if (C(t))
      return {
        container: t,
        offset: e
      };
    const n = ae.getNode(t, e);
    return C(n) ? {
      container: n,
      offset: e >= t.childNodes.length ? n.data.length : 0
    } : n.previousSibling && C(n.previousSibling) ? {
      container: n.previousSibling,
      offset: n.previousSibling.data.length
    } : n.nextSibling && C(n.nextSibling) ? {
      container: n.nextSibling,
      offset: 0
    } : {
      container: t,
      offset: e
    };
  }, mt = (t) => {
    const e = t.cloneRange(), n = ye(t.startContainer, t.startOffset);
    e.setStart(n.container, n.offset);
    const s = ye(t.endContainer, t.endOffset);
    return e.setEnd(s.container, s.offset), e;
  }, be = [
    "OL",
    "UL",
    "DL"
  ], Ce = be.join(","), O = (t, e) => {
    const n = e || t.selection.getStart(!0);
    return t.dom.getParent(n, Ce, Z(t, n));
  }, ps = (t, e) => h(t) && e.length === 1 && e[0] === t, gs = (t) => D(t.querySelectorAll(Ce), g), hs = (t) => {
    const e = O(t), n = t.selection.getSelectedBlocks();
    return ps(e, n) ? gs(e) : D(n, (s) => g(s) && e !== s);
  }, ys = (t, e) => {
    const n = b.map(e, (s) => {
      const o = t.dom.getParent(s, "li,dd,dt", Z(t, s));
      return o || s;
    });
    return Zt(n);
  }, At = (t) => {
    const e = t.selection.getSelectedBlocks();
    return D(ys(t, e), ut);
  }, bs = (t) => D(At(t), ts), Bt = (t, e) => {
    const n = t.dom.getParents(e, "TD,TH");
    return n.length > 0 ? n[0] : t.getBody();
  }, Cs = (t, e) => !g(e) && !ut(e) && Kt(be, (n) => t.isValidChild(e.nodeName, n)), Z = (t, e) => {
    const n = t.dom.getParents(e, t.dom.isBlock);
    return et(n, (o) => Cs(t.schema, o)).getOr(t.getBody());
  }, Ls = (t) => ct(t).exists((e) => ut(e.dom) && it(e).exists((n) => !g(n.dom)) && Lt(e).exists((n) => !g(n.dom))), Le = (t, e) => {
    const n = t.dom.getParents(e, "ol,ul", Z(t, e));
    return st(n);
  }, Ss = (t) => {
    const e = Le(t, t.selection.getStart()), n = D(t.selection.getSelectedBlocks(), Yn);
    return e.toArray().concat(n);
  }, vs = (t) => {
    const e = t.selection.getStart();
    return t.dom.getParents(e, "ol,ul", Z(t, e));
  }, Ns = (t) => {
    const e = Ss(t), n = vs(t);
    return et(n, (s) => Ls(m.fromDom(s))).fold(() => Ds(t, e), (s) => [s]);
  }, Ds = (t, e) => {
    const n = v(e, (s) => Le(t, s).getOr(s));
    return Zt(n);
  }, X = (t) => /\btox\-/.test(t.className), Se = (t, e) => tt(t, g, es).exists((n) => n.nodeName === e && !X(n)), ve = (t, e) => e !== null && !t.dom.isEditable(e), Ts = (t) => {
    const e = O(t);
    return ve(t, e);
  }, $ = (t, e) => {
    const n = t.dom.getParent(e, "ol,ul,dl");
    return ve(t, n);
  }, Ne = (t, e) => {
    const n = t.selection.getNode();
    return e({
      parents: t.dom.getParents(n),
      element: n
    }), t.on("NodeChange", e), () => t.off("NodeChange", e);
  }, De = (t, e) => {
    const s = document.createDocumentFragment();
    return p(t, (o) => {
      s.appendChild(o.dom);
    }), m.fromDom(s);
  }, A = (t, e, n) => t.dispatch("ListMutation", {
    action: e,
    element: n
  }), Es = ((t) => (e) => e.replace(t, ""))(/^\s+|\s+$/g), ws = (t) => t.length > 0, ks = (t) => !ws(t), Os = (t) => t.style !== void 0 && P(t.style.getPropertyValue), As = (t, e, n) => {
    if (!I(n))
      throw console.error("Invalid call to CSS.set. Property ", e, ":: Value ", n, ":: Element ", t), new Error("CSS value must be a string: " + n);
    Os(t) && t.style.setProperty(e, n);
  }, Bs = (t, e, n) => {
    const s = t.dom;
    As(s, e, n);
  }, J = (t) => Yt(t, "OL,UL"), Is = (t) => Yt(t, "LI"), Te = (t) => it(t).exists(J), Ps = (t) => Lt(t).exists(J), x = (t) => "listAttributes" in t, Ee = (t) => "isComment" in t, $s = (t) => "isFragment" in t, we = (t) => t.depth > 0, xs = (t) => t.isSelected, Ms = (t) => {
    const e = q(t), n = Ps(t) ? e.slice(0, -1) : e;
    return v(n, Xn);
  }, Rs = (t, e, n) => ct(t).filter(Ct).map((s) => ({
    depth: e,
    dirty: !1,
    isSelected: n,
    content: Ms(t),
    itemAttributes: Dt(t),
    listAttributes: Dt(s),
    listType: T(s),
    isInPreviousLi: !1
  })), ke = (t, e) => {
    E(t.item, e.list);
  }, Us = (t) => {
    for (let e = 1; e < t.length; e++)
      ke(t[e - 1], t[e]);
  }, Hs = (t, e) => {
    yt(st(t), nt(e), ke);
  }, Fs = (t, e) => {
    const n = {
      list: m.fromTag(e, t),
      item: m.fromTag("li", t)
    };
    return E(n.list, n.item), n;
  }, _s = (t, e, n) => {
    const s = [];
    for (let o = 0; o < n; o++)
      s.push(Fs(t, x(e) ? e.listType : e.parentListType));
    return s;
  }, js = (t, e) => {
    for (let n = 0; n < t.length - 1; n++)
      Bs(t[n].item, "list-style-type", "none");
    st(t).each((n) => {
      x(e) && (K(n.list, e.listAttributes), K(n.item, e.itemAttributes)), lt(n.item, e.content);
    });
  }, zs = (t, e) => {
    T(t.list) !== e.listType && (t.list = Tt(t.list, e.listType)), K(t.list, e.listAttributes);
  }, Vs = (t, e, n) => {
    const s = m.fromTag("li", t);
    return K(s, e), lt(s, n), s;
  }, Ws = (t, e) => {
    E(t.list, e), t.item = e;
  }, Oe = (t, e, n) => {
    const s = e.slice(0, n.depth);
    return st(s).each((o) => {
      if (x(n)) {
        const r = Vs(t, n.itemAttributes, n.content);
        Ws(o, r), zs(o, n);
      } else if ($s(n))
        lt(o.item, n.content);
      else {
        const r = m.fromHtml(`<!--${n.content}-->`);
        E(o.list, r);
      }
    }), s;
  }, qs = (t, e, n) => {
    const s = _s(t, n, n.depth - e.length);
    return Us(s), js(s, n), Hs(e, s), e.concat(s);
  }, Ks = (t, e) => {
    let n = u.none();
    const s = V(e, (o, r, c) => Ee(r) ? c === 0 ? (n = u.some(r), o) : Oe(t, o, r) : r.depth > o.length ? qs(t, o, r) : Oe(t, o, r), []);
    return n.each((o) => {
      const r = m.fromHtml(`<!--${o.content}-->`);
      nt(s).each((c) => {
        zn(c.list, r);
      });
    }), nt(s).map((o) => o.list);
  }, Qs = (t, e) => {
    switch (t) {
      case "Indent":
        e.depth++;
        break;
      case "Outdent":
        e.depth--;
        break;
      case "Flatten":
        e.depth = 0;
    }
    e.dirty = !0;
  }, Gs = (t, e) => {
    x(t) && x(e) && (t.listType = e.listType, t.listAttributes = { ...e.listAttributes });
  }, Zs = (t) => {
    t.listAttributes = Qn(t.listAttributes, (e, n) => n !== "start");
  }, Xs = (t, e) => {
    const n = t[e].depth, s = (r) => r.depth === n && !r.dirty, o = (r) => r.depth < n;
    return tt(ht(t.slice(0, e)), s, o).orThunk(() => tt(t.slice(e + 1), s, o));
  }, Ae = (t) => (p(t, (e, n) => {
    Xs(t, n).fold(() => {
      e.dirty && x(e) && Zs(e);
    }, (s) => Gs(e, s));
  }), t), Js = (t) => {
    let e = t;
    return {
      get: () => e,
      set: (o) => {
        e = o;
      }
    };
  }, Be = (t, e, n, s) => {
    var o;
    if (Dn(s))
      return [{
        depth: t + 1,
        content: (o = s.dom.nodeValue) !== null && o !== void 0 ? o : "",
        dirty: !1,
        isSelected: !1,
        isComment: !0
      }];
    e.each((a) => {
      ot(a.start, s) && n.set(!0);
    });
    const r = Rs(s, t, n.get());
    e.each((a) => {
      ot(a.end, s) && n.set(!1);
    });
    const c = Lt(s).filter(J).map((a) => dt(t, e, n, a)).getOr([]);
    return r.toArray().concat(c);
  }, Ys = (t, e, n, s) => it(s).filter(J).fold(() => Be(t, e, n, s), (o) => {
    const r = V(q(s), (c, a, l) => {
      if (l === 0)
        return c;
      if (Is(a))
        return c.concat(Be(t, e, n, a));
      {
        const i = {
          isFragment: !0,
          depth: t,
          content: [a],
          isSelected: !1,
          dirty: !1,
          parentListType: T(o)
        };
        return c.concat(i);
      }
    }, []);
    return dt(t, e, n, o).concat(r);
  }), dt = (t, e, n, s) => Qt(q(s), (o) => {
    const r = J(o) ? dt : Ys, c = t + 1;
    return r(c, e, n, o);
  }), to = (t, e) => {
    const n = Js(!1), s = 0;
    return v(t, (o) => ({
      sourceList: o,
      entries: dt(s, e, n, o)
    }));
  }, eo = (t, e) => {
    const n = Ae(e);
    return v(n, (s) => {
      const o = Ee(s) ? De([m.fromHtml(`<!--${s.content}-->`)]) : De(s.content);
      return m.fromDom(ge(t, o.dom));
    });
  }, no = (t, e) => {
    const n = Ae(e);
    return Ks(t.contentDocument, n).toArray();
  }, so = (t, e) => Qt(rn(e, we), (n) => nt(n).exists(we) ? no(t, n) : eo(t, n)), oo = (t, e) => {
    p(D(t, xs), (n) => Qs(e, n));
  }, ro = (t) => {
    const e = v(At(t), m.fromDom);
    return yt(et(e, Wt(Te)), et(ht(e), Wt(Te)), (n, s) => ({
      start: n,
      end: s
    }));
  }, co = (t, e, n) => {
    const s = to(e, ro(t));
    p(s, (o) => {
      oo(o.entries, n);
      const r = so(t, o.entries);
      p(r, (c) => {
        A(t, n === "Indent" ? "IndentList" : "OutdentList", c.dom);
      }), Vn(o.sourceList, r), vt(o.sourceList);
    });
  }, io = (t, e) => {
    const n = me(Ns(t)), s = me(bs(t));
    let o = !1;
    if (n.length || s.length) {
      const r = t.selection.getBookmark();
      co(t, n, e), fs(t, e, s), t.selection.moveToBookmark(r), t.selection.setRng(mt(t.selection.getRng())), t.nodeChanged(), o = !0;
    }
    return o;
  }, It = (t, e) => !Ts(t) && io(t, e), Ie = (t) => It(t, "Indent"), Pt = (t) => It(t, "Outdent"), ft = (t) => It(t, "Flatten"), lo = "\uFEFF", $t = (t) => t === lo, ao = (t, e, n) => St(t, e, n).isSome(), uo = (t, e) => ao(t, tn(ot, e));
  var mo = tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager");
  const M = Et.DOM, R = (t) => {
    const e = {}, n = (s) => {
      let o = t[s ? "startContainer" : "endContainer"], r = t[s ? "startOffset" : "endOffset"];
      if (G(o)) {
        const c = M.create("span", { "data-mce-type": "bookmark" });
        o.hasChildNodes() ? (r = Math.min(r, o.childNodes.length - 1), s ? o.insertBefore(c, o.childNodes[r]) : M.insertAfter(c, o.childNodes[r])) : o.appendChild(c), o = c, r = 0;
      }
      e[s ? "startContainer" : "endContainer"] = o, e[s ? "startOffset" : "endOffset"] = r;
    };
    return n(!0), t.collapsed || n(), e;
  }, U = (t) => {
    const e = (s) => {
      const o = (a) => {
        var l;
        let i = (l = a.parentNode) === null || l === void 0 ? void 0 : l.firstChild, d = 0;
        for (; i; ) {
          if (i === a)
            return d;
          (!G(i) || i.getAttribute("data-mce-type") !== "bookmark") && d++, i = i.nextSibling;
        }
        return -1;
      };
      let r = t[s ? "startContainer" : "endContainer"], c = t[s ? "startOffset" : "endOffset"];
      if (r) {
        if (G(r) && r.parentNode) {
          const a = r;
          c = o(r), r = r.parentNode, M.remove(a), !r.hasChildNodes() && M.isBlock(r) && r.appendChild(M.create("br"));
        }
        t[s ? "startContainer" : "endContainer"] = r, t[s ? "startOffset" : "endOffset"] = c;
      }
    };
    e(!0), e();
    const n = M.createRng();
    return n.setStart(t.startContainer, t.startOffset), t.endContainer && n.setEnd(t.endContainer, t.endOffset), mt(n);
  }, H = (t) => {
    switch (t) {
      case "UL":
        return "ToggleUlList";
      case "OL":
        return "ToggleOlList";
      case "DL":
        return "ToggleDLList";
    }
  }, fo = (t, e, n) => {
    const s = n["list-style-type"] ? n["list-style-type"] : null;
    t.setStyle(e, "list-style-type", s);
  }, Pe = (t, e) => {
    b.each(e, (n, s) => {
      t.setAttribute(s, n);
    });
  }, po = (t, e, n) => {
    Pe(e, n["list-attributes"]), b.each(t.select("li", e), (s) => {
      Pe(s, n["list-item-attributes"]);
    });
  }, F = (t, e, n) => {
    fo(t, e, n), po(t, e, n);
  }, go = (t, e, n) => {
    b.each(n, (s) => t.setStyle(e, s, ""));
  }, pt = (t, e) => h(e) && !kt(e, t.schema.getBlockElements()), xt = (t, e, n, s) => {
    let o = e[n ? "startContainer" : "endContainer"];
    const r = e[n ? "startOffset" : "endOffset"];
    G(o) && (o = o.childNodes[Math.min(r, o.childNodes.length - 1)] || o), !n && w(o.nextSibling) && (o = o.nextSibling);
    const c = (l) => {
      for (; !t.dom.isBlock(l) && l.parentNode && s !== l; )
        l = l.parentNode;
      return l;
    }, a = (l, i) => {
      var d;
      const f = new ue(l, c(l)), y = i ? "next" : "prev";
      let B;
      for (; B = f[y](); )
        if (!(ss(t, B) || $t(B.textContent) || ((d = B.textContent) === null || d === void 0 ? void 0 : d.length) === 0))
          return u.some(B);
      return u.none();
    };
    if (n && C(o))
      if ($t(o.textContent))
        o = a(o, !1).getOr(o);
      else
        for (o.parentNode !== null && pt(t, o.parentNode) && (o = o.parentNode); o.previousSibling !== null && (pt(t, o.previousSibling) || C(o.previousSibling)); )
          o = o.previousSibling;
    if (!n && C(o))
      if ($t(o.textContent))
        o = a(o, !0).getOr(o);
      else
        for (o.parentNode !== null && pt(t, o.parentNode) && (o = o.parentNode); o.nextSibling !== null && (pt(t, o.nextSibling) || C(o.nextSibling)); )
          o = o.nextSibling;
    for (; o.parentNode !== s; ) {
      const l = o.parentNode;
      if (wt(t, o) || /^(TD|TH)$/.test(l.nodeName))
        return o;
      o = l;
    }
    return o;
  }, ho = (t, e, n) => {
    const s = [], o = t.dom, r = xt(t, e, !0, n), c = xt(t, e, !1, n);
    let a;
    const l = [];
    for (let i = r; i && (l.push(i), i !== c); i = i.nextSibling)
      ;
    return b.each(l, (i) => {
      var d;
      if (wt(t, i)) {
        s.push(i), a = null;
        return;
      }
      if (o.isBlock(i) || w(i)) {
        w(i) && o.remove(i), a = null;
        return;
      }
      const f = i.nextSibling;
      if (mo.isBookmarkNode(i) && (g(f) || wt(t, f) || !f && i.parentNode === n)) {
        a = null;
        return;
      }
      a || (a = o.create("p"), (d = i.parentNode) === null || d === void 0 || d.insertBefore(a, i), s.push(a)), a.appendChild(i);
    }), s;
  }, yo = (t, e, n) => {
    const s = t.getStyle(e, "list-style-type");
    let o = n ? n["list-style-type"] : "";
    return o = o === null ? "" : o, s === o;
  }, bo = (t, e) => {
    const n = t.selection.getStart(!0), s = xt(t, e, !0, t.getBody());
    return uo(m.fromDom(s), m.fromDom(e.commonAncestorContainer)) ? e.commonAncestorContainer : n;
  }, Mt = (t, e, n) => {
    const s = t.selection.getRng();
    let o = "LI";
    const r = Z(t, bo(t, s)), c = t.dom;
    if (c.getContentEditable(t.selection.getNode()) === "false")
      return;
    e = e.toUpperCase(), e === "DL" && (o = "DT");
    const a = R(s), l = D(ho(t, s, r), t.dom.isEditable);
    b.each(l, (i) => {
      let d;
      const f = i.previousSibling, y = i.parentNode;
      ut(y) || (f && g(f) && f.nodeName === e && yo(c, f, n) ? (d = f, i = c.rename(i, o), f.appendChild(i)) : (d = c.create(e), y.insertBefore(d, i), d.appendChild(i), i = c.rename(i, o)), go(c, i, [
        "margin",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "margin-top",
        "padding",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "padding-top"
      ]), F(c, d, n), Rt(t.dom, d));
    }), t.selection.setRng(U(a));
  }, Co = (t, e) => g(t) && t.nodeName === (e == null ? void 0 : e.nodeName), Lo = (t, e, n) => {
    const s = t.getStyle(e, "list-style-type", !0), o = t.getStyle(n, "list-style-type", !0);
    return s === o;
  }, So = (t, e) => t.className === e.className, $e = (t, e, n) => Co(e, n) && Lo(t, e, n) && So(e, n), Rt = (t, e) => {
    let n, s = e.nextSibling;
    if ($e(t, e, s)) {
      const o = s;
      for (; n = o.firstChild; )
        e.appendChild(n);
      t.remove(o);
    }
    if (s = e.previousSibling, $e(t, e, s)) {
      const o = s;
      for (; n = o.lastChild; )
        e.insertBefore(n, e.firstChild);
      t.remove(o);
    }
  }, vo = (t, e, n, s) => {
    if (e.nodeName !== n) {
      const o = t.dom.rename(e, n);
      F(t.dom, o, s), A(t, H(n), o);
    } else
      F(t.dom, e, s), A(t, H(n), e);
  }, No = (t, e, n, s) => {
    if (e.classList.forEach((o, r, c) => {
      o.startsWith("tox-") && (c.remove(o), c.length === 0 && e.removeAttribute("class"));
    }), e.nodeName !== n) {
      const o = t.dom.rename(e, n);
      F(t.dom, o, s), A(t, H(n), o);
    } else
      F(t.dom, e, s), A(t, H(n), e);
  }, Do = (t, e, n, s, o) => {
    const r = g(e);
    if (r && e.nodeName === s && !xe(o) && !X(e))
      ft(t);
    else {
      Mt(t, s, o);
      const c = R(t.selection.getRng()), a = r ? [
        e,
        ...n
      ] : n, l = r && X(e) ? No : vo;
      b.each(a, (i) => {
        l(t, i, s, o);
      }), t.selection.setRng(U(c));
    }
  }, xe = (t) => "list-style-type" in t, To = (t, e, n, s) => {
    if (e !== t.getBody())
      if (e)
        if (e.nodeName === n && !xe(s) && !X(e))
          ft(t);
        else {
          const o = R(t.selection.getRng());
          X(e) && e.classList.forEach((c, a, l) => {
            c.startsWith("tox-") && (l.remove(c), l.length === 0 && e.removeAttribute("class"));
          }), F(t.dom, e, s);
          const r = t.dom.rename(e, n);
          Rt(t.dom, r), t.selection.setRng(U(o)), Mt(t, n, s), A(t, H(n), r);
        }
      else
        Mt(t, n, s), A(t, H(n), e);
  }, Ut = (t, e, n) => {
    const s = O(t);
    if ($(t, s))
      return;
    const o = hs(t), r = z(n) ? n : {};
    o.length > 0 ? Do(t, s, o, e, r) : To(t, s, e, r);
  }, Me = Et.DOM, Eo = (t, e) => {
    const n = e.parentElement;
    if (n && n.nodeName === "LI" && n.firstChild === e) {
      const s = n.previousSibling;
      s && s.nodeName === "LI" ? (s.appendChild(e), k(t, n) && Me.remove(n)) : Me.setStyle(n, "listStyleType", "none");
    }
    if (g(n)) {
      const s = n.previousSibling;
      s && s.nodeName === "LI" && s.appendChild(e);
    }
  }, Re = (t, e) => {
    const n = b.grep(t.select("ol,ul", e));
    b.each(n, (s) => {
      Eo(t, s);
    });
  }, Ue = (t, e, n, s) => {
    let o = e.startContainer;
    const r = e.startOffset;
    if (C(o) && (n ? r < o.data.length : r > 0))
      return o;
    const c = t.schema.getNonEmptyElements();
    G(o) && (o = ae.getNode(o, r));
    const a = new ue(o, s);
    n && os(t.dom, o) && a.next();
    const l = n ? a.next.bind(a) : a.prev2.bind(a);
    for (; o = l(); )
      if (o.nodeName === "LI" && !o.hasChildNodes() || c[o.nodeName] || C(o) && o.data.length > 0)
        return o;
    return null;
  }, He = (t, e) => {
    const n = e.childNodes;
    return n.length === 1 && !g(n[0]) && t.isBlock(n[0]);
  }, wo = (t) => u.from(t).map(m.fromDom).filter(Tn).exists((e) => Fn(e) && !gt(["details"], T(e))), ko = (t, e) => {
    He(t, e) && wo(e.firstChild) && t.remove(e.firstChild, !0);
  }, Fe = (t, e, n) => {
    let s;
    const o = He(t, n) ? n.firstChild : n;
    if (ko(t, e), !k(t, e, !0))
      for (; s = e.firstChild; )
        o.appendChild(s);
  }, Ht = (t, e, n) => {
    let s;
    const o = e.parentNode;
    if (!pe(t, e) || !pe(t, n))
      return;
    g(n.lastChild) && (s = n.lastChild), o === n.lastChild && w(o.previousSibling) && t.remove(o.previousSibling);
    const r = n.lastChild;
    r && w(r) && e.hasChildNodes() && t.remove(r), k(t, n, !0) && le(m.fromDom(n)), Fe(t, e, n), s && n.appendChild(s);
    const a = hn(m.fromDom(n), m.fromDom(e)) ? t.getParents(e, g, n) : [];
    t.remove(e), p(a, (l) => {
      k(t, l) && l !== t.getRoot() && t.remove(l);
    });
  }, Oo = (t, e, n) => {
    le(m.fromDom(n)), Ht(t.dom, e, n), t.selection.setCursorLocation(n, 0);
  }, Ao = (t, e, n, s) => {
    const o = t.dom;
    if (o.isEmpty(s))
      Oo(t, n, s);
    else {
      const r = R(e);
      Ht(o, n, s), t.selection.setRng(U(r));
    }
  }, Bo = (t, e, n, s) => {
    const o = R(e);
    Ht(t.dom, n, s);
    const r = U(o);
    t.selection.setRng(r);
  }, Io = (t, e) => {
    const n = t.dom, s = t.selection, o = s.getStart(), r = Bt(t, o), c = n.getParent(s.getStart(), "LI", r);
    if (c) {
      const a = c.parentElement;
      if (a === t.getBody() && k(n, a))
        return !0;
      const l = mt(s.getRng()), i = n.getParent(Ue(t, l, e, r), "LI", r), d = i && (e ? n.isChildOf(c, i) : n.isChildOf(i, c));
      if (i && i !== c && !d)
        return t.undoManager.transact(() => {
          e ? Ao(t, l, i, c) : ns(c) ? Pt(t) : Bo(t, l, c, i);
        }), !0;
      if (d && !e && i !== c)
        return t.undoManager.transact(() => {
          if (l.commonAncestorContainer.parentElement) {
            const f = R(l), y = l.commonAncestorContainer.parentElement;
            Fe(n, l.commonAncestorContainer.parentElement, i), y.remove();
            const B = U(f);
            t.selection.setRng(B);
          }
        }), !0;
      if (!i && !e && l.startOffset === 0 && l.endOffset === 0)
        return t.undoManager.transact(() => {
          ft(t);
        }), !0;
    }
    return !1;
  }, Po = (t, e, n) => {
    const s = t.getParent(e.parentNode, t.isBlock, n);
    t.remove(e), s && t.isEmpty(s) && t.remove(s);
  }, $o = (t, e) => {
    const n = t.dom, s = t.selection.getStart(), o = Bt(t, s), r = n.getParent(s, n.isBlock, o);
    if (r && n.isEmpty(r)) {
      const c = mt(t.selection.getRng()), a = n.getParent(Ue(t, c, e, o), "LI", o);
      if (a) {
        const l = (y) => gt([
          "td",
          "th",
          "caption"
        ], T(y)), i = (y) => y.dom === o, d = ce(m.fromDom(a), l, i), f = ce(m.fromDom(c.startContainer), l, i);
        return ln(d, f, ot) ? (t.undoManager.transact(() => {
          const y = a.parentNode;
          Po(n, r, o), Rt(n, y), t.selection.select(a, !0), t.selection.collapse(e);
        }), !0) : !1;
      }
    }
    return !1;
  }, xo = (t, e) => Io(t, e) || $o(t, e), _e = (t) => {
    const e = t.selection.getStart(), n = Bt(t, e);
    return t.dom.getParent(e, "LI,DT,DD", n) || At(t).length > 0;
  }, Mo = (t) => _e(t) ? (t.undoManager.transact(() => {
    t.execCommand("Delete"), Re(t.dom, t.getBody());
  }), !0) : !1, Ft = (t, e) => {
    const n = t.selection;
    return !$(t, n.getNode()) && (n.isCollapsed() ? xo(t, e) : Mo(t));
  }, Ro = (t) => {
    t.on("ExecCommand", (e) => {
      const n = e.command.toLowerCase();
      (n === "delete" || n === "forwarddelete") && _e(t) && Re(t.dom, t.getBody());
    }), t.on("keydown", (e) => {
      e.keyCode === at.BACKSPACE ? Ft(t, !1) && e.preventDefault() : e.keyCode === at.DELETE && Ft(t, !0) && e.preventDefault();
    });
  }, Uo = (t) => ({
    backspaceDelete: (e) => {
      Ft(t, e);
    }
  }), Ho = (t, e) => {
    const n = O(t);
    n === null || $(t, n) || t.undoManager.transact(() => {
      z(e.styles) && t.dom.setStyles(n, e.styles), z(e.attrs) && Nt(e.attrs, (s, o) => t.dom.setAttrib(n, o, s));
    });
  }, je = (t) => {
    const e = ht(Es(t).split("")), n = v(e, (s, o) => {
      const r = s.toUpperCase().charCodeAt(0) - 65 + 1;
      return Math.pow(26, o) * r;
    });
    return V(n, (s, o) => s + o, 0);
  }, _t = (t) => {
    if (t--, t < 0)
      return "";
    {
      const e = t % 26, n = Math.floor(t / 26), s = _t(n), o = String.fromCharCode(65 + e);
      return s + o;
    }
  }, Fo = (t) => /^[A-Z]+$/.test(t), _o = (t) => /^[a-z]+$/.test(t), jo = (t) => /^[0-9]+$/.test(t), zo = (t) => jo(t) ? 2 : Fo(t) ? 0 : _o(t) ? 1 : ks(t) ? 3 : 4, Vo = (t) => {
    switch (zo(t)) {
      case 2:
        return u.some({
          listStyleType: u.none(),
          start: t
        });
      case 0:
        return u.some({
          listStyleType: u.some("upper-alpha"),
          start: je(t).toString()
        });
      case 1:
        return u.some({
          listStyleType: u.some("lower-alpha"),
          start: je(t).toString()
        });
      case 3:
        return u.some({
          listStyleType: u.none(),
          start: ""
        });
      case 4:
        return u.none();
    }
  }, Wo = (t) => {
    const e = parseInt(t.start, 10);
    return Xt(t.listStyleType, "upper-alpha") ? _t(e) : Xt(t.listStyleType, "lower-alpha") ? _t(e).toLowerCase() : t.start;
  }, qo = (t) => {
    const e = O(t);
    !fe(e) || $(t, e) || t.windowManager.open({
      title: "List Properties",
      body: {
        type: "panel",
        items: [{
          type: "input",
          name: "start",
          label: "Start list at number",
          inputMode: "numeric"
        }]
      },
      initialData: {
        start: Wo({
          start: t.dom.getAttrib(e, "start", "1"),
          listStyleType: u.from(t.dom.getStyle(e, "list-style-type"))
        })
      },
      buttons: [
        {
          type: "cancel",
          name: "cancel",
          text: "Cancel"
        },
        {
          type: "submit",
          name: "save",
          text: "Save",
          primary: !0
        }
      ],
      onSubmit: (n) => {
        const s = n.getData();
        Vo(s.start).each((o) => {
          t.execCommand("mceListUpdate", !1, {
            attrs: { start: o.start === "1" ? "" : o.start },
            styles: { "list-style-type": o.listStyleType.getOr("") }
          });
        }), n.close();
      }
    });
  }, jt = (t, e) => () => {
    const n = O(t);
    return h(n) && n.nodeName === e;
  }, ze = (t) => {
    t.addCommand("mceListProps", () => {
      qo(t);
    });
  }, Ko = (t) => {
    t.on("BeforeExecCommand", (e) => {
      const n = e.command.toLowerCase();
      n === "indent" ? Ie(t) : n === "outdent" && Pt(t);
    }), t.addCommand("InsertUnorderedList", (e, n) => {
      Ut(t, "UL", n);
    }), t.addCommand("InsertOrderedList", (e, n) => {
      Ut(t, "OL", n);
    }), t.addCommand("InsertDefinitionList", (e, n) => {
      Ut(t, "DL", n);
    }), t.addCommand("RemoveList", () => {
      ft(t);
    }), ze(t), t.addCommand("mceListUpdate", (e, n) => {
      z(n) && Ho(t, n);
    }), t.addQueryStateHandler("InsertUnorderedList", jt(t, "UL")), t.addQueryStateHandler("InsertOrderedList", jt(t, "OL")), t.addQueryStateHandler("InsertDefinitionList", jt(t, "DL"));
  };
  var Qo = tinymce.util.Tools.resolve("tinymce.html.Node");
  const Ve = (t) => t.type === 3, We = (t) => t.length === 0, Go = (t) => {
    const e = (o, r) => {
      const c = Qo.create("li");
      p(o, (a) => c.append(a)), r ? t.insert(c, r, !0) : t.append(c);
    }, n = (o, r) => Ve(r) ? [
      ...o,
      r
    ] : !We(o) && !Ve(r) ? (e(o, r), []) : o, s = V(t.children(), n, []);
    We(s) || e(s);
  }, Zo = (t) => {
    t.on("PreInit", () => {
      const { parser: e } = t;
      e.addNodeFilter("ul,ol", (n) => p(n, Go));
    });
  }, Xo = (t) => {
    t.on("keydown", (e) => {
      e.keyCode !== at.TAB || at.metaKeyPressed(e) || t.undoManager.transact(() => {
        (e.shiftKey ? Pt(t) : Ie(t)) && e.preventDefault();
      });
    });
  }, Jo = (t) => {
    cs(t) && Xo(t), Ro(t);
  }, qe = (t, e) => (n) => {
    const s = (o) => {
      n.setActive(Se(o.parents, e)), n.setEnabled(!$(t, o.element) && t.selection.isEditable());
    };
    return n.setEnabled(t.selection.isEditable()), Ne(t, s);
  }, Yo = (t) => {
    const e = (n) => () => t.execCommand(n);
    t.hasPlugin("advlist") || (t.ui.registry.addToggleButton("numlist", {
      icon: "ordered-list",
      active: !1,
      tooltip: "Numbered list",
      onAction: e("InsertOrderedList"),
      onSetup: qe(t, "OL")
    }), t.ui.registry.addToggleButton("bullist", {
      icon: "unordered-list",
      active: !1,
      tooltip: "Bullet list",
      onAction: e("InsertUnorderedList"),
      onSetup: qe(t, "UL")
    }));
  }, tr = (t, e) => (n) => Ne(t, (o) => n.setEnabled(Se(o.parents, e) && !$(t, o.element))), er = (t) => {
    const e = {
      text: "List properties...",
      icon: "ordered-list",
      onAction: () => t.execCommand("mceListProps"),
      onSetup: tr(t, "OL")
    };
    t.ui.registry.addMenuItem("listprops", e), t.ui.registry.addContextMenu("lists", {
      update: (n) => {
        const s = O(t, n);
        return fe(s) ? ["listprops"] : [];
      }
    });
  };
  var nr = () => {
    _.add("lists", (t) => (rs(t), Zo(t), t.hasPlugin("rtc", !0) ? ze(t) : (Jo(t), Ko(t)), Yo(t), er(t), Uo(t)));
  };
  nr();
})();
const ir = /* @__PURE__ */ sr({
  __proto__: null,
  default: Ke
}, [Ke]);
export {
  ir as i
};
//# sourceMappingURL=index-DrQW0O16.js.map
