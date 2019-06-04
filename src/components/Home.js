import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

const Home = () => (
  <div className="home">
    <p className="home__xl">You're invited to our wedding on</p>
    <p className="home__xxl">31<sup>st</sup> August, 2019</p>
    <p className="home__s">at</p>
    <p className="home__l">Plas Dinam Country House<br />Llandinam, Powys</p>
    <NavLink className="home__cta" to="/rsvp">RSVP</NavLink>
    <p>Please RSVP by the <b>10<sup>th</sup> July 2019</b>.</p>
  </div>
)

export default Home;
