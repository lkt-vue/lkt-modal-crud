/* eslint-disable import/prefer-default-export */
import {App} from 'vue';

import {default as modal} from './lib-components/LktModalCrud.vue';

const LktModalCrud = {
    install: (app: App, options: any) => {
        app.component('lkt-modal-crud', modal);
    }
};

export default LktModalCrud;