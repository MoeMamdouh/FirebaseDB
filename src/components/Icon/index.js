'use strict';
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

export default class Icon extends React.PureComponent {
  render() {
    const { onPress, source, color, style, iconStyle } = this.props;
    return (
      <View style={style}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={onPress}
          disabled={onPress ? false : true}
        >
          <Image
            style={[{ tintColor: color }, styles.icon, iconStyle]}
            source={source}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
