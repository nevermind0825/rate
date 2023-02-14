import React from "react";

import {list_container_three, under_span } from "./index.module.css"

const ConsiderFixedRate = () => {
  return (
    <section>
      <h2>Who should consider a fixed rate loan (Not an ARM)?</h2>     

      <p>
        An ARM loan is not for everyone. Let’s take a look at individuals and scenarios where procuring an ARM 
        is probably not a great idea:
      </p>

      <ul className={list_container_three}>
        <li>
          <p>
            <span className={under_span}>The risk-averse borrower: </span> As stated above, the built-in risk 
            of adjustable rates is probably not a good loan type for anyone who is at all worried about the 
            possibility of rates rising in future periods. In addition, it makes personal financial planning 
            difficult. You can’t set out estimates for future savings if you don’t know how much your payments 
            will be.
          </p>
        </li>

        <li>
          <p>
            <span className={under_span}>Homeowners who intend to stay in their homes:</span> if you intend to stay at your home for the duration, 
            a fixed rate mortgage of either 15 or 30 years makes the most sense under most circumstances. There’s 
            little reason to wade into the uncertainty of an ARM if you’re pleased with the rate you’ve been able 
            to obtain and pleased with the home you’ve acquired. Any future savings due to a drop in interest 
            rates can always be obtained through a refi.
          </p>
        </li>

        <li>
          <p>
            <span className={under_span}>Homebuyers who want to avoid complexity: </span>To the average borrower, ARMs are considerably more complex 
            to understand than a typical fixed rate loan. An adjustable rate mortgage affords lenders the 
            flexibility to determine adjustment indexes, margins, caps and more. The flexibility is nice but the 
            aggregate range of factors can make things complicated.
          </p>
        </li>

        <li>
          <p>
            <span className={under_span}>Buyers wary of negative amortization loans:</span> This is a certain type of adjustable rate mortgage where 
            borrowers can end up owing more money than they did to begin with. The reason is that the payments are 
            set so very low, that even the interest is not being completely paid off. All of this then, naturally, 
            gets rolled over into the balance, which can be substantial when all is said and done. If you suspect 
            the mortgage rate being offered will not be sufficient to cover your monthly interest payments, 
            consider this a red flag. Everyone should be wary of negative amortization loans—not just the risk 
            averse.
          </p>
        </li>
      </ul>

    </section>
  )
}

export default ConsiderFixedRate;