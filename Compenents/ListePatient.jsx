
import React , {Component} from 'react';
import PatientService from './PatientService'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.css";
import './styles2.css';
import u132 from'./u132.png';

class ListePatient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Patients: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
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
    
    ajouterconsultation(){
        this.props.history.push(`/ajouter`)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h3>Tous les Patients</h3>
                    <div className="container"style={{borderRadius: "10px",position: "absolute",width:"800px", left:"210px",top: "300px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
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
                                    this.state.Patients.map(
                                        patient =>
                                        <tr key={patient.idpatient}>
                                            <td>{patient.nom}</td>
                                            <td>{patient.prenom}</td>
                                            <td>{patient.numserie}</td>
                                            <td>{patient.cin}</td>
                                            <td>{patient.age}</td>
                                            <td>{patient.adresse}</td>
                                        </tr>
                                    )
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </div>
                <div data-label="Navigation"  id="u129">
                    <Navbar bg="light" expand="lg" style={{height:"50px"}}>
                        <Navbar.Brand href="#home"><img id="u132_img" className="img " src={u132}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#u115"><span id="u133">Présentation</span></Nav.Link>
                                <Nav.Link href="#u97"><span id="u134">Equipe</span></Nav.Link>
                                <Nav.Link href="#link"><span id="u131">Contact</span></Nav.Link>
                                <Nav.Link href="#u97"><span id="u137">Spécialités</span></Nav.Link>
                                <Nav.Link href="#link"><button id="u135" className="btn btn-success text " onClick={() => this.connexion() } style={{backgroundColor:"#F8F9FA",height:"45px",font:"arial",fontSize:"22px",color:"#4997D4", position:"absolute",top:"2px",left:"1100px"}}>Se connecter</button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
            )
    }
}

export default ListePatient