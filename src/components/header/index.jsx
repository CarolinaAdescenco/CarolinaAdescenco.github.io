import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import { ImWhatsapp, ImFacebook, ImTwitter } from 'react-icons/im';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

import {
  NavbarComponent, NavLink, NavbarCollapse, NavComponent, SocialContainer, HeaderComponent,
} from './styles';

const social = [
  {
    icon: <ImWhatsapp />,
    path: 'https://react-icons.github.io/react-icons/search?q=youtube',
  },
  {
    icon: <ImFacebook />,
    path: '1234',
  },
  {
    icon: <AiOutlineInstagram />,
    path: '1235',
  },
  {
    icon: <ImTwitter />,
    path: '1236',
  }, {
    icon: <AiOutlineYoutube />,
    path: '1237',
  },
];

const navLinks = [
  {
    path: '/lancamentos',
    text: 'Lançamentos',
  },
  {
    path: '/portfolio',
    text: 'Portfólio',
  },
  {
    path: '/premios',
    text: 'Premios',
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

const Header = () => (
  <HeaderComponent>
    <NavbarComponent variant="dark" expand="lg" sticky>
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <NavComponent className="me-auto">
            {
                navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    activeClassName="active"
                  >
                    {link.text}
                  </NavLink>
                ))
            }
          </NavComponent>
        </NavbarCollapse>

        <Social />
      </Container>
    </NavbarComponent>

  </HeaderComponent>
);

const Social = () => (
  <SocialContainer>
    { social.map((media, i) => (
      <a key={i} href={media.path} target="_blank" rel="noreferrer">{media.icon}</a>
    )) }
  </SocialContainer>
);

export default Header;
