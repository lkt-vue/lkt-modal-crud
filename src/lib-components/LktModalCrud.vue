<script lang="ts">
export default {name: 'LktModalCrud', inheritAttrs: false};
</script>

<script setup lang="ts">
import {computed, ref, useSlots, watch} from "vue";

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

    createDisabled: {type: Boolean, default: false},
    updateDisabled: {type: Boolean, default: false},
    dropDisabled: {type: Boolean, default: false},

    saveValidator: {type: Function, required: false, default: () => true},

});

const slots = useSlots();

const emit = defineEmits(['update:modelValue', 'read', 'create', 'update', 'drop', 'perms']);

const item = ref(props.modelValue),
    perms = ref([]),
    crudComponent = ref(null),
    hasErrors = ref(false),
    hasModifiedData = ref(false);

watch(() => props.modelValue, v => item.value = v);
watch(item, (v) => emit('update:modelValue', v), {deep: true});

const onReadError = (status: number) => hasErrors.value = true,
    onRead = (r: any) => emit('read', r),
    onCreate = (r: any) => emit('create', r),
    onUpdate = (r: any) => emit('update', r),
    onDrop = (r: any) => emit('drop', r),
    onModifiedData = (v: boolean) => hasModifiedData.value = v,
    onPerms = (p: string[]) => {
        perms.value = p;
        emit('perms', p);
    };

const closeConfirm = computed(() => {
    return hasModifiedData.value ? props.editedCloseConfirm : '';
})
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
               v-bind:disabled-close="disabledClose"
               v-bind:disabled-veil-click="disabledVeilClick"
               v-bind:close-confirm="closeConfirm"
               v-bind:close-confirm-key="editedCloseConfirmKey"
    >

        <template v-if="!!slots['pre-title']" v-slot:pre-title="{item, loading, editMode, isCreate, canUpdate, canDrop}">
            <slot
                name="pre-title"
                v-bind:item="item"
                v-bind:loading="loading"
                v-bind:edit-mode="editMode"
                v-bind:is-create="isCreate"
                v-bind:can-update="canUpdate"
                v-bind:can-drop="canDrop"
            ></slot>
        </template>

        <lkt-item-crud
            :ref="(el:any) => crudComponent = el"
            v-model="item"
            v-bind:create-resource="createResource"
            v-on:perms="onPerms"
            v-on:read="onRead"
            v-on:create="onCreate"
            v-on:update="onUpdate"
            v-on:drop="onDrop"
            v-on:error="onReadError"
            v-on:modified-data="onModifiedData"
            v-bind:read-resource="readResource"
            v-bind:read-data="readData"
            v-bind:drop-confirm="dropConfirm"
            v-bind:drop-resource="dropResource"
            v-bind:drop-data="dropData"
            v-bind:update-confirm="updateConfirm"
            v-bind:update-resource="updateResource"
            v-bind:update-data="updateData"
            v-bind:drop-disabled="dropDisabled"
            v-bind:create-disabled="createDisabled"
            v-bind:update-disabled="updateDisabled"
            v-bind:is-create="isCreate"
            v-bind:save-validator="saveValidator"
            v-bind:hidden-save="hiddenSave"
            v-bind:hidden-drop="hiddenDrop"
            v-bind:hidden-buttons="hiddenButtons"
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
                ></slot>
            </template>
        </lkt-item-crud>
    </lkt-modal>
</template>