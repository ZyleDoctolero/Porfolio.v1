// src/lib/utils.js
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind class names with intelligent conflict resolution.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
