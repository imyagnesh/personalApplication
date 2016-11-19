import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CoverImg from '../../../components/coverImg/index';
import GoogleMap from '../../../components/Map/index';
import ContactForm from '../../../components/ContactForm/index';
import ContactInformation from '../../../components/ContactInformation/index';
import PosterImg from '../../../common/coverVideo/cover.jpg';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import messages from './messages';
import Title from '../../../components/Title/index';


import baseStyle from '../../../common/Style/baseStyle.css';


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

  sendContact() {
    const promise = new Promise(resolve => {
      setTimeout(() => {  // simulate server latency
        // To Do:Add Send Contact Functionality
        resolve();
      }, 500);
    });
    promise();
  }

  render() {
    return (
      <main>
        <CoverImg
          PosterImg={PosterImg}
          headerText={messages.headerText}
          subHeaderText={messages.subHeaderText}
        />
        <Title
          caption="if you think I am suitable for your project or if you'd just like to say 'hello', feel free to get in touch"
          title="Don't be shy, say hi!"
        />
        <div className={[baseStyle.content, baseStyle.column, baseStyle.gtMdRow, baseStyle.marginCenter].join(' ')}>
          <ContactForm
            messages={messages}
            onSubmit={this.sendContact}
          />
          <GoogleMap
            markers={this.state.markers}
            languageId={this.state.languageId}
          />
        </div>
        <ContactInformation
          messages={messages}
        />
        <div className={[baseStyle.content, baseStyle.row, baseStyle.marginCenter].join(' ')}>
          <div className={[baseStyle.column].join(' ')}>
            <Title
              caption="you can also contact me though socila media"
              title="I am social"
            />
            <nav className={baseStyle.alignSelfCenter}>
              <FloatingActionButton mini secondary style={{ margin: '8px' }} children={<i className={[baseStyle.fontIcon, 'icon-facebook-1'].join(' ')}>&#xf09a; </i>} />
              <FloatingActionButton mini secondary style={{ margin: '8px' }} children={<i className={[baseStyle.fontIcon, 'icon-twitter'].join(' ')}>&#xf099; </i>} />
              <FloatingActionButton mini secondary style={{ margin: '8px' }} children={<i className={[baseStyle.fontIcon, 'icon-instagram'].join(' ')}>&#xf16d; </i>} />
              <FloatingActionButton mini secondary style={{ margin: '8px' }} children={<i className={[baseStyle.fontIcon, 'icon-linkedin'].join(' ')}>&#xf0e1; </i>} />
              {
                // <FloatingActionButton mini secondary style={{ margin: '10px' }} children={<i className={[baseStyle.fontIcon, 'icon-github-circled'].join(' ')}>&#xf09b;</i>} />
              }
              <FloatingActionButton mini secondary style={{ margin: '10px' }} children={<i className={[baseStyle.fontIcon, 'icon-mail-alt'].join(' ')}>&#xf0e0; </i>} />
            </nav>
          </div>
        </div>
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
