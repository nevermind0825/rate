import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {digital_personel_img} from "../index.module.css";


const digitalPersonData = {
    title: "Digital, yet personal",
    sub_title:"A mortgage experience made for you",
    info:"We literally invented the Digital Mortgage. But we also offer one-on-one assistance at more than 500 branches across the U.S.​ Whether you prefer to stay at home or meet in person, we are here to tailor your mortgage experience to fit your needs.",
    btn:"Find a branch near you"
}

const digitalPersonel_QL = graphql`
    query digitalPersonel_QL {
        digitalPersonelImg: file(name: {eq: "digital_personel"}) {
            name
            childImageSharp {
            gatsbyImageData
            }
        }
    }

`;

const DigitalPersonal = () => {
    const {digitalPersonelImg} = useStaticQuery(digitalPersonel_QL);
    // console.log(digitalPersonelImg);

    return (
        <section className='container my-5'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <h2 className='fs-1 my-4'>{digitalPersonData.title}</h2>
                    <h4 className='fs-3 my-3'>{digitalPersonData.sub_title}</h4>
                    <p className='py-3 fs-5 lh-sm'>{digitalPersonData.info}</p>
                    <div className='banner_buttons my-5' style={{display:"block"}}>
                        <button className='refinancing_btn'>{digitalPersonData.btn}</button>
                    </div>
                </div>
                <div className='col-12 col-md-6 order-first order-md-last' >
                    <div className={digital_personel_img}>
                        <GatsbyImage image={getImage(digitalPersonelImg.childImageSharp)} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalPersonal;