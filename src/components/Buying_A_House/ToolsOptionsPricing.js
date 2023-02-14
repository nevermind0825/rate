import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import ButtonRegular, { LinkRegular } from '../common/ButtonRegular';

const toolInfo = {
    title: "Homebuying options and pricing tools",
    tools: [
        {
            icon: "DesktopIcon_newv2",
            title:"Loan options",
            url:"/home-loans",
        },
        {
            icon: "CalculatorIconBold",
            title:"Mortgage calculators",
            url:"/mortgage-calculators",
        },
        {
            icon: "RatesIconBold",
            title:"Today's rates",
            url:"/mortgage-rates",
        },
    ]
}


const buyingAhouseInfo = {
    title:"We’re here to help you do this",
    paragraph: "We offer top-of-the-line technology and customer service that guides you through the homebuying process with ease whether it’s your first home or fifth home. Get in contact with Guaranteed Rate’s elite team of experts, ready to help you make the best decision for you.",
    button: "I'm ready to buy",
    options: [
        {
            title:"Pre-approval letter",
            text:"Stand out to agents and sellers as a serious buyer."
        },
        {
            title:"Digital Mortgage",
            text:"Our online application only takes about 10-15 minutes."
        },
        {
            title:"All types of loans",
            text:"Choose the best loan for your needs."
        },
        {
            title:"100% satisfaction guaranteed",
            text:"If you’re not completely satisfied, we’ll return your application fee. Period. View details"
        },
    ]
}

const toolOption_QL = graphql`
    query toolOption_QL {
        tool_imgs:allFile(
            filter: {relativeDirectory: {eq: "refinance-mortgage"}, name: {in: ["DesktopIcon_newv2","CalculatorIconBold","RatesIconBold"]}}
        ) {
            nodes {
                name
                childImageSharp {
                    gatsbyImageData(jpgOptions: {})
                }
            }
        }

    }
`
const ToolsOptionsPricing = () => {
    const {tool_imgs:{nodes:toolImgs}} = useStaticQuery(toolOption_QL);
    // console.log(toolImgs);

    

    return (
        <section className='my-4'>
            <h3 className='text-center mt-4'>{toolInfo.title}</h3>
            <div className='row g-4 my-4'>
                {
                    toolInfo.tools.map(tool => {
                        const img = toolImgs.find(imgNode => imgNode.name === tool.icon)?.childImageSharp;
                        return <div className='col-12 col-md-4' key={tool.title}>
                            <div className='scaleHover p-4 d-flex justify-content-center align-items-center  border border-dark rounded'>
                                <div>
                                    <div>
                                        <GatsbyImage image={getImage(img)} alt=""></GatsbyImage>
                                    </div>
                                </div>
                                <div className='ms-2'>
                                    <h6>{tool.title}</h6>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='row g-4 mt-4'>
                <div className='col-12 col-md-6'>
                    <div className='p-2'>
                        <h3>{buyingAhouseInfo.title}</h3>
                        <p >{buyingAhouseInfo.paragraph}</p>
                        <LinkRegular label={buyingAhouseInfo.button} url={""}  />
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='p-2'>
                        <ul className=''>
                            {
                                buyingAhouseInfo.options.map(option => <li className='bullet_point list-unstyled'>
                                    <h3>{option.title}</h3>
                                    <p>{option.text}</p>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsOptionsPricing;