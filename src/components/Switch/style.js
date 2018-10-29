import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
export const styles = StyleSheet.create({
  stickyFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: COLORS.BLACK,
  },
  footerIcon: {
    marginRight: 5,
  },
  footerIconStyle: {
    width: 28,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
