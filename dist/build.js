import { defineComponent as P, ref as t, watch as h, computed as j, resolveComponent as M, openBlock as q, createBlock as A, withCtx as c, renderSlot as B, createVNode as G } from "vue";
const b = class b {
};
b.debugEnabled = !1;
let u = b;
const C = (...d) => {
  u.debugEnabled && console.info("[LktModalCrud] ", ...d);
}, O = (d = !0) => {
  u.debugEnabled = d;
}, H = /* @__PURE__ */ P({
  __name: "LktModalCrud",
  props: {
    palette: { default: "" },
    size: { default: "" },
    preTitle: { default: "" },
    showClose: { type: Boolean, default: !0 },
    disabledClose: { type: Boolean, default: !1 },
    disabledVeilClick: { type: Boolean, default: !1 },
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    editedCloseConfirm: { default: "" },
    editedCloseConfirmKey: { default: "_" },
    beforeClose: { type: Function, default: void 0 },
    modelValue: { default: () => ({}) },
    title: { default: "" },
    editModeText: { default: "Edition Mode" },
    saveText: { default: "Save" },
    dropText: { default: "Delete" },
    hiddenSave: { type: Boolean, default: !1 },
    hiddenDrop: { type: Boolean, default: !1 },
    hiddenButtons: { type: Boolean, default: !1 },
    readResource: { default: "" },
    createResource: { default: "" },
    updateResource: { default: "" },
    dropResource: { default: "" },
    readData: { default: () => ({}) },
    createData: { default: () => ({}) },
    updateData: { default: () => ({}) },
    dropData: { default: () => ({}) },
    isCreate: { type: Boolean, default: !1 },
    createConfirm: { default: "" },
    updateConfirm: { default: "" },
    dropConfirm: { default: "" },
    createConfirmData: { default: () => ({}) },
    updateConfirmData: { default: () => ({}) },
    dropConfirmData: { default: () => ({}) },
    createDisabled: { type: Boolean, default: !1 },
    updateDisabled: { type: Boolean, default: !1 },
    dropDisabled: { type: Boolean, default: !1 },
    saveValidator: { type: Function, default: () => !0 },
    beforeEmitUpdate: { type: Function, default: void 0 },
    onCreate: { type: Function, default: void 0 },
    onUpdate: { type: Function, default: void 0 },
    insideModal: { type: Boolean, default: !1 },
    dataStateConfig: { default: () => ({}) },
    onCreateModalCallbacks: { default: () => [] },
    onUpdateModalCallbacks: { default: () => [] },
    onDropModalCallbacks: { default: () => [] }
  },
  emits: ["update:modelValue", "read", "create", "update", "drop", "perms"],
  setup(d, { expose: k, emit: V }) {
    const l = d, o = V;
    let R = [];
    const r = t(l.modelValue), U = t(R), v = t(null), E = t(!1), D = t(!1), y = t(l.isCreate);
    h(() => l.modelValue, (e) => r.value = e), h(r, (e) => o("update:modelValue", e), { deep: !0 });
    const z = (e) => E.value = !0, g = (e) => o("read", e), w = (e) => {
      C("Detected create on Item Crud", e), o("create", e);
    }, F = (e) => {
      C("Detected update on Item Crud", e), o("update", e);
    }, I = (e) => {
      C("Detected drop on Item Crud", e), o("drop", e);
    }, T = (e) => D.value = e, K = (e) => {
      U.value = e, o("perms", e);
    }, L = j(() => D.value ? l.editedCloseConfirm : "");
    return k({
      doRefresh: () => {
        v.value.doRefresh();
      }
    }), (e, n) => {
      const S = M("lkt-item-crud"), N = M("lkt-modal");
      return q(), A(N, {
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
        "close-confirm": L.value,
        "close-confirm-key": e.editedCloseConfirmKey
      }, {
        "pre-title": c(({ item: a, loading: i, editMode: s, isCreate: p, canUpdate: f, canDrop: m }) => [
          B(e.$slots, "pre-title", {
            item: a,
            loading: i,
            editMode: s,
            isCreate: p,
            canUpdate: f,
            canDrop: m
          })
        ]),
        default: c(() => [
          G(S, {
            ref: (a) => v.value = a,
            modelValue: r.value,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => r.value = a),
            "is-create": y.value,
            "onUpdate:isCreate": n[1] || (n[1] = (a) => y.value = a),
            "create-resource": e.createResource,
            onPerms: K,
            onRead: g,
            onCreate: w,
            onUpdate: F,
            onDrop: I,
            onError: z,
            onModifiedData: T,
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
            "save-validator": e.saveValidator,
            "before-emit-update": e.beforeEmitUpdate,
            "hidden-save": e.hiddenSave,
            "hidden-drop": e.hiddenDrop,
            "hidden-buttons": e.hiddenButtons,
            "on-create": e.onCreate,
            "on-update": e.onUpdate,
            "data-state-config": e.dataStateConfig,
            "on-create-modal-callbacks": e.onCreateModalCallbacks,
            "on-update-modal-callbacks": e.onUpdateModalCallbacks,
            "on-drop-modal-callbacks": e.onDropModalCallbacks,
            "inside-modal": ""
          }, {
            item: c(({ item: a, editMode: i, loading: s, isCreate: p, canUpdate: f, canDrop: m, itemBeingEdited: $ }) => [
              B(e.$slots, "item", {
                item: a,
                loading: s,
                editMode: i,
                isCreate: p,
                canUpdate: f,
                canDrop: m,
                itemBeingEdited: $
              })
            ]),
            _: 3
          }, 8, ["modelValue", "is-create", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-confirm-data", "drop-resource", "drop-data", "update-confirm", "update-confirm-data", "update-resource", "update-data", "drop-disabled", "create-confirm", "create-confirm-data", "create-data", "create-disabled", "update-disabled", "save-validator", "before-emit-update", "hidden-save", "hidden-drop", "hidden-buttons", "on-create", "on-update", "data-state-config", "on-create-modal-callbacks", "on-update-modal-callbacks", "on-drop-modal-callbacks"])
        ]),
        _: 3
      }, 8, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "before-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), Q = {
  install: (d, k) => {
    d.component("lkt-modal-crud") === void 0 && d.component("lkt-modal-crud", H);
  }
};
export {
  O as debugLktModalCrud,
  Q as default
};
