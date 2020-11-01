import React from 'react';
import { Helmet } from 'react-helmet';

function Head({ title }) {
   
    return (
        <Helmet title={title} />
    )
}

export default Head;
