import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import ButtonRegular, { LinkRegular } from '../../common/ButtonRegular';
import RecentMortgageArticle from './RecentMortgageArticle';

const RecentMortgageArticles = () => {

    const recentArticle = useStaticQuery(graphql`
        query MortgageRecentArticleh {
            article_img: file(relativePath: {eq: "mortgage_rate/jolly_session.jpg"}) {
                relativePath
                id
                name
                childImageSharp {
                    id
                    # gatsbyImageData(layout: CONSTRAINED)
                    gatsbyImageData
                }
            }
            
        }
    `)
    
    // console.log(recentArticle);
    
    const recentMortgageArticles = [
        {
            // img: "../../../images/mortgage_rate/loan_confirm.jpg",
            img: "mortgage_rate/loan_confirm.jpg",
            title:"FHFA announces increased conforming loan limits for 2023",
            short_para:"Announcing FHFA’s new conforming loan limits for 2023, allowing you to get more home without getting a jumbo loan."
        },
        {
            img:  "mortgage_rate/region home.jpg",
            title:"Three out of four regions show pending home sales decline in October",
            short_para:"In October, pending home sales were down 4.6%, the fifth consecutive month of declines."
        },
        {
            img:  "mortgage_rate/jolly_session.jpg",
            title:"What’s on our wish list for a jolly season?",
            short_para:"What’s on our wish list? We’re hoping for all the things that could help us see more people achieve their dreams of homeownership. All we want this holiday season is…"
        },
    ]

    
    return (
        <div className='my-5'>
            <h2 className='text-center my-4'>Recent mortgage rates articles</h2>
            <div className='container'>
                <div className='row g-2'>
                    {
                        recentMortgageArticles.map((recentMortgageArticle,idx) =><RecentMortgageArticle recentArticle={recentArticle} recentMortgageArticle={recentMortgageArticle} key={idx} />)
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center my-5 pt-3'>
                <LinkRegular className='text-dark border-dark' url='' label={"View all mortgage news articles"} ></LinkRegular>
            </div>
        </div>
    );
};

export default RecentMortgageArticles;