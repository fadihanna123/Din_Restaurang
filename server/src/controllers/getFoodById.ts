import { prisma } from '../db';
import { Request, Response } from 'express';
import { logger } from '../tools';
import { apiKey, authorizationKey, storeError } from '../utils';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get a food item by id.
 * @async
 * @function getFoodById
 * @route GET /food/:id
 * @param { Request } req
 * @param { Response } res
 * @returns { Promise<void> } Promise
 */
export const getFoodById = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    try {
      const id = Number(req.params['id']);
      const getFoodById = await prisma.food.findUnique({
        where: {
          id,
        },
      });
      if (getFoodById) {
        setTimeout(() => {
          res.json(getFoodById);
        }, 2000);
      } else {
        res.json({ message: 'No food item found!' });
      }
    } catch (err) {
      storeError((err as Error).message, 'GET', `/food/${req.params['id']}`);

      logger.error((err as Error).message);
    }
  } else {
    storeError('No headers provided!', 'GET', `/food/${req.params['id']}`);

    logger.error('No headers provided on GET /food/:id!');

    res.json({ message: 'FORBIDDEN' });
  }
};
