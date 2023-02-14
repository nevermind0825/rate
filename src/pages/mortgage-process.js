import React from 'react';
import Layout from '../components/Layout/layout';
import ProcessDiscalimer from '../components/MortgageProcess/ProcessDiscalimer';
import ProcessHeader from '../components/MortgageProcess/ProcessHeader';
import ProcessStep from '../components/MortgageProcess/ProcessStep';
import {process_head_title} from "../components/MortgageProcess/mortgage_process.module.css";
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { LinkRegular } from '../components/common/ButtonRegular';

const mortgageProcess = {
    title:"We are positive you can do this. Here’s everything you need to get started.",
    banner:{
        img:"",
        button:"Supercharge my pre-approval",
        url:""
    },
    details:{
        introduction:[
            "We know that choosing a mortgage is one of the biggest financial decisions of your life, and we’re committed to making your mortgage loan process seamless, friendly and as financially smart for you as possible.",
            "Below, we’ll walk you through the entire mortgage process, and provide links to helpful guides, calculators and articles on topics we know you’ll find useful."
        ],
        descriptions:[
            {
                title:"Application and pre-approval letter",
                img:"loan_process_step_1",
                details:[
                    "Before you start looking for homes, it’s smart to get a pre-approval letter from your lender. You want to set yourself up to be the strongest buyer possible—the person the seller absolutely wants to deal with. And it’s important to understand that to a seller, a lender’s pre-approval letter is considerably stronger than a pre-qualification letter. When a seller knows your financing is secure, your offer is taken more seriously.",
                    "To get pre-approved, you fill out an application with information including your name, current income and assets to determine how much you can reasonably afford. You’ll be asked for your Social Security Number to run a credit check, and we’ll provide you a summary of the report. With our Digital Mortgage , this can all be done in about 10 to 15 minutes on your phone or computer, and if you ever get stuck, just call the number on the screen. If your completed application is approved, you can contact your loan officer to get a pre-approval letter that can be shared with your agent. In a strong seller’s market like the one we’re in now, a letter can mean the difference between having your offer accepted or rejected.",
                    "Discover PowerBid Pre-Approval from Guaranteed Rate"
                ],
            },
            {
                title:"Find your dream home",
                img:"loan_process_step_2",
                details:[
                    "Finding your perfect home is the most exciting part of the process. Connect with your real estate agent to start seeing amazing homes in your area. Real estate professionals are valuable partners in the process: they help you find the best home, put in an Offer to Purchase, negotiate the price and handle all the paperwork and details. When you find the right home and the seller accepts your offer, the home goes “under contract.”",
                    "More about home shopping"
                ],
            },
            {
                title:"Inspection and appraisal",
                img:"loan_process_step_3",
                details:[
                    "It is critical to make sure that the house you are buying is in good shape. Even if the home you plan to purchase looks flawless to you, there's no substitute for a trained professional conducting a home inspection of the property to make sure you understand the quality, safety and overall condition of your potential new home.",
                    "An inspector will review the electrical, plumbing, roof, overall condition of the home and more to ensure that there aren’t any problems. Agents can usually recommend a trustworthy licensed home inspector, and the inspection is generally scheduled within a week of the contract being signed. We recommend that you attend the inspection to get a better understanding of the inner workings of the home.",
                    "Guaranteed Rate will order an appraisal to confirm the value and condition of the home. We’ll work with your real estate agent, the seller’s agent and the appraiser to schedule the appraisal. You and your agent will receive copies of the appraisal report, so you can see the appraised fair market value and check out the comparable homes that were used in the calculations. The appraisal needs to be equal to or greater than your offer price. If all goes well, you’ll receive a mortgage approval.",
                    "More about the appraisal"
                ],
            },
            {
                title:"Underwriting and final approval",
                img:"loan_process_step_4",
                details:[
                    "Underwriting sounds wonky, but it’s basically just verifying all the information that has been gathered, including your income, employment and assets as well as the property details. Once everything looks good, the Underwriter will sign-off on all documents and issue a final approval. Then the mortgage team schedules your closing and reviews the Closing Disclosure (CD), which is a standard document that details the finalized terms for the loan, including a breakdown of all costs and fees.",
                    "More about underwriting"
                ],
            },
            {
                title:"Closing and your new keys",
                img:"loan_process_step_5",
                details:[
                    "Once your loan is fully approved, you’re ready to close your loan and get the keys to your new dream home. We’ll send you the closing package the day before your closing appointment. At closing, you’ll sign the remaining mortgage documents and pay your down payment and closing costs . Some lenders are moving this process online, making it faster and more convenient than visiting an office to sign papers. With our simple and innovative FlashClose process, closing appointments could only take about 30 minutes.",
                    "Congratulations, your dream home is all yours! Now, it’s time to move in and get to know your new neighbors!",
                    "More about closing",
                ],
            },
        ],
        conclusion:[]
    },
    satisfaction:{
        image:"",
        url:"100% satisfaction guaranteed, only from Guaranteed Rate. View details",
    },
    disclaimer:[
        "Applicant subject to credit and underwriting approval. Not all applicants will be approved for financing. Receipt of application does not represent an approval for financing or interest rate guarantee. Restrictions may apply, contact Guaranteed Rate for current rates and for more information. All information provided in this publication is for informational and educational purposes only, and in no way is any of the content contained herein to be construed as financial, investment, or legal advice or instruction. Guaranteed Rate, Inc. does not guarantee the quality, accuracy, completeness or timelines of the information in this publication. While efforts are made to verify the information provided, the information should not be assumed to be error free. Some information in the publication may have been provided by third parties and has not necessarily been verified by Guaranteed Rate, Inc. Guaranteed Rate, Inc. its affiliates and subsidiaries do not assume any liability for the information contained herein, be it direct, indirect, consequential, special, or exemplary, or other damages whatsoever and howsoever caused, arising out of or in connection with the use of this publication or in reliance on the information, including any personal or pecuniary loss, whether the action is in contract, tort (including negligence) or other tortious action. Guaranteed Rate does not provide tax advice. Please contact your tax adviser for any tax related questions.",
        "PowerBid Approval (the “Approval”) is contingent upon receipt of executed sales contract, an acceptable appraisal supporting value, valid hazard insurance policy, and a re-review of your financial condition. Guaranteed Rate, Inc. reserves the right to revoke this Approval at any time if there is a change in your financial condition or credit history which would impair your ability to repay this obligation and/or if any information contained your application is untrue, incomplete or inaccurate. Receipt of an application does not represent an approval for financing or interest rate guarantee. Not all applicants will be approved for financing. Restrictions may apply, contact Guaranteed Rate for current rates and for more information."
    ]
}

const mortgageProcess_QL = graphql`
    query mortgageProcess_QL {
        processbanner: file(name: {eq: "loan_proces-banner"}) {
            name
            size
            childImageSharp {
                gatsbyImageData
            }
        }
        best_banner_img: file(name: {eq: "best_banner"}) {
            name
            size
            childImageSharp {
                gatsbyImageData
            }
        }
        
        process_img: allFile(filter: {name: {in: ["loan_process_step_1","loan_process_step_2","loan_process_step_3","loan_process_step_4","loan_process_step_5"]}}) {
            nodes {
            name
            childImageSharp {
                gatsbyImageData
            }
            }
        }
    }

`;



const MortgageProcess = () => {
    const {processbanner,process_img:{nodes:process_imgs},best_banner_img} = useStaticQuery(mortgageProcess_QL);


    return (
        <Layout className='container'>
            
            <p className='mb-0 mt-4' style={{color:"grey"}}>Mortgage basics</p>
            <h1 className={`${process_head_title}`}>{mortgageProcess.title}</h1>
            <div>
                {
                    mortgageProcess.details.introduction.map((para,idx) =><p key={`par_proces_${idx}`}>{para}</p>)
                }
            </div>
            <ProcessHeader banner={{...mortgageProcess.banner,img:processbanner}}  />
            <div className='my-5'>
                {
                    mortgageProcess.details.descriptions.map((process,idx)=> <ProcessStep process={process} imgList={process_imgs} processNumber={idx} key={`process_id_${idx}`} />)
                }
                
            </div>
            <div>
                <div className='my-5 text-center'>
                    <LinkRegular className='bg-danger text-light' label={"Let’s get started"} url="" />
                </div>
                <div className='my-5'>
                    <GatsbyImage image={getImage(best_banner_img)} alt="" />
                </div>
            </div>
            <ProcessDiscalimer disclaimer={mortgageProcess.disclaimer} />
        </Layout>
    );
};

export default MortgageProcess;