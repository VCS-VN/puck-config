(function() {
  var Qa = tinymce.util.Tools.resolve("tinymce.ModelManager");
  const Za = (t, e, n) => {
    var o;
    return n(t, e.prototype) ? !0 : ((o = t.constructor) === null || o === void 0 ? void 0 : o.name) === e.name;
  }, ti = (t) => {
    const e = typeof t;
    return t === null ? "null" : e === "object" && Array.isArray(t) ? "array" : e === "object" && Za(t, String, (n, o) => o.isPrototypeOf(n)) ? "string" : e;
  }, Jn = (t) => (e) => ti(e) === t, Qn = (t) => (e) => typeof e === t, qs = (t) => (e) => t === e, Re = Jn("string"), Ks = Jn("object"), Ze = Jn("array"), ei = qs(null), ni = Qn("boolean"), oi = qs(void 0), si = (t) => t == null, ve = (t) => !si(t), It = Qn("function"), Zn = Qn("number"), R = () => {
  }, ri = (t, e) => (...n) => t(e.apply(null, n)), ci = (t, e) => (n) => t(e(n)), T = (t) => () => t, L = (t) => t, li = (t, e) => t === e;
  function J(t, ...e) {
    return (...n) => {
      const o = e.concat(n);
      return t.apply(null, o);
    };
  }
  const to = (t) => (e) => !t(e), ai = (t) => () => {
    throw new Error(t);
  }, Xs = (t) => t(), bt = T(!1), O = T(!0);
  class d {
    constructor(e, n) {
      this.tag = e, this.value = n;
    }
    static some(e) {
      return new d(!0, e);
    }
    static none() {
      return d.singletonNone;
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
      return this.tag ? d.some(e(this.value)) : d.none();
    }
    bind(e) {
      return this.tag ? e(this.value) : d.none();
    }
    exists(e) {
      return this.tag && e(this.value);
    }
    forall(e) {
      return !this.tag || e(this.value);
    }
    filter(e) {
      return !this.tag || e(this.value) ? this : d.none();
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
      return ve(e) ? d.some(e) : d.none();
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
  d.singletonNone = new d(!1);
  const Ys = Array.prototype.slice, ii = Array.prototype.indexOf, ui = Array.prototype.push, di = (t, e) => ii.call(t, e), A = (t, e) => di(t, e) > -1, ct = (t, e) => {
    for (let n = 0, o = t.length; n < o; n++) {
      const s = t[n];
      if (e(s, n))
        return !0;
    }
    return !1;
  }, mt = (t, e) => {
    const n = [];
    for (let o = 0; o < t; o++)
      n.push(e(o));
    return n;
  }, S = (t, e) => {
    const n = t.length, o = new Array(n);
    for (let s = 0; s < n; s++) {
      const r = t[s];
      o[s] = e(r, s);
    }
    return o;
  }, k = (t, e) => {
    for (let n = 0, o = t.length; n < o; n++) {
      const s = t[n];
      e(s, n);
    }
  }, mi = (t, e) => {
    for (let n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      e(o, n);
    }
  }, Js = (t, e) => {
    const n = [], o = [];
    for (let s = 0, r = t.length; s < r; s++) {
      const c = t[s];
      (e(c, s) ? n : o).push(c);
    }
    return {
      pass: n,
      fail: o
    };
  }, N = (t, e) => {
    const n = [];
    for (let o = 0, s = t.length; o < s; o++) {
      const r = t[o];
      e(r, o) && n.push(r);
    }
    return n;
  }, Ct = (t, e, n) => (mi(t, (o, s) => {
    n = e(n, o, s);
  }), n), yt = (t, e, n) => (k(t, (o, s) => {
    n = e(n, o, s);
  }), n), fi = (t, e, n) => {
    for (let o = 0, s = t.length; o < s; o++) {
      const r = t[o];
      if (e(r, o))
        return d.some(r);
      if (n(r, o))
        break;
    }
    return d.none();
  }, St = (t, e) => fi(t, e, bt), eo = (t, e) => {
    for (let n = 0, o = t.length; n < o; n++) {
      const s = t[n];
      if (e(s, n))
        return d.some(n);
    }
    return d.none();
  }, Qs = (t) => {
    const e = [];
    for (let n = 0, o = t.length; n < o; ++n) {
      if (!Ze(t[n]))
        throw new Error("Arr.flatten item " + n + " was not an array, input: " + t);
      ui.apply(e, t[n]);
    }
    return e;
  }, V = (t, e) => Qs(S(t, e)), ft = (t, e) => {
    for (let n = 0, o = t.length; n < o; ++n) {
      const s = t[n];
      if (e(s, n) !== !0)
        return !1;
    }
    return !0;
  }, gi = (t) => {
    const e = Ys.call(t, 0);
    return e.reverse(), e;
  }, no = (t, e) => {
    const n = {};
    for (let o = 0, s = t.length; o < s; o++) {
      const r = t[o];
      n[String(r)] = e(r, o);
    }
    return n;
  }, pi = (t, e) => {
    const n = Ys.call(t, 0);
    return n.sort(e), n;
  }, Zs = (t, e) => e >= 0 && e < t.length ? d.some(t[e]) : d.none(), tn = (t) => Zs(t, 0), tr = (t) => Zs(t, t.length - 1), xt = (t, e) => {
    for (let n = 0; n < t.length; n++) {
      const o = e(t[n], n);
      if (o.isSome())
        return o;
    }
    return d.none();
  }, Te = Object.keys, er = Object.hasOwnProperty, lt = (t, e) => {
    const n = Te(t);
    for (let o = 0, s = n.length; o < s; o++) {
      const r = n[o], c = t[r];
      e(c, r);
    }
  }, nr = (t, e) => hi(t, (n, o) => ({
    k: o,
    v: e(n, o)
  })), hi = (t, e) => {
    const n = {};
    return lt(t, (o, s) => {
      const r = e(o, s);
      n[r.k] = r.v;
    }), n;
  }, wi = (t) => (e, n) => {
    t[n] = e;
  }, bi = (t, e, n, o) => {
    lt(t, (s, r) => {
      (e(s, r) ? n : o)(s, r);
    });
  }, Ci = (t, e) => {
    const n = {};
    return bi(t, e, wi(n), R), n;
  }, or = (t, e) => {
    const n = [];
    return lt(t, (o, s) => {
      n.push(e(o, s));
    }), n;
  }, sr = (t) => or(t, L), yi = (t, e) => oo(t, e) ? d.from(t[e]) : d.none(), oo = (t, e) => er.call(t, e), Si = (t, e) => oo(t, e) && t[e] !== void 0 && t[e] !== null, Ri = (t) => {
    for (const e in t)
      if (er.call(t, e))
        return !1;
    return !0;
  }, vi = typeof window < "u" ? window : Function("return this;")(), Ti = (t, e) => {
    let n = e ?? vi;
    for (let o = 0; o < t.length && n !== void 0 && n !== null; ++o)
      n = n[t[o]];
    return n;
  }, rr = (t, e) => {
    const n = t.split(".");
    return Ti(n, e);
  }, ki = (t, e) => rr(t, e), $i = (t, e) => {
    const n = ki(t, e);
    if (n == null)
      throw new Error(t + " not available on this browser");
    return n;
  }, xi = Object.getPrototypeOf, Oi = (t) => $i("HTMLElement", t), Di = (t) => {
    const e = rr("ownerDocument.defaultView", t);
    return Ks(t) && (Oi(e).prototype.isPrototypeOf(t) || /^HTML\w*Element$/.test(xi(t).constructor.name));
  }, Ei = 8, cr = 9, lr = 11, so = 1, Bi = 3, B = (t) => t.dom.nodeName.toLowerCase(), ar = (t) => t.dom.nodeType, en = (t) => (e) => ar(e) === t, Wi = (t) => ar(t) === Ei || B(t) === "#comment", ir = (t) => Rt(t) && Di(t.dom), Rt = en(so), Ft = en(Bi), ur = en(cr), Pi = en(lr), at = (t) => (e) => Rt(e) && B(e) === t, ro = (t, e, n) => {
    if (Re(n) || ni(n) || Zn(n))
      t.setAttribute(e, n + "");
    else
      throw console.error("Invalid call to Attribute.set. Key ", e, ":: Value ", n, ":: Element ", t), new Error("Attribute value was not simple");
  }, I = (t, e, n) => {
    ro(t.dom, e, n);
  }, ke = (t, e) => {
    const n = t.dom;
    lt(e, (o, s) => {
      ro(n, s, o);
    });
  }, _i = (t, e) => {
    lt(e, (n, o) => {
      n.fold(() => {
        _(t, o);
      }, (s) => {
        ro(t.dom, o, s);
      });
    });
  }, Ht = (t, e) => {
    const n = t.dom.getAttribute(e);
    return n === null ? void 0 : n;
  }, Nt = (t, e) => d.from(Ht(t, e)), _ = (t, e) => {
    t.dom.removeAttribute(e);
  }, dr = (t) => yt(t.dom.attributes, (e, n) => (e[n.name] = n.value, e), {}), Li = (t, e) => {
    const o = (e || document).createElement("div");
    if (o.innerHTML = t, !o.hasChildNodes() || o.childNodes.length > 1) {
      const s = "HTML does not have a single root node";
      throw console.error(s, t), new Error(s);
    }
    return $e(o.childNodes[0]);
  }, Ai = (t, e) => {
    const o = (e || document).createElement(t);
    return $e(o);
  }, Ni = (t, e) => {
    const o = (e || document).createTextNode(t);
    return $e(o);
  }, $e = (t) => {
    if (t == null)
      throw new Error("Node cannot be null or undefined");
    return { dom: t };
  }, b = {
    fromHtml: Li,
    fromTag: Ai,
    fromText: Ni,
    fromDom: $e,
    fromPoint: (t, e, n) => d.from(t.dom.elementFromPoint(e, n)).map($e)
  }, it = (t, e) => {
    const n = t.dom;
    if (n.nodeType !== so)
      return !1;
    {
      const o = n;
      if (o.matches !== void 0)
        return o.matches(e);
      if (o.msMatchesSelector !== void 0)
        return o.msMatchesSelector(e);
      if (o.webkitMatchesSelector !== void 0)
        return o.webkitMatchesSelector(e);
      if (o.mozMatchesSelector !== void 0)
        return o.mozMatchesSelector(e);
      throw new Error("Browser lacks native selectors");
    }
  }, mr = (t) => t.nodeType !== so && t.nodeType !== cr && t.nodeType !== lr || t.childElementCount === 0, Mi = (t, e) => {
    const n = e === void 0 ? document : e.dom;
    return mr(n) ? [] : S(n.querySelectorAll(t), b.fromDom);
  }, fr = (t, e) => {
    const n = e === void 0 ? document : e.dom;
    return mr(n) ? d.none() : d.from(n.querySelector(t)).map(b.fromDom);
  }, D = (t, e) => t.dom === e.dom, co = (t, e) => {
    const n = t.dom, o = e.dom;
    return n === o ? !1 : n.contains(o);
  }, zi = it, nn = (t) => b.fromDom(t.dom.ownerDocument), on = (t) => ur(t) ? t : nn(t), Ii = (t) => b.fromDom(on(t).dom.documentElement), Fi = (t) => b.fromDom(on(t).dom.defaultView), jt = (t) => d.from(t.dom.parentNode).map(b.fromDom), gr = (t) => d.from(t.dom.parentElement).map(b.fromDom), pr = (t, e) => {
    const n = It(e) ? e : bt;
    let o = t.dom;
    const s = [];
    for (; o.parentNode !== null && o.parentNode !== void 0; ) {
      const r = o.parentNode, c = b.fromDom(r);
      if (s.push(c), n(c) === !0)
        break;
      o = r;
    }
    return s;
  }, hr = (t) => d.from(t.dom.previousSibling).map(b.fromDom), sn = (t) => d.from(t.dom.nextSibling).map(b.fromDom), ut = (t) => S(t.dom.childNodes, b.fromDom), rn = (t, e) => {
    const n = t.dom.childNodes;
    return d.from(n[e]).map(b.fromDom);
  }, Hi = (t) => rn(t, 0), cn = (t, e) => {
    jt(t).each((o) => {
      o.dom.insertBefore(e.dom, t.dom);
    });
  }, xe = (t, e) => {
    sn(t).fold(() => {
      jt(t).each((s) => {
        P(s, e);
      });
    }, (o) => {
      cn(o, e);
    });
  }, lo = (t, e) => {
    Hi(t).fold(() => {
      P(t, e);
    }, (o) => {
      t.dom.insertBefore(e.dom, o.dom);
    });
  }, P = (t, e) => {
    t.dom.appendChild(e.dom);
  }, ji = (t, e, n) => {
    rn(t, n).fold(() => {
      P(t, e);
    }, (o) => {
      cn(o, e);
    });
  }, Gi = (t, e) => {
    cn(t, e), P(e, t);
  }, wr = (t, e) => {
    k(e, (n, o) => {
      const s = o === 0 ? t : e[o - 1];
      xe(s, n);
    });
  }, Ot = (t, e) => {
    k(e, (n) => {
      P(t, n);
    });
  }, ao = (t) => {
    t.dom.textContent = "", k(ut(t), (e) => {
      Z(e);
    });
  }, Z = (t) => {
    const e = t.dom;
    e.parentNode !== null && e.parentNode.removeChild(e);
  }, Ui = (t) => {
    const e = ut(t);
    e.length > 0 && wr(t, e), Z(t);
  }, br = (t, e) => b.fromDom(t.dom.cloneNode(e)), Cr = (t) => br(t, !1), ne = (t) => br(t, !0), yr = (t, e) => {
    const n = b.fromTag(e), o = dr(t);
    return ke(n, o), n;
  }, Vi = (t, e) => {
    const n = yr(t, e), o = ut(ne(t));
    return Ot(n, o), n;
  }, qi = (t, e) => {
    const n = yr(t, e);
    xe(t, n);
    const o = ut(t);
    return Ot(n, o), Z(t), n;
  }, Ki = [
    "tfoot",
    "thead",
    "tbody",
    "colgroup"
  ], Xi = (t) => A(Ki, t), Yi = (t, e) => ({
    rows: t,
    columns: e
  }), Ji = (t, e) => ({
    row: t,
    column: e
  }), Sr = (t, e, n) => ({
    element: t,
    rowspan: e,
    colspan: n
  }), Qi = (t, e, n, o) => ({
    element: t,
    rowspan: e,
    colspan: n,
    isNew: o
  }), Zi = (t, e, n, o, s, r) => ({
    element: t,
    rowspan: e,
    colspan: n,
    row: o,
    column: s,
    isLocked: r
  }), io = (t, e, n) => ({
    element: t,
    cells: e,
    section: n
  }), tu = (t, e, n, o) => ({
    element: t,
    cells: e,
    section: n,
    isNew: o
  }), tt = (t, e, n) => ({
    element: t,
    isNew: e,
    isLocked: n
  }), Gt = (t, e, n, o) => ({
    element: t,
    cells: e,
    section: n,
    isNew: o
  }), eu = (t, e, n, o) => ({
    startRow: t,
    startCol: e,
    finishRow: n,
    finishCol: o
  }), nu = (t, e, n) => ({
    element: t,
    colspan: e,
    column: n
  }), ou = (t, e) => ({
    element: t,
    columns: e
  }), su = (t) => Pi(t) && ve(t.dom.host), Rr = It(Element.prototype.attachShadow) && It(Node.prototype.getRootNode), ru = T(Rr), cu = Rr ? (t) => b.fromDom(t.dom.getRootNode()) : on, lu = (t) => {
    const e = cu(t);
    return su(e) ? d.some(e) : d.none();
  }, au = (t) => b.fromDom(t.dom.host), iu = (t) => {
    if (ru() && ve(t.target)) {
      const e = b.fromDom(t.target);
      if (Rt(e) && uu(e) && t.composed && t.composedPath) {
        const n = t.composedPath();
        if (n)
          return tn(n);
      }
    }
    return d.from(t.target);
  }, uu = (t) => ve(t.dom.shadowRoot), Dt = (t) => {
    const e = Ft(t) ? t.dom.parentNode : t.dom;
    if (e == null || e.ownerDocument === null)
      return !1;
    const n = e.ownerDocument;
    return lu(b.fromDom(e)).fold(() => n.body.contains(e), ci(Dt, au));
  }, du = () => vr(b.fromDom(document)), vr = (t) => {
    const e = t.dom.body;
    if (e == null)
      throw new Error("Body is not available yet");
    return b.fromDom(e);
  }, mu = (t, e, n) => N(pr(t, n), e), fu = (t, e) => N(ut(t), e), Tr = (t, e) => {
    let n = [];
    return k(ut(t), (o) => {
      e(o) && (n = n.concat([o])), n = n.concat(Tr(o, e));
    }), n;
  }, Oe = (t, e, n) => mu(t, (o) => it(o, e), n), ln = (t, e) => fu(t, (n) => it(n, e)), vt = (t, e) => Mi(e, t);
  var kr = (t, e, n, o, s) => t(n, o) ? d.some(n) : It(s) && s(n) ? d.none() : e(n, o, s);
  const De = (t, e, n) => {
    let o = t.dom;
    const s = It(n) ? n : bt;
    for (; o.parentNode; ) {
      o = o.parentNode;
      const r = b.fromDom(o);
      if (e(r))
        return d.some(r);
      if (s(r))
        break;
    }
    return d.none();
  }, uo = (t, e, n) => kr((s, r) => r(s), De, t, e, n), gu = (t, e) => {
    const n = (s) => e(b.fromDom(s));
    return St(t.dom.childNodes, n).map(b.fromDom);
  }, pu = (t, e) => {
    const n = (o) => {
      for (let s = 0; s < o.childNodes.length; s++) {
        const r = b.fromDom(o.childNodes[s]);
        if (e(r))
          return d.some(r);
        const c = n(o.childNodes[s]);
        if (c.isSome())
          return c;
      }
      return d.none();
    };
    return n(t.dom);
  }, Ut = (t, e, n) => De(t, (o) => it(o, e), n), mo = (t, e) => gu(t, (n) => it(n, e)), Ee = (t, e) => fr(e, t), H = (t, e, n) => kr((s, r) => it(s, r), Ut, t, e, n), fo = (t, e, n = li) => t.exists((o) => n(o, e)), $r = (t) => {
    const e = [], n = (o) => {
      e.push(o);
    };
    for (let o = 0; o < t.length; o++)
      t[o].each(n);
    return e;
  }, hu = (t, e) => t != null ? e(t) : d.none(), go = (t, e) => t ? d.some(e) : d.none(), xr = (t, e, n) => e === "" || t.length >= e.length && t.substr(n, n + e.length) === e, ot = (t, e, n = 0, o) => {
    const s = t.indexOf(e, n);
    return s !== -1 ? oi(o) ? !0 : s + e.length <= o : !1;
  }, Or = (t, e) => xr(t, e, 0), an = (t, e) => xr(t, e, t.length - e.length), wu = ((t) => (e) => e.replace(t, ""))(/^\s+|\s+$/g), bu = (t) => t.length > 0, Cu = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? d.none() : d.some(e);
  }, oe = (t) => t.style !== void 0 && It(t.style.getPropertyValue), Dr = (t, e, n) => {
    if (!Re(n))
      throw console.error("Invalid call to CSS.set. Property ", e, ":: Value ", n, ":: Element ", t), new Error("CSS value must be a string: " + n);
    oe(t) && t.style.setProperty(e, n);
  }, yu = (t, e) => {
    oe(t) && t.style.removeProperty(e);
  }, j = (t, e, n) => {
    const o = t.dom;
    Dr(o, e, n);
  }, Be = (t, e) => {
    const n = t.dom;
    lt(e, (o, s) => {
      Dr(n, s, o);
    });
  }, Vt = (t, e) => {
    const n = t.dom, s = window.getComputedStyle(n).getPropertyValue(e);
    return s === "" && !Dt(t) ? Er(n, e) : s;
  }, Er = (t, e) => oe(t) ? t.style.getPropertyValue(e) : "", po = (t, e) => {
    const n = t.dom, o = Er(n, e);
    return d.from(o).filter((s) => s.length > 0);
  }, Mt = (t, e) => {
    const n = t.dom;
    yu(n, e), fo(Nt(t, "style").map(wu), "") && _(t, "style");
  }, Su = (t, e) => {
    const n = t.dom, o = e.dom;
    oe(n) && oe(o) && (o.style.cssText = n.style.cssText);
  }, Et = (t, e, n = 0) => Nt(t, e).map((o) => parseInt(o, 10)).getOr(n), ho = (t, e) => Et(t, e, 1), wo = (t) => at("col")(t) ? Et(t, "span", 1) > 1 : ho(t, "colspan") > 1, Br = (t) => ho(t, "rowspan") > 1, un = (t, e) => parseInt(Vt(t, e), 10), We = T(10), bo = T(10), dn = (t, e) => Co(t, e, O), Co = (t, e, n) => V(ut(t), (o) => it(o, e) ? n(o) ? [o] : [] : Co(o, e, n)), Ru = (t, e, n = bt) => {
    if (n(e))
      return d.none();
    if (A(t, B(e)))
      return d.some(e);
    const o = (s) => it(s, "table") || n(s);
    return Ut(e, t.join(","), o);
  }, Wr = (t, e) => Ru([
    "td",
    "th"
  ], t, e), se = (t) => dn(t, "th,td"), yo = (t) => it(t, "colgroup") ? ln(t, "col") : V(_r(t), (e) => ln(e, "col")), st = (t, e) => H(t, "table", e), Pr = (t) => dn(t, "tr"), _r = (t) => st(t).fold(T([]), (e) => ln(e, "colgroup")), Lr = (t, e) => S(t, (n) => {
    if (B(n) === "colgroup") {
      const o = S(yo(n), (s) => {
        const r = Et(s, "span", 1);
        return Sr(s, 1, r);
      });
      return io(n, o, "colgroup");
    } else {
      const o = S(se(n), (s) => {
        const r = Et(s, "rowspan", 1), c = Et(s, "colspan", 1);
        return Sr(s, r, c);
      });
      return io(n, o, e(n));
    }
  }), vu = (t) => jt(t).map((e) => {
    const n = B(e);
    return Xi(n) ? n : "tbody";
  }).getOr("tbody"), Ar = (t) => {
    const e = Pr(t), o = [
      ..._r(t),
      ...e
    ];
    return Lr(o, vu);
  }, Tu = (t, e) => Lr(t, () => e), Pe = (t) => {
    let e = !1, n;
    return (...o) => (e || (e = !0, n = t.apply(null, o)), n);
  }, ku = (t, e, n, o) => {
    const s = t.isiOS() && /ipad/i.test(n) === !0, r = t.isiOS() && !s, c = t.isiOS() || t.isAndroid(), l = c || o("(pointer:coarse)"), a = s || !r && c && o("(min-device-width:768px)"), i = r || c && !a, u = e.isSafari() && t.isiOS() && /safari/i.test(n) === !1, g = !i && !a && !u;
    return {
      isiPad: T(s),
      isiPhone: T(r),
      isTablet: T(a),
      isPhone: T(i),
      isTouch: T(l),
      isAndroid: t.isAndroid,
      isiOS: t.isiOS,
      isWebView: T(u),
      isDesktop: T(g)
    };
  }, $u = (t, e) => {
    for (let n = 0; n < t.length; n++) {
      const o = t[n];
      if (o.test(e))
        return o;
    }
  }, xu = (t, e) => {
    const n = $u(t, e);
    if (!n)
      return {
        major: 0,
        minor: 0
      };
    const o = (s) => Number(e.replace(n, "$" + s));
    return So(o(1), o(2));
  }, Ou = (t, e) => {
    const n = String(e).toLowerCase();
    return t.length === 0 ? Nr() : xu(t, n);
  }, Nr = () => So(0, 0), So = (t, e) => ({
    major: t,
    minor: e
  }), _e = {
    nu: So,
    detect: Ou,
    unknown: Nr
  }, Du = (t, e) => xt(e.brands, (n) => {
    const o = n.brand.toLowerCase();
    return St(t, (s) => {
      var r;
      return o === ((r = s.brand) === null || r === void 0 ? void 0 : r.toLowerCase());
    }).map((s) => ({
      current: s.name,
      version: _e.nu(parseInt(n.version, 10), 0)
    }));
  }), Mr = (t, e) => {
    const n = String(e).toLowerCase();
    return St(t, (o) => o.search(n));
  }, Eu = (t, e) => Mr(t, e).map((n) => {
    const o = _e.detect(n.versionRegexes, e);
    return {
      current: n.name,
      version: o
    };
  }), Bu = (t, e) => Mr(t, e).map((n) => {
    const o = _e.detect(n.versionRegexes, e);
    return {
      current: n.name,
      version: o
    };
  }), Ro = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, Bt = (t) => (e) => ot(e, t), Wu = [
    {
      name: "Edge",
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: (t) => ot(t, "edge/") && ot(t, "chrome") && ot(t, "safari") && ot(t, "applewebkit")
    },
    {
      name: "Chromium",
      brand: "Chromium",
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        Ro
      ],
      search: (t) => ot(t, "chrome") && !ot(t, "chromeframe")
    },
    {
      name: "IE",
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: (t) => ot(t, "msie") || ot(t, "trident")
    },
    {
      name: "Opera",
      versionRegexes: [
        Ro,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: Bt("opera")
    },
    {
      name: "Firefox",
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: Bt("firefox")
    },
    {
      name: "Safari",
      versionRegexes: [
        Ro,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: (t) => (ot(t, "safari") || ot(t, "mobile/")) && ot(t, "applewebkit")
    }
  ], Pu = [
    {
      name: "Windows",
      search: Bt("win"),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: "iOS",
      search: (t) => ot(t, "iphone") || ot(t, "ipad"),
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: "Android",
      search: Bt("android"),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: "macOS",
      search: Bt("mac os x"),
      versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: "Linux",
      search: Bt("linux"),
      versionRegexes: []
    },
    {
      name: "Solaris",
      search: Bt("sunos"),
      versionRegexes: []
    },
    {
      name: "FreeBSD",
      search: Bt("freebsd"),
      versionRegexes: []
    },
    {
      name: "ChromeOS",
      search: Bt("cros"),
      versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
    }
  ], zr = {
    browsers: T(Wu),
    oses: T(Pu)
  }, _u = "Edge", Lu = "Chromium", Au = "IE", Nu = "Opera", Mu = "Firefox", zu = "Safari", Iu = () => Ir({
    current: void 0,
    version: _e.unknown()
  }), Ir = (t) => {
    const e = t.current, n = t.version, o = (s) => () => e === s;
    return {
      current: e,
      version: n,
      isEdge: o(_u),
      isChromium: o(Lu),
      isIE: o(Au),
      isOpera: o(Nu),
      isFirefox: o(Mu),
      isSafari: o(zu)
    };
  }, Fr = {
    unknown: Iu,
    nu: Ir
  }, Fu = "Windows", Hu = "iOS", ju = "Android", Gu = "Linux", Uu = "macOS", Vu = "Solaris", qu = "FreeBSD", Ku = "ChromeOS", Xu = () => Hr({
    current: void 0,
    version: _e.unknown()
  }), Hr = (t) => {
    const e = t.current, n = t.version, o = (s) => () => e === s;
    return {
      current: e,
      version: n,
      isWindows: o(Fu),
      isiOS: o(Hu),
      isAndroid: o(ju),
      isMacOS: o(Uu),
      isLinux: o(Gu),
      isSolaris: o(Vu),
      isFreeBSD: o(qu),
      isChromeOS: o(Ku)
    };
  }, jr = {
    unknown: Xu,
    nu: Hr
  }, Yu = { detect: (t, e, n) => {
    const o = zr.browsers(), s = zr.oses(), r = e.bind((a) => Du(o, a)).orThunk(() => Eu(o, t)).fold(Fr.unknown, Fr.nu), c = Bu(s, t).fold(jr.unknown, jr.nu), l = ku(c, r, t, n);
    return {
      browser: r,
      os: c,
      deviceType: l
    };
  } }, Ju = (t) => window.matchMedia(t).matches;
  let Qu = Pe(() => Yu.detect(navigator.userAgent, d.from(navigator.userAgentData), Ju));
  const Gr = () => Qu(), Ur = (t, e) => {
    const n = (l, a) => {
      if (!Zn(a) && !a.match(/^[0-9]+$/))
        throw new Error(t + ".set accepts only positive integer values. Value was " + a);
      const i = l.dom;
      oe(i) && (i.style[t] = a + "px");
    }, o = (l) => {
      const a = e(l);
      if (a <= 0 || a === null) {
        const i = Vt(l, t);
        return parseFloat(i) || 0;
      }
      return a;
    }, s = o, r = (l, a) => yt(a, (i, u) => {
      const g = Vt(l, u), h = g === void 0 ? 0 : parseInt(g, 10);
      return isNaN(h) ? i : i + h;
    }, 0);
    return {
      set: n,
      get: o,
      getOuter: s,
      aggregate: r,
      max: (l, a, i) => {
        const u = r(l, i);
        return a > u ? a - u : 0;
      }
    };
  }, Zu = (t, e) => Cu(t).getOr(e), re = (t, e, n) => Zu(Vt(t, e), n), td = (t, e, n, o) => {
    const s = re(t, `padding-${n}`, 0), r = re(t, `padding-${o}`, 0), c = re(t, `border-${n}-width`, 0), l = re(t, `border-${o}-width`, 0);
    return e - s - r - c - l;
  }, ed = (t, e) => {
    const n = t.dom, o = n.getBoundingClientRect().width || n.offsetWidth;
    return td(t, o, "left", "right");
  }, nd = (t) => re(t, "height", t.dom.offsetHeight), od = (t) => re(t, "width", t.dom.offsetWidth), sd = (t) => ed(t), Vr = Ur("width", (t) => t.dom.offsetWidth), Wt = (t) => Vr.get(t), vo = (t) => Vr.getOuter(t), To = sd, rd = od, ko = (t, e, n) => {
    const o = t.cells, s = o.slice(0, e), r = o.slice(e), c = s.concat(n).concat(r);
    return Kr(t, c);
  }, qr = (t, e, n) => ko(t, e, [n]), Le = (t, e, n) => {
    const o = t.cells;
    o[e] = n;
  }, Kr = (t, e) => Gt(t.element, e, t.section, t.isNew), cd = (t, e) => {
    const n = t.cells, o = S(n, e);
    return Gt(t.element, o, t.section, t.isNew);
  }, gt = (t, e) => t.cells[e], rt = (t, e) => gt(t, e).element, pt = (t) => t.cells.length, G = (t) => {
    const e = Js(t, (n) => n.section === "colgroup");
    return {
      rows: e.fail,
      cols: e.pass
    };
  }, Xr = (t, e, n) => {
    const o = S(t.cells, n);
    return Gt(e(t.element), o, t.section, !0);
  }, mn = "data-snooker-locked-cols", ld = (t) => Nt(t, mn).bind((e) => d.from(e.match(/\d+/g))).map((e) => no(e, O)), qt = (t) => {
    const e = yt(G(t).rows, (o, s) => (k(s.cells, (r, c) => {
      r.isLocked && (o[c] = !0);
    }), o), {}), n = or(e, (o, s) => parseInt(s, 10));
    return pi(n);
  }, $o = (t, e) => t + "," + e, ad = (t, e, n) => d.from(t.access[$o(e, n)]), id = (t, e, n) => {
    const o = Yr(t, (s) => n(e, s.element));
    return o.length > 0 ? d.some(o[0]) : d.none();
  }, Yr = (t, e) => {
    const n = V(t.all, (o) => o.cells);
    return N(n, e);
  }, ud = (t) => {
    const e = {};
    let n = 0;
    return k(t.cells, (o) => {
      const s = o.colspan;
      mt(s, (r) => {
        const c = n + r;
        e[c] = nu(o.element, s, c);
      }), n += s;
    }), e;
  }, Jr = (t) => {
    const e = {}, n = [], s = tn(t).map((p) => p.element).bind(st).bind(ld).getOr({});
    let r = 0, c = 0, l = 0;
    const {
      pass: a,
      fail: i
    } = Js(t, (p) => p.section === "colgroup");
    k(i, (p) => {
      const f = [];
      k(p.cells, (w) => {
        let m = 0;
        for (; e[$o(l, m)] !== void 0; )
          m++;
        const C = Si(s, m.toString()), y = Zi(w.element, w.rowspan, w.colspan, l, m, C);
        for (let v = 0; v < w.colspan; v++)
          for (let E = 0; E < w.rowspan; E++) {
            const z = l + E, W = m + v, nt = $o(z, W);
            e[nt] = y, c = Math.max(c, W + 1);
          }
        f.push(y);
      }), r++, n.push(io(p.element, f, p.section)), l++;
    });
    const { columns: u, colgroups: g } = tr(a).map((p) => {
      const f = ud(p);
      return {
        colgroups: [ou(p.element, sr(f))],
        columns: f
      };
    }).getOrThunk(() => ({
      colgroups: [],
      columns: {}
    }));
    return {
      grid: Yi(r, c),
      access: e,
      all: n,
      columns: u,
      colgroups: g
    };
  }, $ = {
    fromTable: (t) => {
      const e = Ar(t);
      return Jr(e);
    },
    generate: Jr,
    getAt: ad,
    findItem: id,
    filterItems: Yr,
    justCells: (t) => V(t.all, (e) => e.cells),
    justColumns: (t) => sr(t.columns),
    hasColumns: (t) => Te(t.columns).length > 0,
    getColumnAt: (t, e) => d.from(t.columns[e])
  }, xo = (t, e = O) => {
    const n = t.grid, o = mt(n.columns, L), s = mt(n.rows, L);
    return S(o, (r) => Qr(() => V(s, (i) => $.getAt(t, i, r).filter((u) => u.column === r).toArray()), (i) => i.colspan === 1 && e(i.element), () => $.getAt(t, 0, r)));
  }, Qr = (t, e, n) => {
    const o = t();
    return St(o, e).orThunk(() => d.from(o[0]).orThunk(n)).map((c) => c.element);
  }, Zr = (t) => {
    const e = t.grid, n = mt(e.rows, L), o = mt(e.columns, L);
    return S(n, (s) => Qr(() => V(o, (a) => $.getAt(t, s, a).filter((i) => i.row === s).fold(T([]), (i) => [i])), (a) => a.rowspan === 1, () => $.getAt(t, s, 0)));
  }, dd = (t, e) => {
    if (e < 0 || e >= t.length - 1)
      return d.none();
    const n = t[e].fold(() => {
      const s = gi(t.slice(0, e));
      return xt(s, (r, c) => r.map((l) => ({
        value: l,
        delta: c + 1
      })));
    }, (s) => d.some({
      value: s,
      delta: 0
    })), o = t[e + 1].fold(() => {
      const s = t.slice(e + 1);
      return xt(s, (r, c) => r.map((l) => ({
        value: l,
        delta: c + 1
      })));
    }, (s) => d.some({
      value: s,
      delta: 1
    }));
    return n.bind((s) => o.map((r) => {
      const c = r.delta + s.delta;
      return Math.abs(r.value - s.value) / c;
    }));
  }, tc = (t, e) => (n) => md(n) === "rtl" ? e : t, md = (t) => Vt(t, "direction") === "rtl" ? "rtl" : "ltr", ec = Ur("height", (t) => {
    const e = t.dom;
    return Dt(t) ? e.getBoundingClientRect().height : e.offsetHeight;
  }), Oo = (t) => ec.get(t), nc = (t) => ec.getOuter(t), fd = nd, oc = (t, e) => ({
    left: t,
    top: e,
    translate: (o, s) => oc(t + o, e + s)
  }), Pt = oc, gd = (t) => {
    const e = t.getBoundingClientRect();
    return Pt(e.left, e.top);
  }, fn = (t, e) => t !== void 0 ? t : e !== void 0 ? e : 0, Ae = (t) => {
    const e = t.dom.ownerDocument, n = e.body, o = e.defaultView, s = e.documentElement;
    if (n === t.dom)
      return Pt(n.offsetLeft, n.offsetTop);
    const r = fn(o == null ? void 0 : o.pageYOffset, s.scrollTop), c = fn(o == null ? void 0 : o.pageXOffset, s.scrollLeft), l = fn(s.clientTop, n.clientTop), a = fn(s.clientLeft, n.clientLeft);
    return pd(t).translate(c - a, r - l);
  }, pd = (t) => {
    const e = t.dom, o = e.ownerDocument.body;
    return o === e ? Pt(o.offsetLeft, o.offsetTop) : Dt(t) ? gd(e) : Pt(0, 0);
  }, sc = (t, e) => ({
    row: t,
    y: e
  }), rc = (t, e) => ({
    col: t,
    x: e
  }), cc = (t) => Ae(t).left + vo(t), lc = (t) => Ae(t).left, ac = (t, e) => rc(t, lc(e)), ic = (t, e) => rc(t, cc(e)), Do = (t) => Ae(t).top, hd = (t, e) => sc(t, Do(e)), wd = (t, e) => sc(t, Do(e) + nc(e)), Eo = (t, e, n) => {
    if (n.length === 0)
      return [];
    const o = S(n.slice(1), (r, c) => r.map((l) => t(c, l))), s = n[n.length - 1].map((r) => e(n.length - 1, r));
    return o.concat([s]);
  }, bd = (t) => -t, Bo = {
    delta: L,
    positions: (t) => Eo(hd, wd, t),
    edge: Do
  }, Wo = tc({
    delta: L,
    edge: lc,
    positions: (t) => Eo(ac, ic, t)
  }, {
    delta: bd,
    edge: cc,
    positions: (t) => Eo(ic, ac, t)
  }), gn = {
    delta: (t, e) => Wo(e).delta(t, e),
    positions: (t, e) => Wo(e).positions(t, e),
    edge: (t) => Wo(t).edge(t)
  }, Cd = {
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
  }, yd = (() => {
    const t = "[0-9]+", n = "[eE]" + ("[+-]?" + t), o = "\\.", s = (l) => `(?:${l})?`, c = `[+-]?(?:${[
      "Infinity",
      t + o + s(t) + s(n),
      o + t + s(n),
      t + s(n)
    ].join("|")})`;
    return new RegExp(`^(${c})(.*)$`);
  })(), Sd = (t, e) => ct(e, (n) => ct(Cd[n], (o) => t === o)), Rd = (t, e) => d.from(yd.exec(t)).bind((o) => {
    const s = Number(o[1]), r = o[2];
    return Sd(r, e) ? d.some({
      value: s,
      unit: r
    }) : d.none();
  }), uc = /(\d+(\.\d+)?)%/, vd = /(\d+(\.\d+)?)px|em/, Td = at("col"), dc = (t, e, n) => {
    const o = gr(t).getOrThunk(() => vr(nn(t)));
    return e(t) / n(o) * 100;
  }, mc = (t, e) => {
    j(t, "width", e + "px");
  }, fc = (t, e) => {
    j(t, "width", e + "%");
  }, pn = (t, e) => {
    j(t, "height", e + "px");
  }, kd = (t) => fd(t) + "px", $d = (t, e, n, o) => {
    const s = st(t).map((r) => {
      const c = n(r);
      return Math.floor(e / 100 * c);
    }).getOr(e);
    return o(t, s), s;
  }, xd = (t, e, n, o) => {
    const s = parseFloat(t);
    return an(t, "%") && B(e) !== "table" ? $d(e, s, n, o) : s;
  }, Od = (t) => {
    const e = kd(t);
    return e ? xd(e, t, Oo, pn) : Oo(t);
  }, Dd = (t, e, n) => {
    const o = n(t), s = ho(t, e);
    return o / s;
  }, gc = (t, e) => po(t, e).orThunk(() => Nt(t, e).map((n) => n + "px")), ce = (t) => gc(t, "width"), Ed = (t) => gc(t, "height"), Bd = (t) => dc(t, Wt, To), pc = (t) => Td(t) ? Wt(t) : rd(t), hc = (t) => Dd(t, "rowspan", Od), Wd = (t) => ce(t).bind((n) => Rd(n, [
    "fixed",
    "relative",
    "empty"
  ])), wc = (t, e, n) => {
    j(t, "width", e + n);
  }, Pd = (t) => Wt(t) + "px", bc = (t) => dc(t, Wt, To) + "%", _d = (t) => ce(t).exists((e) => uc.test(e)), Ld = (t) => ce(t).exists((e) => vd.test(e)), Ad = (t) => ce(t).isNone(), Nd = T(uc), Md = at("col"), zd = (t) => ce(t).getOrThunk(() => pc(t) + "px"), Id = (t) => Ed(t).getOrThunk(() => hc(t) + "px"), Fd = (t) => S($.justColumns(t), (e) => d.from(e.element)), Hd = (t) => {
    const e = Gr().browser, n = e.isChromium() || e.isFirefox();
    return Md(t) ? n : !0;
  }, Po = (t, e, n, o, s, r) => t.filter(o).fold(() => r(dd(n, e)), (c) => s(c)), _o = (t, e, n, o) => {
    const s = xo(t), r = $.hasColumns(t) ? Fd(t) : s, c = [d.some(gn.edge(e))].concat(S(gn.positions(s, e), (a) => a.map((i) => i.x))), l = to(wo);
    return S(r, (a, i) => Po(a, i, c, l, (u) => {
      if (Hd(u))
        return n(u);
      {
        const g = hu(s[i], L);
        return Po(g, i, c, l, (h) => o(d.some(Wt(h))), o);
      }
    }, o));
  }, Cc = (t) => t.map((e) => e + "px").getOr(""), jd = (t, e) => _o(t, e, zd, Cc), Gd = (t, e, n) => _o(t, e, Bd, (o) => o.fold(() => n.minCellWidth(), (s) => s / n.pixelWidth() * 100)), Lo = (t, e, n) => _o(t, e, pc, (o) => o.getOrThunk(n.minCellWidth)), yc = (t, e, n, o, s) => {
    const r = Zr(t), c = [d.some(n.edge(e))].concat(S(n.positions(r, e), (l) => l.map((a) => a.y)));
    return S(r, (l, a) => Po(l, a, c, to(Br), o, s));
  }, Ud = (t, e, n) => yc(t, e, n, hc, (o) => o.getOrThunk(bo)), Vd = (t, e, n) => yc(t, e, n, Id, Cc), hn = (t, e) => () => Dt(t) ? e(t) : parseFloat(po(t, "width").getOr("0")), Sc = (t) => {
    const e = hn(t, Wt), n = T(0);
    return {
      width: e,
      pixelWidth: e,
      getWidths: (s, r) => Lo(s, t, r),
      getCellDelta: n,
      singleColumnWidth: T([0]),
      minCellWidth: n,
      setElementWidth: R,
      adjustTableWidth: R,
      isRelative: !0,
      label: "none"
    };
  }, Rc = (t) => {
    const e = hn(t, (a) => parseFloat(bc(a))), n = hn(t, Wt);
    return {
      width: e,
      pixelWidth: n,
      getWidths: (a, i) => Gd(a, t, i),
      getCellDelta: (a) => a / n() * 100,
      singleColumnWidth: (a, i) => [100 - a],
      minCellWidth: () => We() / n() * 100,
      setElementWidth: fc,
      adjustTableWidth: (a) => {
        const i = e(), u = a / 100 * i, g = i + u;
        fc(t, g);
      },
      isRelative: !0,
      label: "percent"
    };
  }, vc = (t) => {
    const e = hn(t, Wt);
    return {
      width: e,
      pixelWidth: e,
      getWidths: (c, l) => Lo(c, t, l),
      getCellDelta: L,
      singleColumnWidth: (c, l) => [Math.max(We(), c + l) - c],
      minCellWidth: We,
      setElementWidth: mc,
      adjustTableWidth: (c) => {
        const l = e() + c;
        mc(t, l);
      },
      isRelative: !1,
      label: "pixel"
    };
  }, qd = (t, e) => Nd().exec(e) !== null ? Rc(t) : vc(t), le = {
    getTableSize: (t) => ce(t).fold(() => Sc(t), (n) => qd(t, n)),
    pixelSize: vc,
    percentageSize: Rc,
    noneSize: Sc
  }, Kd = (t, e, n, o, s, r) => ({
    minRow: t,
    minCol: e,
    maxRow: n,
    maxCol: o,
    allCells: s,
    selectedCells: r
  }), Xd = (t, e) => {
    const n = t.grid.columns;
    let s = t.grid.rows, r = n, c = 0, l = 0;
    const a = [], i = [];
    return lt(t.access, (u) => {
      if (a.push(u), e(u)) {
        i.push(u);
        const g = u.row, h = g + u.rowspan - 1, p = u.column, f = p + u.colspan - 1;
        g < s ? s = g : h > c && (c = h), p < r ? r = p : f > l && (l = f);
      }
    }), Kd(s, r, c, l, a, i);
  }, Yd = (t, e, n) => {
    const o = t[n].element, s = b.fromTag("td");
    P(s, b.fromTag("br")), (e ? P : lo)(o, s);
  }, Jd = (t, e, n, o) => {
    const s = N(t, (l) => l.section !== "colgroup"), r = e.grid.columns, c = e.grid.rows;
    for (let l = 0; l < c; l++) {
      let a = !1;
      for (let i = 0; i < r; i++)
        l < n.minRow || l > n.maxRow || i < n.minCol || i > n.maxCol || ($.getAt(e, l, i).filter(o).isNone() ? Yd(s, a, l) : a = !0);
    }
  }, Qd = (t, e, n, o) => {
    lt(n.columns, (c) => {
      (c.column < e.minCol || c.column > e.maxCol) && Z(c.element);
    });
    const s = N(dn(t, "tr"), (c) => c.dom.childElementCount === 0);
    k(s, Z), (e.minCol === e.maxCol || e.minRow === e.maxRow) && k(dn(t, "th,td"), (c) => {
      _(c, "rowspan"), _(c, "colspan");
    }), _(t, mn), _(t, "data-snooker-col-series"), le.getTableSize(t).adjustTableWidth(o);
  }, Zd = (t, e, n, o) => {
    if (o.minCol === 0 && e.grid.columns === o.maxCol + 1)
      return 0;
    const s = Lo(e, t, n), r = yt(s, (i, u) => i + u, 0), a = yt(s.slice(o.minCol, o.maxCol + 1), (i, u) => i + u, 0) / r * n.pixelWidth() - n.pixelWidth();
    return n.getCellDelta(a);
  }, tm = (t, e) => {
    const n = (h) => it(h.element, e), o = ne(t), s = Ar(o), r = le.getTableSize(t), c = $.generate(s), l = Xd(c, n), a = "th:not(" + e + "),td:not(" + e + ")", i = Co(o, "th,td", (h) => it(h, a));
    k(i, Z), Jd(s, c, l, n);
    const u = $.fromTable(t), g = Zd(t, u, r, l);
    return Qd(o, l, c, g), o;
  }, em = " ", Ao = ((t, e) => {
    const n = (r) => {
      if (!t(r))
        throw new Error("Can only get " + e + " value of a " + e + " node");
      return o(r).getOr("");
    }, o = (r) => t(r) ? d.from(r.dom.nodeValue) : d.none();
    return {
      get: n,
      getOption: o,
      set: (r, c) => {
        if (!t(r))
          throw new Error("Can only set raw " + e + " value of a " + e + " node");
        r.dom.nodeValue = c;
      }
    };
  })(Ft, "text"), No = (t) => Ao.get(t), Tc = (t) => Ao.getOption(t), nm = (t, e) => Ao.set(t, e), zt = (t) => B(t) === "img" ? 1 : Tc(t).fold(() => ut(t).length, (e) => e.length), om = (t) => Tc(t).filter((e) => e.trim().length !== 0 || e.indexOf(em) > -1).isSome(), sm = (t) => ir(t) && Ht(t, "contenteditable") === "false", rm = [
    "img",
    "br"
  ], kc = (t) => om(t) || A(rm, B(t)) || sm(t), $c = (t) => pu(t, kc), xc = (t) => cm(t, kc), cm = (t, e) => {
    const n = (o) => {
      const s = ut(o);
      for (let r = s.length - 1; r >= 0; r--) {
        const c = s[r];
        if (e(c))
          return d.some(c);
        const l = n(c);
        if (l.isSome())
          return l;
      }
      return d.none();
    };
    return n(t);
  }, lm = {
    scope: [
      "row",
      "col"
    ]
  }, Mo = (t) => () => {
    const e = b.fromTag("td", t.dom);
    return P(e, b.fromTag("br", t.dom)), e;
  }, zo = (t) => () => b.fromTag("col", t.dom), Oc = (t) => () => b.fromTag("colgroup", t.dom), Dc = (t) => () => b.fromTag("tr", t.dom), am = (t, e, n) => {
    const o = Vi(t, e);
    return lt(n, (s, r) => {
      s === null ? _(o, r) : I(o, r, s);
    }), o;
  }, im = (t) => t, um = (t, e, n) => $c(t).map((s) => {
    const r = n.join(","), c = Oe(s, r, (l) => D(l, t));
    return Ct(c, (l, a) => {
      const i = Cr(a);
      return P(l, i), i;
    }, e);
  }).getOr(e), dm = (t, e) => {
    lt(lm, (n, o) => Nt(t, o).filter((s) => A(n, s)).each((s) => I(e, o, s)));
  }, Io = (t, e, n) => {
    const o = (c, l) => {
      Su(c.element, l), Mt(l, "height"), c.colspan !== 1 && Mt(l, "width");
    }, s = (c) => {
      const l = b.fromTag(B(c.element), e.dom), a = n.getOr([
        "strong",
        "em",
        "b",
        "i",
        "span",
        "font",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "div"
      ]), i = a.length > 0 ? um(c.element, l, a) : l;
      return P(i, b.fromTag("br")), o(c, l), dm(c.element, l), t(c.element, l), l;
    };
    return {
      col: (c) => {
        const l = b.fromTag(B(c.element), e.dom);
        return o(c, l), t(c.element, l), l;
      },
      colgroup: Oc(e),
      row: Dc(e),
      cell: s,
      replace: am,
      colGap: zo(e),
      gap: Mo(e)
    };
  }, Ec = (t) => ({
    col: zo(t),
    colgroup: Oc(t),
    row: Dc(t),
    cell: Mo(t),
    replace: im,
    colGap: zo(t),
    gap: Mo(t)
  }), mm = (t, e) => {
    const o = document.createElement("div");
    return o.innerHTML = t, ut(b.fromDom(o));
  }, fm = (t) => S(t, b.fromDom), Kt = (t) => (e) => e.options.get(t), Bc = "100%", Wc = (t) => {
    var e;
    const n = t.dom, o = (e = n.getParent(t.selection.getStart(), n.isBlock)) !== null && e !== void 0 ? e : t.getBody();
    return To(b.fromDom(o)) + "px";
  }, gm = (t, e) => Ne(t) || !Nc(t) ? e : ae(t) ? {
    ...e,
    width: Wc(t)
  } : {
    ...e,
    width: Bc
  }, pm = (t, e) => Ne(t) || Nc(t) ? e : ae(t) ? {
    ...e,
    width: Wc(t)
  } : {
    ...e,
    width: Bc
  }, hm = (t) => {
    const e = t.options.register;
    e("table_clone_elements", { processor: "string[]" }), e("table_use_colgroups", {
      processor: "boolean",
      default: !0
    }), e("table_header_type", {
      processor: (n) => {
        const o = A([
          "section",
          "cells",
          "sectionCells",
          "auto"
        ], n);
        return o ? {
          value: n,
          valid: o
        } : {
          valid: !1,
          message: "Must be one of: section, cells, sectionCells or auto."
        };
      },
      default: "section"
    }), e("table_sizing_mode", {
      processor: "string",
      default: "auto"
    }), e("table_default_attributes", {
      processor: "object",
      default: { border: "1" }
    }), e("table_default_styles", {
      processor: "object",
      default: { "border-collapse": "collapse" }
    }), e("table_column_resizing", {
      processor: (n) => {
        const o = A([
          "preservetable",
          "resizetable"
        ], n);
        return o ? {
          value: n,
          valid: o
        } : {
          valid: !1,
          message: "Must be preservetable, or resizetable."
        };
      },
      default: "preservetable"
    }), e("table_resize_bars", {
      processor: "boolean",
      default: !0
    }), e("table_style_by_css", {
      processor: "boolean",
      default: !0
    }), e("table_merge_content_on_paste", {
      processor: "boolean",
      default: !0
    });
  }, Pc = (t) => d.from(t.options.get("table_clone_elements")), wm = (t) => {
    const e = t.options.get("object_resizing");
    return A(e.split(","), "table");
  }, _c = Kt("table_header_type"), Fo = Kt("table_column_resizing"), Lc = (t) => Fo(t) === "preservetable", Ac = (t) => Fo(t) === "resizetable", Ho = Kt("table_sizing_mode"), wn = (t) => Ho(t) === "relative", ae = (t) => Ho(t) === "fixed", Ne = (t) => Ho(t) === "responsive", bm = Kt("table_resize_bars"), Nc = Kt("table_style_by_css"), Cm = Kt("table_merge_content_on_paste"), ym = (t) => {
    const e = t.options, n = e.get("table_default_attributes");
    return e.isSet("table_default_attributes") ? n : pm(t, n);
  }, Sm = (t) => {
    const e = t.options, n = e.get("table_default_styles");
    return e.isSet("table_default_styles") ? n : gm(t, n);
  }, Rm = Kt("table_use_colgroups"), Mc = (t) => H(t, "[contenteditable]"), Me = (t, e = !1) => Dt(t) ? t.dom.isContentEditable : Mc(t).fold(T(e), (n) => zc(n) === "true"), zc = (t) => t.dom.contentEditable, bn = (t) => b.fromDom(t.getBody()), ie = (t) => (e) => D(e, bn(t)), Xt = (t) => {
    _(t, "data-mce-style");
    const e = (n) => _(n, "data-mce-style");
    k(se(t), e), k(yo(t), e), k(Pr(t), e);
  }, Cn = (t) => b.fromDom(t.selection.getStart()), Ic = (t) => t.getBoundingClientRect().width, Fc = (t) => t.getBoundingClientRect().height, vm = (t, e) => {
    const n = t.dom.getStyle(e, "width") || t.dom.getAttrib(e, "width");
    return d.from(n).filter(bu);
  }, Tm = (t) => /^(\d+(\.\d+)?)%$/.test(t), km = (t) => /^(\d+(\.\d+)?)px$/.test(t), jo = (t) => uo(t, at("table")).exists(Me), $m = (t, e) => {
    const n = e.column, o = e.column + e.colspan - 1, s = e.row, r = e.row + e.rowspan - 1;
    return n <= t.finishCol && o >= t.startCol && s <= t.finishRow && r >= t.startRow;
  }, xm = (t, e) => e.column >= t.startCol && e.column + e.colspan - 1 <= t.finishCol && e.row >= t.startRow && e.row + e.rowspan - 1 <= t.finishRow, Om = (t, e) => {
    let n = !0;
    const o = J(xm, e);
    for (let s = e.startRow; s <= e.finishRow; s++)
      for (let r = e.startCol; r <= e.finishCol; r++)
        n = n && $.getAt(t, s, r).exists(o);
    return n ? d.some(e) : d.none();
  }, Dm = (t, e) => eu(Math.min(t.row, e.row), Math.min(t.column, e.column), Math.max(t.row + t.rowspan - 1, e.row + e.rowspan - 1), Math.max(t.column + t.colspan - 1, e.column + e.colspan - 1)), Hc = (t, e, n) => {
    const o = $.findItem(t, e, D), s = $.findItem(t, n, D);
    return o.bind((r) => s.map((c) => Dm(r, c)));
  }, Em = (t, e, n) => Hc(t, e, n).bind((o) => Om(t, o)), Bm = (t, e, n, o) => $.findItem(t, e, D).bind((s) => {
    const r = n > 0 ? s.row + s.rowspan - 1 : s.row, c = o > 0 ? s.column + s.colspan - 1 : s.column;
    return $.getAt(t, r + n, c + o).map((a) => a.element);
  }), jc = (t, e, n) => Hc(t, e, n).map((o) => {
    const s = $.filterItems(t, J($m, o));
    return S(s, (r) => r.element);
  }), Gc = (t, e) => {
    const n = (o, s) => co(s, o);
    return $.findItem(t, e, n).map((o) => o.element);
  }, Wm = (t, e, n) => st(t).bind((o) => {
    const s = yn(o);
    return Bm(s, t, e, n);
  }), Pm = (t, e, n) => {
    const o = yn(t);
    return jc(o, e, n);
  }, Go = (t, e, n, o, s) => {
    const r = yn(t), c = D(t, n) ? d.some(e) : Gc(r, e), l = D(t, s) ? d.some(o) : Gc(r, o);
    return c.bind((a) => l.bind((i) => jc(r, a, i)));
  }, _m = (t, e, n) => {
    const o = yn(t);
    return Em(o, e, n);
  }, yn = $.fromTable;
  var Lm = [
    "body",
    "p",
    "div",
    "article",
    "aside",
    "figcaption",
    "figure",
    "footer",
    "header",
    "nav",
    "section",
    "ol",
    "ul",
    "li",
    "table",
    "thead",
    "tbody",
    "tfoot",
    "caption",
    "tr",
    "td",
    "th",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "pre",
    "address"
  ], Sn = () => {
    const t = (i) => b.fromDom(i.dom.cloneNode(!1)), e = (i) => on(i).dom, n = (i) => Rt(i) ? B(i) === "body" ? !0 : A(Lm, B(i)) : !1, o = (i) => Rt(i) ? A([
      "br",
      "img",
      "hr",
      "input"
    ], B(i)) : !1, s = (i) => Rt(i) && Ht(i, "contenteditable") === "false", r = (i, u) => i.dom.compareDocumentPosition(u.dom), c = (i, u) => {
      const g = dr(i);
      ke(u, g);
    }, l = (i) => {
      const u = B(i);
      return A([
        "script",
        "noscript",
        "iframe",
        "noframes",
        "noembed",
        "title",
        "style",
        "textarea",
        "xmp"
      ], u);
    }, a = (i) => Rt(i) ? Nt(i, "lang") : d.none();
    return {
      up: T({
        selector: Ut,
        closest: H,
        predicate: De,
        all: pr
      }),
      down: T({
        selector: vt,
        predicate: Tr
      }),
      styles: T({
        get: Vt,
        getRaw: po,
        set: j,
        remove: Mt
      }),
      attrs: T({
        get: Ht,
        set: I,
        remove: _,
        copyTo: c
      }),
      insert: T({
        before: cn,
        after: xe,
        afterAll: wr,
        append: P,
        appendAll: Ot,
        prepend: lo,
        wrap: Gi
      }),
      remove: T({
        unwrap: Ui,
        remove: Z
      }),
      create: T({
        nu: b.fromTag,
        clone: t,
        text: b.fromText
      }),
      query: T({
        comparePosition: r,
        prevSibling: hr,
        nextSibling: sn
      }),
      property: T({
        children: ut,
        name: B,
        parent: jt,
        document: e,
        isText: Ft,
        isComment: Wi,
        isElement: Rt,
        isSpecial: l,
        getLanguage: a,
        getText: No,
        setText: nm,
        isBoundary: n,
        isEmptyTag: o,
        isNonEditable: s
      }),
      eq: D,
      is: zi
    };
  };
  const Am = (t, e, n, o) => {
    const s = n[0], r = n.slice(1);
    return o(t, e, s, r);
  }, Nm = (t, e, n) => n.length > 0 ? Am(t, e, n, Mm) : d.none(), Mm = (t, e, n, o) => {
    const s = e(t, n);
    return Ct(o, (r, c) => {
      const l = e(t, c);
      return zm(t, r, l);
    }, s);
  }, zm = (t, e, n) => e.bind((o) => n.filter(J(t.eq, o))), Im = (t, e) => J(t.eq, e), Fm = (t, e, n, o = bt) => {
    const s = [e].concat(t.up().all(e)), r = [n].concat(t.up().all(n)), c = (u) => eo(u, o).fold(() => u, (h) => u.slice(0, h + 1)), l = c(s), a = c(r), i = St(l, (u) => ct(a, Im(t, u)));
    return {
      firstpath: l,
      secondpath: a,
      shared: i
    };
  }, Hm = Nm, jm = Fm, Uc = Sn(), Uo = (t, e) => Hm(Uc, (n, o) => t(o), e), Gm = (t, e, n) => jm(Uc, t, e, n), Vo = (t) => Ut(t, "table"), Rn = (t, e, n) => {
    const o = (s) => (r) => n !== void 0 && n(r) || D(r, s);
    return D(t, e) ? d.some({
      boxes: d.some([t]),
      start: t,
      finish: e
    }) : Vo(t).bind((s) => Vo(e).bind((r) => {
      if (D(s, r))
        return d.some({
          boxes: Pm(s, t, e),
          start: t,
          finish: e
        });
      if (co(s, r)) {
        const c = Oe(e, "td,th", o(s)), l = c.length > 0 ? c[c.length - 1] : e;
        return d.some({
          boxes: Go(s, t, s, e, r),
          start: t,
          finish: l
        });
      } else if (co(r, s)) {
        const c = Oe(t, "td,th", o(r)), l = c.length > 0 ? c[c.length - 1] : t;
        return d.some({
          boxes: Go(r, t, s, e, r),
          start: t,
          finish: l
        });
      } else
        return Gm(t, e).shared.bind((c) => H(c, "table", n).bind((l) => {
          const a = Oe(e, "td,th", o(l)), i = a.length > 0 ? a[a.length - 1] : e, u = Oe(t, "td,th", o(l)), g = u.length > 0 ? u[u.length - 1] : t;
          return d.some({
            boxes: Go(l, t, s, e, r),
            start: g,
            finish: i
          });
        }));
    }));
  }, qo = (t, e) => {
    const n = vt(t, e);
    return n.length > 0 ? d.some(n) : d.none();
  }, Um = (t, e) => St(t, (n) => it(n, e)), Vc = (t, e, n) => Ee(t, e).bind((o) => Ee(t, n).bind((s) => Uo(Vo, [
    o,
    s
  ]).map((r) => ({
    first: o,
    last: s,
    table: r
  })))), Vm = (t, e) => Ut(t, "table").bind((n) => Ee(n, e).bind((o) => Rn(o, t).bind((s) => s.boxes.map((r) => ({
    boxes: r,
    start: s.start,
    finish: s.finish
  }))))), qm = (t, e, n, o, s) => Um(t, s).bind((r) => Wm(r, e, n).bind((c) => Vm(c, o))), qc = (t, e) => qo(t, e), Km = (t, e, n) => Vc(t, e, n).bind((o) => {
    const s = (a) => D(t, a), r = "thead,tfoot,tbody,table", c = Ut(o.first, r, s), l = Ut(o.last, r, s);
    return c.bind((a) => l.bind((i) => D(a, i) ? _m(o.table, o.first, o.last) : d.none()));
  }), Kc = L, Xm = (t) => {
    const e = (o, s) => Nt(o, s).exists((r) => parseInt(r, 10) > 1), n = (o) => e(o, "rowspan") || e(o, "colspan");
    return t.length > 0 && ft(t, n) ? d.some(t) : d.none();
  }, Ym = (t, e, n) => e.length <= 1 ? d.none() : Km(t, n.firstSelectedSelector, n.lastSelectedSelector).map((o) => ({
    bounds: o,
    cells: e
  })), vn = "data-mce-selected", Jm = "td[" + vn + "],th[" + vn + "]", Qm = "[" + vn + "]", Ko = "data-mce-first-selected", Zm = "td[" + Ko + "],th[" + Ko + "]", Xo = "data-mce-last-selected", tf = "td[" + Xo + "],th[" + Xo + "]", ef = Qm, Yt = {
    selected: vn,
    selectedSelector: Jm,
    firstSelected: Ko,
    firstSelectedSelector: Zm,
    lastSelected: Xo,
    lastSelectedSelector: tf
  }, Tn = (t, e, n) => ({
    element: n,
    mergable: Ym(e, t, Yt),
    unmergable: Xm(t),
    selection: Kc(t)
  }), nf = (t, e, n) => ({
    element: t,
    clipboard: e,
    generators: n
  }), of = (t, e, n, o) => ({
    selection: Kc(t),
    clipboard: n,
    generators: o
  }), sf = (t) => st(t).bind((e) => qc(e, Yt.firstSelectedSelector)).fold(T(t), (e) => e[0]), Xc = (t) => (e, n) => {
    const o = B(e), s = o === "col" || o === "colgroup" ? sf(e) : e;
    return H(s, t, n);
  }, rf = Xc("th,td,caption"), Yo = Xc("th,td"), Tt = (t) => fm(t.model.table.getSelectedCells()), cf = (t) => N(Tt(t), (e) => it(e, Yt.selectedSelector)), lf = (t) => st(t[0]).map((e) => {
    const n = tm(e, ef);
    return Xt(n), [n];
  }), af = (t, e) => S(e, (n) => t.selection.serializer.serialize(n.dom, {})).join(""), uf = (t) => S(t, (e) => e.dom.innerText).join(""), df = (t, e) => {
    t.on("BeforeGetContent", (n) => {
      const o = (s) => {
        n.preventDefault(), lf(s).each((r) => {
          n.content = n.format === "text" ? uf(r) : af(t, r);
        });
      };
      if (n.selection === !0) {
        const s = cf(t);
        s.length >= 1 && o(s);
      }
    }), t.on("BeforeSetContent", (n) => {
      if (n.selection === !0 && n.paste === !0) {
        const o = Tt(t);
        tn(o).each((s) => {
          st(s).each((r) => {
            const c = N(mm(n.content), (a) => B(a) !== "meta"), l = at("table");
            if (Cm(t) && c.length === 1 && l(c[0])) {
              n.preventDefault();
              const a = b.fromDom(t.getDoc()), i = Ec(a), u = nf(s, c[0], i);
              e.pasteCells(r, u).each(() => {
                t.focus();
              });
            }
          });
        });
      }
    });
  }, ze = (t, e) => ({
    element: t,
    offset: e
  }), Yc = (t, e, n) => t.property().isText(e) && t.property().getText(e).trim().length === 0 || t.property().isComment(e) ? n(e).bind((o) => Yc(t, o, n).orThunk(() => d.some(o))) : d.none(), Jc = (t, e) => t.property().isText(e) ? t.property().getText(e).length : t.property().children(e).length, Qc = (t, e) => {
    const n = Yc(t, e, t.query().prevSibling).getOr(e);
    if (t.property().isText(n))
      return ze(n, Jc(t, n));
    const o = t.property().children(n);
    return o.length > 0 ? Qc(t, o[o.length - 1]) : ze(n, Jc(t, n));
  }, mf = Qc, ff = Sn(), gf = (t) => mf(ff, t), pf = (t, e) => {
    wo(t) || Wd(t).each((o) => {
      const s = o.value / 2;
      wc(t, s, o.unit), wc(e, s, o.unit);
    });
  }, kn = (t) => S(t, T(0)), Zc = (t, e, n, o, s) => s(t.slice(0, e)).concat(o).concat(s(t.slice(n))), tl = (t) => (e, n, o, s) => {
    if (t(o)) {
      const r = Math.max(s, e[n] - Math.abs(o)), c = Math.abs(r - e[n]);
      return o >= 0 ? c : -c;
    } else
      return o;
  }, $n = tl((t) => t < 0), hf = tl(O), el = () => {
    const t = (l, a, i, u, g) => {
      const h = $n(l, a, u, g);
      return Zc(l, a, i + 1, [
        h,
        0
      ], kn);
    }, e = (l, a, i, u) => {
      const g = (100 + i) / 100, h = Math.max(u, (l[a] + i) / g);
      return S(l, (p, f) => (f === a ? h : p / g) - p);
    }, n = (l, a, i, u, g, h) => h ? e(l, a, u, g) : t(l, a, i, u, g);
    return {
      resizeTable: (l, a) => l(a),
      clampTableDelta: $n,
      calcLeftEdgeDeltas: n,
      calcMiddleDeltas: (l, a, i, u, g, h, p) => n(l, i, u, g, h, p),
      calcRightEdgeDeltas: (l, a, i, u, g, h) => {
        if (h)
          return e(l, i, u, g);
        {
          const p = $n(l, i, u, g);
          return kn(l.slice(0, i)).concat([p]);
        }
      },
      calcRedestributedWidths: (l, a, i, u) => {
        if (u) {
          const h = (a + i) / a, p = S(l, (f) => f / h);
          return {
            delta: h * 100 - 100,
            newSizes: p
          };
        } else
          return {
            delta: i,
            newSizes: l
          };
      }
    };
  }, Jo = () => {
    const t = (c, l, a, i, u) => {
      const g = i >= 0 ? a : l, h = hf(c, g, i, u);
      return Zc(c, l, a + 1, [
        h,
        -h
      ], kn);
    };
    return {
      resizeTable: (c, l, a) => {
        a && c(l);
      },
      clampTableDelta: (c, l, a, i, u) => {
        if (u) {
          if (a >= 0)
            return a;
          {
            const g = yt(c, (h, p) => h + p - i, 0);
            return Math.max(-g, a);
          }
        } else
          return $n(c, l, a, i);
      },
      calcLeftEdgeDeltas: t,
      calcMiddleDeltas: (c, l, a, i, u, g) => t(c, a, i, u, g),
      calcRightEdgeDeltas: (c, l, a, i, u, g) => {
        if (g)
          return kn(c);
        {
          const h = i / c.length;
          return S(c, T(h));
        }
      },
      calcRedestributedWidths: (c, l, a, i) => ({
        delta: 0,
        newSizes: c
      })
    };
  }, Qo = (t) => $.fromTable(t).grid, xn = at("th"), On = (t) => ft(t, (e) => xn(e.element)), wf = (t, e) => t && e ? "sectionCells" : t ? "section" : "cells", nl = (t) => {
    const e = t.section === "thead", n = fo(Zo(t.cells), "th");
    return t.section === "tfoot" ? { type: "footer" } : e || n ? {
      type: "header",
      subType: wf(e, n)
    } : { type: "body" };
  }, Zo = (t) => {
    const e = N(t, (n) => xn(n.element));
    return e.length === 0 ? d.some("td") : e.length === t.length ? d.some("th") : d.none();
  }, bf = (t) => {
    const e = S(t, (s) => nl(s).type), n = A(e, "header"), o = A(e, "footer");
    if (!n && !o)
      return d.some("body");
    {
      const s = A(e, "body");
      return n && !s && !o ? d.some("header") : !n && !s && o ? d.some("footer") : d.none();
    }
  }, Cf = (t) => xt(t.all, (e) => {
    const n = nl(e);
    return n.type === "header" ? d.from(n.subType) : d.none();
  }), ts = (t, e, n) => tt(n(t.element, e), !0, t.isLocked), es = (t, e) => t.section !== e ? Gt(t.element, t.cells, e, t.isNew) : t, ol = () => ({
    transformRow: es,
    transformCell: (t, e, n) => {
      const o = n(t.element, e), s = B(o) !== "td" ? qi(o, "td") : o;
      return tt(s, t.isNew, t.isLocked);
    }
  }), sl = () => ({
    transformRow: es,
    transformCell: ts
  }), rl = () => ({
    transformRow: (t, e) => es(t, e === "thead" ? "tbody" : e),
    transformCell: ts
  }), Ie = {
    getTableSectionType: (t, e) => {
      const n = $.fromTable(t);
      switch (Cf(n).getOr(e)) {
        case "section":
          return ol();
        case "sectionCells":
          return sl();
        case "cells":
          return rl();
      }
    },
    section: ol,
    sectionCells: sl,
    cells: rl,
    fallback: () => ({
      transformRow: L,
      transformCell: ts
    })
  }, Fe = (t, e, n, o) => {
    n === o ? _(t, e) : I(t, e, n);
  }, cl = (t, e, n) => {
    tr(ln(t, e)).fold(() => lo(t, n), (o) => xe(o, n));
  }, yf = (t, e) => {
    const n = mo(t, e).getOrThunk(() => {
      const o = b.fromTag(e, nn(t).dom);
      return e === "thead" ? cl(t, "caption,colgroup", o) : e === "colgroup" ? cl(t, "caption", o) : P(t, o), o;
    });
    return ao(n), n;
  }, Sf = (t, e) => {
    const n = [], o = [], s = (p) => S(p, (f) => {
      f.isNew && n.push(f.element);
      const w = f.element;
      return ao(w), k(f.cells, (m) => {
        m.isNew && o.push(m.element), Fe(m.element, "colspan", m.colspan, 1), Fe(m.element, "rowspan", m.rowspan, 1), P(w, m.element);
      }), w;
    }), r = (p) => V(p, (f) => S(f.cells, (w) => (Fe(w.element, "span", w.colspan, 1), w.element))), c = (p, f) => {
      const w = yf(t, f), C = (f === "colgroup" ? r : s)(p);
      Ot(w, C);
    }, l = (p) => {
      mo(t, p).each(Z);
    }, a = (p, f) => {
      p.length > 0 ? c(p, f) : l(f);
    }, i = [], u = [], g = [], h = [];
    return k(e, (p) => {
      switch (p.section) {
        case "thead":
          i.push(p);
          break;
        case "tbody":
          u.push(p);
          break;
        case "tfoot":
          g.push(p);
          break;
        case "colgroup":
          h.push(p);
          break;
      }
    }), a(h, "colgroup"), a(i, "thead"), a(u, "tbody"), a(g, "tfoot"), {
      newRows: n,
      newCells: o
    };
  }, Rf = (t) => S(t, (e) => {
    const n = Cr(e.element);
    return k(e.cells, (o) => {
      const s = ne(o.element);
      Fe(s, "colspan", o.colspan, 1), Fe(s, "rowspan", o.rowspan, 1), P(n, s);
    }), n;
  }), vf = (t, e) => S(t, (n) => gt(n, e)), Tf = (t, e) => t[e], ll = (t, e) => {
    if (t.length === 0)
      return 0;
    const n = t[0];
    return eo(t, (s) => !e(n.element, s.element)).getOr(t.length);
  }, kf = (t, e, n, o) => {
    const s = Tf(t, e), r = s.section === "colgroup", c = ll(s.cells.slice(n), o), l = r ? 1 : ll(vf(t.slice(e), n), o);
    return {
      colspan: c,
      rowspan: l
    };
  }, $f = (t, e) => {
    const n = S(t, (s) => S(s.cells, bt)), o = (s, r, c, l) => {
      for (let a = s; a < s + c; a++)
        for (let i = r; i < r + l; i++)
          n[a][i] = !0;
    };
    return S(t, (s, r) => {
      const c = V(s.cells, (l, a) => {
        if (n[r][a] === !1) {
          const i = kf(t, r, a, e);
          return o(r, a, i.rowspan, i.colspan), [Qi(l.element, i.rowspan, i.colspan, l.isNew)];
        } else
          return [];
      });
      return tu(s.element, c, s.section, s.isNew);
    });
  }, He = (t, e, n) => {
    const o = [];
    k(t.colgroups, (s) => {
      const r = [];
      for (let c = 0; c < t.grid.columns; c++) {
        const l = $.getColumnAt(t, c).map((a) => tt(a.element, n, !1)).getOrThunk(() => tt(e.colGap(), !0, !1));
        r.push(l);
      }
      o.push(Gt(s.element, r, "colgroup", n));
    });
    for (let s = 0; s < t.grid.rows; s++) {
      const r = [];
      for (let a = 0; a < t.grid.columns; a++) {
        const i = $.getAt(t, s, a).map((u) => tt(u.element, n, u.isLocked)).getOrThunk(() => tt(e.gap(), !0, !1));
        r.push(i);
      }
      const c = t.all[s], l = Gt(c.element, r, c.section, n);
      o.push(l);
    }
    return o;
  }, xf = (t, e) => He(t, e, !1), Dn = (t) => $f(t, D), ns = (t, e) => xt(t.all, (n) => St(n.cells, (o) => D(e, o.element))), os = (t, e, n) => {
    const o = S(e.selection, (r) => Wr(r).bind((c) => ns(t, c)).filter(n)), s = $r(o);
    return go(s.length > 0, s);
  }, F = (t, e, n, o, s) => (r, c, l, a) => {
    const i = $.fromTable(r), u = d.from(a == null ? void 0 : a.section).getOrThunk(Ie.fallback);
    return e(i, c).map((h) => {
      const p = xf(i, l), f = t(p, h, D, s(l), u), w = qt(f.grid), m = Dn(f.grid);
      return {
        info: h,
        grid: m,
        cursor: f.cursor,
        lockedColumns: w
      };
    }).bind((h) => {
      const p = Sf(r, h.grid), f = d.from(a == null ? void 0 : a.sizing).getOrThunk(() => le.getTableSize(r)), w = d.from(a == null ? void 0 : a.resize).getOrThunk(Jo);
      return n(r, h.grid, h.info, {
        sizing: f,
        resize: w,
        section: u
      }), o(r), _(r, mn), h.lockedColumns.length > 0 && I(r, mn, h.lockedColumns.join(",")), d.some({
        cursor: h.cursor,
        newRows: p.newRows,
        newCells: p.newCells
      });
    });
  }, Of = (t, e) => Wr(e.element).bind((n) => ns(t, n).map((o) => ({
    ...o,
    generators: e.generators,
    clipboard: e.clipboard
  }))), ss = (t, e) => os(t, e, O).map((n) => ({
    cells: n,
    generators: e.generators,
    clipboard: e.clipboard
  })), Df = (t, e) => e.mergable, Ef = (t, e) => e.unmergable, _t = (t, e) => os(t, e, O), Lt = (t, e) => os(t, e, (n) => !n.isLocked), Bf = (t, e) => ns(t, e).exists((n) => !n.isLocked), al = (t, e) => ft(e, (n) => Bf(t, n)), Wf = (t, e) => Df(t, e).filter((n) => al(t, n.cells)), Pf = (t, e) => Ef(t, e).filter((n) => al(t, n)), _f = (t, e, n, o) => {
    const s = G(t).rows;
    if (s.length === 0)
      return t;
    for (let r = e.startRow; r <= e.finishRow; r++)
      for (let c = e.startCol; c <= e.finishCol; c++) {
        const l = s[r], a = gt(l, c).isLocked;
        Le(l, c, tt(o(), !1, a));
      }
    return t;
  }, il = (t, e, n, o) => {
    const s = G(t).rows;
    let r = !0;
    for (let c = 0; c < s.length; c++)
      for (let l = 0; l < pt(s[0]); l++) {
        const a = s[c], i = gt(a, l), u = i.element, g = n(u, e);
        g && !r ? Le(a, l, tt(o(), !0, i.isLocked)) : g && (r = !1);
      }
    return t;
  }, Lf = (t, e) => yt(t, (n, o) => ct(n, (s) => e(s.element, o.element)) ? n : n.concat([o]), []), Af = (t, e, n, o) => (e > 0 && e < t[0].cells.length && k(t, (s) => {
    const r = s.cells[e - 1];
    let c = 0;
    const l = o();
    for (; s.cells.length > e + c && n(r.element, s.cells[e + c].element); )
      Le(s, e + c, tt(l, !0, s.cells[e + c].isLocked)), c++;
  }), t), Nf = (t, e, n, o) => {
    const s = G(t).rows;
    if (e > 0 && e < s.length) {
      const r = s[e - 1].cells, c = Lf(r, n);
      k(c, (l) => {
        let a = d.none();
        for (let i = e; i < s.length; i++)
          for (let u = 0; u < pt(s[0]); u++) {
            const g = s[i], h = gt(g, u);
            n(h.element, l.element) && (a.isNone() && (a = d.some(o())), a.each((f) => {
              Le(g, u, tt(f, !0, h.isLocked));
            }));
          }
      });
    }
    return t;
  }, ul = (t) => {
    const e = (r) => r(t), n = T(t), o = () => s, s = {
      tag: !0,
      inner: t,
      fold: (r, c) => c(t),
      isValue: O,
      isError: bt,
      map: (r) => En.value(r(t)),
      mapError: o,
      bind: e,
      exists: e,
      forall: e,
      getOr: n,
      or: o,
      getOrThunk: n,
      orThunk: o,
      getOrDie: n,
      each: (r) => {
        r(t);
      },
      toOptional: () => d.some(t)
    };
    return s;
  }, dl = (t) => {
    const e = () => n, n = {
      tag: !1,
      inner: t,
      fold: (o, s) => o(t),
      isValue: bt,
      isError: O,
      map: e,
      mapError: (o) => En.error(o(t)),
      bind: e,
      exists: bt,
      forall: O,
      getOr: L,
      or: L,
      getOrThunk: Xs,
      orThunk: Xs,
      getOrDie: ai(String(t)),
      each: R,
      toOptional: d.none
    };
    return n;
  }, En = {
    value: ul,
    error: dl,
    fromOption: (t, e) => t.fold(() => dl(e), ul)
  }, Mf = (t, e, n) => {
    if (t.row >= e.length || t.column > pt(e[0]))
      return En.error("invalid start address out of table bounds, row: " + t.row + ", column: " + t.column);
    const o = e.slice(t.row), s = o[0].cells.slice(t.column), r = pt(n[0]), c = n.length;
    return En.value({
      rowDelta: o.length - c,
      colDelta: s.length - r
    });
  }, ml = (t, e) => {
    const n = pt(t[0]), o = pt(e[0]);
    return {
      rowDelta: 0,
      colDelta: n - o
    };
  }, fl = (t, e) => {
    const n = t.length, o = e.length;
    return {
      rowDelta: n - o,
      colDelta: 0
    };
  }, rs = (t, e, n, o) => {
    const s = e.section === "colgroup" ? n.col : n.cell;
    return mt(t, (r) => tt(s(), !0, o(r)));
  }, zf = (t, e, n, o) => {
    const s = t[t.length - 1];
    return t.concat(mt(e, () => {
      const r = s.section === "colgroup" ? n.colgroup : n.row, c = Xr(s, r, L), l = rs(c.cells.length, c, n, (a) => oo(o, a.toString()));
      return Kr(c, l);
    }));
  }, If = (t, e, n, o) => S(t, (s) => {
    const r = rs(e, s, n, bt);
    return ko(s, o, r);
  }), Ff = (t, e, n) => S(t, (o) => yt(n, (s, r) => {
    const c = rs(1, o, e, O)[0];
    return qr(s, r, c);
  }, o)), je = (t, e, n) => {
    const o = e.colDelta < 0 ? If : L, s = e.rowDelta < 0 ? zf : L, r = qt(t), c = pt(t[0]), l = ct(r, (u) => u === c - 1), a = o(t, Math.abs(e.colDelta), n, l ? c - 1 : c), i = qt(a);
    return s(a, Math.abs(e.rowDelta), n, no(i, O));
  }, Hf = (t, e, n, o) => {
    const s = gt(t[e], n), r = J(o, s.element), c = t[e];
    return t.length > 1 && pt(c) > 1 && (n > 0 && r(rt(c, n - 1)) || n < c.cells.length - 1 && r(rt(c, n + 1)) || e > 0 && r(rt(t[e - 1], n)) || e < t.length - 1 && r(rt(t[e + 1], n)));
  }, jf = (t, e, n, o, s, r) => {
    const c = t.row, l = t.column, a = n.length, i = pt(n[0]), u = c + a, g = l + i + r.length, h = no(r, O);
    for (let p = c; p < u; p++) {
      let f = 0;
      for (let w = l; w < g; w++) {
        if (h[w]) {
          f++;
          continue;
        }
        Hf(e, p, w, s) && il(e, rt(e[p], w), s, o.cell);
        const m = w - l - f, C = gt(n[p - c], m), y = C.element, v = o.replace(y);
        Le(e[p], w, tt(v, !0, C.isLocked));
      }
    }
    return e;
  }, Gf = (t, e, n) => {
    const o = pt(e[0]), s = G(e).cols.length + t.row, r = mt(o - t.column, (l) => l + t.column), c = St(r, (l) => ft(n, (a) => a !== l)).getOr(o - 1);
    return {
      row: s,
      column: c
    };
  }, gl = (t, e, n) => N(n, (o) => o >= t.column && o <= pt(e[0]) + t.column), Uf = (t, e, n, o, s) => {
    const r = qt(e), c = Gf(t, e, r), l = G(n).rows, a = gl(c, l, r);
    return Mf(c, e, l).map((u) => {
      const g = {
        ...u,
        colDelta: u.colDelta - a.length
      }, h = je(e, g, o), p = qt(h), f = gl(c, l, p);
      return jf(c, h, l, o, s, f);
    });
  }, pl = (t, e, n, o, s) => {
    Af(e, t, s, o.cell);
    const r = fl(n, e), c = je(n, r, o), l = fl(e, c), a = je(e, l, o);
    return S(a, (i, u) => ko(i, t, c[u].cells));
  }, hl = (t, e, n, o, s) => {
    Nf(e, t, s, o.cell);
    const r = qt(e), c = ml(e, n), l = {
      ...c,
      colDelta: c.colDelta - r.length
    }, a = je(e, l, o), {
      cols: i,
      rows: u
    } = G(a), g = qt(a), h = ml(n, e), p = {
      ...h,
      colDelta: h.colDelta + g.length
    }, f = Ff(n, o, g), w = je(f, p, o);
    return [
      ...i,
      ...u.slice(0, t),
      ...w,
      ...u.slice(t, u.length)
    ];
  }, Vf = (t, e, n, o) => Xr(t, (s) => o(s, n), e), wl = (t, e, n, o, s) => {
    const { rows: r, cols: c } = G(t), l = r.slice(0, e), a = r.slice(e), i = Vf(r[n], (u, g) => e > 0 && e < r.length && o(rt(r[e - 1], g), rt(r[e], g)) ? gt(r[e], g) : tt(s(u.element, o), !0, u.isLocked), o, s);
    return [
      ...c,
      ...l,
      i,
      ...a
    ];
  }, qf = (t, e, n, o, s, r, c) => {
    if (n === "colgroup" || !o) {
      const l = gt(t, s);
      return tt(c(l.element, r), !0, !1);
    } else
      return gt(t, e);
  }, bl = (t, e, n, o, s) => S(t, (r) => {
    const c = e > 0 && e < pt(r) && o(rt(r, e - 1), rt(r, e)), l = qf(r, e, r.section, c, n, o, s);
    return qr(r, e, l);
  }), Kf = (t, e) => V(t, (n) => {
    const o = n.cells, s = Ct(e, (r, c) => c >= 0 && c < r.length ? r.slice(0, c).concat(r.slice(c + 1)) : r, o);
    return s.length > 0 ? [Gt(n.element, s, n.section, n.isNew)] : [];
  }), Xf = (t, e, n) => {
    const { rows: o, cols: s } = G(t);
    return [
      ...s,
      ...o.slice(0, e),
      ...o.slice(n + 1)
    ];
  }, Yf = (t, e, n, o) => rt(t[e], n) !== void 0 && e > 0 && o(rt(t[e - 1], n), rt(t[e], n)), Jf = (t, e, n) => e > 0 && n(rt(t, e - 1), rt(t, e)), Cl = (t, e, n, o) => Yf(t, e, n, o) || Jf(t[e], n, o), Qf = (t, e) => ft(e, L) && On(t.cells) ? O : (o, s, r) => !(B(o.element) === "th" && e[r]), Zf = (t, e) => ft(e, L) && On(t) ? O : (o, s, r) => !(B(o.element) === "th" && e[s]), yl = (t, e, n, o) => {
    const s = (c) => c === "row" ? Br(e) : wo(e), r = (c) => s(c) ? `${c}group` : c;
    return t ? xn(e) ? r(n) : null : o && xn(e) ? r(n === "row" ? "col" : "row") : null;
  }, tg = (t, e) => (n, o, s) => d.some(yl(t, n.element, "col", e[s])), eg = (t, e) => (n, o) => d.some(yl(t, n.element, "row", e[o])), Sl = (t, e, n) => tt(n(t.element, e), !0, t.isLocked), cs = (t, e, n, o, s, r, c) => {
    const l = (a) => ct(e, (i) => n(a.element, i.element));
    return S(t, (a, i) => cd(a, (u, g) => {
      if (l(u)) {
        const h = c(u, i, g) ? s(u, n, o) : u;
        return r(h, i, g).each((p) => {
          _i(h.element, { scope: d.from(p) });
        }), h;
      } else
        return u;
    }));
  }, Rl = (t, e, n) => V(t, (o, s) => Cl(t, s, e, n) ? [] : [gt(o, e)]), ng = (t, e, n) => {
    const o = t[e];
    return V(o.cells, (s, r) => Cl(t, e, r, n) ? [] : [s]);
  }, vl = (t, e, n, o, s) => {
    const r = G(t).rows, c = V(e, (u) => Rl(r, u, o)), l = S(r, (u) => On(u.cells)), a = Zf(c, l), i = eg(n, l);
    return cs(t, c, o, s, Sl, i, a);
  }, og = (t, e, n, o, s, r, c) => {
    const { cols: l, rows: a } = G(t), i = a[e[0]], u = V(e, (m) => ng(a, m, s)), g = S(i.cells, (m, C) => On(Rl(a, C, s))), h = [...a];
    k(e, (m) => {
      h[m] = c.transformRow(a[m], n);
    });
    const p = [
      ...l,
      ...h
    ], f = Qf(i, g), w = tg(o, g);
    return cs(p, u, s, r, c.transformCell, w, f);
  }, Tl = (t, e, n, o) => {
    const s = G(t).rows, r = S(e, (c) => gt(s[c.row], c.column));
    return cs(t, r, n, o, Sl, d.none, O);
  }, Jt = { generate: (t) => {
    if (!Ze(t))
      throw new Error("cases must be an array");
    if (t.length === 0)
      throw new Error("there must be at least one case");
    const e = [], n = {};
    return k(t, (o, s) => {
      const r = Te(o);
      if (r.length !== 1)
        throw new Error("one and only one name per case");
      const c = r[0], l = o[c];
      if (n[c] !== void 0)
        throw new Error("duplicate key detected:" + c);
      if (c === "cata")
        throw new Error("cannot have a case named cata (sorry)");
      if (!Ze(l))
        throw new Error("case arguments must be an array");
      e.push(c), n[c] = (...a) => {
        const i = a.length;
        if (i !== l.length)
          throw new Error("Wrong number of arguments to case " + c + ". Expected " + l.length + " (" + l + "), got " + i);
        return {
          fold: (...g) => {
            if (g.length !== t.length)
              throw new Error("Wrong number of arguments to fold. Expected " + t.length + ", got " + g.length);
            return g[s].apply(null, a);
          },
          match: (g) => {
            const h = Te(g);
            if (e.length !== h.length)
              throw new Error("Wrong number of arguments to match. Expected: " + e.join(",") + `
Actual: ` + h.join(","));
            if (!ft(e, (f) => A(h, f)))
              throw new Error("Not all branches were specified when using match. Specified: " + h.join(", ") + `
Required: ` + e.join(", "));
            return g[c].apply(null, a);
          },
          log: (g) => {
            console.log(g, {
              constructors: e,
              constructor: c,
              params: a
            });
          }
        };
      };
    }), n;
  } }, ue = { ...Jt.generate([
    { none: [] },
    { only: ["index"] },
    {
      left: [
        "index",
        "next"
      ]
    },
    {
      middle: [
        "prev",
        "index",
        "next"
      ]
    },
    {
      right: [
        "prev",
        "index"
      ]
    }
  ]) }, sg = (t, e) => t.length === 0 ? ue.none() : t.length === 1 ? ue.only(0) : e === 0 ? ue.left(0, 1) : e === t.length - 1 ? ue.right(e - 1, e) : e > 0 && e < t.length - 1 ? ue.middle(e - 1, e, e + 1) : ue.none(), rg = (t, e, n, o, s) => {
    const r = t.slice(0), c = sg(t, e), l = T(S(r, T(0))), a = (h) => o.singleColumnWidth(r[h], n), i = (h, p) => s.calcLeftEdgeDeltas(r, h, p, n, o.minCellWidth(), o.isRelative), u = (h, p, f) => s.calcMiddleDeltas(r, h, p, f, n, o.minCellWidth(), o.isRelative), g = (h, p) => s.calcRightEdgeDeltas(r, h, p, n, o.minCellWidth(), o.isRelative);
    return c.fold(l, a, i, u, g);
  }, kl = (t, e, n) => {
    let o = 0;
    for (let s = t; s < e; s++)
      o += n[s] !== void 0 ? n[s] : 0;
    return o;
  }, cg = (t, e) => {
    const n = $.justCells(t);
    return S(n, (o) => {
      const s = kl(o.column, o.column + o.colspan, e);
      return {
        element: o.element,
        width: s,
        colspan: o.colspan
      };
    });
  }, lg = (t, e) => {
    const n = $.justColumns(t);
    return S(n, (o, s) => ({
      element: o.element,
      width: e[s],
      colspan: o.colspan
    }));
  }, ag = (t, e) => {
    const n = $.justCells(t);
    return S(n, (o) => {
      const s = kl(o.row, o.row + o.rowspan, e);
      return {
        element: o.element,
        height: s,
        rowspan: o.rowspan
      };
    });
  }, ig = (t, e) => S(t.all, (n, o) => ({
    element: n.element,
    height: e[o]
  })), ug = (t) => Ct(t, (e, n) => e + n, 0), dg = (t, e) => $.hasColumns(t) ? lg(t, e) : cg(t, e), ls = (t, e, n) => {
    const o = dg(t, e);
    k(o, (s) => {
      n.setElementWidth(s.element, s.width);
    });
  }, $l = (t, e, n, o, s) => {
    const r = $.fromTable(t), c = s.getCellDelta(e), l = s.getWidths(r, s), a = n === r.grid.columns - 1, i = o.clampTableDelta(l, n, c, s.minCellWidth(), a), u = rg(l, n, i, s, o), g = S(u, (h, p) => h + l[p]);
    ls(r, g, s), o.resizeTable(s.adjustTableWidth, i, a);
  }, mg = (t, e, n, o) => {
    const s = $.fromTable(t), r = Ud(s, t, o), c = S(r, (u, g) => n === g ? Math.max(e + u, bo()) : u), l = ag(s, c), a = ig(s, c);
    k(a, (u) => {
      pn(u.element, u.height);
    }), k(l, (u) => {
      pn(u.element, u.height);
    });
    const i = ug(c);
    pn(t, i);
  }, fg = (t, e, n, o, s) => {
    const r = $.generate(e), c = o.getWidths(r, o), l = o.pixelWidth(), { newSizes: a, delta: i } = s.calcRedestributedWidths(c, l, n.pixelDelta, o.isRelative);
    ls(r, a, o), o.adjustTableWidth(i);
  }, gg = (t, e, n, o) => {
    const s = $.generate(e), r = o.getWidths(s, o);
    ls(s, r, o);
  }, de = (t) => yt(t, (n, o) => ct(n, (r) => r.column === o.column) ? n : n.concat([o]), []).sort((n, o) => n.column - o.column), xl = at("col"), Ol = at("colgroup"), Dl = (t) => B(t) === "tr" || Ol(t), pg = (t) => {
    const e = Et(t, "colspan", 1), n = Et(t, "rowspan", 1);
    return {
      element: t,
      colspan: e,
      rowspan: n
    };
  }, hg = (t, e = pg) => {
    const n = (l) => xl(l.element) ? t.col(l) : t.cell(l), o = (l) => Ol(l.element) ? t.colgroup(l) : t.row(l), s = (l) => {
      if (Dl(l))
        return o({ element: l });
      {
        const a = l, i = n(e(a));
        return r = d.some({
          item: a,
          replacement: i
        }), i;
      }
    };
    let r = d.none();
    return { getOrInit: (l, a) => r.fold(() => s(l), (i) => a(l, i.item) ? i.replacement : s(l)) };
  }, wg = (t) => (e) => {
    const n = [], o = (c, l) => St(n, (a) => l(a.item, c)), s = (c) => {
      const l = t === "td" ? { scope: null } : {}, a = e.replace(c, t, l);
      return n.push({
        item: c,
        sub: a
      }), a;
    };
    return { replaceOrInit: (c, l) => {
      if (Dl(c) || xl(c))
        return c;
      {
        const a = c;
        return o(a, l).fold(() => s(a), (i) => l(c, i.item) ? i.sub : s(a));
      }
    } };
  }, El = (t) => Nt(t, "scope").map((e) => e.substr(0, 3)), et = {
    modification: hg,
    transform: wg,
    merging: (t) => ({
      unmerge: (o) => {
        const s = El(o);
        return s.each((r) => I(o, "scope", r)), () => {
          const r = t.cell({
            element: o,
            colspan: 1,
            rowspan: 1
          });
          return Mt(r, "width"), Mt(o, "width"), s.each((c) => I(r, "scope", c)), r;
        };
      },
      merge: (o) => {
        const s = () => {
          const r = $r(S(o, El));
          if (r.length === 0)
            return d.none();
          {
            const c = r[0], l = [
              "row",
              "col"
            ];
            return ct(r, (i) => i !== c && A(l, i)) ? d.none() : d.from(c);
          }
        };
        return Mt(o[0], "width"), s().fold(() => _(o[0], "scope"), (r) => I(o[0], "scope", r + "group")), T(o[0]);
      }
    })
  }, bg = [
    "body",
    "p",
    "div",
    "article",
    "aside",
    "figcaption",
    "figure",
    "footer",
    "header",
    "nav",
    "section",
    "ol",
    "ul",
    "table",
    "thead",
    "tfoot",
    "tbody",
    "caption",
    "tr",
    "td",
    "th",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "pre",
    "address"
  ], Cg = (t, e) => {
    const n = t.property().name(e);
    return A([
      "ol",
      "ul"
    ], n);
  }, yg = (t, e) => {
    const n = t.property().name(e);
    return A(bg, n);
  }, Sg = (t, e) => A([
    "br",
    "img",
    "hr",
    "input"
  ], t.property().name(e)), as = Sn(), is = (t) => yg(as, t), Rg = (t) => Cg(as, t), vg = (t) => Sg(as, t), Tg = (t) => {
    const e = at("br"), n = (a) => ft(a, (i) => e(i) || Ft(i) && No(i).trim().length === 0), o = (a) => B(a) === "li" || De(a, Rg).isSome(), s = (a) => sn(a).map((i) => is(i) ? !0 : vg(i) ? B(i) !== "img" : !1).getOr(!1), r = (a) => xc(a).bind((i) => {
      const u = s(i);
      return jt(i).map((g) => u === !0 || o(g) || e(i) || is(g) && !D(a, g) ? [] : [b.fromTag("br")]);
    }).getOr([]), l = (() => {
      const a = V(t, (i) => {
        const u = ut(i);
        return n(u) ? [] : u.concat(r(i));
      });
      return a.length === 0 ? [b.fromTag("br")] : a;
    })();
    ao(t[0]), Ot(t[0], l);
  }, Bl = (t) => Me(t, !0), Wl = (t) => {
    se(t).length === 0 && Z(t);
  }, Bn = (t, e) => ({
    grid: t,
    cursor: e
  }), kg = (t) => xt(t, (e) => xt(e.cells, (n) => {
    const o = n.element;
    return go(Bl(o), o);
  })), $g = (t, e, n) => {
    var o, s;
    const r = G(t).rows;
    return d.from((s = (o = r[e]) === null || o === void 0 ? void 0 : o.cells[n]) === null || s === void 0 ? void 0 : s.element).filter(Bl).orThunk(() => kg(r));
  }, Q = (t, e, n) => {
    const o = $g(t, e, n);
    return Bn(t, o);
  }, Wn = (t) => yt(t, (n, o) => ct(n, (r) => r.row === o.row) ? n : n.concat([o]), []).sort((n, o) => n.row - o.row), xg = (t, e, n, o) => {
    const s = e[0].row, r = Wn(e), c = Ct(r, (l, a) => ({
      grid: wl(l.grid, s, a.row + l.delta, n, o.getOrInit),
      delta: l.delta + 1
    }), {
      grid: t,
      delta: 0
    }).grid;
    return Q(c, s, e[0].column);
  }, Og = (t, e, n, o) => {
    const s = Wn(e), r = s[s.length - 1], c = r.row + r.rowspan, l = Ct(s, (a, i) => wl(a, c, i.row, n, o.getOrInit), t);
    return Q(l, c, e[0].column);
  }, Dg = (t, e, n, o) => {
    const s = e.details, r = de(s), c = r[0].column, l = Ct(r, (a, i) => ({
      grid: bl(a.grid, c, i.column + a.delta, n, o.getOrInit),
      delta: a.delta + 1
    }), {
      grid: t,
      delta: 0
    }).grid;
    return Q(l, s[0].row, c);
  }, Eg = (t, e, n, o) => {
    const s = e.details, r = s[s.length - 1], c = r.column + r.colspan, l = de(s), a = Ct(l, (i, u) => bl(i, c, u.column, n, o.getOrInit), t);
    return Q(a, s[0].row, c);
  }, Bg = (t, e, n, o) => {
    const s = de(e), r = S(s, (l) => l.column), c = vl(t, r, !0, n, o.replaceOrInit);
    return Q(c, e[0].row, e[0].column);
  }, Wg = (t, e, n, o) => {
    const s = Tl(t, e, n, o.replaceOrInit);
    return Q(s, e[0].row, e[0].column);
  }, Pg = (t, e, n, o) => {
    const s = de(e), r = S(s, (l) => l.column), c = vl(t, r, !1, n, o.replaceOrInit);
    return Q(c, e[0].row, e[0].column);
  }, _g = (t, e, n, o) => {
    const s = Tl(t, e, n, o.replaceOrInit);
    return Q(s, e[0].row, e[0].column);
  }, us = (t, e) => (n, o, s, r, c) => {
    const l = Wn(o), a = S(l, (u) => u.row), i = og(n, a, t, e, s, r.replaceOrInit, c);
    return Q(i, o[0].row, o[0].column);
  }, Lg = us("thead", !0), Ag = us("tbody", !1), Ng = us("tfoot", !1), Mg = (t, e, n, o) => {
    const s = de(e.details), r = Kf(t, S(s, (l) => l.column)), c = r.length > 0 ? r[0].cells.length - 1 : 0;
    return Q(r, s[0].row, Math.min(s[0].column, c));
  }, zg = (t, e, n, o) => {
    const s = Wn(e), r = Xf(t, s[0].row, s[s.length - 1].row), c = r.length > 0 ? r.length - 1 : 0;
    return Q(r, Math.min(e[0].row, c), e[0].column);
  }, Ig = (t, e, n, o) => {
    const s = e.cells;
    Tg(s);
    const r = _f(t, e.bounds, n, o.merge(s));
    return Bn(r, d.from(s[0]));
  }, Fg = (t, e, n, o) => {
    const r = Ct(e, (c, l) => il(c, l, n, o.unmerge(l)), t);
    return Bn(r, d.from(e[0]));
  }, Hg = (t, e, n, o) => {
    const r = ((a, i) => {
      const u = $.fromTable(a);
      return He(u, i, !0);
    })(e.clipboard, e.generators), c = Ji(e.row, e.column);
    return Uf(c, t, r, e.generators, n).fold(() => Bn(t, d.some(e.element)), (a) => Q(a, e.row, e.column));
  }, Pn = (t, e, n) => {
    const o = Tu(t, n.section), s = $.generate(o);
    return He(s, e, !0);
  }, jg = (t, e, n, o) => {
    const s = G(t).rows, r = e.cells[0].column, c = s[e.cells[0].row], l = Pn(e.clipboard, e.generators, c), a = pl(r, t, l, e.generators, n);
    return Q(a, e.cells[0].row, e.cells[0].column);
  }, Gg = (t, e, n, o) => {
    const s = G(t).rows, r = e.cells[e.cells.length - 1].column + e.cells[e.cells.length - 1].colspan, c = s[e.cells[0].row], l = Pn(e.clipboard, e.generators, c), a = pl(r, t, l, e.generators, n);
    return Q(a, e.cells[0].row, e.cells[0].column);
  }, Ug = (t, e, n, o) => {
    const s = G(t).rows, r = e.cells[0].row, c = s[r], l = Pn(e.clipboard, e.generators, c), a = hl(r, t, l, e.generators, n);
    return Q(a, e.cells[0].row, e.cells[0].column);
  }, Vg = (t, e, n, o) => {
    const s = G(t).rows, r = e.cells[e.cells.length - 1].row + e.cells[e.cells.length - 1].rowspan, c = s[e.cells[0].row], l = Pn(e.clipboard, e.generators, c), a = hl(r, t, l, e.generators, n);
    return Q(a, e.cells[0].row, e.cells[0].column);
  }, qg = (t, e) => {
    const n = $.fromTable(t);
    return _t(n, e).bind((s) => {
      const r = s[s.length - 1], c = s[0].column, l = r.column + r.colspan, a = Qs(S(n.all, (i) => N(i.cells, (u) => u.column >= c && u.column < l)));
      return Zo(a);
    }).getOr("");
  }, Kg = (t, e) => {
    const n = $.fromTable(t);
    return _t(n, e).bind(Zo).getOr("");
  }, Xg = (t, e) => {
    const n = $.fromTable(t);
    return _t(n, e).bind((s) => {
      const r = s[s.length - 1], c = s[0].row, l = r.row + r.rowspan, a = n.all.slice(c, l);
      return bf(a);
    }).getOr("");
  }, ds = (t, e, n, o) => gg(t, e, n, o.sizing), ms = (t, e, n, o) => fg(t, e, n, o.sizing, o.resize), Pl = (t, e) => ct(e, (n) => n.column === 0 && n.isLocked), _l = (t, e) => ct(e, (n) => n.column + n.colspan >= t.grid.columns && n.isLocked), Ll = (t, e) => {
    const n = xo(t), o = de(e);
    return yt(o, (s, r) => {
      const l = n[r.column].map(vo).getOr(0);
      return s + l;
    }, 0);
  }, Al = (t) => (e, n) => _t(e, n).filter((o) => !(t ? Pl : _l)(e, o)).map((o) => ({
    details: o,
    pixelDelta: Ll(e, o)
  })), Yg = (t, e) => Lt(t, e).map((n) => ({
    details: n,
    pixelDelta: -Ll(t, n)
  })), Nl = (t) => (e, n) => ss(e, n).filter((o) => !(t ? Pl : _l)(e, o.cells)), fs = et.transform("th"), _n = et.transform("td"), Jg = F(xg, _t, R, R, et.modification), Qg = F(Og, _t, R, R, et.modification), Zg = F(Dg, Al(!0), ms, R, et.modification), tp = F(Eg, Al(!1), ms, R, et.modification), ep = F(Mg, Yg, ms, Wl, et.modification), np = F(zg, _t, R, Wl, et.modification), op = F(Bg, Lt, R, R, fs), sp = F(Pg, Lt, R, R, _n), rp = F(Lg, Lt, R, R, fs), cp = F(Ag, Lt, R, R, _n), lp = F(Ng, Lt, R, R, _n), ap = F(Wg, Lt, R, R, fs), ip = F(_g, Lt, R, R, _n), up = F(Ig, Wf, ds, R, et.merging), dp = F(Fg, Pf, ds, R, et.merging), mp = F(Hg, Of, ds, R, et.modification), fp = F(jg, Nl(!0), R, R, et.modification), gp = F(Gg, Nl(!1), R, R, et.modification), pp = F(Ug, ss, R, R, et.modification), hp = F(Vg, ss, R, R, et.modification), wp = qg, bp = Kg, Cp = Xg, Ml = (t, e) => t.dispatch("NewRow", { node: e }), zl = (t, e) => t.dispatch("NewCell", { node: e }), Qt = (t, e, n) => {
    t.dispatch("TableModified", {
      ...n,
      table: e
    });
  }, yp = (t, e, n, o, s) => {
    t.dispatch("TableSelectionChange", {
      cells: e,
      start: n,
      finish: o,
      otherCells: s
    });
  }, Sp = (t) => {
    t.dispatch("TableSelectionClear");
  }, Rp = (t, e, n, o, s) => {
    t.dispatch("ObjectResizeStart", {
      target: e,
      width: n,
      height: o,
      origin: s
    });
  }, vp = (t, e, n, o, s) => {
    t.dispatch("ObjectResized", {
      target: e,
      width: n,
      height: o,
      origin: s
    });
  }, Ln = {
    structure: !1,
    style: !0
  }, M = {
    structure: !0,
    style: !1
  }, Tp = {
    structure: !0,
    style: !0
  }, Il = (t, e) => wn(t) ? le.percentageSize(e) : ae(t) ? le.pixelSize(e) : le.getTableSize(e), kp = (t, e, n) => {
    const o = (Y) => B(bn(Y)) === "table", s = (Y) => !o(t) || Qo(Y).rows > 1, r = (Y) => !o(t) || Qo(Y).columns > 1, c = Pc(t), l = Ac(t) ? R : pf, a = (Y) => {
      switch (_c(t)) {
        case "section":
          return Ie.section();
        case "sectionCells":
          return Ie.sectionCells();
        case "cells":
          return Ie.cells();
        default:
          return Ie.getTableSectionType(Y, "section");
      }
    }, i = (Y, Us) => Us.cursor.fold(() => {
      const Je = se(Y);
      return tn(Je).filter(Dt).map(($t) => {
        n.clearSelectedCells(Y.dom);
        const U = t.dom.createRng();
        return U.selectNode($t.dom), t.selection.setRng(U), I($t, "data-mce-selected", "1"), U;
      });
    }, (Je) => {
      const $t = gf(Je), U = t.dom.createRng();
      return U.setStart($t.element.dom, $t.offset), U.setEnd($t.element.dom, $t.offset), t.selection.setRng(U), n.clearSelectedCells(Y.dom), d.some(U);
    }), u = (Y, Us, Je, $t) => (U, Qb, Zb = !1) => {
      Xt(U);
      const tC = b.fromDom(t.getDoc()), eC = Io(Je, tC, c), nC = {
        sizing: Il(t, U),
        resize: Ac(t) ? el() : Jo(),
        section: a(U)
      };
      return Us(U) ? Y(U, Qb, eC, nC).bind((Vs) => {
        e.refresh(U.dom), k(Vs.newRows, (Qe) => {
          Ml(t, Qe.dom);
        }), k(Vs.newCells, (Qe) => {
          zl(t, Qe.dom);
        });
        const oC = i(U, Vs);
        return Dt(U) && (Xt(U), Zb || Qt(t, U.dom, $t)), oC.map((Qe) => ({
          rng: Qe,
          effect: $t
        }));
      }) : d.none();
    }, g = u(np, s, R, M), h = u(ep, r, R, M), p = u(Jg, O, R, M), f = u(Qg, O, R, M), w = u(Zg, O, l, M), m = u(tp, O, l, M), C = u(up, O, R, M), y = u(dp, O, R, M), v = u(fp, O, R, M), E = u(gp, O, R, M), z = u(pp, O, R, M), W = u(hp, O, R, M), nt = u(mp, O, R, Tp), ye = u(ap, O, R, M), js = u(ip, O, R, M), Ja = u(op, O, R, M), Gs = u(sp, O, R, M), x = u(rp, O, R, M), K = u(cp, O, R, M), X = u(lp, O, R, M);
    return {
      deleteRow: g,
      deleteColumn: h,
      insertRowsBefore: p,
      insertRowsAfter: f,
      insertColumnsBefore: w,
      insertColumnsAfter: m,
      mergeCells: C,
      unmergeCells: y,
      pasteColsBefore: v,
      pasteColsAfter: E,
      pasteRowsBefore: z,
      pasteRowsAfter: W,
      pasteCells: nt,
      makeCellsHeader: ye,
      unmakeCellsHeader: js,
      makeColumnsHeader: Ja,
      unmakeColumnsHeader: Gs,
      makeRowsHeader: x,
      makeRowsBody: K,
      makeRowsFooter: X,
      getTableRowType: Cp,
      getTableCellType: bp,
      getTableColType: wp
    };
  }, Fl = (t, e, n) => {
    const o = Et(t, e, 1);
    n === 1 || o <= 1 ? _(t, e) : I(t, e, Math.min(n, o));
  }, Hl = (t, e) => (n) => {
    const o = n.column + n.colspan - 1, s = n.column;
    return o >= t && s < e;
  }, $p = (t, e, n) => {
    if ($.hasColumns(t)) {
      const o = N($.justColumns(t), Hl(e, n)), s = S(o, (c) => {
        const l = ne(c.element);
        return Fl(l, "span", n - e), l;
      }), r = b.fromTag("colgroup");
      return Ot(r, s), [r];
    } else
      return [];
  }, xp = (t, e, n) => S(t.all, (o) => {
    const s = N(o.cells, Hl(e, n)), r = S(s, (l) => {
      const a = ne(l.element);
      return Fl(a, "colspan", n - e), a;
    }), c = b.fromTag("tr");
    return Ot(c, r), c;
  }), Op = (t, e) => {
    const n = $.fromTable(t);
    return Lt(n, e).map((s) => {
      const r = s[s.length - 1], c = s[0].column, l = r.column + r.colspan, a = $p(n, c, l), i = xp(n, c, l);
      return [
        ...a,
        ...i
      ];
    });
  }, Dp = (t, e, n) => {
    const o = $.fromTable(t);
    return _t(o, e).bind((r) => {
      const c = He(o, n, !1), a = G(c).rows.slice(r[0].row, r[r.length - 1].row + r[r.length - 1].rowspan), i = V(a, (g) => {
        const h = N(g.cells, (p) => !p.isLocked);
        return h.length > 0 ? [{
          ...g,
          cells: h
        }] : [];
      }), u = Dn(i);
      return go(u.length > 0, u);
    }).map((r) => Rf(r));
  }, Ge = Jt.generate([
    { invalid: ["raw"] },
    { pixels: ["value"] },
    { percent: ["value"] }
  ]), jl = (t, e, n) => {
    const o = n.substring(0, n.length - t.length), s = parseFloat(o);
    return o === s.toString() ? e(s) : Ge.invalid(n);
  }, Zt = {
    ...Ge,
    from: (t) => an(t, "%") ? jl("%", Ge.percent, t) : an(t, "px") ? jl("px", Ge.pixels, t) : Ge.invalid(t)
  }, Ep = (t, e) => S(t, (n) => Zt.from(n).fold(() => n, (s) => s / e * 100 + "%", (s) => s + "%")), Bp = (t, e, n) => {
    const o = n / e;
    return S(t, (s) => Zt.from(s).fold(() => s, (c) => c * o + "px", (c) => c / 100 * n + "px"));
  }, Wp = (t, e) => {
    const n = t.fold(() => T(""), (o) => {
      const s = o / e;
      return T(s + "px");
    }, () => {
      const o = 100 / e;
      return T(o + "%");
    });
    return mt(e, n);
  }, Pp = (t, e, n) => t.fold(() => e, (o) => Bp(e, n, o), (o) => Ep(e, n)), Gl = (t, e, n) => {
    const o = Zt.from(n), s = ft(t, (r) => r === "0px") ? Wp(o, t.length) : Pp(o, t, e);
    return Ap(s);
  }, gs = (t, e) => t.length === 0 ? e : Ct(t, (n, o) => Zt.from(o).fold(T(0), L, L) + n, 0), _p = (t, e) => {
    const n = Math.floor(t);
    return {
      value: n + e,
      remainder: t - n
    };
  }, Lp = (t, e) => Zt.from(t).fold(T(t), (n) => n + e + "px", (n) => n + e + "%"), Ap = (t) => {
    if (t.length === 0)
      return t;
    const e = Ct(t, (o, s) => {
      const r = Zt.from(s).fold(() => ({
        value: s,
        remainder: 0
      }), (c) => _p(c, "px"), (c) => ({
        value: c + "%",
        remainder: 0
      }));
      return {
        output: [r.value].concat(o.output),
        remainder: o.remainder + r.remainder
      };
    }, {
      output: [],
      remainder: 0
    }), n = e.output;
    return n.slice(0, n.length - 1).concat([Lp(n[n.length - 1], Math.round(e.remainder))]);
  }, Np = Zt.from, Mp = (t, e, n) => {
    k(e, (o) => {
      const s = t.slice(o.column, o.colspan + o.column), r = gs(s, We());
      j(o.element, "width", r + n);
    });
  }, zp = (t, e, n) => {
    k(e, (o, s) => {
      const r = gs([t[s]], We());
      j(o.element, "width", r + n);
    });
  }, Ip = (t, e, n, o) => {
    k(n, (s) => {
      const r = t.slice(s.row, s.rowspan + s.row), c = gs(r, bo());
      j(s.element, "height", c + o);
    }), k(e, (s, r) => {
      j(s.element, "height", t[r]);
    });
  }, Ul = (t) => Np(t).fold(T("px"), T("px"), T("%")), Vl = (t, e, n) => {
    const o = $.fromTable(t), s = o.all, r = $.justCells(o), c = $.justColumns(o);
    e.each((l) => {
      const a = Ul(l), i = Wt(t), u = jd(o, t), g = Gl(u, i, l);
      $.hasColumns(o) ? zp(g, c, a) : Mp(g, r, a), j(t, "width", l);
    }), n.each((l) => {
      const a = Ul(l), i = Oo(t), u = Vd(o, t, Bo), g = Gl(u, i, l);
      Ip(g, s, r, a), j(t, "height", l);
    });
  }, ql = _d, Kl = Ld, Xl = Ad, An = (t) => {
    _(t, "width");
  }, Ue = (t) => {
    const e = bc(t);
    Vl(t, d.some(e), d.none()), An(t);
  }, ps = (t) => {
    const e = Pd(t);
    Vl(t, d.some(e), d.none()), An(t);
  }, Yl = (t) => {
    Mt(t, "width");
    const e = yo(t), n = e.length > 0 ? e : se(t);
    k(n, (o) => {
      Mt(o, "width"), An(o);
    }), An(t);
  }, Fp = {
    styles: {
      "border-collapse": "collapse",
      width: "100%"
    },
    attributes: { border: "1" },
    colGroups: !1
  }, Hp = () => b.fromTag("th"), jp = () => b.fromTag("td"), Gp = () => b.fromTag("col"), Up = (t, e, n, o) => {
    const s = b.fromTag("tr");
    for (let r = 0; r < t; r++) {
      const c = o < e || r < n ? Hp() : jp();
      r < n && I(c, "scope", "row"), o < e && I(c, "scope", "col"), P(c, b.fromTag("br")), P(s, c);
    }
    return s;
  }, Vp = (t) => {
    const e = b.fromTag("colgroup");
    return mt(t, () => P(e, Gp())), e;
  }, Jl = (t, e, n, o) => mt(t, (s) => Up(e, n, o, s)), qp = (t, e, n, o, s, r = Fp) => {
    const c = b.fromTag("table"), l = s !== "cells";
    Be(c, r.styles), ke(c, r.attributes), r.colGroups && P(c, Vp(e));
    const a = Math.min(t, n);
    if (l && n > 0) {
      const p = b.fromTag("thead");
      P(c, p);
      const w = Jl(n, e, s === "sectionCells" ? a : 0, o);
      Ot(p, w);
    }
    const i = b.fromTag("tbody");
    P(c, i);
    const u = l ? t - a : t, h = Jl(u, e, l ? 0 : n, o);
    return Ot(i, h), c;
  }, Kp = (t) => t.dom.innerHTML, Xp = (t) => {
    const e = b.fromTag("div"), n = b.fromDom(t.dom.cloneNode(!0));
    return P(e, n), Kp(e);
  }, Yp = (t, e) => {
    t.selection.select(e.dom, !0), t.selection.collapse(!0);
  }, Jp = (t, e) => {
    Ee(e, "td,th").each(J(Yp, t));
  }, Qp = (t, e) => {
    k(vt(e, "tr"), (n) => {
      Ml(t, n.dom), k(vt(n, "th,td"), (o) => {
        zl(t, o.dom);
      });
    });
  }, Zp = (t) => Re(t) && t.indexOf("%") !== -1, th = (t, e, n, o, s) => {
    const r = Sm(t), c = {
      styles: r,
      attributes: ym(t),
      colGroups: Rm(t)
    };
    return t.undoManager.ignore(() => {
      const l = qp(n, e, s, o, _c(t), c);
      I(l, "data-mce-id", "__mce");
      const a = Xp(l);
      t.insertContent(a), t.addVisual();
    }), Ee(bn(t), 'table[data-mce-id="__mce"]').map((l) => (ae(t) ? ps(l) : Ne(t) ? Yl(l) : (wn(t) || Zp(r.width)) && Ue(l), Xt(l), _(l, "data-mce-id"), Qp(t, l), Jp(t, l), l.dom)).getOrNull();
  }, eh = (t, e, n, o = {}) => {
    const s = (r) => Zn(r) && r > 0;
    if (s(e) && s(n)) {
      const r = o.headerRows || 0, c = o.headerColumns || 0;
      return th(t, n, e, c, r);
    } else
      return console.error("Invalid values for mceInsertTable - rows and columns values are required to insert a table."), null;
  };
  var Nn = tinymce.util.Tools.resolve("tinymce.FakeClipboard");
  const Ql = "x-tinymce/dom-table-", hs = Ql + "rows", ws = Ql + "columns", Zl = (t) => {
    const e = Nn.FakeClipboardItem(t);
    Nn.write([e]);
  }, bs = (t) => {
    var e;
    const n = (e = Nn.read()) !== null && e !== void 0 ? e : [];
    return xt(n, (o) => d.from(o.getType(t)));
  }, ta = (t) => {
    bs(t).isSome() && Nn.clear();
  }, ea = (t) => {
    t.fold(nh, (e) => Zl({ [hs]: e }));
  }, na = () => bs(hs), nh = () => ta(hs), oa = (t) => {
    t.fold(oh, (e) => Zl({ [ws]: e }));
  }, sa = () => bs(ws), oh = () => ta(ws), Cs = (t) => rf(Cn(t), ie(t)).filter(jo), sh = (t) => Yo(Cn(t), ie(t)).filter(jo), rh = (t, e) => {
    const n = ie(t), o = () => Cs(t).each((m) => {
      st(m, n).filter(to(n)).each((C) => {
        const y = b.fromText("");
        if (xe(C, y), Z(C), t.dom.isEmpty(t.getBody()))
          t.setContent(""), t.selection.setCursorLocation();
        else {
          const v = t.dom.createRng();
          v.setStart(y.dom, 0), v.setEnd(y.dom, 0), t.selection.setRng(v), t.nodeChanged();
        }
      });
    }), s = (m) => Cs(t).each((C) => {
      Ne(t) || ae(t) || wn(t) || st(C, n).each((v) => {
        m === "relative" && !ql(v) ? Ue(v) : m === "fixed" && !Kl(v) ? ps(v) : m === "responsive" && !Xl(v) && Yl(v), Xt(v), Qt(t, v.dom, M);
      });
    }), r = (m) => st(m, n), c = (m) => sh(t).bind((C) => r(C).map((y) => m(y, C))), l = (m, C) => {
      c((y) => {
        t.formatter.toggle("tableclass", { value: C }, y.dom), Qt(t, y.dom, Ln);
      });
    }, a = (m, C) => {
      c((y) => {
        const v = Tt(t), z = ft(v, (W) => t.formatter.match("tablecellclass", { value: C }, W.dom)) ? t.formatter.remove : t.formatter.apply;
        k(v, (W) => z("tablecellclass", { value: C }, W.dom)), Qt(t, y.dom, Ln);
      });
    }, i = () => {
      Cs(t).each((m) => {
        st(m, n).each((C) => {
          mo(C, "caption").fold(() => {
            const y = b.fromTag("caption");
            P(y, b.fromText("Caption")), ji(C, y, 0), t.selection.setCursorLocation(y.dom, 0);
          }, (y) => {
            at("caption")(m) && fr("td", C).each((v) => t.selection.setCursorLocation(v.dom, 0)), Z(y);
          }), Qt(t, C.dom, M);
        });
      });
    }, u = (m) => {
      t.focus();
    }, g = (m, C = !1) => c((y, v) => {
      const E = Tn(Tt(t), y, v);
      m(y, E, C).each(u);
    }), h = () => c((m, C) => {
      const y = Tn(Tt(t), m, C), v = Io(R, b.fromDom(t.getDoc()), d.none());
      return Dp(m, y, v);
    }), p = () => c((m, C) => {
      const y = Tn(Tt(t), m, C);
      return Op(m, y);
    }), f = (m, C) => C().each((y) => {
      const v = S(y, (E) => ne(E));
      c((E, z) => {
        const W = Ec(b.fromDom(t.getDoc())), nt = of(Tt(t), z, v, W);
        m(E, nt).each(u);
      });
    }), w = (m) => (C, y) => yi(y, "type").each((v) => {
      g(m(v), y.no_events);
    });
    lt({
      mceTableSplitCells: () => g(e.unmergeCells),
      mceTableMergeCells: () => g(e.mergeCells),
      mceTableInsertRowBefore: () => g(e.insertRowsBefore),
      mceTableInsertRowAfter: () => g(e.insertRowsAfter),
      mceTableInsertColBefore: () => g(e.insertColumnsBefore),
      mceTableInsertColAfter: () => g(e.insertColumnsAfter),
      mceTableDeleteCol: () => g(e.deleteColumn),
      mceTableDeleteRow: () => g(e.deleteRow),
      mceTableCutCol: () => p().each((m) => {
        oa(m), g(e.deleteColumn);
      }),
      mceTableCutRow: () => h().each((m) => {
        ea(m), g(e.deleteRow);
      }),
      mceTableCopyCol: () => p().each((m) => oa(m)),
      mceTableCopyRow: () => h().each((m) => ea(m)),
      mceTablePasteColBefore: () => f(e.pasteColsBefore, sa),
      mceTablePasteColAfter: () => f(e.pasteColsAfter, sa),
      mceTablePasteRowBefore: () => f(e.pasteRowsBefore, na),
      mceTablePasteRowAfter: () => f(e.pasteRowsAfter, na),
      mceTableDelete: o,
      mceTableCellToggleClass: a,
      mceTableToggleClass: l,
      mceTableToggleCaption: i,
      mceTableSizingMode: (m, C) => s(C),
      mceTableCellType: w((m) => m === "th" ? e.makeCellsHeader : e.unmakeCellsHeader),
      mceTableColType: w((m) => m === "th" ? e.makeColumnsHeader : e.unmakeColumnsHeader),
      mceTableRowType: w((m) => {
        switch (m) {
          case "header":
            return e.makeRowsHeader;
          case "footer":
            return e.makeRowsFooter;
          default:
            return e.makeRowsBody;
        }
      })
    }, (m, C) => t.addCommand(C, m)), t.addCommand("mceInsertTable", (m, C) => {
      eh(t, C.rows, C.columns, C.options);
    }), t.addCommand("mceTableApplyCellStyle", (m, C) => {
      const y = (z) => "tablecell" + z.toLowerCase().replace("-", "");
      if (!Ks(C))
        return;
      const v = N(Tt(t), jo);
      if (v.length === 0)
        return;
      const E = Ci(C, (z, W) => t.formatter.has(y(W)) && Re(z));
      Ri(E) || (lt(E, (z, W) => {
        const nt = y(W);
        k(v, (ye) => {
          z === "" ? t.formatter.remove(nt, { value: null }, ye.dom, !0) : t.formatter.apply(nt, { value: z }, ye.dom);
        });
      }), r(v[0]).each((z) => Qt(t, z.dom, Ln)));
    });
  }, ch = (t, e) => {
    const n = ie(t), o = (s) => Yo(Cn(t)).bind((r) => st(r, n).map((c) => {
      const l = Tn(Tt(t), c, r);
      return s(c, l);
    })).getOr("");
    lt({
      mceTableRowType: () => o(e.getTableRowType),
      mceTableCellType: () => o(e.getTableCellType),
      mceTableColType: () => o(e.getTableColType)
    }, (s, r) => t.addQueryValueHandler(r, s));
  }, ys = Jt.generate([
    { before: ["element"] },
    {
      on: [
        "element",
        "offset"
      ]
    },
    { after: ["element"] }
  ]), lh = (t, e, n, o) => t.fold(e, n, o), ah = (t) => t.fold(L, L, L), ih = ys.before, uh = ys.on, dh = ys.after, q = {
    before: ih,
    on: uh,
    after: dh,
    cata: lh,
    getStart: ah
  }, me = { create: (t, e) => ({
    selection: t,
    kill: e
  }) }, mh = (t, e) => {
    const n = t.document.createRange();
    return n.selectNode(e.dom), n;
  }, fh = (t, e) => {
    const n = t.document.createRange();
    return gh(n, e), n;
  }, gh = (t, e) => t.selectNodeContents(e.dom), ph = (t, e) => {
    e.fold((n) => {
      t.setStartBefore(n.dom);
    }, (n, o) => {
      t.setStart(n.dom, o);
    }, (n) => {
      t.setStartAfter(n.dom);
    });
  }, hh = (t, e) => {
    e.fold((n) => {
      t.setEndBefore(n.dom);
    }, (n, o) => {
      t.setEnd(n.dom, o);
    }, (n) => {
      t.setEndAfter(n.dom);
    });
  }, ra = (t, e, n) => {
    const o = t.document.createRange();
    return ph(o, e), hh(o, n), o;
  }, Ss = (t, e, n, o, s) => {
    const r = t.document.createRange();
    return r.setStart(e.dom, n), r.setEnd(o.dom, s), r;
  }, wh = (t) => ({
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom,
    width: t.width,
    height: t.height
  }), bh = (t) => {
    const e = t.getClientRects(), n = e.length > 0 ? e[0] : t.getBoundingClientRect();
    return n.width > 0 || n.height > 0 ? d.some(n).map(wh) : d.none();
  }, Ve = Jt.generate([
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
  ]), ca = (t, e, n) => e(b.fromDom(n.startContainer), n.startOffset, b.fromDom(n.endContainer), n.endOffset), Ch = (t, e) => e.match({
    domRange: (n) => ({
      ltr: T(n),
      rtl: d.none
    }),
    relative: (n, o) => ({
      ltr: Pe(() => ra(t, n, o)),
      rtl: Pe(() => d.some(ra(t, o, n)))
    }),
    exact: (n, o, s, r) => ({
      ltr: Pe(() => Ss(t, n, o, s, r)),
      rtl: Pe(() => d.some(Ss(t, s, r, n, o)))
    })
  }), yh = (t, e) => {
    const n = e.ltr();
    return n.collapsed ? e.rtl().filter((s) => s.collapsed === !1).map((s) => Ve.rtl(b.fromDom(s.endContainer), s.endOffset, b.fromDom(s.startContainer), s.startOffset)).getOrThunk(() => ca(t, Ve.ltr, n)) : ca(t, Ve.ltr, n);
  }, la = (t, e) => {
    const n = Ch(t, e);
    return yh(t, n);
  }, Rs = (t, e) => la(t, e).match({
    ltr: (o, s, r, c) => {
      const l = t.document.createRange();
      return l.setStart(o.dom, s), l.setEnd(r.dom, c), l;
    },
    rtl: (o, s, r, c) => {
      const l = t.document.createRange();
      return l.setStart(r.dom, c), l.setEnd(o.dom, s), l;
    }
  });
  Ve.ltr, Ve.rtl;
  const qe = { create: (t, e, n, o) => ({
    start: t,
    soffset: e,
    finish: n,
    foffset: o
  }) }, aa = { create: (t, e, n, o) => ({
    start: q.on(t, e),
    finish: q.on(n, o)
  }) }, ia = (t, e) => {
    const n = Rs(t, e);
    return qe.create(b.fromDom(n.startContainer), n.startOffset, b.fromDom(n.endContainer), n.endOffset);
  }, Mn = aa.create, Sh = (t, e, n, o, s, r, c) => D(n, s) && o === r ? d.none() : H(n, "td,th", e).bind((l) => H(s, "td,th", e).bind((a) => ua(t, e, l, a, c))), ua = (t, e, n, o, s) => D(n, o) ? d.none() : Rn(n, o, e).bind((r) => {
    const c = r.boxes.getOr([]);
    return c.length > 1 ? (s(t, c, r.start, r.finish), d.some(me.create(d.some(Mn(n, 0, n, zt(n))), !0))) : d.none();
  }), Rh = (t, e, n, o, s) => {
    const r = (c) => (s.clearBeforeUpdate(n), s.selectRange(n, c.boxes, c.start, c.finish), c.boxes);
    return qm(o, t, e, s.firstSelectedSelector, s.lastSelectedSelector).map(r);
  }, vs = (t, e) => ({
    item: t,
    mode: e
  }), da = (t, e, n, o = fe) => t.property().parent(e).map((s) => vs(s, o)), fe = (t, e, n, o = Ke) => n.sibling(t, e).map((s) => vs(s, o)), Ke = (t, e, n, o = Ke) => {
    const s = t.property().children(e);
    return n.first(s).map((c) => vs(c, o));
  }, vh = [
    {
      current: da,
      next: fe,
      fallback: d.none()
    },
    {
      current: fe,
      next: Ke,
      fallback: d.some(da)
    },
    {
      current: Ke,
      next: Ke,
      fallback: d.some(fe)
    }
  ], ma = (t, e, n, o, s = vh) => St(s, (c) => c.current === n).bind((c) => c.current(t, e, o, c.next).orThunk(() => c.fallback.bind((l) => ma(t, e, l, o)))), fa = {
    left: () => ({
      sibling: (n, o) => n.query().prevSibling(o),
      first: (n) => n.length > 0 ? d.some(n[n.length - 1]) : d.none()
    }),
    right: () => ({
      sibling: (n, o) => n.query().nextSibling(o),
      first: (n) => n.length > 0 ? d.some(n[0]) : d.none()
    })
  }, Ts = (t, e, n, o, s, r) => ma(t, e, o, s).bind((l) => r(l.item) ? d.none() : n(l.item) ? d.some(l.item) : Ts(t, l.item, n, l.mode, s, r)), Th = (t, e, n, o) => Ts(t, e, n, fe, fa.left(), o), kh = (t, e, n, o) => Ts(t, e, n, fe, fa.right(), o), ga = (t) => (e) => t.property().children(e).length === 0, $h = (t, e, n) => pa(t, e, ga(t), n), xh = (t, e, n) => ha(t, e, ga(t), n), pa = Th, ha = kh, zn = Sn(), wa = (t, e) => $h(zn, t, e), ba = (t, e) => xh(zn, t, e), Oh = (t, e, n) => pa(zn, t, e, n), Dh = (t, e, n) => ha(zn, t, e, n), Eh = (t, e, n) => De(t, e, n).isSome(), In = Jt.generate([
    { none: ["message"] },
    { success: [] },
    { failedUp: ["cell"] },
    { failedDown: ["cell"] }
  ]), Bh = (t, e, n) => {
    const o = t.getRect(e), s = t.getRect(n);
    return s.right > o.left && s.left < o.right;
  }, Wh = (t) => H(t, "tr"), ge = {
    ...In,
    verify: (t, e, n, o, s, r, c) => H(o, "td,th", c).bind((l) => H(e, "td,th", c).map((a) => D(l, a) ? D(o, l) && zt(l) === s ? r(a) : In.none("in same cell") : Uo(Wh, [
      l,
      a
    ]).fold(() => Bh(t, a, l) ? In.success() : r(a), (i) => r(a)))).getOr(In.none("default")),
    cata: (t, e, n, o, s) => t.fold(e, n, o, s)
  }, Ph = (t, e, n, o) => ({
    parent: t,
    children: e,
    element: n,
    index: o
  }), _h = (t) => jt(t).bind((e) => {
    const n = ut(e);
    return Lh(n, t).map((o) => Ph(e, n, t, o));
  }), Lh = (t, e) => eo(t, J(D, e)), ks = at("br"), $s = (t, e, n) => e(t, n).bind((o) => Ft(o) && No(o).trim().length === 0 ? $s(o, e, n) : d.some(o)), Ah = (t, e, n) => n.traverse(e).orThunk(() => $s(e, n.gather, t)).map(n.relative), Nh = (t, e) => rn(t, e).filter(ks).orThunk(() => rn(t, e - 1).filter(ks)), Mh = (t, e, n, o) => Nh(e, n).bind((s) => o.traverse(s).fold(() => $s(s, o.gather, t).map(o.relative), (r) => _h(r).map((c) => q.on(c.parent, c.index)))), zh = (t, e, n, o) => (ks(e) ? Ah(t, e, o) : Mh(t, e, n, o)).map((r) => ({
    start: r,
    finish: r
  })), Ih = (t) => ge.cata(t, (e) => d.none(), () => d.none(), (e) => d.some(ze(e, 0)), (e) => d.some(ze(e, zt(e)))), Fn = (t, e) => ({
    left: t.left,
    top: t.top + e,
    right: t.right,
    bottom: t.bottom + e
  }), Hn = (t, e) => ({
    left: t.left,
    top: t.top - e,
    right: t.right,
    bottom: t.bottom - e
  }), Ca = (t, e, n) => ({
    left: t.left + e,
    top: t.top + n,
    right: t.right + e,
    bottom: t.bottom + n
  }), Fh = (t) => t.top, Hh = (t) => t.bottom, jh = (t, e, n) => n >= 0 && n < zt(e) ? t.getRangedRect(e, n, e, n + 1) : n > 0 ? t.getRangedRect(e, n - 1, e, n) : d.none(), jn = (t) => ({
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom
  }), ya = (t, e) => d.some(t.getRect(e)), Sa = (t, e, n) => Rt(e) ? ya(t, e).map(jn) : Ft(e) ? jh(t, e, n).map(jn) : d.none(), Ra = (t, e) => Rt(e) ? ya(t, e).map(jn) : Ft(e) ? t.getRangedRect(e, 0, e, zt(e)).map(jn) : d.none(), te = 5, Gh = 100, kt = Jt.generate([
    { none: [] },
    { retry: ["caret"] }
  ]), Uh = (t, e) => t.left < e.left || Math.abs(e.right - t.left) < 1 || t.left > e.right, va = (t, e, n) => uo(e, is).fold(bt, (o) => Ra(t, o).exists((s) => Uh(n, s))), Vh = (t, e, n, o, s) => {
    const r = Fn(s, te);
    return Math.abs(n.bottom - o.bottom) < 1 || n.top > s.bottom ? kt.retry(r) : n.top === s.bottom ? kt.retry(Fn(s, 1)) : va(t, e, s) ? kt.retry(Ca(r, te, 0)) : kt.none();
  }, qh = {
    point: Fh,
    adjuster: (t, e, n, o, s) => {
      const r = Hn(s, te);
      return Math.abs(n.top - o.top) < 1 || n.bottom < s.top ? kt.retry(r) : n.bottom === s.top ? kt.retry(Hn(s, 1)) : va(t, e, s) ? kt.retry(Ca(r, te, 0)) : kt.none();
    },
    move: Hn,
    gather: wa
  }, Kh = {
    point: Hh,
    adjuster: Vh,
    move: Fn,
    gather: ba
  }, Xh = (t, e, n) => t.elementFromPoint(e, n).filter((o) => B(o) === "table").isSome(), Yh = (t, e, n, o, s) => xs(t, e, n, e.move(o, te), s), xs = (t, e, n, o, s) => s === 0 ? d.some(o) : Xh(t, o.left, e.point(o)) ? Yh(t, e, n, o, s - 1) : t.situsFromPoint(o.left, e.point(o)).bind((r) => r.start.fold(d.none, (c) => Ra(t, c).bind((l) => e.adjuster(t, c, l, n, o).fold(d.none, (a) => xs(t, e, n, a, s - 1))).orThunk(() => d.some(o)), d.none)), Jh = (t, e, n) => t.point(e) > n.getInnerHeight() ? d.some(t.point(e) - n.getInnerHeight()) : t.point(e) < 0 ? d.some(-t.point(e)) : d.none(), Ta = (t, e, n) => {
    const o = t.move(n, te), s = xs(e, t, n, o, Gh).getOr(o);
    return Jh(t, s, e).fold(() => e.situsFromPoint(s.left, t.point(s)), (r) => (e.scrollBy(0, r), e.situsFromPoint(s.left, t.point(s) - r)));
  }, Os = {
    tryUp: J(Ta, qh),
    tryDown: J(Ta, Kh),
    getJumpSize: T(te)
  }, Qh = 20, Zh = (t, e, n) => t.getSelection().bind((o) => zh(e, o.finish, o.foffset, n).fold(() => d.some(ze(o.finish, o.foffset)), (s) => {
    const r = t.fromSitus(s), c = ge.verify(t, o.finish, o.foffset, r.finish, r.foffset, n.failure, e);
    return Ih(c);
  })), Ds = (t, e, n, o, s, r) => r === 0 ? d.none() : tw(t, e, n, o, s).bind((c) => {
    const l = t.fromSitus(c), a = ge.verify(t, n, o, l.finish, l.foffset, s.failure, e);
    return ge.cata(a, () => d.none(), () => d.some(c), (i) => D(n, i) && o === 0 ? ka(t, n, o, Hn, s) : Ds(t, e, i, 0, s, r - 1), (i) => D(n, i) && o === zt(i) ? ka(t, n, o, Fn, s) : Ds(t, e, i, zt(i), s, r - 1));
  }), ka = (t, e, n, o, s) => Sa(t, e, n).bind((r) => $a(t, s, o(r, Os.getJumpSize()))), $a = (t, e, n) => {
    const o = Gr().browser;
    return o.isChromium() || o.isSafari() || o.isFirefox() ? e.retry(t, n) : d.none();
  }, tw = (t, e, n, o, s) => Sa(t, n, o).bind((r) => $a(t, s, r)), ew = (t, e, n) => Zh(t, e, n).bind((o) => Ds(t, e, o.element, o.offset, n, Qh).map(t.fromSitus)), nw = (t, e) => Eh(t, (n) => jt(n).exists((o) => D(o, e))), xa = (t, e, n, o, s) => H(o, "td,th", e).bind((r) => H(r, "table", e).bind((c) => nw(s, c) ? ew(t, e, n).bind((l) => H(l.finish, "td,th", e).map((a) => ({
    start: r,
    finish: a,
    range: l
  }))) : d.none())), Oa = (t, e, n, o, s, r) => r(o, e).orThunk(() => xa(t, e, n, o, s).map((c) => {
    const l = c.range;
    return me.create(d.some(Mn(l.start, l.soffset, l.finish, l.foffset)), !0);
  })), ow = (t, e) => H(t, "tr", e).bind((n) => H(n, "table", e).bind((o) => {
    const s = vt(o, "tr");
    return D(n, s[0]) ? Oh(o, (r) => xc(r).isSome(), e).map((r) => {
      const c = zt(r);
      return me.create(d.some(Mn(r, c, r, c)), !0);
    }) : d.none();
  })), sw = (t, e) => H(t, "tr", e).bind((n) => H(n, "table", e).bind((o) => {
    const s = vt(o, "tr");
    return D(n, s[s.length - 1]) ? Dh(o, (r) => $c(r).isSome(), e).map((r) => me.create(d.some(Mn(r, 0, r, 0)), !0)) : d.none();
  })), Da = (t, e, n, o, s, r, c) => xa(t, n, o, s, r).bind((l) => ua(e, n, l.start, l.finish, c)), Es = (t) => {
    let e = t;
    return {
      get: () => e,
      set: (s) => {
        e = s;
      }
    };
  }, rw = (t) => {
    const e = Es(d.none()), n = () => e.get().each(t);
    return {
      clear: () => {
        n(), e.set(d.none());
      },
      isSet: () => e.get().isSome(),
      get: () => e.get(),
      set: (l) => {
        n(), e.set(d.some(l));
      }
    };
  }, Gn = () => {
    const t = rw(R);
    return {
      ...t,
      on: (n) => t.get().each(n)
    };
  }, Ea = (t, e) => H(t, "td,th", e), cw = (t) => gr(t).exists(Me), lw = (t, e, n, o) => {
    const s = Gn(), r = s.clear, c = (u) => {
      s.on((g) => {
        o.clearBeforeUpdate(e), Ea(u.target, n).each((h) => {
          Rn(g, h, n).each((p) => {
            const f = p.boxes.getOr([]);
            if (f.length === 1) {
              const w = f[0], m = zc(w) === "false", C = fo(Mc(u.target), w, D);
              m && C && (o.selectRange(e, f, w, w), t.selectContents(w));
            } else f.length > 1 && (o.selectRange(e, f, p.start, p.finish), t.selectContents(h));
          });
        });
      });
    };
    return {
      clearstate: r,
      mousedown: (u) => {
        o.clear(e), Ea(u.target, n).filter(cw).each(s.set);
      },
      mouseover: (u) => {
        c(u);
      },
      mouseup: (u) => {
        c(u), r();
      }
    };
  }, Ba = {
    traverse: sn,
    gather: ba,
    relative: q.before,
    retry: Os.tryDown,
    failure: ge.failedDown
  }, Wa = {
    traverse: hr,
    gather: wa,
    relative: q.before,
    retry: Os.tryUp,
    failure: ge.failedUp
  }, pe = (t) => (e) => e === t, Bs = pe(38), Un = pe(40), he = (t) => t >= 37 && t <= 40, aw = {
    isBackward: pe(37),
    isForward: pe(39)
  }, iw = {
    isBackward: pe(39),
    isForward: pe(37)
  }, uw = (t) => {
    const e = t !== void 0 ? t.dom : document, n = e.body.scrollLeft || e.documentElement.scrollLeft, o = e.body.scrollTop || e.documentElement.scrollTop;
    return Pt(n, o);
  }, dw = (t, e, n) => {
    const s = (n !== void 0 ? n.dom : document).defaultView;
    s && s.scrollBy(t, e);
  }, Vn = Jt.generate([
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
  ]), mw = (t) => Vn.exact(t.start, t.soffset, t.finish, t.foffset), fw = (t) => t.match({
    domRange: (e) => b.fromDom(e.startContainer),
    relative: (e, n) => q.getStart(e),
    exact: (e, n, o, s) => e
  }), gw = Vn.domRange, pw = Vn.relative, hw = Vn.exact, ww = (t) => {
    const e = fw(t);
    return Fi(e);
  }, bw = qe.create, we = {
    domRange: gw,
    relative: pw,
    exact: hw,
    exactFromRange: mw,
    getWin: ww,
    range: bw
  }, Cw = (t, e, n) => {
    var o, s;
    return d.from((s = (o = t.dom).caretPositionFromPoint) === null || s === void 0 ? void 0 : s.call(o, e, n)).bind((r) => {
      if (r.offsetNode === null)
        return d.none();
      const c = t.dom.createRange();
      return c.setStart(r.offsetNode, r.offset), c.collapse(), d.some(c);
    });
  }, yw = (t, e, n) => {
    var o, s;
    return d.from((s = (o = t.dom).caretRangeFromPoint) === null || s === void 0 ? void 0 : s.call(o, e, n));
  }, Sw = document.caretPositionFromPoint ? Cw : document.caretRangeFromPoint ? yw : d.none, Rw = (t, e, n) => {
    const o = b.fromDom(t.document);
    return Sw(o, e, n).map((s) => qe.create(b.fromDom(s.startContainer), s.startOffset, b.fromDom(s.endContainer), s.endOffset));
  }, qn = (t, e) => {
    const n = B(t);
    return n === "input" ? q.after(t) : A([
      "br",
      "img"
    ], n) ? e === 0 ? q.before(t) : q.after(t) : q.on(t, e);
  }, vw = (t, e) => {
    const n = t.fold(q.before, qn, q.after), o = e.fold(q.before, qn, q.after);
    return we.relative(n, o);
  }, Tw = (t, e, n, o) => {
    const s = qn(t, e), r = qn(n, o);
    return we.relative(s, r);
  }, kw = (t, e, n, o) => {
    const r = nn(t).dom.createRange();
    return r.setStart(t.dom, e), r.setEnd(n.dom, o), r;
  }, $w = (t, e, n, o) => {
    const s = kw(t, e, n, o), r = D(t, n) && e === o;
    return s.collapsed && !r;
  }, Kn = (t) => d.from(t.getSelection()), Pa = (t, e) => {
    Kn(t).each((n) => {
      n.removeAllRanges(), n.addRange(e);
    });
  }, Ws = (t, e, n, o, s) => {
    const r = Ss(t, e, n, o, s);
    Pa(t, r);
  }, xw = (t, e, n, o, s, r) => {
    e.collapse(n.dom, o), e.extend(s.dom, r);
  }, _a = (t, e) => la(t, e).match({
    ltr: (n, o, s, r) => {
      Ws(t, n, o, s, r);
    },
    rtl: (n, o, s, r) => {
      Kn(t).each((c) => {
        if (c.setBaseAndExtent)
          c.setBaseAndExtent(n.dom, o, s.dom, r);
        else if (c.extend)
          try {
            xw(t, c, n, o, s, r);
          } catch {
            Ws(t, s, r, n, o);
          }
        else
          Ws(t, s, r, n, o);
      });
    }
  }), La = (t, e, n, o, s) => {
    const r = Tw(e, n, o, s);
    _a(t, r);
  }, Aa = (t, e, n) => {
    const o = vw(e, n);
    _a(t, o);
  }, Na = (t) => {
    if (t.rangeCount > 0) {
      const e = t.getRangeAt(0), n = t.getRangeAt(t.rangeCount - 1);
      return d.some(qe.create(b.fromDom(e.startContainer), e.startOffset, b.fromDom(n.endContainer), n.endOffset));
    } else
      return d.none();
  }, Ow = (t) => {
    if (t.anchorNode === null || t.focusNode === null)
      return Na(t);
    {
      const e = b.fromDom(t.anchorNode), n = b.fromDom(t.focusNode);
      return $w(e, t.anchorOffset, n, t.focusOffset) ? d.some(qe.create(e, t.anchorOffset, n, t.focusOffset)) : Na(t);
    }
  }, Ma = (t, e, n = !0) => {
    const s = (n ? fh : mh)(t, e);
    Pa(t, s);
  }, Dw = (t) => Kn(t).filter((e) => e.rangeCount > 0).bind(Ow), za = (t) => Dw(t).map((e) => we.exact(e.start, e.soffset, e.finish, e.foffset)), Ew = (t, e) => {
    const n = Rs(t, e);
    return bh(n);
  }, Bw = (t, e, n) => Rw(t, e, n), Ww = (t) => {
    Kn(t).each((e) => e.removeAllRanges());
  }, Ps = (t) => ({
    elementFromPoint: (m, C) => b.fromPoint(b.fromDom(t.document), m, C),
    getRect: (m) => m.dom.getBoundingClientRect(),
    getRangedRect: (m, C, y, v) => {
      const E = we.exact(m, C, y, v);
      return Ew(t, E);
    },
    getSelection: () => za(t).map((m) => ia(t, m)),
    fromSitus: (m) => {
      const C = we.relative(m.start, m.finish);
      return ia(t, C);
    },
    situsFromPoint: (m, C) => Bw(t, m, C).map((y) => aa.create(y.start, y.soffset, y.finish, y.foffset)),
    clearSelection: () => {
      Ww(t);
    },
    collapseSelection: (m = !1) => {
      za(t).each((C) => C.fold((y) => y.collapse(m), (y, v) => {
        const E = m ? y : v;
        Aa(t, E, E);
      }, (y, v, E, z) => {
        const W = m ? y : E, nt = m ? v : z;
        La(t, W, nt, W, nt);
      }));
    },
    setSelection: (m) => {
      La(t, m.start, m.soffset, m.finish, m.foffset);
    },
    setRelativeSelection: (m, C) => {
      Aa(t, m, C);
    },
    selectNode: (m) => {
      Ma(t, m, !1);
    },
    selectContents: (m) => {
      Ma(t, m);
    },
    getInnerHeight: () => t.innerHeight,
    getScrollY: () => uw(b.fromDom(t.document)).top,
    scrollBy: (m, C) => {
      dw(m, C, b.fromDom(t.document));
    }
  }), be = (t, e) => ({
    rows: t,
    cols: e
  }), Pw = (t, e, n, o) => {
    const s = Ps(t), r = lw(s, e, n, o);
    return {
      clearstate: r.clearstate,
      mousedown: r.mousedown,
      mouseover: r.mouseover,
      mouseup: r.mouseup
    };
  }, Ia = (t) => uo(t, ir).exists(Me), _s = (t, e) => Ia(t) || Ia(e), _w = (t, e, n, o) => {
    const s = Ps(t), r = () => (o.clear(e), d.none());
    return {
      keydown: (a, i, u, g, h, p) => {
        const f = a.raw, w = f.which, m = f.shiftKey === !0;
        return qo(e, o.selectedSelector).fold(() => (he(w) && !m && o.clearBeforeUpdate(e), he(w) && m && !_s(i, g) ? d.none : Un(w) && m ? J(Da, s, e, n, Ba, g, i, o.selectRange) : Bs(w) && m ? J(Da, s, e, n, Wa, g, i, o.selectRange) : Un(w) ? J(Oa, s, n, Ba, g, i, sw) : Bs(w) ? J(Oa, s, n, Wa, g, i, ow) : d.none), (y) => {
          const v = (E) => () => xt(E, (W) => Rh(W.rows, W.cols, e, y, o)).fold(() => Vc(e, o.firstSelectedSelector, o.lastSelectedSelector).map((W) => {
            const nt = Un(w) || p.isForward(w) ? q.after : q.before;
            return s.setRelativeSelection(q.on(W.first, 0), nt(W.table)), o.clear(e), me.create(d.none(), !0);
          }), (W) => d.some(me.create(d.none(), !0)));
          return he(w) && m && !_s(i, g) ? d.none : Un(w) && m ? v([be(1, 0)]) : Bs(w) && m ? v([be(-1, 0)]) : p.isBackward(w) && m ? v([
            be(0, -1),
            be(-1, 0)
          ]) : p.isForward(w) && m ? v([
            be(0, 1),
            be(1, 0)
          ]) : he(w) && !m ? r : d.none;
        })();
      },
      keyup: (a, i, u, g, h) => qo(e, o.selectedSelector).fold(() => {
        const p = a.raw, f = p.which;
        return p.shiftKey === !0 && he(f) && _s(i, g) ? Sh(e, n, i, u, g, h, o.selectRange) : d.none();
      }, d.none)
    };
  }, Lw = (t, e, n, o) => {
    const s = Ps(t);
    return (r, c) => {
      o.clearBeforeUpdate(e), Rn(r, c, n).each((l) => {
        const a = l.boxes.getOr([]);
        o.selectRange(e, a, l.start, l.finish), s.selectContents(c), s.collapseSelection();
      });
    };
  }, Ls = (t, e) => {
    const n = Ht(t, e);
    return n === void 0 || n === "" ? [] : n.split(" ");
  }, Aw = (t, e, n) => {
    const s = Ls(t, e).concat([n]);
    return I(t, e, s.join(" ")), !0;
  }, Nw = (t, e, n) => {
    const o = N(Ls(t, e), (s) => s !== n);
    return o.length > 0 ? I(t, e, o.join(" ")) : _(t, e), !1;
  }, Xn = (t) => t.dom.classList !== void 0, Mw = (t) => Ls(t, "class"), zw = (t, e) => Aw(t, "class", e), Iw = (t, e) => Nw(t, "class", e), At = (t, e) => {
    Xn(t) ? t.dom.classList.add(e) : zw(t, e);
  }, Fw = (t) => {
    (Xn(t) ? t.dom.classList : Mw(t)).length === 0 && _(t, "class");
  }, Hw = (t, e) => {
    Xn(t) ? t.dom.classList.remove(e) : Iw(t, e), Fw(t);
  }, As = (t, e) => Xn(t) && t.dom.classList.contains(e), jw = (t, e) => {
    k(e, (n) => {
      Hw(t, n);
    });
  }, Gw = (t) => (e) => {
    At(e, t);
  }, Uw = (t) => (e) => {
    jw(e, t);
  }, Vw = {
    byClass: (t) => {
      const e = Gw(t.selected), n = Uw([
        t.selected,
        t.lastSelected,
        t.firstSelected
      ]), o = (r) => {
        const c = vt(r, t.selectedSelector);
        k(c, n);
      };
      return {
        clearBeforeUpdate: o,
        clear: o,
        selectRange: (r, c, l, a) => {
          o(r), k(c, e), At(l, t.firstSelected), At(a, t.lastSelected);
        },
        selectedSelector: t.selectedSelector,
        firstSelectedSelector: t.firstSelectedSelector,
        lastSelectedSelector: t.lastSelectedSelector
      };
    },
    byAttr: (t, e, n) => {
      const o = (a) => {
        _(a, t.selected), _(a, t.firstSelected), _(a, t.lastSelected);
      }, s = (a) => {
        I(a, t.selected, "1");
      }, r = (a) => {
        c(a), n();
      }, c = (a) => {
        const i = vt(a, `${t.selectedSelector},${t.firstSelectedSelector},${t.lastSelectedSelector}`);
        k(i, o);
      };
      return {
        clearBeforeUpdate: c,
        clear: r,
        selectRange: (a, i, u, g) => {
          r(a), k(i, s), I(u, t.firstSelected, "1"), I(g, t.lastSelected, "1"), e(i, u, g);
        },
        selectedSelector: t.selectedSelector,
        firstSelectedSelector: t.firstSelectedSelector,
        lastSelectedSelector: t.lastSelectedSelector
      };
    }
  }, qw = (t, e, n, o) => {
    switch (t.tag) {
      case "none":
        return e();
      case "single":
        return o(t.element);
      case "multiple":
        return n(t.elements);
    }
  }, Kw = () => ({ tag: "none" }), Xw = (t) => ({
    tag: "multiple",
    elements: t
  }), Yw = (t) => ({
    tag: "single",
    element: t
  }), Jw = (t, e, n) => ({ get: () => qc(t(), n).fold(() => e().fold(Kw, Yw), Xw) }), Qw = (t, e) => {
    const n = t.slice(0, e[e.length - 1].row + 1), o = Dn(n);
    return V(o, (s) => {
      const r = s.cells.slice(0, e[e.length - 1].column + 1);
      return S(r, (c) => c.element);
    });
  }, Zw = (t, e) => {
    const n = t.slice(e[0].row + e[0].rowspan - 1, t.length), o = Dn(n);
    return V(o, (s) => {
      const r = s.cells.slice(e[0].column + e[0].colspan - 1, s.cells.length);
      return S(r, (c) => c.element);
    });
  }, tb = (t, e, n) => {
    const o = $.fromTable(t);
    return _t(o, e).map((r) => {
      const c = He(o, n, !1), { rows: l } = G(c), a = Qw(l, r), i = Zw(l, r);
      return {
        upOrLeftCells: a,
        downOrRightCells: i
      };
    });
  }, eb = (t, e, n, o, s, r, c) => ({
    target: t,
    x: e,
    y: n,
    stop: o,
    prevent: s,
    kill: r,
    raw: c
  }), Fa = (t) => {
    const e = b.fromDom(iu(t).getOr(t.target)), n = () => t.stopPropagation(), o = () => t.preventDefault(), s = ri(o, n);
    return eb(e, t.clientX, t.clientY, n, o, s, t);
  }, nb = (t, e) => (n) => {
    t(n) && e(Fa(n));
  }, ob = (t, e, n, o, s) => {
    const r = nb(n, o);
    return t.dom.addEventListener(e, r, s), { unbind: J(rb, t, e, r, s) };
  }, sb = (t, e, n, o) => ob(t, e, n, o, !1), rb = (t, e, n, o) => {
    t.dom.removeEventListener(e, n, o);
  }, cb = O, Ce = (t, e, n) => sb(t, e, cb, n), Xe = Fa, Ns = (t) => !As(b.fromDom(t.target), "ephox-snooker-resizer-bar"), lb = (t, e) => {
    const n = Jw(() => b.fromDom(t.getBody()), () => Yo(Cn(t), ie(t)), Yt.selectedSelector), o = (a, i, u) => {
      st(i).each((h) => {
        const p = Pc(t), f = Io(R, b.fromDom(t.getDoc()), p), w = Tt(t), m = tb(h, { selection: w }, f);
        yp(t, a, i, u, m);
      });
    }, s = () => Sp(t), r = Vw.byAttr(Yt, o, s);
    return t.on("init", (a) => {
      const i = t.getWin(), u = bn(t), g = ie(t), h = () => {
        const x = t.selection, K = b.fromDom(x.getStart()), X = b.fromDom(x.getEnd());
        Uo(st, [
          K,
          X
        ]).fold(() => r.clear(u), R);
      }, p = Pw(i, u, g, r), f = _w(i, u, g, r), w = Lw(i, u, g, r), m = (x) => x.raw.shiftKey === !0;
      t.on("TableSelectorChange", (x) => w(x.start, x.finish));
      const C = (x, K) => {
        m(x) && (K.kill && x.kill(), K.selection.each((X) => {
          const wt = we.relative(X.start, X.finish), dt = Rs(i, wt);
          t.selection.setRng(dt);
        }));
      }, y = (x) => {
        const K = Xe(x);
        if (K.raw.shiftKey && he(K.raw.which)) {
          const X = t.selection.getRng(), wt = b.fromDom(X.startContainer), dt = b.fromDom(X.endContainer);
          f.keyup(K, wt, X.startOffset, dt, X.endOffset).each((Se) => {
            C(K, Se);
          });
        }
      }, v = (x) => {
        const K = Xe(x);
        e.hide();
        const X = t.selection.getRng(), wt = b.fromDom(X.startContainer), dt = b.fromDom(X.endContainer), Se = tc(aw, iw)(b.fromDom(t.selection.getStart()));
        f.keydown(K, wt, X.startOffset, dt, X.endOffset, Se).each((Y) => {
          C(K, Y);
        }), e.show();
      }, E = (x) => x.button === 0, z = (x) => x.buttons === void 0 ? !0 : (x.buttons & 1) !== 0, W = (x) => {
        p.clearstate();
      }, nt = (x) => {
        E(x) && Ns(x) && p.mousedown(Xe(x));
      }, ye = (x) => {
        z(x) && Ns(x) && p.mouseover(Xe(x));
      }, js = (x) => {
        E(x) && Ns(x) && p.mouseup(Xe(x));
      }, Gs = (() => {
        const x = Es(b.fromDom(u)), K = Es(0);
        return { touchEnd: (wt) => {
          const dt = b.fromDom(wt.target);
          if (at("td")(dt) || at("th")(dt)) {
            const Se = x.get(), Y = K.get();
            D(Se, dt) && wt.timeStamp - Y < 300 && (wt.preventDefault(), w(dt, dt));
          }
          x.set(dt), K.set(wt.timeStamp);
        } };
      })();
      t.on("dragstart", W), t.on("mousedown", nt), t.on("mouseover", ye), t.on("mouseup", js), t.on("touchend", Gs.touchEnd), t.on("keyup", y), t.on("keydown", v), t.on("NodeChange", h);
    }), t.on("PreInit", () => {
      t.serializer.addTempAttr(Yt.firstSelected), t.serializer.addTempAttr(Yt.lastSelected);
    }), {
      getSelectedCells: () => qw(n.get(), T([]), (a) => S(a, (i) => i.dom), (a) => [a.dom]),
      clearSelectedCells: (a) => r.clear(b.fromDom(a))
    };
  }, ht = (t) => {
    let e = [];
    return {
      bind: (r) => {
        if (r === void 0)
          throw new Error("Event bind error: undefined handler");
        e.push(r);
      },
      unbind: (r) => {
        e = N(e, (c) => c !== r);
      },
      trigger: (...r) => {
        const c = {};
        k(t, (l, a) => {
          c[l] = r[a];
        }), k(e, (l) => {
          l(c);
        });
      }
    };
  }, ee = (t) => {
    const e = nr(t, (o) => ({
      bind: o.bind,
      unbind: o.unbind
    })), n = nr(t, (o) => o.trigger);
    return {
      registry: e,
      trigger: n
    };
  }, ab = (t, e) => {
    let n = null;
    const o = () => {
      ei(n) || (clearTimeout(n), n = null);
    };
    return {
      cancel: o,
      throttle: (...r) => {
        o(), n = setTimeout(() => {
          n = null, t.apply(null, r);
        }, e);
      }
    };
  }, Ye = (t) => t.slice(0).sort(), ib = (t, e) => {
    throw new Error("All required keys (" + Ye(t).join(", ") + ") were not specified. Specified keys were: " + Ye(e).join(", ") + ".");
  }, ub = (t) => {
    throw new Error("Unsupported keys for object: " + Ye(t).join(", "));
  }, db = (t, e) => {
    if (!Ze(e))
      throw new Error("The " + t + " fields must be an array. Was: " + e + ".");
    k(e, (n) => {
      if (!Re(n))
        throw new Error("The value " + n + " in the " + t + " fields was not a string.");
    });
  }, mb = (t, e) => {
    throw new Error("All values need to be of type: " + e + ". Keys (" + Ye(t).join(", ") + ") were not.");
  }, fb = (t) => {
    const e = Ye(t);
    St(e, (o, s) => s < e.length - 1 && o === e[s + 1]).each((o) => {
      throw new Error("The field: " + o + " occurs more than once in the combined fields: [" + e.join(", ") + "].");
    });
  }, gb = (t, e) => pb(t, e, {
    validate: It,
    label: "function"
  }), pb = (t, e, n) => {
    if (e.length === 0)
      throw new Error("You must specify at least one required field.");
    return db("required", e), fb(e), (o) => {
      const s = Te(o);
      ft(e, (l) => A(s, l)) || ib(e, s), t(e, s);
      const c = N(e, (l) => !n.validate(o[l], l));
      return c.length > 0 && mb(c, n.label), o;
    };
  }, hb = (t, e) => {
    const n = N(e, (o) => !A(t, o));
    n.length > 0 && ub(n);
  }, Ms = (t) => gb(hb, t), wb = Ms([
    "compare",
    "extract",
    "mutate",
    "sink"
  ]), bb = Ms([
    "element",
    "start",
    "stop",
    "destroy"
  ]), Cb = Ms([
    "forceDrop",
    "drop",
    "move",
    "delayDrop"
  ]), yb = () => {
    let t = d.none();
    const e = () => {
      t = d.none();
    }, n = (r, c) => {
      const l = t.map((a) => r.compare(a, c));
      return t = d.some(c), l;
    }, o = (r, c) => {
      c.extract(r).each((a) => {
        n(c, a).each((u) => {
          s.trigger.move(u);
        });
      });
    }, s = ee({ move: ht(["info"]) });
    return {
      onEvent: o,
      reset: e,
      events: s.registry
    };
  }, Sb = () => {
    const t = ee({ move: ht(["info"]) });
    return {
      onEvent: R,
      reset: R,
      events: t.registry
    };
  }, Rb = () => {
    const t = Sb(), e = yb();
    let n = t;
    return {
      on: () => {
        n.reset(), n = e;
      },
      off: () => {
        n.reset(), n = t;
      },
      isOn: () => n === e,
      onEvent: (l, a) => {
        n.onEvent(l, a);
      },
      events: e.events
    };
  }, vb = (t, e, n) => {
    let o = !1;
    const s = ee({
      start: ht([]),
      stop: ht([])
    }), r = Rb(), c = () => {
      f.stop(), r.isOn() && (r.off(), s.trigger.stop());
    }, l = ab(c, 200), a = (m) => {
      f.start(m), r.on(), s.trigger.start();
    }, i = (m) => {
      l.cancel(), r.onEvent(m, e);
    };
    r.events.move.bind((m) => {
      e.mutate(t, m.info);
    });
    const u = () => {
      o = !0;
    }, g = () => {
      o = !1;
    }, h = () => o, p = (m) => (...C) => {
      o && m.apply(null, C);
    }, f = e.sink(Cb({
      forceDrop: c,
      drop: p(c),
      move: p(i),
      delayDrop: p(l.throttle)
    }), n), w = () => {
      f.destroy();
    };
    return {
      element: f.element,
      go: a,
      on: u,
      off: g,
      isActive: h,
      destroy: w,
      events: s.registry
    };
  }, Ha = (t) => {
    const e = t.replace(/\./g, "-");
    return { resolve: (o) => e + "-" + o };
  }, ja = Ha("ephox-dragster").resolve, Tb = (t) => {
    const e = {
      layerClass: ja("blocker"),
      ...t
    }, n = b.fromTag("div");
    return I(n, "role", "presentation"), Be(n, {
      position: "fixed",
      left: "0px",
      top: "0px",
      width: "100%",
      height: "100%"
    }), At(n, ja("blocker")), At(n, e.layerClass), {
      element: T(n),
      destroy: () => {
        Z(n);
      }
    };
  };
  var kb = wb({
    compare: (t, e) => Pt(e.left - t.left, e.top - t.top),
    extract: (t) => d.some(Pt(t.x, t.y)),
    sink: (t, e) => {
      const n = Tb(e), o = Ce(n.element(), "mousedown", t.forceDrop), s = Ce(n.element(), "mouseup", t.drop), r = Ce(n.element(), "mousemove", t.move), c = Ce(n.element(), "mouseout", t.delayDrop), l = () => {
        n.destroy(), s.unbind(), r.unbind(), c.unbind(), o.unbind();
      }, a = (u) => {
        P(u, n.element());
      }, i = () => {
        Z(n.element());
      };
      return bb({
        element: n.element,
        start: a,
        stop: i,
        destroy: l
      });
    },
    mutate: (t, e) => {
      t.mutate(e.left, e.top);
    }
  });
  const $b = (t, e = {}) => {
    var n;
    const o = (n = e.mode) !== null && n !== void 0 ? n : kb;
    return vb(t, o, e);
  }, Yn = Ha("ephox-snooker").resolve, xb = () => {
    const t = ee({
      drag: ht([
        "xDelta",
        "yDelta"
      ])
    });
    return {
      mutate: (n, o) => {
        t.trigger.drag(n, o);
      },
      events: t.registry
    };
  }, Ob = () => {
    const t = ee({
      drag: ht([
        "xDelta",
        "yDelta",
        "target"
      ])
    });
    let e = d.none();
    const n = xb();
    return n.events.drag.bind((r) => {
      e.each((c) => {
        t.trigger.drag(r.xDelta, r.yDelta, c);
      });
    }), {
      assign: (r) => {
        e = d.some(r);
      },
      get: () => e,
      mutate: n.mutate,
      events: t.registry
    };
  }, Db = (t, e, n, o, s) => {
    const r = b.fromTag("div");
    return Be(r, {
      position: "absolute",
      left: e - o / 2 + "px",
      top: n + "px",
      height: s + "px",
      width: o + "px"
    }), ke(r, {
      "data-column": t,
      role: "presentation"
    }), r;
  }, Eb = (t, e, n, o, s) => {
    const r = b.fromTag("div");
    return Be(r, {
      position: "absolute",
      left: e + "px",
      top: n - s / 2 + "px",
      height: s + "px",
      width: o + "px"
    }), ke(r, {
      "data-row": t,
      role: "presentation"
    }), r;
  }, zs = Yn("resizer-bar"), Ga = Yn("resizer-rows"), Ua = Yn("resizer-cols"), Va = 7, Bb = (t, e) => V(t.all, (n, o) => e(n.element) ? [o] : []), Wb = (t, e) => {
    const n = [];
    return mt(t.grid.columns, (o) => {
      $.getColumnAt(t, o).map((r) => r.element).forall(e) && n.push(o);
    }), N(n, (o) => {
      const s = $.filterItems(t, (r) => r.column === o);
      return ft(s, (r) => e(r.element));
    });
  }, Is = (t) => {
    const e = vt(t.parent(), "." + zs);
    k(e, Z);
  }, qa = (t, e, n) => {
    const o = t.origin();
    k(e, (s) => {
      s.each((r) => {
        const c = n(o, r);
        At(c, zs), P(t.parent(), c);
      });
    });
  }, Pb = (t, e, n, o) => {
    qa(t, e, (s, r) => {
      const c = Db(r.col, r.x - s.left, n.top - s.top, Va, o);
      return At(c, Ua), c;
    });
  }, _b = (t, e, n, o) => {
    qa(t, e, (s, r) => {
      const c = Eb(r.row, n.left - s.left, r.y - s.top, o, Va);
      return At(c, Ga), c;
    });
  }, Lb = (t, e, n, o, s) => {
    const r = Ae(n), c = e.isResizable, l = o.length > 0 ? Bo.positions(o, n) : [], a = l.length > 0 ? Bb(t, c) : [], i = N(l, (p, f) => ct(a, (w) => f === w));
    _b(e, i, r, vo(n));
    const u = s.length > 0 ? gn.positions(s, n) : [], g = u.length > 0 ? Wb(t, c) : [], h = N(u, (p, f) => ct(g, (w) => f === w));
    Pb(e, h, r, nc(n));
  }, Fs = (t, e) => {
    if (Is(t), t.isResizable(e)) {
      const n = $.fromTable(e), o = Zr(n), s = xo(n);
      Lb(n, t, e, o, s);
    }
  }, Ka = (t, e) => {
    const n = vt(t.parent(), "." + zs);
    k(n, e);
  }, Ab = (t) => {
    Ka(t, (e) => {
      j(e, "display", "none");
    });
  }, Nb = (t) => {
    Ka(t, (e) => {
      j(e, "display", "block");
    });
  }, Mb = (t) => As(t, Ga), zb = (t) => As(t, Ua), Ib = Yn("resizer-bar-dragging"), Fb = (t) => {
    const e = Ob(), n = $b(e, {});
    let o = d.none();
    const s = (f, w) => d.from(Ht(f, w));
    e.events.drag.bind((f) => {
      s(f.target, "data-row").each((w) => {
        const m = un(f.target, "top");
        j(f.target, "top", m + f.yDelta + "px");
      }), s(f.target, "data-column").each((w) => {
        const m = un(f.target, "left");
        j(f.target, "left", m + f.xDelta + "px");
      });
    });
    const r = (f, w) => {
      const m = un(f, w), C = Et(f, "data-initial-" + w, 0);
      return m - C;
    };
    n.events.stop.bind(() => {
      e.get().each((f) => {
        o.each((w) => {
          s(f, "data-row").each((m) => {
            const C = r(f, "top");
            _(f, "data-initial-top"), p.trigger.adjustHeight(w, C, parseInt(m, 10));
          }), s(f, "data-column").each((m) => {
            const C = r(f, "left");
            _(f, "data-initial-left"), p.trigger.adjustWidth(w, C, parseInt(m, 10));
          }), Fs(t, w);
        });
      });
    });
    const c = (f, w) => {
      p.trigger.startAdjust(), e.assign(f), I(f, "data-initial-" + w, un(f, w)), At(f, Ib), j(f, "opacity", "0.2"), n.go(t.parent());
    }, l = Ce(t.parent(), "mousedown", (f) => {
      Mb(f.target) && c(f.target, "top"), zb(f.target) && c(f.target, "left");
    }), a = (f) => D(f, t.view()), i = (f) => H(f, "table", a).filter(Me), u = Ce(t.view(), "mouseover", (f) => {
      i(f.target).fold(() => {
        Dt(f.target) && Is(t);
      }, (w) => {
        n.isActive() && (o = d.some(w), Fs(t, w));
      });
    }), g = () => {
      l.unbind(), u.unbind(), n.destroy(), Is(t);
    }, h = (f) => {
      Fs(t, f);
    }, p = ee({
      adjustHeight: ht([
        "table",
        "delta",
        "row"
      ]),
      adjustWidth: ht([
        "table",
        "delta",
        "column"
      ]),
      startAdjust: ht([])
    });
    return {
      destroy: g,
      refresh: h,
      on: n.on,
      off: n.off,
      hideBars: J(Ab, t),
      showBars: J(Nb, t),
      events: p.registry
    };
  }, Hb = { create: (t, e, n) => {
    const o = Bo, s = gn, r = Fb(t), c = ee({
      beforeResize: ht([
        "table",
        "type"
      ]),
      afterResize: ht([
        "table",
        "type"
      ]),
      startDrag: ht([])
    });
    return r.events.adjustHeight.bind((l) => {
      const a = l.table;
      c.trigger.beforeResize(a, "row");
      const i = o.delta(l.delta, a);
      mg(a, i, l.row, o), c.trigger.afterResize(a, "row");
    }), r.events.startAdjust.bind((l) => {
      c.trigger.startDrag();
    }), r.events.adjustWidth.bind((l) => {
      const a = l.table;
      c.trigger.beforeResize(a, "col");
      const i = s.delta(l.delta, a), u = n(a);
      $l(a, i, l.column, e, u), c.trigger.afterResize(a, "col");
    }), {
      on: r.on,
      off: r.off,
      refreshBars: r.refresh,
      hideBars: r.hideBars,
      showBars: r.showBars,
      destroy: r.destroy,
      events: c.registry
    };
  } }, Xa = {
    only: (t, e) => {
      const n = ur(t) ? Ii(t) : t;
      return {
        parent: T(n),
        view: T(t),
        origin: T(Pt(0, 0)),
        isResizable: e
      };
    },
    detached: (t, e, n) => {
      const o = () => Ae(e);
      return {
        parent: T(e),
        view: T(t),
        origin: o,
        isResizable: n
      };
    },
    body: (t, e, n) => ({
      parent: T(e),
      view: T(t),
      origin: T(Pt(0, 0)),
      isResizable: n
    })
  }, jb = () => {
    const t = b.fromTag("div");
    return Be(t, {
      position: "static",
      height: "0",
      width: "0",
      padding: "0",
      margin: "0",
      border: "0"
    }), P(du(), t), t;
  }, Gb = (t, e) => t.inline ? Xa.body(b.fromDom(t.getBody()), jb(), e) : Xa.only(b.fromDom(t.getDoc()), e), Ub = (t, e) => {
    t.inline && Z(e.parent());
  }, Ya = (t) => ve(t) && t.nodeName === "TABLE", Hs = "bar-", Vb = (t) => Ht(t, "data-mce-resize") !== "false", qb = (t) => {
    const e = $.fromTable(t);
    $.hasColumns(e) || k(se(t), (n) => {
      const o = Vt(n, "width");
      j(n, "width", o), _(n, "width");
    });
  }, Kb = (t) => {
    const e = Gn(), n = Gn(), o = Gn();
    let s, r;
    const c = (f) => Il(t, f), l = () => Lc(t) ? Jo() : el(), a = (f) => Qo(f).columns, i = (f, w, m) => {
      const C = an(w, "e");
      if (r === "" && Ue(f), m !== s && r !== "") {
        j(f, "width", r);
        const y = l(), v = c(f), E = Lc(t) || C ? a(f) - 1 : 0;
        $l(f, m - s, E, y, v);
      } else if (Tm(r)) {
        const y = parseFloat(r.replace("%", "")), v = m * y / s;
        j(f, "width", v + "%");
      }
      km(r) && qb(f);
    }, u = () => {
      n.on((f) => {
        f.destroy();
      }), o.on((f) => {
        Ub(t, f);
      });
    };
    return t.on("init", () => {
      const f = Gb(t, Vb);
      if (o.set(f), wm(t) && bm(t)) {
        const w = l(), m = Hb.create(f, w, c);
        m.on(), m.events.startDrag.bind((C) => {
          e.set(t.selection.getRng());
        }), m.events.beforeResize.bind((C) => {
          const y = C.table.dom;
          Rp(t, y, Ic(y), Fc(y), Hs + C.type);
        }), m.events.afterResize.bind((C) => {
          const y = C.table, v = y.dom;
          Xt(y), e.on((E) => {
            t.selection.setRng(E), t.focus();
          }), vp(t, v, Ic(v), Fc(v), Hs + C.type), t.undoManager.add();
        }), n.set(m);
      }
    }), t.on("ObjectResizeStart", (f) => {
      const w = f.target;
      if (Ya(w)) {
        const m = b.fromDom(w);
        k(t.dom.select(".mce-clonedresizable"), (C) => {
          t.dom.addClass(C, "mce-" + Fo(t) + "-columns");
        }), !Kl(m) && ae(t) ? ps(m) : !ql(m) && wn(t) && Ue(m), Xl(m) && Or(f.origin, Hs) && Ue(m), s = f.width, r = Ne(t) ? "" : vm(t, w).getOr("");
      }
    }), t.on("ObjectResized", (f) => {
      const w = f.target;
      if (Ya(w)) {
        const m = b.fromDom(w), C = f.origin;
        Or(C, "corner-") && i(m, C, f.width), Xt(m), Qt(t, m.dom, Ln);
      }
    }), t.on("SwitchMode", () => {
      n.on((f) => {
        t.mode.isReadOnly() ? f.hideBars() : f.showBars();
      });
    }), t.on("dragstart dragend", (f) => {
      n.on((w) => {
        f.type === "dragstart" ? (w.hideBars(), w.off()) : (w.on(), w.showBars());
      });
    }), t.on("remove", () => {
      u();
    }), {
      refresh: (f) => {
        n.on((w) => w.refreshBars(b.fromDom(f)));
      },
      hide: () => {
        n.on((f) => f.hideBars());
      },
      show: () => {
        n.on((f) => f.showBars());
      }
    };
  }, Xb = (t) => {
    hm(t);
    const e = Kb(t), n = lb(t, e), o = kp(t, e, n);
    return rh(t, o), ch(t, o), df(t, o), {
      getSelectedCells: n.getSelectedCells,
      clearSelectedCells: n.clearSelectedCells
    };
  }, Yb = (t) => ({ table: Xb(t) });
  var Jb = () => {
    Qa.add("dom", Yb);
  };
  Jb();
})();
//# sourceMappingURL=model-CbmpUU9W.js.map
