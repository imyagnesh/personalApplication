// React Componants
import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
// material Componants
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import LinearProgress from 'material-ui/LinearProgress';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AboutIcon from 'material-ui/svg-icons/social/person';
import BlogIcon from 'material-ui/svg-icons/content/create';
import ContactIcon from 'material-ui/svg-icons/content/send';
import PortfolioIcon from 'material-ui/svg-icons/action/work';
import ResumeIcon from 'material-ui/svg-icons/action/description';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import logoImg from '../../common/images/logo.png';
// local Componants
import LocaleSelect from '../../containers/LocaleSelect/index';
// local css Componants
import css from './styles.css';


const IconComponents = { HomeIcon, AboutIcon, ResumeIcon, PortfolioIcon, BlogIcon, ContactIcon };

const Header = ({ loading, pathname, toggleDrawer, drawerState, messages, onDrawerRequestChange }) => {
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
    <div className={css.headerElement}>
      {loading && <LinearProgress mode="indeterminate" />}
      <AppBar
        title={logoElement}
        iconElementLeft={iconElementLeft}
        iconElementRight={iconElementRight}
      />
      <Drawer
        className={css.leftElement}
        docked={false}
        open={drawerState}
        onRequestChange={onDrawerRequestChange}
      >
        <ListItem
          className={css.menuHeader}
          primaryText={<div><Avatar size={60}>Y</Avatar><h3><FormattedMessage {...messages.menuHeaderName} /></h3></div>}
          secondaryText={<h5 style={{ color: 'white' }}><FormattedMessage {...messages.menuHeaderDescription} /></h5>}
        />
        {
          messages.menu.map((item, index) =>
            <div key={index}>
              <ListItem
                primaryText={<FormattedMessage {...item} />}
                onTouchTap={() => { toggleDrawer(); changePath(item.path); }}
                leftIcon={React.createElement(IconComponents[item.icon])}
              />
              <Divider />
            </div>
          )
        }
      </Drawer>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  drawerState: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  onDrawerRequestChange: PropTypes.func.isRequired,
  messages: PropTypes.object.isRequired,
};

export default Header;
