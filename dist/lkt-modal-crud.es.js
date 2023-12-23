import { defineComponent as K, useSlots as U, ref as i, watch as y, computed as f, resolveComponent as c, openBlock as b, createBlock as g, createSlots as A, withCtx as r, unref as k, renderSlot as v, withDirectives as C, createTextVNode as R, toDisplayString as M, vShow as S, createVNode as w } from "vue";
import { closeModal as P } from "lkt-modal";
const F = { name: "LktModalCrud", inheritAttrs: !1 }, G = /* @__PURE__ */ K({
  ...F,
  props: {
    modelValue: { type: Object, required: !1, default: () => ({}) },
    palette: { type: String, default: "" },
    size: { type: String, default: "" },
    preTitle: { type: String, default: "" },
    title: { type: String, default: "" },
    loading: { type: Boolean, default: !0 },
    showClose: { type: Boolean, default: !0 },
    disabledClose: { type: Boolean, default: !1 },
    disabledVeilClick: { type: Boolean, default: !1 },
    modalName: { type: String, default: "" },
    modalKey: { type: [String, Number], default: "_" },
    zIndex: { type: Number, default: 500 },
    editModeText: { type: String, default: "Edition Mode" },
    saveText: { type: String, default: "Save" },
    dropText: { type: String, default: "Delete" },
    readResource: { type: String, required: !0 },
    createResource: { type: String, required: !1 },
    updateResource: { type: String, required: !1 },
    dropResource: { type: String, required: !1 },
    readData: { type: Object, required: !1, default: () => ({}) },
    createData: { type: Object, required: !1, default: () => ({}) },
    updateData: { type: Object, required: !1, default: () => ({}) },
    dropData: { type: Object, required: !1, default: () => ({}) },
    saveIsCreate: { type: Boolean, default: !1 },
    createConfirm: { type: String, default: "" },
    updateConfirm: { type: String, default: "" },
    dropConfirm: { type: String, default: "" },
    createDisabled: { type: Boolean, default: !1 },
    updateDisabled: { type: Boolean, default: !1 },
    dropDisabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "read", "created", "updated", "dropped", "perms"],
  setup(e, { emit: D }) {
    const t = e, p = U(), x = D, s = i(t.modelValue), B = i([]), u = i(!1), q = i(null), d = i(t.loading), m = i(!1);
    y(() => t.modelValue, (o) => s.value = o), y(() => t.loading, (o) => d.value = o), y(s, () => x("update:modelValue", s.value));
    const T = () => {
      P(t.modalName, t.modalKey);
    }, $ = f(() => t.saveIsCreate ? t.createConfirm : t.updateConfirm), z = f(() => t.saveIsCreate ? t.createResource : t.updateResource), I = f(() => t.saveIsCreate ? t.createData : t.updateData), L = f(() => t.saveIsCreate ? t.createDisabled : t.updateDisabled), N = (o) => {
      d.value = !1, m.value = !0;
    };
    return (o, a) => {
      const V = c("lkt-button"), j = c("lkt-field-switch"), O = c("lkt-item-crud"), E = c("lkt-modal");
      return b(), g(E, {
        "pre-title": e.preTitle,
        title: e.title,
        "modal-name": e.modalName,
        "modal-key": e.modalKey,
        "z-index": e.zIndex,
        palette: e.palette,
        size: e.size,
        loading: d.value,
        "show-close": e.showClose,
        "disabled-close": e.disabledClose,
        "disabled-veil-click": e.disabledVeilClick
      }, A({
        "button-drop": r(({ item: l }) => [
          k(p)["button-drop"] ? v(o.$slots, "button-drop", {
            key: 0,
            item: l,
            editMode: u.value
          }) : C((b(), g(V, {
            key: 1,
            palette: "danger",
            disabled: e.dropDisabled,
            "confirm-modal": e.dropConfirm,
            resource: e.dropResource,
            "resource-data": e.dropData,
            onLoading: a[0] || (a[0] = (n) => d.value = !0),
            onLoaded: a[1] || (a[1] = (n) => d.value = !1),
            onClick: T
          }, {
            default: r(() => [
              R(M(e.dropText), 1)
            ]),
            _: 1
          }, 8, ["disabled", "confirm-modal", "resource", "resource-data"])), [
            [S, !d.value && !m.value]
          ])
        ]),
        "button-save": r(({ item: l }) => [
          k(p)["button-save"] ? v(o.$slots, "button-save", {
            key: 0,
            item: l,
            editMode: u.value
          }) : C((b(), g(V, {
            key: 1,
            palette: "success",
            disabled: L.value,
            "confirm-modal": $.value,
            resource: z.value,
            "resource-data": I.value,
            onLoading: a[2] || (a[2] = (n) => d.value = !0),
            onLoaded: a[3] || (a[3] = (n) => d.value = !1)
          }, {
            default: r(() => [
              R(M(e.saveText), 1)
            ]),
            _: 1
          }, 8, ["disabled", "confirm-modal", "resource", "resource-data"])), [
            [S, !d.value && !m.value]
          ])
        ]),
        "button-edition": r(({ item: l }) => [
          C(w(j, {
            modelValue: u.value,
            "onUpdate:modelValue": a[4] || (a[4] = (n) => u.value = n),
            label: e.editModeText
          }, null, 8, ["modelValue", "label"]), [
            [S, !d.value && !m.value]
          ])
        ]),
        default: r(() => [
          w(O, {
            ref: (l) => q.value = l,
            modelValue: s.value,
            "onUpdate:modelValue": a[5] || (a[5] = (l) => s.value = l),
            "read-resource": e.readResource,
            "read-data": e.readData,
            "create-resource": e.createResource,
            "update-resource": e.updateResource,
            "drop-resource": e.dropResource,
            onPerms: a[6] || (a[6] = (l) => B.value = l),
            onRead: a[7] || (a[7] = (l) => d.value = !1),
            onError: N
          }, {
            item: r(({ item: l }) => [
              v(o.$slots, "item", {
                item: l,
                editMode: u.value
              })
            ]),
            _: 3
          }, 8, ["modelValue", "read-resource", "read-data", "create-resource", "update-resource", "drop-resource"])
        ]),
        _: 2
      }, [
        k(p)["pre-title"] ? {
          name: "pre-title",
          fn: r(({ item: l }) => [
            v(o.$slots, "pre-title", {
              item: l,
              editMode: u.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "loading", "show-close", "disabled-close", "disabled-veil-click"]);
    };
  }
}), Q = {
  install: (e, D) => {
    e.component("lkt-modal-crud", G);
  }
};
export {
  Q as default
};
