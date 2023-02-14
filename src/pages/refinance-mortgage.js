import React from 'react';
import Layout from '../components/Layout/layout';
import BannerRefinanceMort from '../components/MortgageRate/RefinanceMortgage/BannerRefinanceMort';
import FAQ_refinance from '../components/MortgageRate/RefinanceMortgage/FAQ_refinance';
import FindLowRate from '../components/MortgageRate/RefinanceMortgage/FindLowRate';
import HomeRate from '../components/MortgageRate/RefinanceMortgage/HomeRate';
import HowRefaineQA from '../components/MortgageRate/RefinanceMortgage/HowRefaineQA';
import KnowRefinance from '../components/MortgageRate/RefinanceMortgage/KnowRefinance';
import OtherAspect from '../components/MortgageRate/RefinanceMortgage/OtherAspect';
import ReninanceOptionTools from '../components/MortgageRate/RefinanceMortgage/ReninanceOptionTools';
import ShouldRefinance from '../components/MortgageRate/RefinanceMortgage/ShouldRefinance';
import WhatMortgageRefinance from '../components/MortgageRate/RefinanceMortgage/WhatMortgageRefinance';

const RefinanceMortgage = () => {
    return (
        <Layout className='container' >
            <BannerRefinanceMort />
            <ReninanceOptionTools />
            <KnowRefinance />
            <FAQ_refinance />
            <WhatMortgageRefinance />
            <HowRefaineQA />

            <ShouldRefinance />
            <HomeRate />
            <OtherAspect />
            <FindLowRate />

        </Layout>
    );
};

export default RefinanceMortgage;


