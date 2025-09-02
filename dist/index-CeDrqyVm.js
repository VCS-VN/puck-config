function it(g, A) {
  for (var d = 0; d < A.length; d++) {
    const E = A[d];
    if (typeof E != "string" && !Array.isArray(E)) {
      for (const i in E)
        if (i !== "default" && !(i in g)) {
          const p = Object.getOwnPropertyDescriptor(E, i);
          p && Object.defineProperty(g, i, p.get ? p : {
            enumerable: !0,
            get: () => E[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(g, Symbol.toStringTag, { value: "Module" }));
}
var S = {};
(function() {
  var g = tinymce.util.Tools.resolve("tinymce.PluginManager");
  const d = ((t) => (n) => t === n)(null), E = (t) => t, i = (t, n) => {
    const e = t.length, r = new Array(e);
    for (let c = 0; c < e; c++) {
      const u = t[c];
      r[c] = n(u, c);
    }
    return r;
  }, s = {
    aletter: "[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-׳ؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆༀཀ-ཇཉ-ཬྈ-ྌႠ-Ⴥა-ჺჼᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᯀ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〻〼ㄅ-ㄭㄱ-ㆎㆠ-ㆺꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐꞑꞠ-ꞩꟺ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]",
    midnumlet: "[-'\\.‘’․﹒＇．]",
    midletter: "[:··״‧︓﹕：]",
    midnum: "[±+*/,;;։،؍٬߸⁄︐︔﹐﹔，；]",
    numeric: "[0-9٠-٩٫۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹]",
    cr: "\\r",
    lf: "\\n",
    newline: "[\v\f\u2028\u2029]",
    extend: "[̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ऀ-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఁ-ఃా-ౄె-ైొ-్ౕౖౢౣಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣംഃാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳា-៓៝᠋-᠍ᢩᤠ-ᤫᤰ-᤻ᦰ-ᧀᧈᧉᨗ-ᨛᩕ-ᩞ᩠-᩿᩼ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-᯦᮪-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ᷀-ᷦ᷼-᷿‌‍⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲꙼꙽꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-꣄꣠-꣱ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꨩ-ꨶꩃꩌꩍꩻꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︦ﾞﾟ]",
    format: "[­؀-؃۝܏឴឵‎‏‪-‮⁠-⁤⁪-⁯\uFEFF￹-￻]",
    katakana: "[〱-〵゛゜゠-ヺー-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ﾝ]",
    extendnumlet: "[=_‿⁀⁔︳︴﹍-﹏＿∀-⋿<>]",
    punctuation: "[~№|!-*+-\\/:;?@\\[-`{}¡«·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰෴๏๚๛༄-༒༺-༽྅࿐-࿔࿙࿚၊-၏჻፡-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰⸱、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･]"
  }, o = {
    ALETTER: 0,
    MIDNUMLET: 1,
    MIDLETTER: 2,
    MIDNUM: 3,
    NUMERIC: 4,
    CR: 5,
    LF: 6,
    NEWLINE: 7,
    EXTEND: 8,
    FORMAT: 9,
    KATAKANA: 10,
    EXTENDNUMLET: 11,
    AT: 12,
    OTHER: 13
  }, b = [
    new RegExp(s.aletter),
    new RegExp(s.midnumlet),
    new RegExp(s.midletter),
    new RegExp(s.midnum),
    new RegExp(s.numeric),
    new RegExp(s.cr),
    new RegExp(s.lf),
    new RegExp(s.newline),
    new RegExp(s.extend),
    new RegExp(s.format),
    new RegExp(s.katakana),
    new RegExp(s.extendnumlet),
    new RegExp("@")
  ], F = "", O = new RegExp("^" + s.punctuation + "$"), v = /^\s+$/, h = b, K = o.OTHER, k = (t) => {
    let n = K;
    const e = h.length;
    for (let r = 0; r < e; ++r) {
      const c = h[r];
      if (c && c.test(t)) {
        n = r;
        break;
      }
    }
    return n;
  }, P = (t) => {
    const n = {};
    return (e) => {
      if (n[e])
        return n[e];
      {
        const r = t(e);
        return n[e] = r, r;
      }
    };
  }, $ = (t) => {
    const n = P(k);
    return i(t, n);
  }, j = (t, n) => {
    const e = t[n], r = t[n + 1];
    if (n < 0 || n > t.length - 1 && n !== 0 || e === o.ALETTER && r === o.ALETTER)
      return !1;
    const c = t[n + 2];
    if (e === o.ALETTER && (r === o.MIDLETTER || r === o.MIDNUMLET || r === o.AT) && c === o.ALETTER)
      return !1;
    const u = t[n - 1];
    return (e === o.MIDLETTER || e === o.MIDNUMLET || r === o.AT) && r === o.ALETTER && u === o.ALETTER || (e === o.NUMERIC || e === o.ALETTER) && (r === o.NUMERIC || r === o.ALETTER) || (e === o.MIDNUM || e === o.MIDNUMLET) && r === o.NUMERIC && u === o.NUMERIC || e === o.NUMERIC && (r === o.MIDNUM || r === o.MIDNUMLET) && c === o.NUMERIC || (e === o.EXTEND || e === o.FORMAT) && (r === o.ALETTER || r === o.NUMERIC || r === o.KATAKANA || r === o.EXTEND || r === o.FORMAT) || (r === o.EXTEND || r === o.FORMAT && (c === o.ALETTER || c === o.NUMERIC || c === o.KATAKANA || c === o.EXTEND || c === o.FORMAT)) && (e === o.ALETTER || e === o.NUMERIC || e === o.KATAKANA || e === o.EXTEND || e === o.FORMAT) || e === o.CR && r === o.LF ? !1 : e === o.NEWLINE || e === o.CR || e === o.LF || r === o.NEWLINE || r === o.CR || r === o.LF ? !0 : !(e === o.KATAKANA && r === o.KATAKANA || r === o.EXTENDNUMLET && (e === o.ALETTER || e === o.NUMERIC || e === o.KATAKANA || e === o.EXTENDNUMLET) || e === o.EXTENDNUMLET && (r === o.ALETTER || r === o.NUMERIC || r === o.KATAKANA) || e === o.AT);
  }, y = F, M = v, B = O, X = (t) => t === "http" || t === "https", _ = (t, n) => {
    let e;
    for (e = n; e < t.length && !M.test(t[e]); e++)
      ;
    return e;
  }, H = (t, n) => {
    const e = _(t, n + 1);
    return t.slice(n + 1, e).join(y).substr(0, 3) === "://" ? e : n;
  }, z = (t, n, e, r) => {
    const c = [], u = [];
    let l = [];
    for (let a = 0; a < e.length; ++a)
      if (l.push(t[a]), j(e, a)) {
        const T = n[a];
        if ((r.includeWhitespace || !M.test(T)) && (r.includePunctuation || !B.test(T))) {
          const f = a - l.length + 1, m = a + 1, lt = n.slice(f, m).join(y);
          if (X(lt)) {
            const x = H(n, a), at = t.slice(m, x);
            Array.prototype.push.apply(l, at), a = x;
          }
          c.push(l), u.push({
            start: f,
            end: m
          });
        }
        l = [];
      }
    return {
      words: c,
      indices: u
    };
  }, Z = () => ({
    includeWhitespace: !1,
    includePunctuation: !1
  }), q = (t, n, e) => {
    e = {
      ...Z(),
      ...e
    };
    const r = i(t, n), c = $(r);
    return z(t, r, c, e);
  }, G = (t, n, e) => q(t, n, e).words, V = (t) => t.replace(/\uFEFF/g, "");
  var Y = tinymce.util.Tools.resolve("tinymce.dom.TreeWalker");
  const C = (t, n) => {
    const e = n.getBlockElements(), r = n.getVoidElements(), c = (f) => e[f.nodeName] || r[f.nodeName], u = [];
    let l = "";
    const a = new Y(t, t);
    let T;
    for (; T = a.next(); )
      T.nodeType === 3 ? l += V(T.data) : c(T) && l.length && (u.push(l), l = "");
    return l.length && u.push(l), u;
  }, J = (t) => t.replace(/\u200B/g, ""), W = (t) => t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length, w = (t, n) => {
    const e = J(C(t, n).join(`
`));
    return G(e.split(""), E).length;
  }, U = (t, n) => {
    const e = C(t, n).join("");
    return W(e);
  }, I = (t, n) => {
    const e = C(t, n).join("").replace(/\s/g, "");
    return W(e);
  }, N = (t, n) => () => n(t.getBody(), t.schema), R = (t, n) => () => n(t.selection.getRng().cloneContents(), t.schema), L = (t) => N(t, w), Q = (t) => ({
    body: {
      getWordCount: L(t),
      getCharacterCount: N(t, U),
      getCharacterCountWithoutSpaces: N(t, I)
    },
    selection: {
      getWordCount: R(t, w),
      getCharacterCount: R(t, U),
      getCharacterCountWithoutSpaces: R(t, I)
    },
    getCount: L(t)
  }), tt = (t, n) => {
    t.windowManager.open({
      title: "Word Count",
      body: {
        type: "panel",
        items: [{
          type: "table",
          header: [
            "Count",
            "Document",
            "Selection"
          ],
          cells: [
            [
              "Words",
              String(n.body.getWordCount()),
              String(n.selection.getWordCount())
            ],
            [
              "Characters (no spaces)",
              String(n.body.getCharacterCountWithoutSpaces()),
              String(n.selection.getCharacterCountWithoutSpaces())
            ],
            [
              "Characters",
              String(n.body.getCharacterCount()),
              String(n.selection.getCharacterCount())
            ]
          ]
        }]
      },
      buttons: [{
        type: "cancel",
        name: "close",
        text: "Close",
        primary: !0
      }]
    });
  }, et = (t, n) => {
    t.addCommand("mceWordCount", () => tt(t, n));
  }, nt = (t, n) => {
    let e = null;
    return {
      cancel: () => {
        d(e) || (clearTimeout(e), e = null);
      },
      throttle: (...u) => {
        d(e) && (e = setTimeout(() => {
          e = null, t.apply(null, u);
        }, n));
      }
    };
  };
  var ot = tinymce.util.Tools.resolve("tinymce.util.Delay");
  const rt = (t, n) => {
    t.dispatch("wordCountUpdate", {
      wordCount: {
        words: n.body.getWordCount(),
        characters: n.body.getCharacterCount(),
        charactersWithoutSpaces: n.body.getCharacterCountWithoutSpaces()
      }
    });
  }, D = (t, n) => {
    rt(t, n);
  }, ct = (t, n, e) => {
    const r = nt(() => D(t, n), e);
    t.on("init", () => {
      D(t, n), ot.setEditorTimeout(t, () => {
        t.on("SetContent BeforeAddUndo Undo Redo ViewUpdate keyup", r.throttle);
      }, 0), t.on("remove", r.cancel);
    });
  }, st = (t) => {
    const n = () => t.execCommand("mceWordCount");
    t.ui.registry.addButton("wordcount", {
      tooltip: "Word count",
      icon: "character-count",
      onAction: n
    }), t.ui.registry.addMenuItem("wordcount", {
      text: "Word count",
      icon: "character-count",
      onAction: n
    });
  };
  var ut = (t = 300) => {
    g.add("wordcount", (n) => {
      const e = Q(n);
      return et(n, e), st(n), ct(n, e, t), e;
    });
  };
  ut();
})();
const Tt = /* @__PURE__ */ it({
  __proto__: null,
  default: S
}, [S]);
export {
  Tt as i
};
//# sourceMappingURL=index-CeDrqyVm.js.map
