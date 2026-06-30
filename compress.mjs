import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, dirname } from 'path';

const INPUT_DIR = './public/products';
const QUALITY = 75;

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await getAllImages(fullPath);
      files.push(...subFiles);
    } else if (['.jpg', '.jpeg', '.png', '.webp'].includes(
      extname(entry.name).toLowerCase()
    )) {
      files.push(fullPath);
    }
  }
  return files;
}

async function compress() {
  const images = await getAllImages(INPUT_DIR);
  console.log(`Found ${images.length} images`);

  let done = 0;
  let saved = 0;

  for (const imgPath of images) {
    try {
      const before = (await stat(imgPath)).size;
      
      // Same file overwrite karo
      const buffer = await sharp(imgPath)
        .webp({ quality: QUALITY })
        .toBuffer();
      
      const newPath = imgPath.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
      
      await sharp(buffer).toFile(newPath);
      
      const after = (await stat(newPath)).size;
      saved += (before - after);
      done++;
      
      console.log(`[${done}/${images.length}] ${imgPath.split('\\').pop()} → ${Math.round(after/1024)}KB`);
    } catch (err) {
      console.error(`Failed: ${imgPath}`, err.message);
    }
  }

  console.log(`\n✅ Done! Saved ${Math.round(saved/1024/1024 * 100)/100}MB`);
}

compress();