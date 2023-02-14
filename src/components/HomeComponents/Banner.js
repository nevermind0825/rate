import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import BannerSlider from './BannerSlider';


const bannerData = {
    title: "Fast pre-approval is the best pre-approval",
    info:"Guaranteed Rate offers a digital pre-approval letter with no obligation. Speak with a loan officer to receive your letter.",
    purchase_btn: "I'm purchasing",
    refinancing_btn: "I'm refinancing",
    report_line:"*Scotsman Guide 2021 Top Dollar Volume Report"
}


const Banner = () => {
    const bannerDataQL = useStaticQuery(graphql`
        query homeBanner {
            banner_img: file(relativePath: {eq: "Home_img/banner_img.png"}) {
                relativePath
                id
                name
                childImageSharp {
                  id
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
        }
    `);
    
    
    return (
        <section  className="container my-4 mb-5">
            <div className="row g-5">
                <div className="col-12 col-sm-12 col-lg-6 ">
                    <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                        <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>{bannerData.title}</h2>
                        <p style={{fontSize:"1.5rem", lineHeight:"2rem"}}>{bannerData.info}</p>
                        <div className='container'>
                            <div className='banner_buttons row g-2 g-md-3 '>
                                <div className='p-md-3 col col-12 col-md-6'>
                                    <button className='purchase_btn w-100'>{bannerData.purchase_btn}</button>
                                </div>
                                <div className='p-md-3 col col-12 col-md-6'>
                                    <button className='refinancing_btn w-100'>{bannerData.refinancing_btn}</button>
                                </div>
                            </div>
                        </div>
                        <p className='pt-3 text-start'>{bannerData.report_line}</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6">
                    <BannerSlider />
                    {/* <GatsbyImage image={getImage(bannerDataQL.banner_img.childImageSharp)} alt="Banner"></GatsbyImage> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;