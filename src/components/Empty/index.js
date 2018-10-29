'use strict';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { FONTS } from './../../constants/';

export default class Empty extends React.PureComponent {
  render() {
    const { message, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text style={FONTS.WHITE.MAIN_BOLD_ITALIC}>{message}</Text>
      </View>
    );
  }
}
