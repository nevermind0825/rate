import React from 'react';
import Layout from '../../components/Layout/layout';
import FAQrefinanceCalc from '../../components/MortgageCalsCmp/RefinanceCalculator/FAQrefinanceCalc';

const How_much_home_can_i_buy_calculator = () => {
    return (
        <Layout className='container'>
            <h1>How much house can I afford?</h1>
            <FAQrefinanceCalc />
        </Layout>
    );
};

export default How_much_home_can_i_buy_calculator;