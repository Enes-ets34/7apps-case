import axios, {AxiosInstance} from 'axios';
import httpRequestInterceptor from './httpRequest.interceptor';

const httpRequest: AxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
httpRequestInterceptor(httpRequest);

export default httpRequest;
