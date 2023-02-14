import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { DownFullFillArrow } from '../../utils/icons/Arrows';
import { DangerIcon } from '../../utils/icons/mixIcons';
import AccordianSingle from '../common/AccordianSingle';
import ButtonRegular from '../common/ButtonRegular';
import 
{
    purchase_refine_btns, purchase_refine_btn,personalRate_btn,purchase_field, purchase_label, purchase_input,purchase_select,

} from "./mortgageCurrRate.module.css";
import PurchaseForm from './Purchase_Refine_forms/PurchaseForm';
import RefineForm from './Purchase_Refine_forms/RefineForm';


const mortgage_rate_disclaimers = [
    "This is NOT a mortgage loan approval or commitment to lend. The actual fees, costs, and monthly payment on your specific loan transaction may vary, and may include city, county, or other additional fees and costs.",
    "Mortgage rates are offered exclusively through Guaranteed Rate and are subject to change without notice. If the down payment is less than 20%, mortgage insurance may be required and could increase the monthly payment and APR. The payment amount does not include homeowners’ insurance, flood insurance (if applicable), or property taxes that must be paid in addition to your loan payment.The displayed Annual Percentage Rate (APR) is a measure of the cost to borrow money expressed as a yearly percentage. For mortgage loans, excluding home equity lines of credit, it includes the interest rate plus other charges or fees (such as mortgage insurance, discount points, and origination charges). For home equity lines, the APR simply reflects the interest rate. When shopping for a mortgage, you can use the APR to compare the costs of similar loans between lenders.",
    "One discount points equals one percent of your loan amount.",
    "Some jumbo loan options may not be available to first-time home buyers.",
    "We based the mortgage interest rates shown on a 30-day rate lock period. Under certain circumstances, a 30-day rate lock may not be available. When you apply, you can choose to lock or float your interest rate range.",
    "Mortgage rates and loan options displayed depend on a number of variables, including the accuracy of the information you have entered, which is subject to verification, credit and property approval.",
    "These mortgage rates are based upon a variety of assumptions and conditions, which include a consumer credit score that may be higher or lower than your individual credit score.",
    "Your loan's interest rate will depend upon the specific characteristics of your loan transaction and your credit history up to the time of closing.",
    "VA",
    "If you meet the eligibility requirements of the VA program, gifts or grants may be used for down payments. Up to 100% financing may be available for qualified borrowers. Most VA loans require the borrower to pay a 'funding fee'. This fee may be paid out of pocket or financed into the loan amount. At the direction of the United States Congress and the Department of Veterans Affairs VA Funding Fees may increase or decrease without notice. Guaranteed Rate, Inc. is a private corporation organized under the laws of the State of Delaware. It has no affiliation with the US Department of Housing and Urban Development, the US Department of Veterans Affairs, the US Department of Agriculture, or any other government agency.",
    "Adjustable Rate Mortgage (ARMs)",
    "Interest rates and payments may increase after consummation. After the initial fixed period, your interest rate may change periodically according to the market index. Any change may significantly impact your monthly payment. Since the index in the future is unknown, the First Adjusted Rate and Payments displayed are based on the current index plus the margin (fully indexed rate) at time of scenario/disclosure. Before choosing an ARM, you should decide if you can manage the maximum estimated payment if the rate increases. To fully understand minimum and maximum payments, please speak to a mortgage loan expert."
]

const CompareCurrentRate = () => {
    const [isPurchaseForm, setIsPurchaseForm] = useState(false);
    
    return (
        <section className='my-5'>
            <p className='text-secondary m-0'>Mortgage rates today</p>
            <h1 className='my-2'>Compare current mortgage rates</h1>
            <p style={{maxWidth:"100%"}}>Rates shown are based on loan assumptions provided by you. Your actual rate, payment and costs could be higher. Get an official Loan Estimate before choosing a loan. Take the next step by answering a few questions about your <Link className={personalRate_btn} to='/'> goals to get your personal rate.</Link> </p>
            <div>
                <div className={`${purchase_refine_btns}`}>
                    <div className='d-flex justify-content-center'>
                        <p onClick={()=>setIsPurchaseForm(true)} className={`${isPurchaseForm && purchase_refine_btn}  mx-2 my-0`} style={{cursor:"pointer"}}>Purchase</p>
                        <p onClick={()=>setIsPurchaseForm(false)} className={`${!isPurchaseForm && purchase_refine_btn} mx-2 my-0`} style={{cursor:"pointer"}}>Refinance</p>
                    </div>
                </div>
                <div>
                    {
                        isPurchaseForm ? <PurchaseForm /> : <RefineForm />
                    }
                    
                </div>
            </div>
            <div>
                <div></div>
                <div className='d-flex justify-content-center my-2'>
                    <ButtonRegular 
                        label={"Check My Rates"} 
                        className="py-1 px-5 text-light border-0" 
                        rounded = {false}
                        style={{borderRadius:"12px"}}
                    ></ButtonRegular>
                </div>
                <div className='my-5 d-flex align-items-center justify-content-center'>
                    <DangerIcon width={18} height={18} />
                    <p className='m-0 ms-3' style={{maxWidth:"650px"}}>We apologize. Current market volatility has disabled our ability to show rates. To explore your personal rate for $200000, please answer just a few questions. No obligation or impact on credit score.</p>
                </div>
                <div className='d-flex justify-content-center my-2'>
                    <ButtonRegular 
                        label={"Explore Personal Rate"} 
                        className="py-1 px-5 text-light border-0"
                        rounded = {false}
                        style={{borderRadius:"12px"}}
                    ></ButtonRegular>
                </div>
            </div>
            <div className='my-5'>
                <AccordianSingle 
                    p_class='my-3'
                    p_style={{maxWidth:"100%", fontSize:"14px"}}
                    label='Mortgage Rates Disclaimers' 
                    paragraphs={mortgage_rate_disclaimers} 
                />
            </div>
            <div className='py-3'>
                <h3 className='text-center'>Your personal rate will vary. It could be lower or higher. Check what you can qualify for.​</h3>
                <div className='row g-2 my-4'>
                    <div className='col-12 col-md-6 d-flex flex-column align-items-center text-center'>
                        <div>
                        <ButtonRegular label={"Get personal rate"} className="px-5 py-2 fs-4 text-light border-0"  />
                        <p className='my-3' style={{maxWidth:"400px"}}>Tell us about your goals and we'll match you with an expert to explain your rate options.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column align-items-center text-center' >
                        <div>
                            <ButtonRegular 
                                label={"Estimate mortgage payments"} 
                                className="px-2 px-lg-4 py-2 fs-4 text-danger bg-transparent border border-danger" 
                                style={{border:"1px solid", whiteSpace:"no-wrap"}} 
                            />
                            <p className='my-3' style={{maxWidth:"400px"}}>Explore your potential future payments with digital calculator tools.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompareCurrentRate;