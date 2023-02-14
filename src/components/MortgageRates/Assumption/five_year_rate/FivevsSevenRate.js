import React from "react";

import {disclose_container} from "./index.module.css"

const FivevsSevenRate = ({idString}) => {
  return (
    <section id={idString}>
      <h2>5-year ARM rates vs. 7-year ARM rates</h2>

      <p>
        Whether it’s a 5/1 ARM or a 5/6 ARM it’s worth looking to see how it compares to another popular ARM 
        issued by lenders: the 7-year ARM.
      </p>

      <p>Admittedly, the 5-year ARM and its 7-year counterpart have much in common:</p>

      <ul className={disclose_container}>
          <li>They both have a short initial fixed rate period</li>
          <li>They both have long adjustable rate periods</li>
      </ul>

      <p>Here are the key differences:</p>

      <ul className={disclose_container}>
          <li>
            A 5-year ARM typically boasts a more attractive interest rate during the initial fixed rate period. 
            This is an attempt to balance out the longer period of risk associated with the ARM on the back 
            end.
          </li>
          <li>
            A potentially lower interest rate for the first five years also serves as an incentive for first-time 
            homebuyers to take the plunge of homeownership. With a low rate, they can more easily manage future 
            payments. As for the potential risk of higher payments within the ARM period, many may choose to 
            refinance into a fixed rate as their initial rate period ends or decide to sell their house and 
            relieve themselves of the mortgage.
          </li>
      </ul>

    </section>
  )
}

export default FivevsSevenRate