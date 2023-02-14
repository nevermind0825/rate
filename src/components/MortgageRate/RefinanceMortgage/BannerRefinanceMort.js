import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';

/*
const banner_QL = graphql`
    query refinance_banner {
        refinance_mtg: staticPagesJson {
        banner {
            title
            title_hint
            btn_url
        }
        }
    }
`;
*/
const banner_QL = graphql`
    query refinance_banner {
        refinance_mtg: staticPagesJson {
            banner {
                title
                title_hint
                btn_url
            }
        },
        banner_img: file(name: {eq: "refinance-mortgage-banner"}) {
            name
            childImageSharp {
            gatsbyImageData
            }
            relativePath
        }

    }
`;


const BannerRefinanceMort = () => {
    const {refinance_mtg:{banner},banner_img} = useStaticQuery(banner_QL);
    // console.log(banner_img.childImageSharp,"In Com Ql Dt");
    // console.log("oi");

    return (
        <section>
            <em>{banner.title_hint}</em>
            <h1>{banner.title}</h1>

            <div className='position-relative'>
                <div>
                    <StaticImage src='../../../assets/static-images/refinance-mortgage/refinance-mortgage-banner.jpg'  alt='' loading='eager' objectFit='cover' layout='constrained' />     
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
                            to={banner.btn_url}
                        >Get started</Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default BannerRefinanceMort;