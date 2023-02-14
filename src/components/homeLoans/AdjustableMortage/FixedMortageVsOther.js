import React from "react";

import { Link } from "gatsby";

import {other_mortage_container, mortage_container__inner, link_container, link_item} from "./index.module.css";

const FixedMortageVsOther = () => {
  return (
    <section className={other_mortage_container}>

      <div className={mortage_container__inner}>
        <p style={{fontWeight: "bold", textAlign: "center"}}>
          Adjustable rate mortgage vs. other mortgage types
        </p>

        <div className={link_container}>
          <Link className={link_item} to="">15-year fixed conforming mortgage</Link>
          <Link className={link_item} to="">Jumbo mortgage</Link>
          <Link className={link_item} to="">5-year ARM conforming mortgage</Link>
          <Link className={link_item} to="">FHA conforming mortgage</Link>

          <Link className={link_item} to="">7-year ARM conforming mortgage</Link>
          <Link className={link_item} to="">VA conforming mortgage</Link>
          <Link className={link_item} to="">10-year ARM conforming mortgage</Link>
          <Link className={link_item} to="">Interest-only mortgage</Link>
        </div>
      </div>
    </section>
  )

}

export default FixedMortageVsOther;