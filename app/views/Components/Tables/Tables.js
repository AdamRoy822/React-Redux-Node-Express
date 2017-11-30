import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
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
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Dimmer, Confirm, Loader} from 'semantic-ui-react';
import { userListRequest, userDeleteRequest } from './redux/actions';
import { makeSelectUserList, makeSelectUserListLoading } from './redux/selectors';

class Tables extends Component {
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
    this.props.userList("users");
  }

  onChangePage = (page) => {
    this.setState({ page });
  }

  onRemove = (deleteId) => () => {
    console.log("I am deleteconfirmation");
    this.setState({ deleteId, showDeleteConfirm: true });
    console.log(deleteId);
    this.props.userDelete(deleteId);

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
        <tr>
          <td colSpan="4">
            No Users
          </td>
        </tr>
      );
    }

    return users.slice((page - 1) * pageSize, page * pageSize).map((user) => (
      <tr key={user.get('id')}>
        <td>
          <Link to={`/users/signup/${user.get('id')}`}>
            {user.get('firstName')}
            &nbsp;
            {user.get('lastName')}
          </Link>
        </td>
        <td>
          {user.get('email')}
        </td>
        <td>
          <Link to={`/users/signup/${user.get('id')}`}>View</Link>
          &nbsp;
          <Button color="danger"  onClick={this.onRemove(user.get('id'))} >Remove</Button>
        </td>
      </tr>
    ));
  }

  render() {
    const { users, loading } = this.props;
    const { page, pageSize, showDeleteConfirm } = this.state;

    return (
      <div className="animated fadeIn">
        <Dimmer active={loading}>
          <Loader />
        </Dimmer>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Users
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Actions</td>
                    </tr>
                  </thead>

                  <tbody>
                    {this.renderUsers()}
                  </tbody>
                </Table>
                 <Pagination>
                   <PaginationItem>
                     <PaginationLink previous href="#">
                       Prev
                     </PaginationLink>
                   </PaginationItem>
                   <PaginationItem active>
                     <PaginationLink href="#">1</PaginationLink>
                   </PaginationItem>
                   <PaginationItem className="page-item">
                     <PaginationLink href="#">2</PaginationLink>
                   </PaginationItem>
                   <PaginationItem>
                     <PaginationLink href="#">3</PaginationLink>
                   </PaginationItem>
                   <PaginationItem>
                     <PaginationLink href="#">4</PaginationLink>
                   </PaginationItem>
                   <PaginationItem>
                     <PaginationLink next href="#">
                       Next
                     </PaginationLink>
                   </PaginationItem>
                 </Pagination>
                  <Button  color="default" ><Link to={"/users/signup/new"}>Add User</Link></Button>
                 </CardBody>
               </Card>
             </Col>
           </Row>


      </div>
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

export default compose(withConnect)(Tables);
