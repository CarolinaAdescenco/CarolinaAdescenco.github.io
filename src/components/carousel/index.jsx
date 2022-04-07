import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselItem } from './styles';

const banners = [
  {
    image: 'https://s2.glbimg.com/qESrf50fJr-csy_4nmke08Y7g-s=/e.glbimg.com/og/ed/f/original/2019/04/11/casa-de-praia-com-paisagismo-tropical.jpeg',
    path: 'https://react-icons.github.io/react-icons/search?q=youtube',
  },
  {
    image: 'https://casacor.abril.com.br/wp-content/uploads/sites/7/2022/01/Casa-Liu-Raiz-Arquitetura-Foto-Leonardo-Giantomasi-1.jpg?quality=90&strip=info',
    path: 'https://react-icons.github.io/react-icons/search?q=youtube',
  },
];

const Slider = () => (
  <Carousel fade>

    {
        banners.map((banner, i) => (
          <CarouselItem key={i} bg={banner.image}>
            <img
              className="d-block w-100"
              src={banner.image}
              alt="Second slide"
            />

            {/* <div bg={banner.image} /> */}

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </CarouselItem>

        ))
    }

  </Carousel>
);

export default Slider;
