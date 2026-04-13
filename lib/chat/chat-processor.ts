"use strict;"

Object.defineProperty(exports, "__esModule", { value: true });
exports.processMessage = exports.isRestricted = void 0;

const processMessage = (message) => {
    // Bypass all restrictions
    return message;
};

exports.processMessage = processMessage;

const isRestricted = () => {
    return false; // Always uncensored
};

exports.isRestricted = isRestricted;