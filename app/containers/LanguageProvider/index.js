import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { IntlProvider } from 'react-intl';

class LanguageProvider extends Component {
    render() {
        return (
            <IntlProvider locale={this.props.locale} messages={this.props.messages[this.props.locale]}>
                {React.Children.only(this.props.children)}
            </IntlProvider>
        );
    }
}

LanguageProvider.propTypes = {
    locale: React.PropTypes.string,
    messages: React.PropTypes.object,
    children: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        locale: state.locale
    };
};

export default connect(mapStateToProps)(LanguageProvider);