import { ErrorRequestHandler } from "express";

export const UseErrorController: ErrorRequestHandler = (err, req, res, next) => {
  res.json({
    message: err?.message || 'Server Internal Error',
    code: err?.code || 500
  });
  next();
}