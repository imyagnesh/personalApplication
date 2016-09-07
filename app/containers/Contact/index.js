import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CoverImg from '../../components/coverImg/index';
import GoogleMap from '../../components/Map/index';
import ContactForm from '../../components/ContactForm/index';
import ContactInformation from '../../components/ContactInformation/index';
import PosterImg from '../../common/coverVideo/cover.jpg';
import messages from './messages';


import style from './styles.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languageId: props.languageId,
      markers: [{
        position: {
          lat: 12.849830,
          lng: 77.646654,
        },
        key: 'Bangalore',
        defaultAnimation: 2,
      }],
    };

    this.sendContact = this.sendContact.bind(this);
  }

  sendContact(values) {
    new Promise(resolve => {
      setTimeout(() => {  // simulate server latency
        alert(values);
        resolve();
      }, 500);
    });
  }

  render() {
    return (
      <main className={style.wrapper}>
        <CoverImg
          PosterImg={PosterImg}
          headerText={messages.headerText}
          subHeaderText={messages.subHeaderText}
        />
        <div className={style.content}>
          <ContactInformation
            messages={messages}
          />
          <ContactForm
            messages={messages}
            onSubmit={this.sendContact}
          />

        </div>
        <GoogleMap
          markers={this.state.markers}
          languageId={this.state.languageId}
        />
      </main>
    );
  }
}

Contact.propTypes = {
  pathname: PropTypes.string.isRequired,
  languageId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps.location.pathname,
  languageId: state.locale,
});

export default connect(mapStateToProps)(Contact);
