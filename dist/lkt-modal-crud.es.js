import { defineComponent as N, useSlots as j, ref as d, watch as c, computed as x, resolveComponent as f, openBlock as O, createBlock as T, createSlots as E, withCtx as i, createVNode as K, renderSlot as m, unref as U } from "vue";
const I = { name: "LktModalCrud", inheritAttrs: !1 }, L = /* @__PURE__ */ N({
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
  setup(e, { emit: u }) {
    const r = e, p = j(), o = u, l = d(r.modelValue), y = d([]), C = d(!1), b = d(null), v = d(!1), s = d(!1);
    c(() => r.modelValue, (t) => l.value = t), c(l, (t) => o("update:modelValue", t), { deep: !0 });
    const S = (t) => v.value = !0, g = (t) => o("read", t), k = (t) => s.value = t, D = (t) => {
      y.value = t, o("perms", t);
    }, V = x(() => s.value ? r.editedCloseConfirm : "");
    return (t, n) => {
      const q = f("lkt-item-crud"), M = f("lkt-modal");
      return O(), T(M, {
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
        "close-confirm": V.value,
        "close-confirm-key": e.editedCloseConfirmKey
      }, E({
        default: i(() => [
          K(q, {
            ref: (a) => b.value = a,
            modelValue: l.value,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => l.value = a),
            "create-resource": e.createResource,
            onPerms: D,
            onRead: g,
            onError: S,
            onModifiedData: k,
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
            item: i(({ item: a, editMode: R, loading: B, isCreate: h, canUpdate: z, canDrop: w }) => [
              m(t.$slots, "item", {
                item: a,
                loading: B,
                editMode: R,
                isCreate: h,
                canUpdate: z,
                canDrop: w
              })
            ]),
            _: 3
          }, 8, ["modelValue", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-resource", "drop-data", "update-confirm", "update-resource", "update-data", "drop-disabled", "create-disabled", "update-disabled", "is-create", "save-validator"])
        ]),
        _: 2
      }, [
        U(p)["pre-title"] ? {
          name: "pre-title",
          fn: i(({ item: a }) => [
            m(t.$slots, "pre-title", {
              item: a,
              loading: t.loading,
              editMode: C.value,
              isCreate: e.isCreate,
              canUpdate: t.canUpdate,
              canDrop: t.canDrop
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), A = {
  install: (e, u) => {
    e.component("lkt-modal-crud", L);
  }
};
export {
  A as default
};
