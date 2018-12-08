import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <div>
        <h1>FAQs</h1>
        <ul className="list">
            <li>Where is the ceremony/reception?</li>
            <p>Both the ceremony and reception will be held at Plas Dinam Country House, Llandinam, Powys, SY17 5DQ.</p>
            <li>What time should I arrive?</li>
            <p>The ceremony will start at 2pm, so anytime before then would be ace.</p>
            <li>When are the RSVPs due?</li>
            <p>We’d love to know if you can make it (we hope you can!). Please RSVP by X using the form <NavLink to="/rsvp">here</NavLink>.</p>
            <li>What is the dress code for your wedding?</li>
            <p>Tropical vibes encouraged, but please leave the shorts at home.</p>
            <li>Can I bring my children?</li>
            <p>Per the guest limit at our venue, we will we not be able to have children attend.</p>
            <li>Can I bring a plus one?</li>
            <p>Per the guest limit at our venue, we will we not be able to allow any plus ones.</p>
            <li>Can I take pictures and/or post photos of your wedding on social media?</li>
            <p>#helsandchris</p>
        </ul>

        <p>Still got a question? <a href="mailto:chrislawton57@gmail.com">Email us!</a></p>
    </div>
)
