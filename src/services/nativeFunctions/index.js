import { Alert, Linking } from 'react-native';
import Toast from 'react-native-root-toast';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';

export const share = async (imageUrl = '', message, cb) => {
  const base64Image = imageUrl ? await getBase64FromUrl(imageUrl) : null;
  // console.log('base64Image ', base64Image, imageUrl);
  let options = {
    title: 'Share it on Social Media Now!',
    message,
    // url: imageUrl ? MORE_ICON : null,
    url: imageUrl ? `data:image/jpeg;base64,${base64Image}` : '',
    // subject: 'Share Link', //  for email
  };

  Share.open(options)
    .then(info => {
      cb();
    })
    .catch(err => {
      cb();
    });
};

export const getBase64FromUrl = async imageUrl => {
  let imagePath = null;
  const resp = await RNFetchBlob.config({
    fileCache: true,
  }).fetch('GET', imageUrl);
  imagePath = resp.path();
  const base64 = await resp.readFile('base64');
  RNFetchBlob.fs.unlink(imagePath);
  return base64;
};

export const toast = message => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    },
  });
};

export const showAlert = (title, message, buttons, type) => {
  Alert.alert(title, message, buttons);
};

export const measureHeightAsync = component => {
  return new Promise(resolve => {
    component.measure((x, y, w, h) => {
      resolve(h);
    });
  });
};

export const openExternalLink = link => {
  Linking.canOpenURL(link).then(supported => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.log("Don't know how to open URI: " + link);
    }
  });
};
