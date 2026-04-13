export const validateAPIKey = (key: string, provider: string): boolean => {
  if (!key) return false;
  
  // Basic format validation
  if (provider === 'openrouter') {
    return key.startsWith('sk-or-') && key.length > 30;
  } else if (provider === 'lm-studio') {
    return key.length > 20; // LM Studio keys are typically long
  } else if (provider === 'e2b') {
    return key.startsWith('e2b-') && key.length > 30;
  }
  
  return false;
};

export const getProvider = (apiKey: string): string | null => {
  if (validateAPIKey(apiKey, 'openrouter')) return 'openrouter';
  if (validateAPIKey(apiKey, 'lm-studio')) return 'lm-studio';
  if (validateAPIKey(apiKey, 'e2b')) return 'e2b';
  return null;
};

export const isLocalInference = (config: any): boolean => {
  return config.provider === 'lm-studio' || config.provider === 'ssh';
};