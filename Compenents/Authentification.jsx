import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import u1 from './u1.jpeg'
import fond from './fond.jpeg'
import u132 from './u132.png'
import u136 from './u136.png'
import u18 from './u18.svg'
class Authentification extends Component{
    constructor(props){
        super(props)
        this.state={
            username : 'manal',
            password : '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.loginClicked=this.loginClicked.bind(this)
    }

    handleUsernameChange(event){
        this.setState(
            {
                username: event.target.value
            }
        )
    }
    handlePasswordChange(event){
        this.setState(
            {
                password: event.target.value
            }
        )
    }
    loginClicked(){
        //manal,manal123
        if(this.state.username==='manal' && this.state.password==='manal123'){
            this.props.history.push(`/medecin`)
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        }
        else {
            console.log('Failed')
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }
    
    render(){
        return (
            <div>
                <img id="u1_img" class="img " src={fond} style={{position:"relative",left:"400px"}}/>
                <div id="u128" className="ax_default" data-label="Menu" data-left="0" data-top="0" data-width="0" data-height="0">
                    <div id="u129" className="ax_default" data-label="Menu">
                        <div id="u129_state0" className="panel_state" data-label="State1" >
                            <div id="u129_state0_content" className="panel_state_content">
                                <div id="u130" className="ax_default box_2">
                                    <div id="u130_div" className=""></div>
                                    <div id="u130_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                        <p></p>
                                    </div>
                                </div>
                                <div id="u131" className="ax_default link_button">
                                    <div id="u131_div" className=""></div>
                                    <div id="u131_text" className="text ">
                                        <p><span><a href="#u0">Contact</a></span></p>
                                    </div>
                                </div>
                                <div id="u132" className="ax_default image">
                                    <img id="u132_img" className="img " src={u132}/>
                                    <div id="u132_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                        <p></p>
                                    </div>
                                </div>
                                <div id="u133" className="ax_default link_button">
                                    <div id="u133_div" className=""></div>
                                    <div id="u133_text" className="text ">
                                        <p><span><a href="#u115">Présentation</a></span></p>
                                    </div>
                                </div>
                                <div id="u134" className="ax_default link_button">
                                    <div id="u134_div" className=""></div>
                                    <div id="u134_text" className="text ">
                                        <p><span><a href="#u13">Equipe</a></span></p>
                                    </div>
                                </div>
                                <div id="u135" className="ax_default link_button ax_default_hidden" style={{display:"none"}}>
                                    <div id="u135_div" className=""></div>
                                    <div id="u135_text" className="text ">
                                        <p><span>Se connecter</span></p>
                                    </div>
                                </div>
                                <div id="u136" className="ax_default image">
                                    <img id="u136_img" className="img " src={u136}/>
                                    <div id="u136_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                        <p></p>
                                    </div>
                                </div>
                                <div id="u137" className="ax_default link_button">
                                    <div id="u137_div" className=""></div>
                                    <div id="u137_text" className="text ">
                                        <p><span><a href="#u97">Spécialités</a></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid cadre" style={{borderRadius: "10px",padding:"30px",marginTop: "40px",width: "435px",heigh:"410",position: "absolute", left:"70px",top: "130px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}  />
                    </div>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <label id="u18_input_label" for="u18_input" style={{position: "absolute", left: "0px"}}>
                        <div id="u18_text" className="text " style={{position:"relative",left:"30px"}}>
                            <input id="u18_input" type="checkbox" value="checkbox" />Se souvenir de moi
                        </div>
                    </label>
                    <div id="u19_text" class="text ">
                        <p><span style={{color:"#3C90D1", position:"relative",left:"110px"}}>Mot de passe oublié?</span></p>
                    </div>
                    
                    
                    
                    <button onClick={this.loginClicked} className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc"}}>Se connecter</button>
                    <ErreurAuthentif hasLoginFailed={this.state.hasLoginFailed}/>
                    <SuccesAuthentif showSuccessMessage={this.state.showSuccessMessage}/>   
                </div>

            </div>
        )
    }

}
function ErreurAuthentif(props){
    if (props.hasLoginFailed){
        return <div>Le nom d'utilisateur ou le mot de passe sont érronés</div>
    }
    return null
}
function SuccesAuthentif(props){
    if (props.showSuccessMessage){
        return <div>Vous êtes connecté</div>
    }
    return null
}

export default Authentification