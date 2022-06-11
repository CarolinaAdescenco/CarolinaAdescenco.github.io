import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

import { data as util } from "../utils/data"

const Premios = () => {

  return (
    <Layout titlePage="Prêmios" page={util.homeRoutes[1]}>
        <h1>Prêmios</h1>
    </Layout>
  );
};

export default Premios;
