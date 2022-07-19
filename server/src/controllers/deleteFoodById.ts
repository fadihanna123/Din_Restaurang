import { prisma } from 'db';
import { Request, Response } from 'express';
import { logger } from 'tools';
import { apiKey, authorizationKey } from 'utils';
import { storeError } from 'utils/storeError';
import { storeLog } from 'utils/storeLog';

export const deleteFoodById = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    try {
      const id = Number(req.params.id);
      await prisma.food.delete({ where: { id } });

      storeLog('Deleted', 'DELETE', `/food/${id}`);

      res.send({ message: 'Deleted' });
    } catch (err) {
      storeError(
        (err as Error).message,
        'DELETE',
        `/food/${req.params.id}`
      );

      logger.error((err as Error).message);
    }
  } else {
    storeError(
      'No headers provided!',
      'DELETE',
      `/food/${req.params.id}`
    );

    logger.error('No headers provided on DELETE /food/:id!');

    res.json({ message: 'FORBIDDEN' });
  }
};
