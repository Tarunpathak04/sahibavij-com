import { createClient } from '@supabase/supabase-js';
import sharp from 'sharp';
import { readdir, writeFile } from 'fs/promises';
import { join, relative } from 'path';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const BUCKET = 'products';
const LOCAL_DIR = './public/products';

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await getAllImages(fullPath));
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function run() {
  const files = await getAllImages(LOCAL_DIR);
  console.log(`Found ${files.length} images`);
  const results = [];

  for (const filePath of files) {
    const relPath = relative(LOCAL_DIR, filePath).replace(/\\/g, '/');
    const storagePath = relPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

    // Compress directly to memory buffer — disk pe kuch nahi likha jaata
    const buffer = await sharp(filePath).webp({ quality: 75 }).toBuffer();

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(storagePath, buffer, { contentType: 'image/webp', upsert: true });

    if (error) {
      console.error(`✗ ${relPath}:`, error.message);
      continue;
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(storagePath);
    results.push({ local: relPath, url: data.publicUrl });
    console.log(`✓ ${storagePath}`);
  }

  await writeFile('image-urls.json', JSON.stringify(results, null, 2));
  console.log(`\nDone. ${results.length} uploaded. Mapping saved to image-urls.json`);
}

run();