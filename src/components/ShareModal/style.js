import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    height: 200,
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

  textInput: {
    fontSize: 16,
    maxHeight: 40,
    padding: 0,
    margin: 0,
    borderWidth: 0, // important, don't know why
    // height: Platform.OS == 'android' ? 33 : 28,
  },

  tagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  linkContainer: {
    marginTop: 10,
    // flexDirection: 'row',
  },

  BtnsContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },

  actionBTN: {
    width: 250,
  },
});
