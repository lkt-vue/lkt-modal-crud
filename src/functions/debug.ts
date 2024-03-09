import {Settings} from "../settings/Settings";

export const debug = (...args: any[]): void => {
    if (Settings.debugEnabled) console.info('[LktModalCrud] ', ...args);
};
export const debugLktModalCrud = (state: boolean = true): void => {
    Settings.debugEnabled = state;
};