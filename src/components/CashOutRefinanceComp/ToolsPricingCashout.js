import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import {toolOption} from "../MortgageRate/RefinanceMortgage/refineMortgage.module.css";

const tools = [
    {
        image_name:"DesktopIcon_newv2",
        title:"Loan options",
        url:"/home-loans"
    },
    {
        image_name:"CalculatorIconBold",
        title:"Mortgage calculator",
        url:"/mortgage-calculators"
    },
    {
        image_name:"RatesIconBold",
        title:"Today's rates",
        url:"/mortgage-rates"
    },
]

const todaysTools = [
    {
        title:"An express pre-approval",
        text:"Get pre-approved fast with our Red Arrow Approval Express.*"
    },
    {
        title:"Our Digital Mortgage",
        text:"Our online application only takes about 10-15 minutes."
    },
    {
        title:"Choosing the best loan",
        text:"We’ll help you pick the best type of loan for you."
    },
    {
        title:"Professional mortgage help",
        text:"Contact us today to connect with a home loan expert."
    },
]

const cashout_QL = graphql`
    
    query cashout_QL {
        toolsImg: allFile(filter: {name: {in: 
            ["Group14","DesktopIcon_newv2","CalculatorIconBold","RatesIconBold"]
    }}) {
        nodes {
            id
            name
            childImageSharp {
                gatsbyImageData
            }
        }
        }
    }


`;


const ToolsPricingCashout = () => {
    const {toolsImg:{nodes}} = useStaticQuery(cashout_QL);
    // console.log(nodes);
    
    return (
        <section className='my-5'>
            <h2 className='text-center'>Cash-out refinance options and pricing tools</h2>
            <div className='row'>
                {
                    tools.map((tool,idx) => <div className='col-12 col-md-4' key={idx}>
                        <Link className='scaleHover d-flex justify-content-center align-items-center py-4 my-4 border rounded border-dark text-decoration-none text-dark' to={tool.url}>
                            <div>
                                <GatsbyImage image={getImage(nodes.find(el => el.name === tool.image_name?.trim())?.childImageSharp)} alt="tools"></GatsbyImage> 
                            </div>
                            <div className='ms-2'>
                                <b>{tool.title}</b>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
            <div  className='row my-3 g-4'>
                <div className='col-12 col-md-6'>
                    <div className='m-3 p-2'>
                        <h2>Make your home equity work for you.</h2>
                        <p style={{maxWidth:"100%"}}>With a cash-out refi from Guaranteed Rate, you can transform your home equity into cash. Consolidate debt with the money you've already put into your home*. Use your cash-out refi for emergency expenses, college tuition, home improvement projects — you name it! Contact our refinance experts to get started today and receive your cash-out payment as soon as possible.</p>
                        <div className='scaleHover d-inline-block mt-5'>
                            <Link className=' text-danger text-decoration-none border border-danger px-5 py-3 mt-4' style={{borderRadius:"var(--border-radius-medium)"}} to='' >Get cash now</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <h2>Get started today...</h2>
                    <div className='m-3 p-2'>
                        {
                            todaysTools.map(tool => <div className={toolOption}>
                                <h3>{tool.title}</h3>
                                <p style={{maxWidth:"100%"}}>{tool.text}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsPricingCashout;