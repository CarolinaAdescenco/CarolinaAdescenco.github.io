import React from "react"
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { ImFacebook, ImTwitter, ImWhatsapp } from "react-icons/im"
import styled, { css, keyframes } from "styled-components"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { data } from "../../utils/data"
import LogoIMG from "../../assets/gd8-incorporadora.png"

import { colors } from "../../utils/colors"

const slideMenu = keyframes`
      from {
      -webkit-transform: scaleX(0);
              transform: scaleX(0);
    }
    to {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
    }
  `

const menuItemAnim = keyframes`
  from {
    -webkit-transform: translateY(30%);
            transform: translateY(30%);
    opacity: 0;
  }
  to {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  `

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
`

const Button = styled.button`
    margin-left: auto;
    border: none;
    background: transparent;
    z-index: 999;

    #icon {
        width: 175px;
        height: 125px;
        cursor: pointer;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    path {
        fill: none;
        -webkit-transition: stroke-dashoffset 0.5s
                cubic-bezier(0.25, -0.25, 0.75, 1.25),
            stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
        -moz-transition: stroke-dashoffset 0.5s
                cubic-bezier(0.25, -0.25, 0.75, 1.25),
            stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
        -o-transition: stroke-dashoffset 0.5s
                cubic-bezier(0.25, -0.25, 0.75, 1.25),
            stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
        -ms-transition: stroke-dashoffset 0.5s
                cubic-bezier(0.25, -0.25, 0.75, 1.25),
            stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
        transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
            stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
        stroke-width: 40px;
        stroke-linecap: round;
        stroke: ${colors.themeColor2};
        stroke-dashoffset: 0px;
    }
    path#top,
    path#bottom {
        stroke-dasharray: 240px 950px;
    }
    path#middle {
        stroke-dasharray: 240px 240px;
    }

    ${props =>
        props.show &&
        css`
            path#top,
            path#bottom {
                stroke-dashoffset: -650px;
                stroke-dashoffset: -650px;
            }
            path#middle {
                stroke-dashoffset: -115px;
                stroke-dasharray: 1px 220px;
            }
        `}
`

const Nav = styled.nav`
    position: fixed;
    background: black;
    padding: 2em;
    width: 100vw;
    height: 100vh;
    display: none;
    transform: scaleX(0);
    transform-origin: right;

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        width: 80%;

        li {
            opacity: 0;
            text-align: center;
            margin: 16px 0;
            padding: 8px;
        }

        a {
            color: white;
            font-weight: 100;
            font-size: 1.4em;
            text-decoration: none;
            letter-spacing: 3px;
            text-transform: uppercase;
        }

        @media (min-width: 1200px) {
            flex-direction: row;
            justify-content: space-around;
            margin: 50px 0;

            li {
                margin: 8px;
                padding: 8px;
            }
        }

        &.social {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 200px;

            a {
                font-size: 26px;
                margin: 0 8px;

                &:hover {
                    color: ${colors.white};
                }
            }
        }
    }

    ${props =>
        props.show &&
        css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            animation: ${slideMenu} 1s ease-in forwards;
            z-index: 99;

            li {
                opacity: 1;

                &:nth-of-type(1) {
                    animation: ${menuItemAnim} 0.6s forwards 0.8s ease-in-out;
                }

                &:nth-of-type(2) {
                    animation: ${menuItemAnim} 0.6s forwards 1.1s ease-in-out;
                }

                &:nth-of-type(3) {
                    animation: ${menuItemAnim} 0.6s forwards 1.3s ease-in-out;
                }

                &:nth-of-type(4) {
                    animation: ${menuItemAnim} 0.6s forwards 1.5s ease-in-out;
                }
                &:nth-of-type(5) {
                    animation: ${menuItemAnim} 0.6s forwards 1.7s ease-in-out;
                }
                &:nth-of-type(6) {
                    animation: ${menuItemAnim} 0.6s forwards 1.9s ease-in-out;
                }
            }

            .social {
                li {
                    animation: ${menuItemAnim} 0.6s forwards 1.13s ease-in-out;
                }
            }
        `}
`

const Header = () => {
    const { routes } = data
    const { social } = data

    function useIcon(name) {
        switch (name) {
            case "whatsapp":
                return <ImWhatsapp />
            case "facebook":
                return <ImFacebook />
            case "instagram":
                return <AiOutlineInstagram />
            case "twitter":
                return <ImTwitter />
            case "youtube":
                return <AiOutlineYoutube />
            default:
                return <></>
        }
    }

    const [show, setShow] = React.useState(false)

    return (
        <HeaderWrapper>
            <Button type="button" onClick={() => setShow(!show)} show={show}>
                <svg id="icon" viewBox="0 0 800 600">
                    <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                    ></path>
                    <path d="M300,320 L540,320" id="middle"></path>
                    <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                    ></path>
                </svg>
            </Button>
            <Nav show={show}>
                <ul>
                    {routes.map(route => (
                        <li key={route.path}>
                            <AniLink
                                cover
                                direction="right"
                                duration={1.5}
                                to={route.path}
                                bg={colors.themeColor}
                            >
                                {route.text}
                            </AniLink>
                        </li>
                    ))}
                </ul>

                <ul class="social">
                    {social.map((item, i) => (
                        <li key={i}>
                            <a
                                href={item.path}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {useIcon(item.name)}
                            </a>
                        </li>
                    ))}
                </ul>
            </Nav>
        </HeaderWrapper>
    )
}

export default Header
