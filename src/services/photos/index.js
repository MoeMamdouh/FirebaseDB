import {
  getSavedPhotos,
  setSavedPhotos,
  removeSavedPhotos,
  toast,
} from './../';
import _ from 'lodash';

export const getSavedPhotosData = async () => {
  let photos = await getSavedPhotos();
  photos = JSON.parse(JSON.parse(photos));
  return photos;
};

export const savePhoto = async photo => {
  let photos = await getSavedPhotos();
  photos = photos ? JSON.parse(JSON.parse(photos)) : [];
  const isPhotoAlreadySaved = await isPhotoSaved(photo);
  if (!isPhotoAlreadySaved) {
    photos.unshift(photo);
    const photosData = JSON.stringify(photos);
    setSavedPhotos(photosData);
    toast('photo saved');
  } else {
    toast('photo is Already saved');
  }
};

export const isPhotoSaved = async photo => {
  let photos = await getSavedPhotos();
  photos = photos ? JSON.parse(JSON.parse(photos)) : [];
  const savedPhoto = _.find(photos, { id: photo.id });
  return savedPhoto ? true : false;
};

export const removeSavedPhotosData = () => {
  removeSavedPhotos();
};
