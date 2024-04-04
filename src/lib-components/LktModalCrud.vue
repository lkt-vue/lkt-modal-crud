<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {debug} from "../functions/debug";
import {LktObject} from "lkt-ts-interfaces";

const props = withDefaults(defineProps<{
    // Modal props
    palette: string
    size: string
    preTitle: string
    showClose: boolean
    disabledClose: boolean
    disabledVeilClick: boolean
    modalName: string
    modalKey: string
    zIndex: number
    editedCloseConfirm: string
    editedCloseConfirmKey: string|number
    beforeClose: Function|undefined

    // Item CRUD props
    modelValue: LktObject
    title: string
    editModeText: string
    saveText: string
    dropText: string
    hiddenSave: boolean
    hiddenDrop: boolean
    hiddenButtons: boolean
    readResource: string
    createResource: string
    updateResource: string
    dropResource: string
    readData: LktObject
    createData: LktObject
    updateData: LktObject
    dropData: LktObject
    isCreate: boolean
    createConfirm: string
    updateConfirm: string
    dropConfirm: string
    createConfirmData: LktObject
    updateConfirmData: LktObject
    dropConfirmData: LktObject
    createDisabled: boolean
    updateDisabled: boolean
    dropDisabled: boolean
    saveValidator: Function
    beforeEmitUpdate: Function|undefined
    onCreate: Function|undefined
    onUpdate: Function|undefined
    insideModal: boolean
    dataStateConfig: LktObject
}>(), {
    // Modal props
    palette: '',
    size: '',
    preTitle: '',
    showClose: true,
    disabledClose: false,
    disabledVeilClick: false,
    modalName: '',
    modalKey: '_',
    zIndex: 500,
    editedCloseConfirm: '',
    editedCloseConfirmKey: '_',
    beforeClose: undefined,

    // Item CRUD props
    modelValue: () => ({}),
    title: '',
    editModeText: 'Edition Mode',
    saveText: 'Save',
    dropText: 'Delete',
    hiddenSave: false,
    hiddenDrop: false,
    hiddenButtons: false,
    readResource: '',
    createResource: '',
    updateResource: '',
    dropResource: '',
    readData: () => ({}),
    createData: () => ({}),
    updateData: () => ({}),
    dropData: () => ({}),
    isCreate: false,
    createConfirm: '',
    updateConfirm: '',
    dropConfirm: '',
    createConfirmData: () => ({}),
    updateConfirmData: () => ({}),
    dropConfirmData: () => ({}),
    createDisabled: false,
    updateDisabled: false,
    dropDisabled: false,
    saveValidator: () => true,
    beforeEmitUpdate: undefined,
    onCreate: undefined,
    onUpdate: undefined,
    insideModal: false,
    dataStateConfig: () => ({}),
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
            v-bind:data-state-config="dataStateConfig"
            inside-modal
        >
            <template v-slot:item="{item, editMode, loading, isCreate, canUpdate, canDrop, itemBeingEdited}">
                <slot
                    name="item"
                    v-bind:item="item"
                    v-bind:loading="loading"
                    v-bind:edit-mode="editMode"
                    v-bind:is-create="isCreate"
                    v-bind:can-update="canUpdate"
                    v-bind:can-drop="canDrop"
                    v-bind:item-being-edited="itemBeingEdited"
                />
            </template>
        </lkt-item-crud>
    </lkt-modal>
</template>