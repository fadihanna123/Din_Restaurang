import { PrismaClient } from '@prisma/client';
import { logger } from 'tools';
import { storeError, storeLog } from 'utils';

const prisma = new PrismaClient();

const connectDb = async () => {
  try {
    await prisma.$connect();
    storeLog('Database is connected!');
    logger.info('Database is connected!');
  } catch (err) {
    storeError((err as Error).message);
    logger.error((err as Error).message);
  }
};

export { prisma, connectDb };
