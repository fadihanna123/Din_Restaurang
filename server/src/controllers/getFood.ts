import { Request, Response } from 'express';
import { logger } from '../tools';
import { apiKey, authorizationKey, storeError } from '../utils';
import { connection } from '@core/server';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all food items.
 * @function getFood
 * @async
 * @route GET /food
 * @param { Request } req - Request
 * @param { Response } res - Response
 * @returns { Promise<void> } Promise
 */
export const getFood = async (req: Request, res: Response): Promise<void> => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    try {
      connection.query('SELECT * FROM food', (err, results) => {
        res.status(200).json(results);
      });
    } catch (err) {
      storeError((err as Error).message, 'GET', '/food');
      logger.error((err as Error).message);
    }
  } else {
    storeError('No headers provided!', 'GET', '/food');
    logger.error('No headers provided on GET/food!');

    res.status(401).json({ message: 'FORBIDDEN' });
  }
};
