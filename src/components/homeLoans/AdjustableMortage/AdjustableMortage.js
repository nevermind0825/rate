import React from "react";
import { LinkRegular } from "../../common/ButtonRegular";

import {button_container, link_btn,} from "./index.module.css";

const AdjustableMortage = () => {
  return (
    <section>
      <h1>Adjustable rate mortgage (ARM) summary</h1>

      <p>
        Adjustable rate mortgages (ARMs) are one of the more fascinating yet poorly understood mortgage products 
        available for today’s homebuyers. While it’s widely known that an adjustable rate can have a significant 
        effect on interest payments depending on which direction rates move, not everyone understands how to 
        measure the associated risks and rewards of ARMs vs. fixed rate mortgages. Taking a moment to explore 
        the unique components of an ARM will allow you to optimize your home financing decisions.
      </p>

      <div className={button_container}>
          <LinkRegular 
              label={"View Today's 5-Year ARM Mortgage Rates"} 
              url={"/mortgage-rates/assumptions/5-year_arm_conforming/"}  
              className={link_btn}
          />

          <LinkRegular 
              label={"View Today's 7-Year ARM Mortgage Rates"} 
              url={"/mortgage-rates/assumptions/7-year_arm_conforming/"}  
              className={link_btn}
          />

          <LinkRegular 
              label={"View Today's 10-Year ARM Mortgage Rates"} 
              url={"/mortgage-rates/assumptions/10-year_arm_conforming/"}  
              className={link_btn}
          />
      </div>
    </section>
  )
}

export default AdjustableMortage