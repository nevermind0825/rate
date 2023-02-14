import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { LinkRegular } from '../../components/common/ButtonRegular';
import Layout from '../../components/Layout/layout';
import CalcFAQlist from '../../components/MortgageCalsCmp/mortgageCals/CalcFAQlist';
import CalculatorListCard from '../../components/MortgageCalsCmp/mortgageCals/CalculatorListCard';
import MortgageCalculator from '../../components/MortgageCalsCmp/mortgageCals/MortgageCalculator';
import OptionsTools from '../../components/MortgageCalsCmp/mortgageCals/OptionsTools';


const calcDisclaimer = [
    "*Consumers are advised to obtain a Loan Estimate. Rates are subject to change and are dependent on credit and underwriting criteria. Your actual rate, payment and costs could be higher.",
    "** Savings, if any, vary based on the consumer’s credit profile, interest rate availability, and other factors. Contact Guaranteed Rate for current rates. Restrictions apply.",
    "All information provided in this publication is for informational and educational purposes only, and in no way is any of the content contained herein to be construed as financial, investment, or legal advice or instruction. Guaranteed Rate, Inc. does not guarantee the quality, accuracy, completeness or timelines of the information in this publication. While efforts are made to verify the information provided, the information should not be assumed to be error-free. Some information in the publication may have been provided by third parties and has not necessarily been verified by Guaranteed Rate, Inc. Guaranteed Rate, Inc. its affiliates and subsidiaries do not assume any liability for the information contained herein, be it direct, indirect, consequential, special, or exemplary, or other damages whatsoever and howsoever caused, arising out of or in connection with the use of this publication or in reliance on the information, including any personal or pecuniary loss, whether the action is in contract, tort (including negligence) or other tortious action."
]

const mortgageCalc_QL = graphql`
    query mortgageCalc_QL {
        best_img: file(name: {eq: "the-best"}) {
            size
            relativeDirectory
            name
            childImageSharp {
                gatsbyImageData
            }
        }
    }

`;


const MortgageCalculators = () => {
    const {best_img} = useStaticQuery(mortgageCalc_QL);
    console.log(best_img);

    return (
        <Layout className='container'>
            <MortgageCalculator />
            <OptionsTools />
            <div>
                <h1 className='text-center fw-bolder my-5'>Get personalized rate estimates in as little as three minutes.</h1>
                <div className='text-center'>
                    <LinkRegular url='' className='text-white bg-danger' label={"Apply now"} />
                </div>
                <div className='text-center my-4' >
                    <GatsbyImage image={getImage(best_img.childImageSharp)} alt="" />
                </div>
            </div>
            <CalcFAQlist />
            <CalculatorListCard />
            <div className='my-5'>
                {
                    calcDisclaimer.map((disclaimer,idx) => <small className='my-2 d-block' key={idx}>{disclaimer}</small>)
                }
            </div>
            <hr className='horizontal' />
        </Layout>
    );
};

export default MortgageCalculators;