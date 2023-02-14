

import { navigate } from 'gatsby'
import React from 'react'
import * as styles from "./go.module.css"

const GoBackNav = ({url}) => {
    const go = url?url:"../";
    return (
        <h3 className={styles.banner}>
            <div className={styles.button}>Apply Now</div>
            <div onClick={() => navigate(go)} className={styles.button}>Back to Resource Center</div>
            <div className={styles.button}>Speak to an Expert</div>
        </h3>
    )
}

export default GoBackNav