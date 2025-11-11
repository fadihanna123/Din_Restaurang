import { Request } from 'express';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVERPORT: number;
      ALLOWED_URLS: string;
      DATABASE_URL: string;
      APIKEY: string;
      AUTHORIZATION: string;
      NODE_ENV: 'development' | 'production' | 'test';
      DATABASE_HOST: string;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
      DATABASE_NAME: string;
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

  type Routes = '/food' | '/food/:id' | '/food/add';
}

export {};
