import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/loanprogs/fha.png"
import H3Header from "../../../components/mortgageBasics/h3header"
import ListULI from '../../../components/mortgageBasics/list'


const data = [
    "Just 3.5% down. For less than a few months’ rent, you could be building equity in a home of your own.",

    "Easy qualification. Our FHA loans are more forgiving when it comes to your past credit.",

    "Fast and worry-free. We close most loans in 20 days or less. You may even be able to include your closing costs in the mortgage.",

    "Gift funds accepted. Family members are welcome to help out with your down payment.",
]

const FHA = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            <p style={{color:"white",background:"var(--color-prime)",padding:"0 1rem",textAlign:'center',fontWeight:"700",margin:"0"}}>FHA LOANS ARE GREAT FOR BUYERS WITH LOWER DOWN PAYMENTS AND ARE SOMETIMES EASIER TO QUALIFY FOR THAN A CONVENTIONAL LOAN.</p>
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 1rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <H3Header data={"IF YOU'VE BEEN PUTTING OFF BUYING A HOME BECAUSE YOU THINK YOU NEED A BIG DOWN PAYMENT, LET'S TALK ABOUT OUR FHA LOANS"} />
                    <br /><span style={{ width: "90%", textAlign: "left",fontWeight:"bold", padding: "1rem 1rem" }}>Our FHA loans are perfect for homebuyers with limited savings and easier to qualify for than you might think.</span>
                    <div style={{ width: "80%", display: "flex" }}>
                        <ListULI data={data} />

                    </div>
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default FHA