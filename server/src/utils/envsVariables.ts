const {
  NODE_ENV,
  DEV_PORT,
  PROD_PORT,
  ALLOWED_URLS,
  APIKEY,
  AUTHORIZATION,
  TOKEN,
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

export const mode = NODE_ENV;

export const serverPort = mode === 'development' ? DEV_PORT : PROD_PORT;

export const dbHost = DATABASE_HOST;

export const dbUsername = DATABASE_USERNAME;

export const dbPassword = DATABASE_PASSWORD;

export const dbName = DATABASE_NAME;

export const allowedURLs = ALLOWED_URLS;

export const apiKey = APIKEY;

export const authorizationKey = AUTHORIZATION;

export const privateToken = TOKEN;
