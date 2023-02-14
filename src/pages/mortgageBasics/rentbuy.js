import React from 'react'
import Layout from '../../components/Layout/layout'
import GoBackNav from '../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../components/HomeComponents/RelatedPosts/RelatedPosts'
import ImageDiv from '../../components/mortgageBasics/imageDiv'
import head from "../../images/mortgage_basics/rentbuy.png"
import ListULI from '../../components/mortgageBasics/list'
import thumb1 from "../../images/mortgage_basics/rentbuy/thumb1.png"
import thumb2 from "../../images/mortgage_basics/rentbuy/thumb2.png"


const data1 = [
    "Constant rent increase possibilities",
    "Filling landlords' pockets with money, instead of your own",
    "No tax breaks",
    "No financial gains",
    "No personalization",
    "No real privacy"
]

const data2 = [
    "Stability & Community",
    "Pride of ownership",
    "Tax deduction(s) Opportunities",
    "Equity & Savings",
    "Control of Upgrades",
    "The freedom to express style",
]

const scene = [
    {
        head: "SAVE MORE THAN $500 A MONTH WHEN YOU BUY VS. RENT",
        sub: "PURCHASE A $145,000 HOME WITH JUST 3% DOWN",
        li: [
            "Buy $963.90* 30-year fixed",
            "Rent $1,475 monthly"
        ]
    },
    {
        head: "SAVE MORE THAN $600 A MONTH WHEN YOU BUY VS. RENT",
        sub: "PURCHASE A $250,000 HOME WITH JUST 3% DOWN",
        li: [
            "Buy $1,609.49* 30-year fixed",
            "Rent $2,225 monthly"
        ]
    },
    {
        head: "SAVE MORE THAN $700 A MONTH WHEN YOU BUY VS. RENT",
        sub: "PURCHASE A $350,000 HOME WITH JUST 3% DOWN",
        li: [
            "Buy $2,261.60* 30-year fixed",
            "Rent $2,975 monthly"
        ]
    },
    {
        head: "SAVE MORE THAN $900 A MONTH WHEN YOU BUY VS. RENT",
        sub: "PURCHASE A $475,000 HOME WITH JUST 5% DOWN",
        li: [
            "Buy $3,055.46* 30-year fixed",
            "Rent $3,975 monthly"
        ]
    }
]


const Cont = () => {
    return (
        <div style={container}>
            <div style={uielem}>
                <div style={content}>
                    <h3 style={heading}>DISADVANTAGES OF RENTING</h3>
                    <ListULI data={data1} />
                </div>
                <img style={image} src={thumb1} />
            </div>
            <div style={uielem}>
                <img style={image} src={thumb2} />
                <div style={content}>
                    <h3 style={heading}>ADVANTAGES OF BUYING</h3>
                    <ListULI data={data2} />
                </div>
            </div>
        </div>
    )
}

const Foot = () => {
    return (
        <div style={footCont}>
            {scene.map(obj => {
                return (
                    <div style={{width:"40%"}}>
                        <h3 style={heading}>{obj.head}</h3>
                        <h4 style={subheading}>{obj.sub}</h4>
                        <ListULI data={obj.li} />
                    </div>
                )
            })}
        </div>
    )
}

const Banner = () => {
    return (
        <div style={bannerCont}>
            <h3 style={large}>CHECK THE FOLLOWING SCENARIOS BELOW</h3>
            <p style={small}>* computations may vary based on rates, insurance, and taxes related to the property </p>
        </div>
    )
}

const RentBuy = () => {
    return (
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav />
            <Cont />
            <Banner />
            <Foot />
            <RelatedPosts />
        </Layout>
    )
}

export default RentBuy

const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem 5rem",
}

const uielem = {
    display: "flex",
    width: "70%",
    justifyContent: "space-around",
    padding: "1rem 0rem"
}

const heading = {
    color: "var(--color-prime)",
    fontSize: "1.5rem",
    textAlign: "center",
    fontWeight: "600"
}

const subheading = {
    fontSize: "1.1rem",
    textAlign: "center",
    fontWeight: "400"
}

const content = {
    width: "60%"
}

const image = {
    width: "30%",
}

const footCont = {
    display: "flex",
    flexWrap: "wrap",
    columnGap: "2rem",
    padding: "1rem 5rem",
    justifyContent:"center"
}

const bannerCont = {
    padding: "1.3rem 1rem",
    backgroundColor: "#5F5E5A",
    textAlign: "center",
}

const large = {
    fontSize: "1.5rem",
    color: "#fff",
    fontWeight: "bold"
}

const small = {
    fontSize: ".7rem",
    color: "#fff"
}