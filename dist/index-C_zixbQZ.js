function C(a, r) {
  for (var i = 0; i < r.length; i++) {
    const o = r[i];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const t in o)
        if (t !== "default" && !(t in a)) {
          const c = Object.getOwnPropertyDescriptor(o, t);
          c && Object.defineProperty(a, t, c.get ? c : {
            enumerable: !0,
            get: () => o[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var b = {};
(function() {
  var a = tinymce.util.Tools.resolve("tinymce.PluginManager");
  const r = (n) => (e) => typeof e === n, i = r("boolean"), o = r("number"), t = (n) => (e) => e.options.get(n), c = (n) => {
    const e = n.options.register;
    e("nonbreaking_force_tab", {
      processor: (s) => i(s) ? {
        value: s ? 3 : 0,
        valid: !0
      } : o(s) ? {
        value: s,
        valid: !0
      } : {
        valid: !1,
        message: "Must be a boolean or number."
      },
      default: !1
    }), e("nonbreaking_wrap", {
      processor: "boolean",
      default: !0
    });
  }, f = t("nonbreaking_force_tab"), d = t("nonbreaking_wrap"), p = (n, e) => {
    let s = "";
    for (let l = 0; l < e; l++)
      s += n;
    return s;
  }, m = (n) => n.plugins.visualchars ? n.plugins.visualchars.isEnabled() : !1, u = (n, e) => {
    const s = () => m(n) ? "mce-nbsp-wrap mce-nbsp" : "mce-nbsp-wrap", l = () => `<span class="${s()}" contenteditable="false">${p("&nbsp;", e)}</span>`, N = d(n) || n.plugins.visualchars ? l() : p("&nbsp;", e);
    n.undoManager.transact(() => n.insertContent(N));
  }, y = (n) => {
    n.addCommand("mceNonBreaking", () => {
      u(n, 1);
    });
  };
  var k = tinymce.util.Tools.resolve("tinymce.util.VK");
  const v = (n) => {
    const e = f(n);
    e > 0 && n.on("keydown", (s) => {
      if (s.keyCode === k.TAB && !s.isDefaultPrevented()) {
        if (s.shiftKey)
          return;
        s.preventDefault(), s.stopImmediatePropagation(), u(n, e);
      }
    });
  }, g = (n) => (e) => {
    const s = () => {
      e.setEnabled(n.selection.isEditable());
    };
    return n.on("NodeChange", s), s(), () => {
      n.off("NodeChange", s);
    };
  }, h = (n) => {
    const e = () => n.execCommand("mceNonBreaking");
    n.ui.registry.addButton("nonbreaking", {
      icon: "non-breaking",
      tooltip: "Nonbreaking space",
      onAction: e,
      onSetup: g(n)
    }), n.ui.registry.addMenuItem("nonbreaking", {
      icon: "non-breaking",
      text: "Nonbreaking space",
      onAction: e,
      onSetup: g(n)
    });
  };
  var _ = () => {
    a.add("nonbreaking", (n) => {
      c(n), y(n), h(n), v(n);
    });
  };
  _();
})();
const w = /* @__PURE__ */ C({
  __proto__: null,
  default: b
}, [b]);
export {
  w as i
};
//# sourceMappingURL=index-C_zixbQZ.js.map
