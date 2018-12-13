"use strict";
cc._RF.push(module, '74485SI9M9CEJgaHmf5NL7O', 'GameScene');
// Scripts/GameScene.js

"use strict";

var MemoryDetector = require("./MemoryDetector");
var UILoader = require("./UILoader");

cc.Class({
    extends: cc.Component,

    onLoad: function onLoad() {
        UILoader.retainScene(this.node);
        MemoryDetector.showMemoryStatus();
        var node = cc.director.getScene().children[1];
        cc.game.addPersistRootNode(node);

        UILoader.playMusic(cc.url.raw("resources/man_0_chat_6.ogg"), true, 0.5);

        // let id = UILoader.playEffect(cc.url.raw("resources/man_0_chat_5.ogg"), 0.5);
        this.scheduleOnce(function () {
            UILoader.playMusic(cc.url.raw("resources/man_0_chat_5.ogg"), true, 0.5);
        }, 10);
    },
    start: function start() {},
    onLoaderPrefabClick0: function onLoaderPrefabClick0() {
        cc.director.loadScene("GameScene2");
    },
    onLoaderPrefabClick: function onLoaderPrefabClick() {
        var _this = this;

        UILoader.loadRes("select", cc.Prefab, function (prefab) {
            UILoader.instantiate(prefab, _this.node, function (node) {});
        });
    },
    onLoaderPrefabClick1: function onLoaderPrefabClick1() {
        var spriteNode = this.node.getChildByName("icon_sprite");
        UILoader.loadRes("gamename_103", cc.SpriteFrame, function (spriteFrame) {
            UILoader.replaceSpriteTexture(spriteNode, spriteFrame);
        });
    },
    onLoaderPrefabClick2: function onLoaderPrefabClick2() {
        var spriteNode = this.node.getChildByName("icon_button");
        UILoader.loadRes("loginbackBtn", cc.SpriteFrame, function (spriteFrame) {
            UILoader.replaceButtonTexture(spriteNode, spriteFrame, spriteFrame, spriteFrame, spriteFrame);
        });
    },
    onLoaderPrefabClick3: function onLoaderPrefabClick3() {
        var spriteNode = this.node.getChildByName("icon_sprite");
        UILoader.loadStaticRes("HotProgress2", cc.SpriteFrame, "hall", function (spriteFrame) {
            UILoader.replaceSpriteTexture(spriteNode, spriteFrame);
        });
    },
    onLoaderPrefabClick4: function onLoaderPrefabClick4() {
        UILoader.releaseStaticRes("hall");
    }
});

cc._RF.pop();