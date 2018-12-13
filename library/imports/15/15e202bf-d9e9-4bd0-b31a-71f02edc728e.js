"use strict";
cc._RF.push(module, '15e20K/2elL0LMacfAu3HKO', 'SelectLayer');
// Scripts/SelectLayer.js

"use strict";

var UILoader = require("./UILoader");
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var _this = this;

        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            cc.log("触发点击事件");
            UILoader.destroy(_this.node);
        });
    }
});

cc._RF.pop();