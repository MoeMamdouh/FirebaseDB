import { ICONS, WEB_URL, WEB_URL_SIGNIN, SCREENS } from './';
export const CARDS = [
  {
    title: 'Saved',
    subTitle: 'Albums',
    icon: ICONS.SAVE,
    screen: SCREENS.SAVED_ALBUMS,
    openURL: true,
  },
  {
    title: 'Instant',
    subTitle: 'Photos',
    icon: ICONS.INSTANT,
    // openURL: WEB_URL,
    hide_iOS: true,
  },
  {
    title: 'Scan',
    subTitle: 'QR Code',
    icon: ICONS.SCAN,
    // openURL: WEB_URL_SIGNIN,
    hide_iOS: true,
  },
  {
    title: 'Create',
    subTitle: 'Album',
    icon: ICONS.ALBUM,
    openURL: WEB_URL,
    hide_iOS: true,
  },
  {
    title: 'Book',
    subTitle: 'Photographers',
    icon: ICONS.CAMERA,
    openURL: WEB_URL,
    hide_iOS: true,
  },
  {
    title: 'Receive',
    subTitle: 'Quotations',
    icon: ICONS.PHOTOGRAPHY,
    openURL: WEB_URL,
    hide_iOS: true,
  },
];
