import React from 'react';

import { useSelector } from 'react-redux';
import { selectedTheme } from '../../redux/selectors';
// import { t } from '../../i18n/translate';

import { THEMES } from '../../redux/types';
import ToggleButtons from '../toggles/ToggleOptions';

function Header() {
  const { isDark } = useSelector(selectedTheme);

  return (
    <div className={`baseTheme header ${isDark ? THEMES.DARK : THEMES.LIGHT}`}>
      <span className="toggleBtn">
        <ToggleButtons />
      </span>
    </div>
  );
}

export default Header;
