import {
        BrowserRouter as Router,
        Link
    } from "react-router-dom";
import logo from "../../images/liveevents-logo.svg";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
    return (
        <>
        <div className="separator"></div>
        <footer>
            <div className="col1 col-4 col-xs-6 p-0 m-0 pt-5 pl-5">
                <img src={logo} alt="Liveevents logo"/>
                <p>
                    Chaque année depuis 3 ans, la société d’évènementiel « Live Events » 
                    organise un festival de musique appelé « Nation Sounds » 
                    dans la région parisienne afin de récolter des fonds pour une association humanitaire. 
                    Plusieurs centaines de milliers de personnes sont attendues sur le site du festival.
                </p>
            </div>
            <div className="col2 col-8 col-xs-6 p-0 m-0 pt-5 pl-5">
                <div className="social justify-content-around">
                    <FaFacebookF className="icon"/>
                    <FaTwitter className="icon"/>
                    <FaLinkedinIn className="icon"/>
                    <FaYoutube className="icon"/>
                    <FaInstagram className="icon"/>
                    <div className="col3">
                        <Router>
                            <p>© Nation Sounds. Tous droits réservés 2021.</p>
                            <Link to="/privacy-policy">Politique de confidentialité</Link>
                            <Link to="/Legal-notice">Mentions légales </Link>
                            <Link to="/contact">Contact</Link>
                        </Router>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer