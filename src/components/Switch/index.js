'use strict';
import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Switch } from 'react-native';
import { styles } from './style';
import { FONTS, ICONS, COLORS } from '../../constants';
import { Icon } from './../../components/';

export default class CustomSwitch extends React.PureComponent {
  render() {
    const { text, onPress, isOn } = this.props;
    return (
      <View style={styles.stickyFooter}>
        <TouchableOpacity onPress={() => onPress(!isOn)}>
          <View style={styles.footerLeft}>
            <Icon
              source={ICONS.ARROWS}
              style={styles.footerIcon}
              iconStyle={styles.footerIconStyle}
            />
            <Text style={FONTS.WHITE.MAIN_BOLD}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Switch
          onValueChange={onPress}
          value={isOn}
          trackColor={COLORS.GRAY1}
          // trackColor={COLORS.ORANGE}
        />
      </View>
    );
  }
}
