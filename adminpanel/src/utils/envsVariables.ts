import { toast } from 'react-toastify';

const { VITE_BACKEND_URL, VITE_API_KEY, VITE_TOKEN_ENDPOINT, NODE_ENV } =
  import.meta.env;

if (!VITE_BACKEND_URL || !VITE_API_KEY || !VITE_TOKEN_ENDPOINT) {
  toast.error('Missing keys! Add them and restart the app.');
  throw new Error('Missing keys! Add them and restart the app.');
}

export const backendURL = VITE_BACKEND_URL;

export const apiKey = VITE_API_KEY;

export const get_token_endpoint = VITE_TOKEN_ENDPOINT;

export const nodeEnv = NODE_ENV;
