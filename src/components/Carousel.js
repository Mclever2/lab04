import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', paddingTop: '20px', width: '100%' }}>

      <Carousel style={{ width: '80%', maxWidth: '1000px', marginBottom: '0px' }}> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/12/infinity-war.jpg?fit=1000%2C563&amp;quality=50&amp;strip=all&amp;ssl=1"
            alt="First slide"
            style={{ objectFit: 'cover', maxHeight: '400px' }} 
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s0.smartresize.com/wallpaper/923/236/HD-wallpaper-logan-logan-movies.jpg"
            alt="Second slide"
            style={{ objectFit: 'cover', maxHeight: '400px' }} 
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://phantom-marca-mx.unidadeditorial.es/c6054dd457af5723685de9e985971eed/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/07/18/16896920030084.jpg"
            alt="Second slide"
            style={{ objectFit: 'cover', maxHeight: '400px' }} 
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;

