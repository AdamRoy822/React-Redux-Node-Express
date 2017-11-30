import React, { Component } from 'react';
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import {
  userLoadRequest,
  updateUserField,
  userSaveRequest,
  loadNewUser,
} from './redux/actions';
import { makeSelectUser, makeSelectUserLoading } from './redux/selectors';
//eslint-disable-next-line
class TablesEdit extends Component {
  componentWillMount() {
    this.loadUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.loadUser(nextProps.match.params.id);
    }
  }

  onSubmit = () => {
    this.props.userSave();
  }

  onUpdateField = (field) => (evt) => {
    this.props.updateField(field, evt.target.value);
  }

  onUpdateDropdown = (field) => (evt, data) => {
    this.props.updateField(field, data.value);
  }

  loadUser = (id) => {
    const { userLoad } = this.props;
    if (id === 'new') {
      this.props.loadNewUser();
    } else {
      userLoad(id);
    }
  }

  render() {
    const { currentUser, user, loading } = this.props;
      return (
          <div className="animated fadeIn">

            <Card>

            <CardHeader>
              <i className="fa fa-align-justify" /> {user.get('id') ? 'Edit User' : 'New User'}
            </CardHeader>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="firstName">FirstName</Label>
                <Input type="text" name="firstName" required value={user.get('firstName') || ''} onChange={this.onUpdateField('firstName')} id="firstName" placeholder="FirstName" />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">LastName</Label>
                <Input type="text" name="lastName" required value={user.get('lastName') || ''} onChange={this.onUpdateField('lastName')} id="lastName" placeholder="LastName" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" required value={user.get('email') || ''} onChange={this.onUpdateField('email')} id="email" placeholder="email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" required value={user.get('password') || ''} onChange={this.onUpdateField('password')} id="password" placeholder="password" />
              </FormGroup>
              <Button color="info">Save</Button>&nbsp;&nbsp;
              <Link to="/users">Cancel</Link>
            </Form>
          </Card>
          </div>

    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  currentUser: makeSelectCurrentUser(),
  loading: makeSelectUserLoading(),
});

const mapDispatchToProps = {
  userLoad: userLoadRequest,
  updateField: updateUserField,
  userSave: userSaveRequest,
  loadNewUser,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(TablesEdit);
