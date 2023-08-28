import { Utilities as C } from "./utilities.js";
function en(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const M = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, tn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Et = () => {
}, nn = /^on[^a-z]/, rn = (e) => nn.test(e), D = Object.assign, sn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, on = Object.prototype.hasOwnProperty, m = (e, t) => on.call(e, t), h = Array.isArray, X = (e) => ye(e) === "[object Map]", cn = (e) => ye(e) === "[object Set]", v = (e) => typeof e == "function", T = (e) => typeof e == "string", Ke = (e) => typeof e == "symbol", V = (e) => e !== null && typeof e == "object", ln = (e) => V(e) && v(e.then) && v(e.catch), an = Object.prototype.toString, ye = (e) => an.call(e), wt = (e) => ye(e).slice(8, -1), un = (e) => ye(e) === "[object Object]", ze = (e) => T(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pn = fn(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), ie = (e, t) => !Object.is(e, t), dn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, hn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ze = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ke;
const Re = () => ke || (ke = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ue(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = T(s) ? En(s) : Ue(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if (T(e))
      return e;
    if (V(e))
      return e;
  }
}
const gn = /;(?![^(]*\))/g, _n = /:([^]+)/, mn = /\/\*[^]*?\*\//g;
function En(e) {
  const t = {};
  return e.replace(mn, "").split(gn).forEach((n) => {
    if (n) {
      const s = n.split(_n);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function He(e) {
  let t = "";
  if (T(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const s = He(e[n]);
      s && (t += s + " ");
    }
  else if (V(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function et(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Nt;
function wn(e, t = Nt) {
  t && t.active && t.effects.push(e);
}
function Nn() {
  return Nt;
}
const ce = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, bt = (e) => (e.w & U) > 0, vt = (e) => (e.n & U) > 0, bn = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= U;
}, vn = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      bt(r) && !vt(r) ? r.delete(e) : t[n++] = r, r.w &= ~U, r.n &= ~U;
    }
    t.length = n;
  }
}, $e = /* @__PURE__ */ new WeakMap();
let ne = 0, U = 1;
const Te = 30;
let S;
const B = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ce = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class On {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, wn(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = S, n = z;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = S, S = this, z = !0, U = 1 << ++ne, ne <= Te ? bn(this) : tt(this), this.fn();
    } finally {
      ne <= Te && vn(this), U = 1 << --ne, S = this.parent, z = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    S === this ? this.deferStop = !0 : this.active && (tt(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function tt(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let z = !0;
const Ot = [];
function St() {
  Ot.push(z), z = !1;
}
function yt() {
  const e = Ot.pop();
  z = e === void 0 ? !0 : e;
}
function x(e, t, n) {
  if (z && S) {
    let s = $e.get(e);
    s || $e.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = ce());
    const o = process.env.NODE_ENV !== "production" ? { effect: S, target: e, type: t, key: n } : void 0;
    Pe(r, o);
  }
}
function Pe(e, t) {
  let n = !1;
  ne <= Te ? vt(e) || (e.n |= U, n = !bt(e)) : n = !e.has(S), n && (e.add(S), S.deps.push(e), process.env.NODE_ENV !== "production" && S.onTrack && S.onTrack(
    D(
      {
        effect: S
      },
      t
    )
  ));
}
function H(e, t, n, s, r, o) {
  const i = $e.get(e);
  if (!i)
    return;
  let a = [];
  if (t === "clear")
    a = [...i.values()];
  else if (n === "length" && h(e)) {
    const f = Number(s);
    i.forEach((u, c) => {
      (c === "length" || c >= f) && a.push(u);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), t) {
      case "add":
        h(e) ? ze(n) && a.push(i.get("length")) : (a.push(i.get(B)), X(e) && a.push(i.get(Ce)));
        break;
      case "delete":
        h(e) || (a.push(i.get(B)), X(e) && a.push(i.get(Ce)));
        break;
      case "set":
        X(e) && a.push(i.get(B));
        break;
    }
  const l = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: s, oldValue: r, oldTarget: o } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? Y(a[0], l) : Y(a[0]));
  else {
    const f = [];
    for (const u of a)
      u && f.push(...u);
    process.env.NODE_ENV !== "production" ? Y(ce(f), l) : Y(ce(f));
  }
}
function Y(e, t) {
  const n = h(e) ? e : [...e];
  for (const s of n)
    s.computed && nt(s, t);
  for (const s of n)
    s.computed || nt(s, t);
}
function nt(e, t) {
  (e !== S || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(D({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Sn = /* @__PURE__ */ en("__proto__,__v_isRef,__isVue"), Vt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ke)
), yn = /* @__PURE__ */ We(), Vn = /* @__PURE__ */ We(!0), xn = /* @__PURE__ */ We(!0, !0), rt = /* @__PURE__ */ Dn();
function Dn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = d(this);
      for (let o = 0, i = this.length; o < i; o++)
        x(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(d)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      St();
      const s = d(this)[t].apply(this, n);
      return yt(), s;
    };
  }), e;
}
function In(e) {
  const t = d(this);
  return x(t, "has", e), t.hasOwnProperty(e);
}
function We(e = !1, t = !1) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? $t : Rt : t ? Ln : It).get(s))
      return s;
    const i = h(s);
    if (!e) {
      if (i && m(rt, r))
        return Reflect.get(rt, r, o);
      if (r === "hasOwnProperty")
        return In;
    }
    const a = Reflect.get(s, r, o);
    return (Ke(r) ? Vt.has(r) : Sn(r)) || (e || x(s, "get", r), t) ? a : y(a) ? i && ze(r) ? a : a.value : V(a) ? e ? Ct(a) : Tt(a) : a;
  };
}
const Rn = /* @__PURE__ */ $n();
function $n(e = !1) {
  return function(n, s, r, o) {
    let i = n[s];
    if (W(i) && y(i) && !y(r))
      return !1;
    if (!e && (!Ne(r) && !W(r) && (i = d(i), r = d(r)), !h(n) && y(i) && !y(r)))
      return i.value = r, !0;
    const a = h(n) && ze(s) ? Number(s) < n.length : m(n, s), l = Reflect.set(n, s, r, o);
    return n === d(o) && (a ? ie(r, i) && H(n, "set", s, r, i) : H(n, "add", s, r)), l;
  };
}
function Tn(e, t) {
  const n = m(e, t), s = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && H(e, "delete", t, void 0, s), r;
}
function Cn(e, t) {
  const n = Reflect.has(e, t);
  return (!Ke(t) || !Vt.has(t)) && x(e, "has", t), n;
}
function Pn(e) {
  return x(e, "iterate", h(e) ? "length" : B), Reflect.ownKeys(e);
}
const Mn = {
  get: yn,
  set: Rn,
  deleteProperty: Tn,
  has: Cn,
  ownKeys: Pn
}, xt = {
  get: Vn,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && et(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && et(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, Fn = /* @__PURE__ */ D(
  {},
  xt,
  {
    get: xn
  }
), Be = (e) => e, Ve = (e) => Reflect.getPrototypeOf(e);
function fe(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = d(e), o = d(t);
  n || (t !== o && x(r, "get", t), x(r, "get", o));
  const { has: i } = Ve(r), a = s ? Be : n ? qe : le;
  if (i.call(r, t))
    return a(e.get(t));
  if (i.call(r, o))
    return a(e.get(o));
  e !== r && e.get(t);
}
function pe(e, t = !1) {
  const n = this.__v_raw, s = d(n), r = d(e);
  return t || (e !== r && x(s, "has", e), x(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function de(e, t = !1) {
  return e = e.__v_raw, !t && x(d(e), "iterate", B), Reflect.get(e, "size", e);
}
function st(e) {
  e = d(e);
  const t = d(this);
  return Ve(t).has.call(t, e) || (t.add(e), H(t, "add", e, e)), this;
}
function ot(e, t) {
  t = d(t);
  const n = d(this), { has: s, get: r } = Ve(n);
  let o = s.call(n, e);
  o ? process.env.NODE_ENV !== "production" && Dt(n, s, e) : (e = d(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? ie(t, i) && H(n, "set", e, t, i) : H(n, "add", e, t), this;
}
function it(e) {
  const t = d(this), { has: n, get: s } = Ve(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Dt(t, n, e) : (e = d(e), r = n.call(t, e));
  const o = s ? s.call(t, e) : void 0, i = t.delete(e);
  return r && H(t, "delete", e, void 0, o), i;
}
function ct() {
  const e = d(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? X(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && H(e, "clear", void 0, void 0, n), s;
}
function he(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, a = d(i), l = t ? Be : e ? qe : le;
    return !e && x(a, "iterate", B), i.forEach((f, u) => s.call(r, l(f), l(u), o));
  };
}
function ge(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = d(r), i = X(o), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, f = r[e](...s), u = n ? Be : t ? qe : le;
    return !t && x(
      o,
      "iterate",
      l ? Ce : B
    ), {
      // iterator protocol
      next() {
        const { value: c, done: p } = f.next();
        return p ? { value: c, done: p } : {
          value: a ? [u(c[0]), u(c[1])] : u(c),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function F(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${pn(e)} operation ${n}failed: target is readonly.`,
        d(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function An() {
  const e = {
    get(o) {
      return fe(this, o);
    },
    get size() {
      return de(this);
    },
    has: pe,
    add: st,
    set: ot,
    delete: it,
    clear: ct,
    forEach: he(!1, !1)
  }, t = {
    get(o) {
      return fe(this, o, !1, !0);
    },
    get size() {
      return de(this);
    },
    has: pe,
    add: st,
    set: ot,
    delete: it,
    clear: ct,
    forEach: he(!1, !0)
  }, n = {
    get(o) {
      return fe(this, o, !0);
    },
    get size() {
      return de(this, !0);
    },
    has(o) {
      return pe.call(this, o, !0);
    },
    add: F("add"),
    set: F("set"),
    delete: F("delete"),
    clear: F("clear"),
    forEach: he(!0, !1)
  }, s = {
    get(o) {
      return fe(this, o, !0, !0);
    },
    get size() {
      return de(this, !0);
    },
    has(o) {
      return pe.call(this, o, !0);
    },
    add: F("add"),
    set: F("set"),
    delete: F("delete"),
    clear: F("clear"),
    forEach: he(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = ge(
      o,
      !1,
      !1
    ), n[o] = ge(
      o,
      !0,
      !1
    ), t[o] = ge(
      o,
      !1,
      !0
    ), s[o] = ge(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  jn,
  Kn,
  zn,
  Un
] = /* @__PURE__ */ An();
function Le(e, t) {
  const n = t ? e ? Un : zn : e ? Kn : jn;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    m(n, r) && r in s ? n : s,
    r,
    o
  );
}
const Hn = {
  get: /* @__PURE__ */ Le(!1, !1)
}, Wn = {
  get: /* @__PURE__ */ Le(!0, !1)
}, Bn = {
  get: /* @__PURE__ */ Le(!0, !0)
};
function Dt(e, t, n) {
  const s = d(n);
  if (s !== n && t.call(e, s)) {
    const r = wt(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const It = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap();
function Jn(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function qn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jn(wt(e));
}
function Tt(e) {
  return W(e) ? e : Je(
    e,
    !1,
    Mn,
    Hn,
    It
  );
}
function Ct(e) {
  return Je(
    e,
    !0,
    xt,
    Wn,
    Rt
  );
}
function _e(e) {
  return Je(
    e,
    !0,
    Fn,
    Bn,
    $t
  );
}
function Je(e, t, n, s, r) {
  if (!V(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = qn(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, a), a;
}
function L(e) {
  return W(e) ? L(e.__v_raw) : !!(e && e.__v_isReactive);
}
function W(e) {
  return !!(e && e.__v_isReadonly);
}
function Ne(e) {
  return !!(e && e.__v_isShallow);
}
function Me(e) {
  return L(e) || W(e);
}
function d(e) {
  const t = e && e.__v_raw;
  return t ? d(t) : e;
}
function Gn(e) {
  return hn(e, "__v_skip", !0), e;
}
const le = (e) => V(e) ? Tt(e) : e, qe = (e) => V(e) ? Ct(e) : e;
function Yn(e) {
  z && S && (e = d(e), process.env.NODE_ENV !== "production" ? Pe(e.dep || (e.dep = ce()), {
    target: e,
    type: "get",
    key: "value"
  }) : Pe(e.dep || (e.dep = ce())));
}
function Qn(e, t) {
  e = d(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? Y(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Y(n));
}
function y(e) {
  return !!(e && e.__v_isRef === !0);
}
function Xn(e) {
  return Zn(e, !1);
}
function Zn(e, t) {
  return y(e) ? e : new kn(e, t);
}
class kn {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : d(t), this._value = n ? t : le(t);
  }
  get value() {
    return Yn(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ne(t) || W(t);
    t = n ? t : d(t), ie(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : le(t), Qn(this, t));
  }
}
function er(e) {
  return y(e) ? e.value : e;
}
const tr = {
  get: (e, t, n) => er(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return y(r) && !y(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function nr(e) {
  return L(e) ? e : new Proxy(e, tr);
}
const J = [];
function rr(e) {
  J.push(e);
}
function sr() {
  J.pop();
}
function b(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  St();
  const n = J.length ? J[J.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = or();
  if (s)
    q(
      s,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${Qt(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...ir(r)), console.warn(...o);
  }
  yt();
}
function or() {
  let e = J[J.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function ir(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...cr(n));
  }), t;
}
function cr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Qt(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...lr(e.props), o] : [r + o];
}
function lr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Pt(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Pt(e, t, n) {
  return T(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : y(t) ? (t = Pt(e, d(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : v(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = d(t), n ? t : [`${e}=`, t]);
}
const Mt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function q(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    Ft(o, t, n);
  }
  return r;
}
function Fe(e, t, n, s) {
  if (v(e)) {
    const o = q(e, t, n, s);
    return o && ln(o) && o.catch((i) => {
      Ft(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(Fe(e[o], t, n, s));
  return r;
}
function Ft(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, a = process.env.NODE_ENV !== "production" ? Mt[n] : n;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let u = 0; u < f.length; u++)
          if (f[u](e, i, a) === !1)
            return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      q(
        l,
        null,
        10,
        [e, i, a]
      );
      return;
    }
  }
  ar(e, n, r, s);
}
function ar(e, t, n, s = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Mt[t];
    if (n && rr(n), b(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && sr(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let be = !1, Ae = !1;
const R = [];
let j = 0;
const Z = [];
let P = null, A = 0;
const At = /* @__PURE__ */ Promise.resolve();
let Ge = null;
const ur = 100;
function fr(e) {
  const t = Ge || At;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pr(e) {
  let t = j + 1, n = R.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    ae(R[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Ye(e) {
  (!R.length || !R.includes(
    e,
    be && e.allowRecurse ? j + 1 : j
  )) && (e.id == null ? R.push(e) : R.splice(pr(e.id), 0, e), jt());
}
function jt() {
  !be && !Ae && (Ae = !0, Ge = At.then(zt));
}
function Kt(e) {
  h(e) ? Z.push(...e) : (!P || !P.includes(
    e,
    e.allowRecurse ? A + 1 : A
  )) && Z.push(e), jt();
}
function dr(e) {
  if (Z.length) {
    const t = [...new Set(Z)];
    if (Z.length = 0, P) {
      P.push(...t);
      return;
    }
    for (P = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort((n, s) => ae(n) - ae(s)), A = 0; A < P.length; A++)
      process.env.NODE_ENV !== "production" && Ut(e, P[A]) || P[A]();
    P = null, A = 0;
  }
}
const ae = (e) => e.id == null ? 1 / 0 : e.id, hr = (e, t) => {
  const n = ae(e) - ae(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function zt(e) {
  Ae = !1, be = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), R.sort(hr);
  const t = process.env.NODE_ENV !== "production" ? (n) => Ut(e, n) : Et;
  try {
    for (j = 0; j < R.length; j++) {
      const n = R[j];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        q(n, null, 14);
      }
    }
  } finally {
    j = 0, R.length = 0, dr(e), be = !1, Ge = null, (R.length || Z.length) && zt(e);
  }
}
function Ut(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > ur) {
      const s = t.ownerInstance, r = s && Yt(s.type);
      return b(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const ee = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Re().__VUE_HMR_RUNTIME__ = {
  createRecord: xe(gr),
  rerender: xe(_r),
  reload: xe(mr)
});
const ve = /* @__PURE__ */ new Map();
function gr(e, t) {
  return ve.has(e) ? !1 : (ve.set(e, {
    initialDef: se(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function se(e) {
  return Xt(e) ? e.__vccOpts : e;
}
function _r(e, t) {
  const n = ve.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, se(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function mr(e, t) {
  const n = ve.get(e);
  if (!n)
    return;
  t = se(t), lt(n.initialDef, t);
  const s = [...n.instances];
  for (const r of s) {
    const o = se(r.type);
    ee.has(o) || (o !== n.initialDef && lt(o, t), ee.add(o)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (ee.add(o), r.ceReload(t.styles), ee.delete(o)) : r.parent ? Ye(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Kt(() => {
    for (const r of s)
      ee.delete(
        se(r.type)
      );
  });
}
function lt(e, t) {
  D(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function xe(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let K = null, Er = null;
const wr = (e) => e.__isSuspense;
function Nr(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : Kt(e);
}
const me = {};
function br(e, t, n) {
  return process.env.NODE_ENV !== "production" && !v(t) && b(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ht(e, t, n);
}
function Ht(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = M) {
  var a;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && b(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && b(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (_) => {
    b(
      "Invalid watch source: ",
      _,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = Nn() === ((a = k) == null ? void 0 : a.scope) ? k : null;
  let u, c = !1, p = !1;
  if (y(e) ? (u = () => e.value, c = Ne(e)) : L(e) ? (u = () => e, s = !0) : h(e) ? (p = !0, c = e.some((_) => L(_) || Ne(_)), u = () => e.map((_) => {
    if (y(_))
      return _.value;
    if (L(_))
      return Q(_);
    if (v(_))
      return q(_, f, 2);
    process.env.NODE_ENV !== "production" && l(_);
  })) : v(e) ? t ? u = () => q(e, f, 2) : u = () => {
    if (!(f && f.isUnmounted))
      return g && g(), Fe(
        e,
        f,
        3,
        [E]
      );
  } : (u = Et, process.env.NODE_ENV !== "production" && l(e)), t && s) {
    const _ = u;
    u = () => Q(_());
  }
  let g, E = (_) => {
    g = I.onStop = () => {
      q(_, f, 4);
    };
  }, w = p ? new Array(e.length).fill(me) : me;
  const N = () => {
    if (I.active)
      if (t) {
        const _ = I.run();
        (s || c || (p ? _.some(
          (Zt, kt) => ie(Zt, w[kt])
        ) : ie(_, w))) && (g && g(), Fe(t, f, 3, [
          _,
          // pass undefined as the old value when it's changed for the first time
          w === me ? void 0 : p && w[0] === me ? [] : w,
          E
        ]), w = _);
      } else
        I.run();
  };
  N.allowRecurse = !!t;
  let ue;
  r === "sync" ? ue = N : r === "post" ? ue = () => dt(N, f && f.suspense) : (N.pre = !0, f && (N.id = f.uid), ue = () => Ye(N));
  const I = new On(u, ue);
  return process.env.NODE_ENV !== "production" && (I.onTrack = o, I.onTrigger = i), t ? n ? N() : w = I.run() : r === "post" ? dt(
    I.run.bind(I),
    f && f.suspense
  ) : I.run(), () => {
    I.stop(), f && f.scope && sn(f.scope.effects, I);
  };
}
function vr(e, t, n) {
  const s = this.proxy, r = T(e) ? e.includes(".") ? Or(s, e) : () => s[e] : e.bind(s, s);
  let o;
  v(t) ? o = t : (o = t.handler, n = t);
  const i = k;
  gt(this);
  const a = Ht(r, o.bind(s), n);
  return i ? gt(i) : Jr(), a;
}
function Or(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function Q(e, t) {
  if (!V(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), y(e))
    Q(e.value, t);
  else if (h(e))
    for (let n = 0; n < e.length; n++)
      Q(e[n], t);
  else if (cn(e) || X(e))
    e.forEach((n) => {
      Q(n, t);
    });
  else if (un(e))
    for (const n in e)
      Q(e[n], t);
  return e;
}
function Sr(e, t) {
  return process.env.NODE_ENV !== "production" && b("withDirectives can only be used inside render functions."), e;
}
function yr(e, t) {
  return v(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => D({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Vr = Symbol.for("v-ndc"), je = (e) => e ? qr(e) ? Gr(e) || e.proxy : je(e.parent) : null, oe = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ D(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? _e(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? _e(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? _e(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? _e(e.refs) : e.refs,
    $parent: (e) => je(e.parent),
    $root: (e) => je(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ir(e),
    $forceUpdate: (e) => e.f || (e.f = () => Ye(e.update)),
    $nextTick: (e) => e.n || (e.n = fr.bind(e.proxy)),
    $watch: (e) => vr.bind(e)
  })
), xr = (e) => e === "_" || e === "$", De = (e, t) => e !== M && !e.__isScriptSetup && m(e, t), Dr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: a, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (De(s, t))
          return i[t] = 1, s[t];
        if (r !== M && m(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && m(f, t)
        )
          return i[t] = 3, o[t];
        if (n !== M && m(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const u = oe[t];
    let c, p;
    if (u)
      return t === "$attrs" ? (x(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && x(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== M && m(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = l.config.globalProperties, m(p, t)
    )
      return p[t];
    process.env.NODE_ENV !== "production" && K && (!T(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== M && xr(t[0]) && m(r, t) ? b(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === K && b(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return De(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && m(r, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== M && m(s, t) ? (s[t] = n, !0) : m(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let a;
    return !!n[i] || e !== M && m(e, i) || De(t, i) || (a = o[0]) && m(a, i) || m(s, i) || m(oe, i) || m(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Dr.ownKeys = (e) => (b(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function at(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ir(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !r.length && !n && !s ? l = t : (l = {}, r.length && r.forEach(
    (f) => Oe(l, f, i, !0)
  ), Oe(l, t, i)), V(t) && o.set(t, l), l;
}
function Oe(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Oe(e, o, n, !0), r && r.forEach(
    (i) => Oe(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && b(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Rr[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Rr = {
  data: ut,
  props: pt,
  emits: pt,
  // objects
  methods: re,
  computed: re,
  // lifecycle
  beforeCreate: O,
  created: O,
  beforeMount: O,
  mounted: O,
  beforeUpdate: O,
  updated: O,
  beforeDestroy: O,
  beforeUnmount: O,
  destroyed: O,
  unmounted: O,
  activated: O,
  deactivated: O,
  errorCaptured: O,
  serverPrefetch: O,
  // assets
  components: re,
  directives: re,
  // watch
  watch: Tr,
  // provide / inject
  provide: ut,
  inject: $r
};
function ut(e, t) {
  return t ? e ? function() {
    return D(
      v(e) ? e.call(this, this) : e,
      v(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $r(e, t) {
  return re(ft(e), ft(t));
}
function ft(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function O(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function re(e, t) {
  return e ? D(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function pt(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : D(
    /* @__PURE__ */ Object.create(null),
    at(e),
    at(t ?? {})
  ) : t;
}
function Tr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = D(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = O(e[s], t[s]);
  return n;
}
const dt = Nr, Cr = (e) => e.__isTeleport, Wt = Symbol.for("v-fgt"), Pr = Symbol.for("v-txt"), Mr = Symbol.for("v-cmt"), Ee = [];
let $ = null;
function Fr(e = !1) {
  Ee.push($ = e ? null : []);
}
function Ar() {
  Ee.pop(), $ = Ee[Ee.length - 1] || null;
}
function jr(e) {
  return e.dynamicChildren = $ || tn, Ar(), $ && $.push(e), e;
}
function Kr(e, t, n, s, r, o) {
  return jr(
    Jt(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
      /* isBlock */
    )
  );
}
function zr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Ur = (...e) => qt(
  ...e
), Bt = "__vInternal", Lt = ({ key: e }) => e ?? null, we = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? T(e) || y(e) || v(e) ? { i: K, r: e, k: t, f: !!n } : e : null);
function Jt(e, t = null, n = null, s = 0, r = null, o = e === Wt ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Lt(t),
    ref: t && we(t),
    scopeId: Er,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: K
  };
  return a ? (Qe(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= T(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && b("VNode created with invalid key (NaN). VNode type:", l.type), // avoid a block node from tracking itself
  !i && // has current parent block
  $ && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && $.push(l), l;
}
const Hr = process.env.NODE_ENV !== "production" ? Ur : qt;
function qt(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Vr) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = Mr), zr(e)) {
    const a = Se(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Qe(a, n), !o && $ && (a.shapeFlag & 6 ? $[$.indexOf(e)] = a : $.push(a)), a.patchFlag |= -2, a;
  }
  if (Xt(e) && (e = e.__vccOpts), t) {
    t = Wr(t);
    let { class: a, style: l } = t;
    a && !T(a) && (t.class = He(a)), V(l) && (Me(l) && !h(l) && (l = D({}, l)), t.style = Ue(l));
  }
  const i = T(e) ? 1 : wr(e) ? 128 : Cr(e) ? 64 : V(e) ? 4 : v(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Me(e) && (e = d(e), b(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Jt(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function Wr(e) {
  return e ? Me(e) || Bt in e ? D({}, e) : e : null;
}
function Se(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, a = t ? Lr(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Lt(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? h(r) ? r.concat(we(t)) : [r, we(t)] : we(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && h(i) ? i.map(Gt) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Wt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Se(e.ssContent),
    ssFallback: e.ssFallback && Se(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Gt(e) {
  const t = Se(e);
  return h(e.children) && (t.children = e.children.map(Gt)), t;
}
function Br(e = " ", t = 0) {
  return Hr(Pr, null, e, t);
}
function Qe(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Qe(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Bt in t) ? t._ctx = K : r === 3 && K && (K.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    v(t) ? (t = { default: t, _ctx: K }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Br(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Lr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = He([t.class, s.class]));
      else if (r === "style")
        t.style = Ue([t.style, s.style]);
      else if (rn(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(h(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
let k = null, Xe, G, ht = "__VUE_INSTANCE_SETTERS__";
(G = Re()[ht]) || (G = Re()[ht] = []), G.push((e) => k = e), Xe = (e) => {
  G.length > 1 ? G.forEach((t) => t(e)) : G[0](e);
};
const gt = (e) => {
  Xe(e), e.scope.on();
}, Jr = () => {
  k && k.scope.off(), Xe(null);
};
function qr(e) {
  return e.vnode.shapeFlag & 4;
}
function Gr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(nr(Gn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in oe)
          return oe[n](e);
      },
      has(t, n) {
        return n in t || n in oe;
      }
    }));
}
const Yr = /(?:^|[-_])(\w)/g, Qr = (e) => e.replace(Yr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Yt(e, t = !0) {
  return v(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Qt(e, t, n = !1) {
  let s = Yt(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Qr(s) : n ? "App" : "Anonymous";
}
function Xt(e) {
  return v(e) && "__vccOpts" in e;
}
function Ie(e) {
  return !!(e && e.__v_isShallow);
}
function Xr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, s = { style: "color:#9d288c" }, r = {
    header(c) {
      return V(c) ? c.__isVue ? ["div", e, "VueInstance"] : y(c) ? [
        "div",
        {},
        ["span", e, u(c)],
        "<",
        a(c.value),
        ">"
      ] : L(c) ? [
        "div",
        {},
        ["span", e, Ie(c) ? "ShallowReactive" : "Reactive"],
        "<",
        a(c),
        `>${W(c) ? " (readonly)" : ""}`
      ] : W(c) ? [
        "div",
        {},
        ["span", e, Ie(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...o(c.$)
        ];
    }
  };
  function o(c) {
    const p = [];
    c.type.props && c.props && p.push(i("props", d(c.props))), c.setupState !== M && p.push(i("setup", c.setupState)), c.data !== M && p.push(i("data", d(c.data)));
    const g = l(c, "computed");
    g && p.push(i("computed", g));
    const E = l(c, "inject");
    return E && p.push(i("injected", E)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), p;
  }
  function i(c, p) {
    return p = D({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((g) => [
          "div",
          {},
          ["span", s, g + ": "],
          a(p[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, p = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : V(c) ? ["object", { object: p ? d(c) : c }] : ["span", n, String(c)];
  }
  function l(c, p) {
    const g = c.type;
    if (v(g))
      return;
    const E = {};
    for (const w in c.ctx)
      f(g, w, p) && (E[w] = c.ctx[w]);
    return E;
  }
  function f(c, p, g) {
    const E = c[g];
    if (h(E) && E.includes(p) || V(E) && p in E || c.extends && f(c.extends, p, g) || c.mixins && c.mixins.some((w) => f(w, p, g)))
      return !0;
  }
  function u(c) {
    return Ie(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function te(e, t, n, s) {
  e.addEventListener(t, n, s);
}
const _t = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return h(t) ? (n) => dn(t, n) : t;
};
function Zr(e) {
  e.target.composing = !0;
}
function mt(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const kr = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e._assign = _t(r);
    const o = s || r.props && r.props.type === "number";
    te(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let a = e.value;
      n && (a = a.trim()), o && (a = Ze(a)), e._assign(a);
    }), n && te(e, "change", () => {
      e.value = e.value.trim();
    }), t || (te(e, "compositionstart", Zr), te(e, "compositionend", mt), te(e, "change", mt));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, o) {
    if (e._assign = _t(o), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (r || e.type === "number") && Ze(e.value) === t))
      return;
    const i = t ?? "";
    e.value !== i && (e.value = i);
  }
};
function es() {
  Xr();
}
process.env.NODE_ENV !== "production" && es();
const ts = /* @__PURE__ */ yr({
  __name: "DBaseInput",
  props: {
    type: { default: "text" },
    value: {},
    decimals: { default: 0 }
  },
  emits: ["update:value", "error"],
  setup(e, { emit: t }) {
    const n = e, s = Xn();
    let r;
    const o = (l, f) => {
      let u = "", c = !1;
      switch (n.type) {
        case "text": {
          l == null ? u = "" : typeof l == "string" ? u = l : (typeof l == "number" || (c = !0), u = l.toString());
          break;
        }
        case "number": {
          switch (f) {
            case "event": {
              typeof l == "string" ? l ? l.match(/^-?\d*(\.\d+)?$/) ? (u = Number(l), (u > 9999999999999999e-1 || u < -9999999999999999e-1 || !(u >= 0.9999999999999999 || u <= -0.9999999999999999)) && (c = !0, u = 0)) : (c = !0, u = 0) : u = 0 : (c = !0, u = 0);
              break;
            }
            case "input": {
              if (typeof l == "string")
                l ? l.match(/^-?\d*(\.\d+|\.)?$/) ? (u = Number(l), (u > 9999999999999999e-1 || u < -9999999999999999e-1 || !(u >= 0.9999999999999999 || u <= -0.9999999999999999)) && (c = !0, u = l)) : (c = !0, u = l) : u = "";
              else if (typeof l == "number") {
                const p = l.toString();
                (isNaN(l) || l > 9999999999999999e-1 || l < -9999999999999999e-1 || !(l >= 0.9999999999999999 || l <= -0.9999999999999999)) && (c = !0), u = p;
              } else
                l == null ? u = "" : (c = !0, u = l.toString());
              break;
            }
          }
          break;
        }
        case "date": {
          switch (f) {
            case "event": {
              if (typeof l == "string" && l != "") {
                const p = /* @__PURE__ */ new Date();
                let g = C.padLeft(p.getDate(), 2, "0"), E = C.padLeft(p.getMonth() + 1, 2, "0"), w = C.padLeft(p.getFullYear(), 4, "0");
                if (l != "*") {
                  const N = l.match(/^([0-9]{1,2})((\.|\/)?([0-9]{1,2})((\3)?([0-9]{1,4}))?)?$/);
                  N ? (g = C.padLeft(N[1], 2, "0"), E = N[4] ? C.padLeft(N[4], 2, "0") : E, w = N[7] ? C.padLeft(N[7], 4, "0") : w) : c = !0;
                }
                if (!c) {
                  const N = /* @__PURE__ */ new Date(`${w}-${E}-${g} 00:00:00`);
                  isNaN(N.getTime()) ? (c = !0, u = "") : u = C.Date.format(N, "@y-@mm-@dd");
                }
              }
              break;
            }
            case "input": {
              if (typeof l == "string") {
                const p = /* @__PURE__ */ new Date(`${l} 00:00:00`);
                isNaN(p.getTime()) ? (c = !0, u = l) : u = C.Date.format(p, "@dd/@mm/@y");
              } else
                l == null ? u = "" : (c = !0, u = l.toString());
              break;
            }
          }
          break;
        }
      }
      switch (f) {
        case "event":
          r = u, t("update:value", u), t("error", c);
          break;
        case "input":
          s.value !== u && (s.value = typeof u == "number" ? u.toString() : u, t("error", c));
          break;
      }
    };
    br(() => n.value, (l) => {
      l != r && o(l, "input");
    });
    const i = (l) => {
      o(s.value, "event");
    }, a = (l) => {
      if (s.value)
        switch (n.type) {
          case "number": {
            typeof r == "number" && (s.value = C.Number.format(r, n.decimals, ".", ""), o(s.value, "event"));
            break;
          }
          case "date": {
            typeof r == "string" && r && (s.value = C.Date.format(/* @__PURE__ */ new Date(`${r} 00:00:00`), "@dd/@mm/@y"), o(s.value, "event"));
            break;
          }
        }
    };
    return (l, f) => Sr((Fr(), Kr("input", {
      class: "d-base-input",
      "onUpdate:modelValue": f[0] || (f[0] = (u) => s.value = u),
      onInput: f[1] || (f[1] = (u) => i()),
      onChange: a
    }, null, 544)), [
      [kr, s.value]
    ]);
  }
});
const ns = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, os = /* @__PURE__ */ ns(ts, [["__scopeId", "data-v-fdef36c5"]]);
export {
  os as default
};
