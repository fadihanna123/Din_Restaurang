import { apiKey, authorizationKey, backendURL } from '@utils/envs';
import axios from 'axios';

axios.defaults.baseURL = backendURL;
axios.defaults.headers.common['apiKey'] = apiKey as string;
axios.defaults.headers.common['authorization'] = authorizationKey as string;

export const request = {
  get: async <T>(url: Paths) => {
    return await axios.get<T>(url);
  },

  post: async <T>(
    url: string,
    data: any,
    headers?: { headers: Record<string, never> }
  ) => {
    await axios.post<T>(url, data, headers);
  },

  put: async <T>(
    url: string,
    data: any,
    headers?: { headers: Record<string, never> }
  ) => {
    await axios.put<T>(url, data, headers);
  },

  delete: async <T>(
    url: string,
    headers?: { headers: Record<string, never> }
  ) => {
    await axios.delete<T>(url, headers);
  },
};
