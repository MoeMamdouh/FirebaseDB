/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, I18nManager } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import photosReducer from './src/redux/reducers/photos';
import MainNavigator from './src/navigators/';
import { COLORS } from './src/constants';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Require cycle:']);
const store = createStore(photosReducer);

type Props = {};
I18nManager.allowRTL(false);
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BLACK }}>
          <MainNavigator />
        </SafeAreaView>
      </Provider>
    );
  }
}
