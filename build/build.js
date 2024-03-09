import { defineComponent as T, ref as l, watch as S, computed as F, resolveComponent as g, openBlock as K, createBlock as I, withCtx as s, renderSlot as k, createVNode as L } from "vue";
const p = class p {
};
p.debugEnabled = !1;
let m = p;
const U = (...e) => {
  m.debugEnabled && console.info("[LktHttpClient] ", ...e);
}, $ = { name: "LktModalCrud", inheritAttrs: !1 }, A = /* @__PURE__ */ T({
  ...$,
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
  setup(e, { expose: y, emit: B }) {
    const o = e, d = B;
    let V = [];
    const r = l(o.modelValue), q = l(V), b = l(null), R = l(!1), C = l(!1);
    S(() => o.modelValue, (t) => r.value = t), S(r, (t) => d("update:modelValue", t), { deep: !0 });
    const x = (t) => R.value = !0, j = (t) => d("read", t), v = (t) => {
      U("Detected create on Item Crud", t), d("create", t);
    }, D = (t) => d("update", t), z = (t) => d("drop", t), O = (t) => C.value = t, w = (t) => {
      q.value = t, d("perms", t);
    }, E = F(() => C.value ? o.editedCloseConfirm : "");
    return y({
      doRefresh: () => {
        b.value.doRefresh();
      }
    }), (t, h) => {
      const M = g("lkt-item-crud"), N = g("lkt-modal");
      return K(), I(N, {
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
        "close-confirm": E.value,
        "close-confirm-key": e.editedCloseConfirmKey
      }, {
        "pre-title": s(({ item: a, loading: i, editMode: n, isCreate: u, canUpdate: c, canDrop: f }) => [
          k(t.$slots, "pre-title", {
            item: a,
            loading: i,
            editMode: n,
            isCreate: u,
            canUpdate: c,
            canDrop: f
          })
        ]),
        default: s(() => [
          L(M, {
            ref: (a) => b.value = a,
            modelValue: r.value,
            "onUpdate:modelValue": h[0] || (h[0] = (a) => r.value = a),
            "create-resource": e.createResource,
            onPerms: w,
            onRead: j,
            onCreate: v,
            onUpdate: D,
            onDrop: z,
            onError: x,
            onModifiedData: O,
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
            "on-create": v,
            "on-update": D
          }, {
            item: s(({ item: a, editMode: i, loading: n, isCreate: u, canUpdate: c, canDrop: f }) => [
              k(t.$slots, "item", {
                item: a,
                loading: n,
                editMode: i,
                isCreate: u,
                canUpdate: c,
                canDrop: f
              })
            ]),
            _: 3
          }, 8, ["modelValue", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-confirm-data", "drop-resource", "drop-data", "update-confirm", "update-confirm-data", "update-resource", "update-data", "drop-disabled", "create-confirm", "create-confirm-data", "create-data", "create-disabled", "update-disabled", "is-create", "save-validator", "hidden-save", "hidden-drop", "hidden-buttons"])
        ]),
        _: 3
      }, 8, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "before-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), P = {
  install: (e, y) => {
    e.component("lkt-modal-crud") === void 0 && e.component("lkt-modal-crud", A);
  }
};
export {
  P as default
};
