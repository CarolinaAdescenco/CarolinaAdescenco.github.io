import React from 'react';
import { Carousel } from 'react-bootstrap';

import { IoIosArrowRoundForward } from 'react-icons/io';

import {
  CarouselItem, Caption, Action, Link,
} from './styles';

const Slider = ({ data }) => {
  const { edges } = data;

  return (
    <Carousel controls={false} fade>
      {edges.map(({ node }, i) => (
        <CarouselItem key={i} bg={node.image}>
          <img
            className="d-none d-md-flex w-100 desktop"
            src={node.bannerDesktop.url}
            alt="Second slide"
          />

          <img
            className="d-flex d-md-none w-100 mobile"
            src={node.bannerMobile.url}
            alt="Second slide"
          />

          <Caption>
            <h3>{node.miniDescricao1}</h3>
            <p>{node.miniDescricao2}</p>

            <Action>
              <Link to={`lancamentos/${node.slug}`}>saiba mais</Link>
              <IoIosArrowRoundForward />
            </Action>
          </Caption>

        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Slider;
