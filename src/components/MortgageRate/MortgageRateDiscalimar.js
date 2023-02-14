import React from 'react';

const disclaimers = [
    `*Sample rate provided for illustration purposes only and is not intended to provide mortgage or other financial advice specific to the circumstances of any individual and should not be relied upon in that regard. Applicant subject to credit and underwriting approval. Not all applicants will be approved for financing. Receipt of application does not represent an approval for financing or interest rate guarantee. Restrictions may apply, contact Guaranteed Rate for current interest rates and for more information.`,
    `** Savings, if any, vary based on consumer’s credit profile, interest rate availability, and other factors. Contact Guaranteed Rate, Inc. for current interest rates. Restrictions apply.`,
    `*** Guaranteed Rate does not provide credit counseling or credit repair services.`,
    `All information provided in this publication is for informational and educational purposes only, and in no way is any of the content contained herein to be construed as financial, investment, or legal advice or instruction. Guaranteed Rate, Inc. does not guarantee the quality, accuracy, completeness or timelines of the information in this publication. While efforts are made to verify the information provided, the information should not be assumed to be error free. Some information in the publication may have been provided by third parties and has not necessarily been verified by Guaranteed Rate, Inc. Guaranteed Rate, Inc. its affiliates and subsidiaries do not assume any liability for the information contained herein, be it direct, indirect, consequential, special, or exemplary, or other damages whatsoever and howsoever caused, arising out of or in connection with the use of this publication or in reliance on the information, including any personal or pecuniary loss, whether the action is in contract, tort (including negligence) or other tortious action.`,
    `Guaranteed Rate does not provide tax advice. Please contact your tax adviser for any tax related questions.`,
]

const MortgageRateDiscalimar = () => {
    return (
        <section>
            <h2>Disclaimer</h2>
            <div>
                {
                    disclaimers.map((para,idx) => <p style={{fontSize:"12px", maxWidth:"100%"}} key={`disPAra_${idx}`}>{para}</p>)
                }
            </div>
        </section>
    );
};

export default MortgageRateDiscalimar;