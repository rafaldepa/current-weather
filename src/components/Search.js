import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            redirect: false
        }
    }

    componentDidUpdate = () => {
        if(this.state.redirect) {
            this.props.history.push(`/${this.state.city.toLowerCase()}`);
        }
    }

    render() {
        return(
            <div className="search">
                <Formik
                    initialValues={{...this.state}}                                
                    onSubmit={fields => {
                        this.setState({ 
                            city: fields.city,
                            redirect: true
                        });
                    }}
                    validate={(values) => {
                        let errors = {};
                        
                        // Validate City
                        if(!values.city) {
                            errors.city = "Required";
                        } else if(values.city.length < 3) {
                            errors.city = "Too short. Minimum 3 characters.."
                        }

                        return errors;
                    }}
                    render={({ values, errors, status, touched }) => (
                        <Form className="search__form form">
                            <label className="form__label">
                                <Field name="city" type="text" placeholder="ex. New York" className={'form__input' + (errors.city && touched.city ? ' form__input--invalid' : '')} />
                                <ErrorMessage name="city" component="div" className="invalid-feedback" />
                            </label>                            
                            <label className="form__label">
                                <button type="submit" className="form__btn btn btn--search"></button>
                            </label>
                        </Form>
                    )}
                />
            </div>
        )
    }
}