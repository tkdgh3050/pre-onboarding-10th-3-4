import axios from 'axios';

function ApiRequest(baseURL, token) {
  const baseInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  baseInstance.interceptors.response.use(({ data }) => data);

  return {
    get: (url, request) => baseInstance.get(url, request),
    delete: (url, request) => baseInstance.delete(url, request),
    post: (url, data, config) => baseInstance.post(url, data, config),
  };
}
export default ApiRequest;
