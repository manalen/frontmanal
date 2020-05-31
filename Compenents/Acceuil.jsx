import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './footer';
import Carousel2 from './Carousel';
import "bootstrap/dist/css/bootstrap.css";
import './styles.css'
import './styles2.css'
import u3 from './u3.png'
import u4 from './u4.svg'
import u5 from './u5.svg'
import u7 from './u7.png'
import u8 from './u8.svg'
import u9 from './u9.png'
import u10 from './u10.png'
import u11 from './u11.png'
import u12 from './u12.png'
import u132 from'./u132.png'
import u98 from './u98.jpg'
import u99 from './u99.jpg'
import u100 from './u100.jpg'
import u101 from './u101.jpg'
import u102 from './u102.svg'
import u103 from './u103.svg'
import u104 from './u104.svg'
import u105 from './u105.svg'
import u107 from './u107.jpg'
import u110 from './u110.svg'
import u108 from './u108.svg'
import u109 from './u109.jpg'
import u113 from './u113.jpg'
import u111 from './u111.jpg'
import u112 from './u112.svg'
import u114 from './u114.svg'
import amine_u15 from './amine_u15.svg'
import amine_img_u16 from './amine_img_u16.jpg'
import manal_img_u21 from './manal_img_u21.png'
import othmane_img_u26 from './othmane_img_u26.jpg'
import hanae_img_u31 from './hanae_img_u31.jpg'

class Acceuil extends Component{
    connexion(){
        this.props.history.push(`/login`)
    }
    faq(){
        this.props.history.push(`/faq`)
    }
    
    render(){
        return(
            <div>
                 <head>
                    <title>Acceuil</title>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
                    <link href="resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                    <link href="data/styles.css" type="text/css" rel="stylesheet"/>
                    <link href="files/acceuil/styles.css" type="text/css" rel="stylesheet"/>
                    <link rel="stylesheet" href="css/bootstrap.min.css"></link>
                </head>
                <body>
                    
                    <div>
                        <div id="u1" className=""></div>
                        <iframe id="u2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.870676642131!2d-6.853160685574081!3d33.99585538062138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c91ffaabd59%3A0xccc90d07ffea3f63!2sClinique%20Agdal!5e0!3m2!1sfr!2sma!4v1587415991254!5m2!1sfr!2sma"></iframe>
                        <img id="u3" className="img " src={u3}/>
                        <img id="u4" className="img " src={u4}/>
                        <div id="u4" className="text ">
                            <p><span>medicare@gmail.com</span></p>
                        </div>
                        <div id="u5" className="ax_default label">
                            <img id="u5_img" className="img " src={u5}/>
                            <div id="u5_text" className="text ">
                                <p><span>05 35 12 34 56</span></p>
                            </div>
                        </div>
                        <div id="u6" className="ax_default label">
                            <img id="u6_img" className="img " src={u5}/>
                            <div id="u6_text" className="text ">
                                <p><span>05 35 23 45 76</span></p>
                            </div>
                        </div>
                        <div id="u7" className="ax_default image">
                            <img id="u7_img" className="img " src={u7}/>
                            <div id="u7_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                <p></p>
                            </div>
                        </div>
                        <div id="u8" className="ax_default label">
                            <img id="u8_img" className="img " src={u8}/>
                            <div id="u8_text" className="text ">
                                <button className="btn btn-success text " onClick={() => this.faq() } style={{backgroundColor:"#F8F9FA",borderColor:"#F8F9FA",height:"45px",font:"arial",fontSize:"22px",color:"#4997D4"}}>FAQ</button>
                            </div>
                        </div>
                        <div id="u9" className="ax_default image">
                            <img id="u9_img" className="img " src={u9}/>
                            <div id="u9_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                <p></p>
                            </div>
                        </div>

                        <div id="u10" className="ax_default image">
                        <img id="u10_img" className="img " src={u10}/>
                        <div id="u10_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                        </div>

                    <div id="u11" className="ax_default image">
                        <img id="u11_img" className="img " src={u11}/>
                        <div id="u11_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>

                    <div id="u12" class="ax_default image">
                        <img id="u12_img" class="img " src={u12}/>
                        <div id="u12_text" class="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>
                </div>

                    <div id="u13" className="ax_default" data-label="Equipe" data-left="42" data-top="1595" data-width="1091" data-height="1255" style={{position:"relative",left:"70px"}}>
                        <p id="u34">Notre équipe</p>

                        <div id="med">
                            <p id="u35" style={{position:"absolute",left:"470px"}}>Notre équipe médicale</p>
                            <div id="u14" className="ax_default" data-label="amine" data-left="42" data-top="1732" data-width="187" data-height="223">
                                <img id="u15" className="img" src={amine_u15}/>
                                <img id="u16" className="img " src={amine_img_u16}/>
                                <p id="u18">Amine Bidoud</p>
                            </div>
                            <div id="u19" className="ax_default" data-label="manal" data-left="655" data-top="1732" data-width="187" data-height="223">
                                <img id="u20" className="img " src={amine_u15}/>
                                <img id="u21" className="img " src={manal_img_u21}/>
                                <p id="u23">Manal En-nejjari></p>
                            </div>
                            <div id="u24" className="ax_default" data-label="othmane" data-left="340" data-top="1993" data-width="187" data-height="223">
                                <img id="u25" className="img " src={amine_u15}/>
                                <img id="u26" className="img " src={othmane_img_u26}/>
                                <p id="u27">Othmane Ait Ouceffage</p>
                            </div>
                            <div id="u29" className="ax_default" data-label="hanae" data-left="946" data-top="1733" data-width="187" data-height="223">
                                <img id="u30" className="img " src={amine_u15}/>
                                <img id="u31" class="img " src={hanae_img_u31}/>
                                <p id="u33">Hanae Ben Ibrahim</p>
                            </div>
                            <div id="u36" className="ax_default" data-label="amine" data-left="42" data-top="1732" data-width="187" data-height="223">
                                <img id="u37" className="img" src={amine_u15}/>
                                <img id="u38" className="img " src={amine_img_u16}/>
                                <p id="u40">Amine Bidoud</p>
                            </div>
                            <div id="u41" className="ax_default" data-label="manal" data-left="655" data-top="1732" data-width="187" data-height="223">
                                <img id="u42" className="img " src={amine_u15}/>
                                <img id="u43" className="img " src={manal_img_u21}/>
                                <p id="u45">Manal En-nejjari</p>
                            </div>
                            <div id="u46" className="ax_default" data-label="othmane" data-left="340" data-top="1993" data-width="187" data-height="223">
                                <img id="u47" className="img " src={amine_u15}/>
                                <img id="u48" className="img " src={othmane_img_u26}/>
                                <p id="u49">Othmane Ait Ouceffage</p>
                            </div>
                            <div id="u51" className="ax_default" data-label="hanae" data-left="946" data-top="1733" data-width="187" data-height="223">
                                <img id="u52" className="img " src={amine_u15}/>
                                <img id="u53" class="img " src={hanae_img_u31}/>
                                <p id="u55">Hanae Ben Ibrahim</p>
                            </div>
                        </div>
                        
                        <div id="admin">
                            <p id="u56" style={{position:"absolute",left:"470px"}}>Notre équipe administrative</p>
                            <div id="u57" className="ax_default" data-label="amine" data-left="42" data-top="1732" data-width="187" data-height="223">
                                <img id="u58" className="img" src={amine_u15}/>
                                <img id="u59" className="img " src={amine_img_u16}/>
                                <p id="u61"><span>Amine Bidoud</span></p>   
                            </div>
                            <div id="u62" className="ax_default" data-label="manal" data-left="655" data-top="1732" data-width="187" data-height="223">
                                <img id="u63" className="img " src={amine_u15}/>
                                <img id="u64" className="img " src={manal_img_u21}/>
                                <p id="u66"><span>Manal En-nejjari</span></p> 
                            </div>
                            <div id="u67" className="ax_default" data-label="othmane" data-left="340" data-top="1993" data-width="187" data-height="223">
                                <img id="u68" className="img " src={amine_u15}/>
                                <img id="u69" className="img " src={othmane_img_u26}/>
                                <p id="u70"><span>Othmane Ait Ouceffage</span></p>
                            </div>
                            <div id="u72" className="ax_default" data-label="hanae" data-left="946" data-top="1733" data-width="187" data-height="223">
                                <img id="u73" className="img " src={amine_u15}/>
                                <img id="u74" class="img " src={hanae_img_u31}/>
                                <p id="u76"><span>Hanae Ben Ibrahim</span></p>   
                            </div>
                            <div id="u77" className="ax_default" data-label="amine" data-left="42" data-top="1732" data-width="187" data-height="223">
                                <img id="u78" className="img" src={amine_u15}/>
                                <img id="u79" className="img " src={amine_img_u16}/>
                                <p id="u81">Amine Bidoud</p>
                            </div>
                            <div id="u82" className="ax_default" data-label="manal" data-left="655" data-top="1732" data-width="187" data-height="223">
                                <img id="u83" className="img " src={amine_u15}/>
                                <img id="u84" className="img " src={manal_img_u21}/>   
                                <p id="u86">Manal En-nejjari</p>
                            </div>
                            <div id="u87" className="ax_default" data-label="othmane" data-left="340" data-top="1993" data-width="187" data-height="223">
                                <img id="u88" className="img " src={amine_u15}/>
                                <img id="u89" className="img " src={othmane_img_u26}/>
                                <p id="u90">Othmane Ait Ouceffage</p>
                            </div>
                            <div id="u92" className="ax_default" data-label="hanae" data-left="946" data-top="1733" data-width="187" data-height="223">
                                <img id="u93" className="img " src={amine_u15}/>
                                <img id="u94" class="img " src={hanae_img_u31}/>
                                <p id="u96">Hanae Ben Ibrahim</p>
                            </div>
                        </div>
                        
                   </div>

                    <div id="u115" className="ax_default">
                        <Carousel2 id="Pres"/>

                        <div id="u117" className="ax_default paragraph">
                            <p>Le site vous permet d'avoir une idée sur notre centre hospitalier! Le plateau technique de la clinique est à la pointe de la science médicale actuelle, tout est fait pour offrir à nos patients tout ce qu'il y a de nouveau et de performant. La compétence du personnel médical permet à notre clinique de se démarquer et de vous offrir les meilleurs soins possibles. Les administrateurs et infirmiers restent à votre disposition 24h/24 pour vous accomagner et satidfaire toutes vos demandes.</p><br/>
                        </div>

                        <div id="u118" className="ax_default" style={{position:"relative",left:"70px"}}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4NEANeCAEI0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div id="u119" className="ax_default heading_1">
                            <p>Bienvenu sur le site de la clinique MEDICARE</p>
                            
                        </div>
                    </div>

                    <div id="u97" className="ax_default" data-label="Spécialités" data-left="42" data-top="1055" data-width="1077" data-height="490" style={{position:"relative",left:"70px"}}>
                        <div id="u98" className="ax_default image">
                            <img id="u98_img" className="img " src={u98}/>
                        </div>
                        <div id="u99" className="ax_default image">
                            <img id="u99_img" className="img " src={u99}/>
                        </div>
                        <div id="u100" className="ax_default image">
                            <img id="u100_img" className="img " src={u100}/>
                        </div>
                        <div id="u101" className="ax_default image">
                            <img id="u101_img" className="img " src={u101}/>
                        </div>

                        <div id="u102" className="ax_default label">
                            <img id="u102_img" className="img " src={u102}/>
                            <div id="u102_text" className="text ">
                                <p><span>Cardiologie</span></p>
                            </div>
                        </div>
                        <div id="u103" className="ax_default label">
                            <img id="u103_img" className="img " src={u103}/>
                            <div id="u103_text" className="text ">
                                <p><span>Radiologie</span></p>
                            </div>
                        </div>
                        <div id="u104" className="ax_default label">
                            <img id="u104_img" className="img " src={u104}/>
                            <div id="u104_text" className="text ">
                                <p><span>Traumatologie</span></p>
                            </div>
                        </div>
                        <div id="u105" className="ax_default label">
                            <img id="u105_img" className="img " src={u105}/>
                            <div id="u105_text" className="text ">
                                <p><span>Pédiatrie</span></p>
                            </div>
                        </div>
                        <div id="u106" className="ax_default heading_1">
                            <div id="u106_div" className=""></div>
                            <div id="u106_text" className="text ">
                                <p><span>Spécialités de MEDICARE</span></p>
                            </div>
                        </div>

                        <div id="u107" className="ax_default image">
                            <img id="u107_img" className="img " src={u107}/>
                        </div>
                        <div id="u108" className="ax_default label">
                            <img id="u108_img" className="img " src={u108}/>
                            <div id="u108_text" className="text ">
                                <p><span>Gastrologie</span></p>
                            </div>
                        </div>
                        <div id="u109" className="ax_default image">
                            <img id="u109_img" className="img " src={u109}/>
                        </div>
                        <div id="u110" className="ax_default label">
                            <img id="u110_img" className="img " src={u110}/>
                            <div id="u110_text" className="text ">
                                <p><span>Ophtalmologie</span></p>
                            </div>
                        </div>
                        <div id="u111" className="ax_default image">
                            <img id="u111_img" className="img " src={u111}/>
                        </div>
                        <div id="u112" className="ax_default label">
                            <img id="u112_img" className="img " src={u112}/>
                            <div id="u112_text" className="text ">
                                <p><span>Endocrinologie</span></p>
                            </div>
                        </div>
                        <div id="u113" className="ax_default image">
                            <img id="u113_img" className="img " src={u113}/>
                        </div>
                        <div id="u114" className="ax_default label">
                            <img id="u114_img" className="img " src={u114}/>
                            <div id="u114_text" className="text ">
                                <p><span>Chirurgie viscérale</span></p>
                            </div>
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
                
                </body>
            </div>
        )
    }
}

export default Acceuil
