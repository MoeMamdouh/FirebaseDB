import React, { Component } from 'react';
import { TouchableOpacity, ImageBackground } from 'react-native';
import { UserRow, Icon } from './../';
import { ICONS, STRINGS, COLORS } from './../../constants';

import styles from './style';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';

export default class AlbumPhotoItem extends Component {
  render() {
    const {
      index,
      data,
      owner,
      openProfile,
      openPhoto,
      clickOnShare,
      allowShare = true,
    } = this.props;
    const { photoThumbUrl, videoUrl } = data;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => openPhoto(index)}
      >
        <Image
          source={{
            uri: photoThumbUrl,
          }}
          style={styles.image}
          indicator={Progress.Circle}
          indicatorProps={{
            size: 20,
            color: COLORS.ORANGE,
            unfilledColor: COLORS.BLACK,
          }}
        >
          {owner ? <UserRow owner={owner} isSmall={true} /> : null}
          {allowShare ? (
            <Icon
              style={styles.iconContainer}
              source={ICONS.SHARE}
              onPress={() => clickOnShare()}
            />
          ) : null}
        </Image>
      </TouchableOpacity>
    );
  }
}
