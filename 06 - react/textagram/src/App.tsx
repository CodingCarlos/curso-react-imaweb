import React, { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoginContext from './contexts/LoginContext';
import { IUsuario } from './interfaces';
import LoginReducer, { LoginReducerType, LoginReducerActions } from './reducers/LoginReducer';
import useLocalStorage from './hooks/useLocalStorage';
import { getUsersAction } from './redux/userSlice';
import { AppDispatch } from './redux/store';

import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import Error404 from './pages/404';

import Topbar from './components/Topbar';
import ProtectedRoute from './components/ProtectedRoute';

import './App.scss';

function App() {
  const [savedUser] = useLocalStorage<IUsuario>('logged_user');
  const [loginData, dispatchLoginData] = useReducer<LoginReducerType>(LoginReducer, savedUser);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (savedUser) {
      dispatchLoginData({ type: LoginReducerActions.LOGIN, payload: savedUser });
    }
  }, [savedUser]);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch])

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
