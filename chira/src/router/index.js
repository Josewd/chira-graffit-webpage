import React from 'react';
import Home from '../screens/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Contact from '../screens/Contact';

export default function Router() {
  return (
   <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
    </Switch>
   </BrowserRouter>
  );
}
