import { defineComponent as T, ref as o, watch as h, computed as F, resolveComponent as k, openBlock as K, createBlock as L, withCtx as p, renderSlot as S, createVNode as $ } from "vue";
const C = class C {
};
C.debugEnabled = !1;
let n = C;
const y = (...e) => {
  n.debugEnabled && console.info("[LktModalCrud] ", ...e);
}, H = (e = !0) => {
  n.debugEnabled = e;
}, A = { name: "LktModalCrud", inheritAttrs: !1 }, P = /* @__PURE__ */ T({
  ...A,
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
  setup(e, { expose: b, emit: B }) {
    const l = e, d = B;
    let V = [];
    const r = o(l.modelValue), q = o(V), v = o(null), R = o(!1), D = o(!1), g = o(l.isCreate);
    h(() => l.modelValue, (t) => r.value = t), h(r, (t) => d("update:modelValue", t), { deep: !0 });
    const x = (t) => R.value = !0, M = (t) => d("read", t), j = (t) => {
      y("Detected create on Item Crud", t), d("create", t);
    }, z = (t) => {
      y("Detected update on Item Crud", t), d("update", t);
    }, O = (t) => {
      y("Detected drop on Item Crud", t), d("drop", t);
    }, E = (t) => D.value = t, w = (t) => {
      q.value = t, d("perms", t);
    }, N = F(() => D.value ? l.editedCloseConfirm : "");
    return b({
      doRefresh: () => {
        v.value.doRefresh();
      }
    }), (t, i) => {
      const U = k("lkt-item-crud"), I = k("lkt-modal");
      return K(), L(I, {
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
        "pre-title": p(({ item: a, loading: u, editMode: c, isCreate: f, canUpdate: s, canDrop: m }) => [
          S(t.$slots, "pre-title", {
            item: a,
            loading: u,
            editMode: c,
            isCreate: f,
            canUpdate: s,
            canDrop: m
          })
        ]),
        default: p(() => [
          $(U, {
            ref: (a) => v.value = a,
            modelValue: r.value,
            "onUpdate:modelValue": i[0] || (i[0] = (a) => r.value = a),
            "is-create": g.value,
            "onUpdate:isCreate": i[1] || (i[1] = (a) => g.value = a),
            "create-resource": e.createResource,
            onPerms: w,
            onRead: M,
            onCreate: j,
            onUpdate: z,
            onDrop: O,
            onError: x,
            onModifiedData: E,
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
            "hidden-save": e.hiddenSave,
            "hidden-drop": e.hiddenDrop,
            "hidden-buttons": e.hiddenButtons,
            "on-create": e.onCreate,
            "on-update": e.onUpdate,
            "inside-modal": ""
          }, {
            item: p(({ item: a, editMode: u, loading: c, isCreate: f, canUpdate: s, canDrop: m }) => [
              S(t.$slots, "item", {
                item: a,
                loading: c,
                editMode: u,
                isCreate: f,
                canUpdate: s,
                canDrop: m
              })
            ]),
            _: 3
          }, 8, ["modelValue", "is-create", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-confirm-data", "drop-resource", "drop-data", "update-confirm", "update-confirm-data", "update-resource", "update-data", "drop-disabled", "create-confirm", "create-confirm-data", "create-data", "create-disabled", "update-disabled", "save-validator", "hidden-save", "hidden-drop", "hidden-buttons", "on-create", "on-update"])
        ]),
        _: 3
      }, 8, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "before-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), J = {
  install: (e, b) => {
    e.component("lkt-modal-crud") === void 0 && e.component("lkt-modal-crud", P);
  }
};
export {
  H as debugLktModalCrud,
  J as default
};
