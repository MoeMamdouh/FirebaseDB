'use strict';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FONTS } from './../../constants/';
import { styles } from './style';

export default class NewPhotosNotify extends React.Component {
  onPress = () => {
    //hide box
    this.newPosts.fadeOut();
    this.props.onPress();
  };

  render() {
    const { newAddedPhotos } = this.props;
    return (
      <Animatable.View
        style={styles.newPostsContainer}
        easing="linear"
        animation="fadeIn"
        duration={500}
        delay={1000}
        ref={component => (this.newPosts = component)}
        useNativeDriver={true}
      >
        <TouchableOpacity onPress={this.onPress}>
          {newAddedPhotos > 0 ? (
            <View style={styles.textContainer}>
              {newAddedPhotos > 1 ? (
                <Text style={FONTS.WHITE.HEADER_TITLE_BOLD}>
                  {newAddedPhotos}
                </Text>
              ) : null}
              <Text style={FONTS.WHITE.SMALL_BOLD_ITALIC}>New</Text>
              <Text style={FONTS.WHITE.SMALL_BOLD_ITALIC}>
                {newAddedPhotos == 1 ? 'Post' : 'Posts'}
              </Text>
            </View>
          ) : (
            <View style={styles.textContainer}>
              <Text style={FONTS.WHITE.SMALL_BOLD_ITALIC}>Some</Text>
              <Text style={FONTS.WHITE.SMALL_BOLD_ITALIC}>Posts</Text>
              <Text style={FONTS.WHITE.SMALL_BOLD_ITALIC}>removed</Text>
            </View>
          )}
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}
