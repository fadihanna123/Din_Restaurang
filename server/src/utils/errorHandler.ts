import { ErrorRequestHandler, Request, Response } from "express";
import { logger } from "tools";

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  _req: Request,
  res: Response
) => {
  if (error) {
    logger.error(`Unhandled error`, { error: error.message });
    return res.status(500).json({ error: "Server error." });
  }

  res.end();
};