declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    preTitle: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledVeilClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    modalName: {
        type: StringConstructor;
        default: string;
    };
    modalKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    editModeText: {
        type: StringConstructor;
        default: string;
    };
    saveText: {
        type: StringConstructor;
        default: string;
    };
    dropText: {
        type: StringConstructor;
        default: string;
    };
    hiddenSave: {
        type: BooleanConstructor;
        default: boolean;
    };
    hiddenDrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    hiddenButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
    editedCloseConfirm: {
        type: StringConstructor;
        default: string;
    };
    editedCloseConfirmKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    readResource: {
        type: StringConstructor;
        required: false;
    };
    createResource: {
        type: StringConstructor;
        required: false;
    };
    updateResource: {
        type: StringConstructor;
        required: false;
    };
    dropResource: {
        type: StringConstructor;
        required: false;
    };
    readData: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    createData: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    updateData: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    dropData: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    isCreate: {
        type: BooleanConstructor;
        default: boolean;
    };
    createConfirm: {
        type: StringConstructor;
        default: string;
    };
    updateConfirm: {
        type: StringConstructor;
        default: string;
    };
    dropConfirm: {
        type: StringConstructor;
        default: string;
    };
    createConfirmData: {
        type: ObjectConstructor;
        default: () => {};
    };
    updateConfirmData: {
        type: ObjectConstructor;
        default: () => {};
    };
    dropConfirmData: {
        type: ObjectConstructor;
        default: () => {};
    };
    createDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    updateDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    saveValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    beforeEmitUpdate: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    beforeClose: {
        type: FunctionConstructor;
        default: undefined;
    };
    onCreate: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    onUpdate: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
}, {
    doRefresh: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    drop: (...args: any[]) => void;
    update: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    read: (...args: any[]) => void;
    create: (...args: any[]) => void;
    perms: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    preTitle: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledVeilClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    modalName: {
        type: StringConstructor;
        default: string;
    };
    modalKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    editModeText: {
        type: StringConstructor;
        default: string;
    };
    saveText: {
        type: StringConstructor;
        default: string;
    };
    dropText: {
        type: StringConstructor;
        default: string;
    };
    hiddenSave: {
        type: BooleanConstructor;
        default: boolean;
    };
    hiddenDrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    hiddenButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
    editedCloseConfirm: {
        type: StringConstructor;
        default: string;
    };
    editedCloseConfirmKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    readResource: {
        type: StringConstructor;
        required: false;
    };
    createResource: {
        type: StringConstructor;
        required: false;
    };
    updateResource: {
        type: StringConstructor;
        required: false;
    };
    dropResource: {
        type: StringConstructor;
        required: false;
    };
    readData: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    createData: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    updateData: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    dropData: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    isCreate: {
        type: BooleanConstructor;
        default: boolean;
    };
    createConfirm: {
        type: StringConstructor;
        default: string;
    };
    updateConfirm: {
        type: StringConstructor;
        default: string;
    };
    dropConfirm: {
        type: StringConstructor;
        default: string;
    };
    createConfirmData: {
        type: ObjectConstructor;
        default: () => {};
    };
    updateConfirmData: {
        type: ObjectConstructor;
        default: () => {};
    };
    dropConfirmData: {
        type: ObjectConstructor;
        default: () => {};
    };
    createDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    updateDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    saveValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    beforeEmitUpdate: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    beforeClose: {
        type: FunctionConstructor;
        default: undefined;
    };
    onCreate: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    onUpdate: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
}>> & {
    onDrop?: ((...args: any[]) => any) | undefined;
    onCreate?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRead?: ((...args: any[]) => any) | undefined;
    onPerms?: ((...args: any[]) => any) | undefined;
}, {
    zIndex: number;
    title: string;
    size: string;
    modelValue: Record<string, any>;
    palette: string;
    preTitle: string;
    showClose: boolean;
    disabledClose: boolean;
    disabledVeilClick: boolean;
    modalName: string;
    modalKey: string | number;
    editModeText: string;
    saveText: string;
    dropText: string;
    hiddenSave: boolean;
    hiddenDrop: boolean;
    hiddenButtons: boolean;
    editedCloseConfirm: string;
    editedCloseConfirmKey: string | number;
    readData: Record<string, any>;
    createData: Record<string, any>;
    updateData: Record<string, any>;
    dropData: Record<string, any>;
    isCreate: boolean;
    createConfirm: string;
    updateConfirm: string;
    dropConfirm: string;
    createConfirmData: Record<string, any>;
    updateConfirmData: Record<string, any>;
    dropConfirmData: Record<string, any>;
    createDisabled: boolean;
    updateDisabled: boolean;
    dropDisabled: boolean;
    saveValidator: Function;
    beforeEmitUpdate: Function;
    beforeClose: Function;
    onCreate: Function;
    onUpdate: Function;
}, {}>, {
    "pre-title"?(_: {
        item: any;
        loading: any;
        editMode: any;
        isCreate: any;
        canUpdate: any;
        canDrop: any;
    }): any;
    item?(_: {
        item: any;
        loading: any;
        editMode: any;
        isCreate: any;
        canUpdate: any;
        canDrop: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
