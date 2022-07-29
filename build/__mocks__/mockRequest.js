"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMockRequest = void 0;
function makeMockRequest({ params, query, body }) {
    const request = {
        params: params || {},
        query: query || {},
        body: {}
    };
    return request;
}
exports.makeMockRequest = makeMockRequest;
