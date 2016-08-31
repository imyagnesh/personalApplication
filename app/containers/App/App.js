import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import messages from './messages';
import ScrollToTop from 'react-scroll-up';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentUp from 'material-ui/svg-icons/navigation/arrow-upward';

import css from './styles.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.onDrawerRequestChange = this.onDrawerRequestChange.bind(this);
  }

  onDrawerRequestChange(open) {
    this.setState({ open });
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className={css.wrapper}>
        <Helmet
          titleTemplate="%s - Yagnesh Modh"
          defaultTitle="Yagnesh modh"
          meta={[
            { name: 'description', content: 'Personal Application' },
          ]}
        />
        <Header
          loading={this.props.loading}
          pathname={this.props.pathname}
          toggleDrawer={this.handleToggle}
          drawerState={this.state.open}
          onDrawerRequestChange={this.onDrawerRequestChange}
          messages={messages}
        />
        <ScrollToTop showUnder={160}>
          <FloatingActionButton mini secondary>
            <ContentUp />
          </FloatingActionButton>
        </ScrollToTop>
        {this.props.children}
        <Footer messages={messages} />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
};


const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps.location.pathname,
  loading: state.ajaxCallsInProgress > 0,
});

export default connect(mapStateToProps)(App);

