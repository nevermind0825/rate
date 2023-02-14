import React from 'react';
import Layout from '../../../components/Layout/layout';
import MortgageNewsFeature from '../../../components/resourcesCmp/MortgageNews/MortgageNews';
// import Layout from '../../components/Layout/layout';
// import MortgageNewsFeature from '../../components/resourcesCmp/MortgageNews/MortgageNews';

const MortgageNews = () => {
    return (
        <Layout className='container'>
            <MortgageNewsFeature></MortgageNewsFeature>
        </Layout>
    );
};

export default MortgageNews;