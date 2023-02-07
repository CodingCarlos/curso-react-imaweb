import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import User from './pages/User';
import Error404 from './pages/404';

import Topbar from './components/Topbar';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        
        <section className='has-topbar content-padding container'>
          {/* <Link to="/">Ir a home</Link>
          <Link to="/user">Ir a user</Link> */}

          <Routes>
            <Route
              path="/"
              element={(<Home />)}
            />

            <Route
              path="/user/:userName" 
              element={(<User />)}
            />

            <Route
              path="*"
              element={(<Error404 />)}
            />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
