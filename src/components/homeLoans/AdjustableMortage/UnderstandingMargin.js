import React from "react";

import {list_container_three, under_span} from "./index.module.css"

const UnderstandingMargin = () => {
  return (
    <section>
      <h2>Understanding indexes, margins and caps</h2>

      <p>
        The adjustable mortgage rate does not by itself produce the interest rate that affects your monthly 
        mortgage payments during the ARM period of your loan. There are other factors at play. To better 
        understand ARMs, let’s take a look at financial indexes, margins and caps.
      </p>

      <h4>Index rate</h4>

      <p>
        All adjustable rate mortgages are generated from an index rate, or benchmark, that is based on the 
        cost of short-term borrowing between banks. For decades, the most widely employed index for ARMs was 
        the London Interbank Offered Rate (LIBOR) index, which was based on the cost of borrowing between 
        certain global banks. However, because the pool of data was dangerously small and prone to fraud and 
        manipulation, inevitable scandals around price fixing emerged. Slowly but surely, the financial sector 
        moved away from LIBOR and as of 2020, began to embrace the more transparent and risk-free alternative 
        known as the Secured Overnight Financing Rate (SOFR) index. This is the reference rate primarily used 
        to determine the adjustable interest rate. Still, this is only one part of your actual rate.
      </p>

      <h4>Margin</h4>

      <p>
        The adjustable rate that affects your monthly interest payment is not solely determined by the index rate. 
        The index rate—from the SOFR benchmark, for example— is added to your margin, which is an agreed-upon 
        percentage established when you obtain the loan, and together, these two components create the fully 
        indexed interest rate. This is what you will pay during the ARM period of your mortgage. Margins are 
        generally determined by the level of risk your loan presents and do NOT change over time. A good credit 
        score and a clean financial slate put you in the best position to earn a favorable margin from your lender.
      </p>

      <h4>Caps</h4>

      <p>
        Caps are essentially limitations on your adjustable interest rate. They were introduced to protect 
        borrowers from wildly excessive interest rate hikes.<span style={{display: "block"}}>They exist in two forms:</span>
      </p>

      <ul className={list_container_three}>
        <li>
          <p>
            1. <span className={under_span}>Annual/Semiannual Caps</span>: These delineate how much your ARM can rise during each rate reset period, 
            typically every six months or once a year depending on the relevant index. While this can change 
            from lender to lender, this is typically around 2%.
          </p>
        </li>

        <li>
          <p>
            2. <span className={under_span}>Lifetime/Initial Cap</span>: When your ARM loan transitions from the fixed rate period to the adjustable 
            rate period, a cap can help protect you from paying an exorbitant rate, should rates rise. Caps 
            also exist over the lifetime of the loan. For example, many lenders install caps to protect the borrower from incurring no more than a 5% hike in interest over the entire life of the loan. Check with your lender to see what caps they offer on their ARMs.
          </p>
        </li>
      </ul>


      <p>
        <span className={under_span}>Note: </span>Caps (or floors) also exist to prevent you from paying zero 
        interest rates should rates plunge to that level. This is a way to ensure that lenders receive adequate
        compensation for making loans no matter the interest rate environment.
      </p>

    </section>
  )
}

export default UnderstandingMargin;