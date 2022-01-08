import { prisma } from 'db';
import { Request, Response } from 'express';
import { logger } from 'tools';
import { apiKey, authorizationKey } from 'utils';

export const deleteFoodById = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (
    req.get("apiKey") === apiKey &&
    req.get("Authorization") === authorizationKey
  ) {
    try {
      const id = Number(req.params.id);
      await prisma.food.delete({ where: { id } });

      res.send({ message: "Deleted" });
    } catch (err) {
      logger.error((err as Error).message);
    }
  } else {
    logger.error("No headers provided on DELETE /food/:id!");

    res.json({ message: "FORBIDDEN" });
  }
};
