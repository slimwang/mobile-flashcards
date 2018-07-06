import { createStackNavigator } from 'react-navigation';
import DeckListScreen from './src/components/DeckListScreen';
import MonoDeckScreen from './src/components/MonoDeckScreen';
import QuizeScreen from './src/components/QuizScreen';
import NewQuestionScreen from './src/components/NewQuestionScreen';
import NewDeckScreen from './src/components/NewDeckScreen';

export const Stack = createStackNavigator({
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
  AddCard: {
    screen: NewQuestionScreen,
    navigationOptions: {
      title: 'Add Card',
    },
  },
  AddDeck: {
    screen: NewDeckScreen,
    navigationOptions: {
      title: 'Add Deck',
    },
  },
});
