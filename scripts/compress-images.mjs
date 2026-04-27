#!/usr/bin/env node
/**
 * Comprime os JPEGs em /public/images/ — reduz tamanho mantendo qualidade visual.
 * Estratégia:
 *   - Resize: largura máxima 2000px (≥ retina em ecrãs grandes), preserva aspect
 *   - JPEG quality: 82 (sweet spot visual/peso)
 *   - mozjpeg encoder: melhor compressão que libjpeg
 *   - Sobrescreve in-place (já temos os originais fora do repo)
 *
 * Run: `node scripts/compress-images.mjs`
 */

import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.resolve(process.cwd(), "public/images");
const MAX_WIDTH = 2000;
const QUALITY = 82;

async function compress(file) {
  const filePath = path.join(IMAGES_DIR, file);
  const before = (await stat(filePath)).size;

  // Carrega para Buffer primeiro (sharp não pode ler e escrever no mesmo path)
  const inputBuffer = await sharp(filePath).rotate().toBuffer();

  await sharp(inputBuffer)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
    .toFile(filePath);

  const after = (await stat(filePath)).size;
  const saved = ((1 - after / before) * 100).toFixed(0);
  return { file, before, after, saved };
}

async function main() {
  const files = (await readdir(IMAGES_DIR)).filter((f) =>
    /\.(jpe?g)$/i.test(f),
  );

  console.log(`\nA comprimir ${files.length} imagens em ${IMAGES_DIR}\n`);

  const results = [];
  for (const file of files) {
    try {
      const r = await compress(file);
      results.push(r);
      console.log(
        `  ✓ ${file.padEnd(34)} ${(r.before / 1024).toFixed(0)}KB → ${(r.after / 1024).toFixed(0)}KB (-${r.saved}%)`,
      );
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  const totalBefore = results.reduce((acc, r) => acc + r.before, 0);
  const totalAfter = results.reduce((acc, r) => acc + r.after, 0);
  console.log(
    `\nTotal: ${(totalBefore / 1024).toFixed(0)}KB → ${(totalAfter / 1024).toFixed(0)}KB (-${(((1 - totalAfter / totalBefore) * 100) | 0)}%)\n`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
