import { prisma } from 'db';
import { Response } from 'express';
import { IFood } from 'models';
import { logger } from 'tools';
import { TypedRequestBody } from 'types';
import { apiKey, authorizationKey } from 'utils';
import { storeError } from 'utils/storeError';
import { storeLog } from 'utils/storeLog';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Update a food item by id.
 * @async
 * @function updateFoodById
 * @route PUT /food/:id
 * @param { TypedRequestBody<IFood> } req - Request
 * @param { Response } res - Response
 * @returns { Promise<void> } Promise
 */
export const updateFoodById = async (
  req: TypedRequestBody<IFood>,
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
      storeError((err as Error).message, 'PUT', `/food/${req.params.id}`);

      logger.error((err as Error).message);
    }
  } else {
    storeError('No headers provided!', 'PUT', `/food/${req.params.id}`);

    logger.error('No headers provided on PUT /food/:id!');

    res.json({ message: 'FORBIDDEN' });
  }
};
