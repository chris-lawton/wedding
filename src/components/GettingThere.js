import React from 'react';
import LinkIcon from './../assets/svgs/external-link.svg';

const GettingThere = () => (
  <div>
    <h1>Getting there</h1>
    <p>The Wedding ceremony and reception will be held at:</p>
    <p className="standout">Plas Dinam,<br />
    Llandinam,<br />
    Powys,<br />
    SY17 5DQ<br />
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.co.uk/maps/place/Plas+Dinam+Country+House/@52.4934203,-3.4338609,17z/data=!4m5!3m4!1s0x486ff01ac3d3790b:0xa3e0a27af8c0f852!8m2!3d52.4936414!4d-3.4323317">
        Google Maps
        <img src={LinkIcon} alt={LinkIcon} />
      </a>
    </p>

    <h2>By Taxi</h2>
    <p>Local taxi numbers:</p>
    <ul>
      <li>My Taxi: <a href="tel:01686688045">01686 688 045</a></li>
      <li>Kimz Taxi: <a href="tel:07764754449">07764 754 449</a></li>
      <li>Lyn’s Taxi: <a href="tel:07855215319">07855 215 319</a></li>
      <li>Ross Cabs: <a href="tel:07776375342">07776 375 342</a></li>
      <li>Kev’s Cabs: <a href="tel:07449928000">07449 928 000</a></li>
    </ul>

    <h2>By Train</h2>
    <p>The nearest town is <b>Caersws</b> which has a <a target="_blank" rel="noopener noreferrer" href="https://www.google.co.uk/maps/place/Caersws/@52.5150209,-3.4424476,14z/data=!4m5!3m4!1s0x486ff06532b9001d:0x25a5ad36e7daaad8!8m2!3d52.5161307!4d-3.4324611">train station</a>, from which Plas Dinam is a 5min drive.</p>
    <p>Alternatively, <a target="_blank" rel="noopener noreferrer" href="https://www.google.co.uk/maps/place/Newtown/@52.5119271,-3.3124029,17.7z/data=!4m5!3m4!1s0x486ffc9c29d9170d:0x87cdb2200787140e!8m2!3d52.5122794!4d-3.3115156">Newtown</a> station is a 15min drive away.</p>
  </div>
)

export default GettingThere;
