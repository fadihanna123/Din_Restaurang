import { logger } from '../tools';
import { serverPort, storeLog } from '../utils';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Listen to the server.
 * @function listenFn
 * @returns { void } Void
 */

export const listenFn = (): void => {
  storeLog(`Servern startar på port ${serverPort}`, '', '/');
  logger.debug(`Servern startar på port ${serverPort}`);
};
