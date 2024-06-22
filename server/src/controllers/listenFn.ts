import { port } from '../server';
import { logger } from '../tools';
import { storeLog } from '../utils';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Listen to the server.
 * @function listenFn
 * @returns { void } Void
 */

export const listenFn = (): void => {
  storeLog(`Servern startar på port ${port}`, '', '/');
  logger.debug(`Servern startar på port ${port}`);
};
