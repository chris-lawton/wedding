import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import "./Header.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      navOpen: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  render() {
    const activeClass = this.state.navOpen ? 'nav-open' : '';

    return (
      <header className={`header ${activeClass}`}>
        <button className="header__nav-toggle" onClick={this.handleClick}>Click me</button>
        <nav className="header__nav" role="navigation">
          <NavLink exact className="header__link" to="/">Home</NavLink>
          <NavLink className="header__link" to="/the-wedding">The Wedding</NavLink>
          <NavLink className="header__link" to="/getting-there">Getting There</NavLink>
          <NavLink className="header__link" to="/where-to-stay">Where To Stay</NavLink>
          <NavLink className="header__link" to="/rsvp">RSVP</NavLink>
        </nav>
      </header>
    )
  }
}

export default Header;
