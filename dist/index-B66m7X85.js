function Ae(C, w) {
  for (var S = 0; S < w.length; S++) {
    const h = w[S];
    if (typeof h != "string" && !Array.isArray(h)) {
      for (const v in h)
        if (v !== "default" && !(v in C)) {
          const b = Object.getOwnPropertyDescriptor(h, v);
          b && Object.defineProperty(C, v, b.get ? b : {
            enumerable: !0,
            get: () => h[v]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(C, Symbol.toStringTag, { value: "Module" }));
}
var k = {};
(function() {
  var C = tinymce.util.Tools.resolve("tinymce.PluginManager");
  const w = (e, t, n) => {
    var s;
    return n(e, t.prototype) ? !0 : ((s = e.constructor) === null || s === void 0 ? void 0 : s.name) === t.name;
  }, S = (e) => {
    const t = typeof e;
    return e === null ? "null" : t === "object" && Array.isArray(e) ? "array" : t === "object" && w(e, String, (n, s) => s.isPrototypeOf(n)) ? "string" : t;
  }, h = (e) => (t) => S(t) === e, v = (e) => (t) => typeof t === e, b = h("string"), B = h("object"), U = h("array"), Y = (e) => e == null, J = (e) => !Y(e), x = v("function"), R = (e, t) => {
    if (U(e)) {
      for (let n = 0, s = e.length; n < s; ++n)
        if (!t(e[n]))
          return !1;
      return !0;
    }
    return !1;
  }, z = (e) => () => e;
  function K(e, ...t) {
    return (...n) => {
      const s = t.concat(n);
      return e.apply(null, s);
    };
  }
  const V = z(!1), W = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  var f = tinymce.util.Tools.resolve("tinymce.util.Tools");
  const p = (e) => (t) => t.options.get(e), q = (e) => {
    const t = e.options.register;
    t("template_cdate_classes", {
      processor: "string",
      default: "cdate"
    }), t("template_mdate_classes", {
      processor: "string",
      default: "mdate"
    }), t("template_selected_content_classes", {
      processor: "string",
      default: "selcontent"
    }), t("template_preview_replace_values", { processor: "object" }), t("template_replace_values", { processor: "object" }), t("templates", {
      processor: (n) => b(n) || R(n, B) || x(n),
      default: []
    }), t("template_cdate_format", {
      processor: "string",
      default: e.translate("%Y-%m-%d")
    }), t("template_mdate_format", {
      processor: "string",
      default: e.translate("%Y-%m-%d")
    });
  }, Z = p("template_cdate_classes"), O = p("template_mdate_classes"), G = p("template_selected_content_classes"), Q = p("template_preview_replace_values"), P = p("template_replace_values"), X = p("templates"), ee = p("template_cdate_format"), N = p("template_mdate_format"), te = p("content_style"), ne = p("content_css_cors"), se = p("body_class"), _ = (e, t) => {
    if (e = "" + e, e.length < t)
      for (let n = 0; n < t - e.length; n++)
        e = "0" + e;
    return e;
  }, D = (e, t, n = /* @__PURE__ */ new Date()) => {
    const s = "Sun Mon Tue Wed Thu Fri Sat Sun".split(" "), r = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "), o = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), u = "January February March April May June July August September October November December".split(" ");
    return t = t.replace("%D", "%m/%d/%Y"), t = t.replace("%r", "%I:%M:%S %p"), t = t.replace("%Y", "" + n.getFullYear()), t = t.replace("%y", "" + n.getYear()), t = t.replace("%m", _(n.getMonth() + 1, 2)), t = t.replace("%d", _(n.getDate(), 2)), t = t.replace("%H", "" + _(n.getHours(), 2)), t = t.replace("%M", "" + _(n.getMinutes(), 2)), t = t.replace("%S", "" + _(n.getSeconds(), 2)), t = t.replace("%I", "" + ((n.getHours() + 11) % 12 + 1)), t = t.replace("%p", n.getHours() < 12 ? "AM" : "PM"), t = t.replace("%B", "" + e.translate(u[n.getMonth()])), t = t.replace("%b", "" + e.translate(o[n.getMonth()])), t = t.replace("%A", "" + e.translate(r[n.getDay()])), t = t.replace("%a", "" + e.translate(s[n.getDay()])), t = t.replace("%%", "%"), t;
  };
  class l {
    constructor(t, n) {
      this.tag = t, this.value = n;
    }
    static some(t) {
      return new l(!0, t);
    }
    static none() {
      return l.singletonNone;
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
      return J(t) ? l.some(t) : l.none();
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
  const ae = (e, t) => {
    for (let n = 0, s = e.length; n < s; n++) {
      const r = e[n];
      if (t(r, n))
        return !0;
    }
    return !1;
  }, re = (e, t) => {
    const n = e.length, s = new Array(n);
    for (let r = 0; r < n; r++) {
      const o = e[r];
      s[r] = t(o, r);
    }
    return s;
  }, oe = (e, t, n) => {
    for (let s = 0, r = e.length; s < r; s++) {
      const o = e[s];
      if (t(o, s))
        return l.some(o);
      if (n(o, s))
        break;
    }
    return l.none();
  }, le = (e, t) => oe(e, t, V), ce = Object.hasOwnProperty, ie = (e, t) => ue(e, t) ? l.from(e[t]) : l.none(), ue = (e, t) => ce.call(e, t);
  var pe = tinymce.util.Tools.resolve("tinymce.html.Serializer");
  const ge = {
    '"': "&quot;",
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&#039;"
  }, me = (e) => e.replace(/["'<>&]/g, (t) => ie(ge, t).getOr(t)), A = (e, t, n) => ae(n.split(/\s+/), (s) => e.hasClass(t, s)), I = (e, t) => pe({ validate: !0 }, e.schema).serialize(e.parser.parse(t, { insert: !0 })), he = (e, t) => () => {
    const n = X(e);
    x(n) ? n(t) : b(n) ? fetch(n).then((s) => {
      s.ok && s.json().then(t);
    }) : t(n);
  }, E = (e, t) => (f.each(t, (n, s) => {
    x(n) && (n = n(s)), e = e.replace(new RegExp("\\{\\$" + W(s) + "\\}", "g"), n);
  }), e), j = (e, t) => {
    const n = e.dom, s = P(e);
    f.each(n.select("*", t), (r) => {
      f.each(s, (o, u) => {
        n.hasClass(r, u) && x(o) && o(r);
      });
    });
  }, de = (e, t, n) => {
    const s = e.dom, r = e.selection.getContent();
    n = E(n, P(e));
    let o = s.create("div", {}, I(e, n));
    const u = s.select(".mceTmpl", o);
    u && u.length > 0 && (o = s.create("div"), o.appendChild(u[0].cloneNode(!0))), f.each(s.select("*", o), (m) => {
      A(s, m, Z(e)) && (m.innerHTML = D(e, ee(e))), A(s, m, O(e)) && (m.innerHTML = D(e, N(e))), A(s, m, G(e)) && (m.innerHTML = r);
    }), j(e, o), e.execCommand("mceInsertContent", !1, o.innerHTML), e.addVisual();
  };
  var L = tinymce.util.Tools.resolve("tinymce.Env");
  const ye = (e, t) => {
    var n;
    let s = I(e, t);
    if (t.indexOf("<html>") === -1) {
      let r = "";
      const o = (n = te(e)) !== null && n !== void 0 ? n : "", u = ne(e) ? ' crossorigin="anonymous"' : "";
      f.each(e.contentCSS, (c) => {
        r += '<link type="text/css" rel="stylesheet" href="' + e.documentBaseURI.toAbsolute(c) + '"' + u + ">";
      }), o && (r += '<style type="text/css">' + o + "</style>");
      const m = se(e), M = e.dom.encode, $ = '<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !(' + (L.os.isMacOS() || L.os.isiOS() ? "e.metaKey" : "e.ctrlKey && !e.altKey") + ")) {e.preventDefault();}}}, false);<\/script> ", a = e.getBody().dir, i = a ? ' dir="' + M(a) + '"' : "";
      s = '<!DOCTYPE html><html><head><base href="' + M(e.documentBaseURI.getURI()) + '">' + r + $ + '</head><body class="' + M(m) + '"' + i + ">" + s + "</body></html>";
    }
    return E(s, Q(e));
  }, fe = (e, t) => {
    const n = () => {
      if (!t || t.length === 0) {
        const a = e.translate("No templates defined.");
        return e.notificationManager.open({
          text: a,
          type: "info"
        }), l.none();
      }
      return l.from(f.map(t, (a, i) => {
        const c = (d) => d.url !== void 0;
        return {
          selected: i === 0,
          text: a.title,
          value: {
            url: c(a) ? l.from(a.url) : l.none(),
            content: c(a) ? l.none() : l.from(a.content),
            description: a.description
          }
        };
      }));
    }, s = (a) => re(a, (i) => ({
      text: i.text,
      value: i.text
    })), r = (a, i) => le(a, (c) => c.text === i), o = (a) => {
      e.windowManager.alert("Could not load the specified template.", () => a.focus("template"));
    }, u = (a) => a.value.url.fold(() => Promise.resolve(a.value.content.getOr("")), (i) => fetch(i).then((c) => c.ok ? c.text() : Promise.reject())), m = (a, i) => (c, d) => {
      if (d.name === "template") {
        const y = c.getData().template;
        r(a, y).each((g) => {
          c.block("Loading..."), u(g).then((T) => {
            i(c, g, T);
          }).catch(() => {
            i(c, g, ""), c.setEnabled("save", !1), o(c);
          });
        });
      }
    }, M = (a) => (i) => {
      const c = i.getData();
      r(a, c.template).each((d) => {
        u(d).then((y) => {
          e.execCommand("mceInsertTemplate", !1, y), i.close();
        }).catch(() => {
          i.setEnabled("save", !1), o(i);
        });
      });
    }, H = (a) => {
      const i = s(a), c = (g, T) => ({
        title: "Insert Template",
        size: "large",
        body: {
          type: "panel",
          items: g
        },
        initialData: T,
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
        onSubmit: M(a),
        onChange: m(a, d)
      }), d = (g, T, _e) => {
        const Me = ye(e, _e), we = [
          {
            type: "listbox",
            name: "template",
            label: "Templates",
            items: i
          },
          {
            type: "htmlpanel",
            html: `<p aria-live="polite">${me(T.value.description)}</p>`
          },
          {
            label: "Preview",
            type: "iframe",
            name: "preview",
            sandboxed: !1,
            transparent: !1
          }
        ], xe = {
          template: T.text,
          preview: Me
        };
        g.unblock(), g.redial(c(we, xe)), g.focus("template");
      }, y = e.windowManager.open(c([], {
        template: "",
        preview: ""
      }));
      y.block("Loading..."), u(a[0]).then((g) => {
        d(y, a[0], g);
      }).catch(() => {
        d(y, a[0], ""), y.setEnabled("save", !1), o(y);
      });
    };
    n().each(H);
  }, ve = (e) => (t) => {
    fe(e, t);
  }, be = (e) => {
    e.addCommand("mceInsertTemplate", K(de, e)), e.addCommand("mceTemplate", he(e, ve(e)));
  }, Te = (e) => {
    e.on("PreProcess", (t) => {
      const n = e.dom, s = N(e);
      f.each(n.select("div", t.node), (r) => {
        n.hasClass(r, "mceTmpl") && (f.each(n.select("*", r), (o) => {
          A(n, o, O(e)) && (o.innerHTML = D(e, s));
        }), j(e, r));
      });
    });
  }, F = (e) => (t) => {
    const n = () => {
      t.setEnabled(e.selection.isEditable());
    };
    return e.on("NodeChange", n), n(), () => {
      e.off("NodeChange", n);
    };
  }, Ce = (e) => {
    const t = () => e.execCommand("mceTemplate");
    e.ui.registry.addButton("template", {
      icon: "template",
      tooltip: "Insert template",
      onSetup: F(e),
      onAction: t
    }), e.ui.registry.addMenuItem("template", {
      icon: "template",
      text: "Insert template...",
      onSetup: F(e),
      onAction: t
    });
  };
  var Se = () => {
    C.add("template", (e) => {
      q(e), Ce(e), be(e), Te(e);
    });
  };
  Se();
})();
const De = /* @__PURE__ */ Ae({
  __proto__: null,
  default: k
}, [k]);
export {
  De as i
};
//# sourceMappingURL=index-B66m7X85.js.map
