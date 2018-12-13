(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/NodeNode.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7b7fffokbxMc5FCW2jR9+E/', 'NodeNode', __filename);
// Scripts/NodeNode.js

"use strict";

var UILoader = require("./UILoader");

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {

        cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, UILoader.beforeSceneLoading);

        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, UILoader.afterSceneLaunch);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=NodeNode.js.map
        