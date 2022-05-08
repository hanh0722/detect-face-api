"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRoutes = exports.DetectRoutes = void 0;
var detect_1 = __importDefault(require("./detect"));
exports.DetectRoutes = detect_1.default;
var files_1 = __importDefault(require("./files"));
exports.FileRoutes = files_1.default;
