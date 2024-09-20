import { prisma } from '../db';
import { Response } from 'express';
import { logger } from '../tools';
import { apiKey, authorizationKey, storeError } from '../utils';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Add a food item.
 * @function addFood
 * @async
 * @route POST /food/add
 * @param { TypedRequestBody<IFood> } req - Request
 * @param { Response } res - Response
 */
export const addFood = async (req: TypedRequestBody<IFood>, res: Response) => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    const image = (req as any).files.image ? (req as any).files.image : '';

    try {
      const data = {
        title: req.body.title,
        sorts: req.body.sorts,
        price: Number(req.body.price),
        image: image.name,
        included: req.body.included,
      };

      if (!(req as any).files || Object.keys((req as any).files).length === 0) {
        console.log('Var vänlig välj en bild.', 'POST', '/food/add');
        return res.status(400).send('Var vänlig välj en bild.');
      }

      const uploadPath = `src/uploads/${req.body.title}.${image.mimetype.split('/')[1]}`;

      image.mv(uploadPath, image.name, (err: Error) => {
        if (err) {
          return logger.error(err);
        }
      });

      const FoodModel = await prisma.food.create({
        data,
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
