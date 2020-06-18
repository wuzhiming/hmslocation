"use strict";
const Path = require("fire-path");
const Fs = require("fire-fs");

let Utils = Editor.require("packages://cocos-services/panel/utils/utils.js");
let ProjHelper = Editor.require("packages://cocos-services/panel/utils/projHelper.js");

module.exports = {
    /**
     * 开启服务时会调用此函数，在此函数中要完成的工作：
     *  若服务存在 js 版本的 sdk，则在此处就应该将 sdk 引入到用户的项目中
     * @param {String} projectPath 项目根路径
     * @param {Object} params 服务的参数 ( 若未填写则为 null )
     */
    onServiceEnable(projectPath, params) {
        
    },

    /**
     * 关闭服务时会调用此函数，在此函数中要完成的工作：
     *  将开启服务时安装的 sdk 从用户项目中移除引用并删除
     * @param {String} projectPath 项目根路径
     * @param {Object} params 服务的参数(若未填写则为 null)
     */
    onServiceDisable(projectPath, params) {
        
    },

    /**
     * 当 Creator 构建项目时，且当前服务处于开启状态会调用此函数，在此函数中要完成的工作：
     *   将对应服务的 sdk 集成到项目中
     * @param {Object} options 编译选项
     * @param {Object} params 服务的参数(若未填写则为 null)
     */
    onBuildedProjectEnable(options, params) {
        
    },

    /**
     * 当 Creator 构建项目时，且当前服务处于关闭状态会调用此函数，在此函数中要完成的工作：
     *   将对应服务的 sdk 集成到项目中
     * @param {Object} options 编译选项
     * @param {Object} params 服务的参数(若未填写则为 null)
     */
    onBuildedProjectDisable(options, params) {
       
    },
};