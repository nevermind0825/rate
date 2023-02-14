import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/loanprogs/arm.png"
import H3Header from "../../../components/mortgageBasics/h3header"
import ListULI from '../../../components/mortgageBasics/list'


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

const Arm = () => {
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
                        And they may be the best choice for your purchase or refinance:
                    </span>
                    <div style={{ display: "flex", width: "90%", color: "var(--color-prime)", padding: "1rem 2rem", fontWeight: "700" }}>
                    ARMs are smarter
                    </div>
                    <div style={{ width: "80%", display: "flex" }}>
                        <ListULI data={data1} />
                    </div>

                    <div style={{ display: "flex", width: "90%", color: "var(--color-prime)", padding: "0rem 1rem", fontWeight: "700" }}>
                    ARMs are often safer
                    </div>
                    <div style={{ width: "80%", display: "flex" }}>
                        <ListULI data={data2} />
                    </div>

                    <div style={{ display: "flex", width: "90%", color: "var(--color-prime)", padding: "0rem 1rem", fontWeight: "700" }}>
                    ARMs can save you money
                    </div>
                    <div style={{ width: "80%", display: "flex" }}>
                        <ListULI data={data3} />
                    </div>

                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Arm