import React, { Component } from 'react';
import { compose } from 'redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Breadcrumb from 'components/Breadcrumb';
import Aside from 'components/Aside/';
import Footer from 'components/Footer';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import NotFoundPage from 'containers/NotFoundPage';
import BrokersContainer from 'containers/Brokers';

import reducer from '../../views/redux/reducers';
import saga from '../../views/redux/saga';

import Dashboard from '../../views/Dashboard/';
import Charts from '../../views/Charts/';

// Components
import Tables from '../../views/Components/Tables/Tables';
import ReferUsers from '../../views/Components/Tables/ReferUsers';
import InfoUsers from '../../views/Components/Tables/InfoUsers';
import GetLanded from '../../views/Components/Tables/GetLanded';
import Brokers from '../../views/Components/Tables/Brokers';
import TablesEdit from '../../views/Components/Tables/TablesEdit';

// Icons
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';

// Support
import Technical from '../../views/Support/Technical/';
import LandedSupport from '../../views/Support/LandedSupport/';
// import SignedUserContainer from '../SignedUsers/';

//eslint-disable-next-line
class HomeRoutes extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route
                  path="/dashboard"
                  name="Dashboard"
                  component={Dashboard}
                />
                <Route
                  exact path="/users/signup"
                  name="Signed Users"
                  component={Tables}
                />
                <Route
                  exact path="/users"
                  name="Signed Users"
                  component={Tables}
                />
                <Route
                  exact path="/users/signup/:id"
                  name="Signed User Edit"
                  component={TablesEdit}
                />
                <Route
                  exact path="/users/signup/new"
                  name="User Add"
                  component={TablesEdit}
                 />
                <Route
                  path="/users/info-session"
                  name="Info Session Users"
                  component={InfoUsers}
                />
                <Route
                  path="/users/referral"
                  name="Referral Users"
                  component={ReferUsers}
                />
                <Route
                  path="/users/get-landed"
                  name="GetLanded Users"
                  component={GetLanded}
                />
                <Route
                  path="/brokers/all"
                  name="All Brokers"
                  component={Brokers}
                />
                <Route
                  path="/brokers/add-new"
                  name="Add New Broker"
                  component={SimpleLineIcons}
                />
                <Route path="/report" name="Reports" component={Charts} />
                <Route
                  path="/support/technical"
                  name="Technical"
                  component={Technical}
                />
                <Route
                  path="/support/landed"
                  name="Related Landed"
                  component={LandedSupport}
                />
                <Redirect from="/" to="/dashboard" />
                <Route path="" name="Not Found" component={NotFoundPage} />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});
const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });
export default withRouter(compose(
  withReducer,
  withSaga,
  withConnect,
)(HomeRoutes));
//export default HomeRoutes;
