import React from 'react';
import { NavLink } from 'react-router-dom';

const Wedding = () => (
  <div>
    <h1>The Wedding</h1>
    <h2>Ceremony &amp; Reception</h2>
    <p>The ceremony will start at <b>2pm</b>.</p>
    <p>The ceremony and reception will take place at <b>Plas Dinam</b>. The ceremony will be outside if the weather permits - fingers crossed! The reception site is a 60 second walk from the ceremony location.</p>

    <h2>Attire</h2>
    <p>The wedding is relaxed, so just think smart-casual. Tropical vibes encouraged! 🌴</p>
    <p>Wear shoes you are comfortable walking on a pebble/stoney/grass floor with.</p>

    <h2>Bar</h2>
    <p>There will be some drinks available, but what type of bar is still to be decided - watch this space!</p>

    <h2>Gifts</h2>
    <p>We are so happy that you’ll be able to join us for our wedding. As many of you know, we live in a house in Bristol and it is already filled with all the things we could ever need to make it a home.</p>
    <p>While the presence of your company is the only gift we could ever ask for, if you'd like to make a donation towards our dream honeymoon destination (Hawaii baby!!! 😉) then we would really appreciate it.</p>

    <h2>After the celebrations</h2>
    <p>The wedding will finish at <b>12:30am</b>. If you plan on getting a taxi after the wedding to your accommodation please consider booking your taxi in advance - see the local taxi numbers on our <NavLink to="/getting-there">getting there page</NavLink>.</p>
  </div>
)

export default Wedding;
