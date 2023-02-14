import React from 'react'
import Layout from '../../components/Layout/layout'
import home from '../../images/buy_home/home.png'
import tips from '../../images/buy_home/tips.png'
import { navigate } from 'gatsby'
import * as styles from "./buyHome.module.css"

const BuyHome = () => {
    return (
        <Layout>
            <h3 className={styles.banner}>BUYING A HOME</h3>
            <div className={styles.imageCont}>
                <img className={styles.image} src={home} onClick={()=>navigate("./sub/afford")} />
                <img className={styles.image} src={tips} onClick={()=>navigate("./sub/tips")}/>
            </div>
        </Layout>
    )
}

export default BuyHome