import React from 'react';
import Layout from '../../components/Layout/layout';

import AdjustableMortage from '../../components/homeLoans/AdjustableMortage/AdjustableMortage';
import FaqList from '../../components/homeLoans/AdjustableMortage/FaqList';
import WhatIsAdjustableRate from '../../components/homeLoans/AdjustableMortage/WhatIsAdjustableRate';
import HowArmWorks from '../../components/homeLoans/AdjustableMortage/HowArmWorks';
import TypesOfAdjustable from '../../components/homeLoans/AdjustableMortage/TypesOfAdjustableRate';
import UnderstandingMargin from '../../components/homeLoans/AdjustableMortage/UnderstandingMargin';
import ArmsVsFixedRate from '../../components/homeLoans/AdjustableMortage/ArmsVsFixedRate';
import ConsiderARM from '../../components/homeLoans/AdjustableMortage/ConsiderARM';
import ConsiderFixedRate from '../../components/homeLoans/AdjustableMortage/ConsiderFixedRate';
import ArmProsCons from '../../components/homeLoans/AdjustableMortage/ArmProsCons';
import BestMortageRate from '../../components/homeLoans/AdjustableMortage/BestMortageRate';
import LoanOfficers from '../../components/homeLoans/AdjustableMortage/LoanOfficers';
import FixedMortageVsOther from '../../components/homeLoans/AdjustableMortage/FixedMortageVsOther';
import SmallText from '../../components/homeLoans/AdjustableMortage/SmallText';


const AdjustableRateMortgageArm = () => {
    return (
        <Layout className='container'>
            <AdjustableMortage />

            <FaqList />

            <WhatIsAdjustableRate />

            <HowArmWorks />

            <TypesOfAdjustable />

            <UnderstandingMargin />

            <ArmsVsFixedRate />
            
            <ConsiderARM />

            <ConsiderFixedRate />

            <ArmProsCons />

            <BestMortageRate />

            <LoanOfficers />

            <FixedMortageVsOther />

            <SmallText />

            <hr className='horizontal' />

        </Layout>
    );
};

export default AdjustableRateMortgageArm;