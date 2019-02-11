import React, { Component } from 'react';

import 'firebase/database';
import Employee from './employee/employee';
import View from './View/View'
import Output from './View/result'
import {BrowserRouter,Route} from 'react-router-dom'


class App extends Component {
 render() {
    return (
      <BrowserRouter>
        <div><Route exact path="/" component={Employee}/>
          <Route path="/customer" component={View}/>
          <Route path="/customer/result" component={Output}/>
          </div>
          
        
      </BrowserRouter>
    );
  }
}

export default App;
