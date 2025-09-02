function y(n, r) {
  for (var a = 0; a < r.length; a++) {
    const o = r[a];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const l in o)
        if (l !== "default" && !(l in n)) {
          const i = Object.getOwnPropertyDescriptor(o, l);
          i && Object.defineProperty(n, l, i.get ? i : {
            enumerable: !0,
            get: () => o[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var f = {};
(function() {
  const n = (s) => {
    let t = s;
    return {
      get: () => t,
      set: (u) => {
        t = u;
      }
    };
  };
  var r = tinymce.util.Tools.resolve("tinymce.PluginManager");
  const a = (s, t) => {
    s.dispatch("VisualBlocks", { state: t });
  }, o = (s, t, e) => {
    s.dom.toggleClass(s.getBody(), "mce-visualblocks"), e.set(!e.get()), a(s, e.get());
  }, l = (s, t, e) => {
    s.addCommand("mceVisualBlocks", () => {
      o(s, t, e);
    });
  }, i = (s) => (t) => t.options.get(s), v = (s) => {
    const t = s.options.register;
    t("visualblocks_default_state", {
      processor: "boolean",
      default: !1
    });
  }, k = i("visualblocks_default_state"), m = (s, t, e) => {
    s.on("PreviewFormats AfterPreviewFormats", (c) => {
      e.get() && s.dom.toggleClass(s.getBody(), "mce-visualblocks", c.type === "afterpreviewformats");
    }), s.on("init", () => {
      k(s) && o(s, t, e);
    });
  }, g = (s, t) => (e) => {
    e.setActive(t.get());
    const c = (u) => e.setActive(u.state);
    return s.on("VisualBlocks", c), () => s.off("VisualBlocks", c);
  }, b = (s, t) => {
    const e = () => s.execCommand("mceVisualBlocks");
    s.ui.registry.addToggleButton("visualblocks", {
      icon: "visualblocks",
      tooltip: "Show blocks",
      onAction: e,
      onSetup: g(s, t)
    }), s.ui.registry.addToggleMenuItem("visualblocks", {
      text: "Show blocks",
      icon: "visualblocks",
      onAction: e,
      onSetup: g(s, t)
    });
  };
  var p = () => {
    r.add("visualblocks", (s, t) => {
      v(s);
      const e = n(!1);
      l(s, t, e), b(s, e), m(s, t, e);
    });
  };
  p();
})();
const B = /* @__PURE__ */ y({
  __proto__: null,
  default: f
}, [f]);
export {
  B as i
};
//# sourceMappingURL=index-C8dytq-S.js.map
