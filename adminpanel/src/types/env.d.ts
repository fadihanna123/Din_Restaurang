declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_BACKEND_URL: string;
      REACT_APP_API_KEY: string;
      REACT_APP_AUTHORIZATION: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};
