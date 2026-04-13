"use strict;"

Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;

const { validateAPIKey, getProvider, isLocalInference } = require("../../lib/ai/providers");

const authenticate = (req, res) => {
    const { apiKey, sshConfig } = req.body;
    
    if (isLocalInference(sshConfig)) {
        return res.status(200).json({ authenticated: true, provider: "local" }); // SSH/local inference
    }
    
    const provider = getProvider(apiKey);
    if (provider) {
        return res.status(200).json({ authenticated: true, provider }); // Valid API key
    }
    
    return res.status(401).json({ error: "Invalid API key or SSH config" }); // Reject
};

exports.authenticate = authenticate;