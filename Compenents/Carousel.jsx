
import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import u124v2 from './u124v2.jpg'
import u125 from './u125.jpg'
import u123v2 from './u123v2.jpg'
import u122v2 from './u122v2.jpg'
class Carousel2 extends Component {
    render(){
        return(
            <Carousel style={{position:"absolute",left:"250px",top:"80px",width:"760px",height:"350px"}}>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={u122v2}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={u123v2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={u124v2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={u125}
                    alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default Carousel2                      