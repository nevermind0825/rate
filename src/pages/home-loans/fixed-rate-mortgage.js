import React from 'react';
import DrawbackFixRate from '../../components/homeLoans/FixedRateMortageCom/DrawbackFixRate';
import FaqList from '../../components/homeLoans/FixedRateMortageCom/FaqList';
import FixedRate from '../../components/homeLoans/FixedRateMortageCom/FixedRate';
import FixedVsAdjustCom from '../../components/homeLoans/FixedRateMortageCom/FixedVsAdjustCom';
import HowFixedLoanWork from '../../components/homeLoans/FixedRateMortageCom/HowFixedLoanWork';
import HowRightFix from '../../components/homeLoans/FixedRateMortageCom/HowRightFix';
import OptionFixedRate from '../../components/homeLoans/FixedRateMortageCom/OptionFixedRate';
import WhatFixedRate from '../../components/homeLoans/FixedRateMortageCom/WhatFixedRate';
import WhoConsider from '../../components/homeLoans/FixedRateMortageCom/WhoConsider';
import Layout from '../../components/Layout/layout';

const FixedRateMortgage = () => {
    return (
        <Layout className='container' >
            <FixedRate />
            <FaqList />
            <WhatFixedRate />
            <HowFixedLoanWork />
            <FixedVsAdjustCom />
            <DrawbackFixRate />
            <WhoConsider />
            <OptionFixedRate />
            <HowRightFix />
            <hr className='horizontal' />
        </Layout>
    );
};

export default FixedRateMortgage;