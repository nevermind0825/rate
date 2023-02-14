import React from "react";

import { CreditScore, Calculator, Income, FirstTimeBuyer, InterestRate } from "../../../../utils/icons/mixIcons";

import {great_30_list, great_30_container} from "./index.module.css";

const dataIcons =  [
  {
    title: "Build your credit over time",
    icon: <CreditScore width={40} height={40} />
  },

  {
    title: "Calculate your potential mortgage payments",
    icon: <Calculator width={40} height={40} />
  },

  {
    title: "Start saving for a down payment",
    icon: <Income width={40} height={40} />
  },

  {
    title: "Meet with lenders and ask questions",
    icon: <FirstTimeBuyer width={40} height={40} />
  },

  {
    title: "Keep an eye on interest rates",
    icon: <InterestRate width={40} height={40} />
  }
]

const Great30Rate = ({idString}) => {
  return (
    <section id={idString} style={{marginBottom: "20px"}}>
      <h2>How do I get a great 30-year rate?</h2>
      <p>
        To get a great 30-year rate, you’ll need to determine how big of a loan you can afford. 
        Follow these steps to get started on finding your ideal home:
      </p>

      <div className={great_30_container}>
        {
          dataIcons.map((elem, idx) => (
            <div key={idx} className={great_30_list}>
              <div>{elem.icon}</div>
              <p>{elem.title}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Great30Rate;