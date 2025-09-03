import { g as Z6 } from "./index-D6VxZ0Rk.js";
function Q6(mr, gr) {
  for (var pr = 0; pr < gr.length; pr++) {
    const Ns = gr[pr];
    if (typeof Ns != "string" && !Array.isArray(Ns)) {
      for (const As in Ns)
        if (As !== "default" && !(As in mr)) {
          const Un = Object.getOwnPropertyDescriptor(Ns, As);
          Un && Object.defineProperty(mr, As, Un.get ? Un : {
            enumerable: !0,
            get: () => Ns[As]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(mr, Symbol.toStringTag, { value: "Module" }));
}
var u_ = { exports: {} };
(function(mr) {
  (function() {
    var gr = function(e) {
      if (e === null)
        return "null";
      if (e === void 0)
        return "undefined";
      var t = typeof e;
      return t === "object" && (Array.prototype.isPrototypeOf(e) || e.constructor && e.constructor.name === "Array") ? "array" : t === "object" && (String.prototype.isPrototypeOf(e) || e.constructor && e.constructor.name === "String") ? "string" : t;
    }, pr = function(e) {
      return [
        "undefined",
        "boolean",
        "number",
        "string",
        "function",
        "xml",
        "null"
      ].indexOf(e) !== -1;
    }, Ns = function(e, t) {
      var n = Array.prototype.slice.call(e);
      return n.sort(t);
    }, As = function(e, t) {
      return Un(function(n, s) {
        return e.eq(t(n), t(s));
      });
    }, Un = function(e) {
      return { eq: e };
    }, d_ = Un(function(e, t) {
      return e === t;
    }), m_ = d_, Gm = function(e) {
      return Un(function(t, n) {
        if (t.length !== n.length)
          return !1;
        for (var s = t.length, o = 0; o < s; o++)
          if (!e.eq(t[o], n[o]))
            return !1;
        return !0;
      });
    }, g_ = function(e, t) {
      return As(Gm(e), function(n) {
        return Ns(n, t);
      });
    }, Ym = function(e) {
      return Un(function(t, n) {
        var s = Object.keys(t), o = Object.keys(n);
        if (!g_(m_).eq(s, o))
          return !1;
        for (var r = s.length, a = 0; a < r; a++) {
          var i = s[a];
          if (!e.eq(t[i], n[i]))
            return !1;
        }
        return !0;
      });
    }, bc = Un(function(e, t) {
      if (e === t)
        return !0;
      var n = gr(e), s = gr(t);
      return n !== s ? !1 : pr(n) ? e === t : n === "array" ? Gm(bc).eq(e, t) : n === "object" ? Ym(bc).eq(e, t) : !1;
    });
    const p_ = Object.getPrototypeOf, Xm = (e, t, n) => {
      var s;
      return n(e, t.prototype) ? !0 : ((s = e.constructor) === null || s === void 0 ? void 0 : s.name) === t.name;
    }, h_ = (e) => {
      const t = typeof e;
      return e === null ? "null" : t === "object" && Array.isArray(e) ? "array" : t === "object" && Xm(e, String, (n, s) => s.isPrototypeOf(n)) ? "string" : t;
    }, Cc = (e) => (t) => h_(t) === e, vc = (e) => (t) => typeof t === e, Zm = (e) => (t) => e === t, si = (e, t) => vt(e) && Xm(e, t, (n, s) => p_(n) === s), J = Cc("string"), vt = Cc("object"), Qm = (e) => si(e, Object), Ge = Cc("array"), kt = Zm(null), Ts = vc("boolean"), lt = Zm(void 0), qe = (e) => e == null, M = (e) => !qe(e), Se = vc("function"), mn = vc("number"), Eo = (e, t) => {
      if (Ge(e)) {
        for (let n = 0, s = e.length; n < s; ++n)
          if (!t(e[n]))
            return !1;
        return !0;
      }
      return !1;
    }, ce = () => {
    }, Sn = (e, t) => (...n) => e(t.apply(null, n)), Jm = (e, t) => (n) => e(t(n)), V = (e) => () => e, _t = (e) => e, eg = (e, t) => e === t;
    function j(e, ...t) {
      return (...n) => {
        const s = t.concat(n);
        return e.apply(null, s);
      };
    }
    const hr = (e) => (t) => !e(t), tg = (e) => () => {
      throw new Error(e);
    }, yc = (e) => e(), br = (e) => {
      e();
    }, Le = V(!1), He = V(!0);
    class m {
      constructor(t, n) {
        this.tag = t, this.value = n;
      }
      static some(t) {
        return new m(!0, t);
      }
      static none() {
        return m.singletonNone;
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
        return this.tag ? m.some(t(this.value)) : m.none();
      }
      bind(t) {
        return this.tag ? t(this.value) : m.none();
      }
      exists(t) {
        return this.tag && t(this.value);
      }
      forall(t) {
        return !this.tag || t(this.value);
      }
      filter(t) {
        return !this.tag || t(this.value) ? this : m.none();
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
        return M(t) ? m.some(t) : m.none();
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
    m.singletonNone = new m(!1);
    const Ec = Array.prototype.slice, b_ = Array.prototype.indexOf, C_ = Array.prototype.push, ng = (e, t) => b_.call(e, t), v_ = (e, t) => {
      const n = ng(e, t);
      return n === -1 ? m.none() : m.some(n);
    }, ke = (e, t) => ng(e, t) > -1, Fe = (e, t) => {
      for (let n = 0, s = e.length; n < s; n++) {
        const o = e[n];
        if (t(o, n))
          return !0;
      }
      return !1;
    }, he = (e, t) => {
      const n = e.length, s = new Array(n);
      for (let o = 0; o < n; o++) {
        const r = e[o];
        s[o] = t(r, o);
      }
      return s;
    }, P = (e, t) => {
      for (let n = 0, s = e.length; n < s; n++) {
        const o = e[n];
        t(o, n);
      }
    }, sg = (e, t) => {
      for (let n = e.length - 1; n >= 0; n--) {
        const s = e[n];
        t(s, n);
      }
    }, So = (e, t) => {
      const n = [], s = [];
      for (let o = 0, r = e.length; o < r; o++) {
        const a = e[o];
        (t(a, o) ? n : s).push(a);
      }
      return {
        pass: n,
        fail: s
      };
    }, se = (e, t) => {
      const n = [];
      for (let s = 0, o = e.length; s < o; s++) {
        const r = e[s];
        t(r, s) && n.push(r);
      }
      return n;
    }, Cr = (e, t, n) => (sg(e, (s, o) => {
      n = t(n, s, o);
    }), n), Rt = (e, t, n) => (P(e, (s, o) => {
      n = t(n, s, o);
    }), n), og = (e, t, n) => {
      for (let s = 0, o = e.length; s < o; s++) {
        const r = e[s];
        if (t(r, s))
          return m.some(r);
        if (n(r, s))
          break;
      }
      return m.none();
    }, Ye = (e, t) => og(e, t, Le), vr = (e, t) => {
      for (let n = 0, s = e.length; n < s; n++) {
        const o = e[n];
        if (t(o, n))
          return m.some(n);
      }
      return m.none();
    }, rg = (e) => {
      const t = [];
      for (let n = 0, s = e.length; n < s; ++n) {
        if (!Ge(e[n]))
          throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
        C_.apply(t, e[n]);
      }
      return t;
    }, sn = (e, t) => rg(he(e, t)), zn = (e, t) => {
      for (let n = 0, s = e.length; n < s; ++n) {
        const o = e[n];
        if (t(o, n) !== !0)
          return !1;
      }
      return !0;
    }, yr = (e) => {
      const t = Ec.call(e, 0);
      return t.reverse(), t;
    }, oi = (e, t) => se(e, (n) => !ke(t, n)), Sc = (e, t) => {
      const n = {};
      for (let s = 0, o = e.length; s < o; s++) {
        const r = e[s];
        n[String(r)] = t(r, s);
      }
      return n;
    }, Rs = (e, t) => {
      const n = Ec.call(e, 0);
      return n.sort(t), n;
    }, ri = (e, t) => t >= 0 && t < e.length ? m.some(e[t]) : m.none(), Pt = (e) => ri(e, 0), Ps = (e) => ri(e, e.length - 1), Ft = Se(Array.from) ? Array.from : (e) => Ec.call(e), wo = (e, t) => {
      for (let n = 0; n < e.length; n++) {
        const s = t(e[n], n);
        if (s.isSome())
          return s;
      }
      return m.none();
    }, y_ = (e, t) => {
      const n = [], s = Se(t) ? (o) => Fe(n, (r) => t(r, o)) : (o) => ke(n, o);
      for (let o = 0, r = e.length; o < r; o++) {
        const a = e[o];
        s(a) || n.push(a);
      }
      return n;
    }, Dt = Object.keys, E_ = Object.hasOwnProperty, Ae = (e, t) => {
      const n = Dt(e);
      for (let s = 0, o = n.length; s < o; s++) {
        const r = n[s], a = e[r];
        t(a, r);
      }
    }, ai = (e, t) => S_(e, (n, s) => ({
      k: s,
      v: t(n, s)
    })), S_ = (e, t) => {
      const n = {};
      return Ae(e, (s, o) => {
        const r = t(s, o);
        n[r.k] = r.v;
      }), n;
    }, wc = (e) => (t, n) => {
      e[n] = t;
    }, ag = (e, t, n, s) => {
      Ae(e, (o, r) => {
        (t(o, r) ? n : s)(o, r);
      });
    }, w_ = (e, t) => {
      const n = {}, s = {};
      return ag(e, t, wc(n), wc(s)), {
        t: n,
        f: s
      };
    }, Er = (e, t) => {
      const n = {};
      return ag(e, t, wc(n), ce), n;
    }, ii = (e, t) => {
      const n = [];
      return Ae(e, (s, o) => {
        n.push(t(s, o));
      }), n;
    }, kc = (e) => ii(e, _t), Re = (e, t) => oe(e, t) ? m.from(e[t]) : m.none(), oe = (e, t) => E_.call(e, t), ko = (e, t) => oe(e, t) && e[t] !== void 0 && e[t] !== null, k_ = (e, t, n = bc) => Ym(n).eq(e, t), ig = (e) => {
      const t = {};
      return P(e, (n) => {
        t[n] = {};
      }), Dt(t);
    }, lg = (e) => e.length !== void 0, _c = Array.isArray, __ = (e) => {
      if (_c(e))
        return e;
      {
        const t = [];
        for (let n = 0, s = e.length; n < s; n++)
          t[n] = e[n];
        return t;
      }
    }, li = (e, t, n) => {
      if (!e)
        return !1;
      if (n = n || e, lg(e)) {
        for (let s = 0, o = e.length; s < o; s++)
          if (t.call(n, e[s], s, e) === !1)
            return !1;
      } else
        for (const s in e)
          if (oe(e, s) && t.call(n, e[s], s, e) === !1)
            return !1;
      return !0;
    }, xc = (e, t) => {
      const n = [];
      return li(e, (s, o) => {
        n.push(t(s, o, e));
      }), n;
    }, Sr = (e, t) => {
      const n = [];
      return li(e, (s, o) => {
        (!t || t(s, o, e)) && n.push(s);
      }), n;
    }, x_ = (e, t) => {
      if (e) {
        for (let n = 0, s = e.length; n < s; n++)
          if (e[n] === t)
            return n;
      }
      return -1;
    }, ci = (e, t, n, s) => {
      let o = lt(n) ? e[0] : n;
      for (let r = 0; r < e.length; r++)
        o = t.call(s, o, e[r], r);
      return o;
    }, cg = (e, t, n) => {
      for (let s = 0, o = e.length; s < o; s++)
        if (t.call(n, e[s], s, e))
          return s;
      return -1;
    }, Ds = (e) => e[e.length - 1], Os = (e) => {
      let t = !1, n;
      return (...s) => (t || (t = !0, n = e.apply(null, s)), n);
    }, N_ = (e, t, n, s) => {
      const o = e.isiOS() && /ipad/i.test(n) === !0, r = e.isiOS() && !o, a = e.isiOS() || e.isAndroid(), i = a || s("(pointer:coarse)"), l = o || !r && a && s("(min-device-width:768px)"), c = r || a && !l, u = t.isSafari() && e.isiOS() && /safari/i.test(n) === !1, f = !c && !l && !u;
      return {
        isiPad: V(o),
        isiPhone: V(r),
        isTablet: V(l),
        isPhone: V(c),
        isTouch: V(i),
        isAndroid: e.isAndroid,
        isiOS: e.isiOS,
        isWebView: V(u),
        isDesktop: V(f)
      };
    }, A_ = (e, t) => {
      for (let n = 0; n < e.length; n++) {
        const s = e[n];
        if (s.test(t))
          return s;
      }
    }, T_ = (e, t) => {
      const n = A_(e, t);
      if (!n)
        return {
          major: 0,
          minor: 0
        };
      const s = (o) => Number(t.replace(n, "$" + o));
      return Nc(s(1), s(2));
    }, R_ = (e, t) => {
      const n = String(t).toLowerCase();
      return e.length === 0 ? ug() : T_(e, n);
    }, ug = () => Nc(0, 0), Nc = (e, t) => ({
      major: e,
      minor: t
    }), wr = {
      nu: Nc,
      detect: R_,
      unknown: ug
    }, P_ = (e, t) => wo(t.brands, (n) => {
      const s = n.brand.toLowerCase();
      return Ye(e, (o) => {
        var r;
        return s === ((r = o.brand) === null || r === void 0 ? void 0 : r.toLowerCase());
      }).map((o) => ({
        current: o.name,
        version: wr.nu(parseInt(n.version, 10), 0)
      }));
    }), fg = (e, t) => {
      const n = String(t).toLowerCase();
      return Ye(e, (s) => s.search(n));
    }, D_ = (e, t) => fg(e, t).map((n) => {
      const s = wr.detect(n.versionRegexes, t);
      return {
        current: n.name,
        version: s
      };
    }), O_ = (e, t) => fg(e, t).map((n) => {
      const s = wr.detect(n.versionRegexes, t);
      return {
        current: n.name,
        version: s
      };
    }), B_ = (e, t) => e.substring(t), dg = (e, t, n) => t === "" || e.length >= t.length && e.substr(n, n + t.length) === t, mg = (e, t) => st(e, t) ? B_(e, t.length) : e, ft = (e, t, n = 0, s) => {
      const o = e.indexOf(t, n);
      return o !== -1 ? lt(s) ? !0 : o + t.length <= s : !1;
    }, st = (e, t) => dg(e, t, 0), Ac = (e, t) => dg(e, t, e.length - t.length), Tc = (e) => (t) => t.replace(e, ""), _o = Tc(/^\s+|\s+$/g), I_ = Tc(/^\s+/g), gg = Tc(/\s+$/g), wn = (e) => e.length > 0, kr = (e) => !wn(e), L_ = (e, t) => t <= 0 ? "" : new Array(t + 1).join(e), ui = (e, t = 10) => {
      const n = parseInt(e, t);
      return isNaN(n) ? m.none() : m.some(n);
    }, Rc = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, Hn = (e) => (t) => ft(t, e), $_ = [
      {
        name: "Edge",
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: (e) => ft(e, "edge/") && ft(e, "chrome") && ft(e, "safari") && ft(e, "applewebkit")
      },
      {
        name: "Chromium",
        brand: "Chromium",
        versionRegexes: [
          /.*?chrome\/([0-9]+)\.([0-9]+).*/,
          Rc
        ],
        search: (e) => ft(e, "chrome") && !ft(e, "chromeframe")
      },
      {
        name: "IE",
        versionRegexes: [
          /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
          /.*?rv:([0-9]+)\.([0-9]+).*/
        ],
        search: (e) => ft(e, "msie") || ft(e, "trident")
      },
      {
        name: "Opera",
        versionRegexes: [
          Rc,
          /.*?opera\/([0-9]+)\.([0-9]+).*/
        ],
        search: Hn("opera")
      },
      {
        name: "Firefox",
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: Hn("firefox")
      },
      {
        name: "Safari",
        versionRegexes: [
          Rc,
          /.*?cpu os ([0-9]+)_([0-9]+).*/
        ],
        search: (e) => (ft(e, "safari") || ft(e, "mobile/")) && ft(e, "applewebkit")
      }
    ], F_ = [
      {
        name: "Windows",
        search: Hn("win"),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: "iOS",
        search: (e) => ft(e, "iphone") || ft(e, "ipad"),
        versionRegexes: [
          /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
          /.*cpu os ([0-9]+)_([0-9]+).*/,
          /.*cpu iphone os ([0-9]+)_([0-9]+).*/
        ]
      },
      {
        name: "Android",
        search: Hn("android"),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: "macOS",
        search: Hn("mac os x"),
        versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
      },
      {
        name: "Linux",
        search: Hn("linux"),
        versionRegexes: []
      },
      {
        name: "Solaris",
        search: Hn("sunos"),
        versionRegexes: []
      },
      {
        name: "FreeBSD",
        search: Hn("freebsd"),
        versionRegexes: []
      },
      {
        name: "ChromeOS",
        search: Hn("cros"),
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
      }
    ], pg = {
      browsers: V($_),
      oses: V(F_)
    }, M_ = "Edge", U_ = "Chromium", z_ = "IE", H_ = "Opera", W_ = "Firefox", V_ = "Safari", j_ = () => hg({
      current: void 0,
      version: wr.unknown()
    }), hg = (e) => {
      const t = e.current, n = e.version, s = (o) => () => t === o;
      return {
        current: t,
        version: n,
        isEdge: s(M_),
        isChromium: s(U_),
        isIE: s(z_),
        isOpera: s(H_),
        isFirefox: s(W_),
        isSafari: s(V_)
      };
    }, bg = {
      unknown: j_,
      nu: hg
    }, q_ = "Windows", K_ = "iOS", G_ = "Android", Y_ = "Linux", X_ = "macOS", Z_ = "Solaris", Q_ = "FreeBSD", J_ = "ChromeOS", ex = () => Cg({
      current: void 0,
      version: wr.unknown()
    }), Cg = (e) => {
      const t = e.current, n = e.version, s = (o) => () => t === o;
      return {
        current: t,
        version: n,
        isWindows: s(q_),
        isiOS: s(K_),
        isAndroid: s(G_),
        isMacOS: s(X_),
        isLinux: s(Y_),
        isSolaris: s(Z_),
        isFreeBSD: s(Q_),
        isChromeOS: s(J_)
      };
    }, vg = {
      unknown: ex,
      nu: Cg
    }, tx = { detect: (e, t, n) => {
      const s = pg.browsers(), o = pg.oses(), r = t.bind((l) => P_(s, l)).orThunk(() => D_(s, e)).fold(bg.unknown, bg.nu), a = O_(o, e).fold(vg.unknown, vg.nu), i = N_(a, r, e, n);
      return {
        browser: r,
        os: a,
        deviceType: i
      };
    } }, nx = (e) => window.matchMedia(e).matches;
    let sx = Os(() => tx.detect(navigator.userAgent, m.from(navigator.userAgentData), nx));
    const kn = () => sx(), ox = navigator.userAgent, Pc = kn(), _n = Pc.browser, xn = Pc.os, Bs = Pc.deviceType, rx = ox.indexOf("Windows Phone") !== -1, be = {
      transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      documentMode: _n.isIE() ? document.documentMode || 7 : 10,
      cacheSuffix: null,
      container: null,
      canHaveCSP: !_n.isIE(),
      windowsPhone: rx,
      browser: {
        current: _n.current,
        version: _n.version,
        isChromium: _n.isChromium,
        isEdge: _n.isEdge,
        isFirefox: _n.isFirefox,
        isIE: _n.isIE,
        isOpera: _n.isOpera,
        isSafari: _n.isSafari
      },
      os: {
        current: xn.current,
        version: xn.version,
        isAndroid: xn.isAndroid,
        isChromeOS: xn.isChromeOS,
        isFreeBSD: xn.isFreeBSD,
        isiOS: xn.isiOS,
        isLinux: xn.isLinux,
        isMacOS: xn.isMacOS,
        isSolaris: xn.isSolaris,
        isWindows: xn.isWindows
      },
      deviceType: {
        isDesktop: Bs.isDesktop,
        isiPad: Bs.isiPad,
        isiPhone: Bs.isiPhone,
        isPhone: Bs.isPhone,
        isTablet: Bs.isTablet,
        isTouch: Bs.isTouch,
        isWebView: Bs.isWebView
      }
    }, ax = /^\s*|\s*$/g, yg = (e) => qe(e) ? "" : ("" + e).replace(ax, ""), ix = (e, t) => t ? t === "array" && _c(e) ? !0 : typeof e === t : e !== void 0, lx = (e, t, n = {}) => {
      const s = J(e) ? e.split(t || ",") : e || [];
      let o = s.length;
      for (; o--; )
        n[s[o]] = {};
      return n;
    }, cx = oe, ux = (e, ...t) => {
      for (let n = 0; n < t.length; n++) {
        const s = t[n];
        for (const o in s)
          if (oe(s, o)) {
            const r = s[o];
            r !== void 0 && (e[o] = r);
          }
      }
      return e;
    }, Eg = function(e, t, n, s) {
      s = s || this, e && (n && (e = e[n]), li(e, (o, r) => t.call(s, o, r, n) === !1 ? !1 : (Eg(o, t, n, s), !0)));
    }, L = {
      trim: yg,
      isArray: _c,
      is: ix,
      toArray: __,
      makeMap: lx,
      each: li,
      map: xc,
      grep: Sr,
      inArray: x_,
      hasOwn: cx,
      extend: ux,
      walk: Eg,
      resolve: (e, t = window) => {
        const n = e.split(".");
        for (let s = 0, o = n.length; s < o && (t = t[n[s]], !!t); s++)
          ;
        return t;
      },
      explode: (e, t) => Ge(e) ? e : e === "" ? [] : xc(e.split(t || ","), yg),
      _addCacheSuffix: (e) => {
        const t = be.cacheSuffix;
        return t && (e += (e.indexOf("?") === -1 ? "?" : "&") + t), e;
      }
    }, xo = (e, t, n = eg) => e.exists((s) => n(s, t)), Sg = (e, t, n = eg) => dt(e, t, n).getOr(e.isNone() && t.isNone()), fx = (e) => {
      const t = [], n = (s) => {
        t.push(s);
      };
      for (let s = 0; s < e.length; s++)
        e[s].each(n);
      return t;
    }, dt = (e, t, n) => e.isSome() && t.isSome() ? m.some(n(e.getOrDie(), t.getOrDie())) : m.none(), dx = (e, t, n, s) => e.isSome() && t.isSome() && n.isSome() ? m.some(s(e.getOrDie(), t.getOrDie(), n.getOrDie())) : m.none(), No = (e, t) => e ? m.some(t) : m.none(), mx = typeof window < "u" ? window : Function("return this;")(), gx = (e, t) => {
      let n = t ?? mx;
      for (let s = 0; s < e.length && n !== void 0 && n !== null; ++s)
        n = n[e[s]];
      return n;
    }, wg = (e, t) => {
      const n = e.split(".");
      return gx(n, t);
    }, px = (e, t) => wg(e, t), hx = (e, t) => {
      const n = px(e, t);
      if (n == null)
        throw new Error(e + " not available on this browser");
      return n;
    }, bx = Object.getPrototypeOf, Cx = (e) => hx("HTMLElement", e), vx = (e) => {
      const t = wg("ownerDocument.defaultView", e);
      return vt(e) && (Cx(t).prototype.isPrototypeOf(e) || /^HTML\w*Element$/.test(bx(e).constructor.name));
    }, kg = 8, _g = 9, xg = 11, _r = 1, Ng = 3, pe = (e) => e.dom.nodeName.toLowerCase(), Ag = (e) => e.dom.nodeType, fi = (e) => (t) => Ag(t) === e, yx = (e) => Ag(e) === kg || pe(e) === "#comment", di = (e) => Mt(e) && vx(e.dom), Mt = fi(_r), jt = fi(Ng), Ex = fi(_g), Sx = fi(xg), mi = (e) => (t) => Mt(t) && pe(t) === e, Tg = (e, t, n) => {
      if (J(n) || Ts(n) || mn(n))
        e.setAttribute(t, n + "");
      else
        throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
    }, ot = (e, t, n) => {
      Tg(e.dom, t, n);
    }, Wn = (e, t) => {
      const n = e.dom;
      Ae(t, (s, o) => {
        Tg(n, o, s);
      });
    }, Ut = (e, t) => {
      const n = e.dom.getAttribute(t);
      return n === null ? void 0 : n;
    }, Vn = (e, t) => m.from(Ut(e, t)), xr = (e, t) => {
      const n = e.dom;
      return n && n.hasAttribute ? n.hasAttribute(t) : !1;
    }, rt = (e, t) => {
      e.dom.removeAttribute(t);
    }, wx = (e) => {
      const t = e.dom.attributes;
      return t == null || t.length === 0;
    }, Rg = (e) => Rt(e.dom.attributes, (t, n) => (t[n.name] = n.value, t), {}), Dc = (e, t) => {
      const n = Ut(e, t);
      return n === void 0 || n === "" ? [] : n.split(" ");
    }, kx = (e, t, n) => {
      const o = Dc(e, t).concat([n]);
      return ot(e, t, o.join(" ")), !0;
    }, _x = (e, t, n) => {
      const s = se(Dc(e, t), (o) => o !== n);
      return s.length > 0 ? ot(e, t, s.join(" ")) : rt(e, t), !1;
    }, Nr = (e) => e.dom.classList !== void 0, Pg = (e) => Dc(e, "class"), Dg = (e, t) => kx(e, "class", t), Og = (e, t) => _x(e, "class", t), xx = (e, t) => ke(Pg(e), t) ? Og(e, t) : Dg(e, t), Ao = (e, t) => {
      Nr(e) ? e.dom.classList.add(t) : Dg(e, t);
    }, Bg = (e) => {
      (Nr(e) ? e.dom.classList : Pg(e)).length === 0 && rt(e, "class");
    }, Ar = (e, t) => {
      Nr(e) ? e.dom.classList.remove(t) : Og(e, t), Bg(e);
    }, Nx = (e, t) => {
      const n = Nr(e) ? e.dom.classList.toggle(t) : xx(e, t);
      return Bg(e), n;
    }, Oc = (e, t) => Nr(e) && e.dom.classList.contains(t), Ax = (e, t) => {
      const s = (t || document).createElement("div");
      if (s.innerHTML = e, !s.hasChildNodes() || s.childNodes.length > 1) {
        const o = "HTML does not have a single root node";
        throw console.error(o, e), new Error(o);
      }
      return Tr(s.childNodes[0]);
    }, Tx = (e, t) => {
      const s = (t || document).createElement(e);
      return Tr(s);
    }, Rx = (e, t) => {
      const s = (t || document).createTextNode(e);
      return Tr(s);
    }, Tr = (e) => {
      if (e == null)
        throw new Error("Node cannot be null or undefined");
      return { dom: e };
    }, C = {
      fromHtml: Ax,
      fromTag: Tx,
      fromText: Rx,
      fromDom: Tr,
      fromPoint: (e, t, n) => m.from(e.dom.elementFromPoint(t, n)).map(Tr)
    }, Ig = (e, t) => {
      const n = [], s = (r) => (n.push(r), t(r));
      let o = t(e);
      do
        o = o.bind(s);
      while (o.isSome());
      return n;
    }, gn = (e, t) => {
      const n = e.dom;
      if (n.nodeType !== _r)
        return !1;
      {
        const s = n;
        if (s.matches !== void 0)
          return s.matches(t);
        if (s.msMatchesSelector !== void 0)
          return s.msMatchesSelector(t);
        if (s.webkitMatchesSelector !== void 0)
          return s.webkitMatchesSelector(t);
        if (s.mozMatchesSelector !== void 0)
          return s.mozMatchesSelector(t);
        throw new Error("Browser lacks native selectors");
      }
    }, Lg = (e) => e.nodeType !== _r && e.nodeType !== _g && e.nodeType !== xg || e.childElementCount === 0, Px = (e, t) => {
      const n = t === void 0 ? document : t.dom;
      return Lg(n) ? [] : he(n.querySelectorAll(e), C.fromDom);
    }, Dx = (e, t) => {
      const n = t === void 0 ? document : t.dom;
      return Lg(n) ? m.none() : m.from(n.querySelector(e)).map(C.fromDom);
    }, ve = (e, t) => e.dom === t.dom, jn = (e, t) => {
      const n = e.dom, s = t.dom;
      return n === s ? !1 : n.contains(s);
    }, $g = (e) => C.fromDom(e.dom.ownerDocument), qn = (e) => Ex(e) ? e : $g(e), Ox = (e) => C.fromDom(qn(e).dom.documentElement), Rr = (e) => C.fromDom(qn(e).dom.defaultView), on = (e) => m.from(e.dom.parentNode).map(C.fromDom), gi = (e) => m.from(e.dom.parentElement).map(C.fromDom), Fg = (e, t) => {
      const n = Se(t) ? t : Le;
      let s = e.dom;
      const o = [];
      for (; s.parentNode !== null && s.parentNode !== void 0; ) {
        const r = s.parentNode, a = C.fromDom(r);
        if (o.push(a), n(a) === !0)
          break;
        s = r;
      }
      return o;
    }, Bx = (e) => {
      const t = (n) => se(n, (s) => !ve(e, s));
      return on(e).map(at).map(t).getOr([]);
    }, Is = (e) => m.from(e.dom.previousSibling).map(C.fromDom), Pr = (e) => m.from(e.dom.nextSibling).map(C.fromDom), Mg = (e) => yr(Ig(e, Is)), Ug = (e) => Ig(e, Pr), at = (e) => he(e.dom.childNodes, C.fromDom), To = (e, t) => {
      const n = e.dom.childNodes;
      return m.from(n[t]).map(C.fromDom);
    }, Bc = (e) => To(e, 0), Ic = (e) => To(e, e.dom.childNodes.length - 1), Lc = (e) => e.dom.childNodes.length, Ix = (e) => e.dom.hasChildNodes(), Lx = (e) => {
      const t = e.dom.head;
      if (t == null)
        throw new Error("Head is not available yet");
      return C.fromDom(t);
    }, $c = (e) => Sx(e) && M(e.dom.host), zg = Se(Element.prototype.attachShadow) && Se(Node.prototype.getRootNode), $x = V(zg), rs = zg ? (e) => C.fromDom(e.dom.getRootNode()) : qn, Fc = (e) => $c(e) ? e : Lx(qn(e)), Fx = (e) => $c(e) ? e : C.fromDom(qn(e).dom.body), Mx = (e) => {
      const t = rs(e);
      return $c(t) ? m.some(t) : m.none();
    }, Ux = (e) => C.fromDom(e.dom.host), Hg = (e) => {
      if ($x() && M(e.target)) {
        const t = C.fromDom(e.target);
        if (Mt(t) && zx(t) && e.composed && e.composedPath) {
          const n = e.composedPath();
          if (n)
            return Pt(n);
        }
      }
      return m.from(e.target);
    }, zx = (e) => M(e.dom.shadowRoot), Ro = (e) => {
      const t = jt(e) ? e.dom.parentNode : e.dom;
      if (t == null || t.ownerDocument === null)
        return !1;
      const n = t.ownerDocument;
      return Mx(C.fromDom(t)).fold(() => n.body.contains(t), Jm(Ro, Ux));
    };
    var Wg = (e, t, n, s, o) => e(n, s) ? m.some(n) : Se(o) && o(n) ? m.none() : t(n, s, o);
    const Kn = (e, t, n) => {
      let s = e.dom;
      const o = Se(n) ? n : Le;
      for (; s.parentNode; ) {
        s = s.parentNode;
        const r = C.fromDom(s);
        if (t(r))
          return m.some(r);
        if (o(r))
          break;
      }
      return m.none();
    }, Ls = (e, t, n) => Wg((o, r) => r(o), Kn, e, t, n), Hx = (e, t) => {
      const n = e.dom;
      return n.parentNode ? Wx(C.fromDom(n.parentNode), (s) => !ve(e, s) && t(s)) : m.none();
    }, Wx = (e, t) => {
      const n = (o) => t(C.fromDom(o));
      return Ye(e.dom.childNodes, n).map(C.fromDom);
    }, Vg = (e, t) => {
      const n = (s) => {
        for (let o = 0; o < s.childNodes.length; o++) {
          const r = C.fromDom(s.childNodes[o]);
          if (t(r))
            return m.some(r);
          const a = n(s.childNodes[o]);
          if (a.isSome())
            return a;
        }
        return m.none();
      };
      return n(e.dom);
    }, Dr = (e, t, n) => Kn(e, (s) => gn(s, t), n), Or = (e, t) => Dx(t, e), $s = (e, t, n) => Wg((o, r) => gn(o, r), Dr, e, t, n), Vx = (e) => $s(e, "[contenteditable]"), Fs = (e, t = !1) => Ro(e) ? e.dom.isContentEditable : Vx(e).fold(V(t), (n) => jx(n) === "true"), jx = (e) => e.dom.contentEditable, Br = (e) => e.style !== void 0 && Se(e.style.getPropertyValue), jg = (e, t, n) => {
      if (!J(n))
        throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
      Br(e) && e.style.setProperty(t, n);
    }, qx = (e, t) => {
      Br(e) && e.style.removeProperty(t);
    }, qg = (e, t, n) => {
      const s = e.dom;
      jg(s, t, n);
    }, pi = (e, t) => {
      const n = e.dom;
      Ae(t, (s, o) => {
        jg(n, o, s);
      });
    }, Nn = (e, t) => {
      const n = e.dom, o = window.getComputedStyle(n).getPropertyValue(t);
      return o === "" && !Ro(e) ? Kg(n, t) : o;
    }, Kg = (e, t) => Br(e) ? e.style.getPropertyValue(t) : "", hi = (e, t) => {
      const n = e.dom, s = Kg(n, t);
      return m.from(s).filter((o) => o.length > 0);
    }, Mc = (e) => {
      const t = {}, n = e.dom;
      if (Br(n))
        for (let s = 0; s < n.style.length; s++) {
          const o = n.style.item(s);
          t[o] = n.style[o];
        }
      return t;
    }, Gg = (e, t) => {
      const n = e.dom;
      qx(n, t), xo(Vn(e, "style").map(_o), "") && rt(e, "style");
    }, Kx = (e) => e.dom.offsetWidth, Ot = (e, t) => {
      on(e).each((s) => {
        s.dom.insertBefore(t.dom, e.dom);
      });
    }, Gn = (e, t) => {
      Pr(e).fold(() => {
        on(e).each((o) => {
          We(o, t);
        });
      }, (s) => {
        Ot(s, t);
      });
    }, Uc = (e, t) => {
      Bc(e).fold(() => {
        We(e, t);
      }, (s) => {
        e.dom.insertBefore(t.dom, s.dom);
      });
    }, We = (e, t) => {
      e.dom.appendChild(t.dom);
    }, Yg = (e, t) => {
      Ot(e, t), We(t, e);
    }, Gx = (e, t) => {
      P(t, (n, s) => {
        const o = s === 0 ? e : t[s - 1];
        Gn(o, n);
      });
    }, Ms = (e, t) => {
      P(t, (n) => {
        We(e, n);
      });
    }, Po = (e) => {
      e.dom.textContent = "", P(at(e), (t) => {
        Pe(t);
      });
    }, Pe = (e) => {
      const t = e.dom;
      t.parentNode !== null && t.parentNode.removeChild(t);
    }, Yn = (e) => {
      const t = at(e);
      t.length > 0 && Gx(e, t), Pe(e);
    }, Yx = (e, t) => {
      const s = (t || document).createElement("div");
      return s.innerHTML = e, at(C.fromDom(s));
    }, zc = (e) => he(e, C.fromDom), Xg = (e) => e.dom.innerHTML, bi = (e, t) => {
      const s = $g(e).dom, o = C.fromDom(s.createDocumentFragment()), r = Yx(t, s);
      Ms(o, r), Po(e), We(e, o);
    }, Xx = (e) => {
      const t = C.fromTag("div"), n = C.fromDom(e.dom.cloneNode(!0));
      return We(t, n), Xg(t);
    }, Zx = (e, t, n, s, o, r, a) => ({
      target: e,
      x: t,
      y: n,
      stop: s,
      prevent: o,
      kill: r,
      raw: a
    }), Qx = (e) => {
      const t = C.fromDom(Hg(e).getOr(e.target)), n = () => e.stopPropagation(), s = () => e.preventDefault(), o = Sn(s, n);
      return Zx(t, e.clientX, e.clientY, n, s, o, e);
    }, Jx = (e, t) => (n) => {
      e(n) && t(Qx(n));
    }, eN = (e, t, n, s, o) => {
      const r = Jx(n, s);
      return e.dom.addEventListener(t, r, o), { unbind: j(nN, e, t, r, o) };
    }, tN = (e, t, n, s) => eN(e, t, n, s, !1), nN = (e, t, n, s) => {
      e.dom.removeEventListener(t, n, s);
    }, Zg = (e, t) => ({
      left: e,
      top: t,
      translate: (s, o) => Zg(e + s, t + o)
    }), Do = Zg, sN = (e) => {
      const t = e.getBoundingClientRect();
      return Do(t.left, t.top);
    }, Ci = (e, t) => e !== void 0 ? e : t !== void 0 ? t : 0, oN = (e) => {
      const t = e.dom.ownerDocument, n = t.body, s = t.defaultView, o = t.documentElement;
      if (n === e.dom)
        return Do(n.offsetLeft, n.offsetTop);
      const r = Ci(s == null ? void 0 : s.pageYOffset, o.scrollTop), a = Ci(s == null ? void 0 : s.pageXOffset, o.scrollLeft), i = Ci(o.clientTop, n.clientTop), l = Ci(o.clientLeft, n.clientLeft);
      return Hc(e).translate(a - l, r - i);
    }, Hc = (e) => {
      const t = e.dom, s = t.ownerDocument.body;
      return s === t ? Do(s.offsetLeft, s.offsetTop) : Ro(e) ? sN(t) : Do(0, 0);
    }, Wc = (e) => {
      const t = e !== void 0 ? e.dom : document, n = t.body.scrollLeft || t.documentElement.scrollLeft, s = t.body.scrollTop || t.documentElement.scrollTop;
      return Do(n, s);
    }, Qg = (e, t, n) => {
      const o = (n !== void 0 ? n.dom : document).defaultView;
      o && o.scrollTo(e, t);
    }, Jg = (e, t) => {
      kn().browser.isSafari() && Se(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t);
    }, rN = (e) => {
      const t = e === void 0 ? window : e;
      return kn().browser.isFirefox() ? m.none() : m.from(t.visualViewport);
    }, ep = (e, t, n, s) => ({
      x: e,
      y: t,
      width: n,
      height: s,
      right: e + n,
      bottom: t + s
    }), tp = (e) => {
      const t = e === void 0 ? window : e, n = t.document, s = Wc(C.fromDom(n));
      return rN(t).fold(() => {
        const o = t.document.documentElement, r = o.clientWidth, a = o.clientHeight;
        return ep(s.left, s.top, r, a);
      }, (o) => ep(Math.max(o.pageLeft, s.left), Math.max(o.pageTop, s.top), o.width, o.height));
    }, aN = (e, t) => se(at(e), t), np = (e, t) => {
      let n = [];
      return P(at(e), (s) => {
        t(s) && (n = n.concat([s])), n = n.concat(np(s, t));
      }), n;
    }, mt = (e, t) => Px(t, e), sp = (e, t, n) => Dr(e, t, n).isSome();
    class Xe {
      constructor(t, n) {
        this.node = t, this.rootNode = n, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this);
      }
      current() {
        return this.node;
      }
      next(t) {
        return this.node = this.findSibling(this.node, "firstChild", "nextSibling", t), this.node;
      }
      prev(t) {
        return this.node = this.findSibling(this.node, "lastChild", "previousSibling", t), this.node;
      }
      prev2(t) {
        return this.node = this.findPreviousNode(this.node, t), this.node;
      }
      findSibling(t, n, s, o) {
        if (t) {
          if (!o && t[n])
            return t[n];
          if (t !== this.rootNode) {
            let r = t[s];
            if (r)
              return r;
            for (let a = t.parentNode; a && a !== this.rootNode; a = a.parentNode)
              if (r = a[s], r)
                return r;
          }
        }
      }
      findPreviousNode(t, n) {
        if (t) {
          const s = t.previousSibling;
          if (this.rootNode && s === this.rootNode)
            return;
          if (s) {
            if (!n) {
              for (let r = s.lastChild; r; r = r.lastChild)
                if (!r.lastChild)
                  return r;
            }
            return s;
          }
          const o = t.parentNode;
          if (o && o !== this.rootNode)
            return o;
        }
      }
    }
    const Us = (e) => (t) => !!t && t.nodeType === e, vi = (e) => !!e && !Object.getPrototypeOf(e), q = Us(1), Xn = (e) => q(e) && di(C.fromDom(e)), iN = (e) => q(e) && e.namespaceURI === "http://www.w3.org/2000/svg", Ir = (e) => {
      const t = e.toLowerCase();
      return (n) => M(n) && n.nodeName.toLowerCase() === t;
    }, pn = (e) => {
      const t = e.map((n) => n.toLowerCase());
      return (n) => {
        if (n && n.nodeName) {
          const s = n.nodeName.toLowerCase();
          return ke(t, s);
        }
        return !1;
      };
    }, yi = (e, t) => {
      const n = t.toLowerCase().split(" ");
      return (s) => {
        if (q(s)) {
          const o = s.ownerDocument.defaultView;
          if (o)
            for (let r = 0; r < n.length; r++) {
              const a = o.getComputedStyle(s, null);
              if ((a ? a.getPropertyValue(e) : null) === n[r])
                return !0;
            }
        }
        return !1;
      };
    }, op = (e) => (t) => q(t) && t.hasAttribute(e), lN = (e, t) => (n) => q(n) && n.getAttribute(e) === t, zs = (e) => q(e) && e.hasAttribute("data-mce-bogus"), cN = (e) => q(e) && e.getAttribute("data-mce-bogus") === "all", Zn = (e) => q(e) && e.tagName === "TABLE", rp = (e) => (t) => !!(Xn(t) && (t.contentEditable === e || t.getAttribute("data-mce-contenteditable") === e)), Vc = pn([
      "textarea",
      "input"
    ]), B = Us(3), uN = Us(4), fN = Us(7), as = Us(8), Lr = Us(9), jc = Us(11), $e = Ir("br"), ap = Ir("img"), rn = rp("true"), De = rp("false"), Ei = pn([
      "td",
      "th"
    ]), dN = pn([
      "td",
      "th",
      "caption"
    ]), An = pn([
      "video",
      "audio",
      "object",
      "embed"
    ]), mN = Ir("li"), qc = Ir("details"), gN = Ir("summary"), $r = "\uFEFF", Je = " ", Kc = (e) => e === $r, pN = (e) => e.replace(/\uFEFF/g, ""), Gc = ((e, t) => {
      const n = (r) => {
        if (!e(r))
          throw new Error("Can only get " + t + " value of a " + t + " node");
        return s(r).getOr("");
      }, s = (r) => e(r) ? m.from(r.dom.nodeValue) : m.none();
      return {
        get: n,
        getOption: s,
        set: (r, a) => {
          if (!e(r))
            throw new Error("Can only set raw " + t + " value of a " + t + " node");
          r.dom.nodeValue = a;
        }
      };
    })(jt, "text"), Si = (e) => Gc.get(e), ip = (e) => Gc.getOption(e), hN = (e, t) => Gc.set(e, t), bN = [
      "td",
      "th"
    ], CN = [
      "thead",
      "tbody",
      "tfoot"
    ], vN = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "div",
      "address",
      "pre",
      "form",
      "blockquote",
      "center",
      "dir",
      "fieldset",
      "header",
      "footer",
      "article",
      "section",
      "hgroup",
      "aside",
      "nav",
      "figure"
    ], yN = [
      "li",
      "dd",
      "dt"
    ], EN = [
      "ul",
      "ol",
      "dl"
    ], SN = [
      "pre",
      "script",
      "textarea",
      "style"
    ], Oo = (e) => {
      let t;
      return (n) => (t = t || Sc(e, He), oe(t, pe(n)));
    }, wN = (e) => pe(e) === "table", Hs = (e) => Mt(e) && pe(e) === "br", lp = Oo(vN), Yc = Oo(EN), Fr = Oo(yN), kN = Oo(CN), Mr = Oo(bN), wi = Oo(SN), _N = (e) => {
      const t = [];
      let n = e.dom;
      for (; n; )
        t.push(C.fromDom(n)), n = n.lastChild;
      return t;
    }, xN = (e) => {
      const t = mt(e, "br"), n = se(_N(e).slice(-1), Hs);
      t.length === n.length && P(n, Pe);
    }, Ur = () => {
      const e = C.fromTag("br");
      return ot(e, "data-mce-bogus", "1"), e;
    }, is = (e) => {
      Po(e), We(e, Ur());
    }, NN = (e, t) => {
      Ic(e).each((n) => {
        Is(n).each((s) => {
          t.isBlock(pe(e)) && Hs(n) && t.isBlock(pe(s)) && Pe(n);
        });
      });
    }, Ze = $r, ki = Kc, zt = pN, AN = (e) => e.insertContent(Ze, { preserve_zwsp: !0 }), TN = q, Bo = B, Io = (e) => (Bo(e) && (e = e.parentNode), TN(e) && e.hasAttribute("data-mce-caret")), ls = (e) => Bo(e) && ki(e.data), qt = (e) => Io(e) || ls(e), cp = (e) => e.firstChild !== e.lastChild || !$e(e.firstChild), RN = (e, t) => {
      var n;
      const o = ((n = e.ownerDocument) !== null && n !== void 0 ? n : document).createTextNode(Ze), r = e.parentNode;
      if (t) {
        const a = e.previousSibling;
        if (Bo(a)) {
          if (qt(a))
            return a;
          if (xi(a))
            return a.splitText(a.data.length - 1);
        }
        r == null || r.insertBefore(o, e);
      } else {
        const a = e.nextSibling;
        if (Bo(a)) {
          if (qt(a))
            return a;
          if (_i(a))
            return a.splitText(1), a;
        }
        e.nextSibling ? r == null || r.insertBefore(o, e.nextSibling) : r == null || r.appendChild(o);
      }
      return o;
    }, Xc = (e) => {
      const t = e.container();
      return B(t) ? t.data.charAt(e.offset()) === Ze || e.isAtStart() && ls(t.previousSibling) : !1;
    }, Zc = (e) => {
      const t = e.container();
      return B(t) ? t.data.charAt(e.offset() - 1) === Ze || e.isAtEnd() && ls(t.nextSibling) : !1;
    }, PN = (e, t, n) => {
      var s;
      const r = ((s = t.ownerDocument) !== null && s !== void 0 ? s : document).createElement(e);
      r.setAttribute("data-mce-caret", n ? "before" : "after"), r.setAttribute("data-mce-bogus", "all"), r.appendChild(Ur().dom);
      const a = t.parentNode;
      return n ? a == null || a.insertBefore(r, t) : t.nextSibling ? a == null || a.insertBefore(r, t.nextSibling) : a == null || a.appendChild(r), r;
    }, _i = (e) => Bo(e) && e.data[0] === Ze, xi = (e) => Bo(e) && e.data[e.data.length - 1] === Ze, DN = (e) => {
      var t;
      const n = e.getElementsByTagName("br"), s = n[n.length - 1];
      zs(s) && ((t = s.parentNode) === null || t === void 0 || t.removeChild(s));
    }, Qc = (e) => e && e.hasAttribute("data-mce-caret") ? (DN(e), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("data-mce-style"), e.removeAttribute("_moz_abspos"), e) : null, up = (e) => Io(e.startContainer), fp = rn, ON = De, BN = $e, IN = B, LN = pn([
      "script",
      "style",
      "textarea"
    ]), dp = pn([
      "img",
      "input",
      "textarea",
      "hr",
      "iframe",
      "video",
      "audio",
      "object",
      "embed"
    ]), $N = pn(["table"]), FN = qt, an = (e) => FN(e) ? !1 : IN(e) ? !LN(e.parentNode) : dp(e) || BN(e) || $N(e) || Jc(e), MN = (e) => q(e) && e.getAttribute("unselectable") === "true", Jc = (e) => !MN(e) && ON(e), UN = (e, t) => {
      for (let n = e.parentNode; n && n !== t; n = n.parentNode) {
        if (Jc(n))
          return !1;
        if (fp(n))
          return !0;
      }
      return !0;
    }, zN = (e) => Jc(e) ? !Rt(Ft(e.getElementsByTagName("*")), (t, n) => t || fp(n), !1) : !1, HN = (e) => dp(e) || zN(e), mp = (e, t) => an(e) && UN(e, t), WN = /^[ \t\r\n]*$/, cs = (e) => WN.test(e), VN = (e) => {
      for (const t of e)
        if (!Kc(t))
          return !1;
      return !0;
    }, jN = (e) => " \f	\v".indexOf(e) !== -1, gp = (e) => e === `
` || e === "\r", qN = (e, t) => t < e.length && t >= 0 ? gp(e[t]) : !1, pp = (e, t = 4, n = !0, s = !0) => {
      const o = L_(" ", t), r = e.replace(/\t/g, o);
      return Rt(r, (i, l) => jN(l) || l === Je ? i.pcIsSpace || i.str === "" && n || i.str.length === r.length - 1 && s || qN(r, i.str.length + 1) ? {
        pcIsSpace: !1,
        str: i.str + Je
      } : {
        pcIsSpace: !0,
        str: i.str + " "
      } : {
        pcIsSpace: gp(l),
        str: i.str + l
      }, {
        pcIsSpace: !1,
        str: ""
      }).str;
    }, KN = (e, t) => {
      const n = C.fromDom(t), s = C.fromDom(e);
      return sp(s, "pre,code", j(ve, n));
    }, GN = (e, t) => B(e) && cs(e.data) && !KN(e, t), YN = (e) => q(e) && e.nodeName === "A" && !e.hasAttribute("href") && (e.hasAttribute("name") || e.hasAttribute("id")), Ni = (e, t) => an(e) && !GN(e, t) || YN(e) || XN(e), XN = op("data-mce-bookmark"), ZN = op("data-mce-bogus"), QN = lN("data-mce-bogus", "all"), JN = (e) => gi(C.fromDom(e)).exists((t) => !Fs(t)), eA = (e, t) => {
      let n = 0;
      if (Ni(e, e))
        return !1;
      {
        let s = e.firstChild;
        if (!s)
          return !0;
        const o = new Xe(s, e);
        do {
          if (t) {
            if (QN(s)) {
              s = o.next(!0);
              continue;
            }
            if (ZN(s)) {
              s = o.next();
              continue;
            }
          }
          if (rn(s) && JN(s))
            return !1;
          if ($e(s)) {
            n++, s = o.next();
            continue;
          }
          if (Ni(s, e))
            return !1;
          s = o.next();
        } while (s);
        return n <= 1;
      }
    }, Ue = (e, t = !0) => eA(e.dom, t), Ws = (e) => e.toLowerCase() === "svg", eu = (e) => Ws(e.nodeName), hp = (e) => (e == null ? void 0 : e.nodeName) === "svg" ? "svg" : "html", tA = ["svg"], nA = () => {
      let e = [];
      const t = () => e[e.length - 1];
      return {
        track: (r) => {
          eu(r) && e.push(r);
          let a = t();
          return a && !a.contains(r) && (e.pop(), a = t()), hp(a);
        },
        current: () => hp(t()),
        reset: () => {
          e = [];
        }
      };
    }, Ai = "data-mce-block", sA = (e) => se(Dt(e), (t) => !/[A-Z]/.test(t)), tu = (e) => he(sA(e), (t) => `${t}:` + he(tA, (n) => `not(${n} ${t})`).join(":")).join(","), bp = (e, t) => M(t.querySelector(e)) ? (t.setAttribute(Ai, "true"), t.getAttribute("data-mce-selected") === "inline-boundary" && t.removeAttribute("data-mce-selected"), !0) : (t.removeAttribute(Ai), !1), Cp = (e, t) => {
      const n = tu(e.getTransparentElements()), s = tu(e.getBlockElements());
      return se(t.querySelectorAll(n), (o) => bp(s, o));
    }, vp = (e, t) => {
      var n;
      const s = t ? "lastChild" : "firstChild";
      for (let o = e[s]; o; o = o[s])
        if (Ue(C.fromDom(o))) {
          (n = o.parentNode) === null || n === void 0 || n.removeChild(o);
          return;
        }
    }, oA = (e, t) => {
      const n = document.createRange(), s = e.parentNode;
      if (s) {
        n.setStartBefore(e), n.setEndBefore(t);
        const o = n.extractContents();
        vp(o, !0), n.setStartAfter(t), n.setEndAfter(e);
        const r = n.extractContents();
        vp(r, !1), Ue(C.fromDom(o)) || s.insertBefore(o, e), Ue(C.fromDom(t)) || s.insertBefore(t, e), Ue(C.fromDom(r)) || s.insertBefore(r, e), s.removeChild(e);
      }
    }, rA = (e, t, n) => {
      const s = e.getBlockElements(), o = C.fromDom(t), r = (i) => pe(i) in s, a = (i) => ve(i, o);
      P(zc(n), (i) => {
        Kn(i, r, a).each((l) => {
          const c = aN(i, (u) => r(u) && !e.isValidChild(pe(l), pe(u)));
          if (c.length > 0) {
            const u = gi(l);
            P(c, (f) => {
              Kn(f, r, a).each((d) => {
                oA(d.dom, f.dom);
              });
            }), u.each((f) => Cp(e, f.dom));
          }
        });
      });
    }, aA = (e, t, n) => {
      P([
        ...n,
        ...Vs(e, t) ? [t] : []
      ], (s) => P(mt(C.fromDom(s), s.nodeName.toLowerCase()), (o) => {
        cA(e, o.dom) && Yn(o);
      }));
    }, nu = (e, t) => {
      const n = Cp(e, t);
      rA(e, t, n), aA(e, t, n);
    }, iA = (e, t) => {
      if (ru(e, t)) {
        const n = tu(e.getBlockElements());
        bp(n, t);
      }
    }, lA = (e, t, n) => {
      const s = (r) => ve(r, C.fromDom(t)), o = Fg(C.fromDom(n), s);
      ri(o, o.length - 2).filter(Mt).fold(() => nu(e, t), (r) => nu(e, r.dom));
    }, su = (e) => e.hasAttribute(Ai), ou = (e, t) => oe(e.getTransparentElements(), t), ru = (e, t) => q(t) && ou(e, t.nodeName), Vs = (e, t) => ru(e, t) && su(t), cA = (e, t) => ru(e, t) && !su(t), au = (e, t) => t.type === 1 && ou(e, t.name) && J(t.attr(Ai)), uA = kn().browser, yp = (e) => Ye(e, Mt), fA = (e) => uA.isFirefox() && pe(e) === "table" ? yp(at(e)).filter((t) => pe(t) === "caption").bind((t) => yp(Ug(t)).map((n) => {
      const s = n.dom.offsetTop, o = t.dom.offsetTop, r = t.dom.offsetHeight;
      return s <= o ? -r : 0;
    })).getOr(0) : 0, Ep = (e, t) => e.children && ke(e.children, t), dA = (e, t, n) => {
      let s = 0, o = 0;
      const r = e.ownerDocument;
      if (n = n || e, t) {
        if (n === e && t.getBoundingClientRect && Nn(C.fromDom(e), "position") === "static") {
          const i = t.getBoundingClientRect();
          return s = i.left + (r.documentElement.scrollLeft || e.scrollLeft) - r.documentElement.clientLeft, o = i.top + (r.documentElement.scrollTop || e.scrollTop) - r.documentElement.clientTop, {
            x: s,
            y: o
          };
        }
        let a = t;
        for (; a && a !== n && a.nodeType && !Ep(a, n); ) {
          const i = a;
          s += i.offsetLeft || 0, o += i.offsetTop || 0, a = i.offsetParent;
        }
        for (a = t.parentNode; a && a !== n && a.nodeType && !Ep(a, n); )
          s -= a.scrollLeft || 0, o -= a.scrollTop || 0, a = a.parentNode;
        o += fA(C.fromDom(t));
      }
      return {
        x: s,
        y: o
      };
    }, Sp = (e, t = {}) => {
      let n = 0;
      const s = {}, o = C.fromDom(e), r = qn(o), a = (v) => {
        t.referrerPolicy = v;
      }, i = (v) => {
        t.contentCssCors = v;
      }, l = (v) => {
        We(Fc(o), v);
      }, c = (v) => {
        const y = Fc(o);
        Or(y, "#" + v).each(Pe);
      }, u = (v) => Re(s, v).getOrThunk(() => ({
        id: "mce-u" + n++,
        passed: [],
        failed: [],
        count: 0
      })), f = (v) => new Promise((y, E) => {
        let S;
        const T = L._addCacheSuffix(v), O = u(T);
        s[T] = O, O.count++;
        const U = (z, Z) => {
          P(z, br), O.status = Z, O.passed = [], O.failed = [], S && (S.onload = null, S.onerror = null, S = null);
        }, A = () => U(O.passed, 2), _ = () => U(O.failed, 3);
        if (y && O.passed.push(y), E && O.failed.push(E), O.status === 1)
          return;
        if (O.status === 2) {
          A();
          return;
        }
        if (O.status === 3) {
          _();
          return;
        }
        O.status = 1;
        const R = C.fromTag("link", r.dom);
        Wn(R, {
          rel: "stylesheet",
          type: "text/css",
          id: O.id
        }), t.contentCssCors && ot(R, "crossOrigin", "anonymous"), t.referrerPolicy && ot(R, "referrerpolicy", t.referrerPolicy), S = R.dom, S.onload = A, S.onerror = _, l(R), ot(R, "href", T);
      }), d = (v, y) => {
        const E = u(v);
        s[v] = E, E.count++;
        const S = C.fromTag("style", r.dom);
        Wn(S, {
          rel: "stylesheet",
          type: "text/css",
          id: E.id
        }), S.dom.innerHTML = y, l(S);
      }, p = (v) => Promise.allSettled(he(v, (E) => f(E).then(V(E)))).then((E) => {
        const S = So(E, (T) => T.status === "fulfilled");
        return S.fail.length > 0 ? Promise.reject(he(S.fail, (T) => T.reason)) : he(S.pass, (T) => T.value);
      }), h = (v) => {
        const y = L._addCacheSuffix(v);
        Re(s, y).each((E) => {
          --E.count === 0 && (delete s[y], c(E.id));
        });
      };
      return {
        load: f,
        loadRawCss: d,
        loadAll: p,
        unload: h,
        unloadRawCss: (v) => {
          Re(s, v).each((y) => {
            --y.count === 0 && (delete s[v], c(y.id));
          });
        },
        unloadAll: (v) => {
          P(v, (y) => {
            h(y);
          });
        },
        _setReferrerPolicy: a,
        _setContentCssCors: i
      };
    }, wp = (() => {
      const e = /* @__PURE__ */ new WeakMap();
      return { forElement: (n, s) => {
        const r = rs(n).dom;
        return m.from(e.get(r)).getOrThunk(() => {
          const a = Sp(r, s);
          return e.set(r, a), a;
        });
      } };
    })(), mA = (e) => e.nodeName.toLowerCase() === "span", kp = (e, t, n) => M(e) && (Ni(e, t) || n.isInline(e.nodeName.toLowerCase())), gA = (e, t, n) => {
      const s = new Xe(e, t).prev(!1), o = new Xe(e, t).next(!1), r = lt(s) || kp(s, t, n), a = lt(o) || kp(o, t, n);
      return r && a;
    }, _p = (e) => mA(e) && e.getAttribute("data-mce-type") === "bookmark", pA = (e, t, n) => B(e) && e.data.length > 0 && gA(e, t, n), hA = (e) => q(e) ? e.childNodes.length > 0 : !1, bA = (e) => jc(e) || Lr(e), iu = (e, t, n, s) => {
      var o;
      const r = s || t;
      if (q(t) && _p(t))
        return t;
      const a = t.childNodes;
      for (let i = a.length - 1; i >= 0; i--)
        iu(e, a[i], n, r);
      if (q(t)) {
        const i = t.childNodes;
        i.length === 1 && _p(i[0]) && ((o = t.parentNode) === null || o === void 0 || o.insertBefore(i[0], t));
      }
      return !bA(t) && !Ni(t, r) && !hA(t) && !pA(t, r, n) && e.remove(t), t;
    }, CA = L.makeMap, Ti = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Ri = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, vA = /[<>&\"\']/g, yA = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi, EA = {
      128: "€",
      130: "‚",
      131: "ƒ",
      132: "„",
      133: "…",
      134: "†",
      135: "‡",
      136: "ˆ",
      137: "‰",
      138: "Š",
      139: "‹",
      140: "Œ",
      142: "Ž",
      145: "‘",
      146: "’",
      147: "“",
      148: "”",
      149: "•",
      150: "–",
      151: "—",
      152: "˜",
      153: "™",
      154: "š",
      155: "›",
      156: "œ",
      158: "ž",
      159: "Ÿ"
    }, js = {
      '"': "&quot;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "`": "&#96;"
    }, SA = {
      "&lt;": "<",
      "&gt;": ">",
      "&amp;": "&",
      "&quot;": '"',
      "&apos;": "'"
    }, wA = (e) => {
      const t = C.fromTag("div").dom;
      return t.innerHTML = e, t.textContent || t.innerText || e;
    }, xp = (e, t) => {
      const n = {};
      if (e) {
        const s = e.split(",");
        t = t || 10;
        for (let o = 0; o < s.length; o += 2) {
          const r = String.fromCharCode(parseInt(s[o], t));
          if (!js[r]) {
            const a = "&" + s[o + 1] + ";";
            n[r] = a, n[a] = r;
          }
        }
        return n;
      } else
        return;
    }, lu = xp("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32), Np = (e, t) => e.replace(t ? Ti : Ri, (n) => js[n] || n), kA = (e) => ("" + e).replace(vA, (t) => js[t] || t), Ap = (e, t) => e.replace(t ? Ti : Ri, (n) => n.length > 1 ? "&#" + ((n.charCodeAt(0) - 55296) * 1024 + (n.charCodeAt(1) - 56320) + 65536) + ";" : js[n] || "&#" + n.charCodeAt(0) + ";"), cu = (e, t, n) => {
      const s = n || lu;
      return e.replace(t ? Ti : Ri, (o) => js[o] || s[o] || o);
    }, qs = {
      encodeRaw: Np,
      encodeAllRaw: kA,
      encodeNumeric: Ap,
      encodeNamed: cu,
      getEncodeFunc: (e, t) => {
        const n = xp(t) || lu, s = (a, i) => a.replace(i ? Ti : Ri, (l) => js[l] !== void 0 ? js[l] : n[l] !== void 0 ? n[l] : l.length > 1 ? "&#" + ((l.charCodeAt(0) - 55296) * 1024 + (l.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + l.charCodeAt(0) + ";"), o = (a, i) => cu(a, i, n), r = CA(e.replace(/\+/g, ","));
        return r.named && r.numeric ? s : r.named ? t ? o : cu : r.numeric ? Ap : Np;
      },
      decode: (e) => e.replace(yA, (t, n) => n ? (n.charAt(0).toLowerCase() === "x" ? n = parseInt(n.substr(1), 16) : n = parseInt(n, 10), n > 65535 ? (n -= 65536, String.fromCharCode(55296 + (n >> 10), 56320 + (n & 1023))) : EA[n] || String.fromCharCode(n)) : SA[t] || lu[t] || wA(t))
    }, ct = (e, t) => (e = L.trim(e), e ? e.split(t || " ") : []), Tp = (e) => new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$"), _A = (e) => {
      const t = /^(~)?(.+)$/;
      return sn(ct(e, ","), (n) => {
        const s = t.exec(n);
        if (s) {
          const o = s[1] === "~", r = o ? "span" : "div", a = s[2];
          return [{
            inline: o,
            cloneName: r,
            name: a
          }];
        } else
          return [];
      });
    }, xA = (e) => {
      let t, n, s;
      if (t = "id accesskey class dir lang style tabindex title role", n = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", s = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", e !== "html4") {
        const r = "a ins del canvas map";
        t += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", n += " article aside details dialog figure main header footer hgroup section nav " + r, s += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen svg";
      }
      e !== "html5-strict" && (t += " xml:lang", s = [
        s,
        "acronym applet basefont big font strike tt"
      ].join(" "), n = [
        n,
        "center dir isindex noframes"
      ].join(" "));
      const o = [
        n,
        s
      ].join(" ");
      return {
        globalAttributes: t,
        blockContent: n,
        phrasingContent: s,
        flowContent: o
      };
    }, NA = (e) => {
      const { globalAttributes: t, phrasingContent: n, flowContent: s } = xA(e), o = {}, r = (l, c, u) => {
        o[l] = {
          attributes: Sc(c, V({})),
          attributesOrder: c,
          children: Sc(u, V({}))
        };
      }, a = (l, c = "", u = "") => {
        const f = ct(u), d = ct(l);
        let p = d.length;
        const h = ct([
          t,
          c
        ].join(" "));
        for (; p--; )
          r(d[p], h.slice(), f);
      }, i = (l, c) => {
        const u = ct(l), f = ct(c);
        let d = u.length;
        for (; d--; ) {
          const p = o[u[d]];
          for (let h = 0, g = f.length; h < g; h++)
            p.attributes[f[h]] = {}, p.attributesOrder.push(f[h]);
        }
      };
      return e !== "html5-strict" && (P(ct("acronym applet basefont big font strike tt"), (u) => {
        a(u, "", n);
      }), P(ct("center dir isindex noframes"), (u) => {
        a(u, "", s);
      })), a("html", "manifest", "head body"), a("head", "", "base command link meta noscript script style title"), a("title hr noscript br"), a("base", "href target"), a("link", "href rel media hreflang type sizes hreflang"), a("meta", "name http-equiv content charset"), a("style", "media type scoped"), a("script", "src async defer type charset"), a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", s), a("dd div", "", s), a("address dt caption", "", e === "html4" ? n : s), a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n), a("blockquote", "cite", s), a("ol", "reversed start type", "li"), a("ul", "", "li"), a("li", "value", s), a("dl", "", "dt dd"), a("a", "href target rel media hreflang type", e === "html4" ? n : s), a("q", "cite", n), a("ins del", "cite datetime", s), a("img", "src sizes srcset alt usemap ismap width height"), a("iframe", "src name width height", s), a("embed", "src type width height"), a("object", "data type typemustmatch name usemap form width height", [
        s,
        "param"
      ].join(" ")), a("param", "name value"), a("map", "name", [
        s,
        "area"
      ].join(" ")), a("area", "alt coords shape href target rel media hreflang type"), a("table", "border", "caption colgroup thead tfoot tbody tr" + (e === "html4" ? " col" : "")), a("colgroup", "span", "col"), a("col", "span"), a("tbody thead tfoot", "", "tr"), a("tr", "", "td th"), a("td", "colspan rowspan headers", s), a("th", "colspan rowspan headers scope abbr", s), a("form", "accept-charset action autocomplete enctype method name novalidate target", s), a("fieldset", "disabled form name", [
        s,
        "legend"
      ].join(" ")), a("label", "form for", n), a("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", e === "html4" ? s : n), a("select", "disabled form multiple name required size", "option optgroup"), a("optgroup", "disabled label", "option"), a("option", "disabled label selected value"), a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), a("menu", "type label", [
        s,
        "li"
      ].join(" ")), a("noscript", "", s), e !== "html4" && (a("wbr"), a("ruby", "", [
        n,
        "rt rp"
      ].join(" ")), a("figcaption", "", s), a("mark rt rp bdi", "", n), a("summary", "", [
        n,
        "h1 h2 h3 h4 h5 h6"
      ].join(" ")), a("canvas", "width height", s), a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [
        s,
        "track source"
      ].join(" ")), a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [
        s,
        "track source"
      ].join(" ")), a("picture", "", "img source"), a("source", "src srcset type media sizes"), a("track", "kind src srclang label default"), a("datalist", "", [
        n,
        "option"
      ].join(" ")), a("article section nav aside main header footer", "", s), a("hgroup", "", "h1 h2 h3 h4 h5 h6"), a("figure", "", [
        s,
        "figcaption"
      ].join(" ")), a("time", "datetime", n), a("dialog", "open", s), a("command", "type label icon disabled checked radiogroup command"), a("output", "for form name", n), a("progress", "value max", n), a("meter", "value min max low high optimum", n), a("details", "open", [
        s,
        "summary"
      ].join(" ")), a("keygen", "autofocus challenge disabled form keytype name"), r("svg", "id tabindex lang xml:space class style x y width height viewBox preserveAspectRatio zoomAndPan transform".split(" "), [])), e !== "html5-strict" && (i("script", "language xml:space"), i("style", "xml:space"), i("object", "declare classid code codebase codetype archive standby align border hspace vspace"), i("embed", "align name hspace vspace"), i("param", "valuetype type"), i("a", "charset name rev shape coords"), i("br", "clear"), i("applet", "codebase archive code object alt name width height align hspace vspace"), i("img", "name longdesc align border hspace vspace"), i("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), i("font basefont", "size color face"), i("input", "usemap align"), i("select"), i("textarea"), i("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), i("ul", "type compact"), i("li", "type"), i("ol dl menu dir", "compact"), i("pre", "width xml:space"), i("hr", "align noshade size width"), i("isindex", "prompt"), i("table", "summary width frame rules cellspacing cellpadding align bgcolor"), i("col", "width align char charoff valign"), i("colgroup", "width align char charoff valign"), i("thead", "align char charoff valign"), i("tr", "align char charoff valign bgcolor"), i("th", "axis align char charoff valign nowrap bgcolor width height"), i("form", "accept"), i("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), i("tfoot", "align char charoff valign"), i("tbody", "align char charoff valign"), i("area", "nohref"), i("body", "background bgcolor text link vlink alink")), e !== "html4" && (i("input button select textarea", "autofocus"), i("input textarea", "placeholder"), i("a", "download"), i("link script img", "crossorigin"), i("img", "loading"), i("iframe", "sandbox seamless allow allowfullscreen loading")), e !== "html4" && P([
        o.video,
        o.audio
      ], (l) => {
        delete l.children.audio, delete l.children.video;
      }), P(ct("a form meter progress dfn"), (l) => {
        o[l] && delete o[l].children[l];
      }), delete o.caption.children.table, delete o.script, o;
    }, AA = (e) => e === "-" ? "remove" : "add", TA = (e) => {
      const t = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
      return sn(ct(e, ","), (n) => {
        const s = t.exec(n);
        if (s) {
          const o = s[1], r = o ? AA(o) : "replace", a = s[2], i = ct(s[3], "|");
          return [{
            operation: r,
            name: a,
            validChildren: i
          }];
        } else
          return [];
      });
    }, RA = (e, t) => {
      const n = /^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/, s = /[*?+]/, { attributes: o, attributesOrder: r } = t;
      return P(ct(e, "|"), (a) => {
        const i = n.exec(a);
        if (i) {
          const l = {}, c = i[1], u = i[2].replace(/[\\:]:/g, ":"), f = i[3], d = i[4];
          if (c === "!" && (t.attributesRequired = t.attributesRequired || [], t.attributesRequired.push(u), l.required = !0), c === "-") {
            delete o[u], r.splice(L.inArray(r, u), 1);
            return;
          }
          if (f && (f === "=" ? (t.attributesDefault = t.attributesDefault || [], t.attributesDefault.push({
            name: u,
            value: d
          }), l.defaultValue = d) : f === "~" ? (t.attributesForced = t.attributesForced || [], t.attributesForced.push({
            name: u,
            value: d
          }), l.forcedValue = d) : f === "<" && (l.validValues = L.makeMap(d, "?"))), s.test(u)) {
            const p = l;
            t.attributePatterns = t.attributePatterns || [], p.pattern = Tp(u), t.attributePatterns.push(p);
          } else
            o[u] || r.push(u), o[u] = l;
        }
      });
    }, PA = (e, t) => {
      Ae(e.attributes, (n, s) => {
        t.attributes[s] = n;
      }), t.attributesOrder.push(...e.attributesOrder);
    }, DA = (e, t) => {
      const n = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/;
      return sn(ct(t, ","), (s) => {
        const o = n.exec(s);
        if (o) {
          const r = o[1], a = o[2], i = o[3], l = o[4], c = o[5], u = {
            attributes: {},
            attributesOrder: []
          };
          if (e.each((f) => PA(f, u)), r === "#" ? u.paddEmpty = !0 : r === "-" && (u.removeEmpty = !0), l === "!" && (u.removeEmptyAttrs = !0), c && RA(c, u), i && (u.outputName = a), a === "@")
            if (e.isNone())
              e = m.some(u);
            else
              return [];
          return [i ? {
            name: a,
            element: u,
            aliasName: i
          } : {
            name: a,
            element: u
          }];
        } else
          return [];
      });
    }, Pi = {}, zr = L.makeMap, hn = L.each, uu = L.extend, Rp = L.explode, Pp = (e, t = {}) => {
      const n = zr(e, " ", zr(e.toUpperCase(), " "));
      return uu(n, t);
    }, Dp = (e) => Pp("td th li dt dd figcaption caption details summary", e.getTextBlockElements()), fu = (e, t) => {
      if (e) {
        const n = {};
        return J(e) && (e = { "*": e }), hn(e, (s, o) => {
          n[o] = n[o.toUpperCase()] = t === "map" ? zr(s, /[, ]/) : Rp(s, /[, ]/);
        }), n;
      } else
        return;
    }, us = (e = {}) => {
      var t;
      const n = {}, s = {};
      let o = [];
      const r = {}, a = {}, i = (ne, fe, Ee) => {
        const Te = e[ne];
        if (Te)
          return zr(Te, /[, ]/, zr(Te.toUpperCase(), /[, ]/));
        {
          let Oe = Pi[ne];
          return Oe || (Oe = Pp(fe, Ee), Pi[ne] = Oe), Oe;
        }
      }, l = (t = e.schema) !== null && t !== void 0 ? t : "html5", c = NA(l);
      e.verify_html === !1 && (e.valid_elements = "*[*]");
      const u = fu(e.valid_styles), f = fu(e.invalid_styles, "map"), d = fu(e.valid_classes, "map"), p = i("whitespace_elements", "pre script noscript style textarea video audio iframe object code"), h = i("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), g = i("void_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), b = i("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen"), v = "td th iframe video audio object script code", y = i("non_empty_elements", v + " pre svg", g), E = i("move_caret_before_on_enter_elements", v + " table", g), S = "h1 h2 h3 h4 h5 h6", T = i("text_block_elements", S + " p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"), O = i("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary html body multicol listing", T), U = i("text_inline_elements", "span strong b em i font s strike u var cite dfn code mark q sup sub samp"), A = i("transparent_elements", "a ins del canvas map"), _ = i("wrap_block_elements", "pre " + S);
      hn("script noscript iframe noframes noembed title style textarea xmp plaintext".split(" "), (ne) => {
        a[ne] = new RegExp("</" + ne + "[^>]*>", "gi");
      });
      const R = (ne) => {
        const fe = m.from(n["@"]), Ee = /[*?+]/;
        P(DA(fe, ne ?? ""), ({ name: Te, element: Oe, aliasName: nn }) => {
          if (nn && (n[nn] = Oe), Ee.test(Te)) {
            const cr = Oe;
            cr.pattern = Tp(Te), o.push(cr);
          } else
            n[Te] = Oe;
        });
      }, z = (ne) => {
        o = [], P(Dt(n), (fe) => {
          delete n[fe];
        }), R(ne);
      }, Z = (ne) => {
        delete Pi.text_block_elements, delete Pi.block_elements, P(_A(ne ?? ""), ({ inline: fe, name: Ee, cloneName: Te }) => {
          if (s[Ee] = s[Te], r[Ee] = Te, y[Ee.toUpperCase()] = {}, y[Ee] = {}, fe || (O[Ee.toUpperCase()] = {}, O[Ee] = {}), !n[Ee]) {
            let Oe = n[Te];
            Oe = uu({}, Oe), delete Oe.removeEmptyAttrs, delete Oe.removeEmpty, n[Ee] = Oe;
          }
          Ae(s, (Oe, nn) => {
            Oe[Te] && (s[nn] = Oe = uu({}, s[nn]), Oe[Ee] = Oe[Te]);
          });
        });
      }, re = (ne) => {
        P(TA(ne ?? ""), ({ operation: fe, name: Ee, validChildren: Te }) => {
          const Oe = fe === "replace" ? { "#comment": {} } : s[Ee];
          P(Te, (nn) => {
            fe === "remove" ? delete Oe[nn] : Oe[nn] = {};
          }), s[Ee] = Oe;
        });
      }, ie = (ne) => {
        const fe = n[ne];
        if (fe)
          return fe;
        let Ee = o.length;
        for (; Ee--; ) {
          const Te = o[Ee];
          if (Te.pattern.test(ne))
            return Te;
        }
      };
      e.valid_elements ? (z(e.valid_elements), hn(c, (ne, fe) => {
        s[fe] = ne.children;
      })) : (hn(c, (ne, fe) => {
        n[fe] = {
          attributes: ne.attributes,
          attributesOrder: ne.attributesOrder
        }, s[fe] = ne.children;
      }), hn(ct("strong/b em/i"), (ne) => {
        const fe = ct(ne, "/");
        n[fe[1]].outputName = fe[0];
      }), hn(U, (ne, fe) => {
        n[fe] && (e.padd_empty_block_inline_children && (n[fe].paddInEmptyBlock = !0), n[fe].removeEmpty = !0);
      }), hn(ct("ol ul blockquote a table tbody"), (ne) => {
        n[ne] && (n[ne].removeEmpty = !0);
      }), hn(ct("p h1 h2 h3 h4 h5 h6 th td pre div address caption li summary"), (ne) => {
        n[ne] && (n[ne].paddEmpty = !0);
      }), hn(ct("span"), (ne) => {
        n[ne].removeEmptyAttrs = !0;
      })), delete n.svg, Z(e.custom_elements), re(e.valid_children), R(e.extended_valid_elements), re("+ol[ul|ol],+ul[ul|ol]"), hn({
        dd: "dl",
        dt: "dl",
        li: "ul ol",
        td: "tr",
        th: "tr",
        tr: "tbody thead tfoot",
        tbody: "table",
        thead: "table",
        tfoot: "table",
        legend: "fieldset",
        area: "map",
        param: "video audio object"
      }, (ne, fe) => {
        n[fe] && (n[fe].parentsRequired = ct(ne));
      }), e.invalid_elements && hn(Rp(e.invalid_elements), (ne) => {
        n[ne] && delete n[ne];
      }), ie("span") || R("span[!data-mce-type|*]");
      const Ce = V(u), we = V(f), Ie = V(d), nt = V(b), Ve = V(O), F = V(T), K = V(U), ge = V(Object.seal(g)), de = V(h), G = V(y), Y = V(E), I = V(p), ee = V(A), ue = V(_), ye = V(Object.seal(a)), xe = (ne, fe) => {
        const Ee = s[ne.toLowerCase()];
        return !!(Ee && Ee[fe.toLowerCase()]);
      }, ht = (ne, fe) => {
        const Ee = ie(ne);
        if (Ee)
          if (fe) {
            if (Ee.attributes[fe])
              return !0;
            const Te = Ee.attributePatterns;
            if (Te) {
              let Oe = Te.length;
              for (; Oe--; )
                if (Te[Oe].pattern.test(fe))
                  return !0;
            }
          } else
            return !0;
        return !1;
      }, $t = (ne) => oe(Ve(), ne), Fn = (ne) => !st(ne, "#") && ht(ne) && !$t(ne), bt = (ne) => oe(ue(), ne) || Fn(ne), fn = V(r);
      return {
        type: l,
        children: s,
        elements: n,
        getValidStyles: Ce,
        getValidClasses: Ie,
        getBlockElements: Ve,
        getInvalidStyles: we,
        getVoidElements: ge,
        getTextBlockElements: F,
        getTextInlineElements: K,
        getBoolAttrs: nt,
        getElementRule: ie,
        getSelfClosingElements: de,
        getNonEmptyElements: G,
        getMoveCaretBeforeOnEnterElements: Y,
        getWhitespaceElements: I,
        getTransparentElements: ee,
        getSpecialElements: ye,
        isValidChild: xe,
        isValid: ht,
        isBlock: $t,
        isInline: Fn,
        isWrapper: bt,
        getCustomElements: fn,
        addValidElements: R,
        setValidElements: z,
        addCustomElements: Z,
        addValidChildren: re
      };
    }, OA = (e) => ({ value: BA(e) }), BA = (e) => mg(e, "#").toUpperCase(), du = (e) => {
      const t = e.toString(16);
      return (t.length === 1 ? "0" + t : t).toUpperCase();
    }, IA = (e) => {
      const t = du(e.red) + du(e.green) + du(e.blue);
      return OA(t);
    }, LA = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i, $A = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i, Op = (e, t, n, s) => ({
      red: e,
      green: t,
      blue: n,
      alpha: s
    }), Bp = (e, t, n, s) => {
      const o = parseInt(e, 10), r = parseInt(t, 10), a = parseInt(n, 10), i = parseFloat(s);
      return Op(o, r, a, i);
    }, Ip = (e) => {
      if (e === "transparent")
        return m.some(Op(0, 0, 0, 0));
      const t = LA.exec(e);
      if (t !== null)
        return m.some(Bp(t[1], t[2], t[3], "1"));
      const n = $A.exec(e);
      return n !== null ? m.some(Bp(n[1], n[2], n[3], n[4])) : m.none();
    }, FA = (e) => `rgba(${e.red},${e.green},${e.blue},${e.alpha})`, Hr = (e) => Ip(e).map(IA).map((t) => "#" + t.value).getOr(e), mu = (e = {}, t) => {
      const n = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi, s = /\s*([^:]+):\s*([^;]+);?/g, o = /\s+$/, r = {};
      let a, i;
      const l = $r;
      t && (a = t.getValidStyles(), i = t.getInvalidStyles());
      const c = (`\\" \\' \\; \\: ; : ` + l).split(" ");
      for (let f = 0; f < c.length; f++)
        r[c[f]] = l + f, r[l + f] = c[f];
      const u = {
        parse: (f) => {
          const d = {};
          let p = !1;
          const h = e.url_converter, g = e.url_converter_scope || u, b = (A, _, R) => {
            const z = d[A + "-top" + _];
            if (!z)
              return;
            const Z = d[A + "-right" + _];
            if (!Z)
              return;
            const re = d[A + "-bottom" + _];
            if (!re)
              return;
            const ie = d[A + "-left" + _];
            if (!ie)
              return;
            const Ce = [
              z,
              Z,
              re,
              ie
            ];
            let we = Ce.length - 1;
            for (; we-- && Ce[we] === Ce[we + 1]; )
              ;
            we > -1 && R || (d[A + _] = we === -1 ? Ce[0] : Ce.join(" "), delete d[A + "-top" + _], delete d[A + "-right" + _], delete d[A + "-bottom" + _], delete d[A + "-left" + _]);
          }, v = (A) => {
            const _ = d[A];
            if (!_)
              return;
            const R = _.indexOf(",") > -1 ? [_] : _.split(" ");
            let z = R.length;
            for (; z--; )
              if (R[z] !== R[0])
                return !1;
            return d[A] = R[0], !0;
          }, y = (A, _, R, z) => {
            v(_) && v(R) && v(z) && (d[A] = d[_] + " " + d[R] + " " + d[z], delete d[_], delete d[R], delete d[z]);
          }, E = (A) => (p = !0, r[A]), S = (A, _) => (p && (A = A.replace(/\uFEFF[0-9]/g, (R) => r[R])), _ || (A = A.replace(/\\([\'\";:])/g, "$1")), A), T = (A) => String.fromCharCode(parseInt(A.slice(1), 16)), O = (A) => A.replace(/\\[0-9a-f]+/gi, T), U = (A, _, R, z, Z, re) => {
            if (Z = Z || re, Z)
              return Z = S(Z), "'" + Z.replace(/\'/g, "\\'") + "'";
            if (_ = S(_ || R || z || ""), !e.allow_script_urls) {
              const ie = _.replace(/[\s\r\n]+/g, "");
              if (/(java|vb)script:/i.test(ie) || !e.allow_svg_data_urls && /^data:image\/svg/i.test(ie))
                return "";
            }
            return h && (_ = h.call(g, _, "style")), "url('" + _.replace(/\'/g, "\\'") + "')";
          };
          if (f) {
            f = f.replace(/[\u0000-\u001F]/g, ""), f = f.replace(/\\[\"\';:\uFEFF]/g, E).replace(/\"[^\"]+\"|\'[^\']+\'/g, (_) => _.replace(/[;:]/g, E));
            let A;
            for (; A = s.exec(f); ) {
              s.lastIndex = A.index + A[0].length;
              let _ = A[1].replace(o, "").toLowerCase(), R = A[2].replace(o, "");
              if (_ && R) {
                if (_ = O(_), R = O(R), _.indexOf(l) !== -1 || _.indexOf('"') !== -1 || !e.allow_script_urls && (_ === "behavior" || /expression\s*\(|\/\*|\*\//.test(R)))
                  continue;
                _ === "font-weight" && R === "700" ? R = "bold" : (_ === "color" || _ === "background-color") && (R = R.toLowerCase()), J(e.force_hex_color) && e.force_hex_color !== "off" && Ip(R).each((z) => {
                  (e.force_hex_color === "always" || z.alpha === 1) && (R = Hr(FA(z)));
                }), R = R.replace(n, U), d[_] = p ? S(R, !0) : R;
              }
            }
            b("border", "", !0), b("border", "-width"), b("border", "-color"), b("border", "-style"), b("padding", ""), b("margin", ""), y("border", "border-width", "border-style", "border-color"), d.border === "medium none" && delete d.border, d["border-image"] === "none" && delete d["border-image"];
          }
          return d;
        },
        serialize: (f, d) => {
          let p = "";
          const h = (b, v) => {
            const y = v[b];
            if (y)
              for (let E = 0, S = y.length; E < S; E++) {
                const T = y[E], O = f[T];
                O && (p += (p.length > 0 ? " " : "") + T + ": " + O + ";");
              }
          }, g = (b, v) => {
            if (!i || !v)
              return !0;
            let y = i["*"];
            return y && y[b] ? !1 : (y = i[v], !(y && y[b]));
          };
          return d && a ? (h("*", a), h(d, a)) : Ae(f, (b, v) => {
            b && g(v, d) && (p += (p.length > 0 ? " " : "") + v + ": " + b + ";");
          }), p;
        }
      };
      return u;
    }, MA = {
      keyLocation: !0,
      layerX: !0,
      layerY: !0,
      returnValue: !0,
      webkitMovementX: !0,
      webkitMovementY: !0,
      keyIdentifier: !0,
      mozPressure: !0
    }, UA = (e) => e instanceof Event || Se(e.initEvent), zA = (e) => e.isDefaultPrevented === He || e.isDefaultPrevented === Le, HA = (e) => qe(e.preventDefault) || UA(e), Lp = (e, t) => {
      const n = t ?? {};
      for (const s in e)
        oe(MA, s) || (n[s] = e[s]);
      return M(e.composedPath) && (n.composedPath = () => e.composedPath()), M(e.getModifierState) && (n.getModifierState = (s) => e.getModifierState(s)), M(e.getTargetRanges) && (n.getTargetRanges = () => e.getTargetRanges()), n;
    }, gu = (e, t, n, s) => {
      var o;
      const r = Lp(t, s);
      return r.type = e, qe(r.target) && (r.target = (o = r.srcElement) !== null && o !== void 0 ? o : n), HA(t) && (r.preventDefault = () => {
        r.defaultPrevented = !0, r.isDefaultPrevented = He, Se(t.preventDefault) && t.preventDefault();
      }, r.stopPropagation = () => {
        r.cancelBubble = !0, r.isPropagationStopped = He, Se(t.stopPropagation) && t.stopPropagation();
      }, r.stopImmediatePropagation = () => {
        r.isImmediatePropagationStopped = He, r.stopPropagation();
      }, zA(r) || (r.isDefaultPrevented = r.defaultPrevented === !0 ? He : Le, r.isPropagationStopped = r.cancelBubble === !0 ? He : Le, r.isImmediatePropagationStopped = Le)), r;
    }, WA = "mce-data-", VA = /^(?:mouse|contextmenu)|click/, pu = (e, t, n, s) => {
      e.addEventListener(t, n, s || !1);
    }, Di = (e, t, n, s) => {
      e.removeEventListener(t, n, s || !1);
    }, jA = (e) => M(e) && VA.test(e.type), Wr = (e, t) => {
      const n = gu(e.type, e, document, t);
      if (jA(e) && lt(e.pageX) && !lt(e.clientX)) {
        const s = n.target.ownerDocument || document, o = s.documentElement, r = s.body, a = n;
        a.pageX = e.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), a.pageY = e.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0);
      }
      return n;
    }, qA = (e, t, n) => {
      const s = e.document, o = { type: "ready" };
      if (n.domLoaded) {
        t(o);
        return;
      }
      const r = () => s.readyState === "complete" || s.readyState === "interactive" && s.body, a = () => {
        Di(e, "DOMContentLoaded", a), Di(e, "load", a), n.domLoaded || (n.domLoaded = !0, t(o)), e = null;
      };
      r() ? a() : pu(e, "DOMContentLoaded", a), n.domLoaded || pu(e, "load", a);
    };
    class Ks {
      constructor() {
        this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = WA + (+/* @__PURE__ */ new Date()).toString(32), this.hasFocusIn = "onfocusin" in document.documentElement, this.count = 1;
      }
      bind(t, n, s, o) {
        const r = this;
        let a;
        const i = window, l = (d) => {
          r.executeHandlers(Wr(d || i.event), c);
        };
        if (!t || B(t) || as(t))
          return s;
        let c;
        t[r.expando] ? c = t[r.expando] : (c = r.count++, t[r.expando] = c, r.events[c] = {}), o = o || t;
        const u = n.split(" ");
        let f = u.length;
        for (; f--; ) {
          let d = u[f], p = l, h = !1, g = !1;
          if (d === "DOMContentLoaded" && (d = "ready"), r.domLoaded && d === "ready" && t.readyState === "complete") {
            s.call(o, Wr({ type: d }));
            continue;
          }
          !r.hasFocusIn && (d === "focusin" || d === "focusout") && (h = !0, g = d === "focusin" ? "focus" : "blur", p = (b) => {
            const v = Wr(b || i.event);
            v.type = v.type === "focus" ? "focusin" : "focusout", r.executeHandlers(v, c);
          }), a = r.events[c][d], a ? d === "ready" && r.domLoaded ? s(Wr({ type: d })) : a.push({
            func: s,
            scope: o
          }) : (r.events[c][d] = a = [{
            func: s,
            scope: o
          }], a.fakeName = g, a.capture = h, a.nativeHandler = p, d === "ready" ? qA(t, p, r) : pu(t, g || d, p, h));
        }
        return t = a = null, s;
      }
      unbind(t, n, s) {
        if (!t || B(t) || as(t))
          return this;
        const o = t[this.expando];
        if (o) {
          let r = this.events[o];
          if (n) {
            const a = n.split(" ");
            let i = a.length;
            for (; i--; ) {
              const l = a[i], c = r[l];
              if (c) {
                if (s) {
                  let u = c.length;
                  for (; u--; )
                    if (c[u].func === s) {
                      const f = c.nativeHandler, d = c.fakeName, p = c.capture, h = c.slice(0, u).concat(c.slice(u + 1));
                      h.nativeHandler = f, h.fakeName = d, h.capture = p, r[l] = h;
                    }
                }
                (!s || c.length === 0) && (delete r[l], Di(t, c.fakeName || l, c.nativeHandler, c.capture));
              }
            }
          } else
            Ae(r, (a, i) => {
              Di(t, a.fakeName || i, a.nativeHandler, a.capture);
            }), r = {};
          for (const a in r)
            if (oe(r, a))
              return this;
          delete this.events[o];
          try {
            delete t[this.expando];
          } catch {
            t[this.expando] = null;
          }
        }
        return this;
      }
      fire(t, n, s) {
        return this.dispatch(t, n, s);
      }
      dispatch(t, n, s) {
        if (!t || B(t) || as(t))
          return this;
        const o = Wr({
          type: n,
          target: t
        }, s);
        do {
          const r = t[this.expando];
          r && this.executeHandlers(o, r), t = t.parentNode || t.ownerDocument || t.defaultView || t.parentWindow;
        } while (t && !o.isPropagationStopped());
        return this;
      }
      clean(t) {
        if (!t || B(t) || as(t))
          return this;
        if (t[this.expando] && this.unbind(t), t.getElementsByTagName || (t = t.document), t && t.getElementsByTagName) {
          this.unbind(t);
          const n = t.getElementsByTagName("*");
          let s = n.length;
          for (; s--; )
            t = n[s], t[this.expando] && this.unbind(t);
        }
        return this;
      }
      destroy() {
        this.events = {};
      }
      cancel(t) {
        return t && (t.preventDefault(), t.stopImmediatePropagation()), !1;
      }
      executeHandlers(t, n) {
        const s = this.events[n], o = s && s[t.type];
        if (o)
          for (let r = 0, a = o.length; r < a; r++) {
            const i = o[r];
            if (i && i.func.call(i.scope, t) === !1 && t.preventDefault(), t.isImmediatePropagationStopped())
              return;
          }
      }
    }
    Ks.Event = new Ks();
    const hu = L.each, KA = L.grep, bu = "data-mce-style", GA = L.makeMap("fill-opacity font-weight line-height opacity orphans widows z-index zoom", " "), Vr = (e, t, n) => {
      qe(n) || n === "" ? rt(e, t) : ot(e, t, n);
    }, $p = (e) => e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), Lo = (e, t) => {
      let n = 0;
      if (e)
        for (let s = e.nodeType, o = e.previousSibling; o; o = o.previousSibling) {
          const r = o.nodeType;
          t && B(o) && (r === s || !o.data.length) || (n++, s = r);
        }
      return n;
    }, Fp = (e, t) => {
      const n = Ut(t, "style"), s = e.serialize(e.parse(n), pe(t));
      Vr(t, bu, s);
    }, YA = (e, t) => mn(e) ? oe(GA, t) ? e + "" : e + "px" : e, Mp = (e, t, n) => {
      const s = $p(t);
      qe(n) || n === "" ? Gg(e, s) : qg(e, s, YA(n, s));
    }, XA = (e, t, n) => {
      const s = t.keep_values, o = {
        set: (a, i, l) => {
          const c = C.fromDom(a);
          Se(t.url_converter) && M(i) && (i = t.url_converter.call(t.url_converter_scope || n(), String(i), l, a));
          const u = "data-mce-" + l;
          Vr(c, u, i), Vr(c, l, i);
        },
        get: (a, i) => {
          const l = C.fromDom(a);
          return Ut(l, "data-mce-" + i) || Ut(l, i);
        }
      }, r = {
        style: {
          set: (a, i) => {
            const l = C.fromDom(a);
            s && Vr(l, bu, i), rt(l, "style"), J(i) && pi(l, e.parse(i));
          },
          get: (a) => {
            const i = C.fromDom(a), l = Ut(i, bu) || Ut(i, "style");
            return e.serialize(e.parse(l), pe(i));
          }
        }
      };
      return s && (r.href = r.src = o), r;
    }, Ne = (e, t = {}) => {
      const n = {}, s = window, o = {};
      let r = 0;
      const a = !0, i = !0, l = wp.forElement(C.fromDom(e), {
        contentCssCors: t.contentCssCors,
        referrerPolicy: t.referrerPolicy
      }), c = [], u = t.schema ? t.schema : us({}), f = mu({
        url_converter: t.url_converter,
        url_converter_scope: t.url_converter_scope,
        force_hex_color: t.force_hex_color
      }, t.schema), d = t.ownEvents ? new Ks() : Ks.Event, p = u.getBlockElements(), h = (w) => J(w) ? oe(p, w) : q(w) && (oe(p, w.nodeName) || Vs(u, w)), g = (w) => w && e && J(w) ? e.getElementById(w) : w, b = (w) => {
        const k = g(w);
        return M(k) ? C.fromDom(k) : null;
      }, v = (w, k, $ = "") => {
        let D;
        const Q = b(w);
        if (M(Q) && Mt(Q)) {
          const me = Ja[k];
          me && me.get ? D = me.get(Q.dom, k) : D = Ut(Q, k);
        }
        return M(D) ? D : $;
      }, y = (w) => {
        const k = g(w);
        return qe(k) ? [] : k.attributes;
      }, E = (w, k, $) => {
        K(w, (D) => {
          if (q(D)) {
            const Q = C.fromDom(D), me = $ === "" ? null : $, Be = Ut(Q, k), Ke = Ja[k];
            Ke && Ke.set ? Ke.set(Q.dom, me, k) : Vr(Q, k, me), Be !== me && t.onSetAttrib && t.onSetAttrib({
              attrElm: Q.dom,
              attrName: k,
              attrValue: me
            });
          }
        });
      }, S = (w, k) => w.cloneNode(k), T = () => t.root_element || e.body, O = (w) => {
        const k = tp(w);
        return {
          x: k.x,
          y: k.y,
          w: k.width,
          h: k.height
        };
      }, U = (w, k) => dA(e.body, g(w), k), A = (w, k, $) => {
        K(w, (D) => {
          const Q = C.fromDom(D);
          Mp(Q, k, $), t.update_styles && Fp(f, Q);
        });
      }, _ = (w, k) => {
        K(w, ($) => {
          const D = C.fromDom($);
          Ae(k, (Q, me) => {
            Mp(D, me, Q);
          }), t.update_styles && Fp(f, D);
        });
      }, R = (w, k, $) => {
        const D = g(w);
        if (!(qe(D) || !Xn(D) && !iN(D)))
          return $ ? Nn(C.fromDom(D), $p(k)) : (k = k.replace(/-(\D)/g, (Q, me) => me.toUpperCase()), k === "float" && (k = "cssFloat"), D.style ? D.style[k] : void 0);
      }, z = (w) => {
        const k = g(w);
        if (!k)
          return {
            w: 0,
            h: 0
          };
        let $ = R(k, "width"), D = R(k, "height");
        return (!$ || $.indexOf("px") === -1) && ($ = "0"), (!D || D.indexOf("px") === -1) && (D = "0"), {
          w: parseInt($, 10) || k.offsetWidth || k.clientWidth,
          h: parseInt(D, 10) || k.offsetHeight || k.clientHeight
        };
      }, Z = (w) => {
        const k = g(w), $ = U(k), D = z(k);
        return {
          x: $.x,
          y: $.y,
          w: D.w,
          h: D.h
        };
      }, re = (w, k) => {
        if (!w)
          return !1;
        const $ = Ge(w) ? w : [w];
        return Fe($, (D) => gn(C.fromDom(D), k));
      }, ie = (w, k, $, D) => {
        const Q = [];
        let me = g(w);
        D = D === void 0;
        const Be = $ || (T().nodeName !== "BODY" ? T().parentNode : null);
        if (J(k))
          if (k === "*")
            k = q;
          else {
            const Ke = k;
            k = (je) => re(je, Ke);
          }
        for (; me && !(me === Be || qe(me.nodeType) || Lr(me) || jc(me)); ) {
          if (!k || k(me))
            if (D)
              Q.push(me);
            else
              return [me];
          me = me.parentNode;
        }
        return D ? Q : null;
      }, Ce = (w, k, $) => {
        const D = ie(w, k, $, !1);
        return D && D.length > 0 ? D[0] : null;
      }, we = (w, k, $) => {
        let D = k;
        if (w) {
          J(k) && (D = (Q) => re(Q, k));
          for (let Q = w[$]; Q; Q = Q[$])
            if (Se(D) && D(Q))
              return Q;
        }
        return null;
      }, Ie = (w, k) => we(w, k, "nextSibling"), nt = (w, k) => we(w, k, "previousSibling"), Ve = (w) => Se(w.querySelectorAll), F = (w, k) => {
        var $, D;
        const Q = (D = ($ = g(k)) !== null && $ !== void 0 ? $ : t.root_element) !== null && D !== void 0 ? D : e;
        return Ve(Q) ? Ft(Q.querySelectorAll(w)) : [];
      }, K = function(w, k, $) {
        const D = $ ?? this;
        if (Ge(w)) {
          const Q = [];
          return hu(w, (me, Be) => {
            const Ke = g(me);
            Ke && Q.push(k.call(D, Ke, Be));
          }), Q;
        } else {
          const Q = g(w);
          return Q ? k.call(D, Q) : !1;
        }
      }, ge = (w, k) => {
        K(w, ($) => {
          Ae(k, (D, Q) => {
            E($, Q, D);
          });
        });
      }, de = (w, k) => {
        K(w, ($) => {
          const D = C.fromDom($);
          bi(D, k);
        });
      }, G = (w, k, $, D, Q) => K(w, (me) => {
        const Be = J(k) ? e.createElement(k) : k;
        return M($) && ge(Be, $), D && (!J(D) && D.nodeType ? Be.appendChild(D) : J(D) && de(Be, D)), Q ? Be : me.appendChild(Be);
      }), Y = (w, k, $) => G(e.createElement(w), w, k, $, !0), I = qs.decode, ee = qs.encodeAllRaw, ue = (w, k, $ = "") => {
        let D = "<" + w;
        for (const Q in k)
          ko(k, Q) && (D += " " + Q + '="' + ee(k[Q]) + '"');
        return kr($) && oe(u.getVoidElements(), w) ? D + " />" : D + ">" + $ + "</" + w + ">";
      }, ye = (w) => {
        const k = e.createElement("div"), $ = e.createDocumentFragment();
        $.appendChild(k), w && (k.innerHTML = w);
        let D;
        for (; D = k.firstChild; )
          $.appendChild(D);
        return $.removeChild(k), $;
      }, xe = (w, k) => K(w, ($) => {
        const D = C.fromDom($);
        return k && P(at(D), (Q) => {
          jt(Q) && Q.dom.length === 0 ? Pe(Q) : Ot(D, Q);
        }), Pe(D), D.dom;
      }), ht = (w) => K(w, (k) => {
        const $ = k.attributes;
        for (let D = $.length - 1; D >= 0; D--)
          k.removeAttributeNode($.item(D));
      }), $t = (w) => f.parse(w), Fn = (w, k) => f.serialize(w, k), bt = (w) => {
        if (xs !== Ne.DOM && e === document) {
          if (n[w])
            return;
          n[w] = !0;
        }
        let k = e.getElementById("mceDefaultStyles");
        if (!k) {
          k = e.createElement("style"), k.id = "mceDefaultStyles", k.type = "text/css";
          const $ = e.head;
          $.firstChild ? $.insertBefore(k, $.firstChild) : $.appendChild(k);
        }
        k.styleSheet ? k.styleSheet.cssText += w : k.appendChild(e.createTextNode(w));
      }, fn = (w) => {
        w || (w = ""), P(w.split(","), (k) => {
          o[k] = !0, l.load(k).catch(ce);
        });
      }, ne = (w, k, $) => {
        K(w, (D) => {
          if (q(D)) {
            const Q = C.fromDom(D), me = k.split(" ");
            P(me, (Be) => {
              M($) ? ($ ? Ao : Ar)(Q, Be) : Nx(Q, Be);
            });
          }
        });
      }, fe = (w, k) => {
        ne(w, k, !0);
      }, Ee = (w, k) => {
        ne(w, k, !1);
      }, Te = (w, k) => {
        const $ = b(w), D = k.split(" ");
        return M($) && zn(D, (Q) => Oc($, Q));
      }, Oe = (w) => {
        K(w, (k) => Gg(C.fromDom(k), "display"));
      }, nn = (w) => {
        K(w, (k) => qg(C.fromDom(k), "display", "none"));
      }, cr = (w) => {
        const k = b(w);
        return M(k) && xo(hi(k, "display"), "none");
      }, Ya = (w) => (w || "mce_") + r++, vo = (w) => {
        const k = b(w);
        return M(k) ? q(k.dom) ? k.dom.outerHTML : Xx(k) : "";
      }, ws = (w, k) => {
        K(w, ($) => {
          q($) && ($.outerHTML = k);
        });
      }, ks = (w, k) => {
        const $ = g(k);
        return K(w, (D) => {
          const Q = $ == null ? void 0 : $.parentNode, me = $ == null ? void 0 : $.nextSibling;
          return Q && (me ? Q.insertBefore(D, me) : Q.appendChild(D)), D;
        });
      }, Xa = (w, k, $) => K(k, (D) => {
        var Q;
        const me = Ge(k) ? w.cloneNode(!0) : w;
        return $ && hu(KA(D.childNodes), (Be) => {
          me.appendChild(Be);
        }), (Q = D.parentNode) === null || Q === void 0 || Q.replaceChild(me, D), D;
      }), mc = (w, k) => {
        if (w.nodeName !== k.toUpperCase()) {
          const $ = Y(k);
          return hu(y(w), (D) => {
            E($, D.nodeName, v(w, D.nodeName));
          }), Xa($, w, !0), $;
        } else
          return w;
      }, gc = (w, k) => {
        let $ = w;
        for (; $; ) {
          let D = k;
          for (; D && $ !== D; )
            D = D.parentNode;
          if ($ === D)
            break;
          $ = $.parentNode;
        }
        return !$ && w.ownerDocument ? w.ownerDocument.documentElement : $;
      }, ur = (w) => {
        if (q(w)) {
          const k = w.nodeName.toLowerCase() === "a" && !v(w, "href") && v(w, "id");
          if (v(w, "name") || v(w, "data-mce-bookmark") || k)
            return !0;
        }
        return !1;
      }, pc = (w, k, $) => {
        let D = 0;
        if (ur(w))
          return !1;
        const Q = w.firstChild;
        if (Q) {
          const me = new Xe(Q, w), Be = u ? u.getWhitespaceElements() : {}, Ke = k || (u ? u.getNonEmptyElements() : null);
          let je = Q;
          do {
            if (q(je)) {
              const ei = je.getAttribute("data-mce-bogus");
              if (ei) {
                je = me.next(ei === "all");
                continue;
              }
              const ti = je.nodeName.toLowerCase();
              if (Ke && Ke[ti]) {
                if (ti === "br") {
                  D++, je = me.next();
                  continue;
                }
                return !1;
              }
              if (ur(je))
                return !1;
            }
            if (as(je) || B(je) && !cs(je.data) && (!($ != null && $.includeZwsp) || !VN(je.data)) || B(je) && je.parentNode && Be[je.parentNode.nodeName] && cs(je.data))
              return !1;
            je = me.next();
          } while (je);
        }
        return D <= 1;
      }, _s = () => e.createRange(), fr = (w, k, $) => {
        let D = _s(), Q, me;
        if (w && k && w.parentNode && k.parentNode) {
          const Be = w.parentNode;
          return D.setStart(Be, Lo(w)), D.setEnd(k.parentNode, Lo(k)), Q = D.extractContents(), D = _s(), D.setStart(k.parentNode, Lo(k) + 1), D.setEnd(Be, Lo(w) + 1), me = D.extractContents(), Be.insertBefore(iu(xs, Q, u), w), $ ? Be.insertBefore($, w) : Be.insertBefore(k, w), Be.insertBefore(iu(xs, me, u), w), xe(w), $ || k;
        } else
          return;
      }, dn = (w, k, $, D) => {
        if (Ge(w)) {
          let Q = w.length;
          const me = [];
          for (; Q--; )
            me[Q] = dn(w[Q], k, $, D);
          return me;
        } else
          return t.collect && (w === e || w === s) && c.push([
            w,
            k,
            $,
            D
          ]), d.bind(w, k, $, D || xs);
      }, ss = (w, k, $) => {
        if (Ge(w)) {
          let D = w.length;
          const Q = [];
          for (; D--; )
            Q[D] = ss(w[D], k, $);
          return Q;
        } else {
          if (c.length > 0 && (w === e || w === s)) {
            let D = c.length;
            for (; D--; ) {
              const [Q, me, Be] = c[D];
              w === Q && (!k || k === me) && (!$ || $ === Be) && d.unbind(Q, me, Be);
            }
          }
          return d.unbind(w, k, $);
        }
      }, Za = (w, k, $) => d.dispatch(w, k, $), Qa = (w, k, $) => d.dispatch(w, k, $), hc = (w) => {
        if (w && Xn(w)) {
          const k = w.getAttribute("data-mce-contenteditable");
          return k && k !== "inherit" ? k : w.contentEditable !== "inherit" ? w.contentEditable : null;
        } else
          return null;
      }, xs = {
        doc: e,
        settings: t,
        win: s,
        files: o,
        stdMode: a,
        boxModel: i,
        styleSheetLoader: l,
        boundEvents: c,
        styles: f,
        schema: u,
        events: d,
        isBlock: h,
        root: null,
        clone: S,
        getRoot: T,
        getViewPort: O,
        getRect: Z,
        getSize: z,
        getParent: Ce,
        getParents: ie,
        get: g,
        getNext: Ie,
        getPrev: nt,
        select: F,
        is: re,
        add: G,
        create: Y,
        createHTML: ue,
        createFragment: ye,
        remove: xe,
        setStyle: A,
        getStyle: R,
        setStyles: _,
        removeAllAttribs: ht,
        setAttrib: E,
        setAttribs: ge,
        getAttrib: v,
        getPos: U,
        parseStyle: $t,
        serializeStyle: Fn,
        addStyle: bt,
        loadCSS: fn,
        addClass: fe,
        removeClass: Ee,
        hasClass: Te,
        toggleClass: ne,
        show: Oe,
        hide: nn,
        isHidden: cr,
        uniqueId: Ya,
        setHTML: de,
        getOuterHTML: vo,
        setOuterHTML: ws,
        decode: I,
        encode: ee,
        insertAfter: ks,
        replace: Xa,
        rename: mc,
        findCommonAncestor: gc,
        run: K,
        getAttribs: y,
        isEmpty: pc,
        createRng: _s,
        nodeIndex: Lo,
        split: fr,
        bind: dn,
        unbind: ss,
        fire: Qa,
        dispatch: Za,
        getContentEditable: hc,
        getContentEditableParent: (w) => {
          const k = T();
          let $ = null;
          for (let D = w; D && D !== k && ($ = hc(D), $ === null); D = D.parentNode)
            ;
          return $;
        },
        isEditable: (w) => {
          if (M(w)) {
            const k = q(w) ? w : w.parentElement;
            return M(k) && Xn(k) && Fs(C.fromDom(k));
          } else
            return !1;
        },
        destroy: () => {
          if (c.length > 0) {
            let w = c.length;
            for (; w--; ) {
              const [k, $, D] = c[w];
              d.unbind(k, $, D);
            }
          }
          Ae(o, (w, k) => {
            l.unload(k), delete o[k];
          });
        },
        isChildOf: (w, k) => w === k || k.contains(w),
        dumpRng: (w) => "startContainer: " + w.startContainer.nodeName + ", startOffset: " + w.startOffset + ", endContainer: " + w.endContainer.nodeName + ", endOffset: " + w.endOffset
      }, Ja = XA(f, t, V(xs));
      return xs;
    };
    Ne.DOM = Ne(document), Ne.nodeIndex = Lo;
    const ZA = Ne.DOM, QA = 0, JA = 1, Oi = 2, Up = 3;
    class Qn {
      constructor(t = {}) {
        this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = !1, this.settings = t;
      }
      _setReferrerPolicy(t) {
        this.settings.referrerPolicy = t;
      }
      loadScript(t) {
        return new Promise((n, s) => {
          const o = ZA;
          let r;
          const a = () => {
            o.remove(c), r && (r.onerror = r.onload = r = null);
          }, i = () => {
            a(), n();
          }, l = () => {
            a(), s("Failed to load script: " + t);
          }, c = o.uniqueId();
          r = document.createElement("script"), r.id = c, r.type = "text/javascript", r.src = L._addCacheSuffix(t), this.settings.referrerPolicy && o.setAttrib(r, "referrerpolicy", this.settings.referrerPolicy), r.onload = i, r.onerror = l, (document.getElementsByTagName("head")[0] || document.body).appendChild(r);
        });
      }
      isDone(t) {
        return this.states[t] === Oi;
      }
      markDone(t) {
        this.states[t] = Oi;
      }
      add(t) {
        const n = this;
        return n.queue.push(t), n.states[t] === void 0 && (n.states[t] = QA), new Promise((o, r) => {
          n.scriptLoadedCallbacks[t] || (n.scriptLoadedCallbacks[t] = []), n.scriptLoadedCallbacks[t].push({
            resolve: o,
            reject: r
          });
        });
      }
      load(t) {
        return this.add(t);
      }
      remove(t) {
        delete this.states[t], delete this.scriptLoadedCallbacks[t];
      }
      loadQueue() {
        const t = this.queue;
        return this.queue = [], this.loadScripts(t);
      }
      loadScripts(t) {
        const n = this, s = (l, c) => {
          Re(n.scriptLoadedCallbacks, c).each((u) => {
            P(u, (f) => f[l](c));
          }), delete n.scriptLoadedCallbacks[c];
        }, o = (l) => {
          const c = se(l, (u) => u.status === "rejected");
          return c.length > 0 ? Promise.reject(sn(c, ({ reason: u }) => Ge(u) ? u : [u])) : Promise.resolve();
        }, r = (l) => Promise.allSettled(he(l, (c) => n.states[c] === Oi ? (s("resolve", c), Promise.resolve()) : n.states[c] === Up ? (s("reject", c), Promise.reject(c)) : (n.states[c] = JA, n.loadScript(c).then(() => {
          n.states[c] = Oi, s("resolve", c);
          const u = n.queue;
          return u.length > 0 ? (n.queue = [], r(u).then(o)) : Promise.resolve();
        }, () => (n.states[c] = Up, s("reject", c), Promise.reject(c)))))), a = (l) => (n.loading = !0, r(l).then((c) => {
          n.loading = !1;
          const u = n.queueLoadedCallbacks.shift();
          return m.from(u).each(br), o(c);
        })), i = ig(t);
        return n.loading ? new Promise((l, c) => {
          n.queueLoadedCallbacks.push(() => {
            a(i).then(l, c);
          });
        }) : a(i);
      }
    }
    Qn.ScriptLoader = new Qn();
    const et = (e) => {
      let t = e;
      return {
        get: () => t,
        set: (o) => {
          t = o;
        }
      };
    }, eT = (e, t) => {
      const n = e.indexOf(t);
      return n !== -1 && e.indexOf(t, n + 1) > n;
    }, tT = (e) => vt(e) && oe(e, "raw"), nT = (e) => Ge(e) && e.length > 1, jr = {}, Cu = et("en"), zp = () => Re(jr, Cu.get()), bn = {
      getData: () => ai(jr, (e) => ({ ...e })),
      setCode: (e) => {
        e && Cu.set(e);
      },
      getCode: () => Cu.get(),
      add: (e, t) => {
        let n = jr[e];
        n || (jr[e] = n = {});
        const s = he(Dt(t), (o) => o.toLowerCase());
        Ae(t, (o, r) => {
          const a = r.toLowerCase();
          a !== r && eT(s, a) ? (oe(t, a) || (n[a] = o), n[r] = o) : n[a] = o;
        });
      },
      translate: (e) => {
        const t = zp().getOr({}), n = (a) => Se(a) ? Object.prototype.toString.call(a) : s(a) ? "" : "" + a, s = (a) => a === "" || a === null || a === void 0, o = (a) => {
          const i = n(a);
          return oe(t, i) ? n(t[i]) : Re(t, i.toLowerCase()).map(n).getOr(i);
        }, r = (a) => a.replace(/{context:\w+}$/, "");
        if (s(e))
          return "";
        if (tT(e))
          return n(e.raw);
        if (nT(e)) {
          const a = e.slice(1), i = o(e[0]).replace(/\{([0-9]+)\}/g, (l, c) => oe(a, c) ? n(a[c]) : l);
          return r(i);
        }
        return r(o(e));
      },
      isRtl: () => zp().bind((e) => Re(e, "_dir")).exists((e) => e === "rtl"),
      hasCode: (e) => oe(jr, e)
    }, yt = () => {
      const e = [], t = {}, n = {}, s = [], o = (g, b) => {
        const v = se(s, (y) => y.name === g && y.state === b);
        P(v, (y) => y.resolve());
      }, r = (g) => oe(t, g), a = (g) => oe(n, g), i = (g) => {
        if (n[g])
          return n[g].instance;
      }, l = (g, b) => {
        const v = bn.getCode(), y = "," + (b || "") + ",";
        !v || b && y.indexOf("," + v + ",") === -1 || Qn.ScriptLoader.add(t[g] + "/langs/" + v + ".js");
      }, c = (g, b) => {
        yt.languageLoad !== !1 && (r(g) ? l(g, b) : h(g, "loaded").then(() => l(g, b)));
      }, u = (g, b) => (e.push(b), n[g] = { instance: b }, o(g, "added"), b), f = (g) => {
        delete t[g], delete n[g];
      }, d = (g, b) => J(b) ? J(g) ? {
        prefix: "",
        resource: b,
        suffix: ""
      } : {
        prefix: g.prefix,
        resource: b,
        suffix: g.suffix
      } : b, p = (g, b) => {
        if (t[g])
          return Promise.resolve();
        let v = J(b) ? b : b.prefix + b.resource + b.suffix;
        v.indexOf("/") !== 0 && v.indexOf("://") === -1 && (v = yt.baseURL + "/" + v), t[g] = v.substring(0, v.lastIndexOf("/"));
        const y = () => (o(g, "loaded"), Promise.resolve());
        return n[g] ? y() : Qn.ScriptLoader.add(v).then(y);
      }, h = (g, b = "added") => b === "added" && a(g) || b === "loaded" && r(g) ? Promise.resolve() : new Promise((v) => {
        s.push({
          name: g,
          state: b,
          resolve: v
        });
      });
      return {
        items: e,
        urls: t,
        lookup: n,
        get: i,
        requireLangPack: c,
        add: u,
        remove: f,
        createUrl: d,
        load: p,
        waitFor: h
      };
    };
    yt.languageLoad = !0, yt.baseURL = "", yt.PluginManager = yt(), yt.ThemeManager = yt(), yt.ModelManager = yt();
    const sT = (e) => {
      const t = et(m.none()), n = () => t.get().each(e);
      return {
        clear: () => {
          n(), t.set(m.none());
        },
        isSet: () => t.get().isSome(),
        get: () => t.get(),
        set: (i) => {
          n(), t.set(m.some(i));
        }
      };
    }, oT = (e) => {
      const t = et(m.none()), n = () => t.get().each((i) => clearInterval(i));
      return {
        clear: () => {
          n(), t.set(m.none());
        },
        isSet: () => t.get().isSome(),
        get: () => t.get(),
        set: (i) => {
          n(), t.set(m.some(setInterval(i, e)));
        }
      };
    }, fs = () => {
      const e = sT(ce);
      return {
        ...e,
        on: (n) => e.get().each(n)
      };
    }, Bi = (e, t) => {
      let n = null;
      return {
        cancel: () => {
          kt(n) || (clearTimeout(n), n = null);
        },
        throttle: (...r) => {
          kt(n) && (n = setTimeout(() => {
            n = null, e.apply(null, r);
          }, t));
        }
      };
    }, vu = (e, t) => {
      let n = null;
      const s = () => {
        kt(n) || (clearTimeout(n), n = null);
      };
      return {
        cancel: s,
        throttle: (...r) => {
          s(), n = setTimeout(() => {
            n = null, e.apply(null, r);
          }, t);
        }
      };
    }, qr = V("mce-annotation"), Gs = V("data-mce-annotation"), $o = V("data-mce-annotation-uid"), Kr = V("data-mce-annotation-active"), Gr = V("data-mce-annotation-classes"), Yr = V("data-mce-annotation-attrs"), Hp = (e) => (t) => ve(t, e), Wp = (e, t) => {
      const n = e.selection.getRng(), s = C.fromDom(n.startContainer), o = C.fromDom(e.getBody()), r = t.fold(() => "." + qr(), (l) => `[${Gs()}="${l}"]`), a = To(s, n.startOffset).getOr(s);
      return $s(a, r, Hp(o)).bind((l) => Vn(l, `${$o()}`).bind((c) => Vn(l, `${Gs()}`).map((u) => {
        const f = jp(e, c);
        return {
          uid: c,
          name: u,
          elements: f
        };
      })));
    }, rT = (e) => Mt(e) && Oc(e, qr()), Vp = (e, t) => xr(e, "data-mce-bogus") || sp(e, '[data-mce-bogus="all"]', Hp(t)), jp = (e, t) => {
      const n = C.fromDom(e.getBody()), s = mt(n, `[${$o()}="${t}"]`);
      return se(s, (o) => !Vp(o, n));
    }, qp = (e, t) => {
      const n = C.fromDom(e.getBody()), s = mt(n, `[${Gs()}="${t}"]`), o = {};
      return P(s, (r) => {
        if (!Vp(r, n)) {
          const a = Ut(r, $o()), i = Re(o, a).getOr([]);
          o[a] = i.concat([r]);
        }
      }), o;
    }, aT = (e, t) => {
      const n = et({}), s = () => ({
        listeners: [],
        previous: fs()
      }), o = (f, d) => {
        r(f, (p) => (d(p), p));
      }, r = (f, d) => {
        const p = n.get(), h = Re(p, f).getOrThunk(s), g = d(h);
        p[f] = g, n.set(p);
      }, a = (f, d, p) => {
        o(f, (h) => {
          P(h.listeners, (g) => g(!0, f, {
            uid: d,
            nodes: he(p, (b) => b.dom)
          }));
        });
      }, i = (f) => {
        o(f, (d) => {
          P(d.listeners, (p) => p(!1, f));
        });
      }, l = (f, d) => {
        P(jp(e, f), (p) => {
          d ? ot(p, Kr(), "true") : rt(p, Kr());
        });
      }, c = vu(() => {
        const f = Rs(t.getNames());
        P(f, (d) => {
          r(d, (p) => {
            const h = p.previous.get();
            return Wp(e, m.some(d)).fold(() => {
              h.each((g) => {
                i(d), p.previous.clear(), l(g, !1);
              });
            }, ({ uid: g, name: b, elements: v }) => {
              xo(h, g) || (h.each((y) => l(y, !1)), a(b, g, v), p.previous.set(g), l(g, !0));
            }), {
              previous: p.previous,
              listeners: p.listeners
            };
          });
        });
      }, 30);
      return e.on("remove", () => {
        c.cancel();
      }), e.on("NodeChange", () => {
        c.throttle();
      }), { addListener: (f, d) => {
        r(f, (p) => ({
          previous: p.previous,
          listeners: p.listeners.concat([d])
        }));
      } };
    }, iT = (e, t) => {
      const n = Gs(), s = (r) => m.from(r.attr(n)).bind(t.lookup), o = (r) => {
        var a, i;
        r.attr($o(), null), r.attr(Gs(), null), r.attr(Kr(), null);
        const l = m.from(r.attr(Yr())).map((d) => d.split(",")).getOr([]), c = m.from(r.attr(Gr())).map((d) => d.split(",")).getOr([]);
        P(l, (d) => r.attr(d, null));
        const u = (i = (a = r.attr("class")) === null || a === void 0 ? void 0 : a.split(" ")) !== null && i !== void 0 ? i : [], f = oi(u, [qr()].concat(c));
        r.attr("class", f.length > 0 ? f.join(" ") : null), r.attr(Gr(), null), r.attr(Yr(), null);
      };
      e.serializer.addTempAttr(Kr()), e.serializer.addAttributeFilter(n, (r) => {
        for (const a of r)
          s(a).each((i) => {
            i.persistent === !1 && (a.name === "span" ? a.unwrap() : o(a));
          });
      });
    }, lT = () => {
      const e = {};
      return {
        register: (o, r) => {
          e[o] = {
            name: o,
            settings: r
          };
        },
        lookup: (o) => Re(e, o).map((r) => r.settings),
        getNames: () => Dt(e)
      };
    };
    let Kp = 0;
    const Xr = (e) => {
      const n = (/* @__PURE__ */ new Date()).getTime(), s = Math.floor(Math.random() * 1e9);
      return Kp++, e + "_" + s + Kp + String(n);
    }, cT = (e, t) => {
      P(t, (n) => {
        Ao(e, n);
      });
    }, uT = (e, t) => {
      P(t, (n) => {
        Ar(e, n);
      });
    }, Gp = (e, t) => C.fromDom(e.dom.cloneNode(t)), Ys = (e) => Gp(e, !1), Yp = (e) => Gp(e, !0), fT = (e, t) => {
      const n = C.fromTag(t), s = Rg(e);
      return Wn(n, s), n;
    }, dT = (e, t) => {
      const n = fT(e, t);
      Gn(e, n);
      const s = at(e);
      return Ms(n, s), Pe(e), n;
    }, Xp = (e, t, n = Le) => {
      const s = new Xe(e, t), o = (r) => {
        let a;
        do
          a = s[r]();
        while (a && !B(a) && !n(a));
        return m.from(a).filter(B);
      };
      return {
        current: () => m.from(s.current()).filter(B),
        next: () => o("next"),
        prev: () => o("prev"),
        prev2: () => o("prev2")
      };
    }, Xs = (e, t) => {
      const n = t || ((a) => e.isBlock(a) || $e(a) || De(a)), s = (a, i, l, c) => {
        if (B(a)) {
          const u = c(a, i, a.data);
          if (u !== -1)
            return m.some({
              container: a,
              offset: u
            });
        }
        return l().bind((u) => s(u.container, u.offset, l, c));
      };
      return {
        backwards: (a, i, l, c) => {
          const u = Xp(a, c ?? e.getRoot(), n);
          return s(a, i, () => u.prev().map((f) => ({
            container: f,
            offset: f.length
          })), l).getOrNull();
        },
        forwards: (a, i, l, c) => {
          const u = Xp(a, c ?? e.getRoot(), n);
          return s(a, i, () => u.next().map((f) => ({
            container: f,
            offset: 0
          })), l).getOrNull();
        }
      };
    }, Fo = Math.round, Zs = (e) => e ? {
      left: Fo(e.left),
      top: Fo(e.top),
      bottom: Fo(e.bottom),
      right: Fo(e.right),
      width: Fo(e.width),
      height: Fo(e.height)
    } : {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      width: 0,
      height: 0
    }, Zp = (e, t) => (e = Zs(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e), mT = (e, t) => e.left === t.left && e.top === t.top && e.bottom === t.bottom && e.right === t.right, Qp = (e, t, n) => e >= 0 && e <= Math.min(t.height, n.height) / 2, Zr = (e, t) => {
      const n = Math.min(t.height / 2, e.height / 2);
      return e.bottom - n < t.top ? !0 : e.top > t.bottom ? !1 : Qp(t.top - e.bottom, e, t);
    }, Qr = (e, t) => e.top > t.bottom ? !0 : e.bottom < t.top ? !1 : Qp(t.bottom - e.top, e, t), gT = (e, t, n) => t >= e.left && t <= e.right && n >= e.top && n <= e.bottom, pT = (e) => Rt(e, (t, n) => t.fold(() => m.some(n), (s) => {
      const o = Math.min(n.left, s.left), r = Math.min(n.top, s.top), a = Math.max(n.right, s.right), i = Math.max(n.bottom, s.bottom);
      return m.some({
        top: r,
        right: a,
        bottom: i,
        left: o,
        width: a - o,
        height: i - r
      });
    }), m.none()), Jp = (e, t, n) => {
      const s = Math.max(Math.min(t, e.left + e.width), e.left), o = Math.max(Math.min(n, e.top + e.height), e.top);
      return Math.sqrt((t - s) * (t - s) + (n - o) * (n - o));
    }, hT = (e, t) => Math.max(0, Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top)), bT = (e, t, n) => Math.min(Math.max(e, t), n), Ii = (e) => {
      const t = e.startContainer, n = e.startOffset;
      return t === e.endContainer && t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null;
    }, ds = (e, t) => {
      if (q(e) && e.hasChildNodes()) {
        const n = e.childNodes, s = bT(t, 0, n.length - 1);
        return n[s];
      } else
        return e;
    }, CT = (e, t) => {
      if (!(t < 0 && q(e) && e.hasChildNodes()))
        return ds(e, t);
    }, vT = new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"), eh = (e) => J(e) && e.charCodeAt(0) >= 768 && vT.test(e), yT = (...e) => (t) => {
      for (let n = 0; n < e.length; n++)
        if (e[n](t))
          return !0;
      return !1;
    }, ET = (...e) => (t) => {
      for (let n = 0; n < e.length; n++)
        if (!e[n](t))
          return !1;
      return !0;
    }, th = q, ST = an, nh = yi("display", "block table"), wT = yi("float", "left right"), Jr = ET(th, ST, hr(wT)), kT = hr(yi("white-space", "pre pre-line pre-wrap")), ea = B, yu = $e, sh = Ne.nodeIndex, Li = CT, Eu = (e) => e ? e.createRange() : Ne.DOM.createRng(), Su = (e) => J(e) && /[\r\n\t ]/.test(e), oh = (e) => !!e.setStart && !!e.setEnd, wu = (e) => {
      const t = e.startContainer, n = e.startOffset;
      if (Su(e.toString()) && kT(t.parentNode) && B(t)) {
        const s = t.data;
        if (Su(s[n - 1]) || Su(s[n + 1]))
          return !0;
      }
      return !1;
    }, _T = (e) => {
      const t = e.ownerDocument, n = Eu(t), s = t.createTextNode(Je), o = e.parentNode;
      o.insertBefore(s, e), n.setStart(s, 0), n.setEnd(s, 1);
      const r = Zs(n.getBoundingClientRect());
      return o.removeChild(s), r;
    }, xT = (e) => {
      const t = e.startContainer, n = e.endContainer, s = e.startOffset, o = e.endOffset;
      if (t === n && B(n) && s === 0 && o === 1) {
        const r = e.cloneRange();
        return r.setEndAfter(n), ms(r);
      } else
        return null;
    }, rh = (e) => e.left === 0 && e.right === 0 && e.top === 0 && e.bottom === 0, ms = (e) => {
      var t;
      let n;
      const s = e.getClientRects();
      return s.length > 0 ? n = Zs(s[0]) : n = Zs(e.getBoundingClientRect()), !oh(e) && yu(e) && rh(n) ? _T(e) : rh(n) && oh(e) && (t = xT(e)) !== null && t !== void 0 ? t : n;
    }, Qs = (e, t) => {
      const n = Zp(e, t);
      return n.width = 1, n.right = n.left + 1, n;
    }, NT = (e) => {
      const t = [], n = (a) => {
        a.height !== 0 && (t.length > 0 && mT(a, t[t.length - 1]) || t.push(a));
      }, s = (a, i) => {
        const l = Eu(a.ownerDocument);
        if (i < a.data.length) {
          if (eh(a.data[i]))
            return;
          if (eh(a.data[i - 1]) && (l.setStart(a, i), l.setEnd(a, i + 1), !wu(l))) {
            n(Qs(ms(l), !1));
            return;
          }
        }
        i > 0 && (l.setStart(a, i - 1), l.setEnd(a, i), wu(l) || n(Qs(ms(l), !1))), i < a.data.length && (l.setStart(a, i), l.setEnd(a, i + 1), wu(l) || n(Qs(ms(l), !0)));
      }, o = e.container(), r = e.offset();
      if (ea(o))
        return s(o, r), t;
      if (th(o))
        if (e.isAtEnd()) {
          const a = Li(o, r);
          ea(a) && s(a, a.data.length), Jr(a) && !yu(a) && n(Qs(ms(a), !1));
        } else {
          const a = Li(o, r);
          if (ea(a) && s(a, 0), Jr(a) && e.isAtEnd())
            return n(Qs(ms(a), !1)), t;
          const i = Li(e.container(), e.offset() - 1);
          Jr(i) && !yu(i) && (nh(i) || nh(a) || !Jr(a)) && n(Qs(ms(i), !1)), Jr(a) && n(Qs(ms(a), !0));
        }
      return t;
    }, N = (e, t, n) => {
      const s = () => (ea(e), t === 0), o = () => ea(e) ? t >= e.data.length : t >= e.childNodes.length, r = () => {
        const u = Eu(e.ownerDocument);
        return u.setStart(e, t), u.setEnd(e, t), u;
      }, a = () => (n || (n = NT(N(e, t))), n), i = () => a().length > 0, l = (u) => u && e === u.container() && t === u.offset(), c = (u) => Li(e, u ? t - 1 : t);
      return {
        container: V(e),
        offset: V(t),
        toRange: r,
        getClientRects: a,
        isVisible: i,
        isAtStart: s,
        isAtEnd: o,
        isEqual: l,
        getNode: c
      };
    };
    N.fromRangeStart = (e) => N(e.startContainer, e.startOffset), N.fromRangeEnd = (e) => N(e.endContainer, e.endOffset), N.after = (e) => N(e.parentNode, sh(e) + 1), N.before = (e) => N(e.parentNode, sh(e)), N.isAbove = (e, t) => dt(Pt(t.getClientRects()), Ps(e.getClientRects()), Zr).getOr(!1), N.isBelow = (e, t) => dt(Ps(t.getClientRects()), Pt(e.getClientRects()), Qr).getOr(!1), N.isAtStart = (e) => e ? e.isAtStart() : !1, N.isAtEnd = (e) => e ? e.isAtEnd() : !1, N.isTextPosition = (e) => e ? B(e.container()) : !1, N.isElementPosition = (e) => !N.isTextPosition(e);
    const $i = (e, t) => {
      B(t) && t.data.length === 0 && e.remove(t);
    }, AT = (e, t, n) => {
      t.insertNode(n), $i(e, n.previousSibling), $i(e, n.nextSibling);
    }, TT = (e, t, n) => {
      const s = m.from(n.firstChild), o = m.from(n.lastChild);
      t.insertNode(n), s.each((r) => $i(e, r.previousSibling)), o.each((r) => $i(e, r.nextSibling));
    }, ku = (e, t, n) => {
      jc(n) ? TT(e, t, n) : AT(e, t, n);
    }, Cn = B, ah = zs, ih = Ne.nodeIndex, lh = (e) => {
      const t = e.parentNode;
      return ah(t) ? lh(t) : t;
    }, _u = (e) => e ? ci(e.childNodes, (t, n) => (ah(n) && n.nodeName !== "BR" ? t = t.concat(_u(n)) : t.push(n), t), []) : [], RT = (e, t) => {
      let n = e;
      for (; (n = n.previousSibling) && Cn(n); )
        t += n.data.length;
      return t;
    }, ch = (e) => (t) => e === t, PT = (e) => {
      let t, n;
      t = _u(lh(e)), n = cg(t, ch(e), e), t = t.slice(0, n + 1);
      const s = ci(t, (o, r, a) => (Cn(r) && Cn(t[a - 1]) && o++, o), 0);
      return t = Sr(t, pn([e.nodeName])), n = cg(t, ch(e), e), n - s;
    }, uh = (e) => (Cn(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + PT(e) + "]", DT = (e, t, n) => {
      const s = [];
      for (let o = t.parentNode; o && o !== e; o = o.parentNode)
        s.push(o);
      return s;
    }, fh = (e, t) => {
      let n = [], s = t.container(), o = t.offset(), r;
      if (Cn(s))
        r = RT(s, o);
      else {
        const i = s.childNodes;
        o >= i.length ? (r = "after", o = i.length - 1) : r = "before", s = i[o];
      }
      n.push(uh(s));
      let a = DT(e, s);
      return a = Sr(a, hr(zs)), n = n.concat(xc(a, (i) => uh(i))), n.reverse().join("/") + "," + r;
    }, OT = (e, t, n) => {
      let s = _u(e);
      return s = Sr(s, (o, r) => !Cn(o) || !Cn(s[r - 1])), s = Sr(s, pn([t])), s[n];
    }, BT = (e, t) => {
      let n = e, s = 0;
      for (; Cn(n); ) {
        const o = n.data.length;
        if (t >= s && t <= s + o) {
          e = n, t = t - s;
          break;
        }
        if (!Cn(n.nextSibling)) {
          e = n, t = o;
          break;
        }
        s += o, n = n.nextSibling;
      }
      return Cn(e) && t > e.data.length && (t = e.data.length), N(e, t);
    }, dh = (e, t) => {
      if (!t)
        return null;
      const n = t.split(","), s = n[0].split("/"), o = n.length > 1 ? n[1] : "before", r = ci(s, (a, i) => {
        const l = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(i);
        return l ? (l[1] === "text()" && (l[1] = "#text"), OT(a, l[1], parseInt(l[2], 10))) : null;
      }, e);
      if (!r)
        return null;
      if (!Cn(r) && r.parentNode) {
        let a;
        return o === "after" ? a = ih(r) + 1 : a = ih(r), N(r.parentNode, a);
      }
      return BT(r, parseInt(o, 10));
    }, Fi = De, IT = (e, t, n) => {
      let s = e(t.data.slice(0, n)).length;
      for (let o = t.previousSibling; o && B(o); o = o.previousSibling)
        s += e(o.data).length;
      return s;
    }, mh = (e, t, n, s, o) => {
      const r = o ? s.startContainer : s.endContainer;
      let a = o ? s.startOffset : s.endOffset;
      const i = [], l = e.getRoot();
      if (B(r))
        i.push(n ? IT(t, r, a) : a);
      else {
        let c = 0;
        const u = r.childNodes;
        a >= u.length && u.length && (c = 1, a = Math.max(0, u.length - 1)), i.push(e.nodeIndex(u[a], n) + c);
      }
      for (let c = r; c && c !== l; c = c.parentNode)
        i.push(e.nodeIndex(c, n));
      return i;
    }, LT = (e, t, n, s) => {
      const o = t.dom, r = mh(o, e, n, s, !0), a = t.isForward(), i = up(s) ? { isFakeCaret: !0 } : {};
      if (t.isCollapsed())
        return {
          start: r,
          forward: a,
          ...i
        };
      {
        const l = mh(o, e, n, s, !1);
        return {
          start: r,
          end: l,
          forward: a,
          ...i
        };
      }
    }, xu = (e, t, n) => {
      let s = 0;
      return L.each(e.select(t), (o) => {
        if (o.getAttribute("data-mce-bogus") !== "all") {
          if (o === n)
            return !1;
          s++;
          return;
        }
      }), s;
    }, gh = (e, t) => {
      let n = t ? e.startContainer : e.endContainer, s = t ? e.startOffset : e.endOffset;
      if (q(n) && n.nodeName === "TR") {
        const o = n.childNodes;
        n = o[Math.min(t ? s : s - 1, o.length - 1)], n && (s = t ? 0 : n.childNodes.length, t ? e.setStart(n, s) : e.setEnd(n, s));
      }
    }, ph = (e) => (gh(e, !0), gh(e, !1), e), hh = (e, t) => {
      if (q(e) && (e = ds(e, t), Fi(e)))
        return e;
      if (qt(e)) {
        B(e) && Io(e) && (e = e.parentNode);
        let n = e.previousSibling;
        if (Fi(n) || (n = e.nextSibling, Fi(n)))
          return n;
      }
    }, $T = (e) => hh(e.startContainer, e.startOffset) || hh(e.endContainer, e.endOffset), bh = (e, t, n) => {
      const s = n.getNode(), o = n.getRng();
      if (s.nodeName === "IMG" || Fi(s)) {
        const a = s.nodeName;
        return {
          name: a,
          index: xu(n.dom, a, s)
        };
      }
      const r = $T(o);
      if (r) {
        const a = r.tagName;
        return {
          name: a,
          index: xu(n.dom, a, r)
        };
      }
      return LT(e, n, t, o);
    }, FT = (e) => {
      const t = e.getRng();
      return {
        start: fh(e.dom.getRoot(), N.fromRangeStart(t)),
        end: fh(e.dom.getRoot(), N.fromRangeEnd(t)),
        forward: e.isForward()
      };
    }, MT = (e) => ({
      rng: e.getRng(),
      forward: e.isForward()
    }), Ch = (e, t, n) => {
      const s = {
        "data-mce-type": "bookmark",
        id: t,
        style: "overflow:hidden;line-height:0px"
      };
      return n ? e.create("span", s, "&#xFEFF;") : e.create("span", s);
    }, vh = (e, t) => {
      const n = e.dom;
      let s = e.getRng();
      const o = n.uniqueId(), r = e.isCollapsed(), a = e.getNode(), i = a.nodeName, l = e.isForward();
      if (i === "IMG")
        return {
          name: i,
          index: xu(n, i, a)
        };
      const c = ph(s.cloneRange());
      if (!r) {
        c.collapse(!1);
        const f = Ch(n, o + "_end", t);
        ku(n, c, f);
      }
      s = ph(s), s.collapse(!0);
      const u = Ch(n, o + "_start", t);
      return ku(n, s, u), e.moveToBookmark({
        id: o,
        keep: !0,
        forward: l
      }), {
        id: o,
        forward: l
      };
    }, UT = (e, t, n = !1) => t === 2 ? bh(zt, n, e) : t === 3 ? FT(e) : t ? MT(e) : vh(e, !1), Nu = j(bh, _t, !0), yh = (e) => {
      const t = (r) => r(e), n = V(e), s = () => o, o = {
        tag: !0,
        inner: e,
        fold: (r, a) => a(e),
        isValue: He,
        isError: Le,
        map: (r) => xt.value(r(e)),
        mapError: s,
        bind: t,
        exists: t,
        forall: t,
        getOr: n,
        or: s,
        getOrThunk: n,
        orThunk: s,
        getOrDie: n,
        each: (r) => {
          r(e);
        },
        toOptional: () => m.some(e)
      };
      return o;
    }, Eh = (e) => {
      const t = () => n, n = {
        tag: !1,
        inner: e,
        fold: (s, o) => s(e),
        isValue: Le,
        isError: He,
        map: t,
        mapError: (s) => xt.error(s(e)),
        bind: t,
        exists: Le,
        forall: He,
        getOr: _t,
        or: _t,
        getOrThunk: yc,
        orThunk: yc,
        getOrDie: tg(String(e)),
        each: ce,
        toOptional: m.none
      };
      return n;
    }, xt = {
      value: yh,
      error: Eh,
      fromOption: (e, t) => e.fold(() => Eh(t), yh)
    }, Tn = { generate: (e) => {
      if (!Ge(e))
        throw new Error("cases must be an array");
      if (e.length === 0)
        throw new Error("there must be at least one case");
      const t = [], n = {};
      return P(e, (s, o) => {
        const r = Dt(s);
        if (r.length !== 1)
          throw new Error("one and only one name per case");
        const a = r[0], i = s[a];
        if (n[a] !== void 0)
          throw new Error("duplicate key detected:" + a);
        if (a === "cata")
          throw new Error("cannot have a case named cata (sorry)");
        if (!Ge(i))
          throw new Error("case arguments must be an array");
        t.push(a), n[a] = (...l) => {
          const c = l.length;
          if (c !== i.length)
            throw new Error("Wrong number of arguments to case " + a + ". Expected " + i.length + " (" + i + "), got " + c);
          return {
            fold: (...f) => {
              if (f.length !== e.length)
                throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + f.length);
              return f[o].apply(null, l);
            },
            match: (f) => {
              const d = Dt(f);
              if (t.length !== d.length)
                throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + `
Actual: ` + d.join(","));
              if (!zn(t, (h) => ke(d, h)))
                throw new Error("Not all branches were specified when using match. Specified: " + d.join(", ") + `
Required: ` + t.join(", "));
              return f[a].apply(null, l);
            },
            log: (f) => {
              console.log(f, {
                constructors: t,
                constructor: a,
                params: l
              });
            }
          };
        };
      }), n;
    } };
    Tn.generate([
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
    const zT = (e) => {
      const t = [], n = [];
      return P(e, (s) => {
        s.fold((o) => {
          t.push(o);
        }, (o) => {
          n.push(o);
        });
      }), {
        errors: t,
        values: n
      };
    }, HT = (e) => e.type === "inline-command" || e.type === "inline-format", WT = (e) => e.type === "block-command" || e.type === "block-format", VT = (e) => {
      const t = (s) => xt.error({
        message: s,
        pattern: e
      }), n = (s, o, r) => {
        if (e.format !== void 0) {
          let a;
          if (Ge(e.format)) {
            if (!zn(e.format, J))
              return t(s + " pattern has non-string items in the `format` array");
            a = e.format;
          } else if (J(e.format))
            a = [e.format];
          else
            return t(s + " pattern has non-string `format` parameter");
          return xt.value(o(a));
        } else return e.cmd !== void 0 ? J(e.cmd) ? xt.value(r(e.cmd, e.value)) : t(s + " pattern has non-string `cmd` parameter") : t(s + " pattern is missing both `format` and `cmd` parameters");
      };
      if (!vt(e))
        return t("Raw pattern is not an object");
      if (!J(e.start))
        return t("Raw pattern is missing `start` parameter");
      if (e.end !== void 0) {
        if (!J(e.end))
          return t("Inline pattern has non-string `end` parameter");
        if (e.start.length === 0 && e.end.length === 0)
          return t("Inline pattern has empty `start` and `end` parameters");
        let s = e.start, o = e.end;
        return o.length === 0 && (o = s, s = ""), n("Inline", (r) => ({
          type: "inline-format",
          start: s,
          end: o,
          format: r
        }), (r, a) => ({
          type: "inline-command",
          start: s,
          end: o,
          cmd: r,
          value: a
        }));
      } else return e.replacement !== void 0 ? J(e.replacement) ? e.start.length === 0 ? t("Replacement pattern has empty `start` parameter") : xt.value({
        type: "inline-command",
        start: "",
        end: e.start,
        cmd: "mceInsertContent",
        value: e.replacement
      }) : t("Replacement pattern has non-string `replacement` parameter") : e.start.length === 0 ? t("Block pattern has empty `start` parameter") : n("Block", (s) => ({
        type: "block-format",
        start: e.start,
        format: s[0]
      }), (s, o) => ({
        type: "block-command",
        start: e.start,
        cmd: s,
        value: o
      }));
    }, Sh = (e) => se(e, WT), wh = (e) => se(e, HT), jT = (e, t) => ({
      inlinePatterns: wh(e),
      blockPatterns: Sh(e),
      dynamicPatternsLookup: t
    }), kh = (e) => {
      const t = zT(he(e, VT));
      return P(t.errors, (n) => console.error(n.message, n.pattern)), t.values;
    }, qT = (e) => (t) => {
      const n = e(t);
      return kh(n);
    }, Au = kn().deviceType, KT = Au.isTouch(), GT = Ne.DOM, YT = (e) => {
      const t = e.indexOf("=") > 0 ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/) : e.split(",");
      return Rt(t, (n, s) => {
        const o = s.split("="), r = o[0], a = o.length > 1 ? o[1] : r;
        return n[_o(r)] = _o(a), n;
      }, {});
    }, _h = (e) => si(e, RegExp), W = (e) => (t) => t.options.get(e), Tu = (e) => J(e) || vt(e), xh = (e, t = "") => (n) => {
      const s = J(n);
      if (s)
        if (n.indexOf("=") !== -1) {
          const o = YT(n);
          return {
            value: Re(o, e.id).getOr(t),
            valid: s
          };
        } else
          return {
            value: n,
            valid: s
          };
      else
        return {
          valid: !1,
          message: "Must be a string."
        };
    }, XT = (e) => {
      const t = e.options.register;
      t("id", {
        processor: "string",
        default: e.id
      }), t("selector", { processor: "string" }), t("target", { processor: "object" }), t("suffix", { processor: "string" }), t("cache_suffix", { processor: "string" }), t("base_url", { processor: "string" }), t("referrer_policy", {
        processor: "string",
        default: ""
      }), t("language_load", {
        processor: "boolean",
        default: !0
      }), t("inline", {
        processor: "boolean",
        default: !1
      }), t("iframe_attrs", {
        processor: "object",
        default: {}
      }), t("doctype", {
        processor: "string",
        default: "<!DOCTYPE html>"
      }), t("document_base_url", {
        processor: "string",
        default: e.documentBaseUrl
      }), t("body_id", {
        processor: xh(e, "tinymce"),
        default: "tinymce"
      }), t("body_class", {
        processor: xh(e),
        default: ""
      }), t("content_security_policy", {
        processor: "string",
        default: ""
      }), t("br_in_pre", {
        processor: "boolean",
        default: !0
      }), t("forced_root_block", {
        processor: (n) => {
          const s = J(n) && wn(n);
          return s ? {
            value: n,
            valid: s
          } : {
            valid: !1,
            message: "Must be a non-empty string."
          };
        },
        default: "p"
      }), t("forced_root_block_attrs", {
        processor: "object",
        default: {}
      }), t("newline_behavior", {
        processor: (n) => {
          const s = ke([
            "block",
            "linebreak",
            "invert",
            "default"
          ], n);
          return s ? {
            value: n,
            valid: s
          } : {
            valid: !1,
            message: "Must be one of: block, linebreak, invert or default."
          };
        },
        default: "default"
      }), t("br_newline_selector", {
        processor: "string",
        default: ".mce-toc h2,figcaption,caption"
      }), t("no_newline_selector", {
        processor: "string",
        default: ""
      }), t("keep_styles", {
        processor: "boolean",
        default: !0
      }), t("end_container_on_empty_block", {
        processor: (n) => Ts(n) ? {
          valid: !0,
          value: n
        } : J(n) ? {
          valid: !0,
          value: n
        } : {
          valid: !1,
          message: "Must be boolean or a string"
        },
        default: "blockquote"
      }), t("font_size_style_values", {
        processor: "string",
        default: "xx-small,x-small,small,medium,large,x-large,xx-large"
      }), t("font_size_legacy_values", {
        processor: "string",
        default: "xx-small,small,medium,large,x-large,xx-large,300%"
      }), t("font_size_classes", {
        processor: "string",
        default: ""
      }), t("automatic_uploads", {
        processor: "boolean",
        default: !0
      }), t("images_reuse_filename", {
        processor: "boolean",
        default: !1
      }), t("images_replace_blob_uris", {
        processor: "boolean",
        default: !0
      }), t("icons", {
        processor: "string",
        default: ""
      }), t("icons_url", {
        processor: "string",
        default: ""
      }), t("images_upload_url", {
        processor: "string",
        default: ""
      }), t("images_upload_base_path", {
        processor: "string",
        default: ""
      }), t("images_upload_credentials", {
        processor: "boolean",
        default: !1
      }), t("images_upload_handler", { processor: "function" }), t("language", {
        processor: "string",
        default: "en"
      }), t("language_url", {
        processor: "string",
        default: ""
      }), t("entity_encoding", {
        processor: "string",
        default: "named"
      }), t("indent", {
        processor: "boolean",
        default: !0
      }), t("indent_before", {
        processor: "string",
        default: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,details,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
      }), t("indent_after", {
        processor: "string",
        default: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,details,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
      }), t("indent_use_margin", {
        processor: "boolean",
        default: !1
      }), t("indentation", {
        processor: "string",
        default: "40px"
      }), t("content_css", {
        processor: (n) => {
          const s = n === !1 || J(n) || Eo(n, J);
          return s ? J(n) ? {
            value: he(n.split(","), _o),
            valid: s
          } : Ge(n) ? {
            value: n,
            valid: s
          } : n === !1 ? {
            value: [],
            valid: s
          } : {
            value: n,
            valid: s
          } : {
            valid: !1,
            message: "Must be false, a string or an array of strings."
          };
        },
        default: Du(e) ? [] : ["default"]
      }), t("content_style", { processor: "string" }), t("content_css_cors", {
        processor: "boolean",
        default: !1
      }), t("font_css", {
        processor: (n) => {
          const s = J(n) || Eo(n, J);
          return s ? {
            value: Ge(n) ? n : he(n.split(","), _o),
            valid: s
          } : {
            valid: !1,
            message: "Must be a string or an array of strings."
          };
        },
        default: []
      }), t("inline_boundaries", {
        processor: "boolean",
        default: !0
      }), t("inline_boundaries_selector", {
        processor: "string",
        default: "a[href],code,span.mce-annotation"
      }), t("object_resizing", {
        processor: (n) => {
          const s = Ts(n) || J(n);
          return s ? n === !1 || Au.isiPhone() || Au.isiPad() ? {
            value: "",
            valid: s
          } : {
            value: n === !0 ? "table,img,figure.image,div,video,iframe" : n,
            valid: s
          } : {
            valid: !1,
            message: "Must be boolean or a string"
          };
        },
        default: !KT
      }), t("resize_img_proportional", {
        processor: "boolean",
        default: !0
      }), t("event_root", { processor: "object" }), t("service_message", { processor: "string" }), t("theme", {
        processor: (n) => n === !1 || J(n) || Se(n),
        default: "silver"
      }), t("theme_url", { processor: "string" }), t("formats", { processor: "object" }), t("format_empty_lines", {
        processor: "boolean",
        default: !1
      }), t("format_noneditable_selector", {
        processor: "string",
        default: ""
      }), t("preview_styles", {
        processor: (n) => {
          const s = n === !1 || J(n);
          return s ? {
            value: n === !1 ? "" : n,
            valid: s
          } : {
            valid: !1,
            message: "Must be false or a string"
          };
        },
        default: "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"
      }), t("custom_ui_selector", {
        processor: "string",
        default: ""
      }), t("hidden_input", {
        processor: "boolean",
        default: !0
      }), t("submit_patch", {
        processor: "boolean",
        default: !0
      }), t("encoding", { processor: "string" }), t("add_form_submit_trigger", {
        processor: "boolean",
        default: !0
      }), t("add_unload_trigger", {
        processor: "boolean",
        default: !0
      }), t("custom_undo_redo_levels", {
        processor: "number",
        default: 0
      }), t("disable_nodechange", {
        processor: "boolean",
        default: !1
      }), t("readonly", {
        processor: "boolean",
        default: !1
      }), t("editable_root", {
        processor: "boolean",
        default: !0
      }), t("plugins", {
        processor: "string[]",
        default: []
      }), t("external_plugins", { processor: "object" }), t("forced_plugins", { processor: "string[]" }), t("model", {
        processor: "string",
        default: e.hasPlugin("rtc") ? "plugin" : "dom"
      }), t("model_url", { processor: "string" }), t("block_unsupported_drop", {
        processor: "boolean",
        default: !0
      }), t("visual", {
        processor: "boolean",
        default: !0
      }), t("visual_table_class", {
        processor: "string",
        default: "mce-item-table"
      }), t("visual_anchor_class", {
        processor: "string",
        default: "mce-item-anchor"
      }), t("iframe_aria_text", {
        processor: "string",
        default: "Rich Text Area. Press ALT-0 for help."
      }), t("setup", { processor: "function" }), t("init_instance_callback", { processor: "function" }), t("url_converter", {
        processor: "function",
        default: e.convertURL
      }), t("url_converter_scope", {
        processor: "object",
        default: e
      }), t("urlconverter_callback", { processor: "function" }), t("allow_conditional_comments", {
        processor: "boolean",
        default: !1
      }), t("allow_html_data_urls", {
        processor: "boolean",
        default: !1
      }), t("allow_svg_data_urls", { processor: "boolean" }), t("allow_html_in_named_anchor", {
        processor: "boolean",
        default: !1
      }), t("allow_script_urls", {
        processor: "boolean",
        default: !1
      }), t("allow_unsafe_link_target", {
        processor: "boolean",
        default: !1
      }), t("convert_fonts_to_spans", {
        processor: "boolean",
        default: !0,
        deprecated: !0
      }), t("fix_list_elements", {
        processor: "boolean",
        default: !1
      }), t("preserve_cdata", {
        processor: "boolean",
        default: !1
      }), t("remove_trailing_brs", {
        processor: "boolean",
        default: !0
      }), t("pad_empty_with_br", {
        processor: "boolean",
        default: !1
      }), t("inline_styles", {
        processor: "boolean",
        default: !0,
        deprecated: !0
      }), t("element_format", {
        processor: "string",
        default: "html"
      }), t("entities", { processor: "string" }), t("schema", {
        processor: "string",
        default: "html5"
      }), t("convert_urls", {
        processor: "boolean",
        default: !0
      }), t("relative_urls", {
        processor: "boolean",
        default: !0
      }), t("remove_script_host", {
        processor: "boolean",
        default: !0
      }), t("custom_elements", { processor: "string" }), t("extended_valid_elements", { processor: "string" }), t("invalid_elements", { processor: "string" }), t("invalid_styles", { processor: Tu }), t("valid_children", { processor: "string" }), t("valid_classes", { processor: Tu }), t("valid_elements", { processor: "string" }), t("valid_styles", { processor: Tu }), t("verify_html", {
        processor: "boolean",
        default: !0
      }), t("auto_focus", { processor: (n) => J(n) || n === !0 }), t("browser_spellcheck", {
        processor: "boolean",
        default: !1
      }), t("protect", { processor: "array" }), t("images_file_types", {
        processor: "string",
        default: "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp"
      }), t("deprecation_warnings", {
        processor: "boolean",
        default: !0
      }), t("a11y_advanced_options", {
        processor: "boolean",
        default: !1
      }), t("api_key", { processor: "string" }), t("paste_block_drop", {
        processor: "boolean",
        default: !1
      }), t("paste_data_images", {
        processor: "boolean",
        default: !0
      }), t("paste_preprocess", { processor: "function" }), t("paste_postprocess", { processor: "function" }), t("paste_webkit_styles", {
        processor: "string",
        default: "none"
      }), t("paste_remove_styles_if_webkit", {
        processor: "boolean",
        default: !0
      }), t("paste_merge_formats", {
        processor: "boolean",
        default: !0
      }), t("smart_paste", {
        processor: "boolean",
        default: !0
      }), t("paste_as_text", {
        processor: "boolean",
        default: !1
      }), t("paste_tab_spaces", {
        processor: "number",
        default: 4
      }), t("text_patterns", {
        processor: (n) => Eo(n, vt) || n === !1 ? {
          value: kh(n === !1 ? [] : n),
          valid: !0
        } : {
          valid: !1,
          message: "Must be an array of objects or false."
        },
        default: [
          {
            start: "*",
            end: "*",
            format: "italic"
          },
          {
            start: "**",
            end: "**",
            format: "bold"
          },
          {
            start: "#",
            format: "h1"
          },
          {
            start: "##",
            format: "h2"
          },
          {
            start: "###",
            format: "h3"
          },
          {
            start: "####",
            format: "h4"
          },
          {
            start: "#####",
            format: "h5"
          },
          {
            start: "######",
            format: "h6"
          },
          {
            start: "1. ",
            cmd: "InsertOrderedList"
          },
          {
            start: "* ",
            cmd: "InsertUnorderedList"
          },
          {
            start: "- ",
            cmd: "InsertUnorderedList"
          }
        ]
      }), t("text_patterns_lookup", {
        processor: (n) => Se(n) ? {
          value: qT(n),
          valid: !0
        } : {
          valid: !1,
          message: "Must be a single function"
        },
        default: (n) => []
      }), t("noneditable_class", {
        processor: "string",
        default: "mceNonEditable"
      }), t("editable_class", {
        processor: "string",
        default: "mceEditable"
      }), t("noneditable_regexp", {
        processor: (n) => Eo(n, _h) ? {
          value: n,
          valid: !0
        } : _h(n) ? {
          value: [n],
          valid: !0
        } : {
          valid: !1,
          message: "Must be a RegExp or an array of RegExp."
        },
        default: []
      }), t("table_tab_navigation", {
        processor: "boolean",
        default: !0
      }), t("highlight_on_focus", {
        processor: "boolean",
        default: !1
      }), t("xss_sanitization", {
        processor: "boolean",
        default: !0
      }), t("details_initial_state", {
        processor: (n) => {
          const s = ke([
            "inherited",
            "collapsed",
            "expanded"
          ], n);
          return s ? {
            value: n,
            valid: s
          } : {
            valid: !1,
            message: "Must be one of: inherited, collapsed, or expanded."
          };
        },
        default: "inherited"
      }), t("details_serialized_state", {
        processor: (n) => {
          const s = ke([
            "inherited",
            "collapsed",
            "expanded"
          ], n);
          return s ? {
            value: n,
            valid: s
          } : {
            valid: !1,
            message: "Must be one of: inherited, collapsed, or expanded."
          };
        },
        default: "inherited"
      }), t("init_content_sync", {
        processor: "boolean",
        default: !1
      }), t("newdocument_content", {
        processor: "string",
        default: ""
      }), t("force_hex_color", {
        processor: (n) => {
          const s = [
            "always",
            "rgb_only",
            "off"
          ], o = ke(s, n);
          return o ? {
            value: n,
            valid: o
          } : {
            valid: !1,
            message: `Must be one of: ${s.join(", ")}.`
          };
        },
        default: "off"
      }), t("sandbox_iframes", {
        processor: "boolean",
        default: !1
      }), t("convert_unsafe_embeds", {
        processor: "boolean",
        default: !1
      }), e.on("ScriptsLoaded", () => {
        t("directionality", {
          processor: "string",
          default: bn.isRtl() ? "rtl" : void 0
        }), t("placeholder", {
          processor: "string",
          default: GT.getAttrib(e.getElement(), "placeholder")
        });
      });
    }, ZT = W("iframe_attrs"), QT = W("doctype"), Nh = W("document_base_url"), JT = W("body_id"), eR = W("body_class"), Ah = W("content_security_policy"), tR = W("br_in_pre"), gt = W("forced_root_block"), ta = W("forced_root_block_attrs"), nR = W("newline_behavior"), sR = W("br_newline_selector"), oR = W("no_newline_selector"), rR = W("keep_styles"), aR = W("end_container_on_empty_block"), Th = W("automatic_uploads"), Rh = W("images_reuse_filename"), iR = W("images_replace_blob_uris"), Ph = W("icons"), lR = W("icons_url"), cR = W("images_upload_url"), uR = W("images_upload_base_path"), fR = W("images_upload_credentials"), dR = W("images_upload_handler"), mR = W("content_css_cors"), Ru = W("referrer_policy"), Dh = W("language"), gR = W("language_url"), Oh = W("indent_use_margin"), pR = W("indentation"), hR = W("content_css"), bR = W("content_style"), Bh = W("font_css"), CR = W("directionality"), vR = W("inline_boundaries_selector"), Ih = W("object_resizing"), yR = W("resize_img_proportional"), ER = W("placeholder"), Lh = W("event_root"), SR = W("service_message"), Mo = W("theme"), wR = W("theme_url"), Pu = W("model"), kR = W("model_url"), na = W("inline_boundaries"), _R = W("formats"), xR = W("preview_styles"), NR = W("format_empty_lines"), AR = W("format_noneditable_selector"), TR = W("custom_ui_selector"), Du = W("inline"), RR = W("hidden_input"), PR = W("submit_patch"), DR = W("add_form_submit_trigger"), OR = W("add_unload_trigger"), BR = W("custom_undo_redo_levels"), IR = W("disable_nodechange"), $h = W("readonly"), LR = W("editable_root"), Fh = W("content_css_cors"), Mi = W("plugins"), $R = W("external_plugins"), FR = W("block_unsupported_drop"), MR = W("visual"), UR = W("visual_table_class"), Mh = W("visual_anchor_class"), zR = W("iframe_aria_text"), HR = W("setup"), WR = W("init_instance_callback"), VR = W("urlconverter_callback"), jR = W("auto_focus"), qR = W("browser_spellcheck"), KR = W("protect"), GR = W("paste_block_drop"), Ui = W("paste_data_images"), YR = W("paste_preprocess"), XR = W("paste_postprocess"), ZR = W("newdocument_content"), QR = W("paste_webkit_styles"), JR = W("paste_remove_styles_if_webkit"), eP = W("paste_merge_formats"), tP = W("smart_paste"), nP = W("paste_as_text"), sP = W("paste_tab_spaces"), oP = W("allow_html_data_urls"), rP = W("text_patterns"), aP = W("text_patterns_lookup"), Uh = W("noneditable_class"), iP = W("editable_class"), lP = W("noneditable_regexp"), cP = W("preserve_cdata"), uP = W("highlight_on_focus"), Ou = W("xss_sanitization"), fP = W("init_content_sync"), dP = (e) => e.options.isSet("text_patterns_lookup"), mP = (e) => L.explode(e.options.get("font_size_style_values")), gP = (e) => L.explode(e.options.get("font_size_classes")), pP = (e) => e.options.get("encoding") === "xml", zh = (e) => L.explode(e.options.get("images_file_types")), hP = W("table_tab_navigation"), bP = W("details_initial_state"), CP = W("details_serialized_state"), vP = W("force_hex_color"), Bu = W("sandbox_iframes"), yP = q, Hh = B, Wh = (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    }, Vh = (e) => {
      const t = zt(e);
      return {
        count: e.length - t.length,
        text: t
      };
    }, jh = (e) => {
      let t;
      for (; (t = e.data.lastIndexOf(Ze)) !== -1; )
        e.deleteData(t, 1);
    }, qh = (e, t) => (Js(e), t), EP = (e, t) => {
      const n = Vh(e.data.substr(0, t.offset())), s = Vh(e.data.substr(t.offset()));
      return (n.text + s.text).length > 0 ? (jh(e), N(e, t.offset() - n.count)) : t;
    }, SP = (e, t) => {
      const n = t.container(), s = v_(Ft(n.childNodes), e).map((o) => o < t.offset() ? N(n, t.offset() - 1) : t).getOr(t);
      return Js(e), s;
    }, wP = (e, t) => Hh(e) && t.container() === e ? EP(e, t) : qh(e, t), kP = (e, t) => t.container() === e.parentNode ? SP(e, t) : qh(e, t), _P = (e, t) => N.isTextPosition(t) ? wP(e, t) : kP(e, t), Js = (e) => {
      yP(e) && qt(e) && (cp(e) ? e.removeAttribute("data-mce-caret") : Wh(e)), Hh(e) && (jh(e), e.data.length === 0 && Wh(e));
    }, xP = De, NP = An, AP = Ei, TP = "*[contentEditable=false],video,audio,embed,object", Kh = (e, t, n) => {
      const s = Zp(t.getBoundingClientRect(), n);
      let o, r;
      if (e.tagName === "BODY") {
        const i = e.ownerDocument.documentElement;
        o = e.scrollLeft || i.scrollLeft, r = e.scrollTop || i.scrollTop;
      } else {
        const i = e.getBoundingClientRect();
        o = e.scrollLeft - i.left, r = e.scrollTop - i.top;
      }
      s.left += o, s.right += o, s.top += r, s.bottom += r, s.width = 1;
      let a = t.offsetWidth - t.clientWidth;
      return a > 0 && (n && (a *= -1), s.left += a, s.right += a), s;
    }, RP = (e) => {
      var t, n;
      const s = mt(C.fromDom(e), TP);
      for (let o = 0; o < s.length; o++) {
        const r = s[o].dom;
        let a = r.previousSibling;
        if (xi(a)) {
          const i = a.data;
          i.length === 1 ? (t = a.parentNode) === null || t === void 0 || t.removeChild(a) : a.deleteData(i.length - 1, 1);
        }
        a = r.nextSibling, _i(a) && (a.data.length === 1 ? (n = a.parentNode) === null || n === void 0 || n.removeChild(a) : a.deleteData(0, 1));
      }
    }, PP = (e, t, n, s) => {
      const o = fs();
      let r, a;
      const i = gt(e), l = e.dom, c = (g, b) => {
        let v;
        if (u(), AP(b))
          return null;
        if (n(b)) {
          const y = PN(i, b, g), E = Kh(t, b, g);
          l.setStyle(y, "top", E.top), a = y;
          const S = l.create("div", {
            class: "mce-visual-caret",
            "data-mce-bogus": "all"
          });
          l.setStyles(S, { ...E }), l.add(t, S), o.set({
            caret: S,
            element: b,
            before: g
          }), g && l.addClass(S, "mce-visual-caret-before"), f(), v = b.ownerDocument.createRange(), v.setStart(y, 0), v.setEnd(y, 0);
        } else
          return a = RN(b, g), v = b.ownerDocument.createRange(), sa(a.nextSibling) ? (v.setStart(a, 0), v.setEnd(a, 0)) : (v.setStart(a, 1), v.setEnd(a, 1)), v;
        return v;
      }, u = () => {
        RP(t), a && (Js(a), a = null), o.on((g) => {
          l.remove(g.caret), o.clear();
        }), r && (clearInterval(r), r = void 0);
      }, f = () => {
        r = setInterval(() => {
          o.on((g) => {
            s() ? l.toggleClass(g.caret, "mce-visual-caret-hidden") : l.addClass(g.caret, "mce-visual-caret-hidden");
          });
        }, 500);
      };
      return {
        show: c,
        hide: u,
        getCss: () => ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}",
        reposition: () => {
          o.on((g) => {
            const b = Kh(t, g.element, g.before);
            l.setStyles(g.caret, { ...b });
          });
        },
        destroy: () => clearInterval(r)
      };
    }, Gh = () => be.browser.isFirefox(), sa = (e) => xP(e) || NP(e), oa = (e) => (sa(e) || Zn(e) && Gh()) && gi(C.fromDom(e)).exists(Fs), DP = rn, Iu = De, OP = An, Yh = yi("display", "block table table-cell table-caption list-item"), Xh = qt, Zh = Io, BP = q, IP = B, LP = an, Uo = (e) => e > 0, eo = (e) => e < 0, zi = (e, t) => {
      let n;
      for (; n = e(t); )
        if (!Zh(n))
          return n;
      return null;
    }, ra = (e, t, n, s, o) => {
      const r = new Xe(e, s), a = Iu(e) || Zh(e);
      let i;
      if (eo(t)) {
        if (a && (i = zi(r.prev.bind(r), !0), n(i)))
          return i;
        for (; i = zi(r.prev.bind(r), o); )
          if (n(i))
            return i;
      }
      if (Uo(t)) {
        if (a && (i = zi(r.next.bind(r), !0), n(i)))
          return i;
        for (; i = zi(r.next.bind(r), o); )
          if (n(i))
            return i;
      }
      return null;
    }, $P = (e, t) => {
      const n = (o) => DP(o.dom), s = (o) => o.dom === t;
      return Kn(C.fromDom(e), n, s).map((o) => o.dom).getOr(t);
    }, gs = (e, t) => {
      for (; e && e !== t; ) {
        if (Yh(e))
          return e;
        e = e.parentNode;
      }
      return null;
    }, Rn = (e, t, n) => gs(e.container(), n) === gs(t.container(), n), Lu = (e, t) => {
      if (!t)
        return m.none();
      const n = t.container(), s = t.offset();
      return BP(n) ? m.from(n.childNodes[s + e]) : m.none();
    }, Qh = (e, t) => {
      var n;
      const o = ((n = t.ownerDocument) !== null && n !== void 0 ? n : document).createRange();
      return e ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)), o;
    }, FP = (e, t, n) => gs(t, e) === gs(n, e), Jh = (e, t, n) => {
      const s = e ? "previousSibling" : "nextSibling";
      let o = n;
      for (; o && o !== t; ) {
        let r = o[s];
        if (r && Xh(r) && (r = r[s]), Iu(r) || OP(r)) {
          if (FP(t, r, o))
            return r;
          break;
        }
        if (LP(r))
          break;
        o = o.parentNode;
      }
      return null;
    }, aa = j(Qh, !0), ia = j(Qh, !1), $u = (e, t, n) => {
      let s;
      const o = j(Jh, !0, t), r = j(Jh, !1, t), a = n.startContainer, i = n.startOffset;
      if (Io(a)) {
        const l = IP(a) ? a.parentNode : a, c = l.getAttribute("data-mce-caret");
        if (c === "before" && (s = l.nextSibling, oa(s)))
          return aa(s);
        if (c === "after" && (s = l.previousSibling, oa(s)))
          return ia(s);
      }
      if (!n.collapsed)
        return n;
      if (B(a)) {
        if (Xh(a)) {
          if (e === 1) {
            if (s = r(a), s)
              return aa(s);
            if (s = o(a), s)
              return ia(s);
          }
          if (e === -1) {
            if (s = o(a), s)
              return ia(s);
            if (s = r(a), s)
              return aa(s);
          }
          return n;
        }
        if (xi(a) && i >= a.data.length - 1)
          return e === 1 && (s = r(a), s) ? aa(s) : n;
        if (_i(a) && i <= 1)
          return e === -1 && (s = o(a), s) ? ia(s) : n;
        if (i === a.data.length)
          return s = r(a), s ? aa(s) : n;
        if (i === 0)
          return s = o(a), s ? ia(s) : n;
      }
      return n;
    }, eb = (e, t) => Lu(e ? 0 : -1, t).filter(Iu), la = (e, t, n) => {
      const s = $u(e, t, n);
      return e === -1 ? N.fromRangeStart(s) : N.fromRangeEnd(s);
    }, Hi = (e) => m.from(e.getNode()).map(C.fromDom), MP = (e) => m.from(e.getNode(!0)).map(C.fromDom), Fu = (e, t) => {
      let n = t;
      for (; n = e(n); )
        if (n.isVisible())
          return n;
      return n;
    }, Wi = (e, t) => {
      const n = Rn(e, t);
      return !n && $e(e.getNode()) ? !0 : n;
    };
    var tt;
    (function(e) {
      e[e.Backwards = -1] = "Backwards", e[e.Forwards = 1] = "Forwards";
    })(tt || (tt = {}));
    const UP = De, Pn = B, tb = q, Mu = $e, zo = an, nb = HN, Vi = mp, zP = (e, t) => {
      const n = [];
      let s = e;
      for (; s && s !== t; )
        n.push(s), s = s.parentNode;
      return n;
    }, sb = (e, t) => e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null, ob = (e, t) => {
      if (Uo(e)) {
        if (zo(t.previousSibling) && !Pn(t.previousSibling))
          return N.before(t);
        if (Pn(t))
          return N(t, 0);
      }
      if (eo(e)) {
        if (zo(t.nextSibling) && !Pn(t.nextSibling))
          return N.after(t);
        if (Pn(t))
          return N(t, t.data.length);
      }
      return eo(e) ? Mu(t) ? N.before(t) : N.after(t) : N.before(t);
    }, HP = (e, t) => {
      const n = t.nextSibling;
      return n && zo(n) ? Pn(n) ? N(n, 0) : N.before(n) : Uu(tt.Forwards, N.after(t), e);
    }, Uu = (e, t, n) => {
      let s, o, r, a;
      if (!tb(n) || !t)
        return null;
      if (t.isEqual(N.after(n)) && n.lastChild) {
        if (a = N.after(n.lastChild), eo(e) && zo(n.lastChild) && tb(n.lastChild))
          return Mu(n.lastChild) ? N.before(n.lastChild) : a;
      } else
        a = t;
      const i = a.container();
      let l = a.offset();
      if (Pn(i)) {
        if (eo(e) && l > 0)
          return N(i, --l);
        if (Uo(e) && l < i.length)
          return N(i, ++l);
        s = i;
      } else {
        if (eo(e) && l > 0 && (o = sb(i, l - 1), zo(o)))
          return !nb(o) && (r = ra(o, e, Vi, o), r) ? Pn(r) ? N(r, r.data.length) : N.after(r) : Pn(o) ? N(o, o.data.length) : N.before(o);
        if (Uo(e) && l < i.childNodes.length && (o = sb(i, l), zo(o)))
          return Mu(o) ? HP(n, o) : !nb(o) && (r = ra(o, e, Vi, o), r) ? Pn(r) ? N(r, 0) : N.before(r) : Pn(o) ? N(o, 0) : N.after(o);
        s = o || a.getNode();
      }
      if (s && (Uo(e) && a.isAtEnd() || eo(e) && a.isAtStart()) && (s = ra(s, e, He, n, !0), Vi(s, n)))
        return ob(e, s);
      o = s && ra(s, e, Vi, n);
      const c = Ds(se(zP(i, n), UP));
      return c && (!o || !c.contains(o)) ? (Uo(e) ? a = N.after(c) : a = N.before(c), a) : o ? ob(e, o) : null;
    }, Dn = (e) => ({
      next: (t) => Uu(tt.Forwards, t, e),
      prev: (t) => Uu(tt.Backwards, t, e)
    }), WP = (e, t, n) => {
      const s = e ? N.before(n) : N.after(n);
      return Kt(e, t, s);
    }, VP = (e) => $e(e) ? N.before(e) : N.after(e), rb = (e) => N.isTextPosition(e) ? e.offset() === 0 : an(e.getNode()), ab = (e) => {
      if (N.isTextPosition(e)) {
        const t = e.container();
        return e.offset() === t.data.length;
      } else
        return an(e.getNode(!0));
    }, ib = (e, t) => !N.isTextPosition(e) && !N.isTextPosition(t) && e.getNode() === t.getNode(!0), jP = (e) => !N.isTextPosition(e) && $e(e.getNode()), qP = (e, t, n) => e ? !ib(t, n) && !jP(t) && ab(t) && rb(n) : !ib(n, t) && rb(t) && ab(n), Kt = (e, t, n) => {
      const s = Dn(t);
      return m.from(e ? s.next(n) : s.prev(n));
    }, Ho = (e, t, n) => Kt(e, t, n).bind((s) => Rn(n, s, t) && qP(e, n, s) ? Kt(e, t, s) : m.some(s)), lb = (e, t, n, s) => Ho(e, t, n).bind((o) => s(o) ? lb(e, t, o, s) : m.some(o)), Wo = (e, t) => {
      const n = e ? t.firstChild : t.lastChild;
      return B(n) ? m.some(N(n, e ? 0 : n.data.length)) : n ? an(n) ? m.some(e ? N.before(n) : VP(n)) : WP(e, t, n) : m.none();
    }, Nt = j(Kt, !0), Bt = j(Kt, !1), pt = j(Wo, !0), ln = j(Wo, !1), zu = "_mce_caret", Gt = (e) => q(e) && e.id === zu, to = (e, t) => {
      let n = t;
      for (; n && n !== e; ) {
        if (Gt(n))
          return n;
        n = n.parentNode;
      }
      return null;
    }, KP = (e) => J(e.start), GP = (e) => oe(e, "rng"), YP = (e) => oe(e, "id"), cb = (e) => oe(e, "name"), ub = (e) => L.isArray(e.start), ji = (e) => !cb(e) && Ts(e.forward) ? e.forward : !0, fb = (e, t) => (q(t) && e.isBlock(t) && !t.innerHTML && (t.innerHTML = '<br data-mce-bogus="1" />'), t), XP = (e, t) => {
      const n = m.from(dh(e.getRoot(), t.start)), s = m.from(dh(e.getRoot(), t.end));
      return dt(n, s, (o, r) => {
        const a = e.createRng();
        return a.setStart(o.container(), o.offset()), a.setEnd(r.container(), r.offset()), {
          range: a,
          forward: ji(t)
        };
      });
    }, ZP = (e, t) => {
      var n;
      const o = ((n = e.ownerDocument) !== null && n !== void 0 ? n : document).createTextNode(Ze);
      e.appendChild(o), t.setStart(o, 0), t.setEnd(o, 0);
    }, QP = (e) => !e.hasChildNodes(), JP = (e, t) => ln(e).fold(Le, (n) => (t.setStart(n.container(), n.offset()), t.setEnd(n.container(), n.offset()), !0)), db = (e, t, n) => QP(t) && to(e, t) ? (ZP(t, n), !0) : !1, mb = (e, t, n, s) => {
      const o = n[t ? "start" : "end"], r = e.getRoot();
      if (o) {
        let a = r, i = o[0];
        for (let l = o.length - 1; a && l >= 1; l--) {
          const c = a.childNodes;
          if (db(r, a, s))
            return !0;
          if (o[l] > c.length - 1)
            return db(r, a, s) ? !0 : JP(a, s);
          a = c[o[l]];
        }
        B(a) && (i = Math.min(o[0], a.data.length)), q(a) && (i = Math.min(o[0], a.childNodes.length)), t ? s.setStart(a, i) : s.setEnd(a, i);
      }
      return !0;
    }, Hu = (e) => B(e) && e.data.length > 0, gb = (e, t, n) => {
      const s = e.get(n.id + "_" + t), o = s == null ? void 0 : s.parentNode, r = n.keep;
      if (s && o) {
        let a, i;
        if (t === "start" ? r ? s.hasChildNodes() ? (a = s.firstChild, i = 1) : Hu(s.nextSibling) ? (a = s.nextSibling, i = 0) : Hu(s.previousSibling) ? (a = s.previousSibling, i = s.previousSibling.data.length) : (a = o, i = e.nodeIndex(s) + 1) : (a = o, i = e.nodeIndex(s)) : r ? s.hasChildNodes() ? (a = s.firstChild, i = 1) : Hu(s.previousSibling) ? (a = s.previousSibling, i = s.previousSibling.data.length) : (a = o, i = e.nodeIndex(s)) : (a = o, i = e.nodeIndex(s)), !r) {
          const l = s.previousSibling, c = s.nextSibling;
          L.each(L.grep(s.childNodes), (f) => {
            B(f) && (f.data = f.data.replace(/\uFEFF/g, ""));
          });
          let u;
          for (; u = e.get(n.id + "_" + t); )
            e.remove(u, !0);
          if (B(c) && B(l) && !be.browser.isOpera()) {
            const f = l.data.length;
            l.appendData(c.data), e.remove(c), a = l, i = f;
          }
        }
        return m.some(N(a, i));
      } else
        return m.none();
    }, eD = (e, t) => {
      const n = e.createRng();
      return mb(e, !0, t, n) && mb(e, !1, t, n) ? m.some({
        range: n,
        forward: ji(t)
      }) : m.none();
    }, tD = (e, t) => {
      const n = gb(e, "start", t), s = gb(e, "end", t);
      return dt(n, s.or(n), (o, r) => {
        const a = e.createRng();
        return a.setStart(fb(e, o.container()), o.offset()), a.setEnd(fb(e, r.container()), r.offset()), {
          range: a,
          forward: ji(t)
        };
      });
    }, nD = (e, t) => m.from(e.select(t.name)[t.index]).map((n) => {
      const s = e.createRng();
      return s.selectNode(n), {
        range: s,
        forward: !0
      };
    }), sD = (e, t) => {
      const n = e.dom;
      if (t) {
        if (ub(t))
          return eD(n, t);
        if (KP(t))
          return XP(n, t);
        if (YP(t))
          return tD(n, t);
        if (cb(t))
          return nD(n, t);
        if (GP(t))
          return m.some({
            range: t.rng,
            forward: ji(t)
          });
      }
      return m.none();
    }, oD = (e, t, n) => UT(e, t, n), rD = (e, t) => {
      sD(e, t).each(({ range: n, forward: s }) => {
        e.setRng(n, s);
      });
    }, Yt = (e) => q(e) && e.tagName === "SPAN" && e.getAttribute("data-mce-type") === "bookmark", qi = ((e) => (t) => e === t)(Je), Vo = (e) => e !== "" && ` \f
\r	\v`.indexOf(e) !== -1, Wu = (e) => !Vo(e) && !qi(e) && !Kc(e), Vu = (e) => {
      const t = [];
      if (e)
        for (let n = 0; n < e.rangeCount; n++)
          t.push(e.getRangeAt(n));
      return t;
    }, aD = (e) => sn(e, (t) => {
      const n = Ii(t);
      return n ? [C.fromDom(n)] : [];
    }), iD = (e) => Vu(e).length > 1, lD = (e) => se(aD(e), Mr), cD = (e) => mt(e, "td[data-mce-selected],th[data-mce-selected]"), pb = (e, t) => {
      const n = cD(t);
      return n.length > 0 ? n : lD(e);
    }, jo = (e) => pb(Vu(e.selection.getSel()), C.fromDom(e.getBody())), ca = (e, t) => Dr(e, "table", t), uD = (e) => {
      const t = e.startContainer, n = e.startOffset;
      return B(t) ? n === 0 ? m.some(C.fromDom(t)) : m.none() : m.from(t.childNodes[n]).map(C.fromDom);
    }, fD = (e) => {
      const t = e.endContainer, n = e.endOffset;
      return B(t) ? n === t.data.length ? m.some(C.fromDom(t)) : m.none() : m.from(t.childNodes[n - 1]).map(C.fromDom);
    }, hb = (e) => Bc(e).fold(V([e]), (t) => [e].concat(hb(t))), ju = (e) => Ic(e).fold(V([e]), (t) => pe(t) === "br" ? Is(t).map((n) => [e].concat(ju(n))).getOr([]) : [e].concat(ju(t))), qu = (e, t) => dt(uD(t), fD(t), (n, s) => {
      const o = Ye(hb(e), j(ve, n)), r = Ye(ju(e), j(ve, s));
      return o.isSome() && r.isSome();
    }).getOr(!1), Ku = (e, t, n, s) => {
      const o = n, r = new Xe(n, o), a = Er(e.schema.getMoveCaretBeforeOnEnterElements(), (l, c) => !ke([
        "td",
        "th",
        "table"
      ], c.toLowerCase()));
      let i = n;
      do {
        if (B(i) && L.trim(i.data).length !== 0) {
          s ? t.setStart(i, 0) : t.setEnd(i, i.data.length);
          return;
        }
        if (a[i.nodeName]) {
          s ? t.setStartBefore(i) : i.nodeName === "BR" ? t.setEndBefore(i) : t.setEndAfter(i);
          return;
        }
      } while (i = s ? r.next() : r.prev());
      o.nodeName === "BODY" && (s ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
    }, Ki = (e) => {
      const t = e.selection.getSel();
      return M(t) && t.rangeCount > 0;
    }, Gu = (e, t) => {
      const n = jo(e);
      n.length > 0 ? P(n, (s) => {
        const o = s.dom, r = e.dom.createRng();
        r.setStartBefore(o), r.setEndAfter(o), t(r, !0);
      }) : t(e.selection.getRng(), !1);
    }, bb = (e, t, n) => {
      const s = vh(e, t);
      n(s), e.moveToBookmark(s);
    }, ua = (e) => mn(e == null ? void 0 : e.nodeType), Yu = (e) => q(e) && !Yt(e) && !Gt(e) && !zs(e), dD = (e, t) => {
      if (Yu(t) && !/^(TD|TH)$/.test(t.nodeName)) {
        const n = e.getAttrib(t, "data-mce-selected"), s = parseInt(n, 10);
        return !isNaN(s) && s > 0;
      } else
        return !1;
    }, Cb = (e, t, n) => {
      const { selection: s, dom: o } = e, r = s.getNode(), a = De(r);
      bb(s, !0, () => {
        t();
      }), a && De(r) && o.isChildOf(r, e.getBody()) ? e.selection.select(r) : n(s.getStart()) && mD(o, s);
    }, mD = (e, t) => {
      var n, s;
      const o = t.getRng(), { startContainer: r, startOffset: a } = o, i = t.getNode();
      if (!dD(e, i) && q(r)) {
        const l = r.childNodes, c = e.getRoot();
        let u;
        if (a < l.length) {
          const f = l[a];
          u = new Xe(f, (n = e.getParent(f, e.isBlock)) !== null && n !== void 0 ? n : c);
        } else {
          const f = l[l.length - 1];
          u = new Xe(f, (s = e.getParent(f, e.isBlock)) !== null && s !== void 0 ? s : c), u.next(!0);
        }
        for (let f = u.current(); f; f = u.next()) {
          if (e.getContentEditable(f) === "false")
            return;
          if (B(f) && !Zu(f)) {
            o.setStart(f, 0), t.setRng(o);
            return;
          }
        }
      }
    }, vb = (e, t, n) => {
      if (e) {
        const s = t ? "nextSibling" : "previousSibling";
        for (e = e[s]; e; e = e[s])
          if (q(e) || !Zu(e))
            return e;
      }
    }, Xu = (e, t) => !!e.getTextBlockElements()[t.nodeName.toLowerCase()] || Vs(e, t), qo = (e, t, n) => e.schema.isValidChild(t, n), Zu = (e, t = !1) => {
      if (M(e) && B(e)) {
        const n = t ? e.data.replace(/ /g, " ") : e.data;
        return cs(n);
      } else
        return !1;
    }, gD = (e) => M(e) && B(e) && e.length === 0, pD = (e, t) => {
      const n = "[data-mce-cef-wrappable]", s = AR(e), o = kr(s) ? n : `${n},${s}`;
      return gn(C.fromDom(t), o);
    }, yb = (e, t) => {
      const n = e.dom;
      return Yu(t) && n.getContentEditable(t) === "false" && pD(e, t) && n.select('[contenteditable="true"]', t).length === 0;
    }, ps = (e, t) => Se(e) ? e(t) : (M(t) && (e = e.replace(/%(\w+)/g, (n, s) => t[s] || n)), e), Qu = (e, t) => (e = e || "", t = t || "", e = "" + (e.nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() === t.toLowerCase()), Ju = (e, t) => {
      if (qe(e))
        return null;
      {
        let n = String(e);
        return (t === "color" || t === "backgroundColor") && (n = Hr(n)), t === "fontWeight" && e === 700 && (n = "bold"), t === "fontFamily" && (n = n.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), n;
      }
    }, Gi = (e, t, n) => {
      const s = e.getStyle(t, n);
      return Ju(s, n);
    }, Eb = (e, t) => {
      let n;
      return e.getParent(t, (s) => q(s) ? (n = e.getStyle(s, "text-decoration"), !!n && n !== "none") : !1), n;
    }, Yi = (e, t, n) => e.getParents(t, n, e.getRoot()), ef = (e, t, n) => {
      const s = e.formatter.get(t);
      return M(s) && Fe(s, n);
    }, hD = (e, t) => ef(e, t, (s) => {
      const o = (r) => Se(r) || r.length > 1 && r.charAt(0) === "%";
      return Fe([
        "styles",
        "attributes"
      ], (r) => Re(s, r).exists((a) => {
        const i = Ge(a) ? a : kc(a);
        return Fe(i, o);
      }));
    }), bD = (e, t, n) => {
      const s = [
        "inline",
        "block",
        "selector",
        "attributes",
        "styles",
        "classes"
      ], o = (r) => Er(r, (a, i) => Fe(s, (l) => l === i));
      return ef(e, t, (r) => {
        const a = o(r);
        return ef(e, n, (i) => {
          const l = o(i);
          return k_(a, l);
        });
      });
    }, On = (e) => ko(e, "block"), CD = (e) => On(e) && e.wrapper === !0, vD = (e) => On(e) && e.wrapper !== !0, Xt = (e) => ko(e, "selector"), Qe = (e) => ko(e, "inline"), yD = (e) => Xt(e) && Qe(e) && xo(Re(e, "mixed"), !0), tf = (e) => Xt(e) && e.expand !== !1 && !Qe(e), ED = (e) => {
      const t = [];
      let n = e;
      for (; n; ) {
        if (B(n) && n.data !== Ze || n.childNodes.length > 1)
          return [];
        q(n) && t.push(n), n = n.firstChild;
      }
      return t;
    }, Sb = (e) => ED(e).length > 0, nf = (e) => Gt(e.dom) && Sb(e.dom), Ko = Yt, wb = Yi, kb = Zu, SD = Xu, wD = (e) => $e(e) && e.getAttribute("data-mce-bogus") && !e.nextSibling, _b = (e, t) => {
      let n = t;
      for (; n; ) {
        if (q(n) && e.getContentEditable(n))
          return e.getContentEditable(n) === "false" ? n : t;
        n = n.parentNode;
      }
      return t;
    }, xb = (e, t, n, s) => {
      const o = t.data;
      if (e) {
        for (let r = n; r > 0; r--)
          if (s(o.charAt(r - 1)))
            return r;
      } else
        for (let r = n; r < o.length; r++)
          if (s(o.charAt(r)))
            return r;
      return -1;
    }, kD = (e, t, n) => xb(e, t, n, (s) => qi(s) || Vo(s)), _D = (e, t, n) => xb(e, t, n, Wu), Nb = (e, t, n, s, o, r) => {
      let a;
      const i = e.getParent(n, e.isBlock) || t, l = (u, f, d) => {
        const p = Xs(e), h = o ? p.backwards : p.forwards;
        return m.from(h(u, f, (g, b) => Ko(g.parentNode) ? -1 : (a = g, d(o, g, b)), i));
      };
      return l(n, s, kD).bind((u) => r ? l(u.container, u.offset + (o ? -1 : 0), _D) : m.some(u)).orThunk(() => a ? m.some({
        container: a,
        offset: o ? 0 : a.length
      }) : m.none());
    }, Ab = (e, t, n, s, o) => {
      const r = s[o];
      B(s) && kr(s.data) && r && (s = r);
      const a = wb(e, s);
      for (let i = 0; i < a.length; i++)
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          if (!(M(c.collapsed) && c.collapsed !== n.collapsed) && Xt(c) && e.is(a[i], c.selector))
            return a[i];
        }
      return s;
    }, Tb = (e, t, n, s) => {
      var o;
      let r = n;
      const a = e.getRoot(), i = t[0];
      if (On(i) && (r = i.wrapper ? null : e.getParent(n, i.block, a)), !r) {
        const l = (o = e.getParent(n, "LI,TD,TH,SUMMARY")) !== null && o !== void 0 ? o : a;
        r = e.getParent(B(n) ? n.parentNode : n, (c) => c !== a && SD(e.schema, c), l);
      }
      if (r && On(i) && i.wrapper && (r = wb(e, r, "ul,ol").reverse()[0] || r), !r)
        for (r = n; r && r[s] && !e.isBlock(r[s]) && (r = r[s], !Qu(r, "br")); )
          ;
      return r || n;
    }, Rb = (e, t, n, s) => {
      const o = n.parentNode;
      return M(n[s]) ? !1 : o === t || qe(o) || e.isBlock(o) ? !0 : Rb(e, t, o, s);
    }, Xi = (e, t, n, s, o) => {
      let r = n;
      const a = o ? "previousSibling" : "nextSibling", i = e.getRoot();
      if (B(n) && !kb(n) && (o ? s > 0 : s < n.data.length))
        return n;
      for (; r; ) {
        if (!t[0].block_expand && e.isBlock(r))
          return r;
        for (let l = r[a]; l; l = l[a]) {
          const c = B(l) && !Rb(e, i, l, a);
          if (!Ko(l) && !wD(l) && !kb(l, c))
            return r;
        }
        if (r === i || r.parentNode === i) {
          n = r;
          break;
        }
        r = r.parentNode;
      }
      return n;
    }, Pb = (e) => Ko(e.parentNode) || Ko(e), no = (e, t, n, s = !1) => {
      let { startContainer: o, startOffset: r, endContainer: a, endOffset: i } = t;
      const l = n[0];
      return q(o) && o.hasChildNodes() && (o = ds(o, r), B(o) && (r = 0)), q(a) && a.hasChildNodes() && (a = ds(a, t.collapsed ? i : i - 1), B(a) && (i = a.data.length)), o = _b(e, o), a = _b(e, a), Pb(o) && (o = Ko(o) ? o : o.parentNode, t.collapsed ? o = o.previousSibling || o : o = o.nextSibling || o, B(o) && (r = t.collapsed ? o.length : 0)), Pb(a) && (a = Ko(a) ? a : a.parentNode, t.collapsed ? a = a.nextSibling || a : a = a.previousSibling || a, B(a) && (i = t.collapsed ? 0 : a.length)), t.collapsed && (Nb(e, e.getRoot(), o, r, !0, s).each(({ container: f, offset: d }) => {
        o = f, r = d;
      }), Nb(e, e.getRoot(), a, i, !1, s).each(({ container: f, offset: d }) => {
        a = f, i = d;
      })), (Qe(l) || l.block_expand) && ((!Qe(l) || !B(o) || r === 0) && (o = Xi(e, n, o, r, !0)), (!Qe(l) || !B(a) || i === a.data.length) && (a = Xi(e, n, a, i, !1))), tf(l) && (o = Ab(e, n, t, o, "previousSibling"), a = Ab(e, n, t, a, "nextSibling")), (On(l) || Xt(l)) && (o = Tb(e, n, o, "previousSibling"), a = Tb(e, n, a, "nextSibling"), On(l) && (e.isBlock(o) || (o = Xi(e, n, o, r, !0)), e.isBlock(a) || (a = Xi(e, n, a, i, !1)))), q(o) && o.parentNode && (r = e.nodeIndex(o), o = o.parentNode), q(a) && a.parentNode && (i = e.nodeIndex(a) + 1, a = a.parentNode), {
        startContainer: o,
        startOffset: r,
        endContainer: a,
        endOffset: i
      };
    }, fa = (e, t, n) => {
      var s;
      const o = t.startOffset, r = ds(t.startContainer, o), a = t.endOffset, i = ds(t.endContainer, a - 1), l = (b) => {
        const v = b[0];
        B(v) && v === r && o >= v.data.length && b.splice(0, 1);
        const y = b[b.length - 1];
        return a === 0 && b.length > 0 && y === i && B(y) && b.splice(b.length - 1, 1), b;
      }, c = (b, v, y) => {
        const E = [];
        for (; b && b !== y; b = b[v])
          E.push(b);
        return E;
      }, u = (b, v) => e.getParent(b, (y) => y.parentNode === v, v), f = (b, v, y) => {
        const E = y ? "nextSibling" : "previousSibling";
        for (let S = b, T = S.parentNode; S && S !== v; S = T) {
          T = S.parentNode;
          const O = c(S === b ? S : S[E], E);
          O.length && (y || O.reverse(), n(l(O)));
        }
      };
      if (r === i)
        return n(l([r]));
      const d = (s = e.findCommonAncestor(r, i)) !== null && s !== void 0 ? s : e.getRoot();
      if (e.isChildOf(r, i))
        return f(r, d, !0);
      if (e.isChildOf(i, r))
        return f(i, d);
      const p = u(r, d) || r, h = u(i, d) || i;
      f(r, p, !0);
      const g = c(p === r ? p : p.nextSibling, "nextSibling", h === i ? h.nextSibling : h);
      g.length && n(l(g)), f(i, h);
    }, xD = [
      'pre[class*=language-][contenteditable="false"]',
      "figure.image",
      "div[data-ephox-embed-iri]",
      "div.tiny-pageembed",
      "div.mce-toc",
      "div[data-mce-toc]"
    ], ND = (e) => jt(e) && Si(e) === Ze, AD = (e, t, n, s) => on(t).fold(() => "skipping", (o) => s === "br" || ND(t) ? "valid" : rT(t) ? "existing" : Gt(t.dom) ? "caret" : Fe(xD, (r) => gn(t, r)) ? "valid-block" : !qo(e, n, s) || !qo(e, pe(o), n) ? "invalid-child" : "valid"), TD = (e, t) => {
      const n = no(e.dom, t, [{ inline: "span" }]);
      t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t);
    }, Db = (e, t, n, s, o, r) => {
      const { uid: a = t, ...i } = n;
      Ao(e, qr()), ot(e, `${$o()}`, a), ot(e, `${Gs()}`, s);
      const { attributes: l = {}, classes: c = [] } = o(a, i);
      if (Wn(e, l), cT(e, c), r) {
        c.length > 0 && ot(e, `${Gr()}`, c.join(","));
        const u = Dt(l);
        u.length > 0 && ot(e, `${Yr()}`, u.join(","));
      }
    }, RD = (e) => {
      Ar(e, qr()), rt(e, `${$o()}`), rt(e, `${Gs()}`), rt(e, `${Kr()}`);
      const t = Vn(e, `${Yr()}`).map((s) => s.split(",")).getOr([]), n = Vn(e, `${Gr()}`).map((s) => s.split(",")).getOr([]);
      P(t, (s) => rt(e, s)), uT(e, n), rt(e, `${Gr()}`), rt(e, `${Yr()}`);
    }, Ob = (e, t, n, s, o) => {
      const r = C.fromTag("span", e);
      return Db(r, t, n, s, o, !1), r;
    }, PD = (e, t, n, s, o, r) => {
      const a = [], i = Ob(e.getDoc(), n, r, s, o), l = fs(), c = () => {
        l.clear();
      }, u = () => l.get().getOrThunk(() => {
        const h = Ys(i);
        return a.push(h), l.set(h), h;
      }), f = (h) => {
        P(h, d);
      }, d = (h) => {
        switch (AD(e, h, "span", pe(h))) {
          case "invalid-child": {
            c();
            const b = at(h);
            f(b), c();
            break;
          }
          case "valid-block": {
            c(), Db(h, n, r, s, o, !0);
            break;
          }
          case "valid": {
            const b = u();
            Yg(h, b);
            break;
          }
        }
      }, p = (h) => {
        const g = he(h, C.fromDom);
        f(g);
      };
      return fa(e.dom, t, (h) => {
        c(), p(h);
      }), a;
    }, DD = (e, t, n, s) => {
      e.undoManager.transact(() => {
        const o = e.selection, r = o.getRng(), a = jo(e).length > 0, i = Xr("mce-annotation");
        if (r.collapsed && !a && TD(e, r), o.getRng().collapsed && !a) {
          const l = Ob(e.getDoc(), i, s, t, n.decorate);
          bi(l, Je), o.getRng().insertNode(l.dom), o.select(l.dom);
        } else
          bb(o, !1, () => {
            Gu(e, (l) => {
              PD(e, l, i, t, n.decorate, s);
            });
          });
      });
    }, Bb = (e) => {
      const t = lT();
      iT(e, t);
      const n = aT(e, t), s = mi("span"), o = (r) => {
        P(r, (a) => {
          s(a) ? Yn(a) : RD(a);
        });
      };
      return {
        register: (r, a) => {
          t.register(r, a);
        },
        annotate: (r, a) => {
          t.lookup(r).each((i) => {
            DD(e, r, i, a);
          });
        },
        annotationChanged: (r, a) => {
          n.addListener(r, a);
        },
        remove: (r) => {
          Wp(e, m.some(r)).each(({ elements: a }) => {
            const i = e.selection.getBookmark();
            o(a), e.selection.moveToBookmark(i);
          });
        },
        removeAll: (r) => {
          const a = e.selection.getBookmark();
          Ae(qp(e, r), (i, l) => {
            o(i);
          }), e.selection.moveToBookmark(a);
        },
        getAll: (r) => {
          const a = qp(e, r);
          return ai(a, (i) => he(i, (l) => l.dom));
        }
      };
    }, da = (e) => ({
      getBookmark: j(oD, e),
      moveToBookmark: j(rD, e)
    });
    da.isBookmarkNode = Yt;
    const Ib = (e, t, n) => n.collapsed ? !1 : Fe(n.getClientRects(), (s) => gT(s, e, t)), OD = (e, t) => e.dispatch("PreProcess", t), BD = (e, t) => e.dispatch("PostProcess", t), ID = (e) => {
      e.dispatch("remove");
    }, LD = (e) => {
      e.dispatch("detach");
    }, $D = (e, t) => {
      e.dispatch("SwitchMode", { mode: t });
    }, FD = (e, t, n, s, o) => {
      e.dispatch("ObjectResizeStart", {
        target: t,
        width: n,
        height: s,
        origin: o
      });
    }, MD = (e, t, n, s, o) => {
      e.dispatch("ObjectResized", {
        target: t,
        width: n,
        height: s,
        origin: o
      });
    }, UD = (e) => {
      e.dispatch("PreInit");
    }, zD = (e) => {
      e.dispatch("PostRender");
    }, HD = (e) => {
      e.dispatch("Init");
    }, WD = (e, t) => {
      e.dispatch("PlaceholderToggle", { state: t });
    }, Lb = (e, t, n) => {
      e.dispatch(t, n);
    }, $b = (e, t, n, s) => {
      e.dispatch("FormatApply", {
        format: t,
        node: n,
        vars: s
      });
    }, Fb = (e, t, n, s) => {
      e.dispatch("FormatRemove", {
        format: t,
        node: n,
        vars: s
      });
    }, VD = (e, t) => e.dispatch("BeforeSetContent", t), Mb = (e, t) => e.dispatch("SetContent", t), jD = (e, t) => e.dispatch("BeforeGetContent", t), Ub = (e, t) => e.dispatch("GetContent", t), qD = (e, t) => {
      e.dispatch("AutocompleterStart", t);
    }, KD = (e, t) => {
      e.dispatch("AutocompleterUpdate", t);
    }, GD = (e) => {
      e.dispatch("AutocompleterEnd");
    }, YD = (e, t, n) => e.dispatch("PastePreProcess", {
      content: t,
      internal: n
    }), XD = (e, t, n) => e.dispatch("PastePostProcess", {
      node: t,
      internal: n
    }), zb = (e, t) => e.dispatch("PastePlainTextToggle", { state: t }), ZD = (e, t) => e.dispatch("EditableRootStateChange", { state: t }), H = {
      BACKSPACE: 8,
      DELETE: 46,
      DOWN: 40,
      ENTER: 13,
      ESC: 27,
      LEFT: 37,
      RIGHT: 39,
      SPACEBAR: 32,
      TAB: 9,
      UP: 38,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      modifierPressed: (e) => e.shiftKey || e.ctrlKey || e.altKey || H.metaKeyPressed(e),
      metaKeyPressed: (e) => be.os.isMacOS() || be.os.isiOS() ? e.metaKey : e.ctrlKey && !e.altKey
    }, so = "data-mce-selected", QD = "table,img,figure.image,hr,video,span.mce-preview-object,details", Hb = Math.abs, Zi = Math.round, sf = {
      nw: [
        0,
        0,
        -1,
        -1
      ],
      ne: [
        1,
        0,
        1,
        -1
      ],
      se: [
        1,
        1,
        1,
        1
      ],
      sw: [
        0,
        1,
        -1,
        1
      ]
    }, JD = (e) => e.type === "longpress" || e.type.indexOf("touch") === 0, Wb = (e, t) => {
      const n = t.dom, s = t.getDoc(), o = document, r = t.getBody();
      let a, i, l, c, u, f, d, p, h, g, b, v, y, E, S, T, O;
      const U = (I) => M(I) && (ap(I) || n.is(I, "figure.image")), A = (I) => An(I) || n.hasClass(I, "mce-preview-object"), _ = (I, ee) => {
        if (JD(I)) {
          const ue = I.touches[0];
          return U(I.target) && !Ib(ue.clientX, ue.clientY, ee);
        } else
          return U(I.target) && !Ib(I.clientX, I.clientY, ee);
      }, R = (I) => {
        const ee = I.target;
        _(I, t.selection.getRng()) && !I.isDefaultPrevented() && t.selection.select(ee);
      }, z = (I) => n.hasClass(I, "mce-preview-object") && M(I.firstElementChild) ? [
        I,
        I.firstElementChild
      ] : n.is(I, "figure.image") ? [I.querySelector("img")] : [I], Z = (I) => {
        const ee = Ih(t);
        return !ee || I.getAttribute("data-mce-resize") === "false" || I === t.getBody() ? !1 : n.hasClass(I, "mce-preview-object") && M(I.firstElementChild) ? gn(C.fromDom(I.firstElementChild), ee) : gn(C.fromDom(I), ee);
      }, re = (I) => A(I) ? n.create("img", { src: be.transparentSrc }) : I.cloneNode(!0), ie = (I, ee, ue) => {
        if (M(ue)) {
          const ye = z(I);
          P(ye, (xe) => {
            xe.style[ee] || !t.schema.isValid(xe.nodeName.toLowerCase(), ee) ? n.setStyle(xe, ee, ue) : n.setAttrib(xe, ee, "" + ue);
          });
        }
      }, Ce = (I, ee, ue) => {
        ie(I, "width", ee), ie(I, "height", ue);
      }, we = (I) => {
        let ee, ue, ye, xe, ht;
        ee = I.screenX - f, ue = I.screenY - d, E = ee * c[2] + g, S = ue * c[3] + b, E = E < 5 ? 5 : E, S = S < 5 ? 5 : S, (U(a) || A(a)) && yR(t) !== !1 ? ye = !H.modifierPressed(I) : ye = H.modifierPressed(I), ye && (Hb(ee) > Hb(ue) ? (S = Zi(E * v), E = Zi(S / v)) : (E = Zi(S / v), S = Zi(E * v))), Ce(i, E, S), xe = c.startPos.x + ee, ht = c.startPos.y + ue, xe = xe > 0 ? xe : 0, ht = ht > 0 ? ht : 0, n.setStyles(l, {
          left: xe,
          top: ht,
          display: "block"
        }), l.innerHTML = E + " &times; " + S, c[2] < 0 && i.clientWidth <= E && n.setStyle(i, "left", p + (g - E)), c[3] < 0 && i.clientHeight <= S && n.setStyle(i, "top", h + (b - S)), ee = r.scrollWidth - T, ue = r.scrollHeight - O, ee + ue !== 0 && n.setStyles(l, {
          left: xe - ee,
          top: ht - ue
        }), y || (FD(t, a, g, b, "corner-" + c.name), y = !0);
      }, Ie = () => {
        const I = y;
        y = !1, I && (ie(a, "width", E), ie(a, "height", S)), n.unbind(s, "mousemove", we), n.unbind(s, "mouseup", Ie), o !== s && (n.unbind(o, "mousemove", we), n.unbind(o, "mouseup", Ie)), n.remove(i), n.remove(l), n.remove(u), nt(a), I && (MD(t, a, E, S, "corner-" + c.name), n.setAttrib(a, "style", n.getAttrib(a, "style"))), t.nodeChanged();
      }, nt = (I) => {
        de();
        const ee = n.getPos(I, r), ue = ee.x, ye = ee.y, xe = I.getBoundingClientRect(), ht = xe.width || xe.right - xe.left, $t = xe.height || xe.bottom - xe.top;
        a !== I && (F(), a = I, E = S = 0);
        const Fn = t.dispatch("ObjectSelected", { target: I });
        Z(I) && !Fn.isDefaultPrevented() ? Ae(sf, (bt, fn) => {
          const ne = (Ee) => {
            const Te = z(a)[0];
            f = Ee.screenX, d = Ee.screenY, g = Te.clientWidth, b = Te.clientHeight, v = b / g, c = bt, c.name = fn, c.startPos = {
              x: ht * bt[0] + ue,
              y: $t * bt[1] + ye
            }, T = r.scrollWidth, O = r.scrollHeight, u = n.add(r, "div", {
              class: "mce-resize-backdrop",
              "data-mce-bogus": "all"
            }), n.setStyles(u, {
              position: "fixed",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%"
            }), i = re(a), n.addClass(i, "mce-clonedresizable"), n.setAttrib(i, "data-mce-bogus", "all"), i.contentEditable = "false", n.setStyles(i, {
              left: ue,
              top: ye,
              margin: 0
            }), Ce(i, ht, $t), i.removeAttribute(so), r.appendChild(i), n.bind(s, "mousemove", we), n.bind(s, "mouseup", Ie), o !== s && (n.bind(o, "mousemove", we), n.bind(o, "mouseup", Ie)), l = n.add(r, "div", {
              class: "mce-resize-helper",
              "data-mce-bogus": "all"
            }, g + " &times; " + b);
          };
          let fe = n.get("mceResizeHandle" + fn);
          fe && n.remove(fe), fe = n.add(r, "div", {
            id: "mceResizeHandle" + fn,
            "data-mce-bogus": "all",
            class: "mce-resizehandle",
            unselectable: !0,
            style: "cursor:" + fn + "-resize; margin:0; padding:0"
          }), n.bind(fe, "mousedown", (Ee) => {
            Ee.stopImmediatePropagation(), Ee.preventDefault(), ne(Ee);
          }), bt.elm = fe, n.setStyles(fe, {
            left: ht * bt[0] + ue - fe.offsetWidth / 2,
            top: $t * bt[1] + ye - fe.offsetHeight / 2
          });
        }) : F(!1);
      }, Ve = Bi(nt, 0), F = (I = !0) => {
        Ve.cancel(), de(), a && I && a.removeAttribute(so), Ae(sf, (ee, ue) => {
          const ye = n.get("mceResizeHandle" + ue);
          ye && (n.unbind(ye), n.remove(ye));
        });
      }, K = (I, ee) => n.isChildOf(I, ee), ge = (I) => {
        if (y || t.removed || t.composing)
          return;
        const ee = I.type === "mousedown" ? I.target : e.getNode(), ue = $s(C.fromDom(ee), QD).map((xe) => xe.dom).filter((xe) => n.isEditable(xe.parentElement) || xe.nodeName === "IMG" && n.isEditable(xe)).getOrUndefined(), ye = M(ue) ? n.getAttrib(ue, so, "1") : "1";
        if (P(n.select(`img[${so}],hr[${so}]`), (xe) => {
          xe.removeAttribute(so);
        }), M(ue) && K(ue, r) && t.hasFocus()) {
          G();
          const xe = e.getStart(!0);
          if (K(xe, ue) && K(e.getEnd(!0), ue)) {
            n.setAttrib(ue, so, ye), Ve.throttle(ue);
            return;
          }
        }
        F();
      }, de = () => {
        Ae(sf, (I) => {
          I.elm && (n.unbind(I.elm), delete I.elm);
        });
      }, G = () => {
        try {
          t.getDoc().execCommand("enableObjectResizing", !1, "false");
        } catch {
        }
      };
      return t.on("init", () => {
        G(), t.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop", ge), t.on("keyup compositionend", (I) => {
          a && a.nodeName === "TABLE" && ge(I);
        }), t.on("hide blur", F), t.on("contextmenu longpress", R, !0);
      }), t.on("remove", de), {
        isResizable: Z,
        showResizeRect: nt,
        hideResizeRect: F,
        updateResizeRect: ge,
        destroy: () => {
          Ve.cancel(), a = i = u = null;
        }
      };
    }, eO = (e, t) => {
      t.fold((n) => {
        e.setStartBefore(n.dom);
      }, (n, s) => {
        e.setStart(n.dom, s);
      }, (n) => {
        e.setStartAfter(n.dom);
      });
    }, tO = (e, t) => {
      t.fold((n) => {
        e.setEndBefore(n.dom);
      }, (n, s) => {
        e.setEnd(n.dom, s);
      }, (n) => {
        e.setEndAfter(n.dom);
      });
    }, Vb = (e, t, n) => {
      const s = e.document.createRange();
      return eO(s, t), tO(s, n), s;
    }, of = (e, t, n, s, o) => {
      const r = e.document.createRange();
      return r.setStart(t.dom, n), r.setEnd(s.dom, o), r;
    }, ma = Tn.generate([
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
    ]), jb = (e, t, n) => t(C.fromDom(n.startContainer), n.startOffset, C.fromDom(n.endContainer), n.endOffset), nO = (e, t) => t.match({
      domRange: (n) => ({
        ltr: V(n),
        rtl: m.none
      }),
      relative: (n, s) => ({
        ltr: Os(() => Vb(e, n, s)),
        rtl: Os(() => m.some(Vb(e, s, n)))
      }),
      exact: (n, s, o, r) => ({
        ltr: Os(() => of(e, n, s, o, r)),
        rtl: Os(() => m.some(of(e, o, r, n, s)))
      })
    }), sO = (e, t) => {
      const n = t.ltr();
      return n.collapsed ? t.rtl().filter((o) => o.collapsed === !1).map((o) => ma.rtl(C.fromDom(o.endContainer), o.endOffset, C.fromDom(o.startContainer), o.startOffset)).getOrThunk(() => jb(e, ma.ltr, n)) : jb(e, ma.ltr, n);
    }, oO = (e, t) => {
      const n = nO(e, t);
      return sO(e, n);
    };
    ma.ltr, ma.rtl;
    const qb = { create: (e, t, n, s) => ({
      start: e,
      soffset: t,
      finish: n,
      foffset: s
    }) }, rO = (e, t, n) => {
      var s, o;
      return m.from((o = (s = e.dom).caretPositionFromPoint) === null || o === void 0 ? void 0 : o.call(s, t, n)).bind((r) => {
        if (r.offsetNode === null)
          return m.none();
        const a = e.dom.createRange();
        return a.setStart(r.offsetNode, r.offset), a.collapse(), m.some(a);
      });
    }, aO = (e, t, n) => {
      var s, o;
      return m.from((o = (s = e.dom).caretRangeFromPoint) === null || o === void 0 ? void 0 : o.call(s, t, n));
    }, iO = document.caretPositionFromPoint ? rO : document.caretRangeFromPoint ? aO : m.none, lO = (e, t, n) => {
      const s = C.fromDom(e.document);
      return iO(s, t, n).map((o) => qb.create(C.fromDom(o.startContainer), o.startOffset, C.fromDom(o.endContainer), o.endOffset));
    }, rf = Tn.generate([
      { before: ["element"] },
      {
        on: [
          "element",
          "offset"
        ]
      },
      { after: ["element"] }
    ]), cO = (e, t, n, s) => e.fold(t, n, s), uO = (e) => e.fold(_t, _t, _t), fO = rf.before, dO = rf.on, mO = rf.after, Jn = {
      before: fO,
      on: dO,
      after: mO,
      cata: cO,
      getStart: uO
    }, Qi = Tn.generate([
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
    ]), gO = (e) => Qi.exact(e.start, e.soffset, e.finish, e.foffset), pO = (e) => e.match({
      domRange: (t) => C.fromDom(t.startContainer),
      relative: (t, n) => Jn.getStart(t),
      exact: (t, n, s, o) => t
    }), hO = Qi.domRange, bO = Qi.relative, CO = Qi.exact, vO = (e) => {
      const t = pO(e);
      return Rr(t);
    }, yO = qb.create, Go = {
      domRange: hO,
      relative: bO,
      exact: CO,
      exactFromRange: gO,
      getWin: vO,
      range: yO
    }, Ji = (e, t) => {
      const n = pe(e);
      return n === "input" ? Jn.after(e) : ke([
        "br",
        "img"
      ], n) ? t === 0 ? Jn.before(e) : Jn.after(e) : Jn.on(e, t);
    }, EO = (e, t) => {
      const n = e.fold(Jn.before, Ji, Jn.after), s = t.fold(Jn.before, Ji, Jn.after);
      return Go.relative(n, s);
    }, Kb = (e, t, n, s) => {
      const o = Ji(e, t), r = Ji(n, s);
      return Go.relative(o, r);
    }, SO = (e) => e.match({
      domRange: (t) => {
        const n = C.fromDom(t.startContainer), s = C.fromDom(t.endContainer);
        return Kb(n, t.startOffset, s, t.endOffset);
      },
      relative: EO,
      exact: Kb
    }), af = (e, t) => {
      const s = document.createDocumentFragment();
      return P(e, (o) => {
        s.appendChild(o.dom);
      }), C.fromDom(s);
    }, wO = (e) => {
      const t = Go.getWin(e).dom, n = (o, r, a, i) => of(t, o, r, a, i), s = SO(e);
      return oO(t, s).match({
        ltr: n,
        rtl: n
      });
    }, kO = (e, t, n) => lO(e, t, n), Gb = (e, t, n) => {
      const s = Rr(C.fromDom(n));
      return kO(s.dom, e, t).map((o) => {
        const r = n.createRange();
        return r.setStart(o.start.dom, o.soffset), r.setEnd(o.finish.dom, o.foffset), r;
      }).getOrUndefined();
    }, lf = (e, t) => M(e) && M(t) && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset, _O = (e, t, n) => {
      let s = e;
      for (; s && s !== t; ) {
        if (n(s))
          return s;
        s = s.parentNode;
      }
      return null;
    }, Yb = (e, t, n) => _O(e, t, n) !== null, xO = (e, t, n) => Yb(e, t, (s) => s.nodeName === n), NO = (e, t) => qt(e) && !Yb(e, t, Gt), Xb = (e, t, n) => {
      const s = t.parentNode;
      if (s) {
        const o = new Xe(t, e.getParent(s, e.isBlock) || e.getRoot());
        let r;
        for (; r = o[n ? "prev" : "next"](); )
          if ($e(r))
            return !0;
      }
      return !1;
    }, AO = (e, t) => {
      var n;
      return ((n = e.previousSibling) === null || n === void 0 ? void 0 : n.nodeName) === t;
    }, TO = (e, t) => {
      let n = t;
      for (; n && n !== e; ) {
        if (De(n))
          return !0;
        n = n.parentNode;
      }
      return !1;
    }, cf = (e, t, n, s, o) => {
      const r = e.getRoot(), a = e.schema.getNonEmptyElements(), i = o.parentNode;
      let l, c;
      if (!i)
        return m.none();
      const u = e.getParent(i, e.isBlock) || r;
      if (s && $e(o) && t && e.isEmpty(u))
        return m.some(N(i, e.nodeIndex(o)));
      const f = new Xe(o, u);
      for (; c = f[s ? "prev" : "next"](); ) {
        if (e.getContentEditableParent(c) === "false" || NO(c, r))
          return m.none();
        if (B(c) && c.data.length > 0)
          return xO(c, r, "A") ? m.none() : m.some(N(c, s ? c.data.length : 0));
        if (e.isBlock(c) || a[c.nodeName.toLowerCase()])
          return m.none();
        l = c;
      }
      return as(l) ? m.none() : n && l ? m.some(N(l, 0)) : m.none();
    }, Zb = (e, t, n, s) => {
      const o = e.getRoot();
      let r, a = !1, i = n ? s.startContainer : s.endContainer, l = n ? s.startOffset : s.endOffset;
      const c = q(i) && l === i.childNodes.length, u = e.schema.getNonEmptyElements();
      let f = n;
      if (qt(i))
        return m.none();
      if (q(i) && l > i.childNodes.length - 1 && (f = !1), Lr(i) && (i = o, l = 0), i === o) {
        if (f && (r = i.childNodes[l > 0 ? l - 1 : 0], r && (qt(r) || u[r.nodeName] || Zn(r))))
          return m.none();
        if (i.hasChildNodes()) {
          if (l = Math.min(!f && l > 0 ? l - 1 : l, i.childNodes.length - 1), i = i.childNodes[l], l = B(i) && c ? i.data.length : 0, !t && i === o.lastChild && Zn(i) || TO(o, i) || qt(i) || qc(i))
            return m.none();
          if (i.hasChildNodes() && !Zn(i)) {
            r = i;
            const d = new Xe(i, o);
            do {
              if (De(r) || qt(r)) {
                a = !1;
                break;
              }
              if (B(r) && r.data.length > 0) {
                l = f ? 0 : r.data.length, i = r, a = !0;
                break;
              }
              if (u[r.nodeName.toLowerCase()] && !dN(r)) {
                l = e.nodeIndex(r), i = r.parentNode, f || l++, a = !0;
                break;
              }
            } while (r = f ? d.next() : d.prev());
          }
        }
      }
      return t && (B(i) && l === 0 && cf(e, c, t, !0, i).each((d) => {
        i = d.container(), l = d.offset(), a = !0;
      }), q(i) && (r = i.childNodes[l], r || (r = i.childNodes[l - 1]), r && $e(r) && !AO(r, "A") && !Xb(e, r, !1) && !Xb(e, r, !0) && cf(e, c, t, !0, r).each((d) => {
        i = d.container(), l = d.offset(), a = !0;
      }))), f && !t && B(i) && l === i.data.length && cf(e, c, t, !1, i).each((d) => {
        i = d.container(), l = d.offset(), a = !0;
      }), a && i ? m.some(N(i, l)) : m.none();
    }, el = (e, t) => {
      const n = t.collapsed, s = t.cloneRange(), o = N.fromRangeStart(t);
      return Zb(e, n, !0, s).each((r) => {
        (!n || !N.isAbove(o, r)) && s.setStart(r.container(), r.offset());
      }), n || Zb(e, n, !1, s).each((r) => {
        s.setEnd(r.container(), r.offset());
      }), n && s.collapse(!0), lf(t, s) ? m.none() : m.some(s);
    }, tl = (e, t) => e.splitText(t), nl = (e) => {
      let t = e.startContainer, n = e.startOffset, s = e.endContainer, o = e.endOffset;
      if (t === s && B(t)) {
        if (n > 0 && n < t.data.length)
          if (s = tl(t, n), t = s.previousSibling, o > n) {
            o = o - n;
            const r = tl(s, o).previousSibling;
            t = s = r, o = r.data.length, n = 0;
          } else
            o = 0;
      } else if (B(t) && n > 0 && n < t.data.length && (t = tl(t, n), n = 0), B(s) && o > 0 && o < s.data.length) {
        const r = tl(s, o).previousSibling;
        s = r, o = r.data.length;
      }
      return {
        startContainer: t,
        startOffset: n,
        endContainer: s,
        endOffset: o
      };
    }, oo = (e) => ({
      walk: (r, a) => fa(e, r, a),
      split: nl,
      expand: (r, a = { type: "word" }) => {
        if (a.type === "word") {
          const i = no(e, r, [{ inline: "span" }]), l = e.createRng();
          return l.setStart(i.startContainer, i.startOffset), l.setEnd(i.endContainer, i.endOffset), l;
        }
        return r;
      },
      normalize: (r) => el(e, r).fold(Le, (a) => (r.setStart(a.startContainer, a.startOffset), r.setEnd(a.endContainer, a.endOffset), !0))
    });
    oo.compareRanges = lf, oo.getCaretRangeFromPoint = Gb, oo.getSelectedNode = Ii, oo.getNode = ds;
    const RO = ((e, t) => {
      const n = (i, l) => {
        if (!mn(l) && !l.match(/^[0-9]+$/))
          throw new Error(e + ".set accepts only positive integer values. Value was " + l);
        const c = i.dom;
        Br(c) && (c.style[e] = l + "px");
      }, s = (i) => {
        const l = t(i);
        if (l <= 0 || l === null) {
          const c = Nn(i, e);
          return parseFloat(c) || 0;
        }
        return l;
      }, o = s, r = (i, l) => Rt(l, (c, u) => {
        const f = Nn(i, u), d = f === void 0 ? 0 : parseInt(f, 10);
        return isNaN(d) ? c : c + d;
      }, 0);
      return {
        set: n,
        get: s,
        getOuter: o,
        aggregate: r,
        max: (i, l, c) => {
          const u = r(i, c);
          return l > u ? l - u : 0;
        }
      };
    })("height", (e) => {
      const t = e.dom;
      return Ro(e) ? t.getBoundingClientRect().height : t.offsetHeight;
    }), PO = (e) => RO.get(e), Qb = () => C.fromDom(document), Jb = (e, t) => e.view(t).fold(V([]), (s) => {
      const o = e.owner(s), r = Jb(e, o);
      return [s].concat(r);
    }), DO = (e, t) => {
      const n = t.owner(e);
      return Jb(t, n);
    };
    var OO = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      view: (e) => {
        var t;
        return (e.dom === document ? m.none() : m.from((t = e.dom.defaultView) === null || t === void 0 ? void 0 : t.frameElement)).map(C.fromDom);
      },
      owner: (e) => qn(e)
    });
    const BO = (e) => {
      const t = Qb(), n = Wc(t), s = DO(e, OO), o = Hc(e), r = Cr(s, (a, i) => {
        const l = Hc(i);
        return {
          left: a.left + l.left,
          top: a.top + l.top
        };
      }, {
        left: 0,
        top: 0
      });
      return Do(r.left + o.left + n.left, r.top + o.top + n.top);
    }, uf = (e) => pe(e) === "textarea", IO = (e, t) => e.dispatch("ScrollIntoView", t).isDefaultPrevented(), LO = (e, t) => {
      e.dispatch("AfterScrollIntoView", t);
    }, $O = (e, t) => {
      const n = at(e);
      if (n.length === 0 || uf(e))
        return {
          element: e,
          offset: t
        };
      if (t < n.length && !uf(n[t]))
        return {
          element: n[t],
          offset: 0
        };
      {
        const s = n[n.length - 1];
        return uf(s) ? {
          element: e,
          offset: t
        } : pe(s) === "img" ? {
          element: s,
          offset: 1
        } : jt(s) ? {
          element: s,
          offset: Si(s).length
        } : {
          element: s,
          offset: at(s).length
        };
      }
    }, eC = (e, t) => {
      const n = oN(e), s = PO(e);
      return {
        element: e,
        bottom: n.top + s,
        height: s,
        pos: n,
        cleanup: t
      };
    }, FO = (e, t) => {
      const n = $O(e, t), s = C.fromHtml('<span data-mce-bogus="all" style="display: inline-block;">' + Ze + "</span>");
      return Ot(n.element, s), eC(s, () => Pe(s));
    }, MO = (e) => eC(C.fromDom(e), ce), tC = (e, t, n, s) => {
      zO(e, (o, r) => UO(e, t, n, s), n);
    }, nC = (e, t, n, s, o) => {
      const r = {
        elm: s.element.dom,
        alignToTop: o
      };
      if (IO(e, r))
        return;
      const a = Wc(t).top;
      n(e, t, a, s, o), LO(e, r);
    }, UO = (e, t, n, s) => {
      const o = C.fromDom(e.getBody()), r = C.fromDom(e.getDoc());
      Kx(o);
      const a = FO(C.fromDom(n.startContainer), n.startOffset);
      nC(e, r, t, a, s), a.cleanup();
    }, sC = (e, t, n, s) => {
      const o = C.fromDom(e.getDoc());
      nC(e, o, n, MO(t), s);
    }, zO = (e, t, n) => {
      const s = n.startContainer, o = n.startOffset, r = n.endContainer, a = n.endOffset;
      t(C.fromDom(s), C.fromDom(r));
      const i = e.dom.createRng();
      i.setStart(s, o), i.setEnd(r, a), e.selection.setRng(n);
    }, ff = (e, t, n, s, o) => {
      const r = t.pos;
      if (s)
        Qg(r.left, r.top, o);
      else {
        const a = r.top - n + t.height;
        Qg(-e.getBody().getBoundingClientRect().left, a, o);
      }
    }, oC = (e, t, n, s, o, r) => {
      const a = s + n, i = o.pos.top, l = o.bottom, c = l - i >= s;
      i < n ? ff(e, o, s, r !== !1, t) : i > a ? ff(e, o, s, c ? r !== !1 : r === !0, t) : l > a && !c && ff(e, o, s, r === !0, t);
    }, rC = (e, t, n, s, o) => {
      const r = Rr(t).dom.innerHeight;
      oC(e, t, n, r, s, o);
    }, aC = (e, t, n, s, o) => {
      const r = Rr(t).dom.innerHeight;
      oC(e, t, n, r, s, o);
      const a = BO(s.element), i = tp(window);
      a.top < i.y ? Jg(s.element, o !== !1) : a.top > i.bottom && Jg(s.element, o === !0);
    }, HO = (e, t, n) => tC(e, rC, t, n), WO = (e, t, n) => sC(e, t, rC, n), VO = (e, t, n) => tC(e, aC, t, n), jO = (e, t, n) => sC(e, t, aC, n), qO = (e, t, n) => {
      (e.inline ? WO : jO)(e, t, n);
    }, ga = (e, t, n) => {
      (e.inline ? HO : VO)(e, t, n);
    }, iC = (e, t = !1) => e.dom.focus({ preventScroll: t }), lC = (e) => {
      const t = rs(e).dom;
      return e.dom === t.activeElement;
    }, df = (e = Qb()) => m.from(e.dom.activeElement).map(C.fromDom), KO = (e) => df(rs(e)).filter((t) => e.dom.contains(t.dom)), cC = (e, t) => {
      const n = jt(t) ? Si(t).length : at(t).length + 1;
      return e > n ? n : e < 0 ? 0 : e;
    }, GO = (e) => Go.range(e.start, cC(e.soffset, e.start), e.finish, cC(e.foffset, e.finish)), uC = (e, t) => !vi(t.dom) && (jn(e, t) || ve(e, t)), fC = (e) => (t) => uC(e, t.start) && uC(e, t.finish), YO = (e) => e.inline || be.browser.isFirefox(), XO = (e) => Go.range(C.fromDom(e.startContainer), e.startOffset, C.fromDom(e.endContainer), e.endOffset), ZO = (e) => {
      const t = e.getSelection();
      return (!t || t.rangeCount === 0 ? m.none() : m.from(t.getRangeAt(0))).map(XO);
    }, QO = (e) => {
      const t = Rr(e);
      return ZO(t.dom).filter(fC(e));
    }, JO = (e, t) => m.from(t).filter(fC(e)).map(GO), eB = (e) => {
      const t = document.createRange();
      try {
        return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), m.some(t);
      } catch {
        return m.none();
      }
    }, mf = (e) => {
      const t = YO(e) ? QO(C.fromDom(e.getBody())) : m.none();
      e.bookmark = t.isSome() ? t : e.bookmark;
    }, gf = (e) => (e.bookmark ? e.bookmark : m.none()).bind((n) => JO(C.fromDom(e.getBody()), n)).bind(eB), tB = (e) => {
      gf(e).each((t) => e.selection.setRng(t));
    }, dC = { isEditorUIElement: (e) => {
      const t = e.className.toString();
      return t.indexOf("tox-") !== -1 || t.indexOf("mce-") !== -1;
    } }, nB = (e, t) => (mn(t) || (t = 0), setTimeout(e, t)), sB = (e, t) => (mn(t) || (t = 0), setInterval(e, t)), Zt = {
      setEditorTimeout: (e, t, n) => nB(() => {
        e.removed || t();
      }, n),
      setEditorInterval: (e, t, n) => {
        const s = sB(() => {
          e.removed ? clearInterval(s) : t();
        }, n);
        return s;
      }
    }, oB = (e) => e.type === "nodechange" && e.selectionChange, rB = (e, t) => {
      const n = () => {
        t.throttle();
      };
      Ne.DOM.bind(document, "mouseup", n), e.on("remove", () => {
        Ne.DOM.unbind(document, "mouseup", n);
      });
    }, aB = (e, t) => {
      e.on("mouseup touchend", (n) => {
        t.throttle();
      });
    }, iB = (e, t) => {
      aB(e, t), e.on("keyup NodeChange AfterSetSelectionRange", (n) => {
        oB(n) || mf(e);
      });
    }, lB = (e) => {
      const t = Bi(() => {
        mf(e);
      }, 0);
      e.on("init", () => {
        e.inline && rB(e, t), iB(e, t);
      }), e.on("remove", () => {
        t.cancel();
      });
    };
    let Yo;
    const pf = Ne.DOM, cB = (e) => q(e) && dC.isEditorUIElement(e), hf = (e) => {
      const t = e.classList;
      return t !== void 0 ? t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body") : !1;
    }, sl = (e, t) => {
      const n = TR(e);
      return pf.getParent(t, (o) => cB(o) || (n ? e.dom.is(o, n) : !1)) !== null;
    }, bf = (e) => {
      try {
        const t = rs(C.fromDom(e.getElement()));
        return df(t).fold(() => document.body, (n) => n.dom);
      } catch {
        return document.body;
      }
    }, uB = (e, t) => {
      const n = t.editor;
      lB(n);
      const s = (o, r) => {
        if (uP(o) && o.inline !== !0) {
          const a = C.fromDom(o.getContainer());
          r(a, "tox-edit-focus");
        }
      };
      n.on("focusin", () => {
        const o = e.focusedEditor;
        hf(bf(n)) && s(n, Ao), o !== n && (o && o.dispatch("blur", { focusedEditor: n }), e.setActive(n), e.focusedEditor = n, n.dispatch("focus", { blurredEditor: o }), n.focus(!0));
      }), n.on("focusout", () => {
        Zt.setEditorTimeout(n, () => {
          const o = e.focusedEditor;
          (!hf(bf(n)) || o !== n) && s(n, Ar), !sl(n, bf(n)) && o === n && (n.dispatch("blur", { focusedEditor: null }), e.focusedEditor = null);
        });
      }), Yo || (Yo = (o) => {
        const r = e.activeEditor;
        r && Hg(o).each((a) => {
          const i = a;
          i.ownerDocument === document && i !== document.body && !sl(r, i) && e.focusedEditor === r && (r.dispatch("blur", { focusedEditor: null }), e.focusedEditor = null);
        });
      }, pf.bind(document, "focusin", Yo));
    }, fB = (e, t) => {
      e.focusedEditor === t.editor && (e.focusedEditor = null), !e.activeEditor && Yo && (pf.unbind(document, "focusin", Yo), Yo = null);
    }, dB = (e) => {
      e.on("AddEditor", j(uB, e)), e.on("RemoveEditor", j(fB, e));
    }, mB = (e, t) => e.dom.getParent(t, (n) => e.dom.getContentEditable(n) === "true"), gB = (e) => e.collapsed ? m.from(ds(e.startContainer, e.startOffset)).map(C.fromDom) : m.none(), pB = (e, t) => gB(t).bind((n) => kN(n) ? m.some(n) : jn(e, n) ? m.none() : m.some(e)), mC = (e, t) => {
      pB(C.fromDom(e.getBody()), t).bind((n) => pt(n.dom)).fold(() => {
        e.selection.normalize();
      }, (n) => e.selection.setRng(n.toRange()));
    }, Cf = (e) => {
      if (e.setActive)
        try {
          e.setActive();
        } catch {
          e.focus();
        }
      else
        e.focus();
    }, hB = (e) => lC(e) || KO(e).isSome(), bB = (e) => M(e.iframeElement) && lC(C.fromDom(e.iframeElement)), CB = (e) => {
      const t = e.getBody();
      return t && hB(C.fromDom(t));
    }, vB = (e) => {
      const t = rs(C.fromDom(e.getElement()));
      return df(t).filter((n) => !hf(n.dom) && sl(e, n.dom)).isSome();
    }, ro = (e) => e.inline ? CB(e) : bB(e), gC = (e) => ro(e) || vB(e), yB = (e) => {
      const t = e.selection, n = e.getBody();
      let s = t.getRng();
      e.quirks.refreshContentEditable(), M(e.bookmark) && !ro(e) && gf(e).each((r) => {
        e.selection.setRng(r), s = r;
      });
      const o = mB(e, t.getNode());
      if (o && e.dom.isChildOf(o, n)) {
        Cf(o), mC(e, s), vf(e);
        return;
      }
      e.inline || (be.browser.isOpera() || Cf(n), e.getWin().focus()), (be.browser.isFirefox() || e.inline) && (Cf(n), mC(e, s)), vf(e);
    }, vf = (e) => e.editorManager.setActive(e), EB = (e, t) => {
      e.removed || (t ? vf(e) : yB(e));
    }, pC = (e, t) => t.collapsed ? e.isEditable(t.startContainer) : e.isEditable(t.startContainer) && e.isEditable(t.endContainer), hC = (e, t, n, s, o) => {
      const r = n ? t.startContainer : t.endContainer, a = n ? t.startOffset : t.endOffset;
      return m.from(r).map(C.fromDom).map((i) => !s || !t.collapsed ? To(i, o(i, a)).getOr(i) : i).bind((i) => Mt(i) ? m.some(i) : on(i).filter(Mt)).map((i) => i.dom).getOr(e);
    }, bC = (e, t, n = !1) => hC(e, t, !0, n, (s, o) => Math.min(Lc(s), o)), CC = (e, t, n = !1) => hC(e, t, !1, n, (s, o) => o > 0 ? o - 1 : o), vC = (e, t) => {
      const n = e;
      for (; e && B(e) && e.length === 0; )
        e = t ? e.nextSibling : e.previousSibling;
      return e || n;
    }, SB = (e, t) => {
      if (!t)
        return e;
      let n = t.startContainer, s = t.endContainer;
      const o = t.startOffset, r = t.endOffset;
      let a = t.commonAncestorContainer;
      t.collapsed || (n === s && r - o < 2 && n.hasChildNodes() && (a = n.childNodes[o]), B(n) && B(s) && (n.length === o ? n = vC(n.nextSibling, !0) : n = n.parentNode, r === 0 ? s = vC(s.previousSibling, !1) : s = s.parentNode, n && n === s && (a = n)));
      const i = B(a) ? a.parentNode : a;
      return Xn(i) ? i : e;
    }, wB = (e, t, n, s) => {
      const o = [], r = e.getRoot(), a = e.getParent(n || bC(r, t, t.collapsed), e.isBlock), i = e.getParent(s || CC(r, t, t.collapsed), e.isBlock);
      if (a && a !== r && o.push(a), a && i && a !== i) {
        let l;
        const c = new Xe(a, r);
        for (; (l = c.next()) && l !== i; )
          e.isBlock(l) && o.push(l);
      }
      return i && a !== i && i !== r && o.push(i), o;
    }, kB = (e, t, n) => m.from(t).bind((s) => m.from(s.parentNode).map((o) => {
      const r = e.nodeIndex(s), a = e.createRng();
      return a.setStart(o, r), a.setEnd(o, r + 1), n && (Ku(e, a, s, !0), Ku(e, a, s, !1)), a;
    })), yf = (e, t) => he(t, (n) => {
      const s = e.dispatch("GetSelectionRange", { range: n });
      return s.range !== n ? s.range : n;
    }), _B = (e) => pe(e) === "img" ? 1 : ip(e).fold(() => at(e).length, (t) => t.length), xB = (e) => ip(e).filter((t) => t.trim().length !== 0 || t.indexOf(Je) > -1).isSome(), NB = (e) => di(e) && Ut(e, "contenteditable") === "false", AB = [
      "img",
      "br"
    ], yC = (e) => xB(e) || ke(AB, pe(e)) || NB(e), TB = (e) => Vg(e, yC), RB = (e) => PB(e, yC), PB = (e, t) => {
      const n = (s) => {
        const o = at(s);
        for (let r = o.length - 1; r >= 0; r--) {
          const a = o[r];
          if (t(a))
            return m.some(a);
          const i = n(a);
          if (i.isSome())
            return i;
        }
        return m.none();
      };
      return n(e);
    }, EC = "[data-mce-autocompleter]", DB = (e, t) => {
      if (SC(C.fromDom(e.getBody())).isNone()) {
        const n = C.fromHtml('<span data-mce-autocompleter="1" data-mce-bogus="1"></span>', e.getDoc());
        We(n, C.fromDom(t.extractContents())), t.insertNode(n.dom), on(n).each((s) => s.dom.normalize()), RB(n).map((s) => {
          e.selection.setCursorLocation(s.dom, _B(s));
        });
      }
    }, OB = (e) => $s(e, EC), SC = (e) => Or(e, EC), BB = (e, t) => SC(t).each((n) => {
      const s = e.selection.getBookmark();
      Yn(n), e.selection.moveToBookmark(s);
    }), IB = {
      "#text": 3,
      "#comment": 8,
      "#cdata": 4,
      "#pi": 7,
      "#doctype": 10,
      "#document-fragment": 11
    }, ol = (e, t, n) => {
      const s = n ? "lastChild" : "firstChild", o = n ? "prev" : "next";
      if (e[s])
        return e[s];
      if (e !== t) {
        let r = e[o];
        if (r)
          return r;
        for (let a = e.parent; a && a !== t; a = a.parent)
          if (r = a[o], r)
            return r;
      }
    }, LB = (e) => {
      var t;
      const n = (t = e.value) !== null && t !== void 0 ? t : "";
      if (!cs(n))
        return !1;
      const s = e.parent;
      return !(s && (s.name !== "span" || s.attr("style")) && /^[ ]+$/.test(n));
    }, wC = (e) => {
      const t = e.name === "a" && !e.attr("href") && e.attr("id");
      return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t;
    };
    class Et {
      static create(t, n) {
        const s = new Et(t, IB[t] || 1);
        return n && Ae(n, (o, r) => {
          s.attr(r, o);
        }), s;
      }
      constructor(t, n) {
        this.name = t, this.type = n, n === 1 && (this.attributes = [], this.attributes.map = {});
      }
      replace(t) {
        const n = this;
        return t.parent && t.remove(), n.insert(t, n), n.remove(), n;
      }
      attr(t, n) {
        const s = this;
        if (!J(t))
          return M(t) && Ae(t, (r, a) => {
            s.attr(a, r);
          }), s;
        const o = s.attributes;
        if (o) {
          if (n !== void 0) {
            if (n === null) {
              if (t in o.map) {
                delete o.map[t];
                let r = o.length;
                for (; r--; )
                  if (o[r].name === t)
                    return o.splice(r, 1), s;
              }
              return s;
            }
            if (t in o.map) {
              let r = o.length;
              for (; r--; )
                if (o[r].name === t) {
                  o[r].value = n;
                  break;
                }
            } else
              o.push({
                name: t,
                value: n
              });
            return o.map[t] = n, s;
          }
          return o.map[t];
        }
      }
      clone() {
        const t = this, n = new Et(t.name, t.type), s = t.attributes;
        if (s) {
          const o = [];
          o.map = {};
          for (let r = 0, a = s.length; r < a; r++) {
            const i = s[r];
            i.name !== "id" && (o[o.length] = {
              name: i.name,
              value: i.value
            }, o.map[i.name] = i.value);
          }
          n.attributes = o;
        }
        return n.value = t.value, n;
      }
      wrap(t) {
        const n = this;
        return n.parent && (n.parent.insert(t, n), t.append(n)), n;
      }
      unwrap() {
        const t = this;
        for (let n = t.firstChild; n; ) {
          const s = n.next;
          t.insert(n, t, !0), n = s;
        }
        t.remove();
      }
      remove() {
        const t = this, n = t.parent, s = t.next, o = t.prev;
        return n && (n.firstChild === t ? (n.firstChild = s, s && (s.prev = null)) : o && (o.next = s), n.lastChild === t ? (n.lastChild = o, o && (o.next = null)) : s && (s.prev = o), t.parent = t.next = t.prev = null), t;
      }
      append(t) {
        const n = this;
        t.parent && t.remove();
        const s = n.lastChild;
        return s ? (s.next = t, t.prev = s, n.lastChild = t) : n.lastChild = n.firstChild = t, t.parent = n, t;
      }
      insert(t, n, s) {
        t.parent && t.remove();
        const o = n.parent || this;
        return s ? (n === o.firstChild ? o.firstChild = t : n.prev && (n.prev.next = t), t.prev = n.prev, t.next = n, n.prev = t) : (n === o.lastChild ? o.lastChild = t : n.next && (n.next.prev = t), t.next = n.next, t.prev = n, n.next = t), t.parent = o, t;
      }
      getAll(t) {
        const n = this, s = [];
        for (let o = n.firstChild; o; o = ol(o, n))
          o.name === t && s.push(o);
        return s;
      }
      children() {
        const t = this, n = [];
        for (let s = t.firstChild; s; s = s.next)
          n.push(s);
        return n;
      }
      empty() {
        const t = this;
        if (t.firstChild) {
          const n = [];
          for (let o = t.firstChild; o; o = ol(o, t))
            n.push(o);
          let s = n.length;
          for (; s--; ) {
            const o = n[s];
            o.parent = o.firstChild = o.lastChild = o.next = o.prev = null;
          }
        }
        return t.firstChild = t.lastChild = null, t;
      }
      isEmpty(t, n = {}, s) {
        var o;
        const r = this;
        let a = r.firstChild;
        if (wC(r))
          return !1;
        if (a)
          do {
            if (a.type === 1) {
              if (a.attr("data-mce-bogus"))
                continue;
              if (t[a.name] || wC(a))
                return !1;
            }
            if (a.type === 8 || a.type === 3 && !LB(a) || a.type === 3 && a.parent && n[a.parent.name] && cs((o = a.value) !== null && o !== void 0 ? o : "") || s && s(a))
              return !1;
          } while (a = ol(a, r));
        return !0;
      }
      walk(t) {
        return ol(this, null, t);
      }
    }
    const $B = L.makeMap("NOSCRIPT STYLE SCRIPT XMP IFRAME NOEMBED NOFRAMES PLAINTEXT", " "), kC = (e) => J(e.nodeValue) && e.nodeValue.includes(Ze), _C = (e) => `${e.length === 0 ? "" : `${he(e, (t) => `[${t}]`).join(",")},`}[data-mce-bogus="all"]`, FB = (e, t) => t.querySelectorAll(_C(e)), xC = (e) => document.createTreeWalker(e, NodeFilter.SHOW_COMMENT, (t) => kC(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP), NC = (e) => document.createTreeWalker(e, NodeFilter.SHOW_TEXT, (t) => {
      if (kC(t)) {
        const n = t.parentNode;
        return n && oe($B, n.nodeName) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      } else
        return NodeFilter.FILTER_SKIP;
    }), MB = (e) => xC(e).nextNode() !== null, UB = (e) => NC(e).nextNode() !== null, zB = (e, t) => t.querySelector(_C(e)) !== null, HB = (e, t) => {
      P(FB(e, t), (n) => {
        const s = C.fromDom(n);
        Ut(s, "data-mce-bogus") === "all" ? Pe(s) : P(e, (o) => {
          xr(s, o) && rt(s, o);
        });
      });
    }, AC = (e) => {
      let t = e.nextNode();
      for (; t !== null; )
        t.nodeValue = null, t = e.nextNode();
    }, WB = Sn(AC, xC), VB = Sn(AC, NC), TC = (e, t) => {
      const n = [
        {
          condition: j(zB, t),
          action: j(HB, t)
        },
        {
          condition: MB,
          action: WB
        },
        {
          condition: UB,
          action: VB
        }
      ];
      let s = e, o = !1;
      return P(n, ({ condition: r, action: a }) => {
        r(s) && (o || (s = e.cloneNode(!0), o = !0), a(s));
      }), s;
    }, RC = (e) => {
      const t = mt(e, "[data-mce-bogus]");
      P(t, (n) => {
        Ut(n, "data-mce-bogus") === "all" ? Pe(n) : Hs(n) ? (Ot(n, C.fromText($r)), Pe(n)) : Yn(n);
      });
    }, PC = (e) => {
      const t = mt(e, "input");
      P(t, (n) => {
        rt(n, "name");
      });
    }, jB = (e, t) => {
      const n = gt(e), s = new RegExp(`^(<${n}[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/${n}>[\r
]*|<br \\/>[\r
]*)$`);
      return t.replace(s, "");
    }, qB = (e, t) => {
      const n = e.getDoc(), s = rs(C.fromDom(e.getBody())), o = C.fromTag("div", n);
      ot(o, "data-mce-bogus", "all"), pi(o, {
        position: "fixed",
        left: "-9999999px",
        top: "0"
      }), bi(o, t.innerHTML), RC(o), PC(o);
      const r = Fx(s);
      We(r, o);
      const a = zt(o.dom.innerText);
      return Pe(o), a;
    }, KB = (e, t, n) => {
      let s;
      return t.format === "raw" ? s = L.trim(zt(TC(n, e.serializer.getTempAttrs()).innerHTML)) : t.format === "text" ? s = qB(e, n) : t.format === "tree" ? s = e.serializer.serialize(n, t) : s = jB(e, e.serializer.serialize(n, t)), t.format !== "text" && !wi(C.fromDom(n)) && J(s) ? L.trim(s) : s;
    }, GB = (e, t) => m.from(e.getBody()).fold(V(t.format === "tree" ? new Et("body", 11) : ""), (n) => KB(e, t, n)), DC = L.makeMap, OC = (e) => {
      const t = [];
      e = e || {};
      const n = e.indent, s = DC(e.indent_before || ""), o = DC(e.indent_after || ""), r = qs.getEncodeFunc(e.entity_encoding || "raw", e.entities), a = e.element_format !== "xhtml";
      return {
        start: (i, l, c) => {
          if (n && s[i] && t.length > 0) {
            const u = t[t.length - 1];
            u.length > 0 && u !== `
` && t.push(`
`);
          }
          if (t.push("<", i), l)
            for (let u = 0, f = l.length; u < f; u++) {
              const d = l[u];
              t.push(" ", d.name, '="', r(d.value, !0), '"');
            }
          if (!c || a ? t[t.length] = ">" : t[t.length] = " />", c && n && o[i] && t.length > 0) {
            const u = t[t.length - 1];
            u.length > 0 && u !== `
` && t.push(`
`);
          }
        },
        end: (i) => {
          let l;
          t.push("</", i, ">"), n && o[i] && t.length > 0 && (l = t[t.length - 1], l.length > 0 && l !== `
` && t.push(`
`));
        },
        text: (i, l) => {
          i.length > 0 && (t[t.length] = l ? i : r(i));
        },
        cdata: (i) => {
          t.push("<![CDATA[", i, "]]>");
        },
        comment: (i) => {
          t.push("<!--", i, "-->");
        },
        pi: (i, l) => {
          l ? t.push("<?", i, " ", r(l), "?>") : t.push("<?", i, "?>"), n && t.push(`
`);
        },
        doctype: (i) => {
          t.push("<!DOCTYPE", i, ">", n ? `
` : "");
        },
        reset: () => {
          t.length = 0;
        },
        getContent: () => t.join("").replace(/\n$/, "")
      };
    }, hs = (e = {}, t = us()) => {
      const n = OC(e);
      return e.validate = "validate" in e ? e.validate : !0, { serialize: (o) => {
        const r = e.validate, a = {
          3: (l) => {
            var c;
            n.text((c = l.value) !== null && c !== void 0 ? c : "", l.raw);
          },
          8: (l) => {
            var c;
            n.comment((c = l.value) !== null && c !== void 0 ? c : "");
          },
          7: (l) => {
            n.pi(l.name, l.value);
          },
          10: (l) => {
            var c;
            n.doctype((c = l.value) !== null && c !== void 0 ? c : "");
          },
          4: (l) => {
            var c;
            n.cdata((c = l.value) !== null && c !== void 0 ? c : "");
          },
          11: (l) => {
            let c = l;
            if (c = c.firstChild)
              do
                i(c);
              while (c = c.next);
          }
        };
        n.reset();
        const i = (l) => {
          var c;
          const u = a[l.type];
          if (u)
            u(l);
          else {
            const f = l.name, d = f in t.getVoidElements();
            let p = l.attributes;
            if (r && p && p.length > 1) {
              const h = [];
              h.map = {};
              const g = t.getElementRule(l.name);
              if (g) {
                for (let b = 0, v = g.attributesOrder.length; b < v; b++) {
                  const y = g.attributesOrder[b];
                  if (y in p.map) {
                    const E = p.map[y];
                    h.map[y] = E, h.push({
                      name: y,
                      value: E
                    });
                  }
                }
                for (let b = 0, v = p.length; b < v; b++) {
                  const y = p[b].name;
                  if (!(y in h.map)) {
                    const E = p.map[y];
                    h.map[y] = E, h.push({
                      name: y,
                      value: E
                    });
                  }
                }
                p = h;
              }
            }
            if (n.start(f, p, d), Ws(f))
              J(l.value) && n.text(l.value, !0), n.end(f);
            else if (!d) {
              let h = l.firstChild;
              if (h) {
                (f === "pre" || f === "textarea") && h.type === 3 && ((c = h.value) === null || c === void 0 ? void 0 : c[0]) === `
` && n.text(`
`, !0);
                do
                  i(h);
                while (h = h.next);
              }
              n.end(f);
            }
          }
        };
        return o.type === 1 && !e.inner ? i(o) : o.type === 3 ? a[3](o) : a[11](o), n.getContent();
      } };
    }, BC = /* @__PURE__ */ new Set();
    P([
      "margin",
      "margin-left",
      "margin-right",
      "margin-top",
      "margin-bottom",
      "padding",
      "padding-left",
      "padding-right",
      "padding-top",
      "padding-bottom",
      "border",
      "border-width",
      "border-style",
      "border-color",
      "background",
      "background-attachment",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "float",
      "position",
      "left",
      "right",
      "top",
      "bottom",
      "z-index",
      "display",
      "transform",
      "width",
      "max-width",
      "min-width",
      "height",
      "max-height",
      "min-height",
      "overflow",
      "overflow-x",
      "overflow-y",
      "text-overflow",
      "vertical-align",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function"
    ], (t) => {
      BC.add(t);
    });
    const IC = [
      "font",
      "text-decoration",
      "text-emphasis"
    ], Ef = (e, t) => Dt(e.parseStyle(e.getAttrib(t, "style"))), YB = (e) => BC.has(e), XB = (e, t) => zn(Ef(e, t), (n) => !YB(n)), ZB = (e) => se(e, (t) => Fe(IC, (n) => st(t, n))), QB = (e, t, n) => {
      const s = Ef(e, t), o = Ef(e, n), r = (a) => {
        var i, l;
        const c = (i = e.getStyle(t, a)) !== null && i !== void 0 ? i : "", u = (l = e.getStyle(n, a)) !== null && l !== void 0 ? l : "";
        return wn(c) && wn(u) && c !== u;
      };
      return Fe(s, (a) => {
        const i = (l) => Fe(l, (c) => c === a);
        if (!i(o) && i(IC)) {
          const l = ZB(o);
          return Fe(l, r);
        } else
          return r(a);
      });
    }, LC = (e, t, n) => m.from(n.container()).filter(B).exists((s) => {
      const o = e ? 0 : -1;
      return t(s.data.charAt(n.offset() + o));
    }), Sf = j(LC, !0, Vo), wf = j(LC, !1, Vo), JB = (e) => {
      const t = e.container();
      return B(t) && (t.data.length === 0 || ki(t.data) && da.isBookmarkNode(t.parentNode));
    }, bs = (e, t) => (n) => Lu(e ? 0 : -1, n).filter(t).isSome(), $C = (e) => ap(e) && Nn(C.fromDom(e), "display") === "block", FC = (e) => De(e) && !cN(e), e1 = bs(!0, $C), t1 = bs(!1, $C), pa = bs(!0, An), ha = bs(!1, An), MC = bs(!0, Zn), UC = bs(!1, Zn), Cs = bs(!0, FC), vs = bs(!1, FC), n1 = (e) => e.slice(0, -1), s1 = (e, t, n) => jn(t, e) ? n1(Fg(e, (s) => n(s) || ve(s, t))) : [], zC = (e, t) => s1(e, t, Le), es = (e, t) => [e].concat(zC(e, t)), kf = (e, t, n) => lb(e, t, n, JB), o1 = (e) => (t) => e.isBlock(pe(t)), HC = (e, t, n) => Ye(es(C.fromDom(t.container()), e), o1(n)), WC = (e, t, n, s) => kf(e, t.dom, n).forall((o) => HC(t, n, s).fold(() => !Rn(o, n, t.dom), (r) => !Rn(o, n, t.dom) && jn(r, C.fromDom(o.container())))), VC = (e, t, n, s) => HC(t, n, s).fold(() => kf(e, t.dom, n).forall((o) => !Rn(o, n, t.dom)), (o) => kf(e, o.dom, n).isNone()), _f = j(VC, !1), jC = j(VC, !0), r1 = j(WC, !1), a1 = j(WC, !0), i1 = (e) => Hi(e).exists(Hs), rl = (e, t, n, s) => {
      const o = se(es(C.fromDom(n.container()), t), (a) => s.isBlock(pe(a))), r = Pt(o).getOr(t);
      return Kt(e, r.dom, n).filter(i1);
    }, xf = (e, t, n) => Hi(t).exists(Hs) || rl(!0, e, t, n).isSome(), Nf = (e, t, n) => MP(t).exists(Hs) || rl(!1, e, t, n).isSome(), l1 = j(rl, !1), c1 = j(rl, !0), qC = (e) => N.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd(), KC = (e, t, n) => {
      const s = se(es(C.fromDom(t.container()), e), (o) => n.isBlock(pe(o)));
      return Pt(s).getOr(e);
    }, GC = (e, t, n) => qC(t) ? wf(t) : wf(t) || Bt(KC(e, t, n).dom, t).exists(wf), YC = (e, t, n) => qC(t) ? Sf(t) : Sf(t) || Nt(KC(e, t, n).dom, t).exists(Sf), u1 = (e) => ke([
      "pre",
      "pre-wrap"
    ], e), Af = (e) => Hi(e).bind((t) => Ls(t, Mt)).exists((t) => u1(Nn(t, "white-space"))), f1 = (e, t) => Bt(e.dom, t).isNone(), d1 = (e, t) => Nt(e.dom, t).isNone(), m1 = (e, t, n) => f1(e, t) || d1(e, t) || _f(e, t, n) || jC(e, t, n) || Nf(e, t, n) || xf(e, t, n), g1 = (e) => M(e) && De(e) && Yh(e), XC = (e, t) => (n) => g1(new Xe(n, e)[t]()), p1 = (e, t) => {
      const n = Nt(e.dom, t).getOr(t), s = XC(e.dom, "next");
      return t.isAtEnd() && (s(t.container()) || s(n.container()));
    }, h1 = (e, t) => {
      const n = Bt(e.dom, t).getOr(t), s = XC(e.dom, "prev");
      return t.isAtStart() && (s(t.container()) || s(n.container()));
    }, ZC = (e, t, n) => Af(t) ? !1 : m1(e, t, n) || GC(e, t, n) || YC(e, t, n), ba = (e, t, n) => Af(t) ? !1 : _f(e, t, n) || r1(e, t, n) || Nf(e, t, n) || GC(e, t, n) || h1(e, t), b1 = (e) => {
      const t = e.container(), n = e.offset();
      return B(t) && n < t.data.length ? N(t, n + 1) : e;
    }, Ca = (e, t, n) => Af(t) ? !1 : jC(e, t, n) || a1(e, t, n) || xf(e, t, n) || YC(e, t, n) || p1(e, t), Tf = (e, t, n) => ba(e, t, n) || Ca(e, b1(t), n), QC = (e, t) => qi(e.charAt(t)), JC = (e, t) => Vo(e.charAt(t)), C1 = (e) => {
      const t = e.container();
      return B(t) && ft(t.data, Je);
    }, v1 = (e) => {
      const t = e.split("");
      return he(t, (n, s) => qi(n) && s > 0 && s < t.length - 1 && Wu(t[s - 1]) && Wu(t[s + 1]) ? " " : n).join("");
    }, ev = (e, t, n, s) => {
      const o = t.data, r = N(t, 0);
      return !n && QC(o, 0) && !Tf(e, r, s) ? (t.data = " " + o.slice(1), !0) : n && JC(o, 0) && ba(e, r, s) ? (t.data = Je + o.slice(1), !0) : !1;
    }, y1 = (e) => {
      const t = e.data, n = v1(t);
      return n !== t ? (e.data = n, !0) : !1;
    }, tv = (e, t, n, s) => {
      const o = t.data, r = N(t, o.length - 1);
      return !n && QC(o, o.length - 1) && !Tf(e, r, s) ? (t.data = o.slice(0, -1) + " ", !0) : n && JC(o, o.length - 1) && Ca(e, r, s) ? (t.data = o.slice(0, -1) + Je, !0) : !1;
    }, E1 = (e, t, n) => {
      const s = t.container();
      if (!B(s))
        return m.none();
      if (C1(t)) {
        const o = ev(e, s, !1, n) || y1(s) || tv(e, s, !1, n);
        return No(o, t);
      } else if (Tf(e, t, n)) {
        const o = ev(e, s, !0, n) || tv(e, s, !0, n);
        return No(o, t);
      } else
        return m.none();
    }, S1 = (e) => {
      const t = C.fromDom(e.getBody());
      e.selection.isCollapsed() && E1(t, N.fromRangeStart(e.selection.getRng()), e.schema).each((n) => {
        e.selection.setRng(n.toRange());
      });
    }, nv = (e, t, n, s) => {
      if (n === 0)
        return;
      const o = C.fromDom(e), r = Kn(o, (c) => s.isBlock(pe(c))).getOr(o), a = e.data.slice(t, t + n), i = t + n >= e.data.length && Ca(r, N(e, e.data.length), s), l = t === 0 && ba(r, N(e, 0), s);
      e.replaceData(t, n, pp(a, 4, l, i));
    }, al = (e, t, n) => {
      const s = e.data.slice(t), o = s.length - I_(s).length;
      nv(e, t, o, n);
    }, Rf = (e, t, n) => {
      const s = e.data.slice(0, t), o = s.length - gg(s).length;
      nv(e, t - o, o, n);
    }, Pf = (e, t, n, s, o = !0) => {
      const r = gg(e.data).length, a = o ? e : t, i = o ? t : e;
      return o ? a.appendData(i.data) : a.insertData(0, i.data), Pe(C.fromDom(i)), s && al(a, r, n), a;
    }, w1 = (e, t) => {
      const n = e.container(), s = e.offset();
      return !N.isTextPosition(e) && n === t.parentNode && s > N.before(t).offset();
    }, k1 = (e, t) => w1(t, e) ? N(t.container(), t.offset() - 1) : t, _1 = (e) => B(e) ? N(e, 0) : N.before(e), x1 = (e) => B(e) ? N(e, e.data.length) : N.after(e), sv = (e) => an(e.previousSibling) ? m.some(x1(e.previousSibling)) : e.previousSibling ? ln(e.previousSibling) : m.none(), ov = (e) => an(e.nextSibling) ? m.some(_1(e.nextSibling)) : e.nextSibling ? pt(e.nextSibling) : m.none(), N1 = (e, t) => m.from(t.previousSibling ? t.previousSibling : t.parentNode).bind((n) => Bt(e, N.before(n))).orThunk(() => Nt(e, N.after(t))), A1 = (e, t) => Nt(e, N.after(t)).orThunk(() => Bt(e, N.before(t))), T1 = (e, t) => sv(t).orThunk(() => ov(t)).orThunk(() => N1(e, t)), R1 = (e, t) => ov(t).orThunk(() => sv(t)).orThunk(() => A1(e, t)), P1 = (e, t, n) => e ? R1(t, n) : T1(t, n), D1 = (e, t, n) => P1(e, t, n).map(j(k1, n)), rv = (e, t, n) => {
      n.fold(() => {
        e.focus();
      }, (s) => {
        e.selection.setRng(s.toRange(), t);
      });
    }, O1 = (e) => (t) => t.dom === e, B1 = (e, t) => t && oe(e.schema.getBlockElements(), pe(t)), I1 = (e, t) => {
      if (Ue(e)) {
        const n = C.fromHtml('<br data-mce-bogus="1">');
        return t ? P(at(e), (s) => {
          nf(s) || Pe(s);
        }) : Po(e), We(e, n), m.some(N.before(n.dom));
      } else
        return m.none();
    }, L1 = (e, t, n, s) => {
      const o = Is(e).filter(jt), r = Pr(e).filter(jt);
      return Pe(e), dx(o, r, t, (a, i, l) => {
        const c = a.dom, u = i.dom, f = c.data.length;
        return Pf(c, u, n, s), l.container() === u ? N(c, f) : l;
      }).orThunk(() => (s && (o.each((a) => Rf(a.dom, a.dom.length, n)), r.each((a) => al(a.dom, 0, n))), t));
    }, $1 = (e, t) => oe(e.schema.getTextInlineElements(), pe(t)), ao = (e, t, n, s = !0, o = !1) => {
      const r = D1(t, e.getBody(), n.dom), a = Kn(n, j(B1, e), O1(e.getBody())), i = L1(n, r, e.schema, $1(e, n));
      e.dom.isEmpty(e.getBody()) ? (e.setContent(""), e.selection.setCursorLocation()) : a.bind((l) => I1(l, o)).fold(() => {
        s && rv(e, t, i);
      }, (l) => {
        s && rv(e, t, m.some(l));
      });
    }, F1 = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/, M1 = (e) => F1.test(e), io = (e, t) => gn(C.fromDom(t), vR(e)) && !Vs(e.schema, t) && e.dom.isEditable(t), av = (e) => {
      var t;
      return Ne.DOM.getStyle(e, "direction", !0) === "rtl" || M1((t = e.textContent) !== null && t !== void 0 ? t : "");
    }, U1 = (e, t, n) => se(Ne.DOM.getParents(n.container(), "*", t), e), ys = (e, t, n) => {
      const s = U1(e, t, n);
      return m.from(s[s.length - 1]);
    }, z1 = (e, t, n) => {
      const s = gs(t, e), o = gs(n, e);
      return M(s) && s === o;
    }, H1 = (e) => Xc(e) || Zc(e), Qt = (e, t) => {
      const n = t.container(), s = t.offset();
      return e ? ls(n) ? B(n.nextSibling) ? N(n.nextSibling, 0) : N.after(n) : Xc(t) ? N(n, s + 1) : t : ls(n) ? B(n.previousSibling) ? N(n.previousSibling, n.previousSibling.data.length) : N.before(n) : Zc(t) ? N(n, s - 1) : t;
    }, iv = j(Qt, !0), lv = j(Qt, !1), cv = (e, t) => {
      const n = (s) => s.stopImmediatePropagation();
      e.on("beforeinput input", n, !0), e.getDoc().execCommand(t), e.off("beforeinput input", n);
    }, W1 = (e) => {
      e.execCommand("delete");
    }, Df = (e) => cv(e, "Delete"), V1 = (e) => cv(e, "ForwardDelete"), j1 = (e) => (t) => xo(on(t), e, ve), q1 = (e) => lp(e) || Fr(e), il = (e, t) => jn(e, t) ? Ls(t, q1, j1(e)) : m.none(), Of = (e, t = !0) => {
      e.dom.isEmpty(e.getBody()) && e.setContent("", { no_selection: !t });
    }, uv = (e, t, n) => dt(pt(n), ln(n), (s, o) => {
      const r = Qt(!0, s), a = Qt(!1, o), i = Qt(!1, t);
      return e ? Nt(n, i).exists((l) => l.isEqual(a) && t.isEqual(r)) : Bt(n, i).exists((l) => l.isEqual(r) && t.isEqual(a));
    }).getOr(!0), fv = (e) => (yx(e) ? Is(e) : Ic(e)).bind(fv).orThunk(() => m.some(e)), dv = (e, t, n, s = !0) => {
      var o;
      t.deleteContents();
      const r = fv(n).getOr(n), a = C.fromDom((o = e.dom.getParent(r.dom, e.dom.isBlock)) !== null && o !== void 0 ? o : n.dom);
      if (a.dom === e.getBody() ? Of(e, s) : Ue(a) && (is(a), s && e.selection.setCursorLocation(a.dom, 0)), !ve(n, a)) {
        const i = xo(on(a), n) ? [] : Bx(a);
        P(i.concat(at(n)), (l) => {
          !ve(l, a) && !jn(l, a) && Ue(l) && Pe(l);
        });
      }
    }, K1 = (e, t, n) => Kn(e, t, n).isSome(), G1 = (e, t) => Hx(e, t).isSome(), mv = (e, t) => Vg(e, t).isSome(), Y1 = (e) => (t) => ve(e, t), Bf = (e) => mt(e, "td,th"), gv = (e, t) => ca(C.fromDom(e), t), X1 = (e) => dt(e.startTable, e.endTable, (t, n) => {
      const s = mv(t, (r) => ve(r, n)), o = mv(n, (r) => ve(r, t));
      return !s && !o ? e : {
        ...e,
        startTable: s ? m.none() : e.startTable,
        endTable: o ? m.none() : e.endTable,
        isSameTable: !1,
        isMultiTable: !1
      };
    }).getOr(e), Z1 = (e) => X1(e), Q1 = (e, t) => {
      const n = gv(e.startContainer, t), s = gv(e.endContainer, t), o = n.isSome(), r = s.isSome(), a = dt(n, s, ve).getOr(!1);
      return Z1({
        startTable: n,
        endTable: s,
        isStartInTable: o,
        isEndInTable: r,
        isSameTable: a,
        isMultiTable: !a && o && r
      });
    }, If = (e, t) => ({
      start: e,
      end: t
    }), J1 = (e, t, n) => ({
      rng: e,
      table: t,
      cells: n
    }), va = Tn.generate([
      {
        singleCellTable: [
          "rng",
          "cell"
        ]
      },
      { fullTable: ["table"] },
      {
        partialTable: [
          "cells",
          "outsideDetails"
        ]
      },
      {
        multiTable: [
          "startTableCells",
          "endTableCells",
          "betweenRng"
        ]
      }
    ]), ll = (e, t) => $s(C.fromDom(e), "td,th", t), pv = (e) => !ve(e.start, e.end), hv = (e, t) => ca(e.start, t).bind((n) => ca(e.end, t).bind((s) => No(ve(n, s), n))), eI = (e, t) => !pv(e) && hv(e, t).exists((n) => {
      const s = n.dom.rows;
      return s.length === 1 && s[0].cells.length === 1;
    }), tI = (e, t) => {
      const n = ll(e.startContainer, t), s = ll(e.endContainer, t);
      return dt(n, s, If);
    }, nI = (e) => (t) => ca(t, e).bind((n) => Ps(Bf(n)).map((s) => If(t, s))), sI = (e) => (t) => ca(t, e).bind((n) => Pt(Bf(n)).map((s) => If(s, t))), Lf = (e) => (t) => hv(t, e).map((n) => J1(t, n, Bf(n))), bv = (e, t, n, s) => {
      if (n.collapsed || !e.forall(pv))
        return m.none();
      if (t.isSameTable) {
        const o = e.bind(Lf(s));
        return m.some({
          start: o,
          end: o
        });
      } else {
        const o = ll(n.startContainer, s), r = ll(n.endContainer, s), a = o.bind(nI(s)).bind(Lf(s)), i = r.bind(sI(s)).bind(Lf(s));
        return m.some({
          start: a,
          end: i
        });
      }
    }, Cv = (e, t) => vr(e, (n) => ve(n, t)), $f = (e) => dt(Cv(e.cells, e.rng.start), Cv(e.cells, e.rng.end), (t, n) => e.cells.slice(t, n + 1)), oI = (e, t, n) => e.exists((s) => eI(s, n) && qu(s.start, t)), vv = (e, t) => {
      const { startTable: n, endTable: s } = t, o = e.cloneRange();
      return n.each((r) => o.setStartAfter(r.dom)), s.each((r) => o.setEndBefore(r.dom)), o;
    }, rI = (e, t, n, s) => bv(e, t, n, s).bind(({ start: o, end: r }) => o.or(r)).bind((o) => {
      const { isSameTable: r } = t, a = $f(o).getOr([]);
      if (r && o.cells.length === a.length)
        return m.some(va.fullTable(o.table));
      if (a.length > 0) {
        if (r)
          return m.some(va.partialTable(a, m.none()));
        {
          const i = vv(n, t);
          return m.some(va.partialTable(a, m.some({
            ...t,
            rng: i
          })));
        }
      } else
        return m.none();
    }), aI = (e, t, n, s) => bv(e, t, n, s).bind(({ start: o, end: r }) => {
      const a = o.bind($f).getOr([]), i = r.bind($f).getOr([]);
      if (a.length > 0 && i.length > 0) {
        const l = vv(n, t);
        return m.some(va.multiTable(a, i, l));
      } else
        return m.none();
    }), iI = (e, t) => {
      const n = Y1(e), s = tI(t, n), o = Q1(t, n);
      return oI(s, t, n) ? s.map((r) => va.singleCellTable(t, r.start)) : o.isMultiTable ? aI(s, o, t, n) : rI(s, o, t, n);
    }, yv = (e) => P(e, (t) => {
      rt(t, "contenteditable"), is(t);
    }), lI = (e, t) => m.from(e.dom.getParent(t, e.dom.isBlock)).map(C.fromDom), cI = (e, t, n) => {
      n.each((s) => {
        t ? Pe(s) : (is(s), e.selection.setCursorLocation(s.dom, 0));
      });
    }, Ff = (e, t, n, s) => {
      const o = n.cloneRange();
      s ? (o.setStart(n.startContainer, n.startOffset), o.setEndAfter(t.dom.lastChild)) : (o.setStartBefore(t.dom.firstChild), o.setEnd(n.endContainer, n.endOffset)), Mf(e, o, t, !1).each((r) => r());
    }, Ev = (e) => {
      const t = jo(e), n = C.fromDom(e.selection.getNode());
      Ei(n.dom) && Ue(n) ? e.selection.setCursorLocation(n.dom, 0) : e.selection.collapse(!0), t.length > 1 && Fe(t, (s) => ve(s, n)) && ot(n, "data-mce-selected", "1");
    }, Sv = (e, t, n) => m.some(() => {
      const s = e.selection.getRng(), o = n.bind(({ rng: r, isStartInTable: a }) => {
        const i = lI(e, a ? r.endContainer : r.startContainer);
        r.deleteContents(), cI(e, a, i.filter(Ue));
        const l = a ? t[0] : t[t.length - 1];
        return Ff(e, l, s, a), Ue(l) ? m.none() : m.some(a ? t.slice(1) : t.slice(0, -1));
      }).getOr(t);
      yv(o), Ev(e);
    }), uI = (e, t, n, s) => m.some(() => {
      const o = e.selection.getRng(), r = t[0], a = n[n.length - 1];
      Ff(e, r, o, !0), Ff(e, a, o, !1);
      const i = Ue(r) ? t : t.slice(1), l = Ue(a) ? n : n.slice(0, -1);
      yv(i.concat(l)), s.deleteContents(), Ev(e);
    }), Mf = (e, t, n, s = !0) => m.some(() => {
      dv(e, t, n, s);
    }), fI = (e, t) => m.some(() => ao(e, !1, t)), dI = (e, t, n) => iI(t, n).bind((s) => s.fold(j(Mf, e), j(fI, e), j(Sv, e), j(uI, e))), mI = (e, t) => cl(e, t), gI = (e, t, n, s) => Uf(t, s).fold(() => dI(e, t, n), (o) => mI(e, o)), pI = (e, t, n) => {
      const s = C.fromDom(e.getBody()), o = e.selection.getRng();
      return n.length !== 0 ? Sv(e, n, m.none()) : gI(e, s, o, t);
    }, wv = (e, t) => Ye(es(t, e), Mr), Uf = (e, t) => Ye(es(t, e), mi("caption")), hI = (e, t, n, s, o) => Ho(n, e.getBody(), o).bind((r) => wv(t, C.fromDom(r.getNode())).bind((a) => ve(a, s) ? m.none() : m.some(ce))), cl = (e, t) => m.some(() => {
      is(t), e.selection.setCursorLocation(t.dom, 0);
    }), bI = (e, t, n, s) => pt(e.dom).bind((o) => ln(e.dom).map((r) => t ? n.isEqual(o) && s.isEqual(r) : n.isEqual(r) && s.isEqual(o))).getOr(!0), CI = (e, t) => cl(e, t), vI = (e, t, n) => Uf(e, C.fromDom(n.getNode())).fold(() => m.some(ce), (s) => No(!ve(s, t), ce)), yI = (e, t, n, s, o) => Ho(n, e.getBody(), o).fold(() => m.some(ce), (r) => bI(s, n, o, r) ? CI(e, s) : vI(t, s, r)), EI = (e, t, n, s) => {
      const o = N.fromRangeStart(e.selection.getRng());
      return wv(n, s).bind((r) => Ue(r) ? cl(e, r) : hI(e, n, t, r, o));
    }, SI = (e, t, n, s) => {
      const o = N.fromRangeStart(e.selection.getRng());
      return Ue(s) ? cl(e, s) : yI(e, n, t, s, o);
    }, kv = (e, t) => e ? MC(t) : UC(t), wI = (e, t) => {
      const n = N.fromRangeStart(e.selection.getRng());
      return kv(t, n) || Kt(t, e.getBody(), n).exists((s) => kv(t, s));
    }, kI = (e, t, n) => {
      const s = C.fromDom(e.getBody());
      return Uf(s, n).fold(() => EI(e, t, s, n).orThunk(() => No(wI(e, t), ce)), (o) => SI(e, t, s, o));
    }, zf = (e, t) => {
      const n = C.fromDom(e.selection.getStart(!0)), s = jo(e);
      return e.selection.isCollapsed() && s.length === 0 ? kI(e, t, n) : pI(e, n, s);
    }, lo = (e, t) => {
      let n = t;
      for (; n && n !== e; ) {
        if (rn(n) || De(n))
          return n;
        n = n.parentNode;
      }
      return null;
    }, _I = [
      "data-ephox-",
      "data-mce-",
      "data-alloy-",
      "data-snooker-",
      "_"
    ], xI = L.each, Hf = (e) => {
      const t = e.dom, n = new Set(e.serializer.getTempAttrs()), s = (r, a) => {
        if (r.nodeName !== a.nodeName || r.nodeType !== a.nodeType)
          return !1;
        const i = (c) => {
          const u = {};
          return xI(t.getAttribs(c), (f) => {
            const d = f.nodeName.toLowerCase();
            d !== "style" && !o(d) && (u[d] = t.getAttrib(c, d));
          }), u;
        }, l = (c, u) => {
          for (const f in c)
            if (oe(c, f)) {
              const d = u[f];
              if (lt(d) || c[f] !== d)
                return !1;
              delete u[f];
            }
          for (const f in u)
            if (oe(u, f))
              return !1;
          return !0;
        };
        return q(r) && q(a) && (!l(i(r), i(a)) || !l(t.parseStyle(t.getAttrib(r, "style")), t.parseStyle(t.getAttrib(a, "style")))) ? !1 : !Yt(r) && !Yt(a);
      }, o = (r) => Fe(_I, (a) => st(r, a)) || n.has(r);
      return {
        compare: s,
        isAttributeInternal: o
      };
    }, _v = (e) => [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6"
    ].includes(e.name), NI = (e) => e.name === "summary", AI = (e, t) => {
      let n = e;
      for (; n = n.walk(); )
        t(n);
    }, xv = (e, t, n, s) => {
      const o = n.name;
      for (let r = 0, a = e.length; r < a; r++) {
        const i = e[r];
        if (i.name === o) {
          const l = s.nodes[o];
          l ? l.nodes.push(n) : s.nodes[o] = {
            filter: i,
            nodes: [n]
          };
        }
      }
      if (n.attributes)
        for (let r = 0, a = t.length; r < a; r++) {
          const i = t[r], l = i.name;
          if (l in n.attributes.map) {
            const c = s.attributes[l];
            c ? c.nodes.push(n) : s.attributes[l] = {
              filter: i,
              nodes: [n]
            };
          }
        }
    }, TI = (e, t, n) => {
      const s = {
        nodes: {},
        attributes: {}
      };
      return n.firstChild && AI(n, (o) => {
        xv(e, t, o, s);
      }), s;
    }, Nv = (e, t) => {
      const n = (s, o) => {
        Ae(s, (r) => {
          const a = Ft(r.nodes);
          P(r.filter.callbacks, (i) => {
            for (let l = a.length - 1; l >= 0; l--) {
              const c = a[l];
              (!(o ? c.attr(r.filter.name) !== void 0 : c.name === r.filter.name) || qe(c.parent)) && a.splice(l, 1);
            }
            a.length > 0 && i(a, r.filter.name, t);
          });
        });
      };
      n(e.nodes, !1), n(e.attributes, !0);
    }, Av = (e, t, n, s = {}) => {
      const o = TI(e, t, n);
      Nv(o, s);
    }, Wf = (e, t, n, s) => {
      if ((e.pad_empty_with_br || t.insert) && n(s)) {
        const r = new Et("br", 1);
        t.insert && r.attr("data-mce-bogus", "1"), s.empty().append(r);
      } else
        s.empty().append(new Et("#text", 3)).value = Je;
    }, RI = (e) => {
      var t;
      return Tv(e, "#text") && ((t = e == null ? void 0 : e.firstChild) === null || t === void 0 ? void 0 : t.value) === Je;
    }, Tv = (e, t) => {
      const n = e == null ? void 0 : e.firstChild;
      return M(n) && n === e.lastChild && n.name === t;
    }, PI = (e, t) => {
      const n = e.getElementRule(t.name);
      return (n == null ? void 0 : n.paddEmpty) === !0;
    }, ya = (e, t, n, s) => s.isEmpty(t, n, (o) => PI(e, o)), DI = (e, t) => M(e) && (t(e) || e.name === "br"), OI = (e) => {
      let t;
      for (let n = e; n; n = n.parent) {
        const s = n.attr("contenteditable");
        if (s === "false")
          break;
        s === "true" && (t = n);
      }
      return m.from(t);
    }, Vf = (e, t, n = e.parent) => {
      if (t.getSpecialElements()[e.name])
        e.empty().remove();
      else {
        const s = e.children();
        for (const o of s)
          n && !t.isValidChild(n.name, o.name) && Vf(o, t, n);
        e.unwrap();
      }
    }, jf = (e, t, n, s = ce) => {
      const o = t.getTextBlockElements(), r = t.getNonEmptyElements(), a = t.getWhitespaceElements(), i = L.makeMap("tr,td,th,tbody,thead,tfoot,table,summary"), l = /* @__PURE__ */ new Set(), c = (u) => u !== n && !i[u.name];
      for (let u = 0; u < e.length; u++) {
        const f = e[u];
        let d, p, h;
        if (!f.parent || l.has(f))
          continue;
        if (o[f.name] && f.parent.name === "li") {
          let b = f.next;
          for (; b && o[b.name]; ) {
            b.name = "li", l.add(b), f.parent.insert(b, f.parent);
            b = b.next;
          }
          f.unwrap();
          continue;
        }
        const g = [f];
        for (d = f.parent; d && !t.isValidChild(d.name, f.name) && c(d); d = d.parent)
          g.push(d);
        if (d && g.length > 1)
          if (qf(t, f, d))
            Vf(f, t);
          else {
            g.reverse(), p = g[0].clone(), s(p);
            let b = p;
            for (let v = 0; v < g.length - 1; v++) {
              t.isValidChild(b.name, g[v].name) && v > 0 ? (h = g[v].clone(), s(h), b.append(h)) : h = b;
              for (let y = g[v].firstChild; y && y !== g[v + 1]; ) {
                const E = y.next;
                h.append(y), y = E;
              }
              b = h;
            }
            ya(t, r, a, p) ? d.insert(f, g[0], !0) : (d.insert(p, g[0], !0), d.insert(f, p)), d = g[0], (ya(t, r, a, d) || Tv(d, "br")) && d.empty().remove();
          }
        else if (f.parent) {
          if (f.name === "li") {
            let b = f.prev;
            if (b && (b.name === "ul" || b.name === "ol")) {
              b.append(f);
              continue;
            }
            if (b = f.next, b && (b.name === "ul" || b.name === "ol") && b.firstChild) {
              b.insert(f, b.firstChild, !0);
              continue;
            }
            const v = new Et("ul", 1);
            s(v), f.wrap(v);
            continue;
          }
          if (t.isValidChild(f.parent.name, "div") && t.isValidChild("div", f.name)) {
            const b = new Et("div", 1);
            s(b), f.wrap(b);
          } else
            Vf(f, t);
        }
      }
    }, BI = (e, t) => {
      let n = e;
      for (; n; ) {
        if (n.name === t)
          return !0;
        n = n.parent;
      }
      return !1;
    }, qf = (e, t, n = t.parent) => n ? e.children[t.name] && !e.isValidChild(n.name, t.name) || t.name === "a" && BI(n, "a") ? !0 : NI(n) && _v(t) ? !((n == null ? void 0 : n.firstChild) === t && (n == null ? void 0 : n.lastChild) === t) : !1 : !1, II = (e, t, n, s) => {
      const o = document.createRange();
      return o.setStart(e, t), o.setEnd(n, s), o;
    }, LI = (e) => {
      const t = N.fromRangeStart(e), n = N.fromRangeEnd(e), s = e.commonAncestorContainer;
      return Kt(!1, s, n).map((o) => !Rn(t, n, s) && Rn(t, o, s) ? II(t.container(), t.offset(), o.container(), o.offset()) : e).getOr(e);
    }, Kf = (e) => e.collapsed ? e : LI(e), $I = (e) => M(e.firstChild) && e.firstChild === e.lastChild, FI = (e) => e.name === "br" || e.value === Je, MI = (e, t) => e.getBlockElements()[t.name] && $I(t) && FI(t.firstChild), UI = (e, t) => {
      const n = e.getNonEmptyElements();
      return M(t) && (t.isEmpty(n) || MI(e, t));
    }, zI = (e, t) => {
      let n = t.firstChild, s = t.lastChild;
      return n && n.name === "meta" && (n = n.next), s && s.attr("id") === "mce_marker" && (s = s.prev), UI(e, s) && (s = s == null ? void 0 : s.prev), !n || n !== s ? !1 : n.name === "ul" || n.name === "ol";
    }, HI = (e) => {
      var t, n;
      const s = e.firstChild, o = e.lastChild;
      return s && s.nodeName === "META" && ((t = s.parentNode) === null || t === void 0 || t.removeChild(s)), o && o.id === "mce_marker" && ((n = o.parentNode) === null || n === void 0 || n.removeChild(o)), e;
    }, WI = (e, t, n) => {
      const s = t.serialize(n), o = e.createFragment(s);
      return HI(o);
    }, VI = (e) => {
      var t;
      return se((t = e == null ? void 0 : e.childNodes) !== null && t !== void 0 ? t : [], (n) => n.nodeName === "LI");
    }, jI = (e) => e.data === Je || $e(e), qI = (e) => M(e == null ? void 0 : e.firstChild) && e.firstChild === e.lastChild && jI(e.firstChild), KI = (e) => !e.firstChild || qI(e), GI = (e) => e.length > 0 && KI(e[e.length - 1]) ? e.slice(0, -1) : e, Gf = (e, t) => {
      const n = e.getParent(t, e.isBlock);
      return n && n.nodeName === "LI" ? n : null;
    }, YI = (e, t) => !!Gf(e, t), XI = (e, t) => {
      const n = t.cloneRange(), s = t.cloneRange();
      return n.setStartBefore(e), s.setEndAfter(e), [
        n.cloneContents(),
        s.cloneContents()
      ];
    }, ZI = (e, t) => {
      const n = N.before(e), o = Dn(t).next(n);
      return o ? o.toRange() : null;
    }, Rv = (e, t) => {
      const n = N.after(e), o = Dn(t).prev(n);
      return o ? o.toRange() : null;
    }, QI = (e, t, n, s) => {
      const o = XI(e, s), r = e.parentNode;
      return r && (r.insertBefore(o[0], e), L.each(t, (a) => {
        r.insertBefore(a, e);
      }), r.insertBefore(o[1], e), r.removeChild(e)), Rv(t[t.length - 1], n);
    }, JI = (e, t, n) => {
      const s = e.parentNode;
      return s && L.each(t, (o) => {
        s.insertBefore(o, e);
      }), ZI(e, n);
    }, eL = (e, t, n, s) => (s.insertAfter(t.reverse(), e), Rv(t[0], n)), tL = (e, t, n, s) => {
      const o = WI(t, e, s), r = Gf(t, n.startContainer), a = GI(VI(o.firstChild)), i = 1, l = 2, c = t.getRoot(), u = (f) => {
        const d = N.fromRangeStart(n), p = Dn(t.getRoot()), h = f === i ? p.prev(d) : p.next(d), g = h == null ? void 0 : h.getNode();
        return g ? Gf(t, g) !== r : !0;
      };
      return r ? u(i) ? JI(r, a, c) : u(l) ? eL(r, a, c, t) : QI(r, a, c, n) : null;
    }, nL = ["pre"], sL = (e, t, n, s) => {
      var o;
      const r = t.firstChild, a = t.lastChild, i = a.attr("data-mce-type") === "bookmark" ? a.prev : a, l = r === i, c = ke(nL, r.name);
      if (l && c) {
        const u = r.attr("contenteditable") !== "false", f = ((o = e.getParent(n, e.isBlock)) === null || o === void 0 ? void 0 : o.nodeName.toLowerCase()) === r.name, d = m.from(lo(s, n)).forall(rn);
        return u && f && d;
      } else
        return !1;
    }, Yf = Ei, oL = (e, t, n) => {
      if (M(n)) {
        const s = e.getParent(t.endContainer, Yf);
        return n === s && qu(C.fromDom(n), t);
      } else
        return !1;
    }, rL = (e, t, n) => {
      var s;
      if (n.getAttribute("data-mce-bogus") === "all")
        (s = n.parentNode) === null || s === void 0 || s.insertBefore(e.dom.createFragment(t), n);
      else {
        const o = n.firstChild, r = n.lastChild;
        !o || o === r && o.nodeName === "BR" ? e.dom.setHTML(n, t) : e.selection.setContent(t, { no_events: !0 });
      }
    }, aL = (e, t, n) => {
      m.from(e.getParent(t, "td,th")).map(C.fromDom).each((s) => NN(s, n));
    }, iL = (e, t) => {
      const n = e.schema.getTextInlineElements(), s = e.dom;
      if (t) {
        const o = e.getBody(), r = Hf(e);
        L.each(s.select("*[data-mce-fragment]"), (a) => {
          if (M(n[a.nodeName.toLowerCase()]) && XB(s, a)) {
            for (let l = a.parentElement; M(l) && l !== o && !QB(s, a, l); l = l.parentElement)
              if (r.compare(l, a)) {
                s.remove(a, !0);
                break;
              }
          }
        });
      }
    }, lL = (e) => {
      let t = e;
      for (; t = t.walk(); )
        t.type === 1 && t.attr("data-mce-fragment", "1");
    }, cL = (e) => {
      L.each(e.getElementsByTagName("*"), (t) => {
        t.removeAttribute("data-mce-fragment");
      });
    }, uL = (e) => !!e.getAttribute("data-mce-fragment"), fL = (e, t) => M(t) && !e.schema.getVoidElements()[t.nodeName], dL = (e, t) => {
      var n, s, o;
      let r;
      const a = e.dom, i = e.selection;
      if (!t)
        return;
      i.scrollIntoView(t);
      const l = lo(e.getBody(), t);
      if (l && a.getContentEditable(l) === "false") {
        a.remove(t), i.select(l);
        return;
      }
      let c = a.createRng();
      const u = t.previousSibling;
      if (B(u)) {
        c.setStart(u, (s = (n = u.nodeValue) === null || n === void 0 ? void 0 : n.length) !== null && s !== void 0 ? s : 0);
        const p = t.nextSibling;
        B(p) && (u.appendData(p.data), (o = p.parentNode) === null || o === void 0 || o.removeChild(p));
      } else
        c.setStartBefore(t), c.setEndBefore(t);
      const f = (p) => {
        let h = N.fromRangeStart(p);
        return h = Dn(e.getBody()).next(h), h == null ? void 0 : h.toRange();
      }, d = a.getParent(t, a.isBlock);
      if (a.remove(t), d && a.isEmpty(d)) {
        const p = Yf(d);
        Po(C.fromDom(d)), c.setStart(d, 0), c.setEnd(d, 0), !p && !uL(d) && (r = f(c)) ? (c = r, a.remove(d)) : a.add(d, a.create("br", p ? {} : { "data-mce-bogus": "1" }));
      }
      i.setRng(c);
    }, mL = (e) => {
      const t = e.dom, n = Kf(e.selection.getRng());
      e.selection.setRng(n);
      const s = t.getParent(n.startContainer, Yf);
      oL(t, n, s) ? Mf(e, n, C.fromDom(s)) : n.startContainer === n.endContainer && n.endOffset - n.startOffset === 1 && B(n.startContainer.childNodes[n.startOffset]) ? n.deleteContents() : e.getDoc().execCommand("Delete", !1);
    }, gL = (e) => {
      for (let t = e; t; t = t.walk())
        if (t.attr("id") === "mce_marker")
          return m.some(t);
      return m.none();
    }, pL = (e, t, n) => {
      var s;
      return Fe(n.children(), _v) && ((s = e.getParent(t, e.isBlock)) === null || s === void 0 ? void 0 : s.nodeName) === "SUMMARY";
    }, hL = (e, t, n) => {
      var s, o;
      const r = e.selection, a = e.dom, i = e.parser, l = n.merge, c = hs({ validate: !0 }, e.schema), u = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';
      n.preserve_zwsp || (t = zt(t)), t.indexOf("{$caret}") === -1 && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, u);
      let f = r.getRng();
      const d = f.startContainer, p = e.getBody();
      d === p && r.isCollapsed() && a.isBlock(p.firstChild) && fL(e, p.firstChild) && a.isEmpty(p.firstChild) && (f = a.createRng(), f.setStart(p.firstChild, 0), f.setEnd(p.firstChild, 0), r.setRng(f)), r.isCollapsed() || mL(e);
      const h = r.getNode(), g = {
        context: h.nodeName.toLowerCase(),
        data: n.data,
        insert: !0
      }, b = i.parse(t, g);
      if (n.paste === !0 && zI(e.schema, b) && YI(a, h))
        return f = tL(c, a, r.getRng(), b), f && r.setRng(f), t;
      n.paste === !0 && sL(a, b, h, e.getBody()) && ((s = b.firstChild) === null || s === void 0 || s.unwrap()), lL(b);
      let v = b.lastChild;
      if (v && v.attr("id") === "mce_marker") {
        const y = v;
        for (v = v.prev; v; v = v.walk(!0))
          if (v.type === 3 || !a.isBlock(v.name)) {
            v.parent && e.schema.isValidChild(v.parent.name, "span") && v.parent.insert(y, v, v.name === "br");
            break;
          }
      }
      if (e._selectionOverrides.showBlockCaretContainer(h), !g.invalid && !pL(a, h, b))
        t = c.serialize(b), rL(e, t, h);
      else {
        e.selection.setContent(u);
        let y = r.getNode(), E;
        const S = e.getBody();
        for (Lr(y) ? y = E = S : E = y; E && E !== S; )
          y = E, E = E.parentNode;
        t = y === S ? S.innerHTML : a.getOuterHTML(y);
        const T = i.parse(t), O = gL(T), U = O.bind(OI).getOr(T);
        O.each((z) => z.replace(b));
        const A = b.children(), _ = (o = b.parent) !== null && o !== void 0 ? o : T;
        b.unwrap();
        const R = se(A, (z) => qf(e.schema, z, _));
        jf(R, e.schema, U), Av(i.getNodeFilters(), i.getAttributeFilters(), T), t = c.serialize(T), y === S ? a.setHTML(S, t) : a.setOuterHTML(y, t);
      }
      return iL(e, l), dL(e, a.get("mce_marker")), cL(e.getBody()), aL(a, r.getStart(), e.schema), lA(e.schema, e.getBody(), r.getStart()), t;
    }, ul = (e) => e instanceof Et, bL = (e) => {
      ro(e) && pt(e.getBody()).each((t) => {
        const n = t.getNode(), s = Zn(n) ? pt(n).getOr(t) : t;
        e.selection.setRng(s.toRange());
      });
    }, Xf = (e, t, n) => {
      e.dom.setHTML(e.getBody(), t), n !== !0 && bL(e);
    }, CL = (e, t, n, s) => {
      if (n = zt(n), n.length === 0 || /^\s+$/.test(n)) {
        const o = '<br data-mce-bogus="1">';
        t.nodeName === "TABLE" ? n = "<tr><td>" + o + "</td></tr>" : /^(UL|OL)$/.test(t.nodeName) && (n = "<li>" + o + "</li>");
        const r = gt(e);
        return e.schema.isValidChild(t.nodeName.toLowerCase(), r.toLowerCase()) ? (n = o, n = e.dom.createHTML(r, ta(e), n)) : n || (n = o), Xf(e, n, s.no_selection), {
          content: n,
          html: n
        };
      } else {
        s.format !== "raw" && (n = hs({ validate: !1 }, e.schema).serialize(e.parser.parse(n, {
          isRootContent: !0,
          insert: !0
        })));
        const o = wi(C.fromDom(t)) ? n : L.trim(n);
        return Xf(e, o, s.no_selection), {
          content: o,
          html: o
        };
      }
    }, vL = (e, t, n, s) => {
      Av(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
      const o = hs({ validate: !1 }, e.schema).serialize(n), r = zt(wi(C.fromDom(t)) ? o : L.trim(o));
      return Xf(e, r, s.no_selection), {
        content: n,
        html: r
      };
    }, yL = (e, t, n) => m.from(e.getBody()).map((s) => ul(t) ? vL(e, s, t, n) : CL(e, s, t, n)).getOr({
      content: t,
      html: ul(n.content) ? "" : n.content
    }), Pv = (e) => Se(e) ? e : Le, EL = (e, t, n) => {
      let s = e.dom;
      const o = Pv(n);
      for (; s.parentNode; ) {
        s = s.parentNode;
        const r = C.fromDom(s), a = t(r);
        if (a.isSome())
          return a;
        if (o(r))
          break;
      }
      return m.none();
    }, Zf = (e, t, n) => {
      const s = t(e), o = Pv(n);
      return s.orThunk(() => o(e) ? m.none() : EL(e, t, o));
    }, Qf = Qu, Dv = (e, t, n) => {
      const s = e.formatter.get(n);
      if (s)
        for (let o = 0; o < s.length; o++) {
          const r = s[o];
          if (Xt(r) && r.inherit === !1 && e.dom.is(t, r.selector))
            return !0;
        }
      return !1;
    }, Jf = (e, t, n, s, o) => {
      const r = e.dom.getRoot();
      if (t === r)
        return !1;
      const a = e.dom.getParent(t, (i) => Dv(e, i, n) ? !0 : i.parentNode === r || !!Bn(e, i, n, s, !0));
      return !!Bn(e, a, n, s, o);
    }, fl = (e, t, n) => Qe(n) && Qf(t, n.inline) || On(n) && Qf(t, n.block) ? !0 : Xt(n) ? q(t) && e.is(t, n.selector) : !1, Ov = (e, t, n, s, o, r) => {
      const a = n[s], i = s === "attributes";
      if (Se(n.onmatch))
        return n.onmatch(t, n, s);
      if (a) {
        if (lg(a)) {
          for (let l = 0; l < a.length; l++)
            if (i ? e.getAttrib(t, a[l]) : Gi(e, t, a[l]))
              return !0;
        } else
          for (const l in a)
            if (oe(a, l)) {
              const c = i ? e.getAttrib(t, l) : Gi(e, t, l), u = ps(a[l], r), f = qe(c) || kr(c);
              if (f && qe(u))
                continue;
              if (o && f && !n.exact || (!o || n.exact) && !Qf(c, Ju(u, l)))
                return !1;
            }
      }
      return !0;
    }, Bn = (e, t, n, s, o) => {
      const r = e.formatter.get(n), a = e.dom;
      if (r && q(t))
        for (let i = 0; i < r.length; i++) {
          const l = r[i];
          if (fl(e.dom, t, l) && Ov(a, t, l, "attributes", o, s) && Ov(a, t, l, "styles", o, s)) {
            const c = l.classes;
            if (c) {
              for (let u = 0; u < c.length; u++)
                if (!e.dom.hasClass(t, ps(c[u], s)))
                  return;
            }
            return l;
          }
        }
    }, ed = (e, t, n, s, o) => {
      if (s)
        return Jf(e, s, t, n, o);
      if (s = e.selection.getNode(), Jf(e, s, t, n, o))
        return !0;
      const r = e.selection.getStart();
      return !!(r !== s && Jf(e, r, t, n, o));
    }, SL = (e, t, n) => {
      const s = [], o = {}, r = e.selection.getStart();
      return e.dom.getParent(r, (a) => {
        for (let i = 0; i < t.length; i++) {
          const l = t[i];
          !o[l] && Bn(e, a, l, n) && (o[l] = !0, s.push(l));
        }
      }, e.dom.getRoot()), s;
    }, wL = (e, t) => {
      const n = (o) => ve(o, C.fromDom(e.getBody())), s = (o, r) => Bn(e, o.dom, r) ? m.some(r) : m.none();
      return m.from(e.selection.getStart(!0)).bind((o) => Zf(C.fromDom(o), (r) => wo(t, (a) => s(r, a)), n)).getOrNull();
    }, kL = (e, t) => {
      const n = e.formatter.get(t), s = e.dom;
      if (n && e.selection.isEditable()) {
        const o = e.selection.getStart(), r = Yi(s, o);
        for (let a = n.length - 1; a >= 0; a--) {
          const i = n[a];
          if (!Xt(i))
            return !0;
          for (let l = r.length - 1; l >= 0; l--)
            if (s.is(r[l], i.selector))
              return !0;
        }
      }
      return !1;
    }, _L = (e, t, n) => Rt(n, (s, o) => {
      const r = hD(e, o);
      return e.formatter.matchNode(t, o, {}, r) ? s.concat([o]) : s;
    }, []), Ea = Ze, xL = (e, t) => e.importNode(t, !0), Bv = (e) => {
      if (e) {
        const t = new Xe(e, e);
        for (let n = t.current(); n; n = t.next())
          if (B(n))
            return n;
      }
      return null;
    }, td = (e) => {
      const t = C.fromTag("span");
      return Wn(t, {
        id: zu,
        "data-mce-bogus": "1",
        "data-mce-type": "format-caret"
      }), e && We(t, C.fromText(Ea)), t;
    }, NL = (e) => {
      const t = Bv(e);
      return t && t.data.charAt(0) === Ea && t.deleteData(0, 1), t;
    }, nd = (e, t, n) => {
      const s = e.dom, o = e.selection;
      if (Sb(t))
        ao(e, !1, C.fromDom(t), n, !0);
      else {
        const r = o.getRng(), a = s.getParent(t, s.isBlock), i = r.startContainer, l = r.startOffset, c = r.endContainer, u = r.endOffset, f = NL(t);
        s.remove(t, !0), i === f && l > 0 && r.setStart(f, l - 1), c === f && u > 0 && r.setEnd(f, u - 1), a && s.isEmpty(a) && is(C.fromDom(a)), o.setRng(r);
      }
    }, sd = (e, t, n) => {
      const s = e.dom, o = e.selection;
      if (t)
        nd(e, t, n);
      else if (t = to(e.getBody(), o.getStart()), !t)
        for (; t = s.get(zu); )
          nd(e, t, n);
    }, AL = (e, t, n) => {
      var s, o;
      const r = e.dom, a = r.getParent(n, j(Xu, e.schema));
      a && r.isEmpty(a) ? (s = n.parentNode) === null || s === void 0 || s.replaceChild(t, n) : (xN(C.fromDom(n)), r.isEmpty(n) ? (o = n.parentNode) === null || o === void 0 || o.replaceChild(t, n) : r.insertAfter(t, n));
    }, Iv = (e, t) => (e.appendChild(t), t), Lv = (e, t) => {
      var n;
      const s = Cr(e, (r, a) => Iv(r, a.cloneNode(!1)), t), o = (n = s.ownerDocument) !== null && n !== void 0 ? n : document;
      return Iv(s, o.createTextNode(Ea));
    }, TL = (e, t, n, s, o, r) => {
      const a = e.formatter, i = e.dom, l = se(Dt(a.get()), (f) => f !== s && !ft(f, "removeformat")), c = _L(e, n, l);
      if (se(c, (f) => !bD(e, f, s)).length > 0) {
        const f = n.cloneNode(!1);
        return i.add(t, f), a.remove(s, o, f, r), i.remove(f), m.some(f);
      } else
        return m.none();
    }, RL = (e, t, n) => {
      let s;
      const o = e.selection, r = e.formatter.get(t);
      if (!r)
        return;
      const a = o.getRng();
      let i = a.startOffset;
      const c = a.startContainer.nodeValue;
      s = to(e.getBody(), o.getStart());
      const u = /[^\s\u00a0\u00ad\u200b\ufeff]/;
      if (c && i > 0 && i < c.length && u.test(c.charAt(i)) && u.test(c.charAt(i - 1))) {
        const f = o.getBookmark();
        a.collapse(!0);
        let d = no(e.dom, a, r);
        d = nl(d), e.formatter.apply(t, n, d), o.moveToBookmark(f);
      } else {
        let f = s ? Bv(s) : null;
        (!s || (f == null ? void 0 : f.data) !== Ea) && (s = xL(e.getDoc(), td(!0).dom), f = s.firstChild, a.insertNode(s), i = 1), e.formatter.apply(t, n, s), o.setCursorLocation(f, i);
      }
    }, PL = (e, t, n, s) => {
      const o = e.dom, r = e.selection;
      let a = !1;
      const i = e.formatter.get(t);
      if (!i)
        return;
      const l = r.getRng(), c = l.startContainer, u = l.startOffset;
      let f = c;
      B(c) && (u !== c.data.length && (a = !0), f = f.parentNode);
      const d = [];
      let p;
      for (; f; ) {
        if (Bn(e, f, t, n, s)) {
          p = f;
          break;
        }
        f.nextSibling && (a = !0), d.push(f), f = f.parentNode;
      }
      if (p)
        if (a) {
          const h = r.getBookmark();
          l.collapse(!0);
          let g = no(o, l, i, !0);
          g = nl(g), e.formatter.remove(t, n, g, s), r.moveToBookmark(h);
        } else {
          const h = to(e.getBody(), p), g = M(h) ? o.getParents(p.parentNode, He, h) : [], b = td(!1).dom;
          AL(e, b, h ?? p);
          const v = TL(e, b, p, t, n, s), y = Lv([
            ...d,
            ...v.toArray(),
            ...g
          ], b);
          h && nd(e, h, M(h)), r.setCursorLocation(y, 1), o.isEmpty(p) && o.remove(p);
        }
    }, DL = (e, t, n) => {
      const s = e.selection, o = e.getBody();
      sd(e, null, n), (t === 8 || t === 46) && s.isCollapsed() && s.getStart().innerHTML === Ea && sd(e, to(o, s.getStart()), !0), (t === 37 || t === 39) && sd(e, to(o, s.getStart()), !0);
    }, OL = (e) => B(e) && Ac(e.data, Je), BL = (e) => {
      e.on("mouseup keydown", (t) => {
        DL(e, t.keyCode, OL(e.selection.getRng().endContainer));
      });
    }, $v = (e) => {
      const t = td(!1), n = Lv(e, t.dom);
      return {
        caretContainer: t,
        caretPosition: N(n, 0)
      };
    }, Fv = (e, t) => {
      const { caretContainer: n, caretPosition: s } = $v(t);
      return Ot(C.fromDom(e), n), Pe(C.fromDom(e)), s;
    }, IL = (e, t) => {
      const { caretContainer: n, caretPosition: s } = $v(t);
      return e.insertNode(n.dom), s;
    }, Mv = (e, t) => {
      if (Gt(t.dom))
        return !1;
      const n = e.schema.getTextInlineElements();
      return oe(n, pe(t)) && !Gt(t.dom) && !zs(t.dom);
    }, Sa = {}, Uv = pn(["pre"]), LL = (e, t) => {
      Sa[e] || (Sa[e] = []), Sa[e].push(t);
    }, $L = (e, t) => {
      oe(Sa, e) && P(Sa[e], (n) => {
        n(t);
      });
    };
    LL("pre", (e) => {
      const t = e.selection.getRng(), n = (o) => (r) => {
        const a = r.previousSibling;
        return Uv(a) && ke(o, a);
      }, s = (o, r) => {
        const a = C.fromDom(r), i = qn(a).dom;
        Pe(a), Ms(C.fromDom(o), [
          C.fromTag("br", i),
          C.fromTag("br", i),
          ...at(a)
        ]);
      };
      if (!t.collapsed) {
        const o = e.selection.getSelectedBlocks(), r = se(se(o, Uv), n(o));
        P(r, (a) => {
          s(a.previousSibling, a);
        });
      }
    });
    const zv = [
      "fontWeight",
      "fontStyle",
      "color",
      "fontSize",
      "fontFamily"
    ], FL = (e) => vt(e.styles) && Fe(Dt(e.styles), (t) => ke(zv, t)), ML = (e) => Ye(e, (t) => Qe(t) && t.inline === "span" && FL(t)), Hv = (e, t) => {
      const n = e.get(t);
      return Ge(n) ? ML(n) : m.none();
    }, Wv = (e, t) => Bt(t, N.fromRangeStart(e)).isNone(), Vv = (e, t) => Nt(t, N.fromRangeEnd(e)).exists((n) => !$e(n.getNode()) || Nt(t, n).isSome()) === !1, jv = (e) => (t) => mN(t) && e.isEditable(t), UL = (e) => {
      const t = e.getSelectedBlocks(), n = e.getRng();
      if (e.isCollapsed())
        return [];
      if (t.length === 1)
        return Wv(n, t[0]) && Vv(n, t[0]) ? t : [];
      {
        const s = Pt(t).filter((a) => Wv(n, a)).toArray(), o = Ps(t).filter((a) => Vv(n, a)).toArray(), r = t.slice(1, -1);
        return s.concat(r).concat(o);
      }
    }, zL = (e) => se(UL(e), jv(e.dom)), qv = (e) => se(e.getSelectedBlocks(), jv(e.dom)), od = L.each, rd = (e) => q(e) && !Yt(e) && !Gt(e) && !zs(e), Kv = (e, t) => {
      for (let n = e; n; n = n[t]) {
        if (B(n) && wn(n.data))
          return e;
        if (q(n) && !Yt(n))
          return n;
      }
      return e;
    }, Gv = (e, t, n) => {
      const s = Hf(e), o = Xn(t) && e.dom.isEditable(t), r = Xn(n) && e.dom.isEditable(n);
      if (o && r) {
        const a = Kv(t, "previousSibling"), i = Kv(n, "nextSibling");
        if (s.compare(a, i)) {
          for (let l = a.nextSibling; l && l !== i; ) {
            const c = l;
            l = l.nextSibling, a.appendChild(c);
          }
          return e.dom.remove(i), L.each(L.grep(i.childNodes), (l) => {
            a.appendChild(l);
          }), a;
        }
      }
      return n;
    }, Yv = (e, t, n, s) => {
      var o;
      if (s && t.merge_siblings !== !1) {
        const r = (o = Gv(e, vb(s), s)) !== null && o !== void 0 ? o : s;
        Gv(e, r, vb(r, !0));
      }
    }, HL = (e, t, n) => {
      if (t.clear_child_styles) {
        const s = t.links ? "*:not(a)" : "*";
        od(e.select(s, n), (o) => {
          rd(o) && e.isEditable(o) && od(t.styles, (r, a) => {
            e.setStyle(o, a, "");
          });
        });
      }
    }, ad = (e, t, n) => {
      od(e.childNodes, (s) => {
        rd(s) && (t(s) && n(s), s.hasChildNodes() && ad(s, t, n));
      });
    }, WL = (e, t) => {
      t.nodeName === "SPAN" && e.getAttribs(t).length === 0 && e.remove(t, !0);
    }, Xv = (e, t) => (n) => !!(n && Gi(e, n, t)), Zv = (e, t, n) => (s) => {
      e.setStyle(s, t, n), s.getAttribute("style") === "" && s.removeAttribute("style"), WL(e, s);
    }, co = Tn.generate([
      { keep: [] },
      { rename: ["name"] },
      { removed: [] }
    ]), VL = /^(src|href|style)$/, id = L.each, dl = Qu, jL = (e) => /^(TR|TH|TD)$/.test(e.nodeName), Qv = (e, t, n) => e.isChildOf(t, n) && t !== n && !e.isBlock(n), Jv = (e, t, n) => {
      let s = t[n ? "startContainer" : "endContainer"], o = t[n ? "startOffset" : "endOffset"];
      if (q(s)) {
        const r = s.childNodes.length - 1;
        !n && o && o--, s = s.childNodes[o > r ? r : o];
      }
      return B(s) && n && o >= s.data.length && (s = new Xe(s, e.getBody()).next() || s), B(s) && !n && o === 0 && (s = new Xe(s, e.getBody()).prev() || s), s;
    }, ey = (e, t) => {
      const n = t ? "firstChild" : "lastChild", s = e[n];
      return jL(e) && s ? e.nodeName === "TR" && s[n] || s : e;
    }, ld = (e, t, n, s) => {
      var o;
      const r = e.create(n, s);
      return (o = t.parentNode) === null || o === void 0 || o.insertBefore(r, t), r.appendChild(t), r;
    }, ty = (e, t, n, s, o) => {
      const r = C.fromDom(t), a = C.fromDom(e.create(s, o)), i = n ? Ug(r) : Mg(r);
      return Ms(a, i), n ? (Ot(r, a), Uc(a, r)) : (Gn(r, a), We(a, r)), a.dom;
    }, qL = (e, t) => t.links && e.nodeName === "A", ny = (e, t, n) => {
      const s = t.parentNode;
      let o;
      const r = e.dom, a = gt(e);
      On(n) && s === r.getRoot() && (!n.list_block || !dl(t, n.list_block)) && P(Ft(t.childNodes), (i) => {
        qo(e, a, i.nodeName.toLowerCase()) ? o ? o.appendChild(i) : (o = ld(r, i, a), r.setAttribs(o, ta(e))) : o = null;
      }), !(yD(n) && !dl(n.inline, t)) && r.remove(t, !0);
    }, sy = (e, t, n) => mn(e) ? {
      name: t,
      value: null
    } : {
      name: e,
      value: ps(t, n)
    }, oy = (e, t) => {
      e.getAttrib(t, "style") === "" && (t.removeAttribute("style"), t.removeAttribute("data-mce-style"));
    }, ry = (e, t, n, s, o) => {
      let r = !1;
      id(n.styles, (a, i) => {
        const {
          name: l,
          value: c
        } = sy(i, a, s), u = Ju(c, l);
        (n.remove_similar || kt(c) || !q(o) || dl(Gi(e, o, l), u)) && e.setStyle(t, l, ""), r = !0;
      }), r && oy(e, t);
    }, KL = (e, t, n) => {
      t === "removeformat" ? P(qv(e.selection), (s) => {
        P(zv, (o) => e.dom.setStyle(s, o, "")), oy(e.dom, s);
      }) : Hv(e.formatter, t).each((s) => {
        P(qv(e.selection), (o) => ry(e.dom, o, s, n, null));
      });
    }, ay = (e, t, n, s, o) => {
      const r = e.dom, a = Hf(e), i = e.schema;
      if (Qe(t) && ou(i, t.inline) && Vs(i, s) && s.parentElement === e.getBody())
        return ny(e, s, t), co.removed();
      if (!t.ceFalseOverride && s && r.getContentEditableParent(s) === "false" || s && !fl(r, s, t) && !qL(s, t))
        return co.keep();
      const l = s, c = t.preserve_attributes;
      if (Qe(t) && t.remove === "all" && Ge(c)) {
        const u = se(r.getAttribs(l), (f) => ke(c, f.name.toLowerCase()));
        if (r.removeAllAttribs(l), P(u, (f) => r.setAttrib(l, f.name, f.value)), u.length > 0)
          return co.rename("span");
      }
      if (t.remove !== "all") {
        ry(r, l, t, n, o), id(t.attributes, (f, d) => {
          const {
            name: p,
            value: h
          } = sy(d, f, n);
          if (t.remove_similar || kt(h) || !q(o) || dl(r.getAttrib(o, p), h)) {
            if (p === "class") {
              const g = r.getAttrib(l, p);
              if (g) {
                let b = "";
                if (P(g.split(/\s+/), (v) => {
                  /mce\-\w+/.test(v) && (b += (b ? " " : "") + v);
                }), b) {
                  r.setAttrib(l, p, b);
                  return;
                }
              }
            }
            if (VL.test(p) && l.removeAttribute("data-mce-" + p), p === "style" && pn(["li"])(l) && r.getStyle(l, "list-style-type") === "none") {
              l.removeAttribute(p), r.setStyle(l, "list-style-type", "none");
              return;
            }
            p === "class" && l.removeAttribute("className"), l.removeAttribute(p);
          }
        }), id(t.classes, (f) => {
          f = ps(f, n), (!q(o) || r.hasClass(o, f)) && r.removeClass(l, f);
        });
        const u = r.getAttribs(l);
        for (let f = 0; f < u.length; f++) {
          const d = u[f].nodeName;
          if (!a.isAttributeInternal(d))
            return co.keep();
        }
      }
      return t.remove !== "none" ? (ny(e, l, t), co.removed()) : co.keep();
    }, GL = (e, t, n, s, o) => {
      let r;
      return t.parentNode && P(Yi(e.dom, t.parentNode).reverse(), (a) => {
        if (!r && q(a) && a.id !== "_start" && a.id !== "_end") {
          const i = Bn(e, a, n, s, o);
          i && i.split !== !1 && (r = a);
        }
      }), r;
    }, YL = (e, t, n, s) => ay(e, t, n, s, s).fold(V(s), (o) => (e.dom.createFragment().appendChild(s), e.dom.rename(s, o)), V(null)), XL = (e, t, n, s, o, r, a, i) => {
      var l, c;
      let u, f;
      const d = e.dom;
      if (n) {
        const p = n.parentNode;
        for (let h = s.parentNode; h && h !== p; h = h.parentNode) {
          let g = d.clone(h, !1);
          for (let b = 0; b < t.length && (g = YL(e, t[b], i, g), g !== null); b++)
            ;
          g && (u && g.appendChild(u), f || (f = g), u = g);
        }
        (!a.mixed || !d.isBlock(n)) && (s = (l = d.split(n, s)) !== null && l !== void 0 ? l : s), u && f && ((c = o.parentNode) === null || c === void 0 || c.insertBefore(u, o), f.appendChild(o), Qe(a) && Yv(e, a, i, u));
      }
      return s;
    }, ZL = (e, t, n, s, o) => {
      const r = e.formatter.get(t), a = r[0], i = e.dom, l = e.selection, c = (g) => {
        const b = GL(e, g, t, n, o);
        return XL(e, r, b, g, g, !0, a, n);
      }, u = (g) => Yt(g) && q(g) && (g.id === "_start" || g.id === "_end"), f = (g) => Fe(r, (b) => wa(e, b, n, g, g)), d = (g) => {
        const b = Ft(g.childNodes), y = f(g) || Fe(r, (T) => fl(i, g, T)), E = g.parentNode;
        if (!y && M(E) && tf(a) && f(E), a.deep && b.length)
          for (let T = 0; T < b.length; T++)
            d(b[T]);
        P([
          "underline",
          "line-through",
          "overline"
        ], (T) => {
          q(g) && e.dom.getStyle(g, "text-decoration") === T && g.parentNode && Eb(i, g.parentNode) === T && wa(e, {
            deep: !1,
            exact: !0,
            inline: "span",
            styles: { textDecoration: T }
          }, void 0, g);
        });
      }, p = (g) => {
        const b = i.get(g ? "_start" : "_end");
        if (b) {
          let v = b[g ? "firstChild" : "lastChild"];
          return u(v) && (v = v[g ? "firstChild" : "lastChild"]), B(v) && v.data.length === 0 && (v = g ? b.previousSibling || b.nextSibling : b.nextSibling || b.previousSibling), i.remove(b, !0), v;
        } else
          return null;
      }, h = (g) => {
        let b, v, y = no(i, g, r, g.collapsed);
        if (a.split) {
          if (y = nl(y), b = Jv(e, y, !0), v = Jv(e, y), b !== v) {
            if (b = ey(b, !0), v = ey(v, !1), Qv(i, b, v)) {
              const S = m.from(b.firstChild).getOr(b);
              c(ty(i, S, !0, "span", {
                id: "_start",
                "data-mce-type": "bookmark"
              })), p(!0);
              return;
            }
            if (Qv(i, v, b)) {
              const S = m.from(v.lastChild).getOr(v);
              c(ty(i, S, !1, "span", {
                id: "_end",
                "data-mce-type": "bookmark"
              })), p(!1);
              return;
            }
            b = ld(i, b, "span", {
              id: "_start",
              "data-mce-type": "bookmark"
            }), v = ld(i, v, "span", {
              id: "_end",
              "data-mce-type": "bookmark"
            });
            const E = i.createRng();
            E.setStartAfter(b), E.setEndBefore(v), fa(i, E, (S) => {
              P(S, (T) => {
                !Yt(T) && !Yt(T.parentNode) && c(T);
              });
            }), c(b), c(v), b = p(!0), v = p();
          } else
            b = v = c(b);
          y.startContainer = b.parentNode ? b.parentNode : b, y.startOffset = i.nodeIndex(b), y.endContainer = v.parentNode ? v.parentNode : v, y.endOffset = i.nodeIndex(v) + 1;
        }
        fa(i, y, (E) => {
          P(E, d);
        });
      };
      if (s) {
        if (ua(s)) {
          const g = i.createRng();
          g.setStartBefore(s), g.setEndAfter(s), h(g);
        } else
          h(s);
        Fb(e, t, s, n);
        return;
      }
      !l.isCollapsed() || !Qe(a) || jo(e).length ? (Cb(e, () => Gu(e, h), (g) => Qe(a) && ed(e, t, n, g)), e.nodeChanged()) : PL(e, t, n, o), KL(e, t, n), Fb(e, t, s, n);
    }, iy = (e, t, n, s, o) => {
      (s || e.selection.isEditable()) && ZL(e, t, n, s, o);
    }, wa = (e, t, n, s, o) => ay(e, t, n, s, o).fold(Le, (r) => (e.dom.rename(s, r), !0), He), ly = L.each, QL = (e, t, n, s) => {
      const o = (r) => {
        if (Xn(r) && q(r.parentNode) && e.isEditable(r)) {
          const a = Eb(e, r.parentNode);
          e.getStyle(r, "color") && a ? e.setStyle(r, "text-decoration", a) : e.getStyle(r, "text-decoration") === a && e.setStyle(r, "text-decoration", null);
        }
      };
      t.styles && (t.styles.color || t.styles.textDecoration) && (L.walk(s, o, "childNodes"), o(s));
    }, JL = (e, t, n, s) => {
      if (t.styles && t.styles.backgroundColor) {
        const o = Xv(e, "fontSize");
        ad(s, (r) => o(r) && e.isEditable(r), Zv(e, "backgroundColor", ps(t.styles.backgroundColor, n)));
      }
    }, e$ = (e, t, n, s) => {
      if (Qe(t) && (t.inline === "sub" || t.inline === "sup")) {
        const o = Xv(e, "fontSize");
        ad(s, (a) => o(a) && e.isEditable(a), Zv(e, "fontSize", ""));
        const r = se(e.select(t.inline === "sup" ? "sub" : "sup", s), e.isEditable);
        e.remove(r, !0);
      }
    }, t$ = (e, t, n, s) => {
      ly(t, (o) => {
        Qe(o) && ly(e.dom.select(o.inline, s), (r) => {
          rd(r) && wa(e, o, n, r, o.exact ? r : null);
        }), HL(e.dom, o, s);
      });
    }, n$ = (e, t, n, s, o) => {
      const r = o.parentNode;
      Bn(e, r, n, s) && wa(e, t, s, o) || t.merge_with_parents && r && e.dom.getParent(r, (a) => Bn(e, a, n, s) ? (wa(e, t, s, o), !0) : !1);
    }, ml = L.each, s$ = (e, t, n, s) => {
      if (NR(e) && Qe(t) && n.parentNode) {
        const o = Dp(e.schema), r = G1(C.fromDom(n), (a) => Gt(a.dom));
        return ko(o, s) && Ue(C.fromDom(n.parentNode), !1) && !r;
      } else
        return !1;
    }, cy = (e, t, n, s) => {
      if (ml(n.styles, (o, r) => {
        e.setStyle(t, r, ps(o, s));
      }), n.styles) {
        const o = e.getAttrib(t, "style");
        o && e.setAttrib(t, "data-mce-style", o);
      }
    }, o$ = (e, t, n, s) => {
      const o = e.formatter.get(t), r = o[0], a = !s && e.selection.isCollapsed(), i = e.dom, l = e.selection, c = (h, g = r) => {
        Se(g.onformat) && g.onformat(h, g, n, s), cy(i, h, g, n), ml(g.attributes, (b, v) => {
          i.setAttrib(h, v, ps(b, n));
        }), ml(g.classes, (b) => {
          const v = ps(b, n);
          i.hasClass(h, v) || i.addClass(h, v);
        });
      }, u = (h, g) => {
        let b = !1;
        return ml(h, (v) => Xt(v) ? i.getContentEditable(g) === "false" && !v.ceFalseOverride || M(v.collapsed) && v.collapsed !== a ? !0 : i.is(g, v.selector) && !Gt(g) ? (c(g, v), b = !0, !1) : !0 : !1), b;
      }, f = (h) => {
        if (J(h)) {
          const g = i.create(h);
          return c(g), g;
        } else
          return null;
      }, d = (h, g, b) => {
        const v = [];
        let y = !0;
        const E = r.inline || r.block, S = f(E), T = (A) => CD(r) && Bn(e, A, t, n), O = (A, _, R) => {
          const z = vD(r) && Xu(e.schema, A) && qo(e, _, E);
          return R && z;
        }, U = (A, _, R, z) => {
          const Z = A.nodeName.toLowerCase(), re = qo(e, E, Z) && qo(e, _, E), ie = !b && B(A) && ki(A.data), Ce = Gt(A), we = !Qe(r) || !h.isBlock(A);
          return (R || z) && re && !ie && !Ce && we;
        };
        fa(h, g, (A) => {
          let _;
          const R = (z) => {
            let Z = !1, re = y, ie = !1;
            const Ce = z.parentNode, we = Ce.nodeName.toLowerCase(), Ie = h.getContentEditable(z);
            M(Ie) && (re = y, y = Ie === "true", Z = !0, ie = yb(e, z));
            const nt = y && !Z;
            if ($e(z) && !s$(e, r, z, we)) {
              _ = null, On(r) && h.remove(z);
              return;
            }
            if (T(z)) {
              _ = null;
              return;
            }
            if (O(z, we, nt)) {
              const Ve = h.rename(z, E);
              c(Ve), v.push(Ve), _ = null;
              return;
            }
            if (Xt(r)) {
              let Ve = u(o, z);
              if (!Ve && M(Ce) && tf(r) && (Ve = u(o, Ce)), !Qe(r) || Ve) {
                _ = null;
                return;
              }
            }
            M(S) && U(z, we, nt, ie) ? (_ || (_ = h.clone(S, !1), Ce.insertBefore(_, z), v.push(_)), ie && Z && (y = re), _.appendChild(z)) : (_ = null, P(Ft(z.childNodes), R), Z && (y = re), _ = null);
          };
          P(A, R);
        }), r.links === !0 && P(v, (A) => {
          const _ = (R) => {
            R.nodeName === "A" && c(R, r), P(Ft(R.childNodes), _);
          };
          _(A);
        }), P(v, (A) => {
          const _ = (Z) => {
            let re = 0;
            return P(Z.childNodes, (ie) => {
              !gD(ie) && !Yt(ie) && re++;
            }), re;
          }, R = (Z) => Ye(Z.childNodes, Yu).filter((ie) => h.getContentEditable(ie) !== "false" && fl(h, ie, r)).map((ie) => {
            const Ce = h.clone(ie, !1);
            return c(Ce), h.replace(Ce, Z, !0), h.remove(ie, !0), Ce;
          }).getOr(Z), z = _(A);
          if ((v.length > 1 || !h.isBlock(A)) && z === 0) {
            h.remove(A, !0);
            return;
          }
          (Qe(r) || On(r) && r.wrapper) && (!r.exact && z === 1 && (A = R(A)), t$(e, o, n, A), n$(e, r, t, n, A), JL(h, r, n, A), QL(h, r, n, A), e$(h, r, n, A), Yv(e, r, n, A));
        });
      }, p = ua(s) ? s : l.getNode();
      if (i.getContentEditable(p) === "false" && !yb(e, p)) {
        s = p, u(o, s), $b(e, t, s, n);
        return;
      }
      if (r) {
        if (s)
          if (ua(s)) {
            if (!u(o, s)) {
              const h = i.createRng();
              h.setStartBefore(s), h.setEndAfter(s), d(i, no(i, h, o), !0);
            }
          } else
            d(i, s, !0);
        else
          !a || !Qe(r) || jo(e).length ? (l.setRng(Kf(l.getRng())), Cb(e, () => {
            Gu(e, (h, g) => {
              const b = g ? h : no(i, h, o);
              d(i, b, !1);
            });
          }, He), e.nodeChanged()) : RL(e, t, n), Hv(e.formatter, t).each((h) => {
            P(zL(e.selection), (g) => cy(i, g, h, n));
          });
        $L(t, e);
      }
      $b(e, t, s, n);
    }, uy = (e, t, n, s) => {
      (s || e.selection.isEditable()) && o$(e, t, n, s);
    }, fy = (e) => oe(e, "vars"), r$ = (e, t) => {
      e.set({}), t.on("NodeChange", (n) => {
        py(t, n.element, e.get());
      }), t.on("FormatApply FormatRemove", (n) => {
        const s = m.from(n.node).map((o) => ua(o) ? o : o.startContainer).bind((o) => q(o) ? m.some(o) : m.from(o.parentElement)).getOrThunk(() => dy(t));
        py(t, s, e.get());
      });
    }, dy = (e) => e.selection.getStart(), my = (e, t, n, s, o) => og(t, (i) => {
      const l = e.formatter.matchNode(i, n, o ?? {}, s);
      return !lt(l);
    }, (i) => Dv(e, i, n) ? !0 : s ? !1 : M(e.formatter.matchNode(i, n, o, !0))), gy = (e, t) => {
      const n = t ?? dy(e);
      return se(Yi(e.dom, n), (s) => q(s) && !zs(s));
    }, py = (e, t, n) => {
      const s = gy(e, t);
      Ae(n, (o, r) => {
        const a = (i) => {
          const l = my(e, s, r, i.similar, fy(i) ? i.vars : void 0), c = l.isSome();
          if (i.state.get() !== c) {
            i.state.set(c);
            const u = l.getOr(t);
            fy(i) ? i.callback(c, {
              node: u,
              format: r,
              parents: s
            }) : P(i.callbacks, (f) => f(c, {
              node: u,
              format: r,
              parents: s
            }));
          }
        };
        P([
          o.withSimilar,
          o.withoutSimilar
        ], a), P(o.withVars, a);
      });
    }, a$ = (e, t, n, s, o, r) => {
      const a = t.get();
      P(n.split(","), (i) => {
        const l = Re(a, i).getOrThunk(() => {
          const u = {
            withSimilar: {
              state: et(!1),
              similar: !0,
              callbacks: []
            },
            withoutSimilar: {
              state: et(!1),
              similar: !1,
              callbacks: []
            },
            withVars: []
          };
          return a[i] = u, u;
        }), c = () => {
          const u = gy(e);
          return my(e, u, i, o, r).isSome();
        };
        if (lt(r)) {
          const u = o ? l.withSimilar : l.withoutSimilar;
          u.callbacks.push(s), u.callbacks.length === 1 && u.state.set(c());
        } else
          l.withVars.push({
            state: et(c()),
            similar: o,
            vars: r,
            callback: s
          });
      }), t.set(a);
    }, i$ = (e, t, n) => {
      const s = e.get();
      P(t.split(","), (o) => Re(s, o).each((r) => {
        s[o] = {
          withSimilar: {
            ...r.withSimilar,
            callbacks: se(r.withSimilar.callbacks, (a) => a !== n)
          },
          withoutSimilar: {
            ...r.withoutSimilar,
            callbacks: se(r.withoutSimilar.callbacks, (a) => a !== n)
          },
          withVars: se(r.withVars, (a) => a.callback !== n)
        };
      })), e.set(s);
    }, l$ = (e, t, n, s, o, r) => (a$(e, t, n, s, o, r), { unbind: () => i$(t, n, s) }), c$ = (e, t, n, s) => {
      const o = e.formatter.get(t);
      o && (ed(e, t, n, s) && (!("toggle" in o[0]) || o[0].toggle) ? iy(e, t, n, s) : uy(e, t, n, s));
    }, hy = L.explode, by = () => {
      const e = {};
      return {
        addFilter: (o, r) => {
          P(hy(o), (a) => {
            oe(e, a) || (e[a] = {
              name: a,
              callbacks: []
            }), e[a].callbacks.push(r);
          });
        },
        getFilters: () => kc(e),
        removeFilter: (o, r) => {
          P(hy(o), (a) => {
            if (oe(e, a))
              if (M(r)) {
                const i = e[a], l = se(i.callbacks, (c) => c !== r);
                l.length > 0 ? i.callbacks = l : delete e[a];
              } else
                delete e[a];
          });
        }
      };
    }, u$ = (e, t) => {
      P(t, (n) => {
        e.attr(n, null);
      });
    }, f$ = (e, t, n) => {
      e.addNodeFilter("font", (s) => {
        P(s, (o) => {
          const r = t.parse(o.attr("style")), a = o.attr("color"), i = o.attr("face"), l = o.attr("size");
          a && (r.color = a), i && (r["font-family"] = i), l && ui(l).each((c) => {
            r["font-size"] = n[c - 1];
          }), o.name = "span", o.attr("style", t.serialize(r)), u$(o, [
            "color",
            "face",
            "size"
          ]);
        });
      });
    }, d$ = (e, t, n) => {
      e.addNodeFilter("strike", (s) => {
        const o = t.type !== "html4";
        P(s, (r) => {
          if (o)
            r.name = "s";
          else {
            const a = n.parse(r.attr("style"));
            a["text-decoration"] = "line-through", r.name = "span", r.attr("style", n.serialize(a));
          }
        });
      });
    }, m$ = (e, t, n) => {
      var s;
      const o = mu();
      t.convert_fonts_to_spans && f$(e, o, L.explode((s = t.font_size_legacy_values) !== null && s !== void 0 ? s : "")), d$(e, n, o);
    }, g$ = (e, t, n) => {
      t.inline_styles && m$(e, t, n);
    }, Cy = (e, t, n) => {
      t.addNodeFilter("br", (s, o, r) => {
        const a = L.extend({}, n.getBlockElements()), i = n.getNonEmptyElements(), l = n.getWhitespaceElements();
        a.body = 1;
        const c = (u) => u.name in a || au(n, u);
        for (let u = 0, f = s.length; u < f; u++) {
          let d = s[u], p = d.parent;
          if (p && c(p) && d === p.lastChild) {
            let h = d.prev;
            for (; h; ) {
              const g = h.name;
              if (g !== "span" || h.attr("data-mce-type") !== "bookmark") {
                g === "br" && (d = null);
                break;
              }
              h = h.prev;
            }
            if (d && (d.remove(), ya(n, i, l, p))) {
              const g = n.getElementRule(p.name);
              g && (g.removeEmpty ? p.remove() : g.paddEmpty && Wf(e, r, c, p));
            }
          } else {
            let h = d;
            for (; p && p.firstChild === h && p.lastChild === h && (h = p, !a[p.name]); )
              p = p.parent;
            if (h === p) {
              const g = new Et("#text", 3);
              g.value = Je, d.replace(g);
            }
          }
        }
      });
    }, p$ = (e) => fetch(e).then((t) => t.ok ? t.blob() : Promise.reject()).catch(() => Promise.reject({
      message: `Cannot convert ${e} to Blob. Resource might not exist or is inaccessible.`,
      uriType: "blob"
    })), h$ = (e) => {
      const t = /([a-z0-9+\/=\s]+)/i.exec(e);
      return t ? t[1] : "";
    }, cd = (e) => {
      const [t, ...n] = e.split(","), s = n.join(","), o = /data:([^/]+\/[^;]+)(;.+)?/.exec(t);
      if (o) {
        const r = o[2] === ";base64", a = r ? h$(s) : decodeURIComponent(s);
        return m.some({
          type: o[1],
          data: a,
          base64Encoded: r
        });
      } else
        return m.none();
    }, vy = (e, t, n = !0) => {
      let s = t;
      if (n)
        try {
          s = atob(t);
        } catch {
          return m.none();
        }
      const o = new Uint8Array(s.length);
      for (let r = 0; r < o.length; r++)
        o[r] = s.charCodeAt(r);
      return m.some(new Blob([o], { type: e }));
    }, b$ = (e) => new Promise((t, n) => {
      cd(e).bind(({ type: s, data: o, base64Encoded: r }) => vy(s, o, r)).fold(() => n("Invalid data URI"), t);
    }), C$ = (e) => st(e, "blob:") ? p$(e) : st(e, "data:") ? b$(e) : Promise.reject("Unknown URI format"), yy = (e) => new Promise((t, n) => {
      const s = new FileReader();
      s.onloadend = () => {
        t(s.result);
      }, s.onerror = () => {
        var o;
        n((o = s.error) === null || o === void 0 ? void 0 : o.message);
      }, s.readAsDataURL(e);
    });
    let v$ = 0;
    const y$ = (e) => "blobid" + v$++, Ey = (e, t, n) => cd(e).bind(({ data: s, type: o, base64Encoded: r }) => {
      if (t && !r)
        return m.none();
      {
        const a = r ? s : btoa(s);
        return n(a, o);
      }
    }), Sy = (e, t, n) => {
      const s = e.create(y$(), t, n);
      return e.add(s), s;
    }, wy = (e, t, n = !1) => Ey(t, n, (s, o) => m.from(e.getByData(s, o)).orThunk(() => vy(o, s).map((r) => Sy(e, r, s)))), E$ = (e, t) => {
      const n = () => Promise.reject("Invalid data URI");
      if (st(t, "blob:")) {
        const s = e.getByUri(t);
        return M(s) ? Promise.resolve(s) : C$(t).then((o) => yy(o).then((r) => Ey(r, !1, (a) => m.some(Sy(e, o, a))).getOrThunk(n)));
      } else return st(t, "data:") ? wy(e, t).fold(n, (s) => Promise.resolve(s)) : Promise.reject("Unknown image data format");
    }, S$ = (e) => M(e.attr("data-mce-bogus")), w$ = (e) => e.attr("src") === be.transparentSrc || M(e.attr("data-mce-placeholder")), k$ = (e, t) => {
      const { blob_cache: n } = t;
      if (n) {
        const s = (o) => {
          const r = o.attr("src");
          w$(o) || S$(o) || qe(r) || wy(n, r, !0).each((a) => {
            o.attr("src", a.blobUri());
          });
        };
        e.addAttributeFilter("src", (o) => P(o, s));
      }
    }, ud = (e, t) => st(e, `${t}/`), _$ = (e, t, n, s, o) => {
      let r;
      lt(e) ? r = "iframe" : ud(e, "image") ? r = "img" : ud(e, "video") ? r = "video" : ud(e, "audio") ? r = "audio" : r = "iframe";
      const a = new Et(r, 1);
      return a.attr(r === "audio" ? { src: t } : {
        src: t,
        width: n,
        height: s
      }), (r === "audio" || r === "video") && a.attr("controls", ""), r === "iframe" && o && a.attr("sandbox", ""), a;
    }, x$ = (e, t) => {
      const n = e.schema;
      t.remove_trailing_brs && Cy(t, e, n), e.addAttributeFilter("href", (o) => {
        let r = o.length;
        const a = (l) => l.split(" ").filter((u) => u.length > 0).concat(["noopener"]).sort().join(" "), i = (l) => {
          const c = l ? L.trim(l) : "";
          return /\b(noopener)\b/g.test(c) ? c : a(c);
        };
        if (!t.allow_unsafe_link_target)
          for (; r--; ) {
            const l = o[r];
            l.name === "a" && l.attr("target") === "_blank" && l.attr("rel", i(l.attr("rel")));
          }
      }), t.allow_html_in_named_anchor || e.addAttributeFilter("id,name", (o) => {
        let r = o.length, a, i, l, c;
        for (; r--; )
          if (c = o[r], c.name === "a" && c.firstChild && !c.attr("href"))
            for (l = c.parent, a = c.lastChild; a && l; )
              i = a.prev, l.insert(a, c), a = i;
      }), t.fix_list_elements && e.addNodeFilter("ul,ol", (o) => {
        let r = o.length, a, i;
        for (; r--; )
          if (a = o[r], i = a.parent, i && (i.name === "ul" || i.name === "ol"))
            if (a.prev && a.prev.name === "li")
              a.prev.append(a);
            else {
              const l = new Et("li", 1);
              l.attr("style", "list-style-type: none"), a.wrap(l);
            }
      });
      const s = n.getValidClasses();
      t.validate && s && e.addAttributeFilter("class", (o) => {
        var r;
        let a = o.length;
        for (; a--; ) {
          const i = o[a], l = (r = i.attr("class")) !== null && r !== void 0 ? r : "", c = L.explode(l, " ");
          let u = "";
          for (let f = 0; f < c.length; f++) {
            const d = c[f];
            let p = !1, h = s["*"];
            h && h[d] && (p = !0), h = s[i.name], !p && h && h[d] && (p = !0), p && (u && (u += " "), u += d);
          }
          u.length || (u = null), i.attr("class", u);
        }
      }), k$(e, t), t.convert_unsafe_embeds && e.addNodeFilter("object,embed", (o) => P(o, (r) => {
        r.replace(_$(r.attr("type"), r.name === "object" ? r.attr("data") : r.attr("src"), r.attr("width"), r.attr("height"), t.sandbox_iframes));
      })), t.sandbox_iframes && e.addNodeFilter("iframe", (o) => P(o, (r) => r.attr("sandbox", "")));
    };
    /*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
    const {
      entries: ky,
      setPrototypeOf: _y,
      isFrozen: N$,
      getPrototypeOf: A$,
      getOwnPropertyDescriptor: T$
    } = Object;
    let {
      freeze: It,
      seal: cn,
      create: xy
    } = Object, {
      apply: fd,
      construct: dd
    } = typeof Reflect < "u" && Reflect;
    It || (It = function(t) {
      return t;
    }), cn || (cn = function(t) {
      return t;
    }), fd || (fd = function(t, n, s) {
      return t.apply(n, s);
    }), dd || (dd = function(t, n) {
      return new t(...n);
    });
    const gl = Jt(Array.prototype.forEach), Ny = Jt(Array.prototype.pop), ka = Jt(Array.prototype.push), pl = Jt(String.prototype.toLowerCase), md = Jt(String.prototype.toString), Ay = Jt(String.prototype.match), _a = Jt(String.prototype.replace), R$ = Jt(String.prototype.indexOf), P$ = Jt(String.prototype.trim), vn = Jt(Object.prototype.hasOwnProperty), Lt = Jt(RegExp.prototype.test), xa = D$(TypeError);
    function Jt(e) {
      return function(t) {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
          s[o - 1] = arguments[o];
        return fd(e, t, s);
      };
    }
    function D$(e) {
      return function() {
        for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++)
          n[s] = arguments[s];
        return dd(e, n);
      };
    }
    function _e(e, t) {
      let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : pl;
      _y && _y(e, null);
      let s = t.length;
      for (; s--; ) {
        let o = t[s];
        if (typeof o == "string") {
          const r = n(o);
          r !== o && (N$(t) || (t[s] = r), o = r);
        }
        e[o] = !0;
      }
      return e;
    }
    function O$(e) {
      for (let t = 0; t < e.length; t++)
        vn(e, t) || (e[t] = null);
      return e;
    }
    function uo(e) {
      const t = xy(null);
      for (const [n, s] of ky(e))
        vn(e, n) && (Array.isArray(s) ? t[n] = O$(s) : s && typeof s == "object" && s.constructor === Object ? t[n] = uo(s) : t[n] = s);
      return t;
    }
    function Na(e, t) {
      for (; e !== null; ) {
        const s = T$(e, t);
        if (s) {
          if (s.get)
            return Jt(s.get);
          if (typeof s.value == "function")
            return Jt(s.value);
        }
        e = A$(e);
      }
      function n() {
        return null;
      }
      return n;
    }
    const Ty = It(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), gd = It(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pd = It(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), B$ = It(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), hd = It(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), I$ = It(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ry = It(["#text"]), Py = It(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), bd = It(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Dy = It(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), hl = It(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), L$ = cn(/\{\{[\w\W]*|[\w\W]*\}\}/gm), $$ = cn(/<%[\w\W]*|[\w\W]*%>/gm), F$ = cn(/\${[\w\W]*}/gm), M$ = cn(/^data-[\-\w.\u00B7-\uFFFF]/), U$ = cn(/^aria-[\-\w]+$/), Oy = cn(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
      // eslint-disable-line no-useless-escape
    ), z$ = cn(/^(?:\w+script|data):/i), H$ = cn(
      /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
      // eslint-disable-line no-control-regex
    ), By = cn(/^html$/i), W$ = cn(/^[a-z][.\w]*(-[.\w]+)+$/i);
    var Iy = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      MUSTACHE_EXPR: L$,
      ERB_EXPR: $$,
      TMPLIT_EXPR: F$,
      DATA_ATTR: M$,
      ARIA_ATTR: U$,
      IS_ALLOWED_URI: Oy,
      IS_SCRIPT_OR_DATA: z$,
      ATTR_WHITESPACE: H$,
      DOCTYPE_NAME: By,
      CUSTOM_ELEMENT: W$
    });
    const Aa = {
      element: 1,
      text: 3,
      // Deprecated
      progressingInstruction: 7,
      comment: 8,
      document: 9
    }, V$ = function() {
      return typeof window > "u" ? null : window;
    }, j$ = function(t, n) {
      if (typeof t != "object" || typeof t.createPolicy != "function")
        return null;
      let s = null;
      const o = "data-tt-policy-suffix";
      n && n.hasAttribute(o) && (s = n.getAttribute(o));
      const r = "dompurify" + (s ? "#" + s : "");
      try {
        return t.createPolicy(r, {
          createHTML(a) {
            return a;
          },
          createScriptURL(a) {
            return a;
          }
        });
      } catch {
        return console.warn("TrustedTypes policy " + r + " could not be created."), null;
      }
    };
    function Ly() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : V$();
      const t = (le) => Ly(le);
      if (t.version = "3.1.7", t.removed = [], !e || !e.document || e.document.nodeType !== Aa.document)
        return t.isSupported = !1, t;
      let {
        document: n
      } = e;
      const s = n, o = s.currentScript, {
        DocumentFragment: r,
        HTMLTemplateElement: a,
        Node: i,
        Element: l,
        NodeFilter: c,
        NamedNodeMap: u = e.NamedNodeMap || e.MozNamedAttrMap,
        HTMLFormElement: f,
        DOMParser: d,
        trustedTypes: p
      } = e, h = l.prototype, g = Na(h, "cloneNode"), b = Na(h, "remove"), v = Na(h, "nextSibling"), y = Na(h, "childNodes"), E = Na(h, "parentNode");
      if (typeof a == "function") {
        const le = n.createElement("template");
        le.content && le.content.ownerDocument && (n = le.content.ownerDocument);
      }
      let S, T = "";
      const {
        implementation: O,
        createNodeIterator: U,
        createDocumentFragment: A,
        getElementsByTagName: _
      } = n, {
        importNode: R
      } = s;
      let z = {};
      t.isSupported = typeof ky == "function" && typeof E == "function" && O && O.createHTMLDocument !== void 0;
      const {
        MUSTACHE_EXPR: Z,
        ERB_EXPR: re,
        TMPLIT_EXPR: ie,
        DATA_ATTR: Ce,
        ARIA_ATTR: we,
        IS_SCRIPT_OR_DATA: Ie,
        ATTR_WHITESPACE: nt,
        CUSTOM_ELEMENT: Ve
      } = Iy;
      let {
        IS_ALLOWED_URI: F
      } = Iy, K = null;
      const ge = _e({}, [...Ty, ...gd, ...pd, ...hd, ...Ry]);
      let de = null;
      const G = _e({}, [...Py, ...bd, ...Dy, ...hl]);
      let Y = Object.seal(xy(null, {
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
      })), I = null, ee = null, ue = !0, ye = !0, xe = !1, ht = !0, $t = !1, Fn = !0, bt = !1, fn = !1, ne = !1, fe = !1, Ee = !1, Te = !1, Oe = !0, nn = !1;
      const cr = "user-content-";
      let Ya = !0, vo = !1, ws = {}, ks = null;
      const Xa = _e({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
      let mc = null;
      const gc = _e({}, ["audio", "video", "img", "source", "image", "track"]);
      let ur = null;
      const pc = _e({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), _s = "http://www.w3.org/1998/Math/MathML", fr = "http://www.w3.org/2000/svg", dn = "http://www.w3.org/1999/xhtml";
      let ss = dn, Za = !1, Qa = null;
      const hc = _e({}, [_s, fr, dn], md);
      let dr = null;
      const e_ = ["application/xhtml+xml", "text/html"], t_ = "text/html";
      let ut = null, yo = null;
      const xs = n.createElement("form"), Ja = function(x) {
        return x instanceof RegExp || x instanceof Function;
      }, w = function() {
        let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!(yo && yo === x)) {
          if ((!x || typeof x != "object") && (x = {}), x = uo(x), dr = // eslint-disable-next-line unicorn/prefer-includes
          e_.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? t_ : x.PARSER_MEDIA_TYPE, ut = dr === "application/xhtml+xml" ? md : pl, K = vn(x, "ALLOWED_TAGS") ? _e({}, x.ALLOWED_TAGS, ut) : ge, de = vn(x, "ALLOWED_ATTR") ? _e({}, x.ALLOWED_ATTR, ut) : G, Qa = vn(x, "ALLOWED_NAMESPACES") ? _e({}, x.ALLOWED_NAMESPACES, md) : hc, ur = vn(x, "ADD_URI_SAFE_ATTR") ? _e(
            uo(pc),
            // eslint-disable-line indent
            x.ADD_URI_SAFE_ATTR,
            // eslint-disable-line indent
            ut
            // eslint-disable-line indent
          ) : pc, mc = vn(x, "ADD_DATA_URI_TAGS") ? _e(
            uo(gc),
            // eslint-disable-line indent
            x.ADD_DATA_URI_TAGS,
            // eslint-disable-line indent
            ut
            // eslint-disable-line indent
          ) : gc, ks = vn(x, "FORBID_CONTENTS") ? _e({}, x.FORBID_CONTENTS, ut) : Xa, I = vn(x, "FORBID_TAGS") ? _e({}, x.FORBID_TAGS, ut) : {}, ee = vn(x, "FORBID_ATTR") ? _e({}, x.FORBID_ATTR, ut) : {}, ws = vn(x, "USE_PROFILES") ? x.USE_PROFILES : !1, ue = x.ALLOW_ARIA_ATTR !== !1, ye = x.ALLOW_DATA_ATTR !== !1, xe = x.ALLOW_UNKNOWN_PROTOCOLS || !1, ht = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $t = x.SAFE_FOR_TEMPLATES || !1, Fn = x.SAFE_FOR_XML !== !1, bt = x.WHOLE_DOCUMENT || !1, fe = x.RETURN_DOM || !1, Ee = x.RETURN_DOM_FRAGMENT || !1, Te = x.RETURN_TRUSTED_TYPE || !1, ne = x.FORCE_BODY || !1, Oe = x.SANITIZE_DOM !== !1, nn = x.SANITIZE_NAMED_PROPS || !1, Ya = x.KEEP_CONTENT !== !1, vo = x.IN_PLACE || !1, F = x.ALLOWED_URI_REGEXP || Oy, ss = x.NAMESPACE || dn, Y = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && Ja(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Y.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && Ja(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Y.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Y.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), $t && (ye = !1), Ee && (fe = !0), ws && (K = _e({}, Ry), de = [], ws.html === !0 && (_e(K, Ty), _e(de, Py)), ws.svg === !0 && (_e(K, gd), _e(de, bd), _e(de, hl)), ws.svgFilters === !0 && (_e(K, pd), _e(de, bd), _e(de, hl)), ws.mathMl === !0 && (_e(K, hd), _e(de, Dy), _e(de, hl))), x.ADD_TAGS && (K === ge && (K = uo(K)), _e(K, x.ADD_TAGS, ut)), x.ADD_ATTR && (de === G && (de = uo(de)), _e(de, x.ADD_ATTR, ut)), x.ADD_URI_SAFE_ATTR && _e(ur, x.ADD_URI_SAFE_ATTR, ut), x.FORBID_CONTENTS && (ks === Xa && (ks = uo(ks)), _e(ks, x.FORBID_CONTENTS, ut)), Ya && (K["#text"] = !0), bt && _e(K, ["html", "head", "body"]), K.table && (_e(K, ["tbody"]), delete I.tbody), x.TRUSTED_TYPES_POLICY) {
            if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
              throw xa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
            if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
              throw xa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
            S = x.TRUSTED_TYPES_POLICY, T = S.createHTML("");
          } else
            S === void 0 && (S = j$(p, o)), S !== null && typeof T == "string" && (T = S.createHTML(""));
          It && It(x), yo = x;
        }
      }, k = _e({}, ["mi", "mo", "mn", "ms", "mtext"]), $ = _e({}, ["annotation-xml"]), D = _e({}, ["title", "style", "font", "a", "script"]), Q = _e({}, [...gd, ...pd, ...B$]), me = _e({}, [...hd, ...I$]), Be = function(x) {
        let X = E(x);
        (!X || !X.tagName) && (X = {
          namespaceURI: ss,
          tagName: "template"
        });
        const ae = pl(x.tagName), Me = pl(X.tagName);
        return Qa[x.namespaceURI] ? x.namespaceURI === fr ? X.namespaceURI === dn ? ae === "svg" : X.namespaceURI === _s ? ae === "svg" && (Me === "annotation-xml" || k[Me]) : !!Q[ae] : x.namespaceURI === _s ? X.namespaceURI === dn ? ae === "math" : X.namespaceURI === fr ? ae === "math" && $[Me] : !!me[ae] : x.namespaceURI === dn ? X.namespaceURI === fr && !$[Me] || X.namespaceURI === _s && !k[Me] ? !1 : !me[ae] && (D[ae] || !Q[ae]) : !!(dr === "application/xhtml+xml" && Qa[x.namespaceURI]) : !1;
      }, Ke = function(x) {
        ka(t.removed, {
          element: x
        });
        try {
          E(x).removeChild(x);
        } catch {
          b(x);
        }
      }, je = function(x, X) {
        try {
          ka(t.removed, {
            attribute: X.getAttributeNode(x),
            from: X
          });
        } catch {
          ka(t.removed, {
            attribute: null,
            from: X
          });
        }
        if (X.removeAttribute(x), x === "is" && !de[x])
          if (fe || Ee)
            try {
              Ke(X);
            } catch {
            }
          else
            try {
              X.setAttribute(x, "");
            } catch {
            }
      }, ei = function(x) {
        let X = null, ae = null;
        if (ne)
          x = "<remove></remove>" + x;
        else {
          const Ct = Ay(x, /^[\r\n\t ]+/);
          ae = Ct && Ct[0];
        }
        dr === "application/xhtml+xml" && ss === dn && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
        const Me = S ? S.createHTML(x) : x;
        if (ss === dn)
          try {
            X = new d().parseFromString(Me, dr);
          } catch {
          }
        if (!X || !X.documentElement) {
          X = O.createDocument(ss, "template", null);
          try {
            X.documentElement.innerHTML = Za ? T : Me;
          } catch {
          }
        }
        const Tt = X.body || X.documentElement;
        return x && ae && Tt.insertBefore(n.createTextNode(ae), Tt.childNodes[0] || null), ss === dn ? _.call(X, bt ? "html" : "body")[0] : bt ? X.documentElement : Tt;
      }, ti = function(x) {
        return U.call(
          x.ownerDocument || x,
          x,
          // eslint-disable-next-line no-bitwise
          c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
          null
        );
      }, n_ = function(x) {
        return x instanceof f && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof u) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
      }, s_ = function(x) {
        return typeof i == "function" && x instanceof i;
      }, os = function(x, X, ae) {
        z[x] && gl(z[x], (Me) => {
          Me.call(t, X, ae, yo);
        });
      }, o_ = function(x) {
        let X = null;
        if (os("beforeSanitizeElements", x, null), n_(x))
          return Ke(x), !0;
        const ae = ut(x.nodeName);
        if (os("uponSanitizeElement", x, {
          tagName: ae,
          allowedTags: K
        }), x.hasChildNodes() && !s_(x.firstElementChild) && Lt(/<[/\w]/g, x.innerHTML) && Lt(/<[/\w]/g, x.textContent) || x.nodeType === Aa.progressingInstruction || Fn && x.nodeType === Aa.comment && Lt(/<[/\w]/g, x.data))
          return Ke(x), !0;
        if (!K[ae] || I[ae]) {
          if (!I[ae] && a_(ae) && (Y.tagNameCheck instanceof RegExp && Lt(Y.tagNameCheck, ae) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(ae)))
            return !1;
          if (Ya && !ks[ae]) {
            const Me = E(x) || x.parentNode, Tt = y(x) || x.childNodes;
            if (Tt && Me) {
              const Ct = Tt.length;
              for (let Vt = Ct - 1; Vt >= 0; --Vt) {
                const Mn = g(Tt[Vt], !0);
                Mn.__removalCount = (x.__removalCount || 0) + 1, Me.insertBefore(Mn, v(x));
              }
            }
          }
          return Ke(x), !0;
        }
        return x instanceof l && !Be(x) || (ae === "noscript" || ae === "noembed" || ae === "noframes") && Lt(/<\/no(script|embed|frames)/i, x.innerHTML) ? (Ke(x), !0) : ($t && x.nodeType === Aa.text && (X = x.textContent, gl([Z, re, ie], (Me) => {
          X = _a(X, Me, " ");
        }), x.textContent !== X && (ka(t.removed, {
          element: x.cloneNode()
        }), x.textContent = X)), os("afterSanitizeElements", x, null), !1);
      }, r_ = function(x, X, ae) {
        if (Oe && (X === "id" || X === "name") && (ae in n || ae in xs))
          return !1;
        if (!(ye && !ee[X] && Lt(Ce, X))) {
          if (!(ue && Lt(we, X))) {
            if (!de[X] || ee[X]) {
              if (
                // First condition does a very basic check if a) it's basically a valid custom element tagname AND
                // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
                !(a_(x) && (Y.tagNameCheck instanceof RegExp && Lt(Y.tagNameCheck, x) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(x)) && (Y.attributeNameCheck instanceof RegExp && Lt(Y.attributeNameCheck, X) || Y.attributeNameCheck instanceof Function && Y.attributeNameCheck(X)) || // Alternative, second condition checks if it's an `is`-attribute, AND
                // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                X === "is" && Y.allowCustomizedBuiltInElements && (Y.tagNameCheck instanceof RegExp && Lt(Y.tagNameCheck, ae) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(ae)))
              ) return !1;
            } else if (!ur[X]) {
              if (!Lt(F, _a(ae, nt, ""))) {
                if (!((X === "src" || X === "xlink:href" || X === "href") && x !== "script" && R$(ae, "data:") === 0 && mc[x])) {
                  if (!(xe && !Lt(Ie, _a(ae, nt, "")))) {
                    if (ae)
                      return !1;
                  }
                }
              }
            }
          }
        }
        return !0;
      }, a_ = function(x) {
        return x !== "annotation-xml" && Ay(x, Ve);
      }, i_ = function(x) {
        os("beforeSanitizeAttributes", x, null);
        const {
          attributes: X
        } = x;
        if (!X)
          return;
        const ae = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: de
        };
        let Me = X.length;
        for (; Me--; ) {
          const Tt = X[Me], {
            name: Ct,
            namespaceURI: Vt,
            value: Mn
          } = Tt, ni = ut(Ct);
          let wt = Ct === "value" ? Mn : P$(Mn);
          const X6 = wt;
          if (ae.attrName = ni, ae.attrValue = wt, ae.keepAttr = !0, ae.forceKeepAttr = void 0, os("uponSanitizeAttribute", x, ae), wt = ae.attrValue, ae.forceKeepAttr)
            continue;
          if (!ae.keepAttr) {
            je(Ct, x);
            continue;
          }
          if (!ht && Lt(/\/>/i, wt)) {
            je(Ct, x);
            continue;
          }
          $t && gl([Z, re, ie], (c_) => {
            wt = _a(wt, c_, " ");
          });
          const l_ = ut(x.nodeName);
          if (!r_(l_, ni, wt)) {
            je(Ct, x);
            continue;
          }
          if (nn && (ni === "id" || ni === "name") && (je(Ct, x), wt = cr + wt), Fn && Lt(/((--!?|])>)|<\/(style|title)/i, wt)) {
            je(Ct, x);
            continue;
          }
          if (S && typeof p == "object" && typeof p.getAttributeType == "function" && !Vt)
            switch (p.getAttributeType(l_, ni)) {
              case "TrustedHTML": {
                wt = S.createHTML(wt);
                break;
              }
              case "TrustedScriptURL": {
                wt = S.createScriptURL(wt);
                break;
              }
            }
          if (wt !== X6)
            try {
              Vt ? x.setAttributeNS(Vt, Ct, wt) : x.setAttribute(Ct, wt), n_(x) ? Ke(x) : Ny(t.removed);
            } catch {
            }
        }
        os("afterSanitizeAttributes", x, null);
      }, Y6 = function le(x) {
        let X = null;
        const ae = ti(x);
        for (os("beforeSanitizeShadowDOM", x, null); X = ae.nextNode(); )
          os("uponSanitizeShadowNode", X, null), !o_(X) && (X.content instanceof r && le(X.content), i_(X));
        os("afterSanitizeShadowDOM", x, null);
      };
      return t.sanitize = function(le) {
        let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = null, ae = null, Me = null, Tt = null;
        if (Za = !le, Za && (le = "<!-->"), typeof le != "string" && !s_(le))
          if (typeof le.toString == "function") {
            if (le = le.toString(), typeof le != "string")
              throw xa("dirty is not a string, aborting");
          } else
            throw xa("toString is not a function");
        if (!t.isSupported)
          return le;
        if (fn || w(x), t.removed = [], typeof le == "string" && (vo = !1), vo) {
          if (le.nodeName) {
            const Mn = ut(le.nodeName);
            if (!K[Mn] || I[Mn])
              throw xa("root node is forbidden and cannot be sanitized in-place");
          }
        } else if (le instanceof i)
          X = ei("<!---->"), ae = X.ownerDocument.importNode(le, !0), ae.nodeType === Aa.element && ae.nodeName === "BODY" || ae.nodeName === "HTML" ? X = ae : X.appendChild(ae);
        else {
          if (!fe && !$t && !bt && // eslint-disable-next-line unicorn/prefer-includes
          le.indexOf("<") === -1)
            return S && Te ? S.createHTML(le) : le;
          if (X = ei(le), !X)
            return fe ? null : Te ? T : "";
        }
        X && ne && Ke(X.firstChild);
        const Ct = ti(vo ? le : X);
        for (; Me = Ct.nextNode(); )
          o_(Me) || (Me.content instanceof r && Y6(Me.content), i_(Me));
        if (vo)
          return le;
        if (fe) {
          if (Ee)
            for (Tt = A.call(X.ownerDocument); X.firstChild; )
              Tt.appendChild(X.firstChild);
          else
            Tt = X;
          return (de.shadowroot || de.shadowrootmode) && (Tt = R.call(s, Tt, !0)), Tt;
        }
        let Vt = bt ? X.outerHTML : X.innerHTML;
        return bt && K["!doctype"] && X.ownerDocument && X.ownerDocument.doctype && X.ownerDocument.doctype.name && Lt(By, X.ownerDocument.doctype.name) && (Vt = "<!DOCTYPE " + X.ownerDocument.doctype.name + `>
` + Vt), $t && gl([Z, re, ie], (Mn) => {
          Vt = _a(Vt, Mn, " ");
        }), S && Te ? S.createHTML(Vt) : Vt;
      }, t.setConfig = function() {
        let le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        w(le), fn = !0;
      }, t.clearConfig = function() {
        yo = null, fn = !1;
      }, t.isValidAttribute = function(le, x, X) {
        yo || w({});
        const ae = ut(le), Me = ut(x);
        return r_(ae, Me, X);
      }, t.addHook = function(le, x) {
        typeof x == "function" && (z[le] = z[le] || [], ka(z[le], x));
      }, t.removeHook = function(le) {
        if (z[le])
          return Ny(z[le]);
      }, t.removeHooks = function(le) {
        z[le] && (z[le] = []);
      }, t.removeAllHooks = function() {
        z = {};
      }, t;
    }
    var $y = Ly();
    const Fy = L.each, q$ = L.trim, K$ = [
      "source",
      "protocol",
      "authority",
      "userInfo",
      "user",
      "password",
      "host",
      "port",
      "relative",
      "path",
      "directory",
      "file",
      "query",
      "anchor"
    ], G$ = {
      ftp: 21,
      http: 80,
      https: 443,
      mailto: 25
    }, Y$ = [
      "img",
      "video"
    ], X$ = (e, t) => M(e) ? !e : M(t) ? !ke(Y$, t) : !0, Z$ = (e) => {
      try {
        return decodeURIComponent(e);
      } catch {
        return unescape(e);
      }
    }, My = (e, t, n) => {
      const s = Z$(t).replace(/\s/g, "");
      return e.allow_script_urls ? !1 : /((java|vb)script|mhtml):/i.test(s) ? !0 : e.allow_html_data_urls ? !1 : /^data:image\//i.test(s) ? X$(e.allow_svg_data_urls, n) && /^data:image\/svg\+xml/i.test(s) : /^data:/i.test(s);
    };
    class un {
      static parseDataUri(t) {
        let n;
        const s = decodeURIComponent(t).split(","), o = /data:([^;]+)/.exec(s[0]);
        return o && (n = o[1]), {
          type: n,
          data: s[1]
        };
      }
      static isDomSafe(t, n, s = {}) {
        if (s.allow_script_urls)
          return !0;
        {
          const o = qs.decode(t).replace(/[\s\u0000-\u001F]+/g, "");
          return !My(s, o, n);
        }
      }
      static getDocumentBaseUrl(t) {
        var n;
        let s;
        return t.protocol.indexOf("http") !== 0 && t.protocol !== "file:" ? s = (n = t.href) !== null && n !== void 0 ? n : "" : s = t.protocol + "//" + t.host + t.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(s) && (s = s.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(s) || (s += "/")), s;
      }
      constructor(t, n = {}) {
        this.path = "", this.directory = "", t = q$(t), this.settings = n;
        const s = n.base_uri, o = this;
        if (/^([\w\-]+):([^\/]{2})/i.test(t) || /^\s*#/.test(t)) {
          o.source = t;
          return;
        }
        const r = t.indexOf("//") === 0;
        if (t.indexOf("/") === 0 && !r && (t = (s && s.protocol || "http") + "://mce_host" + t), !/^[\w\-]*:?\/\//.test(t)) {
          const i = s ? s.path : new un(document.location.href).directory;
          if ((s == null ? void 0 : s.protocol) === "")
            t = "//mce_host" + o.toAbsPath(i, t);
          else {
            const l = /([^#?]*)([#?]?.*)/.exec(t);
            l && (t = (s && s.protocol || "http") + "://mce_host" + o.toAbsPath(i, l[1]) + l[2]);
          }
        }
        t = t.replace(/@@/g, "(mce_at)");
        const a = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(t);
        a && Fy(K$, (i, l) => {
          let c = a[l];
          c && (c = c.replace(/\(mce_at\)/g, "@@")), o[i] = c;
        }), s && (o.protocol || (o.protocol = s.protocol), o.userInfo || (o.userInfo = s.userInfo), !o.port && o.host === "mce_host" && (o.port = s.port), (!o.host || o.host === "mce_host") && (o.host = s.host), o.source = ""), r && (o.protocol = "");
      }
      setPath(t) {
        const n = /^(.*?)\/?(\w+)?$/.exec(t);
        n && (this.path = n[0], this.directory = n[1], this.file = n[2]), this.source = "", this.getURI();
      }
      toRelative(t) {
        if (t === "./")
          return t;
        const n = new un(t, { base_uri: this });
        if (n.host !== "mce_host" && this.host !== n.host && n.host || this.port !== n.port || this.protocol !== n.protocol && n.protocol !== "")
          return n.getURI();
        const s = this.getURI(), o = n.getURI();
        if (s === o || s.charAt(s.length - 1) === "/" && s.substr(0, s.length - 1) === o)
          return s;
        let r = this.toRelPath(this.path, n.path);
        return n.query && (r += "?" + n.query), n.anchor && (r += "#" + n.anchor), r;
      }
      toAbsolute(t, n) {
        const s = new un(t, { base_uri: this });
        return s.getURI(n && this.isSameOrigin(s));
      }
      isSameOrigin(t) {
        if (this.host == t.host && this.protocol == t.protocol) {
          if (this.port == t.port)
            return !0;
          const n = this.protocol ? G$[this.protocol] : null;
          if (n && (this.port || n) == (t.port || n))
            return !0;
        }
        return !1;
      }
      toRelPath(t, n) {
        let s = 0, o = "", r, a;
        const i = t.substring(0, t.lastIndexOf("/")).split("/"), l = n.split("/");
        if (i.length >= l.length) {
          for (r = 0, a = i.length; r < a; r++)
            if (r >= l.length || i[r] !== l[r]) {
              s = r + 1;
              break;
            }
        }
        if (i.length < l.length) {
          for (r = 0, a = l.length; r < a; r++)
            if (r >= i.length || i[r] !== l[r]) {
              s = r + 1;
              break;
            }
        }
        if (s === 1)
          return n;
        for (r = 0, a = i.length - (s - 1); r < a; r++)
          o += "../";
        for (r = s - 1, a = l.length; r < a; r++)
          r !== s - 1 ? o += "/" + l[r] : o += l[r];
        return o;
      }
      toAbsPath(t, n) {
        let s = 0;
        const o = /\/$/.test(n) ? "/" : "", r = t.split("/"), a = n.split("/"), i = [];
        Fy(r, (f) => {
          f && i.push(f);
        });
        const l = [];
        for (let f = a.length - 1; f >= 0; f--)
          if (!(a[f].length === 0 || a[f] === ".")) {
            if (a[f] === "..") {
              s++;
              continue;
            }
            if (s > 0) {
              s--;
              continue;
            }
            l.push(a[f]);
          }
        const c = i.length - s;
        let u;
        return c <= 0 ? u = yr(l).join("/") : u = i.slice(0, c).join("/") + "/" + yr(l).join("/"), u.indexOf("/") !== 0 && (u = "/" + u), o && u.lastIndexOf("/") !== u.length - 1 && (u += o), u;
      }
      getURI(t = !1) {
        let n;
        return (!this.source || t) && (n = "", t || (this.protocol ? n += this.protocol + "://" : n += "//", this.userInfo && (n += this.userInfo + "@"), this.host && (n += this.host), this.port && (n += ":" + this.port)), this.path && (n += this.path), this.query && (n += "?" + this.query), this.anchor && (n += "#" + this.anchor), this.source = n), this.source;
      }
    }
    const Q$ = L.makeMap("src,href,data,background,action,formaction,poster,xlink:href"), Cd = "data-mce-type";
    let Uy = 0;
    const zy = (e, t, n, s, o) => {
      var r, a, i, l;
      const c = t.validate, u = n.getSpecialElements();
      e.nodeType === kg && !t.allow_conditional_comments && /^\[if/i.test((r = e.nodeValue) !== null && r !== void 0 ? r : "") && (e.nodeValue = " " + e.nodeValue);
      const f = (a = o == null ? void 0 : o.tagName) !== null && a !== void 0 ? a : e.nodeName.toLowerCase();
      if (s !== "html" && n.isValid(s)) {
        M(o) && (o.allowedTags[f] = !0);
        return;
      }
      if (e.nodeType !== _r || f === "body")
        return;
      const d = C.fromDom(e), p = xr(d, Cd), h = Ut(d, "data-mce-bogus");
      if (!p && J(h)) {
        h === "all" ? Pe(d) : Yn(d);
        return;
      }
      const g = n.getElementRule(f);
      if (c && !g) {
        oe(u, f) ? Pe(d) : Yn(d);
        return;
      } else
        M(o) && (o.allowedTags[f] = !0);
      if (c && g && !p) {
        if (P((i = g.attributesForced) !== null && i !== void 0 ? i : [], (b) => {
          ot(d, b.name, b.value === "{$uid}" ? `mce_${Uy++}` : b.value);
        }), P((l = g.attributesDefault) !== null && l !== void 0 ? l : [], (b) => {
          xr(d, b.name) || ot(d, b.name, b.value === "{$uid}" ? `mce_${Uy++}` : b.value);
        }), g.attributesRequired && !Fe(g.attributesRequired, (b) => xr(d, b))) {
          Yn(d);
          return;
        }
        if (g.removeEmptyAttrs && wx(d)) {
          Yn(d);
          return;
        }
        g.outputName && g.outputName !== f && dT(d, g.outputName);
      }
    }, J$ = (e, t, n, s, o) => {
      const r = e.tagName.toLowerCase(), { attrName: a, attrValue: i } = o;
      o.keepAttr = Hy(t, n, s, r, a, i), o.keepAttr ? (o.allowedAttributes[a] = !0, Vy(a, n) && (o.attrValue = a), t.allow_svg_data_urls && st(i, "data:image/svg+xml") && (o.forceKeepAttr = !0)) : Wy(e, a) && (o.forceKeepAttr = !0);
    }, Hy = (e, t, n, s, o, r) => n !== "html" && !Ws(s) ? !0 : !(o in Q$ && My(e, r, s)) && (!e.validate || t.isValid(s, o) || st(o, "data-") || st(o, "aria-")), Wy = (e, t) => e.hasAttribute(Cd) && (t === "id" || t === "class" || t === "style"), Vy = (e, t) => e in t.getBoolAttrs(), eF = (e, t, n, s) => {
      const { attributes: o } = e;
      for (let r = o.length - 1; r >= 0; r--) {
        const a = o[r], i = a.name, l = a.value;
        !Hy(t, n, s, e.tagName.toLowerCase(), i, l) && !Wy(e, i) ? e.removeAttribute(i) : Vy(i, n) && e.setAttribute(i, i);
      }
    }, tF = (e, t, n) => {
      const s = $y();
      return s.addHook("uponSanitizeElement", (o, r) => {
        zy(o, e, t, n.track(o), r);
      }), s.addHook("uponSanitizeAttribute", (o, r) => {
        J$(o, e, t, n.current(), r);
      }), s;
    }, nF = (e, t) => {
      const s = { ...{
        IN_PLACE: !0,
        ALLOW_UNKNOWN_PROTOCOLS: !0,
        ALLOWED_TAGS: [
          "#comment",
          "#cdata-section",
          "body"
        ],
        ALLOWED_ATTR: [],
        SAFE_FOR_XML: !1
      } };
      return s.PARSER_MEDIA_TYPE = t, e.allow_script_urls ? s.ALLOWED_URI_REGEXP = /.*/ : e.allow_html_data_urls && (s.ALLOWED_URI_REGEXP = /^(?!(\w+script|mhtml):)/i), s;
    }, sF = (e) => {
      const t = [
        "type",
        "href",
        "role",
        "arcrole",
        "title",
        "show",
        "actuate",
        "label",
        "from",
        "to"
      ].map((s) => `xlink:${s}`), n = {
        IN_PLACE: !0,
        USE_PROFILES: {
          html: !0,
          svg: !0,
          svgFilters: !0
        },
        ALLOWED_ATTR: t
      };
      return $y().sanitize(e, n), e.innerHTML;
    }, oF = (e, t) => {
      const n = nA();
      if (e.sanitize) {
        const s = tF(e, t, n);
        return {
          sanitizeHtmlElement: (r, a) => {
            s.sanitize(r, nF(e, a)), s.removed = [], n.reset();
          },
          sanitizeNamespaceElement: sF
        };
      } else
        return {
          sanitizeHtmlElement: (r, a) => {
            const i = document.createNodeIterator(r, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT);
            let l;
            for (; l = i.nextNode(); ) {
              const c = n.track(l);
              zy(l, e, t, c), q(l) && eF(l, e, t, c);
            }
            n.reset();
          },
          sanitizeNamespaceElement: ce
        };
    }, jy = L.makeMap, qy = L.extend, Ky = (e, t, n, s) => {
      const o = e.name, r = o in n && o !== "title" && o !== "textarea" && o !== "noscript", a = t.childNodes;
      for (let i = 0, l = a.length; i < l; i++) {
        const c = a[i], u = new Et(c.nodeName.toLowerCase(), c.nodeType);
        if (q(c)) {
          const f = c.attributes;
          for (let d = 0, p = f.length; d < p; d++) {
            const h = f[d];
            u.attr(h.name, h.value);
          }
          Ws(u.name) && (s(c), u.value = c.innerHTML);
        } else B(c) ? (u.value = c.data, r && (u.raw = !0)) : (as(c) || uN(c) || fN(c)) && (u.value = c.data);
        Ws(u.name) || Ky(u, c, n, s), e.append(u);
      }
    }, rF = (e, t, n) => {
      const s = [];
      for (let o = e, r = o; o; r = o, o = o.walk()) {
        const a = o;
        P(t, (i) => i(a)), qe(a.parent) && a !== e ? o = r : s.push(a);
      }
      for (let o = s.length - 1; o >= 0; o--) {
        const r = s[o];
        P(n, (a) => a(r));
      }
    }, aF = (e, t, n, s) => {
      const o = n.validate, r = t.getNonEmptyElements(), a = t.getWhitespaceElements(), i = qy(jy("script,style,head,html,body,title,meta,param"), t.getBlockElements()), l = Dp(t), c = /[ \t\r\n]+/g, u = /^[ \t\r\n]+/, f = /[ \t\r\n]+$/, d = (y) => {
        let E = y.parent;
        for (; M(E); ) {
          if (E.name in a)
            return !0;
          E = E.parent;
        }
        return !1;
      }, p = (y) => {
        let E = y;
        for (; M(E); ) {
          if (E.name in l)
            return ya(t, r, a, E);
          E = E.parent;
        }
        return !1;
      }, h = (y) => y.name in i || au(t, y) || Ws(y.name) && y.parent === e, g = (y, E) => {
        const S = E ? y.prev : y.next;
        return M(S) || qe(y.parent) ? !1 : h(y.parent) && (y.parent !== e || s.isRootContent === !0);
      };
      return [
        (y) => {
          var E;
          if (y.type === 3 && !d(y)) {
            let S = (E = y.value) !== null && E !== void 0 ? E : "";
            S = S.replace(c, " "), (DI(y.prev, h) || g(y, !0)) && (S = S.replace(u, "")), S.length === 0 ? y.remove() : y.value = S;
          }
        },
        (y) => {
          var E;
          if (y.type === 1) {
            const S = t.getElementRule(y.name);
            if (o && S) {
              const T = ya(t, r, a, y);
              S.paddInEmptyBlock && T && p(y) ? Wf(n, s, h, y) : S.removeEmpty && T ? h(y) ? y.remove() : y.unwrap() : S.paddEmpty && (T || RI(y)) && Wf(n, s, h, y);
            }
          } else if (y.type === 3 && !d(y)) {
            let S = (E = y.value) !== null && E !== void 0 ? E : "";
            (y.next && h(y.next) || g(y, !1)) && (S = S.replace(f, "")), S.length === 0 ? y.remove() : y.value = S;
          }
        }
      ];
    }, iF = (e, t) => {
      var n;
      const s = (n = t.forced_root_block) !== null && n !== void 0 ? n : e.forced_root_block;
      return s === !1 ? "" : s === !0 ? "p" : s;
    }, Xo = (e = {}, t = us()) => {
      const n = by(), s = by(), o = {
        validate: !0,
        root_name: "body",
        sanitize: !0,
        ...e
      }, r = new DOMParser(), a = oF(o, t), i = (E, S, T = "html") => {
        const O = T === "xhtml" ? "application/xhtml+xml" : "text/html", U = oe(t.getSpecialElements(), S.toLowerCase()), A = U ? `<${S}>${E}</${S}>` : E, _ = T === "xhtml" ? `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>${A}</body></html>` : `<body>${A}</body>`, R = r.parseFromString(_, O).body;
        return a.sanitizeHtmlElement(R, O), U ? R.firstChild : R;
      }, l = n.addFilter, c = n.getFilters, u = n.removeFilter, f = s.addFilter, d = s.getFilters, p = s.removeFilter, h = (E, S) => {
        qf(t, E) && S.push(E);
      }, g = (E, S) => {
        const T = J(S.attr(Cd)), O = S.type === 1 && !oe(E, S.name) && !au(t, S) && !Ws(S.name);
        return S.type === 3 || O && !T;
      }, b = (E, S) => {
        const T = qy(jy("script,style,head,html,body,title,meta,param"), t.getBlockElements()), O = /^[ \t\r\n]+/, U = /[ \t\r\n]+$/;
        let A = E.firstChild, _ = null;
        const R = (z) => {
          var Z, re;
          z && (A = z.firstChild, A && A.type === 3 && (A.value = (Z = A.value) === null || Z === void 0 ? void 0 : Z.replace(O, "")), A = z.lastChild, A && A.type === 3 && (A.value = (re = A.value) === null || re === void 0 ? void 0 : re.replace(U, "")));
        };
        if (t.isValidChild(E.name, S.toLowerCase())) {
          for (; A; ) {
            const z = A.next;
            g(T, A) ? (_ || (_ = new Et(S, 1), _.attr(o.forced_root_block_attrs), E.insert(_, A)), _.append(A)) : (R(_), _ = null), A = z;
          }
          R(_);
        }
      }, y = {
        schema: t,
        addAttributeFilter: f,
        getAttributeFilters: d,
        removeAttributeFilter: p,
        addNodeFilter: l,
        getNodeFilters: c,
        removeNodeFilter: u,
        parse: (E, S = {}) => {
          var T;
          const O = o.validate, U = (T = S.context) !== null && T !== void 0 ? T : o.root_name, A = i(E, U, S.format);
          nu(t, A);
          const _ = new Et(U, 11);
          Ky(_, A, t.getSpecialElements(), a.sanitizeNamespaceElement), A.innerHTML = "";
          const [R, z] = aF(_, t, o, S), Z = [], re = O ? (Ie) => h(Ie, Z) : ce, ie = {
            nodes: {},
            attributes: {}
          }, Ce = (Ie) => xv(c(), d(), Ie, ie);
          if (rF(_, [
            R,
            Ce
          ], [
            z,
            re
          ]), Z.reverse(), O && Z.length > 0)
            if (S.context) {
              const {
                pass: Ie,
                fail: nt
              } = So(Z, (Ve) => Ve.parent === _);
              jf(nt, t, _, Ce), S.invalid = Ie.length > 0;
            } else
              jf(Z, t, _, Ce);
          const we = iF(o, S);
          return we && (_.name === "body" || S.isRootContent) && b(_, we), S.invalid || Nv(ie, S), _;
        }
      };
      return x$(y, o), g$(y, o, t), y;
    }, lF = (e) => ul(e) ? hs({ validate: !1 }).serialize(e) : e, Gy = (e, t, n) => {
      const s = lF(e), o = t(s);
      if (o.isDefaultPrevented())
        return o;
      if (ul(e))
        if (o.content !== s) {
          const r = Xo({
            validate: !1,
            forced_root_block: !1,
            ...n
          }).parse(o.content, { context: e.name });
          return {
            ...o,
            content: r
          };
        } else
          return {
            ...o,
            content: e
          };
      else
        return o;
    }, Yy = (e, t) => {
      if (t.no_events)
        return xt.value(t);
      {
        const n = jD(e, t);
        return n.isDefaultPrevented() ? xt.error(Ub(e, {
          content: "",
          ...n
        }).content) : xt.value(n);
      }
    }, Xy = (e, t, n) => n.no_events ? t : Gy(t, (o) => Ub(e, {
      ...n,
      content: o
    }), {
      sanitize: Ou(e),
      sandbox_iframes: Bu(e)
    }).content, vd = (e, t) => {
      if (t.no_events)
        return xt.value(t);
      {
        const n = Gy(t.content, (s) => VD(e, {
          ...t,
          content: s
        }), {
          sanitize: Ou(e),
          sandbox_iframes: Bu(e)
        });
        return n.isDefaultPrevented() ? (Mb(e, n), xt.error(void 0)) : xt.value(n);
      }
    }, yd = (e, t, n) => {
      n.no_events || Mb(e, {
        ...n,
        content: t
      });
    }, Ed = (e, t, n) => ({
      element: e,
      width: t,
      rows: n
    }), Zy = (e, t) => ({
      element: e,
      cells: t
    }), cF = (e, t) => ({
      x: e,
      y: t
    }), Qy = (e, t) => Vn(e, t).bind(ui).getOr(1), uF = (e, t, n, s, o) => {
      const r = Qy(o, "rowspan"), a = Qy(o, "colspan"), i = e.rows;
      for (let l = n; l < n + r; l++) {
        i[l] || (i[l] = Zy(Yp(s), []));
        for (let c = t; c < t + a; c++) {
          const u = i[l].cells;
          u[c] = l === n && c === t ? o : Ys(o);
        }
      }
    }, fF = (e, t, n) => {
      const s = e.rows;
      return !!(s[n] ? s[n].cells : [])[t];
    }, dF = (e, t, n) => {
      for (; fF(e, t, n); )
        t++;
      return t;
    }, Jy = (e) => Rt(e, (t, n) => n.cells.length > t ? n.cells.length : t, 0), eE = (e, t) => {
      const n = e.rows;
      for (let s = 0; s < n.length; s++) {
        const o = n[s].cells;
        for (let r = 0; r < o.length; r++)
          if (ve(o[r], t))
            return m.some(cF(r, s));
      }
      return m.none();
    }, tE = (e, t, n, s, o) => {
      const r = [], a = e.rows;
      for (let i = n; i <= o; i++) {
        const l = a[i].cells, c = t < s ? l.slice(t, s + 1) : l.slice(s, t + 1);
        r.push(Zy(a[i].element, c));
      }
      return r;
    }, mF = (e, t, n) => {
      const s = t.x, o = t.y, r = n.x, a = n.y, i = o < a ? tE(e, s, o, r, a) : tE(e, s, a, r, o);
      return Ed(e.element, Jy(i), i);
    }, gF = (e, t) => {
      const n = Ys(e.element), s = C.fromTag("tbody");
      return Ms(s, t), We(n, s), n;
    }, pF = (e) => he(e.rows, (t) => {
      const n = he(t.cells, (o) => {
        const r = Yp(o);
        return rt(r, "colspan"), rt(r, "rowspan"), r;
      }), s = Ys(t.element);
      return Ms(s, n), s;
    }), hF = (e) => {
      const t = Ed(Ys(e), 0, []);
      return P(mt(e, "tr"), (n, s) => {
        P(mt(n, "td,th"), (o, r) => {
          uF(t, dF(t, r, s), s, n, o);
        });
      }), Ed(t.element, Jy(t.rows), t.rows);
    }, bF = (e) => gF(e, pF(e)), CF = (e, t, n) => eE(e, t).bind((s) => eE(e, n).map((o) => mF(e, s, o))), vF = (e) => Ye(e, (t) => pe(t) === "ul" || pe(t) === "ol"), yF = (e, t) => Ye(e, (n) => pe(n) === "li" && qu(n, t)).fold(V([]), (n) => vF(e).map((s) => {
      const o = C.fromTag(pe(s)), r = Er(Mc(s), (a, i) => st(i, "list-style"));
      return pi(o, r), [
        C.fromTag("li"),
        o
      ];
    }).getOr([])), EF = (e, t) => {
      const n = Rt(t, (s, o) => (We(o, s), o), e);
      return t.length > 0 ? af([n]) : n;
    }, SF = (e) => Fr(e) ? on(e).filter(Yc).fold(V([]), (t) => [
      e,
      t
    ]) : Yc(e) ? [e] : [], wF = (e, t, n) => {
      const s = C.fromDom(t.commonAncestorContainer), o = es(s, e), r = se(o, (l) => n.isWrapper(pe(l))), a = yF(o, t), i = r.concat(a.length ? a : SF(s));
      return he(i, Ys);
    }, nE = () => af([]), kF = (e, t, n) => EF(C.fromDom(t.cloneContents()), wF(e, t, n)), _F = (e, t) => Dr(t, "table", j(ve, e)), xF = (e, t) => _F(e, t[0]).bind((n) => {
      const s = t[0], o = t[t.length - 1], r = hF(n);
      return CF(r, s, o).map((a) => af([bF(a)]));
    }).getOrThunk(nE), NF = (e, t, n) => t.length > 0 && t[0].collapsed ? nE() : kF(e, t[0], n), AF = (e, t, n) => {
      const s = pb(t, e);
      return s.length > 0 ? xF(e, s) : NF(e, t, n);
    }, bl = (e, t) => t >= 0 && t < e.length && Vo(e.charAt(t)), sE = (e) => zt(e.innerText), TF = (e) => e.map((t) => t.nodeName).getOr("div").toLowerCase(), RF = (e) => m.from(e.selection.getRng()).map((t) => {
      var n;
      const s = m.from(e.dom.getParent(t.commonAncestorContainer, e.dom.isBlock)), o = e.getBody(), r = TF(s), a = C.fromDom(t.cloneContents());
      RC(a), PC(a);
      const i = e.dom.add(o, r, {
        "data-mce-bogus": "all",
        style: "overflow: hidden; opacity: 0;"
      }, a.dom), l = sE(i), c = zt((n = i.textContent) !== null && n !== void 0 ? n : "");
      if (e.dom.remove(i), bl(c, 0) || bl(c, c.length - 1)) {
        const u = s.getOr(o), f = sE(u), d = f.indexOf(l);
        if (d === -1)
          return l;
        {
          const p = bl(f, d - 1), h = bl(f, d + l.length);
          return (p ? " " : "") + l + (h ? " " : "");
        }
      } else
        return l;
    }).getOr(""), PF = (e, t) => {
      const n = e.selection.getRng(), s = e.dom.create("body"), o = e.selection.getSel(), r = yf(e, Vu(o)), a = t.contextual ? AF(C.fromDom(e.getBody()), r, e.schema).dom : n.cloneContents();
      return a && s.appendChild(a), e.selection.serializer.serialize(s, t);
    }, DF = (e, t) => {
      if (t.format === "text")
        return RF(e);
      {
        const n = PF(e, t);
        return t.format === "tree" ? n : e.selection.isCollapsed() ? "" : n;
      }
    }, OF = (e, t) => ({
      ...e,
      format: t,
      get: !0,
      selection: !0,
      getInner: !0
    }), BF = (e, t, n = {}) => {
      const s = OF(n, t);
      return Yy(e, s).fold(_t, (o) => {
        const r = DF(e, o);
        return Xy(e, r, o);
      });
    }, Sd = 0, oE = 1, rE = 2, IF = (e, t) => {
      const n = e.length + t.length + 2, s = new Array(n), o = new Array(n), r = (u, f, d) => ({
        start: u,
        end: f,
        diag: d
      }), a = (u, f, d, p, h) => {
        const g = l(u, f, d, p);
        if (g === null || g.start === f && g.diag === f - p || g.end === u && g.diag === u - d) {
          let b = u, v = d;
          for (; b < f || v < p; )
            b < f && v < p && e[b] === t[v] ? (h.push([
              Sd,
              e[b]
            ]), ++b, ++v) : f - u > p - d ? (h.push([
              rE,
              e[b]
            ]), ++b) : (h.push([
              oE,
              t[v]
            ]), ++v);
        } else {
          a(u, g.start, d, g.start - g.diag, h);
          for (let b = g.start; b < g.end; ++b)
            h.push([
              Sd,
              e[b]
            ]);
          a(g.end, f, g.end - g.diag, p, h);
        }
      }, i = (u, f, d, p) => {
        let h = u;
        for (; h - f < p && h < d && e[h] === t[h - f]; )
          ++h;
        return r(u, h, f);
      }, l = (u, f, d, p) => {
        const h = f - u, g = p - d;
        if (h === 0 || g === 0)
          return null;
        const b = h - g, v = g + h, y = (v % 2 === 0 ? v : v + 1) / 2;
        s[1 + y] = u, o[1 + y] = f + 1;
        let E, S, T, O, U;
        for (E = 0; E <= y; ++E) {
          for (S = -E; S <= E; S += 2) {
            for (T = S + y, S === -E || S !== E && s[T - 1] < s[T + 1] ? s[T] = s[T + 1] : s[T] = s[T - 1] + 1, O = s[T], U = O - u + d - S; O < f && U < p && e[O] === t[U]; )
              s[T] = ++O, ++U;
            if (b % 2 !== 0 && b - E <= S && S <= b + E && o[T - b] <= s[T])
              return i(o[T - b], S + u - d, f, p);
          }
          for (S = b - E; S <= b + E; S += 2) {
            for (T = S + y - b, S === b - E || S !== b + E && o[T + 1] <= o[T - 1] ? o[T] = o[T + 1] - 1 : o[T] = o[T - 1], O = o[T] - 1, U = O - u + d - S; O >= u && U >= d && e[O] === t[U]; )
              o[T] = O--, U--;
            if (b % 2 === 0 && -E <= S && S <= E && o[T] <= s[T + b])
              return i(o[T], S + u - d, f, p);
          }
        }
        return null;
      }, c = [];
      return a(0, e.length, 0, t.length, c), c;
    }, aE = (e) => q(e) ? e.outerHTML : B(e) ? qs.encodeRaw(e.data, !1) : as(e) ? "<!--" + e.data + "-->" : "", LF = (e) => {
      let t;
      const n = document.createElement("div"), s = document.createDocumentFragment();
      for (e && (n.innerHTML = e); t = n.firstChild; )
        s.appendChild(t);
      return s;
    }, $F = (e, t, n) => {
      const s = LF(t);
      if (e.hasChildNodes() && n < e.childNodes.length) {
        const o = e.childNodes[n];
        e.insertBefore(s, o);
      } else
        e.appendChild(s);
    }, FF = (e, t) => {
      if (e.hasChildNodes() && t < e.childNodes.length) {
        const n = e.childNodes[t];
        e.removeChild(n);
      }
    }, MF = (e, t) => {
      let n = 0;
      P(e, (s) => {
        s[0] === Sd ? n++ : s[0] === oE ? ($F(t, s[1], n), n++) : s[0] === rE && FF(t, n);
      });
    }, UF = (e, t) => se(he(Ft(e.childNodes), Sn(zt, aE)), (n) => n.length > 0), zF = (e, t) => {
      const n = he(Ft(t.childNodes), aE);
      return MF(IF(n, e), t), t;
    }, HF = Os(() => document.implementation.createHTMLDocument("undo")), WF = (e) => e.querySelector("iframe") !== null, VF = (e) => ({
      type: "fragmented",
      fragments: e,
      content: "",
      bookmark: null,
      beforeBookmark: null
    }), jF = (e) => ({
      type: "complete",
      fragments: null,
      content: e,
      bookmark: null,
      beforeBookmark: null
    }), Cl = (e) => {
      const t = e.serializer.getTempAttrs(), n = TC(e.getBody(), t);
      return WF(n) ? VF(UF(n)) : jF(zt(n.innerHTML));
    }, wd = (e, t, n) => {
      const s = n ? t.beforeBookmark : t.bookmark;
      t.type === "fragmented" ? zF(t.fragments, e.getBody()) : e.setContent(t.content, {
        format: "raw",
        no_selection: M(s) && ub(s) ? !s.isFakeCaret : !0
      }), s && (e.selection.moveToBookmark(s), e.selection.scrollIntoView());
    }, kd = (e) => e.type === "fragmented" ? e.fragments.join("") : e.content, iE = (e) => {
      const t = C.fromTag("body", HF());
      return bi(t, kd(e)), P(mt(t, "*[data-mce-bogus]"), Yn), Xg(t);
    }, qF = (e, t) => kd(e) === kd(t), KF = (e, t) => iE(e) === iE(t), _d = (e, t) => !e || !t ? !1 : qF(e, t) ? !0 : KF(e, t), xd = (e) => e.get() === 0, vl = (e, t, n) => {
      xd(n) && (e.typing = t);
    }, lE = (e, t) => {
      e.typing && (vl(e, !1, t), e.add());
    }, GF = (e) => {
      e.typing && (e.typing = !1, e.add());
    }, YF = (e, t, n) => {
      xd(t) && n.set(Nu(e.selection));
    }, XF = (e, t, n, s, o, r, a) => {
      const i = Cl(e), l = L.extend(r || {}, i);
      if (!xd(s) || e.removed)
        return null;
      const c = t.data[n.get()];
      if (e.dispatch("BeforeAddUndo", {
        level: l,
        lastLevel: c,
        originalEvent: a
      }).isDefaultPrevented() || c && _d(c, l))
        return null;
      t.data[n.get()] && o.get().each((d) => {
        t.data[n.get()].beforeBookmark = d;
      });
      const u = BR(e);
      if (u && t.data.length > u) {
        for (let d = 0; d < t.data.length - 1; d++)
          t.data[d] = t.data[d + 1];
        t.data.length--, n.set(t.data.length);
      }
      l.bookmark = Nu(e.selection), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(l), n.set(t.data.length - 1);
      const f = {
        level: l,
        lastLevel: c,
        originalEvent: a
      };
      return n.get() > 0 ? (e.setDirty(!0), e.dispatch("AddUndo", f), e.dispatch("change", f)) : e.dispatch("AddUndo", f), l;
    }, ZF = (e, t, n) => {
      t.data = [], n.set(0), t.typing = !1, e.dispatch("ClearUndos");
    }, QF = (e, t, n, s, o) => {
      if (t.transact(s)) {
        const r = t.data[n.get()].bookmark, a = t.data[n.get() - 1];
        wd(e, a, !0), t.transact(o) && (t.data[n.get() - 1].beforeBookmark = r);
      }
    }, JF = (e, t, n) => {
      let s;
      return t.get() < n.length - 1 && (t.set(t.get() + 1), s = n[t.get()], wd(e, s, !1), e.setDirty(!0), e.dispatch("Redo", { level: s })), s;
    }, eM = (e, t, n, s) => {
      let o;
      return t.typing && (t.add(), t.typing = !1, vl(t, !1, n)), s.get() > 0 && (s.set(s.get() - 1), o = t.data[s.get()], wd(e, o, !0), e.setDirty(!0), e.dispatch("Undo", { level: o })), o;
    }, tM = (e) => {
      e.clear(), e.add();
    }, nM = (e, t, n) => n.get() > 0 || t.typing && t.data[0] && !_d(Cl(e), t.data[0]), sM = (e, t) => t.get() < e.data.length - 1 && !e.typing, oM = (e, t, n) => (lE(e, t), e.beforeChange(), e.ignore(n), e.add()), rM = (e, t) => {
      try {
        e.set(e.get() + 1), t();
      } finally {
        e.set(e.get() - 1);
      }
    }, aM = (e, t) => {
      const n = e.dom, s = M(t) ? t : e.getBody();
      P(n.select("table,a", s), (o) => {
        switch (o.nodeName) {
          case "TABLE":
            const r = UR(e), a = n.getAttrib(o, "border");
            (!a || a === "0") && e.hasVisual ? n.addClass(o, r) : n.removeClass(o, r);
            break;
          case "A":
            if (!n.getAttrib(o, "href")) {
              const i = n.getAttrib(o, "name") || o.id, l = Mh(e);
              i && e.hasVisual ? n.addClass(o, l) : n.removeClass(o, l);
            }
            break;
        }
      }), e.dispatch("VisualAid", {
        element: t,
        hasVisual: e.hasVisual
      });
    }, cE = (e) => ({
      init: { bindEvents: ce },
      undoManager: {
        beforeChange: (t, n) => YF(e, t, n),
        add: (t, n, s, o, r, a) => XF(e, t, n, s, o, r, a),
        undo: (t, n, s) => eM(e, t, n, s),
        redo: (t, n) => JF(e, t, n),
        clear: (t, n) => ZF(e, t, n),
        reset: (t) => tM(t),
        hasUndo: (t, n) => nM(e, t, n),
        hasRedo: (t, n) => sM(t, n),
        transact: (t, n, s) => oM(t, n, s),
        ignore: (t, n) => rM(t, n),
        extra: (t, n, s, o) => QF(e, t, n, s, o)
      },
      formatter: {
        match: (t, n, s, o) => ed(e, t, n, s, o),
        matchAll: (t, n) => SL(e, t, n),
        matchNode: (t, n, s, o) => Bn(e, t, n, s, o),
        canApply: (t) => kL(e, t),
        closest: (t) => wL(e, t),
        apply: (t, n, s) => uy(e, t, n, s),
        remove: (t, n, s, o) => iy(e, t, n, s, o),
        toggle: (t, n, s) => c$(e, t, n, s),
        formatChanged: (t, n, s, o, r) => l$(e, t, n, s, o, r)
      },
      editor: {
        getContent: (t) => GB(e, t),
        setContent: (t, n) => yL(e, t, n),
        insertContent: (t, n) => hL(e, t, n),
        addVisual: (t) => aM(e, t)
      },
      selection: { getContent: (t, n) => BF(e, t, n) },
      autocompleter: {
        addDecoration: (t) => DB(e, t),
        removeDecoration: () => BB(e, C.fromDom(e.getBody()))
      },
      raw: { getModel: () => m.none() }
    }), iM = (e) => {
      const t = (c) => vt(c) ? c : {}, { init: n, undoManager: s, formatter: o, editor: r, selection: a, autocompleter: i, raw: l } = e;
      return {
        init: { bindEvents: n.bindEvents },
        undoManager: {
          beforeChange: s.beforeChange,
          add: s.add,
          undo: s.undo,
          redo: s.redo,
          clear: s.clear,
          reset: s.reset,
          hasUndo: s.hasUndo,
          hasRedo: s.hasRedo,
          transact: (c, u, f) => s.transact(f),
          ignore: (c, u) => s.ignore(u),
          extra: (c, u, f, d) => s.extra(f, d)
        },
        formatter: {
          match: (c, u, f, d) => o.match(c, t(u), d),
          matchAll: o.matchAll,
          matchNode: o.matchNode,
          canApply: (c) => o.canApply(c),
          closest: (c) => o.closest(c),
          apply: (c, u, f) => o.apply(c, t(u)),
          remove: (c, u, f, d) => o.remove(c, t(u)),
          toggle: (c, u, f) => o.toggle(c, t(u)),
          formatChanged: (c, u, f, d, p) => o.formatChanged(u, f, d, p)
        },
        editor: {
          getContent: (c) => r.getContent(c),
          setContent: (c, u) => ({
            content: r.setContent(c, u),
            html: ""
          }),
          insertContent: (c, u) => (r.insertContent(c), ""),
          addVisual: r.addVisual
        },
        selection: { getContent: (c, u) => a.getContent(u) },
        autocompleter: {
          addDecoration: i.addDecoration,
          removeDecoration: i.removeDecoration
        },
        raw: { getModel: () => m.some(l.getRawModel()) }
      };
    }, lM = () => {
      const e = V(null), t = V("");
      return {
        init: { bindEvents: ce },
        undoManager: {
          beforeChange: ce,
          add: e,
          undo: e,
          redo: e,
          clear: ce,
          reset: ce,
          hasUndo: Le,
          hasRedo: Le,
          transact: e,
          ignore: ce,
          extra: ce
        },
        formatter: {
          match: Le,
          matchAll: V([]),
          matchNode: V(void 0),
          canApply: Le,
          closest: t,
          apply: ce,
          remove: ce,
          toggle: ce,
          formatChanged: V({ unbind: ce })
        },
        editor: {
          getContent: t,
          setContent: V({
            content: "",
            html: ""
          }),
          insertContent: V(""),
          addVisual: ce
        },
        selection: { getContent: t },
        autocompleter: {
          addDecoration: ce,
          removeDecoration: ce
        },
        raw: { getModel: V(m.none()) }
      };
    }, In = (e) => oe(e.plugins, "rtc"), cM = (e) => Re(e.plugins, "rtc").bind((t) => m.from(t.setup)), uM = (e) => {
      const t = e;
      return cM(e).fold(() => (t.rtcInstance = cE(e), m.none()), (n) => (t.rtcInstance = lM(), m.some(() => n().then((s) => (t.rtcInstance = iM(s), s.rtc.isRemote)))));
    }, Nd = (e) => e.rtcInstance ? e.rtcInstance : cE(e), ze = (e) => {
      const t = e.rtcInstance;
      if (t)
        return t;
      throw new Error("Failed to get RTC instance not yet initialized.");
    }, fM = (e, t, n) => {
      ze(e).undoManager.beforeChange(t, n);
    }, dM = (e, t, n, s, o, r, a) => ze(e).undoManager.add(t, n, s, o, r, a), mM = (e, t, n, s) => ze(e).undoManager.undo(t, n, s), gM = (e, t, n) => ze(e).undoManager.redo(t, n), pM = (e, t, n) => {
      ze(e).undoManager.clear(t, n);
    }, hM = (e, t) => {
      ze(e).undoManager.reset(t);
    }, bM = (e, t, n) => ze(e).undoManager.hasUndo(t, n), CM = (e, t, n) => ze(e).undoManager.hasRedo(t, n), vM = (e, t, n, s) => ze(e).undoManager.transact(t, n, s), yM = (e, t, n) => {
      ze(e).undoManager.ignore(t, n);
    }, EM = (e, t, n, s, o) => {
      ze(e).undoManager.extra(t, n, s, o);
    }, SM = (e, t, n, s, o) => ze(e).formatter.match(t, n, s, o), wM = (e, t, n) => ze(e).formatter.matchAll(t, n), kM = (e, t, n, s, o) => ze(e).formatter.matchNode(t, n, s, o), _M = (e, t) => ze(e).formatter.canApply(t), xM = (e, t) => ze(e).formatter.closest(t), NM = (e, t, n, s) => {
      ze(e).formatter.apply(t, n, s);
    }, AM = (e, t, n, s, o) => {
      ze(e).formatter.remove(t, n, s, o);
    }, TM = (e, t, n, s) => {
      ze(e).formatter.toggle(t, n, s);
    }, RM = (e, t, n, s, o, r) => ze(e).formatter.formatChanged(t, n, s, o, r), PM = (e, t) => Nd(e).editor.getContent(t), DM = (e, t, n) => Nd(e).editor.setContent(t, n), OM = (e, t, n) => Nd(e).editor.insertContent(t, n), BM = (e, t, n) => ze(e).selection.getContent(t, n), IM = (e, t) => ze(e).editor.addVisual(t), uE = (e) => ze(e).init.bindEvents(), LM = (e, t) => ze(e).autocompleter.addDecoration(t), $M = (e) => ze(e).autocompleter.removeDecoration(), FM = (e, t = {}) => {
      const n = t.format ? t.format : "html";
      return BM(e, n, t);
    }, fE = (e) => e.dom.length === 0 ? (Pe(e), m.none()) : m.some(e), MM = (e, t) => e.filter((n) => da.isBookmarkNode(n.dom)).bind(t ? Pr : Is), UM = (e, t, n, s, o) => {
      const r = e.dom, a = t.dom, i = s ? r.length : a.length;
      s ? (Pf(r, a, o, !1, !s), n.setStart(a, i)) : (Pf(a, r, o, !1, !s), n.setEnd(a, i));
    }, zM = (e, t, n) => {
      on(e).each((s) => {
        const o = e.dom;
        t && ba(s, N(o, 0), n) ? al(o, 0, n) : !t && Ca(s, N(o, o.length), n) && Rf(o, o.length, n);
      });
    }, dE = (e, t, n, s, o) => {
      e.bind((r) => ((s ? Rf : al)(r.dom, s ? r.dom.length : 0, o), t.filter(jt).map((i) => UM(r, i, n, s, o)))).orThunk(() => MM(t, s).or(t).filter(jt).map((a) => zM(a, s, o)));
    }, HM = (e, t, n) => {
      const s = m.from(t.firstChild).map(C.fromDom), o = m.from(t.lastChild).map(C.fromDom);
      e.deleteContents(), e.insertNode(t);
      const r = s.bind(Is).filter(jt).bind(fE), a = o.bind(Pr).filter(jt).bind(fE);
      dE(r, s, e, !0, n), dE(a, o, e, !1, n), e.collapse(!1);
    }, WM = (e, t) => ({
      format: "html",
      ...e,
      set: !0,
      selection: !0,
      content: t
    }), VM = (e, t) => {
      if (t.format !== "raw") {
        const n = e.selection.getRng(), s = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock), o = s ? { context: s.nodeName.toLowerCase() } : {}, r = e.parser.parse(t.content, {
          forced_root_block: !1,
          ...o,
          ...t
        });
        return hs({ validate: !1 }, e.schema).serialize(r);
      } else
        return t.content;
    }, jM = (e, t, n = {}) => {
      const s = WM(n, t);
      vd(e, s).each((o) => {
        const r = VM(e, o), a = e.selection.getRng();
        HM(a, a.createContextualFragment(r), e.schema), e.selection.setRng(a), ga(e, a), yd(e, r, o);
      });
    }, mE = (e, t, n) => {
      if (oe(e, t)) {
        const s = se(e[t], (o) => o !== n);
        s.length === 0 ? delete e[t] : e[t] = s;
      }
    };
    var qM = (e, t) => {
      let n, s;
      const o = (i, l) => Ye(l, (c) => e.is(c, i)), r = (i) => e.getParents(i, void 0, e.getRoot()), a = () => {
        n = {}, s = {}, t.on("NodeChange", (i) => {
          const l = i.element, c = r(l), u = {};
          Ae(n, (f, d) => {
            o(d, c).each((p) => {
              s[d] || (P(f, (h) => {
                h(!0, {
                  node: p,
                  selector: d,
                  parents: c
                });
              }), s[d] = f), u[d] = f;
            });
          }), Ae(s, (f, d) => {
            u[d] || (delete s[d], P(f, (p) => {
              p(!1, {
                node: l,
                selector: d,
                parents: c
              });
            }));
          });
        });
      };
      return {
        selectorChangedWithUnbind: (i, l) => (n || a(), n[i] || (n[i] = []), n[i].push(l), o(i, r(t.selection.getStart())).each(() => {
          s[i] = n[i];
        }), {
          unbind: () => {
            mE(n, i, l), mE(s, i, l);
          }
        })
      };
    };
    const gE = (e) => !!(e && e.ownerDocument) && jn(C.fromDom(e.ownerDocument), C.fromDom(e)), KM = (e) => e ? gE(e.startContainer) && gE(e.endContainer) : !1, pE = (e, t, n, s) => {
      let o, r;
      const { selectorChangedWithUnbind: a } = qM(e, s), i = (F, K) => {
        const ge = e.createRng();
        M(F) && M(K) ? (ge.setStart(F, K), ge.setEnd(F, K), S(ge), v(!1)) : (Ku(e, ge, s.getBody(), !0), S(ge));
      }, l = (F) => FM(s, F), c = (F, K) => jM(s, F, K), u = (F) => bC(s.getBody(), E(), F), f = (F) => CC(s.getBody(), E(), F), d = (F, K) => nt.getBookmark(F, K), p = (F) => nt.moveToBookmark(F), h = (F, K) => (kB(e, F, K).each(S), F), g = () => {
        const F = E(), K = y();
        return !F || F.item ? !1 : F.compareEndPoints ? F.compareEndPoints("StartToEnd", F) === 0 : !K || F.collapsed;
      }, b = () => {
        const F = E(), K = s.getBody().querySelectorAll('[data-mce-selected="1"]');
        return K.length > 0 ? zn(K, (ge) => e.isEditable(ge.parentElement)) : pC(e, F);
      }, v = (F) => {
        const K = E();
        K.collapse(!!F), S(K);
      }, y = () => t.getSelection ? t.getSelection() : t.document.selection, E = () => {
        let F;
        const K = (de, G, Y) => {
          try {
            return G.compareBoundaryPoints(de, Y);
          } catch {
            return -1;
          }
        }, ge = t.document;
        if (M(s.bookmark) && !ro(s)) {
          const de = gf(s);
          if (de.isSome())
            return de.map((G) => yf(s, [G])[0]).getOr(ge.createRange());
        }
        try {
          const de = y();
          de && !vi(de.anchorNode) && (de.rangeCount > 0 ? F = de.getRangeAt(0) : F = ge.createRange(), F = yf(s, [F])[0]);
        } catch {
        }
        if (F || (F = ge.createRange()), Lr(F.startContainer) && F.collapsed) {
          const de = e.getRoot();
          F.setStart(de, 0), F.setEnd(de, 0);
        }
        return o && r && (K(F.START_TO_START, F, o) === 0 && K(F.END_TO_END, F, o) === 0 ? F = r : (o = null, r = null)), F;
      }, S = (F, K) => {
        if (!KM(F))
          return;
        const ge = y();
        if (F = s.dispatch("SetSelectionRange", {
          range: F,
          forward: K
        }).range, ge) {
          r = F;
          try {
            ge.removeAllRanges(), ge.addRange(F);
          } catch {
          }
          K === !1 && ge.extend && (ge.collapse(F.endContainer, F.endOffset), ge.extend(F.startContainer, F.startOffset)), o = ge.rangeCount > 0 ? ge.getRangeAt(0) : null;
        }
        if (!F.collapsed && F.startContainer === F.endContainer && (ge != null && ge.setBaseAndExtent) && F.endOffset - F.startOffset < 2 && F.startContainer.hasChildNodes()) {
          const G = F.startContainer.childNodes[F.startOffset];
          G && G.nodeName === "IMG" && (ge.setBaseAndExtent(F.startContainer, F.startOffset, F.endContainer, F.endOffset), (ge.anchorNode !== F.startContainer || ge.focusNode !== F.endContainer) && ge.setBaseAndExtent(G, 0, G, 1));
        }
        s.dispatch("AfterSetSelectionRange", {
          range: F,
          forward: K
        });
      }, T = (F) => (c(e.getOuterHTML(F)), F), O = () => SB(s.getBody(), E()), U = (F, K) => wB(e, E(), F, K), A = () => {
        const F = y(), K = F == null ? void 0 : F.anchorNode, ge = F == null ? void 0 : F.focusNode;
        if (!F || !K || !ge || vi(K) || vi(ge))
          return !0;
        const de = e.createRng(), G = e.createRng();
        try {
          de.setStart(K, F.anchorOffset), de.collapse(!0), G.setStart(ge, F.focusOffset), G.collapse(!0);
        } catch {
          return !0;
        }
        return de.compareBoundaryPoints(de.START_TO_START, G) <= 0;
      }, Ie = {
        dom: e,
        win: t,
        serializer: n,
        editor: s,
        expand: (F = { type: "word" }) => S(oo(e).expand(E(), F)),
        collapse: v,
        setCursorLocation: i,
        getContent: l,
        setContent: c,
        getBookmark: d,
        moveToBookmark: p,
        select: h,
        isCollapsed: g,
        isEditable: b,
        isForward: A,
        setNode: T,
        getNode: O,
        getSel: y,
        setRng: S,
        getRng: E,
        getStart: u,
        getEnd: f,
        getSelectedBlocks: U,
        normalize: () => {
          const F = E(), K = y();
          if (!iD(K) && Ki(s)) {
            const ge = el(e, F);
            return ge.each((de) => {
              S(de, A());
            }), ge.getOr(F);
          }
          return F;
        },
        selectorChanged: (F, K) => (a(F, K), Ie),
        selectorChangedWithUnbind: a,
        getScrollContainer: () => {
          let F, K = e.getRoot();
          for (; K && K.nodeName !== "BODY"; ) {
            if (K.scrollHeight > K.clientHeight) {
              F = K;
              break;
            }
            K = K.parentNode;
          }
          return F;
        },
        scrollIntoView: (F, K) => {
          M(F) ? qO(s, F, K) : ga(s, E(), K);
        },
        placeCaretAt: (F, K) => S(Gb(F, K, s.getDoc())),
        getBoundingClientRect: () => {
          const F = E();
          return F.collapsed ? N.fromRangeStart(F).getClientRects()[0] : F.getBoundingClientRect();
        },
        destroy: () => {
          t = o = r = null, Ve.destroy();
        }
      }, nt = da(Ie), Ve = Wb(Ie, s);
      return Ie.bookmarkManager = nt, Ie.controlSelection = Ve, Ie;
    }, GM = (e, t, n) => {
      e.addAttributeFilter("data-mce-tabindex", (s, o) => {
        let r = s.length;
        for (; r--; ) {
          const a = s[r];
          a.attr("tabindex", a.attr("data-mce-tabindex")), a.attr(o, null);
        }
      }), e.addAttributeFilter("src,href,style", (s, o) => {
        const r = "data-mce-" + o, a = t.url_converter, i = t.url_converter_scope;
        let l = s.length;
        for (; l--; ) {
          const c = s[l];
          let u = c.attr(r);
          u !== void 0 ? (c.attr(o, u.length > 0 ? u : null), c.attr(r, null)) : (u = c.attr(o), o === "style" ? u = n.serializeStyle(n.parseStyle(u), c.name) : a && (u = a.call(i, u, o, c.name)), c.attr(o, u.length > 0 ? u : null));
        }
      }), e.addAttributeFilter("class", (s) => {
        let o = s.length;
        for (; o--; ) {
          const r = s[o];
          let a = r.attr("class");
          a && (a = a.replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), r.attr("class", a.length > 0 ? a : null));
        }
      }), e.addAttributeFilter("data-mce-type", (s, o, r) => {
        let a = s.length;
        for (; a--; ) {
          const i = s[a];
          i.attr("data-mce-type") === "bookmark" && !r.cleanup && (m.from(i.firstChild).exists((c) => {
            var u;
            return !ki((u = c.value) !== null && u !== void 0 ? u : "");
          }) ? i.unwrap() : i.remove());
        }
      }), e.addNodeFilter("script,style", (s, o) => {
        var r;
        const a = (l) => l.replace(/(<!--\[CDATA\[|\]\]-->)/g, `
`).replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
        let i = s.length;
        for (; i--; ) {
          const l = s[i], c = l.firstChild, u = (r = c == null ? void 0 : c.value) !== null && r !== void 0 ? r : "";
          if (o === "script") {
            const f = l.attr("type");
            f && l.attr("type", f === "mce-no/type" ? null : f.replace(/^mce\-/, "")), t.element_format === "xhtml" && c && u.length > 0 && (c.value = `// <![CDATA[
` + a(u) + `
// ]]>`);
          } else
            t.element_format === "xhtml" && c && u.length > 0 && (c.value = `<!--
` + a(u) + `
-->`);
        }
      }), e.addNodeFilter("#comment", (s) => {
        let o = s.length;
        for (; o--; ) {
          const r = s[o], a = r.value;
          t.preserve_cdata && (a == null ? void 0 : a.indexOf("[CDATA[")) === 0 ? (r.name = "#cdata", r.type = 4, r.value = n.decode(a.replace(/^\[CDATA\[|\]\]$/g, ""))) : (a == null ? void 0 : a.indexOf("mce:protected ")) === 0 && (r.name = "#text", r.type = 3, r.raw = !0, r.value = unescape(a).substr(14));
        }
      }), e.addNodeFilter("xml:namespace,input", (s, o) => {
        let r = s.length;
        for (; r--; ) {
          const a = s[r];
          a.type === 7 ? a.remove() : a.type === 1 && o === "input" && !a.attr("type") && a.attr("type", "text");
        }
      }), e.addAttributeFilter("data-mce-type", (s) => {
        P(s, (o) => {
          o.attr("data-mce-type") === "format-caret" && (o.isEmpty(e.schema.getNonEmptyElements()) ? o.remove() : o.unwrap());
        });
      }), e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-block,data-mce-type,data-mce-resize,data-mce-placeholder", (s, o) => {
        let r = s.length;
        for (; r--; )
          s[r].attr(o, null);
      }), t.remove_trailing_brs && Cy(t, e, e.schema);
    }, YM = (e) => {
      const t = (s) => (s == null ? void 0 : s.name) === "br", n = e.lastChild;
      if (t(n)) {
        const s = n.prev;
        t(s) && (n.remove(), s.remove());
      }
    }, XM = (e, t, n) => {
      let s;
      const o = e.dom;
      let r = t.cloneNode(!0);
      const a = document.implementation;
      if (a.createHTMLDocument) {
        const i = a.createHTMLDocument("");
        L.each(r.nodeName === "BODY" ? r.childNodes : [r], (l) => {
          i.body.appendChild(i.importNode(l, !0));
        }), r.nodeName !== "BODY" ? r = i.body.firstChild : r = i.body, s = o.doc, o.doc = i;
      }
      return OD(e, {
        ...n,
        node: r
      }), s && (o.doc = s), r;
    }, ZM = (e, t) => M(e) && e.hasEventListeners("PreProcess") && !t.no_events, QM = (e, t, n) => ZM(e, n) ? XM(e, t, n) : t, JM = (e, t, n) => {
      L.inArray(t, n) === -1 && (e.addAttributeFilter(n, (s, o) => {
        let r = s.length;
        for (; r--; )
          s[r].attr(o, null);
      }), t.push(n));
    }, eU = (e, t, n) => !t.no_events && e ? BD(e, {
      ...t,
      content: n
    }).content : n, tU = (e, t, n) => {
      const s = zt(n.getInner ? t.innerHTML : e.getOuterHTML(t));
      return n.selection || wi(C.fromDom(t)) ? s : L.trim(s);
    }, nU = (e, t, n) => {
      const s = n.selection ? {
        forced_root_block: !1,
        ...n
      } : n, o = e.parse(t, s);
      return YM(o), o;
    }, sU = (e, t, n) => hs(e, t).serialize(n), oU = (e, t, n, s, o) => {
      const r = sU(t, n, s);
      return eU(e, o, r);
    }, rU = (e, t) => {
      const n = ["data-mce-selected"], s = {
        entity_encoding: "named",
        remove_trailing_brs: !0,
        pad_empty_with_br: !1,
        ...e
      }, o = t && t.dom ? t.dom : Ne.DOM, r = t && t.schema ? t.schema : us(s), a = Xo(s, r);
      GM(a, s, o);
      const i = (l, c = {}) => {
        const u = {
          format: "html",
          ...c
        }, f = QM(t, l, u), d = tU(o, f, u), p = nU(a, d, u);
        return u.format === "tree" ? p : oU(t, s, r, p, u);
      };
      return {
        schema: r,
        addNodeFilter: a.addNodeFilter,
        addAttributeFilter: a.addAttributeFilter,
        serialize: i,
        addRules: r.addValidElements,
        setRules: r.setValidElements,
        addTempAttr: j(JM, a, n),
        getTempAttrs: V(n),
        getNodeFilters: a.getNodeFilters,
        getAttributeFilters: a.getAttributeFilters,
        removeNodeFilter: a.removeNodeFilter,
        removeAttributeFilter: a.removeAttributeFilter
      };
    }, hE = (e, t) => {
      const n = rU(e, t);
      return {
        schema: n.schema,
        addNodeFilter: n.addNodeFilter,
        addAttributeFilter: n.addAttributeFilter,
        serialize: n.serialize,
        addRules: n.addRules,
        setRules: n.setRules,
        addTempAttr: n.addTempAttr,
        getTempAttrs: n.getTempAttrs,
        getNodeFilters: n.getNodeFilters,
        getAttributeFilters: n.getAttributeFilters,
        removeNodeFilter: n.removeNodeFilter,
        removeAttributeFilter: n.removeAttributeFilter
      };
    }, aU = "html", iU = (e, t) => ({
      ...e,
      format: t,
      get: !0,
      getInner: !0
    }), lU = (e, t = {}) => {
      const n = t.format ? t.format : aU, s = iU(t, n);
      return Yy(e, s).fold(_t, (o) => {
        const r = PM(e, o);
        return Xy(e, r, o);
      });
    }, cU = "html", uU = (e, t) => ({
      format: cU,
      ...e,
      set: !0,
      content: t
    }), Ad = (e, t, n = {}) => {
      const s = uU(n, t);
      return vd(e, s).map((o) => {
        const r = DM(e, o.content, o);
        return yd(e, r.html, o), r.content;
      }).getOr(t);
    }, fU = "autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(","), dU = "template_cdate_classes,template_mdate_classes,template_selected_content_classes,template_preview_replace_values,template_replace_values,templates,template_cdate_format,template_mdate_format".split(","), mU = "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","), bE = [
      {
        name: "template",
        replacedWith: "Advanced Template"
      },
      { name: "rtc" }
    ], CE = (e, t) => {
      const n = se(t, (s) => oe(e, s));
      return Rs(n);
    }, gU = (e) => {
      const t = CE(e, fU), n = e.forced_root_block;
      return (n === !1 || n === "") && t.push("forced_root_block (false only)"), Rs(t);
    }, pU = (e) => CE(e, dU), vE = (e, t) => {
      const n = L.makeMap(e.plugins, " "), o = se(t, (r) => oe(n, r));
      return Rs(o);
    }, hU = (e) => vE(e, mU), bU = (e) => vE(e, bE.map((t) => t.name)), CU = (e, t) => {
      const n = gU(e), s = hU(t), o = s.length > 0, r = n.length > 0, a = t.theme === "mobile";
      if (o || r || a) {
        const i = `
- `, l = a ? `

Themes:${i}mobile` : "", c = o ? `

Plugins:${i}${s.join(i)}` : "", u = r ? `

Options:${i}${n.join(i)}` : "";
        console.warn("The following deprecated features are currently enabled and have been removed in TinyMCE 6.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/ for more information." + l + c + u);
      }
    }, vU = (e) => Ye(bE, (t) => t.name === e).fold(() => e, (t) => t.replacedWith ? `${e}, replaced by ${t.replacedWith}` : e), yU = (e, t) => {
      const n = pU(e), s = bU(t), o = s.length > 0, r = n.length > 0;
      if (o || r) {
        const a = `
- `, i = o ? `

Plugins:${a}${s.map(vU).join(a)}` : "", l = r ? `

Options:${a}${n.join(a)}` : "";
        console.warn("The following deprecated features are currently enabled but will be removed soon." + i + l);
      }
    }, EU = (e, t) => {
      CU(e, t), yU(e, t);
    }, yl = Ne.DOM, SU = (e) => {
      yl.setStyle(e.id, "display", e.orgDisplay);
    }, El = (e) => m.from(e).each((t) => t.destroy()), wU = (e) => {
      const t = e;
      t.contentAreaContainer = t.formElement = t.container = t.editorContainer = null, t.bodyElement = t.contentDocument = t.contentWindow = null, t.iframeElement = t.targetElm = null;
      const n = e.selection;
      if (n) {
        const s = n.dom;
        t.selection = n.win = n.dom = s.doc = null;
      }
    }, kU = (e) => {
      const t = e.formElement;
      t && (t._mceOldSubmit && (t.submit = t._mceOldSubmit, delete t._mceOldSubmit), yl.unbind(t, "submit reset", e.formEventDelegate));
    }, _U = (e) => {
      if (!e.removed) {
        const { _selectionOverrides: t, editorUpload: n } = e, s = e.getBody(), o = e.getElement();
        s && e.save({ is_removing: !0 }), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && M(o == null ? void 0 : o.nextSibling) && yl.remove(o.nextSibling), ID(e), e.editorManager.remove(e), !e.inline && s && SU(e), LD(e), yl.remove(e.getContainer()), El(t), El(n), e.destroy();
      }
    }, xU = (e, t) => {
      const { selection: n, dom: s } = e;
      if (!e.destroyed) {
        if (!t && !e.removed) {
          e.remove();
          return;
        }
        t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), El(n), El(s)), kU(e), wU(e), e.destroyed = !0;
      }
    }, Sl = (() => {
      const e = {};
      return {
        add: (o, r) => {
          e[o] = r;
        },
        get: (o) => e[o] ? e[o] : { icons: {} },
        has: (o) => oe(e, o)
      };
    })(), Zo = yt.ModelManager, yE = (e, t) => t.dom[e], EE = (e, t) => parseInt(Nn(t, e), 10), NU = j(yE, "clientWidth"), AU = j(yE, "clientHeight"), TU = j(EE, "margin-top"), RU = j(EE, "margin-left"), PU = (e) => e.dom.getBoundingClientRect(), DU = (e, t, n) => {
      const s = NU(e), o = AU(e);
      return t >= 0 && n >= 0 && t <= s && n <= o;
    }, OU = (e, t, n, s) => {
      const o = PU(t), r = e ? o.left + t.dom.clientLeft + RU(t) : 0, a = e ? o.top + t.dom.clientTop + TU(t) : 0, i = n - r, l = s - a;
      return {
        x: i,
        y: l
      };
    }, BU = (e, t, n) => {
      const s = C.fromDom(e.getBody()), o = e.inline ? s : Ox(s), r = OU(e.inline, o, t, n);
      return DU(o, r.x, r.y);
    }, IU = (e) => m.from(e).map(C.fromDom), LU = (e) => {
      const t = e.inline ? e.getBody() : e.getContentAreaContainer();
      return IU(t).map(Ro).getOr(!1);
    };
    var $U = () => {
      const e = () => {
        throw new Error("Theme did not provide a NotificationManager implementation.");
      };
      return {
        open: e,
        close: e,
        getArgs: e
      };
    };
    const SE = (e) => {
      const t = [], n = () => {
        const d = e.theme;
        return d && d.getNotificationManagerImpl ? d.getNotificationManagerImpl() : $U();
      }, s = () => m.from(t[0]), o = (d, p) => d.type === p.type && d.text === p.text && !d.progressBar && !d.timeout && !p.progressBar && !p.timeout, r = () => {
        P(t, (d) => {
          d.reposition();
        });
      }, a = (d) => {
        t.push(d);
      }, i = (d) => {
        vr(t, (p) => p === d).each((p) => {
          t.splice(p, 1);
        });
      }, l = (d, p = !0) => e.removed || !LU(e) ? {} : (p && e.dispatch("BeforeOpenNotification", { notification: d }), Ye(t, (h) => o(n().getArgs(h), d)).getOrThunk(() => {
        e.editorManager.setActive(e);
        const h = n().open(d, () => {
          i(h), r(), gC(e) && s().fold(() => e.focus(), (g) => iC(C.fromDom(g.getEl())));
        });
        return a(h), r(), e.dispatch("OpenNotification", { notification: { ...h } }), h;
      })), c = () => {
        s().each((d) => {
          n().close(d), i(d), r();
        });
      }, u = V(t);
      return ((d) => {
        d.on("SkinLoaded", () => {
          const p = SR(d);
          p && l({
            text: p,
            type: "warning",
            timeout: 0
          }, !1), r();
        }), d.on("show ResizeEditor ResizeWindow NodeChange", () => {
          requestAnimationFrame(r);
        }), d.on("remove", () => {
          P(t.slice(), (p) => {
            n().close(p);
          });
        });
      })(e), {
        open: l,
        close: c,
        getNotifications: u
      };
    }, Qo = yt.PluginManager, fo = yt.ThemeManager;
    var FU = () => {
      const e = () => {
        throw new Error("Theme did not provide a WindowManager implementation.");
      };
      return {
        open: e,
        openUrl: e,
        alert: e,
        confirm: e,
        close: e
      };
    };
    const wE = (e) => {
      let t = [];
      const n = () => {
        const g = e.theme;
        return g && g.getWindowManagerImpl ? g.getWindowManagerImpl() : FU();
      }, s = (g, b) => (...v) => b ? b.apply(g, v) : void 0, o = (g) => {
        e.dispatch("OpenWindow", { dialog: g });
      }, r = (g) => {
        e.dispatch("CloseWindow", { dialog: g });
      }, a = (g) => {
        t.push(g), o(g);
      }, i = (g) => {
        r(g), t = se(t, (b) => b !== g), t.length === 0 && e.focus();
      }, l = () => m.from(t[t.length - 1]), c = (g) => {
        e.editorManager.setActive(e), mf(e), e.ui.show();
        const b = g();
        return a(b), b;
      }, u = (g, b) => c(() => n().open(g, b, i)), f = (g) => c(() => n().openUrl(g, i)), d = (g, b, v) => {
        const y = n();
        y.alert(g, s(v || y, b));
      }, p = (g, b, v) => {
        const y = n();
        y.confirm(g, s(v || y, b));
      }, h = () => {
        l().each((g) => {
          n().close(g), i(g);
        });
      };
      return e.on("remove", () => {
        P(t, (g) => {
          n().close(g);
        });
      }), {
        open: u,
        openUrl: f,
        alert: d,
        confirm: p,
        close: h
      };
    }, kE = (e, t) => {
      e.notificationManager.open({
        type: "error",
        text: t
      });
    }, wl = (e, t) => {
      e._skinLoaded ? kE(e, t) : e.on("SkinLoaded", () => {
        kE(e, t);
      });
    }, MU = (e, t) => {
      wl(e, bn.translate([
        "Failed to upload image: {0}",
        t
      ]));
    }, Ta = (e, t, n) => {
      Lb(e, t, { message: n }), console.error(n);
    }, Ra = (e, t, n) => n ? `Failed to load ${e}: ${n} from url ${t}` : `Failed to load ${e} url: ${t}`, UU = (e, t, n) => {
      Ta(e, "PluginLoadError", Ra("plugin", t, n));
    }, zU = (e, t, n) => {
      Ta(e, "IconsLoadError", Ra("icons", t, n));
    }, HU = (e, t, n) => {
      Ta(e, "LanguageLoadError", Ra("language", t, n));
    }, WU = (e, t, n) => {
      Ta(e, "ThemeLoadError", Ra("theme", t, n));
    }, VU = (e, t, n) => {
      Ta(e, "ModelLoadError", Ra("model", t, n));
    }, jU = (e, t, n) => {
      const s = bn.translate([
        "Failed to initialize plugin: {0}",
        t
      ]);
      Lb(e, "PluginLoadError", { message: s }), kl(s, n), wl(e, s);
    }, kl = (e, ...t) => {
      const n = window.console;
      n && (n.error ? n.error(e, ...t) : n.log(e, ...t));
    }, qU = (e) => /^[a-z0-9\-]+$/i.test(e), Td = (e) => "content/" + e + "/content.css", KU = (e) => tinymce.Resource.has(Td(e)), GU = (e) => _E(e, hR(e)), YU = (e) => _E(e, Bh(e)), _E = (e, t) => {
      const n = e.editorManager.baseURL + "/skins/content", o = `content${e.editorManager.suffix}.css`;
      return he(t, (r) => KU(r) ? r : qU(r) && !e.inline ? `${n}/${r}/${o}` : e.documentBaseURI.toAbsolute(r));
    }, XU = (e) => {
      e.contentCSS = e.contentCSS.concat(GU(e), YU(e));
    }, ZU = (e) => e ? Ft(e.getElementsByTagName("img")) : [], QU = (e, t) => {
      const n = {};
      return { findAll: (o, r = He) => {
        const a = se(ZU(o), (l) => {
          const c = l.src;
          return l.hasAttribute("data-mce-bogus") || l.hasAttribute("data-mce-placeholder") || !c || c === be.transparentSrc ? !1 : st(c, "blob:") ? !e.isUploaded(c) && r(l) : st(c, "data:") ? r(l) : !1;
        }), i = he(a, (l) => {
          const c = l.src;
          if (oe(n, c))
            return n[c].then((u) => J(u) ? u : {
              image: l,
              blobInfo: u.blobInfo
            });
          {
            const u = E$(t, c).then((f) => (delete n[c], {
              image: l,
              blobInfo: f
            })).catch((f) => (delete n[c], f));
            return n[c] = u, u;
          }
        });
        return Promise.all(i);
      } };
    }, xE = () => {
      let n = {};
      const s = (d, p) => ({
        status: d,
        resultUri: p
      }), o = (d) => d in n;
      return {
        hasBlobUri: o,
        getResultUri: (d) => {
          const p = n[d];
          return p ? p.resultUri : null;
        },
        isPending: (d) => o(d) ? n[d].status === 1 : !1,
        isUploaded: (d) => o(d) ? n[d].status === 2 : !1,
        markPending: (d) => {
          n[d] = s(1, null);
        },
        markUploaded: (d, p) => {
          n[d] = s(2, p);
        },
        removeFailed: (d) => {
          delete n[d];
        },
        destroy: () => {
          n = {};
        }
      };
    };
    let JU = 0;
    const ez = () => {
      const e = () => Math.round(Math.random() * 4294967295).toString(36);
      return "s" + (/* @__PURE__ */ new Date()).getTime().toString(36) + e() + e() + e();
    }, tz = (e) => e + JU++ + ez(), nz = () => {
      let e = [];
      const t = (f) => ({
        "image/jpeg": "jpg",
        "image/jpg": "jpg",
        "image/gif": "gif",
        "image/png": "png",
        "image/apng": "apng",
        "image/avif": "avif",
        "image/svg+xml": "svg",
        "image/webp": "webp",
        "image/bmp": "bmp",
        "image/tiff": "tiff"
      })[f.toLowerCase()] || "dat", n = (f, d, p, h, g) => {
        if (J(f))
          return s({
            id: f,
            name: h,
            filename: g,
            blob: d,
            base64: p
          });
        if (vt(f))
          return s(f);
        throw new Error("Unknown input type");
      }, s = (f) => {
        if (!f.blob || !f.base64)
          throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
        const d = f.id || tz("blobid"), p = f.name || d, h = f.blob;
        return {
          id: V(d),
          name: V(p),
          filename: V(f.filename || p + "." + t(h.type)),
          blob: V(h),
          base64: V(f.base64),
          blobUri: V(f.blobUri || URL.createObjectURL(h)),
          uri: V(f.uri)
        };
      }, o = (f) => {
        a(f.id()) || e.push(f);
      }, r = (f) => Ye(e, f).getOrUndefined(), a = (f) => r((d) => d.id() === f);
      return {
        create: n,
        add: o,
        get: a,
        getByUri: (f) => r((d) => d.blobUri() === f),
        getByData: (f, d) => r((p) => p.base64() === f && p.blob().type === d),
        findFirst: r,
        removeByUri: (f) => {
          e = se(e, (d) => d.blobUri() === f ? (URL.revokeObjectURL(d.blobUri()), !1) : !0);
        },
        destroy: () => {
          P(e, (f) => {
            URL.revokeObjectURL(f.blobUri());
          }), e = [];
        }
      };
    }, sz = (e, t) => {
      const n = {}, s = (g, b) => g ? g.replace(/\/$/, "") + "/" + b.replace(/^\//, "") : b, o = (g, b) => new Promise((v, y) => {
        const E = new XMLHttpRequest();
        E.open("POST", t.url), E.withCredentials = t.credentials, E.upload.onprogress = (T) => {
          b(T.loaded / T.total * 100);
        }, E.onerror = () => {
          y("Image upload failed due to a XHR Transport error. Code: " + E.status);
        }, E.onload = () => {
          if (E.status < 200 || E.status >= 300) {
            y("HTTP Error: " + E.status);
            return;
          }
          const T = JSON.parse(E.responseText);
          if (!T || !J(T.location)) {
            y("Invalid JSON: " + E.responseText);
            return;
          }
          v(s(t.basePath, T.location));
        };
        const S = new FormData();
        S.append("file", g.blob(), g.filename()), E.send(S);
      }), r = Se(t.handler) ? t.handler : o, a = () => new Promise((g) => {
        g([]);
      }), i = (g, b) => ({
        url: b,
        blobInfo: g,
        status: !0
      }), l = (g, b) => ({
        url: "",
        blobInfo: g,
        status: !1,
        error: b
      }), c = (g, b) => {
        L.each(n[g], (v) => {
          v(b);
        }), delete n[g];
      }, u = (g, b, v) => (e.markPending(g.blobUri()), new Promise((y) => {
        let E, S;
        try {
          const T = () => {
            E && (E.close(), S = ce);
          }, O = (A) => {
            T(), e.markUploaded(g.blobUri(), A), c(g.blobUri(), i(g, A)), y(i(g, A));
          }, U = (A) => {
            T(), e.removeFailed(g.blobUri()), c(g.blobUri(), l(g, A)), y(l(g, A));
          };
          S = (A) => {
            A < 0 || A > 100 || m.from(E).orThunk(() => m.from(v).map(yc)).each((_) => {
              E = _, _.progressBar.value(A);
            });
          }, b(g, S).then(O, (A) => {
            U(J(A) ? { message: A } : A);
          });
        } catch (T) {
          y(l(g, T));
        }
      })), f = (g) => g === o, d = (g) => {
        const b = g.blobUri();
        return new Promise((v) => {
          n[b] = n[b] || [], n[b].push(v);
        });
      }, p = (g, b) => (g = L.grep(g, (v) => !e.isUploaded(v.blobUri())), Promise.all(L.map(g, (v) => e.isPending(v.blobUri()) ? d(v) : u(v, r, b))));
      return { upload: (g, b) => !t.url && f(r) ? a() : p(g, b) };
    }, NE = (e) => () => e.notificationManager.open({
      text: e.translate("Image uploading..."),
      type: "info",
      timeout: -1,
      progressBar: !0
    }), AE = (e, t) => sz(t, {
      url: cR(e),
      basePath: uR(e),
      credentials: fR(e),
      handler: dR(e)
    }), oz = (e) => {
      const t = xE(), n = AE(e, t);
      return { upload: (s, o = !0) => n.upload(s, o ? NE(e) : void 0) };
    }, rz = (e, t) => e.dom.isEmpty(t.dom) && M(e.schema.getTextBlockElements()[pe(t)]), az = (e) => (t) => {
      rz(e, t) && We(t, C.fromHtml('<br data-mce-bogus="1" />'));
    }, iz = (e) => {
      const t = nz();
      let n, s;
      const o = xE(), r = [], a = (E) => (S) => e.selection ? E(S) : [], i = (E) => E + (E.indexOf("?") === -1 ? "?" : "&") + (/* @__PURE__ */ new Date()).getTime(), l = (E, S, T) => {
        let O = 0;
        do
          O = E.indexOf(S, O), O !== -1 && (E = E.substring(0, O) + T + E.substr(O + S.length), O += T.length - S.length + 1);
        while (O !== -1);
        return E;
      }, c = (E, S, T) => {
        const O = `src="${T}"${T === be.transparentSrc ? ' data-mce-placeholder="1"' : ""}`;
        return E = l(E, `src="${S}"`, O), E = l(E, 'data-mce-src="' + S + '"', 'data-mce-src="' + T + '"'), E;
      }, u = (E, S) => {
        P(e.undoManager.data, (T) => {
          T.type === "fragmented" ? T.fragments = he(T.fragments, (O) => c(O, E, S)) : T.content = c(T.content, E, S);
        });
      }, f = (E, S) => {
        const T = e.convertURL(S, "src");
        u(E.src, S), Wn(C.fromDom(E), {
          src: Rh(e) ? i(S) : S,
          "data-mce-src": T
        });
      }, d = () => (n || (n = AE(e, o)), b().then(a((E) => {
        const S = he(E, (T) => T.blobInfo);
        return n.upload(S, NE(e)).then(a((T) => {
          const O = [];
          let U = !1;
          const A = he(T, (_, R) => {
            const { blobInfo: z, image: Z } = E[R];
            let re = !1;
            return _.status && iR(e) ? (_.url && !ft(Z.src, _.url) && (U = !0), t.removeByUri(Z.src), In(e) || f(Z, _.url)) : _.error && (_.error.remove && (u(Z.src, be.transparentSrc), O.push(Z), re = !0), MU(e, _.error.message)), {
              element: Z,
              status: _.status,
              uploadUri: _.url,
              blobInfo: z,
              removed: re
            };
          });
          return O.length > 0 && !In(e) ? e.undoManager.transact(() => {
            P(zc(O), (_) => {
              const R = on(_);
              Pe(_), R.each(az(e)), t.removeByUri(_.dom.src);
            });
          }) : U && e.undoManager.dispatchChange(), A;
        }));
      }))), p = () => Th(e) ? d() : Promise.resolve([]), h = (E) => zn(r, (S) => S(E)), g = (E) => {
        r.push(E);
      }, b = () => (s || (s = QU(o, t)), s.findAll(e.getBody(), h).then(a((E) => {
        const S = se(E, (T) => J(T) ? (wl(e, T), !1) : T.uriType !== "blob");
        return In(e) || P(S, (T) => {
          u(T.image.src, T.blobInfo.blobUri()), T.image.src = T.blobInfo.blobUri(), T.image.removeAttribute("data-mce-src");
        }), S;
      }))), v = () => {
        t.destroy(), o.destroy(), s = n = null;
      }, y = (E) => E.replace(/src="(blob:[^"]+)"/g, (S, T) => {
        const O = o.getResultUri(T);
        if (O)
          return 'src="' + O + '"';
        let U = t.getByUri(T);
        return U || (U = Rt(e.editorManager.get(), (A, _) => A || _.editorUpload && _.editorUpload.blobCache.getByUri(T), void 0)), U ? 'src="data:' + U.blob().type + ";base64," + U.base64() + '"' : S;
      });
      return e.on("SetContent", () => {
        Th(e) ? p() : b();
      }), e.on("RawSaveContent", (E) => {
        E.content = y(E.content);
      }), e.on("GetContent", (E) => {
        E.source_view || E.format === "raw" || E.format === "tree" || (E.content = y(E.content));
      }), e.on("PostRender", () => {
        e.parser.addNodeFilter("img", (E) => {
          P(E, (S) => {
            const T = S.attr("src");
            if (!T || t.getByUri(T))
              return;
            const O = o.getResultUri(T);
            O && S.attr("src", O);
          });
        });
      }), {
        blobCache: t,
        addFilter: g,
        uploadImages: d,
        uploadImagesAuto: p,
        scanForImages: b,
        destroy: v
      };
    }, lz = (e) => {
      const t = e.dom, n = e.schema.type, s = {
        valigntop: [{
          selector: "td,th",
          styles: { verticalAlign: "top" }
        }],
        valignmiddle: [{
          selector: "td,th",
          styles: { verticalAlign: "middle" }
        }],
        valignbottom: [{
          selector: "td,th",
          styles: { verticalAlign: "bottom" }
        }],
        alignleft: [
          {
            selector: "figure.image",
            collapsed: !1,
            classes: "align-left",
            ceFalseOverride: !0,
            preview: "font-family font-size"
          },
          {
            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
            styles: { textAlign: "left" },
            inherit: !1,
            preview: !1
          },
          {
            selector: "img,audio,video",
            collapsed: !1,
            styles: { float: "left" },
            preview: "font-family font-size"
          },
          {
            selector: "table",
            collapsed: !1,
            styles: {
              marginLeft: "0px",
              marginRight: "auto"
            },
            onformat: (o) => {
              t.setStyle(o, "float", null);
            },
            preview: "font-family font-size"
          },
          {
            selector: ".mce-preview-object,[data-ephox-embed-iri]",
            ceFalseOverride: !0,
            styles: { float: "left" }
          }
        ],
        aligncenter: [
          {
            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
            styles: { textAlign: "center" },
            inherit: !1,
            preview: "font-family font-size"
          },
          {
            selector: "figure.image",
            collapsed: !1,
            classes: "align-center",
            ceFalseOverride: !0,
            preview: "font-family font-size"
          },
          {
            selector: "img,audio,video",
            collapsed: !1,
            styles: {
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            },
            preview: !1
          },
          {
            selector: "table",
            collapsed: !1,
            styles: {
              marginLeft: "auto",
              marginRight: "auto"
            },
            preview: "font-family font-size"
          },
          {
            selector: ".mce-preview-object",
            ceFalseOverride: !0,
            styles: {
              display: "table",
              marginLeft: "auto",
              marginRight: "auto"
            },
            preview: !1
          },
          {
            selector: "[data-ephox-embed-iri]",
            ceFalseOverride: !0,
            styles: {
              marginLeft: "auto",
              marginRight: "auto"
            },
            preview: !1
          }
        ],
        alignright: [
          {
            selector: "figure.image",
            collapsed: !1,
            classes: "align-right",
            ceFalseOverride: !0,
            preview: "font-family font-size"
          },
          {
            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
            styles: { textAlign: "right" },
            inherit: !1,
            preview: "font-family font-size"
          },
          {
            selector: "img,audio,video",
            collapsed: !1,
            styles: { float: "right" },
            preview: "font-family font-size"
          },
          {
            selector: "table",
            collapsed: !1,
            styles: {
              marginRight: "0px",
              marginLeft: "auto"
            },
            onformat: (o) => {
              t.setStyle(o, "float", null);
            },
            preview: "font-family font-size"
          },
          {
            selector: ".mce-preview-object,[data-ephox-embed-iri]",
            ceFalseOverride: !0,
            styles: { float: "right" },
            preview: !1
          }
        ],
        alignjustify: [{
          selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
          styles: { textAlign: "justify" },
          inherit: !1,
          preview: "font-family font-size"
        }],
        bold: [
          {
            inline: "strong",
            remove: "all",
            preserve_attributes: [
              "class",
              "style"
            ]
          },
          {
            inline: "span",
            styles: { fontWeight: "bold" }
          },
          {
            inline: "b",
            remove: "all",
            preserve_attributes: [
              "class",
              "style"
            ]
          }
        ],
        italic: [
          {
            inline: "em",
            remove: "all",
            preserve_attributes: [
              "class",
              "style"
            ]
          },
          {
            inline: "span",
            styles: { fontStyle: "italic" }
          },
          {
            inline: "i",
            remove: "all",
            preserve_attributes: [
              "class",
              "style"
            ]
          }
        ],
        underline: [
          {
            inline: "span",
            styles: { textDecoration: "underline" },
            exact: !0
          },
          {
            inline: "u",
            remove: "all",
            preserve_attributes: [
              "class",
              "style"
            ]
          }
        ],
        strikethrough: /* @__PURE__ */ (() => {
          const o = {
            inline: "span",
            styles: { textDecoration: "line-through" },
            exact: !0
          }, r = {
            inline: "strike",
            remove: "all",
            preserve_attributes: [
              "class",
              "style"
            ]
          }, a = {
            inline: "s",
            remove: "all",
            preserve_attributes: [
              "class",
              "style"
            ]
          };
          return n !== "html4" ? [
            a,
            o,
            r
          ] : [
            o,
            a,
            r
          ];
        })(),
        forecolor: {
          inline: "span",
          styles: { color: "%value" },
          links: !0,
          remove_similar: !0,
          clear_child_styles: !0
        },
        hilitecolor: {
          inline: "span",
          styles: { backgroundColor: "%value" },
          links: !0,
          remove_similar: !0,
          clear_child_styles: !0
        },
        fontname: {
          inline: "span",
          toggle: !1,
          styles: { fontFamily: "%value" },
          clear_child_styles: !0
        },
        fontsize: {
          inline: "span",
          toggle: !1,
          styles: { fontSize: "%value" },
          clear_child_styles: !0
        },
        lineheight: {
          selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div",
          styles: { lineHeight: "%value" }
        },
        fontsize_class: {
          inline: "span",
          attributes: { class: "%value" }
        },
        blockquote: {
          block: "blockquote",
          wrapper: !0,
          remove: "all"
        },
        subscript: { inline: "sub" },
        superscript: { inline: "sup" },
        code: { inline: "code" },
        link: {
          inline: "a",
          selector: "a",
          remove: "all",
          split: !0,
          deep: !0,
          onmatch: (o, r, a) => q(o) && o.hasAttribute("href"),
          onformat: (o, r, a) => {
            L.each(a, (i, l) => {
              t.setAttrib(o, l, i);
            });
          }
        },
        lang: {
          inline: "span",
          clear_child_styles: !0,
          remove_similar: !0,
          attributes: {
            lang: "%value",
            "data-mce-lang": (o) => {
              var r;
              return (r = o == null ? void 0 : o.customValue) !== null && r !== void 0 ? r : null;
            }
          }
        },
        removeformat: [
          {
            selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",
            remove: "all",
            split: !0,
            expand: !1,
            block_expand: !0,
            deep: !0
          },
          {
            selector: "span",
            attributes: [
              "style",
              "class"
            ],
            remove: "empty",
            split: !0,
            expand: !1,
            deep: !0
          },
          {
            selector: "*",
            attributes: [
              "style",
              "class"
            ],
            split: !1,
            expand: !1,
            deep: !0
          }
        ]
      };
      return L.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), (o) => {
        s[o] = {
          block: o,
          remove: "all"
        };
      }), s;
    }, TE = {
      remove_similar: !0,
      inherit: !1
    }, Jo = {
      selector: "td,th",
      ...TE
    }, cz = {
      tablecellbackgroundcolor: {
        styles: { backgroundColor: "%value" },
        ...Jo
      },
      tablecellverticalalign: {
        styles: { "vertical-align": "%value" },
        ...Jo
      },
      tablecellbordercolor: {
        styles: { borderColor: "%value" },
        ...Jo
      },
      tablecellclass: {
        classes: ["%value"],
        ...Jo
      },
      tableclass: {
        selector: "table",
        classes: ["%value"],
        ...TE
      },
      tablecellborderstyle: {
        styles: { borderStyle: "%value" },
        ...Jo
      },
      tablecellborderwidth: {
        styles: { borderWidth: "%value" },
        ...Jo
      }
    }, uz = V(cz), fz = (e) => {
      const t = {}, n = (a) => M(a) ? t[a] : t, s = (a) => oe(t, a), o = (a, i) => {
        a && (J(a) ? (Ge(i) || (i = [i]), P(i, (l) => {
          lt(l.deep) && (l.deep = !Xt(l)), lt(l.split) && (l.split = !Xt(l) || Qe(l)), lt(l.remove) && Xt(l) && !Qe(l) && (l.remove = "none"), Xt(l) && Qe(l) && (l.mixed = !0, l.block_expand = !0), J(l.classes) && (l.classes = l.classes.split(/\s+/));
        }), t[a] = i) : Ae(a, (l, c) => {
          o(c, l);
        }));
      }, r = (a) => (a && t[a] && delete t[a], t);
      return o(lz(e)), o(uz()), o(_R(e)), {
        get: n,
        has: s,
        register: o,
        unregister: r
      };
    }, _l = L.each, en = Ne.DOM, Rd = (e) => M(e) && vt(e), RE = (e, t) => {
      const n = t && t.schema || us({}), s = (l, c) => {
        c.classes.length > 0 && en.addClass(l, c.classes.join(" ")), en.setAttribs(l, c.attrs);
      }, o = (l) => {
        const c = J(l) ? {
          name: l,
          classes: [],
          attrs: {}
        } : l, u = en.create(c.name);
        return s(u, c), u;
      }, r = (l, c) => {
        const u = n.getElementRule(l.nodeName.toLowerCase()), f = u == null ? void 0 : u.parentsRequired;
        return f && f.length ? c && ke(f, c) ? c : f[0] : !1;
      }, a = (l, c, u) => {
        let f;
        const d = c[0], p = Rd(d) ? d.name : void 0, h = r(l, p);
        if (h)
          p === h ? (f = d, c = c.slice(1)) : f = h;
        else if (d)
          f = d, c = c.slice(1);
        else if (!u)
          return l;
        const g = f ? o(f) : en.create("div");
        g.appendChild(l), u && L.each(u, (v) => {
          const y = o(v);
          g.insertBefore(y, l);
        });
        const b = Rd(f) ? f.siblings : void 0;
        return a(g, c, b);
      }, i = en.create("div");
      if (e.length > 0) {
        const l = e[0], c = o(l), u = Rd(l) ? l.siblings : void 0;
        i.appendChild(a(c, e.slice(1), u));
      }
      return i;
    }, dz = (e) => {
      e = L.trim(e);
      let t = "div";
      const n = {
        name: t,
        classes: [],
        attrs: {},
        selector: e
      };
      return e !== "*" && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, (s, o, r, a, i) => {
        switch (o) {
          case "#":
            n.attrs.id = r;
            break;
          case ".":
            n.classes.push(r);
            break;
          case ":":
            L.inArray("checked disabled enabled read-only required".split(" "), r) !== -1 && (n.attrs[r] = r);
            break;
        }
        if (a === "[") {
          const l = i.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
          l && (n.attrs[l[1]] = l[2]);
        }
        return "";
      })), n.name = t || "div", n;
    }, mz = (e) => J(e) ? (e = e.split(/\s*,\s*/)[0], e = e.replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), L.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), (t) => {
      const n = L.map(t.split(/(?:~\+|~|\+)/), dz), s = n.pop();
      return n.length && (s.siblings = n), s;
    }).reverse()) : [], gz = (e, t) => {
      let n = "", s = xR(e);
      if (s === "")
        return "";
      const o = (d) => J(d) ? d.replace(/%(\w+)/g, "") : "", r = (d, p) => en.getStyle(p ?? e.getBody(), d, !0);
      if (J(t)) {
        const d = e.formatter.get(t);
        if (!d)
          return "";
        t = d[0];
      }
      if ("preview" in t) {
        const d = t.preview;
        if (d === !1)
          return "";
        s = d || s;
      }
      let a = t.block || t.inline || "span", i;
      const l = mz(t.selector);
      l.length > 0 ? (l[0].name || (l[0].name = a), a = t.selector, i = RE(l, e)) : i = RE([a], e);
      const c = en.select(a, i)[0] || i.firstChild;
      _l(t.styles, (d, p) => {
        const h = o(d);
        h && en.setStyle(c, p, h);
      }), _l(t.attributes, (d, p) => {
        const h = o(d);
        h && en.setAttrib(c, p, h);
      }), _l(t.classes, (d) => {
        const p = o(d);
        en.hasClass(c, p) || en.addClass(c, p);
      }), e.dispatch("PreviewFormats"), en.setStyles(i, {
        position: "absolute",
        left: -65535
      }), e.getBody().appendChild(i);
      const u = r("fontSize"), f = /px$/.test(u) ? parseInt(u, 10) : 0;
      return _l(s.split(" "), (d) => {
        let p = r(d, c);
        if (!(d === "background-color" && /transparent|rgba\s*\([^)]+,\s*0\)/.test(p) && (p = r(d), Hr(p).toLowerCase() === "#ffffff")) && !(d === "color" && Hr(p).toLowerCase() === "#000000")) {
          if (d === "font-size" && /em|%$/.test(p)) {
            if (f === 0)
              return;
            p = parseFloat(p) / (/%$/.test(p) ? 100 : 1) * f + "px";
          }
          d === "border" && p && (n += "padding:0 2px;"), n += d + ":" + p + ";";
        }
      }), e.dispatch("AfterPreviewFormats"), en.remove(i), n;
    }, pz = (e) => {
      e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
      for (let t = 1; t <= 6; t++)
        e.addShortcut("access+" + t, "", [
          "FormatBlock",
          !1,
          "h" + t
        ]);
      e.addShortcut("access+7", "", [
        "FormatBlock",
        !1,
        "p"
      ]), e.addShortcut("access+8", "", [
        "FormatBlock",
        !1,
        "div"
      ]), e.addShortcut("access+9", "", [
        "FormatBlock",
        !1,
        "address"
      ]);
    }, PE = (e) => {
      const t = fz(e), n = et({});
      return pz(e), BL(e), In(e) || r$(n, e), {
        get: t.get,
        has: t.has,
        register: t.register,
        unregister: t.unregister,
        apply: (s, o, r) => {
          NM(e, s, o, r);
        },
        remove: (s, o, r, a) => {
          AM(e, s, o, r, a);
        },
        toggle: (s, o, r) => {
          TM(e, s, o, r);
        },
        match: (s, o, r, a) => SM(e, s, o, r, a),
        closest: (s) => xM(e, s),
        matchAll: (s, o) => wM(e, s, o),
        matchNode: (s, o, r, a) => kM(e, s, o, r, a),
        canApply: (s) => _M(e, s),
        formatChanged: (s, o, r, a) => RM(e, n, s, o, r, a),
        getCssText: j(gz, e)
      };
    }, DE = (e) => {
      switch (e.toLowerCase()) {
        case "undo":
        case "redo":
        case "mcefocus":
          return !0;
        default:
          return !1;
      }
    }, hz = (e, t, n) => {
      const s = et(!1), o = (l) => {
        vl(t, !1, n), t.add({}, l);
      };
      e.on("init", () => {
        t.add();
      }), e.on("BeforeExecCommand", (l) => {
        const c = l.command;
        DE(c) || (lE(t, n), t.beforeChange());
      }), e.on("ExecCommand", (l) => {
        const c = l.command;
        DE(c) || o(l);
      }), e.on("ObjectResizeStart cut", () => {
        t.beforeChange();
      }), e.on("SaveContent ObjectResized blur", o), e.on("dragend", o), e.on("keyup", (l) => {
        const c = l.keyCode;
        if (l.isDefaultPrevented())
          return;
        const u = be.os.isMacOS() && l.key === "Meta";
        (c >= 33 && c <= 36 || c >= 37 && c <= 40 || c === 45 || l.ctrlKey || u) && (o(), e.nodeChanged()), (c === 46 || c === 8) && e.nodeChanged(), s.get() && t.typing && !_d(Cl(e), t.data[0]) && (e.isDirty() || e.setDirty(!0), e.dispatch("TypingUndo"), s.set(!1), e.nodeChanged());
      }), e.on("keydown", (l) => {
        const c = l.keyCode;
        if (l.isDefaultPrevented())
          return;
        if (c >= 33 && c <= 36 || c >= 37 && c <= 40 || c === 45) {
          t.typing && o(l);
          return;
        }
        const u = l.ctrlKey && !l.altKey || l.metaKey;
        if ((c < 16 || c > 20) && c !== 224 && c !== 91 && !t.typing && !u) {
          t.beforeChange(), vl(t, !0, n), t.add({}, l), s.set(!0);
          return;
        }
        (be.os.isMacOS() ? l.metaKey : l.ctrlKey && !l.altKey) && t.beforeChange();
      }), e.on("mousedown", (l) => {
        t.typing && o(l);
      });
      const r = (l) => l.inputType === "insertReplacementText", a = (l) => l.inputType === "insertText" && l.data === null, i = (l) => l.inputType === "insertFromPaste" || l.inputType === "insertFromDrop";
      e.on("input", (l) => {
        l.inputType && (r(l) || a(l) || i(l)) && o(l);
      }), e.on("AddUndo Undo Redo ClearUndos", (l) => {
        l.isDefaultPrevented() || e.nodeChanged();
      });
    }, bz = (e) => {
      e.addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo");
    }, OE = (e) => {
      const t = fs(), n = et(0), s = et(0), o = {
        data: [],
        typing: !1,
        beforeChange: () => {
          fM(e, n, t);
        },
        add: (r, a) => dM(e, o, s, n, t, r, a),
        dispatchChange: () => {
          e.setDirty(!0);
          const r = Cl(e);
          r.bookmark = Nu(e.selection), e.dispatch("change", {
            level: r,
            lastLevel: ri(o.data, s.get()).getOrUndefined()
          });
        },
        undo: () => mM(e, o, n, s),
        redo: () => gM(e, s, o.data),
        clear: () => {
          pM(e, o, s);
        },
        reset: () => {
          hM(e, o);
        },
        hasUndo: () => bM(e, o, s),
        hasRedo: () => CM(e, o, s),
        transact: (r) => vM(e, o, n, r),
        ignore: (r) => {
          yM(e, n, r);
        },
        extra: (r, a) => {
          EM(e, o, s, r, a);
        }
      };
      return In(e) || hz(e, o, n), bz(e), o;
    }, Cz = [
      9,
      27,
      H.HOME,
      H.END,
      19,
      20,
      44,
      144,
      145,
      33,
      34,
      45,
      16,
      17,
      18,
      91,
      92,
      93,
      H.DOWN,
      H.UP,
      H.LEFT,
      H.RIGHT
    ].concat(be.browser.isFirefox() ? [224] : []), BE = "data-mce-placeholder", IE = (e) => e.type === "keydown" || e.type === "keyup", LE = (e) => {
      const t = e.keyCode;
      return t === H.BACKSPACE || t === H.DELETE;
    }, vz = (e) => {
      if (IE(e)) {
        const t = e.keyCode;
        return !LE(e) && (H.metaKeyPressed(e) || e.altKey || t >= 112 && t <= 123 || ke(Cz, t));
      } else
        return !1;
    }, yz = (e) => IE(e) && !(LE(e) || e.type === "keyup" && e.keyCode === 229), Ez = (e, t, n) => {
      if (Ue(C.fromDom(t), !1)) {
        const s = t.firstElementChild;
        return s ? e.getStyle(t.firstElementChild, "padding-left") || e.getStyle(t.firstElementChild, "padding-right") ? !1 : n === s.nodeName.toLowerCase() : !0;
      } else
        return !1;
    }, Sz = (e) => {
      var t;
      const n = e.dom, s = gt(e), o = (t = ER(e)) !== null && t !== void 0 ? t : "", r = (a, i) => {
        if (vz(a))
          return;
        const l = e.getBody(), c = yz(a) ? !1 : Ez(n, l, s);
        (n.getAttrib(l, BE) !== "" !== c || i) && (n.setAttrib(l, BE, c ? o : null), n.setAttrib(l, "aria-placeholder", c ? o : null), WD(e, c), e.on(c ? "keydown" : "keyup", r), e.off(c ? "keyup" : "keydown", r));
      };
      wn(o) && e.on("init", (a) => {
        r(a, !0), e.on("change SetContent ExecCommand", r), e.on("paste", (i) => Zt.setEditorTimeout(e, () => r(i)));
      });
    }, wz = (e, t) => ({
      block: e,
      position: t
    }), kz = (e, t) => ({
      from: e,
      to: t
    }), Pd = (e, t) => {
      const n = C.fromDom(e), s = C.fromDom(t.container());
      return il(n, s).map((o) => wz(o, t));
    }, _z = (e) => !ve(e.from.block, e.to.block), $E = (e, t) => Ls(t, (o) => Mr(o) || rn(o.dom), (o) => ve(o, e)).filter(Mt).getOr(e), xz = (e, t) => {
      const n = C.fromDom(e);
      return ve($E(n, t.from.block), $E(n, t.to.block));
    }, Nz = (e) => De(e.from.block.dom) === !1 && De(e.to.block.dom) === !1, Az = (e) => {
      const t = (n) => lp(n) || su(n.dom);
      return t(e.from.block) && t(e.to.block);
    }, Tz = (e, t, n) => $e(n.position.getNode()) && !Ue(n.block) ? Wo(!1, n.block.dom).bind((s) => s.isEqual(n.position) ? Kt(t, e, s).bind((o) => Pd(e, o)) : m.some(n)).getOr(n) : n, Rz = (e, t, n) => {
      const s = Pd(e, N.fromRangeStart(n)), o = s.bind((r) => Kt(t, e, r.position).bind((a) => Pd(e, a).map((i) => Tz(e, t, i))));
      return dt(s, o, kz).filter((r) => _z(r) && xz(e, r) && Nz(r) && Az(r));
    }, Pz = (e, t, n) => n.collapsed ? Rz(e, t, n) : m.none(), Dz = (e, t) => {
      const n = at(e);
      return vr(n, (s) => t.isBlock(pe(s))).fold(V(n), (s) => n.slice(0, s));
    }, FE = (e, t) => {
      const n = Dz(e, t);
      return P(n, Pe), n;
    }, ME = (e, t) => {
      const n = es(t, e);
      return Ye(n.reverse(), (s) => Ue(s)).each(Pe);
    }, Oz = (e) => se(Mg(e), (t) => !Ue(t)).length === 0, Bz = (e, t, n, s, o) => {
      if (Ue(n))
        return is(n), pt(n.dom);
      Oz(o) && Ue(t) && Ot(o, C.fromTag("br"));
      const r = Bt(n.dom, N.before(o.dom));
      return P(FE(t, s), (a) => {
        Ot(o, a);
      }), ME(e, t), r;
    }, Iz = (e, t) => e.isInline(pe(t)), Lz = (e, t, n, s) => {
      if (Ue(n)) {
        if (Ue(t)) {
          const a = Cr(((i) => {
            const l = (c, u) => Bc(c).fold(() => u, (f) => Iz(s, f) ? l(f, u.concat(Ys(f))) : u);
            return l(i, []);
          })(n), (i, l) => (Yg(i, l), l), Ur());
          Po(t), We(t, a);
        }
        return Pe(n), pt(t.dom);
      }
      const o = ln(n.dom);
      return P(FE(t, s), (r) => {
        We(n, r);
      }), ME(e, t), o;
    }, $z = (e, t) => {
      const n = es(t, e);
      return m.from(n[n.length - 1]);
    }, Fz = (e, t) => jn(t, e) ? $z(t, e) : m.none(), UE = (e, t) => {
      Wo(e, t.dom).bind((n) => m.from(n.getNode())).map(C.fromDom).filter(Hs).each(Pe);
    }, zE = (e, t, n, s) => (UE(!0, t), UE(!1, n), Fz(t, n).fold(j(Lz, e, t, n, s), j(Bz, e, t, n, s))), HE = (e, t, n, s, o) => t ? zE(e, s, n, o) : zE(e, n, s, o), Dd = (e, t) => {
      const n = C.fromDom(e.getBody());
      return Pz(n.dom, t, e.selection.getRng()).map((o) => () => {
        HE(n, t, o.from.block, o.to.block, e.schema).each((r) => {
          e.selection.setRng(r.toRange());
        });
      });
    }, Mz = (e, t, n) => {
      const s = t.getRng();
      return dt(il(e, C.fromDom(s.startContainer)), il(e, C.fromDom(s.endContainer)), (o, r) => ve(o, r) ? m.none() : m.some(() => {
        s.deleteContents(), HE(e, !0, o, r, n).each((a) => {
          t.setRng(a.toRange());
        });
      })).getOr(m.none());
    }, WE = (e, t) => {
      const n = C.fromDom(t), s = j(ve, e);
      return Kn(n, Mr, s).isSome();
    }, Uz = (e, t) => WE(e, t.startContainer) || WE(e, t.endContainer), zz = (e, t) => {
      const n = Bt(e.dom, N.fromRangeStart(t)).isNone(), s = Nt(e.dom, N.fromRangeEnd(t)).isNone();
      return !Uz(e, t) && n && s;
    }, Hz = (e) => m.some(() => {
      e.setContent(""), e.selection.setCursorLocation();
    }), Wz = (e) => {
      const t = C.fromDom(e.getBody()), n = e.selection.getRng();
      return zz(t, n) ? Hz(e) : Mz(t, e.selection, e.schema);
    }, Od = (e, t) => e.selection.isCollapsed() ? m.none() : Wz(e), ts = (e, t, n, s, o) => m.from(t._selectionOverrides.showCaret(e, n, s, o)), Vz = (e) => {
      const t = e.ownerDocument.createRange();
      return t.selectNode(e), t;
    }, Pa = (e, t) => e.dispatch("BeforeObjectSelected", { target: t }).isDefaultPrevented() ? m.none() : m.some(Vz(t)), jz = (e, t, n) => {
      const s = $u(1, e.getBody(), t), o = N.fromRangeStart(s), r = o.getNode();
      if (sa(r))
        return ts(1, e, r, !o.isAtEnd(), !1);
      const a = o.getNode(!0);
      if (sa(a))
        return ts(1, e, a, !1, !1);
      const i = lo(e.dom.getRoot(), o.getNode());
      return sa(i) ? ts(1, e, i, !1, n) : m.none();
    }, Bd = (e, t, n) => t.collapsed ? jz(e, t, n).getOr(t) : t, qz = (e) => Cs(e) || pa(e), Kz = (e) => vs(e) || ha(e), Gz = (e, t) => {
      B(t) && t.data.length === 0 && e.remove(t);
    }, VE = (e, t, n, s, o, r) => {
      ts(s, e, r.getNode(!o), o, !0).each((a) => {
        if (t.collapsed) {
          const i = t.cloneRange();
          o ? i.setEnd(a.startContainer, a.startOffset) : i.setStart(a.endContainer, a.endOffset), i.deleteContents();
        } else
          t.deleteContents();
        e.selection.setRng(a);
      }), Gz(e.dom, n);
    }, Yz = (e, t) => {
      const n = e.selection.getRng();
      if (!B(n.commonAncestorContainer))
        return m.none();
      const s = t ? tt.Forwards : tt.Backwards, o = Dn(e.getBody()), r = j(Fu, t ? o.next : o.prev), a = t ? qz : Kz, i = la(s, e.getBody(), n), l = r(i), c = l && Qt(t, l);
      if (!c || !Wi(i, c))
        return m.none();
      if (a(c))
        return m.some(() => VE(e, n, i.getNode(), s, t, c));
      const u = r(c);
      return u && a(u) && Wi(c, u) ? m.some(() => VE(e, n, i.getNode(), s, t, u)) : m.none();
    }, Id = (e, t) => Yz(e, t), Ld = (e, t) => {
      const n = e.getBody();
      return t ? pt(n).filter(Cs) : ln(n).filter(vs);
    }, $d = (e) => {
      const t = e.selection.getRng();
      return !t.collapsed && (Ld(e, !0).exists((n) => n.isEqual(N.fromRangeStart(t))) || Ld(e, !1).exists((n) => n.isEqual(N.fromRangeEnd(t))));
    }, Xz = (e) => M(e) && (Mr(C.fromDom(e)) || Fr(C.fromDom(e))), Ht = Tn.generate([
      { remove: ["element"] },
      { moveToElement: ["element"] },
      { moveToPosition: ["position"] }
    ]), Zz = (e, t) => {
      const n = t.getNode(!e), s = e ? "after" : "before";
      return q(n) && n.getAttribute("data-mce-caret") === s;
    }, Qz = (e, t, n, s, o) => {
      const r = (a) => o.isInline(a.nodeName.toLowerCase()) && !Rn(n, s, e);
      return eb(!t, n).fold(() => eb(t, s).fold(Le, r), r);
    }, jE = (e, t, n, s) => {
      const o = s.getNode(!t);
      return il(C.fromDom(e), C.fromDom(n.getNode())).map((r) => Ue(r) ? Ht.remove(r.dom) : Ht.moveToElement(o)).orThunk(() => m.some(Ht.moveToElement(o)));
    }, qE = (e, t, n, s) => Kt(t, e, n).bind((o) => Xz(o.getNode()) || Qz(e, t, n, o, s) ? m.none() : t && De(o.getNode()) || !t && De(o.getNode(!0)) ? jE(e, t, n, o) : t && vs(n) || !t && Cs(n) ? m.some(Ht.moveToPosition(o)) : m.none()), Jz = (e, t) => qe(t) ? m.none() : e && De(t.nextSibling) ? m.some(Ht.moveToElement(t.nextSibling)) : !e && De(t.previousSibling) ? m.some(Ht.moveToElement(t.previousSibling)) : m.none(), eH = (e, t, n) => n.fold((s) => m.some(Ht.remove(s)), (s) => m.some(Ht.moveToElement(s)), (s) => Rn(t, s, e) ? m.none() : m.some(Ht.moveToPosition(s))), tH = (e, t, n, s) => Zz(t, n) ? Jz(t, n.getNode(!t)).orThunk(() => qE(e, t, n, s)) : qE(e, t, n, s).bind((o) => eH(e, n, o)), nH = (e, t, n, s) => {
      const o = $u(t ? 1 : -1, e, n), r = N.fromRangeStart(o), a = C.fromDom(e);
      return !t && vs(r) ? m.some(Ht.remove(r.getNode(!0))) : t && Cs(r) ? m.some(Ht.remove(r.getNode())) : !t && Cs(r) && Nf(a, r, s) ? l1(a, r, s).map((i) => Ht.remove(i.getNode())) : t && vs(r) && xf(a, r, s) ? c1(a, r, s).map((i) => Ht.remove(i.getNode())) : tH(e, t, r, s);
    }, sH = (e, t) => (n) => (e._selectionOverrides.hideFakeCaret(), ao(e, t, C.fromDom(n)), !0), oH = (e, t) => (n) => {
      const s = t ? N.before(n) : N.after(n);
      return e.selection.setRng(s.toRange()), !0;
    }, rH = (e) => (t) => (e.selection.setRng(t.toRange()), !0), KE = (e, t) => m.from(lo(e.getBody(), t)), aH = (e, t) => {
      const n = e.selection.getNode();
      return KE(e, n).filter(De).fold(() => nH(e.getBody(), t, e.selection.getRng(), e.schema).map((s) => () => s.fold(sH(e, t), oH(e, t), rH(e))), () => m.some(ce));
    }, iH = (e) => {
      P(mt(e, ".mce-offscreen-selection"), Pe);
    }, lH = (e, t) => {
      const n = e.selection.getNode();
      return De(n) && !Ei(n) ? KE(e, n.parentNode).filter(De).fold(() => m.some(() => {
        iH(C.fromDom(e.getBody())), ao(e, t, C.fromDom(e.selection.getNode())), Of(e);
      }), () => m.some(ce)) : $d(e) ? m.some(() => {
        dv(e, e.selection.getRng(), C.fromDom(e.getBody()));
      }) : m.none();
    }, GE = (e) => {
      const t = e.dom, n = e.selection, s = lo(e.getBody(), n.getNode());
      if (rn(s) && t.isBlock(s) && t.isEmpty(s)) {
        const o = t.create("br", { "data-mce-bogus": "1" });
        t.setHTML(s, ""), s.appendChild(o), n.setRng(N.before(o).toRange());
      }
      return !0;
    }, Fd = (e, t) => e.selection.isCollapsed() ? aH(e, t) : lH(e, t), cH = (e, t) => {
      const n = N.fromRangeStart(e.selection.getRng());
      return Kt(t, e.getBody(), n).filter((s) => t ? e1(s) : t1(s)).bind((s) => Lu(t ? 0 : -1, s)).map((s) => () => e.selection.select(s));
    }, Md = (e, t) => e.selection.isCollapsed() ? cH(e, t) : m.none(), er = B, YE = (e) => er(e) && e.data[0] === Ze, XE = (e) => er(e) && e.data[e.data.length - 1] === Ze, ZE = (e) => {
      var t;
      return ((t = e.ownerDocument) !== null && t !== void 0 ? t : document).createTextNode(Ze);
    }, uH = (e) => {
      var t;
      if (er(e.previousSibling))
        return XE(e.previousSibling) || e.previousSibling.appendData(Ze), e.previousSibling;
      if (er(e))
        return YE(e) || e.insertData(0, Ze), e;
      {
        const n = ZE(e);
        return (t = e.parentNode) === null || t === void 0 || t.insertBefore(n, e), n;
      }
    }, fH = (e) => {
      var t, n;
      if (er(e.nextSibling))
        return YE(e.nextSibling) || e.nextSibling.insertData(0, Ze), e.nextSibling;
      if (er(e))
        return XE(e) || e.appendData(Ze), e;
      {
        const s = ZE(e);
        return e.nextSibling ? (t = e.parentNode) === null || t === void 0 || t.insertBefore(s, e.nextSibling) : (n = e.parentNode) === null || n === void 0 || n.appendChild(s), s;
      }
    }, xl = (e, t) => e ? uH(t) : fH(t), dH = j(xl, !0), mH = j(xl, !1), QE = (e, t) => B(e.container()) ? xl(t, e.container()) : xl(t, e.getNode()), JE = (e, t) => {
      const n = t.get();
      return n && e.container() === n && ls(n);
    }, Ud = (e, t) => t.fold((n) => {
      Js(e.get());
      const s = dH(n);
      return e.set(s), m.some(N(s, s.length - 1));
    }, (n) => pt(n).map((s) => {
      if (JE(s, e)) {
        const o = e.get();
        return N(o, 1);
      } else {
        Js(e.get());
        const o = QE(s, !0);
        return e.set(o), N(o, 1);
      }
    }), (n) => ln(n).map((s) => {
      if (JE(s, e)) {
        const o = e.get();
        return N(o, o.length - 1);
      } else {
        Js(e.get());
        const o = QE(s, !1);
        return e.set(o), N(o, o.length - 1);
      }
    }), (n) => {
      Js(e.get());
      const s = mH(n);
      return e.set(s), m.some(N(s, 1));
    }), eS = (e, t) => {
      for (let n = 0; n < e.length; n++) {
        const s = e[n].apply(null, t);
        if (s.isSome())
          return s;
      }
      return m.none();
    }, St = Tn.generate([
      { before: ["element"] },
      { start: ["element"] },
      { end: ["element"] },
      { after: ["element"] }
    ]), tS = (e, t) => {
      const n = gs(t, e);
      return n || e;
    }, gH = (e, t, n) => {
      const s = iv(n), o = tS(t, s.container());
      return ys(e, o, s).fold(() => Nt(o, s).bind(j(ys, e, o)).map((r) => St.before(r)), m.none);
    }, pH = (e, t) => to(e, t) === null, nS = (e, t, n) => ys(e, t, n).filter(j(pH, t)), hH = (e, t, n) => {
      const s = lv(n);
      return nS(e, t, s).bind((o) => Bt(o, s).isNone() ? m.some(St.start(o)) : m.none());
    }, bH = (e, t, n) => {
      const s = iv(n);
      return nS(e, t, s).bind((o) => Nt(o, s).isNone() ? m.some(St.end(o)) : m.none());
    }, CH = (e, t, n) => {
      const s = lv(n), o = tS(t, s.container());
      return ys(e, o, s).fold(() => Bt(o, s).bind(j(ys, e, o)).map((r) => St.after(r)), m.none);
    }, sS = (e) => !av(zd(e)), Ln = (e, t, n) => eS([
      gH,
      hH,
      bH,
      CH
    ], [
      e,
      t,
      n
    ]).filter(sS), zd = (e) => e.fold(_t, _t, _t, _t), oS = (e) => e.fold(V("before"), V("start"), V("end"), V("after")), Nl = (e) => e.fold(St.before, St.before, St.after, St.after), Hd = (e) => e.fold(St.start, St.start, St.end, St.end), vH = (e, t) => oS(e) === oS(t) && zd(e) === zd(t), yH = (e, t, n, s, o, r) => dt(ys(t, n, s), ys(t, n, o), (a, i) => a !== i && z1(n, a, i) ? St.after(e ? a : i) : r).getOr(r), EH = (e, t) => e.fold(He, (n) => !vH(n, t)), SH = (e, t, n, s, o) => {
      const r = Qt(e, o);
      return Kt(e, n, r).map(j(Qt, e)).fold(() => s.map(Nl), (l) => Ln(t, n, l).map(j(yH, e, t, n, r, l)).filter(j(EH, s))).filter(sS);
    }, wH = (e, t) => e ? t.fold(Sn(m.some, St.start), m.none, Sn(m.some, St.after), m.none) : t.fold(m.none, Sn(m.some, St.before), m.none, Sn(m.some, St.end)), kH = (e, t, n, s) => {
      const o = Qt(e, s), r = Ln(t, n, o);
      return Ln(t, n, o).bind(j(wH, e)).orThunk(() => SH(e, t, n, r, s));
    }, _H = (e) => Se(e.selection.getSel().modify), rS = (e, t, n) => {
      const s = e ? 1 : -1;
      return t.setRng(N(n.container(), n.offset() + s).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0;
    }, xH = (e, t) => {
      const n = t.selection.getRng(), s = e ? N.fromRangeEnd(n) : N.fromRangeStart(n);
      return _H(t) ? e && Xc(s) ? rS(!0, t.selection, s) : !e && Zc(s) ? rS(!1, t.selection, s) : !1 : !1;
    };
    var $n;
    (function(e) {
      e[e.Br = 0] = "Br", e[e.Block = 1] = "Block", e[e.Wrap = 2] = "Wrap", e[e.Eol = 3] = "Eol";
    })($n || ($n = {}));
    const Al = (e, t) => e === tt.Backwards ? yr(t) : t, NH = (e, t, n) => e === tt.Forwards ? t.next(n) : t.prev(n), AH = (e, t, n, s) => $e(s.getNode(t === tt.Forwards)) ? $n.Br : Rn(n, s) === !1 ? $n.Block : $n.Wrap, aS = (e, t, n, s) => {
      const o = Dn(n);
      let r = s;
      const a = [];
      for (; r; ) {
        const i = NH(t, o, r);
        if (!i)
          break;
        if ($e(i.getNode(!1)))
          return t === tt.Forwards ? {
            positions: Al(t, a).concat([i]),
            breakType: $n.Br,
            breakAt: m.some(i)
          } : {
            positions: Al(t, a),
            breakType: $n.Br,
            breakAt: m.some(i)
          };
        if (!i.isVisible()) {
          r = i;
          continue;
        }
        if (e(r, i)) {
          const l = AH(n, t, r, i);
          return {
            positions: Al(t, a),
            breakType: l,
            breakAt: m.some(i)
          };
        }
        a.push(i), r = i;
      }
      return {
        positions: Al(t, a),
        breakType: $n.Eol,
        breakAt: m.none()
      };
    }, iS = (e, t, n, s) => t(n, s).breakAt.map((o) => {
      const r = t(n, o).positions;
      return e === tt.Backwards ? r.concat(o) : [o].concat(r);
    }).getOr([]), Wd = (e, t) => Rt(e, (n, s) => n.fold(() => m.some(s), (o) => dt(Pt(o.getClientRects()), Pt(s.getClientRects()), (r, a) => {
      const i = Math.abs(t - r.left);
      return Math.abs(t - a.left) <= i ? s : o;
    }).or(n)), m.none()), Tl = (e, t) => Pt(t.getClientRects()).bind((n) => Wd(e, n.left)), Da = j(aS, N.isAbove, -1), Oa = j(aS, N.isBelow, 1), lS = j(iS, -1, Da), cS = j(iS, 1, Oa), uS = (e, t) => Da(e, t).breakAt.isNone(), fS = (e, t) => Oa(e, t).breakAt.isNone(), TH = (e) => pt(e).map((t) => [t].concat(Oa(e, t).positions)).getOr([]), RH = (e) => ln(e).map((t) => Da(e, t).positions.concat(t)).getOr([]), PH = (e, t) => Tl(lS(e, t), t), DH = (e, t) => Tl(cS(e, t), t), OH = De, dS = (e, t) => Math.abs(e.left - t), mS = (e, t) => Math.abs(e.right - t), BH = (e) => ko(e, "node"), gS = (e, t) => ci(e, (n, s) => {
      const o = Math.min(dS(n, t), mS(n, t)), r = Math.min(dS(s, t), mS(s, t));
      return r === o && BH(s) && OH(s.node) || r < o ? s : n;
    }), IH = (e) => {
      const t = (n) => he(n, (s) => {
        const o = Zs(s);
        return o.node = e, o;
      });
      if (q(e))
        return t(e.getClientRects());
      if (B(e)) {
        const n = e.ownerDocument.createRange();
        return n.setStart(e, 0), n.setEnd(e, e.data.length), t(n.getClientRects());
      } else
        return [];
    }, pS = (e) => sn(e, IH);
    var Ba;
    (function(e) {
      e[e.Up = -1] = "Up", e[e.Down = 1] = "Down";
    })(Ba || (Ba = {}));
    const LH = (e, t, n, s) => {
      let o = s;
      for (; o = ra(o, e, mp, t); )
        if (n(o))
          return;
    }, hS = (e, t, n, s, o, r) => {
      let a = 0;
      const i = [], l = (f) => {
        let d = pS([f]);
        e === -1 && (d = d.reverse());
        for (let p = 0; p < d.length; p++) {
          const h = d[p];
          if (!n(h, c)) {
            if (i.length > 0 && t(h, Ds(i)) && a++, h.line = a, o(h))
              return !0;
            i.push(h);
          }
        }
        return !1;
      }, c = Ds(r.getClientRects());
      if (!c)
        return i;
      const u = r.getNode();
      return u && (l(u), LH(e, s, l, u)), i;
    }, $H = (e, t) => t.line > e, FH = (e, t) => t.line === e, MH = j(hS, Ba.Up, Zr, Qr), UH = j(hS, Ba.Down, Qr, Zr), bS = (e) => Ds(e.getClientRects()), zH = (e, t, n, s) => {
      const o = Dn(t);
      let r, a, i, l;
      const c = [];
      let u = 0;
      e === 1 ? (r = o.next, a = Qr, i = Zr, l = N.after(s)) : (r = o.prev, a = Zr, i = Qr, l = N.before(s));
      const f = bS(l);
      do {
        if (!l.isVisible())
          continue;
        const d = bS(l);
        if (i(d, f))
          continue;
        c.length > 0 && a(d, Ds(c)) && u++;
        const p = Zs(d);
        if (p.position = l, p.line = u, n(p))
          return c;
        c.push(p);
      } while (l = r(l));
      return c;
    }, CS = (e) => (t) => $H(e, t), Vd = (e) => (t) => FH(e, t), ns = (e, t) => {
      e.selection.setRng(t), ga(e, e.selection.getRng());
    }, jd = (e, t, n) => m.some(Bd(e, t, n)), vS = (e, t, n, s, o, r) => {
      const a = t === tt.Forwards, i = Dn(e.getBody()), l = j(Fu, a ? i.next : i.prev), c = a ? s : o;
      if (!n.collapsed) {
        const h = Ii(n);
        if (r(h))
          return ts(t, e, h, t === tt.Backwards, !1);
        if ($d(e)) {
          const g = n.cloneRange();
          return g.collapse(t === tt.Backwards), m.from(g);
        }
      }
      const u = la(t, e.getBody(), n);
      if (c(u))
        return Pa(e, u.getNode(!a));
      let f = l(u);
      const d = up(n);
      if (f)
        f = Qt(a, f);
      else
        return d ? m.some(n) : m.none();
      if (c(f))
        return ts(t, e, f.getNode(!a), a, !1);
      const p = l(f);
      return p && c(p) && Wi(f, p) ? ts(t, e, p.getNode(!a), a, !1) : d ? jd(e, f.toRange(), !1) : m.none();
    }, yS = (e, t, n, s, o, r) => {
      const a = la(t, e.getBody(), n), i = Ds(a.getClientRects()), l = t === Ba.Down, c = e.getBody();
      if (!i)
        return m.none();
      if ($d(e)) {
        const b = l ? N.fromRangeEnd(n) : N.fromRangeStart(n);
        return (l ? DH : PH)(c, b).orThunk(() => m.from(b)).map((y) => y.toRange());
      }
      const f = (l ? UH : MH)(c, CS(1), a), d = se(f, Vd(1)), p = i.left, h = gS(d, p);
      if (h && r(h.node)) {
        const b = Math.abs(p - h.left), v = Math.abs(p - h.right);
        return ts(t, e, h.node, b < v, !1);
      }
      let g;
      if (s(a) ? g = a.getNode() : o(a) ? g = a.getNode(!0) : g = Ii(n), g) {
        const b = zH(t, c, CS(1), g);
        let v = gS(se(b, Vd(1)), p);
        if (v || (v = Ds(se(b, Vd(0))), v))
          return jd(e, v.position.toRange(), !1);
      }
      return d.length === 0 ? qd(e, l).filter(l ? o : s).map((b) => Bd(e, b.toRange(), !1)) : m.none();
    }, qd = (e, t) => {
      const n = e.selection.getRng(), s = t ? N.fromRangeEnd(n) : N.fromRangeStart(n), o = $P(s.container(), e.getBody());
      if (t) {
        const r = Oa(o, s);
        return Ps(r.positions);
      } else {
        const r = Da(o, s);
        return Pt(r.positions);
      }
    }, ES = (e, t, n) => qd(e, t).filter(n).exists((s) => (e.selection.setRng(s.toRange()), !0)), Rl = (e, t) => {
      const n = e.dom.createRng();
      n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n);
    }, SS = (e, t) => {
      e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected");
    }, wS = (e, t, n) => Ud(t, n).map((s) => (Rl(e, s), n)), HH = (e, t, n) => {
      const s = N.fromRangeStart(e);
      if (e.collapsed)
        return s;
      {
        const o = N.fromRangeEnd(e);
        return n ? Bt(t, o).getOr(o) : Nt(t, s).getOr(s);
      }
    }, WH = (e, t, n) => {
      const s = e.getBody(), o = HH(e.selection.getRng(), s, n), r = j(io, e);
      return kH(n, r, s, o).bind((i) => wS(e, t, i));
    }, VH = (e, t, n) => {
      const s = he(mt(C.fromDom(t.getRoot()), '*[data-mce-selected="inline-boundary"]'), (a) => a.dom), o = se(s, e), r = se(n, e);
      P(oi(o, r), j(SS, !1)), P(oi(r, o), j(SS, !0));
    }, jH = (e, t) => {
      const n = t.get();
      if (e.selection.isCollapsed() && !e.composing && n) {
        const s = N.fromRangeStart(e.selection.getRng());
        N.isTextPosition(s) && !H1(s) && (Rl(e, _P(n, s)), t.set(null));
      }
    }, qH = (e, t, n, s) => {
      if (t.selection.isCollapsed()) {
        const o = se(s, e);
        P(o, (r) => {
          const a = N.fromRangeStart(t.selection.getRng());
          Ln(e, t.getBody(), a).bind((i) => wS(t, n, i));
        });
      }
    }, kS = (e, t, n) => na(e) ? WH(e, t, n).isSome() : !1, _S = (e, t, n) => na(t) ? xH(e, t) : !1, KH = (e) => {
      const t = et(null), n = j(io, e);
      return e.on("NodeChange", (s) => {
        na(e) && (VH(n, e.dom, s.parents), jH(e, t), qH(n, e, t, s.parents));
      }), t;
    }, GH = j(_S, !0), YH = j(_S, !1), Pl = (e, t, n) => {
      if (na(e)) {
        const s = qd(e, t).getOrThunk(() => {
          const o = e.selection.getRng();
          return t ? N.fromRangeEnd(o) : N.fromRangeStart(o);
        });
        return Ln(j(io, e), e.getBody(), s).exists((o) => {
          const r = Nl(o);
          return Ud(n, r).exists((a) => (Rl(e, a), !0));
        });
      } else
        return !1;
    }, XH = (e, t) => {
      const n = document.createRange();
      return n.setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n;
    }, ZH = (e) => dt(pt(e), ln(e), (t, n) => {
      const s = Qt(!0, t), o = Qt(!1, n);
      return Nt(e, s).forall((r) => r.isEqual(o));
    }).getOr(!0), xS = (e, t) => (n) => Ud(t, n).map((s) => () => Rl(e, s)), NS = (e, t, n, s) => {
      const o = e.getBody(), r = j(io, e);
      e.undoManager.ignore(() => {
        e.selection.setRng(XH(n, s)), Df(e), Ln(r, o, N.fromRangeStart(e.selection.getRng())).map(Hd).bind(xS(e, t)).each(br);
      }), e.nodeChanged();
    }, QH = (e, t) => {
      const n = gs(t, e);
      return n || e;
    }, JH = (e, t, n, s) => {
      const o = QH(e.getBody(), s.container()), r = j(io, e), a = Ln(r, o, s);
      return a.bind((l) => n ? l.fold(V(m.some(Hd(l))), m.none, V(m.some(Nl(l))), m.none) : l.fold(m.none, V(m.some(Nl(l))), m.none, V(m.some(Hd(l))))).map(xS(e, t)).getOrThunk(() => {
        const l = Ho(n, o, s), c = l.bind((u) => Ln(r, o, u));
        return dt(a, c, () => ys(r, o, s).bind((u) => ZH(u) ? m.some(() => {
          ao(e, n, C.fromDom(u));
        }) : m.none())).getOrThunk(() => c.bind(() => l.map((u) => () => {
          n ? NS(e, t, s, u) : NS(e, t, u, s);
        })));
      });
    }, Kd = (e, t, n) => {
      if (e.selection.isCollapsed() && na(e)) {
        const s = N.fromRangeStart(e.selection.getRng());
        return JH(e, t, n, s);
      }
      return m.none();
    }, eW = (e) => Lc(e) > 1, AS = (e, t) => {
      const n = C.fromDom(e.getBody()), s = C.fromDom(e.selection.getStart()), o = es(s, n);
      return vr(o, t).fold(V(o), (r) => o.slice(0, r));
    }, tW = (e) => Lc(e) === 1, nW = (e) => AS(e, (t) => e.schema.isBlock(pe(t)) || eW(t)), sW = (e) => AS(e, (t) => e.schema.isBlock(pe(t))), TS = (e, t) => {
      const n = j(Mv, e);
      return sn(t, (s) => n(s) ? [s.dom] : []);
    }, RS = (e) => {
      const t = sW(e);
      return TS(e, t);
    }, oW = (e, t, n, s) => {
      const o = TS(t, s);
      if (o.length === 0)
        ao(t, e, n);
      else {
        const r = Fv(n.dom, o);
        t.selection.setRng(r.toRange());
      }
    }, rW = (e, t) => {
      const n = se(nW(e), tW);
      return Ps(n).bind((s) => {
        const o = N.fromRangeStart(e.selection.getRng());
        return uv(t, o, s.dom) && !nf(s) ? m.some(() => oW(t, e, s, n)) : m.none();
      });
    }, aW = (e, t) => {
      const n = t.parentElement;
      return $e(t) && !kt(n) && e.dom.isEmpty(n);
    }, iW = (e) => nf(C.fromDom(e)), PS = (e, t) => {
      const n = e.selection.getStart(), s = aW(e, n) || iW(n) ? Fv(n, t) : IL(e.selection.getRng(), t);
      e.selection.setRng(s.toRange());
    }, lW = (e, t) => {
      const n = oi(t, RS(e));
      n.length > 0 && PS(e, n);
    }, DS = (e) => B(e.startContainer), cW = (e) => e.startOffset === 0 && DS(e), uW = (e, t) => {
      const n = t.startContainer.parentElement;
      return !kt(n) && Mv(e, C.fromDom(n));
    }, fW = (e) => {
      const t = e.startContainer.parentNode, n = e.endContainer.parentNode;
      return !kt(t) && !kt(n) && t.isEqualNode(n);
    }, dW = (e) => {
      const t = e.endContainer;
      return e.endOffset === (B(t) ? t.length : t.childNodes.length);
    }, mW = (e) => fW(e) && dW(e), gW = (e) => !e.endContainer.isEqualNode(e.commonAncestorContainer), pW = (e) => mW(e) || gW(e), hW = (e) => {
      const t = e.selection.getRng();
      return cW(t) && uW(e, t) && pW(t);
    }, bW = (e) => {
      if (hW(e)) {
        const t = RS(e);
        return m.some(() => {
          Df(e), lW(e, t);
        });
      } else
        return m.none();
    }, Gd = (e, t) => e.selection.isCollapsed() ? rW(e, t) : bW(e), CW = (e, t) => K1(e, (n) => Gt(n.dom), (n) => t.isBlock(pe(n))), vW = (e) => CW(C.fromDom(e.selection.getStart()), e.schema), yW = (e) => {
      const t = e.selection.getRng();
      return t.collapsed && (DS(t) || e.dom.isEmpty(t.startContainer)) && !vW(e);
    }, Ia = (e) => (yW(e) && PS(e, []), !0), Yd = (e, t, n) => M(n) ? m.some(() => {
      e._selectionOverrides.hideFakeCaret(), ao(e, t, C.fromDom(n));
    }) : m.none(), EW = (e, t) => {
      const n = t ? pa : ha, s = t ? tt.Forwards : tt.Backwards, o = la(s, e.getBody(), e.selection.getRng());
      return n(o) ? Yd(e, t, o.getNode(!t)) : m.from(Qt(t, o)).filter((r) => n(r) && Wi(o, r)).bind((r) => Yd(e, t, r.getNode(!t)));
    }, SW = (e, t) => {
      const n = e.selection.getNode();
      return An(n) ? Yd(e, t, n) : m.none();
    }, Xd = (e, t) => e.selection.isCollapsed() ? EW(e, t) : SW(e, t), wW = (e) => Ls(e, (t) => rn(t.dom) || De(t.dom)).exists((t) => rn(t.dom)), Zd = (e) => ui(e ?? "").getOr(0), OS = (e, t) => {
      const n = e || wN(t) ? "margin" : "padding", s = Nn(t, "direction") === "rtl" ? "-right" : "-left";
      return n + s;
    }, kW = (e, t, n, s, o, r) => {
      const a = OS(n, C.fromDom(r)), i = Zd(e.getStyle(r, a));
      if (t === "outdent") {
        const l = Math.max(0, i - s);
        e.setStyle(r, a, l ? l + o : "");
      } else {
        const l = i + s + o;
        e.setStyle(r, a, l);
      }
    }, _W = (e, t) => zn(t, (n) => {
      const s = OS(Oh(e), n), o = hi(n, s).map(Zd).getOr(0);
      return e.dom.getContentEditable(n.dom) !== "false" && o > 0;
    }), BS = (e) => {
      const t = LS(e);
      return !e.mode.isReadOnly() && (t.length > 1 || _W(e, t));
    }, IS = (e) => Yc(e) || Fr(e), xW = (e) => on(e).exists(IS), LS = (e) => se(zc(e.selection.getSelectedBlocks()), (t) => !IS(t) && !xW(t) && wW(t)), $S = (e, t) => {
      var n, s;
      const { dom: o } = e, r = pR(e), a = (s = (n = /[a-z%]+$/i.exec(r)) === null || n === void 0 ? void 0 : n[0]) !== null && s !== void 0 ? s : "px", i = Zd(r), l = Oh(e);
      P(LS(e), (c) => {
        kW(o, t, l, i, a, c.dom);
      });
    }, NW = (e) => $S(e, "indent"), FS = (e) => $S(e, "outdent"), MS = (e) => {
      if (e.selection.isCollapsed() && BS(e)) {
        const t = e.dom, n = e.selection.getRng(), s = N.fromRangeStart(n), o = t.getParent(n.startContainer, t.isBlock);
        if (o !== null && _f(C.fromDom(o), s, e.schema))
          return m.some(() => FS(e));
      }
      return m.none();
    }, US = (e, t, n) => wo([
      MS,
      Fd,
      Id,
      (s, o) => Kd(s, t, o),
      Dd,
      zf,
      Md,
      Xd,
      Od,
      Gd
    ], (s) => s(e, n)).filter((s) => e.selection.isEditable()), AW = (e, t) => {
      US(e, t, !1).fold(() => {
        e.selection.isEditable() && (Df(e), Of(e));
      }, br);
    }, TW = (e, t) => {
      US(e, t, !0).fold(() => {
        e.selection.isEditable() && V1(e);
      }, br);
    }, RW = (e, t) => {
      e.addCommand("delete", () => {
        AW(e, t);
      }), e.addCommand("forwardDelete", () => {
        TW(e, t);
      });
    }, zS = 5, PW = 400, HS = (e) => e.touches === void 0 || e.touches.length !== 1 ? m.none() : m.some(e.touches[0]), DW = (e, t) => {
      const n = Math.abs(e.clientX - t.x), s = Math.abs(e.clientY - t.y);
      return n > zS || s > zS;
    }, OW = (e) => {
      const t = fs(), n = et(!1), s = vu((o) => {
        e.dispatch("longpress", {
          ...o,
          type: "longpress"
        }), n.set(!0);
      }, PW);
      e.on("touchstart", (o) => {
        HS(o).each((r) => {
          s.cancel();
          const a = {
            x: r.clientX,
            y: r.clientY,
            target: o.target
          };
          s.throttle(o), n.set(!1), t.set(a);
        });
      }, !0), e.on("touchmove", (o) => {
        s.cancel(), HS(o).each((r) => {
          t.on((a) => {
            DW(r, a) && (t.clear(), n.set(!1), e.dispatch("longpresscancel"));
          });
        });
      }, !0), e.on("touchend touchcancel", (o) => {
        s.cancel(), o.type !== "touchcancel" && t.get().filter((r) => r.target.isEqualNode(o.target)).each(() => {
          n.get() ? o.preventDefault() : e.dispatch("tap", {
            ...o,
            type: "tap"
          });
        });
      }, !0);
    }, Qd = (e, t) => oe(e, t.nodeName), BW = (e, t) => B(t) ? !0 : q(t) ? !Qd(e.getBlockElements(), t) && !Yt(t) && !Vs(e, t) && !eu(t) : !1, IW = (e, t, n) => Fe(zC(C.fromDom(n), C.fromDom(t)), (s) => Qd(e, s.dom)), LW = (e, t) => {
      if (B(t)) {
        if (t.data.length === 0)
          return !0;
        if (/^\s+$/.test(t.data))
          return !t.nextSibling || Qd(e, t.nextSibling) || eu(t.nextSibling);
      }
      return !1;
    }, WS = (e) => e.dom.create(gt(e), ta(e)), $W = (e) => {
      const t = e.dom, n = e.selection, s = e.schema, o = s.getBlockElements(), r = n.getStart(), a = e.getBody();
      let i, l, c = !1;
      const u = gt(e);
      if (!r || !q(r))
        return;
      const f = a.nodeName.toLowerCase();
      if (!s.isValidChild(f, u.toLowerCase()) || IW(o, a, r))
        return;
      const d = n.getRng(), { startContainer: p, startOffset: h, endContainer: g, endOffset: b } = d, v = ro(e);
      let y = a.firstChild;
      for (; y; )
        if (q(y) && iA(s, y), BW(s, y)) {
          if (LW(o, y)) {
            l = y, y = y.nextSibling, t.remove(l);
            continue;
          }
          i || (i = WS(e), a.insertBefore(i, y), c = !0), l = y, y = y.nextSibling, i.appendChild(l);
        } else
          i = null, y = y.nextSibling;
      c && v && (d.setStart(p, h), d.setEnd(g, b), n.setRng(d), e.nodeChanged());
    }, VS = (e, t, n) => {
      const s = C.fromDom(WS(e)), o = Ur();
      We(s, o), n(t, s);
      const r = document.createRange();
      return r.setStartBefore(o.dom), r.setEndBefore(o.dom), r;
    }, FW = (e) => {
      e.on("NodeChange", j($W, e));
    }, jS = (e) => (t) => (" " + t.attr("class") + " ").indexOf(e) !== -1, MW = (e, t, n) => function(s) {
      const o = arguments, r = o[o.length - 2], a = r > 0 ? t.charAt(r - 1) : "";
      if (a === '"')
        return s;
      if (a === ">") {
        const i = t.lastIndexOf("<", r);
        if (i !== -1 && t.substring(i, r).indexOf('contenteditable="false"') !== -1)
          return s;
      }
      return '<span class="' + n + '" data-mce-content="' + e.dom.encode(o[0]) + '">' + e.dom.encode(typeof o[1] == "string" ? o[1] : o[0]) + "</span>";
    }, UW = (e, t, n) => {
      let s = t.length, o = n.content;
      if (n.format !== "raw") {
        for (; s--; )
          o = o.replace(t[s], MW(e, o, Uh(e)));
        n.content = o;
      }
    }, zW = (e, t) => zn(e, (n) => {
      const s = t.match(n);
      return s !== null && s[0].length === t.length;
    }), HW = (e) => {
      const t = "contenteditable", n = " " + L.trim(iP(e)) + " ", s = " " + L.trim(Uh(e)) + " ", o = jS(n), r = jS(s), a = lP(e);
      a.length > 0 && e.on("BeforeSetContent", (i) => {
        UW(e, a, i);
      }), e.parser.addAttributeFilter("class", (i) => {
        let l = i.length;
        for (; l--; ) {
          const c = i[l];
          o(c) ? c.attr(t, "true") : r(c) && c.attr(t, "false");
        }
      }), e.serializer.addAttributeFilter(t, (i) => {
        let l = i.length;
        for (; l--; ) {
          const c = i[l];
          if (!o(c) && !r(c))
            continue;
          const u = c.attr("data-mce-content");
          a.length > 0 && u ? zW(a, u) ? (c.name = "#text", c.type = 3, c.raw = !0, c.value = u) : c.remove() : c.attr(t, null);
        }
      });
    }, WW = (e) => Or(C.fromDom(e.getBody()), "*[data-mce-caret]").map((t) => t.dom).getOrNull(), qS = (e, t) => {
      t.hasAttribute("data-mce-caret") && (Qc(t), e.selection.setRng(e.selection.getRng()), e.selection.scrollIntoView(t));
    }, VW = (e, t) => {
      const n = WW(e);
      if (n) {
        if (t.type === "compositionstart") {
          t.preventDefault(), t.stopPropagation(), qS(e, n);
          return;
        }
        cp(n) && (qS(e, n), e.undoManager.add());
      }
    }, jW = (e) => {
      e.on("keyup compositionstart", j(VW, e));
    }, KS = De, qW = (e, t, n) => vS(t, e, n, Cs, vs, KS), KW = (e, t, n) => yS(t, e, n, (r) => Cs(r) || MC(r), (r) => vs(r) || UC(r), KS), GW = (e) => {
      const t = e.dom.create(gt(e));
      return t.innerHTML = '<br data-mce-bogus="1">', t;
    }, GS = (e, t, n) => {
      const s = Dn(e.getBody()), o = j(Fu, t === 1 ? s.next : s.prev);
      if (n.collapsed) {
        const r = e.dom.getParent(n.startContainer, "PRE");
        if (!r)
          return;
        if (!o(N.fromRangeStart(n))) {
          const i = C.fromDom(GW(e));
          t === 1 ? Gn(C.fromDom(r), i) : Ot(C.fromDom(r), i), e.selection.select(i.dom, !0), e.selection.collapse();
        }
      }
    }, YW = (e, t) => {
      const n = t ? tt.Forwards : tt.Backwards, s = e.selection.getRng();
      return qW(n, e, s).orThunk(() => (GS(e, n, s), m.none()));
    }, XW = (e, t) => {
      const n = t ? 1 : -1, s = e.selection.getRng();
      return KW(n, e, s).orThunk(() => (GS(e, n, s), m.none()));
    }, ZW = (e, t) => {
      const n = t ? e.getEnd(!0) : e.getStart(!0);
      return av(n) ? !t : t;
    }, YS = (e, t) => YW(e, ZW(e.selection, t)).exists((n) => (ns(e, n), !0)), XS = (e, t) => XW(e, t).exists((n) => (ns(e, n), !0)), ZS = (e, t) => ES(e, t, t ? vs : Cs), Dl = (e, t) => Ld(e, !t).map((n) => {
      const s = n.toRange(), o = e.selection.getRng();
      return t ? s.setStart(o.startContainer, o.startOffset) : s.setEnd(o.endContainer, o.endOffset), s;
    }).exists((n) => (ns(e, n), !0)), QW = (e) => ke(["figcaption"], pe(e)), JW = (e, t, n) => {
      const s = j(ve, t);
      return Ls(C.fromDom(e.container()), (o) => n.isBlock(pe(o)), s).filter(QW);
    }, eV = (e, t, n) => t ? fS(e.dom, n) : uS(e.dom, n), tV = (e, t) => {
      const n = C.fromDom(e.getBody()), s = N.fromRangeStart(e.selection.getRng());
      return JW(s, n, e.schema).exists(() => {
        if (eV(n, t, s)) {
          const r = VS(e, n, t ? We : Uc);
          return e.selection.setRng(r), !0;
        } else
          return !1;
      });
    }, QS = (e, t) => e.selection.isCollapsed() ? tV(e, t) : !1, nV = (e, t, n) => {
      const s = e.selection.getRng(), o = N.fromRangeStart(s);
      return e.getBody().firstChild === t && uS(n, o) ? (e.execCommand("InsertNewBlockBefore"), !0) : !1;
    }, sV = (e, t) => {
      const n = e.selection.getRng(), s = N.fromRangeStart(n);
      return e.getBody().lastChild === t && fS(t, s) ? (e.execCommand("InsertNewBlockAfter"), !0) : !1;
    }, oV = (e, t) => t ? m.from(e.dom.getParent(e.selection.getNode(), "details")).map((n) => sV(e, n)).getOr(!1) : m.from(e.dom.getParent(e.selection.getNode(), "summary")).bind((n) => m.from(e.dom.getParent(n, "details")).map((s) => nV(e, s, n))).getOr(!1), JS = (e, t) => oV(e, t), ew = {
      shiftKey: !1,
      altKey: !1,
      ctrlKey: !1,
      metaKey: !1,
      keyCode: 0
    }, rV = (e) => he(e, (t) => ({
      ...ew,
      ...t
    })), aV = (e) => he(e, (t) => ({
      ...ew,
      ...t
    })), tw = (e, t) => t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey && t.metaKey === e.metaKey, iV = (e, t) => sn(rV(e), (n) => tw(n, t) ? [n] : []), lV = (e, t) => sn(aV(e), (n) => tw(n, t) ? [n] : []), te = (e, ...t) => () => e.apply(null, t), La = (e, t) => Ye(iV(e, t), (n) => n.action()), nw = (e, t) => wo(lV(e, t), (n) => n.action()), sw = (e, t) => {
      const n = t ? tt.Forwards : tt.Backwards, s = e.selection.getRng();
      return vS(e, n, s, pa, ha, An).exists((o) => (ns(e, o), !0));
    }, ow = (e, t) => {
      const n = t ? 1 : -1, s = e.selection.getRng();
      return yS(e, n, s, pa, ha, An).exists((o) => (ns(e, o), !0));
    }, rw = (e, t) => ES(e, t, t ? ha : pa), aw = Tn.generate([
      { none: ["current"] },
      { first: ["current"] },
      {
        middle: [
          "current",
          "target"
        ]
      },
      { last: ["current"] }
    ]), $a = {
      ...aw,
      none: (e) => aw.none(e)
    }, cV = (e, t) => iw(e, t, He), iw = (e, t, n) => sn(at(e), (s) => gn(s, t) ? n(s) ? [s] : [] : iw(s, t, n)), uV = (e, t, n = Le) => {
      if (n(t))
        return m.none();
      if (ke(e, pe(t)))
        return m.some(t);
      const s = (o) => gn(o, "table") || n(o);
      return Dr(t, e.join(","), s);
    }, fV = (e, t) => uV([
      "td",
      "th"
    ], e, t), dV = (e) => cV(e, "th,td"), lw = (e, t) => $s(e, "table", t), Jd = (e, t, n, s, o = He) => {
      const r = s === 1;
      if (!r && n <= 0)
        return $a.first(e[0]);
      if (r && n >= e.length - 1)
        return $a.last(e[e.length - 1]);
      {
        const a = n + s, i = e[a];
        return o(i) ? $a.middle(t, i) : Jd(e, t, a, s, o);
      }
    }, cw = (e, t) => lw(e, t).bind((n) => {
      const s = dV(n);
      return vr(s, (r) => ve(e, r)).map((r) => ({
        index: r,
        all: s
      }));
    }), mV = (e, t, n) => cw(e, n).fold(() => $a.none(e), (o) => Jd(o.all, e, o.index, 1, t)), gV = (e, t, n) => cw(e, n).fold(() => $a.none(), (o) => Jd(o.all, e, o.index, -1, t)), pV = (e, t) => ({
      left: e.left - t,
      top: e.top - t,
      right: e.right + t * 2,
      bottom: e.bottom + t * 2,
      width: e.width + t,
      height: e.height + t
    }), hV = (e, t) => sn(t, (n) => {
      const s = pV(Zs(n.getBoundingClientRect()), -1);
      return [
        {
          x: s.left,
          y: e(s),
          cell: n
        },
        {
          x: s.right,
          y: e(s),
          cell: n
        }
      ];
    }), bV = (e, t, n) => Rt(e, (s, o) => s.fold(() => m.some(o), (r) => {
      const a = Math.sqrt(Math.abs(r.x - t) + Math.abs(r.y - n)), i = Math.sqrt(Math.abs(o.x - t) + Math.abs(o.y - n));
      return m.some(i < a ? o : r);
    }), m.none()), uw = (e, t, n, s, o) => {
      const r = mt(C.fromDom(n), "td,th,caption").map((i) => i.dom), a = se(hV(e, r), (i) => t(i, o));
      return bV(a, s, o).map((i) => i.cell);
    }, CV = (e) => e.bottom, vV = (e) => e.top, yV = (e, t) => e.y < t, EV = (e, t) => e.y > t, SV = j(uw, CV, yV), wV = j(uw, vV, EV), kV = (e, t) => Pt(t.getClientRects()).bind((n) => SV(e, n.left, n.top)).bind((n) => Tl(RH(n), t)), _V = (e, t) => Ps(t.getClientRects()).bind((n) => wV(e, n.left, n.top)).bind((n) => Tl(TH(n), t)), xV = (e, t, n) => n.breakAt.exists((s) => e(t, s).breakAt.isSome()), NV = (e) => e.breakType === $n.Wrap && e.positions.length === 0, AV = (e) => e.breakType === $n.Br && e.positions.length === 1, fw = (e, t, n) => {
      const s = e(t, n);
      return NV(s) || !$e(n.getNode()) && AV(s) ? !xV(e, t, s) : s.breakAt.isNone();
    }, TV = j(fw, Da), RV = j(fw, Oa), PV = (e, t, n) => {
      const s = N.fromRangeStart(t);
      return Wo(!e, n).exists((o) => o.isEqual(s));
    }, DV = (e, t, n, s) => {
      const o = e.selection.getRng(), r = t ? 1 : -1;
      return Gh() && PV(t, o, n) ? (ts(r, e, n, !t, !1).each((a) => {
        ns(e, a);
      }), !0) : !1;
    }, OV = (e, t, n) => kV(t, n).orThunk(() => Pt(n.getClientRects()).bind((s) => Wd(lS(e, N.before(t)), s.left))).getOr(N.before(t)), BV = (e, t, n) => _V(t, n).orThunk(() => Pt(n.getClientRects()).bind((s) => Wd(cS(e, N.after(t)), s.left))).getOr(N.after(t)), dw = (e, t) => {
      const n = t.getNode(e);
      return Zn(n) ? m.some(n) : m.none();
    }, IV = (e, t, n) => {
      t.undoManager.transact(() => {
        const s = e ? Gn : Ot, o = VS(t, C.fromDom(n), s);
        ns(t, o);
      });
    }, mw = (e, t, n) => {
      const s = dw(!!t, n), o = t === !1;
      s.fold(() => ns(e, n.toRange()), (r) => Wo(o, e.getBody()).filter((a) => a.isEqual(n)).fold(() => ns(e, n.toRange()), (a) => IV(t, e, r)));
    }, LV = (e, t, n, s) => {
      const o = e.selection.getRng(), r = N.fromRangeStart(o), a = e.getBody();
      if (!t && TV(s, r)) {
        const i = OV(a, n, r);
        return mw(e, t, i), !0;
      } else if (t && RV(s, r)) {
        const i = BV(a, n, r);
        return mw(e, t, i), !0;
      } else
        return !1;
    }, gw = (e, t, n) => m.from(e.dom.getParent(e.selection.getNode(), "td,th")).bind((s) => m.from(e.dom.getParent(s, "table")).map((o) => n(e, t, o, s))).getOr(!1), pw = (e, t) => gw(e, t, DV), em = (e, t) => gw(e, t, LV), $V = (e) => {
      const t = Go.exact(e, 0, e, 0);
      return wO(t);
    }, hw = (e, t, n) => n.fold(m.none, m.none, (s, o) => TB(o).map((r) => $V(r)), (s) => (e.execCommand("mceTableInsertRowAfter"), bw(e, t, s))), bw = (e, t, n) => hw(e, t, mV(n, Fs)), FV = (e, t, n) => hw(e, t, gV(n, Fs)), Cw = (e, t) => {
      const n = [
        "table",
        "li",
        "dl"
      ], s = C.fromDom(e.getBody()), o = (i) => {
        const l = pe(i);
        return ve(i, s) || ke(n, l);
      }, r = e.selection.getRng(), a = C.fromDom(t ? r.endContainer : r.startContainer);
      return fV(a, o).map((i) => (lw(i, o).each((u) => {
        e.model.table.clearSelectedCells(u.dom);
      }), e.selection.collapse(!t), (t ? bw : FV)(e, o, i).each((u) => {
        e.selection.setRng(u);
      }), !0)).getOr(!1);
    }, MV = (e, t, n) => {
      const s = be.os.isMacOS() || be.os.isiOS();
      La([
        {
          keyCode: H.RIGHT,
          action: te(YS, e, !0)
        },
        {
          keyCode: H.LEFT,
          action: te(YS, e, !1)
        },
        {
          keyCode: H.UP,
          action: te(XS, e, !1)
        },
        {
          keyCode: H.DOWN,
          action: te(XS, e, !0)
        },
        ...s ? [
          {
            keyCode: H.UP,
            action: te(Dl, e, !1),
            metaKey: !0,
            shiftKey: !0
          },
          {
            keyCode: H.DOWN,
            action: te(Dl, e, !0),
            metaKey: !0,
            shiftKey: !0
          }
        ] : [],
        {
          keyCode: H.RIGHT,
          action: te(pw, e, !0)
        },
        {
          keyCode: H.LEFT,
          action: te(pw, e, !1)
        },
        {
          keyCode: H.UP,
          action: te(em, e, !1)
        },
        {
          keyCode: H.DOWN,
          action: te(em, e, !0)
        },
        {
          keyCode: H.UP,
          action: te(em, e, !1)
        },
        {
          keyCode: H.UP,
          action: te(JS, e, !1)
        },
        {
          keyCode: H.DOWN,
          action: te(JS, e, !0)
        },
        {
          keyCode: H.RIGHT,
          action: te(sw, e, !0)
        },
        {
          keyCode: H.LEFT,
          action: te(sw, e, !1)
        },
        {
          keyCode: H.UP,
          action: te(ow, e, !1)
        },
        {
          keyCode: H.DOWN,
          action: te(ow, e, !0)
        },
        {
          keyCode: H.RIGHT,
          action: te(kS, e, t, !0)
        },
        {
          keyCode: H.LEFT,
          action: te(kS, e, t, !1)
        },
        {
          keyCode: H.RIGHT,
          ctrlKey: !s,
          altKey: s,
          action: te(GH, e, t)
        },
        {
          keyCode: H.LEFT,
          ctrlKey: !s,
          altKey: s,
          action: te(YH, e, t)
        },
        {
          keyCode: H.UP,
          action: te(QS, e, !1)
        },
        {
          keyCode: H.DOWN,
          action: te(QS, e, !0)
        }
      ], n).each((o) => {
        n.preventDefault();
      });
    }, UV = (e, t) => {
      e.on("keydown", (n) => {
        n.isDefaultPrevented() || MV(e, t, n);
      });
    }, yn = (e, t) => ({
      container: e,
      offset: t
    }), Ol = Ne.DOM, Bl = (e) => (t) => e === t ? -1 : 0, zV = (e) => (t) => e.isBlock(t) || ke([
      "BR",
      "IMG",
      "HR",
      "INPUT"
    ], t.nodeName) || e.getContentEditable(t) === "false", tm = (e, t, n) => {
      if (B(e) && t >= 0)
        return m.some(yn(e, t));
      {
        const s = Xs(Ol);
        return m.from(s.backwards(e, t, Bl(e), n)).map((o) => yn(o.container, o.container.data.length));
      }
    }, HV = (e, t, n) => {
      if (B(e) && t >= e.length)
        return m.some(yn(e, t));
      {
        const s = Xs(Ol);
        return m.from(s.forwards(e, t, Bl(e), n)).map((o) => yn(o.container, 0));
      }
    }, nm = (e, t, n) => {
      if (!B(e))
        return m.none();
      const s = e.data;
      if (t >= 0 && t <= s.length)
        return m.some(yn(e, t));
      {
        const o = Xs(Ol);
        return m.from(o.backwards(e, t, Bl(e), n)).bind((r) => {
          const a = r.container.data;
          return nm(r.container, t + a.length, n);
        });
      }
    }, vw = (e, t, n) => {
      if (!B(e))
        return m.none();
      const s = e.data;
      if (t <= s.length)
        return m.some(yn(e, t));
      {
        const o = Xs(Ol);
        return m.from(o.forwards(e, t, Bl(e), n)).bind((r) => vw(r.container, t - s.length, n));
      }
    }, sm = (e, t, n, s, o) => {
      const r = Xs(e, zV(e));
      return m.from(r.backwards(t, n, s, o));
    }, WV = (e) => e.collapsed && B(e.startContainer), yw = (e) => zt(e.toString().replace(/\u00A0/g, " ")), Ew = (e) => e !== "" && `  \f
\r	\v`.indexOf(e) !== -1, om = (e, t) => e.substring(t.length), VV = (e, t, n) => {
      let s;
      const o = n.charAt(0);
      for (s = t - 1; s >= 0; s--) {
        const r = e.charAt(s);
        if (Ew(r))
          return m.none();
        if (o === r && ft(e, n, s, t))
          break;
      }
      return m.some(s);
    }, jV = (e, t, n, s = 0) => {
      if (!WV(t))
        return m.none();
      const o = {
        text: "",
        offset: 0
      }, r = (i, l, c) => (o.text = c + o.text, o.offset += l, VV(o.text, o.offset, n).getOr(l)), a = e.getParent(t.startContainer, e.isBlock) || e.getRoot();
      return sm(e, t.startContainer, t.startOffset, r, a).bind((i) => {
        const l = t.cloneRange();
        if (l.setStart(i.container, i.offset), l.setEnd(t.endContainer, t.endOffset), l.collapsed)
          return m.none();
        const c = yw(l);
        return c.lastIndexOf(n) !== 0 || om(c, n).length < s ? m.none() : m.some({
          text: om(c, n),
          range: l,
          trigger: n
        });
      });
    }, Sw = (e, t, n, s = 0) => OB(C.fromDom(t.startContainer)).fold(() => jV(e, t, n, s), (o) => {
      const r = e.createRng();
      r.selectNode(o.dom);
      const a = yw(r);
      return m.some({
        range: r,
        text: om(a, n),
        trigger: n
      });
    }), qV = (e) => e.nodeType === Ng, KV = (e) => e.nodeType === _r, ww = (e) => {
      if (qV(e))
        return yn(e, e.data.length);
      {
        const t = e.childNodes;
        return t.length > 0 ? ww(t[t.length - 1]) : yn(e, t.length);
      }
    }, kw = (e, t) => {
      const n = e.childNodes;
      return n.length > 0 && t < n.length ? kw(n[t], 0) : n.length > 0 && KV(e) && n.length === t ? ww(n[n.length - 1]) : yn(e, t);
    }, GV = (e, t) => {
      var n;
      const s = (n = e.getParent(t.container, e.isBlock)) !== null && n !== void 0 ? n : e.getRoot();
      return sm(e, t.container, t.offset, (o, r) => r === 0 ? -1 : r, s).filter((o) => {
        const r = o.container.data.charAt(o.offset - 1);
        return !Ew(r);
      }).isSome();
    }, YV = (e) => (t) => {
      const n = kw(t.startContainer, t.startOffset);
      return !GV(e, n);
    }, XV = (e, t, n) => wo(n.triggers, (s) => Sw(e, t, s)), ZV = (e, t) => {
      const n = t(), s = e.selection.getRng();
      return XV(e.dom, s, n).bind((o) => _w(e, t, o));
    }, _w = (e, t, n, s = {}) => {
      var o;
      const r = t(), i = (o = e.selection.getRng().startContainer.nodeValue) !== null && o !== void 0 ? o : "", l = se(r.lookupByTrigger(n.trigger), (u) => n.text.length >= u.minChars && u.matches.getOrThunk(() => YV(e.dom))(n.range, i, n.text));
      if (l.length === 0)
        return m.none();
      const c = Promise.all(he(l, (u) => u.fetch(n.text, u.maxResults, s).then((d) => ({
        matchText: n.text,
        items: d,
        columns: u.columns,
        onAction: u.onAction,
        highlightOn: u.highlightOn
      }))));
      return m.some({
        lookupData: c,
        context: n
      });
    };
    var En;
    (function(e) {
      e[e.Error = 0] = "Error", e[e.Value = 1] = "Value";
    })(En || (En = {}));
    const rm = (e, t, n) => e.stype === En.Error ? t(e.serror) : n(e.svalue), QV = (e) => {
      const t = [], n = [];
      return P(e, (s) => {
        rm(s, (o) => n.push(o), (o) => t.push(o));
      }), {
        values: t,
        errors: n
      };
    }, JV = (e, t) => e.stype === En.Error ? {
      stype: En.Error,
      serror: t(e.serror)
    } : e, ej = (e, t) => e.stype === En.Value ? {
      stype: En.Value,
      svalue: t(e.svalue)
    } : e, tj = (e, t) => e.stype === En.Value ? t(e.svalue) : e, nj = (e, t) => e.stype === En.Error ? t(e.serror) : e, xw = (e) => ({
      stype: En.Value,
      svalue: e
    }), Nw = (e) => ({
      stype: En.Error,
      serror: e
    }), it = {
      fromResult: (e) => e.fold(Nw, xw),
      toResult: (e) => rm(e, xt.error, xt.value),
      svalue: xw,
      partition: QV,
      serror: Nw,
      bind: tj,
      bindError: nj,
      map: ej,
      mapError: JV,
      fold: rm
    }, am = (e) => vt(e) && Dt(e).length > 100 ? " removed due to size" : JSON.stringify(e, null, 2), sj = (e) => {
      const t = e.length > 10 ? e.slice(0, 10).concat([{
        path: [],
        getErrorInfo: V("... (only showing first ten failures)")
      }]) : e;
      return he(t, (n) => "Failed path: (" + n.path.join(" > ") + `)
` + n.getErrorInfo());
    }, Il = (e, t) => it.serror([{
      path: e,
      getErrorInfo: t
    }]), oj = (e, t, n) => Il(e, () => 'Could not find valid *required* value for "' + t + '" in ' + am(n)), rj = (e, t) => Il(e, () => 'Choice schema did not contain choice key: "' + t + '"'), aj = (e, t, n) => Il(e, () => 'The chosen schema: "' + n + '" did not exist in branches: ' + am(t)), ij = (e, t) => Il(e, V(t)), lj = (e, t, n, s) => Re(n, s).fold(() => aj(e, n, s), (r) => r.extract(e.concat(["branch: " + s]), t)), cj = (e, t) => ({
      extract: (o, r) => Re(r, e).fold(() => rj(o, e), (i) => lj(o, r, t, i)),
      toString: () => "chooseOn(" + e + "). Possible values: " + Dt(t)
    }), uj = (e, t) => t, fj = (e, t) => Qm(e) && Qm(t) ? Ll(e, t) : t, Aw = (e) => (...t) => {
      if (t.length === 0)
        throw new Error("Can't merge zero objects");
      const n = {};
      for (let s = 0; s < t.length; s++) {
        const o = t[s];
        for (const r in o)
          oe(o, r) && (n[r] = e(n[r], o[r]));
      }
      return n;
    }, Ll = Aw(fj), dj = Aw(uj), Tw = () => ({
      tag: "required",
      process: {}
    }), mj = (e) => ({
      tag: "defaultedThunk",
      process: e
    }), Rw = (e) => mj(V(e)), gj = () => ({
      tag: "option",
      process: {}
    }), pj = (e, t) => e.length > 0 ? it.svalue(Ll(t, dj.apply(void 0, e))) : it.svalue(t), Pw = (e) => Sn(it.serror, rg)(e), hj = {
      consolidateObj: (e, t) => {
        const n = it.partition(e);
        return n.errors.length > 0 ? Pw(n.errors) : pj(n.values, t);
      },
      consolidateArr: (e) => {
        const t = it.partition(e);
        return t.errors.length > 0 ? Pw(t.errors) : it.svalue(t.values);
      }
    }, bj = (e, t, n, s) => ({
      tag: "field",
      key: e,
      newKey: t,
      presence: n,
      prop: s
    }), Cj = (e, t) => ({
      tag: "custom",
      newKey: e,
      instantiator: t
    }), Dw = (e, t, n) => {
      switch (e.tag) {
        case "field":
          return t(e.key, e.newKey, e.presence, e.prop);
        case "custom":
          return n(e.newKey, e.instantiator);
      }
    }, im = (e) => {
      const t = (s, o) => it.bindError(e(o), (r) => ij(s, r)), n = V("val");
      return {
        extract: t,
        toString: n
      };
    }, vj = im(it.svalue), yj = (e, t, n, s) => Re(t, n).fold(() => oj(e, n, t), s), Ow = (e, t, n, s) => {
      const o = Re(e, t).getOrThunk(() => n(e));
      return s(o);
    }, Ej = (e, t, n) => n(Re(e, t)), Sj = (e, t, n, s) => {
      const o = Re(e, t).map((r) => r === !0 ? n(e) : r);
      return s(o);
    }, wj = (e, t, n, s, o) => {
      const r = (i) => o.extract(t.concat([s]), i), a = (i) => i.fold(() => it.svalue(m.none()), (l) => {
        const c = o.extract(t.concat([s]), l);
        return it.map(c, m.some);
      });
      switch (e.tag) {
        case "required":
          return yj(t, n, s, r);
        case "defaultedThunk":
          return Ow(n, s, e.process, r);
        case "option":
          return Ej(n, s, a);
        case "defaultedOptionThunk":
          return Sj(n, s, e.process, a);
        case "mergeWithThunk":
          return Ow(n, s, V({}), (i) => {
            const l = Ll(e.process(n), i);
            return r(l);
          });
      }
    }, kj = (e, t, n) => {
      const s = {}, o = [];
      for (const r of n)
        Dw(r, (a, i, l, c) => {
          const u = wj(l, e, t, a, c);
          it.fold(u, (f) => {
            o.push(...f);
          }, (f) => {
            s[i] = f;
          });
        }, (a, i) => {
          s[a] = i(t);
        });
      return o.length > 0 ? it.serror(o) : it.svalue(s);
    }, lm = (e) => ({
      extract: (s, o) => kj(s, o, e),
      toString: () => `obj{
` + he(e, (o) => Dw(o, (r, a, i, l) => r + " -> " + l.toString(), (r, a) => "state(" + r + ")")).join(`
`) + "}"
    }), Bw = (e) => ({
      extract: (s, o) => {
        const r = he(o, (a, i) => e.extract(s.concat(["[" + i + "]"]), a));
        return hj.consolidateArr(r);
      },
      toString: () => "array(" + e.toString() + ")"
    }), _j = (e) => im((t) => e(t).fold(it.serror, it.svalue)), xj = (e, t, n) => {
      const s = t.extract([e], n);
      return it.mapError(s, (o) => ({
        input: n,
        errors: o
      }));
    }, Nj = (e, t, n) => it.toResult(xj(e, t, n)), Aj = (e) => `Errors: 
` + sj(e.errors).join(`
`) + `

Input object: ` + am(e.input), Iw = (e, t) => cj(e, ai(t, lm)), Tj = V(vj), $l = (e, t) => im((n) => {
      const s = typeof n;
      return e(n) ? it.svalue(n) : it.serror(`Expected type: ${t} but got: ${s}`);
    }), Rj = $l(mn, "number"), Fl = $l(J, "string"), Pj = $l(Ts, "boolean"), cm = $l(Se, "function"), Fa = bj, Lw = Cj, Dj = (e) => _j((t) => ke(e, t) ? xt.value(t) : xt.error(`Unsupported value: "${t}", choose one of "${e.join(", ")}".`)), $w = (e, t) => Fa(e, e, Tw(), t), Fw = (e) => $w(e, Fl), Mw = (e) => $w(e, cm), Oj = (e, t) => Fa(e, e, Tw(), Bw(t)), um = (e, t) => Fa(e, e, gj(), t), Ml = (e) => um(e, Fl), Bj = (e) => um(e, cm), Ij = (e, t) => Fa(e, e, Rw(t), Tj()), tr = (e, t, n) => Fa(e, e, Rw(t), n), Uw = (e, t) => tr(e, t, Rj), Lj = (e, t) => tr(e, t, Fl), zw = (e, t, n) => tr(e, t, Dj(n)), fm = (e, t) => tr(e, t, Pj), dm = (e, t) => tr(e, t, cm), $j = (e, t, n) => tr(e, t, Bw(n)), Fj = Fw("type"), Mj = Mw("fetch"), mm = Mw("onAction"), Uj = dm("onSetup", () => ce), zj = Ml("text"), Hj = Ml("icon"), Wj = Ml("tooltip"), Vj = Ml("label"), jj = fm("active", !1), qj = fm("enabled", !0), Hw = fm("primary", !1), Kj = (e) => Ij("columns", e), Ma = (e) => Lj("type", e), Gj = lm([
      Fj,
      Fw("trigger"),
      Uw("minChars", 1),
      Kj(1),
      Uw("maxResults", 10),
      Bj("matches"),
      Mj,
      mm,
      $j("highlightOn", [], Fl)
    ]), Yj = (e) => Nj("Autocompleter", Gj, {
      trigger: e.ch,
      ...e
    }), gm = [
      qj,
      Wj,
      Hj,
      zj,
      Uj
    ], Ww = [jj].concat(gm), Xj = [
      dm("predicate", Le),
      zw("scope", "node", [
        "node",
        "editor"
      ]),
      zw("position", "selection", [
        "node",
        "selection",
        "line"
      ])
    ], Zj = gm.concat([
      Ma("contextformbutton"),
      Hw,
      mm,
      Lw("original", _t)
    ]), Qj = Ww.concat([
      Ma("contextformbutton"),
      Hw,
      mm,
      Lw("original", _t)
    ]), Jj = gm.concat([Ma("contextformbutton")]), eq = Ww.concat([Ma("contextformtogglebutton")]), tq = Iw("type", {
      contextformbutton: Zj,
      contextformtogglebutton: Qj
    });
    lm([
      Ma("contextform"),
      dm("initValue", V("")),
      Vj,
      Oj("commands", tq),
      um("launch", Iw("type", {
        contextformbutton: Jj,
        contextformtogglebutton: eq
      }))
    ].concat(Xj));
    const nq = (e) => {
      const t = e.ui.registry.getAll().popups, n = ai(t, (a) => Yj(a).fold((i) => {
        throw new Error(Aj(i));
      }, _t)), s = ig(ii(n, (a) => a.trigger)), o = kc(n);
      return {
        dataset: n,
        triggers: s,
        lookupByTrigger: (a) => se(o, (i) => i.trigger === a)
      };
    }, sq = (e, t) => {
      const n = vu(t.load, 50);
      e.on("keypress compositionend", (s) => {
        s.which !== 27 && n.throttle();
      }), e.on("keydown", (s) => {
        const o = s.which;
        o === 8 ? n.throttle() : o === 27 && t.cancelIfNecessary();
      }), e.on("remove", n.cancel);
    }, oq = (e) => {
      const t = fs(), n = et(!1), s = t.isSet, o = () => {
        s() && ($M(e), GD(e), n.set(!1), t.clear());
      }, r = (c) => {
        s() || (LM(e, c.range), t.set({
          trigger: c.trigger,
          matchLength: c.text.length
        }));
      }, a = Os(() => nq(e)), i = (c) => t.get().map((u) => Sw(e.dom, e.selection.getRng(), u.trigger).bind((f) => _w(e, a, f, c))).getOrThunk(() => ZV(e, a)), l = (c) => {
        i(c).fold(o, (u) => {
          r(u.context), u.lookupData.then((f) => {
            t.get().map((d) => {
              const p = u.context;
              d.trigger === p.trigger && (p.text.length - d.matchLength >= 10 ? o() : (t.set({
                ...d,
                matchLength: p.text.length
              }), n.get() ? KD(e, { lookupData: f }) : (n.set(!0), qD(e, { lookupData: f }))));
            });
          });
        });
      };
      e.addCommand("mceAutocompleterReload", (c, u) => {
        const f = vt(u) ? u.fetchOptions : {};
        l(f);
      }), e.addCommand("mceAutocompleterClose", o), sq(e, {
        cancelIfNecessary: o,
        load: l
      });
    }, rq = kn().browser.isSafari(), Vw = (e) => is(C.fromDom(e)), jw = (e, t) => {
      var n;
      return e.startOffset === 0 && e.endOffset === ((n = t.textContent) === null || n === void 0 ? void 0 : n.length);
    }, Ul = (e, t) => m.from(e.getParent(t.container(), "details")), qw = (e, t) => Ul(e, t).isSome(), aq = (e, t) => {
      const n = m.from(e.getParent(t.startContainer, "details")), s = m.from(e.getParent(t.endContainer, "details"));
      if (n.isSome() || s.isSome()) {
        const o = n.bind((r) => m.from(e.select("summary", r)[0]));
        return m.some({
          startSummary: o,
          startDetails: n,
          endDetails: s
        });
      } else
        return m.none();
    }, iq = (e, t) => pt(t).exists((n) => n.isEqual(e)), lq = (e, t) => ln(t).exists((n) => $e(n.getNode()) && Bt(t, n).exists((s) => s.isEqual(e)) || n.isEqual(e)), cq = (e, t) => t.startSummary.exists((n) => iq(e, n)), uq = (e, t) => t.startSummary.exists((n) => lq(e, n)), fq = (e, t) => t.startDetails.exists((n) => Bt(n, e).forall((s) => t.startSummary.exists((o) => !o.contains(e.container()) && o.contains(s.container())))), dq = (e, t, n) => n.startDetails.exists((s) => Nt(e, t).forall((o) => !s.contains(o.container()))), Kw = (e, t) => {
      const n = t.getNode();
      lt(n) || e.selection.setCursorLocation(n, t.offset());
    }, Gw = (e, t, n) => {
      const s = e.dom.getParent(t.container(), "details");
      if (s && !s.open) {
        const o = e.dom.select("summary", s)[0];
        o && (n ? pt(o) : ln(o)).each((a) => Kw(e, a));
      } else
        Kw(e, t);
    }, mq = (e, t) => {
      const n = (l) => l.contains(e.startContainer), s = (l) => l.contains(e.endContainer), o = t.startSummary.exists(n), r = t.startSummary.exists(s), a = t.startDetails.forall((l) => t.endDetails.forall((c) => l !== c));
      return (o || r) && !(o && r) || a;
    }, Yw = (e, t, n) => {
      const { dom: s, selection: o } = e, r = e.getBody();
      if (n === "character") {
        const a = N.fromRangeStart(o.getRng()), i = s.getParent(a.container(), s.isBlock), l = Ul(s, a), c = i && s.isEmpty(i), u = kt(i == null ? void 0 : i.previousSibling), f = kt(i == null ? void 0 : i.nextSibling);
        return c && (t ? f : u) && Ho(!t, r, a).exists((h) => qw(s, h) && !Sg(l, Ul(s, h))) ? !0 : Ho(t, r, a).fold(Le, (d) => {
          const p = Ul(s, d);
          if (qw(s, d) && !Sg(l, p)) {
            if (t || Gw(e, d, !1), i && c) {
              if (t && u)
                return !0;
              if (!t && f)
                return !0;
              Gw(e, d, t), e.dom.remove(i);
            }
            return !0;
          } else
            return !1;
        });
      } else
        return !1;
    }, gq = (e, t, n, s) => {
      const r = e.selection.getRng(), a = N.fromRangeStart(r), i = e.getBody();
      return s === "selection" ? mq(r, t) : n ? uq(a, t) || dq(i, a, t) : cq(a, t) || fq(a, t);
    }, pq = (e, t, n) => aq(e.dom, e.selection.getRng()).fold(() => Yw(e, t, n), (s) => gq(e, s, t, n) || Yw(e, t, n)), hq = (e, t, n) => {
      const s = e.selection, o = s.getNode(), r = s.getRng(), a = N.fromRangeStart(r);
      return gN(o) ? (n === "selection" && jw(r, o) || uv(t, a, o) ? Vw(o) : e.undoManager.transact(() => {
        const i = s.getSel();
        let { anchorNode: l, anchorOffset: c, focusNode: u, focusOffset: f } = i ?? {};
        const d = () => {
          M(l) && M(c) && M(u) && M(f) && (i == null || i.setBaseAndExtent(l, c, u, f));
        }, p = () => {
          l = i == null ? void 0 : i.anchorNode, c = i == null ? void 0 : i.anchorOffset, u = i == null ? void 0 : i.focusNode, f = i == null ? void 0 : i.focusOffset;
        }, h = (b, v) => {
          P(b.childNodes, (y) => {
            ua(y) && v.appendChild(y);
          });
        }, g = e.dom.create("span", { "data-mce-bogus": "1" });
        h(o, g), o.appendChild(g), d(), (n === "word" || n === "line") && (i == null || i.modify("extend", t ? "right" : "left", n)), !s.isCollapsed() && jw(s.getRng(), g) ? Vw(o) : (e.execCommand(t ? "ForwardDelete" : "Delete"), p(), h(g, o), d()), e.dom.remove(g);
      }), !0) : !1;
    }, mo = (e, t, n) => pq(e, t, n) || rq && hq(e, t, n) ? m.some(ce) : m.none(), Xw = (e) => (t, n, s = {}) => {
      const o = t.getBody(), r = {
        bubbles: !0,
        composed: !0,
        data: null,
        isComposing: !1,
        detail: 0,
        view: null,
        target: o,
        currentTarget: o,
        eventPhase: Event.AT_TARGET,
        originalTarget: o,
        explicitOriginalTarget: o,
        isTrusted: !1,
        srcElement: o,
        cancelable: !1,
        preventDefault: ce,
        inputType: n
      }, a = Lp(new InputEvent(e));
      return t.dispatch(e, {
        ...a,
        ...r,
        ...s
      });
    }, Ua = Xw("input"), zl = Xw("beforeinput"), Zw = kn(), Qw = Zw.os, Jw = Qw.isMacOS() || Qw.isiOS(), bq = Zw.browser.isFirefox(), Cq = (e, t, n) => {
      const s = n.keyCode === H.BACKSPACE ? "deleteContentBackward" : "deleteContentForward", o = e.selection.isCollapsed(), r = o ? "character" : "selection", a = (i) => o ? i ? "word" : "line" : "selection";
      nw([
        {
          keyCode: H.BACKSPACE,
          action: te(MS, e)
        },
        {
          keyCode: H.BACKSPACE,
          action: te(Fd, e, !1)
        },
        {
          keyCode: H.DELETE,
          action: te(Fd, e, !0)
        },
        {
          keyCode: H.BACKSPACE,
          action: te(Id, e, !1)
        },
        {
          keyCode: H.DELETE,
          action: te(Id, e, !0)
        },
        {
          keyCode: H.BACKSPACE,
          action: te(Kd, e, t, !1)
        },
        {
          keyCode: H.DELETE,
          action: te(Kd, e, t, !0)
        },
        {
          keyCode: H.BACKSPACE,
          action: te(zf, e, !1)
        },
        {
          keyCode: H.DELETE,
          action: te(zf, e, !0)
        },
        {
          keyCode: H.BACKSPACE,
          action: te(mo, e, !1, r)
        },
        {
          keyCode: H.DELETE,
          action: te(mo, e, !0, r)
        },
        ...Jw ? [
          {
            keyCode: H.BACKSPACE,
            altKey: !0,
            action: te(mo, e, !1, a(!0))
          },
          {
            keyCode: H.DELETE,
            altKey: !0,
            action: te(mo, e, !0, a(!0))
          },
          {
            keyCode: H.BACKSPACE,
            metaKey: !0,
            action: te(mo, e, !1, a(!1))
          }
        ] : [
          {
            keyCode: H.BACKSPACE,
            ctrlKey: !0,
            action: te(mo, e, !1, a(!0))
          },
          {
            keyCode: H.DELETE,
            ctrlKey: !0,
            action: te(mo, e, !0, a(!0))
          }
        ],
        {
          keyCode: H.BACKSPACE,
          action: te(Md, e, !1)
        },
        {
          keyCode: H.DELETE,
          action: te(Md, e, !0)
        },
        {
          keyCode: H.BACKSPACE,
          action: te(Xd, e, !1)
        },
        {
          keyCode: H.DELETE,
          action: te(Xd, e, !0)
        },
        {
          keyCode: H.BACKSPACE,
          action: te(Od, e, !1)
        },
        {
          keyCode: H.DELETE,
          action: te(Od, e, !0)
        },
        {
          keyCode: H.BACKSPACE,
          action: te(Dd, e, !1)
        },
        {
          keyCode: H.DELETE,
          action: te(Dd, e, !0)
        },
        {
          keyCode: H.BACKSPACE,
          action: te(Gd, e, !1)
        },
        {
          keyCode: H.DELETE,
          action: te(Gd, e, !0)
        }
      ], n).filter((i) => e.selection.isEditable()).each((i) => {
        n.preventDefault(), zl(e, s).isDefaultPrevented() || (i(), Ua(e, s));
      });
    }, vq = (e, t, n) => La([
      {
        keyCode: H.BACKSPACE,
        action: te(GE, e)
      },
      {
        keyCode: H.DELETE,
        action: te(GE, e)
      },
      ...Jw ? [
        {
          keyCode: H.BACKSPACE,
          altKey: !0,
          action: te(Ia, e)
        },
        {
          keyCode: H.DELETE,
          altKey: !0,
          action: te(Ia, e)
        },
        ...n ? [{
          keyCode: bq ? 224 : 91,
          action: te(Ia, e)
        }] : []
      ] : [
        {
          keyCode: H.BACKSPACE,
          ctrlKey: !0,
          action: te(Ia, e)
        },
        {
          keyCode: H.DELETE,
          ctrlKey: !0,
          action: te(Ia, e)
        }
      ]
    ], t), yq = (e, t) => {
      let n = !1;
      e.on("keydown", (s) => {
        n = s.keyCode === H.BACKSPACE, s.isDefaultPrevented() || Cq(e, t, s);
      }), e.on("keyup", (s) => {
        s.isDefaultPrevented() || vq(e, s, n), n = !1;
      });
    }, Eq = (e) => {
      for (; e; ) {
        if (q(e) || B(e) && e.data && /[\r\n\s]/.test(e.data))
          return e;
        e = e.nextSibling;
      }
      return null;
    }, nr = (e, t) => {
      const n = e.dom, s = e.schema.getMoveCaretBeforeOnEnterElements();
      if (!t)
        return;
      if (/^(LI|DT|DD)$/.test(t.nodeName)) {
        const r = Eq(t.firstChild);
        r && /^(UL|OL|DL)$/.test(r.nodeName) && t.insertBefore(n.doc.createTextNode(Je), t.firstChild);
      }
      const o = n.createRng();
      if (t.normalize(), t.hasChildNodes()) {
        const r = new Xe(t, t);
        let a = t, i;
        for (; i = r.current(); ) {
          if (B(i)) {
            o.setStart(i, 0), o.setEnd(i, 0);
            break;
          }
          if (s[i.nodeName.toLowerCase()]) {
            o.setStartBefore(i), o.setEndBefore(i);
            break;
          }
          a = i, i = r.next();
        }
        i || (o.setStart(a, 0), o.setEnd(a, 0));
      } else
        $e(t) ? t.nextSibling && n.isBlock(t.nextSibling) ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)) : (o.setStart(t, 0), o.setEnd(t, 0));
      e.selection.setRng(o), ga(e, o);
    }, za = (e, t) => {
      const n = e.getRoot();
      let s, o = t;
      for (; o !== n && o && e.getContentEditable(o) !== "false"; ) {
        if (e.getContentEditable(o) === "true") {
          s = o;
          break;
        }
        o = o.parentNode;
      }
      return o !== n ? s : n;
    }, pm = (e) => m.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)), Sq = (e) => pm(e).fold(V(""), (t) => t.nodeName.toUpperCase()), wq = (e) => pm(e).filter((t) => Fr(C.fromDom(t))).isSome(), hm = (e) => {
      e.innerHTML = '<br data-mce-bogus="1">';
    }, kq = (e, t, n) => {
      const s = e.dom;
      m.from(n.style).map(s.parseStyle).each((l) => {
        const u = {
          ...Mc(C.fromDom(t)),
          ...l
        };
        s.setStyles(t, u);
      });
      const o = m.from(n.class).map((l) => l.split(/\s+/)), r = m.from(t.className).map((l) => se(l.split(/\s+/), (c) => c !== ""));
      dt(o, r, (l, c) => {
        const u = se(c, (d) => !ke(l, d)), f = [
          ...l,
          ...u
        ];
        s.setAttrib(t, "class", f.join(" "));
      });
      const a = [
        "style",
        "class"
      ], i = Er(n, (l, c) => !ke(a, c));
      s.setAttribs(t, i);
    }, Ha = (e, t) => {
      if (gt(e).toLowerCase() === t.tagName.toLowerCase()) {
        const s = ta(e);
        kq(e, t, s);
      }
    }, ek = (e, t, n, s, o = !0, r, a) => {
      const i = e.dom, l = e.schema, c = gt(e), u = n ? n.nodeName.toUpperCase() : "";
      let f = t;
      const d = l.getTextInlineElements();
      let p;
      r || u === "TABLE" || u === "HR" ? p = i.create(r || c, a || {}) : p = n.cloneNode(!1);
      let h = p;
      if (!o)
        i.setAttrib(p, "style", null), i.setAttrib(p, "class", null);
      else
        do
          if (d[f.nodeName]) {
            if (Gt(f) || Yt(f))
              continue;
            const g = f.cloneNode(!1);
            i.setAttrib(g, "id", ""), p.hasChildNodes() ? (g.appendChild(p.firstChild), p.appendChild(g)) : (h = g, p.appendChild(g));
          }
        while ((f = f.parentNode) && f !== s);
      return Ha(e, p), hm(h), p;
    }, _q = (e, t) => e.dom.getParent(t, qc), xq = (e, t, n) => {
      let s = t;
      for (; s && s !== e && kt(s.nextSibling); ) {
        const o = s.parentElement;
        if (!o || !n(o))
          return qc(o);
        s = o;
      }
      return !1;
    }, Nq = (e, t, n) => !t && n.nodeName.toLowerCase() === gt(e) && e.dom.isEmpty(n) && xq(e.getBody(), n, (s) => oe(e.schema.getTextBlockElements(), s.nodeName.toLowerCase())), Aq = (e, t, n) => {
      var s, o, r;
      const a = t(gt(e)), i = _q(e, n);
      i && (e.dom.insertAfter(a, i), nr(e, a), ((r = (o = (s = n.parentElement) === null || s === void 0 ? void 0 : s.childNodes) === null || o === void 0 ? void 0 : o.length) !== null && r !== void 0 ? r : 0) > 1 && e.dom.remove(n));
    }, Tq = (e, t) => e.firstChild && e.firstChild.nodeName === t, Rq = (e) => {
      var t;
      return ((t = e.parentNode) === null || t === void 0 ? void 0 : t.firstChild) === e;
    }, tk = (e, t) => {
      const n = e == null ? void 0 : e.parentNode;
      return M(n) && n.nodeName === t;
    }, nk = (e) => M(e) && /^(OL|UL|LI)$/.test(e.nodeName), bm = (e) => M(e) && /^(LI|DT|DD)$/.test(e.nodeName), Pq = (e) => nk(e) && nk(e.parentNode), Hl = (e) => {
      const t = e.parentNode;
      return bm(t) ? t : e;
    }, Wl = (e, t, n) => {
      let s = e[n ? "firstChild" : "lastChild"];
      for (; s && !q(s); )
        s = s[n ? "nextSibling" : "previousSibling"];
      return s === t;
    }, sk = (e) => Rt(ii(Mc(C.fromDom(e)), (t, n) => `${n}: ${t};`), (t, n) => t + n, ""), Dq = (e, t, n, s, o) => {
      const r = e.dom, a = e.selection.getRng(), i = n.parentNode;
      if (n === e.getBody() || !i)
        return;
      Pq(n) && (o = "LI");
      const l = bm(s) ? sk(s) : void 0;
      let c = bm(s) && l ? t(o, { style: sk(s) }) : t(o);
      if (Wl(n, s, !0) && Wl(n, s, !1))
        if (tk(n, "LI")) {
          const u = Hl(n);
          r.insertAfter(c, u), Rq(n) ? r.remove(u) : r.remove(n);
        } else
          r.replace(c, n);
      else if (Wl(n, s, !0))
        tk(n, "LI") ? (r.insertAfter(c, Hl(n)), c.appendChild(r.doc.createTextNode(" ")), c.appendChild(n)) : i.insertBefore(c, n), r.remove(s);
      else if (Wl(n, s, !1))
        r.insertAfter(c, Hl(n)), r.remove(s);
      else {
        n = Hl(n);
        const u = a.cloneRange();
        u.setStartAfter(s), u.setEndAfter(n);
        const f = u.extractContents();
        if (o === "LI" && Tq(f, "LI")) {
          const d = se(he(c.children, C.fromDom), hr(mi("br")));
          c = f.firstChild, r.insertAfter(f, n), P(d, (p) => Uc(C.fromDom(c), p)), l && c.setAttribute("style", l);
        } else
          r.insertAfter(f, n), r.insertAfter(c, n);
        r.remove(s);
      }
      nr(e, c);
    }, Oq = (e) => {
      P(np(C.fromDom(e), jt), (t) => {
        const n = t.dom;
        n.nodeValue = zt(n.data);
      });
    }, Bq = (e, t) => {
      const n = e.dom.getParent(t, "ol,ul,dl");
      return n !== null && e.dom.getContentEditableParent(n) === "false";
    }, Iq = (e, t) => t && t.nodeName === "A" && e.isEmpty(t), Cm = (e, t) => e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t, vm = (e, t) => M(t) && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && e.isEditable(t.parentNode) && e.getContentEditable(t) !== "false", Lq = (e, t, n) => {
      var s;
      const o = [];
      if (!n)
        return;
      let r = n;
      for (; r = r.firstChild; ) {
        if (e.isBlock(r))
          return;
        q(r) && !t[r.nodeName.toLowerCase()] && o.push(r);
      }
      let a = o.length;
      for (; a--; )
        r = o[a], (!r.hasChildNodes() || r.firstChild === r.lastChild && ((s = r.firstChild) === null || s === void 0 ? void 0 : s.nodeValue) === "" || Iq(e, r)) && e.remove(r);
    }, ym = (e, t, n) => B(t) ? e ? n === 1 && t.data.charAt(n - 1) === Ze ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === Ze ? t.data.length : n : n, $q = (e) => {
      const t = e.cloneRange();
      return t.setStart(e.startContainer, ym(!0, e.startContainer, e.startOffset)), t.setEnd(e.endContainer, ym(!1, e.endContainer, e.endOffset)), t;
    }, Fq = (e) => {
      let t = e;
      do
        B(t) && (t.data = t.data.replace(/^[\r\n]+/, "")), t = t.firstChild;
      while (t);
    }, Mq = (e, t, n, s, o) => {
      var r, a;
      const i = e.dom, l = (r = za(i, s)) !== null && r !== void 0 ? r : i.getRoot();
      let c = i.getParent(s, i.isBlock);
      if (!c || !vm(i, c)) {
        if (c = c || l, !c.hasChildNodes()) {
          const p = i.create(t);
          return Ha(e, p), c.appendChild(p), n.setStart(p, 0), n.setEnd(p, 0), p;
        }
        let u = s;
        for (; u && u.parentNode !== c; )
          u = u.parentNode;
        let f;
        for (; u && !i.isBlock(u); )
          f = u, u = u.previousSibling;
        const d = (a = f == null ? void 0 : f.parentElement) === null || a === void 0 ? void 0 : a.nodeName;
        if (f && d && e.schema.isValidChild(d, t.toLowerCase())) {
          const p = f.parentNode, h = i.create(t);
          for (Ha(e, h), p.insertBefore(h, f), u = f; u && !i.isBlock(u); ) {
            const g = u.nextSibling;
            h.appendChild(u), u = g;
          }
          n.setStart(s, o), n.setEnd(s, o);
        }
      }
      return s;
    }, Uq = (e, t) => {
      t.normalize();
      const n = t.lastChild;
      (!n || q(n) && /^(left|right)$/gi.test(e.getStyle(n, "float", !0))) && e.add(t, "br");
    }, zq = (e, t) => {
      const n = aR(e);
      return qe(t) ? !1 : J(n) ? ke(L.explode(n), t.nodeName.toLowerCase()) : n;
    }, ok = {
      insert: (e, t) => {
        let n, s, o, r, a = !1;
        const i = e.dom, l = e.schema, c = l.getNonEmptyElements(), u = e.selection.getRng(), f = gt(e), d = C.fromDom(u.startContainer), p = To(d, u.startOffset), h = p.exists((R) => di(R) && !Fs(R)), g = u.collapsed && h, b = (R, z) => ek(e, n, O, T, rR(e), R, z), v = (R) => {
          const z = ym(R, n, s);
          if (B(n) && (R ? z > 0 : z < n.data.length))
            return !1;
          if (n.parentNode === O && a && !R || R && q(n) && n === O.firstChild)
            return !0;
          if (Cm(n, "TABLE") || Cm(n, "HR"))
            return a && !R || !a && R;
          const Z = new Xe(n, O);
          B(n) && (R && z === 0 ? Z.prev() : !R && z === n.data.length && Z.next());
          let re;
          for (; re = Z.current(); ) {
            if (q(re)) {
              if (!re.getAttribute("data-mce-bogus")) {
                const ie = re.nodeName.toLowerCase();
                if (c[ie] && ie !== "br")
                  return !1;
              }
            } else if (B(re) && !cs(re.data))
              return !1;
            R ? Z.prev() : Z.next();
          }
          return !0;
        }, y = () => {
          let R;
          return /^(H[1-6]|PRE|FIGURE)$/.test(o) && U !== "HGROUP" ? R = b(f) : R = b(), zq(e, r) && vm(i, r) && i.isEmpty(O, void 0, { includeZwsp: !0 }) ? R = i.split(r, O) : i.insertAfter(R, O), nr(e, R), R;
        };
        el(i, u).each((R) => {
          u.setStart(R.startContainer, R.startOffset), u.setEnd(R.endContainer, R.endOffset);
        }), n = u.startContainer, s = u.startOffset;
        const E = !!(t && t.shiftKey), S = !!(t && t.ctrlKey);
        q(n) && n.hasChildNodes() && !g && (a = s > n.childNodes.length - 1, n = n.childNodes[Math.min(s, n.childNodes.length - 1)] || n, a && B(n) ? s = n.data.length : s = 0);
        const T = za(i, n);
        if (!T || Bq(e, n))
          return;
        E || (n = Mq(e, f, u, n, s));
        let O = i.getParent(n, i.isBlock) || i.getRoot();
        r = M(O == null ? void 0 : O.parentNode) ? i.getParent(O.parentNode, i.isBlock) : null, o = O ? O.nodeName.toUpperCase() : "";
        const U = r ? r.nodeName.toUpperCase() : "";
        if (U === "LI" && !S) {
          const R = r;
          O = R, r = R.parentNode, o = U;
        }
        if (q(r) && Nq(e, E, O))
          return Aq(e, b, O);
        if (/^(LI|DT|DD)$/.test(o) && q(r) && i.isEmpty(O)) {
          Dq(e, b, r, O, f);
          return;
        }
        if (!g && (O === e.getBody() || !vm(i, O)))
          return;
        const A = O.parentNode;
        let _;
        if (g)
          _ = b(f), p.fold(() => {
            We(d, C.fromDom(_));
          }, (R) => {
            Ot(R, C.fromDom(_));
          }), e.selection.setCursorLocation(_, 0);
        else if (Io(O))
          _ = Qc(O), i.isEmpty(O) && hm(O), Ha(e, _), nr(e, _);
        else if (v(!1))
          _ = y();
        else if (v(!0) && A) {
          _ = A.insertBefore(b(), O);
          const R = Ix(C.fromDom(u.startContainer)) && u.collapsed;
          nr(e, Cm(O, "HR") || R ? _ : O);
        } else {
          const R = $q(u).cloneRange();
          R.setEndAfter(O);
          const z = R.extractContents();
          Oq(z), Fq(z), _ = z.firstChild, i.insertAfter(z, O), Lq(i, c, _), Uq(i, O), i.isEmpty(O) && hm(O), _.normalize(), i.isEmpty(_) ? (i.remove(_), y()) : (Ha(e, _), nr(e, _));
        }
        i.setAttrib(_, "id", ""), e.dispatch("NewBlock", { newBlock: _ });
      },
      fakeEventName: "insertParagraph"
    }, Hq = (e, t, n) => {
      const s = new Xe(t, n);
      let o;
      const r = e.getNonEmptyElements();
      for (; o = s.next(); )
        if (r[o.nodeName.toLowerCase()] || B(o) && o.length > 0)
          return !0;
      return !1;
    }, rk = (e, t, n) => {
      const s = e.dom.createRng();
      n ? (s.setStartBefore(t), s.setEndBefore(t)) : (s.setStartAfter(t), s.setEndAfter(t)), e.selection.setRng(s), ga(e, s);
    }, Wq = (e, t) => {
      const n = e.selection, s = e.dom, o = n.getRng();
      let r, a = !1;
      el(s, o).each((p) => {
        o.setStart(p.startContainer, p.startOffset), o.setEnd(p.endContainer, p.endOffset);
      });
      let i = o.startOffset, l = o.startContainer;
      if (q(l) && l.hasChildNodes()) {
        const p = i > l.childNodes.length - 1;
        l = l.childNodes[Math.min(i, l.childNodes.length - 1)] || l, p && B(l) ? i = l.data.length : i = 0;
      }
      let c = s.getParent(l, s.isBlock);
      const u = c && c.parentNode ? s.getParent(c.parentNode, s.isBlock) : null, f = u ? u.nodeName.toUpperCase() : "", d = !!(t && t.ctrlKey);
      f === "LI" && !d && (c = u), B(l) && i >= l.data.length && (Hq(e.schema, l, c || s.getRoot()) || (r = s.create("br"), o.insertNode(r), o.setStartAfter(r), o.setEndAfter(r), a = !0)), r = s.create("br"), ku(s, o, r), rk(e, r, a), e.undoManager.add();
    }, Vq = (e, t) => {
      const n = C.fromTag("br");
      Ot(C.fromDom(t), n), e.undoManager.add();
    }, jq = (e, t) => {
      Kq(e.getBody(), t) || Gn(C.fromDom(t), C.fromTag("br"));
      const n = C.fromTag("br");
      Gn(C.fromDom(t), n), rk(e, n.dom, !1), e.undoManager.add();
    }, qq = (e) => $e(e.getNode()), Kq = (e, t) => qq(N.after(t)) ? !0 : Nt(e, N.after(t)).map((n) => $e(n.getNode())).getOr(!1), ak = (e) => e && e.nodeName === "A" && "href" in e, Gq = (e) => e.fold(Le, ak, ak, Le), Yq = (e) => {
      const t = j(io, e), n = N.fromRangeStart(e.selection.getRng());
      return Ln(t, e.getBody(), n).filter(Gq);
    }, Xq = (e, t) => {
      t.fold(ce, j(Vq, e), j(jq, e), ce);
    }, ik = {
      insert: (e, t) => {
        const n = Yq(e);
        n.isSome() ? n.each(j(Xq, e)) : Wq(e, t);
      },
      fakeEventName: "insertLineBreak"
    }, lk = (e, t) => pm(e).filter((n) => t.length > 0 && gn(C.fromDom(n), t)).isSome(), Zq = (e) => lk(e, sR(e)), Qq = (e) => lk(e, oR(e)), Wt = Tn.generate([
      { br: [] },
      { block: [] },
      { none: [] }
    ]), Jq = (e, t) => Qq(e), ck = (e) => (t, n) => wq(t) === e, uk = (e, t) => (n, s) => Sq(n) === e.toUpperCase() === t, e3 = (e) => {
      const t = za(e.dom, e.selection.getStart());
      return qe(t);
    }, Wa = (e) => uk("pre", e), t3 = () => uk("summary", !0), Vl = (e) => (t, n) => tR(t) === e, n3 = (e, t) => Zq(e), jl = (e, t) => t, s3 = (e) => {
      const t = gt(e), n = za(e.dom, e.selection.getStart());
      return M(n) && e.schema.isValidChild(n.nodeName, t);
    }, o3 = (e) => {
      const t = e.selection.getRng(), n = C.fromDom(t.startContainer), o = To(n, t.startOffset).map((r) => di(r) && !Fs(r));
      return t.collapsed && o.getOr(!0);
    }, tn = (e, t) => (n, s) => Rt(e, (r, a) => r && a(n, s), !0) ? m.some(t) : m.none(), r3 = (e, t) => eS([
      tn([Jq], Wt.none()),
      tn([
        Wa(!0),
        e3
      ], Wt.none()),
      tn([t3()], Wt.br()),
      tn([
        Wa(!0),
        Vl(!1),
        jl
      ], Wt.br()),
      tn([
        Wa(!0),
        Vl(!1)
      ], Wt.block()),
      tn([
        Wa(!0),
        Vl(!0),
        jl
      ], Wt.block()),
      tn([
        Wa(!0),
        Vl(!0)
      ], Wt.br()),
      tn([
        ck(!0),
        jl
      ], Wt.br()),
      tn([ck(!0)], Wt.block()),
      tn([n3], Wt.br()),
      tn([jl], Wt.br()),
      tn([s3], Wt.block()),
      tn([o3], Wt.block())
    ], [
      e,
      !!(t && t.shiftKey)
    ]).getOr(Wt.none()), ql = (e, t, n) => {
      t.selection.isCollapsed() || W1(t), !(M(n) && zl(t, e.fakeEventName).isDefaultPrevented()) && (e.insert(t, n), M(n) && Ua(t, e.fakeEventName));
    }, fk = (e, t) => {
      const n = () => ql(ik, e, t), s = () => ql(ok, e, t), o = r3(e, t);
      switch (nR(e)) {
        case "linebreak":
          o.fold(n, n, ce);
          break;
        case "block":
          o.fold(s, s, ce);
          break;
        case "invert":
          o.fold(s, n, ce);
          break;
        default:
          o.fold(n, s, ce);
          break;
      }
    }, dk = kn(), a3 = dk.os.isiOS() && dk.browser.isSafari(), mk = (e, t) => {
      t.isDefaultPrevented() || (t.preventDefault(), GF(e.undoManager), e.undoManager.transact(() => {
        fk(e, t);
      }));
    }, i3 = (e) => {
      if (!e.collapsed)
        return !1;
      const t = e.startContainer;
      if (B(t)) {
        const n = /^[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uD7B0-\uD7FF]$/, s = t.data.charAt(e.startOffset - 1);
        return n.test(s);
      } else
        return !1;
    }, l3 = (e) => {
      let t = m.none();
      const n = (o) => {
        t = m.some(o.selection.getBookmark()), o.undoManager.add();
      }, s = (o, r) => {
        o.undoManager.undo(), t.fold(ce, (a) => o.selection.moveToBookmark(a)), mk(o, r), t = m.none();
      };
      e.on("keydown", (o) => {
        o.keyCode === H.ENTER && (a3 && i3(e.selection.getRng()) ? n(e) : mk(e, o));
      }), e.on("keyup", (o) => {
        o.keyCode === H.ENTER && t.each(() => s(e, o));
      });
    }, c3 = (e, t, n) => {
      const s = be.os.isMacOS() || be.os.isiOS();
      La([
        {
          keyCode: H.END,
          action: te(ZS, e, !0)
        },
        {
          keyCode: H.HOME,
          action: te(ZS, e, !1)
        },
        ...s ? [] : [
          {
            keyCode: H.HOME,
            action: te(Dl, e, !1),
            ctrlKey: !0,
            shiftKey: !0
          },
          {
            keyCode: H.END,
            action: te(Dl, e, !0),
            ctrlKey: !0,
            shiftKey: !0
          }
        ],
        {
          keyCode: H.END,
          action: te(rw, e, !0)
        },
        {
          keyCode: H.HOME,
          action: te(rw, e, !1)
        },
        {
          keyCode: H.END,
          action: te(Pl, e, !0, t)
        },
        {
          keyCode: H.HOME,
          action: te(Pl, e, !1, t)
        }
      ], n).each((o) => {
        n.preventDefault();
      });
    }, u3 = (e, t) => {
      e.on("keydown", (n) => {
        n.isDefaultPrevented() || c3(e, t, n);
      });
    }, f3 = (e) => {
      e.on("input", (t) => {
        t.isComposing || S1(e);
      });
    }, d3 = kn(), m3 = (e, t, n) => {
      La([
        {
          keyCode: H.PAGE_UP,
          action: te(Pl, e, !1, t)
        },
        {
          keyCode: H.PAGE_DOWN,
          action: te(Pl, e, !0, t)
        }
      ], n);
    }, gk = (e) => e.stopImmediatePropagation(), pk = (e) => e.keyCode === H.PAGE_UP || e.keyCode === H.PAGE_DOWN, hk = (e, t, n) => {
      n && !e.get() ? t.on("NodeChange", gk, !0) : !n && e.get() && t.off("NodeChange", gk), e.set(n);
    }, g3 = (e, t) => {
      if (d3.os.isMacOS())
        return;
      const n = et(!1);
      e.on("keydown", (s) => {
        pk(s) && hk(n, e, !0);
      }), e.on("keyup", (s) => {
        s.isDefaultPrevented() || m3(e, t, s), pk(s) && n.get() && (hk(n, e, !1), e.nodeChanged());
      });
    }, p3 = (e) => {
      e.on("beforeinput", (t) => {
        (!e.selection.isEditable() || Fe(t.getTargetRanges(), (n) => !pC(e.dom, n))) && t.preventDefault();
      });
    }, bk = (e, t) => {
      const n = t.container(), s = t.offset();
      return B(n) ? (n.insertData(s, e), m.some(N(n, s + e.length))) : Hi(t).map((o) => {
        const r = C.fromText(e);
        return t.isAtEnd() ? Gn(o, r) : Ot(o, r), N(r.dom, e.length);
      });
    }, Ck = j(bk, Je), vk = j(bk, " "), h3 = (e, t, n) => ZC(e, t, n) ? Ck(t) : vk(t), b3 = (e) => (t) => t.fold((n) => Bt(e.dom, N.before(n)), (n) => pt(n), (n) => ln(n), (n) => Nt(e.dom, N.after(n))), C3 = (e, t, n) => (s) => ZC(e, s, n) ? Ck(t) : vk(t), yk = (e) => (t) => {
      e.selection.setRng(t.toRange()), e.nodeChanged();
    }, v3 = (e, t) => e.isEditable(e.getParent(t, "summary")), y3 = (e) => {
      const t = N.fromRangeStart(e.selection.getRng()), n = C.fromDom(e.getBody());
      if (e.selection.isCollapsed()) {
        const s = j(io, e), o = N.fromRangeStart(e.selection.getRng());
        return Ln(s, e.getBody(), o).bind(b3(n)).map((r) => () => C3(n, t, e.schema)(r).each(yk(e)));
      } else
        return m.none();
    }, E3 = (e) => {
      const t = () => {
        const n = C.fromDom(e.getBody());
        e.selection.isCollapsed() || e.getDoc().execCommand("Delete");
        const s = N.fromRangeStart(e.selection.getRng());
        h3(n, s, e.schema).each(yk(e));
      };
      return No(be.browser.isFirefox() && e.selection.isEditable() && v3(e.dom, e.selection.getRng().startContainer), t);
    }, S3 = (e, t) => {
      nw([
        {
          keyCode: H.SPACEBAR,
          action: te(y3, e)
        },
        {
          keyCode: H.SPACEBAR,
          action: te(E3, e)
        }
      ], t).each((n) => {
        t.preventDefault(), zl(e, "insertText", { data: " " }).isDefaultPrevented() || (n(), Ua(e, "insertText", { data: " " }));
      });
    }, w3 = (e) => {
      e.on("keydown", (t) => {
        t.isDefaultPrevented() || S3(e, t);
      });
    }, k3 = (e) => hP(e) ? [
      {
        keyCode: H.TAB,
        action: te(Cw, e, !0)
      },
      {
        keyCode: H.TAB,
        shiftKey: !0,
        action: te(Cw, e, !1)
      }
    ] : [], _3 = (e, t) => {
      La([...k3(e)], t).each((n) => {
        t.preventDefault();
      });
    }, x3 = (e) => {
      e.on("keydown", (t) => {
        t.isDefaultPrevented() || _3(e, t);
      });
    }, N3 = (e) => {
      if (e.addShortcut("Meta+P", "", "mcePrint"), oq(e), In(e))
        return et(null);
      {
        const t = KH(e);
        return p3(e), jW(e), UV(e, t), yq(e, t), l3(e), w3(e), f3(e), x3(e), u3(e, t), g3(e, t), t;
      }
    };
    class A3 {
      constructor(t) {
        this.lastPath = [], this.editor = t;
        let n;
        const s = this;
        "onselectionchange" in t.getDoc() || t.on("NodeChange click mouseup keyup focus", (o) => {
          const r = t.selection.getRng(), a = {
            startContainer: r.startContainer,
            startOffset: r.startOffset,
            endContainer: r.endContainer,
            endOffset: r.endOffset
          };
          (o.type === "nodechange" || !lf(a, n)) && t.dispatch("SelectionChange"), n = a;
        }), t.on("contextmenu", () => {
          t.dispatch("SelectionChange");
        }), t.on("SelectionChange", () => {
          const o = t.selection.getStart(!0);
          o && Ki(t) && !s.isSameElementPath(o) && t.dom.isChildOf(o, t.getBody()) && t.nodeChanged({ selectionChange: !0 });
        }), t.on("mouseup", (o) => {
          !o.isDefaultPrevented() && Ki(t) && (t.selection.getNode().nodeName === "IMG" ? Zt.setEditorTimeout(t, () => {
            t.nodeChanged();
          }) : t.nodeChanged());
        });
      }
      nodeChanged(t = {}) {
        const n = this.editor.selection;
        let s;
        if (this.editor.initialized && n && !IR(this.editor) && !this.editor.mode.isReadOnly()) {
          const o = this.editor.getBody();
          s = n.getStart(!0) || o, (s.ownerDocument !== this.editor.getDoc() || !this.editor.dom.isChildOf(s, o)) && (s = o);
          const r = [];
          this.editor.dom.getParent(s, (a) => a === o ? !0 : (r.push(a), !1)), this.editor.dispatch("NodeChange", {
            ...t,
            element: s,
            parents: r
          });
        }
      }
      isSameElementPath(t) {
        let n;
        const s = this.editor, o = yr(s.dom.getParents(t, He, s.getBody()));
        if (o.length === this.lastPath.length) {
          for (n = o.length; n >= 0 && o[n] === this.lastPath[n]; n--)
            ;
          if (n === -1)
            return this.lastPath = o, !0;
        }
        return this.lastPath = o, !1;
      }
    }
    const Ek = Xr("image"), T3 = (e) => {
      const t = e;
      return m.from(t[Ek]);
    }, R3 = (e, t) => {
      const n = e;
      n[Ek] = t;
    }, Em = Xr("event"), P3 = (e) => {
      const t = e;
      return m.from(t[Em]);
    }, Kl = (e) => (t) => {
      const n = t;
      n[Em] = e;
    }, D3 = (e, t) => Kl(t)(e), Sk = Kl(0), O3 = Kl(2), B3 = Kl(1), I3 = ((e) => (t) => {
      const n = t;
      return m.from(n[Em]).exists((s) => s === e);
    })(0), L3 = () => Object.freeze({
      length: 0,
      item: (e) => null
    }), Sm = Xr("mode"), $3 = (e) => {
      const t = e;
      return m.from(t[Sm]);
    }, Gl = (e) => (t) => {
      const n = t;
      n[Sm] = e;
    }, wk = (e, t) => Gl(t)(e), kk = Gl(0), wm = Gl(2), F3 = Gl(1), _k = (e) => (t) => {
      const n = t;
      return m.from(n[Sm]).exists((s) => s === e);
    }, sr = _k(0), xk = _k(1), M3 = (e, t) => ({
      ...t,
      get length() {
        return t.length;
      },
      add: (n, s) => {
        if (sr(e))
          if (J(n)) {
            if (!lt(s))
              return t.add(n, s);
          } else
            return t.add(n);
        return null;
      },
      remove: (n) => {
        sr(e) && t.remove(n);
      },
      clear: () => {
        sr(e) && t.clear();
      }
    }), U3 = [
      "none",
      "copy",
      "link",
      "move"
    ], z3 = [
      "none",
      "copy",
      "copyLink",
      "copyMove",
      "link",
      "linkMove",
      "move",
      "all",
      "uninitialized"
    ], km = () => {
      const e = new window.DataTransfer();
      let t = "move", n = "all";
      const s = {
        get dropEffect() {
          return t;
        },
        set dropEffect(o) {
          ke(U3, o) && (t = o);
        },
        get effectAllowed() {
          return n;
        },
        set effectAllowed(o) {
          I3(s) && ke(z3, o) && (n = o);
        },
        get items() {
          return M3(s, e.items);
        },
        get files() {
          return xk(s) ? L3() : e.files;
        },
        get types() {
          return e.types;
        },
        setDragImage: (o, r, a) => {
          sr(s) && (R3(s, {
            image: o,
            x: r,
            y: a
          }), e.setDragImage(o, r, a));
        },
        getData: (o) => xk(s) ? "" : e.getData(o),
        setData: (o, r) => {
          sr(s) && e.setData(o, r);
        },
        clearData: (o) => {
          sr(s) && e.clearData(o);
        }
      };
      return kk(s), s;
    }, H3 = (e) => {
      const t = km(), n = $3(e);
      return wm(e), Sk(t), t.dropEffect = e.dropEffect, t.effectAllowed = e.effectAllowed, T3(e).each((s) => t.setDragImage(s.image, s.x, s.y)), P(e.types, (s) => {
        s !== "Files" && t.setData(s, e.getData(s));
      }), P(e.files, (s) => t.items.add(s)), P3(e).each((s) => {
        D3(t, s);
      }), n.each((s) => {
        wk(e, s), wk(t, s);
      }), t;
    }, W3 = (e) => {
      const t = e.getData("text/html");
      return t === "" ? m.none() : m.some(t);
    }, Nk = (e, t) => e.setData("text/html", t), Ak = "x-tinymce/html", Yl = V(Ak), _m = "<!-- " + Ak + " -->", V3 = (e) => _m + e, j3 = (e) => e.replace(_m, ""), Tk = (e) => e.indexOf(_m) !== -1, q3 = (e) => !/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e), K3 = (e, t) => {
      let n = "<" + e;
      const s = ii(t, (o, r) => r + '="' + qs.encodeAllRaw(o) + '"');
      return s.length && (n += " " + s.join(" ")), n + ">";
    }, G3 = (e, t, n) => {
      const s = e.split(/\n\n/), o = K3(t, n), r = "</" + t + ">", a = he(s, (l) => l.split(/\n/).join("<br />")), i = (l) => o + l + r;
      return a.length === 1 ? a[0] : he(a, i).join("");
    }, Rk = "%MCEPASTEBIN%", Y3 = (e, t) => {
      const { dom: n, selection: s } = e, o = e.getBody();
      t.set(s.getRng());
      const r = n.add(e.getBody(), "div", {
        id: "mcepastebin",
        class: "mce-pastebin",
        contentEditable: !0,
        "data-mce-bogus": "all",
        style: "position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"
      }, Rk);
      be.browser.isFirefox() && n.setStyle(r, "left", n.getStyle(o, "direction", !0) === "rtl" ? 65535 : -65535), n.bind(r, "beforedeactivate focusin focusout", (a) => {
        a.stopPropagation();
      }), r.focus(), s.select(r, !0);
    }, X3 = (e, t) => {
      const n = e.dom;
      if (xm(e)) {
        let s;
        const o = t.get();
        for (; s = xm(e); )
          n.remove(s), n.unbind(s);
        o && e.selection.setRng(o);
      }
      t.set(null);
    }, xm = (e) => e.dom.get("mcepastebin"), Z3 = (e) => M(e) && e.id === "mcepastebin", Q3 = (e) => {
      const t = e.dom, n = (a, i) => {
        a.appendChild(i), t.remove(i, !0);
      }, [s, ...o] = se(e.getBody().childNodes, Z3);
      P(o, (a) => {
        n(s, a);
      });
      const r = t.select("div[id=mcepastebin]", s);
      for (let a = r.length - 1; a >= 0; a--) {
        const i = t.create("div");
        s.insertBefore(i, r[a]), n(i, r[a]);
      }
      return s ? s.innerHTML : "";
    }, Pk = (e) => e === Rk, J3 = (e) => {
      const t = et(null);
      return {
        create: () => Y3(e, t),
        remove: () => X3(e, t),
        getEl: () => xm(e),
        getHtml: () => Q3(e),
        getLastRng: t.get
      };
    }, Dk = (e, t) => (L.each(t, (n) => {
      si(n, RegExp) ? e = e.replace(n, "") : e = e.replace(n[0], n[1]);
    }), e), eK = (e) => {
      const t = us(), n = Xo({}, t);
      let s = "";
      const o = t.getVoidElements(), r = L.makeMap("script noscript style textarea video audio iframe object", " "), a = t.getBlockElements(), i = (l) => {
        const c = l.name, u = l;
        if (c === "br") {
          s += `
`;
          return;
        }
        if (c !== "wbr") {
          if (o[c] && (s += " "), r[c]) {
            s += " ";
            return;
          }
          if (l.type === 3 && (s += l.value), !(l.name in t.getVoidElements())) {
            let f = l.firstChild;
            if (f)
              do
                i(f);
              while (f = f.next);
          }
          a[c] && u.next && (s += `
`, c === "p" && (s += `
`));
        }
      };
      return e = Dk(e, [/<!\[[^\]]+\]>/g]), i(n.parse(e)), s;
    }, Ok = (e) => (e = Dk(e, [
      /^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/ig,
      /<!--StartFragment-->|<!--EndFragment-->/g,
      [
        /( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,
        (n, s, o) => !s && !o ? " " : Je
      ],
      /<br class="Apple-interchange-newline">/g,
      /<br>$/i
    ]), e), tK = (e) => {
      let t = 0;
      return () => e + t++;
    }, nK = (e) => {
      const t = e.toLowerCase(), n = {
        jpg: "jpeg",
        jpe: "jpeg",
        jfi: "jpeg",
        jif: "jpeg",
        jfif: "jpeg",
        pjpeg: "jpeg",
        pjp: "jpeg",
        svg: "svg+xml"
      };
      return L.hasOwn(n, t) ? "image/" + n[t] : "image/" + t;
    }, sK = (e, t) => {
      const n = Xo({
        sanitize: Ou(e),
        sandbox_iframes: Bu(e)
      }, e.schema);
      n.addNodeFilter("meta", (o) => {
        L.each(o, (r) => {
          r.remove();
        });
      });
      const s = n.parse(t, {
        forced_root_block: !1,
        isRootContent: !0
      });
      return hs({ validate: !0 }, e.schema).serialize(s);
    }, Bk = (e, t) => ({
      content: e,
      cancelled: t
    }), oK = (e, t, n) => {
      const s = e.dom.create("div", { style: "display:none" }, t), o = XD(e, s, n);
      return Bk(o.node.innerHTML, o.isDefaultPrevented());
    }, rK = (e, t, n) => {
      const s = YD(e, t, n), o = sK(e, s.content);
      return e.hasEventListeners("PastePostProcess") && !s.isDefaultPrevented() ? oK(e, o, n) : Bk(o, s.isDefaultPrevented());
    }, aK = (e, t, n) => rK(e, t, n), Nm = (e, t) => (e.insertContent(t, {
      merge: eP(e),
      paste: !0
    }), !0), Am = (e) => /^https?:\/\/[\w\-\/+=.,!;:&%@^~(){}?#]+$/i.test(e), iK = (e, t) => Am(t) && Fe(zh(e), (n) => Ac(t.toLowerCase(), `.${n.toLowerCase()}`)), lK = (e, t, n) => (e.undoManager.extra(() => {
      n(e, t);
    }, () => {
      e.insertContent('<img src="' + t + '">');
    }), !0), cK = (e, t, n) => (e.undoManager.extra(() => {
      n(e, t);
    }, () => {
      e.execCommand("mceInsertLink", !1, t);
    }), !0), uK = (e, t, n) => !e.selection.isCollapsed() && Am(t) ? cK(e, t, n) : !1, fK = (e, t, n) => iK(e, t) ? lK(e, t, n) : !1, dK = (e, t) => {
      L.each([
        uK,
        fK,
        Nm
      ], (n) => !n(e, t, Nm));
    }, mK = (e, t, n) => {
      n || !tP(e) ? Nm(e, t) : dK(e, t);
    }, gK = tK("mceclip"), pK = (e) => {
      const t = km();
      return Nk(t, e), wm(t), t;
    }, Ik = (e, t, n, s, o) => {
      const r = aK(e, t, n);
      if (!r.cancelled) {
        const a = r.content, i = () => mK(e, a, s);
        o ? zl(e, "insertFromPaste", { dataTransfer: pK(a) }).isDefaultPrevented() || (i(), Ua(e, "insertFromPaste")) : i();
      }
    }, Xl = (e, t, n, s) => {
      const o = n || Tk(t);
      Ik(e, j3(t), o, !1, s);
    }, Tm = (e, t, n) => {
      const s = e.dom.encode(t).replace(/\r\n/g, `
`), o = pp(s, sP(e)), r = G3(o, gt(e), ta(e));
      Ik(e, r, !1, !0, n);
    }, Lk = (e) => {
      const t = {};
      if (e && e.types)
        for (let n = 0; n < e.types.length; n++) {
          const s = e.types[n];
          try {
            t[s] = e.getData(s);
          } catch {
            t[s] = "";
          }
        }
      return t;
    }, Es = (e, t) => t in e && e[t].length > 0, $k = (e) => Es(e, "text/html") || Es(e, "text/plain"), hK = (e, t) => {
      const n = t.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);
      return M(n) ? e.dom.encode(n[1]) : void 0;
    }, bK = (e, t, n, s) => {
      const o = gK(), r = Rh(e) && M(n.name), a = r ? hK(e, n.name) : o, i = r ? n.name : void 0, l = t.create(o, n, s, a, i);
      return t.add(l), l;
    }, CK = (e, t) => {
      cd(t.uri).each(({ data: n, type: s, base64Encoded: o }) => {
        const r = o ? n : btoa(n), a = t.file, i = e.editorUpload.blobCache, l = i.getByData(r, s), c = l ?? bK(e, i, a, r);
        Xl(e, `<img src="${c.blobUri()}">`, !1, !0);
      });
    }, vK = (e) => e.type === "paste", yK = (e) => Promise.all(he(e, (t) => yy(t).then((n) => ({
      file: t,
      uri: n
    })))), EK = (e) => {
      const t = zh(e);
      return (n) => st(n.type, "image/") && Fe(t, (s) => nK(s) === n.type);
    }, SK = (e, t) => {
      const n = t.items ? sn(Ft(t.items), (o) => o.kind === "file" ? [o.getAsFile()] : []) : [], s = t.files ? Ft(t.files) : [];
      return se(n.length > 0 ? n : s, EK(e));
    }, Fk = (e, t, n) => {
      const s = vK(t) ? t.clipboardData : t.dataTransfer;
      if (Ui(e) && s) {
        const o = SK(e, s);
        if (o.length > 0)
          return t.preventDefault(), yK(o).then((r) => {
            n && e.selection.setRng(n), P(r, (a) => {
              CK(e, a);
            });
          }), !0;
      }
      return !1;
    }, wK = (e) => {
      var t, n;
      return be.os.isAndroid() && ((n = (t = e.clipboardData) === null || t === void 0 ? void 0 : t.items) === null || n === void 0 ? void 0 : n.length) === 0;
    }, kK = (e) => H.metaKeyPressed(e) && e.keyCode === 86 || e.shiftKey && e.keyCode === 45, Rm = (e, t, n, s, o) => {
      let r = Ok(n);
      const a = Es(t, Yl()) || Tk(n), i = !a && q3(r), l = Am(r);
      (Pk(r) || !r.length || i && !l) && (s = !0), (s || l) && (Es(t, "text/plain") && i ? r = t["text/plain"] : r = eK(r)), !Pk(r) && (s ? Tm(e, r, o) : Xl(e, r, a, o));
    }, _K = (e, t, n) => {
      let s;
      const o = () => t.getLastRng() || e.selection.getRng();
      e.on("keydown", (r) => {
        kK(r) && !r.isDefaultPrevented() && (s = r.shiftKey && r.keyCode === 86);
      }), e.on("paste", (r) => {
        if (r.isDefaultPrevented() || wK(r))
          return;
        const a = n.get() === "text" || s;
        s = !1;
        const i = Lk(r.clipboardData);
        !$k(i) && Fk(e, r, o()) || (Es(i, "text/html") ? (r.preventDefault(), Rm(e, i, i["text/html"], a, !0)) : Es(i, "text/plain") && Es(i, "text/uri-list") ? (r.preventDefault(), Rm(e, i, i["text/plain"], a, !0)) : (t.create(), Zt.setEditorTimeout(e, () => {
          const l = t.getHtml();
          t.remove(), Rm(e, i, l, a, !1);
        }, 0)));
      });
    }, xK = (e) => {
      const t = (o) => st(o, "webkit-fake-url"), n = (o) => st(o, "data:"), s = (o) => {
        var r;
        return ((r = o.data) === null || r === void 0 ? void 0 : r.paste) === !0;
      };
      e.parser.addNodeFilter("img", (o, r, a) => {
        if (!Ui(e) && s(a))
          for (const i of o) {
            const l = i.attr("src");
            J(l) && !i.attr("data-mce-object") && l !== be.transparentSrc && (t(l) || !oP(e) && n(l)) && i.remove();
          }
      });
    }, NK = (e, t, n) => {
      _K(e, t, n), xK(e);
    }, AK = (e, t) => {
      t.get() === "text" ? (t.set("html"), zb(e, !1)) : (t.set("text"), zb(e, !0)), e.focus();
    }, TK = (e, t) => {
      e.addCommand("mceTogglePlainTextPaste", () => {
        AK(e, t);
      }), e.addCommand("mceInsertClipboardContent", (n, s) => {
        s.html && Xl(e, s.html, s.internal, !1), s.text && Tm(e, s.text, !1);
      });
    }, RK = (e, t, n) => {
      if (e)
        try {
          return e.clearData(), e.setData("text/html", t), e.setData("text/plain", n), e.setData(Yl(), t), !0;
        } catch {
          return !1;
        }
      else
        return !1;
    }, Mk = (e, t, n, s) => {
      RK(e.clipboardData, t.html, t.text) ? (e.preventDefault(), s()) : n(t.html, s);
    }, Uk = (e) => (t, n) => {
      const { dom: s, selection: o } = e, r = s.create("div", {
        contenteditable: "false",
        "data-mce-bogus": "all"
      }), a = s.create("div", { contenteditable: "true" }, t);
      s.setStyles(r, {
        position: "fixed",
        top: "0",
        left: "-3000px",
        width: "1000px",
        overflow: "hidden"
      }), r.appendChild(a), s.add(e.getBody(), r);
      const i = o.getRng();
      a.focus();
      const l = s.createRng();
      l.selectNodeContents(a), o.setRng(l), Zt.setEditorTimeout(e, () => {
        o.setRng(i), s.remove(r), n();
      }, 0);
    }, zk = (e) => ({
      html: V3(e.selection.getContent({ contextual: !0 })),
      text: e.selection.getContent({ format: "text" })
    }), PK = (e) => !!e.dom.getParent(e.selection.getStart(), "td[data-mce-selected],th[data-mce-selected]", e.getBody()), Hk = (e) => !e.selection.isCollapsed() || PK(e), DK = (e) => (t) => {
      !t.isDefaultPrevented() && Hk(e) && e.selection.isEditable() && Mk(t, zk(e), Uk(e), () => {
        if (be.browser.isChromium() || be.browser.isFirefox()) {
          const n = e.selection.getRng();
          Zt.setEditorTimeout(e, () => {
            e.selection.setRng(n), e.execCommand("Delete");
          }, 0);
        } else
          e.execCommand("Delete");
      });
    }, OK = (e) => (t) => {
      !t.isDefaultPrevented() && Hk(e) && Mk(t, zk(e), Uk(e), ce);
    }, BK = (e) => {
      e.on("cut", DK(e)), e.on("copy", OK(e));
    }, Wk = (e, t) => {
      var n, s;
      return oo.getCaretRangeFromPoint((n = t.clientX) !== null && n !== void 0 ? n : 0, (s = t.clientY) !== null && s !== void 0 ? s : 0, e.getDoc());
    }, IK = (e) => {
      const t = e["text/plain"];
      return t ? t.indexOf("file://") === 0 : !1;
    }, Vk = (e, t) => {
      e.focus(), t && e.selection.setRng(t);
    }, LK = (e) => Fe(e.files, (t) => /^image\//.test(t.type)), $K = (e, t, n, s) => {
      const o = e.getParent(n, (a) => Vs(t, a));
      if (!kt(e.getParent(n, "summary")))
        return !0;
      if (o && oe(s, "text/html")) {
        const a = new DOMParser().parseFromString(s["text/html"], "text/html").body;
        return !kt(a.querySelector(o.nodeName.toLowerCase()));
      } else
        return !1;
    }, FK = (e) => {
      e.on("input", (t) => {
        const n = (s) => kt(s.querySelector("summary"));
        if (t.inputType === "deleteByDrag") {
          const s = se(e.dom.select("details"), n);
          P(s, (o) => {
            $e(o.firstChild) && o.firstChild.remove();
            const r = e.dom.create("summary");
            r.appendChild(Ur().dom), o.prepend(r);
          });
        }
      });
    }, MK = (e, t) => {
      GR(e) && e.on("dragend dragover draggesture dragdrop drop drag", (n) => {
        n.preventDefault(), n.stopPropagation();
      }), Ui(e) || e.on("drop", (n) => {
        const s = n.dataTransfer;
        s && LK(s) && n.preventDefault();
      }), e.on("drop", (n) => {
        if (n.isDefaultPrevented())
          return;
        const s = Wk(e, n);
        if (qe(s))
          return;
        const o = Lk(n.dataTransfer), r = Es(o, Yl());
        if ((!$k(o) || IK(o)) && Fk(e, n, s))
          return;
        const a = o[Yl()], i = a || o["text/html"] || o["text/plain"], l = $K(e.dom, e.schema, s.startContainer, o), c = t.get();
        c && !l || i && (n.preventDefault(), Zt.setEditorTimeout(e, () => {
          e.undoManager.transact(() => {
            (a || c && l) && e.execCommand("Delete"), Vk(e, s);
            const u = Ok(i);
            o["text/html"] ? Xl(e, u, r, !0) : Tm(e, u, !0);
          });
        }));
      }), e.on("dragstart", (n) => {
        t.set(!0);
      }), e.on("dragover dragend", (n) => {
        Ui(e) && !t.get() && (n.preventDefault(), Vk(e, Wk(e, n))), n.type === "dragend" && t.set(!1);
      }), FK(e);
    }, UK = (e) => {
      const t = (o) => (r) => {
        o(e, r);
      }, n = YR(e);
      Se(n) && e.on("PastePreProcess", t(n));
      const s = XR(e);
      Se(s) && e.on("PastePostProcess", t(s));
    }, zK = (e, t) => {
      e.on("PastePreProcess", (n) => {
        n.content = t(e, n.content, n.internal);
      });
    }, HK = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi, jk = (e) => L.trim(e).replace(HK, Hr).toLowerCase(), WK = (e, t, n) => {
      const s = QR(e);
      if (n || s === "all" || !JR(e))
        return t;
      const o = s ? s.split(/[, ]/) : [];
      if (o && s !== "none") {
        const r = e.dom, a = e.selection.getNode();
        t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, (i, l, c, u) => {
          const f = r.parseStyle(r.decode(c)), d = {};
          for (let h = 0; h < o.length; h++) {
            const g = f[o[h]];
            let b = g, v = r.getStyle(a, o[h], !0);
            /color/.test(o[h]) && (b = jk(b), v = jk(v)), v !== b && (d[o[h]] = g);
          }
          const p = r.serializeStyle(d, "span");
          return p ? l + ' style="' + p + '"' + u : l + u;
        });
      } else
        t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");
      return t = t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi, (r, a, i, l) => a + ' style="' + i + '"' + l), t;
    }, VK = (e) => {
      (be.browser.isChromium() || be.browser.isSafari()) && zK(e, WK);
    }, jK = (e) => {
      const t = et(!1), n = et(nP(e) ? "text" : "html"), s = J3(e);
      VK(e), TK(e, n), UK(e), e.on("PreInit", () => {
        BK(e), MK(e, t), NK(e, s, n);
      });
    }, qK = (e) => {
      e.on("click", (t) => {
        e.dom.getParent(t.target, "details") && t.preventDefault();
      });
    }, KK = (e) => {
      e.parser.addNodeFilter("details", (t) => {
        const n = bP(e);
        P(t, (s) => {
          n === "expanded" ? s.attr("open", "open") : n === "collapsed" && s.attr("open", null);
        });
      }), e.serializer.addNodeFilter("details", (t) => {
        const n = CP(e);
        P(t, (s) => {
          n === "expanded" ? s.attr("open", "open") : n === "collapsed" && s.attr("open", null);
        });
      });
    }, GK = (e) => {
      qK(e), KK(e);
    }, YK = $e, qk = B, XK = (e) => De(e.dom), ZK = (e) => rn(e.dom), Kk = (e) => (t) => ve(C.fromDom(e), t), QK = (e, t, n) => Ls(C.fromDom(e), (s) => ZK(s) || n.isBlock(pe(s)), Kk(t)).getOr(C.fromDom(t)).dom, Gk = (e, t) => Ls(C.fromDom(e), XK, Kk(t)), Yk = (e, t, n) => {
      const s = new Xe(e, t), o = n ? s.next.bind(s) : s.prev.bind(s);
      let r = e;
      for (let a = n ? e : o(); a && !YK(a); a = o())
        an(a) && (r = a);
      return r;
    }, JK = (e, t, n) => {
      const o = N.fromRangeStart(e).getNode(), r = QK(o, t, n), a = Yk(o, r, !1), i = Yk(o, r, !0), l = document.createRange();
      return Gk(a, r).fold(() => {
        qk(a) ? l.setStart(a, 0) : l.setStartBefore(a);
      }, (c) => l.setStartBefore(c.dom)), Gk(i, r).fold(() => {
        qk(i) ? l.setEnd(i, i.data.length) : l.setEndAfter(i);
      }, (c) => l.setEndAfter(c.dom)), l;
    }, e5 = (e) => {
      const t = JK(e.selection.getRng(), e.getBody(), e.schema);
      e.selection.setRng(Kf(t));
    }, t5 = (e) => {
      e.on("mousedown", (t) => {
        t.detail >= 3 && (t.preventDefault(), e5(e));
      });
    };
    var or;
    (function(e) {
      e.Before = "before", e.After = "after";
    })(or || (or = {}));
    const n5 = (e, t) => Math.abs(e.left - t), s5 = (e, t) => Math.abs(e.right - t), o5 = (e, t) => e >= t.top && e <= t.bottom, r5 = (e, t) => e.top < t.bottom && e.bottom > t.top, a5 = (e, t) => {
      const n = hT(e, t) / Math.min(e.height, t.height);
      return r5(e, t) && n > 0.5;
    }, i5 = (e, t) => {
      const n = se(e, (s) => o5(t, s));
      return pT(n).fold(() => [
        [],
        e
      ], (s) => {
        const {
          pass: o,
          fail: r
        } = So(e, (a) => a5(a, s));
        return [
          o,
          r
        ];
      });
    }, l5 = (e, t) => ({
      node: e.node,
      position: n5(e, t) < s5(e, t) ? or.Before : or.After
    }), c5 = (e, t, n) => t > e.left && t < e.right ? 0 : Math.min(Math.abs(e.left - t), Math.abs(e.right - t)), Pm = (e, t, n, s) => {
      const o = (f) => an(f.node) ? m.some(f) : q(f.node) ? Pm(Ft(f.node.childNodes), t, n, !1) : m.none(), r = (f, d, p) => o(d).filter((h) => Math.abs(p(f, t, n) - p(h, t, n)) < 2 && B(h.node)), a = (f, d) => {
        const p = Rs(f, (h, g) => d(h, t, n) - d(g, t, n));
        return wo(p, o).map((h) => s && !B(h.node) && p.length > 1 ? r(h, p[1], d).getOr(h) : h);
      }, [i, l] = i5(pS(e), n), {
        pass: c,
        fail: u
      } = So(l, (f) => f.top < n);
      return a(i, c5).orThunk(() => a(u, Jp)).orThunk(() => a(c, Jp));
    }, u5 = (e, t, n, s) => {
      const o = (r, a) => {
        const i = (c) => q(c) && c.classList.contains("mce-drag-container"), l = se(r.dom.childNodes, hr(i));
        return a.fold(() => Pm(l, n, s, !0), (c) => {
          const u = se(l, (f) => f !== c.dom);
          return Pm(u, n, s, !0);
        }).orThunk(() => (ve(r, e) ? m.none() : gi(r)).bind((u) => o(u, m.some(r))));
      };
      return o(t, m.none());
    }, f5 = (e, t, n) => {
      const s = C.fromDom(e), o = qn(s), a = C.fromPoint(o, t, n).filter((i) => jn(s, i)).getOr(s);
      return u5(s, a, t, n);
    }, Xk = (e, t, n) => f5(e, t, n).filter((s) => oa(s.node)).map((s) => l5(s, t)), Zk = (e) => {
      var t, n;
      const s = e.getBoundingClientRect(), o = e.ownerDocument, r = o.documentElement, a = o.defaultView;
      return {
        top: s.top + ((t = a == null ? void 0 : a.scrollY) !== null && t !== void 0 ? t : 0) - r.clientTop,
        left: s.left + ((n = a == null ? void 0 : a.scrollX) !== null && n !== void 0 ? n : 0) - r.clientLeft
      };
    }, d5 = (e) => e.inline ? Zk(e.getBody()) : {
      left: 0,
      top: 0
    }, m5 = (e) => {
      const t = e.getBody();
      return e.inline ? {
        left: t.scrollLeft,
        top: t.scrollTop
      } : {
        left: 0,
        top: 0
      };
    }, g5 = (e) => {
      const t = e.getBody(), n = e.getDoc().documentElement, s = {
        left: t.scrollLeft,
        top: t.scrollTop
      }, o = {
        left: t.scrollLeft || n.scrollLeft,
        top: t.scrollTop || n.scrollTop
      };
      return e.inline ? s : o;
    }, p5 = (e, t) => {
      if (t.target.ownerDocument !== e.getDoc()) {
        const n = Zk(e.getContentAreaContainer()), s = g5(e);
        return {
          left: t.pageX - n.left + s.left,
          top: t.pageY - n.top + s.top
        };
      }
      return {
        left: t.pageX,
        top: t.pageY
      };
    }, h5 = (e, t, n) => ({
      pageX: n.left - e.left + t.left,
      pageY: n.top - e.top + t.top
    }), b5 = (e, t) => h5(d5(e), m5(e), p5(e, t)), Qk = (e) => ({
      target: e,
      srcElement: e
    }), C5 = (e, t, n, s) => ({
      ...t,
      dataTransfer: s,
      type: e,
      ...Qk(n)
    }), v5 = (e, t, n) => {
      const s = tg("Function not supported on simulated event.");
      return {
        bubbles: !0,
        cancelBubble: !1,
        cancelable: !0,
        composed: !1,
        currentTarget: null,
        defaultPrevented: !1,
        eventPhase: 0,
        isTrusted: !0,
        returnValue: !1,
        timeStamp: 0,
        type: e,
        composedPath: s,
        initEvent: s,
        preventDefault: ce,
        stopImmediatePropagation: ce,
        stopPropagation: ce,
        AT_TARGET: window.Event.AT_TARGET,
        BUBBLING_PHASE: window.Event.BUBBLING_PHASE,
        CAPTURING_PHASE: window.Event.CAPTURING_PHASE,
        NONE: window.Event.NONE,
        altKey: !1,
        button: 0,
        buttons: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: !1,
        metaKey: !1,
        movementX: 0,
        movementY: 0,
        offsetX: 0,
        offsetY: 0,
        pageX: 0,
        pageY: 0,
        relatedTarget: null,
        screenX: 0,
        screenY: 0,
        shiftKey: !1,
        x: 0,
        y: 0,
        detail: 0,
        view: null,
        which: 0,
        initUIEvent: s,
        initMouseEvent: s,
        getModifierState: s,
        dataTransfer: n,
        ...Qk(t)
      };
    }, y5 = (e, t) => {
      const n = H3(e);
      return t === "dragstart" ? (Sk(n), kk(n)) : t === "drop" ? (O3(n), wm(n)) : (B3(n), F3(n)), n;
    }, E5 = (e, t, n, s) => {
      const o = y5(n, e);
      return lt(s) ? v5(e, t, o) : C5(e, s, t, o);
    }, Zl = 32, S5 = 100, Ql = 8, Jl = 16, Jk = De, w5 = yT(Jk, rn), k5 = (e, t, n) => Jk(n) && n !== t && e.isEditable(n.parentElement), _5 = (e, t, n) => qe(t) || t === n || e.dom.isChildOf(t, n) ? !1 : e.dom.isEditable(t), x5 = (e, t, n, s) => {
      const o = e.dom, r = t.cloneNode(!0);
      o.setStyles(r, {
        width: n,
        height: s
      }), o.setAttrib(r, "data-mce-selected", null);
      const a = o.create("div", {
        class: "mce-drag-container",
        "data-mce-bogus": "all",
        unselectable: "on",
        contenteditable: "false"
      });
      return o.setStyles(a, {
        position: "absolute",
        opacity: 0.5,
        overflow: "hidden",
        border: 0,
        padding: 0,
        margin: 0,
        width: n,
        height: s
      }), o.setStyles(r, {
        margin: 0,
        boxSizing: "border-box"
      }), a.appendChild(r), a;
    }, N5 = (e, t) => {
      e.parentNode !== t && t.appendChild(e);
    }, ec = (e, t) => (n) => () => {
      const s = e === "left" ? n.scrollX : n.scrollY;
      n.scroll({
        [e]: s + t,
        behavior: "smooth"
      });
    }, e0 = ec("left", -Zl), t0 = ec("left", Zl), n0 = ec("top", -Zl), s0 = ec("top", Zl), A5 = (e, t, n, s, o, r, a, i, l, c, u, f) => {
      let d = 0, p = 0;
      e.style.left = t.pageX + "px", e.style.top = t.pageY + "px", t.pageX + n > o && (d = t.pageX + n - o), t.pageY + s > r && (p = t.pageY + s - r), e.style.width = n - d + "px", e.style.height = s - p + "px";
      const h = l.clientHeight, g = l.clientWidth, b = a + l.getBoundingClientRect().top, v = i + l.getBoundingClientRect().left;
      u.on((y) => {
        y.intervalId.clear(), y.dragging && f && (a + Ql >= h ? y.intervalId.set(s0(c)) : a - Ql <= 0 ? y.intervalId.set(n0(c)) : i + Ql >= g ? y.intervalId.set(t0(c)) : i - Ql <= 0 ? y.intervalId.set(e0(c)) : b + Jl >= window.innerHeight ? y.intervalId.set(s0(window)) : b - Jl <= 0 ? y.intervalId.set(n0(window)) : v + Jl >= window.innerWidth ? y.intervalId.set(t0(window)) : v - Jl <= 0 && y.intervalId.set(e0(window)));
      });
    }, o0 = (e) => {
      e && e.parentNode && e.parentNode.removeChild(e);
    }, T5 = (e, t) => {
      const n = e.getParent(t.parentNode, e.isBlock);
      o0(t), n && n !== e.getRoot() && e.isEmpty(n) && is(C.fromDom(n));
    }, R5 = (e) => e.button === 0, P5 = (e, t) => ({
      pageX: t.pageX - e.relX,
      pageY: t.pageY + 5
    }), D5 = (e, t) => (n) => {
      if (R5(n)) {
        const s = Ye(t.dom.getParents(n.target), w5).getOr(null);
        if (M(s) && k5(t.dom, t.getBody(), s)) {
          const o = t.dom.getPos(s), r = t.getBody(), a = t.getDoc().documentElement;
          e.set({
            element: s,
            dataTransfer: km(),
            dragging: !1,
            screenX: n.screenX,
            screenY: n.screenY,
            maxX: (t.inline ? r.scrollWidth : a.offsetWidth) - 2,
            maxY: (t.inline ? r.scrollHeight : a.offsetHeight) - 2,
            relX: n.pageX - o.x,
            relY: n.pageY - o.y,
            width: s.offsetWidth,
            height: s.offsetHeight,
            ghost: x5(t, s, s.offsetWidth, s.offsetHeight),
            intervalId: oT(S5)
          });
        }
      }
    }, O5 = (e, t, n) => {
      e._selectionOverrides.hideFakeCaret(), Xk(e.getBody(), t, n).fold(() => e.selection.placeCaretAt(t, n), (s) => {
        const o = e._selectionOverrides.showCaret(1, s.node, s.position === or.Before, !1);
        o ? e.selection.setRng(o) : e.selection.placeCaretAt(t, n);
      });
    }, Va = (e, t, n, s, o) => {
      t === "dragstart" && Nk(s, e.dom.getOuterHTML(n));
      const r = E5(t, n, s, o);
      return e.dispatch(t, r);
    }, B5 = (e, t) => {
      const n = Bi((o, r) => O5(t, o, r), 0);
      t.on("remove", n.cancel);
      const s = e;
      return (o) => e.on((r) => {
        const a = Math.max(Math.abs(o.screenX - r.screenX), Math.abs(o.screenY - r.screenY));
        if (!r.dragging && a > 10) {
          const i = Va(t, "dragstart", r.element, r.dataTransfer, o);
          if (M(i.dataTransfer) && (r.dataTransfer = i.dataTransfer), i.isDefaultPrevented())
            return;
          r.dragging = !0, t.focus();
        }
        if (r.dragging) {
          const i = o.currentTarget === t.getDoc().documentElement, l = P5(r, b5(t, o));
          N5(r.ghost, t.getBody()), A5(r.ghost, l, r.width, r.height, r.maxX, r.maxY, o.clientY, o.clientX, t.getContentAreaContainer(), t.getWin(), s, i), n.throttle(o.clientX, o.clientY);
        }
      });
    }, I5 = (e) => {
      const t = e.getSel();
      if (M(t)) {
        const s = t.getRangeAt(0).startContainer;
        return B(s) ? s.parentNode : s;
      } else
        return null;
    }, L5 = (e, t) => (n) => {
      e.on((s) => {
        var o;
        if (s.intervalId.clear(), s.dragging) {
          if (_5(t, I5(t.selection), s.element)) {
            const r = (o = t.getDoc().elementFromPoint(n.clientX, n.clientY)) !== null && o !== void 0 ? o : t.getBody();
            Va(t, "drop", r, s.dataTransfer, n).isDefaultPrevented() || t.undoManager.transact(() => {
              T5(t.dom, s.element), W3(s.dataTransfer).each((i) => t.insertContent(i)), t._selectionOverrides.hideFakeCaret();
            });
          }
          Va(t, "dragend", t.getBody(), s.dataTransfer, n);
        }
      }), a0(e);
    }, r0 = (e, t, n) => {
      e.on((s) => {
        s.intervalId.clear(), s.dragging && n.fold(() => Va(t, "dragend", s.element, s.dataTransfer), (o) => Va(t, "dragend", s.element, s.dataTransfer, o));
      }), a0(e);
    }, $5 = (e, t) => (n) => r0(e, t, m.some(n)), a0 = (e) => {
      e.on((t) => {
        t.intervalId.clear(), o0(t.ghost);
      }), e.clear();
    }, F5 = (e) => {
      const t = fs(), n = Ne.DOM, s = document, o = D5(t, e), r = B5(t, e), a = L5(t, e), i = $5(t, e);
      e.on("mousedown", o), e.on("mousemove", r), e.on("mouseup", a), n.bind(s, "mousemove", r), n.bind(s, "mouseup", i), e.on("remove", () => {
        n.unbind(s, "mousemove", r), n.unbind(s, "mouseup", i);
      }), e.on("keydown", (l) => {
        l.keyCode === H.ESC && r0(t, e, m.none());
      });
    }, M5 = (e) => {
      const t = (o) => {
        if (!o.isDefaultPrevented()) {
          const r = o.dataTransfer;
          r && (ke(r.types, "Files") || r.files.length > 0) && (o.preventDefault(), o.type === "drop" && wl(e, "Dropped file type is not supported"));
        }
      }, n = (o) => {
        sl(e, o.target) && t(o);
      }, s = () => {
        const o = Ne.DOM, r = e.dom, a = document, i = e.inline ? e.getBody() : e.getDoc(), l = [
          "drop",
          "dragover"
        ];
        P(l, (c) => {
          o.bind(a, c, n), r.bind(i, c, t);
        }), e.on("remove", () => {
          P(l, (c) => {
            o.unbind(a, c, n), r.unbind(i, c, t);
          });
        });
      };
      e.on("init", () => {
        Zt.setEditorTimeout(e, s, 0);
      });
    }, U5 = (e) => {
      F5(e), FR(e) && M5(e);
    }, z5 = (e) => {
      const t = Bi(() => {
        if (!e.removed && e.getBody().contains(document.activeElement)) {
          const n = e.selection.getRng();
          if (n.collapsed) {
            const s = Bd(e, n, !1);
            e.selection.setRng(s);
          }
        }
      }, 0);
      e.on("focus", () => {
        t.throttle();
      }), e.on("blur", () => {
        t.cancel();
      });
    }, H5 = (e) => {
      e.on("init", () => {
        e.on("focusin", (t) => {
          const n = t.target;
          if (An(n)) {
            const s = lo(e.getBody(), n), o = De(s) ? s : n;
            e.selection.getNode() !== o && Pa(e, o).each((r) => e.selection.setRng(r));
          }
        });
      });
    }, ja = De, i0 = (e, t) => lo(e.getBody(), t), W5 = (e) => {
      const t = e.selection, n = e.dom, s = e.getBody(), o = PP(e, s, n.isBlock, () => ro(e)), r = "sel-" + n.uniqueId(), a = "data-mce-selected";
      let i;
      const l = (U) => M(U) && n.hasClass(U, "mce-offscreen-selection"), c = (U) => U !== s && (ja(U) || An(U)) && n.isChildOf(U, s) && n.isEditable(U.parentNode), u = (U) => {
        U && t.setRng(U);
      }, f = (U, A, _, R = !0) => e.dispatch("ShowCaret", {
        target: A,
        direction: U,
        before: _
      }).isDefaultPrevented() ? null : (R && t.scrollIntoView(A, U === -1), o.show(_, A)), d = (U) => {
        U.hasAttribute("data-mce-caret") && (Qc(U), t.scrollIntoView(U));
      }, p = () => {
        e.on("click", (A) => {
          n.isEditable(A.target) || (A.preventDefault(), e.focus());
        }), e.on("blur NewBlock", S), e.on("ResizeWindow FullscreenStateChanged", o.reposition), e.on("tap", (A) => {
          const _ = A.target, R = i0(e, _);
          ja(R) ? (A.preventDefault(), Pa(e, R).each(E)) : c(_) && Pa(e, _).each(E);
        }, !0), e.on("mousedown", (A) => {
          const _ = A.target;
          if (_ !== s && _.nodeName !== "HTML" && !n.isChildOf(_, s) || !BU(e, A.clientX, A.clientY))
            return;
          S(), O();
          const R = i0(e, _);
          ja(R) ? (A.preventDefault(), Pa(e, R).each(E)) : Xk(s, A.clientX, A.clientY).each((z) => {
            A.preventDefault();
            const Z = f(1, z.node, z.position === or.Before, !1);
            u(Z), Xn(R) ? R.focus() : e.getBody().focus();
          });
        }), e.on("keypress", (A) => {
          H.modifierPressed(A) || ja(t.getNode()) && A.preventDefault();
        }), e.on("GetSelectionRange", (A) => {
          let _ = A.range;
          if (i) {
            if (!i.parentNode) {
              i = null;
              return;
            }
            _ = _.cloneRange(), _.selectNode(i), A.range = _;
          }
        }), e.on("SetSelectionRange", (A) => {
          A.range = b(A.range);
          const _ = E(A.range, A.forward);
          _ && (A.range = _);
        });
        const U = (A) => q(A) && A.id === "mcepastebin";
        e.on("AfterSetSelectionRange", (A) => {
          const _ = A.range, R = _.startContainer.parentElement;
          !g(_) && !U(R) && O(), l(R) || S();
        }), U5(e), z5(e), H5(e);
      }, h = (U) => qt(U) || _i(U) || xi(U), g = (U) => h(U.startContainer) || h(U.endContainer), b = (U) => {
        const A = e.schema.getVoidElements(), _ = n.createRng(), R = U.startContainer, z = U.startOffset, Z = U.endContainer, re = U.endOffset;
        return oe(A, R.nodeName.toLowerCase()) ? z === 0 ? _.setStartBefore(R) : _.setStartAfter(R) : _.setStart(R, z), oe(A, Z.nodeName.toLowerCase()) ? re === 0 ? _.setEndBefore(Z) : _.setEndAfter(Z) : _.setEnd(Z, re), _;
      }, v = (U, A) => {
        const _ = C.fromDom(e.getBody()), R = e.getDoc(), z = Or(_, "#" + r).getOrThunk(() => {
          const ie = C.fromHtml('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>', R);
          return ot(ie, "id", r), We(_, ie), ie;
        }), Z = n.createRng();
        Po(z), Ms(z, [
          C.fromText(Je, R),
          C.fromDom(A),
          C.fromText(Je, R)
        ]), Z.setStart(z.dom.firstChild, 1), Z.setEnd(z.dom.lastChild, 0), pi(z, { top: n.getPos(U, e.getBody()).y + "px" }), iC(z);
        const re = t.getSel();
        return re && (re.removeAllRanges(), re.addRange(Z)), Z;
      }, y = (U) => {
        const A = U.cloneNode(!0), _ = e.dispatch("ObjectSelected", {
          target: U,
          targetClone: A
        });
        if (_.isDefaultPrevented())
          return null;
        const R = v(U, _.targetClone), z = C.fromDom(U);
        return P(mt(C.fromDom(e.getBody()), `*[${a}]`), (Z) => {
          ve(z, Z) || rt(Z, a);
        }), n.getAttrib(U, a) || U.setAttribute(a, "1"), i = U, O(), R;
      }, E = (U, A) => {
        if (!U)
          return null;
        if (U.collapsed) {
          if (!g(U)) {
            const Z = A ? 1 : -1, re = la(Z, s, U), ie = re.getNode(!A);
            if (M(ie)) {
              if (oa(ie))
                return f(Z, ie, A ? !re.isAtEnd() : !1, !1);
              if (ls(ie) && De(ie.nextSibling)) {
                const we = n.createRng();
                return we.setStart(ie, 0), we.setEnd(ie, 0), we;
              }
            }
            const Ce = re.getNode(A);
            if (M(Ce)) {
              if (oa(Ce))
                return f(Z, Ce, A ? !1 : !re.isAtEnd(), !1);
              if (ls(Ce) && De(Ce.previousSibling)) {
                const we = n.createRng();
                return we.setStart(Ce, 1), we.setEnd(Ce, 1), we;
              }
            }
          }
          return null;
        }
        let _ = U.startContainer, R = U.startOffset;
        const z = U.endOffset;
        if (B(_) && R === 0 && ja(_.parentNode) && (_ = _.parentNode, R = n.nodeIndex(_), _ = _.parentNode), !q(_))
          return null;
        if (z === R + 1 && _ === U.endContainer) {
          const Z = _.childNodes[R];
          if (c(Z))
            return y(Z);
        }
        return null;
      }, S = () => {
        i && i.removeAttribute(a), Or(C.fromDom(e.getBody()), "#" + r).each(Pe), i = null;
      }, T = () => {
        o.destroy(), i = null;
      }, O = () => {
        o.hide();
      };
      return In(e) || p(), {
        showCaret: f,
        showBlockCaretContainer: d,
        hideFakeCaret: O,
        destroy: T
      };
    }, V5 = (e, t) => {
      let n = t;
      for (let s = e.previousSibling; B(s); s = s.previousSibling)
        n += s.data.length;
      return n;
    }, l0 = (e, t, n, s, o) => {
      if (B(n) && (s < 0 || s > n.data.length))
        return [];
      const r = o && B(n) ? [V5(n, s)] : [s];
      let a = n;
      for (; a !== t && a.parentNode; )
        r.push(e.nodeIndex(a, o)), a = a.parentNode;
      return a === t ? r.reverse() : [];
    }, Dm = (e, t, n, s, o, r, a = !1) => {
      const i = l0(e, t, n, s, a), l = l0(e, t, o, r, a);
      return {
        start: i,
        end: l
      };
    }, c0 = (e, t) => {
      const n = t.slice(), s = n.pop();
      return mn(s) ? Rt(n, (r, a) => r.bind((i) => m.from(i.childNodes[a])), m.some(e)).bind((r) => B(r) && (s < 0 || s > r.data.length) ? m.none() : m.some({
        node: r,
        offset: s
      })) : m.none();
    }, u0 = (e, t) => c0(e, t.start).bind(({
      node: n,
      offset: s
    }) => c0(e, t.end).map(({
      node: o,
      offset: r
    }) => {
      const a = document.createRange();
      return a.setStart(n, s), a.setEnd(o, r), a;
    })), j5 = (e, t, n, s = !1) => Dm(e, t, n.startContainer, n.startOffset, n.endContainer, n.endOffset, s), rr = (e, t, n) => {
      if (t && e.isEmpty(t) && !n(t)) {
        const s = t.parentNode;
        e.remove(t, B(t.firstChild) && cs(t.firstChild.data)), rr(e, s, n);
      }
    }, tc = (e, t, n, s = !0) => {
      const o = t.startContainer.parentNode, r = t.endContainer.parentNode;
      t.deleteContents(), s && !n(t.startContainer) && (B(t.startContainer) && t.startContainer.data.length === 0 && e.remove(t.startContainer), B(t.endContainer) && t.endContainer.data.length === 0 && e.remove(t.endContainer), rr(e, o, n), o !== r && rr(e, r, n));
    }, Om = (e, t) => m.from(e.dom.getParent(t.startContainer, e.dom.isBlock)), f0 = (e, t, n) => {
      const s = e.dynamicPatternsLookup({
        text: n,
        block: t
      });
      return {
        ...e,
        blockPatterns: Sh(s).concat(e.blockPatterns),
        inlinePatterns: wh(s).concat(e.inlinePatterns)
      };
    }, d0 = (e, t, n, s) => {
      const o = e.createRng();
      return o.setStart(t, 0), o.setEnd(n, s), o.toString();
    }, q5 = (e) => /^\s[^\s]/.test(e), m0 = (e, t, n) => {
      HV(t, 0, t).each((o) => {
        const r = o.container;
        vw(r, n.start.length, t).each((l) => {
          const c = e.createRng();
          c.setStart(r, 0), c.setEnd(l.container, l.offset), tc(e, c, (u) => u === t);
        });
        const a = C.fromDom(r), i = Si(a);
        q5(i) && hN(a, i.slice(1));
      });
    }, K5 = (e, t) => {
      const n = e.dom, s = t.pattern, o = u0(n.getRoot(), t.range).getOrDie("Unable to resolve path range"), r = (a, i) => {
        const l = i.get(a);
        return Ge(l) && Pt(l).exists((c) => oe(c, "block"));
      };
      return Om(e, o).each((a) => {
        s.type === "block-format" ? r(s.format, e.formatter) && e.undoManager.transact(() => {
          m0(e.dom, a, s), e.formatter.apply(s.format);
        }) : s.type === "block-command" && e.undoManager.transact(() => {
          m0(e.dom, a, s), e.execCommand(s.cmd, !1, s.value);
        });
      }), !0;
    }, G5 = (e) => Rs(e, (t, n) => n.start.length - t.start.length), Y5 = (e, t) => {
      const n = G5(e), s = t.replace(Je, " ");
      return Ye(n, (o) => t.indexOf(o.start) === 0 || s.indexOf(o.start) === 0);
    }, X5 = (e, t, n, s) => {
      var o;
      const r = e.dom, a = gt(e);
      if (!r.is(t, a))
        return [];
      const i = (o = t.textContent) !== null && o !== void 0 ? o : "";
      return Y5(n.blockPatterns, i).map((l) => L.trim(i).length === l.start.length ? [] : [{
        pattern: l,
        range: Dm(r, r.getRoot(), t, 0, t, 0, s)
      }]).getOr([]);
    }, Z5 = (e, t) => {
      if (t.length === 0)
        return;
      const n = e.selection.getBookmark();
      P(t, (s) => K5(e, s)), e.selection.moveToBookmark(n);
    }, g0 = (e, t) => e.create("span", {
      "data-mce-type": "bookmark",
      id: t
    }), nc = (e, t) => {
      const n = e.createRng();
      return n.setStartAfter(t.start), n.setEndBefore(t.end), n;
    }, p0 = (e, t, n) => {
      const s = u0(e.getRoot(), n).getOrDie("Unable to resolve path range"), o = s.startContainer, r = s.endContainer, a = s.endOffset === 0 ? r : r.splitText(s.endOffset), i = s.startOffset === 0 ? o : o.splitText(s.startOffset), l = i.parentNode, c = a.parentNode;
      return {
        prefix: t,
        end: c.insertBefore(g0(e, t + "-end"), a),
        start: l.insertBefore(g0(e, t + "-start"), i)
      };
    }, h0 = (e, t, n) => {
      rr(e, e.get(t.prefix + "-end"), n), rr(e, e.get(t.prefix + "-start"), n);
    }, Bm = (e) => e.start.length === 0, Q5 = (e) => (t, n) => {
      const o = t.data.substring(0, n), r = o.lastIndexOf(e.charAt(e.length - 1)), a = o.lastIndexOf(e);
      return a !== -1 ? a + e.length : r !== -1 ? r + 1 : -1;
    }, b0 = (e, t, n, s) => {
      const o = t.start;
      return sm(e, s.container, s.offset, Q5(o), n).bind((a) => {
        var i, l;
        const c = (l = (i = n.textContent) === null || i === void 0 ? void 0 : i.indexOf(o)) !== null && l !== void 0 ? l : -1;
        if (c !== -1 && a.offset >= c + o.length) {
          const f = e.createRng();
          return f.setStart(a.container, a.offset - o.length), f.setEnd(a.container, a.offset), m.some(f);
        } else {
          const f = a.offset - o.length;
          return nm(a.container, f, n).map((d) => {
            const p = e.createRng();
            return p.setStart(d.container, d.offset), p.setEnd(a.container, a.offset), p;
          }).filter((d) => d.toString() === o).orThunk(() => b0(e, t, n, yn(a.container, 0)));
        }
      });
    }, J5 = (e, t, n, s, o, r = !1) => {
      if (t.start.length === 0 && !r) {
        const a = e.createRng();
        return a.setStart(n, s), a.setEnd(n, s), m.some(a);
      }
      return tm(n, s, o).bind((a) => b0(e, t, o, a).bind((l) => {
        var c;
        if (r) {
          if (l.endContainer === a.container && l.endOffset === a.offset)
            return m.none();
          if (a.offset === 0 && ((c = l.endContainer.textContent) === null || c === void 0 ? void 0 : c.length) === l.endOffset)
            return m.none();
        }
        return m.some(l);
      }));
    }, e8 = (e, t, n, s) => {
      const o = e.dom, r = o.getRoot(), a = n.pattern, i = n.position.container, l = n.position.offset;
      return nm(i, l - n.pattern.end.length, t).bind((c) => {
        const u = Dm(o, r, c.container, c.offset, i, l, s);
        if (Bm(a))
          return m.some({
            matches: [{
              pattern: a,
              startRng: u,
              endRng: u
            }],
            position: c
          });
        {
          const f = sc(e, n.remainingPatterns, c.container, c.offset, t, s), d = f.getOr({
            matches: [],
            position: c
          }), p = d.position;
          return J5(o, a, p.container, p.offset, t, f.isNone()).map((g) => {
            const b = j5(o, r, g, s);
            return {
              matches: d.matches.concat([{
                pattern: a,
                startRng: b,
                endRng: u
              }]),
              position: yn(g.startContainer, g.startOffset)
            };
          });
        }
      });
    }, sc = (e, t, n, s, o, r) => {
      const a = e.dom;
      return tm(n, s, a.getRoot()).bind((i) => {
        const l = d0(a, o, n, s);
        for (let c = 0; c < t.length; c++) {
          const u = t[c];
          if (!Ac(l, u.end))
            continue;
          const f = t.slice();
          f.splice(c, 1);
          const d = e8(e, o, {
            pattern: u,
            remainingPatterns: f,
            position: i
          }, r);
          if (d.isNone() && s > 0)
            return sc(e, t, n, s - 1, o, r);
          if (d.isSome())
            return d;
        }
        return m.none();
      });
    }, C0 = (e, t, n) => {
      e.selection.setRng(n), t.type === "inline-format" ? P(t.format, (s) => {
        e.formatter.apply(s);
      }) : e.execCommand(t.cmd, !1, t.value);
    }, t8 = (e, t, n, s) => {
      const o = nc(e.dom, n);
      tc(e.dom, o, s), C0(e, t, o);
    }, n8 = (e, t, n, s, o) => {
      const r = e.dom, a = nc(r, s), i = nc(r, n);
      tc(r, i, o), tc(r, a, o);
      const l = {
        prefix: n.prefix,
        start: n.end,
        end: s.start
      }, c = nc(r, l);
      C0(e, t, c);
    }, s8 = (e, t) => {
      const n = Xr("mce_textpattern"), s = Cr(t, (o, r) => {
        const a = p0(e, n + `_end${o.length}`, r.endRng);
        return o.concat([{
          ...r,
          endMarker: a
        }]);
      }, []);
      return Cr(s, (o, r) => {
        const a = s.length - o.length - 1, i = Bm(r.pattern) ? r.endMarker : p0(e, n + `_start${a}`, r.startRng);
        return o.concat([{
          ...r,
          startMarker: i
        }]);
      }, []);
    }, o8 = (e) => Rs(e, (t, n) => n.end.length - t.end.length), r8 = (e, t) => {
      const n = zn(e, (s) => Fe(t, (o) => s.pattern.start === o.pattern.start && s.pattern.end === o.pattern.end));
      return e.length === t.length ? n ? e : t : e.length > t.length ? e : t;
    }, v0 = (e, t, n, s, o, r) => {
      const a = sc(e, o.inlinePatterns, n, s, t, r).fold(() => [], (l) => l.matches), i = sc(e, o8(o.inlinePatterns), n, s, t, r).fold(() => [], (l) => l.matches);
      return r8(a, i);
    }, y0 = (e, t) => {
      if (t.length === 0)
        return;
      const n = e.dom, s = e.selection.getBookmark(), o = s8(n, t);
      P(o, (r) => {
        const a = n.getParent(r.startMarker.start, n.isBlock), i = (l) => l === a;
        Bm(r.pattern) ? t8(e, r.pattern, r.endMarker, i) : n8(e, r.pattern, r.startMarker, r.endMarker, i), h0(n, r.endMarker, i), h0(n, r.startMarker, i);
      }), e.selection.moveToBookmark(s);
    }, a8 = (e, t) => {
      const n = e.selection.getRng();
      return Om(e, n).map((s) => {
        var o;
        const r = Math.max(0, n.startOffset), a = f0(t, s, (o = s.textContent) !== null && o !== void 0 ? o : ""), i = v0(e, s, n.startContainer, r, a, !0), l = X5(e, s, a, !0);
        return l.length > 0 || i.length > 0 ? (e.undoManager.add(), e.undoManager.extra(() => {
          e.execCommand("mceInsertNewLine");
        }, () => {
          AN(e), y0(e, i), Z5(e, l);
          const c = e.selection.getRng(), u = tm(c.startContainer, c.startOffset, e.dom.getRoot());
          e.execCommand("mceInsertNewLine"), u.each((f) => {
            const d = f.container;
            d.data.charAt(f.offset - 1) === $r && (d.deleteData(f.offset - 1, 1), rr(e.dom, d.parentNode, (p) => p === e.dom.getRoot()));
          });
        }), !0) : !1;
      }).getOr(!1);
    }, i8 = (e, t) => {
      const n = e.selection.getRng();
      Om(e, n).map((s) => {
        const o = Math.max(0, n.startOffset - 1), r = d0(e.dom, s, n.startContainer, o), a = f0(t, s, r), i = v0(e, s, n.startContainer, o, a, !1);
        i.length > 0 && e.undoManager.transact(() => {
          y0(e, i);
        });
      });
    }, E0 = (e, t, n) => {
      for (let s = 0; s < e.length; s++)
        if (n(e[s], t))
          return !0;
      return !1;
    }, l8 = (e, t) => E0(e, t, (n, s) => n === s.keyCode && !H.modifierPressed(s)), c8 = (e, t) => E0(e, t, (n, s) => n.charCodeAt(0) === s.charCode), u8 = (e) => {
      const t = [
        ",",
        ".",
        ";",
        ":",
        "!",
        "?"
      ], n = [32], s = () => jT(rP(e), aP(e)), o = () => dP(e);
      e.on("keydown", (a) => {
        if (a.keyCode === 13 && !H.modifierPressed(a) && e.selection.isCollapsed()) {
          const i = s();
          (i.inlinePatterns.length > 0 || i.blockPatterns.length > 0 || o()) && a8(e, i) && a.preventDefault();
        }
      }, !0);
      const r = () => {
        if (e.selection.isCollapsed()) {
          const a = s();
          (a.inlinePatterns.length > 0 || o()) && i8(e, a);
        }
      };
      e.on("keyup", (a) => {
        l8(n, a) && r();
      }), e.on("keypress", (a) => {
        c8(t, a) && Zt.setEditorTimeout(e, r);
      });
    }, f8 = (e) => {
      u8(e);
    }, d8 = (e) => {
      const t = L.each, n = H.BACKSPACE, s = H.DELETE, o = e.dom, r = e.selection, a = e.parser, i = be.browser, l = i.isFirefox(), c = i.isChromium() || i.isSafari(), u = be.deviceType.isiPhone() || be.deviceType.isiPad(), f = be.os.isMacOS() || be.os.isiOS(), d = (G, Y) => {
        try {
          e.getDoc().execCommand(G, !1, String(Y));
        } catch {
        }
      }, p = (G) => G.isDefaultPrevented(), h = () => {
        const G = (I) => {
          const ee = o.create("body"), ue = I.cloneContents();
          return ee.appendChild(ue), r.serializer.serialize(ee, { format: "html" });
        }, Y = (I) => {
          const ee = G(I), ue = o.createRng();
          ue.selectNode(e.getBody());
          const ye = G(ue);
          return ee === ye;
        };
        e.on("keydown", (I) => {
          const ee = I.keyCode;
          if (!p(I) && (ee === s || ee === n) && e.selection.isEditable()) {
            const ue = e.selection.isCollapsed(), ye = e.getBody();
            if (ue && !Ue(C.fromDom(ye)) || !ue && !Y(e.selection.getRng()))
              return;
            I.preventDefault(), e.setContent(""), ye.firstChild && o.isBlock(ye.firstChild) ? e.selection.setCursorLocation(ye.firstChild, 0) : e.selection.setCursorLocation(ye, 0), e.nodeChanged();
          }
        });
      }, g = () => {
        e.shortcuts.add("meta+a", null, "SelectAll");
      }, b = () => {
        e.inline || o.bind(e.getDoc(), "mousedown mouseup", (G) => {
          let Y;
          if (G.target === e.getDoc().documentElement)
            if (Y = r.getRng(), e.getBody().focus(), G.type === "mousedown") {
              if (qt(Y.startContainer))
                return;
              r.placeCaretAt(G.clientX, G.clientY);
            } else
              r.setRng(Y);
        });
      }, v = () => {
        e.on("keydown", (G) => {
          if (!p(G) && G.keyCode === n) {
            if (!e.getBody().getElementsByTagName("hr").length)
              return;
            if (r.isCollapsed() && r.getRng().startOffset === 0) {
              const Y = r.getNode(), I = Y.previousSibling;
              if (Y.nodeName === "HR") {
                o.remove(Y), G.preventDefault();
                return;
              }
              I && I.nodeName && I.nodeName.toLowerCase() === "hr" && (o.remove(I), G.preventDefault());
            }
          }
        });
      }, y = () => {
        Range.prototype.getClientRects || e.on("mousedown", (G) => {
          if (!p(G) && G.target.nodeName === "HTML") {
            const Y = e.getBody();
            Y.blur(), Zt.setEditorTimeout(e, () => {
              Y.focus();
            });
          }
        });
      }, E = () => {
        const G = Mh(e);
        e.on("click", (Y) => {
          const I = Y.target;
          /^(IMG|HR)$/.test(I.nodeName) && o.isEditable(I) && (Y.preventDefault(), e.selection.select(I), e.nodeChanged()), I.nodeName === "A" && o.hasClass(I, G) && I.childNodes.length === 0 && o.isEditable(I.parentNode) && (Y.preventDefault(), r.select(I));
        });
      }, S = () => {
        const G = () => {
          const I = o.getAttribs(r.getStart().cloneNode(!1));
          return () => {
            const ee = r.getStart();
            ee !== e.getBody() && (o.setAttrib(ee, "style", null), t(I, (ue) => {
              ee.setAttributeNode(ue.cloneNode(!0));
            }));
          };
        }, Y = () => !r.isCollapsed() && o.getParent(r.getStart(), o.isBlock) !== o.getParent(r.getEnd(), o.isBlock);
        e.on("keypress", (I) => {
          let ee;
          return !p(I) && (I.keyCode === 8 || I.keyCode === 46) && Y() ? (ee = G(), e.getDoc().execCommand("delete", !1), ee(), I.preventDefault(), !1) : !0;
        }), o.bind(e.getDoc(), "cut", (I) => {
          if (!p(I) && Y()) {
            const ee = G();
            Zt.setEditorTimeout(e, () => {
              ee();
            });
          }
        });
      }, T = () => {
        e.on("keydown", (G) => {
          if (!p(G) && G.keyCode === n && r.isCollapsed() && r.getRng().startOffset === 0) {
            const Y = r.getNode().previousSibling;
            if (Y && Y.nodeName && Y.nodeName.toLowerCase() === "table")
              return G.preventDefault(), !1;
          }
          return !0;
        });
      }, O = () => {
        e.on("keydown", (G) => {
          if (p(G) || G.keyCode !== H.BACKSPACE)
            return;
          let Y = r.getRng();
          const I = Y.startContainer, ee = Y.startOffset, ue = o.getRoot();
          let ye = I;
          if (!(!Y.collapsed || ee !== 0)) {
            for (; ye.parentNode && ye.parentNode.firstChild === ye && ye.parentNode !== ue; )
              ye = ye.parentNode;
            ye.nodeName === "BLOCKQUOTE" && (e.formatter.toggle("blockquote", void 0, ye), Y = o.createRng(), Y.setStart(I, 0), Y.setEnd(I, 0), r.setRng(Y));
          }
        });
      }, U = () => {
        const G = () => {
          d("StyleWithCSS", !1), d("enableInlineTableEditing", !1), Ih(e) || d("enableObjectResizing", !1);
        };
        $h(e) || e.on("BeforeExecCommand mousedown", G);
      }, A = () => {
        const G = () => {
          t(o.select("a:not([data-mce-block])"), (Y) => {
            var I;
            let ee = Y.parentNode;
            const ue = o.getRoot();
            if ((ee == null ? void 0 : ee.lastChild) === Y) {
              for (; ee && !o.isBlock(ee); ) {
                if (((I = ee.parentNode) === null || I === void 0 ? void 0 : I.lastChild) !== ee || ee === ue)
                  return;
                ee = ee.parentNode;
              }
              o.add(ee, "br", { "data-mce-bogus": 1 });
            }
          });
        };
        e.on("SetContent ExecCommand", (Y) => {
          (Y.type === "setcontent" || Y.command === "mceInsertLink") && G();
        });
      }, _ = () => {
        e.on("init", () => {
          d("DefaultParagraphSeparator", gt(e));
        });
      }, R = (G) => {
        const Y = G.getBody(), I = G.selection.getRng();
        return I.startContainer === I.endContainer && I.startContainer === Y && I.startOffset === 0 && I.endOffset === Y.childNodes.length;
      }, z = () => {
        e.on("keyup focusin mouseup", (G) => {
          !H.modifierPressed(G) && !R(e) && r.normalize();
        }, !0);
      }, Z = () => {
        e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}");
      }, re = () => {
        e.inline || e.on("keydown", () => {
          document.activeElement === document.body && e.getWin().focus();
        });
      }, ie = () => {
        e.inline || (e.contentStyles.push("body {min-height: 150px}"), e.on("click", (G) => {
          let Y;
          G.target.nodeName === "HTML" && (Y = e.selection.getRng(), e.getBody().focus(), e.selection.setRng(Y), e.selection.normalize(), e.nodeChanged());
        }));
      }, Ce = () => {
        f && e.on("keydown", (G) => {
          H.metaKeyPressed(G) && !G.shiftKey && (G.keyCode === 37 || G.keyCode === 39) && (G.preventDefault(), e.selection.getSel().modify("move", G.keyCode === 37 ? "backward" : "forward", "lineboundary"));
        });
      }, we = () => {
        e.on("click", (G) => {
          let Y = G.target;
          do
            if (Y.tagName === "A") {
              G.preventDefault();
              return;
            }
          while (Y = Y.parentNode);
        }), e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}");
      }, Ie = () => {
        e.on("init", () => {
          e.dom.bind(e.getBody(), "submit", (G) => {
            G.preventDefault();
          });
        });
      }, nt = () => {
        a.addNodeFilter("br", (G) => {
          let Y = G.length;
          for (; Y--; )
            G[Y].attr("class") === "Apple-interchange-newline" && G[Y].remove();
        });
      }, Ve = ce, F = () => {
        if (!l || e.removed)
          return !1;
        const G = e.selection.getSel();
        return !G || !G.rangeCount || G.rangeCount === 0;
      }, K = () => {
        c && (b(), E(), Ie(), g(), u && (re(), ie(), we())), l && (y(), U(), Z(), Ce());
      }, ge = () => {
        e.on("drop", (G) => {
          var Y;
          const I = (Y = G.dataTransfer) === null || Y === void 0 ? void 0 : Y.getData("text/html");
          J(I) && /^<img[^>]*>$/.test(I) && e.dispatch("dragend", new window.DragEvent("dragend", G));
        });
      }, de = () => {
        O(), h(), be.windowsPhone || z(), c && (b(), E(), _(), Ie(), T(), nt(), u ? (re(), ie(), we()) : g()), l && (v(), y(), S(), U(), A(), Z(), Ce(), T(), ge());
      };
      return In(e) ? K() : de(), {
        refreshContentEditable: Ve,
        isHidden: F
      };
    }, Im = Ne.DOM, m8 = (e, t) => {
      const n = C.fromDom(e.getBody()), s = Fc(rs(n)), o = C.fromTag("style");
      ot(o, "type", "text/css"), We(o, C.fromText(t)), We(s, o), e.on("remove", () => {
        Pe(o);
      });
    }, g8 = (e) => e.inline ? e.getElement().nodeName.toLowerCase() : void 0, Lm = (e) => Er(e, (t) => lt(t) === !1), S0 = (e) => {
      const t = e.options.get, n = e.editorUpload.blobCache;
      return Lm({
        allow_conditional_comments: t("allow_conditional_comments"),
        allow_html_data_urls: t("allow_html_data_urls"),
        allow_svg_data_urls: t("allow_svg_data_urls"),
        allow_html_in_named_anchor: t("allow_html_in_named_anchor"),
        allow_script_urls: t("allow_script_urls"),
        allow_unsafe_link_target: t("allow_unsafe_link_target"),
        convert_unsafe_embeds: t("convert_unsafe_embeds"),
        convert_fonts_to_spans: t("convert_fonts_to_spans"),
        fix_list_elements: t("fix_list_elements"),
        font_size_legacy_values: t("font_size_legacy_values"),
        forced_root_block: t("forced_root_block"),
        forced_root_block_attrs: t("forced_root_block_attrs"),
        preserve_cdata: t("preserve_cdata"),
        inline_styles: t("inline_styles"),
        root_name: g8(e),
        sandbox_iframes: t("sandbox_iframes"),
        sanitize: t("xss_sanitization"),
        validate: !0,
        blob_cache: n,
        document: e.getDoc()
      });
    }, w0 = (e) => {
      const t = e.options.get;
      return Lm({
        custom_elements: t("custom_elements"),
        extended_valid_elements: t("extended_valid_elements"),
        invalid_elements: t("invalid_elements"),
        invalid_styles: t("invalid_styles"),
        schema: t("schema"),
        valid_children: t("valid_children"),
        valid_classes: t("valid_classes"),
        valid_elements: t("valid_elements"),
        valid_styles: t("valid_styles"),
        verify_html: t("verify_html"),
        padd_empty_block_inline_children: t("format_empty_lines")
      });
    }, p8 = (e) => {
      const t = e.options.get;
      return {
        ...S0(e),
        ...w0(e),
        ...Lm({
          remove_trailing_brs: t("remove_trailing_brs"),
          pad_empty_with_br: t("pad_empty_with_br"),
          url_converter: t("url_converter"),
          url_converter_scope: t("url_converter_scope"),
          element_format: t("element_format"),
          entities: t("entities"),
          entity_encoding: t("entity_encoding"),
          indent: t("indent"),
          indent_after: t("indent_after"),
          indent_before: t("indent_before")
        })
      };
    }, h8 = (e) => {
      const t = Xo(S0(e), e.schema);
      return t.addAttributeFilter("src,href,style,tabindex", (n, s) => {
        const o = e.dom, r = "data-mce-" + s;
        let a = n.length;
        for (; a--; ) {
          const i = n[a];
          let l = i.attr(s);
          if (l && !i.attr(r)) {
            if (l.indexOf("data:") === 0 || l.indexOf("blob:") === 0)
              continue;
            s === "style" ? (l = o.serializeStyle(o.parseStyle(l), i.name), l.length || (l = null), i.attr(r, l), i.attr(s, l)) : s === "tabindex" ? (i.attr(r, l), i.attr(s, null)) : i.attr(r, e.convertURL(l, s, i.name));
          }
        }
      }), t.addNodeFilter("script", (n) => {
        let s = n.length;
        for (; s--; ) {
          const o = n[s], r = o.attr("type") || "no/type";
          r.indexOf("mce-") !== 0 && o.attr("type", "mce-" + r);
        }
      }), cP(e) && t.addNodeFilter("#cdata", (n) => {
        var s;
        let o = n.length;
        for (; o--; ) {
          const r = n[o];
          r.type = 8, r.name = "#comment", r.value = "[CDATA[" + e.dom.encode((s = r.value) !== null && s !== void 0 ? s : "") + "]]";
        }
      }), t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", (n) => {
        let s = n.length;
        const o = e.schema.getNonEmptyElements();
        for (; s--; ) {
          const r = n[s];
          r.isEmpty(o) && r.getAll("br").length === 0 && r.append(new Et("br", 1));
        }
      }), t;
    }, b8 = (e) => {
      const t = jR(e);
      t && Zt.setEditorTimeout(e, () => {
        let n;
        t === !0 ? n = e : n = e.editorManager.get(t), n && !n.destroyed && (n.focus(), n.selection.scrollIntoView());
      }, 100);
    }, C8 = (e) => {
      const t = e.dom.getRoot();
      !e.inline && (!Ki(e) || e.selection.getStart(!0) === t) && pt(t).each((n) => {
        const s = n.getNode(), o = Zn(s) ? pt(s).getOr(n) : n;
        e.selection.setRng(o.toRange());
      });
    }, v8 = (e) => {
      e.bindPendingEventDelegates(), e.initialized = !0, HD(e), e.focus(!0), C8(e), e.nodeChanged({ initial: !0 });
      const t = WR(e);
      Se(t) && t.call(e, e), b8(e);
    }, $m = (e) => e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader, y8 = (e, t, n) => {
      const {
        pass: s,
        fail: o
      } = So(t, (i) => tinymce.Resource.has(Td(i))), a = [
        ...s.map((i) => {
          const l = tinymce.Resource.get(Td(i));
          return J(l) ? Promise.resolve($m(e).loadRawCss(i, l)) : Promise.resolve();
        }),
        $m(e).loadAll(o)
      ];
      return e.inline ? a : a.concat([e.ui.styleSheetLoader.loadAll(n)]);
    }, k0 = (e) => {
      const t = $m(e), n = Bh(e), s = e.contentCSS, o = () => {
        t.unloadAll(s), e.inline || e.ui.styleSheetLoader.unloadAll(n);
      }, r = () => {
        e.removed ? o() : e.on("remove", o);
      };
      if (e.contentStyles.length > 0) {
        let l = "";
        L.each(e.contentStyles, (c) => {
          l += c + `\r
`;
        }), e.dom.addStyle(l);
      }
      const a = Promise.all(y8(e, s, n)).then(r).catch(r), i = bR(e);
      return i && m8(e, i), a;
    }, E8 = (e) => {
      const t = e.getDoc(), n = e.getBody();
      UD(e), qR(e) || (t.body.spellcheck = !1, Im.setAttrib(n, "spellcheck", "false")), e.quirks = d8(e), zD(e);
      const s = CR(e);
      s !== void 0 && (n.dir = s);
      const o = KR(e);
      o && e.on("BeforeSetContent", (r) => {
        L.each(o, (a) => {
          r.content = r.content.replace(a, (i) => "<!--mce:protected " + escape(i) + "-->");
        });
      }), e.on("SetContent", () => {
        e.addVisual(e.getBody());
      }), e.on("compositionstart compositionend", (r) => {
        e.composing = r.type === "compositionstart";
      });
    }, S8 = (e) => {
      In(e) || e.load({
        initial: !0,
        format: "html"
      }), e.startContent = e.getContent({ format: "raw" });
    }, Fm = (e) => {
      e.removed !== !0 && (S8(e), v8(e));
    }, w8 = (e) => {
      let t = !1;
      const n = setTimeout(() => {
        t || e.setProgressState(!0);
      }, 500);
      return () => {
        clearTimeout(n), t = !0, e.setProgressState(!1);
      };
    }, _0 = (e) => {
      const t = e.getElement();
      let n = e.getDoc();
      e.inline && (Im.addClass(t, "mce-content-body"), e.contentDocument = n = document, e.contentWindow = window, e.bodyElement = t, e.contentAreaContainer = t);
      const s = e.getBody();
      s.disabled = !0, e.readonly = $h(e), e._editableRoot = LR(e), !e.readonly && e.hasEditableRoot() && (e.inline && Im.getStyle(s, "position", !0) === "static" && (s.style.position = "relative"), s.contentEditable = "true"), s.disabled = !1, e.editorUpload = iz(e), e.schema = us(w0(e)), e.dom = Ne(n, {
        keep_values: !0,
        url_converter: e.convertURL,
        url_converter_scope: e,
        update_styles: !0,
        root_element: e.inline ? e.getBody() : null,
        collect: e.inline,
        schema: e.schema,
        contentCssCors: mR(e),
        referrerPolicy: Ru(e),
        onSetAttrib: (a) => {
          e.dispatch("SetAttrib", a);
        },
        force_hex_color: vP(e)
      }), e.parser = h8(e), e.serializer = hE(p8(e), e), e.selection = pE(e.dom, e.getWin(), e.serializer, e), e.annotator = Bb(e), e.formatter = PE(e), e.undoManager = OE(e), e._nodeChangeDispatcher = new A3(e), e._selectionOverrides = W5(e), OW(e), GK(e), HW(e), In(e) || (t5(e), f8(e));
      const o = N3(e);
      RW(e, o), FW(e), Sz(e), jK(e);
      const r = uM(e);
      E8(e), r.fold(() => {
        const a = w8(e);
        k0(e).then(() => {
          Fm(e), a();
        });
      }, (a) => {
        e.setProgressState(!0), k0(e).then(() => {
          a().then((i) => {
            e.setProgressState(!1), Fm(e), uE(e);
          }, (i) => {
            e.notificationManager.open({
              type: "error",
              text: String(i)
            }), Fm(e), uE(e);
          });
        });
      });
    }, k8 = He, _8 = (e, t, n) => tN(e, t, k8, n), Mm = Ne.DOM, x8 = (e, t, n, s) => {
      const o = C.fromTag("iframe");
      return s.each((r) => ot(o, "tabindex", r)), Wn(o, n), Wn(o, {
        id: e + "_ifr",
        frameBorder: "0",
        allowTransparency: "true",
        title: t
      }), Ao(o, "tox-edit-area__iframe"), o;
    }, N8 = (e) => {
      let t = QT(e) + "<html><head>";
      Nh(e) !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
      const n = JT(e), s = eR(e), o = e.translate(zR(e));
      return Ah(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + Ah(e) + '" />'), t += `</head><body id="${n}" class="mce-content-body ${s}" data-id="${e.id}" aria-label="${o}"><br></body></html>`, t;
    }, A8 = (e, t) => {
      const n = e.translate("Rich Text Area"), s = Vn(C.fromDom(e.getElement()), "tabindex").bind(ui), o = x8(e.id, n, ZT(e), s).dom;
      o.onload = () => {
        o.onload = null, e.dispatch("load");
      }, e.contentAreaContainer = t.iframeContainer, e.iframeElement = o, e.iframeHTML = N8(e), Mm.add(t.iframeContainer, o);
    }, T8 = (e) => {
      const t = e.iframeElement, n = () => {
        e.contentDocument = t.contentDocument, _0(e);
      };
      if (fP(e) || be.browser.isFirefox()) {
        const s = e.getDoc();
        s.open(), s.write(e.iframeHTML), s.close(), n();
      } else {
        const s = _8(C.fromDom(t), "load", () => {
          s.unbind(), n();
        });
        t.srcdoc = e.iframeHTML;
      }
    }, R8 = (e, t) => {
      A8(e, t), t.editorContainer && (t.editorContainer.style.display = e.orgDisplay, e.hidden = Mm.isHidden(t.editorContainer)), e.getElement().style.display = "none", Mm.setAttrib(e.id, "aria-hidden", "true"), e.getElement().style.visibility = e.orgVisibility, T8(e);
    }, x0 = Ne.DOM, P8 = (e, t, n) => {
      const s = Qo.get(n), o = Qo.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
      if (n = L.trim(n), s && L.inArray(t, n) === -1) {
        if (e.plugins[n])
          return;
        try {
          const r = s(e, o) || {};
          e.plugins[n] = r, Se(r.init) && (r.init(e, o), t.push(n));
        } catch (r) {
          jU(e, n, r);
        }
      }
    }, D8 = (e) => e.replace(/^\-/, ""), O8 = (e) => {
      const t = [];
      P(Mi(e), (n) => {
        P8(e, t, D8(n));
      });
    }, B8 = (e) => {
      const t = L.trim(Ph(e)), n = e.ui.registry.getAll().icons, s = {
        ...Sl.get("default").icons,
        ...Sl.get(t).icons
      };
      Ae(s, (o, r) => {
        oe(n, r) || e.ui.registry.addIcon(r, o);
      });
    }, I8 = (e) => {
      const t = Mo(e);
      if (J(t)) {
        const n = fo.get(t);
        e.theme = n(e, fo.urls[t]) || {}, Se(e.theme.init) && e.theme.init(e, fo.urls[t] || e.documentBaseUrl.replace(/\/$/, ""));
      } else
        e.theme = {};
    }, L8 = (e) => {
      const t = Pu(e), n = Zo.get(t);
      e.model = n(e, Zo.urls[t]);
    }, $8 = (e) => {
      const t = e.theme.renderUI;
      return t ? t() : A0(e);
    }, F8 = (e) => {
      const t = e.getElement(), s = Mo(e)(e, t);
      return s.editorContainer.nodeType && (s.editorContainer.id = s.editorContainer.id || e.id + "_parent"), s.iframeContainer && s.iframeContainer.nodeType && (s.iframeContainer.id = s.iframeContainer.id || e.id + "_iframecontainer"), s.height = s.iframeHeight ? s.iframeHeight : t.offsetHeight, s;
    }, N0 = (e, t) => ({
      editorContainer: e,
      iframeContainer: t,
      api: {}
    }), M8 = (e) => {
      const t = x0.create("div");
      return x0.insertAfter(t, e), N0(t, t);
    }, A0 = (e) => {
      const t = e.getElement();
      return e.inline ? N0(null) : M8(t);
    }, U8 = (e) => {
      const t = e.getElement();
      return e.orgDisplay = t.style.display, J(Mo(e)) ? $8(e) : Se(Mo(e)) ? F8(e) : A0(e);
    }, z8 = (e, t) => {
      const n = {
        show: m.from(t.show).getOr(ce),
        hide: m.from(t.hide).getOr(ce),
        isEnabled: m.from(t.isEnabled).getOr(He),
        setEnabled: (s) => {
          e.mode.isReadOnly() || m.from(t.setEnabled).each((o) => o(s));
        }
      };
      e.ui = {
        ...e.ui,
        ...n
      };
    }, H8 = async (e) => {
      e.dispatch("ScriptsLoaded"), B8(e), I8(e), L8(e), O8(e);
      const t = await U8(e);
      z8(e, m.from(t.api).getOr({})), e.editorContainer = t.editorContainer, XU(e), e.inline ? _0(e) : R8(e, {
        editorContainer: t.editorContainer,
        iframeContainer: t.iframeContainer
      });
    }, go = Ne.DOM, T0 = (e) => e.charAt(0) === "-", W8 = (e, t) => {
      const n = Dh(t), s = gR(t);
      if (!bn.hasCode(n) && n !== "en") {
        const o = wn(s) ? s : `${t.editorManager.baseURL}/langs/${n}.js`;
        e.add(o).catch(() => {
          HU(t, o, n);
        });
      }
    }, V8 = (e, t) => {
      const n = Mo(e);
      if (J(n) && !T0(n) && !oe(fo.urls, n)) {
        const s = wR(e), o = s ? e.documentBaseURI.toAbsolute(s) : `themes/${n}/theme${t}.js`;
        fo.load(n, o).catch(() => {
          WU(e, o, n);
        });
      }
    }, j8 = (e, t) => {
      const n = Pu(e);
      if (n !== "plugin" && !oe(Zo.urls, n)) {
        const s = kR(e), o = J(s) ? e.documentBaseURI.toAbsolute(s) : `models/${n}/model${t}.js`;
        Zo.load(n, o).catch(() => {
          VU(e, o, n);
        });
      }
    }, q8 = (e) => m.from(lR(e)).filter(wn).map((t) => ({
      url: t,
      name: m.none()
    })), R0 = (e, t, n) => m.from(t).filter((s) => wn(s) && !Sl.has(s)).map((s) => ({
      url: `${e.editorManager.baseURL}/icons/${s}/icons${n}.js`,
      name: m.some(s)
    })), K8 = (e, t, n) => {
      const s = R0(t, "default", n), o = q8(t).orThunk(() => R0(t, Ph(t), ""));
      P(fx([
        s,
        o
      ]), (r) => {
        e.add(r.url).catch(() => {
          zU(t, r.url, r.name.getOrUndefined());
        });
      });
    }, G8 = (e, t) => {
      const n = (s, o) => {
        Qo.load(s, o).catch(() => {
          UU(e, o, s);
        });
      };
      Ae($R(e), (s, o) => {
        n(o, s), e.options.set("plugins", Mi(e).concat(o));
      }), P(Mi(e), (s) => {
        s = L.trim(s), s && !Qo.urls[s] && !T0(s) && n(s, `plugins/${s}/plugin${t}.js`);
      });
    }, Y8 = (e) => {
      const t = Mo(e);
      return !J(t) || M(fo.get(t));
    }, X8 = (e) => {
      const t = Pu(e);
      return M(Zo.get(t));
    }, Z8 = (e, t) => {
      const n = Qn.ScriptLoader, s = () => {
        !e.removed && Y8(e) && X8(e) && H8(e);
      };
      V8(e, t), j8(e, t), W8(n, e), K8(n, e, t), G8(e, t), n.loadQueue().then(s, s);
    }, Q8 = (e, t) => wp.forElement(e, {
      contentCssCors: Fh(t),
      referrerPolicy: Ru(t)
    }), J8 = (e) => {
      const t = e.id;
      bn.setCode(Dh(e));
      const n = () => {
        go.unbind(window, "ready", n), e.render();
      };
      if (!Ks.Event.domLoaded) {
        go.bind(window, "ready", n);
        return;
      }
      if (!e.getElement())
        return;
      const s = C.fromDom(e.getElement()), o = Rg(s);
      e.on("remove", () => {
        sg(s.dom.attributes, (a) => rt(s, a.name)), Wn(s, o);
      }), e.ui.styleSheetLoader = Q8(s, e), Du(e) ? e.inline = !0 : (e.orgVisibility = e.getElement().style.visibility, e.getElement().style.visibility = "hidden");
      const r = e.getElement().form || go.getParent(t, "form");
      r && (e.formElement = r, RR(e) && !Vc(e.getElement()) && (go.insertAfter(go.create("input", {
        type: "hidden",
        name: t
      }), t), e.hasHiddenInput = !0), e.formEventDelegate = (a) => {
        e.dispatch(a.type, a);
      }, go.bind(r, "submit reset", e.formEventDelegate), e.on("reset", () => {
        e.resetContent();
      }), PR(e) && !r.submit.nodeType && !r.submit.length && !r._mceOldSubmit && (r._mceOldSubmit = r.submit, r.submit = () => (e.editorManager.triggerSave(), e.setDirty(!1), r._mceOldSubmit(r)))), e.windowManager = wE(e), e.notificationManager = SE(e), pP(e) && e.on("GetContent", (a) => {
        a.save && (a.content = go.encode(a.content));
      }), DR(e) && e.on("submit", () => {
        e.initialized && e.save();
      }), OR(e) && (e._beforeUnload = () => {
        e.initialized && !e.destroyed && !e.isHidden() && e.save({
          format: "raw",
          no_events: !0,
          set_dirty: !1
        });
      }, e.editorManager.on("BeforeUnload", e._beforeUnload)), e.editorManager.add(e), Z8(e, e.suffix);
    }, e4 = (e, t) => {
      e._editableRoot !== t && (e._editableRoot = t, e.readonly || (e.getBody().contentEditable = String(e.hasEditableRoot()), e.nodeChanged()), ZD(e, t));
    }, t4 = (e) => e._editableRoot, n4 = (e, t) => ({
      sections: V(e),
      options: V(t)
    }), P0 = kn().deviceType, D0 = P0.isPhone(), s4 = P0.isTablet(), qa = (e) => {
      if (qe(e))
        return [];
      {
        const t = Ge(e) ? e : e.split(/[ ,]/), n = he(t, _o);
        return se(n, wn);
      }
    }, o4 = (e, t) => {
      const n = w_(t, (s, o) => ke(e, o));
      return n4(n.t, n.f);
    }, r4 = (e, t, n = {}) => {
      const s = e.sections(), o = Re(s, t).getOr({});
      return L.extend({}, n, o);
    }, Um = (e, t) => oe(e.sections(), t), a4 = (e, t) => Um(e, t) ? e.sections()[t] : {}, i4 = (e, t) => ({
      ...{
        table_grid: !1,
        object_resizing: !1,
        resize: !1,
        toolbar_mode: Re(e, "toolbar_mode").getOr("scrolling"),
        toolbar_sticky: !1
      },
      ...t ? { menubar: !1 } : {}
    }), l4 = (e, t) => {
      var n;
      const s = (n = t.external_plugins) !== null && n !== void 0 ? n : {};
      return e && e.external_plugins ? L.extend({}, e.external_plugins, s) : s;
    }, c4 = (e, t) => [
      ...qa(e),
      ...qa(t)
    ], u4 = (e, t, n, s) => e && Um(t, "mobile") ? s : n, f4 = (e, t, n, s) => {
      const o = qa(n.forced_plugins), r = qa(s.plugins), a = a4(t, "mobile"), i = a.plugins ? qa(a.plugins) : r, l = u4(e, t, r, i), c = c4(o, l);
      return L.extend(s, {
        forced_plugins: o,
        plugins: c
      });
    }, d4 = (e, t) => e && Um(t, "mobile"), m4 = (e, t, n, s, o) => {
      var r;
      const a = e ? { mobile: i4((r = o.mobile) !== null && r !== void 0 ? r : {}, t) } : {}, i = o4(["mobile"], Ll(a, o)), l = L.extend(n, s, i.options(), d4(e, i) ? r4(i, "mobile") : {}, { external_plugins: l4(s, i.options()) });
      return f4(e, i, s, l);
    }, g4 = (e, t) => m4(D0 || s4, D0, t, e, t), p4 = (e, t) => IM(e, t), h4 = (e) => {
      const t = (s, o) => {
        e.formatter.toggle(s, o), e.nodeChanged();
      }, n = (s) => () => {
        P("left,center,right,justify".split(","), (o) => {
          s !== o && e.formatter.remove("align" + o);
        }), s !== "none" && t("align" + s);
      };
      e.editorCommands.addCommands({
        JustifyLeft: n("left"),
        JustifyCenter: n("center"),
        JustifyRight: n("right"),
        JustifyFull: n("justify"),
        JustifyNone: n("none")
      });
    }, b4 = (e) => {
      const t = (n) => () => {
        const s = e.selection, o = s.isCollapsed() ? [e.dom.getParent(s.getNode(), e.dom.isBlock)] : s.getSelectedBlocks();
        return Fe(o, (r) => M(e.formatter.matchNode(r, n)));
      };
      e.editorCommands.addCommands({
        JustifyLeft: t("alignleft"),
        JustifyCenter: t("aligncenter"),
        JustifyRight: t("alignright"),
        JustifyFull: t("alignjustify")
      }, "state");
    }, C4 = (e) => {
      h4(e), b4(e);
    }, v4 = (e) => {
      e.editorCommands.addCommands({
        "Cut,Copy,Paste": (t) => {
          const n = e.getDoc();
          let s;
          try {
            n.execCommand(t);
          } catch {
            s = !0;
          }
          if (t === "paste" && !n.queryCommandEnabled(t) && (s = !0), s || !n.queryCommandSupported(t)) {
            let o = e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
            (be.os.isMacOS() || be.os.isiOS()) && (o = o.replace(/Ctrl\+/g, "⌘+")), e.notificationManager.open({
              text: o,
              type: "error"
            });
          }
        }
      });
    }, y4 = (e, t, n, s) => {
      const o = C.fromDom(e.getRoot());
      return ba(o, N.fromRangeStart(t), s) ? n = n.replace(/^ /, "&nbsp;") : n = n.replace(/^&nbsp;/, " "), Ca(o, N.fromRangeEnd(t), s) ? n = n.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : n = n.replace(/&nbsp;(<br( \/)?>)?$/, " "), n;
    }, E4 = (e) => {
      if (typeof e != "string") {
        const t = L.extend({
          paste: e.paste,
          data: { paste: e.paste }
        }, e);
        return {
          content: e.content,
          details: t
        };
      }
      return {
        content: e,
        details: {}
      };
    }, S4 = (e, t) => {
      const n = e.selection, s = e.dom;
      return /^ | $/.test(t) ? y4(s, n.getRng(), t, e.schema) : t;
    }, oc = (e, t) => {
      if (e.selection.isEditable()) {
        const { content: n, details: s } = E4(t);
        vd(e, {
          ...s,
          content: S4(e, n),
          format: "html",
          set: !1,
          selection: !0
        }).each((o) => {
          const r = OM(e, o.content, s);
          yd(e, r, o), e.addVisual();
        });
      }
    }, w4 = (e) => {
      e.editorCommands.addCommands({
        mceCleanup: () => {
          const t = e.selection.getBookmark();
          e.setContent(e.getContent()), e.selection.moveToBookmark(t);
        },
        insertImage: (t, n, s) => {
          oc(e, e.dom.createHTML("img", { src: s }));
        },
        insertHorizontalRule: () => {
          e.execCommand("mceInsertContent", !1, "<hr>");
        },
        insertText: (t, n, s) => {
          oc(e, e.dom.encode(s));
        },
        insertHTML: (t, n, s) => {
          oc(e, s);
        },
        mceInsertContent: (t, n, s) => {
          oc(e, s);
        },
        mceSetContent: (t, n, s) => {
          e.setContent(s);
        },
        mceReplaceContent: (t, n, s) => {
          e.execCommand("mceInsertContent", !1, s.replace(/\{\$selection\}/g, e.selection.getContent({ format: "text" })));
        },
        mceNewDocument: () => {
          e.setContent(ZR(e));
        }
      });
    }, k4 = {
      "font-size": "size",
      "font-family": "face"
    }, _4 = mi("font"), x4 = (e, t, n) => {
      const s = (r) => hi(r, e).orThunk(() => _4(r) ? Re(k4, e).bind((a) => Vn(r, a)) : m.none()), o = (r) => ve(C.fromDom(t), r);
      return Zf(C.fromDom(n), (r) => s(r), o);
    }, N4 = (e) => e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ","), A4 = (e, t) => m.from(Ne.DOM.getStyle(t, e, !0)), O0 = (e) => (t, n) => m.from(n).map(C.fromDom).filter(Mt).bind((s) => x4(e, t, s.dom).or(A4(e, s.dom))).getOr(""), T4 = O0("font-size"), R4 = Sn(N4, O0("font-family")), P4 = (e) => pt(e.getBody()).bind((t) => {
      const n = t.container();
      return m.from(B(n) ? n.parentNode : n);
    }), D4 = (e) => m.from(e.selection.getRng()).bind((t) => {
      const n = e.getBody();
      return t.startContainer === n && t.startOffset === 0 ? m.none() : m.from(e.selection.getStart(!0));
    }), O4 = (e, t) => D4(e).orThunk(j(P4, e)).map(C.fromDom).filter(Mt).bind(t), zm = (e, t) => O4(e, Jm(m.some, t)), B0 = (e, t) => {
      if (/^[0-9.]+$/.test(t)) {
        const n = parseInt(t, 10);
        if (n >= 1 && n <= 7) {
          const s = mP(e), o = gP(e);
          return o.length > 0 ? o[n - 1] || t : s[n - 1] || t;
        } else
          return t;
      } else
        return t;
    }, B4 = (e) => {
      const t = e.split(/\s*,\s*/);
      return he(t, (n) => n.indexOf(" ") !== -1 && !(st(n, '"') || st(n, "'")) ? `'${n}'` : n).join(",");
    }, I4 = (e, t) => {
      const n = B0(e, t);
      e.formatter.toggle("fontname", { value: B4(n) }), e.nodeChanged();
    }, L4 = (e) => zm(e, (t) => R4(e.getBody(), t.dom)).getOr(""), $4 = (e, t) => {
      e.formatter.toggle("fontsize", { value: B0(e, t) }), e.nodeChanged();
    }, F4 = (e) => zm(e, (t) => T4(e.getBody(), t.dom)).getOr(""), M4 = (e) => zm(e, (t) => {
      const n = C.fromDom(e.getBody()), s = Zf(t, (r) => hi(r, "line-height"), j(ve, n)), o = () => {
        const r = parseFloat(Nn(t, "line-height")), a = parseFloat(Nn(t, "font-size"));
        return String(r / a);
      };
      return s.getOrThunk(o);
    }).getOr(""), U4 = (e, t) => {
      e.formatter.toggle("lineheight", { value: String(t) }), e.nodeChanged();
    }, z4 = (e) => {
      const t = (n, s) => {
        e.formatter.toggle(n, s), e.nodeChanged();
      };
      e.editorCommands.addCommands({
        "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": (n) => {
          t(n);
        },
        "ForeColor,HiliteColor": (n, s, o) => {
          t(n, { value: o });
        },
        BackColor: (n, s, o) => {
          t("hilitecolor", { value: o });
        },
        FontName: (n, s, o) => {
          I4(e, o);
        },
        FontSize: (n, s, o) => {
          $4(e, o);
        },
        LineHeight: (n, s, o) => {
          U4(e, o);
        },
        Lang: (n, s, o) => {
          var r;
          t(n, {
            value: o.code,
            customValue: (r = o.customCode) !== null && r !== void 0 ? r : null
          });
        },
        RemoveFormat: (n) => {
          e.formatter.remove(n);
        },
        mceBlockQuote: () => {
          t("blockquote");
        },
        FormatBlock: (n, s, o) => {
          t(J(o) ? o : "p");
        },
        mceToggleFormat: (n, s, o) => {
          t(o);
        }
      });
    }, H4 = (e) => {
      const t = (n) => e.formatter.match(n);
      e.editorCommands.addCommands({
        "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": (n) => t(n),
        mceBlockQuote: () => t("blockquote")
      }, "state"), e.editorCommands.addQueryValueHandler("FontName", () => L4(e)), e.editorCommands.addQueryValueHandler("FontSize", () => F4(e)), e.editorCommands.addQueryValueHandler("LineHeight", () => M4(e));
    }, W4 = (e) => {
      z4(e), H4(e);
    }, V4 = (e) => {
      e.editorCommands.addCommands({
        mceAddUndoLevel: () => {
          e.undoManager.add();
        },
        mceEndUndoLevel: () => {
          e.undoManager.add();
        },
        Undo: () => {
          e.undoManager.undo();
        },
        Redo: () => {
          e.undoManager.redo();
        }
      });
    }, j4 = (e) => {
      e.editorCommands.addCommands({
        Indent: () => {
          NW(e);
        },
        Outdent: () => {
          FS(e);
        }
      }), e.editorCommands.addCommands({ Outdent: () => BS(e) }, "state");
    }, q4 = (e) => {
      const t = (n, s, o) => {
        const r = J(o) ? { href: o } : o, a = e.dom.getParent(e.selection.getNode(), "a");
        vt(r) && J(r.href) && (r.href = r.href.replace(/ /g, "%20"), (!a || !r.href) && e.formatter.remove("link"), r.href && e.formatter.apply("link", r, a));
      };
      e.editorCommands.addCommands({
        unlink: () => {
          if (e.selection.isEditable()) {
            if (e.selection.isCollapsed()) {
              const n = e.dom.getParent(e.selection.getStart(), "a");
              n && e.dom.remove(n, !0);
              return;
            }
            e.formatter.remove("link");
          }
        },
        mceInsertLink: t,
        createLink: t
      });
    }, K4 = (e) => {
      e.editorCommands.addCommands({
        "InsertUnorderedList,InsertOrderedList": (t) => {
          e.getDoc().execCommand(t);
          const n = e.dom.getParent(e.selection.getNode(), "ol,ul");
          if (n) {
            const s = n.parentNode;
            if (s && /^(H[1-6]|P|ADDRESS|PRE)$/.test(s.nodeName)) {
              const o = e.selection.getBookmark();
              e.dom.split(s, n), e.selection.moveToBookmark(o);
            }
          }
        }
      });
    }, G4 = (e) => {
      e.editorCommands.addCommands({
        "InsertUnorderedList,InsertOrderedList": (t) => {
          const n = e.dom.getParent(e.selection.getNode(), "ul,ol");
          return n && (t === "insertunorderedlist" && n.tagName === "UL" || t === "insertorderedlist" && n.tagName === "OL");
        }
      }, "state");
    }, Y4 = (e) => {
      K4(e), G4(e);
    }, X4 = (e, t, n, s) => {
      const o = e.dom, r = (i) => o.isBlock(i) && i.parentElement === n, a = r(t) ? t : o.getParent(s, r, n);
      return m.from(a).map(C.fromDom);
    }, I0 = (e, t) => {
      const n = e.dom, s = e.selection.getRng(), o = t ? e.selection.getStart() : e.selection.getEnd(), r = t ? s.startContainer : s.endContainer, a = za(n, r);
      if (!a || !a.isContentEditable)
        return;
      const i = t ? Ot : Gn, l = gt(e);
      X4(e, o, a, r).each((c) => {
        const u = ek(e, r, c.dom, a, !1, l);
        i(c, C.fromDom(u)), e.selection.setCursorLocation(u, 0), e.dispatch("NewBlock", { newBlock: u }), Ua(e, "insertParagraph");
      });
    }, Z4 = (e) => I0(e, !0), Q4 = (e) => I0(e, !1), J4 = (e) => {
      e.editorCommands.addCommands({
        InsertNewBlockBefore: () => {
          Z4(e);
        },
        InsertNewBlockAfter: () => {
          Q4(e);
        }
      });
    }, e6 = (e) => {
      e.editorCommands.addCommands({
        insertParagraph: () => {
          ql(ok, e);
        },
        mceInsertNewLine: (t, n, s) => {
          fk(e, s);
        },
        InsertLineBreak: (t, n, s) => {
          ql(ik, e);
        }
      });
    }, t6 = (e) => {
      e.editorCommands.addCommands({
        mceSelectNodeDepth: (t, n, s) => {
          let o = 0;
          e.dom.getParent(e.selection.getNode(), (r) => q(r) && o++ === s ? (e.selection.select(r), !1) : !0, e.getBody());
        },
        mceSelectNode: (t, n, s) => {
          e.selection.select(s);
        },
        selectAll: () => {
          const t = e.dom.getParent(e.selection.getStart(), rn);
          if (t) {
            const n = e.dom.createRng();
            n.selectNodeContents(t), e.selection.setRng(n);
          }
        }
      });
    }, n6 = (e) => {
      e.editorCommands.addCommands({
        mceRemoveNode: (t, n, s) => {
          const o = s ?? e.selection.getNode();
          if (o !== e.getBody()) {
            const r = e.selection.getBookmark();
            e.dom.remove(o, !0), e.selection.moveToBookmark(r);
          }
        },
        mcePrint: () => {
          e.getWin().print();
        },
        mceFocus: (t, n, s) => {
          EB(e, s === !0);
        },
        mceToggleVisualAid: () => {
          e.hasVisual = !e.hasVisual, e.addVisual();
        }
      });
    }, s6 = (e) => {
      C4(e), v4(e), V4(e), t6(e), w4(e), q4(e), j4(e), J4(e), e6(e), Y4(e), W4(e), n6(e);
    }, o6 = ["toggleview"], L0 = (e) => ke(o6, e.toLowerCase());
    class $0 {
      constructor(t) {
        this.commands = {
          state: {},
          exec: {},
          value: {}
        }, this.editor = t;
      }
      execCommand(t, n = !1, s, o) {
        const r = this.editor, a = t.toLowerCase(), i = o == null ? void 0 : o.skip_focus;
        if (r.removed || (a !== "mcefocus" && (!/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(a) && !i ? r.focus() : tB(r)), r.dispatch("BeforeExecCommand", {
          command: t,
          ui: n,
          value: s
        }).isDefaultPrevented()))
          return !1;
        const c = this.commands.exec[a];
        return Se(c) ? (c(a, n, s), r.dispatch("ExecCommand", {
          command: t,
          ui: n,
          value: s
        }), !0) : !1;
      }
      queryCommandState(t) {
        if (!L0(t) && this.editor.quirks.isHidden() || this.editor.removed)
          return !1;
        const n = t.toLowerCase(), s = this.commands.state[n];
        return Se(s) ? s(n) : !1;
      }
      queryCommandValue(t) {
        if (!L0(t) && this.editor.quirks.isHidden() || this.editor.removed)
          return "";
        const n = t.toLowerCase(), s = this.commands.value[n];
        return Se(s) ? s(n) : "";
      }
      addCommands(t, n = "exec") {
        const s = this.commands;
        Ae(t, (o, r) => {
          P(r.toLowerCase().split(","), (a) => {
            s[n][a] = o;
          });
        });
      }
      addCommand(t, n, s) {
        const o = t.toLowerCase();
        this.commands.exec[o] = (r, a, i) => n.call(s ?? this.editor, a, i);
      }
      queryCommandSupported(t) {
        const n = t.toLowerCase();
        return !!this.commands.exec[n];
      }
      addQueryStateHandler(t, n, s) {
        this.commands.state[t.toLowerCase()] = () => n.call(s ?? this.editor);
      }
      addQueryValueHandler(t, n, s) {
        this.commands.value[t.toLowerCase()] = () => n.call(s ?? this.editor);
      }
    }
    const po = "data-mce-contenteditable", r6 = (e, t, n) => {
      Oc(e, t) && !n ? Ar(e, t) : n && Ao(e, t);
    }, Hm = (e, t, n) => {
      try {
        e.getDoc().execCommand(t, !1, String(n));
      } catch {
      }
    }, rc = (e, t) => {
      e.dom.contentEditable = t ? "true" : "false";
    }, a6 = (e) => {
      P(mt(e, '*[contenteditable="true"]'), (t) => {
        ot(t, po, "true"), rc(t, !1);
      });
    }, i6 = (e) => {
      P(mt(e, `*[${po}="true"]`), (t) => {
        rt(t, po), rc(t, !0);
      });
    }, l6 = (e) => {
      m.from(e.selection.getNode()).each((t) => {
        t.removeAttribute("data-mce-selected");
      });
    }, c6 = (e) => {
      e.selection.setRng(e.selection.getRng());
    }, u6 = (e, t) => {
      const n = C.fromDom(e.getBody());
      r6(n, "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), l6(e), e.readonly = !0, rc(n, !1), a6(n)) : (e.readonly = !1, e.hasEditableRoot() && rc(n, !0), i6(n), Hm(e, "StyleWithCSS", !1), Hm(e, "enableInlineTableEditing", !1), Hm(e, "enableObjectResizing", !1), gC(e) && e.focus(), c6(e), e.nodeChanged());
    }, ho = (e) => e.readonly, F0 = (e) => {
      e.parser.addAttributeFilter("contenteditable", (t) => {
        ho(e) && P(t, (n) => {
          n.attr(po, n.attr("contenteditable")), n.attr("contenteditable", "false");
        });
      }), e.serializer.addAttributeFilter(po, (t) => {
        ho(e) && P(t, (n) => {
          n.attr("contenteditable", n.attr(po));
        });
      }), e.serializer.addTempAttr(po);
    }, f6 = (e) => {
      e.serializer ? F0(e) : e.on("PreInit", () => {
        F0(e);
      });
    }, d6 = (e) => e.type === "click", m6 = ["copy"], g6 = (e) => ke(m6, e.type), p6 = (e, t) => $s(t, "a", (s) => ve(s, C.fromDom(e.getBody()))).bind((s) => Vn(s, "href")), h6 = (e, t) => {
      if (d6(t) && !H.metaKeyPressed(t)) {
        const n = C.fromDom(t.target);
        p6(e, n).each((s) => {
          if (t.preventDefault(), /^#/.test(s)) {
            const o = e.dom.select(`${s},[name="${mg(s, "#")}"]`);
            o.length && e.selection.scrollIntoView(o[0], !0);
          } else
            window.open(s, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes");
        });
      } else g6(t) && e.dispatch(t.type, t);
    }, b6 = (e) => {
      e.on("ShowCaret", (t) => {
        ho(e) && t.preventDefault();
      }), e.on("ObjectSelected", (t) => {
        ho(e) && t.preventDefault();
      });
    }, C6 = L.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " ");
    class Wm {
      static isNative(t) {
        return !!C6[t.toLowerCase()];
      }
      constructor(t) {
        this.bindings = {}, this.settings = t || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || Le;
      }
      fire(t, n) {
        return this.dispatch(t, n);
      }
      dispatch(t, n) {
        const s = t.toLowerCase(), o = gu(s, n ?? {}, this.scope);
        this.settings.beforeFire && this.settings.beforeFire(o);
        const r = this.bindings[s];
        if (r)
          for (let a = 0, i = r.length; a < i; a++) {
            const l = r[a];
            if (!l.removed) {
              if (l.once && this.off(s, l.func), o.isImmediatePropagationStopped())
                return o;
              if (l.func.call(this.scope, o) === !1)
                return o.preventDefault(), o;
            }
          }
        return o;
      }
      on(t, n, s, o) {
        if (n === !1 && (n = Le), n) {
          const r = {
            func: n,
            removed: !1
          };
          o && L.extend(r, o);
          const a = t.toLowerCase().split(" ");
          let i = a.length;
          for (; i--; ) {
            const l = a[i];
            let c = this.bindings[l];
            c || (c = [], this.toggleEvent(l, !0)), s ? c = [
              r,
              ...c
            ] : c = [
              ...c,
              r
            ], this.bindings[l] = c;
          }
        }
        return this;
      }
      off(t, n) {
        if (t) {
          const s = t.toLowerCase().split(" ");
          let o = s.length;
          for (; o--; ) {
            const r = s[o];
            let a = this.bindings[r];
            if (!r)
              return Ae(this.bindings, (i, l) => {
                this.toggleEvent(l, !1), delete this.bindings[l];
              }), this;
            if (a) {
              if (!n)
                a.length = 0;
              else {
                const i = So(a, (l) => l.func === n);
                a = i.fail, this.bindings[r] = a, P(i.pass, (l) => {
                  l.removed = !0;
                });
              }
              a.length || (this.toggleEvent(t, !1), delete this.bindings[r]);
            }
          }
        } else
          Ae(this.bindings, (s, o) => {
            this.toggleEvent(o, !1);
          }), this.bindings = {};
        return this;
      }
      once(t, n, s) {
        return this.on(t, n, s, { once: !0 });
      }
      has(t) {
        t = t.toLowerCase();
        const n = this.bindings[t];
        return !(!n || n.length === 0);
      }
    }
    const Ka = (e) => (e._eventDispatcher || (e._eventDispatcher = new Wm({
      scope: e,
      toggleEvent: (t, n) => {
        Wm.isNative(t) && e.toggleNativeEvent && e.toggleNativeEvent(t, n);
      }
    })), e._eventDispatcher), Vm = {
      fire(e, t, n) {
        return this.dispatch(e, t, n);
      },
      dispatch(e, t, n) {
        const s = this;
        if (s.removed && e !== "remove" && e !== "detach")
          return gu(e.toLowerCase(), t ?? {}, s);
        const o = Ka(s).dispatch(e, t);
        if (n !== !1 && s.parent) {
          let r = s.parent();
          for (; r && !o.isPropagationStopped(); )
            r.dispatch(e, o, !1), r = r.parent ? r.parent() : void 0;
        }
        return o;
      },
      on(e, t, n) {
        return Ka(this).on(e, t, n);
      },
      off(e, t) {
        return Ka(this).off(e, t);
      },
      once(e, t) {
        return Ka(this).once(e, t);
      },
      hasEventListeners(e) {
        return Ka(this).has(e);
      }
    }, ac = Ne.DOM;
    let bo;
    const ic = (e, t) => {
      if (t === "selectionchange")
        return e.getDoc();
      if (!e.inline && /^(?:mouse|touch|click|contextmenu|drop|dragover|dragend)/.test(t))
        return e.getDoc().documentElement;
      const n = Lh(e);
      return n ? (e.eventRoot || (e.eventRoot = ac.select(n)[0]), e.eventRoot) : e.getBody();
    }, v6 = (e) => !e.hidden && !ho(e), M0 = (e, t, n) => {
      v6(e) ? e.dispatch(t, n) : ho(e) && h6(e, n);
    }, U0 = (e, t) => {
      if (e.delegates || (e.delegates = {}), e.delegates[t] || e.removed)
        return;
      const n = ic(e, t);
      if (Lh(e)) {
        if (bo || (bo = {}, e.editorManager.on("removeEditor", () => {
          e.editorManager.activeEditor || bo && (Ae(bo, (o, r) => {
            e.dom.unbind(ic(e, r));
          }), bo = null);
        })), bo[t])
          return;
        const s = (o) => {
          const r = o.target, a = e.editorManager.get();
          let i = a.length;
          for (; i--; ) {
            const l = a[i].getBody();
            (l === r || ac.isChildOf(r, l)) && M0(a[i], t, o);
          }
        };
        bo[t] = s, ac.bind(n, t, s);
      } else {
        const s = (o) => {
          M0(e, t, o);
        };
        ac.bind(n, t, s), e.delegates[t] = s;
      }
    }, z0 = {
      ...Vm,
      bindPendingEventDelegates() {
        const e = this;
        L.each(e._pendingNativeEvents, (t) => {
          U0(e, t);
        });
      },
      toggleNativeEvent(e, t) {
        const n = this;
        e === "focus" || e === "blur" || n.removed || (t ? n.initialized ? U0(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && n.delegates && (n.dom.unbind(ic(n, e), e, n.delegates[e]), delete n.delegates[e]));
      },
      unbindAllNativeEvents() {
        const e = this, t = e.getBody(), n = e.dom;
        e.delegates && (Ae(e.delegates, (s, o) => {
          e.dom.unbind(ic(e, o), o, s);
        }), delete e.delegates), !e.inline && t && n && (t.onload = null, n.unbind(e.getWin()), n.unbind(e.getDoc())), n && (n.unbind(t), n.unbind(e.getContainer()));
      }
    }, y6 = (e) => J(e) ? {
      value: e.split(/[ ,]/),
      valid: !0
    } : Eo(e, J) ? {
      value: e,
      valid: !0
    } : {
      valid: !1,
      message: "The value must be a string[] or a comma/space separated string."
    }, E6 = (e) => {
      const t = (() => {
        switch (e) {
          case "array":
            return Ge;
          case "boolean":
            return Ts;
          case "function":
            return Se;
          case "number":
            return mn;
          case "object":
            return vt;
          case "string":
            return J;
          case "string[]":
            return y6;
          case "object[]":
            return (n) => Eo(n, vt);
          case "regexp":
            return (n) => si(n, RegExp);
          default:
            return He;
        }
      })();
      return (n) => jm(n, t, `The value must be a ${e}.`);
    }, S6 = (e) => J(e.processor), H0 = (e, t) => {
      const n = kr(t.message) ? "" : `. ${t.message}`;
      return e + n;
    }, W0 = (e) => e.valid, jm = (e, t, n = "") => {
      const s = t(e);
      return Ts(s) ? s ? {
        value: e,
        valid: !0
      } : {
        valid: !1,
        message: n
      } : s;
    }, w6 = (e, t, n) => {
      if (!lt(t)) {
        const s = jm(t, n);
        if (W0(s))
          return s.value;
        console.error(H0(`Invalid default value passed for the "${e}" option`, s));
      }
    }, k6 = (e, t) => {
      const n = {}, s = {}, o = (f, d, p) => {
        const h = jm(d, p);
        return W0(h) ? (s[f] = h.value, !0) : (console.warn(H0(`Invalid value passed for the ${f} option`, h)), !1);
      }, r = (f, d) => {
        const p = S6(d) ? E6(d.processor) : d.processor, h = w6(f, d.default, p);
        n[f] = {
          ...d,
          default: h,
          processor: p
        }, Re(s, f).orThunk(() => Re(t, f)).each((b) => o(f, b, p));
      }, a = (f) => oe(n, f);
      return {
        register: r,
        isRegistered: a,
        get: (f) => Re(s, f).orThunk(() => Re(n, f).map((d) => d.default)).getOrUndefined(),
        set: (f, d) => {
          if (a(f)) {
            const p = n[f];
            return p.immutable ? (console.error(`"${f}" is an immutable option and cannot be updated`), !1) : o(f, d, p.processor);
          } else
            return console.warn(`"${f}" is not a registered option. Ensure the option has been registered before setting a value.`), !1;
        },
        unset: (f) => {
          const d = a(f);
          return d && delete s[f], d;
        },
        isSet: (f) => oe(s, f)
      };
    }, _6 = [
      "design",
      "readonly"
    ], V0 = (e, t, n, s) => {
      const o = n[t.get()], r = n[s];
      try {
        r.activate();
      } catch (a) {
        console.error(`problem while activating editor mode ${s}:`, a);
        return;
      }
      o.deactivate(), o.editorReadOnly !== r.editorReadOnly && u6(e, r.editorReadOnly), t.set(s), $D(e, s);
    }, x6 = (e, t, n, s) => {
      if (s !== n.get()) {
        if (!oe(t, s))
          throw new Error(`Editor mode '${s}' is invalid`);
        e.initialized ? V0(e, n, t, s) : e.on("init", () => V0(e, n, t, s));
      }
    }, N6 = (e, t, n) => {
      if (ke(_6, t))
        throw new Error(`Cannot override default mode ${t}`);
      return {
        ...e,
        [t]: {
          ...n,
          deactivate: () => {
            try {
              n.deactivate();
            } catch (s) {
              console.error(`problem while deactivating editor mode ${t}:`, s);
            }
          }
        }
      };
    }, A6 = (e) => {
      const t = et("design"), n = et({
        design: {
          activate: ce,
          deactivate: ce,
          editorReadOnly: !1
        },
        readonly: {
          activate: ce,
          deactivate: ce,
          editorReadOnly: !0
        }
      });
      return f6(e), b6(e), {
        isReadOnly: () => ho(e),
        set: (s) => x6(e, n.get(), t, s),
        get: () => t.get(),
        register: (s, o) => {
          n.set(N6(n.get(), s, o));
        }
      };
    }, qm = L.each, Km = L.explode, T6 = {
      f1: 112,
      f2: 113,
      f3: 114,
      f4: 115,
      f5: 116,
      f6: 117,
      f7: 118,
      f8: 119,
      f9: 120,
      f10: 121,
      f11: 122,
      f12: 123
    }, j0 = L.makeMap("alt,ctrl,shift,meta,access"), R6 = (e) => e in j0, P6 = (e) => {
      const t = {}, n = be.os.isMacOS() || be.os.isiOS();
      qm(Km(e.toLowerCase(), "+"), (r) => {
        R6(r) ? t[r] = !0 : /^[0-9]{2,}$/.test(r) ? t.keyCode = parseInt(r, 10) : (t.charCode = r.charCodeAt(0), t.keyCode = T6[r] || r.toUpperCase().charCodeAt(0));
      });
      const s = [t.keyCode];
      let o;
      for (o in j0)
        t[o] ? s.push(o) : t[o] = !1;
      return t.id = s.join(","), t.access && (t.alt = !0, n ? t.ctrl = !0 : t.shift = !0), t.meta && (n ? t.meta = !0 : (t.ctrl = !0, t.meta = !1)), t;
    };
    class q0 {
      constructor(t) {
        this.shortcuts = {}, this.pendingPatterns = [], this.editor = t;
        const n = this;
        t.on("keyup keypress keydown", (s) => {
          (n.hasModifier(s) || n.isFunctionKey(s)) && !s.isDefaultPrevented() && (qm(n.shortcuts, (o) => {
            n.matchShortcut(s, o) && (n.pendingPatterns = o.subpatterns.slice(0), s.type === "keydown" && n.executeShortcutAction(o));
          }), n.matchShortcut(s, n.pendingPatterns[0]) && (n.pendingPatterns.length === 1 && s.type === "keydown" && n.executeShortcutAction(n.pendingPatterns[0]), n.pendingPatterns.shift()));
        });
      }
      add(t, n, s, o) {
        const r = this, a = r.normalizeCommandFunc(s);
        return qm(Km(L.trim(t)), (i) => {
          const l = r.createShortcut(i, n, a, o);
          r.shortcuts[l.id] = l;
        }), !0;
      }
      remove(t) {
        const n = this.createShortcut(t);
        return this.shortcuts[n.id] ? (delete this.shortcuts[n.id], !0) : !1;
      }
      normalizeCommandFunc(t) {
        const n = this, s = t;
        return typeof s == "string" ? () => {
          n.editor.execCommand(s, !1, null);
        } : L.isArray(s) ? () => {
          n.editor.execCommand(s[0], s[1], s[2]);
        } : s;
      }
      createShortcut(t, n, s, o) {
        const r = L.map(Km(t, ">"), P6);
        return r[r.length - 1] = L.extend(r[r.length - 1], {
          func: s,
          scope: o || this.editor
        }), L.extend(r[0], {
          desc: this.editor.translate(n),
          subpatterns: r.slice(1)
        });
      }
      hasModifier(t) {
        return t.altKey || t.ctrlKey || t.metaKey;
      }
      isFunctionKey(t) {
        return t.type === "keydown" && t.keyCode >= 112 && t.keyCode <= 123;
      }
      matchShortcut(t, n) {
        return !n || n.ctrl !== t.ctrlKey || n.meta !== t.metaKey || n.alt !== t.altKey || n.shift !== t.shiftKey ? !1 : t.keyCode === n.keyCode || t.charCode && t.charCode === n.charCode ? (t.preventDefault(), !0) : !1;
      }
      executeShortcutAction(t) {
        return t.func ? t.func.call(t.scope) : null;
      }
    }
    const D6 = () => {
      const e = {}, t = {}, n = {}, s = {}, o = {}, r = {}, a = {}, i = {}, l = (u, f) => (d, p) => {
        u[d.toLowerCase()] = {
          ...p,
          type: f
        };
      }, c = (u, f) => s[u.toLowerCase()] = f;
      return {
        addButton: l(e, "button"),
        addGroupToolbarButton: l(e, "grouptoolbarbutton"),
        addToggleButton: l(e, "togglebutton"),
        addMenuButton: l(e, "menubutton"),
        addSplitButton: l(e, "splitbutton"),
        addMenuItem: l(t, "menuitem"),
        addNestedMenuItem: l(t, "nestedmenuitem"),
        addToggleMenuItem: l(t, "togglemenuitem"),
        addAutocompleter: l(n, "autocompleter"),
        addContextMenu: l(o, "contextmenu"),
        addContextToolbar: l(r, "contexttoolbar"),
        addContextForm: l(r, "contextform"),
        addSidebar: l(a, "sidebar"),
        addView: l(i, "views"),
        addIcon: c,
        getAll: () => ({
          buttons: e,
          menuItems: t,
          icons: s,
          popups: n,
          contextMenus: o,
          contextToolbars: r,
          sidebars: a,
          views: i
        })
      };
    }, O6 = () => {
      const e = D6();
      return {
        addAutocompleter: e.addAutocompleter,
        addButton: e.addButton,
        addContextForm: e.addContextForm,
        addContextMenu: e.addContextMenu,
        addContextToolbar: e.addContextToolbar,
        addIcon: e.addIcon,
        addMenuButton: e.addMenuButton,
        addMenuItem: e.addMenuItem,
        addNestedMenuItem: e.addNestedMenuItem,
        addSidebar: e.addSidebar,
        addSplitButton: e.addSplitButton,
        addToggleButton: e.addToggleButton,
        addGroupToolbarButton: e.addGroupToolbarButton,
        addToggleMenuItem: e.addToggleMenuItem,
        addView: e.addView,
        getAll: e.getAll
      };
    }, Co = Ne.DOM, K0 = L.extend, B6 = L.each;
    class lc {
      constructor(t, n, s) {
        this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.composing = !1, this.destroyed = !1, this.hasHiddenInput = !1, this.iframeElement = null, this.initialized = !1, this.readonly = !1, this.removed = !1, this.startContent = "", this._pendingNativeEvents = [], this._skinLoaded = !1, this._editableRoot = !0, this.editorManager = s, this.documentBaseUrl = s.documentBaseURL, K0(this, z0);
        const o = this;
        this.id = t, this.hidden = !1;
        const r = g4(s.defaultOptions, n);
        this.options = k6(o, r), XT(o);
        const a = this.options.get;
        a("deprecation_warnings") && EU(n, r);
        const i = a("suffix");
        i && (s.suffix = i), this.suffix = s.suffix;
        const l = a("base_url");
        l && s._setBaseUrl(l), this.baseUri = s.baseURI;
        const c = Ru(o);
        c && (Qn.ScriptLoader._setReferrerPolicy(c), Ne.DOM.styleSheetLoader._setReferrerPolicy(c));
        const u = Fh(o);
        M(u) && Ne.DOM.styleSheetLoader._setContentCssCors(u), yt.languageLoad = a("language_load"), yt.baseURL = s.baseURL, this.setDirty(!1), this.documentBaseURI = new un(Nh(o), { base_uri: this.baseUri }), this.baseURI = this.baseUri, this.inline = Du(o), this.hasVisual = MR(o), this.shortcuts = new q0(this), this.editorCommands = new $0(this), s6(this);
        const f = a("cache_suffix");
        f && (be.cacheSuffix = f.replace(/^[\?\&]+/, "")), this.ui = {
          registry: O6(),
          styleSheetLoader: void 0,
          show: ce,
          hide: ce,
          setEnabled: ce,
          isEnabled: He
        }, this.mode = A6(o), s.dispatch("SetupEditor", { editor: this });
        const d = HR(o);
        Se(d) && d.call(o, o);
      }
      render() {
        J8(this);
      }
      focus(t) {
        this.execCommand("mceFocus", !1, t);
      }
      hasFocus() {
        return ro(this);
      }
      translate(t) {
        return bn.translate(t);
      }
      getParam(t, n, s) {
        const o = this.options;
        return o.isRegistered(t) || (M(s) ? o.register(t, {
          processor: s,
          default: n
        }) : o.register(t, {
          processor: He,
          default: n
        })), !o.isSet(t) && !lt(n) ? n : o.get(t);
      }
      hasPlugin(t, n) {
        return ke(Mi(this), t) ? n ? Qo.get(t) !== void 0 : !0 : !1;
      }
      nodeChanged(t) {
        this._nodeChangeDispatcher.nodeChanged(t);
      }
      addCommand(t, n, s) {
        this.editorCommands.addCommand(t, n, s);
      }
      addQueryStateHandler(t, n, s) {
        this.editorCommands.addQueryStateHandler(t, n, s);
      }
      addQueryValueHandler(t, n, s) {
        this.editorCommands.addQueryValueHandler(t, n, s);
      }
      addShortcut(t, n, s, o) {
        this.shortcuts.add(t, n, s, o);
      }
      execCommand(t, n, s, o) {
        return this.editorCommands.execCommand(t, n, s, o);
      }
      queryCommandState(t) {
        return this.editorCommands.queryCommandState(t);
      }
      queryCommandValue(t) {
        return this.editorCommands.queryCommandValue(t);
      }
      queryCommandSupported(t) {
        return this.editorCommands.queryCommandSupported(t);
      }
      show() {
        const t = this;
        t.hidden && (t.hidden = !1, t.inline ? t.getBody().contentEditable = "true" : (Co.show(t.getContainer()), Co.hide(t.id)), t.load(), t.dispatch("show"));
      }
      hide() {
        const t = this;
        t.hidden || (t.save(), t.inline ? (t.getBody().contentEditable = "false", t === t.editorManager.focusedEditor && (t.editorManager.focusedEditor = null)) : (Co.hide(t.getContainer()), Co.setStyle(t.id, "display", t.orgDisplay)), t.hidden = !0, t.dispatch("hide"));
      }
      isHidden() {
        return this.hidden;
      }
      setProgressState(t, n) {
        this.dispatch("ProgressState", {
          state: t,
          time: n
        });
      }
      load(t = {}) {
        const n = this, s = n.getElement();
        if (n.removed)
          return "";
        if (s) {
          const o = {
            ...t,
            load: !0
          }, r = Vc(s) ? s.value : s.innerHTML, a = n.setContent(r, o);
          return o.no_events || n.dispatch("LoadContent", {
            ...o,
            element: s
          }), a;
        } else
          return "";
      }
      save(t = {}) {
        const n = this;
        let s = n.getElement();
        if (!s || !n.initialized || n.removed)
          return "";
        const o = {
          ...t,
          save: !0,
          element: s
        };
        let r = n.getContent(o);
        const a = {
          ...o,
          content: r
        };
        if (a.no_events || n.dispatch("SaveContent", a), a.format === "raw" && n.dispatch("RawSaveContent", a), r = a.content, Vc(s))
          s.value = r;
        else {
          (t.is_removing || !n.inline) && (s.innerHTML = r);
          const i = Co.getParent(n.id, "form");
          i && B6(i.elements, (l) => l.name === n.id ? (l.value = r, !1) : !0);
        }
        return a.element = o.element = s = null, a.set_dirty !== !1 && n.setDirty(!1), r;
      }
      setContent(t, n) {
        return Ad(this, t, n);
      }
      getContent(t) {
        return lU(this, t);
      }
      insertContent(t, n) {
        n && (t = K0({ content: t }, n)), this.execCommand("mceInsertContent", !1, t);
      }
      resetContent(t) {
        t === void 0 ? Ad(this, this.startContent, { format: "raw" }) : Ad(this, t), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged();
      }
      isDirty() {
        return !this.isNotDirty;
      }
      setDirty(t) {
        const n = !this.isNotDirty;
        this.isNotDirty = !t, t && t !== n && this.dispatch("dirty");
      }
      getContainer() {
        const t = this;
        return t.container || (t.container = t.editorContainer || Co.get(t.id + "_parent")), t.container;
      }
      getContentAreaContainer() {
        return this.contentAreaContainer;
      }
      getElement() {
        return this.targetElm || (this.targetElm = Co.get(this.id)), this.targetElm;
      }
      getWin() {
        const t = this;
        if (!t.contentWindow) {
          const n = t.iframeElement;
          n && (t.contentWindow = n.contentWindow);
        }
        return t.contentWindow;
      }
      getDoc() {
        const t = this;
        if (!t.contentDocument) {
          const n = t.getWin();
          n && (t.contentDocument = n.document);
        }
        return t.contentDocument;
      }
      getBody() {
        var t, n;
        const s = this.getDoc();
        return (n = (t = this.bodyElement) !== null && t !== void 0 ? t : s == null ? void 0 : s.body) !== null && n !== void 0 ? n : null;
      }
      convertURL(t, n, s) {
        const o = this, r = o.options.get, a = VR(o);
        if (Se(a))
          return a.call(o, t, s, !0, n);
        if (!r("convert_urls") || s === "link" || vt(s) && s.nodeName === "LINK" || t.indexOf("file:") === 0 || t.length === 0)
          return t;
        const i = new un(t);
        return i.protocol !== "http" && i.protocol !== "https" && i.protocol !== "" ? t : r("relative_urls") ? o.documentBaseURI.toRelative(t) : (t = o.documentBaseURI.toAbsolute(t, r("remove_script_host")), t);
      }
      addVisual(t) {
        p4(this, t);
      }
      setEditableRoot(t) {
        e4(this, t);
      }
      hasEditableRoot() {
        return t4(this);
      }
      remove() {
        _U(this);
      }
      destroy(t) {
        xU(this, t);
      }
      uploadImages() {
        return this.editorUpload.uploadImages();
      }
      _scanForImages() {
        return this.editorUpload.scanForImages();
      }
    }
    const ar = Ne.DOM, cc = L.each;
    let G0 = !1, uc, At = [];
    const fc = (e) => {
      const t = e.type;
      cc(Ss.get(), (n) => {
        switch (t) {
          case "scroll":
            n.dispatch("ScrollWindow", e);
            break;
          case "resize":
            n.dispatch("ResizeWindow", e);
            break;
        }
      });
    }, Y0 = (e) => {
      if (e !== G0) {
        const t = Ne.DOM;
        e ? (t.bind(window, "resize", fc), t.bind(window, "scroll", fc)) : (t.unbind(window, "resize", fc), t.unbind(window, "scroll", fc)), G0 = e;
      }
    }, X0 = (e) => {
      const t = At;
      return At = se(At, (n) => e !== n), Ss.activeEditor === e && (Ss.activeEditor = At.length > 0 ? At[0] : null), Ss.focusedEditor === e && (Ss.focusedEditor = null), t.length !== At.length;
    }, I6 = (e) => {
      e && e.initialized && !(e.getContainer() || e.getBody()).parentNode && (X0(e), e.unbindAllNativeEvents(), e.destroy(!0), e.removed = !0);
    }, L6 = document.compatMode !== "CSS1Compat", Ss = {
      ...Vm,
      baseURI: null,
      baseURL: null,
      defaultOptions: {},
      documentBaseURL: null,
      suffix: null,
      majorVersion: "6",
      minorVersion: "8.6",
      releaseDate: "TBD",
      i18n: bn,
      activeEditor: null,
      focusedEditor: null,
      setup() {
        const e = this;
        let t = "", n = "", s = un.getDocumentBaseUrl(document.location);
        /^[^:]+:\/\/\/?[^\/]+\//.test(s) && (s = s.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(s) || (s += "/"));
        const o = window.tinymce || window.tinyMCEPreInit;
        if (o)
          t = o.base || o.baseURL, n = o.suffix;
        else {
          const r = document.getElementsByTagName("script");
          for (let a = 0; a < r.length; a++) {
            const i = r[a].src || "";
            if (i === "")
              continue;
            const l = i.substring(i.lastIndexOf("/"));
            if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(i)) {
              l.indexOf(".min") !== -1 && (n = ".min"), t = i.substring(0, i.lastIndexOf("/"));
              break;
            }
          }
          if (!t && document.currentScript) {
            const a = document.currentScript.src;
            a.indexOf(".min") !== -1 && (n = ".min"), t = a.substring(0, a.lastIndexOf("/"));
          }
        }
        e.baseURL = new un(s).toAbsolute(t), e.documentBaseURL = s, e.baseURI = new un(e.baseURL), e.suffix = n, dB(e);
      },
      overrideDefaults(e) {
        const t = e.base_url;
        t && this._setBaseUrl(t);
        const n = e.suffix;
        n && (this.suffix = n), this.defaultOptions = e;
        const s = e.plugin_base_urls;
        s !== void 0 && Ae(s, (o, r) => {
          yt.PluginManager.urls[r] = o;
        });
      },
      init(e) {
        const t = this;
        let n;
        const s = L.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " "), o = (u, f) => u.inline && f.tagName.toLowerCase() in s, r = (u) => {
          let f = u.id;
          return f || (f = Re(u, "name").filter((d) => !ar.get(d)).getOrThunk(ar.uniqueId), u.setAttribute("id", f)), f;
        }, a = (u) => {
          const f = e[u];
          if (f)
            return f.apply(t, []);
        }, i = (u) => be.browser.isIE() || be.browser.isEdge() ? (kl("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/6/support/#supportedwebbrowsers"), []) : L6 ? (kl("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), []) : J(u.selector) ? ar.select(u.selector) : M(u.target) ? [u.target] : [];
        let l = (u) => {
          n = u;
        };
        const c = () => {
          let u = 0;
          const f = [];
          let d;
          const p = (h, g, b) => {
            const v = new lc(h, g, t);
            f.push(v), v.on("init", () => {
              ++u === d.length && l(f);
            }), v.targetElm = v.targetElm || b, v.render();
          };
          ar.unbind(window, "ready", c), a("onpageload"), d = y_(i(e)), L.each(d, (h) => {
            I6(t.get(h.id));
          }), d = L.grep(d, (h) => !t.get(h.id)), d.length === 0 ? l([]) : cc(d, (h) => {
            o(e, h) ? kl("Could not initialize inline editor on invalid inline target element", h) : p(r(h), e, h);
          });
        };
        return ar.bind(window, "ready", c), new Promise((u) => {
          n ? u(n) : l = (f) => {
            u(f);
          };
        });
      },
      get(e) {
        return arguments.length === 0 ? At.slice(0) : J(e) ? Ye(At, (t) => t.id === e).getOr(null) : mn(e) && At[e] ? At[e] : null;
      },
      add(e) {
        const t = this, n = t.get(e.id);
        return n === e || (n === null && At.push(e), Y0(!0), t.activeEditor = e, t.dispatch("AddEditor", { editor: e }), uc || (uc = (s) => {
          const o = t.dispatch("BeforeUnload");
          if (o.returnValue)
            return s.preventDefault(), s.returnValue = o.returnValue, o.returnValue;
        }, window.addEventListener("beforeunload", uc))), e;
      },
      createEditor(e, t) {
        return this.add(new lc(e, t, this));
      },
      remove(e) {
        const t = this;
        let n;
        if (!e) {
          for (let s = At.length - 1; s >= 0; s--)
            t.remove(At[s]);
          return;
        }
        if (J(e)) {
          cc(ar.select(e), (s) => {
            n = t.get(s.id), n && t.remove(n);
          });
          return;
        }
        return n = e, kt(t.get(n.id)) ? null : (X0(n) && t.dispatch("RemoveEditor", { editor: n }), At.length === 0 && window.removeEventListener("beforeunload", uc), n.remove(), Y0(At.length > 0), n);
      },
      execCommand(e, t, n) {
        var s;
        const o = this, r = vt(n) ? (s = n.id) !== null && s !== void 0 ? s : n.index : n;
        switch (e) {
          case "mceAddEditor": {
            if (!o.get(r)) {
              const a = n.options;
              new lc(r, a, o).render();
            }
            return !0;
          }
          case "mceRemoveEditor": {
            const a = o.get(r);
            return a && a.remove(), !0;
          }
          case "mceToggleEditor": {
            const a = o.get(r);
            return a ? (a.isHidden() ? a.show() : a.hide(), !0) : (o.execCommand("mceAddEditor", !1, n), !0);
          }
        }
        return o.activeEditor ? o.activeEditor.execCommand(e, t, n) : !1;
      },
      triggerSave: () => {
        cc(At, (e) => {
          e.save();
        });
      },
      addI18n: (e, t) => {
        bn.add(e, t);
      },
      translate: (e) => bn.translate(e),
      setActive(e) {
        const t = this.activeEditor;
        this.activeEditor !== e && (t && t.dispatch("deactivate", { relatedTarget: e }), e.dispatch("activate", { relatedTarget: t })), this.activeEditor = e;
      },
      _setBaseUrl(e) {
        this.baseURL = new un(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")), this.baseURI = new un(this.baseURL);
      }
    };
    Ss.setup();
    const $6 = (() => {
      const e = fs(), t = (r) => ({
        items: r,
        types: Dt(r),
        getType: (a) => Re(r, a).getOrUndefined()
      }), n = (r) => {
        e.set(r);
      }, s = () => e.get().getOrUndefined(), o = e.clear;
      return {
        FakeClipboardItem: t,
        write: n,
        read: s,
        clear: o
      };
    })(), Z0 = Math.min, ir = Math.max, dc = Math.round, Q0 = (e, t, n) => {
      let s = t.x, o = t.y;
      const r = e.w, a = e.h, i = t.w, l = t.h, c = (n || "").split("");
      return c[0] === "b" && (o += l), c[1] === "r" && (s += i), c[0] === "c" && (o += dc(l / 2)), c[1] === "c" && (s += dc(i / 2)), c[3] === "b" && (o -= a), c[4] === "r" && (s -= r), c[3] === "c" && (o -= dc(a / 2)), c[4] === "c" && (s -= dc(r / 2)), lr(s, o, r, a);
    }, F6 = (e, t, n, s) => {
      for (let o = 0; o < s.length; o++) {
        const r = Q0(e, t, s[o]);
        if (r.x >= n.x && r.x + r.w <= n.w + n.x && r.y >= n.y && r.y + r.h <= n.h + n.y)
          return s[o];
      }
      return null;
    }, M6 = (e, t, n) => lr(e.x - t, e.y - n, e.w + t * 2, e.h + n * 2), U6 = (e, t) => {
      const n = ir(e.x, t.x), s = ir(e.y, t.y), o = Z0(e.x + e.w, t.x + t.w), r = Z0(e.y + e.h, t.y + t.h);
      return o - n < 0 || r - s < 0 ? null : lr(n, s, o - n, r - s);
    }, z6 = (e, t, n) => {
      let s = e.x, o = e.y, r = e.x + e.w, a = e.y + e.h;
      const i = t.x + t.w, l = t.y + t.h, c = ir(0, t.x - s), u = ir(0, t.y - o), f = ir(0, r - i), d = ir(0, a - l);
      return s += c, o += u, n && (r += c, a += u, s -= f, o -= d), r -= f, a -= d, lr(s, o, r - s, a - o);
    }, lr = (e, t, n, s) => ({
      x: e,
      y: t,
      w: n,
      h: s
    }), H6 = {
      inflate: M6,
      relativePosition: Q0,
      findBestRelativePosition: F6,
      intersect: U6,
      clamp: z6,
      create: lr,
      fromClientRect: (e) => lr(e.left, e.top, e.width, e.height)
    }, W6 = (e, t, n = 1e3) => {
      let s = !1, o = null;
      const r = (c) => (...u) => {
        s || (s = !0, o !== null && (clearTimeout(o), o = null), c.apply(null, u));
      }, a = r(e), i = r(t);
      return {
        start: (...c) => {
          !s && o === null && (o = setTimeout(() => i.apply(null, c), n));
        },
        resolve: a,
        reject: i
      };
    }, V6 = (() => {
      const e = {}, t = {}, n = {};
      return {
        load: (l, c) => {
          const u = `Script at URL "${c}" failed to load`, f = `Script at URL "${c}" did not call \`tinymce.Resource.add('${l}', data)\` within 1 second`;
          if (e[l] !== void 0)
            return e[l];
          {
            const d = new Promise((p, h) => {
              const g = W6(p, h);
              t[l] = g.resolve, Qn.ScriptLoader.loadScript(c).then(() => g.start(f), () => g.reject(u));
            });
            return e[l] = d, d;
          }
        },
        add: (l, c) => {
          t[l] !== void 0 && (t[l](c), delete t[l]), e[l] = Promise.resolve(c), n[l] = c;
        },
        has: (l) => l in n,
        get: (l) => n[l],
        unload: (l) => {
          delete e[l];
        }
      };
    })(), j6 = () => (() => {
      let e = {}, t = [];
      const n = {
        getItem: (s) => {
          const o = e[s];
          return o || null;
        },
        setItem: (s, o) => {
          t.push(s), e[s] = String(o);
        },
        key: (s) => t[s],
        removeItem: (s) => {
          t = t.filter((o) => o === s), delete e[s];
        },
        clear: () => {
          t = [], e = {};
        },
        length: 0
      };
      return Object.defineProperty(n, "length", {
        get: () => t.length,
        configurable: !1,
        enumerable: !1
      }), n;
    })();
    let Ga;
    try {
      const e = "__storage_test__";
      Ga = window.localStorage, Ga.setItem(e, e), Ga.removeItem(e);
    } catch {
      Ga = j6();
    }
    var q6 = Ga;
    const K6 = {
      geom: { Rect: H6 },
      util: {
        Delay: Zt,
        Tools: L,
        VK: H,
        URI: un,
        EventDispatcher: Wm,
        Observable: Vm,
        I18n: bn,
        LocalStorage: q6,
        ImageUploader: oz
      },
      dom: {
        EventUtils: Ks,
        TreeWalker: Xe,
        TextSeeker: Xs,
        DOMUtils: Ne,
        ScriptLoader: Qn,
        RangeUtils: oo,
        Serializer: hE,
        StyleSheetLoader: Sp,
        ControlSelection: Wb,
        BookmarkManager: da,
        Selection: pE,
        Event: Ks.Event
      },
      html: {
        Styles: mu,
        Entities: qs,
        Node: Et,
        Schema: us,
        DomParser: Xo,
        Writer: OC,
        Serializer: hs
      },
      Env: be,
      AddOnManager: yt,
      Annotator: Bb,
      Formatter: PE,
      UndoManager: OE,
      EditorCommands: $0,
      WindowManager: wE,
      NotificationManager: SE,
      EditorObservable: z0,
      Shortcuts: q0,
      Editor: lc,
      FocusManager: dC,
      EditorManager: Ss,
      DOM: Ne.DOM,
      ScriptLoader: Qn.ScriptLoader,
      PluginManager: Qo,
      ThemeManager: fo,
      ModelManager: Zo,
      IconManager: Sl,
      Resource: V6,
      FakeClipboard: $6,
      trim: L.trim,
      isArray: L.isArray,
      is: L.is,
      toArray: L.toArray,
      makeMap: L.makeMap,
      each: L.each,
      map: L.map,
      grep: L.grep,
      inArray: L.inArray,
      extend: L.extend,
      walk: L.walk,
      resolve: L.resolve,
      explode: L.explode,
      _addCacheSuffix: L._addCacheSuffix
    }, J0 = L.extend(Ss, K6), G6 = (e) => {
      try {
        mr.exports = e;
      } catch {
      }
    };
    ((e) => {
      window.tinymce = e, window.tinyMCE = e;
    })(J0), G6(J0);
  })();
})(u_);
var f_ = u_.exports;
const J6 = /* @__PURE__ */ Z6(f_), H9 = /* @__PURE__ */ Q6({
  __proto__: null,
  default: J6
}, [f_]);
export {
  H9 as t
};
//# sourceMappingURL=tinymce-CThBI2Ud.js.map
