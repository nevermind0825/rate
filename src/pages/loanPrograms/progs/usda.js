import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/loanprogs/usda.png"
import H3Header from "../../../components/mortgageBasics/h3header"
import ListULI from '../../../components/mortgageBasics/list'


const data = [
    "Special low rates for qualified borrowers",
    "100% financing – no down payment",
    "Seller credits may help pay for closing fees",
    "Potentially roll closing fees into your monthly payment",
]

const USD = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            {/* <p style={{color:"white",background:"var(--color-prime)",textAlign:'center',fontWeight:"700",margin:"0"}}>EXCEPTIONAL BENEFITS FOR THOSE WHO HAVE SERVED OUR COUNTRY</p> */}
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 1rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <H3Header data={"PURCHASE A RURAL HOME WITH NO MONEY DOWN"} />
                    {/* <br/><div style={{display:"flex",width:"90%",color:"var(--color-prime)",padding: "1rem 2rem" ,fontWeight:"700"}}>What is VA Loan?</div><br/> */}
                    {/* <br /><span style={{ width: "90%", textAlign: "justified", fontWeight: "bold", padding: "1rem 2rem" }}>USDentional loans can give you more flexibility when it comes to loan amounts versus government loans which generally have a cap. Find out how our firm’s conventional loan programs work and whether they might be the right home loan solution for you.</span> */}
                    <div style={{ width: "80%", display: "flex" }}>
                        <ListULI data={data} />

                    </div>
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default USD