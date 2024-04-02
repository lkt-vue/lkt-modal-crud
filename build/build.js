import { defineComponent as I, ref as o, watch as h, computed as T, resolveComponent as k, openBlock as K, createBlock as L, withCtx as p, renderSlot as S, createVNode as $ } from "vue";
const y = class y {
};
y.debugEnabled = !1;
let u = y;
const b = (...e) => {
  u.debugEnabled && console.info("[LktModalCrud] ", ...e);
}, G = (e = !0) => {
  u.debugEnabled = e;
}, P = /* @__PURE__ */ I({
  __name: "LktModalCrud",
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
    beforeEmitUpdate: { type: Function, required: !1, default: () => !0 },
    beforeClose: { type: Function, default: void 0 },
    onCreate: { type: Function, required: !1, default: () => !0 },
    onUpdate: { type: Function, required: !1, default: () => !0 }
  },
  emits: ["update:modelValue", "read", "create", "update", "drop", "perms"],
  setup(e, { expose: C, emit: B }) {
    const r = e, d = B;
    let q = [];
    const l = o(r.modelValue), V = o(q), v = o(null), R = o(!1), D = o(!1), g = o(r.isCreate);
    h(() => r.modelValue, (t) => l.value = t), h(l, (t) => d("update:modelValue", t), { deep: !0 });
    const x = (t) => R.value = !0, E = (t) => d("read", t), M = (t) => {
      b("Detected create on Item Crud", t), d("create", t);
    }, j = (t) => {
      b("Detected update on Item Crud", t), d("update", t);
    }, z = (t) => {
      b("Detected drop on Item Crud", t), d("drop", t);
    }, O = (t) => D.value = t, U = (t) => {
      V.value = t, d("perms", t);
    }, w = T(() => D.value ? r.editedCloseConfirm : "");
    return C({
      doRefresh: () => {
        v.value.doRefresh();
      }
    }), (t, i) => {
      const N = k("lkt-item-crud"), F = k("lkt-modal");
      return K(), L(F, {
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
        "close-confirm": w.value,
        "close-confirm-key": e.editedCloseConfirmKey
      }, {
        "pre-title": p(({ item: a, loading: n, editMode: f, isCreate: c, canUpdate: s, canDrop: m }) => [
          S(t.$slots, "pre-title", {
            item: a,
            loading: n,
            editMode: f,
            isCreate: c,
            canUpdate: s,
            canDrop: m
          })
        ]),
        default: p(() => [
          $(N, {
            ref: (a) => v.value = a,
            modelValue: l.value,
            "onUpdate:modelValue": i[0] || (i[0] = (a) => l.value = a),
            "is-create": g.value,
            "onUpdate:isCreate": i[1] || (i[1] = (a) => g.value = a),
            "create-resource": e.createResource,
            onPerms: U,
            onRead: E,
            onCreate: M,
            onUpdate: j,
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
            "save-validator": e.saveValidator,
            "before-emit-update": e.beforeEmitUpdate,
            "hidden-save": e.hiddenSave,
            "hidden-drop": e.hiddenDrop,
            "hidden-buttons": e.hiddenButtons,
            "on-create": e.onCreate,
            "on-update": e.onUpdate,
            "inside-modal": ""
          }, {
            item: p(({ item: a, editMode: n, loading: f, isCreate: c, canUpdate: s, canDrop: m }) => [
              S(t.$slots, "item", {
                item: a,
                loading: f,
                editMode: n,
                isCreate: c,
                canUpdate: s,
                canDrop: m
              })
            ]),
            _: 3
          }, 8, ["modelValue", "is-create", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-confirm-data", "drop-resource", "drop-data", "update-confirm", "update-confirm-data", "update-resource", "update-data", "drop-disabled", "create-confirm", "create-confirm-data", "create-data", "create-disabled", "update-disabled", "save-validator", "before-emit-update", "hidden-save", "hidden-drop", "hidden-buttons", "on-create", "on-update"])
        ]),
        _: 3
      }, 8, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "before-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), H = {
  install: (e, C) => {
    e.component("lkt-modal-crud") === void 0 && e.component("lkt-modal-crud", P);
  }
};
export {
  G as debugLktModalCrud,
  H as default
};
