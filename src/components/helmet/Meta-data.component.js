import React from "react";
import { Helmet } from "react-helmet";
function MetaData({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
}

export default MetaData;
