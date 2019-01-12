import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <div>
        <h1>FAQs</h1>
        <ul className="list">
            <li>Where is the ceremony/reception?</li>
            <p>Both the ceremony and reception will be held at Plas Dinam Country House, Llandinam, Powys, SY17 5DQ.</p>
            <li>What time should I arrive?</li>
            <p>The ceremony will start at <b>2pm</b>, so anytime before then would be ace.</p>
            <li>When are the RSVPs due?</li>
            <p>We’d love to know if you can make it (we hope you can!). Please RSVP by the <b>1<sup>st</sup> May 2019</b> using the form <NavLink to="/rsvp">here</NavLink>.</p>
            <li>Should I eat before I arrive?</li>
            <p>After the ceremony at 2pm there will be canapés and drinks followed by the wedding breakfast at <b>5pm</b>. We'd recommend having a light lunch prior to your arrival.</p>
            <li>What is the dress code for your wedding?</li>
            <p>The wedding is relaxed, so just think smart-casual. Tropical vibes encouraged!</p>
            <li>Can I bring my children?</li>
            <p>Per the guest limit at our venue, we will we not be able to have children attend.</p>
            <li>Can I bring a plus one?</li>
            <p>Per the guest limit at our venue, we will we not be able to allow any plus ones.</p>
            <li>Can I take pictures and/or post photos of your wedding on social media?</li>
            <p>Of course! <b>#helsandchris</b></p>
            <li>What time should I arrive for the evening reception?</li>
            <p>Please arrive at <b>7:30pm</b> for drinks and dancing!</p>
        </ul>

        <p>Still got a question? <a href="mailto:helsandchris31@gmail.com">Email us!</a></p>
    </div>
)
