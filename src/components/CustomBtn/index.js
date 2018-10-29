import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import { FONTS } from '../../constants';
import { Icon } from '../../components';

export default class CustomBtn extends React.Component {
  render() {
    const {
      btnText,
      onPress,
      isLight,
      style,
      textStyle,
      icon,
      iconStyle,
    } = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.btn,
          isLight ? styles.lightBtnBG : styles.darkBtnBG,
          style,
        ]}
        onPress={onPress}
      >
        {icon ? (
          <Icon
            source={icon}
            style={styles.BTNIcon}
            iconStyle={[styles.iconStyle, iconStyle]}
          />
        ) : null}

        <Text
          style={[isLight ? FONTS.BLACK.MEDIUM : FONTS.WHITE.MEDIUM, textStyle]}
        >
          {btnText}
        </Text>
      </TouchableOpacity>
    );
  }
}
