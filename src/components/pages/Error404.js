import React from 'react';
import { useSelector } from 'react-redux';
import { THEMES } from '../../redux/types';
import { t } from '../../i18n/translate';

import { selectedTheme } from '../../redux/selectors';

function Error404() {
  const { isDark } = useSelector(selectedTheme);

  return (
    <div className={`baseTheme app ${isDark ? THEMES.DARK : THEMES.LIGHT}`}>
      {t('pageNotFound')}
    </div>
  );
}

export default Error404;
