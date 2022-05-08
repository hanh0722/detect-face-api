import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { v2 } from 'cloudinary';
import { randomString } from './random';
import { CLOUDINARY_KEY, CLOUDINARY_SECRET_KEY, CLOUD_NAME_CLOUDINARY } from '../constant/key';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, 'upload'))
  },
  filename: async function(req, file, cb) {
    const id = await randomString();
    cb(null, file.fieldname + '-' + id)
  }
});

export const unlinkPath = (path: string) => {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject('Please provide a path of file');
    }
    fs.unlink(path, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(path);
    });
  });
}

export const settingCloudinary = () => {
  const setting = v2.config({
    cloud_name: process.env[CLOUD_NAME_CLOUDINARY],
    api_key: process.env[CLOUDINARY_KEY],
    api_secret: process.env[CLOUDINARY_SECRET_KEY],
    secure: true
  });
  return setting;
};

export const uploadFileToCloud = async (path: string) => {
  return new Promise<string | undefined>((resolve, reject) => {
    v2.uploader.upload(path, async function(err, result) {
      if (err) {
        return reject(err);
      };
      await unlinkPath(path);
      resolve(result?.secure_url);
    });
  })
};

export default storage;