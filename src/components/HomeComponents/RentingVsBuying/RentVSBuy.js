import React from 'react'
import { container, video, table, heading, row, left_col, right_col, play_button } from "./rent.module.css"
import videoImg from '../../../images/Home_img/videoImage.jpg'

const RentVSBuy = () => {
    return (
        <div className={container}>
            <div className={video}> 
                <div className={play_button}>Watch Video</div>
                <img style={{width:"100%"}} src={videoImg}></img>
            </div>
            <table className={table}>
                <tr className={row}>
                    <th className={heading} colSpan={2}>Renting VS. Buying</th>
                </tr>
                <tr>
                    <td className={left_col}>Historically:</td>
                    <td className={right_col}>Now:</td>
                </tr>

                <tr><th className={row} colSpan={2}>Prercentage of income needed to afford a medium rent</th></tr>
                <tr>
                    <td className={left_col}>24.9%</td>
                    <td className={right_col}>29.5%</td>
                </tr>
                <tr><th className={row} colSpan={2}>Prercentage of income needed to afford a medium home</th></tr>
                <tr>
                    <td className={left_col}>22.1%</td>
                    <td className={right_col}>15.3%</td>
                </tr>
                <tr><th className={row} colSpan={2}>If you are renting & think you can't afford a home, Think again!</th></tr>
            </table>
        </div>
    )
}

export default RentVSBuy

