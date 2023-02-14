import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/loanprogs/heloc.png"
import credit from "../../../images/loanprogs/lineofcredit.jpg"
import eqt from "../../../images/loanprogs/equity.jpg"
import H3Header from "../../../components/mortgageBasics/h3header"
import ListULI from '../../../components/mortgageBasics/list'


const data1 = [
    "Access to a line of credit up to a certain amount. You choose how much (or how little) to use",
    "Variable interest rate -- your interest rate could decrease if your credit improves or market interest rates drop",
    "Lower interest rate compared to other loan options, such as a personal loan",
    "Credit line available for use as you see fit (including emergencies)",
    "Interest-only payment options",
]

const data2 = [
    "Received a lump sum of money upfront",
    "Fixed interest rate and a fixed monthly payment",

    "Lower interest rate compared to other loan options, such as a personal loan",

    "Can't take out more money for an emergency without another loan",

]

const Heloc = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            <p style={{ color: "white", fontSize: "1.2rem", background: "var(--color-prime)", textAlign: 'center', fontWeight: "700", margin: "0" }}>
                See how a Home Equity Line of Credit or Home Equity Loan can be a better option for tapping into your home's equity.
            </p>
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 1rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <H3Header data={"What is a Piggyback Loan?"} />
                    <br />
                    <div style={{ display: "flex", width: "90%", color: "var(--color-prime)", padding: "1rem 2rem", fontWeight: "700" }}>
                        A piggyback loan is a second mortgage that you take out alongside your first mortgage. It can come in the form of a home equity loan or a home equity line of credit and has a variety of uses.
                    </div><br />

                    <section style={{ display: "flex", width: "80%" }}>

                        <div style={{ width: "50%" }}>
                            <br />
                            <span style={{ display: "flex", width: "90%", color: "var(--color-prime)", padding: "1rem 2rem", fontWeight: "700" }}>
                                Purchase or Refinance
                            </span>
                            <ListULI data={["Avoid Jumbo Loan price hits and guideline limitations by breaking your loan up into an agency first and a simultaneous piggyback second mortgage."]} />
                            <span style={{ display: "flex", width: "90%", color: "var(--color-prime)", padding: "1rem 2rem", fontWeight: "700" }}>
                                Put Less Money Down
                            </span>
                            <ListULI data={["Save money on your down payment and use that for landscaping, new furniture, appliances, etc."]} />

                            <span style={{ display: "flex", width: "90%", color: "var(--color-prime)", padding: "1rem 2rem", fontWeight: "700" }}>
                                Avoid Mortgage Insurance
                            </span>
                            <ListULI data={["By keeping your first mortgage loan-to-value at or below 80% will save you money every month."]} />
                            <br />
                        </div>

                        <div style={{ width: "50%" }}>
                            <br />
                            <span style={{ display: "flex", width: "90%", color: "var(--color-prime)", padding: "1rem 2rem", fontWeight: "700" }}>
                                Flexibility for Future spending with a HELOC
                            </span>
                            <ListULI data={["The piggyback second mortgage can be an adjustable rate HELOC. With this product, you can write checks for college tuition, home improvement, or a dream vacation as you wish, and it can be paid down at any time. Quick access to home equity in your home will give you peace of mind for emergency expenses."]} />

                            <span style={{ display: "flex", width: "90%", color: "var(--color-prime)", padding: "1rem 2rem", fontWeight: "700" }}>
                                Purchase a larger, more expensive home or take more cash out of your existing one
                            </span>
                            <ListULI data={["Piggyback 2nd mortgages typically allow you more options in purchase or refinance scenarios."]} />
                            <br />
                        </div>
                    </section>

                    <section style={{ display: "flex", width: "90%", justifyContent: "center", columnGap: "2rem" }} >
                        <div style={{ width: "50%" }}>
                            <img style={{ width: "100%" }} src={credit} />
                        </div>
                        <div style={{ width: "50%" }}>
                            <H3Header data={"What is a Home Equity Line of Credit?"} />
                            <span style={{ display: "flex", width: "100%", color: "var(--color-prime)", padding: "1rem 2rem", fontWeight: "700" }}>
                                A HELOC is a line of credit that is secured by your home, giving you a revolving credit line to use at your will. It can be used for large purchases such as renovations, tuition, or emergency expenses.
                            </span>
                            <ListULI data={data1} />
                        </div>
                    </section>

                    <section style={{ display: "flex", width: "90%", justifyContent: "center", columnGap: "2rem" }} >
                        <div style={{ width: "50%" }}>
                            <H3Header data={"What is a Home Equity Loan?"} />
                            <span style={{ display: "flex", width: "100%", color: "var(--color-prime)", padding: "1rem 2rem", fontWeight: "700" }}>
                                Similar to a cash-out refinance, a home equity loan will provide you with a lump sum of cash, as much as 95% of your home's equity. It acts as a 2nd mortgage, where a cash-out refinance transforms your first mortgage into a completely new mortgage.
                            </span>
                            <ListULI data={data2} />
                        </div>
                        <div style={{ width: "50%" }}>
                            <img style={{ width: "100%" }} src={eqt} />
                        </div>
                    </section>



                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Heloc