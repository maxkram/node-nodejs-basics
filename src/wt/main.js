import worker_threads from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

export const performCalculations = async () => {
  const arr = [];
  const from = path.join(fileURLToPath(import.meta.url), '..', 'worker.js');
  for (let i = 0; i < process.env.NUMBER_OF_PROCESSORS; i++) {
    arr.push(new worker_threads.Worker(from));
    arr[i].postMessage(10 + i);
  }
  const res = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    res[i] = new Promise((resolve) => {
      arr[i].on('message', (obj) => {
        resolve((res[i] = obj));
      });
      arr[i].on('error', () => {
        resolve((res[i] = { status: 'error', data: null }));
      });
    });
  }
  console.log(await Promise.all(res));
};
performCalculations();
