import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import { changeLocale } from '../../actions/localeAction';
import CountryFlags from '../../common/countryFlags';
import css from './styles.css';

import { injectIntl, intlShape } from 'react-intl';

const LocaleSelect = ({ onChangeLocale, languages, languageId, intl }) => {
  const changeLanguage = (event, child) => {
    onChangeLocale(child.props.value);
  };
  return (
    <div>
      <IconMenu
        iconButtonElement={
          <IconButton>
            <img className={css.imageStyle} src={CountryFlags[languageId.toUpperCase()]} alt="language" />
          </IconButton>}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        onItemTouchTap={changeLanguage}
      >
        {
          languages.map((language) =>
            <MenuItem
              key={language.value}
              value={language.value}
              primaryText={intl.formatMessage({ id: language.value, defaultMessage: language.text })}
              leftIcon={<img className={css.imageStyle} src={CountryFlags[language.value.toUpperCase()]} alt={language.value} />}
            />
          )
        }
      </IconMenu>
    </div>
  );
};


LocaleSelect.propTypes = {
  onChangeLocale: PropTypes.func.isRequired,
  languages: PropTypes.array.isRequired,
  languageId: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
};

const mapStateToProps = (state) => ({
  languageId: state.locale,
  languages: state.languages,
});
function mapDispatchToProps(dispatch) {
  return {
    onChangeLocale: locale => dispatch(changeLocale(locale)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(LocaleSelect));
