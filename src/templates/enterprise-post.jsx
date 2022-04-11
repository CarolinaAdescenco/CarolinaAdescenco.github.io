import React from 'react';
import Layout from '../components/layout';

const EnterprisePage = (content) => {
  const { pageContext } = content;

  return (
    <Layout>
      <section>
        <h1>
          { pageContext.title }
        </h1>
      </section>
    </Layout>
  );
};
export default EnterprisePage;
