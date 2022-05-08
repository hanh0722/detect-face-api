import { RequestHandler } from "express";
import { isArray } from "../utils/types";
import { uploadFileToCloud } from "../utils/files";
import { detectPostModel } from "../utils/detect";

export const DetectAllController: RequestHandler = async (req, res, next) => {
  const files = req.files;
  try {
    if (!isArray(files) || files?.length === 0) {
      return res.status(422).json({
        message: "Please provide one image",
        code: 422,
      });
    }
    const file = files[0].path;
    const url = await uploadFileToCloud(file);
    if (!url) {
      return res.status(401).json({
        message: 'Cannot generate image',
        code: 401
      })
    }
    const response = await detectPostModel({
      url: url,
      modelId: 'face-detection'
    });
    console.log(response?.outputs[0])
    res.json({
      message: 'successfully',
      code: 200,
      data: response?.outputs[0]?.data?.regions[0]?.region_info?.bounding_box || null,
      url: url
    });
  } catch (err) {
    next(err);
  }
};
