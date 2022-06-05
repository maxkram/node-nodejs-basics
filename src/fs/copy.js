import { existsSync, mkdir, readdir, copyFile } from 'fs';
import path from 'path';

export const copy = async () => {
  if (!existsSync('files') || !existsSync('files_copy')) {
    throw new Error('FS operation failed');
  }
  mkdir('files_copy', { recursive: true });
  let files = readdir('files', { withFileTypes: true });
  for (let file of files) {
    let from = path.join('files', file.name);
    let to = path.join('files-copy', file.name);
    if (file.isDirectory()) {
      copyDir(from, to);
    } else {
      copyFile(from, to);
    }
  }
};
copy();
