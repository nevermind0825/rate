import React  from "react";

import {disclose_container} from "./index.module.css"

const Disclosure30 = () => {
  return (
    <section style={{margin: "30px 0px"}}>
      <p style={{fontSize: "12px"}}>
        Savings, if any, vary based on consumer’s credit profile, interest rate availability, and other 
        factors. Contact Guaranteed Rate for current rates. Restrictions apply.
      </p>

      <p style={{fontSize: "12px"}}>
        All information provided in this publication is for informational and educational purposes only, 
        and in no way is any of the content contained herein to be construed as financial, investment, or 
        legal advice or instruction. Guaranteed Rate, Inc. does not guarantee the quality, accuracy, 
        completeness or timelines of the information in this publication. While efforts are made to verify 
        the information provided, the information should not be assumed to be error free. Some information 
        in the publication may have been provided by third parties and has not necessarily been verified by 
        Guaranteed Rate, Inc. Guaranteed Rate, Inc. its affiliates and subsidiaries do not assume any liability
        for the information contained herein, be it direct, indirect, consequential, special, or exemplary, 
        or other damages whatsoever and howsoever caused, arising out of or in connection with the use of 
        this publication or in reliance on the information, including any personal or pecuniary loss, whether
         the action is in contract, tort (including negligence) or other tortious action.
      </p>

      <h2>General Disclosures</h2>

      <ul className={disclose_container}>
        <li>
          Sample payment does not include taxes, insurance or assessments. Mortgage Insurance Premium (MIP) 
          is required for all FHA loans and Private Mortgage Insurance (PMI) is required for all conventional 
          loans where the LTV is greater than 80%.
        </li>

        <li>
          Mortgage interest rates shown are based on a 60-day rate lock period.
        </li>

        <li>
          The displayed Annual Percentage Rate (APR) is a measure of the cost to borrow money expressed 
          as a yearly percentage. For mortgage loans, excluding home equity lines of credit, it includes 
          the interest rate plus other charges or fees (such as mortgage insurance, discount points, 
          and origination fees). For home equity lines, the APR simply reflects the interest rate. When 
          shopping for a mortgage, you can use the APR to compare the costs of similar loans between lenders.
        </li>

        <li>
          The estimated total closing costs above do not constitute and are not a substitute for a loan estimate, 
          which includes an estimate of closing costs, than you will receive once you apply for a loan. The 
          amounts provided above for Estimated Total Closing Costs, are estimations based on the state selected. 
          This is NOT a mortgage loan approval or commitment to lend. The actual fees, costs and monthly payment 
          on your specific loan transaction may vary, and may include city, county or other additional fees and 
          costs.
        </li>

        <li>
          These mortgage rates are based upon a variety of assumptions and conditions which include a consumer 
          credit score which may be higher or lower than your individual credit score. Your loan's interest rate
           will depend upon the specific characteristics of your loan transaction and your credit history up to
          the time of closing.
        </li>
      </ul>
    </section>
  )
}

export default Disclosure30;