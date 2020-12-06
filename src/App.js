import React, { Component, component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route 
} from 'react-router-dom';
import Header from './components/Header';
import World from './components/World';
import India from './components/India';

class App extends Component {

                 constructor() {

                     super();
                              }

                  render() {

                return (

                 <div className="container-fluid">
                   <Router>
                     <Header/>
                     <Switch>
                       <Route exact path="/">
                         <India/>
                       </Route>
                       <Route path="/india">
                         <India/>
                       </Route>
                       <Route path="/world">
                         <World/>
                       </Route>
                     </Switch>
                   </Router>
       


      </div>
    )
  }
}

export default App;
