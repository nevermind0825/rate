import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { ActiveServiceFlagIcon, BeforeBuyTipsIcon, BuyHomeTipIcon, CreditCardIcon, FirstTimeBuyerTipIcon, HomeOwnerCashIcon, HomeValueIcon, MortgageProcessIcon } from '../../../utils/icons/HomePageIcons';
import {digital_personel_img} from "../../index.module.css";



const topics = [
    {icon: "home_window", title:"Buy a home tips", url:"/resources/home-buying-advice"},
    {icon: "home_rotet", title:"Refinance tips",url:"/resources/home-refinancing-tips"},
    {icon: "mortgage_process", title:"Mortgage process",url:"/resources/mortgage-process-resources"},
    {icon: "Group23", title:"Before you buy tips",url:"/resources/top-things-not-to-do-before-buying-a-home"},
    {icon: "Homevalue1", title:"Home value",url:"/home-valuation"},
    {icon: "flag_us", title:"Military options",url:"/va-loans"},
    {icon: "Credit_report", title:"Less-than-perfect credit",url:"/resources/buying-a-home-with-bad-credit"},
    {icon: "home_man", title:"First-time homebuyer tips",url:"/resources/first-home-buyers"},
]


const topic_QL = graphql`
    query topic_QL {
        topic_img: file(name: {eq: "popular-topic"}) {
            name
            childImageSharp {
            gatsbyImageData
            }
        }

        topic_icons: allFile(filter: {name: {in: ["home_window","home_rotet","mortgage_process","Group23","Homevalue1","flag_us","Credit_report","home_man"]}}) {
            nodes {
            childImageSharp {
                gatsbyImageData
            }
            name
            }
        }

    }

`;


const Topics = () => {
    const {topic_img,topic_icons:{nodes:topic_iconsList}} = useStaticQuery(topic_QL);
    // console.log(topic_iconsList);

    return (
        <section className="container">
            <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>Popular topics</h2>
            <div className='row  g-4  align-items-center'>
                <div className='col-12 col-lg-6 '>
                    <div className='row g-2 g-md-4'>
                        {
                            topics.map((topic,idx) => {
                                const img = topic_iconsList.find(iconEl => iconEl.name === topic.icon)?.childImageSharp;
                                return <div className='col-6' key={idx}>
                                    <Link className='text-decoration-none text-dark' to={topic.url}>
                                        <div className='topic d-md-flex align-items-center h-100 p-1 p-sm-2 py-lg-4'>
                                            <div className='text-center'>
                                                <GatsbyImage image={getImage(img)} alt="" />
                                            </div>
                                            <h4 className='ms-2 fs-5 text-center text-md-left'>{topic.title}</h4>
                                        </div>
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className='col-12 col-lg-6 order-sm-first order-lg-last '>
                    <div className={digital_personel_img}>
                        <GatsbyImage image={getImage(topic_img.childImageSharp)} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Topics;