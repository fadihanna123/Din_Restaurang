declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_BACKEND_URL: string;
      REACT_APP_FOOD_API: string;
      REACT_APP_API_KEY: string;
      REACT_APP_AUTHORIZATION_KEY: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};