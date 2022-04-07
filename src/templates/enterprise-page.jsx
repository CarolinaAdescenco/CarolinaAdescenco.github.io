import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const EnterprisePage = ({ data }) => (

  <section>

    {console.log(data)}

    <div key={data.id}>
      <h1>{data.title}</h1>
    </div>
  </section>
);
export default EnterprisePage;
