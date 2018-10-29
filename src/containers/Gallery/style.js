import { StyleSheet } from 'react-native';
import { COLORS } from './../../constants/';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  closeContainer: {
    alignItems: 'flex-start',
  },
  image: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    height: 600,
    marginBottom: 40,
  },
  shareBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
});
