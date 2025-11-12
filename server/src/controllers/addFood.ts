import { Response } from 'express';
import { logger } from '../tools';
import { apiKey, storeError } from '../utils';
import * as path from 'path';
import sanitize from 'sanitize-filename';
import { connection } from '@core/server';

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
  if (req.get('apiKey') === apiKey) {
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
        res.status(400).send('Var vänlig välj en bild.');
      }

      const sanitizedTitle = sanitize(req.body.title);
      const uploadPath = path.resolve(
        'src/uploads',
        `${sanitizedTitle}.${image.mimetype.split('/')[1]}`
      );

      const rootPath = path.resolve('src/uploads');

      if (!uploadPath.startsWith(rootPath)) {
        console.log('Invalid file path.', 'POST', '/food/add');
        res.status(400).send('Invalid file path.');
      }

      image.mv(uploadPath, image.name, (err: Error) => {
        if (err) {
          return logger.error(err);
        }
      });

      connection.query(
        `INSERT INTO food (title, sorts, price, image, included) VALUES('${data.title}', '${data.sorts}', '${data.price}','${data.image}', '${data.included}')`,
        () => {
          res.status(201).json({ message: 'Food added successfully.' });
        }
      );
    } catch (err) {
      storeError((err as Error).message, 'POST', '/food/add');
      logger.error((err as Error).message);
    }
  } else {
    storeError('No headers provided!', 'POST', '/food/add');

    logger.error('No headers provided POST /food/add!');

    res.status(401).json({ message: 'FORBIDDEN' });
  }
};
