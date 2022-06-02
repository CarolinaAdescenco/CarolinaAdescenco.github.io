import React from 'react';
import {
  Navbar, Container, Row, Col,
} from 'react-bootstrap';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { ImFacebook, ImTwitter, ImWhatsapp } from 'react-icons/im';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { data } from '../../utils/data';
import LogoIMG from '../../assets/gd8-incorporadora.png';

import {
  NavbarComponent,
  NavbarCollapse,
  NavComponent,
  HeaderComponent,
  SocialContainer,
  Logo,
} from './styles';
import { colors } from '../../utils/colors';

const bounceAnimation = keyframes`${bounce}`;

const Card = styled(AniLink)`
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

    color: ${colors.white};
    text-decoration: none;
    text-align: center;

    transition: all 0.2s;

    @media (max-width: 991px) {
        width: 300px;
        margin: 0 auto;
        padding: 16px 0;

        &.active {
            background: ${colors.transparentWhite};
        }
    }

    &:hover {
        color: ${colors.transparentWhite2};
        background-color: ${colors.transparentWhite};
    }

    @media (min-width: 992px) {
        display: flex !important;
        align-items: center;
        border-bottom: 3px solid transparent;
        padding: 16px 20px !important;

        &.active {
            background: ${colors.transparentWhite};
            border-bottom: 3px solid ${colors.white};
        }
    }
`;

const navLinks = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/lancamentos',
    text: 'Lançamentos',
  },
  {
    path: '/portifolio',
    text: 'Portifólio',
  },
  {
    path: '/midia',
    text: 'Mídia',
  },
  {
    path: '/sobre',
    text: 'Sobre',
  },
  {
    path: '/contato',
    text: 'Contato',
  },
];

const Header = () => {
  const { head } = data;

  return (
    <HeaderComponent>
      <NavbarComponent variant="dark" expand="lg" sticky>
        <Container>
          <Logo to="/">
            <img
              src={LogoIMG}
              alt="GD8"
              title="GD8"
              className="img-fluid"
            />
          </Logo>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <NavComponent>
              {head.map((link, index) => (
                <Card
                  key={index}
                  paintDrip
                  top="exit"
                  to={link.path}
                  duration={1}
                >
                  {link.text}
                </Card>
              ))}
              <Social />
            </NavComponent>
          </NavbarCollapse>
        </Container>
      </NavbarComponent>
    </HeaderComponent>
  );
};
const Social = () => {
  const { social } = data;

  function useIcon(name) {
    switch (name) {
      case 'whatsapp':
        return <ImWhatsapp />;
      case 'facebook':
        return <ImFacebook />;
      case 'instagram':
        return <AiOutlineInstagram />;
      case 'twitter':
        return <ImTwitter />;
      case 'youtube':
        return <AiOutlineYoutube />;
      default:
        return <></>;
    }
  }

  return (
    <SocialContainer className="d-lg-none">
      {social.map((item, i) => (
        <a key={i} href={item.path} target="_blank" rel="noreferrer">
          {useIcon(item.name)}
        </a>
      ))}
    </SocialContainer>
  );
};

export default Header;
