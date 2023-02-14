import React from "react"

const WhatIsFiveYear = ({idString}) => {
  return (
    <section id={idString}>

      <h2>What is a 5/6 ARM?</h2>

      <p>
        When taking a look at mortgage rates during your homebuying process , you’ll notice that ARMs 
        (adjustable rate mortgages) are almost always presented as fractions: 10/1, 10/6, 7/1, 7/6, and so on. 
        Same goes for the 5-year ARM. Specifically, a 5/6 ARM is an adjustable rate mortgage that has a fixed 
        rate for the first five years (hence the “5”) and then transitions to an adjustable rate for the remainder 
        of the loan. The “6” denotes a rate “reset” every six months or biannually. This doesn’t necessarily mean 
        you will pay more in interest; it just means that information from the relevant indices + margin will be 
        applied to your loan every six months, and depending on the interest rate environment, your payments may 
        increase, decrease or stay the same.
      </p>

      <p>
        It’s important to note that the concept of rates readjusting every six months is new in the marketplace. 
        For decades, 5-year ARMs have reset on an annual basis during the adjustable rate period; hence the 
        popular 5/1 ARM. However, as explained below in greater detail, the majority of lenders are moving to 
        an adjustable rate mortgage that resets every six months in order to capture more accurate market 
        information. Welcome to the era of the 5/6 ARM.
      </p>

    </section>
  )
}

export default WhatIsFiveYear;