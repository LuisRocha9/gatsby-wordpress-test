import React from 'react';
import Layout from '../components/layout';

const PageTemplate = ({ pageContext }) => (
    <Layout>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
)


export default PageTemplate
