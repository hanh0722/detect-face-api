import express from "express";
import multer from "multer";
import path from "path";
import { KEY_MULTER } from "./constant/key";
import { UseCors } from "./controller/cors";
import { UseErrorController } from "./controller/errors";
import { DetectRoutes, FileRoutes } from "./routes";
import { settingCloudinary } from "./utils/files";
import { randomString } from "./utils/random";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "upload"));
  },
  filename: async function (req, file, cb) {
    const id = await randomString();
    cb(null, id + "-" + file.originalname);
  },
});

(function(){
  settingCloudinary();
})()

app.use(
  multer({
    storage: storage,
  }).array(KEY_MULTER)
);

app.use(UseCors);

app.use('/api/detect', DetectRoutes);
app.use('/api/files', FileRoutes);

app.use(UseErrorController);

app.listen(9000);
