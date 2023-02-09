import React, { useEffect, Reducer, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoginContext from './contexts/LoginContext';
import { IUsuario } from './interfaces';
import LoginReducer, { LoginReducerState, LoginReducerDispatcher } from './reducers/LoginReducer';
import useLocalStorage from './hooks/useLocalStorage';

import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import Error404 from './pages/404';

import Topbar from './components/Topbar';
import ProtectedRoute from './components/ProtectedRoute';

import './App.scss';

function App() {
  const [savedUser] = useLocalStorage<IUsuario>('logged_user');
  console.log(savedUser);
  const [loginData, dispatchLoginData] = useReducer<Reducer<LoginReducerState, LoginReducerDispatcher>>(LoginReducer, savedUser);
  // const [loginData, dispatchLoginData] = useReducer<Reducer<IUsuario | null, LoginReducerDispatcher>>(LoginReducer, savedUser);

  useEffect(() => {
    console.log('Ha cambiado el usuario guardado', savedUser);
    if (savedUser) {
      dispatchLoginData({ type: 'LOGIN', payload: savedUser });
    }
  }, [savedUser]);

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
                element={(
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                )}
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
