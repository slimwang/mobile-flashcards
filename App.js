import React, { Component } from 'react';
import Expo from 'expo';
import { createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';
import DeckListScreen from './src/components/DeckListScreen';
import MonoDeckScreen from './src/components/MonoDeckScreen';
import QuizeScreen from './src/components/QuizScreen';


const Stack = createStackNavigator({
  DeckList: {
    screen: DeckListScreen,
    navigationOptions: {
      title: 'Decks',
    },
  },
  MonoDeck: {
    screen: MonoDeckScreen,
  },
  Quiz: {
    screen: QuizeScreen,
    navigationOptions: {
      title: 'Quiz',
    },
  },
});

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
