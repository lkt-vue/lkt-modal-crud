<script lang="ts">
export default {name: 'LktModalCrud', inheritAttrs: false};
</script>

<script setup lang="ts">
import {computed, ref, useSlots, watch} from "vue";
import {closeModal} from "lkt-modal";

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
    isLoading = ref(props.loading);

watch(() => props.modelValue, v => item.value = v);
watch(() => props.loading, v => isLoading.value = v);
watch(item, () => emit('update:modelValue', item.value));

const onDrop = () => {
    closeModal(props.modalName, props.modalKey);
};

const saveConfirm = computed(() => {
        return props.saveIsCreate
            ? props.createConfirm
            : props.updateConfirm;
    }),
    saveResource = computed(() => {
        return props.saveIsCreate
            ? props.createResource
            : props.updateResource;
    }),
    saveData = computed(() => {
        return props.saveIsCreate
            ? props.createData
            : props.updateData;
    }),
    saveDisabled = computed(() => {
        return props.saveIsCreate
            ? props.createDisabled
            : props.updateDisabled;
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
    >

        <template v-if="!!slots['pre-title']" v-slot:pre-title="{item}">
            <slot name="pre-title" v-bind:item="item" v-bind:edit-mode="editMode"></slot>
        </template>

        <template v-slot:button-drop="{item}">
            <slot v-if="!!slots['button-drop']" name="button-drop" v-bind:item="item"
                  v-bind:edit-mode="editMode"></slot>
            <lkt-button
                v-else
                v-show="!isLoading"
                palette="danger"
                v-bind:disabled="dropDisabled"
                v-bind:confirm-modal="dropConfirm"
                v-bind:resource="dropResource"
                v-bind:resource-data="dropData"
                v-on:loading="isLoading = true"
                v-on:loaded="isLoading = false"
                v-on:click="onDrop">{{dropText}}
            </lkt-button>
        </template>

        <template v-slot:button-save="{item}">
            <slot v-if="!!slots['button-save']" name="button-save" v-bind:item="item"
                  v-bind:edit-mode="editMode"></slot>
            <lkt-button
                v-else
                v-show="!isLoading"
                palette="success"
                v-bind:disabled="saveDisabled"
                v-bind:confirm-modal="saveConfirm"
                v-bind:resource="saveResource"
                v-bind:resource-data="saveData"
                v-on:loading="isLoading = true"
                v-on:loaded="isLoading = false">{{saveText}}
            </lkt-button>
        </template>

        <template v-slot:button-edition="{item}">
            <lkt-field-switch v-show="!isLoading" v-model="editMode" :label="editModeText"></lkt-field-switch>
        </template>

        <lkt-item-crud
            :ref="(el:any) => crudComponent = el"
            v-model="item"
            v-bind:read-resource="readResource"
            v-bind:read-data="readData"
            v-bind:create-resource="createResource"
            v-bind:update-resource="updateResource"
            v-bind:drop-resource="dropResource"
            v-on:perms="(p: string[]) => perms = p"
            v-on:read="isLoading = false"
        >
            <template v-slot:item="{item}">
                <slot name="item" v-bind:item="item" v-bind:edit-mode="editMode"></slot>
            </template>
        </lkt-item-crud>
    </lkt-modal>
</template>