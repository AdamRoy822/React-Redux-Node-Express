import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import isExternal from 'is-url-external';
import classNames from 'classnames';

import nav from './_nav';
import SidebarFooter from './../SidebarFooter';
import SidebarForm from './../SidebarForm';
import SidebarHeader from './../SidebarHeader';
import SidebarMinimizer from './../SidebarMinimizer';

class Sidebar extends Component {
  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1
      ? 'nav-item nav-dropdown open'
      : 'nav-item nav-dropdown';
  }

  render() {
    const props = this.props;
    const activeRoute = this.activeRoute;
    const handleClick = this.handleClick;

    // badge addon to NavItem
    const badge = (badge_arg) => {
      if (badge_arg) {
        const classes = classNames(badge_arg.class);
        return (
          <Badge className={classes} color={badge_arg.variant}>
            {badge_arg.text}
          </Badge>
        );
      }
    };

    // simple wrapper for nav-title item
    const wrapper = (item) =>
      item.wrapper && item.wrapper.element
        ? React.createElement(
            item.wrapper.element,
            item.wrapper.attributes,
            item.name
          )
        : item.name;

    // nav list section title
    const title = (title_template, key) => {
      const classes = classNames('nav-title', title_template.class);
      return (
        <li key={key} className={classes}>
          {wrapper(title_template)}{' '}
        </li>
      );
    };

    // nav list divider
    const divider = (divider, key) => <li key={key} className="divider" />;

    // nav item with nav link
    const navItem = (item, key) => {
      const classes = classNames(item.class);
      const variant = classNames(
        'nav-link',
        item.variant ? `nav-link-${item.variant}` : ''
      );
      return (
        <NavItem key={key} className={classes}>
          {isExternal(item.url) ? (
            <RsNavLink href={item.url} className={variant} active>
              <i className={item.icon} />
              {item.name}
              {badge(item.badge)}
            </RsNavLink>
          ) : (
            <NavLink to={item.url} className={variant} activeClassName="active">
              <i className={item.icon} />
              {item.name}
              {badge(item.badge)}
            </NavLink>
          )}
        </NavItem>
      );
    };

    // nav dropdown
    const navDropdown = (item, key) => (
      <li key={key} className={activeRoute(item.url, props)}>
        <a
          className="nav-link nav-dropdown-toggle"
          href="#"
          onClick={handleClick.bind(this)}
        >
          <i className={item.icon} />
          {item.name}
        </a>
        <ul className="nav-dropdown-items">{navList(item.children)}</ul>
      </li>
    );

    // nav link
    const navLink = (item, idx) =>
      item.title
        ? title(item, idx)
        : item.divider
          ? divider(item, idx)
          : item.children ? navDropdown(item, idx) : navItem(item, idx);

    // nav list
    const navList = (items) => items.map((item, index) => navLink(item, index));

    // sidebar-nav root
    return (
      <div className="sidebar">
        <SidebarHeader />
        <SidebarForm />
        <nav className="sidebar-nav">
          <Nav>{navList(nav.items)}</Nav>
        </nav>
        <SidebarFooter />
        <SidebarMinimizer />
      </div>
    );
  }
}

export default Sidebar;
