function fs(w, x) {
  for (var A = 0; A < x.length; A++) {
    const f = x[A];
    if (typeof f != "string" && !Array.isArray(f)) {
      for (const h in f)
        if (h !== "default" && !(h in w)) {
          const y = Object.getOwnPropertyDescriptor(f, h);
          y && Object.defineProperty(w, h, y.get ? y : {
            enumerable: !0,
            get: () => f[h]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(w, Symbol.toStringTag, { value: "Module" }));
}
var Ce = {};
(function() {
  var w = tinymce.util.Tools.resolve("tinymce.PluginManager");
  const x = Object.getPrototypeOf, A = (e, t, s) => {
    var n;
    return s(e, t.prototype) ? !0 : ((n = e.constructor) === null || n === void 0 ? void 0 : n.name) === t.name;
  }, f = (e) => {
    const t = typeof e;
    return e === null ? "null" : t === "object" && Array.isArray(e) ? "array" : t === "object" && A(e, String, (s, n) => n.isPrototypeOf(s)) ? "string" : t;
  }, h = (e) => (t) => f(t) === e, y = (e) => (t) => typeof t === e, Ue = (e) => (t) => e === t, Ne = (e, t) => H(e) && A(e, t, (s, n) => x(s) === n), i = h("string"), H = h("object"), R = (e) => Ne(e, Object), V = h("array"), xe = Ue(null), G = y("boolean"), Ee = (e) => e == null, I = (e) => !Ee(e), W = y("function"), Oe = y("number"), Pe = (e, t) => {
    if (V(e)) {
      for (let s = 0, n = e.length; s < n; ++s)
        if (!t(e[s]))
          return !1;
      return !0;
    }
    return !1;
  }, Le = () => {
  };
  class l {
    constructor(t, s) {
      this.tag = t, this.value = s;
    }
    static some(t) {
      return new l(!0, t);
    }
    static none() {
      return l.singletonNone;
    }
    fold(t, s) {
      return this.tag ? s(this.value) : t();
    }
    isSome() {
      return this.tag;
    }
    isNone() {
      return !this.tag;
    }
    map(t) {
      return this.tag ? l.some(t(this.value)) : l.none();
    }
    bind(t) {
      return this.tag ? t(this.value) : l.none();
    }
    exists(t) {
      return this.tag && t(this.value);
    }
    forall(t) {
      return !this.tag || t(this.value);
    }
    filter(t) {
      return !this.tag || t(this.value) ? this : l.none();
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
      return I(t) ? l.some(t) : l.none();
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
  l.singletonNone = new l(!1);
  const ke = Object.keys, Me = Object.hasOwnProperty, ze = (e, t) => {
    const s = ke(e);
    for (let n = 0, o = s.length; n < o; n++) {
      const r = s[n], a = e[r];
      t(a, r);
    }
  }, Be = (e) => (t, s) => {
    e[s] = t;
  }, $e = (e, t, s, n) => {
    ze(e, (o, r) => {
      (t(o, r) ? s : n)(o, r);
    });
  }, je = (e, t) => {
    const s = {};
    return $e(e, t, Be(s), Le), s;
  }, k = (e, t) => Me.call(e, t), Fe = (e, t) => k(e, t) && e[t] !== void 0 && e[t] !== null, He = Array.prototype.push, E = (e) => {
    const t = [];
    for (let s = 0, n = e.length; s < n; ++s) {
      if (!V(e[s]))
        throw new Error("Arr.flatten item " + s + " was not an array, input: " + e);
      He.apply(t, e[s]);
    }
    return t;
  }, Re = (e, t) => t >= 0 && t < e.length ? l.some(e[t]) : l.none(), Ve = (e) => Re(e, 0), Ge = (e, t) => {
    for (let s = 0; s < e.length; s++) {
      const n = t(e[s], s);
      if (n.isSome())
        return n;
    }
    return l.none();
  };
  typeof window < "u" || Function("return this;")();
  const We = (e, t, s) => {
    if (i(s) || G(s) || Oe(s))
      e.setAttribute(t, s + "");
    else
      throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", s, ":: Element ", e), new Error("Attribute value was not simple");
  }, K = (e, t, s) => {
    We(e.dom, t, s);
  }, Ke = (e, t) => {
    e.dom.removeAttribute(t);
  }, qe = (e, t) => {
    const n = (t || document).createElement("div");
    if (n.innerHTML = e, !n.hasChildNodes() || n.childNodes.length > 1) {
      const o = "HTML does not have a single root node";
      throw console.error(o, e), new Error(o);
    }
    return _(n.childNodes[0]);
  }, Ze = (e, t) => {
    const n = (t || document).createElement(e);
    return _(n);
  }, Je = (e, t) => {
    const n = (t || document).createTextNode(e);
    return _(n);
  }, _ = (e) => {
    if (e == null)
      throw new Error("Node cannot be null or undefined");
    return { dom: e };
  }, M = {
    fromHtml: qe,
    fromTag: Ze,
    fromText: Je,
    fromDom: _,
    fromPoint: (e, t, s) => l.from(e.dom.elementFromPoint(t, s)).map(_)
  };
  var Qe = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"), Xe = tinymce.util.Tools.resolve("tinymce.util.URI");
  const q = (e) => e.length > 0, g = (e) => (t) => t.options.get(e), Ye = (e) => {
    const t = e.options.register;
    t("image_dimensions", {
      processor: "boolean",
      default: !0
    }), t("image_advtab", {
      processor: "boolean",
      default: !1
    }), t("image_uploadtab", {
      processor: "boolean",
      default: !0
    }), t("image_prepend_url", {
      processor: "string",
      default: ""
    }), t("image_class_list", { processor: "object[]" }), t("image_description", {
      processor: "boolean",
      default: !0
    }), t("image_title", {
      processor: "boolean",
      default: !1
    }), t("image_caption", {
      processor: "boolean",
      default: !1
    }), t("image_list", {
      processor: (s) => {
        const n = s === !1 || i(s) || Pe(s, H) || W(s);
        return n ? {
          value: s,
          valid: n
        } : {
          valid: !1,
          message: "Must be false, a string, an array or a function."
        };
      },
      default: !1
    });
  }, Z = g("image_dimensions"), et = g("image_advtab"), tt = g("image_uploadtab"), st = g("image_prepend_url"), nt = g("image_class_list"), ot = g("image_description"), rt = g("image_title"), at = g("image_caption"), lt = g("image_list"), it = g("a11y_advanced_options"), ct = g("automatic_uploads"), ut = (e) => q(e.options.get("images_upload_url")), gt = (e) => I(e.options.get("images_upload_handler")), J = (e, t) => Math.max(parseInt(e, 10), parseInt(t, 10)), dt = (e) => new Promise((t) => {
    const s = document.createElement("img"), n = (r) => {
      s.onload = s.onerror = null, s.parentNode && s.parentNode.removeChild(s), t(r);
    };
    s.onload = () => {
      const r = J(s.width, s.clientWidth), a = J(s.height, s.clientHeight), c = {
        width: r,
        height: a
      };
      n(Promise.resolve(c));
    }, s.onerror = () => {
      n(Promise.reject(`Failed to get image dimensions for: ${e}`));
    };
    const o = s.style;
    o.visibility = "hidden", o.position = "fixed", o.bottom = o.left = "0px", o.width = o.height = "auto", document.body.appendChild(s), s.src = e;
  }), O = (e) => (e && (e = e.replace(/px$/, "")), e), P = (e) => (e.length > 0 && /^[0-9]+$/.test(e) && (e += "px"), e), mt = (e) => {
    if (e.margin) {
      const t = String(e.margin).split(" ");
      switch (t.length) {
        case 1:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[0], e["margin-bottom"] = e["margin-bottom"] || t[0], e["margin-left"] = e["margin-left"] || t[0];
          break;
        case 2:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[1], e["margin-bottom"] = e["margin-bottom"] || t[0], e["margin-left"] = e["margin-left"] || t[1];
          break;
        case 3:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[1], e["margin-bottom"] = e["margin-bottom"] || t[2], e["margin-left"] = e["margin-left"] || t[1];
          break;
        case 4:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[1], e["margin-bottom"] = e["margin-bottom"] || t[2], e["margin-left"] = e["margin-left"] || t[3];
      }
      delete e.margin;
    }
    return e;
  }, ht = (e, t) => {
    const s = lt(e);
    i(s) ? fetch(s).then((n) => {
      n.ok && n.json().then(t);
    }) : W(s) ? s(t) : t(s);
  }, pt = (e, t, s) => {
    const n = () => {
      s.onload = s.onerror = null, e.selection && (e.selection.select(s), e.nodeChanged());
    };
    s.onload = () => {
      !t.width && !t.height && Z(e) && e.dom.setAttribs(s, {
        width: String(s.clientWidth),
        height: String(s.clientHeight)
      }), n();
    }, s.onerror = n;
  }, bt = (e) => new Promise((t, s) => {
    const n = new FileReader();
    n.onload = () => {
      t(n.result);
    }, n.onerror = () => {
      var o;
      s((o = n.error) === null || o === void 0 ? void 0 : o.message);
    }, n.readAsDataURL(e);
  }), Q = (e) => e.nodeName === "IMG" && (e.hasAttribute("data-mce-object") || e.hasAttribute("data-mce-placeholder")), X = (e, t) => {
    const s = e.options.get;
    return Xe.isDomSafe(t, "img", {
      allow_html_data_urls: s("allow_html_data_urls"),
      allow_script_urls: s("allow_script_urls"),
      allow_svg_data_urls: s("allow_svg_data_urls")
    });
  }, u = Qe.DOM, Y = (e) => e.style.marginLeft && e.style.marginRight && e.style.marginLeft === e.style.marginRight ? O(e.style.marginLeft) : "", ee = (e) => e.style.marginTop && e.style.marginBottom && e.style.marginTop === e.style.marginBottom ? O(e.style.marginTop) : "", te = (e) => e.style.borderWidth ? O(e.style.borderWidth) : "", D = (e, t) => {
    var s;
    return e.hasAttribute(t) && (s = e.getAttribute(t)) !== null && s !== void 0 ? s : "";
  }, se = (e) => e.parentNode !== null && e.parentNode.nodeName === "FIGURE", S = (e, t, s) => {
    s === "" || s === null ? e.removeAttribute(t) : e.setAttribute(t, s);
  }, ft = (e) => {
    const t = u.create("figure", { class: "image" });
    u.insertAfter(t, e), t.appendChild(e), t.appendChild(u.create("figcaption", { contentEditable: "true" }, "Caption")), t.contentEditable = "false";
  }, yt = (e) => {
    const t = e.parentNode;
    I(t) && (u.insertAfter(e, t), u.remove(t));
  }, vt = (e) => {
    se(e) ? yt(e) : ft(e);
  }, ne = (e, t) => {
    const s = e.getAttribute("style"), n = t(s !== null ? s : "");
    n.length > 0 ? (e.setAttribute("style", n), e.setAttribute("data-mce-style", n)) : e.removeAttribute("style");
  }, oe = (e, t) => (s, n, o) => {
    const r = s.style;
    r[n] ? (r[n] = P(o), ne(s, t)) : S(s, n, o);
  }, re = (e, t) => e.style[t] ? O(e.style[t]) : D(e, t), ae = (e, t) => {
    const s = P(t);
    e.style.marginLeft = s, e.style.marginRight = s;
  }, le = (e, t) => {
    const s = P(t);
    e.style.marginTop = s, e.style.marginBottom = s;
  }, ie = (e, t) => {
    const s = P(t);
    e.style.borderWidth = s;
  }, ce = (e, t) => {
    e.style.borderStyle = t;
  }, ue = (e) => {
    var t;
    return (t = e.style.borderStyle) !== null && t !== void 0 ? t : "";
  }, z = (e) => I(e) && e.nodeName === "FIGURE", At = (e) => e.nodeName === "IMG", ge = (e) => u.getAttrib(e, "alt").length === 0 && u.getAttrib(e, "role") === "presentation", It = (e) => ge(e) ? "" : D(e, "alt"), de = () => ({
    src: "",
    alt: "",
    title: "",
    width: "",
    height: "",
    class: "",
    style: "",
    caption: !1,
    hspace: "",
    vspace: "",
    border: "",
    borderStyle: "",
    isDecorative: !1
  }), Dt = (e, t) => {
    var s;
    const n = document.createElement("img");
    return S(n, "style", t.style), (Y(n) || t.hspace !== "") && ae(n, t.hspace), (ee(n) || t.vspace !== "") && le(n, t.vspace), (te(n) || t.border !== "") && ie(n, t.border), (ue(n) || t.borderStyle !== "") && ce(n, t.borderStyle), e((s = n.getAttribute("style")) !== null && s !== void 0 ? s : "");
  }, St = (e, t) => {
    const s = document.createElement("img");
    if (he(e, {
      ...t,
      caption: !1
    }, s), me(s, t.alt, t.isDecorative), t.caption) {
      const n = u.create("figure", { class: "image" });
      return n.appendChild(s), n.appendChild(u.create("figcaption", { contentEditable: "true" }, "Caption")), n.contentEditable = "false", n;
    } else
      return s;
  }, B = (e, t) => ({
    src: D(t, "src"),
    alt: It(t),
    title: D(t, "title"),
    width: re(t, "width"),
    height: re(t, "height"),
    class: D(t, "class"),
    style: e(D(t, "style")),
    caption: se(t),
    hspace: Y(t),
    vspace: ee(t),
    border: te(t),
    borderStyle: ue(t),
    isDecorative: ge(t)
  }), d = (e, t, s, n, o) => {
    s[n] !== t[n] && o(e, n, String(s[n]));
  }, me = (e, t, s) => {
    if (s) {
      u.setAttrib(e, "role", "presentation");
      const n = M.fromDom(e);
      K(n, "alt", "");
    } else {
      if (xe(t)) {
        const n = M.fromDom(e);
        Ke(n, "alt");
      } else {
        const n = M.fromDom(e);
        K(n, "alt", t);
      }
      u.getAttrib(e, "role") === "presentation" && u.setAttrib(e, "role", "");
    }
  }, Tt = (e, t, s) => {
    (s.alt !== t.alt || s.isDecorative !== t.isDecorative) && me(e, s.alt, s.isDecorative);
  }, C = (e, t) => (s, n, o) => {
    e(s, o), ne(s, t);
  }, he = (e, t, s) => {
    const n = B(e, s);
    d(s, n, t, "caption", (o, r, a) => vt(o)), d(s, n, t, "src", S), d(s, n, t, "title", S), d(s, n, t, "width", oe("width", e)), d(s, n, t, "height", oe("height", e)), d(s, n, t, "class", S), d(s, n, t, "style", C((o, r) => S(o, "style", r), e)), d(s, n, t, "hspace", C(ae, e)), d(s, n, t, "vspace", C(le, e)), d(s, n, t, "border", C(ie, e)), d(s, n, t, "borderStyle", C(ce, e)), Tt(s, n, t);
  }, U = (e, t) => {
    const s = e.dom.styles.parse(t), n = mt(s), o = e.dom.styles.parse(e.dom.styles.serialize(n));
    return e.dom.styles.serialize(o);
  }, L = (e) => {
    const t = e.selection.getNode(), s = e.dom.getParent(t, "figure.image");
    return s ? e.dom.select("img", s)[0] : t && (t.nodeName !== "IMG" || Q(t)) ? null : t;
  }, pe = (e, t) => {
    var s;
    const n = e.dom, o = je(e.schema.getTextBlockElements(), (a, c) => !e.schema.isValidChild(c, "figure")), r = n.getParent(t.parentNode, (a) => Fe(o, a.nodeName), e.getBody());
    return r && (s = n.split(r, t)) !== null && s !== void 0 ? s : t;
  }, wt = (e) => {
    const t = L(e);
    return t ? B((s) => U(e, s), t) : de();
  }, _t = (e, t) => {
    const s = St((o) => U(e, o), t);
    e.dom.setAttrib(s, "data-mce-id", "__mcenew"), e.focus(), e.selection.setContent(s.outerHTML);
    const n = e.dom.select('*[data-mce-id="__mcenew"]')[0];
    if (e.dom.setAttrib(n, "data-mce-id", null), z(n)) {
      const o = pe(e, n);
      e.selection.select(o);
    } else
      e.selection.select(n);
  }, Ct = (e, t) => {
    e.dom.setAttrib(t, "src", t.getAttribute("src"));
  }, Ut = (e, t) => {
    if (t) {
      const s = e.dom.is(t.parentNode, "figure.image") ? t.parentNode : t;
      e.dom.remove(s), e.focus(), e.nodeChanged(), e.dom.isEmpty(e.getBody()) && (e.setContent(""), e.selection.setCursorLocation());
    }
  }, Nt = (e, t) => {
    const s = L(e);
    if (s)
      if (he((n) => U(e, n), t, s), Ct(e, s), z(s.parentNode)) {
        const n = s.parentNode;
        pe(e, n), e.selection.select(s.parentNode);
      } else
        e.selection.select(s), pt(e, t, s);
  }, xt = (e, t) => {
    const s = t.src;
    return {
      ...t,
      src: X(e, s) ? s : ""
    };
  }, Et = (e, t) => {
    const s = L(e);
    if (s) {
      const o = {
        ...B((a) => U(e, a), s),
        ...t
      }, r = xt(e, o);
      o.src ? Nt(e, r) : Ut(e, s);
    } else t.src && _t(e, {
      ...de(),
      ...t
    });
  }, $ = ((e) => (...t) => {
    if (t.length === 0)
      throw new Error("Can't merge zero objects");
    const s = {};
    for (let n = 0; n < t.length; n++) {
      const o = t[n];
      for (const r in o)
        k(o, r) && (s[r] = e(s[r], o[r]));
    }
    return s;
  })((e, t) => R(e) && R(t) ? $(e, t) : t);
  var Ot = tinymce.util.Tools.resolve("tinymce.util.ImageUploader"), be = tinymce.util.Tools.resolve("tinymce.util.Tools");
  const fe = (e) => i(e.value) ? e.value : "", Pt = (e) => i(e.text) ? e.text : i(e.title) ? e.title : "", ye = (e, t) => {
    const s = [];
    return be.each(e, (n) => {
      const o = Pt(n);
      if (n.menu !== void 0) {
        const r = ye(n.menu, t);
        s.push({
          text: o,
          items: r
        });
      } else {
        const r = t(n);
        s.push({
          text: o,
          value: r
        });
      }
    }), s;
  }, ve = (e = fe) => (t) => t ? l.from(t).map((s) => ye(s, e)) : l.none(), Lt = (e) => ve(fe)(e), kt = (e) => k(e, "items"), Ae = (e, t) => Ge(e, (s) => kt(s) ? Ae(s.items, t) : s.value === t ? l.some(s) : l.none()), T = {
    sanitizer: ve,
    sanitize: Lt,
    findEntry: (e, t) => e.bind((s) => Ae(s, t))
  }, Mt = { makeTab: (e) => ({
    title: "Advanced",
    name: "advanced",
    items: [{
      type: "grid",
      columns: 2,
      items: [
        {
          type: "input",
          label: "Vertical space",
          name: "vspace",
          inputMode: "numeric"
        },
        {
          type: "input",
          label: "Horizontal space",
          name: "hspace",
          inputMode: "numeric"
        },
        {
          type: "input",
          label: "Border width",
          name: "border",
          inputMode: "numeric"
        },
        {
          type: "listbox",
          name: "borderstyle",
          label: "Border style",
          items: [
            {
              text: "Select...",
              value: ""
            },
            {
              text: "Solid",
              value: "solid"
            },
            {
              text: "Dotted",
              value: "dotted"
            },
            {
              text: "Dashed",
              value: "dashed"
            },
            {
              text: "Double",
              value: "double"
            },
            {
              text: "Groove",
              value: "groove"
            },
            {
              text: "Ridge",
              value: "ridge"
            },
            {
              text: "Inset",
              value: "inset"
            },
            {
              text: "Outset",
              value: "outset"
            },
            {
              text: "None",
              value: "none"
            },
            {
              text: "Hidden",
              value: "hidden"
            }
          ]
        }
      ]
    }]
  }) }, zt = (e) => {
    const t = T.sanitizer((p) => e.convertURL(p.value || p.url || "", "src")), s = new Promise((p) => {
      ht(e, (ps) => {
        p(t(ps).map((bs) => E([
          [{
            text: "None",
            value: ""
          }],
          bs
        ])));
      });
    }), n = T.sanitize(nt(e)), o = et(e), r = tt(e), a = ut(e), c = gt(e), b = wt(e), v = ot(e), m = rt(e), N = Z(e), gs = at(e), ds = it(e), ms = ct(e), hs = l.some(st(e)).filter((p) => i(p) && p.length > 0);
    return s.then((p) => ({
      image: b,
      imageList: p,
      classList: n,
      hasAdvTab: o,
      hasUploadTab: r,
      hasUploadUrl: a,
      hasUploadHandler: c,
      hasDescription: v,
      hasImageTitle: m,
      hasDimensions: N,
      hasImageCaption: gs,
      prependURL: hs,
      hasAccessibilityOptions: ds,
      automaticUploads: ms
    }));
  }, Ie = (e) => {
    const t = {
      name: "src",
      type: "urlinput",
      filetype: "image",
      label: "Source",
      picker_text: "Browse files"
    }, s = e.imageList.map((m) => ({
      name: "images",
      type: "listbox",
      label: "Image list",
      items: m
    })), n = {
      name: "alt",
      type: "input",
      label: "Alternative description",
      enabled: !(e.hasAccessibilityOptions && e.image.isDecorative)
    }, o = {
      name: "title",
      type: "input",
      label: "Image title"
    }, r = {
      name: "dimensions",
      type: "sizeinput"
    }, a = {
      type: "label",
      label: "Accessibility",
      items: [{
        name: "isDecorative",
        type: "checkbox",
        label: "Image is decorative"
      }]
    }, c = e.classList.map((m) => ({
      name: "classes",
      type: "listbox",
      label: "Class",
      items: m
    })), b = {
      type: "label",
      label: "Caption",
      items: [{
        type: "checkbox",
        name: "caption",
        label: "Show caption"
      }]
    }, v = (m) => m ? {
      type: "grid",
      columns: 2
    } : { type: "panel" };
    return E([
      [t],
      s.toArray(),
      e.hasAccessibilityOptions && e.hasDescription ? [a] : [],
      e.hasDescription ? [n] : [],
      e.hasImageTitle ? [o] : [],
      e.hasDimensions ? [r] : [],
      [{
        ...v(e.classList.isSome() && e.hasImageCaption),
        items: E([
          c.toArray(),
          e.hasImageCaption ? [b] : []
        ])
      }]
    ]);
  }, De = {
    makeTab: (e) => ({
      title: "General",
      name: "general",
      items: Ie(e)
    }),
    makeItems: Ie
  }, Bt = { makeTab: (e) => ({
    title: "Upload",
    name: "upload",
    items: [{
      type: "dropzone",
      name: "fileinput"
    }]
  }) }, $t = (e) => ({
    prevImage: T.findEntry(e.imageList, e.image.src),
    prevAlt: e.image.alt,
    open: !0
  }), Se = (e) => ({
    src: {
      value: e.src,
      meta: {}
    },
    images: e.src,
    alt: e.alt,
    title: e.title,
    dimensions: {
      width: e.width,
      height: e.height
    },
    classes: e.class,
    caption: e.caption,
    style: e.style,
    vspace: e.vspace,
    border: e.border,
    hspace: e.hspace,
    borderstyle: e.borderStyle,
    fileinput: [],
    isDecorative: e.isDecorative
  }), Te = (e, t) => ({
    src: e.src.value,
    alt: (e.alt === null || e.alt.length === 0) && t ? null : e.alt,
    title: e.title,
    width: e.dimensions.width,
    height: e.dimensions.height,
    class: e.classes,
    style: e.style,
    caption: e.caption,
    hspace: e.hspace,
    vspace: e.vspace,
    border: e.border,
    borderStyle: e.borderstyle,
    isDecorative: e.isDecorative
  }), jt = (e, t) => /^(?:[a-zA-Z]+:)?\/\//.test(t) ? l.none() : e.prependURL.bind((s) => t.substring(0, s.length) !== s ? l.some(s + t) : l.none()), Ft = (e, t) => {
    const s = t.getData();
    jt(e, s.src.value).each((n) => {
      t.setData({
        src: {
          value: n,
          meta: s.src.meta
        }
      });
    });
  }, Ht = (e, t, s) => {
    e.hasDescription && i(s.alt) && (t.alt = s.alt), e.hasAccessibilityOptions && (t.isDecorative = s.isDecorative || t.isDecorative || !1), e.hasImageTitle && i(s.title) && (t.title = s.title), e.hasDimensions && (i(s.width) && (t.dimensions.width = s.width), i(s.height) && (t.dimensions.height = s.height)), i(s.class) && T.findEntry(e.classList, s.class).each((n) => {
      t.classes = n.value;
    }), e.hasImageCaption && G(s.caption) && (t.caption = s.caption), e.hasAdvTab && (i(s.style) && (t.style = s.style), i(s.vspace) && (t.vspace = s.vspace), i(s.border) && (t.border = s.border), i(s.hspace) && (t.hspace = s.hspace), i(s.borderstyle) && (t.borderstyle = s.borderstyle));
  }, Rt = (e, t) => {
    const s = t.getData(), n = s.src.meta;
    if (n !== void 0) {
      const o = $({}, s);
      Ht(e, o, n), t.setData(o);
    }
  }, Vt = (e, t, s, n) => {
    const o = n.getData(), r = o.src.value, a = o.src.meta || {};
    !a.width && !a.height && t.hasDimensions && (q(r) ? e.imageSize(r).then((c) => {
      s.open && n.setData({ dimensions: c });
    }).catch((c) => console.error(c)) : n.setData({
      dimensions: {
        width: "",
        height: ""
      }
    }));
  }, Gt = (e, t, s) => {
    const n = s.getData(), o = T.findEntry(e.imageList, n.src.value);
    t.prevImage = o, s.setData({ images: o.map((r) => r.value).getOr("") });
  }, j = (e, t, s, n) => {
    Ft(t, n), Rt(t, n), Vt(e, t, s, n), Gt(t, s, n);
  }, Wt = (e, t, s, n) => {
    const o = n.getData(), r = T.findEntry(t.imageList, o.images);
    r.each((a) => {
      o.alt === "" || s.prevImage.map((b) => b.text === o.alt).getOr(!1) ? a.value === "" ? n.setData({
        src: a,
        alt: s.prevAlt
      }) : n.setData({
        src: a,
        alt: a.text
      }) : n.setData({ src: a });
    }), s.prevImage = r, j(e, t, s, n);
  }, Kt = (e, t, s, n) => {
    const o = n.getData();
    n.block("Uploading image"), Ve(o.fileinput).fold(() => {
      n.unblock();
    }, (r) => {
      const a = URL.createObjectURL(r), c = () => {
        n.unblock(), URL.revokeObjectURL(a);
      }, b = (v) => {
        n.setData({
          src: {
            value: v,
            meta: {}
          }
        }), n.showTab("general"), j(e, t, s, n);
      };
      bt(r).then((v) => {
        const m = e.createBlobCache(r, a, v);
        t.automaticUploads ? e.uploadImage(m).then((N) => {
          b(N.url), c();
        }).catch((N) => {
          c(), e.alertErr(N);
        }) : (e.addToBlobCache(m), b(m.blobUri()), n.unblock());
      });
    });
  }, qt = (e, t, s) => (n, o) => {
    o.name === "src" ? j(e, t, s, n) : o.name === "images" ? Wt(e, t, s, n) : o.name === "alt" ? s.prevAlt = n.getData().alt : o.name === "fileinput" ? Kt(e, t, s, n) : o.name === "isDecorative" && n.setEnabled("alt", !n.getData().isDecorative);
  }, Zt = (e) => () => {
    e.open = !1;
  }, Jt = (e) => e.hasAdvTab || e.hasUploadUrl || e.hasUploadHandler ? {
    type: "tabpanel",
    tabs: E([
      [De.makeTab(e)],
      e.hasAdvTab ? [Mt.makeTab(e)] : [],
      e.hasUploadTab && (e.hasUploadUrl || e.hasUploadHandler) ? [Bt.makeTab(e)] : []
    ])
  } : {
    type: "panel",
    items: De.makeItems(e)
  }, Qt = (e, t, s) => (n) => {
    const o = $(Se(t.image), n.getData()), r = {
      ...o,
      style: Dt(s.normalizeCss, Te(o, !1))
    };
    e.execCommand("mceUpdateImage", !1, Te(r, t.hasAccessibilityOptions)), e.editorUpload.uploadImagesAuto(), n.close();
  }, Xt = (e) => (t) => X(e, t) ? dt(e.documentBaseURI.toAbsolute(t)).then((s) => ({
    width: String(s.width),
    height: String(s.height)
  })) : Promise.resolve({
    width: "",
    height: ""
  }), Yt = (e) => (t, s, n) => {
    var o;
    return e.editorUpload.blobCache.create({
      blob: t,
      blobUri: s,
      name: (o = t.name) === null || o === void 0 ? void 0 : o.replace(/\.[^\.]+$/, ""),
      filename: t.name,
      base64: n.split(",")[1]
    });
  }, es = (e) => (t) => {
    e.editorUpload.blobCache.add(t);
  }, ts = (e) => (t) => {
    e.windowManager.alert(t);
  }, ss = (e) => (t) => U(e, t), ns = (e) => (t) => e.dom.parseStyle(t), os = (e) => (t, s) => e.dom.serializeStyle(t, s), rs = (e) => (t) => Ot(e).upload([t], !1).then((s) => {
    var n;
    return s.length === 0 ? Promise.reject("Failed to upload image") : s[0].status === !1 ? Promise.reject((n = s[0].error) === null || n === void 0 ? void 0 : n.message) : s[0];
  }), F = (e) => {
    const t = {
      imageSize: Xt(e),
      addToBlobCache: es(e),
      createBlobCache: Yt(e),
      alertErr: ts(e),
      normalizeCss: ss(e),
      parseStyle: ns(e),
      serializeStyle: os(e),
      uploadImage: rs(e)
    };
    return { open: () => {
      zt(e).then((n) => {
        const o = $t(n);
        return {
          title: "Insert/Edit Image",
          size: "normal",
          body: Jt(n),
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
          initialData: Se(n.image),
          onSubmit: Qt(e, n, t),
          onChange: qt(t, n, o),
          onClose: Zt(o)
        };
      }).then(e.windowManager.open);
    } };
  }, as = (e) => {
    e.addCommand("mceImage", F(e).open), e.addCommand("mceUpdateImage", (t, s) => {
      e.undoManager.transact(() => Et(e, s));
    });
  }, ls = (e) => {
    const t = e.attr("class");
    return I(t) && /\bimage\b/.test(t);
  }, we = (e) => (t) => {
    let s = t.length;
    const n = (o) => {
      o.attr("contenteditable", e ? "true" : null);
    };
    for (; s--; ) {
      const o = t[s];
      ls(o) && (o.attr("contenteditable", e ? "false" : null), be.each(o.getAll("figcaption"), n));
    }
  }, is = (e) => {
    e.on("PreInit", () => {
      e.parser.addNodeFilter("figure", we(!0)), e.serializer.addNodeFilter("figure", we(!1));
    });
  }, _e = (e) => (t) => {
    const s = () => {
      t.setEnabled(e.selection.isEditable());
    };
    return e.on("NodeChange", s), s(), () => {
      e.off("NodeChange", s);
    };
  }, cs = (e) => {
    e.ui.registry.addToggleButton("image", {
      icon: "image",
      tooltip: "Insert/edit image",
      onAction: F(e).open,
      onSetup: (t) => {
        t.setActive(I(L(e)));
        const s = e.selection.selectorChangedWithUnbind("img:not([data-mce-object]):not([data-mce-placeholder]),figure.image", t.setActive).unbind, n = _e(e)(t);
        return () => {
          s(), n();
        };
      }
    }), e.ui.registry.addMenuItem("image", {
      icon: "image",
      text: "Image...",
      onAction: F(e).open,
      onSetup: _e(e)
    }), e.ui.registry.addContextMenu("image", { update: (t) => e.selection.isEditable() && (z(t) || At(t) && !Q(t)) ? ["image"] : [] });
  };
  var us = () => {
    w.add("image", (e) => {
      Ye(e), is(e), cs(e), as(e);
    });
  };
  us();
})();
const ws = /* @__PURE__ */ fs({
  __proto__: null,
  default: Ce
}, [Ce]);
export {
  ws as i
};
//# sourceMappingURL=index-BZUMDdNJ.js.map
