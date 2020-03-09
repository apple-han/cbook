'use strict';
require('./index.css');
var _cc = require("util/cc.js");
var _user = require("service/user-service.js");

// 这其实就是一个对象
const nav = {
    init: function () {
        this.bindEvent()
        this.loadUserInfo()
        return this;
    },
    bindEvent: function () {
        // 登录的点击事件
        $('.js-login').click(function () {
            _cc.doLogin();
        });
        // 注册
        $('.js-register').click(function () {
            window.location.href = "./register.html"
        })
        // 退出
        $('.js-logout').click(function () {
            _user.logout(function(res){
                window.location.reload()
            }, function (errMsg){
                _cc.errorTips(errMsg);
            });
        })
    },
    loadUserInfo: function () {

    }
};

module.exports = nav.init();
