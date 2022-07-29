"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMockResponse = void 0;
function makeMockResponse() {
    const response = {
        state: {}
    };
    response.status = (status) => {
        response.state.status = status;
        return response;
    };
    response.json = (json) => {
        response.state.json = json;
        return response;
    };
    return response;
}
exports.makeMockResponse = makeMockResponse;
