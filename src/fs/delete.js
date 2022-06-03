import fs from 'fs';
export const remove = async () => {
  fs.rm('./files/fileToRemove.txt', function (err) {
    if (err) {
      return console.error('FS operation failed');
    }
    console.log('Ну все, чё, нету больше файлика!');
  });
};

