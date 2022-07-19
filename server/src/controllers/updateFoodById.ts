import { prisma } from 'db';
import { Request, Response } from 'express';
import { logger } from 'tools';
import { apiKey, authorizationKey } from 'utils';
import { storeError } from 'utils/storeError';
import { storeLog } from 'utils/storeLog';

export const updateFoodById = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    try {
      const id = Number(req.params.id);
      await prisma.food.update({ where: { id }, data: req.body });

      storeLog('Changed', 'PUT', `/food/${id}`);
      res.send({ message: 'Changed' });
    } catch (err) {
      storeError(
        (err as Error).message,
        'PUT',
        `/food/${req.params.id}`
      );

      logger.error((err as Error).message);
    }
  } else {
    storeError(
      'No headers provided!',
      'PUT',
      `/food/${req.params.id}`
    );

    logger.error('No headers provided on PUT /food/:id!');

    res.json({ message: 'FORBIDDEN' });
  }
};
