import { SET_LANGUAGE } from '../types';

export const language = (state = 'en-us', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.lang;
    default:
      return state;
  }
};
