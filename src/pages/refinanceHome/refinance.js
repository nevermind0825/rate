import React from 'react'
import Layout from '../../components/Layout/layout'
import ImageDiv from '../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../images/buyhouse/refi.png"
import H3Header from "../../components/mortgageBasics/h3header"
import ListULI from '../../components/mortgageBasics/list'


const data = [

    "Lower your monthly mortgage payment",
    " Lower your interest rate",
    "Eliminate private mortgage insurance (PMI)",
    "Lower your loan term to pay off your mortgage faster",
    "Turn home equity into cash for home improvements",
    "Pay off or consolidate debt"
]


const Refinance = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav url={"../"} />
            <div style={{ padding: "2rem 3rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignContent: "center" }}>
                    <H3Header data={"IF YOU'RE LOOKING TO LOWER YOUR CURRENT INTEREST RATE OR IF YOU'RE LOOKING TO CONSOLIDATE DEBT OR OBTAIN CASH FROM YOUR EQUITY, IT MAY BE A GOOD IDEA TO REFINANCE."} />
                    <ListULI data={data} />
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Refinance