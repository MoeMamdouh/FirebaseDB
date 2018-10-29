import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, IS_IOS } from './../../constants/';
const { width, height } = Dimensions.get('window');
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window',
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * (IS_IOS ? 0.48 : 0.45);
const slideWidth = wp(80);
const itemHorizontalMargin = wp(1);
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  headerBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionBTN: {
    width: width / 3,
    height: 34,
    borderWidth: 0,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  tagsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  slide: {
    marginLeft: 5,
    marginRight: 5,
  },
  albumPhotosCarousel: {
    marginTop: 5,
  },
  adsCarousel: {
    // paddingBottom: 60,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 24,
    paddingRight: 24,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 28,
    shadowOpacity: 0.5,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
  },
  offerText: {
    marginLeft: 10,
  },
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
  cardsContainer: {
    marginLeft: 5 * 3,
    marginTop: 4 * 3,
    marginBottom: 4 * 3,
    flexDirection: 'row',
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  gridContainer: {
    alignSelf: 'center',
  },
  imageGridContainer: {
    marginBottom: 8,
  },
});
