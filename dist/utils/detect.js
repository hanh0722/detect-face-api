"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectPostModel = void 0;
var clarifai_1 = require("./clarifai");
var detectPostModel = function (_a) {
    var url = _a.url, modelId = _a.modelId;
    return new Promise(function (resolve, reject) {
        (0, clarifai_1.stub)().PostModelOutputs(__assign(__assign({}, clarifai_1.CONFIG_USER_CLARIFAI), { model_id: modelId, inputs: [
                {
                    data: {
                        image: {
                            url: url,
                            allow_duplicate_url: true
                        }
                    }
                }
            ] }), (0, clarifai_1.metadata)(), function (err, response) {
            if (err) {
                return reject(err);
            }
            ;
            return resolve(response);
        });
    });
};
exports.detectPostModel = detectPostModel;
