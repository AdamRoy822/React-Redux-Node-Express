import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'react-avatar';
import { getRandomColor } from 'react-avatar/lib/utils';

export default class Avatar extends PureComponent {
  static defaultProps = {
    invert: true,
    size: '30',
    colors: [
      '#12876f', // '#1abc9c',
      '#1e8549', // '#2ecc71',
      '#2a7eb5', // '#3498db',
      '#9b59b6',
      '#16a085',
      '#27ae60',
      '#2980b9',
      '#8e44ad',
      '#917508', // '#f1c40f',
      '#e67e22',
      '#e74c3c',
      '#f39c12',
      '#d35400',
      '#c0392b',
    ],
  };

  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    invert: PropTypes.bool,
    // src: PropTypes.string,
  };

  render() {
    const { name, colors, size, invert, email } = this.props;
    return (
      <UserAvatar
        round
        color={invert ? '#fff' : null}
        colors={colors}
        email={email}
        fgColor={invert ? getRandomColor(name, colors) : null}
        name={name}
        size={size}
      />
    );
  }
}
