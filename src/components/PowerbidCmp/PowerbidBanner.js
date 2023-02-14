import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import {powerbid_banner_img,powerbid_banner,powerbid_banner_img_wrapper,powerbid_banner_btn,powerbid_banner_btn_wrap,afford_text} from "./powerbid.module.css";
import {BsArrowRight} from "react-icons/bs";
import { ReactIcon } from '../common/ButtonRegular';

const powerbid_QL = graphql`
    query powerbid_QL {
        powerBanner: file(name: {eq: "powerbid_banner"}) {
            id
            name
            childImageSharp {
                gatsbyImageData
            }
            size
        }
        powerBanner_logo: file(name: {eq: "powerbid_logo"}) {
            id
            name
            childImageSharp {
                gatsbyImageData(width: 200)
            }
            size
        }
    }
`;

const PowerbidBanner = () => {
    const {powerBanner,powerBanner_logo} = useStaticQuery(powerbid_QL);
    // console.log(powerBanner);
    return (
        <section className='container'>
            <div className={powerbid_banner}>
                <div className={powerbid_banner_img_wrapper} style={{gridArea: "1/1",}}>
                    <GatsbyImage className={powerbid_banner_img} style={{gridArea:"1/1", }}  image={getImage(powerBanner.childImageSharp.gatsbyImageData)} />
                </div>
                <div style={{gridArea: "1/1", position:"relative",display:"grid",placeItems:"start"}}>
                    <div className='col-12 col-lg-5'>
                        <GatsbyImage  style={{marginTop:"2rem"}} image={getImage(powerBanner_logo.childImageSharp.gatsbyImageData)} />
                        <h1 className=' my-3'>Put our power behind your bid.</h1>
                        <p style={{color:"#25282a", fontSize:"20px"}}>Turn yourself into a power buyer that can compete with cash offers and bid, buy, and close fast.</p>
                        <div className={`${powerbid_banner_btn_wrap} position-relative`} style={{minHeight:"60px"}}>
                            <Link 
                                className={`${powerbid_banner_btn} scaleHover fw-large text-decoration-none d-block text-white px-5 py-3 bg-danger position-absolute text-center`} 
                                to='' 
                            >Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className={`${afford_text} py-4 text-center`}>
                    Want to see what you can afford first? 
                    <Link 
                        className='text-decoration-none fw-bolder' 
                        to='/mortgage-calculators'
                    > Try our mortgage calculator <ReactIcon><BsArrowRight color='#136a87'  /> </ReactIcon> 
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default PowerbidBanner;