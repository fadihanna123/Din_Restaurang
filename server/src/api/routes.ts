import { prisma } from "db";
import { Request, Response, Router } from "express";
import { logger } from "tools";
import { apiKey, authorizationKey } from "utils";

const router = Router();

// Routes
router.get("/food", async (req: Request, res: Response): Promise<void> => {
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
    logger.error("No headers provided!");

    res.json({ message: "FORBIDDEN" });
  }
});

router.get("/food/:id", async (req, res): Promise<void> => {
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
    logger.error("No headers provided on GET /food!");

    res.json({ message: "FORBIDDEN" });
  }
});

router.post("/food/add", async (req, res): Promise<void> => {
  if (
    req.get("apiKey") === apiKey &&
    req.get("Authorization") === authorizationKey
  ) {
    try {
      const FoodModel = await prisma.food.create({
        data: req.body,
      });

      res.json(FoodModel);
    } catch (err) {
      logger.error((err as Error).message);
    }
  } else {
    logger.error("No headers provided POST /food/add!");

    res.json({ message: "FORBIDDEN" });
  }
});

router.put("/food/:id", async (req: Request, res: Response): Promise<void> => {
  if (
    req.get("apiKey") === apiKey &&
    req.get("Authorization") === authorizationKey
  ) {
    try {
      const id = Number(req.params.id);
      await prisma.food.update({ where: { id }, data: req.body });

      res.send({ message: "Changed" });
    } catch (err) {
      logger.error((err as Error).message);
    }
  } else {
    logger.error("No headers provided on PUT /food/:id!");

    res.json({ message: "FORBIDDEN" });
  }
});

router.delete(
  "/food/:id",
  async (req: Request, res: Response): Promise<void> => {
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
  }
);

export default router;
