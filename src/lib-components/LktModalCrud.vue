<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {debug} from "../functions/debug";

const props = defineProps({
    modelValue: {type: Object, required: false, default: () => ({})},
    palette: {type: String, default: ''},
    size: {type: String, default: ''},
    preTitle: {type: String, default: ''},
    title: {type: String, default: ''},
    showClose: {type: Boolean, default: true},
    disabledClose: {type: Boolean, default: false},
    disabledVeilClick: {type: Boolean, default: false},
    modalName: {type: String, default: ''},
    modalKey: {type: [String, Number], default: '_'},
    zIndex: {type: Number, default: 500},

    editModeText: {type: String, default: 'Edition Mode'},
    saveText: {type: String, default: 'Save'},
    dropText: {type: String, default: 'Delete'},
    hiddenSave: {type: Boolean, default: false},
    hiddenDrop: {type: Boolean, default: false},
    hiddenButtons: {type: Boolean, default: false},

    editedCloseConfirm: {type: String, default: ''},
    editedCloseConfirmKey: {type: [String, Number], default: '_'},

    readResource: {type: String, required: false},
    createResource: {type: String, required: false},
    updateResource: {type: String, required: false},
    dropResource: {type: String, required: false},

    readData: {type: Object, required: false, default: () => ({})},
    createData: {type: Object, required: false, default: () => ({})},
    updateData: {type: Object, required: false, default: () => ({})},
    dropData: {type: Object, required: false, default: () => ({})},

    isCreate: {type: Boolean, default: false},
    createConfirm: {type: String, default: ''},
    updateConfirm: {type: String, default: ''},
    dropConfirm: {type: String, default: ''},

    createConfirmData: {type: Object, default: () => ({})},
    updateConfirmData: {type: Object, default: () => ({})},
    dropConfirmData: {type: Object, default: () => ({})},

    createDisabled: {type: Boolean, default: false},
    updateDisabled: {type: Boolean, default: false},
    dropDisabled: {type: Boolean, default: false},

    saveValidator: {type: Function, required: false, default: () => true},
    beforeEmitUpdate: {type: Function, required: false, default: () => true},
    beforeClose: {type: Function, default: undefined},

    onCreate: {type: Function, required: false, default: () => true},
    onUpdate: {type: Function, required: false, default: () => true},
});

const emit = defineEmits(['update:modelValue', 'read', 'create', 'update', 'drop', 'perms']);

let _perms:string[] = [];
const item = ref(props.modelValue),
    perms = ref(_perms),
    crudComponent = ref(null),
    hasErrors = ref(false),
    hasModifiedData = ref(false),
    createMode = ref(props.isCreate);

watch(() => props.modelValue, v => item.value = v);
watch(item, (v) => emit('update:modelValue', v), {deep: true});

const onReadError = (status: number) => hasErrors.value = true,
    onRead = (r: any) => emit('read', r),
    onCreateCb = (r: any) => {
        debug('Detected create on Item Crud', r);
        emit('create', r);
    },
    onUpdateCb = (r: any) => {
        debug('Detected update on Item Crud', r);
        emit('update', r)
    },
    onDrop = (r: any) => {
        debug('Detected drop on Item Crud', r);
        emit('drop', r)
    },
    onModifiedData = (v: boolean) => hasModifiedData.value = v,
    onPerms = (p: string[]) => {
        perms.value = p;
        emit('perms', p);
    };

const closeConfirm = computed(() => {
    return hasModifiedData.value ? props.editedCloseConfirm : '';
})

defineExpose({
    doRefresh: () => {
        //@ts-ignore
        crudComponent.value.doRefresh();
    }
});
</script>

<template>
    <lkt-modal v-bind:pre-title="preTitle"
               v-bind:title="title"
               v-bind:modal-name="modalName"
               v-bind:modal-key="modalKey"
               v-bind:z-index="zIndex"
               v-bind:palette="palette"
               v-bind:size="size"
               v-bind:show-close="showClose"
               v-bind:before-close="beforeClose"
               v-bind:disabled-close="disabledClose"
               v-bind:disabled-veil-click="disabledVeilClick"
               v-bind:close-confirm="closeConfirm"
               v-bind:close-confirm-key="editedCloseConfirmKey"
    >

        <template v-slot:pre-title="{item, loading, editMode, isCreate, canUpdate, canDrop}">
            <slot
                name="pre-title"
                v-bind:item="item"
                v-bind:loading="loading"
                v-bind:edit-mode="editMode"
                v-bind:is-create="isCreate"
                v-bind:can-update="canUpdate"
                v-bind:can-drop="canDrop"
            />
        </template>

        <lkt-item-crud
            :ref="(el:any) => crudComponent = el"
            v-model="item"
            v-model:is-create="createMode"
            v-bind:create-resource="createResource"
            v-on:perms="onPerms"
            v-on:read="onRead"
            v-on:create="onCreateCb"
            v-on:update="onUpdateCb"
            v-on:drop="onDrop"
            v-on:error="onReadError"
            v-on:modified-data="onModifiedData"
            v-bind:read-resource="readResource"
            v-bind:read-data="readData"
            v-bind:drop-confirm="dropConfirm"
            v-bind:drop-confirm-data="dropConfirmData"
            v-bind:drop-resource="dropResource"
            v-bind:drop-data="dropData"
            v-bind:update-confirm="updateConfirm"
            v-bind:update-confirm-data="updateConfirmData"
            v-bind:update-resource="updateResource"
            v-bind:update-data="updateData"
            v-bind:drop-disabled="dropDisabled"
            v-bind:create-confirm="createConfirm"
            v-bind:create-confirm-data="createConfirmData"
            v-bind:create-data="createData"
            v-bind:create-disabled="createDisabled"
            v-bind:update-disabled="updateDisabled"
            v-bind:save-validator="saveValidator"
            v-bind:before-emit-update="beforeEmitUpdate"
            v-bind:hidden-save="hiddenSave"
            v-bind:hidden-drop="hiddenDrop"
            v-bind:hidden-buttons="hiddenButtons"
            v-bind:on-create="onCreate"
            v-bind:on-update="onUpdate"
            inside-modal
        >
            <template v-slot:item="{item, editMode, loading, isCreate, canUpdate, canDrop}">
                <slot
                    name="item"
                    v-bind:item="item"
                    v-bind:loading="loading"
                    v-bind:edit-mode="editMode"
                    v-bind:is-create="isCreate"
                    v-bind:can-update="canUpdate"
                    v-bind:can-drop="canDrop"
                />
            </template>
        </lkt-item-crud>
    </lkt-modal>
</template>