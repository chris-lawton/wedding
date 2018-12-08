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
        <p>Please let us know if you can make our wedding! We'd love to see you there.</p>
        <form action="https://formcarry.com/s/4ddLKxoC_MJ" method="POST" acceptCharset="UTF-8" >
          <div className="radios">
            <div className="radio">
              <input type="radio" id="can-make-it" name="attending" value="can-make-it" onChange={() => this.setState({isComing: true})} />
              <label htmlFor="can-make-it">
                Yes, let's celebrate!
              </label>
            </div>

            <div className="radio">
              <input type="radio" id="not-able-to-make-it" name="attending" value="not-able-to-make-it" onChange={() => this.setState({isComing: false})} />
              <label htmlFor="not-able-to-make-it">
                No, but we'll raise a glass for you
              </label>
            </div>
          </div>

          <input type="text" name="name" placeholder="Your Name*" required />
          <textarea name="guest names" placeholder="Guest Names*" required></textarea>

          <input type="email" name="email" placeholder="Email*" required />
          <input type="tel" name="number" placeholder="Phone Number*" required />
          <textarea name="anything else" placeholder="Anything else we should know?"></textarea>

          <input type="hidden" name="_gotcha" />
          <input type="submit" value={buttonText} />
        </form>
      </div>
    )
  }
}

export default Rsvp;
