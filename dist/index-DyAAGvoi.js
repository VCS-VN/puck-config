function x(s, c) {
  for (var r = 0; r < c.length; r++) {
    const t = c[r];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const o in t)
        if (o !== "default" && !(o in s)) {
          const i = Object.getOwnPropertyDescriptor(t, o);
          i && Object.defineProperty(s, o, i.get ? i : {
            enumerable: !0,
            get: () => t[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var m = {};
(function() {
  var s = tinymce.util.Tools.resolve("tinymce.PluginManager"), c = tinymce.util.Tools.resolve("tinymce.Env"), r = tinymce.util.Tools.resolve("tinymce.util.Tools");
  const t = (e) => (n) => n.options.get(e), o = t("content_style"), i = t("content_css_cors"), p = t("body_class"), u = t("body_id"), v = (e) => {
    var n;
    let a = "";
    const l = e.dom.encode, d = (n = o(e)) !== null && n !== void 0 ? n : "";
    a += '<base href="' + l(e.documentBaseURI.getURI()) + '">';
    const P = i(e) ? ' crossorigin="anonymous"' : "";
    r.each(e.contentCSS, (S) => {
      a += '<link type="text/css" rel="stylesheet" href="' + l(e.documentBaseURI.toAbsolute(S)) + '"' + P + ">";
    }), d && (a += '<style type="text/css">' + d + "</style>");
    const C = u(e), h = p(e), _ = '<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !(' + (c.os.isMacOS() || c.os.isiOS() ? "e.metaKey" : "e.ctrlKey && !e.altKey") + ")) {e.preventDefault();}}}, false);<\/script> ", y = e.getBody().dir, O = y ? ' dir="' + l(y) + '"' : "";
    return "<!DOCTYPE html><html><head>" + a + '</head><body id="' + l(C) + '" class="mce-content-body ' + l(h) + '"' + O + ">" + e.getContent() + _ + "</body></html>";
  }, g = (e) => {
    const n = v(e);
    e.windowManager.open({
      title: "Preview",
      size: "large",
      body: {
        type: "panel",
        items: [{
          name: "preview",
          type: "iframe",
          sandboxed: !0,
          transparent: !1
        }]
      },
      buttons: [{
        type: "cancel",
        name: "close",
        text: "Close",
        primary: !0
      }],
      initialData: { preview: n }
    }).focus("close");
  }, f = (e) => {
    e.addCommand("mcePreview", () => {
      g(e);
    });
  }, b = (e) => {
    const n = () => e.execCommand("mcePreview");
    e.ui.registry.addButton("preview", {
      icon: "preview",
      tooltip: "Preview",
      onAction: n
    }), e.ui.registry.addMenuItem("preview", {
      icon: "preview",
      text: "Preview",
      onAction: n
    });
  };
  var w = () => {
    s.add("preview", (e) => {
      f(e), b(e);
    });
  };
  w();
})();
const B = /* @__PURE__ */ x({
  __proto__: null,
  default: m
}, [m]);
export {
  B as i
};
//# sourceMappingURL=index-DyAAGvoi.js.map
