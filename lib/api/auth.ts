import { validateAPIKey, getProvider, isLocalInference } from './ai/providers';

interface AuthConfig {
  provider: string;
  apiKey?: string;
  openrouterModel?: string;
  sshConfig?: {
    host: string;
    port: string;
    user: string;
    key?: string;
  };
}

export const loadAuthConfig = (): AuthConfig | null => {
  if (typeof window !== 'undefined') {
    const config = localStorage.getItem('hackeraiConfig');
    return config ? JSON.parse(config) : null;
  }
  return null;
};

export const isAuthenticated = (config: AuthConfig): boolean => {
  if (config.provider === 'ssh') {
    return !!config.sshConfig?.host && !!config.sshConfig.user;
  }
  return !!config.apiKey && validateAPIKey(config.apiKey, config.provider);
};

export const getAuthHeaders = (config: AuthConfig): Record<string, string> => {
  const headers: Record<string, string> = {};
  
  if (config.provider === 'openrouter' && config.apiKey && config.openrouterModel) {
    headers['Authorization'] = `Bearer ${config.apiKey}`;
    headers['HTTP-Referer'] = 'https://hackerai.co';
    headers['X-Title'] = 'HackerAI';
    headers['Model'] = config.openrouterModel;
  } else if (config.provider === 'lm-studio' && config.apiKey) {
    headers['Authorization'] = `Bearer ${config.apiKey}`;
    headers['Content-Type'] = 'application/json';
  } else if (config.provider === 'e2b' && config.apiKey) {
    headers['Authorization'] = `Bearer ${config.apiKey}`;
  }
  
  return headers;
};