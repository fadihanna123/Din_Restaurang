import { prisma } from 'db';
import { Request, Response } from 'express';
import { logger } from 'tools';
import { apiKey, authorizationKey } from 'utils';

export const getFoodById = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (
    req.get("apiKey") === apiKey &&
    req.get("Authorization") === authorizationKey
  ) {
    try {
      const id: number = Number(req.params.id);
      const getFoodById = await prisma.food.findUnique({
        where: {
          id,
        },
      });

      res.json(getFoodById);
    } catch (err) {
      logger.error((err as Error).message);
    }
  } else {
    logger.error("No headers provided on GET /food/:id!");

    res.json({ message: "FORBIDDEN" });
  }
};
