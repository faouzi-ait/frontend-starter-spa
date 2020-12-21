import React from 'react';
import { useSelector } from 'react-redux';
import { THEMES } from '../../redux/types';
import { t } from '../../i18n/translate';

import { selectedTheme } from '../../redux/selectors';

function Home() {
  const { isDark } = useSelector(selectedTheme);

  return (
    <div className={`baseTheme app ${isDark ? THEMES.DARK : THEMES.LIGHT}`}>
      {t('greeting')}, {t('home')}
    </div>
  );
}

export default Home;
