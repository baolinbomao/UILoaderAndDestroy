"use strict";
cc._RF.push(module, '7b7fffokbxMc5FCW2jR9+E/', 'NodeNode');
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