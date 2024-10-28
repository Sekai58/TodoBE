"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    fullName: { type: String },
    userName: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = mongoose_1.default.model("User", userSchema);
