import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    width: (width - 50) / 2,
    height: 16 * 3,
    borderRadius: 33 * 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkBtnBG: {
    backgroundColor: COLORS.BLACK,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  lightBtnBG: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 2,
    borderColor: COLORS.BLACK,
  },
  BTNIcon: {
    marginRight: 4,
  },
  iconStyle: {
    width: 12,
    resizeMode: 'contain',
  },
});
