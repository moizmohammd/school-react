// import Carousel from 'react-bootstrap/Carousel'
// import 'bootstrap/dist/css/bootstrap.min.css';
import slider1 from './slider1.jpeg'
import slider2 from './slider2.jpeg';
import slider3 from './slider3.jpeg';
// function Slider(){

//     return(

//         <>

// <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100" /*style={{height:"600px"}}*/
//           src={slider1}
//           alt="First slide"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100" /*style={{height:"600px"}}*/
//           src={slider2}
//           alt="Second slide"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100" /*style={{height:"600px"}}*/
//           src={slider3}
//           alt="Third slide"
//         />
//       </Carousel.Item>
//     </Carousel>
//         </>
//     )
// }

// export default Slider;

// import AwesomeSlider from 'react-awesome-slider'
// import 'react-awesome-slider/dist/styles.css';

// function Slider(){
//   return(
//     <>
//   <AwesomeSlider>
//     <div><img src={slider1}></img></div>
//     <div><img src={slider2}></img></div>
//     <div><img src={slider3}></img></div>
//   </AwesomeSlider>
//   </>
// )}
// export default Slider 

import React, { useState, useEffect } from 'react';
import './Slider.css'

function Slider() {
  const images = [
   slider1,
   slider2,
   slider3
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [images.length]);
  

  return (
    <div className="carousel">
      <img
        className="carousel__image"
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
      />
      <button
        className="carousel__button carousel__button--left"
        onClick={() => setCurrentImage((currentImage) => (currentImage - 1 + images.length) % images.length)}
      >
        &lt;
      </button>
      <button
        className="carousel__button carousel__button--right"
        onClick={() => setCurrentImage((currentImage) => (currentImage + 1) % images.length)}
      >
        &gt;
      </button>
    </div>
  );
}

export default Slider;
