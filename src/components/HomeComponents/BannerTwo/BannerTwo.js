

import React from 'react'
import { container, section_one, head_line, head_one, head_two, list_item, description, section_two, sub_heading, list } from "./banner_two.module.css"
import homeImage from "../../../images/header1.png"

const BannerTwo = () => {
    return (

        <div className={container}>
            <div className={section_one}>
                <div className={head_line}>
                    <h3 className={head_one}>ARE YOU A</h3>
                    <h3 className={head_two}>FIRST-TIME HOMEBUYER</h3>
                    <h2 className=''> OR </h2>
                    <h3 className={head_two}>SEASONED HOMEOWNER</h3>
                </div>
                <div className={sub_heading}>
                    <p className={description}>
                        We offer a combination of the following:
                    </p>
                    <ul className={list}>
                        <li className={list_item}>Expert mortgage advice</li>
                        <li className={list_item}>Personalized financial solutions</li>
                        <li className={list_item}>A simplified process built to accomplish your homeownership goals</li>
                    </ul>
                    <p className={description}>
                        This allows us to offer some of the lowest rates in the market and the ability to close your loan in as little as 7-15 days.
                    </p>
                </div>
            </div>
            <div className={section_two}>
                <img style={{ width: "90%" }} src={homeImage} />
            </div>
        </div>

    )
}

export default BannerTwo
