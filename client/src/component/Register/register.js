import React from 'react';
import Axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './register.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '../Button/button';

class Register extends React.Component {


    render() {
        return (
            <>
            <div className="container">
                <div className="text">
                    <h2>Formulaire d'inscription</h2>
                </div>
            </div>
            <div className="register">
                <div className="container">
                    <h4>Rejoignez-nous !</h4>
                    <p>Inscrivez-vous pour bénéficier de tous les avantages Nation Sounds.</p>
                </div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    birthday: '',
                    phone: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    birthday: Yup.date()
                        .required('Birthday required'),
                    phone: Yup.string()
                        .required('phone required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    Axios({
                        method: 'post',
                        url: 'http://localhost:8000/api/users',
                        data: {
                          fields: fields
                        }
                      });
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                       <div className="container">
                       <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="firstName">Nom </label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="lastName"> Prénom </label>
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="birthday"> Date de naissance </label>
                                <Field name="birthday" type="text" className={'form-control' + (errors.birthday && touched.birthday ? ' is-invalid' : '')} />
                                <ErrorMessage name="birthday" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="phone"> Numéro  de téléphone </label>
                                <Field name="phone" type="text" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                                <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                            </div>
                        <div className="form-group col-6">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                            <div className="form-group col-6">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                        <div className="form-group">
                            <button type="submit" className="registerBtn">Inscrition</button>
                        </div>
                        </div>
                       </div>
                    </Form>
                )}
            </Formik>
            </div>
        </>)
    }
}

export { Register };