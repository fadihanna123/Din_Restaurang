import { port } from 'server';
import { logger } from 'tools';
import { storeLog } from 'utils/storeLog';

export const listenFn = () => {
  storeLog(`Servern startar på port ${port}`, '', '/');
  logger.debug(`Servern startar på port ${port}`);
};
