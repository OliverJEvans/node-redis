"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = void 0;
function transformArguments(mode) {
    const args = ['FUNCTION', 'FLUSH'];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
