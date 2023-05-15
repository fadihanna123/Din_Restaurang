import 'dotenv/config.js';
import 'tasks';

import routes from 'api/routes';
import { listenFn } from 'controllers/listenFn';
import cors, { CorsOptions } from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import ip from 'ip';
import morgan from 'morgan';
import { logger } from 'tools';
import { allowedURLs, errorHandler, serverPort, storeLog } from 'utils';
import { connectDb } from 'db';

const server = express();

// Settings
const limiter = rateLimit({ windowMs: 3600000, max: 429 });

const whiteList = allowedURLs?.split(', ');

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (whiteList?.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

server.use((req, res, next) => {
  const ipAddress = ip.address();

  logger.info(`Method: ${req.method}, URL: ${req.url}, IP: ${ipAddress}`);

  // eslint-disable-next-line no-console
  console.log(`Method: ${req.method}, URL: ${req.url}, IP: ${ipAddress}`);

  storeLog(
    `Method: ${req.method}, URL: ${req.url}, IP: ${ipAddress}`,
    req.method,
    req.url
  );

  next();
});

connectDb();
server.use(morgan('dev'));
server.use(limiter);
server.use(helmet());
server.use(cors(corsOptions));
server.use(express.json({ limit: '1kb', type: 'application/json' }));
server.use(routes);
server.use((_, res) => res.send('This route does not exist!'));
server.use(errorHandler);

export const port: number = serverPort || 5000;
server.listen(port, listenFn);
