'use strict';
import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import { styles } from './style';
import { FONTS } from '../../constants';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

export default class UserRow extends React.PureComponent {
  render() {
    const { owner, openProfile, style, isSmall } = this.props;
    const { id, avatarSquare80Url, fullName } = owner;
    return (
      <TouchableOpacity
        onPress={() => openProfile(id)}
        disabled={openProfile ? false : true}
      >
        <View style={[styles.userInfo, style]}>
          <View style={styles.leftContainer}>
            {avatarSquare80Url ? (
              <Image
                source={{ uri: avatarSquare80Url }}
                style={isSmall ? styles.userPhotoSmall : styles.userPhoto}
              />
            ) : null}
            <View style={isSmall ? styles.userNameSmall : styles.userName}>
              <Text
                style={[
                  isSmall ? FONTS.WHITE.SMALL_BOLD : FONTS.WHITE.MAIN,
                  styles.nameText,
                ]}
              >
                {fullName}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
