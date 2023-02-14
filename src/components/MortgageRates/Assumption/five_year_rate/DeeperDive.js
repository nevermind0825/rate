import React from "react";

import {disclose_container} from "./index.module.css"

const DeeperDive = ({idString}) => {
  return (
    <section id={idString}>
      <h2>The 5/6 ARM: A deeper dive</h2>

      <p>
        Now that you’re familiar with adjustable rates and have had an introduction to 5/6 ARM rates, let’s 
        go a little deeper into how these interest rates are determined.
      </p>

      <p>
        As we said above, the initial fixed rate period is generally offered to borrowers at a below market 
        rate, thus providing a period of potential savings and predictability that homeowners enjoy. This 
        is especially true for first-time homebuyers who look to take advantage of low rates to make purchases 
        possible.
      </p>

      <p>
        Today’s lenders typically offer 5-, 7- or 10-year ARMs. While that’s plenty of time to build equity, 
        raise income levels and even determine if a refinance is right for you, it leaves a lot of time on the 
        back end of the loan. For a 5-year ARM that’s offered as part of a 30-year mortgage, borrowers could 
        potentially experience up to 25 years on the back end of the loan; in other words, 25 years of 
        adjustable rates that you have little control over.
      </p>

      <h4>Caps</h4>

      <p>
        While there’s always the possibility of paying more once the adjustable rate period kicks in, the 
        good news is that even in the event of a rate hike, you won’t be on the hook for an exponential rise 
        in monthly payments. The mortgage industry protects borrowers from severe rate increases by offering 
        interest rate caps.
      </p>

      <p>
        A cap is essentially a limit placed upon the ARM so it cannot rise to a level that would be unreasonable. 
        Today’s lenders offer a couple different types of rate caps. Let’s explore.
      </p>

      <h4>Initial interest rate cap</h4>

      <p>
        For homeowners who have a 5/6 ARM, the monthly payment that’s bound to startle them the most is the 
        first mortgage payment directly following the 5-year fixed rate period. This is the initial adjustment 
        rate period and most lenders set a cap of 2%, meaning the combined margin + index rate cannot jump more 
        than 2% above what you were paying during the fixed rate period.
      </p>

      <h4>Periodic interest rate cap</h4>

      <p>
        The second kind of interest rate cap for a 5-year ARM is the periodic or incremental interest rate cap. 
        As you cycle from one six-month adjustment period to the next, your lender sets a cap on how much the 
        mortgage rate can increase—this, too, is frequently set at 1%.
      </p>

      <h4>Lifetime cap on interest rate</h4>

      <p>
        Mercifully, there also exists a lifetime cap on interest rate increases over the life of the loan. 
        While this rate can change from lender to lender, it’s typical for this to be set at 5%. And while the 
        idea of experiencing only a 5% increase can’t be very comforting to most individuals with a 5-year ARM, 
        the good news is that rates haven’t had a 5-point swing in nearly two decades. The odds are extremely 
        slim that you’ll ever have to climb the ladder 5% when it comes to monthly mortgage payments. However, 
        if it were to come to that, caps are here to provide a safety net.
      </p>

      <p>
        Lenders often disclose these caps in shorthand percentages, such as in the following example that would 
        look like this 2/1/5:
      </p>

      <ul className={disclose_container}>
        <li>2% = The percent cap applied to your initial adjustment rate period</li>
        <li>1% = The periodic or subsequent percent cap applied to additional interest rate periods</li>
        <li>5% = The maximum lifetime rate increase your loan agreement allows</li>
      </ul>

      <h4>Floors</h4>

      <p>
        Just as there are ceilings or caps, there also exist floors. Long before the current era of plummeting 
        interest rates, lenders protected themselves by establishing floors for adjustable rate mortgages, thus 
        guaranteeing a minimum interest income in the event of dramatically falling interest rates. There are 
        lifetime floors as well as floors that are applicable from one rate period to the next. Check with your 
        lender to see if floors apply to your ARM.
      </p>

    </section>
  )
}

export default DeeperDive