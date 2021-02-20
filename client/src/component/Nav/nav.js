import Button from "../Button/button";
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
import logo from "../../images/liveevents-logo.svg";
import "./nav.scss";

const Nav = () => {
    return (
        <>
            <nav className="navbar">
                <img src={logo} alt="Liveevents logo"/>
                <div className="navbar-item">
                <Router>
                        <NavLink to="/programme" className="navlink">Programmes</NavLink>
                        <NavLink to="/maps" className="navlink">Carte interactive</NavLink>
                        <NavLink to="/partenaire" className="navlink">Partenaires</NavLink>
                        <NavLink to="/billeterie" ><Button classbtn="btnprimary btn-large" value="Accédez à la billetterie"/></NavLink>
                </Router>
                </div>
            </nav>
        </>
    );
}
export default Nav;