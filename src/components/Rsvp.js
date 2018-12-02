import React from 'react';

import './Rsvp.css';

const Rsvp = () => (
  <div>
    <h1>RSVP</h1>
    <p>Esse anim enim pariatur dolor nulla aliquip ad proident nulla. Deserunt eu reprehenderit laboris Lorem cillum. Incididunt dolore Lorem enim ut in ad exercitation ipsum ullamco minim. Dolore amet duis reprehenderit elit minim elit aute. Ut magna minim occaecat labore. Cillum amet quis laborum labore magna laboris occaecat reprehenderit ex.</p>
    <form action="https://formcarry.com/s/4ddLKxoC_MJ" method="POST" acceptCharset="UTF-8" >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="text" name="number" placeholder="Phone Number" />

      <input type="radio" id="can-make-it" name="attending" value="can-make-it" />
      <label htmlFor="can-make-it">
        I/We can make it - woop! <span role="img" aria-label="smiling">😀</span>
      </label>

      <input type="radio" id="some-can-make-it" name="attending" value="some-can-make-it" />
      <label htmlFor="some-can-make-it">
        Some of us can make it <span role="img" aria-label="thinking">🤔</span>
      </label>

      <input type="radio" id="none-can-make-it" name="attending" value="none-can-make-it" />
      <label htmlFor="none-can-make-it">
        I/We can't make it <span role="img" aria-label="crying">😭</span>
      </label>

      <textarea placeholder="Dietry requirements?"></textarea>

      <input type="hidden" name="_gotcha" />
      <input type="submit" />
    </form>
  </div>
)

export default Rsvp;
