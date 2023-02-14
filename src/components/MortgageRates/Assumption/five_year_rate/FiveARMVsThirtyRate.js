import React from "react";

import {disclose_container} from "./index.module.css"

const FiveARMVsThirtyRate = ({idString}) => {
  return (
    <section id={idString}>
      <h2>5-year ARM rates vs. 30-year fixed mortgage rates</h2>

      <p>
        One of the most important decisions you’ll need to make as you prepare to get your mortgage or refinance 
        your home is whether to pursue an adjustable rate or a fixed rate. Let’s look at some of the pros and 
        cons of a 5-year ARM vs. a 30-year fixed rate.
      </p>
      
      <h4>Advantages of securing a 5-year ARM</h4>

      <ul className={disclose_container}>
        <li>
          The 5-year ARM will typically provide borrowers with a lower interest rate during the initial period. 
          If you’re looking to see if you could save on the front-end of the loan, the 5/6 ARM could be superior 
          to the 30-year fixed rate mortgage.
        </li>

        <li>
          The generally low interest rate could not only results in reduced monthly payments, but it could help 
          you afford your home to begin with by leaving more money available for the down payment and even 
          avoiding private mortgage insurance (PMI).
        </li>

        <li>
          The 5-year ARM may be ideal if you plan to sell your home after five years. Think about it: You were 
          able to afford your home, lock in potential savings and now just as the initial fixed rate is set to 
          expire, you’re selling your home and avoiding the unpredictability of variable rates. A 30-year fixed 
          rate mortgage offers no such advantage. While opportunities to refinance will always be available, 
          the interest rate you pay on your existing mortgage remains the same throughout the life of the loan.
        </li>
      </ul>

      <h4>Disadvantages of securing a 5-year ARM</h4>

      <ul className={disclose_container}>
        <li>
          While a 5-year ARM could deliver savings during the initial fixed rate period, once it transitions to 
          the adjustable rate period, all bets are off. If your tolerance for unpredictability is not terribly 
          high, you’d be better off with a fixed-rate mortgage. Many borrowers find comfort in paying off their 
          purchase in steady increments without dealing with fluctuating market conditions.
        </li>

        <li>
          In a low-interest-rate environment, the difference between an ARM and a 30-year fixed rate may not 
          be terribly wide. A 5-year ARM may be lower—but not by much. In such circumstances, a 30-year fixed 
          rate can provide two things: potential savings and peace of mind over a considerable time span.
        </li>
      </ul>


    </section>
  )
}

export default FiveARMVsThirtyRate