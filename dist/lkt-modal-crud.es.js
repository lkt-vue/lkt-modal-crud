import { defineComponent as N, useSlots as j, ref as l, watch as C, computed as O, resolveComponent as b, openBlock as T, createBlock as E, createSlots as K, withCtx as m, createVNode as I, renderSlot as k, unref as F } from "vue";
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
  setup(e, { emit: f }) {
    const r = e, v = j(), d = f, o = l(r.modelValue), S = l([]), g = l(null), D = l(!1), p = l(!1);
    C(() => r.modelValue, (t) => o.value = t), C(o, (t) => d("update:modelValue", t), { deep: !0 });
    const V = (t) => D.value = !0, h = (t) => d("read", t), q = (t) => d("create", t), B = (t) => d("update", t), R = (t) => d("drop", t), w = (t) => p.value = t, x = (t) => {
      S.value = t, d("perms", t);
    }, z = O(() => p.value ? r.editedCloseConfirm : "");
    return (t, y) => {
      const L = b("lkt-item-crud"), M = b("lkt-modal");
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
        default: m(() => [
          I(L, {
            ref: (a) => g.value = a,
            modelValue: o.value,
            "onUpdate:modelValue": y[0] || (y[0] = (a) => o.value = a),
            "create-resource": e.createResource,
            onPerms: x,
            onRead: h,
            onCreate: q,
            onUpdate: B,
            onDrop: R,
            onError: V,
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
            "save-validator": e.saveValidator
          }, {
            item: m(({ item: a, editMode: i, loading: u, isCreate: n, canUpdate: s, canDrop: c }) => [
              k(t.$slots, "item", {
                item: a,
                loading: u,
                editMode: i,
                isCreate: n,
                canUpdate: s,
                canDrop: c
              })
            ]),
            _: 3
          }, 8, ["modelValue", "create-resource", "read-resource", "read-data", "drop-confirm", "drop-resource", "drop-data", "update-confirm", "update-resource", "update-data", "drop-disabled", "create-disabled", "update-disabled", "is-create", "save-validator"])
        ]),
        _: 2
      }, [
        F(v)["pre-title"] ? {
          name: "pre-title",
          fn: m(({ item: a, loading: i, editMode: u, isCreate: n, canUpdate: s, canDrop: c }) => [
            k(t.$slots, "pre-title", {
              item: a,
              loading: i,
              editMode: u,
              isCreate: n,
              canUpdate: s,
              canDrop: c
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "show-close", "disabled-close", "disabled-veil-click", "close-confirm", "close-confirm-key"]);
    };
  }
}), ee = {
  install: (e, f) => {
    e.component("lkt-modal-crud") === void 0 && e.component("lkt-modal-crud", J), e.component("lkt-button") === void 0 && e.use(U), e.component("lkt-field-switch") === void 0 && e.use($), e.component("lkt-item-crud") === void 0 && e.use(A), e.component("lkt-loader") === void 0 && e.use(P), e.component("lkt-modal") === void 0 && e.use(G);
  }
};
export {
  ee as default
};
