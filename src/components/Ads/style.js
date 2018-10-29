import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from './../../constants/';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    overflow: 'hidden',
    width: width - 50,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  adsOwnerContainer: {
    marginLeft: 8,
    marginTop: 8,
  },
  btnContainer: {
    width: 120,
    height: 13.5 * 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    margin: 12,
  },
  webView: {
    flex: 1,
    height: 60 * 3,
    width: width - 50,
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    //   height: 240,
    //   width: width,
    //   justifyContent: 'center',
    //   alignItems: 'center',
  },
});
