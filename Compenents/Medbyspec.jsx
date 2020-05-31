
import React , {Component} from 'react';
import PatientService from './PatientService'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Medecin from './Medecin';
import ListePatient from './ListePatient'
class Medbyspec extends Component {
    constructor(props) {
        super(props)
        this.state = {
            medecin: [] ,
            Consultations:[] ,
            Prescriptions: [] ,
            message: null,
            spec: this.props.match.params.spec
        }
    }
    retour(){
        this.props.history.push(`/admin`)
    }

    componentDidMount() {
        PatientService.medbyspec(this.state.spec)
        .then(
            response => {
                this.setState({ medecin: response.data })
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
                                        <th>Nom du médecin</th>
                                        <th>Prenom du médecin</th>
                                        <th>CIN</th>
                                        <th>Spécialité</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.medecin.map(
                                        medecins =>
                                        <tr key={medecins.id}>
                                            <td>{medecins.nom}</td>
                                            <td>{medecins.prenom}</td>
                                            <td>{medecins.cin}</td>
                                            <td>{medecins.specialite}</td>
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
export default Medbyspec