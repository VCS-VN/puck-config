function yt(v, I) {
  for (var T = 0; T < I.length; T++) {
    const b = I[T];
    if (typeof b != "string" && !Array.isArray(b)) {
      for (const y in b)
        if (y !== "default" && !(y in v)) {
          const w = Object.getOwnPropertyDescriptor(b, y);
          w && Object.defineProperty(v, y, w.get ? w : {
            enumerable: !0,
            get: () => b[y]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(v, Symbol.toStringTag, { value: "Module" }));
}
var ge = {};
(function() {
  const v = (e) => {
    let t = e;
    return {
      get: () => t,
      set: (o) => {
        t = o;
      }
    };
  };
  var I = tinymce.util.Tools.resolve("tinymce.PluginManager");
  const T = (e, t, n) => {
    var s;
    return n(e, t.prototype) ? !0 : ((s = e.constructor) === null || s === void 0 ? void 0 : s.name) === t.name;
  }, b = (e) => {
    const t = typeof e;
    return e === null ? "null" : t === "object" && Array.isArray(e) ? "array" : t === "object" && T(e, String, (n, s) => s.isPrototypeOf(n)) ? "string" : t;
  }, y = (e) => (t) => b(t) === e, w = (e) => (t) => typeof t === e, me = y("string"), he = y("array"), pe = w("boolean"), ye = (e) => e == null, xe = (e) => !ye(e), be = w("number"), ve = () => {
  }, H = (e) => () => e, L = H(!0), we = H("[~№|!-*+-\\/:;?@\\[-`{}¡«·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰෴๏๚๛༄-༒༺-༽྅࿐-࿔࿙࿚၊-၏჻፡-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰⸱、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･]");
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
      return xe(t) ? m.some(t) : m.none();
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
  const U = we;
  var M = tinymce.util.Tools.resolve("tinymce.Env"), N = tinymce.util.Tools.resolve("tinymce.util.Tools");
  const Te = Array.prototype.slice, Ne = Array.prototype.push, A = (e, t) => {
    const n = e.length, s = new Array(n);
    for (let o = 0; o < n; o++) {
      const r = e[o];
      s[o] = t(r, o);
    }
    return s;
  }, z = (e, t) => {
    for (let n = 0, s = e.length; n < s; n++) {
      const o = e[n];
      t(o, n);
    }
  }, _ = (e, t) => {
    for (let n = e.length - 1; n >= 0; n--) {
      const s = e[n];
      t(s, n);
    }
  }, Ee = (e, t) => {
    if (e.length === 0)
      return [];
    {
      let n = t(e[0]);
      const s = [];
      let o = [];
      for (let r = 0, c = e.length; r < c; r++) {
        const l = e[r], i = t(l);
        i !== n && (s.push(o), o = []), n = i, o.push(l);
      }
      return o.length !== 0 && s.push(o), s;
    }
  }, Ce = (e, t, n) => (z(e, (s, o) => {
    n = t(n, s, o);
  }), n), ke = (e) => {
    const t = [];
    for (let n = 0, s = e.length; n < s; ++n) {
      if (!he(e[n]))
        throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
      Ne.apply(t, e[n]);
    }
    return t;
  }, $ = (e, t) => ke(A(e, t)), Ie = (e, t) => {
    const n = Te.call(e, 0);
    return n.sort(t), n;
  }, Ae = Object.hasOwnProperty, q = (e, t) => Ae.call(e, t);
  typeof window < "u" || Function("return this;")();
  const $e = 9, De = 11, Oe = 1, Pe = 3, Me = (e) => e.dom.nodeType, Be = ((e) => (t) => Me(t) === e)(Pe), Fe = (e, t, n) => {
    if (me(n) || pe(n) || be(n))
      e.setAttribute(t, n + "");
    else
      throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
  }, Re = (e, t, n) => {
    Fe(e.dom, t, n);
  }, je = (e, t) => {
    const s = (t || document).createElement("div");
    if (s.innerHTML = e, !s.hasChildNodes() || s.childNodes.length > 1) {
      const o = "HTML does not have a single root node";
      throw console.error(o, e), new Error(o);
    }
    return E(s.childNodes[0]);
  }, Ve = (e, t) => {
    const s = (t || document).createElement(e);
    return E(s);
  }, We = (e, t) => {
    const s = (t || document).createTextNode(e);
    return E(s);
  }, E = (e) => {
    if (e == null)
      throw new Error("Node cannot be null or undefined");
    return { dom: e };
  }, p = {
    fromHtml: je,
    fromTag: Ve,
    fromText: We,
    fromDom: E,
    fromPoint: (e, t, n) => m.from(e.dom.elementFromPoint(t, n)).map(E)
  }, He = (e) => e.nodeType !== Oe && e.nodeType !== $e && e.nodeType !== De || e.childElementCount === 0, Le = (e, t) => {
    const n = t === void 0 ? document : t.dom;
    return He(n) ? [] : A(n.querySelectorAll(e), p.fromDom);
  }, Ue = (e) => m.from(e.dom.parentNode).map(p.fromDom), ze = (e) => A(e.dom.childNodes, p.fromDom), G = (e, t) => ({
    element: e,
    offset: t
  }), _e = (e, t) => {
    const n = ze(e);
    return n.length > 0 && t < n.length ? G(n[t], 0) : G(e, t);
  }, qe = (e, t) => {
    Ue(e).each((s) => {
      s.dom.insertBefore(t.dom, e.dom);
    });
  }, Ge = (e, t) => {
    e.dom.appendChild(t.dom);
  }, K = (e, t) => {
    qe(e, t), Ge(t, e);
  }, Ke = ((e, t) => {
    const n = (r) => {
      if (!e(r))
        throw new Error("Can only get " + t + " value of a " + t + " node");
      return s(r).getOr("");
    }, s = (r) => e(r) ? m.from(r.dom.nodeValue) : m.none();
    return {
      get: n,
      getOption: s,
      set: (r, c) => {
        if (!e(r))
          throw new Error("Can only set raw " + t + " value of a " + t + " node");
        r.dom.nodeValue = c;
      }
    };
  })(Be, "text"), X = (e) => Ke.get(e), Xe = (e, t, n) => (e.compareDocumentPosition(t) & n) !== 0, Je = (e, t) => Xe(e, t, Node.DOCUMENT_POSITION_PRECEDING), Qe = (e, t) => Le(t, e);
  var J = tinymce.util.Tools.resolve("tinymce.dom.TreeWalker");
  const Q = (e, t) => e.isBlock(t) || q(e.schema.getVoidElements(), t.nodeName), Y = (e, t) => !e.isEditable(t), Ye = (e, t) => e.getContentEditable(t) === "true" && t.parentNode && !e.isEditable(t.parentNode), Z = (e, t) => !e.isBlock(t) && q(e.schema.getWhitespaceElements(), t.nodeName), Ze = (e, t) => Q(e, t) || Y(e, t) || Z(e, t) || Ye(e, t), Se = (e) => e.nodeType === 3, S = () => ({
    sOffset: 0,
    fOffset: 0,
    elements: []
  }), ee = (e, t) => _e(p.fromDom(e), t), te = (e, t, n, s, o, r = !0) => {
    let c = r ? t(!1) : n;
    for (; c; ) {
      const l = Y(e, c);
      if (l || Z(e, c)) {
        if (l ? s.cef(c) : s.boundary(c))
          break;
        c = t(!0);
        continue;
      } else if (Q(e, c)) {
        if (s.boundary(c))
          break;
      } else Se(c) && s.text(c);
      if (c === o)
        break;
      c = t(!1);
    }
  }, ne = (e, t, n, s, o) => {
    var r;
    if (Ze(e, n))
      return;
    const c = (r = e.getParent(s, e.isBlock)) !== null && r !== void 0 ? r : e.getRoot(), l = new J(n, c), i = o ? l.next.bind(l) : l.prev.bind(l);
    te(e, i, n, {
      boundary: L,
      cef: L,
      text: (a) => {
        o ? t.fOffset += a.length : t.sOffset += a.length, t.elements.push(p.fromDom(a));
      }
    });
  }, se = (e, t, n, s, o, r = !0) => {
    const c = new J(n, t), l = [];
    let i = S();
    ne(e, i, n, t, !1);
    const a = () => (i.elements.length > 0 && (l.push(i), i = S()), !1);
    return te(e, c.next.bind(c), n, {
      boundary: a,
      cef: (f) => (a(), o && l.push(...o.cef(f)), !1),
      text: (f) => {
        i.elements.push(p.fromDom(f)), o && o.text(f, i);
      }
    }, s, r), s && ne(e, i, s, t, !0), a(), l;
  }, et = (e, t) => {
    const n = ee(t.startContainer, t.startOffset), s = n.element.dom, o = ee(t.endContainer, t.endOffset), r = o.element.dom;
    return se(e, t.commonAncestorContainer, s, r, {
      text: (c, l) => {
        c === r ? l.fOffset += c.length - o.offset : c === s && (l.sOffset += n.offset);
      },
      cef: (c) => {
        const l = $(Qe(p.fromDom(c), "*[contenteditable=true]"), (i) => {
          const a = i.dom;
          return se(e, a, a);
        });
        return Ie(l, (i, a) => Je(i.elements[0].dom, a.elements[0].dom) ? 1 : -1);
      }
    }, !1);
  }, oe = (e, t) => t.collapsed ? [] : et(e, t), re = (e, t) => {
    const n = e.createRng();
    return n.selectNode(t), oe(e, n);
  }, tt = (e, t) => $(t, (n) => re(e, n)), nt = (e, t, n = 0, s = e.length) => {
    const o = t.regex;
    o.lastIndex = n;
    const r = [];
    let c;
    for (; c = o.exec(e); ) {
      const l = c[t.matchIndex], i = c.index + c[0].indexOf(l), a = i + l.length;
      if (a > s)
        break;
      r.push({
        start: i,
        finish: a
      }), o.lastIndex = a;
    }
    return r;
  }, st = (e, t) => {
    const n = Ce(e, (s, o) => {
      const r = X(o), c = s.last, l = c + r.length, i = $(t, (a, f) => a.start < l && a.finish > c ? [{
        element: o,
        start: Math.max(c, a.start) - c,
        finish: Math.min(l, a.finish) - c,
        matchId: f
      }] : []);
      return {
        results: s.results.concat(i),
        last: l
      };
    }, {
      results: [],
      last: 0
    }).results;
    return Ee(n, (s) => s.matchId);
  }, ce = (e, t) => $(t, (n) => {
    const s = n.elements, o = A(s, X).join(""), r = nt(o, e, n.sOffset, o.length - n.fOffset);
    return st(s, r);
  }), le = (e, t) => {
    _(e, (n, s) => {
      _(n, (o) => {
        const r = p.fromDom(t.cloneNode(!1));
        Re(r, "data-mce-index", s);
        const c = o.element.dom;
        if (c.length === o.finish && o.start === 0)
          K(o.element, r);
        else {
          c.length !== o.finish && c.splitText(o.finish);
          const l = c.splitText(o.start);
          K(p.fromDom(l), r);
        }
      });
    });
  }, ot = (e, t, n, s) => {
    const o = re(e, n), r = ce(t, o);
    return le(r, s), r.length;
  }, rt = (e, t, n, s) => {
    const o = n.getBookmark(), r = e.select("td[data-mce-selected],th[data-mce-selected]"), c = r.length > 0 ? tt(e, r) : oe(e, n.getRng()), l = ce(t, c);
    return le(l, s), n.moveToBookmark(o), l.length;
  }, C = (e) => e.getAttribute("data-mce-index"), ct = (e, t, n, s) => {
    const o = e.dom.create("span", { "data-mce-bogus": 1 });
    o.className = "mce-match-marker";
    const r = e.getBody();
    return O(e, t, !1), s ? rt(e.dom, n, e.selection, o) : ot(e.dom, n, r, o);
  }, ie = (e) => {
    var t;
    const n = e.parentNode;
    e.firstChild && n.insertBefore(e.firstChild, e), (t = e.parentNode) === null || t === void 0 || t.removeChild(e);
  }, B = (e, t) => {
    const n = [], s = N.toArray(e.getBody().getElementsByTagName("span"));
    if (s.length)
      for (let o = 0; o < s.length; o++) {
        const r = C(s[o]);
        r === null || !r.length || r === t.toString() && n.push(s[o]);
      }
    return n;
  }, F = (e, t, n) => {
    const s = t.get();
    let o = s.index;
    const r = e.dom;
    n ? o + 1 === s.count ? o = 0 : o++ : o - 1 === -1 ? o = s.count - 1 : o--, r.removeClass(B(e, s.index), "mce-match-marker-selected");
    const c = B(e, o);
    return c.length ? (r.addClass(B(e, o), "mce-match-marker-selected"), e.selection.scrollIntoView(c[0]), o) : -1;
  }, ae = (e, t) => {
    const n = t.parentNode;
    e.remove(t), n && e.isEmpty(n) && e.remove(n);
  }, lt = (e, t) => {
    const s = "(" + e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").replace(/\s/g, "[^\\S\\r\\n\\uFEFF]") + ")";
    return t ? `(?:^|\\s|${U()})` + s + `(?=$|\\s|${U()})` : s;
  }, ue = (e, t, n, s, o, r) => {
    const c = e.selection, l = lt(n, o), i = c.isForward(), a = {
      regex: new RegExp(l, s ? "g" : "gi"),
      matchIndex: 1
    }, f = ct(e, t, a, r);
    if (M.browser.isSafari() && c.setRng(c.getRng(), i), f) {
      const h = F(e, t, !0);
      t.set({
        index: h,
        count: f,
        text: n,
        matchCase: s,
        wholeWord: o,
        inSelection: r
      });
    }
    return f;
  }, D = (e, t) => {
    const n = F(e, t, !0);
    t.set({
      ...t.get(),
      index: n
    });
  }, R = (e, t) => {
    const n = F(e, t, !1);
    t.set({
      ...t.get(),
      index: n
    });
  }, it = (e) => {
    const t = C(e);
    return t !== null && t.length > 0;
  }, j = (e, t, n, s, o) => {
    const r = t.get(), c = r.index;
    let l, i = c;
    s = s !== !1;
    const a = e.getBody(), f = N.grep(N.toArray(a.getElementsByTagName("span")), it);
    for (let h = 0; h < f.length; h++) {
      const W = C(f[h]);
      let k = l = parseInt(W, 10);
      if (o || k === r.index) {
        for (n.length ? (f[h].innerText = n, ie(f[h])) : ae(e.dom, f[h]); f[++h]; )
          if (k = parseInt(C(f[h]), 10), k === l)
            ae(e.dom, f[h]);
          else {
            h--;
            break;
          }
        s && i--;
      } else l > c && f[h].setAttribute("data-mce-index", String(l - 1));
    }
    return t.set({
      ...r,
      count: o ? 0 : r.count - 1,
      index: i
    }), s ? D(e, t) : R(e, t), !o && t.get().count > 0;
  }, O = (e, t, n) => {
    let s, o;
    const r = t.get(), c = N.toArray(e.getBody().getElementsByTagName("span"));
    for (let l = 0; l < c.length; l++) {
      const i = C(c[l]);
      i !== null && i.length && (i === r.index.toString() && (s || (s = c[l].firstChild), o = c[l].firstChild), ie(c[l]));
    }
    if (t.set({
      ...r,
      index: -1,
      count: 0,
      text: ""
    }), s && o) {
      const l = e.dom.createRng();
      return l.setStart(s, 0), l.setEnd(o, o.data.length), n !== !1 && e.selection.setRng(l), l;
    } else
      return;
  }, at = (e, t) => t.get().count > 1, ut = (e, t) => t.get().count > 1, ft = (e, t) => ({
    done: (l) => O(e, t, l),
    find: (l, i, a, f = !1) => ue(e, t, l, i, a, f),
    next: () => D(e, t),
    prev: () => R(e, t),
    replace: (l, i, a) => j(e, t, l, i, a)
  }), dt = (e) => {
    const t = v(m.none()), n = () => t.get().each(e);
    return {
      clear: () => {
        n(), t.set(m.none());
      },
      isSet: () => t.get().isSome(),
      get: () => t.get(),
      set: (l) => {
        n(), t.set(m.some(l));
      }
    };
  }, gt = () => {
    const e = dt(ve);
    return {
      ...e,
      on: (n) => e.get().each(n)
    };
  }, fe = (e, t) => {
    const n = gt();
    e.undoManager.add();
    const s = N.trim(e.selection.getContent({ format: "text" })), o = (d) => {
      d.setEnabled("next", at(e, t)), d.setEnabled("prev", ut(e, t));
    }, r = (d) => {
      const u = d.getData(), g = t.get();
      t.set({
        ...g,
        matchCase: u.matchcase,
        wholeWord: u.wholewords,
        inSelection: u.inselection
      });
    }, c = (d, u) => {
      z([
        "replace",
        "replaceall",
        "prev",
        "next"
      ], (P) => d.setEnabled(P, !u));
    }, l = (d, u) => {
      u.redial(de(d, u.getData()));
    }, i = (d, u) => {
      M.browser.isSafari() && M.deviceType.isTouch() && (u === "find" || u === "replace" || u === "replaceall") && d.focus(u);
    }, a = (d) => {
      O(e, t, !1), c(d, !0), o(d);
    }, f = (d) => {
      const u = d.getData(), g = t.get();
      if (!u.findtext.length) {
        a(d);
        return;
      }
      if (g.text === u.findtext && g.matchCase === u.matchcase && g.wholeWord === u.wholewords)
        D(e, t);
      else {
        const x = ue(e, t, u.findtext, u.matchcase, u.wholewords, u.inselection);
        x <= 0 && l(!0, d), c(d, x === 0);
      }
      o(d);
    }, h = t.get(), W = {
      findtext: s,
      replacetext: "",
      wholewords: h.wholeWord,
      matchcase: h.matchCase,
      inselection: h.inSelection
    }, k = (d) => {
      const u = [
        {
          type: "bar",
          items: [
            {
              type: "input",
              name: "findtext",
              placeholder: "Find",
              maximized: !0,
              inputMode: "search"
            },
            {
              type: "button",
              name: "prev",
              text: "Previous",
              icon: "action-prev",
              enabled: !1,
              borderless: !0
            },
            {
              type: "button",
              name: "next",
              text: "Next",
              icon: "action-next",
              enabled: !1,
              borderless: !0
            }
          ]
        },
        {
          type: "input",
          name: "replacetext",
          placeholder: "Replace with",
          inputMode: "search"
        }
      ];
      return d && u.push({
        type: "alertbanner",
        level: "error",
        text: "Could not find the specified string.",
        icon: "warning"
      }), u;
    }, de = (d, u) => ({
      title: "Find and Replace",
      size: "normal",
      body: {
        type: "panel",
        items: k(d)
      },
      buttons: [
        {
          type: "menu",
          name: "options",
          icon: "preferences",
          tooltip: "Preferences",
          align: "start",
          items: [
            {
              type: "togglemenuitem",
              name: "matchcase",
              text: "Match case"
            },
            {
              type: "togglemenuitem",
              name: "wholewords",
              text: "Find whole words only"
            },
            {
              type: "togglemenuitem",
              name: "inselection",
              text: "Find in selection"
            }
          ]
        },
        {
          type: "custom",
          name: "find",
          text: "Find",
          primary: !0
        },
        {
          type: "custom",
          name: "replace",
          text: "Replace",
          enabled: !1
        },
        {
          type: "custom",
          name: "replaceall",
          text: "Replace all",
          enabled: !1
        }
      ],
      initialData: u,
      onChange: (g, x) => {
        d && l(!1, g), x.name === "findtext" && t.get().count > 0 && a(g);
      },
      onAction: (g, x) => {
        const P = g.getData();
        switch (x.name) {
          case "find":
            f(g);
            break;
          case "replace":
            j(e, t, P.replacetext) ? o(g) : a(g);
            break;
          case "replaceall":
            j(e, t, P.replacetext, !0, !0), a(g);
            break;
          case "prev":
            R(e, t), o(g);
            break;
          case "next":
            D(e, t), o(g);
            break;
          case "matchcase":
          case "wholewords":
          case "inselection":
            l(!1, g), r(g), a(g);
            break;
        }
        i(g, x.name);
      },
      onSubmit: (g) => {
        f(g), i(g, "find");
      },
      onClose: () => {
        e.focus(), O(e, t), e.undoManager.add();
      }
    });
    n.set(e.windowManager.open(de(!1, W), { inline: "toolbar" }));
  }, mt = (e, t) => {
    e.addCommand("SearchReplace", () => {
      fe(e, t);
    });
  }, V = (e, t) => () => {
    fe(e, t);
  }, ht = (e, t) => {
    e.ui.registry.addMenuItem("searchreplace", {
      text: "Find and replace...",
      shortcut: "Meta+F",
      onAction: V(e, t),
      icon: "search"
    }), e.ui.registry.addButton("searchreplace", {
      tooltip: "Find and replace",
      onAction: V(e, t),
      icon: "search"
    }), e.shortcuts.add("Meta+F", "", V(e, t));
  };
  var pt = () => {
    I.add("searchreplace", (e) => {
      const t = v({
        index: -1,
        count: 0,
        text: "",
        matchCase: !1,
        wholeWord: !1,
        inSelection: !1
      });
      return mt(e, t), ht(e, t), ft(e, t);
    });
  };
  pt();
})();
const Tt = /* @__PURE__ */ yt({
  __proto__: null,
  default: ge
}, [ge]);
export {
  Tt as i
};
//# sourceMappingURL=index-QsKuarUl.js.map
