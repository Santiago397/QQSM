import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { NavBar } from './components/Navbar';

function App() {
  return (
    <div className="App">


      <Router>
      
      <h1 className="text-center p-4">¿Quién quiere ser millonario?</h1>
        <Switch>
          <Route path="/play/:jNombre">
            <Home />
            <NavBar />
          </Route>
          <Route path="/" component={Login}  />
          <Route path="*" component={Login} />
        </Switch>


      </Router>


    </div>
  );
}

export default App;
