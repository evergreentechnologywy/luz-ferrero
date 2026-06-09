/**
 * Create a page URL helper
 * @param {string} path - The page path (e.g., '/about', '/contact')
 * @param {Object} params - Optional query parameters
 * @returns {string} The full URL
 */
export const createPageUrl = (path, params = {}) => {
  let url = path;
  
  if (Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    const qs = searchParams.toString();
    if (qs) {
      url += `?${qs}`;
    }
  }
  
  return url;
};

/**
 * Check if a path is currently active
 * @param {string} currentPath - The current route path
 * @param {string} targetPath - The path to check
 * @returns {boolean}
 */
export const isActivePage = (currentPath, targetPath) => {
  if (targetPath === '/') {
    return currentPath === '/';
  }
  return currentPath.startsWith(targetPath);
};