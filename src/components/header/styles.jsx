import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';

import { colors } from '../../utils/colors';

export const HeaderComponent = styled.header`
    position: relative;
    z-index: 999;
    -webkit-box-shadow: 0px 4px 8px 1px #000000;
    box-shadow: 0px 4px 8px 1px #000000;
`;

export const NavbarComponent = styled(Navbar)`
    background: ${colors.themeColor};
    color: ${colors.primary};

    @media (min-width: 992px) {
        height: 120px;
        padding: 0px !important;

        .container {
            height: 100%;
        }
    }
`;

export const NavbarCollapse = styled(Navbar.Collapse)`
    &.show{
        height: 100vh;
    }

    @media (min-width: 992px) {
        height: 100%;
    }
`;

export const NavComponent = styled(Nav)`
    height: inherit;
    justify-content: center;
    margin-left: auto;

    @media (min-width: 992px) {
        height: 100%;
    }
`;

export const Logo = styled(Link)`
    width: 150px;
    text-decoration: none;

    @media(min-width: 576px){
        width: 175px;
    }
`;

export const NavLink = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
    text-align: center;

    transition: all .2s;


    @media(max-width: 991px){
        width: 300px;
        margin: 0 auto;
        padding: 16px 0;

        &.active {
            background: ${colors.transparentWhite};
        }
    }

    &:hover{
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

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;

    a{
        color: ${colors.gray};
        font-size: 21px;
        margin: 0 8px;

        transition: all .2s;

        &:hover{
            color: ${colors.white};
        }
    }
`;
