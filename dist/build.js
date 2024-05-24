import { defineComponent as q, ref as t, watch as u, computed as A, resolveComponent as B, openBlock as G, createBlock as H, withCtx as v, renderSlot as g, createVNode as J } from "vue";
const k = class k {
};
k.debugEnabled = !1;
let f = k;
const s = (...d) => {
  f.debugEnabled && console.info("[LktModalCrud] ", ...d);
}, W = (d = !0) => {
  f.debugEnabled = d;
}, O = /* @__PURE__ */ q({
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
    onDropModalCallbacks: { default: () => [] },
    editing: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:editing", "read", "create", "update", "drop", "perms", "before-save"],
  setup(d, { expose: D, emit: V }) {
    const l = d, o = V;
    let R = [];
    const i = t(l.modelValue), U = t(R), y = t(null), E = t(!1), M = t(!1), h = t(l.isCreate), n = t(l.editing);
    u(() => l.modelValue, (e) => i.value = e), u(() => l.editing, (e) => n.value = e), u(i, (e) => o("update:modelValue", e), { deep: !0 }), u(n, (e) => o("update:editing", e));
    const z = (e) => E.value = !0, w = (e) => o("read", e), I = (e) => {
      s("Detected create on Item Crud", e), o("create", e);
    }, F = (e) => {
      s("Detected update on Item Crud", e), o("update", e);
    }, S = (e) => {
      s("Detected drop on Item Crud", e), o("drop", e);
    }, T = () => {
      s("Detected before save on Item Crud"), o("before-save");
    }, K = (e) => M.value = e, L = (e) => {
      U.value = e, o("perms", e);
    }, N = A(() => M.value ? l.editedCloseConfirm : "");
    return D({
      doRefresh: () => {
        y.value.doRefresh();
      }
    }), (e, r) => {
      const $ = B("lkt-item-crud"), P = B("lkt-modal");
      return G(), H(P, {
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
        "close-confirm": N.value,
        "close-confirm-key": e.editedCloseConfirmKey
      }, {
        "pre-title": v(({ item: a, loading: p, editMode: m, isCreate: c, canUpdate: C, canDrop: b }) => [
          g(e.$slots, "pre-title", {
            item: a,
            loading: p,
            editMode: m,
            isCreate: c,
            canUpdate: C,
            canDrop: b
          })
        ]),
        default: v(() => [
          J($, {
            ref: (a) => y.value = a,
            modelValue: i.value,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => i.value = a),
            editing: n.value,
            "onUpdate:editing": r[1] || (r[1] = (a) => n.value = a),
            "is-create": h.value,
            "onUpdate:isCreate": r[2] || (r[2] = (a) => h.value = a),
            "create-resource": e.createResource,
            onPerms: L,
            onRead: w,
            onCreate: I,
            onUpdate: F,
            onDrop: S,
            onError: z,
            onModifiedData: K,
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
            onBeforeSave: T,
            "inside-modal": ""
          }, {
            item: v(({ item: a, editMode: p, loading: m, isCreate: c, canUpdate: C, canDrop: b, itemBeingEdited: j }) => [
              g(e.$slots, "item", {
                item: a,
                loading: m,
                editMode: p,
                isCreate: c,
                canUpdate: C,
                canDrop: b,
                itemBeingEdited: j
              })
            ]),
            _: 3
          }, 8, ["modelValue", "editing", "is-create", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-confirm-data", "drop-resource", "drop-data", "update-confirm", "update-confirm-data", "update-resource", "update-data", "drop-disabled", "create-confirm", "create-confirm-data", "create-data", "create-disabled", "update-disabled", "save-validator", "before-emit-update", "hidden-save", "hidden-drop", "hidden-buttons", "on-create", "on-update", "data-state-config", "on-create-modal-callbacks", "on-update-modal-callbacks", "on-drop-modal-callbacks"])
        ]),
        _: 3
      }, 8, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "before-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), X = {
  install: (d, D) => {
    d.component("lkt-modal-crud") === void 0 && d.component("lkt-modal-crud", O);
  }
};
export {
  W as debugLktModalCrud,
  X as default
};
