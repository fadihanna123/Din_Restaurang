import 'dotenv/config';

import routes from 'api/routes';
import { listenFn } from 'controllers/listenFn';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import helmet from 'helmet';
import https from 'https';
import morgan from 'morgan';
import { allowedURLs, crtFile, errorHandler, keyFile, serverPort } from 'utils';

const server = express();

// Settings
const limiter = rateLimit({ windowMs: 3600000, max: 429 });

const whiteList = allowedURLs?.split(', ');

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (whiteList?.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const httpsOptions = {
  key: fs.readFileSync(keyFile as string),
  cert: fs.readFileSync(crtFile as string),
};

server.use(morgan('dev'));
server.use(limiter);
server.use(helmet());
server.use(cors(corsOptions));
server.use(express.json({ limit: '1kb', type: 'application/json' }));
server.use(routes);
server.use(errorHandler);

export const port: number = parseInt(serverPort as string, 10);
https.createServer(httpsOptions, server).listen(port, listenFn);
