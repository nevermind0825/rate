import React from 'react'
import {outer_float, apply_now_btn} from "./applynow.module.css"


const ApplyNowFloat = () => {
  return (
    <div className={outer_float}>
      <span className='start_journey'>Start Your Homeownership Journey with Us!</span>
      <button className={apply_now_btn}>Apply Now</button>
    </div>
  )
}

export default ApplyNowFloat
