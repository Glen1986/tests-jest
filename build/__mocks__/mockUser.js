"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockUser = void 0;
const uuid_1 = require("uuid");
const getMockUser = () => ({
    user_id: (0, uuid_1.v4)(),
    name: 'algun usuario',
    email: 'algun@email.com'
});
exports.getMockUser = getMockUser;
