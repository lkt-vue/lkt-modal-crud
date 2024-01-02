import { defineComponent as x, useSlots as z, ref as d, watch as u, computed as h, resolveComponent as m, openBlock as w, createBlock as N, createSlots as j, withCtx as n, createVNode as O, renderSlot as p, unref as T } from "vue";
const E = { name: "LktModalCrud", inheritAttrs: !1 }, K = /* @__PURE__ */ x({
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
    saveIsCreate: { type: Boolean, default: !1 },
    createConfirm: { type: String, default: "" },
    updateConfirm: { type: String, default: "" },
    dropConfirm: { type: String, default: "" },
    createDisabled: { type: Boolean, default: !1 },
    updateDisabled: { type: Boolean, default: !1 },
    dropDisabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "read", "created", "updated", "dropped", "perms"],
  setup(e, { emit: s }) {
    const l = e, y = z(), f = s, o = d(l.modelValue), b = d([]), C = d(!1), g = d(null), r = d(l.loading), S = d(!1), c = d(!1);
    u(() => l.modelValue, (t) => {
      o.value = t;
    }), u(() => l.loading, (t) => r.value = t), u(o, (t) => {
      f("update:modelValue", t);
    }, { deep: !0 });
    const v = (t) => {
      r.value = !1, S.value = !0;
    }, k = (t) => {
      r.value = !1, f("read", t);
    }, D = (t) => {
      c.value = t;
    }, V = h(() => c.value ? l.editedCloseConfirm : "");
    return (t, i) => {
      const B = m("lkt-item-crud"), M = m("lkt-modal");
      return w(), N(M, {
        "pre-title": e.preTitle,
        title: e.title,
        "modal-name": e.modalName,
        "modal-key": e.modalKey,
        "z-index": e.zIndex,
        palette: e.palette,
        size: e.size,
        loading: r.value,
        "show-close": e.showClose,
        "disabled-close": e.disabledClose,
        "disabled-veil-click": e.disabledVeilClick,
        "close-confirm": V.value,
        "close-confirm-key": e.editedCloseConfirmKey
      }, j({
        default: n(() => [
          O(B, {
            ref: (a) => g.value = a,
            modelValue: o.value,
            "onUpdate:modelValue": i[0] || (i[0] = (a) => o.value = a),
            "create-resource": e.createResource,
            onPerms: i[1] || (i[1] = (a) => b.value = a),
            onRead: k,
            onError: v,
            onModifiedData: D,
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
            "update-disabled": e.updateDisabled
          }, {
            item: n(({ item: a, editMode: R, loading: q }) => [
              p(t.$slots, "item", {
                item: a,
                loading: q,
                editMode: R
              })
            ]),
            _: 3
          }, 8, ["modelValue", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-resource", "drop-data", "update-confirm", "update-resource", "update-data", "drop-disabled", "create-disabled", "update-disabled"])
        ]),
        _: 2
      }, [
        T(y)["pre-title"] ? {
          name: "pre-title",
          fn: n(({ item: a }) => [
            p(t.$slots, "pre-title", {
              item: a,
              editMode: C.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "loading", "show-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), L = {
  install: (e, s) => {
    e.component("lkt-modal-crud", K);
  }
};
export {
  L as default
};
