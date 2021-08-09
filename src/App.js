import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Rush from './pages/Rush';
import Members from './pages/Members';
import Contact from './pages/Contact';
import './components/css/app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
 
  return (
   <div>
   <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About} />
            <Route exact path='/rush' component={Rush} />
            <Route exact path='/members' component={Members} />
            <Route exact path='/contact' component={Contact} /> 
        </Switch>
       
    </Router>
  
      

   </div>
  );
}

export default App;
