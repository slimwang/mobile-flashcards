import { AsyncStorage } from 'react-native';

export function getDecks() {
  return AsyncStorage.getItem('cards').then(res => JSON.parse(res));
}

export const getDeck = () => {

};

export const saveDeckTitle = () => {

};

export const addCardToDeck = () => {

};
