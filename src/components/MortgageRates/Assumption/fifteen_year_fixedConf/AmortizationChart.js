import React from "react";
import { Link } from "gatsby";

import {chart_table_head, header_element, chart_table_row} from "./index.module.css";

const AmortizationChart = () => {
  const data = [
    ["$100,000.00",	"$50.00",	"$0.00",	"$416.67",	"$366.67",	"$100,366.67"],
    ["$100,366.67",	"$50.00",	"$0.00",	"$418.19",	"$368.19",	"$100,734.86"],
    ["$100,734.86",	"$50.00",	"$0.00",	"$419.73",	"$369.73",	"$101,104.59"],
    ["$101,104.59",	"$50.00",	"$0.00",	"$421.27",	"$371.27",	"$101,475.86"],
    ["$101,475.86",	"$50.00",	"$0.00",	"$422.82",	"$372.82",	"$101,848.67"],
    ["$101,848.67",	"$50.00",	"$0.00",	"$424.37",	"$374.37",	"$102,223.04"],
    ["$102,223.04",	"$50.00",	"$0.00",	"$425.93",	"$375.93",	"$102,598.97"],
    ["$102,598.97",	"$50.00",	"$0.00",	"$427.50",	"$377.50",	"$102,976.47"],

  ]
  return (
    <div>
      <p>
        Here’s an example of what an amortization schedule looks like from &nbsp; 
        {<Link to="https://investinganswers.com/dictionary/n/negative-amortization">investinganswers.com</Link>}
      </p>

      <div style={{marginBottom: "20px"}}>
        <div className={chart_table_head}>
          <p className={header_element}></p>
          <p className={header_element}>Beginning Principle</p>
          <p className={header_element}>Payment</p>
          <p className={header_element}>Principal Portion</p>
          <p className={header_element}>Interest Accrued</p>
          <p className={header_element}>Interest Added to Principal</p>
          <p className={header_element}>Ending Principal</p>
        </div>

        {data.map((elem, idx) => 
          <div key={idx} className={chart_table_row}>
            <p className={header_element}>{idx + 1}</p>
            {elem.map((elemTwo, idxTwo) => 
              <p key={idxTwo} className={header_element}>{elemTwo}</p>
            )}
          </div>
        )}
      </div>

      <p>
        The amortization schedule, provided by the lender when shopping for a loan, projects your monthly payments throughout the term of the mortgage. This chart also gives a precise estimate of how much equity you’ll have gained in a given month. With this knowledge, you can get a head start on your long-term financial goals and prioritize savings years in advance.
      </p>

      <p>Amortization schedules are a great resource when taking out a fixed rate loan, but become much more complicated when applying for an adjustable rate mortgage.</p>
    </div>
  )
}

export default AmortizationChart