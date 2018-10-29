import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
export const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'space-between',
    shadowColor: COLORS.BLACK,
    shadowRadius: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 1,
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
    marginLeft: 16,
  },
  userNameSmall: {
    marginLeft: 3,
  },
  nameText: {
    shadowColor: COLORS.BLACK,
    shadowRadius: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 1,
  },
});
