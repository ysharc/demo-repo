import { openBlock as e, createElementBlock as s, normalizeStyle as u, createElementVNode as l, reactive as h, computed as _, unref as f, Fragment as b, renderList as k, normalizeClass as v, createBlock as C, toDisplayString as r, renderSlot as V, createCommentVNode as m } from "vue";
const x = /* @__PURE__ */ l("path", { d: "M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" }, null, -1), z = [
  x
], B = {
  __name: "CheckMark",
  props: {
    color: {
      type: String,
      default: "black"
    }
  },
  setup(n) {
    return (c, t) => (e(), s("svg", {
      viewBox: "0 0 24 24",
      style: u({ fill: n.color })
    }, z, 4));
  }
};
const T = (n, c) => {
  const t = n.__vccOpts || n;
  for (const [p, d] of c)
    t[p] = d;
  return t;
}, M = { class: "steppy" }, N = { class: "steppy-progress" }, $ = { class: "steppy-item-counter" }, w = ["src"], D = { class: "number" }, E = { class: "steppy-item-title" }, F = {
  key: 0,
  class: "steppy-pane"
}, A = { class: "controls" }, I = ["disabled"], L = ["disabled"], O = {
  key: 0,
  class: "loader"
}, P = { key: 1 }, j = {
  __name: "Vue3Steppy",
  props: {
    step: {
      type: Number,
      default: 1
    },
    tabs: {
      type: Array,
      default: h([
        {
          title: "Step 1",
          iconSuccess: null,
          isValid: !0
        },
        {
          title: "Step 2",
          iconSuccess: null,
          isValid: !0
        },
        {
          title: "Step 3",
          iconSuccess: null,
          isValid: !0
        }
      ])
    },
    finalize: {
      type: Function,
      default: function() {
        return {};
      }
    },
    cencelText: {
      type: String,
      default: "Cancel"
    },
    backText: {
      type: String,
      default: "Back"
    },
    nextText: {
      type: String,
      default: "Next"
    },
    doneText: {
      type: String,
      default: "Done"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    primaryColor1: {
      type: String,
      default: "#383D3B"
    },
    primaryColor2: {
      type: String,
      default: "#fff"
    }
  },
  emits: ["update:step"],
  setup(n, { emit: c }) {
    const t = n, p = _(() => ({
      "--primaryColor1": t.primaryColor1,
      "--primaryColor2": t.primaryColor2
    })), d = () => {
      const a = t.step + 1;
      c("update:step", a);
    }, S = () => {
      const a = t.step - 1;
      c("update:step", a);
    }, x = () => {
      const a = t.step;
      c("update:step", a);
    }, g = _(() => 100 / (t.tabs.length - 1) * (t.step - 1) + "%");
    return (a, y) => (e(), s("div", {
      class: "wrapper-steppy",
      style: u(f(p))
    }, [
      l("div", M, [
        l("div", N, [
          l("div", {
            class: "steppy-progress-bar",
            style: u("width:" + f(g))
          }, null, 4)
        ]),
        (e(!0), s(b, null, k(t.tabs, (o, i) => (e(), s("div", {
          class: v(["steppy-item", {
            current: t.step === i + 1,
            success: t.step > i + 1
          }]),
          key: i
        }, [
          l("div", $, [
            o.iconSuccess ? (e(), s("img", {
              key: 0,
              class: "icon-success",
              src: o.iconSuccess,
              alt: "Check Mark"
            }, null, 8, w)) : (e(), C(B, {
              key: 1,
              class: "icon-success",
              color: n.primaryColor1,
              alt: "Check Mark"
            }, null, 8, ["color"])),
            l("span", D, r(i + 1), 1)
          ]),
          l("span", E, r(o.title), 1)
        ], 2))), 128))
      ]),
      (e(!0), s(b, null, k(t.tabs.length, (o) => (e(), s("div", {
        class: "steppy-content",
        key: o
      }, [
        t.step === o ? (e(), s("div", F, [
          V(a.$slots, o, {}, void 0, !0)
        ])) : m("", !0)
      ]))), 128)),
      l("div", A, [
        t.step === 1 ? (e(), s("button", {
          key: 0,
          class: "btn",
          onClick: x
        }, r(t.cencelText), 1)) : m("", !0),
        t.step !== 1 ? (e(), s("button", {
          key: 0,
          class: "btn",
          onClick: S
        }, r(t.backText), 1)) : m("", !0),
        t.step !== t.tabs.length ? (e(), s("button", {
          key: 1,
          class: "btn btn--default-2",
          onClick: d,
          disabled: !t.tabs[t.step - 1].isValid
        }, r(t.nextText), 9, I)) : (e(), s("button", {
          key: 2,
          class: "btn btn--default-2",
          onClick: y[0] || (y[0] = (...o) => n.finalize && n.finalize(...o)),
          disabled: !t.tabs[t.step - 1].isValid || n.loading
        }, [
          n.loading ? (e(), s("span", O)) : (e(), s("span", P, r(t.doneText), 1))
        ], 8, L))
      ])
    ], 4));
  }
}, G = /* @__PURE__ */ T(j, [["__scopeId", "data-v-4a42d1bd"]]);
export {
  G as Steppy
};
