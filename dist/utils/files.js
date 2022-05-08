"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileToCloud = exports.settingCloudinary = exports.unlinkPath = void 0;
var multer_1 = __importDefault(require("multer"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var cloudinary_1 = require("cloudinary");
var random_1 = require("./random");
var key_1 = require("../constant/key");
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(__dirname, 'upload'));
    },
    filename: function (req, file, cb) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, random_1.randomString)()];
                    case 1:
                        id = _a.sent();
                        cb(null, file.fieldname + '-' + id);
                        return [2 /*return*/];
                }
            });
        });
    }
});
var unlinkPath = function (path) {
    return new Promise(function (resolve, reject) {
        if (!path) {
            reject('Please provide a path of file');
        }
        fs_1.default.unlink(path, function (err) {
            if (err) {
                return reject(err);
            }
            resolve(path);
        });
    });
};
exports.unlinkPath = unlinkPath;
var settingCloudinary = function () {
    var setting = cloudinary_1.v2.config({
        cloud_name: process.env[key_1.CLOUD_NAME_CLOUDINARY],
        api_key: process.env[key_1.CLOUDINARY_KEY],
        api_secret: process.env[key_1.CLOUDINARY_SECRET_KEY],
        secure: true
    });
    return setting;
};
exports.settingCloudinary = settingCloudinary;
var uploadFileToCloud = function (path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                cloudinary_1.v2.uploader.upload(path, function (err, result) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (err) {
                                        return [2 /*return*/, reject(err)];
                                    }
                                    ;
                                    return [4 /*yield*/, (0, exports.unlinkPath)(path)];
                                case 1:
                                    _a.sent();
                                    resolve(result === null || result === void 0 ? void 0 : result.secure_url);
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
            })];
    });
}); };
exports.uploadFileToCloud = uploadFileToCloud;
exports.default = storage;