import 'dotenv/config.js';
import './tasks';

import routes from './api/routes';
import { listenFn } from './controllers';
import cors, { CorsOptions } from 'cors';
import express, { Application } from 'express';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import { logger } from './tools';
import { allowedURLs, errorHandler, serverPort, storeLog } from './utils';
import { connectDb } from './db';
import fileUpload from 'express-fileupload';

// deepcode ignore UseCsurfForExpress: Csurf package is deprecated.
const server: Application = express();

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

// Connect to database.
connectDb();
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

export const port: number = Number(serverPort) || 5000;
// Start the server.
server.listen(port, listenFn);
