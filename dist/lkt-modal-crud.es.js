import { defineComponent as O, useSlots as K, ref as n, watch as v, computed as m, resolveComponent as f, openBlock as y, createBlock as b, createSlots as U, withCtx as r, unref as g, renderSlot as c, withDirectives as k, createTextVNode as V, toDisplayString as R, vShow as C, createVNode as M } from "vue";
import { closeModal as A } from "lkt-modal";
const E = { name: "LktModalCrud", inheritAttrs: !1 }, P = /* @__PURE__ */ O({
  ...E,
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
  setup(e, { emit: S }) {
    const t = e, p = K(), w = S, i = n(t.modelValue), x = n([]), u = n(!1), B = n(null), d = n(t.loading);
    v(() => t.modelValue, (o) => i.value = o), v(() => t.loading, (o) => d.value = o), v(i, () => w("update:modelValue", i.value));
    const q = () => {
      A(t.modalName, t.modalKey);
    }, T = m(() => t.saveIsCreate ? t.createConfirm : t.updateConfirm), $ = m(() => t.saveIsCreate ? t.createResource : t.updateResource), z = m(() => t.saveIsCreate ? t.createData : t.updateData), I = m(() => t.saveIsCreate ? t.createDisabled : t.updateDisabled);
    return (o, a) => {
      const D = f("lkt-button"), L = f("lkt-field-switch"), N = f("lkt-item-crud"), j = f("lkt-modal");
      return y(), b(j, {
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
      }, U({
        "button-drop": r(({ item: l }) => [
          g(p)["button-drop"] ? c(o.$slots, "button-drop", {
            key: 0,
            item: l,
            editMode: u.value
          }) : k((y(), b(D, {
            key: 1,
            palette: "danger",
            disabled: e.dropDisabled,
            "confirm-modal": e.dropConfirm,
            resource: e.dropResource,
            "resource-data": e.dropData,
            onLoading: a[0] || (a[0] = (s) => d.value = !0),
            onLoaded: a[1] || (a[1] = (s) => d.value = !1),
            onClick: q
          }, {
            default: r(() => [
              V(R(e.dropText), 1)
            ]),
            _: 1
          }, 8, ["disabled", "confirm-modal", "resource", "resource-data"])), [
            [C, !d.value]
          ])
        ]),
        "button-save": r(({ item: l }) => [
          g(p)["button-save"] ? c(o.$slots, "button-save", {
            key: 0,
            item: l,
            editMode: u.value
          }) : k((y(), b(D, {
            key: 1,
            palette: "success",
            disabled: I.value,
            "confirm-modal": T.value,
            resource: $.value,
            "resource-data": z.value,
            onLoading: a[2] || (a[2] = (s) => d.value = !0),
            onLoaded: a[3] || (a[3] = (s) => d.value = !1)
          }, {
            default: r(() => [
              V(R(e.saveText), 1)
            ]),
            _: 1
          }, 8, ["disabled", "confirm-modal", "resource", "resource-data"])), [
            [C, !d.value]
          ])
        ]),
        "button-edition": r(({ item: l }) => [
          k(M(L, {
            modelValue: u.value,
            "onUpdate:modelValue": a[4] || (a[4] = (s) => u.value = s),
            label: e.editModeText
          }, null, 8, ["modelValue", "label"]), [
            [C, !d.value]
          ])
        ]),
        default: r(() => [
          M(N, {
            ref: (l) => B.value = l,
            modelValue: i.value,
            "onUpdate:modelValue": a[5] || (a[5] = (l) => i.value = l),
            "read-resource": e.readResource,
            "read-data": e.readData,
            "create-resource": e.createResource,
            "update-resource": e.updateResource,
            "drop-resource": e.dropResource,
            onPerms: a[6] || (a[6] = (l) => x.value = l),
            onRead: a[7] || (a[7] = (l) => d.value = !1)
          }, {
            item: r(({ item: l }) => [
              c(o.$slots, "item", {
                item: l,
                editMode: u.value
              })
            ]),
            _: 3
          }, 8, ["modelValue", "read-resource", "read-data", "create-resource", "update-resource", "drop-resource"])
        ]),
        _: 2
      }, [
        g(p)["pre-title"] ? {
          name: "pre-title",
          fn: r(({ item: l }) => [
            c(o.$slots, "pre-title", {
              item: l,
              editMode: u.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "loading", "show-close", "disabled-close", "disabled-veil-click"]);
    };
  }
}), H = {
  install: (e, S) => {
    e.component("lkt-modal-crud", P);
  }
};
export {
  H as default
};
