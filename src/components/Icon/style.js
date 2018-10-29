import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'contain',
    width: 18,
    height: 18,
  },
});
