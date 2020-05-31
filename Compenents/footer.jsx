import React, {Component} from 'react';
import StickyFooter from 'react-sticky-footer';
import u3 from './u3.png'
import u4 from './u4.svg'
import u5 from './u5.svg'
import u7 from './u7.png'
import u8 from './u8.svg'
import u9 from './u9.png'
import u10 from './u10.png'
import u11 from './u11.png'
import u12 from './u12.png'


class Footer extends Component{
    faq(){
        this.props.history.push('/faq')
    }

    
    render(){
        return(
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
        )
    }
}
export default Footer