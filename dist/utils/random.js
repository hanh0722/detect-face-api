"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = void 0;
var crypto_1 = require("crypto");
var randomString = function (size) {
    return new Promise(function (resolve, reject) {
        (0, crypto_1.randomBytes)(size || 16, function (err, buffer) {
            if (err) {
                reject(err);
            }
            resolve(buffer.toString('hex'));
        });
    });
};
exports.randomString = randomString;
