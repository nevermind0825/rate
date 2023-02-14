import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/loanprogs/va.png"
import H3Header from "../../../components/mortgageBasics/h3header"




const Veteran = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            <p style={{color:"white",background:"var(--color-prime)",textAlign:'center',fontWeight:"700",margin:"0"}}>EXCEPTIONAL BENEFITS FOR THOSE WHO HAVE SERVED OUR COUNTRY</p>
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 1rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <H3Header data={"VETERANS CAN NOW LIVE THE DREAM OF HOMEOWNERSHIP!"} />
                    <br/><div style={{display:"flex",width:"90%",color:"var(--color-prime)",padding: "1rem 2rem" ,fontWeight:"700"}}>What is VA Loan?</div><br/>
                    <br /><span style={{ width: "90%", textAlign: "justified",fontWeight:"bold", padding: "1rem 2rem" }}>Despite the name, a VA Loan is not a loan made directly by the federal government or the Veteran’s Administration. It is a loan made by a qualified lender, guaranteed by the United States Department of Veteran Affairs (VA). The loan enables veterans and active duty personnel to purchase or refinance a home with favorable loan terms. The maximum VA loan amount varies depending on the county.</span>
                    
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Veteran