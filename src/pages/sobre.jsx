import * as React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

import { IoConstructOutline } from 'react-icons/io5';
import { BiBuildings } from 'react-icons/bi';
import { MdOutlineMapsHomeWork } from 'react-icons/md';

import Layout from '../components/layout';

import {
  TitlePage, Container, Subtitle,
} from '../components/layout/styles';

import { sobre } from '../utils/sobre';
import { colors } from '../utils/colors';

const CardList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
`;

const Card = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 32%;

    background: ${colors.transparentWhite};
    padding: 32px 0;
    border-radius: 4px;
    transition: all .2s;

    &:hover{
        background: ${colors.themeColor2};
        transform: translateY(-3px);
    }


    svg{
        font-size: 72px;
    }
`;

const Sobre = () => {
  const {
    first, second, third, fourth,
  } = sobre;

  const [element, setElement] = React.useState(0);

  function useIcon(name) {
    switch (name) {
      case 'construct':
        return <IoConstructOutline />;
      case 'building':
        return <BiBuildings />;
      case 'home':
        return <MdOutlineMapsHomeWork />;
      default:
        return <IoConstructOutline />;
    }
  }

  return (
    <Layout titlePage="Sobre">
      <Container>
        <TitlePage>{first.title}</TitlePage>
        <CardList>
          {first.list.map(((item, i) => (
            <Card key={i}>
              {useIcon(item.icon)}
              {item.title}
            </Card>
          )))}
        </CardList>

        {/* <Row className="mt-5">
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
        </Row> */}

        <Row className="mt-5">
          <Subtitle>{second.title}</Subtitle>

          <ul className="mx-5">
            {
                second.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))
            }
          </ul>
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
