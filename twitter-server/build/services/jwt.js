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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//declare jwt secret for token
const jwt_secret = "omkar234";
class JWTservice {
    static generateTokenUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                id: user === null || user === void 0 ? void 0 : user.id, // agar user hoga toh id
                email: user === null || user === void 0 ? void 0 : user.id //email 
            };
            const token = jsonwebtoken_1.default.sign(payload, jwt_secret);
            //return that generated token
            return token;
        });
    }
}
exports.default = JWTservice;
