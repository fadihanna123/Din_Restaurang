declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_BACKEND_URL: string;
      REACT_APP_API_KEY: string;
      REACT_APP_AUTHORIZATION: string;
      NODE_ENV: 'development' | 'production';
    }
  }

  interface AddForm {
    title: string;
    sorts: string;
    price: number;
    included: string;
  }

  interface IEditForm {
    id: string;
    title: string;
    sorts: string;
    price: number;
    image: string;
    included: string;
  }

  interface Food {
    id: string;
    title: string;
    sorts: string;
    price: number;
    image: string;
    included: string;
  }

  interface TokenResponse {
    token: string;
  }

  type Paths = 'food' | 'food/add' | `food/${number}`;

  declare module '*.jpg';
}

export {};
