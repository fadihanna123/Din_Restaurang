import { prisma } from 'db';
import { Request, Response } from 'express';
import { logger } from 'tools';
import { apiKey, authorizationKey } from 'utils';
import { storeError } from 'utils/storeError';

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
      const getFood = await prisma.food.findMany();
      res.json(getFood);
    } catch (err) {
      storeError((err as Error).message, 'GET', '/food');
      logger.error((err as Error).message);
    }
  } else {
    storeError('No headers provided!', 'GET', '/food');
    logger.error('No headers provided on GET/food!');

    res.json({ message: 'FORBIDDEN' });
  }
};
