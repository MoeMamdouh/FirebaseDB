import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from './../../constants/';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  slideInnerContainer: {
    width: width - 60,
    height: 67 * 3,
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 5,
    overflow: 'hidden',
    paddingLeft: 8,
    paddingBottom: 8,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
  },
});
