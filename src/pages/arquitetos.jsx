import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

import { colors } from "../utils/colors"
import { data as util } from "../utils/data"

import Img3 from "../assets/home/gd8-west-whales-2.jpeg"

const Background = styled.section`
    background-image: ${props => `url(${props.bg})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    background-blend-mode: multiply;
    background-color: ${colors.transparentBlack};

    display: flex;
    align-items: center;

    transition: 0.5s ease-in-out;

    .row-principal {
        margin: 230px 0 80px 0;
    }

    @media (min-width: 992px) {
        height: 100vh;
        width: 100vw;

        .row-principal {
            margin: 0;
        }
    }
`

const Arquitetos = () => {

    return (
        <Layout titlePage="Arquitetos" page={util.homeRoutes[4]}>
           <Background bg={Img3}>

           </Background>
        </Layout>
    )
}

export default Arquitetos
