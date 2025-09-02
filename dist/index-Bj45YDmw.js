function Qn(E, D) {
  for (var T = 0; T < D.length; T++) {
    const w = D[T];
    if (typeof w != "string" && !Array.isArray(w)) {
      for (const y in w)
        if (y !== "default" && !(y in E)) {
          const S = Object.getOwnPropertyDescriptor(w, y);
          S && Object.defineProperty(E, y, S.get ? S : {
            enumerable: !0,
            get: () => w[y]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(E, Symbol.toStringTag, { value: "Module" }));
}
var Le = {};
(function() {
  const E = (e) => {
    let t = e;
    return {
      get: () => t,
      set: (s) => {
        t = s;
      }
    };
  };
  var D = tinymce.util.Tools.resolve("tinymce.PluginManager");
  const T = (e) => ({ isFullscreen: () => e.get() !== null }), w = (e, t, n) => {
    var o;
    return n(e, t.prototype) ? !0 : ((o = e.constructor) === null || o === void 0 ? void 0 : o.name) === t.name;
  }, y = (e) => {
    const t = typeof e;
    return e === null ? "null" : t === "object" && Array.isArray(e) ? "array" : t === "object" && w(e, String, (n, o) => o.isPrototypeOf(n)) ? "string" : t;
  }, S = (e) => (t) => y(t) === e, L = (e) => (t) => typeof t === e, K = (e) => (t) => e === t, Y = S("string"), Be = S("object"), He = S("array"), J = K(null), je = L("boolean"), qe = K(void 0), Ie = (e) => e == null, P = (e) => !Ie(e), $ = L("function"), We = L("number"), N = () => {
  }, Ue = (e, t) => (...n) => e(t.apply(null, n)), ze = (e, t) => (n) => e(t(n)), g = (e) => () => e;
  function Ve(e, ...t) {
    return (...n) => {
      const o = t.concat(n);
      return e.apply(null, o);
    };
  }
  const Q = g(!1), _e = g(!0);
  class c {
    constructor(t, n) {
      this.tag = t, this.value = n;
    }
    static some(t) {
      return new c(!0, t);
    }
    static none() {
      return c.singletonNone;
    }
    fold(t, n) {
      return this.tag ? n(this.value) : t();
    }
    isSome() {
      return this.tag;
    }
    isNone() {
      return !this.tag;
    }
    map(t) {
      return this.tag ? c.some(t(this.value)) : c.none();
    }
    bind(t) {
      return this.tag ? t(this.value) : c.none();
    }
    exists(t) {
      return this.tag && t(this.value);
    }
    forall(t) {
      return !this.tag || t(this.value);
    }
    filter(t) {
      return !this.tag || t(this.value) ? this : c.none();
    }
    getOr(t) {
      return this.tag ? this.value : t;
    }
    or(t) {
      return this.tag ? this : t;
    }
    getOrThunk(t) {
      return this.tag ? this.value : t();
    }
    orThunk(t) {
      return this.tag ? this : t();
    }
    getOrDie(t) {
      if (this.tag)
        return this.value;
      throw new Error(t ?? "Called getOrDie on None");
    }
    static from(t) {
      return P(t) ? c.some(t) : c.none();
    }
    getOrNull() {
      return this.tag ? this.value : null;
    }
    getOrUndefined() {
      return this.value;
    }
    each(t) {
      this.tag && t(this.value);
    }
    toArray() {
      return this.tag ? [this.value] : [];
    }
    toString() {
      return this.tag ? `some(${this.value})` : "none()";
    }
  }
  c.singletonNone = new c(!1);
  const Ge = Array.prototype.push, B = (e, t) => {
    const n = e.length, o = new Array(n);
    for (let s = 0; s < n; s++) {
      const r = e[s];
      o[s] = t(r, s);
    }
    return o;
  }, H = (e, t) => {
    for (let n = 0, o = e.length; n < o; n++) {
      const s = e[n];
      t(s, n);
    }
  }, j = (e, t) => {
    const n = [];
    for (let o = 0, s = e.length; o < s; o++) {
      const r = e[o];
      t(r, o) && n.push(r);
    }
    return n;
  }, Xe = (e, t, n) => {
    for (let o = 0, s = e.length; o < s; o++) {
      const r = e[o];
      if (t(r, o))
        return c.some(r);
      if (n(r, o))
        break;
    }
    return c.none();
  }, Z = (e, t) => Xe(e, t, Q), Ke = (e) => {
    const t = [];
    for (let n = 0, o = e.length; n < o; ++n) {
      if (!He(e[n]))
        throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
      Ge.apply(t, e[n]);
    }
    return t;
  }, Ye = (e, t) => Ke(B(e, t)), Je = (e, t) => t >= 0 && t < e.length ? c.some(e[t]) : c.none(), Qe = (e) => Je(e, 0), Ze = (e, t) => {
    for (let n = 0; n < e.length; n++) {
      const o = t(e[n], n);
      if (o.isSome())
        return o;
    }
    return c.none();
  }, et = (e, t, n) => e.isSome() && t.isSome() ? c.some(n(e.getOrDie(), t.getOrDie())) : c.none(), ee = (e) => {
    const t = E(c.none()), n = () => t.get().each(e);
    return {
      clear: () => {
        n(), t.set(c.none());
      },
      isSet: () => t.get().isSome(),
      get: () => t.get(),
      set: (u) => {
        n(), t.set(c.some(u));
      }
    };
  }, te = () => ee((e) => e.unbind()), tt = () => {
    const e = ee(N);
    return {
      ...e,
      on: (n) => e.get().each(n)
    };
  }, nt = (e, t) => {
    let n = null;
    return {
      cancel: () => {
        J(n) || (clearTimeout(n), n = null);
      },
      throttle: (...r) => {
        J(n) && (n = setTimeout(() => {
          n = null, e.apply(null, r);
        }, t));
      }
    };
  }, ot = Object.keys, st = (e, t) => {
    const n = ot(e);
    for (let o = 0, s = n.length; o < s; o++) {
      const r = n[o], i = e[r];
      t(i, r);
    }
  }, rt = typeof window < "u" ? window : Function("return this;")(), ct = (e, t) => {
    let n = t ?? rt;
    for (let o = 0; o < e.length && n !== void 0 && n !== null; ++o)
      n = n[e[o]];
    return n;
  }, ne = (e, t) => {
    const n = e.split(".");
    return ct(n, t);
  }, it = (e, t) => ne(e, t), lt = (e, t) => {
    const n = it(e, t);
    if (n == null)
      throw new Error(e + " not available on this browser");
    return n;
  }, at = Object.getPrototypeOf, ut = (e) => lt("HTMLElement", e), dt = (e) => {
    const t = ne("ownerDocument.defaultView", e);
    return Be(e) && (ut(t).prototype.isPrototypeOf(e) || /^HTML\w*Element$/.test(at(e).constructor.name));
  }, oe = 9, se = 11, q = 1, mt = 3, ft = (e) => e.dom.nodeType, M = (e) => (t) => ft(t) === e, ht = (e) => re(e) && dt(e.dom), re = M(q), gt = M(mt), pt = M(oe), bt = M(se), vt = (e, t, n) => {
    if (Y(n) || je(n) || We(n))
      e.setAttribute(t, n + "");
    else
      throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
  }, wt = (e, t, n) => {
    vt(e.dom, t, n);
  }, ce = (e, t) => {
    const n = e.dom.getAttribute(t);
    return n === null ? void 0 : n;
  }, ie = (e, t) => {
    e.dom.removeAttribute(t);
  }, yt = (e) => e.dom.classList !== void 0, St = (e, t) => yt(e) && e.dom.classList.contains(t), m = (e, t, n = 0, o) => {
    const s = e.indexOf(t, n);
    return s !== -1 ? qe(o) ? !0 : s + t.length <= o : !1;
  }, le = (e) => e.style !== void 0 && $(e.style.getPropertyValue), Et = (e, t) => {
    const o = (t || document).createElement("div");
    if (o.innerHTML = e, !o.hasChildNodes() || o.childNodes.length > 1) {
      const s = "HTML does not have a single root node";
      throw console.error(s, e), new Error(s);
    }
    return O(o.childNodes[0]);
  }, Tt = (e, t) => {
    const o = (t || document).createElement(e);
    return O(o);
  }, xt = (e, t) => {
    const o = (t || document).createTextNode(e);
    return O(o);
  }, O = (e) => {
    if (e == null)
      throw new Error("Node cannot be null or undefined");
    return { dom: e };
  }, a = {
    fromHtml: Et,
    fromTag: Tt,
    fromText: xt,
    fromDom: O,
    fromPoint: (e, t, n) => c.from(e.dom.elementFromPoint(t, n)).map(O)
  }, ae = (e, t) => {
    const n = e.dom;
    if (n.nodeType !== q)
      return !1;
    {
      const o = n;
      if (o.matches !== void 0)
        return o.matches(t);
      if (o.msMatchesSelector !== void 0)
        return o.msMatchesSelector(t);
      if (o.webkitMatchesSelector !== void 0)
        return o.webkitMatchesSelector(t);
      if (o.mozMatchesSelector !== void 0)
        return o.mozMatchesSelector(t);
      throw new Error("Browser lacks native selectors");
    }
  }, Ft = (e) => e.nodeType !== q && e.nodeType !== oe && e.nodeType !== se || e.childElementCount === 0, Ot = (e, t) => {
    const n = document;
    return Ft(n) ? [] : B(n.querySelectorAll(e), a.fromDom);
  }, kt = (e, t) => e.dom === t.dom, k = (e) => a.fromDom(e.dom.ownerDocument), Ct = (e) => pt(e) ? e : k(e), Dt = (e) => c.from(e.dom.parentNode).map(a.fromDom), Pt = (e, t) => {
    const n = $(t) ? t : Q;
    let o = e.dom;
    const s = [];
    for (; o.parentNode !== null && o.parentNode !== void 0; ) {
      const r = o.parentNode, i = a.fromDom(r);
      if (s.push(i), n(i) === !0)
        break;
      o = r;
    }
    return s;
  }, $t = (e) => {
    const t = (n) => j(n, (o) => !kt(e, o));
    return Dt(e).map(Mt).map(t).getOr([]);
  }, Nt = (e) => c.from(e.dom.nextSibling).map(a.fromDom), Mt = (e) => B(e.dom.childNodes, a.fromDom), Rt = (e) => bt(e) && P(e.dom.host), ue = $(Element.prototype.attachShadow) && $(Node.prototype.getRootNode), At = g(ue), Lt = ue ? (e) => a.fromDom(e.dom.getRootNode()) : Ct, I = (e) => {
    const t = Lt(e);
    return Rt(t) ? c.some(t) : c.none();
  }, W = (e) => a.fromDom(e.dom.host), Bt = (e) => {
    if (At() && P(e.target)) {
      const t = a.fromDom(e.target);
      if (re(t) && Ht(t) && e.composed && e.composedPath) {
        const n = e.composedPath();
        if (n)
          return Qe(n);
      }
    }
    return c.from(e.target);
  }, Ht = (e) => P(e.dom.shadowRoot), de = (e) => {
    const t = gt(e) ? e.dom.parentNode : e.dom;
    if (t == null || t.ownerDocument === null)
      return !1;
    const n = t.ownerDocument;
    return I(a.fromDom(t)).fold(() => n.body.contains(t), ze(de, W));
  }, jt = (e) => {
    const t = e.dom.body;
    if (t == null)
      throw new Error("Body is not available yet");
    return a.fromDom(t);
  }, me = (e, t, n) => {
    if (!Y(n))
      throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
    le(e) && e.style.setProperty(t, n);
  }, fe = (e, t, n) => {
    const o = e.dom;
    me(o, t, n);
  }, U = (e, t) => {
    const n = e.dom;
    st(t, (o, s) => {
      me(n, s, o);
    });
  }, he = (e, t) => {
    const n = e.dom, s = window.getComputedStyle(n).getPropertyValue(t);
    return s === "" && !de(e) ? qt(n, t) : s;
  }, qt = (e, t) => le(e) ? e.style.getPropertyValue(t) : "", It = (e, t, n, o, s, r, i) => ({
    target: e,
    x: t,
    y: n,
    stop: o,
    prevent: s,
    kill: r,
    raw: i
  }), ge = (e) => {
    const t = a.fromDom(Bt(e).getOr(e.target)), n = () => e.stopPropagation(), o = () => e.preventDefault(), s = Ue(o, n);
    return It(t, e.clientX, e.clientY, n, o, s, e);
  }, Wt = (e, t) => (n) => {
    e(n) && t(ge(n));
  }, Ut = (e, t, n, o, s) => {
    const r = Wt(n, o);
    return e.dom.addEventListener(t, r, s), { unbind: Ve(Vt, e, t, r, s) };
  }, zt = (e, t, n, o) => Ut(e, t, n, o, !1), Vt = (e, t, n, o) => {
    e.dom.removeEventListener(t, n, o);
  }, _t = _e, Gt = (e, t, n) => zt(e, t, _t, n), Xt = (e) => {
    let t = !1, n;
    return (...o) => (t || (t = !0, n = e.apply(null, o)), n);
  }, Kt = (e, t, n, o) => {
    const s = e.isiOS() && /ipad/i.test(n) === !0, r = e.isiOS() && !s, i = e.isiOS() || e.isAndroid(), u = i || o("(pointer:coarse)"), l = s || !r && i && o("(min-device-width:768px)"), h = r || i && !l, b = t.isSafari() && e.isiOS() && /safari/i.test(n) === !1, d = !h && !l && !b;
    return {
      isiPad: g(s),
      isiPhone: g(r),
      isTablet: g(l),
      isPhone: g(h),
      isTouch: g(u),
      isAndroid: e.isAndroid,
      isiOS: e.isiOS,
      isWebView: g(b),
      isDesktop: g(d)
    };
  }, Yt = (e, t) => {
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      if (o.test(t))
        return o;
    }
  }, Jt = (e, t) => {
    const n = Yt(e, t);
    if (!n)
      return {
        major: 0,
        minor: 0
      };
    const o = (s) => Number(t.replace(n, "$" + s));
    return z(o(1), o(2));
  }, Qt = (e, t) => {
    const n = String(t).toLowerCase();
    return e.length === 0 ? pe() : Jt(e, n);
  }, pe = () => z(0, 0), z = (e, t) => ({
    major: e,
    minor: t
  }), C = {
    nu: z,
    detect: Qt,
    unknown: pe
  }, Zt = (e, t) => Ze(t.brands, (n) => {
    const o = n.brand.toLowerCase();
    return Z(e, (s) => {
      var r;
      return o === ((r = s.brand) === null || r === void 0 ? void 0 : r.toLowerCase());
    }).map((s) => ({
      current: s.name,
      version: C.nu(parseInt(n.version, 10), 0)
    }));
  }), be = (e, t) => {
    const n = String(t).toLowerCase();
    return Z(e, (o) => o.search(n));
  }, en = (e, t) => be(e, t).map((n) => {
    const o = C.detect(n.versionRegexes, t);
    return {
      current: n.name,
      version: o
    };
  }), tn = (e, t) => be(e, t).map((n) => {
    const o = C.detect(n.versionRegexes, t);
    return {
      current: n.name,
      version: o
    };
  }), V = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, p = (e) => (t) => m(t, e), nn = [
    {
      name: "Edge",
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: (e) => m(e, "edge/") && m(e, "chrome") && m(e, "safari") && m(e, "applewebkit")
    },
    {
      name: "Chromium",
      brand: "Chromium",
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        V
      ],
      search: (e) => m(e, "chrome") && !m(e, "chromeframe")
    },
    {
      name: "IE",
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: (e) => m(e, "msie") || m(e, "trident")
    },
    {
      name: "Opera",
      versionRegexes: [
        V,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: p("opera")
    },
    {
      name: "Firefox",
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: p("firefox")
    },
    {
      name: "Safari",
      versionRegexes: [
        V,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: (e) => (m(e, "safari") || m(e, "mobile/")) && m(e, "applewebkit")
    }
  ], on = [
    {
      name: "Windows",
      search: p("win"),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: "iOS",
      search: (e) => m(e, "iphone") || m(e, "ipad"),
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: "Android",
      search: p("android"),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: "macOS",
      search: p("mac os x"),
      versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: "Linux",
      search: p("linux"),
      versionRegexes: []
    },
    {
      name: "Solaris",
      search: p("sunos"),
      versionRegexes: []
    },
    {
      name: "FreeBSD",
      search: p("freebsd"),
      versionRegexes: []
    },
    {
      name: "ChromeOS",
      search: p("cros"),
      versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
    }
  ], ve = {
    browsers: g(nn),
    oses: g(on)
  }, sn = "Edge", rn = "Chromium", cn = "IE", ln = "Opera", an = "Firefox", un = "Safari", dn = () => we({
    current: void 0,
    version: C.unknown()
  }), we = (e) => {
    const t = e.current, n = e.version, o = (s) => () => t === s;
    return {
      current: t,
      version: n,
      isEdge: o(sn),
      isChromium: o(rn),
      isIE: o(cn),
      isOpera: o(ln),
      isFirefox: o(an),
      isSafari: o(un)
    };
  }, ye = {
    unknown: dn,
    nu: we
  }, mn = "Windows", fn = "iOS", hn = "Android", gn = "Linux", pn = "macOS", bn = "Solaris", vn = "FreeBSD", wn = "ChromeOS", yn = () => Se({
    current: void 0,
    version: C.unknown()
  }), Se = (e) => {
    const t = e.current, n = e.version, o = (s) => () => t === s;
    return {
      current: t,
      version: n,
      isWindows: o(mn),
      isiOS: o(fn),
      isAndroid: o(hn),
      isMacOS: o(pn),
      isLinux: o(gn),
      isSolaris: o(bn),
      isFreeBSD: o(vn),
      isChromeOS: o(wn)
    };
  }, Ee = {
    unknown: yn,
    nu: Se
  }, Sn = { detect: (e, t, n) => {
    const o = ve.browsers(), s = ve.oses(), r = t.bind((l) => Zt(o, l)).orThunk(() => en(o, e)).fold(ye.unknown, ye.nu), i = tn(s, e).fold(Ee.unknown, Ee.nu), u = Kt(i, r, e, n);
    return {
      browser: r,
      os: i,
      deviceType: u
    };
  } }, En = (e) => window.matchMedia(e).matches;
  let Tn = Xt(() => Sn.detect(navigator.userAgent, c.from(navigator.userAgentData), En));
  const xn = () => Tn(), Te = (e, t) => ({
    left: e,
    top: t,
    translate: (o, s) => Te(e + o, t + s)
  }), Fn = Te, On = (e) => {
    const t = e !== void 0 ? e.dom : document, n = t.body.scrollLeft || t.documentElement.scrollLeft, o = t.body.scrollTop || t.documentElement.scrollTop;
    return Fn(n, o);
  }, _ = (e) => {
    const t = e === void 0 ? window : e;
    return xn().browser.isFirefox() ? c.none() : c.from(t.visualViewport);
  }, xe = (e, t, n, o) => ({
    x: e,
    y: t,
    width: n,
    height: o,
    right: e + n,
    bottom: t + o
  }), kn = (e) => {
    const t = e === void 0 ? window : e, n = t.document, o = On(a.fromDom(n));
    return _(t).fold(() => {
      const s = t.document.documentElement, r = s.clientWidth, i = s.clientHeight;
      return xe(o.left, o.top, r, i);
    }, (s) => xe(Math.max(s.pageLeft, o.left), Math.max(s.pageTop, o.top), s.width, s.height));
  }, Fe = (e, t, n) => _(n).map((o) => {
    const s = (r) => t(ge(r));
    return o.addEventListener(e, s), { unbind: () => o.removeEventListener(e, s) };
  }).getOrThunk(() => ({ unbind: N }));
  var Cn = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"), Oe = tinymce.util.Tools.resolve("tinymce.Env");
  const ke = (e, t) => {
    e.dispatch("FullscreenStateChanged", { state: t }), e.dispatch("ResizeEditor");
  }, Dn = (e) => (t) => t.options.get(e), Pn = (e) => {
    const t = e.options.register;
    t("fullscreen_native", {
      processor: "boolean",
      default: !1
    });
  }, G = Dn("fullscreen_native"), $n = (e) => {
    const t = a.fromDom(e.getElement());
    return I(t).map(W).getOrThunk(() => jt(k(t)));
  }, Nn = (e) => e.fullscreenElement !== void 0 ? e.fullscreenElement : e.msFullscreenElement !== void 0 ? e.msFullscreenElement : e.webkitFullscreenElement !== void 0 ? e.webkitFullscreenElement : null, Mn = () => document.fullscreenElement !== void 0 ? "fullscreenchange" : document.msFullscreenElement !== void 0 ? "MSFullscreenChange" : document.webkitFullscreenElement !== void 0 ? "webkitfullscreenchange" : "fullscreenchange", Rn = (e) => {
    const t = e.dom;
    t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.webkitRequestFullScreen && t.webkitRequestFullScreen();
  }, An = (e) => {
    const t = e.dom;
    t.exitFullscreen ? t.exitFullscreen() : t.msExitFullscreen ? t.msExitFullscreen() : t.webkitCancelFullScreen && t.webkitCancelFullScreen();
  }, Ce = (e) => e.dom === Nn(k(e).dom), Ln = (e, t, n) => j(Pt(e, n), t), Bn = (e, t) => j($t(e), t), Hn = (e) => Ot(e), jn = (e, t, n) => Ln(e, (o) => ae(o, t), n), qn = (e, t) => Bn(e, (n) => ae(n, t)), R = "data-ephox-mobile-fullscreen-style", In = "display:none!important;", De = "position:absolute!important;", Pe = "top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;", Wn = "background-color:rgb(255,255,255)!important;", Un = Oe.os.isAndroid(), zn = (e) => {
    const t = he(e, "background-color");
    return t !== void 0 && t !== "" ? "background-color:" + t + "!important" : Wn;
  }, Vn = (e, t, n) => {
    const o = (h) => qn(h, "*:not(.tox-silver-sink)"), s = (h) => (b) => {
      const d = ce(b, "style"), x = d === void 0 ? "no-styles" : d.trim();
      x !== h && (wt(b, R, x), U(b, e.parseStyle(h)));
    }, r = jn(t, "*"), i = Ye(r, o), u = zn(n);
    H(i, s(In)), H(r, s(De + Pe + u)), s((Un === !0 ? "" : De) + Pe + u)(t);
  }, _n = (e) => {
    const t = Hn("[" + R + "]");
    H(t, (n) => {
      const o = ce(n, R);
      o && o !== "no-styles" ? U(n, e.parseStyle(o)) : ie(n, "style"), ie(n, R);
    });
  }, $e = Cn.DOM, Gn = () => kn(window), Xn = (e) => window.scrollTo(e.x, e.y), Ne = _().fold(() => ({
    bind: N,
    unbind: N
  }), (e) => {
    const t = tt(), n = te(), o = te(), s = () => {
      document.body.scrollTop = 0, document.documentElement.scrollTop = 0;
    }, r = () => {
      window.requestAnimationFrame(() => {
        t.on((h) => U(h, {
          top: e.offsetTop + "px",
          left: e.offsetLeft + "px",
          height: e.height + "px",
          width: e.width + "px"
        }));
      });
    }, i = nt(() => {
      s(), r();
    }, 50);
    return {
      bind: (h) => {
        t.set(h), i.throttle(), n.set(Fe("resize", i.throttle)), o.set(Fe("scroll", i.throttle));
      },
      unbind: () => {
        t.on(() => {
          n.clear(), o.clear();
        }), t.clear();
      }
    };
  }), Me = (e, t) => {
    const n = document.body, o = document.documentElement, s = e.getContainer(), r = a.fromDom(s), i = Nt(r).filter((f) => ht(f) && St(f, "tox-silver-sink")), u = $n(e), l = t.get(), h = a.fromDom(e.getBody()), b = Oe.deviceType.isTouch(), d = s.style, x = e.iframeElement, F = x == null ? void 0 : x.style, Ae = (f) => {
      f(n, "tox-fullscreen"), f(o, "tox-fullscreen"), f(s, "tox-fullscreen"), I(r).map((v) => W(v).dom).each((v) => {
        f(v, "tox-fullscreen"), f(v, "tox-shadowhost");
      });
    }, X = () => {
      b && _n(e.dom), Ae($e.removeClass), Ne.unbind(), c.from(t.get()).each((f) => f.fullscreenChangeHandler.unbind());
    };
    if (l)
      l.fullscreenChangeHandler.unbind(), G(e) && Ce(u) && An(k(u)), F.width = l.iframeWidth, F.height = l.iframeHeight, d.width = l.containerWidth, d.height = l.containerHeight, d.top = l.containerTop, d.left = l.containerLeft, et(i, l.sinkCssPosition, (f, v) => {
        fe(f, "position", v);
      }), X(), Xn(l.scrollPos), t.set(null), ke(e, !1), e.off("remove", X);
    else {
      const f = Gt(k(u), Mn(), (A) => {
        G(e) && !Ce(u) && t.get() !== null && Me(e, t);
      }), v = {
        scrollPos: Gn(),
        containerWidth: d.width,
        containerHeight: d.height,
        containerTop: d.top,
        containerLeft: d.left,
        iframeWidth: F.width,
        iframeHeight: F.height,
        fullscreenChangeHandler: f,
        sinkCssPosition: i.map((A) => he(A, "position"))
      };
      b && Vn(e.dom, r, h), F.width = F.height = "100%", d.width = d.height = "", Ae($e.addClass), i.each((A) => {
        fe(A, "position", "fixed");
      }), Ne.bind(r), e.on("remove", X), t.set(v), G(e) && Rn(u), ke(e, !0);
    }
  }, Kn = (e, t) => {
    e.addCommand("mceFullScreen", () => {
      Me(e, t);
    });
  }, Re = (e, t) => (n) => {
    n.setActive(t.get() !== null);
    const o = (s) => n.setActive(s.state);
    return e.on("FullscreenStateChanged", o), () => e.off("FullscreenStateChanged", o);
  }, Yn = (e, t) => {
    const n = () => e.execCommand("mceFullScreen");
    e.ui.registry.addToggleMenuItem("fullscreen", {
      text: "Fullscreen",
      icon: "fullscreen",
      shortcut: "Meta+Shift+F",
      onAction: n,
      onSetup: Re(e, t)
    }), e.ui.registry.addToggleButton("fullscreen", {
      tooltip: "Fullscreen",
      icon: "fullscreen",
      onAction: n,
      onSetup: Re(e, t)
    });
  };
  var Jn = () => {
    D.add("fullscreen", (e) => {
      const t = E(null);
      return e.inline || (Pn(e), Kn(e, t), Yn(e, t), e.addShortcut("Meta+Shift+F", "", "mceFullScreen")), T(t);
    });
  };
  Jn();
})();
const to = /* @__PURE__ */ Qn({
  __proto__: null,
  default: Le
}, [Le]);
export {
  to as i
};
//# sourceMappingURL=index-Bj45YDmw.js.map
