import React, {useState} from 'react';
import Chart from '../../Chart/Chart';

import {text_container, list_container, span_text, dynamic_text, hidescroll} from "../styles.module.css"

const paraList = [
    "Mortgage lending can be very complicated, making it difficult for homebuyers to appreciate the nuances of different loan types. With fixed rate loans, however, lenders have a straightforward loan product that’s easy for any borrower to understand.",
    "A fixed rate mortgage is a home loan with an interest rate that never changes. Regardless if you have a 15-, 30- or even 40-year fixed rate loan, your interest rate will always stay the same from year to year until your loan is repaid.",
    "The same holds true for your monthly fixed rate mortgage payment: You’ll pay the exact same amount over the entire life of the loan. That consistency stands in stark contrast to adjustable rate mortgages, which reassess interest rates on a regular basis after an initial fixed rate term.",
    "Conventional fixed rate mortgages are, by far, the most popular financing vehicles that consumers use to buy property. While fixed rate loans can offer various loan terms, these are the most common options available to homebuyers:"
]

const WhatFixedRate = () => {
    const [percentage, setPercentage] = useState(0);
    const [yearLabel, setYearLabel] = useState("");

    const handleMouseMoveInChart = (yearParam, percentParama) => {
        setYearLabel(yearParam);
        setPercentage(percentParama)
    }
    return (
        <section>
            <h2>What is a fixed rate mortgage?</h2>

            <div className={text_container}>
                {
                    paraList.map((para,idx)=><p key={idx}>{para}</p>)
                }
            </div>
            <ul className={list_container}>
                <li>30-year fixed rate mortgages</li>
                <li>15-year fixed rate mortgages</li>
            </ul>
            <div>
                <h3>30-year fixed rate mortgages</h3>
                <p className={text_container}>The 30-year mortgage is the go-to home loan for many mortgage providers — and for good reason. A conventional 30-year fixed rate mortgage combines affordability with predictability. Over the course of your 30-year home loan, you can rest easy knowing your monthly mortgage payments will never change. Extending a mortgage over such a long period of time helps keep your housing costs down, which is why 30-year fixed rate mortgages are so popular with homeowners.</p>
            </div>

            <div>
                <h1>Average 15-Year Fixed Mortgage Rate</h1>
                <span className={span_text}>UNITED STATES AVERAGE</span>

                <p className={dynamic_text}>{percentage}% - {yearLabel}</p>

                <div className={hidescroll} style={{overflowX: 'scroll'}}>
                    <Chart handleMouseMoveInChart={handleMouseMoveInChart} />
                </div>
            </div>

            <div>
                <h3>15-year fixed rate mortgages</h3>
                <p className={text_container}>Want to pay off your home loan quicker so you can own your house free and clear in less time than a 30-year mortgage? Your amortization schedule will be cut in half with a 15-year fixed rate mortgage. Your monthly payments will be higher compared with a 30-year mortgage due to the significantly shorter loan term. On the plus side, though, lenders often offer lower interest rates on 15-year mortgages, so you’ll pay less over the long run.</p>
            </div>
        </section>
    );
};

export default WhatFixedRate;