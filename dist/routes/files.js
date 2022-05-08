"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var file_1 = require("../controller/file");
var router = (0, express_1.Router)();
router.post('/upload', file_1.uploadFileController);
exports.default = router;
