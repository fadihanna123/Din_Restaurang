import { prisma } from 'db';

/**
 * @function logsRemover
 * @async
 * @returns { Promise<void> }
 */
export const logsRemover = async (): Promise<void> => {
  await prisma.logs.deleteMany();
  await prisma.errors.deleteMany();
};
