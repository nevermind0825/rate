import React from "react";

import {list_container_three} from "./index.module.css"

const HowArmWorks = () => {
  return (
    <section>
      <h2>How does an ARM loan work?</h2>

      <p>
        All ARMs begin with a fixed rate and they only begin to change once the allotted fixed rate period 
        is over. Even then, they don’t change capriciously or with great frequency. Usually an ARM will either 
        reset once a year or every 6 months. Increasingly, due to industry changes that we’ll talk about later, 
        most mortgage providers have begun to offer ARMs that readjust every six months as they transition to 
        the SOFR index as their preferred interest rate benchmark.
      </p>

      <p>
        OK, so in the real world of 10/6, 10/1, 7/6, 7/1, 5/6 and 5/1 ARM options, what does this mean 
        for your mortgage?
      </p>

      <p>
        Let’s say you want to buy a $300,000 home and you’re considering an adjustable rate mortgage. As a 
        first-time homebuyer, you may be attracted to the low interest rates that are prominently featured as 
        part of the fixed rate portion of an ARM. Everything else being equal, low interest rates = low monthly 
        payments. Sure, for risk averse individuals, a 30-year fixed rate has a strong appeal, but if you need 
        to save money now and the initial rate for a 5/1 mortgage is cheaper than its 30-year fixed rate 
        counterpart, you may be swayed by the savings of an ARM.
      </p>

      <p>
        While mortgage rates can change from lender to lender, in today’s interest rate environment, it may be 
        possible to receive an ARM that’s markedly lower than the corresponding rates of a 30-year fixed loan. 
        For example, if you can obtain a 5/1 ARM at an initial rate of 2% vs. 3%* for a typical 30-year fixed 
        rate mortgage, the savings over the first 60 months (5 years) can be quite substantial.
      </p>

      <h4>5/1 ARM example**</h4>


      <ul className={list_container_three}>
        <li>
          1. An initial fixed rate period (typically 5-, 7- or 10-year options) that features a low introductory rate.
        </li>

        <li>
          2. A variable rate period for the remainder of the loan that is based on an index rate, which measures the cost of short-term borrowing.
        </li>
      </ul>

      <p>
        You can expect to pay back $887 per month, not including taxes and other fees. Over the course of 
        five years, this equals $53,220.
      </p>

      <p>
        For a comparison, a 30-year fixed rate mortgage priced at 3% (1% higher than the ARM) would be $1,011 
        per month. This would result in payments of $60,660 over the first 5 years of the 30-year mortgage.***
      </p>

      <h5>$60,660 - $53,220 = $7,440</h5>

      <p>Note: the above rates assume a credit score of 714 or above.</p>

      <p>
        As you can see from our example, a sizable savings ($7,440) can be recouped for borrowers who choose 
        an ARM loan over a 30-year fixed mortgage during the initial rate period. While it’s impossible to compare 
        future adjustable rate periods before they occur, borrowers can take some satisfaction from seeing how 
        lower rates in the initial period can produce tangible savings.
      </p>

      <p>A mortgage calculator can be quite helpful when comparing costs and rates.</p>
    </section>
  )
}

export default HowArmWorks;