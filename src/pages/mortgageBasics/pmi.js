import React from 'react'
import Layout from '../../components/Layout/layout'
import GoBackNav from '../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../images/mortgage_basics/mi.png"
import ImageDiv from '../../components/mortgageBasics/imageDiv'
import H3Header from '../../components/mortgageBasics/h3header'
import ListULI from '../../components/mortgageBasics/list'

const data = [
    " Borrower-paid mortgage insurance (BPMI) is a pre-determined premium amount added to your monthly mortgage payment",
    "Lender-paid mortgage insurance (LPMI) allows borrowers to waive the monthly premium amount. The overall monthly payment is typically less than a loan with BPMI, even with a slightly higher interest rate.",
    "For conventional loans, the PMI may be eliminated once a minimum of 20% equity has been established]"
]

const PMI = () => {
    return (
        <Layout>
            <div style={container}>
                <ImageDiv src={head} />
                <GoBackNav />
                <H3Header data={"PRIVATE MORTGAGE INSURANCE (PMI) IS INSURANCE REQUIRED ON CONVENTIONAL LOANS WHERE THE LOAN AMOUNT IS GREATER THAN 80% OF THE PROPERTY VALUE OR PURCHASE PRICE"} ></H3Header>
                <div style={{padding:"0rem 10rem"}}>
                    <ListULI data={data} />
                </div>
                <RelatedPosts />
            </div>
        </Layout>
    )
}

export default PMI

const container = {}
const imageCont = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3rem",
}
const image = {
    width: "80%"
}