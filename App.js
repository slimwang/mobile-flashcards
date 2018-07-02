import React, { Component } from 'react';
import Expo from 'expo';
import { createStackNavigator } from 'react-navigation';
import DeckListScreen from './src/components/DeckListScreen';
import MonoDeckScreen from './src/components/MonoDeckScreen';
import { getDecks } from './utils/api';


const Stack = createStackNavigator({
  DeckList: {
    screen: DeckListScreen,
    navigationOptions: {
      title: 'Decks',
    },
  },
  MonoDeck: {
    screen: MonoDeckScreen,
    navigationOptions: {
      title: 'Udacicards',
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
    let cards;
    getDecks().then((res) => {
      cards = res || {
        cards: {
          React: {
            title: 'React',
            questions: [
              {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
              },
              {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
              },
            ],
          },
          JavaScript: {
            title: 'JavaScript',
            questions: [
              {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.',
              },
            ],
          },
        },
      };
    }); // then
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <Stack />;
  }
}
