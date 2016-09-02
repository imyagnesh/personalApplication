import React, {PropTypes} from 'react';
import * as socialIcons from '../../common/SvgIcons/socialMediaIcons.js';
import { FormattedMessage } from 'react-intl';
import IconButton from 'material-ui/IconButton';

import style from './styles.css';

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
    color: '#000',
  },
};

const ContactInformation = ({ messages }) => {
  return (
    <div className={style.wrapper}>
      Contact Information
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
    </div>
  );
};

ContactInformation.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default ContactInformation;