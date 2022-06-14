import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

import { data as util } from "../utils/data"

const Cases = () => {

  return (
    <Layout titlePage="Cases" page={util.homeRoutes[3]}>
        <h1>Cases</h1>
    </Layout>
  );
};

export default Cases;
