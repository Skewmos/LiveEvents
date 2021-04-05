import React from "react";
import * as Yup from 'yup';
import Axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';



class AdminLocation extends React.Component {

    render() {
        return(
            <>
                <div className="container">
                    <div className="text">
                        <h2>Location</h2>
                    </div>
                </div>
                <div className="location">
                    <div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
                        <div className="sous-partie">
                            <h4>Venez repérer les lieux pour profiter au mieux de vos concerts !</h4>
                        </div>
                        <Formik 
                        initialValues={{
                            name:'',
                            longitude:'',
                            latitude:''
                        }} 
                        validationSchema={Yup.object().shape({
                            name: Yup.string()
                                .required('Le nom est obligatoire'),
                            longitude: Yup.number().positive().integer(),
                            latitude: Yup.number().positive().integer()
                        })}   
                        onSubmit={fields => {
                            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                            Axios({
                                method: 'post',
                                url: 'http://localhost:3000/admin/location',
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
                                            <label htmlFor="name">Nom de la location</label>
                                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="longitude">Longitude de la location</label>
                                            <Field name="longitude" type="float" className={'form-control' + (errors.longitude && touched.longitude ? ' is-invalid' : '')} />
                                            <ErrorMessage name="longitude" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="latitude">Latitude de la location</label>
                                            <Field name="latitude" type="float" className={'form-control' + (errors.latitude && touched.latitude ? ' is-invalid' : '')} />
                                            <ErrorMessage name="latitude" component="div" className="invalid-feedback" />
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

export {AdminLocation};