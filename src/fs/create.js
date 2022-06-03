import fs from 'fs';

fs.writeFile(
  './src/fs/files/fresh.txt',
  'I am fresh and young',
  function (err) {
    if (err) {
      return console.error('FS operation failed');
    }

    console.log('Все готово, шеф!');

    fs.readFile('./src/fs/files/fresh.txt', function (err, data) {
      if (err) {
        return console.error('FS operation failed');
      }
      console.log(data.toString());
    });
  }
);
