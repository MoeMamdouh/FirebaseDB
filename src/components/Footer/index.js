'use strict';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

import { openExternalLink } from '../../services';
import { FOOTER_LINK } from '../../config';
import { IMAGES } from '../../constants';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity onPress={() => openExternalLink(FOOTER_LINK)}>
        <View style={styles.cover}>
          <Image source={IMAGES.FOOTER} style={styles.cover} />
        </View>
      </TouchableOpacity>
    );
  }
}
