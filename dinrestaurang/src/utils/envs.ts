import { toast } from 'react-toastify';

const { VITE_BACKEND_URL, VITE_FOOD_ENDPOINT, VITE_API_KEY } = import.meta.env;

if (!VITE_BACKEND_URL || !VITE_FOOD_ENDPOINT || !VITE_API_KEY) {
  toast.error('Missing keys! Add them and restart the app.');
  throw new Error('Missing keys! Add them and restart the app.');
}

export const backendURL: string | undefined = VITE_BACKEND_URL;

export const food_endpoint: string | undefined = VITE_FOOD_ENDPOINT;

export const apiKey: string | undefined = VITE_API_KEY;
