'use strict';
let Hogan = require('hogan.js');
let conf = {
    serverHost: ''
};
let _cc = {
    request: function (param) {
        let _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function (res) {
                // 登录成功
                if (res.status === 0) {
                    typeof param.success === 'function' && param.success(res.data, res.msg)
                }
                // 没有登录状态，需要强制登录
                else if (res.status === 10) {
                    _this.doLogin();
                } else if (res.status === 1) {
                    typeof param.error === 'function' && param.error(res.msg)
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText);
            }
        })
    },
    // 获取服务器地址
    getServerUrl: function(path){
        return conf.serverHost + path;
    },
    // 获取url的参数
    getUrlParam: function(name){
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        let result = window.location.search.substr(1).match(reg);
        return result? decodeURIComponent(result[2]): null;
    },
    // 渲染html
    renderHtml: function(htmlTemplate, data){
        let template = Hogan.compile(htmlTemplate),
            result = template.render(data);
        return result;
    },
    // 提示
    successTips: function(msg){
        alert(msg || '操作成功');
    },
    errorTips: function(msg){
        alert(msg || '操作失败，请重试！');
    },
    // 字段的验证
    validate: function(value, type){
        var value = $.trim(value);
        if('require' === type){
            return !!value;
        }
        if('phone' === type){
            return /^1\d{10}$/.test(value);
        }
        if('email' === type){
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    },
    doLogin: function () {
        window.location.herf = './login.html?redirect=' + encodeURIComponent(window.location.herf);
    },
    goHome: function () {
        window.location.href = './index.html';
    }
};

module.exports = _cc;
