import React from 'react';

import {disclose_container} from "./index.module.css"

const list = [
    `Sample payment does not include taxes, insurance or assessments. Mortgage Insurance Premium (MIP) is required for all FHA loans and Private Mortgage Insurance (PMI) is required for all conventional loans where the LTV is greater than 80%.`,
    `Mortgage interest rates shown are based on a 60-day rate lock period.`,
    `The displayed Annual Percentage Rate (APR) is a measure of the cost to borrow money expressed as a yearly percentage. For mortgage loans, excluding home equity lines of credit, it includes the interest rate plus other charges or fees (such as mortgage insurance, discount points, and origination fees). For home equity lines, the APR simply reflects the interest rate. When shopping for a mortgage, you can use the APR to compare the costs of similar loans between lenders.`,
    `The estimated total closing costs above do not constitute and are not a substitute for a loan estimate, which includes an estimate of closing costs, than you will receive once you apply for a loan. The amounts provided above for Estimated Total Closing Costs, are estimations based on the state selected. This is NOT a mortgage loan approval or commitment to lend. The actual fees, costs and monthly payment on your specific loan transaction may vary, and may include city, county or other additional fees and costs.`,
    `These mortgage rates are based upon a variety of assumptions and conditions which include a consumer credit score which may be higher or lower than your individual credit score. Your loan's interest rate will depend upon the specific characteristics of your loan transaction and your credit history up to the time of closing.`
]
const Disclosure15 = () => {
    return (
        <section>
            <h2>General Disclosures</h2>
            <ul className={disclose_container}>
                {
                    list.map((item,idx) => <li key={idx}>{item}</li>)
                }
            </ul>
        </section>
    );
};

export default Disclosure15;