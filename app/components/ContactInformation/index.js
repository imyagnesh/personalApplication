import React, { PropTypes } from 'react';
import * as socialIcons from '../../common/SvgIcons/socialMediaIcons.js';
import { FormattedMessage } from 'react-intl';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import SocialPerson from 'material-ui/svg-icons/social/person';
import SocialPublic from 'material-ui/svg-icons/social/public';
import ActionHome from 'material-ui/svg-icons/action/home';
import Paper from 'material-ui/Paper';

import style from './styles.css';

const styles = {
  iconStyle: {
    width: 32,
    height: 32,
  },
  buttonStyle: {
    color: 'rgba(255, 255, 255, 0.870588)',
  },
  viewBox: {
    viewBox: '0 0 32 32',
    color: '#000',
  },
  addressStyle: {
    margin: '5px 0 0',
  },
};

const ContactInformation = ({ messages }) => {
  return (
    <Paper className={style.wrapper} zDepth={2}>
      <h3>
        Contact Information
      </h3>
      <List>
        <ListItem
          leftIcon={<SocialPerson />}
          primaryText="Yagnesh Modh"
          />
        <ListItem
          leftIcon={<ActionHome />}
          primaryText={<div><div>B-113 SK Aster Apartment</div><div style={styles.addressStyle}>Electronic City Phase 1</div><div style={styles.addressStyle}>Bangalore - 560100</div></div>}
          />
        <ListItem
          leftIcon={<CommunicationCall />}
          primaryText="(650) 555 - 1234"
          />
        <ListItem
          leftIcon={<CommunicationEmail />}
          primaryText="hello@yagneshmodh.in"
          />
        <ListItem
          leftIcon={<SocialPublic />}
          primaryText="http://www.yagneshmodh.in"
          />
      </List>
      <nav>
        {
          messages.socialIcons.map((item, index) =>
            <IconButton
              key={index}
              tooltip={<FormattedMessage {...item} />}
              style={styles.iconStyle}
              children={React.createElement(socialIcons[item.icon], styles.viewBox) }
              />
          )
        }
      </nav>
    </Paper>
  );
};

ContactInformation.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default ContactInformation;
