import React from "react";

import ButtonRegular from "../../common/ButtonRegular";

import {know_more_container} from "./index.module.css"

const LoanOfficers = () => {
  return (
    <section className={know_more_container}>
      <h2>Knowledgeable loan officers are here to help</h2>

      <p>
        As you shop around and explore different types of loans, we invite you to compare Guaranteed Rate’s low, 
        low rates with other lenders. Whether it’s an ARM or a fixed-rate mortgage, experienced and knowledgeable 
        loan officers are here to guide you through the process and help find a personalized loan that works for 
        you.
      </p>

      <ButtonRegular label={"Let's get started"} className="py-2 px-4 text-light border-0"></ButtonRegular>
    </section>
  )
}

export default LoanOfficers;