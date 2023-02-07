import React from "react";
import { Link } from "react-router-dom";
import './Topbar.scss';

export default function Topbar() {
    return (
      <header className="topbar">
        <h1><Link to="/">Textagram</Link></h1>
        <div>Perfil</div>
      </header>
    );
}
