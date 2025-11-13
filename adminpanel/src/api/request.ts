import axios, { AxiosResponse } from 'axios';

export const request = {
  get: async <T>(
    url: Paths,
    headers?: { headers: Record<string, string> }
  ): Promise<AxiosResponse<T, any>> => await axios.get<T>(url, headers),

  post: async <T>(
    url: Paths,
    data: any,
    headers?: { headers: Record<string, string> }
  ): Promise<AxiosResponse<T, any>> => await axios.post<T>(url, data, headers),

  put: async <T>(
    url: Paths,
    data: any,
    headers?: { headers: Record<string, string> }
  ): Promise<AxiosResponse<T, any>> => await axios.put<T>(url, data, headers),

  delete: async <T>(
    url: Paths,
    headers?: { headers: Record<string, string> }
  ): Promise<AxiosResponse<T, any>> => await axios.delete<T>(url, headers),
};
