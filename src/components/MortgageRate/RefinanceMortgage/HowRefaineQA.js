import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';



const how_refine_QL = graphql`
    query how_refine_QL {
        How_refine: staticPagesJson {
            faqList {
                How_refinance {
                    id
                    title
                    paragraphs {
                        urls {
                        url
                        name
                        }
                        text
                    }
                    conclusion {
                        urls {
                        url
                        name
                        }
                        text
                    }
                    asking_list {
                        urls {
                        url
                        name
                        }
                        text
                        image
                    }
                }
            }
        }

        asking_imgList: allFile(
            filter: {name: {in: ["Credit_report", "Group13", "Group16", "Group10", "Group18", "Group8"]}}
        ) {
            nodes {
            childImageSharp {
                gatsbyImageData(
                    width: 40
                    placeholder: BLURRED
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


const HowRefaineQA = () => {
    const {How_refine:{faqList:{How_refinance}},asking_imgList:{nodes:askingImgs}} = useStaticQuery(how_refine_QL);
    console.log(How_refinance,askingImgs);
    return (
        <section id={How_refinance.title}>

            <h2 className='my-3'>{How_refinance.title}</h2>
            <div>
                {
                    How_refinance.paragraphs.map((para,idx) =>makeHyperLink(para.text,para.urls,idx,"linkSt",{maxWidth:"100%"}))
                }
            </div>
            <div className='row g-4'>
                {
                    How_refinance.asking_list.map((para,para_idx) => {
                        const imgUrl = askingImgs.find(el => el.name === para.image)?.childImageSharp;

                        return <div className='col-12 col-md-6' key={`pa_${para_idx}`}>
                            <div className='d-flex align-items-center'>
                                <div className='me-4'>
                                    <GatsbyImage image={getImage(imgUrl?.gatsbyImageData)} alt="" />
                                </div>
                                
                                    {makeHyperLink(para.text,para.urls,para_idx,"linkSt",{display:"block",margin:"0"})}
                                
                            </div>
                        </div>
                    })
                }
            </div> 
            <div className='mt-4'>
                {
                    How_refinance.conclusion.map((para,idx) =>makeHyperLink(para.text,para.urls,idx,"linkSt",{maxWidth:"100%"}))
                }
            </div>
             
        </section>
    );
};

export default HowRefaineQA;