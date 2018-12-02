import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Wedding from './Wedding';
import GettingThere from './GettingThere';
import Rsvp from './Rsvp';
import WhereToStay from './WhereToStay';
import Faqs from './Faqs';

import './Main.css';

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/the-wedding' component={Wedding} />
        <Route path='/getting-there' component={GettingThere} />
        <Route path='/where-to-stay' component={WhereToStay} />
        <Route path='/rsvp' component={Rsvp} />
        <Route path='/faqs' component={Faqs} />
    </Switch>
  </main>
)

export default Main;
