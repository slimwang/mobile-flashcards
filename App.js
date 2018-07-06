import React, { Component } from 'react';
import Expo from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';
import { Stack } from './routes.js';
import {
  setLocalNotification,
  clearLocalNotification,
} from './src/utils/helpers';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({ isReady: true });
  }

  componentDidMount() {
    clearLocalNotification()
    .then(setLocalNotification);
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={createStore(reducer)}>
        <Stack />
      </Provider>
    );
  }
}
