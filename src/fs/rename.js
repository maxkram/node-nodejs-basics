import fs from 'fs';
export const rename = async () => {
  fs.rename(
    './files/wrongFilename.txt',
    './files/properFilename.md',
    function (err) {
      if (err) {
        return console.error('FS operation failed');
      }
      console.log('Renamed successfully!');
    }
  );
};
