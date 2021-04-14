/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listLeads } from 'graphql/queries';
import MetaData from 'components/helmet/Meta-data.component';
import Navigation from 'components/vertical-navs/VerticalNav';

function LeadPage() {
  useEffect(() => {
    API.graphql(graphqlOperation(listLeads))
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <React.Fragment>
        <MetaData title="Home page" />
        <Navigation
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
          bucketMain={[<div>Lead pages</div>]}
        />
      </React.Fragment>
    </div>
  );
}

export default LeadPage;
