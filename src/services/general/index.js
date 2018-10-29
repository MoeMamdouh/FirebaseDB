import { WEB_URL, IS_IOS } from '../../constants';
import { openExternalLink } from './../.';
import _ from 'lodash';

export const getYouTubeVideoId = url => {
  let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  let match = url.match(regExp);

  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return 'error';
  }
};

export const getAlbumUrl = (username, albumname) =>
  `${WEB_URL}/${username}-${albumname}`;

export const openWebView = (navigate, url) => {
  // if (IS_IOS) openExternalLink(url);
  // else navigate('WebView', { url });
  navigate('WebView', { url });
};

export const addDefaultAttr = (data, obj) => {
  const newArr = _.map(data, function(element) {
    return _.extend({}, element, obj);
  });
  return newArr;
};
