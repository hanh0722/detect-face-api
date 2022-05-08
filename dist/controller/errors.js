"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseErrorController = void 0;
var UseErrorController = function (err, req, res, next) {
    res.json({
        message: (err === null || err === void 0 ? void 0 : err.message) || 'Server Internal Error',
        code: (err === null || err === void 0 ? void 0 : err.code) || 500
    });
    next();
};
exports.UseErrorController = UseErrorController;
