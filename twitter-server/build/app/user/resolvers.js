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
exports.resolvers = void 0;
const axios_1 = __importDefault(require("axios"));
const import_1 = require("../../clients/db/import");
const jwt_1 = __importDefault(require("../../services/jwt"));
const queries = {
    verifyGoogleToken: (parent, { token }) => __awaiter(void 0, void 0, void 0, function* () {
        const googleToken = token; //google token
        //url of google
        const googleBaseUrl = new URL("https://oauth2.googleapis.com/tokeninfo");
        googleBaseUrl.searchParams.set("id_token", googleToken);
        //call to auth using axios and getting data
        const { data } = yield axios_1.default.get(googleBaseUrl.toString(), {
            responseType: 'json'
        });
        //===> check for user <====
        const user = yield import_1.prismaClient.user.findUnique({
            where: { email: data.email }
        });
        //create new user
        if (!user) {
            yield import_1.prismaClient.user.create({
                data: {
                    email: data.email,
                    firstName: data.given_name,
                    lastName: data.family_name,
                    profileImageURL: data.picture
                }
            });
        }
        // generate token for above user
        const userInputDb = yield import_1.prismaClient.user.findUnique({ where: { email: data.email } });
        if (!userInputDb) {
            throw new Error("user with email doesnt exist");
        }
        const newToken = jwt_1.default.generateTokenUser(userInputDb);
        return newToken;
    }),
};
exports.resolvers = { queries };
