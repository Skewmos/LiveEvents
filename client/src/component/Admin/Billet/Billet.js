import React from "react";
import * as Yup from 'yup';
import Axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';



class AdminBillet extends React.Component {

    render() {
        return(
            <>
                <div className="container">
                    <div className="text">
                        <h2>Billets</h2>
                    </div>
                </div>
                <div className="billet">
                    <div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
                        <div className="sous-partie">
                            <h4>Vous avez vos billets ? Vous pouvez entrer !</h4>
                        </div>
                        <Formik 
                        initialValues={{
                            name:'', 
                            dateStart:'', 
                            dateEnd:''
                        }} 
                        validationSchema={Yup.object().shape({
                            name: Yup.string()
                                .required('Le nom est obligatoire'),
                            dateStart: Yup.date()
                                .required('L\'heure du début du concert est obligatoire'),
                            dateEnd: Yup.date()
                                .required('L\'heure de fin du concert est obligatoire')
                        })}   
                        onSubmit={fields => {
                            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                            Axios({
                                method: 'post',
                                url: 'http://localhost:3000/admin/billet',
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
                                            <label htmlFor="name">Nom du billet</label>
                                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="dateStart">Heure du début du concert</label>
                                            <Field name="dateStart" type="datetime" className={'form-control' + (errors.dateStart && touched.dateStart ? ' is-invalid' : '')} />
                                            <ErrorMessage name="dateStart" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="dateEnd">Heure de fin du concert</label>
                                            <Field name="dateEnd" type="datetime" className={'form-control' + (errors.dateEnd && touched.dateEnd ? ' is-invalid' : '')} />
                                            <ErrorMessage name="dateEnd" component="div" className="invalid-feedback" />
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

export {AdminBillet};