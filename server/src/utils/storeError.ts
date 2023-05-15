import { prisma } from 'db';
import { DateTime } from 'luxon';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Store errors in the database.
 *
 * @param message - String
 * @param method - String
 * @param located - String
 * @returns Promise
 */

export const storeError = async (
  message: string,
  method?: string,
  located?: string
): Promise<void> => {
  const rnd: number = Math.floor(Math.random() * 1000);

  const time: string = DateTime.fromJSDate(new Date()).toFormat(
    'yyyy-MM-dd HH:mm'
  );

  await prisma.errors.create({
    data: {
      errorId: rnd,
      message,
      method: method || '/',
      located: located || '/',
      time,
    },
  });
};
