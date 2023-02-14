import React from 'react';

import {LinkRegular} from '../../common/ButtonRegular';

import {text_container, get_started, small_text, small_width} from "../styles.module.css"

const list = [
    "With so many options to choose from, you should carefully compare each loan type to see how they stack up. A fixed rate mortgage calculator can be very helpful in this regard, letting you plug in your expected loan amount, interest rate, down payment, property taxes and other criteria so you can accurately project your monthly payments.",

    "Don’t hesitate to shop around for the lowest fixed rate mortgage. Reach out to lenders to see what loan products and services they offer, compare their rates and seek out the best mortgage terms for your financial situation. It’s a big decision, and your due diligence will be rewarded.",

    "Speaking with a qualified mortgage expert is important as well, as they can point you toward the best fixed rate mortgage for your situation. Every homebuyer faces unique circumstances and challenges when financing a home purchase, and you want to be sure that your loan officer understands what you need from your mortgage agreement. That could be a low interest rate, flexible loan terms, a shorter term length or fewer upfront costs. The right mortgage expert will work with you to create the best home loan possible.",

   " When you’re ready to take the next step in your homebuying journey, don’t forget to start your digital mortgage. Applying for pre-qualification is quick, easy and convenient. You’ll be well on your way to realizing your dreams of homeownership in no time at all.",
]

const disClaimers = [
    "To understand the terms of repayment and review representative examples please review the information at rate.com/marketingdisclaimers.",

    "Applicant subject to credit and underwriting approval. Not all applicants will be approved for financing. Receipt of application does not represent an approval for financing or interest rate guarantee. Restrictions may apply, contact Guaranteed Rate for current rates and for more information.",
    
    "Guaranteed Rate, Inc. is a private corporation organized under the laws of the State of Delaware. It has no affiliation with the US Department of Housing and Urban Development, the US Department of Veterans Affairs, the US Department of Agriculture or any other government agency.",
    
    "Sample rate provided for illustration purposes only and is not intended to provide mortgage or other financial advice specific to the circumstances of any individual and should not be relied upon in that regard. Guaranteed Rate, Inc. cannot predict where rates will be in the future.",
    
    "Sample monthly Principal and Interest (P&I) payment of $XXXX is based on a purchase price of $300,000, down payment of 20%, XX year fixed rate mortgage and rate of 0.000%/0.000% APR (annual percentage rate). Advertised rates and APR effective as of xx/xx/xx and are subject to change. Above scenario assumes a first lien position, xxx FICO score, xx day rate lock on a primary residence and are subject to change without notice. Subject to underwriting guidelines and applicant’s credit profile. Sample payment does not include taxes, insurance or assessments. Not all applicants will be approved. The actual interest rate, APR and payment may vary based on the specific terms of the loan selected, verification of information, your credit history, the location and type of property, and other factors as determined by Lender. Contact Guaranteed Rate for more information and up to date rates.",
    
    "Savings, if any, vary based on consumer’s credit profile, interest rate availability, and other factors. Contact Guaranteed Rate, Inc. for current rates. Restrictions apply.",
]


const HowRightFix = () => {
    return (
        <section>
            <h2>How can you find the right fixed rate mortgage for you?</h2>
            <div className={text_container}>
                {
                    list.map((para,idx) => <p key={idx}>{para}</p>)
                }
            </div>

            <div className={get_started}>
                <LinkRegular
                    url="https://apply.guaranteedrate.com/?AdTrk=%7Cgnr%7Cguaranteedrate%7C%7C%7C%7C%7C%7C%7C%7Cdirect%7C%7C%7C%7C%7C"  
                    label="Let's get started"
                />
            </div>

            <div className={small_width}>
                {
                    disClaimers.map((para,idx) => <p className={small_text} key={idx}>{para}</p>)
                }
            </div>
        </section>
    );
};

export default HowRightFix;