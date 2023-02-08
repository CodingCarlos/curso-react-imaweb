import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoginContext from './contexts/LoginContext';
import { IUsuario } from './interfaces';
import LoginReducer from './reducers/LoginReducer';
import useLocalStorage from './hooks/useLocalStorage';

import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import Error404 from './pages/404';

import Topbar from './components/Topbar';

import './App.scss';

function App() {
  const [savedUser] = useLocalStorage<IUsuario>('logged_user');
  const [loginData, dispatchLoginData] = useReducer(LoginReducer, savedUser);

  return (
    <LoginContext.Provider value={[loginData, dispatchLoginData]}>
      <div className="App">
        <Router>
          <Topbar />
          
          <section className='has-topbar content-padding container'>
            <Routes>
              <Route
                path="/"
                element={(<Home />)}
              />

              <Route
                path="/login"
                element={(<Login />)}
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
    </LoginContext.Provider>
  );
}

export default App;
