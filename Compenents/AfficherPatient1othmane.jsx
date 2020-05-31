
import React , {Component} from 'react';

import PatientService from './PatientService'

class AfficherPatient1 extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            patient: {} ,
            Consultations:[] ,
            Prescriptions: [] ,
            message: null,
            id: this.props.match.params.id
        }
    }
    componentDidMount() {
        PatientService.ola(this.state.id)
        .then(
            response => {
                console.log(this.state.id);
                this.setState({ patient: response.data })
            }
        )
        PatientService.bola(this.state.id)
        .then(
            response => {
                console.log(this.state.id)
                this.setState({ Consultations: response.data })
            }
        )
        PatientService.kola(this.state.id)
        .then(
            response => {
                console.log(this.state.id);
                this.setState({ Prescriptions: response.data })
            }
        )
    }
    render() {
        return ( 
                <div className="container">
                    <h3>Patient {this.state.patient._id}</h3>
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Identifiant patient</th>
                                    <th>cin</th>
                                    <th>nom</th>
                                    <th>prenom</th>
                                    <th>Adresse</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    <tr key={this.state.patient._id}>
                                        <td>{this.state.patient._id}</td>
                                        <td>{this.state.patient.cin}</td>
                                        <td>{this.state.patient.nom}</td>
                                        <td>{this.state.patient.prenom}</td>
                                        <td>{this.state.patient.adresse}</td>
                                    </tr>
                                    
                                }
                            </tbody>
                        </table>
                    </div>
                   <h4>Consultations</h4>
                   <div className="container">

                       <table className="table">
                            <thead>
                                <tr>
                                    <th>Identifiant de consultation</th>
                                    <th>Identifiant de medecin</th>
                                    <th>Date</th>
                                    <th>Observation</th>
                                    <th>Analyse glycemie</th>
                                    <th>Analyse hypertension_arterielle</th>
                                    <th>Analyse cholesterol</th>
                                    <th>Analyse triglyceride</th>
                                    <th>Analyse transaminases</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.Consultations.map(
                                    consultation =>
                                    <tr key={consultation.idConsultation}>
                                        <td>{consultation.idConsultation}</td>
                                        <td>{consultation.medi}</td>
                                        <td>{consultation.date}</td>
                                        <td>{consultation.observation}</td>
                                        <td>{consultation.analyse.glycemie}</td>
                                        <td>{consultation.analyse.hypertension_arterielle}</td>
                                        <td>{consultation.analyse.cholesterol}</td>
                                        <td>{consultation.analyse.triglyceride}</td>
                                        <td>{consultation.analyse.transaminases}</td>
                                    </tr>)
                                }
                            </tbody>
                       </table>

                    </div>

                    <h3>Prescriptions </h3>

                    <div className="container">

                       <table className="table">
                            <thead>
                                <tr>
                                    <th>Identifiant du prescription</th>
                                    <th>Identifiant du consultation</th>
                                    <th>médicament</th>
                                    <th>date de debut</th>
                                    <th>date de fin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Prescriptions.map(
                                    prescription =>
                                    <tr key={prescription.idPres}>
                                        <td>{prescription.idPres}</td>
                                        <td>{prescription.confi}</td>
                                        <td>{prescription.médicament}</td>
                                        <td>{prescription.datedebut}</td>
                                        <td>{prescription.datefin}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            )
    }
}
export default AfficherPatient1