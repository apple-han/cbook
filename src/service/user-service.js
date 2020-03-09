'use strict';
var _cc = require('util/cc');

var _user = {
    logout: function (resolver, reject) {
        _cc.request({
            url: _cc.getServerUrl('user/logout.do'),
            method: 'POST',
            success: resolver,
            error: reject
        })
    }
};

module.exports = _user
