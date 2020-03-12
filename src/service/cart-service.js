'use strict';
const _cc = require('util/cc');

var _cart = {
    getCartCount: function (resolver, reject) {
        _cc.request({
            url: _cc.getServerUrl('user/get_cart_product.do'),
            success: resolver,
            error: reject
        })
    }
};

module.exports = _cart;
