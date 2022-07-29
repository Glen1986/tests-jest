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
Object.defineProperty(exports, "__esModule", { value: true });
const mockRequest_1 = require("../__mocks__/mockRequest");
const mockResponse_1 = require("../__mocks__/mockResponse");
const mockUser_1 = require("../__mocks__/mockUser");
const UserController_1 = require("./UserController");
jest.mock('../services/UserService', () => {
    return {
        userService: jest.fn().mockImplementation(() => {
            return {
                createUser: jest.fn()
            };
        })
    };
});
describe('UserController', () => {
    const userController = new UserController_1.UserController();
    const userMock = (0, mockUser_1.getMockUser)();
    it('Deve retornar status 201 e o usuário creádo', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = (0, mockRequest_1.makeMockRequest)({
            body: {
                name: 'algun nombre',
                email: 'algun@email.com'
            }
        });
        const response = (0, mockResponse_1.makeMockResponse)();
        yield userController.createUser(request, response);
        expect(response.state.status).toBe(201);
    }));
});
