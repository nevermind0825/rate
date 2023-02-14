import React from 'react';
import BannerCashOut from '../components/CashOutRefinanceComp/BannerCashOut';
import FAQ_cashout from '../components/CashOutRefinanceComp/FAQ_cashout';
import ToolsPricingCashout from '../components/CashOutRefinanceComp/ToolsPricingCashout';
import Layout from '../components/Layout/layout';

const disclaimer = [
    "*Using funds from a Cash-out Refinance to consolidate debt may result in the debt taking longer to pay off as it will be combined with borrower’s mortgage principle amount and will be paid off over the full loan term. Contact Guaranteed Rate for more information.",
    "**Savings, if any, vary based on consumer’s credit profile, interest rate availability, and other factors. Contact Guaranteed Rate, Inc. for current rates. Restrictions apply.",
    "***Guaranteed Rate does not provide tax advice. For more information, be sure to consult a tax advisor who can guide you through the tax implications of a mortgage refinance."
]

const CashOutRefinance = () => {
    return (
        <Layout className='container' >
            <BannerCashOut />
            <ToolsPricingCashout />
            <FAQ_cashout />
            <div>
                <h1>Article List will be dynamic here</h1>
            </div>
        </Layout>
    );
};

export default CashOutRefinance;