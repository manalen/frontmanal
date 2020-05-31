import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PatientService from './PatientService';


class Ajouterconsu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idConsultation : '',
            pati:''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount() {
    }
    onSubmit(values) {
        let consultation = {
            idConsultation: values.idConsultation,
            pati: values.pati,
        }
        PatientService.pola( consultation)


    }
    render() {


        let {  idConsultation, pati } = this.state
    
        return (
            <div>
                <h3>Course</h3>
                <div className="container">
                    <Formik
                        initialValues={{ idConsultation, pati }}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="idConsultation"  />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>pati</label>
                                        <Field className="form-control" type="text" name="pati" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
    
                </div>
            </div>
        )
    }
}
export default Ajouterconsu