import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
export const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userPhotoSmall: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  userPhoto: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
  },
  userName: {
    marginLeft: 6,
  },
  userNameSmall: {
    marginLeft: 3,
  },
});
