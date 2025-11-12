import { Response } from 'express';
import { logger } from '../tools';
import { apiKey, privateToken, storeError } from '../utils';
import jwt from 'jsonwebtoken';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get a token.
 * @function getToken
 * @async
 * @route POST /token
 * @param { TypedRequestBody<any> } req - Request
 * @param { Response } res - Response
 */

export const getToken = async (req: TypedRequestBody<any>, res: Response) => {
  if (req.get('apiKey') === apiKey) {
    try {
      const token = jwt.sign({ apiKey }, privateToken as string, {
        expiresIn: '1h',
      });

      res.status(200).json({ token });
    } catch (err) {
      storeError((err as Error).message, 'POST', '/token');
      logger.error((err as Error).message);
    }
  } else {
    storeError('No headers provided!', 'POST', '/token');

    logger.error('No headers provided POST /token!');

    res.status(401).json({ message: 'FORBIDDEN' });
  }
};
