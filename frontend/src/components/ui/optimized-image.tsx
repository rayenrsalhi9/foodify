/**
 * Advanced image component with WebP support and fallback
 * This component provides automatic WebP conversion with fallback to original format
 */

import React, { useState, useEffect } from 'react'
import { getOptimizedImage, supportsWebP } from '@/lib/image-utils'

interface OptimizedImageProps {
  src: string
  alt?: string
  className?: string
  loading?: 'lazy' | 'eager'
  width?: number
  height?: number
  onError?: () => void
  onLoad?: () => void
}

/**
 * Advanced image component with automatic WebP optimization
 * Provides fallback to original format if WebP is not supported
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  width,
  height,
  onError,
  onLoad
}) => {
  const [webpSupported, setWebpSupported] = useState<boolean>(false)
  const [imageError, setImageError] = useState<boolean>(false)
  const [currentSrc, setCurrentSrc] = useState<string>(src)

  const { webpSrc, originalSrc } = getOptimizedImage(src)

  useEffect(() => {
    // Check WebP support on mount
    supportsWebP().then(setWebpSupported)
  }, [])

  useEffect(() => {
    // Reset state when src changes
    setImageError(false)
    setCurrentSrc(src)
  }, [src])

  const handleImageError = () => {
    if (currentSrc === webpSrc && webpSupported) {
      // WebP failed, try original format
      setCurrentSrc(originalSrc)
    } else {
      // Both formats failed
      setImageError(true)
      onError?.()
    }
  }

  const handleImageLoad = () => {
    onLoad?.()
  }

  // Determine which image to show
  const displaySrc = webpSupported && !imageError && webpSrc ? webpSrc : originalSrc

  return (
    <img
      src={displaySrc}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      onError={handleImageError}
      onLoad={handleImageLoad}
      style={{
        // Hide broken images gracefully
        display: imageError ? 'none' : 'block'
      }}
    />
  )
}

/**
 * Picture element with WebP source and fallback
 * More robust but requires more markup
 */
export const OptimizedPicture: React.FC<OptimizedImageProps> = ({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  width,
  height
}) => {
  const { webpSrc, originalSrc } = getOptimizedImage(src)

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={originalSrc} type={`image/${getImageType(originalSrc)}`} />
      <img
        src={originalSrc}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
      />
    </picture>
  )
}

/**
 * Helper function to get image type from extension
 */
function getImageType(src: string): string {
  const ext = src.split('.').pop()?.toLowerCase()
  switch (ext) {
    case 'jpg':
    case 'jpeg':
      return 'jpeg'
    case 'png':
      return 'png'
    case 'webp':
      return 'webp'
    default:
      return 'jpeg'
  }
}

export default OptimizedImage