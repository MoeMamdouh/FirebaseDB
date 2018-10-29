'use strict';
import React from 'react';
import { View, Text, TextInput, Clipboard } from 'react-native';
import Modal from 'react-native-modalbox';
import { styles } from './style';
import { CustomBtn } from '../../components';
import { FONTS, COLORS, STRINGS } from '../../constants';
import { getAlbumUrl, share } from '../../services';

export default class DownloadModal extends React.Component {
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

  downloadPhoto = hd => {
    const { downloadPhoto, photoUrl, photoId, onClosed } = this.props;
    const photo = `https://tolaroid-api-uploads.s3.amazonaws.com/uploads/studio/photo/photo/${photoId}/preview-${photoId}.jpg`;
    const HDPhoto = `https://tolaroid-api-uploads.s3.amazonaws.com/uploads/studio/photo/photo/${photoId}/hd-${photoId}.jpg`;
    let targetPhoto = hd ? HDPhoto : photo;
    // console.log('targetPhoto', targetPhoto);
    downloadPhoto(targetPhoto);
    onClosed();
  };

  render() {
    const { isOpened, onClosed } = this.props;

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
          {/* Texts */}
          <View style={styles.textsContainer}>
            <Text style={FONTS.BLACK.SMALL_BOLD}>Download the photo</Text>
          </View>

          {/* BTNS Container */}
          <View style={styles.BtnsContainer}>
            <CustomBtn
              btnText={STRINGS.BUTTONS.SAVE}
              onPress={() => this.downloadPhoto(false)}
              isLight={true}
              style={styles.actionBTN}
            />
            <CustomBtn
              btnText="Download High Resolution"
              onPress={() => this.downloadPhoto(true)}
              style={styles.actionBTN}
            />
          </View>
        </View>
      </Modal>
    );
  }
}
