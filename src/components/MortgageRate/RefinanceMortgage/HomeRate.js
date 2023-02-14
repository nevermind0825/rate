import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';



const hole_rate_QL = graphql`
    query hole_rate_QL {
        home_rate_data: staticPagesJson {
            faqList {
                home_rate {
                title
                rate_factors {
                    text
                    image
                }
                paragraphs {
                    urls {
                    url
                    name
                    }
                    text
                }
                id
                }
            }
        }


        refineMortge_imgs: allFile(
            filter: {name: {in: ["Group5", "Group7", "Group14", "Group25Copy", "Group111"]}}
        ) {
            nodes {
            childImageSharp {
                gatsbyImageData(
                    # width: 50
                    # placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
            relativePath
            name
            size
            }
        }

    }

`;


const HomeRate = () => {
    const {home_rate_data:{faqList:{home_rate}},refineMortge_imgs:{nodes:mortRatesImgs}} = useStaticQuery(hole_rate_QL);
    // console.log(mortRatesImgs);

    return (
        <section className='my-5' id={home_rate.title}>
            <div>
                <h3>{home_rate.title}</h3>
                {
                    home_rate.paragraphs.map((para,txtId) =>makeHyperLink(para.text,para.urls,txtId,"linkSt",{maxWidth:"100%"}))
                }
            </div>
            <div className='row g-4'>
                {
                    home_rate.rate_factors.map((factor,elIdx) => {
                        const img = mortRatesImgs.find(el => el.name === factor.image)?.childImageSharp;
                        return <div className='col-12 col-md-6' key={elIdx}>
                            <div className='d-flex align-items-center'>
                                <div className='d-flex justify-content-center me-3'>
                                    <div style={{width:"55px"}}>
                                    <GatsbyImage image={getImage(img?.gatsbyImageData)} alt="" />

                                    </div>
                                </div>
                                <div>
                                    <p className='m-0'>{factor.text}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    );
};

export default HomeRate;