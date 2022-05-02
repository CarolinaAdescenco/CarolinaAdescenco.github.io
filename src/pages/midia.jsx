import * as React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Col, Row } from 'react-bootstrap';

import Layout from '../components/layout';

import {
  BackgroundImage, Aside, Container, TitlePage, DotButton, DotColumn, Figure, P,
} from '../components/layout/styles';

const Midia = () => {
//   const { edges } = data.allContentfulGeral;
  const [element, setElement] = React.useState(0);
  return (
    <Layout>
      <Container>
        <TitlePage>Prêmio</TitlePage>

        <Row className="mb-4">
          <p>Esse é o nosso Hall da fama particular.</p>
          <p>
            Mantemos sempre com muito orgulho nossas premiações em voga,
            para jamais esquecer do compromisso que fazemos com a qualidade
            e experiência que proporcionamos aos nossos clientes.
          </p>
        </Row>

        <Figure>
          <img
            className="img-fluid"
            src="https://gd8.com.br/imagens-gd8/premio-gd8-west-whales.jpeg"
            alt="Prêmio Master Imobiliário GD8 - West Whales"
            title="Prêmio Master Imobiliário GD8 - West Whales"
          />

          <figcaption>West Whales</figcaption>
        </Figure>
      </Container>

      <Container>
        <TitlePage>GD8 na Mídia</TitlePage>

        <Row className="mb-4">
          <p>
            Nossa preocupação com qualidade e experiência, assim como a
            responsabilidade social e ambiental, nos proporcionam convites
            para compartilhar nossa opinião e conhecimento com o mercado.
          </p>
          <p>Veja algumas matérias aqui:</p>
        </Row>

        <Row>
          <Col className="col-12 col-md-5">
            {/* <BackgroundImage
              style={{
                backgroundImage: `url(${edges[element].node.background?.url}`,
              }}
            /> */}
          </Col>
          <DotColumn className="col-12 col-md-1">
            {/* {edges.map(({ node }, index) => (
              <DotButton
                key={index}
                type="button"
                active={index === element}
                onClick={() => setElement(index)}
              />
            ))} */}
          </DotColumn>
          <Col className="col-12 col-md-6">
            <Aside>
              {/* { renderRichText(edges[element].node.description) } */}
            </Aside>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Midia;
