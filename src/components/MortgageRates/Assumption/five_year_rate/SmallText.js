import React from "react";

import {small_text} from "./index.module.css"

const SmallText = () => {
  return (
    <section style={{margin: "20px 0px"}}>
      <p className={small_text}>
        *Savings, if any, vary based on consumer’s credit profile, interest rate availability, and other factors. 
        Contact Guaranteed Rate for current rates. Restrictions apply.
      </p>

      <p className={small_text}>
        **Some lenders will continue to issue adjustable rate mortgages on an annual basis using market data 
        collected from the CMT T-Bill index.
      </p>

      <p className={small_text}>
        ***Sample rates and scenarios provided for illustration purposes only and are not intended to provide 
        mortgage or other financial advice specific to the circumstances of any individual and should not be 
        relied upon in that regard. Guaranteed Rate, Inc. cannot predict where rates will be in the future.
      </p>

      <p className={small_text}>
        ****Not including applicable closing costs, origination fees and other charges that may apply to 
        both fixed-rate and ARM mortgages.
      </p>

      <p className={small_text}>
        For more information about Adjustable Rate Mortgages, 
        visit https://files.consumerfinance.gov/f/201401_cfpb_booklet_charm.pdf.
      </p>

      <p className={small_text}>
        All information provided in this publication is for informational and educational purposes only, and 
        in no way is any of the content contained herein to be construed as financial, investment, or legal 
        advice or instruction. does not guarantee the quality, accuracy, completeness or timelines of the 
        information in this publication. While efforts are made to verify the information provided, the 
        information should not be assumed to be error-free. Some information in the publication may have 
        been provided by third parties and has not necessarily been verified by . its affiliates and subsidiaries 
        do not assume any liability for the information contained herein, be it direct, indirect, consequential, 
        special, or exemplary, or other damages whatsoever and howsoever caused, arising out of or in connection 
        with the use of this publication or in reliance on the information, including any personal or pecuniary 
        loss, whether the action is in contract, tort (including negligence) or other tortious action.
      </p>

    </section>
  )
}

export default SmallText