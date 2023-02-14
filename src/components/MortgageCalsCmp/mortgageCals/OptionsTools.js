import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import {option_tool} from "./mortgage_cacl.module.css";


const OptionsAndPricingTools = {
    title:"Homebuying options and pricing tools",
    pricingTools:[
        {
            image:"CalculatorIconBold",
            title:"Mortgage application",
            url:""
        },
        {
            image:"RatesIconBold",
            title:"Today's rates",
            url:""
        },
        {
            image:"DesktopIcon_newv2",
            title:"Loan options",
            url:""
        },
    ],
    conclusion:[
        "To get a better sense of the total costs of buying a home, use our home mortgage calculator and figure out what your future mortgage payments will be.* Our home loan calculator accounts for all the essential conditions that will affect mortgage costs including loan type, loan amount, down payment, interest rate and more. Note: The calculator only provides preliminary estimates based on information you enter, and such factors as current interest rates, credit score and a debt-to-income ratio (DTI) above 43% may yield different pricing results."
    ],
}


const optionTools_QL = graphql`
    query optionTools_QL {
        tools_imgList : allFile(filter: {name: {in: ["CalculatorIconBold","RatesIconBold","DesktopIcon_newv2"]}}) {
            nodes {
                name
                relativePath
                relativeDirectory
                size
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
`;

const OptionsTools = () => {
    const {tools_imgList:{nodes:tools_imgs}} = useStaticQuery(optionTools_QL);
    // console.log(tools_imgs);
    return (
        <section>
            <h1 className='text-center fw-bolder my-5'>{OptionsAndPricingTools.title}</h1>
            <div className='row g-3'>
                {
                    OptionsAndPricingTools.pricingTools.map((tool,idx)=>{
                        const img = tools_imgs.find(imgEl => imgEl.name === tool.image);
                        return <div className='col-md-4 px-4' key={`paraToo_${idx}`}>
                            <div className={`${option_tool} row scaleHover py-4`}>
                                <div className='col-6 d-flex justify-content-end'>
                                    <div>
                                        <GatsbyImage image={getImage(img.childImageSharp)} alt="" />
                                    </div>
                                </div>
                                <div className='col-6'>{tool.title}</div>      
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='my-3 fs-6 lh-base'>
                {
                    OptionsAndPricingTools.conclusion.map((para,idx)=><p key={`paraToolC_${idx}`}>{para}</p>)
                }
            </div>
        </section>
    );
};

export default OptionsTools;