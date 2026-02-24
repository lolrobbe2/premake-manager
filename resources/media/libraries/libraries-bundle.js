var Ve = (c, f) => () => (f || c((f = { exports: {} }).exports, f), f.exports);
var Iv = /* @__PURE__ */ Ve(((c) => {
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), p = /* @__PURE__ */ Symbol.for("react.profiler"), z = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.memo"), q = /* @__PURE__ */ Symbol.for("react.lazy"), j = /* @__PURE__ */ Symbol.for("react.activity"), bt = Symbol.iterator;
  function _t(y) {
    return y === null || typeof y != "object" ? null : (y = bt && y[bt] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var F = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, qt = Object.assign, Ge = {};
  function ae(y, M, U) {
    this.props = y, this.context = M, this.refs = Ge, this.updater = U || F;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(y, M) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, M, "setState");
  }, ae.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function rl() {
  }
  rl.prototype = ae.prototype;
  function Yt(y, M, U) {
    this.props = y, this.context = M, this.refs = Ge, this.updater = U || F;
  }
  var xe = Yt.prototype = new rl();
  xe.constructor = Yt, qt(xe, ae.prototype), xe.isPureReactComponent = !0;
  var ne = Array.isArray;
  function ue() {
  }
  var P = {
    H: null,
    A: null,
    T: null,
    S: null
  }, kt = Object.prototype.hasOwnProperty;
  function He(y, M, U) {
    var V = U.ref;
    return {
      $$typeof: f,
      type: y,
      key: M,
      ref: V !== void 0 ? V : null,
      props: U
    };
  }
  function Gl(y, M) {
    return He(y.type, M, y.props);
  }
  function ie(y) {
    return typeof y == "object" && y !== null && y.$$typeof === f;
  }
  function Re(y) {
    var M = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + y.replace(/[=:]/g, function(U) {
      return M[U];
    });
  }
  var va = /\/+/g;
  function Ce(y, M) {
    return typeof y == "object" && y !== null && y.key != null ? Re("" + y.key) : M.toString(36);
  }
  function B(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(ue, ue) : (y.status = "pending", y.then(function(M) {
          y.status === "pending" && (y.status = "fulfilled", y.value = M);
        }, function(M) {
          y.status === "pending" && (y.status = "rejected", y.reason = M);
        })), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function C(y, M, U, V, Z) {
    var w = typeof y;
    (w === "undefined" || w === "boolean") && (y = null);
    var nt = !1;
    if (y === null) nt = !0;
    else switch (w) {
      case "bigint":
      case "string":
      case "number":
        nt = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case f:
          case r:
            nt = !0;
            break;
          case q:
            return nt = y._init, C(nt(y._payload), M, U, V, Z);
        }
    }
    if (nt) return Z = Z(y), nt = V === "" ? "." + Ce(y, 0) : V, ne(Z) ? (U = "", nt != null && (U = nt.replace(va, "$&/") + "/"), C(Z, M, U, "", function(an) {
      return an;
    })) : Z != null && (ie(Z) && (Z = Gl(Z, U + (Z.key == null || y && y.key === Z.key ? "" : ("" + Z.key).replace(va, "$&/") + "/") + nt)), M.push(Z)), 1;
    nt = 0;
    var wt = V === "" ? "." : V + ":";
    if (ne(y)) for (var Ot = 0; Ot < y.length; Ot++) V = y[Ot], w = wt + Ce(V, Ot), nt += C(V, M, U, w, Z);
    else if (Ot = _t(y), typeof Ot == "function") for (y = Ot.call(y), Ot = 0; !(V = y.next()).done; ) V = V.value, w = wt + Ce(V, Ot++), nt += C(V, M, U, w, Z);
    else if (w === "object") {
      if (typeof y.then == "function") return C(B(y), M, U, V, Z);
      throw M = String(y), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    }
    return nt;
  }
  function N(y, M, U) {
    if (y == null) return y;
    var V = [], Z = 0;
    return C(y, V, "", "", function(w) {
      return M.call(U, w, Z++);
    }), V;
  }
  function lt(y) {
    if (y._status === -1) {
      var M = y._result;
      M = M(), M.then(function(U) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = U);
      }, function(U) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = U);
      }), y._status === -1 && (y._status = 0, y._result = M);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var ht = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
  }, ce = {
    map: N,
    forEach: function(y, M, U) {
      N(y, function() {
        M.apply(this, arguments);
      }, U);
    },
    count: function(y) {
      var M = 0;
      return N(y, function() {
        M++;
      }), M;
    },
    toArray: function(y) {
      return N(y, function(M) {
        return M;
      }) || [];
    },
    only: function(y) {
      if (!ie(y)) throw Error("React.Children.only expected to receive a single React element child.");
      return y;
    }
  };
  c.Activity = j, c.Children = ce, c.Component = ae, c.Fragment = d, c.Profiler = p, c.PureComponent = Yt, c.StrictMode = s, c.Suspense = H, c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, c.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return P.H.useMemoCache(y);
    }
  }, c.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, c.cacheSignal = function() {
    return null;
  }, c.cloneElement = function(y, M, U) {
    if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
    var V = qt({}, y.props), Z = y.key;
    if (M != null) for (w in M.key !== void 0 && (Z = "" + M.key), M) !kt.call(M, w) || w === "key" || w === "__self" || w === "__source" || w === "ref" && M.ref === void 0 || (V[w] = M[w]);
    var w = arguments.length - 2;
    if (w === 1) V.children = U;
    else if (1 < w) {
      for (var nt = Array(w), wt = 0; wt < w; wt++) nt[wt] = arguments[wt + 2];
      V.children = nt;
    }
    return He(y.type, Z, V);
  }, c.createContext = function(y) {
    return y = {
      $$typeof: x,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: z,
      _context: y
    }, y;
  }, c.createElement = function(y, M, U) {
    var V, Z = {}, w = null;
    if (M != null) for (V in M.key !== void 0 && (w = "" + M.key), M) kt.call(M, V) && V !== "key" && V !== "__self" && V !== "__source" && (Z[V] = M[V]);
    var nt = arguments.length - 2;
    if (nt === 1) Z.children = U;
    else if (1 < nt) {
      for (var wt = Array(nt), Ot = 0; Ot < nt; Ot++) wt[Ot] = arguments[Ot + 2];
      Z.children = wt;
    }
    if (y && y.defaultProps) for (V in nt = y.defaultProps, nt) Z[V] === void 0 && (Z[V] = nt[V]);
    return He(y, w, Z);
  }, c.createRef = function() {
    return { current: null };
  }, c.forwardRef = function(y) {
    return {
      $$typeof: R,
      render: y
    };
  }, c.isValidElement = ie, c.lazy = function(y) {
    return {
      $$typeof: q,
      _payload: {
        _status: -1,
        _result: y
      },
      _init: lt
    };
  }, c.memo = function(y, M) {
    return {
      $$typeof: A,
      type: y,
      compare: M === void 0 ? null : M
    };
  }, c.startTransition = function(y) {
    var M = P.T, U = {};
    P.T = U;
    try {
      var V = y(), Z = P.S;
      Z !== null && Z(U, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(ue, ht);
    } catch (w) {
      ht(w);
    } finally {
      M !== null && U.types !== null && (M.types = U.types), P.T = M;
    }
  }, c.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, c.use = function(y) {
    return P.H.use(y);
  }, c.useActionState = function(y, M, U) {
    return P.H.useActionState(y, M, U);
  }, c.useCallback = function(y, M) {
    return P.H.useCallback(y, M);
  }, c.useContext = function(y) {
    return P.H.useContext(y);
  }, c.useDebugValue = function() {
  }, c.useDeferredValue = function(y, M) {
    return P.H.useDeferredValue(y, M);
  }, c.useEffect = function(y, M) {
    return P.H.useEffect(y, M);
  }, c.useEffectEvent = function(y) {
    return P.H.useEffectEvent(y);
  }, c.useId = function() {
    return P.H.useId();
  }, c.useImperativeHandle = function(y, M, U) {
    return P.H.useImperativeHandle(y, M, U);
  }, c.useInsertionEffect = function(y, M) {
    return P.H.useInsertionEffect(y, M);
  }, c.useLayoutEffect = function(y, M) {
    return P.H.useLayoutEffect(y, M);
  }, c.useMemo = function(y, M) {
    return P.H.useMemo(y, M);
  }, c.useOptimistic = function(y, M) {
    return P.H.useOptimistic(y, M);
  }, c.useReducer = function(y, M, U) {
    return P.H.useReducer(y, M, U);
  }, c.useRef = function(y) {
    return P.H.useRef(y);
  }, c.useState = function(y) {
    return P.H.useState(y);
  }, c.useSyncExternalStore = function(y, M, U) {
    return P.H.useSyncExternalStore(y, M, U);
  }, c.useTransition = function() {
    return P.H.useTransition();
  }, c.version = "19.2.4";
})), Wf = /* @__PURE__ */ Ve(((c, f) => {
  f.exports = Iv();
}));
var Pv = /* @__PURE__ */ Ve(((c) => {
  function f(B, C) {
    var N = B.length;
    B.push(C);
    t: for (; 0 < N; ) {
      var lt = N - 1 >>> 1, ht = B[lt];
      if (0 < s(ht, C)) B[lt] = C, B[N] = ht, N = lt;
      else break t;
    }
  }
  function r(B) {
    return B.length === 0 ? null : B[0];
  }
  function d(B) {
    if (B.length === 0) return null;
    var C = B[0], N = B.pop();
    if (N !== C) {
      B[0] = N;
      t: for (var lt = 0, ht = B.length, ce = ht >>> 1; lt < ce; ) {
        var y = 2 * (lt + 1) - 1, M = B[y], U = y + 1, V = B[U];
        if (0 > s(M, N)) U < ht && 0 > s(V, M) ? (B[lt] = V, B[U] = N, lt = U) : (B[lt] = M, B[y] = N, lt = y);
        else if (U < ht && 0 > s(V, N)) B[lt] = V, B[U] = N, lt = U;
        else break t;
      }
    }
    return C;
  }
  function s(B, C) {
    var N = B.sortIndex - C.sortIndex;
    return N !== 0 ? N : B.id - C.id;
  }
  if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var p = performance;
    c.unstable_now = function() {
      return p.now();
    };
  } else {
    var z = Date, x = z.now();
    c.unstable_now = function() {
      return z.now() - x;
    };
  }
  var R = [], H = [], A = 1, q = null, j = 3, bt = !1, _t = !1, F = !1, qt = !1, Ge = typeof setTimeout == "function" ? setTimeout : null, ae = typeof clearTimeout == "function" ? clearTimeout : null, rl = typeof setImmediate < "u" ? setImmediate : null;
  function Yt(B) {
    for (var C = r(H); C !== null; ) {
      if (C.callback === null) d(H);
      else if (C.startTime <= B) d(H), C.sortIndex = C.expirationTime, f(R, C);
      else break;
      C = r(H);
    }
  }
  function xe(B) {
    if (F = !1, Yt(B), !_t) if (r(R) !== null) _t = !0, ne || (ne = !0, ie());
    else {
      var C = r(H);
      C !== null && Ce(xe, C.startTime - B);
    }
  }
  var ne = !1, ue = -1, P = 5, kt = -1;
  function He() {
    return qt ? !0 : !(c.unstable_now() - kt < P);
  }
  function Gl() {
    if (qt = !1, ne) {
      var B = c.unstable_now();
      kt = B;
      var C = !0;
      try {
        t: {
          _t = !1, F && (F = !1, ae(ue), ue = -1), bt = !0;
          var N = j;
          try {
            e: {
              for (Yt(B), q = r(R); q !== null && !(q.expirationTime > B && He()); ) {
                var lt = q.callback;
                if (typeof lt == "function") {
                  q.callback = null, j = q.priorityLevel;
                  var ht = lt(q.expirationTime <= B);
                  if (B = c.unstable_now(), typeof ht == "function") {
                    q.callback = ht, Yt(B), C = !0;
                    break e;
                  }
                  q === r(R) && d(R), Yt(B);
                } else d(R);
                q = r(R);
              }
              if (q !== null) C = !0;
              else {
                var ce = r(H);
                ce !== null && Ce(xe, ce.startTime - B), C = !1;
              }
            }
            break t;
          } finally {
            q = null, j = N, bt = !1;
          }
          C = void 0;
        }
      } finally {
        C ? ie() : ne = !1;
      }
    }
  }
  var ie;
  if (typeof rl == "function") ie = function() {
    rl(Gl);
  };
  else if (typeof MessageChannel < "u") {
    var Re = new MessageChannel(), va = Re.port2;
    Re.port1.onmessage = Gl, ie = function() {
      va.postMessage(null);
    };
  } else ie = function() {
    Ge(Gl, 0);
  };
  function Ce(B, C) {
    ue = Ge(function() {
      B(c.unstable_now());
    }, C);
  }
  c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(B) {
    B.callback = null;
  }, c.unstable_forceFrameRate = function(B) {
    0 > B || 125 < B || (P = 0 < B ? Math.floor(1e3 / B) : 5);
  }, c.unstable_getCurrentPriorityLevel = function() {
    return j;
  }, c.unstable_next = function(B) {
    switch (j) {
      case 1:
      case 2:
      case 3:
        var C = 3;
        break;
      default:
        C = j;
    }
    var N = j;
    j = C;
    try {
      return B();
    } finally {
      j = N;
    }
  }, c.unstable_requestPaint = function() {
    qt = !0;
  }, c.unstable_runWithPriority = function(B, C) {
    switch (B) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        B = 3;
    }
    var N = j;
    j = B;
    try {
      return C();
    } finally {
      j = N;
    }
  }, c.unstable_scheduleCallback = function(B, C, N) {
    var lt = c.unstable_now();
    switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? lt + N : lt) : N = lt, B) {
      case 1:
        var ht = -1;
        break;
      case 2:
        ht = 250;
        break;
      case 5:
        ht = 1073741823;
        break;
      case 4:
        ht = 1e4;
        break;
      default:
        ht = 5e3;
    }
    return ht = N + ht, B = {
      id: A++,
      callback: C,
      priorityLevel: B,
      startTime: N,
      expirationTime: ht,
      sortIndex: -1
    }, N > lt ? (B.sortIndex = N, f(H, B), r(R) === null && B === r(H) && (F ? (ae(ue), ue = -1) : F = !0, Ce(xe, N - lt))) : (B.sortIndex = ht, f(R, B), _t || bt || (_t = !0, ne || (ne = !0, ie()))), B;
  }, c.unstable_shouldYield = He, c.unstable_wrapCallback = function(B) {
    var C = j;
    return function() {
      var N = j;
      j = C;
      try {
        return B.apply(this, arguments);
      } finally {
        j = N;
      }
    };
  };
})), ty = /* @__PURE__ */ Ve(((c, f) => {
  f.exports = Pv();
}));
var ey = /* @__PURE__ */ Ve(((c) => {
  var f = Wf();
  function r(H) {
    var A = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++) A += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return "Minified React error #" + H + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var s = {
    d: {
      f: d,
      r: function() {
        throw Error(r(522));
      },
      D: d,
      C: d,
      L: d,
      m: d,
      X: d,
      S: d,
      M: d
    },
    p: 0,
    findDOMNode: null
  }, p = /* @__PURE__ */ Symbol.for("react.portal");
  function z(H, A, q) {
    var j = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: p,
      key: j == null ? null : "" + j,
      children: H,
      containerInfo: A,
      implementation: q
    };
  }
  var x = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function R(H, A) {
    if (H === "font") return "";
    if (typeof A == "string") return A === "use-credentials" ? A : "";
  }
  c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, c.createPortal = function(H, A) {
    var q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11) throw Error(r(299));
    return z(H, A, null, q);
  }, c.flushSync = function(H) {
    var A = x.T, q = s.p;
    try {
      if (x.T = null, s.p = 2, H) return H();
    } finally {
      x.T = A, s.p = q, s.d.f();
    }
  }, c.preconnect = function(H, A) {
    typeof H == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, s.d.C(H, A));
  }, c.prefetchDNS = function(H) {
    typeof H == "string" && s.d.D(H);
  }, c.preinit = function(H, A) {
    if (typeof H == "string" && A && typeof A.as == "string") {
      var q = A.as, j = R(q, A.crossOrigin), bt = typeof A.integrity == "string" ? A.integrity : void 0, _t = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      q === "style" ? s.d.S(H, typeof A.precedence == "string" ? A.precedence : void 0, {
        crossOrigin: j,
        integrity: bt,
        fetchPriority: _t
      }) : q === "script" && s.d.X(H, {
        crossOrigin: j,
        integrity: bt,
        fetchPriority: _t,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, c.preinitModule = function(H, A) {
    if (typeof H == "string") if (typeof A == "object" && A !== null) {
      if (A.as == null || A.as === "script") {
        var q = R(A.as, A.crossOrigin);
        s.d.M(H, {
          crossOrigin: q,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0,
          nonce: typeof A.nonce == "string" ? A.nonce : void 0
        });
      }
    } else A ?? s.d.M(H);
  }, c.preload = function(H, A) {
    if (typeof H == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var q = A.as, j = R(q, A.crossOrigin);
      s.d.L(H, q, {
        crossOrigin: j,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, c.preloadModule = function(H, A) {
    if (typeof H == "string") if (A) {
      var q = R(A.as, A.crossOrigin);
      s.d.m(H, {
        as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
        crossOrigin: q,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0
      });
    } else s.d.m(H);
  }, c.requestFormReset = function(H) {
    s.d.r(H);
  }, c.unstable_batchedUpdates = function(H, A) {
    return H(A);
  }, c.useFormState = function(H, A, q) {
    return x.H.useFormState(H, A, q);
  }, c.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, c.version = "19.2.4";
})), ly = /* @__PURE__ */ Ve(((c, f) => {
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch {
      }
  }
  r(), f.exports = ey();
}));
var ay = /* @__PURE__ */ Ve(((c) => {
  var f = ty(), r = Wf(), d = ly();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function p(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function z(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function x(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function R(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function H(t) {
    if (z(t) !== t) throw Error(s(188));
  }
  function A(t) {
    var e = t.alternate;
    if (!e) {
      if (e = z(t), e === null) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return H(n), t;
          if (u === a) return H(n), e;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var i = !1, o = n.child; o; ) {
          if (o === l) {
            i = !0, l = n, a = u;
            break;
          }
          if (o === a) {
            i = !0, a = n, l = u;
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === l) {
              i = !0, l = u, a = n;
              break;
            }
            if (o === a) {
              i = !0, a = u, l = n;
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (l.alternate !== a) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? t : e;
  }
  function q(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = q(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var j = Object.assign, bt = /* @__PURE__ */ Symbol.for("react.element"), _t = /* @__PURE__ */ Symbol.for("react.transitional.element"), F = /* @__PURE__ */ Symbol.for("react.portal"), qt = /* @__PURE__ */ Symbol.for("react.fragment"), Ge = /* @__PURE__ */ Symbol.for("react.strict_mode"), ae = /* @__PURE__ */ Symbol.for("react.profiler"), rl = /* @__PURE__ */ Symbol.for("react.consumer"), Yt = /* @__PURE__ */ Symbol.for("react.context"), xe = /* @__PURE__ */ Symbol.for("react.forward_ref"), ne = /* @__PURE__ */ Symbol.for("react.suspense"), ue = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), kt = /* @__PURE__ */ Symbol.for("react.lazy"), He = /* @__PURE__ */ Symbol.for("react.activity"), Gl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ie = Symbol.iterator;
  function Re(t) {
    return t === null || typeof t != "object" ? null : (t = ie && t[ie] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var va = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ce(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === va ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case qt:
        return "Fragment";
      case ae:
        return "Profiler";
      case Ge:
        return "StrictMode";
      case ne:
        return "Suspense";
      case ue:
        return "SuspenseList";
      case He:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case F:
        return "Portal";
      case Yt:
        return t.displayName || "Context";
      case rl:
        return (t._context.displayName || "Context") + ".Consumer";
      case xe:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case P:
        return e = t.displayName || null, e !== null ? e : Ce(t.type) || "Memo";
      case kt:
        e = t._payload, t = t._init;
        try {
          return Ce(t(e));
        } catch {
        }
    }
    return null;
  }
  var B = Array.isArray, C = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, lt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ht = [], ce = -1;
  function y(t) {
    return { current: t };
  }
  function M(t) {
    0 > ce || (t.current = ht[ce], ht[ce] = null, ce--);
  }
  function U(t, e) {
    ce++, ht[ce] = t.current, t.current = e;
  }
  var V = y(null), Z = y(null), w = y(null), nt = y(null);
  function wt(t, e) {
    switch (U(w, e), U(Z, t), U(V, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Dd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = Dd(e), t = Nd(e, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    M(V), U(V, t);
  }
  function Ot() {
    M(V), M(Z), M(w);
  }
  function an(t) {
    t.memoizedState !== null && U(nt, t);
    var e = V.current, l = Nd(e, t.type);
    e !== l && (U(Z, t), U(V, l));
  }
  function au(t) {
    Z.current === t && (M(V), M(Z)), nt.current === t && (M(nt), Kn._currentValue = lt);
  }
  var Ci, co;
  function Ll(t) {
    if (Ci === void 0) try {
      throw Error();
    } catch (l) {
      var e = l.stack.trim().match(/\n( *(at )?)/);
      Ci = e && e[1] || "", co = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Ci + t + co;
  }
  var Ui = !1;
  function Di(t, e) {
    if (!t || Ui) return "";
    Ui = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var O = function() {
              throw Error();
            };
            if (Object.defineProperty(O.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(O, []);
              } catch (S) {
                var _ = S;
              }
              Reflect.construct(t, [], O);
            } else {
              try {
                O.call();
              } catch (S) {
                _ = S;
              }
              t.call(O.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (S) {
              _ = S;
            }
            (O = t()) && typeof O.catch == "function" && O.catch(function() {
            });
          }
        } catch (S) {
          if (S && _ && typeof S.stack == "string") return [S.stack, _.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var u = a.DetermineComponentFrameRoot(), i = u[0], o = u[1];
      if (i && o) {
        var h = i.split(`
`), b = o.split(`
`);
        for (n = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; n < b.length && !b[n].includes("DetermineComponentFrameRoot"); ) n++;
        if (a === h.length || n === b.length) for (a = h.length - 1, n = b.length - 1; 1 <= a && 0 <= n && h[a] !== b[n]; ) n--;
        for (; 1 <= a && 0 <= n; a--, n--) if (h[a] !== b[n]) {
          if (a !== 1 || n !== 1) do
            if (a--, n--, 0 > n || h[a] !== b[n]) {
              var E = `
` + h[a].replace(" at new ", " at ");
              return t.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", t.displayName)), E;
            }
          while (1 <= a && 0 <= n);
          break;
        }
      }
    } finally {
      Ui = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Ll(l) : "";
  }
  function qh(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ll(t.type);
      case 16:
        return Ll("Lazy");
      case 13:
        return t.child !== e && e !== null ? Ll("Suspense Fallback") : Ll("Suspense");
      case 19:
        return Ll("SuspenseList");
      case 0:
      case 15:
        return Di(t.type, !1);
      case 11:
        return Di(t.type.render, !1);
      case 1:
        return Di(t.type, !0);
      case 31:
        return Ll("Activity");
      default:
        return "";
    }
  }
  function fo(t) {
    try {
      var e = "", l = null;
      do
        e += qh(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ni = Object.prototype.hasOwnProperty, Bi = f.unstable_scheduleCallback, Hi = f.unstable_cancelCallback, jh = f.unstable_shouldYield, Yh = f.unstable_requestPaint, fe = f.unstable_now, $h = f.unstable_getCurrentPriorityLevel, oo = f.unstable_ImmediatePriority, so = f.unstable_UserBlockingPriority, nu = f.unstable_NormalPriority, Vh = f.unstable_LowPriority, ro = f.unstable_IdlePriority, Gh = f.log, Lh = f.unstable_setDisableYieldValue, nn = null, oe = null;
  function dl(t) {
    if (typeof Gh == "function" && Lh(t), oe && typeof oe.setStrictMode == "function") try {
      oe.setStrictMode(nn, t);
    } catch {
    }
  }
  var se = Math.clz32 ? Math.clz32 : Zh, Xh = Math.log, Qh = Math.LN2;
  function Zh(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Xh(t) / Qh | 0) | 0;
  }
  var uu = 256, iu = 262144, cu = 4194304;
  function Xl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function fu(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var o = a & 134217727;
    return o !== 0 ? (a = o & ~u, a !== 0 ? n = Xl(a) : (i &= o, i !== 0 ? n = Xl(i) : l || (l = o & ~t, l !== 0 && (n = Xl(l))))) : (o = a & ~u, o !== 0 ? n = Xl(o) : i !== 0 ? n = Xl(i) : l || (l = a & ~t, l !== 0 && (n = Xl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function un(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function wh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ho() {
    var t = cu;
    return cu <<= 1, (cu & 62914560) === 0 && (cu = 4194304), t;
  }
  function Ri(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function ou(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Kh(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var o = t.entanglements, h = t.expirationTimes, b = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var E = 31 - se(l), O = 1 << E;
      o[E] = 0, h[E] = -1;
      var _ = b[E];
      if (_ !== null) for (b[E] = null, E = 0; E < _.length; E++) {
        var S = _[E];
        S !== null && (S.lane &= -536870913);
      }
      l &= ~O;
    }
    a !== 0 && vo(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function vo(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - se(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function yo(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - se(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function mo(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : po(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function po(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function qi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function go() {
    var t = N.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Pd(t.type));
  }
  function bo(t, e) {
    var l = N.p;
    try {
      return N.p = t, e();
    } finally {
      N.p = l;
    }
  }
  var hl = Math.random().toString(36).slice(2), Gt = "__reactFiber$" + hl, Wt = "__reactProps$" + hl, cn = "__reactContainer$" + hl, ji = "__reactEvents$" + hl, Jh = "__reactListeners$" + hl, kh = "__reactHandles$" + hl, _o = "__reactResources$" + hl, fn = "__reactMarker$" + hl;
  function Yi(t) {
    delete t[Gt], delete t[Wt], delete t[ji], delete t[Jh], delete t[kh];
  }
  function ya(t) {
    var e = t[Gt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[cn] || l[Gt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = $d(t); t !== null; ) {
          if (l = t[Gt]) return l;
          t = $d(t);
        }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function ma(t) {
    if (t = t[Gt] || t[cn]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function on(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function pa(t) {
    var e = t[_o];
    return e || (e = t[_o] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), e;
  }
  function $t(t) {
    t[fn] = !0;
  }
  var So = /* @__PURE__ */ new Set(), Ao = {};
  function Ql(t, e) {
    ga(t, e), ga(t + "Capture", e);
  }
  function ga(t, e) {
    for (Ao[t] = e, t = 0; t < e.length; t++) So.add(e[t]);
  }
  var Wh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Eo = {}, zo = {};
  function Fh(t) {
    return Ni.call(zo, t) ? !0 : Ni.call(Eo, t) ? !1 : Wh.test(t) ? zo[t] = !0 : (Eo[t] = !0, !1);
  }
  function su(t, e, l) {
    if (Fh(e)) if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var a = e.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, "" + l);
    }
  }
  function ru(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Le(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function pe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function To(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Ih(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          l = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, e, { enumerable: a.enumerable }), {
        getValue: function() {
          return l;
        },
        setValue: function(i) {
          l = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function $i(t) {
    if (!t._valueTracker) {
      var e = To(t) ? "checked" : "value";
      t._valueTracker = Ih(t, e, "" + t[e]);
    }
  }
  function Oo(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = To(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function du(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Ph = /[\n"\\]/g;
  function ge(t) {
    return t.replace(Ph, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Vi(t, e, l, a, n, u, i, o) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + pe(e)) : t.value !== "" + pe(e) && (t.value = "" + pe(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? Gi(t, i, pe(e)) : l != null ? Gi(t, i, pe(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + pe(o) : t.removeAttribute("name");
  }
  function Mo(t, e, l, a, n, u, i, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        $i(t);
        return;
      }
      l = l != null ? "" + pe(l) : "", e = e != null ? "" + pe(e) : l, o || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = o ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), $i(t);
  }
  function Gi(t, e, l) {
    e === "number" && du(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function ba(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + pe(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function xo(t, e, l) {
    if (e != null && (e = "" + pe(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + pe(l) : "";
  }
  function Co(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(s(92));
        if (B(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        l = a;
      }
      l ??= "", e = l;
    }
    l = pe(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), $i(t);
  }
  function _a(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var t0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Uo(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || t0.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Do(t, e, l) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (t = t.style, l != null) {
      for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && Uo(t, n, a);
    } else for (var u in e) e.hasOwnProperty(u) && Uo(t, u, e[u]);
  }
  function Li(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var e0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), l0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hu(t) {
    return l0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Xe() {
  }
  var Xi = null;
  function Qi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Sa = null, Aa = null;
  function No(t) {
    var e = ma(t);
    if (e && (t = e.stateNode)) {
      var l = t[Wt] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Vi(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + ge("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Wt] || null;
                if (!n) throw Error(s(90));
                Vi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && Oo(a);
          }
          break t;
        case "textarea":
          xo(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && ba(t, !!l.multiple, e, !1);
      }
    }
  }
  var Zi = !1;
  function Bo(t, e, l) {
    if (Zi) return t(e, l);
    Zi = !0;
    try {
      return t(e);
    } finally {
      if (Zi = !1, (Sa !== null || Aa !== null) && (ti(), Sa && (e = Sa, t = Aa, Aa = Sa = null, No(e), t)))
        for (e = 0; e < t.length; e++) No(t[e]);
    }
  }
  function sn(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Wt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(s(231, e, typeof l));
    return l;
  }
  var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wi = !1;
  if (Qe) try {
    var rn = {};
    Object.defineProperty(rn, "passive", { get: function() {
      wi = !0;
    } }), window.addEventListener("test", rn, rn), window.removeEventListener("test", rn, rn);
  } catch {
    wi = !1;
  }
  var vl = null, Ki = null, vu = null;
  function Ho() {
    if (vu) return vu;
    var t, e = Ki, l = e.length, a, n = "value" in vl ? vl.value : vl.textContent, u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
    return vu = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function yu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function mu() {
    return !0;
  }
  function Ro() {
    return !1;
  }
  function Ft(t) {
    function e(l, a, n, u, i) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var o in t) t.hasOwnProperty(o) && (l = t[o], this[o] = l ? l(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? mu : Ro, this.isPropagationStopped = Ro, this;
    }
    return j(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = mu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = mu);
      },
      persist: function() {
      },
      isPersistent: mu
    }), e;
  }
  var Zl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, pu = Ft(Zl), dn = j({}, Zl, {
    view: 0,
    detail: 0
  }), a0 = Ft(dn), Ji, ki, hn, gu = j({}, dn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fi,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== hn && (hn && t.type === "mousemove" ? (Ji = t.screenX - hn.screenX, ki = t.screenY - hn.screenY) : ki = Ji = 0, hn = t), Ji);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : ki;
    }
  }), qo = Ft(gu), n0 = Ft(j({}, gu, { dataTransfer: 0 })), Wi = Ft(j({}, dn, { relatedTarget: 0 })), u0 = Ft(j({}, Zl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), i0 = Ft(j({}, Zl, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } })), jo = Ft(j({}, Zl, { data: 0 })), c0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, f0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, o0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function s0(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = o0[t]) ? !!e[t] : !1;
  }
  function Fi() {
    return s0;
  }
  var r0 = Ft(j({}, dn, {
    key: function(t) {
      if (t.key) {
        var e = c0[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = yu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? f0[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fi,
    charCode: function(t) {
      return t.type === "keypress" ? yu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? yu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  })), Yo = Ft(j({}, gu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  })), d0 = Ft(j({}, dn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fi
  })), h0 = Ft(j({}, Zl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), v0 = Ft(j({}, gu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), y0 = Ft(j({}, Zl, {
    newState: 0,
    oldState: 0
  })), m0 = [
    9,
    13,
    27,
    32
  ], Ii = Qe && "CompositionEvent" in window, vn = null;
  Qe && "documentMode" in document && (vn = document.documentMode);
  var p0 = Qe && "TextEvent" in window && !vn, $o = Qe && (!Ii || vn && 8 < vn && 11 >= vn), Vo = " ", Go = !1;
  function Lo(t, e) {
    switch (t) {
      case "keyup":
        return m0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Xo(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ea = !1;
  function g0(t, e) {
    switch (t) {
      case "compositionend":
        return Xo(e);
      case "keypress":
        return e.which !== 32 ? null : (Go = !0, Vo);
      case "textInput":
        return t = e.data, t === Vo && Go ? null : t;
      default:
        return null;
    }
  }
  function b0(t, e) {
    if (Ea) return t === "compositionend" || !Ii && Lo(t, e) ? (t = Ho(), vu = Ki = vl = null, Ea = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return $o && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var _0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Qo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!_0[t.type] : e === "textarea";
  }
  function Zo(t, e, l, a) {
    Sa ? Aa ? Aa.push(a) : Aa = [a] : Sa = a, e = ci(e, "onChange"), 0 < e.length && (l = new pu("onChange", "change", null, l, a), t.push({
      event: l,
      listeners: e
    }));
  }
  var yn = null, mn = null;
  function S0(t) {
    zd(t, 0);
  }
  function bu(t) {
    if (Oo(on(t))) return t;
  }
  function wo(t, e) {
    if (t === "change") return e;
  }
  var Ko = !1;
  if (Qe) {
    var Pi;
    if (Qe) {
      var tc = "oninput" in document;
      if (!tc) {
        var Jo = document.createElement("div");
        Jo.setAttribute("oninput", "return;"), tc = typeof Jo.oninput == "function";
      }
      Pi = tc;
    } else Pi = !1;
    Ko = Pi && (!document.documentMode || 9 < document.documentMode);
  }
  function ko() {
    yn && (yn.detachEvent("onpropertychange", Wo), mn = yn = null);
  }
  function Wo(t) {
    if (t.propertyName === "value" && bu(mn)) {
      var e = [];
      Zo(e, mn, t, Qi(t)), Bo(S0, e);
    }
  }
  function A0(t, e, l) {
    t === "focusin" ? (ko(), yn = e, mn = l, yn.attachEvent("onpropertychange", Wo)) : t === "focusout" && ko();
  }
  function E0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return bu(mn);
  }
  function z0(t, e) {
    if (t === "click") return bu(e);
  }
  function T0(t, e) {
    if (t === "input" || t === "change") return bu(e);
  }
  function O0(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var re = typeof Object.is == "function" ? Object.is : O0;
  function pn(t, e) {
    if (re(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Ni.call(e, n) || !re(t[n], e[n])) return !1;
    }
    return !0;
  }
  function Fo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Io(t, e) {
    var l = Fo(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e) return {
          node: l,
          offset: e - t
        };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Fo(l);
    }
  }
  function Po(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Po(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function ts(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = du(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = du(t.document);
    }
    return e;
  }
  function ec(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var M0 = Qe && "documentMode" in document && 11 >= document.documentMode, za = null, lc = null, gn = null, ac = !1;
  function es(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ac || za == null || za !== du(a) || (a = za, "selectionStart" in a && ec(a) ? a = {
      start: a.selectionStart,
      end: a.selectionEnd
    } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), gn && pn(gn, a) || (gn = a, a = ci(lc, "onSelect"), 0 < a.length && (e = new pu("onSelect", "select", null, e, l), t.push({
      event: e,
      listeners: a
    }), e.target = za)));
  }
  function wl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var Ta = {
    animationend: wl("Animation", "AnimationEnd"),
    animationiteration: wl("Animation", "AnimationIteration"),
    animationstart: wl("Animation", "AnimationStart"),
    transitionrun: wl("Transition", "TransitionRun"),
    transitionstart: wl("Transition", "TransitionStart"),
    transitioncancel: wl("Transition", "TransitionCancel"),
    transitionend: wl("Transition", "TransitionEnd")
  }, nc = {}, ls = {};
  Qe && (ls = document.createElement("div").style, "AnimationEvent" in window || (delete Ta.animationend.animation, delete Ta.animationiteration.animation, delete Ta.animationstart.animation), "TransitionEvent" in window || delete Ta.transitionend.transition);
  function Kl(t) {
    if (nc[t]) return nc[t];
    if (!Ta[t]) return t;
    var e = Ta[t], l;
    for (l in e) if (e.hasOwnProperty(l) && l in ls) return nc[t] = e[l];
    return t;
  }
  var as = Kl("animationend"), ns = Kl("animationiteration"), us = Kl("animationstart"), x0 = Kl("transitionrun"), C0 = Kl("transitionstart"), U0 = Kl("transitioncancel"), is = Kl("transitionend"), cs = /* @__PURE__ */ new Map(), uc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  uc.push("scrollEnd");
  function Ue(t, e) {
    cs.set(t, e), Ql(e, [t]);
  }
  var _u = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
  }, be = [], Oa = 0, ic = 0;
  function Su() {
    for (var t = Oa, e = ic = Oa = 0; e < t; ) {
      var l = be[e];
      be[e++] = null;
      var a = be[e];
      be[e++] = null;
      var n = be[e];
      be[e++] = null;
      var u = be[e];
      if (be[e++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && fs(l, n, u);
    }
  }
  function Au(t, e, l, a) {
    be[Oa++] = t, be[Oa++] = e, be[Oa++] = l, be[Oa++] = a, ic |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function cc(t, e, l, a) {
    return Au(t, e, l, a), Eu(t);
  }
  function Jl(t, e) {
    return Au(t, null, null, e), Eu(t);
  }
  function fs(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; ) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - se(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function Eu(t) {
    if (50 < Vn) throw Vn = 0, pf = null, Error(s(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ma = {};
  function D0(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function de(t, e, l, a) {
    return new D0(t, e, l, a);
  }
  function fc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ze(t, e) {
    var l = t.alternate;
    return l === null ? (l = de(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function os(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function zu(t, e, l, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") fc(t) && (i = 1);
    else if (typeof t == "string") i = jv(t, l, V.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case He:
        return t = de(31, l, e, n), t.elementType = He, t.lanes = u, t;
      case qt:
        return kl(l.children, n, u, e);
      case Ge:
        i = 8, n |= 24;
        break;
      case ae:
        return t = de(12, l, e, n | 2), t.elementType = ae, t.lanes = u, t;
      case ne:
        return t = de(13, l, e, n), t.elementType = ne, t.lanes = u, t;
      case ue:
        return t = de(19, l, e, n), t.elementType = ue, t.lanes = u, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case Yt:
            i = 10;
            break t;
          case rl:
            i = 9;
            break t;
          case xe:
            i = 11;
            break t;
          case P:
            i = 14;
            break t;
          case kt:
            i = 16, a = null;
            break t;
        }
        i = 29, l = Error(s(130, t === null ? "null" : typeof t, "")), a = null;
    }
    return e = de(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function kl(t, e, l, a) {
    return t = de(7, t, a, e), t.lanes = l, t;
  }
  function oc(t, e, l) {
    return t = de(6, t, null, e), t.lanes = l, t;
  }
  function ss(t) {
    var e = de(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function sc(t, e, l) {
    return e = de(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var rs = /* @__PURE__ */ new WeakMap();
  function _e(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = rs.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: fo(e)
      }, rs.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: fo(e)
    };
  }
  var xa = [], Ca = 0, Tu = null, bn = 0, Se = [], Ae = 0, yl = null, qe = 1, je = "";
  function we(t, e) {
    xa[Ca++] = bn, xa[Ca++] = Tu, Tu = t, bn = e;
  }
  function ds(t, e, l) {
    Se[Ae++] = qe, Se[Ae++] = je, Se[Ae++] = yl, yl = t;
    var a = qe;
    t = je;
    var n = 32 - se(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - se(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, qe = 1 << 32 - se(e) + n | l << n | a, je = u + t;
    } else qe = 1 << u | l << n | a, je = t;
  }
  function rc(t) {
    t.return !== null && (we(t, 1), ds(t, 1, 0));
  }
  function dc(t) {
    for (; t === Tu; ) Tu = xa[--Ca], xa[Ca] = null, bn = xa[--Ca], xa[Ca] = null;
    for (; t === yl; ) yl = Se[--Ae], Se[Ae] = null, je = Se[--Ae], Se[Ae] = null, qe = Se[--Ae], Se[Ae] = null;
  }
  function hs(t, e) {
    Se[Ae++] = qe, Se[Ae++] = je, Se[Ae++] = yl, qe = e.id, je = e.overflow, yl = t;
  }
  var Lt = null, vt = null, I = !1, ml = null, Ee = !1, hc = Error(s(519));
  function pl(t) {
    throw _n(_e(Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), t)), hc;
  }
  function vs(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[Gt] = t, e[Wt] = a, l) {
      case "dialog":
        J("cancel", e), J("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        J("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ln.length; l++) J(Ln[l], e);
        break;
      case "source":
        J("error", e);
        break;
      case "img":
      case "image":
      case "link":
        J("error", e), J("load", e);
        break;
      case "details":
        J("toggle", e);
        break;
      case "input":
        J("invalid", e), Mo(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
        break;
      case "select":
        J("invalid", e);
        break;
      case "textarea":
        J("invalid", e), Co(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || Cd(e.textContent, l) ? (a.popover != null && (J("beforetoggle", e), J("toggle", e)), a.onScroll != null && J("scroll", e), a.onScrollEnd != null && J("scrollend", e), a.onClick != null && (e.onclick = Xe), e = !0) : e = !1, e || pl(t, !0);
  }
  function ys(t) {
    for (Lt = t.return; Lt; ) switch (Lt.tag) {
      case 5:
      case 31:
      case 13:
        Ee = !1;
        return;
      case 27:
      case 3:
        Ee = !0;
        return;
      default:
        Lt = Lt.return;
    }
  }
  function Ua(t) {
    if (t !== Lt) return !1;
    if (!I) return ys(t), I = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Df(t.type, t.memoizedProps)), l = !l), l && vt && pl(t), ys(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      vt = Yd(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      vt = Yd(t);
    } else e === 27 ? (e = vt, Cl(t.type) ? (t = qf, qf = null, vt = t) : vt = e) : vt = Lt ? Oe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Wl() {
    vt = Lt = null, I = !1;
  }
  function vc() {
    var t = ml;
    return t !== null && (ee === null ? ee = t : ee.push.apply(ee, t), ml = null), t;
  }
  function _n(t) {
    ml === null ? ml = [t] : ml.push(t);
  }
  var yc = y(null), Fl = null, Ke = null;
  function gl(t, e, l) {
    U(yc, e._currentValue), e._currentValue = l;
  }
  function Je(t) {
    t._currentValue = yc.current, M(yc);
  }
  function mc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function pc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var o = u;
          u = n;
          for (var h = 0; h < e.length; h++) if (o.context === e[h]) {
            u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), mc(u.return, l, t), a || (i = null);
            break t;
          }
          u = o.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(s(341));
        i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), mc(i, l, t), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else for (i = n; i !== null; ) {
        if (i === t) {
          i = null;
          break;
        }
        if (n = i.sibling, n !== null) {
          n.return = i.return, i = n;
          break;
        }
        i = i.return;
      }
      n = i;
    }
  }
  function Da(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(s(387));
        if (i = i.memoizedProps, i !== null) {
          var o = n.type;
          re(n.pendingProps.value, i.value) || (t !== null ? t.push(o) : t = [o]);
        }
      } else if (n === nt.current) {
        if (i = n.alternate, i === null) throw Error(s(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Kn) : t = [Kn]);
      }
      n = n.return;
    }
    t !== null && pc(e, t, l, a), e.flags |= 262144;
  }
  function Ou(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!re(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Il(t) {
    Fl = t, Ke = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Xt(t) {
    return ms(Fl, t);
  }
  function Mu(t, e) {
    return Fl === null && Il(t), ms(t, e);
  }
  function ms(t, e) {
    var l = e._currentValue;
    if (e = {
      context: e,
      memoizedValue: l,
      next: null
    }, Ke === null) {
      if (t === null) throw Error(s(308));
      Ke = e, t.dependencies = {
        lanes: 0,
        firstContext: e
      }, t.flags |= 524288;
    } else Ke = Ke.next = e;
    return l;
  }
  var N0 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, B0 = f.unstable_scheduleCallback, H0 = f.unstable_NormalPriority, Ct = {
    $$typeof: Yt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function gc() {
    return {
      controller: new N0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Sn(t) {
    t.refCount--, t.refCount === 0 && B0(H0, function() {
      t.controller.abort();
    });
  }
  var An = null, bc = 0, Na = 0, Ba = null;
  function R0(t, e) {
    if (An === null) {
      var l = An = [];
      bc = 0, Na = Ef(), Ba = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return bc++, e.then(ps, ps), e;
  }
  function ps() {
    if (--bc === 0 && An !== null) {
      Ba !== null && (Ba.status = "fulfilled");
      var t = An;
      An = null, Na = 0, Ba = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function q0(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(function() {
      a.status = "fulfilled", a.value = e;
      for (var n = 0; n < l.length; n++) (0, l[n])(e);
    }, function(n) {
      for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0);
    }), a;
  }
  var gs = C.S;
  C.S = function(t, e) {
    Ir = fe(), typeof e == "object" && e !== null && typeof e.then == "function" && R0(t, e), gs !== null && gs(t, e);
  };
  var Pl = y(null);
  function _c() {
    var t = Pl.current;
    return t !== null ? t : rt.pooledCache;
  }
  function xu(t, e) {
    e === null ? U(Pl, Pl.current) : U(Pl, e.pool);
  }
  function bs() {
    var t = _c();
    return t === null ? null : {
      parent: Ct._currentValue,
      pool: t
    };
  }
  var Ha = Error(s(460)), Sc = Error(s(474)), Cu = Error(s(542)), Uu = { then: function() {
  } };
  function _s(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Ss(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Xe, Xe), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Es(t), t;
      default:
        if (typeof e.status == "string") e.then(Xe, Xe);
        else {
          if (t = rt, t !== null && 100 < t.shellSuspendCounter) throw Error(s(482));
          t = e, t.status = "pending", t.then(function(a) {
            if (e.status === "pending") {
              var n = e;
              n.status = "fulfilled", n.value = a;
            }
          }, function(a) {
            if (e.status === "pending") {
              var n = e;
              n.status = "rejected", n.reason = a;
            }
          });
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Es(t), t;
        }
        throw ea = e, Ha;
    }
  }
  function ta(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ea = l, Ha) : l;
    }
  }
  var ea = null;
  function As() {
    if (ea === null) throw Error(s(459));
    var t = ea;
    return ea = null, t;
  }
  function Es(t) {
    if (t === Ha || t === Cu) throw Error(s(483));
  }
  var Ra = null, En = 0;
  function Du(t) {
    var e = En;
    return En += 1, Ra === null && (Ra = []), Ss(Ra, t, e);
  }
  function zn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Nu(t, e) {
    throw e.$$typeof === bt ? Error(s(525)) : (t = Object.prototype.toString.call(e), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function zs(t) {
    function e(m, v) {
      if (t) {
        var g = m.deletions;
        g === null ? (m.deletions = [v], m.flags |= 16) : g.push(v);
      }
    }
    function l(m, v) {
      if (!t) return null;
      for (; v !== null; ) e(m, v), v = v.sibling;
      return null;
    }
    function a(m) {
      for (var v = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? v.set(m.key, m) : v.set(m.index, m), m = m.sibling;
      return v;
    }
    function n(m, v) {
      return m = Ze(m, v), m.index = 0, m.sibling = null, m;
    }
    function u(m, v, g) {
      return m.index = g, t ? (g = m.alternate, g !== null ? (g = g.index, g < v ? (m.flags |= 67108866, v) : g) : (m.flags |= 67108866, v)) : (m.flags |= 1048576, v);
    }
    function i(m) {
      return t && m.alternate === null && (m.flags |= 67108866), m;
    }
    function o(m, v, g, T) {
      return v === null || v.tag !== 6 ? (v = oc(g, m.mode, T), v.return = m, v) : (v = n(v, g), v.return = m, v);
    }
    function h(m, v, g, T) {
      var G = g.type;
      return G === qt ? E(m, v, g.props.children, T, g.key) : v !== null && (v.elementType === G || typeof G == "object" && G !== null && G.$$typeof === kt && ta(G) === v.type) ? (v = n(v, g.props), zn(v, g), v.return = m, v) : (v = zu(g.type, g.key, g.props, null, m.mode, T), zn(v, g), v.return = m, v);
    }
    function b(m, v, g, T) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== g.containerInfo || v.stateNode.implementation !== g.implementation ? (v = sc(g, m.mode, T), v.return = m, v) : (v = n(v, g.children || []), v.return = m, v);
    }
    function E(m, v, g, T, G) {
      return v === null || v.tag !== 7 ? (v = kl(g, m.mode, T, G), v.return = m, v) : (v = n(v, g), v.return = m, v);
    }
    function O(m, v, g) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return v = oc("" + v, m.mode, g), v.return = m, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case _t:
            return g = zu(v.type, v.key, v.props, null, m.mode, g), zn(g, v), g.return = m, g;
          case F:
            return v = sc(v, m.mode, g), v.return = m, v;
          case kt:
            return v = ta(v), O(m, v, g);
        }
        if (B(v) || Re(v)) return v = kl(v, m.mode, g, null), v.return = m, v;
        if (typeof v.then == "function") return O(m, Du(v), g);
        if (v.$$typeof === Yt) return O(m, Mu(m, v), g);
        Nu(m, v);
      }
      return null;
    }
    function _(m, v, g, T) {
      var G = v !== null ? v.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return G !== null ? null : o(m, v, "" + g, T);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case _t:
            return g.key === G ? h(m, v, g, T) : null;
          case F:
            return g.key === G ? b(m, v, g, T) : null;
          case kt:
            return g = ta(g), _(m, v, g, T);
        }
        if (B(g) || Re(g)) return G !== null ? null : E(m, v, g, T, null);
        if (typeof g.then == "function") return _(m, v, Du(g), T);
        if (g.$$typeof === Yt) return _(m, v, Mu(m, g), T);
        Nu(m, g);
      }
      return null;
    }
    function S(m, v, g, T, G) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return m = m.get(g) || null, o(v, m, "" + T, G);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case _t:
            return m = m.get(T.key === null ? g : T.key) || null, h(v, m, T, G);
          case F:
            return m = m.get(T.key === null ? g : T.key) || null, b(v, m, T, G);
          case kt:
            return T = ta(T), S(m, v, g, T, G);
        }
        if (B(T) || Re(T)) return m = m.get(g) || null, E(v, m, T, G, null);
        if (typeof T.then == "function") return S(m, v, g, Du(T), G);
        if (T.$$typeof === Yt) return S(m, v, g, Mu(v, T), G);
        Nu(v, T);
      }
      return null;
    }
    function Y(m, v, g, T) {
      for (var G = null, tt = null, $ = v, Q = v = 0, W = null; $ !== null && Q < g.length; Q++) {
        $.index > Q ? (W = $, $ = null) : W = $.sibling;
        var et = _(m, $, g[Q], T);
        if (et === null) {
          $ === null && ($ = W);
          break;
        }
        t && $ && et.alternate === null && e(m, $), v = u(et, v, Q), tt === null ? G = et : tt.sibling = et, tt = et, $ = W;
      }
      if (Q === g.length) return l(m, $), I && we(m, Q), G;
      if ($ === null) {
        for (; Q < g.length; Q++) $ = O(m, g[Q], T), $ !== null && (v = u($, v, Q), tt === null ? G = $ : tt.sibling = $, tt = $);
        return I && we(m, Q), G;
      }
      for ($ = a($); Q < g.length; Q++) W = S($, m, Q, g[Q], T), W !== null && (t && W.alternate !== null && $.delete(W.key === null ? Q : W.key), v = u(W, v, Q), tt === null ? G = W : tt.sibling = W, tt = W);
      return t && $.forEach(function(Hl) {
        return e(m, Hl);
      }), I && we(m, Q), G;
    }
    function L(m, v, g, T) {
      if (g == null) throw Error(s(151));
      for (var G = null, tt = null, $ = v, Q = v = 0, W = null, et = g.next(); $ !== null && !et.done; Q++, et = g.next()) {
        $.index > Q ? (W = $, $ = null) : W = $.sibling;
        var Hl = _(m, $, et.value, T);
        if (Hl === null) {
          $ === null && ($ = W);
          break;
        }
        t && $ && Hl.alternate === null && e(m, $), v = u(Hl, v, Q), tt === null ? G = Hl : tt.sibling = Hl, tt = Hl, $ = W;
      }
      if (et.done) return l(m, $), I && we(m, Q), G;
      if ($ === null) {
        for (; !et.done; Q++, et = g.next()) et = O(m, et.value, T), et !== null && (v = u(et, v, Q), tt === null ? G = et : tt.sibling = et, tt = et);
        return I && we(m, Q), G;
      }
      for ($ = a($); !et.done; Q++, et = g.next()) et = S($, m, Q, et.value, T), et !== null && (t && et.alternate !== null && $.delete(et.key === null ? Q : et.key), v = u(et, v, Q), tt === null ? G = et : tt.sibling = et, tt = et);
      return t && $.forEach(function(Fv) {
        return e(m, Fv);
      }), I && we(m, Q), G;
    }
    function ot(m, v, g, T) {
      if (typeof g == "object" && g !== null && g.type === qt && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case _t:
            t: {
              for (var G = g.key; v !== null; ) {
                if (v.key === G) {
                  if (G = g.type, G === qt) {
                    if (v.tag === 7) {
                      l(m, v.sibling), T = n(v, g.props.children), T.return = m, m = T;
                      break t;
                    }
                  } else if (v.elementType === G || typeof G == "object" && G !== null && G.$$typeof === kt && ta(G) === v.type) {
                    l(m, v.sibling), T = n(v, g.props), zn(T, g), T.return = m, m = T;
                    break t;
                  }
                  l(m, v);
                  break;
                } else e(m, v);
                v = v.sibling;
              }
              g.type === qt ? (T = kl(g.props.children, m.mode, T, g.key), T.return = m, m = T) : (T = zu(g.type, g.key, g.props, null, m.mode, T), zn(T, g), T.return = m, m = T);
            }
            return i(m);
          case F:
            t: {
              for (G = g.key; v !== null; ) {
                if (v.key === G) if (v.tag === 4 && v.stateNode.containerInfo === g.containerInfo && v.stateNode.implementation === g.implementation) {
                  l(m, v.sibling), T = n(v, g.children || []), T.return = m, m = T;
                  break t;
                } else {
                  l(m, v);
                  break;
                }
                else e(m, v);
                v = v.sibling;
              }
              T = sc(g, m.mode, T), T.return = m, m = T;
            }
            return i(m);
          case kt:
            return g = ta(g), ot(m, v, g, T);
        }
        if (B(g)) return Y(m, v, g, T);
        if (Re(g)) {
          if (G = Re(g), typeof G != "function") throw Error(s(150));
          return g = G.call(g), L(m, v, g, T);
        }
        if (typeof g.then == "function") return ot(m, v, Du(g), T);
        if (g.$$typeof === Yt) return ot(m, v, Mu(m, g), T);
        Nu(m, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, v !== null && v.tag === 6 ? (l(m, v.sibling), T = n(v, g), T.return = m, m = T) : (l(m, v), T = oc(g, m.mode, T), T.return = m, m = T), i(m)) : l(m, v);
    }
    return function(m, v, g, T) {
      try {
        En = 0;
        var G = ot(m, v, g, T);
        return Ra = null, G;
      } catch ($) {
        if ($ === Ha || $ === Cu) throw $;
        var tt = de(29, $, null, m.mode);
        return tt.lanes = T, tt.return = m, tt;
      }
    };
  }
  var la = zs(!0), Ts = zs(!1), bl = !1;
  function Ac(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function Ec(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function aa(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function na(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (at & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = Eu(t), fs(t, null, l), e;
    }
    return Au(t, a, e, l), Eu(t);
  }
  function Tn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, yo(t, l);
    }
  }
  function zc(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, l = l.next;
        } while (l !== null);
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var Tc = !1;
  function On() {
    if (Tc) {
      var t = Ba;
      if (t !== null) throw t;
    }
  }
  function Mn(t, e, l, a) {
    Tc = !1;
    var n = t.updateQueue;
    bl = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, o = n.shared.pending;
    if (o !== null) {
      n.shared.pending = null;
      var h = o, b = h.next;
      h.next = null, i === null ? u = b : i.next = b, i = h;
      var E = t.alternate;
      E !== null && (E = E.updateQueue, o = E.lastBaseUpdate, o !== i && (o === null ? E.firstBaseUpdate = b : o.next = b, E.lastBaseUpdate = h));
    }
    if (u !== null) {
      var O = n.baseState;
      i = 0, E = b = h = null, o = u;
      do {
        var _ = o.lane & -536870913, S = _ !== o.lane;
        if (S ? (k & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Na && (Tc = !0), E !== null && (E = E.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var Y = t, L = o;
            _ = e;
            var ot = l;
            switch (L.tag) {
              case 1:
                if (Y = L.payload, typeof Y == "function") {
                  O = Y.call(ot, O, _);
                  break t;
                }
                O = Y;
                break t;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = L.payload, _ = typeof Y == "function" ? Y.call(ot, O, _) : Y, _ == null) break t;
                O = j({}, O, _);
                break t;
              case 2:
                bl = !0;
            }
          }
          _ = o.callback, _ !== null && (t.flags |= 64, S && (t.flags |= 8192), S = n.callbacks, S === null ? n.callbacks = [_] : S.push(_));
        } else S = {
          lane: _,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        }, E === null ? (b = E = S, h = O) : E = E.next = S, i |= _;
        if (o = o.next, o === null) {
          if (o = n.shared.pending, o === null) break;
          S = o, o = S.next, S.next = null, n.lastBaseUpdate = S, n.shared.pending = null;
        }
      } while (!0);
      E === null && (h = O), n.baseState = h, n.firstBaseUpdate = b, n.lastBaseUpdate = E, u === null && (n.shared.lanes = 0), zl |= i, t.lanes = i, t.memoizedState = O;
    }
  }
  function Os(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function Ms(t, e) {
    var l = t.callbacks;
    if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) Os(l[t], e);
  }
  var qa = y(null), Bu = y(0);
  function xs(t, e) {
    t = al, U(Bu, t), U(qa, e), al = t | e.baseLanes;
  }
  function Oc() {
    U(Bu, al), U(qa, qa.current);
  }
  function Mc() {
    al = Bu.current, M(qa), M(Bu);
  }
  var he = y(null), ze = null;
  function _l(t) {
    var e = t.alternate;
    U(Mt, Mt.current & 1), U(he, t), ze === null && (e === null || qa.current !== null || e.memoizedState !== null) && (ze = t);
  }
  function xc(t) {
    U(Mt, Mt.current), U(he, t), ze === null && (ze = t);
  }
  function Cs(t) {
    t.tag === 22 ? (U(Mt, Mt.current), U(he, t), ze === null && (ze = t)) : Sl(t);
  }
  function Sl() {
    U(Mt, Mt.current), U(he, he.current);
  }
  function ve(t) {
    M(he), ze === t && (ze = null), M(Mt);
  }
  var Mt = y(0);
  function Hu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Hf(l) || Rf(l))) return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var ke = 0, X = null, ct = null, Ut = null, Ru = !1, ja = !1, ua = !1, qu = 0, xn = 0, Ya = null, j0 = 0;
  function zt() {
    throw Error(s(321));
  }
  function Cc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++) if (!re(t[l], e[l])) return !1;
    return !0;
  }
  function Uc(t, e, l, a, n, u) {
    return ke = u, X = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, C.H = t === null || t.memoizedState === null ? dr : Zc, ua = !1, u = l(a, n), ua = !1, ja && (u = Ds(e, l, a, n)), Us(t), u;
  }
  function Us(t) {
    C.H = Dn;
    var e = ct !== null && ct.next !== null;
    if (ke = 0, Ut = ct = X = null, Ru = !1, xn = 0, Ya = null, e) throw Error(s(300));
    t === null || Dt || (t = t.dependencies, t !== null && Ou(t) && (Dt = !0));
  }
  function Ds(t, e, l, a) {
    X = t;
    var n = 0;
    do {
      if (ja && (Ya = null), xn = 0, ja = !1, 25 <= n) throw Error(s(301));
      if (n += 1, Ut = ct = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      C.H = hr, u = e(l, a);
    } while (ja);
    return u;
  }
  function Y0() {
    var t = C.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Cn(e) : e, t = t.useState()[0], (ct !== null ? ct.memoizedState : null) !== t && (X.flags |= 1024), e;
  }
  function Dc() {
    var t = qu !== 0;
    return qu = 0, t;
  }
  function Nc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Bc(t) {
    if (Ru) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Ru = !1;
    }
    ke = 0, Ut = ct = X = null, ja = !1, xn = qu = 0, Ya = null;
  }
  function Kt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ut === null ? X.memoizedState = Ut = t : Ut = Ut.next = t, Ut;
  }
  function xt() {
    if (ct === null) {
      var t = X.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ct.next;
    var e = Ut === null ? X.memoizedState : Ut.next;
    if (e !== null) Ut = e, ct = t;
    else {
      if (t === null)
        throw X.alternate === null ? Error(s(467)) : Error(s(310));
      ct = t, t = {
        memoizedState: ct.memoizedState,
        baseState: ct.baseState,
        baseQueue: ct.baseQueue,
        queue: ct.queue,
        next: null
      }, Ut === null ? X.memoizedState = Ut = t : Ut = Ut.next = t;
    }
    return Ut;
  }
  function ju() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Cn(t) {
    var e = xn;
    return xn += 1, Ya === null && (Ya = []), t = Ss(Ya, t, e), e = X, (Ut === null ? e.memoizedState : Ut.next) === null && (e = e.alternate, C.H = e === null || e.memoizedState === null ? dr : Zc), t;
  }
  function Yu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Cn(t);
      if (t.$$typeof === Yt) return Xt(t);
    }
    throw Error(s(438, String(t)));
  }
  function Hc(t) {
    var e = null, l = X.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = X.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e ??= {
      data: [],
      index: 0
    }, l === null && (l = ju(), X.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Gl;
    return e.index++, l;
  }
  function We(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function $u(t) {
    return Rc(xt(), ct, t);
  }
  function Rc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      e.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var o = i = null, h = null, b = e, E = !1;
      do {
        var O = b.lane & -536870913;
        if (O !== b.lane ? (k & O) === O : (ke & O) === O) {
          var _ = b.revertLane;
          if (_ === 0) h !== null && (h = h.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }), O === Na && (E = !0);
          else if ((ke & _) === _) {
            b = b.next, _ === Na && (E = !0);
            continue;
          } else O = {
            lane: 0,
            revertLane: b.revertLane,
            gesture: null,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, h === null ? (o = h = O, i = u) : h = h.next = O, X.lanes |= _, zl |= _;
          O = b.action, ua && l(u, O), u = b.hasEagerState ? b.eagerState : l(u, O);
        } else _ = {
          lane: O,
          revertLane: b.revertLane,
          gesture: b.gesture,
          action: b.action,
          hasEagerState: b.hasEagerState,
          eagerState: b.eagerState,
          next: null
        }, h === null ? (o = h = _, i = u) : h = h.next = _, X.lanes |= O, zl |= O;
        b = b.next;
      } while (b !== null && b !== e);
      if (h === null ? i = u : h.next = o, !re(u, t.memoizedState) && (Dt = !0, E && (l = Ba, l !== null))) throw l;
      t.memoizedState = u, t.baseState = i, t.baseQueue = h, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function qc(t) {
    var e = xt(), l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      re(u, e.memoizedState) || (Dt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function Ns(t, e, l) {
    var a = X, n = xt(), u = I;
    if (u) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = e();
    var i = !re((ct || n).memoizedState, l);
    if (i && (n.memoizedState = l, Dt = !0), n = n.queue, $c(Rs.bind(null, a, n, t), [t]), n.getSnapshot !== e || i || Ut !== null && Ut.memoizedState.tag & 1) {
      if (a.flags |= 2048, $a(9, { destroy: void 0 }, Hs.bind(null, a, n, l, e), null), rt === null) throw Error(s(349));
      u || (ke & 127) !== 0 || Bs(a, e, l);
    }
    return l;
  }
  function Bs(t, e, l) {
    t.flags |= 16384, t = {
      getSnapshot: e,
      value: l
    }, e = X.updateQueue, e === null ? (e = ju(), X.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Hs(t, e, l, a) {
    e.value = l, e.getSnapshot = a, qs(e) && js(t);
  }
  function Rs(t, e, l) {
    return l(function() {
      qs(e) && js(t);
    });
  }
  function qs(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !re(t, l);
    } catch {
      return !0;
    }
  }
  function js(t) {
    var e = Jl(t, 2);
    e !== null && le(e, t, 2);
  }
  function jc(t) {
    var e = Kt();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), ua) {
        dl(!0);
        try {
          l();
        } finally {
          dl(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: We,
      lastRenderedState: t
    }, e;
  }
  function Ys(t, e, l, a) {
    return t.baseState = l, Rc(t, ct, typeof a == "function" ? a : We);
  }
  function $0(t, e, l, a, n) {
    if (Lu(t)) throw Error(s(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      C.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, $s(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function $s(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = C.T, i = {};
      C.T = i;
      try {
        var o = l(n, a), h = C.S;
        h !== null && h(i, o), Vs(t, e, o);
      } catch (b) {
        Yc(t, e, b);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), C.T = u;
      }
    } else try {
      u = l(n, a), Vs(t, e, u);
    } catch (b) {
      Yc(t, e, b);
    }
  }
  function Vs(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
      Gs(t, e, a);
    }, function(a) {
      return Yc(t, e, a);
    }) : Gs(t, e, l);
  }
  function Gs(t, e, l) {
    e.status = "fulfilled", e.value = l, Ls(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, $s(t, l)));
  }
  function Yc(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, Ls(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Ls(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Xs(t, e) {
    return e;
  }
  function Qs(t, e) {
    if (I) {
      var l = rt.formState;
      if (l !== null) {
        t: {
          var a = X;
          if (I) {
            if (vt) {
              e: {
                for (var n = vt, u = Ee; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = Oe(n.nextSibling), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                vt = Oe(n.nextSibling), a = n.data === "F!";
                break t;
              }
            }
            pl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = Kt(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xs,
      lastRenderedState: e
    }, l.queue = a, l = or.bind(null, X, a), a.dispatch = l, a = jc(!1), u = Qc.bind(null, X, !1, a.queue), a = Kt(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = $0.bind(null, X, n, u, l), n.dispatch = l, a.memoizedState = t, [
      e,
      l,
      !1
    ];
  }
  function Zs(t) {
    return ws(xt(), ct, t);
  }
  function ws(t, e, l) {
    if (e = Rc(t, e, Xs)[0], t = $u(We)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var a = Cn(e);
    } catch (i) {
      throw i === Ha ? Cu : i;
    }
    else a = e;
    e = xt();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && (X.flags |= 2048, $a(9, { destroy: void 0 }, V0.bind(null, n, l), null)), [
      a,
      u,
      t
    ];
  }
  function V0(t, e) {
    t.action = e;
  }
  function Ks(t) {
    var e = xt(), l = ct;
    if (l !== null) return ws(e, l, t);
    xt(), e = e.memoizedState, l = xt();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [
      e,
      a,
      !1
    ];
  }
  function $a(t, e, l, a) {
    return t = {
      tag: t,
      create: l,
      deps: a,
      inst: e,
      next: null
    }, e = X.updateQueue, e === null && (e = ju(), X.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Js() {
    return xt().memoizedState;
  }
  function Vu(t, e, l, a) {
    var n = Kt();
    X.flags |= t, n.memoizedState = $a(1 | e, { destroy: void 0 }, l, a === void 0 ? null : a);
  }
  function Gu(t, e, l, a) {
    var n = xt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    ct !== null && a !== null && Cc(a, ct.memoizedState.deps) ? n.memoizedState = $a(e, u, l, a) : (X.flags |= t, n.memoizedState = $a(1 | e, u, l, a));
  }
  function ks(t, e) {
    Vu(8390656, 8, t, e);
  }
  function $c(t, e) {
    Gu(2048, 8, t, e);
  }
  function G0(t) {
    X.flags |= 4;
    var e = X.updateQueue;
    if (e === null) e = ju(), X.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Ws(t) {
    var e = xt().memoizedState;
    return G0({
      ref: e,
      nextImpl: t
    }), function() {
      if ((at & 2) !== 0) throw Error(s(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Fs(t, e) {
    return Gu(4, 2, t, e);
  }
  function Is(t, e) {
    return Gu(4, 4, t, e);
  }
  function Ps(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null) return t = t(), e.current = t, function() {
      e.current = null;
    };
  }
  function tr(t, e, l) {
    l = l != null ? l.concat([t]) : null, Gu(4, 4, Ps.bind(null, e, t), l);
  }
  function Vc() {
  }
  function er(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Cc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function lr(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Cc(e, a[1])) return a[0];
    if (a = t(), ua) {
      dl(!0);
      try {
        t();
      } finally {
        dl(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function Gc(t, e, l) {
    return l === void 0 || (ke & 1073741824) !== 0 && (k & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = td(), X.lanes |= t, zl |= t, l);
  }
  function ar(t, e, l, a) {
    return re(l, e) ? l : qa.current !== null ? (t = Gc(t, l, a), re(t, e) || (Dt = !0), t) : (ke & 42) === 0 || (ke & 1073741824) !== 0 && (k & 261930) === 0 ? (Dt = !0, t.memoizedState = l) : (t = td(), X.lanes |= t, zl |= t, e);
  }
  function nr(t, e, l, a, n) {
    var u = N.p;
    N.p = u !== 0 && 8 > u ? u : 8;
    var i = C.T, o = {};
    C.T = o, Qc(t, !1, e, l);
    try {
      var h = n(), b = C.S;
      b !== null && b(o, h), h !== null && typeof h == "object" && typeof h.then == "function" ? Un(t, e, q0(h, a), Te(t)) : Un(t, e, a, Te(t));
    } catch (E) {
      Un(t, e, {
        then: function() {
        },
        status: "rejected",
        reason: E
      }, Te());
    } finally {
      N.p = u, i !== null && o.types !== null && (i.types = o.types), C.T = i;
    }
  }
  function L0() {
  }
  function Lc(t, e, l, a) {
    if (t.tag !== 5) throw Error(s(476));
    var n = ur(t).queue;
    nr(t, n, e, lt, l === null ? L0 : function() {
      return ir(t), l(a);
    });
  }
  function ur(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: lt,
      baseState: lt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: We,
        lastRenderedState: lt
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: We,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function ir(t) {
    var e = ur(t);
    e.next === null && (e = t.alternate.memoizedState), Un(t, e.next.queue, {}, Te());
  }
  function Xc() {
    return Xt(Kn);
  }
  function cr() {
    return xt().memoizedState;
  }
  function fr() {
    return xt().memoizedState;
  }
  function X0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Te();
          t = aa(l);
          var a = na(e, t, l);
          a !== null && (le(a, e, l), Tn(a, e, l)), e = { cache: gc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Q0(t, e, l) {
    var a = Te();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Lu(t) ? sr(e, l) : (l = cc(t, e, l, a), l !== null && (le(l, t, a), rr(l, e, a)));
  }
  function or(t, e, l) {
    Un(t, e, l, Te());
  }
  function Un(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Lu(t)) sr(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
        var i = e.lastRenderedState, o = u(i, l);
        if (n.hasEagerState = !0, n.eagerState = o, re(o, i)) return Au(t, e, n, 0), rt === null && Su(), !1;
      } catch {
      }
      if (l = cc(t, e, n, a), l !== null) return le(l, t, a), rr(l, e, a), !0;
    }
    return !1;
  }
  function Qc(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: Ef(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Lu(t)) {
      if (e) throw Error(s(479));
    } else e = cc(t, l, a, 2), e !== null && le(e, t, 2);
  }
  function Lu(t) {
    var e = t.alternate;
    return t === X || e !== null && e === X;
  }
  function sr(t, e) {
    ja = Ru = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function rr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, yo(t, l);
    }
  }
  var Dn = {
    readContext: Xt,
    use: Yu,
    useCallback: zt,
    useContext: zt,
    useEffect: zt,
    useImperativeHandle: zt,
    useLayoutEffect: zt,
    useInsertionEffect: zt,
    useMemo: zt,
    useReducer: zt,
    useRef: zt,
    useState: zt,
    useDebugValue: zt,
    useDeferredValue: zt,
    useTransition: zt,
    useSyncExternalStore: zt,
    useId: zt,
    useHostTransitionStatus: zt,
    useFormState: zt,
    useActionState: zt,
    useOptimistic: zt,
    useMemoCache: zt,
    useCacheRefresh: zt
  };
  Dn.useEffectEvent = zt;
  var dr = {
    readContext: Xt,
    use: Yu,
    useCallback: function(t, e) {
      return Kt().memoizedState = [t, e === void 0 ? null : e], t;
    },
    useContext: Xt,
    useEffect: ks,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Vu(4194308, 4, Ps.bind(null, e, t), l);
    },
    useLayoutEffect: function(t, e) {
      return Vu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Vu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = Kt();
      e = e === void 0 ? null : e;
      var a = t();
      if (ua) {
        dl(!0);
        try {
          t();
        } finally {
          dl(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = Kt();
      if (l !== void 0) {
        var n = l(e);
        if (ua) {
          dl(!0);
          try {
            l(e);
          } finally {
            dl(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = Q0.bind(null, X, t), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = Kt();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = jc(t);
      var e = t.queue, l = or.bind(null, X, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Vc,
    useDeferredValue: function(t, e) {
      return Gc(Kt(), t, e);
    },
    useTransition: function() {
      var t = jc(!1);
      return t = nr.bind(null, X, t.queue, !0, !1), Kt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = X, n = Kt();
      if (I) {
        if (l === void 0) throw Error(s(407));
        l = l();
      } else {
        if (l = e(), rt === null) throw Error(s(349));
        (k & 127) !== 0 || Bs(a, e, l);
      }
      n.memoizedState = l;
      var u = {
        value: l,
        getSnapshot: e
      };
      return n.queue = u, ks(Rs.bind(null, a, u, t), [t]), a.flags |= 2048, $a(9, { destroy: void 0 }, Hs.bind(null, a, u, l, e), null), l;
    },
    useId: function() {
      var t = Kt(), e = rt.identifierPrefix;
      if (I) {
        var l = je, a = qe;
        l = (a & ~(1 << 32 - se(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = qu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else l = j0++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Xc,
    useFormState: Qs,
    useActionState: Qs,
    useOptimistic: function(t) {
      var e = Kt();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Qc.bind(null, X, !0, l), l.dispatch = e, [t, e];
    },
    useMemoCache: Hc,
    useCacheRefresh: function() {
      return Kt().memoizedState = X0.bind(null, X);
    },
    useEffectEvent: function(t) {
      var e = Kt(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((at & 2) !== 0) throw Error(s(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Zc = {
    readContext: Xt,
    use: Yu,
    useCallback: er,
    useContext: Xt,
    useEffect: $c,
    useImperativeHandle: tr,
    useInsertionEffect: Fs,
    useLayoutEffect: Is,
    useMemo: lr,
    useReducer: $u,
    useRef: Js,
    useState: function() {
      return $u(We);
    },
    useDebugValue: Vc,
    useDeferredValue: function(t, e) {
      return ar(xt(), ct.memoizedState, t, e);
    },
    useTransition: function() {
      var t = $u(We)[0], e = xt().memoizedState;
      return [typeof t == "boolean" ? t : Cn(t), e];
    },
    useSyncExternalStore: Ns,
    useId: cr,
    useHostTransitionStatus: Xc,
    useFormState: Zs,
    useActionState: Zs,
    useOptimistic: function(t, e) {
      return Ys(xt(), ct, t, e);
    },
    useMemoCache: Hc,
    useCacheRefresh: fr
  };
  Zc.useEffectEvent = Ws;
  var hr = {
    readContext: Xt,
    use: Yu,
    useCallback: er,
    useContext: Xt,
    useEffect: $c,
    useImperativeHandle: tr,
    useInsertionEffect: Fs,
    useLayoutEffect: Is,
    useMemo: lr,
    useReducer: qc,
    useRef: Js,
    useState: function() {
      return qc(We);
    },
    useDebugValue: Vc,
    useDeferredValue: function(t, e) {
      var l = xt();
      return ct === null ? Gc(l, t, e) : ar(l, ct.memoizedState, t, e);
    },
    useTransition: function() {
      var t = qc(We)[0], e = xt().memoizedState;
      return [typeof t == "boolean" ? t : Cn(t), e];
    },
    useSyncExternalStore: Ns,
    useId: cr,
    useHostTransitionStatus: Xc,
    useFormState: Ks,
    useActionState: Ks,
    useOptimistic: function(t, e) {
      var l = xt();
      return ct !== null ? Ys(l, ct, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Hc,
    useCacheRefresh: fr
  };
  hr.useEffectEvent = Ws;
  function wc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : j({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Kc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = Te(), n = aa(a);
      n.payload = e, l != null && (n.callback = l), e = na(t, n, a), e !== null && (le(e, t, a), Tn(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = Te(), n = aa(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = na(t, n, a), e !== null && (le(e, t, a), Tn(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Te(), a = aa(l);
      a.tag = 2, e != null && (a.callback = e), e = na(t, a, l), e !== null && (le(e, t, l), Tn(e, t, l));
    }
  };
  function vr(t, e, l, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !pn(l, a) || !pn(n, u) : !0;
  }
  function yr(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Kc.enqueueReplaceState(e, e.state, null);
  }
  function ia(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = j({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function Z0(t) {
    _u(t);
  }
  function w0(t) {
  }
  function K0(t) {
    _u(t);
  }
  function Xu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function mr(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Jc(t, e, l) {
    return l = aa(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Xu(t, e);
    }, l;
  }
  function pr(t) {
    return t = aa(t), t.tag = 3, t;
  }
  function gr(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        mr(e, l, a);
      };
    }
    var i = l.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      mr(e, l, a), typeof n != "function" && (Tl === null ? Tl = /* @__PURE__ */ new Set([this]) : Tl.add(this));
      var o = a.stack;
      this.componentDidCatch(a.value, { componentStack: o !== null ? o : "" });
    });
  }
  function J0(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && Da(e, l, n, !0), l = he.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return ze === null ? ei() : l.alternate === null && Tt === 0 && (Tt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Uu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), _f(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Uu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), _f(t, a, n)), !1;
        }
        throw Error(s(435, l.tag));
      }
      return _f(t, a, n), ei(), !1;
    }
    if (I) return e = he.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== hc && (t = Error(s(422), { cause: a }), _n(_e(t, l)))) : (a !== hc && (e = Error(s(423), { cause: a }), _n(_e(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = _e(a, l), n = Jc(t.stateNode, a, n), zc(t, n), Tt !== 4 && (Tt = 2)), !1;
    var u = Error(s(520), { cause: a });
    if (u = _e(u, l), $n === null ? $n = [u] : $n.push(u), Tt !== 4 && (Tt = 2), e === null) return !0;
    a = _e(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Jc(l.stateNode, a, t), zc(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Tl === null || !Tl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = pr(n), gr(n, t, l, a), zc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var kc = Error(s(461)), Dt = !1;
  function Qt(t, e, l, a) {
    e.child = t === null ? Ts(e, null, l, a) : la(e, t.child, l, a);
  }
  function br(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var o in a) o !== "ref" && (i[o] = a[o]);
    } else i = a;
    return Il(e), a = Uc(t, e, l, i, u, n), o = Dc(), t !== null && !Dt ? (Nc(t, e, n), Fe(t, e, n)) : (I && o && rc(e), e.flags |= 1, Qt(t, e, a, n), e.child);
  }
  function _r(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !fc(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Sr(t, e, u, a, n)) : (t = zu(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !af(t, n)) {
      var i = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : pn, l(i, a) && t.ref === e.ref) return Fe(t, e, n);
    }
    return e.flags |= 1, t = Ze(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Sr(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (pn(u, a) && t.ref === e.ref) if (Dt = !1, e.pendingProps = a = u, af(t, n)) (t.flags & 131072) !== 0 && (Dt = !0);
      else return e.lanes = t.lanes, Fe(t, e, n);
    }
    return Wc(t, e, l, a, n);
  }
  function Ar(t, e, l, a) {
    var n = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, t !== null) {
          for (a = e.child = t.child, n = 0; a !== null; ) n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, e.child = null;
        return Er(t, e, u, l, a);
      }
      if ((l & 536870912) !== 0) e.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && xu(e, u !== null ? u.cachePool : null), u !== null ? xs(e, u) : Oc(), Cs(e);
      else return a = e.lanes = 536870912, Er(t, e, u !== null ? u.baseLanes | l : l, l, a);
    } else u !== null ? (xu(e, u.cachePool), xs(e, u), Sl(e), e.memoizedState = null) : (t !== null && xu(e, null), Oc(), Sl(e));
    return Qt(t, e, n, l), e.child;
  }
  function Nn(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Er(t, e, l, a, n) {
    var u = _c();
    return u = u === null ? null : {
      parent: Ct._currentValue,
      pool: u
    }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && xu(e, null), Oc(), Cs(e), t !== null && Da(t, e, a, !0), e.childLanes = n, null;
  }
  function Qu(t, e) {
    return e = wu({
      mode: e.mode,
      children: e.children
    }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function zr(t, e, l) {
    return la(e, t.child, null, l), t = Qu(e, e.pendingProps), t.flags |= 2, ve(e), e.memoizedState = null, t;
  }
  function k0(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (I) {
        if (a.mode === "hidden") return t = Qu(e, a), e.lanes = 536870912, Nn(null, t);
        if (xc(e), (t = vt) ? (t = jd(t, Ee), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: yl !== null ? {
            id: qe,
            overflow: je
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ss(t), l.return = e, e.child = l, Lt = e, vt = null)) : t = null, t === null) throw pl(e);
        return e.lanes = 536870912, null;
      }
      return Qu(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (xc(e), n) if (e.flags & 256) e.flags &= -257, e = zr(t, e, l);
      else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(s(558));
      else if (Dt || Da(t, e, l, !1), n = (l & t.childLanes) !== 0, Dt || n) {
        if (a = rt, a !== null && (i = mo(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Jl(t, i), le(a, t, i), kc;
        ei(), e = zr(t, e, l);
      } else t = u.treeContext, vt = Oe(i.nextSibling), Lt = e, I = !0, ml = null, Ee = !1, t !== null && hs(e, t), e = Qu(e, a), e.flags |= 4096;
      return e;
    }
    return t = Ze(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Zu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(s(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Wc(t, e, l, a, n) {
    return Il(e), l = Uc(t, e, l, a, void 0, n), a = Dc(), t !== null && !Dt ? (Nc(t, e, n), Fe(t, e, n)) : (I && a && rc(e), e.flags |= 1, Qt(t, e, l, n), e.child);
  }
  function Tr(t, e, l, a, n, u) {
    return Il(e), e.updateQueue = null, l = Ds(e, a, l, n), Us(t), a = Dc(), t !== null && !Dt ? (Nc(t, e, u), Fe(t, e, u)) : (I && a && rc(e), e.flags |= 1, Qt(t, e, l, u), e.child);
  }
  function Or(t, e, l, a, n) {
    if (Il(e), e.stateNode === null) {
      var u = Ma, i = l.contextType;
      typeof i == "object" && i !== null && (u = Xt(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Kc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, Ac(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Xt(i) : Ma, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (wc(e, l, i, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Kc.enqueueReplaceState(u, u.state, null), Mn(e, a, u, n), On(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var o = e.memoizedProps, h = ia(l, o);
      u.props = h;
      var b = u.context, E = l.contextType;
      i = Ma, typeof E == "object" && E !== null && (i = Xt(E));
      var O = l.getDerivedStateFromProps;
      E = typeof O == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || b !== i) && yr(e, u, a, i), bl = !1;
      var _ = e.memoizedState;
      u.state = _, Mn(e, a, u, n), On(), b = e.memoizedState, o || _ !== b || bl ? (typeof O == "function" && (wc(e, l, O, a), b = e.memoizedState), (h = bl || vr(e, l, h, a, _, b, i)) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = b), u.props = a, u.state = b, u.context = i, a = h) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, Ec(t, e), i = e.memoizedProps, E = ia(l, i), u.props = E, O = e.pendingProps, _ = u.context, b = l.contextType, h = Ma, typeof b == "object" && b !== null && (h = Xt(b)), o = l.getDerivedStateFromProps, (b = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== O || _ !== h) && yr(e, u, a, h), bl = !1, _ = e.memoizedState, u.state = _, Mn(e, a, u, n), On();
      var S = e.memoizedState;
      i !== O || _ !== S || bl || t !== null && t.dependencies !== null && Ou(t.dependencies) ? (typeof o == "function" && (wc(e, l, o, a), S = e.memoizedState), (E = bl || vr(e, l, E, a, _, S, h) || t !== null && t.dependencies !== null && Ou(t.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, S, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, S, h)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = S), u.props = a, u.state = S, u.context = h, a = E) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Zu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = la(e, t.child, null, n), e.child = la(e, null, l, n)) : Qt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = Fe(t, e, n), t;
  }
  function Mr(t, e, l, a) {
    return Wl(), e.flags |= 256, Qt(t, e, l, a), e.child;
  }
  var Fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ic(t) {
    return {
      baseLanes: t,
      cachePool: bs()
    };
  }
  function Pc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= me), t;
  }
  function xr(t, e, l) {
    var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Mt.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (I) {
        if (n ? _l(e) : Sl(e), (t = vt) ? (t = jd(t, Ee), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: yl !== null ? {
            id: qe,
            overflow: je
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ss(t), l.return = e, e.child = l, Lt = e, vt = null)) : t = null, t === null) throw pl(e);
        return Rf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = a.children;
      return a = a.fallback, n ? (Sl(e), n = e.mode, o = wu({
        mode: "hidden",
        children: o
      }, n), a = kl(a, n, l, null), o.return = e, a.return = e, o.sibling = a, e.child = o, a = e.child, a.memoizedState = Ic(l), a.childLanes = Pc(t, i, l), e.memoizedState = Fc, Nn(null, a)) : (_l(e), tf(e, o));
    }
    var h = t.memoizedState;
    if (h !== null && (o = h.dehydrated, o !== null)) {
      if (u) e.flags & 256 ? (_l(e), e.flags &= -257, e = ef(t, e, l)) : e.memoizedState !== null ? (Sl(e), e.child = t.child, e.flags |= 128, e = null) : (Sl(e), o = a.fallback, n = e.mode, a = wu({
        mode: "visible",
        children: a.children
      }, n), o = kl(o, n, l, null), o.flags |= 2, a.return = e, o.return = e, a.sibling = o, e.child = a, la(e, t.child, null, l), a = e.child, a.memoizedState = Ic(l), a.childLanes = Pc(t, i, l), e.memoizedState = Fc, e = Nn(null, a));
      else if (_l(e), Rf(o)) {
        if (i = o.nextSibling && o.nextSibling.dataset, i) var b = i.dgst;
        i = b, a = Error(s(419)), a.stack = "", a.digest = i, _n({
          value: a,
          source: null,
          stack: null
        }), e = ef(t, e, l);
      } else if (Dt || Da(t, e, l, !1), i = (l & t.childLanes) !== 0, Dt || i) {
        if (i = rt, i !== null && (a = mo(i, l), a !== 0 && a !== h.retryLane)) throw h.retryLane = a, Jl(t, a), le(i, t, a), kc;
        Hf(o) || ei(), e = ef(t, e, l);
      } else Hf(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = h.treeContext, vt = Oe(o.nextSibling), Lt = e, I = !0, ml = null, Ee = !1, t !== null && hs(e, t), e = tf(e, a.children), e.flags |= 4096);
      return e;
    }
    return n ? (Sl(e), o = a.fallback, n = e.mode, h = t.child, b = h.sibling, a = Ze(h, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = h.subtreeFlags & 65011712, b !== null ? o = Ze(b, o) : (o = kl(o, n, l, null), o.flags |= 2), o.return = e, a.return = e, a.sibling = o, e.child = a, Nn(null, a), a = e.child, o = t.child.memoizedState, o === null ? o = Ic(l) : (n = o.cachePool, n !== null ? (h = Ct._currentValue, n = n.parent !== h ? {
      parent: h,
      pool: h
    } : n) : n = bs(), o = {
      baseLanes: o.baseLanes | l,
      cachePool: n
    }), a.memoizedState = o, a.childLanes = Pc(t, i, l), e.memoizedState = Fc, Nn(t.child, a)) : (_l(e), l = t.child, t = l.sibling, l = Ze(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function tf(t, e) {
    return e = wu({
      mode: "visible",
      children: e
    }, t.mode), e.return = t, t.child = e;
  }
  function wu(t, e) {
    return t = de(22, t, null, e), t.lanes = 0, t;
  }
  function ef(t, e, l) {
    return la(e, t.child, null, l), t = tf(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function Cr(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), mc(t.return, e, l);
  }
  function lf(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n, i.treeForkCount = u);
  }
  function Ur(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = Mt.current, o = (i & 2) !== 0;
    if (o ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, U(Mt, i), Qt(t, e, a, l), a = I ? bn : 0, !o && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && Cr(t, l, e);
      else if (t.tag === 19) Cr(t, l, e);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break t;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) break t;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; ) t = l.alternate, t !== null && Hu(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), lf(e, !1, n, l, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && Hu(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        lf(e, !0, l, null, u, a);
        break;
      case "together":
        lf(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Fe(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), zl |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
      if (Da(t, e, l, !1), (l & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (t = e.child, l = Ze(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = Ze(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function af(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ou(t)));
  }
  function W0(t, e, l) {
    switch (e.tag) {
      case 3:
        wt(e, e.stateNode.containerInfo), gl(e, Ct, t.memoizedState.cache), Wl();
        break;
      case 27:
      case 5:
        an(e);
        break;
      case 4:
        wt(e, e.stateNode.containerInfo);
        break;
      case 10:
        gl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, xc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (_l(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? xr(t, e, l) : (_l(e), t = Fe(t, e, l), t !== null ? t.sibling : null);
        _l(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (Da(t, e, l, !1), a = (l & e.childLanes) !== 0), n) {
          if (a) return Ur(t, e, l);
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), U(Mt, Mt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Ar(t, e, l, e.pendingProps);
      case 24:
        gl(e, Ct, t.memoizedState.cache);
    }
    return Fe(t, e, l);
  }
  function Dr(t, e, l) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) Dt = !0;
    else {
      if (!af(t, l) && (e.flags & 128) === 0) return Dt = !1, W0(t, e, l);
      Dt = (t.flags & 131072) !== 0;
    }
    else Dt = !1, I && (e.flags & 1048576) !== 0 && ds(e, bn, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = ta(e.elementType), e.type = t, typeof t == "function") fc(t) ? (a = ia(t, a), e.tag = 1, e = Or(null, e, t, a, l)) : (e.tag = 0, e = Wc(null, e, t, a, l));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === xe) {
                e.tag = 11, e = br(null, e, t, a, l);
                break t;
              } else if (n === P) {
                e.tag = 14, e = _r(null, e, t, a, l);
                break t;
              }
            }
            throw e = Ce(t) || t, Error(s(306, e, ""));
          }
        }
        return e;
      case 0:
        return Wc(t, e, e.type, e.pendingProps, l);
      case 1:
        return a = e.type, n = ia(a, e.pendingProps), Or(t, e, a, n, l);
      case 3:
        t: {
          if (wt(e, e.stateNode.containerInfo), t === null) throw Error(s(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, Ec(t, e), Mn(e, a, null, l);
          var i = e.memoizedState;
          if (a = i.cache, gl(e, Ct, a), a !== u.cache && pc(e, [Ct], l, !0), On(), a = i.element, u.isDehydrated) if (u = {
            element: a,
            isDehydrated: !1,
            cache: i.cache
          }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
            e = Mr(t, e, a, l);
            break t;
          } else if (a !== n) {
            n = _e(Error(s(424)), e), _n(n), e = Mr(t, e, a, l);
            break t;
          } else
            for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, vt = Oe(t.firstChild), Lt = e, I = !0, ml = null, Ee = !0, l = Ts(e, null, a, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Wl(), a === n) {
              e = Fe(t, e, l);
              break t;
            }
            Qt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Zu(t, e), t === null ? (l = Xd(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : I || (l = e.type, t = e.pendingProps, a = fi(w.current).createElement(l), a[Gt] = e, a[Wt] = t, Zt(a, l, t), $t(a), e.stateNode = a) : e.memoizedState = Xd(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return an(e), t === null && I && (a = e.stateNode = Vd(e.type, e.pendingProps, w.current), Lt = e, Ee = !0, n = vt, Cl(e.type) ? (qf = n, vt = Oe(a.firstChild)) : vt = n), Qt(t, e, e.pendingProps.children, l), Zu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && I && ((n = a = vt) && (a = zv(a, e.type, e.pendingProps, Ee), a !== null ? (e.stateNode = a, Lt = e, vt = Oe(a.firstChild), Ee = !1, n = !0) : n = !1), n || pl(e)), an(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, Df(n, u) ? a = null : i !== null && Df(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = Uc(t, e, Y0, null, null, l), Kn._currentValue = n), Zu(t, e), Qt(t, e, a, l), e.child;
      case 6:
        return t === null && I && ((t = l = vt) && (l = Tv(l, e.pendingProps, Ee), l !== null ? (e.stateNode = l, Lt = e, vt = null, t = !0) : t = !1), t || pl(e)), null;
      case 13:
        return xr(t, e, l);
      case 4:
        return wt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = la(e, null, a, l) : Qt(t, e, a, l), e.child;
      case 11:
        return br(t, e, e.type, e.pendingProps, l);
      case 7:
        return Qt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Qt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Qt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return a = e.pendingProps, gl(e, e.type, a.value), Qt(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Il(e), n = Xt(n), a = a(n), e.flags |= 1, Qt(t, e, a, l), e.child;
      case 14:
        return _r(t, e, e.type, e.pendingProps, l);
      case 15:
        return Sr(t, e, e.type, e.pendingProps, l);
      case 19:
        return Ur(t, e, l);
      case 31:
        return k0(t, e, l);
      case 22:
        return Ar(t, e, l, e.pendingProps);
      case 24:
        return Il(e), a = Xt(Ct), t === null ? (n = _c(), n === null && (n = rt, u = gc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
          parent: a,
          cache: n
        }, Ac(e), gl(e, Ct, n)) : ((t.lanes & l) !== 0 && (Ec(t, e), Mn(e, null, null, l), On()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
          parent: a,
          cache: a
        }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), gl(e, Ct, a)) : (a = u.cache, gl(e, Ct, a), a !== n.cache && pc(e, [Ct], l, !0))), Qt(t, e, e.pendingProps.children, l), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function Ie(t) {
    t.flags |= 4;
  }
  function nf(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192;
      else if (nd()) t.flags |= 8192;
      else throw ea = Uu, Sc;
    } else t.flags &= -16777217;
  }
  function Nr(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Jd(e)) if (nd()) t.flags |= 8192;
    else throw ea = Uu, Sc;
  }
  function Ku(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? ho() : 536870912, t.lanes |= e, Xa |= e);
  }
  function Bn(t, e) {
    if (!I) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var l = null; e !== null; ) e.alternate !== null && (l = e), e = e.sibling;
        l === null ? t.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = t.tail;
        for (var a = null; l !== null; ) l.alternate !== null && (a = l), l = l.sibling;
        a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
    }
  }
  function yt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e) for (var n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else for (n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function F0(t, e, l) {
    var a = e.pendingProps;
    switch (dc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yt(e), null;
      case 1:
        return yt(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Je(Ct), Ot(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Ua(e) ? Ie(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, vc())), yt(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (Ie(e), u !== null ? (yt(e), Nr(e, u)) : (yt(e), nf(e, n, null, a, l))) : u ? u !== t.memoizedState ? (Ie(e), yt(e), Nr(e, u)) : (yt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Ie(e), yt(e), nf(e, n, t, a, l)), null;
      case 27:
        if (au(e), l = w.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Ie(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(s(166));
            return yt(e), null;
          }
          t = V.current, Ua(e) ? vs(e, t) : (t = Vd(n, a, l), e.stateNode = t, Ie(e));
        }
        return yt(e), null;
      case 5:
        if (au(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Ie(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(s(166));
            return yt(e), null;
          }
          if (u = V.current, Ua(e)) vs(e, u);
          else {
            var i = fi(w.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                    break;
                  case "select":
                    u = typeof a.is == "string" ? i.createElement("select", { is: a.is }) : i.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            u[Gt] = e, u[Wt] = a;
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = u;
            t: switch (Zt(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Ie(e);
          }
        }
        return yt(e), nf(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Ie(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(s(166));
          if (t = w.current, Ua(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = Lt, n !== null) switch (n.tag) {
              case 27:
              case 5:
                a = n.memoizedProps;
            }
            t[Gt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Cd(t.nodeValue, l)), t || pl(e, !0);
          } else t = fi(t).createTextNode(a), t[Gt] = e, e.stateNode = t;
        }
        return yt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Ua(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(s(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(557));
              t[Gt] = e;
            } else Wl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            yt(e), t = !1;
          } else l = vc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (ve(e), e) : (ve(e), null);
          if ((e.flags & 128) !== 0) throw Error(s(558));
        }
        return yt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Ua(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(s(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
              n[Gt] = e;
            } else Wl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            yt(e), n = !1;
          } else n = vc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (ve(e), e) : (ve(e), null);
        }
        return ve(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Ku(e, e.updateQueue), yt(e), null);
      case 4:
        return Ot(), t === null && Td(e.stateNode.containerInfo), yt(e), null;
      case 10:
        return Je(e.type), yt(e), null;
      case 19:
        if (M(Mt), a = e.memoizedState, a === null) return yt(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null) if (n) Bn(a, !1);
        else {
          if (Tt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
            if (u = Hu(t), u !== null) {
              for (e.flags |= 128, Bn(a, !1), t = u.updateQueue, e.updateQueue = t, Ku(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) os(l, t), l = l.sibling;
              return U(Mt, Mt.current & 1 | 2), I && we(e, a.treeForkCount), e.child;
            }
            t = t.sibling;
          }
          a.tail !== null && fe() > Iu && (e.flags |= 128, n = !0, Bn(a, !1), e.lanes = 4194304);
        }
        else {
          if (!n) if (t = Hu(u), t !== null) {
            if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, Ku(e, t), Bn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !I) return yt(e), null;
          } else 2 * fe() - a.renderingStartTime > Iu && l !== 536870912 && (e.flags |= 128, n = !0, Bn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = fe(), t.sibling = null, l = Mt.current, U(Mt, n ? l & 1 | 2 : l & 1), I && we(e, a.treeForkCount), t) : (yt(e), null);
      case 22:
      case 23:
        return ve(e), Mc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (yt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : yt(e), l = e.updateQueue, l !== null && Ku(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && M(Pl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Je(Ct), yt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function I0(t, e) {
    switch (dc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Je(Ct), Ot(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return au(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (ve(e), e.alternate === null) throw Error(s(340));
          Wl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (ve(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(s(340));
          Wl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return M(Mt), null;
      case 4:
        return Ot(), null;
      case 10:
        return Je(e.type), null;
      case 22:
      case 23:
        return ve(e), Mc(), t !== null && M(Pl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Je(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Br(t, e) {
    switch (dc(e), e.tag) {
      case 3:
        Je(Ct), Ot();
        break;
      case 26:
      case 27:
      case 5:
        au(e);
        break;
      case 4:
        Ot();
        break;
      case 31:
        e.memoizedState !== null && ve(e);
        break;
      case 13:
        ve(e);
        break;
      case 19:
        M(Mt);
        break;
      case 10:
        Je(e.type);
        break;
      case 22:
      case 23:
        ve(e), Mc(), t !== null && M(Pl);
        break;
      case 24:
        Je(Ct);
    }
  }
  function Hn(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create, i = l.inst;
            a = u(), i.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (o) {
      it(e, e.return, o);
    }
  }
  function Al(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, o = i.destroy;
            if (o !== void 0) {
              i.destroy = void 0, n = e;
              var h = l, b = o;
              try {
                b();
              } catch (E) {
                it(n, h, E);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (E) {
      it(e, e.return, E);
    }
  }
  function Hr(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Ms(e, l);
      } catch (a) {
        it(t, t.return, a);
      }
    }
  }
  function Rr(t, e, l) {
    l.props = ia(t.type, t.memoizedProps), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      it(t, e, a);
    }
  }
  function Rn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      it(t, e, n);
    }
  }
  function Ye(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null) if (typeof a == "function") try {
      a();
    } catch (n) {
      it(t, e, n);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof l == "function") try {
      l(null);
    } catch (n) {
      it(t, e, n);
    }
    else l.current = null;
  }
  function qr(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      it(t, t.return, n);
    }
  }
  function uf(t, e, l) {
    try {
      var a = t.stateNode;
      gv(a, t.type, l, e), a[Wt] = e;
    } catch (n) {
      it(t, t.return, n);
    }
  }
  function jr(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Cl(t.type) || t.tag === 4;
  }
  function cf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || jr(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Cl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ff(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Xe));
    else if (a !== 4 && (a === 27 && Cl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (ff(t, e, l), t = t.sibling; t !== null; ) ff(t, e, l), t = t.sibling;
  }
  function Ju(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Cl(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (Ju(t, e, l), t = t.sibling; t !== null; ) Ju(t, e, l), t = t.sibling;
  }
  function Yr(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
      Zt(e, a, l), e[Gt] = t, e[Wt] = l;
    } catch (u) {
      it(t, t.return, u);
    }
  }
  var Pe = !1, Nt = !1, of = !1, $r = typeof WeakSet == "function" ? WeakSet : Set, Vt = null;
  function P0(t, e) {
    if (t = t.containerInfo, Cf = yi, t = ts(t), ec(t)) {
      if ("selectionStart" in t) var l = {
        start: t.selectionStart,
        end: t.selectionEnd
      };
      else t: {
        l = (l = t.ownerDocument) && l.defaultView || window;
        var a = l.getSelection && l.getSelection();
        if (a && a.rangeCount !== 0) {
          l = a.anchorNode;
          var n = a.anchorOffset, u = a.focusNode;
          a = a.focusOffset;
          try {
            l.nodeType, u.nodeType;
          } catch {
            l = null;
            break t;
          }
          var i = 0, o = -1, h = -1, b = 0, E = 0, O = t, _ = null;
          e: for (; ; ) {
            for (var S; O !== l || n !== 0 && O.nodeType !== 3 || (o = i + n), O !== u || a !== 0 && O.nodeType !== 3 || (h = i + a), O.nodeType === 3 && (i += O.nodeValue.length), (S = O.firstChild) !== null; )
              _ = O, O = S;
            for (; ; ) {
              if (O === t) break e;
              if (_ === l && ++b === n && (o = i), _ === u && ++E === a && (h = i), (S = O.nextSibling) !== null) break;
              O = _, _ = O.parentNode;
            }
            O = S;
          }
          l = o === -1 || h === -1 ? null : {
            start: o,
            end: h
          };
        } else l = null;
      }
      l = l || {
        start: 0,
        end: 0
      };
    } else l = null;
    for (Uf = {
      focusedElem: t,
      selectionRange: l
    }, yi = !1, Vt = e; Vt !== null; ) if (e = Vt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Vt = t;
    else for (; Vt !== null; ) {
      switch (e = Vt, u = e.alternate, t = e.flags, e.tag) {
        case 0:
          if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (l = 0; l < t.length; l++) n = t[l], n.ref.impl = n.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && u !== null) {
            t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
            try {
              var Y = ia(l.type, n);
              t = a.getSnapshotBeforeUpdate(Y, u), a.__reactInternalSnapshotBeforeUpdate = t;
            } catch (L) {
              it(l, l.return, L);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) Bf(t);
            else if (l === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Bf(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((t & 1024) !== 0) throw Error(s(163));
      }
      if (t = e.sibling, t !== null) {
        t.return = e.return, Vt = t;
        break;
      }
      Vt = e.return;
    }
  }
  function Vr(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        el(t, l), a & 4 && Hn(5, l);
        break;
      case 1:
        if (el(t, l), a & 4) if (t = l.stateNode, e === null) try {
          t.componentDidMount();
        } catch (i) {
          it(l, l.return, i);
        }
        else {
          var n = ia(l.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            it(l, l.return, i);
          }
        }
        a & 64 && Hr(l), a & 512 && Rn(l, l.return);
        break;
      case 3:
        if (el(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null) switch (l.child.tag) {
            case 27:
            case 5:
              e = l.child.stateNode;
              break;
            case 1:
              e = l.child.stateNode;
          }
          try {
            Ms(t, e);
          } catch (i) {
            it(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Yr(l);
      case 26:
      case 5:
        el(t, l), e === null && a & 4 && qr(l), a & 512 && Rn(l, l.return);
        break;
      case 12:
        el(t, l);
        break;
      case 31:
        el(t, l), a & 4 && Xr(t, l);
        break;
      case 13:
        el(t, l), a & 4 && Qr(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = fv.bind(null, l), Ov(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Pe, !a) {
          e = e !== null && e.memoizedState !== null || Nt, n = Pe;
          var u = Nt;
          Pe = a, (Nt = e) && !u ? ll(t, l, (l.subtreeFlags & 8772) !== 0) : el(t, l), Pe = n, Nt = u;
        }
        break;
      case 30:
        break;
      default:
        el(t, l);
    }
  }
  function Gr(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Gr(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Yi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var mt = null, It = !1;
  function tl(t, e, l) {
    for (l = l.child; l !== null; ) Lr(t, e, l), l = l.sibling;
  }
  function Lr(t, e, l) {
    if (oe && typeof oe.onCommitFiberUnmount == "function") try {
      oe.onCommitFiberUnmount(nn, l);
    } catch {
    }
    switch (l.tag) {
      case 26:
        Nt || Ye(l, e), tl(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Nt || Ye(l, e);
        var a = mt, n = It;
        Cl(l.type) && (mt = l.stateNode, It = !1), tl(t, e, l), Qn(l.stateNode), mt = a, It = n;
        break;
      case 5:
        Nt || Ye(l, e);
      case 6:
        if (a = mt, n = It, mt = null, tl(t, e, l), mt = a, It = n, mt !== null) if (It) try {
          (mt.nodeType === 9 ? mt.body : mt.nodeName === "HTML" ? mt.ownerDocument.body : mt).removeChild(l.stateNode);
        } catch (u) {
          it(l, e, u);
        }
        else try {
          mt.removeChild(l.stateNode);
        } catch (u) {
          it(l, e, u);
        }
        break;
      case 18:
        mt !== null && (It ? (t = mt, Rd(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Fa(t)) : Rd(mt, l.stateNode));
        break;
      case 4:
        a = mt, n = It, mt = l.stateNode.containerInfo, It = !0, tl(t, e, l), mt = a, It = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Al(2, l, e), Nt || Al(4, l, e), tl(t, e, l);
        break;
      case 1:
        Nt || (Ye(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Rr(l, e, a)), tl(t, e, l);
        break;
      case 21:
        tl(t, e, l);
        break;
      case 22:
        Nt = (a = Nt) || l.memoizedState !== null, tl(t, e, l), Nt = a;
        break;
      default:
        tl(t, e, l);
    }
  }
  function Xr(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Fa(t);
      } catch (l) {
        it(e, e.return, l);
      }
    }
  }
  function Qr(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Fa(t);
    } catch (l) {
      it(e, e.return, l);
    }
  }
  function tv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new $r()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new $r()), e;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function ku(t, e) {
    var l = tv(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = ov.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function Pt(t, e) {
    var l = e.deletions;
    if (l !== null) for (var a = 0; a < l.length; a++) {
      var n = l[a], u = t, i = e, o = i;
      t: for (; o !== null; ) {
        switch (o.tag) {
          case 27:
            if (Cl(o.type)) {
              mt = o.stateNode, It = !1;
              break t;
            }
            break;
          case 5:
            mt = o.stateNode, It = !1;
            break t;
          case 3:
          case 4:
            mt = o.stateNode.containerInfo, It = !0;
            break t;
        }
        o = o.return;
      }
      if (mt === null) throw Error(s(160));
      Lr(u, i, n), mt = null, It = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
    }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) Zr(e, t), e = e.sibling;
  }
  var De = null;
  function Zr(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pt(e, t), te(t), a & 4 && (Al(3, t, t.return), Hn(3, t), Al(5, t, t.return));
        break;
      case 1:
        Pt(e, t), te(t), a & 512 && (Nt || l === null || Ye(l, l.return)), a & 64 && Pe && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = De;
        if (Pt(e, t), te(t), a & 512 && (Nt || l === null || Ye(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null) if (a === null) if (t.stateNode === null) {
            t: {
              a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
              e: switch (a) {
                case "title":
                  u = n.getElementsByTagName("title")[0], (!u || u[fn] || u[Gt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Zt(u, a, l), u[Gt] = t, $t(u), a = u;
                  break t;
                case "link":
                  var i = wd("link", "href", n).get(a + (l.href || ""));
                  if (i) {
                    for (var o = 0; o < i.length; o++) if (u = i[o], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                      i.splice(o, 1);
                      break e;
                    }
                  }
                  u = n.createElement(a), Zt(u, a, l), n.head.appendChild(u);
                  break;
                case "meta":
                  if (i = wd("meta", "content", n).get(a + (l.content || ""))) {
                    for (o = 0; o < i.length; o++) if (u = i[o], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                      i.splice(o, 1);
                      break e;
                    }
                  }
                  u = n.createElement(a), Zt(u, a, l), n.head.appendChild(u);
                  break;
                default:
                  throw Error(s(468, a));
              }
              u[Gt] = t, $t(u), a = u;
            }
            t.stateNode = a;
          } else Kd(n, t.type, t.stateNode);
          else t.stateNode = Zd(n, a, t.memoizedProps);
          else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Kd(n, t.type, t.stateNode) : Zd(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && uf(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Pt(e, t), te(t), a & 512 && (Nt || l === null || Ye(l, l.return)), l !== null && a & 4 && uf(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (Pt(e, t), te(t), a & 512 && (Nt || l === null || Ye(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            _a(n, "");
          } catch (Y) {
            it(t, t.return, Y);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, uf(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (of = !0);
        break;
      case 6:
        if (Pt(e, t), te(t), a & 4) {
          if (t.stateNode === null) throw Error(s(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (Y) {
            it(t, t.return, Y);
          }
        }
        break;
      case 3:
        if (ri = null, n = De, De = oi(e.containerInfo), Pt(e, t), De = n, te(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Fa(e.containerInfo);
        } catch (Y) {
          it(t, t.return, Y);
        }
        of && (of = !1, wr(t));
        break;
      case 4:
        a = De, De = oi(t.stateNode.containerInfo), Pt(e, t), te(t), De = a;
        break;
      case 12:
        Pt(e, t), te(t);
        break;
      case 31:
        Pt(e, t), te(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, ku(t, a)));
        break;
      case 13:
        Pt(e, t), te(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Fu = fe()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, ku(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, b = Pe, E = Nt;
        if (Pe = b || n, Nt = E || h, Pt(e, t), Nt = E, Pe = b, te(t), a & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || h || Pe || Nt || ca(t)), l = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (l === null) {
              h = l = e;
              try {
                if (u = h.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  o = h.stateNode;
                  var O = h.memoizedProps.style, _ = O != null && O.hasOwnProperty("display") ? O.display : null;
                  o.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                }
              } catch (Y) {
                it(h, h.return, Y);
              }
            }
          } else if (e.tag === 6) {
            if (l === null) {
              h = e;
              try {
                h.stateNode.nodeValue = n ? "" : h.memoizedProps;
              } catch (Y) {
                it(h, h.return, Y);
              }
            }
          } else if (e.tag === 18) {
            if (l === null) {
              h = e;
              try {
                var S = h.stateNode;
                n ? qd(S, !0) : qd(h.stateNode, !1);
              } catch (Y) {
                it(h, h.return, Y);
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            l === e && (l = null), e = e.return;
          }
          l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
        }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, ku(t, l))));
        break;
      case 19:
        Pt(e, t), te(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, ku(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pt(e, t), te(t);
    }
  }
  function te(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (jr(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode;
            Ju(t, cf(t), n);
            break;
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (_a(u, ""), l.flags &= -33), Ju(t, cf(t), u);
            break;
          case 3:
          case 4:
            var i = l.stateNode.containerInfo;
            ff(t, cf(t), i);
            break;
          default:
            throw Error(s(161));
        }
      } catch (o) {
        it(t, t.return, o);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function wr(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      wr(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function el(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Vr(t, e.alternate, e), e = e.sibling;
  }
  function ca(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Al(4, e, e.return), ca(e);
          break;
        case 1:
          Ye(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Rr(e, e.return, l), ca(e);
          break;
        case 27:
          Qn(e.stateNode);
        case 26:
        case 5:
          Ye(e, e.return), ca(e);
          break;
        case 22:
          e.memoizedState === null && ca(e);
          break;
        case 30:
          ca(e);
          break;
        default:
          ca(e);
      }
      t = t.sibling;
    }
  }
  function ll(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, u = e, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ll(n, u, l), Hn(4, u);
          break;
        case 1:
          if (ll(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount();
          } catch (b) {
            it(a, a.return, b);
          }
          if (a = u, n = a.updateQueue, n !== null) {
            var o = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++) Os(h[n], o);
            } catch (b) {
              it(a, a.return, b);
            }
          }
          l && i & 64 && Hr(u), Rn(u, u.return);
          break;
        case 27:
          Yr(u);
        case 26:
        case 5:
          ll(n, u, l), l && a === null && i & 4 && qr(u), Rn(u, u.return);
          break;
        case 12:
          ll(n, u, l);
          break;
        case 31:
          ll(n, u, l), l && i & 4 && Xr(n, u);
          break;
        case 13:
          ll(n, u, l), l && i & 4 && Qr(n, u);
          break;
        case 22:
          u.memoizedState === null && ll(n, u, l), Rn(u, u.return);
          break;
        case 30:
          break;
        default:
          ll(n, u, l);
      }
      e = e.sibling;
    }
  }
  function sf(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Sn(l));
  }
  function rf(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Sn(t));
  }
  function Ne(t, e, l, a) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Kr(t, e, l, a), e = e.sibling;
  }
  function Kr(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ne(t, e, l, a), n & 2048 && Hn(9, e);
        break;
      case 1:
        Ne(t, e, l, a);
        break;
      case 3:
        Ne(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Sn(t)));
        break;
      case 12:
        if (n & 2048) {
          Ne(t, e, l, a), t = e.stateNode;
          try {
            var u = e.memoizedProps, i = u.id, o = u.onPostCommit;
            typeof o == "function" && o(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (h) {
            it(e, e.return, h);
          }
        } else Ne(t, e, l, a);
        break;
      case 31:
        Ne(t, e, l, a);
        break;
      case 13:
        Ne(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Ne(t, e, l, a) : qn(t, e) : u._visibility & 2 ? Ne(t, e, l, a) : (u._visibility |= 2, Va(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && sf(i, e);
        break;
      case 24:
        Ne(t, e, l, a), n & 2048 && rf(e.alternate, e);
        break;
      default:
        Ne(t, e, l, a);
    }
  }
  function Va(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, i = e, o = l, h = a, b = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Va(u, i, o, h, n), Hn(8, i);
          break;
        case 23:
          break;
        case 22:
          var E = i.stateNode;
          i.memoizedState !== null ? E._visibility & 2 ? Va(u, i, o, h, n) : qn(u, i) : (E._visibility |= 2, Va(u, i, o, h, n)), n && b & 2048 && sf(i.alternate, i);
          break;
        case 24:
          Va(u, i, o, h, n), n && b & 2048 && rf(i.alternate, i);
          break;
        default:
          Va(u, i, o, h, n);
      }
      e = e.sibling;
    }
  }
  function qn(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var l = t, a = e, n = a.flags;
      switch (a.tag) {
        case 22:
          qn(l, a), n & 2048 && sf(a.alternate, a);
          break;
        case 24:
          qn(l, a), n & 2048 && rf(a.alternate, a);
          break;
        default:
          qn(l, a);
      }
      e = e.sibling;
    }
  }
  var jn = 8192;
  function Ga(t, e, l) {
    if (t.subtreeFlags & jn) for (t = t.child; t !== null; ) Jr(t, e, l), t = t.sibling;
  }
  function Jr(t, e, l) {
    switch (t.tag) {
      case 26:
        Ga(t, e, l), t.flags & jn && t.memoizedState !== null && Yv(l, De, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ga(t, e, l);
        break;
      case 3:
      case 4:
        var a = De;
        De = oi(t.stateNode.containerInfo), Ga(t, e, l), De = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = jn, jn = 16777216, Ga(t, e, l), jn = a) : Ga(t, e, l));
        break;
      default:
        Ga(t, e, l);
    }
  }
  function kr(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Yn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var l = 0; l < e.length; l++) {
        var a = e[l];
        Vt = a, Fr(a, t);
      }
      kr(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Wr(t), t = t.sibling;
  }
  function Wr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Yn(t), t.flags & 2048 && Al(9, t, t.return);
        break;
      case 3:
        Yn(t);
        break;
      case 12:
        Yn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Wu(t)) : Yn(t);
        break;
      default:
        Yn(t);
    }
  }
  function Wu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var l = 0; l < e.length; l++) {
        var a = e[l];
        Vt = a, Fr(a, t);
      }
      kr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Al(8, e, e.return), Wu(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Wu(e));
          break;
        default:
          Wu(e);
      }
      t = t.sibling;
    }
  }
  function Fr(t, e) {
    for (; Vt !== null; ) {
      var l = Vt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Al(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Sn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Vt = a;
      else t: for (l = t; Vt !== null; ) {
        a = Vt;
        var n = a.sibling, u = a.return;
        if (Gr(a), a === l) {
          Vt = null;
          break t;
        }
        if (n !== null) {
          n.return = u, Vt = n;
          break t;
        }
        Vt = u;
      }
    }
  }
  var ev = {
    getCacheForType: function(t) {
      var e = Xt(Ct), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Xt(Ct).controller.signal;
    }
  }, lv = typeof WeakMap == "function" ? WeakMap : Map, at = 0, rt = null, K = null, k = 0, ut = 0, ye = null, El = !1, La = !1, df = !1, al = 0, Tt = 0, zl = 0, fa = 0, hf = 0, me = 0, Xa = 0, $n = null, ee = null, vf = !1, Fu = 0, Ir = 0, Iu = 1 / 0, Pu = null, Tl = null, jt = 0, Ol = null, Qa = null, nl = 0, yf = 0, mf = null, Pr = null, Vn = 0, pf = null;
  function Te() {
    return (at & 2) !== 0 && k !== 0 ? k & -k : C.T !== null ? Ef() : go();
  }
  function td() {
    if (me === 0) if ((k & 536870912) === 0 || I) {
      var t = iu;
      iu <<= 1, (iu & 3932160) === 0 && (iu = 262144), me = t;
    } else me = 536870912;
    return t = he.current, t !== null && (t.flags |= 32), me;
  }
  function le(t, e, l) {
    (t === rt && (ut === 2 || ut === 9) || t.cancelPendingCommit !== null) && (Za(t, 0), Ml(t, k, me, !1)), ou(t, l), ((at & 2) === 0 || t !== rt) && (t === rt && ((at & 2) === 0 && (fa |= l), Tt === 4 && Ml(t, k, me, !1)), ul(t));
  }
  function ed(t, e, l) {
    if ((at & 6) !== 0) throw Error(s(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || un(t, e), n = a ? uv(t, e) : bf(t, e, !0), u = a;
    do {
      if (n === 0) {
        La && !a && Ml(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !av(l)) {
          n = bf(t, e, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0;
          else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            e = i;
            t: {
              var o = t;
              n = $n;
              var h = o.current.memoizedState.isDehydrated;
              if (h && (Za(o, i).flags |= 256), i = bf(o, i, !1), i !== 2) {
                if (df && !h) {
                  o.errorRecoveryDisabledLanes |= u, fa |= u, n = 4;
                  break t;
                }
                u = ee, ee = n, u !== null && (ee === null ? ee = u : ee.push.apply(ee, u));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Za(t, 0), Ml(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ml(a, e, me, !El);
              break t;
            case 2:
              ee = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && (n = Fu + 300 - fe(), 10 < n)) {
            if (Ml(a, e, me, !El), fu(a, 0, !0) !== 0) break t;
            nl = e, a.timeoutHandle = Bd(ld.bind(null, a, l, ee, Pu, vf, e, me, fa, Xa, El, u, "Throttled", -0, 0), n);
            break t;
          }
          ld(a, l, ee, Pu, vf, e, me, fa, Xa, El, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    ul(t);
  }
  function ld(t, e, l, a, n, u, i, o, h, b, E, O, _, S) {
    if (t.timeoutHandle = -1, O = e.subtreeFlags, O & 8192 || (O & 16785408) === 16785408) {
      O = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xe
      }, Jr(e, u, O);
      var Y = (u & 62914560) === u ? Fu - fe() : (u & 4194048) === u ? Ir - fe() : 0;
      if (Y = $v(O, Y), Y !== null) {
        nl = u, t.cancelPendingCommit = Y(sd.bind(null, t, e, u, l, a, n, i, o, h, E, O, null, _, S)), Ml(t, u, i, !b);
        return;
      }
    }
    sd(t, e, u, l, a, n, i, o, h);
  }
  function av(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = n.getSnapshot;
        n = n.value;
        try {
          if (!re(u(), n)) return !1;
        } catch {
          return !1;
        }
      }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Ml(t, e, l, a) {
    e &= ~hf, e &= ~fa, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - se(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    l !== 0 && vo(t, l, e);
  }
  function ti() {
    return (at & 6) === 0 ? (Gn(0, !1), !1) : !0;
  }
  function gf() {
    if (K !== null) {
      if (ut === 0) var t = K.return;
      else t = K, Ke = Fl = null, Bc(t), Ra = null, En = 0, t = K;
      for (; t !== null; ) Br(t.alternate, t), t = t.return;
      K = null;
    }
  }
  function Za(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Sv(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), nl = 0, gf(), rt = t, K = l = Ze(t.current, null), k = e, ut = 0, ye = null, El = !1, La = un(t, e), df = !1, Xa = me = hf = fa = zl = Tt = 0, ee = $n = null, vf = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
      var n = 31 - se(a), u = 1 << n;
      e |= t[n], a &= ~u;
    }
    return al = e, Su(), l;
  }
  function ad(t, e) {
    X = null, C.H = Dn, e === Ha || e === Cu ? (e = As(), ut = 3) : e === Sc ? (e = As(), ut = 4) : ut = e === kc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ye = e, K === null && (Tt = 1, Xu(t, _e(e, t.current)));
  }
  function nd() {
    var t = he.current;
    return t === null ? !0 : (k & 4194048) === k ? ze === null : (k & 62914560) === k || (k & 536870912) !== 0 ? t === ze : !1;
  }
  function ud() {
    var t = C.H;
    return C.H = Dn, t === null ? Dn : t;
  }
  function id() {
    var t = C.A;
    return C.A = ev, t;
  }
  function ei() {
    Tt = 4, El || (k & 4194048) !== k && he.current !== null || (La = !0), (zl & 134217727) === 0 && (fa & 134217727) === 0 || rt === null || Ml(rt, k, me, !1);
  }
  function bf(t, e, l) {
    var a = at;
    at |= 2;
    var n = ud(), u = id();
    (rt !== t || k !== e) && (Pu = null, Za(t, e)), e = !1;
    var i = Tt;
    t: do
      try {
        if (ut !== 0 && K !== null) {
          var o = K, h = ye;
          switch (ut) {
            case 8:
              gf(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              he.current === null && (e = !0);
              var b = ut;
              if (ut = 0, ye = null, wa(t, o, h, b), l && La) {
                i = 0;
                break t;
              }
              break;
            default:
              b = ut, ut = 0, ye = null, wa(t, o, h, b);
          }
        }
        nv(), i = Tt;
        break;
      } catch (E) {
        ad(t, E);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ke = Fl = null, at = a, C.H = n, C.A = u, K === null && (rt = null, k = 0, Su()), i;
  }
  function nv() {
    for (; K !== null; ) cd(K);
  }
  function uv(t, e) {
    var l = at;
    at |= 2;
    var a = ud(), n = id();
    rt !== t || k !== e ? (Pu = null, Iu = fe() + 500, Za(t, e)) : La = un(t, e);
    t: do
      try {
        if (ut !== 0 && K !== null) {
          e = K;
          var u = ye;
          e: switch (ut) {
            case 1:
              ut = 0, ye = null, wa(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (_s(u)) {
                ut = 0, ye = null, fd(e);
                break;
              }
              e = function() {
                ut !== 2 && ut !== 9 || rt !== t || (ut = 7), ul(t);
              }, u.then(e, e);
              break t;
            case 3:
              ut = 7;
              break t;
            case 4:
              ut = 5;
              break t;
            case 7:
              _s(u) ? (ut = 0, ye = null, fd(e)) : (ut = 0, ye = null, wa(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (K.tag) {
                case 26:
                  i = K.memoizedState;
                case 5:
                case 27:
                  var o = K;
                  if (i ? Jd(i) : o.stateNode.complete) {
                    ut = 0, ye = null;
                    var h = o.sibling;
                    if (h !== null) K = h;
                    else {
                      var b = o.return;
                      b !== null ? (K = b, li(b)) : K = null;
                    }
                    break e;
                  }
              }
              ut = 0, ye = null, wa(t, e, u, 5);
              break;
            case 6:
              ut = 0, ye = null, wa(t, e, u, 6);
              break;
            case 8:
              gf(), Tt = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        iv();
        break;
      } catch (E) {
        ad(t, E);
      }
    while (!0);
    return Ke = Fl = null, C.H = a, C.A = n, at = l, K !== null ? 0 : (rt = null, k = 0, Su(), Tt);
  }
  function iv() {
    for (; K !== null && !jh(); ) cd(K);
  }
  function cd(t) {
    var e = Dr(t.alternate, t, al);
    t.memoizedProps = t.pendingProps, e === null ? li(t) : K = e;
  }
  function fd(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Tr(l, e, e.pendingProps, e.type, void 0, k);
        break;
      case 11:
        e = Tr(l, e, e.pendingProps, e.type.render, e.ref, k);
        break;
      case 5:
        Bc(e);
      default:
        Br(l, e), e = K = os(e, al), e = Dr(l, e, al);
    }
    t.memoizedProps = t.pendingProps, e === null ? li(t) : K = e;
  }
  function wa(t, e, l, a) {
    Ke = Fl = null, Bc(e), Ra = null, En = 0;
    var n = e.return;
    try {
      if (J0(t, n, e, l, k)) {
        Tt = 1, Xu(t, _e(l, t.current)), K = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw K = n, u;
      Tt = 1, Xu(t, _e(l, t.current)), K = null;
      return;
    }
    e.flags & 32768 ? (I || a === 1 ? t = !0 : La || (k & 536870912) !== 0 ? t = !1 : (El = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = he.current, a !== null && a.tag === 13 && (a.flags |= 16384))), od(e, t)) : li(e);
  }
  function li(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        od(e, El);
        return;
      }
      t = e.return;
      var l = F0(e.alternate, e, al);
      if (l !== null) {
        K = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        K = e;
        return;
      }
      K = e = t;
    } while (e !== null);
    Tt === 0 && (Tt = 5);
  }
  function od(t, e) {
    do {
      var l = I0(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, K = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        K = t;
        return;
      }
      K = t = l;
    } while (t !== null);
    Tt = 6, K = null;
  }
  function sd(t, e, l, a, n, u, i, o, h) {
    t.cancelPendingCommit = null;
    do
      ai();
    while (jt !== 0);
    if ((at & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (u = e.lanes | e.childLanes, u |= ic, Kh(t, l, u, i, o, h), t === rt && (K = rt = null, k = 0), Qa = e, Ol = t, nl = l, yf = u, mf = n, Pr = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, sv(nu, function() {
        return yd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = C.T, C.T = null, n = N.p, N.p = 2, i = at, at |= 4;
        try {
          P0(t, e, l);
        } finally {
          at = i, N.p = n, C.T = a;
        }
      }
      jt = 1, rd(), dd(), hd();
    }
  }
  function rd() {
    if (jt === 1) {
      jt = 0;
      var t = Ol, e = Qa, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = C.T, C.T = null;
        var a = N.p;
        N.p = 2;
        var n = at;
        at |= 4;
        try {
          Zr(e, t);
          var u = Uf, i = ts(t.containerInfo), o = u.focusedElem, h = u.selectionRange;
          if (i !== o && o && o.ownerDocument && Po(o.ownerDocument.documentElement, o)) {
            if (h !== null && ec(o)) {
              var b = h.start, E = h.end;
              if (E === void 0 && (E = b), "selectionStart" in o) o.selectionStart = b, o.selectionEnd = Math.min(E, o.value.length);
              else {
                var O = o.ownerDocument || document, _ = O && O.defaultView || window;
                if (_.getSelection) {
                  var S = _.getSelection(), Y = o.textContent.length, L = Math.min(h.start, Y), ot = h.end === void 0 ? L : Math.min(h.end, Y);
                  !S.extend && L > ot && (i = ot, ot = L, L = i);
                  var m = Io(o, L), v = Io(o, ot);
                  if (m && v && (S.rangeCount !== 1 || S.anchorNode !== m.node || S.anchorOffset !== m.offset || S.focusNode !== v.node || S.focusOffset !== v.offset)) {
                    var g = O.createRange();
                    g.setStart(m.node, m.offset), S.removeAllRanges(), L > ot ? (S.addRange(g), S.extend(v.node, v.offset)) : (g.setEnd(v.node, v.offset), S.addRange(g));
                  }
                }
              }
            }
            for (O = [], S = o; S = S.parentNode; ) S.nodeType === 1 && O.push({
              element: S,
              left: S.scrollLeft,
              top: S.scrollTop
            });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < O.length; o++) {
              var T = O[o];
              T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
            }
          }
          yi = !!Cf, Uf = Cf = null;
        } finally {
          at = n, N.p = a, C.T = l;
        }
      }
      t.current = e, jt = 2;
    }
  }
  function dd() {
    if (jt === 2) {
      jt = 0;
      var t = Ol, e = Qa, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = C.T, C.T = null;
        var a = N.p;
        N.p = 2;
        var n = at;
        at |= 4;
        try {
          Vr(t, e.alternate, e);
        } finally {
          at = n, N.p = a, C.T = l;
        }
      }
      jt = 3;
    }
  }
  function hd() {
    if (jt === 4 || jt === 3) {
      jt = 0, Yh();
      var t = Ol, e = Qa, l = nl, a = Pr;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? jt = 5 : (jt = 0, Qa = Ol = null, vd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (Tl = null), qi(l), e = e.stateNode, oe && typeof oe.onCommitFiberRoot == "function") try {
        oe.onCommitFiberRoot(nn, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        e = C.T, n = N.p, N.p = 2, C.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var o = a[i];
            u(o.value, { componentStack: o.stack });
          }
        } finally {
          C.T = e, N.p = n;
        }
      }
      (nl & 3) !== 0 && ai(), ul(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === pf ? Vn++ : (Vn = 0, pf = t) : Vn = 0, Gn(0, !1);
    }
  }
  function vd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Sn(e)));
  }
  function ai() {
    return rd(), dd(), hd(), yd();
  }
  function yd() {
    if (jt !== 5) return !1;
    var t = Ol, e = yf;
    yf = 0;
    var l = qi(nl), a = C.T, n = N.p;
    try {
      N.p = 32 > l ? 32 : l, C.T = null, l = mf, mf = null;
      var u = Ol, i = nl;
      if (jt = 0, Qa = Ol = null, nl = 0, (at & 6) !== 0) throw Error(s(331));
      var o = at;
      if (at |= 4, Wr(u.current), Kr(u, u.current, i, l), at = o, Gn(0, !1), oe && typeof oe.onPostCommitFiberRoot == "function") try {
        oe.onPostCommitFiberRoot(nn, u);
      } catch {
      }
      return !0;
    } finally {
      N.p = n, C.T = a, vd(t, e);
    }
  }
  function md(t, e, l) {
    e = _e(l, e), e = Jc(t.stateNode, e, 2), t = na(t, e, 2), t !== null && (ou(t, 2), ul(t));
  }
  function it(t, e, l) {
    if (t.tag === 3) md(t, t, l);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        md(e, t, l);
        break;
      } else if (e.tag === 1) {
        var a = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Tl === null || !Tl.has(a))) {
          t = _e(l, t), l = pr(2), a = na(e, l, 2), a !== null && (gr(l, a, e, t), ou(a, 2), ul(a));
          break;
        }
      }
      e = e.return;
    }
  }
  function _f(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new lv();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (df = !0, n.add(l), t = cv.bind(null, t, e, l), e.then(t, t));
  }
  function cv(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, rt === t && (k & l) === l && (Tt === 4 || Tt === 3 && (k & 62914560) === k && 300 > fe() - Fu ? (at & 2) === 0 && Za(t, 0) : hf |= l, Xa === k && (Xa = 0)), ul(t);
  }
  function pd(t, e) {
    e === 0 && (e = ho()), t = Jl(t, e), t !== null && (ou(t, e), ul(t));
  }
  function fv(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), pd(t, l);
  }
  function ov(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(e), pd(t, l);
  }
  function sv(t, e) {
    return Bi(t, e);
  }
  var ni = null, Ka = null, Sf = !1, ui = !1, Af = !1, xl = 0;
  function ul(t) {
    t !== Ka && t.next === null && (Ka === null ? ni = Ka = t : Ka = Ka.next = t), ui = !0, Sf || (Sf = !0, dv());
  }
  function Gn(t, e) {
    if (!Af && ui) {
      Af = !0;
      do
        for (var l = !1, a = ni; a !== null; ) {
          if (!e) if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, o = a.pingedLanes;
              u = (1 << 31 - se(42 | t) + 1) - 1, u &= n & ~(i & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Sd(a, u));
          } else u = k, u = fu(a, a === rt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || un(a, u) || (l = !0, Sd(a, u));
          a = a.next;
        }
      while (l);
      Af = !1;
    }
  }
  function rv() {
    gd();
  }
  function gd() {
    ui = Sf = !1;
    var t = 0;
    xl !== 0 && _v() && (t = xl);
    for (var e = fe(), l = null, a = ni; a !== null; ) {
      var n = a.next, u = bd(a, e);
      u === 0 ? (a.next = null, l === null ? ni = n : l.next = n, n === null && (Ka = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (ui = !0)), a = n;
    }
    jt !== 0 && jt !== 5 || Gn(t, !1), xl !== 0 && (xl = 0);
  }
  function bd(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - se(u), o = 1 << i, h = n[i];
      h === -1 ? ((o & l) === 0 || (o & a) !== 0) && (n[i] = wh(o, e)) : h <= e && (t.expiredLanes |= o), u &= ~o;
    }
    if (e = rt, l = k, l = fu(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (ut === 2 || ut === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && Hi(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || un(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && Hi(a), qi(l)) {
        case 2:
        case 8:
          l = so;
          break;
        case 32:
          l = nu;
          break;
        case 268435456:
          l = ro;
          break;
        default:
          l = nu;
      }
      return a = _d.bind(null, t), l = Bi(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && Hi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function _d(t, e) {
    if (jt !== 0 && jt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (ai() && t.callbackNode !== l) return null;
    var a = k;
    return a = fu(t, t === rt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (ed(t, a, e), bd(t, fe()), t.callbackNode != null && t.callbackNode === l ? _d.bind(null, t) : null);
  }
  function Sd(t, e) {
    if (ai()) return null;
    ed(t, e, !0);
  }
  function dv() {
    Av(function() {
      (at & 6) !== 0 ? Bi(oo, rv) : gd();
    });
  }
  function Ef() {
    if (xl === 0) {
      var t = Na;
      t === 0 && (t = uu, uu <<= 1, (uu & 261888) === 0 && (uu = 256)), xl = t;
    }
    return xl;
  }
  function Ad(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : hu("" + t);
  }
  function Ed(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function hv(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = Ad((n[Wt] || null).action), i = a.submitter;
      i && (e = (e = i[Wt] || null) ? Ad(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var o = new pu("action", "action", null, a, n);
      t.push({
        event: o,
        listeners: [{
          instance: null,
          listener: function() {
            if (a.defaultPrevented) {
              if (xl !== 0) {
                var h = i ? Ed(n, i) : new FormData(n);
                Lc(l, {
                  pending: !0,
                  data: h,
                  method: n.method,
                  action: u
                }, null, h);
              }
            } else typeof u == "function" && (o.preventDefault(), h = i ? Ed(n, i) : new FormData(n), Lc(l, {
              pending: !0,
              data: h,
              method: n.method,
              action: u
            }, u, h));
          },
          currentTarget: n
        }]
      });
    }
  }
  for (var zf = 0; zf < uc.length; zf++) {
    var Tf = uc[zf];
    Ue(Tf.toLowerCase(), "on" + (Tf[0].toUpperCase() + Tf.slice(1)));
  }
  Ue(as, "onAnimationEnd"), Ue(ns, "onAnimationIteration"), Ue(us, "onAnimationStart"), Ue("dblclick", "onDoubleClick"), Ue("focusin", "onFocus"), Ue("focusout", "onBlur"), Ue(x0, "onTransitionRun"), Ue(C0, "onTransitionStart"), Ue(U0, "onTransitionCancel"), Ue(is, "onTransitionEnd"), ga("onMouseEnter", ["mouseout", "mouseover"]), ga("onMouseLeave", ["mouseout", "mouseover"]), ga("onPointerEnter", ["pointerout", "pointerover"]), ga("onPointerLeave", ["pointerout", "pointerover"]), Ql("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ql("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ql("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ql("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ql("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ql("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ln));
  function zd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e) for (var i = a.length - 1; 0 <= i; i--) {
          var o = a[i], h = o.instance, b = o.currentTarget;
          if (o = o.listener, h !== u && n.isPropagationStopped()) break t;
          u = o, n.currentTarget = b;
          try {
            u(n);
          } catch (E) {
            _u(E);
          }
          n.currentTarget = null, u = h;
        }
        else for (i = 0; i < a.length; i++) {
          if (o = a[i], h = o.instance, b = o.currentTarget, o = o.listener, h !== u && n.isPropagationStopped()) break t;
          u = o, n.currentTarget = b;
          try {
            u(n);
          } catch (E) {
            _u(E);
          }
          n.currentTarget = null, u = h;
        }
      }
    }
  }
  function J(t, e) {
    var l = e[ji];
    l === void 0 && (l = e[ji] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (Od(e, t, 2, !1), l.add(a));
  }
  function Of(t, e, l) {
    var a = 0;
    e && (a |= 4), Od(l, t, a, e);
  }
  var ii = "_reactListening" + Math.random().toString(36).slice(2);
  function Td(t) {
    if (!t[ii]) {
      t[ii] = !0, So.forEach(function(l) {
        l !== "selectionchange" && (vv.has(l) || Of(l, !1, t), Of(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ii] || (e[ii] = !0, Of("selectionchange", !1, e));
    }
  }
  function Od(t, e, l, a) {
    switch (Pd(e)) {
      case 2:
        var n = Qv;
        break;
      case 8:
        n = Zv;
        break;
      default:
        n = Gf;
    }
    l = n.bind(null, e, l, t), n = void 0, !wi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, { passive: n }) : t.addEventListener(e, l, !1);
  }
  function Mf(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (; ; ) {
      if (a === null) return;
      var i = a.tag;
      if (i === 3 || i === 4) {
        var o = a.stateNode.containerInfo;
        if (o === n) break;
        if (i === 4) for (i = a.return; i !== null; ) {
          var h = i.tag;
          if ((h === 3 || h === 4) && i.stateNode.containerInfo === n) return;
          i = i.return;
        }
        for (; o !== null; ) {
          if (i = ya(o), i === null) return;
          if (h = i.tag, h === 5 || h === 6 || h === 26 || h === 27) {
            a = u = i;
            continue t;
          }
          o = o.parentNode;
        }
      }
      a = a.return;
    }
    Bo(function() {
      var b = u, E = Qi(l), O = [];
      t: {
        var _ = cs.get(t);
        if (_ !== void 0) {
          var S = pu, Y = t;
          switch (t) {
            case "keypress":
              if (yu(l) === 0) break t;
            case "keydown":
            case "keyup":
              S = r0;
              break;
            case "focusin":
              Y = "focus", S = Wi;
              break;
            case "focusout":
              Y = "blur", S = Wi;
              break;
            case "beforeblur":
            case "afterblur":
              S = Wi;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = qo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = n0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = d0;
              break;
            case as:
            case ns:
            case us:
              S = u0;
              break;
            case is:
              S = h0;
              break;
            case "scroll":
            case "scrollend":
              S = a0;
              break;
            case "wheel":
              S = v0;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = i0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = Yo;
              break;
            case "toggle":
            case "beforetoggle":
              S = y0;
          }
          var L = (e & 4) !== 0, ot = !L && (t === "scroll" || t === "scrollend"), m = L ? _ !== null ? _ + "Capture" : null : _;
          L = [];
          for (var v = b, g; v !== null; ) {
            var T = v;
            if (g = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || g === null || m === null || (T = sn(v, m), T != null && L.push(Xn(v, T, g))), ot) break;
            v = v.return;
          }
          0 < L.length && (_ = new S(_, Y, null, l, E), O.push({
            event: _,
            listeners: L
          }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (_ = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout", _ && l !== Xi && (Y = l.relatedTarget || l.fromElement) && (ya(Y) || Y[cn])) break t;
          if ((S || _) && (_ = E.window === E ? E : (_ = E.ownerDocument) ? _.defaultView || _.parentWindow : window, S ? (Y = l.relatedTarget || l.toElement, S = b, Y = Y ? ya(Y) : null, Y !== null && (ot = z(Y), L = Y.tag, Y !== ot || L !== 5 && L !== 27 && L !== 6) && (Y = null)) : (S = null, Y = b), S !== Y)) {
            if (L = qo, T = "onMouseLeave", m = "onMouseEnter", v = "mouse", (t === "pointerout" || t === "pointerover") && (L = Yo, T = "onPointerLeave", m = "onPointerEnter", v = "pointer"), ot = S == null ? _ : on(S), g = Y == null ? _ : on(Y), _ = new L(T, v + "leave", S, l, E), _.target = ot, _.relatedTarget = g, T = null, ya(E) === b && (L = new L(m, v + "enter", Y, l, E), L.target = g, L.relatedTarget = ot, T = L), ot = T, S && Y) e: {
              for (L = yv, m = S, v = Y, g = 0, T = m; T; T = L(T)) g++;
              T = 0;
              for (var G = v; G; G = L(G)) T++;
              for (; 0 < g - T; ) m = L(m), g--;
              for (; 0 < T - g; ) v = L(v), T--;
              for (; g--; ) {
                if (m === v || v !== null && m === v.alternate) {
                  L = m;
                  break e;
                }
                m = L(m), v = L(v);
              }
              L = null;
            }
            else L = null;
            S !== null && Md(O, _, S, L, !1), Y !== null && ot !== null && Md(O, ot, Y, L, !0);
          }
        }
        t: {
          if (_ = b ? on(b) : window, S = _.nodeName && _.nodeName.toLowerCase(), S === "select" || S === "input" && _.type === "file") var tt = wo;
          else if (Qo(_)) if (Ko) tt = T0;
          else {
            tt = E0;
            var $ = A0;
          }
          else S = _.nodeName, !S || S.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? b && Li(b.elementType) && (tt = wo) : tt = z0;
          if (tt && (tt = tt(t, b))) {
            Zo(O, tt, l, E);
            break t;
          }
          $ && $(t, _, b), t === "focusout" && b && _.type === "number" && b.memoizedProps.value != null && Gi(_, "number", _.value);
        }
        switch ($ = b ? on(b) : window, t) {
          case "focusin":
            (Qo($) || $.contentEditable === "true") && (za = $, lc = b, gn = null);
            break;
          case "focusout":
            gn = lc = za = null;
            break;
          case "mousedown":
            ac = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ac = !1, es(O, l, E);
            break;
          case "selectionchange":
            if (M0) break;
          case "keydown":
          case "keyup":
            es(O, l, E);
        }
        var Q;
        if (Ii) t: {
          switch (t) {
            case "compositionstart":
              var W = "onCompositionStart";
              break t;
            case "compositionend":
              W = "onCompositionEnd";
              break t;
            case "compositionupdate":
              W = "onCompositionUpdate";
              break t;
          }
          W = void 0;
        }
        else Ea ? Lo(t, l) && (W = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (W = "onCompositionStart");
        W && ($o && l.locale !== "ko" && (Ea || W !== "onCompositionStart" ? W === "onCompositionEnd" && Ea && (Q = Ho()) : (vl = E, Ki = "value" in vl ? vl.value : vl.textContent, Ea = !0)), $ = ci(b, W), 0 < $.length && (W = new jo(W, t, null, l, E), O.push({
          event: W,
          listeners: $
        }), Q ? W.data = Q : (Q = Xo(l), Q !== null && (W.data = Q)))), (Q = p0 ? g0(t, l) : b0(t, l)) && (W = ci(b, "onBeforeInput"), 0 < W.length && ($ = new jo("onBeforeInput", "beforeinput", null, l, E), O.push({
          event: $,
          listeners: W
        }), $.data = Q)), hv(O, t, b, l, E);
      }
      zd(O, e);
    });
  }
  function Xn(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function ci(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = sn(t, l), n != null && a.unshift(Xn(t, n, u)), n = sn(t, e), n != null && a.push(Xn(t, n, u))), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function yv(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Md(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var o = l, h = o.alternate, b = o.stateNode;
      if (o = o.tag, h !== null && h === a) break;
      o !== 5 && o !== 26 && o !== 27 || b === null || (h = b, n ? (b = sn(l, u), b != null && i.unshift(Xn(l, b, h))) : n || (b = sn(l, u), b != null && i.push(Xn(l, b, h)))), l = l.return;
    }
    i.length !== 0 && t.push({
      event: e,
      listeners: i
    });
  }
  var mv = /\r\n?/g, pv = /\u0000|\uFFFD/g;
  function xd(t) {
    return (typeof t == "string" ? t : "" + t).replace(mv, `
`).replace(pv, "");
  }
  function Cd(t, e) {
    return e = xd(e), xd(t) === e;
  }
  function ft(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || _a(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && _a(t, "" + a);
        break;
      case "className":
        ru(t, "class", a);
        break;
      case "tabIndex":
        ru(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ru(t, l, a);
        break;
      case "style":
        Do(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          ru(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = hu("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (l === "formAction" ? (e !== "input" && ft(t, e, "name", n.name, n, null), ft(t, e, "formEncType", n.formEncType, n, null), ft(t, e, "formMethod", n.formMethod, n, null), ft(t, e, "formTarget", n.formTarget, n, null)) : (ft(t, e, "encType", n.encType, n, null), ft(t, e, "method", n.method, n, null), ft(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = hu("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Xe);
        break;
      case "onScroll":
        a != null && J("scroll", t);
        break;
      case "onScrollEnd":
        a != null && J("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = hu("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        J("beforetoggle", t), J("toggle", t), su(t, "popover", a);
        break;
      case "xlinkActuate":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Le(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Le(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Le(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        su(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = e0.get(l) || l, su(t, l, a));
    }
  }
  function xf(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        Do(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? _a(t, a) : (typeof a == "number" || typeof a == "bigint") && _a(t, "" + a);
        break;
      case "onScroll":
        a != null && J("scroll", t);
        break;
      case "onScrollEnd":
        a != null && J("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Xe);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ao.hasOwnProperty(l)) t: {
          if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[Wt] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
            typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
            break t;
          }
          l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : su(t, l, a);
        }
    }
  }
  function Zt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        J("error", t), J("load", t);
        var a = !1, n = !1, u;
        for (u in l) if (l.hasOwnProperty(u)) {
          var i = l[u];
          if (i != null) switch (u) {
            case "src":
              a = !0;
              break;
            case "srcSet":
              n = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, e));
            default:
              ft(t, e, u, i, l, null);
          }
        }
        n && ft(t, e, "srcSet", l.srcSet, l, null), a && ft(t, e, "src", l.src, l, null);
        return;
      case "input":
        J("invalid", t);
        var o = u = i = n = null, h = null, b = null;
        for (a in l) if (l.hasOwnProperty(a)) {
          var E = l[a];
          if (E != null) switch (a) {
            case "name":
              n = E;
              break;
            case "type":
              i = E;
              break;
            case "checked":
              h = E;
              break;
            case "defaultChecked":
              b = E;
              break;
            case "value":
              u = E;
              break;
            case "defaultValue":
              o = E;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (E != null) throw Error(s(137, e));
              break;
            default:
              ft(t, e, a, E, l, null);
          }
        }
        Mo(t, u, o, h, b, i, n, !1);
        return;
      case "select":
        J("invalid", t), a = i = u = null;
        for (n in l) if (l.hasOwnProperty(n) && (o = l[n], o != null)) switch (n) {
          case "value":
            u = o;
            break;
          case "defaultValue":
            i = o;
            break;
          case "multiple":
            a = o;
          default:
            ft(t, e, n, o, l, null);
        }
        e = u, l = i, t.multiple = !!a, e != null ? ba(t, !!a, e, !1) : l != null && ba(t, !!a, l, !0);
        return;
      case "textarea":
        J("invalid", t), u = n = a = null;
        for (i in l) if (l.hasOwnProperty(i) && (o = l[i], o != null)) switch (i) {
          case "value":
            a = o;
            break;
          case "defaultValue":
            n = o;
            break;
          case "children":
            u = o;
            break;
          case "dangerouslySetInnerHTML":
            if (o != null) throw Error(s(91));
            break;
          default:
            ft(t, e, i, o, l, null);
        }
        Co(t, a, n, u);
        return;
      case "option":
        for (h in l) l.hasOwnProperty(h) && (a = l[h], a != null) && (h === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : ft(t, e, h, a, l, null));
        return;
      case "dialog":
        J("beforetoggle", t), J("toggle", t), J("cancel", t), J("close", t);
        break;
      case "iframe":
      case "object":
        J("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ln.length; a++) J(Ln[a], t);
        break;
      case "image":
        J("error", t), J("load", t);
        break;
      case "details":
        J("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        J("error", t), J("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (b in l) if (l.hasOwnProperty(b) && (a = l[b], a != null)) switch (b) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(137, e));
          default:
            ft(t, e, b, a, l, null);
        }
        return;
      default:
        if (Li(e)) {
          for (E in l) l.hasOwnProperty(E) && (a = l[E], a !== void 0 && xf(t, e, E, a, l, void 0));
          return;
        }
    }
    for (o in l) l.hasOwnProperty(o) && (a = l[o], a != null && ft(t, e, o, a, l, null));
  }
  function gv(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, i = null, o = null, h = null, b = null, E = null;
        for (S in l) {
          var O = l[S];
          if (l.hasOwnProperty(S) && O != null) switch (S) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              h = O;
            default:
              a.hasOwnProperty(S) || ft(t, e, S, null, a, O);
          }
        }
        for (var _ in a) {
          var S = a[_];
          if (O = l[_], a.hasOwnProperty(_) && (S != null || O != null)) switch (_) {
            case "type":
              u = S;
              break;
            case "name":
              n = S;
              break;
            case "checked":
              b = S;
              break;
            case "defaultChecked":
              E = S;
              break;
            case "value":
              i = S;
              break;
            case "defaultValue":
              o = S;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (S != null) throw Error(s(137, e));
              break;
            default:
              S !== O && ft(t, e, _, S, a, O);
          }
        }
        Vi(t, i, o, h, b, E, u, n);
        return;
      case "select":
        S = i = o = _ = null;
        for (u in l) if (h = l[u], l.hasOwnProperty(u) && h != null) switch (u) {
          case "value":
            break;
          case "multiple":
            S = h;
          default:
            a.hasOwnProperty(u) || ft(t, e, u, null, a, h);
        }
        for (n in a) if (u = a[n], h = l[n], a.hasOwnProperty(n) && (u != null || h != null)) switch (n) {
          case "value":
            _ = u;
            break;
          case "defaultValue":
            o = u;
            break;
          case "multiple":
            i = u;
          default:
            u !== h && ft(t, e, n, u, a, h);
        }
        e = o, l = i, a = S, _ != null ? ba(t, !!l, _, !1) : !!a != !!l && (e != null ? ba(t, !!l, e, !0) : ba(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        S = _ = null;
        for (o in l) if (n = l[o], l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o)) switch (o) {
          case "value":
            break;
          case "children":
            break;
          default:
            ft(t, e, o, null, a, n);
        }
        for (i in a) if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
          case "value":
            _ = n;
            break;
          case "defaultValue":
            S = n;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n != null) throw Error(s(91));
            break;
          default:
            n !== u && ft(t, e, i, n, a, u);
        }
        xo(t, _, S);
        return;
      case "option":
        for (var Y in l) _ = l[Y], l.hasOwnProperty(Y) && _ != null && !a.hasOwnProperty(Y) && (Y === "selected" ? t.selected = !1 : ft(t, e, Y, null, a, _));
        for (h in a) _ = a[h], S = l[h], a.hasOwnProperty(h) && _ !== S && (_ != null || S != null) && (h === "selected" ? t.selected = _ && typeof _ != "function" && typeof _ != "symbol" : ft(t, e, h, _, a, S));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var L in l) _ = l[L], l.hasOwnProperty(L) && _ != null && !a.hasOwnProperty(L) && ft(t, e, L, null, a, _);
        for (b in a) if (_ = a[b], S = l[b], a.hasOwnProperty(b) && _ !== S && (_ != null || S != null)) switch (b) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (_ != null) throw Error(s(137, e));
            break;
          default:
            ft(t, e, b, _, a, S);
        }
        return;
      default:
        if (Li(e)) {
          for (var ot in l) _ = l[ot], l.hasOwnProperty(ot) && _ !== void 0 && !a.hasOwnProperty(ot) && xf(t, e, ot, void 0, a, _);
          for (E in a) _ = a[E], S = l[E], !a.hasOwnProperty(E) || _ === S || _ === void 0 && S === void 0 || xf(t, e, E, _, a, S);
          return;
        }
    }
    for (var m in l) _ = l[m], l.hasOwnProperty(m) && _ != null && !a.hasOwnProperty(m) && ft(t, e, m, null, a, _);
    for (O in a) _ = a[O], S = l[O], !a.hasOwnProperty(O) || _ === S || _ == null && S == null || ft(t, e, O, _, a, S);
  }
  function Ud(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, i = n.initiatorType, o = n.duration;
        if (u && o && Ud(i)) {
          for (i = 0, o = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a], b = h.startTime;
            if (b > o) break;
            var E = h.transferSize, O = h.initiatorType;
            E && Ud(O) && (h = h.responseEnd, i += E * (h < o ? 1 : (o - b) / (h - b)));
          }
          if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Cf = null, Uf = null;
  function fi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Dd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Nd(t, e) {
    if (t === 0) switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Df(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Nf = null;
  function _v() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Nf ? !1 : (Nf = t, !0) : (Nf = null, !1);
  }
  var Bd = typeof setTimeout == "function" ? setTimeout : void 0, Sv = typeof clearTimeout == "function" ? clearTimeout : void 0, Hd = typeof Promise == "function" ? Promise : void 0, Av = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hd < "u" ? function(t) {
    return Hd.resolve(null).then(t).catch(Ev);
  } : Bd;
  function Ev(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Cl(t) {
    return t === "head";
  }
  function Rd(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
        if (a === 0) {
          t.removeChild(n), Fa(e);
          return;
        }
        a--;
      } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
      else if (l === "html") Qn(t.ownerDocument.documentElement);
      else if (l === "head") {
        l = t.ownerDocument.head, Qn(l);
        for (var u = l.firstChild; u; ) {
          var i = u.nextSibling, o = u.nodeName;
          u[fn] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
        }
      } else l === "body" && Qn(t.ownerDocument.body);
      l = n;
    } while (l);
    Fa(e);
  }
  function qd(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8) if (l = a.data, l === "/$") {
        if (t === 0) break;
        t--;
      } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = a;
    } while (l);
  }
  function Bf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bf(l), Yi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function zv(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[fn]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (t = Oe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Tv(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Oe(t.nextSibling), t === null)) return null;
    return t;
  }
  function jd(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Oe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Hf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Rf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Ov(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Oe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var qf = null;
  function Yd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return Oe(t.nextSibling);
          e--;
        } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function $d(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Vd(t, e, l) {
    switch (e = fi(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function Qn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Yi(t);
  }
  var Me = /* @__PURE__ */ new Map(), Gd = /* @__PURE__ */ new Set();
  function oi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var il = N.d;
  N.d = {
    f: Mv,
    r: xv,
    D: Cv,
    C: Uv,
    L: Dv,
    m: Nv,
    X: Hv,
    S: Bv,
    M: Rv
  };
  function Mv() {
    var t = il.f(), e = ti();
    return t || e;
  }
  function xv(t) {
    var e = ma(t);
    e !== null && e.tag === 5 && e.type === "form" ? ir(e) : il.r(t);
  }
  var Ja = typeof document > "u" ? null : document;
  function Ld(t, e, l) {
    var a = Ja;
    if (a && typeof e == "string" && e) {
      var n = ge(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Gd.has(n) || (Gd.add(n), t = {
        rel: t,
        crossOrigin: l,
        href: e
      }, a.querySelector(n) === null && (e = a.createElement("link"), Zt(e, "link", t), $t(e), a.head.appendChild(e)));
    }
  }
  function Cv(t) {
    il.D(t), Ld("dns-prefetch", t, null);
  }
  function Uv(t, e) {
    il.C(t, e), Ld("preconnect", t, e);
  }
  function Dv(t, e, l) {
    il.L(t, e, l);
    var a = Ja;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + ge(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + ge(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + ge(l.imageSizes) + '"]')) : n += '[href="' + ge(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = ka(t);
          break;
        case "script":
          u = Wa(t);
      }
      Me.has(u) || (t = j({
        rel: "preload",
        href: e === "image" && l && l.imageSrcSet ? void 0 : t,
        as: e
      }, l), Me.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Zn(u)) || e === "script" && a.querySelector(wn(u)) || (e = a.createElement("link"), Zt(e, "link", t), $t(e), a.head.appendChild(e)));
    }
  }
  function Nv(t, e) {
    il.m(t, e);
    var l = Ja;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + ge(a) + '"][href="' + ge(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Wa(t);
      }
      if (!Me.has(u) && (t = j({
        rel: "modulepreload",
        href: t
      }, e), Me.set(u, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(wn(u))) return;
        }
        a = l.createElement("link"), Zt(a, "link", t), $t(a), l.head.appendChild(a);
      }
    }
  }
  function Bv(t, e, l) {
    il.S(t, e, l);
    var a = Ja;
    if (a && t) {
      var n = pa(a).hoistableStyles, u = ka(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var o = {
          loading: 0,
          preload: null
        };
        if (i = a.querySelector(Zn(u))) o.loading = 5;
        else {
          t = j({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, l), (l = Me.get(u)) && jf(t, l);
          var h = i = a.createElement("link");
          $t(h), Zt(h, "link", t), h._p = new Promise(function(b, E) {
            h.onload = b, h.onerror = E;
          }), h.addEventListener("load", function() {
            o.loading |= 1;
          }), h.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, si(i, e, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: o
        }, n.set(u, i);
      }
    }
  }
  function Hv(t, e) {
    il.X(t, e);
    var l = Ja;
    if (l && t) {
      var a = pa(l).hoistableScripts, n = Wa(t), u = a.get(n);
      u || (u = l.querySelector(wn(n)), u || (t = j({
        src: t,
        async: !0
      }, e), (e = Me.get(n)) && Yf(t, e), u = l.createElement("script"), $t(u), Zt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Rv(t, e) {
    il.M(t, e);
    var l = Ja;
    if (l && t) {
      var a = pa(l).hoistableScripts, n = Wa(t), u = a.get(n);
      u || (u = l.querySelector(wn(n)), u || (t = j({
        src: t,
        async: !0,
        type: "module"
      }, e), (e = Me.get(n)) && Yf(t, e), u = l.createElement("script"), $t(u), Zt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Xd(t, e, l, a) {
    var n = (n = w.current) ? oi(n) : null;
    if (!n) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = ka(l.href), l = pa(n).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = ka(l.href);
          var u = pa(n).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, u.set(t, i), (u = n.querySelector(Zn(t))) && !u._p && (i.instance = u, i.state.loading = 5), Me.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Me.set(t, l), u || qv(n, t, l, i.state))), e && a === null) throw Error(s(528, ""));
          return i;
        }
        if (e && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Wa(l), l = pa(n).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(s(444, t));
    }
  }
  function ka(t) {
    return 'href="' + ge(t) + '"';
  }
  function Zn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Qd(t) {
    return j({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function qv(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Zt(e, "link", l), $t(e), t.head.appendChild(e));
  }
  function Wa(t) {
    return '[src="' + ge(t) + '"]';
  }
  function wn(t) {
    return "script[async]" + t;
  }
  function Zd(t, e, l) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var a = t.querySelector('style[data-href~="' + ge(l.href) + '"]');
        if (a) return e.instance = a, $t(a), a;
        var n = j({}, l, {
          "data-href": l.href,
          "data-precedence": l.precedence,
          href: null,
          precedence: null
        });
        return a = (t.ownerDocument || t).createElement("style"), $t(a), Zt(a, "style", n), si(a, l.precedence, t), e.instance = a;
      case "stylesheet":
        n = ka(l.href);
        var u = t.querySelector(Zn(n));
        if (u) return e.state.loading |= 4, e.instance = u, $t(u), u;
        a = Qd(l), (n = Me.get(n)) && jf(a, n), u = (t.ownerDocument || t).createElement("link"), $t(u);
        var i = u;
        return i._p = new Promise(function(o, h) {
          i.onload = o, i.onerror = h;
        }), Zt(u, "link", a), e.state.loading |= 4, si(u, l.precedence, t), e.instance = u;
      case "script":
        return u = Wa(l.src), (n = t.querySelector(wn(u))) ? (e.instance = n, $t(n), n) : (a = l, (n = Me.get(u)) && (a = j({}, l), Yf(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), $t(n), Zt(n, "link", a), t.head.appendChild(n), e.instance = n);
      case "void":
        return null;
      default:
        throw Error(s(443, e.type));
    }
    else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, si(a, l.precedence, t));
    return e.instance;
  }
  function si(t, e, l) {
    for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var o = a[i];
      if (o.dataset.precedence === e) u = o;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function jf(t, e) {
    t.crossOrigin ??= e.crossOrigin, t.referrerPolicy ??= e.referrerPolicy, t.title ??= e.title;
  }
  function Yf(t, e) {
    t.crossOrigin ??= e.crossOrigin, t.referrerPolicy ??= e.referrerPolicy, t.integrity ??= e.integrity;
  }
  var ri = null;
  function wd(t, e, l) {
    if (ri === null) {
      var a = /* @__PURE__ */ new Map(), n = ri = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else n = ri, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[fn] || u[Gt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var o = a.get(i);
        o ? o.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Kd(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
  }
  function jv(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0;
    }
    return !1;
  }
  function Jd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Yv(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = ka(a.href), u = e.querySelector(Zn(n));
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = di.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, $t(u);
          return;
        }
        u = e.ownerDocument || e, a = Qd(a), (n = Me.get(n)) && jf(a, n), u = u.createElement("link"), $t(u);
        var i = u;
        i._p = new Promise(function(o, h) {
          i.onload = o, i.onerror = h;
        }), Zt(u, "link", a), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = di.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var $f = 0;
  function $v(t, e) {
    return t.stylesheets && t.count === 0 && vi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && vi(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && $f === 0 && ($f = 62500 * bv());
      var n = setTimeout(function() {
        if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && vi(t, t.stylesheets), t.unsuspend)) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, (t.imgBytes > $f ? 50 : 800) + e);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function di() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) vi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var hi = null;
  function vi(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, hi = /* @__PURE__ */ new Map(), e.forEach(Vv, t), hi = null, di.call(t));
  }
  function Vv(t, e) {
    if (!(e.state.loading & 4)) {
      var l = hi.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), hi.set(t, l);
        for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
        }
        a && l.set(null, a);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = di.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Kn = {
    $$typeof: Yt,
    Provider: null,
    Consumer: null,
    _currentValue: lt,
    _currentValue2: lt,
    _threadCount: 0
  };
  function Gv(t, e, l, a, n, u, i, o, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ri(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ri(0), this.hiddenUpdates = Ri(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Lv(t, e, l, a, n, u, i, o, h, b, E, O) {
    return t = new Gv(t, e, l, i, h, b, E, O, o), e = 1, u === !0 && (e |= 24), u = de(3, null, null, e), t.current = u, u.stateNode = t, e = gc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, Ac(u), t;
  }
  function Xv(t) {
    return t ? (t = Ma, t) : Ma;
  }
  function kd(t, e, l, a, n, u) {
    n = Xv(n), a.context === null ? a.context = n : a.pendingContext = n, a = aa(e), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = na(t, a, e), l !== null && (le(l, t, e), Tn(l, t, e));
  }
  function Wd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Vf(t, e) {
    Wd(t, e), (t = t.alternate) && Wd(t, e);
  }
  function Fd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Jl(t, 67108864);
      e !== null && le(e, t, 67108864), Vf(t, 67108864);
    }
  }
  function Id(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Te();
      e = po(e);
      var l = Jl(t, e);
      l !== null && le(l, t, e), Vf(t, e);
    }
  }
  var yi = !0;
  function Qv(t, e, l, a) {
    var n = C.T;
    C.T = null;
    var u = N.p;
    try {
      N.p = 2, Gf(t, e, l, a);
    } finally {
      N.p = u, C.T = n;
    }
  }
  function Zv(t, e, l, a) {
    var n = C.T;
    C.T = null;
    var u = N.p;
    try {
      N.p = 8, Gf(t, e, l, a);
    } finally {
      N.p = u, C.T = n;
    }
  }
  function Gf(t, e, l, a) {
    if (yi) {
      var n = Lf(a);
      if (n === null) Mf(t, e, a, mi, l), th(t, a);
      else if (Kv(n, t, e, l, a)) a.stopPropagation();
      else if (th(t, a), e & 4 && -1 < wv.indexOf(t)) {
        for (; n !== null; ) {
          var u = ma(n);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var i = Xl(u.pendingLanes);
                if (i !== 0) {
                  var o = u;
                  for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                    var h = 1 << 31 - se(i);
                    o.entanglements[1] |= h, i &= ~h;
                  }
                  ul(u), (at & 6) === 0 && (Iu = fe() + 500, Gn(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              o = Jl(u, 2), o !== null && le(o, u, 2), ti(), Vf(u, 2);
          }
          if (u = Lf(a), u === null && Mf(t, e, a, mi, l), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Mf(t, e, a, null, l);
    }
  }
  function Lf(t) {
    return t = Qi(t), Xf(t);
  }
  var mi = null;
  function Xf(t) {
    if (mi = null, t = ya(t), t !== null) {
      var e = z(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = x(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = R(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return mi = t, null;
  }
  function Pd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch ($h()) {
          case oo:
            return 2;
          case so:
            return 8;
          case nu:
          case Vh:
            return 32;
          case ro:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qf = !1, Ul = null, Dl = null, Nl = null, Jn = /* @__PURE__ */ new Map(), kn = /* @__PURE__ */ new Map(), Bl = [], wv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function th(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ul = null;
        break;
      case "dragenter":
      case "dragleave":
        Dl = null;
        break;
      case "mouseover":
      case "mouseout":
        Nl = null;
        break;
      case "pointerover":
      case "pointerout":
        Jn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        kn.delete(e.pointerId);
    }
  }
  function Wn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = ma(e), e !== null && Fd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function Kv(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return Ul = Wn(Ul, t, e, l, a, n), !0;
      case "dragenter":
        return Dl = Wn(Dl, t, e, l, a, n), !0;
      case "mouseover":
        return Nl = Wn(Nl, t, e, l, a, n), !0;
      case "pointerover":
        var u = n.pointerId;
        return Jn.set(u, Wn(Jn.get(u) || null, t, e, l, a, n)), !0;
      case "gotpointercapture":
        return u = n.pointerId, kn.set(u, Wn(kn.get(u) || null, t, e, l, a, n)), !0;
    }
    return !1;
  }
  function eh(t) {
    var e = ya(t.target);
    if (e !== null) {
      var l = z(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = x(l), e !== null) {
            t.blockedOn = e, bo(t.priority, function() {
              Id(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = R(l), e !== null) {
            t.blockedOn = e, bo(t.priority, function() {
              Id(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function pi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Lf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        Xi = a, l.target.dispatchEvent(a), Xi = null;
      } else return e = ma(l), e !== null && Fd(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function lh(t, e, l) {
    pi(t) && l.delete(e);
  }
  function Jv() {
    Qf = !1, Ul !== null && pi(Ul) && (Ul = null), Dl !== null && pi(Dl) && (Dl = null), Nl !== null && pi(Nl) && (Nl = null), Jn.forEach(lh), kn.forEach(lh);
  }
  function gi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Qf || (Qf = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Jv)));
  }
  var bi = null;
  function ah(t) {
    bi !== t && (bi = t, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
      bi === t && (bi = null);
      for (var e = 0; e < t.length; e += 3) {
        var l = t[e], a = t[e + 1], n = t[e + 2];
        if (typeof a != "function") {
          if (Xf(a || l) === null) continue;
          break;
        }
        var u = ma(l);
        u !== null && (t.splice(e, 3), e -= 3, Lc(u, {
          pending: !0,
          data: n,
          method: l.method,
          action: a
        }, a, n));
      }
    }));
  }
  function Fa(t) {
    function e(h) {
      return gi(h, t);
    }
    Ul !== null && gi(Ul, t), Dl !== null && gi(Dl, t), Nl !== null && gi(Nl, t), Jn.forEach(e), kn.forEach(e);
    for (var l = 0; l < Bl.length; l++) {
      var a = Bl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Bl.length && (l = Bl[0], l.blockedOn === null); ) eh(l), l.blockedOn === null && Bl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
      var n = l[a], u = l[a + 1], i = n[Wt] || null;
      if (typeof u == "function") i || ah(l);
      else if (i) {
        var o = null;
        if (u && u.hasAttribute("formAction")) {
          if (n = u, i = u[Wt] || null) o = i.formAction;
          else if (Xf(n) !== null) continue;
        } else o = i.action;
        typeof o == "function" ? l[a + 1] = o : (l.splice(a, 3), a -= 3), ah(l);
      }
    }
  }
  function kv() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function Zf(t) {
    this._internalRoot = t;
  }
  wf.prototype.render = Zf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(s(409));
    var l = e.current;
    kd(l, Te(), t, e, null, null);
  }, wf.prototype.unmount = Zf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      kd(t.current, 2, null, t, null, null), ti(), e[cn] = null;
    }
  };
  function wf(t) {
    this._internalRoot = t;
  }
  wf.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = go();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var l = 0; l < Bl.length && e !== 0 && e < Bl[l].priority; l++) ;
      Bl.splice(l, 0, t), l === 0 && eh(t);
    }
  };
  var nh = r.version;
  if (nh !== "19.2.4") throw Error(s(527, nh, "19.2.4"));
  N.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = A(e), t = t !== null ? q(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Wv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_i.isDisabled && _i.supportsFiber) try {
      nn = _i.inject(Wv), oe = _i;
    } catch {
    }
  }
  c.createRoot = function(t, e) {
    if (!p(t)) throw Error(s(299));
    var l = !1, a = "", n = Z0, u = w0, i = K0;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Lv(t, 1, !1, null, null, l, a, null, n, u, i, kv), t[cn] = e.current, Td(t), new Zf(e);
  };
})), ny = /* @__PURE__ */ Ve(((c, f) => {
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch {
      }
  }
  r(), f.exports = ay();
})), uy = ny(), Jt = Wf();
var Si = globalThis, Ff = Si.ShadowRoot && (Si.ShadyCSS === void 0 || Si.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, If = /* @__PURE__ */ Symbol(), uh = /* @__PURE__ */ new WeakMap(), Sh = class {
  constructor(c, f, r) {
    if (this._$cssResult$ = !0, r !== If) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = c, this.t = f;
  }
  get styleSheet() {
    let c = this.o;
    const f = this.t;
    if (Ff && c === void 0) {
      const r = f !== void 0 && f.length === 1;
      r && (c = uh.get(f)), c === void 0 && ((this.o = c = new CSSStyleSheet()).replaceSync(this.cssText), r && uh.set(f, c));
    }
    return c;
  }
  toString() {
    return this.cssText;
  }
}, Pf = (c) => new Sh(typeof c == "string" ? c : c + "", void 0, If), ol = (c, ...f) => new Sh(c.length === 1 ? c[0] : f.reduce((r, d, s) => r + ((p) => {
  if (p._$cssResult$ === !0) return p.cssText;
  if (typeof p == "number") return p;
  throw Error("Value passed to 'css' function must be a 'css' function result: " + p + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(d) + c[s + 1], c[0]), c, If), iy = (c, f) => {
  if (Ff) c.adoptedStyleSheets = f.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of f) {
    const d = document.createElement("style"), s = Si.litNonce;
    s !== void 0 && d.setAttribute("nonce", s), d.textContent = r.cssText, c.appendChild(d);
  }
}, ih = Ff ? (c) => c : (c) => c instanceof CSSStyleSheet ? ((f) => {
  let r = "";
  for (const d of f.cssRules) r += d.cssText;
  return Pf(r);
})(c) : c;
var { is: cy, defineProperty: fy, getOwnPropertyDescriptor: oy, getOwnPropertyNames: sy, getOwnPropertySymbols: ry, getPrototypeOf: dy } = Object, Ti = globalThis, ch = Ti.trustedTypes, hy = ch ? ch.emptyScript : "", vy = Ti.reactiveElementPolyfillSupport, Pn = (c, f) => c, Ei = {
  toAttribute(c, f) {
    switch (f) {
      case Boolean:
        c = c ? hy : null;
        break;
      case Object:
      case Array:
        c = c == null ? c : JSON.stringify(c);
    }
    return c;
  },
  fromAttribute(c, f) {
    let r = c;
    switch (f) {
      case Boolean:
        r = c !== null;
        break;
      case Number:
        r = c === null ? null : Number(c);
        break;
      case Object:
      case Array:
        try {
          r = JSON.parse(c);
        } catch {
          r = null;
        }
    }
    return r;
  }
}, to = (c, f) => !cy(c, f), fh = {
  attribute: !0,
  type: String,
  converter: Ei,
  reflect: !1,
  useDefault: !1,
  hasChanged: to
};
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Ti.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var Ia = class extends HTMLElement {
  static addInitializer(c) {
    this._$Ei(), (this.l ??= []).push(c);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(c, f = fh) {
    if (f.state && (f.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(c) && ((f = Object.create(f)).wrapped = !0), this.elementProperties.set(c, f), !f.noAccessor) {
      const r = /* @__PURE__ */ Symbol(), d = this.getPropertyDescriptor(c, r, f);
      d !== void 0 && fy(this.prototype, c, d);
    }
  }
  static getPropertyDescriptor(c, f, r) {
    const { get: d, set: s } = oy(this.prototype, c) ?? {
      get() {
        return this[f];
      },
      set(p) {
        this[f] = p;
      }
    };
    return {
      get: d,
      set(p) {
        const z = d?.call(this);
        s?.call(this, p), this.requestUpdate(c, z, r);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(c) {
    return this.elementProperties.get(c) ?? fh;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Pn("elementProperties"))) return;
    const c = dy(this);
    c.finalize(), c.l !== void 0 && (this.l = [...c.l]), this.elementProperties = new Map(c.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Pn("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Pn("properties"))) {
      const f = this.properties, r = [...sy(f), ...ry(f)];
      for (const d of r) this.createProperty(d, f[d]);
    }
    const c = this[Symbol.metadata];
    if (c !== null) {
      const f = litPropertyMetadata.get(c);
      if (f !== void 0) for (const [r, d] of f) this.elementProperties.set(r, d);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [f, r] of this.elementProperties) {
      const d = this._$Eu(f, r);
      d !== void 0 && this._$Eh.set(d, f);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(c) {
    const f = [];
    if (Array.isArray(c)) {
      const r = new Set(c.flat(1 / 0).reverse());
      for (const d of r) f.unshift(ih(d));
    } else c !== void 0 && f.push(ih(c));
    return f;
  }
  static _$Eu(c, f) {
    const r = f.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof c == "string" ? c.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((c) => this.enableUpdating = c), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((c) => c(this));
  }
  addController(c) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(c), this.renderRoot !== void 0 && this.isConnected && c.hostConnected?.();
  }
  removeController(c) {
    this._$EO?.delete(c);
  }
  _$E_() {
    const c = /* @__PURE__ */ new Map(), f = this.constructor.elementProperties;
    for (const r of f.keys()) this.hasOwnProperty(r) && (c.set(r, this[r]), delete this[r]);
    c.size > 0 && (this._$Ep = c);
  }
  createRenderRoot() {
    const c = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return iy(c, this.constructor.elementStyles), c;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((c) => c.hostConnected?.());
  }
  enableUpdating(c) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((c) => c.hostDisconnected?.());
  }
  attributeChangedCallback(c, f, r) {
    this._$AK(c, r);
  }
  _$ET(c, f) {
    const r = this.constructor.elementProperties.get(c), d = this.constructor._$Eu(c, r);
    if (d !== void 0 && r.reflect === !0) {
      const s = (r.converter?.toAttribute !== void 0 ? r.converter : Ei).toAttribute(f, r.type);
      this._$Em = c, s == null ? this.removeAttribute(d) : this.setAttribute(d, s), this._$Em = null;
    }
  }
  _$AK(c, f) {
    const r = this.constructor, d = r._$Eh.get(c);
    if (d !== void 0 && this._$Em !== d) {
      const s = r.getPropertyOptions(d), p = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : Ei;
      this._$Em = d;
      const z = p.fromAttribute(f, s.type);
      this[d] = z ?? this._$Ej?.get(d) ?? z, this._$Em = null;
    }
  }
  requestUpdate(c, f, r, d = !1, s) {
    if (c !== void 0) {
      const p = this.constructor;
      if (d === !1 && (s = this[c]), r ??= p.getPropertyOptions(c), !((r.hasChanged ?? to)(s, f) || r.useDefault && r.reflect && s === this._$Ej?.get(c) && !this.hasAttribute(p._$Eu(c, r)))) return;
      this.C(c, f, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(c, f, { useDefault: r, reflect: d, wrapped: s }, p) {
    r && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(c) && (this._$Ej.set(c, p ?? f ?? this[c]), s !== !0 || p !== void 0) || (this._$AL.has(c) || (this.hasUpdated || r || (f = void 0), this._$AL.set(c, f)), d === !0 && this._$Em !== c && (this._$Eq ??= /* @__PURE__ */ new Set()).add(c));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (f) {
      Promise.reject(f);
    }
    const c = this.scheduleUpdate();
    return c != null && await c, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [d, s] of this._$Ep) this[d] = s;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [d, s] of r) {
        const { wrapped: p } = s, z = this[d];
        p !== !0 || this._$AL.has(d) || z === void 0 || this.C(d, void 0, s, z);
      }
    }
    let c = !1;
    const f = this._$AL;
    try {
      c = this.shouldUpdate(f), c ? (this.willUpdate(f), this._$EO?.forEach((r) => r.hostUpdate?.()), this.update(f)) : this._$EM();
    } catch (r) {
      throw c = !1, this._$EM(), r;
    }
    c && this._$AE(f);
  }
  willUpdate(c) {
  }
  _$AE(c) {
    this._$EO?.forEach((f) => f.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(c)), this.updated(c);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(c) {
    return !0;
  }
  update(c) {
    this._$Eq &&= this._$Eq.forEach((f) => this._$ET(f, this[f])), this._$EM();
  }
  updated(c) {
  }
  firstUpdated(c) {
  }
};
Ia.elementStyles = [], Ia.shadowRootOptions = { mode: "open" }, Ia[Pn("elementProperties")] = /* @__PURE__ */ new Map(), Ia[Pn("finalized")] = /* @__PURE__ */ new Map(), vy?.({ ReactiveElement: Ia }), (Ti.reactiveElementVersions ??= []).push("2.1.2");
var eo = globalThis, oh = (c) => c, zi = eo.trustedTypes, sh = zi ? zi.createPolicy("lit-html", { createHTML: (c) => c }) : void 0, Ah = "$lit$", Rl = `lit$${Math.random().toFixed(9).slice(2)}$`, Eh = "?" + Rl, yy = `<${Eh}>`, da = document, tu = () => da.createComment(""), eu = (c) => c === null || typeof c != "object" && typeof c != "function", lo = Array.isArray, my = (c) => lo(c) || typeof c?.[Symbol.iterator] == "function", Kf = `[ 	
\f\r]`, Fn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rh = /-->/g, dh = />/g, oa = RegExp(`>|${Kf}(?:([^\\s"'>=/]+)(${Kf}*=${Kf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), hh = /'/g, vh = /"/g, zh = /^(?:script|style|textarea|title)$/i, ao = (c) => (f, ...r) => ({
  _$litType$: c,
  strings: f,
  values: r
}), Ht = ao(1), Ky = ao(2), Jy = ao(3), fl = /* @__PURE__ */ Symbol.for("lit-noChange"), pt = /* @__PURE__ */ Symbol.for("lit-nothing"), yh = /* @__PURE__ */ new WeakMap(), sa = da.createTreeWalker(da, 129);
function Th(c, f) {
  if (!lo(c) || !c.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return sh !== void 0 ? sh.createHTML(f) : f;
}
var py = (c, f) => {
  const r = c.length - 1, d = [];
  let s, p = f === 2 ? "<svg>" : f === 3 ? "<math>" : "", z = Fn;
  for (let x = 0; x < r; x++) {
    const R = c[x];
    let H, A, q = -1, j = 0;
    for (; j < R.length && (z.lastIndex = j, A = z.exec(R), A !== null); ) j = z.lastIndex, z === Fn ? A[1] === "!--" ? z = rh : A[1] !== void 0 ? z = dh : A[2] !== void 0 ? (zh.test(A[2]) && (s = RegExp("</" + A[2], "g")), z = oa) : A[3] !== void 0 && (z = oa) : z === oa ? A[0] === ">" ? (z = s ?? Fn, q = -1) : A[1] === void 0 ? q = -2 : (q = z.lastIndex - A[2].length, H = A[1], z = A[3] === void 0 ? oa : A[3] === '"' ? vh : hh) : z === vh || z === hh ? z = oa : z === rh || z === dh ? z = Fn : (z = oa, s = void 0);
    const bt = z === oa && c[x + 1].startsWith("/>") ? " " : "";
    p += z === Fn ? R + yy : q >= 0 ? (d.push(H), R.slice(0, q) + Ah + R.slice(q) + Rl + bt) : R + Rl + (q === -2 ? x : bt);
  }
  return [Th(c, p + (c[r] || "<?>") + (f === 2 ? "</svg>" : f === 3 ? "</math>" : "")), d];
}, kf = class Oh {
  constructor({ strings: f, _$litType$: r }, d) {
    let s;
    this.parts = [];
    let p = 0, z = 0;
    const x = f.length - 1, R = this.parts, [H, A] = py(f, r);
    if (this.el = Oh.createElement(H, d), sa.currentNode = this.el.content, r === 2 || r === 3) {
      const q = this.el.content.firstChild;
      q.replaceWith(...q.childNodes);
    }
    for (; (s = sa.nextNode()) !== null && R.length < x; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const q of s.getAttributeNames()) if (q.endsWith(Ah)) {
          const j = A[z++], bt = s.getAttribute(q).split(Rl), _t = /([.?@])?(.*)/.exec(j);
          R.push({
            type: 1,
            index: p,
            name: _t[2],
            strings: bt,
            ctor: _t[1] === "." ? by : _t[1] === "?" ? _y : _t[1] === "@" ? Sy : Oi
          }), s.removeAttribute(q);
        } else q.startsWith(Rl) && (R.push({
          type: 6,
          index: p
        }), s.removeAttribute(q));
        if (zh.test(s.tagName)) {
          const q = s.textContent.split(Rl), j = q.length - 1;
          if (j > 0) {
            s.textContent = zi ? zi.emptyScript : "";
            for (let bt = 0; bt < j; bt++) s.append(q[bt], tu()), sa.nextNode(), R.push({
              type: 2,
              index: ++p
            });
            s.append(q[j], tu());
          }
        }
      } else if (s.nodeType === 8) if (s.data === Eh) R.push({
        type: 2,
        index: p
      });
      else {
        let q = -1;
        for (; (q = s.data.indexOf(Rl, q + 1)) !== -1; ) R.push({
          type: 7,
          index: p
        }), q += Rl.length - 1;
      }
      p++;
    }
  }
  static createElement(f, r) {
    const d = da.createElement("template");
    return d.innerHTML = f, d;
  }
};
function Pa(c, f, r = c, d) {
  if (f === fl) return f;
  let s = d !== void 0 ? r._$Co?.[d] : r._$Cl;
  const p = eu(f) ? void 0 : f._$litDirective$;
  return s?.constructor !== p && (s?._$AO?.(!1), p === void 0 ? s = void 0 : (s = new p(c), s._$AT(c, r, d)), d !== void 0 ? (r._$Co ??= [])[d] = s : r._$Cl = s), s !== void 0 && (f = Pa(c, s._$AS(c, f.values), s, d)), f;
}
var gy = class {
  constructor(c, f) {
    this._$AV = [], this._$AN = void 0, this._$AD = c, this._$AM = f;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(c) {
    const { el: { content: f }, parts: r } = this._$AD, d = (c?.creationScope ?? da).importNode(f, !0);
    sa.currentNode = d;
    let s = sa.nextNode(), p = 0, z = 0, x = r[0];
    for (; x !== void 0; ) {
      if (p === x.index) {
        let R;
        x.type === 2 ? R = new no(s, s.nextSibling, this, c) : x.type === 1 ? R = new x.ctor(s, x.name, x.strings, this, c) : x.type === 6 && (R = new Ay(s, this, c)), this._$AV.push(R), x = r[++z];
      }
      p !== x?.index && (s = sa.nextNode(), p++);
    }
    return sa.currentNode = da, d;
  }
  p(c) {
    let f = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(c, r, f), f += r.strings.length - 2) : r._$AI(c[f])), f++;
  }
}, no = class Mh {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(f, r, d, s) {
    this.type = 2, this._$AH = pt, this._$AN = void 0, this._$AA = f, this._$AB = r, this._$AM = d, this.options = s, this._$Cv = s?.isConnected ?? !0;
  }
  get parentNode() {
    let f = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && f?.nodeType === 11 && (f = r.parentNode), f;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(f, r = this) {
    f = Pa(this, f, r), eu(f) ? f === pt || f == null || f === "" ? (this._$AH !== pt && this._$AR(), this._$AH = pt) : f !== this._$AH && f !== fl && this._(f) : f._$litType$ !== void 0 ? this.$(f) : f.nodeType !== void 0 ? this.T(f) : my(f) ? this.k(f) : this._(f);
  }
  O(f) {
    return this._$AA.parentNode.insertBefore(f, this._$AB);
  }
  T(f) {
    this._$AH !== f && (this._$AR(), this._$AH = this.O(f));
  }
  _(f) {
    this._$AH !== pt && eu(this._$AH) ? this._$AA.nextSibling.data = f : this.T(da.createTextNode(f)), this._$AH = f;
  }
  $(f) {
    const { values: r, _$litType$: d } = f, s = typeof d == "number" ? this._$AC(f) : (d.el === void 0 && (d.el = kf.createElement(Th(d.h, d.h[0]), this.options)), d);
    if (this._$AH?._$AD === s) this._$AH.p(r);
    else {
      const p = new gy(s, this), z = p.u(this.options);
      p.p(r), this.T(z), this._$AH = p;
    }
  }
  _$AC(f) {
    let r = yh.get(f.strings);
    return r === void 0 && yh.set(f.strings, r = new kf(f)), r;
  }
  k(f) {
    lo(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let d, s = 0;
    for (const p of f) s === r.length ? r.push(d = new Mh(this.O(tu()), this.O(tu()), this, this.options)) : d = r[s], d._$AI(p), s++;
    s < r.length && (this._$AR(d && d._$AB.nextSibling, s), r.length = s);
  }
  _$AR(f = this._$AA.nextSibling, r) {
    for (this._$AP?.(!1, !0, r); f !== this._$AB; ) {
      const d = oh(f).nextSibling;
      oh(f).remove(), f = d;
    }
  }
  setConnected(f) {
    this._$AM === void 0 && (this._$Cv = f, this._$AP?.(f));
  }
}, Oi = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(c, f, r, d, s) {
    this.type = 1, this._$AH = pt, this._$AN = void 0, this.element = c, this.name = f, this._$AM = d, this.options = s, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(/* @__PURE__ */ new String()), this.strings = r) : this._$AH = pt;
  }
  _$AI(c, f = this, r, d) {
    const s = this.strings;
    let p = !1;
    if (s === void 0) c = Pa(this, c, f, 0), p = !eu(c) || c !== this._$AH && c !== fl, p && (this._$AH = c);
    else {
      const z = c;
      let x, R;
      for (c = s[0], x = 0; x < s.length - 1; x++) R = Pa(this, z[r + x], f, x), R === fl && (R = this._$AH[x]), p ||= !eu(R) || R !== this._$AH[x], R === pt ? c = pt : c !== pt && (c += (R ?? "") + s[x + 1]), this._$AH[x] = R;
    }
    p && !d && this.j(c);
  }
  j(c) {
    c === pt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, c ?? "");
  }
}, by = class extends Oi {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(c) {
    this.element[this.name] = c === pt ? void 0 : c;
  }
}, _y = class extends Oi {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(c) {
    this.element.toggleAttribute(this.name, !!c && c !== pt);
  }
}, Sy = class extends Oi {
  constructor(c, f, r, d, s) {
    super(c, f, r, d, s), this.type = 5;
  }
  _$AI(c, f = this) {
    if ((c = Pa(this, c, f, 0) ?? pt) === fl) return;
    const r = this._$AH, d = c === pt && r !== pt || c.capture !== r.capture || c.once !== r.once || c.passive !== r.passive, s = c !== pt && (r === pt || d);
    d && this.element.removeEventListener(this.name, this, r), s && this.element.addEventListener(this.name, this, c), this._$AH = c;
  }
  handleEvent(c) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, c) : this._$AH.handleEvent(c);
  }
}, Ay = class {
  constructor(c, f, r) {
    this.element = c, this.type = 6, this._$AN = void 0, this._$AM = f, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(c) {
    Pa(this, c);
  }
};
var Ey = eo.litHtmlPolyfillSupport;
Ey?.(kf, no), (eo.litHtmlVersions ??= []).push("3.3.2");
var zy = (c, f, r) => {
  const d = r?.renderBefore ?? f;
  let s = d._$litPart$;
  if (s === void 0) {
    const p = r?.renderBefore ?? null;
    d._$litPart$ = s = new no(f.insertBefore(tu(), p), p, void 0, r ?? {});
  }
  return s._$AI(c), s;
};
var uo = globalThis, ra = class extends Ia {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const c = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= c.firstChild, c;
  }
  update(c) {
    const f = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(c), this._$Do = zy(f, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return fl;
  }
};
ra._$litElement$ = !0, ra.finalized = !0, uo.litElementHydrateSupport?.({ LitElement: ra });
var Ty = uo.litElementPolyfillSupport;
Ty?.({ LitElement: ra });
(uo.litElementVersions ??= []).push("4.2.2");
var Oy = {
  attribute: !0,
  type: String,
  converter: Ei,
  reflect: !1,
  hasChanged: to
}, My = (c = Oy, f, r) => {
  const { kind: d, metadata: s } = r;
  let p = globalThis.litPropertyMetadata.get(s);
  if (p === void 0 && globalThis.litPropertyMetadata.set(s, p = /* @__PURE__ */ new Map()), d === "setter" && ((c = Object.create(c)).wrapped = !0), p.set(r.name, c), d === "accessor") {
    const { name: z } = r;
    return {
      set(x) {
        const R = f.get.call(this);
        f.set.call(this, x), this.requestUpdate(z, R, c, !0, x);
      },
      init(x) {
        return x !== void 0 && this.C(z, void 0, c, x), x;
      }
    };
  }
  if (d === "setter") {
    const { name: z } = r;
    return function(x) {
      const R = this[z];
      f.call(this, x), this.requestUpdate(z, R, c, !0, x);
    };
  }
  throw Error("Unsupported decorator location: " + d);
};
function D(c) {
  return (f, r) => typeof r == "object" ? My(c, f, r) : ((d, s, p) => {
    const z = s.hasOwnProperty(p);
    return s.constructor.createProperty(p, d), z ? Object.getOwnPropertyDescriptor(s, p) : void 0;
  })(c, f, r);
}
function sl(c) {
  return D({
    ...c,
    state: !0,
    attribute: !1
  });
}
var mh = (c, f, r) => (r.configurable = !0, r.enumerable = !0, Reflect.decorate && typeof f != "object" && Object.defineProperty(c, f, r), r);
function io(c, f) {
  return (r, d, s) => {
    const p = (z) => z.renderRoot?.querySelector(c) ?? null;
    if (f) {
      const { get: z, set: x } = typeof d == "object" ? r : s ?? /* @__PURE__ */ (() => {
        const R = /* @__PURE__ */ Symbol();
        return {
          get() {
            return this[R];
          },
          set(H) {
            this[R] = H;
          }
        };
      })();
      return mh(r, d, { get() {
        let R = z.call(this);
        return R === void 0 && (R = p(this), (R !== null || this.hasUpdated) && x.call(this, R)), R;
      } });
    }
    return mh(r, d, { get() {
      return p(this);
    } });
  };
}
var Ai = "2.5.1", ph = "__vscodeElements_disableRegistryWarning__", xh = (c, f) => {
  const r = "[VSCode Elements] ";
}, jl = class extends ra {
  /** VSCode Elements version */
  get version() {
    return Ai;
  }
  warn(c) {
    xh(c, this);
  }
};
const Yl = (c) => (f) => {
  if (!customElements.get(c)) {
    customElements.define(c, f);
    return;
  }
  if (ph in window) return;
  const r = document.createElement(c)?.version;
  let d = "";
  r ? r !== Ai ? (d += "is already registered by a different version of VSCode Elements. ", d += `This version is "${Ai}", while the other one is "${r}".`) : d += `is already registered by the same version of VSCode Elements (${Ai}).` : d += "is already registered by an unknown custom element handler class.", xh(`The custom element "${c}" ${d}
To suppress this warning, set window.${ph} to true`);
};
var $l = ol`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`, xy = [$l, ol`
    :host {
      display: block;
      height: 28px;
      margin: 0;
      outline: none;
      width: 28px;
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke: transparent;
      stroke-width: 2px;
    }

    .indeterminate-indicator-1 {
      fill: none;
      stroke: var(--vscode-progressBar-background, #0078d4);
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `], Mi = function(c, f, r, d) {
  var s = arguments.length, p = s < 3 ? f : d === null ? d = Object.getOwnPropertyDescriptor(f, r) : d, z;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") p = Reflect.decorate(c, f, r, d);
  else for (var x = c.length - 1; x >= 0; x--) (z = c[x]) && (p = (s < 3 ? z(p) : s > 3 ? z(f, r, p) : z(f, r)) || p);
  return s > 3 && p && Object.defineProperty(f, r, p), p;
}, tn = class extends jl {
  constructor() {
    super(...arguments), this.ariaLabel = "Loading", this.ariaLive = "assertive", this.role = "alert";
  }
  render() {
    return Ht`<svg class="progress" part="progress" viewBox="0 0 16 16">
      <circle
        class="background"
        part="background"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
      <circle
        class="indeterminate-indicator-1"
        part="indeterminate-indicator-1"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
    </svg>`;
  }
};
tn.styles = xy;
Mi([D({
  reflect: !0,
  attribute: "aria-label"
})], tn.prototype, "ariaLabel", void 0);
Mi([D({
  reflect: !0,
  attribute: "aria-live"
})], tn.prototype, "ariaLive", void 0);
Mi([D({ reflect: !0 })], tn.prototype, "role", void 0);
tn = Mi([Yl("vscode-progress-ring")], tn);
var Ch = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
}, Uh = (c) => (...f) => ({
  _$litDirective$: c,
  values: f
}), Dh = class {
  constructor(c) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(c, f, r) {
    this._$Ct = c, this._$AM = f, this._$Ci = r;
  }
  _$AS(c, f) {
    return this.update(c, f);
  }
  update(c, f) {
    return this.render(...f);
  }
};
var lu = Uh(class extends Dh {
  constructor(c) {
    if (super(c), c.type !== Ch.ATTRIBUTE || c.name !== "class" || c.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(c) {
    return " " + Object.keys(c).filter((f) => c[f]).join(" ") + " ";
  }
  update(c, [f]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), c.strings !== void 0 && (this.nt = new Set(c.strings.join(" ").split(/\s/).filter((d) => d !== "")));
      for (const d in f) f[d] && !this.nt?.has(d) && this.st.add(d);
      return this.render(f);
    }
    const r = c.element.classList;
    for (const d of this.st) d in f || (r.remove(d), this.st.delete(d));
    for (const d in f) {
      const s = !!f[d];
      s === this.st.has(d) || this.nt?.has(d) || (s ? (r.add(d), this.st.add(d)) : (r.remove(d), this.st.delete(d)));
    }
    return fl;
  }
});
var Bt = (c) => c ?? pt, Cy = class extends Dh {
  constructor(c) {
    if (super(c), this._prevProperties = {}, c.type !== Ch.PROPERTY || c.name !== "style") throw new Error("The `stylePropertyMap` directive must be used in the `style` property");
  }
  update(c, [f]) {
    return Object.entries(f).forEach(([r, d]) => {
      this._prevProperties[r] !== d && (r.startsWith("--") ? c.element.style.setProperty(r, d) : c.element.style[r] = d, this._prevProperties[r] = d);
    }), fl;
  }
  render(c) {
    return fl;
  }
};
const Nh = Uh(Cy);
var Uy = [$l, ol`
    :host {
      color: var(--vscode-icon-foreground, #cccccc);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
    }

    .button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `], ha = function(c, f, r, d) {
  var s = arguments.length, p = s < 3 ? f : d === null ? d = Object.getOwnPropertyDescriptor(f, r) : d, z;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") p = Reflect.decorate(c, f, r, d);
  else for (var x = c.length - 1; x >= 0; x--) (z = c[x]) && (p = (s < 3 ? z(p) : s > 3 ? z(f, r, p) : z(f, r)) || p);
  return s > 3 && p && Object.defineProperty(f, r, p), p;
}, In, Be = In = class extends jl {
  constructor() {
    super(...arguments), this.label = "", this.name = "", this.size = 16, this.spin = !1, this.spinDuration = 1.5, this.actionIcon = !1, this._onButtonClick = (f) => {
      this.dispatchEvent(new CustomEvent("vsc-click", { detail: { originalEvent: f } }));
    };
  }
  connectedCallback() {
    super.connectedCallback();
    const { href: f, nonce: r } = this._getStylesheetConfig();
    In.stylesheetHref = f, In.nonce = r;
  }
  /**
  * For using web fonts in web components, the font stylesheet must be included
  * twice: on the page and in the web component. This function looks for the
  * font stylesheet on the page and returns the stylesheet URL and the nonce
  * id.
  */
  _getStylesheetConfig() {
    if (typeof document > "u") return {
      nonce: void 0,
      href: void 0
    };
    const f = document.getElementById("vscode-codicon-stylesheet"), r = f?.getAttribute("href") || void 0, d = f?.nonce || void 0;
    if (!f) {
      let s = 'To use the Icon component, the codicons.css file must be included in the page with the id "vscode-codicon-stylesheet"! ';
      s += "See https://vscode-elements.github.io/components/icon/ for more details.", this.warn(s);
    }
    return {
      nonce: d,
      href: r
    };
  }
  render() {
    const { stylesheetHref: f, nonce: r } = In, d = Ht`<span
      class=${lu({
      codicon: !0,
      ["codicon-" + this.name]: !0,
      spin: this.spin
    })}
      .style=${Nh({
      animationDuration: String(this.spinDuration) + "s",
      fontSize: this.size + "px",
      height: this.size + "px",
      width: this.size + "px"
    })}
    ></span>`, s = this.actionIcon ? Ht` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${d}
        </button>` : Ht` <span class="icon" aria-hidden="true" role="presentation"
          >${d}</span
        >`;
    return Ht`
      <link
        rel="stylesheet"
        href=${Bt(f)}
        nonce=${Bt(r)}
      />
      ${s}
    `;
  }
};
Be.styles = Uy;
Be.stylesheetHref = "";
Be.nonce = "";
ha([D()], Be.prototype, "label", void 0);
ha([D({ type: String })], Be.prototype, "name", void 0);
ha([D({ type: Number })], Be.prototype, "size", void 0);
ha([D({
  type: Boolean,
  reflect: !0
})], Be.prototype, "spin", void 0);
ha([D({
  type: Number,
  attribute: "spin-duration"
})], Be.prototype, "spinDuration", void 0);
ha([D({
  type: Boolean,
  reflect: !0,
  attribute: "action-icon"
})], Be.prototype, "actionIcon", void 0);
Be = In = ha([Yl("vscode-icon")], Be);
var Dy = 16, Ny = 13;
const By = Dy / Ny;
function Bh() {
  return navigator.userAgent.indexOf("Linux") > -1 ? 'system-ui, "Ubuntu", "Droid Sans", sans-serif' : navigator.userAgent.indexOf("Mac") > -1 ? "-apple-system, BlinkMacSystemFont, sans-serif" : navigator.userAgent.indexOf("Windows") > -1 ? '"Segoe WPC", "Segoe UI", sans-serif' : "sans-serif";
}
var Hy = [$l, ol`
    :host {
      cursor: pointer;
      display: inline-block;
      width: auto;
    }

    :host([block]) {
      display: block;
      width: 100%;
    }

    .base {
      align-items: center;
      background-color: var(--vscode-button-background, #0078d4);
      border-bottom-left-radius: var(--vsc-border-left-radius, 4px);
      border-bottom-right-radius: var(--vsc-border-right-radius, 4px);
      border-bottom-width: 1px;
      border-color: var(--vscode-button-border, transparent);
      border-left-width: var(--vsc-border-left-width, 1px);
      border-right-width: var(--vsc-border-right-width, 1px);
      border-style: solid;
      border-top-left-radius: var(--vsc-border-left-radius, 4px);
      border-top-right-radius: var(--vsc-border-right-radius, 4px);
      border-top-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-button-foreground, #ffffff);
      display: flex;
      font-family: var(--vscode-font-family, ${Pf(Bh())});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      justify-content: center;
      line-height: 22px;
      overflow: hidden;
      padding: 1px calc(13px + var(--vsc-base-additional-right-padding, 0px))
        1px 13px;
      position: relative;
      user-select: none;
      white-space: nowrap;
      width: 100%;
    }

    :host([block]) .base {
      min-height: 28px;
      text-align: center;
      width: 100%;
    }

    .base:after {
      background-color: var(
        --vscode-button-separator,
        rgba(255, 255, 255, 0.4)
      );
      content: var(--vsc-base-after-content);
      display: var(--vsc-divider-display, none);
      position: absolute;
      right: 0;
      top: 4px;
      bottom: 4px;
      width: 1px;
    }

    :host([secondary]) .base:after {
      background-color: var(--vscode-button-secondaryForeground, #cccccc);
      opacity: 0.4;
    }

    :host([secondary]) .base {
      color: var(--vscode-button-secondaryForeground, #cccccc);
      background-color: var(--vscode-button-secondaryBackground, #313131);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-secondaryBackground, rgba(255, 255, 255, 0.07))
      );
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) .base {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([disabled]:hover) .base {
      background-color: var(--vscode-button-background, #0078d4);
    }

    :host([secondary]:hover) .base {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:hover) .base {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) .base {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: 2px;
    }

    :host([disabled]:focus) .base {
      background-color: var(--vscode-button-background, #0078d4);
      outline: 0;
    }

    :host([secondary]:focus) .base {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:focus) .base {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(*:last-child) {
      margin-right: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .content {
      display: flex;
      position: relative;
      width: 100%;
      height: 100%;
      padding: 1px 13px;
    }

    :host(:empty) .base,
    .base.icon-only {
      min-height: 24px;
      min-width: 26px;
      padding: 1px 4px;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .has-content-before slot[name='content-before'] {
      margin-right: 4px;
    }

    .has-content-after slot[name='content-after'] {
      margin-left: 4px;
    }

    .icon,
    .icon-after {
      color: inherit;
      display: block;
    }

    :host(:not(:empty)) .icon {
      margin-right: 3px;
    }

    :host(:not(:empty)) .icon-after,
    :host([icon]) .icon-after {
      margin-left: 3px;
    }
  `], Rt = function(c, f, r, d) {
  var s = arguments.length, p = s < 3 ? f : d === null ? d = Object.getOwnPropertyDescriptor(f, r) : d, z;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") p = Reflect.decorate(c, f, r, d);
  else for (var x = c.length - 1; x >= 0; x--) (z = c[x]) && (p = (s < 3 ? z(p) : s > 3 ? z(f, r, p) : z(f, r)) || p);
  return s > 3 && p && Object.defineProperty(f, r, p), p;
}, At = class extends jl {
  get form() {
    return this._internals.form;
  }
  constructor() {
    super(), this.autofocus = !1, this.tabIndex = 0, this.secondary = !1, this.block = !1, this.role = "button", this.disabled = !1, this.icon = "", this.iconSpin = !1, this.iconAfter = "", this.iconAfterSpin = !1, this.focused = !1, this.name = void 0, this.iconOnly = !1, this.type = "button", this.value = "", this._prevTabindex = 0, this._hasContentBefore = !1, this._hasContentAfter = !1, this._handleFocus = () => {
      this.focused = !0;
    }, this._handleBlur = () => {
      this.focused = !1;
    }, this.addEventListener("keydown", this._handleKeyDown.bind(this)), this.addEventListener("click", this._handleClick.bind(this)), this._internals = this.attachInternals();
  }
  connectedCallback() {
    super.connectedCallback(), this.autofocus && (this.tabIndex < 0 && (this.tabIndex = 0), this.updateComplete.then(() => {
      this.focus(), this.requestUpdate();
    })), this.addEventListener("focus", this._handleFocus), this.addEventListener("blur", this._handleBlur);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("focus", this._handleFocus), this.removeEventListener("blur", this._handleBlur);
  }
  update(f) {
    super.update(f), f.has("value") && this._internals.setFormValue(this.value), f.has("disabled") && (this.disabled ? (this._prevTabindex = this.tabIndex, this.tabIndex = -1) : this.tabIndex = this._prevTabindex);
  }
  _executeAction() {
    this.type === "submit" && this._internals.form && this._internals.form.requestSubmit(), this.type === "reset" && this._internals.form && this._internals.form.reset();
  }
  _handleKeyDown(f) {
    if ((f.key === "Enter" || f.key === " ") && !this.hasAttribute("disabled")) {
      const r = new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0
      });
      r.synthetic = !0, this.dispatchEvent(r), this._executeAction();
    }
  }
  _handleClick(f) {
    f.synthetic || this.hasAttribute("disabled") || this._executeAction();
  }
  _handleSlotChange(f) {
    const r = f.target;
    r.name === "content-before" && (this._hasContentBefore = r.assignedElements().length > 0), r.name === "content-after" && (this._hasContentAfter = r.assignedElements().length > 0);
  }
  render() {
    const f = this.icon !== "", r = this.iconAfter !== "", d = {
      base: !0,
      "icon-only": this.iconOnly,
      "has-content-before": this._hasContentBefore,
      "has-content-after": this._hasContentAfter
    }, s = f ? Ht`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${Bt(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>` : pt, p = r ? Ht`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${Bt(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>` : pt;
    return Ht`
      <div
        class=${lu(d)}
        part="base"
        @slotchange=${this._handleSlotChange}
      >
        <slot name="content-before"></slot>
        ${s}
        <slot></slot>
        ${p}
        <slot name="content-after"></slot>
      </div>
    `;
  }
};
At.styles = Hy;
At.formAssociated = !0;
Rt([D({
  type: Boolean,
  reflect: !0
})], At.prototype, "autofocus", void 0);
Rt([D({
  type: Number,
  reflect: !0
})], At.prototype, "tabIndex", void 0);
Rt([D({
  type: Boolean,
  reflect: !0
})], At.prototype, "secondary", void 0);
Rt([D({
  type: Boolean,
  reflect: !0
})], At.prototype, "block", void 0);
Rt([D({ reflect: !0 })], At.prototype, "role", void 0);
Rt([D({
  type: Boolean,
  reflect: !0
})], At.prototype, "disabled", void 0);
Rt([D()], At.prototype, "icon", void 0);
Rt([D({
  type: Boolean,
  reflect: !0,
  attribute: "icon-spin"
})], At.prototype, "iconSpin", void 0);
Rt([D({
  type: Number,
  reflect: !0,
  attribute: "icon-spin-duration"
})], At.prototype, "iconSpinDuration", void 0);
Rt([D({ attribute: "icon-after" })], At.prototype, "iconAfter", void 0);
Rt([D({
  type: Boolean,
  reflect: !0,
  attribute: "icon-after-spin"
})], At.prototype, "iconAfterSpin", void 0);
Rt([D({
  type: Number,
  reflect: !0,
  attribute: "icon-after-spin-duration"
})], At.prototype, "iconAfterSpinDuration", void 0);
Rt([D({
  type: Boolean,
  reflect: !0
})], At.prototype, "focused", void 0);
Rt([D({
  type: String,
  reflect: !0
})], At.prototype, "name", void 0);
Rt([D({
  type: Boolean,
  reflect: !0,
  attribute: "icon-only"
})], At.prototype, "iconOnly", void 0);
Rt([D({ reflect: !0 })], At.prototype, "type", void 0);
Rt([D()], At.prototype, "value", void 0);
Rt([sl()], At.prototype, "_hasContentBefore", void 0);
Rt([sl()], At.prototype, "_hasContentAfter", void 0);
At = Rt([Yl("vscode-button")], At);
var gh = 0, Ry = (c = "") => (gh++, `${c}${gh}`), qy = [$l, ol`
    :host {
      display: block;
    }

    .wrapper {
      color: var(--vscode-foreground, #cccccc);
      cursor: default;
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: 600;
      line-height: ${By};
      padding: 5px 0;
    }

    .wrapper.required:after {
      content: ' *';
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground, #cccccc);
      opacity: 0.9;
    }
  `], xi = function(c, f, r, d) {
  var s = arguments.length, p = s < 3 ? f : d === null ? d = Object.getOwnPropertyDescriptor(f, r) : d, z;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") p = Reflect.decorate(c, f, r, d);
  else for (var x = c.length - 1; x >= 0; x--) (z = c[x]) && (p = (s < 3 ? z(p) : s > 3 ? z(f, r, p) : z(f, r)) || p);
  return s > 3 && p && Object.defineProperty(f, r, p), p;
}, en = class extends jl {
  constructor() {
    super(...arguments), this.required = !1, this._id = "", this._htmlFor = "", this._connected = !1;
  }
  set htmlFor(f) {
    this._htmlFor = f, this.setAttribute("for", f), this._connected && this._connectWithTarget();
  }
  get htmlFor() {
    return this._htmlFor;
  }
  set id(f) {
    this._id = f;
  }
  get id() {
    return this._id;
  }
  attributeChangedCallback(f, r, d) {
    super.attributeChangedCallback(f, r, d);
  }
  connectedCallback() {
    super.connectedCallback(), this._connected = !0, this._id === "" && (this._id = Ry("vscode-label-"), this.setAttribute("id", this._id)), this._connectWithTarget();
  }
  _getTarget() {
    let f = null;
    if (this._htmlFor) {
      const r = this.getRootNode({ composed: !1 });
      r && (f = r.querySelector(`#${this._htmlFor}`));
    }
    return f;
  }
  async _connectWithTarget() {
    await this.updateComplete;
    const f = this._getTarget();
    ["vscode-radio-group", "vscode-checkbox-group"].includes(f?.tagName.toLowerCase() ?? "") && f.setAttribute("aria-labelledby", this._id);
    let r = "";
    this.textContent && (r = this.textContent.trim()), f && "label" in f && [
      "vscode-textfield",
      "vscode-textarea",
      "vscode-single-select",
      "vscode-multi-select"
    ].includes(f?.tagName.toLowerCase() ?? "") && (f.label = r);
  }
  _handleClick() {
    const f = this._getTarget();
    f && "focus" in f && f.focus();
  }
  render() {
    return Ht`
      <label
        class=${lu({
      wrapper: !0,
      required: this.required
    })}
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `;
  }
};
en.styles = qy;
xi([D({
  reflect: !0,
  attribute: "for"
})], en.prototype, "htmlFor", null);
xi([D()], en.prototype, "id", null);
xi([D({
  type: Boolean,
  reflect: !0
})], en.prototype, "required", void 0);
en = xi([Yl("vscode-label")], en);
var jy = [$l, ol`
    :host {
      display: inline-block;
      height: auto;
      position: relative;
      width: 320px;
    }

    :host([cols]) {
      width: auto;
    }

    :host([rows]) {
      height: auto;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      inset: 0 0 auto 0;
      height: 6px;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    textarea {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(--vscode-settings-textInputBorder, transparent);
      border-radius: 4px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      width: 100%;
    }

    :host([cols]) textarea {
      width: auto;
    }

    :host([rows]) textarea {
      height: auto;
    }

    :host([invalid]) textarea,
    :host(:invalid) textarea {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    textarea.monospace {
      background-color: var(--vscode-editor-background, #1f1f1f);
      color: var(--vscode-editor-foreground, #cccccc);
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: var(--vscode-editor-font-size, 14px);
      font-weight: var(--vscode-editor-font-weight, normal);
    }

    .textarea.monospace::placeholder {
      color: var(
        --vscode-editor-inlineValuesForeground,
        rgba(255, 255, 255, 0.5)
      );
    }

    textarea.cursor-pointer {
      cursor: pointer;
    }

    textarea:focus {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    textarea::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    textarea::-webkit-scrollbar-track {
      background-color: transparent;
    }

    textarea::-webkit-scrollbar {
      width: 14px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    textarea:hover::-webkit-scrollbar-thumb {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
    }

    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    textarea::-webkit-scrollbar-thumb:active {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    textarea::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    textarea::-webkit-resizer {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYMAOZuIQZ5j5//9/rJJESczEKYGsG6cEXgAAsEEefMxkua4AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  `], Et = function(c, f, r, d) {
  var s = arguments.length, p = s < 3 ? f : d === null ? d = Object.getOwnPropertyDescriptor(f, r) : d, z;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") p = Reflect.decorate(c, f, r, d);
  else for (var x = c.length - 1; x >= 0; x--) (z = c[x]) && (p = (s < 3 ? z(p) : s > 3 ? z(f, r, p) : z(f, r)) || p);
  return s > 3 && p && Object.defineProperty(f, r, p), p;
}, dt = class extends jl {
  set value(f) {
    this._value = f, this._internals.setFormValue(f);
  }
  get value() {
    return this._value;
  }
  /**
  * Getter for the inner textarea element if it needs to be accessed for some reason.
  */
  get wrappedElement() {
    return this._textareaEl;
  }
  get form() {
    return this._internals.form;
  }
  /** @internal */
  get type() {
    return "textarea";
  }
  get validity() {
    return this._internals.validity;
  }
  get validationMessage() {
    return this._internals.validationMessage;
  }
  get willValidate() {
    return this._internals.willValidate;
  }
  /**
  * Lowercase alias to minLength
  */
  set minlength(f) {
    this.minLength = f;
  }
  get minlength() {
    return this.minLength;
  }
  /**
  * Lowercase alias to maxLength
  */
  set maxlength(f) {
    this.maxLength = f;
  }
  get maxlength() {
    return this.maxLength;
  }
  constructor() {
    super(), this.autocomplete = void 0, this.autofocus = !1, this.defaultValue = "", this.disabled = !1, this.invalid = !1, this.label = "", this.maxLength = void 0, this.minLength = void 0, this.rows = void 0, this.cols = void 0, this.name = void 0, this.placeholder = void 0, this.readonly = !1, this.resize = "none", this.required = !1, this.spellcheck = !1, this.monospace = !1, this._value = "", this._textareaPointerCursor = !1, this._shadow = !1, this._internals = this.attachInternals();
  }
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => {
      this._textareaEl.checkValidity(), this._setValidityFromInput(), this._internals.setFormValue(this._textareaEl.value);
    });
  }
  updated(f) {
    const r = [
      "maxLength",
      "minLength",
      "required"
    ];
    for (const d of f.keys()) if (r.includes(String(d))) {
      this.updateComplete.then(() => {
        this._setValidityFromInput();
      });
      break;
    }
  }
  /** @internal */
  formResetCallback() {
    this.value = this.defaultValue;
  }
  /** @internal */
  formStateRestoreCallback(f, r) {
    this.updateComplete.then(() => {
      this._value = f;
    });
  }
  checkValidity() {
    return this._internals.checkValidity();
  }
  reportValidity() {
    return this._internals.reportValidity();
  }
  _setValidityFromInput() {
    this._internals.setValidity(this._textareaEl.validity, this._textareaEl.validationMessage, this._textareaEl);
  }
  _dataChanged() {
    this._value = this._textareaEl.value, this._internals.setFormValue(this._textareaEl.value);
  }
  _handleChange() {
    this._dataChanged(), this._setValidityFromInput(), this.dispatchEvent(new Event("change"));
  }
  _handleInput() {
    this._dataChanged(), this._setValidityFromInput();
  }
  _handleMouseMove(f) {
    if (this._textareaEl.clientHeight >= this._textareaEl.scrollHeight) {
      this._textareaPointerCursor = !1;
      return;
    }
    const r = 14, d = 1, s = this._textareaEl.getBoundingClientRect();
    this._textareaPointerCursor = f.clientX >= s.left + s.width - r - d * 2;
  }
  _handleScroll() {
    this._shadow = this._textareaEl.scrollTop > 0;
  }
  render() {
    return Ht`
      <div
        class=${lu({
      shadow: !0,
      visible: this._shadow
    })}
      ></div>
      <textarea
        autocomplete=${Bt(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${lu({
      monospace: this.monospace,
      "cursor-pointer": this._textareaPointerCursor
    })}
        maxlength=${Bt(this.maxLength)}
        minlength=${Bt(this.minLength)}
        rows=${Bt(this.rows)}
        cols=${Bt(this.cols)}
        name=${Bt(this.name)}
        placeholder=${Bt(this.placeholder)}
        ?readonly=${this.readonly}
        .style=${Nh({ resize: this.resize })}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `;
  }
};
dt.styles = jy;
dt.formAssociated = !0;
dt.shadowRootOptions = {
  ...ra.shadowRootOptions,
  delegatesFocus: !0
};
Et([D()], dt.prototype, "autocomplete", void 0);
Et([D({
  type: Boolean,
  reflect: !0
})], dt.prototype, "autofocus", void 0);
Et([D({ attribute: "default-value" })], dt.prototype, "defaultValue", void 0);
Et([D({
  type: Boolean,
  reflect: !0
})], dt.prototype, "disabled", void 0);
Et([D({
  type: Boolean,
  reflect: !0
})], dt.prototype, "invalid", void 0);
Et([D({ attribute: !1 })], dt.prototype, "label", void 0);
Et([D({ type: Number })], dt.prototype, "maxLength", void 0);
Et([D({ type: Number })], dt.prototype, "minLength", void 0);
Et([D({ type: Number })], dt.prototype, "rows", void 0);
Et([D({ type: Number })], dt.prototype, "cols", void 0);
Et([D()], dt.prototype, "name", void 0);
Et([D()], dt.prototype, "placeholder", void 0);
Et([D({
  type: Boolean,
  reflect: !0
})], dt.prototype, "readonly", void 0);
Et([D()], dt.prototype, "resize", void 0);
Et([D({
  type: Boolean,
  reflect: !0
})], dt.prototype, "required", void 0);
Et([D({ type: Boolean })], dt.prototype, "spellcheck", void 0);
Et([D({
  type: Boolean,
  reflect: !0
})], dt.prototype, "monospace", void 0);
Et([D()], dt.prototype, "value", null);
Et([io("#textarea")], dt.prototype, "_textareaEl", void 0);
Et([sl()], dt.prototype, "_value", void 0);
Et([sl()], dt.prototype, "_textareaPointerCursor", void 0);
Et([sl()], dt.prototype, "_shadow", void 0);
dt = Et([Yl("vscode-textarea")], dt);
function Hh() {
  return window._vscodeApi || (typeof acquireVsCodeApi < "u" ? window._vscodeApi = acquireVsCodeApi() : window._vscodeApi = {
    postMessage: (c) => {
    },
    setState: (c) => {
    },
    getState: () => ({})
  }), window._vscodeApi;
}
const cl = {
  UserName: "UserName",
  RepoName: "RepoName",
  Tag: "Tag",
  Recent: "Recent"
};
var Yy = window.location.hostname === "localhost" ? "" : "https://premake-registry-ywxg.onrender.com/", Rh = class {
  /**
  * Search modules from the API
  */
  static async getLibraries(c, f = "", r = 0) {
    const d = new URLSearchParams({
      type: c,
      value: f,
      page: String(r)
    }), s = await fetch(`${Yy}api/UserRepositories/search?${d.toString()}`, { headers: { Accept: "application/json" } });
    if (!s.ok) throw new Error(`Failed to fetch: ${s.status}`);
    return (await s.json()).filter((p) => p.isLib === !0);
  }
  /**
  * Helper to get the default GitHub icon path
  */
  static getIconUri(c) {
    return `https://raw.githubusercontent.com/${c.userName}/${c.repoName}/main/icon.svg`;
  }
};
var $y = /* @__PURE__ */ Ve(((c) => {
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(s, p, z) {
    var x = null;
    if (z !== void 0 && (x = "" + z), p.key !== void 0 && (x = "" + p.key), "key" in p) {
      z = {};
      for (var R in p) R !== "key" && (z[R] = p[R]);
    } else z = p;
    return p = z.ref, {
      $$typeof: f,
      type: s,
      key: x,
      ref: p !== void 0 ? p : null,
      props: z
    };
  }
  c.jsx = d, c.jsxs = d;
})), Vy = /* @__PURE__ */ Ve(((c, f) => {
  f.exports = $y();
})), St = Vy(), Jf = "https://premake.github.io/img/premake-logo.png", Gy = ({ repo: c, isActive: f, onSelect: r }) => {
  const [d, s] = (0, Jt.useState)(Rh.getIconUri(c) || Jf), [p, z] = (0, Jt.useState)("Loading description..."), x = Hh(), R = (A) => {
    A !== !0 && x.postMessage({
      command: "showLibraryDetails",
      repo: c
    });
  }, H = (A) => {
    A.stopPropagation(), x.postMessage({
      command: "installLibrary",
      repo: c
    });
  };
  return (0, Jt.useEffect)(() => {
    const A = new AbortController();
    return (async () => {
      const j = await fetch(c.apiUrl, { signal: A.signal }).catch(() => null);
      if (!j?.ok) {
        A.signal.aborted || z("Could not load description.");
        return;
      }
      z((await j.json().catch(() => ({}))).description || "No description available.");
    })(), () => A.abort();
  }, [c.apiUrl]), /* @__PURE__ */ (0, St.jsxs)("div", {
    className: `library-container ${f ? "selected" : ""}`,
    onClick: () => {
      r(), R(f);
    },
    children: [
      /* @__PURE__ */ (0, St.jsx)("div", {
        className: "icon-container",
        children: /* @__PURE__ */ (0, St.jsx)("img", {
          src: d,
          className: "main-icon",
          alt: c.repoName || "library icon",
          onError: () => d !== Jf && s(Jf)
        })
      }),
      /* @__PURE__ */ (0, St.jsxs)("div", {
        className: "library-info",
        children: [/* @__PURE__ */ (0, St.jsx)("vscode-label", { children: c.repoName || "library" }), /* @__PURE__ */ (0, St.jsx)("vscode-label", {
          className: "library-description",
          children: /* @__PURE__ */ (0, St.jsx)("span", {
            className: "normal",
            children: p
          })
        })]
      }),
      /* @__PURE__ */ (0, St.jsx)("div", {
        className: "install-button",
        children: /* @__PURE__ */ (0, St.jsx)("vscode-button", {
          icon: "cloud-download",
          title: "Settings",
          onClick: H
        })
      })
    ]
  });
}, Ly = [$l, ol`
    :host {
      display: block;
      outline: none;
      position: relative;
    }

    .context-menu-item {
      background-color: var(--vscode-menu-background, #1f1f1f);
      color: var(--vscode-menu-foreground, #cccccc);
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      user-select: none;
      white-space: nowrap;
    }

    .ruler {
      border-bottom: 1px solid var(--vscode-menu-separatorBackground, #454545);
      display: block;
      margin: 0 0 4px;
      padding-top: 4px;
      width: 100%;
    }

    .context-menu-item a {
      align-items: center;
      border-color: transparent;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-menu-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex: 1 1 auto;
      height: 2em;
      margin-left: 4px;
      margin-right: 4px;
      outline: none;
      position: relative;
      text-decoration: inherit;
    }

    :host([selected]) .context-menu-item a {
      background-color: var(--vscode-menu-selectionBackground, #0078d4);
      border-color: var(--vscode-menu-selectionBorder, transparent);
      color: var(--vscode-menu-selectionForeground, #ffffff);
    }

    .label {
      background: none;
      display: flex;
      flex: 1 1 auto;
      font-size: 12px;
      line-height: 1;
      padding: 0 22px;
      text-decoration: none;
    }

    .keybinding {
      display: block;
      flex: 2 1 auto;
      line-height: 1;
      padding: 0 22px;
      text-align: right;
    }
  `], ln = function(c, f, r, d) {
  var s = arguments.length, p = s < 3 ? f : d === null ? d = Object.getOwnPropertyDescriptor(f, r) : d, z;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") p = Reflect.decorate(c, f, r, d);
  else for (var x = c.length - 1; x >= 0; x--) (z = c[x]) && (p = (s < 3 ? z(p) : s > 3 ? z(f, r, p) : z(f, r)) || p);
  return s > 3 && p && Object.defineProperty(f, r, p), p;
}, ql = class extends jl {
  constructor() {
    super(...arguments), this.label = "", this.keybinding = "", this.value = "", this.separator = !1, this.tabindex = 0;
  }
  onItemClick() {
    this.dispatchEvent(new CustomEvent("vsc-click", {
      detail: {
        label: this.label,
        keybinding: this.keybinding,
        value: this.value || this.label,
        separator: this.separator,
        tabindex: this.tabindex
      },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return Ht`
      ${this.separator ? Ht`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          ` : Ht`
            <div class="context-menu-item">
              <a @click=${this.onItemClick}>
                ${this.label ? Ht`<span class="label">${this.label}</span>` : pt}
                ${this.keybinding ? Ht`<span class="keybinding">${this.keybinding}</span>` : pt}
              </a>
            </div>
          `}
    `;
  }
};
ql.styles = Ly;
ln([D({ type: String })], ql.prototype, "label", void 0);
ln([D({ type: String })], ql.prototype, "keybinding", void 0);
ln([D({ type: String })], ql.prototype, "value", void 0);
ln([D({
  type: Boolean,
  reflect: !0
})], ql.prototype, "separator", void 0);
ln([D({ type: Number })], ql.prototype, "tabindex", void 0);
ql = ln([Yl("vscode-context-menu-item")], ql);
var Xy = [$l, ol`
    :host {
      display: block;
      position: relative;
    }

    .context-menu {
      background-color: var(--vscode-menu-background, #1f1f1f);
      border-color: var(--vscode-menu-border, #454545);
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
      color: var(--vscode-menu-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      padding: 4px 0;
      white-space: nowrap;
    }

    .context-menu:focus {
      outline: 0;
    }
  `], Vl = function(c, f, r, d) {
  var s = arguments.length, p = s < 3 ? f : d === null ? d = Object.getOwnPropertyDescriptor(f, r) : d, z;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") p = Reflect.decorate(c, f, r, d);
  else for (var x = c.length - 1; x >= 0; x--) (z = c[x]) && (p = (s < 3 ? z(p) : s > 3 ? z(f, r, p) : z(f, r)) || p);
  return s > 3 && p && Object.defineProperty(f, r, p), p;
}, $e = class extends jl {
  set data(f) {
    this._data = f;
    const r = [];
    f.forEach((d, s) => {
      d.separator || r.push(s);
    }), this._clickableItemIndexes = r;
  }
  get data() {
    return this._data;
  }
  set show(f) {
    this._show = f, this._selectedClickableItemIndex = -1, f && this.updateComplete.then(() => {
      this._wrapperEl && this._wrapperEl.focus(), requestAnimationFrame(() => {
        document.addEventListener("click", this._onClickOutsideBound, { once: !0 });
      });
    });
  }
  get show() {
    return this._show;
  }
  constructor() {
    super(), this.preventClose = !1, this.tabIndex = 0, this._selectedClickableItemIndex = -1, this._show = !1, this._data = [], this._clickableItemIndexes = [], this._onClickOutsideBound = this._onClickOutside.bind(this), this.addEventListener("keydown", this._onKeyDown);
  }
  _onClickOutside(f) {
    f.composedPath().includes(this) || (this.show = !1);
  }
  _onKeyDown(f) {
    const { key: r } = f;
    switch ((r === "ArrowUp" || r === "ArrowDown" || r === "Escape" || r === "Enter") && f.preventDefault(), r) {
      case "ArrowUp":
        this._handleArrowUp();
        break;
      case "ArrowDown":
        this._handleArrowDown();
        break;
      case "Escape":
        this._handleEscape();
        break;
      case "Enter":
        this._handleEnter();
        break;
      default:
    }
  }
  _handleArrowUp() {
    this._selectedClickableItemIndex === 0 ? this._selectedClickableItemIndex = this._clickableItemIndexes.length - 1 : this._selectedClickableItemIndex -= 1;
  }
  _handleArrowDown() {
    this._selectedClickableItemIndex + 1 < this._clickableItemIndexes.length ? this._selectedClickableItemIndex += 1 : this._selectedClickableItemIndex = 0;
  }
  _handleEscape() {
    this.show = !1, document.removeEventListener("click", this._onClickOutsideBound);
  }
  _dispatchSelectEvent(f) {
    const { keybinding: r, label: d, value: s, separator: p, tabindex: z } = f;
    this.dispatchEvent(new CustomEvent("vsc-context-menu-select", { detail: {
      keybinding: r,
      label: d,
      separator: p,
      tabindex: z,
      value: s
    } }));
  }
  _handleEnter() {
    if (this._selectedClickableItemIndex === -1) return;
    const f = this._clickableItemIndexes[this._selectedClickableItemIndex], r = this._wrapperEl.querySelectorAll("vscode-context-menu-item")[f];
    this._dispatchSelectEvent(r), this.preventClose || (this.show = !1, document.removeEventListener("click", this._onClickOutsideBound));
  }
  _onItemClick(f) {
    const r = f.currentTarget;
    this._dispatchSelectEvent(r), this.preventClose || (this.show = !1);
  }
  _onItemMouseOver(f) {
    const r = f.target, d = r.dataset.index ? +r.dataset.index : -1, s = this._clickableItemIndexes.findIndex((p) => p === d);
    s !== -1 && (this._selectedClickableItemIndex = s);
  }
  _onItemMouseOut() {
    this._selectedClickableItemIndex = -1;
  }
  render() {
    if (!this._show) return Ht`${pt}`;
    const f = this._clickableItemIndexes[this._selectedClickableItemIndex];
    return Ht`
      <div class="context-menu" tabindex="0">
        ${this.data ? this.data.map(({ label: r = "", keybinding: d = "", value: s = "", separator: p = !1, tabindex: z = 0 }, x) => Ht`
                <vscode-context-menu-item
                  label=${r}
                  keybinding=${d}
                  value=${s}
                  ?separator=${p}
                  ?selected=${x === f}
                  tabindex=${z}
                  @vsc-click=${this._onItemClick}
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${x}
                ></vscode-context-menu-item>
              `) : Ht`<slot></slot>`}
      </div>
    `;
  }
};
$e.styles = Xy;
Vl([D({
  type: Array,
  attribute: !1
})], $e.prototype, "data", null);
Vl([D({
  type: Boolean,
  reflect: !0,
  attribute: "prevent-close"
})], $e.prototype, "preventClose", void 0);
Vl([D({
  type: Boolean,
  reflect: !0
})], $e.prototype, "show", null);
Vl([D({
  type: Number,
  reflect: !0
})], $e.prototype, "tabIndex", void 0);
Vl([sl()], $e.prototype, "_selectedClickableItemIndex", void 0);
Vl([sl()], $e.prototype, "_show", void 0);
Vl([io(".context-menu")], $e.prototype, "_wrapperEl", void 0);
$e = Vl([Yl("vscode-context-menu")], $e);
var bh = Pf(Bh()), Qy = [$l, ol`
    :host {
      display: inline-block;
      width: 320px;
    }

    .root {
      align-items: center;
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(
        --vscode-settings-textInputBorder,
        var(--vscode-settings-textInputBackground, #3c3c3c)
      );
      border-radius: 4px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: flex;
      max-width: 100%;
      position: relative;
      width: 100%;
    }

    :host([focused]) .root {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    :host([invalid]),
    :host(:invalid) {
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([invalid]) input,
    :host(:invalid) input {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
    }

    ::slotted([slot='content-before']) {
      display: block;
      margin-left: 2px;
    }

    ::slotted([slot='content-after']) {
      display: block;
      margin-right: 2px;
    }

    slot[name='content-before'],
    slot[name='content-after'] {
      align-items: center;
      display: flex;
    }

    input {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border: 0;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, ${bh});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 18px;
      outline: none;
      padding-bottom: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 3px;
      width: 100%;
    }

    input:read-only:not([type='file']) {
      cursor: not-allowed;
    }

    input::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    input[type='file'] {
      line-height: 24px;
      padding-bottom: 0;
      padding-left: 2px;
      padding-top: 0;
    }

    input[type='file']::file-selector-button {
      background-color: var(--vscode-button-background, #0078d4);
      border: 0;
      border-radius: 2px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      font-family: var(--vscode-font-family, ${bh});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }
  `], gt = function(c, f, r, d) {
  var s = arguments.length, p = s < 3 ? f : d === null ? d = Object.getOwnPropertyDescriptor(f, r) : d, z;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") p = Reflect.decorate(c, f, r, d);
  else for (var x = c.length - 1; x >= 0; x--) (z = c[x]) && (p = (s < 3 ? z(p) : s > 3 ? z(f, r, p) : z(f, r)) || p);
  return s > 3 && p && Object.defineProperty(f, r, p), p;
}, st = class extends jl {
  /**
  * Same as the `type` of the native `<input>` element but only a subset of types are supported.
  * The supported ones are: `color`,`date`,`datetime-local`,`email`,`file`,`month`,`number`,`password`,`search`,`tel`,`text`,`time`,`url`,`week`
  */
  set type(f) {
    this._type = [
      "color",
      "date",
      "datetime-local",
      "email",
      "file",
      "month",
      "number",
      "password",
      "search",
      "tel",
      "text",
      "time",
      "url",
      "week"
    ].includes(f) ? f : "text";
  }
  get type() {
    return this._type;
  }
  set value(f) {
    this.type !== "file" && (this._value = f, this._internals.setFormValue(f)), this.updateComplete.then(() => {
      this._setValidityFromInput();
    });
  }
  get value() {
    return this._value;
  }
  /**
  * Lowercase alias to minLength
  */
  set minlength(f) {
    this.minLength = f;
  }
  get minlength() {
    return this.minLength;
  }
  /**
  * Lowercase alias to maxLength
  */
  set maxlength(f) {
    this.maxLength = f;
  }
  get maxlength() {
    return this.maxLength;
  }
  get form() {
    return this._internals.form;
  }
  get validity() {
    return this._internals.validity;
  }
  get validationMessage() {
    return this._internals.validationMessage;
  }
  get willValidate() {
    return this._internals.willValidate;
  }
  /**
  * Check the component's validity state when built-in validation is used.
  * Built-in validation is triggered when any validation-related attribute is set. Validation-related
  * attributes are: `max, maxlength, min, minlength, pattern, required, step`.
  * See this [the MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity) for more details.
  * @returns {boolean}
  */
  checkValidity() {
    return this._setValidityFromInput(), this._internals.checkValidity();
  }
  reportValidity() {
    return this._setValidityFromInput(), this._internals.reportValidity();
  }
  get wrappedElement() {
    return this._inputEl;
  }
  constructor() {
    super(), this.autocomplete = void 0, this.autofocus = !1, this.defaultValue = "", this.disabled = !1, this.focused = !1, this.invalid = !1, this.label = "", this.max = void 0, this.maxLength = void 0, this.min = void 0, this.minLength = void 0, this.multiple = !1, this.name = void 0, this.pattern = void 0, this.placeholder = void 0, this.readonly = !1, this.required = !1, this.step = void 0, this._value = "", this._type = "text", this._internals = this.attachInternals();
  }
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => {
      this._inputEl.checkValidity(), this._setValidityFromInput(), this._internals.setFormValue(this._inputEl.value);
    });
  }
  attributeChangedCallback(f, r, d) {
    super.attributeChangedCallback(f, r, d), [
      "max",
      "maxlength",
      "min",
      "minlength",
      "pattern",
      "required",
      "step"
    ].includes(f) && this.updateComplete.then(() => {
      this._setValidityFromInput();
    });
  }
  /** @internal */
  formResetCallback() {
    this.value = this.defaultValue, this.requestUpdate();
  }
  /** @internal */
  formStateRestoreCallback(f, r) {
    this.value = f;
  }
  _dataChanged() {
    if (this._value = this._inputEl.value, this.type === "file" && this._inputEl.files) for (const f of this._inputEl.files) this._internals.setFormValue(f);
    else this._internals.setFormValue(this._inputEl.value);
  }
  _setValidityFromInput() {
    this._inputEl && this._internals.setValidity(this._inputEl.validity, this._inputEl.validationMessage, this._inputEl);
  }
  _onInput() {
    this._dataChanged(), this._setValidityFromInput();
  }
  _onChange() {
    this._dataChanged(), this._setValidityFromInput(), this.dispatchEvent(new Event("change"));
  }
  _onFocus() {
    this.focused = !0;
  }
  _onBlur() {
    this.focused = !1;
  }
  _onKeyDown(f) {
    f.key === "Enter" && this._internals.form && this._internals.form?.requestSubmit();
  }
  render() {
    return Ht`
      <div class="root">
        <slot name="content-before"></slot>
        <input
          id="input"
          type=${this.type}
          ?autofocus=${this.autofocus}
          autocomplete=${Bt(this.autocomplete)}
          aria-label=${this.label}
          ?disabled=${this.disabled}
          max=${Bt(this.max)}
          maxlength=${Bt(this.maxLength)}
          min=${Bt(this.min)}
          minlength=${Bt(this.minLength)}
          ?multiple=${this.multiple}
          name=${Bt(this.name)}
          pattern=${Bt(this.pattern)}
          placeholder=${Bt(this.placeholder)}
          ?readonly=${this.readonly}
          ?required=${this.required}
          step=${Bt(this.step)}
          .value=${this._value}
          @blur=${this._onBlur}
          @change=${this._onChange}
          @focus=${this._onFocus}
          @input=${this._onInput}
          @keydown=${this._onKeyDown}
        />
        <slot name="content-after"></slot>
      </div>
    `;
  }
};
st.styles = Qy;
st.formAssociated = !0;
st.shadowRootOptions = {
  ...ra.shadowRootOptions,
  delegatesFocus: !0
};
gt([D()], st.prototype, "autocomplete", void 0);
gt([D({
  type: Boolean,
  reflect: !0
})], st.prototype, "autofocus", void 0);
gt([D({ attribute: "default-value" })], st.prototype, "defaultValue", void 0);
gt([D({
  type: Boolean,
  reflect: !0
})], st.prototype, "disabled", void 0);
gt([D({
  type: Boolean,
  reflect: !0
})], st.prototype, "focused", void 0);
gt([D({
  type: Boolean,
  reflect: !0
})], st.prototype, "invalid", void 0);
gt([D({ attribute: !1 })], st.prototype, "label", void 0);
gt([D({ type: Number })], st.prototype, "max", void 0);
gt([D({ type: Number })], st.prototype, "maxLength", void 0);
gt([D({ type: Number })], st.prototype, "min", void 0);
gt([D({ type: Number })], st.prototype, "minLength", void 0);
gt([D({
  type: Boolean,
  reflect: !0
})], st.prototype, "multiple", void 0);
gt([D({ reflect: !0 })], st.prototype, "name", void 0);
gt([D()], st.prototype, "pattern", void 0);
gt([D()], st.prototype, "placeholder", void 0);
gt([D({
  type: Boolean,
  reflect: !0
})], st.prototype, "readonly", void 0);
gt([D({
  type: Boolean,
  reflect: !0
})], st.prototype, "required", void 0);
gt([D({ type: Number })], st.prototype, "step", void 0);
gt([D({ reflect: !0 })], st.prototype, "type", null);
gt([D()], st.prototype, "value", null);
gt([io("#input")], st.prototype, "_inputEl", void 0);
gt([sl()], st.prototype, "_value", void 0);
gt([sl()], st.prototype, "_type", void 0);
st = gt([Yl("vscode-textfield")], st);
var Zy = ({ onSearch: c, onEnter: f, onFilterChange: r, currentFilter: d, searchQuery: s }) => {
  const [p, z] = (0, Jt.useState)(!1), x = (0, Jt.useRef)(null), R = (H) => {
    H.key === "Enter" && f?.();
  };
  return (0, Jt.useEffect)(() => {
    if (x.current) {
      x.current.data = [
        {
          label: "Search by Repo",
          value: cl.RepoName,
          checked: d === cl.RepoName
        },
        {
          label: "Search by User",
          value: cl.UserName,
          checked: d === cl.UserName
        },
        {
          label: "Search by Tag",
          value: cl.Tag,
          checked: d === cl.Tag
        },
        { separator: !0 },
        {
          label: "Recent",
          value: cl.Recent,
          checked: d === cl.Recent
        }
      ];
      const H = (A) => {
        r(A.detail.value), z(!1);
      };
      return x.current.addEventListener("vsc-context-menu-select", H), () => x.current?.removeEventListener("vsc-context-menu-select", H);
    }
  }, [r, d]), /* @__PURE__ */ (0, St.jsx)("div", {
    className: "top-bar-container",
    children: /* @__PURE__ */ (0, St.jsxs)("vscode-textfield", {
      value: s,
      placeholder: `Search ${d}...`,
      onInput: (H) => c(H.target.value),
      onKeyDown: R,
      children: [/* @__PURE__ */ (0, St.jsx)("vscode-icon", {
        slot: "content-after",
        name: "clear-all",
        title: "Clear",
        "action-icon": !0,
        onClick: () => c("")
      }), /* @__PURE__ */ (0, St.jsxs)("div", {
        className: "filter-wrapper",
        slot: "content-after",
        children: [/* @__PURE__ */ (0, St.jsx)("vscode-icon", {
          name: "filter",
          title: "Filter Type",
          "action-icon": !0,
          onClick: () => z(!p)
        }), /* @__PURE__ */ (0, St.jsx)("vscode-context-menu", {
          ref: x,
          show: p,
          onBlur: () => z(!1)
        })]
      })]
    })
  });
};
function wy() {
  const [c, f] = (0, Jt.useState)([]), [r, d] = (0, Jt.useState)(""), [s, p] = (0, Jt.useState)(cl.Recent), [z, x] = (0, Jt.useState)(!1), R = Hh(), H = (0, Jt.useCallback)(async (F, qt) => {
    x(!0);
    try {
      f(await Rh.getLibraries(qt, F, 0));
    } catch {
    } finally {
      x(!1);
    }
  }, []), A = (0, Jt.useCallback)((F, qt) => {
    H(F, qt);
  }, [H]), q = (F, qt = !1) => {
    d(F), qt && A(F, s);
  }, j = (F) => {
    R.postMessage({
      command: "closeModuleDetails",
      repo: F
    });
  }, [bt, _t] = (0, Jt.useState)(null);
  return (0, Jt.useEffect)(() => {
    const F = setTimeout(() => {
      A(r, s);
    }, 300);
    return () => clearTimeout(F);
  }, [
    r,
    s,
    A
  ]), /* @__PURE__ */ (0, St.jsxs)("div", {
    className: "main-container",
    children: [/* @__PURE__ */ (0, St.jsx)(Zy, {
      searchQuery: r,
      currentFilter: s,
      onFilterChange: p,
      onSearch: (F) => q(F, !1),
      onEnter: () => A(r, s)
    }), /* @__PURE__ */ (0, St.jsx)("div", {
      className: "content",
      children: z ? /* @__PURE__ */ (0, St.jsx)("vscode-progress-ring", {}) : /* @__PURE__ */ (0, St.jsx)("div", {
        className: "library-list",
        children: c.map((F) => /* @__PURE__ */ (0, St.jsx)(Gy, {
          repo: F,
          onSelect: () => {
            bt !== F.repoName ? _t(F.repoName) : (_t(null), j(F));
          },
          isActive: bt == F.repoName
        }, `${F.userName}/${F.repoName}`))
      })
    })]
  });
}
var _h = document.getElementById("root");
_h && (0, uy.createRoot)(_h).render(/* @__PURE__ */ (0, St.jsx)(Jt.StrictMode, { children: /* @__PURE__ */ (0, St.jsx)(wy, {}) }));
