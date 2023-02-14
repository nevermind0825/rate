import React from 'react'
import Layout from '../../../components/Layout/layout'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import head from "../../../images/mortgage_basics/tutorial/part3.png"
import { KeyConcepts } from './mor102'

const con = [
    "APR attempts to factor in upfront costs to deliver a true “cost of financing” which is typically higher than the interest rate on your mortgage",
    "APR relies on human input and variables that can be manipulated to a certain extent. Thus, it’s an imperfect measurement.",
    "A slightly lower APR from one lender may not necessarily be a better deal"
]

const Mor103 = () => {
    return (
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 3rem",fontSize:"1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "80%", display: "flex", flexDirection: "column", alignContent: "center" }}>
                    <KeyConcepts data={con} />
                    <div>
                        Before reading this section, make sure you’ve read about “upfront costs” in our mortgage rate definition article. Some upfront costs associated with a mortgage are considered “prepaid finance charges” in that they are only paid in order to obtain the mortgage and NOT tied to a tangible service.<br/>

                        <br/>EXAMPLE: Homeowners insurance is a tangible product that could (and should!) be paid for regardless of the presence of a mortgage. Therefore, it’s NOT a prepaid finance charge. A loan processing fee, on the other hand, is only something you’ll pay if you’re getting a loan and therefore IS a prepaid finance charge.<br/>

                        <br/>Prepaid finance charges (or PFCs) are neither good nor bad. They are not scandalous or uncommon. A loan without them isn’t necessarily a better deal than a loan with lots of them. And even if you’re told you’re not paying PFCs, most of them will still need to be paid by someone. Typically, this involves the lender offering a higher interest rate and then paying the PFCs for you. In that example, you’ve simply financed the PFCs by paying higher interest over time. Again, that’s neither good nor bad--just a choice between paying more upfront or more over time.<br/>

                        <br/>PFCs are most notable because they determine annual percentage rate (APR) of a loan. Lenders are required by law to disclose APR. This is a good idea in concept, but not so simple in practice. Regulators figure the requirement levels the playing field by forcing lenders to give consumers an idea of what the true cost of financing will be.<br/>

                        <br/>Indeed, the notion of quoting mortgage rates in terms of NOTE rates and upfront lender-related costs is fantastic and ideal. Unfortunately, regulators leave it up to lenders to do their own APR calculations. While most lenders do things the same way, others do things differently in order to quote a lower APR than their competitors. Some lenders are simply more conservative in what they define as a PFC because they want to avoid regulator scrutiny. Those lenders may have higher APR quotes than others even if every single upfront costs is exactly the same.<br/>

                        <br/>Bottom line, APR is not necessarily apples to apples. You shouldn’t blindly trust one lender’s APR over another. As tedious as it may be, the best way to compare quotes is to see what the upfront cost assumptions are line by line.<br/>
                    </div>
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Mor103