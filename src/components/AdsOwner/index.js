'use strict';
import React from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { styles } from './style';
import { FONTS } from '../../constants';

const { width, height } = Dimensions.get('window');

export default class AdsOwner extends React.PureComponent {
  render() {
    const { owner, style, isBadge } = this.props;
    const { id, avatarSquare40Url, fullName, username } = owner;
    return (
      // <TouchableWithoutFeedback onPress={() => openProfile(id)}>
      <View style={[styles.userInfo, style]}>
        <View style={styles.leftContainer}>
          {avatarSquare40Url ? (
            <Image
              source={{ uri: avatarSquare40Url }}
              style={styles.userPhoto}
            />
          ) : null}
          <View style={styles.userName}>
            <Text style={FONTS.BLACK.MEDIUM_BOLD}>{fullName}</Text>
            <Text style={FONTS.GRAY1.SMALL}>@{username}</Text>
          </View>
        </View>
      </View>
      // </TouchableWithoutFeedback>
    );
  }
}
