import 'dotenv/config';

import routes from 'api/routes';
import { listenFn } from 'controllers/listenFn';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import { allowedURLs, errorHandler, serverPort } from 'utils';

const server = express();

const limiter = rateLimit({ windowMs: 3600000, max: 55 });

const whiteList = allowedURLs?.split(', ');

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (whiteList?.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Settings
server.use(morgan('dev'));
server.use(limiter);
server.use(helmet());
server.use(cors(corsOptions));
server.use(express.json({ limit: '1kb', type: 'application/json' }));
server.use(routes);
server.use(errorHandler);

export const port: number = parseInt(serverPort as string, 10);
server.listen(port, listenFn);
