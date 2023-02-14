import React from "react";

const AdjustableLoan = ({idString}) => {
  return (
    <section id={idString}>
      <h2>Adjustable rate loans: A general synopsis</h2>

      <p>
        An adjustable rate mortgage, or ARM, is a type of mortgage with two distinct rate periods—one fixed 
        and one adjustable. In that sense, it’s really a hybrid. An initial fixed rate period (typically 5, 7 
        or 10 years) is followed by a longer period where the rate adjusts according to the loan agreement. 
        Accordingly, a 5-, 7- or 10-year ARM is not to be confused with a 5-, 7-, or 10-year mortgage; the initial 
        digits only refer to the number of years the rate remains fixed before transitioning to the adjustable 
        rate period.
      </p>

      <p>
        The adjustable rate is based on an index that reflects market conditions plus the marginal rate, which 
        is a percentage predetermined by your lender and outlined in your mortgage agreement. The margin never 
        changes but the indexed rate does. Together, these create the fully indexed interest rate that defines 
        the ARM.
      </p>

      <p>
        While most borrowers can expect attractive, potentially even below-market rates during the initial 
        fixed period, the adjustable rate period is heavily influenced by current market conditions—namely 
        Treasury transactions in the securities repurchase market. Rates that adjust downward could provide you 
        with ample savings while conditions that result in a higher rate could force you to pay thousands of 
        dollars more over the life of the loan*. It all depends.
      </p>
    </section>
  )
}

export default AdjustableLoan;