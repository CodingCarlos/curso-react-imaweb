import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";
import './Topbar.scss';

export default function Topbar() {
    const login = useContext(LoginContext).context;
    // const loginContext = useContext(LoginContext);
    // const login = loginContext.context;
    
    return (
      <header className="topbar">
        <h1><Link to="/">Textagram</Link></h1>
        <div>
          {(login && (
            <Link to={`/user/${login.name}`}>
              {login.name}
            </Link>
          )) || (
            <Link to="/login">Haz Login</Link>
          )}
        </div>
      </header>
    );
}
