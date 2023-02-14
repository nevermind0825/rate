import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/buyhouse/house.png"
import H3Header from "../../../components/mortgageBasics/h3header"
import ListULI from '../../../components/mortgageBasics/list'


const data = [

    "Your monthly income",
    "Your available funds for a down payment",

    "Your monthly expenses",

    "Your credit score",
]

const Afford = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 3rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "80%", display: "flex", flexDirection: "column", alignContent: "center" }}>
                    <H3Header data={"BEFORE YOU START SHOPPING FOR A NEW HOME, DETERMINE HOW MUCH YOU CAN AFFORD TO SPEND"} />
                    <ListULI data={data} />
                    <br/>It’s important to consider getting pre-approved by a licensed mortgage professional. An independent mortgage professional will be able to offer you several loan options and find the best available loan program for your needs.
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Afford