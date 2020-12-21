import { createSelector } from 'reselect';

const theme = (state) => state.theme;
const language = (state) => state;

export const selectedTheme = createSelector([theme], (theme) => theme);

export const selectedLanguage = createSelector(
  [language],
  ({ language }) => language
);
