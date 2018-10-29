import React, { Component } from 'react';
import {
  View,
  Text,
  WebView,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { FONTS, IMAGES, STRINGS } from './../../constants';
import { openExternalLink, getYouTubeVideoId } from './../../services';
import { AdsOwner } from './../';
import styles from './style';

export default class Ads extends Component {
  render() {
    const { offer, isHideButtonsMode } = this.props;
    const { imageUrl, title, sponsor, videoUrl, callToAction } = offer;
    const YouTubeVideoId = getYouTubeVideoId(videoUrl);
    // console.log('offer', offer);
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => (callToAction ? openExternalLink(callToAction) : {})}
        >
          <View>
            {!isHideButtonsMode ? (
              <View style={styles.header}>
                <AdsOwner owner={sponsor} style={styles.adsOwnerContainer} />
                <ImageBackground
                  source={IMAGES.ORANGE_BTN}
                  style={styles.btnContainer}
                >
                  <Text style={FONTS.WHITE.MAIN_BOLD_ITALIC}>
                    {STRINGS.BUTTONS.LEARN_MORE}
                  </Text>
                </ImageBackground>
              </View>
            ) : null}
            {imageUrl ? (
              <Image source={{ uri: imageUrl }} style={styles.webView} />
            ) : (
              <WebView
                style={styles.webView}
                javaScriptEnabled={true}
                source={{
                  uri: `https://www.youtube.com/embed/${YouTubeVideoId}?rel=0&autoplay=1&showinfo=1&controls=1`,
                }}
              />
            )}
            <View style={styles.textContainer}>
              {isHideButtonsMode ? (
                <Text style={FONTS.GRAY1.SMALL}>@{sponsor.username}</Text>
              ) : null}
              <Text style={FONTS.BLACK.MEDIUM}>{title}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
