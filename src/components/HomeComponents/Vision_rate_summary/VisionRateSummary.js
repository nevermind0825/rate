import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import house from "../../../images/mix_images/house.jpg"
import agent from "../../../images/mix_images/agent.jpg"
import compressor from "../../../images/mix_images/compressor.jpg"
import GraphComponent from './GraphComponent';
import * as styles from "./vision_rate.module.css"

const visionmission_QL = graphql`
    query visionmission_QL {
        missionImg: file(name: {eq: "vision"}) {
            name
            childImageSharp {
            gatsbyImageData
            }
        }
        housingImg: file(name: {eq: "housing"}) {
            name
            childImageSharp {
            gatsbyImageData
            }
        }
        signImg: file(name: {eq: "sign_logo"}) {
            name
            childImageSharp {
            gatsbyImageData
            }
        }
    }
`;

const imageList = [
    house, agent, compressor
];

const saleList = [
    { top: "Down", mid: "Payment", bot: "ASSISTANCE" },
    { top: "Closing", mid: "Cost", bot: "ASSISTANCE" },
    { top: "Lower", mid: "Rates", bot: "AVAILABLE" },
]

const VisionRateSummary = () => {
    const { missionImg, housingImg, signImg } = useStaticQuery(visionmission_QL);
    // console.log(missionImg);

    const [position, setPosition] = React.useState(0);
    const [position2, setPosition2] = React.useState(0);

    React.useEffect(
        () => {
            const toggle = setInterval(() => {
                setPosition(position === imageList.length - 1 ? 0 : position + 1);
                setPosition2(position2 === saleList.length - 1 ? 0 : position2 + 1);
            }, 3000);

            return () => clearInterval(toggle);
        }
    )

    return (
        <section className={styles.main_cont}>
            <div className={styles.sub_cont}>
                <div className={styles.sliding_img}>
                    <h3 className='p-2 m-0' style={{ background: "#164b88" }}>Your Vision...</h3>
                    <img style={{ width: "100%", height: "auto", padding: 0, margin: 0 }} src={imageList[position]} alt="picture" >
                    </img>
                    <h3 className='p-2 m-0' style={{ background: "#164b88" }}>Our Mission...</h3>
                </div>
                <div className={styles.sliding_img}>
                    <h6 className='my-3 text-center'><u>Member Organizations</u></h6>
                    <div className={styles.sub_img}>
                        <GatsbyImage className={styles.images} image={getImage(signImg.childImageSharp)} alt='' />
                        {/* </div>
                        <div className='col-6 border rounded'> */}
                        <GatsbyImage className={styles.images} image={getImage(housingImg.childImageSharp)} alt='' />
                    </div>
                </div>
            </div>
            <div className={styles.graph_cont} >
                <GraphComponent />
            </div>
            <div className={styles.sub_cont2}>
                <p className='text-center rounded' style={{ border: "1px solid" }}><b>Why DMV Home Loan Experts?</b></p>
                <div className='text-center' style={{ color: "#164b88", padding: "0 0 1rem 0" }}>
                    <p className='mb-1'><b>We offer the following to suit your needs:</b></p>
                    <h1 style={{ fontFamily: "bold_thick" }} className='my-0'>{saleList[position2].top}</h1>
                    <h1 style={{ fontFamily: "bold_thick", paddingBottom: "0.2rem" }} className='my-0'>{saleList[position2].mid}</h1>
                    <h1 style={{ fontFamily: "outline_thick", fontWeight: "bolder" }} className='my-0'>{saleList[position2].bot}</h1>
                </div>
                <div>
                    <p className='text-center rounded' style={{ border: "1px solid" }}><b>Access our Mortgage Calculator</b></p>
                    <p className='text-center rounded' style={{ border: "1px solid" }}><b>Latest News on Mortgage</b></p>
                    <p className='text-center rounded' style={{ border: "1px solid" }}><b>Ask our Experts Today</b></p>
                </div>
            </div>
        </section>
    );
};

export default VisionRateSummary;