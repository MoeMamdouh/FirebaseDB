import { platformIcons } from './icons';

export const IMAGES = {
  LOGO: require('./../assets/images/logo.png'),
  ORANGE_BTN: require('./../assets/images/learn_more.png'),
  ALBUM_IMAGE_FALLBACK:
    'data:image/jpeg;base64,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',
  CARD1: require('./../assets/images/card1.png'),
  CARD2: require('./../assets/images/card2.png'),
};