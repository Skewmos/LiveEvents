import React from "react";
import { FaAngleDoubleDown } from 'react-icons/fa';
import Button from "../Button/button";
import SearchBar from '../SearchBar/searchBar';
import AppSlider from "../Slider/slider";
import map from "../../images/map.svg";
import billet from "../../images/billet.svg";

import  "./home.scss";

class Home extends React.Component {

    render() {
        return (
            <>
                <div className="container">
                    <div className="text">
                    <h1>Vivez une expérience</h1>
                    <h2>Inoubliable</h2>
                    </div>
                    <div className="services">
                        <p>Accédez aux services</p>
                        <FaAngleDoubleDown/>
                    </div>
               </div>
               <div className="wrap">
                   <h3>Les concerts <span className="color_degrade">disponibles</span></h3>
                   <SearchBar className="searchbar"/>
               </div>
               <div className="slider">
                    <AppSlider/>
               </div>
               <div className="map">
                   <h3>Découvrir la carte  <span className="color_degrade">interactive</span></h3>   
                    <img src={map} alr="map"/>
                   <Button classbtn="btnprimary btn-large" value="Consulter la carte"/>
               </div>

               <div className="billet">
                   <div className="booking">
                   <h3>Réservez vos <span className="color_degrade">billets</span></h3>
                   <p>
                   Chaque année depuis 3 ans, la société d’évènementiel <span>« Live Events »</span> organise
                    un festival de musique appelé <span> « Nation Sounds »</span>
                    dans la région parisienne afin de récolter des fonds pour une association humanitaire. 
                   Plusieurs centaines de milliers de personnes sont attendues sur le site du festival.
                   </p>
                   <Button classbtn="btnprimary btn-large" value="Accédez à la billetterie"/>
                   </div>
                   <div className="bookingImg">
                    <img src={billet} alr="billet"/>
                   </div>
               </div>

               <div className="picture">
                   <div className="textPicture">
                   <h3>Vos photos du  <span className="color_degrade hirolley">#Liveevents</span></h3>
                   <p>Créer des filtres personnalisés unique du Nation Sounds.</p>
                   </div>
               </div>
            </>
        );
    }
}

export default Home;