import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './styles.css';

const posterImg = (({ PosterImg, headerText, subHeaderText }) =>
  <div className={style.posterWrapper}>
    <div className={style.headerWraper}>
      <h1 className={style.headerTitle}><FormattedMessage {...headerText} /></h1>
      <h2 className={style.headerSubTitle}><FormattedMessage {...subHeaderText} /></h2>
    </div>
    <img className={style.posterImg} src={PosterImg} alt={<FormattedMessage {...headerText} />} />
  </div>
);

posterImg.propTypes = {
  PosterImg: PropTypes.string.isRequired,
  headerText: PropTypes.object.isRequired,
  subHeaderText: PropTypes.object.isRequired,
};

export default posterImg;
