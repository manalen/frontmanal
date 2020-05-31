import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.css";
import './styles2.css'
import u132 from './u132.png'

class qu1  extends Component{
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

                <div className="container-fluid cadre" style={{borderRadius:"10px",padding:"30px",marginTop: "40px",width: "700px",height:"400px",position: "absolute", left:"280px",top: "80px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <p><h4 style={{color:"#4997D4"}}>Medicare est une clinique multi-spécialités. Les services disponibles sont:</h4><br/>
                        -La cardiologie<br/>
                        -La radiologie<br/>
                        -La gastrologie<br/>
                        -L'endocrinologie<br/>
                        -La pédiatrie<br/>
                        -La traumatologie<br/>
                        -L'ophtalmologie<br/>
                        -La chirurgie vicérale<br/>
                    </p>
                </div>
            </div>
        )
    }
}
export default qu1