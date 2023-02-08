import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoginContext from './contexts/LoginContext';
import { IUsuario } from './interfaces';
import LoginReducer from './reducers/LoginReducer';

import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import Error404 from './pages/404';

import Topbar from './components/Topbar';

import './App.scss';

const defaultUser: IUsuario = {
  name: 'Yo',
  pic: 'https://randomuser.me/api/portraits/lego/8.jpg',
}

function App() {
  const [loginData, dispatchLoginData] = useReducer(LoginReducer, null);
  // const [loginData, setLoginData] = useState<IUsuario | null>(null);

  return (
    <LoginContext.Provider value={[loginData, dispatchLoginData]}>
    {/* <LoginContext.Provider value={{ context: loginData, setContext: setLoginData }}> */}
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
