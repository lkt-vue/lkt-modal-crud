import { defineComponent as N, useSlots as T, ref as l, watch as D, computed as E, resolveComponent as S, openBlock as F, createBlock as K, withCtx as s, renderSlot as h, createVNode as U } from "vue";
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
    createConfirmData: { type: Object, default: () => ({}) },
    updateConfirmData: { type: Object, default: () => ({}) },
    dropConfirmData: { type: Object, default: () => ({}) },
    createDisabled: { type: Boolean, default: !1 },
    updateDisabled: { type: Boolean, default: !1 },
    dropDisabled: { type: Boolean, default: !1 },
    saveValidator: { type: Function, required: !1, default: () => !0 },
    beforeClose: { type: Function, default: void 0 },
    onCreate: { type: Function, required: !1, default: () => !0 },
    onUpdate: { type: Function, required: !1, default: () => !0 }
  },
  emits: ["update:modelValue", "read", "create", "update", "drop", "perms"],
  setup(e, { expose: m, emit: g }) {
    const o = e;
    T();
    const d = g;
    let k = [];
    const r = l(o.modelValue), B = l(k), p = l(null), V = l(!1), y = l(!1);
    D(() => o.modelValue, (t) => r.value = t), D(r, (t) => d("update:modelValue", t), { deep: !0 });
    const q = (t) => V.value = !0, R = (t) => d("read", t), C = (t) => d("create", t), b = (t) => d("update", t), x = (t) => d("drop", t), j = (t) => y.value = t, z = (t) => {
      B.value = t, d("perms", t);
    }, O = E(() => y.value ? o.editedCloseConfirm : "");
    return m({
      doRefresh: () => {
        p.value.doRefresh();
      }
    }), (t, v) => {
      const w = S("lkt-item-crud"), M = S("lkt-modal");
      return F(), K(M, {
        "pre-title": e.preTitle,
        title: e.title,
        "modal-name": e.modalName,
        "modal-key": e.modalKey,
        "z-index": e.zIndex,
        palette: e.palette,
        size: e.size,
        "show-close": e.showClose,
        "before-close": e.beforeClose,
        "disabled-close": e.disabledClose,
        "disabled-veil-click": e.disabledVeilClick,
        "close-confirm": O.value,
        "close-confirm-key": e.editedCloseConfirmKey
      }, {
        "pre-title": s(({ item: a, loading: i, editMode: u, isCreate: n, canUpdate: f, canDrop: c }) => [
          h(t.$slots, "pre-title", {
            item: a,
            loading: i,
            editMode: u,
            isCreate: n,
            canUpdate: f,
            canDrop: c
          })
        ]),
        default: s(() => [
          U(w, {
            ref: (a) => p.value = a,
            modelValue: r.value,
            "onUpdate:modelValue": v[0] || (v[0] = (a) => r.value = a),
            "create-resource": e.createResource,
            onPerms: z,
            onRead: R,
            onCreate: C,
            onUpdate: b,
            onDrop: x,
            onError: q,
            onModifiedData: j,
            "read-resource": e.readResource,
            "read-data": e.readData,
            "drop-confirm": e.dropConfirm,
            "drop-confirm-data": e.dropConfirmData,
            "drop-resource": e.dropResource,
            "drop-data": e.dropData,
            "update-confirm": e.updateConfirm,
            "update-confirm-data": e.updateConfirmData,
            "update-resource": e.updateResource,
            "update-data": e.updateData,
            "drop-disabled": e.dropDisabled,
            "create-confirm": e.createConfirm,
            "create-confirm-data": e.createConfirmData,
            "create-data": e.createData,
            "create-disabled": e.createDisabled,
            "update-disabled": e.updateDisabled,
            "is-create": e.isCreate,
            "save-validator": e.saveValidator,
            "hidden-save": e.hiddenSave,
            "hidden-drop": e.hiddenDrop,
            "hidden-buttons": e.hiddenButtons,
            "on-create": C,
            "on-update": b
          }, {
            item: s(({ item: a, editMode: i, loading: u, isCreate: n, canUpdate: f, canDrop: c }) => [
              h(t.$slots, "item", {
                item: a,
                loading: u,
                editMode: i,
                isCreate: n,
                canUpdate: f,
                canDrop: c
              })
            ]),
            _: 3
          }, 8, ["modelValue", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-confirm-data", "drop-resource", "drop-data", "update-confirm", "update-confirm-data", "update-resource", "update-data", "drop-disabled", "create-confirm", "create-confirm-data", "create-data", "create-disabled", "update-disabled", "is-create", "save-validator", "hidden-save", "hidden-drop", "hidden-buttons"])
        ]),
        _: 3
      }, 8, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "before-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), A = {
  install: (e, m) => {
    e.component("lkt-modal-crud") === void 0 && e.component("lkt-modal-crud", L);
  }
};
export {
  A as default
};
