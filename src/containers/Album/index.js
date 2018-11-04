import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import firebase from 'react-native-firebase';

const { width } = Dimensions.get('window');

export default class Album extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    firebase
      .auth()
      .signInAnonymously()
      .then(user => {
        console.log('user', user);
      });

    firebase.database().goOnline();
    const serverTime = firebase.database().getServerTime();
    console.log('serverTime ', serverTime);

    const allData = firebase.database().ref('users');
    const data = firebase.database().ref();
    console.log('allData ', allData);
    console.log('data ', data);
  }

  componentWillUnmount() {}

  render() {
    const {} = this.state;

    return (
      <View>
        <Text>asdasdasdasd</Text>
        <Text>asdasdasdasd</Text>
        <Text>asdasdasdasd</Text>
        <Text>asdasdasdasd</Text>
      </View>
    );
  }
}
