/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { graphql, Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { bounce } from 'react-animations';

import LogoIMG from '../assets/gd8-incorporadora-logo.png';
import { colors } from '../utils/colors';
import Header from '../components/header';

const Logo = styled.aside`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    h2 {
        color: ${colors.white};
        font-weight: 100;
        text-transform: uppercase;

        letter-spacing: 14px;
        margin-left: 14px;
        font-size: 24px;
        margin-top: 18px;
    }

    img {
        opacity: 0.8;
        width: auto;
        max-width: 100%;
        background-color: ${colors.themeColor};
        padding: 16px;
    }

    @media (min-width: 992px) {
        width: 460px;

        h2 {
            letter-spacing: 24px;
            margin-left: 24px;
            font-size: 21px;
            margin-top: 18px;
        }
    }
`;

const Background = styled.section`
    background-image: ${(props) => `url(${props.bgMobile})`};
`;

const bounceAnimation = keyframes`${bounce}`;

const Card = styled(AniLink)`
    background: ${colors.black};
    display: flex;
    justify-content: center;

    text-decoration: none;
    padding: 24px 16px;
    margin: 8px;
    animation: 1s ${bounceAnimation};

    &.box-p {
        width: 200px;
    }
    &.box-m {
        width: 250px;
    }
    &.box-g {
        width: 300px;
    }
`;

const MenuWrapper = styled.div`

    .btns{
        /* display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(69, 62, 235);
        border-radius: 50%; */

    }

    .effect-mouse {
        position: absolute;
        width: 40px;
        height: 40px;
        background: rgb(69, 62, 235);
        z-index: -1;
        border-radius: 50%;
        opacity: 0;
        transition: all .2s;
        transform: ${(props) => `translate(${props.x / 2}px,${props.y / 2}px)`};;
    }

    .btns button {
        border: 0px;
        background: rgb(69, 62, 235);
        color: #fff;
        list-style: none;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: absolute;
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);
        z-index: 1;
        padding: 0px;
        outline: none;
        box-shadow: 0px 0px 12px 0px rgba(69, 62, 235, 0.3);
        cursor: pointer;

        &:not(.btn-menu) i {
            font-size: 1.4rem;
            transition: all .25s ease;
            opacity: 0;
        }
    }

    .btns .btn-menu {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0px;
        background: rgb(69, 62, 235);
        outline: none;
        border: 0px;
        z-index: 100;
        transition: all .25s ease !important;
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }

        i {
            font-size: 1.8rem;
            position: absolute;
            transition: all .25s ease;
            color: #fff;
        }

        .bx-x {
            opacity: 0;
            transform: scale(0);
        }
    }

    #check {
        position: absolute;
        z-index: 200;
        opacity: 0;
        cursor: pointer;

        &:checked ~ .btn-menu .bx-x {
            opacity: 1;
            transform: scale(1);
        }

        &:checked ~ .btn-menu .bx-menu {
            opacity: 0 !important;
            transform: rotate(180deg) scale(0);
        }

        &:checked ~ button {
            box-shadow: 0px 0px 15px 0 rgba(69, 62, 235, 1);
            z-index: 200;
        }

        &:checked ~ button i {
            /* box-shadow: 0px 0px 15px rgba(69, 62, 235, 1);
            z-index: 200; */
            opacity: 1;
        }

        &:checked ~ button:hover i {
            transform: scale(1.2);
        }

        &:checked ~ .btn-menu {
            transform: scale(1.2);
        }

        &:checked ~ .btn-menu .effect-mouse {
            opacity: 1;
        }
    }

    .btns .btn-5,
    .btns .btn-6 {
        transition: all .5s cubic-bezier(0.175, 0.885, 0.320, 1.275) .1s;
    }

    .btns .btn-1,
    .btns .btn-2 {
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.05s;
    }

    #check:checked ~ .btn-1 {
        transform: translate(90px);
    }
    #check:checked ~ .btn-2 {
        transform: translate(-90px);
    }
    #check:checked ~ .btn-3 {
        transform: translate(0,-90px);
    }
    #check:checked ~ .btn-4 {
        transform: translate(-65px, -65px);
    }
    #check:checked ~ .btn-5 {
        transform: translate(65px,65px);
    }
    #check:checked ~ .btn-6 {
        transform: translate(0,90px);
    }
`;

const Index = () => {
  const [position, setPosition] = React.useState();

  return (
    <Background className="h-100">
      <Container>
        {/* <Row>
              <Col>
                <Logo>
                  <img src={LogoIMG} alt="logo" />
                  <h2>Incorporadora</h2>
                </Logo>
              </Col> */}

        <MenuWrapper onMouseMove={(e) => setPosition(e)} x={position?.clientX} y={position?.clientY}>
          <div className="btns">

            <input type="checkbox" id="check" />
            <label className="btn-menu" htmlFor="check">
              <i className="bx bx-menu" />
              <i className="bx bx-x" />
              <span className="effect-mouse" />
            </label>

            <button type="button" className="btn-1">
              <i className="bx bxl-instagram-alt" />
            </button>
            <button type="button" className="btn-2">
              <i className="bx bxl-instagram-alt" />
            </button>
            <button type="button" className="btn-3">
              <i className="bx bxl-instagram-alt" />
            </button>
            <button type="button" className="btn-4">
              <i className="bx bxl-instagram-alt" />
            </button>
            <button type="button" className="btn-5">
              <i className="bx bxl-instagram-alt" />
            </button>
            <button type="button" className="btn-6">
              <i className="bx bxl-instagram-alt" />
            </button>
          </div>
        </MenuWrapper>

        {/* </Row> */}
      </Container>
    </Background>
  );
};

export default Index;
