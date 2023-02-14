import React from "react";


const WhatIs51ARM = ({idString}) => {
  return (
    <section id={idString}>
      <h2>What is a 5/1 ARM?</h2>

      <p>
        Now that we know a little about the 5/6 ARM and how ARMs operate in general, let’s take a look at the 
        widely recognized 5/1 ARM loan—an adjustable rate mortgage familiar to many.
      </p>

      <p>
        As you can see, the 5/1 ARM consists of five initial years at a (low) fixed rate followed by a second 
        period (the “1”) where the rate readjust annually based on the prevailing interest rate + margin. So it’s 
        very similar to the 5/6 ARM; the rate readjustment period is the main difference.
      </p>

      <p>
        However, as a result of some changes in the greater financial sector, the popular 5/1 ARM is being phased 
        out. It’s a process that began over the last year and will continue until the 5/1 ARM is no longer in use 
        by most lenders.** The reason has nothing to do with the adjustment rate period itself but everything to 
        do with financial indices that inform the rates.
      </p>

      <h4>LIBOR is in, SOFR is out</h4>

      <p>
        What’s LIBOR? And what’s SOFR? We mentioned financial indices up above. Well, LIBOR (short for the London 
        Interbank Offered Rate) has for decades been the go-to index for providing variable interest rates to 
        banks, credit card companies and other lenders. In recent years, however, regulators have uncovered some 
        flaws in the index that left it vulnerable to manipulation and decreasing accuracy. Given these 
        challenges, Fannie Mae and Freddie Mac have said that they will no longer approve LIBOR-based ARMs.
      </p>

      <p>
        Fortunately, there is another financial benchmark that has proven to be accurate and reliable, and 
        unlike LIBOR, its rates reset every six months as opposed to once a year. Called the Secured Overnight 
        Financing Rate (SOFR), it’s an index formulated to resist manipulation, and it uses data based on 
        large-volume transactions in the Treasury market to determine prevailing interest rates. For accuracy
         purposes, it also resets every six months as opposed to once a year.
      </p>

      <p>
        Since SOFR incorporates secure financial transactions already collateralized, its data offers a more 
        precise portrait of market conditions, and therefore a more accurate interest rate for your ARM 
        (when added to your lender’s margin).
      </p>

    </section>
  )
}

export default WhatIs51ARM;