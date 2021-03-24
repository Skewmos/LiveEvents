import React from 'react';
import Button from "../Button/button";
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
import logo from "../../images/liveevents-logo.svg";
import styles from "./nav.scss";

const Nav = () => {
    return (
        <>
            <div className="row ml-0  mr-0">
                <div className="col-md-12">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <a className="navbar-brand" href="#">
                                <img src={logo} alt="Liveevents logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Billeterie</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Programmes</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Carte</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Partenaires</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">F.A.Q</a>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-outline-primary" type="button">Connexion</button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Nav;