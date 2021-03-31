import storage from '../store';
import axios from 'axios';
import { TGenerateOptions, TFormatResponse } from '@types';

// const prodBaseURL = 'https://renko-api-prod.herokuapp.com/api/v1';
const baseURL = 'https://renko-api-prod.herokuapp.com/api/v1';
// const baseURL = 'http://192.168.0.42:3001/api/v1'
// const baseURL = __DEV__ ? 'http://localhost:3001/api/v1' : 'http://192.168.0.103:3000/api/v1/';

const instance = axios.create();
instance.defaults.timeout = 24000;
instance.defaults.baseURL = baseURL;


export const httpPost = (url: string, data: any) => sendRequest({ method: 'POST', url, data });
export const httpDel = (url: string) => sendRequest({ method: 'DELETE', url });
export const httpPut = (url: string, data: any) => sendRequest({ method: 'PUT', url, data });
export const httpGet = (url: string, params?: any) => sendRequest({ method: 'GET', url, params });

const formatResponse: (response?: any) => TFormatResponse = (response = {}) => ({
  data: response.data || {},
  status: response.status || 418,
  statusText: response.statusText || '',
});

const sendRequest = async ({ method, url, data = undefined, params = undefined }: TGenerateOptions) => {
  const OPTIONS = generateOptions({ method, url, data, params });
  try {
    const response = await instance(OPTIONS);
    return response;
  } catch (error) {
    if (error.response?.status === 408 || error.code === 'ECONNABORTED') {
      throw formatResponse({
        status: 408,
        statusText: 'Request timeout!!',
      });
    }

    throw formatResponse(error.response);
  }
};

const generateOptions = ({ method, url, data, params }: TGenerateOptions) => {
  const appGlobalState: any = storage?.store?.getState()?.appGlobalState || null;
  const token = appGlobalState?.access_token || '';

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const authHeader = {
    'Authorization': `JWT ${token}`,
  };

  return {
    method,
    url,
    data,
    params,
    headers: {
      ...defaultHeaders,
      ...(token ? authHeader : {}),
    },
  };
};
