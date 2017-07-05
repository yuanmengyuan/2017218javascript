import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import React from 'react';

import App from '../layouts/App/index';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Home from '../containers/Home';
import Project from '../containers/Project';
import Skill from '../containers/Skill';
const router=(
    <Router history={hashHistory}>
         <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/project" component={Project}></Route>
            <Route path="/skill" component={Skill}></Route>
         </Route>
    </Router>
);
export default router;