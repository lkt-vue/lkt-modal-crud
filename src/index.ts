/* eslint-disable import/prefer-default-export */
import {App, Plugin} from 'vue';

import {default as modal} from './lib-components/LktModalCrud.vue';
const LktModalCrud: Plugin = {
    install: (app: App, options: any) => {
        // Register plugin components
        if (app.component('lkt-modal-crud') === undefined) app.component('lkt-modal-crud', modal);
    }
};

export default LktModalCrud;