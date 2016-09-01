import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import * as socialIcons from '../../common/SvgIcons/socialMediaIcons.js';
import style from './styles.css';
import logoImg from '../../common/images/logo.png';

const styles = {
  iconStyle: {
    width: 46,
    height: 46,
  },
  buttonStyle: {
    color: 'rgba(255, 255, 255, 0.870588)',
  },
  viewBox: {
    viewBox: '0 0 32 32',
    color: '#FFF',
  },
};

const Footer = ({ messages }) => {
  const changePath = (value) => {
    browserHistory.push(value);
  };
  return (
    <div className={style.footerWrapper}>
      <div className={style.footerLogo}>
        <span><FormattedMessage {...messages.FirstName} /></span>
        <IconButton
          style={{ padding: '6px' }}
          onTouchTap={() => { changePath('/'); }}
        >
          <img className={style.imageStyle} src={logoImg} alt="Logo" />
        </IconButton>
        <span><FormattedMessage {...messages.LastName} /></span>
      </div>
      <nav>
        {
          messages.menu.map((item, index) =>
            <FlatButton
              key={index}
              style={styles.buttonStyle}
              label={<FormattedMessage {...item} />}
              onTouchTap={() => { changePath(item.path); }}
            />
          )
        }
      </nav>
      <p><FormattedMessage {...messages.FooterCopyRight} /></p>
      <nav>
        {
          messages.socialIcons.map((item, index) =>
            <IconButton key={index}
              tooltip={<FormattedMessage {...item} />}
              style={styles.iconStyle}
              children={React.createElement(socialIcons[item.icon], styles.viewBox)}
            />
          )
        }
      </nav>
    </div>
  );
};

Footer.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default Footer;
