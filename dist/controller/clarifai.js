"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stub = exports.SettingClarifai = void 0;
var key_1 = require("../constant/key");
var _a = require("clarifai-nodejs-grpc"), ClarifaiStub = _a.ClarifaiStub, grpc = _a.grpc;
var SettingClarifai = function () {
    var metadata = new grpc.Metadata();
    metadata.set('authorization', process.env[key_1.CLARIFAI_API_KEY]);
    return metadata;
};
exports.SettingClarifai = SettingClarifai;
var stub = function () {
    return ClarifaiStub.grpc();
};
exports.stub = stub;
