import React from 'react';

const EnterprisePage = (content) => {
  const { pageContext } = content;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section>
      <h1>
        { pageContext.title }
      </h1>
    </section>
  );
};
export default EnterprisePage;
