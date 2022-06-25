import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { colors } from "../../utils/colors"
import { useIcon } from "../../utils/functions"

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 99;
    width: 100%;
    padding: 12px 0;
    color: ${colors.white};
    font-size: 22px;
    background-color: ${colors.dark};
    -webkit-box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);
    box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);

    h2 {
        font-size: 16px;
        font-weight: 100;
        text-transform: uppercase;
        text-align: center;
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: center;

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
    }

    @media (min-width: 992px) {
        z-index: 99;
        right: 6%;
        width: 160px;
        padding: 10px;
    }
`

const Contact = () => (
    <StaticQuery
        query={graphql`
            query {
                contentfulPaginas(titulo: { eq: "Contato" }) {
                    informacoes {
                        social {
                            name
                            path
                        }
                    }
                }
            }
        `}
        render={data => {
            const { social } = data.contentfulPaginas.informacoes

            return (
                <Wrapper>
                    <h2>Contato</h2>

                    <div className="links">
                        <a href={social[0].path} target="_blank">
                            {useIcon(social[0].name)}
                        </a>

                        <AniLink fade duration={3} to="/contato">
                            {useIcon("email")}
                        </AniLink>
                    </div>
                </Wrapper>
            )
        }}
    />
)
export default Contact
