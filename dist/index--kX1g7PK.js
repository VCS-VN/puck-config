import './assets/index.css';var Ep = (t) => {
  throw TypeError(t);
};
var Ff = (t, i, l) => i.has(t) || Ep("Cannot " + l);
var L = (t, i, l) => (Ff(t, i, "read from private field"), l ? l.call(t) : i.get(t)), qe = (t, i, l) => i.has(t) ? Ep("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, l), Re = (t, i, l, n) => (Ff(t, i, "write to private field"), n ? n.call(t, l) : i.set(t, l), l), st = (t, i, l) => (Ff(t, i, "access private method"), l);
var Nu = (t, i, l, n) => ({
  set _(u) {
    Re(t, i, u, l);
  },
  get _() {
    return L(t, i, n);
  }
});
import * as Ei from "react";
import vt, { forwardRef as sc, useState as Rt, useEffect as Xt, useMemo as ui, useRef as Xs, createElement as Vs, Component as Jx, createContext as Xx } from "react";
import { Box as ht, RadioCard as Ds, HStack as Tp, NumberInput as ca, IconButton as el, Drawer as Gt, Portal as Hv, Card as Ea, CardBody as Gv, Image as Ur, Text as Tt, Button as dl, CloseButton as eS, SimpleGrid as oc, Skeleton as Hu, CardFooter as tS, Pagination as Uf, Flex as Ut, useFilter as iS, useListCollection as lS, Combobox as Wl, Span as aS, InputGroup as rS, Input as qn, Link as $n, Table as Wi, Badge as Dd, DataList as Iu, useBreakpointValue as Ap, Stack as or, Icon as Ws, Heading as nS, chakra as ed, QrCode as Bf, ChakraProvider as sS, defaultSystem as oS } from "@chakra-ui/react";
import { FieldLabel as zr } from "@measured/puck";
import uS from "react-dom";
var Kv = typeof globalThis < "u" ? globalThis : typeof window < "u" || typeof window < "u" ? window : typeof self < "u" ? self : {};
function Ld(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var td = { exports: {} }, Ls = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Op;
function cS() {
  if (Op) return Ls;
  Op = 1;
  var t = vt, i = Symbol.for("react.element"), l = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(p, y, x) {
    var S, C = {}, M = null, N = null;
    x !== void 0 && (M = "" + x), y.key !== void 0 && (M = "" + y.key), y.ref !== void 0 && (N = y.ref);
    for (S in y) n.call(y, S) && !b.hasOwnProperty(S) && (C[S] = y[S]);
    if (p && p.defaultProps) for (S in y = p.defaultProps, y) C[S] === void 0 && (C[S] = y[S]);
    return { $$typeof: i, type: p, key: M, ref: N, props: C, _owner: u.current };
  }
  return Ls.Fragment = l, Ls.jsx = c, Ls.jsxs = c, Ls;
}
var Ns = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mp;
function bS() {
  return Mp || (Mp = 1, process.env.NODE_ENV !== "production" && function() {
    var t = vt, i = Symbol.for("react.element"), l = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), p = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), A = Symbol.iterator, I = "@@iterator";
    function g(T) {
      if (T === null || typeof T != "object")
        return null;
      var ie = A && T[A] || T[I];
      return typeof ie == "function" ? ie : null;
    }
    var G = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(T) {
      {
        for (var ie = arguments.length, fe = new Array(ie > 1 ? ie - 1 : 0), Le = 1; Le < ie; Le++)
          fe[Le - 1] = arguments[Le];
        F("error", T, fe);
      }
    }
    function F(T, ie, fe) {
      {
        var Le = G.ReactDebugCurrentFrame, Xe = Le.getStackAddendum();
        Xe !== "" && (ie += "%s", fe = fe.concat([Xe]));
        var ft = fe.map(function(dt) {
          return String(dt);
        });
        ft.unshift("Warning: " + ie), Function.prototype.apply.call(console[T], console, ft);
      }
    }
    var ue = !1, R = !1, se = !1, $ = !1, K = !1, z;
    z = Symbol.for("react.module.reference");
    function pe(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === n || T === b || K || T === u || T === x || T === S || $ || T === N || ue || R || se || typeof T == "object" && T !== null && (T.$$typeof === M || T.$$typeof === C || T.$$typeof === c || T.$$typeof === p || T.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === z || T.getModuleId !== void 0));
    }
    function Me(T, ie, fe) {
      var Le = T.displayName;
      if (Le)
        return Le;
      var Xe = ie.displayName || ie.name || "";
      return Xe !== "" ? fe + "(" + Xe + ")" : fe;
    }
    function Ye(T) {
      return T.displayName || "Context";
    }
    function Ae(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case n:
          return "Fragment";
        case l:
          return "Portal";
        case b:
          return "Profiler";
        case u:
          return "StrictMode";
        case x:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case p:
            var ie = T;
            return Ye(ie) + ".Consumer";
          case c:
            var fe = T;
            return Ye(fe._context) + ".Provider";
          case y:
            return Me(T, T.render, "ForwardRef");
          case C:
            var Le = T.displayName || null;
            return Le !== null ? Le : Ae(T.type) || "Memo";
          case M: {
            var Xe = T, ft = Xe._payload, dt = Xe._init;
            try {
              return Ae(dt(ft));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var He = Object.assign, bt = 0, Ce, Fe, Te, de, re, ve, B;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function J() {
      {
        if (bt === 0) {
          Ce = console.log, Fe = console.info, Te = console.warn, de = console.error, re = console.group, ve = console.groupCollapsed, B = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        bt++;
      }
    }
    function Z() {
      {
        if (bt--, bt === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: He({}, T, {
              value: Ce
            }),
            info: He({}, T, {
              value: Fe
            }),
            warn: He({}, T, {
              value: Te
            }),
            error: He({}, T, {
              value: de
            }),
            group: He({}, T, {
              value: re
            }),
            groupCollapsed: He({}, T, {
              value: ve
            }),
            groupEnd: He({}, T, {
              value: B
            })
          });
        }
        bt < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = G.ReactCurrentDispatcher, je;
    function me(T, ie, fe) {
      {
        if (je === void 0)
          try {
            throw Error();
          } catch (Xe) {
            var Le = Xe.stack.trim().match(/\n( *(at )?)/);
            je = Le && Le[1] || "";
          }
        return `
` + je + T;
      }
    }
    var ee = !1, Ee;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new Pe();
    }
    function Ue(T, ie) {
      if (!T || ee)
        return "";
      {
        var fe = Ee.get(T);
        if (fe !== void 0)
          return fe;
      }
      var Le;
      ee = !0;
      var Xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ft;
      ft = ye.current, ye.current = null, J();
      try {
        if (ie) {
          var dt = function() {
            throw Error();
          };
          if (Object.defineProperty(dt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(dt, []);
            } catch (ri) {
              Le = ri;
            }
            Reflect.construct(T, [], dt);
          } else {
            try {
              dt.call();
            } catch (ri) {
              Le = ri;
            }
            T.call(dt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ri) {
            Le = ri;
          }
          T();
        }
      } catch (ri) {
        if (ri && Le && typeof ri.stack == "string") {
          for (var lt = ri.stack.split(`
`), Qt = Le.stack.split(`
`), qt = lt.length - 1, Yt = Qt.length - 1; qt >= 1 && Yt >= 0 && lt[qt] !== Qt[Yt]; )
            Yt--;
          for (; qt >= 1 && Yt >= 0; qt--, Yt--)
            if (lt[qt] !== Qt[Yt]) {
              if (qt !== 1 || Yt !== 1)
                do
                  if (qt--, Yt--, Yt < 0 || lt[qt] !== Qt[Yt]) {
                    var ai = `
` + lt[qt].replace(" at new ", " at ");
                    return T.displayName && ai.includes("<anonymous>") && (ai = ai.replace("<anonymous>", T.displayName)), typeof T == "function" && Ee.set(T, ai), ai;
                  }
                while (qt >= 1 && Yt >= 0);
              break;
            }
        }
      } finally {
        ee = !1, ye.current = ft, Z(), Error.prepareStackTrace = Xe;
      }
      var Si = T ? T.displayName || T.name : "", pl = Si ? me(Si) : "";
      return typeof T == "function" && Ee.set(T, pl), pl;
    }
    function St(T, ie, fe) {
      return Ue(T, !1);
    }
    function we(T) {
      var ie = T.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function ce(T, ie, fe) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return Ue(T, we(T));
      if (typeof T == "string")
        return me(T);
      switch (T) {
        case x:
          return me("Suspense");
        case S:
          return me("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case y:
            return St(T.render);
          case C:
            return ce(T.type, ie, fe);
          case M: {
            var Le = T, Xe = Le._payload, ft = Le._init;
            try {
              return ce(ft(Xe), ie, fe);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, kt = {}, pi = G.ReactDebugCurrentFrame;
    function It(T) {
      if (T) {
        var ie = T._owner, fe = ce(T.type, T._source, ie ? ie.type : null);
        pi.setExtraStackFrame(fe);
      } else
        pi.setExtraStackFrame(null);
    }
    function yi(T, ie, fe, Le, Xe) {
      {
        var ft = Function.call.bind(Be);
        for (var dt in T)
          if (ft(T, dt)) {
            var lt = void 0;
            try {
              if (typeof T[dt] != "function") {
                var Qt = Error((Le || "React class") + ": " + fe + " type `" + dt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[dt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Qt.name = "Invariant Violation", Qt;
              }
              lt = T[dt](ie, dt, Le, fe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (qt) {
              lt = qt;
            }
            lt && !(lt instanceof Error) && (It(Xe), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", fe, dt, typeof lt), It(null)), lt instanceof Error && !(lt.message in kt) && (kt[lt.message] = !0, It(Xe), q("Failed %s type: %s", fe, lt.message), It(null));
          }
      }
    }
    var Ot = Array.isArray;
    function Ai(T) {
      return Ot(T);
    }
    function Hl(T) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, fe = ie && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return fe;
      }
    }
    function ba(T) {
      try {
        return Ii(T), !1;
      } catch {
        return !0;
      }
    }
    function Ii(T) {
      return "" + T;
    }
    function bi(T) {
      if (ba(T))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hl(T)), Ii(T);
    }
    var ll = G.ReactCurrentOwner, Vi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, al, wt;
    function Gl(T) {
      if (Be.call(T, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function Al(T) {
      if (Be.call(T, "key")) {
        var ie = Object.getOwnPropertyDescriptor(T, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function hl(T, ie) {
      typeof T.ref == "string" && ll.current;
    }
    function Ol(T, ie) {
      {
        var fe = function() {
          al || (al = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        fe.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: fe,
          configurable: !0
        });
      }
    }
    function W(T, ie) {
      {
        var fe = function() {
          wt || (wt = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        fe.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: fe,
          configurable: !0
        });
      }
    }
    var P = function(T, ie, fe, Le, Xe, ft, dt) {
      var lt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: T,
        key: ie,
        ref: fe,
        props: dt,
        // Record the component responsible for creating this element.
        _owner: ft
      };
      return lt._store = {}, Object.defineProperty(lt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(lt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.defineProperty(lt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
    };
    function le(T, ie, fe, Le, Xe) {
      {
        var ft, dt = {}, lt = null, Qt = null;
        fe !== void 0 && (bi(fe), lt = "" + fe), Al(ie) && (bi(ie.key), lt = "" + ie.key), Gl(ie) && (Qt = ie.ref, hl(ie, Xe));
        for (ft in ie)
          Be.call(ie, ft) && !Vi.hasOwnProperty(ft) && (dt[ft] = ie[ft]);
        if (T && T.defaultProps) {
          var qt = T.defaultProps;
          for (ft in qt)
            dt[ft] === void 0 && (dt[ft] = qt[ft]);
        }
        if (lt || Qt) {
          var Yt = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          lt && Ol(dt, Yt), Qt && W(dt, Yt);
        }
        return P(T, lt, Qt, Xe, Le, ll.current, dt);
      }
    }
    var ge = G.ReactCurrentOwner, he = G.ReactDebugCurrentFrame;
    function _e(T) {
      if (T) {
        var ie = T._owner, fe = ce(T.type, T._source, ie ? ie.type : null);
        he.setExtraStackFrame(fe);
      } else
        he.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Oe(T) {
      return typeof T == "object" && T !== null && T.$$typeof === i;
    }
    function Ie() {
      {
        if (ge.current) {
          var T = Ae(ge.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function Ge(T) {
      return "";
    }
    var oe = {};
    function fi(T) {
      {
        var ie = Ie();
        if (!ie) {
          var fe = typeof T == "string" ? T : T.displayName || T.name;
          fe && (ie = `

Check the top-level render call using <` + fe + ">.");
        }
        return ie;
      }
    }
    function Wt(T, ie) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var fe = fi(ie);
        if (oe[fe])
          return;
        oe[fe] = !0;
        var Le = "";
        T && T._owner && T._owner !== ge.current && (Le = " It was passed a child from " + Ae(T._owner.type) + "."), _e(T), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', fe, Le), _e(null);
      }
    }
    function Pt(T, ie) {
      {
        if (typeof T != "object")
          return;
        if (Ai(T))
          for (var fe = 0; fe < T.length; fe++) {
            var Le = T[fe];
            Oe(Le) && Wt(Le, ie);
          }
        else if (Oe(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var Xe = g(T);
          if (typeof Xe == "function" && Xe !== T.entries)
            for (var ft = Xe.call(T), dt; !(dt = ft.next()).done; )
              Oe(dt.value) && Wt(dt.value, ie);
        }
      }
    }
    function Dt(T) {
      {
        var ie = T.type;
        if (ie == null || typeof ie == "string")
          return;
        var fe;
        if (typeof ie == "function")
          fe = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === C))
          fe = ie.propTypes;
        else
          return;
        if (fe) {
          var Le = Ae(ie);
          yi(fe, T.props, "prop", Le, T);
        } else if (ie.PropTypes !== void 0 && !De) {
          De = !0;
          var Xe = Ae(ie);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Xe || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ke(T) {
      {
        for (var ie = Object.keys(T.props), fe = 0; fe < ie.length; fe++) {
          var Le = ie[fe];
          if (Le !== "children" && Le !== "key") {
            _e(T), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), _e(null);
            break;
          }
        }
        T.ref !== null && (_e(T), q("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var Pi = {};
    function ot(T, ie, fe, Le, Xe, ft) {
      {
        var dt = pe(T);
        if (!dt) {
          var lt = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (lt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Qt = Ge();
          Qt ? lt += Qt : lt += Ie();
          var qt;
          T === null ? qt = "null" : Ai(T) ? qt = "array" : T !== void 0 && T.$$typeof === i ? (qt = "<" + (Ae(T.type) || "Unknown") + " />", lt = " Did you accidentally export a JSX literal instead of a component?") : qt = typeof T, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", qt, lt);
        }
        var Yt = le(T, ie, fe, Xe, ft);
        if (Yt == null)
          return Yt;
        if (dt) {
          var ai = ie.children;
          if (ai !== void 0)
            if (Le)
              if (Ai(ai)) {
                for (var Si = 0; Si < ai.length; Si++)
                  Pt(ai[Si], T);
                Object.freeze && Object.freeze(ai);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pt(ai, T);
        }
        if (Be.call(ie, "key")) {
          var pl = Ae(T), ri = Object.keys(ie).filter(function(Vt) {
            return Vt !== "key";
          }), cr = ri.length > 0 ? "{key: someKey, " + ri.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pi[pl + cr]) {
            var es = ri.length > 0 ? "{" + ri.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, cr, pl, es, pl), Pi[pl + cr] = !0;
          }
        }
        return T === n ? Ke(Yt) : Dt(Yt), Yt;
      }
    }
    function xi(T, ie, fe) {
      return ot(T, ie, fe, !0);
    }
    function Xn(T, ie, fe) {
      return ot(T, ie, fe, !1);
    }
    var Ma = Xn, di = xi;
    Ns.Fragment = n, Ns.jsx = Ma, Ns.jsxs = di;
  }()), Ns;
}
process.env.NODE_ENV === "production" ? td.exports = cS() : td.exports = bS();
var m = td.exports;
const ur = {
  type: "custom",
  render: (t) => {
    var b, c;
    const { name: i, onChange: l, value: n } = t || {}, u = ((b = t == null ? void 0 : t.field) == null ? void 0 : b.label) || "Background Color";
    return /* @__PURE__ */ m.jsx(zr, { label: u, children: /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "color",
        name: i,
        value: (c = n == null ? void 0 : n.startsWith) != null && c.call(n, "#") ? n : "#ffffff",
        onChange: (p) => l == null ? void 0 : l(p.target.value)
      }
    ) });
  }
}, Qa = [
  { label: "8px", value: "8px" },
  { label: "16px", value: "16px" },
  { label: "24px", value: "24px" },
  { label: "32px", value: "32px" },
  { label: "40px", value: "40px" },
  { label: "48px", value: "48px" },
  { label: "56px", value: "56px" },
  { label: "64px", value: "64px" },
  { label: "72px", value: "72px" },
  { label: "80px", value: "80px" },
  { label: "88px", value: "88px" },
  { label: "96px", value: "96px" },
  { label: "104px", value: "104px" },
  { label: "112px", value: "112px" },
  { label: "120px", value: "120px" },
  { label: "128px", value: "128px" },
  { label: "136px", value: "136px" },
  { label: "144px", value: "144px" },
  { label: "152px", value: "152px" },
  { label: "160px", value: "160px" }
].map(({ value: t }, i) => ({ label: t, value: t, key: i })), Ht = {
  type: "object",
  objectFields: {
    spanCol: {
      label: "Grid Column Span",
      type: "number",
      min: 1,
      max: 12
    },
    startCol: {
      label: "Grid Column Start",
      type: "number",
      min: 1,
      max: 12
    },
    spanRow: {
      label: "Grid Row Span",
      type: "number",
      min: 1,
      max: 12
    },
    startRow: {
      label: "Grid Row Start",
      type: "number",
      min: 1,
      max: 12
    },
    justifySelf: {
      label: "Justify Self (Grid)",
      type: "select",
      options: [
        { label: "Auto", value: "auto" },
        { label: "Start", value: "start" },
        { label: "End", value: "end" },
        { label: "Center", value: "center" },
        { label: "Stretch", value: "stretch" }
      ]
    },
    alignSelf: {
      label: "Align Self (Flex/Grid)",
      type: "select",
      options: [
        { label: "Auto", value: "auto" },
        { label: "Start", value: "start" },
        { label: "End", value: "end" },
        { label: "Center", value: "center" },
        { label: "Stretch", value: "stretch" },
        { label: "Baseline", value: "baseline" }
      ]
    },
    grow: {
      label: "Flex Grow",
      type: "radio",
      options: [
        { label: "true", value: !0 },
        { label: "false", value: !1 }
      ]
    },
    shrink: {
      label: "Flex Shrink",
      type: "radio",
      options: [
        { label: "true", value: !0 },
        { label: "false", value: !1 }
      ]
    },
    basis: {
      label: "Flex Basis",
      type: "text"
    },
    paddingTop: {
      type: "select",
      label: "Padding Top",
      options: [{ label: "0px", value: "0px" }, ...Qa]
    },
    paddingRight: {
      type: "select",
      label: "Padding Right",
      options: [{ label: "0px", value: "0px" }, ...Qa]
    },
    paddingBottom: {
      type: "select",
      label: "Padding Bottom",
      options: [{ label: "0px", value: "0px" }, ...Qa]
    },
    paddingLeft: {
      type: "select",
      label: "Padding Left",
      options: [{ label: "0px", value: "0px" }, ...Qa]
    },
    marginTop: {
      type: "select",
      label: "Margin Top",
      options: [{ label: "0px", value: "0px" }, ...Qa]
    },
    marginRight: {
      type: "select",
      label: "Margin Right",
      options: [{ label: "0px", value: "0px" }, ...Qa]
    },
    marginBottom: {
      type: "select",
      label: "Margin Bottom",
      options: [{ label: "0px", value: "0px" }, ...Qa]
    },
    marginLeft: {
      type: "select",
      label: "Margin Left",
      options: [{ label: "0px", value: "0px" }, ...Qa]
    },
    bgColor: {
      label: "Background Color",
      ...ur
    },
    bgImage: {
      label: "Background Image",
      type: "text"
    },
    border: {
      label: "Border",
      type: "text"
    },
    borderRadius: {
      label: "Border Radius",
      type: "text"
    }
  }
}, Qv = sc(
  ({ children: t, className: i, layout: l, style: n }, u) => {
    const b = (c, p, y) => Math.max(p, Math.min(y, c));
    return /* @__PURE__ */ m.jsx(
      ht,
      {
        ref: u,
        className: i,
        gridColumn: l != null && l.spanCol ? `${l.startCol || "auto"} / span ${b(
          l.spanCol,
          1,
          12
        )}` : void 0,
        gridRow: l != null && l.spanRow ? `${l.startRow || "auto"} / span ${b(
          l.spanRow,
          1,
          12
        )}` : void 0,
        justifySelf: l == null ? void 0 : l.justifySelf,
        alignSelf: l == null ? void 0 : l.alignSelf,
        flexGrow: l != null && l.grow ? 1 : void 0,
        flexShrink: l != null && l.shrink ? 1 : void 0,
        flexBasis: l == null ? void 0 : l.basis,
        pt: l == null ? void 0 : l.paddingTop,
        pr: l == null ? void 0 : l.paddingRight,
        pb: l == null ? void 0 : l.paddingBottom,
        pl: l == null ? void 0 : l.paddingLeft,
        mt: l == null ? void 0 : l.marginTop,
        mr: l == null ? void 0 : l.marginRight,
        mb: l == null ? void 0 : l.marginBottom,
        ml: l == null ? void 0 : l.marginLeft,
        bg: l == null ? void 0 : l.bgColor,
        bgImage: l == null ? void 0 : l.bgImage,
        border: l == null ? void 0 : l.border,
        borderRadius: l == null ? void 0 : l.borderRadius,
        style: n,
        children: t
      }
    );
  }
);
Qv.displayName = "Layout";
function Ti(t) {
  var l;
  const i = {
    paddingTop: Ht.objectFields.paddingTop,
    paddingRight: Ht.objectFields.paddingRight,
    paddingBottom: Ht.objectFields.paddingBottom,
    paddingLeft: Ht.objectFields.paddingLeft,
    marginTop: Ht.objectFields.marginTop,
    marginRight: Ht.objectFields.marginRight,
    marginBottom: Ht.objectFields.marginBottom,
    marginLeft: Ht.objectFields.marginLeft,
    bgColor: Ht.objectFields.bgColor,
    bgImage: Ht.objectFields.bgImage,
    border: Ht.objectFields.border,
    borderRadius: Ht.objectFields.borderRadius
  };
  return {
    ...t,
    fields: {
      ...t.fields,
      layout: Ht
    },
    defaultProps: {
      ...t.defaultProps,
      layout: {
        spanCol: 1,
        startCol: void 0,
        spanRow: 1,
        startRow: void 0,
        grow: !1,
        shrink: !0,
        basis: "auto",
        paddingTop: "0px",
        paddingRight: "0px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        marginTop: "0px",
        marginRight: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        bgColor: "#ffffff",
        bgImage: "",
        border: "none",
        borderRadius: "0",
        ...(l = t.defaultProps) == null ? void 0 : l.layout
      }
    },
    resolveFields: (n, u) => {
      var y;
      const b = (y = u.parent) == null ? void 0 : y.type;
      let c = i;
      b === "Grid" ? c = {
        ...i,
        spanCol: Ht.objectFields.spanCol,
        startCol: Ht.objectFields.startCol,
        spanRow: Ht.objectFields.spanRow,
        startRow: Ht.objectFields.startRow,
        justifySelf: Ht.objectFields.justifySelf,
        alignSelf: Ht.objectFields.alignSelf
      } : b === "Flex" && (c = {
        ...i,
        grow: Ht.objectFields.grow,
        shrink: Ht.objectFields.shrink,
        basis: Ht.objectFields.basis,
        alignSelf: Ht.objectFields.alignSelf
      });
      const p = {
        ...Ht,
        objectFields: c
      };
      return {
        ...t.fields,
        layout: p
      };
    },
    inline: !0,
    render: (n) => {
      var u, b, c, p, y, x, S, C;
      return /* @__PURE__ */ m.jsxs(
        Qv,
        {
          className: n.className,
          layout: n.layout,
          ref: (u = n.puck) == null ? void 0 : u.dragRef,
          style: {
            ...n.style || {},
            position: (b = n.puck) != null && b.isEditing ? ((c = n.style) == null ? void 0 : c.position) ?? "relative" : (p = n.style) == null ? void 0 : p.position,
            cursor: (y = n.puck) != null && y.isEditing ? "grab" : (x = n.style) == null ? void 0 : x.cursor,
            outline: (S = n.puck) != null && S.isEditing ? "1px dashed rgba(0,0,0,0.15)" : void 0
          },
          children: [
            (C = n.puck) != null && C.isEditing ? /* @__PURE__ */ m.jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  top: 4,
                  right: 4,
                  fontSize: 10,
                  background: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  borderRadius: 4,
                  padding: "2px 6px",
                  pointerEvents: "none",
                  userSelect: "none"
                },
                children: "Drag"
              }
            ) : null,
            t.render(n)
          ]
        }
      );
    }
  };
}
var Gu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Gu.exports;
(function(t, i) {
  (function() {
    var l, n = "4.17.21", u = 200, b = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", p = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", x = 500, S = "__lodash_placeholder__", C = 1, M = 2, N = 4, A = 1, I = 2, g = 1, G = 2, q = 4, F = 8, ue = 16, R = 32, se = 64, $ = 128, K = 256, z = 512, pe = 30, Me = "...", Ye = 800, Ae = 16, He = 1, bt = 2, Ce = 3, Fe = 1 / 0, Te = 9007199254740991, de = 17976931348623157e292, re = NaN, ve = 4294967295, B = ve - 1, ne = ve >>> 1, J = [
      ["ary", $],
      ["bind", g],
      ["bindKey", G],
      ["curry", F],
      ["curryRight", ue],
      ["flip", z],
      ["partial", R],
      ["partialRight", se],
      ["rearg", K]
    ], Z = "[object Arguments]", ye = "[object Array]", je = "[object AsyncFunction]", me = "[object Boolean]", ee = "[object Date]", Ee = "[object DOMException]", Pe = "[object Error]", Ue = "[object Function]", St = "[object GeneratorFunction]", we = "[object Map]", ce = "[object Number]", Be = "[object Null]", kt = "[object Object]", pi = "[object Promise]", It = "[object Proxy]", yi = "[object RegExp]", Ot = "[object Set]", Ai = "[object String]", Hl = "[object Symbol]", ba = "[object Undefined]", Ii = "[object WeakMap]", bi = "[object WeakSet]", ll = "[object ArrayBuffer]", Vi = "[object DataView]", al = "[object Float32Array]", wt = "[object Float64Array]", Gl = "[object Int8Array]", Al = "[object Int16Array]", hl = "[object Int32Array]", Ol = "[object Uint8Array]", W = "[object Uint8ClampedArray]", P = "[object Uint16Array]", le = "[object Uint32Array]", ge = /\b__p \+= '';/g, he = /\b(__p \+=) '' \+/g, _e = /(__e\(.*?\)|\b__t\)) \+\n'';/g, De = /&(?:amp|lt|gt|quot|#39);/g, Oe = /[&<>"']/g, Ie = RegExp(De.source), Ge = RegExp(Oe.source), oe = /<%-([\s\S]+?)%>/g, fi = /<%([\s\S]+?)%>/g, Wt = /<%=([\s\S]+?)%>/g, Pt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Dt = /^\w*$/, Ke = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pi = /[\\^$.*+?()[\]{}|]/g, ot = RegExp(Pi.source), xi = /^\s+/, Xn = /\s/, Ma = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, di = /\{\n\/\* \[wrapped with (.+)\] \*/, T = /,? & /, ie = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, fe = /[()=,{}\[\]\/\s]/, Le = /\\(\\)?/g, Xe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ft = /\w*$/, dt = /^[-+]0x[0-9a-f]+$/i, lt = /^0b[01]+$/i, Qt = /^\[object .+?Constructor\]$/, qt = /^0o[0-7]+$/i, Yt = /^(?:0|[1-9]\d*)$/, ai = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Si = /($^)/, pl = /['\n\r\u2028\u2029\\]/g, ri = "\\ud800-\\udfff", cr = "\\u0300-\\u036f", es = "\\ufe20-\\ufe2f", Vt = "\\u20d0-\\u20ff", Kr = cr + es + Vt, fo = "\\u2700-\\u27bf", ts = "a-z\\xdf-\\xf6\\xf8-\\xff", ho = "\\xac\\xb1\\xd7\\xf7", Lc = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Nc = "\\u2000-\\u206f", Ic = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", po = "A-Z\\xc0-\\xd6\\xd8-\\xde", vo = "\\ufe0e\\ufe0f", go = ho + Lc + Nc + Ic, Qr = "['’]", mo = "[" + ri + "]", yo = "[" + go + "]", Zr = "[" + Kr + "]", wo = "\\d+", _o = "[" + fo + "]", xo = "[" + ts + "]", Da = "[^" + ri + go + wo + fo + ts + po + "]", La = "\\ud83c[\\udffb-\\udfff]", So = "(?:" + Zr + "|" + La + ")", Na = "[^" + ri + "]", rl = "(?:\\ud83c[\\udde6-\\uddff]){2}", is = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ia = "[" + po + "]", ko = "\\u200d", Ro = "(?:" + xo + "|" + Da + ")", Pc = "(?:" + Ia + "|" + Da + ")", Co = "(?:" + Qr + "(?:d|ll|m|re|s|t|ve))?", Eo = "(?:" + Qr + "(?:D|LL|M|RE|S|T|VE))?", To = So + "?", Jr = "[" + vo + "]?", jc = "(?:" + ko + "(?:" + [Na, rl, is].join("|") + ")" + Jr + To + ")*", Ao = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Fc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Oo = Jr + To + jc, Uc = "(?:" + [_o, rl, is].join("|") + ")" + Oo, Bc = "(?:" + [Na + Zr + "?", Zr, rl, is, mo].join("|") + ")", Wc = RegExp(Qr, "g"), qc = RegExp(Zr, "g"), ls = RegExp(La + "(?=" + La + ")|" + Bc + Oo, "g"), $c = RegExp([
      Ia + "?" + xo + "+" + Co + "(?=" + [yo, Ia, "$"].join("|") + ")",
      Pc + "+" + Eo + "(?=" + [yo, Ia + Ro, "$"].join("|") + ")",
      Ia + "?" + Ro + "+" + Co,
      Ia + "+" + Eo,
      Fc,
      Ao,
      wo,
      Uc
    ].join("|"), "g"), Vc = RegExp("[" + ko + ri + Kr + vo + "]"), zc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Yc = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Hc = -1, jt = {};
    jt[al] = jt[wt] = jt[Gl] = jt[Al] = jt[hl] = jt[Ol] = jt[W] = jt[P] = jt[le] = !0, jt[Z] = jt[ye] = jt[ll] = jt[me] = jt[Vi] = jt[ee] = jt[Pe] = jt[Ue] = jt[we] = jt[ce] = jt[kt] = jt[yi] = jt[Ot] = jt[Ai] = jt[Ii] = !1;
    var Lt = {};
    Lt[Z] = Lt[ye] = Lt[ll] = Lt[Vi] = Lt[me] = Lt[ee] = Lt[al] = Lt[wt] = Lt[Gl] = Lt[Al] = Lt[hl] = Lt[we] = Lt[ce] = Lt[kt] = Lt[yi] = Lt[Ot] = Lt[Ai] = Lt[Hl] = Lt[Ol] = Lt[W] = Lt[P] = Lt[le] = !0, Lt[Pe] = Lt[Ue] = Lt[Ii] = !1;
    var Gc = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, as = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, rs = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Kc = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Mo = parseFloat, Do = parseInt, Lo = typeof window == "object" && window && window.Object === Object && window, Qc = typeof self == "object" && self && self.Object === Object && self, vi = Lo || Qc || Function("return this")(), ns = i && !i.nodeType && i, Kl = ns && !0 && t && !t.nodeType && t, Ft = Kl && Kl.exports === ns, fa = Ft && Lo.process, wi = function() {
      try {
        var j = Kl && Kl.require && Kl.require("util").types;
        return j || fa && fa.binding && fa.binding("util");
      } catch {
      }
    }(), No = wi && wi.isArrayBuffer, ss = wi && wi.isDate, Io = wi && wi.isMap, Po = wi && wi.isRegExp, br = wi && wi.isSet, Ml = wi && wi.isTypedArray;
    function ki(j, Q, V) {
      switch (V.length) {
        case 0:
          return j.call(Q);
        case 1:
          return j.call(Q, V[0]);
        case 2:
          return j.call(Q, V[0], V[1]);
        case 3:
          return j.call(Q, V[0], V[1], V[2]);
      }
      return j.apply(Q, V);
    }
    function Zc(j, Q, V, ke) {
      for (var Qe = -1, xt = j == null ? 0 : j.length; ++Qe < xt; ) {
        var ni = j[Qe];
        Q(ke, ni, V(ni), j);
      }
      return ke;
    }
    function ei(j, Q) {
      for (var V = -1, ke = j == null ? 0 : j.length; ++V < ke && Q(j[V], V, j) !== !1; )
        ;
      return j;
    }
    function Jc(j, Q) {
      for (var V = j == null ? 0 : j.length; V-- && Q(j[V], V, j) !== !1; )
        ;
      return j;
    }
    function Xr(j, Q) {
      for (var V = -1, ke = j == null ? 0 : j.length; ++V < ke; )
        if (!Q(j[V], V, j))
          return !1;
      return !0;
    }
    function Ql(j, Q) {
      for (var V = -1, ke = j == null ? 0 : j.length, Qe = 0, xt = []; ++V < ke; ) {
        var ni = j[V];
        Q(ni, V, j) && (xt[Qe++] = ni);
      }
      return xt;
    }
    function en(j, Q) {
      var V = j == null ? 0 : j.length;
      return !!V && Pa(j, Q, 0) > -1;
    }
    function os(j, Q, V) {
      for (var ke = -1, Qe = j == null ? 0 : j.length; ++ke < Qe; )
        if (V(Q, j[ke]))
          return !0;
      return !1;
    }
    function Mt(j, Q) {
      for (var V = -1, ke = j == null ? 0 : j.length, Qe = Array(ke); ++V < ke; )
        Qe[V] = Q(j[V], V, j);
      return Qe;
    }
    function vl(j, Q) {
      for (var V = -1, ke = Q.length, Qe = j.length; ++V < ke; )
        j[Qe + V] = Q[V];
      return j;
    }
    function us(j, Q, V, ke) {
      var Qe = -1, xt = j == null ? 0 : j.length;
      for (ke && xt && (V = j[++Qe]); ++Qe < xt; )
        V = Q(V, j[Qe], Qe, j);
      return V;
    }
    function Xc(j, Q, V, ke) {
      var Qe = j == null ? 0 : j.length;
      for (ke && Qe && (V = j[--Qe]); Qe--; )
        V = Q(V, j[Qe], Qe, j);
      return V;
    }
    function cs(j, Q) {
      for (var V = -1, ke = j == null ? 0 : j.length; ++V < ke; )
        if (Q(j[V], V, j))
          return !0;
      return !1;
    }
    var jo = bs("length");
    function eb(j) {
      return j.split("");
    }
    function tb(j) {
      return j.match(ie) || [];
    }
    function Fo(j, Q, V) {
      var ke;
      return V(j, function(Qe, xt, ni) {
        if (Q(Qe, xt, ni))
          return ke = xt, !1;
      }), ke;
    }
    function tn(j, Q, V, ke) {
      for (var Qe = j.length, xt = V + (ke ? 1 : -1); ke ? xt-- : ++xt < Qe; )
        if (Q(j[xt], xt, j))
          return xt;
      return -1;
    }
    function Pa(j, Q, V) {
      return Q === Q ? zo(j, Q, V) : tn(j, Bo, V);
    }
    function Uo(j, Q, V, ke) {
      for (var Qe = V - 1, xt = j.length; ++Qe < xt; )
        if (ke(j[Qe], Q))
          return Qe;
      return -1;
    }
    function Bo(j) {
      return j !== j;
    }
    function da(j, Q) {
      var V = j == null ? 0 : j.length;
      return V ? ds(j, Q) / V : re;
    }
    function bs(j) {
      return function(Q) {
        return Q == null ? l : Q[j];
      };
    }
    function fr(j) {
      return function(Q) {
        return j == null ? l : j[Q];
      };
    }
    function Wo(j, Q, V, ke, Qe) {
      return Qe(j, function(xt, ni, ut) {
        V = ke ? (ke = !1, xt) : Q(V, xt, ni, ut);
      }), V;
    }
    function fs(j, Q) {
      var V = j.length;
      for (j.sort(Q); V--; )
        j[V] = j[V].value;
      return j;
    }
    function ds(j, Q) {
      for (var V, ke = -1, Qe = j.length; ++ke < Qe; ) {
        var xt = Q(j[ke]);
        xt !== l && (V = V === l ? xt : V + xt);
      }
      return V;
    }
    function hs(j, Q) {
      for (var V = -1, ke = Array(j); ++V < j; )
        ke[V] = Q(V);
      return ke;
    }
    function ib(j, Q) {
      return Mt(Q, function(V) {
        return [V, j[V]];
      });
    }
    function qo(j) {
      return j && j.slice(0, ln(j) + 1).replace(xi, "");
    }
    function Oi(j) {
      return function(Q) {
        return j(Q);
      };
    }
    function ps(j, Q) {
      return Mt(Q, function(V) {
        return j[V];
      });
    }
    function ja(j, Q) {
      return j.has(Q);
    }
    function Nt(j, Q) {
      for (var V = -1, ke = j.length; ++V < ke && Pa(Q, j[V], 0) > -1; )
        ;
      return V;
    }
    function $o(j, Q) {
      for (var V = j.length; V-- && Pa(Q, j[V], 0) > -1; )
        ;
      return V;
    }
    function lb(j, Q) {
      for (var V = j.length, ke = 0; V--; )
        j[V] === Q && ++ke;
      return ke;
    }
    var Vo = fr(Gc), ab = fr(as);
    function rb(j) {
      return "\\" + Kc[j];
    }
    function nb(j, Q) {
      return j == null ? l : j[Q];
    }
    function gl(j) {
      return Vc.test(j);
    }
    function sb(j) {
      return zc.test(j);
    }
    function ob(j) {
      for (var Q, V = []; !(Q = j.next()).done; )
        V.push(Q.value);
      return V;
    }
    function vs(j) {
      var Q = -1, V = Array(j.size);
      return j.forEach(function(ke, Qe) {
        V[++Q] = [Qe, ke];
      }), V;
    }
    function dr(j, Q) {
      return function(V) {
        return j(Q(V));
      };
    }
    function nl(j, Q) {
      for (var V = -1, ke = j.length, Qe = 0, xt = []; ++V < ke; ) {
        var ni = j[V];
        (ni === Q || ni === S) && (j[V] = S, xt[Qe++] = V);
      }
      return xt;
    }
    function Fa(j) {
      var Q = -1, V = Array(j.size);
      return j.forEach(function(ke) {
        V[++Q] = ke;
      }), V;
    }
    function ub(j) {
      var Q = -1, V = Array(j.size);
      return j.forEach(function(ke) {
        V[++Q] = [ke, ke];
      }), V;
    }
    function zo(j, Q, V) {
      for (var ke = V - 1, Qe = j.length; ++ke < Qe; )
        if (j[ke] === Q)
          return ke;
      return -1;
    }
    function cb(j, Q, V) {
      for (var ke = V + 1; ke--; )
        if (j[ke] === Q)
          return ke;
      return ke;
    }
    function Zl(j) {
      return gl(j) ? fb(j) : jo(j);
    }
    function ji(j) {
      return gl(j) ? db(j) : eb(j);
    }
    function ln(j) {
      for (var Q = j.length; Q-- && Xn.test(j.charAt(Q)); )
        ;
      return Q;
    }
    var bb = fr(rs);
    function fb(j) {
      for (var Q = ls.lastIndex = 0; ls.test(j); )
        ++Q;
      return Q;
    }
    function db(j) {
      return j.match(ls) || [];
    }
    function hb(j) {
      return j.match($c) || [];
    }
    var pb = function j(Q) {
      Q = Q == null ? vi : Ua.defaults(vi.Object(), Q, Ua.pick(vi, Yc));
      var V = Q.Array, ke = Q.Date, Qe = Q.Error, xt = Q.Function, ni = Q.Math, ut = Q.Object, Dl = Q.RegExp, Yo = Q.String, zi = Q.TypeError, hr = V.prototype, Ho = xt.prototype, Ba = ut.prototype, an = Q["__core-js_shared__"], pr = Ho.toString, Ct = Ba.hasOwnProperty, vb = 0, Go = function() {
        var e = /[^.]+$/.exec(an && an.keys && an.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), rn = Ba.toString, gb = pr.call(ut), mb = vi._, yb = Dl(
        "^" + pr.call(Ct).replace(Pi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), nn = Ft ? Q.Buffer : l, Jl = Q.Symbol, sn = Q.Uint8Array, Ko = nn ? nn.allocUnsafe : l, on = dr(ut.getPrototypeOf, ut), Qo = ut.create, Zo = Ba.propertyIsEnumerable, ha = hr.splice, Jo = Jl ? Jl.isConcatSpreadable : l, vr = Jl ? Jl.iterator : l, pa = Jl ? Jl.toStringTag : l, un = function() {
        try {
          var e = Cr(ut, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), wb = Q.clearTimeout !== vi.clearTimeout && Q.clearTimeout, _b = ke && ke.now !== vi.Date.now && ke.now, xb = Q.setTimeout !== vi.setTimeout && Q.setTimeout, cn = ni.ceil, gr = ni.floor, bn = ut.getOwnPropertySymbols, Xo = nn ? nn.isBuffer : l, mr = Q.isFinite, Wa = hr.join, fn = dr(ut.keys, ut), ti = ni.max, Zt = ni.min, eu = ke.now, tu = Q.parseInt, iu = ni.random, Sb = hr.reverse, gs = Cr(Q, "DataView"), yr = Cr(Q, "Map"), ms = Cr(Q, "Promise"), qa = Cr(Q, "Set"), wr = Cr(Q, "WeakMap"), _r = Cr(ut, "create"), dn = wr && new wr(), $a = {}, kb = Er(gs), Rb = Er(yr), Cb = Er(ms), Eb = Er(qa), Tb = Er(wr), hn = Jl ? Jl.prototype : l, xr = hn ? hn.valueOf : l, lu = hn ? hn.toString : l;
      function _(e) {
        if (ii(e) && !Je(e) && !(e instanceof at)) {
          if (e instanceof Yi)
            return e;
          if (Ct.call(e, "__wrapped__"))
            return Yh(e);
        }
        return new Yi(e);
      }
      var Va = /* @__PURE__ */ function() {
        function e() {
        }
        return function(a) {
          if (!Jt(a))
            return {};
          if (Qo)
            return Qo(a);
          e.prototype = a;
          var s = new e();
          return e.prototype = l, s;
        };
      }();
      function pn() {
      }
      function Yi(e, a) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = l;
      }
      _.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: oe,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: fi,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Wt,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _
        }
      }, _.prototype = pn.prototype, _.prototype.constructor = _, Yi.prototype = Va(pn.prototype), Yi.prototype.constructor = Yi;
      function at(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ve, this.__views__ = [];
      }
      function Ab() {
        var e = new at(this.__wrapped__);
        return e.__actions__ = Gi(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Gi(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Gi(this.__views__), e;
      }
      function Ob() {
        if (this.__filtered__) {
          var e = new at(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Mb() {
        var e = this.__wrapped__.value(), a = this.__dir__, s = Je(e), f = a < 0, v = s ? e.length : 0, k = Ry(0, v, this.__views__), E = k.start, D = k.end, U = D - E, X = f ? D : E - 1, te = this.__iteratees__, ae = te.length, xe = 0, Ne = Zt(U, this.__takeCount__);
        if (!s || !f && v == U && Ne == U)
          return ph(e, this.__actions__);
        var $e = [];
        e:
          for (; U-- && xe < Ne; ) {
            X += a;
            for (var nt = -1, Ve = e[X]; ++nt < ae; ) {
              var pt = te[nt], mt = pt.iteratee, cl = pt.type, Bi = mt(Ve);
              if (cl == bt)
                Ve = Bi;
              else if (!Bi) {
                if (cl == He)
                  continue e;
                break e;
              }
            }
            $e[xe++] = Ve;
          }
        return $e;
      }
      at.prototype = Va(pn.prototype), at.prototype.constructor = at;
      function Ll(e) {
        var a = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
          var f = e[a];
          this.set(f[0], f[1]);
        }
      }
      function vn() {
        this.__data__ = _r ? _r(null) : {}, this.size = 0;
      }
      function Db(e) {
        var a = this.has(e) && delete this.__data__[e];
        return this.size -= a ? 1 : 0, a;
      }
      function Lb(e) {
        var a = this.__data__;
        if (_r) {
          var s = a[e];
          return s === y ? l : s;
        }
        return Ct.call(a, e) ? a[e] : l;
      }
      function Nb(e) {
        var a = this.__data__;
        return _r ? a[e] !== l : Ct.call(a, e);
      }
      function Ib(e, a) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = _r && a === l ? y : a, this;
      }
      Ll.prototype.clear = vn, Ll.prototype.delete = Db, Ll.prototype.get = Lb, Ll.prototype.has = Nb, Ll.prototype.set = Ib;
      function Nl(e) {
        var a = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
          var f = e[a];
          this.set(f[0], f[1]);
        }
      }
      function Pb() {
        this.__data__ = [], this.size = 0;
      }
      function au(e) {
        var a = this.__data__, s = Hi(a, e);
        if (s < 0)
          return !1;
        var f = a.length - 1;
        return s == f ? a.pop() : ha.call(a, s, 1), --this.size, !0;
      }
      function jb(e) {
        var a = this.__data__, s = Hi(a, e);
        return s < 0 ? l : a[s][1];
      }
      function Fb(e) {
        return Hi(this.__data__, e) > -1;
      }
      function ru(e, a) {
        var s = this.__data__, f = Hi(s, e);
        return f < 0 ? (++this.size, s.push([e, a])) : s[f][1] = a, this;
      }
      Nl.prototype.clear = Pb, Nl.prototype.delete = au, Nl.prototype.get = jb, Nl.prototype.has = Fb, Nl.prototype.set = ru;
      function Il(e) {
        var a = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
          var f = e[a];
          this.set(f[0], f[1]);
        }
      }
      function Ub() {
        this.size = 0, this.__data__ = {
          hash: new Ll(),
          map: new (yr || Nl)(),
          string: new Ll()
        };
      }
      function Bb(e) {
        var a = ku(this, e).delete(e);
        return this.size -= a ? 1 : 0, a;
      }
      function Xl(e) {
        return ku(this, e).get(e);
      }
      function nu(e) {
        return ku(this, e).has(e);
      }
      function Wb(e, a) {
        var s = ku(this, e), f = s.size;
        return s.set(e, a), this.size += s.size == f ? 0 : 1, this;
      }
      Il.prototype.clear = Ub, Il.prototype.delete = Bb, Il.prototype.get = Xl, Il.prototype.has = nu, Il.prototype.set = Wb;
      function va(e) {
        var a = -1, s = e == null ? 0 : e.length;
        for (this.__data__ = new Il(); ++a < s; )
          this.add(e[a]);
      }
      function qb(e) {
        return this.__data__.set(e, y), this;
      }
      function be(e) {
        return this.__data__.has(e);
      }
      va.prototype.add = va.prototype.push = qb, va.prototype.has = be;
      function sl(e) {
        var a = this.__data__ = new Nl(e);
        this.size = a.size;
      }
      function $b() {
        this.__data__ = new Nl(), this.size = 0;
      }
      function su(e) {
        var a = this.__data__, s = a.delete(e);
        return this.size = a.size, s;
      }
      function _t(e) {
        return this.__data__.get(e);
      }
      function gn(e) {
        return this.__data__.has(e);
      }
      function ou(e, a) {
        var s = this.__data__;
        if (s instanceof Nl) {
          var f = s.__data__;
          if (!yr || f.length < u - 1)
            return f.push([e, a]), this.size = ++s.size, this;
          s = this.__data__ = new Il(f);
        }
        return s.set(e, a), this.size = s.size, this;
      }
      sl.prototype.clear = $b, sl.prototype.delete = su, sl.prototype.get = _t, sl.prototype.has = gn, sl.prototype.set = ou;
      function mn(e, a) {
        var s = Je(e), f = !s && Tr(e), v = !s && !f && Ka(e), k = !s && !f && !v && kn(e), E = s || f || v || k, D = E ? hs(e.length, Yo) : [], U = D.length;
        for (var X in e)
          (a || Ct.call(e, X)) && !(E && // Safari 9 has enumerable `arguments.length` in strict mode.
          (X == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          v && (X == "offset" || X == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          k && (X == "buffer" || X == "byteLength" || X == "byteOffset") || // Skip index properties.
          _a(X, U))) && D.push(X);
        return D;
      }
      function uu(e) {
        var a = e.length;
        return a ? e[af(0, a - 1)] : l;
      }
      function Vb(e, a) {
        return Ru(Gi(e), ga(a, 0, e.length));
      }
      function zb(e) {
        return Ru(Gi(e));
      }
      function ys(e, a, s) {
        (s !== l && !Ul(e[a], s) || s === l && !(a in e)) && Pl(e, a, s);
      }
      function Sr(e, a, s) {
        var f = e[a];
        (!(Ct.call(e, a) && Ul(f, s)) || s === l && !(a in e)) && Pl(e, a, s);
      }
      function Hi(e, a) {
        for (var s = e.length; s--; )
          if (Ul(e[s][0], a))
            return s;
        return -1;
      }
      function Yb(e, a, s, f) {
        return ea(e, function(v, k, E) {
          a(f, v, s(v), E);
        }), f;
      }
      function ws(e, a) {
        return e && ia(a, _i(a), e);
      }
      function Hb(e, a) {
        return e && ia(a, Qi(a), e);
      }
      function Pl(e, a, s) {
        a == "__proto__" && un ? un(e, a, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : e[a] = s;
      }
      function yn(e, a) {
        for (var s = -1, f = a.length, v = V(f), k = e == null; ++s < f; )
          v[s] = k ? l : Af(e, a[s]);
        return v;
      }
      function ga(e, a, s) {
        return e === e && (s !== l && (e = e <= s ? e : s), a !== l && (e = e >= a ? e : a)), e;
      }
      function Fi(e, a, s, f, v, k) {
        var E, D = a & C, U = a & M, X = a & N;
        if (s && (E = v ? s(e, f, v, k) : s(e)), E !== l)
          return E;
        if (!Jt(e))
          return e;
        var te = Je(e);
        if (te) {
          if (E = Ey(e), !D)
            return Gi(e, E);
        } else {
          var ae = Mi(e), xe = ae == Ue || ae == St;
          if (Ka(e))
            return mh(e, D);
          if (ae == kt || ae == Z || xe && !v) {
            if (E = U || xe ? {} : jh(e), !D)
              return U ? vy(e, Hb(E, e)) : py(e, ws(E, e));
          } else {
            if (!Lt[ae])
              return v ? e : {};
            E = Ty(e, ae, D);
          }
        }
        k || (k = new sl());
        var Ne = k.get(e);
        if (Ne)
          return Ne;
        k.set(e, E), fp(e) ? e.forEach(function(Ve) {
          E.add(Fi(Ve, a, s, Ve, e, k));
        }) : cp(e) && e.forEach(function(Ve, pt) {
          E.set(pt, Fi(Ve, a, s, pt, e, k));
        });
        var $e = X ? U ? pf : hf : U ? Qi : _i, nt = te ? l : $e(e);
        return ei(nt || e, function(Ve, pt) {
          nt && (pt = Ve, Ve = e[pt]), Sr(E, pt, Fi(Ve, a, s, pt, e, k));
        }), E;
      }
      function _s(e) {
        var a = _i(e);
        return function(s) {
          return cu(s, e, a);
        };
      }
      function cu(e, a, s) {
        var f = s.length;
        if (e == null)
          return !f;
        for (e = ut(e); f--; ) {
          var v = s[f], k = a[v], E = e[v];
          if (E === l && !(v in e) || !k(E))
            return !1;
        }
        return !0;
      }
      function ml(e, a, s) {
        if (typeof e != "function")
          throw new zi(c);
        return Os(function() {
          e.apply(l, s);
        }, a);
      }
      function za(e, a, s, f) {
        var v = -1, k = en, E = !0, D = e.length, U = [], X = a.length;
        if (!D)
          return U;
        s && (a = Mt(a, Oi(s))), f ? (k = os, E = !1) : a.length >= u && (k = ja, E = !1, a = new va(a));
        e:
          for (; ++v < D; ) {
            var te = e[v], ae = s == null ? te : s(te);
            if (te = f || te !== 0 ? te : 0, E && ae === ae) {
              for (var xe = X; xe--; )
                if (a[xe] === ae)
                  continue e;
              U.push(te);
            } else k(a, ae, f) || U.push(te);
          }
        return U;
      }
      var ea = Sh(yl), bu = Sh(Ss, !0);
      function Gb(e, a) {
        var s = !0;
        return ea(e, function(f, v, k) {
          return s = !!a(f, v, k), s;
        }), s;
      }
      function wn(e, a, s) {
        for (var f = -1, v = e.length; ++f < v; ) {
          var k = e[f], E = a(k);
          if (E != null && (D === l ? E === E && !ul(E) : s(E, D)))
            var D = E, U = k;
        }
        return U;
      }
      function Kb(e, a, s, f) {
        var v = e.length;
        for (s = it(s), s < 0 && (s = -s > v ? 0 : v + s), f = f === l || f > v ? v : it(f), f < 0 && (f += v), f = s > f ? 0 : hp(f); s < f; )
          e[s++] = a;
        return e;
      }
      function fu(e, a) {
        var s = [];
        return ea(e, function(f, v, k) {
          a(f, v, k) && s.push(f);
        }), s;
      }
      function gi(e, a, s, f, v) {
        var k = -1, E = e.length;
        for (s || (s = Oy), v || (v = []); ++k < E; ) {
          var D = e[k];
          a > 0 && s(D) ? a > 1 ? gi(D, a - 1, s, f, v) : vl(v, D) : f || (v[v.length] = D);
        }
        return v;
      }
      var xs = kh(), du = kh(!0);
      function yl(e, a) {
        return e && xs(e, a, _i);
      }
      function Ss(e, a) {
        return e && du(e, a, _i);
      }
      function wl(e, a) {
        return Ql(a, function(s) {
          return xa(e[s]);
        });
      }
      function ma(e, a) {
        a = Ha(a, e);
        for (var s = 0, f = a.length; e != null && s < f; )
          e = e[la(a[s++])];
        return s && s == f ? e : l;
      }
      function hu(e, a, s) {
        var f = a(e);
        return Je(e) ? f : vl(f, s(e));
      }
      function Ri(e) {
        return e == null ? e === l ? ba : Be : pa && pa in ut(e) ? ky(e) : jy(e);
      }
      function ks(e, a) {
        return e > a;
      }
      function Qb(e, a) {
        return e != null && Ct.call(e, a);
      }
      function Zb(e, a) {
        return e != null && a in ut(e);
      }
      function Jb(e, a, s) {
        return e >= Zt(a, s) && e < ti(a, s);
      }
      function Rs(e, a, s) {
        for (var f = s ? os : en, v = e[0].length, k = e.length, E = k, D = V(k), U = 1 / 0, X = []; E--; ) {
          var te = e[E];
          E && a && (te = Mt(te, Oi(a))), U = Zt(te.length, U), D[E] = !s && (a || v >= 120 && te.length >= 120) ? new va(E && te) : l;
        }
        te = e[0];
        var ae = -1, xe = D[0];
        e:
          for (; ++ae < v && X.length < U; ) {
            var Ne = te[ae], $e = a ? a(Ne) : Ne;
            if (Ne = s || Ne !== 0 ? Ne : 0, !(xe ? ja(xe, $e) : f(X, $e, s))) {
              for (E = k; --E; ) {
                var nt = D[E];
                if (!(nt ? ja(nt, $e) : f(e[E], $e, s)))
                  continue e;
              }
              xe && xe.push($e), X.push(Ne);
            }
          }
        return X;
      }
      function jl(e, a, s, f) {
        return yl(e, function(v, k, E) {
          a(f, s(v), k, E);
        }), f;
      }
      function _l(e, a, s) {
        a = Ha(a, e), e = Wh(e, a);
        var f = e == null ? e : e[la(kl(a))];
        return f == null ? l : ki(f, e, s);
      }
      function pu(e) {
        return ii(e) && Ri(e) == Z;
      }
      function Xb(e) {
        return ii(e) && Ri(e) == ll;
      }
      function ef(e) {
        return ii(e) && Ri(e) == ee;
      }
      function kr(e, a, s, f, v) {
        return e === a ? !0 : e == null || a == null || !ii(e) && !ii(a) ? e !== e && a !== a : tf(e, a, s, f, kr, v);
      }
      function tf(e, a, s, f, v, k) {
        var E = Je(e), D = Je(a), U = E ? ye : Mi(e), X = D ? ye : Mi(a);
        U = U == Z ? kt : U, X = X == Z ? kt : X;
        var te = U == kt, ae = X == kt, xe = U == X;
        if (xe && Ka(e)) {
          if (!Ka(a))
            return !1;
          E = !0, te = !1;
        }
        if (xe && !te)
          return k || (k = new sl()), E || kn(e) ? Nh(e, a, s, f, v, k) : xy(e, a, U, s, f, v, k);
        if (!(s & A)) {
          var Ne = te && Ct.call(e, "__wrapped__"), $e = ae && Ct.call(a, "__wrapped__");
          if (Ne || $e) {
            var nt = Ne ? e.value() : e, Ve = $e ? a.value() : a;
            return k || (k = new sl()), v(nt, Ve, s, f, k);
          }
        }
        return xe ? (k || (k = new sl()), Sy(e, a, s, f, v, k)) : !1;
      }
      function Cs(e) {
        return ii(e) && Mi(e) == we;
      }
      function ta(e, a, s, f) {
        var v = s.length, k = v, E = !f;
        if (e == null)
          return !k;
        for (e = ut(e); v--; ) {
          var D = s[v];
          if (E && D[2] ? D[1] !== e[D[0]] : !(D[0] in e))
            return !1;
        }
        for (; ++v < k; ) {
          D = s[v];
          var U = D[0], X = e[U], te = D[1];
          if (E && D[2]) {
            if (X === l && !(U in e))
              return !1;
          } else {
            var ae = new sl();
            if (f)
              var xe = f(X, te, U, e, a, ae);
            if (!(xe === l ? kr(te, X, A | I, f, ae) : xe))
              return !1;
          }
        }
        return !0;
      }
      function Rr(e) {
        if (!Jt(e) || Dy(e))
          return !1;
        var a = xa(e) ? yb : Qt;
        return a.test(Er(e));
      }
      function gt(e) {
        return ii(e) && Ri(e) == yi;
      }
      function r(e) {
        return ii(e) && Mi(e) == Ot;
      }
      function o(e) {
        return ii(e) && Mu(e.length) && !!jt[Ri(e)];
      }
      function d(e) {
        return typeof e == "function" ? e : e == null ? Zi : typeof e == "object" ? Je(e) ? ze(e[0], e[1]) : Se(e) : Rp(e);
      }
      function h(e) {
        if (!As(e))
          return fn(e);
        var a = [];
        for (var s in ut(e))
          Ct.call(e, s) && s != "constructor" && a.push(s);
        return a;
      }
      function w(e) {
        if (!Jt(e))
          return Py(e);
        var a = As(e), s = [];
        for (var f in e)
          f == "constructor" && (a || !Ct.call(e, f)) || s.push(f);
        return s;
      }
      function O(e, a) {
        return e < a;
      }
      function H(e, a) {
        var s = -1, f = Ki(e) ? V(e.length) : [];
        return ea(e, function(v, k, E) {
          f[++s] = a(v, k, E);
        }), f;
      }
      function Se(e) {
        var a = gf(e);
        return a.length == 1 && a[0][2] ? Uh(a[0][0], a[0][1]) : function(s) {
          return s === e || ta(s, e, a);
        };
      }
      function ze(e, a) {
        return yf(e) && Fh(a) ? Uh(la(e), a) : function(s) {
          var f = Af(s, e);
          return f === l && f === a ? Of(s, e) : kr(a, f, A | I);
        };
      }
      function rt(e, a, s, f, v) {
        e !== a && xs(a, function(k, E) {
          if (v || (v = new sl()), Jt(k))
            Ci(e, a, E, s, rt, f, v);
          else {
            var D = f ? f(_f(e, E), k, E + "", e, a, v) : l;
            D === l && (D = k), ys(e, E, D);
          }
        }, Qi);
      }
      function Ci(e, a, s, f, v, k, E) {
        var D = _f(e, s), U = _f(a, s), X = E.get(U);
        if (X) {
          ys(e, s, X);
          return;
        }
        var te = k ? k(D, U, s + "", e, a, E) : l, ae = te === l;
        if (ae) {
          var xe = Je(U), Ne = !xe && Ka(U), $e = !xe && !Ne && kn(U);
          te = U, xe || Ne || $e ? Je(D) ? te = D : si(D) ? te = Gi(D) : Ne ? (ae = !1, te = mh(U, !0)) : $e ? (ae = !1, te = yh(U, !0)) : te = [] : Ms(U) || Tr(U) ? (te = D, Tr(D) ? te = pp(D) : (!Jt(D) || xa(D)) && (te = jh(U))) : ae = !1;
        }
        ae && (E.set(U, te), v(te, U, f, k, E), E.delete(U)), ys(e, s, te);
      }
      function xl(e, a) {
        var s = e.length;
        if (s)
          return a += a < 0 ? s : 0, _a(a, s) ? e[a] : l;
      }
      function Fl(e, a, s) {
        a.length ? a = Mt(a, function(k) {
          return Je(k) ? function(E) {
            return ma(E, k.length === 1 ? k[0] : k);
          } : k;
        }) : a = [Zi];
        var f = -1;
        a = Mt(a, Oi(We()));
        var v = H(e, function(k, E, D) {
          var U = Mt(a, function(X) {
            return X(k);
          });
          return { criteria: U, index: ++f, value: k };
        });
        return fs(v, function(k, E) {
          return hy(k, E, s);
        });
      }
      function iy(e, a) {
        return uh(e, a, function(s, f) {
          return Of(e, f);
        });
      }
      function uh(e, a, s) {
        for (var f = -1, v = a.length, k = {}; ++f < v; ) {
          var E = a[f], D = ma(e, E);
          s(D, E) && Es(k, Ha(E, e), D);
        }
        return k;
      }
      function ly(e) {
        return function(a) {
          return ma(a, e);
        };
      }
      function lf(e, a, s, f) {
        var v = f ? Uo : Pa, k = -1, E = a.length, D = e;
        for (e === a && (a = Gi(a)), s && (D = Mt(e, Oi(s))); ++k < E; )
          for (var U = 0, X = a[k], te = s ? s(X) : X; (U = v(D, te, U, f)) > -1; )
            D !== e && ha.call(D, U, 1), ha.call(e, U, 1);
        return e;
      }
      function ch(e, a) {
        for (var s = e ? a.length : 0, f = s - 1; s--; ) {
          var v = a[s];
          if (s == f || v !== k) {
            var k = v;
            _a(v) ? ha.call(e, v, 1) : sf(e, v);
          }
        }
        return e;
      }
      function af(e, a) {
        return e + gr(iu() * (a - e + 1));
      }
      function ay(e, a, s, f) {
        for (var v = -1, k = ti(cn((a - e) / (s || 1)), 0), E = V(k); k--; )
          E[f ? k : ++v] = e, e += s;
        return E;
      }
      function rf(e, a) {
        var s = "";
        if (!e || a < 1 || a > Te)
          return s;
        do
          a % 2 && (s += e), a = gr(a / 2), a && (e += e);
        while (a);
        return s;
      }
      function ct(e, a) {
        return xf(Bh(e, a, Zi), e + "");
      }
      function ry(e) {
        return uu(Rn(e));
      }
      function ny(e, a) {
        var s = Rn(e);
        return Ru(s, ga(a, 0, s.length));
      }
      function Es(e, a, s, f) {
        if (!Jt(e))
          return e;
        a = Ha(a, e);
        for (var v = -1, k = a.length, E = k - 1, D = e; D != null && ++v < k; ) {
          var U = la(a[v]), X = s;
          if (U === "__proto__" || U === "constructor" || U === "prototype")
            return e;
          if (v != E) {
            var te = D[U];
            X = f ? f(te, U, D) : l, X === l && (X = Jt(te) ? te : _a(a[v + 1]) ? [] : {});
          }
          Sr(D, U, X), D = D[U];
        }
        return e;
      }
      var bh = dn ? function(e, a) {
        return dn.set(e, a), e;
      } : Zi, sy = un ? function(e, a) {
        return un(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Df(a),
          writable: !0
        });
      } : Zi;
      function oy(e) {
        return Ru(Rn(e));
      }
      function Sl(e, a, s) {
        var f = -1, v = e.length;
        a < 0 && (a = -a > v ? 0 : v + a), s = s > v ? v : s, s < 0 && (s += v), v = a > s ? 0 : s - a >>> 0, a >>>= 0;
        for (var k = V(v); ++f < v; )
          k[f] = e[f + a];
        return k;
      }
      function uy(e, a) {
        var s;
        return ea(e, function(f, v, k) {
          return s = a(f, v, k), !s;
        }), !!s;
      }
      function vu(e, a, s) {
        var f = 0, v = e == null ? f : e.length;
        if (typeof a == "number" && a === a && v <= ne) {
          for (; f < v; ) {
            var k = f + v >>> 1, E = e[k];
            E !== null && !ul(E) && (s ? E <= a : E < a) ? f = k + 1 : v = k;
          }
          return v;
        }
        return nf(e, a, Zi, s);
      }
      function nf(e, a, s, f) {
        var v = 0, k = e == null ? 0 : e.length;
        if (k === 0)
          return 0;
        a = s(a);
        for (var E = a !== a, D = a === null, U = ul(a), X = a === l; v < k; ) {
          var te = gr((v + k) / 2), ae = s(e[te]), xe = ae !== l, Ne = ae === null, $e = ae === ae, nt = ul(ae);
          if (E)
            var Ve = f || $e;
          else X ? Ve = $e && (f || xe) : D ? Ve = $e && xe && (f || !Ne) : U ? Ve = $e && xe && !Ne && (f || !nt) : Ne || nt ? Ve = !1 : Ve = f ? ae <= a : ae < a;
          Ve ? v = te + 1 : k = te;
        }
        return Zt(k, B);
      }
      function fh(e, a) {
        for (var s = -1, f = e.length, v = 0, k = []; ++s < f; ) {
          var E = e[s], D = a ? a(E) : E;
          if (!s || !Ul(D, U)) {
            var U = D;
            k[v++] = E === 0 ? 0 : E;
          }
        }
        return k;
      }
      function dh(e) {
        return typeof e == "number" ? e : ul(e) ? re : +e;
      }
      function ol(e) {
        if (typeof e == "string")
          return e;
        if (Je(e))
          return Mt(e, ol) + "";
        if (ul(e))
          return lu ? lu.call(e) : "";
        var a = e + "";
        return a == "0" && 1 / e == -Fe ? "-0" : a;
      }
      function Ya(e, a, s) {
        var f = -1, v = en, k = e.length, E = !0, D = [], U = D;
        if (s)
          E = !1, v = os;
        else if (k >= u) {
          var X = a ? null : wy(e);
          if (X)
            return Fa(X);
          E = !1, v = ja, U = new va();
        } else
          U = a ? [] : D;
        e:
          for (; ++f < k; ) {
            var te = e[f], ae = a ? a(te) : te;
            if (te = s || te !== 0 ? te : 0, E && ae === ae) {
              for (var xe = U.length; xe--; )
                if (U[xe] === ae)
                  continue e;
              a && U.push(ae), D.push(te);
            } else v(U, ae, s) || (U !== D && U.push(ae), D.push(te));
          }
        return D;
      }
      function sf(e, a) {
        return a = Ha(a, e), e = Wh(e, a), e == null || delete e[la(kl(a))];
      }
      function hh(e, a, s, f) {
        return Es(e, a, s(ma(e, a)), f);
      }
      function gu(e, a, s, f) {
        for (var v = e.length, k = f ? v : -1; (f ? k-- : ++k < v) && a(e[k], k, e); )
          ;
        return s ? Sl(e, f ? 0 : k, f ? k + 1 : v) : Sl(e, f ? k + 1 : 0, f ? v : k);
      }
      function ph(e, a) {
        var s = e;
        return s instanceof at && (s = s.value()), us(a, function(f, v) {
          return v.func.apply(v.thisArg, vl([f], v.args));
        }, s);
      }
      function of(e, a, s) {
        var f = e.length;
        if (f < 2)
          return f ? Ya(e[0]) : [];
        for (var v = -1, k = V(f); ++v < f; )
          for (var E = e[v], D = -1; ++D < f; )
            D != v && (k[v] = za(k[v] || E, e[D], a, s));
        return Ya(gi(k, 1), a, s);
      }
      function vh(e, a, s) {
        for (var f = -1, v = e.length, k = a.length, E = {}; ++f < v; ) {
          var D = f < k ? a[f] : l;
          s(E, e[f], D);
        }
        return E;
      }
      function uf(e) {
        return si(e) ? e : [];
      }
      function cf(e) {
        return typeof e == "function" ? e : Zi;
      }
      function Ha(e, a) {
        return Je(e) ? e : yf(e, a) ? [e] : zh(Et(e));
      }
      var cy = ct;
      function Ga(e, a, s) {
        var f = e.length;
        return s = s === l ? f : s, !a && s >= f ? e : Sl(e, a, s);
      }
      var gh = wb || function(e) {
        return vi.clearTimeout(e);
      };
      function mh(e, a) {
        if (a)
          return e.slice();
        var s = e.length, f = Ko ? Ko(s) : new e.constructor(s);
        return e.copy(f), f;
      }
      function bf(e) {
        var a = new e.constructor(e.byteLength);
        return new sn(a).set(new sn(e)), a;
      }
      function by(e, a) {
        var s = a ? bf(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.byteLength);
      }
      function fy(e) {
        var a = new e.constructor(e.source, ft.exec(e));
        return a.lastIndex = e.lastIndex, a;
      }
      function dy(e) {
        return xr ? ut(xr.call(e)) : {};
      }
      function yh(e, a) {
        var s = a ? bf(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.length);
      }
      function wh(e, a) {
        if (e !== a) {
          var s = e !== l, f = e === null, v = e === e, k = ul(e), E = a !== l, D = a === null, U = a === a, X = ul(a);
          if (!D && !X && !k && e > a || k && E && U && !D && !X || f && E && U || !s && U || !v)
            return 1;
          if (!f && !k && !X && e < a || X && s && v && !f && !k || D && s && v || !E && v || !U)
            return -1;
        }
        return 0;
      }
      function hy(e, a, s) {
        for (var f = -1, v = e.criteria, k = a.criteria, E = v.length, D = s.length; ++f < E; ) {
          var U = wh(v[f], k[f]);
          if (U) {
            if (f >= D)
              return U;
            var X = s[f];
            return U * (X == "desc" ? -1 : 1);
          }
        }
        return e.index - a.index;
      }
      function _h(e, a, s, f) {
        for (var v = -1, k = e.length, E = s.length, D = -1, U = a.length, X = ti(k - E, 0), te = V(U + X), ae = !f; ++D < U; )
          te[D] = a[D];
        for (; ++v < E; )
          (ae || v < k) && (te[s[v]] = e[v]);
        for (; X--; )
          te[D++] = e[v++];
        return te;
      }
      function xh(e, a, s, f) {
        for (var v = -1, k = e.length, E = -1, D = s.length, U = -1, X = a.length, te = ti(k - D, 0), ae = V(te + X), xe = !f; ++v < te; )
          ae[v] = e[v];
        for (var Ne = v; ++U < X; )
          ae[Ne + U] = a[U];
        for (; ++E < D; )
          (xe || v < k) && (ae[Ne + s[E]] = e[v++]);
        return ae;
      }
      function Gi(e, a) {
        var s = -1, f = e.length;
        for (a || (a = V(f)); ++s < f; )
          a[s] = e[s];
        return a;
      }
      function ia(e, a, s, f) {
        var v = !s;
        s || (s = {});
        for (var k = -1, E = a.length; ++k < E; ) {
          var D = a[k], U = f ? f(s[D], e[D], D, s, e) : l;
          U === l && (U = e[D]), v ? Pl(s, D, U) : Sr(s, D, U);
        }
        return s;
      }
      function py(e, a) {
        return ia(e, mf(e), a);
      }
      function vy(e, a) {
        return ia(e, Ih(e), a);
      }
      function mu(e, a) {
        return function(s, f) {
          var v = Je(s) ? Zc : Yb, k = a ? a() : {};
          return v(s, e, We(f, 2), k);
        };
      }
      function _n(e) {
        return ct(function(a, s) {
          var f = -1, v = s.length, k = v > 1 ? s[v - 1] : l, E = v > 2 ? s[2] : l;
          for (k = e.length > 3 && typeof k == "function" ? (v--, k) : l, E && Ui(s[0], s[1], E) && (k = v < 3 ? l : k, v = 1), a = ut(a); ++f < v; ) {
            var D = s[f];
            D && e(a, D, f, k);
          }
          return a;
        });
      }
      function Sh(e, a) {
        return function(s, f) {
          if (s == null)
            return s;
          if (!Ki(s))
            return e(s, f);
          for (var v = s.length, k = a ? v : -1, E = ut(s); (a ? k-- : ++k < v) && f(E[k], k, E) !== !1; )
            ;
          return s;
        };
      }
      function kh(e) {
        return function(a, s, f) {
          for (var v = -1, k = ut(a), E = f(a), D = E.length; D--; ) {
            var U = E[e ? D : ++v];
            if (s(k[U], U, k) === !1)
              break;
          }
          return a;
        };
      }
      function gy(e, a, s) {
        var f = a & g, v = Ts(e);
        function k() {
          var E = this && this !== vi && this instanceof k ? v : e;
          return E.apply(f ? s : this, arguments);
        }
        return k;
      }
      function Rh(e) {
        return function(a) {
          a = Et(a);
          var s = gl(a) ? ji(a) : l, f = s ? s[0] : a.charAt(0), v = s ? Ga(s, 1).join("") : a.slice(1);
          return f[e]() + v;
        };
      }
      function xn(e) {
        return function(a) {
          return us(Sp(xp(a).replace(Wc, "")), e, "");
        };
      }
      function Ts(e) {
        return function() {
          var a = arguments;
          switch (a.length) {
            case 0:
              return new e();
            case 1:
              return new e(a[0]);
            case 2:
              return new e(a[0], a[1]);
            case 3:
              return new e(a[0], a[1], a[2]);
            case 4:
              return new e(a[0], a[1], a[2], a[3]);
            case 5:
              return new e(a[0], a[1], a[2], a[3], a[4]);
            case 6:
              return new e(a[0], a[1], a[2], a[3], a[4], a[5]);
            case 7:
              return new e(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
          }
          var s = Va(e.prototype), f = e.apply(s, a);
          return Jt(f) ? f : s;
        };
      }
      function my(e, a, s) {
        var f = Ts(e);
        function v() {
          for (var k = arguments.length, E = V(k), D = k, U = Sn(v); D--; )
            E[D] = arguments[D];
          var X = k < 3 && E[0] !== U && E[k - 1] !== U ? [] : nl(E, U);
          if (k -= X.length, k < s)
            return Oh(
              e,
              a,
              yu,
              v.placeholder,
              l,
              E,
              X,
              l,
              l,
              s - k
            );
          var te = this && this !== vi && this instanceof v ? f : e;
          return ki(te, this, E);
        }
        return v;
      }
      function Ch(e) {
        return function(a, s, f) {
          var v = ut(a);
          if (!Ki(a)) {
            var k = We(s, 3);
            a = _i(a), s = function(D) {
              return k(v[D], D, v);
            };
          }
          var E = e(a, s, f);
          return E > -1 ? v[k ? a[E] : E] : l;
        };
      }
      function Eh(e) {
        return wa(function(a) {
          var s = a.length, f = s, v = Yi.prototype.thru;
          for (e && a.reverse(); f--; ) {
            var k = a[f];
            if (typeof k != "function")
              throw new zi(c);
            if (v && !E && Su(k) == "wrapper")
              var E = new Yi([], !0);
          }
          for (f = E ? f : s; ++f < s; ) {
            k = a[f];
            var D = Su(k), U = D == "wrapper" ? vf(k) : l;
            U && wf(U[0]) && U[1] == ($ | F | R | K) && !U[4].length && U[9] == 1 ? E = E[Su(U[0])].apply(E, U[3]) : E = k.length == 1 && wf(k) ? E[D]() : E.thru(k);
          }
          return function() {
            var X = arguments, te = X[0];
            if (E && X.length == 1 && Je(te))
              return E.plant(te).value();
            for (var ae = 0, xe = s ? a[ae].apply(this, X) : te; ++ae < s; )
              xe = a[ae].call(this, xe);
            return xe;
          };
        });
      }
      function yu(e, a, s, f, v, k, E, D, U, X) {
        var te = a & $, ae = a & g, xe = a & G, Ne = a & (F | ue), $e = a & z, nt = xe ? l : Ts(e);
        function Ve() {
          for (var pt = arguments.length, mt = V(pt), cl = pt; cl--; )
            mt[cl] = arguments[cl];
          if (Ne)
            var Bi = Sn(Ve), bl = lb(mt, Bi);
          if (f && (mt = _h(mt, f, v, Ne)), k && (mt = xh(mt, k, E, Ne)), pt -= bl, Ne && pt < X) {
            var oi = nl(mt, Bi);
            return Oh(
              e,
              a,
              yu,
              Ve.placeholder,
              s,
              mt,
              oi,
              D,
              U,
              X - pt
            );
          }
          var Bl = ae ? s : this, ka = xe ? Bl[e] : e;
          return pt = mt.length, D ? mt = Fy(mt, D) : $e && pt > 1 && mt.reverse(), te && U < pt && (mt.length = U), this && this !== vi && this instanceof Ve && (ka = nt || Ts(ka)), ka.apply(Bl, mt);
        }
        return Ve;
      }
      function Th(e, a) {
        return function(s, f) {
          return jl(s, e, a(f), {});
        };
      }
      function wu(e, a) {
        return function(s, f) {
          var v;
          if (s === l && f === l)
            return a;
          if (s !== l && (v = s), f !== l) {
            if (v === l)
              return f;
            typeof s == "string" || typeof f == "string" ? (s = ol(s), f = ol(f)) : (s = dh(s), f = dh(f)), v = e(s, f);
          }
          return v;
        };
      }
      function ff(e) {
        return wa(function(a) {
          return a = Mt(a, Oi(We())), ct(function(s) {
            var f = this;
            return e(a, function(v) {
              return ki(v, f, s);
            });
          });
        });
      }
      function _u(e, a) {
        a = a === l ? " " : ol(a);
        var s = a.length;
        if (s < 2)
          return s ? rf(a, e) : a;
        var f = rf(a, cn(e / Zl(a)));
        return gl(a) ? Ga(ji(f), 0, e).join("") : f.slice(0, e);
      }
      function yy(e, a, s, f) {
        var v = a & g, k = Ts(e);
        function E() {
          for (var D = -1, U = arguments.length, X = -1, te = f.length, ae = V(te + U), xe = this && this !== vi && this instanceof E ? k : e; ++X < te; )
            ae[X] = f[X];
          for (; U--; )
            ae[X++] = arguments[++D];
          return ki(xe, v ? s : this, ae);
        }
        return E;
      }
      function Ah(e) {
        return function(a, s, f) {
          return f && typeof f != "number" && Ui(a, s, f) && (s = f = l), a = Sa(a), s === l ? (s = a, a = 0) : s = Sa(s), f = f === l ? a < s ? 1 : -1 : Sa(f), ay(a, s, f, e);
        };
      }
      function xu(e) {
        return function(a, s) {
          return typeof a == "string" && typeof s == "string" || (a = Rl(a), s = Rl(s)), e(a, s);
        };
      }
      function Oh(e, a, s, f, v, k, E, D, U, X) {
        var te = a & F, ae = te ? E : l, xe = te ? l : E, Ne = te ? k : l, $e = te ? l : k;
        a |= te ? R : se, a &= ~(te ? se : R), a & q || (a &= -4);
        var nt = [
          e,
          a,
          v,
          Ne,
          ae,
          $e,
          xe,
          D,
          U,
          X
        ], Ve = s.apply(l, nt);
        return wf(e) && qh(Ve, nt), Ve.placeholder = f, $h(Ve, e, a);
      }
      function df(e) {
        var a = ni[e];
        return function(s, f) {
          if (s = Rl(s), f = f == null ? 0 : Zt(it(f), 292), f && mr(s)) {
            var v = (Et(s) + "e").split("e"), k = a(v[0] + "e" + (+v[1] + f));
            return v = (Et(k) + "e").split("e"), +(v[0] + "e" + (+v[1] - f));
          }
          return a(s);
        };
      }
      var wy = qa && 1 / Fa(new qa([, -0]))[1] == Fe ? function(e) {
        return new qa(e);
      } : If;
      function Mh(e) {
        return function(a) {
          var s = Mi(a);
          return s == we ? vs(a) : s == Ot ? ub(a) : ib(a, e(a));
        };
      }
      function ya(e, a, s, f, v, k, E, D) {
        var U = a & G;
        if (!U && typeof e != "function")
          throw new zi(c);
        var X = f ? f.length : 0;
        if (X || (a &= -97, f = v = l), E = E === l ? E : ti(it(E), 0), D = D === l ? D : it(D), X -= v ? v.length : 0, a & se) {
          var te = f, ae = v;
          f = v = l;
        }
        var xe = U ? l : vf(e), Ne = [
          e,
          a,
          s,
          f,
          v,
          te,
          ae,
          k,
          E,
          D
        ];
        if (xe && Iy(Ne, xe), e = Ne[0], a = Ne[1], s = Ne[2], f = Ne[3], v = Ne[4], D = Ne[9] = Ne[9] === l ? U ? 0 : e.length : ti(Ne[9] - X, 0), !D && a & (F | ue) && (a &= -25), !a || a == g)
          var $e = gy(e, a, s);
        else a == F || a == ue ? $e = my(e, a, D) : (a == R || a == (g | R)) && !v.length ? $e = yy(e, a, s, f) : $e = yu.apply(l, Ne);
        var nt = xe ? bh : qh;
        return $h(nt($e, Ne), e, a);
      }
      function Dh(e, a, s, f) {
        return e === l || Ul(e, Ba[s]) && !Ct.call(f, s) ? a : e;
      }
      function Lh(e, a, s, f, v, k) {
        return Jt(e) && Jt(a) && (k.set(a, e), rt(e, a, l, Lh, k), k.delete(a)), e;
      }
      function _y(e) {
        return Ms(e) ? l : e;
      }
      function Nh(e, a, s, f, v, k) {
        var E = s & A, D = e.length, U = a.length;
        if (D != U && !(E && U > D))
          return !1;
        var X = k.get(e), te = k.get(a);
        if (X && te)
          return X == a && te == e;
        var ae = -1, xe = !0, Ne = s & I ? new va() : l;
        for (k.set(e, a), k.set(a, e); ++ae < D; ) {
          var $e = e[ae], nt = a[ae];
          if (f)
            var Ve = E ? f(nt, $e, ae, a, e, k) : f($e, nt, ae, e, a, k);
          if (Ve !== l) {
            if (Ve)
              continue;
            xe = !1;
            break;
          }
          if (Ne) {
            if (!cs(a, function(pt, mt) {
              if (!ja(Ne, mt) && ($e === pt || v($e, pt, s, f, k)))
                return Ne.push(mt);
            })) {
              xe = !1;
              break;
            }
          } else if (!($e === nt || v($e, nt, s, f, k))) {
            xe = !1;
            break;
          }
        }
        return k.delete(e), k.delete(a), xe;
      }
      function xy(e, a, s, f, v, k, E) {
        switch (s) {
          case Vi:
            if (e.byteLength != a.byteLength || e.byteOffset != a.byteOffset)
              return !1;
            e = e.buffer, a = a.buffer;
          case ll:
            return !(e.byteLength != a.byteLength || !k(new sn(e), new sn(a)));
          case me:
          case ee:
          case ce:
            return Ul(+e, +a);
          case Pe:
            return e.name == a.name && e.message == a.message;
          case yi:
          case Ai:
            return e == a + "";
          case we:
            var D = vs;
          case Ot:
            var U = f & A;
            if (D || (D = Fa), e.size != a.size && !U)
              return !1;
            var X = E.get(e);
            if (X)
              return X == a;
            f |= I, E.set(e, a);
            var te = Nh(D(e), D(a), f, v, k, E);
            return E.delete(e), te;
          case Hl:
            if (xr)
              return xr.call(e) == xr.call(a);
        }
        return !1;
      }
      function Sy(e, a, s, f, v, k) {
        var E = s & A, D = hf(e), U = D.length, X = hf(a), te = X.length;
        if (U != te && !E)
          return !1;
        for (var ae = U; ae--; ) {
          var xe = D[ae];
          if (!(E ? xe in a : Ct.call(a, xe)))
            return !1;
        }
        var Ne = k.get(e), $e = k.get(a);
        if (Ne && $e)
          return Ne == a && $e == e;
        var nt = !0;
        k.set(e, a), k.set(a, e);
        for (var Ve = E; ++ae < U; ) {
          xe = D[ae];
          var pt = e[xe], mt = a[xe];
          if (f)
            var cl = E ? f(mt, pt, xe, a, e, k) : f(pt, mt, xe, e, a, k);
          if (!(cl === l ? pt === mt || v(pt, mt, s, f, k) : cl)) {
            nt = !1;
            break;
          }
          Ve || (Ve = xe == "constructor");
        }
        if (nt && !Ve) {
          var Bi = e.constructor, bl = a.constructor;
          Bi != bl && "constructor" in e && "constructor" in a && !(typeof Bi == "function" && Bi instanceof Bi && typeof bl == "function" && bl instanceof bl) && (nt = !1);
        }
        return k.delete(e), k.delete(a), nt;
      }
      function wa(e) {
        return xf(Bh(e, l, Kh), e + "");
      }
      function hf(e) {
        return hu(e, _i, mf);
      }
      function pf(e) {
        return hu(e, Qi, Ih);
      }
      var vf = dn ? function(e) {
        return dn.get(e);
      } : If;
      function Su(e) {
        for (var a = e.name + "", s = $a[a], f = Ct.call($a, a) ? s.length : 0; f--; ) {
          var v = s[f], k = v.func;
          if (k == null || k == e)
            return v.name;
        }
        return a;
      }
      function Sn(e) {
        var a = Ct.call(_, "placeholder") ? _ : e;
        return a.placeholder;
      }
      function We() {
        var e = _.iteratee || Lf;
        return e = e === Lf ? d : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function ku(e, a) {
        var s = e.__data__;
        return My(a) ? s[typeof a == "string" ? "string" : "hash"] : s.map;
      }
      function gf(e) {
        for (var a = _i(e), s = a.length; s--; ) {
          var f = a[s], v = e[f];
          a[s] = [f, v, Fh(v)];
        }
        return a;
      }
      function Cr(e, a) {
        var s = nb(e, a);
        return Rr(s) ? s : l;
      }
      function ky(e) {
        var a = Ct.call(e, pa), s = e[pa];
        try {
          e[pa] = l;
          var f = !0;
        } catch {
        }
        var v = rn.call(e);
        return f && (a ? e[pa] = s : delete e[pa]), v;
      }
      var mf = bn ? function(e) {
        return e == null ? [] : (e = ut(e), Ql(bn(e), function(a) {
          return Zo.call(e, a);
        }));
      } : Pf, Ih = bn ? function(e) {
        for (var a = []; e; )
          vl(a, mf(e)), e = on(e);
        return a;
      } : Pf, Mi = Ri;
      (gs && Mi(new gs(new ArrayBuffer(1))) != Vi || yr && Mi(new yr()) != we || ms && Mi(ms.resolve()) != pi || qa && Mi(new qa()) != Ot || wr && Mi(new wr()) != Ii) && (Mi = function(e) {
        var a = Ri(e), s = a == kt ? e.constructor : l, f = s ? Er(s) : "";
        if (f)
          switch (f) {
            case kb:
              return Vi;
            case Rb:
              return we;
            case Cb:
              return pi;
            case Eb:
              return Ot;
            case Tb:
              return Ii;
          }
        return a;
      });
      function Ry(e, a, s) {
        for (var f = -1, v = s.length; ++f < v; ) {
          var k = s[f], E = k.size;
          switch (k.type) {
            case "drop":
              e += E;
              break;
            case "dropRight":
              a -= E;
              break;
            case "take":
              a = Zt(a, e + E);
              break;
            case "takeRight":
              e = ti(e, a - E);
              break;
          }
        }
        return { start: e, end: a };
      }
      function Cy(e) {
        var a = e.match(di);
        return a ? a[1].split(T) : [];
      }
      function Ph(e, a, s) {
        a = Ha(a, e);
        for (var f = -1, v = a.length, k = !1; ++f < v; ) {
          var E = la(a[f]);
          if (!(k = e != null && s(e, E)))
            break;
          e = e[E];
        }
        return k || ++f != v ? k : (v = e == null ? 0 : e.length, !!v && Mu(v) && _a(E, v) && (Je(e) || Tr(e)));
      }
      function Ey(e) {
        var a = e.length, s = new e.constructor(a);
        return a && typeof e[0] == "string" && Ct.call(e, "index") && (s.index = e.index, s.input = e.input), s;
      }
      function jh(e) {
        return typeof e.constructor == "function" && !As(e) ? Va(on(e)) : {};
      }
      function Ty(e, a, s) {
        var f = e.constructor;
        switch (a) {
          case ll:
            return bf(e);
          case me:
          case ee:
            return new f(+e);
          case Vi:
            return by(e, s);
          case al:
          case wt:
          case Gl:
          case Al:
          case hl:
          case Ol:
          case W:
          case P:
          case le:
            return yh(e, s);
          case we:
            return new f();
          case ce:
          case Ai:
            return new f(e);
          case yi:
            return fy(e);
          case Ot:
            return new f();
          case Hl:
            return dy(e);
        }
      }
      function Ay(e, a) {
        var s = a.length;
        if (!s)
          return e;
        var f = s - 1;
        return a[f] = (s > 1 ? "& " : "") + a[f], a = a.join(s > 2 ? ", " : " "), e.replace(Ma, `{
/* [wrapped with ` + a + `] */
`);
      }
      function Oy(e) {
        return Je(e) || Tr(e) || !!(Jo && e && e[Jo]);
      }
      function _a(e, a) {
        var s = typeof e;
        return a = a ?? Te, !!a && (s == "number" || s != "symbol" && Yt.test(e)) && e > -1 && e % 1 == 0 && e < a;
      }
      function Ui(e, a, s) {
        if (!Jt(s))
          return !1;
        var f = typeof a;
        return (f == "number" ? Ki(s) && _a(a, s.length) : f == "string" && a in s) ? Ul(s[a], e) : !1;
      }
      function yf(e, a) {
        if (Je(e))
          return !1;
        var s = typeof e;
        return s == "number" || s == "symbol" || s == "boolean" || e == null || ul(e) ? !0 : Dt.test(e) || !Pt.test(e) || a != null && e in ut(a);
      }
      function My(e) {
        var a = typeof e;
        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? e !== "__proto__" : e === null;
      }
      function wf(e) {
        var a = Su(e), s = _[a];
        if (typeof s != "function" || !(a in at.prototype))
          return !1;
        if (e === s)
          return !0;
        var f = vf(s);
        return !!f && e === f[0];
      }
      function Dy(e) {
        return !!Go && Go in e;
      }
      var Ly = an ? xa : jf;
      function As(e) {
        var a = e && e.constructor, s = typeof a == "function" && a.prototype || Ba;
        return e === s;
      }
      function Fh(e) {
        return e === e && !Jt(e);
      }
      function Uh(e, a) {
        return function(s) {
          return s == null ? !1 : s[e] === a && (a !== l || e in ut(s));
        };
      }
      function Ny(e) {
        var a = Au(e, function(f) {
          return s.size === x && s.clear(), f;
        }), s = a.cache;
        return a;
      }
      function Iy(e, a) {
        var s = e[1], f = a[1], v = s | f, k = v < (g | G | $), E = f == $ && s == F || f == $ && s == K && e[7].length <= a[8] || f == ($ | K) && a[7].length <= a[8] && s == F;
        if (!(k || E))
          return e;
        f & g && (e[2] = a[2], v |= s & g ? 0 : q);
        var D = a[3];
        if (D) {
          var U = e[3];
          e[3] = U ? _h(U, D, a[4]) : D, e[4] = U ? nl(e[3], S) : a[4];
        }
        return D = a[5], D && (U = e[5], e[5] = U ? xh(U, D, a[6]) : D, e[6] = U ? nl(e[5], S) : a[6]), D = a[7], D && (e[7] = D), f & $ && (e[8] = e[8] == null ? a[8] : Zt(e[8], a[8])), e[9] == null && (e[9] = a[9]), e[0] = a[0], e[1] = v, e;
      }
      function Py(e) {
        var a = [];
        if (e != null)
          for (var s in ut(e))
            a.push(s);
        return a;
      }
      function jy(e) {
        return rn.call(e);
      }
      function Bh(e, a, s) {
        return a = ti(a === l ? e.length - 1 : a, 0), function() {
          for (var f = arguments, v = -1, k = ti(f.length - a, 0), E = V(k); ++v < k; )
            E[v] = f[a + v];
          v = -1;
          for (var D = V(a + 1); ++v < a; )
            D[v] = f[v];
          return D[a] = s(E), ki(e, this, D);
        };
      }
      function Wh(e, a) {
        return a.length < 2 ? e : ma(e, Sl(a, 0, -1));
      }
      function Fy(e, a) {
        for (var s = e.length, f = Zt(a.length, s), v = Gi(e); f--; ) {
          var k = a[f];
          e[f] = _a(k, s) ? v[k] : l;
        }
        return e;
      }
      function _f(e, a) {
        if (!(a === "constructor" && typeof e[a] == "function") && a != "__proto__")
          return e[a];
      }
      var qh = Vh(bh), Os = xb || function(e, a) {
        return vi.setTimeout(e, a);
      }, xf = Vh(sy);
      function $h(e, a, s) {
        var f = a + "";
        return xf(e, Ay(f, Uy(Cy(f), s)));
      }
      function Vh(e) {
        var a = 0, s = 0;
        return function() {
          var f = eu(), v = Ae - (f - s);
          if (s = f, v > 0) {
            if (++a >= Ye)
              return arguments[0];
          } else
            a = 0;
          return e.apply(l, arguments);
        };
      }
      function Ru(e, a) {
        var s = -1, f = e.length, v = f - 1;
        for (a = a === l ? f : a; ++s < a; ) {
          var k = af(s, v), E = e[k];
          e[k] = e[s], e[s] = E;
        }
        return e.length = a, e;
      }
      var zh = Ny(function(e) {
        var a = [];
        return e.charCodeAt(0) === 46 && a.push(""), e.replace(Ke, function(s, f, v, k) {
          a.push(v ? k.replace(Le, "$1") : f || s);
        }), a;
      });
      function la(e) {
        if (typeof e == "string" || ul(e))
          return e;
        var a = e + "";
        return a == "0" && 1 / e == -Fe ? "-0" : a;
      }
      function Er(e) {
        if (e != null) {
          try {
            return pr.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Uy(e, a) {
        return ei(J, function(s) {
          var f = "_." + s[0];
          a & s[1] && !en(e, f) && e.push(f);
        }), e.sort();
      }
      function Yh(e) {
        if (e instanceof at)
          return e.clone();
        var a = new Yi(e.__wrapped__, e.__chain__);
        return a.__actions__ = Gi(e.__actions__), a.__index__ = e.__index__, a.__values__ = e.__values__, a;
      }
      function By(e, a, s) {
        (s ? Ui(e, a, s) : a === l) ? a = 1 : a = ti(it(a), 0);
        var f = e == null ? 0 : e.length;
        if (!f || a < 1)
          return [];
        for (var v = 0, k = 0, E = V(cn(f / a)); v < f; )
          E[k++] = Sl(e, v, v += a);
        return E;
      }
      function Wy(e) {
        for (var a = -1, s = e == null ? 0 : e.length, f = 0, v = []; ++a < s; ) {
          var k = e[a];
          k && (v[f++] = k);
        }
        return v;
      }
      function qy() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var a = V(e - 1), s = arguments[0], f = e; f--; )
          a[f - 1] = arguments[f];
        return vl(Je(s) ? Gi(s) : [s], gi(a, 1));
      }
      var $y = ct(function(e, a) {
        return si(e) ? za(e, gi(a, 1, si, !0)) : [];
      }), Vy = ct(function(e, a) {
        var s = kl(a);
        return si(s) && (s = l), si(e) ? za(e, gi(a, 1, si, !0), We(s, 2)) : [];
      }), zy = ct(function(e, a) {
        var s = kl(a);
        return si(s) && (s = l), si(e) ? za(e, gi(a, 1, si, !0), l, s) : [];
      });
      function Yy(e, a, s) {
        var f = e == null ? 0 : e.length;
        return f ? (a = s || a === l ? 1 : it(a), Sl(e, a < 0 ? 0 : a, f)) : [];
      }
      function Hy(e, a, s) {
        var f = e == null ? 0 : e.length;
        return f ? (a = s || a === l ? 1 : it(a), a = f - a, Sl(e, 0, a < 0 ? 0 : a)) : [];
      }
      function Gy(e, a) {
        return e && e.length ? gu(e, We(a, 3), !0, !0) : [];
      }
      function Ky(e, a) {
        return e && e.length ? gu(e, We(a, 3), !0) : [];
      }
      function Qy(e, a, s, f) {
        var v = e == null ? 0 : e.length;
        return v ? (s && typeof s != "number" && Ui(e, a, s) && (s = 0, f = v), Kb(e, a, s, f)) : [];
      }
      function Hh(e, a, s) {
        var f = e == null ? 0 : e.length;
        if (!f)
          return -1;
        var v = s == null ? 0 : it(s);
        return v < 0 && (v = ti(f + v, 0)), tn(e, We(a, 3), v);
      }
      function Gh(e, a, s) {
        var f = e == null ? 0 : e.length;
        if (!f)
          return -1;
        var v = f - 1;
        return s !== l && (v = it(s), v = s < 0 ? ti(f + v, 0) : Zt(v, f - 1)), tn(e, We(a, 3), v, !0);
      }
      function Kh(e) {
        var a = e == null ? 0 : e.length;
        return a ? gi(e, 1) : [];
      }
      function Zy(e) {
        var a = e == null ? 0 : e.length;
        return a ? gi(e, Fe) : [];
      }
      function Jy(e, a) {
        var s = e == null ? 0 : e.length;
        return s ? (a = a === l ? 1 : it(a), gi(e, a)) : [];
      }
      function Xy(e) {
        for (var a = -1, s = e == null ? 0 : e.length, f = {}; ++a < s; ) {
          var v = e[a];
          f[v[0]] = v[1];
        }
        return f;
      }
      function Qh(e) {
        return e && e.length ? e[0] : l;
      }
      function ew(e, a, s) {
        var f = e == null ? 0 : e.length;
        if (!f)
          return -1;
        var v = s == null ? 0 : it(s);
        return v < 0 && (v = ti(f + v, 0)), Pa(e, a, v);
      }
      function tw(e) {
        var a = e == null ? 0 : e.length;
        return a ? Sl(e, 0, -1) : [];
      }
      var iw = ct(function(e) {
        var a = Mt(e, uf);
        return a.length && a[0] === e[0] ? Rs(a) : [];
      }), lw = ct(function(e) {
        var a = kl(e), s = Mt(e, uf);
        return a === kl(s) ? a = l : s.pop(), s.length && s[0] === e[0] ? Rs(s, We(a, 2)) : [];
      }), aw = ct(function(e) {
        var a = kl(e), s = Mt(e, uf);
        return a = typeof a == "function" ? a : l, a && s.pop(), s.length && s[0] === e[0] ? Rs(s, l, a) : [];
      });
      function rw(e, a) {
        return e == null ? "" : Wa.call(e, a);
      }
      function kl(e) {
        var a = e == null ? 0 : e.length;
        return a ? e[a - 1] : l;
      }
      function nw(e, a, s) {
        var f = e == null ? 0 : e.length;
        if (!f)
          return -1;
        var v = f;
        return s !== l && (v = it(s), v = v < 0 ? ti(f + v, 0) : Zt(v, f - 1)), a === a ? cb(e, a, v) : tn(e, Bo, v, !0);
      }
      function sw(e, a) {
        return e && e.length ? xl(e, it(a)) : l;
      }
      var ow = ct(Zh);
      function Zh(e, a) {
        return e && e.length && a && a.length ? lf(e, a) : e;
      }
      function uw(e, a, s) {
        return e && e.length && a && a.length ? lf(e, a, We(s, 2)) : e;
      }
      function cw(e, a, s) {
        return e && e.length && a && a.length ? lf(e, a, l, s) : e;
      }
      var bw = wa(function(e, a) {
        var s = e == null ? 0 : e.length, f = yn(e, a);
        return ch(e, Mt(a, function(v) {
          return _a(v, s) ? +v : v;
        }).sort(wh)), f;
      });
      function fw(e, a) {
        var s = [];
        if (!(e && e.length))
          return s;
        var f = -1, v = [], k = e.length;
        for (a = We(a, 3); ++f < k; ) {
          var E = e[f];
          a(E, f, e) && (s.push(E), v.push(f));
        }
        return ch(e, v), s;
      }
      function Sf(e) {
        return e == null ? e : Sb.call(e);
      }
      function dw(e, a, s) {
        var f = e == null ? 0 : e.length;
        return f ? (s && typeof s != "number" && Ui(e, a, s) ? (a = 0, s = f) : (a = a == null ? 0 : it(a), s = s === l ? f : it(s)), Sl(e, a, s)) : [];
      }
      function hw(e, a) {
        return vu(e, a);
      }
      function pw(e, a, s) {
        return nf(e, a, We(s, 2));
      }
      function vw(e, a) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var f = vu(e, a);
          if (f < s && Ul(e[f], a))
            return f;
        }
        return -1;
      }
      function gw(e, a) {
        return vu(e, a, !0);
      }
      function mw(e, a, s) {
        return nf(e, a, We(s, 2), !0);
      }
      function yw(e, a) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var f = vu(e, a, !0) - 1;
          if (Ul(e[f], a))
            return f;
        }
        return -1;
      }
      function ww(e) {
        return e && e.length ? fh(e) : [];
      }
      function _w(e, a) {
        return e && e.length ? fh(e, We(a, 2)) : [];
      }
      function xw(e) {
        var a = e == null ? 0 : e.length;
        return a ? Sl(e, 1, a) : [];
      }
      function Sw(e, a, s) {
        return e && e.length ? (a = s || a === l ? 1 : it(a), Sl(e, 0, a < 0 ? 0 : a)) : [];
      }
      function kw(e, a, s) {
        var f = e == null ? 0 : e.length;
        return f ? (a = s || a === l ? 1 : it(a), a = f - a, Sl(e, a < 0 ? 0 : a, f)) : [];
      }
      function Rw(e, a) {
        return e && e.length ? gu(e, We(a, 3), !1, !0) : [];
      }
      function Cw(e, a) {
        return e && e.length ? gu(e, We(a, 3)) : [];
      }
      var Ew = ct(function(e) {
        return Ya(gi(e, 1, si, !0));
      }), Tw = ct(function(e) {
        var a = kl(e);
        return si(a) && (a = l), Ya(gi(e, 1, si, !0), We(a, 2));
      }), Aw = ct(function(e) {
        var a = kl(e);
        return a = typeof a == "function" ? a : l, Ya(gi(e, 1, si, !0), l, a);
      });
      function Ow(e) {
        return e && e.length ? Ya(e) : [];
      }
      function Mw(e, a) {
        return e && e.length ? Ya(e, We(a, 2)) : [];
      }
      function Dw(e, a) {
        return a = typeof a == "function" ? a : l, e && e.length ? Ya(e, l, a) : [];
      }
      function kf(e) {
        if (!(e && e.length))
          return [];
        var a = 0;
        return e = Ql(e, function(s) {
          if (si(s))
            return a = ti(s.length, a), !0;
        }), hs(a, function(s) {
          return Mt(e, bs(s));
        });
      }
      function Jh(e, a) {
        if (!(e && e.length))
          return [];
        var s = kf(e);
        return a == null ? s : Mt(s, function(f) {
          return ki(a, l, f);
        });
      }
      var Lw = ct(function(e, a) {
        return si(e) ? za(e, a) : [];
      }), Nw = ct(function(e) {
        return of(Ql(e, si));
      }), Iw = ct(function(e) {
        var a = kl(e);
        return si(a) && (a = l), of(Ql(e, si), We(a, 2));
      }), Pw = ct(function(e) {
        var a = kl(e);
        return a = typeof a == "function" ? a : l, of(Ql(e, si), l, a);
      }), jw = ct(kf);
      function Fw(e, a) {
        return vh(e || [], a || [], Sr);
      }
      function Uw(e, a) {
        return vh(e || [], a || [], Es);
      }
      var Bw = ct(function(e) {
        var a = e.length, s = a > 1 ? e[a - 1] : l;
        return s = typeof s == "function" ? (e.pop(), s) : l, Jh(e, s);
      });
      function Xh(e) {
        var a = _(e);
        return a.__chain__ = !0, a;
      }
      function Ww(e, a) {
        return a(e), e;
      }
      function Cu(e, a) {
        return a(e);
      }
      var qw = wa(function(e) {
        var a = e.length, s = a ? e[0] : 0, f = this.__wrapped__, v = function(k) {
          return yn(k, e);
        };
        return a > 1 || this.__actions__.length || !(f instanceof at) || !_a(s) ? this.thru(v) : (f = f.slice(s, +s + (a ? 1 : 0)), f.__actions__.push({
          func: Cu,
          args: [v],
          thisArg: l
        }), new Yi(f, this.__chain__).thru(function(k) {
          return a && !k.length && k.push(l), k;
        }));
      });
      function $w() {
        return Xh(this);
      }
      function Vw() {
        return new Yi(this.value(), this.__chain__);
      }
      function zw() {
        this.__values__ === l && (this.__values__ = dp(this.value()));
        var e = this.__index__ >= this.__values__.length, a = e ? l : this.__values__[this.__index__++];
        return { done: e, value: a };
      }
      function Yw() {
        return this;
      }
      function Hw(e) {
        for (var a, s = this; s instanceof pn; ) {
          var f = Yh(s);
          f.__index__ = 0, f.__values__ = l, a ? v.__wrapped__ = f : a = f;
          var v = f;
          s = s.__wrapped__;
        }
        return v.__wrapped__ = e, a;
      }
      function Gw() {
        var e = this.__wrapped__;
        if (e instanceof at) {
          var a = e;
          return this.__actions__.length && (a = new at(this)), a = a.reverse(), a.__actions__.push({
            func: Cu,
            args: [Sf],
            thisArg: l
          }), new Yi(a, this.__chain__);
        }
        return this.thru(Sf);
      }
      function Kw() {
        return ph(this.__wrapped__, this.__actions__);
      }
      var Qw = mu(function(e, a, s) {
        Ct.call(e, s) ? ++e[s] : Pl(e, s, 1);
      });
      function Zw(e, a, s) {
        var f = Je(e) ? Xr : Gb;
        return s && Ui(e, a, s) && (a = l), f(e, We(a, 3));
      }
      function Jw(e, a) {
        var s = Je(e) ? Ql : fu;
        return s(e, We(a, 3));
      }
      var Xw = Ch(Hh), e0 = Ch(Gh);
      function t0(e, a) {
        return gi(Eu(e, a), 1);
      }
      function i0(e, a) {
        return gi(Eu(e, a), Fe);
      }
      function l0(e, a, s) {
        return s = s === l ? 1 : it(s), gi(Eu(e, a), s);
      }
      function ep(e, a) {
        var s = Je(e) ? ei : ea;
        return s(e, We(a, 3));
      }
      function tp(e, a) {
        var s = Je(e) ? Jc : bu;
        return s(e, We(a, 3));
      }
      var a0 = mu(function(e, a, s) {
        Ct.call(e, s) ? e[s].push(a) : Pl(e, s, [a]);
      });
      function r0(e, a, s, f) {
        e = Ki(e) ? e : Rn(e), s = s && !f ? it(s) : 0;
        var v = e.length;
        return s < 0 && (s = ti(v + s, 0)), Du(e) ? s <= v && e.indexOf(a, s) > -1 : !!v && Pa(e, a, s) > -1;
      }
      var n0 = ct(function(e, a, s) {
        var f = -1, v = typeof a == "function", k = Ki(e) ? V(e.length) : [];
        return ea(e, function(E) {
          k[++f] = v ? ki(a, E, s) : _l(E, a, s);
        }), k;
      }), s0 = mu(function(e, a, s) {
        Pl(e, s, a);
      });
      function Eu(e, a) {
        var s = Je(e) ? Mt : H;
        return s(e, We(a, 3));
      }
      function o0(e, a, s, f) {
        return e == null ? [] : (Je(a) || (a = a == null ? [] : [a]), s = f ? l : s, Je(s) || (s = s == null ? [] : [s]), Fl(e, a, s));
      }
      var u0 = mu(function(e, a, s) {
        e[s ? 0 : 1].push(a);
      }, function() {
        return [[], []];
      });
      function c0(e, a, s) {
        var f = Je(e) ? us : Wo, v = arguments.length < 3;
        return f(e, We(a, 4), s, v, ea);
      }
      function b0(e, a, s) {
        var f = Je(e) ? Xc : Wo, v = arguments.length < 3;
        return f(e, We(a, 4), s, v, bu);
      }
      function f0(e, a) {
        var s = Je(e) ? Ql : fu;
        return s(e, Ou(We(a, 3)));
      }
      function d0(e) {
        var a = Je(e) ? uu : ry;
        return a(e);
      }
      function h0(e, a, s) {
        (s ? Ui(e, a, s) : a === l) ? a = 1 : a = it(a);
        var f = Je(e) ? Vb : ny;
        return f(e, a);
      }
      function p0(e) {
        var a = Je(e) ? zb : oy;
        return a(e);
      }
      function v0(e) {
        if (e == null)
          return 0;
        if (Ki(e))
          return Du(e) ? Zl(e) : e.length;
        var a = Mi(e);
        return a == we || a == Ot ? e.size : h(e).length;
      }
      function g0(e, a, s) {
        var f = Je(e) ? cs : uy;
        return s && Ui(e, a, s) && (a = l), f(e, We(a, 3));
      }
      var m0 = ct(function(e, a) {
        if (e == null)
          return [];
        var s = a.length;
        return s > 1 && Ui(e, a[0], a[1]) ? a = [] : s > 2 && Ui(a[0], a[1], a[2]) && (a = [a[0]]), Fl(e, gi(a, 1), []);
      }), Tu = _b || function() {
        return vi.Date.now();
      };
      function y0(e, a) {
        if (typeof a != "function")
          throw new zi(c);
        return e = it(e), function() {
          if (--e < 1)
            return a.apply(this, arguments);
        };
      }
      function ip(e, a, s) {
        return a = s ? l : a, a = e && a == null ? e.length : a, ya(e, $, l, l, l, l, a);
      }
      function lp(e, a) {
        var s;
        if (typeof a != "function")
          throw new zi(c);
        return e = it(e), function() {
          return --e > 0 && (s = a.apply(this, arguments)), e <= 1 && (a = l), s;
        };
      }
      var Rf = ct(function(e, a, s) {
        var f = g;
        if (s.length) {
          var v = nl(s, Sn(Rf));
          f |= R;
        }
        return ya(e, f, a, s, v);
      }), ap = ct(function(e, a, s) {
        var f = g | G;
        if (s.length) {
          var v = nl(s, Sn(ap));
          f |= R;
        }
        return ya(a, f, e, s, v);
      });
      function rp(e, a, s) {
        a = s ? l : a;
        var f = ya(e, F, l, l, l, l, l, a);
        return f.placeholder = rp.placeholder, f;
      }
      function np(e, a, s) {
        a = s ? l : a;
        var f = ya(e, ue, l, l, l, l, l, a);
        return f.placeholder = np.placeholder, f;
      }
      function sp(e, a, s) {
        var f, v, k, E, D, U, X = 0, te = !1, ae = !1, xe = !0;
        if (typeof e != "function")
          throw new zi(c);
        a = Rl(a) || 0, Jt(s) && (te = !!s.leading, ae = "maxWait" in s, k = ae ? ti(Rl(s.maxWait) || 0, a) : k, xe = "trailing" in s ? !!s.trailing : xe);
        function Ne(oi) {
          var Bl = f, ka = v;
          return f = v = l, X = oi, E = e.apply(ka, Bl), E;
        }
        function $e(oi) {
          return X = oi, D = Os(pt, a), te ? Ne(oi) : E;
        }
        function nt(oi) {
          var Bl = oi - U, ka = oi - X, Cp = a - Bl;
          return ae ? Zt(Cp, k - ka) : Cp;
        }
        function Ve(oi) {
          var Bl = oi - U, ka = oi - X;
          return U === l || Bl >= a || Bl < 0 || ae && ka >= k;
        }
        function pt() {
          var oi = Tu();
          if (Ve(oi))
            return mt(oi);
          D = Os(pt, nt(oi));
        }
        function mt(oi) {
          return D = l, xe && f ? Ne(oi) : (f = v = l, E);
        }
        function cl() {
          D !== l && gh(D), X = 0, f = U = v = D = l;
        }
        function Bi() {
          return D === l ? E : mt(Tu());
        }
        function bl() {
          var oi = Tu(), Bl = Ve(oi);
          if (f = arguments, v = this, U = oi, Bl) {
            if (D === l)
              return $e(U);
            if (ae)
              return gh(D), D = Os(pt, a), Ne(U);
          }
          return D === l && (D = Os(pt, a)), E;
        }
        return bl.cancel = cl, bl.flush = Bi, bl;
      }
      var w0 = ct(function(e, a) {
        return ml(e, 1, a);
      }), _0 = ct(function(e, a, s) {
        return ml(e, Rl(a) || 0, s);
      });
      function x0(e) {
        return ya(e, z);
      }
      function Au(e, a) {
        if (typeof e != "function" || a != null && typeof a != "function")
          throw new zi(c);
        var s = function() {
          var f = arguments, v = a ? a.apply(this, f) : f[0], k = s.cache;
          if (k.has(v))
            return k.get(v);
          var E = e.apply(this, f);
          return s.cache = k.set(v, E) || k, E;
        };
        return s.cache = new (Au.Cache || Il)(), s;
      }
      Au.Cache = Il;
      function Ou(e) {
        if (typeof e != "function")
          throw new zi(c);
        return function() {
          var a = arguments;
          switch (a.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, a[0]);
            case 2:
              return !e.call(this, a[0], a[1]);
            case 3:
              return !e.call(this, a[0], a[1], a[2]);
          }
          return !e.apply(this, a);
        };
      }
      function S0(e) {
        return lp(2, e);
      }
      var k0 = cy(function(e, a) {
        a = a.length == 1 && Je(a[0]) ? Mt(a[0], Oi(We())) : Mt(gi(a, 1), Oi(We()));
        var s = a.length;
        return ct(function(f) {
          for (var v = -1, k = Zt(f.length, s); ++v < k; )
            f[v] = a[v].call(this, f[v]);
          return ki(e, this, f);
        });
      }), Cf = ct(function(e, a) {
        var s = nl(a, Sn(Cf));
        return ya(e, R, l, a, s);
      }), op = ct(function(e, a) {
        var s = nl(a, Sn(op));
        return ya(e, se, l, a, s);
      }), R0 = wa(function(e, a) {
        return ya(e, K, l, l, l, a);
      });
      function C0(e, a) {
        if (typeof e != "function")
          throw new zi(c);
        return a = a === l ? a : it(a), ct(e, a);
      }
      function E0(e, a) {
        if (typeof e != "function")
          throw new zi(c);
        return a = a == null ? 0 : ti(it(a), 0), ct(function(s) {
          var f = s[a], v = Ga(s, 0, a);
          return f && vl(v, f), ki(e, this, v);
        });
      }
      function T0(e, a, s) {
        var f = !0, v = !0;
        if (typeof e != "function")
          throw new zi(c);
        return Jt(s) && (f = "leading" in s ? !!s.leading : f, v = "trailing" in s ? !!s.trailing : v), sp(e, a, {
          leading: f,
          maxWait: a,
          trailing: v
        });
      }
      function A0(e) {
        return ip(e, 1);
      }
      function O0(e, a) {
        return Cf(cf(a), e);
      }
      function M0() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return Je(e) ? e : [e];
      }
      function D0(e) {
        return Fi(e, N);
      }
      function L0(e, a) {
        return a = typeof a == "function" ? a : l, Fi(e, N, a);
      }
      function N0(e) {
        return Fi(e, C | N);
      }
      function I0(e, a) {
        return a = typeof a == "function" ? a : l, Fi(e, C | N, a);
      }
      function P0(e, a) {
        return a == null || cu(e, a, _i(a));
      }
      function Ul(e, a) {
        return e === a || e !== e && a !== a;
      }
      var j0 = xu(ks), F0 = xu(function(e, a) {
        return e >= a;
      }), Tr = pu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? pu : function(e) {
        return ii(e) && Ct.call(e, "callee") && !Zo.call(e, "callee");
      }, Je = V.isArray, U0 = No ? Oi(No) : Xb;
      function Ki(e) {
        return e != null && Mu(e.length) && !xa(e);
      }
      function si(e) {
        return ii(e) && Ki(e);
      }
      function B0(e) {
        return e === !0 || e === !1 || ii(e) && Ri(e) == me;
      }
      var Ka = Xo || jf, W0 = ss ? Oi(ss) : ef;
      function q0(e) {
        return ii(e) && e.nodeType === 1 && !Ms(e);
      }
      function $0(e) {
        if (e == null)
          return !0;
        if (Ki(e) && (Je(e) || typeof e == "string" || typeof e.splice == "function" || Ka(e) || kn(e) || Tr(e)))
          return !e.length;
        var a = Mi(e);
        if (a == we || a == Ot)
          return !e.size;
        if (As(e))
          return !h(e).length;
        for (var s in e)
          if (Ct.call(e, s))
            return !1;
        return !0;
      }
      function V0(e, a) {
        return kr(e, a);
      }
      function z0(e, a, s) {
        s = typeof s == "function" ? s : l;
        var f = s ? s(e, a) : l;
        return f === l ? kr(e, a, l, s) : !!f;
      }
      function Ef(e) {
        if (!ii(e))
          return !1;
        var a = Ri(e);
        return a == Pe || a == Ee || typeof e.message == "string" && typeof e.name == "string" && !Ms(e);
      }
      function Y0(e) {
        return typeof e == "number" && mr(e);
      }
      function xa(e) {
        if (!Jt(e))
          return !1;
        var a = Ri(e);
        return a == Ue || a == St || a == je || a == It;
      }
      function up(e) {
        return typeof e == "number" && e == it(e);
      }
      function Mu(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Te;
      }
      function Jt(e) {
        var a = typeof e;
        return e != null && (a == "object" || a == "function");
      }
      function ii(e) {
        return e != null && typeof e == "object";
      }
      var cp = Io ? Oi(Io) : Cs;
      function H0(e, a) {
        return e === a || ta(e, a, gf(a));
      }
      function G0(e, a, s) {
        return s = typeof s == "function" ? s : l, ta(e, a, gf(a), s);
      }
      function K0(e) {
        return bp(e) && e != +e;
      }
      function Q0(e) {
        if (Ly(e))
          throw new Qe(b);
        return Rr(e);
      }
      function Z0(e) {
        return e === null;
      }
      function J0(e) {
        return e == null;
      }
      function bp(e) {
        return typeof e == "number" || ii(e) && Ri(e) == ce;
      }
      function Ms(e) {
        if (!ii(e) || Ri(e) != kt)
          return !1;
        var a = on(e);
        if (a === null)
          return !0;
        var s = Ct.call(a, "constructor") && a.constructor;
        return typeof s == "function" && s instanceof s && pr.call(s) == gb;
      }
      var Tf = Po ? Oi(Po) : gt;
      function X0(e) {
        return up(e) && e >= -Te && e <= Te;
      }
      var fp = br ? Oi(br) : r;
      function Du(e) {
        return typeof e == "string" || !Je(e) && ii(e) && Ri(e) == Ai;
      }
      function ul(e) {
        return typeof e == "symbol" || ii(e) && Ri(e) == Hl;
      }
      var kn = Ml ? Oi(Ml) : o;
      function e_(e) {
        return e === l;
      }
      function t_(e) {
        return ii(e) && Mi(e) == Ii;
      }
      function i_(e) {
        return ii(e) && Ri(e) == bi;
      }
      var l_ = xu(O), a_ = xu(function(e, a) {
        return e <= a;
      });
      function dp(e) {
        if (!e)
          return [];
        if (Ki(e))
          return Du(e) ? ji(e) : Gi(e);
        if (vr && e[vr])
          return ob(e[vr]());
        var a = Mi(e), s = a == we ? vs : a == Ot ? Fa : Rn;
        return s(e);
      }
      function Sa(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Rl(e), e === Fe || e === -Fe) {
          var a = e < 0 ? -1 : 1;
          return a * de;
        }
        return e === e ? e : 0;
      }
      function it(e) {
        var a = Sa(e), s = a % 1;
        return a === a ? s ? a - s : a : 0;
      }
      function hp(e) {
        return e ? ga(it(e), 0, ve) : 0;
      }
      function Rl(e) {
        if (typeof e == "number")
          return e;
        if (ul(e))
          return re;
        if (Jt(e)) {
          var a = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Jt(a) ? a + "" : a;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = qo(e);
        var s = lt.test(e);
        return s || qt.test(e) ? Do(e.slice(2), s ? 2 : 8) : dt.test(e) ? re : +e;
      }
      function pp(e) {
        return ia(e, Qi(e));
      }
      function r_(e) {
        return e ? ga(it(e), -Te, Te) : e === 0 ? e : 0;
      }
      function Et(e) {
        return e == null ? "" : ol(e);
      }
      var n_ = _n(function(e, a) {
        if (As(a) || Ki(a)) {
          ia(a, _i(a), e);
          return;
        }
        for (var s in a)
          Ct.call(a, s) && Sr(e, s, a[s]);
      }), vp = _n(function(e, a) {
        ia(a, Qi(a), e);
      }), Lu = _n(function(e, a, s, f) {
        ia(a, Qi(a), e, f);
      }), s_ = _n(function(e, a, s, f) {
        ia(a, _i(a), e, f);
      }), o_ = wa(yn);
      function u_(e, a) {
        var s = Va(e);
        return a == null ? s : ws(s, a);
      }
      var c_ = ct(function(e, a) {
        e = ut(e);
        var s = -1, f = a.length, v = f > 2 ? a[2] : l;
        for (v && Ui(a[0], a[1], v) && (f = 1); ++s < f; )
          for (var k = a[s], E = Qi(k), D = -1, U = E.length; ++D < U; ) {
            var X = E[D], te = e[X];
            (te === l || Ul(te, Ba[X]) && !Ct.call(e, X)) && (e[X] = k[X]);
          }
        return e;
      }), b_ = ct(function(e) {
        return e.push(l, Lh), ki(gp, l, e);
      });
      function f_(e, a) {
        return Fo(e, We(a, 3), yl);
      }
      function d_(e, a) {
        return Fo(e, We(a, 3), Ss);
      }
      function h_(e, a) {
        return e == null ? e : xs(e, We(a, 3), Qi);
      }
      function p_(e, a) {
        return e == null ? e : du(e, We(a, 3), Qi);
      }
      function v_(e, a) {
        return e && yl(e, We(a, 3));
      }
      function g_(e, a) {
        return e && Ss(e, We(a, 3));
      }
      function m_(e) {
        return e == null ? [] : wl(e, _i(e));
      }
      function y_(e) {
        return e == null ? [] : wl(e, Qi(e));
      }
      function Af(e, a, s) {
        var f = e == null ? l : ma(e, a);
        return f === l ? s : f;
      }
      function w_(e, a) {
        return e != null && Ph(e, a, Qb);
      }
      function Of(e, a) {
        return e != null && Ph(e, a, Zb);
      }
      var __ = Th(function(e, a, s) {
        a != null && typeof a.toString != "function" && (a = rn.call(a)), e[a] = s;
      }, Df(Zi)), x_ = Th(function(e, a, s) {
        a != null && typeof a.toString != "function" && (a = rn.call(a)), Ct.call(e, a) ? e[a].push(s) : e[a] = [s];
      }, We), S_ = ct(_l);
      function _i(e) {
        return Ki(e) ? mn(e) : h(e);
      }
      function Qi(e) {
        return Ki(e) ? mn(e, !0) : w(e);
      }
      function k_(e, a) {
        var s = {};
        return a = We(a, 3), yl(e, function(f, v, k) {
          Pl(s, a(f, v, k), f);
        }), s;
      }
      function R_(e, a) {
        var s = {};
        return a = We(a, 3), yl(e, function(f, v, k) {
          Pl(s, v, a(f, v, k));
        }), s;
      }
      var C_ = _n(function(e, a, s) {
        rt(e, a, s);
      }), gp = _n(function(e, a, s, f) {
        rt(e, a, s, f);
      }), E_ = wa(function(e, a) {
        var s = {};
        if (e == null)
          return s;
        var f = !1;
        a = Mt(a, function(k) {
          return k = Ha(k, e), f || (f = k.length > 1), k;
        }), ia(e, pf(e), s), f && (s = Fi(s, C | M | N, _y));
        for (var v = a.length; v--; )
          sf(s, a[v]);
        return s;
      });
      function T_(e, a) {
        return mp(e, Ou(We(a)));
      }
      var A_ = wa(function(e, a) {
        return e == null ? {} : iy(e, a);
      });
      function mp(e, a) {
        if (e == null)
          return {};
        var s = Mt(pf(e), function(f) {
          return [f];
        });
        return a = We(a), uh(e, s, function(f, v) {
          return a(f, v[0]);
        });
      }
      function O_(e, a, s) {
        a = Ha(a, e);
        var f = -1, v = a.length;
        for (v || (v = 1, e = l); ++f < v; ) {
          var k = e == null ? l : e[la(a[f])];
          k === l && (f = v, k = s), e = xa(k) ? k.call(e) : k;
        }
        return e;
      }
      function M_(e, a, s) {
        return e == null ? e : Es(e, a, s);
      }
      function D_(e, a, s, f) {
        return f = typeof f == "function" ? f : l, e == null ? e : Es(e, a, s, f);
      }
      var yp = Mh(_i), wp = Mh(Qi);
      function L_(e, a, s) {
        var f = Je(e), v = f || Ka(e) || kn(e);
        if (a = We(a, 4), s == null) {
          var k = e && e.constructor;
          v ? s = f ? new k() : [] : Jt(e) ? s = xa(k) ? Va(on(e)) : {} : s = {};
        }
        return (v ? ei : yl)(e, function(E, D, U) {
          return a(s, E, D, U);
        }), s;
      }
      function N_(e, a) {
        return e == null ? !0 : sf(e, a);
      }
      function I_(e, a, s) {
        return e == null ? e : hh(e, a, cf(s));
      }
      function P_(e, a, s, f) {
        return f = typeof f == "function" ? f : l, e == null ? e : hh(e, a, cf(s), f);
      }
      function Rn(e) {
        return e == null ? [] : ps(e, _i(e));
      }
      function j_(e) {
        return e == null ? [] : ps(e, Qi(e));
      }
      function F_(e, a, s) {
        return s === l && (s = a, a = l), s !== l && (s = Rl(s), s = s === s ? s : 0), a !== l && (a = Rl(a), a = a === a ? a : 0), ga(Rl(e), a, s);
      }
      function U_(e, a, s) {
        return a = Sa(a), s === l ? (s = a, a = 0) : s = Sa(s), e = Rl(e), Jb(e, a, s);
      }
      function B_(e, a, s) {
        if (s && typeof s != "boolean" && Ui(e, a, s) && (a = s = l), s === l && (typeof a == "boolean" ? (s = a, a = l) : typeof e == "boolean" && (s = e, e = l)), e === l && a === l ? (e = 0, a = 1) : (e = Sa(e), a === l ? (a = e, e = 0) : a = Sa(a)), e > a) {
          var f = e;
          e = a, a = f;
        }
        if (s || e % 1 || a % 1) {
          var v = iu();
          return Zt(e + v * (a - e + Mo("1e-" + ((v + "").length - 1))), a);
        }
        return af(e, a);
      }
      var W_ = xn(function(e, a, s) {
        return a = a.toLowerCase(), e + (s ? _p(a) : a);
      });
      function _p(e) {
        return Mf(Et(e).toLowerCase());
      }
      function xp(e) {
        return e = Et(e), e && e.replace(ai, Vo).replace(qc, "");
      }
      function q_(e, a, s) {
        e = Et(e), a = ol(a);
        var f = e.length;
        s = s === l ? f : ga(it(s), 0, f);
        var v = s;
        return s -= a.length, s >= 0 && e.slice(s, v) == a;
      }
      function $_(e) {
        return e = Et(e), e && Ge.test(e) ? e.replace(Oe, ab) : e;
      }
      function V_(e) {
        return e = Et(e), e && ot.test(e) ? e.replace(Pi, "\\$&") : e;
      }
      var z_ = xn(function(e, a, s) {
        return e + (s ? "-" : "") + a.toLowerCase();
      }), Y_ = xn(function(e, a, s) {
        return e + (s ? " " : "") + a.toLowerCase();
      }), H_ = Rh("toLowerCase");
      function G_(e, a, s) {
        e = Et(e), a = it(a);
        var f = a ? Zl(e) : 0;
        if (!a || f >= a)
          return e;
        var v = (a - f) / 2;
        return _u(gr(v), s) + e + _u(cn(v), s);
      }
      function K_(e, a, s) {
        e = Et(e), a = it(a);
        var f = a ? Zl(e) : 0;
        return a && f < a ? e + _u(a - f, s) : e;
      }
      function Q_(e, a, s) {
        e = Et(e), a = it(a);
        var f = a ? Zl(e) : 0;
        return a && f < a ? _u(a - f, s) + e : e;
      }
      function Z_(e, a, s) {
        return s || a == null ? a = 0 : a && (a = +a), tu(Et(e).replace(xi, ""), a || 0);
      }
      function J_(e, a, s) {
        return (s ? Ui(e, a, s) : a === l) ? a = 1 : a = it(a), rf(Et(e), a);
      }
      function X_() {
        var e = arguments, a = Et(e[0]);
        return e.length < 3 ? a : a.replace(e[1], e[2]);
      }
      var ex = xn(function(e, a, s) {
        return e + (s ? "_" : "") + a.toLowerCase();
      });
      function tx(e, a, s) {
        return s && typeof s != "number" && Ui(e, a, s) && (a = s = l), s = s === l ? ve : s >>> 0, s ? (e = Et(e), e && (typeof a == "string" || a != null && !Tf(a)) && (a = ol(a), !a && gl(e)) ? Ga(ji(e), 0, s) : e.split(a, s)) : [];
      }
      var ix = xn(function(e, a, s) {
        return e + (s ? " " : "") + Mf(a);
      });
      function lx(e, a, s) {
        return e = Et(e), s = s == null ? 0 : ga(it(s), 0, e.length), a = ol(a), e.slice(s, s + a.length) == a;
      }
      function ax(e, a, s) {
        var f = _.templateSettings;
        s && Ui(e, a, s) && (a = l), e = Et(e), a = Lu({}, a, f, Dh);
        var v = Lu({}, a.imports, f.imports, Dh), k = _i(v), E = ps(v, k), D, U, X = 0, te = a.interpolate || Si, ae = "__p += '", xe = Dl(
          (a.escape || Si).source + "|" + te.source + "|" + (te === Wt ? Xe : Si).source + "|" + (a.evaluate || Si).source + "|$",
          "g"
        ), Ne = "//# sourceURL=" + (Ct.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Hc + "]") + `
`;
        e.replace(xe, function(Ve, pt, mt, cl, Bi, bl) {
          return mt || (mt = cl), ae += e.slice(X, bl).replace(pl, rb), pt && (D = !0, ae += `' +
__e(` + pt + `) +
'`), Bi && (U = !0, ae += `';
` + Bi + `;
__p += '`), mt && (ae += `' +
((__t = (` + mt + `)) == null ? '' : __t) +
'`), X = bl + Ve.length, Ve;
        }), ae += `';
`;
        var $e = Ct.call(a, "variable") && a.variable;
        if (!$e)
          ae = `with (obj) {
` + ae + `
}
`;
        else if (fe.test($e))
          throw new Qe(p);
        ae = (U ? ae.replace(ge, "") : ae).replace(he, "$1").replace(_e, "$1;"), ae = "function(" + ($e || "obj") + `) {
` + ($e ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (D ? ", __e = _.escape" : "") + (U ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
        var nt = kp(function() {
          return xt(k, Ne + "return " + ae).apply(l, E);
        });
        if (nt.source = ae, Ef(nt))
          throw nt;
        return nt;
      }
      function rx(e) {
        return Et(e).toLowerCase();
      }
      function nx(e) {
        return Et(e).toUpperCase();
      }
      function sx(e, a, s) {
        if (e = Et(e), e && (s || a === l))
          return qo(e);
        if (!e || !(a = ol(a)))
          return e;
        var f = ji(e), v = ji(a), k = Nt(f, v), E = $o(f, v) + 1;
        return Ga(f, k, E).join("");
      }
      function ox(e, a, s) {
        if (e = Et(e), e && (s || a === l))
          return e.slice(0, ln(e) + 1);
        if (!e || !(a = ol(a)))
          return e;
        var f = ji(e), v = $o(f, ji(a)) + 1;
        return Ga(f, 0, v).join("");
      }
      function ux(e, a, s) {
        if (e = Et(e), e && (s || a === l))
          return e.replace(xi, "");
        if (!e || !(a = ol(a)))
          return e;
        var f = ji(e), v = Nt(f, ji(a));
        return Ga(f, v).join("");
      }
      function cx(e, a) {
        var s = pe, f = Me;
        if (Jt(a)) {
          var v = "separator" in a ? a.separator : v;
          s = "length" in a ? it(a.length) : s, f = "omission" in a ? ol(a.omission) : f;
        }
        e = Et(e);
        var k = e.length;
        if (gl(e)) {
          var E = ji(e);
          k = E.length;
        }
        if (s >= k)
          return e;
        var D = s - Zl(f);
        if (D < 1)
          return f;
        var U = E ? Ga(E, 0, D).join("") : e.slice(0, D);
        if (v === l)
          return U + f;
        if (E && (D += U.length - D), Tf(v)) {
          if (e.slice(D).search(v)) {
            var X, te = U;
            for (v.global || (v = Dl(v.source, Et(ft.exec(v)) + "g")), v.lastIndex = 0; X = v.exec(te); )
              var ae = X.index;
            U = U.slice(0, ae === l ? D : ae);
          }
        } else if (e.indexOf(ol(v), D) != D) {
          var xe = U.lastIndexOf(v);
          xe > -1 && (U = U.slice(0, xe));
        }
        return U + f;
      }
      function bx(e) {
        return e = Et(e), e && Ie.test(e) ? e.replace(De, bb) : e;
      }
      var fx = xn(function(e, a, s) {
        return e + (s ? " " : "") + a.toUpperCase();
      }), Mf = Rh("toUpperCase");
      function Sp(e, a, s) {
        return e = Et(e), a = s ? l : a, a === l ? sb(e) ? hb(e) : tb(e) : e.match(a) || [];
      }
      var kp = ct(function(e, a) {
        try {
          return ki(e, l, a);
        } catch (s) {
          return Ef(s) ? s : new Qe(s);
        }
      }), dx = wa(function(e, a) {
        return ei(a, function(s) {
          s = la(s), Pl(e, s, Rf(e[s], e));
        }), e;
      });
      function hx(e) {
        var a = e == null ? 0 : e.length, s = We();
        return e = a ? Mt(e, function(f) {
          if (typeof f[1] != "function")
            throw new zi(c);
          return [s(f[0]), f[1]];
        }) : [], ct(function(f) {
          for (var v = -1; ++v < a; ) {
            var k = e[v];
            if (ki(k[0], this, f))
              return ki(k[1], this, f);
          }
        });
      }
      function px(e) {
        return _s(Fi(e, C));
      }
      function Df(e) {
        return function() {
          return e;
        };
      }
      function vx(e, a) {
        return e == null || e !== e ? a : e;
      }
      var gx = Eh(), mx = Eh(!0);
      function Zi(e) {
        return e;
      }
      function Lf(e) {
        return d(typeof e == "function" ? e : Fi(e, C));
      }
      function yx(e) {
        return Se(Fi(e, C));
      }
      function wx(e, a) {
        return ze(e, Fi(a, C));
      }
      var _x = ct(function(e, a) {
        return function(s) {
          return _l(s, e, a);
        };
      }), xx = ct(function(e, a) {
        return function(s) {
          return _l(e, s, a);
        };
      });
      function Nf(e, a, s) {
        var f = _i(a), v = wl(a, f);
        s == null && !(Jt(a) && (v.length || !f.length)) && (s = a, a = e, e = this, v = wl(a, _i(a)));
        var k = !(Jt(s) && "chain" in s) || !!s.chain, E = xa(e);
        return ei(v, function(D) {
          var U = a[D];
          e[D] = U, E && (e.prototype[D] = function() {
            var X = this.__chain__;
            if (k || X) {
              var te = e(this.__wrapped__), ae = te.__actions__ = Gi(this.__actions__);
              return ae.push({ func: U, args: arguments, thisArg: e }), te.__chain__ = X, te;
            }
            return U.apply(e, vl([this.value()], arguments));
          });
        }), e;
      }
      function Sx() {
        return vi._ === this && (vi._ = mb), this;
      }
      function If() {
      }
      function kx(e) {
        return e = it(e), ct(function(a) {
          return xl(a, e);
        });
      }
      var Rx = ff(Mt), Cx = ff(Xr), Ex = ff(cs);
      function Rp(e) {
        return yf(e) ? bs(la(e)) : ly(e);
      }
      function Tx(e) {
        return function(a) {
          return e == null ? l : ma(e, a);
        };
      }
      var Ax = Ah(), Ox = Ah(!0);
      function Pf() {
        return [];
      }
      function jf() {
        return !1;
      }
      function Mx() {
        return {};
      }
      function Dx() {
        return "";
      }
      function Lx() {
        return !0;
      }
      function Nx(e, a) {
        if (e = it(e), e < 1 || e > Te)
          return [];
        var s = ve, f = Zt(e, ve);
        a = We(a), e -= ve;
        for (var v = hs(f, a); ++s < e; )
          a(s);
        return v;
      }
      function Ix(e) {
        return Je(e) ? Mt(e, la) : ul(e) ? [e] : Gi(zh(Et(e)));
      }
      function Px(e) {
        var a = ++vb;
        return Et(e) + a;
      }
      var jx = wu(function(e, a) {
        return e + a;
      }, 0), Fx = df("ceil"), Ux = wu(function(e, a) {
        return e / a;
      }, 1), Bx = df("floor");
      function Wx(e) {
        return e && e.length ? wn(e, Zi, ks) : l;
      }
      function qx(e, a) {
        return e && e.length ? wn(e, We(a, 2), ks) : l;
      }
      function $x(e) {
        return da(e, Zi);
      }
      function Vx(e, a) {
        return da(e, We(a, 2));
      }
      function zx(e) {
        return e && e.length ? wn(e, Zi, O) : l;
      }
      function Yx(e, a) {
        return e && e.length ? wn(e, We(a, 2), O) : l;
      }
      var Hx = wu(function(e, a) {
        return e * a;
      }, 1), Gx = df("round"), Kx = wu(function(e, a) {
        return e - a;
      }, 0);
      function Qx(e) {
        return e && e.length ? ds(e, Zi) : 0;
      }
      function Zx(e, a) {
        return e && e.length ? ds(e, We(a, 2)) : 0;
      }
      return _.after = y0, _.ary = ip, _.assign = n_, _.assignIn = vp, _.assignInWith = Lu, _.assignWith = s_, _.at = o_, _.before = lp, _.bind = Rf, _.bindAll = dx, _.bindKey = ap, _.castArray = M0, _.chain = Xh, _.chunk = By, _.compact = Wy, _.concat = qy, _.cond = hx, _.conforms = px, _.constant = Df, _.countBy = Qw, _.create = u_, _.curry = rp, _.curryRight = np, _.debounce = sp, _.defaults = c_, _.defaultsDeep = b_, _.defer = w0, _.delay = _0, _.difference = $y, _.differenceBy = Vy, _.differenceWith = zy, _.drop = Yy, _.dropRight = Hy, _.dropRightWhile = Gy, _.dropWhile = Ky, _.fill = Qy, _.filter = Jw, _.flatMap = t0, _.flatMapDeep = i0, _.flatMapDepth = l0, _.flatten = Kh, _.flattenDeep = Zy, _.flattenDepth = Jy, _.flip = x0, _.flow = gx, _.flowRight = mx, _.fromPairs = Xy, _.functions = m_, _.functionsIn = y_, _.groupBy = a0, _.initial = tw, _.intersection = iw, _.intersectionBy = lw, _.intersectionWith = aw, _.invert = __, _.invertBy = x_, _.invokeMap = n0, _.iteratee = Lf, _.keyBy = s0, _.keys = _i, _.keysIn = Qi, _.map = Eu, _.mapKeys = k_, _.mapValues = R_, _.matches = yx, _.matchesProperty = wx, _.memoize = Au, _.merge = C_, _.mergeWith = gp, _.method = _x, _.methodOf = xx, _.mixin = Nf, _.negate = Ou, _.nthArg = kx, _.omit = E_, _.omitBy = T_, _.once = S0, _.orderBy = o0, _.over = Rx, _.overArgs = k0, _.overEvery = Cx, _.overSome = Ex, _.partial = Cf, _.partialRight = op, _.partition = u0, _.pick = A_, _.pickBy = mp, _.property = Rp, _.propertyOf = Tx, _.pull = ow, _.pullAll = Zh, _.pullAllBy = uw, _.pullAllWith = cw, _.pullAt = bw, _.range = Ax, _.rangeRight = Ox, _.rearg = R0, _.reject = f0, _.remove = fw, _.rest = C0, _.reverse = Sf, _.sampleSize = h0, _.set = M_, _.setWith = D_, _.shuffle = p0, _.slice = dw, _.sortBy = m0, _.sortedUniq = ww, _.sortedUniqBy = _w, _.split = tx, _.spread = E0, _.tail = xw, _.take = Sw, _.takeRight = kw, _.takeRightWhile = Rw, _.takeWhile = Cw, _.tap = Ww, _.throttle = T0, _.thru = Cu, _.toArray = dp, _.toPairs = yp, _.toPairsIn = wp, _.toPath = Ix, _.toPlainObject = pp, _.transform = L_, _.unary = A0, _.union = Ew, _.unionBy = Tw, _.unionWith = Aw, _.uniq = Ow, _.uniqBy = Mw, _.uniqWith = Dw, _.unset = N_, _.unzip = kf, _.unzipWith = Jh, _.update = I_, _.updateWith = P_, _.values = Rn, _.valuesIn = j_, _.without = Lw, _.words = Sp, _.wrap = O0, _.xor = Nw, _.xorBy = Iw, _.xorWith = Pw, _.zip = jw, _.zipObject = Fw, _.zipObjectDeep = Uw, _.zipWith = Bw, _.entries = yp, _.entriesIn = wp, _.extend = vp, _.extendWith = Lu, Nf(_, _), _.add = jx, _.attempt = kp, _.camelCase = W_, _.capitalize = _p, _.ceil = Fx, _.clamp = F_, _.clone = D0, _.cloneDeep = N0, _.cloneDeepWith = I0, _.cloneWith = L0, _.conformsTo = P0, _.deburr = xp, _.defaultTo = vx, _.divide = Ux, _.endsWith = q_, _.eq = Ul, _.escape = $_, _.escapeRegExp = V_, _.every = Zw, _.find = Xw, _.findIndex = Hh, _.findKey = f_, _.findLast = e0, _.findLastIndex = Gh, _.findLastKey = d_, _.floor = Bx, _.forEach = ep, _.forEachRight = tp, _.forIn = h_, _.forInRight = p_, _.forOwn = v_, _.forOwnRight = g_, _.get = Af, _.gt = j0, _.gte = F0, _.has = w_, _.hasIn = Of, _.head = Qh, _.identity = Zi, _.includes = r0, _.indexOf = ew, _.inRange = U_, _.invoke = S_, _.isArguments = Tr, _.isArray = Je, _.isArrayBuffer = U0, _.isArrayLike = Ki, _.isArrayLikeObject = si, _.isBoolean = B0, _.isBuffer = Ka, _.isDate = W0, _.isElement = q0, _.isEmpty = $0, _.isEqual = V0, _.isEqualWith = z0, _.isError = Ef, _.isFinite = Y0, _.isFunction = xa, _.isInteger = up, _.isLength = Mu, _.isMap = cp, _.isMatch = H0, _.isMatchWith = G0, _.isNaN = K0, _.isNative = Q0, _.isNil = J0, _.isNull = Z0, _.isNumber = bp, _.isObject = Jt, _.isObjectLike = ii, _.isPlainObject = Ms, _.isRegExp = Tf, _.isSafeInteger = X0, _.isSet = fp, _.isString = Du, _.isSymbol = ul, _.isTypedArray = kn, _.isUndefined = e_, _.isWeakMap = t_, _.isWeakSet = i_, _.join = rw, _.kebabCase = z_, _.last = kl, _.lastIndexOf = nw, _.lowerCase = Y_, _.lowerFirst = H_, _.lt = l_, _.lte = a_, _.max = Wx, _.maxBy = qx, _.mean = $x, _.meanBy = Vx, _.min = zx, _.minBy = Yx, _.stubArray = Pf, _.stubFalse = jf, _.stubObject = Mx, _.stubString = Dx, _.stubTrue = Lx, _.multiply = Hx, _.nth = sw, _.noConflict = Sx, _.noop = If, _.now = Tu, _.pad = G_, _.padEnd = K_, _.padStart = Q_, _.parseInt = Z_, _.random = B_, _.reduce = c0, _.reduceRight = b0, _.repeat = J_, _.replace = X_, _.result = O_, _.round = Gx, _.runInContext = j, _.sample = d0, _.size = v0, _.snakeCase = ex, _.some = g0, _.sortedIndex = hw, _.sortedIndexBy = pw, _.sortedIndexOf = vw, _.sortedLastIndex = gw, _.sortedLastIndexBy = mw, _.sortedLastIndexOf = yw, _.startCase = ix, _.startsWith = lx, _.subtract = Kx, _.sum = Qx, _.sumBy = Zx, _.template = ax, _.times = Nx, _.toFinite = Sa, _.toInteger = it, _.toLength = hp, _.toLower = rx, _.toNumber = Rl, _.toSafeInteger = r_, _.toString = Et, _.toUpper = nx, _.trim = sx, _.trimEnd = ox, _.trimStart = ux, _.truncate = cx, _.unescape = bx, _.uniqueId = Px, _.upperCase = fx, _.upperFirst = Mf, _.each = ep, _.eachRight = tp, _.first = Qh, Nf(_, function() {
        var e = {};
        return yl(_, function(a, s) {
          Ct.call(_.prototype, s) || (e[s] = a);
        }), e;
      }(), { chain: !1 }), _.VERSION = n, ei(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        _[e].placeholder = _;
      }), ei(["drop", "take"], function(e, a) {
        at.prototype[e] = function(s) {
          s = s === l ? 1 : ti(it(s), 0);
          var f = this.__filtered__ && !a ? new at(this) : this.clone();
          return f.__filtered__ ? f.__takeCount__ = Zt(s, f.__takeCount__) : f.__views__.push({
            size: Zt(s, ve),
            type: e + (f.__dir__ < 0 ? "Right" : "")
          }), f;
        }, at.prototype[e + "Right"] = function(s) {
          return this.reverse()[e](s).reverse();
        };
      }), ei(["filter", "map", "takeWhile"], function(e, a) {
        var s = a + 1, f = s == He || s == Ce;
        at.prototype[e] = function(v) {
          var k = this.clone();
          return k.__iteratees__.push({
            iteratee: We(v, 3),
            type: s
          }), k.__filtered__ = k.__filtered__ || f, k;
        };
      }), ei(["head", "last"], function(e, a) {
        var s = "take" + (a ? "Right" : "");
        at.prototype[e] = function() {
          return this[s](1).value()[0];
        };
      }), ei(["initial", "tail"], function(e, a) {
        var s = "drop" + (a ? "" : "Right");
        at.prototype[e] = function() {
          return this.__filtered__ ? new at(this) : this[s](1);
        };
      }), at.prototype.compact = function() {
        return this.filter(Zi);
      }, at.prototype.find = function(e) {
        return this.filter(e).head();
      }, at.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, at.prototype.invokeMap = ct(function(e, a) {
        return typeof e == "function" ? new at(this) : this.map(function(s) {
          return _l(s, e, a);
        });
      }), at.prototype.reject = function(e) {
        return this.filter(Ou(We(e)));
      }, at.prototype.slice = function(e, a) {
        e = it(e);
        var s = this;
        return s.__filtered__ && (e > 0 || a < 0) ? new at(s) : (e < 0 ? s = s.takeRight(-e) : e && (s = s.drop(e)), a !== l && (a = it(a), s = a < 0 ? s.dropRight(-a) : s.take(a - e)), s);
      }, at.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, at.prototype.toArray = function() {
        return this.take(ve);
      }, yl(at.prototype, function(e, a) {
        var s = /^(?:filter|find|map|reject)|While$/.test(a), f = /^(?:head|last)$/.test(a), v = _[f ? "take" + (a == "last" ? "Right" : "") : a], k = f || /^find/.test(a);
        v && (_.prototype[a] = function() {
          var E = this.__wrapped__, D = f ? [1] : arguments, U = E instanceof at, X = D[0], te = U || Je(E), ae = function(pt) {
            var mt = v.apply(_, vl([pt], D));
            return f && xe ? mt[0] : mt;
          };
          te && s && typeof X == "function" && X.length != 1 && (U = te = !1);
          var xe = this.__chain__, Ne = !!this.__actions__.length, $e = k && !xe, nt = U && !Ne;
          if (!k && te) {
            E = nt ? E : new at(this);
            var Ve = e.apply(E, D);
            return Ve.__actions__.push({ func: Cu, args: [ae], thisArg: l }), new Yi(Ve, xe);
          }
          return $e && nt ? e.apply(this, D) : (Ve = this.thru(ae), $e ? f ? Ve.value()[0] : Ve.value() : Ve);
        });
      }), ei(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var a = hr[e], s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(e);
        _.prototype[e] = function() {
          var v = arguments;
          if (f && !this.__chain__) {
            var k = this.value();
            return a.apply(Je(k) ? k : [], v);
          }
          return this[s](function(E) {
            return a.apply(Je(E) ? E : [], v);
          });
        };
      }), yl(at.prototype, function(e, a) {
        var s = _[a];
        if (s) {
          var f = s.name + "";
          Ct.call($a, f) || ($a[f] = []), $a[f].push({ name: a, func: s });
        }
      }), $a[yu(l, G).name] = [{
        name: "wrapper",
        func: l
      }], at.prototype.clone = Ab, at.prototype.reverse = Ob, at.prototype.value = Mb, _.prototype.at = qw, _.prototype.chain = $w, _.prototype.commit = Vw, _.prototype.next = zw, _.prototype.plant = Hw, _.prototype.reverse = Gw, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = Kw, _.prototype.first = _.prototype.head, vr && (_.prototype[vr] = Yw), _;
    }, Ua = pb();
    Kl ? ((Kl.exports = Ua)._ = Ua, ns._ = Ua) : vi._ = Ua;
  }).call(Kv);
})(Gu, Gu.exports);
var hi = Gu.exports;
const id = /* @__PURE__ */ Ld(hi);
function Zv(t, i) {
  return function() {
    return t.apply(i, arguments);
  };
}
const { toString: fS } = Object.prototype, { getPrototypeOf: Nd } = Object, { iterator: uc, toStringTag: Jv } = Symbol, cc = /* @__PURE__ */ ((t) => (i) => {
  const l = fS.call(i);
  return t[l] || (t[l] = l.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), zl = (t) => (t = t.toLowerCase(), (i) => cc(i) === t), bc = (t) => (i) => typeof i === t, { isArray: Hn } = Array, zs = bc("undefined");
function eo(t) {
  return t !== null && !zs(t) && t.constructor !== null && !zs(t.constructor) && tl(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Xv = zl("ArrayBuffer");
function dS(t) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(t) : i = t && t.buffer && Xv(t.buffer), i;
}
const hS = bc("string"), tl = bc("function"), eg = bc("number"), to = (t) => t !== null && typeof t == "object", pS = (t) => t === !0 || t === !1, qu = (t) => {
  if (cc(t) !== "object")
    return !1;
  const i = Nd(t);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Jv in t) && !(uc in t);
}, vS = (t) => {
  if (!to(t) || eo(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, gS = zl("Date"), mS = zl("File"), yS = zl("Blob"), wS = zl("FileList"), _S = (t) => to(t) && tl(t.pipe), xS = (t) => {
  let i;
  return t && (typeof FormData == "function" && t instanceof FormData || tl(t.append) && ((i = cc(t)) === "formdata" || // detect form-data instance
  i === "object" && tl(t.toString) && t.toString() === "[object FormData]"));
}, SS = zl("URLSearchParams"), [kS, RS, CS, ES] = ["ReadableStream", "Request", "Response", "Headers"].map(zl), TS = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function io(t, i, { allOwnKeys: l = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, u;
  if (typeof t != "object" && (t = [t]), Hn(t))
    for (n = 0, u = t.length; n < u; n++)
      i.call(null, t[n], n, t);
  else {
    if (eo(t))
      return;
    const b = l ? Object.getOwnPropertyNames(t) : Object.keys(t), c = b.length;
    let p;
    for (n = 0; n < c; n++)
      p = b[n], i.call(null, t[p], p, t);
  }
}
function tg(t, i) {
  if (eo(t))
    return null;
  i = i.toLowerCase();
  const l = Object.keys(t);
  let n = l.length, u;
  for (; n-- > 0; )
    if (u = l[n], i === u.toLowerCase())
      return u;
  return null;
}
const Or = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, ig = (t) => !zs(t) && t !== Or;
function ld() {
  const { caseless: t } = ig(this) && this || {}, i = {}, l = (n, u) => {
    const b = t && tg(i, u) || u;
    qu(i[b]) && qu(n) ? i[b] = ld(i[b], n) : qu(n) ? i[b] = ld({}, n) : Hn(n) ? i[b] = n.slice() : i[b] = n;
  };
  for (let n = 0, u = arguments.length; n < u; n++)
    arguments[n] && io(arguments[n], l);
  return i;
}
const AS = (t, i, l, { allOwnKeys: n } = {}) => (io(i, (u, b) => {
  l && tl(u) ? t[b] = Zv(u, l) : t[b] = u;
}, { allOwnKeys: n }), t), OS = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), MS = (t, i, l, n) => {
  t.prototype = Object.create(i.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: i.prototype
  }), l && Object.assign(t.prototype, l);
}, DS = (t, i, l, n) => {
  let u, b, c;
  const p = {};
  if (i = i || {}, t == null) return i;
  do {
    for (u = Object.getOwnPropertyNames(t), b = u.length; b-- > 0; )
      c = u[b], (!n || n(c, t, i)) && !p[c] && (i[c] = t[c], p[c] = !0);
    t = l !== !1 && Nd(t);
  } while (t && (!l || l(t, i)) && t !== Object.prototype);
  return i;
}, LS = (t, i, l) => {
  t = String(t), (l === void 0 || l > t.length) && (l = t.length), l -= i.length;
  const n = t.indexOf(i, l);
  return n !== -1 && n === l;
}, NS = (t) => {
  if (!t) return null;
  if (Hn(t)) return t;
  let i = t.length;
  if (!eg(i)) return null;
  const l = new Array(i);
  for (; i-- > 0; )
    l[i] = t[i];
  return l;
}, IS = /* @__PURE__ */ ((t) => (i) => t && i instanceof t)(typeof Uint8Array < "u" && Nd(Uint8Array)), PS = (t, i) => {
  const n = (t && t[uc]).call(t);
  let u;
  for (; (u = n.next()) && !u.done; ) {
    const b = u.value;
    i.call(t, b[0], b[1]);
  }
}, jS = (t, i) => {
  let l;
  const n = [];
  for (; (l = t.exec(i)) !== null; )
    n.push(l);
  return n;
}, FS = zl("HTMLFormElement"), US = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(l, n, u) {
    return n.toUpperCase() + u;
  }
), Dp = (({ hasOwnProperty: t }) => (i, l) => t.call(i, l))(Object.prototype), BS = zl("RegExp"), lg = (t, i) => {
  const l = Object.getOwnPropertyDescriptors(t), n = {};
  io(l, (u, b) => {
    let c;
    (c = i(u, b, t)) !== !1 && (n[b] = c || u);
  }), Object.defineProperties(t, n);
}, WS = (t) => {
  lg(t, (i, l) => {
    if (tl(t) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
      return !1;
    const n = t[l];
    if (tl(n)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + l + "'");
      });
    }
  });
}, qS = (t, i) => {
  const l = {}, n = (u) => {
    u.forEach((b) => {
      l[b] = !0;
    });
  };
  return Hn(t) ? n(t) : n(String(t).split(i)), l;
}, $S = () => {
}, VS = (t, i) => t != null && Number.isFinite(t = +t) ? t : i;
function zS(t) {
  return !!(t && tl(t.append) && t[Jv] === "FormData" && t[uc]);
}
const YS = (t) => {
  const i = new Array(10), l = (n, u) => {
    if (to(n)) {
      if (i.indexOf(n) >= 0)
        return;
      if (eo(n))
        return n;
      if (!("toJSON" in n)) {
        i[u] = n;
        const b = Hn(n) ? [] : {};
        return io(n, (c, p) => {
          const y = l(c, u + 1);
          !zs(y) && (b[p] = y);
        }), i[u] = void 0, b;
      }
    }
    return n;
  };
  return l(t, 0);
}, HS = zl("AsyncFunction"), GS = (t) => t && (to(t) || tl(t)) && tl(t.then) && tl(t.catch), ag = ((t, i) => t ? setImmediate : i ? ((l, n) => (Or.addEventListener("message", ({ source: u, data: b }) => {
  u === Or && b === l && n.length && n.shift()();
}, !1), (u) => {
  n.push(u), Or.postMessage(l, "*");
}))(`axios@${Math.random()}`, []) : (l) => setTimeout(l))(
  typeof setImmediate == "function",
  tl(Or.postMessage)
), KS = typeof queueMicrotask < "u" ? queueMicrotask.bind(Or) : typeof process < "u" && process.nextTick || ag, QS = (t) => t != null && tl(t[uc]), Y = {
  isArray: Hn,
  isArrayBuffer: Xv,
  isBuffer: eo,
  isFormData: xS,
  isArrayBufferView: dS,
  isString: hS,
  isNumber: eg,
  isBoolean: pS,
  isObject: to,
  isPlainObject: qu,
  isEmptyObject: vS,
  isReadableStream: kS,
  isRequest: RS,
  isResponse: CS,
  isHeaders: ES,
  isUndefined: zs,
  isDate: gS,
  isFile: mS,
  isBlob: yS,
  isRegExp: BS,
  isFunction: tl,
  isStream: _S,
  isURLSearchParams: SS,
  isTypedArray: IS,
  isFileList: wS,
  forEach: io,
  merge: ld,
  extend: AS,
  trim: TS,
  stripBOM: OS,
  inherits: MS,
  toFlatObject: DS,
  kindOf: cc,
  kindOfTest: zl,
  endsWith: LS,
  toArray: NS,
  forEachEntry: PS,
  matchAll: jS,
  isHTMLForm: FS,
  hasOwnProperty: Dp,
  hasOwnProp: Dp,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: lg,
  freezeMethods: WS,
  toObjectSet: qS,
  toCamelCase: US,
  noop: $S,
  toFiniteNumber: VS,
  findKey: tg,
  global: Or,
  isContextDefined: ig,
  isSpecCompliantForm: zS,
  toJSONObject: YS,
  isAsyncFn: HS,
  isThenable: GS,
  setImmediate: ag,
  asap: KS,
  isIterable: QS
};
function et(t, i, l, n, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", i && (this.code = i), l && (this.config = l), n && (this.request = n), u && (this.response = u, this.status = u.status ? u.status : null);
}
Y.inherits(et, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: Y.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const rg = et.prototype, ng = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  ng[t] = { value: t };
});
Object.defineProperties(et, ng);
Object.defineProperty(rg, "isAxiosError", { value: !0 });
et.from = (t, i, l, n, u, b) => {
  const c = Object.create(rg);
  return Y.toFlatObject(t, c, function(y) {
    return y !== Error.prototype;
  }, (p) => p !== "isAxiosError"), et.call(c, t.message, i, l, n, u), c.cause = t, c.name = t.name, b && Object.assign(c, b), c;
};
const ZS = null;
function ad(t) {
  return Y.isPlainObject(t) || Y.isArray(t);
}
function sg(t) {
  return Y.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Lp(t, i, l) {
  return t ? t.concat(i).map(function(u, b) {
    return u = sg(u), !l && b ? "[" + u + "]" : u;
  }).join(l ? "." : "") : i;
}
function JS(t) {
  return Y.isArray(t) && !t.some(ad);
}
const XS = Y.toFlatObject(Y, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function fc(t, i, l) {
  if (!Y.isObject(t))
    throw new TypeError("target must be an object");
  i = i || new FormData(), l = Y.toFlatObject(l, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(I, g) {
    return !Y.isUndefined(g[I]);
  });
  const n = l.metaTokens, u = l.visitor || S, b = l.dots, c = l.indexes, y = (l.Blob || typeof Blob < "u" && Blob) && Y.isSpecCompliantForm(i);
  if (!Y.isFunction(u))
    throw new TypeError("visitor must be a function");
  function x(A) {
    if (A === null) return "";
    if (Y.isDate(A))
      return A.toISOString();
    if (Y.isBoolean(A))
      return A.toString();
    if (!y && Y.isBlob(A))
      throw new et("Blob is not supported. Use a Buffer instead.");
    return Y.isArrayBuffer(A) || Y.isTypedArray(A) ? y && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function S(A, I, g) {
    let G = A;
    if (A && !g && typeof A == "object") {
      if (Y.endsWith(I, "{}"))
        I = n ? I : I.slice(0, -2), A = JSON.stringify(A);
      else if (Y.isArray(A) && JS(A) || (Y.isFileList(A) || Y.endsWith(I, "[]")) && (G = Y.toArray(A)))
        return I = sg(I), G.forEach(function(F, ue) {
          !(Y.isUndefined(F) || F === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? Lp([I], ue, b) : c === null ? I : I + "[]",
            x(F)
          );
        }), !1;
    }
    return ad(A) ? !0 : (i.append(Lp(g, I, b), x(A)), !1);
  }
  const C = [], M = Object.assign(XS, {
    defaultVisitor: S,
    convertValue: x,
    isVisitable: ad
  });
  function N(A, I) {
    if (!Y.isUndefined(A)) {
      if (C.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + I.join("."));
      C.push(A), Y.forEach(A, function(G, q) {
        (!(Y.isUndefined(G) || G === null) && u.call(
          i,
          G,
          Y.isString(q) ? q.trim() : q,
          I,
          M
        )) === !0 && N(G, I ? I.concat(q) : [q]);
      }), C.pop();
    }
  }
  if (!Y.isObject(t))
    throw new TypeError("data must be an object");
  return N(t), i;
}
function Np(t) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return i[n];
  });
}
function Id(t, i) {
  this._pairs = [], t && fc(t, this, i);
}
const og = Id.prototype;
og.append = function(i, l) {
  this._pairs.push([i, l]);
};
og.toString = function(i) {
  const l = i ? function(n) {
    return i.call(this, n, Np);
  } : Np;
  return this._pairs.map(function(u) {
    return l(u[0]) + "=" + l(u[1]);
  }, "").join("&");
};
function ek(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ug(t, i, l) {
  if (!i)
    return t;
  const n = l && l.encode || ek;
  Y.isFunction(l) && (l = {
    serialize: l
  });
  const u = l && l.serialize;
  let b;
  if (u ? b = u(i, l) : b = Y.isURLSearchParams(i) ? i.toString() : new Id(i, l).toString(n), b) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + b;
  }
  return t;
}
class Ip {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(i, l, n) {
    return this.handlers.push({
      fulfilled: i,
      rejected: l,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(i) {
    Y.forEach(this.handlers, function(n) {
      n !== null && i(n);
    });
  }
}
const cg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, tk = typeof URLSearchParams < "u" ? URLSearchParams : Id, ik = typeof FormData < "u" ? FormData : null, lk = typeof Blob < "u" ? Blob : null, ak = {
  isBrowser: !0,
  classes: {
    URLSearchParams: tk,
    FormData: ik,
    Blob: lk
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Pd = typeof window < "u" && typeof document < "u", rd = typeof navigator == "object" && navigator || void 0, rk = Pd && (!rd || ["ReactNative", "NativeScript", "NS"].indexOf(rd.product) < 0), nk = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", sk = Pd && window.location.href || "http://localhost", ok = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Pd,
  hasStandardBrowserEnv: rk,
  hasStandardBrowserWebWorkerEnv: nk,
  navigator: rd,
  origin: sk
}, Symbol.toStringTag, { value: "Module" })), Li = {
  ...ok,
  ...ak
};
function uk(t, i) {
  return fc(t, new Li.classes.URLSearchParams(), {
    visitor: function(l, n, u, b) {
      return Li.isNode && Y.isBuffer(l) ? (this.append(n, l.toString("base64")), !1) : b.defaultVisitor.apply(this, arguments);
    },
    ...i
  });
}
function ck(t) {
  return Y.matchAll(/\w+|\[(\w*)]/g, t).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function bk(t) {
  const i = {}, l = Object.keys(t);
  let n;
  const u = l.length;
  let b;
  for (n = 0; n < u; n++)
    b = l[n], i[b] = t[b];
  return i;
}
function bg(t) {
  function i(l, n, u, b) {
    let c = l[b++];
    if (c === "__proto__") return !0;
    const p = Number.isFinite(+c), y = b >= l.length;
    return c = !c && Y.isArray(u) ? u.length : c, y ? (Y.hasOwnProp(u, c) ? u[c] = [u[c], n] : u[c] = n, !p) : ((!u[c] || !Y.isObject(u[c])) && (u[c] = []), i(l, n, u[c], b) && Y.isArray(u[c]) && (u[c] = bk(u[c])), !p);
  }
  if (Y.isFormData(t) && Y.isFunction(t.entries)) {
    const l = {};
    return Y.forEachEntry(t, (n, u) => {
      i(ck(n), u, l, 0);
    }), l;
  }
  return null;
}
function fk(t, i, l) {
  if (Y.isString(t))
    try {
      return (i || JSON.parse)(t), Y.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (l || JSON.stringify)(t);
}
const lo = {
  transitional: cg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, l) {
    const n = l.getContentType() || "", u = n.indexOf("application/json") > -1, b = Y.isObject(i);
    if (b && Y.isHTMLForm(i) && (i = new FormData(i)), Y.isFormData(i))
      return u ? JSON.stringify(bg(i)) : i;
    if (Y.isArrayBuffer(i) || Y.isBuffer(i) || Y.isStream(i) || Y.isFile(i) || Y.isBlob(i) || Y.isReadableStream(i))
      return i;
    if (Y.isArrayBufferView(i))
      return i.buffer;
    if (Y.isURLSearchParams(i))
      return l.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let p;
    if (b) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return uk(i, this.formSerializer).toString();
      if ((p = Y.isFileList(i)) || n.indexOf("multipart/form-data") > -1) {
        const y = this.env && this.env.FormData;
        return fc(
          p ? { "files[]": i } : i,
          y && new y(),
          this.formSerializer
        );
      }
    }
    return b || u ? (l.setContentType("application/json", !1), fk(i)) : i;
  }],
  transformResponse: [function(i) {
    const l = this.transitional || lo.transitional, n = l && l.forcedJSONParsing, u = this.responseType === "json";
    if (Y.isResponse(i) || Y.isReadableStream(i))
      return i;
    if (i && Y.isString(i) && (n && !this.responseType || u)) {
      const c = !(l && l.silentJSONParsing) && u;
      try {
        return JSON.parse(i);
      } catch (p) {
        if (c)
          throw p.name === "SyntaxError" ? et.from(p, et.ERR_BAD_RESPONSE, this, null, this.response) : p;
      }
    }
    return i;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Li.classes.FormData,
    Blob: Li.classes.Blob
  },
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
Y.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  lo.headers[t] = {};
});
const dk = Y.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), hk = (t) => {
  const i = {};
  let l, n, u;
  return t && t.split(`
`).forEach(function(c) {
    u = c.indexOf(":"), l = c.substring(0, u).trim().toLowerCase(), n = c.substring(u + 1).trim(), !(!l || i[l] && dk[l]) && (l === "set-cookie" ? i[l] ? i[l].push(n) : i[l] = [n] : i[l] = i[l] ? i[l] + ", " + n : n);
  }), i;
}, Pp = Symbol("internals");
function Is(t) {
  return t && String(t).trim().toLowerCase();
}
function $u(t) {
  return t === !1 || t == null ? t : Y.isArray(t) ? t.map($u) : String(t);
}
function pk(t) {
  const i = /* @__PURE__ */ Object.create(null), l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = l.exec(t); )
    i[n[1]] = n[2];
  return i;
}
const vk = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Wf(t, i, l, n, u) {
  if (Y.isFunction(n))
    return n.call(this, i, l);
  if (u && (i = l), !!Y.isString(i)) {
    if (Y.isString(n))
      return i.indexOf(n) !== -1;
    if (Y.isRegExp(n))
      return n.test(i);
  }
}
function gk(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, l, n) => l.toUpperCase() + n);
}
function mk(t, i) {
  const l = Y.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + l, {
      value: function(u, b, c) {
        return this[n].call(this, i, u, b, c);
      },
      configurable: !0
    });
  });
}
let il = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, l, n) {
    const u = this;
    function b(p, y, x) {
      const S = Is(y);
      if (!S)
        throw new Error("header name must be a non-empty string");
      const C = Y.findKey(u, S);
      (!C || u[C] === void 0 || x === !0 || x === void 0 && u[C] !== !1) && (u[C || y] = $u(p));
    }
    const c = (p, y) => Y.forEach(p, (x, S) => b(x, S, y));
    if (Y.isPlainObject(i) || i instanceof this.constructor)
      c(i, l);
    else if (Y.isString(i) && (i = i.trim()) && !vk(i))
      c(hk(i), l);
    else if (Y.isObject(i) && Y.isIterable(i)) {
      let p = {}, y, x;
      for (const S of i) {
        if (!Y.isArray(S))
          throw TypeError("Object iterator must return a key-value pair");
        p[x = S[0]] = (y = p[x]) ? Y.isArray(y) ? [...y, S[1]] : [y, S[1]] : S[1];
      }
      c(p, l);
    } else
      i != null && b(l, i, n);
    return this;
  }
  get(i, l) {
    if (i = Is(i), i) {
      const n = Y.findKey(this, i);
      if (n) {
        const u = this[n];
        if (!l)
          return u;
        if (l === !0)
          return pk(u);
        if (Y.isFunction(l))
          return l.call(this, u, n);
        if (Y.isRegExp(l))
          return l.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, l) {
    if (i = Is(i), i) {
      const n = Y.findKey(this, i);
      return !!(n && this[n] !== void 0 && (!l || Wf(this, this[n], n, l)));
    }
    return !1;
  }
  delete(i, l) {
    const n = this;
    let u = !1;
    function b(c) {
      if (c = Is(c), c) {
        const p = Y.findKey(n, c);
        p && (!l || Wf(n, n[p], p, l)) && (delete n[p], u = !0);
      }
    }
    return Y.isArray(i) ? i.forEach(b) : b(i), u;
  }
  clear(i) {
    const l = Object.keys(this);
    let n = l.length, u = !1;
    for (; n--; ) {
      const b = l[n];
      (!i || Wf(this, this[b], b, i, !0)) && (delete this[b], u = !0);
    }
    return u;
  }
  normalize(i) {
    const l = this, n = {};
    return Y.forEach(this, (u, b) => {
      const c = Y.findKey(n, b);
      if (c) {
        l[c] = $u(u), delete l[b];
        return;
      }
      const p = i ? gk(b) : String(b).trim();
      p !== b && delete l[b], l[p] = $u(u), n[p] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const l = /* @__PURE__ */ Object.create(null);
    return Y.forEach(this, (n, u) => {
      n != null && n !== !1 && (l[u] = i && Y.isArray(n) ? n.join(", ") : n);
    }), l;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, l]) => i + ": " + l).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...l) {
    const n = new this(i);
    return l.forEach((u) => n.set(u)), n;
  }
  static accessor(i) {
    const n = (this[Pp] = this[Pp] = {
      accessors: {}
    }).accessors, u = this.prototype;
    function b(c) {
      const p = Is(c);
      n[p] || (mk(u, c), n[p] = !0);
    }
    return Y.isArray(i) ? i.forEach(b) : b(i), this;
  }
};
il.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
Y.reduceDescriptors(il.prototype, ({ value: t }, i) => {
  let l = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => t,
    set(n) {
      this[l] = n;
    }
  };
});
Y.freezeMethods(il);
function qf(t, i) {
  const l = this || lo, n = i || l, u = il.from(n.headers);
  let b = n.data;
  return Y.forEach(t, function(p) {
    b = p.call(l, b, u.normalize(), i ? i.status : void 0);
  }), u.normalize(), b;
}
function fg(t) {
  return !!(t && t.__CANCEL__);
}
function Gn(t, i, l) {
  et.call(this, t ?? "canceled", et.ERR_CANCELED, i, l), this.name = "CanceledError";
}
Y.inherits(Gn, et, {
  __CANCEL__: !0
});
function dg(t, i, l) {
  const n = l.config.validateStatus;
  !l.status || !n || n(l.status) ? t(l) : i(new et(
    "Request failed with status code " + l.status,
    [et.ERR_BAD_REQUEST, et.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
    l.config,
    l.request,
    l
  ));
}
function yk(t) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return i && i[1] || "";
}
function wk(t, i) {
  t = t || 10;
  const l = new Array(t), n = new Array(t);
  let u = 0, b = 0, c;
  return i = i !== void 0 ? i : 1e3, function(y) {
    const x = Date.now(), S = n[b];
    c || (c = x), l[u] = y, n[u] = x;
    let C = b, M = 0;
    for (; C !== u; )
      M += l[C++], C = C % t;
    if (u = (u + 1) % t, u === b && (b = (b + 1) % t), x - c < i)
      return;
    const N = S && x - S;
    return N ? Math.round(M * 1e3 / N) : void 0;
  };
}
function _k(t, i) {
  let l = 0, n = 1e3 / i, u, b;
  const c = (x, S = Date.now()) => {
    l = S, u = null, b && (clearTimeout(b), b = null), t(...x);
  };
  return [(...x) => {
    const S = Date.now(), C = S - l;
    C >= n ? c(x, S) : (u = x, b || (b = setTimeout(() => {
      b = null, c(u);
    }, n - C)));
  }, () => u && c(u)];
}
const Ku = (t, i, l = 3) => {
  let n = 0;
  const u = wk(50, 250);
  return _k((b) => {
    const c = b.loaded, p = b.lengthComputable ? b.total : void 0, y = c - n, x = u(y), S = c <= p;
    n = c;
    const C = {
      loaded: c,
      total: p,
      progress: p ? c / p : void 0,
      bytes: y,
      rate: x || void 0,
      estimated: x && p && S ? (p - c) / x : void 0,
      event: b,
      lengthComputable: p != null,
      [i ? "download" : "upload"]: !0
    };
    t(C);
  }, l);
}, jp = (t, i) => {
  const l = t != null;
  return [(n) => i[0]({
    lengthComputable: l,
    total: t,
    loaded: n
  }), i[1]];
}, Fp = (t) => (...i) => Y.asap(() => t(...i)), xk = Li.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, i) => (l) => (l = new URL(l, Li.origin), t.protocol === l.protocol && t.host === l.host && (i || t.port === l.port)))(
  new URL(Li.origin),
  Li.navigator && /(msie|trident)/i.test(Li.navigator.userAgent)
) : () => !0, Sk = Li.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, i, l, n, u, b) {
      const c = [t + "=" + encodeURIComponent(i)];
      Y.isNumber(l) && c.push("expires=" + new Date(l).toGMTString()), Y.isString(n) && c.push("path=" + n), Y.isString(u) && c.push("domain=" + u), b === !0 && c.push("secure"), document.cookie = c.join("; ");
    },
    read(t) {
      const i = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return i ? decodeURIComponent(i[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function kk(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Rk(t, i) {
  return i ? t.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : t;
}
function hg(t, i, l) {
  let n = !kk(i);
  return t && (n || l == !1) ? Rk(t, i) : i;
}
const Up = (t) => t instanceof il ? { ...t } : t;
function Br(t, i) {
  i = i || {};
  const l = {};
  function n(x, S, C, M) {
    return Y.isPlainObject(x) && Y.isPlainObject(S) ? Y.merge.call({ caseless: M }, x, S) : Y.isPlainObject(S) ? Y.merge({}, S) : Y.isArray(S) ? S.slice() : S;
  }
  function u(x, S, C, M) {
    if (Y.isUndefined(S)) {
      if (!Y.isUndefined(x))
        return n(void 0, x, C, M);
    } else return n(x, S, C, M);
  }
  function b(x, S) {
    if (!Y.isUndefined(S))
      return n(void 0, S);
  }
  function c(x, S) {
    if (Y.isUndefined(S)) {
      if (!Y.isUndefined(x))
        return n(void 0, x);
    } else return n(void 0, S);
  }
  function p(x, S, C) {
    if (C in i)
      return n(x, S);
    if (C in t)
      return n(void 0, x);
  }
  const y = {
    url: b,
    method: b,
    data: b,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: p,
    headers: (x, S, C) => u(Up(x), Up(S), C, !0)
  };
  return Y.forEach(Object.keys({ ...t, ...i }), function(S) {
    const C = y[S] || u, M = C(t[S], i[S], S);
    Y.isUndefined(M) && C !== p || (l[S] = M);
  }), l;
}
const pg = (t) => {
  const i = Br({}, t);
  let { data: l, withXSRFToken: n, xsrfHeaderName: u, xsrfCookieName: b, headers: c, auth: p } = i;
  i.headers = c = il.from(c), i.url = ug(hg(i.baseURL, i.url, i.allowAbsoluteUrls), t.params, t.paramsSerializer), p && c.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  );
  let y;
  if (Y.isFormData(l)) {
    if (Li.hasStandardBrowserEnv || Li.hasStandardBrowserWebWorkerEnv)
      c.setContentType(void 0);
    else if ((y = c.getContentType()) !== !1) {
      const [x, ...S] = y ? y.split(";").map((C) => C.trim()).filter(Boolean) : [];
      c.setContentType([x || "multipart/form-data", ...S].join("; "));
    }
  }
  if (Li.hasStandardBrowserEnv && (n && Y.isFunction(n) && (n = n(i)), n || n !== !1 && xk(i.url))) {
    const x = u && b && Sk.read(b);
    x && c.set(u, x);
  }
  return i;
}, Ck = typeof XMLHttpRequest < "u", Ek = Ck && function(t) {
  return new Promise(function(l, n) {
    const u = pg(t);
    let b = u.data;
    const c = il.from(u.headers).normalize();
    let { responseType: p, onUploadProgress: y, onDownloadProgress: x } = u, S, C, M, N, A;
    function I() {
      N && N(), A && A(), u.cancelToken && u.cancelToken.unsubscribe(S), u.signal && u.signal.removeEventListener("abort", S);
    }
    let g = new XMLHttpRequest();
    g.open(u.method.toUpperCase(), u.url, !0), g.timeout = u.timeout;
    function G() {
      if (!g)
        return;
      const F = il.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), R = {
        data: !p || p === "text" || p === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: F,
        config: t,
        request: g
      };
      dg(function($) {
        l($), I();
      }, function($) {
        n($), I();
      }, R), g = null;
    }
    "onloadend" in g ? g.onloadend = G : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(G);
    }, g.onabort = function() {
      g && (n(new et("Request aborted", et.ECONNABORTED, t, g)), g = null);
    }, g.onerror = function() {
      n(new et("Network Error", et.ERR_NETWORK, t, g)), g = null;
    }, g.ontimeout = function() {
      let ue = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded";
      const R = u.transitional || cg;
      u.timeoutErrorMessage && (ue = u.timeoutErrorMessage), n(new et(
        ue,
        R.clarifyTimeoutError ? et.ETIMEDOUT : et.ECONNABORTED,
        t,
        g
      )), g = null;
    }, b === void 0 && c.setContentType(null), "setRequestHeader" in g && Y.forEach(c.toJSON(), function(ue, R) {
      g.setRequestHeader(R, ue);
    }), Y.isUndefined(u.withCredentials) || (g.withCredentials = !!u.withCredentials), p && p !== "json" && (g.responseType = u.responseType), x && ([M, A] = Ku(x, !0), g.addEventListener("progress", M)), y && g.upload && ([C, N] = Ku(y), g.upload.addEventListener("progress", C), g.upload.addEventListener("loadend", N)), (u.cancelToken || u.signal) && (S = (F) => {
      g && (n(!F || F.type ? new Gn(null, t, g) : F), g.abort(), g = null);
    }, u.cancelToken && u.cancelToken.subscribe(S), u.signal && (u.signal.aborted ? S() : u.signal.addEventListener("abort", S)));
    const q = yk(u.url);
    if (q && Li.protocols.indexOf(q) === -1) {
      n(new et("Unsupported protocol " + q + ":", et.ERR_BAD_REQUEST, t));
      return;
    }
    g.send(b || null);
  });
}, Tk = (t, i) => {
  const { length: l } = t = t ? t.filter(Boolean) : [];
  if (i || l) {
    let n = new AbortController(), u;
    const b = function(x) {
      if (!u) {
        u = !0, p();
        const S = x instanceof Error ? x : this.reason;
        n.abort(S instanceof et ? S : new Gn(S instanceof Error ? S.message : S));
      }
    };
    let c = i && setTimeout(() => {
      c = null, b(new et(`timeout ${i} of ms exceeded`, et.ETIMEDOUT));
    }, i);
    const p = () => {
      t && (c && clearTimeout(c), c = null, t.forEach((x) => {
        x.unsubscribe ? x.unsubscribe(b) : x.removeEventListener("abort", b);
      }), t = null);
    };
    t.forEach((x) => x.addEventListener("abort", b));
    const { signal: y } = n;
    return y.unsubscribe = () => Y.asap(p), y;
  }
}, Ak = function* (t, i) {
  let l = t.byteLength;
  if (l < i) {
    yield t;
    return;
  }
  let n = 0, u;
  for (; n < l; )
    u = n + i, yield t.slice(n, u), n = u;
}, Ok = async function* (t, i) {
  for await (const l of Mk(t))
    yield* Ak(l, i);
}, Mk = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const i = t.getReader();
  try {
    for (; ; ) {
      const { done: l, value: n } = await i.read();
      if (l)
        break;
      yield n;
    }
  } finally {
    await i.cancel();
  }
}, Bp = (t, i, l, n) => {
  const u = Ok(t, i);
  let b = 0, c, p = (y) => {
    c || (c = !0, n && n(y));
  };
  return new ReadableStream({
    async pull(y) {
      try {
        const { done: x, value: S } = await u.next();
        if (x) {
          p(), y.close();
          return;
        }
        let C = S.byteLength;
        if (l) {
          let M = b += C;
          l(M);
        }
        y.enqueue(new Uint8Array(S));
      } catch (x) {
        throw p(x), x;
      }
    },
    cancel(y) {
      return p(y), u.return();
    }
  }, {
    highWaterMark: 2
  });
}, dc = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", vg = dc && typeof ReadableStream == "function", Dk = dc && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (i) => t.encode(i))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), gg = (t, ...i) => {
  try {
    return !!t(...i);
  } catch {
    return !1;
  }
}, Lk = vg && gg(() => {
  let t = !1;
  const i = new Request(Li.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !i;
}), Wp = 64 * 1024, nd = vg && gg(() => Y.isReadableStream(new Response("").body)), Qu = {
  stream: nd && ((t) => t.body)
};
dc && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !Qu[i] && (Qu[i] = Y.isFunction(t[i]) ? (l) => l[i]() : (l, n) => {
      throw new et(`Response type '${i}' is not supported`, et.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Nk = async (t) => {
  if (t == null)
    return 0;
  if (Y.isBlob(t))
    return t.size;
  if (Y.isSpecCompliantForm(t))
    return (await new Request(Li.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (Y.isArrayBufferView(t) || Y.isArrayBuffer(t))
    return t.byteLength;
  if (Y.isURLSearchParams(t) && (t = t + ""), Y.isString(t))
    return (await Dk(t)).byteLength;
}, Ik = async (t, i) => {
  const l = Y.toFiniteNumber(t.getContentLength());
  return l ?? Nk(i);
}, Pk = dc && (async (t) => {
  let {
    url: i,
    method: l,
    data: n,
    signal: u,
    cancelToken: b,
    timeout: c,
    onDownloadProgress: p,
    onUploadProgress: y,
    responseType: x,
    headers: S,
    withCredentials: C = "same-origin",
    fetchOptions: M
  } = pg(t);
  x = x ? (x + "").toLowerCase() : "text";
  let N = Tk([u, b && b.toAbortSignal()], c), A;
  const I = N && N.unsubscribe && (() => {
    N.unsubscribe();
  });
  let g;
  try {
    if (y && Lk && l !== "get" && l !== "head" && (g = await Ik(S, n)) !== 0) {
      let R = new Request(i, {
        method: "POST",
        body: n,
        duplex: "half"
      }), se;
      if (Y.isFormData(n) && (se = R.headers.get("content-type")) && S.setContentType(se), R.body) {
        const [$, K] = jp(
          g,
          Ku(Fp(y))
        );
        n = Bp(R.body, Wp, $, K);
      }
    }
    Y.isString(C) || (C = C ? "include" : "omit");
    const G = "credentials" in Request.prototype;
    A = new Request(i, {
      ...M,
      signal: N,
      method: l.toUpperCase(),
      headers: S.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: G ? C : void 0
    });
    let q = await fetch(A, M);
    const F = nd && (x === "stream" || x === "response");
    if (nd && (p || F && I)) {
      const R = {};
      ["status", "statusText", "headers"].forEach((z) => {
        R[z] = q[z];
      });
      const se = Y.toFiniteNumber(q.headers.get("content-length")), [$, K] = p && jp(
        se,
        Ku(Fp(p), !0)
      ) || [];
      q = new Response(
        Bp(q.body, Wp, $, () => {
          K && K(), I && I();
        }),
        R
      );
    }
    x = x || "text";
    let ue = await Qu[Y.findKey(Qu, x) || "text"](q, t);
    return !F && I && I(), await new Promise((R, se) => {
      dg(R, se, {
        data: ue,
        headers: il.from(q.headers),
        status: q.status,
        statusText: q.statusText,
        config: t,
        request: A
      });
    });
  } catch (G) {
    throw I && I(), G && G.name === "TypeError" && /Load failed|fetch/i.test(G.message) ? Object.assign(
      new et("Network Error", et.ERR_NETWORK, t, A),
      {
        cause: G.cause || G
      }
    ) : et.from(G, G && G.code, t, A);
  }
}), sd = {
  http: ZS,
  xhr: Ek,
  fetch: Pk
};
Y.forEach(sd, (t, i) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: i });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: i });
  }
});
const qp = (t) => `- ${t}`, jk = (t) => Y.isFunction(t) || t === null || t === !1, mg = {
  getAdapter: (t) => {
    t = Y.isArray(t) ? t : [t];
    const { length: i } = t;
    let l, n;
    const u = {};
    for (let b = 0; b < i; b++) {
      l = t[b];
      let c;
      if (n = l, !jk(l) && (n = sd[(c = String(l)).toLowerCase()], n === void 0))
        throw new et(`Unknown adapter '${c}'`);
      if (n)
        break;
      u[c || "#" + b] = n;
    }
    if (!n) {
      const b = Object.entries(u).map(
        ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = i ? b.length > 1 ? `since :
` + b.map(qp).join(`
`) : " " + qp(b[0]) : "as no adapter specified";
      throw new et(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: sd
};
function $f(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Gn(null, t);
}
function $p(t) {
  return $f(t), t.headers = il.from(t.headers), t.data = qf.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), mg.getAdapter(t.adapter || lo.adapter)(t).then(function(n) {
    return $f(t), n.data = qf.call(
      t,
      t.transformResponse,
      n
    ), n.headers = il.from(n.headers), n;
  }, function(n) {
    return fg(n) || ($f(t), n && n.response && (n.response.data = qf.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = il.from(n.response.headers))), Promise.reject(n);
  });
}
const yg = "1.11.0", hc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, i) => {
  hc[t] = function(n) {
    return typeof n === t || "a" + (i < 1 ? "n " : " ") + t;
  };
});
const Vp = {};
hc.transitional = function(i, l, n) {
  function u(b, c) {
    return "[Axios v" + yg + "] Transitional option '" + b + "'" + c + (n ? ". " + n : "");
  }
  return (b, c, p) => {
    if (i === !1)
      throw new et(
        u(c, " has been removed" + (l ? " in " + l : "")),
        et.ERR_DEPRECATED
      );
    return l && !Vp[c] && (Vp[c] = !0, console.warn(
      u(
        c,
        " has been deprecated since v" + l + " and will be removed in the near future"
      )
    )), i ? i(b, c, p) : !0;
  };
};
hc.spelling = function(i) {
  return (l, n) => (console.warn(`${n} is likely a misspelling of ${i}`), !0);
};
function Fk(t, i, l) {
  if (typeof t != "object")
    throw new et("options must be an object", et.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let u = n.length;
  for (; u-- > 0; ) {
    const b = n[u], c = i[b];
    if (c) {
      const p = t[b], y = p === void 0 || c(p, b, t);
      if (y !== !0)
        throw new et("option " + b + " must be " + y, et.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (l !== !0)
      throw new et("Unknown option " + b, et.ERR_BAD_OPTION);
  }
}
const Vu = {
  assertOptions: Fk,
  validators: hc
}, aa = Vu.validators;
let Fr = class {
  constructor(i) {
    this.defaults = i || {}, this.interceptors = {
      request: new Ip(),
      response: new Ip()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(i, l) {
    try {
      return await this._request(i, l);
    } catch (n) {
      if (n instanceof Error) {
        let u = {};
        Error.captureStackTrace ? Error.captureStackTrace(u) : u = new Error();
        const b = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? b && !String(n.stack).endsWith(b.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + b) : n.stack = b;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(i, l) {
    typeof i == "string" ? (l = l || {}, l.url = i) : l = i || {}, l = Br(this.defaults, l);
    const { transitional: n, paramsSerializer: u, headers: b } = l;
    n !== void 0 && Vu.assertOptions(n, {
      silentJSONParsing: aa.transitional(aa.boolean),
      forcedJSONParsing: aa.transitional(aa.boolean),
      clarifyTimeoutError: aa.transitional(aa.boolean)
    }, !1), u != null && (Y.isFunction(u) ? l.paramsSerializer = {
      serialize: u
    } : Vu.assertOptions(u, {
      encode: aa.function,
      serialize: aa.function
    }, !0)), l.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? l.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : l.allowAbsoluteUrls = !0), Vu.assertOptions(l, {
      baseUrl: aa.spelling("baseURL"),
      withXsrfToken: aa.spelling("withXSRFToken")
    }, !0), l.method = (l.method || this.defaults.method || "get").toLowerCase();
    let c = b && Y.merge(
      b.common,
      b[l.method]
    );
    b && Y.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (A) => {
        delete b[A];
      }
    ), l.headers = il.concat(c, b);
    const p = [];
    let y = !0;
    this.interceptors.request.forEach(function(I) {
      typeof I.runWhen == "function" && I.runWhen(l) === !1 || (y = y && I.synchronous, p.unshift(I.fulfilled, I.rejected));
    });
    const x = [];
    this.interceptors.response.forEach(function(I) {
      x.push(I.fulfilled, I.rejected);
    });
    let S, C = 0, M;
    if (!y) {
      const A = [$p.bind(this), void 0];
      for (A.unshift(...p), A.push(...x), M = A.length, S = Promise.resolve(l); C < M; )
        S = S.then(A[C++], A[C++]);
      return S;
    }
    M = p.length;
    let N = l;
    for (C = 0; C < M; ) {
      const A = p[C++], I = p[C++];
      try {
        N = A(N);
      } catch (g) {
        I.call(this, g);
        break;
      }
    }
    try {
      S = $p.call(this, N);
    } catch (A) {
      return Promise.reject(A);
    }
    for (C = 0, M = x.length; C < M; )
      S = S.then(x[C++], x[C++]);
    return S;
  }
  getUri(i) {
    i = Br(this.defaults, i);
    const l = hg(i.baseURL, i.url, i.allowAbsoluteUrls);
    return ug(l, i.params, i.paramsSerializer);
  }
};
Y.forEach(["delete", "get", "head", "options"], function(i) {
  Fr.prototype[i] = function(l, n) {
    return this.request(Br(n || {}, {
      method: i,
      url: l,
      data: (n || {}).data
    }));
  };
});
Y.forEach(["post", "put", "patch"], function(i) {
  function l(n) {
    return function(b, c, p) {
      return this.request(Br(p || {}, {
        method: i,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: b,
        data: c
      }));
    };
  }
  Fr.prototype[i] = l(), Fr.prototype[i + "Form"] = l(!0);
});
let Uk = class wg {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let l;
    this.promise = new Promise(function(b) {
      l = b;
    });
    const n = this;
    this.promise.then((u) => {
      if (!n._listeners) return;
      let b = n._listeners.length;
      for (; b-- > 0; )
        n._listeners[b](u);
      n._listeners = null;
    }), this.promise.then = (u) => {
      let b;
      const c = new Promise((p) => {
        n.subscribe(p), b = p;
      }).then(u);
      return c.cancel = function() {
        n.unsubscribe(b);
      }, c;
    }, i(function(b, c, p) {
      n.reason || (n.reason = new Gn(b, c, p), l(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(i) {
    if (!this._listeners)
      return;
    const l = this._listeners.indexOf(i);
    l !== -1 && this._listeners.splice(l, 1);
  }
  toAbortSignal() {
    const i = new AbortController(), l = (n) => {
      i.abort(n);
    };
    return this.subscribe(l), i.signal.unsubscribe = () => this.unsubscribe(l), i.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let i;
    return {
      token: new wg(function(u) {
        i = u;
      }),
      cancel: i
    };
  }
};
function Bk(t) {
  return function(l) {
    return t.apply(null, l);
  };
}
function Wk(t) {
  return Y.isObject(t) && t.isAxiosError === !0;
}
const od = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(od).forEach(([t, i]) => {
  od[i] = t;
});
function _g(t) {
  const i = new Fr(t), l = Zv(Fr.prototype.request, i);
  return Y.extend(l, Fr.prototype, i, { allOwnKeys: !0 }), Y.extend(l, i, null, { allOwnKeys: !0 }), l.create = function(u) {
    return _g(Br(t, u));
  }, l;
}
const ci = _g(lo);
ci.Axios = Fr;
ci.CanceledError = Gn;
ci.CancelToken = Uk;
ci.isCancel = fg;
ci.VERSION = yg;
ci.toFormData = fc;
ci.AxiosError = et;
ci.Cancel = ci.CanceledError;
ci.all = function(i) {
  return Promise.all(i);
};
ci.spread = Bk;
ci.isAxiosError = Wk;
ci.mergeConfig = Br;
ci.AxiosHeaders = il;
ci.formToJSON = (t) => bg(Y.isHTMLForm(t) ? new FormData(t) : t);
ci.getAdapter = mg.getAdapter;
ci.HttpStatusCode = od;
ci.default = ci;
const {
  Axios: tM,
  AxiosError: iM,
  CanceledError: lM,
  isCancel: aM,
  CancelToken: rM,
  VERSION: nM,
  all: sM,
  Cancel: oM,
  isAxiosError: uM,
  spread: cM,
  toFormData: bM,
  AxiosHeaders: fM,
  HttpStatusCode: dM,
  formToJSON: hM,
  getAdapter: pM,
  mergeConfig: vM
} = ci;
let ud = {};
const qk = (t) => {
  ud = { ...ud, ...t };
}, $k = () => ud, Kn = () => {
  var b, c, p;
  const t = $k(), i = typeof process < "u" ? (b = process == null ? void 0 : process.env) == null ? void 0 : b.NEXT_PUBLIC_CUSTOMER_API_URL : (p = (c = import.meta) == null ? void 0 : c.env) == null ? void 0 : p.VITE_CUSTOMER_API_URL, l = ci.create({
    baseURL: t.baseURL ?? i ?? ""
  }), n = () => {
    var y;
    return ((y = t.getAccessToken) == null ? void 0 : y.call(t)) ?? (typeof localStorage < "u" ? localStorage.getItem("accessToken") : null);
  }, u = async () => {
    if (t.onRefreshToken) return t.onRefreshToken(l);
    const y = typeof localStorage < "u" ? localStorage.getItem("refreshToken") : void 0, x = await l.get("/api/v1/auth/refresh-token", {
      headers: y ? { Authorization: `Bearer ${y}` } : void 0
    });
    if (x != null && x.data && typeof localStorage < "u") {
      const { refreshToken: S, accessToken: C } = x.data;
      localStorage.setItem("refreshToken", S), localStorage.setItem("accessToken", C);
    }
  };
  return l.interceptors.request.use(
    (y) => {
      var S;
      const x = n();
      return x && !((S = y == null ? void 0 : y.headers) != null && S.Authorization) && (y.headers.Authorization = `Bearer ${x}`), y;
    },
    (y) => Promise.reject(y)
  ), l.interceptors.response.use(
    (y) => y,
    async (y) => {
      const x = y.response ? y.response.status : null, S = y.config ?? {};
      switch (x) {
        case 401:
          if (S.url !== "/api/v1/auth/refresh-token" && S.url !== "/api/v1/auth/login")
            await u();
          else if (S.url === "/api/v1/auth/refresh-token" && (typeof localStorage < "u" && (localStorage.removeItem("refreshToken"), localStorage.removeItem("accessToken")), typeof location < "u")) {
            const C = encodeURIComponent(location.href);
            location.href = `/sign-in?return=${C}`;
          }
          break;
      }
      throw y;
    }
  ), l;
}, jd = async (t, i) => (await Kn().get("/api/v1/products", {
  params: t,
  signal: i
})).data, Vk = async (t, i) => (await Kn().get(`/api/v1/products/${t}`, {
  params: i
})).data;
var Qn = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    return this.listeners.add(t), this.onSubscribe(), () => {
      this.listeners.delete(t), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Wr = typeof window > "u" || "Deno" in globalThis;
function Tl() {
}
function zk(t, i) {
  return typeof t == "function" ? t(i) : t;
}
function cd(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function xg(t, i) {
  return Math.max(t + (i || 0) - Date.now(), 0);
}
function En(t, i) {
  return typeof t == "function" ? t(i) : t;
}
function $l(t, i) {
  return typeof t == "function" ? t(i) : t;
}
function zp(t, i) {
  const {
    type: l = "all",
    exact: n,
    fetchStatus: u,
    predicate: b,
    queryKey: c,
    stale: p
  } = t;
  if (c) {
    if (n) {
      if (i.queryHash !== Fd(c, i.options))
        return !1;
    } else if (!Ys(i.queryKey, c))
      return !1;
  }
  if (l !== "all") {
    const y = i.isActive();
    if (l === "active" && !y || l === "inactive" && y)
      return !1;
  }
  return !(typeof p == "boolean" && i.isStale() !== p || u && u !== i.state.fetchStatus || b && !b(i));
}
function Yp(t, i) {
  const { exact: l, status: n, predicate: u, mutationKey: b } = t;
  if (b) {
    if (!i.options.mutationKey)
      return !1;
    if (l) {
      if (qr(i.options.mutationKey) !== qr(b))
        return !1;
    } else if (!Ys(i.options.mutationKey, b))
      return !1;
  }
  return !(n && i.state.status !== n || u && !u(i));
}
function Fd(t, i) {
  return ((i == null ? void 0 : i.queryKeyHashFn) || qr)(t);
}
function qr(t) {
  return JSON.stringify(
    t,
    (i, l) => fd(l) ? Object.keys(l).sort().reduce((n, u) => (n[u] = l[u], n), {}) : l
  );
}
function Ys(t, i) {
  return t === i ? !0 : typeof t != typeof i ? !1 : t && i && typeof t == "object" && typeof i == "object" ? !Object.keys(i).some((l) => !Ys(t[l], i[l])) : !1;
}
function bd(t, i) {
  if (t === i)
    return t;
  const l = Hp(t) && Hp(i);
  if (l || fd(t) && fd(i)) {
    const n = l ? t : Object.keys(t), u = n.length, b = l ? i : Object.keys(i), c = b.length, p = l ? [] : {};
    let y = 0;
    for (let x = 0; x < c; x++) {
      const S = l ? x : b[x];
      (!l && n.includes(S) || l) && t[S] === void 0 && i[S] === void 0 ? (p[S] = void 0, y++) : (p[S] = bd(t[S], i[S]), p[S] === t[S] && t[S] !== void 0 && y++);
    }
    return u === c && y === u ? t : p;
  }
  return i;
}
function Zu(t, i) {
  if (!i || Object.keys(t).length !== Object.keys(i).length)
    return !1;
  for (const l in t)
    if (t[l] !== i[l])
      return !1;
  return !0;
}
function Hp(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function fd(t) {
  if (!Gp(t))
    return !1;
  const i = t.constructor;
  if (i === void 0)
    return !0;
  const l = i.prototype;
  return !(!Gp(l) || !l.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function Gp(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Yk(t) {
  return new Promise((i) => {
    setTimeout(i, t);
  });
}
function dd(t, i, l) {
  if (typeof l.structuralSharing == "function")
    return l.structuralSharing(t, i);
  if (l.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return bd(t, i);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${l.queryHash}]: ${n}`
        );
      }
    return bd(t, i);
  }
  return i;
}
function Hk(t, i, l = 0) {
  const n = [...t, i];
  return l && n.length > l ? n.slice(1) : n;
}
function Gk(t, i, l = 0) {
  const n = [i, ...t];
  return l && n.length > l ? n.slice(0, -1) : n;
}
var Ju = Symbol();
function Sg(t, i) {
  return process.env.NODE_ENV !== "production" && t.queryFn === Ju && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${t.queryHash}'`
  ), !t.queryFn && (i != null && i.initialPromise) ? () => i.initialPromise : !t.queryFn || t.queryFn === Ju ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
var Mr, Xa, An, Iv, Kk = (Iv = class extends Qn {
  constructor() {
    super();
    qe(this, Mr);
    qe(this, Xa);
    qe(this, An);
    Re(this, An, (i) => {
      if (!Wr && window.addEventListener) {
        const l = () => i();
        return window.addEventListener("visibilitychange", l, !1), () => {
          window.removeEventListener("visibilitychange", l);
        };
      }
    });
  }
  onSubscribe() {
    L(this, Xa) || this.setEventListener(L(this, An));
  }
  onUnsubscribe() {
    var i;
    this.hasListeners() || ((i = L(this, Xa)) == null || i.call(this), Re(this, Xa, void 0));
  }
  setEventListener(i) {
    var l;
    Re(this, An, i), (l = L(this, Xa)) == null || l.call(this), Re(this, Xa, i((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(i) {
    L(this, Mr) !== i && (Re(this, Mr, i), this.onFocus());
  }
  onFocus() {
    const i = this.isFocused();
    this.listeners.forEach((l) => {
      l(i);
    });
  }
  isFocused() {
    var i;
    return typeof L(this, Mr) == "boolean" ? L(this, Mr) : ((i = globalThis.document) == null ? void 0 : i.visibilityState) !== "hidden";
  }
}, Mr = new WeakMap(), Xa = new WeakMap(), An = new WeakMap(), Iv), Ud = new Kk(), On, er, Mn, Pv, Qk = (Pv = class extends Qn {
  constructor() {
    super();
    qe(this, On, !0);
    qe(this, er);
    qe(this, Mn);
    Re(this, Mn, (i) => {
      if (!Wr && window.addEventListener) {
        const l = () => i(!0), n = () => i(!1);
        return window.addEventListener("online", l, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", l), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    L(this, er) || this.setEventListener(L(this, Mn));
  }
  onUnsubscribe() {
    var i;
    this.hasListeners() || ((i = L(this, er)) == null || i.call(this), Re(this, er, void 0));
  }
  setEventListener(i) {
    var l;
    Re(this, Mn, i), (l = L(this, er)) == null || l.call(this), Re(this, er, i(this.setOnline.bind(this)));
  }
  setOnline(i) {
    L(this, On) !== i && (Re(this, On, i), this.listeners.forEach((n) => {
      n(i);
    }));
  }
  isOnline() {
    return L(this, On);
  }
}, On = new WeakMap(), er = new WeakMap(), Mn = new WeakMap(), Pv), Xu = new Qk();
function hd() {
  let t, i;
  const l = new Promise((u, b) => {
    t = u, i = b;
  });
  l.status = "pending", l.catch(() => {
  });
  function n(u) {
    Object.assign(l, u), delete l.resolve, delete l.reject;
  }
  return l.resolve = (u) => {
    n({
      status: "fulfilled",
      value: u
    }), t(u);
  }, l.reject = (u) => {
    n({
      status: "rejected",
      reason: u
    }), i(u);
  }, l;
}
function Zk(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function kg(t) {
  return (t ?? "online") === "online" ? Xu.isOnline() : !0;
}
var Rg = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function Vf(t) {
  return t instanceof Rg;
}
function Cg(t) {
  let i = !1, l = 0, n = !1, u;
  const b = hd(), c = (I) => {
    var g;
    n || (M(new Rg(I)), (g = t.abort) == null || g.call(t));
  }, p = () => {
    i = !0;
  }, y = () => {
    i = !1;
  }, x = () => Ud.isFocused() && (t.networkMode === "always" || Xu.isOnline()) && t.canRun(), S = () => kg(t.networkMode) && t.canRun(), C = (I) => {
    var g;
    n || (n = !0, (g = t.onSuccess) == null || g.call(t, I), u == null || u(), b.resolve(I));
  }, M = (I) => {
    var g;
    n || (n = !0, (g = t.onError) == null || g.call(t, I), u == null || u(), b.reject(I));
  }, N = () => new Promise((I) => {
    var g;
    u = (G) => {
      (n || x()) && I(G);
    }, (g = t.onPause) == null || g.call(t);
  }).then(() => {
    var I;
    u = void 0, n || (I = t.onContinue) == null || I.call(t);
  }), A = () => {
    if (n)
      return;
    let I;
    const g = l === 0 ? t.initialPromise : void 0;
    try {
      I = g ?? t.fn();
    } catch (G) {
      I = Promise.reject(G);
    }
    Promise.resolve(I).then(C).catch((G) => {
      var se;
      if (n)
        return;
      const q = t.retry ?? (Wr ? 0 : 3), F = t.retryDelay ?? Zk, ue = typeof F == "function" ? F(l, G) : F, R = q === !0 || typeof q == "number" && l < q || typeof q == "function" && q(l, G);
      if (i || !R) {
        M(G);
        return;
      }
      l++, (se = t.onFail) == null || se.call(t, l, G), Yk(ue).then(() => x() ? void 0 : N()).then(() => {
        i ? M(G) : A();
      });
    });
  };
  return {
    promise: b,
    cancel: c,
    continue: () => (u == null || u(), b),
    cancelRetry: p,
    continueRetry: y,
    canStart: S,
    start: () => (S() ? A() : N().then(A), b)
  };
}
function Jk() {
  let t = [], i = 0, l = (p) => {
    p();
  }, n = (p) => {
    p();
  }, u = (p) => setTimeout(p, 0);
  const b = (p) => {
    i ? t.push(p) : u(() => {
      l(p);
    });
  }, c = () => {
    const p = t;
    t = [], p.length && u(() => {
      n(() => {
        p.forEach((y) => {
          l(y);
        });
      });
    });
  };
  return {
    batch: (p) => {
      let y;
      i++;
      try {
        y = p();
      } finally {
        i--, i || c();
      }
      return y;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (p) => (...y) => {
      b(() => {
        p(...y);
      });
    },
    schedule: b,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (p) => {
      l = p;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (p) => {
      n = p;
    },
    setScheduler: (p) => {
      u = p;
    }
  };
}
var mi = Jk(), Dr, jv, Eg = (jv = class {
  constructor() {
    qe(this, Dr);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), cd(this.gcTime) && Re(this, Dr, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (Wr ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    L(this, Dr) && (clearTimeout(L(this, Dr)), Re(this, Dr, void 0));
  }
}, Dr = new WeakMap(), jv), Dn, Ln, El, Di, Ks, Lr, ql, Ra, Fv, Xk = (Fv = class extends Eg {
  constructor(i) {
    super();
    qe(this, ql);
    qe(this, Dn);
    qe(this, Ln);
    qe(this, El);
    qe(this, Di);
    qe(this, Ks);
    qe(this, Lr);
    Re(this, Lr, !1), Re(this, Ks, i.defaultOptions), this.setOptions(i.options), this.observers = [], Re(this, El, i.cache), this.queryKey = i.queryKey, this.queryHash = i.queryHash, Re(this, Dn, e1(this.options)), this.state = i.state ?? L(this, Dn), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var i;
    return (i = L(this, Di)) == null ? void 0 : i.promise;
  }
  setOptions(i) {
    this.options = { ...L(this, Ks), ...i }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && L(this, El).remove(this);
  }
  setData(i, l) {
    const n = dd(this.state.data, i, this.options);
    return st(this, ql, Ra).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: l == null ? void 0 : l.updatedAt,
      manual: l == null ? void 0 : l.manual
    }), n;
  }
  setState(i, l) {
    st(this, ql, Ra).call(this, { type: "setState", state: i, setStateOptions: l });
  }
  cancel(i) {
    var n, u;
    const l = (n = L(this, Di)) == null ? void 0 : n.promise;
    return (u = L(this, Di)) == null || u.cancel(i), l ? l.then(Tl).catch(Tl) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(L(this, Dn));
  }
  isActive() {
    return this.observers.some(
      (i) => $l(i.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ju || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (i) => i.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(i = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !xg(this.state.dataUpdatedAt, i);
  }
  onFocus() {
    var l;
    const i = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    i == null || i.refetch({ cancelRefetch: !1 }), (l = L(this, Di)) == null || l.continue();
  }
  onOnline() {
    var l;
    const i = this.observers.find((n) => n.shouldFetchOnReconnect());
    i == null || i.refetch({ cancelRefetch: !1 }), (l = L(this, Di)) == null || l.continue();
  }
  addObserver(i) {
    this.observers.includes(i) || (this.observers.push(i), this.clearGcTimeout(), L(this, El).notify({ type: "observerAdded", query: this, observer: i }));
  }
  removeObserver(i) {
    this.observers.includes(i) && (this.observers = this.observers.filter((l) => l !== i), this.observers.length || (L(this, Di) && (L(this, Lr) ? L(this, Di).cancel({ revert: !0 }) : L(this, Di).cancelRetry()), this.scheduleGc()), L(this, El).notify({ type: "observerRemoved", query: this, observer: i }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || st(this, ql, Ra).call(this, { type: "invalidate" });
  }
  fetch(i, l) {
    var y, x, S;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (l != null && l.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (L(this, Di))
        return L(this, Di).continueRetry(), L(this, Di).promise;
    }
    if (i && this.setOptions(i), !this.options.queryFn) {
      const C = this.observers.find((M) => M.options.queryFn);
      C && this.setOptions(C.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), u = (C) => {
      Object.defineProperty(C, "signal", {
        enumerable: !0,
        get: () => (Re(this, Lr, !0), n.signal)
      });
    }, b = () => {
      const C = Sg(this.options, l), M = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return u(M), Re(this, Lr, !1), this.options.persister ? this.options.persister(
        C,
        M,
        this
      ) : C(M);
    }, c = {
      fetchOptions: l,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: b
    };
    u(c), (y = this.options.behavior) == null || y.onFetch(
      c,
      this
    ), Re(this, Ln, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((x = c.fetchOptions) == null ? void 0 : x.meta)) && st(this, ql, Ra).call(this, { type: "fetch", meta: (S = c.fetchOptions) == null ? void 0 : S.meta });
    const p = (C) => {
      var M, N, A, I;
      Vf(C) && C.silent || st(this, ql, Ra).call(this, {
        type: "error",
        error: C
      }), Vf(C) || ((N = (M = L(this, El).config).onError) == null || N.call(
        M,
        C,
        this
      ), (I = (A = L(this, El).config).onSettled) == null || I.call(
        A,
        this.state.data,
        C,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return Re(this, Di, Cg({
      initialPromise: l == null ? void 0 : l.initialPromise,
      fn: c.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (C) => {
        var M, N, A, I;
        if (C === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), p(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(C);
        } catch (g) {
          p(g);
          return;
        }
        (N = (M = L(this, El).config).onSuccess) == null || N.call(M, C, this), (I = (A = L(this, El).config).onSettled) == null || I.call(
          A,
          C,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: p,
      onFail: (C, M) => {
        st(this, ql, Ra).call(this, { type: "failed", failureCount: C, error: M });
      },
      onPause: () => {
        st(this, ql, Ra).call(this, { type: "pause" });
      },
      onContinue: () => {
        st(this, ql, Ra).call(this, { type: "continue" });
      },
      retry: c.options.retry,
      retryDelay: c.options.retryDelay,
      networkMode: c.options.networkMode,
      canRun: () => !0
    })), L(this, Di).start();
  }
}, Dn = new WeakMap(), Ln = new WeakMap(), El = new WeakMap(), Di = new WeakMap(), Ks = new WeakMap(), Lr = new WeakMap(), ql = new WeakSet(), Ra = function(i) {
  const l = (n) => {
    switch (i.type) {
      case "failed":
        return {
          ...n,
          fetchFailureCount: i.failureCount,
          fetchFailureReason: i.error
        };
      case "pause":
        return {
          ...n,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...n,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...n,
          ...Tg(n.data, this.options),
          fetchMeta: i.meta ?? null
        };
      case "success":
        return {
          ...n,
          data: i.data,
          dataUpdateCount: n.dataUpdateCount + 1,
          dataUpdatedAt: i.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!i.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const u = i.error;
        return Vf(u) && u.revert && L(this, Ln) ? { ...L(this, Ln), fetchStatus: "idle" } : {
          ...n,
          error: u,
          errorUpdateCount: n.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: n.fetchFailureCount + 1,
          fetchFailureReason: u,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...n,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...n,
          ...i.state
        };
    }
  };
  this.state = l(this.state), mi.batch(() => {
    this.observers.forEach((n) => {
      n.onQueryUpdate();
    }), L(this, El).notify({ query: this, type: "updated", action: i });
  });
}, Fv);
function Tg(t, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: kg(i.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function e1(t) {
  const i = typeof t.initialData == "function" ? t.initialData() : t.initialData, l = i !== void 0, n = l ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: l ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: l ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var na, Uv, t1 = (Uv = class extends Qn {
  constructor(i = {}) {
    super();
    qe(this, na);
    this.config = i, Re(this, na, /* @__PURE__ */ new Map());
  }
  build(i, l, n) {
    const u = l.queryKey, b = l.queryHash ?? Fd(u, l);
    let c = this.get(b);
    return c || (c = new Xk({
      cache: this,
      queryKey: u,
      queryHash: b,
      options: i.defaultQueryOptions(l),
      state: n,
      defaultOptions: i.getQueryDefaults(u)
    }), this.add(c)), c;
  }
  add(i) {
    L(this, na).has(i.queryHash) || (L(this, na).set(i.queryHash, i), this.notify({
      type: "added",
      query: i
    }));
  }
  remove(i) {
    const l = L(this, na).get(i.queryHash);
    l && (i.destroy(), l === i && L(this, na).delete(i.queryHash), this.notify({ type: "removed", query: i }));
  }
  clear() {
    mi.batch(() => {
      this.getAll().forEach((i) => {
        this.remove(i);
      });
    });
  }
  get(i) {
    return L(this, na).get(i);
  }
  getAll() {
    return [...L(this, na).values()];
  }
  find(i) {
    const l = { exact: !0, ...i };
    return this.getAll().find(
      (n) => zp(l, n)
    );
  }
  findAll(i = {}) {
    const l = this.getAll();
    return Object.keys(i).length > 0 ? l.filter((n) => zp(i, n)) : l;
  }
  notify(i) {
    mi.batch(() => {
      this.listeners.forEach((l) => {
        l(i);
      });
    });
  }
  onFocus() {
    mi.batch(() => {
      this.getAll().forEach((i) => {
        i.onFocus();
      });
    });
  }
  onOnline() {
    mi.batch(() => {
      this.getAll().forEach((i) => {
        i.onOnline();
      });
    });
  }
}, na = new WeakMap(), Uv), sa, qi, Nr, oa, Za, Bv, i1 = (Bv = class extends Eg {
  constructor(i) {
    super();
    qe(this, oa);
    qe(this, sa);
    qe(this, qi);
    qe(this, Nr);
    this.mutationId = i.mutationId, Re(this, qi, i.mutationCache), Re(this, sa, []), this.state = i.state || Ag(), this.setOptions(i.options), this.scheduleGc();
  }
  setOptions(i) {
    this.options = i, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(i) {
    L(this, sa).includes(i) || (L(this, sa).push(i), this.clearGcTimeout(), L(this, qi).notify({
      type: "observerAdded",
      mutation: this,
      observer: i
    }));
  }
  removeObserver(i) {
    Re(this, sa, L(this, sa).filter((l) => l !== i)), this.scheduleGc(), L(this, qi).notify({
      type: "observerRemoved",
      mutation: this,
      observer: i
    });
  }
  optionalRemove() {
    L(this, sa).length || (this.state.status === "pending" ? this.scheduleGc() : L(this, qi).remove(this));
  }
  continue() {
    var i;
    return ((i = L(this, Nr)) == null ? void 0 : i.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(i) {
    var u, b, c, p, y, x, S, C, M, N, A, I, g, G, q, F, ue, R, se, $;
    Re(this, Nr, Cg({
      fn: () => this.options.mutationFn ? this.options.mutationFn(i) : Promise.reject(new Error("No mutationFn found")),
      onFail: (K, z) => {
        st(this, oa, Za).call(this, { type: "failed", failureCount: K, error: z });
      },
      onPause: () => {
        st(this, oa, Za).call(this, { type: "pause" });
      },
      onContinue: () => {
        st(this, oa, Za).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => L(this, qi).canRun(this)
    }));
    const l = this.state.status === "pending", n = !L(this, Nr).canStart();
    try {
      if (!l) {
        st(this, oa, Za).call(this, { type: "pending", variables: i, isPaused: n }), await ((b = (u = L(this, qi).config).onMutate) == null ? void 0 : b.call(
          u,
          i,
          this
        ));
        const z = await ((p = (c = this.options).onMutate) == null ? void 0 : p.call(c, i));
        z !== this.state.context && st(this, oa, Za).call(this, {
          type: "pending",
          context: z,
          variables: i,
          isPaused: n
        });
      }
      const K = await L(this, Nr).start();
      return await ((x = (y = L(this, qi).config).onSuccess) == null ? void 0 : x.call(
        y,
        K,
        i,
        this.state.context,
        this
      )), await ((C = (S = this.options).onSuccess) == null ? void 0 : C.call(S, K, i, this.state.context)), await ((N = (M = L(this, qi).config).onSettled) == null ? void 0 : N.call(
        M,
        K,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((I = (A = this.options).onSettled) == null ? void 0 : I.call(A, K, null, i, this.state.context)), st(this, oa, Za).call(this, { type: "success", data: K }), K;
    } catch (K) {
      try {
        throw await ((G = (g = L(this, qi).config).onError) == null ? void 0 : G.call(
          g,
          K,
          i,
          this.state.context,
          this
        )), await ((F = (q = this.options).onError) == null ? void 0 : F.call(
          q,
          K,
          i,
          this.state.context
        )), await ((R = (ue = L(this, qi).config).onSettled) == null ? void 0 : R.call(
          ue,
          void 0,
          K,
          this.state.variables,
          this.state.context,
          this
        )), await (($ = (se = this.options).onSettled) == null ? void 0 : $.call(
          se,
          void 0,
          K,
          i,
          this.state.context
        )), K;
      } finally {
        st(this, oa, Za).call(this, { type: "error", error: K });
      }
    } finally {
      L(this, qi).runNext(this);
    }
  }
}, sa = new WeakMap(), qi = new WeakMap(), Nr = new WeakMap(), oa = new WeakSet(), Za = function(i) {
  const l = (n) => {
    switch (i.type) {
      case "failed":
        return {
          ...n,
          failureCount: i.failureCount,
          failureReason: i.error
        };
      case "pause":
        return {
          ...n,
          isPaused: !0
        };
      case "continue":
        return {
          ...n,
          isPaused: !1
        };
      case "pending":
        return {
          ...n,
          context: i.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: i.isPaused,
          status: "pending",
          variables: i.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...n,
          data: i.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...n,
          data: void 0,
          error: i.error,
          failureCount: n.failureCount + 1,
          failureReason: i.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = l(this.state), mi.batch(() => {
    L(this, sa).forEach((n) => {
      n.onMutationUpdate(i);
    }), L(this, qi).notify({
      mutation: this,
      type: "updated",
      action: i
    });
  });
}, Bv);
function Ag() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var fl, Qs, Wv, l1 = (Wv = class extends Qn {
  constructor(i = {}) {
    super();
    qe(this, fl);
    qe(this, Qs);
    this.config = i, Re(this, fl, /* @__PURE__ */ new Map()), Re(this, Qs, Date.now());
  }
  build(i, l, n) {
    const u = new i1({
      mutationCache: this,
      mutationId: ++Nu(this, Qs)._,
      options: i.defaultMutationOptions(l),
      state: n
    });
    return this.add(u), u;
  }
  add(i) {
    const l = Pu(i), n = L(this, fl).get(l) ?? [];
    n.push(i), L(this, fl).set(l, n), this.notify({ type: "added", mutation: i });
  }
  remove(i) {
    var n;
    const l = Pu(i);
    if (L(this, fl).has(l)) {
      const u = (n = L(this, fl).get(l)) == null ? void 0 : n.filter((b) => b !== i);
      u && (u.length === 0 ? L(this, fl).delete(l) : L(this, fl).set(l, u));
    }
    this.notify({ type: "removed", mutation: i });
  }
  canRun(i) {
    var n;
    const l = (n = L(this, fl).get(Pu(i))) == null ? void 0 : n.find((u) => u.state.status === "pending");
    return !l || l === i;
  }
  runNext(i) {
    var n;
    const l = (n = L(this, fl).get(Pu(i))) == null ? void 0 : n.find((u) => u !== i && u.state.isPaused);
    return (l == null ? void 0 : l.continue()) ?? Promise.resolve();
  }
  clear() {
    mi.batch(() => {
      this.getAll().forEach((i) => {
        this.remove(i);
      });
    });
  }
  getAll() {
    return [...L(this, fl).values()].flat();
  }
  find(i) {
    const l = { exact: !0, ...i };
    return this.getAll().find(
      (n) => Yp(l, n)
    );
  }
  findAll(i = {}) {
    return this.getAll().filter((l) => Yp(i, l));
  }
  notify(i) {
    mi.batch(() => {
      this.listeners.forEach((l) => {
        l(i);
      });
    });
  }
  resumePausedMutations() {
    const i = this.getAll().filter((l) => l.state.isPaused);
    return mi.batch(
      () => Promise.all(
        i.map((l) => l.continue().catch(Tl))
      )
    );
  }
}, fl = new WeakMap(), Qs = new WeakMap(), Wv);
function Pu(t) {
  var i;
  return ((i = t.options.scope) == null ? void 0 : i.id) ?? String(t.mutationId);
}
function Kp(t) {
  return {
    onFetch: (i, l) => {
      var S, C, M, N, A;
      const n = i.options, u = (M = (C = (S = i.fetchOptions) == null ? void 0 : S.meta) == null ? void 0 : C.fetchMore) == null ? void 0 : M.direction, b = ((N = i.state.data) == null ? void 0 : N.pages) || [], c = ((A = i.state.data) == null ? void 0 : A.pageParams) || [];
      let p = { pages: [], pageParams: [] }, y = 0;
      const x = async () => {
        let I = !1;
        const g = (F) => {
          Object.defineProperty(F, "signal", {
            enumerable: !0,
            get: () => (i.signal.aborted ? I = !0 : i.signal.addEventListener("abort", () => {
              I = !0;
            }), i.signal)
          });
        }, G = Sg(i.options, i.fetchOptions), q = async (F, ue, R) => {
          if (I)
            return Promise.reject();
          if (ue == null && F.pages.length)
            return Promise.resolve(F);
          const se = {
            queryKey: i.queryKey,
            pageParam: ue,
            direction: R ? "backward" : "forward",
            meta: i.options.meta
          };
          g(se);
          const $ = await G(
            se
          ), { maxPages: K } = i.options, z = R ? Gk : Hk;
          return {
            pages: z(F.pages, $, K),
            pageParams: z(F.pageParams, ue, K)
          };
        };
        if (u && b.length) {
          const F = u === "backward", ue = F ? a1 : Qp, R = {
            pages: b,
            pageParams: c
          }, se = ue(n, R);
          p = await q(R, se, F);
        } else {
          const F = t ?? b.length;
          do {
            const ue = y === 0 ? c[0] ?? n.initialPageParam : Qp(n, p);
            if (y > 0 && ue == null)
              break;
            p = await q(p, ue), y++;
          } while (y < F);
        }
        return p;
      };
      i.options.persister ? i.fetchFn = () => {
        var I, g;
        return (g = (I = i.options).persister) == null ? void 0 : g.call(
          I,
          x,
          {
            queryKey: i.queryKey,
            meta: i.options.meta,
            signal: i.signal
          },
          l
        );
      } : i.fetchFn = x;
    }
  };
}
function Qp(t, { pages: i, pageParams: l }) {
  const n = i.length - 1;
  return i.length > 0 ? t.getNextPageParam(
    i[n],
    i,
    l[n],
    l
  ) : void 0;
}
function a1(t, { pages: i, pageParams: l }) {
  var n;
  return i.length > 0 ? (n = t.getPreviousPageParam) == null ? void 0 : n.call(t, i[0], i, l[0], l) : void 0;
}
var li, tr, ir, Nn, In, lr, Pn, jn, qv, r1 = (qv = class {
  constructor(t = {}) {
    qe(this, li);
    qe(this, tr);
    qe(this, ir);
    qe(this, Nn);
    qe(this, In);
    qe(this, lr);
    qe(this, Pn);
    qe(this, jn);
    Re(this, li, t.queryCache || new t1()), Re(this, tr, t.mutationCache || new l1()), Re(this, ir, t.defaultOptions || {}), Re(this, Nn, /* @__PURE__ */ new Map()), Re(this, In, /* @__PURE__ */ new Map()), Re(this, lr, 0);
  }
  mount() {
    Nu(this, lr)._++, L(this, lr) === 1 && (Re(this, Pn, Ud.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), L(this, li).onFocus());
    })), Re(this, jn, Xu.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), L(this, li).onOnline());
    })));
  }
  unmount() {
    var t, i;
    Nu(this, lr)._--, L(this, lr) === 0 && ((t = L(this, Pn)) == null || t.call(this), Re(this, Pn, void 0), (i = L(this, jn)) == null || i.call(this), Re(this, jn, void 0));
  }
  isFetching(t) {
    return L(this, li).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return L(this, tr).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var l;
    const i = this.defaultQueryOptions({ queryKey: t });
    return (l = L(this, li).get(i.queryHash)) == null ? void 0 : l.state.data;
  }
  ensureQueryData(t) {
    const i = this.getQueryData(t.queryKey);
    if (i === void 0)
      return this.fetchQuery(t);
    {
      const l = this.defaultQueryOptions(t), n = L(this, li).build(this, l);
      return t.revalidateIfStale && n.isStaleByTime(En(l.staleTime, n)) && this.prefetchQuery(l), Promise.resolve(i);
    }
  }
  getQueriesData(t) {
    return L(this, li).findAll(t).map(({ queryKey: i, state: l }) => {
      const n = l.data;
      return [i, n];
    });
  }
  setQueryData(t, i, l) {
    const n = this.defaultQueryOptions({ queryKey: t }), u = L(this, li).get(
      n.queryHash
    ), b = u == null ? void 0 : u.state.data, c = zk(i, b);
    if (c !== void 0)
      return L(this, li).build(this, n).setData(c, { ...l, manual: !0 });
  }
  setQueriesData(t, i, l) {
    return mi.batch(
      () => L(this, li).findAll(t).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, i, l)
      ])
    );
  }
  getQueryState(t) {
    var l;
    const i = this.defaultQueryOptions({ queryKey: t });
    return (l = L(this, li).get(i.queryHash)) == null ? void 0 : l.state;
  }
  removeQueries(t) {
    const i = L(this, li);
    mi.batch(() => {
      i.findAll(t).forEach((l) => {
        i.remove(l);
      });
    });
  }
  resetQueries(t, i) {
    const l = L(this, li), n = {
      type: "active",
      ...t
    };
    return mi.batch(() => (l.findAll(t).forEach((u) => {
      u.reset();
    }), this.refetchQueries(n, i)));
  }
  cancelQueries(t = {}, i = {}) {
    const l = { revert: !0, ...i }, n = mi.batch(
      () => L(this, li).findAll(t).map((u) => u.cancel(l))
    );
    return Promise.all(n).then(Tl).catch(Tl);
  }
  invalidateQueries(t = {}, i = {}) {
    return mi.batch(() => {
      if (L(this, li).findAll(t).forEach((n) => {
        n.invalidate();
      }), t.refetchType === "none")
        return Promise.resolve();
      const l = {
        ...t,
        type: t.refetchType ?? t.type ?? "active"
      };
      return this.refetchQueries(l, i);
    });
  }
  refetchQueries(t = {}, i) {
    const l = {
      ...i,
      cancelRefetch: (i == null ? void 0 : i.cancelRefetch) ?? !0
    }, n = mi.batch(
      () => L(this, li).findAll(t).filter((u) => !u.isDisabled()).map((u) => {
        let b = u.fetch(void 0, l);
        return l.throwOnError || (b = b.catch(Tl)), u.state.fetchStatus === "paused" ? Promise.resolve() : b;
      })
    );
    return Promise.all(n).then(Tl);
  }
  fetchQuery(t) {
    const i = this.defaultQueryOptions(t);
    i.retry === void 0 && (i.retry = !1);
    const l = L(this, li).build(this, i);
    return l.isStaleByTime(
      En(i.staleTime, l)
    ) ? l.fetch(i) : Promise.resolve(l.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(Tl).catch(Tl);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = Kp(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(Tl).catch(Tl);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = Kp(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return Xu.isOnline() ? L(this, tr).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return L(this, li);
  }
  getMutationCache() {
    return L(this, tr);
  }
  getDefaultOptions() {
    return L(this, ir);
  }
  setDefaultOptions(t) {
    Re(this, ir, t);
  }
  setQueryDefaults(t, i) {
    L(this, Nn).set(qr(t), {
      queryKey: t,
      defaultOptions: i
    });
  }
  getQueryDefaults(t) {
    const i = [...L(this, Nn).values()];
    let l = {};
    return i.forEach((n) => {
      Ys(t, n.queryKey) && (l = { ...l, ...n.defaultOptions });
    }), l;
  }
  setMutationDefaults(t, i) {
    L(this, In).set(qr(t), {
      mutationKey: t,
      defaultOptions: i
    });
  }
  getMutationDefaults(t) {
    const i = [...L(this, In).values()];
    let l = {};
    return i.forEach((n) => {
      Ys(t, n.mutationKey) && (l = { ...l, ...n.defaultOptions });
    }), l;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const i = {
      ...L(this, ir).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return i.queryHash || (i.queryHash = Fd(
      i.queryKey,
      i
    )), i.refetchOnReconnect === void 0 && (i.refetchOnReconnect = i.networkMode !== "always"), i.throwOnError === void 0 && (i.throwOnError = !!i.suspense), !i.networkMode && i.persister && (i.networkMode = "offlineFirst"), i.enabled !== !0 && i.queryFn === Ju && (i.enabled = !1), i;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...L(this, ir).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    L(this, li).clear(), L(this, tr).clear();
  }
}, li = new WeakMap(), tr = new WeakMap(), ir = new WeakMap(), Nn = new WeakMap(), In = new WeakMap(), lr = new WeakMap(), Pn = new WeakMap(), jn = new WeakMap(), qv), Ji, yt, Zs, $i, Ir, Fn, ar, ua, Js, Un, Bn, Pr, jr, rr, Wn, At, qs, pd, vd, gd, md, yd, wd, _d, Og, $v, n1 = ($v = class extends Qn {
  constructor(i, l) {
    super();
    qe(this, At);
    qe(this, Ji);
    qe(this, yt);
    qe(this, Zs);
    qe(this, $i);
    qe(this, Ir);
    qe(this, Fn);
    qe(this, ar);
    qe(this, ua);
    qe(this, Js);
    qe(this, Un);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    qe(this, Bn);
    qe(this, Pr);
    qe(this, jr);
    qe(this, rr);
    qe(this, Wn, /* @__PURE__ */ new Set());
    this.options = l, Re(this, Ji, i), Re(this, ua, null), Re(this, ar, hd()), this.options.experimental_prefetchInRender || L(this, ar).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(l);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (L(this, yt).addObserver(this), Zp(L(this, yt), this.options) ? st(this, At, qs).call(this) : this.updateResult(), st(this, At, md).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return xd(
      L(this, yt),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return xd(
      L(this, yt),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), st(this, At, yd).call(this), st(this, At, wd).call(this), L(this, yt).removeObserver(this);
  }
  setOptions(i, l) {
    const n = this.options, u = L(this, yt);
    if (this.options = L(this, Ji).defaultQueryOptions(i), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof $l(this.options.enabled, L(this, yt)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    st(this, At, _d).call(this), L(this, yt).setOptions(this.options), n._defaulted && !Zu(this.options, n) && L(this, Ji).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: L(this, yt),
      observer: this
    });
    const b = this.hasListeners();
    b && Jp(
      L(this, yt),
      u,
      this.options,
      n
    ) && st(this, At, qs).call(this), this.updateResult(l), b && (L(this, yt) !== u || $l(this.options.enabled, L(this, yt)) !== $l(n.enabled, L(this, yt)) || En(this.options.staleTime, L(this, yt)) !== En(n.staleTime, L(this, yt))) && st(this, At, pd).call(this);
    const c = st(this, At, vd).call(this);
    b && (L(this, yt) !== u || $l(this.options.enabled, L(this, yt)) !== $l(n.enabled, L(this, yt)) || c !== L(this, rr)) && st(this, At, gd).call(this, c);
  }
  getOptimisticResult(i) {
    const l = L(this, Ji).getQueryCache().build(L(this, Ji), i), n = this.createResult(l, i);
    return o1(this, n) && (Re(this, $i, n), Re(this, Fn, this.options), Re(this, Ir, L(this, yt).state)), n;
  }
  getCurrentResult() {
    return L(this, $i);
  }
  trackResult(i, l) {
    const n = {};
    return Object.keys(i).forEach((u) => {
      Object.defineProperty(n, u, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(u), l == null || l(u), i[u])
      });
    }), n;
  }
  trackProp(i) {
    L(this, Wn).add(i);
  }
  getCurrentQuery() {
    return L(this, yt);
  }
  refetch({ ...i } = {}) {
    return this.fetch({
      ...i
    });
  }
  fetchOptimistic(i) {
    const l = L(this, Ji).defaultQueryOptions(i), n = L(this, Ji).getQueryCache().build(L(this, Ji), l);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, l));
  }
  fetch(i) {
    return st(this, At, qs).call(this, {
      ...i,
      cancelRefetch: i.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), L(this, $i)));
  }
  createResult(i, l) {
    var $;
    const n = L(this, yt), u = this.options, b = L(this, $i), c = L(this, Ir), p = L(this, Fn), x = i !== n ? i.state : L(this, Zs), { state: S } = i;
    let C = { ...S }, M = !1, N;
    if (l._optimisticResults) {
      const K = this.hasListeners(), z = !K && Zp(i, l), pe = K && Jp(i, n, l, u);
      (z || pe) && (C = {
        ...C,
        ...Tg(S.data, i.options)
      }), l._optimisticResults === "isRestoring" && (C.fetchStatus = "idle");
    }
    let { error: A, errorUpdatedAt: I, status: g } = C;
    if (l.select && C.data !== void 0)
      if (b && C.data === (c == null ? void 0 : c.data) && l.select === L(this, Js))
        N = L(this, Un);
      else
        try {
          Re(this, Js, l.select), N = l.select(C.data), N = dd(b == null ? void 0 : b.data, N, l), Re(this, Un, N), Re(this, ua, null);
        } catch (K) {
          Re(this, ua, K);
        }
    else
      N = C.data;
    if (l.placeholderData !== void 0 && N === void 0 && g === "pending") {
      let K;
      if (b != null && b.isPlaceholderData && l.placeholderData === (p == null ? void 0 : p.placeholderData))
        K = b.data;
      else if (K = typeof l.placeholderData == "function" ? l.placeholderData(
        ($ = L(this, Bn)) == null ? void 0 : $.state.data,
        L(this, Bn)
      ) : l.placeholderData, l.select && K !== void 0)
        try {
          K = l.select(K), Re(this, ua, null);
        } catch (z) {
          Re(this, ua, z);
        }
      K !== void 0 && (g = "success", N = dd(
        b == null ? void 0 : b.data,
        K,
        l
      ), M = !0);
    }
    L(this, ua) && (A = L(this, ua), N = L(this, Un), I = Date.now(), g = "error");
    const G = C.fetchStatus === "fetching", q = g === "pending", F = g === "error", ue = q && G, R = N !== void 0;
    return {
      status: g,
      fetchStatus: C.fetchStatus,
      isPending: q,
      isSuccess: g === "success",
      isError: F,
      isInitialLoading: ue,
      isLoading: ue,
      data: N,
      dataUpdatedAt: C.dataUpdatedAt,
      error: A,
      errorUpdatedAt: I,
      failureCount: C.fetchFailureCount,
      failureReason: C.fetchFailureReason,
      errorUpdateCount: C.errorUpdateCount,
      isFetched: C.dataUpdateCount > 0 || C.errorUpdateCount > 0,
      isFetchedAfterMount: C.dataUpdateCount > x.dataUpdateCount || C.errorUpdateCount > x.errorUpdateCount,
      isFetching: G,
      isRefetching: G && !q,
      isLoadingError: F && !R,
      isPaused: C.fetchStatus === "paused",
      isPlaceholderData: M,
      isRefetchError: F && R,
      isStale: Bd(i, l),
      refetch: this.refetch,
      promise: L(this, ar)
    };
  }
  updateResult(i) {
    const l = L(this, $i), n = this.createResult(L(this, yt), this.options);
    if (Re(this, Ir, L(this, yt).state), Re(this, Fn, this.options), L(this, Ir).data !== void 0 && Re(this, Bn, L(this, yt)), Zu(n, l))
      return;
    if (this.options.experimental_prefetchInRender) {
      const c = (x) => {
        n.status === "error" ? x.reject(n.error) : n.data !== void 0 && x.resolve(n.data);
      }, p = () => {
        const x = Re(this, ar, n.promise = hd());
        c(x);
      }, y = L(this, ar);
      switch (y.status) {
        case "pending":
          c(y);
          break;
        case "fulfilled":
          (n.status === "error" || n.data !== y.value) && p();
          break;
        case "rejected":
          (n.status !== "error" || n.error !== y.reason) && p();
          break;
      }
    }
    Re(this, $i, n);
    const u = {}, b = () => {
      if (!l)
        return !0;
      const { notifyOnChangeProps: c } = this.options, p = typeof c == "function" ? c() : c;
      if (p === "all" || !p && !L(this, Wn).size)
        return !0;
      const y = new Set(
        p ?? L(this, Wn)
      );
      return this.options.throwOnError && y.add("error"), Object.keys(L(this, $i)).some((x) => {
        const S = x;
        return L(this, $i)[S] !== l[S] && y.has(S);
      });
    };
    (i == null ? void 0 : i.listeners) !== !1 && b() && (u.listeners = !0), st(this, At, Og).call(this, { ...u, ...i });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && st(this, At, md).call(this);
  }
}, Ji = new WeakMap(), yt = new WeakMap(), Zs = new WeakMap(), $i = new WeakMap(), Ir = new WeakMap(), Fn = new WeakMap(), ar = new WeakMap(), ua = new WeakMap(), Js = new WeakMap(), Un = new WeakMap(), Bn = new WeakMap(), Pr = new WeakMap(), jr = new WeakMap(), rr = new WeakMap(), Wn = new WeakMap(), At = new WeakSet(), qs = function(i) {
  st(this, At, _d).call(this);
  let l = L(this, yt).fetch(
    this.options,
    i
  );
  return i != null && i.throwOnError || (l = l.catch(Tl)), l;
}, pd = function() {
  st(this, At, yd).call(this);
  const i = En(
    this.options.staleTime,
    L(this, yt)
  );
  if (Wr || L(this, $i).isStale || !cd(i))
    return;
  const n = xg(L(this, $i).dataUpdatedAt, i) + 1;
  Re(this, Pr, setTimeout(() => {
    L(this, $i).isStale || this.updateResult();
  }, n));
}, vd = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(L(this, yt)) : this.options.refetchInterval) ?? !1;
}, gd = function(i) {
  st(this, At, wd).call(this), Re(this, rr, i), !(Wr || $l(this.options.enabled, L(this, yt)) === !1 || !cd(L(this, rr)) || L(this, rr) === 0) && Re(this, jr, setInterval(() => {
    (this.options.refetchIntervalInBackground || Ud.isFocused()) && st(this, At, qs).call(this);
  }, L(this, rr)));
}, md = function() {
  st(this, At, pd).call(this), st(this, At, gd).call(this, st(this, At, vd).call(this));
}, yd = function() {
  L(this, Pr) && (clearTimeout(L(this, Pr)), Re(this, Pr, void 0));
}, wd = function() {
  L(this, jr) && (clearInterval(L(this, jr)), Re(this, jr, void 0));
}, _d = function() {
  const i = L(this, Ji).getQueryCache().build(L(this, Ji), this.options);
  if (i === L(this, yt))
    return;
  const l = L(this, yt);
  Re(this, yt, i), Re(this, Zs, i.state), this.hasListeners() && (l == null || l.removeObserver(this), i.addObserver(this));
}, Og = function(i) {
  mi.batch(() => {
    i.listeners && this.listeners.forEach((l) => {
      l(L(this, $i));
    }), L(this, Ji).getQueryCache().notify({
      query: L(this, yt),
      type: "observerResultsUpdated"
    });
  });
}, $v);
function s1(t, i) {
  return $l(i.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && i.retryOnMount === !1);
}
function Zp(t, i) {
  return s1(t, i) || t.state.data !== void 0 && xd(t, i, i.refetchOnMount);
}
function xd(t, i, l) {
  if ($l(i.enabled, t) !== !1) {
    const n = typeof l == "function" ? l(t) : l;
    return n === "always" || n !== !1 && Bd(t, i);
  }
  return !1;
}
function Jp(t, i, l, n) {
  return (t !== i || $l(n.enabled, t) === !1) && (!l.suspense || t.state.status !== "error") && Bd(t, l);
}
function Bd(t, i) {
  return $l(i.enabled, t) !== !1 && t.isStaleByTime(En(i.staleTime, t));
}
function o1(t, i) {
  return !Zu(t.getCurrentResult(), i);
}
var nr, sr, Xi, Ca, Ta, zu, Sd, Vv, u1 = (Vv = class extends Qn {
  constructor(i, l) {
    super();
    qe(this, Ta);
    qe(this, nr);
    qe(this, sr);
    qe(this, Xi);
    qe(this, Ca);
    Re(this, nr, i), this.setOptions(l), this.bindMethods(), st(this, Ta, zu).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(i) {
    var n;
    const l = this.options;
    this.options = L(this, nr).defaultMutationOptions(i), Zu(this.options, l) || L(this, nr).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: L(this, Xi),
      observer: this
    }), l != null && l.mutationKey && this.options.mutationKey && qr(l.mutationKey) !== qr(this.options.mutationKey) ? this.reset() : ((n = L(this, Xi)) == null ? void 0 : n.state.status) === "pending" && L(this, Xi).setOptions(this.options);
  }
  onUnsubscribe() {
    var i;
    this.hasListeners() || (i = L(this, Xi)) == null || i.removeObserver(this);
  }
  onMutationUpdate(i) {
    st(this, Ta, zu).call(this), st(this, Ta, Sd).call(this, i);
  }
  getCurrentResult() {
    return L(this, sr);
  }
  reset() {
    var i;
    (i = L(this, Xi)) == null || i.removeObserver(this), Re(this, Xi, void 0), st(this, Ta, zu).call(this), st(this, Ta, Sd).call(this);
  }
  mutate(i, l) {
    var n;
    return Re(this, Ca, l), (n = L(this, Xi)) == null || n.removeObserver(this), Re(this, Xi, L(this, nr).getMutationCache().build(L(this, nr), this.options)), L(this, Xi).addObserver(this), L(this, Xi).execute(i);
  }
}, nr = new WeakMap(), sr = new WeakMap(), Xi = new WeakMap(), Ca = new WeakMap(), Ta = new WeakSet(), zu = function() {
  var l;
  const i = ((l = L(this, Xi)) == null ? void 0 : l.state) ?? Ag();
  Re(this, sr, {
    ...i,
    isPending: i.status === "pending",
    isSuccess: i.status === "success",
    isError: i.status === "error",
    isIdle: i.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Sd = function(i) {
  mi.batch(() => {
    var l, n, u, b, c, p, y, x;
    if (L(this, Ca) && this.hasListeners()) {
      const S = L(this, sr).variables, C = L(this, sr).context;
      (i == null ? void 0 : i.type) === "success" ? ((n = (l = L(this, Ca)).onSuccess) == null || n.call(l, i.data, S, C), (b = (u = L(this, Ca)).onSettled) == null || b.call(u, i.data, null, S, C)) : (i == null ? void 0 : i.type) === "error" && ((p = (c = L(this, Ca)).onError) == null || p.call(c, i.error, S, C), (x = (y = L(this, Ca)).onSettled) == null || x.call(
        y,
        void 0,
        i.error,
        S,
        C
      ));
    }
    this.listeners.forEach((S) => {
      S(L(this, sr));
    });
  });
}, Vv), Mg = Ei.createContext(
  void 0
), Dg = (t) => {
  const i = Ei.useContext(Mg);
  if (!i)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return i;
}, c1 = ({
  client: t,
  children: i
}) => (Ei.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), /* @__PURE__ */ m.jsx(Mg.Provider, { value: t, children: i })), Lg = Ei.createContext(!1), b1 = () => Ei.useContext(Lg);
Lg.Provider;
function f1() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
var d1 = Ei.createContext(f1()), h1 = () => Ei.useContext(d1);
function Ng(t, i) {
  return typeof t == "function" ? t(...i) : !!t;
}
function Ig() {
}
var p1 = (t, i) => {
  (t.suspense || t.throwOnError) && (i.isReset() || (t.retryOnMount = !1));
}, v1 = (t) => {
  Ei.useEffect(() => {
    t.clearReset();
  }, [t]);
}, g1 = ({
  result: t,
  errorResetBoundary: i,
  throwOnError: l,
  query: n
}) => t.isError && !i.isReset() && !t.isFetching && n && Ng(l, [t.error, n]), m1 = (t) => {
  t.suspense && (typeof t.staleTime != "number" && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, y1 = (t, i) => t.isLoading && t.isFetching && !i, w1 = (t, i) => (t == null ? void 0 : t.suspense) && i.isPending, Xp = (t, i, l) => i.fetchOptimistic(t).catch(() => {
  l.clearReset();
});
function _1(t, i, l) {
  var S, C, M, N, A;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Dg(), u = b1(), b = h1(), c = n.defaultQueryOptions(t);
  (C = (S = n.getDefaultOptions().queries) == null ? void 0 : S._experimental_beforeQuery) == null || C.call(
    S,
    c
  ), c._optimisticResults = u ? "isRestoring" : "optimistic", m1(c), p1(c, b), v1(b);
  const p = !n.getQueryCache().get(c.queryHash), [y] = Ei.useState(
    () => new i(
      n,
      c
    )
  ), x = y.getOptimisticResult(c);
  if (Ei.useSyncExternalStore(
    Ei.useCallback(
      (I) => {
        const g = u ? () => {
        } : y.subscribe(mi.batchCalls(I));
        return y.updateResult(), g;
      },
      [y, u]
    ),
    () => y.getCurrentResult(),
    () => y.getCurrentResult()
  ), Ei.useEffect(() => {
    y.setOptions(c, { listeners: !1 });
  }, [c, y]), w1(c, x))
    throw Xp(c, y, b);
  if (g1({
    result: x,
    errorResetBoundary: b,
    throwOnError: c.throwOnError,
    query: n.getQueryCache().get(c.queryHash)
  }))
    throw x.error;
  if ((N = (M = n.getDefaultOptions().queries) == null ? void 0 : M._experimental_afterQuery) == null || N.call(
    M,
    c,
    x
  ), c.experimental_prefetchInRender && !Wr && y1(x, u)) {
    const I = p ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Xp(c, y, b)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (A = n.getQueryCache().get(c.queryHash)) == null ? void 0 : A.promise
    );
    I == null || I.catch(Ig).finally(() => {
      y.hasListeners() || y.updateResult();
    });
  }
  return c.notifyOnChangeProps ? x : y.trackResult(x);
}
function Wd(t, i) {
  return _1(t, n1);
}
function Pg(t, i) {
  const l = Dg(), [n] = Ei.useState(
    () => new u1(
      l,
      t
    )
  );
  Ei.useEffect(() => {
    n.setOptions(t);
  }, [n, t]);
  const u = Ei.useSyncExternalStore(
    Ei.useCallback(
      (c) => n.subscribe(mi.batchCalls(c)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), b = Ei.useCallback(
    (c, p) => {
      n.mutate(c, p).catch(Ig);
    },
    [n]
  );
  if (u.error && Ng(n.options.throwOnError, [u.error]))
    throw u.error;
  return { ...u, mutate: b, mutateAsync: u.mutate };
}
const jg = (t, i, l) => Wd({
  ...l,
  queryKey: ["product-detail", t, i],
  queryFn: () => Vk(t, i)
}), x1 = (t, i) => {
  var n;
  let l = t == null ? void 0 : t.storeId;
  return typeof process < "u" ? l = (n = process == null ? void 0 : process.env) == null ? void 0 : n.NEXT_PUBLIC_ENTITY_ID : l = "1791381b-a6b0-4771-a441-8b180392bf0a", t = {
    ...t,
    storeId: (t == null ? void 0 : t.storeId) || l
  }, Wd({
    queryKey: ["products", t],
    queryFn: ({ signal: u }) => jd(t, u),
    staleTime: 6e4,
    gcTime: 3e5,
    placeholderData: (u) => u,
    keepPreviousData: !0,
    retry: 1,
    ...i
  });
};
function S1(t) {
  const i = new Error(t);
  if (i.stack === void 0)
    try {
      throw i;
    } catch {
    }
  return i;
}
var k1 = S1, Ze = k1;
function R1(t) {
  return !!t && typeof t.then == "function";
}
var Bt = R1;
function C1(t, i) {
  if (t != null)
    return t;
  throw Ze(i ?? "Got unexpected null or undefined");
}
var Kt = C1;
function tt(t, i, l) {
  return i in t ? Object.defineProperty(t, i, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[i] = l, t;
}
class pc {
  getValue() {
    throw Ze("BaseLoadable");
  }
  toPromise() {
    throw Ze("BaseLoadable");
  }
  valueMaybe() {
    throw Ze("BaseLoadable");
  }
  valueOrThrow() {
    throw Ze(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw Ze("BaseLoadable");
  }
  promiseOrThrow() {
    throw Ze(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw Ze("BaseLoadable");
  }
  errorOrThrow() {
    throw Ze(`Loadable expected error, but in "${this.state}" state`);
  }
  is(i) {
    return i.state === this.state && i.contents === this.contents;
  }
  map(i) {
    throw Ze("BaseLoadable");
  }
}
class E1 extends pc {
  constructor(i) {
    super(), tt(this, "state", "hasValue"), tt(this, "contents", void 0), this.contents = i;
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {
  }
  errorMaybe() {
  }
  map(i) {
    try {
      const l = i(this.contents);
      return Bt(l) ? $r(l) : Vn(l) ? l : ao(l);
    } catch (l) {
      return Bt(l) ? (
        // If we "suspended", then try again.
        // errors and subsequent retries will be handled in 'loading' case
        // $FlowFixMe[prop-missing]
        $r(l.next(() => this.map(i)))
      ) : vc(l);
    }
  }
}
class T1 extends pc {
  constructor(i) {
    super(), tt(this, "state", "hasError"), tt(this, "contents", void 0), this.contents = i;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {
  }
  promiseMaybe() {
  }
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(i) {
    return this;
  }
}
class Fg extends pc {
  constructor(i) {
    super(), tt(this, "state", "loading"), tt(this, "contents", void 0), this.contents = i;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {
  }
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {
  }
  map(i) {
    return $r(this.contents.then((l) => {
      const n = i(l);
      if (Vn(n)) {
        const u = n;
        switch (u.state) {
          case "hasValue":
            return u.contents;
          case "hasError":
            throw u.contents;
          case "loading":
            return u.contents;
        }
      }
      return n;
    }).catch((l) => {
      if (Bt(l))
        return l.then(() => this.map(i).contents);
      throw l;
    }));
  }
}
function ao(t) {
  return Object.freeze(new E1(t));
}
function vc(t) {
  return Object.freeze(new T1(t));
}
function $r(t) {
  return Object.freeze(new Fg(t));
}
function Ug() {
  return Object.freeze(new Fg(new Promise(() => {
  })));
}
function A1(t) {
  return t.every((i) => i.state === "hasValue") ? ao(t.map((i) => i.contents)) : t.some((i) => i.state === "hasError") ? vc(Kt(t.find((i) => i.state === "hasError"), "Invalid loadable passed to loadableAll").contents) : $r(Promise.all(t.map((i) => i.contents)));
}
function Bg(t) {
  const l = (Array.isArray(t) ? t : Object.getOwnPropertyNames(t).map((u) => t[u])).map((u) => Vn(u) ? u : Bt(u) ? $r(u) : ao(u)), n = A1(l);
  return Array.isArray(t) ? (
    // $FlowIssue[incompatible-return]
    n
  ) : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    // $FlowIssue[incompatible-call]
    n.map((u) => Object.getOwnPropertyNames(t).reduce(
      // $FlowFixMe[invalid-computed-prop]
      (b, c, p) => ({
        ...b,
        [c]: u[p]
      }),
      {}
    ))
  );
}
function Vn(t) {
  return t instanceof pc;
}
const O1 = {
  of: (t) => Bt(t) ? $r(t) : Vn(t) ? t : ao(t),
  error: (t) => vc(t),
  // $FlowIssue[incompatible-return]
  loading: () => Ug(),
  // $FlowIssue[unclear-type]
  all: Bg,
  isLoadable: Vn
};
var Yr = {
  loadableWithValue: ao,
  loadableWithError: vc,
  loadableWithPromise: $r,
  loadableLoading: Ug,
  loadableAll: Bg,
  isLoadable: Vn,
  RecoilLoadable: O1
}, M1 = Yr.loadableWithValue, D1 = Yr.loadableWithError, L1 = Yr.loadableWithPromise, N1 = Yr.loadableLoading, I1 = Yr.loadableAll, P1 = Yr.isLoadable, j1 = Yr.RecoilLoadable, ro = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  loadableWithValue: M1,
  loadableWithError: D1,
  loadableWithPromise: L1,
  loadableLoading: N1,
  loadableAll: I1,
  isLoadable: P1,
  RecoilLoadable: j1
});
const kd = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  // Note: RECOIL_GKS_ENABLED settings will only be honored in OSS builds of Recoil
  RECOIL_GKS_ENABLED: /* @__PURE__ */ new Set(["recoil_hamt_2020", "recoil_sync_external_store", "recoil_suppress_rerender_in_callback", "recoil_memory_managament_2020"])
};
function F1(t, i) {
  var l, n;
  const u = (l = process.env[t]) === null || l === void 0 || (n = l.toLowerCase()) === null || n === void 0 ? void 0 : n.trim();
  if (u == null || u === "")
    return;
  if (!["true", "false"].includes(u))
    throw Ze(`process.env.${t} value must be 'true', 'false', or empty: ${u}`);
  i(u === "true");
}
function U1(t, i) {
  var l;
  const n = (l = process.env[t]) === null || l === void 0 ? void 0 : l.trim();
  n == null || n === "" || i(n.split(/\s*,\s*|\s+/));
}
function B1() {
  var t;
  typeof process > "u" || ((t = process) === null || t === void 0 ? void 0 : t.env) != null && (F1("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (i) => {
    kd.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = i;
  }), U1("RECOIL_GKS_ENABLED", (i) => {
    i.forEach((l) => {
      kd.RECOIL_GKS_ENABLED.add(l);
    });
  }));
}
B1();
var no = kd;
function gc(t) {
  return no.RECOIL_GKS_ENABLED.has(t);
}
gc.setPass = (t) => {
  no.RECOIL_GKS_ENABLED.add(t);
};
gc.setFail = (t) => {
  no.RECOIL_GKS_ENABLED.delete(t);
};
gc.clear = () => {
  no.RECOIL_GKS_ENABLED.clear();
};
var $t = gc;
function W1(t, i, {
  error: l
} = {}) {
  return process.env.NODE_ENV !== "production" && console.error(t, l), null;
}
var q1 = W1, Ni = q1, zf, Yf, Hf;
const $1 = (
  // flowlint-next-line unclear-type:off
  (zf = vt.createMutableSource) !== null && zf !== void 0 ? zf : vt.unstable_createMutableSource
), Wg = (
  // flowlint-next-line unclear-type:off
  (Yf = vt.useMutableSource) !== null && Yf !== void 0 ? Yf : vt.unstable_useMutableSource
), qd = (
  // flowlint-next-line unclear-type:off
  (Hf = vt.useSyncExternalStore) !== null && Hf !== void 0 ? Hf : (
    // flowlint-next-line unclear-type:off
    vt.unstable_useSyncExternalStore
  )
);
let ev = !1;
function V1() {
  var t;
  const {
    ReactCurrentDispatcher: i,
    ReactCurrentOwner: l
  } = (
    /* $FlowFixMe[prop-missing] This workaround was approved as a safer mechanism
     * to detect if the current renderer supports useSyncExternalStore()
     * https://fb.workplace.com/groups/reactjs/posts/9558682330846963/ */
    vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  ), u = ((t = i == null ? void 0 : i.current) !== null && t !== void 0 ? t : l.currentDispatcher).useSyncExternalStore != null;
  return qd && !u && !ev && (ev = !0, Ni("A React renderer without React 18+ API support is being used with React 18+.")), u;
}
function z1() {
  return $t("recoil_transition_support") ? {
    mode: "TRANSITION_SUPPORT",
    early: !0,
    concurrent: !0
  } : $t("recoil_sync_external_store") && qd != null ? {
    mode: "SYNC_EXTERNAL_STORE",
    early: !0,
    concurrent: !1
  } : $t("recoil_mutable_source") && Wg != null && typeof window < "u" && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE ? $t("recoil_suppress_rerender_in_callback") ? {
    mode: "MUTABLE_SOURCE",
    early: !0,
    concurrent: !0
  } : {
    mode: "MUTABLE_SOURCE",
    early: !1,
    concurrent: !1
  } : $t("recoil_suppress_rerender_in_callback") ? {
    mode: "LEGACY",
    early: !0,
    concurrent: !1
  } : {
    mode: "LEGACY",
    early: !1,
    concurrent: !1
  };
}
var $d = {
  createMutableSource: $1,
  useMutableSource: Wg,
  useSyncExternalStore: qd,
  currentRendererSupportsUseSyncExternalStore: V1,
  reactMode: z1
};
class Vd {
  constructor(i) {
    tt(this, "key", void 0), this.key = i;
  }
  toJSON() {
    return {
      key: this.key
    };
  }
}
class qg extends Vd {
}
class $g extends Vd {
}
function Y1(t) {
  return t instanceof qg || t instanceof $g;
}
var mc = {
  AbstractRecoilValue: Vd,
  RecoilState: qg,
  RecoilValueReadOnly: $g,
  isRecoilValue: Y1
}, H1 = mc.AbstractRecoilValue, G1 = mc.RecoilState, K1 = mc.RecoilValueReadOnly, Q1 = mc.isRecoilValue, Vr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  AbstractRecoilValue: H1,
  RecoilState: G1,
  RecoilValueReadOnly: K1,
  isRecoilValue: Q1
});
function Z1(t, ...i) {
  let l = 0;
  return t.replace(/%s/g, () => String(i[l++]));
}
var J1 = Z1;
function X1(t, ...i) {
  if (process.env.NODE_ENV !== "production") {
    const l = J1.call(null, t, ...i), n = new Error(l);
    n.name = "Expectation Violation", console.error(n);
  }
}
var eR = X1, zd = eR;
function tR(t, i) {
  return function* () {
    let l = 0;
    for (const n of t)
      yield i(n, l++);
  }();
}
var yc = tR;
class Vg {
}
const iR = new Vg(), zn = /* @__PURE__ */ new Map(), Yd = /* @__PURE__ */ new Map();
function lR(t) {
  return yc(t, (i) => Kt(Yd.get(i)));
}
function aR(t) {
  if (zn.has(t)) {
    const i = `Duplicate atom key "${t}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    process.env.NODE_ENV !== "production" ? zd(i, "recoil") : console.warn(i);
  }
}
function rR(t) {
  no.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && aR(t.key), zn.set(t.key, t);
  const i = t.set == null ? new Vr.RecoilValueReadOnly(t.key) : new Vr.RecoilState(t.key);
  return Yd.set(t.key, i), i;
}
class nR extends Error {
}
function sR(t) {
  const i = zn.get(t);
  if (i == null)
    throw new nR(`Missing definition for RecoilValue: "${t}""`);
  return i;
}
function oR(t) {
  return zn.get(t);
}
const ec = /* @__PURE__ */ new Map();
function uR(t) {
  var i;
  if (!$t("recoil_memory_managament_2020"))
    return;
  const l = zn.get(t);
  if (l != null && (i = l.shouldDeleteConfigOnRelease) !== null && i !== void 0 && i.call(l)) {
    var n;
    zn.delete(t), (n = zg(t)) === null || n === void 0 || n(), ec.delete(t);
  }
}
function cR(t, i) {
  $t("recoil_memory_managament_2020") && (i === void 0 ? ec.delete(t) : ec.set(t, i));
}
function zg(t) {
  return ec.get(t);
}
var Yl = {
  recoilValues: Yd,
  registerNode: rR,
  getNode: sR,
  getNodeMaybe: oR,
  deleteNodeConfigIfPossible: uR,
  setConfigDeletionHandler: cR,
  getConfigDeletionHandler: zg,
  recoilValuesForKeys: lR,
  DefaultValue: Vg,
  DEFAULT_VALUE: iR
};
function bR(t, i) {
  i();
}
var fR = {
  enqueueExecution: bR
};
function dR(t, i) {
  return i = { exports: {} }, t(i, i.exports), i.exports;
}
var hR = dR(function(t) {
  var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(W) {
    return typeof W;
  } : function(W) {
    return W && typeof Symbol == "function" && W.constructor === Symbol && W !== Symbol.prototype ? "symbol" : typeof W;
  }, l = {}, n = 5, u = Math.pow(2, n), b = u - 1, c = u / 2, p = u / 4, y = {}, x = function(P) {
    return function() {
      return P;
    };
  }, S = l.hash = function(W) {
    var P = typeof W > "u" ? "undefined" : i(W);
    if (P === "number") return W;
    P !== "string" && (W += "");
    for (var le = 0, ge = 0, he = W.length; ge < he; ++ge) {
      var _e = W.charCodeAt(ge);
      le = (le << 5) - le + _e | 0;
    }
    return le;
  }, C = function(P) {
    return P -= P >> 1 & 1431655765, P = (P & 858993459) + (P >> 2 & 858993459), P = P + (P >> 4) & 252645135, P += P >> 8, P += P >> 16, P & 127;
  }, M = function(P, le) {
    return le >>> P & b;
  }, N = function(P) {
    return 1 << P;
  }, A = function(P, le) {
    return C(P & le - 1);
  }, I = function(P, le, ge, he) {
    var _e = he;
    if (!P) {
      var De = he.length;
      _e = new Array(De);
      for (var Oe = 0; Oe < De; ++Oe)
        _e[Oe] = he[Oe];
    }
    return _e[le] = ge, _e;
  }, g = function(P, le, ge) {
    var he = ge.length - 1, _e = 0, De = 0, Oe = ge;
    if (P)
      _e = De = le;
    else
      for (Oe = new Array(he); _e < le; )
        Oe[De++] = ge[_e++];
    for (++_e; _e <= he; )
      Oe[De++] = ge[_e++];
    return P && (Oe.length = he), Oe;
  }, G = function(P, le, ge, he) {
    var _e = he.length;
    if (P) {
      for (var De = _e; De >= le; )
        he[De--] = he[De];
      return he[le] = ge, he;
    }
    for (var Oe = 0, Ie = 0, Ge = new Array(_e + 1); Oe < le; )
      Ge[Ie++] = he[Oe++];
    for (Ge[le] = ge; Oe < _e; )
      Ge[++Ie] = he[Oe++];
    return Ge;
  }, q = 1, F = 2, ue = 3, R = 4, se = {
    __hamt_isEmpty: !0
  }, $ = function(P) {
    return P === se || P && P.__hamt_isEmpty;
  }, K = function(P, le, ge, he) {
    return {
      type: q,
      edit: P,
      hash: le,
      key: ge,
      value: he,
      _modify: Te
    };
  }, z = function(P, le, ge) {
    return {
      type: F,
      edit: P,
      hash: le,
      children: ge,
      _modify: de
    };
  }, pe = function(P, le, ge) {
    return {
      type: ue,
      edit: P,
      mask: le,
      children: ge,
      _modify: re
    };
  }, Me = function(P, le, ge) {
    return {
      type: R,
      edit: P,
      size: le,
      children: ge,
      _modify: ve
    };
  }, Ye = function(P) {
    return P === se || P.type === q || P.type === F;
  }, Ae = function(P, le, ge, he, _e) {
    for (var De = [], Oe = he, Ie = 0, Ge = 0; Oe; ++Ge)
      Oe & 1 && (De[Ge] = _e[Ie++]), Oe >>>= 1;
    return De[le] = ge, Me(P, Ie + 1, De);
  }, He = function(P, le, ge, he) {
    for (var _e = new Array(le - 1), De = 0, Oe = 0, Ie = 0, Ge = he.length; Ie < Ge; ++Ie)
      if (Ie !== ge) {
        var oe = he[Ie];
        oe && !$(oe) && (_e[De++] = oe, Oe |= 1 << Ie);
      }
    return pe(P, Oe, _e);
  }, bt = function W(P, le, ge, he, _e, De) {
    if (ge === _e) return z(P, ge, [De, he]);
    var Oe = M(le, ge), Ie = M(le, _e);
    return pe(P, N(Oe) | N(Ie), Oe === Ie ? [W(P, le + n, ge, he, _e, De)] : Oe < Ie ? [he, De] : [De, he]);
  }, Ce = function(P, le, ge, he, _e, De, Oe, Ie) {
    for (var Ge = _e.length, oe = 0; oe < Ge; ++oe) {
      var fi = _e[oe];
      if (ge(Oe, fi.key)) {
        var Wt = fi.value, Pt = De(Wt);
        return Pt === Wt ? _e : Pt === y ? (--Ie.value, g(P, oe, _e)) : I(P, oe, K(le, he, Oe, Pt), _e);
      }
    }
    var Dt = De();
    return Dt === y ? _e : (++Ie.value, I(P, Ge, K(le, he, Oe, Dt), _e));
  }, Fe = function(P, le) {
    return P === le.edit;
  }, Te = function(P, le, ge, he, _e, De, Oe) {
    if (le(De, this.key)) {
      var Ie = he(this.value);
      return Ie === this.value ? this : Ie === y ? (--Oe.value, se) : Fe(P, this) ? (this.value = Ie, this) : K(P, _e, De, Ie);
    }
    var Ge = he();
    return Ge === y ? this : (++Oe.value, bt(P, ge, this.hash, this, _e, K(P, _e, De, Ge)));
  }, de = function(P, le, ge, he, _e, De, Oe) {
    if (_e === this.hash) {
      var Ie = Fe(P, this), Ge = Ce(Ie, P, le, this.hash, this.children, he, De, Oe);
      return Ge === this.children ? this : Ge.length > 1 ? z(P, this.hash, Ge) : Ge[0];
    }
    var oe = he();
    return oe === y ? this : (++Oe.value, bt(P, ge, this.hash, this, _e, K(P, _e, De, oe)));
  }, re = function(P, le, ge, he, _e, De, Oe) {
    var Ie = this.mask, Ge = this.children, oe = M(ge, _e), fi = N(oe), Wt = A(Ie, fi), Pt = Ie & fi, Dt = Pt ? Ge[Wt] : se, Ke = Dt._modify(P, le, ge + n, he, _e, De, Oe);
    if (Dt === Ke) return this;
    var Pi = Fe(P, this), ot = Ie, xi = void 0;
    if (Pt && $(Ke)) {
      if (ot &= ~fi, !ot) return se;
      if (Ge.length <= 2 && Ye(Ge[Wt ^ 1])) return Ge[Wt ^ 1];
      xi = g(Pi, Wt, Ge);
    } else if (!Pt && !$(Ke)) {
      if (Ge.length >= c) return Ae(P, oe, Ke, Ie, Ge);
      ot |= fi, xi = G(Pi, Wt, Ke, Ge);
    } else
      xi = I(Pi, Wt, Ke, Ge);
    return Pi ? (this.mask = ot, this.children = xi, this) : pe(P, ot, xi);
  }, ve = function(P, le, ge, he, _e, De, Oe) {
    var Ie = this.size, Ge = this.children, oe = M(ge, _e), fi = Ge[oe], Wt = (fi || se)._modify(P, le, ge + n, he, _e, De, Oe);
    if (fi === Wt) return this;
    var Pt = Fe(P, this), Dt = void 0;
    if ($(fi) && !$(Wt))
      ++Ie, Dt = I(Pt, oe, Wt, Ge);
    else if (!$(fi) && $(Wt)) {
      if (--Ie, Ie <= p) return He(P, Ie, oe, Ge);
      Dt = I(Pt, oe, se, Ge);
    } else
      Dt = I(Pt, oe, Wt, Ge);
    return Pt ? (this.size = Ie, this.children = Dt, this) : Me(P, Ie, Dt);
  };
  se._modify = function(W, P, le, ge, he, _e, De) {
    var Oe = ge();
    return Oe === y ? se : (++De.value, K(W, he, _e, Oe));
  };
  function B(W, P, le, ge, he) {
    this._editable = W, this._edit = P, this._config = le, this._root = ge, this._size = he;
  }
  B.prototype.setTree = function(W, P) {
    return this._editable ? (this._root = W, this._size = P, this) : W === this._root ? this : new B(this._editable, this._edit, this._config, W, P);
  };
  var ne = l.tryGetHash = function(W, P, le, ge) {
    for (var he = ge._root, _e = 0, De = ge._config.keyEq; ; )
      switch (he.type) {
        case q:
          return De(le, he.key) ? he.value : W;
        case F: {
          if (P === he.hash)
            for (var Oe = he.children, Ie = 0, Ge = Oe.length; Ie < Ge; ++Ie) {
              var oe = Oe[Ie];
              if (De(le, oe.key)) return oe.value;
            }
          return W;
        }
        case ue: {
          var fi = M(_e, P), Wt = N(fi);
          if (he.mask & Wt) {
            he = he.children[A(he.mask, Wt)], _e += n;
            break;
          }
          return W;
        }
        case R: {
          if (he = he.children[M(_e, P)], he) {
            _e += n;
            break;
          }
          return W;
        }
        default:
          return W;
      }
  };
  B.prototype.tryGetHash = function(W, P, le) {
    return ne(W, P, le, this);
  };
  var J = l.tryGet = function(W, P, le) {
    return ne(W, le._config.hash(P), P, le);
  };
  B.prototype.tryGet = function(W, P) {
    return J(W, P, this);
  };
  var Z = l.getHash = function(W, P, le) {
    return ne(void 0, W, P, le);
  };
  B.prototype.getHash = function(W, P) {
    return Z(W, P, this);
  }, l.get = function(W, P) {
    return ne(void 0, P._config.hash(W), W, P);
  }, B.prototype.get = function(W, P) {
    return J(P, W, this);
  };
  var ye = l.has = function(W, P, le) {
    return ne(y, W, P, le) !== y;
  };
  B.prototype.hasHash = function(W, P) {
    return ye(W, P, this);
  };
  var je = l.has = function(W, P) {
    return ye(P._config.hash(W), W, P);
  };
  B.prototype.has = function(W) {
    return je(W, this);
  };
  var me = function(P, le) {
    return P === le;
  };
  l.make = function(W) {
    return new B(0, 0, {
      keyEq: W && W.keyEq || me,
      hash: W && W.hash || S
    }, se, 0);
  }, l.empty = l.make();
  var ee = l.isEmpty = function(W) {
    return W && !!$(W._root);
  };
  B.prototype.isEmpty = function() {
    return ee(this);
  };
  var Ee = l.modifyHash = function(W, P, le, ge) {
    var he = {
      value: ge._size
    }, _e = ge._root._modify(ge._editable ? ge._edit : NaN, ge._config.keyEq, 0, W, P, le, he);
    return ge.setTree(_e, he.value);
  };
  B.prototype.modifyHash = function(W, P, le) {
    return Ee(le, W, P, this);
  };
  var Pe = l.modify = function(W, P, le) {
    return Ee(W, le._config.hash(P), P, le);
  };
  B.prototype.modify = function(W, P) {
    return Pe(P, W, this);
  };
  var Ue = l.setHash = function(W, P, le, ge) {
    return Ee(x(le), W, P, ge);
  };
  B.prototype.setHash = function(W, P, le) {
    return Ue(W, P, le, this);
  };
  var St = l.set = function(W, P, le) {
    return Ue(le._config.hash(W), W, P, le);
  };
  B.prototype.set = function(W, P) {
    return St(W, P, this);
  };
  var we = x(y), ce = l.removeHash = function(W, P, le) {
    return Ee(we, W, P, le);
  };
  B.prototype.removeHash = B.prototype.deleteHash = function(W, P) {
    return ce(W, P, this);
  };
  var Be = l.remove = function(W, P) {
    return ce(P._config.hash(W), W, P);
  };
  B.prototype.remove = B.prototype.delete = function(W) {
    return Be(W, this);
  };
  var kt = l.beginMutation = function(W) {
    return new B(W._editable + 1, W._edit + 1, W._config, W._root, W._size);
  };
  B.prototype.beginMutation = function() {
    return kt(this);
  };
  var pi = l.endMutation = function(W) {
    return W._editable = W._editable && W._editable - 1, W;
  };
  B.prototype.endMutation = function() {
    return pi(this);
  };
  var It = l.mutate = function(W, P) {
    var le = kt(P);
    return W(le), pi(le);
  };
  B.prototype.mutate = function(W) {
    return It(W, this);
  };
  var yi = function(P) {
    return P && Ot(P[0], P[1], P[2], P[3], P[4]);
  }, Ot = function(P, le, ge, he, _e) {
    for (; ge < P; ) {
      var De = le[ge++];
      if (De && !$(De)) return Ai(De, he, [P, le, ge, he, _e]);
    }
    return yi(_e);
  }, Ai = function(P, le, ge) {
    switch (P.type) {
      case q:
        return {
          value: le(P),
          rest: ge
        };
      case F:
      case R:
      case ue:
        var he = P.children;
        return Ot(he.length, he, 0, le, ge);
      default:
        return yi(ge);
    }
  }, Hl = {
    done: !0
  };
  function ba(W) {
    this.v = W;
  }
  ba.prototype.next = function() {
    if (!this.v) return Hl;
    var W = this.v;
    return this.v = yi(W.rest), W;
  }, ba.prototype[Symbol.iterator] = function() {
    return this;
  };
  var Ii = function(P, le) {
    return new ba(Ai(P._root, le));
  }, bi = function(P) {
    return [P.key, P.value];
  }, ll = l.entries = function(W) {
    return Ii(W, bi);
  };
  B.prototype.entries = B.prototype[Symbol.iterator] = function() {
    return ll(this);
  };
  var Vi = function(P) {
    return P.key;
  }, al = l.keys = function(W) {
    return Ii(W, Vi);
  };
  B.prototype.keys = function() {
    return al(this);
  };
  var wt = function(P) {
    return P.value;
  }, Gl = l.values = B.prototype.values = function(W) {
    return Ii(W, wt);
  };
  B.prototype.values = function() {
    return Gl(this);
  };
  var Al = l.fold = function(W, P, le) {
    var ge = le._root;
    if (ge.type === q) return W(P, ge.value, ge.key);
    for (var he = [ge.children], _e = void 0; _e = he.pop(); )
      for (var De = 0, Oe = _e.length; De < Oe; ) {
        var Ie = _e[De++];
        Ie && Ie.type && (Ie.type === q ? P = W(P, Ie.value, Ie.key) : he.push(Ie.children));
      }
    return P;
  };
  B.prototype.fold = function(W, P) {
    return Al(W, P, this);
  };
  var hl = l.forEach = function(W, P) {
    return Al(function(le, ge, he) {
      return W(ge, he, P);
    }, null, P);
  };
  B.prototype.forEach = function(W) {
    return hl(W, this);
  };
  var Ol = l.count = function(W) {
    return W._size;
  };
  B.prototype.count = function() {
    return Ol(this);
  }, Object.defineProperty(B.prototype, "size", {
    get: B.prototype.count
  }), t.exports ? t.exports = l : (void 0).hamt = l;
});
class pR {
  constructor(i) {
    tt(this, "_map", void 0), this._map = new Map(i == null ? void 0 : i.entries());
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(i) {
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
  set(i, l) {
    return this._map.set(i, l), this;
  }
  delete(i) {
    return this._map.delete(i), this;
  }
  clone() {
    return Gd(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class Hd {
  // Because hamt.empty is not a function there is no way to introduce type
  // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
  // $FlowIssue
  constructor(i) {
    if (tt(this, "_hamt", hR.empty.beginMutation()), i instanceof Hd) {
      const l = i._hamt.endMutation();
      i._hamt = l.beginMutation(), this._hamt = l.beginMutation();
    } else if (i)
      for (const [l, n] of i.entries())
        this._hamt.set(l, n);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(i) {
    return this._hamt.get(i);
  }
  has(i) {
    return this._hamt.has(i);
  }
  set(i, l) {
    return this._hamt.set(i, l), this;
  }
  delete(i) {
    return this._hamt.delete(i), this;
  }
  clone() {
    return Gd(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function Gd(t) {
  return $t("recoil_hamt_2020") ? new Hd(t) : new pR(t);
}
var vR = {
  persistentMap: Gd
}, gR = vR.persistentMap, mR = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  persistentMap: gR
});
function yR(t, ...i) {
  const l = /* @__PURE__ */ new Set();
  e: for (const n of t) {
    for (const u of i)
      if (u.has(n))
        continue e;
    l.add(n);
  }
  return l;
}
var tv = yR;
function wR(t, i) {
  const l = /* @__PURE__ */ new Map();
  return t.forEach((n, u) => {
    l.set(u, i(n, u));
  }), l;
}
var iv = wR;
function _R() {
  return {
    nodeDeps: /* @__PURE__ */ new Map(),
    nodeToNodeSubscriptions: /* @__PURE__ */ new Map()
  };
}
function xR(t) {
  return {
    nodeDeps: iv(t.nodeDeps, (i) => new Set(i)),
    nodeToNodeSubscriptions: iv(t.nodeToNodeSubscriptions, (i) => new Set(i))
  };
}
function Gf(t, i, l, n) {
  const {
    nodeDeps: u,
    nodeToNodeSubscriptions: b
  } = l, c = u.get(t);
  if (c && n && c !== n.nodeDeps.get(t))
    return;
  u.set(t, i);
  const p = c == null ? i : tv(i, c);
  for (const y of p)
    b.has(y) || b.set(y, /* @__PURE__ */ new Set()), Kt(b.get(y)).add(t);
  if (c) {
    const y = tv(c, i);
    for (const x of y) {
      if (!b.has(x))
        return;
      const S = Kt(b.get(x));
      S.delete(t), S.size === 0 && b.delete(x);
    }
  }
}
function SR(t, i, l, n) {
  var u, b, c, p;
  const y = l.getState();
  n === y.currentTree.version || n === ((u = y.nextTree) === null || u === void 0 ? void 0 : u.version) || n === ((b = y.previousTree) === null || b === void 0 ? void 0 : b.version) || Ni("Tried to save dependencies to a discarded tree");
  const x = l.getGraph(n);
  if (Gf(t, i, x), n === ((c = y.previousTree) === null || c === void 0 ? void 0 : c.version)) {
    const C = l.getGraph(y.currentTree.version);
    Gf(t, i, C, x);
  }
  if (n === ((p = y.previousTree) === null || p === void 0 ? void 0 : p.version) || n === y.currentTree.version) {
    var S;
    const C = (S = y.nextTree) === null || S === void 0 ? void 0 : S.version;
    if (C !== void 0) {
      const M = l.getGraph(C);
      Gf(t, i, M, x);
    }
  }
}
var so = {
  cloneGraph: xR,
  graph: _R,
  saveDepsToStore: SR
};
let kR = 0;
const RR = () => kR++;
let CR = 0;
const ER = () => CR++;
let TR = 0;
const AR = () => TR++;
var wc = {
  getNextTreeStateVersion: RR,
  getNextStoreID: ER,
  getNextComponentID: AR
};
const {
  persistentMap: lv
} = mR, {
  graph: OR
} = so, {
  getNextTreeStateVersion: Yg
} = wc;
function MR() {
  const t = Yg();
  return {
    version: t,
    stateID: t,
    transactionMetadata: {},
    dirtyAtoms: /* @__PURE__ */ new Set(),
    atomValues: lv(),
    nonvalidatedAtoms: lv()
  };
}
function DR() {
  const t = MR();
  return {
    currentTree: t,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: /* @__PURE__ */ new Set(),
    knownSelectors: /* @__PURE__ */ new Set(),
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(t.version, OR()),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    nodeCleanupFunctions: /* @__PURE__ */ new Map()
  };
}
var Hg = {
  makeEmptyStoreState: DR,
  getNextTreeStateVersion: Yg
};
class LR {
}
var Kd = {
  RetentionZone: LR
};
function NR(t, i) {
  const l = new Set(t);
  return l.add(i), l;
}
var IR = {
  setByAddingToSet: NR
};
function* PR(t, i) {
  let l = 0;
  for (const n of t)
    i(n, l++) && (yield n);
}
var Qd = PR;
function jR(t, i) {
  return new Proxy(t, {
    // Compute and cache lazy property if not already done.
    get: (n, u) => (!(u in n) && u in i && (n[u] = i[u]()), n[u]),
    // This method allows user to iterate keys as normal
    ownKeys: (n) => Object.keys(n)
  });
}
var Gg = jR;
const {
  getNode: oo,
  getNodeMaybe: FR,
  recoilValuesForKeys: av
} = Yl, {
  RetentionZone: rv
} = Kd, {
  setByAddingToSet: UR
} = IR, BR = Object.freeze(/* @__PURE__ */ new Set());
class WR extends Error {
}
function qR(t, i, l) {
  if (!$t("recoil_memory_managament_2020"))
    return () => {
    };
  const {
    nodesRetainedByZone: n
  } = t.getState().retention;
  function u(b) {
    let c = n.get(b);
    c || n.set(b, c = /* @__PURE__ */ new Set()), c.add(i);
  }
  if (l instanceof rv)
    u(l);
  else if (Array.isArray(l))
    for (const b of l)
      u(b);
  return () => {
    if (!$t("recoil_memory_managament_2020"))
      return;
    const {
      retention: b
    } = t.getState();
    function c(p) {
      const y = b.nodesRetainedByZone.get(p);
      y == null || y.delete(i), y && y.size === 0 && b.nodesRetainedByZone.delete(p);
    }
    if (l instanceof rv)
      c(l);
    else if (Array.isArray(l))
      for (const p of l)
        c(p);
  };
}
function Zd(t, i, l, n) {
  const u = t.getState();
  if (u.nodeCleanupFunctions.has(l))
    return;
  const b = oo(l), c = qR(t, l, b.retainedBy), p = b.init(t, i, n);
  u.nodeCleanupFunctions.set(l, () => {
    p(), c();
  });
}
function $R(t, i, l) {
  Zd(t, t.getState().currentTree, i, l);
}
function VR(t, i) {
  var l;
  const n = t.getState();
  (l = n.nodeCleanupFunctions.get(i)) === null || l === void 0 || l(), n.nodeCleanupFunctions.delete(i);
}
function zR(t, i, l) {
  return Zd(t, i, l, "get"), oo(l).get(t, i);
}
function Kg(t, i, l) {
  return oo(l).peek(t, i);
}
function YR(t, i, l) {
  var n;
  const u = FR(i);
  return u == null || (n = u.invalidate) === null || n === void 0 || n.call(u, t), {
    ...t,
    atomValues: t.atomValues.clone().delete(i),
    nonvalidatedAtoms: t.nonvalidatedAtoms.clone().set(i, l),
    dirtyAtoms: UR(t.dirtyAtoms, i)
  };
}
function HR(t, i, l, n) {
  const u = oo(l);
  if (u.set == null)
    throw new WR(`Attempt to set read-only RecoilValue: ${l}`);
  const b = u.set;
  return Zd(t, i, l, "set"), b(t, i, n);
}
function GR(t, i, l) {
  const n = t.getState(), u = t.getGraph(i.version), b = oo(l).nodeType;
  return Gg({
    type: b
  }, {
    // $FlowFixMe[underconstrained-implicit-instantiation]
    loadable: () => Kg(t, i, l),
    isActive: () => n.knownAtoms.has(l) || n.knownSelectors.has(l),
    isSet: () => b === "selector" ? !1 : i.atomValues.has(l),
    isModified: () => i.dirtyAtoms.has(l),
    // Report current dependencies.  If the node hasn't been evaluated, then
    // dependencies may be missing based on the current state.
    deps: () => {
      var c;
      return av((c = u.nodeDeps.get(l)) !== null && c !== void 0 ? c : []);
    },
    // Reports all "current" subscribers.  Evaluating other nodes or
    // previous in-progress async evaluations may introduce new subscribers.
    subscribers: () => {
      var c, p;
      return {
        nodes: av(Qd(Qg(t, i, /* @__PURE__ */ new Set([l])), (y) => y !== l)),
        components: yc((c = (p = n.nodeToComponentSubscriptions.get(l)) === null || p === void 0 ? void 0 : p.values()) !== null && c !== void 0 ? c : [], ([y]) => ({
          name: y
        }))
      };
    }
  });
}
function Qg(t, i, l) {
  const n = /* @__PURE__ */ new Set(), u = Array.from(l), b = t.getGraph(i.version);
  for (let p = u.pop(); p; p = u.pop()) {
    var c;
    n.add(p);
    const y = (c = b.nodeToNodeSubscriptions.get(p)) !== null && c !== void 0 ? c : BR;
    for (const x of y)
      n.has(x) || u.push(x);
  }
  return n;
}
var Hr = {
  getNodeLoadable: zR,
  peekNodeLoadable: Kg,
  setNodeValue: HR,
  initializeNode: $R,
  cleanUpNode: VR,
  setUnvalidatedAtomValue_DEPRECATED: YR,
  peekNodeInfo: GR,
  getDownstreamNodes: Qg
};
let Zg = null;
function KR(t) {
  Zg = t;
}
function QR() {
  var t;
  (t = Zg) === null || t === void 0 || t();
}
var Jg = {
  setInvalidateMemoizedSnapshot: KR,
  invalidateMemoizedSnapshot: QR
};
const {
  getDownstreamNodes: ZR,
  getNodeLoadable: Xg,
  setNodeValue: JR
} = Hr, {
  getNextComponentID: XR
} = wc, {
  getNode: eC,
  getNodeMaybe: em
} = Yl, {
  DefaultValue: Jd
} = Yl, {
  reactMode: tC
} = $d, {
  AbstractRecoilValue: iC,
  RecoilState: gM,
  RecoilValueReadOnly: mM,
  isRecoilValue: yM
} = Vr, {
  invalidateMemoizedSnapshot: lC
} = Jg;
function aC(t, {
  key: i
}, l = t.getState().currentTree) {
  var n, u;
  const b = t.getState();
  l.version === b.currentTree.version || l.version === ((n = b.nextTree) === null || n === void 0 ? void 0 : n.version) || l.version === ((u = b.previousTree) === null || u === void 0 ? void 0 : u.version) || Ni("Tried to read from a discarded tree");
  const c = Xg(t, l, i);
  return c.state === "loading" && c.contents.catch(() => {
  }), c;
}
function rC(t, i) {
  const l = t.clone();
  return i.forEach((n, u) => {
    n.state === "hasValue" && n.contents instanceof Jd ? l.delete(u) : l.set(u, n);
  }), l;
}
function nC(t, i, {
  key: l
}, n) {
  if (typeof n == "function") {
    const u = Xg(t, i, l);
    if (u.state === "loading") {
      const b = `Tried to set atom or selector "${l}" using an updater function while the current state is pending, this is not currently supported.`;
      throw Ni(b), Ze(b);
    } else if (u.state === "hasError")
      throw u.contents;
    return n(u.contents);
  } else
    return n;
}
function sC(t, i, l) {
  if (l.type === "set") {
    const {
      recoilValue: u,
      valueOrUpdater: b
    } = l, c = nC(t, i, u, b), p = JR(t, i, u.key, c);
    for (const [y, x] of p.entries())
      Rd(i, y, x);
  } else if (l.type === "setLoadable") {
    const {
      recoilValue: {
        key: u
      },
      loadable: b
    } = l;
    Rd(i, u, b);
  } else if (l.type === "markModified") {
    const {
      recoilValue: {
        key: u
      }
    } = l;
    i.dirtyAtoms.add(u);
  } else if (l.type === "setUnvalidated") {
    var n;
    const {
      recoilValue: {
        key: u
      },
      unvalidatedValue: b
    } = l, c = em(u);
    c == null || (n = c.invalidate) === null || n === void 0 || n.call(c, i), i.atomValues.delete(u), i.nonvalidatedAtoms.set(u, b), i.dirtyAtoms.add(u);
  } else
    Ni(`Unknown action ${l.type}`);
}
function Rd(t, i, l) {
  l.state === "hasValue" && l.contents instanceof Jd ? t.atomValues.delete(i) : t.atomValues.set(i, l), t.dirtyAtoms.add(i), t.nonvalidatedAtoms.delete(i);
}
function tm(t, i) {
  t.replaceState((l) => {
    const n = im(l);
    for (const u of i)
      sC(t, n, u);
    return lm(t, n), lC(), n;
  });
}
function _c(t, i) {
  if ($s.length) {
    const l = $s[$s.length - 1];
    let n = l.get(t);
    n || l.set(t, n = []), n.push(i);
  } else
    tm(t, [i]);
}
const $s = [];
function oC() {
  const t = /* @__PURE__ */ new Map();
  return $s.push(t), () => {
    for (const [l, n] of t)
      tm(l, n);
    $s.pop() !== t && Ni("Incorrect order of batch popping");
  };
}
function im(t) {
  return {
    ...t,
    atomValues: t.atomValues.clone(),
    nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(t.dirtyAtoms)
  };
}
function lm(t, i) {
  const l = ZR(t, i, i.dirtyAtoms);
  for (const b of l) {
    var n, u;
    (n = em(b)) === null || n === void 0 || (u = n.invalidate) === null || u === void 0 || u.call(n, i);
  }
}
function am(t, i, l) {
  _c(t, {
    type: "set",
    recoilValue: i,
    valueOrUpdater: l
  });
}
function uC(t, i, l) {
  if (l instanceof Jd)
    return am(t, i, l);
  _c(t, {
    type: "setLoadable",
    recoilValue: i,
    loadable: l
  });
}
function cC(t, i) {
  _c(t, {
    type: "markModified",
    recoilValue: i
  });
}
function bC(t, i, l) {
  _c(t, {
    type: "setUnvalidated",
    recoilValue: i,
    unvalidatedValue: l
  });
}
function fC(t, {
  key: i
}, l, n = null) {
  const u = XR(), b = t.getState();
  b.nodeToComponentSubscriptions.has(i) || b.nodeToComponentSubscriptions.set(i, /* @__PURE__ */ new Map()), Kt(b.nodeToComponentSubscriptions.get(i)).set(u, [n ?? "<not captured>", l]);
  const c = tC();
  if (c.early && (c.mode === "LEGACY" || c.mode === "MUTABLE_SOURCE")) {
    const p = t.getState().nextTree;
    p && p.dirtyAtoms.has(i) && l(p);
  }
  return {
    release: () => {
      const p = t.getState(), y = p.nodeToComponentSubscriptions.get(i);
      if (y === void 0 || !y.has(u)) {
        Ni(`Subscription missing at release time for atom ${i}. This is a bug in Recoil.`);
        return;
      }
      y.delete(u), y.size === 0 && p.nodeToComponentSubscriptions.delete(i);
    }
  };
}
function dC(t, i) {
  var l;
  const {
    currentTree: n
  } = t.getState(), u = eC(i.key);
  (l = u.clearCache) === null || l === void 0 || l.call(u, t, n);
}
var Oa = {
  AbstractRecoilValue: iC,
  getRecoilValueAsLoadable: aC,
  setRecoilValue: am,
  setRecoilValueLoadable: uC,
  markRecoilValueModified: cC,
  setUnvalidatedRecoilValue: bC,
  subscribeToRecoilValue: fC,
  applyAtomValueWrites: rC,
  // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
  batchStart: oC,
  writeLoadableToTreeState: Rd,
  invalidateDownstreams: lm,
  copyTreeState: im,
  refreshRecoilValue: dC
};
function hC(t, i, l) {
  const n = t.entries();
  let u = n.next();
  for (; !u.done; ) {
    const b = u.value;
    if (i.call(l, b[1], b[0], t))
      return !0;
    u = n.next();
  }
  return !1;
}
var pC = hC;
const {
  cleanUpNode: vC
} = Hr, {
  deleteNodeConfigIfPossible: gC,
  getNode: rm
} = Yl, {
  RetentionZone: nm
} = Kd, mC = 12e4, sm = /* @__PURE__ */ new Set();
function om(t, i) {
  const l = t.getState(), n = l.currentTree;
  if (l.nextTree) {
    Ni("releaseNodesNowOnCurrentTree should only be called at the end of a batch");
    return;
  }
  const u = /* @__PURE__ */ new Set();
  for (const c of i)
    if (c instanceof nm)
      for (const p of xC(l, c))
        u.add(p);
    else
      u.add(c);
  const b = yC(t, u);
  for (const c of b)
    _C(t, n, c);
}
function yC(t, i) {
  const l = t.getState(), n = l.currentTree, u = t.getGraph(n.version), b = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  return p(i), b;
  function p(y) {
    const x = /* @__PURE__ */ new Set(), S = wC(
      t,
      n,
      y,
      b,
      // don't descend into these
      c
      // don't descend into these
    );
    for (const A of S) {
      var C;
      if (rm(A).retainedBy === "recoilRoot") {
        c.add(A);
        continue;
      }
      if (((C = l.retention.referenceCounts.get(A)) !== null && C !== void 0 ? C : 0) > 0) {
        c.add(A);
        continue;
      }
      if (um(A).some((g) => l.retention.referenceCounts.get(g))) {
        c.add(A);
        continue;
      }
      const I = u.nodeToNodeSubscriptions.get(A);
      if (I && pC(I, (g) => c.has(g))) {
        c.add(A);
        continue;
      }
      b.add(A), x.add(A);
    }
    const M = /* @__PURE__ */ new Set();
    for (const A of x)
      for (const I of (N = u.nodeDeps.get(A)) !== null && N !== void 0 ? N : sm) {
        var N;
        b.has(I) || M.add(I);
      }
    M.size && p(M);
  }
}
function wC(t, i, l, n, u) {
  const b = t.getGraph(i.version), c = [], p = /* @__PURE__ */ new Set();
  for (; l.size > 0; )
    y(Kt(l.values().next().value));
  return c;
  function y(x) {
    if (n.has(x) || u.has(x)) {
      l.delete(x);
      return;
    }
    if (p.has(x))
      return;
    const S = b.nodeToNodeSubscriptions.get(x);
    if (S)
      for (const C of S)
        y(C);
    p.add(x), l.delete(x), c.push(x);
  }
}
function _C(t, i, l) {
  if (!$t("recoil_memory_managament_2020"))
    return;
  vC(t, l);
  const n = t.getState();
  n.knownAtoms.delete(l), n.knownSelectors.delete(l), n.nodeTransactionSubscriptions.delete(l), n.retention.referenceCounts.delete(l);
  const u = um(l);
  for (const y of u) {
    var b;
    (b = n.retention.nodesRetainedByZone.get(y)) === null || b === void 0 || b.delete(l);
  }
  i.atomValues.delete(l), i.dirtyAtoms.delete(l), i.nonvalidatedAtoms.delete(l);
  const c = n.graphsByVersion.get(i.version);
  if (c) {
    const y = c.nodeDeps.get(l);
    if (y !== void 0) {
      c.nodeDeps.delete(l);
      for (const x of y) {
        var p;
        (p = c.nodeToNodeSubscriptions.get(x)) === null || p === void 0 || p.delete(l);
      }
    }
    c.nodeToNodeSubscriptions.delete(l);
  }
  gC(l);
}
function xC(t, i) {
  var l;
  return (l = t.retention.nodesRetainedByZone.get(i)) !== null && l !== void 0 ? l : sm;
}
function um(t) {
  const i = rm(t).retainedBy;
  return i === void 0 || i === "components" || i === "recoilRoot" ? [] : i instanceof nm ? [i] : i;
}
function SC(t, i) {
  const l = t.getState();
  l.nextTree ? l.retention.retainablesToCheckForRelease.add(i) : om(t, /* @__PURE__ */ new Set([i]));
}
function kC(t, i, l) {
  var n;
  if (!$t("recoil_memory_managament_2020"))
    return;
  const u = t.getState().retention.referenceCounts, b = ((n = u.get(i)) !== null && n !== void 0 ? n : 0) + l;
  b === 0 ? RC(t, i) : u.set(i, b);
}
function RC(t, i) {
  if (!$t("recoil_memory_managament_2020"))
    return;
  t.getState().retention.referenceCounts.delete(i), SC(t, i);
}
function CC(t) {
  if (!$t("recoil_memory_managament_2020"))
    return;
  const i = t.getState();
  om(t, i.retention.retainablesToCheckForRelease), i.retention.retainablesToCheckForRelease.clear();
}
function EC(t) {
  return t === void 0 ? "recoilRoot" : t;
}
var Zn = {
  SUSPENSE_TIMEOUT_MS: mC,
  updateRetainCount: kC,
  releaseScheduledRetainablesNow: CC,
  retainedByOptionWithDefault: EC
};
const {
  unstable_batchedUpdates: TC
} = uS;
var AC = {
  unstable_batchedUpdates: TC
};
const {
  unstable_batchedUpdates: OC
} = AC;
var MC = {
  unstable_batchedUpdates: OC
};
const {
  batchStart: DC
} = Oa, {
  unstable_batchedUpdates: LC
} = MC;
let NC = LC || ((t) => t());
const IC = (t) => {
  NC(() => {
    let i = () => {
    };
    try {
      i = DC(), t();
    } finally {
      i();
    }
  });
};
var Xd = {
  batchUpdates: IC
};
function* PC(t) {
  for (const i of t)
    for (const l of i)
      yield l;
}
var cm = PC;
const bm = (
  // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  typeof Window > "u" || typeof window > "u"
), jC = (t) => !bm && // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
(t === window || t instanceof Window), FC = typeof navigator < "u" && navigator.product === "ReactNative";
var xc = {
  isSSR: bm,
  isReactNative: FC,
  isWindow: jC
};
function UC(t, i) {
  let l, n;
  return [(...c) => {
    const p = i(...c);
    return l === p || (l = p, n = t(...c)), n;
  }, () => {
    l = null;
  }];
}
var BC = {
  memoizeOneWithArgsHashAndInvalidation: UC
};
const {
  batchUpdates: Cd
} = Xd, {
  initializeNode: WC,
  peekNodeInfo: qC
} = Hr, {
  graph: $C
} = so, {
  getNextStoreID: VC
} = wc, {
  DEFAULT_VALUE: zC,
  recoilValues: nv,
  recoilValuesForKeys: sv
} = Yl, {
  AbstractRecoilValue: YC,
  getRecoilValueAsLoadable: HC,
  setRecoilValue: ov,
  setUnvalidatedRecoilValue: GC
} = Oa, {
  updateRetainCount: Yu
} = Zn, {
  setInvalidateMemoizedSnapshot: KC
} = Jg, {
  getNextTreeStateVersion: QC,
  makeEmptyStoreState: ZC
} = Hg, {
  isSSR: JC
} = xc, {
  memoizeOneWithArgsHashAndInvalidation: XC
} = BC, eE = `
Recoil Snapshots only last for the duration of the callback they are provided to. To keep a Snapshot longer, do this:

  const release = snapshot.retain();
  try {
    await doSomethingWithSnapshot(snapshot);
  } finally {
    release();
  }

This is currently a DEV-only warning but will become a thrown exception in the next release of Recoil.
`;
class Sc {
  // eslint-disable-next-line fb-www/no-uninitialized-properties
  constructor(i, l) {
    tt(this, "_store", void 0), tt(this, "_refCount", 1), tt(this, "getLoadable", (n) => (this.checkRefCount_INTERNAL(), HC(this._store, n))), tt(this, "getPromise", (n) => (this.checkRefCount_INTERNAL(), this.getLoadable(n).toPromise())), tt(this, "getNodes_UNSTABLE", (n) => {
      if (this.checkRefCount_INTERNAL(), (n == null ? void 0 : n.isModified) === !0) {
        if ((n == null ? void 0 : n.isInitialized) === !1)
          return [];
        const c = this._store.getState().currentTree;
        return sv(c.dirtyAtoms);
      }
      const u = this._store.getState().knownAtoms, b = this._store.getState().knownSelectors;
      return (n == null ? void 0 : n.isInitialized) == null ? nv.values() : n.isInitialized === !0 ? sv(cm([u, b])) : Qd(nv.values(), ({
        key: c
      }) => !u.has(c) && !b.has(c));
    }), tt(this, "getInfo_UNSTABLE", ({
      key: n
    }) => (this.checkRefCount_INTERNAL(), qC(this._store, this._store.getState().currentTree, n))), tt(this, "map", (n) => {
      this.checkRefCount_INTERNAL();
      const u = new Ed(this, Cd);
      return n(u), u;
    }), tt(this, "asyncMap", async (n) => {
      this.checkRefCount_INTERNAL();
      const u = new Ed(this, Cd);
      return u.retain(), await n(u), u.autoRelease_INTERNAL(), u;
    }), this._store = {
      storeID: VC(),
      parentStoreID: l,
      getState: () => i,
      replaceState: (n) => {
        i.currentTree = n(i.currentTree);
      },
      getGraph: (n) => {
        const u = i.graphsByVersion;
        if (u.has(n))
          return Kt(u.get(n));
        const b = $C();
        return u.set(n, b), b;
      },
      subscribeToTransactions: () => ({
        release: () => {
        }
      }),
      addTransactionMetadata: () => {
        throw Ze("Cannot subscribe to Snapshots");
      }
    };
    for (const n of this._store.getState().knownAtoms)
      WC(this._store, n, "get"), Yu(this._store, n, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    if (this._refCount <= 0) {
      if (process.env.NODE_ENV !== "production")
        throw Ze("Snapshot has already been released.");
      Ni("Attempt to retain() Snapshot that was already released.");
    }
    this._refCount++;
    let i = !1;
    return () => {
      i || (i = !0, this._release());
    };
  }
  /**
   * Release the snapshot on the next tick.  This means the snapshot is retained
   * during the execution of the current function using it.
   */
  autoRelease_INTERNAL() {
    JC || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if (this._refCount--, this._refCount === 0) {
      if (this._store.getState().nodeCleanupFunctions.forEach((i) => i()), this._store.getState().nodeCleanupFunctions.clear(), !$t("recoil_memory_managament_2020"))
        return;
    } else this._refCount < 0 && process.env.NODE_ENV !== "production" && Ni("Snapshot released an extra time.");
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    $t("recoil_memory_managament_2020") && this._refCount <= 0 && process.env.NODE_ENV !== "production" && Ni(eE);
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID;
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
  // We want to allow the methods to be destructured and used as accessors
  /* eslint-disable fb-www/extra-arrow-initializer */
  /* eslint-enable fb-www/extra-arrow-initializer */
}
function fm(t, i, l = !1) {
  const n = t.getState(), u = l ? QC() : i.version;
  return {
    // Always clone the TreeState to isolate stores from accidental mutations.
    // For example, reading a selector from a cloned snapshot shouldn't cache
    // in the original treestate which may cause the original to skip
    // initialization of upstream atoms.
    currentTree: {
      // TODO snapshots shouldn't really have versions because a new version number
      // is always assigned when the snapshot is gone to.
      version: l ? u : i.version,
      stateID: l ? u : i.stateID,
      transactionMetadata: {
        ...i.transactionMetadata
      },
      dirtyAtoms: new Set(i.dirtyAtoms),
      atomValues: i.atomValues.clone(),
      nonvalidatedAtoms: i.nonvalidatedAtoms.clone()
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(n.knownAtoms),
    // FIXME here's a copy
    knownSelectors: new Set(n.knownSelectors),
    // FIXME here's a copy
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(u, t.getGraph(i.version)),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    // FIXME here's a copy
    // Create blank cleanup handlers for atoms so snapshots don't re-run
    // atom effects.
    nodeCleanupFunctions: new Map(yc(n.nodeCleanupFunctions.entries(), ([b]) => [b, () => {
    }]))
  };
}
function tE(t) {
  const i = new Sc(ZC());
  return t != null ? i.map(t) : i;
}
const [uv, dm] = XC(
  // $FlowFixMe[missing-local-annot]
  (t, i) => {
    var l;
    const n = t.getState(), u = i === "latest" ? (l = n.nextTree) !== null && l !== void 0 ? l : n.currentTree : Kt(n.previousTree);
    return new Sc(fm(t, u), t.storeID);
  },
  (t, i) => {
    var l, n;
    return String(i) + String(t.storeID) + String((l = t.getState().nextTree) === null || l === void 0 ? void 0 : l.version) + String(t.getState().currentTree.version) + String((n = t.getState().previousTree) === null || n === void 0 ? void 0 : n.version);
  }
);
KC(dm);
function iE(t, i = "latest") {
  const l = uv(t, i);
  return l.isRetained() ? l : (dm(), uv(t, i));
}
class Ed extends Sc {
  constructor(i, l) {
    super(fm(i.getStore_INTERNAL(), i.getStore_INTERNAL().getState().currentTree, !0), i.getStoreID()), tt(this, "_batch", void 0), tt(this, "set", (n, u) => {
      this.checkRefCount_INTERNAL();
      const b = this.getStore_INTERNAL();
      this._batch(() => {
        Yu(b, n.key, 1), ov(this.getStore_INTERNAL(), n, u);
      });
    }), tt(this, "reset", (n) => {
      this.checkRefCount_INTERNAL();
      const u = this.getStore_INTERNAL();
      this._batch(() => {
        Yu(u, n.key, 1), ov(this.getStore_INTERNAL(), n, zC);
      });
    }), tt(this, "setUnvalidatedAtomValues_DEPRECATED", (n) => {
      this.checkRefCount_INTERNAL();
      const u = this.getStore_INTERNAL();
      Cd(() => {
        for (const [b, c] of n.entries())
          Yu(u, b, 1), GC(u, new YC(b), c);
      });
    }), this._batch = l;
  }
}
var kc = {
  Snapshot: Sc,
  MutableSnapshot: Ed,
  freshSnapshot: tE,
  cloneSnapshot: iE
}, lE = kc.Snapshot, aE = kc.MutableSnapshot, rE = kc.freshSnapshot, nE = kc.cloneSnapshot, Rc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Snapshot: lE,
  MutableSnapshot: aE,
  freshSnapshot: rE,
  cloneSnapshot: nE
});
function sE(...t) {
  const i = /* @__PURE__ */ new Set();
  for (const l of t)
    for (const n of l)
      i.add(n);
  return i;
}
var oE = sE;
const {
  useRef: uE
} = vt;
function cE(t) {
  const i = uE(t);
  return i.current === t && typeof t == "function" && (i.current = t()), i;
}
var cv = cE;
const {
  getNextTreeStateVersion: bE,
  makeEmptyStoreState: hm
} = Hg, {
  cleanUpNode: fE,
  getDownstreamNodes: dE,
  initializeNode: hE,
  setNodeValue: pE,
  setUnvalidatedAtomValue_DEPRECATED: vE
} = Hr, {
  graph: gE
} = so, {
  cloneGraph: mE
} = so, {
  getNextStoreID: pm
} = wc, {
  createMutableSource: Kf,
  reactMode: vm
} = $d, {
  applyAtomValueWrites: yE
} = Oa, {
  releaseScheduledRetainablesNow: gm
} = Zn, {
  freshSnapshot: wE
} = Rc, {
  useCallback: _E,
  useContext: mm,
  useEffect: Td,
  useMemo: xE,
  useRef: SE,
  useState: kE
} = vt;
function Ps() {
  throw Ze("This component must be used inside a <RecoilRoot> component.");
}
const ym = Object.freeze({
  storeID: pm(),
  getState: Ps,
  replaceState: Ps,
  getGraph: Ps,
  subscribeToTransactions: Ps,
  addTransactionMetadata: Ps
});
let Ad = !1;
function bv(t) {
  if (Ad)
    throw Ze("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
  const i = t.getState();
  if (i.nextTree === null) {
    $t("recoil_memory_managament_2020") && $t("recoil_release_on_cascading_update_killswitch_2021") && i.commitDepth > 0 && gm(t);
    const l = i.currentTree.version, n = bE();
    i.nextTree = {
      ...i.currentTree,
      version: n,
      stateID: n,
      dirtyAtoms: /* @__PURE__ */ new Set(),
      transactionMetadata: {}
    }, i.graphsByVersion.set(n, mE(Kt(i.graphsByVersion.get(l))));
  }
}
const wm = vt.createContext({
  current: ym
}), eh = () => mm(wm), _m = vt.createContext(null);
function RE() {
  const t = mm(_m);
  return t == null && zd("Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."), t;
}
function xm(t, i, l) {
  const n = dE(t, l, l.dirtyAtoms);
  for (const u of n) {
    const b = i.nodeToComponentSubscriptions.get(u);
    if (b)
      for (const [c, [p, y]] of b)
        y(l);
  }
}
function CE(t) {
  const i = t.getState(), l = i.currentTree, n = l.dirtyAtoms;
  if (n.size) {
    for (const [u, b] of i.nodeTransactionSubscriptions)
      if (n.has(u))
        for (const [c, p] of b)
          p(t);
    for (const [u, b] of i.transactionSubscriptions)
      b(t);
    (!vm().early || i.suspendedComponentResolvers.size > 0) && (xm(t, i, l), i.suspendedComponentResolvers.forEach((u) => u()), i.suspendedComponentResolvers.clear());
  }
  i.queuedComponentCallbacks_DEPRECATED.forEach((u) => u(l)), i.queuedComponentCallbacks_DEPRECATED.splice(0, i.queuedComponentCallbacks_DEPRECATED.length);
}
function EE(t) {
  const i = t.getState();
  i.commitDepth++;
  try {
    const {
      nextTree: l
    } = i;
    if (l == null)
      return;
    i.previousTree = i.currentTree, i.currentTree = l, i.nextTree = null, CE(t), i.previousTree != null ? i.graphsByVersion.delete(i.previousTree.version) : Ni("Ended batch with no previous state, which is unexpected", "recoil"), i.previousTree = null, $t("recoil_memory_managament_2020") && l == null && gm(t);
  } finally {
    i.commitDepth--;
  }
}
function TE({
  setNotifyBatcherOfChange: t
}) {
  const i = eh(), [, l] = kE([]);
  return t(() => l({})), Td(() => (t(() => l({})), () => {
    t(() => {
    });
  }), [t]), Td(() => {
    fR.enqueueExecution("Batcher", () => {
      EE(i.current);
    });
  }), null;
}
process.env.NODE_ENV !== "production" && typeof window < "u" && !window.$recoilDebugStates && (window.$recoilDebugStates = []);
function AE(t, i) {
  const l = hm();
  return i({
    set: (n, u) => {
      const b = l.currentTree, c = pE(t, b, n.key, u), p = new Set(c.keys()), y = b.nonvalidatedAtoms.clone();
      for (const x of p)
        y.delete(x);
      l.currentTree = {
        ...b,
        dirtyAtoms: oE(b.dirtyAtoms, p),
        atomValues: yE(b.atomValues, c),
        // NB: PLEASE un-export applyAtomValueWrites when deleting this code
        nonvalidatedAtoms: y
      };
    },
    setUnvalidatedAtomValues: (n) => {
      n.forEach((u, b) => {
        l.currentTree = vE(l.currentTree, b, u);
      });
    }
  }), l;
}
function OE(t) {
  const i = wE(t), l = i.getStore_INTERNAL().getState();
  return i.retain(), l.nodeCleanupFunctions.forEach((n) => n()), l.nodeCleanupFunctions.clear(), l;
}
let fv = 0;
function ME({
  initializeState_DEPRECATED: t,
  initializeState: i,
  store_INTERNAL: l,
  // For use with React "context bridging"
  children: n
}) {
  let u;
  const b = (N) => {
    const A = u.current.graphsByVersion;
    if (A.has(N))
      return Kt(A.get(N));
    const I = gE();
    return A.set(N, I), I;
  }, c = (N, A) => {
    if (A == null) {
      const {
        transactionSubscriptions: I
      } = C.current.getState(), g = fv++;
      return I.set(g, N), {
        release: () => {
          I.delete(g);
        }
      };
    } else {
      const {
        nodeTransactionSubscriptions: I
      } = C.current.getState();
      I.has(A) || I.set(A, /* @__PURE__ */ new Map());
      const g = fv++;
      return Kt(I.get(A)).set(g, N), {
        release: () => {
          const G = I.get(A);
          G && (G.delete(g), G.size === 0 && I.delete(A));
        }
      };
    }
  }, p = (N) => {
    bv(C.current);
    for (const A of Object.keys(N))
      Kt(C.current.getState().nextTree).transactionMetadata[A] = N[A];
  }, y = (N) => {
    bv(C.current);
    const A = Kt(u.current.nextTree);
    let I;
    try {
      Ad = !0, I = N(A);
    } finally {
      Ad = !1;
    }
    I !== A && (process.env.NODE_ENV !== "production" && typeof window < "u" && window.$recoilDebugStates.push(I), u.current.nextTree = I, vm().early && xm(C.current, u.current, I), Kt(x.current)());
  }, x = SE(null), S = _E((N) => {
    x.current = N;
  }, [x]), C = cv(() => l ?? {
    storeID: pm(),
    getState: () => u.current,
    replaceState: y,
    getGraph: b,
    subscribeToTransactions: c,
    addTransactionMetadata: p
  });
  l != null && (C.current = l), u = cv(() => t != null ? AE(C.current, t) : i != null ? OE(i) : hm());
  const M = xE(() => Kf == null ? void 0 : Kf(u, () => u.current.currentTree.version), [u]);
  return Td(() => {
    const N = C.current;
    for (const A of new Set(N.getState().knownAtoms))
      hE(N, A, "get");
    return () => {
      for (const A of N.getState().knownAtoms)
        fE(N, A);
    };
  }, [C]), /* @__PURE__ */ vt.createElement(wm.Provider, {
    value: C
  }, /* @__PURE__ */ vt.createElement(_m.Provider, {
    value: M
  }, /* @__PURE__ */ vt.createElement(TE, {
    setNotifyBatcherOfChange: S
  }), n));
}
function DE(t) {
  const {
    override: i,
    ...l
  } = t, n = eh();
  return i === !1 && n.current !== ym ? t.children : /* @__PURE__ */ vt.createElement(ME, l);
}
var th = {
  RecoilRoot: DE,
  useStoreRef: eh,
  useRecoilMutableSource: RE
};
function LE(t, i) {
  if (t === i)
    return !0;
  if (t.length !== i.length)
    return !1;
  for (let l = 0, n = t.length; l < n; l++)
    if (t[l] !== i[l])
      return !1;
  return !0;
}
var NE = LE;
const {
  useEffect: IE,
  useRef: PE
} = vt;
function jE(t) {
  const i = PE();
  return IE(() => {
    i.current = t;
  }), i.current;
}
var FE = jE;
const {
  useStoreRef: UE
} = th, {
  SUSPENSE_TIMEOUT_MS: BE
} = Zn, {
  updateRetainCount: js
} = Zn, {
  RetentionZone: WE
} = Kd, {
  useEffect: qE,
  useRef: $E
} = vt, {
  isSSR: dv
} = xc;
function VE(t) {
  if ($t("recoil_memory_managament_2020"))
    return zE(t);
}
function zE(t) {
  const l = (Array.isArray(t) ? t : [t]).map((c) => c instanceof WE ? c : c.key), n = UE();
  qE(() => {
    if (!$t("recoil_memory_managament_2020"))
      return;
    const c = n.current;
    if (u.current && !dv)
      window.clearTimeout(u.current), u.current = null;
    else
      for (const p of l)
        js(c, p, 1);
    return () => {
      for (const p of l)
        js(c, p, -1);
    };
  }, [n, ...l]);
  const u = $E(), b = FE(l);
  if (!dv && (b === void 0 || !NE(b, l))) {
    const c = n.current;
    for (const p of l)
      js(c, p, 1);
    if (b)
      for (const p of b)
        js(c, p, -1);
    u.current && window.clearTimeout(u.current), u.current = window.setTimeout(() => {
      u.current = null;
      for (const p of l)
        js(c, p, -1);
    }, BE);
  }
}
var YE = VE;
function HE() {
  return "<component name not available>";
}
var Cc = HE;
const {
  currentRendererSupportsUseSyncExternalStore: GE,
  reactMode: uo,
  useMutableSource: KE,
  useSyncExternalStore: QE
} = $d, {
  useRecoilMutableSource: ZE,
  useStoreRef: Jn
} = th, {
  isRecoilValue: JE
} = Vr, {
  getRecoilValueAsLoadable: Ec,
  setRecoilValue: XE,
  subscribeToRecoilValue: Tc
} = Oa, {
  useCallback: Vl,
  useEffect: tc,
  useMemo: e2,
  useRef: Sm,
  useState: km
} = vt, {
  isSSR: t2
} = xc;
function i2(t, i, l) {
  if (t.state === "hasValue")
    return t.contents;
  throw t.state === "loading" ? new Promise((u) => {
    const b = l.current.getState().suspendedComponentResolvers;
    b.add(u), t2 && Bt(t.contents) && t.contents.finally(() => {
      b.delete(u);
    });
  }) : t.state === "hasError" ? t.contents : Ze(`Invalid value of loadable atom "${i.key}"`);
}
function Ac(t, i) {
  if (!JE(t))
    throw Ze(`Invalid argument to ${i}: expected an atom or selector but got ${String(t)}`);
}
function l2(t) {
  const i = Jn(), l = Cc(), n = Vl(() => {
    var p;
    process.env.NODE_ENV;
    const y = i.current, x = y.getState(), S = uo().early && (p = x.nextTree) !== null && p !== void 0 ? p : x.currentTree;
    return {
      loadable: Ec(y, t, S),
      key: t.key
    };
  }, [i, t]), u = Vl((p) => {
    let y;
    return () => {
      var x, S;
      const C = p();
      return (x = y) !== null && x !== void 0 && x.loadable.is(C.loadable) && ((S = y) === null || S === void 0 ? void 0 : S.key) === C.key ? y : (y = C, C);
    };
  }, []), b = e2(() => u(n), [n, u]), c = Vl((p) => {
    const y = i.current;
    return Tc(y, t, p, l).release;
  }, [i, t, l]);
  return QE(
    c,
    b,
    // getSnapshot()
    b
    // getServerSnapshot() for SSR support
  ).loadable;
}
function a2(t) {
  const i = Jn(), l = Vl(() => {
    var x;
    const S = i.current, C = S.getState(), M = uo().early && (x = C.nextTree) !== null && x !== void 0 ? x : C.currentTree;
    return Ec(S, t, M);
  }, [i, t]), n = Vl(() => (process.env.NODE_ENV, l()), [l]), u = Cc(), b = Vl((x, S) => {
    const C = i.current;
    return Tc(C, t, () => {
      if (!$t("recoil_suppress_rerender_in_callback"))
        return S();
      const N = l();
      y.current.is(N) || S(), y.current = N;
    }, u).release;
  }, [i, t, u, l]), c = ZE();
  if (c == null)
    throw Ze("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
  const p = KE(c, n, b), y = Sm(p);
  return tc(() => {
    y.current = p;
  }), p;
}
function hv(t) {
  const i = Jn(), l = Cc(), n = Vl(() => {
    var y;
    process.env.NODE_ENV;
    const x = i.current, S = x.getState(), C = uo().early && (y = S.nextTree) !== null && y !== void 0 ? y : S.currentTree;
    return Ec(x, t, C);
  }, [i, t]), u = Vl(() => ({
    loadable: n(),
    key: t.key
  }), [n, t.key]), b = Vl((y) => {
    const x = u();
    return y.loadable.is(x.loadable) && y.key === x.key ? y : x;
  }, [u]);
  tc(() => {
    const y = Tc(i.current, t, (x) => {
      p(b);
    }, l);
    return p(b), y.release;
  }, [l, t, i, b]);
  const [c, p] = km(u);
  return c.key !== t.key ? u().loadable : c.loadable;
}
function r2(t) {
  const i = Jn(), [, l] = km([]), n = Cc(), u = Vl(() => {
    var p;
    process.env.NODE_ENV;
    const y = i.current, x = y.getState(), S = uo().early && (p = x.nextTree) !== null && p !== void 0 ? p : x.currentTree;
    return Ec(y, t, S);
  }, [i, t]), b = u(), c = Sm(b);
  return tc(() => {
    c.current = b;
  }), tc(() => {
    const p = i.current, y = p.getState(), x = Tc(p, t, (C) => {
      var M;
      if (!$t("recoil_suppress_rerender_in_callback"))
        return l([]);
      const N = u();
      (M = c.current) !== null && M !== void 0 && M.is(N) || l(N), c.current = N;
    }, n);
    if (y.nextTree)
      p.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        c.current = null, l([]);
      });
    else {
      var S;
      if (!$t("recoil_suppress_rerender_in_callback"))
        return l([]);
      const C = u();
      (S = c.current) !== null && S !== void 0 && S.is(C) || l(C), c.current = C;
    }
    return x.release;
  }, [n, u, t, i]), b;
}
function n2(t) {
  return process.env.NODE_ENV !== "production" && Ac(t, "useRecoilValueLoadable"), $t("recoil_memory_managament_2020") && YE(t), {
    TRANSITION_SUPPORT: hv,
    // Recoil will attemp to detect if `useSyncExternalStore()` is supported with
    // `reactMode()` before calling it.  However, sometimes the host React
    // environment supports it but uses additional React renderers (such as with
    // `react-three-fiber`) which do not.  While this is technically a user issue
    // by using a renderer with React 18+ that doesn't fully support React 18 we
    // don't want to break users if it can be avoided. As the current renderer can
    // change at runtime, we need to dynamically check and fallback if necessary.
    SYNC_EXTERNAL_STORE: GE() ? l2 : hv,
    MUTABLE_SOURCE: a2,
    LEGACY: r2
  }[uo().mode](t);
}
function Rm(t) {
  process.env.NODE_ENV !== "production" && Ac(t, "useRecoilValue");
  const i = Jn(), l = n2(t);
  return i2(l, t, i);
}
function Cm(t) {
  process.env.NODE_ENV !== "production" && Ac(t, "useSetRecoilState");
  const i = Jn();
  return Vl((l) => {
    XE(i.current, t, l);
  }, [i, t]);
}
function s2(t) {
  return process.env.NODE_ENV !== "production" && Ac(t, "useRecoilState"), [Rm(t), Cm(t)];
}
var o2 = {
  useRecoilState: s2,
  useRecoilValue: Rm,
  useSetRecoilState: Cm
};
const {
  batchUpdates: u2
} = Xd, {
  DEFAULT_VALUE: c2,
  getNode: b2
} = Yl, {
  AbstractRecoilValue: f2,
  setRecoilValueLoadable: d2
} = Oa, {
  cloneSnapshot: wM
} = Rc, {
  useCallback: _M,
  useEffect: xM,
  useRef: SM,
  useState: kM
} = vt;
function h2(t, i) {
  var l;
  const n = t.getState(), u = (l = n.nextTree) !== null && l !== void 0 ? l : n.currentTree, b = i.getStore_INTERNAL().getState().currentTree;
  u2(() => {
    const c = /* @__PURE__ */ new Set();
    for (const x of [u.atomValues.keys(), b.atomValues.keys()])
      for (const S of x) {
        var p, y;
        ((p = u.atomValues.get(S)) === null || p === void 0 ? void 0 : p.contents) !== ((y = b.atomValues.get(S)) === null || y === void 0 ? void 0 : y.contents) && b2(S).shouldRestoreFromSnapshots && c.add(S);
      }
    c.forEach((x) => {
      d2(t, new f2(x), b.atomValues.has(x) ? Kt(b.atomValues.get(x)) : c2);
    }), t.replaceState((x) => ({
      ...x,
      stateID: i.getID()
    }));
  });
}
var p2 = {
  gotoSnapshot: h2
};
const {
  useMemo: RM
} = vt, {
  loadableWithValue: v2
} = ro, {
  initializeNode: g2
} = Hr, {
  DEFAULT_VALUE: m2,
  getNode: y2
} = Yl, {
  copyTreeState: w2,
  getRecoilValueAsLoadable: _2,
  invalidateDownstreams: x2,
  writeLoadableToTreeState: S2
} = Oa;
function pv(t) {
  return y2(t.key).nodeType === "atom";
}
class k2 {
  constructor(i, l) {
    tt(this, "_store", void 0), tt(this, "_treeState", void 0), tt(this, "_changes", void 0), tt(this, "get", (n) => {
      if (this._changes.has(n.key))
        return this._changes.get(n.key);
      if (!pv(n))
        throw Ze("Reading selectors within atomicUpdate is not supported");
      const u = _2(this._store, n, this._treeState);
      if (u.state === "hasValue")
        return u.contents;
      throw u.state === "hasError" ? u.contents : Ze(`Expected Recoil atom ${n.key} to have a value, but it is in a loading state.`);
    }), tt(this, "set", (n, u) => {
      if (!pv(n))
        throw Ze("Setting selectors within atomicUpdate is not supported");
      if (typeof u == "function") {
        const b = this.get(n);
        this._changes.set(n.key, u(b));
      } else
        g2(this._store, n.key, "set"), this._changes.set(n.key, u);
    }), tt(this, "reset", (n) => {
      this.set(n, m2);
    }), this._store = i, this._treeState = l, this._changes = /* @__PURE__ */ new Map();
  }
  // Allow destructing
  // eslint-disable-next-line fb-www/extra-arrow-initializer
  newTreeState_INTERNAL() {
    if (this._changes.size === 0)
      return this._treeState;
    const i = w2(this._treeState);
    for (const [l, n] of this._changes)
      S2(i, l, v2(n));
    return x2(this._store, i), i;
  }
}
function R2(t) {
  return (i) => {
    t.replaceState((l) => {
      const n = new k2(t, l);
      return i(n), n.newTreeState_INTERNAL();
    });
  };
}
var C2 = {
  atomicUpdater: R2
}, E2 = C2.atomicUpdater, Em = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  atomicUpdater: E2
});
function T2(t, i) {
  if (!t)
    throw new Error(i);
}
var A2 = T2, ra = A2;
const {
  atomicUpdater: O2
} = Em, {
  batchUpdates: M2
} = Xd, {
  DEFAULT_VALUE: D2
} = Yl, {
  refreshRecoilValue: L2,
  setRecoilValue: vv
} = Oa, {
  cloneSnapshot: N2
} = Rc, {
  gotoSnapshot: I2
} = p2, {
  useCallback: CM
} = vt;
class Tm {
}
const P2 = new Tm();
function j2(t, i, l, n) {
  let u = P2, b;
  if (M2(() => {
    const p = "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
    if (typeof i != "function")
      throw Ze(p);
    const y = Gg({
      ...n ?? {},
      // flowlint-line unclear-type:off
      // $FlowFixMe[missing-local-annot]
      set: (S, C) => vv(t, S, C),
      // $FlowFixMe[missing-local-annot]
      reset: (S) => vv(t, S, D2),
      // $FlowFixMe[missing-local-annot]
      refresh: (S) => L2(t, S),
      gotoSnapshot: (S) => I2(t, S),
      transact_UNSTABLE: (S) => O2(t)(S)
    }, {
      snapshot: () => {
        const S = N2(t);
        return b = S.retain(), S;
      }
    }), x = i(y);
    if (typeof x != "function")
      throw Ze(p);
    u = x(...l);
  }), u instanceof Tm && (process.env.NODE_ENV !== "production" ? ra(!1, "batchUpdates should return immediately") : ra(!1)), Bt(u))
    u = u.finally(() => {
      var p;
      (p = b) === null || p === void 0 || p();
    });
  else {
    var c;
    (c = b) === null || c === void 0 || c();
  }
  return u;
}
var F2 = {
  recoilCallback: j2
};
const {
  useCallback: EM
} = vt, {
  atomicUpdater: TM
} = Em, {
  useMemo: AM
} = vt;
class U2 {
  constructor(i) {
    tt(this, "value", void 0), this.value = i;
  }
}
var B2 = {
  WrappedValue: U2
}, W2 = B2.WrappedValue, Am = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WrappedValue: W2
});
class gv extends Error {
}
class q2 {
  // $FlowIssue[unclear-type]
  constructor(i) {
    var l, n, u;
    tt(this, "_name", void 0), tt(this, "_numLeafs", void 0), tt(this, "_root", void 0), tt(this, "_onHit", void 0), tt(this, "_onSet", void 0), tt(this, "_mapNodeValue", void 0), this._name = i == null ? void 0 : i.name, this._numLeafs = 0, this._root = null, this._onHit = (l = i == null ? void 0 : i.onHit) !== null && l !== void 0 ? l : () => {
    }, this._onSet = (n = i == null ? void 0 : i.onSet) !== null && n !== void 0 ? n : () => {
    }, this._mapNodeValue = (u = i == null ? void 0 : i.mapNodeValue) !== null && u !== void 0 ? u : (b) => b;
  }
  size() {
    return this._numLeafs;
  }
  // $FlowIssue[unclear-type]
  root() {
    return this._root;
  }
  get(i, l) {
    var n;
    return (n = this.getLeafNode(i, l)) === null || n === void 0 ? void 0 : n.value;
  }
  getLeafNode(i, l) {
    if (this._root == null)
      return;
    let n = this._root;
    for (; n; ) {
      if (l == null || l.onNodeVisit(n), n.type === "leaf")
        return this._onHit(n), n;
      const u = this._mapNodeValue(i(n.nodeKey));
      n = n.branches.get(u);
    }
  }
  set(i, l, n) {
    const u = () => {
      var b, c, p, y;
      let x, S;
      for (const [g, G] of i) {
        var C, M, N;
        const q = this._root;
        if ((q == null ? void 0 : q.type) === "leaf")
          throw this.invalidCacheError();
        const F = x;
        if (x = F ? F.branches.get(S) : q, x = (C = x) !== null && C !== void 0 ? C : {
          type: "branch",
          nodeKey: g,
          parent: F,
          branches: /* @__PURE__ */ new Map(),
          branchKey: S
        }, x.type !== "branch" || x.nodeKey !== g)
          throw this.invalidCacheError();
        F == null || F.branches.set(S, x), n == null || (M = n.onNodeVisit) === null || M === void 0 || M.call(n, x), S = this._mapNodeValue(G), this._root = (N = this._root) !== null && N !== void 0 ? N : x;
      }
      const A = x ? (b = x) === null || b === void 0 ? void 0 : b.branches.get(S) : this._root;
      if (A != null && (A.type !== "leaf" || A.branchKey !== S))
        throw this.invalidCacheError();
      const I = {
        type: "leaf",
        value: l,
        parent: x,
        branchKey: S
      };
      (c = x) === null || c === void 0 || c.branches.set(S, I), this._root = (p = this._root) !== null && p !== void 0 ? p : I, this._numLeafs++, this._onSet(I), n == null || (y = n.onNodeVisit) === null || y === void 0 || y.call(n, I);
    };
    try {
      u();
    } catch (b) {
      if (b instanceof gv)
        this.clear(), u();
      else
        throw b;
    }
  }
  // Returns true if leaf was actually deleted from the tree
  delete(i) {
    const l = this.root();
    if (!l)
      return !1;
    if (i === l)
      return this._root = null, this._numLeafs = 0, !0;
    let n = i.parent, u = i.branchKey;
    for (; n; ) {
      var b;
      if (n.branches.delete(u), n === l)
        return n.branches.size === 0 ? (this._root = null, this._numLeafs = 0) : this._numLeafs--, !0;
      if (n.branches.size > 0)
        break;
      u = (b = n) === null || b === void 0 ? void 0 : b.branchKey, n = n.parent;
    }
    for (; n !== l; n = n.parent)
      if (n == null)
        return !1;
    return this._numLeafs--, !0;
  }
  clear() {
    this._numLeafs = 0, this._root = null;
  }
  invalidCacheError() {
    throw Ni("Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache." + (this._name != null ? ` - ${this._name}` : "")), new gv();
  }
}
var $2 = {
  TreeCache: q2
}, V2 = $2.TreeCache, Om = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  TreeCache: V2
});
class z2 {
  constructor(i) {
    var l;
    tt(this, "_maxSize", void 0), tt(this, "_size", void 0), tt(this, "_head", void 0), tt(this, "_tail", void 0), tt(this, "_map", void 0), tt(this, "_keyMapper", void 0), this._maxSize = i.maxSize, this._size = 0, this._head = null, this._tail = null, this._map = /* @__PURE__ */ new Map(), this._keyMapper = (l = i.mapKey) !== null && l !== void 0 ? l : (n) => n;
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(i) {
    return this._map.has(this._keyMapper(i));
  }
  get(i) {
    const l = this._keyMapper(i), n = this._map.get(l);
    if (n)
      return this.set(i, n.value), n.value;
  }
  set(i, l) {
    const n = this._keyMapper(i);
    this._map.get(n) && this.delete(i);
    const b = this.head(), c = {
      key: i,
      right: b,
      left: null,
      value: l
    };
    b ? b.left = c : this._tail = c, this._map.set(n, c), this._head = c, this._size++, this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const i = this.tail();
    i && this.delete(i.key);
  }
  delete(i) {
    const l = this._keyMapper(i);
    if (!this._size || !this._map.has(l))
      return;
    const n = Kt(this._map.get(l)), u = n.right, b = n.left;
    u && (u.left = n.left), b && (b.right = n.right), n === this.head() && (this._head = u), n === this.tail() && (this._tail = b), this._map.delete(l), this._size--;
  }
  clear() {
    this._size = 0, this._head = null, this._tail = null, this._map = /* @__PURE__ */ new Map();
  }
}
var Y2 = {
  LRUCache: z2
}, H2 = Y2.LRUCache, Mm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  LRUCache: H2
});
const {
  LRUCache: G2
} = Mm, {
  TreeCache: K2
} = Om;
function Q2({
  name: t,
  maxSize: i,
  mapNodeValue: l = (n) => n
}) {
  const n = new G2({
    maxSize: i
  }), u = new K2({
    name: t,
    mapNodeValue: l,
    onHit: (b) => {
      n.set(b, !0);
    },
    onSet: (b) => {
      const c = n.tail();
      n.set(b, !0), c && u.size() > i && u.delete(c.key);
    }
  });
  return u;
}
var mv = Q2;
const Z2 = 15;
function Cl(t, i, l) {
  if (typeof t == "string" && !t.includes('"') && !t.includes("\\"))
    return `"${t}"`;
  switch (typeof t) {
    case "undefined":
      return "";
    case "boolean":
      return t ? "true" : "false";
    case "number":
    case "symbol":
      return String(t);
    case "string":
      return JSON.stringify(t);
    case "function":
      if ((i == null ? void 0 : i.allowFunctions) !== !0)
        throw Ze("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${t.name})__`;
  }
  if (t === null)
    return "null";
  if (typeof t != "object") {
    var n;
    return (n = JSON.stringify(t)) !== null && n !== void 0 ? n : "";
  }
  if (Bt(t))
    return "__PROMISE__";
  if (Array.isArray(t))
    return `[${t.map((u, b) => Cl(u, i, b.toString()))}]`;
  if (typeof t.toJSON == "function")
    return Cl(t.toJSON(l), i, l);
  if (t instanceof Map) {
    const u = {};
    for (const [b, c] of t)
      u[typeof b == "string" ? b : Cl(b, i)] = c;
    return Cl(u, i, l);
  }
  return t instanceof Set ? Cl(
    // $FlowFixMe[missing-local-annot]
    Array.from(t).sort((u, b) => Cl(u, i).localeCompare(Cl(b, i))),
    i,
    l
  ) : Symbol !== void 0 && t[Symbol.iterator] != null && typeof t[Symbol.iterator] == "function" ? Cl(Array.from(t), i, l) : `{${Object.keys(t).filter((u) => t[u] !== void 0).sort().map((u) => `${Cl(u, i)}:${Cl(t[u], i, u)}`).join(",")}}`;
}
function J2(t, i = {
  allowFunctions: !1
}) {
  if (process.env.NODE_ENV !== "production" && typeof window < "u") {
    const l = window.performance ? window.performance.now() : 0, n = Cl(t, i), u = window.performance ? window.performance.now() : 0;
    return u - l > Z2 && (console.groupCollapsed(`Recoil: Spent ${u - l}ms computing a cache key`), console.warn(t, n), console.groupEnd()), n;
  }
  return Cl(t, i);
}
var ih = J2;
const {
  TreeCache: X2
} = Om, ju = {
  equality: "reference",
  eviction: "keep-all",
  maxSize: 1 / 0
};
function eT({
  equality: t = ju.equality,
  eviction: i = ju.eviction,
  maxSize: l = ju.maxSize
} = ju, n) {
  const u = tT(t);
  return iT(i, l, u, n);
}
function tT(t) {
  switch (t) {
    case "reference":
      return (i) => i;
    case "value":
      return (i) => ih(i);
  }
  throw Ze(`Unrecognized equality policy ${t}`);
}
function iT(t, i, l, n) {
  switch (t) {
    case "keep-all":
      return new X2({
        name: n,
        mapNodeValue: l
      });
    case "lru":
      return mv({
        name: n,
        maxSize: Kt(i),
        mapNodeValue: l
      });
    case "most-recent":
      return mv({
        name: n,
        maxSize: 1,
        mapNodeValue: l
      });
  }
  throw Ze(`Unrecognized eviction policy ${t}`);
}
var lT = eT;
function aT(t) {
  var i, l;
  if (typeof window > "u")
    return !1;
  const u = (l = (t != null ? (i = t.ownerDocument) !== null && i !== void 0 ? i : t : document).defaultView) !== null && l !== void 0 ? l : window;
  return t != null && (typeof u.Node == "function" ? t instanceof u.Node : typeof t == "object" && typeof t.nodeType == "number" && typeof t.nodeName == "string");
}
var rT = aT;
const {
  isReactNative: nT,
  isWindow: sT
} = xc;
function oT(t) {
  if (t === null || typeof t != "object")
    return !0;
  switch (typeof t.$$typeof) {
    case "symbol":
      return !0;
    case "number":
      return !0;
  }
  return !!(t["@@__IMMUTABLE_ITERABLE__@@"] != null || t["@@__IMMUTABLE_KEYED__@@"] != null || t["@@__IMMUTABLE_INDEXED__@@"] != null || t["@@__IMMUTABLE_ORDERED__@@"] != null || t["@@__IMMUTABLE_RECORD__@@"] != null || rT(t) || Bt(t) || t instanceof Error || ArrayBuffer.isView(t) || !nT && sT(t));
}
function Dm(t) {
  if (!(typeof t != "object" || oT(t))) {
    Object.freeze(t);
    for (const i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        const l = t[i];
        typeof l == "object" && l != null && !Object.isFrozen(l) && Dm(l);
      }
    Object.seal(t);
  }
}
var Od = Dm;
const {
  isLoadable: uT,
  loadableWithError: Fu,
  loadableWithPromise: cT,
  loadableWithValue: Qf
} = ro, {
  WrappedValue: Lm
} = Am, {
  getNodeLoadable: Uu,
  peekNodeLoadable: bT,
  setNodeValue: fT
} = Hr, {
  saveDepsToStore: dT
} = so, {
  DEFAULT_VALUE: hT,
  getConfigDeletionHandler: pT,
  getNode: vT,
  registerNode: yv
} = Yl, {
  isRecoilValue: gT
} = Vr, {
  markRecoilValueModified: wv
} = Oa, {
  retainedByOptionWithDefault: mT
} = Zn, {
  recoilCallback: yT
} = F2;
class Nm {
}
const Fs = new Nm(), Us = [], Bu = /* @__PURE__ */ new Map(), wT = /* @__PURE__ */ (() => {
  let t = 0;
  return () => t++;
})();
function Im(t) {
  let i = null;
  const {
    key: l,
    get: n,
    cachePolicy_UNSTABLE: u
  } = t, b = t.set != null ? t.set : void 0;
  if (process.env.NODE_ENV !== "production") {
    if (typeof l != "string")
      throw Ze("A key option with a unique string value must be provided when creating a selector.");
    if (typeof n != "function")
      throw Ze("Selectors must specify a get callback option to get the selector value.");
  }
  const c = /* @__PURE__ */ new Set(), p = lT(u ?? {
    equality: "reference",
    eviction: "keep-all"
  }, l), y = mT(t.retainedBy_UNSTABLE), x = /* @__PURE__ */ new Map();
  let S = 0;
  function C() {
    return !$t("recoil_memory_managament_2020") || S > 0;
  }
  function M(B) {
    return B.getState().knownSelectors.add(l), S++, () => {
      S--;
    };
  }
  function N() {
    return pT(l) !== void 0 && !C();
  }
  function A(B, ne, J, Z, ye) {
    Ce(ne, Z, ye), I(B, J);
  }
  function I(B, ne) {
    He(B, ne) && Ae(B), G(ne, !0);
  }
  function g(B, ne) {
    He(B, ne) && (Kt(pe(B)).stateVersions.clear(), G(ne, !1));
  }
  function G(B, ne) {
    const J = Bu.get(B);
    if (J != null) {
      for (const Z of J)
        wv(Z, Kt(i));
      ne && Bu.delete(B);
    }
  }
  function q(B, ne) {
    let J = Bu.get(ne);
    J == null && Bu.set(ne, J = /* @__PURE__ */ new Set()), J.add(B);
  }
  function F(B, ne, J, Z, ye, je) {
    return ne.then((me) => {
      if (!C())
        throw Ae(B), Fs;
      const ee = Qf(me);
      return A(B, J, ye, ee, Z), me;
    }).catch((me) => {
      if (!C())
        throw Ae(B), Fs;
      if (Bt(me))
        return ue(B, me, J, Z, ye, je);
      const ee = Fu(me);
      throw A(B, J, ye, ee, Z), me;
    });
  }
  function ue(B, ne, J, Z, ye, je) {
    return ne.then((me) => {
      if (!C())
        throw Ae(B), Fs;
      je.loadingDepKey != null && je.loadingDepPromise === ne ? J.atomValues.set(je.loadingDepKey, Qf(me)) : B.getState().knownSelectors.forEach((Ue) => {
        J.atomValues.delete(Ue);
      });
      const ee = $(B, J);
      if (ee && ee.state !== "loading") {
        if ((He(B, ye) || pe(B) == null) && I(B, ye), ee.state === "hasValue")
          return ee.contents;
        throw ee.contents;
      }
      if (!He(B, ye)) {
        const Ue = z(B, J);
        if (Ue != null)
          return Ue.loadingLoadable.contents;
      }
      const [Ee, Pe] = se(B, J, ye);
      if (Ee.state !== "loading" && A(B, J, ye, Ee, Pe), Ee.state === "hasError")
        throw Ee.contents;
      return Ee.contents;
    }).catch((me) => {
      if (me instanceof Nm)
        throw Fs;
      if (!C())
        throw Ae(B), Fs;
      const ee = Fu(me);
      throw A(B, J, ye, ee, Z), me;
    });
  }
  function R(B, ne, J, Z) {
    var ye, je, me, ee;
    if (He(B, Z) || ne.version === ((ye = B.getState()) === null || ye === void 0 || (je = ye.currentTree) === null || je === void 0 ? void 0 : je.version) || ne.version === ((me = B.getState()) === null || me === void 0 || (ee = me.nextTree) === null || ee === void 0 ? void 0 : ee.version)) {
      var Ee, Pe, Ue;
      dT(l, J, B, (Ee = (Pe = B.getState()) === null || Pe === void 0 || (Ue = Pe.nextTree) === null || Ue === void 0 ? void 0 : Ue.version) !== null && Ee !== void 0 ? Ee : B.getState().currentTree.version);
    }
    for (const St of J)
      c.add(St);
  }
  function se(B, ne, J) {
    let Z = !0, ye = !0;
    const je = () => {
      ye = !1;
    };
    let me, ee = !1, Ee;
    const Pe = {
      loadingDepKey: null,
      loadingDepPromise: null
    }, Ue = /* @__PURE__ */ new Map();
    function St({
      key: ce
    }) {
      const Be = Uu(B, ne, ce);
      switch (Ue.set(ce, Be), Z || (R(B, ne, new Set(Ue.keys()), J), g(B, J)), Be.state) {
        case "hasValue":
          return Be.contents;
        case "hasError":
          throw Be.contents;
        case "loading":
          throw Pe.loadingDepKey = ce, Pe.loadingDepPromise = Be.contents, Be.contents;
      }
      throw Ze("Invalid Loadable state");
    }
    const we = (ce) => (...Be) => {
      if (ye)
        throw Ze("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");
      return i == null && (process.env.NODE_ENV !== "production" ? ra(!1, "Recoil Value can never be null") : ra(!1)), yT(
        B,
        ce,
        Be,
        {
          node: i
        }
        // flowlint-line unclear-type:off
      );
    };
    try {
      me = n({
        get: St,
        getCallback: we
      }), me = gT(me) ? St(me) : me, uT(me) && (me.state === "hasError" && (ee = !0), me = me.contents), Bt(me) ? me = F(B, me, ne, Ue, J, Pe).finally(je) : je(), me = me instanceof Lm ? me.value : me;
    } catch (ce) {
      me = ce, Bt(me) ? me = ue(B, me, ne, Ue, J, Pe).finally(je) : (ee = !0, je());
    }
    return ee ? Ee = Fu(me) : Bt(me) ? Ee = cT(me) : Ee = Qf(me), Z = !1, Ye(B, J, Ue), R(B, ne, new Set(Ue.keys()), J), [Ee, Ue];
  }
  function $(B, ne) {
    let J = ne.atomValues.get(l);
    if (J != null)
      return J;
    const Z = /* @__PURE__ */ new Set();
    try {
      J = p.get((je) => (typeof je != "string" && (process.env.NODE_ENV !== "production" ? ra(!1, "Cache nodeKey is type string") : ra(!1)), Uu(B, ne, je).contents), {
        onNodeVisit: (je) => {
          je.type === "branch" && je.nodeKey !== l && Z.add(je.nodeKey);
        }
      });
    } catch (je) {
      throw Ze(`Problem with cache lookup for selector "${l}": ${je.message}`);
    }
    if (J) {
      var ye;
      ne.atomValues.set(l, J), R(B, ne, Z, (ye = pe(B)) === null || ye === void 0 ? void 0 : ye.executionID);
    }
    return J;
  }
  function K(B, ne) {
    const J = $(B, ne);
    if (J != null)
      return Ae(B), J;
    const Z = z(B, ne);
    if (Z != null) {
      var ye;
      return ((ye = Z.loadingLoadable) === null || ye === void 0 ? void 0 : ye.state) === "loading" && q(B, Z.executionID), Z.loadingLoadable;
    }
    const je = wT(), [me, ee] = se(B, ne, je);
    return me.state === "loading" ? (Me(B, je, me, ee, ne), q(B, je)) : (Ae(B), Ce(ne, me, ee)), me;
  }
  function z(B, ne) {
    const J = cm([x.has(B) ? [Kt(x.get(B))] : [], yc(Qd(x, ([ye]) => ye !== B), ([, ye]) => ye)]);
    function Z(ye) {
      for (const [je, me] of ye)
        if (!Uu(B, ne, je).is(me))
          return !0;
      return !1;
    }
    for (const ye of J) {
      if (
        // If this execution was already checked to be valid with this version
        // of state, then let's use it!
        ye.stateVersions.get(ne.version) || // If the deps for the execution match our current state, then it's valid
        !Z(ye.depValuesDiscoveredSoFarDuringAsyncWork)
      )
        return ye.stateVersions.set(ne.version, !0), ye;
      ye.stateVersions.set(ne.version, !1);
    }
  }
  function pe(B) {
    return x.get(B);
  }
  function Me(B, ne, J, Z, ye) {
    x.set(B, {
      depValuesDiscoveredSoFarDuringAsyncWork: Z,
      executionID: ne,
      loadingLoadable: J,
      stateVersions: /* @__PURE__ */ new Map([[ye.version, !0]])
    });
  }
  function Ye(B, ne, J) {
    if (He(B, ne)) {
      const Z = pe(B);
      Z != null && (Z.depValuesDiscoveredSoFarDuringAsyncWork = J);
    }
  }
  function Ae(B) {
    x.delete(B);
  }
  function He(B, ne) {
    var J;
    return ne === ((J = pe(B)) === null || J === void 0 ? void 0 : J.executionID);
  }
  function bt(B) {
    return Array.from(B.entries()).map(([ne, J]) => [ne, J.contents]);
  }
  function Ce(B, ne, J) {
    process.env.NODE_ENV !== "production" && ne.state !== "loading" && !t.dangerouslyAllowMutability && Od(ne.contents), B.atomValues.set(l, ne);
    try {
      p.set(bt(J), ne);
    } catch (Z) {
      throw Ze(`Problem with setting cache for selector "${l}": ${Z.message}`);
    }
  }
  function Fe(B) {
    if (Us.includes(l)) {
      const ne = `Recoil selector has circular dependencies: ${Us.slice(Us.indexOf(l)).join(" → ")}`;
      return Fu(Ze(ne));
    }
    Us.push(l);
    try {
      return B();
    } finally {
      Us.pop();
    }
  }
  function Te(B, ne) {
    const J = ne.atomValues.get(l);
    return J ?? p.get((Z) => {
      var ye;
      return typeof Z != "string" && (process.env.NODE_ENV !== "production" ? ra(!1, "Cache nodeKey is type string") : ra(!1)), (ye = bT(B, ne, Z)) === null || ye === void 0 ? void 0 : ye.contents;
    });
  }
  function de(B, ne) {
    return Fe(() => K(B, ne));
  }
  function re(B) {
    B.atomValues.delete(l);
  }
  function ve(B, ne) {
    i == null && (process.env.NODE_ENV !== "production" ? ra(!1, "Recoil Value can never be null") : ra(!1));
    for (const Z of c) {
      var J;
      const ye = vT(Z);
      (J = ye.clearCache) === null || J === void 0 || J.call(ye, B, ne);
    }
    c.clear(), re(ne), p.clear(), wv(B, i);
  }
  return b != null ? i = yv({
    key: l,
    nodeType: "selector",
    peek: Te,
    get: de,
    set: (ne, J, Z) => {
      let ye = !1;
      const je = /* @__PURE__ */ new Map();
      function me({
        key: Ue
      }) {
        if (ye)
          throw Ze("Recoil: Async selector sets are not currently supported.");
        const St = Uu(ne, J, Ue);
        if (St.state === "hasValue")
          return St.contents;
        if (St.state === "loading") {
          const we = `Getting value of asynchronous atom or selector "${Ue}" in a pending state while setting selector "${l}" is not yet supported.`;
          throw Ni(we), Ze(we);
        } else
          throw St.contents;
      }
      function ee(Ue, St) {
        if (ye) {
          const Be = "Recoil: Async selector sets are not currently supported.";
          throw Ni(Be), Ze(Be);
        }
        const we = typeof St == "function" ? (
          // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
          // flowlint-next-line unclear-type:off
          St(me(Ue))
        ) : St;
        fT(ne, J, Ue.key, we).forEach((Be, kt) => je.set(kt, Be));
      }
      function Ee(Ue) {
        ee(Ue, hT);
      }
      const Pe = b({
        set: ee,
        get: me,
        reset: Ee
      }, Z);
      if (Pe !== void 0)
        throw Bt(Pe) ? Ze("Recoil: Async selector sets are not currently supported.") : Ze("Recoil: selector set should be a void function.");
      return ye = !0, je;
    },
    init: M,
    invalidate: re,
    clearCache: ve,
    shouldDeleteConfigOnRelease: N,
    dangerouslyAllowMutability: t.dangerouslyAllowMutability,
    shouldRestoreFromSnapshots: !1,
    retainedBy: y
  }) : i = yv({
    key: l,
    nodeType: "selector",
    peek: Te,
    get: de,
    init: M,
    invalidate: re,
    clearCache: ve,
    shouldDeleteConfigOnRelease: N,
    dangerouslyAllowMutability: t.dangerouslyAllowMutability,
    shouldRestoreFromSnapshots: !1,
    retainedBy: y
  });
}
Im.value = (t) => new Lm(t);
var Hs = Im;
const {
  isLoadable: _T,
  loadableWithError: Zf,
  loadableWithPromise: Jf,
  loadableWithValue: Cn
} = ro, {
  WrappedValue: Pm
} = Am, {
  peekNodeInfo: xT
} = Hr, {
  DEFAULT_VALUE: Ar,
  DefaultValue: Ja,
  getConfigDeletionHandler: jm,
  registerNode: ST,
  setConfigDeletionHandler: kT
} = Yl, {
  isRecoilValue: RT
} = Vr, {
  getRecoilValueAsLoadable: CT,
  markRecoilValueModified: ET,
  setRecoilValue: _v,
  setRecoilValueLoadable: TT
} = Oa, {
  retainedByOptionWithDefault: AT
} = Zn, Bs = (t) => t instanceof Pm ? t.value : t;
function OT(t) {
  const {
    key: i,
    persistence_UNSTABLE: l
  } = t, n = AT(t.retainedBy_UNSTABLE);
  let u = 0;
  function b(q) {
    return Jf(q.then((F) => (c = Cn(F), F)).catch((F) => {
      throw c = Zf(F), F;
    }));
  }
  let c = Bt(t.default) ? b(t.default) : _T(t.default) ? t.default.state === "loading" ? b(t.default.contents) : t.default : (
    // $FlowFixMe[incompatible-call]
    Cn(Bs(t.default))
  );
  x(c.contents);
  let p;
  const y = /* @__PURE__ */ new Map();
  function x(q) {
    return process.env.NODE_ENV !== "production" && t.dangerouslyAllowMutability !== !0 ? Bt(q) ? q.then((F) => (Od(F), F)) : (Od(q), q) : q;
  }
  function S(q, F) {
    const ue = F.then((R) => {
      var se, $;
      return (($ = ((se = q.getState().nextTree) !== null && se !== void 0 ? se : q.getState().currentTree).atomValues.get(i)) === null || $ === void 0 ? void 0 : $.contents) === ue && _v(q, G, R), R;
    }).catch((R) => {
      var se, $;
      throw (($ = ((se = q.getState().nextTree) !== null && se !== void 0 ? se : q.getState().currentTree).atomValues.get(i)) === null || $ === void 0 ? void 0 : $.contents) === ue && TT(q, G, Zf(R)), R;
    });
    return ue;
  }
  function C(q, F, ue) {
    var R;
    u++;
    const se = () => {
      var pe;
      u--, (pe = y.get(q)) === null || pe === void 0 || pe.forEach((Me) => Me()), y.delete(q);
    };
    if (q.getState().knownAtoms.add(i), c.state === "loading") {
      const pe = () => {
        var Me;
        ((Me = q.getState().nextTree) !== null && Me !== void 0 ? Me : q.getState().currentTree).atomValues.has(i) || ET(q, G);
      };
      c.contents.finally(pe);
    }
    const $ = (R = t.effects) !== null && R !== void 0 ? R : t.effects_UNSTABLE;
    if ($ != null) {
      let pe = function(re) {
        if (He && re.key === i) {
          const ve = Ae;
          return ve instanceof Ja ? M(q, F) : Bt(ve) ? Jf(ve.then((B) => B instanceof Ja ? (
            // Cast T to S
            c.toPromise()
          ) : B)) : (
            // $FlowFixMe[incompatible-call]
            Cn(ve)
          );
        }
        return CT(q, re);
      }, Me = function(re) {
        return pe(re).toPromise();
      }, Ye = function(re) {
        var ve;
        const B = xT(q, (ve = q.getState().nextTree) !== null && ve !== void 0 ? ve : q.getState().currentTree, re.key);
        return He && re.key === i && !(Ae instanceof Ja) ? {
          ...B,
          isSet: !0,
          loadable: pe(re)
        } : B;
      }, Ae = Ar, He = !0, bt = !1, Ce = null;
      const Fe = (re) => (ve) => {
        if (He) {
          const B = pe(G), ne = B.state === "hasValue" ? B.contents : Ar;
          Ae = typeof ve == "function" ? (
            // cast to any because we can't restrict T from being a function without losing support for opaque types
            ve(ne)
          ) : ve, Bt(Ae) && (Ae = Ae.then((J) => (Ce = {
            effect: re,
            value: J
          }, J)));
        } else {
          if (Bt(ve))
            throw Ze("Setting atoms to async values is not implemented.");
          typeof ve != "function" && (Ce = {
            effect: re,
            value: Bs(ve)
          }), _v(q, G, typeof ve == "function" ? (B) => {
            const ne = Bs(
              // cast to any because we can't restrict T from being a function without losing support for opaque types
              ve(B)
              // flowlint-line unclear-type:off
            );
            return Ce = {
              effect: re,
              value: ne
            }, ne;
          } : Bs(ve));
        }
      }, Te = (re) => () => Fe(re)(Ar), de = (re) => (ve) => {
        var B;
        const {
          release: ne
        } = q.subscribeToTransactions((J) => {
          var Z;
          let {
            currentTree: ye,
            previousTree: je
          } = J.getState();
          je || (Ni("Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"), je = ye);
          const me = (Z = ye.atomValues.get(i)) !== null && Z !== void 0 ? Z : c;
          if (me.state === "hasValue") {
            var ee, Ee, Pe, Ue;
            const St = me.contents, we = (ee = je.atomValues.get(i)) !== null && ee !== void 0 ? ee : c, ce = we.state === "hasValue" ? we.contents : Ar;
            ((Ee = Ce) === null || Ee === void 0 ? void 0 : Ee.effect) !== re || ((Pe = Ce) === null || Pe === void 0 ? void 0 : Pe.value) !== St ? ve(St, ce, !ye.atomValues.has(i)) : ((Ue = Ce) === null || Ue === void 0 ? void 0 : Ue.effect) === re && (Ce = null);
          }
        }, i);
        y.set(q, [...(B = y.get(q)) !== null && B !== void 0 ? B : [], ne]);
      };
      for (const re of $)
        try {
          const ve = re({
            node: G,
            storeID: q.storeID,
            parentStoreID_UNSTABLE: q.parentStoreID,
            trigger: ue,
            setSelf: Fe(re),
            resetSelf: Te(re),
            onSet: de(re),
            getPromise: Me,
            getLoadable: pe,
            getInfo_UNSTABLE: Ye
          });
          if (ve != null) {
            var K;
            y.set(q, [...(K = y.get(q)) !== null && K !== void 0 ? K : [], ve]);
          }
        } catch (ve) {
          Ae = ve, bt = !0;
        }
      if (He = !1, !(Ae instanceof Ja)) {
        var z;
        const re = bt ? Zf(Ae) : Bt(Ae) ? Jf(S(q, Ae)) : Cn(Bs(Ae));
        x(re.contents), F.atomValues.set(i, re), (z = q.getState().nextTree) === null || z === void 0 || z.atomValues.set(i, re);
      }
    }
    return se;
  }
  function M(q, F) {
    var ue, R;
    return (ue = (R = F.atomValues.get(i)) !== null && R !== void 0 ? R : p) !== null && ue !== void 0 ? ue : c;
  }
  function N(q, F) {
    if (F.atomValues.has(i))
      return Kt(F.atomValues.get(i));
    if (F.nonvalidatedAtoms.has(i)) {
      if (p != null)
        return p;
      if (l == null)
        return zd(`Tried to restore a persisted value for atom ${i} but it has no persistence settings.`), c;
      const ue = F.nonvalidatedAtoms.get(i), R = l.validator(ue, Ar);
      return p = R instanceof Ja ? c : Cn(R), p;
    } else
      return c;
  }
  function A() {
    p = void 0;
  }
  function I(q, F, ue) {
    if (F.atomValues.has(i)) {
      const R = Kt(F.atomValues.get(i));
      if (R.state === "hasValue" && ue === R.contents)
        return /* @__PURE__ */ new Map();
    } else if (!F.nonvalidatedAtoms.has(i) && ue instanceof Ja)
      return /* @__PURE__ */ new Map();
    return x(ue), p = void 0, (/* @__PURE__ */ new Map()).set(i, Cn(ue));
  }
  function g() {
    return jm(i) !== void 0 && u <= 0;
  }
  const G = ST({
    key: i,
    nodeType: "atom",
    peek: M,
    get: N,
    set: I,
    init: C,
    invalidate: A,
    shouldDeleteConfigOnRelease: g,
    dangerouslyAllowMutability: t.dangerouslyAllowMutability,
    persistence_UNSTABLE: t.persistence_UNSTABLE ? {
      type: t.persistence_UNSTABLE.type,
      backButton: t.persistence_UNSTABLE.backButton
    } : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: n
  });
  return G;
}
function lh(t) {
  if (process.env.NODE_ENV !== "production" && typeof t.key != "string")
    throw Ze("A key option with a unique string value must be provided when creating an atom.");
  const {
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    ...i
  } = t, l = "default" in t ? (
    // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
    t.default
  ) : new Promise(() => {
  });
  return RT(l) ? MT({
    ...i,
    default: l
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
  }) : OT({
    ...i,
    default: l
  });
}
function MT(t) {
  const i = lh({
    ...t,
    default: Ar,
    persistence_UNSTABLE: t.persistence_UNSTABLE === void 0 ? void 0 : {
      ...t.persistence_UNSTABLE,
      validator: (n) => n instanceof Ja ? n : Kt(t.persistence_UNSTABLE).validator(n, Ar)
    },
    // TODO Hack for now.
    effects: t.effects,
    // flowlint-line unclear-type: off
    effects_UNSTABLE: t.effects_UNSTABLE
    // flowlint-line unclear-type: off
  }), l = Hs({
    key: `${t.key}__withFallback`,
    get: ({
      get: n
    }) => {
      const u = n(i);
      return u instanceof Ja ? t.default : u;
    },
    // $FlowFixMe[incompatible-call]
    set: ({
      set: n
    }, u) => n(i, u),
    // This selector does not need to cache as it is a wrapper selector
    // and the selector within the wrapper selector will have a cache
    // option by default
    cachePolicy_UNSTABLE: {
      eviction: "most-recent"
    },
    dangerouslyAllowMutability: t.dangerouslyAllowMutability
  });
  return kT(l.key, jm(t.key)), l;
}
lh.value = (t) => new Pm(t);
var DT = lh;
class LT {
  constructor(i) {
    var l;
    tt(this, "_map", void 0), tt(this, "_keyMapper", void 0), this._map = /* @__PURE__ */ new Map(), this._keyMapper = (l = i == null ? void 0 : i.mapKey) !== null && l !== void 0 ? l : (n) => n;
  }
  size() {
    return this._map.size;
  }
  has(i) {
    return this._map.has(this._keyMapper(i));
  }
  get(i) {
    return this._map.get(this._keyMapper(i));
  }
  set(i, l) {
    this._map.set(this._keyMapper(i), l);
  }
  delete(i) {
    this._map.delete(this._keyMapper(i));
  }
  clear() {
    this._map.clear();
  }
}
var NT = {
  MapCache: LT
}, IT = NT.MapCache, PT = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MapCache: IT
});
const {
  LRUCache: xv
} = Mm, {
  MapCache: jT
} = PT, Wu = {
  equality: "reference",
  eviction: "none",
  maxSize: 1 / 0
};
function FT({
  equality: t = Wu.equality,
  eviction: i = Wu.eviction,
  maxSize: l = Wu.maxSize
} = Wu) {
  const n = UT(t);
  return BT(i, l, n);
}
function UT(t) {
  switch (t) {
    case "reference":
      return (i) => i;
    case "value":
      return (i) => ih(i);
  }
  throw Ze(`Unrecognized equality policy ${t}`);
}
function BT(t, i, l) {
  switch (t) {
    case "keep-all":
      return new jT({
        mapKey: l
      });
    case "lru":
      return new xv({
        mapKey: l,
        maxSize: Kt(i)
      });
    case "most-recent":
      return new xv({
        mapKey: l,
        maxSize: 1
      });
  }
  throw Ze(`Unrecognized eviction policy ${t}`);
}
var WT = FT;
const {
  setConfigDeletionHandler: qT
} = Yl;
let $T = 0;
function VT(t) {
  var i, l;
  const n = WT({
    equality: (i = (l = t.cachePolicyForParams_UNSTABLE) === null || l === void 0 ? void 0 : l.equality) !== null && i !== void 0 ? i : "value",
    eviction: "keep-all"
  });
  return (u) => {
    var b;
    let c;
    try {
      c = n.get(u);
    } catch (M) {
      throw Ze(`Problem with cache lookup for selector ${t.key}: ${M.message}`);
    }
    if (c != null)
      return c;
    const p = `${t.key}__selectorFamily/${(b = ih(u, {
      // It is possible to use functions in parameters if the user uses
      // a cache with reference equality thanks to the incrementing index.
      allowFunctions: !0
    })) !== null && b !== void 0 ? b : "void"}/${$T++}`, y = (M) => t.get(u)(M), x = t.cachePolicy_UNSTABLE, S = typeof t.retainedBy_UNSTABLE == "function" ? t.retainedBy_UNSTABLE(u) : t.retainedBy_UNSTABLE;
    let C;
    if (t.set != null) {
      const M = t.set;
      C = Hs({
        key: p,
        get: y,
        set: (A, I) => M(u)(A, I),
        cachePolicy_UNSTABLE: x,
        dangerouslyAllowMutability: t.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: S
      });
    } else
      C = Hs({
        key: p,
        get: y,
        cachePolicy_UNSTABLE: x,
        dangerouslyAllowMutability: t.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: S
      });
    return n.set(u, C), qT(C.key, () => {
      n.delete(u);
    }), C;
  };
}
var Gr = VT;
Gr({
  key: "__constant",
  get: (t) => () => t,
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
Gr({
  key: "__error",
  get: (t) => () => {
    throw Ze(t);
  },
  // TODO Why?
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
const {
  loadableWithError: Fm,
  loadableWithPromise: Um,
  loadableWithValue: Bm
} = ro;
function Oc(t, i) {
  const l = Array(i.length).fill(void 0), n = Array(i.length).fill(void 0);
  for (const [u, b] of i.entries())
    try {
      l[u] = t(b);
    } catch (c) {
      n[u] = c;
    }
  return [l, n];
}
function zT(t) {
  return t != null && !Bt(t);
}
function Mc(t) {
  return Array.isArray(t) ? t : Object.getOwnPropertyNames(t).map((i) => t[i]);
}
function Md(t, i) {
  return Array.isArray(t) ? i : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    Object.getOwnPropertyNames(t).reduce((l, n, u) => ({
      ...l,
      [n]: i[u]
    }), {})
  );
}
function Tn(t, i, l) {
  const n = l.map((u, b) => u == null ? Bm(i[b]) : Bt(u) ? Um(u) : Fm(u));
  return Md(t, n);
}
function YT(t, i) {
  return i.map((l, n) => (
    /**
     * it's important we use === undefined as opposed to == null, because the
     * resolved value of the async promise could be `null`, in which case we
     * don't want to use syncResults[idx], which would be undefined. If async
     * promise resolves to `undefined`, that's ok because `syncResults[idx]`
     * will also be `undefined`. That's a little hacky, but it works.
     */
    l === void 0 ? t[n] : l
  ));
}
Gr({
  key: "__waitForNone",
  get: (t) => ({
    get: i
  }) => {
    const l = Mc(t), [n, u] = Oc(i, l);
    return Tn(t, n, u);
  },
  dangerouslyAllowMutability: !0
});
Gr({
  key: "__waitForAny",
  get: (t) => ({
    get: i
  }) => {
    const l = Mc(t), [n, u] = Oc(i, l);
    return u.some((b) => !Bt(b)) ? Tn(t, n, u) : new Promise((b) => {
      for (const [c, p] of u.entries())
        Bt(p) && p.then((y) => {
          n[c] = y, u[c] = void 0, b(Tn(t, n, u));
        }).catch((y) => {
          u[c] = y, b(Tn(t, n, u));
        });
    });
  },
  dangerouslyAllowMutability: !0
});
Gr({
  key: "__waitForAll",
  get: (t) => ({
    get: i
  }) => {
    const l = Mc(t), [n, u] = Oc(i, l);
    if (u.every((c) => c == null))
      return Md(t, n);
    const b = u.find(zT);
    if (b != null)
      throw b;
    return Promise.all(u).then((c) => Md(t, YT(n, c)));
  },
  dangerouslyAllowMutability: !0
});
Gr({
  key: "__waitForAllSettled",
  get: (t) => ({
    get: i
  }) => {
    const l = Mc(t), [n, u] = Oc(i, l);
    return u.every((b) => !Bt(b)) ? Tn(t, n, u) : Promise.all(u.map((b, c) => Bt(b) ? b.then((p) => {
      n[c] = p, u[c] = void 0;
    }).catch((p) => {
      n[c] = void 0, u[c] = p;
    }) : null)).then(() => Tn(t, n, u));
  },
  dangerouslyAllowMutability: !0
});
Gr({
  key: "__noWait",
  get: (t) => ({
    get: i
  }) => {
    try {
      return Hs.value(Bm(i(t)));
    } catch (l) {
      return Hs.value(Bt(l) ? Um(l) : Fm(l));
    }
  },
  dangerouslyAllowMutability: !0
});
const {
  RecoilLoadable: OM
} = ro, {
  RecoilRoot: HT
} = th, {
  isRecoilValue: MM
} = Vr, {
  freshSnapshot: DM
} = Rc, {
  useRecoilState: GT,
  useRecoilValue: KT,
  useSetRecoilState: QT
} = o2;
var co = {
  // Recoil Root
  RecoilRoot: HT,
  // Atoms/Selectors
  atom: DT,
  // Hooks for Atoms/Selectors
  useRecoilValue: KT,
  useRecoilState: GT,
  useSetRecoilState: QT
}, ZT = co.RecoilRoot, ah = co.atom, rh = co.useRecoilValue, Aa = co.useRecoilState, nh = co.useSetRecoilState;
const Yn = ah({
  key: "VariableState",
  default: {}
});
var Wm = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Sv = vt.createContext && /* @__PURE__ */ vt.createContext(Wm), JT = ["attr", "size", "title"];
function XT(t, i) {
  if (t == null) return {};
  var l = eA(t, i), n, u;
  if (Object.getOwnPropertySymbols) {
    var b = Object.getOwnPropertySymbols(t);
    for (u = 0; u < b.length; u++)
      n = b[u], !(i.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (l[n] = t[n]);
  }
  return l;
}
function eA(t, i) {
  if (t == null) return {};
  var l = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (i.indexOf(n) >= 0) continue;
      l[n] = t[n];
    }
  return l;
}
function ic() {
  return ic = Object.assign ? Object.assign.bind() : function(t) {
    for (var i = 1; i < arguments.length; i++) {
      var l = arguments[i];
      for (var n in l)
        Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
    }
    return t;
  }, ic.apply(this, arguments);
}
function kv(t, i) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    i && (n = n.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), l.push.apply(l, n);
  }
  return l;
}
function lc(t) {
  for (var i = 1; i < arguments.length; i++) {
    var l = arguments[i] != null ? arguments[i] : {};
    i % 2 ? kv(Object(l), !0).forEach(function(n) {
      tA(t, n, l[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : kv(Object(l)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
    });
  }
  return t;
}
function tA(t, i, l) {
  return i = iA(i), i in t ? Object.defineProperty(t, i, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[i] = l, t;
}
function iA(t) {
  var i = lA(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function lA(t, i) {
  if (typeof t != "object" || !t) return t;
  var l = t[Symbol.toPrimitive];
  if (l !== void 0) {
    var n = l.call(t, i);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(t);
}
function qm(t) {
  return t && t.map((i, l) => /* @__PURE__ */ vt.createElement(i.tag, lc({
    key: l
  }, i.attr), qm(i.child)));
}
function zt(t) {
  return (i) => /* @__PURE__ */ vt.createElement(aA, ic({
    attr: lc({}, t.attr)
  }, i), qm(t.child));
}
function aA(t) {
  var i = (l) => {
    var {
      attr: n,
      size: u,
      title: b
    } = t, c = XT(t, JT), p = u || l.size || "1em", y;
    return l.className && (y = l.className), t.className && (y = (y ? y + " " : "") + t.className), /* @__PURE__ */ vt.createElement("svg", ic({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, n, c, {
      className: y,
      style: lc(lc({
        color: t.color || l.color
      }, l.style), t.style),
      height: p,
      width: p,
      xmlns: "http://www.w3.org/2000/svg"
    }), b && /* @__PURE__ */ vt.createElement("title", null, b), t.children);
  };
  return Sv !== void 0 ? /* @__PURE__ */ vt.createElement(Sv.Consumer, null, (l) => i(l)) : i(Wm);
}
function rA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m15 18-6-6 6-6" }, child: [] }] })(t);
}
function nA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m9 18 6-6-6-6" }, child: [] }] })(t);
}
function sA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M15 3h6v6" }, child: [] }, { tag: "path", attr: { d: "M10 14 21 3" }, child: [] }, { tag: "path", attr: { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }, child: [] }] })(t);
}
function oA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }, child: [] }] })(t);
}
function uA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }, child: [] }, { tag: "path", attr: { d: "M9 18c-4.51 2-5-2-7-2" }, child: [] }] })(t);
}
function cA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }, child: [] }] })(t);
}
function bA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }, child: [] }, { tag: "path", attr: { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }, child: [] }, { tag: "line", attr: { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" }, child: [] }] })(t);
}
function fA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }, child: [] }, { tag: "rect", attr: { width: "4", height: "12", x: "2", y: "9" }, child: [] }, { tag: "circle", attr: { cx: "4", cy: "4", r: "2" }, child: [] }] })(t);
}
function dA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "4", x2: "20", y1: "12", y2: "12" }, child: [] }, { tag: "line", attr: { x1: "4", x2: "20", y1: "6", y2: "6" }, child: [] }, { tag: "line", attr: { x1: "4", x2: "20", y1: "18", y2: "18" }, child: [] }] })(t);
}
function hA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M5 12h14" }, child: [] }] })(t);
}
function pA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M5 12h14" }, child: [] }, { tag: "path", attr: { d: "M12 5v14" }, child: [] }] })(t);
}
function Rv(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "circle", attr: { cx: "11", cy: "11", r: "8" }, child: [] }, { tag: "path", attr: { d: "m21 21-4.3-4.3" }, child: [] }] })(t);
}
function $m(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "circle", attr: { cx: "8", cy: "21", r: "1" }, child: [] }, { tag: "circle", attr: { cx: "19", cy: "21", r: "1" }, child: [] }, { tag: "path", attr: { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" }, child: [] }] })(t);
}
function vA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M3 6h18" }, child: [] }, { tag: "path", attr: { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }, child: [] }, { tag: "path", attr: { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }, child: [] }, { tag: "line", attr: { x1: "10", x2: "10", y1: "11", y2: "17" }, child: [] }, { tag: "line", attr: { x1: "14", x2: "14", y1: "11", y2: "17" }, child: [] }] })(t);
}
function Cv(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }, child: [] }] })(t);
}
function gA(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }, child: [] }, { tag: "path", attr: { d: "m10 15 5-3-5-3z" }, child: [] }] })(t);
}
const mA = (t) => {
  const {
    models: i,
    productId: l,
    onChangeDataProduct: n,
    onChangeQuantity: u,
    onSelectModel: b
  } = t;
  let c = {
    "--chakra-spacing-4": "4px"
  };
  const [p, y] = Rt(""), [x, S] = Rt(1), C = (M) => {
    y(M);
    let N = i.find((A) => A.id === M);
    N && n && (n == null || n(N), b == null || b(N));
  };
  return Xt(() => {
    y(l);
  }, [l]), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      Ds.Root,
      {
        orientation: "horizontal",
        align: "center",
        justify: "center",
        maxW: "sm",
        style: c,
        defaultValue: l,
        value: p,
        onValueChange: (M) => {
          C(M.value);
        },
        children: /* @__PURE__ */ m.jsx(Tp, { align: "stretch", children: i && i.map((M) => /* @__PURE__ */ m.jsxs(Ds.Item, { value: M.id, children: [
          /* @__PURE__ */ m.jsx(Ds.ItemHiddenInput, {}),
          /* @__PURE__ */ m.jsx(Ds.ItemControl, { children: /* @__PURE__ */ m.jsx(Ds.ItemText, { ms: "-4", children: M.name }) })
        ] }, M.id)) })
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "mt-2 flex justify-between items-center", children: [
      /* @__PURE__ */ m.jsx("div", { children: "Quantity" }),
      /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx(
        ca.Root,
        {
          defaultValue: "1",
          unstyled: !0,
          spinOnPress: !1,
          onValueChange: (M) => {
            (M == null ? void 0 : M.valueAsNumber) >= 0 && (S(M == null ? void 0 : M.valueAsNumber), u && u(M == null ? void 0 : M.valueAsNumber));
          },
          children: /* @__PURE__ */ m.jsxs(Tp, { gap: "2", children: [
            /* @__PURE__ */ m.jsx(ca.DecrementTrigger, { asChild: !0, disabled: x === 0, children: /* @__PURE__ */ m.jsx(el, { variant: "outline", size: "sm", children: /* @__PURE__ */ m.jsx(hA, {}) }) }),
            /* @__PURE__ */ m.jsx(
              ca.ValueText,
              {
                textAlign: "center",
                fontSize: "lg",
                minW: "3ch"
              }
            ),
            /* @__PURE__ */ m.jsx(ca.IncrementTrigger, { asChild: !0, children: /* @__PURE__ */ m.jsx(el, { variant: "outline", size: "sm", children: /* @__PURE__ */ m.jsx(pA, {}) }) })
          ] })
        }
      ) })
    ] })
  ] });
}, bo = ah({
  key: "ProductionState",
  default: {}
}), Dc = ah({
  key: "CartDrawerOpenState",
  default: !1
}), Vm = (t) => {
  var ue;
  const {
    product: i,
    keyAddToCart: l,
    openDrawer: n,
    saveCartToStore: u,
    onCloseDrawer: b
  } = t, { data: c } = jg(
    i == null ? void 0 : i.id,
    {
      storeId: i == null ? void 0 : i.storeId,
      isGettingModels: !0,
      isGettingDefaultModel: !0
    },
    {
      refetchOnWindowFocus: !1,
      enabled: !!(i != null && i.id)
    }
  ), [p, y] = Rt(null), [x, S] = Rt(1), [C, M] = Rt(null), [N, A] = Aa(bo), I = nh(Dc), g = (R) => {
    y((se) => ({
      ...se,
      ...R
    }));
  }, G = (R) => {
    S(R);
  }, q = ui(() => {
    var R;
    return (C == null ? void 0 : C.price) || ((R = c == null ? void 0 : c.defaultModel) == null ? void 0 : R.price) || 0;
  }, [C == null ? void 0 : C.price, (ue = c == null ? void 0 : c.defaultModel) == null ? void 0 : ue.price]);
  function F() {
    const R = JSON.parse(localStorage.getItem(l)) || [], se = R.find(($) => {
      var K;
      return $.id === c.id && ((K = $ == null ? void 0 : $.model) == null ? void 0 : K.id) === (p == null ? void 0 : p.id);
    });
    se ? se.quantity += x : R.push({
      quantity: x,
      id: c == null ? void 0 : c.id,
      name: c == null ? void 0 : c.name,
      image: c == null ? void 0 : c.image,
      storeId: c == null ? void 0 : c.storeId,
      descriptions: c == null ? void 0 : c.descriptions,
      price: c == null ? void 0 : c.price,
      onlinePrice: c == null ? void 0 : c.onlinePrice,
      weight: c == null ? void 0 : c.weight,
      remainedQuantity: c == null ? void 0 : c.remainedQuantity,
      hsCodeId: c == null ? void 0 : c.hsCodeId,
      hsCode: c == null ? void 0 : c.hsCode,
      model: {
        id: p == null ? void 0 : p.id,
        name: p == null ? void 0 : p.name,
        storeId: p == null ? void 0 : p.storeId,
        price: p == null ? void 0 : p.price,
        onlinePrice: p == null ? void 0 : p.onlinePrice,
        weight: p == null ? void 0 : p.weight,
        isDefault: p == null ? void 0 : p.isDefault
      }
    }), u && u(R), localStorage.setItem(l, JSON.stringify(R));
    try {
      A(($) => ({ ...$, [l]: R }));
    } catch {
    }
    try {
      I(!0);
    } catch {
    }
    b == null || b();
  }
  return Xt(() => {
    var R, se, $;
    y({
      ...c,
      price: ((R = c == null ? void 0 : c.defaultModel) == null ? void 0 : R.price) ?? (c == null ? void 0 : c.price) ?? 0
    }), ((se = c == null ? void 0 : c.models) == null ? void 0 : se.length) === 1 && M(($ = c == null ? void 0 : c.models) == null ? void 0 : $[0]);
  }, [c]), /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsx(
    Gt.Root,
    {
      placement: "bottom",
      open: n,
      onOpenChange: ({ open: R }) => {
        R || b == null || b();
      },
      children: /* @__PURE__ */ m.jsxs(Hv, { children: [
        /* @__PURE__ */ m.jsx(Gt.Backdrop, {}),
        /* @__PURE__ */ m.jsx(Gt.Positioner, { children: /* @__PURE__ */ m.jsxs(Gt.Content, { roundedTop: "l3", roundedBottom: void 0, children: [
          /* @__PURE__ */ m.jsx(Gt.Header, { children: /* @__PURE__ */ m.jsx(Gt.Title, { children: p == null ? void 0 : p.name }) }),
          /* @__PURE__ */ m.jsx(Gt.Body, { children: p && /* @__PURE__ */ m.jsx(Ea.Root, { variant: "outline", children: /* @__PURE__ */ m.jsxs(Gv, { children: [
            /* @__PURE__ */ m.jsx(
              Ur,
              {
                border: "1px solid red",
                src: (p == null ? void 0 : p.image) || "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg",
                alt: p == null ? void 0 : p.name,
                borderRadius: "md",
                h: "100px",
                w: "100px",
                fit: "contain"
              }
            ),
            /* @__PURE__ */ m.jsx(Ea.Title, { children: p == null ? void 0 : p.name }),
            /* @__PURE__ */ m.jsx("div", { className: "mb-2", children: /* @__PURE__ */ m.jsxs(
              Tt,
              {
                textStyle: "2xl",
                fontWeight: "medium",
                letterSpacing: "tight",
                mt: "2",
                children: [
                  "$",
                  `${hi.round(q / 100, 0)}`
                ]
              }
            ) }),
            /* @__PURE__ */ m.jsx(
              mA,
              {
                models: p == null ? void 0 : p.models,
                productId: p == null ? void 0 : p.defaultModelId,
                onChangeDataProduct: g,
                onChangeQuantity: G,
                onSelectModel: (R) => {
                  M(R);
                }
              }
            )
          ] }) }) }),
          /* @__PURE__ */ m.jsxs(Gt.Footer, { children: [
            /* @__PURE__ */ m.jsx(Gt.ActionTrigger, { asChild: !0, children: /* @__PURE__ */ m.jsx(dl, { variant: "outline", children: "Cancel" }) }),
            /* @__PURE__ */ m.jsx(
              dl,
              {
                colorPalette: "orange",
                onClick: () => {
                  F();
                },
                children: "Add to cart"
              }
            )
          ] }),
          /* @__PURE__ */ m.jsx(Gt.CloseTrigger, { asChild: !0, children: /* @__PURE__ */ m.jsx(eS, { size: "sm" }) })
        ] }) })
      ] })
    }
  ) });
}, sh = async (t, i) => (await Kn().get("/api/v1/categories", {
  params: t,
  signal: i
})).data, zm = async (t, i) => (await Kn().get("/api/v1/categories/tree", {
  params: t,
  signal: i
})).data, Ym = ({ name: t, value: i, onChange: l }) => {
  const [n, u] = Rt([]), [b, c] = Rt("");
  Xt(() => {
    const y = new AbortController(), x = "1791381b-a6b0-4771-a441-8b180392bf0a";
    return (async () => {
      try {
        const S = await sh({ storeId: x, limit: 200, query: b }, y.signal), N = ((g) => {
          var F, ue, R, se, $, K;
          if (!g) return [];
          if (Array.isArray(g)) return g;
          const G = [g == null ? void 0 : g.data, g == null ? void 0 : g.items, g == null ? void 0 : g.rows, g == null ? void 0 : g.records, g == null ? void 0 : g.list, g == null ? void 0 : g.results];
          for (const z of G) if (Array.isArray(z)) return z;
          const q = [(F = g == null ? void 0 : g.data) == null ? void 0 : F.data, (ue = g == null ? void 0 : g.data) == null ? void 0 : ue.items, (R = g == null ? void 0 : g.data) == null ? void 0 : R.rows, (se = g == null ? void 0 : g.data) == null ? void 0 : se.records, ($ = g == null ? void 0 : g.data) == null ? void 0 : $.list, (K = g == null ? void 0 : g.data) == null ? void 0 : K.results];
          for (const z of q) if (Array.isArray(z)) return z;
          return [];
        })(S == null ? void 0 : S.data).map((g) => {
          const G = (g == null ? void 0 : g.id) ?? (g == null ? void 0 : g.entityId) ?? (g == null ? void 0 : g.value) ?? (g == null ? void 0 : g._id) ?? (g == null ? void 0 : g.code) ?? (g == null ? void 0 : g.slug) ?? (g == null ? void 0 : g.uuid) ?? (g == null ? void 0 : g.uid) ?? (g == null ? void 0 : g.key) ?? (g == null ? void 0 : g.categoryId), q = (g == null ? void 0 : g.name) ?? (g == null ? void 0 : g.label) ?? (g == null ? void 0 : g.title) ?? (g == null ? void 0 : g.slug) ?? (g == null ? void 0 : g.code) ?? (g == null ? void 0 : g.displayName) ?? (g == null ? void 0 : g.text) ?? (g == null ? void 0 : g.categoryName) ?? (g == null ? void 0 : g.shortName);
          return {
            id: G != null ? String(G) : "",
            name: q != null && String(q).trim() !== "" ? String(q) : G != null ? String(G) : ""
          };
        }).filter((g) => g.id !== ""), A = /* @__PURE__ */ new Set(), I = N.filter((g) => A.has(g.id) ? !1 : (A.add(g.id), !0));
        u(I);
      } catch {
      }
    })(), () => y.abort();
  }, [b]);
  const p = ui(() => n.find((y) => String(y.id) === String(i)), [n, i]);
  return /* @__PURE__ */ m.jsx(zr, { label: "Parent Category", children: /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search...",
        value: b,
        onChange: (y) => c(y.target.value),
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 },
        name: `${t}__search`
      }
    ),
    /* @__PURE__ */ m.jsxs(
      "select",
      {
        name: t,
        value: i || "",
        onChange: (y) => l(y.target.value || void 0),
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 },
        children: [
          /* @__PURE__ */ m.jsx("option", { value: "", children: "-- None --" }),
          n.map((y) => /* @__PURE__ */ m.jsx("option", { value: y.id, children: y.name }, String(y.id)))
        ]
      }
    ),
    p ? /* @__PURE__ */ m.jsxs("div", { style: { color: "#666", fontSize: 12 }, children: [
      "Selected: ",
      p.name
    ] }) : null
  ] }) });
}, yA = ({ name: t, value: i, onChange: l }) => {
  const [n, u] = Rt([]), [b, c] = Rt(""), [p, y] = Rt(1), x = ui(() => i || [], [i]), S = "1791381b-a6b0-4771-a441-8b180392bf0a";
  Xt(() => {
    const A = new AbortController();
    return (async () => {
      try {
        const I = await jd(
          {
            storeId: S,
            query: b,
            isGettingModels: !0,
            isGettingDefaultModel: !0,
            limit: 20,
            page: p
          },
          A.signal
        ), G = (Array.isArray(I == null ? void 0 : I.data) ? I.data : []).map((q) => {
          var F;
          return {
            id: String(q.id),
            name: String(q.name || ""),
            image: q.image,
            price: ((F = q == null ? void 0 : q.defaultModel) == null ? void 0 : F.price) ?? (q == null ? void 0 : q.price)
          };
        });
        u(G);
      } catch {
      }
    })(), () => A.abort();
  }, [b, p, S]);
  const C = (A) => x.some((I) => I.id === A), M = (A) => {
    C(A.id) ? l(x.filter((I) => I.id !== A.id)) : l([...x, A]);
  }, N = () => l([]);
  return /* @__PURE__ */ m.jsx(zr, { label: "Choose Products", children: /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search...",
        value: b,
        onChange: (A) => {
          c(A.target.value), y(1);
        },
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 },
        name: `${t}__search`
      }
    ),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        style: {
          maxHeight: 220,
          overflow: "auto",
          border: "1px solid #eee",
          borderRadius: 4,
          padding: 6
        },
        children: [
          n.map((A) => /* @__PURE__ */ m.jsxs("label", { style: { display: "flex", alignItems: "center", gap: 8, padding: 4 }, children: [
            /* @__PURE__ */ m.jsx(
              "input",
              {
                type: "checkbox",
                checked: C(A.id),
                onChange: () => M(A),
                name: `${t}__${A.id}`
              }
            ),
            /* @__PURE__ */ m.jsx("span", { children: A.name })
          ] }, A.id)),
          !n.length && /* @__PURE__ */ m.jsx("div", { style: { color: "#999", fontSize: 12 }, children: "No products" })
        ]
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
      /* @__PURE__ */ m.jsx("button", { type: "button", onClick: N, style: { padding: "4px 8px" }, children: "Clear" }),
      /* @__PURE__ */ m.jsxs("div", { style: { marginLeft: "auto", display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ m.jsx("button", { type: "button", onClick: () => y((A) => Math.max(1, A - 1)), children: "Prev" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", onClick: () => y((A) => A + 1), children: "Next" })
      ] })
    ] }),
    !!x.length && /* @__PURE__ */ m.jsxs("div", { style: { color: "#666", fontSize: 12 }, children: [
      "Selected: ",
      x.map((A) => A.name).join(", ")
    ] })
  ] }) });
}, wA = (t, i) => {
  try {
    const l = new CustomEvent("analytics:" + t, { detail: i || {} });
    window.dispatchEvent(l);
  } catch {
  }
}, Ev = () => {
  if (typeof window > "u") return {};
  const t = new URLSearchParams(window.location.search), i = (n) => {
    const u = t.get(n);
    if (u == null || u === "") return;
    const b = Number(u);
    return Number.isFinite(b) ? b : void 0;
  }, l = (n) => {
    const u = t.get(n);
    if (u != null)
      return u === "1" || u === "true";
  };
  return {
    q: t.get("q") || void 0,
    page: i("page") || 1,
    sortBy: t.get("sortBy") || void 0,
    hideOutOfStock: l("hideOutOfStock"),
    priceMin: i("priceMin"),
    priceMax: i("priceMax"),
    categoryId: t.get("categoryId") || void 0
  };
}, Hm = (t) => {
  if (typeof window > "u") return;
  const i = new URL(window.location.href), l = i.searchParams;
  Object.entries(t).forEach(([n, u]) => {
    u == null || u === "" ? l.delete(n) : l.set(n, String(u));
  }), window.history.replaceState({}, "", i.toString());
}, _A = ({
  mobile: t,
  tablet: i,
  desktop: l,
  limit: n,
  categoryId: u,
  variableName: b,
  noResultsText: c,
  header: p,
  footer: y,
  selectionMode: x = "limit",
  productIds: S,
  selectedProducts: C = [],
  sortBy: M = "featured",
  hideOutOfStock: N = !1,
  bindSortVariableName: A,
  bindHideOutOfStockVariableName: I,
  bindCategoryVariableName: g,
  bindFiltersVariableName: G,
  enableUrlSync: q = !0,
  openMiniCartAfterAdd: F = !0,
  puck: ue
}) => {
  var je, me;
  const R = rh(Yn), [se, $] = Aa(bo), [K, z] = Rt(null), pe = nh(Dc), [Me, Ye] = Aa(Yn), Ae = "productCart", He = ui(() => b ? hi.get(R, b) : null, [b, R]), [bt, Ce] = Rt(
    He
  ), Fe = ui(
    () => hi.debounce((ee) => {
      Ce(ee);
    }, 800),
    []
  ), [Te, de] = Rt({
    search: bt,
    page: 1,
    limit: n,
    sortBy: M,
    hideOutOfStock: N,
    storeId: (je = ue == null ? void 0 : ue.metadata) == null ? void 0 : je.entityId
  }), re = ui(() => (G ? R[G] : void 0) || {}, [R, G]), { data: ve, isLoading: B } = x1(
    {
      ...Te,
      storeId: (me = ue == null ? void 0 : ue.metadata) == null ? void 0 : me.entityId,
      query: Te.search,
      isGettingModels: !0,
      isGettingDefaultModel: !0,
      limit: Te.limit,
      page: Te == null ? void 0 : Te.page,
      categoryId: x === "category" ? (g ? R[g] : void 0) || u : void 0,
      sortBy: Te.sortBy,
      hideOutOfStock: Te.hideOutOfStock,
      priceMin: re == null ? void 0 : re.priceMin,
      priceMax: re == null ? void 0 : re.priceMax
    },
    { keepPreviousData: !0 }
  ), ne = (ee) => {
    $({ ...se, [Ae]: ee || [] }), z(null), F && pe(!0);
  };
  let J = (ve == null ? void 0 : ve.data) || [];
  if (x === "ids" && S) {
    const ee = S.split(",").map((Pe) => Pe.trim()).filter(Boolean), Ee = ((ve == null ? void 0 : ve.data) || []).reduce(
      (Pe, Ue) => (Pe[String(Ue.id)] = Ue, Pe),
      {}
    );
    J = ee.map((Pe) => Ee[Pe] || { id: Pe, name: Pe });
  } else x === "select" && (C != null && C.length) && (J = C);
  const Z = (ee) => {
    var Ue;
    const Ee = ee == null ? void 0 : ee.remainedQuantity;
    if (typeof Ee == "number") return Ee <= 0;
    const Pe = Array.isArray(ee == null ? void 0 : ee.models) ? ee.models : [];
    return Pe.length > 0 ? !Pe.some((we) => Number(we == null ? void 0 : we.status) === 1) : ee != null && ee.defaultModel ? Number((Ue = ee == null ? void 0 : ee.defaultModel) == null ? void 0 : Ue.status) !== 1 : typeof (ee == null ? void 0 : ee.statusId) == "number" ? Number(ee.statusId) !== 1 : !1;
  };
  Te.hideOutOfStock && (J = (J || []).filter((ee) => !Z(ee)));
  const ye = (x === "limit" || x === "category") && (ve == null ? void 0 : ve.total) || J.length;
  return Xt(() => (Fe(He || ""), () => Fe.cancel()), [He, Fe]), Xt(() => {
    de((ee) => ({
      ...ee,
      search: bt,
      page: 1
    }));
  }, [bt]), Xt(() => {
    de((ee) => ({ ...ee, sortBy: M, hideOutOfStock: N }));
  }, [M, N]), Xt(() => {
    const ee = A ? hi.get(R, A) : void 0, Ee = I ? hi.get(R, I) : void 0;
    de((Pe) => ({
      ...Pe,
      sortBy: ee || Pe.sortBy,
      hideOutOfStock: Ee ?? Pe.hideOutOfStock
    }));
  }, [R, A, I]), Xt(() => {
    if (!(!q || typeof window > "u"))
      try {
        const ee = Ev();
        if (de((Ee) => ({
          ...Ee,
          search: ee.q ?? Ee.search,
          page: ee.page ?? Ee.page,
          sortBy: ee.sortBy ?? Ee.sortBy,
          hideOutOfStock: ee.hideOutOfStock ?? Ee.hideOutOfStock
        })), G) {
          const Ee = ee.priceMin, Pe = ee.priceMax;
          Ee != null || Pe != null;
        }
        g && ee.categoryId;
      } catch {
      }
  }, []), Xt(() => {
    if (!q || typeof window > "u") return;
    const ee = x === "category" ? (g ? R[g] : void 0) || u : void 0, Ee = re == null ? void 0 : re.priceMin, Pe = re == null ? void 0 : re.priceMax;
    Hm({
      q: Te.search || void 0,
      page: Te.page,
      sortBy: Te.sortBy,
      hideOutOfStock: Te.hideOutOfStock ? 1 : void 0,
      priceMin: Ee,
      priceMax: Pe,
      categoryId: ee
    });
  }, [
    Te.search,
    Te.page,
    Te.sortBy,
    Te.hideOutOfStock,
    re == null ? void 0 : re.priceMin,
    re == null ? void 0 : re.priceMax,
    x,
    R,
    g,
    u,
    q
  ]), Xt(() => {
    if (!(typeof window > "u"))
      try {
        const ee = Ev();
        G && (ee.priceMin != null || ee.priceMax != null) && Ye((Ee) => ({
          ...Ee,
          [G]: {
            ...Ee[G] || {},
            priceMin: ee.priceMin,
            priceMax: ee.priceMax
          }
        })), g && ee.categoryId && Ye((Ee) => ({
          ...Ee,
          [g]: ee.categoryId
        }));
      } catch {
      }
  }, []), Xt(() => {
    if (J != null && J.length)
      try {
        wA("product_impression", {
          ids: J.map((ee) => ee.id),
          total: ye,
          page: Te.page,
          sortBy: Te.sortBy
        });
      } catch {
      }
  }, [J == null ? void 0 : J.map((ee) => ee.id), Te.page, Te.sortBy]), !B && !(ve != null && ve.total) ? /* @__PURE__ */ m.jsx(ht, { children: /* @__PURE__ */ m.jsx(Tt, { children: c || "No results found" }) }) : /* @__PURE__ */ m.jsxs(ht, { children: [
    p ? /* @__PURE__ */ m.jsx(p, { minEmptyHeight: 40 }) : null,
    /* @__PURE__ */ m.jsxs(
      oc,
      {
        columns: {
          base: t,
          sm: i,
          md: i,
          lg: l
        },
        gap: 4,
        children: [
          B && (x === "limit" || x === "category") ? Array.from({ length: n }).map((ee, Ee) => /* @__PURE__ */ m.jsx(Hu, { height: "300px", borderRadius: "md" }, Ee)) : J == null ? void 0 : J.map((ee) => {
            const Ee = hi.get(
              ee,
              "defaultModel",
              hi.get(ee, "models.0")
            ), Pe = hi.get(Ee, "price", ee.price || 0), Ue = hi.get(
              Ee,
              "onlinePrice",
              ee.onlinePrice ?? Pe
            ), St = Number(Ue) < Number(Pe), we = Z(ee);
            return /* @__PURE__ */ m.jsxs(
              Ea.Root,
              {
                variant: "outline",
                position: "relative",
                children: [
                  St && /* @__PURE__ */ m.jsx(
                    ht,
                    {
                      position: "absolute",
                      top: "2",
                      left: "2",
                      px: "2",
                      py: "1",
                      bg: "red.500",
                      color: "white",
                      borderRadius: "sm",
                      fontSize: "xs",
                      children: "Sale"
                    }
                  ),
                  we && /* @__PURE__ */ m.jsx(
                    ht,
                    {
                      position: "absolute",
                      top: "2",
                      right: "2",
                      px: "2",
                      py: "1",
                      bg: "gray.600",
                      color: "white",
                      borderRadius: "sm",
                      fontSize: "xs",
                      children: "Out of stock"
                    }
                  ),
                  /* @__PURE__ */ m.jsxs(Gv, { children: [
                    /* @__PURE__ */ m.jsx(
                      Ur,
                      {
                        src: ee.image || "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg",
                        alt: ee.name,
                        borderRadius: "md"
                      }
                    ),
                    /* @__PURE__ */ m.jsx(Ea.Title, { children: ee.name }),
                    /* @__PURE__ */ m.jsx(ht, { mt: "2", children: St ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                      /* @__PURE__ */ m.jsxs(
                        Tt,
                        {
                          as: "span",
                          textStyle: "xl",
                          fontWeight: "semibold",
                          color: "red.500",
                          mr: "2",
                          children: [
                            "$",
                            hi.round((Ue || 0) / 100, 0)
                          ]
                        }
                      ),
                      /* @__PURE__ */ m.jsxs(
                        Tt,
                        {
                          as: "span",
                          textStyle: "sm",
                          color: "gray.500",
                          textDecoration: "line-through",
                          children: [
                            "$",
                            hi.round((Pe || 0) / 100, 0)
                          ]
                        }
                      )
                    ] }) : /* @__PURE__ */ m.jsxs(
                      Tt,
                      {
                        textStyle: "2xl",
                        fontWeight: "medium",
                        letterSpacing: "tight",
                        children: [
                          "$",
                          hi.round((Pe || 0) / 100, 0)
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ m.jsx(tS, { gap: "2", children: /* @__PURE__ */ m.jsx(
                    dl,
                    {
                      colorPalette: "orange",
                      disabled: we,
                      onClick: () => {
                        z(ee);
                      },
                      children: "Add to cart"
                    }
                  ) })
                ]
              },
              ee.id
            );
          }),
          /* @__PURE__ */ m.jsx(
            Vm,
            {
              openDrawer: !!K,
              product: K,
              keyAddToCart: Ae,
              saveCartToStore: ne,
              onCloseDrawer: () => z(null)
            }
          )
        ]
      }
    ),
    y ? /* @__PURE__ */ m.jsx(y, { minEmptyHeight: 40 }) : null,
    (x === "limit" || x === "category") && ye > 0 && /* @__PURE__ */ m.jsxs(
      Uf.Root,
      {
        mt: "6",
        count: ye,
        pageSize: Te.limit,
        page: Te.page,
        onPageChange: ({ page: ee }) => de((Ee) => ({
          ...Ee,
          page: ee
        })),
        children: [
          /* @__PURE__ */ m.jsx(Uf.PrevTrigger, {}),
          /* @__PURE__ */ m.jsx(Uf.NextTrigger, {})
        ]
      }
    )
  ] });
}, xA = {
  fields: {
    mobile: { type: "number", label: "Mobile (base)", min: 1, max: 2 },
    tablet: { type: "number", label: "Tablet", min: 1, max: 4 },
    desktop: { type: "number", label: "Desktop", min: 1, max: 6 },
    limit: { type: "number", label: "Limit", min: 1, max: 20 },
    header: { type: "slot", label: "Header Slot" },
    footer: { type: "slot", label: "Footer Slot" },
    selectionMode: {
      type: "radio",
      label: "Data Source",
      options: [
        { label: "By Limit (API)", value: "limit" },
        { label: "By Category", value: "category" },
        { label: "Pick Products", value: "select" },
        { label: "Enter IDs", value: "ids" }
      ]
    },
    openMiniCartAfterAdd: {
      type: "radio",
      label: "Open Mini Cart After Add",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    enableUrlSync: {
      type: "radio",
      label: "Enable URL Sync",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    bindCategoryVariableName: {
      type: "text",
      label: "Bind Category Var (optional)"
    },
    bindFiltersVariableName: {
      type: "text",
      label: "Bind Filters Var (optional)"
    },
    selectedProducts: {
      type: "custom",
      label: "Choose Products",
      render: yA
    },
    productIds: { type: "text", label: "Product IDs (comma-separated)" },
    categoryId: {
      type: "custom",
      label: "Category",
      render: Ym
    },
    sortBy: {
      type: "select",
      label: "Sort By",
      options: [
        { label: "Featured", value: "featured" },
        { label: "Newest", value: "newest" },
        { label: "Price: Low to High", value: "priceAsc" },
        { label: "Price: High to Low", value: "priceDesc" }
      ]
    },
    hideOutOfStock: {
      type: "radio",
      label: "Hide Out of Stock",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    variableName: {
      type: "text",
      label: "Variable Name to Use"
    },
    noResultsText: { type: "text", label: "No Results Message" }
    // searchSize: {
    //   type: "select",
    //   label: "Search Size",
    //   options: [
    //     { value: "middle", label: "Middle" },
    //     { value: "large", label: "Large" },
    //   ],
    // },
    // categoryId: {
    //   type: "custom",
    //   label: "Category",
    //   render: (props) => <CategoryField {...props} />,
    // },
  },
  defaultProps: {
    mobile: 2,
    tablet: 4,
    desktop: 4,
    limit: 10,
    header: [],
    footer: [],
    selectionMode: "limit",
    productIds: "",
    selectedProducts: [],
    categoryId: void 0,
    bindCategoryVariableName: "products.categoryId",
    bindFiltersVariableName: "products.filters",
    enableUrlSync: !0,
    openMiniCartAfterAdd: !0,
    sortBy: "featured",
    hideOutOfStock: !1,
    noResultsText: "No Results",
    variableName: void 0
  },
  render: ({
    puck: t,
    mobile: i,
    tablet: l,
    desktop: n,
    limit: u,
    noResultsText: b,
    categoryId: c,
    variableName: p,
    header: y,
    footer: x,
    selectionMode: S,
    productIds: C,
    selectedProducts: M,
    sortBy: N,
    hideOutOfStock: A,
    bindFiltersVariableName: I,
    enableUrlSync: g,
    bindCategoryVariableName: G,
    openMiniCartAfterAdd: q
  }) => /* @__PURE__ */ m.jsx(
    _A,
    {
      mobile: i,
      tablet: l,
      desktop: n,
      categoryId: c,
      variableName: p,
      limit: u,
      noResultsText: b,
      header: y,
      footer: x,
      selectionMode: S,
      productIds: C,
      selectedProducts: M,
      sortBy: N,
      hideOutOfStock: A,
      bindFiltersVariableName: I,
      enableUrlSync: g,
      bindCategoryVariableName: G,
      openMiniCartAfterAdd: q,
      puck: t
    }
  )
}, SA = Ti(xA), kA = {
  fields: {
    items: {
      type: "array",
      label: "Grid Columns",
      arrayFields: {
        label: {
          type: "text",
          label: "Column Label (for editor reference)"
        },
        content: {
          type: "slot"
        }
      },
      min: 1
      // At least 1 column
    },
    mobile: {
      label: "Mobile Settings",
      type: "object",
      objectFields: {
        columns: {
          label: "Number of Columns ",
          type: "number",
          min: 1,
          max: 12
        },
        gap: { label: "Gap (px)", type: "text" }
      }
    },
    tablet: {
      label: "Tablet Settings",
      type: "object",
      objectFields: {
        columns: {
          label: "Number of Columns (Tablet)",
          type: "number",
          min: 1,
          max: 12
        },
        gap: { label: "Gap (Tablet)", type: "text" }
      }
    },
    desktop: {
      label: "Desktop Settings",
      type: "object",
      objectFields: {
        columns: {
          label: "Number of Columns (Desktop)",
          type: "number",
          min: 1,
          max: 12
        },
        gap: { label: "Gap (Desktop)", type: "text" }
      }
    }
  },
  defaultProps: {
    items: [{ label: "Column 1", content: [] }],
    mobile: {
      columns: 1,
      gap: "4"
    },
    tablet: {
      columns: 1,
      gap: "4"
    },
    desktop: {
      columns: 1,
      gap: "4"
    },
    layout: {
      paddingTop: "0px",
      paddingRight: "0px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      marginTop: "0px",
      marginRight: "0px",
      marginBottom: "0px",
      marginLeft: "0px",
      bgColor: "transparent",
      bgImage: "",
      border: "none",
      borderRadius: "0"
    }
  },
  render: ({ items: t, mobile: i, tablet: l, desktop: n, bgImage: u }) => {
    const b = t.map((c, p) => /* @__PURE__ */ m.jsx(ht, { children: /* @__PURE__ */ m.jsx(c.content, { minEmptyHeight: 100 }) }, p));
    return /* @__PURE__ */ m.jsx(
      oc,
      {
        backgroundImage: u,
        columns: {
          base: i.columns,
          sm: l.columns,
          md: l.columns,
          lg: n.columns
        },
        gap: {
          base: i.gap,
          sm: l.gap,
          md: l.gap,
          lg: n.gap
        },
        children: b
      }
    );
  }
}, RA = Ti(kA), CA = {
  fields: {
    flexItems: {
      type: "array",
      label: "Flex Items",
      arrayFields: {
        label: { type: "text", label: "Item Label (for editor)" },
        flexProps: {
          type: "object",
          label: "Item Flex/Width",
          objectFields: {
            width: {
              type: "object",
              label: "Width (e.g., 100% or 200px)",
              objectFields: {
                base: {
                  type: "select",
                  label: "Mobile (base)",
                  options: [
                    { label: "Auto", value: "auto" },
                    { label: "Full (100%)", value: "100%" },
                    { label: "Half (50%)", value: "50%" },
                    { label: "Third (33.33%)", value: "33.33%" },
                    { label: "Quarter (25%)", value: "25%" }
                  ]
                },
                md: {
                  type: "select",
                  label: "Tablet",
                  options: [
                    { label: "Auto", value: "auto" },
                    { label: "Full (100%)", value: "100%" },
                    { label: "Half (50%)", value: "50%" },
                    { label: "Third (33.33%)", value: "33.33%" },
                    { label: "Quarter (25%)", value: "25%" }
                  ]
                },
                lg: {
                  type: "select",
                  label: "Desktop",
                  options: [
                    { label: "Auto", value: "auto" },
                    { label: "Full (100%)", value: "100%" },
                    { label: "Half (50%)", value: "50%" },
                    { label: "Third (33.33%)", value: "33.33%" },
                    { label: "Quarter (25%)", value: "25%" }
                  ]
                }
              }
            }
          }
        },
        content: {
          type: "slot"
        }
      },
      min: 1,
      max: 6,
      defaultItemProps: {
        label: "Item ",
        flexProps: {
          width: { base: "100%" },
          // Full on mobile, half on medium+
          flex: { base: 1 }
          // Optional: Grow to fill space
        },
        content: []
      }
    },
    flexOptions: {
      type: "object",
      label: "Flex Settings",
      objectFields: {
        direction: {
          type: "object",
          label: "Direction per Breakpoint",
          layout: "horizontal",
          objectFields: {
            base: {
              type: "radio",
              label: "Mobile (base)",
              options: [
                { label: "Row", value: "row" },
                { label: "Column", value: "column" }
              ]
            },
            md: {
              type: "radio",
              label: "Tablet",
              options: [
                { label: "Row", value: "row" },
                { label: "Column", value: "column" }
              ]
            },
            lg: {
              type: "radio",
              label: "Desktop",
              options: [
                { label: "Row", value: "row" },
                { label: "Column", value: "column" }
              ]
            }
          }
        },
        justify: {
          type: "select",
          label: "Justify Content",
          options: [
            { label: "Flex Start", value: "flex-start" },
            { label: "Flex End", value: "flex-end" },
            { label: "Center", value: "center" },
            { label: "Space Between", value: "space-between" },
            { label: "Space Around", value: "space-around" },
            { label: "Space Evenly", value: "space-evenly" }
          ]
        },
        align: {
          type: "select",
          label: "Align Items",
          options: [
            { label: "Stretch", value: "stretch" },
            { label: "Flex Start", value: "flex-start" },
            { label: "Flex End", value: "flex-end" },
            { label: "Center", value: "center" },
            { label: "Baseline", value: "baseline" }
          ]
        },
        gap: { type: "number", label: "Gap (px)", min: 0, max: 20 }
      }
    }
  },
  defaultProps: {
    flexItems: [
      {
        label: "Item 1",
        flexProps: {
          width: { base: "100%" },
          // Full on mobile, half on medium+
          flex: { base: 1 }
          // Optional: Grow to fill space
        },
        content: []
      },
      {
        label: "Item 2",
        flexProps: {
          width: { base: "100%" },
          flex: { base: 1 }
        },
        content: []
      }
    ],
    flexOptions: {
      direction: { base: "column", md: "row", lg: "row" },
      justify: { base: "flex-start" },
      align: { base: "stretch" },
      wrap: !0,
      gap: 4
    }
  },
  render: ({ flexItems: t, flexOptions: i }) => /* @__PURE__ */ m.jsx(
    Ut,
    {
      direction: i.direction,
      justify: i.justify,
      align: i.align,
      wrap: i.wrap ? "wrap" : "nowrap",
      gap: i.gap,
      children: t.map((l, n) => {
        var b, c, p, y;
        const { content: u } = l;
        return /* @__PURE__ */ m.jsx(
          ht,
          {
            flex: (b = l.flexProps) == null ? void 0 : b.flex,
            width: (c = l.flexProps) == null ? void 0 : c.width,
            minHeight: "100px",
            ...l.layoutProps,
            bg: (p = l.layoutProps) == null ? void 0 : p.bgColor,
            p: ((y = l.layoutProps) == null ? void 0 : y.p) || 2,
            children: /* @__PURE__ */ m.jsx(u, { minEmptyHeight: 100 })
          },
          n
        );
      })
    }
  )
}, EA = Ti(CA), TA = {
  fields: {
    content: {
      type: "slot"
    }
  },
  defaultProps: {
    content: []
    // Empty array for slot
  },
  render: ({ content: t }) => /* @__PURE__ */ m.jsx(t, { minEmptyHeight: 100 })
}, AA = Ti(TA), OA = "_Section_xwsd3_1", MA = {
  Section: OA,
  "Section-inner": "_Section-inner_xwsd3_13"
};
var Gm = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var i = {}.hasOwnProperty;
    function l() {
      for (var b = "", c = 0; c < arguments.length; c++) {
        var p = arguments[c];
        p && (b = u(b, n(p)));
      }
      return b;
    }
    function n(b) {
      if (typeof b == "string" || typeof b == "number")
        return b;
      if (typeof b != "object")
        return "";
      if (Array.isArray(b))
        return l.apply(null, b);
      if (b.toString !== Object.prototype.toString && !b.toString.toString().includes("[native code]"))
        return b.toString();
      var c = "";
      for (var p in b)
        i.call(b, p) && b[p] && (c = u(c, p));
      return c;
    }
    function u(b, c) {
      return c ? b ? b + " " + c : b + c : b;
    }
    t.exports ? (l.default = l, t.exports = l) : window.classNames = l;
  })();
})(Gm);
var DA = Gm.exports;
const LA = /* @__PURE__ */ Ld(DA), Km = (t, i, l = { baseClass: "" }) => (n = {}) => {
  if (typeof n == "string") {
    const u = n;
    return i[`${t}-${u}`] && l.baseClass + i[`${t}-${u}`] || "";
  } else if (typeof n == "object") {
    const u = n, b = {};
    for (const p in u)
      b[i[`${t}--${p}`]] = u[p];
    const c = i[t];
    return l.baseClass + LA({
      [c]: !!c,
      // only apply the class if it exists
      ...b
    });
  } else
    return l.baseClass + i[t] || "";
}, Tv = Km("Section", MA), oh = sc(
  ({ children: t, className: i, maxWidth: l = "1280px", style: n = {} }, u) => /* @__PURE__ */ m.jsx(
    "div",
    {
      className: `${Tv()}${i ? ` ${i}` : ""}`,
      style: {
        ...n
      },
      ref: u,
      children: /* @__PURE__ */ m.jsx("div", { className: Tv("inner"), style: { maxWidth: l }, children: t })
    }
  )
), NA = "_Heading_1474f_1", IA = {
  Heading: NA
}, PA = Km("Heading", IA), jA = [
  { value: "xxxl", label: "XXXL" },
  { value: "xxl", label: "XXL" },
  { value: "xl", label: "XL" },
  { value: "l", label: "L" },
  { value: "m", label: "M" },
  { value: "s", label: "S" },
  { value: "xs", label: "XS" }
], FA = [
  { label: "", value: "" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" }
], UA = {
  fields: {
    text: {
      type: "textarea",
      contentEditable: !0
    },
    size: {
      type: "select",
      options: jA
    },
    level: {
      type: "select",
      options: FA
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" }
      ]
    }
  },
  defaultProps: {
    align: "left",
    text: "Heading",
    size: "m"
  },
  render: ({ align: t, text: i, size: l, level: n }) => {
    const u = n ? `h${n}` : "span";
    return /* @__PURE__ */ m.jsx(oh, { children: /* @__PURE__ */ m.jsx(
      u,
      {
        className: PA({
          [l]: !0
        }),
        children: /* @__PURE__ */ m.jsx("span", { style: { display: "block", textAlign: t, width: "100%" }, children: i })
      }
    ) });
  }
}, BA = Ti(UA), WA = ({
  model: t,
  onModelChange: i,
  onFocus: l,
  onBlur: n,
  disabled: u,
  config: b = {},
  outputFormat: c = "html"
  // locale,
}) => {
  const p = Xs(null), [y, x] = Rt(null), [S, C] = Rt(
    t
  ), [M, N] = Rt(!1), A = async () => {
    if (typeof window > "u") return;
    const g = await import("./tinymce-B5iUYnxf.js").then((R) => R.t), G = g.default ?? g;
    await Promise.all([
      import("./index-CSYF4yTj.js").then((R) => R.i),
      import("./index-BefdeiXd.js").then((R) => R.i),
      import("./model-CbmpUU9W.js"),
      // Plugins
      import("./index-DYyWaWqJ.js").then((R) => R.i),
      import("./index-Ci06yj8u.js").then((R) => R.i),
      import("./index-DOqzZcxP.js").then((R) => R.i),
      import("./index-DrQW0O16.js").then((R) => R.i),
      import("./index-m--jrnb4.js").then((R) => R.i),
      import("./index-BZUMDdNJ.js").then((R) => R.i),
      import("./index-CRCRN3TY.js").then((R) => R.i),
      import("./index-DyAAGvoi.js").then((R) => R.i),
      import("./index-Dm2sDWA7.js").then((R) => R.i),
      import("./index-QsKuarUl.js").then((R) => R.i),
      import("./index-C8dytq-S.js").then((R) => R.i),
      import("./index-Sagq-meT.js").then((R) => R.i),
      import("./index-Bj45YDmw.js").then((R) => R.i),
      import("./index-1jDOormX.js").then((R) => R.i),
      import("./index-b7_fVg6r.js").then((R) => R.i),
      import("./index-BDDBMAp0.js").then((R) => R.i),
      import("./index-DiZss7rp.js").then((R) => R.i),
      import("./index-CeDrqyVm.js").then((R) => R.i),
      import("./index-D0MHR2uw.js").then((R) => R.i),
      import("./index-xGmiqU8g.js").then((R) => R.i),
      import("./index-B66m7X85.js").then((R) => R.i),
      import("./index-C_zixbQZ.js").then((R) => R.i),
      import("./index-DTlzwK2I.js").then((R) => R.i),
      import("./emojis-DaiTyaVh.js"),
      import("./plugin-DXkUeVWp.js"),
      // i18n for help plugin (optional)
      import("./zh_CN-v6c-WppU.js"),
      import("./en-Dxv05z02.js"),
      import("./de-CCAJfr3K.js"),
      // Skin CSS: keep as dynamic import so bundlers can extract CSS when supported
      Promise.resolve({         })
    ]);
    const {
      onLoaded: q,
      ...F
    } = b, ue = {
      inline: !1,
      skin: !1,
      min_height: 500,
      language: "en",
      branding: !1,
      plugins: [
        "advlist",
        "autolink",
        "autoresize",
        "link",
        "image",
        "lists",
        "charmap",
        "preview",
        "anchor",
        "pagebreak",
        "searchreplace",
        "wordcount",
        "visualblocks",
        "visualchars",
        "code",
        "fullscreen",
        "insertdatetime",
        "media",
        "nonbreaking",
        "table",
        "emoticons",
        "template",
        "help",
        "quickbars"
      ],
      toolbar: "undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media | fontfamily fontsize forecolor backcolor emoticons | print",
      quickbars_selection_toolbar: "bold italic | link h2 h3 blockquote",
      quickbars_insert_toolbar: "quickimage quicktable",
      menu: {
        file: {
          title: "File",
          items: "newdocument restoredraft | preview | print "
        },
        edit: {
          title: "Edit",
          items: "undo redo | cut copy paste | selectall | searchreplace"
        },
        view: {
          title: "View",
          items: "code | visualaid visualchars visualblocks | preview fullscreen"
        },
        insert: {
          title: "Insert",
          items: "image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime"
        },
        format: {
          title: "Format",
          items: "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontsize align | forecolor backcolor | removeformat"
        },
        tools: {
          title: "Tools",
          items: "code wordcount"
        },
        table: {
          title: "Table",
          items: "inserttable | cell row column | tableprops deletetable"
        }
        // help: { title: "Help", items: "help" },
      },
      paste_data_images: !0,
      content_style: [
        ".mce-content-body div.mce-resizehandle { background-color: #4099ff; border-color: #4099ff; border-style: solid; border-width: 1px; box-sizing: border-box; height: 10px; position: absolute; width: 10px; z-index: 1298 } .mce-content-body .mce-clonedresizable { cursor: default; opacity: .5; outline: 1px dashed #000; position: absolute; z-index: 10001 }",
        "[data-mce-bogus] video {display:none;}"
      ].join(`
`),
      // ...rest,
      target: p.current,
      readOnly: u,
      promotion: !1,
      setup: (R) => {
        x(R), R.on("init", (se) => {
          N(!0), I(R);
        });
      }
    };
    G.init(ue);
  }, I = (g) => {
    g.setContent(S || ""), i && g.on("change keyup setcontent", () => {
      const G = g.getContent({ format: c });
      G !== S && (C(G), i(G));
    }), l && g.on("focus", l), n && g.on("blur", (G) => {
      n(G, g.getContent({ format: c }));
    });
  };
  return Xt(() => (A(), () => {
    typeof window < "u" && y && import("./tinymce-B5iUYnxf.js").then((g) => g.t).then((g) => {
      (g.default ?? g).remove(y);
    });
  }), []), Xt(() => {
    M && t !== S && (y == null || y.setContent(t || ""), C(t));
  }, [t, M]), /* @__PURE__ */ m.jsx("textarea", { ref: p });
}, qA = {
  type: "custom",
  render: ({
    name: t,
    onChange: i,
    value: l,
    label: n
  }) => /* @__PURE__ */ m.jsx(zr, { label: n || "Content", children: /* @__PURE__ */ m.jsx(
    WA,
    {
      name: t,
      model: l || "",
      onBlur: (u, b) => {
        i(b);
      }
    }
  ) })
}, $A = {
  fields: {
    text: {
      label: "Content",
      ...qA
    },
    maxWidth: { type: "text" },
    href: {
      label: "Link",
      type: "text"
    }
  },
  defaultProps: {
    text: "Text",
    href: ""
  },
  render: ({ text: t, maxWidth: i, href: l }) => /* @__PURE__ */ m.jsx(oh, { maxWidth: i, children: /* @__PURE__ */ m.jsx("a", { href: l, children: /* @__PURE__ */ m.jsx("article", { className: "prose max-w-none lg:prose-xl", children: /* @__PURE__ */ m.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) }) }) })
}, VA = Ti($A), zA = {
  defaultProps: {},
  render: ({ puck: { renderDropZone: t } }) => /* @__PURE__ */ m.jsx(
    "div",
    {
      style: { display: "flex", flexDirection: "column", minHeight: "100vh" },
      children: /* @__PURE__ */ m.jsx(t, { zone: "default-zone", style: { flexGrow: 1 } })
    }
  )
};
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YA = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), HA = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, l, n) => n ? n.toUpperCase() : l.toLowerCase()
), Av = (t) => {
  const i = HA(t);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, Qm = (...t) => t.filter((i, l, n) => !!i && i.trim() !== "" && n.indexOf(i) === l).join(" ").trim(), GA = (t) => {
  for (const i in t)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
};
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QA = sc(
  ({
    color: t = "currentColor",
    size: i = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: n,
    className: u = "",
    children: b,
    iconNode: c,
    ...p
  }, y) => Vs(
    "svg",
    {
      ref: y,
      ...KA,
      width: i,
      height: i,
      stroke: t,
      strokeWidth: n ? Number(l) * 24 / Number(i) : l,
      className: Qm("lucide", u),
      ...!b && !GA(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...c.map(([x, S]) => Vs(x, S)),
      ...Array.isArray(b) ? b : [b]
    ]
  )
);
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZA = (t, i) => {
  const l = sc(
    ({ className: n, ...u }, b) => Vs(QA, {
      ref: b,
      iconNode: i,
      className: Qm(
        `lucide-${YA(Av(t))}`,
        `lucide-${t}`,
        n
      ),
      ...u
    })
  );
  return l.displayName = Av(t), l;
};
/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JA = [
  ["path", { d: "m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16", key: "xik6mr" }],
  ["path", { d: "M15.697 14h5.606", key: "1stdlc" }],
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }],
  ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }]
], ac = ZA("a-large-small", JA), Gs = (t) => t != null && t.iconName ? /* @__PURE__ */ m.jsx(
  "i",
  {
    className: t == null ? void 0 : t.iconName,
    style: {
      fontSize: `${t == null ? void 0 : t.mf_font_size}`,
      color: `${t == null ? void 0 : t.mf_color}`
    }
  }
) : /* @__PURE__ */ m.jsx(m.Fragment, {}), XA = [
  {
    value: "bi bi-0-circle",
    label: "0-circle"
  },
  {
    value: "bi bi-0-circle-fill",
    label: "0-circle-fill"
  },
  {
    value: "bi bi-0-square",
    label: "0-square"
  },
  {
    value: "bi bi-0-square-fill",
    label: "0-square-fill"
  },
  {
    value: "bi bi-1-circle",
    label: "1-circle"
  },
  {
    value: "bi bi-1-circle-fill",
    label: "1-circle-fill"
  },
  {
    value: "bi bi-1-square",
    label: "1-square"
  },
  {
    value: "bi bi-1-square-fill",
    label: "1-square-fill"
  },
  {
    value: "bi bi-123",
    label: "123"
  },
  {
    value: "bi bi-2-circle",
    label: "2-circle"
  },
  {
    value: "bi bi-2-circle-fill",
    label: "2-circle-fill"
  },
  {
    value: "bi bi-2-square",
    label: "2-square"
  },
  {
    value: "bi bi-2-square-fill",
    label: "2-square-fill"
  },
  {
    value: "bi bi-3-circle",
    label: "3-circle"
  },
  {
    value: "bi bi-3-circle-fill",
    label: "3-circle-fill"
  },
  {
    value: "bi bi-3-square",
    label: "3-square"
  },
  {
    value: "bi bi-3-square-fill",
    label: "3-square-fill"
  },
  {
    value: "bi bi-4-circle",
    label: "4-circle"
  },
  {
    value: "bi bi-4-circle-fill",
    label: "4-circle-fill"
  },
  {
    value: "bi bi-4-square",
    label: "4-square"
  },
  {
    value: "bi bi-4-square-fill",
    label: "4-square-fill"
  },
  {
    value: "bi bi-5-circle",
    label: "5-circle"
  },
  {
    value: "bi bi-5-circle-fill",
    label: "5-circle-fill"
  },
  {
    value: "bi bi-5-square",
    label: "5-square"
  },
  {
    value: "bi bi-5-square-fill",
    label: "5-square-fill"
  },
  {
    value: "bi bi-6-circle",
    label: "6-circle"
  },
  {
    value: "bi bi-6-circle-fill",
    label: "6-circle-fill"
  },
  {
    value: "bi bi-6-square",
    label: "6-square"
  },
  {
    value: "bi bi-6-square-fill",
    label: "6-square-fill"
  },
  {
    value: "bi bi-7-circle",
    label: "7-circle"
  },
  {
    value: "bi bi-7-circle-fill",
    label: "7-circle-fill"
  },
  {
    value: "bi bi-7-square",
    label: "7-square"
  },
  {
    value: "bi bi-7-square-fill",
    label: "7-square-fill"
  },
  {
    value: "bi bi-8-circle",
    label: "8-circle"
  },
  {
    value: "bi bi-8-circle-fill",
    label: "8-circle-fill"
  },
  {
    value: "bi bi-8-square",
    label: "8-square"
  },
  {
    value: "bi bi-8-square-fill",
    label: "8-square-fill"
  },
  {
    value: "bi bi-9-circle",
    label: "9-circle"
  },
  {
    value: "bi bi-9-circle-fill",
    label: "9-circle-fill"
  },
  {
    value: "bi bi-9-square",
    label: "9-square"
  },
  {
    value: "bi bi-9-square-fill",
    label: "9-square-fill"
  },
  {
    value: "bi bi-activity",
    label: "activity"
  },
  {
    value: "bi bi-airplane",
    label: "airplane"
  },
  {
    value: "bi bi-airplane-engines",
    label: "airplane-engines"
  },
  {
    value: "bi bi-airplane-engines-fill",
    label: "airplane-engines-fill"
  },
  {
    value: "bi bi-airplane-fill",
    label: "airplane-fill"
  },
  {
    value: "bi bi-alarm",
    label: "alarm"
  },
  {
    value: "bi bi-alarm-fill",
    label: "alarm-fill"
  },
  {
    value: "bi bi-alexa",
    label: "alexa"
  },
  {
    value: "bi bi-align-bottom",
    label: "align-bottom"
  },
  {
    value: "bi bi-align-center",
    label: "align-center"
  },
  {
    value: "bi bi-align-end",
    label: "align-end"
  },
  {
    value: "bi bi-align-middle",
    label: "align-middle"
  },
  {
    value: "bi bi-align-start",
    label: "align-start"
  },
  {
    value: "bi bi-align-top",
    label: "align-top"
  },
  {
    value: "bi bi-alipay",
    label: "alipay"
  },
  {
    value: "bi bi-alphabet",
    label: "alphabet"
  },
  {
    value: "bi bi-alphabet-uppercase",
    label: "alphabet-uppercase"
  },
  {
    value: "bi bi-alt",
    label: "alt"
  },
  {
    value: "bi bi-amazon",
    label: "amazon"
  },
  {
    value: "bi bi-amd",
    label: "amd"
  },
  {
    value: "bi bi-android",
    label: "android"
  },
  {
    value: "bi bi-android2",
    label: "android2"
  },
  {
    value: "bi bi-app",
    label: "app"
  },
  {
    value: "bi bi-app-indicator",
    label: "app-indicator"
  },
  {
    value: "bi bi-apple",
    label: "apple"
  },
  {
    value: "bi bi-archive",
    label: "archive"
  },
  {
    value: "bi bi-archive-fill",
    label: "archive-fill"
  },
  {
    value: "bi bi-arrow-90deg-down",
    label: "arrow-90deg-down"
  },
  {
    value: "bi bi-arrow-90deg-left",
    label: "arrow-90deg-left"
  },
  {
    value: "bi bi-arrow-90deg-right",
    label: "arrow-90deg-right"
  },
  {
    value: "bi bi-arrow-90deg-up",
    label: "arrow-90deg-up"
  },
  {
    value: "bi bi-arrow-bar-down",
    label: "arrow-bar-down"
  },
  {
    value: "bi bi-arrow-bar-left",
    label: "arrow-bar-left"
  },
  {
    value: "bi bi-arrow-bar-right",
    label: "arrow-bar-right"
  },
  {
    value: "bi bi-arrow-bar-up",
    label: "arrow-bar-up"
  },
  {
    value: "bi bi-arrow-clockwise",
    label: "arrow-clockwise"
  },
  {
    value: "bi bi-arrow-counterclockwise",
    label: "arrow-counterclockwise"
  },
  {
    value: "bi bi-arrow-down",
    label: "arrow-down"
  },
  {
    value: "bi bi-arrow-down-circle",
    label: "arrow-down-circle"
  },
  {
    value: "bi bi-arrow-down-circle-fill",
    label: "arrow-down-circle-fill"
  },
  {
    value: "bi bi-arrow-down-left-circle",
    label: "arrow-down-left-circle"
  },
  {
    value: "bi bi-arrow-down-left-circle-fill",
    label: "arrow-down-left-circle-fill"
  },
  {
    value: "bi bi-arrow-down-left-square",
    label: "arrow-down-left-square"
  },
  {
    value: "bi bi-arrow-down-left-square-fill",
    label: "arrow-down-left-square-fill"
  },
  {
    value: "bi bi-arrow-down-right-circle",
    label: "arrow-down-right-circle"
  },
  {
    value: "bi bi-arrow-down-right-circle-fill",
    label: "arrow-down-right-circle-fill"
  },
  {
    value: "bi bi-arrow-down-right-square",
    label: "arrow-down-right-square"
  },
  {
    value: "bi bi-arrow-down-right-square-fill",
    label: "arrow-down-right-square-fill"
  },
  {
    value: "bi bi-arrow-down-square",
    label: "arrow-down-square"
  },
  {
    value: "bi bi-arrow-down-square-fill",
    label: "arrow-down-square-fill"
  },
  {
    value: "bi bi-arrow-down-left",
    label: "arrow-down-left"
  },
  {
    value: "bi bi-arrow-down-right",
    label: "arrow-down-right"
  },
  {
    value: "bi bi-arrow-down-short",
    label: "arrow-down-short"
  },
  {
    value: "bi bi-arrow-down-up",
    label: "arrow-down-up"
  },
  {
    value: "bi bi-arrow-left",
    label: "arrow-left"
  },
  {
    value: "bi bi-arrow-left-circle",
    label: "arrow-left-circle"
  },
  {
    value: "bi bi-arrow-left-circle-fill",
    label: "arrow-left-circle-fill"
  },
  {
    value: "bi bi-arrow-left-square",
    label: "arrow-left-square"
  },
  {
    value: "bi bi-arrow-left-square-fill",
    label: "arrow-left-square-fill"
  },
  {
    value: "bi bi-arrow-left-right",
    label: "arrow-left-right"
  },
  {
    value: "bi bi-arrow-left-short",
    label: "arrow-left-short"
  },
  {
    value: "bi bi-arrow-repeat",
    label: "arrow-repeat"
  },
  {
    value: "bi bi-arrow-return-left",
    label: "arrow-return-left"
  },
  {
    value: "bi bi-arrow-return-right",
    label: "arrow-return-right"
  },
  {
    value: "bi bi-arrow-right",
    label: "arrow-right"
  },
  {
    value: "bi bi-arrow-right-circle",
    label: "arrow-right-circle"
  },
  {
    value: "bi bi-arrow-right-circle-fill",
    label: "arrow-right-circle-fill"
  },
  {
    value: "bi bi-arrow-right-square",
    label: "arrow-right-square"
  },
  {
    value: "bi bi-arrow-right-square-fill",
    label: "arrow-right-square-fill"
  },
  {
    value: "bi bi-arrow-right-short",
    label: "arrow-right-short"
  },
  {
    value: "bi bi-arrow-through-heart",
    label: "arrow-through-heart"
  },
  {
    value: "bi bi-arrow-through-heart-fill",
    label: "arrow-through-heart-fill"
  },
  {
    value: "bi bi-arrow-up",
    label: "arrow-up"
  },
  {
    value: "bi bi-arrow-up-circle",
    label: "arrow-up-circle"
  },
  {
    value: "bi bi-arrow-up-circle-fill",
    label: "arrow-up-circle-fill"
  },
  {
    value: "bi bi-arrow-up-left-circle",
    label: "arrow-up-left-circle"
  },
  {
    value: "bi bi-arrow-up-left-circle-fill",
    label: "arrow-up-left-circle-fill"
  },
  {
    value: "bi bi-arrow-up-left-square",
    label: "arrow-up-left-square"
  },
  {
    value: "bi bi-arrow-up-left-square-fill",
    label: "arrow-up-left-square-fill"
  },
  {
    value: "bi bi-arrow-up-right-circle",
    label: "arrow-up-right-circle"
  },
  {
    value: "bi bi-arrow-up-right-circle-fill",
    label: "arrow-up-right-circle-fill"
  },
  {
    value: "bi bi-arrow-up-right-square",
    label: "arrow-up-right-square"
  },
  {
    value: "bi bi-arrow-up-right-square-fill",
    label: "arrow-up-right-square-fill"
  },
  {
    value: "bi bi-arrow-up-square",
    label: "arrow-up-square"
  },
  {
    value: "bi bi-arrow-up-square-fill",
    label: "arrow-up-square-fill"
  },
  {
    value: "bi bi-arrow-up-left",
    label: "arrow-up-left"
  },
  {
    value: "bi bi-arrow-up-right",
    label: "arrow-up-right"
  },
  {
    value: "bi bi-arrow-up-short",
    label: "arrow-up-short"
  },
  {
    value: "bi bi-arrows",
    label: "arrows"
  },
  {
    value: "bi bi-arrows-angle-contract",
    label: "arrows-angle-contract"
  },
  {
    value: "bi bi-arrows-angle-expand",
    label: "arrows-angle-expand"
  },
  {
    value: "bi bi-arrows-collapse",
    label: "arrows-collapse"
  },
  {
    value: "bi bi-arrows-collapse-vertical",
    label: "arrows-collapse-vertical"
  },
  {
    value: "bi bi-arrows-expand",
    label: "arrows-expand"
  },
  {
    value: "bi bi-arrows-expand-vertical",
    label: "arrows-expand-vertical"
  },
  {
    value: "bi bi-arrows-fullscreen",
    label: "arrows-fullscreen"
  },
  {
    value: "bi bi-arrows-move",
    label: "arrows-move"
  },
  {
    value: "bi bi-arrows-vertical",
    label: "arrows-vertical"
  },
  {
    value: "bi bi-aspect-ratio",
    label: "aspect-ratio"
  },
  {
    value: "bi bi-aspect-ratio-fill",
    label: "aspect-ratio-fill"
  },
  {
    value: "bi bi-asterisk",
    label: "asterisk"
  },
  {
    value: "bi bi-at",
    label: "at"
  },
  {
    value: "bi bi-award",
    label: "award"
  },
  {
    value: "bi bi-award-fill",
    label: "award-fill"
  },
  {
    value: "bi bi-back",
    label: "back"
  },
  {
    value: "bi bi-backpack",
    label: "backpack"
  },
  {
    value: "bi bi-backpack-fill",
    label: "backpack-fill"
  },
  {
    value: "bi bi-backpack2",
    label: "backpack2"
  },
  {
    value: "bi bi-backpack2-fill",
    label: "backpack2-fill"
  },
  {
    value: "bi bi-backpack3",
    label: "backpack3"
  },
  {
    value: "bi bi-backpack3-fill",
    label: "backpack3-fill"
  },
  {
    value: "bi bi-backpack4",
    label: "backpack4"
  },
  {
    value: "bi bi-backpack4-fill",
    label: "backpack4-fill"
  },
  {
    value: "bi bi-backspace",
    label: "backspace"
  },
  {
    value: "bi bi-backspace-fill",
    label: "backspace-fill"
  },
  {
    value: "bi bi-backspace-reverse",
    label: "backspace-reverse"
  },
  {
    value: "bi bi-backspace-reverse-fill",
    label: "backspace-reverse-fill"
  },
  {
    value: "bi bi-badge-3d",
    label: "badge-3d"
  },
  {
    value: "bi bi-badge-3d-fill",
    label: "badge-3d-fill"
  },
  {
    value: "bi bi-badge-4k",
    label: "badge-4k"
  },
  {
    value: "bi bi-badge-4k-fill",
    label: "badge-4k-fill"
  },
  {
    value: "bi bi-badge-8k",
    label: "badge-8k"
  },
  {
    value: "bi bi-badge-8k-fill",
    label: "badge-8k-fill"
  },
  {
    value: "bi bi-badge-ad",
    label: "badge-ad"
  },
  {
    value: "bi bi-badge-ad-fill",
    label: "badge-ad-fill"
  },
  {
    value: "bi bi-badge-ar",
    label: "badge-ar"
  },
  {
    value: "bi bi-badge-ar-fill",
    label: "badge-ar-fill"
  },
  {
    value: "bi bi-badge-cc",
    label: "badge-cc"
  },
  {
    value: "bi bi-badge-cc-fill",
    label: "badge-cc-fill"
  },
  {
    value: "bi bi-badge-hd",
    label: "badge-hd"
  },
  {
    value: "bi bi-badge-hd-fill",
    label: "badge-hd-fill"
  },
  {
    value: "bi bi-badge-sd",
    label: "badge-sd"
  },
  {
    value: "bi bi-badge-sd-fill",
    label: "badge-sd-fill"
  },
  {
    value: "bi bi-badge-tm",
    label: "badge-tm"
  },
  {
    value: "bi bi-badge-tm-fill",
    label: "badge-tm-fill"
  },
  {
    value: "bi bi-badge-vo",
    label: "badge-vo"
  },
  {
    value: "bi bi-badge-vo-fill",
    label: "badge-vo-fill"
  },
  {
    value: "bi bi-badge-vr",
    label: "badge-vr"
  },
  {
    value: "bi bi-badge-vr-fill",
    label: "badge-vr-fill"
  },
  {
    value: "bi bi-badge-wc",
    label: "badge-wc"
  },
  {
    value: "bi bi-badge-wc-fill",
    label: "badge-wc-fill"
  },
  {
    value: "bi bi-bag",
    label: "bag"
  },
  {
    value: "bi bi-bag-check",
    label: "bag-check"
  },
  {
    value: "bi bi-bag-check-fill",
    label: "bag-check-fill"
  },
  {
    value: "bi bi-bag-dash",
    label: "bag-dash"
  },
  {
    value: "bi bi-bag-dash-fill",
    label: "bag-dash-fill"
  },
  {
    value: "bi bi-bag-fill",
    label: "bag-fill"
  },
  {
    value: "bi bi-bag-heart",
    label: "bag-heart"
  },
  {
    value: "bi bi-bag-heart-fill",
    label: "bag-heart-fill"
  },
  {
    value: "bi bi-bag-plus",
    label: "bag-plus"
  },
  {
    value: "bi bi-bag-plus-fill",
    label: "bag-plus-fill"
  },
  {
    value: "bi bi-bag-x",
    label: "bag-x"
  },
  {
    value: "bi bi-bag-x-fill",
    label: "bag-x-fill"
  },
  {
    value: "bi bi-balloon",
    label: "balloon"
  },
  {
    value: "bi bi-balloon-fill",
    label: "balloon-fill"
  },
  {
    value: "bi bi-balloon-heart",
    label: "balloon-heart"
  },
  {
    value: "bi bi-balloon-heart-fill",
    label: "balloon-heart-fill"
  },
  {
    value: "bi bi-ban",
    label: "ban"
  },
  {
    value: "bi bi-ban-fill",
    label: "ban-fill"
  },
  {
    value: "bi bi-bandaid",
    label: "bandaid"
  },
  {
    value: "bi bi-bandaid-fill",
    label: "bandaid-fill"
  },
  {
    value: "bi bi-bank",
    label: "bank"
  },
  {
    value: "bi bi-bank2",
    label: "bank2"
  },
  {
    value: "bi bi-bar-chart",
    label: "bar-chart"
  },
  {
    value: "bi bi-bar-chart-fill",
    label: "bar-chart-fill"
  },
  {
    value: "bi bi-bar-chart-line",
    label: "bar-chart-line"
  },
  {
    value: "bi bi-bar-chart-line-fill",
    label: "bar-chart-line-fill"
  },
  {
    value: "bi bi-bar-chart-steps",
    label: "bar-chart-steps"
  },
  {
    value: "bi bi-basket",
    label: "basket"
  },
  {
    value: "bi bi-basket-fill",
    label: "basket-fill"
  },
  {
    value: "bi bi-basket2",
    label: "basket2"
  },
  {
    value: "bi bi-basket2-fill",
    label: "basket2-fill"
  },
  {
    value: "bi bi-basket3",
    label: "basket3"
  },
  {
    value: "bi bi-basket3-fill",
    label: "basket3-fill"
  },
  {
    value: "bi bi-battery",
    label: "battery"
  },
  {
    value: "bi bi-battery-charging",
    label: "battery-charging"
  },
  {
    value: "bi bi-battery-full",
    label: "battery-full"
  },
  {
    value: "bi bi-battery-half",
    label: "battery-half"
  },
  {
    value: "bi bi-behance",
    label: "behance"
  },
  {
    value: "bi bi-bell",
    label: "bell"
  },
  {
    value: "bi bi-bell-fill",
    label: "bell-fill"
  },
  {
    value: "bi bi-bell-slash",
    label: "bell-slash"
  },
  {
    value: "bi bi-bell-slash-fill",
    label: "bell-slash-fill"
  },
  {
    value: "bi bi-bezier",
    label: "bezier"
  },
  {
    value: "bi bi-bezier2",
    label: "bezier2"
  },
  {
    value: "bi bi-bicycle",
    label: "bicycle"
  },
  {
    value: "bi bi-bing",
    label: "bing"
  },
  {
    value: "bi bi-binoculars",
    label: "binoculars"
  },
  {
    value: "bi bi-binoculars-fill",
    label: "binoculars-fill"
  },
  {
    value: "bi bi-blockquote-left",
    label: "blockquote-left"
  },
  {
    value: "bi bi-blockquote-right",
    label: "blockquote-right"
  },
  {
    value: "bi bi-bluetooth",
    label: "bluetooth"
  },
  {
    value: "bi bi-body-text",
    label: "body-text"
  },
  {
    value: "bi bi-book",
    label: "book"
  },
  {
    value: "bi bi-book-fill",
    label: "book-fill"
  },
  {
    value: "bi bi-book-half",
    label: "book-half"
  },
  {
    value: "bi bi-bookmark",
    label: "bookmark"
  },
  {
    value: "bi bi-bookmark-check",
    label: "bookmark-check"
  },
  {
    value: "bi bi-bookmark-check-fill",
    label: "bookmark-check-fill"
  },
  {
    value: "bi bi-bookmark-dash",
    label: "bookmark-dash"
  },
  {
    value: "bi bi-bookmark-dash-fill",
    label: "bookmark-dash-fill"
  },
  {
    value: "bi bi-bookmark-fill",
    label: "bookmark-fill"
  },
  {
    value: "bi bi-bookmark-heart",
    label: "bookmark-heart"
  },
  {
    value: "bi bi-bookmark-heart-fill",
    label: "bookmark-heart-fill"
  },
  {
    value: "bi bi-bookmark-plus",
    label: "bookmark-plus"
  },
  {
    value: "bi bi-bookmark-plus-fill",
    label: "bookmark-plus-fill"
  },
  {
    value: "bi bi-bookmark-star",
    label: "bookmark-star"
  },
  {
    value: "bi bi-bookmark-star-fill",
    label: "bookmark-star-fill"
  },
  {
    value: "bi bi-bookmark-x",
    label: "bookmark-x"
  },
  {
    value: "bi bi-bookmark-x-fill",
    label: "bookmark-x-fill"
  },
  {
    value: "bi bi-bookmarks",
    label: "bookmarks"
  },
  {
    value: "bi bi-bookmarks-fill",
    label: "bookmarks-fill"
  },
  {
    value: "bi bi-bookshelf",
    label: "bookshelf"
  },
  {
    value: "bi bi-boombox",
    label: "boombox"
  },
  {
    value: "bi bi-boombox-fill",
    label: "boombox-fill"
  },
  {
    value: "bi bi-bootstrap",
    label: "bootstrap"
  },
  {
    value: "bi bi-bootstrap-fill",
    label: "bootstrap-fill"
  },
  {
    value: "bi bi-bootstrap-reboot",
    label: "bootstrap-reboot"
  },
  {
    value: "bi bi-border",
    label: "border"
  },
  {
    value: "bi bi-border-all",
    label: "border-all"
  },
  {
    value: "bi bi-border-bottom",
    label: "border-bottom"
  },
  {
    value: "bi bi-border-center",
    label: "border-center"
  },
  {
    value: "bi bi-border-inner",
    label: "border-inner"
  },
  {
    value: "bi bi-border-left",
    label: "border-left"
  },
  {
    value: "bi bi-border-middle",
    label: "border-middle"
  },
  {
    value: "bi bi-border-outer",
    label: "border-outer"
  },
  {
    value: "bi bi-border-right",
    label: "border-right"
  },
  {
    value: "bi bi-border-style",
    label: "border-style"
  },
  {
    value: "bi bi-border-top",
    label: "border-top"
  },
  {
    value: "bi bi-border-width",
    label: "border-width"
  },
  {
    value: "bi bi-bounding-box",
    label: "bounding-box"
  },
  {
    value: "bi bi-bounding-box-circles",
    label: "bounding-box-circles"
  },
  {
    value: "bi bi-box",
    label: "box"
  },
  {
    value: "bi bi-box-arrow-down-left",
    label: "box-arrow-down-left"
  },
  {
    value: "bi bi-box-arrow-down-right",
    label: "box-arrow-down-right"
  },
  {
    value: "bi bi-box-arrow-down",
    label: "box-arrow-down"
  },
  {
    value: "bi bi-box-arrow-in-down",
    label: "box-arrow-in-down"
  },
  {
    value: "bi bi-box-arrow-in-down-left",
    label: "box-arrow-in-down-left"
  },
  {
    value: "bi bi-box-arrow-in-down-right",
    label: "box-arrow-in-down-right"
  },
  {
    value: "bi bi-box-arrow-in-left",
    label: "box-arrow-in-left"
  },
  {
    value: "bi bi-box-arrow-in-right",
    label: "box-arrow-in-right"
  },
  {
    value: "bi bi-box-arrow-in-up",
    label: "box-arrow-in-up"
  },
  {
    value: "bi bi-box-arrow-in-up-left",
    label: "box-arrow-in-up-left"
  },
  {
    value: "bi bi-box-arrow-in-up-right",
    label: "box-arrow-in-up-right"
  },
  {
    value: "bi bi-box-arrow-left",
    label: "box-arrow-left"
  },
  {
    value: "bi bi-box-arrow-right",
    label: "box-arrow-right"
  },
  {
    value: "bi bi-box-arrow-up",
    label: "box-arrow-up"
  },
  {
    value: "bi bi-box-arrow-up-left",
    label: "box-arrow-up-left"
  },
  {
    value: "bi bi-box-arrow-up-right",
    label: "box-arrow-up-right"
  },
  {
    value: "bi bi-box-fill",
    label: "box-fill"
  },
  {
    value: "bi bi-box-seam",
    label: "box-seam"
  },
  {
    value: "bi bi-box-seam-fill",
    label: "box-seam-fill"
  },
  {
    value: "bi bi-box2",
    label: "box2"
  },
  {
    value: "bi bi-box2-fill",
    label: "box2-fill"
  },
  {
    value: "bi bi-box2-heart",
    label: "box2-heart"
  },
  {
    value: "bi bi-box2-heart-fill",
    label: "box2-heart-fill"
  },
  {
    value: "bi bi-boxes",
    label: "boxes"
  },
  {
    value: "bi bi-braces",
    label: "braces"
  },
  {
    value: "bi bi-braces-asterisk",
    label: "braces-asterisk"
  },
  {
    value: "bi bi-bricks",
    label: "bricks"
  },
  {
    value: "bi bi-briefcase",
    label: "briefcase"
  },
  {
    value: "bi bi-briefcase-fill",
    label: "briefcase-fill"
  },
  {
    value: "bi bi-brightness-alt-high",
    label: "brightness-alt-high"
  },
  {
    value: "bi bi-brightness-alt-high-fill",
    label: "brightness-alt-high-fill"
  },
  {
    value: "bi bi-brightness-alt-low",
    label: "brightness-alt-low"
  },
  {
    value: "bi bi-brightness-alt-low-fill",
    label: "brightness-alt-low-fill"
  },
  {
    value: "bi bi-brightness-high",
    label: "brightness-high"
  },
  {
    value: "bi bi-brightness-high-fill",
    label: "brightness-high-fill"
  },
  {
    value: "bi bi-brightness-low",
    label: "brightness-low"
  },
  {
    value: "bi bi-brightness-low-fill",
    label: "brightness-low-fill"
  },
  {
    value: "bi bi-brilliance",
    label: "brilliance"
  },
  {
    value: "bi bi-broadcast",
    label: "broadcast"
  },
  {
    value: "bi bi-broadcast-pin",
    label: "broadcast-pin"
  },
  {
    value: "bi bi-browser-chrome",
    label: "browser-chrome"
  },
  {
    value: "bi bi-browser-edge",
    label: "browser-edge"
  },
  {
    value: "bi bi-browser-firefox",
    label: "browser-firefox"
  },
  {
    value: "bi bi-browser-safari",
    label: "browser-safari"
  },
  {
    value: "bi bi-brush",
    label: "brush"
  },
  {
    value: "bi bi-brush-fill",
    label: "brush-fill"
  },
  {
    value: "bi bi-bucket",
    label: "bucket"
  },
  {
    value: "bi bi-bucket-fill",
    label: "bucket-fill"
  },
  {
    value: "bi bi-bug",
    label: "bug"
  },
  {
    value: "bi bi-bug-fill",
    label: "bug-fill"
  },
  {
    value: "bi bi-building",
    label: "building"
  },
  {
    value: "bi bi-building-add",
    label: "building-add"
  },
  {
    value: "bi bi-building-check",
    label: "building-check"
  },
  {
    value: "bi bi-building-dash",
    label: "building-dash"
  },
  {
    value: "bi bi-building-down",
    label: "building-down"
  },
  {
    value: "bi bi-building-exclamation",
    label: "building-exclamation"
  },
  {
    value: "bi bi-building-fill",
    label: "building-fill"
  },
  {
    value: "bi bi-building-fill-add",
    label: "building-fill-add"
  },
  {
    value: "bi bi-building-fill-check",
    label: "building-fill-check"
  },
  {
    value: "bi bi-building-fill-dash",
    label: "building-fill-dash"
  },
  {
    value: "bi bi-building-fill-down",
    label: "building-fill-down"
  },
  {
    value: "bi bi-building-fill-exclamation",
    label: "building-fill-exclamation"
  },
  {
    value: "bi bi-building-fill-gear",
    label: "building-fill-gear"
  },
  {
    value: "bi bi-building-fill-lock",
    label: "building-fill-lock"
  },
  {
    value: "bi bi-building-fill-slash",
    label: "building-fill-slash"
  },
  {
    value: "bi bi-building-fill-up",
    label: "building-fill-up"
  },
  {
    value: "bi bi-building-fill-x",
    label: "building-fill-x"
  },
  {
    value: "bi bi-building-gear",
    label: "building-gear"
  },
  {
    value: "bi bi-building-lock",
    label: "building-lock"
  },
  {
    value: "bi bi-building-slash",
    label: "building-slash"
  },
  {
    value: "bi bi-building-up",
    label: "building-up"
  },
  {
    value: "bi bi-building-x",
    label: "building-x"
  },
  {
    value: "bi bi-buildings",
    label: "buildings"
  },
  {
    value: "bi bi-buildings-fill",
    label: "buildings-fill"
  },
  {
    value: "bi bi-bullseye",
    label: "bullseye"
  },
  {
    value: "bi bi-bus-front",
    label: "bus-front"
  },
  {
    value: "bi bi-bus-front-fill",
    label: "bus-front-fill"
  },
  {
    value: "bi bi-c-circle",
    label: "c-circle"
  },
  {
    value: "bi bi-c-circle-fill",
    label: "c-circle-fill"
  },
  {
    value: "bi bi-c-square",
    label: "c-square"
  },
  {
    value: "bi bi-c-square-fill",
    label: "c-square-fill"
  },
  {
    value: "bi bi-cake",
    label: "cake"
  },
  {
    value: "bi bi-cake-fill",
    label: "cake-fill"
  },
  {
    value: "bi bi-cake2",
    label: "cake2"
  },
  {
    value: "bi bi-cake2-fill",
    label: "cake2-fill"
  },
  {
    value: "bi bi-calculator",
    label: "calculator"
  },
  {
    value: "bi bi-calculator-fill",
    label: "calculator-fill"
  },
  {
    value: "bi bi-calendar",
    label: "calendar"
  },
  {
    value: "bi bi-calendar-check",
    label: "calendar-check"
  },
  {
    value: "bi bi-calendar-check-fill",
    label: "calendar-check-fill"
  },
  {
    value: "bi bi-calendar-date",
    label: "calendar-date"
  },
  {
    value: "bi bi-calendar-date-fill",
    label: "calendar-date-fill"
  },
  {
    value: "bi bi-calendar-day",
    label: "calendar-day"
  },
  {
    value: "bi bi-calendar-day-fill",
    label: "calendar-day-fill"
  },
  {
    value: "bi bi-calendar-event",
    label: "calendar-event"
  },
  {
    value: "bi bi-calendar-event-fill",
    label: "calendar-event-fill"
  },
  {
    value: "bi bi-calendar-fill",
    label: "calendar-fill"
  },
  {
    value: "bi bi-calendar-heart",
    label: "calendar-heart"
  },
  {
    value: "bi bi-calendar-heart-fill",
    label: "calendar-heart-fill"
  },
  {
    value: "bi bi-calendar-minus",
    label: "calendar-minus"
  },
  {
    value: "bi bi-calendar-minus-fill",
    label: "calendar-minus-fill"
  },
  {
    value: "bi bi-calendar-month",
    label: "calendar-month"
  },
  {
    value: "bi bi-calendar-month-fill",
    label: "calendar-month-fill"
  },
  {
    value: "bi bi-calendar-plus",
    label: "calendar-plus"
  },
  {
    value: "bi bi-calendar-plus-fill",
    label: "calendar-plus-fill"
  },
  {
    value: "bi bi-calendar-range",
    label: "calendar-range"
  },
  {
    value: "bi bi-calendar-range-fill",
    label: "calendar-range-fill"
  },
  {
    value: "bi bi-calendar-week",
    label: "calendar-week"
  },
  {
    value: "bi bi-calendar-week-fill",
    label: "calendar-week-fill"
  },
  {
    value: "bi bi-calendar-x",
    label: "calendar-x"
  },
  {
    value: "bi bi-calendar-x-fill",
    label: "calendar-x-fill"
  },
  {
    value: "bi bi-calendar2",
    label: "calendar2"
  },
  {
    value: "bi bi-calendar2-check",
    label: "calendar2-check"
  },
  {
    value: "bi bi-calendar2-check-fill",
    label: "calendar2-check-fill"
  },
  {
    value: "bi bi-calendar2-date",
    label: "calendar2-date"
  },
  {
    value: "bi bi-calendar2-date-fill",
    label: "calendar2-date-fill"
  },
  {
    value: "bi bi-calendar2-day",
    label: "calendar2-day"
  },
  {
    value: "bi bi-calendar2-day-fill",
    label: "calendar2-day-fill"
  },
  {
    value: "bi bi-calendar2-event",
    label: "calendar2-event"
  },
  {
    value: "bi bi-calendar2-event-fill",
    label: "calendar2-event-fill"
  },
  {
    value: "bi bi-calendar2-fill",
    label: "calendar2-fill"
  },
  {
    value: "bi bi-calendar2-heart",
    label: "calendar2-heart"
  },
  {
    value: "bi bi-calendar2-heart-fill",
    label: "calendar2-heart-fill"
  },
  {
    value: "bi bi-calendar2-minus",
    label: "calendar2-minus"
  },
  {
    value: "bi bi-calendar2-minus-fill",
    label: "calendar2-minus-fill"
  },
  {
    value: "bi bi-calendar2-month",
    label: "calendar2-month"
  },
  {
    value: "bi bi-calendar2-month-fill",
    label: "calendar2-month-fill"
  },
  {
    value: "bi bi-calendar2-plus",
    label: "calendar2-plus"
  },
  {
    value: "bi bi-calendar2-plus-fill",
    label: "calendar2-plus-fill"
  },
  {
    value: "bi bi-calendar2-range",
    label: "calendar2-range"
  },
  {
    value: "bi bi-calendar2-range-fill",
    label: "calendar2-range-fill"
  },
  {
    value: "bi bi-calendar2-week",
    label: "calendar2-week"
  },
  {
    value: "bi bi-calendar2-week-fill",
    label: "calendar2-week-fill"
  },
  {
    value: "bi bi-calendar2-x",
    label: "calendar2-x"
  },
  {
    value: "bi bi-calendar2-x-fill",
    label: "calendar2-x-fill"
  },
  {
    value: "bi bi-calendar3",
    label: "calendar3"
  },
  {
    value: "bi bi-calendar3-event",
    label: "calendar3-event"
  },
  {
    value: "bi bi-calendar3-event-fill",
    label: "calendar3-event-fill"
  },
  {
    value: "bi bi-calendar3-fill",
    label: "calendar3-fill"
  },
  {
    value: "bi bi-calendar3-range",
    label: "calendar3-range"
  },
  {
    value: "bi bi-calendar3-range-fill",
    label: "calendar3-range-fill"
  },
  {
    value: "bi bi-calendar3-week",
    label: "calendar3-week"
  },
  {
    value: "bi bi-calendar3-week-fill",
    label: "calendar3-week-fill"
  },
  {
    value: "bi bi-calendar4",
    label: "calendar4"
  },
  {
    value: "bi bi-calendar4-event",
    label: "calendar4-event"
  },
  {
    value: "bi bi-calendar4-range",
    label: "calendar4-range"
  },
  {
    value: "bi bi-calendar4-week",
    label: "calendar4-week"
  },
  {
    value: "bi bi-camera",
    label: "camera"
  },
  {
    value: "bi bi-camera2",
    label: "camera2"
  },
  {
    value: "bi bi-camera-fill",
    label: "camera-fill"
  },
  {
    value: "bi bi-camera-reels",
    label: "camera-reels"
  },
  {
    value: "bi bi-camera-reels-fill",
    label: "camera-reels-fill"
  },
  {
    value: "bi bi-camera-video",
    label: "camera-video"
  },
  {
    value: "bi bi-camera-video-fill",
    label: "camera-video-fill"
  },
  {
    value: "bi bi-camera-video-off",
    label: "camera-video-off"
  },
  {
    value: "bi bi-camera-video-off-fill",
    label: "camera-video-off-fill"
  },
  {
    value: "bi bi-capslock",
    label: "capslock"
  },
  {
    value: "bi bi-capslock-fill",
    label: "capslock-fill"
  },
  {
    value: "bi bi-capsule",
    label: "capsule"
  },
  {
    value: "bi bi-capsule-pill",
    label: "capsule-pill"
  },
  {
    value: "bi bi-car-front",
    label: "car-front"
  },
  {
    value: "bi bi-car-front-fill",
    label: "car-front-fill"
  },
  {
    value: "bi bi-card-checklist",
    label: "card-checklist"
  },
  {
    value: "bi bi-card-heading",
    label: "card-heading"
  },
  {
    value: "bi bi-card-image",
    label: "card-image"
  },
  {
    value: "bi bi-card-list",
    label: "card-list"
  },
  {
    value: "bi bi-card-text",
    label: "card-text"
  },
  {
    value: "bi bi-caret-down",
    label: "caret-down"
  },
  {
    value: "bi bi-caret-down-fill",
    label: "caret-down-fill"
  },
  {
    value: "bi bi-caret-down-square",
    label: "caret-down-square"
  },
  {
    value: "bi bi-caret-down-square-fill",
    label: "caret-down-square-fill"
  },
  {
    value: "bi bi-caret-left",
    label: "caret-left"
  },
  {
    value: "bi bi-caret-left-fill",
    label: "caret-left-fill"
  },
  {
    value: "bi bi-caret-left-square",
    label: "caret-left-square"
  },
  {
    value: "bi bi-caret-left-square-fill",
    label: "caret-left-square-fill"
  },
  {
    value: "bi bi-caret-right",
    label: "caret-right"
  },
  {
    value: "bi bi-caret-right-fill",
    label: "caret-right-fill"
  },
  {
    value: "bi bi-caret-right-square",
    label: "caret-right-square"
  },
  {
    value: "bi bi-caret-right-square-fill",
    label: "caret-right-square-fill"
  },
  {
    value: "bi bi-caret-up",
    label: "caret-up"
  },
  {
    value: "bi bi-caret-up-fill",
    label: "caret-up-fill"
  },
  {
    value: "bi bi-caret-up-square",
    label: "caret-up-square"
  },
  {
    value: "bi bi-caret-up-square-fill",
    label: "caret-up-square-fill"
  },
  {
    value: "bi bi-cart",
    label: "cart"
  },
  {
    value: "bi bi-cart-check",
    label: "cart-check"
  },
  {
    value: "bi bi-cart-check-fill",
    label: "cart-check-fill"
  },
  {
    value: "bi bi-cart-dash",
    label: "cart-dash"
  },
  {
    value: "bi bi-cart-dash-fill",
    label: "cart-dash-fill"
  },
  {
    value: "bi bi-cart-fill",
    label: "cart-fill"
  },
  {
    value: "bi bi-cart-plus",
    label: "cart-plus"
  },
  {
    value: "bi bi-cart-plus-fill",
    label: "cart-plus-fill"
  },
  {
    value: "bi bi-cart-x",
    label: "cart-x"
  },
  {
    value: "bi bi-cart-x-fill",
    label: "cart-x-fill"
  },
  {
    value: "bi bi-cart2",
    label: "cart2"
  },
  {
    value: "bi bi-cart3",
    label: "cart3"
  },
  {
    value: "bi bi-cart4",
    label: "cart4"
  },
  {
    value: "bi bi-cash",
    label: "cash"
  },
  {
    value: "bi bi-cash-coin",
    label: "cash-coin"
  },
  {
    value: "bi bi-cash-stack",
    label: "cash-stack"
  },
  {
    value: "bi bi-cassette",
    label: "cassette"
  },
  {
    value: "bi bi-cassette-fill",
    label: "cassette-fill"
  },
  {
    value: "bi bi-cast",
    label: "cast"
  },
  {
    value: "bi bi-cc-circle",
    label: "cc-circle"
  },
  {
    value: "bi bi-cc-circle-fill",
    label: "cc-circle-fill"
  },
  {
    value: "bi bi-cc-square",
    label: "cc-square"
  },
  {
    value: "bi bi-cc-square-fill",
    label: "cc-square-fill"
  },
  {
    value: "bi bi-chat",
    label: "chat"
  },
  {
    value: "bi bi-chat-dots",
    label: "chat-dots"
  },
  {
    value: "bi bi-chat-dots-fill",
    label: "chat-dots-fill"
  },
  {
    value: "bi bi-chat-fill",
    label: "chat-fill"
  },
  {
    value: "bi bi-chat-heart",
    label: "chat-heart"
  },
  {
    value: "bi bi-chat-heart-fill",
    label: "chat-heart-fill"
  },
  {
    value: "bi bi-chat-left",
    label: "chat-left"
  },
  {
    value: "bi bi-chat-left-dots",
    label: "chat-left-dots"
  },
  {
    value: "bi bi-chat-left-dots-fill",
    label: "chat-left-dots-fill"
  },
  {
    value: "bi bi-chat-left-fill",
    label: "chat-left-fill"
  },
  {
    value: "bi bi-chat-left-heart",
    label: "chat-left-heart"
  },
  {
    value: "bi bi-chat-left-heart-fill",
    label: "chat-left-heart-fill"
  },
  {
    value: "bi bi-chat-left-quote",
    label: "chat-left-quote"
  },
  {
    value: "bi bi-chat-left-quote-fill",
    label: "chat-left-quote-fill"
  },
  {
    value: "bi bi-chat-left-text",
    label: "chat-left-text"
  },
  {
    value: "bi bi-chat-left-text-fill",
    label: "chat-left-text-fill"
  },
  {
    value: "bi bi-chat-quote",
    label: "chat-quote"
  },
  {
    value: "bi bi-chat-quote-fill",
    label: "chat-quote-fill"
  },
  {
    value: "bi bi-chat-right",
    label: "chat-right"
  },
  {
    value: "bi bi-chat-right-dots",
    label: "chat-right-dots"
  },
  {
    value: "bi bi-chat-right-dots-fill",
    label: "chat-right-dots-fill"
  },
  {
    value: "bi bi-chat-right-fill",
    label: "chat-right-fill"
  },
  {
    value: "bi bi-chat-right-heart",
    label: "chat-right-heart"
  },
  {
    value: "bi bi-chat-right-heart-fill",
    label: "chat-right-heart-fill"
  },
  {
    value: "bi bi-chat-right-quote",
    label: "chat-right-quote"
  },
  {
    value: "bi bi-chat-right-quote-fill",
    label: "chat-right-quote-fill"
  },
  {
    value: "bi bi-chat-right-text",
    label: "chat-right-text"
  },
  {
    value: "bi bi-chat-right-text-fill",
    label: "chat-right-text-fill"
  },
  {
    value: "bi bi-chat-square",
    label: "chat-square"
  },
  {
    value: "bi bi-chat-square-dots",
    label: "chat-square-dots"
  },
  {
    value: "bi bi-chat-square-dots-fill",
    label: "chat-square-dots-fill"
  },
  {
    value: "bi bi-chat-square-fill",
    label: "chat-square-fill"
  },
  {
    value: "bi bi-chat-square-heart",
    label: "chat-square-heart"
  },
  {
    value: "bi bi-chat-square-heart-fill",
    label: "chat-square-heart-fill"
  },
  {
    value: "bi bi-chat-square-quote",
    label: "chat-square-quote"
  },
  {
    value: "bi bi-chat-square-quote-fill",
    label: "chat-square-quote-fill"
  },
  {
    value: "bi bi-chat-square-text",
    label: "chat-square-text"
  },
  {
    value: "bi bi-chat-square-text-fill",
    label: "chat-square-text-fill"
  },
  {
    value: "bi bi-chat-text",
    label: "chat-text"
  },
  {
    value: "bi bi-chat-text-fill",
    label: "chat-text-fill"
  },
  {
    value: "bi bi-check",
    label: "check"
  },
  {
    value: "bi bi-check-all",
    label: "check-all"
  },
  {
    value: "bi bi-check-circle",
    label: "check-circle"
  },
  {
    value: "bi bi-check-circle-fill",
    label: "check-circle-fill"
  },
  {
    value: "bi bi-check-lg",
    label: "check-lg"
  },
  {
    value: "bi bi-check-square",
    label: "check-square"
  },
  {
    value: "bi bi-check-square-fill",
    label: "check-square-fill"
  },
  {
    value: "bi bi-check2",
    label: "check2"
  },
  {
    value: "bi bi-check2-all",
    label: "check2-all"
  },
  {
    value: "bi bi-check2-circle",
    label: "check2-circle"
  },
  {
    value: "bi bi-check2-square",
    label: "check2-square"
  },
  {
    value: "bi bi-chevron-bar-contract",
    label: "chevron-bar-contract"
  },
  {
    value: "bi bi-chevron-bar-down",
    label: "chevron-bar-down"
  },
  {
    value: "bi bi-chevron-bar-expand",
    label: "chevron-bar-expand"
  },
  {
    value: "bi bi-chevron-bar-left",
    label: "chevron-bar-left"
  },
  {
    value: "bi bi-chevron-bar-right",
    label: "chevron-bar-right"
  },
  {
    value: "bi bi-chevron-bar-up",
    label: "chevron-bar-up"
  },
  {
    value: "bi bi-chevron-compact-down",
    label: "chevron-compact-down"
  },
  {
    value: "bi bi-chevron-compact-left",
    label: "chevron-compact-left"
  },
  {
    value: "bi bi-chevron-compact-right",
    label: "chevron-compact-right"
  },
  {
    value: "bi bi-chevron-compact-up",
    label: "chevron-compact-up"
  },
  {
    value: "bi bi-chevron-contract",
    label: "chevron-contract"
  },
  {
    value: "bi bi-chevron-double-down",
    label: "chevron-double-down"
  },
  {
    value: "bi bi-chevron-double-left",
    label: "chevron-double-left"
  },
  {
    value: "bi bi-chevron-double-right",
    label: "chevron-double-right"
  },
  {
    value: "bi bi-chevron-double-up",
    label: "chevron-double-up"
  },
  {
    value: "bi bi-chevron-down",
    label: "chevron-down"
  },
  {
    value: "bi bi-chevron-expand",
    label: "chevron-expand"
  },
  {
    value: "bi bi-chevron-left",
    label: "chevron-left"
  },
  {
    value: "bi bi-chevron-right",
    label: "chevron-right"
  },
  {
    value: "bi bi-chevron-up",
    label: "chevron-up"
  },
  {
    value: "bi bi-circle",
    label: "circle"
  },
  {
    value: "bi bi-circle-fill",
    label: "circle-fill"
  },
  {
    value: "bi bi-circle-half",
    label: "circle-half"
  },
  {
    value: "bi bi-slash-circle",
    label: "slash-circle"
  },
  {
    value: "bi bi-circle-square",
    label: "circle-square"
  },
  {
    value: "bi bi-clipboard",
    label: "clipboard"
  },
  {
    value: "bi bi-clipboard-check",
    label: "clipboard-check"
  },
  {
    value: "bi bi-clipboard-check-fill",
    label: "clipboard-check-fill"
  },
  {
    value: "bi bi-clipboard-data",
    label: "clipboard-data"
  },
  {
    value: "bi bi-clipboard-data-fill",
    label: "clipboard-data-fill"
  },
  {
    value: "bi bi-clipboard-fill",
    label: "clipboard-fill"
  },
  {
    value: "bi bi-clipboard-heart",
    label: "clipboard-heart"
  },
  {
    value: "bi bi-clipboard-heart-fill",
    label: "clipboard-heart-fill"
  },
  {
    value: "bi bi-clipboard-minus",
    label: "clipboard-minus"
  },
  {
    value: "bi bi-clipboard-minus-fill",
    label: "clipboard-minus-fill"
  },
  {
    value: "bi bi-clipboard-plus",
    label: "clipboard-plus"
  },
  {
    value: "bi bi-clipboard-plus-fill",
    label: "clipboard-plus-fill"
  },
  {
    value: "bi bi-clipboard-pulse",
    label: "clipboard-pulse"
  },
  {
    value: "bi bi-clipboard-x",
    label: "clipboard-x"
  },
  {
    value: "bi bi-clipboard-x-fill",
    label: "clipboard-x-fill"
  },
  {
    value: "bi bi-clipboard2",
    label: "clipboard2"
  },
  {
    value: "bi bi-clipboard2-check",
    label: "clipboard2-check"
  },
  {
    value: "bi bi-clipboard2-check-fill",
    label: "clipboard2-check-fill"
  },
  {
    value: "bi bi-clipboard2-data",
    label: "clipboard2-data"
  },
  {
    value: "bi bi-clipboard2-data-fill",
    label: "clipboard2-data-fill"
  },
  {
    value: "bi bi-clipboard2-fill",
    label: "clipboard2-fill"
  },
  {
    value: "bi bi-clipboard2-heart",
    label: "clipboard2-heart"
  },
  {
    value: "bi bi-clipboard2-heart-fill",
    label: "clipboard2-heart-fill"
  },
  {
    value: "bi bi-clipboard2-minus",
    label: "clipboard2-minus"
  },
  {
    value: "bi bi-clipboard2-minus-fill",
    label: "clipboard2-minus-fill"
  },
  {
    value: "bi bi-clipboard2-plus",
    label: "clipboard2-plus"
  },
  {
    value: "bi bi-clipboard2-plus-fill",
    label: "clipboard2-plus-fill"
  },
  {
    value: "bi bi-clipboard2-pulse",
    label: "clipboard2-pulse"
  },
  {
    value: "bi bi-clipboard2-pulse-fill",
    label: "clipboard2-pulse-fill"
  },
  {
    value: "bi bi-clipboard2-x",
    label: "clipboard2-x"
  },
  {
    value: "bi bi-clipboard2-x-fill",
    label: "clipboard2-x-fill"
  },
  {
    value: "bi bi-clock",
    label: "clock"
  },
  {
    value: "bi bi-clock-fill",
    label: "clock-fill"
  },
  {
    value: "bi bi-clock-history",
    label: "clock-history"
  },
  {
    value: "bi bi-cloud",
    label: "cloud"
  },
  {
    value: "bi bi-cloud-arrow-down",
    label: "cloud-arrow-down"
  },
  {
    value: "bi bi-cloud-arrow-down-fill",
    label: "cloud-arrow-down-fill"
  },
  {
    value: "bi bi-cloud-arrow-up",
    label: "cloud-arrow-up"
  },
  {
    value: "bi bi-cloud-arrow-up-fill",
    label: "cloud-arrow-up-fill"
  },
  {
    value: "bi bi-cloud-check",
    label: "cloud-check"
  },
  {
    value: "bi bi-cloud-check-fill",
    label: "cloud-check-fill"
  },
  {
    value: "bi bi-cloud-download",
    label: "cloud-download"
  },
  {
    value: "bi bi-cloud-download-fill",
    label: "cloud-download-fill"
  },
  {
    value: "bi bi-cloud-drizzle",
    label: "cloud-drizzle"
  },
  {
    value: "bi bi-cloud-drizzle-fill",
    label: "cloud-drizzle-fill"
  },
  {
    value: "bi bi-cloud-fill",
    label: "cloud-fill"
  },
  {
    value: "bi bi-cloud-fog",
    label: "cloud-fog"
  },
  {
    value: "bi bi-cloud-fog-fill",
    label: "cloud-fog-fill"
  },
  {
    value: "bi bi-cloud-fog2",
    label: "cloud-fog2"
  },
  {
    value: "bi bi-cloud-fog2-fill",
    label: "cloud-fog2-fill"
  },
  {
    value: "bi bi-cloud-hail",
    label: "cloud-hail"
  },
  {
    value: "bi bi-cloud-hail-fill",
    label: "cloud-hail-fill"
  },
  {
    value: "bi bi-cloud-haze",
    label: "cloud-haze"
  },
  {
    value: "bi bi-cloud-haze-fill",
    label: "cloud-haze-fill"
  },
  {
    value: "bi bi-cloud-haze2",
    label: "cloud-haze2"
  },
  {
    value: "bi bi-cloud-haze2-fill",
    label: "cloud-haze2-fill"
  },
  {
    value: "bi bi-cloud-lightning",
    label: "cloud-lightning"
  },
  {
    value: "bi bi-cloud-lightning-fill",
    label: "cloud-lightning-fill"
  },
  {
    value: "bi bi-cloud-lightning-rain",
    label: "cloud-lightning-rain"
  },
  {
    value: "bi bi-cloud-lightning-rain-fill",
    label: "cloud-lightning-rain-fill"
  },
  {
    value: "bi bi-cloud-minus",
    label: "cloud-minus"
  },
  {
    value: "bi bi-cloud-minus-fill",
    label: "cloud-minus-fill"
  },
  {
    value: "bi bi-cloud-moon",
    label: "cloud-moon"
  },
  {
    value: "bi bi-cloud-moon-fill",
    label: "cloud-moon-fill"
  },
  {
    value: "bi bi-cloud-plus",
    label: "cloud-plus"
  },
  {
    value: "bi bi-cloud-plus-fill",
    label: "cloud-plus-fill"
  },
  {
    value: "bi bi-cloud-rain",
    label: "cloud-rain"
  },
  {
    value: "bi bi-cloud-rain-fill",
    label: "cloud-rain-fill"
  },
  {
    value: "bi bi-cloud-rain-heavy",
    label: "cloud-rain-heavy"
  },
  {
    value: "bi bi-cloud-rain-heavy-fill",
    label: "cloud-rain-heavy-fill"
  },
  {
    value: "bi bi-cloud-slash",
    label: "cloud-slash"
  },
  {
    value: "bi bi-cloud-slash-fill",
    label: "cloud-slash-fill"
  },
  {
    value: "bi bi-cloud-sleet",
    label: "cloud-sleet"
  },
  {
    value: "bi bi-cloud-sleet-fill",
    label: "cloud-sleet-fill"
  },
  {
    value: "bi bi-cloud-snow",
    label: "cloud-snow"
  },
  {
    value: "bi bi-cloud-snow-fill",
    label: "cloud-snow-fill"
  },
  {
    value: "bi bi-cloud-sun",
    label: "cloud-sun"
  },
  {
    value: "bi bi-cloud-sun-fill",
    label: "cloud-sun-fill"
  },
  {
    value: "bi bi-cloud-upload",
    label: "cloud-upload"
  },
  {
    value: "bi bi-cloud-upload-fill",
    label: "cloud-upload-fill"
  },
  {
    value: "bi bi-clouds",
    label: "clouds"
  },
  {
    value: "bi bi-clouds-fill",
    label: "clouds-fill"
  },
  {
    value: "bi bi-cloudy",
    label: "cloudy"
  },
  {
    value: "bi bi-cloudy-fill",
    label: "cloudy-fill"
  },
  {
    value: "bi bi-code",
    label: "code"
  },
  {
    value: "bi bi-code-slash",
    label: "code-slash"
  },
  {
    value: "bi bi-code-square",
    label: "code-square"
  },
  {
    value: "bi bi-coin",
    label: "coin"
  },
  {
    value: "bi bi-collection",
    label: "collection"
  },
  {
    value: "bi bi-collection-fill",
    label: "collection-fill"
  },
  {
    value: "bi bi-collection-play",
    label: "collection-play"
  },
  {
    value: "bi bi-collection-play-fill",
    label: "collection-play-fill"
  },
  {
    value: "bi bi-columns",
    label: "columns"
  },
  {
    value: "bi bi-columns-gap",
    label: "columns-gap"
  },
  {
    value: "bi bi-command",
    label: "command"
  },
  {
    value: "bi bi-compass",
    label: "compass"
  },
  {
    value: "bi bi-compass-fill",
    label: "compass-fill"
  },
  {
    value: "bi bi-cone",
    label: "cone"
  },
  {
    value: "bi bi-cone-striped",
    label: "cone-striped"
  },
  {
    value: "bi bi-controller",
    label: "controller"
  },
  {
    value: "bi bi-cookie",
    label: "cookie"
  },
  {
    value: "bi bi-copy",
    label: "copy"
  },
  {
    value: "bi bi-cpu",
    label: "cpu"
  },
  {
    value: "bi bi-cpu-fill",
    label: "cpu-fill"
  },
  {
    value: "bi bi-credit-card",
    label: "credit-card"
  },
  {
    value: "bi bi-credit-card-2-back",
    label: "credit-card-2-back"
  },
  {
    value: "bi bi-credit-card-2-back-fill",
    label: "credit-card-2-back-fill"
  },
  {
    value: "bi bi-credit-card-2-front",
    label: "credit-card-2-front"
  },
  {
    value: "bi bi-credit-card-2-front-fill",
    label: "credit-card-2-front-fill"
  },
  {
    value: "bi bi-credit-card-fill",
    label: "credit-card-fill"
  },
  {
    value: "bi bi-crop",
    label: "crop"
  },
  {
    value: "bi bi-crosshair",
    label: "crosshair"
  },
  {
    value: "bi bi-crosshair2",
    label: "crosshair2"
  },
  {
    value: "bi bi-cup",
    label: "cup"
  },
  {
    value: "bi bi-cup-fill",
    label: "cup-fill"
  },
  {
    value: "bi bi-cup-hot",
    label: "cup-hot"
  },
  {
    value: "bi bi-cup-hot-fill",
    label: "cup-hot-fill"
  },
  {
    value: "bi bi-cup-straw",
    label: "cup-straw"
  },
  {
    value: "bi bi-currency-bitcoin",
    label: "currency-bitcoin"
  },
  {
    value: "bi bi-currency-dollar",
    label: "currency-dollar"
  },
  {
    value: "bi bi-currency-euro",
    label: "currency-euro"
  },
  {
    value: "bi bi-currency-exchange",
    label: "currency-exchange"
  },
  {
    value: "bi bi-currency-pound",
    label: "currency-pound"
  },
  {
    value: "bi bi-currency-rupee",
    label: "currency-rupee"
  },
  {
    value: "bi bi-currency-yen",
    label: "currency-yen"
  },
  {
    value: "bi bi-cursor",
    label: "cursor"
  },
  {
    value: "bi bi-cursor-fill",
    label: "cursor-fill"
  },
  {
    value: "bi bi-cursor-text",
    label: "cursor-text"
  },
  {
    value: "bi bi-dash",
    label: "dash"
  },
  {
    value: "bi bi-dash-circle",
    label: "dash-circle"
  },
  {
    value: "bi bi-dash-circle-dotted",
    label: "dash-circle-dotted"
  },
  {
    value: "bi bi-dash-circle-fill",
    label: "dash-circle-fill"
  },
  {
    value: "bi bi-dash-lg",
    label: "dash-lg"
  },
  {
    value: "bi bi-dash-square",
    label: "dash-square"
  },
  {
    value: "bi bi-dash-square-dotted",
    label: "dash-square-dotted"
  },
  {
    value: "bi bi-dash-square-fill",
    label: "dash-square-fill"
  },
  {
    value: "bi bi-database",
    label: "database"
  },
  {
    value: "bi bi-database-add",
    label: "database-add"
  },
  {
    value: "bi bi-database-check",
    label: "database-check"
  },
  {
    value: "bi bi-database-dash",
    label: "database-dash"
  },
  {
    value: "bi bi-database-down",
    label: "database-down"
  },
  {
    value: "bi bi-database-exclamation",
    label: "database-exclamation"
  },
  {
    value: "bi bi-database-fill",
    label: "database-fill"
  },
  {
    value: "bi bi-database-fill-add",
    label: "database-fill-add"
  },
  {
    value: "bi bi-database-fill-check",
    label: "database-fill-check"
  },
  {
    value: "bi bi-database-fill-dash",
    label: "database-fill-dash"
  },
  {
    value: "bi bi-database-fill-down",
    label: "database-fill-down"
  },
  {
    value: "bi bi-database-fill-exclamation",
    label: "database-fill-exclamation"
  },
  {
    value: "bi bi-database-fill-gear",
    label: "database-fill-gear"
  },
  {
    value: "bi bi-database-fill-lock",
    label: "database-fill-lock"
  },
  {
    value: "bi bi-database-fill-slash",
    label: "database-fill-slash"
  },
  {
    value: "bi bi-database-fill-up",
    label: "database-fill-up"
  },
  {
    value: "bi bi-database-fill-x",
    label: "database-fill-x"
  },
  {
    value: "bi bi-database-gear",
    label: "database-gear"
  },
  {
    value: "bi bi-database-lock",
    label: "database-lock"
  },
  {
    value: "bi bi-database-slash",
    label: "database-slash"
  },
  {
    value: "bi bi-database-up",
    label: "database-up"
  },
  {
    value: "bi bi-database-x",
    label: "database-x"
  },
  {
    value: "bi bi-device-hdd",
    label: "device-hdd"
  },
  {
    value: "bi bi-device-hdd-fill",
    label: "device-hdd-fill"
  },
  {
    value: "bi bi-device-ssd",
    label: "device-ssd"
  },
  {
    value: "bi bi-device-ssd-fill",
    label: "device-ssd-fill"
  },
  {
    value: "bi bi-diagram-2",
    label: "diagram-2"
  },
  {
    value: "bi bi-diagram-2-fill",
    label: "diagram-2-fill"
  },
  {
    value: "bi bi-diagram-3",
    label: "diagram-3"
  },
  {
    value: "bi bi-diagram-3-fill",
    label: "diagram-3-fill"
  },
  {
    value: "bi bi-diamond",
    label: "diamond"
  },
  {
    value: "bi bi-diamond-fill",
    label: "diamond-fill"
  },
  {
    value: "bi bi-diamond-half",
    label: "diamond-half"
  },
  {
    value: "bi bi-dice-1",
    label: "dice-1"
  },
  {
    value: "bi bi-dice-1-fill",
    label: "dice-1-fill"
  },
  {
    value: "bi bi-dice-2",
    label: "dice-2"
  },
  {
    value: "bi bi-dice-2-fill",
    label: "dice-2-fill"
  },
  {
    value: "bi bi-dice-3",
    label: "dice-3"
  },
  {
    value: "bi bi-dice-3-fill",
    label: "dice-3-fill"
  },
  {
    value: "bi bi-dice-4",
    label: "dice-4"
  },
  {
    value: "bi bi-dice-4-fill",
    label: "dice-4-fill"
  },
  {
    value: "bi bi-dice-5",
    label: "dice-5"
  },
  {
    value: "bi bi-dice-5-fill",
    label: "dice-5-fill"
  },
  {
    value: "bi bi-dice-6",
    label: "dice-6"
  },
  {
    value: "bi bi-dice-6-fill",
    label: "dice-6-fill"
  },
  {
    value: "bi bi-disc",
    label: "disc"
  },
  {
    value: "bi bi-disc-fill",
    label: "disc-fill"
  },
  {
    value: "bi bi-discord",
    label: "discord"
  },
  {
    value: "bi bi-display",
    label: "display"
  },
  {
    value: "bi bi-display-fill",
    label: "display-fill"
  },
  {
    value: "bi bi-displayport",
    label: "displayport"
  },
  {
    value: "bi bi-displayport-fill",
    label: "displayport-fill"
  },
  {
    value: "bi bi-distribute-horizontal",
    label: "distribute-horizontal"
  },
  {
    value: "bi bi-distribute-vertical",
    label: "distribute-vertical"
  },
  {
    value: "bi bi-door-closed",
    label: "door-closed"
  },
  {
    value: "bi bi-door-closed-fill",
    label: "door-closed-fill"
  },
  {
    value: "bi bi-door-open",
    label: "door-open"
  },
  {
    value: "bi bi-door-open-fill",
    label: "door-open-fill"
  },
  {
    value: "bi bi-dot",
    label: "dot"
  },
  {
    value: "bi bi-download",
    label: "download"
  },
  {
    value: "bi bi-dpad",
    label: "dpad"
  },
  {
    value: "bi bi-dpad-fill",
    label: "dpad-fill"
  },
  {
    value: "bi bi-dribbble",
    label: "dribbble"
  },
  {
    value: "bi bi-dropbox",
    label: "dropbox"
  },
  {
    value: "bi bi-droplet",
    label: "droplet"
  },
  {
    value: "bi bi-droplet-fill",
    label: "droplet-fill"
  },
  {
    value: "bi bi-droplet-half",
    label: "droplet-half"
  },
  {
    value: "bi bi-duffle",
    label: "duffle"
  },
  {
    value: "bi bi-duffle-fill",
    label: "duffle-fill"
  },
  {
    value: "bi bi-ear",
    label: "ear"
  },
  {
    value: "bi bi-ear-fill",
    label: "ear-fill"
  },
  {
    value: "bi bi-earbuds",
    label: "earbuds"
  },
  {
    value: "bi bi-easel",
    label: "easel"
  },
  {
    value: "bi bi-easel-fill",
    label: "easel-fill"
  },
  {
    value: "bi bi-easel2",
    label: "easel2"
  },
  {
    value: "bi bi-easel2-fill",
    label: "easel2-fill"
  },
  {
    value: "bi bi-easel3",
    label: "easel3"
  },
  {
    value: "bi bi-easel3-fill",
    label: "easel3-fill"
  },
  {
    value: "bi bi-egg",
    label: "egg"
  },
  {
    value: "bi bi-egg-fill",
    label: "egg-fill"
  },
  {
    value: "bi bi-egg-fried",
    label: "egg-fried"
  },
  {
    value: "bi bi-eject",
    label: "eject"
  },
  {
    value: "bi bi-eject-fill",
    label: "eject-fill"
  },
  {
    value: "bi bi-emoji-angry",
    label: "emoji-angry"
  },
  {
    value: "bi bi-emoji-angry-fill",
    label: "emoji-angry-fill"
  },
  {
    value: "bi bi-emoji-astonished",
    label: "emoji-astonished"
  },
  {
    value: "bi bi-emoji-astonished-fill",
    label: "emoji-astonished-fill"
  },
  {
    value: "bi bi-emoji-dizzy",
    label: "emoji-dizzy"
  },
  {
    value: "bi bi-emoji-dizzy-fill",
    label: "emoji-dizzy-fill"
  },
  {
    value: "bi bi-emoji-expressionless",
    label: "emoji-expressionless"
  },
  {
    value: "bi bi-emoji-expressionless-fill",
    label: "emoji-expressionless-fill"
  },
  {
    value: "bi bi-emoji-frown",
    label: "emoji-frown"
  },
  {
    value: "bi bi-emoji-frown-fill",
    label: "emoji-frown-fill"
  },
  {
    value: "bi bi-emoji-grimace",
    label: "emoji-grimace"
  },
  {
    value: "bi bi-emoji-grimace-fill",
    label: "emoji-grimace-fill"
  },
  {
    value: "bi bi-emoji-grin",
    label: "emoji-grin"
  },
  {
    value: "bi bi-emoji-grin-fill",
    label: "emoji-grin-fill"
  },
  {
    value: "bi bi-emoji-heart-eyes",
    label: "emoji-heart-eyes"
  },
  {
    value: "bi bi-emoji-heart-eyes-fill",
    label: "emoji-heart-eyes-fill"
  },
  {
    value: "bi bi-emoji-kiss",
    label: "emoji-kiss"
  },
  {
    value: "bi bi-emoji-kiss-fill",
    label: "emoji-kiss-fill"
  },
  {
    value: "bi bi-emoji-laughing",
    label: "emoji-laughing"
  },
  {
    value: "bi bi-emoji-laughing-fill",
    label: "emoji-laughing-fill"
  },
  {
    value: "bi bi-emoji-neutral",
    label: "emoji-neutral"
  },
  {
    value: "bi bi-emoji-neutral-fill",
    label: "emoji-neutral-fill"
  },
  {
    value: "bi bi-emoji-smile",
    label: "emoji-smile"
  },
  {
    value: "bi bi-emoji-smile-fill",
    label: "emoji-smile-fill"
  },
  {
    value: "bi bi-emoji-smile-upside-down",
    label: "emoji-smile-upside-down"
  },
  {
    value: "bi bi-emoji-smile-upside-down-fill",
    label: "emoji-smile-upside-down-fill"
  },
  {
    value: "bi bi-emoji-sunglasses",
    label: "emoji-sunglasses"
  },
  {
    value: "bi bi-emoji-sunglasses-fill",
    label: "emoji-sunglasses-fill"
  },
  {
    value: "bi bi-emoji-surprise",
    label: "emoji-surprise"
  },
  {
    value: "bi bi-emoji-surprise-fill",
    label: "emoji-surprise-fill"
  },
  {
    value: "bi bi-emoji-tear",
    label: "emoji-tear"
  },
  {
    value: "bi bi-emoji-tear-fill",
    label: "emoji-tear-fill"
  },
  {
    value: "bi bi-emoji-wink",
    label: "emoji-wink"
  },
  {
    value: "bi bi-emoji-wink-fill",
    label: "emoji-wink-fill"
  },
  {
    value: "bi bi-envelope",
    label: "envelope"
  },
  {
    value: "bi bi-envelope-arrow-down",
    label: "envelope-arrow-down"
  },
  {
    value: "bi bi-envelope-arrow-down-fill",
    label: "envelope-arrow-down-fill"
  },
  {
    value: "bi bi-envelope-arrow-up",
    label: "envelope-arrow-up"
  },
  {
    value: "bi bi-envelope-arrow-up-fill",
    label: "envelope-arrow-up-fill"
  },
  {
    value: "bi bi-envelope-at",
    label: "envelope-at"
  },
  {
    value: "bi bi-envelope-at-fill",
    label: "envelope-at-fill"
  },
  {
    value: "bi bi-envelope-check",
    label: "envelope-check"
  },
  {
    value: "bi bi-envelope-check-fill",
    label: "envelope-check-fill"
  },
  {
    value: "bi bi-envelope-dash",
    label: "envelope-dash"
  },
  {
    value: "bi bi-envelope-dash-fill",
    label: "envelope-dash-fill"
  },
  {
    value: "bi bi-envelope-exclamation",
    label: "envelope-exclamation"
  },
  {
    value: "bi bi-envelope-exclamation-fill",
    label: "envelope-exclamation-fill"
  },
  {
    value: "bi bi-envelope-fill",
    label: "envelope-fill"
  },
  {
    value: "bi bi-envelope-heart",
    label: "envelope-heart"
  },
  {
    value: "bi bi-envelope-heart-fill",
    label: "envelope-heart-fill"
  },
  {
    value: "bi bi-envelope-open",
    label: "envelope-open"
  },
  {
    value: "bi bi-envelope-open-fill",
    label: "envelope-open-fill"
  },
  {
    value: "bi bi-envelope-open-heart",
    label: "envelope-open-heart"
  },
  {
    value: "bi bi-envelope-open-heart-fill",
    label: "envelope-open-heart-fill"
  },
  {
    value: "bi bi-envelope-paper",
    label: "envelope-paper"
  },
  {
    value: "bi bi-envelope-paper-fill",
    label: "envelope-paper-fill"
  },
  {
    value: "bi bi-envelope-paper-heart",
    label: "envelope-paper-heart"
  },
  {
    value: "bi bi-envelope-paper-heart-fill",
    label: "envelope-paper-heart-fill"
  },
  {
    value: "bi bi-envelope-plus",
    label: "envelope-plus"
  },
  {
    value: "bi bi-envelope-plus-fill",
    label: "envelope-plus-fill"
  },
  {
    value: "bi bi-envelope-slash",
    label: "envelope-slash"
  },
  {
    value: "bi bi-envelope-slash-fill",
    label: "envelope-slash-fill"
  },
  {
    value: "bi bi-envelope-x",
    label: "envelope-x"
  },
  {
    value: "bi bi-envelope-x-fill",
    label: "envelope-x-fill"
  },
  {
    value: "bi bi-eraser",
    label: "eraser"
  },
  {
    value: "bi bi-eraser-fill",
    label: "eraser-fill"
  },
  {
    value: "bi bi-escape",
    label: "escape"
  },
  {
    value: "bi bi-ethernet",
    label: "ethernet"
  },
  {
    value: "bi bi-ev-front",
    label: "ev-front"
  },
  {
    value: "bi bi-ev-front-fill",
    label: "ev-front-fill"
  },
  {
    value: "bi bi-ev-station",
    label: "ev-station"
  },
  {
    value: "bi bi-ev-station-fill",
    label: "ev-station-fill"
  },
  {
    value: "bi bi-exclamation",
    label: "exclamation"
  },
  {
    value: "bi bi-exclamation-circle",
    label: "exclamation-circle"
  },
  {
    value: "bi bi-exclamation-circle-fill",
    label: "exclamation-circle-fill"
  },
  {
    value: "bi bi-exclamation-diamond",
    label: "exclamation-diamond"
  },
  {
    value: "bi bi-exclamation-diamond-fill",
    label: "exclamation-diamond-fill"
  },
  {
    value: "bi bi-exclamation-lg",
    label: "exclamation-lg"
  },
  {
    value: "bi bi-exclamation-octagon",
    label: "exclamation-octagon"
  },
  {
    value: "bi bi-exclamation-octagon-fill",
    label: "exclamation-octagon-fill"
  },
  {
    value: "bi bi-exclamation-square",
    label: "exclamation-square"
  },
  {
    value: "bi bi-exclamation-square-fill",
    label: "exclamation-square-fill"
  },
  {
    value: "bi bi-exclamation-triangle",
    label: "exclamation-triangle"
  },
  {
    value: "bi bi-exclamation-triangle-fill",
    label: "exclamation-triangle-fill"
  },
  {
    value: "bi bi-exclude",
    label: "exclude"
  },
  {
    value: "bi bi-explicit",
    label: "explicit"
  },
  {
    value: "bi bi-explicit-fill",
    label: "explicit-fill"
  },
  {
    value: "bi bi-exposure",
    label: "exposure"
  },
  {
    value: "bi bi-eye",
    label: "eye"
  },
  {
    value: "bi bi-eye-fill",
    label: "eye-fill"
  },
  {
    value: "bi bi-eye-slash",
    label: "eye-slash"
  },
  {
    value: "bi bi-eye-slash-fill",
    label: "eye-slash-fill"
  },
  {
    value: "bi bi-eyedropper",
    label: "eyedropper"
  },
  {
    value: "bi bi-eyeglasses",
    label: "eyeglasses"
  },
  {
    value: "bi bi-facebook",
    label: "facebook"
  },
  {
    value: "bi bi-fan",
    label: "fan"
  },
  {
    value: "bi bi-fast-forward",
    label: "fast-forward"
  },
  {
    value: "bi bi-fast-forward-btn",
    label: "fast-forward-btn"
  },
  {
    value: "bi bi-fast-forward-btn-fill",
    label: "fast-forward-btn-fill"
  },
  {
    value: "bi bi-fast-forward-circle",
    label: "fast-forward-circle"
  },
  {
    value: "bi bi-fast-forward-circle-fill",
    label: "fast-forward-circle-fill"
  },
  {
    value: "bi bi-fast-forward-fill",
    label: "fast-forward-fill"
  },
  {
    value: "bi bi-feather",
    label: "feather"
  },
  {
    value: "bi bi-feather2",
    label: "feather2"
  },
  {
    value: "bi bi-file",
    label: "file"
  },
  {
    value: "bi bi-file-arrow-down",
    label: "file-arrow-down"
  },
  {
    value: "bi bi-file-arrow-down-fill",
    label: "file-arrow-down-fill"
  },
  {
    value: "bi bi-file-arrow-up",
    label: "file-arrow-up"
  },
  {
    value: "bi bi-file-arrow-up-fill",
    label: "file-arrow-up-fill"
  },
  {
    value: "bi bi-file-bar-graph",
    label: "file-bar-graph"
  },
  {
    value: "bi bi-file-bar-graph-fill",
    label: "file-bar-graph-fill"
  },
  {
    value: "bi bi-file-binary",
    label: "file-binary"
  },
  {
    value: "bi bi-file-binary-fill",
    label: "file-binary-fill"
  },
  {
    value: "bi bi-file-break",
    label: "file-break"
  },
  {
    value: "bi bi-file-break-fill",
    label: "file-break-fill"
  },
  {
    value: "bi bi-file-check",
    label: "file-check"
  },
  {
    value: "bi bi-file-check-fill",
    label: "file-check-fill"
  },
  {
    value: "bi bi-file-code",
    label: "file-code"
  },
  {
    value: "bi bi-file-code-fill",
    label: "file-code-fill"
  },
  {
    value: "bi bi-file-diff",
    label: "file-diff"
  },
  {
    value: "bi bi-file-diff-fill",
    label: "file-diff-fill"
  },
  {
    value: "bi bi-file-earmark",
    label: "file-earmark"
  },
  {
    value: "bi bi-file-earmark-arrow-down",
    label: "file-earmark-arrow-down"
  },
  {
    value: "bi bi-file-earmark-arrow-down-fill",
    label: "file-earmark-arrow-down-fill"
  },
  {
    value: "bi bi-file-earmark-arrow-up",
    label: "file-earmark-arrow-up"
  },
  {
    value: "bi bi-file-earmark-arrow-up-fill",
    label: "file-earmark-arrow-up-fill"
  },
  {
    value: "bi bi-file-earmark-bar-graph",
    label: "file-earmark-bar-graph"
  },
  {
    value: "bi bi-file-earmark-bar-graph-fill",
    label: "file-earmark-bar-graph-fill"
  },
  {
    value: "bi bi-file-earmark-binary",
    label: "file-earmark-binary"
  },
  {
    value: "bi bi-file-earmark-binary-fill",
    label: "file-earmark-binary-fill"
  },
  {
    value: "bi bi-file-earmark-break",
    label: "file-earmark-break"
  },
  {
    value: "bi bi-file-earmark-break-fill",
    label: "file-earmark-break-fill"
  },
  {
    value: "bi bi-file-earmark-check",
    label: "file-earmark-check"
  },
  {
    value: "bi bi-file-earmark-check-fill",
    label: "file-earmark-check-fill"
  },
  {
    value: "bi bi-file-earmark-code",
    label: "file-earmark-code"
  },
  {
    value: "bi bi-file-earmark-code-fill",
    label: "file-earmark-code-fill"
  },
  {
    value: "bi bi-file-earmark-diff",
    label: "file-earmark-diff"
  },
  {
    value: "bi bi-file-earmark-diff-fill",
    label: "file-earmark-diff-fill"
  },
  {
    value: "bi bi-file-earmark-easel",
    label: "file-earmark-easel"
  },
  {
    value: "bi bi-file-earmark-easel-fill",
    label: "file-earmark-easel-fill"
  },
  {
    value: "bi bi-file-earmark-excel",
    label: "file-earmark-excel"
  },
  {
    value: "bi bi-file-earmark-excel-fill",
    label: "file-earmark-excel-fill"
  },
  {
    value: "bi bi-file-earmark-fill",
    label: "file-earmark-fill"
  },
  {
    value: "bi bi-file-earmark-font",
    label: "file-earmark-font"
  },
  {
    value: "bi bi-file-earmark-font-fill",
    label: "file-earmark-font-fill"
  },
  {
    value: "bi bi-file-earmark-image",
    label: "file-earmark-image"
  },
  {
    value: "bi bi-file-earmark-image-fill",
    label: "file-earmark-image-fill"
  },
  {
    value: "bi bi-file-earmark-lock",
    label: "file-earmark-lock"
  },
  {
    value: "bi bi-file-earmark-lock-fill",
    label: "file-earmark-lock-fill"
  },
  {
    value: "bi bi-file-earmark-lock2",
    label: "file-earmark-lock2"
  },
  {
    value: "bi bi-file-earmark-lock2-fill",
    label: "file-earmark-lock2-fill"
  },
  {
    value: "bi bi-file-earmark-medical",
    label: "file-earmark-medical"
  },
  {
    value: "bi bi-file-earmark-medical-fill",
    label: "file-earmark-medical-fill"
  },
  {
    value: "bi bi-file-earmark-minus",
    label: "file-earmark-minus"
  },
  {
    value: "bi bi-file-earmark-minus-fill",
    label: "file-earmark-minus-fill"
  },
  {
    value: "bi bi-file-earmark-music",
    label: "file-earmark-music"
  },
  {
    value: "bi bi-file-earmark-music-fill",
    label: "file-earmark-music-fill"
  },
  {
    value: "bi bi-file-earmark-pdf",
    label: "file-earmark-pdf"
  },
  {
    value: "bi bi-file-earmark-pdf-fill",
    label: "file-earmark-pdf-fill"
  },
  {
    value: "bi bi-file-earmark-person",
    label: "file-earmark-person"
  },
  {
    value: "bi bi-file-earmark-person-fill",
    label: "file-earmark-person-fill"
  },
  {
    value: "bi bi-file-earmark-play",
    label: "file-earmark-play"
  },
  {
    value: "bi bi-file-earmark-play-fill",
    label: "file-earmark-play-fill"
  },
  {
    value: "bi bi-file-earmark-plus",
    label: "file-earmark-plus"
  },
  {
    value: "bi bi-file-earmark-plus-fill",
    label: "file-earmark-plus-fill"
  },
  {
    value: "bi bi-file-earmark-post",
    label: "file-earmark-post"
  },
  {
    value: "bi bi-file-earmark-post-fill",
    label: "file-earmark-post-fill"
  },
  {
    value: "bi bi-file-earmark-ppt",
    label: "file-earmark-ppt"
  },
  {
    value: "bi bi-file-earmark-ppt-fill",
    label: "file-earmark-ppt-fill"
  },
  {
    value: "bi bi-file-earmark-richtext",
    label: "file-earmark-richtext"
  },
  {
    value: "bi bi-file-earmark-richtext-fill",
    label: "file-earmark-richtext-fill"
  },
  {
    value: "bi bi-file-earmark-ruled",
    label: "file-earmark-ruled"
  },
  {
    value: "bi bi-file-earmark-ruled-fill",
    label: "file-earmark-ruled-fill"
  },
  {
    value: "bi bi-file-earmark-slides",
    label: "file-earmark-slides"
  },
  {
    value: "bi bi-file-earmark-slides-fill",
    label: "file-earmark-slides-fill"
  },
  {
    value: "bi bi-file-earmark-spreadsheet",
    label: "file-earmark-spreadsheet"
  },
  {
    value: "bi bi-file-earmark-spreadsheet-fill",
    label: "file-earmark-spreadsheet-fill"
  },
  {
    value: "bi bi-file-earmark-text",
    label: "file-earmark-text"
  },
  {
    value: "bi bi-file-earmark-text-fill",
    label: "file-earmark-text-fill"
  },
  {
    value: "bi bi-file-earmark-word",
    label: "file-earmark-word"
  },
  {
    value: "bi bi-file-earmark-word-fill",
    label: "file-earmark-word-fill"
  },
  {
    value: "bi bi-file-earmark-x",
    label: "file-earmark-x"
  },
  {
    value: "bi bi-file-earmark-x-fill",
    label: "file-earmark-x-fill"
  },
  {
    value: "bi bi-file-earmark-zip",
    label: "file-earmark-zip"
  },
  {
    value: "bi bi-file-earmark-zip-fill",
    label: "file-earmark-zip-fill"
  },
  {
    value: "bi bi-file-easel",
    label: "file-easel"
  },
  {
    value: "bi bi-file-easel-fill",
    label: "file-easel-fill"
  },
  {
    value: "bi bi-file-excel",
    label: "file-excel"
  },
  {
    value: "bi bi-file-excel-fill",
    label: "file-excel-fill"
  },
  {
    value: "bi bi-file-fill",
    label: "file-fill"
  },
  {
    value: "bi bi-file-font",
    label: "file-font"
  },
  {
    value: "bi bi-file-font-fill",
    label: "file-font-fill"
  },
  {
    value: "bi bi-file-image",
    label: "file-image"
  },
  {
    value: "bi bi-file-image-fill",
    label: "file-image-fill"
  },
  {
    value: "bi bi-file-lock",
    label: "file-lock"
  },
  {
    value: "bi bi-file-lock-fill",
    label: "file-lock-fill"
  },
  {
    value: "bi bi-file-lock2",
    label: "file-lock2"
  },
  {
    value: "bi bi-file-lock2-fill",
    label: "file-lock2-fill"
  },
  {
    value: "bi bi-file-medical",
    label: "file-medical"
  },
  {
    value: "bi bi-file-medical-fill",
    label: "file-medical-fill"
  },
  {
    value: "bi bi-file-minus",
    label: "file-minus"
  },
  {
    value: "bi bi-file-minus-fill",
    label: "file-minus-fill"
  },
  {
    value: "bi bi-file-music",
    label: "file-music"
  },
  {
    value: "bi bi-file-music-fill",
    label: "file-music-fill"
  },
  {
    value: "bi bi-file-pdf",
    label: "file-pdf"
  },
  {
    value: "bi bi-file-pdf-fill",
    label: "file-pdf-fill"
  },
  {
    value: "bi bi-file-person",
    label: "file-person"
  },
  {
    value: "bi bi-file-person-fill",
    label: "file-person-fill"
  },
  {
    value: "bi bi-file-play",
    label: "file-play"
  },
  {
    value: "bi bi-file-play-fill",
    label: "file-play-fill"
  },
  {
    value: "bi bi-file-plus",
    label: "file-plus"
  },
  {
    value: "bi bi-file-plus-fill",
    label: "file-plus-fill"
  },
  {
    value: "bi bi-file-post",
    label: "file-post"
  },
  {
    value: "bi bi-file-post-fill",
    label: "file-post-fill"
  },
  {
    value: "bi bi-file-ppt",
    label: "file-ppt"
  },
  {
    value: "bi bi-file-ppt-fill",
    label: "file-ppt-fill"
  },
  {
    value: "bi bi-file-richtext",
    label: "file-richtext"
  },
  {
    value: "bi bi-file-richtext-fill",
    label: "file-richtext-fill"
  },
  {
    value: "bi bi-file-ruled",
    label: "file-ruled"
  },
  {
    value: "bi bi-file-ruled-fill",
    label: "file-ruled-fill"
  },
  {
    value: "bi bi-file-slides",
    label: "file-slides"
  },
  {
    value: "bi bi-file-slides-fill",
    label: "file-slides-fill"
  },
  {
    value: "bi bi-file-spreadsheet",
    label: "file-spreadsheet"
  },
  {
    value: "bi bi-file-spreadsheet-fill",
    label: "file-spreadsheet-fill"
  },
  {
    value: "bi bi-file-text",
    label: "file-text"
  },
  {
    value: "bi bi-file-text-fill",
    label: "file-text-fill"
  },
  {
    value: "bi bi-file-word",
    label: "file-word"
  },
  {
    value: "bi bi-file-word-fill",
    label: "file-word-fill"
  },
  {
    value: "bi bi-file-x",
    label: "file-x"
  },
  {
    value: "bi bi-file-x-fill",
    label: "file-x-fill"
  },
  {
    value: "bi bi-file-zip",
    label: "file-zip"
  },
  {
    value: "bi bi-file-zip-fill",
    label: "file-zip-fill"
  },
  {
    value: "bi bi-files",
    label: "files"
  },
  {
    value: "bi bi-files-alt",
    label: "files-alt"
  },
  {
    value: "bi bi-filetype-aac",
    label: "filetype-aac"
  },
  {
    value: "bi bi-filetype-ai",
    label: "filetype-ai"
  },
  {
    value: "bi bi-filetype-bmp",
    label: "filetype-bmp"
  },
  {
    value: "bi bi-filetype-cs",
    label: "filetype-cs"
  },
  {
    value: "bi bi-filetype-css",
    label: "filetype-css"
  },
  {
    value: "bi bi-filetype-csv",
    label: "filetype-csv"
  },
  {
    value: "bi bi-filetype-doc",
    label: "filetype-doc"
  },
  {
    value: "bi bi-filetype-docx",
    label: "filetype-docx"
  },
  {
    value: "bi bi-filetype-exe",
    label: "filetype-exe"
  },
  {
    value: "bi bi-filetype-gif",
    label: "filetype-gif"
  },
  {
    value: "bi bi-filetype-heic",
    label: "filetype-heic"
  },
  {
    value: "bi bi-filetype-html",
    label: "filetype-html"
  },
  {
    value: "bi bi-filetype-java",
    label: "filetype-java"
  },
  {
    value: "bi bi-filetype-jpg",
    label: "filetype-jpg"
  },
  {
    value: "bi bi-filetype-js",
    label: "filetype-js"
  },
  {
    value: "bi bi-filetype-json",
    label: "filetype-json"
  },
  {
    value: "bi bi-filetype-jsx",
    label: "filetype-jsx"
  },
  {
    value: "bi bi-filetype-key",
    label: "filetype-key"
  },
  {
    value: "bi bi-filetype-m4p",
    label: "filetype-m4p"
  },
  {
    value: "bi bi-filetype-md",
    label: "filetype-md"
  },
  {
    value: "bi bi-filetype-mdx",
    label: "filetype-mdx"
  },
  {
    value: "bi bi-filetype-mov",
    label: "filetype-mov"
  },
  {
    value: "bi bi-filetype-mp3",
    label: "filetype-mp3"
  },
  {
    value: "bi bi-filetype-mp4",
    label: "filetype-mp4"
  },
  {
    value: "bi bi-filetype-otf",
    label: "filetype-otf"
  },
  {
    value: "bi bi-filetype-pdf",
    label: "filetype-pdf"
  },
  {
    value: "bi bi-filetype-php",
    label: "filetype-php"
  },
  {
    value: "bi bi-filetype-png",
    label: "filetype-png"
  },
  {
    value: "bi bi-filetype-ppt",
    label: "filetype-ppt"
  },
  {
    value: "bi bi-filetype-pptx",
    label: "filetype-pptx"
  },
  {
    value: "bi bi-filetype-psd",
    label: "filetype-psd"
  },
  {
    value: "bi bi-filetype-py",
    label: "filetype-py"
  },
  {
    value: "bi bi-filetype-raw",
    label: "filetype-raw"
  },
  {
    value: "bi bi-filetype-rb",
    label: "filetype-rb"
  },
  {
    value: "bi bi-filetype-sass",
    label: "filetype-sass"
  },
  {
    value: "bi bi-filetype-scss",
    label: "filetype-scss"
  },
  {
    value: "bi bi-filetype-sh",
    label: "filetype-sh"
  },
  {
    value: "bi bi-filetype-sql",
    label: "filetype-sql"
  },
  {
    value: "bi bi-filetype-svg",
    label: "filetype-svg"
  },
  {
    value: "bi bi-filetype-tiff",
    label: "filetype-tiff"
  },
  {
    value: "bi bi-filetype-tsx",
    label: "filetype-tsx"
  },
  {
    value: "bi bi-filetype-ttf",
    label: "filetype-ttf"
  },
  {
    value: "bi bi-filetype-txt",
    label: "filetype-txt"
  },
  {
    value: "bi bi-filetype-wav",
    label: "filetype-wav"
  },
  {
    value: "bi bi-filetype-woff",
    label: "filetype-woff"
  },
  {
    value: "bi bi-filetype-xls",
    label: "filetype-xls"
  },
  {
    value: "bi bi-filetype-xlsx",
    label: "filetype-xlsx"
  },
  {
    value: "bi bi-filetype-xml",
    label: "filetype-xml"
  },
  {
    value: "bi bi-filetype-yml",
    label: "filetype-yml"
  },
  {
    value: "bi bi-film",
    label: "film"
  },
  {
    value: "bi bi-filter",
    label: "filter"
  },
  {
    value: "bi bi-filter-circle",
    label: "filter-circle"
  },
  {
    value: "bi bi-filter-circle-fill",
    label: "filter-circle-fill"
  },
  {
    value: "bi bi-filter-left",
    label: "filter-left"
  },
  {
    value: "bi bi-filter-right",
    label: "filter-right"
  },
  {
    value: "bi bi-filter-square",
    label: "filter-square"
  },
  {
    value: "bi bi-filter-square-fill",
    label: "filter-square-fill"
  },
  {
    value: "bi bi-fingerprint",
    label: "fingerprint"
  },
  {
    value: "bi bi-fire",
    label: "fire"
  },
  {
    value: "bi bi-flag",
    label: "flag"
  },
  {
    value: "bi bi-flag-fill",
    label: "flag-fill"
  },
  {
    value: "bi bi-floppy",
    label: "floppy"
  },
  {
    value: "bi bi-floppy-fill",
    label: "floppy-fill"
  },
  {
    value: "bi bi-floppy2",
    label: "floppy2"
  },
  {
    value: "bi bi-floppy2-fill",
    label: "floppy2-fill"
  },
  {
    value: "bi bi-flower1",
    label: "flower1"
  },
  {
    value: "bi bi-flower2",
    label: "flower2"
  },
  {
    value: "bi bi-flower3",
    label: "flower3"
  },
  {
    value: "bi bi-folder",
    label: "folder"
  },
  {
    value: "bi bi-folder-check",
    label: "folder-check"
  },
  {
    value: "bi bi-folder-fill",
    label: "folder-fill"
  },
  {
    value: "bi bi-folder-minus",
    label: "folder-minus"
  },
  {
    value: "bi bi-folder-plus",
    label: "folder-plus"
  },
  {
    value: "bi bi-folder-symlink",
    label: "folder-symlink"
  },
  {
    value: "bi bi-folder-symlink-fill",
    label: "folder-symlink-fill"
  },
  {
    value: "bi bi-folder-x",
    label: "folder-x"
  },
  {
    value: "bi bi-folder2",
    label: "folder2"
  },
  {
    value: "bi bi-folder2-open",
    label: "folder2-open"
  },
  {
    value: "bi bi-fonts",
    label: "fonts"
  },
  {
    value: "bi bi-forward",
    label: "forward"
  },
  {
    value: "bi bi-forward-fill",
    label: "forward-fill"
  },
  {
    value: "bi bi-front",
    label: "front"
  },
  {
    value: "bi bi-fuel-pump",
    label: "fuel-pump"
  },
  {
    value: "bi bi-fuel-pump-diesel",
    label: "fuel-pump-diesel"
  },
  {
    value: "bi bi-fuel-pump-diesel-fill",
    label: "fuel-pump-diesel-fill"
  },
  {
    value: "bi bi-fuel-pump-fill",
    label: "fuel-pump-fill"
  },
  {
    value: "bi bi-fullscreen",
    label: "fullscreen"
  },
  {
    value: "bi bi-fullscreen-exit",
    label: "fullscreen-exit"
  },
  {
    value: "bi bi-funnel",
    label: "funnel"
  },
  {
    value: "bi bi-funnel-fill",
    label: "funnel-fill"
  },
  {
    value: "bi bi-gear",
    label: "gear"
  },
  {
    value: "bi bi-gear-fill",
    label: "gear-fill"
  },
  {
    value: "bi bi-gear-wide",
    label: "gear-wide"
  },
  {
    value: "bi bi-gear-wide-connected",
    label: "gear-wide-connected"
  },
  {
    value: "bi bi-gem",
    label: "gem"
  },
  {
    value: "bi bi-gender-ambiguous",
    label: "gender-ambiguous"
  },
  {
    value: "bi bi-gender-female",
    label: "gender-female"
  },
  {
    value: "bi bi-gender-male",
    label: "gender-male"
  },
  {
    value: "bi bi-gender-neuter",
    label: "gender-neuter"
  },
  {
    value: "bi bi-gender-trans",
    label: "gender-trans"
  },
  {
    value: "bi bi-geo",
    label: "geo"
  },
  {
    value: "bi bi-geo-alt",
    label: "geo-alt"
  },
  {
    value: "bi bi-geo-alt-fill",
    label: "geo-alt-fill"
  },
  {
    value: "bi bi-geo-fill",
    label: "geo-fill"
  },
  {
    value: "bi bi-gift",
    label: "gift"
  },
  {
    value: "bi bi-gift-fill",
    label: "gift-fill"
  },
  {
    value: "bi bi-git",
    label: "git"
  },
  {
    value: "bi bi-github",
    label: "github"
  },
  {
    value: "bi bi-gitlab",
    label: "gitlab"
  },
  {
    value: "bi bi-globe",
    label: "globe"
  },
  {
    value: "bi bi-globe-americas",
    label: "globe-americas"
  },
  {
    value: "bi bi-globe-asia-australia",
    label: "globe-asia-australia"
  },
  {
    value: "bi bi-globe-central-south-asia",
    label: "globe-central-south-asia"
  },
  {
    value: "bi bi-globe-europe-africa",
    label: "globe-europe-africa"
  },
  {
    value: "bi bi-globe2",
    label: "globe2"
  },
  {
    value: "bi bi-google",
    label: "google"
  },
  {
    value: "bi bi-google-play",
    label: "google-play"
  },
  {
    value: "bi bi-gpu-card",
    label: "gpu-card"
  },
  {
    value: "bi bi-graph-down",
    label: "graph-down"
  },
  {
    value: "bi bi-graph-down-arrow",
    label: "graph-down-arrow"
  },
  {
    value: "bi bi-graph-up",
    label: "graph-up"
  },
  {
    value: "bi bi-graph-up-arrow",
    label: "graph-up-arrow"
  },
  {
    value: "bi bi-grid",
    label: "grid"
  },
  {
    value: "bi bi-grid-1x2",
    label: "grid-1x2"
  },
  {
    value: "bi bi-grid-1x2-fill",
    label: "grid-1x2-fill"
  },
  {
    value: "bi bi-grid-3x2",
    label: "grid-3x2"
  },
  {
    value: "bi bi-grid-3x2-gap",
    label: "grid-3x2-gap"
  },
  {
    value: "bi bi-grid-3x2-gap-fill",
    label: "grid-3x2-gap-fill"
  },
  {
    value: "bi bi-grid-3x3",
    label: "grid-3x3"
  },
  {
    value: "bi bi-grid-3x3-gap",
    label: "grid-3x3-gap"
  },
  {
    value: "bi bi-grid-3x3-gap-fill",
    label: "grid-3x3-gap-fill"
  },
  {
    value: "bi bi-grid-fill",
    label: "grid-fill"
  },
  {
    value: "bi bi-grip-horizontal",
    label: "grip-horizontal"
  },
  {
    value: "bi bi-grip-vertical",
    label: "grip-vertical"
  },
  {
    value: "bi bi-h-circle",
    label: "h-circle"
  },
  {
    value: "bi bi-h-circle-fill",
    label: "h-circle-fill"
  },
  {
    value: "bi bi-h-square",
    label: "h-square"
  },
  {
    value: "bi bi-h-square-fill",
    label: "h-square-fill"
  },
  {
    value: "bi bi-hammer",
    label: "hammer"
  },
  {
    value: "bi bi-hand-index",
    label: "hand-index"
  },
  {
    value: "bi bi-hand-index-fill",
    label: "hand-index-fill"
  },
  {
    value: "bi bi-hand-index-thumb",
    label: "hand-index-thumb"
  },
  {
    value: "bi bi-hand-index-thumb-fill",
    label: "hand-index-thumb-fill"
  },
  {
    value: "bi bi-hand-thumbs-down",
    label: "hand-thumbs-down"
  },
  {
    value: "bi bi-hand-thumbs-down-fill",
    label: "hand-thumbs-down-fill"
  },
  {
    value: "bi bi-hand-thumbs-up",
    label: "hand-thumbs-up"
  },
  {
    value: "bi bi-hand-thumbs-up-fill",
    label: "hand-thumbs-up-fill"
  },
  {
    value: "bi bi-handbag",
    label: "handbag"
  },
  {
    value: "bi bi-handbag-fill",
    label: "handbag-fill"
  },
  {
    value: "bi bi-hash",
    label: "hash"
  },
  {
    value: "bi bi-hdd",
    label: "hdd"
  },
  {
    value: "bi bi-hdd-fill",
    label: "hdd-fill"
  },
  {
    value: "bi bi-hdd-network",
    label: "hdd-network"
  },
  {
    value: "bi bi-hdd-network-fill",
    label: "hdd-network-fill"
  },
  {
    value: "bi bi-hdd-rack",
    label: "hdd-rack"
  },
  {
    value: "bi bi-hdd-rack-fill",
    label: "hdd-rack-fill"
  },
  {
    value: "bi bi-hdd-stack",
    label: "hdd-stack"
  },
  {
    value: "bi bi-hdd-stack-fill",
    label: "hdd-stack-fill"
  },
  {
    value: "bi bi-hdmi",
    label: "hdmi"
  },
  {
    value: "bi bi-hdmi-fill",
    label: "hdmi-fill"
  },
  {
    value: "bi bi-headphones",
    label: "headphones"
  },
  {
    value: "bi bi-headset",
    label: "headset"
  },
  {
    value: "bi bi-headset-vr",
    label: "headset-vr"
  },
  {
    value: "bi bi-heart",
    label: "heart"
  },
  {
    value: "bi bi-heart-arrow",
    label: "heart-arrow"
  },
  {
    value: "bi bi-heart-fill",
    label: "heart-fill"
  },
  {
    value: "bi bi-heart-half",
    label: "heart-half"
  },
  {
    value: "bi bi-heart-pulse",
    label: "heart-pulse"
  },
  {
    value: "bi bi-heart-pulse-fill",
    label: "heart-pulse-fill"
  },
  {
    value: "bi bi-heartbreak",
    label: "heartbreak"
  },
  {
    value: "bi bi-heartbreak-fill",
    label: "heartbreak-fill"
  },
  {
    value: "bi bi-hearts",
    label: "hearts"
  },
  {
    value: "bi bi-heptagon",
    label: "heptagon"
  },
  {
    value: "bi bi-heptagon-fill",
    label: "heptagon-fill"
  },
  {
    value: "bi bi-heptagon-half",
    label: "heptagon-half"
  },
  {
    value: "bi bi-hexagon",
    label: "hexagon"
  },
  {
    value: "bi bi-hexagon-fill",
    label: "hexagon-fill"
  },
  {
    value: "bi bi-hexagon-half",
    label: "hexagon-half"
  },
  {
    value: "bi bi-highlighter",
    label: "highlighter"
  },
  {
    value: "bi bi-highlights",
    label: "highlights"
  },
  {
    value: "bi bi-hospital",
    label: "hospital"
  },
  {
    value: "bi bi-hospital-fill",
    label: "hospital-fill"
  },
  {
    value: "bi bi-hourglass",
    label: "hourglass"
  },
  {
    value: "bi bi-hourglass-bottom",
    label: "hourglass-bottom"
  },
  {
    value: "bi bi-hourglass-split",
    label: "hourglass-split"
  },
  {
    value: "bi bi-hourglass-top",
    label: "hourglass-top"
  },
  {
    value: "bi bi-house",
    label: "house"
  },
  {
    value: "bi bi-house-add",
    label: "house-add"
  },
  {
    value: "bi bi-house-add-fill",
    label: "house-add-fill"
  },
  {
    value: "bi bi-house-check",
    label: "house-check"
  },
  {
    value: "bi bi-house-check-fill",
    label: "house-check-fill"
  },
  {
    value: "bi bi-house-dash",
    label: "house-dash"
  },
  {
    value: "bi bi-house-dash-fill",
    label: "house-dash-fill"
  },
  {
    value: "bi bi-house-door",
    label: "house-door"
  },
  {
    value: "bi bi-house-door-fill",
    label: "house-door-fill"
  },
  {
    value: "bi bi-house-down",
    label: "house-down"
  },
  {
    value: "bi bi-house-down-fill",
    label: "house-down-fill"
  },
  {
    value: "bi bi-house-exclamation",
    label: "house-exclamation"
  },
  {
    value: "bi bi-house-exclamation-fill",
    label: "house-exclamation-fill"
  },
  {
    value: "bi bi-house-fill",
    label: "house-fill"
  },
  {
    value: "bi bi-house-gear",
    label: "house-gear"
  },
  {
    value: "bi bi-house-gear-fill",
    label: "house-gear-fill"
  },
  {
    value: "bi bi-house-heart",
    label: "house-heart"
  },
  {
    value: "bi bi-house-heart-fill",
    label: "house-heart-fill"
  },
  {
    value: "bi bi-house-lock",
    label: "house-lock"
  },
  {
    value: "bi bi-house-lock-fill",
    label: "house-lock-fill"
  },
  {
    value: "bi bi-house-slash",
    label: "house-slash"
  },
  {
    value: "bi bi-house-slash-fill",
    label: "house-slash-fill"
  },
  {
    value: "bi bi-house-up",
    label: "house-up"
  },
  {
    value: "bi bi-house-up-fill",
    label: "house-up-fill"
  },
  {
    value: "bi bi-house-x",
    label: "house-x"
  },
  {
    value: "bi bi-house-x-fill",
    label: "house-x-fill"
  },
  {
    value: "bi bi-houses",
    label: "houses"
  },
  {
    value: "bi bi-houses-fill",
    label: "houses-fill"
  },
  {
    value: "bi bi-hr",
    label: "hr"
  },
  {
    value: "bi bi-hurricane",
    label: "hurricane"
  },
  {
    value: "bi bi-hypnotize",
    label: "hypnotize"
  },
  {
    value: "bi bi-image",
    label: "image"
  },
  {
    value: "bi bi-image-alt",
    label: "image-alt"
  },
  {
    value: "bi bi-image-fill",
    label: "image-fill"
  },
  {
    value: "bi bi-images",
    label: "images"
  },
  {
    value: "bi bi-inbox",
    label: "inbox"
  },
  {
    value: "bi bi-inbox-fill",
    label: "inbox-fill"
  },
  {
    value: "bi bi-inboxes-fill",
    label: "inboxes-fill"
  },
  {
    value: "bi bi-inboxes",
    label: "inboxes"
  },
  {
    value: "bi bi-incognito",
    label: "incognito"
  },
  {
    value: "bi bi-indent",
    label: "indent"
  },
  {
    value: "bi bi-infinity",
    label: "infinity"
  },
  {
    value: "bi bi-info",
    label: "info"
  },
  {
    value: "bi bi-info-circle",
    label: "info-circle"
  },
  {
    value: "bi bi-info-circle-fill",
    label: "info-circle-fill"
  },
  {
    value: "bi bi-info-lg",
    label: "info-lg"
  },
  {
    value: "bi bi-info-square",
    label: "info-square"
  },
  {
    value: "bi bi-info-square-fill",
    label: "info-square-fill"
  },
  {
    value: "bi bi-input-cursor",
    label: "input-cursor"
  },
  {
    value: "bi bi-input-cursor-text",
    label: "input-cursor-text"
  },
  {
    value: "bi bi-instagram",
    label: "instagram"
  },
  {
    value: "bi bi-intersect",
    label: "intersect"
  },
  {
    value: "bi bi-journal",
    label: "journal"
  },
  {
    value: "bi bi-journal-album",
    label: "journal-album"
  },
  {
    value: "bi bi-journal-arrow-down",
    label: "journal-arrow-down"
  },
  {
    value: "bi bi-journal-arrow-up",
    label: "journal-arrow-up"
  },
  {
    value: "bi bi-journal-bookmark",
    label: "journal-bookmark"
  },
  {
    value: "bi bi-journal-bookmark-fill",
    label: "journal-bookmark-fill"
  },
  {
    value: "bi bi-journal-check",
    label: "journal-check"
  },
  {
    value: "bi bi-journal-code",
    label: "journal-code"
  },
  {
    value: "bi bi-journal-medical",
    label: "journal-medical"
  },
  {
    value: "bi bi-journal-minus",
    label: "journal-minus"
  },
  {
    value: "bi bi-journal-plus",
    label: "journal-plus"
  },
  {
    value: "bi bi-journal-richtext",
    label: "journal-richtext"
  },
  {
    value: "bi bi-journal-text",
    label: "journal-text"
  },
  {
    value: "bi bi-journal-x",
    label: "journal-x"
  },
  {
    value: "bi bi-journals",
    label: "journals"
  },
  {
    value: "bi bi-joystick",
    label: "joystick"
  },
  {
    value: "bi bi-justify",
    label: "justify"
  },
  {
    value: "bi bi-justify-left",
    label: "justify-left"
  },
  {
    value: "bi bi-justify-right",
    label: "justify-right"
  },
  {
    value: "bi bi-kanban",
    label: "kanban"
  },
  {
    value: "bi bi-kanban-fill",
    label: "kanban-fill"
  },
  {
    value: "bi bi-key",
    label: "key"
  },
  {
    value: "bi bi-key-fill",
    label: "key-fill"
  },
  {
    value: "bi bi-keyboard",
    label: "keyboard"
  },
  {
    value: "bi bi-keyboard-fill",
    label: "keyboard-fill"
  },
  {
    value: "bi bi-ladder",
    label: "ladder"
  },
  {
    value: "bi bi-lamp",
    label: "lamp"
  },
  {
    value: "bi bi-lamp-fill",
    label: "lamp-fill"
  },
  {
    value: "bi bi-laptop",
    label: "laptop"
  },
  {
    value: "bi bi-laptop-fill",
    label: "laptop-fill"
  },
  {
    value: "bi bi-layer-backward",
    label: "layer-backward"
  },
  {
    value: "bi bi-layer-forward",
    label: "layer-forward"
  },
  {
    value: "bi bi-layers",
    label: "layers"
  },
  {
    value: "bi bi-layers-fill",
    label: "layers-fill"
  },
  {
    value: "bi bi-layers-half",
    label: "layers-half"
  },
  {
    value: "bi bi-layout-sidebar",
    label: "layout-sidebar"
  },
  {
    value: "bi bi-layout-sidebar-inset-reverse",
    label: "layout-sidebar-inset-reverse"
  },
  {
    value: "bi bi-layout-sidebar-inset",
    label: "layout-sidebar-inset"
  },
  {
    value: "bi bi-layout-sidebar-reverse",
    label: "layout-sidebar-reverse"
  },
  {
    value: "bi bi-layout-split",
    label: "layout-split"
  },
  {
    value: "bi bi-layout-text-sidebar",
    label: "layout-text-sidebar"
  },
  {
    value: "bi bi-layout-text-sidebar-reverse",
    label: "layout-text-sidebar-reverse"
  },
  {
    value: "bi bi-layout-text-window",
    label: "layout-text-window"
  },
  {
    value: "bi bi-layout-text-window-reverse",
    label: "layout-text-window-reverse"
  },
  {
    value: "bi bi-layout-three-columns",
    label: "layout-three-columns"
  },
  {
    value: "bi bi-layout-wtf",
    label: "layout-wtf"
  },
  {
    value: "bi bi-life-preserver",
    label: "life-preserver"
  },
  {
    value: "bi bi-lightbulb",
    label: "lightbulb"
  },
  {
    value: "bi bi-lightbulb-fill",
    label: "lightbulb-fill"
  },
  {
    value: "bi bi-lightbulb-off",
    label: "lightbulb-off"
  },
  {
    value: "bi bi-lightbulb-off-fill",
    label: "lightbulb-off-fill"
  },
  {
    value: "bi bi-lightning",
    label: "lightning"
  },
  {
    value: "bi bi-lightning-charge",
    label: "lightning-charge"
  },
  {
    value: "bi bi-lightning-charge-fill",
    label: "lightning-charge-fill"
  },
  {
    value: "bi bi-lightning-fill",
    label: "lightning-fill"
  },
  {
    value: "bi bi-line",
    label: "line"
  },
  {
    value: "bi bi-link",
    label: "link"
  },
  {
    value: "bi bi-link-45deg",
    label: "link-45deg"
  },
  {
    value: "bi bi-linkedin",
    label: "linkedin"
  },
  {
    value: "bi bi-list",
    label: "list"
  },
  {
    value: "bi bi-list-check",
    label: "list-check"
  },
  {
    value: "bi bi-list-columns",
    label: "list-columns"
  },
  {
    value: "bi bi-list-columns-reverse",
    label: "list-columns-reverse"
  },
  {
    value: "bi bi-list-nested",
    label: "list-nested"
  },
  {
    value: "bi bi-list-ol",
    label: "list-ol"
  },
  {
    value: "bi bi-list-stars",
    label: "list-stars"
  },
  {
    value: "bi bi-list-task",
    label: "list-task"
  },
  {
    value: "bi bi-list-ul",
    label: "list-ul"
  },
  {
    value: "bi bi-lock",
    label: "lock"
  },
  {
    value: "bi bi-lock-fill",
    label: "lock-fill"
  },
  {
    value: "bi bi-luggage",
    label: "luggage"
  },
  {
    value: "bi bi-luggage-fill",
    label: "luggage-fill"
  },
  {
    value: "bi bi-lungs",
    label: "lungs"
  },
  {
    value: "bi bi-lungs-fill",
    label: "lungs-fill"
  },
  {
    value: "bi bi-magic",
    label: "magic"
  },
  {
    value: "bi bi-magnet",
    label: "magnet"
  },
  {
    value: "bi bi-magnet-fill",
    label: "magnet-fill"
  },
  {
    value: "bi bi-mailbox",
    label: "mailbox"
  },
  {
    value: "bi bi-mailbox-flag",
    label: "mailbox-flag"
  },
  {
    value: "bi bi-mailbox2",
    label: "mailbox2"
  },
  {
    value: "bi bi-mailbox2-flag",
    label: "mailbox2-flag"
  },
  {
    value: "bi bi-map",
    label: "map"
  },
  {
    value: "bi bi-map-fill",
    label: "map-fill"
  },
  {
    value: "bi bi-markdown",
    label: "markdown"
  },
  {
    value: "bi bi-markdown-fill",
    label: "markdown-fill"
  },
  {
    value: "bi bi-marker-tip",
    label: "marker-tip"
  },
  {
    value: "bi bi-mask",
    label: "mask"
  },
  {
    value: "bi bi-mastodon",
    label: "mastodon"
  },
  {
    value: "bi bi-medium",
    label: "medium"
  },
  {
    value: "bi bi-megaphone",
    label: "megaphone"
  },
  {
    value: "bi bi-megaphone-fill",
    label: "megaphone-fill"
  },
  {
    value: "bi bi-memory",
    label: "memory"
  },
  {
    value: "bi bi-menu-app",
    label: "menu-app"
  },
  {
    value: "bi bi-menu-app-fill",
    label: "menu-app-fill"
  },
  {
    value: "bi bi-menu-button",
    label: "menu-button"
  },
  {
    value: "bi bi-menu-button-fill",
    label: "menu-button-fill"
  },
  {
    value: "bi bi-menu-button-wide",
    label: "menu-button-wide"
  },
  {
    value: "bi bi-menu-button-wide-fill",
    label: "menu-button-wide-fill"
  },
  {
    value: "bi bi-menu-down",
    label: "menu-down"
  },
  {
    value: "bi bi-menu-up",
    label: "menu-up"
  },
  {
    value: "bi bi-messenger",
    label: "messenger"
  },
  {
    value: "bi bi-meta",
    label: "meta"
  },
  {
    value: "bi bi-mic",
    label: "mic"
  },
  {
    value: "bi bi-mic-fill",
    label: "mic-fill"
  },
  {
    value: "bi bi-mic-mute",
    label: "mic-mute"
  },
  {
    value: "bi bi-mic-mute-fill",
    label: "mic-mute-fill"
  },
  {
    value: "bi bi-microsoft",
    label: "microsoft"
  },
  {
    value: "bi bi-microsoft-teams",
    label: "microsoft-teams"
  },
  {
    value: "bi bi-minecart",
    label: "minecart"
  },
  {
    value: "bi bi-minecart-loaded",
    label: "minecart-loaded"
  },
  {
    value: "bi bi-modem",
    label: "modem"
  },
  {
    value: "bi bi-modem-fill",
    label: "modem-fill"
  },
  {
    value: "bi bi-moisture",
    label: "moisture"
  },
  {
    value: "bi bi-moon",
    label: "moon"
  },
  {
    value: "bi bi-moon-fill",
    label: "moon-fill"
  },
  {
    value: "bi bi-moon-stars",
    label: "moon-stars"
  },
  {
    value: "bi bi-moon-stars-fill",
    label: "moon-stars-fill"
  },
  {
    value: "bi bi-mortarboard",
    label: "mortarboard"
  },
  {
    value: "bi bi-mortarboard-fill",
    label: "mortarboard-fill"
  },
  {
    value: "bi bi-motherboard",
    label: "motherboard"
  },
  {
    value: "bi bi-motherboard-fill",
    label: "motherboard-fill"
  },
  {
    value: "bi bi-mouse",
    label: "mouse"
  },
  {
    value: "bi bi-mouse-fill",
    label: "mouse-fill"
  },
  {
    value: "bi bi-mouse2",
    label: "mouse2"
  },
  {
    value: "bi bi-mouse2-fill",
    label: "mouse2-fill"
  },
  {
    value: "bi bi-mouse3",
    label: "mouse3"
  },
  {
    value: "bi bi-mouse3-fill",
    label: "mouse3-fill"
  },
  {
    value: "bi bi-music-note",
    label: "music-note"
  },
  {
    value: "bi bi-music-note-beamed",
    label: "music-note-beamed"
  },
  {
    value: "bi bi-music-note-list",
    label: "music-note-list"
  },
  {
    value: "bi bi-music-player",
    label: "music-player"
  },
  {
    value: "bi bi-music-player-fill",
    label: "music-player-fill"
  },
  {
    value: "bi bi-newspaper",
    label: "newspaper"
  },
  {
    value: "bi bi-nintendo-switch",
    label: "nintendo-switch"
  },
  {
    value: "bi bi-node-minus",
    label: "node-minus"
  },
  {
    value: "bi bi-node-minus-fill",
    label: "node-minus-fill"
  },
  {
    value: "bi bi-node-plus",
    label: "node-plus"
  },
  {
    value: "bi bi-node-plus-fill",
    label: "node-plus-fill"
  },
  {
    value: "bi bi-noise-reduction",
    label: "noise-reduction"
  },
  {
    value: "bi bi-nut",
    label: "nut"
  },
  {
    value: "bi bi-nut-fill",
    label: "nut-fill"
  },
  {
    value: "bi bi-nvidia",
    label: "nvidia"
  },
  {
    value: "bi bi-nvme",
    label: "nvme"
  },
  {
    value: "bi bi-nvme-fill",
    label: "nvme-fill"
  },
  {
    value: "bi bi-octagon",
    label: "octagon"
  },
  {
    value: "bi bi-octagon-fill",
    label: "octagon-fill"
  },
  {
    value: "bi bi-octagon-half",
    label: "octagon-half"
  },
  {
    value: "bi bi-opencollective",
    label: "opencollective"
  },
  {
    value: "bi bi-optical-audio",
    label: "optical-audio"
  },
  {
    value: "bi bi-optical-audio-fill",
    label: "optical-audio-fill"
  },
  {
    value: "bi bi-option",
    label: "option"
  },
  {
    value: "bi bi-outlet",
    label: "outlet"
  },
  {
    value: "bi bi-p-circle",
    label: "p-circle"
  },
  {
    value: "bi bi-p-circle-fill",
    label: "p-circle-fill"
  },
  {
    value: "bi bi-p-square",
    label: "p-square"
  },
  {
    value: "bi bi-p-square-fill",
    label: "p-square-fill"
  },
  {
    value: "bi bi-paint-bucket",
    label: "paint-bucket"
  },
  {
    value: "bi bi-palette",
    label: "palette"
  },
  {
    value: "bi bi-palette-fill",
    label: "palette-fill"
  },
  {
    value: "bi bi-palette2",
    label: "palette2"
  },
  {
    value: "bi bi-paperclip",
    label: "paperclip"
  },
  {
    value: "bi bi-paragraph",
    label: "paragraph"
  },
  {
    value: "bi bi-pass",
    label: "pass"
  },
  {
    value: "bi bi-pass-fill",
    label: "pass-fill"
  },
  {
    value: "bi bi-passport",
    label: "passport"
  },
  {
    value: "bi bi-passport-fill",
    label: "passport-fill"
  },
  {
    value: "bi bi-patch-check",
    label: "patch-check"
  },
  {
    value: "bi bi-patch-check-fill",
    label: "patch-check-fill"
  },
  {
    value: "bi bi-patch-exclamation",
    label: "patch-exclamation"
  },
  {
    value: "bi bi-patch-exclamation-fill",
    label: "patch-exclamation-fill"
  },
  {
    value: "bi bi-patch-minus",
    label: "patch-minus"
  },
  {
    value: "bi bi-patch-minus-fill",
    label: "patch-minus-fill"
  },
  {
    value: "bi bi-patch-plus",
    label: "patch-plus"
  },
  {
    value: "bi bi-patch-plus-fill",
    label: "patch-plus-fill"
  },
  {
    value: "bi bi-patch-question",
    label: "patch-question"
  },
  {
    value: "bi bi-patch-question-fill",
    label: "patch-question-fill"
  },
  {
    value: "bi bi-pause",
    label: "pause"
  },
  {
    value: "bi bi-pause-btn",
    label: "pause-btn"
  },
  {
    value: "bi bi-pause-btn-fill",
    label: "pause-btn-fill"
  },
  {
    value: "bi bi-pause-circle",
    label: "pause-circle"
  },
  {
    value: "bi bi-pause-circle-fill",
    label: "pause-circle-fill"
  },
  {
    value: "bi bi-pause-fill",
    label: "pause-fill"
  },
  {
    value: "bi bi-paypal",
    label: "paypal"
  },
  {
    value: "bi bi-pc",
    label: "pc"
  },
  {
    value: "bi bi-pc-display",
    label: "pc-display"
  },
  {
    value: "bi bi-pc-display-horizontal",
    label: "pc-display-horizontal"
  },
  {
    value: "bi bi-pc-horizontal",
    label: "pc-horizontal"
  },
  {
    value: "bi bi-pci-card",
    label: "pci-card"
  },
  {
    value: "bi bi-pci-card-network",
    label: "pci-card-network"
  },
  {
    value: "bi bi-pci-card-sound",
    label: "pci-card-sound"
  },
  {
    value: "bi bi-peace",
    label: "peace"
  },
  {
    value: "bi bi-peace-fill",
    label: "peace-fill"
  },
  {
    value: "bi bi-pen",
    label: "pen"
  },
  {
    value: "bi bi-pen-fill",
    label: "pen-fill"
  },
  {
    value: "bi bi-pencil",
    label: "pencil"
  },
  {
    value: "bi bi-pencil-fill",
    label: "pencil-fill"
  },
  {
    value: "bi bi-pencil-square",
    label: "pencil-square"
  },
  {
    value: "bi bi-pentagon",
    label: "pentagon"
  },
  {
    value: "bi bi-pentagon-fill",
    label: "pentagon-fill"
  },
  {
    value: "bi bi-pentagon-half",
    label: "pentagon-half"
  },
  {
    value: "bi bi-people",
    label: "people"
  },
  {
    value: "bi bi-person-circle",
    label: "person-circle"
  },
  {
    value: "bi bi-people-fill",
    label: "people-fill"
  },
  {
    value: "bi bi-percent",
    label: "percent"
  },
  {
    value: "bi bi-person",
    label: "person"
  },
  {
    value: "bi bi-person-add",
    label: "person-add"
  },
  {
    value: "bi bi-person-arms-up",
    label: "person-arms-up"
  },
  {
    value: "bi bi-person-badge",
    label: "person-badge"
  },
  {
    value: "bi bi-person-badge-fill",
    label: "person-badge-fill"
  },
  {
    value: "bi bi-person-bounding-box",
    label: "person-bounding-box"
  },
  {
    value: "bi bi-person-check",
    label: "person-check"
  },
  {
    value: "bi bi-person-check-fill",
    label: "person-check-fill"
  },
  {
    value: "bi bi-person-dash",
    label: "person-dash"
  },
  {
    value: "bi bi-person-dash-fill",
    label: "person-dash-fill"
  },
  {
    value: "bi bi-person-down",
    label: "person-down"
  },
  {
    value: "bi bi-person-exclamation",
    label: "person-exclamation"
  },
  {
    value: "bi bi-person-fill",
    label: "person-fill"
  },
  {
    value: "bi bi-person-fill-add",
    label: "person-fill-add"
  },
  {
    value: "bi bi-person-fill-check",
    label: "person-fill-check"
  },
  {
    value: "bi bi-person-fill-dash",
    label: "person-fill-dash"
  },
  {
    value: "bi bi-person-fill-down",
    label: "person-fill-down"
  },
  {
    value: "bi bi-person-fill-exclamation",
    label: "person-fill-exclamation"
  },
  {
    value: "bi bi-person-fill-gear",
    label: "person-fill-gear"
  },
  {
    value: "bi bi-person-fill-lock",
    label: "person-fill-lock"
  },
  {
    value: "bi bi-person-fill-slash",
    label: "person-fill-slash"
  },
  {
    value: "bi bi-person-fill-up",
    label: "person-fill-up"
  },
  {
    value: "bi bi-person-fill-x",
    label: "person-fill-x"
  },
  {
    value: "bi bi-person-gear",
    label: "person-gear"
  },
  {
    value: "bi bi-person-heart",
    label: "person-heart"
  },
  {
    value: "bi bi-person-hearts",
    label: "person-hearts"
  },
  {
    value: "bi bi-person-lines-fill",
    label: "person-lines-fill"
  },
  {
    value: "bi bi-person-lock",
    label: "person-lock"
  },
  {
    value: "bi bi-person-plus",
    label: "person-plus"
  },
  {
    value: "bi bi-person-plus-fill",
    label: "person-plus-fill"
  },
  {
    value: "bi bi-person-raised-hand",
    label: "person-raised-hand"
  },
  {
    value: "bi bi-person-rolodex",
    label: "person-rolodex"
  },
  {
    value: "bi bi-person-slash",
    label: "person-slash"
  },
  {
    value: "bi bi-person-square",
    label: "person-square"
  },
  {
    value: "bi bi-person-standing",
    label: "person-standing"
  },
  {
    value: "bi bi-person-standing-dress",
    label: "person-standing-dress"
  },
  {
    value: "bi bi-person-up",
    label: "person-up"
  },
  {
    value: "bi bi-person-vcard",
    label: "person-vcard"
  },
  {
    value: "bi bi-person-vcard-fill",
    label: "person-vcard-fill"
  },
  {
    value: "bi bi-person-video",
    label: "person-video"
  },
  {
    value: "bi bi-person-video2",
    label: "person-video2"
  },
  {
    value: "bi bi-person-video3",
    label: "person-video3"
  },
  {
    value: "bi bi-person-walking",
    label: "person-walking"
  },
  {
    value: "bi bi-person-wheelchair",
    label: "person-wheelchair"
  },
  {
    value: "bi bi-person-workspace",
    label: "person-workspace"
  },
  {
    value: "bi bi-person-x",
    label: "person-x"
  },
  {
    value: "bi bi-person-x-fill",
    label: "person-x-fill"
  },
  {
    value: "bi bi-phone",
    label: "phone"
  },
  {
    value: "bi bi-phone-fill",
    label: "phone-fill"
  },
  {
    value: "bi bi-phone-flip",
    label: "phone-flip"
  },
  {
    value: "bi bi-phone-landscape",
    label: "phone-landscape"
  },
  {
    value: "bi bi-phone-landscape-fill",
    label: "phone-landscape-fill"
  },
  {
    value: "bi bi-phone-vibrate",
    label: "phone-vibrate"
  },
  {
    value: "bi bi-phone-vibrate-fill",
    label: "phone-vibrate-fill"
  },
  {
    value: "bi bi-pie-chart",
    label: "pie-chart"
  },
  {
    value: "bi bi-pie-chart-fill",
    label: "pie-chart-fill"
  },
  {
    value: "bi bi-piggy-bank",
    label: "piggy-bank"
  },
  {
    value: "bi bi-piggy-bank-fill",
    label: "piggy-bank-fill"
  },
  {
    value: "bi bi-pin",
    label: "pin"
  },
  {
    value: "bi bi-pin-angle",
    label: "pin-angle"
  },
  {
    value: "bi bi-pin-angle-fill",
    label: "pin-angle-fill"
  },
  {
    value: "bi bi-pin-fill",
    label: "pin-fill"
  },
  {
    value: "bi bi-pin-map",
    label: "pin-map"
  },
  {
    value: "bi bi-pin-map-fill",
    label: "pin-map-fill"
  },
  {
    value: "bi bi-pinterest",
    label: "pinterest"
  },
  {
    value: "bi bi-pip",
    label: "pip"
  },
  {
    value: "bi bi-pip-fill",
    label: "pip-fill"
  },
  {
    value: "bi bi-play",
    label: "play"
  },
  {
    value: "bi bi-play-btn",
    label: "play-btn"
  },
  {
    value: "bi bi-play-btn-fill",
    label: "play-btn-fill"
  },
  {
    value: "bi bi-play-circle",
    label: "play-circle"
  },
  {
    value: "bi bi-play-circle-fill",
    label: "play-circle-fill"
  },
  {
    value: "bi bi-play-fill",
    label: "play-fill"
  },
  {
    value: "bi bi-playstation",
    label: "playstation"
  },
  {
    value: "bi bi-plug",
    label: "plug"
  },
  {
    value: "bi bi-plug-fill",
    label: "plug-fill"
  },
  {
    value: "bi bi-plugin",
    label: "plugin"
  },
  {
    value: "bi bi-plus",
    label: "plus"
  },
  {
    value: "bi bi-plus-circle",
    label: "plus-circle"
  },
  {
    value: "bi bi-plus-circle-dotted",
    label: "plus-circle-dotted"
  },
  {
    value: "bi bi-plus-circle-fill",
    label: "plus-circle-fill"
  },
  {
    value: "bi bi-plus-lg",
    label: "plus-lg"
  },
  {
    value: "bi bi-plus-slash-minus",
    label: "plus-slash-minus"
  },
  {
    value: "bi bi-plus-square",
    label: "plus-square"
  },
  {
    value: "bi bi-plus-square-dotted",
    label: "plus-square-dotted"
  },
  {
    value: "bi bi-plus-square-fill",
    label: "plus-square-fill"
  },
  {
    value: "bi bi-postage",
    label: "postage"
  },
  {
    value: "bi bi-postage-fill",
    label: "postage-fill"
  },
  {
    value: "bi bi-postage-heart",
    label: "postage-heart"
  },
  {
    value: "bi bi-postage-heart-fill",
    label: "postage-heart-fill"
  },
  {
    value: "bi bi-postcard",
    label: "postcard"
  },
  {
    value: "bi bi-postcard-fill",
    label: "postcard-fill"
  },
  {
    value: "bi bi-postcard-heart",
    label: "postcard-heart"
  },
  {
    value: "bi bi-postcard-heart-fill",
    label: "postcard-heart-fill"
  },
  {
    value: "bi bi-power",
    label: "power"
  },
  {
    value: "bi bi-prescription",
    label: "prescription"
  },
  {
    value: "bi bi-prescription2",
    label: "prescription2"
  },
  {
    value: "bi bi-printer",
    label: "printer"
  },
  {
    value: "bi bi-printer-fill",
    label: "printer-fill"
  },
  {
    value: "bi bi-projector",
    label: "projector"
  },
  {
    value: "bi bi-projector-fill",
    label: "projector-fill"
  },
  {
    value: "bi bi-puzzle",
    label: "puzzle"
  },
  {
    value: "bi bi-puzzle-fill",
    label: "puzzle-fill"
  },
  {
    value: "bi bi-qr-code",
    label: "qr-code"
  },
  {
    value: "bi bi-qr-code-scan",
    label: "qr-code-scan"
  },
  {
    value: "bi bi-question",
    label: "question"
  },
  {
    value: "bi bi-question-circle",
    label: "question-circle"
  },
  {
    value: "bi bi-question-diamond",
    label: "question-diamond"
  },
  {
    value: "bi bi-question-diamond-fill",
    label: "question-diamond-fill"
  },
  {
    value: "bi bi-question-circle-fill",
    label: "question-circle-fill"
  },
  {
    value: "bi bi-question-lg",
    label: "question-lg"
  },
  {
    value: "bi bi-question-octagon",
    label: "question-octagon"
  },
  {
    value: "bi bi-question-octagon-fill",
    label: "question-octagon-fill"
  },
  {
    value: "bi bi-question-square",
    label: "question-square"
  },
  {
    value: "bi bi-question-square-fill",
    label: "question-square-fill"
  },
  {
    value: "bi bi-quora",
    label: "quora"
  },
  {
    value: "bi bi-quote",
    label: "quote"
  },
  {
    value: "bi bi-r-circle",
    label: "r-circle"
  },
  {
    value: "bi bi-r-circle-fill",
    label: "r-circle-fill"
  },
  {
    value: "bi bi-r-square",
    label: "r-square"
  },
  {
    value: "bi bi-r-square-fill",
    label: "r-square-fill"
  },
  {
    value: "bi bi-radar",
    label: "radar"
  },
  {
    value: "bi bi-radioactive",
    label: "radioactive"
  },
  {
    value: "bi bi-rainbow",
    label: "rainbow"
  },
  {
    value: "bi bi-receipt",
    label: "receipt"
  },
  {
    value: "bi bi-receipt-cutoff",
    label: "receipt-cutoff"
  },
  {
    value: "bi bi-reception-0",
    label: "reception-0"
  },
  {
    value: "bi bi-reception-1",
    label: "reception-1"
  },
  {
    value: "bi bi-reception-2",
    label: "reception-2"
  },
  {
    value: "bi bi-reception-3",
    label: "reception-3"
  },
  {
    value: "bi bi-reception-4",
    label: "reception-4"
  },
  {
    value: "bi bi-record",
    label: "record"
  },
  {
    value: "bi bi-record-btn",
    label: "record-btn"
  },
  {
    value: "bi bi-record-btn-fill",
    label: "record-btn-fill"
  },
  {
    value: "bi bi-record-circle",
    label: "record-circle"
  },
  {
    value: "bi bi-record-circle-fill",
    label: "record-circle-fill"
  },
  {
    value: "bi bi-record-fill",
    label: "record-fill"
  },
  {
    value: "bi bi-record2",
    label: "record2"
  },
  {
    value: "bi bi-record2-fill",
    label: "record2-fill"
  },
  {
    value: "bi bi-recycle",
    label: "recycle"
  },
  {
    value: "bi bi-reddit",
    label: "reddit"
  },
  {
    value: "bi bi-regex",
    label: "regex"
  },
  {
    value: "bi bi-repeat",
    label: "repeat"
  },
  {
    value: "bi bi-repeat-1",
    label: "repeat-1"
  },
  {
    value: "bi bi-reply",
    label: "reply"
  },
  {
    value: "bi bi-reply-all",
    label: "reply-all"
  },
  {
    value: "bi bi-reply-all-fill",
    label: "reply-all-fill"
  },
  {
    value: "bi bi-reply-fill",
    label: "reply-fill"
  },
  {
    value: "bi bi-rewind",
    label: "rewind"
  },
  {
    value: "bi bi-rewind-btn",
    label: "rewind-btn"
  },
  {
    value: "bi bi-rewind-btn-fill",
    label: "rewind-btn-fill"
  },
  {
    value: "bi bi-rewind-circle",
    label: "rewind-circle"
  },
  {
    value: "bi bi-rewind-circle-fill",
    label: "rewind-circle-fill"
  },
  {
    value: "bi bi-rewind-fill",
    label: "rewind-fill"
  },
  {
    value: "bi bi-robot",
    label: "robot"
  },
  {
    value: "bi bi-rocket",
    label: "rocket"
  },
  {
    value: "bi bi-rocket-fill",
    label: "rocket-fill"
  },
  {
    value: "bi bi-rocket-takeoff",
    label: "rocket-takeoff"
  },
  {
    value: "bi bi-rocket-takeoff-fill",
    label: "rocket-takeoff-fill"
  },
  {
    value: "bi bi-router",
    label: "router"
  },
  {
    value: "bi bi-router-fill",
    label: "router-fill"
  },
  {
    value: "bi bi-rss",
    label: "rss"
  },
  {
    value: "bi bi-rss-fill",
    label: "rss-fill"
  },
  {
    value: "bi bi-rulers",
    label: "rulers"
  },
  {
    value: "bi bi-safe",
    label: "safe"
  },
  {
    value: "bi bi-safe-fill",
    label: "safe-fill"
  },
  {
    value: "bi bi-safe2",
    label: "safe2"
  },
  {
    value: "bi bi-safe2-fill",
    label: "safe2-fill"
  },
  {
    value: "bi bi-save",
    label: "save"
  },
  {
    value: "bi bi-save-fill",
    label: "save-fill"
  },
  {
    value: "bi bi-save2",
    label: "save2"
  },
  {
    value: "bi bi-save2-fill",
    label: "save2-fill"
  },
  {
    value: "bi bi-scissors",
    label: "scissors"
  },
  {
    value: "bi bi-scooter",
    label: "scooter"
  },
  {
    value: "bi bi-screwdriver",
    label: "screwdriver"
  },
  {
    value: "bi bi-sd-card",
    label: "sd-card"
  },
  {
    value: "bi bi-sd-card-fill",
    label: "sd-card-fill"
  },
  {
    value: "bi bi-search",
    label: "search"
  },
  {
    value: "bi bi-search-heart",
    label: "search-heart"
  },
  {
    value: "bi bi-search-heart-fill",
    label: "search-heart-fill"
  },
  {
    value: "bi bi-segmented-nav",
    label: "segmented-nav"
  },
  {
    value: "bi bi-send",
    label: "send"
  },
  {
    value: "bi bi-send-arrow-down",
    label: "send-arrow-down"
  },
  {
    value: "bi bi-send-arrow-down-fill",
    label: "send-arrow-down-fill"
  },
  {
    value: "bi bi-send-arrow-up",
    label: "send-arrow-up"
  },
  {
    value: "bi bi-send-arrow-up-fill",
    label: "send-arrow-up-fill"
  },
  {
    value: "bi bi-send-check",
    label: "send-check"
  },
  {
    value: "bi bi-send-check-fill",
    label: "send-check-fill"
  },
  {
    value: "bi bi-send-dash",
    label: "send-dash"
  },
  {
    value: "bi bi-send-dash-fill",
    label: "send-dash-fill"
  },
  {
    value: "bi bi-send-exclamation",
    label: "send-exclamation"
  },
  {
    value: "bi bi-send-exclamation-fill",
    label: "send-exclamation-fill"
  },
  {
    value: "bi bi-send-fill",
    label: "send-fill"
  },
  {
    value: "bi bi-send-plus",
    label: "send-plus"
  },
  {
    value: "bi bi-send-plus-fill",
    label: "send-plus-fill"
  },
  {
    value: "bi bi-send-slash",
    label: "send-slash"
  },
  {
    value: "bi bi-send-slash-fill",
    label: "send-slash-fill"
  },
  {
    value: "bi bi-send-x",
    label: "send-x"
  },
  {
    value: "bi bi-send-x-fill",
    label: "send-x-fill"
  },
  {
    value: "bi bi-server",
    label: "server"
  },
  {
    value: "bi bi-shadows",
    label: "shadows"
  },
  {
    value: "bi bi-share",
    label: "share"
  },
  {
    value: "bi bi-share-fill",
    label: "share-fill"
  },
  {
    value: "bi bi-shield",
    label: "shield"
  },
  {
    value: "bi bi-shield-check",
    label: "shield-check"
  },
  {
    value: "bi bi-shield-exclamation",
    label: "shield-exclamation"
  },
  {
    value: "bi bi-shield-fill",
    label: "shield-fill"
  },
  {
    value: "bi bi-shield-fill-check",
    label: "shield-fill-check"
  },
  {
    value: "bi bi-shield-fill-exclamation",
    label: "shield-fill-exclamation"
  },
  {
    value: "bi bi-shield-fill-minus",
    label: "shield-fill-minus"
  },
  {
    value: "bi bi-shield-fill-plus",
    label: "shield-fill-plus"
  },
  {
    value: "bi bi-shield-fill-x",
    label: "shield-fill-x"
  },
  {
    value: "bi bi-shield-lock",
    label: "shield-lock"
  },
  {
    value: "bi bi-shield-lock-fill",
    label: "shield-lock-fill"
  },
  {
    value: "bi bi-shield-minus",
    label: "shield-minus"
  },
  {
    value: "bi bi-shield-plus",
    label: "shield-plus"
  },
  {
    value: "bi bi-shield-shaded",
    label: "shield-shaded"
  },
  {
    value: "bi bi-shield-slash",
    label: "shield-slash"
  },
  {
    value: "bi bi-shield-slash-fill",
    label: "shield-slash-fill"
  },
  {
    value: "bi bi-shield-x",
    label: "shield-x"
  },
  {
    value: "bi bi-shift",
    label: "shift"
  },
  {
    value: "bi bi-shift-fill",
    label: "shift-fill"
  },
  {
    value: "bi bi-shop",
    label: "shop"
  },
  {
    value: "bi bi-shop-window",
    label: "shop-window"
  },
  {
    value: "bi bi-shuffle",
    label: "shuffle"
  },
  {
    value: "bi bi-sign-dead-end",
    label: "sign-dead-end"
  },
  {
    value: "bi bi-sign-dead-end-fill",
    label: "sign-dead-end-fill"
  },
  {
    value: "bi bi-sign-do-not-enter",
    label: "sign-do-not-enter"
  },
  {
    value: "bi bi-sign-do-not-enter-fill",
    label: "sign-do-not-enter-fill"
  },
  {
    value: "bi bi-sign-intersection",
    label: "sign-intersection"
  },
  {
    value: "bi bi-sign-intersection-fill",
    label: "sign-intersection-fill"
  },
  {
    value: "bi bi-sign-intersection-side",
    label: "sign-intersection-side"
  },
  {
    value: "bi bi-sign-intersection-side-fill",
    label: "sign-intersection-side-fill"
  },
  {
    value: "bi bi-sign-intersection-t",
    label: "sign-intersection-t"
  },
  {
    value: "bi bi-sign-intersection-t-fill",
    label: "sign-intersection-t-fill"
  },
  {
    value: "bi bi-sign-intersection-y",
    label: "sign-intersection-y"
  },
  {
    value: "bi bi-sign-intersection-y-fill",
    label: "sign-intersection-y-fill"
  },
  {
    value: "bi bi-sign-merge-left",
    label: "sign-merge-left"
  },
  {
    value: "bi bi-sign-merge-left-fill",
    label: "sign-merge-left-fill"
  },
  {
    value: "bi bi-sign-merge-right",
    label: "sign-merge-right"
  },
  {
    value: "bi bi-sign-merge-right-fill",
    label: "sign-merge-right-fill"
  },
  {
    value: "bi bi-sign-no-left-turn",
    label: "sign-no-left-turn"
  },
  {
    value: "bi bi-sign-no-left-turn-fill",
    label: "sign-no-left-turn-fill"
  },
  {
    value: "bi bi-sign-no-parking",
    label: "sign-no-parking"
  },
  {
    value: "bi bi-sign-no-parking-fill",
    label: "sign-no-parking-fill"
  },
  {
    value: "bi bi-sign-no-right-turn",
    label: "sign-no-right-turn"
  },
  {
    value: "bi bi-sign-no-right-turn-fill",
    label: "sign-no-right-turn-fill"
  },
  {
    value: "bi bi-sign-railroad",
    label: "sign-railroad"
  },
  {
    value: "bi bi-sign-railroad-fill",
    label: "sign-railroad-fill"
  },
  {
    value: "bi bi-sign-stop",
    label: "sign-stop"
  },
  {
    value: "bi bi-sign-stop-fill",
    label: "sign-stop-fill"
  },
  {
    value: "bi bi-sign-stop-lights",
    label: "sign-stop-lights"
  },
  {
    value: "bi bi-sign-stop-lights-fill",
    label: "sign-stop-lights-fill"
  },
  {
    value: "bi bi-sign-turn-left",
    label: "sign-turn-left"
  },
  {
    value: "bi bi-sign-turn-left-fill",
    label: "sign-turn-left-fill"
  },
  {
    value: "bi bi-sign-turn-right",
    label: "sign-turn-right"
  },
  {
    value: "bi bi-sign-turn-right-fill",
    label: "sign-turn-right-fill"
  },
  {
    value: "bi bi-sign-turn-slight-left",
    label: "sign-turn-slight-left"
  },
  {
    value: "bi bi-sign-turn-slight-left-fill",
    label: "sign-turn-slight-left-fill"
  },
  {
    value: "bi bi-sign-turn-slight-right",
    label: "sign-turn-slight-right"
  },
  {
    value: "bi bi-sign-turn-slight-right-fill",
    label: "sign-turn-slight-right-fill"
  },
  {
    value: "bi bi-sign-yield",
    label: "sign-yield"
  },
  {
    value: "bi bi-sign-yield-fill",
    label: "sign-yield-fill"
  },
  {
    value: "bi bi-signal",
    label: "signal"
  },
  {
    value: "bi bi-signpost",
    label: "signpost"
  },
  {
    value: "bi bi-signpost-2",
    label: "signpost-2"
  },
  {
    value: "bi bi-signpost-2-fill",
    label: "signpost-2-fill"
  },
  {
    value: "bi bi-signpost-fill",
    label: "signpost-fill"
  },
  {
    value: "bi bi-signpost-split",
    label: "signpost-split"
  },
  {
    value: "bi bi-signpost-split-fill",
    label: "signpost-split-fill"
  },
  {
    value: "bi bi-sim",
    label: "sim"
  },
  {
    value: "bi bi-sim-fill",
    label: "sim-fill"
  },
  {
    value: "bi bi-sim-slash",
    label: "sim-slash"
  },
  {
    value: "bi bi-sim-slash-fill",
    label: "sim-slash-fill"
  },
  {
    value: "bi bi-sina-weibo",
    label: "sina-weibo"
  },
  {
    value: "bi bi-skip-backward",
    label: "skip-backward"
  },
  {
    value: "bi bi-skip-backward-btn",
    label: "skip-backward-btn"
  },
  {
    value: "bi bi-skip-backward-btn-fill",
    label: "skip-backward-btn-fill"
  },
  {
    value: "bi bi-skip-backward-circle",
    label: "skip-backward-circle"
  },
  {
    value: "bi bi-skip-backward-circle-fill",
    label: "skip-backward-circle-fill"
  },
  {
    value: "bi bi-skip-backward-fill",
    label: "skip-backward-fill"
  },
  {
    value: "bi bi-skip-end",
    label: "skip-end"
  },
  {
    value: "bi bi-skip-end-btn",
    label: "skip-end-btn"
  },
  {
    value: "bi bi-skip-end-btn-fill",
    label: "skip-end-btn-fill"
  },
  {
    value: "bi bi-skip-end-circle",
    label: "skip-end-circle"
  },
  {
    value: "bi bi-skip-end-circle-fill",
    label: "skip-end-circle-fill"
  },
  {
    value: "bi bi-skip-end-fill",
    label: "skip-end-fill"
  },
  {
    value: "bi bi-skip-forward",
    label: "skip-forward"
  },
  {
    value: "bi bi-skip-forward-btn",
    label: "skip-forward-btn"
  },
  {
    value: "bi bi-skip-forward-btn-fill",
    label: "skip-forward-btn-fill"
  },
  {
    value: "bi bi-skip-forward-circle",
    label: "skip-forward-circle"
  },
  {
    value: "bi bi-skip-forward-circle-fill",
    label: "skip-forward-circle-fill"
  },
  {
    value: "bi bi-skip-forward-fill",
    label: "skip-forward-fill"
  },
  {
    value: "bi bi-skip-start",
    label: "skip-start"
  },
  {
    value: "bi bi-skip-start-btn",
    label: "skip-start-btn"
  },
  {
    value: "bi bi-skip-start-btn-fill",
    label: "skip-start-btn-fill"
  },
  {
    value: "bi bi-skip-start-circle",
    label: "skip-start-circle"
  },
  {
    value: "bi bi-skip-start-circle-fill",
    label: "skip-start-circle-fill"
  },
  {
    value: "bi bi-skip-start-fill",
    label: "skip-start-fill"
  },
  {
    value: "bi bi-skype",
    label: "skype"
  },
  {
    value: "bi bi-slack",
    label: "slack"
  },
  {
    value: "bi bi-slash",
    label: "slash"
  },
  {
    value: "bi bi-slash-circle-fill",
    label: "slash-circle-fill"
  },
  {
    value: "bi bi-slash-lg",
    label: "slash-lg"
  },
  {
    value: "bi bi-slash-square",
    label: "slash-square"
  },
  {
    value: "bi bi-slash-square-fill",
    label: "slash-square-fill"
  },
  {
    value: "bi bi-sliders",
    label: "sliders"
  },
  {
    value: "bi bi-sliders2",
    label: "sliders2"
  },
  {
    value: "bi bi-sliders2-vertical",
    label: "sliders2-vertical"
  },
  {
    value: "bi bi-smartwatch",
    label: "smartwatch"
  },
  {
    value: "bi bi-snapchat",
    label: "snapchat"
  },
  {
    value: "bi bi-snow",
    label: "snow"
  },
  {
    value: "bi bi-snow2",
    label: "snow2"
  },
  {
    value: "bi bi-snow3",
    label: "snow3"
  },
  {
    value: "bi bi-sort-alpha-down",
    label: "sort-alpha-down"
  },
  {
    value: "bi bi-sort-alpha-down-alt",
    label: "sort-alpha-down-alt"
  },
  {
    value: "bi bi-sort-alpha-up",
    label: "sort-alpha-up"
  },
  {
    value: "bi bi-sort-alpha-up-alt",
    label: "sort-alpha-up-alt"
  },
  {
    value: "bi bi-sort-down",
    label: "sort-down"
  },
  {
    value: "bi bi-sort-down-alt",
    label: "sort-down-alt"
  },
  {
    value: "bi bi-sort-numeric-down",
    label: "sort-numeric-down"
  },
  {
    value: "bi bi-sort-numeric-down-alt",
    label: "sort-numeric-down-alt"
  },
  {
    value: "bi bi-sort-numeric-up",
    label: "sort-numeric-up"
  },
  {
    value: "bi bi-sort-numeric-up-alt",
    label: "sort-numeric-up-alt"
  },
  {
    value: "bi bi-sort-up",
    label: "sort-up"
  },
  {
    value: "bi bi-sort-up-alt",
    label: "sort-up-alt"
  },
  {
    value: "bi bi-soundwave",
    label: "soundwave"
  },
  {
    value: "bi bi-sourceforge",
    label: "sourceforge"
  },
  {
    value: "bi bi-speaker",
    label: "speaker"
  },
  {
    value: "bi bi-speaker-fill",
    label: "speaker-fill"
  },
  {
    value: "bi bi-speedometer",
    label: "speedometer"
  },
  {
    value: "bi bi-speedometer2",
    label: "speedometer2"
  },
  {
    value: "bi bi-spellcheck",
    label: "spellcheck"
  },
  {
    value: "bi bi-spotify",
    label: "spotify"
  },
  {
    value: "bi bi-square",
    label: "square"
  },
  {
    value: "bi bi-square-fill",
    label: "square-fill"
  },
  {
    value: "bi bi-square-half",
    label: "square-half"
  },
  {
    value: "bi bi-stack",
    label: "stack"
  },
  {
    value: "bi bi-stack-overflow",
    label: "stack-overflow"
  },
  {
    value: "bi bi-star",
    label: "star"
  },
  {
    value: "bi bi-star-fill",
    label: "star-fill"
  },
  {
    value: "bi bi-star-half",
    label: "star-half"
  },
  {
    value: "bi bi-stars",
    label: "stars"
  },
  {
    value: "bi bi-steam",
    label: "steam"
  },
  {
    value: "bi bi-stickies",
    label: "stickies"
  },
  {
    value: "bi bi-stickies-fill",
    label: "stickies-fill"
  },
  {
    value: "bi bi-sticky",
    label: "sticky"
  },
  {
    value: "bi bi-sticky-fill",
    label: "sticky-fill"
  },
  {
    value: "bi bi-stop",
    label: "stop"
  },
  {
    value: "bi bi-stop-btn",
    label: "stop-btn"
  },
  {
    value: "bi bi-stop-btn-fill",
    label: "stop-btn-fill"
  },
  {
    value: "bi bi-stop-circle",
    label: "stop-circle"
  },
  {
    value: "bi bi-stop-circle-fill",
    label: "stop-circle-fill"
  },
  {
    value: "bi bi-stop-fill",
    label: "stop-fill"
  },
  {
    value: "bi bi-stoplights",
    label: "stoplights"
  },
  {
    value: "bi bi-stoplights-fill",
    label: "stoplights-fill"
  },
  {
    value: "bi bi-stopwatch",
    label: "stopwatch"
  },
  {
    value: "bi bi-stopwatch-fill",
    label: "stopwatch-fill"
  },
  {
    value: "bi bi-strava",
    label: "strava"
  },
  {
    value: "bi bi-stripe",
    label: "stripe"
  },
  {
    value: "bi bi-subscript",
    label: "subscript"
  },
  {
    value: "bi bi-substack",
    label: "substack"
  },
  {
    value: "bi bi-subtract",
    label: "subtract"
  },
  {
    value: "bi bi-suit-club",
    label: "suit-club"
  },
  {
    value: "bi bi-suit-club-fill",
    label: "suit-club-fill"
  },
  {
    value: "bi bi-suit-diamond",
    label: "suit-diamond"
  },
  {
    value: "bi bi-suit-diamond-fill",
    label: "suit-diamond-fill"
  },
  {
    value: "bi bi-suit-heart",
    label: "suit-heart"
  },
  {
    value: "bi bi-suit-heart-fill",
    label: "suit-heart-fill"
  },
  {
    value: "bi bi-suit-spade",
    label: "suit-spade"
  },
  {
    value: "bi bi-suit-spade-fill",
    label: "suit-spade-fill"
  },
  {
    value: "bi bi-suitcase",
    label: "suitcase"
  },
  {
    value: "bi bi-suitcase-fill",
    label: "suitcase-fill"
  },
  {
    value: "bi bi-suitcase-lg",
    label: "suitcase-lg"
  },
  {
    value: "bi bi-suitcase-lg-fill",
    label: "suitcase-lg-fill"
  },
  {
    value: "bi bi-suitcase2",
    label: "suitcase2"
  },
  {
    value: "bi bi-suitcase2-fill",
    label: "suitcase2-fill"
  },
  {
    value: "bi bi-sun",
    label: "sun"
  },
  {
    value: "bi bi-sun-fill",
    label: "sun-fill"
  },
  {
    value: "bi bi-sunglasses",
    label: "sunglasses"
  },
  {
    value: "bi bi-sunrise",
    label: "sunrise"
  },
  {
    value: "bi bi-sunrise-fill",
    label: "sunrise-fill"
  },
  {
    value: "bi bi-sunset",
    label: "sunset"
  },
  {
    value: "bi bi-sunset-fill",
    label: "sunset-fill"
  },
  {
    value: "bi bi-superscript",
    label: "superscript"
  },
  {
    value: "bi bi-symmetry-horizontal",
    label: "symmetry-horizontal"
  },
  {
    value: "bi bi-symmetry-vertical",
    label: "symmetry-vertical"
  },
  {
    value: "bi bi-table",
    label: "table"
  },
  {
    value: "bi bi-tablet",
    label: "tablet"
  },
  {
    value: "bi bi-tablet-fill",
    label: "tablet-fill"
  },
  {
    value: "bi bi-tablet-landscape",
    label: "tablet-landscape"
  },
  {
    value: "bi bi-tablet-landscape-fill",
    label: "tablet-landscape-fill"
  },
  {
    value: "bi bi-tag",
    label: "tag"
  },
  {
    value: "bi bi-tag-fill",
    label: "tag-fill"
  },
  {
    value: "bi bi-tags",
    label: "tags"
  },
  {
    value: "bi bi-tags-fill",
    label: "tags-fill"
  },
  {
    value: "bi bi-taxi-front",
    label: "taxi-front"
  },
  {
    value: "bi bi-taxi-front-fill",
    label: "taxi-front-fill"
  },
  {
    value: "bi bi-telegram",
    label: "telegram"
  },
  {
    value: "bi bi-telephone",
    label: "telephone"
  },
  {
    value: "bi bi-telephone-fill",
    label: "telephone-fill"
  },
  {
    value: "bi bi-telephone-forward",
    label: "telephone-forward"
  },
  {
    value: "bi bi-telephone-forward-fill",
    label: "telephone-forward-fill"
  },
  {
    value: "bi bi-telephone-inbound",
    label: "telephone-inbound"
  },
  {
    value: "bi bi-telephone-inbound-fill",
    label: "telephone-inbound-fill"
  },
  {
    value: "bi bi-telephone-minus",
    label: "telephone-minus"
  },
  {
    value: "bi bi-telephone-minus-fill",
    label: "telephone-minus-fill"
  },
  {
    value: "bi bi-telephone-outbound",
    label: "telephone-outbound"
  },
  {
    value: "bi bi-telephone-outbound-fill",
    label: "telephone-outbound-fill"
  },
  {
    value: "bi bi-telephone-plus",
    label: "telephone-plus"
  },
  {
    value: "bi bi-telephone-plus-fill",
    label: "telephone-plus-fill"
  },
  {
    value: "bi bi-telephone-x",
    label: "telephone-x"
  },
  {
    value: "bi bi-telephone-x-fill",
    label: "telephone-x-fill"
  },
  {
    value: "bi bi-tencent-qq",
    label: "tencent-qq"
  },
  {
    value: "bi bi-terminal",
    label: "terminal"
  },
  {
    value: "bi bi-terminal-dash",
    label: "terminal-dash"
  },
  {
    value: "bi bi-terminal-fill",
    label: "terminal-fill"
  },
  {
    value: "bi bi-terminal-plus",
    label: "terminal-plus"
  },
  {
    value: "bi bi-terminal-split",
    label: "terminal-split"
  },
  {
    value: "bi bi-terminal-x",
    label: "terminal-x"
  },
  {
    value: "bi bi-text-center",
    label: "text-center"
  },
  {
    value: "bi bi-text-indent-left",
    label: "text-indent-left"
  },
  {
    value: "bi bi-text-indent-right",
    label: "text-indent-right"
  },
  {
    value: "bi bi-text-left",
    label: "text-left"
  },
  {
    value: "bi bi-text-paragraph",
    label: "text-paragraph"
  },
  {
    value: "bi bi-text-right",
    label: "text-right"
  },
  {
    value: "bi bi-text-wrap",
    label: "text-wrap"
  },
  {
    value: "bi bi-textarea",
    label: "textarea"
  },
  {
    value: "bi bi-textarea-resize",
    label: "textarea-resize"
  },
  {
    value: "bi bi-textarea-t",
    label: "textarea-t"
  },
  {
    value: "bi bi-thermometer",
    label: "thermometer"
  },
  {
    value: "bi bi-thermometer-half",
    label: "thermometer-half"
  },
  {
    value: "bi bi-thermometer-high",
    label: "thermometer-high"
  },
  {
    value: "bi bi-thermometer-low",
    label: "thermometer-low"
  },
  {
    value: "bi bi-thermometer-snow",
    label: "thermometer-snow"
  },
  {
    value: "bi bi-thermometer-sun",
    label: "thermometer-sun"
  },
  {
    value: "bi bi-threads",
    label: "threads"
  },
  {
    value: "bi bi-threads-fill",
    label: "threads-fill"
  },
  {
    value: "bi bi-three-dots",
    label: "three-dots"
  },
  {
    value: "bi bi-three-dots-vertical",
    label: "three-dots-vertical"
  },
  {
    value: "bi bi-thunderbolt",
    label: "thunderbolt"
  },
  {
    value: "bi bi-thunderbolt-fill",
    label: "thunderbolt-fill"
  },
  {
    value: "bi bi-ticket",
    label: "ticket"
  },
  {
    value: "bi bi-ticket-detailed",
    label: "ticket-detailed"
  },
  {
    value: "bi bi-ticket-detailed-fill",
    label: "ticket-detailed-fill"
  },
  {
    value: "bi bi-ticket-fill",
    label: "ticket-fill"
  },
  {
    value: "bi bi-ticket-perforated",
    label: "ticket-perforated"
  },
  {
    value: "bi bi-ticket-perforated-fill",
    label: "ticket-perforated-fill"
  },
  {
    value: "bi bi-tiktok",
    label: "tiktok"
  },
  {
    value: "bi bi-toggle-off",
    label: "toggle-off"
  },
  {
    value: "bi bi-toggle-on",
    label: "toggle-on"
  },
  {
    value: "bi bi-toggle2-off",
    label: "toggle2-off"
  },
  {
    value: "bi bi-toggle2-on",
    label: "toggle2-on"
  },
  {
    value: "bi bi-toggles",
    label: "toggles"
  },
  {
    value: "bi bi-toggles2",
    label: "toggles2"
  },
  {
    value: "bi bi-tools",
    label: "tools"
  },
  {
    value: "bi bi-tornado",
    label: "tornado"
  },
  {
    value: "bi bi-train-freight-front",
    label: "train-freight-front"
  },
  {
    value: "bi bi-train-freight-front-fill",
    label: "train-freight-front-fill"
  },
  {
    value: "bi bi-train-front",
    label: "train-front"
  },
  {
    value: "bi bi-train-front-fill",
    label: "train-front-fill"
  },
  {
    value: "bi bi-train-lightrail-front",
    label: "train-lightrail-front"
  },
  {
    value: "bi bi-train-lightrail-front-fill",
    label: "train-lightrail-front-fill"
  },
  {
    value: "bi bi-translate",
    label: "translate"
  },
  {
    value: "bi bi-transparency",
    label: "transparency"
  },
  {
    value: "bi bi-trash",
    label: "trash"
  },
  {
    value: "bi bi-trash-fill",
    label: "trash-fill"
  },
  {
    value: "bi bi-trash2",
    label: "trash2"
  },
  {
    value: "bi bi-trash2-fill",
    label: "trash2-fill"
  },
  {
    value: "bi bi-trash3",
    label: "trash3"
  },
  {
    value: "bi bi-trash3-fill",
    label: "trash3-fill"
  },
  {
    value: "bi bi-tree",
    label: "tree"
  },
  {
    value: "bi bi-tree-fill",
    label: "tree-fill"
  },
  {
    value: "bi bi-trello",
    label: "trello"
  },
  {
    value: "bi bi-triangle",
    label: "triangle"
  },
  {
    value: "bi bi-triangle-fill",
    label: "triangle-fill"
  },
  {
    value: "bi bi-triangle-half",
    label: "triangle-half"
  },
  {
    value: "bi bi-trophy",
    label: "trophy"
  },
  {
    value: "bi bi-trophy-fill",
    label: "trophy-fill"
  },
  {
    value: "bi bi-tropical-storm",
    label: "tropical-storm"
  },
  {
    value: "bi bi-truck",
    label: "truck"
  },
  {
    value: "bi bi-truck-flatbed",
    label: "truck-flatbed"
  },
  {
    value: "bi bi-truck-front",
    label: "truck-front"
  },
  {
    value: "bi bi-truck-front-fill",
    label: "truck-front-fill"
  },
  {
    value: "bi bi-tsunami",
    label: "tsunami"
  },
  {
    value: "bi bi-tv",
    label: "tv"
  },
  {
    value: "bi bi-tv-fill",
    label: "tv-fill"
  },
  {
    value: "bi bi-twitch",
    label: "twitch"
  },
  {
    value: "bi bi-twitter",
    label: "twitter"
  },
  {
    value: "bi bi-twitter-x",
    label: "twitter-x"
  },
  {
    value: "bi bi-type",
    label: "type"
  },
  {
    value: "bi bi-type-bold",
    label: "type-bold"
  },
  {
    value: "bi bi-type-h1",
    label: "type-h1"
  },
  {
    value: "bi bi-type-h2",
    label: "type-h2"
  },
  {
    value: "bi bi-type-h3",
    label: "type-h3"
  },
  {
    value: "bi bi-type-h4",
    label: "type-h4"
  },
  {
    value: "bi bi-type-h5",
    label: "type-h5"
  },
  {
    value: "bi bi-type-h6",
    label: "type-h6"
  },
  {
    value: "bi bi-type-italic",
    label: "type-italic"
  },
  {
    value: "bi bi-type-strikethrough",
    label: "type-strikethrough"
  },
  {
    value: "bi bi-type-underline",
    label: "type-underline"
  },
  {
    value: "bi bi-ubuntu",
    label: "ubuntu"
  },
  {
    value: "bi bi-ui-checks",
    label: "ui-checks"
  },
  {
    value: "bi bi-ui-checks-grid",
    label: "ui-checks-grid"
  },
  {
    value: "bi bi-ui-radios",
    label: "ui-radios"
  },
  {
    value: "bi bi-ui-radios-grid",
    label: "ui-radios-grid"
  },
  {
    value: "bi bi-umbrella",
    label: "umbrella"
  },
  {
    value: "bi bi-umbrella-fill",
    label: "umbrella-fill"
  },
  {
    value: "bi bi-unindent",
    label: "unindent"
  },
  {
    value: "bi bi-union",
    label: "union"
  },
  {
    value: "bi bi-unity",
    label: "unity"
  },
  {
    value: "bi bi-universal-access",
    label: "universal-access"
  },
  {
    value: "bi bi-universal-access-circle",
    label: "universal-access-circle"
  },
  {
    value: "bi bi-unlock",
    label: "unlock"
  },
  {
    value: "bi bi-unlock-fill",
    label: "unlock-fill"
  },
  {
    value: "bi bi-upc",
    label: "upc"
  },
  {
    value: "bi bi-upc-scan",
    label: "upc-scan"
  },
  {
    value: "bi bi-upload",
    label: "upload"
  },
  {
    value: "bi bi-usb",
    label: "usb"
  },
  {
    value: "bi bi-usb-c",
    label: "usb-c"
  },
  {
    value: "bi bi-usb-c-fill",
    label: "usb-c-fill"
  },
  {
    value: "bi bi-usb-drive",
    label: "usb-drive"
  },
  {
    value: "bi bi-usb-drive-fill",
    label: "usb-drive-fill"
  },
  {
    value: "bi bi-usb-fill",
    label: "usb-fill"
  },
  {
    value: "bi bi-usb-micro",
    label: "usb-micro"
  },
  {
    value: "bi bi-usb-micro-fill",
    label: "usb-micro-fill"
  },
  {
    value: "bi bi-usb-mini",
    label: "usb-mini"
  },
  {
    value: "bi bi-usb-mini-fill",
    label: "usb-mini-fill"
  },
  {
    value: "bi bi-usb-plug",
    label: "usb-plug"
  },
  {
    value: "bi bi-usb-plug-fill",
    label: "usb-plug-fill"
  },
  {
    value: "bi bi-usb-symbol",
    label: "usb-symbol"
  },
  {
    value: "bi bi-valentine",
    label: "valentine"
  },
  {
    value: "bi bi-valentine2",
    label: "valentine2"
  },
  {
    value: "bi bi-vector-pen",
    label: "vector-pen"
  },
  {
    value: "bi bi-view-list",
    label: "view-list"
  },
  {
    value: "bi bi-view-stacked",
    label: "view-stacked"
  },
  {
    value: "bi bi-vignette",
    label: "vignette"
  },
  {
    value: "bi bi-vimeo",
    label: "vimeo"
  },
  {
    value: "bi bi-vinyl",
    label: "vinyl"
  },
  {
    value: "bi bi-vinyl-fill",
    label: "vinyl-fill"
  },
  {
    value: "bi bi-virus",
    label: "virus"
  },
  {
    value: "bi bi-virus2",
    label: "virus2"
  },
  {
    value: "bi bi-voicemail",
    label: "voicemail"
  },
  {
    value: "bi bi-volume-down",
    label: "volume-down"
  },
  {
    value: "bi bi-volume-down-fill",
    label: "volume-down-fill"
  },
  {
    value: "bi bi-volume-mute",
    label: "volume-mute"
  },
  {
    value: "bi bi-volume-mute-fill",
    label: "volume-mute-fill"
  },
  {
    value: "bi bi-volume-off",
    label: "volume-off"
  },
  {
    value: "bi bi-volume-off-fill",
    label: "volume-off-fill"
  },
  {
    value: "bi bi-volume-up",
    label: "volume-up"
  },
  {
    value: "bi bi-volume-up-fill",
    label: "volume-up-fill"
  },
  {
    value: "bi bi-vr",
    label: "vr"
  },
  {
    value: "bi bi-wallet",
    label: "wallet"
  },
  {
    value: "bi bi-wallet-fill",
    label: "wallet-fill"
  },
  {
    value: "bi bi-wallet2",
    label: "wallet2"
  },
  {
    value: "bi bi-watch",
    label: "watch"
  },
  {
    value: "bi bi-water",
    label: "water"
  },
  {
    value: "bi bi-webcam",
    label: "webcam"
  },
  {
    value: "bi bi-webcam-fill",
    label: "webcam-fill"
  },
  {
    value: "bi bi-wechat",
    label: "wechat"
  },
  {
    value: "bi bi-whatsapp",
    label: "whatsapp"
  },
  {
    value: "bi bi-wifi",
    label: "wifi"
  },
  {
    value: "bi bi-wifi-1",
    label: "wifi-1"
  },
  {
    value: "bi bi-wifi-2",
    label: "wifi-2"
  },
  {
    value: "bi bi-wifi-off",
    label: "wifi-off"
  },
  {
    value: "bi bi-wikipedia",
    label: "wikipedia"
  },
  {
    value: "bi bi-wind",
    label: "wind"
  },
  {
    value: "bi bi-window",
    label: "window"
  },
  {
    value: "bi bi-window-dash",
    label: "window-dash"
  },
  {
    value: "bi bi-window-desktop",
    label: "window-desktop"
  },
  {
    value: "bi bi-window-dock",
    label: "window-dock"
  },
  {
    value: "bi bi-window-fullscreen",
    label: "window-fullscreen"
  },
  {
    value: "bi bi-window-plus",
    label: "window-plus"
  },
  {
    value: "bi bi-window-sidebar",
    label: "window-sidebar"
  },
  {
    value: "bi bi-window-split",
    label: "window-split"
  },
  {
    value: "bi bi-window-stack",
    label: "window-stack"
  },
  {
    value: "bi bi-window-x",
    label: "window-x"
  },
  {
    value: "bi bi-windows",
    label: "windows"
  },
  {
    value: "bi bi-wordpress",
    label: "wordpress"
  },
  {
    value: "bi bi-wrench",
    label: "wrench"
  },
  {
    value: "bi bi-wrench-adjustable",
    label: "wrench-adjustable"
  },
  {
    value: "bi bi-wrench-adjustable-circle",
    label: "wrench-adjustable-circle"
  },
  {
    value: "bi bi-wrench-adjustable-circle-fill",
    label: "wrench-adjustable-circle-fill"
  },
  {
    value: "bi bi-x",
    label: "x"
  },
  {
    value: "bi bi-x-circle",
    label: "x-circle"
  },
  {
    value: "bi bi-x-circle-fill",
    label: "x-circle-fill"
  },
  {
    value: "bi bi-x-diamond",
    label: "x-diamond"
  },
  {
    value: "bi bi-x-diamond-fill",
    label: "x-diamond-fill"
  },
  {
    value: "bi bi-x-lg",
    label: "x-lg"
  },
  {
    value: "bi bi-x-octagon",
    label: "x-octagon"
  },
  {
    value: "bi bi-x-octagon-fill",
    label: "x-octagon-fill"
  },
  {
    value: "bi bi-x-square",
    label: "x-square"
  },
  {
    value: "bi bi-x-square-fill",
    label: "x-square-fill"
  },
  {
    value: "bi bi-xbox",
    label: "xbox"
  },
  {
    value: "bi bi-yelp",
    label: "yelp"
  },
  {
    value: "bi bi-yin-yang",
    label: "yin-yang"
  },
  {
    value: "bi bi-youtube",
    label: "youtube"
  },
  {
    value: "bi bi-zoom-in",
    label: "zoom-in"
  },
  {
    value: "bi bi-zoom-out",
    label: "zoom-out"
  }
], eO = (t) => {
  var c;
  console.log("props", t);
  const { contains: i } = iS({ sensitivity: "base" }), { collection: l, filter: n } = lS({
    initialItems: XA,
    filter: i
  }), [u, b] = Rt([]);
  return /* @__PURE__ */ m.jsxs(
    Wl.Root,
    {
      collection: l,
      onInputValueChange: (p) => n(p.inputValue),
      width: "100%",
      placeholder: "",
      openOnClick: !0,
      defaultValue: (t == null ? void 0 : t.value) && ((c = t == null ? void 0 : t.value) == null ? void 0 : c.split(",")),
      value: u,
      onValueChange: (p) => {
        console.log("e", p), t != null && t.onChange && (t == null || t.onChange(p.value.join(","))), b(p.value);
      },
      children: [
        /* @__PURE__ */ m.jsx(Wl.Label, { children: "Search and select icon" }),
        /* @__PURE__ */ m.jsxs(Wl.Control, { children: [
          /* @__PURE__ */ m.jsx(Wl.Input, {}),
          /* @__PURE__ */ m.jsx(Wl.IndicatorGroup, { children: /* @__PURE__ */ m.jsx(Wl.Trigger, {}) })
        ] }),
        /* @__PURE__ */ m.jsx(Hv, { children: /* @__PURE__ */ m.jsx(Wl.Positioner, { children: /* @__PURE__ */ m.jsxs(Wl.Content, { children: [
          /* @__PURE__ */ m.jsx(Wl.Empty, { children: "No items found" }),
          l.items.map((p) => /* @__PURE__ */ m.jsxs(Wl.Item, { item: p, children: [
            Gs({ iconName: p == null ? void 0 : p.value }),
            /* @__PURE__ */ m.jsx(aS, { flex: "1", children: p.label }),
            /* @__PURE__ */ m.jsx(Wl.ItemIndicator, {})
          ] }, p.value))
        ] }) }) })
      ]
    }
  );
}, rc = {
  type: "custom",
  render: (t) => {
    var u;
    const { value: i, onChange: l } = t || {}, n = ((u = t == null ? void 0 : t.field) == null ? void 0 : u.label) || "Icon";
    return /* @__PURE__ */ m.jsx(zr, { label: n, children: /* @__PURE__ */ m.jsx(eO, { value: i, onChange: l }) });
  }
}, tO = {
  fields: {
    variableName: { type: "text", label: "Variable Name (e.g., searchQuery)" },
    placeholder: { type: "text", label: "Placeholder" },
    initialValue: { type: "text", label: "Value" },
    size: {
      label: "Size",
      type: "select",
      labelIcon: /* @__PURE__ */ m.jsx(ac, { size: 16 }),
      options: [
        { label: "2Xs", value: "2xs" },
        { label: "Xs", value: "xs" },
        { label: "Sm", value: "sm" },
        { label: "Md", value: "md" },
        { label: "Lg", value: "lg" },
        { label: "Xl", value: "xl" },
        { label: "2Xl", value: "2xl" }
      ]
    },
    variant: {
      label: "Variants",
      type: "select",
      options: [
        { label: "Flushed", value: "flushed" },
        { label: "Subtle", value: "subtle" },
        { label: "Outline", value: "outline" }
      ]
    },
    color: {
      label: "Color",
      ...ur
    },
    backgroundColor: {
      label: "Background Color",
      ...ur
    },
    iconLeft: {
      label: "Icon Left",
      ...rc
    },
    textLeft: {
      label: "Text Left",
      type: "text"
    },
    iconRight: {
      label: "Icon Right",
      ...rc
    },
    textRight: {
      label: "Text Right",
      type: "text"
    }
  },
  defaultProps: {
    variableName: "",
    placeholder: "",
    initialValue: "",
    size: "md",
    variant: "outline",
    color: "",
    backgroundColor: "",
    iconLeft: void 0,
    textLeft: void 0,
    iconRight: void 0,
    textRight: void 0
  },
  render: ({
    variableName: t,
    placeholder: i,
    initialValue: l,
    size: n,
    variant: u,
    color: b,
    backgroundColor: c,
    iconLeft: p,
    textLeft: y,
    iconRight: x,
    textRight: S
  }) => {
    const [C, M] = Aa(Yn), N = ui(() => hi.get(C, t, l), [t, C, l]);
    Xt(() => {
      t && M({ ...C, [t]: N });
    }, [N, t]);
    const A = (G, q) => G ? Gs({
      iconName: G
    }) : q || null, I = ui(
      () => A(p, y),
      [p, y]
    ), g = ui(
      () => A(x, S),
      [x, S]
    );
    return /* @__PURE__ */ m.jsx(rS, { startElement: I, endElement: g, children: /* @__PURE__ */ m.jsx(
      qn,
      {
        size: n,
        variant: u,
        placeholder: i,
        value: N || "",
        style: {
          color: b,
          backgroundColor: c
        },
        onChange: (G) => M((q) => ({
          ...q,
          [t]: G.target.value
        }))
      }
    ) });
  }
}, iO = Ti(tO), lO = {
  label: "Button",
  fields: {
    label: {
      label: "Label",
      type: "text",
      placeholder: "Lorem ipsum...",
      contentEditable: !0
    },
    typeView: {
      label: "Type view",
      type: "select",
      labelIcon: /* @__PURE__ */ m.jsx(ac, { size: 16 }),
      options: [
        { label: "Normal", value: "normal" },
        { label: "Button Google play", value: "buttonGgPlay" },
        { label: "Button App Store", value: "buttonAppStore" }
      ]
    },
    size: {
      label: "Size",
      type: "select",
      labelIcon: /* @__PURE__ */ m.jsx(ac, { size: 16 }),
      options: [
        { label: "2Xs", value: "2xs" },
        { label: "Xs", value: "xs" },
        { label: "Sm", value: "sm" },
        { label: "Md", value: "md" },
        { label: "Lg", value: "lg" },
        { label: "Xl", value: "xl" },
        { label: "2Xl", value: "2xl" }
      ]
    },
    href: {
      label: "Link",
      type: "text"
    },
    variant: {
      label: "Variants",
      type: "select",
      options: [
        { label: "Solid", value: "solid" },
        { label: "Subtle", value: "subtle" },
        { label: "Surface", value: "surface" },
        { label: "Outline", value: "outline" },
        { label: "Ghost", value: "ghost" },
        { label: "Plain", value: "plain" }
      ]
    },
    color: {
      label: "Color",
      ...ur
    },
    backgroundColor: {
      label: "Background Color",
      ...ur
    },
    icon: {
      label: "Icon",
      ...rc
    },
    positionIcon: {
      label: "Position Icon",
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" }
      ]
    },
    iconSize: {
      label: "Size",
      type: "text",
      placeholder: "...px"
    },
    iconColor: {
      label: "Icon Color",
      ...ur
    }
  },
  defaultProps: {
    label: "Button",
    variant: "solid",
    size: "md",
    href: "",
    color: "",
    typeView: "normal",
    icon: "",
    positionIcon: "left",
    iconSize: "14px",
    iconColor: ""
  },
  render: ({
    href: t,
    variant: i,
    label: l,
    size: n,
    color: u,
    backgroundColor: b,
    typeView: c,
    icon: p,
    positionIcon: y,
    iconSize: x,
    iconColor: S
    // puck
  }) => (console.log("icon", p), /* @__PURE__ */ m.jsxs("div", { children: [
    (!c || c === "normal") && /* @__PURE__ */ m.jsxs(
      dl,
      {
        style: {
          color: u,
          backgroundColor: b
        },
        variant: i,
        size: n,
        children: [
          y == "left" && Gs({
            iconName: p,
            mf_color: S,
            mf_font_size: x
          }),
          /* @__PURE__ */ m.jsx("a", { href: t, children: l }),
          y == "right" && Gs({
            iconName: p,
            mf_color: S,
            mf_font_size: x
          })
        ]
      }
    ),
    c === "buttonGgPlay" && /* @__PURE__ */ m.jsx("div", { children: "buttonGgPlay" }),
    c === "buttonAppStore" && /* @__PURE__ */ m.jsx("div", { children: "buttonAppStore" })
  ] }))
}, aO = async () => (await Kn().post(
  "/api/v1/carts",
  {}
)).data, rO = async (t) => {
  const l = await Kn().put(
    `/api/v1/carts/${t == null ? void 0 : t.id}`,
    t == null ? void 0 : t.body
  );
  return l == null ? void 0 : l.data;
}, nO = (t) => Pg({
  ...t,
  mutationFn: () => aO()
}), sO = (t) => Pg({
  ...t,
  mutationFn: rO
});
function oO(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Zm = { exports: {} };
(function(t, i) {
  (function(l, n) {
    t.exports = n();
  })(Kv, function() {
    var l;
    function n() {
      return l.apply(null, arguments);
    }
    function u(r) {
      l = r;
    }
    function b(r) {
      return r instanceof Array || Object.prototype.toString.call(r) === "[object Array]";
    }
    function c(r) {
      return r != null && Object.prototype.toString.call(r) === "[object Object]";
    }
    function p(r, o) {
      return Object.prototype.hasOwnProperty.call(r, o);
    }
    function y(r) {
      if (Object.getOwnPropertyNames)
        return Object.getOwnPropertyNames(r).length === 0;
      var o;
      for (o in r)
        if (p(r, o))
          return !1;
      return !0;
    }
    function x(r) {
      return r === void 0;
    }
    function S(r) {
      return typeof r == "number" || Object.prototype.toString.call(r) === "[object Number]";
    }
    function C(r) {
      return r instanceof Date || Object.prototype.toString.call(r) === "[object Date]";
    }
    function M(r, o) {
      var d = [], h, w = r.length;
      for (h = 0; h < w; ++h)
        d.push(o(r[h], h));
      return d;
    }
    function N(r, o) {
      for (var d in o)
        p(o, d) && (r[d] = o[d]);
      return p(o, "toString") && (r.toString = o.toString), p(o, "valueOf") && (r.valueOf = o.valueOf), r;
    }
    function A(r, o, d, h) {
      return ja(r, o, d, h, !0).utc();
    }
    function I() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
      };
    }
    function g(r) {
      return r._pf == null && (r._pf = I()), r._pf;
    }
    var G;
    Array.prototype.some ? G = Array.prototype.some : G = function(r) {
      var o = Object(this), d = o.length >>> 0, h;
      for (h = 0; h < d; h++)
        if (h in o && r.call(this, o[h], h, o))
          return !0;
      return !1;
    };
    function q(r) {
      var o = null, d = !1, h = r._d && !isNaN(r._d.getTime());
      if (h && (o = g(r), d = G.call(o.parsedDateParts, function(w) {
        return w != null;
      }), h = o.overflow < 0 && !o.empty && !o.invalidEra && !o.invalidMonth && !o.invalidWeekday && !o.weekdayMismatch && !o.nullInput && !o.invalidFormat && !o.userInvalidated && (!o.meridiem || o.meridiem && d), r._strict && (h = h && o.charsLeftOver === 0 && o.unusedTokens.length === 0 && o.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(r))
        r._isValid = h;
      else
        return h;
      return r._isValid;
    }
    function F(r) {
      var o = A(NaN);
      return r != null ? N(g(o), r) : g(o).userInvalidated = !0, o;
    }
    var ue = n.momentProperties = [], R = !1;
    function se(r, o) {
      var d, h, w, O = ue.length;
      if (x(o._isAMomentObject) || (r._isAMomentObject = o._isAMomentObject), x(o._i) || (r._i = o._i), x(o._f) || (r._f = o._f), x(o._l) || (r._l = o._l), x(o._strict) || (r._strict = o._strict), x(o._tzm) || (r._tzm = o._tzm), x(o._isUTC) || (r._isUTC = o._isUTC), x(o._offset) || (r._offset = o._offset), x(o._pf) || (r._pf = g(o)), x(o._locale) || (r._locale = o._locale), O > 0)
        for (d = 0; d < O; d++)
          h = ue[d], w = o[h], x(w) || (r[h] = w);
      return r;
    }
    function $(r) {
      se(this, r), this._d = new Date(r._d != null ? r._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), R === !1 && (R = !0, n.updateOffset(this), R = !1);
    }
    function K(r) {
      return r instanceof $ || r != null && r._isAMomentObject != null;
    }
    function z(r) {
      n.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + r);
    }
    function pe(r, o) {
      var d = !0;
      return N(function() {
        if (n.deprecationHandler != null && n.deprecationHandler(null, r), d) {
          var h = [], w, O, H, Se = arguments.length;
          for (O = 0; O < Se; O++) {
            if (w = "", typeof arguments[O] == "object") {
              w += `
[` + O + "] ";
              for (H in arguments[0])
                p(arguments[0], H) && (w += H + ": " + arguments[0][H] + ", ");
              w = w.slice(0, -2);
            } else
              w = arguments[O];
            h.push(w);
          }
          z(
            r + `
Arguments: ` + Array.prototype.slice.call(h).join("") + `
` + new Error().stack
          ), d = !1;
        }
        return o.apply(this, arguments);
      }, o);
    }
    var Me = {};
    function Ye(r, o) {
      n.deprecationHandler != null && n.deprecationHandler(r, o), Me[r] || (z(o), Me[r] = !0);
    }
    n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;
    function Ae(r) {
      return typeof Function < "u" && r instanceof Function || Object.prototype.toString.call(r) === "[object Function]";
    }
    function He(r) {
      var o, d;
      for (d in r)
        p(r, d) && (o = r[d], Ae(o) ? this[d] = o : this["_" + d] = o);
      this._config = r, this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
      );
    }
    function bt(r, o) {
      var d = N({}, r), h;
      for (h in o)
        p(o, h) && (c(r[h]) && c(o[h]) ? (d[h] = {}, N(d[h], r[h]), N(d[h], o[h])) : o[h] != null ? d[h] = o[h] : delete d[h]);
      for (h in r)
        p(r, h) && !p(o, h) && c(r[h]) && (d[h] = N({}, d[h]));
      return d;
    }
    function Ce(r) {
      r != null && this.set(r);
    }
    var Fe;
    Object.keys ? Fe = Object.keys : Fe = function(r) {
      var o, d = [];
      for (o in r)
        p(r, o) && d.push(o);
      return d;
    };
    var Te = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    };
    function de(r, o, d) {
      var h = this._calendar[r] || this._calendar.sameElse;
      return Ae(h) ? h.call(o, d) : h;
    }
    function re(r, o, d) {
      var h = "" + Math.abs(r), w = o - h.length, O = r >= 0;
      return (O ? d ? "+" : "" : "-") + Math.pow(10, Math.max(0, w)).toString().substr(1) + h;
    }
    var ve = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, B = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ne = {}, J = {};
    function Z(r, o, d, h) {
      var w = h;
      typeof h == "string" && (w = function() {
        return this[h]();
      }), r && (J[r] = w), o && (J[o[0]] = function() {
        return re(w.apply(this, arguments), o[1], o[2]);
      }), d && (J[d] = function() {
        return this.localeData().ordinal(
          w.apply(this, arguments),
          r
        );
      });
    }
    function ye(r) {
      return r.match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
    }
    function je(r) {
      var o = r.match(ve), d, h;
      for (d = 0, h = o.length; d < h; d++)
        J[o[d]] ? o[d] = J[o[d]] : o[d] = ye(o[d]);
      return function(w) {
        var O = "", H;
        for (H = 0; H < h; H++)
          O += Ae(o[H]) ? o[H].call(w, r) : o[H];
        return O;
      };
    }
    function me(r, o) {
      return r.isValid() ? (o = ee(o, r.localeData()), ne[o] = ne[o] || je(o), ne[o](r)) : r.localeData().invalidDate();
    }
    function ee(r, o) {
      var d = 5;
      function h(w) {
        return o.longDateFormat(w) || w;
      }
      for (B.lastIndex = 0; d >= 0 && B.test(r); )
        r = r.replace(
          B,
          h
        ), B.lastIndex = 0, d -= 1;
      return r;
    }
    var Ee = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    function Pe(r) {
      var o = this._longDateFormat[r], d = this._longDateFormat[r.toUpperCase()];
      return o || !d ? o : (this._longDateFormat[r] = d.match(ve).map(function(h) {
        return h === "MMMM" || h === "MM" || h === "DD" || h === "dddd" ? h.slice(1) : h;
      }).join(""), this._longDateFormat[r]);
    }
    var Ue = "Invalid date";
    function St() {
      return this._invalidDate;
    }
    var we = "%d", ce = /\d{1,2}/;
    function Be(r) {
      return this._ordinal.replace("%d", r);
    }
    var kt = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    };
    function pi(r, o, d, h) {
      var w = this._relativeTime[d];
      return Ae(w) ? w(r, o, d, h) : w.replace(/%d/i, r);
    }
    function It(r, o) {
      var d = this._relativeTime[r > 0 ? "future" : "past"];
      return Ae(d) ? d(o) : d.replace(/%s/i, o);
    }
    var yi = {
      D: "date",
      dates: "date",
      date: "date",
      d: "day",
      days: "day",
      day: "day",
      e: "weekday",
      weekdays: "weekday",
      weekday: "weekday",
      E: "isoWeekday",
      isoweekdays: "isoWeekday",
      isoweekday: "isoWeekday",
      DDD: "dayOfYear",
      dayofyears: "dayOfYear",
      dayofyear: "dayOfYear",
      h: "hour",
      hours: "hour",
      hour: "hour",
      ms: "millisecond",
      milliseconds: "millisecond",
      millisecond: "millisecond",
      m: "minute",
      minutes: "minute",
      minute: "minute",
      M: "month",
      months: "month",
      month: "month",
      Q: "quarter",
      quarters: "quarter",
      quarter: "quarter",
      s: "second",
      seconds: "second",
      second: "second",
      gg: "weekYear",
      weekyears: "weekYear",
      weekyear: "weekYear",
      GG: "isoWeekYear",
      isoweekyears: "isoWeekYear",
      isoweekyear: "isoWeekYear",
      w: "week",
      weeks: "week",
      week: "week",
      W: "isoWeek",
      isoweeks: "isoWeek",
      isoweek: "isoWeek",
      y: "year",
      years: "year",
      year: "year"
    };
    function Ot(r) {
      return typeof r == "string" ? yi[r] || yi[r.toLowerCase()] : void 0;
    }
    function Ai(r) {
      var o = {}, d, h;
      for (h in r)
        p(r, h) && (d = Ot(h), d && (o[d] = r[h]));
      return o;
    }
    var Hl = {
      date: 9,
      day: 11,
      weekday: 11,
      isoWeekday: 11,
      dayOfYear: 4,
      hour: 13,
      millisecond: 16,
      minute: 14,
      month: 8,
      quarter: 7,
      second: 15,
      weekYear: 1,
      isoWeekYear: 1,
      week: 5,
      isoWeek: 5,
      year: 1
    };
    function ba(r) {
      var o = [], d;
      for (d in r)
        p(r, d) && o.push({ unit: d, priority: Hl[d] });
      return o.sort(function(h, w) {
        return h.priority - w.priority;
      }), o;
    }
    var Ii = /\d/, bi = /\d\d/, ll = /\d{3}/, Vi = /\d{4}/, al = /[+-]?\d{6}/, wt = /\d\d?/, Gl = /\d\d\d\d?/, Al = /\d\d\d\d\d\d?/, hl = /\d{1,3}/, Ol = /\d{1,4}/, W = /[+-]?\d{1,6}/, P = /\d+/, le = /[+-]?\d+/, ge = /Z|[+-]\d\d:?\d\d/gi, he = /Z|[+-]\d\d(?::?\d\d)?/gi, _e = /[+-]?\d+(\.\d{1,3})?/, De = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Oe = /^[1-9]\d?/, Ie = /^([1-9]\d|\d)/, Ge;
    Ge = {};
    function oe(r, o, d) {
      Ge[r] = Ae(o) ? o : function(h, w) {
        return h && d ? d : o;
      };
    }
    function fi(r, o) {
      return p(Ge, r) ? Ge[r](o._strict, o._locale) : new RegExp(Wt(r));
    }
    function Wt(r) {
      return Pt(
        r.replace("\\", "").replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function(o, d, h, w, O) {
            return d || h || w || O;
          }
        )
      );
    }
    function Pt(r) {
      return r.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function Dt(r) {
      return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
    }
    function Ke(r) {
      var o = +r, d = 0;
      return o !== 0 && isFinite(o) && (d = Dt(o)), d;
    }
    var Pi = {};
    function ot(r, o) {
      var d, h = o, w;
      for (typeof r == "string" && (r = [r]), S(o) && (h = function(O, H) {
        H[o] = Ke(O);
      }), w = r.length, d = 0; d < w; d++)
        Pi[r[d]] = h;
    }
    function xi(r, o) {
      ot(r, function(d, h, w, O) {
        w._w = w._w || {}, o(d, w._w, w, O);
      });
    }
    function Xn(r, o, d) {
      o != null && p(Pi, r) && Pi[r](o, d._a, d, r);
    }
    function Ma(r) {
      return r % 4 === 0 && r % 100 !== 0 || r % 400 === 0;
    }
    var di = 0, T = 1, ie = 2, fe = 3, Le = 4, Xe = 5, ft = 6, dt = 7, lt = 8;
    Z("Y", 0, 0, function() {
      var r = this.year();
      return r <= 9999 ? re(r, 4) : "+" + r;
    }), Z(0, ["YY", 2], 0, function() {
      return this.year() % 100;
    }), Z(0, ["YYYY", 4], 0, "year"), Z(0, ["YYYYY", 5], 0, "year"), Z(0, ["YYYYYY", 6, !0], 0, "year"), oe("Y", le), oe("YY", wt, bi), oe("YYYY", Ol, Vi), oe("YYYYY", W, al), oe("YYYYYY", W, al), ot(["YYYYY", "YYYYYY"], di), ot("YYYY", function(r, o) {
      o[di] = r.length === 2 ? n.parseTwoDigitYear(r) : Ke(r);
    }), ot("YY", function(r, o) {
      o[di] = n.parseTwoDigitYear(r);
    }), ot("Y", function(r, o) {
      o[di] = parseInt(r, 10);
    });
    function Qt(r) {
      return Ma(r) ? 366 : 365;
    }
    n.parseTwoDigitYear = function(r) {
      return Ke(r) + (Ke(r) > 68 ? 1900 : 2e3);
    };
    var qt = ai("FullYear", !0);
    function Yt() {
      return Ma(this.year());
    }
    function ai(r, o) {
      return function(d) {
        return d != null ? (pl(this, r, d), n.updateOffset(this, o), this) : Si(this, r);
      };
    }
    function Si(r, o) {
      if (!r.isValid())
        return NaN;
      var d = r._d, h = r._isUTC;
      switch (o) {
        case "Milliseconds":
          return h ? d.getUTCMilliseconds() : d.getMilliseconds();
        case "Seconds":
          return h ? d.getUTCSeconds() : d.getSeconds();
        case "Minutes":
          return h ? d.getUTCMinutes() : d.getMinutes();
        case "Hours":
          return h ? d.getUTCHours() : d.getHours();
        case "Date":
          return h ? d.getUTCDate() : d.getDate();
        case "Day":
          return h ? d.getUTCDay() : d.getDay();
        case "Month":
          return h ? d.getUTCMonth() : d.getMonth();
        case "FullYear":
          return h ? d.getUTCFullYear() : d.getFullYear();
        default:
          return NaN;
      }
    }
    function pl(r, o, d) {
      var h, w, O, H, Se;
      if (!(!r.isValid() || isNaN(d))) {
        switch (h = r._d, w = r._isUTC, o) {
          case "Milliseconds":
            return void (w ? h.setUTCMilliseconds(d) : h.setMilliseconds(d));
          case "Seconds":
            return void (w ? h.setUTCSeconds(d) : h.setSeconds(d));
          case "Minutes":
            return void (w ? h.setUTCMinutes(d) : h.setMinutes(d));
          case "Hours":
            return void (w ? h.setUTCHours(d) : h.setHours(d));
          case "Date":
            return void (w ? h.setUTCDate(d) : h.setDate(d));
          case "FullYear":
            break;
          default:
            return;
        }
        O = d, H = r.month(), Se = r.date(), Se = Se === 29 && H === 1 && !Ma(O) ? 28 : Se, w ? h.setUTCFullYear(O, H, Se) : h.setFullYear(O, H, Se);
      }
    }
    function ri(r) {
      return r = Ot(r), Ae(this[r]) ? this[r]() : this;
    }
    function cr(r, o) {
      if (typeof r == "object") {
        r = Ai(r);
        var d = ba(r), h, w = d.length;
        for (h = 0; h < w; h++)
          this[d[h].unit](r[d[h].unit]);
      } else if (r = Ot(r), Ae(this[r]))
        return this[r](o);
      return this;
    }
    function es(r, o) {
      return (r % o + o) % o;
    }
    var Vt;
    Array.prototype.indexOf ? Vt = Array.prototype.indexOf : Vt = function(r) {
      var o;
      for (o = 0; o < this.length; ++o)
        if (this[o] === r)
          return o;
      return -1;
    };
    function Kr(r, o) {
      if (isNaN(r) || isNaN(o))
        return NaN;
      var d = es(o, 12);
      return r += (o - d) / 12, d === 1 ? Ma(r) ? 29 : 28 : 31 - d % 7 % 2;
    }
    Z("M", ["MM", 2], "Mo", function() {
      return this.month() + 1;
    }), Z("MMM", 0, 0, function(r) {
      return this.localeData().monthsShort(this, r);
    }), Z("MMMM", 0, 0, function(r) {
      return this.localeData().months(this, r);
    }), oe("M", wt, Oe), oe("MM", wt, bi), oe("MMM", function(r, o) {
      return o.monthsShortRegex(r);
    }), oe("MMMM", function(r, o) {
      return o.monthsRegex(r);
    }), ot(["M", "MM"], function(r, o) {
      o[T] = Ke(r) - 1;
    }), ot(["MMM", "MMMM"], function(r, o, d, h) {
      var w = d._locale.monthsParse(r, h, d._strict);
      w != null ? o[T] = w : g(d).invalidMonth = r;
    });
    var fo = "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ), ts = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ho = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Lc = De, Nc = De;
    function Ic(r, o) {
      return r ? b(this._months) ? this._months[r.month()] : this._months[(this._months.isFormat || ho).test(o) ? "format" : "standalone"][r.month()] : b(this._months) ? this._months : this._months.standalone;
    }
    function po(r, o) {
      return r ? b(this._monthsShort) ? this._monthsShort[r.month()] : this._monthsShort[ho.test(o) ? "format" : "standalone"][r.month()] : b(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }
    function vo(r, o, d) {
      var h, w, O, H = r.toLocaleLowerCase();
      if (!this._monthsParse)
        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], h = 0; h < 12; ++h)
          O = A([2e3, h]), this._shortMonthsParse[h] = this.monthsShort(
            O,
            ""
          ).toLocaleLowerCase(), this._longMonthsParse[h] = this.months(O, "").toLocaleLowerCase();
      return d ? o === "MMM" ? (w = Vt.call(this._shortMonthsParse, H), w !== -1 ? w : null) : (w = Vt.call(this._longMonthsParse, H), w !== -1 ? w : null) : o === "MMM" ? (w = Vt.call(this._shortMonthsParse, H), w !== -1 ? w : (w = Vt.call(this._longMonthsParse, H), w !== -1 ? w : null)) : (w = Vt.call(this._longMonthsParse, H), w !== -1 ? w : (w = Vt.call(this._shortMonthsParse, H), w !== -1 ? w : null));
    }
    function go(r, o, d) {
      var h, w, O;
      if (this._monthsParseExact)
        return vo.call(this, r, o, d);
      for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), h = 0; h < 12; h++) {
        if (w = A([2e3, h]), d && !this._longMonthsParse[h] && (this._longMonthsParse[h] = new RegExp(
          "^" + this.months(w, "").replace(".", "") + "$",
          "i"
        ), this._shortMonthsParse[h] = new RegExp(
          "^" + this.monthsShort(w, "").replace(".", "") + "$",
          "i"
        )), !d && !this._monthsParse[h] && (O = "^" + this.months(w, "") + "|^" + this.monthsShort(w, ""), this._monthsParse[h] = new RegExp(O.replace(".", ""), "i")), d && o === "MMMM" && this._longMonthsParse[h].test(r))
          return h;
        if (d && o === "MMM" && this._shortMonthsParse[h].test(r))
          return h;
        if (!d && this._monthsParse[h].test(r))
          return h;
      }
    }
    function Qr(r, o) {
      if (!r.isValid())
        return r;
      if (typeof o == "string") {
        if (/^\d+$/.test(o))
          o = Ke(o);
        else if (o = r.localeData().monthsParse(o), !S(o))
          return r;
      }
      var d = o, h = r.date();
      return h = h < 29 ? h : Math.min(h, Kr(r.year(), d)), r._isUTC ? r._d.setUTCMonth(d, h) : r._d.setMonth(d, h), r;
    }
    function mo(r) {
      return r != null ? (Qr(this, r), n.updateOffset(this, !0), this) : Si(this, "Month");
    }
    function yo() {
      return Kr(this.year(), this.month());
    }
    function Zr(r) {
      return this._monthsParseExact ? (p(this, "_monthsRegex") || _o.call(this), r ? this._monthsShortStrictRegex : this._monthsShortRegex) : (p(this, "_monthsShortRegex") || (this._monthsShortRegex = Lc), this._monthsShortStrictRegex && r ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }
    function wo(r) {
      return this._monthsParseExact ? (p(this, "_monthsRegex") || _o.call(this), r ? this._monthsStrictRegex : this._monthsRegex) : (p(this, "_monthsRegex") || (this._monthsRegex = Nc), this._monthsStrictRegex && r ? this._monthsStrictRegex : this._monthsRegex);
    }
    function _o() {
      function r(ze, rt) {
        return rt.length - ze.length;
      }
      var o = [], d = [], h = [], w, O, H, Se;
      for (w = 0; w < 12; w++)
        O = A([2e3, w]), H = Pt(this.monthsShort(O, "")), Se = Pt(this.months(O, "")), o.push(H), d.push(Se), h.push(Se), h.push(H);
      o.sort(r), d.sort(r), h.sort(r), this._monthsRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
        "^(" + d.join("|") + ")",
        "i"
      ), this._monthsShortStrictRegex = new RegExp(
        "^(" + o.join("|") + ")",
        "i"
      );
    }
    function xo(r, o, d, h, w, O, H) {
      var Se;
      return r < 100 && r >= 0 ? (Se = new Date(r + 400, o, d, h, w, O, H), isFinite(Se.getFullYear()) && Se.setFullYear(r)) : Se = new Date(r, o, d, h, w, O, H), Se;
    }
    function Da(r) {
      var o, d;
      return r < 100 && r >= 0 ? (d = Array.prototype.slice.call(arguments), d[0] = r + 400, o = new Date(Date.UTC.apply(null, d)), isFinite(o.getUTCFullYear()) && o.setUTCFullYear(r)) : o = new Date(Date.UTC.apply(null, arguments)), o;
    }
    function La(r, o, d) {
      var h = 7 + o - d, w = (7 + Da(r, 0, h).getUTCDay() - o) % 7;
      return -w + h - 1;
    }
    function So(r, o, d, h, w) {
      var O = (7 + d - h) % 7, H = La(r, h, w), Se = 1 + 7 * (o - 1) + O + H, ze, rt;
      return Se <= 0 ? (ze = r - 1, rt = Qt(ze) + Se) : Se > Qt(r) ? (ze = r + 1, rt = Se - Qt(r)) : (ze = r, rt = Se), {
        year: ze,
        dayOfYear: rt
      };
    }
    function Na(r, o, d) {
      var h = La(r.year(), o, d), w = Math.floor((r.dayOfYear() - h - 1) / 7) + 1, O, H;
      return w < 1 ? (H = r.year() - 1, O = w + rl(H, o, d)) : w > rl(r.year(), o, d) ? (O = w - rl(r.year(), o, d), H = r.year() + 1) : (H = r.year(), O = w), {
        week: O,
        year: H
      };
    }
    function rl(r, o, d) {
      var h = La(r, o, d), w = La(r + 1, o, d);
      return (Qt(r) - h + w) / 7;
    }
    Z("w", ["ww", 2], "wo", "week"), Z("W", ["WW", 2], "Wo", "isoWeek"), oe("w", wt, Oe), oe("ww", wt, bi), oe("W", wt, Oe), oe("WW", wt, bi), xi(
      ["w", "ww", "W", "WW"],
      function(r, o, d, h) {
        o[h.substr(0, 1)] = Ke(r);
      }
    );
    function is(r) {
      return Na(r, this._week.dow, this._week.doy).week;
    }
    var Ia = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6
      // The week that contains Jan 6th is the first week of the year.
    };
    function ko() {
      return this._week.dow;
    }
    function Ro() {
      return this._week.doy;
    }
    function Pc(r) {
      var o = this.localeData().week(this);
      return r == null ? o : this.add((r - o) * 7, "d");
    }
    function Co(r) {
      var o = Na(this, 1, 4).week;
      return r == null ? o : this.add((r - o) * 7, "d");
    }
    Z("d", 0, "do", "day"), Z("dd", 0, 0, function(r) {
      return this.localeData().weekdaysMin(this, r);
    }), Z("ddd", 0, 0, function(r) {
      return this.localeData().weekdaysShort(this, r);
    }), Z("dddd", 0, 0, function(r) {
      return this.localeData().weekdays(this, r);
    }), Z("e", 0, 0, "weekday"), Z("E", 0, 0, "isoWeekday"), oe("d", wt), oe("e", wt), oe("E", wt), oe("dd", function(r, o) {
      return o.weekdaysMinRegex(r);
    }), oe("ddd", function(r, o) {
      return o.weekdaysShortRegex(r);
    }), oe("dddd", function(r, o) {
      return o.weekdaysRegex(r);
    }), xi(["dd", "ddd", "dddd"], function(r, o, d, h) {
      var w = d._locale.weekdaysParse(r, h, d._strict);
      w != null ? o.d = w : g(d).invalidWeekday = r;
    }), xi(["d", "e", "E"], function(r, o, d, h) {
      o[h] = Ke(r);
    });
    function Eo(r, o) {
      return typeof r != "string" ? r : isNaN(r) ? (r = o.weekdaysParse(r), typeof r == "number" ? r : null) : parseInt(r, 10);
    }
    function To(r, o) {
      return typeof r == "string" ? o.weekdaysParse(r) % 7 || 7 : isNaN(r) ? null : r;
    }
    function Jr(r, o) {
      return r.slice(o, 7).concat(r.slice(0, o));
    }
    var jc = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ao = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Fc = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Oo = De, Uc = De, Bc = De;
    function Wc(r, o) {
      var d = b(this._weekdays) ? this._weekdays : this._weekdays[r && r !== !0 && this._weekdays.isFormat.test(o) ? "format" : "standalone"];
      return r === !0 ? Jr(d, this._week.dow) : r ? d[r.day()] : d;
    }
    function qc(r) {
      return r === !0 ? Jr(this._weekdaysShort, this._week.dow) : r ? this._weekdaysShort[r.day()] : this._weekdaysShort;
    }
    function ls(r) {
      return r === !0 ? Jr(this._weekdaysMin, this._week.dow) : r ? this._weekdaysMin[r.day()] : this._weekdaysMin;
    }
    function $c(r, o, d) {
      var h, w, O, H = r.toLocaleLowerCase();
      if (!this._weekdaysParse)
        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], h = 0; h < 7; ++h)
          O = A([2e3, 1]).day(h), this._minWeekdaysParse[h] = this.weekdaysMin(
            O,
            ""
          ).toLocaleLowerCase(), this._shortWeekdaysParse[h] = this.weekdaysShort(
            O,
            ""
          ).toLocaleLowerCase(), this._weekdaysParse[h] = this.weekdays(O, "").toLocaleLowerCase();
      return d ? o === "dddd" ? (w = Vt.call(this._weekdaysParse, H), w !== -1 ? w : null) : o === "ddd" ? (w = Vt.call(this._shortWeekdaysParse, H), w !== -1 ? w : null) : (w = Vt.call(this._minWeekdaysParse, H), w !== -1 ? w : null) : o === "dddd" ? (w = Vt.call(this._weekdaysParse, H), w !== -1 || (w = Vt.call(this._shortWeekdaysParse, H), w !== -1) ? w : (w = Vt.call(this._minWeekdaysParse, H), w !== -1 ? w : null)) : o === "ddd" ? (w = Vt.call(this._shortWeekdaysParse, H), w !== -1 || (w = Vt.call(this._weekdaysParse, H), w !== -1) ? w : (w = Vt.call(this._minWeekdaysParse, H), w !== -1 ? w : null)) : (w = Vt.call(this._minWeekdaysParse, H), w !== -1 || (w = Vt.call(this._weekdaysParse, H), w !== -1) ? w : (w = Vt.call(this._shortWeekdaysParse, H), w !== -1 ? w : null));
    }
    function Vc(r, o, d) {
      var h, w, O;
      if (this._weekdaysParseExact)
        return $c.call(this, r, o, d);
      for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), h = 0; h < 7; h++) {
        if (w = A([2e3, 1]).day(h), d && !this._fullWeekdaysParse[h] && (this._fullWeekdaysParse[h] = new RegExp(
          "^" + this.weekdays(w, "").replace(".", "\\.?") + "$",
          "i"
        ), this._shortWeekdaysParse[h] = new RegExp(
          "^" + this.weekdaysShort(w, "").replace(".", "\\.?") + "$",
          "i"
        ), this._minWeekdaysParse[h] = new RegExp(
          "^" + this.weekdaysMin(w, "").replace(".", "\\.?") + "$",
          "i"
        )), this._weekdaysParse[h] || (O = "^" + this.weekdays(w, "") + "|^" + this.weekdaysShort(w, "") + "|^" + this.weekdaysMin(w, ""), this._weekdaysParse[h] = new RegExp(O.replace(".", ""), "i")), d && o === "dddd" && this._fullWeekdaysParse[h].test(r))
          return h;
        if (d && o === "ddd" && this._shortWeekdaysParse[h].test(r))
          return h;
        if (d && o === "dd" && this._minWeekdaysParse[h].test(r))
          return h;
        if (!d && this._weekdaysParse[h].test(r))
          return h;
      }
    }
    function zc(r) {
      if (!this.isValid())
        return r != null ? this : NaN;
      var o = Si(this, "Day");
      return r != null ? (r = Eo(r, this.localeData()), this.add(r - o, "d")) : o;
    }
    function Yc(r) {
      if (!this.isValid())
        return r != null ? this : NaN;
      var o = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return r == null ? o : this.add(r - o, "d");
    }
    function Hc(r) {
      if (!this.isValid())
        return r != null ? this : NaN;
      if (r != null) {
        var o = To(r, this.localeData());
        return this.day(this.day() % 7 ? o : o - 7);
      } else
        return this.day() || 7;
    }
    function jt(r) {
      return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || as.call(this), r ? this._weekdaysStrictRegex : this._weekdaysRegex) : (p(this, "_weekdaysRegex") || (this._weekdaysRegex = Oo), this._weekdaysStrictRegex && r ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }
    function Lt(r) {
      return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || as.call(this), r ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (p(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Uc), this._weekdaysShortStrictRegex && r ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }
    function Gc(r) {
      return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || as.call(this), r ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (p(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Bc), this._weekdaysMinStrictRegex && r ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }
    function as() {
      function r(Ci, xl) {
        return xl.length - Ci.length;
      }
      var o = [], d = [], h = [], w = [], O, H, Se, ze, rt;
      for (O = 0; O < 7; O++)
        H = A([2e3, 1]).day(O), Se = Pt(this.weekdaysMin(H, "")), ze = Pt(this.weekdaysShort(H, "")), rt = Pt(this.weekdays(H, "")), o.push(Se), d.push(ze), h.push(rt), w.push(Se), w.push(ze), w.push(rt);
      o.sort(r), d.sort(r), h.sort(r), w.sort(r), this._weekdaysRegex = new RegExp("^(" + w.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
        "^(" + h.join("|") + ")",
        "i"
      ), this._weekdaysShortStrictRegex = new RegExp(
        "^(" + d.join("|") + ")",
        "i"
      ), this._weekdaysMinStrictRegex = new RegExp(
        "^(" + o.join("|") + ")",
        "i"
      );
    }
    function rs() {
      return this.hours() % 12 || 12;
    }
    function Kc() {
      return this.hours() || 24;
    }
    Z("H", ["HH", 2], 0, "hour"), Z("h", ["hh", 2], 0, rs), Z("k", ["kk", 2], 0, Kc), Z("hmm", 0, 0, function() {
      return "" + rs.apply(this) + re(this.minutes(), 2);
    }), Z("hmmss", 0, 0, function() {
      return "" + rs.apply(this) + re(this.minutes(), 2) + re(this.seconds(), 2);
    }), Z("Hmm", 0, 0, function() {
      return "" + this.hours() + re(this.minutes(), 2);
    }), Z("Hmmss", 0, 0, function() {
      return "" + this.hours() + re(this.minutes(), 2) + re(this.seconds(), 2);
    });
    function Mo(r, o) {
      Z(r, 0, 0, function() {
        return this.localeData().meridiem(
          this.hours(),
          this.minutes(),
          o
        );
      });
    }
    Mo("a", !0), Mo("A", !1);
    function Do(r, o) {
      return o._meridiemParse;
    }
    oe("a", Do), oe("A", Do), oe("H", wt, Ie), oe("h", wt, Oe), oe("k", wt, Oe), oe("HH", wt, bi), oe("hh", wt, bi), oe("kk", wt, bi), oe("hmm", Gl), oe("hmmss", Al), oe("Hmm", Gl), oe("Hmmss", Al), ot(["H", "HH"], fe), ot(["k", "kk"], function(r, o, d) {
      var h = Ke(r);
      o[fe] = h === 24 ? 0 : h;
    }), ot(["a", "A"], function(r, o, d) {
      d._isPm = d._locale.isPM(r), d._meridiem = r;
    }), ot(["h", "hh"], function(r, o, d) {
      o[fe] = Ke(r), g(d).bigHour = !0;
    }), ot("hmm", function(r, o, d) {
      var h = r.length - 2;
      o[fe] = Ke(r.substr(0, h)), o[Le] = Ke(r.substr(h)), g(d).bigHour = !0;
    }), ot("hmmss", function(r, o, d) {
      var h = r.length - 4, w = r.length - 2;
      o[fe] = Ke(r.substr(0, h)), o[Le] = Ke(r.substr(h, 2)), o[Xe] = Ke(r.substr(w)), g(d).bigHour = !0;
    }), ot("Hmm", function(r, o, d) {
      var h = r.length - 2;
      o[fe] = Ke(r.substr(0, h)), o[Le] = Ke(r.substr(h));
    }), ot("Hmmss", function(r, o, d) {
      var h = r.length - 4, w = r.length - 2;
      o[fe] = Ke(r.substr(0, h)), o[Le] = Ke(r.substr(h, 2)), o[Xe] = Ke(r.substr(w));
    });
    function Lo(r) {
      return (r + "").toLowerCase().charAt(0) === "p";
    }
    var Qc = /[ap]\.?m?\.?/i, vi = ai("Hours", !0);
    function ns(r, o, d) {
      return r > 11 ? d ? "pm" : "PM" : d ? "am" : "AM";
    }
    var Kl = {
      calendar: Te,
      longDateFormat: Ee,
      invalidDate: Ue,
      ordinal: we,
      dayOfMonthOrdinalParse: ce,
      relativeTime: kt,
      months: fo,
      monthsShort: ts,
      week: Ia,
      weekdays: jc,
      weekdaysMin: Fc,
      weekdaysShort: Ao,
      meridiemParse: Qc
    }, Ft = {}, fa = {}, wi;
    function No(r, o) {
      var d, h = Math.min(r.length, o.length);
      for (d = 0; d < h; d += 1)
        if (r[d] !== o[d])
          return d;
      return h;
    }
    function ss(r) {
      return r && r.toLowerCase().replace("_", "-");
    }
    function Io(r) {
      for (var o = 0, d, h, w, O; o < r.length; ) {
        for (O = ss(r[o]).split("-"), d = O.length, h = ss(r[o + 1]), h = h ? h.split("-") : null; d > 0; ) {
          if (w = br(O.slice(0, d).join("-")), w)
            return w;
          if (h && h.length >= d && No(O, h) >= d - 1)
            break;
          d--;
        }
        o++;
      }
      return wi;
    }
    function Po(r) {
      return !!(r && r.match("^[^/\\\\]*$"));
    }
    function br(r) {
      var o = null, d;
      if (Ft[r] === void 0 && t && t.exports && Po(r))
        try {
          o = wi._abbr, d = oO, d("./locale/" + r), Ml(o);
        } catch {
          Ft[r] = null;
        }
      return Ft[r];
    }
    function Ml(r, o) {
      var d;
      return r && (x(o) ? d = ei(r) : d = ki(r, o), d ? wi = d : typeof console < "u" && console.warn && console.warn(
        "Locale " + r + " not found. Did you forget to load it?"
      )), wi._abbr;
    }
    function ki(r, o) {
      if (o !== null) {
        var d, h = Kl;
        if (o.abbr = r, Ft[r] != null)
          Ye(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          ), h = Ft[r]._config;
        else if (o.parentLocale != null)
          if (Ft[o.parentLocale] != null)
            h = Ft[o.parentLocale]._config;
          else if (d = br(o.parentLocale), d != null)
            h = d._config;
          else
            return fa[o.parentLocale] || (fa[o.parentLocale] = []), fa[o.parentLocale].push({
              name: r,
              config: o
            }), null;
        return Ft[r] = new Ce(bt(h, o)), fa[r] && fa[r].forEach(function(w) {
          ki(w.name, w.config);
        }), Ml(r), Ft[r];
      } else
        return delete Ft[r], null;
    }
    function Zc(r, o) {
      if (o != null) {
        var d, h, w = Kl;
        Ft[r] != null && Ft[r].parentLocale != null ? Ft[r].set(bt(Ft[r]._config, o)) : (h = br(r), h != null && (w = h._config), o = bt(w, o), h == null && (o.abbr = r), d = new Ce(o), d.parentLocale = Ft[r], Ft[r] = d), Ml(r);
      } else
        Ft[r] != null && (Ft[r].parentLocale != null ? (Ft[r] = Ft[r].parentLocale, r === Ml() && Ml(r)) : Ft[r] != null && delete Ft[r]);
      return Ft[r];
    }
    function ei(r) {
      var o;
      if (r && r._locale && r._locale._abbr && (r = r._locale._abbr), !r)
        return wi;
      if (!b(r)) {
        if (o = br(r), o)
          return o;
        r = [r];
      }
      return Io(r);
    }
    function Jc() {
      return Fe(Ft);
    }
    function Xr(r) {
      var o, d = r._a;
      return d && g(r).overflow === -2 && (o = d[T] < 0 || d[T] > 11 ? T : d[ie] < 1 || d[ie] > Kr(d[di], d[T]) ? ie : d[fe] < 0 || d[fe] > 24 || d[fe] === 24 && (d[Le] !== 0 || d[Xe] !== 0 || d[ft] !== 0) ? fe : d[Le] < 0 || d[Le] > 59 ? Le : d[Xe] < 0 || d[Xe] > 59 ? Xe : d[ft] < 0 || d[ft] > 999 ? ft : -1, g(r)._overflowDayOfYear && (o < di || o > ie) && (o = ie), g(r)._overflowWeeks && o === -1 && (o = dt), g(r)._overflowWeekday && o === -1 && (o = lt), g(r).overflow = o), r;
    }
    var Ql = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, en = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, os = /Z|[+-]\d\d(?::?\d\d)?/, Mt = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, !1],
      ["YYYY", /\d{4}/, !1]
    ], vl = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ], us = /^\/?Date\((-?\d+)/i, Xc = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, cs = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };
    function jo(r) {
      var o, d, h = r._i, w = Ql.exec(h) || en.exec(h), O, H, Se, ze, rt = Mt.length, Ci = vl.length;
      if (w) {
        for (g(r).iso = !0, o = 0, d = rt; o < d; o++)
          if (Mt[o][1].exec(w[1])) {
            H = Mt[o][0], O = Mt[o][2] !== !1;
            break;
          }
        if (H == null) {
          r._isValid = !1;
          return;
        }
        if (w[3]) {
          for (o = 0, d = Ci; o < d; o++)
            if (vl[o][1].exec(w[3])) {
              Se = (w[2] || " ") + vl[o][0];
              break;
            }
          if (Se == null) {
            r._isValid = !1;
            return;
          }
        }
        if (!O && Se != null) {
          r._isValid = !1;
          return;
        }
        if (w[4])
          if (os.exec(w[4]))
            ze = "Z";
          else {
            r._isValid = !1;
            return;
          }
        r._f = H + (Se || "") + (ze || ""), fs(r);
      } else
        r._isValid = !1;
    }
    function eb(r, o, d, h, w, O) {
      var H = [
        tb(r),
        ts.indexOf(o),
        parseInt(d, 10),
        parseInt(h, 10),
        parseInt(w, 10)
      ];
      return O && H.push(parseInt(O, 10)), H;
    }
    function tb(r) {
      var o = parseInt(r, 10);
      return o <= 49 ? 2e3 + o : o <= 999 ? 1900 + o : o;
    }
    function Fo(r) {
      return r.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    }
    function tn(r, o, d) {
      if (r) {
        var h = Ao.indexOf(r), w = new Date(
          o[0],
          o[1],
          o[2]
        ).getDay();
        if (h !== w)
          return g(d).weekdayMismatch = !0, d._isValid = !1, !1;
      }
      return !0;
    }
    function Pa(r, o, d) {
      if (r)
        return cs[r];
      if (o)
        return 0;
      var h = parseInt(d, 10), w = h % 100, O = (h - w) / 100;
      return O * 60 + w;
    }
    function Uo(r) {
      var o = Xc.exec(Fo(r._i)), d;
      if (o) {
        if (d = eb(
          o[4],
          o[3],
          o[2],
          o[5],
          o[6],
          o[7]
        ), !tn(o[1], d, r))
          return;
        r._a = d, r._tzm = Pa(o[8], o[9], o[10]), r._d = Da.apply(null, r._a), r._d.setUTCMinutes(r._d.getUTCMinutes() - r._tzm), g(r).rfc2822 = !0;
      } else
        r._isValid = !1;
    }
    function Bo(r) {
      var o = us.exec(r._i);
      if (o !== null) {
        r._d = /* @__PURE__ */ new Date(+o[1]);
        return;
      }
      if (jo(r), r._isValid === !1)
        delete r._isValid;
      else
        return;
      if (Uo(r), r._isValid === !1)
        delete r._isValid;
      else
        return;
      r._strict ? r._isValid = !1 : n.createFromInputFallback(r);
    }
    n.createFromInputFallback = pe(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function(r) {
        r._d = /* @__PURE__ */ new Date(r._i + (r._useUTC ? " UTC" : ""));
      }
    );
    function da(r, o, d) {
      return r ?? o ?? d;
    }
    function bs(r) {
      var o = new Date(n.now());
      return r._useUTC ? [
        o.getUTCFullYear(),
        o.getUTCMonth(),
        o.getUTCDate()
      ] : [o.getFullYear(), o.getMonth(), o.getDate()];
    }
    function fr(r) {
      var o, d, h = [], w, O, H;
      if (!r._d) {
        for (w = bs(r), r._w && r._a[ie] == null && r._a[T] == null && Wo(r), r._dayOfYear != null && (H = da(r._a[di], w[di]), (r._dayOfYear > Qt(H) || r._dayOfYear === 0) && (g(r)._overflowDayOfYear = !0), d = Da(H, 0, r._dayOfYear), r._a[T] = d.getUTCMonth(), r._a[ie] = d.getUTCDate()), o = 0; o < 3 && r._a[o] == null; ++o)
          r._a[o] = h[o] = w[o];
        for (; o < 7; o++)
          r._a[o] = h[o] = r._a[o] == null ? o === 2 ? 1 : 0 : r._a[o];
        r._a[fe] === 24 && r._a[Le] === 0 && r._a[Xe] === 0 && r._a[ft] === 0 && (r._nextDay = !0, r._a[fe] = 0), r._d = (r._useUTC ? Da : xo).apply(
          null,
          h
        ), O = r._useUTC ? r._d.getUTCDay() : r._d.getDay(), r._tzm != null && r._d.setUTCMinutes(r._d.getUTCMinutes() - r._tzm), r._nextDay && (r._a[fe] = 24), r._w && typeof r._w.d < "u" && r._w.d !== O && (g(r).weekdayMismatch = !0);
      }
    }
    function Wo(r) {
      var o, d, h, w, O, H, Se, ze, rt;
      o = r._w, o.GG != null || o.W != null || o.E != null ? (O = 1, H = 4, d = da(
        o.GG,
        r._a[di],
        Na(Nt(), 1, 4).year
      ), h = da(o.W, 1), w = da(o.E, 1), (w < 1 || w > 7) && (ze = !0)) : (O = r._locale._week.dow, H = r._locale._week.doy, rt = Na(Nt(), O, H), d = da(o.gg, r._a[di], rt.year), h = da(o.w, rt.week), o.d != null ? (w = o.d, (w < 0 || w > 6) && (ze = !0)) : o.e != null ? (w = o.e + O, (o.e < 0 || o.e > 6) && (ze = !0)) : w = O), h < 1 || h > rl(d, O, H) ? g(r)._overflowWeeks = !0 : ze != null ? g(r)._overflowWeekday = !0 : (Se = So(d, h, w, O, H), r._a[di] = Se.year, r._dayOfYear = Se.dayOfYear);
    }
    n.ISO_8601 = function() {
    }, n.RFC_2822 = function() {
    };
    function fs(r) {
      if (r._f === n.ISO_8601) {
        jo(r);
        return;
      }
      if (r._f === n.RFC_2822) {
        Uo(r);
        return;
      }
      r._a = [], g(r).empty = !0;
      var o = "" + r._i, d, h, w, O, H, Se = o.length, ze = 0, rt, Ci;
      for (w = ee(r._f, r._locale).match(ve) || [], Ci = w.length, d = 0; d < Ci; d++)
        O = w[d], h = (o.match(fi(O, r)) || [])[0], h && (H = o.substr(0, o.indexOf(h)), H.length > 0 && g(r).unusedInput.push(H), o = o.slice(
          o.indexOf(h) + h.length
        ), ze += h.length), J[O] ? (h ? g(r).empty = !1 : g(r).unusedTokens.push(O), Xn(O, h, r)) : r._strict && !h && g(r).unusedTokens.push(O);
      g(r).charsLeftOver = Se - ze, o.length > 0 && g(r).unusedInput.push(o), r._a[fe] <= 12 && g(r).bigHour === !0 && r._a[fe] > 0 && (g(r).bigHour = void 0), g(r).parsedDateParts = r._a.slice(0), g(r).meridiem = r._meridiem, r._a[fe] = ds(
        r._locale,
        r._a[fe],
        r._meridiem
      ), rt = g(r).era, rt !== null && (r._a[di] = r._locale.erasConvertYear(rt, r._a[di])), fr(r), Xr(r);
    }
    function ds(r, o, d) {
      var h;
      return d == null ? o : r.meridiemHour != null ? r.meridiemHour(o, d) : (r.isPM != null && (h = r.isPM(d), h && o < 12 && (o += 12), !h && o === 12 && (o = 0)), o);
    }
    function hs(r) {
      var o, d, h, w, O, H, Se = !1, ze = r._f.length;
      if (ze === 0) {
        g(r).invalidFormat = !0, r._d = /* @__PURE__ */ new Date(NaN);
        return;
      }
      for (w = 0; w < ze; w++)
        O = 0, H = !1, o = se({}, r), r._useUTC != null && (o._useUTC = r._useUTC), o._f = r._f[w], fs(o), q(o) && (H = !0), O += g(o).charsLeftOver, O += g(o).unusedTokens.length * 10, g(o).score = O, Se ? O < h && (h = O, d = o) : (h == null || O < h || H) && (h = O, d = o, H && (Se = !0));
      N(r, d || o);
    }
    function ib(r) {
      if (!r._d) {
        var o = Ai(r._i), d = o.day === void 0 ? o.date : o.day;
        r._a = M(
          [o.year, o.month, d, o.hour, o.minute, o.second, o.millisecond],
          function(h) {
            return h && parseInt(h, 10);
          }
        ), fr(r);
      }
    }
    function qo(r) {
      var o = new $(Xr(Oi(r)));
      return o._nextDay && (o.add(1, "d"), o._nextDay = void 0), o;
    }
    function Oi(r) {
      var o = r._i, d = r._f;
      return r._locale = r._locale || ei(r._l), o === null || d === void 0 && o === "" ? F({ nullInput: !0 }) : (typeof o == "string" && (r._i = o = r._locale.preparse(o)), K(o) ? new $(Xr(o)) : (C(o) ? r._d = o : b(d) ? hs(r) : d ? fs(r) : ps(r), q(r) || (r._d = null), r));
    }
    function ps(r) {
      var o = r._i;
      x(o) ? r._d = new Date(n.now()) : C(o) ? r._d = new Date(o.valueOf()) : typeof o == "string" ? Bo(r) : b(o) ? (r._a = M(o.slice(0), function(d) {
        return parseInt(d, 10);
      }), fr(r)) : c(o) ? ib(r) : S(o) ? r._d = new Date(o) : n.createFromInputFallback(r);
    }
    function ja(r, o, d, h, w) {
      var O = {};
      return (o === !0 || o === !1) && (h = o, o = void 0), (d === !0 || d === !1) && (h = d, d = void 0), (c(r) && y(r) || b(r) && r.length === 0) && (r = void 0), O._isAMomentObject = !0, O._useUTC = O._isUTC = w, O._l = d, O._i = r, O._f = o, O._strict = h, qo(O);
    }
    function Nt(r, o, d, h) {
      return ja(r, o, d, h, !1);
    }
    var $o = pe(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var r = Nt.apply(null, arguments);
        return this.isValid() && r.isValid() ? r < this ? this : r : F();
      }
    ), lb = pe(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var r = Nt.apply(null, arguments);
        return this.isValid() && r.isValid() ? r > this ? this : r : F();
      }
    );
    function Vo(r, o) {
      var d, h;
      if (o.length === 1 && b(o[0]) && (o = o[0]), !o.length)
        return Nt();
      for (d = o[0], h = 1; h < o.length; ++h)
        (!o[h].isValid() || o[h][r](d)) && (d = o[h]);
      return d;
    }
    function ab() {
      var r = [].slice.call(arguments, 0);
      return Vo("isBefore", r);
    }
    function rb() {
      var r = [].slice.call(arguments, 0);
      return Vo("isAfter", r);
    }
    var nb = function() {
      return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
    }, gl = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond"
    ];
    function sb(r) {
      var o, d = !1, h, w = gl.length;
      for (o in r)
        if (p(r, o) && !(Vt.call(gl, o) !== -1 && (r[o] == null || !isNaN(r[o]))))
          return !1;
      for (h = 0; h < w; ++h)
        if (r[gl[h]]) {
          if (d)
            return !1;
          parseFloat(r[gl[h]]) !== Ke(r[gl[h]]) && (d = !0);
        }
      return !0;
    }
    function ob() {
      return this._isValid;
    }
    function vs() {
      return ut(NaN);
    }
    function dr(r) {
      var o = Ai(r), d = o.year || 0, h = o.quarter || 0, w = o.month || 0, O = o.week || o.isoWeek || 0, H = o.day || 0, Se = o.hour || 0, ze = o.minute || 0, rt = o.second || 0, Ci = o.millisecond || 0;
      this._isValid = sb(o), this._milliseconds = +Ci + rt * 1e3 + // 1000
      ze * 6e4 + // 1000 * 60
      Se * 1e3 * 60 * 60, this._days = +H + O * 7, this._months = +w + h * 3 + d * 12, this._data = {}, this._locale = ei(), this._bubble();
    }
    function nl(r) {
      return r instanceof dr;
    }
    function Fa(r) {
      return r < 0 ? Math.round(-1 * r) * -1 : Math.round(r);
    }
    function ub(r, o, d) {
      var h = Math.min(r.length, o.length), w = Math.abs(r.length - o.length), O = 0, H;
      for (H = 0; H < h; H++)
        Ke(r[H]) !== Ke(o[H]) && O++;
      return O + w;
    }
    function zo(r, o) {
      Z(r, 0, 0, function() {
        var d = this.utcOffset(), h = "+";
        return d < 0 && (d = -d, h = "-"), h + re(~~(d / 60), 2) + o + re(~~d % 60, 2);
      });
    }
    zo("Z", ":"), zo("ZZ", ""), oe("Z", he), oe("ZZ", he), ot(["Z", "ZZ"], function(r, o, d) {
      d._useUTC = !0, d._tzm = Zl(he, r);
    });
    var cb = /([\+\-]|\d\d)/gi;
    function Zl(r, o) {
      var d = (o || "").match(r), h, w, O;
      return d === null ? null : (h = d[d.length - 1] || [], w = (h + "").match(cb) || ["-", 0, 0], O = +(w[1] * 60) + Ke(w[2]), O === 0 ? 0 : w[0] === "+" ? O : -O);
    }
    function ji(r, o) {
      var d, h;
      return o._isUTC ? (d = o.clone(), h = (K(r) || C(r) ? r.valueOf() : Nt(r).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + h), n.updateOffset(d, !1), d) : Nt(r).local();
    }
    function ln(r) {
      return -Math.round(r._d.getTimezoneOffset());
    }
    n.updateOffset = function() {
    };
    function bb(r, o, d) {
      var h = this._offset || 0, w;
      if (!this.isValid())
        return r != null ? this : NaN;
      if (r != null) {
        if (typeof r == "string") {
          if (r = Zl(he, r), r === null)
            return this;
        } else Math.abs(r) < 16 && !d && (r = r * 60);
        return !this._isUTC && o && (w = ln(this)), this._offset = r, this._isUTC = !0, w != null && this.add(w, "m"), h !== r && (!o || this._changeInProgress ? Ho(
          this,
          ut(r - h, "m"),
          1,
          !1
        ) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this;
      } else
        return this._isUTC ? h : ln(this);
    }
    function fb(r, o) {
      return r != null ? (typeof r != "string" && (r = -r), this.utcOffset(r, o), this) : -this.utcOffset();
    }
    function db(r) {
      return this.utcOffset(0, r);
    }
    function hb(r) {
      return this._isUTC && (this.utcOffset(0, r), this._isUTC = !1, r && this.subtract(ln(this), "m")), this;
    }
    function pb() {
      if (this._tzm != null)
        this.utcOffset(this._tzm, !1, !0);
      else if (typeof this._i == "string") {
        var r = Zl(ge, this._i);
        r != null ? this.utcOffset(r) : this.utcOffset(0, !0);
      }
      return this;
    }
    function Ua(r) {
      return this.isValid() ? (r = r ? Nt(r).utcOffset() : 0, (this.utcOffset() - r) % 60 === 0) : !1;
    }
    function j() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function Q() {
      if (!x(this._isDSTShifted))
        return this._isDSTShifted;
      var r = {}, o;
      return se(r, this), r = Oi(r), r._a ? (o = r._isUTC ? A(r._a) : Nt(r._a), this._isDSTShifted = this.isValid() && ub(r._a, o.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
    }
    function V() {
      return this.isValid() ? !this._isUTC : !1;
    }
    function ke() {
      return this.isValid() ? this._isUTC : !1;
    }
    function Qe() {
      return this.isValid() ? this._isUTC && this._offset === 0 : !1;
    }
    var xt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ni = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function ut(r, o) {
      var d = r, h = null, w, O, H;
      return nl(r) ? d = {
        ms: r._milliseconds,
        d: r._days,
        M: r._months
      } : S(r) || !isNaN(+r) ? (d = {}, o ? d[o] = +r : d.milliseconds = +r) : (h = xt.exec(r)) ? (w = h[1] === "-" ? -1 : 1, d = {
        y: 0,
        d: Ke(h[ie]) * w,
        h: Ke(h[fe]) * w,
        m: Ke(h[Le]) * w,
        s: Ke(h[Xe]) * w,
        ms: Ke(Fa(h[ft] * 1e3)) * w
        // the millisecond decimal point is included in the match
      }) : (h = ni.exec(r)) ? (w = h[1] === "-" ? -1 : 1, d = {
        y: Dl(h[2], w),
        M: Dl(h[3], w),
        w: Dl(h[4], w),
        d: Dl(h[5], w),
        h: Dl(h[6], w),
        m: Dl(h[7], w),
        s: Dl(h[8], w)
      }) : d == null ? d = {} : typeof d == "object" && ("from" in d || "to" in d) && (H = zi(
        Nt(d.from),
        Nt(d.to)
      ), d = {}, d.ms = H.milliseconds, d.M = H.months), O = new dr(d), nl(r) && p(r, "_locale") && (O._locale = r._locale), nl(r) && p(r, "_isValid") && (O._isValid = r._isValid), O;
    }
    ut.fn = dr.prototype, ut.invalid = vs;
    function Dl(r, o) {
      var d = r && parseFloat(r.replace(",", "."));
      return (isNaN(d) ? 0 : d) * o;
    }
    function Yo(r, o) {
      var d = {};
      return d.months = o.month() - r.month() + (o.year() - r.year()) * 12, r.clone().add(d.months, "M").isAfter(o) && --d.months, d.milliseconds = +o - +r.clone().add(d.months, "M"), d;
    }
    function zi(r, o) {
      var d;
      return r.isValid() && o.isValid() ? (o = ji(o, r), r.isBefore(o) ? d = Yo(r, o) : (d = Yo(o, r), d.milliseconds = -d.milliseconds, d.months = -d.months), d) : { milliseconds: 0, months: 0 };
    }
    function hr(r, o) {
      return function(d, h) {
        var w, O;
        return h !== null && !isNaN(+h) && (Ye(
          o,
          "moment()." + o + "(period, number) is deprecated. Please use moment()." + o + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        ), O = d, d = h, h = O), w = ut(d, h), Ho(this, w, r), this;
      };
    }
    function Ho(r, o, d, h) {
      var w = o._milliseconds, O = Fa(o._days), H = Fa(o._months);
      r.isValid() && (h = h ?? !0, H && Qr(r, Si(r, "Month") + H * d), O && pl(r, "Date", Si(r, "Date") + O * d), w && r._d.setTime(r._d.valueOf() + w * d), h && n.updateOffset(r, O || H));
    }
    var Ba = hr(1, "add"), an = hr(-1, "subtract");
    function pr(r) {
      return typeof r == "string" || r instanceof String;
    }
    function Ct(r) {
      return K(r) || C(r) || pr(r) || S(r) || Go(r) || vb(r) || r === null || r === void 0;
    }
    function vb(r) {
      var o = c(r) && !y(r), d = !1, h = [
        "years",
        "year",
        "y",
        "months",
        "month",
        "M",
        "days",
        "day",
        "d",
        "dates",
        "date",
        "D",
        "hours",
        "hour",
        "h",
        "minutes",
        "minute",
        "m",
        "seconds",
        "second",
        "s",
        "milliseconds",
        "millisecond",
        "ms"
      ], w, O, H = h.length;
      for (w = 0; w < H; w += 1)
        O = h[w], d = d || p(r, O);
      return o && d;
    }
    function Go(r) {
      var o = b(r), d = !1;
      return o && (d = r.filter(function(h) {
        return !S(h) && pr(r);
      }).length === 0), o && d;
    }
    function rn(r) {
      var o = c(r) && !y(r), d = !1, h = [
        "sameDay",
        "nextDay",
        "lastDay",
        "nextWeek",
        "lastWeek",
        "sameElse"
      ], w, O;
      for (w = 0; w < h.length; w += 1)
        O = h[w], d = d || p(r, O);
      return o && d;
    }
    function gb(r, o) {
      var d = r.diff(o, "days", !0);
      return d < -6 ? "sameElse" : d < -1 ? "lastWeek" : d < 0 ? "lastDay" : d < 1 ? "sameDay" : d < 2 ? "nextDay" : d < 7 ? "nextWeek" : "sameElse";
    }
    function mb(r, o) {
      arguments.length === 1 && (arguments[0] ? Ct(arguments[0]) ? (r = arguments[0], o = void 0) : rn(arguments[0]) && (o = arguments[0], r = void 0) : (r = void 0, o = void 0));
      var d = r || Nt(), h = ji(d, this).startOf("day"), w = n.calendarFormat(this, h) || "sameElse", O = o && (Ae(o[w]) ? o[w].call(this, d) : o[w]);
      return this.format(
        O || this.localeData().calendar(w, this, Nt(d))
      );
    }
    function yb() {
      return new $(this);
    }
    function nn(r, o) {
      var d = K(r) ? r : Nt(r);
      return this.isValid() && d.isValid() ? (o = Ot(o) || "millisecond", o === "millisecond" ? this.valueOf() > d.valueOf() : d.valueOf() < this.clone().startOf(o).valueOf()) : !1;
    }
    function Jl(r, o) {
      var d = K(r) ? r : Nt(r);
      return this.isValid() && d.isValid() ? (o = Ot(o) || "millisecond", o === "millisecond" ? this.valueOf() < d.valueOf() : this.clone().endOf(o).valueOf() < d.valueOf()) : !1;
    }
    function sn(r, o, d, h) {
      var w = K(r) ? r : Nt(r), O = K(o) ? o : Nt(o);
      return this.isValid() && w.isValid() && O.isValid() ? (h = h || "()", (h[0] === "(" ? this.isAfter(w, d) : !this.isBefore(w, d)) && (h[1] === ")" ? this.isBefore(O, d) : !this.isAfter(O, d))) : !1;
    }
    function Ko(r, o) {
      var d = K(r) ? r : Nt(r), h;
      return this.isValid() && d.isValid() ? (o = Ot(o) || "millisecond", o === "millisecond" ? this.valueOf() === d.valueOf() : (h = d.valueOf(), this.clone().startOf(o).valueOf() <= h && h <= this.clone().endOf(o).valueOf())) : !1;
    }
    function on(r, o) {
      return this.isSame(r, o) || this.isAfter(r, o);
    }
    function Qo(r, o) {
      return this.isSame(r, o) || this.isBefore(r, o);
    }
    function Zo(r, o, d) {
      var h, w, O;
      if (!this.isValid())
        return NaN;
      if (h = ji(r, this), !h.isValid())
        return NaN;
      switch (w = (h.utcOffset() - this.utcOffset()) * 6e4, o = Ot(o), o) {
        case "year":
          O = ha(this, h) / 12;
          break;
        case "month":
          O = ha(this, h);
          break;
        case "quarter":
          O = ha(this, h) / 3;
          break;
        case "second":
          O = (this - h) / 1e3;
          break;
        case "minute":
          O = (this - h) / 6e4;
          break;
        case "hour":
          O = (this - h) / 36e5;
          break;
        case "day":
          O = (this - h - w) / 864e5;
          break;
        case "week":
          O = (this - h - w) / 6048e5;
          break;
        default:
          O = this - h;
      }
      return d ? O : Dt(O);
    }
    function ha(r, o) {
      if (r.date() < o.date())
        return -ha(o, r);
      var d = (o.year() - r.year()) * 12 + (o.month() - r.month()), h = r.clone().add(d, "months"), w, O;
      return o - h < 0 ? (w = r.clone().add(d - 1, "months"), O = (o - h) / (h - w)) : (w = r.clone().add(d + 1, "months"), O = (o - h) / (w - h)), -(d + O) || 0;
    }
    n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    function Jo() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function vr(r) {
      if (!this.isValid())
        return null;
      var o = r !== !0, d = o ? this.clone().utc() : this;
      return d.year() < 0 || d.year() > 9999 ? me(
        d,
        o ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
      ) : Ae(Date.prototype.toISOString) ? o ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", me(d, "Z")) : me(
        d,
        o ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    function pa() {
      if (!this.isValid())
        return "moment.invalid(/* " + this._i + " */)";
      var r = "moment", o = "", d, h, w, O;
      return this.isLocal() || (r = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", o = "Z"), d = "[" + r + '("]', h = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", w = "-MM-DD[T]HH:mm:ss.SSS", O = o + '[")]', this.format(d + h + w + O);
    }
    function un(r) {
      r || (r = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
      var o = me(this, r);
      return this.localeData().postformat(o);
    }
    function wb(r, o) {
      return this.isValid() && (K(r) && r.isValid() || Nt(r).isValid()) ? ut({ to: this, from: r }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
    }
    function _b(r) {
      return this.from(Nt(), r);
    }
    function xb(r, o) {
      return this.isValid() && (K(r) && r.isValid() || Nt(r).isValid()) ? ut({ from: this, to: r }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
    }
    function cn(r) {
      return this.to(Nt(), r);
    }
    function gr(r) {
      var o;
      return r === void 0 ? this._locale._abbr : (o = ei(r), o != null && (this._locale = o), this);
    }
    var bn = pe(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function(r) {
        return r === void 0 ? this.localeData() : this.locale(r);
      }
    );
    function Xo() {
      return this._locale;
    }
    var mr = 1e3, Wa = 60 * mr, fn = 60 * Wa, ti = (365 * 400 + 97) * 24 * fn;
    function Zt(r, o) {
      return (r % o + o) % o;
    }
    function eu(r, o, d) {
      return r < 100 && r >= 0 ? new Date(r + 400, o, d) - ti : new Date(r, o, d).valueOf();
    }
    function tu(r, o, d) {
      return r < 100 && r >= 0 ? Date.UTC(r + 400, o, d) - ti : Date.UTC(r, o, d);
    }
    function iu(r) {
      var o, d;
      if (r = Ot(r), r === void 0 || r === "millisecond" || !this.isValid())
        return this;
      switch (d = this._isUTC ? tu : eu, r) {
        case "year":
          o = d(this.year(), 0, 1);
          break;
        case "quarter":
          o = d(
            this.year(),
            this.month() - this.month() % 3,
            1
          );
          break;
        case "month":
          o = d(this.year(), this.month(), 1);
          break;
        case "week":
          o = d(
            this.year(),
            this.month(),
            this.date() - this.weekday()
          );
          break;
        case "isoWeek":
          o = d(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          o = d(this.year(), this.month(), this.date());
          break;
        case "hour":
          o = this._d.valueOf(), o -= Zt(
            o + (this._isUTC ? 0 : this.utcOffset() * Wa),
            fn
          );
          break;
        case "minute":
          o = this._d.valueOf(), o -= Zt(o, Wa);
          break;
        case "second":
          o = this._d.valueOf(), o -= Zt(o, mr);
          break;
      }
      return this._d.setTime(o), n.updateOffset(this, !0), this;
    }
    function Sb(r) {
      var o, d;
      if (r = Ot(r), r === void 0 || r === "millisecond" || !this.isValid())
        return this;
      switch (d = this._isUTC ? tu : eu, r) {
        case "year":
          o = d(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          o = d(
            this.year(),
            this.month() - this.month() % 3 + 3,
            1
          ) - 1;
          break;
        case "month":
          o = d(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          o = d(
            this.year(),
            this.month(),
            this.date() - this.weekday() + 7
          ) - 1;
          break;
        case "isoWeek":
          o = d(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
          break;
        case "day":
        case "date":
          o = d(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          o = this._d.valueOf(), o += fn - Zt(
            o + (this._isUTC ? 0 : this.utcOffset() * Wa),
            fn
          ) - 1;
          break;
        case "minute":
          o = this._d.valueOf(), o += Wa - Zt(o, Wa) - 1;
          break;
        case "second":
          o = this._d.valueOf(), o += mr - Zt(o, mr) - 1;
          break;
      }
      return this._d.setTime(o), n.updateOffset(this, !0), this;
    }
    function gs() {
      return this._d.valueOf() - (this._offset || 0) * 6e4;
    }
    function yr() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function ms() {
      return new Date(this.valueOf());
    }
    function qa() {
      var r = this;
      return [
        r.year(),
        r.month(),
        r.date(),
        r.hour(),
        r.minute(),
        r.second(),
        r.millisecond()
      ];
    }
    function wr() {
      var r = this;
      return {
        years: r.year(),
        months: r.month(),
        date: r.date(),
        hours: r.hours(),
        minutes: r.minutes(),
        seconds: r.seconds(),
        milliseconds: r.milliseconds()
      };
    }
    function _r() {
      return this.isValid() ? this.toISOString() : null;
    }
    function dn() {
      return q(this);
    }
    function $a() {
      return N({}, g(this));
    }
    function kb() {
      return g(this).overflow;
    }
    function Rb() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    }
    Z("N", 0, 0, "eraAbbr"), Z("NN", 0, 0, "eraAbbr"), Z("NNN", 0, 0, "eraAbbr"), Z("NNNN", 0, 0, "eraName"), Z("NNNNN", 0, 0, "eraNarrow"), Z("y", ["y", 1], "yo", "eraYear"), Z("y", ["yy", 2], 0, "eraYear"), Z("y", ["yyy", 3], 0, "eraYear"), Z("y", ["yyyy", 4], 0, "eraYear"), oe("N", at), oe("NN", at), oe("NNN", at), oe("NNNN", Ab), oe("NNNNN", Ob), ot(
      ["N", "NN", "NNN", "NNNN", "NNNNN"],
      function(r, o, d, h) {
        var w = d._locale.erasParse(r, h, d._strict);
        w ? g(d).era = w : g(d).invalidEra = r;
      }
    ), oe("y", P), oe("yy", P), oe("yyy", P), oe("yyyy", P), oe("yo", Mb), ot(["y", "yy", "yyy", "yyyy"], di), ot(["yo"], function(r, o, d, h) {
      var w;
      d._locale._eraYearOrdinalRegex && (w = r.match(d._locale._eraYearOrdinalRegex)), d._locale.eraYearOrdinalParse ? o[di] = d._locale.eraYearOrdinalParse(r, w) : o[di] = parseInt(r, 10);
    });
    function Cb(r, o) {
      var d, h, w, O = this._eras || ei("en")._eras;
      for (d = 0, h = O.length; d < h; ++d) {
        switch (typeof O[d].since) {
          case "string":
            w = n(O[d].since).startOf("day"), O[d].since = w.valueOf();
            break;
        }
        switch (typeof O[d].until) {
          case "undefined":
            O[d].until = 1 / 0;
            break;
          case "string":
            w = n(O[d].until).startOf("day").valueOf(), O[d].until = w.valueOf();
            break;
        }
      }
      return O;
    }
    function Eb(r, o, d) {
      var h, w, O = this.eras(), H, Se, ze;
      for (r = r.toUpperCase(), h = 0, w = O.length; h < w; ++h)
        if (H = O[h].name.toUpperCase(), Se = O[h].abbr.toUpperCase(), ze = O[h].narrow.toUpperCase(), d)
          switch (o) {
            case "N":
            case "NN":
            case "NNN":
              if (Se === r)
                return O[h];
              break;
            case "NNNN":
              if (H === r)
                return O[h];
              break;
            case "NNNNN":
              if (ze === r)
                return O[h];
              break;
          }
        else if ([H, Se, ze].indexOf(r) >= 0)
          return O[h];
    }
    function Tb(r, o) {
      var d = r.since <= r.until ? 1 : -1;
      return o === void 0 ? n(r.since).year() : n(r.since).year() + (o - r.offset) * d;
    }
    function hn() {
      var r, o, d, h = this.localeData().eras();
      for (r = 0, o = h.length; r < o; ++r)
        if (d = this.clone().startOf("day").valueOf(), h[r].since <= d && d <= h[r].until || h[r].until <= d && d <= h[r].since)
          return h[r].name;
      return "";
    }
    function xr() {
      var r, o, d, h = this.localeData().eras();
      for (r = 0, o = h.length; r < o; ++r)
        if (d = this.clone().startOf("day").valueOf(), h[r].since <= d && d <= h[r].until || h[r].until <= d && d <= h[r].since)
          return h[r].narrow;
      return "";
    }
    function lu() {
      var r, o, d, h = this.localeData().eras();
      for (r = 0, o = h.length; r < o; ++r)
        if (d = this.clone().startOf("day").valueOf(), h[r].since <= d && d <= h[r].until || h[r].until <= d && d <= h[r].since)
          return h[r].abbr;
      return "";
    }
    function _() {
      var r, o, d, h, w = this.localeData().eras();
      for (r = 0, o = w.length; r < o; ++r)
        if (d = w[r].since <= w[r].until ? 1 : -1, h = this.clone().startOf("day").valueOf(), w[r].since <= h && h <= w[r].until || w[r].until <= h && h <= w[r].since)
          return (this.year() - n(w[r].since).year()) * d + w[r].offset;
      return this.year();
    }
    function Va(r) {
      return p(this, "_erasNameRegex") || Ll.call(this), r ? this._erasNameRegex : this._erasRegex;
    }
    function pn(r) {
      return p(this, "_erasAbbrRegex") || Ll.call(this), r ? this._erasAbbrRegex : this._erasRegex;
    }
    function Yi(r) {
      return p(this, "_erasNarrowRegex") || Ll.call(this), r ? this._erasNarrowRegex : this._erasRegex;
    }
    function at(r, o) {
      return o.erasAbbrRegex(r);
    }
    function Ab(r, o) {
      return o.erasNameRegex(r);
    }
    function Ob(r, o) {
      return o.erasNarrowRegex(r);
    }
    function Mb(r, o) {
      return o._eraYearOrdinalRegex || P;
    }
    function Ll() {
      var r = [], o = [], d = [], h = [], w, O, H, Se, ze, rt = this.eras();
      for (w = 0, O = rt.length; w < O; ++w)
        H = Pt(rt[w].name), Se = Pt(rt[w].abbr), ze = Pt(rt[w].narrow), o.push(H), r.push(Se), d.push(ze), h.push(H), h.push(Se), h.push(ze);
      this._erasRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
        "^(" + d.join("|") + ")",
        "i"
      );
    }
    Z(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100;
    }), Z(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100;
    });
    function vn(r, o) {
      Z(0, [r, r.length], 0, o);
    }
    vn("gggg", "weekYear"), vn("ggggg", "weekYear"), vn("GGGG", "isoWeekYear"), vn("GGGGG", "isoWeekYear"), oe("G", le), oe("g", le), oe("GG", wt, bi), oe("gg", wt, bi), oe("GGGG", Ol, Vi), oe("gggg", Ol, Vi), oe("GGGGG", W, al), oe("ggggg", W, al), xi(
      ["gggg", "ggggg", "GGGG", "GGGGG"],
      function(r, o, d, h) {
        o[h.substr(0, 2)] = Ke(r);
      }
    ), xi(["gg", "GG"], function(r, o, d, h) {
      o[h] = n.parseTwoDigitYear(r);
    });
    function Db(r) {
      return au.call(
        this,
        r,
        this.week(),
        this.weekday() + this.localeData()._week.dow,
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function Lb(r) {
      return au.call(
        this,
        r,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
      );
    }
    function Nb() {
      return rl(this.year(), 1, 4);
    }
    function Ib() {
      return rl(this.isoWeekYear(), 1, 4);
    }
    function Nl() {
      var r = this.localeData()._week;
      return rl(this.year(), r.dow, r.doy);
    }
    function Pb() {
      var r = this.localeData()._week;
      return rl(this.weekYear(), r.dow, r.doy);
    }
    function au(r, o, d, h, w) {
      var O;
      return r == null ? Na(this, h, w).year : (O = rl(r, h, w), o > O && (o = O), jb.call(this, r, o, d, h, w));
    }
    function jb(r, o, d, h, w) {
      var O = So(r, o, d, h, w), H = Da(O.year, 0, O.dayOfYear);
      return this.year(H.getUTCFullYear()), this.month(H.getUTCMonth()), this.date(H.getUTCDate()), this;
    }
    Z("Q", 0, "Qo", "quarter"), oe("Q", Ii), ot("Q", function(r, o) {
      o[T] = (Ke(r) - 1) * 3;
    });
    function Fb(r) {
      return r == null ? Math.ceil((this.month() + 1) / 3) : this.month((r - 1) * 3 + this.month() % 3);
    }
    Z("D", ["DD", 2], "Do", "date"), oe("D", wt, Oe), oe("DD", wt, bi), oe("Do", function(r, o) {
      return r ? o._dayOfMonthOrdinalParse || o._ordinalParse : o._dayOfMonthOrdinalParseLenient;
    }), ot(["D", "DD"], ie), ot("Do", function(r, o) {
      o[ie] = Ke(r.match(wt)[0]);
    });
    var ru = ai("Date", !0);
    Z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), oe("DDD", hl), oe("DDDD", ll), ot(["DDD", "DDDD"], function(r, o, d) {
      d._dayOfYear = Ke(r);
    });
    function Il(r) {
      var o = Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
      return r == null ? o : this.add(r - o, "d");
    }
    Z("m", ["mm", 2], 0, "minute"), oe("m", wt, Ie), oe("mm", wt, bi), ot(["m", "mm"], Le);
    var Ub = ai("Minutes", !1);
    Z("s", ["ss", 2], 0, "second"), oe("s", wt, Ie), oe("ss", wt, bi), ot(["s", "ss"], Xe);
    var Bb = ai("Seconds", !1);
    Z("S", 0, 0, function() {
      return ~~(this.millisecond() / 100);
    }), Z(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10);
    }), Z(0, ["SSS", 3], 0, "millisecond"), Z(0, ["SSSS", 4], 0, function() {
      return this.millisecond() * 10;
    }), Z(0, ["SSSSS", 5], 0, function() {
      return this.millisecond() * 100;
    }), Z(0, ["SSSSSS", 6], 0, function() {
      return this.millisecond() * 1e3;
    }), Z(0, ["SSSSSSS", 7], 0, function() {
      return this.millisecond() * 1e4;
    }), Z(0, ["SSSSSSSS", 8], 0, function() {
      return this.millisecond() * 1e5;
    }), Z(0, ["SSSSSSSSS", 9], 0, function() {
      return this.millisecond() * 1e6;
    }), oe("S", hl, Ii), oe("SS", hl, bi), oe("SSS", hl, ll);
    var Xl, nu;
    for (Xl = "SSSS"; Xl.length <= 9; Xl += "S")
      oe(Xl, P);
    function Wb(r, o) {
      o[ft] = Ke(("0." + r) * 1e3);
    }
    for (Xl = "S"; Xl.length <= 9; Xl += "S")
      ot(Xl, Wb);
    nu = ai("Milliseconds", !1), Z("z", 0, 0, "zoneAbbr"), Z("zz", 0, 0, "zoneName");
    function va() {
      return this._isUTC ? "UTC" : "";
    }
    function qb() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    var be = $.prototype;
    be.add = Ba, be.calendar = mb, be.clone = yb, be.diff = Zo, be.endOf = Sb, be.format = un, be.from = wb, be.fromNow = _b, be.to = xb, be.toNow = cn, be.get = ri, be.invalidAt = kb, be.isAfter = nn, be.isBefore = Jl, be.isBetween = sn, be.isSame = Ko, be.isSameOrAfter = on, be.isSameOrBefore = Qo, be.isValid = dn, be.lang = bn, be.locale = gr, be.localeData = Xo, be.max = lb, be.min = $o, be.parsingFlags = $a, be.set = cr, be.startOf = iu, be.subtract = an, be.toArray = qa, be.toObject = wr, be.toDate = ms, be.toISOString = vr, be.inspect = pa, typeof Symbol < "u" && Symbol.for != null && (be[Symbol.for("nodejs.util.inspect.custom")] = function() {
      return "Moment<" + this.format() + ">";
    }), be.toJSON = _r, be.toString = Jo, be.unix = yr, be.valueOf = gs, be.creationData = Rb, be.eraName = hn, be.eraNarrow = xr, be.eraAbbr = lu, be.eraYear = _, be.year = qt, be.isLeapYear = Yt, be.weekYear = Db, be.isoWeekYear = Lb, be.quarter = be.quarters = Fb, be.month = mo, be.daysInMonth = yo, be.week = be.weeks = Pc, be.isoWeek = be.isoWeeks = Co, be.weeksInYear = Nl, be.weeksInWeekYear = Pb, be.isoWeeksInYear = Nb, be.isoWeeksInISOWeekYear = Ib, be.date = ru, be.day = be.days = zc, be.weekday = Yc, be.isoWeekday = Hc, be.dayOfYear = Il, be.hour = be.hours = vi, be.minute = be.minutes = Ub, be.second = be.seconds = Bb, be.millisecond = be.milliseconds = nu, be.utcOffset = bb, be.utc = db, be.local = hb, be.parseZone = pb, be.hasAlignedHourOffset = Ua, be.isDST = j, be.isLocal = V, be.isUtcOffset = ke, be.isUtc = Qe, be.isUTC = Qe, be.zoneAbbr = va, be.zoneName = qb, be.dates = pe(
      "dates accessor is deprecated. Use date instead.",
      ru
    ), be.months = pe(
      "months accessor is deprecated. Use month instead",
      mo
    ), be.years = pe(
      "years accessor is deprecated. Use year instead",
      qt
    ), be.zone = pe(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      fb
    ), be.isDSTShifted = pe(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      Q
    );
    function sl(r) {
      return Nt(r * 1e3);
    }
    function $b() {
      return Nt.apply(null, arguments).parseZone();
    }
    function su(r) {
      return r;
    }
    var _t = Ce.prototype;
    _t.calendar = de, _t.longDateFormat = Pe, _t.invalidDate = St, _t.ordinal = Be, _t.preparse = su, _t.postformat = su, _t.relativeTime = pi, _t.pastFuture = It, _t.set = He, _t.eras = Cb, _t.erasParse = Eb, _t.erasConvertYear = Tb, _t.erasAbbrRegex = pn, _t.erasNameRegex = Va, _t.erasNarrowRegex = Yi, _t.months = Ic, _t.monthsShort = po, _t.monthsParse = go, _t.monthsRegex = wo, _t.monthsShortRegex = Zr, _t.week = is, _t.firstDayOfYear = Ro, _t.firstDayOfWeek = ko, _t.weekdays = Wc, _t.weekdaysMin = ls, _t.weekdaysShort = qc, _t.weekdaysParse = Vc, _t.weekdaysRegex = jt, _t.weekdaysShortRegex = Lt, _t.weekdaysMinRegex = Gc, _t.isPM = Lo, _t.meridiem = ns;
    function gn(r, o, d, h) {
      var w = ei(), O = A().set(h, o);
      return w[d](O, r);
    }
    function ou(r, o, d) {
      if (S(r) && (o = r, r = void 0), r = r || "", o != null)
        return gn(r, o, d, "month");
      var h, w = [];
      for (h = 0; h < 12; h++)
        w[h] = gn(r, h, d, "month");
      return w;
    }
    function mn(r, o, d, h) {
      typeof r == "boolean" ? (S(o) && (d = o, o = void 0), o = o || "") : (o = r, d = o, r = !1, S(o) && (d = o, o = void 0), o = o || "");
      var w = ei(), O = r ? w._week.dow : 0, H, Se = [];
      if (d != null)
        return gn(o, (d + O) % 7, h, "day");
      for (H = 0; H < 7; H++)
        Se[H] = gn(o, (H + O) % 7, h, "day");
      return Se;
    }
    function uu(r, o) {
      return ou(r, o, "months");
    }
    function Vb(r, o) {
      return ou(r, o, "monthsShort");
    }
    function zb(r, o, d) {
      return mn(r, o, d, "weekdays");
    }
    function ys(r, o, d) {
      return mn(r, o, d, "weekdaysShort");
    }
    function Sr(r, o, d) {
      return mn(r, o, d, "weekdaysMin");
    }
    Ml("en", {
      eras: [
        {
          since: "0001-01-01",
          until: 1 / 0,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD"
        },
        {
          since: "0000-12-31",
          until: -1 / 0,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC"
        }
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(r) {
        var o = r % 10, d = Ke(r % 100 / 10) === 1 ? "th" : o === 1 ? "st" : o === 2 ? "nd" : o === 3 ? "rd" : "th";
        return r + d;
      }
    }), n.lang = pe(
      "moment.lang is deprecated. Use moment.locale instead.",
      Ml
    ), n.langData = pe(
      "moment.langData is deprecated. Use moment.localeData instead.",
      ei
    );
    var Hi = Math.abs;
    function Yb() {
      var r = this._data;
      return this._milliseconds = Hi(this._milliseconds), this._days = Hi(this._days), this._months = Hi(this._months), r.milliseconds = Hi(r.milliseconds), r.seconds = Hi(r.seconds), r.minutes = Hi(r.minutes), r.hours = Hi(r.hours), r.months = Hi(r.months), r.years = Hi(r.years), this;
    }
    function ws(r, o, d, h) {
      var w = ut(o, d);
      return r._milliseconds += h * w._milliseconds, r._days += h * w._days, r._months += h * w._months, r._bubble();
    }
    function Hb(r, o) {
      return ws(this, r, o, 1);
    }
    function Pl(r, o) {
      return ws(this, r, o, -1);
    }
    function yn(r) {
      return r < 0 ? Math.floor(r) : Math.ceil(r);
    }
    function ga() {
      var r = this._milliseconds, o = this._days, d = this._months, h = this._data, w, O, H, Se, ze;
      return r >= 0 && o >= 0 && d >= 0 || r <= 0 && o <= 0 && d <= 0 || (r += yn(_s(d) + o) * 864e5, o = 0, d = 0), h.milliseconds = r % 1e3, w = Dt(r / 1e3), h.seconds = w % 60, O = Dt(w / 60), h.minutes = O % 60, H = Dt(O / 60), h.hours = H % 24, o += Dt(H / 24), ze = Dt(Fi(o)), d += ze, o -= yn(_s(ze)), Se = Dt(d / 12), d %= 12, h.days = o, h.months = d, h.years = Se, this;
    }
    function Fi(r) {
      return r * 4800 / 146097;
    }
    function _s(r) {
      return r * 146097 / 4800;
    }
    function cu(r) {
      if (!this.isValid())
        return NaN;
      var o, d, h = this._milliseconds;
      if (r = Ot(r), r === "month" || r === "quarter" || r === "year")
        switch (o = this._days + h / 864e5, d = this._months + Fi(o), r) {
          case "month":
            return d;
          case "quarter":
            return d / 3;
          case "year":
            return d / 12;
        }
      else
        switch (o = this._days + Math.round(_s(this._months)), r) {
          case "week":
            return o / 7 + h / 6048e5;
          case "day":
            return o + h / 864e5;
          case "hour":
            return o * 24 + h / 36e5;
          case "minute":
            return o * 1440 + h / 6e4;
          case "second":
            return o * 86400 + h / 1e3;
          case "millisecond":
            return Math.floor(o * 864e5) + h;
          default:
            throw new Error("Unknown unit " + r);
        }
    }
    function ml(r) {
      return function() {
        return this.as(r);
      };
    }
    var za = ml("ms"), ea = ml("s"), bu = ml("m"), Gb = ml("h"), wn = ml("d"), Kb = ml("w"), fu = ml("M"), gi = ml("Q"), xs = ml("y"), du = za;
    function yl() {
      return ut(this);
    }
    function Ss(r) {
      return r = Ot(r), this.isValid() ? this[r + "s"]() : NaN;
    }
    function wl(r) {
      return function() {
        return this.isValid() ? this._data[r] : NaN;
      };
    }
    var ma = wl("milliseconds"), hu = wl("seconds"), Ri = wl("minutes"), ks = wl("hours"), Qb = wl("days"), Zb = wl("months"), Jb = wl("years");
    function Rs() {
      return Dt(this.days() / 7);
    }
    var jl = Math.round, _l = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month/week
      w: null,
      // weeks to month
      M: 11
      // months to year
    };
    function pu(r, o, d, h, w) {
      return w.relativeTime(o || 1, !!d, r, h);
    }
    function Xb(r, o, d, h) {
      var w = ut(r).abs(), O = jl(w.as("s")), H = jl(w.as("m")), Se = jl(w.as("h")), ze = jl(w.as("d")), rt = jl(w.as("M")), Ci = jl(w.as("w")), xl = jl(w.as("y")), Fl = O <= d.ss && ["s", O] || O < d.s && ["ss", O] || H <= 1 && ["m"] || H < d.m && ["mm", H] || Se <= 1 && ["h"] || Se < d.h && ["hh", Se] || ze <= 1 && ["d"] || ze < d.d && ["dd", ze];
      return d.w != null && (Fl = Fl || Ci <= 1 && ["w"] || Ci < d.w && ["ww", Ci]), Fl = Fl || rt <= 1 && ["M"] || rt < d.M && ["MM", rt] || xl <= 1 && ["y"] || ["yy", xl], Fl[2] = o, Fl[3] = +r > 0, Fl[4] = h, pu.apply(null, Fl);
    }
    function ef(r) {
      return r === void 0 ? jl : typeof r == "function" ? (jl = r, !0) : !1;
    }
    function kr(r, o) {
      return _l[r] === void 0 ? !1 : o === void 0 ? _l[r] : (_l[r] = o, r === "s" && (_l.ss = o - 1), !0);
    }
    function tf(r, o) {
      if (!this.isValid())
        return this.localeData().invalidDate();
      var d = !1, h = _l, w, O;
      return typeof r == "object" && (o = r, r = !1), typeof r == "boolean" && (d = r), typeof o == "object" && (h = Object.assign({}, _l, o), o.s != null && o.ss == null && (h.ss = o.s - 1)), w = this.localeData(), O = Xb(this, !d, h, w), d && (O = w.pastFuture(+this, O)), w.postformat(O);
    }
    var Cs = Math.abs;
    function ta(r) {
      return (r > 0) - (r < 0) || +r;
    }
    function Rr() {
      if (!this.isValid())
        return this.localeData().invalidDate();
      var r = Cs(this._milliseconds) / 1e3, o = Cs(this._days), d = Cs(this._months), h, w, O, H, Se = this.asSeconds(), ze, rt, Ci, xl;
      return Se ? (h = Dt(r / 60), w = Dt(h / 60), r %= 60, h %= 60, O = Dt(d / 12), d %= 12, H = r ? r.toFixed(3).replace(/\.?0+$/, "") : "", ze = Se < 0 ? "-" : "", rt = ta(this._months) !== ta(Se) ? "-" : "", Ci = ta(this._days) !== ta(Se) ? "-" : "", xl = ta(this._milliseconds) !== ta(Se) ? "-" : "", ze + "P" + (O ? rt + O + "Y" : "") + (d ? rt + d + "M" : "") + (o ? Ci + o + "D" : "") + (w || h || r ? "T" : "") + (w ? xl + w + "H" : "") + (h ? xl + h + "M" : "") + (r ? xl + H + "S" : "")) : "P0D";
    }
    var gt = dr.prototype;
    gt.isValid = ob, gt.abs = Yb, gt.add = Hb, gt.subtract = Pl, gt.as = cu, gt.asMilliseconds = za, gt.asSeconds = ea, gt.asMinutes = bu, gt.asHours = Gb, gt.asDays = wn, gt.asWeeks = Kb, gt.asMonths = fu, gt.asQuarters = gi, gt.asYears = xs, gt.valueOf = du, gt._bubble = ga, gt.clone = yl, gt.get = Ss, gt.milliseconds = ma, gt.seconds = hu, gt.minutes = Ri, gt.hours = ks, gt.days = Qb, gt.weeks = Rs, gt.months = Zb, gt.years = Jb, gt.humanize = tf, gt.toISOString = Rr, gt.toString = Rr, gt.toJSON = Rr, gt.locale = gr, gt.localeData = Xo, gt.toIsoString = pe(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      Rr
    ), gt.lang = bn, Z("X", 0, 0, "unix"), Z("x", 0, 0, "valueOf"), oe("x", le), oe("X", _e), ot("X", function(r, o, d) {
      d._d = new Date(parseFloat(r) * 1e3);
    }), ot("x", function(r, o, d) {
      d._d = new Date(Ke(r));
    });
    //! moment.js
    return n.version = "2.30.1", u(Nt), n.fn = be, n.min = ab, n.max = rb, n.now = nb, n.utc = A, n.unix = sl, n.months = uu, n.isDate = C, n.locale = Ml, n.invalid = F, n.duration = ut, n.isMoment = K, n.weekdays = zb, n.parseZone = $b, n.localeData = ei, n.isDuration = nl, n.monthsShort = Vb, n.weekdaysMin = Sr, n.defineLocale = ki, n.updateLocale = Zc, n.locales = Jc, n.weekdaysShort = ys, n.normalizeUnits = Ot, n.relativeTimeRounding = ef, n.relativeTimeThreshold = kr, n.calendarFormat = gb, n.prototype = be, n.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      // <input type="datetime-local" step="0.001" />
      DATE: "YYYY-MM-DD",
      // <input type="date" />
      TIME: "HH:mm",
      // <input type="time" />
      TIME_SECONDS: "HH:mm:ss",
      // <input type="time" step="1" />
      TIME_MS: "HH:mm:ss.SSS",
      // <input type="time" step="0.001" />
      WEEK: "GGGG-[W]WW",
      // <input type="week" />
      MONTH: "YYYY-MM"
      // <input type="month" />
    }, n;
  });
})(Zm);
var uO = Zm.exports;
const Ov = /* @__PURE__ */ Ld(uO), nc = (t, i) => {
  var n;
  if (!t) return "";
  let l = t;
  return (n = l == null ? void 0 : l.match(/\${(.*?)(?=})}/g)) == null || n.map((u) => {
    const b = u.slice(2, u.length - 1), c = id.get(i, b, "");
    return l = l.replace(u, c), l;
  }), l;
}, Mv = (t) => {
  const i = Ov(t, "YYYY-MM-DD HH:mm:ss"), l = Ov(), n = i.diff(l, "minutes");
  return n < 0 ? 0 : n;
}, Jm = ({
  limit: t,
  categoryId: i,
  // searchSize,
  storeId: l,
  variableName: n,
  noResultsText: u,
  urlToProduct: b
}) => {
  const [c, p] = Aa(bo), [y, x] = Rt([]), S = "productCart", C = "sessionCart", M = Xs(
    JSON.parse(localStorage.getItem(C)) || {}
  ), N = nO({
    onSuccess: ($) => {
      $ && (M.current = $, localStorage.setItem(C, JSON.stringify($)));
    }
  }), A = () => {
    var $, K, z;
    ($ = M.current) != null && $.id && ((K = M.current) != null && K.expiredAt) && Mv((z = M.current) == null ? void 0 : z.expiredAt) > 0 || N.mutate();
  };
  Xt(() => {
    A();
  }, []);
  const I = () => {
    var $;
    if (c && (($ = c == null ? void 0 : c[S]) == null ? void 0 : $.length) > 0) {
      x(c == null ? void 0 : c[S]);
      return;
    }
    if (!(c != null && c[S]))
      try {
        const K = JSON.parse(localStorage.getItem(S)) || [];
        (K == null ? void 0 : K.length) > 0 && g(K);
      } catch {
      }
  };
  Xt(() => {
    I();
  }, [c]);
  const g = ($) => {
    localStorage.setItem(S, JSON.stringify($ || [])), p({ ...c, [S]: $ || [] });
  }, G = ($, K) => {
    if ($ >= 0) {
      let z = id.cloneDeep(y);
      z[K].quantity = $, g(z);
    }
  }, q = () => {
    let $ = 0;
    return y.forEach((K) => {
      let z = hi.round(
        Number(((K == null ? void 0 : K.model.price) ?? 0) / 100) * Number(K.quantity),
        0
      );
      $ += z;
    }), $;
  }, F = ($) => {
    let K = id.cloneDeep(y);
    K = K.filter(
      (z, pe) => pe !== $
    ), g(K);
  }, ue = sO({
    onSuccess: ($) => {
      $ != null && $.url && (window.location.href = $ == null ? void 0 : $.url);
    }
  }), R = () => {
    var K;
    let $ = {
      id: (K = M.current) == null ? void 0 : K.id,
      body: {
        products: y
      }
    };
    ue.mutate($);
  }, se = async () => {
    var $, K;
    ($ = M.current) != null && $.expiredAt && Mv((K = M.current) == null ? void 0 : K.expiredAt) > 0 || await N.mutateAsync(), R();
  };
  return y != null && y.length ? /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs(Wi.Root, { size: "sm", children: [
      /* @__PURE__ */ m.jsx(Wi.Header, { children: /* @__PURE__ */ m.jsxs(Wi.Row, { children: [
        /* @__PURE__ */ m.jsx(Wi.ColumnHeader, { children: "Product" }),
        /* @__PURE__ */ m.jsx(Wi.ColumnHeader, { children: "Price" }),
        /* @__PURE__ */ m.jsx(Wi.ColumnHeader, { children: "Quantity" }),
        /* @__PURE__ */ m.jsx(Wi.ColumnHeader, { children: "Subtotal" }),
        /* @__PURE__ */ m.jsx(Wi.ColumnHeader, { textAlign: "end" })
      ] }) }),
      /* @__PURE__ */ m.jsx(Wi.Body, { children: y.map(($, K) => {
        var z, pe, Me;
        return /* @__PURE__ */ m.jsxs(Wi.Row, { children: [
          /* @__PURE__ */ m.jsx(Wi.Cell, { children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
            /* @__PURE__ */ m.jsx(
              Ur,
              {
                src: $.image || "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg",
                width: "50px",
                height: "50px",
                alt: $.name,
                borderRadius: "md"
              }
            ),
            /* @__PURE__ */ m.jsxs("div", { children: [
              /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx("span", { children: $ == null ? void 0 : $.name }) }),
              /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx(Dd, { colorPalette: "purple", children: (z = $ == null ? void 0 : $.model) == null ? void 0 : z.name }) })
            ] })
          ] }) }),
          /* @__PURE__ */ m.jsxs(Wi.Cell, { children: [
            "$",
            `${hi.round((((pe = $ == null ? void 0 : $.model) == null ? void 0 : pe.price) ?? 0) / 100, 0)}`
          ] }),
          /* @__PURE__ */ m.jsx(Wi.Cell, { children: /* @__PURE__ */ m.jsxs(
            ca.Root,
            {
              style: {
                width: "72px"
              },
              value: $.quantity,
              onValueChange: (Ye) => {
                G(Ye == null ? void 0 : Ye.valueAsNumber, K);
              },
              children: [
                /* @__PURE__ */ m.jsx(ca.Control, {}),
                /* @__PURE__ */ m.jsx(ca.Input, {})
              ]
            }
          ) }),
          /* @__PURE__ */ m.jsxs(Wi.Cell, { children: [
            "$",
            `${hi.round(
              Number((((Me = $ == null ? void 0 : $.model) == null ? void 0 : Me.price) ?? 0) / 100) * Number($.quantity),
              0
            )}`
          ] }),
          /* @__PURE__ */ m.jsx(Wi.Cell, { children: /* @__PURE__ */ m.jsx(
            vA,
            {
              className: "cursor-pointer",
              onClick: () => {
                F(K);
              }
            }
          ) })
        ] }, K);
      }) })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between mt-10 mb-2 px-2", children: [
      /* @__PURE__ */ m.jsx(dl, { variant: "outline", children: "Return To Shop" }),
      /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsxs(Ea.Root, { width: "320px", children: [
        /* @__PURE__ */ m.jsxs(Ea.Body, { gap: "2", children: [
          /* @__PURE__ */ m.jsx(Ea.Title, { mt: "2", children: "Cart total" }),
          /* @__PURE__ */ m.jsx(Ea.Description, { children: /* @__PURE__ */ m.jsx(Iu.Root, { orientation: "horizontal", divideY: "1px", maxW: "md", children: /* @__PURE__ */ m.jsxs(Iu.Item, { pt: "4", children: [
            /* @__PURE__ */ m.jsx(Iu.ItemLabel, { children: "SubTotal" }),
            /* @__PURE__ */ m.jsxs(Iu.ItemValue, { className: "justify-end", children: [
              "$",
              q()
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ m.jsx(Ea.Footer, { justifyContent: "center", children: /* @__PURE__ */ m.jsx(
          dl,
          {
            onClick: () => {
              se().then();
            },
            colorPalette: "red",
            children: "Process to checkout"
          }
        ) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ m.jsx(ht, { children: /* @__PURE__ */ m.jsxs("div", { className: "w-full flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ m.jsx(Tt, { children: u || "No results found" }),
    b && /* @__PURE__ */ m.jsxs(
      $n,
      {
        variant: "underline",
        colorPalette: "blue",
        href: `${b}`,
        children: [
          "Visit products now",
          /* @__PURE__ */ m.jsx(sA, {})
        ]
      }
    )
  ] }) });
}, cO = {
  label: "Cart",
  fields: {
    // mobile: {type: "number", label: "Mobile (base)", min: 1, max: 2},
    // tablet: {type: "number", label: "Tablet", min: 1, max: 4},
    // desktop: {type: "number", label: "Desktop", min: 1, max: 6},
    // limit: {type: "number", label: "Limit", min: 1, max: 20},
    variableName: {
      type: "text",
      label: "Variable Name to Use"
    },
    noResultsText: { type: "text", label: "No Results Message" },
    urlToProduct: { type: "text", label: "Url to product" }
    // searchSize: {
    //   type: "select",
    //   label: "Search Size",
    //   options: [
    //     { value: "middle", label: "Middle" },
    //     { value: "large", label: "Large" },
    //   ],
    // },
    // categoryId: {
    //   type: "custom",
    //   label: "Category",
    //   render: (props) => <CategoryField {...props} />,
    // },
  },
  defaultProps: {
    // mobile: 2,
    // tablet: 4,
    // desktop: 4,
    // limit: 10,
    categoryId: void 0,
    noResultsText: "No Results",
    variableName: void 0,
    urlToProduct: void 0
  },
  render: ({
    puck: t,
    limit: i,
    noResultsText: l,
    urlToProduct: n,
    categoryId: u,
    variableName: b
  }) => {
    var c;
    return /* @__PURE__ */ m.jsx(
      Jm,
      {
        categoryId: u,
        variableName: b,
        limit: i,
        noResultsText: l,
        urlToProduct: n,
        storeId: (c = t == null ? void 0 : t.metadata) == null ? void 0 : c.storeId
      }
    );
  }
}, bO = Ti(cO), fO = Xx(null), Xf = {
  didCatch: !1,
  error: null
};
class dO extends Jx {
  constructor(i) {
    super(i), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Xf;
  }
  static getDerivedStateFromError(i) {
    return {
      didCatch: !0,
      error: i
    };
  }
  resetErrorBoundary() {
    const {
      error: i
    } = this.state;
    if (i !== null) {
      for (var l, n, u = arguments.length, b = new Array(u), c = 0; c < u; c++)
        b[c] = arguments[c];
      (l = (n = this.props).onReset) === null || l === void 0 || l.call(n, {
        args: b,
        reason: "imperative-api"
      }), this.setState(Xf);
    }
  }
  componentDidCatch(i, l) {
    var n, u;
    (n = (u = this.props).onError) === null || n === void 0 || n.call(u, i, l);
  }
  componentDidUpdate(i, l) {
    const {
      didCatch: n
    } = this.state, {
      resetKeys: u
    } = this.props;
    if (n && l.error !== null && hO(i.resetKeys, u)) {
      var b, c;
      (b = (c = this.props).onReset) === null || b === void 0 || b.call(c, {
        next: u,
        prev: i.resetKeys,
        reason: "keys"
      }), this.setState(Xf);
    }
  }
  render() {
    const {
      children: i,
      fallbackRender: l,
      FallbackComponent: n,
      fallback: u
    } = this.props, {
      didCatch: b,
      error: c
    } = this.state;
    let p = i;
    if (b) {
      const y = {
        error: c,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof l == "function")
        p = l(y);
      else if (n)
        p = Vs(n, y);
      else if (u !== void 0)
        p = u;
      else
        throw c;
    }
    return Vs(fO.Provider, {
      value: {
        didCatch: b,
        error: c,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, p);
  }
}
function hO() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return t.length !== i.length || t.some((l, n) => !Object.is(l, i[n]));
}
function pO(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" }, child: [] }, { tag: "circle", attr: { cx: "12", cy: "13", r: "4" }, child: [] }] })(t);
}
function vO(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "15 18 9 12 15 6" }, child: [] }] })(t);
}
function Xm(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "9 18 15 12 9 6" }, child: [] }] })(t);
}
function gO(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M3 18v-6a9 9 0 0 1 18 0v6" }, child: [] }, { tag: "path", attr: { d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" }, child: [] }] })(t);
}
function mO(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }, child: [] }, { tag: "line", attr: { x1: "8", y1: "21", x2: "16", y2: "21" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "17", x2: "12", y2: "21" }, child: [] }] })(t);
}
function yO(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "16.5", y1: "9.4", x2: "7.5", y2: "4.21" }, child: [] }, { tag: "path", attr: { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }, child: [] }, { tag: "polyline", attr: { points: "3.27 6.96 12 12.01 20.73 6.96" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "22.08", x2: "12", y2: "12" }, child: [] }] })(t);
}
function wO(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "18", x2: "12.01", y2: "18" }, child: [] }] })(t);
}
function _O(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "circle", attr: { cx: "12", cy: "12", r: "7" }, child: [] }, { tag: "polyline", attr: { points: "12 9 12 12 13.5 13.5" }, child: [] }, { tag: "path", attr: { d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" }, child: [] }] })(t);
}
function xO(t) {
  return zt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polygon", attr: { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }, child: [] }] })(t);
}
const ey = (t, i) => Wd({
  queryKey: ["categories", t],
  queryFn: ({ signal: l }) => sh(t, l),
  // Sensible defaults for smoother UX; can be overridden by props
  staleTime: 6e4,
  gcTime: 3e5,
  placeholderData: (l) => l,
  retry: 1,
  ...i
}), ty = ({ name: t, value: i, onChange: l }) => {
  const [n, u] = Rt([]), [b, c] = Rt(""), p = ui(() => Array.isArray(i) ? i : [], [i]), y = ui(
    () => new Set(p.map((N) => String(N.id))),
    [p]
  ), x = ui(() => p.map((N) => ({ id: String(N.id), name: String(N.name || N.id) })), [p]);
  Xt(() => {
    const N = new AbortController(), A = "1791381b-a6b0-4771-a441-8b180392bf0a";
    return (async () => {
      try {
        const I = await sh(
          { storeId: A, limit: 200, query: b },
          N.signal
        ), q = ((R) => {
          var K, z, pe, Me, Ye, Ae;
          if (!R) return [];
          if (Array.isArray(R)) return R;
          const se = [R == null ? void 0 : R.data, R == null ? void 0 : R.items, R == null ? void 0 : R.rows, R == null ? void 0 : R.records, R == null ? void 0 : R.list, R == null ? void 0 : R.results];
          for (const He of se) if (Array.isArray(He)) return He;
          const $ = [(K = R == null ? void 0 : R.data) == null ? void 0 : K.data, (z = R == null ? void 0 : R.data) == null ? void 0 : z.items, (pe = R == null ? void 0 : R.data) == null ? void 0 : pe.rows, (Me = R == null ? void 0 : R.data) == null ? void 0 : Me.records, (Ye = R == null ? void 0 : R.data) == null ? void 0 : Ye.list, (Ae = R == null ? void 0 : R.data) == null ? void 0 : Ae.results];
          for (const He of $) if (Array.isArray(He)) return He;
          return [];
        })(I == null ? void 0 : I.data).map((R) => {
          const se = (R == null ? void 0 : R.id) ?? (R == null ? void 0 : R.entityId) ?? (R == null ? void 0 : R.value) ?? (R == null ? void 0 : R._id) ?? (R == null ? void 0 : R.code) ?? (R == null ? void 0 : R.slug) ?? (R == null ? void 0 : R.uuid) ?? (R == null ? void 0 : R.uid) ?? (R == null ? void 0 : R.key) ?? (R == null ? void 0 : R.categoryId), $ = (R == null ? void 0 : R.name) ?? (R == null ? void 0 : R.label) ?? (R == null ? void 0 : R.title) ?? (R == null ? void 0 : R.slug) ?? (R == null ? void 0 : R.code) ?? (R == null ? void 0 : R.displayName) ?? (R == null ? void 0 : R.text) ?? (R == null ? void 0 : R.categoryName) ?? (R == null ? void 0 : R.shortName);
          return {
            id: se != null ? String(se) : "",
            name: $ != null && String($).trim() !== "" ? String($) : se != null ? String(se) : ""
          };
        }).filter((R) => R.id !== ""), F = /* @__PURE__ */ new Set(), ue = q.filter((R) => F.has(R.id) ? !1 : (F.add(R.id), !0));
        u(ue);
      } catch {
      }
    })(), () => N.abort();
  }, [b]);
  const S = (N, A) => y.has(String(N)) ? !0 : p.some((I) => String(I.id) === String(N) && String(I.name) === String(A ?? "")), C = (N, A) => {
    if (A) {
      const I = /* @__PURE__ */ new Map();
      [...p, N].forEach((g) => I.set(String(g.id), { id: String(g.id), name: g.name })), l(Array.from(I.values()));
    } else
      l(p.filter((I) => String(I.id) !== String(N.id)));
  }, M = () => l([]);
  return /* @__PURE__ */ m.jsx(zr, { label: "Choose Categories", children: /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search...",
        value: b,
        onChange: (N) => c(N.target.value),
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 }
      }
    ),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        style: {
          maxHeight: 220,
          overflow: "auto",
          border: "1px solid #eee",
          borderRadius: 4,
          padding: 6
        },
        children: [
          n.map((N) => {
            const A = `${t}__${N.id}`;
            return /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: 4 }, children: [
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  id: A,
                  type: "checkbox",
                  checked: !!S(N.id, N.name),
                  onChange: (I) => C(N, I.target.checked)
                }
              ),
              /* @__PURE__ */ m.jsx("label", { htmlFor: A, style: { cursor: "pointer" }, children: N.name })
            ] }, String(N.id));
          }),
          !n.length && /* @__PURE__ */ m.jsx("div", { style: { color: "#999", fontSize: 12 }, children: "No categories" })
        ]
      }
    ),
    /* @__PURE__ */ m.jsx("div", { style: { display: "flex", gap: 8 }, children: /* @__PURE__ */ m.jsx("button", { type: "button", onClick: M, style: { padding: "4px 8px" }, children: "Clear" }) }),
    !!p.length && /* @__PURE__ */ m.jsxs("div", { style: { color: "#666", fontSize: 12 }, children: [
      "Selected: ",
      x.map((N) => N.name).join(", ")
    ] })
  ] }) });
}, Dv = {
  FiSmartphone: wO,
  FiMonitor: mO,
  FiWatch: _O,
  FiCamera: pO,
  FiHeadphones: gO,
  FiZap: xO,
  FiPackage: yO
}, Lv = (t) => {
  const i = t.toLowerCase();
  return i.includes("phone") || i.includes("mobile") ? "FiSmartphone" : i.includes("computer") || i.includes("laptop") || i.includes("pc") ? "FiMonitor" : i.includes("watch") || i.includes("smartwatch") ? "FiWatch" : i.includes("camera") || i.includes("photo") ? "FiCamera" : i.includes("headphone") || i.includes("audio") || i.includes("sound") ? "FiHeadphones" : i.includes("game") || i.includes("gaming") ? "FiZap" : "FiPackage";
}, SO = ({
  title: t = "Browse By Category",
  subtitle: i = "Categories",
  urlRedirect: l,
  storeId: n = ((q) => (q = ((G) => (G = import.meta) == null ? void 0 : G.env)()) == null ? void 0 : q.VITE_ENTITY_ID)() || "",
  mobile: u = 2,
  tablet: b = 4,
  desktop: c = 6,
  limit: p = 6,
  header: y,
  footer: x,
  puck: S,
  showAll: C = !1,
  selectionMode: M = "limit",
  selectedCategories: N = [],
  categoryIds: A,
  parentCategoryId: I,
  bindSelectedCategoryVariableName: g
}) => {
  var Pe, Ue, St;
  const [F, ue] = Aa(Yn), R = g ? F[g] : "", se = Xs(null), $ = "red.500", K = ((Ue = (Pe = import.meta) == null ? void 0 : Pe.env) == null ? void 0 : Ue.VITE_ENTITY_ID) || n || ((St = S.metadata) == null ? void 0 : St.entityId) || "", z = ((N == null ? void 0 : N.length) || 0) > 0 && M !== "ids" ? "select" : M, {
    data: pe,
    isLoading: Me,
    error: Ye
  } = ey(
    {
      storeId: K,
      limit: C || z !== "limit" ? void 0 : p
    },
    {
      enabled: !!K,
      // In editor we want to see a call when dropped; avoid cache reuse
      staleTime: 0,
      refetchOnMount: "always",
      refetchOnWindowFocus: !1,
      gcTime: 3e5,
      placeholderData: void 0,
      retry: 1
    }
  ), Ae = [
    { id: "1", name: "Phones", icon: "FiSmartphone" },
    { id: "2", name: "Computers", icon: "FiMonitor" },
    { id: "3", name: "SmartWatch", icon: "FiWatch" },
    { id: "4", name: "Camera", icon: "FiCamera" },
    { id: "5", name: "HeadPhones", icon: "FiHeadphones" },
    { id: "6", name: "Gaming", icon: "FiZap" }
  ], He = (pe == null ? void 0 : pe.data) || [], [bt, Ce] = vt.useState(null);
  vt.useEffect(() => {
    let we = !0;
    const ce = new AbortController();
    return I && (async () => {
      try {
        const Be = await zm({ storeId: K }, ce.signal);
        we && Ce((Be == null ? void 0 : Be.data) || []);
      } catch {
        we && Ce([]);
      }
    })(), () => {
      we = !1, ce.abort();
    };
  }, [I, K]);
  const Fe = !!Ye || He.length < 4;
  let Te = [];
  if (z === "select" && (N != null && N.length))
    Te = N;
  else if (z === "ids" && A)
    Te = A.split(",").map((ce) => ce.trim()).filter(Boolean).map((ce) => {
      const Be = He.find(
        (kt) => String(kt.id ?? kt.entityId ?? kt.value) === String(ce)
      );
      return { id: ce, name: (Be == null ? void 0 : Be.name) || ce, icon: Be == null ? void 0 : Be.icon };
    });
  else if (I && Array.isArray(bt)) {
    const we = (kt) => {
      for (const pi of kt) {
        if (String(pi.id) === String(I)) return pi;
        const It = pi.children && we(pi.children);
        if (It) return It;
      }
      return null;
    }, ce = we(bt) || {}, Be = Array.isArray(ce.children) ? ce.children : [];
    Te = C ? Be : Be.slice(0, p);
  } else {
    const we = (He || []).map((ce) => {
      const Be = (ce == null ? void 0 : ce.id) ?? (ce == null ? void 0 : ce.entityId) ?? (ce == null ? void 0 : ce.value) ?? (ce == null ? void 0 : ce._id) ?? (ce == null ? void 0 : ce.code) ?? (ce == null ? void 0 : ce.slug), kt = (ce == null ? void 0 : ce.name) ?? (ce == null ? void 0 : ce.label) ?? (ce == null ? void 0 : ce.title) ?? (ce == null ? void 0 : ce.slug) ?? (ce == null ? void 0 : ce.code) ?? (ce == null ? void 0 : ce.displayName) ?? (ce == null ? void 0 : ce.text);
      return {
        id: Be != null ? String(Be) : "",
        name: kt ? String(kt) : Be != null ? String(Be) : "",
        icon: ce == null ? void 0 : ce.icon
      };
    }).filter((ce) => ce.id !== "");
    Te = Fe ? C ? Ae : Ae.slice(0, p) : C ? we : we.slice(0, p);
  }
  const de = Ap({ base: u, md: b, lg: c }) || c, re = Ap({ base: !1, md: !1, lg: !0 }) || !1, [ve, B] = vt.useState(0), ne = Math.max(1, Number(de || c)), J = Math.max(
    1,
    Math.ceil(((Te == null ? void 0 : Te.length) || 0) / ne)
  );
  vt.useEffect(() => {
    B((we) => Math.min(Math.max(0, we), Math.max(0, J - 1)));
  }, [ne, Te == null ? void 0 : Te.length, J]);
  const Z = vt.useMemo(() => {
    if (re) {
      const we = ve * ne;
      return (Te || []).slice(we, we + ne);
    }
    return Te;
  }, [re, ve, ne, Te]), je = {
    cardSize: {
      base: `${100 / u}%`,
      // Mobile: divide by mobile columns
      md: `${100 / b}%`,
      // Tablet: divide by tablet columns
      lg: `${100 / c}%`
      // Desktop: divide by desktop columns
    },
    gap: {
      base: 2,
      md: 3,
      lg: 4
    },
    fontSize: {
      base: "xs",
      md: "sm",
      lg: "sm"
    },
    iconSize: {
      base: 5,
      md: 5,
      lg: 6
    }
  }, me = () => {
    if (re) {
      B((we) => Math.max(0, we - 1));
      return;
    }
    se.current && se.current.scrollBy({ left: -200, behavior: "smooth" });
  }, ee = () => {
    if (re) {
      B((we) => Math.min(J - 1, we + 1));
      return;
    }
    se.current && se.current.scrollBy({ left: 200, behavior: "smooth" });
  }, Ee = (we) => {
    g && (ue((ce) => ({
      ...ce,
      [g]: we == null ? void 0 : we.id
    })), Hm({ categoryId: we == null ? void 0 : we.id, page: 1 }));
  };
  return /* @__PURE__ */ m.jsxs(oh, { children: [
    y ? /* @__PURE__ */ m.jsx(y, { minEmptyHeight: 40 }) : null,
    /* @__PURE__ */ m.jsxs(ht, { py: 8, children: [
      /* @__PURE__ */ m.jsxs(Ut, { justify: "space-between", align: "center", mb: 6, children: [
        /* @__PURE__ */ m.jsxs(or, { align: "start", gap: 1, children: [
          /* @__PURE__ */ m.jsxs(Ut, { align: "center", gap: 2, children: [
            /* @__PURE__ */ m.jsx(ht, { w: 2, h: 6, bg: $, borderRadius: "sm" }),
            /* @__PURE__ */ m.jsx(Tt, { color: $, fontSize: "sm", fontWeight: "medium", children: i })
          ] }),
          /* @__PURE__ */ m.jsxs(Ut, { align: "baseline", gap: 3, children: [
            /* @__PURE__ */ m.jsx(Tt, { fontSize: "2xl", fontWeight: "bold", color: "gray.800", children: t }),
            re && J > 1 ? /* @__PURE__ */ m.jsxs(Tt, { fontSize: "sm", color: "gray.500", children: [
              "Page ",
              ve + 1,
              " / ",
              J
            ] }) : null
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs(or, { direction: "row", gap: 2, children: [
          /* @__PURE__ */ m.jsx(
            el,
            {
              "aria-label": "Previous categories",
              variant: "outline",
              size: "sm",
              onClick: me,
              colorScheme: "gray",
              disabled: re && ve <= 0,
              children: /* @__PURE__ */ m.jsx(Ws, { as: vO })
            }
          ),
          /* @__PURE__ */ m.jsx(
            el,
            {
              "aria-label": "Next categories",
              variant: "outline",
              size: "sm",
              onClick: ee,
              colorScheme: "gray",
              disabled: re && ve >= J - 1,
              children: /* @__PURE__ */ m.jsx(Ws, { as: Xm })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs(ht, { children: [
        /* @__PURE__ */ m.jsx(
          ht,
          {
            ref: se,
            overflowX: "auto",
            overflowY: "hidden",
            css: {
              "&::-webkit-scrollbar": {
                display: "none"
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            },
            display: { base: "block", md: "block", lg: "none" },
            children: /* @__PURE__ */ m.jsx(
              or,
              {
                direction: "row",
                gap: je.gap,
                minW: "max-content",
                pb: 2,
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "auto",
                css: {
                  "&::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                  msOverflowStyle: "none"
                },
                children: Me ? (
                  // Loading skeleton
                  Array.from({
                    length: C || M !== "limit" ? Math.min(Z.length || 8, 8) : p
                  }).map((we, ce) => /* @__PURE__ */ m.jsx(
                    Hu,
                    {
                      h: { base: "100px", md: "110px" },
                      w: { base: "100px", md: "110px" },
                      borderRadius: "md"
                    },
                    `skeleton-${ce}`
                  ))
                ) : Ye ? (
                  // Error state
                  /* @__PURE__ */ m.jsx(Tt, { color: "red.500", fontSize: "sm", children: "Failed to load categories" })
                ) : Z.map((we) => {
                  const ce = we.name || "", Be = we.id || "", kt = we.icon || Lv(ce), pi = Dv[kt], It = R === Be;
                  return /* @__PURE__ */ m.jsx(
                    $n,
                    {
                      href: !(S != null && S.isEditing) && l ? nc(l, we) : void 0,
                      onClick: (yi) => {
                        S != null && S.isEditing && yi.preventDefault();
                      },
                      children: /* @__PURE__ */ m.jsxs(
                        dl,
                        {
                          variant: "outline",
                          size: "lg",
                          h: { base: "100px", md: "110px" },
                          w: { base: "100px", md: "110px" },
                          minW: { base: "100px", md: "110px" },
                          flexDirection: "column",
                          gap: { base: 2, md: 2 },
                          bg: It ? $ : "white",
                          borderColor: It ? $ : "gray.200",
                          color: It ? "white" : "gray.800",
                          _hover: {
                            bg: It ? $ : "gray.50",
                            borderColor: It ? $ : "gray.300"
                          },
                          onClick: () => Ee(we),
                          transition: "all 0.2s",
                          flexShrink: 0,
                          children: [
                            /* @__PURE__ */ m.jsx(
                              Ws,
                              {
                                as: pi,
                                boxSize: je.iconSize,
                                color: It ? "white" : "gray.800"
                              }
                            ),
                            /* @__PURE__ */ m.jsx(
                              Tt,
                              {
                                fontSize: je.fontSize,
                                fontWeight: "medium",
                                children: ce
                              }
                            )
                          ]
                        }
                      )
                    },
                    String(Be)
                  );
                })
              }
            )
          }
        ),
        /* @__PURE__ */ m.jsx(
          oc,
          {
            columns: {
              base: u,
              md: b,
              lg: c
            },
            gap: je.gap,
            display: {
              base: "none",
              md: "none",
              lg: "grid"
            },
            children: Me ? (
              // Loading skeleton for desktop
              Array.from({
                length: re ? ne : C || M !== "limit" ? 12 : p
              }).map((we, ce) => /* @__PURE__ */ m.jsx(
                Hu,
                {
                  h: "120px",
                  w: "100%",
                  borderRadius: "md"
                },
                `skeleton-desktop-${ce}`
              ))
            ) : Ye ? (
              // Error state
              /* @__PURE__ */ m.jsx(Tt, { color: "red.500", fontSize: "sm", children: "Failed to load categories" })
            ) : Z.map((we) => {
              const ce = we.name || "", Be = we.id || "", kt = we.icon || Lv(ce), pi = Dv[kt], It = R === Be;
              return /* @__PURE__ */ m.jsx(
                $n,
                {
                  href: !(S != null && S.isEditing) && l ? nc(l, we) : void 0,
                  onClick: (yi) => {
                    S != null && S.isEditing && yi.preventDefault();
                  },
                  children: /* @__PURE__ */ m.jsxs(
                    dl,
                    {
                      variant: "outline",
                      size: "lg",
                      h: "120px",
                      w: "100%",
                      flexDirection: "column",
                      gap: 3,
                      bg: It ? $ : "white",
                      borderColor: It ? $ : "gray.200",
                      color: It ? "white" : "gray.800",
                      _hover: {
                        bg: It ? $ : "gray.50",
                        borderColor: It ? $ : "gray.300"
                      },
                      onClick: () => Ee(we),
                      transition: "all 0.2s",
                      children: [
                        /* @__PURE__ */ m.jsx(
                          Ws,
                          {
                            as: pi,
                            boxSize: 6,
                            color: It ? "white" : "gray.800"
                          }
                        ),
                        /* @__PURE__ */ m.jsx(Tt, { fontSize: "sm", fontWeight: "medium", children: ce })
                      ]
                    }
                  )
                },
                String(Be)
              );
            })
          }
        )
      ] })
    ] }),
    x ? /* @__PURE__ */ m.jsx(x, { minEmptyHeight: 40 }) : null
  ] });
}, Nv = {
  header: {
    type: "slot",
    label: "Header Slot"
  },
  bindSelectedCategoryVariableName: {
    type: "text",
    label: "Bind Selected Category Var",
    placeholder: "products.categoryId"
  },
  showAll: {
    type: "radio",
    label: "Show All Categories",
    options: [
      { label: "Yes", value: !0 },
      { label: "No", value: !1 }
    ]
  },
  selectionMode: {
    type: "radio",
    label: "Selection Mode",
    options: [
      { label: "By Limit", value: "limit" },
      { label: "Pick Categories", value: "select" },
      { label: "Enter IDs", value: "ids" }
    ]
  },
  selectedCategories: {
    type: "custom",
    label: "Choose Categories",
    render: ty
  },
  parentCategoryId: {
    type: "custom",
    label: "Parent Category",
    render: Ym
  },
  categoryIds: {
    type: "text",
    label: "Category IDs (comma-separated)",
    placeholder: "id1,id2,id3"
  },
  title: {
    type: "text",
    label: "Title"
  },
  subtitle: {
    type: "text",
    label: "Subtitle"
  },
  storeId: {
    type: "text",
    label: "Store ID"
  },
  urlRedirect: {
    type: "text",
    label: "Url"
  },
  mobile: {
    type: "number",
    label: "Mobile Columns",
    min: 1,
    max: 4
  },
  tablet: {
    type: "number",
    label: "Tablet Columns",
    min: 2,
    max: 6
  },
  desktop: {
    type: "number",
    label: "Desktop Columns",
    min: 3,
    max: 8
  },
  limit: {
    type: "number",
    label: "Total Categories Limit",
    min: 1,
    max: 20
  },
  footer: {
    type: "slot",
    label: "Footer Slot"
  }
};
var zv, Yv;
const kO = {
  label: "Categories",
  fields: Nv,
  defaultProps: {
    title: "Browse By Category",
    subtitle: "Categories",
    storeId: ((Yv = (zv = import.meta) == null ? void 0 : zv.env) == null ? void 0 : Yv.VITE_ENTITY_ID) || "",
    urlRedirect: "",
    bindSelectedCategoryVariableName: "products.categoryId",
    mobile: 2,
    tablet: 4,
    desktop: 6,
    limit: 6,
    header: [],
    footer: [],
    showAll: !1,
    selectionMode: "limit",
    selectedCategories: [],
    categoryIds: "",
    parentCategoryId: ""
  },
  resolveFields: (t) => {
    var n, u, b;
    const i = Nv, l = {
      header: i.header,
      bindSelectedCategoryVariableName: i.bindSelectedCategoryVariableName,
      showAll: i.showAll,
      title: i.title,
      subtitle: i.subtitle,
      storeId: i.storeId,
      urlRedirect: i.urlRedirect,
      mobile: i.mobile,
      tablet: i.tablet,
      desktop: i.desktop,
      footer: i.footer
    };
    return l.parentCategoryId = i.parentCategoryId, (n = t == null ? void 0 : t.props) != null && n.showAll ? l.limit = i.limit : (l.selectionMode = i.selectionMode, ((u = t == null ? void 0 : t.props) == null ? void 0 : u.selectionMode) === "select" ? l.selectedCategories = i.selectedCategories : ((b = t == null ? void 0 : t.props) == null ? void 0 : b.selectionMode) === "ids" ? l.categoryIds = i.categoryIds : l.limit = i.limit), l;
  },
  render: (t) => /* @__PURE__ */ m.jsx(dO, { fallbackRender: () => /* @__PURE__ */ m.jsx("div", { children: "Unable to load categories." }), children: /* @__PURE__ */ m.jsx(SO, { ...t, puck: t.puck }) })
}, RO = Ti(kO), CO = {
  label: "Icon",
  fields: {
    icon: {
      label: "Icon",
      ...rc
    },
    size: {
      label: "Size",
      type: "text",
      placeholder: "...px"
    },
    color: {
      label: "Color",
      ...ur
    },
    href: {
      label: "Link",
      type: "text"
    }
  },
  defaultProps: {
    icon: "bi bi-0-circle",
    size: "14px",
    color: "",
    href: ""
  },
  render: ({
    href: t,
    size: i,
    color: l,
    icon: n
    // puck
  }) => (console.log("icon", n), /* @__PURE__ */ m.jsx("a", { href: t, children: Gs({
    iconName: n,
    mf_color: l,
    mf_font_size: i
  }) }))
}, EO = {
  label: "Banner",
  fields: {
    height: {
      type: "object",
      label: "Height (px)",
      objectFields: {
        base: { type: "number", label: "base", min: 200, max: 900 },
        md: { type: "number", label: "md", min: 200, max: 900 },
        lg: { type: "number", label: "lg", min: 200, max: 900 }
      }
    },
    textSide: {
      type: "radio",
      label: "Text Side",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" }
      ]
    },
    verticalAlign: {
      type: "radio",
      label: "Vertical Align",
      options: [
        { label: "Top", value: "start" },
        { label: "Center", value: "center" },
        { label: "Bottom", value: "end" }
      ]
    },
    imageFit: {
      type: "select",
      label: "Image Fit",
      options: [
        { label: "Cover", value: "cover" },
        { label: "Contain", value: "contain" }
      ]
    },
    autoplay: { type: "radio", label: "Autoplay", options: [
      { label: "On", value: !0 },
      { label: "Off", value: !1 }
    ] },
    intervalMs: { type: "number", label: "Autoplay Interval (ms)", min: 1e3, max: 3e4 },
    showDots: { type: "radio", label: "Show Dots", options: [
      { label: "Yes", value: !0 },
      { label: "No", value: !1 }
    ] },
    showArrows: { type: "radio", label: "Show Arrows", options: [
      { label: "Yes", value: !0 },
      { label: "No", value: !1 }
    ] },
    overlayEnabled: { type: "radio", label: "Text Overlay", options: [
      { label: "On", value: !0 },
      { label: "Off", value: !1 }
    ] },
    overlayOpacity: { type: "number", label: "Overlay Opacity (0-1)", min: 0, max: 1 },
    overlayWidthPercent: { type: "number", label: "Overlay Width %", min: 10, max: 100 },
    slides: {
      type: "array",
      label: "Slides",
      min: 1,
      arrayFields: {
        imageUrl: { type: "text", label: "Image URL" },
        alt: { type: "text", label: "Alt" },
        textEnabled: {
          type: "radio",
          label: "Show Text",
          options: [
            { label: "Yes", value: !0 },
            { label: "No", value: !1 }
          ]
        },
        eyebrow: { type: "text", label: "Eyebrow" },
        headline: { type: "text", label: "Headline", contentEditable: !0 },
        description: { type: "textarea", label: "Description" },
        ctaLabel: { type: "text", label: "CTA Label" },
        ctaHref: { type: "text", label: "CTA Link" }
      },
      defaultItemProps: {
        imageUrl: "https://picsum.photos/1200/600",
        alt: "",
        textEnabled: !0,
        eyebrow: "Series",
        headline: "Up to 10% off Voucher",
        description: "",
        ctaLabel: "Shop Now",
        ctaHref: "#"
      }
    }
  },
  defaultProps: {
    height: { base: 360, md: 420, lg: 420 },
    textSide: "left",
    verticalAlign: "center",
    imageFit: "cover",
    autoplay: !0,
    intervalMs: 5e3,
    showDots: !0,
    showArrows: !0,
    overlayEnabled: !0,
    overlayOpacity: 0.6,
    overlayWidthPercent: 60,
    slides: [
      {
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
        alt: "Banner 1",
        textEnabled: !0,
        eyebrow: "iPhone 14 Series",
        headline: "Up to 10% off Voucher",
        description: "",
        ctaLabel: "Shop Now",
        ctaHref: "#"
      }
    ]
  },
  render: ({
    height: t,
    textSide: i,
    verticalAlign: l,
    imageFit: n,
    autoplay: u,
    intervalMs: b,
    showDots: c,
    showArrows: p,
    overlayEnabled: y,
    overlayOpacity: x,
    overlayWidthPercent: S,
    slides: C,
    puck: M
  }) => {
    const [N, A] = Rt(0), I = Xs(null), g = ui(() => Array.isArray(C) && C.length ? C : [], [C]), G = () => A((K) => (K + 1) % (g.length || 1)), q = () => A((K) => (K - 1 + (g.length || 1)) % (g.length || 1));
    Xt(() => {
      if (!(!u || M != null && M.isEditing || g.length <= 1))
        return I.current && window.clearInterval(I.current), I.current = window.setInterval(G, Math.max(1e3, b || 5e3)), () => {
          I.current && window.clearInterval(I.current);
        };
    }, [u, b, M == null ? void 0 : M.isEditing, g.length]);
    const F = g[N], ue = typeof t == "number" ? { base: t, md: t, lg: t } : t || {}, R = ue.base ?? 360, se = ue.md ?? R, $ = ue.lg ?? se;
    return /* @__PURE__ */ m.jsxs(
      ht,
      {
        position: "relative",
        overflow: "hidden",
        borderRadius: "lg",
        onMouseEnter: () => {
          I.current && (window.clearInterval(I.current), I.current = null);
        },
        onMouseLeave: () => {
          u && !(M != null && M.isEditing) && g.length > 1 && (I.current = window.setInterval(G, Math.max(1e3, b || 5e3)));
        },
        children: [
          /* @__PURE__ */ m.jsxs(
            Ut,
            {
              direction: { base: "column", md: "row" },
              justify: "stretch",
              align: l === "start" ? "flex-start" : l === "end" ? "flex-end" : "center",
              gap: 6,
              h: { base: `${R}px`, md: `${se}px`, lg: `${$}px` },
              bg: "black",
              color: "white",
              p: { base: 6, md: 10 },
              children: [
                y && /* @__PURE__ */ m.jsx(
                  ht,
                  {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    bgGradient: i === "left" ? `linear(to-r, rgba(0,0,0,${x ?? 0.6}) ${S ?? 60}%, rgba(0,0,0,0) 100%)` : `linear(to-l, rgba(0,0,0,${x ?? 0.6}) ${S ?? 60}%, rgba(0,0,0,0) 100%)`
                  }
                ),
                (F == null ? void 0 : F.textEnabled) !== !1 && /* @__PURE__ */ m.jsxs(
                  Ut,
                  {
                    order: i === "left" ? 0 : 1,
                    direction: "column",
                    justify: l === "start" ? "flex-start" : l === "end" ? "flex-end" : "center",
                    flex: { base: "0 0 auto", md: "1 1 50%" },
                    minW: { base: "100%", md: "50%" },
                    gap: 3,
                    children: [
                      F != null && F.eyebrow ? /* @__PURE__ */ m.jsx(Tt, { color: "gray.300", fontSize: { base: "sm", md: "md" }, children: F.eyebrow }) : null,
                      F != null && F.headline ? /* @__PURE__ */ m.jsx(nS, { fontSize: { base: "2xl", md: "4xl" }, lineHeight: "1.1", children: F.headline }) : null,
                      F != null && F.description ? /* @__PURE__ */ m.jsx(Tt, { color: "gray.200", fontSize: { base: "sm", md: "md" }, children: F.description }) : null,
                      F != null && F.ctaLabel ? /* @__PURE__ */ m.jsx(
                        dl,
                        {
                          onClick: (K) => {
                            if (M != null && M.isEditing) return K.preventDefault();
                            const z = F.ctaHref || "#";
                            z.startsWith("http") ? window.open(z, "_blank", "noopener,noreferrer") : window.location.assign(z);
                          },
                          variant: "solid",
                          colorScheme: "gray",
                          mt: 2,
                          alignSelf: "flex-start",
                          children: F.ctaLabel
                        }
                      ) : null
                    ]
                  }
                ),
                /* @__PURE__ */ m.jsx(
                  Ut,
                  {
                    order: i === "left" ? 1 : 0,
                    justify: "center",
                    align: "center",
                    flex: { base: "1 1 auto", md: (F == null ? void 0 : F.textEnabled) !== !1 ? "1 1 50%" : "1 1 100%" },
                    minW: { base: "100%", md: (F == null ? void 0 : F.textEnabled) !== !1 ? "50%" : "100%" },
                    children: F != null && F.imageUrl ? /* @__PURE__ */ m.jsx(
                      Ur,
                      {
                        src: F.imageUrl,
                        alt: F.alt || "banner",
                        objectFit: n || "cover",
                        maxH: { base: `${R}px`, md: `${se}px`, lg: `${$}px` }
                      }
                    ) : null
                  }
                )
              ]
            }
          ),
          p && g.length > 1 && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            /* @__PURE__ */ m.jsx(
              el,
              {
                "aria-label": "Previous",
                onClick: q,
                position: "absolute",
                top: "50%",
                left: 3,
                transform: "translateY(-50%)",
                variant: "ghost",
                color: "white",
                children: /* @__PURE__ */ m.jsx(rA, {})
              }
            ),
            /* @__PURE__ */ m.jsx(
              el,
              {
                "aria-label": "Next",
                onClick: G,
                position: "absolute",
                top: "50%",
                right: 3,
                transform: "translateY(-50%)",
                variant: "ghost",
                color: "white",
                children: /* @__PURE__ */ m.jsx(nA, {})
              }
            )
          ] }),
          c && g.length > 1 && /* @__PURE__ */ m.jsx(or, { direction: "row", gap: 2, position: "absolute", bottom: 4, left: "50%", transform: "translateX(-50%)", children: g.map((K, z) => /* @__PURE__ */ m.jsx(
            ht,
            {
              w: 2,
              h: 2,
              borderRadius: "full",
              bg: z === N ? "red.400" : "gray.500",
              cursor: "pointer",
              onClick: () => A(z)
            },
            z
          )) })
        ]
      }
    );
  }
}, TO = Ti(EO), AO = {
  label: "Hero Two Column",
  fields: {
    height: { type: "number", label: "Height (px)", min: 200, max: 900 },
    gap: { type: "number", label: "Gap", min: 0, max: 32 },
    leftWidth: {
      type: "object",
      label: "Left Width",
      objectFields: {
        base: { type: "text", label: "base", placeholder: "100%" },
        md: { type: "text", label: "md", placeholder: "30%" },
        lg: { type: "text", label: "lg", placeholder: "25%" }
      }
    },
    rightWidth: {
      type: "object",
      label: "Right Width",
      objectFields: {
        base: { type: "text", label: "base", placeholder: "100%" },
        md: { type: "text", label: "md", placeholder: "70%" },
        lg: { type: "text", label: "lg", placeholder: "75%" }
      }
    },
    leftScrollable: {
      type: "radio",
      label: "Left Scrollable",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    leftSticky: {
      type: "radio",
      label: "Left Sticky",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    stickyOffsetTop: { type: "number", label: "Sticky Offset Top (px)", min: 0, max: 200 },
    left: { type: "slot", label: "Left Slot (Categories)" },
    right: { type: "slot", label: "Right Slot (Banner)" }
  },
  defaultProps: {
    height: 360,
    gap: 4,
    leftWidth: { base: "100%", md: "30%", lg: "25%" },
    rightWidth: { base: "100%", md: "70%", lg: "75%" },
    leftScrollable: !1,
    leftSticky: !1,
    stickyOffsetTop: 0,
    left: [],
    right: []
  },
  render: ({ height: t, gap: i, leftWidth: l, rightWidth: n, leftScrollable: u, leftSticky: b, stickyOffsetTop: c, left: p, right: y, puck: x }) => {
    const S = p, C = y, M = !!(x != null && x.isEditing), N = Math.max(60, (t || 360) - 40), A = ui(() => l, [l]), I = ui(() => n, [n]);
    return /* @__PURE__ */ m.jsxs(
      Ut,
      {
        direction: { base: "column", md: "row" },
        gap: i,
        align: "stretch",
        w: "100%",
        minH: `${t}px`,
        style: { contain: "layout paint style" },
        children: [
          /* @__PURE__ */ m.jsx(
            ht,
            {
              minW: 0,
              flexBasis: A,
              flexGrow: 0,
              flexShrink: 0,
              minH: { base: `${t}px`, md: `${t}px` },
              position: !M && b ? "sticky" : void 0,
              top: !M && b ? `${c || 0}px` : void 0,
              transition: M ? "none" : "width 120ms ease-out",
              style: { contain: "layout paint style", willChange: M ? void 0 : "width" },
              children: /* @__PURE__ */ m.jsx(
                ht,
                {
                  overflowY: !M && u ? "auto" : "visible",
                  maxH: !M && u ? `${t}px` : void 0,
                  children: /* @__PURE__ */ m.jsx(S, { minEmptyHeight: N })
                }
              )
            }
          ),
          /* @__PURE__ */ m.jsx(
            ht,
            {
              minW: 0,
              flexBasis: I,
              flexGrow: 1,
              flexShrink: 1,
              minH: `${t}px`,
              transition: M ? "none" : "width 120ms ease-out",
              style: { contain: "layout paint style", willChange: M ? void 0 : "width" },
              children: /* @__PURE__ */ m.jsx(C, { minEmptyHeight: N })
            }
          )
        ]
      }
    );
  }
}, OO = Ti(AO), MO = {
  label: "Category List",
  fields: {
    title: { type: "text", label: "Title" },
    urlRedirect: { type: "text", label: "Url" },
    showAll: {
      type: "radio",
      label: "Show All",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    selectionMode: {
      type: "radio",
      label: "Selection Mode",
      options: [
        { label: "By Limit", value: "limit" },
        { label: "Pick Categories", value: "select" },
        { label: "Enter IDs", value: "ids" }
      ]
    },
    selectedCategories: {
      type: "custom",
      label: "Choose Categories",
      render: ty
    },
    categoryIds: { type: "text", label: "Category IDs (comma)" },
    limit: { type: "number", label: "Limit", min: 1, max: 30 },
    itemHeight: { type: "number", label: "Item Height (px)", min: 32, max: 72 },
    hoverSubmenu: {
      type: "radio",
      label: "Hover Submenu",
      options: [
        { label: "On", value: !0 },
        { label: "Off", value: !1 }
      ]
    },
    submenuWidth: {
      type: "number",
      label: "Submenu Width (px)",
      min: 160,
      max: 640
    }
  },
  defaultProps: {
    title: "",
    urlRedirect: "",
    showAll: !1,
    selectionMode: "limit",
    selectedCategories: [],
    categoryIds: "",
    limit: 10,
    itemHeight: 44,
    hoverSubmenu: !0,
    submenuWidth: 360
  },
  render: ({
    title: t,
    urlRedirect: i,
    showAll: l,
    selectionMode: n,
    selectedCategories: u = [],
    categoryIds: b,
    limit: c = 10,
    itemHeight: p = 44,
    hoverSubmenu: y,
    submenuWidth: x = 360,
    puck: S
  }) => {
    var se, $, K;
    const C = (($ = (se = import.meta) == null ? void 0 : se.env) == null ? void 0 : $.VITE_ENTITY_ID) || ((K = S == null ? void 0 : S.metadata) == null ? void 0 : K.entityId) || "", { data: M } = ey(
      {
        storeId: C,
        limit: l || n !== "limit" ? void 0 : c
      },
      {
        enabled: !!C,
        // Force fetch when component mounts in editor (no cache reuse)
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnWindowFocus: !1,
        placeholderData: void 0
      }
    ), [N, A] = Rt(null), [I, g] = Rt(null), G = ((M == null ? void 0 : M.data) || []).map((z) => {
      const pe = (z == null ? void 0 : z.id) ?? (z == null ? void 0 : z.entityId) ?? (z == null ? void 0 : z.value) ?? (z == null ? void 0 : z._id) ?? (z == null ? void 0 : z.code) ?? (z == null ? void 0 : z.slug), Me = (z == null ? void 0 : z.name) ?? (z == null ? void 0 : z.label) ?? (z == null ? void 0 : z.title) ?? (z == null ? void 0 : z.slug) ?? (z == null ? void 0 : z.code) ?? (z == null ? void 0 : z.displayName) ?? (z == null ? void 0 : z.text);
      return {
        id: pe != null ? String(pe) : "",
        name: Me ? String(Me) : pe != null ? String(pe) : "",
        icon: z == null ? void 0 : z.icon
      };
    }).filter((z) => z.id !== ""), q = ((u == null ? void 0 : u.length) || 0) > 0 && n !== "ids" ? "select" : n, F = ui(() => q === "select" && (u != null && u.length) ? u : q === "ids" && b ? b.split(",").map((pe) => pe.trim()).filter(Boolean).map((pe) => {
      const Me = G.find(
        (Ye) => String(Ye.id ?? Ye.entityId ?? Ye.value) === String(pe)
      );
      return { id: pe, name: (Me == null ? void 0 : Me.name) || pe, icon: Me == null ? void 0 : Me.icon };
    }) : l ? G : G.slice(0, c), [
      l,
      q,
      u,
      b,
      G,
      c
    ]), ue = async () => {
      if (!(I || !y))
        try {
          const z = await zm({ storeId: C });
          g((z == null ? void 0 : z.data) || []);
        } catch {
          g([]);
        }
    }, R = (z) => {
      if (!I) return [];
      const pe = (Ye) => {
        for (const Ae of Ye) {
          if (String(Ae.id) === String(z)) return Ae;
          const He = Ae.children && pe(Ae.children);
          if (He) return He;
        }
        return null;
      }, Me = pe(I);
      return ((Me == null ? void 0 : Me.children) || []).map((Ye) => ({
        id: String(Ye.id),
        name: String(Ye.name || "")
      }));
    };
    return /* @__PURE__ */ m.jsxs(
      ht,
      {
        position: "relative",
        bg: "white",
        border: "1px solid",
        borderColor: "gray.200",
        borderRadius: "md",
        overflow: "hidden",
        children: [
          t ? /* @__PURE__ */ m.jsx(
            ht,
            {
              px: 3,
              py: 2,
              borderBottom: "1px solid",
              borderColor: "gray.200",
              fontWeight: "semibold",
              children: t
            }
          ) : null,
          /* @__PURE__ */ m.jsx(or, { gap: 0, children: F.map((z) => /* @__PURE__ */ m.jsxs(
            ht,
            {
              onClick: (pe) => {
                if (S != null && S.isEditing) return pe.preventDefault();
                const Me = nc(i, z);
                Me && (String(Me).startsWith("http") ? window.open(String(Me), "_blank", "noopener,noreferrer") : window.location.assign(String(Me)));
              },
              _hover: { textDecoration: "none", bg: "gray.50" },
              px: 3,
              h: `${p}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              onMouseEnter: async () => {
                A(z.id), await ue();
              },
              onMouseLeave: () => A((pe) => pe === z.id ? null : pe),
              children: [
                /* @__PURE__ */ m.jsx(Tt, { color: "gray.800", fontSize: "sm", children: z.name }),
                /* @__PURE__ */ m.jsx(Ws, { as: Xm, color: "gray.400" }),
                y && N === z.id && R(z.id).length > 0 && /* @__PURE__ */ m.jsx(
                  ht,
                  {
                    position: "absolute",
                    top: 0,
                    left: "100%",
                    w: `${x}px`,
                    bg: "white",
                    border: "1px solid",
                    borderColor: "gray.200",
                    borderRadius: "md",
                    boxShadow: "md",
                    zIndex: 10,
                    children: /* @__PURE__ */ m.jsx(or, { gap: 0, py: 2, children: R(z.id).map((pe) => /* @__PURE__ */ m.jsx(
                      ht,
                      {
                        onClick: (Me) => {
                          if (S != null && S.isEditing) return Me.preventDefault();
                          const Ye = nc(i, pe);
                          Ye && (String(Ye).startsWith("http") ? window.open(
                            String(Ye),
                            "_blank",
                            "noopener,noreferrer"
                          ) : window.location.assign(String(Ye)));
                        },
                        _hover: { textDecoration: "none", bg: "gray.50" },
                        px: 3,
                        h: `${p - 6}px`,
                        display: "flex",
                        alignItems: "center",
                        children: /* @__PURE__ */ m.jsx(Tt, { color: "gray.700", fontSize: "sm", children: pe.name })
                      },
                      String(pe.id)
                    )) })
                  }
                )
              ]
            },
            String(z.id)
          )) })
        ]
      }
    );
  }
}, DO = Ti(MO), LO = {
  label: "Header",
  fields: {
    logoType: {
      type: "radio",
      label: "Logo Type",
      options: [
        { label: "Text", value: "text" },
        { label: "Image", value: "image" }
      ]
    },
    logoText: { type: "text", label: "Logo Text" },
    logoImageUrl: { type: "text", label: "Logo Image URL" },
    navLinks: {
      type: "array",
      label: "Navigation Links",
      arrayFields: {
        label: { type: "text", label: "Label", contentEditable: !0 },
        href: { type: "text", label: "Href" }
      },
      defaultItemProps: { label: "Item", href: "#" }
    },
    showSearch: {
      type: "radio",
      label: "Show Search",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    searchVariableName: { type: "text", label: "Search Variable Name" },
    searchPlaceholder: { type: "text", label: "Search Placeholder" },
    showWishlist: {
      type: "radio",
      label: "Show Wishlist",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    showCart: {
      type: "radio",
      label: "Show Cart",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    sticky: {
      type: "radio",
      label: "Sticky",
      options: [
        { label: "On", value: !0 },
        { label: "Off", value: !1 }
      ]
    },
    stickyOffset: {
      type: "number",
      label: "Sticky Offset (px)",
      min: 0,
      max: 120
    },
    actionsSlot: { type: "slot", label: "Actions Slot (right)" }
  },
  defaultProps: {
    logoType: "text",
    logoText: "Exclusive",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact" },
      { label: "About", href: "/about" },
      { label: "Sign Up", href: "/signup" }
    ],
    showSearch: !0,
    searchVariableName: "searchQuery",
    searchPlaceholder: "What are you looking for?",
    showWishlist: !0,
    showCart: !0,
    sticky: !0,
    stickyOffset: 0,
    actionsSlot: []
  },
  render: ({
    logoType: t,
    logoText: i,
    logoImageUrl: l,
    navLinks: n = [],
    showSearch: u,
    searchVariableName: b,
    searchPlaceholder: c,
    showWishlist: p,
    showCart: y,
    sticky: x,
    stickyOffset: S,
    puck: C,
    actionsSlot: M
  }) => {
    var bt;
    const N = !!(C != null && C.isEditing), [A, I] = Aa(Yn), g = rh(bo), G = "productCart", q = ui(() => {
      const Ce = typeof window < "u" ? JSON.parse(localStorage.getItem(G) || "[]") : [], Fe = (g == null ? void 0 : g[G]) || [];
      return (Fe == null ? void 0 : Fe.length) || (Ce == null ? void 0 : Ce.length) || 0;
    }, [g]), [F, ue] = Aa(Dc), [R, se] = Rt(!1), [$, K] = Rt(!1), z = () => {
      N || ue(!0);
    }, pe = () => {
      N || se(!0);
    }, Me = b || "searchQuery", [Ye, Ae] = Rt(
      (A == null ? void 0 : A[Me]) || ""
    ), He = Xs(
      hi.debounce((Ce) => {
        I((Fe) => ({ ...Fe, [Me]: Ce }));
      }, 300)
    );
    return Xt(() => {
      Ae((A == null ? void 0 : A[Me]) || "");
    }, [A, Me]), Xt(() => {
      if (!x || N) return;
      const Ce = () => {
        const Fe = window.scrollY || 0;
        K(Fe > (S || 0));
      };
      return Ce(), window.addEventListener("scroll", Ce, { passive: !0 }), () => window.removeEventListener("scroll", Ce);
    }, [x, S, N]), /* @__PURE__ */ m.jsxs(
      ht,
      {
        position: x && !N ? "sticky" : void 0,
        top: x && !N ? `${S || 0}px` : void 0,
        bg: "white",
        zIndex: 100,
        borderBottom: "1px solid",
        borderColor: "gray.200",
        boxShadow: $ ? "sm" : "none",
        style: {
          contain: "layout paint style",
          backdropFilter: $ ? "blur(6px)" : void 0
        },
        children: [
          /* @__PURE__ */ m.jsxs(
            Ut,
            {
              align: "center",
              justify: "space-between",
              px: { base: 3, md: 6 },
              py: 3,
              gap: 4,
              transition: "background-color 120ms ease, box-shadow 120ms ease",
              children: [
                /* @__PURE__ */ m.jsxs(Ut, { minW: { base: "auto", md: "200px" }, align: "center", gap: 2, children: [
                  /* @__PURE__ */ m.jsx(
                    el,
                    {
                      "aria-label": "Menu",
                      variant: "ghost",
                      display: { base: "inline-flex", md: "none" },
                      onClick: pe,
                      children: /* @__PURE__ */ m.jsx(dA, {})
                    }
                  ),
                  t === "image" && l ? /* @__PURE__ */ m.jsx(Ur, { src: l, alt: i || "Logo", h: 6 }) : /* @__PURE__ */ m.jsx(Tt, { fontWeight: "bold", fontSize: { base: "lg", md: "xl" }, children: i })
                ] }),
                /* @__PURE__ */ m.jsx(
                  Ut,
                  {
                    display: { base: "none", md: "flex" },
                    align: "center",
                    gap: 6,
                    flex: 1,
                    justify: "center",
                    children: n.map((Ce, Fe) => /* @__PURE__ */ m.jsx(
                      $n,
                      {
                        href: N ? void 0 : Ce.href,
                        onClick: (Te) => N && Te.preventDefault(),
                        color: "gray.800",
                        _hover: {
                          textDecoration: "none",
                          borderBottom: "1px solid",
                          borderColor: "gray.300"
                        },
                        pb: 1,
                        children: Ce.label
                      },
                      `${Ce.label}-${Fe}`
                    ))
                  }
                ),
                /* @__PURE__ */ m.jsxs(
                  Ut,
                  {
                    align: "center",
                    gap: 3,
                    minW: { base: "auto", md: "220px" },
                    justify: "flex-end",
                    children: [
                      u ? /* @__PURE__ */ m.jsxs(
                        Ut,
                        {
                          align: "center",
                          bg: "gray.100",
                          px: 2,
                          py: 1,
                          borderRadius: "md",
                          gap: 1,
                          minW: { base: "auto", md: "280px" },
                          style: { transition: "width 120ms ease", willChange: "width" },
                          children: [
                            /* @__PURE__ */ m.jsx(
                              qn,
                              {
                                size: "sm",
                                variant: "subtle",
                                placeholder: c || "Search",
                                value: Ye,
                                onChange: (Ce) => {
                                  const Fe = Ce.target.value;
                                  Ae(Fe), He.current(Fe);
                                }
                              }
                            ),
                            /* @__PURE__ */ m.jsx(el, { size: "sm", "aria-label": "Search", variant: "ghost", children: /* @__PURE__ */ m.jsx(Rv, {}) })
                          ]
                        }
                      ) : null,
                      M ? /* @__PURE__ */ m.jsx(M, { minEmptyHeight: 36 }) : null,
                      p ? /* @__PURE__ */ m.jsx(el, { "aria-label": "Wishlist", variant: "ghost", children: /* @__PURE__ */ m.jsx(cA, {}) }) : null,
                      y ? /* @__PURE__ */ m.jsxs(ht, { position: "relative", children: [
                        /* @__PURE__ */ m.jsx(
                          el,
                          {
                            "aria-label": "Cart",
                            variant: "ghost",
                            onClick: z,
                            children: /* @__PURE__ */ m.jsx($m, {})
                          }
                        ),
                        q > 0 ? /* @__PURE__ */ m.jsx(
                          Dd,
                          {
                            position: "absolute",
                            top: "-2px",
                            right: "-2px",
                            colorPalette: "red",
                            minW: "18px",
                            h: "18px",
                            px: "1",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "full",
                            fontSize: "xs",
                            children: q
                          }
                        ) : null
                      ] }) : null
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ m.jsxs(
            Gt.Root,
            {
              placement: "end",
              size: "md",
              open: F,
              onOpenChange: (Ce) => {
                const Fe = typeof Ce == "boolean" ? Ce : Ce == null ? void 0 : Ce.open;
                ue(!!Fe);
              },
              children: [
                /* @__PURE__ */ m.jsx(Gt.Backdrop, {}),
                /* @__PURE__ */ m.jsx(Gt.Positioner, { children: /* @__PURE__ */ m.jsxs(Gt.Content, { children: [
                  /* @__PURE__ */ m.jsx(Gt.Header, { children: "Cart" }),
                  /* @__PURE__ */ m.jsx(Gt.CloseTrigger, {}),
                  /* @__PURE__ */ m.jsx(Gt.Body, { children: /* @__PURE__ */ m.jsx(
                    Jm,
                    {
                      limit: 10,
                      noResultsText: "No items",
                      urlToProduct: "/",
                      storeId: (bt = C == null ? void 0 : C.metadata) == null ? void 0 : bt.storeId
                    }
                  ) })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ m.jsxs(
            Gt.Root,
            {
              placement: "start",
              size: "xs",
              open: R,
              onOpenChange: (Ce) => se(!!(typeof Ce == "boolean" ? Ce : Ce != null && Ce.open)),
              children: [
                /* @__PURE__ */ m.jsx(Gt.Backdrop, {}),
                /* @__PURE__ */ m.jsx(Gt.Positioner, { children: /* @__PURE__ */ m.jsxs(Gt.Content, { children: [
                  /* @__PURE__ */ m.jsx(Gt.Header, { children: "Menu" }),
                  /* @__PURE__ */ m.jsx(Gt.CloseTrigger, {}),
                  /* @__PURE__ */ m.jsx(Gt.Body, { children: /* @__PURE__ */ m.jsxs(Ut, { direction: "column", gap: 3, children: [
                    u ? /* @__PURE__ */ m.jsxs(
                      Ut,
                      {
                        align: "center",
                        bg: "gray.100",
                        px: 2,
                        py: 1,
                        borderRadius: "md",
                        gap: 1,
                        children: [
                          /* @__PURE__ */ m.jsx(
                            qn,
                            {
                              size: "sm",
                              variant: "subtle",
                              placeholder: c || "Search",
                              value: Ye,
                              onChange: (Ce) => {
                                const Fe = Ce.target.value;
                                Ae(Fe), He.current(Fe);
                              }
                            }
                          ),
                          /* @__PURE__ */ m.jsx(el, { size: "sm", "aria-label": "Search", variant: "ghost", children: /* @__PURE__ */ m.jsx(Rv, {}) })
                        ]
                      }
                    ) : null,
                    n.map((Ce, Fe) => /* @__PURE__ */ m.jsx(
                      $n,
                      {
                        href: N ? void 0 : Ce.href,
                        onClick: (Te) => {
                          if (N) {
                            Te.preventDefault();
                            return;
                          }
                          se(!1);
                        },
                        color: "gray.800",
                        _hover: { textDecoration: "none" },
                        py: 2,
                        borderBottom: "1px solid",
                        borderColor: "gray.100",
                        children: Ce.label
                      },
                      `${Ce.label}-${Fe}`
                    ))
                  ] }) })
                ] }) })
              ]
            }
          )
        ]
      }
    );
  }
}, NO = Ti(LO), IO = {
  label: "Footer",
  fields: {
    columns: {
      type: "array",
      label: "Columns",
      min: 1,
      arrayFields: {
        title: { type: "text", label: "Title" },
        links: {
          type: "array",
          label: "Links",
          arrayFields: {
            label: { type: "text", label: "Label", contentEditable: !0 },
            href: { type: "text", label: "Href" }
          },
          defaultItemProps: { label: "Link", href: "#" }
        }
      },
      defaultItemProps: { title: "Column", links: [] }
    },
    showNewsletter: { type: "radio", label: "Newsletter", options: [
      { label: "On", value: !0 },
      { label: "Off", value: !1 }
    ] },
    newsletterPlaceholder: { type: "text", label: "Newsletter Placeholder" },
    showSocial: { type: "radio", label: "Social Icons", options: [
      { label: "On", value: !0 },
      { label: "Off", value: !1 }
    ] },
    socialLinks: {
      type: "array",
      label: "Social Links",
      arrayFields: {
        platform: {
          type: "select",
          label: "Platform",
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "Twitter/X", value: "twitter" },
            { label: "YouTube", value: "youtube" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "GitHub", value: "github" }
          ]
        },
        href: { type: "text", label: "URL" }
      },
      defaultItemProps: { platform: "facebook", href: "https://facebook.com" }
    }
  },
  defaultProps: {
    columns: [
      { title: "Shop", links: [{ label: "New Arrivals", href: "/" }, { label: "Best Sellers", href: "/" }] },
      { title: "Support", links: [{ label: "Contact", href: "/contact" }, { label: "FAQ", href: "/faq" }] }
    ],
    showNewsletter: !0,
    newsletterPlaceholder: "Enter your email",
    showSocial: !0,
    socialLinks: [
      { platform: "facebook", href: "https://facebook.com" },
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "twitter", href: "https://twitter.com" }
    ]
  },
  render: ({ columns: t, showNewsletter: i, newsletterPlaceholder: l, showSocial: n, socialLinks: u = [], puck: b }) => {
    const c = !!(b != null && b.isEditing), p = {
      facebook: oA,
      instagram: bA,
      twitter: Cv,
      youtube: gA,
      linkedin: fA,
      github: uA
    };
    return /* @__PURE__ */ m.jsxs(ht, { bg: "gray.50", borderTop: "1px solid", borderColor: "gray.200", py: 8, px: { base: 4, md: 8 }, children: [
      /* @__PURE__ */ m.jsxs(Ut, { direction: { base: "column", md: "row" }, gap: 8, justify: "space-between", children: [
        /* @__PURE__ */ m.jsx(Ut, { gap: 8, wrap: "wrap", flex: 1, children: t == null ? void 0 : t.map((y, x) => /* @__PURE__ */ m.jsxs(or, { minW: { base: "40%", md: "200px" }, children: [
          y.title ? /* @__PURE__ */ m.jsx(Tt, { fontWeight: "semibold", children: y.title }) : null,
          (y.links || []).map((S, C) => /* @__PURE__ */ m.jsx($n, { href: c ? void 0 : S.href, onClick: (M) => c && M.preventDefault(), color: "gray.700", children: S.label }, C))
        ] }, x)) }),
        /* @__PURE__ */ m.jsxs(or, { minW: { base: "100%", md: "320px" }, children: [
          i ? /* @__PURE__ */ m.jsxs(Ut, { align: "center", gap: 2, children: [
            /* @__PURE__ */ m.jsx(qn, { placeholder: l || "Email" }),
            /* @__PURE__ */ m.jsx(el, { "aria-label": "Subscribe", children: "Go" })
          ] }) : null,
          n ? /* @__PURE__ */ m.jsx(Ut, { gap: 2, children: u.filter((y) => !!(y != null && y.href) && !!(y != null && y.platform)).map((y, x) => {
            const S = p[y.platform] || Cv;
            return /* @__PURE__ */ m.jsx(
              el,
              {
                "aria-label": y.platform,
                onClick: () => {
                  !c && y.href && window.open(y.href, "_blank", "noopener,noreferrer");
                },
                children: /* @__PURE__ */ m.jsx(S, {})
              },
              `${y.platform}-${x}`
            );
          }) }) : null
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs(Tt, { mt: 6, color: "gray.500", fontSize: "sm", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Your Store"
      ] })
    ] });
  }
}, PO = Ti(IO), jO = ({ name: t, value: i, onChange: l }) => {
  const [n, u] = Rt([]), [b, c] = Rt("");
  return Xt(() => {
    const p = new AbortController(), y = "1791381b-a6b0-4771-a441-8b180392bf0a";
    return (async () => {
      try {
        const x = await jd({ storeId: y, query: b, limit: 20, page: 1 }, p.signal), S = Array.isArray(x == null ? void 0 : x.data) ? x.data : [];
        u(S.map((C) => ({ id: String(C.id), name: String(C.name || "") })));
      } catch {
      }
    })(), () => p.abort();
  }, [b]), /* @__PURE__ */ m.jsx(zr, { label: "Product", children: /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search...",
        value: b,
        onChange: (p) => c(p.target.value),
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 },
        name: `${t}__search`
      }
    ),
    /* @__PURE__ */ m.jsxs(
      "select",
      {
        name: t,
        value: i || "",
        onChange: (p) => l(p.target.value || void 0),
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 },
        children: [
          /* @__PURE__ */ m.jsx("option", { value: "", children: "-- Select --" }),
          n.map((p) => /* @__PURE__ */ m.jsx("option", { value: p.id, children: p.name }, p.id))
        ]
      }
    )
  ] }) });
}, FO = {
  label: "Product Detail",
  fields: {
    productId: { type: "custom", label: "Product", render: jO },
    showBreadcrumbs: { type: "radio", label: "Show Breadcrumbs", options: [{ label: "Yes", value: !0 }, { label: "No", value: !1 }] },
    showCompareAtPrice: { type: "radio", label: "Show Compare-at Price", options: [{ label: "Yes", value: !0 }, { label: "No", value: !1 }] },
    showStockState: { type: "radio", label: "Show Stock State", options: [{ label: "Yes", value: !0 }, { label: "No", value: !1 }] },
    lowStockThreshold: { type: "number", label: "Low Stock Threshold", min: 0, max: 100 },
    variantSelectorStyle: { type: "select", label: "Variant Selector", options: [{ label: "Dropdown", value: "dropdown" }, { label: "Swatch", value: "swatch" }] },
    showQuantity: { type: "radio", label: "Show Quantity", options: [{ label: "Yes", value: !0 }, { label: "No", value: !1 }] },
    enableStickyATC: { type: "radio", label: "Sticky Add To Cart", options: [{ label: "Yes", value: !0 }, { label: "No", value: !1 }] },
    enableJsonLd: { type: "radio", label: "Enable JSON-LD", options: [{ label: "Yes", value: !0 }, { label: "No", value: !1 }] },
    enableThumbnails: { type: "radio", label: "Show Thumbnails", options: [{ label: "Yes", value: !0 }, { label: "No", value: !1 }] },
    enableZoom: { type: "radio", label: "Enable Zoom Cursor", options: [{ label: "Yes", value: !0 }, { label: "No", value: !1 }] }
  },
  defaultProps: {
    productId: "",
    showBreadcrumbs: !0,
    showCompareAtPrice: !0,
    showStockState: !0,
    lowStockThreshold: 5,
    variantSelectorStyle: "dropdown",
    showQuantity: !0,
    enableStickyATC: !0,
    enableJsonLd: !0,
    enableThumbnails: !0,
    enableZoom: !1
  },
  render: ({ productId: t, showBreadcrumbs: i, showCompareAtPrice: l, showStockState: n, lowStockThreshold: u, variantSelectorStyle: b, showQuantity: c, enableStickyATC: p, enableJsonLd: y, enableThumbnails: x, enableZoom: S, puck: C }) => {
    var Te;
    const M = ed("select"), N = t || "", { data: A, isLoading: I } = jg(N, { isGettingModels: !0, isGettingDefaultModel: !0 }), g = A || {}, [G, q] = Rt(null), [F, ue] = Rt(null), [R, se] = Rt(1), [$, K] = Rt(0);
    if (!N)
      return /* @__PURE__ */ m.jsx(ht, { children: "Choose a product" });
    if (I)
      return /* @__PURE__ */ m.jsx(Hu, { h: "400px" });
    Xt(() => {
      const de = typeof window < "u" ? new URLSearchParams(window.location.search) : null, re = de == null ? void 0 : de.get("variant"), ve = Array.isArray(g == null ? void 0 : g.models) ? g.models : [], ne = ve.find((J) => String((J == null ? void 0 : J.id) ?? (J == null ? void 0 : J.entityId)) === String(re)) || (g == null ? void 0 : g.defaultModel) || (ve == null ? void 0 : ve[0]) || null;
      ue(ne);
    }, [g]);
    const z = ui(() => Number((F == null ? void 0 : F.price) ?? (g == null ? void 0 : g.price) ?? 0), [F, g]), pe = ui(() => Number((F == null ? void 0 : F.onlinePrice) ?? (g == null ? void 0 : g.onlinePrice) ?? z), [F, g, z]), Me = pe < z, Ye = hi.round((Me ? pe : z) / 100, 0), Ae = hi.round(z / 100, 0), bt = (() => {
      var ve;
      const de = (g == null ? void 0 : g.remainedQuantity) ?? (F == null ? void 0 : F.remainedQuantity);
      if (typeof de == "number") return de;
      const re = Array.isArray(g == null ? void 0 : g.models) ? g.models : [];
      return re.length > 0 ? re.some((B) => Number(B == null ? void 0 : B.status) === 1) ? 999 : 0 : g != null && g.defaultModel ? Number((ve = g == null ? void 0 : g.defaultModel) == null ? void 0 : ve.status) === 1 ? 999 : 0 : typeof (g == null ? void 0 : g.statusId) == "number" ? Number(g.statusId) === 1 ? 999 : 0 : 999;
    })(), Ce = Array.isArray(g == null ? void 0 : g.images) && g.images.length ? g.images.map((de) => de.url) : [g == null ? void 0 : g.image].filter(Boolean), Fe = (de) => {
      if (typeof window > "u") return;
      const re = new URL(window.location.href);
      (de == null ? void 0 : de.id) ?? (de == null ? void 0 : de.entityId) ? re.searchParams.set("variant", String(de.id ?? de.entityId)) : re.searchParams.delete("variant"), window.history.replaceState({}, "", re.toString());
    };
    return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      i && /* @__PURE__ */ m.jsxs(ht, { mb: 3, color: "gray.600", fontSize: "sm", children: [
        "Home",
        " / ",
        ((Te = g == null ? void 0 : g.category) == null ? void 0 : Te.name) || "Category",
        " / ",
        g == null ? void 0 : g.name
      ] }),
      /* @__PURE__ */ m.jsxs(Ut, { direction: { base: "column", md: "row" }, gap: 6, children: [
        /* @__PURE__ */ m.jsxs(ht, { flex: { base: "1 1 auto", md: "1 1 50%" }, children: [
          /* @__PURE__ */ m.jsx(
            Ur,
            {
              src: (Ce == null ? void 0 : Ce[$]) || "https://via.placeholder.com/800x600",
              alt: g == null ? void 0 : g.name,
              borderRadius: "md",
              loading: "lazy",
              style: S ? { cursor: "zoom-in" } : void 0
            }
          ),
          x && Ce.length > 1 && /* @__PURE__ */ m.jsx(oc, { columns: { base: 4, md: 6 }, gap: 2, mt: 2, children: Ce.map((de, re) => /* @__PURE__ */ m.jsx(
            Ur,
            {
              src: de,
              alt: `${g == null ? void 0 : g.name}-${re}`,
              borderRadius: "md",
              opacity: re === $ ? 1 : 0.7,
              onClick: () => K(re),
              style: { cursor: "pointer" },
              loading: "lazy"
            },
            re
          )) })
        ] }),
        /* @__PURE__ */ m.jsxs(ht, { flex: { base: "1 1 auto", md: "1 1 50%" }, children: [
          /* @__PURE__ */ m.jsx(Tt, { fontSize: "2xl", fontWeight: "semibold", children: g == null ? void 0 : g.name }),
          /* @__PURE__ */ m.jsxs(ht, { mt: 2, display: "flex", alignItems: "baseline", gap: 2, children: [
            /* @__PURE__ */ m.jsxs(Tt, { fontSize: "xl", color: Me ? "red.500" : void 0, children: [
              "$",
              Ye
            ] }),
            l && Me && /* @__PURE__ */ m.jsxs(Tt, { fontSize: "sm", color: "gray.500", textDecoration: "line-through", children: [
              "$",
              Ae
            ] })
          ] }),
          Array.isArray(g == null ? void 0 : g.models) && g.models.length > 0 && /* @__PURE__ */ m.jsxs(ht, { mt: 4, children: [
            /* @__PURE__ */ m.jsx(Tt, { fontSize: "sm", color: "gray.600", children: "Variant" }),
            b === "swatch" ? /* @__PURE__ */ m.jsx(Ut, { gap: 2, wrap: "wrap", mt: 2, children: g.models.map((de, re) => {
              const ve = String((de == null ? void 0 : de.id) ?? (de == null ? void 0 : de.entityId) ?? re), B = String((F == null ? void 0 : F.id) ?? (F == null ? void 0 : F.entityId)) === ve;
              return /* @__PURE__ */ m.jsx(
                dl,
                {
                  size: "sm",
                  variant: B ? "solid" : "outline",
                  onClick: () => {
                    ue(de), Fe(de);
                  },
                  children: (de == null ? void 0 : de.name) || (de == null ? void 0 : de.title) || (de == null ? void 0 : de.sku) || `#${re + 1}`
                },
                ve
              );
            }) }) : /* @__PURE__ */ m.jsx(
              M,
              {
                mt: 2,
                value: String((F == null ? void 0 : F.id) ?? (F == null ? void 0 : F.entityId) ?? ""),
                onChange: (de) => {
                  const re = de.target.value, ve = (g.models || []).find((B) => String((B == null ? void 0 : B.id) ?? (B == null ? void 0 : B.entityId)) === re);
                  ue(ve), Fe(ve);
                },
                children: (g.models || []).map((de, re) => /* @__PURE__ */ m.jsx("option", { value: String((de == null ? void 0 : de.id) ?? (de == null ? void 0 : de.entityId) ?? ""), children: (de == null ? void 0 : de.name) || (de == null ? void 0 : de.title) || (de == null ? void 0 : de.sku) || `Variant #${re + 1}` }, String((de == null ? void 0 : de.id) ?? (de == null ? void 0 : de.entityId) ?? re)))
              }
            )
          ] }),
          n && /* @__PURE__ */ m.jsx(ht, { mt: 3, fontSize: "sm", color: bt <= 0 ? "red.600" : bt <= (u ?? 0) ? "orange.600" : "green.600", children: bt <= 0 ? "Out of stock" : bt <= (u ?? 0) ? `Low stock (${bt})` : "In stock" }),
          c && /* @__PURE__ */ m.jsx(ht, { mt: 3, children: /* @__PURE__ */ m.jsxs(ca.Root, { min: 1, max: 99, value: String(R), onValueChange: (de) => se((de == null ? void 0 : de.valueAsNumber) || 1), width: "120px", children: [
            /* @__PURE__ */ m.jsx(ca.Control, {}),
            /* @__PURE__ */ m.jsx(ca.Input, {})
          ] }) }),
          /* @__PURE__ */ m.jsx(dl, { mt: 4, colorPalette: "orange", onClick: () => q({ ...g, selectedModel: F, quantity: R }), disabled: !!(C != null && C.isEditing) || bt <= 0, children: "Add to cart" }),
          /* @__PURE__ */ m.jsx(ht, { mt: 4, color: "gray.700", children: /* @__PURE__ */ m.jsx("div", { dangerouslySetInnerHTML: { __html: (g == null ? void 0 : g.descriptions) || "" } }) }),
          /* @__PURE__ */ m.jsx(
            Vm,
            {
              openDrawer: !!G,
              product: G,
              keyAddToCart: "productCart",
              saveCartToStore: () => q(null),
              onCloseDrawer: () => q(null)
            }
          )
        ] })
      ] }),
      p && !(C != null && C.isEditing) && /* @__PURE__ */ m.jsxs(Ut, { position: "fixed", bottom: 0, left: 0, right: 0, bg: "white", borderTop: "1px solid", borderColor: "gray.200", p: 3, align: "center", justify: "space-between", zIndex: 20, children: [
        /* @__PURE__ */ m.jsx(Tt, { fontWeight: "medium", children: g == null ? void 0 : g.name }),
        /* @__PURE__ */ m.jsxs(Ut, { align: "center", gap: 3, children: [
          /* @__PURE__ */ m.jsxs(Tt, { fontSize: "lg", children: [
            "$",
            Ye
          ] }),
          /* @__PURE__ */ m.jsx(dl, { size: "sm", colorPalette: "orange", onClick: () => q({ ...g, selectedModel: F, quantity: R }), disabled: bt <= 0, children: "Add to cart" })
        ] })
      ] }),
      y && /* @__PURE__ */ m.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: g == null ? void 0 : g.name,
          image: Ce,
          description: g == null ? void 0 : g.descriptions,
          sku: g == null ? void 0 : g.sku,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: (Me ? pe : z) / 100,
            availability: bt > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
          }
        })
      } })
    ] });
  }
}, UO = Ti(FO), BO = {
  label: "Facet Controls",
  fields: {
    bindSortVariableName: { type: "text", label: "Sort Variable Name" },
    bindHideOutOfStockVariableName: { type: "text", label: "Hide OOS Var Name" },
    bindFiltersVariableName: { type: "text", label: "Filters Var Name" }
  },
  defaultProps: {
    bindSortVariableName: "products.sortBy",
    bindHideOutOfStockVariableName: "products.hideOutOfStock",
    bindFiltersVariableName: "products.filters"
  },
  inline: !0,
  render: ({ bindSortVariableName: t, bindHideOutOfStockVariableName: i, bindFiltersVariableName: l }) => {
    const n = ed("select"), u = ed("input"), [b, c] = Aa(Yn), p = (b == null ? void 0 : b[t || "products.sortBy"]) || "featured", y = !!(b != null && b[i || "products.hideOutOfStock"]), x = (b == null ? void 0 : b[l || "products.filters"]) || {}, S = (x == null ? void 0 : x.priceMin) ?? "", C = (x == null ? void 0 : x.priceMax) ?? "";
    return /* @__PURE__ */ m.jsxs(Ut, { align: "center", gap: 4, wrap: "wrap", children: [
      /* @__PURE__ */ m.jsxs(Ut, { align: "center", gap: 2, children: [
        /* @__PURE__ */ m.jsx(Tt, { children: "Sort:" }),
        /* @__PURE__ */ m.jsxs(
          n,
          {
            padding: "6px",
            border: "1px solid",
            borderColor: "gray.200",
            borderRadius: "md",
            value: p,
            onChange: (M) => c((N) => ({ ...N, [t || "products.sortBy"]: M.target.value })),
            children: [
              /* @__PURE__ */ m.jsx("option", { value: "featured", children: "Featured" }),
              /* @__PURE__ */ m.jsx("option", { value: "newest", children: "Newest" }),
              /* @__PURE__ */ m.jsx("option", { value: "priceAsc", children: "Price: Low to High" }),
              /* @__PURE__ */ m.jsx("option", { value: "priceDesc", children: "Price: High to Low" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ m.jsxs(Ut, { align: "center", gap: 2, children: [
        /* @__PURE__ */ m.jsx(Tt, { children: "Hide OOS" }),
        /* @__PURE__ */ m.jsx(
          u,
          {
            type: "checkbox",
            checked: y,
            onChange: (M) => c((N) => ({ ...N, [i || "products.hideOutOfStock"]: !!M.target.checked }))
          }
        )
      ] }),
      /* @__PURE__ */ m.jsxs(Ut, { align: "center", gap: 2, children: [
        /* @__PURE__ */ m.jsx(Tt, { children: "Price" }),
        /* @__PURE__ */ m.jsx(
          qn,
          {
            size: "sm",
            type: "number",
            placeholder: "Min",
            value: S,
            onChange: (M) => c((N) => ({
              ...N,
              [l || "products.filters"]: {
                ...(N || {})[l || "products.filters"] || {},
                priceMin: M.target.value === "" ? void 0 : Number(M.target.value)
              }
            })),
            width: "90px"
          }
        ),
        /* @__PURE__ */ m.jsx(Tt, { children: "-" }),
        /* @__PURE__ */ m.jsx(
          qn,
          {
            size: "sm",
            type: "number",
            placeholder: "Max",
            value: C,
            onChange: (M) => c((N) => ({
              ...N,
              [l || "products.filters"]: {
                ...(N || {})[l || "products.filters"] || {},
                priceMax: M.target.value === "" ? void 0 : Number(M.target.value)
              }
            })),
            width: "90px"
          }
        )
      ] }),
      /* @__PURE__ */ m.jsx(
        dl,
        {
          size: "sm",
          variant: "outline",
          onClick: () => c((M) => ({
            ...M,
            [l || "products.filters"]: {}
          })),
          children: "Clear filters"
        }
      )
    ] });
  }
}, WO = Ti(BO), qO = {
  label: "Qr Code",
  fields: {
    size: {
      label: "Size",
      type: "select",
      labelIcon: /* @__PURE__ */ m.jsx(ac, { size: 16 }),
      options: [
        { label: "2Xs", value: "2xs" },
        { label: "Xs", value: "xs" },
        { label: "Sm", value: "sm" },
        { label: "Md", value: "md" },
        { label: "Lg", value: "lg" },
        { label: "Xl", value: "xl" },
        { label: "2Xl", value: "2xl" }
      ]
    },
    color: {
      label: "Color",
      ...ur
    },
    content: {
      label: "Content",
      type: "text"
    }
  },
  defaultProps: {
    size: "md",
    color: "",
    content: "Default"
  },
  render: ({
    size: t,
    color: i,
    content: l
    // puck
  }) => /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx(Bf.Root, { size: t, value: l, children: /* @__PURE__ */ m.jsx(Bf.Frame, { style: { color: i }, children: /* @__PURE__ */ m.jsx(Bf.Pattern, {}) }) }) })
}, $O = (t) => {
  switch (t) {
    case "fixed-top-right":
      return { position: "fixed", top: 12, right: 12, zIndex: 30 };
    case "fixed-bottom-right":
      return { position: "fixed", bottom: 12, right: 12, zIndex: 30 };
    case "fixed-bottom-left":
      return { position: "fixed", bottom: 12, left: 12, zIndex: 30 };
    case "fixed-top-left":
      return { position: "fixed", top: 12, left: 12, zIndex: 30 };
    default:
      return {};
  }
}, VO = {
  label: "Mini Cart",
  fields: {
    keyAddToCart: { type: "text", label: "Cart Storage Key" },
    showBadge: { type: "radio", label: "Show Badge", options: [{ label: "Yes", value: !0 }, { label: "No", value: !1 }] },
    placement: {
      type: "select",
      label: "Placement",
      options: [
        { label: "Inline", value: "inline" },
        { label: "Fixed Top Right", value: "fixed-top-right" },
        { label: "Fixed Bottom Right", value: "fixed-bottom-right" },
        { label: "Fixed Bottom Left", value: "fixed-bottom-left" },
        { label: "Fixed Top Left", value: "fixed-top-left" }
      ]
    }
  },
  defaultProps: {
    keyAddToCart: "productCart",
    showBadge: !0,
    placement: "fixed-bottom-right"
  },
  render: ({ keyAddToCart: t = "productCart", showBadge: i = !0, placement: l = "fixed-bottom-right", puck: n }) => {
    const u = rh(bo), b = nh(Dc), c = ui(() => {
      try {
        const x = typeof window < "u" ? JSON.parse(localStorage.getItem(t) || "[]") : [], S = (u == null ? void 0 : u[t]) || [];
        return (S == null ? void 0 : S.length) || (x == null ? void 0 : x.length) || 0;
      } catch {
        return 0;
      }
    }, [u, t]), p = $O(l), y = () => {
      n != null && n.isEditing || b(!0);
    };
    return /* @__PURE__ */ m.jsx(ht, { style: p, children: /* @__PURE__ */ m.jsxs(ht, { position: "relative", display: "inline-block", children: [
      /* @__PURE__ */ m.jsx(el, { "aria-label": "Cart", variant: "ghost", onClick: y, children: /* @__PURE__ */ m.jsx($m, {}) }),
      i && c > 0 ? /* @__PURE__ */ m.jsx(Dd, { position: "absolute", top: "-2px", right: "-2px", colorPalette: "red", children: c }) : null
    ] }) });
  }
}, zO = Ti(VO), LM = {
  root: zA,
  categories: {
    layout: {
      components: ["Container", "Grid", "Flex", "HeroTwoColumn"],
      defaultExpanded: !0
    },
    navigation: {
      title: "Navigation",
      components: ["Header"],
      defaultExpanded: !0
    },
    marketing: {
      title: "Marketing",
      components: ["Banner"],
      defaultExpanded: !0
    },
    footer: {
      title: "Footer",
      components: ["Footer"],
      defaultExpanded: !0
    },
    typography: {
      components: ["Heading", "Text", "QrCodePlugins"],
      defaultExpanded: !0
    },
    interactive: {
      title: "Actions",
      components: ["ButtonPlugins", "Input", "IconPlugins"],
      defaultExpanded: !1
    },
    storefront: {
      title: "Product",
      components: [
        "Products",
        "Cart",
        "CategoryGrid",
        "CategoryList",
        "ProductDetail",
        "FacetControls",
        "MiniCartBlock"
      ],
      defaultExpanded: !1
    }
  },
  components: {
    Container: AA,
    Grid: RA,
    Flex: EA,
    // Space,
    Heading: BA,
    Text: VA,
    Input: iO,
    ButtonPlugins: lO,
    IconPlugins: CO,
    QrCodePlugins: qO,
    Products: SA,
    // Product,
    CategoryGrid: RO,
    CategoryList: DO,
    Cart: bO,
    Banner: TO,
    HeroTwoColumn: OO,
    Header: NO,
    Footer: PO,
    ProductDetail: UO,
    FacetControls: WO,
    MiniCartBlock: zO
  }
};
function YO(t) {
  return /* @__PURE__ */ m.jsx(sS, { value: oS, children: t == null ? void 0 : t.children });
}
const HO = new r1({
  defaultOptions: { queries: { refetchOnWindowFocus: !1 } }
});
function NM({
  children: t,
  queryClient: i,
  http: l,
  ...n
  // Spread color mode props (e.g., defaultTheme)
}) {
  l && qk(l);
  const u = ui(
    () => ({
      ...n,
      defaultTheme: n.defaultTheme || "light"
    }),
    [n]
  );
  return /* @__PURE__ */ m.jsx(c1, { client: HO, children: /* @__PURE__ */ m.jsx(YO, { ...u, children: /* @__PURE__ */ m.jsx(ZT, { children: t }) }) });
}
export {
  SA as P,
  LM as a,
  NM as b,
  Ld as g
};
//# sourceMappingURL=index--kX1g7PK.js.map
