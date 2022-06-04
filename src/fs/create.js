import fs from 'fs';

export const create = async () => {
  const file = 'files/fresh.txt';
  if (fs.existsSync(file)) throw new Error('FS operation failed');
  await fs.promises.writeFile(file, 'I am fresh and young', { flag: 'wx' });
};
