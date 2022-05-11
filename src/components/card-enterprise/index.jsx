import React from 'react';
import {
  Col, Container,
} from 'react-bootstrap';

import { IoIosArrowRoundForward } from 'react-icons/io';

import {
  Aside, Card, Action, FloatCol, AsideContent, Separator,
} from './styles';

const CardEnterprise = ({ data, type }) => {
  const { edges } = data;

  return (
    <Container>
      {edges.map(({ node }) => (
        <Card
          key={`${node.slug}`}
          to={`lancamentos/${node.slug}`}
          className="row align-items-center justify-content-center g-0"
        >
          <Col className="col-12 col-lg-5">
            <img
              src={node.bannerMobile.url}
              alt={node.bannerMobile.description}
              title={node.bannerMobile.title}
              className="img-fluid"
            />
          </Col>
          <FloatCol className="col-12 col-lg-5">
            <Aside>
              <h3 className="title">{type}</h3>
              <AsideContent>
                <h3>{node.title}</h3>
                <p>
                  {node.miniDescricao1}
                  <Separator />
                  {node.miniDescricao2}
                </p>
                <Action>
                  saiba mais
                  <IoIosArrowRoundForward />
                </Action>
              </AsideContent>
            </Aside>
          </FloatCol>
        </Card>
      ))}
    </Container>
  );
};

export default CardEnterprise;
