import React, { Component } from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavDropdown,
  NavItem,
  NavLink,
} from 'reactstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { logout } from '../../views/Pages/redux/actions';

import Avatar from 'components/UserAvatar';

import './index.scss';

class Header extends Component {
  state = {
    dropdownOpen: false,
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  sidebarToggle = (e) => {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  };

  sidebarMinimize = (e) => {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  };

  mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  };

  asideToggle = (e) => {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  };

  render() {
    const { currentUser, logout: logoutAction } = this.props;
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          &#9776;
        </NavbarToggler>
        <NavbarBrand href="/" />
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          &#9776;
        </NavbarToggler>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="#">Dashboard</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#">
              <i className="icon-bell" />
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none" />
          <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              <Avatar
                className="img-avatar"
                email="itsmeskm99@gmail.com"
                name="Suresh Kumar Mukhiya"
                size={30}
              />
              <span className="d-md-down-none">Suresh Kumar Mukhiya</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <i className="fa fa-user" /> Profile
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-usd" /> Payments
                <Badge color="secondary">42</Badge>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={logoutAction}>
                <i className="fa fa-lock" /> Logout
              </DropdownItem>
            </DropdownMenu>
          </NavDropdown>
        </Nav>
        <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
          &#9776;
        </NavbarToggler>
      </header>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const mapDispatchToProps = {
  logout,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Header);

//export default Header;
