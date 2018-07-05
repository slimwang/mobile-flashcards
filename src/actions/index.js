export const GET_ALL_DECKS = 'GET_ALL_DECKS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';

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
