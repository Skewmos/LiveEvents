import React from "react";
import { FaAngleDoubleDown } from 'react-icons/fa';
import Button from "../Button/button";
import  Billiet from "../Billiet/billiet"
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

                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center mt-5">
                            <h1 className="text-center title">Vivez une expérience</h1>
                            <h2 className="text-center titreSecondaire">Inoubliable</h2>
                        </div>
                    </div>


                    <div className="row">
                        <div className="text-center mt-5 pt-5">
                            <p className="text-center gotoservice">Accédez aux services</p>
                            <FaAngleDoubleDown/>
                        </div>
                    </div>
                </div>

                   <div className="container-search">
                       <div className="row">
                           <div className="col-md-12 mt-5 ">
                               <h3 className="mt-5 pt-5">Les concerts <span className="color_degrade">Disponible</span></h3>
                           </div>
                       </div>
                       <SearchBar/>
                   </div>

               <div className="mt-5 mb-4">
                   <AppSlider/>
               </div>

                <div className="mapContainer mt-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-8 offset-md-2">
                                    <h3 className="mb-1  text-center">Découvrir la carte <span className="color_degrade">interactive</span></h3>
                                </div>
                                <div className="container mt-4 text-center">
                                    <img src="https://www.leparisien.fr/resizer/efCs6S_-rGdBhi2P0NQeijAEUws=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/5UAWECLJVFOXQS6RPEGA3XXU3M.jpg" alt="" className="img-fluid map" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 mt-5 text-center">
                                <button className="btn btnprimary mb-4">
                                    Consulter la carte
                                </button>
                            </div>
                        </div>
                </div>

                <Billiet/>

                <div className="picture mt-5 pt-5">
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