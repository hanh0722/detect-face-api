import { RequestHandler } from "express";
import { uploadFileToCloud } from "../utils/files";
import { isArray } from "../utils/types";

export const uploadFileController: RequestHandler = async (req, res, next) => {
  try{
    const files = req.files;
    if (!isArray(files) || files?.length === 0) {
      return res.status(422).json({
        message: 'Files are not valid',
        code: 422
      })
    };
    const uploadMultipleFiles = files.map(item => {
      return uploadFileToCloud(item.path);
    });
    const responseFiles = await Promise.all(uploadMultipleFiles);
    res.json({
      message: 'succesfully',
      code: 200,
      data: responseFiles
    });
  }catch(err) {
    next(err);
  }
}