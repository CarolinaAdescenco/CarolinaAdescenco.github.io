import * as React from 'react';
import { graphql } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import Layout from '../components/layout';

import {
  Button, Aside, TitlePage, Container, Subtitle,
} from '../components/layout/styles';

import { sobre } from '../utils/sobre';

const Sobre = () => {
  const {
    first, second, third, fourth,
  } = sobre;

  const [element, setElement] = React.useState(0);
  return (
    <Layout>
      <Container>
        <TitlePage>{first.title}</TitlePage>
        <ul>
          {first.list.map(((item, i) => <li key={i}>{item}</li>))}
        </ul>

        <Row className="mt-5">
          <Subtitle className="mb-4">{second.title}</Subtitle>
          { second.paragraph.map((item, index) => (
            <Col key={index} className="col-12 col-xl-4">
              <Button
                type="button"
                active={index === element}
                onClick={() => setElement(index)}
              >
                {item.title}
              </Button>
            </Col>
          ))}
          <Aside className="mt-4">
            <p>{second.paragraph[element].content}</p>
          </Aside>
        </Row>

        <Row className="mt-5">
          <Subtitle>{third.title}</Subtitle>
          {
              third.paragraph.map((item, i) => (
                <p key={i}>{item}</p>
              ))
          }
        </Row>

        <Row className="mt-5">
          <Subtitle>{fourth.title}</Subtitle>
          {
              fourth.paragraph.map((item, i) => (
                <p key={i}>{item}</p>
              ))
          }
          <ul className="mx-5">
            {
                fourth.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))
            }
          </ul>
        </Row>
      </Container>

    </Layout>
  );
};

export default Sobre;
