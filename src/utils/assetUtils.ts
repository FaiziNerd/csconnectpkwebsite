
/**
 * Utility function to get the correct path for assets based on the current environment
 * This handles the GitHub Pages base path when deployed
 */
export const getAssetPath = (path: string): string => {
  // Strip leading slash if present
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
  
  // With HashRouter, we don't need the BASE_URL prefix anymore
  return normalizedPath;
};
