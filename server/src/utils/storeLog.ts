import { prisma } from 'db';
import { DateTime } from 'luxon';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Store logs in the database.
 *
 * @param message - String
 * @param method - String
 * @param located - String
 * @returns Promise
 */

export const storeLog = async (
  message: string,
  method?: string,
  located?: string
) => {
  const time: string = DateTime.fromJSDate(new Date()).toFormat(
    'yyyy-MM-dd HH:mm'
  );

  await prisma.logs.create({
    data: {
      message,
      method: method || '/',
      located: located || '/',
      time,
    },
  });
};
