import 'dotenv/config.js';

import routes from './api/routes';
import { listenFn } from './controllers';
import cors, { CorsOptions } from 'cors';
import express, { Application } from 'express';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import { logger } from './tools';
import {
  allowedURLs,
  dbHost,
  dbName,
  dbPassword,
  dbUsername,
  errorHandler,
  mode,
  serverPort,
  storeLog,
} from './utils';
import fileUpload from 'express-fileupload';
import mysql from 'mysql2';

// deepcode ignore UseCsurfForExpress: Csurf package is deprecated.
const server: Application = express();

export const connection = mysql.createConnection({
  host: dbHost,
  user: dbUsername,
  password: dbPassword,
  database: dbName,
});

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
  logger.info(`Method: ${req.method}, URL: ${req.url}`);

  console.log(`Method: ${req.method}, URL: ${req.url}`);

  storeLog(`Method: ${req.method}, URL: ${req.url}`, req.method, req.url);

  next();
});

// Add rate limiter to limit the requests.
server.use(limiter);
// Add security middleware to the server.
server.use(helmet());
// Add cors and handle who can access to the server.
server.use(cors(corsOptions));
server.use(express.json({ limit: '1kb', type: 'application/json' }));
// Add file upload middleware.
server.use(fileUpload() as any);
// Add the routes to the server.
server.use('/api/', routes);
// Handle if the user access unknown route.
// Handle server errors.
server.use(errorHandler);

// Start the server.
if (mode !== 'test') {
  server.listen(serverPort, listenFn);
}
