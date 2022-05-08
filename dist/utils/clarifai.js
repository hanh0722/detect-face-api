"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG_USER_CLARIFAI = exports.stub = exports.metadata = void 0;
var key_1 = require("../constant/key");
var _a = require("clarifai-nodejs-grpc"), ClarifaiStub = _a.ClarifaiStub, grpc = _a.grpc;
var metadata = function () {
    var metadata = new grpc.Metadata();
    metadata.set("authorization", "Key " + process.env[key_1.CLARIFAI_API_KEY]);
    return metadata;
};
exports.metadata = metadata;
var stub = function () {
    return ClarifaiStub.grpc();
};
exports.stub = stub;
exports.CONFIG_USER_CLARIFAI = {
    user_id: process.env[key_1.USER_ID_CLARIFAI],
    app_id: process.env[key_1.APP_ID_CLARIFAI],
};
