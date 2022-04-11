import React from 'react';

import Header from '../header';
import Footer from '../footer';
import Seo from '../seo';

const Layout = ({ children }) => (
  <>
    <Header />
    <Seo />
    <section>{children}</section>
    <Footer />
  </>
);

export default Layout;
