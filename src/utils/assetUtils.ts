
/**
 * Utility function to get the correct path for assets based on the current environment
 * This handles the GitHub Pages base path when deployed
 */
export const getAssetPath = (path: string): string => {
  // Make sure the path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Get base URL from import.meta.env.BASE_URL (set in vite.config.ts)
  const basePath = import.meta.env.BASE_URL || '/';
  
  // Remove any double slashes
  return `${basePath.replace(/\/$/, '')}${normalizedPath}`.replace(/\/\//g, '/');
};
