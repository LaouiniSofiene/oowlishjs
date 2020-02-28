import React from 'react';
import './App.css';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './styles/custom.css';
import 'moment-timezone';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Switch>
            <Route history={customHistory} exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
