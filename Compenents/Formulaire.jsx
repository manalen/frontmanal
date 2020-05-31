
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PatientService from './PatientService';

class Formulaire extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idConsultation: '',
            medi: '',
            pati: '',
            date: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount() {}
    onSubmit(values) {
        let consultation = {
            idConsultation: values.idConsultation,
            medi: values.medi,
            pati: values.pati,
            date: values.date,
        }
        PatientService.pola(consultation)
    }
    render() {
        let {idConsultation, medi, pati, date} = this.state
        return (
            
            <div className="container">
                <link rel="stylesheet" href="./Formulaire.css"></link>
                <div className="container">
                    <Formik initialValues={{idConsultation, medi, pati, date}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true} >
                        {
                            (props) => (
                                <Form>
                                    <div className="container-fluid cadre" style={{borderRadius: "10px",padding:"30px",marginTop: "40px",width: "710px",position: "relative", left:"130px",top: "30px", marginRight: "310px",borderStyle: "ridge",borderColor: "#435fbc"}}>
                                        <fieldset className="form-group">
                                            <label htmlFor="lbl_service" id="lidc" style={{position: "relative",left: "14px"}}>Consultation</label> &emsp;&emsp;&emsp;&emsp;&emsp;
                                            <Field ClassName="form-group" type="text" id="service" name="idConsultation" style={{position: "relative",left: "12px", width: "635px"}}/>
                                        </fieldset>
                                       
                                        <fieldset className="form-group">
                                            <label htmlFor="lbl_nommed" style={{position: "relative",left: "14px"}}>Medecin</label>&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <Field ClassName="form-group" type="text" id="nommed" name="medi" style={{position: "relative",left: "12px", width: "635px"}}/>
                                        </fieldset>

                                        <fieldset className="form-group">
                                            <label htmlFor="lbl_nomp" style={{position: "relative",left: "14px"}}>Patient</label>&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <Field ClassName="form-group" type="text" id="nomp" name="pati" style={{position: "relative",left: "12px", width: "635px"}}/>
                                        </fieldset>
                                    
                                        <fieldset className="form-group">
                                            <label htmlFor="lbl_dateconsultation" id="dateconsult" style={{position: "relative",left: "14px"}}>Date de consultation</label>&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <Field ClassName="form-group" type="date" id="dateconsultation" name="date" style={{position: "relative",left: "12px", width: "635px"}}/>
                                        </fieldset>
                                        
                                        <button type="submit" className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc"}}>Suivant</button>
                                    </div>
                                </Form>
                            )
                        }
                        
                    
                    </Formik>
                </div>
            </div>
            
        )
    }
}
export default Formulaire;