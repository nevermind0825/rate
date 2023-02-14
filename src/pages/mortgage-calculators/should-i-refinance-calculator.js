import React from 'react';
import Layout from '../../components/Layout/layout';
import FAQrefinanceCalc from '../../components/MortgageCalsCmp/RefinanceCalculator/FAQrefinanceCalc';

const Should_i_refinance_calculator = () => {
    return (
        <Layout className='container' >
            <h1>Mortgage Refinance Calculator: Should I refinance now?</h1>
            <FAQrefinanceCalc />
        </Layout>
    );
};

export default Should_i_refinance_calculator;