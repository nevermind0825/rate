import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout/layout';
import CompareCurrentRate from '../components/MortgageRate/CompareCurrentRate';
import MortgageRateDiscalimar from '../components/MortgageRate/MortgageRateDiscalimar';
import RateQuestionsAns from '../components/MortgageRate/RateQuestionsAns/RateQuestionsAns';
import RecentMortgageArticles from '../components/MortgageRate/RecentMortgageArticles/RecentMortgageArticles';
import TableOfContents from '../components/MortgageRate/TableOfContents/TableOfContents';


const mortgageRate_QL = graphql`
    query mortgageRate_QL {
        bestBanner:file(name: {eq: "best_banner"}) {
            name
            relativePath
            childImageSharp {
            gatsbyImageData
            }
        }
    }
`;

const MortgageRates = () => {
   const {bestBanner} = useStaticQuery(mortgageRate_QL);
    // console.log(bestBanner);
    return (
        <Layout className='container'>
            <CompareCurrentRate />
            <div className='mb-5 pb-3'>
                <GatsbyImage image={getImage(bestBanner.childImageSharp)} /> 
            </div>
            <TableOfContents />
            <RateQuestionsAns />
            <MortgageRateDiscalimar />
            <hr className='horizontal' />
            <RecentMortgageArticles />
            <hr className='horizontal' />
        </Layout> 
    );
};

export default MortgageRates;

