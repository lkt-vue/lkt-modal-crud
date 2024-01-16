import { defineComponent as N, useSlots as j, ref as l, watch as b, computed as O, resolveComponent as v, openBlock as T, createBlock as E, createSlots as K, withCtx as c, createVNode as I, renderSlot as C, unref as F } from "vue";
import U from "lkt-button";
import $ from "lkt-field-switch";
import A from "lkt-item-crud";
import P from "lkt-loader";
import G from "lkt-modal";
const H = { name: "LktModalCrud", inheritAttrs: !1 }, J = /* @__PURE__ */ N({
  ...H,
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
    const r = e, k = j(), a = m, o = l(r.modelValue), S = l([]), h = l(null), D = l(!1), p = l(!1);
    b(() => r.modelValue, (t) => o.value = t), b(o, (t) => a("update:modelValue", t), { deep: !0 });
    const g = (t) => D.value = !0, B = (t) => a("read", t), V = (t) => a("create", t), q = (t) => a("update", t), R = (t) => a("drop", t), w = (t) => p.value = t, x = (t) => {
      S.value = t, a("perms", t);
    }, z = O(() => p.value ? r.editedCloseConfirm : "");
    return (t, y) => {
      const L = v("lkt-item-crud"), M = v("lkt-modal");
      return T(), E(M, {
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
        "close-confirm": z.value,
        "close-confirm-key": e.editedCloseConfirmKey
      }, K({
        default: c(() => [
          I(L, {
            ref: (d) => h.value = d,
            modelValue: o.value,
            "onUpdate:modelValue": y[0] || (y[0] = (d) => o.value = d),
            "create-resource": e.createResource,
            onPerms: x,
            onRead: B,
            onCreate: V,
            onUpdate: q,
            onDrop: R,
            onError: g,
            onModifiedData: w,
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
            item: c(({ item: d, editMode: i, loading: u, isCreate: n, canUpdate: s, canDrop: f }) => [
              C(t.$slots, "item", {
                item: d,
                loading: u,
                editMode: i,
                isCreate: n,
                canUpdate: s,
                canDrop: f
              })
            ]),
            _: 3
          }, 8, ["modelValue", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-resource", "drop-data", "update-confirm", "update-resource", "update-data", "drop-disabled", "create-disabled", "update-disabled", "is-create", "save-validator", "hidden-save", "hidden-drop", "hidden-buttons"])
        ]),
        _: 2
      }, [
        F(k)["pre-title"] ? {
          name: "pre-title",
          fn: c(({ item: d, loading: i, editMode: u, isCreate: n, canUpdate: s, canDrop: f }) => [
            C(t.$slots, "pre-title", {
              item: d,
              loading: i,
              editMode: u,
              isCreate: n,
              canUpdate: s,
              canDrop: f
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), ee = {
  install: (e, m) => {
    e.component("lkt-modal-crud") === void 0 && e.component("lkt-modal-crud", J), e.component("lkt-button") === void 0 && e.use(U), e.component("lkt-field-switch") === void 0 && e.use($), e.component("lkt-item-crud") === void 0 && e.use(A), e.component("lkt-loader") === void 0 && e.use(P), e.component("lkt-modal") === void 0 && e.use(G);
  }
};
export {
  ee as default
};
