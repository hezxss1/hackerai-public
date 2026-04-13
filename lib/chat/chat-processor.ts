export const processMessage = (message: string): string => {
  // No censorship, no restrictions
  return message;
};

export const isRestricted = (): boolean => {
  return false; // Always uncensored
};

export const shouldFilter = (): boolean => {
  return false; // Never filter
};