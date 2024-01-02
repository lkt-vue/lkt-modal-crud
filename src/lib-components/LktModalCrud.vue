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
    loading: {type: Boolean, default: true},
    showClose: {type: Boolean, default: true},
    disabledClose: {type: Boolean, default: false},
    disabledVeilClick: {type: Boolean, default: false},
    modalName: {type: String, default: ''},
    modalKey: {type: [String, Number], default: '_'},
    zIndex: {type: Number, default: 500},

    editModeText: {type: String, default: 'Edition Mode'},
    saveText: {type: String, default: 'Save'},
    dropText: {type: String, default: 'Delete'},

    editedCloseConfirm: {type: String, default: ''},
    editedCloseConfirmKey: {type: [String, Number], default: '_'},

    readResource: {type: String, required: true},
    createResource: {type: String, required: false},
    updateResource: {type: String, required: false},
    dropResource: {type: String, required: false},

    readData: {type: Object, required: false, default: () => ({})},
    createData: {type: Object, required: false, default: () => ({})},
    updateData: {type: Object, required: false, default: () => ({})},
    dropData: {type: Object, required: false, default: () => ({})},

    saveIsCreate: {type: Boolean, default: false},
    createConfirm: {type: String, default: ''},
    updateConfirm: {type: String, default: ''},
    dropConfirm: {type: String, default: ''},

    createDisabled: {type: Boolean, default: false},
    updateDisabled: {type: Boolean, default: false},
    dropDisabled: {type: Boolean, default: false},

});

const slots = useSlots();

const emit = defineEmits(['update:modelValue', 'read', 'created', 'updated', 'dropped', 'perms']);


const item = ref(props.modelValue),
    perms = ref([]),
    editMode = ref(false),
    crudComponent = ref(null),
    isLoading = ref(props.loading),
    hasErrors = ref(false),
    hasModifiedData = ref(false);

watch(() => props.modelValue, v => {
    item.value = v
});
watch(() => props.loading, v => isLoading.value = v);
watch(item, (v) => {
    emit('update:modelValue', v)
}, {deep: true});

const onReadError = (status: number) => {
        isLoading.value = false;
        hasErrors.value = true;
    },
    onRead = (r: any) => {
        isLoading.value = false;
        emit('read', r)
    },
    onModifiedData = (v: boolean) => {
        hasModifiedData.value = v;
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
               v-bind:loading="isLoading"
               v-bind:show-close="showClose"
               v-bind:disabled-close="disabledClose"
               v-bind:disabled-veil-click="disabledVeilClick"
               v-bind:close-confirm="closeConfirm"
               v-bind:close-confirm-key="editedCloseConfirmKey"
    >

        <template v-if="!!slots['pre-title']" v-slot:pre-title="{item}">
            <slot name="pre-title" v-bind:item="item" v-bind:edit-mode="editMode"></slot>
        </template>

        <lkt-item-crud
            :ref="(el:any) => crudComponent = el"
            v-model="item"
            v-bind:create-resource="createResource"
            v-on:perms="(p: string[]) => perms = p"
            v-on:read="onRead"
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
        >
            <template v-slot:item="{item, editMode, loading}">
                <slot name="item" v-bind:item="item" v-bind:loading="loading" v-bind:edit-mode="editMode"></slot>
            </template>
        </lkt-item-crud>
    </lkt-modal>
</template>