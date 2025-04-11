
/**
 * Utility function to get the correct path for assets based on the current environment
 * This handles the GitHub Pages base path when deployed
 */
export const getAssetPath = (path: string): string => {
  // Check if path already starts with lovable-uploads
  if (path.includes('lovable-uploads/')) {
    return path;
  }
  
  return path;
};
