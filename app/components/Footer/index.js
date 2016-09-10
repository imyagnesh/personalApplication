import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import logoImg from '../../common/images/logo.png';

import style from './styles.css';
import baseStyle from '../../common/Style/baseStyle.css';

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
              className={style.buttonColor}
              label={<FormattedMessage {...item} />}
              onTouchTap={() => { changePath(item.path); }}
            />
          )
        }
      </nav>
      <p><FormattedMessage {...messages.FooterCopyRight} /></p>
      <nav>
        <IconButton tooltip="Facebook" tooltipPosition="top-center" children={<i className={[baseStyle.fontIcon, style.socialIconStyle, 'icon-facebook-1'].join(' ')}>&#xf09a;</i>} />
        <IconButton tooltip="Twitter" tooltipPosition="top-center" children={<i className={[baseStyle.fontIcon, style.socialIconStyle, 'icon-twitter'].join(' ')}>&#xf099;</i>} />
        <IconButton tooltip="Instagram" tooltipPosition="top-center" children={<i className={[baseStyle.fontIcon, style.socialIconStyle, 'icon-instagram'].join(' ')}>&#xf16d;</i>} />
        <IconButton tooltip="LinkedIn" tooltipPosition="top-center" children={<i className={[baseStyle.fontIcon, style.socialIconStyle, 'icon-linkedin'].join(' ')}>&#xf0e1;</i>} />
        <IconButton tooltip="Github" tooltipPosition="top-center" children={<i className={[baseStyle.fontIcon, style.socialIconStyle, 'icon-github-circled'].join(' ')}>&#xf09b;</i>} />
        <IconButton tooltip="Mail" tooltipPosition="top-center" children={<i className={[baseStyle.fontIcon, style.socialIconStyle, 'icon-mail-alt'].join(' ')}>&#xf0e0;</i>} />
      </nav>
    </div>
  );
};

Footer.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default Footer;
