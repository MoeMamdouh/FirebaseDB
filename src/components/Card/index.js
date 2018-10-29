'use strict';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import { Icon } from './../';
import { FONTS, IS_IOS, COLORS } from './../../constants';
import { openWebView } from '../../services';
import call from 'react-native-phone-call';

export default class Card extends React.PureComponent {
  cardClick = () => {
    const { card, navigate } = this.props;
    const { screen, openURL, isPhoneNumber } = card;
    if (isPhoneNumber) this.phoneCall(openURL);
    else {
      screen ? navigate(screen) : openWebView(navigate, openURL);
    }
  };

  phoneCall = number => {
    console.log('number', number);
    try {
      call({
        number,
        prompt: false,
      });
    } catch (e) {
      console.log('e', e);
    }
  };

  render() {
    const { card, navigate } = this.props;
    const { title, subTitle, icon, openURL, hide_iOS, isDefault } = card;
    if (!openURL) return null;
    if (IS_IOS && hide_iOS) return null;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer} onPress={this.cardClick}>
          <Icon
            source={icon}
            iconStyle={styles.cardIcon}
            color={!isDefault ? COLORS.MAIN : null}
          />
          <Text style={FONTS.BLACK.MAIN_BOLD} numberOfLines={1}>
            {title}
          </Text>
          <Text style={FONTS.GRAY.MAIN_BOLD} numberOfLines={1}>
            {subTitle}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
