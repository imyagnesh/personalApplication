import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import { localeActions } from '../../actions';
import CountryFlags from '../../common/countryFlags';
import css from './styles.css';

import { injectIntl, intlShape } from 'react-intl';

const LocaleSelect = ({ actions, languages, languageId, intl }) => {
  const changeLanguage = (event, child) => {
    localStorage.setItem('locale', child.props.value);
    actions.changeLocale(child.props.value);
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
  languages: PropTypes.array.isRequired,
  languageId: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  languageId: state.locale,
  languages: state.languages,
});
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(localeActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(LocaleSelect));
