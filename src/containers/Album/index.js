import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class Album extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

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
