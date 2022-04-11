import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import { ImWhatsapp, ImFacebook, ImTwitter } from 'react-icons/im';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

import {
  NavbarComponent, NavLink, NavbarCollapse, NavComponent, SocialContainer,
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

const Header = () => (
  <header>
    <NavbarComponent variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <NavComponent className="me-auto">
            <NavLink href="/">Lançamentos</NavLink>
            <NavLink href="#1">Portfólio</NavLink>
            <NavLink href="#2">Prêmios</NavLink>
            <NavLink href="#3">Mídia</NavLink>
            <NavLink href="#4">Contato</NavLink>
            <NavLink href="#5">Sobre</NavLink>
          </NavComponent>
        </NavbarCollapse>

        <Social />
      </Container>
    </NavbarComponent>

  </header>
);

const Social = () => (
  <SocialContainer>
    { social.map((media, i) => (
      <a key={i} href={media.path} target="_blank" rel="noreferrer">{media.icon}</a>
    )) }
  </SocialContainer>
);

export default Header;
