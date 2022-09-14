import { port } from 'server';
import { logger } from 'tools';
import { storeLog } from 'utils/storeLog';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Listen to the server.
 *
 * @returns Void
 */

export const listenFn = () => {
  storeLog(`Servern startar på port ${port}`, '', '/');
  logger.debug(`Servern startar på port ${port}`);
};
