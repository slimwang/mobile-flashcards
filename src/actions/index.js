export const GET_ALL_DECKS = 'GET_ALL_DECKS';

export function getAllDecks({ cards }) {
  return {
    type: GET_ALL_DECKS,
    cards,
  };
}
