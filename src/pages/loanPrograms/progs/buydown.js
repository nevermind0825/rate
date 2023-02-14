import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/loanprogs/buydown.png"
import save from "../../../images/loanprogs/savings.png"
import H3Header from "../../../components/mortgageBasics/h3header"


const data1 = [
    "Most people only stay in their mortgage for 5 to 7 years. Why not go for the lower rate?",

    "With an ARM, more of your payment goes toward the principal, so you pay down your mortgage faster"
]

const data2 = [
    "ARMs no longer feature pre-payment penalties, so you can easily refinance"
]


const data3 = [
    "A lower rate means a lower payment, which means more cash in your pocket each month"
]

const BuyDown = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            {/* <p style={{color:"white",background:"var(--color-prime)",textAlign:'center',fontWeight:"700",margin:"0"}}>EXCEPTIONAL BENEFITS FOR THOSE WHO HAVE SERVED OUR COUNTRY</p> */}
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 1rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <H3Header data={"TODAY'S ADJUSTABLE-RATE MORTGAGES ARE A LOT DIFFERENT THAN THEY WERE IN THE PAST"} />
                    <br /><span style={{ width: "90%", textAlign: "justified", fontWeight: "bold", padding: "1rem 2rem" }}>
                        We understand the expenses that come with a new home can be a stressful part of your homeownership journey. We're here to help! We want to help reduce those initial expenses for the home you love, which is why we’re offering a 2-1 Buydown Program. With this program, you can take advantage of a lower interest rate for two years.
                    </span>
                    <br />
                    <div style={{ display: "flex", fontSize: "1.5rem", width: "90%", color: "var(--color-prime)", padding: "1rem 2rem", fontWeight: "700" }}>
                        What is 2-1 Buydown?
                    </div>
                    <br />
                    <span style={{ width: "90%", textAlign: "justified", fontWeight: "bold", padding: "1rem 2rem" }}>
                        The 2-1 Buydown program is simple: one of our partners contributes an upfront fee, which lowers your interest rate by up to two percentage points for the first two years of your loan. This knocks down initial monthly payments, so you can allocate funds toward transforming a new house into a dream home, and enables you to build equity as you ease into your new home.
                    </span>
                </div>
            </div>
            <div style={{ width: "100%", backgroundColor: "var(--color-prime)",display:"flex",justifyContent:"center", padding: "2rem 0 0 0" }}>
                <div style={{ width: "60%", backgroundColor: "var(--color-prime)", textAlign:"center" }}>
                    <ImageDiv src={save} />
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default BuyDown