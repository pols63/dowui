function cn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const P = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ln = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Et = () => {
}, un = /^on[^a-z]/, an = (e) => un.test(e), C = Object.assign, fn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, pn = Object.prototype.hasOwnProperty, m = (e, t) => pn.call(e, t), h = Array.isArray, H = (e) => Oe(e) === "[object Map]", wt = (e) => Oe(e) === "[object Set]", E = (e) => typeof e == "function", D = (e) => typeof e == "string", je = (e) => typeof e == "symbol", N = (e) => e !== null && typeof e == "object", dn = (e) => N(e) && E(e.then) && E(e.catch), Nt = Object.prototype.toString, Oe = (e) => Nt.call(e), Ot = (e) => Oe(e).slice(8, -1), bt = (e) => Oe(e) === "[object Object]", ze = (e) => D(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, _n = hn(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), ge = (e, t) => !Object.is(e, t), gn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let ke;
const Ce = () => ke || (ke = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ke(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = D(o) ? Nn(o) : Ke(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (D(e))
      return e;
    if (N(e))
      return e;
  }
}
const mn = /;(?![^(]*\))/g, En = /:([^]+)/, wn = /\/\*[^]*?\*\//g;
function Nn(e) {
  const t = {};
  return e.replace(wn, "").split(mn).forEach((n) => {
    if (n) {
      const o = n.split(En);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function He(e) {
  let t = "";
  if (D(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const o = He(e[n]);
      o && (t += o + " ");
    }
  else if (N(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Yr = (e) => D(e) ? e : e == null ? "" : h(e) || N(e) && (e.toString === Nt || !E(e.toString)) ? JSON.stringify(e, St, 2) : String(e), St = (e, t) => t && t.__v_isRef ? St(e, t.value) : H(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : wt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : N(t) && !h(t) && !bt(t) ? String(t) : t;
function et(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Vt;
function On(e, t = Vt) {
  t && t.active && t.effects.push(e);
}
function bn() {
  return Vt;
}
const Re = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, xt = (e) => (e.w & j) > 0, yt = (e) => (e.n & j) > 0, Sn = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= j;
}, Vn = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      xt(r) && !yt(r) ? r.delete(e) : t[n++] = r, r.w &= ~j, r.n &= ~j;
    }
    t.length = n;
  }
}, De = /* @__PURE__ */ new WeakMap();
let k = 0, j = 1;
const ve = 30;
let S;
const W = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), $e = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class xn {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, On(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = S, n = U;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = S, S = this, U = !0, j = 1 << ++k, k <= ve ? Sn(this) : tt(this), this.fn();
    } finally {
      k <= ve && Vn(this), j = 1 << --k, S = this.parent, U = n, this.parent = void 0, this.deferStop && this.stop();
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
let U = !0;
const It = [];
function Ct() {
  It.push(U), U = !1;
}
function Rt() {
  const e = It.pop();
  U = e === void 0 ? !0 : e;
}
function x(e, t, n) {
  if (U && S) {
    let o = De.get(e);
    o || De.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Re());
    const s = process.env.NODE_ENV !== "production" ? { effect: S, target: e, type: t, key: n } : void 0;
    yn(r, s);
  }
}
function yn(e, t) {
  let n = !1;
  k <= ve ? yt(e) || (e.n |= j, n = !xt(e)) : n = !e.has(S), n && (e.add(S), S.deps.push(e), process.env.NODE_ENV !== "production" && S.onTrack && S.onTrack(
    C(
      {
        effect: S
      },
      t
    )
  ));
}
function z(e, t, n, o, r, s) {
  const i = De.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && h(e)) {
    const a = Number(o);
    i.forEach((d, l) => {
      (l === "length" || l >= a) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        h(e) ? ze(n) && c.push(i.get("length")) : (c.push(i.get(W)), H(e) && c.push(i.get($e)));
        break;
      case "delete":
        h(e) || (c.push(i.get(W)), H(e) && c.push(i.get($e)));
        break;
      case "set":
        H(e) && c.push(i.get(W));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? ie(c[0], u) : ie(c[0]));
  else {
    const a = [];
    for (const d of c)
      d && a.push(...d);
    process.env.NODE_ENV !== "production" ? ie(Re(a), u) : ie(Re(a));
  }
}
function ie(e, t) {
  const n = h(e) ? e : [...e];
  for (const o of n)
    o.computed && nt(o, t);
  for (const o of n)
    o.computed || nt(o, t);
}
function nt(e, t) {
  (e !== S || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(C({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const In = /* @__PURE__ */ cn("__proto__,__v_isRef,__isVue"), Dt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(je)
), Cn = /* @__PURE__ */ We(), Rn = /* @__PURE__ */ We(!0), Dn = /* @__PURE__ */ We(!0, !0), rt = /* @__PURE__ */ vn();
function vn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = p(this);
      for (let s = 0, i = this.length; s < i; s++)
        x(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(p)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ct();
      const o = p(this)[t].apply(this, n);
      return Rt(), o;
    };
  }), e;
}
function $n(e) {
  const t = p(this);
  return x(t, "has", e), t.hasOwnProperty(e);
}
function We(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Mt : Pt : t ? Ln : Tt).get(o))
      return o;
    const i = h(o);
    if (!e) {
      if (i && m(rt, r))
        return Reflect.get(rt, r, s);
      if (r === "hasOwnProperty")
        return $n;
    }
    const c = Reflect.get(o, r, s);
    return (je(r) ? Dt.has(r) : In(r)) || (e || x(o, "get", r), t) ? c : V(c) ? i && ze(r) ? c : c.value : N(c) ? e ? At(c) : Ft(c) : c;
  };
}
const Tn = /* @__PURE__ */ Pn();
function Pn(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (G(i) && V(i) && !V(r))
      return !1;
    if (!e && (!Te(r) && !G(r) && (i = p(i), r = p(r)), !h(n) && V(i) && !V(r)))
      return i.value = r, !0;
    const c = h(n) && ze(o) ? Number(o) < n.length : m(n, o), u = Reflect.set(n, o, r, s);
    return n === p(s) && (c ? ge(r, i) && z(n, "set", o, r, i) : z(n, "add", o, r)), u;
  };
}
function Mn(e, t) {
  const n = m(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && z(e, "delete", t, void 0, o), r;
}
function Fn(e, t) {
  const n = Reflect.has(e, t);
  return (!je(t) || !Dt.has(t)) && x(e, "has", t), n;
}
function An(e) {
  return x(e, "iterate", h(e) ? "length" : W), Reflect.ownKeys(e);
}
const jn = {
  get: Cn,
  set: Tn,
  deleteProperty: Mn,
  has: Fn,
  ownKeys: An
}, vt = {
  get: Rn,
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
}, zn = /* @__PURE__ */ C(
  {},
  vt,
  {
    get: Dn
  }
), Ue = (e) => e, be = (e) => Reflect.getPrototypeOf(e);
function ce(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = p(e), s = p(t);
  n || (t !== s && x(r, "get", t), x(r, "get", s));
  const { has: i } = be(r), c = o ? Ue : n ? Ge : qe;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function le(e, t = !1) {
  const n = this.__v_raw, o = p(n), r = p(e);
  return t || (e !== r && x(o, "has", e), x(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function ue(e, t = !1) {
  return e = e.__v_raw, !t && x(p(e), "iterate", W), Reflect.get(e, "size", e);
}
function ot(e) {
  e = p(e);
  const t = p(this);
  return be(t).has.call(t, e) || (t.add(e), z(t, "add", e, e)), this;
}
function st(e, t) {
  t = p(t);
  const n = p(this), { has: o, get: r } = be(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && $t(n, o, e) : (e = p(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? ge(t, i) && z(n, "set", e, t, i) : z(n, "add", e, t), this;
}
function it(e) {
  const t = p(this), { has: n, get: o } = be(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && $t(t, n, e) : (e = p(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && z(t, "delete", e, void 0, s), i;
}
function ct() {
  const e = p(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? H(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && z(e, "clear", void 0, void 0, n), o;
}
function ae(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = p(i), u = t ? Ue : e ? Ge : qe;
    return !e && x(c, "iterate", W), i.forEach((a, d) => o.call(r, u(a), u(d), s));
  };
}
function fe(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = p(r), i = H(s), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...o), d = n ? Ue : t ? Ge : qe;
    return !t && x(
      s,
      "iterate",
      u ? $e : W
    ), {
      // iterator protocol
      next() {
        const { value: l, done: f } = a.next();
        return f ? { value: l, done: f } : {
          value: c ? [d(l[0]), d(l[1])] : d(l),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function M(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${_n(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function Kn() {
  const e = {
    get(s) {
      return ce(this, s);
    },
    get size() {
      return ue(this);
    },
    has: le,
    add: ot,
    set: st,
    delete: it,
    clear: ct,
    forEach: ae(!1, !1)
  }, t = {
    get(s) {
      return ce(this, s, !1, !0);
    },
    get size() {
      return ue(this);
    },
    has: le,
    add: ot,
    set: st,
    delete: it,
    clear: ct,
    forEach: ae(!1, !0)
  }, n = {
    get(s) {
      return ce(this, s, !0);
    },
    get size() {
      return ue(this, !0);
    },
    has(s) {
      return le.call(this, s, !0);
    },
    add: M("add"),
    set: M("set"),
    delete: M("delete"),
    clear: M("clear"),
    forEach: ae(!0, !1)
  }, o = {
    get(s) {
      return ce(this, s, !0, !0);
    },
    get size() {
      return ue(this, !0);
    },
    has(s) {
      return le.call(this, s, !0);
    },
    add: M("add"),
    set: M("set"),
    delete: M("delete"),
    clear: M("clear"),
    forEach: ae(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = fe(
      s,
      !1,
      !1
    ), n[s] = fe(
      s,
      !0,
      !1
    ), t[s] = fe(
      s,
      !1,
      !0
    ), o[s] = fe(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  Hn,
  Wn,
  Un,
  Bn
] = /* @__PURE__ */ Kn();
function Be(e, t) {
  const n = t ? e ? Bn : Un : e ? Wn : Hn;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    m(n, r) && r in o ? n : o,
    r,
    s
  );
}
const Jn = {
  get: /* @__PURE__ */ Be(!1, !1)
}, qn = {
  get: /* @__PURE__ */ Be(!0, !1)
}, Gn = {
  get: /* @__PURE__ */ Be(!0, !0)
};
function $t(e, t, n) {
  const o = p(n);
  if (o !== n && t.call(e, o)) {
    const r = Ot(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Tt = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap();
function Yn(e) {
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
function Qn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Yn(Ot(e));
}
function Ft(e) {
  return G(e) ? e : Je(
    e,
    !1,
    jn,
    Jn,
    Tt
  );
}
function At(e) {
  return Je(
    e,
    !0,
    vt,
    qn,
    Pt
  );
}
function pe(e) {
  return Je(
    e,
    !0,
    zn,
    Gn,
    Mt
  );
}
function Je(e, t, n, o, r) {
  if (!N(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = Qn(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, c), c;
}
function B(e) {
  return G(e) ? B(e.__v_raw) : !!(e && e.__v_isReactive);
}
function G(e) {
  return !!(e && e.__v_isReadonly);
}
function Te(e) {
  return !!(e && e.__v_isShallow);
}
function Pe(e) {
  return B(e) || G(e);
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Xn(e) {
  return gn(e, "__v_skip", !0), e;
}
const qe = (e) => N(e) ? Ft(e) : e, Ge = (e) => N(e) ? At(e) : e;
function V(e) {
  return !!(e && e.__v_isRef === !0);
}
function Zn(e) {
  return V(e) ? e.value : e;
}
const kn = {
  get: (e, t, n) => Zn(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return V(r) && !V(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function er(e) {
  return B(e) ? e : new Proxy(e, kn);
}
const J = [];
function tr(e) {
  J.push(e);
}
function nr() {
  J.pop();
}
function w(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Ct();
  const n = J.length ? J[J.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = rr();
  if (o)
    q(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${nn(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...or(r)), console.warn(...s);
  }
  Rt();
}
function rr() {
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
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function or(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...sr(n));
  }), t;
}
function sr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${nn(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...ir(e.props), s] : [r + s];
}
function ir(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...jt(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function jt(e, t, n) {
  return D(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : V(t) ? (t = jt(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : E(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const zt = {
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
function q(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Kt(s, t, n);
  }
  return r;
}
function Me(e, t, n, o) {
  if (E(e)) {
    const s = q(e, t, n, o);
    return s && dn(s) && s.catch((i) => {
      Kt(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(Me(e[s], t, n, o));
  return r;
}
function Kt(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? zt[n] : n;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      q(
        u,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  cr(e, n, r, o);
}
function cr(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = zt[t];
    if (n && tr(n), w(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && nr(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let me = !1, Fe = !1;
const v = [];
let A = 0;
const Q = [];
let T = null, F = 0;
const Ht = /* @__PURE__ */ Promise.resolve();
let Le = null;
const lr = 100;
function ur(e) {
  const t = Le || Ht;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ar(e) {
  let t = A + 1, n = v.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    re(v[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Ye(e) {
  (!v.length || !v.includes(
    e,
    me && e.allowRecurse ? A + 1 : A
  )) && (e.id == null ? v.push(e) : v.splice(ar(e.id), 0, e), Wt());
}
function Wt() {
  !me && !Fe && (Fe = !0, Le = Ht.then(Bt));
}
function Ut(e) {
  h(e) ? Q.push(...e) : (!T || !T.includes(
    e,
    e.allowRecurse ? F + 1 : F
  )) && Q.push(e), Wt();
}
function fr(e) {
  if (Q.length) {
    const t = [...new Set(Q)];
    if (Q.length = 0, T) {
      T.push(...t);
      return;
    }
    for (T = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), T.sort((n, o) => re(n) - re(o)), F = 0; F < T.length; F++)
      process.env.NODE_ENV !== "production" && Jt(e, T[F]) || T[F]();
    T = null, F = 0;
  }
}
const re = (e) => e.id == null ? 1 / 0 : e.id, pr = (e, t) => {
  const n = re(e) - re(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Bt(e) {
  Fe = !1, me = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), v.sort(pr);
  const t = process.env.NODE_ENV !== "production" ? (n) => Jt(e, n) : Et;
  try {
    for (A = 0; A < v.length; A++) {
      const n = v[A];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        q(n, null, 14);
      }
    }
  } finally {
    A = 0, v.length = 0, fr(e), me = !1, Le = null, (v.length || Q.length) && Bt(e);
  }
}
function Jt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > lr) {
      const o = t.ownerInstance, r = o && tn(o.type);
      return w(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Z = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ce().__VUE_HMR_RUNTIME__ = {
  createRecord: xe(dr),
  rerender: xe(hr),
  reload: xe(_r)
});
const Ee = /* @__PURE__ */ new Map();
function dr(e, t) {
  return Ee.has(e) ? !1 : (Ee.set(e, {
    initialDef: te(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function te(e) {
  return rn(e) ? e.__vccOpts : e;
}
function hr(e, t) {
  const n = Ee.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, te(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function _r(e, t) {
  const n = Ee.get(e);
  if (!n)
    return;
  t = te(t), lt(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = te(r.type);
    Z.has(s) || (s !== n.initialDef && lt(s, t), Z.add(s)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Z.add(s), r.ceReload(t.styles), Z.delete(s)) : r.parent ? Ye(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Ut(() => {
    for (const r of o)
      Z.delete(
        te(r.type)
      );
  });
}
function lt(e, t) {
  C(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function xe(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
function gr(e, ...t) {
}
const mr = /* @__PURE__ */ Er(
  "component:updated"
  /* COMPONENT_UPDATED */
);
function Er(e) {
  return (t) => {
    gr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
let b = null, Se = null;
function ut(e) {
  const t = b;
  return b = e, Se = e && e.type.__scopeId || null, t;
}
function Qr(e) {
  Se = e;
}
function Xr() {
  Se = null;
}
function Zr(e, t = b, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && _t(-1);
    const s = ut(t);
    let i;
    try {
      i = e(...r);
    } finally {
      ut(s), o._d && _t(1);
    }
    return process.env.NODE_ENV !== "production" && mr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
const wr = (e) => e.__isSuspense;
function Nr(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : Ut(e);
}
const de = {};
function Or(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = P) {
  var c;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (g) => {
    w(
      "Invalid watch source: ",
      g,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = bn() === ((c = X) == null ? void 0 : c.scope) ? X : null;
  let d, l = !1, f = !1;
  if (V(e) ? (d = () => e.value, l = Te(e)) : B(e) ? (d = () => e, o = !0) : h(e) ? (f = !0, l = e.some((g) => B(g) || Te(g)), d = () => e.map((g) => {
    if (V(g))
      return g.value;
    if (B(g))
      return Y(g);
    if (E(g))
      return q(g, a, 2);
    process.env.NODE_ENV !== "production" && u(g);
  })) : E(e) ? t ? d = () => q(e, a, 2) : d = () => {
    if (!(a && a.isUnmounted))
      return _ && _(), Me(
        e,
        a,
        3,
        [y]
      );
  } : (d = Et, process.env.NODE_ENV !== "production" && u(e)), t && o) {
    const g = d;
    d = () => Y(g());
  }
  let _, y = (g) => {
    _ = R.onStop = () => {
      q(g, a, 4);
    };
  }, I = f ? new Array(e.length).fill(de) : de;
  const K = () => {
    if (R.active)
      if (t) {
        const g = R.run();
        (o || l || (f ? g.some(
          (on, sn) => ge(on, I[sn])
        ) : ge(g, I))) && (_ && _(), Me(t, a, 3, [
          g,
          // pass undefined as the old value when it's changed for the first time
          I === de ? void 0 : f && I[0] === de ? [] : I,
          y
        ]), I = g);
      } else
        R.run();
  };
  K.allowRecurse = !!t;
  let se;
  r === "sync" ? se = K : r === "post" ? se = () => ht(K, a && a.suspense) : (K.pre = !0, a && (K.id = a.uid), se = () => Ye(K));
  const R = new xn(d, se);
  return process.env.NODE_ENV !== "production" && (R.onTrack = s, R.onTrigger = i), t ? n ? K() : I = R.run() : r === "post" ? ht(
    R.run.bind(R),
    a && a.suspense
  ) : R.run(), () => {
    R.stop(), a && a.scope && fn(a.scope.effects, R);
  };
}
function br(e, t, n) {
  const o = this.proxy, r = D(e) ? e.includes(".") ? Sr(o, e) : () => o[e] : e.bind(o, o);
  let s;
  E(t) ? s = t : (s = t.handler, n = t);
  const i = X;
  mt(this);
  const c = Or(r, s.bind(o), n);
  return i ? mt(i) : Hr(), c;
}
function Sr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Y(e, t) {
  if (!N(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), V(e))
    Y(e.value, t);
  else if (h(e))
    for (let n = 0; n < e.length; n++)
      Y(e[n], t);
  else if (wt(e) || H(e))
    e.forEach((n) => {
      Y(n, t);
    });
  else if (bt(e))
    for (const n in e)
      Y(e[n], t);
  return e;
}
function kr(e, t) {
  return E(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => C({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Vr = (e) => !!e.type.__asyncLoader, xr = Symbol.for("v-ndc");
function eo(e, t, n = {}, o, r) {
  if (b.isCE || b.parent && Vr(b.parent) && b.parent.isCE)
    return t !== "default" && (n.name = t), Qe("slot", n, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (w(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), Pr();
  const i = s && qt(s(n)), c = Fr(
    Ve,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), s && s._c && (s._d = !0), c;
}
function qt(e) {
  return e.some((t) => Yt(t) ? !(t.type === Gt || t.type === Ve && !qt(t.children)) : !0) ? e : null;
}
const Ae = (e) => e ? Wr(e) ? Ur(e) || e.proxy : Ae(e.parent) : null, ne = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ C(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? pe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? pe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? pe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? pe(e.refs) : e.refs,
    $parent: (e) => Ae(e.parent),
    $root: (e) => Ae(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Cr(e),
    $forceUpdate: (e) => e.f || (e.f = () => Ye(e.update)),
    $nextTick: (e) => e.n || (e.n = ur.bind(e.proxy)),
    $watch: (e) => br.bind(e)
  })
), yr = (e) => e === "_" || e === "$", ye = (e, t) => e !== P && !e.__isScriptSetup && m(e, t), Ir = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (ye(o, t))
          return i[t] = 1, o[t];
        if (r !== P && m(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && m(a, t)
        )
          return i[t] = 3, s[t];
        if (n !== P && m(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const d = ne[t];
    let l, f;
    if (d)
      return t === "$attrs" ? (x(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && x(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== P && m(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = u.config.globalProperties, m(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && b && (!D(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== P && yr(t[0]) && m(r, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === b && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return ye(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && m(r, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== P && m(o, t) ? (o[t] = n, !0) : m(e.props, t) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, i) {
    let c;
    return !!n[i] || e !== P && m(e, i) || ye(t, i) || (c = s[0]) && m(c, i) || m(o, i) || m(ne, i) || m(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Ir.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function at(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Cr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = s.get(t);
  let u;
  return c ? u = c : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach(
    (a) => we(u, a, i, !0)
  ), we(u, t, i)), N(t) && s.set(t, u), u;
}
function we(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && we(e, s, n, !0), r && r.forEach(
    (i) => we(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Rr[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Rr = {
  data: ft,
  props: dt,
  emits: dt,
  // objects
  methods: ee,
  computed: ee,
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
  components: ee,
  directives: ee,
  // watch
  watch: vr,
  // provide / inject
  provide: ft,
  inject: Dr
};
function ft(e, t) {
  return t ? e ? function() {
    return C(
      E(e) ? e.call(this, this) : e,
      E(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Dr(e, t) {
  return ee(pt(e), pt(t));
}
function pt(e) {
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
function ee(e, t) {
  return e ? C(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function dt(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : C(
    /* @__PURE__ */ Object.create(null),
    at(e),
    at(t ?? {})
  ) : t;
}
function vr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = C(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = O(e[o], t[o]);
  return n;
}
const ht = Nr, $r = (e) => e.__isTeleport, Ve = Symbol.for("v-fgt"), Tr = Symbol.for("v-txt"), Gt = Symbol.for("v-cmt"), he = [];
let $ = null;
function Pr(e = !1) {
  he.push($ = e ? null : []);
}
function Mr() {
  he.pop(), $ = he[he.length - 1] || null;
}
let oe = 1;
function _t(e) {
  oe += e;
}
function Lt(e) {
  return e.dynamicChildren = oe > 0 ? $ || ln : null, Mr(), oe > 0 && $ && $.push(e), e;
}
function to(e, t, n, o, r, s) {
  return Lt(
    Zt(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
      /* isBlock */
    )
  );
}
function Fr(e, t, n, o, r) {
  return Lt(
    Qe(
      e,
      t,
      n,
      o,
      r,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function Yt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Ar = (...e) => kt(
  ...e
), Qt = "__vInternal", Xt = ({ key: e }) => e ?? null, _e = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? D(e) || V(e) || E(e) ? { i: b, r: e, k: t, f: !!n } : e : null);
function Zt(e, t = null, n = null, o = 0, r = null, s = e === Ve ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Xt(t),
    ref: t && _e(t),
    scopeId: Se,
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
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: b
  };
  return c ? (Xe(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= D(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && w("VNode created with invalid key (NaN). VNode type:", u.type), oe > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  $ && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && $.push(u), u;
}
const Qe = process.env.NODE_ENV !== "production" ? Ar : kt;
function kt(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === xr) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = Gt), Yt(e)) {
    const c = Ne(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Xe(c, n), oe > 0 && !s && $ && (c.shapeFlag & 6 ? $[$.indexOf(e)] = c : $.push(c)), c.patchFlag |= -2, c;
  }
  if (rn(e) && (e = e.__vccOpts), t) {
    t = jr(t);
    let { class: c, style: u } = t;
    c && !D(c) && (t.class = He(c)), N(u) && (Pe(u) && !h(u) && (u = C({}, u)), t.style = Ke(u));
  }
  const i = D(e) ? 1 : wr(e) ? 128 : $r(e) ? 64 : N(e) ? 4 : E(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Pe(e) && (e = p(e), w(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Zt(
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    !0
  );
}
function jr(e) {
  return e ? Pe(e) || Qt in e ? C({}, e) : e : null;
}
function Ne(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? Kr(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Xt(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? h(r) ? r.concat(_e(t)) : [r, _e(t)] : _e(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && h(i) ? i.map(en) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ve ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Ne(e.ssContent),
    ssFallback: e.ssFallback && Ne(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function en(e) {
  const t = Ne(e);
  return h(e.children) && (t.children = e.children.map(en)), t;
}
function zr(e = " ", t = 0) {
  return Qe(Tr, null, e, t);
}
function Xe(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Xe(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Qt in t) ? t._ctx = b : r === 3 && b && (b.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    E(t) ? (t = { default: t, _ctx: b }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [zr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Kr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = He([t.class, o.class]));
      else if (r === "style")
        t.style = Ke([t.style, o.style]);
      else if (an(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(h(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
let X = null, Ze, L, gt = "__VUE_INSTANCE_SETTERS__";
(L = Ce()[gt]) || (L = Ce()[gt] = []), L.push((e) => X = e), Ze = (e) => {
  L.length > 1 ? L.forEach((t) => t(e)) : L[0](e);
};
const mt = (e) => {
  Ze(e), e.scope.on();
}, Hr = () => {
  X && X.scope.off(), Ze(null);
};
function Wr(e) {
  return e.vnode.shapeFlag & 4;
}
function Ur(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(er(Xn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ne)
          return ne[n](e);
      },
      has(t, n) {
        return n in t || n in ne;
      }
    }));
}
const Br = /(?:^|[-_])(\w)/g, Jr = (e) => e.replace(Br, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function tn(e, t = !0) {
  return E(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function nn(e, t, n = !1) {
  let o = tn(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? Jr(o) : n ? "App" : "Anonymous";
}
function rn(e) {
  return E(e) && "__vccOpts" in e;
}
function Ie(e) {
  return !!(e && e.__v_isShallow);
}
function qr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(l) {
      return N(l) ? l.__isVue ? ["div", e, "VueInstance"] : V(l) ? [
        "div",
        {},
        ["span", e, d(l)],
        "<",
        c(l.value),
        ">"
      ] : B(l) ? [
        "div",
        {},
        ["span", e, Ie(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${G(l) ? " (readonly)" : ""}`
      ] : G(l) ? [
        "div",
        {},
        ["span", e, Ie(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...s(l.$)
        ];
    }
  };
  function s(l) {
    const f = [];
    l.type.props && l.props && f.push(i("props", p(l.props))), l.setupState !== P && f.push(i("setup", l.setupState)), l.data !== P && f.push(i("data", p(l.data)));
    const _ = u(l, "computed");
    _ && f.push(i("computed", _));
    const y = u(l, "inject");
    return y && f.push(i("injected", y)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), f;
  }
  function i(l, f) {
    return f = C({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((_) => [
          "div",
          {},
          ["span", o, _ + ": "],
          c(f[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, f = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", o, l] : N(l) ? ["object", { object: f ? p(l) : l }] : ["span", n, String(l)];
  }
  function u(l, f) {
    const _ = l.type;
    if (E(_))
      return;
    const y = {};
    for (const I in l.ctx)
      a(_, I, f) && (y[I] = l.ctx[I]);
    return y;
  }
  function a(l, f, _) {
    const y = l[_];
    if (h(y) && y.includes(f) || N(y) && f in y || l.extends && a(l.extends, f, _) || l.mixins && l.mixins.some((I) => a(I, f, _)))
      return !0;
  }
  function d(l) {
    return Ie(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function Gr() {
  qr();
}
process.env.NODE_ENV !== "production" && Gr();
const no = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
export {
  Ve as F,
  no as _,
  Zt as a,
  Xr as b,
  to as c,
  kr as d,
  zr as e,
  Qe as f,
  Pr as o,
  Qr as p,
  eo as r,
  Yr as t,
  Zr as w
};
