import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { banner_static_container, nav_button, heading, subheading, link_cont, logoST_lg } from "./banner_static.module.css";
import * as styles from "./banner_static.module.css";
import logo from '../../images/dmv.jpg'



const bannerStatic_QL = graphql`
    query bannerStatic_QL {
        logo_lg: file(name: {eq: "mort-logo-sample"}) {
            name
            childImageSharp {
            gatsbyImageData 
            }
        }
        
    }
`;





const BannerStatic = () => {

    const { logo_lg } = useStaticQuery(bannerStatic_QL);

    return (
        <section className={styles.banner_static_container}>
            <div className={styles.header_container}>
                <div style={{ textAlign: "center" }}>
                    <img style={{ width: "90%" }} src={logo} />
                </div>
                <div style={{display:"flex",flexDirection:"column",overflow:"hidden"}}>
                    <h2 className={styles.heading}>Start your Homeownership Journey with Us!</h2>
                    <p className={styles.subheading}>Experts offer instant home loan approvals with no obligation. Speak with a home loan expert to receive your pre-approval letter <b>TODAY</b></p>
                </div>
            </div>
            <div className={styles.link_cont}>
                <Link className={styles.nav_button} to=''>PURCHASE</Link>
                <Link className={styles.nav_button} to=''>REFINANCE</Link>
                <Link className={styles.nav_button} to=''>INVEST</Link>
            </div>
        </section>
    );
};

export default BannerStatic;

