import { defineComponent as F, ref as l, watch as S, computed as K, resolveComponent as B, openBlock as L, createBlock as U, withCtx as p, renderSlot as V, createVNode as $ } from "vue";
const b = class b {
};
b.debugEnabled = !1;
let u = b;
const y = (...e) => {
  u.debugEnabled && console.info("[LktHttpClient] ", ...e);
}, G = (e = !0) => {
  u.debugEnabled = e;
}, A = { name: "LktModalCrud", inheritAttrs: !1 }, H = /* @__PURE__ */ F({
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
  setup(e, { expose: C, emit: q }) {
    const o = e, d = q;
    let R = [];
    const r = l(o.modelValue), x = l(R), v = l(null), j = l(!1), D = l(!1), g = l(o.isCreate);
    S(() => o.modelValue, (t) => r.value = t), S(r, (t) => d("update:modelValue", t), { deep: !0 });
    const z = (t) => j.value = !0, M = (t) => d("read", t), h = (t) => {
      y("Detected create on Item Crud", t), d("create", t);
    }, k = (t) => {
      y("Detected update on Item Crud", t), d("update", t);
    }, O = (t) => {
      y("Detected drop on Item Crud", t), d("drop", t);
    }, E = (t) => D.value = t, w = (t) => {
      x.value = t, d("perms", t);
    }, N = K(() => D.value ? o.editedCloseConfirm : "");
    return C({
      doRefresh: () => {
        v.value.doRefresh();
      }
    }), (t, i) => {
      const I = B("lkt-item-crud"), T = B("lkt-modal");
      return L(), U(T, {
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
        "pre-title": p(({ item: a, loading: n, editMode: c, isCreate: s, canUpdate: f, canDrop: m }) => [
          V(t.$slots, "pre-title", {
            item: a,
            loading: n,
            editMode: c,
            isCreate: s,
            canUpdate: f,
            canDrop: m
          })
        ]),
        default: p(() => [
          $(I, {
            ref: (a) => v.value = a,
            modelValue: r.value,
            "onUpdate:modelValue": i[0] || (i[0] = (a) => r.value = a),
            "is-create": g.value,
            "onUpdate:isCreate": i[1] || (i[1] = (a) => g.value = a),
            "create-resource": e.createResource,
            onPerms: w,
            onRead: M,
            onCreate: h,
            onUpdate: k,
            onDrop: O,
            onError: z,
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
            "on-create": h,
            "on-update": k
          }, {
            item: p(({ item: a, editMode: n, loading: c, isCreate: s, canUpdate: f, canDrop: m }) => [
              V(t.$slots, "item", {
                item: a,
                loading: c,
                editMode: n,
                isCreate: s,
                canUpdate: f,
                canDrop: m
              })
            ]),
            _: 3
          }, 8, ["modelValue", "is-create", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-confirm-data", "drop-resource", "drop-data", "update-confirm", "update-confirm-data", "update-resource", "update-data", "drop-disabled", "create-confirm", "create-confirm-data", "create-data", "create-disabled", "update-disabled", "save-validator", "hidden-save", "hidden-drop", "hidden-buttons"])
        ]),
        _: 3
      }, 8, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "before-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), J = {
  install: (e, C) => {
    e.component("lkt-modal-crud") === void 0 && e.component("lkt-modal-crud", H);
  }
};
export {
  G as debugLktModalCrud,
  J as default
};
