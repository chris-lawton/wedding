import React, { Component } from 'react'

import './Rsvp.css';

class Rsvp extends Component {
  constructor(){
    super();

    this.state = {
      isComing: false
    }
  }

  render() {
    const buttonText = this.state.isComing ? "We're coming!" : "Send";

    return (
      <div>
        <h1>RSVP</h1>
        <p>Please let us know if you can make our wedding by the <b>1<sup>st</sup> May 2019</b>.</p>
        <p>We'd love to see you there! 🙌.</p>
        <form action="https://formcarry.com/s/4ddLKxoC_MJ" method="POST" acceptCharset="UTF-8" >
          <div className="radios">
            <div className="radio">
              <input type="radio" id="can-make-it" name="attending" value="Can make it" onChange={() => this.setState({isComing: true})} required />
              <label htmlFor="can-make-it">
                Yes, let's celebrate!
              </label>
            </div>

            <div className="radio">
              <input type="radio" id="not-able-to-make-it" name="attending" value="Not able to make it" onChange={() => this.setState({isComing: false})} required />
              <label htmlFor="not-able-to-make-it">
                No, but we'll raise a glass for you
              </label>
            </div>
          </div>

          <p>From the people on your invite, who is able to attend?</p>
          <textarea name="guest names" placeholder="Name/s*" required></textarea>

          <input type="email" name="email" placeholder="Email*" required />
          <input type="tel" name="number" placeholder="Phone Number*" minLength="11" required />

          <textarea name="anything else" placeholder="Please let us know if you or a guest is vegetarian, vegan or has any allergies e.g. Chris has a nut allergy"></textarea>

          <input type="hidden" name="_gotcha" />
          <input type="submit" value={buttonText} />
        </form>
      </div>
    )
  }
}

export default Rsvp;
