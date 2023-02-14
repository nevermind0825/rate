import React from "react";

import {list_container_three, under_span } from "./index.module.css"

const ConsiderARM = () => {
  return (
    <section>
      <h2>Who should consider an ARM loan?</h2>

      <p>There are scenarios where an ARM is a particularly attractive loan option. Let's take a look:</p>

      <ul className={list_container_three}>
        <li>
          <p>
            <span className={under_span}>First-time homebuyers: </span>Families and individuals buying for the first time are typically younger and 
            at the beginning of their careers—and their savings journey. An ARM, due to the lower introductory 
            interest rates served up during the fixed rate portion of the loan, can offer much-needed 
            savings.**** This savings may even be the reason borrowers can afford to become homeowners in the 
            first place. Since younger people are frequently less risk averse, they’re not as worried about the 
            adjustable rate period. They like the flexibility of an ARM. And many—if not most—of them will sell or 
            refinance before they have to begin paying an adjustable rate anyway.
          </p>
        </li>

        <li>
          <p>
            <span className={under_span}>Homeowners looking to sell:</span> Thinking about selling in five, seven or 10 years? If so, then an ARM 
            could be the ideal loan product for you. Take advantage now of the appealing initial rates (typically 
            lower than 30-year fixed rate mortgages) and then sell your home before having to face the 
            unpredictable interest rate terrain associated with an ARM on the back end of the loan.
          </p>
        </li>        

        <li>
          <p>
            <span className={under_span}>Buy more home:</span> For certain homebuyers, an ARM can be a difference maker right off the bat when 
            selecting a home to buy. When weighing home affordability, the upfront savings obtained through 
            choosing an ARM can sometimes be enough for prospective homeowners to take a leap towards buying the 
            home they really want.
          </p>
        </li>

      </ul>
    </section>
  )
}

export default ConsiderARM;