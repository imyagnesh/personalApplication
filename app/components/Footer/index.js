import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, GithubIcon, MailIcon } from '../../common/SvgIcons/socialMediaIcons.js';
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
      <div>
        <span>Yagnesh</span>
        <IconButton
          style={{ padding: '6px' }}
          onTouchTap={() => { changePath('/'); } }
          >
          <img className={style.imageStyle} src={logoImg} alt="Logo" />
        </IconButton>
        <span>Modh</span>
      </div>
      <nav>
        {
          messages.menu.map((item, index) =>
            <FlatButton
              key={index}
              style={styles.buttonStyle}
              label={<FormattedMessage {...item} />}
              onTouchTap={() => { changePath(item.path); } }
              />
          )
        }
      </nav>
      <p>© 2016 Yagnesh Modh.All rights reserved.Full-stack Javascript Developer</p>
      <nav>
        <IconButton tooltip="Facebook" style={styles.iconStyle}>
          <FacebookIcon {...styles.viewBox} />
        </IconButton>
        <IconButton tooltip="Twitter" style={styles.iconStyle}>
          <TwitterIcon {...styles.viewBox} />
        </IconButton>
        <IconButton tooltip="LinkeIn" style={styles.iconStyle}>
          <LinkedInIcon {...styles.viewBox} />
        </IconButton>
        <IconButton tooltip="Instagram" style={styles.iconStyle}>
          <InstagramIcon {...styles.viewBox} />
        </IconButton>
        <IconButton tooltip="Github" style={styles.iconStyle}>
          <GithubIcon {...styles.viewBox} />
        </IconButton>
        <IconButton tooltip="Mail" style={styles.iconStyle}>
          <MailIcon {...styles.viewBox} />
        </IconButton>
      </nav>
    </div>
  );
};

Footer.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default Footer;
