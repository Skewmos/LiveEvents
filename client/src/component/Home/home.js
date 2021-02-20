import React from "react";
import { FaAngleDoubleDown } from 'react-icons/fa';
import Button from "../Button/button";
import SearchBar from '../SearchBar/searchBar';
import AppSlider from "../Slider/slider";
import map from "../../images/map.svg";

import  "./home.scss";

class Home extends React.Component {

    render() {
        return (
            <>
                <div className="container">
                    <h1>Vivez une expérience</h1>
                    <h2>Inoubliable</h2>
                    <div className="services">
                        <p>Accédez aux services</p>
                        <FaAngleDoubleDown/>
                    </div>
               </div>
               <div className="wrap">
                   <h3>Les concerts <span className="color_degrade">disponibles</span></h3>
                   <SearchBar className="searchbar"/>
               </div>
             
               <div className="map">
                   <h3>Découvrir la carte  <span className="color_degrade">interactive</span></h3>   
                    <img src={map} alr="map"/>
                   <Button classbtn="btnprimary btn-large" value="Consulter la carte"/>
               </div>
            </>
        );
    }
}

export default Home;