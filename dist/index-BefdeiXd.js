function YY(sa, ra) {
  for (var ca = 0; ca < ra.length; ca++) {
    const rs = ra[ca];
    if (typeof rs != "string" && !Array.isArray(rs)) {
      for (const cs in rs)
        if (cs !== "default" && !(cs in sa)) {
          const nc = Object.getOwnPropertyDescriptor(rs, cs);
          nc && Object.defineProperty(sa, cs, nc.get ? nc : {
            enumerable: !0,
            get: () => rs[cs]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(sa, Symbol.toStringTag, { value: "Module" }));
}
var xE = {};
(function() {
  const sa = Object.getPrototypeOf, ra = (t, e, o) => {
    var n;
    return o(t, e.prototype) ? !0 : ((n = t.constructor) === null || n === void 0 ? void 0 : n.name) === e.name;
  }, ca = (t) => {
    const e = typeof t;
    return t === null ? "null" : e === "object" && Array.isArray(t) ? "array" : e === "object" && ra(t, String, (o, n) => n.isPrototypeOf(o)) ? "string" : e;
  }, rs = (t) => (e) => ca(e) === t, cs = (t) => (e) => typeof e === t, nc = (t) => (e) => t === e, SE = (t, e) => Ps(t) && ra(t, e, (o, n) => sa(o) === n), Ct = rs("string"), Ps = rs("object"), cf = (t) => SE(t, Object), as = rs("array"), sc = nc(null), is = cs("boolean"), Ln = nc(void 0), Oi = (t) => t == null, wo = (t) => !Oi(t), To = cs("function"), Vn = cs("number"), aa = (t, e) => {
    if (as(t)) {
      for (let o = 0, n = t.length; o < n; ++o)
        if (!e(t[o]))
          return !1;
      return !0;
    }
    return !1;
  }, R = () => {
  }, wE = (t) => () => t(), Qu = (t, e) => (...o) => t(e.apply(null, o)), TE = (t, e) => (o) => t(e(o)), w = (t) => () => t, Tt = (t) => t, af = (t, e) => t === e;
  function Po(t, ...e) {
    return (...o) => {
      const n = e.concat(o);
      return t.apply(null, n);
    };
  }
  const ia = (t) => (e) => !t(e), td = (t) => () => {
    throw new Error(t);
  }, ed = (t) => t(), Lt = w(!1), Te = w(!0);
  class u {
    constructor(e, o) {
      this.tag = e, this.value = o;
    }
    static some(e) {
      return new u(!0, e);
    }
    static none() {
      return u.singletonNone;
    }
    fold(e, o) {
      return this.tag ? o(this.value) : e();
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
      return wo(e) ? u.some(e) : u.none();
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
  const ki = Array.prototype.slice, _E = Array.prototype.indexOf, CE = Array.prototype.push, lf = (t, e) => _E.call(t, e), uf = (t, e) => {
    const o = lf(t, e);
    return o === -1 ? u.none() : u.some(o);
  }, ie = (t, e) => lf(t, e) > -1, Xo = (t, e) => {
    for (let o = 0, n = t.length; o < n; o++) {
      const s = t[o];
      if (e(s, o))
        return !0;
    }
    return !1;
  }, od = (t, e) => {
    const o = [];
    for (let n = 0; n < t; n++)
      o.push(e(n));
    return o;
  }, df = (t, e) => {
    const o = [];
    for (let n = 0; n < t.length; n += e) {
      const s = ki.call(t, n, n + e);
      o.push(s);
    }
    return o;
  }, B = (t, e) => {
    const o = t.length, n = new Array(o);
    for (let s = 0; s < o; s++) {
      const r = t[s];
      n[s] = e(r, s);
    }
    return n;
  }, Y = (t, e) => {
    for (let o = 0, n = t.length; o < n; o++) {
      const s = t[o];
      e(s, o);
    }
  }, OE = (t, e) => {
    for (let o = t.length - 1; o >= 0; o--) {
      const n = t[o];
      e(n, o);
    }
  }, mf = (t, e) => {
    const o = [], n = [];
    for (let s = 0, r = t.length; s < r; s++) {
      const c = t[s];
      (e(c, s) ? o : n).push(c);
    }
    return {
      pass: o,
      fail: n
    };
  }, Ht = (t, e) => {
    const o = [];
    for (let n = 0, s = t.length; n < s; n++) {
      const r = t[n];
      e(r, n) && o.push(r);
    }
    return o;
  }, rc = (t, e, o) => (OE(t, (n, s) => {
    o = e(o, n, s);
  }), o), Fe = (t, e, o) => (Y(t, (n, s) => {
    o = e(o, n, s);
  }), o), kE = (t, e, o) => {
    for (let n = 0, s = t.length; n < s; n++) {
      const r = t[n];
      if (e(r, n))
        return u.some(r);
      if (o(r, n))
        break;
    }
    return u.none();
  }, Gt = (t, e) => kE(t, e, Lt), cc = (t, e) => {
    for (let o = 0, n = t.length; o < n; o++) {
      const s = t[o];
      if (e(s, o))
        return u.some(o);
    }
    return u.none();
  }, _e = (t) => {
    const e = [];
    for (let o = 0, n = t.length; o < n; ++o) {
      if (!as(t[o]))
        throw new Error("Arr.flatten item " + o + " was not an array, input: " + t);
      CE.apply(e, t[o]);
    }
    return e;
  }, le = (t, e) => _e(B(t, e)), ac = (t, e) => {
    for (let o = 0, n = t.length; o < n; ++o) {
      const s = t[o];
      if (e(s, o) !== !0)
        return !1;
    }
    return !0;
  }, la = (t) => {
    const e = ki.call(t, 0);
    return e.reverse(), e;
  }, ur = (t, e) => Ht(t, (o) => !ie(e, o)), gf = (t, e) => {
    const o = {};
    for (let n = 0, s = t.length; n < s; n++) {
      const r = t[n];
      o[String(r)] = e(r, n);
    }
    return o;
  }, EE = (t) => [t], pf = (t, e) => {
    const o = ki.call(t, 0);
    return o.sort(e), o;
  }, Ei = (t, e) => e >= 0 && e < t.length ? u.some(t[e]) : u.none(), yn = (t) => Ei(t, 0), nd = (t) => Ei(t, t.length - 1), AE = To(Array.from) ? Array.from : (t) => ki.call(t), xn = (t, e) => {
    for (let o = 0; o < t.length; o++) {
      const n = e(t[o], o);
      if (n.isSome())
        return n;
    }
    return u.none();
  }, ue = Object.keys, DE = Object.hasOwnProperty, Ve = (t, e) => {
    const o = ue(t);
    for (let n = 0, s = o.length; n < s; n++) {
      const r = o[n], c = t[r];
      e(c, r);
    }
  }, me = (t, e) => hf(t, (o, n) => ({
    k: n,
    v: e(o, n)
  })), hf = (t, e) => {
    const o = {};
    return Ve(t, (n, s) => {
      const r = e(n, s);
      o[r.k] = r.v;
    }), o;
  }, sd = (t) => (e, o) => {
    t[o] = e;
  }, ff = (t, e, o, n) => {
    Ve(t, (s, r) => {
      (e(s, r) ? o : n)(s, r);
    });
  }, ME = (t, e) => {
    const o = {}, n = {};
    return ff(t, e, sd(o), sd(n)), {
      t: o,
      f: n
    };
  }, bf = (t, e) => {
    const o = {};
    return ff(t, e, sd(o), R), o;
  }, Ai = (t, e) => {
    const o = [];
    return Ve(t, (n, s) => {
      o.push(e(n, s));
    }), o;
  }, rd = (t, e) => {
    const o = ue(t);
    for (let n = 0, s = o.length; n < s; n++) {
      const r = o[n], c = t[r];
      if (e(c, r, t))
        return u.some(c);
    }
    return u.none();
  }, cd = (t) => Ai(t, Tt), Q = (t, e) => At(t, e) ? u.from(t[e]) : u.none(), At = (t, e) => DE.call(t, e), Ko = (t, e) => At(t, e) && t[e] !== void 0 && t[e] !== null, Sn = (t, e, o = af) => t.exists((n) => o(n, e)), $E = (t, e, o = af) => Di(t, e, o).getOr(t.isNone() && e.isNone()), dr = (t) => {
    const e = [], o = (n) => {
      e.push(n);
    };
    for (let n = 0; n < t.length; n++)
      t[n].each(o);
    return e;
  }, FE = (t) => {
    const e = [];
    for (let o = 0; o < t.length; o++) {
      const n = t[o];
      if (n.isSome())
        e.push(n.getOrDie());
      else
        return u.none();
    }
    return u.some(e);
  }, Di = (t, e, o) => t.isSome() && e.isSome() ? u.some(o(t.getOrDie(), e.getOrDie())) : u.none(), BE = (t, e, o, n) => t.isSome() && e.isSome() && o.isSome() ? u.some(n(t.getOrDie(), e.getOrDie(), o.getOrDie())) : u.none(), vf = (t, e) => t != null ? u.some(e(t)) : u.none(), ls = (t, e) => t ? u.some(e) : u.none(), IE = (t, e) => t + e, RE = (t, e) => t.substring(e), yf = (t, e, o) => e === "" || t.length >= e.length && t.substr(o, o + e.length) === e, xf = (t, e) => LE(t, e) ? RE(t, e.length) : t, PE = (t, e) => Mi(t, e) ? t : IE(t, e), so = (t, e, o = 0, n) => {
    const s = t.indexOf(e, o);
    return s !== -1 ? Ln(n) ? !0 : s + e.length <= n : !1;
  }, LE = (t, e) => yf(t, e, 0), Mi = (t, e) => yf(t, e, t.length - e.length), ad = ((t) => (e) => e.replace(t, ""))(/^\s+|\s+$/g), $i = (t) => t.length > 0, Sf = (t) => !$i(t), ua = (t) => t.style !== void 0 && To(t.style.getPropertyValue), VE = (t, e) => {
    const n = (e || document).createElement("div");
    if (n.innerHTML = t, !n.hasChildNodes() || n.childNodes.length > 1) {
      const s = "HTML does not have a single root node";
      throw console.error(s, t), new Error(s);
    }
    return da(n.childNodes[0]);
  }, HE = (t, e) => {
    const n = (e || document).createElement(t);
    return da(n);
  }, NE = (t, e) => {
    const n = (e || document).createTextNode(t);
    return da(n);
  }, da = (t) => {
    if (t == null)
      throw new Error("Node cannot be null or undefined");
    return { dom: t };
  }, F = {
    fromHtml: VE,
    fromTag: HE,
    fromText: NE,
    fromDom: da,
    fromPoint: (t, e, o) => u.from(t.dom.elementFromPoint(e, o)).map(da)
  }, zE = typeof window < "u" ? window : Function("return this;")(), UE = (t, e) => {
    let o = e ?? zE;
    for (let n = 0; n < t.length && o !== void 0 && o !== null; ++n)
      o = o[t[n]];
    return o;
  }, wf = (t, e) => {
    const o = t.split(".");
    return UE(o, e);
  }, WE = (t, e) => wf(t, e), GE = (t, e) => {
    const o = WE(t, e);
    if (o == null)
      throw new Error(t + " not available on this browser");
    return o;
  }, jE = Object.getPrototypeOf, YE = (t) => GE("HTMLElement", t), XE = (t) => {
    const e = wf("ownerDocument.defaultView", t);
    return Ps(t) && (YE(e).prototype.isPrototypeOf(t) || /^HTML\w*Element$/.test(jE(t).constructor.name));
  }, Tf = 9, _f = 11, id = 1, KE = 3, us = (t) => t.dom.nodeName.toLowerCase(), qE = (t) => t.dom.nodeType, Fi = (t) => (e) => qE(e) === t, Cf = (t) => _o(t) && XE(t.dom), _o = Fi(id), mr = Fi(KE), JE = Fi(Tf), ZE = Fi(_f), Of = (t) => (e) => _o(e) && us(e) === t, ld = (t, e) => {
    const o = t.dom;
    if (o.nodeType !== id)
      return !1;
    {
      const n = o;
      if (n.matches !== void 0)
        return n.matches(e);
      if (n.msMatchesSelector !== void 0)
        return n.msMatchesSelector(e);
      if (n.webkitMatchesSelector !== void 0)
        return n.webkitMatchesSelector(e);
      if (n.mozMatchesSelector !== void 0)
        return n.mozMatchesSelector(e);
      throw new Error("Browser lacks native selectors");
    }
  }, kf = (t) => t.nodeType !== id && t.nodeType !== Tf && t.nodeType !== _f || t.childElementCount === 0, QE = (t, e) => {
    const o = e === void 0 ? document : e.dom;
    return kf(o) ? [] : B(o.querySelectorAll(t), F.fromDom);
  }, tA = (t, e) => {
    const o = e === void 0 ? document : e.dom;
    return kf(o) ? u.none() : u.from(o.querySelector(t)).map(F.fromDom);
  }, Bt = (t, e) => t.dom === e.dom, Bi = (t, e) => {
    const o = t.dom, n = e.dom;
    return o === n ? !1 : o.contains(n);
  }, wn = (t) => F.fromDom(t.dom.ownerDocument), Ii = (t) => JE(t) ? t : wn(t), ud = (t) => F.fromDom(Ii(t).dom.documentElement), ma = (t) => F.fromDom(Ii(t).dom.defaultView), Tn = (t) => u.from(t.dom.parentNode).map(F.fromDom), eA = (t) => Tn(t), ds = (t) => u.from(t.dom.parentElement).map(F.fromDom), oA = (t, e) => {
    const o = To(e) ? e : Lt;
    let n = t.dom;
    const s = [];
    for (; n.parentNode !== null && n.parentNode !== void 0; ) {
      const r = n.parentNode, c = F.fromDom(r);
      if (s.push(c), o(c) === !0)
        break;
      n = r;
    }
    return s;
  }, Ef = (t) => u.from(t.dom.offsetParent).map(F.fromDom), nA = (t) => u.from(t.dom.nextSibling).map(F.fromDom), Hn = (t) => B(t.dom.childNodes, F.fromDom), gr = (t, e) => {
    const o = t.dom.childNodes;
    return u.from(o[e]).map(F.fromDom);
  }, dd = (t) => gr(t, 0), Af = (t, e) => ({
    element: t,
    offset: e
  }), Df = (t, e) => {
    const o = Hn(t);
    return o.length > 0 && e < o.length ? Af(o[e], 0) : Af(t, e);
  }, md = (t) => ZE(t) && wo(t.dom.host), Mf = To(Element.prototype.attachShadow) && To(Node.prototype.getRootNode), sA = w(Mf), qe = Mf ? (t) => F.fromDom(t.dom.getRootNode()) : Ii, ic = (t) => md(t) ? t : F.fromDom(Ii(t).dom.body), rA = (t) => gd(t).isSome(), gd = (t) => {
    const e = qe(t);
    return md(e) ? u.some(e) : u.none();
  }, $f = (t) => F.fromDom(t.dom.host), cA = (t) => {
    if (sA() && wo(t.target)) {
      const e = F.fromDom(t.target);
      if (_o(e) && aA(e) && t.composed && t.composedPath) {
        const o = t.composedPath();
        if (o)
          return yn(o);
      }
    }
    return u.from(t.target);
  }, aA = (t) => wo(t.dom.shadowRoot), qo = (t) => {
    const e = mr(t) ? t.dom.parentNode : t.dom;
    if (e == null || e.ownerDocument === null)
      return !1;
    const o = e.ownerDocument;
    return gd(F.fromDom(e)).fold(() => o.body.contains(e), TE(qo, $f));
  }, Nn = () => iA(F.fromDom(document)), iA = (t) => {
    const e = t.dom.body;
    if (e == null)
      throw new Error("Body is not available yet");
    return F.fromDom(e);
  }, Ff = (t, e, o) => {
    if (Ct(o) || is(o) || Vn(o))
      t.setAttribute(e, o + "");
    else
      throw console.error("Invalid call to Attribute.set. Key ", e, ":: Value ", o, ":: Element ", t), new Error("Attribute value was not simple");
  }, st = (t, e, o) => {
    Ff(t.dom, e, o);
  }, ga = (t, e) => {
    const o = t.dom;
    Ve(e, (n, s) => {
      Ff(o, s, n);
    });
  }, He = (t, e) => {
    const o = t.dom.getAttribute(e);
    return o === null ? void 0 : o;
  }, Je = (t, e) => u.from(He(t, e)), Bf = (t, e) => {
    const o = t.dom;
    return o && o.hasAttribute ? o.hasAttribute(e) : !1;
  }, Qt = (t, e) => {
    t.dom.removeAttribute(e);
  }, lA = (t) => Fe(t.dom.attributes, (e, o) => (e[o.name] = o.value, e), {}), pd = (t, e, o) => {
    if (!Ct(o))
      throw console.error("Invalid call to CSS.set. Property ", e, ":: Value ", o, ":: Element ", t), new Error("CSS value must be a string: " + o);
    ua(t) && t.style.setProperty(e, o);
  }, If = (t, e) => {
    ua(t) && t.style.removeProperty(e);
  }, rt = (t, e, o) => {
    const n = t.dom;
    pd(n, e, o);
  }, pr = (t, e) => {
    const o = t.dom;
    Ve(e, (n, s) => {
      pd(o, s, n);
    });
  }, Ri = (t, e) => {
    const o = t.dom;
    Ve(e, (n, s) => {
      n.fold(() => {
        If(o, s);
      }, (r) => {
        pd(o, s, r);
      });
    });
  }, Ne = (t, e) => {
    const o = t.dom, s = window.getComputedStyle(o).getPropertyValue(e);
    return s === "" && !qo(t) ? Rf(o, e) : s;
  }, Rf = (t, e) => ua(t) ? t.style.getPropertyValue(e) : "", Ce = (t, e) => {
    const o = t.dom, n = Rf(o, e);
    return u.from(n).filter((s) => s.length > 0);
  }, Pf = (t) => {
    const e = {}, o = t.dom;
    if (ua(o))
      for (let n = 0; n < o.style.length; n++) {
        const s = o.style.item(n);
        e[s] = o.style[s];
      }
    return e;
  }, Lf = (t, e, o) => {
    const n = F.fromTag(t);
    return rt(n, e, o), Ce(n, e).isSome();
  }, kt = (t, e) => {
    const o = t.dom;
    If(o, e), Sn(Je(t, "style").map(ad), "") && Qt(t, "style");
  }, pa = (t) => t.dom.offsetWidth, Vf = (t, e) => {
    const o = (a, i) => {
      if (!Vn(i) && !i.match(/^[0-9]+$/))
        throw new Error(t + ".set accepts only positive integer values. Value was " + i);
      const l = a.dom;
      ua(l) && (l.style[t] = i + "px");
    }, n = (a) => {
      const i = e(a);
      if (i <= 0 || i === null) {
        const l = Ne(a, t);
        return parseFloat(l) || 0;
      }
      return i;
    }, s = n, r = (a, i) => Fe(i, (l, d) => {
      const m = Ne(a, d), g = m === void 0 ? 0 : parseInt(m, 10);
      return isNaN(g) ? l : l + g;
    }, 0);
    return {
      set: o,
      get: n,
      getOuter: s,
      aggregate: r,
      max: (a, i, l) => {
        const d = r(a, l);
        return i > d ? i - d : 0;
      }
    };
  }, hd = Vf("height", (t) => {
    const e = t.dom;
    return qo(t) ? e.getBoundingClientRect().height : e.offsetHeight;
  }), ge = (t) => hd.get(t), Ls = (t) => hd.getOuter(t), uA = (t, e) => {
    const o = [
      "margin-top",
      "border-top-width",
      "padding-top",
      "padding-bottom",
      "border-bottom-width",
      "margin-bottom"
    ], n = hd.max(t, e, o);
    rt(t, "max-height", n + "px");
  }, Hf = (t, e) => ({
    left: t,
    top: e,
    translate: (n, s) => Hf(t + n, e + s)
  }), Ut = Hf, dA = (t) => {
    const e = t.getBoundingClientRect();
    return Ut(e.left, e.top);
  }, Pi = (t, e) => t !== void 0 ? t : e !== void 0 ? e : 0, Jo = (t) => {
    const e = t.dom.ownerDocument, o = e.body, n = e.defaultView, s = e.documentElement;
    if (o === t.dom)
      return Ut(o.offsetLeft, o.offsetTop);
    const r = Pi(n == null ? void 0 : n.pageYOffset, s.scrollTop), c = Pi(n == null ? void 0 : n.pageXOffset, s.scrollLeft), a = Pi(s.clientTop, o.clientTop), i = Pi(s.clientLeft, o.clientLeft);
    return fd(t).translate(c - i, r - a);
  }, fd = (t) => {
    const e = t.dom, n = e.ownerDocument.body;
    return n === e ? Ut(n.offsetLeft, n.offsetTop) : qo(t) ? dA(e) : Ut(0, 0);
  }, Li = Vf("width", (t) => t.dom.offsetWidth), mA = (t, e) => Li.set(t, e), ro = (t) => Li.get(t), hr = (t) => Li.getOuter(t), gA = (t, e) => {
    const o = [
      "margin-left",
      "border-left-width",
      "padding-left",
      "padding-right",
      "border-right-width",
      "margin-right"
    ], n = Li.max(t, e, o);
    rt(t, "max-width", n + "px");
  }, Vs = (t) => {
    let e = !1, o;
    return (...n) => (e || (e = !0, o = t.apply(null, n)), o);
  }, pA = (t, e, o, n) => {
    const s = t.isiOS() && /ipad/i.test(o) === !0, r = t.isiOS() && !s, c = t.isiOS() || t.isAndroid(), a = c || n("(pointer:coarse)"), i = s || !r && c && n("(min-device-width:768px)"), l = r || c && !i, d = e.isSafari() && t.isiOS() && /safari/i.test(o) === !1, m = !l && !i && !d;
    return {
      isiPad: w(s),
      isiPhone: w(r),
      isTablet: w(i),
      isPhone: w(l),
      isTouch: w(a),
      isAndroid: t.isAndroid,
      isiOS: t.isiOS,
      isWebView: w(d),
      isDesktop: w(m)
    };
  }, hA = (t, e) => {
    for (let o = 0; o < t.length; o++) {
      const n = t[o];
      if (n.test(e))
        return n;
    }
  }, fA = (t, e) => {
    const o = hA(t, e);
    if (!o)
      return {
        major: 0,
        minor: 0
      };
    const n = (s) => Number(e.replace(o, "$" + s));
    return bd(n(1), n(2));
  }, bA = (t, e) => {
    const o = String(e).toLowerCase();
    return t.length === 0 ? Nf() : fA(t, o);
  }, Nf = () => bd(0, 0), bd = (t, e) => ({
    major: t,
    minor: e
  }), ha = {
    nu: bd,
    detect: bA,
    unknown: Nf
  }, vA = (t, e) => xn(e.brands, (o) => {
    const n = o.brand.toLowerCase();
    return Gt(t, (s) => {
      var r;
      return n === ((r = s.brand) === null || r === void 0 ? void 0 : r.toLowerCase());
    }).map((s) => ({
      current: s.name,
      version: ha.nu(parseInt(o.version, 10), 0)
    }));
  }), zf = (t, e) => {
    const o = String(e).toLowerCase();
    return Gt(t, (n) => n.search(o));
  }, yA = (t, e) => zf(t, e).map((o) => {
    const n = ha.detect(o.versionRegexes, e);
    return {
      current: o.name,
      version: n
    };
  }), xA = (t, e) => zf(t, e).map((o) => {
    const n = ha.detect(o.versionRegexes, e);
    return {
      current: o.name,
      version: n
    };
  }), vd = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, ms = (t) => (e) => so(e, t), SA = [
    {
      name: "Edge",
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: (t) => so(t, "edge/") && so(t, "chrome") && so(t, "safari") && so(t, "applewebkit")
    },
    {
      name: "Chromium",
      brand: "Chromium",
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        vd
      ],
      search: (t) => so(t, "chrome") && !so(t, "chromeframe")
    },
    {
      name: "IE",
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: (t) => so(t, "msie") || so(t, "trident")
    },
    {
      name: "Opera",
      versionRegexes: [
        vd,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: ms("opera")
    },
    {
      name: "Firefox",
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: ms("firefox")
    },
    {
      name: "Safari",
      versionRegexes: [
        vd,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: (t) => (so(t, "safari") || so(t, "mobile/")) && so(t, "applewebkit")
    }
  ], wA = [
    {
      name: "Windows",
      search: ms("win"),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: "iOS",
      search: (t) => so(t, "iphone") || so(t, "ipad"),
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: "Android",
      search: ms("android"),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: "macOS",
      search: ms("mac os x"),
      versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: "Linux",
      search: ms("linux"),
      versionRegexes: []
    },
    {
      name: "Solaris",
      search: ms("sunos"),
      versionRegexes: []
    },
    {
      name: "FreeBSD",
      search: ms("freebsd"),
      versionRegexes: []
    },
    {
      name: "ChromeOS",
      search: ms("cros"),
      versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
    }
  ], Uf = {
    browsers: w(SA),
    oses: w(wA)
  }, TA = "Edge", _A = "Chromium", CA = "IE", OA = "Opera", kA = "Firefox", EA = "Safari", AA = () => Wf({
    current: void 0,
    version: ha.unknown()
  }), Wf = (t) => {
    const e = t.current, o = t.version, n = (s) => () => e === s;
    return {
      current: e,
      version: o,
      isEdge: n(TA),
      isChromium: n(_A),
      isIE: n(CA),
      isOpera: n(OA),
      isFirefox: n(kA),
      isSafari: n(EA)
    };
  }, Gf = {
    unknown: AA,
    nu: Wf
  }, DA = "Windows", MA = "iOS", $A = "Android", FA = "Linux", BA = "macOS", IA = "Solaris", RA = "FreeBSD", PA = "ChromeOS", LA = () => jf({
    current: void 0,
    version: ha.unknown()
  }), jf = (t) => {
    const e = t.current, o = t.version, n = (s) => () => e === s;
    return {
      current: e,
      version: o,
      isWindows: n(DA),
      isiOS: n(MA),
      isAndroid: n($A),
      isMacOS: n(BA),
      isLinux: n(FA),
      isSolaris: n(IA),
      isFreeBSD: n(RA),
      isChromeOS: n(PA)
    };
  }, Yf = {
    unknown: LA,
    nu: jf
  }, VA = { detect: (t, e, o) => {
    const n = Uf.browsers(), s = Uf.oses(), r = e.bind((i) => vA(n, i)).orThunk(() => yA(n, t)).fold(Gf.unknown, Gf.nu), c = xA(s, t).fold(Yf.unknown, Yf.nu), a = pA(c, r, t, o);
    return {
      browser: r,
      os: c,
      deviceType: a
    };
  } }, HA = (t) => window.matchMedia(t).matches;
  let NA = Vs(() => VA.detect(navigator.userAgent, u.from(navigator.userAgentData), HA));
  const gs = () => NA(), zA = (t, e, o, n, s, r, c) => ({
    target: t,
    x: e,
    y: o,
    stop: n,
    prevent: s,
    kill: r,
    raw: c
  }), Xf = (t) => {
    const e = F.fromDom(cA(t).getOr(t.target)), o = () => t.stopPropagation(), n = () => t.preventDefault(), s = Qu(n, o);
    return zA(e, t.clientX, t.clientY, o, n, s, t);
  }, UA = (t, e) => (o) => {
    t(o) && e(Xf(o));
  }, Kf = (t, e, o, n, s) => {
    const r = UA(o, n);
    return t.dom.addEventListener(e, r, s), { unbind: Po(jA, t, e, r, s) };
  }, WA = (t, e, o, n) => Kf(t, e, o, n, !1), GA = (t, e, o, n) => Kf(t, e, o, n, !0), jA = (t, e, o, n) => {
    t.dom.removeEventListener(e, o, n);
  }, fa = (t, e) => {
    Tn(t).each((n) => {
      n.dom.insertBefore(e.dom, t.dom);
    });
  }, YA = (t, e) => {
    nA(t).fold(() => {
      Tn(t).each((s) => {
        Zo(s, e);
      });
    }, (n) => {
      fa(n, e);
    });
  }, XA = (t, e) => {
    dd(t).fold(() => {
      Zo(t, e);
    }, (n) => {
      t.dom.insertBefore(e.dom, n.dom);
    });
  }, Zo = (t, e) => {
    t.dom.appendChild(e.dom);
  }, KA = (t, e, o) => {
    gr(t, o).fold(() => {
      Zo(t, e);
    }, (n) => {
      fa(n, e);
    });
  }, qf = (t, e) => {
    Y(e, (o) => {
      Zo(t, o);
    });
  }, yd = (t) => {
    t.dom.textContent = "", Y(Hn(t), (e) => {
      ps(e);
    });
  }, ps = (t) => {
    const e = t.dom;
    e.parentNode !== null && e.parentNode.removeChild(e);
  }, Qo = (t) => {
    const e = t !== void 0 ? t.dom : document, o = e.body.scrollLeft || e.documentElement.scrollLeft, n = e.body.scrollTop || e.documentElement.scrollTop;
    return Ut(o, n);
  }, Jf = (t, e, o) => {
    const s = (o !== void 0 ? o.dom : document).defaultView;
    s && s.scrollTo(t, e);
  }, qA = (t) => {
    const e = t === void 0 ? window : t;
    return gs().browser.isFirefox() ? u.none() : u.from(e.visualViewport);
  }, Zf = (t, e, o, n) => ({
    x: t,
    y: e,
    width: o,
    height: n,
    right: t + o,
    bottom: e + n
  }), Qf = (t) => {
    const e = t === void 0 ? window : t, o = e.document, n = Qo(F.fromDom(o));
    return qA(e).fold(() => {
      const s = e.document.documentElement, r = s.clientWidth, c = s.clientHeight;
      return Zf(n.left, n.top, r, c);
    }, (s) => Zf(Math.max(s.pageLeft, n.left), Math.max(s.pageTop, n.top), s.width, s.height));
  }, xd = () => F.fromDom(document), tb = (t, e) => t.view(e).fold(w([]), (n) => {
    const s = t.owner(n), r = tb(t, s);
    return [n].concat(r);
  }), JA = (t, e) => {
    const o = e.owner(t), n = tb(e, o);
    return u.some(n);
  };
  var ZA = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    view: (t) => {
      var e;
      return (t.dom === document ? u.none() : u.from((e = t.dom.defaultView) === null || e === void 0 ? void 0 : e.frameElement)).map(F.fromDom);
    },
    owner: (t) => wn(t)
  });
  const Sd = (t) => {
    const e = xd(), o = Qo(e);
    return JA(t, ZA).fold(Po(Jo, t), (s) => {
      const r = fd(t), c = rc(s, (a, i) => {
        const l = fd(i);
        return {
          left: a.left + l.left,
          top: a.top + l.top
        };
      }, {
        left: 0,
        top: 0
      });
      return Ut(c.left + r.left + o.left, c.top + r.top + o.top);
    });
  }, QA = (t, e, o) => ({
    point: t,
    width: e,
    height: o
  }), tD = (t, e, o, n) => ({
    x: t,
    y: e,
    width: o,
    height: n
  }), pe = (t, e, o, n) => ({
    x: t,
    y: e,
    width: o,
    height: n,
    right: t + o,
    bottom: e + n
  }), Be = (t) => {
    const e = Jo(t), o = hr(t), n = Ls(t);
    return pe(e.left, e.top, o, n);
  }, fr = (t) => {
    const e = Sd(t), o = hr(t), n = Ls(t);
    return pe(e.left, e.top, o, n);
  }, wd = (t, e) => {
    const o = Math.max(t.x, e.x), n = Math.max(t.y, e.y), s = Math.min(t.right, e.right), r = Math.min(t.bottom, e.bottom), c = s - o, a = r - n;
    return pe(o, n, c, a);
  }, eD = (t, e) => Fe(e, (o, n) => wd(o, n), t), Ze = () => Qf(window);
  var oD = tinymce.util.Tools.resolve("tinymce.ThemeManager");
  const eb = (t) => {
    const e = (r) => r(t), o = w(t), n = () => s, s = {
      tag: !0,
      inner: t,
      fold: (r, c) => c(t),
      isValue: Te,
      isError: Lt,
      map: (r) => ut.value(r(t)),
      mapError: n,
      bind: e,
      exists: e,
      forall: e,
      getOr: o,
      or: n,
      getOrThunk: o,
      orThunk: n,
      getOrDie: o,
      each: (r) => {
        r(t);
      },
      toOptional: () => u.some(t)
    };
    return s;
  }, ob = (t) => {
    const e = () => o, o = {
      tag: !1,
      inner: t,
      fold: (n, s) => n(t),
      isValue: Lt,
      isError: Te,
      map: e,
      mapError: (n) => ut.error(n(t)),
      bind: e,
      exists: Lt,
      forall: Te,
      getOr: Tt,
      or: Tt,
      getOrThunk: ed,
      orThunk: ed,
      getOrDie: td(String(t)),
      each: R,
      toOptional: u.none
    };
    return o;
  }, ut = {
    value: eb,
    error: ob,
    fromOption: (t, e) => t.fold(() => ob(e), eb)
  };
  var Lo;
  (function(t) {
    t[t.Error = 0] = "Error", t[t.Value = 1] = "Value";
  })(Lo || (Lo = {}));
  const Td = (t, e, o) => t.stype === Lo.Error ? e(t.serror) : o(t.svalue), nD = (t) => {
    const e = [], o = [];
    return Y(t, (n) => {
      Td(n, (s) => o.push(s), (s) => e.push(s));
    }), {
      values: e,
      errors: o
    };
  }, sD = (t, e) => t.stype === Lo.Error ? {
    stype: Lo.Error,
    serror: e(t.serror)
  } : t, rD = (t, e) => t.stype === Lo.Value ? {
    stype: Lo.Value,
    svalue: e(t.svalue)
  } : t, cD = (t, e) => t.stype === Lo.Value ? e(t.svalue) : t, aD = (t, e) => t.stype === Lo.Error ? e(t.serror) : t, nb = (t) => ({
    stype: Lo.Value,
    svalue: t
  }), sb = (t) => ({
    stype: Lo.Error,
    serror: t
  }), ne = {
    fromResult: (t) => t.fold(sb, nb),
    toResult: (t) => Td(t, ut.error, ut.value),
    svalue: nb,
    partition: nD,
    serror: sb,
    bind: cD,
    bindError: aD,
    map: rD,
    mapError: sD,
    fold: Td
  }, rb = (t, e, o, n) => ({
    tag: "field",
    key: t,
    newKey: e,
    presence: o,
    prop: n
  }), iD = (t, e) => ({
    tag: "custom",
    newKey: t,
    instantiator: e
  }), _d = (t, e, o) => {
    switch (t.tag) {
      case "field":
        return e(t.key, t.newKey, t.presence, t.prop);
      case "custom":
        return o(t.newKey, t.instantiator);
    }
  }, lD = (t, e) => e, uD = (t, e) => cf(t) && cf(e) ? jt(t, e) : e, cb = (t) => (...e) => {
    if (e.length === 0)
      throw new Error("Can't merge zero objects");
    const o = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      for (const r in s)
        At(s, r) && (o[r] = t(o[r], s[r]));
    }
    return o;
  }, jt = cb(uD), ab = cb(lD), _n = () => ({
    tag: "required",
    process: {}
  }), Vi = (t) => ({
    tag: "defaultedThunk",
    process: t
  }), Hi = (t) => Vi(w(t)), Cd = () => ({
    tag: "option",
    process: {}
  }), Od = (t) => ({
    tag: "mergeWithThunk",
    process: t
  }), dD = (t) => Od(w(t)), mD = (t, e) => t.length > 0 ? ne.svalue(jt(e, ab.apply(void 0, t))) : ne.svalue(e), ib = (t) => Qu(ne.serror, _e)(t), lb = {
    consolidateObj: (t, e) => {
      const o = ne.partition(t);
      return o.errors.length > 0 ? ib(o.errors) : mD(o.values, e);
    },
    consolidateArr: (t) => {
      const e = ne.partition(t);
      return e.errors.length > 0 ? ib(e.errors) : ne.svalue(e.values);
    }
  }, kd = (t) => Ps(t) && ue(t).length > 100 ? " removed due to size" : JSON.stringify(t, null, 2), gD = (t) => {
    const e = t.length > 10 ? t.slice(0, 10).concat([{
      path: [],
      getErrorInfo: w("... (only showing first ten failures)")
    }]) : t;
    return B(e, (o) => "Failed path: (" + o.path.join(" > ") + `)
` + o.getErrorInfo());
  }, ba = (t, e) => ne.serror([{
    path: t,
    getErrorInfo: e
  }]), pD = (t, e, o) => ba(t, () => 'Could not find valid *required* value for "' + e + '" in ' + kd(o)), hD = (t, e) => ba(t, () => 'Choice schema did not contain choice key: "' + e + '"'), fD = (t, e, o) => ba(t, () => 'The chosen schema: "' + o + '" did not exist in branches: ' + kd(e)), bD = (t, e) => ba(t, () => "There are unsupported fields: [" + e.join(", ") + "] specified"), vD = (t, e) => ba(t, w(e)), lc = (t) => {
    const e = (n, s) => ne.bindError(t(s), (r) => vD(n, r)), o = w("val");
    return {
      extract: e,
      toString: o
    };
  }, ub = lc(ne.svalue), yD = (t, e, o, n) => Q(e, o).fold(() => pD(t, o, e), n), db = (t, e, o, n) => {
    const s = Q(t, e).getOrThunk(() => o(t));
    return n(s);
  }, xD = (t, e, o) => o(Q(t, e)), SD = (t, e, o, n) => {
    const s = Q(t, e).map((r) => r === !0 ? o(t) : r);
    return n(s);
  }, wD = (t, e, o, n, s) => {
    const r = (a) => s.extract(e.concat([n]), a), c = (a) => a.fold(() => ne.svalue(u.none()), (i) => {
      const l = s.extract(e.concat([n]), i);
      return ne.map(l, u.some);
    });
    switch (t.tag) {
      case "required":
        return yD(e, o, n, r);
      case "defaultedThunk":
        return db(o, n, t.process, r);
      case "option":
        return xD(o, n, c);
      case "defaultedOptionThunk":
        return SD(o, n, t.process, c);
      case "mergeWithThunk":
        return db(o, n, w({}), (a) => {
          const i = jt(t.process(o), a);
          return r(i);
        });
    }
  }, TD = (t, e, o) => {
    const n = {}, s = [];
    for (const r of o)
      _d(r, (c, a, i, l) => {
        const d = wD(i, t, e, c, l);
        ne.fold(d, (m) => {
          s.push(...m);
        }, (m) => {
          n[a] = m;
        });
      }, (c, a) => {
        n[c] = a(e);
      });
    return s.length > 0 ? ne.serror(s) : ne.svalue(n);
  }, mb = (t) => ({
    extract: (n, s) => t().extract(n, s),
    toString: () => t().toString()
  }), _D = (t) => ue(bf(t, wo)), Co = (t) => {
    const e = X(t), o = rc(t, (s, r) => _d(r, (c) => jt(s, { [c]: !0 }), w(s)), {});
    return {
      extract: (s, r) => {
        const c = is(r) ? [] : _D(r), a = Ht(c, (i) => !Ko(o, i));
        return a.length === 0 ? e.extract(s, r) : bD(s, a);
      },
      toString: e.toString
    };
  }, X = (t) => ({
    extract: (n, s) => TD(n, s, t),
    toString: () => `obj{
` + B(t, (s) => _d(s, (r, c, a, i) => r + " -> " + i.toString(), (r, c) => "state(" + r + ")")).join(`
`) + "}"
  }), Hs = (t) => ({
    extract: (n, s) => {
      const r = B(s, (c, a) => t.extract(n.concat(["[" + a + "]"]), c));
      return lb.consolidateArr(r);
    },
    toString: () => "array(" + t.toString() + ")"
  }), Ed = (t, e) => {
    const o = e !== void 0 ? e : Tt;
    return {
      extract: (r, c) => {
        const a = [];
        for (const i of t) {
          const l = i.extract(r, c);
          if (l.stype === Lo.Value)
            return {
              stype: Lo.Value,
              svalue: o(l.svalue)
            };
          a.push(l);
        }
        return lb.consolidateArr(a);
      },
      toString: () => "oneOf(" + B(t, (r) => r.toString()).join(", ") + ")"
    };
  }, CD = (t, e) => {
    const o = (r, c) => Hs(lc(t)).extract(r, c);
    return {
      extract: (r, c) => {
        const a = ue(c), i = o(r, a);
        return ne.bind(i, (l) => {
          const d = B(l, (m) => rb(m, m, _n(), e));
          return X(d).extract(r, c);
        });
      },
      toString: () => "setOf(" + e.toString() + ")"
    };
  }, OD = (t, e) => {
    const o = Vs(e);
    return {
      extract: (r, c) => o().extract(r, c),
      toString: () => o().toString()
    };
  }, Ad = Qu(Hs, X), Cn = w(ub), Ni = (t, e) => lc((o) => {
    const n = typeof o;
    return t(o) ? ne.svalue(o) : ne.serror(`Expected type: ${e} but got: ${n}`);
  }), zi = Ni(Vn, "number"), ve = Ni(Ct, "string"), va = Ni(is, "boolean"), Dd = Ni(To, "function"), gb = (t) => {
    if (Object(t) !== t)
      return !0;
    switch ({}.toString.call(t).slice(8, -1)) {
      case "Boolean":
      case "Number":
      case "String":
      case "Date":
      case "RegExp":
      case "Blob":
      case "FileList":
      case "ImageData":
      case "ImageBitmap":
      case "ArrayBuffer":
        return !0;
      case "Array":
      case "Object":
        return Object.keys(t).every((e) => gb(t[e]));
      default:
        return !1;
    }
  }, kD = lc((t) => gb(t) ? ne.svalue(t) : ne.serror("Expected value to be acceptable for sending via postMessage")), ED = (t, e, o, n) => Q(o, n).fold(() => fD(t, o, n), (r) => r.extract(t.concat(["branch: " + n]), e)), uc = (t, e) => ({
    extract: (s, r) => Q(r, t).fold(() => hD(s, t), (a) => ED(s, r, e, a)),
    toString: () => "chooseOn(" + t + "). Possible values: " + ue(e)
  }), AD = () => Hs(ub), ya = (t) => lc((e) => t(e).fold(ne.serror, ne.svalue)), pb = (t, e) => CD((o) => ne.fromResult(t(o)), e), DD = (t, e, o) => {
    const n = e.extract([t], o);
    return ne.mapError(n, (s) => ({
      input: o,
      errors: s
    }));
  }, Yt = (t, e, o) => ne.toResult(DD(t, e, o)), On = (t) => t.fold((e) => {
    throw new Error(dc(e));
  }, Tt), co = (t, e, o) => On(Yt(t, e, o)), dc = (t) => `Errors: 
` + gD(t.errors).join(`
`) + `

Input object: ` + kd(t.input), mo = (t, e) => uc(t, me(e, X)), hb = (t, e) => OD(t, e), Oe = rb, Qe = iD, Md = (t) => ya((e) => ie(t, e) ? ut.value(e) : ut.error(`Unsupported value: "${e}", choose one of "${t.join(", ")}".`)), k = (t) => Oe(t, t, _n(), Cn()), Oo = (t, e) => Oe(t, t, _n(), e), MD = (t) => Oo(t, zi), se = (t) => Oo(t, ve), hs = (t, e) => Oe(t, t, _n(), Md(e)), $D = (t) => Oo(t, va), tn = (t) => Oo(t, Dd), FD = (t, e) => Oe(t, t, Cd(), lc((o) => ne.serror("The field: " + t + " is forbidden. " + e))), Ns = (t, e) => Oe(t, t, _n(), X(e)), fb = (t, e) => Oe(t, t, _n(), Ad(e)), ko = (t, e) => Oe(t, t, _n(), Hs(e)), _t = (t) => Oe(t, t, Cd(), Cn()), zn = (t, e) => Oe(t, t, Cd(), e), xa = (t) => zn(t, zi), ze = (t) => zn(t, ve), bb = (t, e) => zn(t, Md(e)), br = (t) => zn(t, Dd), vb = (t, e) => zn(t, Hs(e)), Eo = (t, e) => zn(t, X(e)), BD = (t, e) => zn(t, Co(e)), S = (t, e) => Oe(t, t, Hi(e), Cn()), Vo = (t, e, o) => Oe(t, t, Hi(e), o), $d = (t, e) => Vo(t, e, zi), fs = (t, e) => Vo(t, e, ve), Un = (t, e, o) => Vo(t, e, Md(o)), Ie = (t, e) => Vo(t, e, va), he = (t, e) => Vo(t, e, Dd), ID = (t, e) => Vo(t, e, kD), vr = (t, e, o) => Vo(t, e, Hs(o)), Fd = (t, e, o) => Vo(t, e, X(o)), j = (t) => {
    let e = t;
    return {
      get: () => e,
      set: (s) => {
        e = s;
      }
    };
  }, en = { generate: (t) => {
    if (!as(t))
      throw new Error("cases must be an array");
    if (t.length === 0)
      throw new Error("there must be at least one case");
    const e = [], o = {};
    return Y(t, (n, s) => {
      const r = ue(n);
      if (r.length !== 1)
        throw new Error("one and only one name per case");
      const c = r[0], a = n[c];
      if (o[c] !== void 0)
        throw new Error("duplicate key detected:" + c);
      if (c === "cata")
        throw new Error("cannot have a case named cata (sorry)");
      if (!as(a))
        throw new Error("case arguments must be an array");
      e.push(c), o[c] = (...i) => {
        const l = i.length;
        if (l !== a.length)
          throw new Error("Wrong number of arguments to case " + c + ". Expected " + a.length + " (" + a + "), got " + l);
        return {
          fold: (...m) => {
            if (m.length !== t.length)
              throw new Error("Wrong number of arguments to fold. Expected " + t.length + ", got " + m.length);
            return m[s].apply(null, i);
          },
          match: (m) => {
            const g = ue(m);
            if (e.length !== g.length)
              throw new Error("Wrong number of arguments to match. Expected: " + e.join(",") + `
Actual: ` + g.join(","));
            if (!ac(e, (h) => ie(g, h)))
              throw new Error("Not all branches were specified when using match. Specified: " + g.join(", ") + `
Required: ` + e.join(", "));
            return m[c].apply(null, i);
          },
          log: (m) => {
            console.log(m, {
              constructors: e,
              constructor: c,
              params: i
            });
          }
        };
      };
    }), o;
  } };
  en.generate([
    {
      bothErrors: [
        "error1",
        "error2"
      ]
    },
    {
      firstError: [
        "error1",
        "value2"
      ]
    },
    {
      secondError: [
        "value1",
        "error2"
      ]
    },
    {
      bothValues: [
        "value1",
        "value2"
      ]
    }
  ]);
  const RD = (t) => {
    const e = [], o = [];
    return Y(t, (n) => {
      n.fold((s) => {
        e.push(s);
      }, (s) => {
        o.push(s);
      });
    }), {
      errors: e,
      values: o
    };
  }, PD = (t, e) => {
    const o = {};
    return Ve(t, (n, s) => {
      ie(e, s) || (o[s] = n);
    }), o;
  }, LD = (t, e) => ({ [t]: e }), VD = (t) => {
    const e = {};
    return Y(t, (o) => {
      e[o.key] = o.value;
    }), e;
  }, HD = (t, e) => PD(t, e), yr = (t, e) => LD(t, e), mc = (t) => VD(t), ND = (t, e) => t.length === 0 ? ut.value(e) : ut.value(jt(e, ab.apply(void 0, t))), zD = (t) => ut.error(_e(t)), UD = (t, e) => {
    const o = RD(t);
    return o.errors.length > 0 ? zD(o.errors) : ND(o.values, e);
  }, yb = (t) => To(t) ? t : Lt, xb = (t, e, o) => {
    let n = t.dom;
    const s = yb(o);
    for (; n.parentNode; ) {
      n = n.parentNode;
      const r = F.fromDom(n), c = e(r);
      if (c.isSome())
        return c;
      if (s(r))
        break;
    }
    return u.none();
  }, Ui = (t, e, o) => {
    const n = e(t), s = yb(o);
    return n.orThunk(() => s(t) ? u.none() : xb(t, e, s));
  }, Sb = (t, e) => Bt(t.element, e.event.target), WD = {
    can: Te,
    abort: Lt,
    run: R
  }, gc = (t) => {
    if (!Ko(t, "can") && !Ko(t, "abort") && !Ko(t, "run"))
      throw new Error("EventHandler defined by: " + JSON.stringify(t, null, 2) + " does not have can, abort, or run!");
    return {
      ...WD,
      ...t
    };
  }, GD = (t, e) => (...o) => Fe(t, (n, s) => n && e(s).apply(void 0, o), !0), jD = (t, e) => (...o) => Fe(t, (n, s) => n || e(s).apply(void 0, o), !1), YD = (t) => To(t) ? {
    can: Te,
    abort: Lt,
    run: t
  } : t, XD = (t) => {
    const e = GD(t, (s) => s.can), o = jD(t, (s) => s.abort);
    return {
      can: e,
      abort: o,
      run: (...s) => {
        Y(t, (r) => {
          r.run.apply(void 0, s);
        });
      }
    };
  }, ke = w, bs = ke("touchstart"), Sa = ke("touchmove"), xr = ke("touchend"), wb = ke("touchcancel"), Ho = ke("mousedown"), Wi = ke("mousemove"), Bd = ke("mouseout"), Id = ke("mouseup"), vs = ke("mouseover"), ys = ke("focusin"), Tb = ke("focusout"), kn = ke("keydown"), KD = ke("keyup"), Sr = ke("input"), pc = ke("change"), wr = ke("click"), qD = ke("transitioncancel"), wa = ke("transitionend"), JD = ke("transitionstart"), ZD = ke("selectstart"), te = (t) => w("alloy." + t), QD = { tap: te("tap") }, zs = te("focus"), Rd = te("blur.post"), Pd = te("paste.post"), Tr = te("receive"), Ao = te("execute"), Ta = te("focus.item"), _a = QD.tap, tM = te("longpress"), Gi = te("sandbox.close"), Ld = te("typeahead.cancel"), ji = te("system.init"), eM = te("system.touchmove"), oM = te("system.touchend"), Vd = te("system.scroll"), Yi = te("system.resize"), Wn = te("system.attached"), hc = te("system.detached"), _r = te("system.dismissRequested"), _b = te("system.repositionRequested"), Xi = te("focusmanager.shifted"), Hd = te("slotcontainer.visibility"), Cb = te("system.external.element.scroll"), Ob = te("change.tab"), kb = te("dismiss.tab"), Nd = te("highlight"), zd = te("dehighlight"), xt = (t, e) => {
    Wd(t, t.element, e, {});
  }, U = (t, e, o) => {
    Wd(t, t.element, e, o);
  }, Cr = (t) => {
    xt(t, Ao());
  }, Ud = (t, e, o) => {
    Wd(t, e, o, {});
  }, Wd = (t, e, o, n) => {
    const s = {
      target: e,
      ...n
    };
    t.getSystem().triggerEvent(o, e, s);
  }, nM = (t, e, o, n) => {
    const s = {
      ...n,
      target: e
    };
    t.getSystem().triggerEvent(o, e, s);
  }, Eb = (t, e, o, n) => {
    t.getSystem().triggerEvent(o, e, n.event);
  }, It = (t) => mc(t), Ab = (t, e) => ({
    key: t,
    value: gc({ abort: e })
  }), sM = (t, e) => ({
    key: t,
    value: gc({ can: e })
  }), Db = (t) => ({
    key: t,
    value: gc({
      run: (e, o) => {
        o.event.prevent();
      }
    })
  }), O = (t, e) => ({
    key: t,
    value: gc({ run: e })
  }), Gd = (t, e, o) => ({
    key: t,
    value: gc({
      run: (n, s) => {
        e.apply(void 0, [
          n,
          s
        ].concat(o));
      }
    })
  }), rM = (t) => (e) => O(t, e), Ki = (t) => (e) => ({
    key: t,
    value: gc({
      run: (o, n) => {
        Sb(o, n) && e(o, n);
      }
    })
  }), cM = (t, e) => O(t, (o, n) => {
    o.getSystem().getByUid(e).each((s) => {
      Eb(s, s.element, t, n);
    });
  }), fc = (t, e, o) => {
    const n = e.partUids[o];
    return cM(t, n);
  }, jd = (t, e) => O(t, (o, n) => {
    const s = n.event, r = o.getSystem().getByDom(s.target).getOrThunk(() => Ui(s.target, (a) => o.getSystem().getByDom(a).toOptional(), Lt).getOr(o));
    e(o, r, n);
  }), Or = (t) => O(t, (e, o) => {
    o.cut();
  }), aM = (t) => O(t, (e, o) => {
    o.stop();
  }), bc = (t, e) => Ki(t)(e), Vt = Ki(Wn()), Gn = Ki(hc()), iM = Ki(ji()), xs = rM(Ao()), lM = (t, e) => {
    const n = (e || document).createElement("div");
    return n.innerHTML = t, Hn(F.fromDom(n));
  }, Yd = (t) => t.dom.innerHTML, vc = (t, e) => {
    const n = wn(t).dom, s = F.fromDom(n.createDocumentFragment()), r = lM(e, n);
    qf(s, r), yd(t), Zo(t, s);
  }, uM = (t) => {
    const e = F.fromTag("div"), o = F.fromDom(t.dom.cloneNode(!0));
    return Zo(e, o), Yd(e);
  }, Mb = (t, e) => F.fromDom(t.dom.cloneNode(e)), dM = (t) => Mb(t, !1), mM = (t) => Mb(t, !0), gM = (t) => {
    if (md(t))
      return "#shadow-root";
    {
      const e = dM(t);
      return uM(e);
    }
  }, Us = (t) => gM(t), pM = (t, e, o) => Bt(e, t.element) && !Bt(e, o), hM = It([sM(zs(), (t, e) => {
    const o = e.event, n = o.originator, s = o.target;
    return pM(t, n, s) ? (console.warn(zs() + ` did not get interpreted by the desired target. 
Originator: ` + Us(n) + `
Target: ` + Us(s) + `
Check the ` + zs() + " event handlers"), !1) : !0;
  })]);
  var fM = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    events: hM
  });
  let $b = 0;
  const P = (t) => {
    const o = (/* @__PURE__ */ new Date()).getTime(), n = Math.floor(Math.random() * 1e9);
    return $b++, t + "_" + n + $b + String(o);
  }, bM = w("alloy-id-"), vM = w("data-alloy-id"), yM = bM(), Fb = vM(), xM = (t, e) => {
    const o = P(yM + t);
    return Xd(e, o), o;
  }, Xd = (t, e) => {
    Object.defineProperty(t.dom, Fb, {
      value: e,
      writable: !0
    });
  }, Ca = (t) => {
    const e = _o(t) ? t.dom[Fb] : null;
    return u.from(e);
  }, yc = (t) => P(t), SM = Tt, qi = (t) => {
    const e = (s) => `The component must be in a context to execute: ${s}` + (t ? `
` + Us(t().element) + " is not in context." : ""), o = (s) => () => {
      throw new Error(e(s));
    }, n = (s) => () => {
      console.warn(e(s));
    };
    return {
      debugInfo: w("fake"),
      triggerEvent: n("triggerEvent"),
      triggerFocus: n("triggerFocus"),
      triggerEscape: n("triggerEscape"),
      broadcast: n("broadcast"),
      broadcastOn: n("broadcastOn"),
      broadcastEvent: n("broadcastEvent"),
      build: o("build"),
      buildOrPatch: o("buildOrPatch"),
      addToWorld: o("addToWorld"),
      removeFromWorld: o("removeFromWorld"),
      addToGui: o("addToGui"),
      removeFromGui: o("removeFromGui"),
      getByUid: o("getByUid"),
      getByDom: o("getByDom"),
      isConnected: Lt
    };
  }, wM = qi(), TM = (t, e, o) => {
    const n = o.toString(), s = n.indexOf(")") + 1, r = n.indexOf("("), c = n.substring(r + 1, s - 1).split(/,\s*/);
    return t.toFunctionAnnotation = () => ({
      name: e,
      parameters: Kd(c.slice(0, 1).concat(c.slice(3)))
    }), t;
  }, Kd = (t) => B(t, (e) => Mi(e, "/*") ? e.substring(0, e.length - 2) : e), qd = (t, e) => {
    const o = t.toString(), n = o.indexOf(")") + 1, s = o.indexOf("("), r = o.substring(s + 1, n - 1).split(/,\s*/);
    return t.toFunctionAnnotation = () => ({
      name: e,
      parameters: Kd(r)
    }), t;
  }, _M = (t, e) => {
    const o = e.toString(), n = o.indexOf(")") + 1, s = o.indexOf("("), r = o.substring(s + 1, n - 1).split(/,\s*/);
    return t.toFunctionAnnotation = () => ({
      name: "OVERRIDE",
      parameters: Kd(r.slice(1))
    }), t;
  }, Ji = P("alloy-premade"), Bb = (t) => (Object.defineProperty(t.element.dom, Ji, {
    value: t.uid,
    writable: !0
  }), yr(Ji, t)), CM = (t) => At(t.dom, Ji), Ib = (t) => Q(t, Ji), Zi = (t) => _M((e, ...o) => t(e.getApis(), e, ...o), t), En = { init: () => Do({ readState: w("No State required") }) }, Do = (t) => t, OM = (t, e) => {
    const o = B(e, (s) => Eo(s.name(), [
      k("config"),
      S("state", En)
    ])), n = Yt("component.behaviours", X(o), t.behaviours).fold((s) => {
      throw new Error(dc(s) + `
Complete spec:
` + JSON.stringify(t, null, 2));
    }, Tt);
    return {
      list: e,
      data: me(n, (s) => {
        const r = s.map((c) => ({
          config: c.config,
          state: c.state.init(c.config)
        }));
        return w(r);
      })
    };
  }, kM = (t) => t.list, EM = (t) => t.data, Rb = (t, e) => {
    const o = {};
    return Ve(t, (n, s) => {
      Ve(n, (r, c) => {
        const a = Q(o, c).getOr([]);
        o[c] = a.concat([e(s, r)]);
      });
    }), o;
  }, on = (t) => ({
    classes: Ln(t.classes) ? [] : t.classes,
    attributes: Ln(t.attributes) ? {} : t.attributes,
    styles: Ln(t.styles) ? {} : t.styles
  }), AM = (t, e) => ({
    ...t,
    attributes: {
      ...t.attributes,
      ...e.attributes
    },
    styles: {
      ...t.styles,
      ...e.styles
    },
    classes: t.classes.concat(e.classes)
  }), DM = (t, e, o, n) => {
    const s = { ...e };
    Y(o, (d) => {
      s[d.name()] = d.exhibit(t, n);
    });
    const r = Rb(s, (d, m) => ({
      name: d,
      modification: m
    })), c = (d) => rc(d, (m, g) => ({
      ...g.modification,
      ...m
    }), {}), a = rc(r.classes, (d, m) => m.modification.concat(d), []), i = c(r.attributes), l = c(r.styles);
    return on({
      classes: a,
      attributes: i,
      styles: l
    });
  }, MM = (t, e, o, n) => {
    try {
      const s = pf(o, (r, c) => {
        const a = r[e], i = c[e], l = n.indexOf(a), d = n.indexOf(i);
        if (l === -1)
          throw new Error("The ordering for " + t + " does not have an entry for " + a + `.
Order specified: ` + JSON.stringify(n, null, 2));
        if (d === -1)
          throw new Error("The ordering for " + t + " does not have an entry for " + i + `.
Order specified: ` + JSON.stringify(n, null, 2));
        return l < d ? -1 : d < l ? 1 : 0;
      });
      return ut.value(s);
    } catch (s) {
      return ut.error([s]);
    }
  }, $M = (t, e) => ({
    handler: t,
    purpose: e
  }), FM = (t, e) => ({
    cHandler: t,
    purpose: e
  }), BM = (t, e) => FM(Po.apply(void 0, [t.handler].concat(e)), t.purpose), Jd = (t) => t.cHandler, IM = (t, e) => ({
    name: t,
    handler: e
  }), RM = (t, e) => {
    const o = {};
    return Y(t, (n) => {
      o[n.name()] = n.handlers(e);
    }), o;
  }, PM = (t, e, o) => {
    const n = {
      ...o,
      ...RM(e, t)
    };
    return Rb(n, IM);
  }, LM = (t, e, o, n) => {
    const s = PM(t, o, n);
    return zM(s, e);
  }, VM = (t) => {
    const e = YD(t);
    return (o, n, ...s) => {
      const r = [
        o,
        n
      ].concat(s);
      e.abort.apply(void 0, r) ? n.stop() : e.can.apply(void 0, r) && e.run.apply(void 0, r);
    };
  }, HM = (t, e) => ut.error(["The event (" + t + `) has more than one behaviour that listens to it.
When this occurs, you must specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).
The behaviours that can trigger it are: ` + JSON.stringify(B(e, (o) => o.name), null, 2)]), NM = (t, e, o) => {
    const n = e[o];
    return n ? MM("Event: " + o, "name", t, n).map((s) => {
      const r = B(s, (c) => c.handler);
      return XD(r);
    }) : HM(o, t);
  }, zM = (t, e) => {
    const o = Ai(t, (n, s) => (n.length === 1 ? ut.value(n[0].handler) : NM(n, e, s)).map((c) => {
      const a = VM(c), i = n.length > 1 ? Ht(e[s], (l) => Xo(n, (d) => d.name === l)).join(" > ") : n[0].name;
      return yr(s, $M(a, i));
    }));
    return UD(o, {});
  }, kr = "alloy.base.behaviour", UM = X([
    Oe("dom", "dom", _n(), X([
      k("tag"),
      S("styles", {}),
      S("classes", []),
      S("attributes", {}),
      _t("value"),
      _t("innerHtml")
    ])),
    k("components"),
    k("uid"),
    S("events", {}),
    S("apis", {}),
    Oe("eventOrder", "eventOrder", dD({
      [Ao()]: [
        "disabling",
        kr,
        "toggling",
        "typeaheadevents"
      ],
      [zs()]: [
        kr,
        "focusing",
        "keying"
      ],
      [ji()]: [
        kr,
        "disabling",
        "toggling",
        "representing"
      ],
      [Sr()]: [
        kr,
        "representing",
        "streaming",
        "invalidating"
      ],
      [hc()]: [
        kr,
        "representing",
        "item-events",
        "tooltipping"
      ],
      [Ho()]: [
        "focusing",
        kr,
        "item-type-events"
      ],
      [bs()]: [
        "focusing",
        kr,
        "item-type-events"
      ],
      [vs()]: [
        "item-type-events",
        "tooltipping"
      ],
      [Tr()]: [
        "receiving",
        "reflecting",
        "tooltipping"
      ]
    }), Cn()),
    _t("domModification")
  ]), WM = (t) => Yt("custom.definition", UM, t), GM = (t) => ({
    ...t.dom,
    uid: t.uid,
    domChildren: B(t.components, (e) => e.element)
  }), jM = (t) => t.domModification.fold(() => on({}), on), YM = (t) => t.events, Zd = (t, e) => {
    const o = He(t, e);
    return o === void 0 || o === "" ? [] : o.split(" ");
  }, XM = (t, e, o) => {
    const s = Zd(t, e).concat([o]);
    return st(t, e, s.join(" ")), !0;
  }, KM = (t, e, o) => {
    const n = Ht(Zd(t, e), (s) => s !== o);
    return n.length > 0 ? st(t, e, n.join(" ")) : Qt(t, e), !1;
  }, xc = (t) => t.dom.classList !== void 0, Qd = (t) => Zd(t, "class"), Pb = (t, e) => XM(t, "class", e), Lb = (t, e) => KM(t, "class", e), qM = (t, e) => ie(Qd(t), e) ? Lb(t, e) : Pb(t, e), ee = (t, e) => {
    xc(t) ? t.dom.classList.add(e) : Pb(t, e);
  }, Vb = (t) => {
    (xc(t) ? t.dom.classList : Qd(t)).length === 0 && Qt(t, "class");
  }, Xt = (t, e) => {
    xc(t) ? t.dom.classList.remove(e) : Lb(t, e), Vb(t);
  }, JM = (t, e) => {
    const o = xc(t) ? t.dom.classList.toggle(e) : qM(t, e);
    return Vb(t), o;
  }, ao = (t, e) => xc(t) && t.dom.classList.contains(e), Er = (t, e) => {
    Y(e, (o) => {
      ee(t, o);
    });
  }, nn = (t, e) => {
    Y(e, (o) => {
      Xt(t, o);
    });
  }, ZM = (t, e) => {
    Y(e, (o) => {
      JM(t, o);
    });
  }, QM = (t, e) => ac(e, (o) => ao(t, o)), t$ = (t) => {
    const e = t.dom.classList, o = new Array(e.length);
    for (let n = 0; n < e.length; n++) {
      const s = e.item(n);
      s !== null && (o[n] = s);
    }
    return o;
  }, Hb = (t) => xc(t) ? t$(t) : Qd(t), Ss = (t) => t.dom.value, Ar = (t, e) => {
    if (e === void 0)
      throw new Error("Value.set was undefined");
    t.dom.value = e;
  }, e$ = (t, e, o) => gr(t, e).map((s) => {
    if (o.exists((c) => !Bt(c, s))) {
      const c = o.map(us).getOr("span"), a = F.fromTag(c);
      return fa(s, a), a;
    } else
      return s;
  }), Nb = (t, e, o) => {
    o.fold(() => Zo(t, e), (n) => {
      Bt(n, e) || (fa(n, e), ps(n));
    });
  }, zb = (t, e, o) => {
    const n = B(e, o), s = Hn(t);
    return Y(s.slice(n.length), ps), n;
  }, Ub = (t, e, o, n) => {
    const s = gr(t, e), r = n(o, s), c = e$(t, e, s);
    return Nb(t, r.element, c), r;
  }, o$ = (t, e, o) => zb(t, e, (n, s) => Ub(t, s, n, o)), n$ = (t, e) => zb(t, e, (o, n) => {
    const s = gr(t, n);
    return Nb(t, o, s), o;
  }), Wb = (t, e) => {
    const o = ue(t), n = ue(e), s = ur(n, o), r = ME(t, (c, a) => !At(e, a) || c !== e[a]).t;
    return {
      toRemove: s,
      toSet: r
    };
  }, s$ = (t, e) => {
    const {
      class: o,
      style: n,
      ...s
    } = lA(e), {
      toSet: r,
      toRemove: c
    } = Wb(t.attributes, s), a = () => {
      Y(c, (x) => Qt(e, x)), ga(e, r);
    }, i = Pf(e), {
      toSet: l,
      toRemove: d
    } = Wb(t.styles, i), m = () => {
      Y(d, (x) => kt(e, x)), pr(e, l);
    }, g = Hb(e), p = ur(g, t.classes), h = ur(t.classes, g), f = () => {
      Er(e, h), nn(e, p);
    }, y = (x) => {
      vc(e, x);
    }, v = () => {
      const x = t.domChildren;
      n$(e, x);
    }, b = () => {
      const x = e, E = t.value.getOrUndefined();
      E !== Ss(x) && Ar(x, E ?? "");
    };
    return a(), f(), m(), t.innerHtml.fold(v, y), b(), e;
  }, r$ = (t) => {
    const e = F.fromTag(t.tag);
    ga(e, t.attributes), Er(e, t.classes), pr(e, t.styles), t.innerHtml.each((n) => vc(e, n));
    const o = t.domChildren;
    return qf(e, o), t.value.each((n) => {
      Ar(e, n);
    }), e;
  }, c$ = (t, e) => {
    try {
      const o = s$(t, e);
      return u.some(o);
    } catch {
      return u.none();
    }
  }, a$ = (t) => t.innerHtml.isSome() && t.domChildren.length > 0, i$ = (t, e) => {
    const o = (s) => us(s) === t.tag && !a$(t) && !CM(s), n = e.filter(o).bind((s) => c$(t, s)).getOrThunk(() => r$(t));
    return Xd(n, t.uid), n;
  }, l$ = (t) => {
    const e = Q(t, "behaviours").getOr({});
    return le(ue(e), (o) => {
      const n = e[o];
      return wo(n) ? [n.me] : [];
    });
  }, u$ = (t, e) => OM(t, e), d$ = (t) => {
    const e = l$(t);
    return u$(t, e);
  }, m$ = (t, e, o) => {
    const n = GM(t), s = jM(t), r = { "alloy.base.modification": s }, c = e.length > 0 ? DM(o, r, e, n) : s;
    return AM(n, c);
  }, g$ = (t, e, o) => {
    const n = { "alloy.base.behaviour": YM(t) };
    return LM(o, t.eventOrder, e, n).getOrDie();
  }, p$ = (t, e) => {
    const o = () => x, n = j(wM), s = On(WM(t)), r = d$(t), c = kM(r), a = EM(r), i = m$(s, c, a), l = i$(i, e), d = g$(s, c, a), m = j(s.components), g = (E) => {
      n.set(E);
    }, p = () => {
      n.set(qi(o));
    }, h = () => {
      const E = Hn(l), C = le(E, (_) => n.get().getByDom(_).fold(() => [], EE));
      m.set(C);
    }, f = (E) => {
      const C = a;
      return (To(C[E.name()]) ? C[E.name()] : () => {
        throw new Error("Could not find " + E.name() + " in " + JSON.stringify(t, null, 2));
      })();
    }, y = (E) => To(a[E.name()]), v = () => s.apis, b = (E) => a[E]().map((C) => C.state.readState()).getOr("not enabled"), x = {
      uid: t.uid,
      getSystem: n.get,
      config: f,
      hasConfigured: y,
      spec: t,
      readState: b,
      getApis: v,
      connect: g,
      disconnect: p,
      element: l,
      syncComponents: h,
      components: m.get,
      events: d
    };
    return x;
  }, h$ = (t, e) => {
    const o = Q(t, "components").getOr([]);
    return e.fold(() => B(o, Re), (n) => B(o, (s, r) => tm(s, gr(n, r))));
  }, f$ = (t, e) => {
    const {
      events: o,
      ...n
    } = SM(t), s = h$(n, e), r = {
      ...n,
      events: {
        ...fM,
        ...o
      },
      components: s
    };
    return ut.value(p$(r, e));
  }, qt = (t) => {
    const e = F.fromText(t);
    return Gb({ element: e });
  }, Gb = (t) => {
    const e = co("external.component", Co([
      k("element"),
      _t("uid")
    ]), t), o = j(qi()), n = (a) => {
      o.set(a);
    }, s = () => {
      o.set(qi(() => c));
    }, r = e.uid.getOrThunk(() => yc("external"));
    Xd(e.element, r);
    const c = {
      uid: r,
      getSystem: o.get,
      config: u.none,
      hasConfigured: Lt,
      connect: n,
      disconnect: s,
      getApis: () => ({}),
      element: e.element,
      spec: t,
      readState: w("No state"),
      syncComponents: R,
      components: w([]),
      events: {}
    };
    return Bb(c);
  }, b$ = yc, v$ = (t) => At(t, "uid"), tm = (t, e) => Ib(t).getOrThunk(() => {
    const o = v$(t) ? t : {
      uid: b$(""),
      ...t
    };
    return f$(o, e).getOrDie();
  }), Re = (t) => tm(t, u.none()), No = Bb;
  var jb = (t, e, o, n, s) => t(o, n) ? u.some(o) : To(s) && s(o) ? u.none() : e(o, n, s);
  const Yb = (t, e, o) => {
    let n = t.dom;
    const s = To(o) ? o : Lt;
    for (; n.parentNode; ) {
      n = n.parentNode;
      const r = F.fromDom(n);
      if (e(r))
        return u.some(r);
      if (s(r))
        break;
    }
    return u.none();
  }, Xb = (t, e, o) => jb((s, r) => r(s), Yb, t, e, o), y$ = (t, e) => {
    const o = (s) => e(F.fromDom(s));
    return Gt(t.dom.childNodes, o).map(F.fromDom);
  }, x$ = (t, e) => {
    const o = (n) => {
      for (let s = 0; s < n.childNodes.length; s++) {
        const r = F.fromDom(n.childNodes[s]);
        if (e(r))
          return u.some(r);
        const c = o(n.childNodes[s]);
        if (c.isSome())
          return c;
      }
      return u.none();
    };
    return o(t.dom);
  }, Kb = (t, e, o) => Xb(t, e, o).isSome(), Ws = (t, e, o) => Yb(t, (n) => ld(n, e), o), em = (t, e) => y$(t, (o) => ld(o, e)), Jt = (t, e) => tA(e, t), An = (t, e, o) => jb((s, r) => ld(s, r), Ws, t, e, o), Oa = "aria-controls", S$ = (t) => Xb(t, (o) => {
    if (!_o(o))
      return !1;
    const n = He(o, "id");
    return n !== void 0 && n.indexOf(Oa) > -1;
  }).bind((o) => {
    const n = He(o, "id"), s = qe(o);
    return Jt(s, `[${Oa}="${n}"]`);
  }), qb = () => {
    const t = P(Oa);
    return {
      id: t,
      link: (n) => {
        st(n, Oa, t);
      },
      unlink: (n) => {
        Qt(n, Oa);
      }
    };
  }, w$ = (t, e) => S$(e).exists((o) => Dr(t, o)), Dr = (t, e) => Kb(e, (o) => Bt(o, t.element), Lt) || w$(t, e), Jb = "unknown";
  var Sc;
  (function(t) {
    t[t.STOP = 0] = "STOP", t[t.NORMAL = 1] = "NORMAL", t[t.LOGGING = 2] = "LOGGING";
  })(Sc || (Sc = {}));
  const om = j({}), T$ = (t, e) => {
    const o = [], n = (/* @__PURE__ */ new Date()).getTime();
    return {
      logEventCut: (s, r, c) => {
        o.push({
          outcome: "cut",
          target: r,
          purpose: c
        });
      },
      logEventStopped: (s, r, c) => {
        o.push({
          outcome: "stopped",
          target: r,
          purpose: c
        });
      },
      logNoParent: (s, r, c) => {
        o.push({
          outcome: "no-parent",
          target: r,
          purpose: c
        });
      },
      logEventNoHandlers: (s, r) => {
        o.push({
          outcome: "no-handlers-left",
          target: r
        });
      },
      logEventResponse: (s, r, c) => {
        o.push({
          outcome: "response",
          purpose: c,
          target: r
        });
      },
      write: () => {
        const s = (/* @__PURE__ */ new Date()).getTime();
        ie([
          "mousemove",
          "mouseover",
          "mouseout",
          ji()
        ], t) || console.log(t, {
          event: t,
          time: s - n,
          target: e.dom,
          sequence: B(o, (r) => ie([
            "cut",
            "stopped",
            "response"
          ], r.outcome) ? "{" + r.purpose + "} " + r.outcome + " at (" + Us(r.target) + ")" : r.outcome)
        });
      }
    };
  }, _$ = (t, e, o) => {
    switch (Q(om.get(), t).orThunk(() => {
      const s = ue(om.get());
      return xn(s, (r) => t.indexOf(r) > -1 ? u.some(om.get()[r]) : u.none());
    }).getOr(Sc.NORMAL)) {
      case Sc.NORMAL:
        return o(E$());
      case Sc.LOGGING: {
        const s = T$(t, e), r = o(s);
        return s.write(), r;
      }
      case Sc.STOP:
        return !0;
    }
  }, C$ = [
    "alloy/data/Fields",
    "alloy/debugging/Debugging"
  ], O$ = () => {
    const t = new Error();
    if (t.stack !== void 0) {
      const e = t.stack.split(`
`);
      return Gt(e, (o) => o.indexOf("alloy") > 0 && !Xo(C$, (n) => o.indexOf(n) > -1)).getOr(Jb);
    } else
      return Jb;
  }, k$ = {
    logEventCut: R,
    logEventStopped: R,
    logNoParent: R,
    logEventNoHandlers: R,
    logEventResponse: R,
    write: R
  }, nm = (t, e, o) => _$(t, e, o), E$ = w(k$), Zb = w([
    k("menu"),
    k("selectedMenu")
  ]), sm = w([
    k("item"),
    k("selectedItem")
  ]);
  w(X(sm().concat(Zb())));
  const A$ = w(X(sm())), D$ = Ns("initSize", [
    k("numColumns"),
    k("numRows")
  ]), M$ = () => Oo("markers", A$()), Qi = () => Ns("markers", [k("backgroundMenu")].concat(Zb()).concat(sm())), Mr = (t) => Ns("markers", B(t, k)), tl = (t, e, o) => (O$(), Oe(e, e, o, ya((n) => ut.value((...s) => n.apply(void 0, s))))), pt = (t) => tl("onHandler", t, Hi(R)), go = (t) => tl("onKeyboardHandler", t, Hi(u.none)), $r = (t) => tl("onHandler", t, _n()), rm = (t) => tl("onKeyboardHandler", t, _n()), Rt = (t, e) => Qe(t, w(e)), Qb = (t) => Qe(t, Tt), tv = w(D$), Ee = (t, e, o, n, s, r, c, a = !1) => ({
    x: t,
    y: e,
    bubble: o,
    direction: n,
    placement: s,
    restriction: r,
    label: `${c}-${s}`,
    alwaysFit: a
  }), Gs = en.generate([
    { southeast: [] },
    { southwest: [] },
    { northeast: [] },
    { northwest: [] },
    { south: [] },
    { north: [] },
    { east: [] },
    { west: [] }
  ]), $$ = (t, e, o, n, s, r, c, a, i) => t.fold(e, o, n, s, r, c, a, i), F$ = (t, e, o, n) => t.fold(e, e, n, n, e, n, o, o), B$ = (t, e, o, n) => t.fold(e, n, e, n, o, o, e, n), el = Gs.southeast, cm = Gs.southwest, am = Gs.northeast, im = Gs.northwest, ev = Gs.south, ov = Gs.north, nv = Gs.east, sv = Gs.west, wc = (t, e, o, n) => {
    const s = t + e;
    return s > n ? o : s < o ? n : s;
  }, Mo = (t, e, o) => Math.min(Math.max(t, e), o), I$ = (t, e) => {
    switch (e) {
      case 1:
        return t.x;
      case 0:
        return t.x + t.width;
      case 2:
        return t.y;
      case 3:
        return t.y + t.height;
    }
  }, Ae = (t, e) => gf([
    "left",
    "right",
    "top",
    "bottom"
  ], (o) => Q(e, o).map((n) => I$(t, n))), R$ = (t, e, o) => {
    const n = (i, l) => e[i].map((d) => {
      const m = i === "top" || i === "bottom", g = m ? o.top : o.left, h = (i === "left" || i === "top" ? Math.max : Math.min)(d, l) + g;
      return m ? Mo(h, t.y, t.bottom) : Mo(h, t.x, t.right);
    }).getOr(l), s = n("left", t.x), r = n("top", t.y), c = n("right", t.right), a = n("bottom", t.bottom);
    return pe(s, r, c - s, a - r);
  }, js = "layout", rv = (t) => t.x, cv = (t, e) => t.x + t.width / 2 - e.width / 2, av = (t, e) => t.x + t.width - e.width, lm = (t, e) => t.y - e.height, um = (t) => t.y + t.height, iv = (t, e) => t.y + t.height / 2 - e.height / 2, P$ = (t) => t.x + t.width, L$ = (t, e) => t.x - e.width, De = (t, e, o) => Ee(rv(t), um(t), o.southeast(), el(), "southeast", Ae(t, {
    left: 1,
    top: 3
  }), js), Me = (t, e, o) => Ee(av(t, e), um(t), o.southwest(), cm(), "southwest", Ae(t, {
    right: 0,
    top: 3
  }), js), io = (t, e, o) => Ee(rv(t), lm(t, e), o.northeast(), am(), "northeast", Ae(t, {
    left: 1,
    bottom: 2
  }), js), lo = (t, e, o) => Ee(av(t, e), lm(t, e), o.northwest(), im(), "northwest", Ae(t, {
    right: 0,
    bottom: 2
  }), js), Ue = (t, e, o) => Ee(cv(t, e), lm(t, e), o.north(), ov(), "north", Ae(t, { bottom: 2 }), js), fe = (t, e, o) => Ee(cv(t, e), um(t), o.south(), ev(), "south", Ae(t, { top: 3 }), js), dm = (t, e, o) => Ee(P$(t), iv(t, e), o.east(), nv(), "east", Ae(t, { left: 0 }), js), mm = (t, e, o) => Ee(L$(t, e), iv(t, e), o.west(), sv(), "west", Ae(t, { right: 1 }), js), lv = () => [
    De,
    Me,
    io,
    lo,
    fe,
    Ue,
    dm,
    mm
  ], uv = () => [
    Me,
    De,
    lo,
    io,
    fe,
    Ue,
    dm,
    mm
  ], dv = () => [
    io,
    lo,
    De,
    Me,
    Ue,
    fe
  ], mv = () => [
    lo,
    io,
    Me,
    De,
    Ue,
    fe
  ], gm = () => [
    De,
    Me,
    io,
    lo,
    fe,
    Ue
  ], pm = () => [
    Me,
    De,
    lo,
    io,
    fe,
    Ue
  ], V$ = (t, e) => e.universal ? t : Ht(t, (o) => ie(e.channels, o));
  var H$ = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    events: (t) => It([O(Tr(), (e, o) => {
      const n = t.channels, s = ue(n), r = o, c = V$(s, r);
      Y(c, (a) => {
        const i = n[a], l = i.schema, d = co("channel[" + a + `] data
Receiver: ` + Us(e.element), l, r.data);
        i.onReceive(e, d);
      });
    })])
  }), N$ = [Oo("channels", pb(ut.value, Co([
    $r("onReceive"),
    S("schema", Cn())
  ])))];
  const z$ = (t, e, o) => xs((n) => {
    o(n, t, e);
  }), hm = (t, e, o) => iM((n, s) => {
    o(n, t, e);
  }), U$ = (t, e, o, n, s, r) => {
    const c = Co(t), a = Eo(e, [BD("config", t)]);
    return gv(c, a, e, o, n, s, r);
  }, W$ = (t, e, o, n, s, r) => {
    const c = t, a = Eo(e, [zn("config", t)]);
    return gv(c, a, e, o, n, s, r);
  }, G$ = (t, e, o) => TM((s, ...r) => {
    const c = [s].concat(r);
    return s.config({ name: w(t) }).fold(() => {
      throw new Error("We could not find any behaviour configuration for: " + t + ". Using API: " + o);
    }, (a) => {
      const i = Array.prototype.slice.call(c, 1);
      return e.apply(void 0, [
        s,
        a.config,
        a.state
      ].concat(i));
    });
  }, o, e), j$ = (t) => ({
    key: t,
    value: void 0
  }), gv = (t, e, o, n, s, r, c) => {
    const a = (m) => Ko(m, o) ? m[o]() : u.none(), i = me(s, (m, g) => G$(o, m, g)), d = {
      ...me(r, (m, g) => qd(m, g)),
      ...i,
      revoke: Po(j$, o),
      config: (m) => {
        const g = co(o + "-config", t, m);
        return {
          key: o,
          value: {
            config: g,
            me: d,
            configAsRaw: Vs(() => co(o + "-config", t, m)),
            initialConfig: m,
            state: c
          }
        };
      },
      schema: w(e),
      exhibit: (m, g) => Di(a(m), Q(n, "exhibit"), (p, h) => h(g, p.config, p.state)).getOrThunk(() => on({})),
      name: w(o),
      handlers: (m) => a(m).map((g) => Q(n, "events").getOr(() => ({}))(g.config, g.state)).getOr({})
    };
    return d;
  }, D = (t) => mc(t), Y$ = Co([
    k("fields"),
    k("name"),
    S("active", {}),
    S("apis", {}),
    S("state", En),
    S("extra", {})
  ]), ye = (t) => {
    const e = co("Creating behaviour: " + t.name, Y$, t);
    return U$(e.fields, e.name, e.active, e.apis, e.extra, e.state);
  }, X$ = Co([
    k("branchKey"),
    k("branches"),
    k("name"),
    S("active", {}),
    S("apis", {}),
    S("state", En),
    S("extra", {})
  ]), pv = (t) => {
    const e = co("Creating behaviour: " + t.name, X$, t);
    return W$(mo(e.branchKey, e.branches), e.name, e.active, e.apis, e.extra, e.state);
  }, K$ = w(void 0), po = ye({
    fields: N$,
    name: "receiving",
    active: H$
  });
  var q$ = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    exhibit: (t, e) => on({
      classes: [],
      styles: e.useFixed() ? {} : { position: "relative" }
    })
  });
  const sn = (t, e = !1) => t.dom.focus({ preventScroll: e }), fm = (t) => t.dom.blur(), ka = (t) => {
    const e = qe(t).dom;
    return t.dom === e.activeElement;
  }, jn = (t = xd()) => u.from(t.dom.activeElement).map(F.fromDom), Dn = (t) => jn(qe(t)).filter((e) => t.dom.contains(e.dom)), bm = (t, e) => {
    const o = qe(e), n = jn(o).bind((r) => {
      const c = (a) => Bt(r, a);
      return c(e) ? u.some(e) : x$(e, c);
    }), s = t(e);
    return n.each((r) => {
      jn(o).filter((c) => Bt(c, r)).fold(() => {
        sn(r);
      }, R);
    }), s;
  }, rn = (t, e, o, n, s) => {
    const r = (c) => c + "px";
    return {
      position: t,
      left: e.map(r),
      top: o.map(r),
      right: n.map(r),
      bottom: s.map(r)
    };
  }, J$ = (t) => ({
    ...t,
    position: u.some(t.position)
  }), hv = (t, e) => {
    Ri(t, J$(e));
  }, vm = en.generate([
    { none: [] },
    {
      relative: [
        "x",
        "y",
        "width",
        "height"
      ]
    },
    {
      fixed: [
        "x",
        "y",
        "width",
        "height"
      ]
    }
  ]), fv = (t, e, o, n, s, r) => {
    const c = e.rect, a = c.x - o, i = c.y - n, l = c.width, d = c.height, m = s - (a + l), g = r - (i + d), p = u.some(a), h = u.some(i), f = u.some(m), y = u.some(g), v = u.none();
    return $$(e.direction, () => rn(t, p, h, v, v), () => rn(t, v, h, f, v), () => rn(t, p, v, v, y), () => rn(t, v, v, f, y), () => rn(t, p, h, v, v), () => rn(t, p, v, v, y), () => rn(t, p, h, v, v), () => rn(t, v, h, f, v));
  }, bv = (t, e) => t.fold(() => {
    const o = e.rect;
    return rn("absolute", u.some(o.x), u.some(o.y), u.none(), u.none());
  }, (o, n, s, r) => fv("absolute", e, o, n, s, r), (o, n, s, r) => fv("fixed", e, o, n, s, r)), ym = (t, e) => {
    const o = Po(Sd, e), n = t.fold(o, o, () => {
      const c = Qo();
      return Sd(e).translate(-c.left, -c.top);
    }), s = hr(e), r = Ls(e);
    return pe(n.left, n.top, s, r);
  }, Z$ = (t, e) => e.fold(() => t.fold(Ze, Ze, pe), (o) => t.fold(w(o), w(o), () => {
    const n = vv(t, o.x, o.y);
    return pe(n.left, n.top, o.width, o.height);
  })), vv = (t, e, o) => {
    const n = Ut(e, o), s = () => {
      const r = Qo();
      return n.translate(-r.left, -r.top);
    };
    return t.fold(w(n), w(n), s);
  }, Q$ = (t, e, o, n) => t.fold(e, o, n);
  vm.none;
  const t0 = vm.relative, e0 = vm.fixed, o0 = (t, e) => ({
    anchorBox: t,
    origin: e
  }), n0 = (t, e) => o0(t, e), xm = "data-alloy-placement", s0 = (t, e) => {
    st(t, xm, e);
  }, yv = (t) => Je(t, xm), r0 = (t) => Qt(t, xm), ol = en.generate([
    { fit: ["reposition"] },
    {
      nofit: [
        "reposition",
        "visibleW",
        "visibleH",
        "isVisible"
      ]
    }
  ]), c0 = (t, e) => {
    const {
      x: o,
      y: n,
      right: s,
      bottom: r
    } = e, { x: c, y: a, right: i, bottom: l, width: d, height: m } = t, g = c >= o && c <= s, p = a >= n && a <= r, h = g && p, f = i <= s && i >= o, y = l <= r && l >= n, v = f && y, b = Math.min(d, c >= o ? s - c : i - o), x = Math.min(m, a >= n ? r - a : l - n);
    return {
      originInBounds: h,
      sizeInBounds: v,
      visibleW: b,
      visibleH: x
    };
  }, a0 = (t, e) => {
    const {
      x: o,
      y: n,
      right: s,
      bottom: r
    } = e, { x: c, y: a, width: i, height: l } = t, d = Math.max(o, s - i), m = Math.max(n, r - l), g = Mo(c, o, d), p = Mo(a, n, m), h = Math.min(g + i, s) - g, f = Math.min(p + l, r) - p;
    return pe(g, p, h, f);
  }, i0 = (t, e, o) => {
    const n = w(e.bottom - o.y), s = w(o.bottom - e.y), r = F$(t, s, s, n), c = w(e.right - o.x), a = w(o.right - e.x);
    return {
      maxWidth: B$(t, a, a, c),
      maxHeight: r
    };
  }, l0 = (t, e, o, n) => {
    const s = t.bubble, r = s.offset, c = R$(n, t.restriction, r), a = t.x + r.left, i = t.y + r.top, l = pe(a, i, e, o), { originInBounds: d, sizeInBounds: m, visibleW: g, visibleH: p } = c0(l, c), h = d && m, f = h ? l : a0(l, c), y = f.width > 0 && f.height > 0, { maxWidth: v, maxHeight: b } = i0(t.direction, f, n), x = {
      rect: f,
      maxHeight: b,
      maxWidth: v,
      direction: t.direction,
      placement: t.placement,
      classes: {
        on: s.classesOn,
        off: s.classesOff
      },
      layout: t.label,
      testY: i
    };
    return h || t.alwaysFit ? ol.fit(x) : ol.nofit(x, g, p, y);
  }, u0 = (t, e, o, n, s, r) => {
    const c = n.width, a = n.height, i = (d, m, g, p, h) => {
      const f = d(o, n, s, t, r), y = l0(f, c, a, r);
      return y.fold(w(y), (v, b, x, E) => (h === E ? x > p || b > g : !h && E) ? y : ol.nofit(m, g, p, h));
    };
    return Fe(e, (d, m) => {
      const g = Po(i, m);
      return d.fold(w(d), g);
    }, ol.nofit({
      rect: o,
      maxHeight: n.height,
      maxWidth: n.width,
      direction: el(),
      placement: "southeast",
      classes: {
        on: [],
        off: []
      },
      layout: "none",
      testY: o.y
    }, -1, -1, !1)).fold(Tt, Tt);
  }, Sm = (t) => {
    const e = j(u.none()), o = () => e.get().each(t);
    return {
      clear: () => {
        o(), e.set(u.none());
      },
      isSet: () => e.get().isSome(),
      get: () => e.get(),
      set: (a) => {
        o(), e.set(u.some(a));
      }
    };
  }, d0 = () => Sm((t) => t.destroy()), Tc = () => Sm((t) => t.unbind()), Pt = () => {
    const t = Sm(R);
    return {
      ...t,
      on: (o) => t.get().each(o)
    };
  }, xv = Te, to = (t, e, o) => WA(t, e, xv, o), wm = (t, e, o) => GA(t, e, xv, o), Sv = Xf, wv = [
    "top",
    "bottom",
    "right",
    "left"
  ], nl = "data-alloy-transition-timer", m0 = (t, e) => QM(t, e.classes), g0 = (t, e, o) => o.exists((n) => {
    const s = t.mode;
    return s === "all" ? !0 : n[s] !== e[s];
  }), p0 = (t, e) => {
    const o = (n) => parseFloat(n).toFixed(3);
    return rd(e, (n, s) => {
      const r = t[s].map(o), c = n.map(o);
      return !$E(r, c);
    }).isSome();
  }, h0 = (t) => {
    const e = (r) => {
      const a = Ne(t, r).split(/\s*,\s*/);
      return Ht(a, $i);
    }, o = (r) => {
      if (Ct(r) && /^[\d.]+/.test(r)) {
        const c = parseFloat(r);
        return Mi(r, "ms") ? c : c * 1e3;
      } else
        return 0;
    }, n = e("transition-delay"), s = e("transition-duration");
    return Fe(s, (r, c, a) => {
      const i = o(n[a]) + o(c);
      return Math.max(r, i);
    }, 0);
  }, f0 = (t, e) => {
    const o = Tc(), n = Tc();
    let s;
    const r = (l) => {
      var d;
      const m = (d = l.raw.pseudoElement) !== null && d !== void 0 ? d : "";
      return Bt(l.target, t) && Sf(m) && ie(wv, l.raw.propertyName);
    }, c = (l) => {
      if (Oi(l) || r(l)) {
        o.clear(), n.clear();
        const d = l == null ? void 0 : l.raw.type;
        (Oi(d) || d === wa()) && (clearTimeout(s), Qt(t, nl), nn(t, e.classes));
      }
    }, a = to(t, JD(), (l) => {
      r(l) && (a.unbind(), o.set(to(t, wa(), c)), n.set(to(t, qD(), c)));
    }), i = h0(t);
    requestAnimationFrame(() => {
      s = setTimeout(c, i + 17), st(t, nl, s);
    });
  }, b0 = (t, e) => {
    Er(t, e.classes), Je(t, nl).each((o) => {
      clearTimeout(parseInt(o, 10)), Qt(t, nl);
    }), f0(t, e);
  }, v0 = (t, e, o, n, s, r) => {
    const c = g0(n, s, r);
    if (c || m0(t, n)) {
      rt(t, "position", o.position);
      const a = ym(e, t), i = bv(e, {
        ...s,
        rect: a
      }), l = gf(wv, (d) => i[d]);
      p0(o, l) && (Ri(t, l), c && b0(t, n), pa(t));
    } else
      nn(t, n.classes);
  }, y0 = (t) => ({
    width: hr(t),
    height: Ls(t)
  }), x0 = (t, e, o, n) => {
    kt(e, "max-height"), kt(e, "max-width");
    const s = y0(e);
    return u0(e, n.preference, t, s, o, n.bounds);
  }, S0 = (t, e) => {
    const o = e.classes;
    nn(t, o.off), Er(t, o.on);
  }, w0 = (t, e, o) => {
    const n = o.maxHeightFunction;
    n(t, e.maxHeight);
  }, T0 = (t, e, o) => {
    const n = o.maxWidthFunction;
    n(t, e.maxWidth);
  }, _0 = (t, e, o) => {
    const n = bv(o.origin, e);
    o.transition.each((s) => {
      v0(t, o.origin, n, s, e, o.lastPlacement);
    }), hv(t, n);
  }, C0 = (t, e) => {
    s0(t, e.placement);
  }, Tv = (t, e) => {
    uA(t, Math.floor(e));
  }, _v = w((t, e) => {
    Tv(t, e), pr(t, {
      "overflow-x": "hidden",
      "overflow-y": "auto"
    });
  }), _c = w((t, e) => {
    Tv(t, e);
  }), Cv = (t, e, o) => t[e] === void 0 ? o : t[e], O0 = (t, e, o, n, s, r, c, a) => {
    const i = Cv(c, "maxHeightFunction", _v()), l = Cv(c, "maxWidthFunction", R), d = t.anchorBox, m = t.origin, g = {
      bounds: Z$(m, r),
      origin: m,
      preference: n,
      maxHeightFunction: i,
      maxWidthFunction: l,
      lastPlacement: s,
      transition: a
    };
    return k0(d, e, o, g);
  }, k0 = (t, e, o, n) => {
    const s = x0(t, e, o, n);
    return _0(e, s, n), C0(e, s), S0(e, s), w0(e, s, n), T0(e, s, n), {
      layout: s.layout,
      placement: s.placement
    };
  }, E0 = [
    "valignCentre",
    "alignLeft",
    "alignRight",
    "alignCentre",
    "top",
    "bottom",
    "left",
    "right",
    "inset"
  ], ws = (t, e, o, n = 1) => {
    const s = t * n, r = e * n, c = (i) => Q(o, i).getOr([]), a = (i, l, d) => {
      const m = ur(E0, d);
      return {
        offset: Ut(i, l),
        classesOn: le(d, c),
        classesOff: le(m, c)
      };
    };
    return {
      southeast: () => a(-t, e, [
        "top",
        "alignLeft"
      ]),
      southwest: () => a(t, e, [
        "top",
        "alignRight"
      ]),
      south: () => a(-t / 2, e, [
        "top",
        "alignCentre"
      ]),
      northeast: () => a(-t, -e, [
        "bottom",
        "alignLeft"
      ]),
      northwest: () => a(t, -e, [
        "bottom",
        "alignRight"
      ]),
      north: () => a(-t / 2, -e, [
        "bottom",
        "alignCentre"
      ]),
      east: () => a(t, -e / 2, [
        "valignCentre",
        "left"
      ]),
      west: () => a(-t, -e / 2, [
        "valignCentre",
        "right"
      ]),
      insetNortheast: () => a(s, r, [
        "top",
        "alignLeft",
        "inset"
      ]),
      insetNorthwest: () => a(-s, r, [
        "top",
        "alignRight",
        "inset"
      ]),
      insetNorth: () => a(-s / 2, r, [
        "top",
        "alignCentre",
        "inset"
      ]),
      insetSoutheast: () => a(s, -r, [
        "bottom",
        "alignLeft",
        "inset"
      ]),
      insetSouthwest: () => a(-s, -r, [
        "bottom",
        "alignRight",
        "inset"
      ]),
      insetSouth: () => a(-s / 2, -r, [
        "bottom",
        "alignCentre",
        "inset"
      ]),
      insetEast: () => a(-s, -r / 2, [
        "valignCentre",
        "right",
        "inset"
      ]),
      insetWest: () => a(s, -r / 2, [
        "valignCentre",
        "left",
        "inset"
      ])
    };
  }, sl = () => ws(0, 0, {}), rl = Tt, Tm = (t, e) => (o) => A0(o) === "rtl" ? e : t, A0 = (t) => Ne(t, "direction") === "rtl" ? "rtl" : "ltr";
  var Ts;
  (function(t) {
    t.TopToBottom = "toptobottom", t.BottomToTop = "bottomtotop";
  })(Ts || (Ts = {}));
  const _m = "data-alloy-vertical-dir", D0 = (t) => Kb(t, (e) => _o(e) && He(e, "data-alloy-vertical-dir") === Ts.BottomToTop), Ys = () => Eo("layouts", [
    k("onLtr"),
    k("onRtl"),
    _t("onBottomLtr"),
    _t("onBottomRtl")
  ]), cl = (t, e, o, n, s, r, c) => {
    const a = c.map(D0).getOr(!1), i = e.layouts.map((p) => p.onLtr(t)), l = e.layouts.map((p) => p.onRtl(t)), d = a ? e.layouts.bind((p) => p.onBottomLtr.map((h) => h(t))).or(i).getOr(s) : i.getOr(o), m = a ? e.layouts.bind((p) => p.onBottomRtl.map((h) => h(t))).or(l).getOr(r) : l.getOr(n);
    return Tm(d, m)(t);
  }, M0 = (t, e, o) => {
    const n = e.hotspot, s = ym(o, n.element), r = cl(t.element, e, gm(), pm(), dv(), mv(), u.some(e.hotspot.element));
    return u.some(rl({
      anchorBox: s,
      bubble: e.bubble.getOr(sl()),
      overrides: e.overrides,
      layouts: r
    }));
  };
  var $0 = [
    k("hotspot"),
    _t("bubble"),
    S("overrides", {}),
    Ys(),
    Rt("placement", M0)
  ];
  const F0 = (t, e, o) => {
    const n = vv(o, e.x, e.y), s = pe(n.left, n.top, e.width, e.height), r = cl(t.element, e, lv(), uv(), lv(), uv(), u.none());
    return u.some(rl({
      anchorBox: s,
      bubble: e.bubble,
      overrides: e.overrides,
      layouts: r
    }));
  };
  var B0 = [
    k("x"),
    k("y"),
    S("height", 0),
    S("width", 0),
    S("bubble", sl()),
    S("overrides", {}),
    Ys(),
    Rt("placement", F0)
  ];
  const Ov = en.generate([
    { screen: ["point"] },
    {
      absolute: [
        "point",
        "scrollLeft",
        "scrollTop"
      ]
    }
  ]), I0 = (t) => t.fold(Tt, (e, o, n) => e.translate(-o, -n)), R0 = (t) => t.fold(Tt, Tt), kv = (t) => Fe(t, (e, o) => e.translate(o.left, o.top), Ut(0, 0)), P0 = (t) => {
    const e = B(t, I0);
    return kv(e);
  }, Ev = (t) => {
    const e = B(t, R0);
    return kv(e);
  }, L0 = Ov.screen, V0 = Ov.absolute, H0 = (t, e, o) => {
    const n = ma(o.root).dom, s = (r) => {
      const c = wn(r), a = wn(t.element);
      return Bt(c, a);
    };
    return u.from(n.frameElement).map(F.fromDom).filter(s).map(Jo);
  }, Av = (t, e, o) => {
    const n = wn(t.element), s = Qo(n), r = H0(t, e, o).getOr(s);
    return V0(r, s.left, s.top);
  }, Cm = (t, e, o, n) => {
    const s = L0(Ut(t, e));
    return u.some(QA(s, o, n));
  }, Dv = (t, e, o, n, s) => t.map((r) => {
    const c = [
      e,
      r.point
    ], a = Q$(n, () => Ev(c), () => Ev(c), () => P0(c)), i = tD(a.left, a.top, r.width, r.height), l = o.showAbove ? dv() : gm(), d = o.showAbove ? mv() : pm(), m = cl(s, o, l, d, l, d, u.none());
    return rl({
      anchorBox: i,
      bubble: o.bubble.getOr(sl()),
      overrides: o.overrides,
      layouts: m
    });
  }), N0 = (t, e, o) => {
    const n = Av(t, o, e);
    return e.node.filter(qo).bind((s) => {
      const r = s.dom.getBoundingClientRect(), c = Cm(r.left, r.top, r.width, r.height), a = e.node.getOr(t.element);
      return Dv(c, n, e, o, a);
    });
  };
  var z0 = [
    k("node"),
    k("root"),
    _t("bubble"),
    Ys(),
    S("overrides", {}),
    S("showAbove", !1),
    Rt("placement", N0)
  ];
  const U0 = "\uFEFF", W0 = " ", Om = { create: (t, e, o, n) => ({
    start: t,
    soffset: e,
    finish: o,
    foffset: n
  }) }, km = en.generate([
    { before: ["element"] },
    {
      on: [
        "element",
        "offset"
      ]
    },
    { after: ["element"] }
  ]), G0 = (t, e, o, n) => t.fold(e, o, n), j0 = (t) => t.fold(Tt, Tt, Tt), Y0 = km.before, X0 = km.on, K0 = km.after, q0 = {
    before: Y0,
    on: X0,
    after: K0,
    cata: G0,
    getStart: j0
  }, al = en.generate([
    { domRange: ["rng"] },
    {
      relative: [
        "startSitu",
        "finishSitu"
      ]
    },
    {
      exact: [
        "start",
        "soffset",
        "finish",
        "foffset"
      ]
    }
  ]), J0 = (t) => al.exact(t.start, t.soffset, t.finish, t.foffset), Z0 = (t) => t.match({
    domRange: (e) => F.fromDom(e.startContainer),
    relative: (e, o) => q0.getStart(e),
    exact: (e, o, n, s) => e
  }), Q0 = al.domRange, tF = al.relative, eF = al.exact, oF = (t) => {
    const e = Z0(t);
    return ma(e);
  }, nF = Om.create, Ea = {
    domRange: Q0,
    relative: tF,
    exact: eF,
    exactFromRange: J0,
    getWin: oF,
    range: nF
  }, sF = (t, e) => {
    e.fold((o) => {
      t.setStartBefore(o.dom);
    }, (o, n) => {
      t.setStart(o.dom, n);
    }, (o) => {
      t.setStartAfter(o.dom);
    });
  }, rF = (t, e) => {
    e.fold((o) => {
      t.setEndBefore(o.dom);
    }, (o, n) => {
      t.setEnd(o.dom, n);
    }, (o) => {
      t.setEndAfter(o.dom);
    });
  }, Mv = (t, e, o) => {
    const n = t.document.createRange();
    return sF(n, e), rF(n, o), n;
  }, $v = (t, e, o, n, s) => {
    const r = t.document.createRange();
    return r.setStart(e.dom, o), r.setEnd(n.dom, s), r;
  }, Fv = (t) => ({
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom,
    width: t.width,
    height: t.height
  }), cF = (t) => {
    const e = t.getClientRects(), o = e.length > 0 ? e[0] : t.getBoundingClientRect();
    return o.width > 0 || o.height > 0 ? u.some(o).map(Fv) : u.none();
  }, aF = (t) => {
    const e = t.getBoundingClientRect();
    return e.width > 0 || e.height > 0 ? u.some(e).map(Fv) : u.none();
  }, Aa = en.generate([
    {
      ltr: [
        "start",
        "soffset",
        "finish",
        "foffset"
      ]
    },
    {
      rtl: [
        "start",
        "soffset",
        "finish",
        "foffset"
      ]
    }
  ]), Bv = (t, e, o) => e(F.fromDom(o.startContainer), o.startOffset, F.fromDom(o.endContainer), o.endOffset), iF = (t, e) => e.match({
    domRange: (o) => ({
      ltr: w(o),
      rtl: u.none
    }),
    relative: (o, n) => ({
      ltr: Vs(() => Mv(t, o, n)),
      rtl: Vs(() => u.some(Mv(t, n, o)))
    }),
    exact: (o, n, s, r) => ({
      ltr: Vs(() => $v(t, o, n, s, r)),
      rtl: Vs(() => u.some($v(t, s, r, o, n)))
    })
  }), lF = (t, e) => {
    const o = e.ltr();
    return o.collapsed ? e.rtl().filter((s) => s.collapsed === !1).map((s) => Aa.rtl(F.fromDom(s.endContainer), s.endOffset, F.fromDom(s.startContainer), s.startOffset)).getOrThunk(() => Bv(t, Aa.ltr, o)) : Bv(t, Aa.ltr, o);
  }, uF = (t, e) => {
    const o = iF(t, e);
    return lF(t, o);
  }, Iv = (t, e) => uF(t, e).match({
    ltr: (n, s, r, c) => {
      const a = t.document.createRange();
      return a.setStart(n.dom, s), a.setEnd(r.dom, c), a;
    },
    rtl: (n, s, r, c) => {
      const a = t.document.createRange();
      return a.setStart(r.dom, c), a.setEnd(n.dom, s), a;
    }
  });
  Aa.ltr, Aa.rtl;
  const Rv = (t, e, o) => Ht(oA(t, o), e), eo = (t, e) => QE(e, t), dF = (t, e, o, n) => {
    const r = wn(t).dom.createRange();
    return r.setStart(t.dom, e), r.setEnd(o.dom, n), r;
  }, mF = (t, e, o, n) => {
    const s = dF(t, e, o, n), r = Bt(t, o) && e === n;
    return s.collapsed && !r;
  }, gF = (t) => u.from(t.getSelection()), Pv = (t) => {
    if (t.rangeCount > 0) {
      const e = t.getRangeAt(0), o = t.getRangeAt(t.rangeCount - 1);
      return u.some(Om.create(F.fromDom(e.startContainer), e.startOffset, F.fromDom(o.endContainer), o.endOffset));
    } else
      return u.none();
  }, pF = (t) => {
    if (t.anchorNode === null || t.focusNode === null)
      return Pv(t);
    {
      const e = F.fromDom(t.anchorNode), o = F.fromDom(t.focusNode);
      return mF(e, t.anchorOffset, o, t.focusOffset) ? u.some(Om.create(e, t.anchorOffset, o, t.focusOffset)) : Pv(t);
    }
  }, hF = (t) => gF(t).filter((e) => e.rangeCount > 0).bind(pF), Lv = (t, e) => {
    const o = Iv(t, e);
    return cF(o);
  }, fF = (t, e) => {
    const o = Iv(t, e);
    return aF(o);
  }, bF = ((t, e) => {
    const o = (r) => {
      if (!t(r))
        throw new Error("Can only get " + e + " value of a " + e + " node");
      return n(r).getOr("");
    }, n = (r) => t(r) ? u.from(r.dom.nodeValue) : u.none();
    return {
      get: o,
      getOption: n,
      set: (r, c) => {
        if (!t(r))
          throw new Error("Can only set raw " + e + " value of a " + e + " node");
        r.dom.nodeValue = c;
      }
    };
  })(mr, "text"), vF = (t) => bF.get(t), il = (t, e) => ({
    element: t,
    offset: e
  }), yF = (t, e) => {
    const o = Hn(t);
    if (o.length === 0)
      return il(t, e);
    if (e < o.length)
      return il(o[e], 0);
    {
      const n = o[o.length - 1], s = mr(n) ? vF(n).length : Hn(n).length;
      return il(n, s);
    }
  }, Vv = (t, e) => mr(t) ? il(t, e) : yF(t, e), Em = (t) => t.foffset !== void 0, Hv = (t, e) => e.getSelection.getOrThunk(() => () => hF(t))().map((n) => {
    if (Em(n)) {
      const s = Vv(n.start, n.soffset), r = Vv(n.finish, n.foffset);
      return Ea.range(s.element, s.offset, r.element, r.offset);
    } else
      return n;
  }), xF = (t, e, o) => {
    const n = ma(e.root).dom, s = Av(t, o, e), r = Hv(n, e).bind((i) => {
      if (Em(i))
        return fF(n, Ea.exactFromRange(i)).orThunk(() => {
          const d = F.fromText(U0);
          fa(i.start, d);
          const m = Lv(n, Ea.exact(d, 0, d, 1));
          return ps(d), m;
        }).bind((d) => Cm(d.left, d.top, d.width, d.height));
      {
        const l = me(i, (m) => m.dom.getBoundingClientRect()), d = {
          left: Math.min(l.firstCell.left, l.lastCell.left),
          right: Math.max(l.firstCell.right, l.lastCell.right),
          top: Math.min(l.firstCell.top, l.lastCell.top),
          bottom: Math.max(l.firstCell.bottom, l.lastCell.bottom)
        };
        return Cm(d.left, d.top, d.right - d.left, d.bottom - d.top);
      }
    }), a = Hv(n, e).bind((i) => Em(i) ? _o(i.start) ? u.some(i.start) : ds(i.start) : u.some(i.firstCell)).getOr(t.element);
    return Dv(r, s, e, o, a);
  };
  var SF = [
    _t("getSelection"),
    k("root"),
    _t("bubble"),
    Ys(),
    S("overrides", {}),
    S("showAbove", !1),
    Rt("placement", xF)
  ];
  const ll = "link-layout", Nv = (t) => t.x + t.width, zv = (t, e) => t.x - e.width, Uv = (t, e) => t.y - e.height + t.height, Wv = (t) => t.y, Gv = (t, e, o) => Ee(Nv(t), Wv(t), o.southeast(), el(), "southeast", Ae(t, {
    left: 0,
    top: 2
  }), ll), jv = (t, e, o) => Ee(zv(t, e), Wv(t), o.southwest(), cm(), "southwest", Ae(t, {
    right: 1,
    top: 2
  }), ll), Yv = (t, e, o) => Ee(Nv(t), Uv(t, e), o.northeast(), am(), "northeast", Ae(t, {
    left: 0,
    bottom: 3
  }), ll), Xv = (t, e, o) => Ee(zv(t, e), Uv(t, e), o.northwest(), im(), "northwest", Ae(t, {
    right: 1,
    bottom: 3
  }), ll), Kv = () => [
    Gv,
    jv,
    Yv,
    Xv
  ], qv = () => [
    jv,
    Gv,
    Xv,
    Yv
  ], wF = (t, e, o) => {
    const n = ym(o, e.item.element), s = cl(t.element, e, Kv(), qv(), Kv(), qv(), u.none());
    return u.some(rl({
      anchorBox: n,
      bubble: sl(),
      overrides: e.overrides,
      layouts: s
    }));
  };
  var TF = [
    k("item"),
    Ys(),
    S("overrides", {}),
    Rt("placement", wF)
  ], _F = mo("type", {
    selection: SF,
    node: z0,
    hotspot: $0,
    submenu: TF,
    makeshift: B0
  });
  const CF = [
    ko("classes", ve),
    Un("mode", "all", [
      "all",
      "layout",
      "placement"
    ])
  ], OF = [
    S("useFixed", Lt),
    _t("getBounds")
  ], kF = [
    Oo("anchor", _F),
    Eo("transition", CF)
  ], EF = () => {
    const t = document.documentElement;
    return e0(0, 0, t.clientWidth, t.clientHeight);
  }, AF = (t) => {
    const e = Jo(t.element), o = t.element.dom.getBoundingClientRect();
    return t0(e.left, e.top, o.width, o.height);
  }, DF = (t, e, o, n, s, r) => {
    const c = n0(e.anchorBox, t);
    return O0(c, n.element, e.bubble, e.layouts, s, o, e.overrides, r);
  }, MF = (t, e, o, n, s) => {
    const r = u.none();
    Jv(t, e, o, n, s, r);
  }, Jv = (t, e, o, n, s, r) => {
    const c = co("placement.info", X(kF), s), a = c.anchor, i = n.element, l = o.get(n.uid);
    bm(() => {
      rt(i, "position", "fixed");
      const d = Ce(i, "visibility");
      rt(i, "visibility", "hidden");
      const m = e.useFixed() ? EF() : AF(t);
      a.placement(t, a, m).each((g) => {
        const p = r.orThunk(() => e.getBounds.map(ed)), h = DF(m, g, p, n, l, c.transition);
        o.set(n.uid, h);
      }), d.fold(() => {
        kt(i, "visibility");
      }, (g) => {
        rt(i, "visibility", g);
      }), Ce(i, "left").isNone() && Ce(i, "top").isNone() && Ce(i, "right").isNone() && Ce(i, "bottom").isNone() && Sn(Ce(i, "position"), "fixed") && kt(i, "position");
    }, i);
  };
  var $F = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    position: MF,
    positionWithinBounds: Jv,
    getMode: (t, e, o) => e.useFixed() ? "fixed" : "absolute",
    reset: (t, e, o, n) => {
      const s = n.element;
      Y([
        "position",
        "left",
        "right",
        "top",
        "bottom"
      ], (r) => kt(s, r)), r0(s), o.clear(n.uid);
    }
  }), FF = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    init: () => {
      let t = {};
      return Do({
        readState: () => t,
        clear: (s) => {
          wo(s) ? delete t[s] : t = {};
        },
        set: (s, r) => {
          t[s] = r;
        },
        get: (s) => Q(t, s)
      });
    }
  });
  const We = ye({
    fields: OF,
    name: "positioning",
    active: q$,
    apis: $F,
    state: FF
  }), Am = (t) => t.getSystem().isConnected(), Da = (t) => {
    xt(t, hc());
    const e = t.components();
    Y(e, Da);
  }, Ma = (t) => {
    const e = t.components();
    Y(e, Ma), xt(t, Wn());
  }, Zv = (t, e) => {
    t.getSystem().addToWorld(e), qo(t.element) && Ma(e);
  }, Dm = (t) => {
    Da(t), t.getSystem().removeFromWorld(t);
  }, Qv = (t, e) => {
    Zo(t.element, e.element);
  }, BF = (t) => {
    Y(t.components(), (e) => ps(e.element)), yd(t.element), t.syncComponents();
  }, IF = (t, e, o) => {
    const n = t.components();
    BF(t);
    const s = o(e), r = ur(n, s);
    Y(r, (c) => {
      Da(c), t.getSystem().removeFromWorld(c);
    }), Y(s, (c) => {
      Am(c) ? Qv(t, c) : (t.getSystem().addToWorld(c), Qv(t, c), qo(t.element) && Ma(c));
    }), t.syncComponents();
  }, RF = (t, e, o) => {
    const n = t.components(), s = le(e, (a) => Ib(a).toArray());
    Y(n, (a) => {
      ie(s, a) || Dm(a);
    });
    const r = o(e), c = ur(n, r);
    Y(c, (a) => {
      Am(a) && Dm(a);
    }), Y(r, (a) => {
      Am(a) || Zv(t, a);
    }), t.syncComponents();
  }, Fr = (t, e) => {
    ty(t, e, Zo);
  }, ty = (t, e, o) => {
    t.getSystem().addToWorld(e), o(t.element, e.element), qo(t.element) && Ma(e), t.syncComponents();
  }, ey = (t) => {
    Da(t), ps(t.element), t.getSystem().removeFromWorld(t);
  }, _s = (t) => {
    const e = Tn(t.element).bind((o) => t.getSystem().getByDom(o).toOptional());
    ey(t), e.each((o) => {
      o.syncComponents();
    });
  }, oy = (t) => {
    const e = t.components();
    Y(e, ey), yd(t.element), t.syncComponents();
  }, Mm = (t, e) => {
    ny(t, e, Zo);
  }, ul = (t, e) => {
    ny(t, e, YA);
  }, ny = (t, e, o) => {
    o(t, e.element);
    const n = Hn(e.element);
    Y(n, (s) => {
      e.getByDom(s).each(Ma);
    });
  }, PF = (t) => {
    const e = Hn(t.element);
    Y(e, (o) => {
      t.getByDom(o).each(Da);
    }), ps(t.element);
  }, sy = (t, e, o, n) => {
    o.get().each((c) => {
      oy(t);
    });
    const s = e.getAttachPoint(t);
    Fr(s, t);
    const r = t.getSystem().build(n);
    return Fr(t, r), o.set(r), r;
  }, ry = (t, e, o, n) => {
    const s = sy(t, e, o, n);
    return e.onOpen(t, s), s;
  }, LF = (t, e, o, n) => o.get().map(() => sy(t, e, o, n)), VF = (t, e, o, n, s) => {
    iy(t, e), ry(t, e, o, n), s(), ly(t, e);
  }, cy = (t, e, o) => {
    o.get().each((n) => {
      oy(t), _s(t), e.onClose(t, n), o.clear();
    });
  }, ay = (t, e, o) => o.isOpen(), HF = (t, e, o, n) => ay(t, e, o) && o.get().exists((s) => e.isPartOf(t, s, n)), NF = (t, e, o) => o.get(), zF = (t, e, o, n) => {
    Ce(t.element, e).fold(() => {
      Qt(t.element, o);
    }, (s) => {
      st(t.element, o, s);
    }), rt(t.element, e, n);
  }, UF = (t, e, o) => {
    Je(t.element, o).fold(() => kt(t.element, e), (n) => rt(t.element, e, n));
  }, iy = (t, e, o) => {
    const n = e.getAttachPoint(t);
    rt(t.element, "position", We.getMode(n)), zF(t, "visibility", e.cloakVisibilityAttr, "hidden");
  }, WF = (t) => Xo([
    "top",
    "left",
    "right",
    "bottom"
  ], (e) => Ce(t, e).isSome()), ly = (t, e, o) => {
    WF(t.element) || kt(t.element, "position"), UF(t, "visibility", e.cloakVisibilityAttr);
  };
  var GF = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    cloak: iy,
    decloak: ly,
    open: ry,
    openWhileCloaked: VF,
    close: cy,
    isOpen: ay,
    isPartOf: HF,
    getState: NF,
    setContent: LF
  }), jF = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    events: (t, e) => It([O(Gi(), (o, n) => {
      cy(o, t, e);
    })])
  }), YF = [
    pt("onOpen"),
    pt("onClose"),
    k("isPartOf"),
    k("getAttachPoint"),
    S("cloakVisibilityAttr", "data-precloak-visibility")
  ], XF = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    init: () => {
      const t = Pt(), e = w("not-implemented");
      return Do({
        readState: e,
        isOpen: t.isSet,
        clear: t.clear,
        set: t.set,
        get: t.get
      });
    }
  });
  const ht = ye({
    fields: YF,
    name: "sandboxing",
    active: jF,
    apis: GF,
    state: XF
  }), Xs = w("dismiss.popups"), Cc = w("reposition.popups"), $m = w("mouse.released"), KF = Co([
    S("isExtraPart", Lt),
    Eo("fireEventInstead", [S("event", _r())])
  ]), Fm = (t) => {
    const e = co("Dismissal", KF, t);
    return {
      [Xs()]: {
        schema: Co([k("target")]),
        onReceive: (o, n) => {
          ht.isOpen(o) && (ht.isPartOf(o, n.target) || e.isExtraPart(o, n.target) || e.fireEventInstead.fold(() => ht.close(o), (r) => xt(o, r.event)));
        }
      }
    };
  }, qF = Co([
    Eo("fireEventInstead", [S("event", _b())]),
    tn("doReposition")
  ]), Bm = (t) => {
    const e = co("Reposition", qF, t);
    return {
      [Cc()]: {
        onReceive: (o) => {
          ht.isOpen(o) && e.fireEventInstead.fold(() => e.doReposition(o), (n) => xt(o, n.event));
        }
      }
    };
  }, Im = (t, e, o) => {
    e.store.manager.onLoad(t, e, o);
  }, uy = (t, e, o) => {
    e.store.manager.onUnload(t, e, o);
  };
  var JF = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    onLoad: Im,
    onUnload: uy,
    setValue: (t, e, o, n) => {
      e.store.manager.setValue(t, e, o, n);
    },
    getValue: (t, e, o) => e.store.manager.getValue(t, e, o),
    getState: (t, e, o) => o
  }), ZF = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    events: (t, e) => {
      const o = t.resetOnDom ? [
        Vt((n, s) => {
          Im(n, t, e);
        }),
        Gn((n, s) => {
          uy(n, t, e);
        })
      ] : [hm(t, e, Im)];
      return It(o);
    }
  });
  const dy = () => {
    const t = j(null), e = () => ({
      mode: "memory",
      value: t.get()
    }), o = () => t.get() === null, n = () => {
      t.set(null);
    };
    return Do({
      set: t.set,
      get: t.get,
      isNotSet: o,
      clear: n,
      readState: e
    });
  }, QF = () => Do({ readState: R }), my = () => {
    const t = j({}), e = j({});
    return Do({
      readState: () => ({
        mode: "dataset",
        dataByValue: t.get(),
        dataByText: e.get()
      }),
      lookup: (c) => Q(t.get(), c).orThunk(() => Q(e.get(), c)),
      update: (c) => {
        const a = t.get(), i = e.get(), l = {}, d = {};
        Y(c, (m) => {
          l[m.value] = m, Q(m, "meta").each((g) => {
            Q(g, "text").each((p) => {
              d[p] = m;
            });
          });
        }), t.set({
          ...a,
          ...l
        }), e.set({
          ...i,
          ...d
        });
      },
      clear: () => {
        t.set({}), e.set({});
      }
    });
  };
  var tB = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    memory: dy,
    dataset: my,
    manual: QF,
    init: (t) => t.store.manager.state(t)
  });
  const gy = (t, e, o, n) => {
    const s = e.store;
    o.update([n]), s.setValue(t, n), e.onSetValue(t, n);
  }, eB = (t, e, o) => {
    const n = e.store, s = n.getDataKey(t);
    return o.lookup(s).getOrThunk(() => n.getFallbackEntry(s));
  }, oB = (t, e, o) => {
    e.store.initialValue.each((s) => {
      gy(t, e, o, s);
    });
  }, nB = (t, e, o) => {
    o.clear();
  };
  var sB = [
    _t("initialValue"),
    k("getFallbackEntry"),
    k("getDataKey"),
    k("setValue"),
    Rt("manager", {
      setValue: gy,
      getValue: eB,
      onLoad: oB,
      onUnload: nB,
      state: my
    })
  ];
  const rB = (t, e, o) => e.store.getValue(t), cB = (t, e, o, n) => {
    e.store.setValue(t, n), e.onSetValue(t, n);
  }, aB = (t, e, o) => {
    e.store.initialValue.each((n) => {
      e.store.setValue(t, n);
    });
  };
  var iB = [
    k("getValue"),
    S("setValue", R),
    _t("initialValue"),
    Rt("manager", {
      setValue: cB,
      getValue: rB,
      onLoad: aB,
      onUnload: R,
      state: En.init
    })
  ];
  const lB = (t, e, o, n) => {
    o.set(n), e.onSetValue(t, n);
  }, uB = (t, e, o) => o.get(), dB = (t, e, o) => {
    e.store.initialValue.each((n) => {
      o.isNotSet() && o.set(n);
    });
  }, mB = (t, e, o) => {
    o.clear();
  };
  var gB = [
    _t("initialValue"),
    Rt("manager", {
      setValue: lB,
      getValue: uB,
      onLoad: dB,
      onUnload: mB,
      state: dy
    })
  ], pB = [
    Vo("store", { mode: "memory" }, mo("mode", {
      memory: gB,
      manual: iB,
      dataset: sB
    })),
    pt("onSetValue"),
    S("resetOnDom", !1)
  ];
  const I = ye({
    fields: pB,
    name: "representing",
    active: ZF,
    apis: JF,
    extra: {
      setValueFrom: (t, e) => {
        const o = I.getValue(e);
        I.setValue(t, o);
      }
    },
    state: tB
  }), be = (t, e) => Fd(t, {}, B(e, (o) => FD(o.name(), "Cannot configure " + o.name() + " for " + t)).concat([Qe("dump", Tt)])), dl = (t) => t.dump, xe = (t, e) => ({
    ...D(e),
    ...t.dump
  }), cn = {
    field: be,
    augment: xe,
    get: dl
  }, py = "placeholder", ml = en.generate([
    {
      single: [
        "required",
        "valueThunk"
      ]
    },
    {
      multiple: [
        "required",
        "valueThunks"
      ]
    }
  ]), Rm = (t) => At(t, "uiType"), hB = (t, e, o, n) => t.exists((s) => s !== o.owner) ? ml.single(!0, w(o)) : Q(n, o.name).fold(() => {
    throw new Error("Unknown placeholder component: " + o.name + `
Known: [` + ue(n) + `]
Namespace: ` + t.getOr("none") + `
Spec: ` + JSON.stringify(o, null, 2));
  }, (s) => s.replace()), fB = (t, e, o, n) => Rm(o) && o.uiType === py ? hB(t, e, o, n) : ml.single(!1, w(o)), hy = (t, e, o, n) => fB(t, e, o, n).fold((r, c) => {
    const a = Rm(o) ? c(e, o.config, o.validated) : c(e), i = Q(a, "components").getOr([]), l = le(i, (d) => hy(t, e, d, n));
    return [{
      ...a,
      components: l
    }];
  }, (r, c) => {
    if (Rm(o)) {
      const a = c(e, o.config, o.validated);
      return o.validated.preprocess.getOr(Tt)(a);
    } else
      return c(e);
  }), bB = (t, e, o, n) => le(o, (s) => hy(t, e, s, n)), vB = (t, e) => {
    let o = !1;
    const n = () => o, s = () => {
      if (o)
        throw new Error("Trying to use the same placeholder more than once: " + t);
      return o = !0, e;
    }, r = () => e.fold((c, a) => c, (c, a) => c);
    return {
      name: w(t),
      required: r,
      used: n,
      replace: s
    };
  }, yB = (t, e, o, n) => {
    const s = me(n, (c, a) => vB(a, c)), r = bB(t, e, o, s);
    return Ve(s, (c) => {
      if (c.used() === !1 && c.required())
        throw new Error("Placeholder: " + c.name() + ` was not found in components list
Namespace: ` + t.getOr("none") + `
Components: ` + JSON.stringify(e.components, null, 2));
    }), r;
  }, fy = ml.single, xB = ml.multiple, by = w(py), gl = en.generate([
    { required: ["data"] },
    { external: ["data"] },
    { optional: ["data"] },
    { group: ["data"] }
  ]), pl = S("factory", { sketch: Tt }), Pm = S("schema", []), hl = k("name"), Lm = Oe("pname", "pname", Vi((t) => "<alloy." + P(t.name) + ">"), Cn()), SB = Qe("schema", () => [_t("preprocess")]), fl = S("defaults", w({})), bl = S("overrides", w({})), wB = X([
    pl,
    Pm,
    hl,
    Lm,
    fl,
    bl
  ]), TB = X([
    pl,
    Pm,
    hl,
    fl,
    bl
  ]), _B = X([
    pl,
    Pm,
    hl,
    Lm,
    fl,
    bl
  ]), CB = X([
    pl,
    SB,
    hl,
    k("unit"),
    Lm,
    fl,
    bl
  ]), vy = (t) => t.fold(u.some, u.none, u.some, u.some), yy = (t) => {
    const e = (o) => o.name;
    return t.fold(e, e, e, e);
  }, OB = (t) => t.fold(Tt, Tt, Tt, Tt), vl = (t, e) => (o) => {
    const n = co("Converting part type", e, o);
    return t(n);
  }, Pe = vl(gl.required, wB), an = vl(gl.external, TB), zo = vl(gl.optional, _B), yl = vl(gl.group, CB), Vm = w("entirety");
  var kB = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    required: Pe,
    external: an,
    optional: zo,
    group: yl,
    asNamedPart: vy,
    name: yy,
    asCommon: OB,
    original: Vm
  });
  const Hm = (t, e, o, n) => jt(e.defaults(t, o, n), o, { uid: t.partUids[e.name] }, e.overrides(t, o, n)), EB = (t, e, o) => {
    const n = {}, s = {};
    return Y(o, (r) => {
      r.fold((c) => {
        n[c.pname] = fy(!0, (a, i, l) => c.factory.sketch(Hm(a, c, i, l)));
      }, (c) => {
        const a = e.parts[c.name];
        s[c.name] = w(c.factory.sketch(Hm(e, c, a[Vm()]), a));
      }, (c) => {
        n[c.pname] = fy(!1, (a, i, l) => c.factory.sketch(Hm(a, c, i, l)));
      }, (c) => {
        n[c.pname] = xB(!0, (a, i, l) => {
          const d = a[c.name];
          return B(d, (m) => c.factory.sketch(jt(c.defaults(a, m, l), m, c.overrides(a, m))));
        });
      });
    }), {
      internals: w(n),
      externals: w(s)
    };
  }, Nm = (t, e) => {
    const o = {};
    return Y(e, (n) => {
      vy(n).each((s) => {
        const r = AB(t, s.pname);
        o[s.name] = (c) => {
          const a = co("Part: " + s.name + " in " + t, X(s.schema), c);
          return {
            ...r,
            config: c,
            validated: a
          };
        };
      });
    }), o;
  }, AB = (t, e) => ({
    uiType: by(),
    owner: t,
    name: e
  }), zm = (t, e, o) => ({
    uiType: by(),
    owner: t,
    name: e,
    config: o,
    validated: {}
  }), xy = (t) => le(t, (e) => e.fold(u.none, u.some, u.none, u.none).map((o) => Ns(o.name, o.schema.concat([Qb(Vm())]))).toArray()), Sy = (t) => B(t, yy), Um = (t, e, o) => EB(t, e, o), Wm = (t, e, o) => yB(u.some(t), e, e.components, o), Dt = (t, e, o) => {
    const n = e.partUids[o];
    return t.getSystem().getByUid(n).toOptional();
  }, Ks = (t, e, o) => Dt(t, e, o).getOrDie("Could not find part: " + o), wy = (t, e, o) => {
    const n = {}, s = e.partUids, r = t.getSystem();
    return Y(o, (c) => {
      n[c] = w(r.getByUid(s[c]));
    }), n;
  }, Ty = (t, e) => {
    const o = t.getSystem();
    return me(e.partUids, (n, s) => w(o.getByUid(n)));
  }, _y = (t) => ue(t.partUids), Gm = (t, e, o) => {
    const n = {}, s = e.partUids, r = t.getSystem();
    return Y(o, (c) => {
      n[c] = w(r.getByUid(s[c]).getOrDie());
    }), n;
  }, Cy = (t, e) => {
    const o = Sy(e);
    return mc(B(o, (n) => ({
      key: n,
      value: t + "-" + n
    })));
  }, jm = (t) => Oe("partUids", "partUids", Od((e) => Cy(e.uid, t)), Cn());
  var DB = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    generate: Nm,
    generateOne: zm,
    schemas: xy,
    names: Sy,
    substitutes: Um,
    components: Wm,
    defaultUids: Cy,
    defaultUidsSchema: jm,
    getAllParts: Ty,
    getAllPartNames: _y,
    getPart: Dt,
    getPartOrDie: Ks,
    getParts: wy,
    getPartsOrDie: Gm
  });
  const MB = (t, e) => (t.length > 0 ? [Ns("parts", t)] : []).concat([
    k("uid"),
    S("dom", {}),
    S("components", []),
    Qb("originalSpec"),
    S("debug.sketcher", {})
  ]).concat(e), Oy = (t, e, o, n, s) => {
    const r = MB(n, s);
    return co(t + " [SpecSchema]", Co(r.concat(e)), o);
  }, $B = (t, e, o, n) => {
    const s = ky(n), r = Oy(t, e, s, [], []);
    return o(r, s);
  }, Ym = (t, e, o, n, s) => {
    const r = ky(s), c = xy(o), a = jm(o), i = Oy(t, e, r, c, [a]), l = Um(t, i, o), d = Wm(t, i, l.internals());
    return n(i, d, r, l.externals());
  }, FB = (t) => At(t, "uid"), ky = (t) => FB(t) ? t : {
    ...t,
    uid: yc("uid")
  }, BB = (t) => t.uid !== void 0, IB = Co([
    k("name"),
    k("factory"),
    k("configFields"),
    S("apis", {}),
    S("extraApis", {})
  ]), RB = Co([
    k("name"),
    k("factory"),
    k("configFields"),
    k("partFields"),
    S("apis", {}),
    S("extraApis", {})
  ]), $o = (t) => {
    const e = co("Sketcher for " + t.name, IB, t), o = (r) => $B(e.name, e.configFields, e.factory, r), n = me(e.apis, Zi), s = me(e.extraApis, (r, c) => qd(r, c));
    return {
      name: e.name,
      configFields: e.configFields,
      sketch: o,
      ...n,
      ...s
    };
  }, Ge = (t) => {
    const e = co("Sketcher for " + t.name, RB, t), o = (c) => Ym(e.name, e.configFields, e.partFields, e.factory, c), n = Nm(e.name, e.partFields), s = me(e.apis, Zi), r = me(e.extraApis, (c, a) => qd(c, a));
    return {
      name: e.name,
      partFields: e.partFields,
      configFields: e.configFields,
      sketch: o,
      parts: n,
      ...s,
      ...r
    };
  }, Oc = (t) => Of("input")(t) && He(t, "type") !== "radio" || Of("textarea")(t);
  var PB = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    getCurrent: (t, e, o) => e.find(t)
  });
  const LB = [k("find")], mt = ye({
    fields: LB,
    name: "composing",
    apis: PB
  }), VB = [
    "input",
    "button",
    "textarea",
    "select"
  ], Ey = (t, e, o) => {
    (e.disabled() ? Km : qm)(t, e);
  }, Xm = (t, e) => e.useNative === !0 && ie(VB, us(t.element)), HB = (t) => Bf(t.element, "disabled"), NB = (t) => {
    st(t.element, "disabled", "disabled");
  }, zB = (t) => {
    Qt(t.element, "disabled");
  }, UB = (t) => He(t.element, "aria-disabled") === "true", WB = (t) => {
    st(t.element, "aria-disabled", "true");
  }, GB = (t) => {
    st(t.element, "aria-disabled", "false");
  }, Km = (t, e, o) => {
    e.disableClass.each((s) => {
      ee(t.element, s);
    }), (Xm(t, e) ? NB : WB)(t), e.onDisabled(t);
  }, qm = (t, e, o) => {
    e.disableClass.each((s) => {
      Xt(t.element, s);
    }), (Xm(t, e) ? zB : GB)(t), e.onEnabled(t);
  }, Ay = (t, e) => Xm(t, e) ? HB(t) : UB(t);
  var jB = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    enable: qm,
    disable: Km,
    isDisabled: Ay,
    onLoad: Ey,
    set: (t, e, o, n) => {
      (n ? Km : qm)(t, e);
    }
  }), YB = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    exhibit: (t, e) => on({ classes: e.disabled() ? e.disableClass.toArray() : [] }),
    events: (t, e) => It([
      Ab(Ao(), (o, n) => Ay(o, t)),
      hm(t, e, Ey)
    ])
  }), XB = [
    he("disabled", Lt),
    S("useNative", !0),
    _t("disableClass"),
    pt("onDisabled"),
    pt("onEnabled")
  ];
  const q = ye({
    fields: XB,
    name: "disabling",
    active: YB,
    apis: jB
  }), Dy = (t, e, o, n) => {
    const s = eo(t.element, "." + e.highlightClass);
    Y(s, (r) => {
      Xo(n, (a) => Bt(a.element, r)) || (Xt(r, e.highlightClass), t.getSystem().getByDom(r).each((a) => {
        e.onDehighlight(t, a), xt(a, zd());
      }));
    });
  }, KB = (t, e, o) => Dy(t, e, o, []), qB = (t, e, o, n) => {
    Jm(t, e, o, n) && (Xt(n.element, e.highlightClass), e.onDehighlight(t, n), xt(n, zd()));
  }, $a = (t, e, o, n) => {
    Dy(t, e, o, [n]), Jm(t, e, o, n) || (ee(n.element, e.highlightClass), e.onHighlight(t, n), xt(n, Nd()));
  }, JB = (t, e, o) => {
    My(t, e).each((n) => {
      $a(t, e, o, n);
    });
  }, ZB = (t, e, o) => {
    $y(t, e).each((n) => {
      $a(t, e, o, n);
    });
  }, QB = (t, e, o, n) => {
    o1(t, e, o, n).fold((s) => {
      throw s;
    }, (s) => {
      $a(t, e, o, s);
    });
  }, t1 = (t, e, o, n) => {
    const s = By(t, e);
    Gt(s, n).each((c) => {
      $a(t, e, o, c);
    });
  }, Jm = (t, e, o, n) => ao(n.element, e.highlightClass), e1 = (t, e, o) => Jt(t.element, "." + e.highlightClass).bind((n) => t.getSystem().getByDom(n).toOptional()), o1 = (t, e, o, n) => {
    const s = eo(t.element, "." + e.itemClass);
    return u.from(s[n]).fold(() => ut.error(new Error("No element found with index " + n)), t.getSystem().getByDom);
  }, My = (t, e, o) => Jt(t.element, "." + e.itemClass).bind((n) => t.getSystem().getByDom(n).toOptional()), $y = (t, e, o) => {
    const n = eo(t.element, "." + e.itemClass);
    return (n.length > 0 ? u.some(n[n.length - 1]) : u.none()).bind((r) => t.getSystem().getByDom(r).toOptional());
  }, Fy = (t, e, o, n) => {
    const s = eo(t.element, "." + e.itemClass);
    return cc(s, (c) => ao(c, e.highlightClass)).bind((c) => {
      const a = wc(c, n, 0, s.length - 1);
      return t.getSystem().getByDom(s[a]).toOptional();
    });
  }, n1 = (t, e, o) => Fy(t, e, o, -1), s1 = (t, e, o) => Fy(t, e, o, 1), By = (t, e, o) => {
    const n = eo(t.element, "." + e.itemClass);
    return dr(B(n, (s) => t.getSystem().getByDom(s).toOptional()));
  };
  var r1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    dehighlightAll: KB,
    dehighlight: qB,
    highlight: $a,
    highlightFirst: JB,
    highlightLast: ZB,
    highlightAt: QB,
    highlightBy: t1,
    isHighlighted: Jm,
    getHighlighted: e1,
    getFirst: My,
    getLast: $y,
    getPrevious: n1,
    getNext: s1,
    getCandidates: By
  }), c1 = [
    k("highlightClass"),
    k("itemClass"),
    pt("onHighlight"),
    pt("onDehighlight")
  ];
  const yt = ye({
    fields: c1,
    name: "highlighting",
    apis: r1
  }), a1 = [8], Cs = [9], Yn = [13], xl = [27], ho = [32], Sl = [37], Fa = [38], wl = [39], kc = [40], i1 = (t, e, o) => {
    const n = la(t.slice(0, e)), s = la(t.slice(e + 1));
    return Gt(n.concat(s), o);
  }, l1 = (t, e, o) => {
    const n = la(t.slice(0, e));
    return Gt(n, o);
  }, u1 = (t, e, o) => {
    const n = t.slice(0, e), s = t.slice(e + 1);
    return Gt(s.concat(n), o);
  }, d1 = (t, e, o) => {
    const n = t.slice(e + 1);
    return Gt(n, o);
  }, gt = (t) => (e) => {
    const o = e.raw;
    return ie(t, o.which);
  }, Mn = (t) => (e) => ac(t, (o) => o(e)), Br = (t) => t.raw.shiftKey === !0, m1 = (t) => t.raw.ctrlKey === !0, Ba = ia(Br), bt = (t, e) => ({
    matches: t,
    classification: e
  }), g1 = (t, e) => Gt(t, (n) => n.matches(e)).map((n) => n.classification), Iy = (t, e, o) => {
    e.exists((s) => o.exists((r) => Bt(r, s))) || U(t, Xi(), {
      prevFocus: e,
      newFocus: o
    });
  }, Zm = () => {
    const t = (o) => Dn(o.element);
    return {
      get: t,
      set: (o, n) => {
        const s = t(o);
        o.getSystem().triggerFocus(n, o.element);
        const r = t(o);
        Iy(o, s, r);
      }
    };
  }, p1 = () => {
    const t = (o) => yt.getHighlighted(o).map((n) => n.element);
    return {
      get: t,
      set: (o, n) => {
        const s = t(o);
        o.getSystem().getByDom(n).fold(R, (c) => {
          yt.highlight(o, c);
        });
        const r = t(o);
        Iy(o, s, r);
      }
    };
  };
  var Ec;
  (function(t) {
    t.OnFocusMode = "onFocus", t.OnEnterOrSpaceMode = "onEnterOrSpace", t.OnApiMode = "onApi";
  })(Ec || (Ec = {}));
  const Ir = (t, e, o, n, s) => {
    const r = () => t.concat([
      S("focusManager", Zm()),
      Vo("focusInside", "onFocus", ya((l) => ie([
        "onFocus",
        "onEnterOrSpace",
        "onApi"
      ], l) ? ut.value(l) : ut.error("Invalid value for focusInside"))),
      Rt("handler", i),
      Rt("state", e),
      Rt("sendFocusIn", s)
    ]), c = (l, d, m, g, p) => {
      const h = m(l, d, g, p);
      return g1(h, d.event).bind((f) => f(l, d, g, p));
    }, i = {
      schema: r,
      processKey: c,
      toEvents: (l, d) => {
        const m = l.focusInside !== Ec.OnFocusMode ? u.none() : s(l).map((h) => O(zs(), (f, y) => {
          h(f, l, d), y.stop();
        })), g = (h, f) => {
          const y = gt(ho.concat(Yn))(f.event);
          l.focusInside === Ec.OnEnterOrSpaceMode && y && Sb(h, f) && s(l).each((v) => {
            v(h, l, d), f.stop();
          });
        }, p = [
          O(kn(), (h, f) => {
            c(h, f, o, l, d).fold(() => {
              g(h, f);
            }, (y) => {
              f.stop();
            });
          }),
          O(KD(), (h, f) => {
            c(h, f, n, l, d).each((y) => {
              f.stop();
            });
          })
        ];
        return It(m.toArray().concat(p));
      }
    };
    return i;
  }, Ry = (t) => {
    const e = [
      _t("onEscape"),
      _t("onEnter"),
      S("selector", '[data-alloy-tabstop="true"]:not(:disabled)'),
      S("firstTabstop", 0),
      S("useTabstopAt", Te),
      _t("visibilitySelector")
    ].concat([t]), o = (v, b) => {
      const x = v.visibilitySelector.bind((E) => An(b, E)).getOr(b);
      return ge(x) > 0;
    }, n = (v, b) => {
      const x = eo(v.element, b.selector), E = Ht(x, (C) => o(b, C));
      return u.from(E[b.firstTabstop]);
    }, s = (v, b) => b.focusManager.get(v).bind((x) => An(x, b.selector)), r = (v, b) => o(v, b) && v.useTabstopAt(b), c = (v, b, x) => {
      n(v, b).each((E) => {
        b.focusManager.set(v, E);
      });
    }, a = (v, b, x, E, C) => C(b, x, (_) => r(E, _)).fold(() => E.cyclic ? u.some(!0) : u.none(), (_) => (E.focusManager.set(v, _), u.some(!0))), i = (v, b, x, E) => {
      const C = eo(v.element, x.selector);
      return s(v, x).bind((_) => cc(C, Po(Bt, _)).bind((M) => a(v, C, M, x, E)));
    }, l = (v, b, x) => {
      const E = x.cyclic ? i1 : l1;
      return i(v, b, x, E);
    }, d = (v, b, x) => {
      const E = x.cyclic ? u1 : d1;
      return i(v, b, x, E);
    }, m = (v) => eA(v).bind(dd).exists((b) => Bt(b, v)), g = (v, b, x) => s(v, x).filter((E) => !x.useTabstopAt(E)).bind((E) => (m(E) ? l : d)(v, b, x)), p = (v, b, x) => x.onEnter.bind((E) => E(v, b)), h = (v, b, x) => x.onEscape.bind((E) => E(v, b)), f = w([
      bt(Mn([
        Br,
        gt(Cs)
      ]), l),
      bt(gt(Cs), d),
      bt(Mn([
        Ba,
        gt(Yn)
      ]), p)
    ]), y = w([
      bt(gt(xl), h),
      bt(gt(Cs), g)
    ]);
    return Ir(e, En.init, f, y, () => u.some(c));
  };
  var h1 = Ry(Qe("cyclic", Lt)), f1 = Ry(Qe("cyclic", Te));
  const b1 = (t, e, o) => (Ud(t, o, Ao()), u.some(!0)), Ia = (t, e, o) => Oc(o) && gt(ho)(e.event) ? u.none() : b1(t, e, o), Ac = (t, e) => u.some(!0), v1 = [
    S("execute", Ia),
    S("useSpace", !1),
    S("useEnter", !0),
    S("useControlEnter", !1),
    S("useDown", !1)
  ], Py = (t, e, o) => o.execute(t, e, t.element), y1 = (t, e, o, n) => {
    const s = o.useSpace && !Oc(t.element) ? ho : [], r = o.useEnter ? Yn : [], c = o.useDown ? kc : [], a = s.concat(r).concat(c);
    return [bt(gt(a), Py)].concat(o.useControlEnter ? [bt(Mn([
      m1,
      gt(Yn)
    ]), Py)] : []);
  }, x1 = (t, e, o, n) => o.useSpace && !Oc(t.element) ? [bt(gt(ho), Ac)] : [];
  var S1 = Ir(v1, En.init, y1, x1, () => u.none());
  const Ly = () => {
    const t = Pt();
    return Do({
      readState: () => t.get().map((s) => ({
        numRows: String(s.numRows),
        numColumns: String(s.numColumns)
      })).getOr({
        numRows: "?",
        numColumns: "?"
      }),
      setGridSize: (s, r) => {
        t.set({
          numRows: s,
          numColumns: r
        });
      },
      getNumRows: () => t.get().map((s) => s.numRows),
      getNumColumns: () => t.get().map((s) => s.numColumns)
    });
  };
  var w1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    flatgrid: Ly,
    init: (t) => t.state(t)
  });
  const Vy = (t) => (e, o, n, s) => {
    const r = t(e.element);
    return Hy(r, e, o, n, s);
  }, Qm = (t, e) => {
    const o = Tm(t, e);
    return Vy(o);
  }, tg = (t, e) => {
    const o = Tm(e, t);
    return Vy(o);
  }, eg = (t) => (e, o, n, s) => Hy(t, e, o, n, s), Hy = (t, e, o, n, s) => n.focusManager.get(e).bind((c) => t(e.element, c, n, s)).map((c) => (n.focusManager.set(e, c), !0)), Ny = eg, zy = eg, Tl = eg, T1 = (t) => t.offsetWidth <= 0 && t.offsetHeight <= 0, Uy = (t) => !T1(t.dom), _1 = (t, e) => cc(t, e).map((o) => ({
    index: o,
    candidates: t
  })), Wy = (t, e, o) => {
    const n = (c) => Bt(c, e), s = eo(t, o), r = Ht(s, Uy);
    return _1(r, n);
  }, Gy = (t, e) => cc(t, (o) => Bt(e, o)), jy = (t, e, o, n) => {
    const s = Math.floor(e / o), r = e % o;
    return n(s, r).bind((c) => {
      const a = c.row * o + c.column;
      return a >= 0 && a < t.length ? u.some(t[a]) : u.none();
    });
  }, Yy = (t, e, o, n, s) => jy(t, e, n, (r, c) => {
    const i = r === o - 1 ? t.length - r * n : n, l = wc(c, s, 0, i - 1);
    return u.some({
      row: r,
      column: l
    });
  }), Xy = (t, e, o, n, s) => jy(t, e, n, (r, c) => {
    const a = wc(r, s, 0, o - 1), l = a === o - 1 ? t.length - a * n : n, d = Mo(c, 0, l - 1);
    return u.some({
      row: a,
      column: d
    });
  }), C1 = (t, e, o, n) => Yy(t, e, o, n, 1), O1 = (t, e, o, n) => Yy(t, e, o, n, -1), k1 = (t, e, o, n) => Xy(t, e, o, n, -1), E1 = (t, e, o, n) => Xy(t, e, o, n, 1), A1 = [
    k("selector"),
    S("execute", Ia),
    go("onEscape"),
    S("captureTab", !1),
    tv()
  ], D1 = (t, e, o) => {
    Jt(t.element, e.selector).each((n) => {
      e.focusManager.set(t, n);
    });
  }, M1 = (t, e) => e.focusManager.get(t).bind((o) => An(o, e.selector)), $1 = (t, e, o, n) => M1(t, o).bind((s) => o.execute(t, e, s)), _l = (t) => (e, o, n, s) => Wy(e, o, n.selector).bind((r) => t(r.candidates, r.index, s.getNumRows().getOr(n.initSize.numRows), s.getNumColumns().getOr(n.initSize.numColumns))), Ky = (t, e, o) => o.captureTab ? u.some(!0) : u.none(), F1 = (t, e, o) => o.onEscape(t, e), qy = _l(O1), Jy = _l(C1), B1 = _l(k1), I1 = _l(E1), R1 = w([
    bt(gt(Sl), Qm(qy, Jy)),
    bt(gt(wl), tg(qy, Jy)),
    bt(gt(Fa), Ny(B1)),
    bt(gt(kc), zy(I1)),
    bt(Mn([
      Br,
      gt(Cs)
    ]), Ky),
    bt(Mn([
      Ba,
      gt(Cs)
    ]), Ky),
    bt(gt(ho.concat(Yn)), $1)
  ]), P1 = w([
    bt(gt(xl), F1),
    bt(gt(ho), Ac)
  ]);
  var L1 = Ir(A1, Ly, R1, P1, () => u.some(D1));
  const Zy = (t, e, o, n, s) => {
    const r = (a) => us(a) === "button" && He(a, "disabled") === "disabled", c = (a, i, l) => s(a, i, n, 0, l.length - 1, l[i], (d) => r(l[d]) ? c(a, d, l) : u.from(l[d]));
    return Wy(t, o, e).bind((a) => {
      const i = a.index, l = a.candidates;
      return c(i, i, l);
    });
  }, Qy = (t, e, o, n) => Zy(t, e, o, n, (s, r, c, a, i, l, d) => {
    const m = Mo(r + c, a, i);
    return m === s ? u.from(l) : d(m);
  }), Cl = (t, e, o, n) => Zy(t, e, o, n, (s, r, c, a, i, l, d) => {
    const m = wc(r, c, a, i);
    return m === s ? u.none() : d(m);
  }), V1 = [
    k("selector"),
    S("getInitial", u.none),
    S("execute", Ia),
    go("onEscape"),
    S("executeOnMove", !1),
    S("allowVertical", !0),
    S("allowHorizontal", !0),
    S("cycles", !0)
  ], H1 = (t, e) => e.focusManager.get(t).bind((o) => An(o, e.selector)), og = (t, e, o) => H1(t, o).bind((n) => o.execute(t, e, n)), N1 = (t, e, o) => {
    e.getInitial(t).orThunk(() => Jt(t.element, e.selector)).each((n) => {
      e.focusManager.set(t, n);
    });
  }, tx = (t, e, o) => (o.cycles ? Cl : Qy)(t, o.selector, e, -1), ex = (t, e, o) => (o.cycles ? Cl : Qy)(t, o.selector, e, 1), ox = (t) => (e, o, n, s) => t(e, o, n, s).bind(() => n.executeOnMove ? og(e, o, n) : u.some(!0)), z1 = (t, e, o) => o.onEscape(t, e), U1 = (t, e, o, n) => {
    const s = [...o.allowHorizontal ? Sl : []].concat(o.allowVertical ? Fa : []), r = [...o.allowHorizontal ? wl : []].concat(o.allowVertical ? kc : []);
    return [
      bt(gt(s), ox(Qm(tx, ex))),
      bt(gt(r), ox(tg(tx, ex))),
      bt(gt(Yn), og),
      bt(gt(ho), og)
    ];
  }, W1 = w([
    bt(gt(ho), Ac),
    bt(gt(xl), z1)
  ]);
  var G1 = Ir(V1, En.init, U1, W1, () => u.some(N1));
  const Ol = (t, e, o) => u.from(t[e]).bind((n) => u.from(n[o]).map((s) => ({
    rowIndex: e,
    columnIndex: o,
    cell: s
  }))), nx = (t, e, o, n) => {
    const r = t[e].length, c = wc(o, n, 0, r - 1);
    return Ol(t, e, c);
  }, sx = (t, e, o, n) => {
    const s = wc(o, n, 0, t.length - 1), r = t[s].length, c = Mo(e, 0, r - 1);
    return Ol(t, s, c);
  }, rx = (t, e, o, n) => {
    const r = t[e].length, c = Mo(o + n, 0, r - 1);
    return Ol(t, e, c);
  }, cx = (t, e, o, n) => {
    const s = Mo(o + n, 0, t.length - 1), r = t[s].length, c = Mo(e, 0, r - 1);
    return Ol(t, s, c);
  }, j1 = (t, e, o) => nx(t, e, o, 1), Y1 = (t, e, o) => nx(t, e, o, -1), X1 = (t, e, o) => sx(t, o, e, -1), K1 = (t, e, o) => sx(t, o, e, 1), q1 = (t, e, o) => rx(t, e, o, -1), J1 = (t, e, o) => rx(t, e, o, 1), Z1 = (t, e, o) => cx(t, o, e, -1), Q1 = (t, e, o) => cx(t, o, e, 1), tI = [
    Ns("selectors", [
      k("row"),
      k("cell")
    ]),
    S("cycles", !0),
    S("previousSelector", u.none),
    S("execute", Ia)
  ], eI = (t, e, o) => {
    e.previousSelector(t).orThunk(() => {
      const s = e.selectors;
      return Jt(t.element, s.cell);
    }).each((s) => {
      e.focusManager.set(t, s);
    });
  }, oI = (t, e, o) => Dn(t.element).bind((n) => o.execute(t, e, n)), nI = (t, e) => B(t, (o) => eo(o, e.selectors.cell)), kl = (t, e) => (o, n, s) => {
    const r = s.cycles ? t : e;
    return An(n, s.selectors.row).bind((c) => {
      const a = eo(c, s.selectors.cell);
      return Gy(a, n).bind((i) => {
        const l = eo(o, s.selectors.row);
        return Gy(l, c).bind((d) => {
          const m = nI(l, s);
          return r(m, d, i).map((g) => g.cell);
        });
      });
    });
  }, ax = kl(Y1, q1), ix = kl(j1, J1), sI = kl(X1, Z1), rI = kl(K1, Q1), cI = w([
    bt(gt(Sl), Qm(ax, ix)),
    bt(gt(wl), tg(ax, ix)),
    bt(gt(Fa), Ny(sI)),
    bt(gt(kc), zy(rI)),
    bt(gt(ho.concat(Yn)), oI)
  ]), aI = w([bt(gt(ho), Ac)]);
  var iI = Ir(tI, En.init, cI, aI, () => u.some(eI));
  const lI = [
    k("selector"),
    S("execute", Ia),
    S("moveOnTab", !1)
  ], lx = (t, e, o) => o.focusManager.get(t).bind((n) => o.execute(t, e, n)), uI = (t, e, o) => {
    Jt(t.element, e.selector).each((n) => {
      e.focusManager.set(t, n);
    });
  }, ux = (t, e, o) => Cl(t, o.selector, e, -1), dx = (t, e, o) => Cl(t, o.selector, e, 1), dI = (t, e, o, n) => o.moveOnTab ? Tl(ux)(t, e, o, n) : u.none(), mI = (t, e, o, n) => o.moveOnTab ? Tl(dx)(t, e, o, n) : u.none(), gI = w([
    bt(gt(Fa), Tl(ux)),
    bt(gt(kc), Tl(dx)),
    bt(Mn([
      Br,
      gt(Cs)
    ]), dI),
    bt(Mn([
      Ba,
      gt(Cs)
    ]), mI),
    bt(gt(Yn), lx),
    bt(gt(ho), lx)
  ]), pI = w([bt(gt(ho), Ac)]);
  var hI = Ir(lI, En.init, gI, pI, () => u.some(uI));
  const fI = [
    go("onSpace"),
    go("onEnter"),
    go("onShiftEnter"),
    go("onLeft"),
    go("onRight"),
    go("onTab"),
    go("onShiftTab"),
    go("onUp"),
    go("onDown"),
    go("onEscape"),
    S("stopSpaceKeyup", !1),
    _t("focusIn")
  ], bI = (t, e, o) => [
    bt(gt(ho), o.onSpace),
    bt(Mn([
      Ba,
      gt(Yn)
    ]), o.onEnter),
    bt(Mn([
      Br,
      gt(Yn)
    ]), o.onShiftEnter),
    bt(Mn([
      Br,
      gt(Cs)
    ]), o.onShiftTab),
    bt(Mn([
      Ba,
      gt(Cs)
    ]), o.onTab),
    bt(gt(Fa), o.onUp),
    bt(gt(kc), o.onDown),
    bt(gt(Sl), o.onLeft),
    bt(gt(wl), o.onRight),
    bt(gt(ho), o.onSpace)
  ], vI = (t, e, o) => [
    ...o.stopSpaceKeyup ? [bt(gt(ho), Ac)] : [],
    bt(gt(xl), o.onEscape)
  ];
  var yI = Ir(fI, En.init, bI, vI, (t) => t.focusIn);
  const xI = h1.schema(), SI = f1.schema(), wI = G1.schema(), TI = L1.schema(), _I = iI.schema(), CI = S1.schema(), OI = hI.schema(), kI = yI.schema();
  var EI = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    acyclic: xI,
    cyclic: SI,
    flow: wI,
    flatgrid: TI,
    matrix: _I,
    execution: CI,
    menu: OI,
    special: kI
  });
  const AI = (t) => Ko(t, "setGridSize"), z = pv({
    branchKey: "mode",
    branches: EI,
    name: "keying",
    active: {
      events: (t, e) => t.handler.toEvents(t, e)
    },
    apis: {
      focusIn: (t, e, o) => {
        e.sendFocusIn(e).fold(() => {
          t.getSystem().triggerFocus(t.element, t.element);
        }, (n) => {
          n(t, e, o);
        });
      },
      setGridSize: (t, e, o, n, s) => {
        AI(o) ? o.setGridSize(n, s) : console.error("Layout does not support setGridSize");
      }
    },
    state: w1
  }), mx = (t, e) => {
    bm(() => {
      IF(t, e, () => B(e, t.getSystem().build));
    }, t.element);
  }, gx = (t, e) => {
    bm(() => {
      RF(t, e, () => o$(t.element, e, t.getSystem().buildOrPatch));
    }, t.element);
  }, DI = (t, e, o, n) => {
    Dm(e);
    const s = Ub(t.element, o, n, t.getSystem().buildOrPatch);
    Zv(t, s), t.syncComponents();
  }, ng = (t, e, o) => {
    const n = t.getSystem().build(o);
    ty(t, n, e);
  }, MI = (t, e, o, n) => {
    _s(e), ng(t, (s, r) => KA(s, r, o), n);
  }, $I = (t, e, o, n) => (e.reuseDom ? gx : mx)(t, n), FI = (t, e, o, n) => {
    ng(t, Zo, n);
  }, BI = (t, e, o, n) => {
    ng(t, XA, n);
  }, II = (t, e, o, n) => {
    const s = El(t);
    Gt(s, (c) => Bt(n.element, c.element)).each(_s);
  }, El = (t, e) => t.components(), px = (t, e, o, n, s) => {
    const r = El(t);
    return u.from(r[n]).map((c) => (s.fold(() => _s(c), (a) => {
      (e.reuseDom ? DI : MI)(t, c, n, a);
    }), c));
  };
  var RI = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    append: FI,
    prepend: BI,
    remove: II,
    replaceAt: px,
    replaceBy: (t, e, o, n, s) => {
      const r = El(t);
      return cc(r, n).bind((c) => px(t, e, o, c, s));
    },
    set: $I,
    contents: El
  });
  const et = ye({
    fields: [Ie("reuseDom", !0)],
    name: "replacing",
    apis: RI
  }), PI = (t, e) => {
    const o = It(e);
    return ye({
      fields: [k("enabled")],
      name: t,
      active: { events: w(o) }
    });
  }, nt = (t, e) => {
    const o = PI(t, e);
    return {
      key: t,
      value: {
        config: {},
        me: o,
        configAsRaw: w({}),
        initialConfig: {},
        state: En
      }
    };
  }, hx = (t, e) => {
    e.ignore || (sn(t.element), e.onFocus(t));
  };
  var LI = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    focus: hx,
    blur: (t, e) => {
      e.ignore || fm(t.element);
    },
    isFocused: (t) => ka(t.element)
  }), VI = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    exhibit: (t, e) => {
      const o = e.ignore ? {} : { attributes: { tabindex: "-1" } };
      return on(o);
    },
    events: (t) => It([O(zs(), (e, o) => {
      hx(e, t), o.stop();
    })].concat(t.stopMousedown ? [O(Ho(), (e, o) => {
      o.event.prevent();
    })] : []))
  }), HI = [
    pt("onFocus"),
    S("stopMousedown", !1),
    S("ignore", !1)
  ];
  const Z = ye({
    fields: HI,
    name: "focusing",
    active: VI,
    apis: LI
  }), NI = (t) => ({ init: () => {
    const o = j(t);
    return {
      get: () => o.get(),
      set: (a) => o.set(a),
      clear: () => o.set(t),
      readState: () => o.get()
    };
  } }), zI = (t, e, o) => {
    const n = e.aria;
    n.update(t, n, o.get());
  }, UI = (t, e, o) => {
    e.toggleClass.each((n) => {
      o.get() ? ee(t.element, n) : Xt(t.element, n);
    });
  }, Ra = (t, e, o, n) => {
    const s = o.get();
    o.set(n), UI(t, e, o), zI(t, e, o), s !== n && e.onToggled(t, n);
  }, fx = (t, e, o) => {
    Ra(t, e, o, !o.get());
  }, WI = (t, e, o) => {
    Ra(t, e, o, !0);
  }, GI = (t, e, o) => {
    Ra(t, e, o, !1);
  }, jI = (t, e, o) => o.get(), bx = (t, e, o) => {
    Ra(t, e, o, e.selected);
  };
  var YI = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    onLoad: bx,
    toggle: fx,
    isOn: jI,
    on: WI,
    off: GI,
    set: Ra
  }), XI = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    exhibit: () => on({}),
    events: (t, e) => {
      const o = z$(t, e, fx), n = hm(t, e, bx);
      return It(_e([
        t.toggleOnExecute ? [o] : [],
        [n]
      ]));
    }
  });
  const KI = (t, e, o) => {
    st(t.element, "aria-pressed", o), e.syncWithExpanded && vx(t, e, o);
  }, qI = (t, e, o) => {
    st(t.element, "aria-selected", o);
  }, JI = (t, e, o) => {
    st(t.element, "aria-checked", o);
  }, vx = (t, e, o) => {
    st(t.element, "aria-expanded", o);
  };
  var ZI = [
    S("selected", !1),
    _t("toggleClass"),
    S("toggleOnExecute", !0),
    pt("onToggled"),
    Vo("aria", { mode: "none" }, mo("mode", {
      pressed: [
        S("syncWithExpanded", !1),
        Rt("update", KI)
      ],
      checked: [Rt("update", JI)],
      expanded: [Rt("update", vx)],
      selected: [Rt("update", qI)],
      none: [Rt("update", R)]
    }))
  ];
  const ct = ye({
    fields: ZI,
    name: "toggling",
    active: XI,
    apis: YI,
    state: NI(!1)
  }), yx = () => {
    const t = (e, o) => {
      o.stop(), Cr(e);
    };
    return [
      O(wr(), t),
      O(_a(), t),
      Or(bs()),
      Or(Ho())
    ];
  }, Al = (t) => {
    const e = (o) => xs((n, s) => {
      o(n), s.stop();
    });
    return It(_e([
      t.map(e).toArray(),
      yx()
    ]));
  }, xx = "alloy.item-hover", Sx = "alloy.item-focus", wx = "alloy.item-toggled", Tx = (t) => {
    (Dn(t.element).isNone() || Z.isFocused(t)) && (Z.isFocused(t) || Z.focus(t), U(t, xx, { item: t }));
  }, _x = (t) => {
    U(t, Sx, { item: t });
  }, QI = (t, e) => {
    U(t, wx, {
      item: t,
      state: e
    });
  }, Cx = w(xx), tR = w(Sx), eR = w(wx), oR = (t) => t.toggling.map((e) => e.exclusive ? "menuitemradio" : "menuitemcheckbox").getOr("menuitem"), nR = (t) => ({
    aria: { mode: "checked" },
    ...bf(t, (e, o) => o !== "exclusive"),
    onToggled: (e, o) => {
      To(t.onToggled) && t.onToggled(e, o), QI(e, o);
    }
  }), sR = (t) => ({
    dom: t.dom,
    domModification: {
      ...t.domModification,
      attributes: {
        role: oR(t),
        ...t.domModification.attributes,
        "aria-haspopup": t.hasSubmenu,
        ...t.hasSubmenu ? { "aria-expanded": !1 } : {}
      }
    },
    behaviours: cn.augment(t.itemBehaviours, [
      t.toggling.fold(ct.revoke, (e) => ct.config(nR(e))),
      Z.config({
        ignore: t.ignoreFocus,
        stopMousedown: t.ignoreFocus,
        onFocus: (e) => {
          _x(e);
        }
      }),
      z.config({ mode: "execution" }),
      I.config({
        store: {
          mode: "memory",
          initialValue: t.data
        }
      }),
      nt("item-type-events", [
        ...yx(),
        O(vs(), Tx),
        O(Ta(), Z.focus)
      ])
    ]),
    components: t.components,
    eventOrder: t.eventOrder
  }), rR = [
    k("data"),
    k("components"),
    k("dom"),
    S("hasSubmenu", !1),
    _t("toggling"),
    cn.field("itemBehaviours", [
      ct,
      Z,
      z,
      I
    ]),
    S("ignoreFocus", !1),
    S("domModification", {}),
    Rt("builder", sR),
    S("eventOrder", {})
  ], cR = (t) => ({
    dom: t.dom,
    components: t.components,
    events: It([aM(Ta())])
  }), aR = [
    k("dom"),
    k("components"),
    Rt("builder", cR)
  ], sg = w("item-widget"), rg = w([Pe({
    name: "widget",
    overrides: (t) => ({
      behaviours: D([I.config({
        store: {
          mode: "manual",
          getValue: (e) => t.data,
          setValue: R
        }
      })])
    })
  })]), iR = (t) => {
    const e = Um(sg(), t, rg()), o = Wm(sg(), t, e.internals()), n = (r) => Dt(r, t, "widget").map((c) => (z.focusIn(c), c)), s = (r, c) => Oc(c.event.target) ? u.none() : (t.autofocus && c.setSource(r.element), u.none());
    return {
      dom: t.dom,
      components: o,
      domModification: t.domModification,
      events: It([
        xs((r, c) => {
          n(r).each((a) => {
            c.stop();
          });
        }),
        O(vs(), Tx),
        O(Ta(), (r, c) => {
          t.autofocus ? n(r) : Z.focus(r);
        })
      ]),
      behaviours: cn.augment(t.widgetBehaviours, [
        I.config({
          store: {
            mode: "memory",
            initialValue: t.data
          }
        }),
        Z.config({
          ignore: t.ignoreFocus,
          onFocus: (r) => {
            _x(r);
          }
        }),
        z.config({
          mode: "special",
          focusIn: t.autofocus ? (r) => {
            n(r);
          } : K$(),
          onLeft: s,
          onRight: s,
          onEscape: (r, c) => !Z.isFocused(r) && !t.autofocus ? (Z.focus(r), u.some(!0)) : (t.autofocus && c.setSource(r.element), u.none())
        })
      ])
    };
  }, lR = [
    k("uid"),
    k("data"),
    k("components"),
    k("dom"),
    S("autofocus", !1),
    S("ignoreFocus", !1),
    cn.field("widgetBehaviours", [
      I,
      Z,
      z
    ]),
    S("domModification", {}),
    jm(rg()),
    Rt("builder", iR)
  ], uR = mo("type", {
    widget: lR,
    item: rR,
    separator: aR
  }), dR = (t, e) => ({
    mode: "flatgrid",
    selector: "." + t.markers.item,
    initSize: {
      numColumns: e.initSize.numColumns,
      numRows: e.initSize.numRows
    },
    focusManager: t.focusManager
  }), mR = (t, e) => ({
    mode: "matrix",
    selectors: {
      row: e.rowSelector,
      cell: "." + t.markers.item
    },
    previousSelector: e.previousSelector,
    focusManager: t.focusManager
  }), gR = (t, e) => ({
    mode: "menu",
    selector: "." + t.markers.item,
    moveOnTab: e.moveOnTab,
    focusManager: t.focusManager
  }), pR = w([yl({
    factory: {
      sketch: (t) => {
        const e = co("menu.spec item", uR, t);
        return e.builder(e);
      }
    },
    name: "items",
    unit: "item",
    defaults: (t, e) => At(e, "uid") ? e : {
      ...e,
      uid: yc("item")
    },
    overrides: (t, e) => ({
      type: e.type,
      ignoreFocus: t.fakeFocus,
      domModification: { classes: [t.markers.item] }
    })
  })]), hR = w([
    k("value"),
    k("items"),
    k("dom"),
    k("components"),
    S("eventOrder", {}),
    be("menuBehaviours", [
      yt,
      I,
      mt,
      z
    ]),
    Vo("movement", {
      mode: "menu",
      moveOnTab: !0
    }, mo("mode", {
      grid: [
        tv(),
        Rt("config", dR)
      ],
      matrix: [
        Rt("config", mR),
        k("rowSelector"),
        S("previousSelector", u.none)
      ],
      menu: [
        S("moveOnTab", !0),
        Rt("config", gR)
      ]
    })),
    M$(),
    S("fakeFocus", !1),
    S("focusManager", Zm()),
    pt("onHighlight"),
    pt("onDehighlight")
  ]), Ox = w("alloy.menu-focus"), fR = (t, e) => {
    const o = eo(t.element, '[role="menuitemradio"][aria-checked="true"]');
    Y(o, (n) => {
      Bt(n, e.element) || t.getSystem().getByDom(n).each((s) => {
        ct.off(s);
      });
    });
  }, bR = (t, e, o, n) => ({
    uid: t.uid,
    dom: t.dom,
    markers: t.markers,
    behaviours: xe(t.menuBehaviours, [
      yt.config({
        highlightClass: t.markers.selectedItem,
        itemClass: t.markers.item,
        onHighlight: t.onHighlight,
        onDehighlight: t.onDehighlight
      }),
      I.config({
        store: {
          mode: "memory",
          initialValue: t.value
        }
      }),
      mt.config({ find: u.some }),
      z.config(t.movement.config(t, t.movement))
    ]),
    events: It([
      O(tR(), (s, r) => {
        const c = r.event;
        s.getSystem().getByDom(c.target).each((a) => {
          yt.highlight(s, a), r.stop(), U(s, Ox(), {
            menu: s,
            item: a
          });
        });
      }),
      O(Cx(), (s, r) => {
        const c = r.event.item;
        yt.highlight(s, c);
      }),
      O(eR(), (s, r) => {
        const { item: c, state: a } = r.event;
        a && He(c.element, "role") === "menuitemradio" && fR(s, c);
      })
    ]),
    components: e,
    eventOrder: t.eventOrder,
    domModification: { attributes: { role: "menu" } }
  }), Rr = Ge({
    name: "Menu",
    configFields: hR(),
    partFields: pR(),
    factory: bR
  }), vR = (t) => hf(t, (e, o) => ({
    k: e,
    v: o
  })), kx = (t, e, o, n) => Q(o, n).bind((s) => Q(t, s).bind((r) => {
    const c = kx(t, e, o, r);
    return u.some([r].concat(c));
  })).getOr([]), yR = (t, e) => {
    const o = {};
    Ve(t, (c, a) => {
      Y(c, (i) => {
        o[i] = a;
      });
    });
    const n = e, s = vR(e), r = me(s, (c, a) => [a].concat(kx(o, n, s, a)));
    return me(o, (c) => Q(r, c).getOr([c]));
  }, xR = () => {
    const t = j({}), e = j({}), o = j({}), n = Pt(), s = j({}), r = () => {
      t.set({}), e.set({}), o.set({}), n.clear();
    }, c = () => n.get().isNone(), a = (C, _) => {
      e.set({
        ...e.get(),
        [C]: {
          type: "prepared",
          menu: _
        }
      });
    }, i = (C, _, A, M) => {
      n.set(C), t.set(A), e.set(_), s.set(M);
      const ot = yR(M, A);
      o.set(ot);
    }, l = (C) => rd(t.get(), (_, A) => _ === C), d = (C, _, A) => f(C).bind((M) => l(C).bind((ot) => _(ot).map((V) => ({
      triggeredMenu: M,
      triggeringItem: V,
      triggeringPath: A
    })))), m = (C, _) => {
      const A = Ht(v(C).toArray(), (M) => f(M).isSome());
      return Q(o.get(), C).bind((M) => {
        const ot = la(A.concat(M)), V = le(ot, (W, K) => d(W, _, ot.slice(0, K + 1)).fold(() => Sn(n.get(), W) ? [] : [u.none()], (vt) => [u.some(vt)]));
        return FE(V);
      });
    }, g = (C) => Q(t.get(), C).map((_) => {
      const A = Q(o.get(), C).getOr([]);
      return [_].concat(A);
    }), p = (C) => Q(o.get(), C).bind((_) => _.length > 1 ? u.some(_.slice(1)) : u.none()), h = (C) => Q(o.get(), C), f = (C) => y(C).bind(Ex), y = (C) => Q(e.get(), C), v = (C) => Q(t.get(), C);
    return {
      setMenuBuilt: a,
      setContents: i,
      expand: g,
      refresh: h,
      collapse: p,
      lookupMenu: y,
      lookupItem: v,
      otherMenus: (C) => {
        const _ = s.get();
        return ur(ue(_), C);
      },
      getPrimary: () => n.get().bind(f),
      getMenus: () => e.get(),
      clear: r,
      isClear: c,
      getTriggeringPath: m
    };
  }, Ex = (t) => t.type === "prepared" ? u.some(t.menu) : u.none(), Ax = {
    init: xR,
    extractPreparedMenu: Ex
  }, Dx = P("tiered-menu-item-highlight"), Mx = P("tiered-menu-item-dehighlight");
  var oo;
  (function(t) {
    t[t.HighlightMenuAndItem = 0] = "HighlightMenuAndItem", t[t.HighlightJustMenu = 1] = "HighlightJustMenu", t[t.HighlightNone = 2] = "HighlightNone";
  })(oo || (oo = {}));
  const SR = (t, e) => {
    const o = Pt(), n = ($, L, J) => me(J, (it, G) => {
      const tt = () => Rr.sketch({
        ...it,
        value: G,
        markers: t.markers,
        fakeFocus: t.fakeFocus,
        onHighlight: (Ot, ft) => {
          U(Ot, Dx, {
            menuComp: Ot,
            itemComp: ft
          });
        },
        onDehighlight: (Ot, ft) => {
          U(Ot, Mx, {
            menuComp: Ot,
            itemComp: ft
          });
        },
        focusManager: t.fakeFocus ? p1() : Zm()
      });
      return G === L ? {
        type: "prepared",
        menu: $.getSystem().build(tt())
      } : {
        type: "notbuilt",
        nbMenu: tt
      };
    }), s = Ax.init(), r = ($) => {
      const L = n($, t.data.primary, t.data.menus), J = i();
      return s.setContents(t.data.primary, L, t.data.expansions, J), s.getPrimary();
    }, c = ($) => I.getValue($).value, a = ($, L, J) => xn(L, (it) => {
      if (!it.getSystem().isConnected())
        return u.none();
      const G = yt.getCandidates(it);
      return Gt(G, (tt) => c(tt) === J);
    }), i = ($) => me(t.data.menus, (L, J) => le(L.items, (it) => it.type === "separator" ? [] : [it.data.value])), l = yt.highlight, d = ($, L) => {
      l($, L), yt.getHighlighted(L).orThunk(() => yt.getFirst(L)).each((J) => {
        t.fakeFocus ? yt.highlight(L, J) : Ud($, J.element, Ta());
      });
    }, m = ($, L) => dr(B(L, (J) => $.lookupMenu(J).bind((it) => it.type === "prepared" ? u.some(it.menu) : u.none()))), g = ($, L, J) => {
      const it = m(L, L.otherMenus(J));
      Y(it, (G) => {
        nn(G.element, [t.markers.backgroundMenu]), t.stayInDom || et.remove($, G);
      });
    }, p = ($) => o.get().getOrThunk(() => {
      const L = {}, J = eo($.element, `.${t.markers.item}`), it = Ht(J, (G) => He(G, "aria-haspopup") === "true");
      return Y(it, (G) => {
        $.getSystem().getByDom(G).each((tt) => {
          const Ot = c(tt);
          L[Ot] = tt;
        });
      }), o.set(L), L;
    }), h = ($, L) => {
      const J = p($);
      Ve(J, (it, G) => {
        const tt = ie(L, G);
        st(it.element, "aria-expanded", tt);
      });
    }, f = ($, L, J) => u.from(J[0]).bind((it) => L.lookupMenu(it).bind((G) => {
      if (G.type === "notbuilt")
        return u.none();
      {
        const tt = G.menu, Ot = m(L, J.slice(1));
        return Y(Ot, (ft) => {
          ee(ft.element, t.markers.backgroundMenu);
        }), qo(tt.element) || et.append($, No(tt)), nn(tt.element, [t.markers.backgroundMenu]), d($, tt), g($, L, J), u.some(tt);
      }
    }));
    let y;
    (function($) {
      $[$.HighlightSubmenu = 0] = "HighlightSubmenu", $[$.HighlightParent = 1] = "HighlightParent";
    })(y || (y = {}));
    const v = ($, L, J) => {
      if (J.type === "notbuilt") {
        const it = $.getSystem().build(J.nbMenu());
        return s.setMenuBuilt(L, it), it;
      } else
        return J.menu;
    }, b = ($, L, J = y.HighlightSubmenu) => {
      if (L.hasConfigured(q) && q.isDisabled(L))
        return u.some(L);
      {
        const it = c(L);
        return s.expand(it).bind((G) => (h($, G), u.from(G[0]).bind((tt) => s.lookupMenu(tt).bind((Ot) => {
          const ft = v($, tt, Ot);
          return qo(ft.element) || et.append($, No(ft)), t.onOpenSubmenu($, L, ft, la(G)), J === y.HighlightSubmenu ? (yt.highlightFirst(ft), f($, s, G)) : (yt.dehighlightAll(ft), u.some(L));
        }))));
      }
    }, x = ($, L) => {
      const J = c(L);
      return s.collapse(J).bind((it) => (h($, it), f($, s, it).map((G) => (t.onCollapseMenu($, L, G), G))));
    }, E = ($, L) => {
      const J = c(L);
      return s.refresh(J).bind((it) => (h($, it), f($, s, it)));
    }, C = ($, L) => Oc(L.element) ? u.none() : b($, L, y.HighlightSubmenu), _ = ($, L) => Oc(L.element) ? u.none() : x($, L), A = ($, L) => x($, L).orThunk(() => t.onEscape($, L).map(() => $)), M = ($) => (L, J) => An(J.getSource(), `.${t.markers.item}`).bind((it) => L.getSystem().getByDom(it).toOptional().bind((G) => $(L, G).map(Te))), ot = It([
      O(Ox(), ($, L) => {
        const J = L.event.item;
        s.lookupItem(c(J)).each(() => {
          const it = L.event.menu;
          yt.highlight($, it);
          const G = c(L.event.item);
          s.refresh(G).each((tt) => g($, s, tt));
        });
      }),
      xs(($, L) => {
        const J = L.event.target;
        $.getSystem().getByDom(J).each((it) => {
          c(it).indexOf("collapse-item") === 0 && x($, it), b($, it, y.HighlightSubmenu).fold(() => {
            t.onExecute($, it);
          }, R);
        });
      }),
      Vt(($, L) => {
        r($).each((J) => {
          et.append($, No(J)), t.onOpenMenu($, J), t.highlightOnOpen === oo.HighlightMenuAndItem ? d($, J) : t.highlightOnOpen === oo.HighlightJustMenu && l($, J);
        });
      }),
      O(Dx, ($, L) => {
        t.onHighlightItem($, L.event.menuComp, L.event.itemComp);
      }),
      O(Mx, ($, L) => {
        t.onDehighlightItem($, L.event.menuComp, L.event.itemComp);
      }),
      ...t.navigateOnHover ? [O(Cx(), ($, L) => {
        const J = L.event.item;
        E($, J), b($, J, y.HighlightParent), t.onHover($, J);
      })] : []
    ]), V = ($) => yt.getHighlighted($).bind(yt.getHighlighted), W = ($) => {
      V($).each((L) => {
        x($, L);
      });
    }, K = ($) => {
      s.getPrimary().each((L) => {
        d($, L);
      });
    }, vt = ($) => u.from($.components()[0]).filter((L) => He(L.element, "role") === "menu"), dt = {
      collapseMenu: W,
      highlightPrimary: K,
      repositionMenus: ($) => {
        s.getPrimary().bind((J) => V($).bind((it) => {
          const G = c(it), tt = cd(s.getMenus()), Ot = dr(B(tt, Ax.extractPreparedMenu));
          return s.getTriggeringPath(G, (ft) => a($, Ot, ft));
        }).map((it) => ({
          primary: J,
          triggeringPath: it
        }))).fold(() => {
          vt($).each((J) => {
            t.onRepositionMenu($, J, []);
          });
        }, ({ primary: J, triggeringPath: it }) => {
          t.onRepositionMenu($, J, it);
        });
      }
    };
    return {
      uid: t.uid,
      dom: t.dom,
      markers: t.markers,
      behaviours: xe(t.tmenuBehaviours, [
        z.config({
          mode: "special",
          onRight: M(C),
          onLeft: M(_),
          onEscape: M(A),
          focusIn: ($, L) => {
            s.getPrimary().each((J) => {
              Ud($, J.element, Ta());
            });
          }
        }),
        yt.config({
          highlightClass: t.markers.selectedMenu,
          itemClass: t.markers.menu
        }),
        mt.config({
          find: ($) => yt.getHighlighted($)
        }),
        et.config({})
      ]),
      eventOrder: t.eventOrder,
      apis: dt,
      events: ot
    };
  }, wR = w("collapse-item"), TR = (t, e, o) => ({
    primary: t,
    menus: e,
    expansions: o
  }), _R = (t, e) => ({
    primary: t,
    menus: yr(t, e),
    expansions: {}
  }), CR = (t) => ({
    value: P(wR()),
    meta: { text: t }
  }), Pr = $o({
    name: "TieredMenu",
    configFields: [
      rm("onExecute"),
      rm("onEscape"),
      $r("onOpenMenu"),
      $r("onOpenSubmenu"),
      pt("onRepositionMenu"),
      pt("onCollapseMenu"),
      S("highlightOnOpen", oo.HighlightMenuAndItem),
      Ns("data", [
        k("primary"),
        k("menus"),
        k("expansions")
      ]),
      S("fakeFocus", !1),
      pt("onHighlightItem"),
      pt("onDehighlightItem"),
      pt("onHover"),
      Qi(),
      k("dom"),
      S("navigateOnHover", !0),
      S("stayInDom", !1),
      be("tmenuBehaviours", [
        z,
        yt,
        mt,
        et
      ]),
      S("eventOrder", {})
    ],
    apis: {
      collapseMenu: (t, e) => {
        t.collapseMenu(e);
      },
      highlightPrimary: (t, e) => {
        t.highlightPrimary(e);
      },
      repositionMenus: (t, e) => {
        t.repositionMenus(e);
      }
    },
    factory: SR,
    extraApis: {
      tieredData: TR,
      singleData: _R,
      collapseItem: CR
    }
  }), OR = (t, e, o, n, s) => {
    const r = () => t.lazySink(e), c = n.type === "horizontal" ? {
      layouts: {
        onLtr: () => gm(),
        onRtl: () => pm()
      }
    } : {}, a = (l) => l.length === 2, i = (l) => a(l) ? c : {};
    return Pr.sketch({
      dom: { tag: "div" },
      data: n.data,
      markers: n.menu.markers,
      highlightOnOpen: n.menu.highlightOnOpen,
      fakeFocus: n.menu.fakeFocus,
      onEscape: () => (ht.close(e), t.onEscape.map((l) => l(e)), u.some(!0)),
      onExecute: () => u.some(!0),
      onOpenMenu: (l, d) => {
        We.positionWithinBounds(r().getOrDie(), d, o, s());
      },
      onOpenSubmenu: (l, d, m, g) => {
        const p = r().getOrDie();
        We.position(p, m, {
          anchor: {
            type: "submenu",
            item: d,
            ...i(g)
          }
        });
      },
      onRepositionMenu: (l, d, m) => {
        const g = r().getOrDie();
        We.positionWithinBounds(g, d, o, s()), Y(m, (p) => {
          const h = i(p.triggeringPath);
          We.position(g, p.triggeredMenu, {
            anchor: {
              type: "submenu",
              item: p.triggeringItem,
              ...h
            }
          });
        });
      }
    });
  }, kR = (t, e) => {
    const o = (g, p) => t.getRelated(g).exists((f) => Dr(f, p)), n = (g, p) => {
      ht.setContent(g, p);
    }, s = (g, p, h) => {
      const f = u.none;
      r(g, p, h, f);
    }, r = (g, p, h, f) => {
      const y = t.lazySink(g).getOrDie();
      ht.openWhileCloaked(g, p, () => We.positionWithinBounds(y, g, h, f())), I.setValue(g, u.some({
        mode: "position",
        config: h,
        getBounds: f
      }));
    }, c = (g, p, h) => {
      a(g, p, h, u.none);
    }, a = (g, p, h, f) => {
      const y = OR(t, g, p, h, f);
      ht.open(g, y), I.setValue(g, u.some({
        mode: "menu",
        menu: y
      }));
    }, i = (g) => {
      ht.isOpen(g) && (I.setValue(g, u.none()), ht.close(g));
    }, l = (g) => ht.getState(g), d = (g) => {
      ht.isOpen(g) && I.getValue(g).each((p) => {
        switch (p.mode) {
          case "menu":
            ht.getState(g).each(Pr.repositionMenus);
            break;
          case "position":
            const h = t.lazySink(g).getOrDie();
            We.positionWithinBounds(h, g, p.config, p.getBounds());
            break;
        }
      });
    }, m = {
      setContent: n,
      showAt: s,
      showWithinBounds: r,
      showMenuAt: c,
      showMenuWithinBounds: a,
      hide: i,
      getContent: l,
      reposition: d,
      isOpen: ht.isOpen
    };
    return {
      uid: t.uid,
      dom: t.dom,
      behaviours: xe(t.inlineBehaviours, [
        ht.config({
          isPartOf: (g, p, h) => Dr(p, h) || o(g, h),
          getAttachPoint: (g) => t.lazySink(g).getOrDie(),
          onOpen: (g) => {
            t.onShow(g);
          },
          onClose: (g) => {
            t.onHide(g);
          }
        }),
        I.config({
          store: {
            mode: "memory",
            initialValue: u.none()
          }
        }),
        po.config({
          channels: {
            ...Fm({
              isExtraPart: e.isExtraPart,
              ...t.fireDismissalEventInstead.map((g) => ({ fireEventInstead: { event: g.event } })).getOr({})
            }),
            ...Bm({
              ...t.fireRepositionEventInstead.map((g) => ({ fireEventInstead: { event: g.event } })).getOr({}),
              doReposition: d
            })
          }
        })
      ]),
      eventOrder: t.eventOrder,
      apis: m
    };
  }, Nt = $o({
    name: "InlineView",
    configFields: [
      k("lazySink"),
      pt("onShow"),
      pt("onHide"),
      br("onEscape"),
      be("inlineBehaviours", [
        ht,
        I,
        po
      ]),
      Eo("fireDismissalEventInstead", [S("event", _r())]),
      Eo("fireRepositionEventInstead", [S("event", _b())]),
      S("getRelated", u.none),
      S("isExtraPart", Lt),
      S("eventOrder", u.none)
    ],
    factory: kR,
    apis: {
      showAt: (t, e, o, n) => {
        t.showAt(e, o, n);
      },
      showWithinBounds: (t, e, o, n, s) => {
        t.showWithinBounds(e, o, n, s);
      },
      showMenuAt: (t, e, o, n) => {
        t.showMenuAt(e, o, n);
      },
      showMenuWithinBounds: (t, e, o, n, s) => {
        t.showMenuWithinBounds(e, o, n, s);
      },
      hide: (t, e) => {
        t.hide(e);
      },
      isOpen: (t, e) => t.isOpen(e),
      getContent: (t, e) => t.getContent(e),
      setContent: (t, e, o) => {
        t.setContent(e, o);
      },
      reposition: (t, e) => {
        t.reposition(e);
      }
    }
  });
  var Dl = tinymce.util.Tools.resolve("tinymce.util.Delay");
  const Se = $o({
    name: "Button",
    factory: (t) => {
      const e = Al(t.action), o = t.dom.tag, n = (r) => Q(t.dom, "attributes").bind((c) => Q(c, r)), s = () => {
        if (o === "button") {
          const r = n("type").getOr("button"), c = n("role").map((a) => ({ role: a })).getOr({});
          return {
            type: r,
            ...c
          };
        } else
          return { role: t.role.getOr(n("role").getOr("button")) };
      };
      return {
        uid: t.uid,
        dom: t.dom,
        components: t.components,
        events: e,
        behaviours: cn.augment(t.buttonBehaviours, [
          Z.config({}),
          z.config({
            mode: "execution",
            useSpace: !0,
            useEnter: !0
          })
        ]),
        domModification: { attributes: s() },
        eventOrder: t.eventOrder
      };
    },
    configFields: [
      S("uid", void 0),
      k("dom"),
      S("components", []),
      cn.field("buttonBehaviours", [
        Z,
        z
      ]),
      _t("action"),
      _t("role"),
      S("eventOrder", {})
    ]
  }), ER = (t) => {
    const e = t.dom.attributes !== void 0 ? t.dom.attributes : [];
    return Fe(e, (o, n) => n.name === "class" ? o : {
      ...o,
      [n.name]: n.value
    }, {});
  }, AR = (t) => Array.prototype.slice.call(t.dom.classList, 0), Os = (t) => {
    const e = F.fromHtml(t), o = Hn(e), n = ER(e), s = AR(e), r = o.length === 0 ? {} : { innerHtml: Yd(e) };
    return {
      tag: us(e),
      classes: s,
      attributes: n,
      ...r
    };
  }, St = (t) => {
    const e = BB(t) && Ko(t, "uid") ? t.uid : yc("memento");
    return {
      get: (r) => r.getSystem().getByUid(e).getOrDie(),
      getOpt: (r) => r.getSystem().getByUid(e).toOptional(),
      asSpec: () => ({
        ...t,
        uid: e
      })
    };
  };
  /*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
  const {
    entries: $x,
    setPrototypeOf: Fx,
    isFrozen: DR,
    getPrototypeOf: MR,
    getOwnPropertyDescriptor: $R
  } = Object;
  let {
    freeze: fo,
    seal: ln,
    create: Bx
  } = Object, {
    apply: cg,
    construct: ag
  } = typeof Reflect < "u" && Reflect;
  fo || (fo = function(e) {
    return e;
  }), ln || (ln = function(e) {
    return e;
  }), cg || (cg = function(e, o, n) {
    return e.apply(o, n);
  }), ag || (ag = function(e, o) {
    return new e(...o);
  });
  const Ml = Uo(Array.prototype.forEach), Ix = Uo(Array.prototype.pop), Pa = Uo(Array.prototype.push), $l = Uo(String.prototype.toLowerCase), ig = Uo(String.prototype.toString), Rx = Uo(String.prototype.match), La = Uo(String.prototype.replace), FR = Uo(String.prototype.indexOf), BR = Uo(String.prototype.trim), $n = Uo(Object.prototype.hasOwnProperty), bo = Uo(RegExp.prototype.test), Va = IR(TypeError);
  function Uo(t) {
    return function(e) {
      for (var o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
        n[s - 1] = arguments[s];
      return cg(t, e, n);
    };
  }
  function IR(t) {
    return function() {
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n];
      return ag(t, o);
    };
  }
  function Mt(t, e) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $l;
    Fx && Fx(t, null);
    let n = e.length;
    for (; n--; ) {
      let s = e[n];
      if (typeof s == "string") {
        const r = o(s);
        r !== s && (DR(e) || (e[n] = r), s = r);
      }
      t[s] = !0;
    }
    return t;
  }
  function RR(t) {
    for (let e = 0; e < t.length; e++)
      $n(t, e) || (t[e] = null);
    return t;
  }
  function Lr(t) {
    const e = Bx(null);
    for (const [o, n] of $x(t))
      $n(t, o) && (Array.isArray(n) ? e[o] = RR(n) : n && typeof n == "object" && n.constructor === Object ? e[o] = Lr(n) : e[o] = n);
    return e;
  }
  function Ha(t, e) {
    for (; t !== null; ) {
      const n = $R(t, e);
      if (n) {
        if (n.get)
          return Uo(n.get);
        if (typeof n.value == "function")
          return Uo(n.value);
      }
      t = MR(t);
    }
    function o() {
      return null;
    }
    return o;
  }
  const Px = fo(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), lg = fo(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ug = fo(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), PR = fo(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), dg = fo(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), LR = fo(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Lx = fo(["#text"]), Vx = fo(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), mg = fo(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Hx = fo(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Fl = fo(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), VR = ln(/\{\{[\w\W]*|[\w\W]*\}\}/gm), HR = ln(/<%[\w\W]*|[\w\W]*%>/gm), NR = ln(/\${[\w\W]*}/gm), zR = ln(/^data-[\-\w.\u00B7-\uFFFF]/), UR = ln(/^aria-[\-\w]+$/), Nx = ln(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    // eslint-disable-line no-useless-escape
  ), WR = ln(/^(?:\w+script|data):/i), GR = ln(
    /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
    // eslint-disable-line no-control-regex
  ), zx = ln(/^html$/i), jR = ln(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var Ux = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: VR,
    ERB_EXPR: HR,
    TMPLIT_EXPR: NR,
    DATA_ATTR: zR,
    ARIA_ATTR: UR,
    IS_ALLOWED_URI: Nx,
    IS_SCRIPT_OR_DATA: WR,
    ATTR_WHITESPACE: GR,
    DOCTYPE_NAME: zx,
    CUSTOM_ELEMENT: jR
  });
  const Na = {
    element: 1,
    text: 3,
    // Deprecated
    progressingInstruction: 7,
    comment: 8,
    document: 9
  }, YR = function() {
    return typeof window > "u" ? null : window;
  }, XR = function(e, o) {
    if (typeof e != "object" || typeof e.createPolicy != "function")
      return null;
    let n = null;
    const s = "data-tt-policy-suffix";
    o && o.hasAttribute(s) && (n = o.getAttribute(s));
    const r = "dompurify" + (n ? "#" + n : "");
    try {
      return e.createPolicy(r, {
        createHTML(c) {
          return c;
        },
        createScriptURL(c) {
          return c;
        }
      });
    } catch {
      return console.warn("TrustedTypes policy " + r + " could not be created."), null;
    }
  };
  function Wx() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : YR();
    const e = (lt) => Wx(lt);
    if (e.version = "3.1.7", e.removed = [], !t || !t.document || t.document.nodeType !== Na.document)
      return e.isSupported = !1, e;
    let {
      document: o
    } = t;
    const n = o, s = n.currentScript, {
      DocumentFragment: r,
      HTMLTemplateElement: c,
      Node: a,
      Element: i,
      NodeFilter: l,
      NamedNodeMap: d = t.NamedNodeMap || t.MozNamedAttrMap,
      HTMLFormElement: m,
      DOMParser: g,
      trustedTypes: p
    } = t, h = i.prototype, f = Ha(h, "cloneNode"), y = Ha(h, "remove"), v = Ha(h, "nextSibling"), b = Ha(h, "childNodes"), x = Ha(h, "parentNode");
    if (typeof c == "function") {
      const lt = o.createElement("template");
      lt.content && lt.content.ownerDocument && (o = lt.content.ownerDocument);
    }
    let E, C = "";
    const {
      implementation: _,
      createNodeIterator: A,
      createDocumentFragment: M,
      getElementsByTagName: ot
    } = o, {
      importNode: V
    } = n;
    let W = {};
    e.isSupported = typeof $x == "function" && typeof x == "function" && _ && _.createHTMLDocument !== void 0;
    const {
      MUSTACHE_EXPR: K,
      ERB_EXPR: vt,
      TMPLIT_EXPR: N,
      DATA_ATTR: dt,
      ARIA_ATTR: $,
      IS_SCRIPT_OR_DATA: L,
      ATTR_WHITESPACE: J,
      CUSTOM_ELEMENT: it
    } = Ux;
    let {
      IS_ALLOWED_URI: G
    } = Ux, tt = null;
    const Ot = Mt({}, [...Px, ...lg, ...ug, ...dg, ...Lx]);
    let ft = null;
    const we = Mt({}, [...Vx, ...mg, ...Hx, ...Fl]);
    let Ft = Object.seal(Bx(null, {
      tagNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      attributeNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: !1
      }
    })), Ye = null, Io = null, ts = !0, es = !0, Fs = !1, Zc = !0, os = !1, xi = !0, Bs = !1, Si = !1, tf = !1, Qc = !1, Ku = !1, qu = !1, Qk = !0, tE = !1;
    const LY = "user-content-";
    let ef = !0, wi = !1, ta = {}, ea = null;
    const eE = Mt({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let oE = null;
    const nE = Mt({}, ["audio", "video", "img", "source", "image", "track"]);
    let of = null;
    const sE = Mt({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ju = "http://www.w3.org/1998/Math/MathML", Zu = "http://www.w3.org/2000/svg", Is = "http://www.w3.org/1999/xhtml";
    let oa = Is, nf = !1, sf = null;
    const VY = Mt({}, [Ju, Zu, Is], ig);
    let Ti = null;
    const HY = ["application/xhtml+xml", "text/html"], NY = "text/html";
    let Xe = null, na = null;
    const zY = o.createElement("form"), rE = function(T) {
      return T instanceof RegExp || T instanceof Function;
    }, rf = function() {
      let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(na && na === T)) {
        if ((!T || typeof T != "object") && (T = {}), T = Lr(T), Ti = // eslint-disable-next-line unicorn/prefer-includes
        HY.indexOf(T.PARSER_MEDIA_TYPE) === -1 ? NY : T.PARSER_MEDIA_TYPE, Xe = Ti === "application/xhtml+xml" ? ig : $l, tt = $n(T, "ALLOWED_TAGS") ? Mt({}, T.ALLOWED_TAGS, Xe) : Ot, ft = $n(T, "ALLOWED_ATTR") ? Mt({}, T.ALLOWED_ATTR, Xe) : we, sf = $n(T, "ALLOWED_NAMESPACES") ? Mt({}, T.ALLOWED_NAMESPACES, ig) : VY, of = $n(T, "ADD_URI_SAFE_ATTR") ? Mt(
          Lr(sE),
          // eslint-disable-line indent
          T.ADD_URI_SAFE_ATTR,
          // eslint-disable-line indent
          Xe
          // eslint-disable-line indent
        ) : sE, oE = $n(T, "ADD_DATA_URI_TAGS") ? Mt(
          Lr(nE),
          // eslint-disable-line indent
          T.ADD_DATA_URI_TAGS,
          // eslint-disable-line indent
          Xe
          // eslint-disable-line indent
        ) : nE, ea = $n(T, "FORBID_CONTENTS") ? Mt({}, T.FORBID_CONTENTS, Xe) : eE, Ye = $n(T, "FORBID_TAGS") ? Mt({}, T.FORBID_TAGS, Xe) : {}, Io = $n(T, "FORBID_ATTR") ? Mt({}, T.FORBID_ATTR, Xe) : {}, ta = $n(T, "USE_PROFILES") ? T.USE_PROFILES : !1, ts = T.ALLOW_ARIA_ATTR !== !1, es = T.ALLOW_DATA_ATTR !== !1, Fs = T.ALLOW_UNKNOWN_PROTOCOLS || !1, Zc = T.ALLOW_SELF_CLOSE_IN_ATTR !== !1, os = T.SAFE_FOR_TEMPLATES || !1, xi = T.SAFE_FOR_XML !== !1, Bs = T.WHOLE_DOCUMENT || !1, Qc = T.RETURN_DOM || !1, Ku = T.RETURN_DOM_FRAGMENT || !1, qu = T.RETURN_TRUSTED_TYPE || !1, tf = T.FORCE_BODY || !1, Qk = T.SANITIZE_DOM !== !1, tE = T.SANITIZE_NAMED_PROPS || !1, ef = T.KEEP_CONTENT !== !1, wi = T.IN_PLACE || !1, G = T.ALLOWED_URI_REGEXP || Nx, oa = T.NAMESPACE || Is, Ft = T.CUSTOM_ELEMENT_HANDLING || {}, T.CUSTOM_ELEMENT_HANDLING && rE(T.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ft.tagNameCheck = T.CUSTOM_ELEMENT_HANDLING.tagNameCheck), T.CUSTOM_ELEMENT_HANDLING && rE(T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ft.attributeNameCheck = T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), T.CUSTOM_ELEMENT_HANDLING && typeof T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Ft.allowCustomizedBuiltInElements = T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), os && (es = !1), Ku && (Qc = !0), ta && (tt = Mt({}, Lx), ft = [], ta.html === !0 && (Mt(tt, Px), Mt(ft, Vx)), ta.svg === !0 && (Mt(tt, lg), Mt(ft, mg), Mt(ft, Fl)), ta.svgFilters === !0 && (Mt(tt, ug), Mt(ft, mg), Mt(ft, Fl)), ta.mathMl === !0 && (Mt(tt, dg), Mt(ft, Hx), Mt(ft, Fl))), T.ADD_TAGS && (tt === Ot && (tt = Lr(tt)), Mt(tt, T.ADD_TAGS, Xe)), T.ADD_ATTR && (ft === we && (ft = Lr(ft)), Mt(ft, T.ADD_ATTR, Xe)), T.ADD_URI_SAFE_ATTR && Mt(of, T.ADD_URI_SAFE_ATTR, Xe), T.FORBID_CONTENTS && (ea === eE && (ea = Lr(ea)), Mt(ea, T.FORBID_CONTENTS, Xe)), ef && (tt["#text"] = !0), Bs && Mt(tt, ["html", "head", "body"]), tt.table && (Mt(tt, ["tbody"]), delete Ye.tbody), T.TRUSTED_TYPES_POLICY) {
          if (typeof T.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Va('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
          if (typeof T.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Va('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
          E = T.TRUSTED_TYPES_POLICY, C = E.createHTML("");
        } else
          E === void 0 && (E = XR(p, s)), E !== null && typeof C == "string" && (C = E.createHTML(""));
        fo && fo(T), na = T;
      }
    }, cE = Mt({}, ["mi", "mo", "mn", "ms", "mtext"]), aE = Mt({}, ["annotation-xml"]), UY = Mt({}, ["title", "style", "font", "a", "script"]), iE = Mt({}, [...lg, ...ug, ...PR]), lE = Mt({}, [...dg, ...LR]), WY = function(T) {
      let H = x(T);
      (!H || !H.tagName) && (H = {
        namespaceURI: oa,
        tagName: "template"
      });
      const at = $l(T.tagName), oe = $l(H.tagName);
      return sf[T.namespaceURI] ? T.namespaceURI === Zu ? H.namespaceURI === Is ? at === "svg" : H.namespaceURI === Ju ? at === "svg" && (oe === "annotation-xml" || cE[oe]) : !!iE[at] : T.namespaceURI === Ju ? H.namespaceURI === Is ? at === "math" : H.namespaceURI === Zu ? at === "math" && aE[oe] : !!lE[at] : T.namespaceURI === Is ? H.namespaceURI === Zu && !aE[oe] || H.namespaceURI === Ju && !cE[oe] ? !1 : !lE[at] && (UY[at] || !iE[at]) : !!(Ti === "application/xhtml+xml" && sf[T.namespaceURI]) : !1;
    }, ns = function(T) {
      Pa(e.removed, {
        element: T
      });
      try {
        x(T).removeChild(T);
      } catch {
        y(T);
      }
    }, _i = function(T, H) {
      try {
        Pa(e.removed, {
          attribute: H.getAttributeNode(T),
          from: H
        });
      } catch {
        Pa(e.removed, {
          attribute: null,
          from: H
        });
      }
      if (H.removeAttribute(T), T === "is" && !ft[T])
        if (Qc || Ku)
          try {
            ns(H);
          } catch {
          }
        else
          try {
            H.setAttribute(T, "");
          } catch {
          }
    }, uE = function(T) {
      let H = null, at = null;
      if (tf)
        T = "<remove></remove>" + T;
      else {
        const Ke = Rx(T, /^[\r\n\t ]+/);
        at = Ke && Ke[0];
      }
      Ti === "application/xhtml+xml" && oa === Is && (T = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + T + "</body></html>");
      const oe = E ? E.createHTML(T) : T;
      if (oa === Is)
        try {
          H = new g().parseFromString(oe, Ti);
        } catch {
        }
      if (!H || !H.documentElement) {
        H = _.createDocument(oa, "template", null);
        try {
          H.documentElement.innerHTML = nf ? C : oe;
        } catch {
        }
      }
      const uo = H.body || H.documentElement;
      return T && at && uo.insertBefore(o.createTextNode(at), uo.childNodes[0] || null), oa === Is ? ot.call(H, Bs ? "html" : "body")[0] : Bs ? H.documentElement : uo;
    }, dE = function(T) {
      return A.call(
        T.ownerDocument || T,
        T,
        // eslint-disable-next-line no-bitwise
        l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
        null
      );
    }, mE = function(T) {
      return T instanceof m && (typeof T.nodeName != "string" || typeof T.textContent != "string" || typeof T.removeChild != "function" || !(T.attributes instanceof d) || typeof T.removeAttribute != "function" || typeof T.setAttribute != "function" || typeof T.namespaceURI != "string" || typeof T.insertBefore != "function" || typeof T.hasChildNodes != "function");
    }, gE = function(T) {
      return typeof a == "function" && T instanceof a;
    }, Rs = function(T, H, at) {
      W[T] && Ml(W[T], (oe) => {
        oe.call(e, H, at, na);
      });
    }, pE = function(T) {
      let H = null;
      if (Rs("beforeSanitizeElements", T, null), mE(T))
        return ns(T), !0;
      const at = Xe(T.nodeName);
      if (Rs("uponSanitizeElement", T, {
        tagName: at,
        allowedTags: tt
      }), T.hasChildNodes() && !gE(T.firstElementChild) && bo(/<[/\w]/g, T.innerHTML) && bo(/<[/\w]/g, T.textContent) || T.nodeType === Na.progressingInstruction || xi && T.nodeType === Na.comment && bo(/<[/\w]/g, T.data))
        return ns(T), !0;
      if (!tt[at] || Ye[at]) {
        if (!Ye[at] && fE(at) && (Ft.tagNameCheck instanceof RegExp && bo(Ft.tagNameCheck, at) || Ft.tagNameCheck instanceof Function && Ft.tagNameCheck(at)))
          return !1;
        if (ef && !ea[at]) {
          const oe = x(T) || T.parentNode, uo = b(T) || T.childNodes;
          if (uo && oe) {
            const Ke = uo.length;
            for (let Ro = Ke - 1; Ro >= 0; --Ro) {
              const ss = f(uo[Ro], !0);
              ss.__removalCount = (T.__removalCount || 0) + 1, oe.insertBefore(ss, v(T));
            }
          }
        }
        return ns(T), !0;
      }
      return T instanceof i && !WY(T) || (at === "noscript" || at === "noembed" || at === "noframes") && bo(/<\/no(script|embed|frames)/i, T.innerHTML) ? (ns(T), !0) : (os && T.nodeType === Na.text && (H = T.textContent, Ml([K, vt, N], (oe) => {
        H = La(H, oe, " ");
      }), T.textContent !== H && (Pa(e.removed, {
        element: T.cloneNode()
      }), T.textContent = H)), Rs("afterSanitizeElements", T, null), !1);
    }, hE = function(T, H, at) {
      if (Qk && (H === "id" || H === "name") && (at in o || at in zY))
        return !1;
      if (!(es && !Io[H] && bo(dt, H))) {
        if (!(ts && bo($, H))) {
          if (!ft[H] || Io[H]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(fE(T) && (Ft.tagNameCheck instanceof RegExp && bo(Ft.tagNameCheck, T) || Ft.tagNameCheck instanceof Function && Ft.tagNameCheck(T)) && (Ft.attributeNameCheck instanceof RegExp && bo(Ft.attributeNameCheck, H) || Ft.attributeNameCheck instanceof Function && Ft.attributeNameCheck(H)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              H === "is" && Ft.allowCustomizedBuiltInElements && (Ft.tagNameCheck instanceof RegExp && bo(Ft.tagNameCheck, at) || Ft.tagNameCheck instanceof Function && Ft.tagNameCheck(at)))
            ) return !1;
          } else if (!of[H]) {
            if (!bo(G, La(at, J, ""))) {
              if (!((H === "src" || H === "xlink:href" || H === "href") && T !== "script" && FR(at, "data:") === 0 && oE[T])) {
                if (!(Fs && !bo(L, La(at, J, "")))) {
                  if (at)
                    return !1;
                }
              }
            }
          }
        }
      }
      return !0;
    }, fE = function(T) {
      return T !== "annotation-xml" && Rx(T, it);
    }, bE = function(T) {
      Rs("beforeSanitizeAttributes", T, null);
      const {
        attributes: H
      } = T;
      if (!H)
        return;
      const at = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: ft
      };
      let oe = H.length;
      for (; oe--; ) {
        const uo = H[oe], {
          name: Ke,
          namespaceURI: Ro,
          value: ss
        } = uo, Ci = Xe(Ke);
        let no = Ke === "value" ? ss : BR(ss);
        const jY = no;
        if (at.attrName = Ci, at.attrValue = no, at.keepAttr = !0, at.forceKeepAttr = void 0, Rs("uponSanitizeAttribute", T, at), no = at.attrValue, at.forceKeepAttr)
          continue;
        if (!at.keepAttr) {
          _i(Ke, T);
          continue;
        }
        if (!Zc && bo(/\/>/i, no)) {
          _i(Ke, T);
          continue;
        }
        os && Ml([K, vt, N], (yE) => {
          no = La(no, yE, " ");
        });
        const vE = Xe(T.nodeName);
        if (!hE(vE, Ci, no)) {
          _i(Ke, T);
          continue;
        }
        if (tE && (Ci === "id" || Ci === "name") && (_i(Ke, T), no = LY + no), xi && bo(/((--!?|])>)|<\/(style|title)/i, no)) {
          _i(Ke, T);
          continue;
        }
        if (E && typeof p == "object" && typeof p.getAttributeType == "function" && !Ro)
          switch (p.getAttributeType(vE, Ci)) {
            case "TrustedHTML": {
              no = E.createHTML(no);
              break;
            }
            case "TrustedScriptURL": {
              no = E.createScriptURL(no);
              break;
            }
          }
        if (no !== jY)
          try {
            Ro ? T.setAttributeNS(Ro, Ke, no) : T.setAttribute(Ke, no), mE(T) ? ns(T) : Ix(e.removed);
          } catch {
          }
      }
      Rs("afterSanitizeAttributes", T, null);
    }, GY = function lt(T) {
      let H = null;
      const at = dE(T);
      for (Rs("beforeSanitizeShadowDOM", T, null); H = at.nextNode(); )
        Rs("uponSanitizeShadowNode", H, null), !pE(H) && (H.content instanceof r && lt(H.content), bE(H));
      Rs("afterSanitizeShadowDOM", T, null);
    };
    return e.sanitize = function(lt) {
      let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, H = null, at = null, oe = null, uo = null;
      if (nf = !lt, nf && (lt = "<!-->"), typeof lt != "string" && !gE(lt))
        if (typeof lt.toString == "function") {
          if (lt = lt.toString(), typeof lt != "string")
            throw Va("dirty is not a string, aborting");
        } else
          throw Va("toString is not a function");
      if (!e.isSupported)
        return lt;
      if (Si || rf(T), e.removed = [], typeof lt == "string" && (wi = !1), wi) {
        if (lt.nodeName) {
          const ss = Xe(lt.nodeName);
          if (!tt[ss] || Ye[ss])
            throw Va("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (lt instanceof a)
        H = uE("<!---->"), at = H.ownerDocument.importNode(lt, !0), at.nodeType === Na.element && at.nodeName === "BODY" || at.nodeName === "HTML" ? H = at : H.appendChild(at);
      else {
        if (!Qc && !os && !Bs && // eslint-disable-next-line unicorn/prefer-includes
        lt.indexOf("<") === -1)
          return E && qu ? E.createHTML(lt) : lt;
        if (H = uE(lt), !H)
          return Qc ? null : qu ? C : "";
      }
      H && tf && ns(H.firstChild);
      const Ke = dE(wi ? lt : H);
      for (; oe = Ke.nextNode(); )
        pE(oe) || (oe.content instanceof r && GY(oe.content), bE(oe));
      if (wi)
        return lt;
      if (Qc) {
        if (Ku)
          for (uo = M.call(H.ownerDocument); H.firstChild; )
            uo.appendChild(H.firstChild);
        else
          uo = H;
        return (ft.shadowroot || ft.shadowrootmode) && (uo = V.call(n, uo, !0)), uo;
      }
      let Ro = Bs ? H.outerHTML : H.innerHTML;
      return Bs && tt["!doctype"] && H.ownerDocument && H.ownerDocument.doctype && H.ownerDocument.doctype.name && bo(zx, H.ownerDocument.doctype.name) && (Ro = "<!DOCTYPE " + H.ownerDocument.doctype.name + `>
` + Ro), os && Ml([K, vt, N], (ss) => {
        Ro = La(Ro, ss, " ");
      }), E && qu ? E.createHTML(Ro) : Ro;
    }, e.setConfig = function() {
      let lt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      rf(lt), Si = !0;
    }, e.clearConfig = function() {
      na = null, Si = !1;
    }, e.isValidAttribute = function(lt, T, H) {
      na || rf({});
      const at = Xe(lt), oe = Xe(T);
      return hE(at, oe, H);
    }, e.addHook = function(lt, T) {
      typeof T == "function" && (W[lt] = W[lt] || [], Pa(W[lt], T));
    }, e.removeHook = function(lt) {
      if (W[lt])
        return Ix(W[lt]);
    }, e.removeHooks = function(lt) {
      W[lt] && (W[lt] = []);
    }, e.removeAllHooks = function() {
      W = {};
    }, e;
  }
  var KR = Wx();
  const Gx = (t) => KR().sanitize(t);
  var Fo = tinymce.util.Tools.resolve("tinymce.util.I18n");
  const qR = {
    indent: !0,
    outdent: !0,
    "table-insert-column-after": !0,
    "table-insert-column-before": !0,
    "paste-column-after": !0,
    "paste-column-before": !0,
    "unordered-list": !0,
    "list-bull-circle": !0,
    "list-bull-default": !0,
    "list-bull-square": !0
  }, jx = "temporary-placeholder", gg = (t) => () => Q(t, jx).getOr("!not found!"), pg = (t, e) => {
    const o = t.toLowerCase();
    if (Fo.isRtl()) {
      const n = PE(o, "-rtl");
      return At(e, n) ? n : o;
    } else
      return o;
  }, Yx = (t, e) => Q(e, pg(t, e)), Xx = (t, e) => {
    const o = e();
    return Yx(t, o).getOrThunk(gg(o));
  }, JR = (t, e, o) => {
    const n = e();
    return Yx(t, n).or(o).getOrThunk(gg(n));
  }, ZR = (t) => Fo.isRtl() ? At(qR, t) : !1, hg = () => nt("add-focusable", [Vt((t) => {
    em(t.element, "svg").each((e) => st(e, "focusable", "false"));
  })]), Kx = (t, e, o, n) => {
    var s, r;
    const c = ZR(e) ? ["tox-icon--flip"] : [], a = Q(o, pg(e, o)).or(n).getOrThunk(gg(o));
    return {
      dom: {
        tag: t.tag,
        attributes: (s = t.attributes) !== null && s !== void 0 ? s : {},
        classes: t.classes.concat(c),
        innerHtml: a
      },
      behaviours: D([
        ...(r = t.behaviours) !== null && r !== void 0 ? r : [],
        hg()
      ])
    };
  }, un = (t, e, o, n = u.none()) => Kx(e, t, o(), n), QR = (t, e, o) => {
    const n = o(), s = Gt(t, (r) => At(n, pg(r, n)));
    return Kx(e, s.getOr(jx), n, u.none());
  }, tP = {
    success: "checkmark",
    error: "warning",
    err: "error",
    warning: "warning",
    warn: "warning",
    info: "info"
  }, fg = $o({
    name: "Notification",
    factory: (t) => {
      const e = St({
        dom: Os(`<p>${Gx(t.translationProvider(t.text))}</p>`),
        behaviours: D([et.config({})])
      }), o = (p) => ({
        dom: {
          tag: "div",
          classes: ["tox-bar"],
          styles: { width: `${p}%` }
        }
      }), n = (p) => ({
        dom: {
          tag: "div",
          classes: ["tox-text"],
          innerHtml: `${p}%`
        }
      }), s = St({
        dom: {
          tag: "div",
          classes: t.progress ? [
            "tox-progress-bar",
            "tox-progress-indicator"
          ] : ["tox-progress-bar"]
        },
        components: [
          {
            dom: {
              tag: "div",
              classes: ["tox-bar-container"]
            },
            components: [o(0)]
          },
          n(0)
        ],
        behaviours: D([et.config({})])
      }), a = {
        updateProgress: (p, h) => {
          p.getSystem().isConnected() && s.getOpt(p).each((f) => {
            et.set(f, [
              {
                dom: {
                  tag: "div",
                  classes: ["tox-bar-container"]
                },
                components: [o(h)]
              },
              n(h)
            ]);
          });
        },
        updateText: (p, h) => {
          if (p.getSystem().isConnected()) {
            const f = e.get(p);
            et.set(f, [qt(h)]);
          }
        }
      }, i = _e([
        t.icon.toArray(),
        t.level.toArray(),
        t.level.bind((p) => u.from(tP[p])).toArray()
      ]), l = St(Se.sketch({
        dom: {
          tag: "button",
          classes: [
            "tox-notification__dismiss",
            "tox-button",
            "tox-button--naked",
            "tox-button--icon"
          ]
        },
        components: [un("close", {
          tag: "span",
          classes: ["tox-icon"],
          attributes: { "aria-label": t.translationProvider("Close") }
        }, t.iconProvider)],
        action: (p) => {
          t.onAction(p);
        }
      })), d = QR(i, {
        tag: "div",
        classes: ["tox-notification__icon"]
      }, t.iconProvider), m = {
        dom: {
          tag: "div",
          classes: ["tox-notification__body"]
        },
        components: [e.asSpec()],
        behaviours: D([et.config({})])
      }, g = [
        d,
        m
      ];
      return {
        uid: t.uid,
        dom: {
          tag: "div",
          attributes: { role: "alert" },
          classes: t.level.map((p) => [
            "tox-notification",
            "tox-notification--in",
            `tox-notification--${p}`
          ]).getOr([
            "tox-notification",
            "tox-notification--in"
          ])
        },
        behaviours: D([
          Z.config({}),
          nt("notification-events", [O(ys(), (p) => {
            l.getOpt(p).each(Z.focus);
          })])
        ]),
        components: g.concat(t.progress ? [s.asSpec()] : []).concat(t.closeButton ? [l.asSpec()] : []),
        apis: a
      };
    },
    configFields: [
      _t("level"),
      k("progress"),
      _t("icon"),
      k("onAction"),
      k("text"),
      k("iconProvider"),
      k("translationProvider"),
      Ie("closeButton", !0)
    ],
    apis: {
      updateProgress: (t, e, o) => {
        t.updateProgress(e, o);
      },
      updateText: (t, e, o) => {
        t.updateText(e, o);
      }
    }
  });
  var eP = (t, e, o) => {
    const n = e.backstage.shared, s = () => {
      const i = Be(F.fromDom(t.getContentAreaContainer())), l = Ze(), d = Mo(l.x, i.x, i.right), m = Mo(l.y, i.y, i.bottom), g = Math.max(i.right, l.right), p = Math.max(i.bottom, l.bottom);
      return u.some(pe(d, m, g - d, p - m));
    };
    return {
      open: (i, l) => {
        const d = () => {
          l(), Nt.hide(g);
        }, m = Re(fg.sketch({
          text: i.text,
          level: ie([
            "success",
            "error",
            "warning",
            "warn",
            "info"
          ], i.type) ? i.type : void 0,
          progress: i.progressBar === !0,
          icon: i.icon,
          closeButton: i.closeButton,
          onAction: d,
          iconProvider: n.providers.icons,
          translationProvider: n.providers.translate
        })), g = Re(Nt.sketch({
          dom: {
            tag: "div",
            classes: ["tox-notifications-container"]
          },
          lazySink: n.getSink,
          fireDismissalEventInstead: {},
          ...n.header.isPositionedAtTop() ? {} : { fireRepositionEventInstead: {} }
        }));
        o.add(g), Vn(i.timeout) && i.timeout > 0 && Dl.setEditorTimeout(t, () => {
          d();
        }, i.timeout);
        const h = {
          close: d,
          reposition: () => {
            const f = No(m), y = { maxHeightFunction: _c() }, v = t.notificationManager.getNotifications();
            if (v[0] === h) {
              const b = {
                ...n.anchors.banner(),
                overrides: y
              };
              Nt.showWithinBounds(g, f, { anchor: b }, s);
            } else
              uf(v, h).each((b) => {
                const x = v[b - 1].getEl(), E = {
                  type: "node",
                  root: Nn(),
                  node: u.some(F.fromDom(x)),
                  overrides: y,
                  layouts: {
                    onRtl: () => [fe],
                    onLtr: () => [fe]
                  }
                };
                Nt.showWithinBounds(g, f, { anchor: E }, s);
              });
          },
          text: (f) => {
            fg.updateText(m, f);
          },
          settings: i,
          getEl: () => m.element.dom,
          progressBar: {
            value: (f) => {
              fg.updateProgress(m, f);
            }
          }
        };
        return h;
      },
      close: (i) => {
        i.close();
      },
      getArgs: (i) => i.settings
    };
  }, Dc = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"), oP = tinymce.util.Tools.resolve("tinymce.EditorManager"), Mc = tinymce.util.Tools.resolve("tinymce.Env"), Wo;
  (function(t) {
    t.default = "wrap", t.floating = "floating", t.sliding = "sliding", t.scrolling = "scrolling";
  })(Wo || (Wo = {}));
  var za;
  (function(t) {
    t.auto = "auto", t.top = "top", t.bottom = "bottom";
  })(za || (za = {}));
  const Et = (t) => (e) => e.options.get(t), Ua = (t) => (e) => u.from(t(e)), qx = (t) => {
    const e = Mc.deviceType.isPhone(), o = Mc.deviceType.isTablet() || e, n = t.options.register, s = (c) => Ct(c) || c === !1, r = (c) => Ct(c) || Vn(c);
    n("skin", {
      processor: (c) => Ct(c) || c === !1,
      default: "oxide"
    }), n("skin_url", { processor: "string" }), n("height", {
      processor: r,
      default: Math.max(t.getElement().offsetHeight, 400)
    }), n("width", {
      processor: r,
      default: Dc.DOM.getStyle(t.getElement(), "width")
    }), n("min_height", {
      processor: "number",
      default: 100
    }), n("min_width", { processor: "number" }), n("max_height", { processor: "number" }), n("max_width", { processor: "number" }), n("style_formats", { processor: "object[]" }), n("style_formats_merge", {
      processor: "boolean",
      default: !1
    }), n("style_formats_autohide", {
      processor: "boolean",
      default: !1
    }), n("line_height_formats", {
      processor: "string",
      default: "1 1.1 1.2 1.3 1.4 1.5 2"
    }), n("font_family_formats", {
      processor: "string",
      default: "Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats"
    }), n("font_size_formats", {
      processor: "string",
      default: "8pt 10pt 12pt 14pt 18pt 24pt 36pt"
    }), n("font_size_input_default_unit", {
      processor: "string",
      default: "pt"
    }), n("block_formats", {
      processor: "string",
      default: "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre"
    }), n("content_langs", { processor: "object[]" }), n("removed_menuitems", {
      processor: "string",
      default: ""
    }), n("menubar", {
      processor: (c) => Ct(c) || is(c),
      default: !e
    }), n("menu", {
      processor: "object",
      default: {}
    }), n("toolbar", {
      processor: (c) => is(c) || Ct(c) || as(c) ? {
        value: c,
        valid: !0
      } : {
        valid: !1,
        message: "Must be a boolean, string or array."
      },
      default: !0
    }), od(9, (c) => {
      n("toolbar" + (c + 1), { processor: "string" });
    }), n("toolbar_mode", {
      processor: "string",
      default: o ? "scrolling" : "floating"
    }), n("toolbar_groups", {
      processor: "object",
      default: {}
    }), n("toolbar_location", {
      processor: "string",
      default: za.auto
    }), n("toolbar_persist", {
      processor: "boolean",
      default: !1
    }), n("toolbar_sticky", {
      processor: "boolean",
      default: t.inline
    }), n("toolbar_sticky_offset", {
      processor: "number",
      default: 0
    }), n("fixed_toolbar_container", {
      processor: "string",
      default: ""
    }), n("fixed_toolbar_container_target", { processor: "object" }), n("ui_mode", {
      processor: "string",
      default: "combined"
    }), n("file_picker_callback", { processor: "function" }), n("file_picker_validator_handler", { processor: "function" }), n("file_picker_types", { processor: "string" }), n("typeahead_urls", {
      processor: "boolean",
      default: !0
    }), n("anchor_top", {
      processor: s,
      default: "#top"
    }), n("anchor_bottom", {
      processor: s,
      default: "#bottom"
    }), n("draggable_modal", {
      processor: "boolean",
      default: !1
    }), n("statusbar", {
      processor: "boolean",
      default: !0
    }), n("elementpath", {
      processor: "boolean",
      default: !0
    }), n("branding", {
      processor: "boolean",
      default: !0
    }), n("promotion", {
      processor: "boolean",
      default: !0
    }), n("resize", {
      processor: (c) => c === "both" || is(c),
      default: !Mc.deviceType.isTouch()
    }), n("sidebar_show", { processor: "string" }), n("help_accessibility", {
      processor: "boolean",
      default: t.hasPlugin("help")
    }), n("default_font_stack", {
      processor: "string[]",
      default: []
    });
  }, Jx = Et("readonly"), bg = Et("height"), vg = Et("width"), yg = Ua(Et("min_width")), xg = Ua(Et("min_height")), Bl = Ua(Et("max_width")), Sg = Ua(Et("max_height")), Zx = Ua(Et("style_formats")), Qx = Et("style_formats_merge"), tS = Et("style_formats_autohide"), eS = Et("content_langs"), oS = Et("removed_menuitems"), $c = Et("toolbar_mode"), nS = Et("toolbar_groups"), wg = Et("toolbar_location"), nP = Et("fixed_toolbar_container"), sP = Et("fixed_toolbar_container_target"), sS = Et("toolbar_persist"), rS = Et("toolbar_sticky_offset"), cS = Et("menubar"), Il = Et("toolbar"), aS = Et("file_picker_callback"), iS = Et("file_picker_validator_handler"), lS = Et("font_size_input_default_unit"), uS = Et("file_picker_types"), dS = Et("typeahead_urls"), mS = Et("anchor_top"), gS = Et("anchor_bottom"), pS = Et("draggable_modal"), hS = Et("statusbar"), fS = Et("elementpath"), Tg = Et("branding"), bS = Et("resize"), vS = Et("paste_as_text"), yS = Et("sidebar_show"), xS = Et("promotion"), SS = Et("help_accessibility"), wS = Et("default_font_stack"), _g = (t) => t.options.get("skin") === !1, Rl = (t) => t.options.get("menubar") !== !1, Pl = (t) => {
    const e = t.options.get("skin_url");
    if (_g(t))
      return e;
    if (e)
      return t.documentBaseURI.toAbsolute(e);
    {
      const o = t.options.get("skin");
      return oP.baseURL + "/skins/ui/" + o;
    }
  }, Ll = (t) => u.from(t.options.get("skin_url")), TS = (t) => t.options.get("line_height_formats").split(" "), Vl = (t) => {
    const e = Il(t), o = Ct(e), n = as(e) && e.length > 0;
    return !Wa(t) && (n || o || e === !0);
  }, Cg = (t) => {
    const e = od(9, (n) => t.options.get("toolbar" + (n + 1))), o = Ht(e, Ct);
    return ls(o.length > 0, o);
  }, Wa = (t) => Cg(t).fold(() => {
    const e = Il(t);
    return aa(e, Ct) && e.length > 0;
  }, Te), Og = (t) => wg(t) === za.bottom, _S = (t) => {
    var e;
    if (!t.inline)
      return u.none();
    const o = (e = nP(t)) !== null && e !== void 0 ? e : "";
    if (o.length > 0)
      return Jt(Nn(), o);
    const n = sP(t);
    return wo(n) ? u.some(F.fromDom(n)) : u.none();
  }, Fc = (t) => t.inline && _S(t).isSome(), kg = (t) => _S(t).getOrThunk(() => ic(qe(F.fromDom(t.getElement())))), Eg = (t) => t.inline && !Rl(t) && !Vl(t) && !Wa(t), Ga = (t) => (t.options.get("toolbar_sticky") || t.inline) && !Fc(t) && !Eg(t), qs = (t) => !Fc(t) && t.options.get("ui_mode") === "split", CS = (t) => {
    const e = t.options.get("menu");
    return me(e, (o) => ({
      ...o,
      items: o.items
    }));
  };
  var rP = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    get ToolbarMode() {
      return Wo;
    },
    get ToolbarLocation() {
      return za;
    },
    register: qx,
    getSkinUrl: Pl,
    getSkinUrlOption: Ll,
    isReadOnly: Jx,
    isSkinDisabled: _g,
    getHeightOption: bg,
    getWidthOption: vg,
    getMinWidthOption: yg,
    getMinHeightOption: xg,
    getMaxWidthOption: Bl,
    getMaxHeightOption: Sg,
    getUserStyleFormats: Zx,
    shouldMergeStyleFormats: Qx,
    shouldAutoHideStyleFormats: tS,
    getLineHeightFormats: TS,
    getContentLanguages: eS,
    getRemovedMenuItems: oS,
    isMenubarEnabled: Rl,
    isMultipleToolbars: Wa,
    isToolbarEnabled: Vl,
    isToolbarPersist: sS,
    getMultipleToolbarsOption: Cg,
    getUiContainer: kg,
    useFixedContainer: Fc,
    isSplitUiMode: qs,
    getToolbarMode: $c,
    isDraggableModal: pS,
    isDistractionFree: Eg,
    isStickyToolbar: Ga,
    getStickyToolbarOffset: rS,
    getToolbarLocation: wg,
    isToolbarLocationBottom: Og,
    getToolbarGroups: nS,
    getMenus: CS,
    getMenubar: cS,
    getToolbar: Il,
    getFilePickerCallback: aS,
    getFilePickerTypes: uS,
    useTypeaheadUrls: dS,
    getAnchorTop: mS,
    getAnchorBottom: gS,
    getFilePickerValidatorHandler: iS,
    getFontSizeInputDefaultUnit: lS,
    useStatusBar: hS,
    useElementPath: fS,
    promotionEnabled: xS,
    useBranding: Tg,
    getResize: bS,
    getPasteAsText: vS,
    getSidebarShow: yS,
    useHelpAccessibility: SS,
    getDefaultFontStack: wS
  });
  const OS = "[data-mce-autocompleter]", kS = (t) => An(t, OS), cP = (t) => Jt(t, OS), aP = { setup: (t, e) => {
    const o = (s, r) => {
      U(s, kn(), { raw: r });
    }, n = () => t.getMenu().bind(yt.getHighlighted);
    e.on("keydown", (s) => {
      const r = s.which;
      t.isActive() && (t.isMenuOpen() ? r === 13 ? (n().each(Cr), s.preventDefault()) : r === 40 ? (n().fold(() => {
        t.getMenu().each(yt.highlightFirst);
      }, (c) => {
        o(c, s);
      }), s.preventDefault(), s.stopImmediatePropagation()) : (r === 37 || r === 38 || r === 39) && n().each((c) => {
        o(c, s), s.preventDefault(), s.stopImmediatePropagation();
      }) : (r === 13 || r === 38 || r === 40) && t.cancelIfNecessary());
    }), e.on("NodeChange", (s) => {
      t.isActive() && !t.isProcessingAction() && kS(F.fromDom(s.element)).isNone() && t.cancelIfNecessary();
    });
  } };
  var Ag;
  (function(t) {
    t[t.CLOSE_ON_EXECUTE = 0] = "CLOSE_ON_EXECUTE", t[t.BUBBLE_TO_SANDBOX = 1] = "BUBBLE_TO_SANDBOX";
  })(Ag || (Ag = {}));
  var Fn = Ag;
  const Dg = "tox-menu-nav__js", Hl = "tox-collection__item", Mg = "tox-swatch", iP = {
    normal: Dg,
    color: Mg
  }, ES = "tox-collection__item--enabled", lP = "tox-collection__group-heading", AS = "tox-collection__item-icon", $g = "tox-collection__item-label", uP = "tox-collection__item-accessory", DS = "tox-collection__item-caret", dP = "tox-collection__item-checkmark", ja = "tox-collection__item--active", MS = "tox-collection__item-container", mP = "tox-collection__item-container--column", $S = "tox-collection__item-container--row", gP = "tox-collection__item-container--align-right", pP = "tox-collection__item-container--align-left", hP = "tox-collection__item-container--valign-top", fP = "tox-collection__item-container--valign-middle", bP = "tox-collection__item-container--valign-bottom", FS = (t) => Q(iP, t).getOr(Dg), vP = (t) => t === "color" ? "tox-swatches" : "tox-menu", Fg = (t) => ({
    backgroundMenu: "tox-background-menu",
    selectedMenu: "tox-selected-menu",
    selectedItem: "tox-collection__item--active",
    hasIcons: "tox-menu--has-icons",
    menu: vP(t),
    tieredMenu: "tox-tiered-menu"
  }), Vr = (t) => {
    const e = Fg(t);
    return {
      backgroundMenu: e.backgroundMenu,
      selectedMenu: e.selectedMenu,
      menu: e.menu,
      selectedItem: e.selectedItem,
      item: FS(t)
    };
  }, yP = (t, e, o) => {
    const n = Fg(o);
    return {
      tag: "div",
      classes: _e([
        [
          n.menu,
          `tox-menu-${e}-column`
        ],
        t ? [n.hasIcons] : []
      ])
    };
  }, xP = [Rr.parts.items({})], Nl = (t, e, o) => {
    const n = Fg(o);
    return {
      dom: {
        tag: "div",
        classes: _e([[n.tieredMenu]])
      },
      markers: Vr(o)
    };
  }, BS = w([
    _t("data"),
    S("inputAttributes", {}),
    S("inputStyles", {}),
    S("tag", "input"),
    S("inputClasses", []),
    pt("onSetValue"),
    S("styles", {}),
    S("eventOrder", {}),
    be("inputBehaviours", [
      I,
      Z
    ]),
    S("selectOnFocus", !0)
  ]), IS = (t) => D([Z.config({
    onFocus: t.selectOnFocus ? (e) => {
      const o = e.element, n = Ss(o);
      o.dom.setSelectionRange(0, n.length);
    } : R
  })]), SP = (t) => ({
    ...IS(t),
    ...xe(t.inputBehaviours, [I.config({
      store: {
        mode: "manual",
        ...t.data.map((e) => ({ initialValue: e })).getOr({}),
        getValue: (e) => Ss(e.element),
        setValue: (e, o) => {
          Ss(e.element) !== o && Ar(e.element, o);
        }
      },
      onSetValue: t.onSetValue
    })])
  }), RS = (t) => ({
    tag: t.tag,
    attributes: {
      type: "text",
      ...t.inputAttributes
    },
    styles: t.inputStyles,
    classes: t.inputClasses
  }), wP = (t, e) => ({
    uid: t.uid,
    dom: RS(t),
    components: [],
    behaviours: SP(t),
    eventOrder: t.eventOrder
  }), Hr = $o({
    name: "Input",
    configFields: BS(),
    factory: wP
  }), PS = P("refetch-trigger-event"), LS = P("redirect-menu-item-interaction"), VS = "tox-menu__searcher", zl = (t) => Jt(t.element, `.${VS}`).bind((e) => t.getSystem().getByDom(e).toOptional()), HS = zl, TP = (t, e) => {
    I.setValue(t, e.fetchPattern), t.element.dom.selectionStart = e.selectionStart, t.element.dom.selectionEnd = e.selectionEnd;
  }, NS = (t) => {
    const e = I.getValue(t), o = t.element.dom.selectionStart, n = t.element.dom.selectionEnd;
    return {
      fetchPattern: e,
      selectionStart: o,
      selectionEnd: n
    };
  }, _P = (t, e) => {
    Je(e.element, "id").each((o) => st(t.element, "aria-activedescendant", o));
  }, CP = (t) => {
    const e = (s, r) => (r.cut(), u.none()), o = (s, r) => {
      const c = {
        interactionEvent: r.event,
        eventType: r.event.raw.type
      };
      return U(s, LS, c), u.some(!0);
    }, n = "searcher-events";
    return {
      dom: {
        tag: "div",
        classes: [Hl]
      },
      components: [Hr.sketch({
        inputClasses: [
          VS,
          "tox-textfield"
        ],
        inputAttributes: {
          ...t.placeholder.map((s) => ({ placeholder: t.i18n(s) })).getOr({}),
          type: "search",
          "aria-autocomplete": "list"
        },
        inputBehaviours: D([
          nt(n, [
            O(Sr(), (s) => {
              xt(s, PS);
            }),
            O(kn(), (s, r) => {
              r.event.raw.key === "Escape" && r.stop();
            })
          ]),
          z.config({
            mode: "special",
            onLeft: e,
            onRight: e,
            onSpace: e,
            onEnter: o,
            onEscape: o,
            onUp: o,
            onDown: o
          })
        ]),
        eventOrder: {
          keydown: [
            n,
            z.name()
          ]
        }
      })]
    };
  }, Ul = "tox-collection--results__js", zS = (t) => {
    var e;
    return t.dom ? {
      ...t,
      dom: {
        ...t.dom,
        attributes: {
          ...(e = t.dom.attributes) !== null && e !== void 0 ? e : {},
          id: P("aria-item-search-result-id"),
          "aria-selected": "false"
        }
      }
    } : t;
  }, Bg = (t, e) => (o) => {
    const n = df(o, e);
    return B(n, (s) => ({
      dom: t,
      components: s
    }));
  }, OP = (t) => ({
    dom: {
      tag: "div",
      classes: [
        "tox-menu",
        "tox-swatches-menu"
      ]
    },
    components: [{
      dom: {
        tag: "div",
        classes: ["tox-swatches"]
      },
      components: [Rr.parts.items({
        preprocess: t !== "auto" ? Bg({
          tag: "div",
          classes: ["tox-swatches__row"]
        }, t) : Tt
      })]
    }]
  }), kP = (t) => ({
    dom: {
      tag: "div",
      classes: [
        "tox-menu",
        "tox-collection",
        "tox-collection--toolbar",
        "tox-collection--toolbar-lg"
      ]
    },
    components: [Rr.parts.items({
      preprocess: Bg({
        tag: "div",
        classes: ["tox-collection__group"]
      }, t)
    })]
  }), US = (t, e) => {
    const o = [];
    let n = [];
    return Y(t, (s, r) => {
      e(s, r) ? (n.length > 0 && o.push(n), n = [], (At(s.dom, "innerHtml") || s.components && s.components.length > 0) && n.push(s)) : n.push(s);
    }), n.length > 0 && o.push(n), B(o, (s) => ({
      dom: {
        tag: "div",
        classes: ["tox-collection__group"]
      },
      components: s
    }));
  }, Ig = (t, e, o) => Rr.parts.items({
    preprocess: (n) => {
      const s = B(n, o);
      return t !== "auto" && t > 1 ? Bg({
        tag: "div",
        classes: ["tox-collection__group"]
      }, t)(s) : US(s, (r, c) => e[c].type === "separator");
    }
  }), WS = (t, e, o = !0) => ({
    dom: {
      tag: "div",
      classes: [
        "tox-menu",
        "tox-collection"
      ].concat(t === 1 ? ["tox-collection--list"] : ["tox-collection--grid"])
    },
    components: [Ig(t, e, Tt)]
  }), EP = (t, e, o = !0) => {
    const n = P("aria-controls-search-results");
    return {
      dom: {
        tag: "div",
        classes: [
          "tox-menu",
          "tox-collection",
          Ul
        ].concat(t === 1 ? ["tox-collection--list"] : ["tox-collection--grid"]),
        attributes: { id: n }
      },
      components: [Ig(t, e, zS)]
    };
  }, AP = (t, e, o) => {
    const n = P("aria-controls-search-results");
    return {
      dom: {
        tag: "div",
        classes: [
          "tox-menu",
          "tox-collection"
        ].concat(t === 1 ? ["tox-collection--list"] : ["tox-collection--grid"])
      },
      components: [
        CP({
          i18n: Fo.translate,
          placeholder: o.placeholder
        }),
        {
          dom: {
            tag: "div",
            classes: [
              ...t === 1 ? ["tox-collection--list"] : ["tox-collection--grid"],
              Ul
            ],
            attributes: { id: n }
          },
          components: [Ig(t, e, zS)]
        }
      ]
    };
  }, DP = (t, e = !0) => ({
    dom: {
      tag: "div",
      classes: [
        "tox-collection",
        "tox-collection--horizontal"
      ]
    },
    components: [Rr.parts.items({ preprocess: (o) => US(o, (n, s) => t[s].type === "separator") })]
  }), Wl = (t) => Xo(t, (e) => "icon" in e && e.icon !== void 0), ks = (t) => (console.error(dc(t)), console.log(t), u.none()), MP = (t, e, o, n, s) => {
    const r = DP(o);
    return {
      value: t,
      dom: r.dom,
      components: r.components,
      items: o
    };
  }, Rg = (t, e, o, n, s) => {
    const r = () => s.menuType !== "searchable" ? WS(n, o) : s.searchMode.searchMode === "search-with-field" ? AP(n, o, s.searchMode) : EP(n, o);
    if (s.menuType === "color") {
      const c = OP(n);
      return {
        value: t,
        dom: c.dom,
        components: c.components,
        items: o
      };
    } else if (s.menuType === "normal" && n === "auto") {
      const c = WS(n, o);
      return {
        value: t,
        dom: c.dom,
        components: c.components,
        items: o
      };
    } else if (s.menuType === "normal" || s.menuType === "searchable") {
      const c = r();
      return {
        value: t,
        dom: c.dom,
        components: c.components,
        items: o
      };
    } else if (s.menuType === "listpreview" && n !== "auto") {
      const c = kP(n);
      return {
        value: t,
        dom: c.dom,
        components: c.components,
        items: o
      };
    } else
      return {
        value: t,
        dom: yP(e, n, s.menuType),
        components: xP,
        items: o
      };
  }, Zt = se("type"), Pg = se("name"), Lg = se("label"), Es = se("text"), GS = se("title"), jS = se("icon"), Ya = se("value"), $P = tn("fetch"), FP = tn("getSubmenuItems"), Bc = tn("onAction"), BP = tn("onItemAction"), Nr = he("onSetup", () => R), IP = ze("name"), Js = ze("text"), Go = ze("icon"), Gl = ze("tooltip"), Vg = ze("label"), RP = ze("shortcut"), PP = br("select"), jl = Ie("active", !1), LP = Ie("borderless", !1), dn = Ie("enabled", !0), Yl = Ie("primary", !1), YS = (t) => S("columns", t), Hg = S("meta", {}), Ng = he("onAction", R), zr = (t) => fs("type", t), zg = (t) => Oe("name", "name", Vi(() => P(`${t}-name`)), ve), VP = (t) => Oe("value", "value", Vi(() => P(`${t}-value`)), Cn()), XS = X([
    Zt,
    Js
  ]), HP = (t) => Yt("separatormenuitem", XS, t), NP = X([
    zr("autocompleteitem"),
    jl,
    dn,
    Hg,
    Ya,
    Js,
    Go
  ]), zP = (t) => Yt("Autocompleter.Separator", XS, t), UP = (t) => Yt("Autocompleter.Item", NP, t), Xa = [
    dn,
    Gl,
    Go,
    Js,
    Nr
  ], WP = X([
    Zt,
    Bc
  ].concat(Xa)), KS = (t) => Yt("toolbarbutton", WP, t), Ug = [jl].concat(Xa), GP = X(Ug.concat([
    Zt,
    Bc
  ])), qS = (t) => Yt("ToggleButton", GP, t), JS = [
    he("predicate", Lt),
    Un("scope", "node", [
      "node",
      "editor"
    ]),
    Un("position", "selection", [
      "node",
      "selection",
      "line"
    ])
  ], jP = Xa.concat([
    zr("contextformbutton"),
    Yl,
    Bc,
    Qe("original", Tt)
  ]), YP = Ug.concat([
    zr("contextformbutton"),
    Yl,
    Bc,
    Qe("original", Tt)
  ]), XP = Xa.concat([zr("contextformbutton")]), KP = Ug.concat([zr("contextformtogglebutton")]), qP = mo("type", {
    contextformbutton: jP,
    contextformtogglebutton: YP
  }), JP = X([
    zr("contextform"),
    he("initValue", w("")),
    Vg,
    ko("commands", qP),
    zn("launch", mo("type", {
      contextformbutton: XP,
      contextformtogglebutton: KP
    }))
  ].concat(JS)), ZP = (t) => Yt("ContextForm", JP, t), QP = X([
    zr("contexttoolbar"),
    se("items")
  ].concat(JS)), tL = (t) => Yt("ContextToolbar", QP, t), eL = [
    Zt,
    se("src"),
    ze("alt"),
    vr("classes", [], ve)
  ], oL = X(eL), nL = [
    Zt,
    Es,
    IP,
    vr("classes", ["tox-collection__item-label"], ve)
  ], sL = X(nL), ZS = mb(() => uc("type", {
    cardimage: oL,
    cardtext: sL,
    cardcontainer: rL
  })), rL = X([
    Zt,
    fs("direction", "horizontal"),
    fs("align", "left"),
    fs("valign", "middle"),
    ko("items", ZS)
  ]), Ic = [
    dn,
    Js,
    RP,
    VP("menuitem"),
    Hg
  ], cL = X([
    Zt,
    Vg,
    ko("items", ZS),
    Nr,
    Ng
  ].concat(Ic)), aL = (t) => Yt("cardmenuitem", cL, t), iL = X([
    Zt,
    jl,
    Go
  ].concat(Ic)), lL = (t) => Yt("choicemenuitem", iL, t), QS = [
    Zt,
    se("fancytype"),
    Ng
  ], uL = [S("initData", {})].concat(QS), dL = [
    br("select"),
    Fd("initData", {}, [
      Ie("allowCustomColors", !0),
      fs("storageKey", "default"),
      vb("colors", Cn())
    ])
  ].concat(QS), mL = mo("fancytype", {
    inserttable: uL,
    colorswatch: dL
  }), gL = (t) => Yt("fancymenuitem", mL, t), pL = X([
    Zt,
    Nr,
    Ng,
    Go
  ].concat(Ic)), hL = (t) => Yt("menuitem", pL, t), fL = X([
    Zt,
    FP,
    Nr,
    Go
  ].concat(Ic)), bL = (t) => Yt("nestedmenuitem", fL, t), vL = X([
    Zt,
    Go,
    jl,
    Nr,
    Bc
  ].concat(Ic)), yL = (t) => Yt("togglemenuitem", vL, t), Wg = (t, e, o) => {
    const n = eo(t.element, "." + o);
    if (n.length > 0) {
      const s = cc(n, (r) => {
        const c = r.dom.getBoundingClientRect().top, a = n[0].dom.getBoundingClientRect().top;
        return Math.abs(c - a) > e;
      }).getOr(n.length);
      return u.some({
        numColumns: s,
        numRows: Math.ceil(n.length / s)
      });
    } else
      return u.none();
  }, tw = (t, e) => D([nt(t, e)]), Ka = {
    namedEvents: tw,
    unnamedEvents: (t) => tw(P("unnamed-events"), t)
  }, ew = P("tooltip.exclusive"), qa = P("tooltip.show"), Ja = P("tooltip.hide"), ow = (t, e, o) => {
    t.getSystem().broadcastOn([ew], {});
  };
  var xL = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    hideAllExclusive: ow,
    setComponents: (t, e, o, n) => {
      o.getTooltip().each((s) => {
        s.getSystem().isConnected() && et.set(s, n);
      });
    }
  }), SL = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    events: (t, e) => {
      const o = (s) => {
        e.getTooltip().each((r) => {
          _s(r), t.onHide(s, r), e.clearTooltip();
        }), e.clearTimer();
      }, n = (s) => {
        if (!e.isShowing()) {
          ow(s);
          const r = t.lazySink(s).getOrDie(), c = s.getSystem().build({
            dom: t.tooltipDom,
            components: t.tooltipComponents,
            events: It(t.mode === "normal" ? [
              O(vs(), (a) => {
                xt(s, qa);
              }),
              O(Bd(), (a) => {
                xt(s, Ja);
              })
            ] : []),
            behaviours: D([et.config({})])
          });
          e.setTooltip(c), Fr(r, c), t.onShow(s, c), We.position(r, c, { anchor: t.anchor(s) });
        }
      };
      return It(_e([
        [
          O(qa, (s) => {
            e.resetTimer(() => {
              n(s);
            }, t.delay);
          }),
          O(Ja, (s) => {
            e.resetTimer(() => {
              o(s);
            }, t.delay);
          }),
          O(Tr(), (s, r) => {
            const c = r;
            c.universal || ie(c.channels, ew) && o(s);
          }),
          Gn((s) => {
            o(s);
          })
        ],
        t.mode === "normal" ? [
          O(ys(), (s) => {
            xt(s, qa);
          }),
          O(Rd(), (s) => {
            xt(s, Ja);
          }),
          O(vs(), (s) => {
            xt(s, qa);
          }),
          O(Bd(), (s) => {
            xt(s, Ja);
          })
        ] : [
          O(Nd(), (s, r) => {
            xt(s, qa);
          }),
          O(zd(), (s) => {
            xt(s, Ja);
          })
        ]
      ]));
    }
  }), wL = [
    k("lazySink"),
    k("tooltipDom"),
    S("exclusive", !0),
    S("tooltipComponents", []),
    S("delay", 300),
    Un("mode", "normal", [
      "normal",
      "follow-highlight"
    ]),
    S("anchor", (t) => ({
      type: "hotspot",
      hotspot: t,
      layouts: {
        onLtr: w([
          fe,
          Ue,
          De,
          io,
          Me,
          lo
        ]),
        onRtl: w([
          fe,
          Ue,
          De,
          io,
          Me,
          lo
        ])
      }
    })),
    pt("onHide"),
    pt("onShow")
  ], TL = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    init: () => {
      const t = Pt(), e = Pt(), o = () => {
        t.on(clearTimeout);
      }, n = (r, c) => {
        o(), t.set(setTimeout(r, c));
      }, s = w("not-implemented");
      return Do({
        getTooltip: e.get,
        isShowing: e.isSet,
        setTooltip: e.set,
        clearTooltip: e.clear,
        clearTimer: o,
        resetTimer: n,
        readState: s
      });
    }
  });
  const nw = ye({
    fields: wL,
    name: "tooltipping",
    active: SL,
    state: TL,
    apis: xL
  }), _L = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), sw = "silver.readonly", CL = X([$D("readonly")]), Xl = (t, e) => {
    const n = t.mainUi.outerContainer.element, s = [
      t.mainUi.mothership,
      ...t.uiMotherships
    ];
    e && Y(s, (r) => {
      r.broadcastOn([Xs()], { target: n });
    }), Y(s, (r) => {
      r.broadcastOn([sw], { readonly: e });
    });
  }, rw = (t, e) => {
    t.on("init", () => {
      t.mode.isReadOnly() && Xl(e, !0);
    }), t.on("SwitchMode", () => Xl(e, t.mode.isReadOnly())), Jx(t) && t.mode.set("readonly");
  }, re = () => po.config({
    channels: {
      [sw]: {
        schema: CL,
        onReceive: (t, e) => {
          q.set(t, e.readonly);
        }
      }
    }
  }), mn = {
    item: (t) => q.config({
      disabled: t,
      disableClass: "tox-collection__item--state-disabled"
    }),
    button: (t) => q.config({ disabled: t }),
    splitButton: (t) => q.config({
      disabled: t,
      disableClass: "tox-tbtn--disabled"
    }),
    toolbarButton: (t) => q.config({
      disabled: t,
      disableClass: "tox-tbtn--disabled",
      useNative: !1
    })
  }, Kl = (t, e) => {
    const o = t.getApi(e);
    return (n) => {
      n(o);
    };
  }, Zs = (t, e) => Vt((o) => {
    Kl(t, o)((s) => {
      const r = t.onSetup(s);
      To(r) && e.set(r);
    });
  }), Qs = (t, e) => Gn((o) => Kl(t, o)(e.get())), OL = (t, e) => xs((o, n) => {
    Kl(t, o)(t.onAction), !t.triggersSubmenu && e === Fn.CLOSE_ON_EXECUTE && (o.getSystem().isConnected() && xt(o, Gi()), n.stop());
  }), kL = {
    [Ao()]: [
      "disabling",
      "alloy.base.behaviour",
      "toggling",
      "item-events"
    ]
  }, Rc = dr, Pc = (t, e, o, n) => {
    const s = j(R);
    return {
      type: "item",
      dom: e.dom,
      components: Rc(e.optComponents),
      data: t.data,
      eventOrder: kL,
      hasSubmenu: t.triggersSubmenu,
      itemBehaviours: D([
        nt("item-events", [
          OL(t, o),
          Zs(t, s),
          Qs(t, s)
        ]),
        mn.item(() => !t.enabled || n.isDisabled()),
        re(),
        et.config({})
      ].concat(t.itemBehaviours))
    };
  }, Lc = (t) => ({
    value: t.value,
    meta: {
      text: t.text.getOr(""),
      ...t.meta
    }
  }), cw = (t) => {
    const e = Mc.os.isMacOS() || Mc.os.isiOS(), s = e ? {
      alt: "⌥",
      ctrl: "⌃",
      shift: "⇧",
      meta: "⌘",
      access: "⌃⌥"
    } : {
      meta: "Ctrl",
      access: "Shift+Alt"
    }, r = t.split("+"), c = B(r, (a) => {
      const i = a.toLowerCase().trim();
      return At(s, i) ? s[i] : a;
    });
    return e ? c.join("") : c.join("+");
  }, Gg = (t, e, o = [AS]) => un(t, {
    tag: "div",
    classes: o
  }, e), aw = (t) => ({
    dom: {
      tag: "div",
      classes: [$g]
    },
    components: [qt(Fo.translate(t))]
  }), iw = (t, e) => ({
    dom: {
      tag: "div",
      classes: e,
      innerHtml: t
    }
  }), EL = (t, e) => ({
    dom: {
      tag: "div",
      classes: [$g]
    },
    components: [{
      dom: {
        tag: t.tag,
        styles: t.styles
      },
      components: [qt(Fo.translate(e))]
    }]
  }), AL = (t) => ({
    dom: {
      tag: "div",
      classes: [uP]
    },
    components: [qt(cw(t))]
  }), lw = (t) => Gg("checkmark", t, [dP]), DL = (t) => Gg("chevron-right", t, [DS]), ML = (t) => Gg("chevron-down", t, [DS]), $L = (t, e) => {
    const o = t.direction === "vertical" ? mP : $S, n = t.align === "left" ? pP : gP;
    return {
      dom: {
        tag: "div",
        classes: [
          MS,
          o,
          n,
          (() => {
            switch (t.valign) {
              case "top":
                return hP;
              case "middle":
                return fP;
              case "bottom":
                return bP;
            }
          })()
        ]
      },
      components: e
    };
  }, FL = (t, e, o) => ({
    dom: {
      tag: "img",
      classes: e,
      attributes: {
        src: t,
        alt: o.getOr("")
      }
    }
  }), BL = (t, e, o) => {
    const n = "custom", s = "remove", r = t.ariaLabel, c = t.value, a = t.iconContent.map((l) => JR(l, e.icons, o));
    return {
      dom: (() => {
        const l = Mg, d = a.getOr(""), g = {
          tag: "div",
          attributes: r.map((p) => ({ title: e.translate(p) })).getOr({}),
          classes: [l]
        };
        return c === n ? {
          ...g,
          tag: "button",
          classes: [
            ...g.classes,
            "tox-swatches__picker-btn"
          ],
          innerHtml: d
        } : c === s ? {
          ...g,
          classes: [
            ...g.classes,
            "tox-swatch--remove"
          ],
          innerHtml: d
        } : wo(c) ? {
          ...g,
          attributes: {
            ...g.attributes,
            "data-mce-color": c
          },
          styles: { "background-color": c },
          innerHtml: d
        } : g;
      })(),
      optComponents: []
    };
  }, uw = (t) => {
    const e = t.map((o) => ({
      attributes: {
        title: Fo.translate(o),
        id: P("menu-item")
      }
    })).getOr({});
    return {
      tag: "div",
      classes: [
        Dg,
        Hl
      ],
      ...e
    };
  }, IL = (t, e, o, n) => {
    const s = {
      tag: "div",
      classes: [AS]
    }, r = (g) => un(g, s, e.icons, n), c = () => u.some({ dom: s }), a = o ? t.iconContent.map(r).orThunk(c) : u.none(), i = t.checkMark, l = u.from(t.meta).fold(() => aw, (g) => At(g, "style") ? Po(EL, g.style) : aw), d = t.htmlContent.fold(() => t.textContent.map(l), (g) => u.some(iw(g, [$g])));
    return {
      dom: uw(t.ariaLabel),
      optComponents: [
        a,
        d,
        t.shortcutContent.map(AL),
        i,
        t.caret
      ]
    };
  }, Za = (t, e, o, n = u.none()) => t.presets === "color" ? BL(t, e, n) : IL(t, e, o, n), dw = (t, e) => Q(t, "tooltipWorker").map((o) => [nw.config({
    lazySink: e.getSink,
    tooltipDom: {
      tag: "div",
      classes: ["tox-tooltip-worker-container"]
    },
    tooltipComponents: [],
    anchor: (n) => ({
      type: "submenu",
      item: n,
      overrides: { maxHeightFunction: _c }
    }),
    mode: "follow-highlight",
    onShow: (n, s) => {
      o((r) => {
        nw.setComponents(n, [Gb({ element: F.fromDom(r) })]);
      });
    }
  })]).getOr([]), RL = (t) => Dc.DOM.encode(t), mw = (t, e) => {
    const o = Fo.translate(t), n = RL(o);
    if (e.length > 0) {
      const s = new RegExp(_L(e), "gi");
      return n.replace(s, (r) => `<span class="tox-autocompleter-highlight">${r}</span>`);
    } else
      return n;
  }, PL = (t, e, o, n, s, r, c, a = !0) => {
    const i = Za({
      presets: n,
      textContent: u.none(),
      htmlContent: o ? t.text.map((l) => mw(l, e)) : u.none(),
      ariaLabel: t.text,
      iconContent: t.icon,
      shortcutContent: u.none(),
      checkMark: u.none(),
      caret: u.none(),
      value: t.value
    }, c.providers, a, t.icon);
    return Pc({
      data: Lc(t),
      enabled: t.enabled,
      getApi: w({}),
      onAction: (l) => s(t.value, t.meta),
      onSetup: w(R),
      triggersSubmenu: !1,
      itemBehaviours: dw(t.meta, c)
    }, i, r, c.providers);
  }, gw = (t, e) => B(t, (o) => {
    switch (o.type) {
      case "cardcontainer":
        return $L(o, gw(o.items, e));
      case "cardimage":
        return FL(o.src, o.classes, o.alt);
      case "cardtext":
        const s = o.name.exists((r) => ie(e.cardText.highlightOn, r)) ? u.from(e.cardText.matchText).getOr("") : "";
        return iw(mw(o.text, s), o.classes);
    }
  }), LL = (t, e, o, n) => {
    const s = (c) => ({
      isEnabled: () => !q.isDisabled(c),
      setEnabled: (a) => {
        q.set(c, !a), Y(eo(c.element, "*"), (i) => {
          c.getSystem().getByDom(i).each((l) => {
            l.hasConfigured(q) && q.set(l, !a);
          });
        });
      }
    }), r = {
      dom: uw(t.label),
      optComponents: [u.some({
        dom: {
          tag: "div",
          classes: [
            MS,
            $S
          ]
        },
        components: gw(t.items, n)
      })]
    };
    return Pc({
      data: Lc({
        text: u.none(),
        ...t
      }),
      enabled: t.enabled,
      getApi: s,
      onAction: t.onAction,
      onSetup: t.onSetup,
      triggersSubmenu: !1,
      itemBehaviours: u.from(n.itemBehaviours).getOr([])
    }, r, e, o.providers);
  }, VL = (t, e, o, n, s, r, c, a = !0) => {
    const i = (d) => ({
      setActive: (m) => {
        ct.set(d, m);
      },
      isActive: () => ct.isOn(d),
      isEnabled: () => !q.isDisabled(d),
      setEnabled: (m) => q.set(d, !m)
    }), l = Za({
      presets: o,
      textContent: e ? t.text : u.none(),
      htmlContent: u.none(),
      ariaLabel: t.text,
      iconContent: t.icon,
      shortcutContent: e ? t.shortcut : u.none(),
      checkMark: e ? u.some(lw(c.icons)) : u.none(),
      caret: u.none(),
      value: t.value
    }, c, a);
    return jt(Pc({
      data: Lc(t),
      enabled: t.enabled,
      getApi: i,
      onAction: (d) => n(t.value),
      onSetup: (d) => (d.setActive(s), R),
      triggersSubmenu: !1,
      itemBehaviours: []
    }, l, r, c), {
      toggling: {
        toggleClass: ES,
        toggleOnExecute: !1,
        selected: t.active,
        exclusive: !0
      }
    });
  }, pw = Nm(sg(), rg()), hw = (t) => ({ value: yw(t) }), fw = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, bw = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, vw = (t) => fw.test(t) || bw.test(t), yw = (t) => xf(t, "#").toUpperCase(), HL = (t) => vw(t) ? u.some({ value: yw(t) }) : u.none(), NL = (t) => ({ value: t.value.replace(fw, (o, n, s, r) => n + n + s + s + r + r) }), zL = (t) => {
    const e = NL(t), o = bw.exec(e.value);
    return o === null ? [
      "FFFFFF",
      "FF",
      "FF",
      "FF"
    ] : o;
  }, jg = (t) => {
    const e = t.toString(16);
    return (e.length === 1 ? "0" + e : e).toUpperCase();
  }, Qa = (t) => {
    const e = jg(t.red) + jg(t.green) + jg(t.blue);
    return hw(e);
  }, xw = Math.min, Sw = Math.max, ql = Math.round, UL = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i, WL = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i, tr = (t, e, o, n) => ({
    red: t,
    green: e,
    blue: o,
    alpha: n
  }), Yg = (t) => {
    const e = parseInt(t, 10);
    return e.toString() === t && e >= 0 && e <= 255;
  }, ww = (t) => {
    let e, o, n;
    const s = (t.hue || 0) % 360;
    let r = t.saturation / 100, c = t.value / 100;
    if (r = Sw(0, xw(r, 1)), c = Sw(0, xw(c, 1)), r === 0)
      return e = o = n = ql(255 * c), tr(e, o, n, 1);
    const a = s / 60, i = c * r, l = i * (1 - Math.abs(a % 2 - 1)), d = c - i;
    switch (Math.floor(a)) {
      case 0:
        e = i, o = l, n = 0;
        break;
      case 1:
        e = l, o = i, n = 0;
        break;
      case 2:
        e = 0, o = i, n = l;
        break;
      case 3:
        e = 0, o = l, n = i;
        break;
      case 4:
        e = l, o = 0, n = i;
        break;
      case 5:
        e = i, o = 0, n = l;
        break;
      default:
        e = o = n = 0;
    }
    return e = ql(255 * (e + d)), o = ql(255 * (o + d)), n = ql(255 * (n + d)), tr(e, o, n, 1);
  }, ti = (t) => {
    const e = zL(t), o = parseInt(e[1], 16), n = parseInt(e[2], 16), s = parseInt(e[3], 16);
    return tr(o, n, s, 1);
  }, Tw = (t, e, o, n) => {
    const s = parseInt(t, 10), r = parseInt(e, 10), c = parseInt(o, 10), a = parseFloat(n);
    return tr(s, r, c, a);
  }, Xg = (t) => {
    if (t === "transparent")
      return u.some(tr(0, 0, 0, 0));
    const e = UL.exec(t);
    if (e !== null)
      return u.some(Tw(e[1], e[2], e[3], "1"));
    const o = WL.exec(t);
    return o !== null ? u.some(Tw(o[1], o[2], o[3], o[4])) : u.none();
  }, _w = (t) => `rgba(${t.red},${t.green},${t.blue},${t.alpha})`, Cw = tr(255, 0, 0, 1), GL = (t) => {
    t.dispatch("SkinLoaded");
  }, jL = (t, e) => {
    t.dispatch("SkinLoadError", e);
  }, YL = (t) => {
    t.dispatch("ResizeEditor");
  }, Kg = (t, e) => {
    t.dispatch("ResizeContent", e);
  }, XL = (t, e) => {
    t.dispatch("ScrollContent", e);
  }, Ow = (t, e) => {
    t.dispatch("TextColorChange", e);
  }, KL = (t, e) => {
    t.dispatch("AfterProgressState", { state: e });
  }, qL = (t, e) => t.dispatch("ResolveName", {
    name: e.nodeName.toLowerCase(),
    target: e
  }), JL = (t, e) => {
    t.dispatch("ToggleToolbarDrawer", { state: e });
  }, ZL = (t, e) => {
    t.dispatch("StylesTextUpdate", e);
  }, QL = (t, e) => {
    t.dispatch("AlignTextUpdate", e);
  }, tV = (t, e) => {
    t.dispatch("FontSizeTextUpdate", e);
  }, eV = (t, e) => {
    t.dispatch("FontSizeInputTextUpdate", e);
  }, oV = (t, e) => {
    t.dispatch("BlocksTextUpdate", e);
  }, nV = (t, e) => {
    t.dispatch("FontFamilyTextUpdate", e);
  }, Jl = (t, e) => () => {
    t(), e();
  }, je = (t) => Ur(t, "NodeChange", (e) => {
    e.setEnabled(t.selection.isEditable());
  }), sV = (t, e) => (o) => {
    const n = Tc(), s = () => {
      o.setActive(t.formatter.match(e));
      const r = t.formatter.formatChanged(e, o.setActive);
      n.set(r);
    };
    return t.initialized ? s() : t.once("init", s), () => {
      t.off("init", s), n.clear();
    };
  }, Zl = (t, e) => (o) => {
    const n = je(t)(o), s = sV(t, e)(o);
    return () => {
      n(), s();
    };
  }, Ur = (t, e, o) => (n) => {
    const s = () => o(n), r = () => {
      o(n), t.on(e, s);
    };
    return t.initialized ? r() : t.once("init", r), () => {
      t.off("init", r), t.off(e, s);
    };
  }, kw = (t) => (e) => () => {
    t.undoManager.transact(() => {
      t.focus(), t.execCommand("mceToggleFormat", !1, e.format);
    });
  }, vo = (t, e) => () => t.execCommand(e);
  var Wr = tinymce.util.Tools.resolve("tinymce.util.LocalStorage");
  const Ew = {}, rV = (t, e = 10) => {
    const o = Wr.getItem(t), n = Ct(o) ? JSON.parse(o) : [], r = ((l) => e - l.length < 0 ? l.slice(0, e) : l)(n), c = (l) => {
      uf(r, l).each(a), r.unshift(l), r.length > e && r.pop(), Wr.setItem(t, JSON.stringify(r));
    }, a = (l) => {
      r.splice(l, 1);
    };
    return {
      add: c,
      state: () => r.slice(0)
    };
  }, Aw = (t) => Q(Ew, t).getOrThunk(() => {
    const e = `tinymce-custom-colors-${t}`, o = Wr.getItem(e);
    if (Oi(o)) {
      const s = Wr.getItem("tinymce-custom-colors");
      Wr.setItem(e, wo(s) ? s : "[]");
    }
    const n = rV(e, 10);
    return Ew[t] = n, n;
  }), cV = (t) => B(Aw(t).state(), (e) => ({
    type: "choiceitem",
    text: e,
    icon: "checkmark",
    value: e
  })), Dw = (t, e) => {
    Aw(t).add(e);
  }, ei = (t, e, o) => ({
    hue: t,
    saturation: e,
    value: o
  }), qg = (t) => {
    let e = 0, o = 0, n = 0;
    const s = t.red / 255, r = t.green / 255, c = t.blue / 255, a = Math.min(s, Math.min(r, c)), i = Math.max(s, Math.max(r, c));
    if (a === i)
      return n = a, ei(0, 0, n * 100);
    const l = s === a ? r - c : c === a ? s - r : c - s;
    return e = s === a ? 3 : c === a ? 1 : 5, e = 60 * (e - l / (i - a)), o = (i - a) / i, n = i, ei(Math.round(e), Math.round(o * 100), Math.round(n * 100));
  }, aV = (t) => qg(ti(t)), Mw = (t) => Qa(ww(t)), iV = (t) => HL(t).orThunk(() => Xg(t).map(Qa)).getOrThunk(() => {
    const e = document.createElement("canvas");
    e.height = 1, e.width = 1;
    const o = e.getContext("2d");
    o.clearRect(0, 0, e.width, e.height), o.fillStyle = "#FFFFFF", o.fillStyle = t, o.fillRect(0, 0, 1, 1);
    const n = o.getImageData(0, 0, 1, 1).data, s = n[0], r = n[1], c = n[2], a = n[3];
    return Qa(tr(s, r, c, a));
  }), Jg = "forecolor", Zg = "hilitecolor", lV = 5, uV = (t) => {
    const e = [];
    for (let o = 0; o < t.length; o += 2)
      e.push({
        text: t[o + 1],
        value: "#" + iV(t[o]).value,
        icon: "checkmark",
        type: "choiceitem"
      });
    return e;
  }, Xn = (t) => (e) => e.options.get(t), Qg = "#000000", dV = (t) => {
    const e = t.options.register, o = (s) => aa(s, Ct) ? {
      value: uV(s),
      valid: !0
    } : {
      valid: !1,
      message: "Must be an array of strings."
    }, n = (s) => Vn(s) && s > 0 ? {
      value: s,
      valid: !0
    } : {
      valid: !1,
      message: "Must be a positive number."
    };
    e("color_map", {
      processor: o,
      default: [
        "#BFEDD2",
        "Light Green",
        "#FBEEB8",
        "Light Yellow",
        "#F8CAC6",
        "Light Red",
        "#ECCAFA",
        "Light Purple",
        "#C2E0F4",
        "Light Blue",
        "#2DC26B",
        "Green",
        "#F1C40F",
        "Yellow",
        "#E03E2D",
        "Red",
        "#B96AD9",
        "Purple",
        "#3598DB",
        "Blue",
        "#169179",
        "Dark Turquoise",
        "#E67E23",
        "Orange",
        "#BA372A",
        "Dark Red",
        "#843FA1",
        "Dark Purple",
        "#236FA1",
        "Dark Blue",
        "#ECF0F1",
        "Light Gray",
        "#CED4D9",
        "Medium Gray",
        "#95A5A6",
        "Gray",
        "#7E8C8D",
        "Dark Gray",
        "#34495E",
        "Navy Blue",
        "#000000",
        "Black",
        "#ffffff",
        "White"
      ]
    }), e("color_map_background", { processor: o }), e("color_map_foreground", { processor: o }), e("color_cols", {
      processor: n,
      default: tp(t)
    }), e("color_cols_foreground", {
      processor: n,
      default: $w(t, Jg)
    }), e("color_cols_background", {
      processor: n,
      default: $w(t, Zg)
    }), e("custom_colors", {
      processor: "boolean",
      default: !0
    }), e("color_default_foreground", {
      processor: "string",
      default: Qg
    }), e("color_default_background", {
      processor: "string",
      default: Qg
    });
  }, Ql = (t, e) => e === Jg && t.options.isSet("color_map_foreground") ? Xn("color_map_foreground")(t) : e === Zg && t.options.isSet("color_map_background") ? Xn("color_map_background")(t) : Xn("color_map")(t), tp = (t, e = "default") => Math.max(lV, Math.ceil(Math.sqrt(Ql(t, e).length))), $w = (t, e) => {
    const o = Xn("color_cols")(t), n = tp(t, e);
    return o === tp(t) ? n : o;
  }, Fw = (t, e = "default") => Math.round(e === Jg ? Xn("color_cols_foreground")(t) : e === Zg ? Xn("color_cols_background")(t) : Xn("color_cols")(t)), Bw = Xn("custom_colors"), mV = Xn("color_default_foreground"), gV = Xn("color_default_background"), pV = "rgba(0, 0, 0, 0)", hV = (t) => Xg(t).exists((e) => e.alpha !== 0), fV = (t) => Ui(t, (e) => {
    if (_o(e)) {
      const o = Ne(e, "background-color");
      return ls(hV(o), o);
    } else
      return u.none();
  }).getOr(pV), Iw = (t, e) => {
    const o = F.fromDom(t.selection.getStart()), n = e === "hilitecolor" ? fV(o) : Ne(o, "color");
    return Xg(n).map((s) => "#" + Qa(s).value);
  }, bV = (t, e, o) => {
    t.undoManager.transact(() => {
      t.focus(), t.formatter.apply(e, { value: o }), t.nodeChanged();
    });
  }, vV = (t, e) => {
    t.undoManager.transact(() => {
      t.focus(), t.formatter.remove(e, { value: null }, void 0, !0), t.nodeChanged();
    });
  }, yV = (t) => {
    t.addCommand("mceApplyTextcolor", (e, o) => {
      bV(t, e, o);
    }), t.addCommand("mceRemoveTextcolor", (e) => {
      vV(t, e);
    });
  }, Rw = (t) => {
    const e = "choiceitem", o = {
      type: e,
      text: "Remove color",
      icon: "color-swatch-remove-color",
      value: "remove"
    };
    return t ? [
      o,
      {
        type: e,
        text: "Custom color",
        icon: "color-picker",
        value: "custom"
      }
    ] : [o];
  }, ep = (t, e, o, n) => {
    o === "custom" ? zw(t)((r) => {
      r.each((c) => {
        Dw(e, c), t.execCommand("mceApplyTextcolor", e, c), n(c);
      });
    }, Iw(t, e).getOr(Qg)) : o === "remove" ? (n(""), t.execCommand("mceRemoveTextcolor", e)) : (n(o), t.execCommand("mceApplyTextcolor", e, o));
  }, op = (t, e, o) => t.concat(cV(e).concat(Rw(o))), Pw = (t, e, o) => (n) => {
    n(op(t, e, o));
  }, np = (t, e, o) => {
    const n = e === "forecolor" ? "tox-icon-text-color__color" : "tox-icon-highlight-bg-color__color";
    t.setIconFill(n, o);
  }, Lw = (t, e) => {
    t.setTooltip(e);
  }, Vw = (t, e) => (o) => {
    const n = Iw(t, e);
    return Sn(n, o.toUpperCase());
  }, sp = (t, e, o) => {
    if (Sf(o))
      return e === "forecolor" ? "Text color" : "Background color";
    const n = e === "forecolor" ? "Text color {0}" : "Background color {0}", s = op(Ql(t, e), e, !1), r = Gt(s, (c) => c.value === o).getOr({ text: "" }).text;
    return t.translate([
      n,
      t.translate(r)
    ]);
  }, Hw = (t, e, o, n) => {
    t.ui.registry.addSplitButton(e, {
      tooltip: sp(t, o, n.get()),
      presets: "color",
      icon: e === "forecolor" ? "text-color" : "highlight-bg-color",
      select: Vw(t, o),
      columns: Fw(t, o),
      fetch: Pw(Ql(t, o), o, Bw(t)),
      onAction: (s) => {
        ep(t, o, n.get(), R);
      },
      onItemAction: (s, r) => {
        ep(t, o, r, (c) => {
          n.set(c), Ow(t, {
            name: e,
            color: c
          });
        });
      },
      onSetup: (s) => {
        np(s, e, n.get());
        const r = (c) => {
          c.name === e && (np(s, c.name, c.color), Lw(s, sp(t, o, c.color)));
        };
        return t.on("TextColorChange", r), Jl(je(t)(s), () => {
          t.off("TextColorChange", r);
        });
      }
    });
  }, Nw = (t, e, o, n, s) => {
    t.ui.registry.addNestedMenuItem(e, {
      text: n,
      icon: e === "forecolor" ? "text-color" : "highlight-bg-color",
      onSetup: (r) => (Lw(r, sp(t, o, s.get())), np(r, e, s.get()), je(t)(r)),
      getSubmenuItems: () => [{
        type: "fancymenuitem",
        fancytype: "colorswatch",
        select: Vw(t, o),
        initData: { storageKey: o },
        onAction: (r) => {
          ep(t, o, r.value, (c) => {
            s.set(c), Ow(t, {
              name: e,
              color: c
            });
          });
        }
      }]
    });
  }, zw = (t) => (e, o) => {
    let n = !1;
    const s = (a) => {
      const l = a.getData().colorpicker;
      n ? (e(u.from(l)), a.close()) : t.windowManager.alert(t.translate([
        "Invalid hex color code: {0}",
        l
      ]));
    }, r = (a, i) => {
      i.name === "hex-valid" && (n = i.value);
    }, c = { colorpicker: o };
    t.windowManager.open({
      title: "Color Picker",
      size: "normal",
      body: {
        type: "panel",
        items: [{
          type: "colorpicker",
          name: "colorpicker",
          label: "Color"
        }]
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
      initialData: c,
      onAction: r,
      onSubmit: s,
      onClose: R,
      onCancel: () => {
        e(u.none());
      }
    });
  }, xV = (t) => {
    yV(t);
    const e = mV(t), o = gV(t), n = j(e), s = j(o);
    Hw(t, "forecolor", "forecolor", n), Hw(t, "backcolor", "hilitecolor", s), Nw(t, "forecolor", "forecolor", "Text color", n), Nw(t, "backcolor", "hilitecolor", "Background color", s);
  }, rp = (t, e, o, n, s, r, c, a) => {
    const i = Wl(e), d = SV(e, o, n, s !== "color" ? "normal" : "color", r, c, a);
    return Rg(t, i, d, n, { menuType: s });
  }, SV = (t, e, o, n, s, r, c) => dr(B(t, (a) => a.type === "choiceitem" ? lL(a).fold(ks, (i) => u.some(VL(i, o === 1, n, e, r(i.value), s, c, Wl(t)))) : u.none())), tu = (t, e) => {
    const o = Vr(e);
    return t === 1 ? {
      mode: "menu",
      moveOnTab: !0
    } : t === "auto" ? {
      mode: "grid",
      selector: "." + o.item,
      initSize: {
        numColumns: 1,
        numRows: 1
      }
    } : {
      mode: "matrix",
      rowSelector: "." + (e === "color" ? "tox-swatches__row" : "tox-collection__group"),
      previousSelector: (s) => e === "color" ? Jt(s.element, "[aria-checked=true]") : u.none()
    };
  }, wV = (t, e) => t === 1 ? {
    mode: "menu",
    moveOnTab: !1,
    selector: ".tox-collection__item"
  } : t === "auto" ? {
    mode: "flatgrid",
    selector: ".tox-collection__item",
    initSize: {
      numColumns: 1,
      numRows: 1
    }
  } : {
    mode: "matrix",
    selectors: {
      row: e === "color" ? ".tox-swatches__row" : ".tox-collection__group",
      cell: e === "color" ? `.${Mg}` : `.${Hl}`
    }
  }, TV = (t, e) => {
    const o = _V(t, e), n = e.colorinput.getColorCols(t.initData.storageKey), s = "color", c = {
      ...rp(P("menu-value"), o, (a) => {
        t.onAction({ value: a });
      }, n, s, Fn.CLOSE_ON_EXECUTE, t.select.getOr(Lt), e.shared.providers),
      markers: Vr(s),
      movement: tu(n, s)
    };
    return {
      type: "widget",
      data: { value: P("widget-id") },
      dom: {
        tag: "div",
        classes: ["tox-fancymenuitem"]
      },
      autofocus: !0,
      components: [pw.widget(Rr.sketch(c))]
    };
  }, _V = (t, e) => {
    const o = t.initData.allowCustomColors && e.colorinput.hasCustomColors();
    return t.initData.colors.fold(() => op(e.colorinput.getColors(t.initData.storageKey), t.initData.storageKey, o), (n) => n.concat(Rw(o)));
  }, Uw = P("cell-over"), Ww = P("cell-execute"), CV = (t) => (e, o) => t.shared.providers.translate([
    "{0} columns, {1} rows",
    o,
    e
  ]), OV = (t, e, o) => {
    const n = (c) => U(c, Uw, {
      row: t,
      col: e
    }), s = (c) => U(c, Ww, {
      row: t,
      col: e
    }), r = (c, a) => {
      a.stop(), s(c);
    };
    return Re({
      dom: {
        tag: "div",
        attributes: {
          role: "button",
          "aria-label": o
        }
      },
      behaviours: D([
        nt("insert-table-picker-cell", [
          O(vs(), Z.focus),
          O(Ao(), s),
          O(wr(), r),
          O(_a(), r)
        ]),
        ct.config({
          toggleClass: "tox-insert-table-picker__selected",
          toggleOnExecute: !1
        }),
        Z.config({ onFocus: n })
      ])
    });
  }, kV = (t, e, o) => {
    const n = [];
    for (let s = 0; s < e; s++) {
      const r = [];
      for (let c = 0; c < o; c++) {
        const a = t(s + 1, c + 1);
        r.push(OV(s, c, a));
      }
      n.push(r);
    }
    return n;
  }, EV = (t, e, o, n, s) => {
    for (let r = 0; r < n; r++)
      for (let c = 0; c < s; c++)
        ct.set(t[r][c], r <= e && c <= o);
  }, AV = (t) => le(t, (e) => B(e, No)), Gw = (t, e) => qt(`${e}x${t}`), DV = {
    inserttable: (t, e) => {
      const s = CV(e), r = kV(s, 10, 10), c = Gw(0, 0), a = St({
        dom: {
          tag: "span",
          classes: ["tox-insert-table-picker__label"]
        },
        components: [c],
        behaviours: D([et.config({})])
      });
      return {
        type: "widget",
        data: { value: P("widget-id") },
        dom: {
          tag: "div",
          classes: ["tox-fancymenuitem"]
        },
        autofocus: !0,
        components: [pw.widget({
          dom: {
            tag: "div",
            classes: ["tox-insert-table-picker"]
          },
          components: AV(r).concat(a.asSpec()),
          behaviours: D([
            nt("insert-table-picker", [
              Vt((i) => {
                et.set(a.get(i), [c]);
              }),
              jd(Uw, (i, l, d) => {
                const { row: m, col: g } = d.event;
                EV(r, m, g, 10, 10), et.set(a.get(i), [Gw(m + 1, g + 1)]);
              }),
              jd(Ww, (i, l, d) => {
                const { row: m, col: g } = d.event;
                t.onAction({
                  numRows: m + 1,
                  numColumns: g + 1
                }), xt(i, Gi());
              })
            ]),
            z.config({
              initSize: {
                numRows: 10,
                numColumns: 10
              },
              mode: "flatgrid",
              selector: '[role="button"]'
            })
          ])
        })]
      };
    },
    colorswatch: TV
  }, MV = (t, e) => Q(DV, t.fancytype).map((o) => o(t, e)), $V = (t, e, o, n = !0, s = !1) => {
    const r = s ? ML(o.icons) : DL(o.icons), c = (i) => ({
      isEnabled: () => !q.isDisabled(i),
      setEnabled: (l) => q.set(i, !l),
      setIconFill: (l, d) => {
        Jt(i.element, `svg path[class="${l}"], rect[class="${l}"]`).each((m) => {
          st(m, "fill", d);
        });
      },
      setTooltip: (l) => {
        const d = o.translate(l);
        ga(i.element, {
          "aria-label": d,
          title: d
        });
      }
    }), a = Za({
      presets: "normal",
      iconContent: t.icon,
      textContent: t.text,
      htmlContent: u.none(),
      ariaLabel: t.text,
      caret: u.some(r),
      checkMark: u.none(),
      shortcutContent: t.shortcut
    }, o, n);
    return Pc({
      data: Lc(t),
      getApi: c,
      enabled: t.enabled,
      onAction: R,
      onSetup: t.onSetup,
      triggersSubmenu: !0,
      itemBehaviours: []
    }, a, e, o);
  }, FV = (t, e, o, n = !0) => {
    const s = (c) => ({
      isEnabled: () => !q.isDisabled(c),
      setEnabled: (a) => q.set(c, !a)
    }), r = Za({
      presets: "normal",
      iconContent: t.icon,
      textContent: t.text,
      htmlContent: u.none(),
      ariaLabel: t.text,
      caret: u.none(),
      checkMark: u.none(),
      shortcutContent: t.shortcut
    }, o, n);
    return Pc({
      data: Lc(t),
      getApi: s,
      enabled: t.enabled,
      onAction: t.onAction,
      onSetup: t.onSetup,
      triggersSubmenu: !1,
      itemBehaviours: []
    }, r, e, o);
  }, BV = (t) => ({
    type: "separator",
    dom: {
      tag: "div",
      classes: [
        Hl,
        lP
      ]
    },
    components: t.text.map(qt).toArray()
  }), IV = (t, e, o, n = !0) => {
    const s = (c) => ({
      setActive: (a) => {
        ct.set(c, a);
      },
      isActive: () => ct.isOn(c),
      isEnabled: () => !q.isDisabled(c),
      setEnabled: (a) => q.set(c, !a)
    }), r = Za({
      iconContent: t.icon,
      textContent: t.text,
      htmlContent: u.none(),
      ariaLabel: t.text,
      checkMark: u.some(lw(o.icons)),
      caret: u.none(),
      shortcutContent: t.shortcut,
      presets: "normal",
      meta: t.meta
    }, o, n);
    return jt(Pc({
      data: Lc(t),
      enabled: t.enabled,
      getApi: s,
      onAction: t.onAction,
      onSetup: t.onSetup,
      triggersSubmenu: !1,
      itemBehaviours: []
    }, r, e, o), {
      toggling: {
        toggleClass: ES,
        toggleOnExecute: !1,
        selected: t.active
      }
    });
  }, RV = PL, jw = BV, PV = FV, LV = $V, VV = IV, HV = MV, NV = LL;
  var zV = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    getCoupled: (t, e, o, n) => o.getOrCreate(t, e, n),
    getExistingCoupled: (t, e, o, n) => o.getExisting(t, e, n)
  }), UV = [Oo("others", pb(ut.value, Cn()))], WV = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    init: () => {
      const t = {}, e = (r, c) => {
        if (ue(r.others).length === 0)
          throw new Error("Cannot find any known coupled components");
        return Q(t, c);
      }, o = (r, c, a) => e(c, a).getOrThunk(() => {
        const l = Q(c.others, a).getOrDie("No information found for coupled component: " + a)(r), d = r.getSystem().build(l);
        return t[a] = d, d;
      }), n = (r, c, a) => e(c, a).orThunk(() => (Q(c.others, a).getOrDie("No information found for coupled component: " + a), u.none())), s = w({});
      return Do({
        readState: s,
        getExisting: n,
        getOrCreate: o
      });
    }
  });
  const Wt = ye({
    fields: UV,
    name: "coupling",
    apis: zV,
    state: WV
  }), cp = (t) => {
    let e = u.none(), o = [];
    const n = (l) => cp((d) => {
      s((m) => {
        d(l(m));
      });
    }), s = (l) => {
      c() ? i(l) : o.push(l);
    }, r = (l) => {
      c() || (e = u.some(l), a(o), o = []);
    }, c = () => e.isSome(), a = (l) => {
      Y(l, i);
    }, i = (l) => {
      e.each((d) => {
        setTimeout(() => {
          l(d);
        }, 0);
      });
    };
    return t(r), {
      get: s,
      map: n,
      isReady: c
    };
  }, GV = {
    nu: cp,
    pure: (t) => cp((e) => {
      e(t);
    })
  }, jV = (t) => {
    setTimeout(() => {
      throw t;
    }, 0);
  }, Vc = (t) => {
    const e = (i) => {
      t().then(i, jV);
    };
    return {
      map: (i) => Vc(() => t().then(i)),
      bind: (i) => Vc(() => t().then((l) => i(l).toPromise())),
      anonBind: (i) => Vc(() => t().then(() => i.toPromise())),
      toLazy: () => GV.nu(e),
      toCached: () => {
        let i = null;
        return Vc(() => (i === null && (i = t()), i));
      },
      toPromise: t,
      get: e
    };
  }, $e = {
    nu: (t) => Vc(() => new Promise(t)),
    pure: (t) => Vc(() => Promise.resolve(t))
  }, Yw = w("sink"), Xw = w(zo({
    name: Yw(),
    overrides: w({
      dom: { tag: "div" },
      behaviours: D([We.config({ useFixed: Te })]),
      events: It([
        Or(kn()),
        Or(Ho()),
        Or(wr())
      ])
    })
  })), Kw = (t, e) => {
    const o = t.getHotspot(e).getOr(e), n = "hotspot", s = t.getAnchorOverrides();
    return t.layouts.fold(() => ({
      type: n,
      hotspot: o,
      overrides: s
    }), (r) => ({
      type: n,
      hotspot: o,
      overrides: s,
      layouts: r
    }));
  }, YV = (t, e, o) => {
    const n = t.fetch;
    return n(o).map(e);
  }, XV = (t, e, o, n, s, r, c) => {
    const a = YV(t, e, n), i = qw(n, t);
    return a.map((l) => l.bind((d) => u.from(Pr.sketch({
      ...r.menu(),
      uid: yc(""),
      data: d,
      highlightOnOpen: c,
      onOpenMenu: (m, g) => {
        const p = i().getOrDie();
        We.position(p, g, { anchor: o }), ht.decloak(s);
      },
      onOpenSubmenu: (m, g, p) => {
        const h = i().getOrDie();
        We.position(h, p, {
          anchor: {
            type: "submenu",
            item: g
          }
        }), ht.decloak(s);
      },
      onRepositionMenu: (m, g, p) => {
        const h = i().getOrDie();
        We.position(h, g, { anchor: o }), Y(p, (f) => {
          We.position(h, f.triggeredMenu, {
            anchor: {
              type: "submenu",
              item: f.triggeringItem
            }
          });
        });
      },
      onEscape: () => (Z.focus(n), ht.close(s), u.some(!0))
    }))));
  }, eu = (t, e, o, n, s, r, c) => {
    const a = Kw(t, o);
    return XV(t, e, a, o, n, s, c).map((l) => (l.fold(() => {
      ht.isOpen(n) && ht.close(n);
    }, (d) => {
      ht.cloak(n), ht.open(n, d), r(n);
    }), n));
  }, KV = (t, e, o, n, s, r, c) => (ht.close(n), $e.pure(n)), ap = (t, e, o, n, s, r) => {
    const c = Wt.getCoupled(o, "sandbox");
    return (ht.isOpen(c) ? KV : eu)(t, e, o, c, n, s, r);
  }, qV = (t, e, o) => {
    const n = mt.getCurrent(e).getOr(e), s = ro(t.element);
    o ? rt(n.element, "min-width", s + "px") : mA(n.element, s);
  }, qw = (t, e) => t.getSystem().getByUid(e.uid + "-" + Yw()).map((o) => () => ut.value(o)).getOrThunk(() => e.lazySink.fold(() => () => ut.error(new Error("No internal sink is specified, nor could an external sink be found")), (o) => () => o(t))), Jw = (t) => {
    ht.getState(t).each((e) => {
      Pr.repositionMenus(e);
    });
  }, ip = (t, e, o) => {
    const n = qb(), s = (a, i) => {
      const l = Kw(t, e);
      n.link(e.element), t.matchWidth && qV(l.hotspot, i, t.useMinWidth), t.onOpen(l, a, i), o !== void 0 && o.onOpen !== void 0 && o.onOpen(a, i);
    }, r = (a, i) => {
      n.unlink(e.element), o !== void 0 && o.onClose !== void 0 && o.onClose(a, i);
    }, c = qw(e, t);
    return {
      dom: {
        tag: "div",
        classes: t.sandboxClasses,
        attributes: {
          id: n.id,
          role: "listbox"
        }
      },
      behaviours: cn.augment(t.sandboxBehaviours, [
        I.config({
          store: {
            mode: "memory",
            initialValue: e
          }
        }),
        ht.config({
          onOpen: s,
          onClose: r,
          isPartOf: (a, i, l) => Dr(i, l) || Dr(e, l),
          getAttachPoint: () => c().getOrDie()
        }),
        mt.config({
          find: (a) => ht.getState(a).bind((i) => mt.getCurrent(i))
        }),
        po.config({
          channels: {
            ...Fm({ isExtraPart: Lt }),
            ...Bm({ doReposition: Jw })
          }
        })
      ])
    };
  }, Zw = (t) => {
    const e = Wt.getCoupled(t, "sandbox");
    Jw(e);
  }, lp = () => [
    S("sandboxClasses", []),
    cn.field("sandboxBehaviours", [
      mt,
      po,
      ht,
      I
    ])
  ], JV = w([
    k("dom"),
    k("fetch"),
    pt("onOpen"),
    go("onExecute"),
    S("getHotspot", u.some),
    S("getAnchorOverrides", w({})),
    Ys(),
    be("dropdownBehaviours", [
      ct,
      Wt,
      z,
      Z
    ]),
    k("toggleClass"),
    S("eventOrder", {}),
    _t("lazySink"),
    S("matchWidth", !1),
    S("useMinWidth", !1),
    _t("role")
  ].concat(lp())), ZV = w([
    an({
      schema: [
        Qi(),
        S("fakeFocus", !1)
      ],
      name: "menu",
      defaults: (t) => ({ onExecute: t.onExecute })
    }),
    Xw()
  ]), QV = (t, e, o, n) => {
    const s = (d) => Q(t.dom, "attributes").bind((m) => Q(m, d)), r = (d) => {
      ht.getState(d).each((m) => {
        Pr.highlightPrimary(m);
      });
    }, c = (d, m, g) => ap(t, Tt, d, n, m, g), a = (d) => {
      c(d, r, oo.HighlightMenuAndItem).get(R);
    }, i = {
      expand: (d) => {
        ct.isOn(d) || c(d, R, oo.HighlightNone).get(R);
      },
      open: (d) => {
        ct.isOn(d) || c(d, R, oo.HighlightMenuAndItem).get(R);
      },
      refetch: (d) => Wt.getExistingCoupled(d, "sandbox").fold(() => c(d, R, oo.HighlightMenuAndItem).map(R), (g) => eu(t, Tt, d, g, n, R, oo.HighlightMenuAndItem).map(R)),
      isOpen: ct.isOn,
      close: (d) => {
        ct.isOn(d) && c(d, R, oo.HighlightMenuAndItem).get(R);
      },
      repositionMenus: (d) => {
        ct.isOn(d) && Zw(d);
      }
    }, l = (d, m) => (Cr(d), u.some(!0));
    return {
      uid: t.uid,
      dom: t.dom,
      components: e,
      behaviours: xe(t.dropdownBehaviours, [
        ct.config({
          toggleClass: t.toggleClass,
          aria: { mode: "expanded" }
        }),
        Wt.config({
          others: {
            sandbox: (d) => ip(t, d, {
              onOpen: () => ct.on(d),
              onClose: () => ct.off(d)
            })
          }
        }),
        z.config({
          mode: "special",
          onSpace: l,
          onEnter: l,
          onDown: (d, m) => {
            if (jo.isOpen(d)) {
              const g = Wt.getCoupled(d, "sandbox");
              r(g);
            } else
              jo.open(d);
            return u.some(!0);
          },
          onEscape: (d, m) => jo.isOpen(d) ? (jo.close(d), u.some(!0)) : u.none()
        }),
        Z.config({})
      ]),
      events: Al(u.some(a)),
      eventOrder: {
        ...t.eventOrder,
        [Ao()]: [
          "disabling",
          "toggling",
          "alloy.base.behaviour"
        ]
      },
      apis: i,
      domModification: {
        attributes: {
          "aria-haspopup": "true",
          ...t.role.fold(() => ({}), (d) => ({ role: d })),
          ...t.dom.tag === "button" ? { type: s("type").getOr("button") } : {}
        }
      }
    };
  }, jo = Ge({
    name: "Dropdown",
    configFields: JV(),
    partFields: ZV(),
    factory: QV,
    apis: {
      open: (t, e) => t.open(e),
      refetch: (t, e) => t.refetch(e),
      expand: (t, e) => t.expand(e),
      close: (t, e) => t.close(e),
      isOpen: (t, e) => t.isOpen(e),
      repositionMenus: (t, e) => t.repositionMenus(e)
    }
  }), tH = (t) => {
    switch (t.searchMode) {
      case "no-search":
        return { menuType: "normal" };
      default:
        return {
          menuType: "searchable",
          searchMode: t
        };
    }
  }, eH = (t) => {
    const e = I.getValue(t), o = zl(t).map(NS);
    jo.refetch(e).get(() => {
      const n = Wt.getCoupled(e, "sandbox");
      o.each((s) => zl(n).each((r) => TP(r, s)));
    });
  }, oH = (t, e) => {
    nH(t).each((o) => {
      nM(t, o.element, e.event.eventType, e.event.interactionEvent);
    });
  }, nH = (t) => ht.getState(t).bind(yt.getHighlighted).bind(yt.getHighlighted), sH = (t) => ao(t.element, Ul) ? u.some(t.element) : Jt(t.element, "." + Ul), Qw = (t, e, o) => {
    HS(t).each((n) => {
      _P(n, o), sH(e).each((r) => {
        Je(r, "id").each((c) => st(n.element, "aria-controls", c));
      });
    }), st(o.element, "aria-selected", "true");
  }, rH = (t, e, o) => {
    st(o.element, "aria-selected", "false");
  }, cH = (t) => {
    HS(t).each((e) => Z.focus(e));
  }, aH = (t) => Wt.getExistingCoupled(t, "sandbox").bind(zl).map(NS).map((o) => o.fetchPattern).getOr("");
  var ou;
  (function(t) {
    t[t.ContentFocus = 0] = "ContentFocus", t[t.UiFocus = 1] = "UiFocus";
  })(ou || (ou = {}));
  const iH = (t, e, o, n, s) => {
    const r = o.shared.providers, c = (a) => s ? {
      ...a,
      shortcut: u.none(),
      icon: a.text.isSome() ? u.none() : a.icon
    } : a;
    switch (t.type) {
      case "menuitem":
        return hL(t).fold(ks, (a) => u.some(PV(c(a), e, r, n)));
      case "nestedmenuitem":
        return bL(t).fold(ks, (a) => u.some(LV(c(a), e, r, n, s)));
      case "togglemenuitem":
        return yL(t).fold(ks, (a) => u.some(VV(c(a), e, r, n)));
      case "separator":
        return HP(t).fold(ks, (a) => u.some(jw(a)));
      case "fancymenuitem":
        return gL(t).fold(ks, (a) => HV(a, o));
      default:
        return console.error("Unknown item in general menu", t), u.none();
    }
  }, lH = (t, e, o, n, s, r, c) => {
    const a = n === 1, i = !a || Wl(t);
    return dr(B(t, (l) => {
      switch (l.type) {
        case "separator":
          return zP(l).fold(ks, (d) => u.some(jw(d)));
        case "cardmenuitem":
          return aL(l).fold(ks, (d) => u.some(NV({
            ...d,
            onAction: (m) => {
              d.onAction(m), o(d.value, d.meta);
            }
          }, s, r, {
            itemBehaviours: dw(d.meta, r),
            cardText: {
              matchText: e,
              highlightOn: c
            }
          })));
        case "autocompleteitem":
        default:
          return UP(l).fold(ks, (d) => u.some(RV(d, e, a, "normal", o, s, r, i)));
      }
    }));
  }, tT = (t, e, o, n, s, r) => {
    const c = Wl(e), a = dr(B(e, (d) => {
      const m = (p) => s ? !At(p, "text") : c, g = (p) => iH(p, o, n, m(p), s);
      return d.type === "nestedmenuitem" && d.getSubmenuItems().length <= 0 ? g({
        ...d,
        enabled: !1
      }) : g(d);
    })), i = tH(r);
    return (s ? MP : Rg)(t, c, a, 1, i);
  }, up = (t) => Pr.singleData(t.value, t), uH = (t, e, o, n) => {
    const s = tu(e, n), r = Vr(n);
    return {
      data: up({
        ...t,
        movement: s,
        menuBehaviours: Ka.unnamedEvents(e !== "auto" ? [] : [Vt((c, a) => {
          Wg(c, 4, r.item).each(({ numColumns: i, numRows: l }) => {
            z.setGridSize(c, l, i);
          });
        })])
      }),
      menu: {
        markers: Vr(n),
        fakeFocus: o === ou.ContentFocus
      }
    };
  }, dH = (t, e) => kS(F.fromDom(e.startContainer)).map((o) => {
    const n = t.createRng();
    return n.selectNode(o.dom), n;
  }), mH = { register: (t, e) => {
    const o = P("autocompleter"), n = j(!1), s = j(!1), r = Re(Nt.sketch({
      dom: {
        tag: "div",
        classes: ["tox-autocompleter"],
        attributes: { id: o }
      },
      components: [],
      fireDismissalEventInstead: {},
      inlineBehaviours: D([nt("dismissAutocompleter", [
        O(_r(), () => d()),
        O(Nd(), (y, v) => {
          Je(v.event.target, "id").each((b) => st(F.fromDom(t.getBody()), "aria-activedescendant", b));
        })
      ])]),
      lazySink: e.getSink
    })), c = () => Nt.isOpen(r), a = s.get, i = () => {
      if (c()) {
        Nt.hide(r), t.dom.remove(o, !1);
        const y = F.fromDom(t.getBody());
        Je(y, "aria-owns").filter((v) => v === o).each(() => {
          Qt(y, "aria-owns"), Qt(y, "aria-activedescendant");
        });
      }
    }, l = () => Nt.getContent(r).bind((y) => Ei(y.components(), 0)), d = () => t.execCommand("mceAutocompleterClose"), m = (y) => {
      const v = xn(y, (b) => u.from(b.columns)).getOr(1);
      return le(y, (b) => {
        const x = b.items;
        return lH(x, b.matchText, (E, C) => {
          const _ = t.selection.getRng();
          dH(t.dom, _).each((A) => {
            const M = {
              hide: () => d(),
              reload: (ot) => {
                i(), t.execCommand("mceAutocompleterReload", !1, { fetchOptions: ot });
              }
            };
            n.set(!0), b.onAction(M, A, E, C), n.set(!1);
          });
        }, v, Fn.BUBBLE_TO_SANDBOX, e, b.highlightOn);
      });
    }, g = (y, v) => {
      cP(F.fromDom(t.getBody())).each((b) => {
        const x = xn(y, (E) => u.from(E.columns)).getOr(1);
        Nt.showMenuAt(r, {
          anchor: {
            type: "node",
            root: F.fromDom(t.getBody()),
            node: u.from(b)
          }
        }, uH(Rg("autocompleter-value", !0, v, x, { menuType: "normal" }), x, ou.ContentFocus, "normal"));
      }), l().each(yt.highlightFirst);
    }, p = (y) => {
      const v = m(y);
      v.length > 0 ? (g(y, v), st(F.fromDom(t.getBody()), "aria-owns", o), t.inline || h()) : i();
    }, h = () => {
      t.dom.get(o) && t.dom.remove(o, !1);
      const y = t.getDoc().documentElement, v = t.selection.getNode(), b = mM(r.element);
      pr(b, {
        border: "0",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
        top: `${v.offsetTop}px`,
        left: `${v.offsetLeft}px`
      }), t.dom.add(y, b.dom), Jt(b, '[role="menu"]').each((x) => {
        kt(x, "position"), kt(x, "max-height");
      });
    };
    t.on("AutocompleterStart", ({ lookupData: y }) => {
      s.set(!0), n.set(!1), p(y);
    }), t.on("AutocompleterUpdate", ({ lookupData: y }) => p(y)), t.on("AutocompleterEnd", () => {
      i(), s.set(!1), n.set(!1);
    });
    const f = {
      cancelIfNecessary: d,
      isMenuOpen: c,
      isActive: a,
      isProcessingAction: n.get,
      getMenu: l
    };
    aP.setup(f, t);
  } }, gH = [
    "visible",
    "hidden",
    "clip"
  ], eT = (t) => ad(t).length > 0 && !ie(gH, t), oT = (t) => {
    if (Cf(t)) {
      const e = Ne(t, "overflow-x"), o = Ne(t, "overflow-y");
      return eT(e) || eT(o);
    } else
      return !1;
  }, pH = (t) => {
    const e = Rv(t, oT), o = e.length === 0 ? gd(t).map($f).map((n) => Rv(n, oT)).getOr([]) : e;
    return yn(o).map((n) => ({
      element: n,
      others: o.slice(1)
    }));
  }, Gr = (t, e) => qs(t) ? pH(e) : u.none(), Hc = (t) => {
    const e = [
      ...B(t.others, Be),
      Ze()
    ];
    return eD(Be(t.element), e);
  }, oi = (t, e, o) => An(t, e, o).isSome(), nT = (t, e) => {
    let o = null;
    return {
      cancel: () => {
        o !== null && (clearTimeout(o), o = null);
      },
      schedule: (...r) => {
        o = setTimeout(() => {
          t.apply(null, r), o = null;
        }, e);
      }
    };
  }, sT = 5, hH = 400, rT = (t) => {
    const e = t.raw;
    return e.touches === void 0 || e.touches.length !== 1 ? u.none() : u.some(e.touches[0]);
  }, fH = (t, e) => {
    const o = Math.abs(t.clientX - e.x), n = Math.abs(t.clientY - e.y);
    return o > sT || n > sT;
  }, bH = (t) => {
    const e = Pt(), o = j(!1), n = nT((l) => {
      t.triggerEvent(tM(), l), o.set(!0);
    }, hH), s = (l) => (rT(l).each((d) => {
      n.cancel();
      const m = {
        x: d.clientX,
        y: d.clientY,
        target: l.target
      };
      n.schedule(l), o.set(!1), e.set(m);
    }), u.none()), r = (l) => (n.cancel(), rT(l).each((d) => {
      e.on((m) => {
        fH(d, m) && e.clear();
      });
    }), u.none()), c = (l) => {
      n.cancel();
      const d = (m) => Bt(m.target, l.target);
      return e.get().filter(d).map((m) => o.get() ? (l.prevent(), !1) : t.triggerEvent(_a(), l));
    }, a = mc([
      {
        key: bs(),
        value: s
      },
      {
        key: Sa(),
        value: r
      },
      {
        key: xr(),
        value: c
      }
    ]);
    return { fireIfReady: (l, d) => Q(a, d).bind((m) => m(l)) };
  }, vH = (t) => t.raw.which === a1[0] && !ie([
    "input",
    "textarea"
  ], us(t.target)) && !oi(t.target, '[contenteditable="true"]'), yH = (t, e) => {
    const o = {
      stopBackspace: !0,
      ...e
    }, n = [
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "gesturestart",
      "mousedown",
      "mouseup",
      "mouseover",
      "mousemove",
      "mouseout",
      "click"
    ], s = bH(o), r = B(n.concat([
      "selectstart",
      "input",
      "contextmenu",
      "change",
      "transitionend",
      "transitioncancel",
      "drag",
      "dragstart",
      "dragend",
      "dragenter",
      "dragleave",
      "dragover",
      "drop",
      "keyup"
    ]), (p) => to(t, p, (h) => {
      s.fireIfReady(h, p).each((y) => {
        y && h.kill();
      }), o.triggerEvent(p, h) && h.kill();
    })), c = Pt(), a = to(t, "paste", (p) => {
      s.fireIfReady(p, "paste").each((f) => {
        f && p.kill();
      }), o.triggerEvent("paste", p) && p.kill(), c.set(setTimeout(() => {
        o.triggerEvent(Pd(), p);
      }, 0));
    }), i = to(t, "keydown", (p) => {
      o.triggerEvent("keydown", p) ? p.kill() : o.stopBackspace && vH(p) && p.prevent();
    }), l = to(t, "focusin", (p) => {
      o.triggerEvent("focusin", p) && p.kill();
    }), d = Pt(), m = to(t, "focusout", (p) => {
      o.triggerEvent("focusout", p) && p.kill(), d.set(setTimeout(() => {
        o.triggerEvent(Rd(), p);
      }, 0));
    });
    return { unbind: () => {
      Y(r, (p) => {
        p.unbind();
      }), i.unbind(), l.unbind(), m.unbind(), a.unbind(), c.on(clearTimeout), d.on(clearTimeout);
    } };
  }, cT = (t, e) => {
    const o = Q(t, "target").getOr(e);
    return j(o);
  }, xH = (t, e) => {
    const o = j(!1), n = j(!1);
    return {
      stop: () => {
        o.set(!0);
      },
      cut: () => {
        n.set(!0);
      },
      isStopped: o.get,
      isCut: n.get,
      event: t,
      setSource: e.set,
      getSource: e.get
    };
  }, SH = (t) => {
    const e = j(!1);
    return {
      stop: () => {
        e.set(!0);
      },
      cut: R,
      isStopped: e.get,
      isCut: Lt,
      event: t,
      setSource: td("Cannot set source of a broadcasted event"),
      getSource: td("Cannot get source of a broadcasted event")
    };
  }, ni = en.generate([
    { stopped: [] },
    { resume: ["element"] },
    { complete: [] }
  ]), aT = (t, e, o, n, s, r) => {
    const c = t(e, n), a = xH(o, s);
    return c.fold(() => (r.logEventNoHandlers(e, n), ni.complete()), (i) => {
      const l = i.descHandler;
      return Jd(l)(a), a.isStopped() ? (r.logEventStopped(e, i.element, l.purpose), ni.stopped()) : a.isCut() ? (r.logEventCut(e, i.element, l.purpose), ni.complete()) : Tn(i.element).fold(() => (r.logNoParent(e, i.element, l.purpose), ni.complete()), (m) => (r.logEventResponse(e, i.element, l.purpose), ni.resume(m)));
    });
  }, iT = (t, e, o, n, s, r) => aT(t, e, o, n, s, r).fold(Te, (c) => iT(t, e, o, c, s, r), Lt), wH = (t, e, o, n, s) => {
    const r = cT(o, n);
    return aT(t, e, o, n, r, s);
  }, TH = (t, e, o) => {
    const n = SH(e);
    return Y(t, (s) => {
      const r = s.descHandler;
      Jd(r)(n);
    }), n.isStopped();
  }, _H = (t, e, o, n) => lT(t, e, o, o.target, n), lT = (t, e, o, n, s) => {
    const r = cT(o, n);
    return iT(t, e, o, n, r, s);
  }, CH = (t, e) => ({
    element: t,
    descHandler: e
  }), OH = (t, e) => ({
    id: t,
    descHandler: e
  }), kH = () => {
    const t = {}, e = (c, a, i) => {
      Ve(i, (l, d) => {
        const m = t[d] !== void 0 ? t[d] : {};
        m[a] = BM(l, c), t[d] = m;
      });
    }, o = (c, a) => Ca(a).bind((i) => Q(c, i)).map((i) => CH(a, i));
    return {
      registerId: e,
      unregisterId: (c) => {
        Ve(t, (a, i) => {
          At(a, c) && delete a[c];
        });
      },
      filterByType: (c) => Q(t, c).map((a) => Ai(a, (i, l) => OH(l, i))).getOr([]),
      find: (c, a, i) => Q(t, a).bind((l) => Ui(i, (d) => o(l, d), c))
    };
  }, EH = () => {
    const t = kH(), e = {}, o = (l) => {
      const d = l.element;
      return Ca(d).getOrThunk(() => xM("uid-", l.element));
    }, n = (l, d) => {
      const m = e[d];
      if (m === l)
        r(l);
      else
        throw new Error('The tagId "' + d + '" is already used by: ' + Us(m.element) + `
Cannot use it for: ` + Us(l.element) + `
The conflicting element is` + (qo(m.element) ? " " : " not ") + "already in the DOM");
    }, s = (l) => {
      const d = o(l);
      Ko(e, d) && n(l, d);
      const m = [l];
      t.registerId(m, d, l.events), e[d] = l;
    }, r = (l) => {
      Ca(l.element).each((d) => {
        delete e[d], t.unregisterId(d);
      });
    };
    return {
      find: (l, d, m) => t.find(l, d, m),
      filter: (l) => t.filterByType(l),
      register: s,
      unregister: r,
      getById: (l) => Q(e, l)
    };
  }, Bn = $o({
    name: "Container",
    factory: (t) => {
      const { attributes: e, ...o } = t.dom;
      return {
        uid: t.uid,
        dom: {
          tag: "div",
          attributes: {
            role: "presentation",
            ...e
          },
          ...o
        },
        components: t.components,
        behaviours: dl(t.containerBehaviours),
        events: t.events,
        domModification: t.domModification,
        eventOrder: t.eventOrder
      };
    },
    configFields: [
      S("components", []),
      be("containerBehaviours", []),
      S("events", {}),
      S("domModification", {}),
      S("eventOrder", {})
    ]
  }), dp = (t) => {
    const e = (v) => Tn(t.element).fold(Te, (b) => Bt(v, b)), o = EH(), n = (v, b) => o.find(e, v, b), s = yH(t.element, {
      triggerEvent: (v, b) => nm(v, b.target, (x) => _H(n, v, b, x))
    }), r = {
      debugInfo: w("real"),
      triggerEvent: (v, b, x) => {
        nm(v, b, (E) => lT(n, v, x, b, E));
      },
      triggerFocus: (v, b) => {
        Ca(v).fold(() => {
          sn(v);
        }, (x) => {
          nm(zs(), v, (E) => (wH(n, zs(), {
            originator: b,
            kill: R,
            prevent: R,
            target: v
          }, v, E), !1));
        });
      },
      triggerEscape: (v, b) => {
        r.triggerEvent("keydown", v.element, b.event);
      },
      getByUid: (v) => f(v),
      getByDom: (v) => y(v),
      build: Re,
      buildOrPatch: tm,
      addToGui: (v) => {
        i(v);
      },
      removeFromGui: (v) => {
        l(v);
      },
      addToWorld: (v) => {
        c(v);
      },
      removeFromWorld: (v) => {
        a(v);
      },
      broadcast: (v) => {
        g(v);
      },
      broadcastOn: (v, b) => {
        p(v, b);
      },
      broadcastEvent: (v, b) => {
        h(v, b);
      },
      isConnected: Te
    }, c = (v) => {
      v.connect(r), mr(v.element) || (o.register(v), Y(v.components(), c), r.triggerEvent(ji(), v.element, { target: v.element }));
    }, a = (v) => {
      mr(v.element) || (Y(v.components(), a), o.unregister(v)), v.disconnect();
    }, i = (v) => {
      Fr(t, v);
    }, l = (v) => {
      _s(v);
    }, d = () => {
      s.unbind(), ps(t.element);
    }, m = (v) => {
      const b = o.filter(Tr());
      Y(b, (x) => {
        const E = x.descHandler;
        Jd(E)(v);
      });
    }, g = (v) => {
      m({
        universal: !0,
        data: v
      });
    }, p = (v, b) => {
      m({
        universal: !1,
        channels: v,
        data: b
      });
    }, h = (v, b) => {
      const x = o.filter(v);
      return TH(x, b);
    }, f = (v) => o.getById(v).fold(() => ut.error(new Error('Could not find component with uid: "' + v + '" in system.')), ut.value), y = (v) => {
      const b = Ca(v).getOr("not found");
      return f(b);
    };
    return c(t), {
      root: t,
      element: t.element,
      destroy: d,
      add: i,
      remove: l,
      getByUid: f,
      getByDom: y,
      addToWorld: c,
      removeFromWorld: a,
      broadcast: g,
      broadcastOn: p,
      broadcastEvent: h
    };
  }, AH = (t, e) => ({
    dom: {
      tag: "div",
      classes: [
        "tox-bar",
        "tox-form__controls-h-stack"
      ]
    },
    components: B(t.items, e.interpreter)
  }), DH = w([
    S("prefix", "form-field"),
    be("fieldBehaviours", [
      mt,
      I
    ])
  ]), MH = w([
    zo({
      schema: [k("dom")],
      name: "label"
    }),
    zo({
      factory: {
        sketch: (t) => ({
          uid: t.uid,
          dom: {
            tag: "span",
            styles: { display: "none" },
            attributes: { "aria-hidden": "true" },
            innerHtml: t.text
          }
        })
      },
      schema: [k("text")],
      name: "aria-descriptor"
    }),
    Pe({
      factory: {
        sketch: (t) => {
          const e = HD(t, ["factory"]);
          return t.factory.sketch(e);
        }
      },
      schema: [k("factory")],
      name: "field"
    })
  ]), $H = (t, e, o, n) => {
    const s = xe(t.fieldBehaviours, [
      mt.config({
        find: (a) => Dt(a, t, "field")
      }),
      I.config({
        store: {
          mode: "manual",
          getValue: (a) => mt.getCurrent(a).bind(I.getValue),
          setValue: (a, i) => {
            mt.getCurrent(a).each((l) => {
              I.setValue(l, i);
            });
          }
        }
      })
    ]), r = It([Vt((a, i) => {
      const l = wy(a, t, [
        "label",
        "field",
        "aria-descriptor"
      ]);
      l.field().each((d) => {
        const m = P(t.prefix);
        l.label().each((g) => {
          st(g.element, "for", m), st(d.element, "id", m);
        }), l["aria-descriptor"]().each((g) => {
          const p = P(t.prefix);
          st(g.element, "id", p), st(d.element, "aria-describedby", p);
        });
      });
    })]), c = {
      getField: (a) => Dt(a, t, "field"),
      getLabel: (a) => Dt(a, t, "label")
    };
    return {
      uid: t.uid,
      dom: t.dom,
      components: e,
      behaviours: s,
      events: r,
      apis: c
    };
  }, wt = Ge({
    name: "FormField",
    configFields: DH(),
    partFields: MH(),
    factory: $H,
    apis: {
      getField: (t, e) => t.getField(e),
      getLabel: (t, e) => t.getLabel(e)
    }
  });
  var FH = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    exhibit: (t, e) => on({
      attributes: mc([{
        key: e.tabAttr,
        value: "true"
      }])
    })
  }), BH = [S("tabAttr", "data-alloy-tabstop")];
  const zt = ye({
    fields: BH,
    name: "tabstopping",
    active: FH
  });
  var IH = tinymce.util.Tools.resolve("tinymce.html.Entities");
  const si = (t, e, o, n) => {
    const s = PH(t, e, o, n);
    return wt.sketch(s);
  }, RH = (t, e) => si(t, e, [], []), PH = (t, e, o, n) => ({
    dom: uT(o),
    components: t.toArray().concat([e]),
    fieldBehaviours: D(n)
  }), LH = () => uT([]), uT = (t) => ({
    tag: "div",
    classes: ["tox-form__group"].concat(t)
  }), er = (t, e) => wt.parts.label({
    dom: {
      tag: "label",
      classes: ["tox-label"]
    },
    components: [qt(e.translate(t))]
  }), yo = P("form-component-change"), ri = P("form-close"), or = P("form-cancel"), Kn = P("form-action"), ci = P("form-submit"), mp = P("form-block"), gp = P("form-unblock"), dT = P("form-tabchange"), mT = P("form-resize"), VH = (t, e, o) => {
    const n = t.label.map((p) => er(p, e)), s = e.icons(), r = (p) => {
      var h;
      return (h = s[p]) !== null && h !== void 0 ? h : p;
    }, c = (p) => (h, f) => {
      An(f.event.target, "[data-collection-item-value]").each((y) => {
        p(h, f, y, He(y, "data-collection-item-value"));
      });
    }, a = (p, h) => {
      const f = B(h, (b) => {
        const x = Fo.translate(b.text), E = t.columns === 1 ? `<div class="tox-collection__item-label">${x}</div>` : "", C = `<div class="tox-collection__item-icon">${r(b.icon)}</div>`, _ = {
          _: " ",
          " - ": " ",
          "-": " "
        }, A = x.replace(/\_| \- |\-/g, (ot) => _[ot]);
        return `<div class="tox-collection__item${e.isDisabled() ? " tox-collection__item--state-disabled" : ""}" tabindex="-1" data-collection-item-value="${IH.encodeAllRaw(b.value)}" title="${A}" aria-label="${A}">${C}${E}</div>`;
      }), y = t.columns !== "auto" && t.columns > 1 ? df(f, t.columns) : [f], v = B(y, (b) => `<div class="tox-collection__group">${b.join("")}</div>`);
      vc(p.element, v.join(""));
    }, i = c((p, h, f, y) => {
      h.stop(), e.isDisabled() || U(p, Kn, {
        name: t.name,
        value: y
      });
    }), l = [
      O(vs(), c((p, h, f) => {
        sn(f);
      })),
      O(wr(), i),
      O(_a(), i),
      O(ys(), c((p, h, f) => {
        Jt(p.element, "." + ja).each((y) => {
          Xt(y, ja);
        }), ee(f, ja);
      })),
      O(Tb(), c((p) => {
        Jt(p.element, "." + ja).each((h) => {
          Xt(h, ja);
        });
      })),
      xs(c((p, h, f, y) => {
        U(p, Kn, {
          name: t.name,
          value: y
        });
      }))
    ], d = (p, h) => B(eo(p.element, ".tox-collection__item"), h), m = wt.parts.field({
      dom: {
        tag: "div",
        classes: ["tox-collection"].concat(t.columns !== 1 ? ["tox-collection--grid"] : ["tox-collection--list"])
      },
      components: [],
      factory: { sketch: Tt },
      behaviours: D([
        q.config({
          disabled: e.isDisabled,
          onDisabled: (p) => {
            d(p, (h) => {
              ee(h, "tox-collection__item--state-disabled"), st(h, "aria-disabled", !0);
            });
          },
          onEnabled: (p) => {
            d(p, (h) => {
              Xt(h, "tox-collection__item--state-disabled"), Qt(h, "aria-disabled");
            });
          }
        }),
        re(),
        et.config({}),
        I.config({
          store: {
            mode: "memory",
            initialValue: o.getOr([])
          },
          onSetValue: (p, h) => {
            a(p, h), t.columns === "auto" && Wg(p, 5, "tox-collection__item").each(({ numRows: f, numColumns: y }) => {
              z.setGridSize(p, f, y);
            }), xt(p, mT);
          }
        }),
        zt.config({}),
        z.config(wV(t.columns, "normal")),
        nt("collection-events", l)
      ]),
      eventOrder: {
        [Ao()]: [
          "disabling",
          "alloy.base.behaviour",
          "collection-events"
        ]
      }
    });
    return si(n, m, ["tox-form__group--collection"], []);
  }, HH = [
    "input",
    "textarea"
  ], gT = (t) => {
    const e = us(t);
    return ie(HH, e);
  }, pT = (t, e) => {
    const o = e.getRoot(t).getOr(t.element);
    Xt(o, e.invalidClass), e.notify.each((n) => {
      gT(t.element) && st(t.element, "aria-invalid", !1), n.getContainer(t).each((s) => {
        vc(s, n.validHtml);
      }), n.onValid(t);
    });
  }, hT = (t, e, o, n) => {
    const s = e.getRoot(t).getOr(t.element);
    ee(s, e.invalidClass), e.notify.each((r) => {
      gT(t.element) && st(t.element, "aria-invalid", !0), r.getContainer(t).each((c) => {
        vc(c, n);
      }), r.onInvalid(t, n);
    });
  }, fT = (t, e, o) => e.validator.fold(() => $e.pure(ut.value(!0)), (n) => n.validate(t)), pp = (t, e, o) => (e.notify.each((n) => {
    n.onValidate(t);
  }), fT(t, e).map((n) => t.getSystem().isConnected() ? n.fold((s) => (hT(t, e, o, s), ut.error(s)), (s) => (pT(t, e), ut.value(s))) : ut.error("No longer in system")));
  var NH = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    markValid: pT,
    markInvalid: hT,
    query: fT,
    run: pp,
    isInvalid: (t, e) => {
      const o = e.getRoot(t).getOr(t.element);
      return ao(o, e.invalidClass);
    }
  }), zH = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    events: (t, e) => t.validator.map((o) => It([O(o.onEvent, (n) => {
      pp(n, t, e).get(Tt);
    })].concat(o.validateOnLoad ? [Vt((n) => {
      pp(n, t, e).get(R);
    })] : []))).getOr({})
  }), UH = [
    k("invalidClass"),
    S("getRoot", u.none),
    Eo("notify", [
      S("aria", "alert"),
      S("getContainer", u.none),
      S("validHtml", ""),
      pt("onValid"),
      pt("onInvalid"),
      pt("onValidate")
    ]),
    Eo("validator", [
      k("validate"),
      S("onEvent", "input"),
      S("validateOnLoad", !0)
    ])
  ];
  const qn = ye({
    fields: UH,
    name: "invalidating",
    active: zH,
    apis: NH,
    extra: {
      validation: (t) => (e) => {
        const o = I.getValue(e);
        return $e.pure(t(o));
      }
    }
  });
  var WH = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    events: () => It([Ab(ZD(), Te)]),
    exhibit: () => on({
      styles: {
        "-webkit-user-select": "none",
        "user-select": "none",
        "-ms-user-select": "none",
        "-moz-user-select": "-moz-none"
      },
      attributes: { unselectable: "on" }
    })
  });
  const ai = ye({
    fields: [],
    name: "unselecting",
    active: WH
  }), GH = (t, e) => jo.sketch({
    dom: t.dom,
    components: t.components,
    toggleClass: "mce-active",
    dropdownBehaviours: D([
      mn.button(e.providers.isDisabled),
      re(),
      ai.config({}),
      zt.config({})
    ]),
    layouts: t.layouts,
    sandboxClasses: ["tox-dialog__popups"],
    lazySink: e.getSink,
    fetch: (o) => $e.nu((n) => t.fetch(n)).map((n) => u.from(up(jt(rp(P("menu-value"), n, (s) => {
      t.onItemAction(o, s);
    }, t.columns, t.presets, Fn.CLOSE_ON_EXECUTE, Lt, e.providers), { movement: tu(t.columns, t.presets) })))),
    parts: { menu: Nl(!1, 1, t.presets) }
  }), bT = P("color-input-change"), vT = P("color-swatch-change"), yT = P("color-picker-cancel"), jH = (t, e, o, n) => {
    const s = wt.parts.field({
      factory: Hr,
      inputClasses: ["tox-textfield"],
      data: n,
      onSetValue: (l) => qn.run(l).get(R),
      inputBehaviours: D([
        q.config({ disabled: e.providers.isDisabled }),
        re(),
        zt.config({}),
        qn.config({
          invalidClass: "tox-textbox-field-invalid",
          getRoot: (l) => ds(l.element),
          notify: {
            onValid: (l) => {
              const d = I.getValue(l);
              U(l, bT, { color: d });
            }
          },
          validator: {
            validateOnLoad: !1,
            validate: (l) => {
              const d = I.getValue(l);
              if (d.length === 0)
                return $e.pure(ut.value(!0));
              {
                const m = F.fromTag("span");
                rt(m, "background-color", d);
                const g = Ce(m, "background-color").fold(() => ut.error("blah"), (p) => ut.value(d));
                return $e.pure(g);
              }
            }
          }
        })
      ]),
      selectOnFocus: !1
    }), r = t.label.map((l) => er(l, e.providers)), c = (l, d) => {
      U(l, vT, { value: d });
    }, a = (l, d) => {
      i.getOpt(l).each((m) => {
        d === "custom" ? o.colorPicker((g) => {
          g.fold(() => xt(m, yT), (p) => {
            c(m, p), Dw(t.storageKey, p);
          });
        }, "#ffffff") : d === "remove" ? c(m, "") : c(m, d);
      });
    }, i = St(GH({
      dom: {
        tag: "span",
        attributes: { "aria-label": e.providers.translate("Color swatch") }
      },
      layouts: {
        onRtl: () => [
          Me,
          De,
          fe
        ],
        onLtr: () => [
          De,
          Me,
          fe
        ]
      },
      components: [],
      fetch: Pw(o.getColors(t.storageKey), t.storageKey, o.hasCustomColors()),
      columns: o.getColorCols(t.storageKey),
      presets: "color",
      onItemAction: a
    }, e));
    return wt.sketch({
      dom: {
        tag: "div",
        classes: ["tox-form__group"]
      },
      components: r.toArray().concat([{
        dom: {
          tag: "div",
          classes: ["tox-color-input"]
        },
        components: [
          s,
          i.asSpec()
        ]
      }]),
      fieldBehaviours: D([nt("form-field-events", [
        O(bT, (l, d) => {
          i.getOpt(l).each((m) => {
            rt(m.element, "background-color", d.event.color);
          }), U(l, yo, { name: t.name });
        }),
        O(vT, (l, d) => {
          wt.getField(l).each((m) => {
            I.setValue(m, d.event.value), mt.getCurrent(l).each(Z.focus);
          });
        }),
        O(yT, (l, d) => {
          wt.getField(l).each((m) => {
            mt.getCurrent(l).each(Z.focus);
          });
        })
      ])])
    });
  }, YH = zo({
    schema: [k("dom")],
    name: "label"
  }), nr = (t) => zo({
    name: "" + t + "-edge",
    overrides: (e) => e.model.manager.edgeActions[t].fold(() => ({}), (n) => ({
      events: It([
        Gd(bs(), (s, r, c) => n(s, c), [e]),
        Gd(Ho(), (s, r, c) => n(s, c), [e]),
        Gd(Wi(), (s, r, c) => {
          c.mouseIsDown.get() && n(s, c);
        }, [e])
      ])
    }))
  }), XH = nr("top-left"), KH = nr("top"), qH = nr("top-right"), JH = nr("right"), ZH = nr("bottom-right"), QH = nr("bottom"), tN = nr("bottom-left"), eN = nr("left"), oN = Pe({
    name: "thumb",
    defaults: w({ dom: { styles: { position: "absolute" } } }),
    overrides: (t) => ({
      events: It([
        fc(bs(), t, "spectrum"),
        fc(Sa(), t, "spectrum"),
        fc(xr(), t, "spectrum"),
        fc(Ho(), t, "spectrum"),
        fc(Wi(), t, "spectrum"),
        fc(Id(), t, "spectrum")
      ])
    })
  }), nu = (t) => Br(t.event), nN = Pe({
    schema: [Qe("mouseIsDown", () => j(!1))],
    name: "spectrum",
    overrides: (t) => {
      const o = t.model.manager, n = (s, r) => o.getValueFromEvent(r).map((c) => o.setValueFrom(s, t, c));
      return {
        behaviours: D([
          z.config({
            mode: "special",
            onLeft: (s, r) => o.onLeft(s, t, nu(r)),
            onRight: (s, r) => o.onRight(s, t, nu(r)),
            onUp: (s, r) => o.onUp(s, t, nu(r)),
            onDown: (s, r) => o.onDown(s, t, nu(r))
          }),
          zt.config({}),
          Z.config({})
        ]),
        events: It([
          O(bs(), n),
          O(Sa(), n),
          O(Ho(), n),
          O(Wi(), (s, r) => {
            t.mouseIsDown.get() && n(s, r);
          })
        ])
      };
    }
  });
  var sN = [
    YH,
    eN,
    JH,
    KH,
    QH,
    XH,
    qH,
    tN,
    ZH,
    oN,
    nN
  ];
  const ii = w("slider.change.value"), rN = (t) => t.type.indexOf("touch") !== -1, hp = (t) => {
    const e = t.event.raw;
    if (rN(e)) {
      const o = e;
      return o.touches !== void 0 && o.touches.length === 1 ? u.some(o.touches[0]).map((n) => Ut(n.clientX, n.clientY)) : u.none();
    } else {
      const o = e;
      return o.clientX !== void 0 ? u.some(o).map((n) => Ut(n.clientX, n.clientY)) : u.none();
    }
  }, cN = "top", aN = "right", iN = "bottom", lN = "left", jr = (t) => t.model.minX, Yr = (t) => t.model.minY, su = (t) => t.model.minX - 1, ru = (t) => t.model.minY - 1, Xr = (t) => t.model.maxX, Kr = (t) => t.model.maxY, cu = (t) => t.model.maxX + 1, au = (t) => t.model.maxY + 1, xT = (t, e, o) => e(t) - o(t), fp = (t) => xT(t, Xr, jr), bp = (t) => xT(t, Kr, Yr), ST = (t) => fp(t) / 2, wT = (t) => bp(t) / 2, Nc = (t, e) => e ? t.stepSize * t.speedMultiplier : t.stepSize, TT = (t) => t.snapToGrid, _T = (t) => t.snapStart, CT = (t) => t.rounded, iu = (t, e) => t[e + "-edge"] !== void 0, OT = (t) => iu(t, lN), kT = (t) => iu(t, aN), ET = (t) => iu(t, cN), AT = (t) => iu(t, iN), As = (t) => t.model.value.get(), sr = (t, e) => ({
    x: t,
    y: e
  }), gn = (t, e) => {
    U(t, ii(), { value: e });
  }, uN = (t, e) => {
    gn(t, sr(su(e), ru(e)));
  }, dN = (t, e) => {
    gn(t, ru(e));
  }, mN = (t, e) => {
    gn(t, sr(ST(e), ru(e)));
  }, gN = (t, e) => {
    gn(t, sr(cu(e), ru(e)));
  }, pN = (t, e) => {
    gn(t, cu(e));
  }, hN = (t, e) => {
    gn(t, sr(cu(e), wT(e)));
  }, fN = (t, e) => {
    gn(t, sr(cu(e), au(e)));
  }, bN = (t, e) => {
    gn(t, au(e));
  }, vN = (t, e) => {
    gn(t, sr(ST(e), au(e)));
  }, yN = (t, e) => {
    gn(t, sr(su(e), au(e)));
  }, xN = (t, e) => {
    gn(t, su(e));
  }, SN = (t, e) => {
    gn(t, sr(su(e), wT(e)));
  }, vp = (t, e, o, n) => t < e ? t : t > o ? o : t === e ? e - 1 : Math.max(e, t - n), yp = (t, e, o, n) => t > o ? t : t < e ? e : t === o ? o + 1 : Math.min(o, t + n), DT = (t, e, o) => Math.max(e, Math.min(o, t)), wN = (t, e, o, n, s) => s.fold(() => {
    const r = t - e, c = Math.round(r / n) * n;
    return DT(e + c, e - 1, o + 1);
  }, (r) => {
    const c = (t - r) % n, a = Math.round(c / n), i = Math.floor((t - r) / n), l = Math.floor((o - r) / n), d = Math.min(l, i + a), m = r + d * n;
    return Math.max(r, m);
  }), TN = (t, e, o) => Math.min(o, Math.max(t, e)) - e, MT = (t) => {
    const { min: e, max: o, range: n, value: s, step: r, snap: c, snapStart: a, rounded: i, hasMinEdge: l, hasMaxEdge: d, minBound: m, maxBound: g, screenRange: p } = t, h = l ? e - 1 : e, f = d ? o + 1 : o;
    if (s < m)
      return h;
    if (s > g)
      return f;
    {
      const y = TN(s, m, g), v = DT(y / p * n + e, h, f);
      return c && v >= e && v <= o ? wN(v, e, o, r, a) : i ? Math.round(v) : v;
    }
  }, $T = (t) => {
    const { min: e, max: o, range: n, value: s, hasMinEdge: r, hasMaxEdge: c, maxBound: a, maxOffset: i, centerMinEdge: l, centerMaxEdge: d } = t;
    return s < e ? r ? 0 : l : s > o ? c ? a : d : (s - e) / n * i;
  }, xp = "top", FT = "right", BT = "bottom", Sp = "left", _N = "width", CN = "height", Jn = (t) => t.element.dom.getBoundingClientRect(), pn = (t, e) => t[e], lu = (t) => {
    const e = Jn(t);
    return pn(e, Sp);
  }, IT = (t) => {
    const e = Jn(t);
    return pn(e, FT);
  }, uu = (t) => {
    const e = Jn(t);
    return pn(e, xp);
  }, RT = (t) => {
    const e = Jn(t);
    return pn(e, BT);
  }, PT = (t) => {
    const e = Jn(t);
    return pn(e, _N);
  }, LT = (t) => {
    const e = Jn(t);
    return pn(e, CN);
  }, VT = (t, e, o) => (t + e) / 2 - o, HT = (t, e) => {
    const o = Jn(t), n = Jn(e), s = pn(o, Sp), r = pn(o, FT), c = pn(n, Sp);
    return VT(s, r, c);
  }, NT = (t, e) => {
    const o = Jn(t), n = Jn(e), s = pn(o, xp), r = pn(o, BT), c = pn(n, xp);
    return VT(s, r, c);
  }, du = (t, e) => {
    U(t, ii(), { value: e });
  }, wp = (t, e, o) => {
    const n = {
      min: jr(e),
      max: Xr(e),
      range: fp(e),
      value: o,
      step: Nc(e),
      snap: TT(e),
      snapStart: _T(e),
      rounded: CT(e),
      hasMinEdge: OT(e),
      hasMaxEdge: kT(e),
      minBound: lu(t),
      maxBound: IT(t),
      screenRange: PT(t)
    };
    return MT(n);
  }, ON = (t, e, o) => {
    const n = wp(t, e, o);
    return du(t, n), n;
  }, kN = (t, e) => {
    const o = jr(e);
    du(t, o);
  }, EN = (t, e) => {
    const o = Xr(e);
    du(t, o);
  }, AN = (t, e, o, n) => {
    const r = (t > 0 ? yp : vp)(As(o), jr(o), Xr(o), Nc(o, n));
    return du(e, r), u.some(r);
  }, zT = (t) => (e, o, n) => AN(t, e, o, n).map(Te), DN = (t) => hp(t).map((o) => o.left), MN = (t, e, o, n, s) => {
    const c = PT(t), a = n.bind((d) => u.some(HT(d, t))).getOr(0), i = s.bind((d) => u.some(HT(d, t))).getOr(c), l = {
      min: jr(e),
      max: Xr(e),
      range: fp(e),
      value: o,
      hasMinEdge: OT(e),
      hasMaxEdge: kT(e),
      minBound: lu(t),
      maxBound: IT(t),
      maxOffset: c,
      centerMinEdge: a,
      centerMaxEdge: i
    };
    return $T(l);
  }, Tp = (t, e, o, n, s, r) => {
    const c = MN(e, r, o, n, s);
    return lu(e) - lu(t) + c;
  }, $N = (t, e, o, n) => {
    const s = As(o), r = Tp(t, n.getSpectrum(t), s, n.getLeftEdge(t), n.getRightEdge(t), o), c = ro(e.element) / 2;
    rt(e.element, "left", r - c + "px");
  }, FN = zT(-1), BN = zT(1), IN = u.none, RN = u.none, PN = {
    "top-left": u.none(),
    top: u.none(),
    "top-right": u.none(),
    right: u.some(pN),
    "bottom-right": u.none(),
    bottom: u.none(),
    "bottom-left": u.none(),
    left: u.some(xN)
  };
  var LN = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    setValueFrom: ON,
    setToMin: kN,
    setToMax: EN,
    findValueOfOffset: wp,
    getValueFromEvent: DN,
    findPositionOfValue: Tp,
    setPositionFromValue: $N,
    onLeft: FN,
    onRight: BN,
    onUp: IN,
    onDown: RN,
    edgeActions: PN
  });
  const mu = (t, e) => {
    U(t, ii(), { value: e });
  }, _p = (t, e, o) => {
    const n = {
      min: Yr(e),
      max: Kr(e),
      range: bp(e),
      value: o,
      step: Nc(e),
      snap: TT(e),
      snapStart: _T(e),
      rounded: CT(e),
      hasMinEdge: ET(e),
      hasMaxEdge: AT(e),
      minBound: uu(t),
      maxBound: RT(t),
      screenRange: LT(t)
    };
    return MT(n);
  }, VN = (t, e, o) => {
    const n = _p(t, e, o);
    return mu(t, n), n;
  }, HN = (t, e) => {
    const o = Yr(e);
    mu(t, o);
  }, NN = (t, e) => {
    const o = Kr(e);
    mu(t, o);
  }, zN = (t, e, o, n) => {
    const r = (t > 0 ? yp : vp)(As(o), Yr(o), Kr(o), Nc(o, n));
    return mu(e, r), u.some(r);
  }, UT = (t) => (e, o, n) => zN(t, e, o, n).map(Te), UN = (t) => hp(t).map((o) => o.top), WN = (t, e, o, n, s) => {
    const c = LT(t), a = n.bind((d) => u.some(NT(d, t))).getOr(0), i = s.bind((d) => u.some(NT(d, t))).getOr(c), l = {
      min: Yr(e),
      max: Kr(e),
      range: bp(e),
      value: o,
      hasMinEdge: ET(e),
      hasMaxEdge: AT(e),
      minBound: uu(t),
      maxBound: RT(t),
      maxOffset: c,
      centerMinEdge: a,
      centerMaxEdge: i
    };
    return $T(l);
  }, Cp = (t, e, o, n, s, r) => {
    const c = WN(e, r, o, n, s);
    return uu(e) - uu(t) + c;
  }, GN = (t, e, o, n) => {
    const s = As(o), r = Cp(t, n.getSpectrum(t), s, n.getTopEdge(t), n.getBottomEdge(t), o), c = ge(e.element) / 2;
    rt(e.element, "top", r - c + "px");
  }, jN = u.none, YN = u.none, XN = UT(-1), KN = UT(1), qN = {
    "top-left": u.none(),
    top: u.some(dN),
    "top-right": u.none(),
    right: u.none(),
    "bottom-right": u.none(),
    bottom: u.some(bN),
    "bottom-left": u.none(),
    left: u.none()
  };
  var JN = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    setValueFrom: VN,
    setToMin: HN,
    setToMax: NN,
    findValueOfOffset: _p,
    getValueFromEvent: UN,
    findPositionOfValue: Cp,
    setPositionFromValue: GN,
    onLeft: jN,
    onRight: YN,
    onUp: XN,
    onDown: KN,
    edgeActions: qN
  });
  const gu = (t, e) => {
    U(t, ii(), { value: e });
  }, pu = (t, e) => ({
    x: t,
    y: e
  }), ZN = (t, e, o) => {
    const n = wp(t, e, o.left), s = _p(t, e, o.top), r = pu(n, s);
    return gu(t, r), r;
  }, QN = (t, e, o, n, s) => {
    const r = t > 0 ? yp : vp, c = e ? As(n).x : r(As(n).x, jr(n), Xr(n), Nc(n, s)), a = e ? r(As(n).y, Yr(n), Kr(n), Nc(n, s)) : As(n).y;
    return gu(o, pu(c, a)), u.some(c);
  }, hu = (t, e) => (o, n, s) => QN(t, e, o, n, s).map(Te), tz = (t, e) => {
    const o = jr(e), n = Yr(e);
    gu(t, pu(o, n));
  }, ez = (t, e) => {
    const o = Xr(e), n = Kr(e);
    gu(t, pu(o, n));
  }, oz = (t) => hp(t), nz = (t, e, o, n) => {
    const s = As(o), r = Tp(t, n.getSpectrum(t), s.x, n.getLeftEdge(t), n.getRightEdge(t), o), c = Cp(t, n.getSpectrum(t), s.y, n.getTopEdge(t), n.getBottomEdge(t), o), a = ro(e.element) / 2, i = ge(e.element) / 2;
    rt(e.element, "left", r - a + "px"), rt(e.element, "top", c - i + "px");
  }, sz = hu(-1, !1), rz = hu(1, !1), cz = hu(-1, !0), az = hu(1, !0), iz = {
    "top-left": u.some(uN),
    top: u.some(mN),
    "top-right": u.some(gN),
    right: u.some(hN),
    "bottom-right": u.some(fN),
    bottom: u.some(vN),
    "bottom-left": u.some(yN),
    left: u.some(SN)
  };
  var lz = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    setValueFrom: ZN,
    setToMin: tz,
    setToMax: ez,
    getValueFromEvent: oz,
    setPositionFromValue: nz,
    onLeft: sz,
    onRight: rz,
    onUp: cz,
    onDown: az,
    edgeActions: iz
  });
  const uz = [
    S("stepSize", 1),
    S("speedMultiplier", 10),
    S("onChange", R),
    S("onChoose", R),
    S("onInit", R),
    S("onDragStart", R),
    S("onDragEnd", R),
    S("snapToGrid", !1),
    S("rounded", !0),
    _t("snapStart"),
    Oo("model", mo("mode", {
      x: [
        S("minX", 0),
        S("maxX", 100),
        Qe("value", (t) => j(t.mode.minX)),
        k("getInitialValue"),
        Rt("manager", LN)
      ],
      y: [
        S("minY", 0),
        S("maxY", 100),
        Qe("value", (t) => j(t.mode.minY)),
        k("getInitialValue"),
        Rt("manager", JN)
      ],
      xy: [
        S("minX", 0),
        S("maxX", 100),
        S("minY", 0),
        S("maxY", 100),
        Qe("value", (t) => j({
          x: t.mode.minX,
          y: t.mode.minY
        })),
        k("getInitialValue"),
        Rt("manager", lz)
      ]
    })),
    be("sliderBehaviours", [
      z,
      I
    ]),
    Qe("mouseIsDown", () => j(!1))
  ], hn = Ge({
    name: "Slider",
    configFields: uz,
    partFields: sN,
    factory: (t, e, o, n) => {
      const s = (C) => Ks(C, t, "thumb"), r = (C) => Ks(C, t, "spectrum"), c = (C) => Dt(C, t, "left-edge"), a = (C) => Dt(C, t, "right-edge"), i = (C) => Dt(C, t, "top-edge"), l = (C) => Dt(C, t, "bottom-edge"), d = t.model, m = d.manager, g = (C, _) => {
        m.setPositionFromValue(C, _, t, {
          getLeftEdge: c,
          getRightEdge: a,
          getTopEdge: i,
          getBottomEdge: l,
          getSpectrum: r
        });
      }, p = (C, _) => {
        d.value.set(_);
        const A = s(C);
        g(C, A);
      }, h = (C, _) => {
        p(C, _);
        const A = s(C);
        return t.onChange(C, A, _), u.some(!0);
      }, f = (C) => {
        m.setToMin(C, t);
      }, y = (C) => {
        m.setToMax(C, t);
      }, v = (C) => {
        const _ = () => {
          Dt(C, t, "thumb").each((M) => {
            const ot = d.value.get();
            t.onChoose(C, M, ot);
          });
        }, A = t.mouseIsDown.get();
        t.mouseIsDown.set(!1), A && _();
      }, b = (C, _) => {
        _.stop(), t.mouseIsDown.set(!0), t.onDragStart(C, s(C));
      }, x = (C, _) => {
        _.stop(), t.onDragEnd(C, s(C)), v(C);
      }, E = (C) => {
        Dt(C, t, "spectrum").map(z.focusIn);
      };
      return {
        uid: t.uid,
        dom: t.dom,
        components: e,
        behaviours: xe(t.sliderBehaviours, [
          z.config({
            mode: "special",
            focusIn: E
          }),
          I.config({
            store: {
              mode: "manual",
              getValue: (C) => d.value.get(),
              setValue: p
            }
          }),
          po.config({ channels: { [$m()]: { onReceive: v } } })
        ]),
        events: It([
          O(ii(), (C, _) => {
            h(C, _.event.value);
          }),
          Vt((C, _) => {
            const A = d.getInitialValue();
            d.value.set(A);
            const M = s(C);
            g(C, M);
            const ot = r(C);
            t.onInit(C, M, ot, d.value.get());
          }),
          O(bs(), b),
          O(xr(), x),
          O(Ho(), (C, _) => {
            E(C), b(C, _);
          }),
          O(Id(), x)
        ]),
        apis: {
          resetToMin: f,
          resetToMax: y,
          setValue: p,
          refresh: g
        },
        domModification: { styles: { position: "relative" } }
      };
    },
    apis: {
      setValue: (t, e, o) => {
        t.setValue(e, o);
      },
      resetToMin: (t, e) => {
        t.resetToMin(e);
      },
      resetToMax: (t, e) => {
        t.resetToMax(e);
      },
      refresh: (t, e) => {
        t.refresh(e);
      }
    }
  }), Op = P("rgb-hex-update"), WT = P("slider-update"), GT = P("palette-update"), dz = (t, e) => {
    const o = hn.parts.spectrum({
      dom: {
        tag: "div",
        classes: [e("hue-slider-spectrum")],
        attributes: { role: "presentation" }
      }
    }), n = hn.parts.thumb({
      dom: {
        tag: "div",
        classes: [e("hue-slider-thumb")],
        attributes: { role: "presentation" }
      }
    });
    return hn.sketch({
      dom: {
        tag: "div",
        classes: [e("hue-slider")],
        attributes: {
          role: "slider",
          "aria-valuemin": 0,
          "aria-valuemax": 360,
          "aria-valuenow": 120
        }
      },
      rounded: !1,
      model: {
        mode: "y",
        getInitialValue: w(0)
      },
      components: [
        o,
        n
      ],
      sliderBehaviours: D([Z.config({})]),
      onChange: (s, r, c) => {
        st(s.element, "aria-valuenow", Math.floor(360 - c * 3.6)), U(s, WT, { value: c });
      }
    });
  }, jT = "form", mz = [be("formBehaviours", [I])], YT = (t) => "<alloy.field." + t + ">", gz = (t) => {
    const e = (() => {
      const r = [];
      return {
        field: (a, i) => (r.push(a), zm(jT, YT(a), i)),
        record: w(r)
      };
    })(), o = t(e), n = e.record(), s = B(n, (r) => Pe({
      name: r,
      pname: YT(r)
    }));
    return Ym(jT, mz, s, hz, o);
  }, pz = (t, e) => t.fold(() => ut.error(e), ut.value), hz = (t, e) => ({
    uid: t.uid,
    dom: t.dom,
    components: e,
    behaviours: xe(t.formBehaviours, [I.config({
      store: {
        mode: "manual",
        getValue: (o) => {
          const n = Ty(o, t);
          return me(n, (s, r) => s().bind((c) => {
            const a = mt.getCurrent(c);
            return pz(a, new Error(`Cannot find a current component to extract the value from for form part '${r}': ` + Us(c.element)));
          }).map(I.getValue));
        },
        setValue: (o, n) => {
          Ve(n, (s, r) => {
            Dt(o, t, r).each((c) => {
              mt.getCurrent(c).each((a) => {
                I.setValue(a, s);
              });
            });
          });
        }
      }
    })]),
    apis: {
      getField: (o, n) => Dt(o, t, n).bind(mt.getCurrent)
    }
  }), zc = {
    getField: Zi((t, e, o) => t.getField(e, o)),
    sketch: gz
  }, XT = P("valid-input"), KT = P("invalid-input"), qT = P("validating-input"), kp = "colorcustom.rgb.", fz = (t, e, o, n) => {
    const s = (g, p) => qn.config({
      invalidClass: e("invalid"),
      notify: {
        onValidate: (h) => {
          U(h, qT, { type: g });
        },
        onValid: (h) => {
          U(h, XT, {
            type: g,
            value: I.getValue(h)
          });
        },
        onInvalid: (h) => {
          U(h, KT, {
            type: g,
            value: I.getValue(h)
          });
        }
      },
      validator: {
        validate: (h) => {
          const f = I.getValue(h), y = p(f) ? ut.value(!0) : ut.error(t("aria.input.invalid"));
          return $e.pure(y);
        },
        validateOnLoad: !1
      }
    }), r = (g, p, h, f, y) => {
      const v = t(kp + "range"), b = wt.parts.label({
        dom: {
          tag: "label",
          attributes: { "aria-label": f }
        },
        components: [qt(h)]
      }), x = wt.parts.field({
        data: y,
        factory: Hr,
        inputAttributes: {
          type: "text",
          ...p === "hex" ? { "aria-live": "polite" } : {}
        },
        inputClasses: [e("textfield")],
        inputBehaviours: D([
          s(p, g),
          zt.config({})
        ]),
        onSetValue: (A) => {
          qn.isInvalid(A) && qn.run(A).get(R);
        }
      }), E = [
        b,
        x
      ], C = p !== "hex" ? [wt.parts["aria-descriptor"]({ text: v })] : [], _ = E.concat(C);
      return {
        dom: {
          tag: "div",
          attributes: { role: "presentation" }
        },
        components: _
      };
    }, c = (g, p) => {
      const h = Qa(p);
      return zc.getField(g, "hex").each((f) => {
        Z.isFocused(f) || I.setValue(g, { hex: h.value });
      }), h;
    }, a = (g, p) => {
      const h = p.red, f = p.green, y = p.blue;
      I.setValue(g, {
        red: h,
        green: f,
        blue: y
      });
    }, i = St({
      dom: {
        tag: "div",
        classes: [e("rgba-preview")],
        styles: { "background-color": "white" },
        attributes: { role: "presentation" }
      }
    }), l = (g, p) => {
      i.getOpt(g).each((h) => {
        rt(h.element, "background-color", "#" + p.value);
      });
    };
    return $o({
      factory: () => {
        const g = {
          red: j(u.some(255)),
          green: j(u.some(255)),
          blue: j(u.some(255)),
          hex: j(u.some("ffffff"))
        }, p = (K, vt) => {
          const N = ti(vt);
          a(K, N), v(N);
        }, h = (K) => g[K].get(), f = (K, vt) => {
          g[K].set(vt);
        }, y = () => h("red").bind((K) => h("green").bind((vt) => h("blue").map((N) => tr(K, vt, N, 1)))), v = (K) => {
          const vt = K.red, N = K.green, dt = K.blue;
          f("red", u.some(vt)), f("green", u.some(N)), f("blue", u.some(dt));
        }, b = (K, vt) => {
          const N = vt.event;
          N.type !== "hex" ? f(N.type, u.none()) : n(K);
        }, x = (K, vt) => {
          o(K);
          const N = hw(vt);
          f("hex", u.some(N.value));
          const dt = ti(N);
          a(K, dt), v(dt), U(K, Op, { hex: N }), l(K, N);
        }, E = (K, vt, N) => {
          const dt = parseInt(N, 10);
          f(vt, u.some(dt)), y().each(($) => {
            const L = c(K, $);
            U(K, Op, { hex: L }), l(K, L);
          });
        }, C = (K) => K.type === "hex", _ = (K, vt) => {
          const N = vt.event;
          C(N) ? x(K, N.value) : E(K, N.type, N.value);
        }, A = (K) => ({
          label: t(kp + K + ".label"),
          description: t(kp + K + ".description")
        }), M = A("red"), ot = A("green"), V = A("blue"), W = A("hex");
        return jt(zc.sketch((K) => ({
          dom: {
            tag: "form",
            classes: [e("rgb-form")],
            attributes: { "aria-label": t("aria.color.picker") }
          },
          components: [
            K.field("red", wt.sketch(r(Yg, "red", M.label, M.description, 255))),
            K.field("green", wt.sketch(r(Yg, "green", ot.label, ot.description, 255))),
            K.field("blue", wt.sketch(r(Yg, "blue", V.label, V.description, 255))),
            K.field("hex", wt.sketch(r(vw, "hex", W.label, W.description, "ffffff"))),
            i.asSpec()
          ],
          formBehaviours: D([
            qn.config({ invalidClass: e("form-invalid") }),
            nt("rgb-form-events", [
              O(XT, _),
              O(KT, b),
              O(qT, b)
            ])
          ])
        })), {
          apis: {
            updateHex: (K, vt) => {
              I.setValue(K, { hex: vt.value }), p(K, vt), l(K, vt);
            }
          }
        });
      },
      name: "RgbForm",
      configFields: [],
      apis: {
        updateHex: (g, p, h) => {
          g.updateHex(p, h);
        }
      },
      extraApis: {}
    });
  }, bz = (t, e) => {
    const o = hn.parts.spectrum({
      dom: {
        tag: "canvas",
        attributes: { role: "presentation" },
        classes: [e("sv-palette-spectrum")]
      }
    }), n = hn.parts.thumb({
      dom: {
        tag: "div",
        attributes: { role: "presentation" },
        classes: [e("sv-palette-thumb")],
        innerHtml: `<div class=${e("sv-palette-inner-thumb")} role="presentation"></div>`
      }
    }), s = (l, d) => {
      const { width: m, height: g } = l, p = l.getContext("2d");
      if (p === null)
        return;
      p.fillStyle = d, p.fillRect(0, 0, m, g);
      const h = p.createLinearGradient(0, 0, m, 0);
      h.addColorStop(0, "rgba(255,255,255,1)"), h.addColorStop(1, "rgba(255,255,255,0)"), p.fillStyle = h, p.fillRect(0, 0, m, g);
      const f = p.createLinearGradient(0, 0, 0, g);
      f.addColorStop(0, "rgba(0,0,0,0)"), f.addColorStop(1, "rgba(0,0,0,1)"), p.fillStyle = f, p.fillRect(0, 0, m, g);
    }, r = (l, d) => {
      const m = l.components()[0].element.dom, g = ei(d, 100, 100), p = ww(g);
      s(m, _w(p));
    }, c = (l, d) => {
      const m = qg(ti(d));
      hn.setValue(l, {
        x: m.saturation,
        y: 100 - m.value
      }), st(l.element, "aria-valuetext", t([
        "Saturation {0}%, Brightness {1}%",
        m.saturation,
        m.value
      ]));
    };
    return $o({
      factory: (l) => {
        const d = w({
          x: 0,
          y: 0
        }), m = (h, f, y) => {
          Vn(y) || st(h.element, "aria-valuetext", t([
            "Saturation {0}%, Brightness {1}%",
            Math.floor(y.x),
            Math.floor(100 - y.y)
          ])), U(h, GT, { value: y });
        }, g = (h, f, y, v) => {
          s(y.element.dom, _w(Cw));
        }, p = D([
          mt.config({ find: u.some }),
          Z.config({})
        ]);
        return hn.sketch({
          dom: {
            tag: "div",
            attributes: {
              role: "slider",
              "aria-valuetext": t([
                "Saturation {0}%, Brightness {1}%",
                0,
                0
              ])
            },
            classes: [e("sv-palette")]
          },
          model: {
            mode: "xy",
            getInitialValue: d
          },
          rounded: !1,
          components: [
            o,
            n
          ],
          onChange: m,
          onInit: g,
          sliderBehaviours: p
        });
      },
      name: "SaturationBrightnessPalette",
      configFields: [],
      apis: {
        setHue: (l, d, m) => {
          r(d, m);
        },
        setThumb: (l, d, m) => {
          c(d, m);
        }
      },
      extraApis: {}
    });
  }, vz = (t, e) => {
    const o = (s) => {
      const r = fz(t, e, s.onValidHex, s.onInvalidHex), c = bz(t, e), a = (_) => (100 - _) / 100 * 360, i = (_) => 100 - _ / 360 * 100, l = {
        paletteRgba: j(Cw),
        paletteHue: j(0)
      }, d = St(dz(t, e)), m = St(c.sketch({})), g = St(r.sketch({})), p = (_, A, M) => {
        m.getOpt(_).each((ot) => {
          c.setHue(ot, M);
        });
      }, h = (_, A) => {
        g.getOpt(_).each((M) => {
          r.updateHex(M, A);
        });
      }, f = (_, A, M) => {
        d.getOpt(_).each((ot) => {
          hn.setValue(ot, i(M));
        });
      }, y = (_, A) => {
        m.getOpt(_).each((M) => {
          c.setThumb(M, A);
        });
      }, v = (_, A) => {
        const M = ti(_);
        l.paletteRgba.set(M), l.paletteHue.set(A);
      }, b = (_, A, M, ot) => {
        v(A, M), Y(ot, (V) => {
          V(_, A, M);
        });
      }, x = () => {
        const _ = [h];
        return (A, M) => {
          const ot = M.event.value, V = l.paletteHue.get(), W = ei(V, ot.x, 100 - ot.y), K = Mw(W);
          b(A, K, V, _);
        };
      }, E = () => {
        const _ = [
          p,
          h
        ];
        return (A, M) => {
          const ot = a(M.event.value), V = l.paletteRgba.get(), W = qg(V), K = ei(ot, W.saturation, W.value), vt = Mw(K);
          b(A, vt, ot, _);
        };
      }, C = () => {
        const _ = [
          p,
          f,
          y
        ];
        return (A, M) => {
          const ot = M.event.hex, V = aV(ot);
          b(A, ot, V.hue, _);
        };
      };
      return {
        uid: s.uid,
        dom: s.dom,
        components: [
          m.asSpec(),
          d.asSpec(),
          g.asSpec()
        ],
        behaviours: D([
          nt("colour-picker-events", [
            O(Op, C()),
            O(GT, x()),
            O(WT, E())
          ]),
          mt.config({ find: (_) => g.getOpt(_) }),
          z.config({ mode: "acyclic" })
        ])
      };
    };
    return $o({
      name: "ColourPicker",
      configFields: [
        k("dom"),
        S("onValidHex", R),
        S("onInvalidHex", R)
      ],
      factory: o
    });
  }, fn = {
    self: () => mt.config({ find: u.some }),
    memento: (t) => mt.config({ find: t.getOpt }),
    childAt: (t) => mt.config({ find: (e) => gr(e.element, t).bind((o) => e.getSystem().getByDom(o).toOptional()) })
  }, yz = X([
    S("preprocess", Tt),
    S("postprocess", Tt)
  ]), xz = (t, e) => {
    const o = co("RepresentingConfigs.memento processors", yz, e);
    return I.config({
      store: {
        mode: "manual",
        getValue: (n) => {
          const s = t.get(n), r = I.getValue(s);
          return o.postprocess(r);
        },
        setValue: (n, s) => {
          const r = o.preprocess(s), c = t.get(n);
          I.setValue(c, r);
        }
      }
    });
  }, qr = (t, e, o) => I.config({
    store: {
      mode: "manual",
      ...t.map((n) => ({ initialValue: n })).getOr({}),
      getValue: e,
      setValue: o
    }
  }), JT = (t, e, o) => qr(t, (n) => e(n.element), (n, s) => o(n.element, s)), Sz = (t) => JT(t, Yd, vc), fu = (t) => I.config({
    store: {
      mode: "memory",
      initialValue: t
    }
  }), wz = {
    "colorcustom.rgb.red.label": "R",
    "colorcustom.rgb.red.description": "Red component",
    "colorcustom.rgb.green.label": "G",
    "colorcustom.rgb.green.description": "Green component",
    "colorcustom.rgb.blue.label": "B",
    "colorcustom.rgb.blue.description": "Blue component",
    "colorcustom.rgb.hex.label": "#",
    "colorcustom.rgb.hex.description": "Hex color code",
    "colorcustom.rgb.range": "Range 0 to 255",
    "aria.color.picker": "Color Picker",
    "aria.input.invalid": "Invalid input"
  }, Tz = (t) => (e) => Ct(e) ? t.translate(wz[e]) : t.translate(e), _z = (t, e, o) => {
    const n = (i) => "tox-" + i, s = vz(Tz(e), n), r = (i) => {
      U(i, Kn, {
        name: "hex-valid",
        value: !0
      });
    }, c = (i) => {
      U(i, Kn, {
        name: "hex-valid",
        value: !1
      });
    }, a = St(s.sketch({
      dom: {
        tag: "div",
        classes: [n("color-picker-container")],
        attributes: { role: "presentation" }
      },
      onValidHex: r,
      onInvalidHex: c
    }));
    return {
      dom: { tag: "div" },
      components: [a.asSpec()],
      behaviours: D([
        qr(o, (i) => {
          const l = a.get(i);
          return mt.getCurrent(l).bind((g) => I.getValue(g).hex).map((g) => "#" + xf(g, "#")).getOr("");
        }, (i, l) => {
          const d = /^#([a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?)/, m = u.from(d.exec(l)).bind((h) => Ei(h, 1)), g = a.get(i);
          mt.getCurrent(g).fold(() => {
            console.log("Can not find form");
          }, (h) => {
            I.setValue(h, { hex: m.getOr("") }), zc.getField(h, "hex").each((f) => {
              xt(f, Sr());
            });
          });
        }),
        fn.self()
      ])
    };
  };
  var Cz = tinymce.util.Tools.resolve("tinymce.Resource");
  const Oz = (t) => At(t, "init"), kz = (t) => {
    const e = Pt(), o = St({ dom: { tag: t.tag } }), n = Pt();
    return {
      dom: {
        tag: "div",
        classes: ["tox-custom-editor"]
      },
      behaviours: D([
        nt("custom-editor-events", [Vt((s) => {
          o.getOpt(s).each((r) => {
            (Oz(t) ? t.init(r.element.dom) : Cz.load(t.scriptId, t.scriptUrl).then((c) => c(r.element.dom, t.settings))).then((c) => {
              n.on((a) => {
                c.setValue(a);
              }), n.clear(), e.set(c);
            });
          });
        })]),
        qr(u.none(), () => e.get().fold(() => n.get().getOr(""), (s) => s.getValue()), (s, r) => {
          e.get().fold(() => n.set(r), (c) => c.setValue(r));
        }),
        fn.self()
      ]),
      components: [o.asSpec()]
    };
  };
  var Ds = tinymce.util.Tools.resolve("tinymce.util.Tools");
  const Ez = (t, e) => {
    const o = Ds.explode(e.getOption("images_file_types")), n = (s) => Xo(o, (r) => Mi(s.name.toLowerCase(), `.${r.toLowerCase()}`));
    return Ht(AE(t), n);
  }, Az = (t, e, o) => {
    const n = (g, p) => {
      p.stop();
    }, s = (g) => (p, h) => {
      Y(g, (f) => {
        f(p, h);
      });
    }, r = (g, p) => {
      var h;
      if (!q.isDisabled(g)) {
        const f = p.event.raw;
        a(g, (h = f.dataTransfer) === null || h === void 0 ? void 0 : h.files);
      }
    }, c = (g, p) => {
      const h = p.event.raw.target;
      a(g, h.files);
    }, a = (g, p) => {
      p && (I.setValue(g, Ez(p, e)), U(g, yo, { name: t.name }));
    }, i = St({
      dom: {
        tag: "input",
        attributes: {
          type: "file",
          accept: "image/*"
        },
        styles: { display: "none" }
      },
      behaviours: D([nt("input-file-events", [
        Or(wr()),
        Or(_a())
      ])])
    }), l = (g) => ({
      uid: g.uid,
      dom: {
        tag: "div",
        classes: ["tox-dropzone-container"]
      },
      behaviours: D([
        fu(o.getOr([])),
        fn.self(),
        q.config({}),
        ct.config({
          toggleClass: "dragenter",
          toggleOnExecute: !1
        }),
        nt("dropzone-events", [
          O("dragenter", s([
            n,
            ct.toggle
          ])),
          O("dragleave", s([
            n,
            ct.toggle
          ])),
          O("dragover", n),
          O("drop", s([
            n,
            r
          ])),
          O(pc(), c)
        ])
      ]),
      components: [{
        dom: {
          tag: "div",
          classes: ["tox-dropzone"],
          styles: {}
        },
        components: [
          {
            dom: { tag: "p" },
            components: [qt(e.translate("Drop an image here"))]
          },
          Se.sketch({
            dom: {
              tag: "button",
              styles: { position: "relative" },
              classes: [
                "tox-button",
                "tox-button--secondary"
              ]
            },
            components: [
              qt(e.translate("Browse for an image")),
              i.asSpec()
            ],
            action: (p) => {
              i.get(p).element.dom.click();
            },
            buttonBehaviours: D([
              zt.config({}),
              mn.button(e.isDisabled),
              re()
            ])
          })
        ]
      }]
    }), d = t.label.map((g) => er(g, e)), m = wt.parts.field({ factory: { sketch: l } });
    return si(d, m, ["tox-form__group--stretched"], []);
  }, Dz = (t, e) => ({
    dom: {
      tag: "div",
      classes: [
        "tox-form__grid",
        `tox-form__grid--${t.columns}col`
      ]
    },
    components: B(t.items, e.interpreter)
  }), Mz = (t, e) => {
    let o = null, n = null;
    return {
      cancel: () => {
        sc(o) || (clearTimeout(o), o = null, n = null);
      },
      throttle: (...c) => {
        n = c, sc(o) && (o = setTimeout(() => {
          const a = n;
          o = null, n = null, t.apply(null, a);
        }, e));
      }
    };
  }, $z = (t, e) => {
    let o = null;
    return {
      cancel: () => {
        sc(o) || (clearTimeout(o), o = null);
      },
      throttle: (...r) => {
        sc(o) && (o = setTimeout(() => {
          o = null, t.apply(null, r);
        }, e));
      }
    };
  }, Ep = (t, e) => {
    let o = null;
    const n = () => {
      sc(o) || (clearTimeout(o), o = null);
    };
    return {
      cancel: n,
      throttle: (...r) => {
        n(), o = setTimeout(() => {
          o = null, t.apply(null, r);
        }, e);
      }
    };
  }, Ap = P("alloy-fake-before-tabstop"), Dp = P("alloy-fake-after-tabstop"), ZT = (t) => ({
    dom: {
      tag: "div",
      styles: {
        width: "1px",
        height: "1px",
        outline: "none"
      },
      attributes: { tabindex: "0" },
      classes: t
    },
    behaviours: D([
      Z.config({ ignore: !0 }),
      zt.config({})
    ])
  }), QT = (t, e) => ({
    dom: {
      tag: "div",
      classes: [
        "tox-navobj",
        ...t.getOr([])
      ]
    },
    components: [
      ZT([Ap]),
      e,
      ZT([Dp])
    ],
    behaviours: D([fn.childAt(1)])
  }), t_ = (t, e) => {
    U(t, kn(), {
      raw: {
        which: 9,
        shiftKey: e
      }
    });
  }, Fz = (t, e) => {
    const o = e.element;
    ao(o, Ap) ? t_(t, !0) : ao(o, Dp) && t_(t, !1);
  }, li = (t) => oi(t, [
    "." + Ap,
    "." + Dp
  ].join(","), Lt), bu = P("update-dialog"), e_ = P("update-title"), o_ = P("update-body"), n_ = P("update-footer"), s_ = P("body-send-message"), vu = P("dialog-focus-shifted"), Mp = gs().browser, ui = Mp.isSafari(), Bz = Mp.isFirefox(), r_ = ui || Bz, Iz = Mp.isChromium(), Rz = ({ scrollTop: t, scrollHeight: e, clientHeight: o }) => Math.ceil(t) + o >= e, c_ = (t, e) => t.scrollTo(0, e === "bottom" ? 99999999 : e), Pz = (t, e) => {
    const o = t.body;
    return u.from(!/^<!DOCTYPE (html|HTML)/.test(e) && (!Iz && !ui || wo(o) && (o.scrollTop !== 0 || Math.abs(o.scrollHeight - o.clientHeight) > 1)) ? o : t.documentElement);
  }, a_ = (t, e, o) => {
    const n = t.dom;
    u.from(n.contentDocument).fold(o, (s) => {
      let r = 0;
      const c = Pz(s, e).map((i) => (r = i.scrollTop, i)).forall(Rz), a = () => {
        const i = n.contentWindow;
        wo(i) && (c ? c_(i, "bottom") : !c && r_ && r !== 0 && c_(i, r));
      };
      ui && n.addEventListener("load", a, { once: !0 }), s.open(), s.write(e), s.close(), ui || a();
    });
  }, Lz = ls(r_, ui ? 500 : 200).map((t) => Mz(a_, t)), Vz = (t, e) => {
    const o = j(t.getOr(""));
    return {
      getValue: (n) => o.get(),
      setValue: (n, s) => {
        if (o.get() !== s) {
          const r = n.element, c = () => st(r, "srcdoc", s);
          e ? Lz.fold(w(a_), (a) => a.throttle)(r, s, c) : c();
        }
        o.set(s);
      }
    };
  }, Hz = (t, e, o) => {
    const n = "tox-dialog__iframe", s = t.transparent ? [] : [`${n}--opaque`], r = t.border ? ["tox-navobj-bordered"] : [], c = {
      ...t.label.map((m) => ({ title: m })).getOr({}),
      ...o.map((m) => ({ srcdoc: m })).getOr({}),
      ...t.sandboxed ? { sandbox: "allow-scripts allow-same-origin" } : {}
    }, a = Vz(o, t.streamContent), i = t.label.map((m) => er(m, e)), l = (m) => QT(u.from(r), {
      uid: m.uid,
      dom: {
        tag: "iframe",
        attributes: c,
        classes: [
          n,
          ...s
        ]
      },
      behaviours: D([
        zt.config({}),
        Z.config({}),
        qr(o, a.getValue, a.setValue),
        po.config({
          channels: {
            [vu]: {
              onReceive: (g, p) => {
                p.newFocus.each((h) => {
                  ds(g.element).each((f) => {
                    (Bt(g.element, h) ? ee : Xt)(f, "tox-navobj-bordered-focus");
                  });
                });
              }
            }
          }
        })
      ])
    }), d = wt.parts.field({ factory: { sketch: l } });
    return si(i, d, ["tox-form__group--stretched"], []);
  }, Nz = (t) => new Promise((e, o) => {
    const n = () => {
      r(), e(t);
    }, s = [
      to(t, "load", n),
      to(t, "error", () => {
        r(), o("Unable to load data from image: " + t.dom.src);
      })
    ], r = () => Y(s, (c) => c.unbind());
    t.dom.complete && n();
  }), zz = (t, e, o, n, s) => {
    const r = o * s, c = n * s, a = Math.max(0, t / 2 - r / 2), i = Math.max(0, e / 2 - c / 2);
    return {
      left: a.toString() + "px",
      top: i.toString() + "px",
      width: r.toString() + "px",
      height: c.toString() + "px"
    };
  }, Uz = (t, e, o) => {
    const n = ro(t), s = ge(t);
    return Math.min(n / e, s / o, 1);
  }, Wz = (t, e) => {
    const o = j(e.getOr({ url: "" })), n = St({
      dom: {
        tag: "img",
        classes: ["tox-imagepreview__image"],
        attributes: e.map((i) => ({ src: i.url })).getOr({})
      }
    }), s = St({
      dom: {
        tag: "div",
        classes: ["tox-imagepreview__container"],
        attributes: { role: "presentation" }
      },
      components: [n.asSpec()]
    }), r = (i, l) => {
      const d = { url: l.url };
      l.zoom.each((g) => d.zoom = g), l.cachedWidth.each((g) => d.cachedWidth = g), l.cachedHeight.each((g) => d.cachedHeight = g), o.set(d);
      const m = () => {
        const { cachedWidth: g, cachedHeight: p, zoom: h } = d;
        if (!Ln(g) && !Ln(p)) {
          if (Ln(h)) {
            const y = Uz(i.element, g, p);
            d.zoom = y;
          }
          const f = zz(ro(i.element), ge(i.element), g, p, d.zoom);
          s.getOpt(i).each((y) => {
            pr(y.element, f);
          });
        }
      };
      n.getOpt(i).each((g) => {
        const p = g.element;
        l.url !== He(p, "src") && (st(p, "src", l.url), Xt(i.element, "tox-imagepreview__loaded")), m(), Nz(p).then((h) => {
          i.getSystem().isConnected() && (ee(i.element, "tox-imagepreview__loaded"), d.cachedWidth = h.dom.naturalWidth, d.cachedHeight = h.dom.naturalHeight, m());
        });
      });
    }, c = {};
    t.height.each((i) => c.height = i);
    const a = e.map((i) => ({
      url: i.url,
      zoom: u.from(i.zoom),
      cachedWidth: u.from(i.cachedWidth),
      cachedHeight: u.from(i.cachedHeight)
    }));
    return {
      dom: {
        tag: "div",
        classes: ["tox-imagepreview"],
        styles: c,
        attributes: { role: "presentation" }
      },
      components: [s.asSpec()],
      behaviours: D([
        fn.self(),
        qr(a, () => o.get(), r)
      ])
    };
  }, Gz = (t, e) => {
    const o = "tox-label", n = t.align === "center" ? [`${o}--center`] : [], s = t.align === "end" ? [`${o}--end`] : [], r = {
      dom: {
        tag: "label",
        classes: [
          o,
          ...n,
          ...s
        ]
      },
      components: [qt(e.providers.translate(t.label))]
    }, c = B(t.items, e.interpreter);
    return {
      dom: {
        tag: "div",
        classes: ["tox-form__group"]
      },
      components: [
        r,
        ...c
      ],
      behaviours: D([
        fn.self(),
        et.config({}),
        Sz(u.none()),
        z.config({ mode: "acyclic" })
      ])
    };
  }, i_ = P("toolbar.button.execute"), jz = (t) => xs((e, o) => {
    Kl(t, e)((n) => {
      U(e, i_, { buttonApi: n }), t.onAction(n);
    });
  }), Jr = P("common-button-display-events"), l_ = {
    [Ao()]: [
      "disabling",
      "alloy.base.behaviour",
      "toggling",
      "toolbar-button-events"
    ],
    [Wn()]: [
      "toolbar-button-events",
      Jr
    ],
    [Ho()]: [
      "focusing",
      "alloy.base.behaviour",
      Jr
    ]
  }, $p = (t) => rt(t.element, "width", Ne(t.element, "width")), u_ = (t, e, o) => un(t, {
    tag: "span",
    classes: [
      "tox-icon",
      "tox-tbtn__icon-wrap"
    ],
    behaviours: o
  }, e), Fp = (t, e) => u_(t, e, []), rr = (t, e) => u_(t, e, [et.config({})]), d_ = (t, e, o) => ({
    dom: {
      tag: "span",
      classes: [`${e}__select-label`]
    },
    components: [qt(o.translate(t))],
    behaviours: D([et.config({})])
  }), Yo = P("update-menu-text"), Zr = P("update-menu-icon"), Bp = (t, e, o) => {
    const n = j(R), s = t.text.map((g) => St(d_(g, e, o.providers))), r = t.icon.map((g) => St(rr(g, o.providers.icons))), c = (g, p) => {
      const h = I.getValue(g);
      return Z.focus(h), U(h, "keydown", { raw: p.event.raw }), jo.close(h), u.some(!0);
    }, a = t.role.fold(() => ({}), (g) => ({ role: g })), i = t.tooltip.fold(() => ({}), (g) => {
      const p = o.providers.translate(g);
      return {
        title: p,
        "aria-label": p
      };
    }), l = un("chevron-down", {
      tag: "div",
      classes: [`${e}__select-chevron`]
    }, o.providers.icons), d = P("common-button-display-events");
    return St(jo.sketch({
      ...t.uid ? { uid: t.uid } : {},
      ...a,
      dom: {
        tag: "button",
        classes: [
          e,
          `${e}--select`
        ].concat(B(t.classes, (g) => `${e}--${g}`)),
        attributes: { ...i }
      },
      components: Rc([
        r.map((g) => g.asSpec()),
        s.map((g) => g.asSpec()),
        u.some(l)
      ]),
      matchWidth: !0,
      useMinWidth: !0,
      onOpen: (g, p, h) => {
        t.searchable && cH(h);
      },
      dropdownBehaviours: D([
        ...t.dropdownBehaviours,
        mn.button(() => t.disabled || o.providers.isDisabled()),
        re(),
        ai.config({}),
        et.config({}),
        nt("dropdown-events", [
          Zs(t, n),
          Qs(t, n)
        ]),
        nt(d, [Vt((g, p) => $p(g))]),
        nt("menubutton-update-display-text", [
          O(Yo, (g, p) => {
            s.bind((h) => h.getOpt(g)).each((h) => {
              et.set(h, [qt(o.providers.translate(p.event.text))]);
            });
          }),
          O(Zr, (g, p) => {
            r.bind((h) => h.getOpt(g)).each((h) => {
              et.set(h, [rr(p.event.icon, o.providers.icons)]);
            });
          })
        ])
      ]),
      eventOrder: jt(l_, {
        mousedown: [
          "focusing",
          "alloy.base.behaviour",
          "item-type-events",
          "normal-dropdown-events"
        ],
        [Wn()]: [
          "toolbar-button-events",
          "dropdown-events",
          d
        ]
      }),
      sandboxBehaviours: D([
        z.config({
          mode: "special",
          onLeft: c,
          onRight: c
        }),
        nt("dropdown-sandbox-events", [
          O(PS, (g, p) => {
            eH(g), p.stop();
          }),
          O(LS, (g, p) => {
            oH(g, p), p.stop();
          })
        ])
      ]),
      lazySink: o.getSink,
      toggleClass: `${e}--active`,
      parts: {
        menu: {
          ...Nl(!1, t.columns, t.presets),
          fakeFocus: t.searchable,
          onHighlightItem: Qw,
          onCollapseMenu: (g, p, h) => {
            yt.getHighlighted(h).each((f) => {
              Qw(g, h, f);
            });
          },
          onDehighlightItem: rH
        }
      },
      getAnchorOverrides: () => ({
        maxHeightFunction: (g, p) => {
          _v()(g, p - 10);
        }
      }),
      fetch: (g) => $e.nu(Po(t.fetch, g))
    })).asSpec();
  }, Yz = (t) => Ct(t), m_ = (t) => t.type === "separator", Xz = (t) => At(t, "getSubmenuItems"), Kz = { type: "separator" }, qz = (t, e) => {
    const o = Fe(t, (n, s) => Yz(s) ? s === "" ? n : s === "|" ? n.length > 0 && !m_(n[n.length - 1]) ? n.concat([Kz]) : n : At(e, s.toLowerCase()) ? n.concat([e[s.toLowerCase()]]) : n : n.concat([s]), []);
    return o.length > 0 && m_(o[o.length - 1]) && o.pop(), o;
  }, Jz = (t, e) => {
    const o = t.getSubmenuItems(), n = g_(o, e), s = jt(n.menus, { [t.value]: n.items }), r = jt(n.expansions, { [t.value]: t.value });
    return {
      item: t,
      menus: s,
      expansions: r
    };
  }, Zz = (t) => {
    const e = Q(t, "value").getOrThunk(() => P("generated-menu-item"));
    return jt({ value: e }, t);
  }, g_ = (t, e) => {
    const o = qz(Ct(t) ? t.split(" ") : t, e);
    return rc(o, (n, s) => {
      if (Xz(s)) {
        const r = Zz(s), c = Jz(r, e);
        return {
          menus: jt(n.menus, c.menus),
          items: [
            c.item,
            ...n.items
          ],
          expansions: jt(n.expansions, c.expansions)
        };
      } else
        return {
          ...n,
          items: [
            s,
            ...n.items
          ]
        };
    }, {
      menus: {},
      expansions: {},
      items: []
    });
  }, Qz = (t) => t.search.fold(() => ({ searchMode: "no-search" }), (e) => ({
    searchMode: "search-with-field",
    placeholder: e.placeholder
  })), t2 = (t) => t.search.fold(() => ({ searchMode: "no-search" }), (e) => ({ searchMode: "search-with-results" })), Uc = (t, e, o, n) => {
    const s = P("primary-menu"), r = g_(t, o.shared.providers.menuItems());
    if (r.items.length === 0)
      return u.none();
    const c = Qz(n), a = tT(s, r.items, e, o, n.isHorizontalMenu, c), i = t2(n), l = me(r.menus, (m, g) => tT(g, m, e, o, !1, i)), d = jt(l, yr(s, a));
    return u.from(Pr.tieredData(s, d, r.expansions));
  }, Ip = (t) => !At(t, "items"), p_ = "data-value", h_ = (t, e, o, n) => B(o, (s) => Ip(s) ? {
    type: "togglemenuitem",
    text: s.text,
    value: s.value,
    active: s.value === n,
    onAction: () => {
      I.setValue(t, s.value), U(t, yo, { name: e }), Z.focus(t);
    }
  } : {
    type: "nestedmenuitem",
    text: s.text,
    getSubmenuItems: () => h_(t, e, s.items, n)
  }), Rp = (t, e) => xn(t, (o) => Ip(o) ? ls(o.value === e, o) : Rp(o.items, e)), e2 = (t, e, o) => {
    const n = e.shared.providers, s = o.bind((i) => Rp(t.items, i)).orThunk(() => yn(t.items).filter(Ip)), r = t.label.map((i) => er(i, n)), c = wt.parts.field({
      dom: {},
      factory: {
        sketch: (i) => Bp({
          uid: i.uid,
          text: s.map((l) => l.text),
          icon: u.none(),
          tooltip: t.label,
          role: u.none(),
          fetch: (l, d) => {
            const m = h_(l, t.name, t.items, I.getValue(l));
            d(Uc(m, Fn.CLOSE_ON_EXECUTE, e, {
              isHorizontalMenu: !1,
              search: u.none()
            }));
          },
          onSetup: w(R),
          getApi: w({}),
          columns: 1,
          presets: "normal",
          classes: [],
          dropdownBehaviours: [
            zt.config({}),
            qr(s.map((l) => l.value), (l) => He(l.element, p_), (l, d) => {
              Rp(t.items, d).each((m) => {
                st(l.element, p_, m.value), U(l, Yo, { text: m.text });
              });
            })
          ]
        }, "tox-listbox", e.shared)
      }
    }), a = {
      dom: {
        tag: "div",
        classes: ["tox-listboxfield"]
      },
      components: [c]
    };
    return wt.sketch({
      dom: {
        tag: "div",
        classes: ["tox-form__group"]
      },
      components: _e([
        r.toArray(),
        [a]
      ]),
      fieldBehaviours: D([q.config({
        disabled: w(!t.enabled),
        onDisabled: (i) => {
          wt.getField(i).each(q.disable);
        },
        onEnabled: (i) => {
          wt.getField(i).each(q.enable);
        }
      })])
    });
  }, o2 = (t, e) => ({
    dom: {
      tag: "div",
      classes: t.classes
    },
    components: B(t.items, e.shared.interpreter)
  }), n2 = (t, e) => {
    const o = B(t.options, (s) => ({
      dom: {
        tag: "option",
        value: s.value,
        innerHtml: s.text
      }
    })), n = t.data.map((s) => yr("initialValue", s)).getOr({});
    return {
      uid: t.uid,
      dom: {
        tag: "select",
        classes: t.selectClasses,
        attributes: t.selectAttributes
      },
      components: o,
      behaviours: xe(t.selectBehaviours, [
        Z.config({}),
        I.config({
          store: {
            mode: "manual",
            getValue: (s) => Ss(s.element),
            setValue: (s, r) => {
              const c = yn(t.options);
              Gt(t.options, (i) => i.value === r).isSome() ? Ar(s.element, r) : s.element.dom.selectedIndex === -1 && r === "" && c.each((i) => Ar(s.element, i.value));
            },
            ...n
          }
        })
      ])
    };
  }, s2 = $o({
    name: "HtmlSelect",
    configFields: [
      k("options"),
      be("selectBehaviours", [
        Z,
        I
      ]),
      S("selectClasses", []),
      S("selectAttributes", {}),
      _t("data")
    ],
    factory: n2
  }), r2 = (t, e, o) => {
    const n = B(t.items, (i) => ({
      text: e.translate(i.text),
      value: i.value
    })), s = t.label.map((i) => er(i, e)), r = wt.parts.field({
      dom: {},
      ...o.map((i) => ({ data: i })).getOr({}),
      selectAttributes: { size: t.size },
      options: n,
      factory: s2,
      selectBehaviours: D([
        q.config({ disabled: () => !t.enabled || e.isDisabled() }),
        zt.config({}),
        nt("selectbox-change", [O(pc(), (i, l) => {
          U(i, yo, { name: t.name });
        })])
      ])
    }), c = t.size > 1 ? u.none() : u.some(un("chevron-down", {
      tag: "div",
      classes: ["tox-selectfield__icon-js"]
    }, e.icons)), a = {
      dom: {
        tag: "div",
        classes: ["tox-selectfield"]
      },
      components: _e([
        [r],
        c.toArray()
      ])
    };
    return wt.sketch({
      dom: {
        tag: "div",
        classes: ["tox-form__group"]
      },
      components: _e([
        s.toArray(),
        [a]
      ]),
      fieldBehaviours: D([
        q.config({
          disabled: () => !t.enabled || e.isDisabled(),
          onDisabled: (i) => {
            wt.getField(i).each(q.disable);
          },
          onEnabled: (i) => {
            wt.getField(i).each(q.enable);
          }
        }),
        re()
      ])
    });
  }, c2 = w([
    S("field1Name", "field1"),
    S("field2Name", "field2"),
    $r("onLockedChange"),
    Mr(["lockClass"]),
    S("locked", !1),
    cn.field("coupledFieldBehaviours", [
      mt,
      I
    ])
  ]), a2 = (t, e, o) => Dt(t, e, o).bind(mt.getCurrent), f_ = (t, e) => Pe({
    factory: wt,
    name: t,
    overrides: (o) => ({
      fieldBehaviours: D([nt("coupled-input-behaviour", [O(Sr(), (n) => {
        a2(n, o, e).each((s) => {
          Dt(n, o, "lock").each((r) => {
            ct.isOn(r) && o.onLockedChange(n, s, r);
          });
        });
      })])])
    })
  }), i2 = w([
    f_("field1", "field2"),
    f_("field2", "field1"),
    Pe({
      factory: Se,
      schema: [k("dom")],
      name: "lock",
      overrides: (t) => ({
        buttonBehaviours: D([ct.config({
          selected: t.locked,
          toggleClass: t.markers.lockClass,
          aria: { mode: "pressed" }
        })])
      })
    })
  ]), l2 = (t, e, o, n) => ({
    uid: t.uid,
    dom: t.dom,
    components: e,
    behaviours: cn.augment(t.coupledFieldBehaviours, [
      mt.config({ find: u.some }),
      I.config({
        store: {
          mode: "manual",
          getValue: (s) => {
            const r = Gm(s, t, [
              "field1",
              "field2"
            ]);
            return {
              [t.field1Name]: I.getValue(r.field1()),
              [t.field2Name]: I.getValue(r.field2())
            };
          },
          setValue: (s, r) => {
            const c = Gm(s, t, [
              "field1",
              "field2"
            ]);
            Ko(r, t.field1Name) && I.setValue(c.field1(), r[t.field1Name]), Ko(r, t.field2Name) && I.setValue(c.field2(), r[t.field2Name]);
          }
        }
      })
    ]),
    apis: {
      getField1: (s) => Dt(s, t, "field1"),
      getField2: (s) => Dt(s, t, "field2"),
      getLock: (s) => Dt(s, t, "lock")
    }
  }), Bo = Ge({
    name: "FormCoupledInputs",
    configFields: c2(),
    partFields: i2(),
    factory: l2,
    apis: {
      getField1: (t, e) => t.getField1(e),
      getField2: (t, e) => t.getField2(e),
      getLock: (t, e) => t.getLock(e)
    }
  }), u2 = (t) => {
    const e = {
      "": 0,
      px: 0,
      pt: 1,
      mm: 1,
      pc: 2,
      ex: 2,
      em: 2,
      ch: 2,
      rem: 2,
      cm: 3,
      in: 4,
      "%": 4
    }, o = (s) => s in e ? e[s] : 1;
    let n = t.value.toFixed(o(t.unit));
    return n.indexOf(".") !== -1 && (n = n.replace(/\.?0*$/, "")), n + t.unit;
  }, Pp = (t) => {
    const o = /^\s*(\d+(?:\.\d+)?)\s*(|cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)\s*$/.exec(t);
    if (o !== null) {
      const n = parseFloat(o[1]), s = o[2];
      return ut.value({
        value: n,
        unit: s
      });
    } else
      return ut.error(t);
  }, b_ = (t, e) => {
    const o = {
      "": 96,
      px: 96,
      pt: 72,
      cm: 2.54,
      pc: 12,
      mm: 25.4,
      in: 1
    }, n = (s) => At(o, s);
    return t.unit === e ? u.some(t.value) : n(t.unit) && n(e) ? o[t.unit] === o[e] ? u.some(t.value) : u.some(t.value / o[t.unit] * o[e]) : u.none();
  }, Lp = (t) => u.none(), d2 = (t, e) => (o) => b_(o, e).map((n) => ({
    value: n * t,
    unit: e
  })), m2 = (t, e) => {
    const o = Pp(t).toOptional(), n = Pp(e).toOptional();
    return Di(o, n, (s, r) => b_(s, r.unit).map((c) => r.value / c).map((c) => d2(c, r.unit)).getOr(Lp)).getOr(Lp);
  }, g2 = (t, e) => {
    let o = Lp;
    const n = P("ratio-event"), s = (m) => un(m, {
      tag: "span",
      classes: [
        "tox-icon",
        "tox-lock-icon__" + m
      ]
    }, e.icons), r = Bo.parts.lock({
      dom: {
        tag: "button",
        classes: [
          "tox-lock",
          "tox-button",
          "tox-button--naked",
          "tox-button--icon"
        ],
        attributes: { title: e.translate(t.label.getOr("Constrain proportions")) }
      },
      components: [
        s("lock"),
        s("unlock")
      ],
      buttonBehaviours: D([
        q.config({ disabled: () => !t.enabled || e.isDisabled() }),
        re(),
        zt.config({})
      ])
    }), c = (m) => ({
      dom: {
        tag: "div",
        classes: ["tox-form__group"]
      },
      components: m
    }), a = (m) => wt.parts.field({
      factory: Hr,
      inputClasses: ["tox-textfield"],
      inputBehaviours: D([
        q.config({ disabled: () => !t.enabled || e.isDisabled() }),
        re(),
        zt.config({}),
        nt("size-input-events", [
          O(ys(), (g, p) => {
            U(g, n, { isField1: m });
          }),
          O(pc(), (g, p) => {
            U(g, yo, { name: t.name });
          })
        ])
      ]),
      selectOnFocus: !1
    }), i = (m) => ({
      dom: {
        tag: "label",
        classes: ["tox-label"]
      },
      components: [qt(e.translate(m))]
    }), l = Bo.parts.field1(c([
      wt.parts.label(i("Width")),
      a(!0)
    ])), d = Bo.parts.field2(c([
      wt.parts.label(i("Height")),
      a(!1)
    ]));
    return Bo.sketch({
      dom: {
        tag: "div",
        classes: ["tox-form__group"]
      },
      components: [{
        dom: {
          tag: "div",
          classes: ["tox-form__controls-h-stack"]
        },
        components: [
          l,
          d,
          c([
            i(W0),
            r
          ])
        ]
      }],
      field1Name: "width",
      field2Name: "height",
      locked: !0,
      markers: { lockClass: "tox-locked" },
      onLockedChange: (m, g, p) => {
        Pp(I.getValue(m)).each((h) => {
          o(h).each((f) => {
            I.setValue(g, u2(f));
          });
        });
      },
      coupledFieldBehaviours: D([
        q.config({
          disabled: () => !t.enabled || e.isDisabled(),
          onDisabled: (m) => {
            Bo.getField1(m).bind(wt.getField).each(q.disable), Bo.getField2(m).bind(wt.getField).each(q.disable), Bo.getLock(m).each(q.disable);
          },
          onEnabled: (m) => {
            Bo.getField1(m).bind(wt.getField).each(q.enable), Bo.getField2(m).bind(wt.getField).each(q.enable), Bo.getLock(m).each(q.enable);
          }
        }),
        re(),
        nt("size-input-events2", [O(n, (m, g) => {
          const p = g.event.isField1, h = p ? Bo.getField1(m) : Bo.getField2(m), f = p ? Bo.getField2(m) : Bo.getField1(m), y = h.map(I.getValue).getOr(""), v = f.map(I.getValue).getOr("");
          o = m2(y, v);
        })])
      ])
    });
  }, p2 = (t, e, o) => {
    const n = hn.parts.label({
      dom: {
        tag: "label",
        classes: ["tox-label"]
      },
      components: [qt(e.translate(t.label))]
    }), s = hn.parts.spectrum({
      dom: {
        tag: "div",
        classes: ["tox-slider__rail"],
        attributes: { role: "presentation" }
      }
    }), r = hn.parts.thumb({
      dom: {
        tag: "div",
        classes: ["tox-slider__handle"],
        attributes: { role: "presentation" }
      }
    });
    return hn.sketch({
      dom: {
        tag: "div",
        classes: ["tox-slider"],
        attributes: { role: "presentation" }
      },
      model: {
        mode: "x",
        minX: t.min,
        maxX: t.max,
        getInitialValue: w(o.getOrThunk(() => (Math.abs(t.max) - Math.abs(t.min)) / 2))
      },
      components: [
        n,
        s,
        r
      ],
      sliderBehaviours: D([
        fn.self(),
        Z.config({})
      ]),
      onChoose: (c, a, i) => {
        U(c, yo, {
          name: t.name,
          value: i
        });
      }
    });
  }, h2 = (t, e) => {
    const o = (a) => ({
      dom: {
        tag: "th",
        innerHtml: e.translate(a)
      }
    }), n = (a) => ({
      dom: { tag: "thead" },
      components: [{
        dom: { tag: "tr" },
        components: B(a, o)
      }]
    }), s = (a) => ({
      dom: {
        tag: "td",
        innerHtml: e.translate(a)
      }
    }), r = (a) => ({
      dom: { tag: "tr" },
      components: B(a, s)
    }), c = (a) => ({
      dom: { tag: "tbody" },
      components: B(a, r)
    });
    return {
      dom: {
        tag: "table",
        classes: ["tox-dialog__table"]
      },
      components: [
        n(t.header),
        c(t.cells)
      ],
      behaviours: D([
        zt.config({}),
        Z.config({})
      ])
    };
  }, v_ = (t, e) => {
    const o = t.label.map((p) => er(p, e)), n = [
      q.config({ disabled: () => t.disabled || e.isDisabled() }),
      re(),
      z.config({
        mode: "execution",
        useEnter: t.multiline !== !0,
        useControlEnter: t.multiline === !0,
        execute: (p) => (xt(p, ci), u.some(!0))
      }),
      nt("textfield-change", [
        O(Sr(), (p, h) => {
          U(p, yo, { name: t.name });
        }),
        O(Pd(), (p, h) => {
          U(p, yo, { name: t.name });
        })
      ]),
      zt.config({})
    ], s = t.validation.map((p) => qn.config({
      getRoot: (h) => ds(h.element),
      invalidClass: "tox-invalid",
      validator: {
        validate: (h) => {
          const f = I.getValue(h), y = p.validator(f);
          return $e.pure(y === !0 ? ut.value(f) : ut.error(y));
        },
        validateOnLoad: p.validateOnLoad
      }
    })).toArray(), r = t.placeholder.fold(w({}), (p) => ({ placeholder: e.translate(p) })), c = t.inputMode.fold(w({}), (p) => ({ inputmode: p })), a = {
      ...r,
      ...c
    }, i = wt.parts.field({
      tag: t.multiline === !0 ? "textarea" : "input",
      ...t.data.map((p) => ({ data: p })).getOr({}),
      inputAttributes: a,
      inputClasses: [t.classname],
      inputBehaviours: D(_e([
        n,
        s
      ])),
      selectOnFocus: !1,
      factory: Hr
    }), l = t.multiline ? {
      dom: {
        tag: "div",
        classes: ["tox-textarea-wrap"]
      },
      components: [i]
    } : i, m = (t.flex ? ["tox-form__group--stretched"] : []).concat(t.maximized ? ["tox-form-group--maximize"] : []), g = [
      q.config({
        disabled: () => t.disabled || e.isDisabled(),
        onDisabled: (p) => {
          wt.getField(p).each(q.disable);
        },
        onEnabled: (p) => {
          wt.getField(p).each(q.enable);
        }
      }),
      re()
    ];
    return si(o, l, m, g);
  }, f2 = (t, e, o) => v_({
    name: t.name,
    multiline: !1,
    label: t.label,
    inputMode: t.inputMode,
    placeholder: t.placeholder,
    flex: !1,
    disabled: !t.enabled,
    classname: "tox-textfield",
    validation: u.none(),
    maximized: t.maximized,
    data: o
  }, e), b2 = (t, e, o) => v_({
    name: t.name,
    multiline: !0,
    label: t.label,
    inputMode: u.none(),
    placeholder: t.placeholder,
    flex: !0,
    disabled: !t.enabled,
    classname: "tox-textarea",
    validation: u.none(),
    maximized: t.maximized,
    data: o
  }, e), di = (t, e) => e.getAnimationRoot.fold(() => t.element, (o) => o(t)), Ms = (t) => t.dimension.property, Qr = (t, e) => t.dimension.getDimension(e), yu = (t, e) => {
    const o = di(t, e);
    nn(o, [
      e.shrinkingClass,
      e.growingClass
    ]);
  }, Vp = (t, e) => {
    Xt(t.element, e.openClass), ee(t.element, e.closedClass), rt(t.element, Ms(e), "0px"), pa(t.element);
  }, Hp = (t, e) => {
    Xt(t.element, e.closedClass), ee(t.element, e.openClass), kt(t.element, Ms(e));
  }, y_ = (t, e, o, n) => {
    o.setCollapsed(), rt(t.element, Ms(e), Qr(e, t.element)), yu(t, e), Vp(t, e), e.onStartShrink(t), e.onShrunk(t);
  }, v2 = (t, e, o, n) => {
    const s = n.getOrThunk(() => Qr(e, t.element));
    o.setCollapsed(), rt(t.element, Ms(e), s), pa(t.element);
    const r = di(t, e);
    Xt(r, e.growingClass), ee(r, e.shrinkingClass), Vp(t, e), e.onStartShrink(t);
  }, x_ = (t, e, o) => {
    const n = Qr(e, t.element);
    (n === "0px" ? y_ : v2)(t, e, o, u.some(n));
  }, S_ = (t, e, o) => {
    const n = di(t, e), s = ao(n, e.shrinkingClass), r = Qr(e, t.element);
    Hp(t, e);
    const c = Qr(e, t.element);
    (s ? () => {
      rt(t.element, Ms(e), r), pa(t.element);
    } : () => {
      Vp(t, e);
    })(), Xt(n, e.shrinkingClass), ee(n, e.growingClass), Hp(t, e), rt(t.element, Ms(e), c), o.setExpanded(), e.onStartGrow(t);
  }, y2 = (t, e, o) => {
    if (o.isExpanded()) {
      kt(t.element, Ms(e));
      const n = Qr(e, t.element);
      rt(t.element, Ms(e), n);
    }
  }, x2 = (t, e, o) => {
    o.isExpanded() || S_(t, e, o);
  }, S2 = (t, e, o) => {
    o.isExpanded() && x_(t, e, o);
  }, w2 = (t, e, o) => {
    o.isExpanded() && y_(t, e, o);
  }, T2 = (t, e, o) => o.isExpanded(), _2 = (t, e, o) => o.isCollapsed(), w_ = (t, e, o) => {
    const n = di(t, e);
    return ao(n, e.growingClass) === !0;
  }, T_ = (t, e, o) => {
    const n = di(t, e);
    return ao(n, e.shrinkingClass) === !0;
  };
  var C2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    refresh: y2,
    grow: x2,
    shrink: S2,
    immediateShrink: w2,
    hasGrown: T2,
    hasShrunk: _2,
    isGrowing: w_,
    isShrinking: T_,
    isTransitioning: (t, e, o) => w_(t, e) || T_(t, e),
    toggleGrow: (t, e, o) => {
      (o.isExpanded() ? x_ : S_)(t, e, o);
    },
    disableTransitions: yu,
    immediateGrow: (t, e, o) => {
      o.isExpanded() || (Hp(t, e), rt(t.element, Ms(e), Qr(e, t.element)), yu(t, e), o.setExpanded(), e.onStartGrow(t), e.onGrown(t));
    }
  }), O2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    exhibit: (t, e, o) => {
      const n = e.expanded;
      return on(n ? {
        classes: [e.openClass],
        styles: {}
      } : {
        classes: [e.closedClass],
        styles: yr(e.dimension.property, "0px")
      });
    },
    events: (t, e) => It([bc(wa(), (o, n) => {
      n.event.raw.propertyName === t.dimension.property && (yu(o, t), e.isExpanded() && kt(o.element, t.dimension.property), (e.isExpanded() ? t.onGrown : t.onShrunk)(o));
    })])
  }), k2 = [
    k("closedClass"),
    k("openClass"),
    k("shrinkingClass"),
    k("growingClass"),
    _t("getAnimationRoot"),
    pt("onShrunk"),
    pt("onStartShrink"),
    pt("onGrown"),
    pt("onStartGrow"),
    S("expanded", !1),
    Oo("dimension", mo("property", {
      width: [
        Rt("property", "width"),
        Rt("getDimension", (t) => ro(t) + "px")
      ],
      height: [
        Rt("property", "height"),
        Rt("getDimension", (t) => ge(t) + "px")
      ]
    }))
  ], E2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    init: (t) => {
      const e = j(t.expanded), o = () => "expanded: " + e.get();
      return Do({
        isExpanded: () => e.get() === !0,
        isCollapsed: () => e.get() === !1,
        setCollapsed: Po(e.set, !1),
        setExpanded: Po(e.set, !0),
        readState: o
      });
    }
  });
  const xo = ye({
    fields: k2,
    name: "sliding",
    active: O2,
    apis: C2,
    state: E2
  }), __ = (t) => ({
    isEnabled: () => !q.isDisabled(t),
    setEnabled: (e) => q.set(t, !e),
    setActive: (e) => {
      const o = t.element;
      e ? (ee(o, "tox-tbtn--enabled"), st(o, "aria-pressed", !0)) : (Xt(o, "tox-tbtn--enabled"), Qt(o, "aria-pressed"));
    },
    isActive: () => ao(t.element, "tox-tbtn--enabled"),
    setText: (e) => {
      U(t, Yo, { text: e });
    },
    setIcon: (e) => U(t, Zr, { icon: e })
  }), mi = (t, e, o, n, s = !0) => Bp({
    text: t.text,
    icon: t.icon,
    tooltip: t.tooltip,
    searchable: t.search.isSome(),
    role: n,
    fetch: (r, c) => {
      const a = { pattern: t.search.isSome() ? aH(r) : "" };
      t.fetch((i) => {
        c(Uc(i, Fn.CLOSE_ON_EXECUTE, o, {
          isHorizontalMenu: !1,
          search: t.search
        }));
      }, a, __(r));
    },
    onSetup: t.onSetup,
    getApi: __,
    columns: 1,
    presets: "normal",
    classes: [],
    dropdownBehaviours: [...s ? [zt.config({})] : []]
  }, e, o.shared), A2 = (t, e, o) => {
    const n = (r) => (c) => {
      const a = !c.isActive();
      c.setActive(a), r.storage.set(a), o.shared.getSink().each((i) => {
        e().getOpt(i).each((l) => {
          sn(l.element), U(l, Kn, {
            name: r.name,
            value: r.storage.get()
          });
        });
      });
    }, s = (r) => (c) => {
      c.setActive(r.storage.get());
    };
    return (r) => {
      r(B(t, (c) => {
        const a = c.text.fold(() => ({}), (i) => ({ text: i }));
        return {
          type: c.type,
          active: !1,
          ...a,
          onAction: n(c),
          onSetup: s(c)
        };
      }));
    };
  }, C_ = (t) => ({
    dom: {
      tag: "span",
      classes: ["tox-tree__label"],
      attributes: {
        title: t,
        "aria-label": t
      }
    },
    components: [qt(t)]
  }), O_ = P("leaf-label-event-id"), Np = ({ leaf: t, onLeafAction: e, visible: o, treeId: n, selectedId: s, backstage: r }) => {
    const c = t.menu.map((i) => mi(i, "tox-mbtn", r, u.none(), o)), a = [C_(t.title)];
    return c.each((i) => a.push(i)), Se.sketch({
      dom: {
        tag: "div",
        classes: [
          "tox-tree--leaf__label",
          "tox-trbtn"
        ].concat(o ? ["tox-tree--leaf__label--visible"] : [])
      },
      components: a,
      role: "treeitem",
      action: (i) => {
        e(t.id), i.getSystem().broadcastOn([`update-active-item-${n}`], { value: t.id });
      },
      eventOrder: {
        [kn()]: [
          O_,
          "keying"
        ]
      },
      buttonBehaviours: D([
        ...o ? [zt.config({})] : [],
        ct.config({
          toggleClass: "tox-trbtn--enabled",
          toggleOnExecute: !1,
          aria: { mode: "selected" }
        }),
        po.config({
          channels: {
            [`update-active-item-${n}`]: {
              onReceive: (i, l) => {
                (l.value === t.id ? ct.on : ct.off)(i);
              }
            }
          }
        }),
        nt(O_, [
          Vt((i, l) => {
            s.each((d) => {
              (d === t.id ? ct.on : ct.off)(i);
            });
          }),
          O(kn(), (i, l) => {
            const d = l.event.raw.code === "ArrowLeft", m = l.event.raw.code === "ArrowRight";
            d ? (Ws(i.element, ".tox-tree--directory").each((g) => {
              i.getSystem().getByDom(g).each((p) => {
                em(g, ".tox-tree--directory__label").each((h) => {
                  p.getSystem().getByDom(h).each(Z.focus);
                });
              });
            }), l.stop()) : m && l.stop();
          })
        ])
      ])
    });
  }, D2 = (t, e, o) => un(t, {
    tag: "span",
    classes: [
      "tox-tree__icon-wrap",
      "tox-icon"
    ],
    behaviours: o
  }, e), M2 = (t, e) => D2(t, e, []), k_ = P("directory-label-event-id"), $2 = ({ directory: t, visible: e, noChildren: o, backstage: n }) => {
    const s = t.menu.map((a) => mi(a, "tox-mbtn", n, u.none())), r = [
      {
        dom: {
          tag: "div",
          classes: ["tox-chevron"]
        },
        components: [M2("chevron-right", n.shared.providers.icons)]
      },
      C_(t.title)
    ];
    s.each((a) => {
      r.push(a);
    });
    const c = (a) => {
      Ws(a.element, ".tox-tree--directory").each((i) => {
        a.getSystem().getByDom(i).each((l) => {
          const d = !ct.isOn(l);
          ct.toggle(l), U(a, "expand-tree-node", {
            expanded: d,
            node: t.id
          });
        });
      });
    };
    return Se.sketch({
      dom: {
        tag: "div",
        classes: [
          "tox-tree--directory__label",
          "tox-trbtn"
        ].concat(e ? ["tox-tree--directory__label--visible"] : [])
      },
      components: r,
      action: c,
      eventOrder: {
        [kn()]: [
          k_,
          "keying"
        ]
      },
      buttonBehaviours: D([
        ...e ? [zt.config({})] : [],
        nt(k_, [O(kn(), (a, i) => {
          const l = i.event.raw.code === "ArrowRight", d = i.event.raw.code === "ArrowLeft";
          l && o && i.stop(), (l || d) && Ws(a.element, ".tox-tree--directory").each((m) => {
            a.getSystem().getByDom(m).each((g) => {
              !ct.isOn(g) && l || ct.isOn(g) && d ? (c(a), i.stop()) : d && !ct.isOn(g) && (Ws(g.element, ".tox-tree--directory").each((p) => {
                em(p, ".tox-tree--directory__label").each((h) => {
                  g.getSystem().getByDom(h).each(Z.focus);
                });
              }), i.stop());
            });
          });
        })])
      ])
    });
  }, F2 = ({ children: t, onLeafAction: e, visible: o, treeId: n, expandedIds: s, selectedId: r, backstage: c }) => ({
    dom: {
      tag: "div",
      classes: ["tox-tree--directory__children"]
    },
    components: t.map((a) => a.type === "leaf" ? Np({
      leaf: a,
      selectedId: r,
      onLeafAction: e,
      visible: o,
      treeId: n,
      backstage: c
    }) : zp({
      directory: a,
      expandedIds: s,
      selectedId: r,
      onLeafAction: e,
      labelTabstopping: o,
      treeId: n,
      backstage: c
    })),
    behaviours: D([
      xo.config({
        dimension: { property: "height" },
        closedClass: "tox-tree--directory__children--closed",
        openClass: "tox-tree--directory__children--open",
        growingClass: "tox-tree--directory__children--growing",
        shrinkingClass: "tox-tree--directory__children--shrinking",
        expanded: o
      }),
      et.config({})
    ])
  }), B2 = P("directory-event-id"), zp = ({ directory: t, onLeafAction: e, labelTabstopping: o, treeId: n, backstage: s, expandedIds: r, selectedId: c }) => {
    const { children: a } = t, i = j(r), l = (m) => a.map((g) => g.type === "leaf" ? Np({
      leaf: g,
      selectedId: c,
      onLeafAction: e,
      visible: m,
      treeId: n,
      backstage: s
    }) : zp({
      directory: g,
      expandedIds: i.get(),
      selectedId: c,
      onLeafAction: e,
      labelTabstopping: m,
      treeId: n,
      backstage: s
    })), d = r.includes(t.id);
    return {
      dom: {
        tag: "div",
        classes: ["tox-tree--directory"],
        attributes: { role: "treeitem" }
      },
      components: [
        $2({
          directory: t,
          visible: o,
          noChildren: t.children.length === 0,
          backstage: s
        }),
        F2({
          children: a,
          expandedIds: r,
          selectedId: c,
          onLeafAction: e,
          visible: d,
          treeId: n,
          backstage: s
        })
      ],
      behaviours: D([
        nt(B2, [
          Vt((m, g) => {
            ct.set(m, d);
          }),
          O("expand-tree-node", (m, g) => {
            const { expanded: p, node: h } = g.event;
            i.set(p ? [
              ...i.get(),
              h
            ] : i.get().filter((f) => f !== h));
          })
        ]),
        ct.config({
          ...t.children.length > 0 ? { aria: { mode: "expanded" } } : {},
          toggleClass: "tox-tree--directory--expanded",
          onToggled: (m, g) => {
            const p = m.components()[1], h = l(g);
            g ? xo.grow(p) : xo.shrink(p), et.set(p, h);
          }
        })
      ])
    };
  }, I2 = P("tree-event-id"), R2 = (t, e) => {
    const o = t.onLeafAction.getOr(R), n = t.onToggleExpand.getOr(R), s = t.defaultExpandedIds, r = j(s), c = j(t.defaultSelectedId), a = P("tree-id"), i = (l, d) => t.items.map((m) => m.type === "leaf" ? Np({
      leaf: m,
      selectedId: l,
      onLeafAction: o,
      visible: !0,
      treeId: a,
      backstage: e
    }) : zp({
      directory: m,
      selectedId: l,
      onLeafAction: o,
      expandedIds: d,
      labelTabstopping: !0,
      treeId: a,
      backstage: e
    }));
    return {
      dom: {
        tag: "div",
        classes: ["tox-tree"],
        attributes: { role: "tree" }
      },
      components: i(c.get(), r.get()),
      behaviours: D([
        z.config({
          mode: "flow",
          selector: ".tox-tree--leaf__label--visible, .tox-tree--directory__label--visible",
          cycles: !1
        }),
        nt(I2, [O("expand-tree-node", (l, d) => {
          const { expanded: m, node: g } = d.event;
          r.set(m ? [
            ...r.get(),
            g
          ] : r.get().filter((p) => p !== g)), n(r.get(), {
            expanded: m,
            node: g
          });
        })]),
        po.config({
          channels: {
            [`update-active-item-${a}`]: {
              onReceive: (l, d) => {
                c.set(u.some(d.value)), et.set(l, i(u.some(d.value), r.get()));
              }
            }
          }
        }),
        et.config({})
      ])
    };
  };
  var P2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    events: (t, e) => {
      const n = t.stream.streams.setup(t, e);
      return It([
        O(t.event, n),
        Gn(() => e.cancel())
      ].concat(t.cancelEvent.map((s) => [O(s, () => e.cancel())]).getOr([])));
    }
  });
  const E_ = (t) => {
    const e = j(null);
    return Do({
      readState: () => ({ timer: e.get() !== null ? "set" : "unset" }),
      setTimer: (r) => {
        e.set(r);
      },
      cancel: () => {
        const r = e.get();
        r !== null && r.cancel();
      }
    });
  };
  var L2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    throttle: E_,
    init: (t) => t.stream.streams.state(t)
  });
  const V2 = (t, e) => {
    const o = t.stream, n = Ep(t.onStream, o.delay);
    return e.setTimer(n), (s, r) => {
      n.throttle(s, r), o.stopEvent && r.stop();
    };
  };
  var H2 = [
    Oo("stream", mo("mode", {
      throttle: [
        k("delay"),
        S("stopEvent", !0),
        Rt("streams", {
          setup: V2,
          state: E_
        })
      ]
    })),
    S("event", "input"),
    _t("cancelEvent"),
    $r("onStream")
  ];
  const Up = ye({
    fields: H2,
    name: "streaming",
    active: P2,
    state: L2
  }), xu = (t, e, o) => {
    const n = I.getValue(o);
    I.setValue(e, n), D_(e);
  }, A_ = (t, e) => {
    const o = t.element, n = Ss(o), s = o.dom;
    He(o, "type") !== "number" && e(s, n);
  }, D_ = (t) => {
    A_(t, (e, o) => e.setSelectionRange(o.length, o.length));
  }, N2 = (t, e) => {
    A_(t, (o, n) => o.setSelectionRange(e, n.length));
  }, z2 = (t, e, o) => {
    if (t.selectsOver) {
      const n = I.getValue(e), s = t.getDisplayText(n), r = I.getValue(o);
      return t.getDisplayText(r).indexOf(s) === 0 ? u.some(() => {
        xu(t, e, o), N2(e, s.length);
      }) : u.none();
    } else
      return u.none();
  }, Wp = w("alloy.typeahead.itemexecute"), U2 = (t, e, o, n) => {
    const s = (m, g, p) => {
      t.previewing.set(!1);
      const h = Wt.getCoupled(m, "sandbox");
      if (ht.isOpen(h))
        mt.getCurrent(h).each((f) => {
          yt.getHighlighted(f).fold(() => {
            p(f);
          }, () => {
            Eb(h, f.element, "keydown", g);
          });
        });
      else {
        const f = (y) => {
          mt.getCurrent(y).each(p);
        };
        eu(t, c(m), m, h, n, f, oo.HighlightMenuAndItem).get(R);
      }
    }, r = IS(t), c = (m) => (g) => g.map((p) => {
      const h = cd(p.menus), f = le(h, (v) => Ht(v.items, (b) => b.type === "item"));
      return I.getState(m).update(B(f, (v) => v.data)), p;
    }), a = (m) => mt.getCurrent(m), i = "typeaheadevents", l = [
      Z.config({}),
      I.config({
        onSetValue: t.onSetValue,
        store: {
          mode: "dataset",
          getDataKey: (m) => Ss(m.element),
          getFallbackEntry: (m) => ({
            value: m,
            meta: {}
          }),
          setValue: (m, g) => {
            Ar(m.element, t.model.getDisplayText(g));
          },
          ...t.initialData.map((m) => yr("initialValue", m)).getOr({})
        }
      }),
      Up.config({
        stream: {
          mode: "throttle",
          delay: t.responseTime,
          stopEvent: !1
        },
        onStream: (m, g) => {
          const p = Wt.getCoupled(m, "sandbox");
          if (Z.isFocused(m) && Ss(m.element).length >= t.minChars) {
            const f = a(p).bind((v) => yt.getHighlighted(v).map(I.getValue));
            t.previewing.set(!0);
            const y = (v) => {
              a(p).each((b) => {
                f.fold(() => {
                  t.model.selectsOver && yt.highlightFirst(b);
                }, (x) => {
                  yt.highlightBy(b, (E) => I.getValue(E).value === x.value), yt.getHighlighted(b).orThunk(() => (yt.highlightFirst(b), u.none()));
                });
              });
            };
            eu(t, c(m), m, p, n, y, oo.HighlightJustMenu).get(R);
          }
        },
        cancelEvent: Ld()
      }),
      z.config({
        mode: "special",
        onDown: (m, g) => (s(m, g, yt.highlightFirst), u.some(!0)),
        onEscape: (m) => {
          const g = Wt.getCoupled(m, "sandbox");
          return ht.isOpen(g) ? (ht.close(g), u.some(!0)) : u.none();
        },
        onUp: (m, g) => (s(m, g, yt.highlightLast), u.some(!0)),
        onEnter: (m) => {
          const g = Wt.getCoupled(m, "sandbox"), p = ht.isOpen(g);
          if (p && !t.previewing.get())
            return a(g).bind((h) => yt.getHighlighted(h)).map((h) => (U(m, Wp(), { item: h }), !0));
          {
            const h = I.getValue(m);
            return xt(m, Ld()), t.onExecute(g, m, h), p && ht.close(g), u.some(!0);
          }
        }
      }),
      ct.config({
        toggleClass: t.markers.openClass,
        aria: { mode: "expanded" }
      }),
      Wt.config({
        others: {
          sandbox: (m) => ip(t, m, {
            onOpen: () => ct.on(m),
            onClose: () => {
              t.lazyTypeaheadComp.get().each((g) => Qt(g.element, "aria-activedescendant")), ct.off(m);
            }
          })
        }
      }),
      nt(i, [
        Vt((m) => {
          t.lazyTypeaheadComp.set(u.some(m));
        }),
        Gn((m) => {
          t.lazyTypeaheadComp.set(u.none());
        }),
        xs((m) => {
          const g = R;
          ap(t, c(m), m, n, g, oo.HighlightMenuAndItem).get(R);
        }),
        O(Wp(), (m, g) => {
          const p = Wt.getCoupled(m, "sandbox");
          xu(t.model, m, g.event.item), xt(m, Ld()), t.onItemExecute(m, p, g.event.item, I.getValue(m)), ht.close(p), D_(m);
        })
      ].concat(t.dismissOnBlur ? [O(Rd(), (m) => {
        const g = Wt.getCoupled(m, "sandbox");
        Dn(g.element).isNone() && ht.close(g);
      })] : []))
    ], d = {
      [hc()]: [
        I.name(),
        Up.name(),
        i
      ],
      ...t.eventOrder
    };
    return {
      uid: t.uid,
      dom: RS(jt(t, {
        inputAttributes: {
          role: "combobox",
          "aria-autocomplete": "list",
          "aria-haspopup": "true"
        }
      })),
      behaviours: {
        ...r,
        ...xe(t.typeaheadBehaviours, l)
      },
      eventOrder: d
    };
  }, W2 = w([
    _t("lazySink"),
    k("fetch"),
    S("minChars", 5),
    S("responseTime", 1e3),
    pt("onOpen"),
    S("getHotspot", u.some),
    S("getAnchorOverrides", w({})),
    S("layouts", u.none()),
    S("eventOrder", {}),
    Fd("model", {}, [
      S("getDisplayText", (t) => t.meta !== void 0 && t.meta.text !== void 0 ? t.meta.text : t.value),
      S("selectsOver", !0),
      S("populateFromBrowse", !0)
    ]),
    pt("onSetValue"),
    go("onExecute"),
    pt("onItemExecute"),
    S("inputClasses", []),
    S("inputAttributes", {}),
    S("inputStyles", {}),
    S("matchWidth", !0),
    S("useMinWidth", !1),
    S("dismissOnBlur", !0),
    Mr(["openClass"]),
    _t("initialData"),
    be("typeaheadBehaviours", [
      Z,
      I,
      Up,
      z,
      ct,
      Wt
    ]),
    Qe("lazyTypeaheadComp", () => j(u.none)),
    Qe("previewing", () => j(!0))
  ].concat(BS()).concat(lp())), G2 = w([an({
    schema: [Qi()],
    name: "menu",
    overrides: (t) => ({
      fakeFocus: !0,
      onHighlightItem: (e, o, n) => {
        t.previewing.get() ? t.lazyTypeaheadComp.get().each((s) => {
          z2(t.model, s, n).fold(() => {
            t.model.selectsOver ? (yt.dehighlight(o, n), t.previewing.set(!0)) : t.previewing.set(!1);
          }, (r) => {
            r(), t.previewing.set(!1);
          });
        }) : t.lazyTypeaheadComp.get().each((s) => {
          t.model.populateFromBrowse && xu(t.model, s, n), Je(n.element, "id").each((r) => st(s.element, "aria-activedescendant", r));
        });
      },
      onExecute: (e, o) => t.lazyTypeaheadComp.get().map((n) => (U(n, Wp(), { item: o }), !0)),
      onHover: (e, o) => {
        t.previewing.set(!1), t.lazyTypeaheadComp.get().each((n) => {
          t.model.populateFromBrowse && xu(t.model, n, o);
        });
      }
    })
  })]), j2 = Ge({
    name: "Typeahead",
    configFields: W2(),
    partFields: G2(),
    factory: U2
  }), bn = (t) => ({
    ...t,
    toCached: () => bn(t.toCached()),
    bindFuture: (i) => bn(t.bind((l) => l.fold((d) => $e.pure(ut.error(d)), (d) => i(d)))),
    bindResult: (i) => bn(t.map((l) => l.bind(i))),
    mapResult: (i) => bn(t.map((l) => l.map(i))),
    mapError: (i) => bn(t.map((l) => l.mapError(i))),
    foldResult: (i, l) => t.map((d) => d.fold(i, l)),
    withTimeout: (i, l) => bn($e.nu((d) => {
      let m = !1;
      const g = setTimeout(() => {
        m = !0, d(ut.error(l()));
      }, i);
      t.get((p) => {
        m || (clearTimeout(g), d(p));
      });
    }))
  }), M_ = (t) => bn($e.nu(t)), $_ = (t) => bn($e.pure(ut.value(t))), Y2 = {
    nu: M_,
    wrap: bn,
    pure: $_,
    value: $_,
    error: (t) => bn($e.pure(ut.error(t))),
    fromResult: (t) => bn($e.pure(t)),
    fromFuture: (t) => bn(t.map(ut.value)),
    fromPromise: (t) => M_((e) => {
      t.then((o) => {
        e(ut.value(o));
      }, (o) => {
        e(ut.error(o));
      });
    })
  }, Su = (t, e, o = [], n, s, r) => {
    const c = e.fold(() => ({}), (l) => ({ action: l })), a = {
      buttonBehaviours: D([
        mn.button(() => !t.enabled || r.isDisabled()),
        re(),
        zt.config({}),
        nt("button press", [
          Db("click"),
          Db("mousedown")
        ])
      ].concat(o)),
      eventOrder: {
        click: [
          "button press",
          "alloy.base.behaviour"
        ],
        mousedown: [
          "button press",
          "alloy.base.behaviour"
        ]
      },
      ...c
    }, i = jt(a, { dom: n });
    return jt(i, { components: s });
  }, X2 = (t, e, o, n = []) => {
    const s = t.tooltip.map((i) => ({
      "aria-label": o.translate(i),
      title: o.translate(i)
    })).getOr({}), r = {
      tag: "button",
      classes: ["tox-tbtn"],
      attributes: s
    }, c = t.icon.map((i) => Fp(i, o.icons)), a = Rc([c]);
    return Su(t, e, n, r, a, o);
  }, Gp = (t) => {
    switch (t) {
      case "primary":
        return ["tox-button"];
      case "toolbar":
        return ["tox-tbtn"];
      case "secondary":
      default:
        return [
          "tox-button",
          "tox-button--secondary"
        ];
    }
  }, F_ = (t, e, o, n = [], s = []) => {
    const r = o.translate(t.text), c = t.icon.map((g) => Fp(g, o.icons)), a = [c.getOrThunk(() => qt(r))], i = t.buttonType.getOr(!t.primary && !t.borderless ? "secondary" : "primary"), m = {
      tag: "button",
      classes: [
        ...Gp(i),
        ...c.isSome() ? ["tox-button--icon"] : [],
        ...t.borderless ? ["tox-button--naked"] : [],
        ...s
      ],
      attributes: { title: r }
    };
    return Su(t, e, n, m, a, o);
  }, B_ = (t, e, o, n = [], s = []) => {
    const r = F_(t, u.some(e), o, n, s);
    return Se.sketch(r);
  }, I_ = (t, e) => (o) => {
    e === "custom" ? U(o, Kn, {
      name: t,
      value: {}
    }) : e === "submit" ? xt(o, ci) : e === "cancel" ? xt(o, or) : console.error("Unknown button type: ", e);
  }, K2 = (t, e) => e === "menu", q2 = (t, e) => e === "custom" || e === "cancel" || e === "submit", J2 = (t, e) => e === "togglebutton", Z2 = (t, e) => {
    var o, n;
    const s = t.icon.map((b) => rr(b, e.icons)).map(St), r = (b) => {
      U(b, Kn, {
        name: t.name,
        value: {
          setIcon: (x) => {
            s.map((E) => E.getOpt(b).each((C) => {
              et.set(C, [rr(x, e.icons)]);
            }));
          }
        }
      });
    }, c = t.buttonType.getOr(t.primary ? "primary" : "secondary"), a = {
      ...t,
      name: (o = t.name) !== null && o !== void 0 ? o : "",
      tooltip: u.from(t.tooltip),
      enabled: (n = t.enabled) !== null && n !== void 0 ? n : !1
    }, i = a.tooltip.map((b) => ({
      "aria-label": e.translate(b),
      title: e.translate(b)
    })).getOr({}), l = Gp(c ?? "secondary"), d = t.icon.isSome() && t.text.isSome(), m = {
      tag: "button",
      classes: [
        ...l.concat(t.icon.isSome() ? ["tox-button--icon"] : []),
        ...t.active ? ["tox-button--enabled"] : [],
        ...d ? ["tox-button--icon-and-text"] : []
      ],
      attributes: i
    }, g = [], p = e.translate(t.text.getOr("")), h = qt(p), y = [
      ...Rc([s.map((b) => b.asSpec())]),
      ...t.text.isSome() ? [h] : []
    ], v = Su(a, u.some(r), g, m, y, e);
    return Se.sketch(v);
  }, wu = (t, e, o) => {
    if (K2(t, e)) {
      const n = () => c, s = t, r = {
        ...t,
        type: "menubutton",
        search: u.none(),
        onSetup: (a) => (a.setEnabled(t.enabled), R),
        fetch: A2(s.items, n, o)
      }, c = St(mi(r, "tox-tbtn", o, u.none()));
      return c.asSpec();
    } else if (q2(t, e)) {
      const n = I_(t.name, e), s = {
        ...t,
        borderless: !1
      };
      return B_(s, n, o.shared.providers, []);
    } else {
      if (J2(t, e))
        return Z2(t, o.shared.providers);
      throw console.error("Unknown footer button type: ", e), new Error("Unknown footer button type");
    }
  }, Q2 = (t, e) => {
    const o = I_(t.name, "custom");
    return RH(u.none(), wt.parts.field({
      factory: Se,
      ...F_(t, u.some(o), e, [
        fu(""),
        fn.self()
      ])
    }));
  }, tU = { type: "separator" }, eU = (t) => ({
    type: "menuitem",
    value: t.url,
    text: t.title,
    meta: { attach: t.attach },
    onAction: R
  }), jp = (t, e) => ({
    type: "menuitem",
    value: e,
    text: t,
    meta: { attach: void 0 },
    onAction: R
  }), oU = (t) => B(t, eU), nU = (t, e) => Ht(e, (o) => o.type === t), R_ = (t, e) => oU(nU(t, e)), sU = (t) => R_("header", t.targets), rU = (t) => R_("anchor", t.targets), cU = (t) => u.from(t.anchorTop).map((e) => jp("<top>", e)).toArray(), aU = (t) => u.from(t.anchorBottom).map((e) => jp("<bottom>", e)).toArray(), iU = (t) => B(t, (e) => jp(e, e)), lU = (t) => Fe(t, (e, o) => e.length === 0 || o.length === 0 ? e.concat(o) : e.concat(tU, o), []), Yp = (t, e) => {
    const o = t.toLowerCase();
    return Ht(e, (n) => {
      var s;
      const r = n.meta !== void 0 && n.meta.text !== void 0 ? n.meta.text : n.text, c = (s = n.value) !== null && s !== void 0 ? s : "";
      return so(r.toLowerCase(), o) || so(c.toLowerCase(), o);
    });
  }, uU = (t, e, o) => {
    var n, s;
    const r = I.getValue(e), c = (s = (n = r == null ? void 0 : r.meta) === null || n === void 0 ? void 0 : n.text) !== null && s !== void 0 ? s : r.value;
    return o.getLinkInformation().fold(() => [], (i) => {
      const l = Yp(c, iU(o.getHistory(t)));
      return t === "file" ? lU([
        l,
        Yp(c, sU(i)),
        Yp(c, _e([
          cU(i),
          rU(i),
          aU(i)
        ]))
      ]) : l;
    });
  }, P_ = P("aria-invalid"), dU = (t, e, o, n) => {
    const s = e.shared.providers, r = (b) => {
      const x = I.getValue(b);
      o.addToHistory(x.value, t.filetype);
    }, c = {
      ...n.map((b) => ({ initialData: b })).getOr({}),
      dismissOnBlur: !0,
      inputClasses: ["tox-textfield"],
      sandboxClasses: ["tox-dialog__popups"],
      inputAttributes: {
        "aria-errormessage": P_,
        type: "url"
      },
      minChars: 0,
      responseTime: 0,
      fetch: (b) => {
        const x = uU(t.filetype, b, o), E = Uc(x, Fn.BUBBLE_TO_SANDBOX, e, {
          isHorizontalMenu: !1,
          search: u.none()
        });
        return $e.pure(E);
      },
      getHotspot: (b) => h.getOpt(b),
      onSetValue: (b, x) => {
        b.hasConfigured(qn) && qn.run(b).get(R);
      },
      typeaheadBehaviours: D([
        ...o.getValidationHandler().map((b) => qn.config({
          getRoot: (x) => ds(x.element),
          invalidClass: "tox-control-wrap--status-invalid",
          notify: {
            onInvalid: (x, E) => {
              d.getOpt(x).each((C) => {
                st(C.element, "title", s.translate(E));
              });
            }
          },
          validator: {
            validate: (x) => {
              const E = I.getValue(x);
              return Y2.nu((C) => {
                b({
                  type: t.filetype,
                  url: E.value
                }, (_) => {
                  if (_.status === "invalid") {
                    const A = ut.error(_.message);
                    C(A);
                  } else {
                    const A = ut.value(_.message);
                    C(A);
                  }
                });
              });
            },
            validateOnLoad: !1
          }
        })).toArray(),
        q.config({ disabled: () => !t.enabled || s.isDisabled() }),
        zt.config({}),
        nt("urlinput-events", [
          O(Sr(), (b) => {
            const x = Ss(b.element), E = x.trim();
            E !== x && Ar(b.element, E), t.filetype === "file" && U(b, yo, { name: t.name });
          }),
          O(pc(), (b) => {
            U(b, yo, { name: t.name }), r(b);
          }),
          O(Pd(), (b) => {
            U(b, yo, { name: t.name }), r(b);
          })
        ])
      ]),
      eventOrder: {
        [Sr()]: [
          "streaming",
          "urlinput-events",
          "invalidating"
        ]
      },
      model: {
        getDisplayText: (b) => b.value,
        selectsOver: !1,
        populateFromBrowse: !1
      },
      markers: { openClass: "tox-textfield--popup-open" },
      lazySink: e.shared.getSink,
      parts: { menu: Nl(!1, 1, "normal") },
      onExecute: (b, x, E) => {
        U(x, ci, {});
      },
      onItemExecute: (b, x, E, C) => {
        r(b), U(b, yo, { name: t.name });
      }
    }, a = wt.parts.field({
      ...c,
      factory: j2
    }), i = t.label.map((b) => er(b, s)), d = St(((b, x, E = b, C = b) => un(E, {
      tag: "div",
      classes: [
        "tox-icon",
        "tox-control-wrap__status-icon-" + b
      ],
      attributes: {
        title: s.translate(C),
        "aria-live": "polite",
        ...x.fold(() => ({}), (_) => ({ id: _ }))
      }
    }, s.icons))("invalid", u.some(P_), "warning")), m = St({
      dom: {
        tag: "div",
        classes: ["tox-control-wrap__status-icon-wrap"]
      },
      components: [d.asSpec()]
    }), g = o.getUrlPicker(t.filetype), p = P("browser.url.event"), h = St({
      dom: {
        tag: "div",
        classes: ["tox-control-wrap"]
      },
      components: [
        a,
        m.asSpec()
      ],
      behaviours: D([q.config({ disabled: () => !t.enabled || s.isDisabled() })])
    }), f = St(B_({
      name: t.name,
      icon: u.some("browse"),
      text: t.picker_text.or(t.label).getOr(""),
      enabled: t.enabled,
      primary: !1,
      buttonType: u.none(),
      borderless: !0
    }, (b) => xt(b, p), s, [], ["tox-browse-url"])), y = () => ({
      dom: {
        tag: "div",
        classes: ["tox-form__controls-h-stack"]
      },
      components: _e([
        [h.asSpec()],
        g.map(() => f.asSpec()).toArray()
      ])
    }), v = (b) => {
      mt.getCurrent(b).each((x) => {
        const E = I.getValue(x), C = {
          fieldname: t.name,
          ...E
        };
        g.each((_) => {
          _(C).get((A) => {
            I.setValue(x, A), U(b, yo, { name: t.name });
          });
        });
      });
    };
    return wt.sketch({
      dom: LH(),
      components: i.toArray().concat([y()]),
      fieldBehaviours: D([
        q.config({
          disabled: () => !t.enabled || s.isDisabled(),
          onDisabled: (b) => {
            wt.getField(b).each(q.disable), f.getOpt(b).each(q.disable);
          },
          onEnabled: (b) => {
            wt.getField(b).each(q.enable), f.getOpt(b).each(q.enable);
          }
        }),
        re(),
        nt("url-input-events", [O(p, v)])
      ])
    });
  }, mU = (t, e) => {
    const o = Xx(t.icon, e.icons);
    return Bn.sketch({
      dom: {
        tag: "div",
        attributes: { role: "alert" },
        classes: [
          "tox-notification",
          "tox-notification--in",
          `tox-notification--${t.level}`
        ]
      },
      components: [
        {
          dom: {
            tag: "div",
            classes: ["tox-notification__icon"],
            innerHtml: t.url ? void 0 : o
          },
          components: t.url ? [Se.sketch({
            dom: {
              tag: "button",
              classes: [
                "tox-button",
                "tox-button--naked",
                "tox-button--icon"
              ],
              innerHtml: o,
              attributes: { title: e.translate(t.iconTooltip) }
            },
            action: (n) => U(n, Kn, {
              name: "alert-banner",
              value: t.url
            }),
            buttonBehaviours: D([hg()])
          })] : void 0
        },
        {
          dom: {
            tag: "div",
            classes: ["tox-notification__body"],
            innerHtml: e.translate(t.text)
          }
        }
      ]
    });
  }, gU = (t, e) => {
    t.dom.checked = e;
  }, pU = (t) => t.dom.checked, hU = (t, e, o) => {
    const n = (i) => (i.element.dom.click(), u.some(!0)), s = wt.parts.field({
      factory: { sketch: Tt },
      dom: {
        tag: "input",
        classes: ["tox-checkbox__input"],
        attributes: { type: "checkbox" }
      },
      behaviours: D([
        fn.self(),
        q.config({
          disabled: () => !t.enabled || e.isDisabled(),
          onDisabled: (i) => {
            ds(i.element).each((l) => ee(l, "tox-checkbox--disabled"));
          },
          onEnabled: (i) => {
            ds(i.element).each((l) => Xt(l, "tox-checkbox--disabled"));
          }
        }),
        zt.config({}),
        Z.config({}),
        JT(o, pU, gU),
        z.config({
          mode: "special",
          onEnter: n,
          onSpace: n,
          stopSpaceKeyup: !0
        }),
        nt("checkbox-events", [O(pc(), (i, l) => {
          U(i, yo, { name: t.name });
        })])
      ])
    }), r = wt.parts.label({
      dom: {
        tag: "span",
        classes: ["tox-checkbox__label"]
      },
      components: [qt(e.translate(t.label))],
      behaviours: D([ai.config({})])
    }), c = (i) => un(i === "checked" ? "selected" : "unselected", {
      tag: "span",
      classes: [
        "tox-icon",
        "tox-checkbox-icon__" + i
      ]
    }, e.icons), a = St({
      dom: {
        tag: "div",
        classes: ["tox-checkbox__icons"]
      },
      components: [
        c("checked"),
        c("unchecked")
      ]
    });
    return wt.sketch({
      dom: {
        tag: "label",
        classes: ["tox-checkbox"]
      },
      components: [
        s,
        a.asSpec(),
        r
      ],
      fieldBehaviours: D([
        q.config({ disabled: () => !t.enabled || e.isDisabled() }),
        re()
      ])
    });
  }, fU = (t) => t.presets === "presentation" ? Bn.sketch({
    dom: {
      tag: "div",
      classes: ["tox-form__group"],
      innerHtml: t.html
    }
  }) : Bn.sketch({
    dom: {
      tag: "div",
      classes: ["tox-form__group"],
      innerHtml: t.html,
      attributes: { role: "document" }
    },
    containerBehaviours: D([
      zt.config({}),
      Z.config({})
    ])
  }), ce = (t) => (e, o, n, s) => Q(o, "name").fold(() => t(o, s, u.none()), (r) => e.field(r, t(o, s, Q(n, r)))), bU = (t) => (e, o, n, s) => {
    const r = jt(o, { source: "dynamic" });
    return ce(t)(e, r, n, s);
  }, vU = {
    bar: ce((t, e) => AH(t, e.shared)),
    collection: ce((t, e, o) => VH(t, e.shared.providers, o)),
    alertbanner: ce((t, e) => mU(t, e.shared.providers)),
    input: ce((t, e, o) => f2(t, e.shared.providers, o)),
    textarea: ce((t, e, o) => b2(t, e.shared.providers, o)),
    label: ce((t, e) => Gz(t, e.shared)),
    iframe: bU((t, e, o) => Hz(t, e.shared.providers, o)),
    button: ce((t, e) => Q2(t, e.shared.providers)),
    checkbox: ce((t, e, o) => hU(t, e.shared.providers, o)),
    colorinput: ce((t, e, o) => jH(t, e.shared, e.colorinput, o)),
    colorpicker: ce((t, e, o) => _z(t, e.shared.providers, o)),
    dropzone: ce((t, e, o) => Az(t, e.shared.providers, o)),
    grid: ce((t, e) => Dz(t, e.shared)),
    listbox: ce((t, e, o) => e2(t, e, o)),
    selectbox: ce((t, e, o) => r2(t, e.shared.providers, o)),
    sizeinput: ce((t, e) => g2(t, e.shared.providers)),
    slider: ce((t, e, o) => p2(t, e.shared.providers, o)),
    urlinput: ce((t, e, o) => dU(t, e, e.urlinput, o)),
    customeditor: ce(kz),
    htmlpanel: ce(fU),
    imagepreview: ce((t, e, o) => Wz(t, o)),
    table: ce((t, e) => h2(t, e.shared.providers)),
    tree: ce((t, e) => R2(t, e)),
    panel: ce((t, e) => o2(t, e))
  }, yU = {
    field: (t, e) => e,
    record: w([])
  }, L_ = (t, e, o, n) => {
    const s = jt(n, { shared: { interpreter: (r) => Xp(t, r, o, s) } });
    return Xp(t, e, o, s);
  }, Xp = (t, e, o, n) => Q(vU, e.type).fold(() => (console.error(`Unknown factory type "${e.type}", defaulting to container: `, e), e), (s) => s(t, e, o, n)), V_ = (t, e, o) => Xp(yU, t, e, o), cr = "layout-inset", Kp = (t) => t.x, H_ = (t, e) => t.x + t.width / 2 - e.width / 2, qp = (t, e) => t.x + t.width - e.width, Jp = (t) => t.y, Zp = (t, e) => t.y + t.height - e.height, N_ = (t, e) => t.y + t.height / 2 - e.height / 2, Tu = (t, e, o) => Ee(qp(t, e), Zp(t, e), o.insetSouthwest(), im(), "southwest", Ae(t, {
    right: 0,
    bottom: 3
  }), cr), _u = (t, e, o) => Ee(Kp(t), Zp(t, e), o.insetSoutheast(), am(), "southeast", Ae(t, {
    left: 1,
    bottom: 3
  }), cr), gi = (t, e, o) => Ee(qp(t, e), Jp(t), o.insetNorthwest(), cm(), "northwest", Ae(t, {
    right: 0,
    top: 2
  }), cr), pi = (t, e, o) => Ee(Kp(t), Jp(t), o.insetNortheast(), el(), "northeast", Ae(t, {
    left: 1,
    top: 2
  }), cr), vn = (t, e, o) => Ee(H_(t, e), Jp(t), o.insetNorth(), ev(), "north", Ae(t, { top: 2 }), cr), hi = (t, e, o) => Ee(H_(t, e), Zp(t, e), o.insetSouth(), ov(), "south", Ae(t, { bottom: 3 }), cr), z_ = (t, e, o) => Ee(qp(t, e), N_(t, e), o.insetEast(), sv(), "east", Ae(t, { right: 0 }), cr), U_ = (t, e, o) => Ee(Kp(t), N_(t, e), o.insetWest(), nv(), "west", Ae(t, { left: 1 }), cr), xU = (t) => {
    switch (t) {
      case "north":
        return vn;
      case "northeast":
        return pi;
      case "northwest":
        return gi;
      case "south":
        return hi;
      case "southeast":
        return _u;
      case "southwest":
        return Tu;
      case "east":
        return z_;
      case "west":
        return U_;
    }
  }, W_ = (t, e, o, n, s) => yv(n).map(xU).getOr(vn)(t, e, o, n, s), SU = (t) => {
    switch (t) {
      case "north":
        return hi;
      case "northeast":
        return _u;
      case "northwest":
        return Tu;
      case "south":
        return vn;
      case "southeast":
        return pi;
      case "southwest":
        return gi;
      case "east":
        return U_;
      case "west":
        return z_;
    }
  }, wU = (t, e, o, n, s) => yv(n).map(SU).getOr(vn)(t, e, o, n, s), fi = {
    valignCentre: [],
    alignCentre: [],
    alignLeft: [],
    alignRight: [],
    right: [],
    left: [],
    bottom: [],
    top: []
  }, TU = (t, e, o) => {
    const s = { maxHeightFunction: _c() }, r = () => ({
      type: "node",
      root: ic(qe(t())),
      node: u.from(t()),
      bubble: ws(12, 12, fi),
      layouts: {
        onRtl: () => [pi],
        onLtr: () => [gi]
      },
      overrides: s
    }), c = () => ({
      type: "hotspot",
      hotspot: e(),
      bubble: ws(-12, 12, fi),
      layouts: {
        onRtl: () => [
          De,
          Me,
          fe
        ],
        onLtr: () => [
          Me,
          De,
          fe
        ]
      },
      overrides: s
    });
    return () => o() ? r() : c();
  }, _U = (t, e, o, n) => {
    const r = { maxHeightFunction: _c() }, c = () => ({
      type: "node",
      root: ic(qe(e())),
      node: u.from(e()),
      bubble: ws(12, 12, fi),
      layouts: {
        onRtl: () => [vn],
        onLtr: () => [vn]
      },
      overrides: r
    }), a = () => t ? {
      type: "node",
      root: ic(qe(e())),
      node: u.from(e()),
      bubble: ws(0, -Ls(e()), fi),
      layouts: {
        onRtl: () => [Ue],
        onLtr: () => [Ue]
      },
      overrides: r
    } : {
      type: "hotspot",
      hotspot: o(),
      bubble: ws(0, 0, fi),
      layouts: {
        onRtl: () => [Ue],
        onLtr: () => [Ue]
      },
      overrides: r
    };
    return () => n() ? c() : a();
  }, CU = (t, e, o) => {
    const n = () => ({
      type: "node",
      root: ic(qe(t())),
      node: u.from(t()),
      layouts: {
        onRtl: () => [vn],
        onLtr: () => [vn]
      }
    }), s = () => ({
      type: "hotspot",
      hotspot: e(),
      layouts: {
        onRtl: () => [fe],
        onLtr: () => [fe]
      }
    });
    return () => o() ? n() : s();
  }, OU = (t, e) => () => ({
    type: "selection",
    root: e(),
    getSelection: () => {
      const o = t.selection.getRng(), n = t.model.table.getSelectedCells();
      if (n.length > 1) {
        const s = n[0], r = n[n.length - 1], c = {
          firstCell: F.fromDom(s),
          lastCell: F.fromDom(r)
        };
        return u.some(c);
      }
      return u.some(Ea.range(F.fromDom(o.startContainer), o.startOffset, F.fromDom(o.endContainer), o.endOffset));
    }
  }), kU = (t) => (e) => ({
    type: "node",
    root: t(),
    node: e
  }), EU = (t, e, o, n) => {
    const s = Fc(t), r = () => F.fromDom(t.getBody()), c = () => F.fromDom(t.getContentAreaContainer()), a = () => s || !n();
    return {
      inlineDialog: TU(c, e, a),
      inlineBottomDialog: _U(t.inline, c, o, a),
      banner: CU(c, e, a),
      cursor: OU(t, r),
      node: kU(r)
    };
  }, AU = (t) => (e, o) => {
    zw(t)(e, o);
  }, DU = (t) => () => Bw(t), MU = (t) => (e) => Ql(t, e), $U = (t) => (e) => Fw(t, e), FU = (t) => ({
    colorPicker: AU(t),
    hasCustomColors: DU(t),
    getColors: MU(t),
    getColorCols: $U(t)
  }), BU = (t) => () => pS(t), IU = (t) => ({ isDraggableModal: BU(t) }), RU = (t) => {
    const e = j(Og(t) ? "bottom" : "top");
    return {
      isPositionedAtTop: () => e.get() === "top",
      getDockingMode: e.get,
      setDockingMode: e.set
    };
  }, G_ = (t) => Ko(t, "items"), j_ = (t) => Ko(t, "format"), Y_ = [
    {
      title: "Headings",
      items: [
        {
          title: "Heading 1",
          format: "h1"
        },
        {
          title: "Heading 2",
          format: "h2"
        },
        {
          title: "Heading 3",
          format: "h3"
        },
        {
          title: "Heading 4",
          format: "h4"
        },
        {
          title: "Heading 5",
          format: "h5"
        },
        {
          title: "Heading 6",
          format: "h6"
        }
      ]
    },
    {
      title: "Inline",
      items: [
        {
          title: "Bold",
          format: "bold"
        },
        {
          title: "Italic",
          format: "italic"
        },
        {
          title: "Underline",
          format: "underline"
        },
        {
          title: "Strikethrough",
          format: "strikethrough"
        },
        {
          title: "Superscript",
          format: "superscript"
        },
        {
          title: "Subscript",
          format: "subscript"
        },
        {
          title: "Code",
          format: "code"
        }
      ]
    },
    {
      title: "Blocks",
      items: [
        {
          title: "Paragraph",
          format: "p"
        },
        {
          title: "Blockquote",
          format: "blockquote"
        },
        {
          title: "Div",
          format: "div"
        },
        {
          title: "Pre",
          format: "pre"
        }
      ]
    },
    {
      title: "Align",
      items: [
        {
          title: "Left",
          format: "alignleft"
        },
        {
          title: "Center",
          format: "aligncenter"
        },
        {
          title: "Right",
          format: "alignright"
        },
        {
          title: "Justify",
          format: "alignjustify"
        }
      ]
    }
  ], PU = (t) => At(t, "items"), LU = (t) => At(t, "block"), VU = (t) => At(t, "inline"), HU = (t) => At(t, "selector"), X_ = (t) => Fe(t, (e, o) => {
    if (PU(o)) {
      const n = X_(o.items);
      return {
        customFormats: e.customFormats.concat(n.customFormats),
        formats: e.formats.concat([{
          title: o.title,
          items: n.formats
        }])
      };
    } else if (VU(o) || LU(o) || HU(o)) {
      const s = `custom-${Ct(o.name) ? o.name : o.title.toLowerCase()}`;
      return {
        customFormats: e.customFormats.concat([{
          name: s,
          format: o
        }]),
        formats: e.formats.concat([{
          title: o.title,
          format: s,
          icon: o.icon
        }])
      };
    } else
      return {
        ...e,
        formats: e.formats.concat(o)
      };
  }, {
    customFormats: [],
    formats: []
  }), NU = (t, e) => {
    const o = X_(e), n = (s) => {
      Y(s, (r) => {
        t.formatter.has(r.name) || t.formatter.register(r.name, r.format);
      });
    };
    return t.formatter ? n(o.customFormats) : t.on("init", () => {
      n(o.customFormats);
    }), o.formats;
  }, K_ = (t) => Zx(t).map((e) => {
    const o = NU(t, e);
    return Qx(t) ? Y_.concat(o) : o;
  }).getOr(Y_), zU = (t) => {
    const e = ue(t);
    return e.length === 1 && ie(e, "title");
  }, q_ = (t, e, o) => ({
    ...t,
    type: "formatter",
    isSelected: e(t.format),
    getStylePreview: o(t.format)
  }), J_ = (t, e, o, n) => {
    const s = (i) => q_(i, o, n), r = (i) => {
      const l = a(i.items);
      return {
        ...i,
        type: "submenu",
        getStyleItems: w(l)
      };
    }, c = (i) => {
      const l = Ct(i.name) ? i.name : P(i.title), d = `custom-${l}`, m = {
        ...i,
        type: "formatter",
        format: d,
        isSelected: o(d),
        getStylePreview: n(d)
      };
      return t.formatter.register(l, m), m;
    }, a = (i) => B(i, (l) => G_(l) ? r(l) : j_(l) ? s(l) : zU(l) ? {
      ...l,
      type: "separator"
    } : c(l));
    return a(e);
  }, UU = (t) => {
    const e = (a) => () => t.formatter.match(a), o = (a) => () => {
      const i = t.formatter.get(a);
      return i !== void 0 ? u.some({
        tag: i.length > 0 && (i[0].inline || i[0].block) || "div",
        styles: t.dom.parseStyle(t.formatter.getCssText(a))
      }) : u.none();
    }, n = j([]), s = j([]), r = j(!1);
    return t.on("PreInit", (a) => {
      const i = K_(t), l = J_(t, i, e, o);
      n.set(l);
    }), t.on("addStyleModifications", (a) => {
      const i = J_(t, a.items, e, o);
      s.set(i), r.set(a.replace);
    }), { getData: () => {
      const a = r.get() ? [] : n.get(), i = s.get();
      return a.concat(i);
    } };
  }, WU = (t) => wo(t) && t.nodeType === 1, GU = Ds.trim, Z_ = (t) => (e) => !!(WU(e) && (e.contentEditable === t || e.getAttribute("data-mce-contenteditable") === t)), jU = Z_("true"), YU = Z_("false"), Q_ = (t, e, o, n, s) => ({
    type: t,
    title: e,
    url: o,
    level: n,
    attach: s
  }), XU = (t) => {
    let e = t;
    for (; e = e.parentNode; ) {
      const o = e.contentEditable;
      if (o && o !== "inherit")
        return jU(e);
    }
    return !1;
  }, KU = (t, e) => B(eo(F.fromDom(e), t), (o) => o.dom), tC = (t) => t.innerText || t.textContent, qU = (t) => t.id ? t.id : P("h"), JU = (t) => t && t.nodeName === "A" && (t.id || t.name) !== void 0, ZU = (t) => JU(t) && oC(t), eC = (t) => t && /^(H[1-6])$/.test(t.nodeName), oC = (t) => XU(t) && !YU(t), QU = (t) => eC(t) && oC(t), tW = (t) => eC(t) ? parseInt(t.nodeName.substr(1), 10) : 0, eW = (t) => {
    var e;
    const o = qU(t), n = () => {
      t.id = o;
    };
    return Q_("header", (e = tC(t)) !== null && e !== void 0 ? e : "", "#" + o, tW(t), n);
  }, oW = (t) => {
    const e = t.id || t.name, o = tC(t);
    return Q_("anchor", o || "#" + e, "#" + e, 0, R);
  }, nW = (t) => B(Ht(t, QU), eW), sW = (t) => B(Ht(t, ZU), oW), rW = (t) => KU("h1,h2,h3,h4,h5,h6,a:not([href])", t), cW = (t) => GU(t.title).length > 0, aW = { find: (t) => {
    const e = rW(t);
    return Ht(nW(e).concat(sW(e)), cW);
  } }, Cu = "tinymce-url-history", nC = 5, sC = (t) => Ct(t) && /^https?/.test(t), iW = (t) => as(t) && t.length <= nC && ac(t, sC), rC = (t) => Ps(t) && rd(t, (e) => !iW(e)).isNone(), cC = () => {
    const t = Wr.getItem(Cu);
    if (t === null)
      return {};
    let e;
    try {
      e = JSON.parse(t);
    } catch (o) {
      if (o instanceof SyntaxError)
        return console.log("Local storage " + Cu + " was not valid JSON", o), {};
      throw o;
    }
    return rC(e) ? e : (console.log("Local storage " + Cu + " was not valid format", e), {});
  }, lW = (t) => {
    if (!rC(t))
      throw new Error(`Bad format for history:
` + JSON.stringify(t));
    Wr.setItem(Cu, JSON.stringify(t));
  }, uW = (t) => {
    const e = cC();
    return Q(e, t).getOr([]);
  }, dW = (t, e) => {
    if (!sC(t))
      return;
    const o = cC(), n = Q(o, e).getOr([]), s = Ht(n, (r) => r !== t);
    o[e] = [t].concat(s).slice(0, nC), lW(o);
  }, aC = (t) => !!t, mW = (t) => me(Ds.makeMap(t, /[, ]/), aC), Qp = (t) => u.from(aS(t)), gW = (t) => {
    const e = u.from(uS(t)).filter(aC).map(mW);
    return Qp(t).fold(Lt, (o) => e.fold(Te, (n) => ue(n).length > 0 ? n : !1));
  }, pW = (t, e) => {
    const o = gW(t);
    return is(o) ? o ? Qp(t) : u.none() : o[e] ? Qp(t) : u.none();
  }, hW = (t, e) => pW(t, e).map((o) => (n) => $e.nu((s) => {
    const r = (a, i) => {
      if (!Ct(a))
        throw new Error("Expected value to be string");
      if (i !== void 0 && !Ps(i))
        throw new Error("Expected meta to be a object");
      s({
        value: a,
        meta: i
      });
    }, c = {
      filetype: e,
      fieldname: n.fieldname,
      ...u.from(n.meta).getOr({})
    };
    o.call(t, r, n.value, c);
  })), iC = (t) => u.from(t).filter(Ct).getOrUndefined(), fW = (t) => dS(t) ? u.some({
    targets: aW.find(t.getBody()),
    anchorTop: iC(mS(t)),
    anchorBottom: iC(gS(t))
  }) : u.none(), bW = (t) => u.from(iS(t)), vW = (t) => ({
    getHistory: uW,
    addToHistory: dW,
    getLinkInformation: () => fW(t),
    getValidationHandler: () => bW(t),
    getUrlPicker: (e) => hW(t, e)
  }), yW = (t, e, o, n) => {
    const s = j(!1), r = RU(e), c = {
      icons: () => e.ui.registry.getAll().icons,
      menuItems: () => e.ui.registry.getAll().menuItems,
      translate: Fo.translate,
      isDisabled: () => e.mode.isReadOnly() || !e.ui.isEnabled(),
      getOption: e.options.get
    }, a = vW(e), i = UU(e), l = FU(e), d = IU(e), m = () => s.get(), g = (y) => s.set(y), p = {
      shared: {
        providers: c,
        anchors: EU(e, o, n, r.isPositionedAtTop),
        header: r
      },
      urlinput: a,
      styles: i,
      colorinput: l,
      dialog: d,
      isContextMenuOpen: m,
      setContextMenuState: g
    }, h = {
      ...p,
      shared: {
        ...p.shared,
        interpreter: (y) => V_(y, {}, h),
        getSink: t.popup
      }
    }, f = {
      ...p,
      shared: {
        ...p.shared,
        interpreter: (y) => V_(y, {}, f),
        getSink: t.dialog
      }
    };
    return {
      popup: h,
      dialog: f
    };
  }, xW = (t, e, o) => {
    const n = (_, A) => {
      Y([
        e,
        ...o
      ], (M) => {
        M.broadcastEvent(_, A);
      });
    }, s = (_, A) => {
      Y([
        e,
        ...o
      ], (M) => {
        M.broadcastOn([_], A);
      });
    }, r = (_) => s(Xs(), { target: _.target }), c = xd(), a = to(c, "touchstart", r), i = to(c, "touchmove", (_) => n(eM(), _)), l = to(c, "touchend", (_) => n(oM(), _)), d = to(c, "mousedown", r), m = to(c, "mouseup", (_) => {
      _.raw.button === 0 && s($m(), { target: _.target });
    }), g = (_) => s(Xs(), { target: F.fromDom(_.target) }), p = (_) => {
      _.button === 0 && s($m(), { target: F.fromDom(_.target) });
    }, h = () => {
      Y(t.editorManager.get(), (_) => {
        t !== _ && _.dispatch("DismissPopups", { relatedTarget: t });
      });
    }, f = (_) => n(Vd(), Sv(_)), y = (_) => {
      s(Cc(), {}), n(Yi(), Sv(_));
    }, v = qe(F.fromDom(t.getElement())), b = wm(v, "scroll", (_) => {
      requestAnimationFrame(() => {
        const A = t.getContainer();
        if (A != null) {
          const ot = Gr(t, e.element).map((V) => [
            V.element,
            ...V.others
          ]).getOr([]);
          Xo(ot, (V) => Bt(V, _.target)) && (t.dispatch("ElementScroll", { target: _.target.dom }), n(Cb(), _));
        }
      });
    }), x = () => s(Cc(), {}), E = (_) => {
      _.state && s(Xs(), { target: F.fromDom(t.getContainer()) });
    }, C = (_) => {
      s(Xs(), { target: F.fromDom(_.relatedTarget.getContainer()) });
    };
    t.on("PostRender", () => {
      t.on("click", g), t.on("tap", g), t.on("mouseup", p), t.on("mousedown", h), t.on("ScrollWindow", f), t.on("ResizeWindow", y), t.on("ResizeEditor", x), t.on("AfterProgressState", E), t.on("DismissPopups", C);
    }), t.on("remove", () => {
      t.off("click", g), t.off("tap", g), t.off("mouseup", p), t.off("mousedown", h), t.off("ScrollWindow", f), t.off("ResizeWindow", y), t.off("ResizeEditor", x), t.off("AfterProgressState", E), t.off("DismissPopups", C), d.unbind(), a.unbind(), i.unbind(), l.unbind(), m.unbind(), b.unbind();
    }), t.on("detach", () => {
      Y([
        e,
        ...o
      ], PF), Y([
        e,
        ...o
      ], (_) => _.destroy());
    });
  }, de = DB, Zn = kB, SW = w([
    S("shell", !1),
    k("makeItem"),
    S("setupItem", R),
    cn.field("listBehaviours", [et])
  ]), wW = zo({
    name: "items",
    overrides: () => ({ behaviours: D([et.config({})]) })
  }), TW = w([wW]), _W = w("CustomList"), CW = (t, e, o, n) => {
    const s = (a, i) => {
      c(a).fold(() => {
        throw console.error("Custom List was defined to not be a shell, but no item container was specified in components"), new Error("Custom List was defined to not be a shell, but no item container was specified in components");
      }, (l) => {
        const d = et.contents(l), m = i.length, g = m - d.length, p = g > 0 ? od(g, () => t.makeItem()) : [], h = d.slice(m);
        Y(h, (y) => et.remove(l, y)), Y(p, (y) => et.append(l, y));
        const f = et.contents(l);
        Y(f, (y, v) => {
          t.setupItem(a, y, i[v], v);
        });
      });
    }, r = t.shell ? {
      behaviours: [et.config({})],
      components: []
    } : {
      behaviours: [],
      components: e
    }, c = (a) => t.shell ? u.some(a) : Dt(a, t, "items");
    return {
      uid: t.uid,
      dom: t.dom,
      components: r.components,
      behaviours: xe(t.listBehaviours, r.behaviours),
      apis: { setItems: s }
    };
  }, lC = Ge({
    name: _W(),
    configFields: SW(),
    partFields: TW(),
    factory: CW,
    apis: {
      setItems: (t, e, o) => {
        t.setItems(e, o);
      }
    }
  }), Wc = w([
    k("dom"),
    S("shell", !0),
    be("toolbarBehaviours", [et])
  ]), OW = w([zo({
    name: "groups",
    overrides: () => ({ behaviours: D([et.config({})]) })
  })]), kW = (t, e, o, n) => {
    const s = (a, i) => {
      r(a).fold(() => {
        throw console.error("Toolbar was defined to not be a shell, but no groups container was specified in components"), new Error("Toolbar was defined to not be a shell, but no groups container was specified in components");
      }, (l) => {
        et.set(l, i);
      });
    }, r = (a) => t.shell ? u.some(a) : Dt(a, t, "groups"), c = t.shell ? {
      behaviours: [et.config({})],
      components: []
    } : {
      behaviours: [],
      components: e
    };
    return {
      uid: t.uid,
      dom: t.dom,
      components: c.components,
      behaviours: xe(t.toolbarBehaviours, c.behaviours),
      apis: {
        setGroups: s,
        refresh: R
      },
      domModification: { attributes: { role: "group" } }
    };
  }, In = Ge({
    name: "Toolbar",
    configFields: Wc(),
    partFields: OW(),
    factory: kW,
    apis: {
      setGroups: (t, e, o) => {
        t.setGroups(e, o);
      }
    }
  }), EW = R, AW = Lt, uC = w([]);
  var DW = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    setup: EW,
    isDocked: AW,
    getBehaviours: uC
  });
  const th = (t) => (Sn(Ce(t, "position"), "fixed") ? u.none() : Ef(t)).orThunk(() => {
    const n = F.fromTag("span");
    return Tn(t).bind((s) => {
      Zo(s, n);
      const r = Ef(n);
      return ps(n), r;
    });
  }), dC = (t) => th(t).map(Jo).getOrThunk(() => Ut(0, 0)), MW = (t, e) => {
    const o = t.element;
    ee(o, e.transitionClass), Xt(o, e.fadeOutClass), ee(o, e.fadeInClass), e.onShow(t);
  }, $W = (t, e) => {
    const o = t.element;
    ee(o, e.transitionClass), Xt(o, e.fadeInClass), ee(o, e.fadeOutClass), e.onHide(t);
  }, FW = (t, e) => t.y < e.bottom && t.bottom > e.y, mC = (t, e) => t.y >= e.y, gC = (t, e) => t.bottom <= e.bottom, eh = (t, e, o) => ({
    location: "top",
    leftX: e,
    topY: o.bounds.y - t.y
  }), oh = (t, e, o) => ({
    location: "bottom",
    leftX: e,
    bottomY: t.bottom - o.bounds.bottom
  }), nh = (t) => t.box.x - t.win.x, BW = (t, e, o) => {
    const n = e.win, s = e.box, r = nh(e);
    return xn(t, (c) => {
      switch (c) {
        case "bottom":
          return gC(s, o.bounds) ? u.none() : u.some(oh(n, r, o));
        case "top":
          return mC(s, o.bounds) ? u.none() : u.some(eh(n, r, o));
        default:
          return u.none();
      }
    }).getOr({ location: "no-dock" });
  }, IW = (t, e, o) => ac(t, (n) => {
    switch (n) {
      case "bottom":
        return gC(e, o.bounds);
      case "top":
        return mC(e, o.bounds);
    }
  }), RW = (t, e) => {
    const o = e.optScrollEnv.fold(w(t.bounds.y), (n) => n.scrollElmTop + (t.bounds.y - n.currentScrollTop));
    return Ut(t.bounds.x, o);
  }, PW = (t, e) => {
    const o = e.optScrollEnv.fold(w(t.y), (n) => t.y + n.currentScrollTop - n.scrollElmTop);
    return Ut(t.x, o);
  }, sh = (t, e, o) => o.getInitialPos().map((n) => {
    const s = RW(n, e);
    return {
      box: pe(s.left, s.top, ro(t), ge(t)),
      location: n.location
    };
  }), pC = (t, e, o, n, s) => {
    const r = PW(e, o), c = pe(r.left, r.top, e.width, e.height);
    n.setInitialPos({
      style: Pf(t),
      position: Ne(t, "position") || "static",
      bounds: c,
      location: s.location
    });
  }, LW = (t, e, o, n, s) => {
    n.getInitialPos().fold(() => pC(t, e, o, n, s), () => R);
  }, hC = (t, e, o) => o.getInitialPos().bind((n) => {
    var s;
    switch (o.clearInitialPos(), n.position) {
      case "static":
        return u.some({ morph: "static" });
      case "absolute":
        const r = th(t).getOr(Nn()), c = Be(r), a = (s = r.dom.scrollTop) !== null && s !== void 0 ? s : 0;
        return u.some({
          morph: "absolute",
          positionCss: rn("absolute", Q(n.style, "left").map((i) => e.x - c.x), Q(n.style, "top").map((i) => e.y - c.y + a), Q(n.style, "right").map((i) => c.right - e.right), Q(n.style, "bottom").map((i) => c.bottom - e.bottom))
        });
      default:
        return u.none();
    }
  }), VW = (t, e, o) => sh(t, e, o).filter(({ box: n }) => IW(o.getModes(), n, e)).bind(({ box: n }) => hC(t, n, o)), rh = (t) => {
    switch (t.location) {
      case "top":
        return u.some({
          morph: "fixed",
          positionCss: rn("fixed", u.some(t.leftX), u.some(t.topY), u.none(), u.none())
        });
      case "bottom":
        return u.some({
          morph: "fixed",
          positionCss: rn("fixed", u.some(t.leftX), u.none(), u.none(), u.some(t.bottomY))
        });
      default:
        return u.none();
    }
  }, HW = (t, e, o) => {
    const n = Be(t), s = Ze(), r = BW(o.getModes(), {
      win: s,
      box: n
    }, e);
    return r.location === "top" || r.location === "bottom" ? (pC(t, n, e, o, r), rh(r)) : u.none();
  }, NW = (t, e, o) => VW(t, e, o).orThunk(() => e.optScrollEnv.bind((n) => sh(t, e, o)).bind(({ box: n, location: s }) => {
    const r = Ze(), c = nh({
      win: r,
      box: n
    }), a = s === "top" ? eh(r, c, e) : oh(r, c, e);
    return rh(a);
  })), zW = (t, e, o) => {
    const n = t.element;
    return Sn(Ce(n, "position"), "fixed") ? NW(n, e, o) : HW(n, e, o);
  }, UW = (t, e, o) => {
    const n = t.element;
    return sh(n, e, o).bind(({ box: s }) => hC(n, s, o));
  }, WW = (t, e, o, n) => {
    const s = Be(t), r = Ze(), c = nh({
      win: r,
      box: s
    }), a = n(r, c, e);
    return a.location === "bottom" || a.location === "top" ? (LW(t, s, e, o, a), rh(a)) : u.none();
  }, fC = (t, e, o) => {
    o.setDocked(!1), Y([
      "left",
      "right",
      "top",
      "bottom",
      "position"
    ], (n) => kt(t.element, n)), e.onUndocked(t);
  }, ch = (t, e, o, n) => {
    const s = n.position === "fixed";
    o.setDocked(s), hv(t.element, n), (s ? e.onDocked : e.onUndocked)(t);
  }, bC = (t, e, o, n, s = !1) => {
    e.contextual.each((r) => {
      r.lazyContext(t).each((c) => {
        const a = FW(c, n.bounds);
        a !== o.isVisible() && (o.setVisible(a), s && !a ? (Er(t.element, [r.fadeOutClass]), r.onHide(t)) : (a ? MW : $W)(t, r));
      });
    });
  }, vC = (t, e, o, n, s) => {
    bC(t, e, o, n, !0), ch(t, e, o, s.positionCss);
  }, GW = (t, e, o, n, s) => {
    switch (s.morph) {
      case "static":
        return fC(t, e, o);
      case "absolute":
        return ch(t, e, o, s.positionCss);
      case "fixed":
        return vC(t, e, o, n, s);
    }
  }, jW = (t, e, o) => {
    const n = e.lazyViewport(t);
    bC(t, e, o, n), zW(t, n, o).each((s) => {
      GW(t, e, o, n, s);
    });
  }, YW = (t, e, o) => {
    const n = t.element;
    o.setDocked(!1);
    const s = e.lazyViewport(t);
    UW(t, s, o).each((r) => {
      switch (r.morph) {
        case "static": {
          fC(t, e, o);
          break;
        }
        case "absolute": {
          ch(t, e, o, r.positionCss);
          break;
        }
      }
    }), o.setVisible(!0), e.contextual.each((r) => {
      nn(n, [
        r.fadeInClass,
        r.fadeOutClass,
        r.transitionClass
      ]), r.onShow(t);
    }), Ou(t, e, o);
  }, Ou = (t, e, o) => {
    t.getSystem().isConnected() && jW(t, e, o);
  }, yC = (t, e, o) => {
    o.isDocked() && YW(t, e, o);
  }, xC = (t) => (e, o, n) => {
    const s = o.lazyViewport(e);
    WW(e.element, s, n, t).each((c) => {
      vC(e, o, n, s, c);
    });
  }, XW = xC(eh), KW = xC(oh);
  var qW = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    refresh: Ou,
    reset: yC,
    isDocked: (t, e, o) => o.isDocked(),
    getModes: (t, e, o) => o.getModes(),
    setModes: (t, e, o, n) => o.setModes(n),
    forceDockToTop: XW,
    forceDockToBottom: KW
  }), JW = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    events: (t, e) => It([
      bc(wa(), (o, n) => {
        t.contextual.each((s) => {
          ao(o.element, s.transitionClass) && (nn(o.element, [
            s.transitionClass,
            s.fadeInClass
          ]), (e.isVisible() ? s.onShown : s.onHidden)(o)), n.stop();
        });
      }),
      O(Vd(), (o, n) => {
        Ou(o, t, e);
      }),
      O(Cb(), (o, n) => {
        Ou(o, t, e);
      }),
      O(Yi(), (o, n) => {
        yC(o, t, e);
      })
    ])
  }), ZW = [
    Eo("contextual", [
      se("fadeInClass"),
      se("fadeOutClass"),
      se("transitionClass"),
      tn("lazyContext"),
      pt("onShow"),
      pt("onShown"),
      pt("onHide"),
      pt("onHidden")
    ]),
    he("lazyViewport", () => ({
      bounds: Ze(),
      optScrollEnv: u.none()
    })),
    vr("modes", [
      "top",
      "bottom"
    ], ve),
    pt("onDocked"),
    pt("onUndocked")
  ], QW = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    init: (t) => {
      const e = j(!1), o = j(!0), n = Pt(), s = j(t.modes), r = () => `docked:  ${e.get()}, visible: ${o.get()}, modes: ${s.get().join(",")}`;
      return Do({
        isDocked: e.get,
        setDocked: e.set,
        getInitialPos: n.get,
        setInitialPos: n.set,
        clearInitialPos: n.clear,
        isVisible: o.get,
        setVisible: o.set,
        getModes: s.get,
        setModes: s.set,
        readState: r
      });
    }
  });
  const Kt = ye({
    fields: ZW,
    name: "docking",
    active: JW,
    apis: qW,
    state: QW
  }), ah = w(P("toolbar-height-change")), Qn = {
    fadeInClass: "tox-editor-dock-fadein",
    fadeOutClass: "tox-editor-dock-fadeout",
    transitionClass: "tox-editor-dock-transition"
  }, SC = "tox-tinymce--toolbar-sticky-on", wC = "tox-tinymce--toolbar-sticky-off", t3 = (t, e) => {
    const o = wn(e), s = ma(e).dom.innerHeight, r = Qo(o), c = F.fromDom(t.elm), a = fr(c), i = ge(c), l = a.y, d = l + i, m = Jo(e), g = ge(e), p = m.top, h = p + g, f = Math.abs(p - r.top) < 2, y = Math.abs(h - (r.top + s)) < 2;
    if (f && l < h)
      Jf(r.left, l - g, o);
    else if (y && d > p) {
      const v = l - s + i + g;
      Jf(r.left, v, o);
    }
  }, ku = (t, e) => ie(Kt.getModes(t), e), ih = (t) => {
    const e = (n) => Ls(n) + (parseInt(Ne(n, "margin-top"), 10) || 0) + (parseInt(Ne(n, "margin-bottom"), 10) || 0), o = t.element;
    ds(o).each((n) => {
      const s = "padding-" + Kt.getModes(t)[0];
      if (Kt.isDocked(t)) {
        const r = ro(n);
        rt(o, "width", r + "px"), rt(n, s, e(o) + "px");
      } else
        kt(o, "width"), kt(n, s);
    });
  }, TC = (t, e) => {
    e ? (Xt(t, Qn.fadeOutClass), Er(t, [
      Qn.transitionClass,
      Qn.fadeInClass
    ])) : (Xt(t, Qn.fadeInClass), Er(t, [
      Qn.fadeOutClass,
      Qn.transitionClass
    ]));
  }, _C = (t, e) => {
    const o = F.fromDom(t.getContainer());
    e ? (ee(o, SC), Xt(o, wC)) : (ee(o, wC), Xt(o, SC));
  }, e3 = (t, e) => {
    const o = wn(e);
    jn(o).filter((n) => !Bt(e, n)).filter((n) => Bt(n, F.fromDom(o.dom.body)) || Bi(t, n)).each(() => sn(e));
  }, o3 = (t, e) => Dn(t).orThunk(() => e().toOptional().bind((o) => Dn(o.element))), n3 = (t, e, o) => {
    t.inline || (e.header.isPositionedAtTop() || t.on("ResizeEditor", () => {
      o().each(Kt.reset);
    }), t.on("ResizeWindow ResizeEditor", () => {
      o().each(ih);
    }), t.on("SkinLoaded", () => {
      o().each((n) => {
        Kt.isDocked(n) ? Kt.reset(n) : Kt.refresh(n);
      });
    }), t.on("FullscreenStateChanged", () => {
      o().each(Kt.reset);
    })), t.on("AfterScrollIntoView", (n) => {
      o().each((s) => {
        Kt.refresh(s);
        const r = s.element;
        Uy(r) && t3(n, r);
      });
    }), t.on("PostRender", () => {
      _C(t, !1);
    });
  }, s3 = (t) => t().map(Kt.isDocked).getOr(!1), r3 = () => [po.config({ channels: { [ah()]: { onReceive: ih } } })], CC = (t, e) => {
    const o = Pt(), n = e.getSink, s = (a) => {
      n().each((i) => a(i.element));
    }, r = (a) => {
      t.inline || ih(a), _C(t, Kt.isDocked(a)), a.getSystem().broadcastOn([Cc()], {}), n().each((i) => i.getSystem().broadcastOn([Cc()], {}));
    }, c = t.inline ? [] : r3();
    return [
      Z.config({}),
      Kt.config({
        contextual: {
          lazyContext: (a) => {
            const i = Ls(a.element), l = t.inline ? t.getContentAreaContainer() : t.getContainer();
            return u.from(l).map((d) => {
              const m = Be(F.fromDom(d));
              return Gr(t, a.element).fold(() => {
                const p = m.height - i, h = m.y + (ku(a, "top") ? 0 : i);
                return pe(m.x, h, m.width, p);
              }, (p) => {
                const h = wd(m, Hc(p)), f = ku(a, "top") ? h.y : h.y + i;
                return pe(h.x, f, h.width, h.height - i);
              });
            });
          },
          onShow: () => {
            s((a) => TC(a, !0));
          },
          onShown: (a) => {
            s((i) => nn(i, [
              Qn.transitionClass,
              Qn.fadeInClass
            ])), o.get().each((i) => {
              e3(a.element, i), o.clear();
            });
          },
          onHide: (a) => {
            o3(a.element, n).fold(o.clear, o.set), s((i) => TC(i, !1));
          },
          onHidden: () => {
            s((a) => nn(a, [Qn.transitionClass]));
          },
          ...Qn
        },
        lazyViewport: (a) => Gr(t, a.element).fold(() => {
          const l = Ze(), d = rS(t), m = l.y + (ku(a, "top") ? d : 0), g = l.height - (ku(a, "bottom") ? d : 0);
          return {
            bounds: pe(l.x, m, l.width, g),
            optScrollEnv: u.none()
          };
        }, (l) => ({
          bounds: Hc(l),
          optScrollEnv: u.some({
            currentScrollTop: l.element.dom.scrollTop,
            scrollElmTop: Jo(l.element).top
          })
        })),
        modes: [e.header.getDockingMode()],
        onDocked: r,
        onUndocked: r
      }),
      ...c
    ];
  };
  var c3 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    setup: n3,
    isDocked: s3,
    getBehaviours: CC
  });
  const a3 = (t) => {
    const e = t.editor, o = t.sticky ? CC : uC;
    return {
      uid: t.uid,
      dom: t.dom,
      components: t.components,
      behaviours: D(o(e, t.sharedBackstage))
    };
  }, i3 = X([
    Zt,
    Oo("items", Ed([
      Ad([
        Pg,
        ko("items", ve)
      ]),
      ve
    ]))
  ].concat(Xa)), l3 = (t) => Yt("GroupToolbarButton", i3, t), u3 = [
    ze("text"),
    ze("tooltip"),
    ze("icon"),
    Vo("search", !1, Ed([
      va,
      X([ze("placeholder")])
    ], (t) => is(t) ? t ? u.some({ placeholder: u.none() }) : u.none() : u.some(t))),
    tn("fetch"),
    he("onSetup", () => R)
  ], OC = X([
    Zt,
    ...u3
  ]), kC = (t) => Yt("menubutton", OC, t), d3 = X([
    Zt,
    Gl,
    Go,
    Js,
    PP,
    $P,
    Nr,
    Un("presets", "normal", [
      "normal",
      "color",
      "listpreview"
    ]),
    YS(1),
    Bc,
    BP
  ]), m3 = (t) => Yt("SplitButton", d3, t);
  var lh = $o({
    factory: (t, e) => {
      const o = (s, r) => {
        const c = B(r, (a) => {
          const i = {
            type: "menubutton",
            text: a.text,
            fetch: (d) => {
              d(a.getItems());
            }
          }, l = kC(i).mapError((d) => dc(d)).getOrDie();
          return mi(l, "tox-mbtn", e.backstage, u.some("menuitem"));
        });
        et.set(s, c);
      }, n = {
        focus: z.focusIn,
        setMenus: o
      };
      return {
        uid: t.uid,
        dom: t.dom,
        components: [],
        behaviours: D([
          et.config({}),
          nt("menubar-events", [
            Vt((s) => {
              t.onSetup(s);
            }),
            O(vs(), (s, r) => {
              Jt(s.element, ".tox-mbtn--active").each((c) => {
                An(r.event.target, ".tox-mbtn").each((a) => {
                  Bt(c, a) || s.getSystem().getByDom(c).each((i) => {
                    s.getSystem().getByDom(a).each((l) => {
                      jo.expand(l), jo.close(i), Z.focus(l);
                    });
                  });
                });
              });
            }),
            O(Xi(), (s, r) => {
              r.event.prevFocus.bind((c) => s.getSystem().getByDom(c).toOptional()).each((c) => {
                r.event.newFocus.bind((a) => s.getSystem().getByDom(a).toOptional()).each((a) => {
                  jo.isOpen(c) && (jo.expand(a), jo.close(c));
                });
              });
            })
          ]),
          z.config({
            mode: "flow",
            selector: ".tox-mbtn",
            onEscape: (s) => (t.onEscape(s), u.some(!0))
          }),
          zt.config({})
        ]),
        apis: n,
        domModification: { attributes: { role: "menubar" } }
      };
    },
    name: "silver.Menubar",
    configFields: [
      k("dom"),
      k("uid"),
      k("onEscape"),
      k("backstage"),
      S("onSetup", R)
    ],
    apis: {
      focus: (t, e) => {
        t.focus(e);
      },
      setMenus: (t, e, o) => {
        t.setMenus(e, o);
      }
    }
  });
  const g3 = "⚡️Upgrade", p3 = "https://www.tiny.cloud/tinymce-self-hosted-premium-features/?utm_campaign=self_hosted_upgrade_promo&utm_source=tiny&utm_medium=referral", h3 = (t) => ({
    uid: t.uid,
    dom: t.dom,
    components: [{
      dom: {
        tag: "a",
        attributes: {
          href: p3,
          rel: "noopener",
          target: "_blank",
          "aria-hidden": "true"
        },
        classes: ["tox-promotion-link"],
        innerHtml: g3
      }
    }]
  }), EC = "container", f3 = [be("slotBehaviours", [])], AC = (t) => "<alloy.field." + t + ">", b3 = (t) => {
    const e = (() => {
      const r = [];
      return {
        slot: (a, i) => (r.push(a), zm(EC, AC(a), i)),
        record: w(r)
      };
    })(), o = t(e), n = e.record(), s = B(n, (r) => Pe({
      name: r,
      pname: AC(r)
    }));
    return Ym(EC, f3, s, v3, o);
  }, v3 = (t, e) => {
    const o = (f) => _y(t), n = (f, y) => Dt(f, t, y), s = (f, y) => (v, b) => Dt(v, t, b).map((x) => f(x, b)).getOr(y), r = (f) => (y, v) => {
      Y(v, (b) => f(y, b));
    }, c = (f, y) => He(f.element, "aria-hidden") !== "true", a = (f, y) => {
      if (!c(f)) {
        const v = f.element;
        kt(v, "display"), Qt(v, "aria-hidden"), U(f, Hd(), {
          name: y,
          visible: !0
        });
      }
    }, i = (f, y) => {
      if (c(f)) {
        const v = f.element;
        rt(v, "display", "none"), st(v, "aria-hidden", "true"), U(f, Hd(), {
          name: y,
          visible: !1
        });
      }
    }, l = s(c, !1), d = s(i), m = r(d), g = (f) => m(f, o()), p = s(a), h = {
      getSlotNames: o,
      getSlot: n,
      isShowing: l,
      hideSlot: d,
      hideAllSlots: g,
      showSlot: p
    };
    return {
      uid: t.uid,
      dom: t.dom,
      components: e,
      behaviours: dl(t.slotBehaviours),
      apis: h
    };
  }, Le = {
    ...me({
      getSlotNames: (t, e) => t.getSlotNames(e),
      getSlot: (t, e, o) => t.getSlot(e, o),
      isShowing: (t, e, o) => t.isShowing(e, o),
      hideSlot: (t, e, o) => t.hideSlot(e, o),
      hideAllSlots: (t, e) => t.hideAllSlots(e),
      showSlot: (t, e, o) => t.showSlot(e, o)
    }, (t) => Zi(t)),
    sketch: b3
  }, y3 = X([
    Go,
    Gl,
    he("onShow", R),
    he("onHide", R),
    Nr
  ]), x3 = (t) => Yt("sidebar", y3, t), S3 = (t) => {
    const { sidebars: e } = t.ui.registry.getAll();
    Y(ue(e), (o) => {
      const n = e[o], s = () => Sn(u.from(t.queryCommandValue("ToggleSidebar")), o);
      t.ui.registry.addToggleButton(o, {
        icon: n.icon,
        tooltip: n.tooltip,
        onAction: (r) => {
          t.execCommand("ToggleSidebar", !1, o), r.setActive(s());
        },
        onSetup: (r) => {
          r.setActive(s());
          const c = () => r.setActive(s());
          return t.on("ToggleSidebar", c), () => {
            t.off("ToggleSidebar", c);
          };
        }
      });
    });
  }, w3 = (t) => ({ element: () => t.element.dom }), T3 = (t, e) => {
    const o = B(ue(e), (n) => {
      const s = e[n], r = On(x3(s));
      return {
        name: n,
        getApi: w3,
        onSetup: r.onSetup,
        onShow: r.onShow,
        onHide: r.onHide
      };
    });
    return B(o, (n) => {
      const s = j(R);
      return t.slot(n.name, {
        dom: {
          tag: "div",
          classes: ["tox-sidebar__pane"]
        },
        behaviours: Ka.unnamedEvents([
          Zs(n, s),
          Qs(n, s),
          O(Hd(), (r, c) => {
            const a = c.event;
            Gt(o, (l) => l.name === a.name).each((l) => {
              (a.visible ? l.onShow : l.onHide)(l.getApi(r));
            });
          })
        ])
      });
    });
  }, _3 = (t) => Le.sketch((e) => ({
    dom: {
      tag: "div",
      classes: ["tox-sidebar__pane-container"]
    },
    components: T3(e, t),
    slotBehaviours: Ka.unnamedEvents([Vt((o) => Le.hideAllSlots(o))])
  })), C3 = (t, e, o) => {
    mt.getCurrent(t).each((s) => {
      et.set(s, [_3(e)]);
      const r = o == null ? void 0 : o.toLowerCase();
      Ct(r) && At(e, r) && mt.getCurrent(s).each((c) => {
        Le.showSlot(c, r), xo.immediateGrow(s), kt(s.element, "width"), Eu(t.element, "region");
      });
    });
  }, Eu = (t, e) => {
    st(t, "role", e);
  }, O3 = (t, e) => {
    mt.getCurrent(t).each((n) => {
      mt.getCurrent(n).each((r) => {
        xo.hasGrown(n) ? Le.isShowing(r, e) ? (xo.shrink(n), Eu(t.element, "presentation")) : (Le.hideAllSlots(r), Le.showSlot(r, e), Eu(t.element, "region")) : (Le.hideAllSlots(r), Le.showSlot(r, e), xo.grow(n), Eu(t.element, "region"));
      });
    });
  }, k3 = (t) => mt.getCurrent(t).bind((o) => xo.isGrowing(o) || xo.hasGrown(o) ? mt.getCurrent(o).bind((r) => Gt(Le.getSlotNames(r), (c) => Le.isShowing(r, c))) : u.none()), uh = P("FixSizeEvent"), dh = P("AutoSizeEvent"), E3 = (t) => ({
    uid: t.uid,
    dom: {
      tag: "div",
      classes: ["tox-sidebar"],
      attributes: { role: "presentation" }
    },
    components: [{
      dom: {
        tag: "div",
        classes: ["tox-sidebar__slider"]
      },
      components: [],
      behaviours: D([
        zt.config({}),
        Z.config({}),
        xo.config({
          dimension: { property: "width" },
          closedClass: "tox-sidebar--sliding-closed",
          openClass: "tox-sidebar--sliding-open",
          shrinkingClass: "tox-sidebar--sliding-shrinking",
          growingClass: "tox-sidebar--sliding-growing",
          onShrunk: (e) => {
            mt.getCurrent(e).each(Le.hideAllSlots), xt(e, dh);
          },
          onGrown: (e) => {
            xt(e, dh);
          },
          onStartGrow: (e) => {
            U(e, uh, { width: Ce(e.element, "width").getOr("") });
          },
          onStartShrink: (e) => {
            U(e, uh, { width: ro(e.element) + "px" });
          }
        }),
        et.config({}),
        mt.config({
          find: (e) => {
            const o = et.contents(e);
            return yn(o);
          }
        })
      ])
    }],
    behaviours: D([
      fn.childAt(0),
      nt("sidebar-sliding-events", [
        O(uh, (e, o) => {
          rt(e.element, "width", o.event.width);
        }),
        O(dh, (e, o) => {
          kt(e.element, "width");
        })
      ])
    ])
  });
  var A3 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    block: (t, e, o, n) => {
      st(t.element, "aria-busy", !0);
      const s = e.getRoot(t).getOr(t), r = D([
        z.config({
          mode: "special",
          onTab: () => u.some(!0),
          onShiftTab: () => u.some(!0)
        }),
        Z.config({})
      ]), c = n(s, r), a = s.getSystem().build(c);
      et.append(s, No(a)), a.hasConfigured(z) && e.focus && z.focusIn(a), o.isBlocked() || e.onBlock(t), o.blockWith(() => et.remove(s, a));
    },
    unblock: (t, e, o) => {
      Qt(t.element, "aria-busy"), o.isBlocked() && e.onUnblock(t), o.clear();
    },
    isBlocked: (t, e, o) => o.isBlocked()
  }), D3 = [
    he("getRoot", u.none),
    Ie("focus", !0),
    pt("onBlock"),
    pt("onUnblock")
  ], M3 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    init: () => {
      const t = d0(), e = (o) => {
        t.set({ destroy: o });
      };
      return Do({
        readState: t.isSet,
        blockWith: e,
        clear: t.clear,
        isBlocked: t.isSet
      });
    }
  });
  const Rn = ye({
    fields: D3,
    name: "blocking",
    apis: A3,
    state: M3
  }), $3 = (t) => (e, o) => ({
    dom: {
      tag: "div",
      attributes: {
        "aria-label": t.translate("Loading..."),
        tabindex: "0"
      },
      classes: ["tox-throbber__busy-spinner"]
    },
    components: [{ dom: Os('<div class="tox-spinner"><div></div><div></div><div></div></div>') }]
  }), DC = (t) => mt.getCurrent(t).each((e) => sn(e.element, !0)), F3 = (t, e) => {
    const o = "tabindex", n = `data-mce-${o}`;
    u.from(t.iframeElement).map(F.fromDom).each((s) => {
      e ? (Je(s, o).each((r) => st(s, n, r)), st(s, o, -1)) : (Qt(s, o), Je(s, n).each((r) => {
        st(s, o, r), Qt(s, n);
      }));
    });
  }, B3 = (t, e, o, n) => {
    const s = e.element;
    if (F3(t, o), o)
      Rn.block(e, $3(n)), kt(s, "display"), Qt(s, "aria-hidden"), t.hasFocus() && DC(e);
    else {
      const r = mt.getCurrent(e).exists((c) => ka(c.element));
      Rn.unblock(e), rt(s, "display", "none"), st(s, "aria-hidden", "true"), r && t.focus();
    }
  }, I3 = (t) => ({
    uid: t.uid,
    dom: {
      tag: "div",
      attributes: { "aria-hidden": "true" },
      classes: ["tox-throbber"],
      styles: { display: "none" }
    },
    behaviours: D([
      et.config({}),
      Rn.config({ focus: !1 }),
      mt.config({ find: (e) => yn(e.components()) })
    ]),
    components: []
  }), R3 = (t) => t.type === "focusin", P3 = (t) => R3(t) ? (t.composed ? yn(t.composedPath()) : u.from(t.target)).map(F.fromDom).filter(_o).exists((o) => ao(o, "mce-pastebin")) : !1, L3 = (t, e, o) => {
    const n = j(!1), s = Pt(), r = (a) => {
      n.get() && !P3(a) && (a.preventDefault(), DC(e()), t.editorManager.setActive(t));
    };
    t.inline || t.on("PreInit", () => {
      t.dom.bind(t.getWin(), "focusin", r), t.on("BeforeExecCommand", (a) => {
        a.command.toLowerCase() === "mcefocus" && a.value !== !0 && r(a);
      });
    });
    const c = (a) => {
      a !== n.get() && (n.set(a), B3(t, e(), a, o.providers), KL(t, a));
    };
    t.on("ProgressState", (a) => {
      if (s.on(clearTimeout), Vn(a.time)) {
        const i = Dl.setEditorTimeout(t, () => c(a.state), a.time);
        s.set(i);
      } else
        c(a.state), s.clear();
    });
  }, V3 = (t, e) => Fe(t, (s, r) => e(r, s.len).fold(w(s), (a) => ({
    len: a.finish,
    list: s.list.concat([a])
  })), {
    len: 0,
    list: []
  }).list, mh = (t, e, o) => ({
    within: t,
    extra: e,
    withinWidth: o
  }), MC = (t, e, o) => {
    const n = V3(t, (a, i) => {
      const l = o(a);
      return u.some({
        element: a,
        start: i,
        finish: i + l,
        width: l
      });
    }), s = Ht(n, (a) => a.finish <= e), r = rc(s, (a, i) => a + i.width, 0), c = n.slice(s.length);
    return {
      within: s,
      extra: c,
      withinWidth: r
    };
  }, Au = (t) => B(t, (e) => e.element), H3 = (t, e, o) => {
    const n = Au(t.concat(e));
    return mh(n, [], o);
  }, N3 = (t, e, o, n) => {
    const s = Au(t).concat([o]);
    return mh(s, Au(e), n);
  }, z3 = (t, e, o) => mh(Au(t), [], o), U3 = (t, e, o) => {
    const n = MC(e, t, o);
    return n.extra.length === 0 ? u.some(n) : u.none();
  }, W3 = (t, e, o, n) => {
    const s = U3(t, e, o).getOrThunk(() => MC(e, t - o(n), o)), r = s.within, c = s.extra, a = s.withinWidth;
    return c.length === 1 && c[0].width <= o(n) ? H3(r, c, a) : c.length >= 1 ? N3(r, c, n, a) : z3(r, c, a);
  }, $C = (t, e) => {
    const o = B(e, (n) => No(n));
    In.setGroups(t, o);
  }, G3 = (t) => xn(t, (e) => Dn(e.element).bind((o) => e.getSystem().getByDom(o).toOptional())), FC = (t, e, o) => {
    const n = e.builtGroups.get();
    if (n.length === 0)
      return;
    const s = Ks(t, e, "primary"), r = Wt.getCoupled(t, "overflowGroup");
    rt(s.element, "visibility", "hidden");
    const c = n.concat([r]), a = G3(c);
    o([]), $C(s, c);
    const i = ro(s.element), l = W3(i, e.builtGroups.get(), (d) => ro(d.element), r);
    l.extra.length === 0 ? (et.remove(s, r), o([])) : ($C(s, l.within), o(l.extra)), kt(s.element, "visibility"), pa(s.element), a.each(Z.focus);
  }, BC = w([
    be("splitToolbarBehaviours", [Wt]),
    Qe("builtGroups", () => j([]))
  ]), j3 = w([
    Mr(["overflowToggledClass"]),
    br("getOverflowBounds"),
    k("lazySink"),
    Qe("overflowGroups", () => j([])),
    pt("onOpened"),
    pt("onClosed")
  ].concat(BC())), Y3 = w([
    Pe({
      factory: In,
      schema: Wc(),
      name: "primary"
    }),
    an({
      schema: Wc(),
      name: "overflow"
    }),
    an({ name: "overflow-button" }),
    an({ name: "overflow-group" })
  ]), gh = w((t, e) => {
    gA(t, Math.floor(e));
  }), X3 = w([
    Mr(["toggledClass"]),
    k("lazySink"),
    tn("fetch"),
    br("getBounds"),
    Eo("fireDismissalEventInstead", [S("event", _r())]),
    Ys(),
    pt("onToggled")
  ]), K3 = w([
    an({
      name: "button",
      overrides: (t) => ({
        dom: { attributes: { "aria-haspopup": "true" } },
        buttonBehaviours: D([ct.config({
          toggleClass: t.markers.toggledClass,
          aria: { mode: "expanded" },
          toggleOnExecute: !1,
          onToggled: t.onToggled
        })])
      })
    }),
    an({
      factory: In,
      schema: Wc(),
      name: "toolbar",
      overrides: (t) => ({
        toolbarBehaviours: D([z.config({
          mode: "cyclic",
          onEscape: (e) => (Dt(e, t, "button").each(Z.focus), u.none())
        })])
      })
    })
  ]), Du = Pt(), q3 = (t, e) => {
    Du.set(!0), ph(t, e), Du.clear();
  }, ph = (t, e) => {
    const o = Wt.getCoupled(t, "toolbarSandbox");
    ht.isOpen(o) ? ht.close(o) : ht.open(o, e.toolbar());
  }, hh = (t, e, o, n) => {
    const s = o.getBounds.map((c) => c()), r = o.lazySink(t).getOrDie();
    We.positionWithinBounds(r, e, {
      anchor: {
        type: "hotspot",
        hotspot: t,
        layouts: n,
        overrides: { maxWidthFunction: gh() }
      }
    }, s);
  }, IC = (t, e, o, n, s) => {
    In.setGroups(e, s), hh(t, e, o, n), ct.on(t);
  }, J3 = (t, e, o) => {
    const n = qb(), s = (c, a) => {
      const i = Du.get().getOr(!1);
      o.fetch().get((l) => {
        IC(t, a, o, e.layouts, l), n.link(t.element), i || z.focusIn(a);
      });
    }, r = () => {
      ct.off(t), Du.get().getOr(!1) || Z.focus(t), n.unlink(t.element);
    };
    return {
      dom: {
        tag: "div",
        attributes: { id: n.id }
      },
      behaviours: D([
        z.config({
          mode: "special",
          onEscape: (c) => (ht.close(c), u.some(!0))
        }),
        ht.config({
          onOpen: s,
          onClose: r,
          isPartOf: (c, a, i) => Dr(a, i) || Dr(t, i),
          getAttachPoint: () => o.lazySink(t).getOrDie()
        }),
        po.config({
          channels: {
            ...Fm({
              isExtraPart: Lt,
              ...o.fireDismissalEventInstead.map((c) => ({ fireEventInstead: { event: c.event } })).getOr({})
            }),
            ...Bm({
              doReposition: () => {
                ht.getState(Wt.getCoupled(t, "toolbarSandbox")).each((c) => {
                  hh(t, c, o, e.layouts);
                });
              }
            })
          }
        })
      ])
    };
  }, ar = Ge({
    name: "FloatingToolbarButton",
    factory: (t, e, o, n) => ({
      ...Se.sketch({
        ...n.button(),
        action: (s) => {
          ph(s, n);
        },
        buttonBehaviours: cn.augment({ dump: n.button().buttonBehaviours }, [Wt.config({
          others: {
            toolbarSandbox: (s) => J3(s, o, t)
          }
        })])
      }),
      apis: {
        setGroups: (s, r) => {
          ht.getState(Wt.getCoupled(s, "toolbarSandbox")).each((c) => {
            IC(s, c, t, o.layouts, r);
          });
        },
        reposition: (s) => {
          ht.getState(Wt.getCoupled(s, "toolbarSandbox")).each((r) => {
            hh(s, r, t, o.layouts);
          });
        },
        toggle: (s) => {
          ph(s, n);
        },
        toggleWithoutFocusing: (s) => {
          q3(s, n);
        },
        getToolbar: (s) => ht.getState(Wt.getCoupled(s, "toolbarSandbox")),
        isOpen: (s) => ht.isOpen(Wt.getCoupled(s, "toolbarSandbox"))
      }
    }),
    configFields: X3(),
    partFields: K3(),
    apis: {
      setGroups: (t, e, o) => {
        t.setGroups(e, o);
      },
      reposition: (t, e) => {
        t.reposition(e);
      },
      toggle: (t, e) => {
        t.toggle(e);
      },
      toggleWithoutFocusing: (t, e) => {
        t.toggleWithoutFocusing(e);
      },
      getToolbar: (t, e) => t.getToolbar(e),
      isOpen: (t, e) => t.isOpen(e)
    }
  }), Z3 = w([
    k("items"),
    Mr(["itemSelector"]),
    be("tgroupBehaviours", [z])
  ]), Q3 = w([yl({
    name: "items",
    unit: "item"
  })]), tG = (t, e, o, n) => ({
    uid: t.uid,
    dom: t.dom,
    components: e,
    behaviours: xe(t.tgroupBehaviours, [z.config({
      mode: "flow",
      selector: t.markers.itemSelector
    })]),
    domModification: { attributes: { role: "toolbar" } }
  }), Mu = Ge({
    name: "ToolbarGroup",
    configFields: Z3(),
    partFields: Q3(),
    factory: tG
  }), RC = (t) => B(t, (e) => No(e)), PC = (t, e, o) => {
    FC(t, o, (n) => {
      o.overflowGroups.set(n), e.getOpt(t).each((s) => {
        ar.setGroups(s, RC(n));
      });
    });
  }, eG = (t, e, o, n) => {
    const s = St(ar.sketch({
      fetch: () => $e.nu((r) => {
        r(RC(t.overflowGroups.get()));
      }),
      layouts: {
        onLtr: () => [
          Me,
          De
        ],
        onRtl: () => [
          De,
          Me
        ],
        onBottomLtr: () => [
          lo,
          io
        ],
        onBottomRtl: () => [
          io,
          lo
        ]
      },
      getBounds: o.getOverflowBounds,
      lazySink: t.lazySink,
      fireDismissalEventInstead: {},
      markers: { toggledClass: t.markers.overflowToggledClass },
      parts: {
        button: n["overflow-button"](),
        toolbar: n.overflow()
      },
      onToggled: (r, c) => t[c ? "onOpened" : "onClosed"](r)
    }));
    return {
      uid: t.uid,
      dom: t.dom,
      components: e,
      behaviours: xe(t.splitToolbarBehaviours, [Wt.config({
        others: {
          overflowGroup: () => Mu.sketch({
            ...n["overflow-group"](),
            items: [s.asSpec()]
          })
        }
      })]),
      apis: {
        setGroups: (r, c) => {
          t.builtGroups.set(B(c, r.getSystem().build)), PC(r, s, t);
        },
        refresh: (r) => PC(r, s, t),
        toggle: (r) => {
          s.getOpt(r).each((c) => {
            ar.toggle(c);
          });
        },
        toggleWithoutFocusing: (r) => {
          s.getOpt(r).each(ar.toggleWithoutFocusing);
        },
        isOpen: (r) => s.getOpt(r).map(ar.isOpen).getOr(!1),
        reposition: (r) => {
          s.getOpt(r).each((c) => {
            ar.reposition(c);
          });
        },
        getOverflow: (r) => s.getOpt(r).bind(ar.getToolbar)
      },
      domModification: { attributes: { role: "group" } }
    };
  }, LC = Ge({
    name: "SplitFloatingToolbar",
    configFields: j3(),
    partFields: Y3(),
    factory: eG,
    apis: {
      setGroups: (t, e, o) => {
        t.setGroups(e, o);
      },
      refresh: (t, e) => {
        t.refresh(e);
      },
      reposition: (t, e) => {
        t.reposition(e);
      },
      toggle: (t, e) => {
        t.toggle(e);
      },
      toggleWithoutFocusing: (t, e) => {
        t.toggle(e);
      },
      isOpen: (t, e) => t.isOpen(e),
      getOverflow: (t, e) => t.getOverflow(e)
    }
  }), oG = w([
    Mr([
      "closedClass",
      "openClass",
      "shrinkingClass",
      "growingClass",
      "overflowToggledClass"
    ]),
    pt("onOpened"),
    pt("onClosed")
  ].concat(BC())), nG = w([
    Pe({
      factory: In,
      schema: Wc(),
      name: "primary"
    }),
    Pe({
      factory: In,
      schema: Wc(),
      name: "overflow",
      overrides: (t) => ({
        toolbarBehaviours: D([
          xo.config({
            dimension: { property: "height" },
            closedClass: t.markers.closedClass,
            openClass: t.markers.openClass,
            shrinkingClass: t.markers.shrinkingClass,
            growingClass: t.markers.growingClass,
            onShrunk: (e) => {
              Dt(e, t, "overflow-button").each((o) => {
                ct.off(o), Z.focus(o);
              }), t.onClosed(e);
            },
            onGrown: (e) => {
              z.focusIn(e), t.onOpened(e);
            },
            onStartGrow: (e) => {
              Dt(e, t, "overflow-button").each(ct.on);
            }
          }),
          z.config({
            mode: "acyclic",
            onEscape: (e) => (Dt(e, t, "overflow-button").each(Z.focus), u.some(!0))
          })
        ])
      })
    }),
    an({
      name: "overflow-button",
      overrides: (t) => ({
        buttonBehaviours: D([ct.config({
          toggleClass: t.markers.overflowToggledClass,
          aria: { mode: "pressed" },
          toggleOnExecute: !1
        })])
      })
    }),
    an({ name: "overflow-group" })
  ]), sG = (t, e) => Dt(t, e, "overflow").map(xo.hasGrown).getOr(!1), VC = (t, e) => {
    Dt(t, e, "overflow-button").bind(() => Dt(t, e, "overflow")).each((o) => {
      fh(t, e), xo.toggleGrow(o);
    });
  }, fh = (t, e) => {
    Dt(t, e, "overflow").each((o) => {
      FC(t, e, (n) => {
        const s = B(n, (r) => No(r));
        In.setGroups(o, s);
      }), Dt(t, e, "overflow-button").each((n) => {
        xo.hasGrown(o) && ct.on(n);
      }), xo.refresh(o);
    });
  }, rG = (t, e, o, n) => {
    const s = "alloy.toolbar.toggle", r = (c, a) => {
      const i = B(a, c.getSystem().build);
      t.builtGroups.set(i);
    };
    return {
      uid: t.uid,
      dom: t.dom,
      components: e,
      behaviours: xe(t.splitToolbarBehaviours, [
        Wt.config({
          others: {
            overflowGroup: (c) => Mu.sketch({
              ...n["overflow-group"](),
              items: [Se.sketch({
                ...n["overflow-button"](),
                action: (a) => {
                  xt(c, s);
                }
              })]
            })
          }
        }),
        nt("toolbar-toggle-events", [O(s, (c) => {
          VC(c, t);
        })])
      ]),
      apis: {
        setGroups: (c, a) => {
          r(c, a), fh(c, t);
        },
        refresh: (c) => fh(c, t),
        toggle: (c) => VC(c, t),
        isOpen: (c) => sG(c, t)
      },
      domModification: { attributes: { role: "group" } }
    };
  }, bh = Ge({
    name: "SplitSlidingToolbar",
    configFields: oG(),
    partFields: nG(),
    factory: rG,
    apis: {
      setGroups: (t, e, o) => {
        t.setGroups(e, o);
      },
      refresh: (t, e) => {
        t.refresh(e);
      },
      toggle: (t, e) => {
        t.toggle(e);
      },
      isOpen: (t, e) => t.isOpen(e)
    }
  }), HC = (t) => {
    const e = t.title.fold(() => ({}), (o) => ({ attributes: { title: o } }));
    return {
      dom: {
        tag: "div",
        classes: ["tox-toolbar__group"],
        ...e
      },
      components: [Mu.parts.items({})],
      items: t.items,
      markers: { itemSelector: "*:not(.tox-split-button) > .tox-tbtn:not([disabled]), .tox-split-button:not([disabled]), .tox-toolbar-nav-js:not([disabled]), .tox-number-input:not([disabled])" },
      tgroupBehaviours: D([
        zt.config({}),
        Z.config({})
      ])
    };
  }, $u = (t) => Mu.sketch(HC(t)), NC = (t, e) => {
    const o = Vt((n) => {
      const s = B(t.initGroups, $u);
      In.setGroups(n, s);
    });
    return D([
      mn.toolbarButton(t.providers.isDisabled),
      re(),
      z.config({
        mode: e,
        onEscape: t.onEscape,
        selector: ".tox-toolbar__group"
      }),
      nt("toolbar-events", [o])
    ]);
  }, zC = (t) => {
    const e = t.cyclicKeying ? "cyclic" : "acyclic";
    return {
      uid: t.uid,
      dom: {
        tag: "div",
        classes: ["tox-toolbar-overlord"]
      },
      parts: {
        "overflow-group": HC({
          title: u.none(),
          items: []
        }),
        "overflow-button": X2({
          icon: u.some("more-drawer"),
          enabled: !0,
          tooltip: u.some("Reveal or hide additional toolbar items")
        }, u.none(), t.providers)
      },
      splitToolbarBehaviours: NC(t, e)
    };
  }, cG = (t) => {
    const e = zC(t), o = 4, n = LC.parts.primary({
      dom: {
        tag: "div",
        classes: ["tox-toolbar__primary"]
      }
    });
    return LC.sketch({
      ...e,
      lazySink: t.getSink,
      getOverflowBounds: () => {
        const s = t.moreDrawerData.lazyHeader().element, r = fr(s), c = ud(s), a = fr(c), i = Math.max(c.dom.scrollHeight, a.height);
        return pe(r.x + o, a.y, r.width - o * 2, i);
      },
      parts: {
        ...e.parts,
        overflow: {
          dom: {
            tag: "div",
            classes: ["tox-toolbar__overflow"],
            attributes: t.attributes
          }
        }
      },
      components: [n],
      markers: { overflowToggledClass: "tox-tbtn--enabled" },
      onOpened: (s) => t.onToggled(s, !0),
      onClosed: (s) => t.onToggled(s, !1)
    });
  }, aG = (t) => {
    const e = bh.parts.primary({
      dom: {
        tag: "div",
        classes: ["tox-toolbar__primary"]
      }
    }), o = bh.parts.overflow({
      dom: {
        tag: "div",
        classes: ["tox-toolbar__overflow"]
      }
    }), n = zC(t);
    return bh.sketch({
      ...n,
      components: [
        e,
        o
      ],
      markers: {
        openClass: "tox-toolbar__overflow--open",
        closedClass: "tox-toolbar__overflow--closed",
        growingClass: "tox-toolbar__overflow--growing",
        shrinkingClass: "tox-toolbar__overflow--shrinking",
        overflowToggledClass: "tox-tbtn--enabled"
      },
      onOpened: (s) => {
        s.getSystem().broadcastOn([ah()], { type: "opened" }), t.onToggled(s, !0);
      },
      onClosed: (s) => {
        s.getSystem().broadcastOn([ah()], { type: "closed" }), t.onToggled(s, !1);
      }
    });
  }, Fu = (t) => {
    const e = t.cyclicKeying ? "cyclic" : "acyclic";
    return In.sketch({
      uid: t.uid,
      dom: {
        tag: "div",
        classes: ["tox-toolbar"].concat(t.type === Wo.scrolling ? ["tox-toolbar--scrolling"] : [])
      },
      components: [In.parts.groups({})],
      toolbarBehaviours: NC(t, e)
    });
  }, UC = [
    Js,
    Go,
    ze("tooltip"),
    Un("buttonType", "secondary", [
      "primary",
      "secondary"
    ]),
    Ie("borderless", !1),
    tn("onAction")
  ], iG = [
    ...UC,
    Es,
    hs("type", ["button"])
  ], lG = [
    ...UC,
    Ie("active", !1),
    hs("type", ["togglebutton"])
  ], WC = {
    button: iG,
    togglebutton: lG
  }, uG = [
    hs("type", ["group"]),
    vr("buttons", [], mo("type", WC))
  ], dG = mo("type", {
    ...WC,
    group: uG
  }), mG = X([
    vr("buttons", [], dG),
    tn("onShow"),
    tn("onHide")
  ]), gG = (t) => Yt("view", mG, t), pG = (t, e) => {
    var o, n;
    const s = t.type === "togglebutton", r = t.icon.map((x) => rr(x, e.icons)).map(St), a = (x) => {
      const E = (A) => {
        r.map((M) => M.getOpt(x).each((ot) => {
          et.set(ot, [rr(A, e.icons)]);
        }));
      }, C = (A) => {
        const M = x.element;
        A ? (ee(M, "tox-button--enabled"), st(M, "aria-pressed", !0)) : (Xt(M, "tox-button--enabled"), Qt(M, "aria-pressed"));
      }, _ = () => ao(x.element, "tox-button--enabled");
      if (s)
        return t.onAction({
          setIcon: E,
          setActive: C,
          isActive: _
        });
      if (t.type === "button")
        return t.onAction({ setIcon: E });
    }, i = {
      ...t,
      name: s ? t.text.getOr(t.icon.getOr("")) : (o = t.text) !== null && o !== void 0 ? o : t.icon.getOr(""),
      primary: t.buttonType === "primary",
      buttonType: u.from(t.buttonType),
      tooltip: t.tooltip,
      icon: t.icon,
      enabled: !0,
      borderless: t.borderless
    }, l = Gp((n = t.buttonType) !== null && n !== void 0 ? n : "secondary"), d = s ? t.text.map(e.translate) : u.some(e.translate(t.text)), m = d.map(qt), g = i.tooltip.or(d).map((x) => ({
      "aria-label": e.translate(x),
      title: e.translate(x)
    })).getOr({}), p = r.map((x) => x.asSpec()), h = Rc([
      p,
      m
    ]), f = t.icon.isSome() && m.isSome(), y = {
      tag: "button",
      classes: l.concat(...t.icon.isSome() && !f ? ["tox-button--icon"] : []).concat(...f ? ["tox-button--icon-and-text"] : []).concat(...t.borderless ? ["tox-button--naked"] : []).concat(...t.type === "togglebutton" && t.active ? ["tox-button--enabled"] : []),
      attributes: g
    }, v = [], b = Su(i, u.some(a), v, y, h, e);
    return Se.sketch(b);
  }, GC = (t, e) => pG(t, e), hG = (t, e) => ({
    dom: {
      tag: "div",
      classes: ["tox-view__toolbar__group"]
    },
    components: B(t.buttons, (o) => GC(o, e))
  }), jC = gs().deviceType, fG = jC.isPhone(), bG = jC.isTablet(), vG = (t) => {
    let e = !1;
    const o = B(t.buttons, (n) => n.type === "group" ? (e = !0, hG(n, t.providers)) : GC(n, t.providers));
    return {
      uid: t.uid,
      dom: {
        tag: "div",
        classes: [
          e ? "tox-view__toolbar" : "tox-view__header",
          ...fG || bG ? [
            "tox-view--mobile",
            "tox-view--scrolling"
          ] : []
        ]
      },
      behaviours: D([
        Z.config({}),
        z.config({
          mode: "flow",
          selector: "button, .tox-button",
          focusInside: Ec.OnEnterOrSpaceMode
        })
      ]),
      components: e ? o : [
        Bn.sketch({
          dom: {
            tag: "div",
            classes: ["tox-view__header-start"]
          },
          components: []
        }),
        Bn.sketch({
          dom: {
            tag: "div",
            classes: ["tox-view__header-end"]
          },
          components: o
        })
      ]
    };
  }, yG = (t) => ({
    uid: t.uid,
    dom: {
      tag: "div",
      classes: ["tox-view__pane"]
    }
  }), xG = (t, e, o, n) => {
    const s = {
      getPane: (r) => de.getPart(r, t, "pane"),
      getOnShow: (r) => t.viewConfig.onShow,
      getOnHide: (r) => t.viewConfig.onHide
    };
    return {
      uid: t.uid,
      dom: t.dom,
      components: e,
      apis: s
    };
  };
  var Gc = Ge({
    name: "silver.View",
    configFields: [k("viewConfig")],
    partFields: [
      zo({
        factory: { sketch: vG },
        schema: [
          k("buttons"),
          k("providers")
        ],
        name: "header"
      }),
      zo({
        factory: { sketch: yG },
        schema: [],
        name: "pane"
      })
    ],
    factory: xG,
    apis: {
      getPane: (t, e) => t.getPane(e),
      getOnShow: (t, e) => t.getOnShow(e),
      getOnHide: (t, e) => t.getOnHide(e)
    }
  });
  const SG = (t, e, o) => Ai(e, (n, s) => {
    const r = On(gG(n));
    return t.slot(s, Gc.sketch({
      dom: {
        tag: "div",
        classes: ["tox-view"]
      },
      viewConfig: r,
      components: [
        ...r.buttons.length > 0 ? [Gc.parts.header({
          buttons: r.buttons,
          providers: o
        })] : [],
        Gc.parts.pane({})
      ]
    }));
  }), wG = (t, e) => Le.sketch((o) => ({
    dom: {
      tag: "div",
      classes: ["tox-view-wrap__slot-container"]
    },
    components: SG(o, t, e),
    slotBehaviours: Ka.unnamedEvents([Vt((n) => Le.hideAllSlots(n))])
  })), YC = (t) => Gt(Le.getSlotNames(t), (e) => Le.isShowing(t, e)), TG = (t) => {
    const e = t.element;
    rt(e, "display", "none"), st(e, "aria-hidden", "true");
  }, _G = (t) => {
    const e = t.element;
    kt(e, "display"), Qt(e, "aria-hidden");
  }, CG = (t) => ({ getContainer: w(t) }), XC = (t, e, o) => {
    Le.getSlot(t, e).each((n) => {
      Gc.getPane(n).each((s) => {
        o(n)(CG(s.element.dom));
      });
    });
  }, OG = (t, e) => XC(t, e, Gc.getOnShow), kG = (t, e) => XC(t, e, Gc.getOnHide);
  var Bu = $o({
    factory: (t, e) => {
      const r = {
        setViews: (c, a) => {
          et.set(c, [wG(a, e.backstage.shared.providers)]);
        },
        whichView: (c) => mt.getCurrent(c).bind(YC),
        toggleView: (c, a, i, l) => mt.getCurrent(c).exists((d) => {
          const m = YC(d), g = m.exists((h) => l === h), p = Le.getSlot(d, l).isSome();
          return p && (Le.hideAllSlots(d), g ? (TG(c), a()) : (i(), _G(c), Le.showSlot(d, l), OG(d, l)), m.each((h) => kG(d, h))), p;
        })
      };
      return {
        uid: t.uid,
        dom: {
          tag: "div",
          classes: ["tox-view-wrap"],
          attributes: { "aria-hidden": "true" },
          styles: { display: "none" }
        },
        components: [],
        behaviours: D([
          et.config({}),
          mt.config({
            find: (c) => {
              const a = et.contents(c);
              return yn(a);
            }
          })
        ]),
        apis: r
      };
    },
    name: "silver.ViewWrapper",
    configFields: [k("backstage")],
    apis: {
      setViews: (t, e, o) => t.setViews(e, o),
      toggleView: (t, e, o, n, s) => t.toggleView(e, o, n, s),
      whichView: (t, e) => t.whichView(e)
    }
  });
  const EG = (t, e, o) => {
    let n = !1;
    const s = {
      getSocket: (r) => de.getPart(r, t, "socket"),
      setSidebar: (r, c, a) => {
        de.getPart(r, t, "sidebar").each((i) => C3(i, c, a));
      },
      toggleSidebar: (r, c) => {
        de.getPart(r, t, "sidebar").each((a) => O3(a, c));
      },
      whichSidebar: (r) => de.getPart(r, t, "sidebar").bind(k3).getOrNull(),
      getHeader: (r) => de.getPart(r, t, "header"),
      getToolbar: (r) => de.getPart(r, t, "toolbar"),
      setToolbar: (r, c) => {
        de.getPart(r, t, "toolbar").each((a) => {
          const i = B(c, $u);
          a.getApis().setGroups(a, i);
        });
      },
      setToolbars: (r, c) => {
        de.getPart(r, t, "multiple-toolbar").each((a) => {
          const i = B(c, (l) => B(l, $u));
          lC.setItems(a, i);
        });
      },
      refreshToolbar: (r) => {
        de.getPart(r, t, "toolbar").each((a) => a.getApis().refresh(a));
      },
      toggleToolbarDrawer: (r) => {
        de.getPart(r, t, "toolbar").each((c) => {
          vf(c.getApis().toggle, (a) => a(c));
        });
      },
      toggleToolbarDrawerWithoutFocusing: (r) => {
        de.getPart(r, t, "toolbar").each((c) => {
          vf(c.getApis().toggleWithoutFocusing, (a) => a(c));
        });
      },
      isToolbarDrawerToggled: (r) => de.getPart(r, t, "toolbar").bind((c) => u.from(c.getApis().isOpen).map((a) => a(c))).getOr(!1),
      getThrobber: (r) => de.getPart(r, t, "throbber"),
      focusToolbar: (r) => {
        de.getPart(r, t, "toolbar").orThunk(() => de.getPart(r, t, "multiple-toolbar")).each((a) => {
          z.focusIn(a);
        });
      },
      setMenubar: (r, c) => {
        de.getPart(r, t, "menubar").each((a) => {
          lh.setMenus(a, c);
        });
      },
      focusMenubar: (r) => {
        de.getPart(r, t, "menubar").each((c) => {
          lh.focus(c);
        });
      },
      setViews: (r, c) => {
        de.getPart(r, t, "viewWrapper").each((a) => {
          Bu.setViews(a, c);
        });
      },
      toggleView: (r, c) => de.getPart(r, t, "viewWrapper").exists((a) => Bu.toggleView(a, () => s.showMainView(r), () => s.hideMainView(r), c)),
      whichView: (r) => de.getPart(r, t, "viewWrapper").bind(Bu.whichView).getOrNull(),
      hideMainView: (r) => {
        n = s.isToolbarDrawerToggled(r), n && s.toggleToolbarDrawer(r), de.getPart(r, t, "editorContainer").each((c) => {
          const a = c.element;
          rt(a, "display", "none"), st(a, "aria-hidden", "true");
        });
      },
      showMainView: (r) => {
        n && s.toggleToolbarDrawer(r), de.getPart(r, t, "editorContainer").each((c) => {
          const a = c.element;
          kt(a, "display"), Qt(a, "aria-hidden");
        });
      }
    };
    return {
      uid: t.uid,
      dom: t.dom,
      components: e,
      apis: s,
      behaviours: t.behaviours
    };
  }, AG = Zn.optional({
    factory: lh,
    name: "menubar",
    schema: [k("backstage")]
  }), DG = (t) => t.type === Wo.sliding ? aG : t.type === Wo.floating ? cG : Fu, MG = Zn.optional({
    factory: {
      sketch: (t) => lC.sketch({
        uid: t.uid,
        dom: t.dom,
        listBehaviours: D([z.config({
          mode: "acyclic",
          selector: ".tox-toolbar"
        })]),
        makeItem: () => Fu({
          type: t.type,
          uid: P("multiple-toolbar-item"),
          cyclicKeying: !1,
          initGroups: [],
          providers: t.providers,
          onEscape: () => (t.onEscape(), u.some(!0))
        }),
        setupItem: (e, o, n, s) => {
          In.setGroups(o, n);
        },
        shell: !0
      })
    },
    name: "multiple-toolbar",
    schema: [
      k("dom"),
      k("onEscape")
    ]
  }), $G = Zn.optional({
    factory: {
      sketch: (t) => {
        const e = DG(t), o = {
          type: t.type,
          uid: t.uid,
          onEscape: () => (t.onEscape(), u.some(!0)),
          onToggled: (n, s) => t.onToolbarToggled(s),
          cyclicKeying: !1,
          initGroups: [],
          getSink: t.getSink,
          providers: t.providers,
          moreDrawerData: {
            lazyToolbar: t.lazyToolbar,
            lazyMoreButton: t.lazyMoreButton,
            lazyHeader: t.lazyHeader
          },
          attributes: t.attributes
        };
        return e(o);
      }
    },
    name: "toolbar",
    schema: [
      k("dom"),
      k("onEscape"),
      k("getSink")
    ]
  }), FG = Zn.optional({
    factory: { sketch: a3 },
    name: "header",
    schema: [k("dom")]
  }), BG = Zn.optional({
    factory: { sketch: h3 },
    name: "promotion",
    schema: [k("dom")]
  }), IG = Zn.optional({
    name: "socket",
    schema: [k("dom")]
  }), RG = Zn.optional({
    factory: { sketch: E3 },
    name: "sidebar",
    schema: [k("dom")]
  }), PG = Zn.optional({
    factory: { sketch: I3 },
    name: "throbber",
    schema: [k("dom")]
  }), LG = Zn.optional({
    factory: Bu,
    name: "viewWrapper",
    schema: [k("backstage")]
  }), VG = (t) => ({
    uid: t.uid,
    dom: {
      tag: "div",
      classes: ["tox-editor-container"]
    },
    components: t.components
  }), HG = Zn.optional({
    factory: { sketch: VG },
    name: "editorContainer",
    schema: []
  });
  var $t = Ge({
    name: "OuterContainer",
    factory: EG,
    configFields: [
      k("dom"),
      k("behaviours")
    ],
    partFields: [
      FG,
      AG,
      $G,
      MG,
      IG,
      RG,
      BG,
      PG,
      LG,
      HG
    ],
    apis: {
      getSocket: (t, e) => t.getSocket(e),
      setSidebar: (t, e, o, n) => {
        t.setSidebar(e, o, n);
      },
      toggleSidebar: (t, e, o) => {
        t.toggleSidebar(e, o);
      },
      whichSidebar: (t, e) => t.whichSidebar(e),
      getHeader: (t, e) => t.getHeader(e),
      getToolbar: (t, e) => t.getToolbar(e),
      setToolbar: (t, e, o) => {
        t.setToolbar(e, o);
      },
      setToolbars: (t, e, o) => {
        t.setToolbars(e, o);
      },
      refreshToolbar: (t, e) => t.refreshToolbar(e),
      toggleToolbarDrawer: (t, e) => {
        t.toggleToolbarDrawer(e);
      },
      toggleToolbarDrawerWithoutFocusing: (t, e) => {
        t.toggleToolbarDrawerWithoutFocusing(e);
      },
      isToolbarDrawerToggled: (t, e) => t.isToolbarDrawerToggled(e),
      getThrobber: (t, e) => t.getThrobber(e),
      setMenubar: (t, e, o) => {
        t.setMenubar(e, o);
      },
      focusMenubar: (t, e) => {
        t.focusMenubar(e);
      },
      focusToolbar: (t, e) => {
        t.focusToolbar(e);
      },
      setViews: (t, e, o) => {
        t.setViews(e, o);
      },
      toggleView: (t, e, o) => t.toggleView(e, o),
      whichView: (t, e) => t.whichView(e)
    }
  });
  const NG = "file edit view insert format tools table help", KC = {
    file: {
      title: "File",
      items: "newdocument restoredraft | preview | export print | deleteallconversations"
    },
    edit: {
      title: "Edit",
      items: "undo redo | cut copy paste pastetext | selectall | searchreplace"
    },
    view: {
      title: "View",
      items: "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments"
    },
    insert: {
      title: "Insert",
      items: "image link media addcomment pageembed template inserttemplate codesample inserttable accordion | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents footnotes | mergetags | insertdatetime"
    },
    format: {
      title: "Format",
      items: "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat"
    },
    tools: {
      title: "Tools",
      items: "aidialog aishortcuts | spellchecker spellcheckerlanguage | autocorrect capitalization | a11ycheck code typography wordcount addtemplate"
    },
    table: {
      title: "Table",
      items: "inserttable | cell row column | advtablesort | tableprops deletetable"
    },
    help: {
      title: "Help",
      items: "help"
    }
  }, zG = (t, e, o) => {
    const n = oS(o).split(/[ ,]/);
    return {
      text: t.title,
      getItems: () => le(t.items, (s) => {
        const r = s.toLowerCase();
        return r.trim().length === 0 ? [] : Xo(n, (c) => c === r) ? [] : r === "separator" || r === "|" ? [{ type: "separator" }] : e.menuItems[r] ? [e.menuItems[r]] : [];
      })
    };
  }, vh = (t) => t.split(" "), qC = (t, e) => {
    const o = {
      ...KC,
      ...e.menus
    }, n = ue(e.menus).length > 0, s = e.menubar === void 0 || e.menubar === !0 ? vh(NG) : vh(e.menubar === !1 ? "" : e.menubar), r = Ht(s, (a) => {
      const i = At(KC, a);
      return n ? i || Q(e.menus, a).exists((l) => At(l, "items")) : i;
    }), c = B(r, (a) => {
      const i = o[a];
      return zG({
        title: i.title,
        items: vh(i.items)
      }, e, t);
    });
    return Ht(c, (a) => {
      const i = (l) => Ct(l) || l.type !== "separator";
      return a.getItems().length > 0 && Xo(a.getItems(), i);
    });
  }, UG = (t) => {
    const e = () => {
      t._skinLoaded = !0, GL(t);
    };
    return () => {
      t.initialized ? e() : t.on("init", e);
    };
  }, WG = (t, e) => () => jL(t, { message: e }), JC = (t, e, o) => (t.on("remove", () => o.unload(e)), o.load(e)), yh = (t, e, o, n) => (t.on("remove", () => n.unloadRawCss(e)), n.loadRawCss(e, o)), GG = async (t, e) => {
    const n = "ui/" + Ll(t).getOr("default") + "/skin.css", s = tinymce.Resource.get(n);
    if (Ct(s))
      return Promise.resolve(yh(t, n, s, t.ui.styleSheetLoader));
    {
      const r = e + "/skin.min.css";
      return JC(t, r, t.ui.styleSheetLoader);
    }
  }, jG = async (t, e) => {
    if (rA(F.fromDom(t.getElement()))) {
      const s = "ui/" + Ll(t).getOr("default") + "/skin.shadowdom.css", r = tinymce.Resource.get(s);
      if (Ct(r))
        return yh(t, s, r, Dc.DOM.styleSheetLoader), Promise.resolve();
      {
        const c = e + "/skin.shadowdom.min.css";
        return JC(t, c, Dc.DOM.styleSheetLoader);
      }
    }
  }, YG = async (t, e) => {
    Ll(e).fold(() => {
      const n = Pl(e);
      n && e.contentCSS.push(n + (t ? "/content.inline" : "/content") + ".min.css");
    }, (n) => {
      const s = "ui/" + n + (t ? "/content.inline" : "/content") + ".css", r = tinymce.Resource.get(s);
      if (Ct(r))
        yh(e, s, r, e.ui.styleSheetLoader);
      else {
        const c = Pl(e);
        c && e.contentCSS.push(c + (t ? "/content.inline" : "/content") + ".min.css");
      }
    });
    const o = Pl(e);
    if (!_g(e) && Ct(o))
      return Promise.all([
        GG(e, o),
        jG(e, o)
      ]).then();
  }, ZC = (t, e) => YG(t, e).then(UG(e), WG(e, "Skin could not be loaded")), XG = Po(ZC, !1), KG = Po(ZC, !0), jc = (t, e, o) => t.translate([
    e,
    t.translate(o)
  ]), qG = (t, e) => {
    const o = (c, a, i, l) => {
      const d = t.shared.providers.translate(c.title);
      if (c.type === "separator")
        return u.some({
          type: "separator",
          text: d
        });
      if (c.type === "submenu") {
        const m = le(c.getStyleItems(), (g) => n(g, a, l));
        return a === 0 && m.length <= 0 ? u.none() : u.some({
          type: "nestedmenuitem",
          text: d,
          enabled: m.length > 0,
          getSubmenuItems: () => le(c.getStyleItems(), (g) => n(g, a, l))
        });
      } else
        return u.some({
          type: "togglemenuitem",
          text: d,
          icon: c.icon,
          active: c.isSelected(l),
          enabled: !i,
          onAction: e.onAction(c),
          ...c.getStylePreview().fold(() => ({}), (m) => ({ meta: { style: m } }))
        });
    }, n = (c, a, i) => {
      const l = c.type === "formatter" && e.isInvalid(c);
      return a === 0 ? l ? [] : o(c, a, !1, i).toArray() : o(c, a, l, i).toArray();
    }, s = (c) => {
      const a = e.getCurrentValue(), i = e.shouldHide ? 0 : 1;
      return le(c, (l) => n(l, i, a));
    };
    return {
      validateItems: s,
      getFetch: (c, a) => (i, l) => {
        const d = a(), m = s(d), g = Uc(m, Fn.CLOSE_ON_EXECUTE, c, {
          isHorizontalMenu: !1,
          search: u.none()
        });
        l(g);
      }
    };
  }, Yc = (t, e, o) => {
    const n = o.dataset, s = n.type === "basic" ? () => B(n.data, (r) => q_(r, o.isSelectedFor, o.getPreviewFor)) : n.getData;
    return {
      items: qG(e, o),
      getStyleItems: s
    };
  }, bi = (t, e, o, n, s) => {
    const { items: r, getStyleItems: c } = Yc(t, e, o), a = (l) => ({
      getComponent: w(l),
      setTooltip: (d) => {
        const m = e.shared.providers.translate(d);
        ga(l.element, {
          "aria-label": m,
          title: m
        });
      }
    }), i = (l) => {
      const d = (m) => l.setTooltip(jc(t, n, m.value));
      return t.on(s, d), Jl(Ur(t, "NodeChange", (m) => {
        const g = m.getComponent();
        o.updateText(g), q.set(m.getComponent(), !t.selection.isEditable());
      })(l), () => t.off(s, d));
    };
    return Bp({
      text: o.icon.isSome() ? u.none() : o.text,
      icon: o.icon,
      tooltip: u.from(o.tooltip),
      role: u.none(),
      fetch: r.getFetch(e, c),
      onSetup: i,
      getApi: a,
      columns: 1,
      presets: "normal",
      classes: o.icon.isSome() ? [] : ["bespoke"],
      dropdownBehaviours: []
    }, "tox-tbtn", e.shared);
  }, JG = (t) => B(t, (e) => {
    let o = e, n = e;
    const s = e.split("=");
    return s.length > 1 && (o = s[0], n = s[1]), {
      title: o,
      format: n
    };
  }), ZG = (t) => ({
    type: "basic",
    data: t
  });
  var Xc;
  (function(t) {
    t[t.SemiColon = 0] = "SemiColon", t[t.Space = 1] = "Space";
  })(Xc || (Xc = {}));
  const QG = (t, e) => e === Xc.SemiColon ? t.replace(/;$/, "").split(";") : t.split(" "), xh = (t, e, o) => {
    const n = t.options.get(e);
    return {
      type: "basic",
      data: JG(QG(n, o))
    };
  }, t5 = "Align", QC = "Alignment {0}", tO = "left", Sh = [
    {
      title: "Left",
      icon: "align-left",
      format: "alignleft",
      command: "JustifyLeft"
    },
    {
      title: "Center",
      icon: "align-center",
      format: "aligncenter",
      command: "JustifyCenter"
    },
    {
      title: "Right",
      icon: "align-right",
      format: "alignright",
      command: "JustifyRight"
    },
    {
      title: "Justify",
      icon: "align-justify",
      format: "alignjustify",
      command: "JustifyFull"
    }
  ], eO = (t) => {
    const e = () => Gt(Sh, (a) => t.formatter.match(a.format)), o = (a) => () => t.formatter.match(a), n = (a) => u.none, s = (a) => {
      const l = e().fold(w(tO), (d) => d.title.toLowerCase());
      U(a, Zr, { icon: `align-${l}` }), QL(t, { value: l });
    }, r = ZG(Sh), c = (a) => () => Gt(Sh, (i) => i.format === a.format).each((i) => t.execCommand(i.command));
    return {
      tooltip: jc(t, QC, tO),
      text: u.none(),
      icon: u.some("align-left"),
      isSelectedFor: o,
      getCurrentValue: u.none,
      getPreviewFor: n,
      onAction: c,
      updateText: s,
      dataset: r,
      shouldHide: !1,
      isInvalid: (a) => !t.formatter.canApply(a.format)
    };
  }, e5 = (t, e) => bi(t, e, eO(t), QC, "AlignTextUpdate"), o5 = (t, e) => {
    const o = Yc(t, e, eO(t));
    t.ui.registry.addNestedMenuItem("align", {
      text: e.shared.providers.translate(t5),
      onSetup: je(t),
      getSubmenuItems: () => o.items.validateItems(o.getStyleItems())
    });
  }, oO = (t, e) => {
    const o = e(), n = B(o, (s) => s.format);
    return u.from(t.formatter.closest(n)).bind((s) => Gt(o, (r) => r.format === s)).orThunk(() => ls(t.formatter.match("p"), {
      title: "Paragraph",
      format: "p"
    }));
  }, n5 = "Blocks", nO = "Block {0}", wh = "Paragraph", sO = (t) => {
    const e = (r) => () => t.formatter.match(r), o = (r) => () => {
      const c = t.formatter.get(r);
      return c ? u.some({
        tag: c.length > 0 && (c[0].inline || c[0].block) || "div",
        styles: t.dom.parseStyle(t.formatter.getCssText(r))
      }) : u.none();
    }, n = (r) => {
      const a = oO(t, () => s.data).fold(w(wh), (i) => i.title);
      U(r, Yo, { text: a }), oV(t, { value: a });
    }, s = xh(t, "block_formats", Xc.SemiColon);
    return {
      tooltip: jc(t, nO, wh),
      text: u.some(wh),
      icon: u.none(),
      isSelectedFor: e,
      getCurrentValue: u.none,
      getPreviewFor: o,
      onAction: kw(t),
      updateText: n,
      dataset: s,
      shouldHide: !1,
      isInvalid: (r) => !t.formatter.canApply(r.format)
    };
  }, s5 = (t, e) => bi(t, e, sO(t), nO, "BlocksTextUpdate"), r5 = (t, e) => {
    const o = Yc(t, e, sO(t));
    t.ui.registry.addNestedMenuItem("blocks", {
      text: n5,
      onSetup: je(t),
      getSubmenuItems: () => o.items.validateItems(o.getStyleItems())
    });
  }, c5 = "Fonts", rO = "Font {0}", Th = "System Font", a5 = [
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "sans-serif"
  ], cO = (t) => {
    const e = t.split(/\s*,\s*/);
    return B(e, (o) => o.replace(/^['"]+|['"]+$/g, ""));
  }, aO = (t, e) => e.length > 0 && ac(e, (o) => t.indexOf(o.toLowerCase()) > -1), i5 = (t, e) => {
    if (t.indexOf("-apple-system") === 0 || e.length > 0) {
      const o = cO(t.toLowerCase());
      return aO(o, a5) || aO(o, e);
    } else
      return !1;
  }, iO = (t) => {
    const e = () => {
      const i = (h) => h ? cO(h)[0] : "", l = t.queryCommandValue("FontName"), d = a.data, m = l ? l.toLowerCase() : "", g = wS(t);
      return {
        matchOpt: Gt(d, (h) => {
          const f = h.format;
          return f.toLowerCase() === m || i(f).toLowerCase() === i(m).toLowerCase();
        }).orThunk(() => ls(i5(m, g), {
          title: Th,
          format: m
        })),
        font: l
      };
    }, o = (i) => (l) => l.exists((d) => d.format === i), n = () => {
      const { matchOpt: i } = e();
      return i;
    }, s = (i) => () => u.some({
      tag: "div",
      styles: i.indexOf("dings") === -1 ? { "font-family": i } : {}
    }), r = (i) => () => {
      t.undoManager.transact(() => {
        t.focus(), t.execCommand("FontName", !1, i.format);
      });
    }, c = (i) => {
      const { matchOpt: l, font: d } = e(), m = l.fold(w(d), (g) => g.title);
      U(i, Yo, { text: m }), nV(t, { value: m });
    }, a = xh(t, "font_family_formats", Xc.SemiColon);
    return {
      tooltip: jc(t, rO, Th),
      text: u.some(Th),
      icon: u.none(),
      isSelectedFor: o,
      getCurrentValue: n,
      getPreviewFor: s,
      onAction: r,
      updateText: c,
      dataset: a,
      shouldHide: !1,
      isInvalid: Lt
    };
  }, l5 = (t, e) => bi(t, e, iO(t), rO, "FontFamilyTextUpdate"), u5 = (t, e) => {
    const o = Yc(t, e, iO(t));
    t.ui.registry.addNestedMenuItem("fontfamily", {
      text: e.shared.providers.translate(c5),
      onSetup: je(t),
      getSubmenuItems: () => o.items.validateItems(o.getStyleItems())
    });
  }, d5 = {
    unsupportedLength: [
      "em",
      "ex",
      "cap",
      "ch",
      "ic",
      "rem",
      "lh",
      "rlh",
      "vw",
      "vh",
      "vi",
      "vb",
      "vmin",
      "vmax",
      "cm",
      "mm",
      "Q",
      "in",
      "pc",
      "pt",
      "px"
    ],
    fixed: [
      "px",
      "pt"
    ],
    relative: ["%"],
    empty: [""]
  }, m5 = (() => {
    const t = "[0-9]+", o = "[eE]" + ("[+-]?" + t), n = "\\.", s = (a) => `(?:${a})?`, c = `[+-]?(?:${[
      "Infinity",
      t + n + s(t) + s(o),
      n + t + s(o),
      t + s(o)
    ].join("|")})`;
    return new RegExp(`^(${c})(.*)$`);
  })(), g5 = (t, e) => Xo(e, (o) => Xo(d5[o], (n) => t === n)), Iu = (t, e) => u.from(m5.exec(t)).bind((n) => {
    const s = Number(n[1]), r = n[2];
    return g5(r, e) ? u.some({
      value: s,
      unit: r
    }) : u.none();
  }), p5 = (t, e) => Iu(t, e).map(({ value: o, unit: n }) => o + n), lO = {
    tab: w(9),
    escape: w(27),
    enter: w(13),
    backspace: w(8),
    delete: w(46),
    left: w(37),
    up: w(38),
    right: w(39),
    down: w(40),
    space: w(32),
    home: w(36),
    end: w(35),
    pageUp: w(33),
    pageDown: w(34)
  }, h5 = (t, e, o) => {
    let n = u.none();
    const s = (b) => b.map((x) => I.getValue(x)).getOr(""), r = Ur(t, "NodeChange SwitchMode", (b) => {
      const x = b.getComponent();
      n = u.some(x), o.updateInputValue(x), q.set(x, !t.selection.isEditable());
    }), c = (b) => ({ getComponent: w(b) }), a = j(R), i = P("custom-number-input-events"), l = (b, x, E) => {
      const C = s(n), _ = o.getNewValue(C, b), A = C.length - `${_}`.length, M = n.map((V) => V.element.dom.selectionStart - A), ot = n.map((V) => V.element.dom.selectionEnd - A);
      o.onAction(_, E), n.each((V) => {
        I.setValue(V, _), x && (M.each((W) => V.element.dom.selectionStart = W), ot.each((W) => V.element.dom.selectionEnd = W));
      });
    }, d = (b, x) => l((E, C) => E - C, b, x), m = (b, x) => l((E, C) => E + C, b, x), g = (b) => ds(b.element).fold(u.none, (x) => (sn(x), u.some(!0))), p = (b) => ka(b.element) ? (dd(b.element).each((x) => sn(x)), u.some(!0)) : u.none(), h = (b, x, E, C) => {
      const _ = j(R), A = e.shared.providers.translate(E), M = P("altExecuting"), ot = Ur(t, "NodeChange SwitchMode", (W) => {
        q.set(W.getComponent(), !t.selection.isEditable());
      }), V = (W) => {
        q.isDisabled(W) || b(!0);
      };
      return Se.sketch({
        dom: {
          tag: "button",
          attributes: {
            title: A,
            "aria-label": A
          },
          classes: C.concat(x)
        },
        components: [Fp(x, e.shared.providers.icons)],
        buttonBehaviours: D([
          q.config({}),
          nt(M, [
            Zs({
              onSetup: ot,
              getApi: c
            }, _),
            Qs({ getApi: c }, _),
            O(kn(), (W, K) => {
              (K.event.raw.keyCode === lO.space() || K.event.raw.keyCode === lO.enter()) && (q.isDisabled(W) || b(!1));
            }),
            O(wr(), V),
            O(xr(), V)
          ])
        ]),
        eventOrder: {
          [kn()]: [
            M,
            "keying"
          ],
          [wr()]: [
            M,
            "alloy.base.behaviour"
          ],
          [xr()]: [
            M,
            "alloy.base.behaviour"
          ]
        }
      });
    }, f = St(h((b) => d(!1, b), "minus", "Decrease font size", [])), y = St(h((b) => m(!1, b), "plus", "Increase font size", [])), v = St({
      dom: {
        tag: "div",
        classes: ["tox-input-wrapper"]
      },
      components: [Hr.sketch({
        inputBehaviours: D([
          q.config({}),
          nt(i, [
            Zs({
              onSetup: r,
              getApi: c
            }, a),
            Qs({ getApi: c }, a)
          ]),
          nt("input-update-display-text", [
            O(Yo, (b, x) => {
              I.setValue(b, x.event.text);
            }),
            O(Tb(), (b) => {
              o.onAction(I.getValue(b));
            }),
            O(pc(), (b) => {
              o.onAction(I.getValue(b));
            })
          ]),
          z.config({
            mode: "special",
            onEnter: (b) => (l(Tt, !0, !0), u.some(!0)),
            onEscape: g,
            onUp: (b) => (m(!0, !1), u.some(!0)),
            onDown: (b) => (d(!0, !1), u.some(!0)),
            onLeft: (b, x) => (x.cut(), u.none()),
            onRight: (b, x) => (x.cut(), u.none())
          })
        ])
      })],
      behaviours: D([
        Z.config({}),
        z.config({
          mode: "special",
          onEnter: p,
          onSpace: p,
          onEscape: g
        }),
        nt("input-wrapper-events", [O(vs(), (b) => {
          Y([
            f,
            y
          ], (x) => {
            const E = F.fromDom(x.get(b).element.dom);
            ka(E) && fm(E);
          });
        })])
      ])
    });
    return {
      dom: {
        tag: "div",
        classes: ["tox-number-input"]
      },
      components: [
        f.asSpec(),
        v.asSpec(),
        y.asSpec()
      ],
      behaviours: D([
        Z.config({}),
        z.config({
          mode: "flow",
          focusInside: Ec.OnEnterOrSpaceMode,
          cycles: !1,
          selector: "button, .tox-input-wrapper",
          onEscape: (b) => ka(b.element) ? u.none() : (sn(b.element), u.some(!0))
        })
      ])
    };
  }, f5 = "Font sizes", uO = "Font size {0}", dO = "12pt", b5 = {
    "8pt": "1",
    "10pt": "2",
    "12pt": "3",
    "14pt": "4",
    "18pt": "5",
    "24pt": "6",
    "36pt": "7"
  }, v5 = {
    "xx-small": "7pt",
    "x-small": "8pt",
    small: "10pt",
    medium: "12pt",
    large: "14pt",
    "x-large": "18pt",
    "xx-large": "24pt"
  }, y5 = (t, e) => {
    const o = Math.pow(10, e);
    return Math.round(t * o) / o;
  }, x5 = (t, e) => /[0-9.]+px$/.test(t) ? y5(parseInt(t, 10) * 72 / 96, e || 0) + "pt" : Q(v5, t).getOr(t), S5 = (t) => Q(b5, t).getOr(""), mO = (t) => {
    const e = () => {
      let i = u.none();
      const l = a.data, d = t.queryCommandValue("FontSize");
      if (d)
        for (let m = 3; i.isNone() && m >= 0; m--) {
          const g = x5(d, m), p = S5(g);
          i = Gt(l, (h) => h.format === d || h.format === g || h.format === p);
        }
      return {
        matchOpt: i,
        size: d
      };
    }, o = (i) => (l) => l.exists((d) => d.format === i), n = () => {
      const { matchOpt: i } = e();
      return i;
    }, s = w(u.none), r = (i) => () => {
      t.undoManager.transact(() => {
        t.focus(), t.execCommand("FontSize", !1, i.format);
      });
    }, c = (i) => {
      const { matchOpt: l, size: d } = e(), m = l.fold(w(d), (g) => g.title);
      U(i, Yo, { text: m }), tV(t, { value: m });
    }, a = xh(t, "font_size_formats", Xc.Space);
    return {
      tooltip: jc(t, uO, dO),
      text: u.some(dO),
      icon: u.none(),
      isSelectedFor: o,
      getPreviewFor: s,
      getCurrentValue: n,
      onAction: r,
      updateText: c,
      dataset: a,
      shouldHide: !1,
      isInvalid: Lt
    };
  }, w5 = (t, e) => bi(t, e, mO(t), uO, "FontSizeTextUpdate"), T5 = (t) => {
    var e;
    const o = { step: 1 };
    return (e = {
      em: { step: 0.1 },
      cm: { step: 0.1 },
      in: { step: 0.1 },
      pc: { step: 0.1 },
      ch: { step: 0.1 },
      rem: { step: 0.1 }
    }[t]) !== null && e !== void 0 ? e : o;
  }, _5 = 16, C5 = (t) => t >= 0, O5 = (t) => {
    const e = () => t.queryCommandValue("FontSize");
    return {
      updateInputValue: (n) => U(n, Yo, { text: e() }),
      onAction: (n, s) => t.execCommand("FontSize", !1, n, { skip_focus: !s }),
      getNewValue: (n, s) => {
        Iu(n, [
          "unsupportedLength",
          "empty"
        ]);
        const r = e(), c = Iu(n, [
          "unsupportedLength",
          "empty"
        ]).or(Iu(r, [
          "unsupportedLength",
          "empty"
        ])), a = c.map((g) => g.value).getOr(_5), i = lS(t), l = c.map((g) => g.unit).filter((g) => g !== "").getOr(i), d = s(a, T5(l).step), m = `${C5(d) ? d : a}${l}`;
        return m !== r && eV(t, { value: m }), m;
      }
    };
  }, k5 = (t, e) => h5(t, e, O5(t)), E5 = (t, e) => {
    const o = Yc(t, e, mO(t));
    t.ui.registry.addNestedMenuItem("fontsize", {
      text: f5,
      onSetup: je(t),
      getSubmenuItems: () => o.items.validateItems(o.getStyleItems())
    });
  }, A5 = "Formats", gO = "Format {0}", pO = (t, e) => {
    const o = "Paragraph", n = (c) => () => t.formatter.match(c), s = (c) => () => {
      const a = t.formatter.get(c);
      return a !== void 0 ? u.some({
        tag: a.length > 0 && (a[0].inline || a[0].block) || "div",
        styles: t.dom.parseStyle(t.formatter.getCssText(c))
      }) : u.none();
    }, r = (c) => {
      const a = (m) => G_(m) ? le(m.items, a) : j_(m) ? [{
        title: m.title,
        format: m.format
      }] : [], i = le(K_(t), a), d = oO(t, w(i)).fold(w(o), (m) => m.title);
      U(c, Yo, { text: d }), ZL(t, { value: d });
    };
    return {
      tooltip: jc(t, gO, o),
      text: u.some(o),
      icon: u.none(),
      isSelectedFor: n,
      getCurrentValue: u.none,
      getPreviewFor: s,
      onAction: kw(t),
      updateText: r,
      shouldHide: tS(t),
      isInvalid: (c) => !t.formatter.canApply(c.format),
      dataset: e
    };
  }, D5 = (t, e) => {
    const o = {
      type: "advanced",
      ...e.styles
    };
    return bi(t, e, pO(t, o), gO, "StylesTextUpdate");
  }, M5 = (t, e) => {
    const o = {
      type: "advanced",
      ...e.styles
    }, n = Yc(t, e, pO(t, o));
    t.ui.registry.addNestedMenuItem("styles", {
      text: A5,
      onSetup: je(t),
      getSubmenuItems: () => n.items.validateItems(n.getStyleItems())
    });
  }, $5 = w([
    k("toggleClass"),
    k("fetch"),
    $r("onExecute"),
    S("getHotspot", u.some),
    S("getAnchorOverrides", w({})),
    Ys(),
    $r("onItemExecute"),
    _t("lazySink"),
    k("dom"),
    pt("onOpen"),
    be("splitDropdownBehaviours", [
      Wt,
      z,
      Z
    ]),
    S("matchWidth", !1),
    S("useMinWidth", !1),
    S("eventOrder", {}),
    _t("role")
  ].concat(lp())), F5 = Pe({
    factory: Se,
    schema: [k("dom")],
    name: "arrow",
    defaults: () => ({ buttonBehaviours: D([Z.revoke()]) }),
    overrides: (t) => ({
      dom: {
        tag: "span",
        attributes: { role: "presentation" }
      },
      action: (e) => {
        e.getSystem().getByUid(t.uid).each(Cr);
      },
      buttonBehaviours: D([ct.config({
        toggleOnExecute: !1,
        toggleClass: t.toggleClass
      })])
    })
  }), B5 = Pe({
    factory: Se,
    schema: [k("dom")],
    name: "button",
    defaults: () => ({ buttonBehaviours: D([Z.revoke()]) }),
    overrides: (t) => ({
      dom: {
        tag: "span",
        attributes: { role: "presentation" }
      },
      action: (e) => {
        e.getSystem().getByUid(t.uid).each((o) => {
          t.onExecute(o, e);
        });
      }
    })
  }), I5 = w([
    F5,
    B5,
    zo({
      factory: {
        sketch: (t) => ({
          uid: t.uid,
          dom: {
            tag: "span",
            styles: { display: "none" },
            attributes: { "aria-hidden": "true" },
            innerHtml: t.text
          }
        })
      },
      schema: [k("text")],
      name: "aria-descriptor"
    }),
    an({
      schema: [Qi()],
      name: "menu",
      defaults: (t) => ({
        onExecute: (e, o) => {
          e.getSystem().getByUid(t.uid).each((n) => {
            t.onItemExecute(n, e, o);
          });
        }
      })
    }),
    Xw()
  ]), R5 = (t, e, o, n) => {
    const s = (d) => {
      mt.getCurrent(d).each((m) => {
        yt.highlightFirst(m), z.focusIn(m);
      });
    }, r = (d) => {
      ap(t, Tt, d, n, s, oo.HighlightMenuAndItem).get(R);
    }, c = (d) => (r(d), u.some(!0)), a = (d) => {
      const m = Ks(d, t, "button");
      return Cr(m), u.some(!0);
    }, i = {
      ...It([Vt((d, m) => {
        Dt(d, t, "aria-descriptor").each((p) => {
          const h = P("aria");
          st(p.element, "id", h), st(d.element, "aria-describedby", h);
        });
      })]),
      ...Al(u.some(r))
    }, l = {
      repositionMenus: (d) => {
        ct.isOn(d) && Zw(d);
      }
    };
    return {
      uid: t.uid,
      dom: t.dom,
      components: e,
      apis: l,
      eventOrder: {
        ...t.eventOrder,
        [Ao()]: [
          "disabling",
          "toggling",
          "alloy.base.behaviour"
        ]
      },
      events: i,
      behaviours: xe(t.splitDropdownBehaviours, [
        Wt.config({
          others: {
            sandbox: (d) => {
              const m = Ks(d, t, "arrow");
              return ip(t, d, {
                onOpen: () => {
                  ct.on(m), ct.on(d);
                },
                onClose: () => {
                  ct.off(m), ct.off(d);
                }
              });
            }
          }
        }),
        z.config({
          mode: "special",
          onSpace: a,
          onEnter: a,
          onDown: c
        }),
        Z.config({}),
        ct.config({
          toggleOnExecute: !1,
          aria: { mode: "expanded" }
        })
      ]),
      domModification: {
        attributes: {
          role: t.role.getOr("button"),
          "aria-haspopup": !0
        }
      }
    };
  }, Ru = Ge({
    name: "SplitDropdown",
    configFields: $5(),
    partFields: I5(),
    factory: R5,
    apis: { repositionMenus: (t, e) => t.repositionMenus(e) }
  }), hO = (t) => ({
    isEnabled: () => !q.isDisabled(t),
    setEnabled: (e) => q.set(t, !e),
    setText: (e) => U(t, Yo, { text: e }),
    setIcon: (e) => U(t, Zr, { icon: e })
  }), P5 = (t) => ({
    setActive: (e) => {
      ct.set(t, e);
    },
    isActive: () => ct.isOn(t),
    isEnabled: () => !q.isDisabled(t),
    setEnabled: (e) => q.set(t, !e),
    setText: (e) => U(t, Yo, { text: e }),
    setIcon: (e) => U(t, Zr, { icon: e })
  }), fO = (t, e) => t.map((o) => ({
    "aria-label": e.translate(o),
    title: e.translate(o)
  })).getOr({}), bO = P("focus-button"), _h = (t, e, o, n, s) => {
    const r = e.map((a) => St(d_(a, "tox-tbtn", s))), c = t.map((a) => St(rr(a, s.icons)));
    return {
      dom: {
        tag: "button",
        classes: ["tox-tbtn"].concat(e.isSome() ? ["tox-tbtn--select"] : []),
        attributes: fO(o, s)
      },
      components: Rc([
        c.map((a) => a.asSpec()),
        r.map((a) => a.asSpec())
      ]),
      eventOrder: {
        [Ho()]: [
          "focusing",
          "alloy.base.behaviour",
          Jr
        ],
        [Wn()]: [
          Jr,
          "toolbar-group-button-events"
        ]
      },
      buttonBehaviours: D([
        mn.toolbarButton(s.isDisabled),
        re(),
        nt(Jr, [
          Vt((a, i) => $p(a)),
          O(Yo, (a, i) => {
            r.bind((l) => l.getOpt(a)).each((l) => {
              et.set(l, [qt(s.translate(i.event.text))]);
            });
          }),
          O(Zr, (a, i) => {
            c.bind((l) => l.getOpt(a)).each((l) => {
              et.set(l, [rr(i.event.icon, s.icons)]);
            });
          }),
          O(Ho(), (a, i) => {
            i.event.prevent(), xt(a, bO);
          })
        ])
      ].concat(n.getOr([])))
    };
  }, L5 = (t, e, o, n) => {
    const s = e.shared, r = j(R), c = {
      toolbarButtonBehaviours: [],
      getApi: hO,
      onSetup: t.onSetup
    }, a = [nt("toolbar-group-button-events", [
      Zs(c, r),
      Qs(c, r)
    ])];
    return ar.sketch({
      lazySink: s.getSink,
      fetch: () => $e.nu((i) => {
        i(B(o(t.items), $u));
      }),
      markers: { toggledClass: "tox-tbtn--enabled" },
      parts: {
        button: _h(t.icon, t.text, t.tooltip, u.some(a), s.providers),
        toolbar: {
          dom: {
            tag: "div",
            classes: ["tox-toolbar__overflow"],
            attributes: n
          }
        }
      }
    });
  }, vO = (t, e, o) => {
    var n;
    const s = j(R), r = _h(t.icon, t.text, t.tooltip, u.none(), o);
    return Se.sketch({
      dom: r.dom,
      components: r.components,
      eventOrder: l_,
      buttonBehaviours: {
        ...D([
          nt("toolbar-button-events", [
            jz({
              onAction: t.onAction,
              getApi: e.getApi
            }),
            Zs(e, s),
            Qs(e, s)
          ]),
          mn.toolbarButton(() => !t.enabled || o.isDisabled()),
          re()
        ].concat(e.toolbarButtonBehaviours)),
        [Jr]: (n = r.buttonBehaviours) === null || n === void 0 ? void 0 : n[Jr]
      }
    });
  }, V5 = (t, e) => yO(t, e, []), yO = (t, e, o) => vO(t, {
    toolbarButtonBehaviours: o.length > 0 ? [nt("toolbarButtonWith", o)] : [],
    getApi: hO,
    onSetup: t.onSetup
  }, e), H5 = (t, e) => xO(t, e, []), xO = (t, e, o) => vO(t, {
    toolbarButtonBehaviours: [
      et.config({}),
      ct.config({
        toggleClass: "tox-tbtn--enabled",
        aria: { mode: "pressed" },
        toggleOnExecute: !1
      })
    ].concat(o.length > 0 ? [nt("toolbarToggleButtonWith", o)] : []),
    getApi: P5,
    onSetup: t.onSetup
  }, e), N5 = (t, e, o) => (n) => $e.nu((s) => e.fetch(s)).map((s) => u.from(up(jt(rp(P("menu-value"), s, (r) => {
    e.onItemAction(t(n), r);
  }, e.columns, e.presets, Fn.CLOSE_ON_EXECUTE, e.select.getOr(Lt), o), {
    movement: tu(e.columns, e.presets),
    menuBehaviours: Ka.unnamedEvents(e.columns !== "auto" ? [] : [Vt((r, c) => {
      Wg(r, 4, FS(e.presets)).each(({ numRows: a, numColumns: i }) => {
        z.setGridSize(r, a, i);
      });
    })])
  })))), z5 = (t, e) => {
    const o = (r) => ({
      isEnabled: () => !q.isDisabled(r),
      setEnabled: (c) => q.set(r, !c),
      setIconFill: (c, a) => {
        Jt(r.element, `svg path[class="${c}"], rect[class="${c}"]`).each((i) => {
          st(i, "fill", a);
        });
      },
      setActive: (c) => {
        st(r.element, "aria-pressed", c), Jt(r.element, "span").each((a) => {
          r.getSystem().getByDom(a).each((i) => ct.set(i, c));
        });
      },
      isActive: () => Jt(r.element, "span").exists((c) => r.getSystem().getByDom(c).exists(ct.isOn)),
      setText: (c) => Jt(r.element, "span").each((a) => r.getSystem().getByDom(a).each((i) => U(i, Yo, { text: c }))),
      setIcon: (c) => Jt(r.element, "span").each((a) => r.getSystem().getByDom(a).each((i) => U(i, Zr, { icon: c }))),
      setTooltip: (c) => {
        const a = e.providers.translate(c);
        ga(r.element, {
          "aria-label": a,
          title: a
        });
      }
    }), n = j(R), s = {
      getApi: o,
      onSetup: t.onSetup
    };
    return Ru.sketch({
      dom: {
        tag: "div",
        classes: ["tox-split-button"],
        attributes: {
          "aria-pressed": !1,
          ...fO(t.tooltip, e.providers)
        }
      },
      onExecute: (r) => {
        const c = o(r);
        c.isEnabled() && t.onAction(c);
      },
      onItemExecute: (r, c, a) => {
      },
      splitDropdownBehaviours: D([
        mn.splitButton(e.providers.isDisabled),
        re(),
        nt("split-dropdown-events", [
          Vt((r, c) => $p(r)),
          O(bO, Z.focus),
          Zs(s, n),
          Qs(s, n)
        ]),
        ai.config({})
      ]),
      eventOrder: {
        [Wn()]: [
          "alloy.base.behaviour",
          "split-dropdown-events"
        ]
      },
      toggleClass: "tox-tbtn--enabled",
      lazySink: e.getSink,
      fetch: N5(o, t, e.providers),
      parts: { menu: Nl(!1, t.columns, t.presets) },
      components: [
        Ru.parts.button(_h(t.icon, t.text, u.none(), u.some([ct.config({
          toggleClass: "tox-tbtn--enabled",
          toggleOnExecute: !1
        })]), e.providers)),
        Ru.parts.arrow({
          dom: {
            tag: "button",
            classes: [
              "tox-tbtn",
              "tox-split-button__chevron"
            ],
            innerHtml: Xx("chevron-down", e.providers.icons)
          },
          buttonBehaviours: D([
            mn.splitButton(e.providers.isDisabled),
            re(),
            hg()
          ])
        }),
        Ru.parts["aria-descriptor"]({ text: e.providers.translate("To open the popup, press Shift+Enter") })
      ]
    });
  }, U5 = [
    {
      name: "history",
      items: [
        "undo",
        "redo"
      ]
    },
    {
      name: "ai",
      items: [
        "aidialog",
        "aishortcuts"
      ]
    },
    {
      name: "styles",
      items: ["styles"]
    },
    {
      name: "formatting",
      items: [
        "bold",
        "italic"
      ]
    },
    {
      name: "alignment",
      items: [
        "alignleft",
        "aligncenter",
        "alignright",
        "alignjustify"
      ]
    },
    {
      name: "indentation",
      items: [
        "outdent",
        "indent"
      ]
    },
    {
      name: "permanent pen",
      items: ["permanentpen"]
    },
    {
      name: "comments",
      items: ["addcomment"]
    }
  ], vi = (t, e) => (o, n, s) => {
    const r = t(o).mapError((c) => dc(c)).getOrDie();
    return e(r, n, s);
  }, W5 = {
    button: vi(KS, (t, e) => V5(t, e.shared.providers)),
    togglebutton: vi(qS, (t, e) => H5(t, e.shared.providers)),
    menubutton: vi(kC, (t, e) => mi(t, "tox-tbtn", e, u.none(), !1)),
    splitbutton: vi(m3, (t, e) => z5(t, e.shared)),
    grouptoolbarbutton: vi(l3, (t, e, o) => {
      const n = o.ui.registry.getAll().buttons, s = (c) => Pu(o, {
        buttons: n,
        toolbar: c,
        allowToolbarGroups: !1
      }, e, u.none()), r = { [_m]: e.shared.header.isPositionedAtTop() ? Ts.TopToBottom : Ts.BottomToTop };
      switch ($c(o)) {
        case Wo.floating:
          return L5(t, e, s, r);
        default:
          throw new Error("Toolbar groups are only supported when using floating toolbar mode");
      }
    })
  }, G5 = (t, e, o) => Q(W5, t.type).fold(() => (console.error("skipping button defined by", t), u.none()), (n) => u.some(n(t, e, o))), SO = {
    styles: D5,
    fontsize: w5,
    fontsizeinput: k5,
    fontfamily: l5,
    blocks: s5,
    align: e5
  }, j5 = (t) => {
    const e = B(U5, (o) => {
      const n = Ht(o.items, (s) => At(t, s) || At(SO, s));
      return {
        name: o.name,
        items: n
      };
    });
    return Ht(e, (o) => o.items.length > 0);
  }, Y5 = (t) => {
    const e = t.split("|");
    return B(e, (o) => ({ items: o.trim().split(" ") }));
  }, X5 = (t) => aa(t, (e) => At(e, "name") && At(e, "items")), K5 = (t) => {
    const e = t.toolbar, o = t.buttons;
    return e === !1 ? [] : e === void 0 || e === !0 ? j5(o) : Ct(e) ? Y5(e) : X5(e) ? e : (console.error("Toolbar type should be string, string[], boolean or ToolbarGroup[]"), []);
  }, q5 = (t, e, o, n, s, r) => Q(e, o.toLowerCase()).orThunk(() => r.bind((c) => xn(c, (a) => Q(e, a + o.toLowerCase())))).fold(() => Q(SO, o.toLowerCase()).map((c) => c(t, s)), (c) => c.type === "grouptoolbarbutton" && !n ? (console.warn(`Ignoring the '${o}' toolbar button. Group toolbar buttons are only supported when using floating toolbar mode and cannot be nested.`), u.none()) : G5(c, s, t)), Pu = (t, e, o, n) => {
    const s = K5(e), r = B(s, (c) => {
      const a = le(c.items, (i) => i.trim().length === 0 ? [] : q5(t, e.buttons, i, e.allowToolbarGroups, o, n).toArray());
      return {
        title: u.from(t.translate(c.name)),
        items: a
      };
    });
    return Ht(r, (c) => c.items.length > 0);
  }, wO = (t, e, o, n) => {
    const s = e.mainUi.outerContainer, r = o.toolbar, c = o.buttons;
    if (aa(r, Ct)) {
      const a = r.map((i) => {
        const l = {
          toolbar: i,
          buttons: c,
          allowToolbarGroups: o.allowToolbarGroups
        };
        return Pu(t, l, n, u.none());
      });
      $t.setToolbars(s, a);
    } else
      $t.setToolbar(s, Pu(t, o, n, u.none()));
  }, TO = gs(), J5 = TO.os.isiOS() && TO.os.version.major <= 12, Z5 = (t, e) => {
    const { uiMotherships: o } = e, n = t.dom;
    let s = t.getWin();
    const r = t.getDoc().documentElement, c = j(Ut(s.innerWidth, s.innerHeight)), a = j(Ut(r.offsetWidth, r.offsetHeight)), i = () => {
      const g = c.get();
      (g.left !== s.innerWidth || g.top !== s.innerHeight) && (c.set(Ut(s.innerWidth, s.innerHeight)), Kg(t));
    }, l = () => {
      const g = t.getDoc().documentElement, p = a.get();
      (p.left !== g.offsetWidth || p.top !== g.offsetHeight) && (a.set(Ut(g.offsetWidth, g.offsetHeight)), Kg(t));
    }, d = (g) => {
      XL(t, g);
    };
    n.bind(s, "resize", i), n.bind(s, "scroll", d);
    const m = wm(F.fromDom(t.getBody()), "load", l);
    t.on("hide", () => {
      Y(o, (g) => {
        rt(g.element, "display", "none");
      });
    }), t.on("show", () => {
      Y(o, (g) => {
        kt(g.element, "display");
      });
    }), t.on("NodeChange", l), t.on("remove", () => {
      m.unbind(), n.unbind(s, "resize", i), n.unbind(s, "scroll", d), s = null;
    });
  }, Q5 = (t, e, o) => {
    qs(t) && ul(o.mainUi.mothership.element, o.popupUi.mothership), Mm(e, o.dialogUi.mothership);
  };
  var tj = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    render: (t, e, o, n, s) => {
      const { mainUi: r, uiMotherships: c } = e, a = j(0), i = r.outerContainer;
      XG(t);
      const l = F.fromDom(s.targetNode), d = ic(qe(l));
      ul(l, r.mothership), Q5(t, d, e), t.on("SkinLoaded", () => {
        $t.setSidebar(i, o.sidebar, yS(t)), wO(t, e, o, n), a.set(t.getWin().innerWidth), $t.setMenubar(i, qC(t, o)), $t.setViews(i, o.views), Z5(t, e);
      });
      const m = $t.getSocket(i).getOrDie("Could not find expected socket element");
      if (J5) {
        pr(m.element, {
          overflow: "scroll",
          "-webkit-overflow-scrolling": "touch"
        });
        const f = $z(() => {
          t.dispatch("ScrollContent");
        }, 20), y = to(m.element, "scroll", f.throttle);
        t.on("remove", y.unbind);
      }
      rw(t, e), t.addCommand("ToggleSidebar", (f, y) => {
        $t.toggleSidebar(i, y), t.dispatch("ToggleSidebar");
      }), t.addQueryValueHandler("ToggleSidebar", () => {
        var f;
        return (f = $t.whichSidebar(i)) !== null && f !== void 0 ? f : "";
      }), t.addCommand("ToggleView", (f, y) => {
        if ($t.toggleView(i, y)) {
          const v = i.element;
          r.mothership.broadcastOn([Xs()], { target: v }), Y(c, (b) => {
            b.broadcastOn([Xs()], { target: v });
          }), sc($t.whichView(i)) && (t.focus(), t.nodeChanged(), $t.refreshToolbar(i));
        }
      }), t.addQueryValueHandler("ToggleView", () => {
        var f;
        return (f = $t.whichView(i)) !== null && f !== void 0 ? f : "";
      });
      const g = $c(t), p = () => {
        $t.refreshToolbar(e.mainUi.outerContainer);
      };
      (g === Wo.sliding || g === Wo.floating) && t.on("ResizeWindow ResizeEditor ResizeContent", () => {
        const f = t.getWin().innerWidth;
        f !== a.get() && (p(), a.set(f));
      });
      const h = {
        setEnabled: (f) => {
          Xl(e, !f);
        },
        isEnabled: () => !q.isDisabled(i)
      };
      return {
        iframeContainer: m.element.dom,
        editorContainer: i.element.dom,
        api: h
      };
    }
  });
  const Ch = (t) => /^[0-9\.]+(|px)$/i.test("" + t) ? u.some(parseInt("" + t, 10)) : u.none(), Oh = (t) => Vn(t) ? t + "px" : t, Lu = (t, e, o) => {
    const n = e.filter((r) => t < r), s = o.filter((r) => t > r);
    return n.or(s).getOr(t);
  }, ej = (t) => {
    const e = bg(t), o = xg(t), n = Sg(t);
    return Ch(e).map((s) => Lu(s, o, n));
  }, oj = (t) => ej(t).getOr(bg(t)), _O = (t) => {
    const e = vg(t), o = yg(t), n = Bl(t);
    return Ch(e).map((s) => Lu(s, o, n));
  }, nj = (t) => _O(t).getOr(vg(t)), { ToolbarLocation: kh, ToolbarMode: CO } = rP, sj = 40, rj = (t, e, o, n, s) => {
    const { mainUi: r, uiMotherships: c } = o, a = Dc.DOM, i = Fc(t), l = Ga(t), d = Bl(t).or(_O(t)), m = n.shared.header, g = m.isPositionedAtTop, p = $c(t), h = p === CO.sliding || p === CO.floating, f = j(!1), y = () => f.get() && !t.removed, v = (N) => h ? N.fold(w(0), (dt) => dt.components().length > 1 ? ge(dt.components()[1].element) : 0) : 0, b = (N) => {
      switch (wg(t)) {
        case kh.auto:
          const dt = $t.getToolbar(r.outerContainer), $ = v(dt), L = ge(N.element) - $, J = Be(e);
          if (J.y > L)
            return "top";
          {
            const G = ud(e), tt = Math.max(G.dom.scrollHeight, ge(G));
            return J.bottom < tt - L || Ze().bottom < J.bottom - L ? "bottom" : "top";
          }
        case kh.bottom:
          return "bottom";
        case kh.top:
        default:
          return "top";
      }
    }, x = (N) => {
      s.on((dt) => {
        Kt.setModes(dt, [N]), m.setDockingMode(N);
        const $ = g() ? Ts.TopToBottom : Ts.BottomToTop;
        st(dt.element, _m, $);
      });
    }, E = () => {
      s.on((N) => {
        const dt = d.getOrThunk(() => {
          const $ = Ch(Ne(Nn(), "margin-left")).getOr(0);
          return ro(Nn()) - Jo(e).left + $;
        });
        rt(N.element, "max-width", dt + "px");
      });
    }, C = (N) => {
      s.on((dt) => {
        const $ = $t.getToolbar(r.outerContainer), L = v($), J = Be(e), { top: it, left: G } = _(t, r.outerContainer.element).fold(() => ({
          top: g() ? Math.max(J.y - ge(dt.element) + L, 0) : J.bottom,
          left: J.x
        }), (ft) => {
          var we;
          const Ft = Be(ft), Ye = (we = ft.dom.scrollTop) !== null && we !== void 0 ? we : 0, Io = Bt(ft, Nn()), ts = Io ? Math.max(J.y - ge(dt.element) + L, 0) : J.y - Ft.y + Ye - ge(dt.element) + L;
          return {
            top: g() ? ts : J.bottom,
            left: Io ? J.x : J.x - Ft.x
          };
        }), tt = {
          position: "absolute",
          left: Math.round(G) + "px",
          top: Math.round(it) + "px"
        }, Ot = N.map((ft) => {
          const we = Qo(), Ft = 150, Ye = window.innerWidth - (G - we.left);
          return { width: Math.max(Math.min(ft, Ye), Ft) + "px" };
        }).getOr({});
        pr(r.outerContainer.element, {
          ...tt,
          ...Ot
        });
      });
    }, _ = (N, dt) => qs(N) ? th(dt) : u.none(), A = () => {
      Y(c, (N) => {
        N.broadcastOn([Cc()], {});
      });
    }, M = () => {
      if (i)
        return u.none();
      if (Jo(r.outerContainer.element).left + hr(r.outerContainer.element) >= window.innerWidth - sj || Ce(r.outerContainer.element, "width").isSome()) {
        rt(r.outerContainer.element, "position", "absolute"), rt(r.outerContainer.element, "left", "0px"), kt(r.outerContainer.element, "width");
        const dt = hr(r.outerContainer.element);
        return u.some(dt);
      } else
        return u.none();
    }, ot = (N) => {
      if (!y())
        return;
      i || E();
      const dt = i ? u.none() : M();
      h && $t.refreshToolbar(r.outerContainer), i || C(dt), l && s.on(N), A();
    }, V = () => i || !l || !y() ? !1 : s.get().exists((N) => {
      const dt = m.getDockingMode(), $ = b(N);
      return $ !== dt ? (x($), !0) : !1;
    });
    return {
      isVisible: y,
      isPositionedAtTop: g,
      show: () => {
        f.set(!0), rt(r.outerContainer.element, "display", "flex"), a.addClass(t.getBody(), "mce-edit-focus"), Y(c, (N) => {
          kt(N.element, "display");
        }), V(), qs(t) ? ot((N) => Kt.isDocked(N) ? Kt.reset(N) : Kt.refresh(N)) : ot(Kt.refresh);
      },
      hide: () => {
        f.set(!1), rt(r.outerContainer.element, "display", "none"), a.removeClass(t.getBody(), "mce-edit-focus"), Y(c, (N) => {
          rt(N.element, "display", "none");
        });
      },
      update: ot,
      updateMode: () => {
        V() && ot(Kt.reset);
      },
      repositionPopups: A
    };
  }, OO = (t, e) => {
    const o = Be(t);
    return {
      pos: e ? o.y : o.bottom,
      bounds: o
    };
  }, cj = (t, e, o, n) => {
    const s = j(OO(e, o.isPositionedAtTop())), r = (l) => {
      const { pos: d, bounds: m } = OO(e, o.isPositionedAtTop()), {
        pos: g,
        bounds: p
      } = s.get(), h = m.height !== p.height || m.width !== p.width;
      s.set({
        pos: d,
        bounds: m
      }), h && Kg(t, l), o.isVisible() && (g !== d ? o.update(Kt.reset) : h && (o.updateMode(), o.repositionPopups()));
    };
    n || (t.on("activate", o.show), t.on("deactivate", o.hide)), t.on("SkinLoaded ResizeWindow", () => o.update(Kt.reset)), t.on("NodeChange keydown", (l) => {
      requestAnimationFrame(() => r(l));
    });
    let c = 0;
    const a = Ep(() => o.update(Kt.refresh), 33);
    t.on("ScrollWindow", () => {
      const l = Qo().left;
      l !== c && (c = l, a.throttle()), o.updateMode();
    }), qs(t) && t.on("ElementScroll", (l) => {
      o.update(Kt.refresh);
    });
    const i = Tc();
    i.set(wm(F.fromDom(t.getBody()), "load", (l) => r(l.raw))), t.on("remove", () => {
      i.clear();
    });
  };
  var aj = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    render: (t, e, o, n, s) => {
      const { mainUi: r } = e, c = Pt(), a = F.fromDom(s.targetNode), i = rj(t, a, e, n, c), l = sS(t);
      KG(t);
      const d = () => {
        if (c.isSet()) {
          i.show();
          return;
        }
        c.set($t.getHeader(r.outerContainer).getOrDie());
        const g = kg(t);
        qs(t) ? (ul(a, r.mothership), ul(a, e.popupUi.mothership)) : Mm(g, r.mothership), Mm(g, e.dialogUi.mothership), wO(t, e, o, n), $t.setMenubar(r.outerContainer, qC(t, o)), i.show(), cj(t, a, i, l), t.nodeChanged();
      };
      t.on("show", d), t.on("hide", i.hide), l || (t.on("focus", d), t.on("blur", i.hide)), t.on("init", () => {
        (t.hasFocus() || l) && d();
      }), rw(t, e);
      const m = {
        show: d,
        hide: i.hide,
        setEnabled: (g) => {
          Xl(e, !g);
        },
        isEnabled: () => !q.isDisabled(r.outerContainer)
      };
      return {
        editorContainer: r.outerContainer.element.dom,
        api: m
      };
    }
  });
  const ij = () => {
    const t = Pt(), e = Pt(), o = Pt();
    return {
      dialogUi: t,
      popupUi: e,
      mainUi: o,
      getUiMotherships: () => {
        const r = t.get().map((a) => a.mothership), c = e.get().map((a) => a.mothership);
        return r.fold(() => c.toArray(), (a) => c.fold(() => [a], (i) => Bt(a.element, i.element) ? [a] : [
          a,
          i
        ]));
      },
      lazyGetInOuterOrDie: (r, c) => () => o.get().bind((a) => c(a.outerContainer)).getOrDie(`Could not find ${r} element in OuterContainer`)
    };
  }, lj = "contexttoolbar-show", kO = "contexttoolbar-hide", uj = (t) => ({
    hide: () => xt(t, Gi()),
    getValue: () => I.getValue(t)
  }), EO = (t, e) => O(i_, (o, n) => {
    const s = t.get(o), r = uj(s);
    e.onAction(r, n.event.buttonApi);
  }), dj = (t, e, o) => {
    const { primary: n, ...s } = e.original, r = On(KS({
      ...s,
      type: "button",
      onAction: R
    }));
    return yO(r, o, [EO(t, e)]);
  }, mj = (t, e, o) => {
    const { primary: n, ...s } = e.original, r = On(qS({
      ...s,
      type: "togglebutton",
      onAction: R
    }));
    return xO(r, o, [EO(t, e)]);
  }, gj = (t) => t.type === "contextformtogglebutton", pj = (t, e, o) => gj(e) ? mj(t, e, o) : dj(t, e, o), hj = (t, e, o) => {
    const n = B(e, (c) => St(pj(t, c, o)));
    return {
      asSpecs: () => B(n, (c) => c.asSpec()),
      findPrimary: (c) => xn(e, (a, i) => a.primary ? u.from(n[i]).bind((l) => l.getOpt(c)).filter(ia(q.isDisabled)) : u.none())
    };
  }, AO = (t, e) => {
    const o = t.label.fold(() => ({}), (r) => ({ "aria-label": r })), n = St(Hr.sketch({
      inputClasses: [
        "tox-toolbar-textfield",
        "tox-toolbar-nav-js"
      ],
      data: t.initValue(),
      inputAttributes: o,
      selectOnFocus: !0,
      inputBehaviours: D([z.config({
        mode: "special",
        onEnter: (r) => s.findPrimary(r).map((c) => (Cr(c), !0)),
        onLeft: (r, c) => (c.cut(), u.none()),
        onRight: (r, c) => (c.cut(), u.none())
      })])
    })), s = hj(n, t.commands, e);
    return [
      {
        title: u.none(),
        items: [n.asSpec()]
      },
      {
        title: u.none(),
        items: s.asSpecs()
      }
    ];
  }, fj = {
    renderContextForm: (t, e, o) => Fu({
      type: t,
      uid: P("context-toolbar"),
      initGroups: AO(e, o),
      onEscape: u.none,
      cyclicKeying: !0,
      providers: o
    }),
    buildInitGroups: AO
  }, DO = (t, e, o) => e.bottom - t.y >= o && t.bottom - e.y >= o, bj = (t) => {
    const e = t.getBoundingClientRect();
    if (e.height <= 0 && e.width <= 0) {
      const o = Df(F.fromDom(t.startContainer), t.startOffset).element;
      return (mr(o) ? Tn(o) : u.some(o)).filter(_o).map((s) => s.dom.getBoundingClientRect()).getOr(e);
    } else
      return e;
  }, Eh = (t) => {
    const e = t.selection.getRng(), o = bj(e);
    if (t.inline) {
      const n = Qo();
      return pe(n.left + o.left, n.top + o.top, o.width, o.height);
    } else {
      const n = fr(F.fromDom(t.getBody()));
      return pe(n.x + o.left, n.y + o.top, o.width, o.height);
    }
  }, vj = (t, e) => e.filter((o) => qo(o) && Cf(o)).map(fr).getOrThunk(() => Eh(t)), yj = (t, e, o) => {
    const n = Math.max(t.x + o, e.x), s = Math.min(t.right - o, e.right);
    return {
      x: n,
      width: s - n
    };
  }, xj = (t, e, o, n, s, r) => {
    const c = F.fromDom(t.getContainer()), a = Jt(c, ".tox-editor-header").getOr(c), i = Be(a), l = i.y >= e.bottom, d = n && !l;
    if (t.inline && d)
      return {
        y: Math.max(i.bottom + r, o.y),
        bottom: o.bottom
      };
    if (t.inline && !d)
      return {
        y: o.y,
        bottom: Math.min(i.y - r, o.bottom)
      };
    const m = s === "line" ? Be(c) : e;
    return d ? {
      y: Math.max(i.bottom + r, o.y),
      bottom: Math.min(m.bottom - r, o.bottom)
    } : {
      y: Math.max(m.y + r, o.y),
      bottom: Math.min(i.y - r, o.bottom)
    };
  }, MO = (t, e, o, n = 0) => {
    const s = Qf(window), r = Be(F.fromDom(t.getContentAreaContainer())), c = Rl(t) || Vl(t) || Wa(t), { x: a, width: i } = yj(r, s, n);
    if (t.inline && !c)
      return pe(a, s.y, i, s.height);
    {
      const l = e.header.isPositionedAtTop(), { y: d, bottom: m } = xj(t, r, s, l, o, n);
      return pe(a, d, i, m - d);
    }
  }, Vu = 12, $O = {
    valignCentre: [],
    alignCentre: [],
    alignLeft: ["tox-pop--align-left"],
    alignRight: ["tox-pop--align-right"],
    right: ["tox-pop--right"],
    left: ["tox-pop--left"],
    bottom: ["tox-pop--bottom"],
    top: ["tox-pop--top"],
    inset: ["tox-pop--inset"]
  }, FO = {
    maxHeightFunction: _c(),
    maxWidthFunction: gh()
  }, Sj = (t, e) => {
    const o = t.selection.getRng(), n = Df(F.fromDom(o.startContainer), o.startOffset);
    return o.startContainer === o.endContainer && o.startOffset === o.endOffset - 1 && Bt(n.element, e);
  }, wj = (t, e, o) => {
    const n = Ce(t, "position");
    rt(t, "position", e);
    const s = o(t);
    return n.each((r) => rt(t, "position", r)), s;
  }, BO = (t) => t === "node", Tj = (t, e, o, n, s) => {
    const r = Eh(t), c = n.lastElement().exists((a) => Bt(o, a));
    if (Sj(t, o))
      return c ? W_ : vn;
    if (c)
      return wj(e, n.getMode(), () => DO(r, Be(e), -20) && !n.isReposition() ? wU : W_);
    {
      const a = n.getMode() === "fixed" ? s.y + Qo().top : s.y, i = ge(e) + Vu;
      return a + i <= r.y ? vn : hi;
    }
  }, _j = (t, e, o, n) => {
    const s = (i) => (l, d, m, g, p) => {
      const h = Tj(t, g, i, o, p), f = {
        ...l,
        y: p.y,
        height: p.height
      };
      return {
        ...h(f, d, m, g, p),
        alwaysFit: !0
      };
    }, r = (i) => BO(n) ? [s(i)] : [];
    return e ? {
      onLtr: (i) => [
        fe,
        De,
        Me,
        io,
        lo,
        Ue
      ].concat(r(i)),
      onRtl: (i) => [
        fe,
        Me,
        De,
        lo,
        io,
        Ue
      ].concat(r(i))
    } : {
      onLtr: (i) => [
        Ue,
        fe,
        io,
        De,
        lo,
        Me
      ].concat(r(i)),
      onRtl: (i) => [
        Ue,
        fe,
        lo,
        Me,
        io,
        De
      ].concat(r(i))
    };
  }, Cj = (t, e, o, n) => e === "line" ? {
    bubble: ws(Vu, 0, $O),
    layouts: {
      onLtr: () => [dm],
      onRtl: () => [mm]
    },
    overrides: FO
  } : {
    bubble: ws(0, Vu, $O, 1 / Vu),
    layouts: _j(t, o, n, e),
    overrides: FO
  }, Ah = (t, e) => {
    const o = Ht(e, (r) => r.predicate(t.dom)), { pass: n, fail: s } = mf(o, (r) => r.type === "contexttoolbar");
    return {
      contextToolbars: n,
      contextForms: s
    };
  }, Oj = (t) => {
    if (t.length <= 1)
      return t;
    {
      const e = (r) => Xo(t, (c) => c.position === r), o = (r) => Ht(t, (c) => c.position === r), n = e("selection"), s = e("node");
      if (n || s)
        if (s && n) {
          const r = o("node"), c = B(o("selection"), (a) => ({
            ...a,
            position: "node"
          }));
          return r.concat(c);
        } else
          return o(n ? "selection" : "node");
      else
        return o("line");
    }
  }, kj = (t) => {
    if (t.length <= 1)
      return t;
    {
      const e = (n) => Gt(t, (s) => s.position === n);
      return e("selection").orThunk(() => e("node")).orThunk(() => e("line")).map((n) => n.position).fold(() => [], (n) => Ht(t, (s) => s.position === n));
    }
  }, Ej = (t, e, o) => {
    const n = Ah(t, e);
    if (n.contextForms.length > 0)
      return u.some({
        elem: t,
        toolbars: [n.contextForms[0]]
      });
    {
      const s = Ah(t, o);
      if (s.contextForms.length > 0)
        return u.some({
          elem: t,
          toolbars: [s.contextForms[0]]
        });
      if (n.contextToolbars.length > 0 || s.contextToolbars.length > 0) {
        const r = Oj(n.contextToolbars.concat(s.contextToolbars));
        return u.some({
          elem: t,
          toolbars: r
        });
      } else
        return u.none();
    }
  }, Aj = (t, e, o) => t(e) ? u.none() : xb(e, (n) => {
    if (_o(n)) {
      const { contextToolbars: s, contextForms: r } = Ah(n, o.inNodeScope), c = r.length > 0 ? r : kj(s);
      return c.length > 0 ? u.some({
        elem: n,
        toolbars: c
      }) : u.none();
    } else
      return u.none();
  }, t), Dj = (t, e) => {
    const o = F.fromDom(e.getBody()), n = (c) => Bt(c, o), s = (c) => !n(c) && !Bi(o, c), r = F.fromDom(e.selection.getNode());
    return s(r) ? u.none() : Ej(r, t.inNodeScope, t.inEditorScope).orThunk(() => Aj(n, r, t));
  }, Mj = (t, e) => {
    const o = {}, n = [], s = [], r = {}, c = {}, a = (d, m) => {
      const g = On(ZP(m));
      o[d] = g, g.launch.map((p) => {
        r["form:" + d] = {
          ...m.launch,
          type: p.type === "contextformtogglebutton" ? "togglebutton" : "button",
          onAction: () => {
            e(g);
          }
        };
      }), g.scope === "editor" ? s.push(g) : n.push(g), c[d] = g;
    }, i = (d, m) => {
      tL(m).each((g) => {
        m.scope === "editor" ? s.push(g) : n.push(g), c[d] = g;
      });
    }, l = ue(t);
    return Y(l, (d) => {
      const m = t[d];
      m.type === "contextform" ? a(d, m) : m.type === "contexttoolbar" && i(d, m);
    }), {
      forms: o,
      inNodeScope: n,
      inEditorScope: s,
      lookupTable: c,
      formNavigators: r
    };
  }, IO = P("forward-slide"), RO = P("backward-slide"), Dh = P("change-slide-event"), Mh = "tox-pop--resizing", $j = (t) => {
    const e = j([]);
    return Nt.sketch({
      dom: {
        tag: "div",
        classes: ["tox-pop"]
      },
      fireDismissalEventInstead: { event: "doNotDismissYet" },
      onShow: (o) => {
        e.set([]), Nt.getContent(o).each((n) => {
          kt(n.element, "visibility");
        }), Xt(o.element, Mh), kt(o.element, "width");
      },
      inlineBehaviours: D([
        nt("context-toolbar-events", [
          bc(wa(), (o, n) => {
            n.event.raw.propertyName === "width" && (Xt(o.element, Mh), kt(o.element, "width"));
          }),
          O(Dh, (o, n) => {
            const s = o.element;
            kt(s, "width");
            const r = ro(s);
            Nt.setContent(o, n.event.contents), ee(s, Mh);
            const c = ro(s);
            rt(s, "width", r + "px"), Nt.getContent(o).each((a) => {
              n.event.focus.bind((i) => (sn(i), Dn(s))).orThunk(() => (z.focusIn(a), jn(qe(s))));
            }), setTimeout(() => {
              rt(o.element, "width", c + "px");
            }, 0);
          }),
          O(IO, (o, n) => {
            Nt.getContent(o).each((s) => {
              e.set(e.get().concat([{
                bar: s,
                focus: jn(qe(o.element))
              }]));
            }), U(o, Dh, {
              contents: n.event.forwardContents,
              focus: u.none()
            });
          }),
          O(RO, (o, n) => {
            nd(e.get()).each((s) => {
              e.set(e.get().slice(0, e.get().length - 1)), U(o, Dh, {
                contents: No(s.bar),
                focus: s.focus
              });
            });
          })
        ]),
        z.config({
          mode: "special",
          onEscape: (o) => nd(e.get()).fold(() => t.onEscape(), (n) => (xt(o, RO), u.some(!0)))
        })
      ]),
      lazySink: () => ut.value(t.sink)
    });
  }, $h = "tox-pop--transition", Fj = (t, e, o, n) => {
    const s = n.backstage, r = s.shared, c = gs().deviceType.isTouch, a = Pt(), i = Pt(), l = Pt(), d = Re($j({
      sink: o,
      onEscape: () => (t.focus(), u.some(!0))
    })), m = () => {
      const V = l.get().getOr("node"), W = BO(V) ? 1 : 0;
      return MO(t, r, V, W);
    }, g = () => !t.removed && !(c() && s.isContextMenuOpen()), p = (V) => Sn(Di(V, a.get(), Bt), !0), h = () => {
      if (g()) {
        const V = m(), W = Sn(l.get(), "node") ? vj(t, a.get()) : Eh(t);
        return V.height <= 0 || !DO(W, V, 0.01);
      } else
        return !0;
    }, f = () => {
      a.clear(), i.clear(), l.clear(), Nt.hide(d);
    }, y = () => {
      if (Nt.isOpen(d)) {
        const V = d.element;
        kt(V, "display"), h() ? rt(V, "display", "none") : (i.set(0), Nt.reposition(d));
      }
    }, v = (V) => ({
      dom: {
        tag: "div",
        classes: ["tox-pop__dialog"]
      },
      components: [V],
      behaviours: D([
        z.config({ mode: "acyclic" }),
        nt("pop-dialog-wrap-events", [
          Vt((W) => {
            t.shortcuts.add("ctrl+F9", "focus statusbar", () => z.focusIn(W));
          }),
          Gn((W) => {
            t.shortcuts.remove("ctrl+F9");
          })
        ])
      ])
    }), b = Vs(() => Mj(e, (V) => {
      const W = C([V]);
      U(d, IO, { forwardContents: v(W) });
    })), x = (V, W) => Pu(t, {
      buttons: V,
      toolbar: W.items,
      allowToolbarGroups: !1
    }, n.backstage, u.some(["form:"])), E = (V, W) => fj.buildInitGroups(V, W), C = (V) => {
      const { buttons: W } = t.ui.registry.getAll(), K = b(), vt = {
        ...W,
        ...K.formNavigators
      }, N = $c(t) === Wo.scrolling ? Wo.scrolling : Wo.default, dt = _e(B(V, ($) => $.type === "contexttoolbar" ? x(vt, $) : E($, r.providers)));
      return Fu({
        type: N,
        uid: P("context-toolbar"),
        initGroups: dt,
        onEscape: u.none,
        cyclicKeying: !0,
        providers: r.providers
      });
    }, _ = (V, W) => {
      const K = V === "node" ? r.anchors.node(W) : r.anchors.cursor(), vt = Cj(t, V, c(), {
        lastElement: a.get,
        isReposition: () => Sn(i.get(), 0),
        getMode: () => We.getMode(o)
      });
      return jt(K, vt);
    }, A = (V, W) => {
      if (ot.cancel(), !g())
        return;
      const K = C(V), vt = V[0].position, N = _(vt, W);
      l.set(vt), i.set(1);
      const dt = d.element;
      kt(dt, "display"), p(W) || (Xt(dt, $h), We.reset(o, d)), Nt.showWithinBounds(d, v(K), {
        anchor: N,
        transition: {
          classes: [$h],
          mode: "placement"
        }
      }, () => u.some(m())), W.fold(a.clear, a.set), h() && rt(dt, "display", "none");
    };
    let M = !1;
    const ot = Ep(() => {
      if (!(!t.hasFocus() || t.removed || M))
        if (ao(d.element, $h))
          ot.throttle();
        else {
          const V = b();
          Dj(V, t).fold(f, (W) => {
            A(W.toolbars, u.some(W.elem));
          });
        }
    }, 17);
    t.on("init", () => {
      t.on("remove", f), t.on("ScrollContent ScrollWindow ObjectResized ResizeEditor longpress", y), t.on("click keyup focus SetContent", ot.throttle), t.on(kO, f), t.on(lj, (V) => {
        const W = b();
        Q(W.lookupTable, V.toolbarKey).each((K) => {
          A([K], ls(V.target !== t, V.target)), Nt.getContent(d).each(z.focusIn);
        });
      }), t.on("focusout", (V) => {
        Dl.setEditorTimeout(t, () => {
          Dn(o.element).isNone() && Dn(d.element).isNone() && f();
        }, 0);
      }), t.on("SwitchMode", () => {
        t.mode.isReadOnly() && f();
      }), t.on("AfterProgressState", (V) => {
        V.state ? f() : t.hasFocus() && ot.throttle();
      }), t.on("dragstart", () => {
        M = !0;
      }), t.on("dragend drop", () => {
        M = !1;
      }), t.on("NodeChange", (V) => {
        Dn(d.element).fold(ot.throttle, R);
      });
    });
  }, Bj = (t) => {
    Y([
      {
        name: "alignleft",
        text: "Align left",
        cmd: "JustifyLeft",
        icon: "align-left"
      },
      {
        name: "aligncenter",
        text: "Align center",
        cmd: "JustifyCenter",
        icon: "align-center"
      },
      {
        name: "alignright",
        text: "Align right",
        cmd: "JustifyRight",
        icon: "align-right"
      },
      {
        name: "alignjustify",
        text: "Justify",
        cmd: "JustifyFull",
        icon: "align-justify"
      }
    ], (o) => {
      t.ui.registry.addToggleButton(o.name, {
        tooltip: o.text,
        icon: o.icon,
        onAction: vo(t, o.cmd),
        onSetup: Zl(t, o.name)
      });
    }), t.ui.registry.addButton("alignnone", {
      tooltip: "No alignment",
      icon: "align-none",
      onSetup: je(t),
      onAction: vo(t, "JustifyNone")
    });
  }, PO = (t, e) => {
    const o = () => {
      const n = e.getOptions(t), s = e.getCurrent(t).map(e.hash), r = Pt();
      return B(n, (c) => ({
        type: "togglemenuitem",
        text: e.display(c),
        onSetup: (a) => {
          const i = (d) => {
            d && (r.on((m) => m.setActive(!1)), r.set(a)), a.setActive(d);
          };
          i(Sn(s, e.hash(c)));
          const l = e.watcher(t, c, i);
          return () => {
            r.clear(), l();
          };
        },
        onAction: () => e.setCurrent(t, c)
      }));
    };
    t.ui.registry.addMenuButton(e.name, {
      tooltip: e.text,
      icon: e.icon,
      fetch: (n) => n(o()),
      onSetup: e.onToolbarSetup
    }), t.ui.registry.addNestedMenuItem(e.name, {
      type: "nestedmenuitem",
      text: e.text,
      getSubmenuItems: o,
      onSetup: e.onMenuSetup
    });
  }, Ij = (t) => ({
    name: "lineheight",
    text: "Line height",
    icon: "line-height",
    getOptions: TS,
    hash: (e) => p5(e, [
      "fixed",
      "relative",
      "empty"
    ]).getOr(e),
    display: Tt,
    watcher: (e, o, n) => e.formatter.formatChanged("lineheight", n, !1, { value: o }).unbind,
    getCurrent: (e) => u.from(e.queryCommandValue("LineHeight")),
    setCurrent: (e, o) => e.execCommand("LineHeight", !1, o),
    onToolbarSetup: je(t),
    onMenuSetup: je(t)
  }), Rj = (t) => u.from(eS(t)).map((o) => ({
    name: "language",
    text: "Language",
    icon: "language",
    getOptions: w(o),
    hash: (n) => Ln(n.customCode) ? n.code : `${n.code}/${n.customCode}`,
    display: (n) => n.title,
    watcher: (n, s, r) => {
      var c;
      return n.formatter.formatChanged("lang", r, !1, {
        value: s.code,
        customValue: (c = s.customCode) !== null && c !== void 0 ? c : null
      }).unbind;
    },
    getCurrent: (n) => {
      const s = F.fromDom(n.selection.getNode());
      return Ui(s, (r) => u.some(r).filter(_o).bind((c) => Je(c, "lang").map((i) => {
        const l = Je(c, "data-mce-lang").getOrUndefined();
        return {
          code: i,
          customCode: l,
          title: ""
        };
      })));
    },
    setCurrent: (n, s) => n.execCommand("Lang", !1, s),
    onToolbarSetup: (n) => {
      const s = Tc();
      return n.setActive(t.formatter.match("lang", {}, void 0, !0)), s.set(t.formatter.formatChanged("lang", n.setActive, !0)), Jl(s.clear, je(t)(n));
    },
    onMenuSetup: je(t)
  })), Pj = (t) => {
    PO(t, Ij(t)), Rj(t).each((e) => PO(t, e));
  }, Lj = (t, e) => {
    o5(t, e), u5(t, e), M5(t, e), r5(t, e), E5(t, e);
  }, Vj = (t) => Ur(t, "NodeChange", (e) => {
    e.setEnabled(t.queryCommandState("outdent") && t.selection.isEditable());
  }), Hj = (t) => {
    t.ui.registry.addButton("outdent", {
      tooltip: "Decrease indent",
      icon: "outdent",
      onSetup: Vj(t),
      onAction: vo(t, "outdent")
    }), t.ui.registry.addButton("indent", {
      tooltip: "Increase indent",
      icon: "indent",
      onSetup: je(t),
      onAction: vo(t, "indent")
    });
  }, Nj = (t) => {
    Hj(t);
  }, LO = (t, e) => (o) => {
    o.setActive(e.get());
    const n = (s) => {
      e.set(s.state), o.setActive(s.state);
    };
    return t.on("PastePlainTextToggle", n), Jl(() => t.off("PastePlainTextToggle", n), je(t)(o));
  }, zj = (t) => {
    const e = j(vS(t)), o = () => t.execCommand("mceTogglePlainTextPaste");
    t.ui.registry.addToggleButton("pastetext", {
      active: !1,
      icon: "paste-text",
      tooltip: "Paste as text",
      onAction: o,
      onSetup: LO(t, e)
    }), t.ui.registry.addToggleMenuItem("pastetext", {
      text: "Paste as text",
      icon: "paste-text",
      onAction: o,
      onSetup: LO(t, e)
    });
  }, Fh = (t, e) => () => {
    t.execCommand("mceToggleFormat", !1, e);
  }, Uj = (t) => {
    Ds.each([
      {
        name: "bold",
        text: "Bold",
        icon: "bold"
      },
      {
        name: "italic",
        text: "Italic",
        icon: "italic"
      },
      {
        name: "underline",
        text: "Underline",
        icon: "underline"
      },
      {
        name: "strikethrough",
        text: "Strikethrough",
        icon: "strike-through"
      },
      {
        name: "subscript",
        text: "Subscript",
        icon: "subscript"
      },
      {
        name: "superscript",
        text: "Superscript",
        icon: "superscript"
      }
    ], (e, o) => {
      t.ui.registry.addToggleButton(e.name, {
        tooltip: e.text,
        icon: e.icon,
        onSetup: Zl(t, e.name),
        onAction: Fh(t, e.name)
      });
    });
    for (let e = 1; e <= 6; e++) {
      const o = "h" + e;
      t.ui.registry.addToggleButton(o, {
        text: o.toUpperCase(),
        tooltip: "Heading " + e,
        onSetup: Zl(t, o),
        onAction: Fh(t, o)
      });
    }
  }, Wj = (t) => {
    Ds.each([
      {
        name: "copy",
        text: "Copy",
        action: "Copy",
        icon: "copy"
      },
      {
        name: "help",
        text: "Help",
        action: "mceHelp",
        icon: "help"
      },
      {
        name: "selectall",
        text: "Select all",
        action: "SelectAll",
        icon: "select-all"
      },
      {
        name: "newdocument",
        text: "New document",
        action: "mceNewDocument",
        icon: "new-document"
      },
      {
        name: "print",
        text: "Print",
        action: "mcePrint",
        icon: "print"
      }
    ], (e) => {
      t.ui.registry.addButton(e.name, {
        tooltip: e.text,
        icon: e.icon,
        onAction: vo(t, e.action)
      });
    }), Ds.each([
      {
        name: "cut",
        text: "Cut",
        action: "Cut",
        icon: "cut"
      },
      {
        name: "paste",
        text: "Paste",
        action: "Paste",
        icon: "paste"
      },
      {
        name: "removeformat",
        text: "Clear formatting",
        action: "RemoveFormat",
        icon: "remove-formatting"
      },
      {
        name: "remove",
        text: "Remove",
        action: "Delete",
        icon: "remove"
      },
      {
        name: "hr",
        text: "Horizontal line",
        action: "InsertHorizontalRule",
        icon: "horizontal-rule"
      }
    ], (e) => {
      t.ui.registry.addButton(e.name, {
        tooltip: e.text,
        icon: e.icon,
        onSetup: je(t),
        onAction: vo(t, e.action)
      });
    });
  }, Gj = (t) => {
    Ds.each([{
      name: "blockquote",
      text: "Blockquote",
      action: "mceBlockQuote",
      icon: "quote"
    }], (e) => {
      t.ui.registry.addToggleButton(e.name, {
        tooltip: e.text,
        icon: e.icon,
        onAction: vo(t, e.action),
        onSetup: Zl(t, e.name)
      });
    });
  }, jj = (t) => {
    Uj(t), Wj(t), Gj(t);
  }, Yj = (t) => {
    Ds.each([
      {
        name: "newdocument",
        text: "New document",
        action: "mceNewDocument",
        icon: "new-document"
      },
      {
        name: "copy",
        text: "Copy",
        action: "Copy",
        icon: "copy",
        shortcut: "Meta+C"
      },
      {
        name: "selectall",
        text: "Select all",
        action: "SelectAll",
        icon: "select-all",
        shortcut: "Meta+A"
      },
      {
        name: "print",
        text: "Print...",
        action: "mcePrint",
        icon: "print",
        shortcut: "Meta+P"
      }
    ], (e) => {
      t.ui.registry.addMenuItem(e.name, {
        text: e.text,
        icon: e.icon,
        shortcut: e.shortcut,
        onAction: vo(t, e.action)
      });
    }), Ds.each([
      {
        name: "bold",
        text: "Bold",
        action: "Bold",
        icon: "bold",
        shortcut: "Meta+B"
      },
      {
        name: "italic",
        text: "Italic",
        action: "Italic",
        icon: "italic",
        shortcut: "Meta+I"
      },
      {
        name: "underline",
        text: "Underline",
        action: "Underline",
        icon: "underline",
        shortcut: "Meta+U"
      },
      {
        name: "strikethrough",
        text: "Strikethrough",
        action: "Strikethrough",
        icon: "strike-through"
      },
      {
        name: "subscript",
        text: "Subscript",
        action: "Subscript",
        icon: "subscript"
      },
      {
        name: "superscript",
        text: "Superscript",
        action: "Superscript",
        icon: "superscript"
      },
      {
        name: "removeformat",
        text: "Clear formatting",
        action: "RemoveFormat",
        icon: "remove-formatting"
      },
      {
        name: "cut",
        text: "Cut",
        action: "Cut",
        icon: "cut",
        shortcut: "Meta+X"
      },
      {
        name: "paste",
        text: "Paste",
        action: "Paste",
        icon: "paste",
        shortcut: "Meta+V"
      },
      {
        name: "hr",
        text: "Horizontal line",
        action: "InsertHorizontalRule",
        icon: "horizontal-rule"
      }
    ], (e) => {
      t.ui.registry.addMenuItem(e.name, {
        text: e.text,
        icon: e.icon,
        shortcut: e.shortcut,
        onSetup: je(t),
        onAction: vo(t, e.action)
      });
    }), t.ui.registry.addMenuItem("codeformat", {
      text: "Code",
      icon: "sourcecode",
      onSetup: je(t),
      onAction: Fh(t, "code")
    });
  }, Xj = (t) => {
    jj(t), Yj(t);
  }, Hu = (t, e) => Ur(t, "Undo Redo AddUndo TypingUndo ClearUndos SwitchMode", (o) => {
    o.setEnabled(!t.mode.isReadOnly() && t.undoManager[e]());
  }), Kj = (t) => {
    t.ui.registry.addMenuItem("undo", {
      text: "Undo",
      icon: "undo",
      shortcut: "Meta+Z",
      onSetup: Hu(t, "hasUndo"),
      onAction: vo(t, "undo")
    }), t.ui.registry.addMenuItem("redo", {
      text: "Redo",
      icon: "redo",
      shortcut: "Meta+Y",
      onSetup: Hu(t, "hasRedo"),
      onAction: vo(t, "redo")
    });
  }, qj = (t) => {
    t.ui.registry.addButton("undo", {
      tooltip: "Undo",
      icon: "undo",
      enabled: !1,
      onSetup: Hu(t, "hasUndo"),
      onAction: vo(t, "undo")
    }), t.ui.registry.addButton("redo", {
      tooltip: "Redo",
      icon: "redo",
      enabled: !1,
      onSetup: Hu(t, "hasRedo"),
      onAction: vo(t, "redo")
    });
  }, Jj = (t) => {
    Kj(t), qj(t);
  }, Zj = (t) => Ur(t, "VisualAid", (e) => {
    e.setActive(t.hasVisual);
  }), Qj = (t) => {
    t.ui.registry.addToggleMenuItem("visualaid", {
      text: "Visual aids",
      onSetup: Zj(t),
      onAction: vo(t, "mceToggleVisualAid")
    });
  }, t4 = (t) => {
    t.ui.registry.addButton("visualaid", {
      tooltip: "Visual aids",
      text: "Visual aids",
      onAction: vo(t, "mceToggleVisualAid")
    });
  }, e4 = (t) => {
    t4(t), Qj(t);
  }, o4 = (t, e) => {
    Bj(t), Xj(t), Lj(t, e), Jj(t), xV(t), e4(t), Nj(t), Pj(t), zj(t);
  }, n4 = (t) => Ct(t) ? t.split(/[ ,]/) : t, VO = (t) => (e) => e.options.get(t), s4 = (t) => {
    const e = t.options.register;
    e("contextmenu_avoid_overlap", {
      processor: "string",
      default: ""
    }), e("contextmenu_never_use_native", {
      processor: "boolean",
      default: !1
    }), e("contextmenu", {
      processor: (o) => o === !1 ? {
        value: [],
        valid: !0
      } : Ct(o) || aa(o, Ct) ? {
        value: n4(o),
        valid: !0
      } : {
        valid: !1,
        message: "Must be false or a string."
      },
      default: "link linkchecker image editimage table spellchecker configurepermanentpen"
    });
  }, HO = VO("contextmenu_never_use_native"), r4 = VO("contextmenu_avoid_overlap"), c4 = (t) => NO(t).length === 0, NO = (t) => {
    const e = t.ui.registry.getAll().contextMenus, o = t.options.get("contextmenu");
    return t.options.isSet("contextmenu") ? o : Ht(o, (n) => At(e, n));
  }, yi = (t, e) => ({
    type: "makeshift",
    x: t,
    y: e
  }), a4 = (t, e, o) => yi(t.x + e, t.y + o), zO = (t) => t.type === "longpress" || t.type.indexOf("touch") === 0, i4 = (t) => {
    if (zO(t)) {
      const e = t.touches[0];
      return yi(e.pageX, e.pageY);
    } else
      return yi(t.pageX, t.pageY);
  }, l4 = (t) => {
    if (zO(t)) {
      const e = t.touches[0];
      return yi(e.clientX, e.clientY);
    } else
      return yi(t.clientX, t.clientY);
  }, u4 = (t, e) => {
    const o = Dc.DOM.getPos(t);
    return a4(e, o.x, o.y);
  }, d4 = (t, e) => e.type === "contextmenu" || e.type === "longpress" ? t.inline ? i4(e) : u4(t.getContentAreaContainer(), l4(e)) : UO(t), UO = (t) => ({
    type: "selection",
    root: F.fromDom(t.selection.getNode())
  }), m4 = (t) => ({
    type: "node",
    node: u.some(F.fromDom(t.selection.getNode())),
    root: F.fromDom(t.getBody())
  }), WO = (t, e, o) => {
    switch (o) {
      case "node":
        return m4(t);
      case "point":
        return d4(t, e);
      case "selection":
        return UO(t);
    }
  }, g4 = (t, e, o, n, s, r) => {
    const c = o(), a = WO(t, e, r);
    Uc(c, Fn.CLOSE_ON_EXECUTE, n, {
      isHorizontalMenu: !1,
      search: u.none()
    }).map((i) => {
      e.preventDefault(), Nt.showMenuAt(s, { anchor: a }, {
        menu: { markers: Vr("normal") },
        data: i
      });
    });
  }, p4 = {
    onLtr: () => [
      fe,
      De,
      Me,
      io,
      lo,
      Ue,
      vn,
      hi,
      pi,
      _u,
      gi,
      Tu
    ],
    onRtl: () => [
      fe,
      Me,
      De,
      lo,
      io,
      Ue,
      vn,
      hi,
      gi,
      Tu,
      pi,
      _u
    ]
  }, h4 = 12, f4 = {
    valignCentre: [],
    alignCentre: [],
    alignLeft: ["tox-pop--align-left"],
    alignRight: ["tox-pop--align-right"],
    right: ["tox-pop--right"],
    left: ["tox-pop--left"],
    bottom: ["tox-pop--bottom"],
    top: ["tox-pop--top"]
  }, b4 = (t, e) => {
    const o = t.selection;
    if (o.isCollapsed() || e.touches.length < 1)
      return !1;
    {
      const n = e.touches[0], s = o.getRng();
      return Lv(t.getWin(), Ea.domRange(s)).exists((c) => c.left <= n.clientX && c.right >= n.clientX && c.top <= n.clientY && c.bottom >= n.clientY);
    }
  }, v4 = (t) => {
    const e = t.selection.getRng(), o = () => {
      Dl.setEditorTimeout(t, () => {
        t.selection.setRng(e);
      }, 10), r();
    };
    t.once("touchend", o);
    const n = (c) => {
      c.preventDefault(), c.stopImmediatePropagation();
    };
    t.on("mousedown", n, !0);
    const s = () => r();
    t.once("longpresscancel", s);
    const r = () => {
      t.off("touchend", o), t.off("longpresscancel", s), t.off("mousedown", n);
    };
  }, y4 = (t, e, o) => {
    const n = WO(t, e, o);
    return {
      bubble: ws(0, o === "point" ? h4 : 0, f4),
      layouts: p4,
      overrides: {
        maxWidthFunction: gh(),
        maxHeightFunction: _c()
      },
      ...n
    };
  }, x4 = (t, e, o, n, s, r, c) => {
    const a = y4(t, e, r);
    Uc(o, Fn.CLOSE_ON_EXECUTE, n, {
      isHorizontalMenu: !0,
      search: u.none()
    }).map((i) => {
      e.preventDefault();
      const l = c ? oo.HighlightMenuAndItem : oo.HighlightNone;
      Nt.showMenuWithinBounds(s, { anchor: a }, {
        menu: {
          markers: Vr("normal"),
          highlightOnOpen: l
        },
        data: i,
        type: "horizontal"
      }, () => u.some(MO(t, n.shared, r === "node" ? "node" : "selection"))), t.dispatch(kO);
    });
  }, S4 = (t, e, o, n, s, r) => {
    const c = gs(), a = c.os.isiOS(), i = c.os.isMacOS(), l = c.os.isAndroid(), d = c.deviceType.isTouch(), m = () => !(l || a || i && d), g = () => {
      const p = o();
      x4(t, e, p, n, s, r, m());
    };
    if ((i || a) && r !== "node") {
      const p = () => {
        v4(t), g();
      };
      b4(t, e) ? p() : (t.once("selectionchange", p), t.once("touchend", () => t.off("selectionchange", p)));
    } else
      g();
  }, GO = (t) => Ct(t) ? t === "|" : t.type === "separator", Bh = { type: "separator" }, jO = (t) => {
    const e = (o) => ({
      text: o.text,
      icon: o.icon,
      enabled: o.enabled,
      shortcut: o.shortcut
    });
    if (Ct(t))
      return t;
    switch (t.type) {
      case "separator":
        return Bh;
      case "submenu":
        return {
          type: "nestedmenuitem",
          ...e(t),
          getSubmenuItems: () => {
            const n = t.getSubmenuItems();
            return Ct(n) ? n : B(n, jO);
          }
        };
      default:
        const o = t;
        return {
          type: "menuitem",
          ...e(o),
          onAction: wE(o.onAction)
        };
    }
  }, YO = (t, e) => {
    if (e.length === 0)
      return t;
    const n = nd(t).filter((s) => !GO(s)).fold(() => [], (s) => [Bh]);
    return t.concat(n).concat(e).concat([Bh]);
  }, w4 = (t, e, o) => {
    const n = Fe(e, (s, r) => Q(t, r.toLowerCase()).map((c) => {
      const a = c.update(o);
      if (Ct(a) && $i(ad(a)))
        return YO(s, a.split(" "));
      if (as(a) && a.length > 0) {
        const i = B(a, jO);
        return YO(s, i);
      } else
        return s;
    }).getOrThunk(() => s.concat([r])), []);
    return n.length > 0 && GO(n[n.length - 1]) && n.pop(), n;
  }, T4 = (t, e) => e.ctrlKey && !HO(t), _4 = (t) => t.type === "longpress" || At(t, "touches"), XO = (t, e) => !_4(e) && (e.button !== 2 || e.target === t.getBody() && e.pointerType === ""), KO = (t, e) => XO(t, e) ? t.selection.getStart(!0) : e.target, C4 = (t, e) => {
    const o = r4(t), n = XO(t, e) ? "selection" : "point";
    if ($i(o)) {
      const s = KO(t, e);
      return oi(F.fromDom(s), o) ? "node" : n;
    } else
      return n;
  }, O4 = (t, e, o) => {
    const s = gs().deviceType.isTouch, r = Re(Nt.sketch({
      dom: { tag: "div" },
      lazySink: e,
      onEscape: () => t.focus(),
      onShow: () => o.setContextMenuState(!0),
      onHide: () => o.setContextMenuState(!1),
      fireDismissalEventInstead: {},
      inlineBehaviours: D([nt("dismissContextMenu", [O(_r(), (i, l) => {
        ht.close(i), t.focus();
      })])])
    })), c = () => Nt.hide(r), a = (i) => {
      if (HO(t) && i.preventDefault(), T4(t, i) || c4(t))
        return;
      const l = C4(t, i), d = () => {
        const g = KO(t, i), p = t.ui.registry.getAll(), h = NO(t);
        return w4(p.contextMenus, h, g);
      };
      (s() ? S4 : g4)(t, i, d, o, r, l);
    };
    t.on("init", () => {
      const i = "ResizeEditor ScrollContent ScrollWindow longpresscancel" + (s() ? "" : " ResizeWindow");
      t.on(i, c), t.on("longpress contextmenu", a);
    });
  }, Ih = en.generate([
    {
      offset: [
        "x",
        "y"
      ]
    },
    {
      absolute: [
        "x",
        "y"
      ]
    },
    {
      fixed: [
        "x",
        "y"
      ]
    }
  ]), Nu = (t) => (e) => e.translate(-t.left, -t.top), zu = (t) => (e) => e.translate(t.left, t.top), $s = (t) => (e, o) => Fe(t, (n, s) => s(n), Ut(e, o)), Uu = (t, e, o) => t.fold($s([
    zu(o),
    Nu(e)
  ]), $s([Nu(e)]), $s([])), Kc = (t, e, o) => t.fold($s([zu(o)]), $s([]), $s([zu(e)])), qO = (t, e, o) => t.fold($s([]), $s([Nu(o)]), $s([
    zu(e),
    Nu(o)
  ])), k4 = (t, e, o, n, s, r) => {
    const c = Kc(t, s, r), a = Kc(e, s, r);
    return Math.abs(c.left - a.left) <= o && Math.abs(c.top - a.top) <= n;
  }, E4 = (t, e, o, n, s, r) => {
    const c = Kc(t, s, r), a = Kc(e, s, r), i = Math.abs(c.left - a.left), l = Math.abs(c.top - a.top);
    return Ut(i, l);
  }, JO = (t, e, o) => {
    const n = t.fold((s, r) => ({
      position: u.some("absolute"),
      left: u.some(s + "px"),
      top: u.some(r + "px")
    }), (s, r) => ({
      position: u.some("absolute"),
      left: u.some(s - o.left + "px"),
      top: u.some(r - o.top + "px")
    }), (s, r) => ({
      position: u.some("fixed"),
      left: u.some(s + "px"),
      top: u.some(r + "px")
    }));
    return {
      right: u.none(),
      bottom: u.none(),
      ...n
    };
  }, A4 = (t, e, o) => t.fold((n, s) => Wu(n + e, s + o), (n, s) => ir(n + e, s + o), (n, s) => tc(n + e, s + o)), Rh = (t, e, o, n) => {
    const s = (r, c) => (a, i) => {
      const l = r(e, o, n);
      return c(a.getOr(l.left), i.getOr(l.top));
    };
    return t.fold(s(qO, Wu), s(Kc, ir), s(Uu, tc));
  }, Wu = Ih.offset, ir = Ih.absolute, tc = Ih.fixed, ZO = (t, e) => {
    const o = He(t, e);
    return Ln(o) ? NaN : parseInt(o, 10);
  }, D4 = (t, e) => {
    const o = t.element, n = ZO(o, e.leftAttr), s = ZO(o, e.topAttr);
    return isNaN(n) || isNaN(s) ? u.none() : u.some(Ut(n, s));
  }, M4 = (t, e, o) => {
    const n = t.element;
    st(n, e.leftAttr, o.left + "px"), st(n, e.topAttr, o.top + "px");
  }, $4 = (t, e) => {
    const o = t.element;
    Qt(o, e.leftAttr), Qt(o, e.topAttr);
  }, F4 = (t, e, o, n) => D4(t, e).fold(() => o, (s) => tc(s.left + n.left, s.top + n.top)), B4 = (t, e, o, n, s, r) => {
    const c = F4(t, e, o, n), a = e.mustSnap ? R4(t, e, c, s, r) : P4(t, e, c, s, r), i = Uu(c, s, r);
    return M4(t, e, i), a.fold(() => ({
      coord: tc(i.left, i.top),
      extra: u.none()
    }), (l) => ({
      coord: l.output,
      extra: l.extra
    }));
  }, I4 = (t, e) => {
    $4(t, e);
  }, QO = (t, e, o, n) => xn(t, (s) => {
    const r = s.sensor;
    return k4(e, r, s.range.left, s.range.top, o, n) ? u.some({
      output: Rh(s.output, e, o, n),
      extra: s.extra
    }) : u.none();
  }), R4 = (t, e, o, n, s) => {
    const r = e.getSnapPoints(t);
    return QO(r, o, n, s).orThunk(() => Fe(r, (i, l) => {
      const d = l.sensor, m = E4(o, d, l.range.left, l.range.top, n, s);
      return i.deltas.fold(() => ({
        deltas: u.some(m),
        snap: u.some(l)
      }), (g) => {
        const p = (m.left + m.top) / 2, h = (g.left + g.top) / 2;
        return p <= h ? {
          deltas: u.some(m),
          snap: u.some(l)
        } : i;
      });
    }, {
      deltas: u.none(),
      snap: u.none()
    }).snap.map((i) => ({
      output: Rh(i.output, o, n, s),
      extra: i.extra
    })));
  }, P4 = (t, e, o, n, s) => {
    const r = e.getSnapPoints(t);
    return QO(r, o, n, s);
  }, L4 = (t, e, o) => ({
    coord: Rh(t.output, t.output, e, o),
    extra: t.extra
  });
  var V4 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    snapTo: (t, e, o, n) => {
      const s = e.getTarget(t.element);
      if (e.repositionTarget) {
        const r = wn(t.element), c = Qo(r), a = dC(s), i = L4(n, c, a), l = JO(i.coord, c, a);
        Ri(s, l);
      }
    }
  });
  const Ph = "data-initial-z-index", H4 = (t) => {
    Tn(t.element).filter(_o).each((e) => {
      Je(e, Ph).fold(() => kt(e, "z-index"), (o) => rt(e, "z-index", o)), Qt(e, Ph);
    });
  }, N4 = (t) => {
    Tn(t.element).filter(_o).each((e) => {
      Ce(e, "z-index").each((o) => {
        st(e, Ph, o);
      }), rt(e, "z-index", Ne(t.element, "z-index"));
    });
  }, tk = (t, e) => {
    t.getSystem().addToGui(e), N4(e);
  }, z4 = (t) => {
    H4(t), t.getSystem().removeFromGui(t);
  }, ek = (t, e, o) => t.getSystem().build(Bn.sketch({
    dom: {
      styles: {
        left: "0px",
        top: "0px",
        width: "100%",
        height: "100%",
        position: "fixed",
        "z-index": "1000000000000000"
      },
      classes: [e]
    },
    events: o
  }));
  var U4 = Eo("snaps", [
    k("getSnapPoints"),
    pt("onSensor"),
    k("leftAttr"),
    k("topAttr"),
    S("lazyViewport", Ze),
    S("mustSnap", !1)
  ]);
  const Lh = [
    S("useFixed", Lt),
    k("blockerClass"),
    S("getTarget", Tt),
    S("onDrag", R),
    S("repositionTarget", !0),
    S("onDrop", R),
    he("getBounds", Ze),
    U4
  ], W4 = (t) => BE(Ce(t, "left"), Ce(t, "top"), Ce(t, "position"), (e, o, n) => (n === "fixed" ? tc : Wu)(parseInt(e, 10), parseInt(o, 10))).getOrThunk(() => {
    const e = Jo(t);
    return ir(e.left, e.top);
  }), G4 = (t, e, o, n, s) => {
    const r = s.bounds, c = Kc(e, o, n), a = Mo(c.left, r.x, r.x + r.width - s.width), i = Mo(c.top, r.y, r.y + r.height - s.height), l = ir(a, i);
    return e.fold(() => {
      const d = qO(l, o, n);
      return Wu(d.left, d.top);
    }, w(l), () => {
      const d = Uu(l, o, n);
      return tc(d.left, d.top);
    });
  }, j4 = (t, e, o, n, s, r, c) => {
    const a = e.fold(() => {
      const i = A4(o, r.left, r.top), l = Uu(i, n, s);
      return tc(l.left, l.top);
    }, (i) => {
      const l = B4(t, i, o, r, n, s);
      return l.extra.each((d) => {
        i.onSensor(t, d);
      }), l.coord;
    });
    return G4(t, a, n, s, c);
  }, Y4 = (t, e, o, n) => {
    const s = e.getTarget(t.element);
    if (e.repositionTarget) {
      const r = wn(t.element), c = Qo(r), a = dC(s), i = W4(s), l = j4(t, e.snaps, i, c, a, n, o), d = JO(l, c, a);
      Ri(s, d);
    }
    e.onDrag(t, s, n);
  }, ok = (t, e) => ({
    bounds: t.getBounds(),
    height: Ls(e.element),
    width: hr(e.element)
  }), Vh = (t, e, o, n, s) => {
    const r = o.update(n, s), c = o.getStartData().getOrThunk(() => ok(e, t));
    r.each((a) => {
      Y4(t, e, c, a);
    });
  }, nk = (t, e, o, n) => {
    e.each(z4), o.snaps.each((r) => {
      I4(t, r);
    });
    const s = o.getTarget(t.element);
    n.reset(), o.onDrop(t, s);
  }, Hh = (t) => (e, o) => {
    const n = (s) => {
      o.setStartData(ok(e, s));
    };
    return It([
      O(Vd(), (s) => {
        o.getStartData().each(() => n(s));
      }),
      ...t(e, o, n)
    ]);
  }, X4 = (t) => It([
    O(Ho(), t.forceDrop),
    O(Id(), t.drop),
    O(Wi(), (e, o) => {
      t.move(o.event);
    }),
    O(Bd(), t.delayDrop)
  ]);
  var K4 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    getData: (t) => u.from(Ut(t.x, t.y)),
    getDelta: (t, e) => Ut(e.left - t.left, e.top - t.top)
  });
  const sk = (t, e, o) => [O(Ho(), (n, s) => {
    if (s.event.raw.button !== 0)
      return;
    s.stop();
    const c = () => nk(n, u.some(l), t, e), a = nT(c, 200), i = {
      drop: c,
      delayDrop: a.schedule,
      forceDrop: c,
      move: (m) => {
        a.cancel(), Vh(n, t, e, K4, m);
      }
    }, l = ek(n, t.blockerClass, X4(i));
    (() => {
      o(n), tk(n, l);
    })();
  })], q4 = [
    ...Lh,
    Rt("dragger", { handlers: Hh(sk) })
  ], J4 = (t) => It([
    O(bs(), t.forceDrop),
    O(xr(), t.drop),
    O(wb(), t.drop),
    O(Sa(), (e, o) => {
      t.move(o.event);
    })
  ]), Z4 = (t) => {
    const e = t[0];
    return u.some(Ut(e.clientX, e.clientY));
  };
  var rk = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    getData: (t) => {
      const o = t.raw.touches;
      return o.length === 1 ? Z4(o) : u.none();
    },
    getDelta: (t, e) => Ut(e.left - t.left, e.top - t.top)
  });
  const ck = (t, e, o) => {
    const n = Pt(), s = (r) => {
      nk(r, n.get(), t, e), n.clear();
    };
    return [
      O(bs(), (r, c) => {
        c.stop();
        const a = () => s(r), i = {
          drop: a,
          delayDrop: R,
          forceDrop: a,
          move: (m) => {
            Vh(r, t, e, rk, m);
          }
        }, l = ek(r, t.blockerClass, J4(i));
        n.set(l), (() => {
          o(r), tk(r, l);
        })();
      }),
      O(Sa(), (r, c) => {
        c.stop(), Vh(r, t, e, rk, c.event);
      }),
      O(xr(), (r, c) => {
        c.stop(), s(r);
      }),
      O(wb(), s)
    ];
  }, Q4 = [
    ...Lh,
    Rt("dragger", { handlers: Hh(ck) })
  ], t9 = (t, e, o) => [
    ...sk(t, e, o),
    ...ck(t, e, o)
  ], e9 = [
    ...Lh,
    Rt("dragger", { handlers: Hh(t9) })
  ];
  var o9 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    mouse: q4,
    touch: Q4,
    mouseOrTouch: e9
  }), n9 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    init: () => {
      let t = u.none(), e = u.none();
      const o = () => {
        t = u.none(), e = u.none();
      }, n = (i, l) => {
        const d = t.map((m) => i.getDelta(m, l));
        return t = u.some(l), d;
      }, s = (i, l) => i.getData(l).bind((d) => n(i, d)), r = (i) => {
        e = u.some(i);
      }, c = () => e, a = w({});
      return Do({
        readState: a,
        reset: o,
        update: s,
        getStartData: c,
        setStartData: r
      });
    }
  });
  const ec = pv({
    branchKey: "mode",
    branches: o9,
    name: "dragging",
    active: {
      events: (t, e) => t.dragger.handlers(t, e)
    },
    extra: {
      snap: (t) => ({
        sensor: t.sensor,
        range: t.range,
        output: t.output,
        extra: u.from(t.extra)
      })
    },
    state: n9,
    apis: V4
  }), Nh = 40, Gu = Nh / 2, ak = (t, e, o, n, s, r) => t.fold(() => ec.snap({
    sensor: ir(o - Gu, n - Gu),
    range: Ut(s, r),
    output: ir(u.some(o), u.some(n)),
    extra: { td: e }
  }), (c) => {
    const a = o - Gu, i = n - Gu, l = Nh, d = Nh, m = c.element.dom.getBoundingClientRect();
    return ec.snap({
      sensor: ir(a, i),
      range: Ut(l, d),
      output: ir(u.some(o - m.width / 2), u.some(n - m.height / 2)),
      extra: { td: e }
    });
  }), ik = (t, e, o) => {
    const n = (s, r) => s.exists((c) => Bt(c, r));
    return {
      getSnapPoints: t,
      leftAttr: "data-drag-left",
      topAttr: "data-drag-top",
      onSensor: (s, r) => {
        const c = r.td;
        n(e.get(), c) || (e.set(c), o(c));
      },
      mustSnap: !0
    };
  }, lk = (t) => St(Se.sketch({
    dom: {
      tag: "div",
      classes: ["tox-selector"]
    },
    buttonBehaviours: D([
      ec.config({
        mode: "mouseOrTouch",
        blockerClass: "blocker",
        snaps: t
      }),
      ai.config({})
    ]),
    eventOrder: {
      mousedown: [
        "dragging",
        "alloy.base.behaviour"
      ],
      touchstart: [
        "dragging",
        "alloy.base.behaviour"
      ]
    }
  })), s9 = (t, e) => {
    const o = j([]), n = j([]), s = j(!1), r = Pt(), c = Pt(), a = (A) => {
      const M = fr(A);
      return ak(p.getOpt(e), A, M.x, M.y, M.width, M.height);
    }, i = () => B(o.get(), (A) => a(A)), l = (A) => {
      const M = fr(A);
      return ak(h.getOpt(e), A, M.right, M.bottom, M.width, M.height);
    }, d = () => B(n.get(), (A) => l(A)), m = ik(i, r, (A) => {
      c.get().each((M) => {
        t.dispatch("TableSelectorChange", {
          start: A,
          finish: M
        });
      });
    }), g = ik(d, c, (A) => {
      r.get().each((M) => {
        t.dispatch("TableSelectorChange", {
          start: M,
          finish: A
        });
      });
    }), p = lk(m), h = lk(g), f = Re(p.asSpec()), y = Re(h.asSpec()), v = (A, M, ot, V) => {
      const W = M.dom.getBoundingClientRect();
      kt(A.element, "display");
      const K = ma(F.fromDom(t.getBody())).dom.innerHeight, vt = ot(W), N = V(W, K);
      (vt || N) && rt(A.element, "display", "none");
    }, b = (A, M, ot, V) => {
      const W = ot(M);
      ec.snapTo(A, W), v(A, M, (N) => N[V] < 0, (N, dt) => N[V] > dt);
    }, x = (A) => b(f, A, a, "top"), E = () => r.get().each(x), C = (A) => b(y, A, l, "bottom"), _ = () => c.get().each(C);
    gs().deviceType.isTouch() && (t.on("TableSelectionChange", (A) => {
      s.get() || (Fr(e, f), Fr(e, y), s.set(!0)), r.set(A.start), c.set(A.finish), A.otherCells.each((M) => {
        o.set(M.upOrLeftCells), n.set(M.downOrRightCells), x(A.start), C(A.finish);
      });
    }), t.on("ResizeEditor ResizeWindow ScrollContent", () => {
      E(), _();
    }), t.on("TableSelectionClear", () => {
      s.get() && (_s(f), _s(y), s.set(!1)), r.clear(), c.clear();
    }));
  };
  var r9 = `<svg width="50px" height="16px" viewBox="0 0 50 16" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.143 0c2.608.015 5.186 2.178 5.186 5.331 0 0 .077 3.812-.084 4.87-.361 2.41-2.164 4.074-4.65 4.496-1.453.284-2.523.49-3.212.623-.373.071-.634.122-.785.152-.184.038-.997.145-1.35.145-2.732 0-5.21-2.04-5.248-5.33 0 0 0-3.514.03-4.442.093-2.4 1.758-4.342 4.926-4.963 0 0 3.875-.752 4.036-.782.368-.07.775-.1 1.15-.1Zm1.826 2.8L5.83 3.989v2.393l-2.455.475v5.968l6.137-1.189V9.243l2.456-.476V2.8ZM5.83 6.382l3.682-.713v3.574l-3.682.713V6.382Zm27.173-1.64-.084-1.066h-2.226v9.132h2.456V7.743c-.008-1.151.998-2.064 2.149-2.072 1.15-.008 1.987.92 1.995 2.072v5.065h2.455V7.359c-.015-2.18-1.657-3.929-3.837-3.913a3.993 3.993 0 0 0-2.908 1.296Zm-6.3-4.266L29.16 0v2.387l-2.456.475V.476Zm0 3.2v9.132h2.456V3.676h-2.456Zm18.179 11.787L49.11 3.676H46.58l-1.612 4.527-.46 1.382-.384-1.382-1.611-4.527H39.98l3.3 9.132L42.15 16l2.732-.537ZM22.867 9.738c0 .752.568 1.075.921 1.075.353 0 .668-.047.998-.154l.537 1.765c-.23.154-.92.537-2.225.537-1.305 0-2.655-.997-2.686-2.686a136.877 136.877 0 0 1 0-4.374H18.8V3.676h1.612v-1.98l2.455-.476v2.456h2.302V5.9h-2.302v3.837Z"/>
</svg>
`;
  const c9 = (t) => t.nodeName === "BR" || !!t.getAttribute("data-mce-bogus") || t.getAttribute("data-mce-type") === "bookmark", a9 = (t, e, o) => {
    var n;
    const s = (n = e.delimiter) !== null && n !== void 0 ? n : "›", r = (l, d, m) => Se.sketch({
      dom: {
        tag: "div",
        classes: ["tox-statusbar__path-item"],
        attributes: {
          "data-index": m,
          "aria-level": m + 1
        }
      },
      components: [qt(l)],
      action: (g) => {
        t.focus(), t.selection.select(d), t.nodeChanged();
      },
      buttonBehaviours: D([
        mn.button(o.isDisabled),
        re()
      ])
    }), c = () => ({
      dom: {
        tag: "div",
        classes: ["tox-statusbar__path-divider"],
        attributes: { "aria-hidden": !0 }
      },
      components: [qt(` ${s} `)]
    }), a = (l) => Fe(l, (d, m, g) => {
      const p = r(m.name, m.element, g);
      return g === 0 ? d.concat([p]) : d.concat([
        c(),
        p
      ]);
    }, []), i = (l) => {
      const d = [];
      let m = l.length;
      for (; m-- > 0; ) {
        const g = l[m];
        if (g.nodeType === 1 && !c9(g)) {
          const p = qL(t, g);
          if (p.isDefaultPrevented() || d.push({
            name: p.name,
            element: g
          }), p.isPropagationStopped())
            break;
        }
      }
      return d;
    };
    return {
      dom: {
        tag: "div",
        classes: ["tox-statusbar__path"],
        attributes: { role: "navigation" }
      },
      behaviours: D([
        z.config({
          mode: "flow",
          selector: "div[role=button]"
        }),
        q.config({ disabled: o.isDisabled }),
        re(),
        zt.config({}),
        et.config({}),
        nt("elementPathEvents", [Vt((l, d) => {
          t.shortcuts.add("alt+F11", "focus statusbar elementpath", () => z.focusIn(l)), t.on("NodeChange", (m) => {
            const g = i(m.parents), p = g.length > 0 ? a(g) : [];
            et.set(l, p);
          });
        })])
      ]),
      components: []
    };
  };
  var lr;
  (function(t) {
    t[t.None = 0] = "None", t[t.Both = 1] = "Both", t[t.Vertical = 2] = "Vertical";
  })(lr || (lr = {}));
  const i9 = (t, e, o, n, s) => {
    const r = { height: Lu(n + e.top, xg(t), Sg(t)) };
    return o === lr.Both && (r.width = Lu(s + e.left, yg(t), Bl(t))), r;
  }, uk = (t, e, o) => {
    const n = F.fromDom(t.getContainer()), s = i9(t, e, o, ge(n), ro(n));
    Ve(s, (r, c) => {
      Vn(r) && rt(n, c, Oh(r));
    }), YL(t);
  }, l9 = (t) => {
    const e = bS(t);
    return e === !1 ? lr.None : e === "both" ? lr.Both : lr.Vertical;
  }, ju = (t, e, o, n) => {
    const r = Ut(o * 20, n * 20);
    return uk(t, r, e), u.some(!0);
  }, u9 = (t, e) => {
    const o = l9(t);
    if (o === lr.None)
      return u.none();
    const n = o === lr.Both ? "Press the arrow keys to resize the editor." : "Press the Up and Down arrow keys to resize the editor.";
    return u.some(un("resize-handle", {
      tag: "div",
      classes: ["tox-statusbar__resize-handle"],
      attributes: {
        title: e.translate("Resize"),
        "aria-label": e.translate(n)
      },
      behaviours: [
        ec.config({
          mode: "mouse",
          repositionTarget: !1,
          onDrag: (s, r, c) => uk(t, c, o),
          blockerClass: "tox-blocker"
        }),
        z.config({
          mode: "special",
          onLeft: () => ju(t, o, -1, 0),
          onRight: () => ju(t, o, 1, 0),
          onUp: () => ju(t, o, 0, -1),
          onDown: () => ju(t, o, 0, 1)
        }),
        zt.config({}),
        Z.config({})
      ]
    }, e.icons));
  }, d9 = (t, e) => {
    const o = (n, s, r) => et.set(n, [qt(e.translate([
      "{0} " + r,
      s[r]
    ]))]);
    return Se.sketch({
      dom: {
        tag: "button",
        classes: ["tox-statusbar__wordcount"]
      },
      components: [],
      buttonBehaviours: D([
        mn.button(e.isDisabled),
        re(),
        zt.config({}),
        et.config({}),
        I.config({
          store: {
            mode: "memory",
            initialValue: {
              mode: "words",
              count: {
                words: 0,
                characters: 0
              }
            }
          }
        }),
        nt("wordcount-events", [
          xs((n) => {
            const s = I.getValue(n), r = s.mode === "words" ? "characters" : "words";
            I.setValue(n, {
              mode: r,
              count: s.count
            }), o(n, s.count, r);
          }),
          Vt((n) => {
            t.on("wordCountUpdate", (s) => {
              const { mode: r } = I.getValue(n);
              I.setValue(n, {
                mode: r,
                count: s.wordCount
              }), o(n, s.wordCount, r);
            });
          })
        ])
      ]),
      eventOrder: {
        [Ao()]: [
          "disabling",
          "alloy.base.behaviour",
          "wordcount-events"
        ]
      }
    });
  }, m9 = (t, e) => {
    const o = () => ({
      dom: {
        tag: "span",
        classes: ["tox-statusbar__branding"]
      },
      components: [{
        dom: {
          tag: "a",
          attributes: {
            href: "https://www.tiny.cloud/powered-by-tiny?utm_campaign=poweredby&utm_source=tiny&utm_medium=referral&utm_content=v6",
            rel: "noopener",
            target: "_blank",
            "aria-label": Fo.translate([
              "Powered by {0}",
              "Tiny"
            ])
          },
          innerHtml: r9.trim()
        },
        behaviours: D([Z.config({})])
      }]
    }), n = () => {
      const a = cw("Alt+0");
      return {
        dom: {
          tag: "div",
          classes: ["tox-statusbar__help-text"]
        },
        components: [qt(Fo.translate([
          "Press {0} for help",
          a
        ]))]
      };
    }, s = () => {
      const a = [];
      return t.hasPlugin("wordcount") && a.push(d9(t, e)), Tg(t) && a.push(o()), {
        dom: {
          tag: "div",
          classes: ["tox-statusbar__right-container"]
        },
        components: a
      };
    }, r = () => {
      const a = [], i = SS(t), l = fS(t), d = Tg(t) || t.hasPlugin("wordcount"), m = () => {
        const g = "tox-statusbar__text-container--flex-start", p = "tox-statusbar__text-container--flex-end", h = "tox-statusbar__text-container--space-around";
        if (i) {
          const f = "tox-statusbar__text-container-3-cols";
          return !d && !l ? [
            f,
            h
          ] : d && !l ? [
            f,
            p
          ] : [
            f,
            g
          ];
        }
        return [d && !l ? p : g];
      };
      return l && a.push(a9(t, {}, e)), i && a.push(n()), d && a.push(s()), a.length > 0 ? [{
        dom: {
          tag: "div",
          classes: [
            "tox-statusbar__text-container",
            ...m()
          ]
        },
        components: a
      }] : [];
    };
    return {
      dom: {
        tag: "div",
        classes: ["tox-statusbar"]
      },
      components: (() => {
        const a = r(), i = u9(t, e);
        return a.concat(i.toArray());
      })()
    };
  }, dk = (t, e) => e.get().getOrDie(`UI for ${t} has not been rendered`), g9 = (t, e) => {
    const o = t.inline, n = o ? aj : tj, s = Ga(t) ? c3 : DW, r = ij(), c = Pt(), a = Pt(), i = Pt(), g = gs().deviceType.isTouch() ? ["tox-platform-touch"] : [], p = Og(t), h = $c(t), f = St({
      dom: {
        tag: "div",
        classes: ["tox-anchorbar"]
      }
    }), y = St({
      dom: {
        tag: "div",
        classes: ["tox-bottom-anchorbar"]
      }
    }), v = () => r.mainUi.get().map((G) => G.outerContainer).bind($t.getHeader), b = () => ut.fromOption(r.dialogUi.get().map((G) => G.sink), "UI has not been rendered"), x = () => ut.fromOption(r.popupUi.get().map((G) => G.sink), "(popup) UI has not been rendered"), E = r.lazyGetInOuterOrDie("anchor bar", f.getOpt), C = r.lazyGetInOuterOrDie("bottom anchor bar", y.getOpt), _ = r.lazyGetInOuterOrDie("toolbar", $t.getToolbar), A = r.lazyGetInOuterOrDie("throbber", $t.getThrobber), M = yW({
      popup: x,
      dialog: b
    }, t, E, C), ot = () => {
      const G = { attributes: { [_m]: p ? Ts.BottomToTop : Ts.TopToBottom } }, tt = $t.parts.menubar({
        dom: {
          tag: "div",
          classes: ["tox-menubar"]
        },
        backstage: M.popup,
        onEscape: () => {
          t.focus();
        }
      }), Ot = $t.parts.toolbar({
        dom: {
          tag: "div",
          classes: ["tox-toolbar"]
        },
        getSink: M.popup.shared.getSink,
        providers: M.popup.shared.providers,
        onEscape: () => {
          t.focus();
        },
        onToolbarToggled: (os) => {
          JL(t, os);
        },
        type: h,
        lazyToolbar: _,
        lazyHeader: () => v().getOrDie("Could not find header element"),
        ...G
      }), ft = $t.parts["multiple-toolbar"]({
        dom: {
          tag: "div",
          classes: ["tox-toolbar-overlord"]
        },
        providers: M.popup.shared.providers,
        onEscape: () => {
          t.focus();
        },
        type: h
      }), we = Wa(t), Ft = Vl(t), Ye = Rl(t), Io = xS(t), ts = V(), es = we || Ft || Ye, Fs = () => we ? [ft] : Ft ? [Ot] : [], Zc = Io ? [
        ts,
        tt
      ] : [tt];
      return $t.parts.header({
        dom: {
          tag: "div",
          classes: ["tox-editor-header"].concat(es ? [] : ["tox-editor-header--empty"]),
          ...G
        },
        components: _e([
          Ye ? Zc : [],
          Fs(),
          Fc(t) ? [] : [f.asSpec()]
        ]),
        sticky: Ga(t),
        editor: t,
        sharedBackstage: M.popup.shared
      });
    }, V = () => $t.parts.promotion({
      dom: {
        tag: "div",
        classes: ["tox-promotion"]
      }
    }), W = () => {
      const G = $t.parts.socket({
        dom: {
          tag: "div",
          classes: ["tox-edit-area"]
        }
      }), tt = $t.parts.sidebar({
        dom: {
          tag: "div",
          classes: ["tox-sidebar"]
        }
      });
      return {
        dom: {
          tag: "div",
          classes: ["tox-sidebar-wrap"]
        },
        components: [
          G,
          tt
        ]
      };
    }, K = () => {
      const G = kg(t), tt = Bt(Nn(), G) && Ne(G, "display") === "grid", Ot = {
        dom: {
          tag: "div",
          classes: [
            "tox",
            "tox-silver-sink",
            "tox-tinymce-aux"
          ].concat(g),
          attributes: { ...Fo.isRtl() ? { dir: "rtl" } : {} }
        },
        behaviours: D([We.config({ useFixed: () => s.isDocked(v) })])
      }, ft = {
        dom: { styles: { width: document.body.clientWidth + "px" } },
        events: It([O(Yi(), (Ye) => {
          rt(Ye.element, "width", document.body.clientWidth + "px");
        })])
      }, we = Re(jt(Ot, tt ? ft : {})), Ft = dp(we);
      return a.set(Ft), {
        sink: we,
        mothership: Ft
      };
    }, vt = () => {
      const G = {
        dom: {
          tag: "div",
          classes: [
            "tox",
            "tox-silver-sink",
            "tox-silver-popup-sink",
            "tox-tinymce-aux"
          ].concat(g),
          attributes: { ...Fo.isRtl() ? { dir: "rtl" } : {} }
        },
        behaviours: D([We.config({
          useFixed: () => s.isDocked(v),
          getBounds: () => e.getPopupSinkBounds()
        })])
      }, tt = Re(G), Ot = dp(tt);
      return i.set(Ot), {
        sink: tt,
        mothership: Ot
      };
    }, N = () => {
      const G = ot(), tt = W(), Ot = $t.parts.throbber({
        dom: {
          tag: "div",
          classes: ["tox-throbber"]
        },
        backstage: M.popup
      }), ft = $t.parts.viewWrapper({ backstage: M.popup }), we = hS(t) && !o ? u.some(m9(t, M.popup.shared.providers)) : u.none(), Ft = _e([
        p ? [] : [G],
        o ? [] : [tt],
        p ? [G] : []
      ]), Ye = $t.parts.editorContainer({
        components: _e([
          Ft,
          o ? [] : [
            y.asSpec(),
            ...we.toArray()
          ]
        ])
      }), Io = Eg(t), ts = {
        role: "application",
        ...Fo.isRtl() ? { dir: "rtl" } : {},
        ...Io ? { "aria-hidden": "true" } : {}
      }, es = Re($t.sketch({
        dom: {
          tag: "div",
          classes: [
            "tox",
            "tox-tinymce"
          ].concat(o ? ["tox-tinymce-inline"] : []).concat(p ? ["tox-tinymce--toolbar-bottom"] : []).concat(g),
          styles: {
            visibility: "hidden",
            ...Io ? {
              opacity: "0",
              border: "0"
            } : {}
          },
          attributes: ts
        },
        components: [
          Ye,
          ...o ? [] : [ft],
          Ot
        ],
        behaviours: D([
          re(),
          q.config({ disableClass: "tox-tinymce--disabled" }),
          z.config({
            mode: "cyclic",
            selector: ".tox-menubar, .tox-toolbar, .tox-toolbar__primary, .tox-toolbar__overflow--open, .tox-sidebar__overflow--open, .tox-statusbar__path, .tox-statusbar__wordcount, .tox-statusbar__branding a, .tox-statusbar__resize-handle"
          })
        ])
      })), Fs = dp(es);
      return c.set(Fs), {
        mothership: Fs,
        outerContainer: es
      };
    }, dt = (G) => {
      const tt = Oh(oj(t)), Ot = Oh(nj(t));
      return t.inline || (Lf("div", "width", Ot) && rt(G.element, "width", Ot), Lf("div", "height", tt) ? rt(G.element, "height", tt) : rt(G.element, "height", "400px")), tt;
    }, $ = (G) => {
      t.addShortcut("alt+F9", "focus menubar", () => {
        $t.focusMenubar(G);
      }), t.addShortcut("alt+F10", "focus toolbar", () => {
        $t.focusToolbar(G);
      }), t.addCommand("ToggleToolbarDrawer", (tt, Ot) => {
        Ot != null && Ot.skipFocus ? $t.toggleToolbarDrawerWithoutFocusing(G) : $t.toggleToolbarDrawer(G);
      }), t.addQueryStateHandler("ToggleToolbarDrawer", () => $t.isToolbarDrawerToggled(G));
    }, L = (G) => {
      const { mainUi: tt, popupUi: Ot, uiMotherships: ft } = G;
      me(nS(t), (Bs, Si) => {
        t.ui.registry.addGroupToolbarButton(Si, Bs);
      });
      const { buttons: we, menuItems: Ft, contextToolbars: Ye, sidebars: Io, views: ts } = t.ui.registry.getAll(), es = Cg(t), Fs = {
        menuItems: Ft,
        menus: CS(t),
        menubar: cS(t),
        toolbar: es.getOrThunk(() => Il(t)),
        allowToolbarGroups: h === Wo.floating,
        buttons: we,
        sidebar: Io,
        views: ts
      };
      $(tt.outerContainer), xW(t, tt.mothership, ft), s.setup(t, M.popup.shared, v), o4(t, M.popup), O4(t, M.popup.shared.getSink, M.popup), S3(t), L3(t, A, M.popup.shared), Fj(t, Ye, Ot.sink, { backstage: M.popup }), s9(t, Ot.sink);
      const Zc = t.getElement(), os = dt(tt.outerContainer), xi = {
        targetNode: Zc,
        height: os
      };
      return n.render(t, G, Fs, M.popup, xi);
    }, J = (G) => (i.set(G.mothership), G), it = () => {
      const G = N(), tt = K(), Ot = qs(t) ? vt() : J(tt);
      r.dialogUi.set(tt), r.popupUi.set(Ot), r.mainUi.set(G);
      const ft = {
        popupUi: Ot,
        dialogUi: tt,
        mainUi: G,
        uiMotherships: r.getUiMotherships()
      };
      return L(ft);
    };
    return {
      popups: {
        backstage: M.popup,
        getMothership: () => dk("popups", i)
      },
      dialogs: {
        backstage: M.dialog,
        getMothership: () => dk("dialogs", a)
      },
      renderUI: it
    };
  }, p9 = (t, e) => {
    const o = Je(t, "id").fold(() => {
      const n = P("dialog-label");
      return st(e, "id", n), n;
    }, Tt);
    st(t, "aria-labelledby", o);
  }, h9 = w([
    k("lazySink"),
    _t("dragBlockClass"),
    he("getBounds", Ze),
    S("useTabstopAt", Te),
    S("firstTabstop", 0),
    S("eventOrder", {}),
    be("modalBehaviours", [z]),
    go("onExecute"),
    rm("onEscape")
  ]), zh = { sketch: Tt }, f9 = w([
    zo({
      name: "draghandle",
      overrides: (t, e) => ({
        behaviours: D([ec.config({
          mode: "mouse",
          getTarget: (o) => Ws(o, '[role="dialog"]').getOr(o),
          blockerClass: t.dragBlockClass.getOrDie(new Error(`The drag blocker class was not specified for a dialog with a drag handle: 
` + JSON.stringify(e, null, 2)).message),
          getBounds: t.getDragBounds
        })])
      })
    }),
    Pe({
      schema: [k("dom")],
      name: "title"
    }),
    Pe({
      factory: zh,
      schema: [k("dom")],
      name: "close"
    }),
    Pe({
      factory: zh,
      schema: [k("dom")],
      name: "body"
    }),
    zo({
      factory: zh,
      schema: [k("dom")],
      name: "footer"
    }),
    an({
      factory: {
        sketch: (t, e) => ({
          ...t,
          dom: e.dom,
          components: e.components
        })
      },
      schema: [
        S("dom", {
          tag: "div",
          styles: {
            position: "fixed",
            left: "0px",
            top: "0px",
            right: "0px",
            bottom: "0px"
          }
        }),
        S("components", [])
      ],
      name: "blocker"
    })
  ]), b9 = (t, e, o, n) => {
    const s = Pt(), r = (p) => {
      s.set(p);
      const h = t.lazySink(p).getOrDie(), f = n.blocker(), y = h.getSystem().build({
        ...f,
        components: f.components.concat([No(p)]),
        behaviours: D([
          Z.config({}),
          nt("dialog-blocker-events", [bc(ys(), () => {
            Rn.isBlocked(p) ? R() : z.focusIn(p);
          })])
        ])
      });
      Fr(h, y), z.focusIn(p);
    }, c = (p) => {
      s.clear(), Tn(p.element).each((h) => {
        p.getSystem().getByDom(h).each((f) => {
          _s(f);
        });
      });
    }, a = (p) => Ks(p, t, "body"), i = (p) => Dt(p, t, "footer"), l = (p, h) => {
      Rn.block(p, h);
    }, d = (p) => {
      Rn.unblock(p);
    }, m = P("modal-events"), g = {
      ...t.eventOrder,
      [Wn()]: [m].concat(t.eventOrder["alloy.system.attached"] || [])
    };
    return {
      uid: t.uid,
      dom: t.dom,
      components: e,
      apis: {
        show: r,
        hide: c,
        getBody: a,
        getFooter: i,
        setIdle: d,
        setBusy: l
      },
      eventOrder: g,
      domModification: {
        attributes: {
          role: "dialog",
          "aria-modal": "true"
        }
      },
      behaviours: xe(t.modalBehaviours, [
        et.config({}),
        z.config({
          mode: "cyclic",
          onEnter: t.onExecute,
          onEscape: t.onEscape,
          useTabstopAt: t.useTabstopAt,
          firstTabstop: t.firstTabstop
        }),
        Rn.config({ getRoot: s.get }),
        nt(m, [Vt((p) => {
          p9(p.element, Ks(p, t, "title").element);
        })])
      ])
    };
  }, ae = Ge({
    name: "ModalDialog",
    configFields: h9(),
    partFields: f9(),
    factory: b9,
    apis: {
      show: (t, e) => {
        t.show(e);
      },
      hide: (t, e) => {
        t.hide(e);
      },
      getBody: (t, e) => t.getBody(e),
      getFooter: (t, e) => t.getFooter(e),
      setBusy: (t, e, o) => {
        t.setBusy(e, o);
      },
      setIdle: (t, e) => {
        t.setIdle(e);
      }
    }
  }), v9 = X([
    Zt,
    Pg
  ].concat(Ic)), y9 = va, Uh = [
    zg("button"),
    Go,
    Un("align", "end", [
      "start",
      "end"
    ]),
    Yl,
    dn,
    bb("buttonType", [
      "primary",
      "secondary"
    ])
  ], mk = [
    ...Uh,
    Es
  ], Wh = [
    hs("type", [
      "submit",
      "cancel",
      "custom"
    ]),
    ...mk
  ], x9 = [
    hs("type", ["menu"]),
    Js,
    Gl,
    Go,
    ko("items", v9),
    ...Uh
  ], S9 = [
    ...Uh,
    hs("type", ["togglebutton"]),
    se("tooltip"),
    Go,
    Js,
    Ie("active", !1)
  ], w9 = mo("type", {
    submit: Wh,
    cancel: Wh,
    custom: Wh,
    menu: x9,
    togglebutton: S9
  }), T9 = [
    Zt,
    Es,
    hs("level", [
      "info",
      "warn",
      "error",
      "success"
    ]),
    jS,
    S("url", "")
  ], _9 = X(T9), C9 = (t) => [
    Zt,
    t
  ], O9 = [
    Zt,
    Es,
    dn,
    zg("button"),
    Go,
    LP,
    bb("buttonType", [
      "primary",
      "secondary",
      "toolbar"
    ]),
    Yl
  ], k9 = X(O9), qc = [
    Zt,
    Pg
  ], Pn = qc.concat([Vg]), E9 = qc.concat([
    Lg,
    dn
  ]), A9 = X(E9), D9 = va, M9 = Pn.concat([YS("auto")]), $9 = X(M9), F9 = Ad([
    Ya,
    Es,
    jS
  ]), B9 = Pn.concat([fs("storageKey", "default")]), I9 = X(B9), R9 = ve, P9 = X(Pn), L9 = ve, V9 = qc.concat([
    fs("tag", "textarea"),
    se("scriptId"),
    se("scriptUrl"),
    ID("settings", void 0)
  ]), H9 = qc.concat([
    fs("tag", "textarea"),
    tn("init")
  ]), N9 = ya((t) => Yt("customeditor.old", Co(H9), t).orThunk(() => Yt("customeditor.new", Co(V9), t))), z9 = ve, U9 = X(Pn), W9 = AD(), G9 = (t) => [
    Zt,
    MD("columns"),
    t
  ], j9 = [
    Zt,
    se("html"),
    Un("presets", "presentation", [
      "presentation",
      "document"
    ])
  ], Y9 = X(j9), X9 = Pn.concat([
    Ie("border", !1),
    Ie("sandboxed", !0),
    Ie("streamContent", !1),
    Ie("transparent", !0)
  ]), K9 = X(X9), q9 = ve, J9 = X(qc.concat([ze("height")])), Z9 = X([
    se("url"),
    xa("zoom"),
    xa("cachedWidth"),
    xa("cachedHeight")
  ]), Q9 = Pn.concat([
    ze("inputMode"),
    ze("placeholder"),
    Ie("maximized", !1),
    dn
  ]), t6 = X(Q9), e6 = ve, o6 = (t) => [
    Zt,
    Lg,
    t,
    Un("align", "start", [
      "start",
      "center",
      "end"
    ])
  ], n6 = [
    Es,
    Ya
  ], s6 = [
    Es,
    ko("items", hb("items", () => gk))
  ], gk = Ed([
    X(n6),
    X(s6)
  ]), r6 = Pn.concat([
    ko("items", gk),
    dn
  ]), c6 = X(r6), a6 = ve, i6 = Pn.concat([
    fb("items", [
      Es,
      Ya
    ]),
    $d("size", 1),
    dn
  ]), l6 = X(i6), u6 = ve, d6 = Pn.concat([
    Ie("constrain", !0),
    dn
  ]), m6 = X(d6), pk = X([
    se("width"),
    se("height")
  ]), g6 = qc.concat([
    Lg,
    $d("min", 0),
    $d("max", 0)
  ]), p6 = X(g6), h6 = zi, f6 = [
    Zt,
    ko("header", ve),
    ko("cells", Hs(ve))
  ], b6 = X(f6), v6 = Pn.concat([
    ze("placeholder"),
    Ie("maximized", !1),
    dn
  ]), y6 = X(v6), x6 = ve, hk = [
    hs("type", [
      "directory",
      "leaf"
    ]),
    GS,
    se("id"),
    zn("menu", OC)
  ], fk = X(hk), S6 = hk.concat([ko("children", hb("children", () => uc("type", {
    directory: bk,
    leaf: fk
  })))]), bk = X(S6), w6 = uc("type", {
    directory: bk,
    leaf: fk
  }), T6 = [
    Zt,
    ko("items", w6),
    br("onLeafAction"),
    br("onToggleExpand"),
    vr("defaultExpandedIds", [], ve),
    ze("defaultSelectedId")
  ], _6 = X(T6), C6 = Pn.concat([
    Un("filetype", "file", [
      "image",
      "media",
      "file"
    ]),
    dn,
    ze("picker_text")
  ]), O6 = X(C6), k6 = X([
    Ya,
    Hg
  ]), Gh = (t) => Oe("items", "items", _n(), Hs(ya((e) => Yt(`Checking item of ${t}`, jh, e).fold((o) => ut.error(dc(o)), (o) => ut.value(o))))), jh = mb(() => uc("type", {
    alertbanner: _9,
    bar: X(C9(Gh("bar"))),
    button: k9,
    checkbox: A9,
    colorinput: I9,
    colorpicker: P9,
    dropzone: U9,
    grid: X(G9(Gh("grid"))),
    iframe: K9,
    input: t6,
    listbox: c6,
    selectbox: l6,
    sizeinput: m6,
    slider: p6,
    textarea: y6,
    urlinput: O6,
    customeditor: N9,
    htmlpanel: Y9,
    imagepreview: J9,
    collection: $9,
    label: X(o6(Gh("label"))),
    table: b6,
    tree: _6,
    panel: vk
  })), E6 = [
    Zt,
    S("classes", []),
    ko("items", jh)
  ], vk = X(E6), A6 = [
    zg("tab"),
    GS,
    ko("items", jh)
  ], D6 = [
    Zt,
    fb("tabs", A6)
  ], M6 = X(D6), $6 = mk, F6 = w9, B6 = X([
    se("title"),
    Oo("body", uc("type", {
      panel: vk,
      tabpanel: M6
    })),
    fs("size", "normal"),
    vr("buttons", [], F6),
    S("initialData", {}),
    he("onAction", R),
    he("onChange", R),
    he("onSubmit", R),
    he("onClose", R),
    he("onCancel", R),
    he("onTabChange", R)
  ]), I6 = (t) => Yt("dialog", B6, t), R6 = X([
    hs("type", [
      "cancel",
      "custom"
    ]),
    ...$6
  ]), P6 = X([
    se("title"),
    se("url"),
    xa("height"),
    xa("width"),
    vb("buttons", R6),
    he("onAction", R),
    he("onCancel", R),
    he("onClose", R),
    he("onMessage", R)
  ]), L6 = (t) => Yt("dialog", P6, t), Yh = (t) => Ps(t) ? [t].concat(le(cd(t), Yh)) : as(t) ? le(t, Yh) : [], V6 = (t) => Ct(t.type) && Ct(t.name), H6 = {
    checkbox: D9,
    colorinput: R9,
    colorpicker: L9,
    dropzone: W9,
    input: e6,
    iframe: q9,
    imagepreview: Z9,
    selectbox: u6,
    sizeinput: pk,
    slider: h6,
    listbox: a6,
    size: pk,
    textarea: x6,
    urlinput: k6,
    customeditor: z9,
    collection: F9,
    togglemenuitem: y9
  }, N6 = (t) => u.from(H6[t.type]), z6 = (t) => Ht(Yh(t), V6), U6 = (t) => {
    const e = z6(t), o = le(e, (n) => N6(n).fold(() => [], (s) => [Oo(n.name, s)]));
    return X(o);
  }, yk = (t) => {
    var e;
    const o = On(I6(t)), n = U6(t), s = (e = t.initialData) !== null && e !== void 0 ? e : {};
    return {
      internalDialog: o,
      dataValidator: n,
      initialData: s
    };
  }, oc = {
    open: (t, e) => {
      const o = yk(e);
      return t(o.internalDialog, o.initialData, o.dataValidator);
    },
    openUrl: (t, e) => {
      const o = On(L6(e));
      return t(o);
    },
    redial: (t) => yk(t)
  };
  var W6 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    events: (t, e) => {
      const o = (n, s) => {
        t.updateState.each((r) => {
          const c = r(n, s);
          e.set(c);
        }), t.renderComponents.each((r) => {
          const c = r(s, e.get());
          (t.reuseDom ? gx : mx)(n, c);
        });
      };
      return It([
        O(Tr(), (n, s) => {
          const r = s;
          if (!r.universal) {
            const c = t.channel;
            ie(r.channels, c) && o(n, r.data);
          }
        }),
        Vt((n, s) => {
          t.initialData.each((r) => {
            o(n, r);
          });
        })
      ]);
    }
  }), G6 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    getState: (t, e, o) => o
  }), j6 = [
    k("channel"),
    _t("renderComponents"),
    _t("updateState"),
    _t("initialData"),
    Ie("reuseDom", !0)
  ], Y6 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    init: () => {
      const t = j(u.none()), e = () => t.set(u.none());
      return {
        readState: () => t.get().getOr("none"),
        get: t.get,
        set: t.set,
        clear: e
      };
    }
  });
  const So = ye({
    fields: j6,
    name: "reflecting",
    active: W6,
    apis: G6,
    state: Y6
  }), xk = (t) => {
    const e = [], o = {};
    return Ve(t, (n, s) => {
      n.fold(() => {
        e.push(s);
      }, (r) => {
        o[s] = r;
      });
    }), e.length > 0 ? ut.error(e) : ut.value(o);
  }, X6 = (t, e, o) => {
    const n = St(zc.sketch((s) => ({
      dom: {
        tag: "div",
        classes: ["tox-form"].concat(t.classes)
      },
      components: B(t.items, (r) => L_(s, r, e, o))
    })));
    return {
      dom: {
        tag: "div",
        classes: ["tox-dialog__body"]
      },
      components: [{
        dom: {
          tag: "div",
          classes: ["tox-dialog__body-content"]
        },
        components: [n.asSpec()]
      }],
      behaviours: D([
        z.config({
          mode: "acyclic",
          useTabstopAt: ia(li)
        }),
        fn.memento(n),
        xz(n, {
          postprocess: (s) => xk(s).fold((r) => (console.error(r), {}), Tt)
        }),
        nt("dialog-body-panel", [O(ys(), (s, r) => {
          s.getSystem().broadcastOn([vu], { newFocus: u.some(r.event.target) });
        })])
      ])
    };
  }, K6 = (t, e) => ({
    uid: t.uid,
    dom: t.dom,
    components: t.components,
    events: Al(t.action),
    behaviours: xe(t.tabButtonBehaviours, [
      Z.config({}),
      z.config({
        mode: "execution",
        useSpace: !0,
        useEnter: !0
      }),
      I.config({
        store: {
          mode: "memory",
          initialValue: t.value
        }
      })
    ]),
    domModification: t.domModification
  }), q6 = $o({
    name: "TabButton",
    configFields: [
      S("uid", void 0),
      k("value"),
      Oe("dom", "dom", Od(() => ({
        attributes: {
          role: "tab",
          id: P("aria"),
          "aria-selected": "false"
        }
      })), Cn()),
      _t("action"),
      S("domModification", {}),
      be("tabButtonBehaviours", [
        Z,
        z,
        I
      ]),
      k("view")
    ],
    factory: K6
  }), J6 = w([
    k("tabs"),
    k("dom"),
    S("clickToDismiss", !1),
    be("tabbarBehaviours", [
      yt,
      z
    ]),
    Mr([
      "tabClass",
      "selectedClass"
    ])
  ]), Z6 = yl({
    factory: q6,
    name: "tabs",
    unit: "tab",
    overrides: (t) => {
      const e = (n, s) => {
        yt.dehighlight(n, s), U(n, kb(), {
          tabbar: n,
          button: s
        });
      }, o = (n, s) => {
        yt.highlight(n, s), U(n, Ob(), {
          tabbar: n,
          button: s
        });
      };
      return {
        action: (n) => {
          const s = n.getSystem().getByUid(t.uid).getOrDie(), r = yt.isHighlighted(s, n);
          (r && t.clickToDismiss ? e : r ? R : o)(s, n);
        },
        domModification: { classes: [t.markers.tabClass] }
      };
    }
  }), Q6 = w([Z6]), tY = (t, e, o, n) => ({
    uid: t.uid,
    dom: t.dom,
    components: e,
    "debug.sketcher": "Tabbar",
    domModification: { attributes: { role: "tablist" } },
    behaviours: xe(t.tabbarBehaviours, [
      yt.config({
        highlightClass: t.markers.selectedClass,
        itemClass: t.markers.tabClass,
        onHighlight: (s, r) => {
          st(r.element, "aria-selected", "true");
        },
        onDehighlight: (s, r) => {
          st(r.element, "aria-selected", "false");
        }
      }),
      z.config({
        mode: "flow",
        getInitial: (s) => yt.getHighlighted(s).map((r) => r.element),
        selector: "." + t.markers.tabClass,
        executeOnMove: !0
      })
    ])
  }), Sk = Ge({
    name: "Tabbar",
    configFields: J6(),
    partFields: Q6(),
    factory: tY
  }), eY = (t, e) => ({
    uid: t.uid,
    dom: t.dom,
    behaviours: xe(t.tabviewBehaviours, [et.config({})]),
    domModification: { attributes: { role: "tabpanel" } }
  }), oY = $o({
    name: "Tabview",
    configFields: [be("tabviewBehaviours", [et])],
    factory: eY
  }), nY = w([
    S("selectFirst", !0),
    pt("onChangeTab"),
    pt("onDismissTab"),
    S("tabs", []),
    be("tabSectionBehaviours", [])
  ]), sY = Pe({
    factory: Sk,
    schema: [
      k("dom"),
      Ns("markers", [
        k("tabClass"),
        k("selectedClass")
      ])
    ],
    name: "tabbar",
    defaults: (t) => ({ tabs: t.tabs })
  }), rY = Pe({
    factory: oY,
    name: "tabview"
  }), cY = w([
    sY,
    rY
  ]), aY = (t, e, o, n) => {
    const s = (c) => {
      const a = I.getValue(c);
      Dt(c, t, "tabview").each((i) => {
        Gt(t.tabs, (d) => d.value === a).each((d) => {
          const m = d.view();
          Je(c.element, "id").each((g) => {
            st(i.element, "aria-labelledby", g);
          }), et.set(i, m), t.onChangeTab(i, c, m);
        });
      });
    }, r = (c, a) => {
      Dt(c, t, "tabbar").each((i) => {
        a(i).each(Cr);
      });
    };
    return {
      uid: t.uid,
      dom: t.dom,
      components: e,
      behaviours: dl(t.tabSectionBehaviours),
      events: It(_e([
        t.selectFirst ? [Vt((c, a) => {
          r(c, yt.getFirst);
        })] : [],
        [
          O(Ob(), (c, a) => {
            const i = a.event.button;
            s(i);
          }),
          O(kb(), (c, a) => {
            const i = a.event.button;
            t.onDismissTab(c, i);
          })
        ]
      ])),
      apis: {
        getViewItems: (c) => Dt(c, t, "tabview").map((a) => et.contents(a)).getOr([]),
        showTab: (c, a) => {
          r(c, (l) => {
            const d = yt.getCandidates(l);
            return Gt(d, (g) => I.getValue(g) === a).filter((g) => !yt.isHighlighted(l, g));
          });
        }
      }
    };
  }, Jc = Ge({
    name: "TabSection",
    configFields: nY(),
    partFields: cY(),
    factory: aY,
    apis: {
      getViewItems: (t, e) => t.getViewItems(e),
      showTab: (t, e, o) => {
        t.showTab(e, o);
      }
    }
  }), iY = (t, e, o) => B(t, (n, s) => {
    et.set(o, t[s].view());
    const r = e.dom.getBoundingClientRect();
    return et.set(o, []), r.height;
  }), lY = (t) => yn(pf(t, (e, o) => e > o ? -1 : e < o ? 1 : 0)), uY = (t, e, o) => {
    const n = ud(t).dom, s = Ws(t, ".tox-dialog-wrap").getOr(t), r = Ne(s, "position") === "fixed";
    let c;
    r ? c = Math.max(n.clientHeight, window.innerHeight) : c = Math.max(n.offsetHeight, n.scrollHeight);
    const a = ge(e), l = e.dom.offsetLeft >= o.dom.offsetLeft + ro(o) ? Math.max(ge(o), a) : a, d = parseInt(Ne(t, "margin-top"), 10) || 0, m = parseInt(Ne(t, "margin-bottom"), 10) || 0, p = ge(t) + d + m - l;
    return c - p;
  }, dY = (t, e) => {
    yn(t).each((o) => Jc.showTab(e, o.value));
  }, wk = (t, e) => {
    rt(t, "height", e + "px"), rt(t, "flex-basis", e + "px");
  }, Yu = (t, e, o) => {
    Ws(t, '[role="dialog"]').each((n) => {
      Jt(n, '[role="tablist"]').each((s) => {
        o.get().map((r) => (rt(e, "height", "0"), rt(e, "flex-basis", "0"), Math.min(r, uY(n, e, s)))).each((r) => {
          wk(e, r);
        });
      });
    });
  }, Xh = (t) => Jt(t, '[role="tabpanel"]'), mY = (t) => {
    const e = Pt();
    return {
      extraEvents: [
        Vt((s) => {
          const r = s.element;
          Xh(r).each((c) => {
            rt(c, "visibility", "hidden"), s.getSystem().getByDom(c).toOptional().each((a) => {
              const i = iY(t, c, a);
              lY(i).fold(e.clear, e.set);
            }), Yu(r, c, e), kt(c, "visibility"), dY(t, s), requestAnimationFrame(() => {
              Yu(r, c, e);
            });
          });
        }),
        O(Yi(), (s) => {
          const r = s.element;
          Xh(r).each((c) => {
            Yu(r, c, e);
          });
        }),
        O(mT, (s, r) => {
          const c = s.element;
          Xh(c).each((a) => {
            const i = jn(qe(a));
            rt(a, "visibility", "hidden");
            const l = Ce(a, "height").map((g) => parseInt(g, 10));
            kt(a, "height"), kt(a, "flex-basis");
            const d = a.dom.getBoundingClientRect().height;
            l.forall((g) => d > g) ? (e.set(d), Yu(c, a, e)) : l.each((g) => {
              wk(a, g);
            }), kt(a, "visibility"), i.each(sn);
          });
        })
      ],
      selectFirst: !1
    };
  }, Tk = "send-data-to-section", _k = "send-data-to-view", gY = (t, e, o) => {
    const n = j({}), s = (l) => {
      const d = I.getValue(l), m = xk(d).getOr({}), g = n.get(), p = jt(g, m);
      n.set(p);
    }, r = (l) => {
      const d = n.get();
      I.setValue(l, d);
    }, c = j(null), a = B(t.tabs, (l) => ({
      value: l.name,
      dom: {
        tag: "div",
        classes: ["tox-dialog__body-nav-item"]
      },
      components: [qt(o.shared.providers.translate(l.title))],
      view: () => [zc.sketch((d) => ({
        dom: {
          tag: "div",
          classes: ["tox-form"]
        },
        components: B(l.items, (m) => L_(d, m, e, o)),
        formBehaviours: D([
          z.config({
            mode: "acyclic",
            useTabstopAt: ia(li)
          }),
          nt("TabView.form.events", [
            Vt(r),
            Gn(s)
          ]),
          po.config({
            channels: mc([
              {
                key: Tk,
                value: { onReceive: s }
              },
              {
                key: _k,
                value: { onReceive: r }
              }
            ])
          })
        ])
      }))]
    })), i = mY(a);
    return Jc.sketch({
      dom: {
        tag: "div",
        classes: ["tox-dialog__body"]
      },
      onChangeTab: (l, d, m) => {
        const g = I.getValue(d);
        U(l, dT, {
          name: g,
          oldName: c.get()
        }), c.set(g);
      },
      tabs: a,
      components: [
        Jc.parts.tabbar({
          dom: {
            tag: "div",
            classes: ["tox-dialog__body-nav"]
          },
          components: [Sk.parts.tabs({})],
          markers: {
            tabClass: "tox-tab",
            selectedClass: "tox-dialog__body-nav-item--active"
          },
          tabbarBehaviours: D([zt.config({})])
        }),
        Jc.parts.tabview({
          dom: {
            tag: "div",
            classes: ["tox-dialog__body-content"]
          }
        })
      ],
      selectFirst: i.selectFirst,
      tabSectionBehaviours: D([
        nt("tabpanel", i.extraEvents),
        z.config({ mode: "acyclic" }),
        mt.config({ find: (l) => yn(Jc.getViewItems(l)) }),
        qr(u.none(), (l) => (l.getSystem().broadcastOn([Tk], {}), n.get()), (l, d) => {
          n.set(d), l.getSystem().broadcastOn([_k], {});
        })
      ])
    });
  }, Ck = (t, e, o, n, s) => {
    const r = (i) => {
      const l = i.body;
      switch (l.type) {
        case "tabpanel":
          return [gY(l, i.initialData, n)];
        default:
          return [X6(l, i.initialData, n)];
      }
    }, c = (i, l) => u.some({ isTabPanel: () => l.body.type === "tabpanel" }), a = { "aria-live": "polite" };
    return {
      dom: {
        tag: "div",
        classes: ["tox-dialog__content-js"],
        attributes: {
          ...o.map((i) => ({ id: i })).getOr({}),
          ...s ? a : {}
        }
      },
      components: [],
      behaviours: D([
        fn.childAt(0),
        So.config({
          channel: `${o_}-${e}`,
          updateState: c,
          renderComponents: r,
          initialData: t
        })
      ])
    };
  }, pY = (t, e, o, n, s) => Ck(t, e, u.some(o), n, s), hY = (t, e, o) => {
    const n = Ck(t, e, u.none(), o, !1);
    return ae.parts.body(n);
  }, fY = (t) => {
    const e = {
      dom: {
        tag: "div",
        classes: ["tox-dialog__content-js"]
      },
      components: [{
        dom: {
          tag: "div",
          classes: ["tox-dialog__body-iframe"]
        },
        components: [QT(u.none(), {
          dom: {
            tag: "iframe",
            attributes: { src: t.url }
          },
          behaviours: D([
            zt.config({}),
            Z.config({})
          ])
        })]
      }],
      behaviours: D([z.config({
        mode: "acyclic",
        useTabstopAt: ia(li)
      })])
    };
    return ae.parts.body(e);
  }, bY = Mc.deviceType.isTouch(), Ok = (t, e) => ({
    dom: {
      tag: "div",
      styles: { display: "none" },
      classes: ["tox-dialog__header"]
    },
    components: [
      t,
      e
    ]
  }), kk = (t, e) => ae.parts.close(Se.sketch({
    dom: {
      tag: "button",
      classes: [
        "tox-button",
        "tox-button--icon",
        "tox-button--naked"
      ],
      attributes: {
        type: "button",
        "aria-label": e.translate("Close")
      }
    },
    action: t,
    buttonBehaviours: D([zt.config({})])
  })), Ek = () => ae.parts.title({
    dom: {
      tag: "div",
      classes: ["tox-dialog__title"],
      innerHtml: "",
      styles: { display: "none" }
    }
  }), Ak = (t, e) => ae.parts.body({
    dom: {
      tag: "div",
      classes: ["tox-dialog__body"]
    },
    components: [{
      dom: {
        tag: "div",
        classes: ["tox-dialog__body-content"]
      },
      components: [{ dom: Os(`<p>${Gx(e.translate(t))}</p>`) }]
    }]
  }), Dk = (t) => ae.parts.footer({
    dom: {
      tag: "div",
      classes: ["tox-dialog__footer"]
    },
    components: t
  }), Mk = (t, e) => [
    Bn.sketch({
      dom: {
        tag: "div",
        classes: ["tox-dialog__footer-start"]
      },
      components: t
    }),
    Bn.sketch({
      dom: {
        tag: "div",
        classes: ["tox-dialog__footer-end"]
      },
      components: e
    })
  ], Kh = (t) => {
    const e = "tox-dialog", o = e + "-wrap", n = o + "__backdrop", s = e + "__disable-scroll";
    return ae.sketch({
      lazySink: t.lazySink,
      onEscape: (r) => (t.onEscape(r), u.some(!0)),
      useTabstopAt: (r) => !li(r),
      firstTabstop: t.firstTabstop,
      dom: {
        tag: "div",
        classes: [e].concat(t.extraClasses),
        styles: {
          position: "relative",
          ...t.extraStyles
        }
      },
      components: [
        t.header,
        t.body,
        ...t.footer.toArray()
      ],
      parts: {
        blocker: {
          dom: Os(`<div class="${o}"></div>`),
          components: [{
            dom: {
              tag: "div",
              classes: bY ? [
                n,
                n + "--opaque"
              ] : [n]
            }
          }]
        }
      },
      dragBlockClass: o,
      modalBehaviours: D([
        Z.config({}),
        nt("dialog-events", t.dialogEvents.concat([
          bc(ys(), (r, c) => {
            Rn.isBlocked(r) ? R() : z.focusIn(r);
          }),
          O(Xi(), (r, c) => {
            r.getSystem().broadcastOn([vu], { newFocus: c.event.newFocus });
          })
        ])),
        nt("scroll-lock", [
          Vt(() => {
            ee(Nn(), s);
          }),
          Gn(() => {
            Xt(Nn(), s);
          })
        ]),
        ...t.extraBehaviours
      ]),
      eventOrder: {
        [Ao()]: ["dialog-events"],
        [Wn()]: [
          "scroll-lock",
          "dialog-events",
          "alloy.base.behaviour"
        ],
        [hc()]: [
          "alloy.base.behaviour",
          "dialog-events",
          "scroll-lock"
        ],
        ...t.eventOrder
      }
    });
  }, $k = (t) => Se.sketch({
    dom: {
      tag: "button",
      classes: [
        "tox-button",
        "tox-button--icon",
        "tox-button--naked"
      ],
      attributes: {
        type: "button",
        "aria-label": t.translate("Close"),
        title: t.translate("Close")
      }
    },
    buttonBehaviours: D([zt.config({})]),
    components: [un("close", {
      tag: "span",
      classes: ["tox-icon"]
    }, t.icons)],
    action: (e) => {
      xt(e, or);
    }
  }), Fk = (t, e, o, n) => {
    const s = (r) => [qt(n.translate(r.title))];
    return {
      dom: {
        tag: "div",
        classes: ["tox-dialog__title"],
        attributes: { ...o.map((r) => ({ id: r })).getOr({}) }
      },
      components: [],
      behaviours: D([So.config({
        channel: `${e_}-${e}`,
        initialData: t,
        renderComponents: s
      })])
    };
  }, Bk = () => ({ dom: Os('<div class="tox-dialog__draghandle"></div>') }), vY = (t, e, o, n) => Bn.sketch({
    dom: Os('<div class="tox-dialog__header"></div>'),
    components: [
      Fk(t, e, u.some(o), n),
      Bk(),
      $k(n)
    ],
    containerBehaviours: D([ec.config({
      mode: "mouse",
      blockerClass: "blocker",
      getTarget: (s) => An(s, '[role="dialog"]').getOrDie(),
      snaps: {
        getSnapPoints: () => [],
        leftAttr: "data-drag-left",
        topAttr: "data-drag-top"
      }
    })])
  }), yY = (t, e, o) => {
    const n = ae.parts.title(Fk(t, e, u.none(), o)), s = ae.parts.draghandle(Bk()), r = ae.parts.close($k(o)), c = [n].concat(t.draggable ? [s] : []).concat([r]);
    return Bn.sketch({
      dom: Os('<div class="tox-dialog__header"></div>'),
      components: c
    });
  }, Ik = (t, e, o) => yY({
    title: o.shared.providers.translate(t),
    draggable: o.dialog.isDraggableModal()
  }, e, o.shared.providers), Rk = (t, e, o, n) => ({
    dom: {
      tag: "div",
      classes: ["tox-dialog__busy-spinner"],
      attributes: { "aria-label": o.translate(t) },
      styles: {
        left: "0px",
        right: "0px",
        bottom: "0px",
        top: `${n.getOr(0)}px`,
        position: "absolute"
      }
    },
    behaviours: e,
    components: [{ dom: Os('<div class="tox-spinner"><div></div><div></div><div></div></div>') }]
  }), Pk = (t, e, o) => ({
    onClose: () => o.closeWindow(),
    onBlock: (n) => {
      const s = Jt(t().element, ".tox-dialog__header").map((r) => ge(r));
      ae.setBusy(t(), (r, c) => Rk(n.message, c, e, s));
    },
    onUnblock: () => {
      ae.setIdle(t());
    }
  }), Lk = "tox-dialog--fullscreen", qh = "tox-dialog--width-lg", Jh = "tox-dialog--width-md", Xu = (t) => {
    switch (t) {
      case "large":
        return u.some(qh);
      case "medium":
        return u.some(Jh);
      default:
        return u.none();
    }
  }, Vk = (t, e) => {
    const o = F.fromDom(e.element.dom);
    ao(o, Lk) || (nn(o, [
      qh,
      Jh
    ]), Xu(t).each((n) => ee(o, n)));
  }, Hk = (t, e) => {
    const o = F.fromDom(t.element.dom), n = Hb(o), s = Gt(n, (r) => r === qh || r === Jh).or(Xu(e));
    ZM(o, [
      Lk,
      ...s.toArray()
    ]);
  }, Nk = (t, e, o) => Re(Kh({
    ...t,
    firstTabstop: 1,
    lazySink: o.shared.getSink,
    extraBehaviours: [
      fu({}),
      ...t.extraBehaviours
    ],
    onEscape: (n) => {
      xt(n, or);
    },
    dialogEvents: e,
    eventOrder: {
      [Tr()]: [
        So.name(),
        po.name()
      ],
      [Wn()]: [
        "scroll-lock",
        So.name(),
        "messages",
        "dialog-events",
        "alloy.base.behaviour"
      ],
      [hc()]: [
        "alloy.base.behaviour",
        "dialog-events",
        "messages",
        So.name(),
        "scroll-lock"
      ]
    }
  })), Zh = (t, e = {}) => {
    const o = (n) => {
      const s = B(n.items, (r) => {
        const c = Q(e, r.name).getOr(j(!1));
        return {
          ...r,
          storage: c
        };
      });
      return {
        ...n,
        items: s
      };
    };
    return B(t, (n) => n.type === "menu" ? o(n) : n);
  }, zk = (t) => Fe(t, (e, o) => o.type === "menu" ? Fe(o.items, (s, r) => (s[r.name] = r.storage, s), e) : e, {}), Uk = (t, e) => [
    jd(ys(), Fz),
    t(ri, (o, n, s, r) => {
      jn(qe(r.element)).fold(R, fm), e.onClose(), n.onClose();
    }),
    t(or, (o, n, s, r) => {
      n.onCancel(o), xt(r, ri);
    }),
    O(gp, (o, n) => e.onUnblock()),
    O(mp, (o, n) => e.onBlock(n.event))
  ], xY = (t, e) => {
    const o = (s, r) => O(s, (c, a) => {
      n(c, (i, l) => {
        r(t(), i, a.event, c);
      });
    }), n = (s, r) => {
      So.getState(s).get().each((c) => {
        r(c, s);
      });
    };
    return [
      ...Uk(o, e),
      o(Kn, (s, r, c) => {
        r.onAction(s, { name: c.name });
      })
    ];
  }, Wk = (t, e, o) => {
    const n = (r, c) => O(r, (a, i) => {
      s(a, (l, d) => {
        c(t(), l, i.event, a);
      });
    }), s = (r, c) => {
      So.getState(r).get().each((a) => {
        c(a.internalDialog, r);
      });
    };
    return [
      ...Uk(n, e),
      n(ci, (r, c) => c.onSubmit(r)),
      n(yo, (r, c, a) => {
        c.onChange(r, { name: a.name });
      }),
      n(Kn, (r, c, a, i) => {
        const l = () => i.getSystem().isConnected() ? z.focusIn(i) : void 0, d = (p) => Bf(p, "disabled") || Je(p, "aria-disabled").exists((h) => h === "true"), m = qe(i.element), g = jn(m);
        c.onAction(r, {
          name: a.name,
          value: a.value
        }), jn(m).fold(l, (p) => {
          d(p) || g.exists((h) => Bi(p, h) && d(h)) ? l() : o().toOptional().filter((h) => !Bi(h.element, p)).each(l);
        });
      }),
      n(dT, (r, c, a) => {
        c.onTabChange(r, {
          newTabName: a.name,
          oldTabName: a.oldName
        });
      }),
      Gn((r) => {
        const c = t();
        I.setValue(r, c.getData());
      })
    ];
  }, SY = (t, e) => wu(t, t.type, e), wY = (t, e, o) => Gt(e, (n) => n.name === o).bind((n) => n.memento.getOpt(t)), TY = (t, e) => {
    const o = e.map((a) => a.footerButtons).getOr([]), n = mf(o, (a) => a.align === "start"), s = (a, i) => Bn.sketch({
      dom: {
        tag: "div",
        classes: [`tox-dialog__footer-${a}`]
      },
      components: B(i, (l) => l.memento.asSpec())
    }), r = s("start", n.pass), c = s("end", n.fail);
    return [
      r,
      c
    ];
  }, Gk = (t, e, o) => {
    const n = (s, r) => {
      const c = B(r.buttons, (i) => {
        const l = St(SY(i, o));
        return {
          name: i.name,
          align: i.align,
          memento: l
        };
      }), a = (i) => wY(s, c, i);
      return u.some({
        lookupByName: a,
        footerButtons: c
      });
    };
    return {
      dom: Os('<div class="tox-dialog__footer"></div>'),
      components: [],
      behaviours: D([So.config({
        channel: `${n_}-${e}`,
        initialData: t,
        updateState: n,
        renderComponents: TY
      })])
    };
  }, _Y = (t, e, o) => Gk(t, e, o), jk = (t, e, o) => ae.parts.footer(Gk(t, e, o)), Yk = (t, e) => {
    if (t.getRoot().getSystem().isConnected()) {
      const n = mt.getCurrent(t.getFormWrapper()).getOr(t.getFormWrapper());
      return zc.getField(n, e).orThunk(() => t.getFooter().bind((c) => So.getState(c).get()).bind((c) => c.lookupByName(e)));
    } else
      return u.none();
  }, CY = (t, e) => {
    const o = t.getRoot();
    return So.getState(o).get().map((n) => On(Yt("data", n.dataValidator, e))).getOr(e);
  }, Xk = (t, e, o) => {
    const n = (h) => {
      const f = t.getRoot();
      f.getSystem().isConnected() && h(f);
    }, p = {
      getData: () => {
        const h = t.getRoot(), f = h.getSystem().isConnected() ? t.getFormWrapper() : h, y = I.getValue(f), v = me(o, (b) => b.get());
        return {
          ...y,
          ...v
        };
      },
      setData: (h) => {
        n((f) => {
          const y = p.getData(), v = jt(y, h), b = CY(t, v), x = t.getFormWrapper();
          I.setValue(x, b), Ve(o, (E, C) => {
            At(v, C) && E.set(v[C]);
          });
        });
      },
      setEnabled: (h, f) => {
        Yk(t, h).each(f ? q.enable : q.disable);
      },
      focus: (h) => {
        Yk(t, h).each(Z.focus);
      },
      block: (h) => {
        if (!Ct(h))
          throw new Error("The dialogInstanceAPI.block function should be passed a blocking message of type string as an argument");
        n((f) => {
          U(f, mp, { message: h });
        });
      },
      unblock: () => {
        n((h) => {
          xt(h, gp);
        });
      },
      showTab: (h) => {
        n((f) => {
          const y = t.getBody();
          So.getState(y).get().exists((b) => b.isTabPanel()) && mt.getCurrent(y).each((b) => {
            Jc.showTab(b, h);
          });
        });
      },
      redial: (h) => {
        n((f) => {
          const y = t.getId(), v = e(h), b = Zh(v.internalDialog.buttons, o);
          f.getSystem().broadcastOn([`${bu}-${y}`], v), f.getSystem().broadcastOn([`${e_}-${y}`], v.internalDialog), f.getSystem().broadcastOn([`${o_}-${y}`], v.internalDialog), f.getSystem().broadcastOn([`${n_}-${y}`], {
            ...v.internalDialog,
            buttons: b
          }), p.setData(v.initialData);
        });
      },
      close: () => {
        n((h) => {
          xt(h, ri);
        });
      },
      toggleFullscreen: t.toggleFullscreen
    };
    return p;
  }, OY = (t, e, o) => {
    const n = P("dialog"), s = t.internalDialog, r = Ik(s.title, n, o), c = j(s.size), a = Xu(c.get()).toArray(), i = (b, x) => (c.set(x.internalDialog.size), Vk(x.internalDialog.size, b), u.some(x)), l = hY({
      body: s.body,
      initialData: s.initialData
    }, n, o), d = Zh(s.buttons), m = zk(d), g = ls(d.length !== 0, jk({ buttons: d }, n, o)), p = Wk(() => v, Pk(() => f, o.shared.providers, e), o.shared.getSink), h = {
      id: n,
      header: r,
      body: l,
      footer: g,
      extraClasses: a,
      extraBehaviours: [So.config({
        channel: `${bu}-${n}`,
        updateState: i,
        initialData: t
      })],
      extraStyles: {}
    }, f = Nk(h, p, o), y = (() => {
      const b = () => {
        const E = ae.getBody(f);
        return mt.getCurrent(E).getOr(E);
      }, x = () => {
        Hk(f, c.get());
      };
      return {
        getId: w(n),
        getRoot: w(f),
        getBody: () => ae.getBody(f),
        getFooter: () => ae.getFooter(f),
        getFormWrapper: b,
        toggleFullscreen: x
      };
    })(), v = Xk(y, e.redial, m);
    return {
      dialog: f,
      instanceApi: v
    };
  }, Kk = (t, e, o, n = !1, s) => {
    const r = P("dialog"), c = P("dialog-label"), a = P("dialog-content"), i = t.internalDialog, l = j(i.size), d = Xu(l.get()).toArray(), m = (_, A) => (l.set(A.internalDialog.size), Vk(A.internalDialog.size, _), s(), u.some(A)), g = St(vY({
      title: i.title,
      draggable: !0
    }, r, c, o.shared.providers)), p = St(pY({
      body: i.body,
      initialData: i.initialData
    }, r, a, o, n)), h = Zh(i.buttons), f = zk(h), y = ls(h.length !== 0, St(_Y({ buttons: h }, r, o))), v = Wk(() => C, {
      onBlock: (_) => {
        Rn.block(x, (A, M) => {
          const ot = g.getOpt(x).map((V) => ge(V.element));
          return Rk(_.message, M, o.shared.providers, ot);
        });
      },
      onUnblock: () => {
        Rn.unblock(x);
      },
      onClose: () => e.closeWindow()
    }, o.shared.getSink), x = Re({
      dom: {
        tag: "div",
        classes: [
          "tox-dialog",
          "tox-dialog-inline",
          ...d
        ],
        attributes: {
          role: "dialog",
          "aria-labelledby": c
        }
      },
      eventOrder: {
        [Tr()]: [
          So.name(),
          po.name()
        ],
        [Ao()]: ["execute-on-form"],
        [Wn()]: [
          "reflecting",
          "execute-on-form"
        ]
      },
      behaviours: D([
        z.config({
          mode: "cyclic",
          onEscape: (_) => (xt(_, ri), u.some(!0)),
          useTabstopAt: (_) => !li(_) && (us(_) !== "button" || He(_, "disabled") !== "disabled"),
          firstTabstop: 1
        }),
        So.config({
          channel: `${bu}-${r}`,
          updateState: m,
          initialData: t
        }),
        Z.config({}),
        nt("execute-on-form", v.concat([
          bc(ys(), (_, A) => {
            z.focusIn(_);
          }),
          O(Xi(), (_, A) => {
            _.getSystem().broadcastOn([vu], { newFocus: A.event.newFocus });
          })
        ])),
        Rn.config({ getRoot: () => u.some(x) }),
        et.config({}),
        fu({})
      ]),
      components: [
        g.asSpec(),
        p.asSpec(),
        ...y.map((_) => _.asSpec()).toArray()
      ]
    }), E = () => {
      Hk(x, l.get());
    }, C = Xk({
      getId: w(r),
      getRoot: w(x),
      getFooter: () => y.map((_) => _.get(x)),
      getBody: () => p.get(x),
      getFormWrapper: () => {
        const _ = p.get(x);
        return mt.getCurrent(_).getOr(_);
      },
      toggleFullscreen: E
    }, e.redial, f);
    return {
      dialog: x,
      instanceApi: C
    };
  };
  var Qh = tinymce.util.Tools.resolve("tinymce.util.URI");
  const kY = (t) => {
    const e = (c) => {
      t.getSystem().isConnected() && c(t);
    };
    return {
      block: (c) => {
        if (!Ct(c))
          throw new Error("The urlDialogInstanceAPI.block function should be passed a blocking message of type string as an argument");
        e((a) => {
          U(a, mp, { message: c });
        });
      },
      unblock: () => {
        e((c) => {
          xt(c, gp);
        });
      },
      close: () => {
        e((c) => {
          xt(c, ri);
        });
      },
      sendMessage: (c) => {
        e((a) => {
          a.getSystem().broadcastOn([s_], c);
        });
      }
    };
  }, EY = [
    "insertContent",
    "setContent",
    "execCommand",
    "close",
    "block",
    "unblock"
  ], qk = (t) => Ps(t) && EY.indexOf(t.mceAction) !== -1, AY = (t) => !qk(t) && Ps(t) && At(t, "mceAction"), DY = (t, e, o) => {
    switch (o.mceAction) {
      case "insertContent":
        t.insertContent(o.content);
        break;
      case "setContent":
        t.setContent(o.content);
        break;
      case "execCommand":
        const n = is(o.ui) ? o.ui : !1;
        t.execCommand(o.cmd, n, o.value);
        break;
      case "close":
        e.close();
        break;
      case "block":
        e.block(o.message);
        break;
      case "unblock":
        e.unblock();
        break;
    }
  }, MY = (t, e, o, n) => {
    const s = P("dialog"), r = Ik(t.title, s, n), c = fY(t), a = t.buttons.bind((x) => x.length === 0 ? u.none() : u.some(jk({ buttons: x }, s, n))), i = xY(() => b, Pk(() => v, n.shared.providers, e)), l = {
      ...t.height.fold(() => ({}), (x) => ({
        height: x + "px",
        "max-height": x + "px"
      })),
      ...t.width.fold(() => ({}), (x) => ({
        width: x + "px",
        "max-width": x + "px"
      }))
    }, d = t.width.isNone() && t.height.isNone() ? ["tox-dialog--width-lg"] : [], m = new Qh(t.url, { base_uri: new Qh(window.location.href) }), g = `${m.protocol}://${m.host}${m.port ? ":" + m.port : ""}`, p = Tc(), h = (x, E) => u.some(E), f = [
      So.config({
        channel: `${bu}-${s}`,
        updateState: h,
        initialData: t
      }),
      nt("messages", [
        Vt(() => {
          const x = to(F.fromDom(window), "message", (E) => {
            if (m.isSameOrigin(new Qh(E.raw.origin))) {
              const C = E.raw.data;
              qk(C) ? DY(o, b, C) : AY(C) && t.onMessage(b, C);
            }
          });
          p.set(x);
        }),
        Gn(p.clear)
      ]),
      po.config({
        channels: {
          [s_]: {
            onReceive: (x, E) => {
              Jt(x.element, "iframe").each((C) => {
                const _ = C.dom.contentWindow;
                wo(_) && _.postMessage(E, g);
              });
            }
          }
        }
      })
    ], v = Nk({
      id: s,
      header: r,
      body: c,
      footer: a,
      extraClasses: d,
      extraBehaviours: f,
      extraStyles: l
    }, i, n), b = kY(v);
    return {
      dialog: v,
      instanceApi: b
    };
  }, $Y = (t) => {
    const e = t.shared;
    return { open: (n, s) => {
      const r = () => {
        ae.hide(l), s();
      }, c = St(wu({
        name: "close-alert",
        text: "OK",
        primary: !0,
        buttonType: u.some("primary"),
        align: "end",
        enabled: !0,
        icon: u.none()
      }, "cancel", t)), a = Ek(), i = kk(r, e.providers), l = Re(Kh({
        lazySink: () => e.getSink(),
        header: Ok(a, i),
        body: Ak(n, e.providers),
        footer: u.some(Dk(Mk([], [c.asSpec()]))),
        onEscape: r,
        extraClasses: ["tox-alert-dialog"],
        extraBehaviours: [],
        extraStyles: {},
        dialogEvents: [O(or, r)],
        eventOrder: {}
      }));
      ae.show(l);
      const d = c.get(l);
      Z.focus(d);
    } };
  }, FY = (t) => {
    const e = t.shared;
    return { open: (n, s) => {
      const r = (g) => {
        ae.hide(d), s(g);
      }, c = St(wu({
        name: "yes",
        text: "Yes",
        primary: !0,
        buttonType: u.some("primary"),
        align: "end",
        enabled: !0,
        icon: u.none()
      }, "submit", t)), a = wu({
        name: "no",
        text: "No",
        primary: !1,
        buttonType: u.some("secondary"),
        align: "end",
        enabled: !0,
        icon: u.none()
      }, "cancel", t), i = Ek(), l = kk(() => r(!1), e.providers), d = Re(Kh({
        lazySink: () => e.getSink(),
        header: Ok(i, l),
        body: Ak(n, e.providers),
        footer: u.some(Dk(Mk([], [
          a,
          c.asSpec()
        ]))),
        onEscape: () => r(!1),
        extraClasses: ["tox-confirm-dialog"],
        extraBehaviours: [],
        extraStyles: {},
        dialogEvents: [
          O(or, () => r(!1)),
          O(ci, () => r(!0))
        ],
        eventOrder: {}
      }));
      ae.show(d);
      const m = c.get(d);
      Z.focus(m);
    } };
  }, Jk = (t, e) => On(Yt("data", e, t)), Zk = (t) => oi(t, ".tox-alert-dialog") || oi(t, ".tox-confirm-dialog"), BY = (t, e, o) => e && o ? [] : [Kt.config({
    contextual: {
      lazyContext: () => u.some(Be(F.fromDom(t.getContentAreaContainer()))),
      fadeInClass: "tox-dialog-dock-fadein",
      fadeOutClass: "tox-dialog-dock-fadeout",
      transitionClass: "tox-dialog-dock-transition"
    },
    modes: ["top"],
    lazyViewport: (n) => Gr(t, n.element).map((r) => ({
      bounds: Hc(r),
      optScrollEnv: u.some({
        currentScrollTop: r.element.dom.scrollTop,
        scrollElmTop: Jo(r.element).top
      })
    })).getOrThunk(() => ({
      bounds: Ze(),
      optScrollEnv: u.none()
    }))
  })], IY = (t) => {
    const e = t.editor, o = Ga(e), n = $Y(t.backstages.dialog), s = FY(t.backstages.dialog), r = (h, f, y) => {
      if (!Ln(f)) {
        if (f.inline === "toolbar")
          return l(h, t.backstages.popup.shared.anchors.inlineDialog(), y, f);
        if (f.inline === "bottom")
          return d(h, t.backstages.popup.shared.anchors.inlineBottomDialog(), y, f);
        if (f.inline === "cursor")
          return l(h, t.backstages.popup.shared.anchors.cursor(), y, f);
      }
      return i(h, y);
    }, c = (h, f) => a(h, f), a = (h, f) => {
      const y = (v) => {
        const b = MY(v, {
          closeWindow: () => {
            ae.hide(b.dialog), f(b.instanceApi);
          }
        }, e, t.backstages.dialog);
        return ae.show(b.dialog), b.instanceApi;
      };
      return oc.openUrl(y, h);
    }, i = (h, f) => {
      const y = (v, b, x) => {
        const E = b, _ = OY({
          dataValidator: x,
          initialData: E,
          internalDialog: v
        }, {
          redial: oc.redial,
          closeWindow: () => {
            ae.hide(_.dialog), f(_.instanceApi);
          }
        }, t.backstages.dialog);
        return ae.show(_.dialog), _.instanceApi.setData(E), _.instanceApi;
      };
      return oc.open(y, h);
    }, l = (h, f, y, v) => {
      const b = (x, E, C) => {
        const _ = Jk(E, C), A = Pt(), M = t.backstages.popup.shared.header.isPositionedAtTop(), ot = {
          dataValidator: C,
          initialData: _,
          internalDialog: x
        }, V = () => A.on((N) => {
          Nt.reposition(N), (!o || !M) && Kt.refresh(N);
        }), W = Kk(ot, {
          redial: oc.redial,
          closeWindow: () => {
            A.on(Nt.hide), e.off("ResizeEditor", V), A.clear(), y(W.instanceApi);
          }
        }, t.backstages.popup, v.ariaAttrs, V), K = Re(Nt.sketch({
          lazySink: t.backstages.popup.shared.getSink,
          dom: {
            tag: "div",
            classes: []
          },
          fireDismissalEventInstead: v.persistent ? { event: "doNotDismissYet" } : {},
          ...M ? {} : { fireRepositionEventInstead: {} },
          inlineBehaviours: D([
            nt("window-manager-inline-events", [O(_r(), (N, dt) => {
              xt(W.dialog, or);
            })]),
            ...BY(e, o, M)
          ]),
          isExtraPart: (N, dt) => Zk(dt)
        }));
        A.set(K);
        const vt = () => {
          const N = e.inline ? Nn() : F.fromDom(e.getContainer()), dt = Be(N);
          return u.some(dt);
        };
        return Nt.showWithinBounds(K, No(W.dialog), { anchor: f }, vt), (!o || !M) && (Kt.refresh(K), e.on("ResizeEditor", V)), W.instanceApi.setData(_), z.focusIn(W.dialog), W.instanceApi;
      };
      return oc.open(b, h);
    }, d = (h, f, y, v) => {
      const b = (x, E, C) => {
        const _ = Jk(E, C), A = Pt(), M = t.backstages.popup.shared.header.isPositionedAtTop(), ot = {
          dataValidator: C,
          initialData: _,
          internalDialog: x
        }, V = () => A.on((N) => {
          Nt.reposition(N), Kt.refresh(N);
        }), W = Kk(ot, {
          redial: oc.redial,
          closeWindow: () => {
            A.on(Nt.hide), e.off("ResizeEditor ScrollWindow ElementScroll", V), A.clear(), y(W.instanceApi);
          }
        }, t.backstages.popup, v.ariaAttrs, V), K = Re(Nt.sketch({
          lazySink: t.backstages.popup.shared.getSink,
          dom: {
            tag: "div",
            classes: []
          },
          fireDismissalEventInstead: v.persistent ? { event: "doNotDismissYet" } : {},
          ...M ? {} : { fireRepositionEventInstead: {} },
          inlineBehaviours: D([
            nt("window-manager-inline-events", [O(_r(), (N, dt) => {
              xt(W.dialog, or);
            })]),
            Kt.config({
              contextual: {
                lazyContext: () => u.some(Be(F.fromDom(e.getContentAreaContainer()))),
                fadeInClass: "tox-dialog-dock-fadein",
                fadeOutClass: "tox-dialog-dock-fadeout",
                transitionClass: "tox-dialog-dock-transition"
              },
              modes: [
                "top",
                "bottom"
              ],
              lazyViewport: (N) => Gr(e, N.element).map(($) => ({
                bounds: Hc($),
                optScrollEnv: u.some({
                  currentScrollTop: $.element.dom.scrollTop,
                  scrollElmTop: Jo($.element).top
                })
              })).getOrThunk(() => ({
                bounds: Ze(),
                optScrollEnv: u.none()
              }))
            })
          ]),
          isExtraPart: (N, dt) => Zk(dt)
        }));
        A.set(K);
        const vt = () => t.backstages.popup.shared.getSink().toOptional().bind((N) => {
          const dt = Gr(e, N.element), $ = 15, L = dt.map((G) => Hc(G)).getOr(Ze()), J = Be(F.fromDom(e.getContentAreaContainer())), it = wd(J, L);
          return u.some(pe(it.x, it.y, it.width, it.height - $));
        });
        return Nt.showWithinBounds(K, No(W.dialog), { anchor: f }, vt), Kt.refresh(K), e.on("ResizeEditor ScrollWindow ElementScroll ResizeWindow", V), W.instanceApi.setData(_), z.focusIn(W.dialog), W.instanceApi;
      };
      return oc.open(b, h);
    };
    return {
      open: r,
      openUrl: c,
      alert: (h, f) => {
        n.open(h, f);
      },
      close: (h) => {
        h.close();
      },
      confirm: (h, f) => {
        s.open(h, f);
      }
    };
  }, RY = (t) => {
    qx(t), dV(t), s4(t);
  };
  var PY = () => {
    oD.add("silver", (t) => {
      RY(t);
      let e = () => Ze();
      const {
        dialogs: o,
        popups: n,
        renderUI: s
      } = g9(t, { getPopupSinkBounds: () => e() }), r = () => {
        const i = s();
        return Gr(t, n.getMothership().element).each((d) => {
          e = () => Hc(d);
        }), i;
      };
      mH.register(t, n.backstage.shared);
      const c = IY({
        editor: t,
        backstages: {
          popup: n.backstage,
          dialog: o.backstage
        }
      }), a = () => eP(t, { backstage: n.backstage }, n.getMothership());
      return {
        renderUI: r,
        getWindowManagerImpl: w(c),
        getNotificationManagerImpl: a
      };
    });
  };
  PY();
})();
const t8 = /* @__PURE__ */ YY({
  __proto__: null,
  default: xE
}, [xE]);
export {
  t8 as i
};
//# sourceMappingURL=index-BefdeiXd.js.map
