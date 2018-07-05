export const GET_ALL_DECKS = 'GET_ALL_DECKS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
export const ADD_NEW_DECK = 'ADD_NEW_DECK';

export function getAllDecks({ cards }) {
  return {
    type: GET_ALL_DECKS,
    cards,
  };
}

export function addNewQuestion({ question, cardTitle }) {
  return {
    type: ADD_NEW_QUESTION,
    question,
    cardTitle,
  }
}
export function addNewDeck({ title }) {
  return {
    type: ADD_NEW_DECK,
    title,
  }
}
