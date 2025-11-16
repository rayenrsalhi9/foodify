/**
 * Utility functions for image optimization
 */

/**
 * Converts image URL to WebP format while maintaining fallback support
 * @param src - Original image source URL
 * @returns Object containing WebP source and original source
 */
export const getOptimizedImage = (src: string) => {
  if (!src) return { webpSrc: '', originalSrc: '' }
  
  // Convert common image formats to WebP
  const webpSrc = src
    .replace(/\.png$/i, '.webp')
    .replace(/\.jpg$/i, '.webp')
    .replace(/\.jpeg$/i, '.webp')
  
  return {
    webpSrc,
    originalSrc: src
  }
}

/**
 * Creates a picture element with WebP and fallback sources
 * @param src - Original image source
 * @param alt - Alt text for accessibility
 * @param className - Optional CSS classes
 * @param loading - Loading attribute (lazy, eager, etc.)
 * @returns Picture element configuration
 */
export const createOptimizedPicture = (
  src: string,
  alt: string = '',
  className: string = '',
  loading: 'lazy' | 'eager' = 'lazy'
) => {
  const { webpSrc, originalSrc } = getOptimizedImage(src)
  
  return {
    webpSrc,
    originalSrc,
    alt,
    className,
    loading
  }
}

/**
 * Checks if the browser supports WebP format
 * @returns Promise<boolean> indicating WebP support
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image()
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  })
}

/**
 * Preloads critical images for better performance
 * @param src - Image source to preload
 */
export const preloadImage = (src: string) => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = src
  document.head.appendChild(link)
}