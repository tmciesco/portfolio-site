import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Landing from './landingpage';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Resume from './resume';


const Main = () => (
    <Switch>
        <Route exact path = "/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;