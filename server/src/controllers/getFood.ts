import { prisma } from 'db';
import { Request, Response } from 'express';
import { logger } from 'tools';
import { apiKey, authorizationKey } from 'utils';

export const getFood = async (req: Request, res: Response): Promise<void> => {
  if (
    req.get("apiKey") === apiKey &&
    req.get("Authorization") === authorizationKey
  ) {
    try {
      const getFood = await prisma.food.findMany();
      res.json(getFood);
    } catch (err) {
      logger.error((err as Error).message);
    }
  } else {
    logger.error("No headers provided on GET/food!");

    res.json({ message: "FORBIDDEN" });
  }
};
