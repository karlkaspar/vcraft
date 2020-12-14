"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cache = {};
// Allows us to get values from process.env
const accessEnv = (key, defaultValue) => {
    console.log('PROCESS ENV', process.env);
    if (!(key in process.env)) {
        if (defaultValue)
            return defaultValue;
        throw new Error(`${key} not found in process.env!`);
    }
    if (cache[key])
        return cache[key];
    cache[key] = process.env[key];
    return process.env[key];
};
exports.default = accessEnv;
