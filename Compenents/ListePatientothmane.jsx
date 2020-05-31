
import React , {Component} from 'react';
import PatientService from './PatientService'

class ListePatientothmane extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Patients: [
                
            ],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
        this.afficherpatient = this.afficherpatient.bind(this)
        this.ajouterconsultation = this.ajouterconsultation.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }
    
    refreshCourses() {
        PatientService.hola()
            .then(
                response => {
                    this.setState({ Patients:  response.data })
                }
            )
    }
    afficherpatient(lool){
        console.log('voila'  +lool )
        this.props.history.push(`/patients/${lool}`)
    }
    ajouterconsultation(){
       
        this.props.history.push(`/ajouter`)
    }

    render() {
        return ( 
            <div>
                <div className="container">
                    <h3>Tous les Patients</h3>
                    <div className="container">
                        <table className="table" style={{borderRadius: "10px",position: "absolute",width:"410px", left:"40px",top: "250px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                            <thead>
                                <tr>
                                    <th>Identifiant du patient</th>
                                    <th>CIN</th>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Adresse</th>
                                    <th>Afficher</th>
                                    <th>Ajouter Consultation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Patients.map(
                                        patient =>
                                        <tr key={patient._id}>
                                            <td>{patient._id}</td>
                                            <td>{patient.cin}</td>
                                            <td>{patient.nom}</td>
                                            <td>{patient.prenom}</td>
                                            <td>{patient.adresse}</td>
                                            <td><button className="btn btn-success" onClick={() => this.afficherpatient(patient._id)}>Afficher</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.ajouterconsultation()}>Ajouter</button></td>  
                                        </tr>
                                    )
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            )
    }
}
export default ListePatientothmane