import React, {useState} from "react";

import {accordion_title, border_bott, border_top, accordion_rotate, rotate_arrow} from "./index.module.css"

import {RightArrow} from "../../utils/icons/Arrows"

const CustomAccordion = ({title, content, accordionIndex}) => {
  const [showAccordion, setShowAccordion] = useState(false)

  const handleToggle = () => {
    setShowAccordion(!showAccordion)
  }

  return (
    <div className={accordionIndex === 0 ? border_top : border_bott}>
      <div onClick={handleToggle} className={accordion_rotate}>
        <h6 className={accordion_title}>{title}</h6>

        <span className={showAccordion ? rotate_arrow : ""}><RightArrow width={10} height={10} /></span>
      </div>

      {
        showAccordion &&       
        <div>
          {content}
        </div>
      }
    </div>
  )
}

export default CustomAccordion;