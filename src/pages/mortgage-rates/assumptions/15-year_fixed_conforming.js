import React, {useState} from 'react';
import Layout from '../../../components/Layout/layout';
import Advantage15Year from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/Advantage15Year';
import Disclosure15 from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/Disclosure15';
import ShortInfo from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/ShortInfo';
import { advantage15YearData, average15yearRate, differenceFIxed_arm, disadvantage15YearData, howFindLow15Rate, mortgage_15vs30, refinancing_vs_purchase, rightFixed15, whatAfixedRate15, whatIsGood15Fixed } from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/SimilarLists';
import SimilarRenderer from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/WhatFixedRate15';
import Chart from '../../../components/Chart/Chart';
import ContentList from '../../../components/resourcesCmp/ContentList/ContentList';

import {span_text, hidescroll} from "./index.module.css";


const contentData = [
    {
        id: "whatAfixedRate15",
        topic: "What is a 15-year fixed rate mortgage?"
    },

    {
        id: "whatIsGood15Fixed",
        topic: "What is a good 15-year fixed mortgage rate?"
    },

    {
        id: "average15yearRate",
        topic: "Average 15-year mortgage rates since 2018"
    },

    {
        id: "howFindLow15Rate",
        topic: "How to find the lowest 15-year mortgage rate"
    },

    {
        id: "advantage15YearData",
        topic: "Advantages of 15-year mortgages"
    },

    {
        id: "disadvantage15YearData",
        topic: "Disadvantages of 15-year mortgages"
    },

    {
        id: "mortgage_15vs30",
        topic: "15-year mortgages vs. 30-year mortgages"
    },

    {
        id: "differenceFIxed_arm",
        topic: "What is the difference between a fixed interest rates mortgage and ARM?"
    },

    {
        id: "refinancing_vs_purchase",
        topic: "15-year refinancing vs. purchasing rates"
    },

    {
        id: "rightFixed15",
        topic: "Is a 15-year fixed rate mortgage right for you?"
    },

    {
        id: "rightFixed15",
        topic: "Guaranteed Rate’s 15-Year Mortgage"
    }
]

const YearFixedConforming = () => {
    const [percentage, setPercentage] = useState(0);
    const [yearLabel, setYearLabel] = useState("");

    const handleMouseMoveInChart = (yearParam, percentParama) => {
        setYearLabel(yearParam);
        setPercentage(percentParama)
    }

    return (
        <Layout className='container'>
            
            <h1>15-Year Fixed Rate Mortgage</h1>
            <span className={span_text}>UNITED STATES AVERAGE</span>

            <p>{percentage}% - {yearLabel}</p>
            <div className={hidescroll} style={{overflowX: 'scroll'}}>
                <Chart handleMouseMoveInChart={handleMouseMoveInChart} />
            </div>
            <div>
                <ContentList title={"Table of contents"} data={contentData} />
                <SimilarRenderer data={whatAfixedRate15} idString={"whatAfixedRate15"} />
                <SimilarRenderer data={whatIsGood15Fixed} idString={"whatIsGood15Fixed"} />
                <SimilarRenderer data={average15yearRate} idString={"average15yearRate"} />
                <SimilarRenderer data={howFindLow15Rate} idString={"howFindLow15Rate"} />
                <Advantage15Year adDis_vantage={advantage15YearData} idString={"advantage15YearData"} />
                <Advantage15Year adDis_vantage={disadvantage15YearData} idString={"disadvantage15YearData"} />
                <SimilarRenderer data={mortgage_15vs30} idString={"mortgage_15vs30"} />
                <SimilarRenderer data={differenceFIxed_arm} idString={"differenceFIxed_arm"} />
                <SimilarRenderer data={refinancing_vs_purchase} idString="refinancing_vs_purchase" />
                <SimilarRenderer data={rightFixed15} idString={"rightFixed15"} />
                <ShortInfo />
                <Disclosure15/>
                <hr className='horizontal' />
            </div>
        </Layout>
    );
};

export default YearFixedConforming;