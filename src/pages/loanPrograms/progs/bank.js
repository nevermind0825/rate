import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/loanprogs/bank.png"
import H3Header from "../../../components/mortgageBasics/h3header"
import ListULI from '../../../components/mortgageBasics/list'


const data = [
    "Loans up to $3M",
    "No mortgage insurance required",
    "Available on primary and secondary homes, investment purchases and refinances",
    "As little as 6 months reserves required",
]

const Conventional = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            {/* <p style={{color:"white",background:"var(--color-prime)",textAlign:'center',fontWeight:"700",margin:"0"}}>EXCEPTIONAL BENEFITS FOR THOSE WHO HAVE SERVED OUR COUNTRY</p> */}
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 1rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <H3Header data={"A VALUABLE LOAN OPTION FOR THE SELF-EMPLOYED MAKE APPLYING FOR A MORTGAGE LESS TAXING BECAUSE YOU ALREADY HAVE ENOUGH TO DO"} />
                    {/* <br/><div style={{display:"flex",width:"90%",color:"var(--color-prime)",padding: "1rem 2rem" ,fontWeight:"700"}}>What is VA Loan?</div><br/> */}
                    <br /><span style={{ width: "90%", textAlign: "justified", fontWeight: "bold", padding: "1rem 2rem" }}>
                        If you’re self-employed, there usually aren’t enough hours in the day to get everything done. If you’re also in the market for a mortgage, it can be even more taxing. Fortunately, we offer Bank Statement Loans – sparing you the hassle of gathering tax documents and requiring you to submit bank statements for loans up to $3 million.
                    </span>
                    <div style={{ width: "80%", display: "flex" }}>
                        <ListULI data={data} />

                    </div>
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Conventional