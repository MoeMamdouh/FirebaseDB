import { NetInfo } from 'react-native';
import { BASE_URL } from '../../constants';
import axios from 'axios';

export const api = axios.create();
api.defaults.baseURL = `${BASE_URL}/`;
api.defaults.headers.post['Content-Type'] = 'application/json';

export const _get = async (endpoint, params) =>
  await request(endpoint, 'GET', params);

export const _post = async (endpoint, params) =>
  await request(endpoint, 'POST', params);

export const _delete = async (endpoint, params) =>
  await request(endpoint, 'DELETE');

export const _put = async (endpoint, params) => await request(endpoint, 'PUT');

const request = async (endpoint, method, params = null) => {
  try {
    return await api(endpoint, { params }, method);
  } catch (e) {
    handleRequestError(e);
  }
};

const handleRequestError = async e => {
  console.log('error ', e);
  const isConnected = await NetInfo.isConnected.fetch();
  if (!isConnected) {
    // toast(STRINGS.ERRORS.NO_INTERNET_CONNECTION_TOAST);
  } else {
    // toast(STRINGS.ERRORS.REQUEST_ERROR);
  }
};
