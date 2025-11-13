declare global {
  interface ImportMetaEnv {
    VITE_BACKEND_URL: string;
    VITE_FOOD_ENDPOINT: string;
    VITE_TOKEN_ENDPOINT: string;
    VITE_API_KEY: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }

  interface ResponseToken {
    token: string;
  }

  interface Food {
    id: string;
    title: string;
    sorts: string;
    price: number;
    image: string;
    included: string;
  }

  type Paths = 'food' | 'food/add' | `food/${number}` | 'token';

  declare module '*.jpg';
}

export {};
