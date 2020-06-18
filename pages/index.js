"use strict";

const Fs = require("fire-fs");
const Path = require('fire-path');

const Utils = Editor.require("packages://cocos-services/panel/utils/utils.js");

let locationVue = Vue.extend({
    template: Fs.readFileSync(Editor.remote.App.home + "/services/hmslocation/pages/index.html", "utf-8"),
    props: {
        params: {
            type: Object
        }
    },
    data() {
        return {
            config: {
                configPath: '',
            }
        };
    },
    created() {
        this.config = Object.assign(this.config, this.params);

    },
    watch: {
        config: {
            deep: true,
            handler(){
                this.$emit('save-param', this.config);
            }
        }
    },
    methods: {
        t: function (key, ...args) {
            return Utils.t(`hmslocation.${key}`, ...args);
        },

        _onChooseDistPathClick(event) {
            event.stopPropagation();
            let defaultPath = Path.join(Editor.Project.path);
            let res = Editor.Dialog.openFile({
                defaultPath: defaultPath,
                filters: [{name: 'application', extensions: ['json']}],
            });
            if (res && res[0]) {
                this.config.configPath = res[0];
            }
        },
    }
});
Vue.component("service-hmslocation", locationVue);