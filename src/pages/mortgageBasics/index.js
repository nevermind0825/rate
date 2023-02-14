import React from 'react'
import Layout from '../../components/Layout/layout'
import glossary from "../../images/mortgage_basics/glossary.png"
import buy from "../../images/mortgage_basics/buy.png"
import caution from "../../images/mortgage_basics/caution.png"
import creditscore from "../../images/mortgage_basics/creditscore.png"
import pmi from "../../images/mortgage_basics/pmi.png"
import causes from "../../images/mortgage_basics/rate/causes.png"
import conclusion from "../../images/mortgage_basics/rate/conclusion.png"
import determined from "../../images/mortgage_basics/rate/determined.png"
import lock from "../../images/mortgage_basics/rate/lock.png"
import mortgage from "../../images/mortgage_basics/rate/mortgage.png"
import parts from "../../images/mortgage_basics/rate/parts.png"
import apr from "../../images/mortgage_basics/rate/apr.png"
import security from "../../images/mortgage_basics/rate/security.png"
import test from "../../images/testimonial/test.jpg"
import { navigate } from 'gatsby'
import axios from 'axios'
import { token } from '../../../token'
import * as styles from "./index.module.css"

const navTo = (url) => {
    navigate(url)
}

const MortgageBasics = () => {

    const [blogs, setBlogs] = React.useState([]);

    // React.useEffect(() => {
    //     axios({
    //         url: "http://localhost:1337/api/blogs",
    //         method: "GET",
    //         headers: {
    //             authorization: `bearer ${token}`,
    //         },
    //     }).then(res => console.log("here is the data", res.data.data))
    // })
    return (
        <Layout>
            <h3 className={styles.banner}>MORTGAGE BASICS</h3>
            <div className={styles.imageCont}>
                <img onClick={() => navTo("./glossary")} className={styles.image} src={glossary} />
                <img onClick={() => navTo("./dontdo")} className={styles.image} src={caution} />
                <img onClick={() => navTo("./creditmeans")} className={styles.image} src={creditscore} />
                <img onClick={() => navTo("./rentbuy")} className={styles.image} src={buy} />
                <img onClick={() => navTo("./pmi")} className={styles.image} src={pmi} />
            </div>
            <h3 className={styles.banner}>MORTGAGE RATES 101</h3>
            <div className={styles.imageCont}>
                <div className={styles.videoCont}>
                    <button className={styles.playButton}>Watch Now</button>
                    <img className={styles.video} src={test} />
                </div>
                <img onClick={() => navTo("./course/mor101")} className={styles.image} src={mortgage} />
                <img onClick={() => navTo("./course/mor102")} className={styles.image} src={parts} />
                <img onClick={() => navTo("./course/mor103")} className={styles.image} src={apr} />
                <img onClick={() => navTo("./course/mor104")} className={styles.image} src={determined} />
                <img className={styles.image} src={causes} />
                <img onClick={() => navTo("./course/mor106")} className={styles.image} src={lock} />
                <img onClick={() => navTo("./course/mor107")} className={styles.image} src={security} />
                <img onClick={() => navTo("./course/mor108")} className={styles.image} src={conclusion} />
            </div>

        </Layout>
    )
}

export default MortgageBasics


