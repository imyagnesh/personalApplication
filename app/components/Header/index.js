// React Components
import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
// material Components
import AppBar from 'material-ui/AppBar';

import { Tabs, Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';


import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import logoImg from '../../common/images/logo.png';
// local Components
import LocaleSelect from '../../containers/LocaleSelect/index';
// local css Components
import css from './styles.css';


const Header = ({ pathname, toggleDrawer, messages, UpdateBackground }) => {
  let backgroundStyle = '';
  if (UpdateBackground) {
    backgroundStyle = css.headerBackground;
  }
  const changePath = (value) => {
    browserHistory.push(value);
  };
  const iconElementRight = (
    <div className={css.rightElement}>
      <Tabs className={css.tabElement} value={pathname} onChange={changePath}>
        {
          messages.menu.map((item, index) =>
            <Tab className={css.tabStyle} key={index} label={<FormattedMessage {...item} />} value={item.path} />
          )
        }
      </Tabs>
      <LocaleSelect />
    </div>
  );
  const iconElementLeft = (
    <div className={css.leftElement}>
      <IconButton iconStyle={{ color: 'white' }} onTouchTap={toggleDrawer}><NavigationMenu /></IconButton>
    </div>
  );
  const logoElement = (
    <div className={css.logoStyle}>
      <IconButton
        onTouchTap={() => { changePath('/'); }}
        style={{ padding: '12px 6px' }}
      >
        <img className={css.imageStyle} src={logoImg} alt="Logo" />
      </IconButton>
    </div>
  );
  return (
    <AppBar
      className={[css.appBarStyle, backgroundStyle].join(' ')}
      title={logoElement}
      iconElementLeft={iconElementLeft}
      iconElementRight={iconElementRight}
    />
  );
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  messages: PropTypes.object.isRequired,
  UpdateBackground: PropTypes.bool.isRequired,
};

export default Header;
