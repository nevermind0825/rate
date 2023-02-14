import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const bannerCash_QL = graphql`
    query bannerCash_QL {
        cashout_banner: file(name: {eq: "cashout-finance_banner"}) {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
    }
`;

const BannerCashOut = () => {
    const {cashout_banner} = useStaticQuery(bannerCash_QL);
    // console.log(cashout_banner.childImageSharp);
    return (
        <section className='my-4'>
            <p className='m-0'>Cash-out refinance</p>
            <h1>Get cash for your home equity.</h1>
            <div  className='position-relative'>
                <div>
                    <GatsbyImage image={getImage(cashout_banner.childImageSharp)} style={{borderRadius:"var(--border-radius-medium)"}} alt="cashout banner"></GatsbyImage>
                </div>
                <div  className='position-absolute  top-50 start-50 translate-middle'>
                    <div className='scaleHover'>
                        <Link 
                            className='bg-white px-5 py-2 fs-5 border-0 text-decoration-none' 
                            style={{
                                zIndex:999, 
                                translate:"scale(1.5)", 
                                borderRadius:"var(--border-radius-medium)",
                                color: "var(--color-primary-body-dark)"
                            }}
                            to={""}
                        >Get started</Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default BannerCashOut;