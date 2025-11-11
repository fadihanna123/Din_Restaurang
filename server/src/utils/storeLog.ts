import { connection } from '@core/server';
import { DateTime } from 'luxon';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Store logs in the database.
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

  connection.query(
    `INSERT INTO logs (message, method, located, time) VALUES ('${message}', '${method}', '${located}', '${time}')`
  );
};
