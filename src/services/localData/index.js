import { AsyncStorage } from 'react-native';
import { APP_KEY } from '../../config/';

/**
 * get data from storage
 */
getData = async key => {
  key = `${APP_KEY}-${key}`;
  return await AsyncStorage.getItem(key);
};

/**
 * set data in storage
 */
setData = (key, data) => {
  key = `${APP_KEY}-${key}`;
  data = JSON.stringify(data);
  AsyncStorage.setItem(key, data);
};

/**
 * remove data from storage
 */
removeData = key => {
  key = `${APP_KEY}-${key}`;
  AsyncStorage.removeItem(key);
};

/**
 * remove all data from storage
 */
removeAll = () => {
  AsyncStorage.clear();
};

/**
 * get SavedAlbums data from storage
 */
export const getSavedAlbums = () => {
  return this.getData('savedAlbums');
};

/**
 * set SavedAlbums data from storage
 * @param {*} data
 */
export const setSavedAlbums = data => {
  this.setData('savedAlbums', data);
};

/**
 * remove SavedAlbums data from storage
 */
export const removeSavedAlbums = () => {
  this.removeData('savedAlbums');
};

export const getSavedPhotos = () => {
  return this.getData('savedPhotos');
};

export const setSavedPhotos = data => {
  this.setData('savedPhotos', data);
};

export const removeSavedPhotos = () => {
  this.removeData('savedPhotos');
};
