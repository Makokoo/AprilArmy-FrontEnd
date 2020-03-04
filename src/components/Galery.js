import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import thumbnail from '../assets/images/thumbnail.jpg';
import { Carousel } from 'react-bootstrap';

const spanStyles = {
    height:500
};

class Galery extends Component{

    
    render(){

        return (
            
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={spanStyles}
                src={thumbnail}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={spanStyles}
                src={thumbnail}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={spanStyles}
                src={thumbnail}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        );
    };

}

export default Galery;