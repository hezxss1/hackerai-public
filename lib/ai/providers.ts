// Termux: OpenRouter, Hugging Face, NVIDIA, and E2B

export const validateAPIKey = (
  key: string,
  provider: "openrouter" | "huggingface" | "nvidia" | "e2b"
): boolean => {
  const patterns: Record<string, RegExp> = {
    openrouter: /^sk-or-[a-zA-Z0-9]{48,}$/,
    huggingface: /^hf_[a-zA-Z0-9]{32,}$/,
    nvidia: /^nvapi-[a-zA-Z0-9_-]{32,}$/,
    e2b: /^e2b_[a-zA-Z0-9]{32,}$/,
  };
  return patterns[provider].test(key);
};

export const getProvider = (config: {
  OPENROUTER_API_KEY?: string;
  HUGGINGFACE_API_KEY?: string;
  NVIDIA_API_KEY?: string;
  E2B_API_KEY?: string;
}): { provider: string; key: string } => {
  if (config.OPENROUTER_API_KEY && validateAPIKey(config.OPENROUTER_API_KEY, "openrouter"))
    return { provider: "openrouter", key: config.OPENROUTER_API_KEY };
  if (config.HUGGINGFACE_API_KEY && validateAPIKey(config.HUGGINGFACE_API_KEY, "huggingface"))
    return { provider: "huggingface", key: config.HUGGINGFACE_API_KEY };
  if (config.NVIDIA_API_KEY && validateAPIKey(config.NVIDIA_API_KEY, "nvidia"))
    return { provider: "nvidia", key: config.NVIDIA_API_KEY };
  if (config.E2B_API_KEY && validateAPIKey(config.E2B_API_KEY, "e2b"))
    return { provider: "e2b", key: config.E2B_API_KEY };
  throw new Error("No valid API key provided. OpenRouter, Hugging Face, NVIDIA, or E2B required.");
};