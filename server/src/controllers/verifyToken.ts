import { privateToken } from '@core/utils';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Header = req.headers.authorization;
  const token = Header?.split(' ')?.[1];

  if (!token) {
    res.status(401).json({ message: 'FORBIDDEN' });
  }

  try {
    jwt.verify(token!, privateToken as string);

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'FORBIDDEN' });
  }
};
