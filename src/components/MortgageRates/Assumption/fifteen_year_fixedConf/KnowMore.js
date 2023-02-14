import React from "react"

import ButtonRegular from "../../../common/ButtonRegular";

import {know_more_container} from "./index.module.css";

const KnowMore = () => {
  return (
    <section className={know_more_container}>
      <h2>Now that you know about 30-year mortgages</h2>

      <ButtonRegular label={"Let's get started"} className="py-2 px-4 text-light border-0"></ButtonRegular>
    </section>
  )
}

export default KnowMore;