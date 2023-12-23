(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("vue"),require("lkt-modal")):typeof define=="function"&&define.amd?define(["vue","lkt-modal"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.LktModalCrud=n(e.Vue,e.LktModal))})(this,function(e,n){"use strict";const p={name:"LktModalCrud",inheritAttrs:!1},y=e.defineComponent({...p,props:{modelValue:{type:Object,required:!1,default:()=>({})},palette:{type:String,default:""},size:{type:String,default:""},preTitle:{type:String,default:""},title:{type:String,default:""},loading:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},disabledClose:{type:Boolean,default:!1},disabledVeilClick:{type:Boolean,default:!1},modalName:{type:String,default:""},modalKey:{type:[String,Number],default:"_"},zIndex:{type:Number,default:500},editModeText:{type:String,default:"Edition Mode"},saveText:{type:String,default:"Save"},dropText:{type:String,default:"Delete"},readResource:{type:String,required:!0},createResource:{type:String,required:!1},updateResource:{type:String,required:!1},dropResource:{type:String,required:!1},readData:{type:Object,required:!1,default:()=>({})},createData:{type:Object,required:!1,default:()=>({})},updateData:{type:Object,required:!1,default:()=>({})},dropData:{type:Object,required:!1,default:()=>({})},saveIsCreate:{type:Boolean,default:!1},createConfirm:{type:String,default:""},updateConfirm:{type:String,default:""},dropConfirm:{type:String,default:""},createDisabled:{type:Boolean,default:!1},updateDisabled:{type:Boolean,default:!1},dropDisabled:{type:Boolean,default:!1}},emits:["update:modelValue","read","created","updated","dropped","perms"],setup(t,{emit:f}){const a=t,m=e.useSlots(),C=f,s=e.ref(a.modelValue),b=e.ref([]),i=e.ref(!1),k=e.ref(null),o=e.ref(a.loading);e.watch(()=>a.modelValue,r=>s.value=r),e.watch(()=>a.loading,r=>o.value=r),e.watch(s,()=>C("update:modelValue",s.value));const S=()=>{n.closeModal(a.modalName,a.modalKey)},g=e.computed(()=>a.saveIsCreate?a.createConfirm:a.updateConfirm),w=e.computed(()=>a.saveIsCreate?a.createResource:a.updateResource),D=e.computed(()=>a.saveIsCreate?a.createData:a.updateData),x=e.computed(()=>a.saveIsCreate?a.createDisabled:a.updateDisabled);return(r,l)=>{const c=e.resolveComponent("lkt-button"),V=e.resolveComponent("lkt-field-switch"),B=e.resolveComponent("lkt-item-crud"),M=e.resolveComponent("lkt-modal");return e.openBlock(),e.createBlock(M,{"pre-title":t.preTitle,title:t.title,"modal-name":t.modalName,"modal-key":t.modalKey,"z-index":t.zIndex,palette:t.palette,size:t.size,loading:o.value,"show-close":t.showClose,"disabled-close":t.disabledClose,"disabled-veil-click":t.disabledVeilClick},e.createSlots({"button-drop":e.withCtx(({item:d})=>[e.unref(m)["button-drop"]?e.renderSlot(r.$slots,"button-drop",{key:0,item:d,editMode:i.value}):e.withDirectives((e.openBlock(),e.createBlock(c,{key:1,palette:"danger",disabled:t.dropDisabled,"confirm-modal":t.dropConfirm,resource:t.dropResource,"resource-data":t.dropData,onLoading:l[0]||(l[0]=u=>o.value=!0),onLoaded:l[1]||(l[1]=u=>o.value=!1),onClick:S},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.dropText),1)]),_:1},8,["disabled","confirm-modal","resource","resource-data"])),[[e.vShow,!o.value]])]),"button-save":e.withCtx(({item:d})=>[e.unref(m)["button-save"]?e.renderSlot(r.$slots,"button-save",{key:0,item:d,editMode:i.value}):e.withDirectives((e.openBlock(),e.createBlock(c,{key:1,palette:"success",disabled:x.value,"confirm-modal":g.value,resource:w.value,"resource-data":D.value,onLoading:l[2]||(l[2]=u=>o.value=!0),onLoaded:l[3]||(l[3]=u=>o.value=!1)},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.saveText),1)]),_:1},8,["disabled","confirm-modal","resource","resource-data"])),[[e.vShow,!o.value]])]),"button-edition":e.withCtx(({item:d})=>[e.withDirectives(e.createVNode(V,{modelValue:i.value,"onUpdate:modelValue":l[4]||(l[4]=u=>i.value=u),label:t.editModeText},null,8,["modelValue","label"]),[[e.vShow,!o.value]])]),default:e.withCtx(()=>[e.createVNode(B,{ref:d=>k.value=d,modelValue:s.value,"onUpdate:modelValue":l[5]||(l[5]=d=>s.value=d),"read-resource":t.readResource,"read-data":t.readData,"create-resource":t.createResource,"update-resource":t.updateResource,"drop-resource":t.dropResource,onPerms:l[6]||(l[6]=d=>b.value=d),onRead:l[7]||(l[7]=d=>o.value=!1)},{item:e.withCtx(({item:d})=>[e.renderSlot(r.$slots,"item",{item:d,editMode:i.value})]),_:3},8,["modelValue","read-resource","read-data","create-resource","update-resource","drop-resource"])]),_:2},[e.unref(m)["pre-title"]?{name:"pre-title",fn:e.withCtx(({item:d})=>[e.renderSlot(r.$slots,"pre-title",{item:d,editMode:i.value})]),key:"0"}:void 0]),1032,["pre-title","title","modal-name","modal-key","z-index","palette","size","loading","show-close","disabled-close","disabled-veil-click"])}}});return{install:(t,f)=>{t.component("lkt-modal-crud",y)}}});