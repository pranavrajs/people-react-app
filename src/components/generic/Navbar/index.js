import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import './navbar.css';

const Navbar = ({ user }) => (
  <nav className="navbar">
    <div className="container mx-auto navbar--container">
      <div className="navbar--user">
        <Avatar name={user.name} />
        <div className="navbar--userdetails">
          <div className="navbar--username">{user.name}</div>
          <div className="navbar--role">{user.role}</div>
        </div>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
  }),
};

Navbar.defaultProps = {
  user: {},
};

export default Navbar;
