import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.css";
import './styles2.css'
import u132 from'./u132.png'

class FAQ  extends Component{
    connexion(){
        this.props.history.push(`/login`)
    }
    qu1(){
        this.props.history.push(`/qu1`)
    }
    qu2(){
        this.props.history.push(`/qu2`)
    }
    qu3(){
        this.props.history.push(`/qu3`)
    }
    qu4(){
        this.props.history.push(`/qu4`)
    }
    qu5(){
        this.props.history.push(`/qu5`)
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
            
                <div className="container-fluid cadre" style={{borderRadius:"10px",padding:"30px",marginTop: "40px",width: "700px",height:"400px",position: "absolute", left:"280px",top: "80px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <button onClick={() => this.qu1() } className="btn btn-success" style={{borderRadius: "10px",width: "450px",height:"40px",position: "absolute", left:"115px",top: "30px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>Quels sont les services médicaux de la clinique?</button>
                    <button onClick={() => this.qu2() } className="btn btn-success" style={{borderRadius: "10px",width: "450px",height:"40px",position: "absolute", left:"115px",top: "100px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>Comment prendre un rendez-vous?</button>
                    <button onClick={() => this.qu3() } className="btn btn-success" style={{borderRadius: "10px",width: "450px",height:"40px",position: "absolute", left:"115px",top: "170px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>Comment venir à la clinique?</button>
                    <button onClick={() => this.qu4() } className="btn btn-success" style={{borderRadius: "10px",width: "450px",height:"40px",position: "absolute", left:"115px",top: "240px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>De qui l'équipe de la clinique est-elle constituée?</button>
                    <button onClick={() => this.qu5() } className="btn btn-success" style={{borderRadius: "10px",width: "450px",height:"40px",position: "absolute", left:"115px",top: "310px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>Comment nous contacter?</button>
                </div>
            </div>
        )
    }
}
export default FAQ

