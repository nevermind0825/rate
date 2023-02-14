import React from "react";

import {small_text_container, small_text} from "./index.module.css"

const SmallText = () => {
  return (
    <section className={small_text_container}>
        <p className={small_text}>
          *Sample rate provided for illustration purposes only and is not intended to provide mortgage or other 
          financial advice specific to the circumstances of any individual and should not be relied upon in that 
          regard. Guaranteed Rate, Inc. cannot predict where rates will be in the future.
        </p>

        <p className={small_text}>
          **5/1 ARM interest rate and monthly principal and interest (P&I) payment subject to increase after initial 
          5 year period. Monthly payments 1 – 60: $ with a rate of % APR. Monthly payments 61 - 359: $ with a rate 
          of % APR. Final monthly payment of $ with a rate of %APR. First rate adjustment cap: 5%; subsequent 
          annual caps: 2%; lifetime adjustment cap: 5%. Interest rate and payments after initial period are based 
          on a margin of (0.00%) and a current 1 YR Libor Index of (0.000.) Sample payments based on purchase price 
          of $000,000 with a XX% down payment and 30-year term. Advertised rates and APR effective as of xx/xx/xx 
          and are subject to change. Above scenario assumes a first lien position, xxx FICO score, xx day rate lock 
          on a primary residence and are subject to change without notice. Subject to underwriting guidelines and 
          applicant’s credit profile. Sample payment does not include taxes, insurance or assessments. Not all 
          applicants will be approved. The actual interest rate, APR and payment may vary based on the specific terms 
          of the loan selected, verification of information, your credit history, the location and type of property, 
          and other factors as determined by Lender. Contact Guaranteed Rate for more information and up to date 
          rates. For more information about Adjustable Rate Mortgages, visit here.
        </p>

        <p className={small_text}>
          ***Sample monthly Principal and Interest (P&I) payment of $XXXX is based on a purchase price of $300,000, 
          down payment of 20%, XX year fixed rate mortgage and rate of 0.000%/0.000% APR (annual percentage rate). 
          Advertised rates and APR effective as of xx/xx/xx and are subject to change. Above scenario assumes a 
          first lien position, xxx FICO score, xx day rate lock on a primary residence and are subject to change 
          without notice. Subject to underwriting guidelines and applicant’s credit profile. Sample payment does 
          not include taxes, insurance or assessments. Not all applicants will be approved. The actual interest 
          rate, APR and payment may vary based on the specific terms of the loan selected, verification of 
          information, your credit history, the location and type of property, and other factors as determined 
          by Lender. Contact Guaranteed Rate for more information and up to date rates.
        </p>

        <p className={small_text}>
          ****Savings, if any, vary based on consumer’s credit profile, interest rate availability, and other 
          factors. Contact Guaranteed Rate, Inc. for current rates. Restrictions apply.
        </p>
    </section>
  )
}

export default SmallText;