import React from 'react';
import CalculatorClosingCost from '../../components/Calculators/closingCost/CalculatorClosingCost';
import CalculatorPageTitle from '../../components/common/CalculatorPageTitle';
import Layout from '../../components/Layout/layout';
import FaqClosingCost from '../../components/MortgageCalsCmp/ClosingCost/FaqClosingCost';

const closingCalcTitleInfo = {
    title:"Closing Cost Calculator: How much are closing costs on a house?",
    info:"Before you own a new home, you’ll need to settle the closing costs on your mortgage and purchase. Our closing cost calculator can help you estimate what these charges will look like to help you prepare for every expenditure when buying a home."
}

const ClosingCostCalculator = () => {
    
    return (
        <Layout className='container' >
            <CalculatorPageTitle title={closingCalcTitleInfo.title} info={closingCalcTitleInfo.info} />
            <CalculatorClosingCost />
            <FaqClosingCost />
        </Layout>
    );
};

export default ClosingCostCalculator;