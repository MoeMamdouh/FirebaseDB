'use strict';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FONTS, ICONS } from '../../constants';
import { Icon } from '..';

export default class IconBtn extends React.Component {
  render() {
    const { icon, text, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Icon source={icon} style={styles.icon} />
          <Text style={FONTS.WHITE.HEADER_TITLE_BOLD}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
});
