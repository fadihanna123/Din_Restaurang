import { Response } from 'express';
import { logger } from '../tools';
import { apiKey, authorizationKey, storeLog, storeError } from '../utils';
import { connection } from '@core/server';

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
      const id = Number(req.params['id']);
      connection.query(
        `UPDATE food SET title = '${req.body.title}', price = ${req.body.price}, sorts = '${req.body.sorts}', image = '${req.body.image}', included = '${req.body.included}' WHERE id = ${id}`,
        (err, results) => {
          if (results) {
            setTimeout(() => {
              res.json(results);
            }, 2000);
          } else {
            res.json({ message: 'No food item found!' });
          }
        }
      );

      storeLog('Changed', 'PUT', `/food/${id}`);
      res.send({ message: 'Changed' });
    } catch (err) {
      storeError((err as Error).message, 'PUT', `/food/${req.params['id']}`);

      logger.error((err as Error).message);
    }
  } else {
    storeError('No headers provided!', 'PUT', `/food/${req.params['id']}`);

    logger.error('No headers provided on PUT /food/:id!');

    res.json({ message: 'FORBIDDEN' });
  }
};
