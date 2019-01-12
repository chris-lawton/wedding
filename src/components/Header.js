import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import "./Header.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      navOpen: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
    this.targetElement = document.querySelector('.header');
  }

  handleClick() {
    this.setState({
      navOpen: !this.state.navOpen
    })

    this.handleScrollLock();
  }

  closeNav(){
    if(window.innerWidth < 600) {
      this.setState({
        navOpen: false
      })

      this.handleScrollLock();
    }
  }

  handleScrollLock() {
    this.state.navOpen ? enableBodyScroll(this.targetElement) : disableBodyScroll(this.targetElement);
  }

  render() {
    const activeClass = this.state.navOpen ? 'nav-open' : '';
    const buttonText = this.state.navOpen ? 'Close' : 'Menu';

    return (
      <header className={`header ${activeClass}`}>
        <button className="header__nav-toggle" onClick={this.handleClick}>{buttonText}</button>
        <nav className="header__nav" role="navigation">
          <NavLink exact className="header__link" to="/"><div onClick={this.closeNav}>Home</div></NavLink>
          <NavLink className="header__link" to="/the-wedding"><div onClick={this.closeNav}>The Wedding</div></NavLink>
          <NavLink className="header__link" to="/getting-there"><div onClick={this.closeNav}>Getting There</div></NavLink>
          <NavLink className="header__link" to="/where-to-stay"><div onClick={this.closeNav}>Where To Stay</div></NavLink>
          <NavLink className="header__link" to="/rsvp"><div onClick={this.closeNav}>RSVP</div></NavLink>
          <NavLink className="header__link" to="/faqs"><div onClick={this.closeNav}>FAQs</div></NavLink>
        </nav>
      </header>
    )
  }
}

export default Header;
