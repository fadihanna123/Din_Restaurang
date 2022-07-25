const {
  REACT_APP_BACKEND_URL,
  REACT_APP_FOOD_API,
  REACT_APP_API_KEY,
  REACT_APP_AUTHORIZATION_KEY,
} = process.env;

export const backendURL: string | undefined = REACT_APP_BACKEND_URL;

export const food_api: string | undefined = REACT_APP_FOOD_API;

export const apiKey: string | undefined = REACT_APP_API_KEY;

export const authorizationKey: string | undefined =
  REACT_APP_AUTHORIZATION_KEY;
