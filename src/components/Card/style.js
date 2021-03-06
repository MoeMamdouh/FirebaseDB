import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36 * 3,
    height: 36 * 3,
    backgroundColor: COLORS.WHITE,
    borderRadius: 2 * 3,
    marginRight: 3 * 3,
    padding: 5,
  },
  btnContainer: {
    alignItems: 'center',
  },
  cardIcon: {
    width: 12 * 3,
    height: 12 * 3,
  },
});
