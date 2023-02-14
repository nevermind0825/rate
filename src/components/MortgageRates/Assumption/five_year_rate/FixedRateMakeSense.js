import React from "react";

import {disclose_container} from "./index.module.css"

const WhenFixedRateMakeSense = ({idString}) => {
  return (
    <section id={idString}>
      <h2>When a fixed rate mortgage makes sense</h2>

      <p>
        Fixed rate mortgages remain the cornerstone of the American homebuying experience and they aren’t 
        going anywhere. In recent years, a low-interest rate environment has only further underscored their 
        importance to homeowners. While an ARM is a gamble, a fixed rate mortgage is steady and predictable, 
        and if spread out over 30 years, it can be quite affordable. And with the increasing popularity of 
        refinances, homeowners are realizing that even if they’ve secured a suboptimal interest rate, there 
        will likely be an opportunity to sit down with a lender and talk about refinancing into a new 
        agreement and potentially lower your interest payments. A home is an investment, and a fixed rate 
        mortgage is a great way to make it affordable and easy to understand.
      </p>

      <h3 id="5/6ARMmath">The math on a 5/6 ARM loan</h3>

      <p>
        It can be beneficial to look at a 5/6 ARM with the help of an example. Below, we compare a 5/6 ARM 
        (as part of a 30-years mortgage) with a straight up conventional 30-year fixed mortgage.
      </p>

      <p>
        Buyer X and Buyer Y both have been vetted and approved for 30-year mortgages. Buyer X decides to 
        go with a 5-year ARM, and was able to lock in a lower introductory rate of 2.5%. Buyer Y opts for 
        the safer, more predictable 30-year fixed rate at the still very reasonable 3% mortgage rate***.
      </p>

      <h4>Buyer X: First 5 years of a 5/6 ARM at 2.5%</h4>

      <ul className={disclose_container}>
        <li>Purchase price: $400,000</li>
        <li>Loan amount: $320,000 (assumes 20% down payment)</li>
        <li>5-year ARM monthly payment: $1,264</li>
        <li>Total paid after 5 years: $75,840</li>
      </ul>

      <h4>Buyer Y: First 5 years of a 30-year fixed mortgage at 3%</h4>

      <ul className={disclose_container}>
        <li>Purchase price: $400,000</li>
        <li>Loan amount: $320,000 (assumes 20% down payment)</li>
        <li>30-year fixed rate monthly payment: $1,349</li>
        <li>Total paid after 5 years: $80,940</li>
      </ul>

      <h6 style={{fontWeight: "bold", marginBottom: "20px"}}>After 5 years, Buyer X’s decision to get an ARM with a lower introductory interest rate resulted in a savings of $5,100****.</h6>

    </section>
  )
}

export default WhenFixedRateMakeSense;