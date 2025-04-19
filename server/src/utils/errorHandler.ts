import { Request, Response } from 'express';
import { logger } from '../tools';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Handle server errors.
 * @param error
 * @param _req - Request
 * @param res - Response
 */

export const errorHandler = (error: Error, _req: Request, res: Response) => {
  if (error) {
    logger.error('Unhandled error', { error: error.message });
    res.status(500).json({ error: 'Server error.' });
  }

  res.end();
};
