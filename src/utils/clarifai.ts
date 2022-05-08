import { APP_ID_CLARIFAI, CLARIFAI_API_KEY, USER_ID_CLARIFAI } from "../constant/key";

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

export const metadata = () => {
  const metadata = new grpc.Metadata();
  metadata.set("authorization", "Key " + process.env[CLARIFAI_API_KEY]);

  return metadata;
};

export const stub = () => {
  return ClarifaiStub.grpc();
};

export const CONFIG_USER_CLARIFAI = {
  user_id: process.env[USER_ID_CLARIFAI],
  app_id: process.env[APP_ID_CLARIFAI],
};
