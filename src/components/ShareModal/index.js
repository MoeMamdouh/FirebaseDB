'use strict';
import React from 'react';
import { View, Text, TextInput, Clipboard } from 'react-native';
import Modal from 'react-native-modalbox';
import { styles } from './style';
import { CustomBtn } from '../../components';
import { FONTS, COLORS, STRINGS } from '../../constants';
import { getAlbumUrl, share } from '../../services';
import { MODAL_SHARE_TEXT } from '../../config';

export default class ShareModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { caption: '' };
  }

  componentDidMount() {
    const { albumDetails } = this.props;
    let tagList = albumDetails ? albumDetails.tagList : null;
    tagList = tagList.concat('tolaroid');
    let tags = '';
    tagList.map(hashTag => (tags = tags + '#' + hashTag + ' '));
    this.setState({ tags });
  }

  onShare = () => {
    const { onClosed, photoUrl } = this.props;
    const finalSharedText = this.getShareFinalText();
    Clipboard.setString(finalSharedText);
    share(photoUrl, finalSharedText, onClosed);
  };

  getShareFinalText = () => {
    const { caption, tags } = this.state;
    const { albumDetails } = this.props;
    const { username, name } = albumDetails;

    let finalSharedText = '';
    finalSharedText = MODAL_SHARE_TEXT
      ? MODAL_SHARE_TEXT
      : caption +
        '\n' +
        tags +
        '\n' +
        'High Resolution: ' +
        getAlbumUrl(username, name);
    return finalSharedText;
  };

  render() {
    const { isOpened, onClosed, title, albumDetails } = this.props;
    const { username, name } = albumDetails;
    const { tags } = this.state;

    return (
      <Modal
        // isDisabled={scalling}
        backdrop={true}
        onClosed={onClosed}
        isOpen={isOpened}
        style={styles.mainContainer}
        coverScreen
        backdropColor={COLORS.BLACK}
        position="center"
      >
        <View style={styles.content}>
          <View>
            {/* input */}
            <TextInput
              style={[styles.textInput, FONTS.BLACK.MEDIUM_BOLD]}
              onChangeText={value => {
                this.setState({
                  caption: value,
                });
              }}
              multiline={true}
              autoGrow={true}
              // maxLength={70}
              underlineColorAndroid="transparent"
              placeholder="write your caption..."
              placeholderTextColor={COLORS.GRAY}
              autoFocus
            />
            {/* Texts */}
            <View style={styles.textsContainer}>
              <View style={styles.tagsContainer}>
                <Text style={FONTS.BLACK.SMALL_BOLD} numberOfLines={1}>
                  {tags}
                </Text>
              </View>
              <View style={styles.linkContainer}>
                {MODAL_SHARE_TEXT ? (
                  <Text style={FONTS.BLACK.SMALL_BOLD}>{MODAL_SHARE_TEXT}</Text>
                ) : (
                  <View>
                    <Text style={FONTS.BLACK.SMALL_BOLD}>Album Link: </Text>
                    <Text style={FONTS.GRAY2.SMALL_BOLD} numberOfLines={1}>
                      {getAlbumUrl(username, name)}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
          {/* BTNS Container */}
          <View style={styles.BtnsContainer}>
            <CustomBtn
              btnText={STRINGS.BUTTONS.COPY_AND_SHARE}
              onPress={this.onShare}
              isLight={true}
              style={styles.actionBTN}
            />
          </View>
        </View>
      </Modal>
    );
  }
}
