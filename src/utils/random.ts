import { randomBytes } from 'crypto';

export const randomString = (size?: number) => {
  return new Promise((resolve, reject) => {
    randomBytes(size || 16, (err, buffer) => {
      if (err) {
        reject(err);
      }
      resolve(buffer.toString('hex'));
    });
  })
}