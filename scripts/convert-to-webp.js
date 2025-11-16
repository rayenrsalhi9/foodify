/**
 * Script to convert images to WebP format
 * Run with: node scripts/convert-to-webp.js
 */

import { readdir, stat, access } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Check if sharp is available
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (error) {
  console.log('Sharp not installed. Installing...');
  console.log('Run: npm install sharp');
  process.exit(1);
}

// Supported image formats for conversion
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

/**
 * Convert a single image to WebP format
 */
async function convertImageToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    
    const originalStats = await stat(inputPath);
    const webpStats = await stat(outputPath);
    const savings = ((originalStats.size - webpStats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`✅ Converted: ${basename(inputPath)} → ${basename(outputPath)} (${savings}% smaller)`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to convert ${inputPath}:`, error.message);
    return false;
  }
}

/**
 * Recursively find and convert images in a directory
 */
async function convertImagesInDirectory(dirPath) {
  const entries = await readdir(dirPath, { withFileTypes: true });
  let convertedCount = 0;
  let skippedCount = 0;

  for (const entry of entries) {
    const fullPath = join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      // Recursively process subdirectories
      const { converted, skipped } = await convertImagesInDirectory(fullPath);
      convertedCount += converted;
      skippedCount += skipped;
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      
      if (SUPPORTED_FORMATS.includes(ext)) {
        const webpPath = fullPath.replace(ext, '.webp');
        
        // Check if WebP version already exists
        try {
          await access(webpPath);
          console.log(`⏭️  Skipped: ${entry.name} (WebP already exists)`);
          skippedCount++;
        } catch {
          // WebP doesn't exist, convert it
          const success = await convertImageToWebP(fullPath, webpPath);
          if (success) convertedCount++;
        }
      }
    }
  }

  return { converted: convertedCount, skipped: skippedCount };
}

/**
 * Main conversion function
 */
async function main() {
  console.log('🚀 Starting WebP conversion process...\n');
  
  const publicDir = join(__dirname, '..', 'public');
  
  try {
    await access(publicDir);
  } catch {
    console.error('❌ Public directory not found:', publicDir);
    process.exit(1);
  }

  console.log(`📁 Scanning directory: ${publicDir}\n`);
  
  const { converted, skipped } = await convertImagesInDirectory(publicDir);
  
  console.log(`\n📊 Conversion Summary:`);
  console.log(`✅ Converted: ${converted} images`);
  console.log(`⏭️  Skipped: ${skipped} images (WebP already exists)`);
  console.log(`\n🎉 WebP conversion complete!`);
  
  if (converted > 0) {
    console.log('\n💡 Next steps:');
    console.log('1. Update your image utility functions to use WebP');
    console.log('2. Test the WebP implementation in browsers');
    console.log('3. Consider adding this conversion to your build process');
  }
}

// Run the conversion
main().catch(error => {
  console.error('❌ Conversion failed:', error);
  process.exit(1);
});