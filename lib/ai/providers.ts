"use strict;"

Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAPIKey = void 0;

const validateAPIKey = (key, provider) => {
    if (!key) return false;
    switch (provider) {
        case "lm-studio":
            return key.startsWith("lm-studio-");
        case "openrouter":
            return key.startsWith("sk-or-");
        case "e2b":
            return key.startsWith("e2b-");
        default:
            return false;
    }
};

exports.validateAPIKey = validateAPIKey;

exports.getProvider = (apiKey) => {
    if (validateAPIKey(apiKey, "lm-studio")) return "lm-studio";
    if (validateAPIKey(apiKey, "openrouter")) return "openrouter";
    if (validateAPIKey(apiKey, "e2b")) return "e2b";
    return null;
};

exports.isLocalInference = (config) => {
    return !!config.ssh;
};