import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const compress = async () => {
  const from = path.join(
    fileURLToPath(import.meta.url),
    '..',
    'files',
    'fileToCompress.txt'
  );
  const to = path.join(
    fileURLToPath(import.meta.url),
    '..',
    'files',
    'archive.gz'
  );
  const fromWhat = fs.createReadStream(from);
  const toWhat = fs.createWriteStream(to);
  const zip = zlib.createGzip();
  fromWhat.pipe(zip).pipe(toWhat);
};
