import React from "react";

import {list_container_three, type_span} from "./index.module.css"

const TypesOfAdjustable = () => {
  return (
    <section>
      <h2>Types of adjustable rates mortgages</h2>

      <p>Today, most ARM options can be divided into three loan term categories:</p>

      <ul className={list_container_three}>
        <li>5-year ARM</li>
        <li>7-year ARM</li>
        <li>10-year ARM</li>
      </ul>

      <p>
        Some lenders offer a 3/1 ARM, but for the purposes of this article, we’re only interested in the 
        most frequently offered ARMs. This makes it easy to compare specific rates between lenders and determine 
        if you’re getting the best deal possible.
      </p>

      <p>
        As for the terms themselves, you may be wondering what the big deal is. After all, each of these loans 
        feature comparatively low introductory interest rate periods and then transition to a variable rate phase. 
        All true. But each loan contains slightly different rates, and because the fixed rate period differs, 
        the time spent in the adjustable period on the back end of the mortgage also differs, potentially 
        resulting in significantly higher or lower monthly payments for the remainder of the loan.
      </p>

      <ul className={list_container_three}>
        <li>
          <p>
            The <span className={type_span}>5-year ARM</span> (5/6 or 5/1) is perhaps the most popular of the ARMs. This is mostly due to the 
            fact that the 5-year ARM offers the best rates for the initial fixed rate period. The rates are 
            comparatively lower than a 7- or 10-year ARM mainly because the lender needs to provide you with 
            incentive to absorb the risk on the other end of the loan—the adjustable portion. For a 30-year 
            mortgage, a 5-year ARM will result in 25 years on the back end of the loan if you don’t sell your 
            home or decide to refinance into a conventional fixed mortgage.
          </p>
        </li>

        <li>
          <p>
            The <span className={type_span}>7-year ARM</span> (7/6 or 7/1) is the middle ground between the 5- and 10-year options. Its rates are 
            not typically quite as attractive as the 5-year ARM, but are usually lower than the 10-year 
            equivalent. A 7-year ARM will refund you 23 years in the adjustable rate period unless you decide 
            to refinance or sell your home before the mortgage transitions to the variable rate period.
          </p>
        </li>

        <li>
          <p>
            The <span className={type_span}>10-year ARM</span> (10/6 or 10/1) provides the least risky option out of the three readily available 
            adjustable rate mortgages. Because the initial fixed rate period is extended to a full 10 years, 
            the ARM period is only 20 years long. While that’s still plenty of time for rates to fluctuate wildly 
            and create uncertainty when it comes to monthly mortgage payments, it’s still a safer bet than the 5- 
            or 7-year ARMs. The teaser period will also feature rates that are comparatively lower than a 30-year 
            fixed rate mortgage.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default TypesOfAdjustable;