"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCors = void 0;
var UseCors = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
};
exports.UseCors = UseCors;
