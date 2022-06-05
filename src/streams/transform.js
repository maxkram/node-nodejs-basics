import { Transform } from 'stream';

export const transform = async () => {
  class T extends Transform {
    _transform(chunk, encoding, callback) {
      callback(null, chunk.reverse().toString().trimStart() + '\n');
    }
  }

  const T = new T();
  process.stdin.pipe(T).pipe(process.stdout);
};
transform();
