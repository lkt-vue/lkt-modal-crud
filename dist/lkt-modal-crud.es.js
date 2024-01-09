import { defineComponent as z, useSlots as w, ref as d, watch as b, computed as N, resolveComponent as C, openBlock as j, createBlock as O, createSlots as T, withCtx as f, createVNode as E, renderSlot as S, unref as K } from "vue";
const I = { name: "LktModalCrud", inheritAttrs: !1 }, L = /* @__PURE__ */ z({
  ...I,
  props: {
    modelValue: { type: Object, required: !1, default: () => ({}) },
    palette: { type: String, default: "" },
    size: { type: String, default: "" },
    preTitle: { type: String, default: "" },
    title: { type: String, default: "" },
    showClose: { type: Boolean, default: !0 },
    disabledClose: { type: Boolean, default: !1 },
    disabledVeilClick: { type: Boolean, default: !1 },
    modalName: { type: String, default: "" },
    modalKey: { type: [String, Number], default: "_" },
    zIndex: { type: Number, default: 500 },
    editModeText: { type: String, default: "Edition Mode" },
    saveText: { type: String, default: "Save" },
    dropText: { type: String, default: "Delete" },
    editedCloseConfirm: { type: String, default: "" },
    editedCloseConfirmKey: { type: [String, Number], default: "_" },
    readResource: { type: String, required: !0 },
    createResource: { type: String, required: !1 },
    updateResource: { type: String, required: !1 },
    dropResource: { type: String, required: !1 },
    readData: { type: Object, required: !1, default: () => ({}) },
    createData: { type: Object, required: !1, default: () => ({}) },
    updateData: { type: Object, required: !1, default: () => ({}) },
    dropData: { type: Object, required: !1, default: () => ({}) },
    isCreate: { type: Boolean, default: !1 },
    createConfirm: { type: String, default: "" },
    updateConfirm: { type: String, default: "" },
    dropConfirm: { type: String, default: "" },
    createDisabled: { type: Boolean, default: !1 },
    updateDisabled: { type: Boolean, default: !1 },
    dropDisabled: { type: Boolean, default: !1 },
    saveValidator: { type: Function, required: !1, default: () => !0 }
  },
  emits: ["update:modelValue", "read", "created", "updated", "dropped", "perms"],
  setup(e, { emit: m }) {
    const r = e, v = w(), o = m, l = d(r.modelValue), g = d([]);
    d(!1);
    const k = d(null), D = d(!1), p = d(!1);
    b(() => r.modelValue, (t) => l.value = t), b(l, (t) => o("update:modelValue", t), { deep: !0 });
    const V = (t) => D.value = !0, q = (t) => o("read", t), M = (t) => p.value = t, R = (t) => {
      g.value = t, o("perms", t);
    }, B = N(() => p.value ? r.editedCloseConfirm : "");
    return (t, y) => {
      const h = C("lkt-item-crud"), x = C("lkt-modal");
      return j(), O(x, {
        "pre-title": e.preTitle,
        title: e.title,
        "modal-name": e.modalName,
        "modal-key": e.modalKey,
        "z-index": e.zIndex,
        palette: e.palette,
        size: e.size,
        "show-close": e.showClose,
        "disabled-close": e.disabledClose,
        "disabled-veil-click": e.disabledVeilClick,
        "close-confirm": B.value,
        "close-confirm-key": e.editedCloseConfirmKey
      }, T({
        default: f(() => [
          E(h, {
            ref: (a) => k.value = a,
            modelValue: l.value,
            "onUpdate:modelValue": y[0] || (y[0] = (a) => l.value = a),
            "create-resource": e.createResource,
            onPerms: R,
            onRead: q,
            onError: V,
            onModifiedData: M,
            "read-resource": e.readResource,
            "read-data": e.readData,
            "drop-confirm": e.dropConfirm,
            "drop-resource": e.dropResource,
            "drop-data": e.dropData,
            "update-confirm": e.updateConfirm,
            "update-resource": e.updateResource,
            "update-data": e.updateData,
            "drop-disabled": e.dropDisabled,
            "create-disabled": e.createDisabled,
            "update-disabled": e.updateDisabled,
            "is-create": e.isCreate,
            "save-validator": e.saveValidator
          }, {
            item: f(({ item: a, editMode: i, loading: u, isCreate: s, canUpdate: n, canDrop: c }) => [
              S(t.$slots, "item", {
                item: a,
                loading: u,
                editMode: i,
                isCreate: s,
                canUpdate: n,
                canDrop: c
              })
            ]),
            _: 3
          }, 8, ["modelValue", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-resource", "drop-data", "update-confirm", "update-resource", "update-data", "drop-disabled", "create-disabled", "update-disabled", "is-create", "save-validator"])
        ]),
        _: 2
      }, [
        K(v)["pre-title"] ? {
          name: "pre-title",
          fn: f(({ item: a, loading: i, editMode: u, isCreate: s, canUpdate: n, canDrop: c }) => [
            S(t.$slots, "pre-title", {
              item: a,
              loading: i,
              editMode: u,
              isCreate: s,
              canUpdate: n,
              canDrop: c
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), A = {
  install: (e, m) => {
    e.component("lkt-modal-crud", L);
  }
};
export {
  A as default
};
