import React, { Component } from 'react';
import { View, CameraRoll, StatusBar } from 'react-native';
import GalleryPhotos from 'react-native-image-gallery';
import _ from 'lodash';
import RNFetchBlob from 'rn-fetch-blob';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import styles from './style';
import {
  Icon,
  HeaderBtn,
  ShareModal,
  DownloadModal,
  IconBtn,
} from './../../components/';
import { ICONS, COLORS, STRINGS } from '../../constants';
import {
  savePhoto,
  getSavedPhotosData,
  isPhotoSaved,
  removeSavedPhotosData,
} from './../../services';

export default class Gallery extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isShareModalOpened: false,
      isDownloadModalOpened: false,
    };
    StatusBar.setHidden(true);
  }

  async componentWillMount() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    const { photos, startingIndex, albumDetails } = params;
    //library Constrains should take 'uri' prop to show it
    const newPhotos = _.map(photos, function(item) {
      item = _.assign({ uri: item.photoUrl }, item);
      return { source: item };
    });
    this.setState({ startingIndex, newPhotos, photos, albumDetails });

    // removeSavedAlbumsData();
    // const savedPhotos = await getSavedPhotosData();
    // console.log('saved Photos ', savedPhotos);
  }

  savePhoto = photoObject => {
    this.setState({ isDownloadModalOpened: true });
    savePhoto(photoObject);
  };

  downloadPhoto = async photoUrl => {
    try {
      const response = await RNFetchBlob.config({
        // add this option that makes response data to be stored as a file,
        // this is much more performant.
        fileCache: true,
        appendExt: 'png',
      }).fetch('GET', photoUrl);
      // the temp file path
      // console.log('The file saved to ', response, response.path());
      CameraRoll.saveToCameraRoll(response.path());
    } catch (e) {
      console.log('error', e);
    }
  };

  render() {
    const { navigation } = this.props;
    const {
      newPhotos,
      startingIndex,
      photos,
      albumDetails,
      isShareModalOpened,
      isDownloadModalOpened,
    } = this.state;
    // console.log('photos ', photos, albumDetails, 'albumDetails');
    const photoObject = photos[startingIndex];
    const { photoUrl, id } = photoObject;
    return (
      <View style={styles.container}>
        <View style={styles.closeContainer}>
          <HeaderBtn onPress={navigation.goBack}>
            <Icon source={ICONS.CLOSE} />
          </HeaderBtn>
        </View>
        <GalleryPhotos
          style={styles.image}
          initialPage={startingIndex}
          images={newPhotos}
          // images={images}
          pageMargin={10}
          onPageSelected={index => this.setState({ startingIndex: index })}
          imageComponent={props => (
            <Image
              {...props}
              indicator={Progress.Circle}
              indicatorProps={{
                size: 20,
                color: COLORS.ORANGE,
                unfilledColor: COLORS.BLACK,
              }}
            />
          )}
          // flatListProps={{
          //   onEndReached: () => {
          //     console.log('fff');
          //   },
          //   onEndThreshold: 0,
          //   onEndReachedThreshold: 0.5,
          // }}
        />
        {albumDetails ? (
          <View style={styles.shareBtnContainer}>
            <IconBtn
              onPress={() => this.setState({ isShareModalOpened: true })}
              icon={ICONS.FAVORITE}
              text={STRINGS.BUTTONS.THANKS}
            />
            <IconBtn
              onPress={() => this.savePhoto(photoObject)}
              icon={ICONS.SAVE_PHOTOS}
              text={STRINGS.BUTTONS.SAVE}
            />
            <IconBtn
              onPress={() => this.setState({ isShareModalOpened: true })}
              icon={ICONS.SHARE}
              text={STRINGS.BUTTONS.SHARE}
            />
          </View>
        ) : null}
        {albumDetails ? (
          <View>
            <ShareModal
              onClosed={() => {
                this.setState({ isShareModalOpened: false });
              }}
              isOpened={isShareModalOpened}
              albumDetails={albumDetails}
              photoUrl={photoUrl}
            />
            <DownloadModal
              onClosed={() => {
                this.setState({ isDownloadModalOpened: false });
              }}
              isOpened={isDownloadModalOpened}
              albumDetails={albumDetails}
              photoUrl={photoUrl}
              photoId={id}
              downloadPhoto={this.downloadPhoto}
            />
          </View>
        ) : null}
      </View>
    );
  }
}
