const { VITE_BACKEND_URL, VITE_APIKEY, VITE_AUTHORIZATION_KEY, NODE_ENV } =
  import.meta.env;

export const backendURL = VITE_BACKEND_URL;

export const apiKey = VITE_APIKEY;

export const authorizationKey = VITE_AUTHORIZATION_KEY;

export const nodeEnv = NODE_ENV;
