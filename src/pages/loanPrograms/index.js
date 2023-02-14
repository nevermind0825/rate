import React from 'react'
import Layout from '../../components/Layout/layout'
import adjust from "../../images/loan_programs/adjust.png"
import buydown from "../../images/loan_programs/buydown.png"
import conv from "../../images/loan_programs/conv.png"
import fha from "../../images/loan_programs/fha.png"
import heloc from "../../images/loan_programs/heloc.png"
import statement from "../../images/loan_programs/statement.png"
import usda from "../../images/loan_programs/usda.png"
import va from "../../images/loan_programs/va.png"
import home from "../../images/mix_images/house.jpg"
import { navigate } from 'gatsby'
import * as styles from "./loan.module.css"

const LoanPrograms = () => {
    return (
        <Layout>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <h3 className={styles.banner}>LOAN PROGRAMS</h3>
                <div className={styles.videoCont}>
                    <button className={styles.playButton}>Watch Now</button>
                    <img className={styles.video} src={home} />
                </div>
                <div className={styles.imageCont}>
                    <img className={styles.image} onClick={() => navigate("./progs/fha")} src={fha} />
                    <img className={styles.image} onClick={() => navigate("./progs/va")} src={va} />
                    <img className={styles.image} onClick={() => navigate("./progs/conv")} src={conv} />
                    <img className={styles.image} onClick={() => navigate("./progs/heloc")} src={heloc} />
                    <img className={styles.image} onClick={() => navigate("./progs/usda")} src={usda} />
                    <img className={styles.image} onClick={() => navigate("./progs/buydown")} src={buydown} />
                    <img className={styles.image} onClick={() => navigate("./progs/arm")} src={adjust} />
                    <img className={styles.image} onClick={() => navigate("./progs/bank")} src={statement} />
                </div>
            </div>
        </Layout>
    )
}

export default LoanPrograms





const imageContainer = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
    columnGap: "3rem",
    padding: "2rem 3rem",

}

const playButton = {
    position: "absolute",
    width: "10%",
    padding: "1rem",
    backgroundColor: "rgb(0,0,0,0.7)",
    zIndex: "3",
    borderRadius: "0.3rem",
    color: "#fff",
    textAlign: "center",
    border: "none",
}

const image = {
    width: "18%"
}