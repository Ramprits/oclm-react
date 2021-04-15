/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listLeads } from 'graphql/queries';
import MetaData from 'components/helmet/Meta-data.component';
import Navigation from 'components/vertical-navs/VerticalNav';
import { useAuth } from 'context/auth.context';

function LeadPage() {
  const context = useAuth();
  console.log(context);
  const [list, setList] = useState([]);
  useEffect(() => {
    API.graphql(graphqlOperation(listLeads))
      .then(res => setList(res.data.listLeads.items))
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
          bucketMain={[<pre>{JSON.stringify(list, 4, null)}</pre>]}
        />
      </React.Fragment>
    </div>
  );
}

export default LeadPage;
