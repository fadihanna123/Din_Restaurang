declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVERPORT: number;
      ALLOWED_URLS: string;
      DATABASE_URL: string;
      APIKEY: string;
      AUTHORIZATION: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};
