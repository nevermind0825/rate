import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { LinkRegular } from '../common/ButtonRegular';
import {cachet_title,get_btn} from "./powerbid.module.css";


const freeGuid_powerBD_QL = graphql`
    query freeGuid_powerBD_QL {
        banner_img: file(name: {eq: "powerbid_free_guid"}) {
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


const FreeGuidBanner = () => {
    const {banner_img,powerBanner_logo} = useStaticQuery(freeGuid_powerBD_QL);
    return (
        <section className='container row gx-4 mx-auto my-5'>
            <div className='col-12 col-md-6'>
                <h1 className={cachet_title}>Get your free guide</h1>
                <p className='fs-5'>We have created an informative guide that you can print out that helps first time home buyers throughout the home buying process.</p>
                <div className='position-relative d-flex  justify-content-center flex-column'>
                    <LinkRegular label={"Get your copy"} className={get_btn} url='' />
                    <div className='text-center'>
                        <GatsbyImage image={getImage(powerBanner_logo.childImageSharp)} alt="" />
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <GatsbyImage image={getImage(banner_img.childImageSharp)} alt="" />
            </div>
        </section>
    );
};

export default FreeGuidBanner;