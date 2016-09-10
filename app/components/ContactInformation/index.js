import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import SocialPublic from 'material-ui/svg-icons/social/public';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import style from './styles.css';

import baseStyle from '../../common/Style/baseStyle.css';



// <div className={style.socialIconNav}>
//         <h3 className={style.header}>
//           I am Social
//         </h3>
//         <nav>
//           {
//             messages.socialIcons.map((item, index) =>
//               <IconButton
//                 key={index}
//                 tooltip={<FormattedMessage {...item} />}
//                 children={React.createElement(socialIcons[item.icon], styles.viewBox)}
//               />
//             )
//           }
//         </nav>
//       </div>

const ContactInformation = ({ messages }) => {
  const contactInfoDivStyle = [baseStyle.row, style.ContactInfoDivWidth, baseStyle.alignStartCenter].join(' ');
  return (
    <div className={[baseStyle.content, baseStyle.marginCenter, baseStyle.wrap].join(' ')}>
      <div className={contactInfoDivStyle}>
        <FloatingActionButton secondary>
          <MapsPlace />
        </FloatingActionButton>
        <div style={{ margin: '1rem' }}>
          <h1 className={baseStyle.subHeader}>B-113 SK Aster Apartment, Electronic City Phase 1, Bangalore - 560100, India</h1>
        </div>
      </div>
      <div className={contactInfoDivStyle}>
        <FloatingActionButton secondary>
          <CommunicationCall />
        </FloatingActionButton>
        <div style={{ margin: '1rem' }}>
          <h1 className={baseStyle.subHeader}>+91-8690090417</h1>
        </div>
      </div>
      <div className={contactInfoDivStyle}>
        <FloatingActionButton secondary>
          <CommunicationEmail />
        </FloatingActionButton>
        <div style={{ margin: '1rem' }}>
          <h1 className={baseStyle.subHeader}>hello@yagneshmodh.in</h1>
        </div>
      </div>
      <div className={contactInfoDivStyle}>
        <FloatingActionButton secondary>
          <SocialPublic />
        </FloatingActionButton>
        <div style={{ margin: '1rem' }}>
          <h1 className={baseStyle.subHeader}>www.yagneshmodh.in</h1>
        </div>
      </div>
    </div>
  );
};

ContactInformation.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default ContactInformation;
