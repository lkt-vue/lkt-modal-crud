import { defineComponent as B, useSlots as x, ref as d, watch as c, computed as z, resolveComponent as f, openBlock as h, createBlock as w, createSlots as N, withCtx as i, createVNode as j, renderSlot as m, unref as O } from "vue";
const T = { name: "LktModalCrud", inheritAttrs: !1 }, E = /* @__PURE__ */ B({
  ...T,
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
    const o = e, p = x(), s = u, l = d(o.modelValue), y = d([]), b = d(!1), C = d(null), v = d(!1), n = d(!1);
    c(() => o.modelValue, (t) => l.value = t), c(l, (t) => s("update:modelValue", t), { deep: !0 });
    const S = (t) => v.value = !0, g = (t) => s("read", t), k = (t) => n.value = t, D = z(() => n.value ? o.editedCloseConfirm : "");
    return (t, r) => {
      const V = f("lkt-item-crud"), q = f("lkt-modal");
      return h(), w(q, {
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
        "close-confirm": D.value,
        "close-confirm-key": e.editedCloseConfirmKey
      }, N({
        default: i(() => [
          j(V, {
            ref: (a) => C.value = a,
            modelValue: l.value,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => l.value = a),
            "create-resource": e.createResource,
            onPerms: r[1] || (r[1] = (a) => y.value = a),
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
            item: i(({ item: a, editMode: M, loading: R }) => [
              m(t.$slots, "item", {
                item: a,
                loading: R,
                editMode: M
              })
            ]),
            _: 3
          }, 8, ["modelValue", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-resource", "drop-data", "update-confirm", "update-resource", "update-data", "drop-disabled", "create-disabled", "update-disabled", "is-create", "save-validator"])
        ]),
        _: 2
      }, [
        O(p)["pre-title"] ? {
          name: "pre-title",
          fn: i(({ item: a }) => [
            m(t.$slots, "pre-title", {
              item: a,
              editMode: b.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), I = {
  install: (e, u) => {
    e.component("lkt-modal-crud", E);
  }
};
export {
  I as default
};
