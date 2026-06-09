/**
 * Utility function to conditionally join class names.
 * Simple alternative to clsx/tailwind-merge — lightweight.
 */
export function cn(...inputs) {
  return inputs
    .filter(Boolean)
    .flat()
    .join(' ');
}
