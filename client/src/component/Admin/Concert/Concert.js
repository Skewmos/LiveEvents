import React from "react";
import * as Yup from 'yup';
import Axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';



class AdminConcert extends React.Component {

    render() {
        return(
            <>
                <div className="container">
                    <div className="text">
                        <h2>Concert</h2>
                    </div>
                </div>
                <div className="concert">
                    <div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
                        <div className="sous-partie">
                            <h4>Participez aux meilleurs concerts de votre vie !</h4>
                        </div>
                        <Formik 
                        initialValues={{
                            name:'',
                            dateStart:'',
                            dateEnd:'',
                            places:'',
                            place_vendu:''
                        }} 
                        validationSchema={Yup.object().shape({
                            name: Yup.string()
                                .required('Le nom est obligatoire'),
                            dateStart: Yup.date()
                                .required('La date du concert est obligatoire'),  
                            dateEnd: Yup.date()
                                .required('La date de fin du concert est obligatoire'),
                            places: Yup.number()
                                .required('Le nombre de places disponibles est obligatoire').positive().integer(),
                            place_vendu: Yup.number()
                                .required('Le nombre de places vendus est obligatoire').positive().integer()
                        })}   
                        onSubmit={fields => {
                            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                            Axios({
                                method: 'post',
                                url: 'http://localhost:3000/admin/concert',
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
                                            <label htmlFor="name">Nom du concert</label>
                                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="dateStart">Date du début du concert</label>
                                            <Field name="dateStart" type="datetime" className={'form-control' + (errors.dateStart && touched.dateStart ? ' is-invalid' : '')} />
                                            <ErrorMessage name="dateStart" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="dateEnd">Date de fin du concert</label>
                                            <Field name="dateEnd" type="datetime" className={'form-control' + (errors.dateEnd && touched.dateEnd ? ' is-invalid' : '')} />
                                            <ErrorMessage name="dateEnd" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="places">Nombre de places disponibles</label>
                                            <Field name="places" type="int" className={'form-control' + (errors.places && touched.places ? ' is-invalid' : '')} />
                                            <ErrorMessage name="places" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="place_vendu">Nombre de places vendus</label>
                                            <Field name="place_vendu" type="int" className={'form-control' + (errors.place_vendu && touched.place_vendu ? ' is-invalid' : '')} />
                                            <ErrorMessage name="place_vendu" component="div" className="invalid-feedback" />
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

export {AdminConcert};