import * as React from 'react';
import Slider from '../components/carousel';
import Header from '../components/header';
import EnterprisePage from '../templates/enterprise';

export default function Index() {
  return (
    <div>
      <Header />
      <Slider />

      <EnterprisePage />
    </div>
  );
}
