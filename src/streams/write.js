import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const write = async () => {
  const into = path.join(
    fileURLToPath(import.meta.url),
    '..',
    'files',
    'fileToWrite.txt'
  );
  const writeStream = fs.createWriteStream(into);
  process.stdin.pipe(writeStream);
};
write();
