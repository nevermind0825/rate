import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import ButtonRegular from '../common/ButtonRegular';

const buyingHouse_QL = graphql`
    query buyingHouse_QL {
        banner_img: file(name: {eq: "PurchaseHeroPuppy"}) {
            name
            relativePath
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;


const BannerByingHouse = () => {
    const {banner_img} = useStaticQuery(buyingHouse_QL);
    // console.log(banner_img);
    return (
        <section className='my-4'>
             <h1>Purchase your dream home</h1>
             <div  className='position-relative'>
                <GatsbyImage image={getImage(banner_img.childImageSharp)} />
                <div className='position-absolute  top-50 start-50 translate-middle'>
                    <ButtonRegular 
                        label={"Get started"} 
                        className='bg-white px-4 py-2 fs-5 border-0' 
                        style={{zIndex:999, translate:"scale(1.5)"}}
                    />
                    
                </div>
             </div>
        </section>
    );
};

export default BannerByingHouse;