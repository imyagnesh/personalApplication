import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import style from './styles.css';
import RaisedButton from 'material-ui/RaisedButton';
import ContactIcon from 'material-ui/svg-icons/content/send';

const posterVideo = ({ PosterImg, PosterVideoWebm, PosterVideoMp4, headerText, subHeaderText, headerButtonText }) => {
  const changePath = () => {
    browserHistory.push('/contact');
  };
  return (
    <div className={style.videoWrapper}>
      <div className={style.headerWraper}>
        <h1 className={style.headerTitle}><FormattedMessage {...headerText} /></h1>
        <h2 className={style.headerSubTitle}><FormattedMessage {...subHeaderText} /></h2>
        <RaisedButton
          style={{ height: '50px', minWidth: '150px' }}
          labelStyle={{ lineHeight: '50px' }}
          onTouchTap={changePath}
          label={<FormattedMessage {...headerButtonText} />}
          secondary
          icon={<ContactIcon />}
        />
      </div>
      <video autoPlay muted loop poster={PosterImg} id="bgvid" className={style.coverVideo}>
        <source src={PosterVideoWebm} type="video/webm" />
        <source src={PosterVideoMp4} type="video/mp4" />
      </video>
    </div>
  );
};

posterVideo.propTypes = {
  PosterImg: PropTypes.string.isRequired,
  PosterVideoWebm: PropTypes.string.isRequired,
  PosterVideoMp4: PropTypes.string.isRequired,
  headerText: PropTypes.object.isRequired,
  subHeaderText: PropTypes.object.isRequired,
  headerButtonText: PropTypes.object.isRequired,
};

export default posterVideo;
