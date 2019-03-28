import React from 'react';
import './Header.css';
import logoMark from '../assets/glyph-logo_May2016.png';
import logoType from '../assets/instagram-logo.png';
import glass from '../assets/magnifiying-glass.png';
import discover from '../assets/discover.png';
import heart from '../assets/heart.png';
import user from '../assets/User.png';
import PropTypes from 'prop-types';

class Header extends React.Component {
  handleLogOut() {
    localStorage.clear();
  }

  render() {
    return (
      <header>
        <div className="container main-header">
          <div className="logo">
            <img
              className="logo-mark"
              src={logoMark}
              alt="instagram logo mark"
            />
            <div className="divider" />
            <img
              className="logo-type"
              src={logoType}
              alt="instagram logo type"
            />
          </div>
          <form onSubmit={this.props.onSubmit}>
            <div className="search">
              <img
                src={glass}
                className={`glass ${this.props.search ? 'hide' : ''}`}
                alt="search-icon"
              />
              <input
                type="text"
                placeholder="Search"
                value={this.props.search}
                name="search"
                onChange={this.props.onChange}
              />
            </div>
          </form>
          <nav className="main-nav">
            <button className="discover">
              <img src={discover} alt="discover" />
            </button>
            <button className="likes">
              <img src={heart} alt="likes" />
            </button>
            <button className="profile">
              <img src={user} alt="profile" />
            </button>
            <form>
              <button onClick={this.handleLogOut} className="log-out">
                Log out
              </button>
            </form>
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  submit: PropTypes.func,
  search: PropTypes.func,
  onChange: PropTypes.func
};

export default Header;
