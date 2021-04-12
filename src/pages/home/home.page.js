/* eslint-disable react/jsx-key */
import React from 'react';
import VerticalNav from '../../components/vertical-navs/VerticalNav';
import MetaData from '../../components/helmet/Meta-data.component';
import Home from './components/Home.component';

export default function HomePage() {
  return (
    <React.Fragment>
      <MetaData title="Home page" />
      <VerticalNav
        content={{
          brand: {
            text: 'Dhanai Fruits',
            image: 'mui-assets/img/logo-pied-piper-white.png',
            width: '120'
          },
          'brand-small': {
            text: 'Dhanai Fruits',
            image: 'mui-assets/img/logo-pied-piper-white-icon.png',
            width: '32'
          },
          link1: 'Dashboard',
          link2: 'Product',
          link4: 'Contact'
        }}
        bucketMain={[<Home content={null} />]}
      />
    </React.Fragment>
  );
}
