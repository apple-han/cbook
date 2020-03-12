'use strict';
require('./index.css');
const _cc = require('util/cc.js');

const header = {
    init: function () {
        this.bindEvent()
    },
    onLoad: function(){
        const keyword = _cc.getUrlParam('keyword');
        if(keyword){
            $('#search-input').val(keyword)
        }
    },
    bindEvent: function () {
        const _this = this;
        $('#search-btn').click(function () {
            _this.searchSubmit();
        });
        //输入回车后绑定13代表回车键
        $('#search-input').keyup(function (e) {
            if (e.keyCode === 13){
                _this.searchSubmit();
            }
        });
    },
    searchSubmit: function () {
        const keyword = $("search-input").val();
        if(keyword){
            window.location.href = './list.html?keyword=' + keyword;
        }else{
            _cc.goHome();
        }
    }
};
header.init();
