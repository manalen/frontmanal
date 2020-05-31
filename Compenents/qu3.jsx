import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.css";
import './styles2.css'
import u132 from './u132.png'

class qu3  extends Component{
    connexion(){
        this.props.history.push(`/login`)
    }
    retour(){
        this.props.history.push(`/faq`)
    }
    acceuil(){
        this.props.history.push(`/start`)
    }
    render(){
        return (
            <div>
                <div data-label="Navigation"  id="u129">
                    <Navbar bg="light" expand="lg" style={{height:"50px"}}>
                        <Navbar.Brand onClick={() => this.acceuil()}><img id="u132_img" className="img " src={u132}/></Navbar.Brand>
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

                <button className="btn btn-success text" onClick={() => this.retour() } style={{borderRadius:"10px",boxShadow:"10px 10px 5px grey",position:"absolute",borderColor:"#D7D7D7",color:"#4997D4",left:"555px",top:"70px",backgroundColor:"white"}}>Retour à la FAQ</button>

                <div className="container-fluid cadre" style={{borderRadius:"10px",padding:"30px",marginTop: "40px",width: "700px",height:"350px",position: "absolute", left:"280px",top: "80px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <p>Voici la localisation exacte et précise de notre établissement. Son accessibilité est un atout majeur!</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.870676642131!2d-6.853160685574081!3d33.99585538062138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c91ffaabd59%3A0xccc90d07ffea3f63!2sClinique%20Agdal!5e0!3m2!1sfr!2sma!4v1587415991254!5m2!1sfr!2sma"></iframe>
                </div>
            </div>
        )
    }
}
export default qu3