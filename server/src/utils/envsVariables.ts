const {
  SERVERPORT,
  ALLOWED_URLS,
  APIKEY,
  SSL_CRT_FILE,
  SSL_KEY_FILE,
  AUTHORIZATION,
} = process.env;

export const serverPort = SERVERPORT;

export const allowedURLs = ALLOWED_URLS;

export const apiKey = APIKEY;

export const authorizationKey = AUTHORIZATION;

export const crtFile: string | undefined = SSL_CRT_FILE;

export const keyFile: string | undefined = SSL_KEY_FILE;
