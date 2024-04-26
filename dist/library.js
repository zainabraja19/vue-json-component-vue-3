import './style.css';
import { defineComponent as P, ref as B, computed as j, resolveComponent as E, openBlock as s, createElementBlock as n, createElementVNode as o, withModifiers as K, createCommentVNode as m, renderSlot as C, createTextVNode as M, toDisplayString as $, Fragment as _, renderList as D, withDirectives as H, createBlock as V, normalizeStyle as N, vShow as T, normalizeClass as Z, withKeys as O } from "vue";
const J = { class: "json-view-item" }, z = { key: 0 }, I = ["aria-expanded", "onClick"], G = { style: { display: "inline-block", "vertical-align": "middle" } }, Q = { key: 0 }, R = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "var(--vjc-key-color)",
  viewBox: "0 0 256 256"
}, U = /* @__PURE__ */ o("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), W = /* @__PURE__ */ o("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z" }, null, -1), X = [
  U,
  W
], Y = { key: 1 }, ee = ["innerHTML"], te = { key: 2 }, ae = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "var(--vjc-key-color)",
  viewBox: "0 0 256 256"
}, le = /* @__PURE__ */ o("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), re = /* @__PURE__ */ o("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z" }, null, -1), se = [
  le,
  re
], ne = { key: 3 }, oe = ["innerHTML"], ie = { style: { display: "inline-block", "margin-left": "0.5em" } }, de = {
  style: { display: "inline-block", "margin-left": "0.5em" },
  class: "properties"
}, ue = { style: { display: "inline-block", "vertical-align": "middle" } }, ce = /* @__PURE__ */ o("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "var(--vjc-key-color)",
  viewBox: "0 0 256 256"
}, [
  /* @__PURE__ */ o("path", {
    d: "M221.9,61.38l-67.74,72.31a8,8,0,0,0-2.16,5.47v55.49a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V139.16a8,8,0,0,0-2.16-5.47L34.1,61.38A8,8,0,0,1,40,48H216A8,8,0,0,1,221.9,61.38Z",
    opacity: "0.2"
  }),
  /* @__PURE__ */ o("path", { d: "M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm108.34,72.28A15.92,15.92,0,0,0,144,139.17v55.49L112,216V139.17a15.92,15.92,0,0,0-4.32-10.94L40,56H216Z" })
], -1), he = [
  ce
], ve = /* @__PURE__ */ o("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "darkred",
  viewBox: "0 0 256 256"
}, [
  /* @__PURE__ */ o("path", {
    d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
    opacity: "0.2"
  }),
  /* @__PURE__ */ o("path", { d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" })
], -1), fe = [
  ve
], ye = ["role", "tabindex"], me = { class: "value-key" }, ge = ["v-html"], we = ["innerHTML"], pe = P({
  name: "json-view-item"
}), ke = /* @__PURE__ */ Object.assign(pe, {
  props: {
    data: {
      required: !0,
      type: Object
    },
    selected_dev_row: {
      required: !1,
      default: "",
      type: String
    },
    maxDepth: {
      type: Number,
      required: !1,
      default: 1
    },
    firstKey: {
      type: Boolean,
      required: !1,
      default: !0
    },
    canSelect: {
      type: Boolean,
      required: !1,
      default: !1
    },
    noBorder: {
      type: Boolean,
      required: !1,
      default: !1
    },
    useFilter: {
      type: Boolean,
      required: !1,
      default: !1
    },
    customParams: {
      type: Object,
      required: !1,
      default: () => {
      }
    },
    arrowExpand: {
      type: [String, Number],
      required: !1,
      default: ""
    },
    arrowCollapse: {
      type: [String, Number],
      required: !1,
      default: ""
    },
    length_of_value: {
      type: Number,
      required: !1,
      default: 50
    },
    use_ellipsis: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["selected", "filter"],
  setup(e, { emit: w }) {
    const t = e, c = B(!1), u = B(t.data.depth < t.maxDepth), A = () => {
      u.value = !u.value;
    }, p = j(
      () => t.length_of_value < 1 ? 50 : t.length_of_value
    ), k = (a) => {
      w("selected", {
        key: a.key,
        value: a.value,
        path: a.path,
        depth: a.depth
      });
    }, r = (a, l = !1) => {
      let x = a.path.split(".");
      x.pop();
      let g = Number.isFinite(Number(a.key)) ? x.join(".") : `${x.join(".")}.${a.key}`;
      a.path.slice(0, -1) === g && (g = g + `[${a.key}]`), w("filter", {
        key: a.key,
        type: a.type,
        path: a.path,
        depth: a.depth,
        selected_path: g,
        reset: l
      });
    }, i = (a) => {
      w("selected", a);
    }, h = (a) => isNaN(a.key) ? '"' + a.key + '":' : a.key + ":", d = (a) => {
      switch (typeof a) {
        case "string":
          return { color: "var(--vjc-string-color)" };
        case "number":
          return { color: "var(--vjc-number-color)" };
        case "boolean":
          return {
            color: a ? "var(--vjc-boolean-color-true)" : "var(--vjc-boolean-color-false)"
          };
        case "object":
          return { color: "var(--vjc-null-color)" };
        case "undefined":
          return { color: "var(--vjc-null-color)" };
        default:
          return { color: "var(--vjc-valueKey-color)" };
      }
    }, b = j(() => ({
      "value-key": !0,
      "can-select": t.canSelect
    })), v = j(() => {
      var a, l;
      return t.data.type === "array" ? (a = t == null ? void 0 : t.customParams) != null && a.item ? t.data.length === 1 ? `${t.data.length} ${t.customParams.item[0]}` : `${t.data.length} ${t.customParams.item[1]}` : t.data.length === 1 ? t.data.length + " item" : t.data.length + " items" : (l = t == null ? void 0 : t.customParams) != null && l.item ? t.data.length === 1 ? `${t.data.length} ${t.customParams.property[0]}` : `${t.data.length} ${t.customParams.property[1]}` : t.data.length === 1 ? t.data.length + " property" : t.data.length + " properties";
    }), f = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm56-88a12,12,0,1,1-12-12A12,12,0,0,1,184,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,96,128Z"></path></svg>', q = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm0-44a12,12,0,1,1-12-12A12,12,0,0,1,140,84Zm0,88a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"></path></svg>';
    return (a, l) => {
      var g, L, F;
      const x = E("json-view-item");
      return s(), n("div", J, [
        e.data.type === "object" || e.data.type === "array" ? (s(), n("div", z, [
          o("div", null, [
            o("span", {
              "aria-expanded": u.value ? "true" : "false",
              class: "data-key me-3",
              onClick: K(A, ["stop"])
            }, [
              o("div", G, [
                e.arrowExpand ? (s(), n("span", Y, [
                  u.value ? m("", !0) : (s(), n("span", {
                    key: 0,
                    innerHTML: e.arrowExpand
                  }, null, 8, ee))
                ])) : (s(), n("span", Q, [
                  u.value ? m("", !0) : (s(), n("svg", R, X))
                ])),
                e.arrowCollapse ? (s(), n("span", ne, [
                  u.value ? (s(), n("span", {
                    key: 0,
                    innerHTML: e.arrowCollapse
                  }, null, 8, oe)) : m("", !0)
                ])) : (s(), n("span", te, [
                  u.value ? (s(), n("svg", ae, se)) : m("", !0)
                ]))
              ]),
              o("div", ie, [
                C(a.$slots, "dataKey"),
                M(" " + $(e.data.key) + ": ", 1)
              ]),
              o("div", de, $(v.value), 1)
            ], 8, I),
            o("div", ue, [
              !e.firstKey && e.useFilter ? (s(), n("div", {
                key: 0,
                class: "hover",
                onClick: l[0] || (l[0] = (y) => r(e.data))
              }, he)) : e.firstKey && e.selected_dev_row && e.useFilter ? (s(), n("div", {
                key: 1,
                class: "hover",
                onClick: l[1] || (l[1] = (y) => r(e.data, !0))
              }, fe)) : m("", !0)
            ])
          ]),
          (s(!0), n(_, null, D(e.data.children, (y) => H((s(), V(x, {
            key: h(y),
            data: y,
            maxDepth: e.maxDepth,
            canSelect: e.canSelect,
            style: N({ border: e.noBorder ? "none" : "" }),
            firstKey: !1,
            arrowExpand: e.arrowExpand,
            customParams: e.customParams,
            length_of_value: e.length_of_value,
            noBorder: e.noBorder,
            arrowCollapse: e.arrowCollapse,
            useFilter: e.useFilter,
            use_ellipsis: e.use_ellipsis,
            onFilter: l[2] || (l[2] = (S) => a.$emit("filter", S)),
            onSelected: i
          }, null, 8, ["data", "maxDepth", "canSelect", "style", "arrowExpand", "customParams", "length_of_value", "noBorder", "arrowCollapse", "useFilter", "use_ellipsis"])), [
            [T, u.value]
          ])), 128))
        ])) : m("", !0),
        e.data.type === "value" ? (s(), n("div", {
          key: 1,
          class: Z(b.value),
          onClick: l[4] || (l[4] = (y) => k(e.data)),
          onKeyup: [
            l[5] || (l[5] = O((y) => k(e.data), ["enter"])),
            l[6] || (l[6] = O((y) => k(e.data), ["space"]))
          ],
          role: e.canSelect ? "button" : void 0,
          tabindex: e.canSelect ? "0" : void 0
        }, [
          o("span", me, [
            C(a.$slots, "dataKey"),
            M(" " + $(e.data.key) + ": ", 1)
          ]),
          e.use_ellipsis ? (s(), n("span", {
            key: 1,
            style: N(d(e.data.value)),
            class: Z(
              c.value ? "showOverflow hover" : "hideOverflow hover"
            )
          }, [
            C(a.$slots, "dataValue"),
            M(" " + $(((g = e.data.value) == null ? void 0 : g.length) > p.value ? c.value ? e.data.value : (L = e.data.value) == null ? void 0 : L.slice(0, p.value) : e.data.value) + " ", 1),
            ((F = e.data.value) == null ? void 0 : F.length) > p.value ? (s(), n("span", {
              key: 0,
              onClick: l[3] || (l[3] = (y) => {
                var S;
                return ((S = e.data.value) == null ? void 0 : S.length) > p.value ? c.value = !c.value : "";
              }),
              innerHTML: c.value ? q : f
            }, null, 8, we)) : m("", !0)
          ], 6)) : (s(), n("span", {
            key: 0,
            class: Z("showOverflow"),
            "v-html": e.data.value,
            style: N(d(e.data.value))
          }, null, 12, ge))
        ], 42, ye)) : m("", !0)
      ]);
    };
  }
});
const be = P({
  name: "json-view"
}), xe = /* @__PURE__ */ Object.assign(be, {
  props: {
    data: {
      required: !0
    },
    rootKey: {
      type: String,
      required: !1,
      default: "root"
    },
    selected_dev_row: {
      required: !1,
      default: ""
    },
    maxDepth: {
      type: Number,
      required: !1,
      default: 1
    },
    colorScheme: {
      type: String,
      required: !1,
      default: "light"
    },
    customParams: {
      type: Object,
      required: !1,
      default: () => {
      }
    },
    useFilter: {
      type: Boolean,
      required: !1,
      default: !1
    },
    noBorder: {
      type: Boolean,
      required: !1,
      default: !1
    },
    arrowExpand: {
      type: [String, Number],
      required: !1,
      default: ""
    },
    arrowCollapse: {
      type: [String, Number],
      required: !1,
      default: ""
    },
    length_of_value: {
      type: Number,
      required: !1,
      default: 50
    },
    use_ellipsis: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["selected", "filter", "filteredDataPath"],
  setup(e, { emit: w }) {
    const t = e, c = (r, i, h, d, b) => {
      if (u(i)) {
        let v = [];
        for (let [f, q] of Object.entries(i))
          v.push(
            c(
              f,
              q,
              h + 1,
              b ? `${d}${r}.` : `${d}`,
              !0
            )
          );
        return {
          key: r,
          type: "object",
          depth: h,
          path: d,
          length: v.length,
          children: v
        };
      } else if (A(i)) {
        let v = [];
        for (let f = 0; f < i.length; f++)
          v.push(
            c(
              f.toString(),
              i[f],
              h + 1,
              b ? `${d}${r}[${f}].` : `${d}`,
              !1
            )
          );
        return {
          key: r,
          type: "array",
          depth: h,
          path: d,
          length: v.length,
          children: v
        };
      } else
        return {
          key: r,
          type: "value",
          path: b ? d + r : d.slice(0, -1),
          depth: h,
          value: i
        };
    }, u = (r) => typeof r == "object" && r !== null && !A(r), A = (r) => Array.isArray(r), p = (r) => {
      w("selected", r);
    }, k = j(() => typeof t.data == "object" ? c(t.rootKey, { ...t.data }, 0, "", !0) : {
      key: t.rootKey,
      type: "value",
      path: "",
      depth: 0,
      value: t.data
    });
    return B(), B(), (r, i) => (s(), V(ke, {
      class: Z([{ "root-item": !0, dark: e.colorScheme === "dark" }]),
      data: k.value,
      maxDepth: e.maxDepth,
      firstKey: !0,
      selected_dev_row: e.selected_dev_row,
      arrowExpand: e.arrowExpand,
      arrowCollapse: e.arrowCollapse,
      useFilter: e.useFilter,
      customParams: e.customParams,
      noBorder: e.noBorder,
      length_of_value: e.length_of_value,
      use_ellipsis: e.use_ellipsis,
      onSelected: p,
      onFilter: i[0] || (i[0] = (h) => {
        r.$emit("filter", h);
      })
    }, null, 8, ["class", "data", "maxDepth", "selected_dev_row", "arrowExpand", "arrowCollapse", "useFilter", "customParams", "noBorder", "length_of_value", "use_ellipsis"]));
  }
}), Se = {
  install: (e, w) => {
    e.component("JSONView", xe);
  }
};
export {
  xe as JSONView,
  Se as default
};
