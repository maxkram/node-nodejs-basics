import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const decompress = async () => {
  const from = path.join(
    fileURLToPath(import.meta.url),
    '..',
    'files',
    'archive.gz'
  );
  const to = path.join(
    fileURLToPath(import.meta.url),
    '..',
    'files',
    'fileToCompress.txt'
  );
  const fromWhat = fs.createReadStream(from);
  const toWhat = fs.createWriteStream(to);
  const zip = zlib.createUnzip();
  fromWhat.pipe(zip).pipe(toWhat);
};
