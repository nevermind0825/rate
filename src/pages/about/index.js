
import React from 'react'
import cer1 from '../../images/about/cer1.png'
import cer2 from '../../images/about/cer2.png'
import cer3 from '../../images/about/cer3.png'
import map from '../../images/about/map.png'
import why from '../../images/about/why.png'
import about from '../../images/about/about.png'
import Layout from '../../components/Layout/layout'
import * as styles from "./about.module.css"


const descOne = [
    "We are Nationwide Direct Lender and Broker with a very strong local presence.",
    "We offer Cutting Edge Loan Programs",
    "While mortgage loan programs are pretty much the same across the board, \
    whether it be FHA, Conventional, VA, or USDA. The fact remains,\
     there is no such thing as a one size fits all mortgage solution.",
    "We customize our loan to fits your needs",
];

const descTwo = [
    "We have the ability to underwrite and approve loans in house",
    "We maintain one of the highest closing ratios in the industry",
    "We offer some of the most competitive rates",
    "Our approach to approving loans is not a matter of if we can, but how we can",
    "We walk you through the process step by step",
];

const license = [
    {
        code: "AZ",
        dep: "Department of Financial Institutions",
        pin: "MB-0936630"
    },
    {
        code: "CA",
        dep: "Department of Business Oversight",
        pin: "60DB051380"
    },
    {
        code: "CO",
        dep: "Division of Real Estate",
        pin: "1434247"
    },
    {
        code: "CT",
        dep: "Department of Banking",
        pin: "MB-1434247"
    },
    {
        code: "DC",
        dep: "Department of Insurance, Securities, and Banking",
        pin: "1434247"
    },
    {
        code: "DE",
        dep: "Office of the State Bank Commissioner",
        pin: "22179"
    },
    {
        code: "FL",
        dep: "Office of Financial Regulation",
        pin: "MBR2075"
    },
    {
        code: "GA",
        dep: "Department of Banking and Finance",
        pin: "51127"
    },
    {
        code: "ID",
        dep: "Department of Finance",
        pin: "MBL-2081434247"
    },
    {
        code: "IN",
        dep: "Secretary of State Securities Division",
        pin: "1434247"
    },
    {
        code: "LA",
        dep: "Office of Financial Institutions",
        pin: "1434247"
    },
    {
        code: "MD",
        dep: "Department of Labor, Licensing, and Regulation",
        pin: "22043"
    },
    {
        code: "MI",
        dep: "Department of Insurance and Financial Services",
        pin: "FL0021417"
    },
    {
        code: "MN",
        dep: "Department of Commerce",
        pin: "MN - MO - 1434247"
    },
    {
        code: "NC",
        dep: "Commissioner of Banks Office",
        pin: "B - 169482"
    },
    {
        code: "ND",
        dep: "Department of Financial Institutions",
        pin: "MB103950"
    },
    {
        code: "NE",
        dep: "Department of Banking and Finance",
        pin: "1434247"
    },
    {
        code: "NJ",
        dep: "Department of Banking and Insurance",
        pin: "1434247"
    },
    {
        code: "NM",
        dep: "Financial Institutions Division",
        pin: "1434247"
    },
]



const About = () => {


    // console.log(env.REACT_APP_TOKEN)

    return (
        <Layout>
            <div className={styles.headCont}>
                <h2 className={styles.title}>About Us</h2>
                <span className={styles.line}></span>
                <h3 className={styles.subtitle}>Accomplishing your homeownership goals is our Top Priority!</h3>
            </div>
            <div className={styles.certCont}>
                <img className={styles.cert1} src={cer1}></img>
                <img className={styles.cert1} src={cer2}></img>
                <img className={styles.cert1} src={cer3}></img>
            </div>
            <div className={styles.whyCont}>
                <img className={styles.whyImage1} src={why}></img>
                <img className={styles.whyImage2} src={about}></img>
            </div>
            <h3 className={styles.banner}>Small enough to know you, Large enough to serve you.</h3>
            <div className={styles.listCont}>
                <ul className={styles.list1}>
                    {descOne.map(item =>
                        <li className={styles.listItem}>{item}</li>
                    )}

                </ul>
                <ul className={styles.list1}>
                    {descTwo.map(item =>
                        <li className={styles.listItem}>{item}</li>
                    )}
                </ul>
            </div>
            <h3 className={styles.banner}>Our experts can close your loan in as little as 7-15 days</h3>
            <div className={styles.licCont}>
                <table className={styles.table}>
                    <th className={styles.subtitle} colSpan={3}>
                        License Numbers
                    </th>
                    {
                        license.map(item =>
                            <tr>
                                <td >{item.code}</td>
                                <td>{item.dep}</td>
                                <td>{item.pin}</td>
                            </tr>
                        )
                    }
                </table>
                <div className={styles.imageCont}>
                    <img className={styles.mapImage} src={map} />
                    <button className={styles.callToday}>We are here to help! Call Today!</button>
                    <div className={styles.num}>
                        <h2 className={styles.ph}>240-552-5363</h2>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About