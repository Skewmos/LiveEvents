import React from "react";
import * as Yup from 'yup';
import Axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';



class AdminArtist extends React.Component {

    render() {
        return(
            <>
                <div className="container">
                    <div className="text">
                        <h2>Artiste</h2>
                    </div>
                </div>
                <div className="artiste">
                    <div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
                        <div className="sous-partie">
                            <h4>Venez rencontrer vos artistes préférés !</h4>
                        </div>
                        <Formik 
                        initialValues={{
                            name:''
                        }} 
                        validationSchema={Yup.object().shape({
                            name: Yup.string()
                                .required('Le nom est obligatoire')}
                        )}   
                        onSubmit={fields => {
                            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                            Axios({
                                method: 'post',
                                url: 'http://localhost:3000/admin/artist',
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
                                            <label htmlFor="name">Nom de l'artiste</label>
                                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
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

export {AdminArtist};