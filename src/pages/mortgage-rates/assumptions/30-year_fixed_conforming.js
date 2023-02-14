import React, {useState} from 'react';
import Layout from '../../../components/Layout/layout';

import Advantage15Year from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/Advantage15Year';
import Chart from '../../../components/Chart/Chart';
import SimilarRenderer from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/WhatFixedRate15';
import AmortizationChart from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/AmortizationChart';
import Great30Rate from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/Great30Rate';
import KnowMore from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/KnowMore';
import OtherMortgVs30Year from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/OtherMortgVs30Year' ;
import Disclosure30 from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/Disclosure30';
import ContentList from '../../../components/resourcesCmp/ContentList/ContentList';
import {span_text, hidescroll} from "./index.module.css";

import { whatAfixedRate30, fixedRate30YearMortages,disadvantage30YearData, diifIntRateAPR, amortizationSche, diifBtwFixedAndAdjustable, advantage30YearData } from '../../../components/MortgageRates/Assumption/fifteen_year_fixedConf/SimilarLists';


const contentData = [
    {
        id: "whatAfixedRate30",
        topic: "What is a 30-year fixed-rate mortgage?"
    },

    {
        id: "30YearFixedRate",
        topic: "30-year fixed-rate mortgages and interest"
    },

    {
        id: "diffBtwIntAndAPR",
        topic: "What is the difference between interest rate and APR?"
    },

    {
        id: "amortizationSche",
        topic: "What is an amortization schedule?"
    },

    {
        id: "fixedRateAndAjustablle",
        topic: "What’s the difference between fixed-rate and adjustable rate mortgages?"
    },


    {
        id: "best30YearRate",
        topic: "How do I get the best 30 year rate?"
    },

    {
        id: "advantage30YearData",
        topic: "Benefits of 30-year fixed-rate mortgages"
    },

    {
        id: "disaddOf30yearFixed",
        topic: "Disadvantages of 30-year fixed-rate mortgage"
    },

    {
        id: "guaranteed30RateMortage",
        topic: "Guaranteed Rate’s 30-Year Mortgage"
    }
]


const ThirtyYearFixedConforming = () => {
    const [percentage, setPercentage] = useState(0);
    const [yearLabel, setYearLabel] = useState("");

    const handleMouseMoveInChart = (yearParam, percentParama) => {
        setYearLabel(yearParam);
        setPercentage(percentParama)
    }

    return (
        <Layout className='container' >
            <h1>30-Year Fixed Rate Mortgage</h1>
            <span className={span_text}>UNITED STATES AVERAGE</span>

            <p>{percentage}% - {yearLabel}</p>
            <div className={hidescroll} style={{overflowX: 'scroll'}}>
                <Chart handleMouseMoveInChart={handleMouseMoveInChart} />
            </div>

            <div>
                <ContentList title={"Table of contents"} data={contentData} />

                <SimilarRenderer data={whatAfixedRate30} idString={"whatAfixedRate30"} />

                <SimilarRenderer data={fixedRate30YearMortages} idString={"30YearFixedRate"} />

                <SimilarRenderer data={diifIntRateAPR} idString={"diffBtwIntAndAPR"} />

                <SimilarRenderer data={amortizationSche} idString={"amortizationSche"} />

                <AmortizationChart />

                <SimilarRenderer data={diifBtwFixedAndAdjustable} idString={"fixedRateAndAjustablle"} />

                <Great30Rate idString={"Great30Rate"} />

                <Advantage15Year adDis_vantage={advantage30YearData} idString={"advantage30YearData"} />

                <Advantage15Year adDis_vantage={disadvantage30YearData} idString={"disaddOf30yearFixed"} />

                <KnowMore />

                <OtherMortgVs30Year />

                <Disclosure30 />

                <hr className='horizontal' />
            </div>
        </Layout>
    );
};

export default ThirtyYearFixedConforming;