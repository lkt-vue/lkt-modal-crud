import { defineComponent as P, ref as o, watch as k, computed as j, resolveComponent as B, openBlock as q, createBlock as A, withCtx as c, renderSlot as V, createVNode as G } from "vue";
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
    dataStateConfig: { default: () => ({}) }
  },
  emits: ["update:modelValue", "read", "create", "update", "drop", "perms"],
  setup(d, { expose: v, emit: R }) {
    const l = d, t = R;
    let M = [];
    const r = o(l.modelValue), E = o(M), D = o(null), z = o(!1), y = o(!1), h = o(l.isCreate);
    k(() => l.modelValue, (e) => r.value = e), k(r, (e) => t("update:modelValue", e), { deep: !0 });
    const U = (e) => z.value = !0, g = (e) => t("read", e), w = (e) => {
      C("Detected create on Item Crud", e), t("create", e);
    }, F = (e) => {
      C("Detected update on Item Crud", e), t("update", e);
    }, I = (e) => {
      C("Detected drop on Item Crud", e), t("drop", e);
    }, T = (e) => y.value = e, K = (e) => {
      E.value = e, t("perms", e);
    }, L = j(() => y.value ? l.editedCloseConfirm : "");
    return v({
      doRefresh: () => {
        D.value.doRefresh();
      }
    }), (e, i) => {
      const S = B("lkt-item-crud"), N = B("lkt-modal");
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
        "pre-title": c(({ item: a, loading: n, editMode: s, isCreate: f, canUpdate: p, canDrop: m }) => [
          V(e.$slots, "pre-title", {
            item: a,
            loading: n,
            editMode: s,
            isCreate: f,
            canUpdate: p,
            canDrop: m
          })
        ]),
        default: c(() => [
          G(S, {
            ref: (a) => D.value = a,
            modelValue: r.value,
            "onUpdate:modelValue": i[0] || (i[0] = (a) => r.value = a),
            "is-create": h.value,
            "onUpdate:isCreate": i[1] || (i[1] = (a) => h.value = a),
            "create-resource": e.createResource,
            onPerms: K,
            onRead: g,
            onCreate: w,
            onUpdate: F,
            onDrop: I,
            onError: U,
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
            "inside-modal": ""
          }, {
            item: c(({ item: a, editMode: n, loading: s, isCreate: f, canUpdate: p, canDrop: m, itemBeingEdited: $ }) => [
              V(e.$slots, "item", {
                item: a,
                loading: s,
                editMode: n,
                isCreate: f,
                canUpdate: p,
                canDrop: m,
                itemBeingEdited: $
              })
            ]),
            _: 3
          }, 8, ["modelValue", "is-create", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-confirm-data", "drop-resource", "drop-data", "update-confirm", "update-confirm-data", "update-resource", "update-data", "drop-disabled", "create-confirm", "create-confirm-data", "create-data", "create-disabled", "update-disabled", "save-validator", "before-emit-update", "hidden-save", "hidden-drop", "hidden-buttons", "on-create", "on-update", "data-state-config"])
        ]),
        _: 3
      }, 8, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "before-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), Q = {
  install: (d, v) => {
    d.component("lkt-modal-crud") === void 0 && d.component("lkt-modal-crud", H);
  }
};
export {
  O as debugLktModalCrud,
  Q as default
};
