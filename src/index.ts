/* eslint-disable import/prefer-default-export */
import {App} from 'vue';

import {default as modal} from './lib-components/LktModalCrud.vue';
import LktButton from "lkt-button";
import LktFieldSwitch from "lkt-field-switch";
import LktItemCrud from "lkt-item-crud";
import LktLoader from "lkt-loader";
import LktModal from "lkt-modal";

const LktModalCrud = {
    install: (app: App, options: any) => {
        // Register plugin components
        if (app.component('lkt-modal-crud') === undefined) app.component('lkt-modal-crud', modal);

        // Register additional components
        if (app.component('lkt-button') === undefined)  app.use(LktButton);
        if (app.component('lkt-field-switch') === undefined)  app.use(LktFieldSwitch);
        if (app.component('lkt-item-crud') === undefined)  app.use(LktItemCrud);
        if (app.component('lkt-loader') === undefined)  app.use(LktLoader);
        if (app.component('lkt-modal') === undefined)  app.use(LktModal);
    }
};

export default LktModalCrud;