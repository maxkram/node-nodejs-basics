import fs from 'fs';

export const list = async () => {
  const where = 'files';
  if (!fs.existsSync(where)) throw new Error('FS operation failed');
  const content = await fs.promises.readdir(where);
  console.log(content);
};
list();
