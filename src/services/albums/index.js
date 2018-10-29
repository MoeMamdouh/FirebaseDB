import { ENDPOINTS, EVENT_CARDS } from '../../constants';
import { INITIAL_FETCHED_PHOTOS } from '../../config';
import {
  _get,
  getSavedAlbums,
  setSavedAlbums,
  removeSavedAlbums,
  toast,
} from './../';
import _ from 'lodash';
import moment from 'moment';

export const requestAlbums = async (coords, isOnLine, isUpcoming) => {
  const { latitude, longitude } = coords;
  const isPast = !isOnLine && !isUpcoming ? true : false;
  const params = {
    lat: isPast ? '' : latitude,
    lng: isPast ? '' : longitude,
    online: isOnLine,
    upcoming: isUpcoming,
  };
  return _get(ENDPOINTS.SEARCH, params);
};

export const requestAlbumDetails = async (albumName, user_id, albumCode) => {
  let params = !albumCode
    ? {
        scroll_previous_id: 0,
        user_id,
        'q[name_eq]': albumName,
      }
    : {
        'q[id_eq]': albumCode.toUpperCase(),
      };
  return _get(ENDPOINTS.ALBUM_DETAILS, params);
};

export const requestAbumPhotos = async (
  albumId,
  photo_id,
  page_size = INITIAL_FETCHED_PHOTOS,
  dir = 'desc',
) => {
  const params = {
    'q[album_id_eq]': albumId,
    page_size,
    photo_id,
    dir,
  };
  return _get(ENDPOINTS.ALBUM_PHOTOS, params);
};

export const getSavedAlbumsData = async () => {
  let albums = await getSavedAlbums();
  albums = JSON.parse(JSON.parse(albums));
  return albums;
};

export const saveAlbum = async album => {
  let albums = await getSavedAlbums();
  albums = albums ? JSON.parse(JSON.parse(albums)) : [];
  const isAlbumAlreadySaved = await isAlbumSaved(album);
  if (!isAlbumAlreadySaved) {
    albums.unshift(album);
    const albumsData = JSON.stringify(albums);
    setSavedAlbums(albumsData);
    toast('album saved');
  } else {
    toast('album is Already saved');
  }
};

export const isAlbumSaved = async album => {
  let albums = await getSavedAlbums();
  albums = albums ? JSON.parse(JSON.parse(albums)) : [];
  const savedAlbum = _.find(albums, { id: album.id });
  return savedAlbum ? true : false;
};

export const removeSavedAlbumsData = () => {
  removeSavedAlbums();
};

export const initializeAlbumCardsWithLinks = albumDetails => {
  const {
    eventLinkLike,
    eventLinkFeedback,
    eventLinkSponsorship,
    eventLinkTickets,
    eventLinkDetails,
    eventLinkAgenda,
    eventLinkMap,
    eventLinkApp,
    eventEmailContact,
    eventEmailMedia,
    eventSchedules,
  } = albumDetails;
  let start;
  if (eventSchedules.length) start = eventSchedules[0].start;
  EVENT_CARDS[0].openURL = '';
  EVENT_CARDS[1].openURL = eventLinkSponsorship;
  EVENT_CARDS[2].openURL = eventLinkFeedback;
  EVENT_CARDS[3].openURL = eventEmailContact;
  EVENT_CARDS[4].openURL = eventLinkTickets;
  EVENT_CARDS[5].openURL = eventLinkDetails;
  EVENT_CARDS[6].openURL = eventLinkAgenda;
  EVENT_CARDS[7].openURL = eventLinkMap;
  EVENT_CARDS[8].openURL = eventEmailContact;
  EVENT_CARDS[9].openURL = eventEmailMedia;
  EVENT_CARDS[10].openURL = eventLinkApp;
  //"2018-05-05T21:30:00.000Z"
  const isEventAlreadyStart = moment().diff(start);
  if (isEventAlreadyStart) {
    EVENT_CARDS[1].openURL = '';
  } else {
    EVENT_CARDS[2].openURL = '';
    EVENT_CARDS[3].openURL = '';
  }
  // console.log('EVENT_CARDS ', EVENT_CARDS);
  return EVENT_CARDS;
};

//creat same form fot album object
export const getAlbumObject = albumDetails => {
  const { id, name, username, userId, image } = albumDetails;
  let albumObj = {};
  albumObj.image = image;
  let user = {};
  user.id = userId;
  user.username = username;
  let album = {};
  album.albumId = id;
  album.albumname = name;
  album.user = user;
  album.album = albumObj;

  return album;
};
