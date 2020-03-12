'use strict';
require("./index.css");
const _cc = require("util/cc.js");
const _user = require("service/user-service.js");
const _cart = require("service/cart-service.js");

// 导航
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
        });
        // 退出
        $('.js-logout').click(function () {
            _user.logout(function(res){
                window.location.reload()
            }, function (errMsg){
                _cc.errorTips(errMsg);
            });
        })
    },
    // 加载用户信息
    loadUserInfo: function () {
        _user.checkLogin(function(res){
            $('.user.not-login').hide().siblings('.user.login').show()
                .find('username').text(res.username);
        }, function (errMsg){
            // do nothings
        });
    },
    //加载购物车的信息
    loadCartCount: function () {
        _cart.getCartCount(function(res){
            $('nav .cart-count').text(res || 0);
        }, function (errMsg){
            $('nav .cart-count').text(0);
        });
    },
};

module.exports = nav.init();

