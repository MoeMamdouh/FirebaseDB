'use strict';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

class HeaderBtn extends React.Component {
  render() {
    const { children, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress ? () => onPress() : null}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default HeaderBtn;
