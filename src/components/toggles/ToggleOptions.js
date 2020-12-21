import React from 'react';
import { LOCALES } from '../../i18n/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/actions/language';

import { switchTheme } from '../../redux/actions/theme';
import { selectedTheme } from '../../redux/selectors';

import ToggleButton from '../ui/ToggleButton';

import sun from '../../images/sun.svg';
import night from '../../images/night.svg';

function ToggleLanguage() {
  const dispatch = useDispatch();
  const { isDark } = useSelector(selectedTheme);

  return (
    <>
      <ToggleButton
        onClick={() => dispatch(setLanguage(LOCALES.ENGLISH))}
        classes="theme left-radius right"
        content={<img src="./flags/UK_1.png" alt="UK" width="25" />}
      />
      <ToggleButton
        onClick={() => dispatch(setLanguage(LOCALES.FRENCH))}
        classes="theme"
        content={<img src="./flags/FR_2.png" alt="UK" width="21" />}
      />
      <ToggleButton
        onClick={() => dispatch(switchTheme())}
        classes="theme right-radius"
        content={
          <img
            src={isDark ? sun : night}
            alt={isDark ? 'dark' : 'light'}
            width="30"
          />
        }
      />
    </>
  );
}

export default ToggleLanguage;
