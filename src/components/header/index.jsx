import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { ImFacebook, ImTwitter, ImWhatsapp } from 'react-icons/im';

import { data } from '../../utils/data';

import {
  NavbarComponent, NavLink, NavbarCollapse, NavComponent, HeaderComponent, SocialContainer,
} from './styles';

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
          <NavComponent>
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

            <Social />

          </NavComponent>
        </NavbarCollapse>
      </Container>
    </NavbarComponent>

  </HeaderComponent>
);

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
        <a key={i} href={item.path} target="_blank" rel="noreferrer">{useIcon(item.name)}</a>
      ))}
    </SocialContainer>
  );
};

export default Header;
