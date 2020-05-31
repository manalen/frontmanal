
import React , {Component} from 'react';
import PatientService from './PatientService'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Medecin from './Medecin';
import ListePatient from './ListePatient'
class Afficherbyname extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patient: [] ,
            Consultations:[] ,
            Prescriptions: [] ,
            message: null,
            nom: this.props.match.params.nom,
            prenom: this.props.match.params.prenom
        }
    }
    retour(){
        this.props.history.push(`/medecin`)
    }

    componentDidMount() {
        PatientService.namola(this.state.nom,this.state.prenom)
        .then(
            response => {
                this.setState({ patient: response.data })
            }
        )
        /*PatientService.bola(this.state.id)
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
        )*/
    }
    render() {
        return ( 
        <div>
            <button className="btn btn-success text" onClick={() => this.retour() } style={{borderRadius: "10px",width: "350px",height:"40px",position: "absolute", left:"470px",top: "30px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>Retour à la liste des patients</button>
            
            <div className="onglets" style={{borderRadius: "10px",width: "700px",height:"480px",position: "absolute", left:"300px",top: "110px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                <Tabs defaultActiveKey="infosperso" id="uncontrolled-tab-example">
                    <Tab eventKey="infosperso" title="Informations personnelles">
                        <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                            <table className="table" >
                                <thead>
                                    <tr>
                                        <th>Nom du patient</th>
                                        <th>Prenom du patient</th>
                                        <th>Numéro de série du patient</th>
                                        <th>CIN</th>
                                        <th>Age</th>
                                        <th>Adresse</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.patient.map(
                                        patients =>
                                        <tr key={patients.idpatient}>
                                            <td>{patients.nom}</td>
                                            <td>{patients.prenom}</td>
                                            <td>{patients.numserie}</td>
                                            <td>{patients.cin}</td>
                                            <td>{patients.age}</td>
                                            <td>{patients.adresse}</td>
                                        </tr>
                                    )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Tab>
                    
                </Tabs>
            </div>
        </div>
        )
        }    
    }
export default Afficherbyname