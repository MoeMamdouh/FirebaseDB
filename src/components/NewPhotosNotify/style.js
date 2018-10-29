import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './../../constants/';
export const styles = StyleSheet.create({
  newPostsContainer: {
    position: 'absolute',
    backgroundColor: COLORS.ORANGE,
    width: 60,
    bottom: 70,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 3,
    paddingBottom: 3,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
