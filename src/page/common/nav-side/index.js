'use strict';
require("./index.css");
const _cc = require("util/cc.js");
var templateIndex = require("./index.string");
// 侧边导航
const navSide = {
    option:{
      name: '',
      navList:[
          {name: 'user-center',desc: '个人中心', href: "./user-center.html"},
          {name: 'order-list',desc: '我的订单', href: "./order-list.html"},
          {name: 'pass-update',desc: '修改密码', href: "./pass-update.html"},
          {name: 'about',desc: '关于cc商城', href: "./about.html"}
      ]
    },
    init: function (option) {
        $.extend(this.option, option);
        this.renderNav();
    },
    //渲染导航菜单
    renderNav: function () {
        // 计算active数据
        for(let i = 0, iLength = this.option.navList.length; i < iLength; i++){
            if(this.option.navList[i].name === this.option.name){
                this.option.navList[0].isActive = true;
            }
        }
        // 渲染list数据
        const navHtml = _cc.renderHtml(templateIndex, {navList: this.option.navList});
        $('.nav-side').html(navHtml);
    }
};

module.exports = navSide;

