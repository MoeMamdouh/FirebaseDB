import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    height: 180,
    width: 300,
    backgroundColor: COLORS.WHITE,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 20,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 30,
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },

  BtnsContainer: {
    paddingTop: 10,
  },

  actionBTN: {
    width: 250,
    marginBottom: 5,
  },
});
