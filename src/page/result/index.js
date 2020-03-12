require("./index.css");
require('page/common/nav-simple/index');
let _cc = require('util/cc.js');

$(function(){
    var type = _cc.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success').show();
});
