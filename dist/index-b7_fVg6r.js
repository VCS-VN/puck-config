function pt(O, T) {
  for (var C = 0; C < T.length; C++) {
    const b = T[C];
    if (typeof b != "string" && !Array.isArray(b)) {
      for (const y in b)
        if (y !== "default" && !(y in O)) {
          const j = Object.getOwnPropertyDescriptor(b, y);
          j && Object.defineProperty(O, y, j.get ? j : {
            enumerable: !0,
            get: () => b[y]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(O, Symbol.toStringTag, { value: "Module" }));
}
var de = {};
(function() {
  var O = tinymce.util.Tools.resolve("tinymce.PluginManager");
  const T = (t, e, s) => {
    var r;
    return s(t, e.prototype) ? !0 : ((r = t.constructor) === null || r === void 0 ? void 0 : r.name) === e.name;
  }, C = (t) => {
    const e = typeof t;
    return t === null ? "null" : e === "object" && Array.isArray(t) ? "array" : e === "object" && T(t, String, (s, r) => r.isPrototypeOf(s)) ? "string" : e;
  }, b = (t) => (e) => C(e) === t, y = b("string"), j = b("object"), pe = b("array"), ge = (t) => t == null, x = (t) => !ge(t);
  class u {
    constructor(e, s) {
      this.tag = e, this.value = s;
    }
    static some(e) {
      return new u(!0, e);
    }
    static none() {
      return u.singletonNone;
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
      return x(e) ? u.some(e) : u.none();
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
  const fe = Array.prototype.push, _ = (t, e) => {
    for (let s = 0, r = t.length; s < r; s++) {
      const o = t[s];
      e(o, s);
    }
  }, be = (t) => {
    const e = [];
    for (let s = 0, r = t.length; s < r; ++s) {
      if (!pe(t[s]))
        throw new Error("Arr.flatten item " + s + " was not an array, input: " + t);
      fe.apply(e, t[s]);
    }
    return e;
  }, we = (t) => {
    let e = t;
    return {
      get: () => e,
      set: (o) => {
        e = o;
      }
    };
  }, ve = Object.keys, ye = Object.hasOwnProperty, xe = (t, e) => {
    const s = ve(t);
    for (let r = 0, o = s.length; r < o; r++) {
      const n = s[r], a = t[n];
      e(a, n);
    }
  }, d = (t, e) => I(t, e) ? u.from(t[e]) : u.none(), I = (t, e) => ye.call(t, e), w = (t) => (e) => e.options.get(t), _e = (t) => {
    const e = t.options.register;
    e("audio_template_callback", { processor: "function" }), e("video_template_callback", { processor: "function" }), e("iframe_template_callback", { processor: "function" }), e("media_live_embeds", {
      processor: "boolean",
      default: !0
    }), e("media_filter_html", {
      processor: "boolean",
      default: !0
    }), e("media_url_resolver", { processor: "function" }), e("media_alt_source", {
      processor: "boolean",
      default: !0
    }), e("media_poster", {
      processor: "boolean",
      default: !0
    }), e("media_dimensions", {
      processor: "boolean",
      default: !0
    });
  }, ke = w("audio_template_callback"), $e = w("video_template_callback"), je = w("iframe_template_callback"), Ee = w("media_live_embeds"), Oe = w("media_filter_html"), Ce = w("media_url_resolver"), De = w("media_alt_source"), Ne = w("media_poster"), R = w("media_dimensions");
  var D = tinymce.util.Tools.resolve("tinymce.util.Tools"), V = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"), B = tinymce.util.Tools.resolve("tinymce.html.DomParser");
  const Ae = V.DOM, G = (t) => t.replace(/px$/, ""), Se = (t) => {
    const e = t.attr("style"), s = e ? Ae.parseStyle(e) : {};
    return {
      type: "ephox-embed-iri",
      source: t.attr("data-ephox-embed-iri"),
      altsource: "",
      poster: "",
      width: d(s, "max-width").map(G).getOr(""),
      height: d(s, "max-height").map(G).getOr("")
    };
  }, F = (t, e) => {
    let s = {};
    const o = B({
      validate: !1,
      forced_root_block: !1
    }, e).parse(t);
    for (let n = o; n; n = n.walk())
      if (n.type === 1) {
        const a = n.name;
        if (n.attr("data-ephox-embed-iri")) {
          s = Se(n);
          break;
        } else
          !s.source && a === "param" && (s.source = n.attr("movie")), (a === "iframe" || a === "object" || a === "embed" || a === "video" || a === "audio") && (s.type || (s.type = a), s = D.extend(n.attributes.map, s)), a === "source" && (s.source ? s.altsource || (s.altsource = n.attr("src")) : s.source = n.attr("src")), a === "img" && !s.poster && (s.poster = n.attr("src"));
      }
    return s.source = s.source || s.src || "", s.altsource = s.altsource || "", s.poster = s.poster || "", s;
  }, q = (t) => {
    var e;
    const s = {
      mp3: "audio/mpeg",
      m4a: "audio/x-m4a",
      wav: "audio/wav",
      mp4: "video/mp4",
      webm: "video/webm",
      ogg: "video/ogg",
      swf: "application/x-shockwave-flash"
    }, r = (e = t.toLowerCase().split(".").pop()) !== null && e !== void 0 ? e : "";
    return d(s, r).getOr("");
  };
  var k = tinymce.util.Tools.resolve("tinymce.html.Node"), J = tinymce.util.Tools.resolve("tinymce.html.Serializer");
  const U = (t, e = {}) => B({
    forced_root_block: !1,
    validate: !1,
    allow_conditional_comments: !0,
    ...e
  }, t), K = V.DOM, Q = (t) => /^[0-9.]+$/.test(t) ? t + "px" : t, Pe = (t, e) => {
    const s = e.attr("style"), r = s ? K.parseStyle(s) : {};
    x(t.width) && (r["max-width"] = Q(t.width)), x(t.height) && (r["max-height"] = Q(t.height)), e.attr("style", K.serializeStyle(r));
  }, E = [
    "source",
    "altsource"
  ], L = (t, e, s, r) => {
    let o = 0, n = 0;
    const a = U(r);
    a.addNodeFilter("source", (l) => o = l.length);
    const i = a.parse(t);
    for (let l = i; l; l = l.walk())
      if (l.type === 1) {
        const c = l.name;
        if (l.attr("data-ephox-embed-iri")) {
          Pe(e, l);
          break;
        } else {
          switch (c) {
            case "video":
            case "object":
            case "embed":
            case "img":
            case "iframe":
              e.height !== void 0 && e.width !== void 0 && (l.attr("width", e.width), l.attr("height", e.height));
              break;
          }
          if (s)
            switch (c) {
              case "video":
                l.attr("poster", e.poster), l.attr("src", null);
                for (let m = o; m < 2; m++)
                  if (e[E[m]]) {
                    const g = new k("source", 1);
                    g.attr("src", e[E[m]]), g.attr("type", e[E[m] + "mime"] || null), l.append(g);
                  }
                break;
              case "iframe":
                l.attr("src", e.source);
                break;
              case "object":
                const h = l.getAll("img").length > 0;
                if (e.poster && !h) {
                  l.attr("src", e.poster);
                  const m = new k("img", 1);
                  m.attr("src", e.poster), m.attr("width", e.width), m.attr("height", e.height), l.append(m);
                }
                break;
              case "source":
                if (n < 2 && (l.attr("src", e[E[n]]), l.attr("type", e[E[n] + "mime"] || null), !e[E[n]])) {
                  l.remove();
                  continue;
                }
                n++;
                break;
              case "img":
                e.poster || l.remove();
                break;
            }
        }
      }
    return J({}, r).serialize(i);
  }, Te = [
    {
      regex: /youtu\.be\/([\w\-_\?&=.]+)/i,
      type: "iframe",
      w: 560,
      h: 314,
      url: "www.youtube.com/embed/$1",
      allowFullscreen: !0
    },
    {
      regex: /youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,
      type: "iframe",
      w: 560,
      h: 314,
      url: "www.youtube.com/embed/$2?$4",
      allowFullscreen: !0
    },
    {
      regex: /youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,
      type: "iframe",
      w: 560,
      h: 314,
      url: "www.youtube.com/embed/$1",
      allowFullscreen: !0
    },
    {
      regex: /vimeo\.com\/([0-9]+)\?h=(\w+)/,
      type: "iframe",
      w: 425,
      h: 350,
      url: "player.vimeo.com/video/$1?h=$2&title=0&byline=0&portrait=0&color=8dc7dc",
      allowFullscreen: !0
    },
    {
      regex: /vimeo\.com\/(.*)\/([0-9]+)\?h=(\w+)/,
      type: "iframe",
      w: 425,
      h: 350,
      url: "player.vimeo.com/video/$2?h=$3&title=0&amp;byline=0",
      allowFullscreen: !0
    },
    {
      regex: /vimeo\.com\/([0-9]+)/,
      type: "iframe",
      w: 425,
      h: 350,
      url: "player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",
      allowFullscreen: !0
    },
    {
      regex: /vimeo\.com\/(.*)\/([0-9]+)/,
      type: "iframe",
      w: 425,
      h: 350,
      url: "player.vimeo.com/video/$2?title=0&amp;byline=0",
      allowFullscreen: !0
    },
    {
      regex: /maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,
      type: "iframe",
      w: 425,
      h: 350,
      url: 'maps.google.com/maps/ms?msid=$2&output=embed"',
      allowFullscreen: !1
    },
    {
      regex: /dailymotion\.com\/video\/([^_]+)/,
      type: "iframe",
      w: 480,
      h: 270,
      url: "www.dailymotion.com/embed/video/$1",
      allowFullscreen: !0
    },
    {
      regex: /dai\.ly\/([^_]+)/,
      type: "iframe",
      w: 480,
      h: 270,
      url: "www.dailymotion.com/embed/video/$1",
      allowFullscreen: !0
    }
  ], Fe = (t) => {
    const e = t.match(/^(https?:\/\/|www\.)(.+)$/i);
    return e && e.length > 1 ? e[1] === "www." ? "https://" : e[1] : "https://";
  }, Me = (t, e) => {
    const s = Fe(e), r = t.regex.exec(e);
    let o = s + t.url;
    if (x(r))
      for (let n = 0; n < r.length; n++)
        o = o.replace("$" + n, () => r[n] ? r[n] : "");
    return o.replace(/\?$/, "");
  }, X = (t) => {
    const e = Te.filter((s) => s.regex.test(t));
    return e.length > 0 ? D.extend({}, e[0], { url: Me(e[0], t) }) : null;
  }, ze = (t, e) => {
    if (e)
      return e(t);
    {
      const s = t.allowfullscreen ? ' allowFullscreen="1"' : "";
      return '<iframe src="' + t.source + '" width="' + t.width + '" height="' + t.height + '"' + s + "></iframe>";
    }
  }, He = (t) => {
    let e = '<object data="' + t.source + '" width="' + t.width + '" height="' + t.height + '" type="application/x-shockwave-flash">';
    return t.poster && (e += '<img src="' + t.poster + '" width="' + t.width + '" height="' + t.height + '" />'), e += "</object>", e;
  }, Ie = (t, e) => e ? e(t) : '<audio controls="controls" src="' + t.source + '">' + (t.altsource ? `
<source src="` + t.altsource + '"' + (t.altsourcemime ? ' type="' + t.altsourcemime + '"' : "") + ` />
` : "") + "</audio>", Re = (t, e) => e ? e(t) : '<video width="' + t.width + '" height="' + t.height + '"' + (t.poster ? ' poster="' + t.poster + '"' : "") + ` controls="controls">
<source src="` + t.source + '"' + (t.sourcemime ? ' type="' + t.sourcemime + '"' : "") + ` />
` + (t.altsource ? '<source src="' + t.altsource + '"' + (t.altsourcemime ? ' type="' + t.altsourcemime + '"' : "") + ` />
` : "") + "</video>", W = (t, e) => {
    var s;
    const r = D.extend({}, e);
    if (!r.source && (D.extend(r, F((s = r.embed) !== null && s !== void 0 ? s : "", t.schema)), !r.source))
      return "";
    r.altsource || (r.altsource = ""), r.poster || (r.poster = ""), r.source = t.convertURL(r.source, "source"), r.altsource = t.convertURL(r.altsource, "source"), r.sourcemime = q(r.source), r.altsourcemime = q(r.altsource), r.poster = t.convertURL(r.poster, "poster");
    const o = X(r.source);
    if (o && (r.source = o.url, r.type = o.type, r.allowfullscreen = o.allowFullscreen, r.width = r.width || String(o.w), r.height = r.height || String(o.h)), r.embed)
      return L(r.embed, r, !0, t.schema);
    {
      const n = ke(t), a = $e(t), i = je(t);
      return r.width = r.width || "300", r.height = r.height || "150", D.each(r, (l, c) => {
        r[c] = t.dom.encode("" + l);
      }), r.type === "iframe" ? ze(r, i) : r.sourcemime === "application/x-shockwave-flash" ? He(r) : r.sourcemime.indexOf("audio") !== -1 ? Ie(r, n) : Re(r, a);
    }
  }, Y = (t) => t.hasAttribute("data-mce-object") || t.hasAttribute("data-ephox-embed-iri"), Ue = (t) => {
    t.on("click keyup touchend", () => {
      const e = t.selection.getNode();
      e && t.dom.hasClass(e, "mce-preview-object") && t.dom.getAttrib(e, "data-mce-selected") && e.setAttribute("data-mce-selected", "2");
    }), t.on("ObjectResized", (e) => {
      const s = e.target;
      if (s.getAttribute("data-mce-object")) {
        let r = s.getAttribute("data-mce-html");
        r && (r = unescape(r), s.setAttribute("data-mce-html", escape(L(r, {
          width: String(e.width),
          height: String(e.height)
        }, !1, t.schema))));
      }
    });
  }, M = {}, Le = (t, e, s) => new Promise((r, o) => {
    const n = (a) => (a.html && (M[t.source] = a), r({
      url: t.source,
      html: a.html ? a.html : e(t)
    }));
    M[t.source] ? n(M[t.source]) : s({ url: t.source }, n, o);
  }), We = (t, e) => Promise.resolve({
    html: e(t),
    url: t.source
  }), Z = (t) => (e) => W(t, e), ee = (t, e) => {
    const s = Ce(t);
    return s ? Le(e, Z(t), s) : We(e, Z(t));
  }, Ve = (t) => I(M, t), Be = (t, e) => d(e, t).bind((s) => d(s, "meta")), Ge = (t, e, s) => (r) => {
    const o = () => d(t, r), n = () => d(e, r), a = (c) => d(c, "value").bind((h) => h.length > 0 ? u.some(h) : u.none()), i = () => o().bind((c) => j(c) ? a(c).orThunk(n) : n().orThunk(() => u.from(c))), l = () => n().orThunk(() => o().bind((c) => j(c) ? a(c) : u.from(c)));
    return { [r]: (r === s ? i() : l()).getOr("") };
  }, qe = (t, e) => {
    const s = {};
    return d(t, "dimensions").each((r) => {
      _([
        "width",
        "height"
      ], (o) => {
        d(e, o).orThunk(() => d(r, o)).each((n) => s[o] = n);
      });
    }), s;
  }, N = (t, e) => {
    const s = e && e !== "dimensions" ? Be(e, t).getOr({}) : {}, r = Ge(t, s, e);
    return {
      ...r("source"),
      ...r("altsource"),
      ...r("poster"),
      ...r("embed"),
      ...qe(t, s)
    };
  }, z = (t) => {
    const e = {
      ...t,
      source: { value: d(t, "source").getOr("") },
      altsource: { value: d(t, "altsource").getOr("") },
      poster: { value: d(t, "poster").getOr("") }
    };
    return _([
      "width",
      "height"
    ], (s) => {
      d(t, s).each((r) => {
        const o = e.dimensions || {};
        o[s] = r, e.dimensions = o;
      });
    }), e;
  }, te = (t) => (e) => {
    const s = e && e.msg ? "Media embed handler error: " + e.msg : "Media embed handler threw unknown error.";
    t.notificationManager.open({
      type: "error",
      text: s
    });
  }, Je = (t) => {
    const e = t.selection.getNode(), s = Y(e) ? t.serializer.serialize(e, { selection: !0 }) : "", r = F(s, t.schema), n = (() => {
      if (oe(r.source, r.type)) {
        const a = t.dom.getRect(e);
        return {
          width: a.w.toString().replace(/px$/, ""),
          height: a.h.toString().replace(/px$/, "")
        };
      } else
        return {};
    })();
    return {
      embed: s,
      ...r,
      ...n
    };
  }, se = (t, e) => (s) => {
    if (y(s.url) && s.url.trim().length > 0) {
      const r = s.html, n = {
        ...F(r, e.schema),
        source: s.url,
        embed: r
      };
      t.setData(z(n));
    }
  }, Ke = (t, e) => {
    const s = t.dom.select("*[data-mce-object]");
    for (let r = 0; r < e.length; r++)
      for (let o = s.length - 1; o >= 0; o--)
        e[r] === s[o] && s.splice(o, 1);
    t.selection.select(s[0]);
  }, re = (t, e) => {
    const s = t.dom.select("*[data-mce-object]");
    t.insertContent(e), Ke(t, s), t.nodeChanged();
  }, oe = (t, e) => x(e) && e === "ephox-embed-iri" && x(X(t)), ne = (t, e) => ((r, o) => r.width !== o.width || r.height !== o.height)(t, e) && oe(e.source, t.type), Qe = (t, e, s) => {
    var r;
    e.embed = ne(t, e) && R(s) ? W(s, {
      ...e,
      embed: ""
    }) : L((r = e.embed) !== null && r !== void 0 ? r : "", e, !1, s.schema), e.embed && (t.source === e.source || Ve(e.source)) ? re(s, e.embed) : ee(s, e).then((o) => {
      re(s, o.html);
    }).catch(te(s));
  }, ae = (t) => {
    const e = Je(t), s = we(e), r = z(e), o = (p, f) => {
      const $ = N(f.getData(), "source");
      p.source !== $.source && (se(H, t)({
        url: $.source,
        html: ""
      }), ee(t, $).then(se(H, t)).catch(te(t)));
    }, n = (p) => {
      var f;
      const $ = N(p.getData()), P = F((f = $.embed) !== null && f !== void 0 ? f : "", t.schema);
      p.setData(z(P));
    }, a = (p, f, $) => {
      const P = N(p.getData(), f), he = ne($, P) && R(t) ? {
        ...P,
        embed: ""
      } : P, dt = W(t, he);
      p.setData(z({
        ...he,
        embed: dt
      }));
    }, i = [{
      name: "source",
      type: "urlinput",
      filetype: "media",
      label: "Source",
      picker_text: "Browse files"
    }], l = R(t) ? [{
      type: "sizeinput",
      name: "dimensions",
      label: "Constrain proportions",
      constrain: !0
    }] : [], c = {
      title: "General",
      name: "general",
      items: be([
        i,
        l
      ])
    }, m = {
      title: "Embed",
      items: [{
        type: "textarea",
        name: "embed",
        label: "Paste your embed code below:"
      }]
    }, g = [];
    De(t) && g.push({
      name: "altsource",
      type: "urlinput",
      filetype: "media",
      label: "Alternative source URL"
    }), Ne(t) && g.push({
      name: "poster",
      type: "urlinput",
      filetype: "image",
      label: "Media poster (Image URL)"
    });
    const A = {
      title: "Advanced",
      name: "advanced",
      items: g
    }, S = [
      c,
      m
    ];
    g.length > 0 && S.push(A);
    const v = {
      type: "tabpanel",
      tabs: S
    }, H = t.windowManager.open({
      title: "Insert/Edit Media",
      size: "normal",
      body: v,
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
      onSubmit: (p) => {
        const f = N(p.getData());
        Qe(s.get(), f, t), p.close();
      },
      onChange: (p, f) => {
        switch (f.name) {
          case "source":
            o(s.get(), p);
            break;
          case "embed":
            n(p);
            break;
          case "dimensions":
          case "altsource":
          case "poster":
            a(p, f.name, s.get());
            break;
        }
        s.set(N(p.getData()));
      },
      initialData: r
    });
  }, Xe = (t) => ({ showDialog: () => {
    ae(t);
  } }), Ye = (t) => {
    const e = () => {
      ae(t);
    };
    t.addCommand("mceMedia", e);
  }, Ze = (t, e, s) => t.length >= e.length && t.substr(s, s + e.length) === e, et = (t, e) => Ze(t, e, 0);
  var tt = tinymce.util.Tools.resolve("tinymce.Env");
  const st = (t) => {
    const e = t.name;
    return e === "iframe" || e === "video" || e === "audio";
  }, ce = (t, e, s, r = null) => {
    const o = t.attr(s);
    return x(o) ? o : I(e, s) ? null : r;
  }, le = (t, e, s) => {
    const r = e.name === "img" || t.name === "video", o = r ? "300" : null, n = t.name === "audio" ? "30" : "150", a = r ? n : null;
    e.attr({
      width: ce(t, s, "width", o),
      height: ce(t, s, "height", a)
    });
  }, rt = (t, e, s, r) => {
    const o = U(t.schema).parse(r, { context: e });
    for (; o.firstChild; )
      s.append(o.firstChild);
  }, ot = (t, e) => {
    const s = e.name, r = new k("img", 1);
    return ie(t, e, r), le(e, r, {}), r.attr({
      style: e.attr("style"),
      src: tt.transparentSrc,
      "data-mce-object": s,
      class: "mce-object mce-object-" + s
    }), r;
  }, nt = (t, e) => {
    var s;
    const r = e.name, o = new k("span", 1);
    o.attr({
      contentEditable: "false",
      style: e.attr("style"),
      "data-mce-object": r,
      class: "mce-preview-object mce-object-" + r
    }), ie(t, e, o);
    const n = t.dom.parseStyle((s = e.attr("style")) !== null && s !== void 0 ? s : ""), a = new k(r, 1);
    if (le(e, a, n), a.attr({
      src: e.attr("src"),
      style: e.attr("style"),
      class: e.attr("class")
    }), r === "iframe")
      a.attr({
        allowfullscreen: e.attr("allowfullscreen"),
        frameborder: "0",
        sandbox: e.attr("sandbox")
      });
    else {
      _([
        "controls",
        "crossorigin",
        "currentTime",
        "loop",
        "muted",
        "poster",
        "preload"
      ], (h) => {
        a.attr(h, e.attr(h));
      });
      const c = o.attr("data-mce-html");
      x(c) && rt(t, r, a, unescape(c));
    }
    const i = new k("span", 1);
    return i.attr("class", "mce-shim"), o.append(a), o.append(i), o;
  }, ie = (t, e, s) => {
    var r;
    const o = (r = e.attributes) !== null && r !== void 0 ? r : [];
    let n = o.length;
    for (; n--; ) {
      const c = o[n].name;
      let h = o[n].value;
      c !== "width" && c !== "height" && c !== "style" && !et(c, "data-mce-") && ((c === "data" || c === "src") && (h = t.convertURL(h, c)), s.attr("data-mce-p-" + c, h));
    }
    const a = J({ inner: !0 }, t.schema), i = new k("div", 1);
    _(e.children(), (c) => i.append(c));
    const l = a.serialize(i);
    l && (s.attr("data-mce-html", escape(l)), s.empty());
  }, at = (t) => {
    const e = t.attr("class");
    return y(e) && /\btiny-pageembed\b/.test(e);
  }, me = (t) => {
    let e = t;
    for (; e = e.parent; )
      if (e.attr("data-ephox-embed-iri") || at(e))
        return !0;
    return !1;
  }, ct = (t) => (e) => {
    let s = e.length, r;
    for (; s--; )
      r = e[s], r.parent && (r.parent.attr("data-mce-object") || (st(r) && Ee(t) ? me(r) || r.replace(nt(t, r)) : me(r) || r.replace(ot(t, r))));
  }, lt = (t, e, s) => {
    const r = t.options.get, o = r("xss_sanitization"), n = Oe(t);
    return U(t.schema, {
      sanitize: o,
      validate: n
    }).parse(s, { context: e });
  }, it = (t) => {
    t.on("PreInit", () => {
      const { schema: e, serializer: s, parser: r } = t, o = e.getBoolAttrs();
      _("webkitallowfullscreen mozallowfullscreen".split(" "), (n) => {
        o[n] = {};
      }), xe({ embed: ["wmode"] }, (n, a) => {
        const i = e.getElementRule(a);
        i && _(n, (l) => {
          i.attributes[l] = {}, i.attributesOrder.push(l);
        });
      }), r.addNodeFilter("iframe,video,audio,object,embed", ct(t)), s.addAttributeFilter("data-mce-object", (n, a) => {
        var i;
        let l = n.length;
        for (; l--; ) {
          const c = n[l];
          if (!c.parent)
            continue;
          const h = c.attr(a), m = new k(h, 1);
          if (h !== "audio") {
            const v = c.attr("class");
            v && v.indexOf("mce-preview-object") !== -1 && c.firstChild ? m.attr({
              width: c.firstChild.attr("width"),
              height: c.firstChild.attr("height")
            }) : m.attr({
              width: c.attr("width"),
              height: c.attr("height")
            });
          }
          m.attr({ style: c.attr("style") });
          const g = (i = c.attributes) !== null && i !== void 0 ? i : [];
          let A = g.length;
          for (; A--; ) {
            const v = g[A].name;
            v.indexOf("data-mce-p-") === 0 && m.attr(v.substr(11), g[A].value);
          }
          const S = c.attr("data-mce-html");
          if (S) {
            const v = lt(t, h, unescape(S));
            _(v.children(), (H) => m.append(H));
          }
          c.replace(m);
        }
      });
    }), t.on("SetContent", () => {
      const e = t.dom;
      _(e.select("span.mce-preview-object"), (s) => {
        e.select("span.mce-shim", s).length === 0 && e.add(s, "span", { class: "mce-shim" });
      });
    });
  }, mt = (t) => {
    t.on("ResolveName", (e) => {
      let s;
      e.target.nodeType === 1 && (s = e.target.getAttribute("data-mce-object")) && (e.name = s);
    });
  }, ue = (t) => (e) => {
    const s = () => {
      e.setEnabled(t.selection.isEditable());
    };
    return t.on("NodeChange", s), s(), () => {
      t.off("NodeChange", s);
    };
  }, ut = (t) => {
    const e = () => t.execCommand("mceMedia");
    t.ui.registry.addToggleButton("media", {
      tooltip: "Insert/edit media",
      icon: "embed",
      onAction: e,
      onSetup: (s) => {
        const r = t.selection;
        s.setActive(Y(r.getNode()));
        const o = r.selectorChangedWithUnbind("img[data-mce-object],span[data-mce-object],div[data-ephox-embed-iri]", s.setActive).unbind, n = ue(t)(s);
        return () => {
          o(), n();
        };
      }
    }), t.ui.registry.addMenuItem("media", {
      icon: "embed",
      text: "Media...",
      onAction: e,
      onSetup: ue(t)
    });
  };
  var ht = () => {
    O.add("media", (t) => (_e(t), Ye(t), ut(t), mt(t), it(t), Ue(t), Xe(t)));
  };
  ht();
})();
const gt = /* @__PURE__ */ pt({
  __proto__: null,
  default: de
}, [de]);
export {
  gt as i
};
//# sourceMappingURL=index-b7_fVg6r.js.map
