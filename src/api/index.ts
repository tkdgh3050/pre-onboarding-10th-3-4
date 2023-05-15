import axios, { AxiosRequestConfig } from 'axios';
import { ApiRequestProps } from '@type/props';

function ApiRequest({ baseURL, token }: ApiRequestProps) {
  const baseInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  baseInstance.interceptors.response.use(({ data }) => data);

  return {
    get: (url: string, request?: AxiosRequestConfig) => baseInstance.get(url, request),
    delete: (url: string, request?: AxiosRequestConfig) => baseInstance.delete(url, request),
    post: (url: string, data: object, config?: AxiosRequestConfig) => baseInstance.post(url, data, config),
  };
}
export default ApiRequest;
