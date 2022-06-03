import fs from 'fs';
export const read = async () => {
  fs.readFile('./files/fileToRead.txt', function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log(data.toString());
  });
};
