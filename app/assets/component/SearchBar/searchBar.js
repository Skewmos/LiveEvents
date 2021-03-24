import React from 'react';
import { useForm } from "react-hook-form";
import CSSModules from 'react-css-modules';
import styles from  "./searchBar.scss";

const  SearchBar = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)
    return(
        <div className="row">
            <div className="col-md-12 mt-2">
                <form action="" className="form-row">
                    <div className="form-group col-xs-3 col-md-3">
                        <label htmlFor="scene" className="control-label">Par scène</label>
                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option defaultValue >Choisir...</option>
                            <option value="1">Zone A</option>
                            <option value="2">Zone B</option>
                            <option value="3">Zone C</option>
                        </select>
                    </div>

                    <div className="form-group col-xs-3 col-md-3">
                        <label htmlFor="scene" className="control-label" >Par date</label>
                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option defaultValue >Choisir...</option>
                            <option value="1">9 août 2021</option>
                            <option value="2">10 août 2021</option>
                            <option value="3">11 août 2021</option>
                        </select>
                    </div>

                    <div className="form-group col-xs-3 col-md-3">
                        <label htmlFor="scene" className="control-label">Par heure</label>
                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option defaultValue>Choisir...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="form-group col-xs-3 col-md-3 mt-5">
                        <a href="">
                            <button className={`btn btn-primary`}>
                                Appliquer les filtres
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CSSModules(SearchBar, styles);