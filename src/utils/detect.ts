import { DetectPropsRequest } from "../types/detect";
import { CONFIG_USER_CLARIFAI, metadata, stub } from "./clarifai";

export const detectPostModel = <T = any>({ url, modelId }: DetectPropsRequest) => {
  return new Promise<T>((resolve, reject) => {
    stub().PostModelOutputs(
      {
        ...CONFIG_USER_CLARIFAI,
        model_id: modelId,
        inputs: [
          {
            data: {
              image: {
                url: url,
                allow_duplicate_url: true
              }
            }
          }
        ]
      },
      metadata(),
      (err: any, response: any) => {
        if (err) {
          return reject(err);
        };
        return resolve(response);
      }
    );
  });
};
