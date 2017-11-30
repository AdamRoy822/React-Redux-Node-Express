import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Dashboard from 'views/Dashboard';
import reducer from 'views/Pages/redux/reducers';
import saga from 'views/Pages/redux/saga';
import { makeSelectCurrentUser, makeSelectPersistLoaded } from './selectors';
import HomeRoutes from 'containers/HomeRoutes';
import Login from '../../views/Pages/Login/';
import Register from '../../views/Pages/Register/';

class RootApp extends Component {
  renderApp = () => {
    const { currentUser } = this.props;
    console.log(currentUser);
    return currentUser ? <HomeRoutes /> : <Login />;
  }

  render() {
    const { persistLoaded } = this.props;
    const { currentUser } = this.props;
    let routing = null;
    if (!persistLoaded) {
      return null;
    }
    if (currentUser) {
      routing = (
        <Switch>
          <Route path="/login" name="Login Page" component={Login} />
          <Route
            exact
            path="/register"
            name="Register Page"
            component={Register}
          />
          <Route path="/" name="Main" component={HomeRoutes} />
        </Switch>
      );
    } else {
      routing = (
        <Switch>
          <Route path="/" name="Login Page" component={Login} />
          <Route
            exact
            path="/register"
            name="Register Page"
            component={Register}
          />
        </Switch>
      );
    }
    return (
      <div>
        {routing}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  persistLoaded: makeSelectPersistLoaded(),
});

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });
const withConnect = connect(mapStateToProps);

export default withRouter(compose(
  withReducer,
  withSaga,
  withConnect
)(RootApp));
