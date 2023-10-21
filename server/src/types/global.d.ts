import { Request } from 'express';

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

  interface IFood {
    title: string;
    sorts: string;
    price: number;
    image: string;
    included: string;
  }

  interface TypedRequestBody<T> extends Request {
    body: T;
  }
}

export {};
