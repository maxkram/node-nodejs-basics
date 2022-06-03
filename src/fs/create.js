// import fs from 'fs';
// const filepath = './src/fs/files/fresh.txt';
// const prodDetail = 'I am fresh and young';

// fs.open(filepath, 'r', function (fileExists, file) {
//   if (fileExists) {
//     fs.writeFile(filepath, JSON.stringify(prodDetail), (err) => {
//       if (err) console.error(err);
//     });
//   } else {
//     console.log('\x1b[31m%s\x1b[0m', 'FS operation failed');
//   }
// });

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
