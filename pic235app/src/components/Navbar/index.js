import React from "react";
import "./index.css"

export const Navbar = () => {


  return (
    <div className="navbar-box">
      <nav className="navbar navbar-expand-lg bg-body-tertiary border">
        <div className="container-fluid">
          <img className="logo img-fluid d-inline-block align-text-top navbar-brand" src="/DFBEagle.png" alt="Capital Digital" />
          <div className="register-option" >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Cadastro">Registre-se</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Projeto">Projeto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Dashboard">Dashboard</a>
              </li>
              <li className="nav-item">
                <div className="login-option">
                  <a className="btn btn-outline-teal" href="/Login">Login</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}