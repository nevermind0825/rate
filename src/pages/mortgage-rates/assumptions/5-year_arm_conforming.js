import React from 'react';
import Layout from '../../../components/Layout/layout';
import ContentList from '../../../components/resourcesCmp/ContentList/ContentList';
import WhatIsFiveYear from '../../../components/MortgageRates/Assumption/five_year_rate/WhatIsFiveYear';
import AdjustableLoan from '../../../components/MortgageRates/Assumption/five_year_rate/AdjustableLoan';
import DeeperDive from '../../../components/MortgageRates/Assumption/five_year_rate/DeeperDive';
import WhatIs51ARM from '../../../components/MortgageRates/Assumption/five_year_rate/WhatIs51ARM';
import FivevsSevenRate from '../../../components/MortgageRates/Assumption/five_year_rate/FivevsSevenRate';
import Advantage15Year from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/Advantage15Year';
import FiveARMVsThirtyRate from '../../../components/MortgageRates/Assumption/five_year_rate/FiveARMVsThirtyRate';
import FiveYearARMVsFifteen from '../../../components/MortgageRates/Assumption/five_year_rate/FiveYearARMVsFifteen';
import WhenFixedRateMakeSense from '../../../components/MortgageRates/Assumption/five_year_rate/FixedRateMakeSense';
import FindFiveYearMort from '../../../components/MortgageRates/Assumption/five_year_rate/FindFiveYearMort';
import KnowMoreFive from '../../../components/MortgageRates/Assumption/five_year_rate/KnowMore';
import FiveYearMortVsOther from '../../../components/MortgageRates/Assumption/five_year_rate/FiveYearMortVsOther';
import SmallText from '../../../components/MortgageRates/Assumption/five_year_rate/SmallText';
import GenDisClosure from '../../../components/MortgageRates/Assumption/five_year_rate/GenDisClosure';

import {fiveARMvsTenARM} from "../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/SimilarLists"

const contentData = [
    {
        id: "What5/6ARM",
        topic: "What is a 5/6ARM?"
    },

    {
        id: "rateloansgeneral",
        topic: "Adjustable rate loans: A general synopsis"
    },

    {
        id: "5/6depperdive",
        topic: "The 5/6 ARM: A deeper dive"
    },

    {
        id: "5/1ARM",
        topic: "What is a 5/1 ARM?"
    },

    {
        id: "5Yearvs7yearrates",
        topic: "5-year ARM rates vs. 7-year ARM rates"
    },

    {
        id: "5yearRatevs10rate",
        topic: "5-year ARM rates vs. 10-year ARM rates"
    },

    {
        id: "5yearvs30year",
        topic: "5-year ARM rates vs. 30-year fixed mortgage rates"
    },

    {
        id: "5yearratevs15year",
        topic: "5-year ARM rates vs. 15-year fixed mortgage rates"
    },

    {
        id: "5yearmakeSense",
        topic: "When a 5-year ARM makes sense"
    },

    {
        id: "fixedmakesense",
        topic: "When a fixed rate mortgage makes sense"
    }, 

    {
        id: "5/6ARMmath",
        topic: "The math on a 5/6 ARM loan"
    }, 

    {
        id: "findBest5yearrate",
        topic: "How to find the best 5-year mortgage rates"
    }

]

const FiveyearArmConforming = () => {
    return (
        <Layout className='container' >
            <h1 style={{fontWeight: "bold"}}>5-Year ARM Rates Today</h1>

            <ContentList title={"5-Year ARM Rates FAQ"} data={contentData} />

            <WhatIsFiveYear idString={"What5/6ARM"} />

            <AdjustableLoan idString={"rateloansgeneral"} />

            <DeeperDive idString={"5/6depperdive"} />

            <WhatIs51ARM idString={"5/1ARM"} />

            <FivevsSevenRate idString={"5Yearvs7yearrates"} />

            <Advantage15Year adDis_vantage={fiveARMvsTenARM} idString={"5yearRatevs10rate"} />

            <FiveARMVsThirtyRate idString={"5yearvs30year"} />

            <FiveYearARMVsFifteen idString={"5yearratevs15year"} />

            <WhenFixedRateMakeSense idString={"fixedmakesense"} />

            <FindFiveYearMort idString={"findBest5yearrate"} />

            <KnowMoreFive />

            <FiveYearMortVsOther />

            <SmallText />

            <GenDisClosure />

            <hr className='horizontal' />

        </Layout>
    );
};

export default FiveyearArmConforming;