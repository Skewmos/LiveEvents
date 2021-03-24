import React from "react";
import { FaAngleDoubleDown } from 'react-icons/fa';
import Button from "../Button/button";
import SearchBar from '../SearchBar/searchBar';
import AppSlider from "../Slider/slider";
import map from "../../images/map.svg";
import billet from "../../images/billet.svg";

import CSSModules from 'react-css-modules';

import styles from "./home.scss";



class Home extends React.Component {

    render() {
        return (
            <>
                <div className="container">

                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center mt-5">
                            <h1 className={`text-center ${styles.title}`}>Vivez une expérience</h1>
                            <h2 className={`text-center ${styles.titreSecondaire}`}>Inoubliable</h2>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-4 offset-md-4 text-center">
                            <p className={`text-center ${styles.gotoservice}`}>Accédez aux services</p>
                            <FaAngleDoubleDown/>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5 pt-5">
                            <h2 className={` mt-5 pt-5 ${styles.h2dispo}`}>Les concerts Disponible</h2>
                        </div>
                    </div>
                    <SearchBar/>
                </div>

                <div className={`${styles.mapContainer}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-8 offset-md-2">
                                    <h2 className="mb-4 mt-5 text-center">Découvrir la carte</h2>
                                </div>
                                <div className="container text-center">
                                    <img src="https://www.leparisien.fr/resizer/efCs6S_-rGdBhi2P0NQeijAEUws=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/5UAWECLJVFOXQS6RPEGA3XXU3M.jpg" alt="" className={ `img-fluid ${styles.map}` } />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 mt-5 text-center">
                                <button className="btn btn-primary">
                                    Consulter la carte
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CSSModules(Home , styles );







