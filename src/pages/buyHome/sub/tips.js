import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import H3Header from "../../../components/mortgageBasics/h3header"
import ListULI from '../../../components/mortgageBasics/list'
import head from "../../../images/buyhouse/tips.png"




const con = [
    "KNOW YOUR BUDGET. Before looking at homes or applying for a mortgage, you need to know how much home you can afford. When calculating, make sure you research all the involved costs of buying, such as the down payment, insurance, property taxes, closing costs, and money for any additional expenses.",

    "THINK ABOUT PROXIMITY to work, school, or other locations, you frequent to ensure your new home is in a convenient area.",

    "CHOOSE A NEIGHBORHOOD. Think of the amenities and characteristics you need your new community to have. Once you choose an area, get all the statistical information about the neighborhood, such as local schools, crime stats, and access to local shops.",

    "USE A REALTOR. Getting help from a professional agent can alleviate stress from finding a home. They will offer their expertise and make finding your new home a quicker and more efficient process. Get recommendations from friends and family to find an experienced agent in your area.",

    "NEEDS VS WANTS. Prioritized your list of wants and needs and communicate these items to your realtor prior to viewing any homes.",

    "BRING ALONG A FRIEND OR FAMILY MEMBER. They can offer a second opinion, another set of eyes, and lend their expertise.",

    "TAKE LOTS OF PICTURES of the home's interior and exterior (especially any special features you want to remember). This will make it much easier when comparing homes later and making a final decision.",

    "LOOK FOR HIDDEN PROBLEMS and possible defects that the seller hasn't disclosed. Is there a rug or piece of furniture located in an odd space? There is a good possibility that its hiding a problem with the floor. Check all areas of the home as thoroughly as possible during your home inspection to avoid any surprises after closing.",

    "KNOW ALL ADDITIONAL COSTS such as home inspection fees, survey costs, taxes, HOA/Condo fees and property taxes."
]

const TipsBuyHouse = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 3rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "80%", display: "flex", flexDirection: "column", alignContent: "center" }}>
                    <div>
                        <H3Header data={"BUYING A HOME IS ONE OF THE BIGGEST INVESTMENTS YOU WILL EVER MAKE. BELOW ARE SOME TIPS TO ASSIST YOU IN MAKING YOUR BEST BUYING DECISION."} />
                        <ListULI data={con} ></ListULI>
                    </div>
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default TipsBuyHouse