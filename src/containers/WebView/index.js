import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import styles from './style';

export default class WebViewScreen extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    const { url } = params;
    return (
      <View style={styles.container}>
        <WebView source={{ uri: url }} style={styles.webView} />
      </View>
    );
  }
}
