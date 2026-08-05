import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname } from 'path';

const dir = './public/assets/img';
const files = await readdir(dir);
let saved = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const path = join(dir, file);
  const tmp = path + '.tmp';
  const before = (await stat(path)).size;

  try {
    if (ext === '.png') {
      await sharp(path).png({ compressionLevel: 9, quality: 80 }).toFile(tmp);
    } else {
      await sharp(path).jpeg({ quality: 82, mozjpeg: true }).toFile(tmp);
    }

    const after = (await stat(tmp)).size;
    if (after < before) {
      await unlink(path);
      await rename(tmp, path);
      saved += before - after;
      console.log(`✓ ${file}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`);
    } else {
      await unlink(tmp);
      console.log(`- ${file}: already optimal`);
    }
  } catch (e) {
    console.log(`✗ ${file}: ${e.message}`);
    try { await unlink(tmp); } catch {}
  }
}

console.log(`\nTotal saved: ${(saved / 1024 / 1024).toFixed(2)} MB`);
