import React, { Component } from 'react'

import './Rsvp.css';

class Rsvp extends Component {
  constructor(){
    super();

    this.state = {
      isComing: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log('called');
    this.setState({isComing: !this.state.isComing})
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
              <input type="radio" id="can-make-it" name="attending" value="can-make-it" onChange={this.handleChange} />
              <label htmlFor="can-make-it">
                Yes, let's celebrate!
              </label>
            </div>

            <div className="radio">
              <input type="radio" id="none-can-make-it" name="attending" value="none-can-make-it" onChange={this.handleChange} />
              <label htmlFor="none-can-make-it">
                No, but we'll raise a glass for you
              </label>
            </div>
          </div>

          <input type="text" name="name" placeholder="Your Name*" required />
          <textarea placeholder="Guest Names*" required></textarea>

          <input type="email" name="email" placeholder="Email*" required />
          <input type="tel" name="number" placeholder="Phone Number*" required />
          <textarea placeholder="Anything else we should know?"></textarea>

          <input type="hidden" name="_gotcha" />
          <input type="submit" value={buttonText} />
        </form>
      </div>
    )
  }
}

export default Rsvp;
