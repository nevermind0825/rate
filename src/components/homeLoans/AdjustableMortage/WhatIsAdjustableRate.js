import React from "react";

import {list_container_two} from "./index.module.css"

const WhatIsAdjustableRate = () => {
  return (
    <section>
      <h2>What is an adjustable rate mortgage?</h2>

      <p>
        If you’re looking for flexibility as well as a low rate that you can depend on for the first few years
        of homeownership, an adjustable rate mortgage might be a winning option. Many first-time homebuyers are 
        partiucilarly attracted to ARMs due to the introductory “teaser” rates that are comparatively lower than 
        those of exclusively fixed rate mortgages, thus reducing monthly payments and providing an affordable 
        entry point to homeownership.
      </p>

      <p>Simply stated, an adjustable rate mortgage is a mortgage that consists of two distinct elements:</p>

      <ul className={list_container_two}>
        <li>
          1. An initial fixed rate period (typically 5-, 7- or 10-year options) that features a low introductory rate.
        </li>

        <li>
          2. A variable rate period for the remainder of the loan that is based on an index rate, which measures the cost of short-term borrowing.
        </li>
      </ul>

      <p>
        To arrive at the effective interest rate for your adjustable rate period, the ARM is then added to 
        your lender’s pre-established margin (also a percent). This total is what you will pay during the ARM 
        portion of the loan.
      </p>

      <p>
        In a sense, all ARMs are actually hybrid mortgages, combining an upfront, fixed rate period with 
        a (longer) back-end adjustable rate period.
      </p>
 
      <h3>What do the numbers mean?</h3>

      <p>
        If you’re new to mortgages, you may require a brief primer on the visual presentation of ARM terms and 
        years. In a 10/6 ARM, for example, the “10” stands for the length of the initial fixed rate period of 
        the loan (10 years) while the “6” stands for how often the loan will reset. In this example, it’s every
        six (6) months.
      </p>

    </section>
  )
}

export default WhatIsAdjustableRate;