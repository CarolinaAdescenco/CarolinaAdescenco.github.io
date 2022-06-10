import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import { ImWhatsapp } from "react-icons/im"
import { MdOutlineMailOutline } from "react-icons/md"

import { colors } from "../../utils/colors"

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;

    z-index: 99;

    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${colors.white};
    font-size: 26px;
    background-color: ${colors.themeColor};
    -webkit-box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);
    box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);

    a {
        position: relative;
        padding: 0 24px;
        display: flex;
        justify-content: center;
        color: ${colors.white};
        transition: 0.2s ease-in-out;

        &:nth-child(1) {
            &:after {
                content: "";
                position: absolute;
                right: 0;
                width: 1px;
                height: 26px;
                background: ${colors.gray};
            }
        }

        &:hover {
            color: ${colors.transparentWhite2};
        }
    }

    @media (min-width: 992px) {
        top: 45%;
        right: 0;
        z-index: 99;
        width: 50px;
        height: 160px;

        flex-direction: column;

        a {
            padding: 16px 0;

            &:nth-child(1) {
                &:after {
                    content: "";
                    position: absolute;
                    right: inherit;
                    bottom: 0;
                    width: 60%;
                    height: 1px;
                    background: ${colors.gray};
                }
            }
        }
    }
`

const Contact = () => {
    return (
        <Wrapper>
            <a href="#">
                <ImWhatsapp />
            </a>

            <AniLink
                cover
                direction="right"
                duration={1.5}
                to="/contato"
                bg={colors.themeColor}
            >
                <MdOutlineMailOutline />
            </AniLink>
        </Wrapper>
    )
}

export default Contact
