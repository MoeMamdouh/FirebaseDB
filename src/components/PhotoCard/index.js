'use strict';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import { openWebView } from '../../services';

export default class PhotoCard extends React.PureComponent {
  cardClick = () => {
    const { card, navigate } = this.props;
    const { screen, openURL } = card;
    screen ? navigate(screen) : openWebView(navigate, openURL);
  };
  render() {
    const { card } = this.props;
    const { image } = card;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer} onPress={this.cardClick}>
          <Image source={image} style={styles.container} />
        </TouchableOpacity>
      </View>
    );
  }
}
