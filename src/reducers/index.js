import {
  GET_ALL_DECKS,
  ADD_NEW_QUESTION,
} from '../actions';

const initCards = {
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
};

function cards(state = initCards, action) {
  switch (action.type) {
    case GET_ALL_DECKS:
      return state;
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.cardTitle]: {
          ...state[action.cardTitle],
          questions: [...state[action.cardTitle].questions, action.question],
        }
      };
    default:
      return state;
  }
}

export default cards;
