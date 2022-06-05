import crypto from 'crypto';
import fs from 'fs';

export const calculateHash = async () => {
  const fileBuffer = fs.readFile('files/fileToCalculateHashFor.txt');
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  const hex = hashSum.digest('hex');
  console.log(hex);
};
