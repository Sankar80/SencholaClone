import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Service.css"


const Maincarousel = () => {
  return (
    <div className='container-fluid caro-contain w-100'>
      <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require("./Img/Rectangle 4587.png")}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require("./Img/Rectangle 4592.png")}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require("./Img/Rectangle 4620.png")}
            alt="Third slide"
            />
        </Carousel.Item>
        
        
    </Carousel>




    </div>
  
         
        
       
        
   
  );
}

export default Maincarousel;