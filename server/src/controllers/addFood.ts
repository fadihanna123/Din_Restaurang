import { prisma } from 'db';
import { Request, Response } from 'express';
import { logger } from 'tools';
import { apiKey, authorizationKey } from 'utils';
import { storeError } from 'utils/storeError';

export const addFood = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    try {
      const FoodModel = await prisma.food.create({
        data: req.body,
      });

      res.json(FoodModel);
    } catch (err) {
      storeError((err as Error).message, 'POST', '/food/add');
      logger.error((err as Error).message);
    }
  } else {
    storeError('No headers provided!', 'POST', '/food/add');

    logger.error('No headers provided POST /food/add!');

    res.json({ message: 'FORBIDDEN' });
  }
};
