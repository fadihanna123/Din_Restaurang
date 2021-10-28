import axios from "axios";

export const request: {
  get: Function;
  post: Function;
  put: Function;
  delete: Function;
} = {
  get: async (url: string): Promise<void> => await axios.get(url),

  post: async (
    url: string,
    data: any,
    headers?: { headers: {} }
  ): Promise<void> => await axios.post(url, data, headers),

  put: async (
    url: string,
    data: any,
    headers?: { headers: {} }
  ): Promise<void> => await axios.put(url, data, headers),

  delete: async (url: string, headers?: { headers: {} }): Promise<void> =>
    await axios.delete(url, headers),
};
