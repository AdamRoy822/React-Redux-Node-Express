import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { userListRequest, userDeleteRequest } from './redux/actions';
import { makeSelectUserList, makeSelectUserListLoading } from './redux/selectors';

class ReferralUsers extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      deleteId: null,
      showDeleteConfirm: false,
      page: 1,
      pageSize: 10,
    };
  }

  componentWillMount() {
    this.props.userList();
  }

  onChangePage = (page) => {
    this.setState({ page });
  }

  onRemove = (deleteId) => () => {
    this.setState({ deleteId, showDeleteConfirm: true });
  }

  handleConfirm = () => {
    this.props.userDelete(this.state.deleteId);
    this.setState({ showDeleteConfirm: false });
  }

  handleCancel = () => this.setState({ showDeleteConfirm: false })

  renderUsers = () => {
    const { users } = this.props;
    const { page, pageSize } = this.state;

    if (!users.size) {
      return (
        <Table.Row>
          <Table.Cell colSpan="4">
            No Users
          </Table.Cell>
        </Table.Row>
      );
    }

    return users.slice((page - 1) * pageSize, page * pageSize).map((user) => (
      <Table.Row key={user.get('id')}>
        <Table.Cell>
          <Link to={`/users/${user.get('id')}`}>
            {user.get('firstName')}
            &nbsp;
            {user.get('lastName')}
          </Link>
        </Table.Cell>
        <Table.Cell>
          {user.get('email')}
        </Table.Cell>
        <Table.Cell>
          {user.get('address')}
        </Table.Cell>
        <Table.Cell>
          <Button color="teal" size="mini" as={Link} to={`/users/${user.get('_id')}`} content="View" icon="edit" labelPosition="left" />
          &nbsp;
          <Button color="orange" size="mini" content="Remove" icon="minus" labelPosition="left" onClick={this.onRemove(user.get('_id'))} />
        </Table.Cell>
      </Table.Row>
    ));
  }

  render() {
    const { users, loading } = this.props;
    const { page, pageSize, showDeleteConfirm } = this.state;

    return (
      <Container>
        <Header as="h2" content="Users" />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderUsers()}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Pagination
                  total={users.size}
                  currentPage={page}
                  onChange={this.onChangePage}
                  perPage={pageSize}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUserList(),
  loading: makeSelectUserListLoading(),
});

const mapDispatchToProps = {
  userList: userListRequest,
  userDelete: userDeleteRequest,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ReferralUsers);
