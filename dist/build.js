import { defineComponent as j, useSlots as O, ref as l, watch as b, computed as T, resolveComponent as C, openBlock as E, createBlock as K, withCtx as f, renderSlot as v, createVNode as I } from "vue";
const L = { name: "LktModalCrud", inheritAttrs: !1 }, U = /* @__PURE__ */ j({
  ...L,
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
    hiddenSave: { type: Boolean, default: !1 },
    hiddenDrop: { type: Boolean, default: !1 },
    hiddenButtons: { type: Boolean, default: !1 },
    editedCloseConfirm: { type: String, default: "" },
    editedCloseConfirmKey: { type: [String, Number], default: "_" },
    readResource: { type: String, required: !1 },
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
  emits: ["update:modelValue", "read", "create", "update", "drop", "perms"],
  setup(e, { emit: m }) {
    const r = e;
    O();
    const d = m;
    let S = [];
    const o = l(r.modelValue), h = l(S), D = l(null), g = l(!1), p = l(!1);
    b(() => r.modelValue, (t) => o.value = t), b(o, (t) => d("update:modelValue", t), { deep: !0 });
    const k = (t) => g.value = !0, B = (t) => d("read", t), V = (t) => d("create", t), q = (t) => d("update", t), R = (t) => d("drop", t), x = (t) => p.value = t, z = (t) => {
      h.value = t, d("perms", t);
    }, w = T(() => p.value ? r.editedCloseConfirm : "");
    return (t, y) => {
      const M = C("lkt-item-crud"), N = C("lkt-modal");
      return E(), K(N, {
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
        "close-confirm": w.value,
        "close-confirm-key": e.editedCloseConfirmKey
      }, {
        "pre-title": f(({ item: a, loading: i, editMode: u, isCreate: n, canUpdate: s, canDrop: c }) => [
          v(t.$slots, "pre-title", {
            item: a,
            loading: i,
            editMode: u,
            isCreate: n,
            canUpdate: s,
            canDrop: c
          })
        ]),
        default: f(() => [
          I(M, {
            ref: (a) => D.value = a,
            modelValue: o.value,
            "onUpdate:modelValue": y[0] || (y[0] = (a) => o.value = a),
            "create-resource": e.createResource,
            onPerms: z,
            onRead: B,
            onCreate: V,
            onUpdate: q,
            onDrop: R,
            onError: k,
            onModifiedData: x,
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
            "save-validator": e.saveValidator,
            "hidden-save": e.hiddenSave,
            "hidden-drop": e.hiddenDrop,
            "hidden-buttons": e.hiddenButtons
          }, {
            item: f(({ item: a, editMode: i, loading: u, isCreate: n, canUpdate: s, canDrop: c }) => [
              v(t.$slots, "item", {
                item: a,
                loading: u,
                editMode: i,
                isCreate: n,
                canUpdate: s,
                canDrop: c
              })
            ]),
            _: 3
          }, 8, ["modelValue", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-resource", "drop-data", "update-confirm", "update-resource", "update-data", "drop-disabled", "create-disabled", "update-disabled", "is-create", "save-validator", "hidden-save", "hidden-drop", "hidden-buttons"])
        ]),
        _: 3
      }, 8, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), A = {
  install: (e, m) => {
    e.component("lkt-modal-crud") === void 0 && e.component("lkt-modal-crud", U);
  }
};
export {
  A as default
};
