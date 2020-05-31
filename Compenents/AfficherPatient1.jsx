
import React , {Component} from 'react';
import PatientService from './PatientService'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Medecin from './Medecin';
import ListePatient from './ListePatient'
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
                                    <tr key={this.state.patient._id}>
                                        <td>{this.state.patient.nom}</td>
                                        <td>{this.state.patient.prenom}</td>
                                        <td>{this.state.patient.numserie}</td>
                                        <td>{this.state.patient.cin}</td>
                                        <td>{this.state.patient.age}</td>
                                        <td>{this.state.patient.adresse}</td>
                                    </tr>
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
export default AfficherPatient1