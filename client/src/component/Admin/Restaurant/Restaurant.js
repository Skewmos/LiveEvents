import React from "react";
import * as Yup from 'yup';
import Axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';



class AdminRestaurant extends React.Component {

    render() {
        return(
            <>
                <div className="container">
                    <div className="text">
                        <h2>Restaurants</h2>
                    </div>
                </div>
                <div className="restau">
                    <div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
                        <div className="sous-partie">
                            <h4>Bienvenue sur la liste des Restaurants</h4>
                        </div>
                        <Formik 
                        initialValues={{
                            name:'',
                            horiareOuvert:'',
                            horaireFerme:''
                        }} 
                        validationSchema={Yup.object().shape({
                            name: Yup.string()
                                .required('Le nom est obligatoire'),
                            // horiareOuvert: Yup.time()
                                // .required('L\'horaire d\'ouverture est obligatoire'),
                            // horaireFerme: Yup.time()
                                // .required('L\'horaire de fermeture est obligatoire')
                        })}   
                        onSubmit={fields => {
                            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                            Axios({
                                method: 'post',
                                url: 'http://localhost:3000/admin/restaurant',
                                data: {
                                    fields: fields
                                }
                            });
                        }}>
                        {({ errors, status, touched }) => (
                            <Form>
                                <div className="container">
                                    <div className="row">
                                        <div className="form-group">
                                            <label htmlFor="name">Nom du restaurant</label>
                                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="horiareOuvert">Les horaires d'ouverture</label>
                                            <Field name="horiareOuvert" type="time" className={'form-control' + (errors.horiareOuvert && touched.horiareOuvert ? ' is-invalid' : '')} />
                                            <ErrorMessage name="horiareOuvert" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="horaireFerme">Les horaires de fermeture</label>
                                            <Field name="horaireFerme" type="time" className={'form-control' + (errors.nahoraireFermeme && touched.horaireFerme ? ' is-invalid' : '')} />
                                            <ErrorMessage name="horaireFerme" component="div" className="invalid-feedback" />
                                        </div>
                                        <button type="submit" className="registerBtn">Ajouter</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                        </Formik>
                    </div>
                </div>
            </>
        );
    }
}

export {AdminRestaurant};