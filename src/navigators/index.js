import React from 'react';
import { Image, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Album, Gallery, WebView } from '../containers/';
import { COLORS, ICONS, IMAGES, FONTS } from './../constants/';
import { Icon, HeaderBtn } from './../components/';
import styles from './style';
const RouteConfigs = {
  Album: {
    screen: Album,
    navigationOptions: ({ navigation }) => {
      return {
        // headerRight: <Text>3 MB</Text>,
        // headerTitle: <Image source={IMAGES.LOGO} style={styles.screenTitle} />,
      };
    },
  },
  Gallery: {
    screen: Gallery,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    },
  },
  WebView: {
    screen: WebView,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <HeaderBtn onPress={navigation.goBack}>
            <Icon source={ICONS.BACK} color={COLORS.WHITE} />
          </HeaderBtn>
        ),
      };
    },
  },
};
const StackNavigatorConfig = {
  //Sets the default screen of the stack. Must match one of the keys in route configs.
  initialRouteName: 'Album',

  navigationOptions: {
    headerStyle: {
      backgroundColor: COLORS.BLACK,
      borderBottomWidth: 0,
    },
    gesturesEnabled: false,
  },
};

export default StackNavigator(RouteConfigs, StackNavigatorConfig);
