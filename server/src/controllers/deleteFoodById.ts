import { Request, Response } from 'express';
import { logger } from '../tools';
import { apiKey, storeError, storeLog } from '../utils';
import { connection } from '@core/server';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Delete a food item.
 * @function deleteFoodById
 * @async
 * @route DELETE /food/:id
 * @param { TypedRequestBody<IFood> } req - Request
 * @param { Response } res - Response
 * @returns { Promise<void> } Promise
 */
export const deleteFoodById = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (req.get('apiKey') === apiKey) {
    try {
      const id = Number(req.params['id']);
      connection.query(`DELETE FROM food WHERE id = ${id}`);

      storeLog('Deleted', 'DELETE', `/food/${id}`);

      res.status(200).send({ message: 'Deleted' });
    } catch (err) {
      storeError((err as Error).message, 'DELETE', `/food/${req.params['id']}`);

      logger.error((err as Error).message);
    }
  } else {
    storeError('No headers provided!', 'DELETE', `/food/${req.params['id']}`);

    logger.error('No headers provided on DELETE /food/:id!');

    res.status(401).json({ message: 'FORBIDDEN' });
  }
};
