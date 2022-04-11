import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

import { colors } from '../../utils/colors';

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
    @media (min-width: 992px) {
        height: 100%;
    }
`;

export const NavComponent = styled(Nav)`
    @media (min-width: 992px) {
        height: 100%;
    }
`;

export const NavLink = styled(Nav.Link)`
    @media (min-width: 992px) {
        display: flex !important;
        align-items: center;
        border-bottom: 3px solid transparent;
        padding: 0 20px !important;

        &.active {
            background: ${colors.transparentWhite};
            border-bottom: 3px solid ${colors.white};
        }
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;

    a{
        color: ${colors.gray};
        font-size: 21px;
        margin: 0 4.5px;

        transition: all .2s;

        &:hover{
            color: ${colors.white};
        }
    }
`;
