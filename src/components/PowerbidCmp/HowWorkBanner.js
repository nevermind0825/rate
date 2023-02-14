import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { LinkRegular } from '../common/ButtonRegular';
import {cachet_title,get_btn} from "./powerbid.module.css";

const howWork_powerBD_QL = graphql`
    query howWork_powerBD_QL {
        banner_img: file(name: {eq: "powerbid_how_works"}) {
            name
            childImageSharp {
                gatsbyImageData
            }
        }
        powerBanner_logo: file(name: {eq: "powerbid_logo"}) {
            id
            name
            childImageSharp {
                gatsbyImageData(width: 200)
            }
            size
        }

  }`;

const HowWorkBanner = () => {
    const {banner_img,powerBanner_logo} = useStaticQuery(howWork_powerBD_QL);
    // console.log(banner_img);
    return (
        <section className='container row gx-4 mx-auto my-5'>
            <div className='col-12 col-md-6'>
                <GatsbyImage image={getImage(banner_img.childImageSharp)} alt="" />
            </div>
            <div className='col-12 col-md-6'>
                <h1 className={cachet_title}>How does it work?</h1>
                <p><strong className='fw-bold fs-3'>We work fast to verify your credit history, income and assets.</strong></p>
                <p className='fs-5'>Our process enables homebuyers to enter bidding wars against deep-pocketed cash buyers with confidence.</p>
                <div className='position-relative d-flex  justify-content-center flex-column'>
                    <LinkRegular label={"Get Started"} className={get_btn} url='' />
                    <div className='text-center'>
                        <GatsbyImage image={getImage(powerBanner_logo.childImageSharp)} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWorkBanner;