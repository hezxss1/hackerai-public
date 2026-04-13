// Full API key validation and provider switching logic

export const validateAPIKey = (key: string, provider: string): boolean => {
  const keyPatterns = {
    "lm-studio": /^lm-studio-/i,
    "openrouter": /^sk-or-/i,
    "e2b": /^e2b-/i,
  };
  return key && keyPatterns[provider]?.test(key);
};

export const getProvider = (apiKey: string): string | null => {
  if (validateAPIKey(apiKey, "lm-studio")) return "lm-studio";
  if (validateAPIKey(apiKey, "openrouter")) return "openrouter";
  if (validateAPIKey(apiKey, "e2b")) return "e2b";
  return null;
};

export const isLocalInference = (config: { ssh?: string }): boolean => {
  return !!config.ssh;
};