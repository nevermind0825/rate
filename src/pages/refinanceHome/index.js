import React from 'react'
import Layout from '../../components/Layout/layout'
import refinance from "../../images/refinance/refinance.png"
import { navigate } from 'gatsby'
import * as styles from "./ref.module.css"

const RefinanceHome = () => {
    return (
        <Layout>
            <h3 className={styles.banner}>REFINANCE HOME</h3>
            <div className={styles.imageCont}>
                <img className={styles.image} src={refinance} onClick={()=>navigate("./refinance")} />
            </div>
        </Layout>
    )
}

export default RefinanceHome