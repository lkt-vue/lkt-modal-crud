declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
            required: true;
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
    }>> & {
        onUpdated?: (...args: any[]) => any;
        onCreated?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onRead?: (...args: any[]) => any;
        onDropped?: (...args: any[]) => any;
        onPerms?: (...args: any[]) => any;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("created" | "updated" | "update:modelValue" | "read" | "dropped" | "perms")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
            required: true;
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
    }>> & {
        onUpdated?: (...args: any[]) => any;
        onCreated?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onRead?: (...args: any[]) => any;
        onDropped?: (...args: any[]) => any;
        onPerms?: (...args: any[]) => any;
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
        createDisabled: boolean;
        updateDisabled: boolean;
        dropDisabled: boolean;
        saveValidator: Function;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
            required: true;
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
    }>> & {
        onUpdated?: (...args: any[]) => any;
        onCreated?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onRead?: (...args: any[]) => any;
        onDropped?: (...args: any[]) => any;
        onPerms?: (...args: any[]) => any;
    }, {}, {}, {}, {}, {
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
        createDisabled: boolean;
        updateDisabled: boolean;
        dropDisabled: boolean;
        saveValidator: Function;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        required: true;
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
}>> & {
    onUpdated?: (...args: any[]) => any;
    onCreated?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onRead?: (...args: any[]) => any;
    onDropped?: (...args: any[]) => any;
    onPerms?: (...args: any[]) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("created" | "updated" | "update:modelValue" | "read" | "dropped" | "perms")[], "created" | "updated" | "update:modelValue" | "read" | "dropped" | "perms", {
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
    createDisabled: boolean;
    updateDisabled: boolean;
    dropDisabled: boolean;
    saveValidator: Function;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        'pre-title': (_: {
            item: any;
            loading: any;
            editMode: any;
            isCreate: any;
            canUpdate: any;
            canDrop: any;
        }) => any;
        item: (_: {
            item: any;
            loading: any;
            editMode: any;
            isCreate: any;
            canUpdate: any;
            canDrop: any;
        }) => any;
    };
});
export default _default;
