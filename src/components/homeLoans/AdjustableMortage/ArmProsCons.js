import React from "react";

import {list_container_three } from "./index.module.css"

const ArmProsCons = () => {
  return (
    <section>
      <h2>ARM pros and cons</h2>

      <p>At this point, it should be clear that ARMs provide benefits as well as some potential risks.</p>

      <h3>Pros</h3>

      <ul className={list_container_three}>
        <li><p>Upfront savings</p></li>

        <li><p>Lower rates that may allow you to “buy more home”</p></li>

        <li><p>Flexibility to get in and get out (before ARM period) by selling or refinancing</p></li>

        <li><p>Possibility of lower payments if interest rates fall</p></li>
      </ul>


      <h3>Cons</h3>

      <ul className={list_container_three}>
        <li><p>During the ARM period, rates can rise dramatically (even given caps)</p></li>
        
        <li><p>Hard to understand compared to a conventional fixed-rate mortgage</p></li>

        <li><p>Since rates can rise or fall, it makes financial planning difficult</p></li>

        <li><p>Risk, risk, risk</p></li>
      </ul>
    </section>
  )
}

export default ArmProsCons;