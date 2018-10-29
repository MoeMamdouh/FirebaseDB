'use strict';
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './style';

export default class CustomActivityIndicator extends React.Component {
  render() {
    return !this.props.loaded ? (
      <ActivityIndicator animating style={styles.container} />
    ) : null;
  }
}
