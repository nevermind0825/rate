import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import head from "../../../images/mortgage_basics/tutorial/part2.png"
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import ListULI from '../../../components/mortgageBasics/list'



const con = [
    "Mortgage rates are interest rates on home loans",
    "There are really TWO mortgage rates: the interest rate (or “note rate”) applied to your loan amount\
    (or “principal”) and the rate implied by certain upfront costs (the “effective rate”).",
    "APR (Annual Percentage Rate) attempts to convey that “effective rate.”",
    "Understand the tradeoffs between upfront costs and payments over time"
]


export const KeyConcepts = ({data}) => {
    return (
        <>
            <span style={key}>Key Concepts</span><br />
            <div style={{ padding: "0rem 3rem" }}>
                <ListULI data={data} />
            </div>
        </>
    )
}

const Mor102 = () => {
    return (
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav url={"../../"} />

            <div style={container}>
                <div style={subcont}>
                    <KeyConcepts data={con} />

                    <span style={key}>Principal (definition):</span>

                    The current balance of a loan/mortgage. In the absence of any additional costs or fees, the initial principal balance of a mortgage is whatever was borrowed to buy the home. Let’s say you buy a $200,000 home and are able to make a $10,000 down-payment (an upfront payment that reduces the amount of money borrowed). The principal in this case would be $190,000.<br />

                    <br />Principal also refers to the remaining balance after a mortgage payment. Each payment is typically contains some interest for the lender and can also contain property taxes, homeowners insurance and mortgage insurance. Whatever is left over goes toward reducing the principal balance (the amount you owe, which is slightly different from a “payoff balance”). In other words, as you make payments, the amount you owe decreases. When that amount reaches zero, you own the home outright!<br />

                    <br /><span style={key}>Payoff vs Principal:</span><br /> If you’ve refinanced or sold a home before, you may have noticed that the amount required to pay off the old mortgage was slightly higher than the principal balance on the mortgage. This occurs because your monthly mortgage payment covers interest charged during the previous month. If you pay-off your loan in the middle of any given month, the lender hasn’t yet collected interest for that month. They’re not going to charge you for the entire month, however, only the number of days between the 1st of the month and the payoff date.<br />

                    <br />  For example, your mortgage payment on June 1st would cover interest for the month of May. If you pay off your loan on June 10th, the lender has not yet been paid interest for those 10 days, and will add them to your payoff amount. This is true for both purchases and refinances. Many lenders charge a small additional fee to obtain the payoff balance for administrative costs associated with an early payoff.<br />

                    <br /> <span style={key}> Mortgage Rates</span><br /> Mortgage rates are simply the interest rates applied to the principal balance, but there is an important distinction. What most people refer to as “mortgage rates” are actually only part of the equation. The more accurate term would be “note rates.” This refers to the interest rate on the promissory note (an official document that you’ll sign during the mortgage process).<br />

                    <br />  Think of the promissory note and the note rate as a sort of baseline for the overall cost of financing. While it’s true that the note rate is 100% responsible for determining the monthly mortgage payment, it’s typically NOT the only cost of financing. Most mortgages have an “upfront cost” component.<br />

                    <br /> <span style={key}>Upfront costs</span><br />  Upfront costs are charged by multiple parties (examples include: lender, appraiser, credit bureau, local government taxes, homeowners insurance companies, attorneys/title company, etc.) Most of these costs will not change regardless of the loan type or the lender, but some will.<br />

                    <br />   Upfront lender-related fees are common. They add to the overall cost of financing. Therefore, the NOTE rate differs slightly from the actual or “effective” rate you’re paying on your money.<br />

                    <br />   The Truth In Lending Act stipulates that lenders must quote that effective rate in the form of APR or annual percentage rate. If you don’t read anything else on APR, it’s important to know that not all lenders calculate them the same way, and APR can’t necessarily be trusted as an apples to apples comparison between two or more lenders.<br />

                    <br />   For the purposes of understanding mortgage rate building blocks, we’ll simply use the term “upfront costs.” Whether we’re talking about the interest portion of your mortgage payment or upfront lender-related costs, it’s all money that ends up going from your wallet to the lender. In most cases, you have some say in dividing up the lender’s upfront income versus their income over time.<br />

                    <br />   For instance, you will typically have the option to pay more upfront in exchange for a lower interest rate. The industry has long referred to this type of extra upfront payment as “points” or “discount points.” Despite any negative connotation from certain financial media pundits, points are neither good nor bad--simply a choice to pay now or pay later.<br />

                    <br />   Only you can decide which way makes most sense for your scenario. The only thing that really matters is the trade-off between the two choices.<br />

                    <br /> If you invest your extra cash and earn a certain rate of return, you may be better off minimizing your upfront costs and putting that money into your investments.<br />

                    <br />If, on the other hand, you wouldn’t be earning a great return on that money and you know you’ll have the mortgage for a long time, it may make sense to “buy down” the rate with additional upfront cost.<br />

                    <br />Your lender should be able to show you the difference between those options in terms of the number of months it will take to break-even on the additional upfront cost. For example, you would pay $1200 in extra upfront costs and $14 less per month in scenario B. It would take 86 months to break even because $1200/$14 = 86.

                    <br /><span style={key}>SCENARIO A:</span><br />

                    <br />Upfront costs: $5000<br />

                    <br />Payment: $2000 per month<br />

                    <br /><span style={key}>SCENARIO B:</span><br />

                    <br />Upfront costs: $6200<br />

                    <br />Payment: $1986 per month<br />
                    <span style={key}></span>

                    <br />86 months (or 7.16 years) is a fairly typical break-even time frame when you buy-down your rate. Break-evens vary from lender to lender and from rate to rate. In cases where the break-even time frame is 4-5 years or less, it’s an increasingly compelling option for people who plan to keep the new mortgage for a long time and who don’t have a great place to earn a high rate of return.

                    <br />The bottom line is that it’s your choice and there’s no right or wrong way to do it.

                    <br />In terms of understanding mortgage rates, the important concept is that of “upfront cost” vs “cost over time.” For any interest rate you hear about or see online, there are certain assumptions underlying that quote. It could be based on higher upfront costs than you had in mind or a higher credit score than you have (read more about how credit and other individual factors can affect rate. You won’t ever be able to know the actual rate until you know what those assumptions are.

                    <br /><span style={key}>NOTE:</span> In lieu of choosing a mortgage with a higher rate and lower upfront costs, you may be able to increase the new mortgage balance in order to pay the costs--sometimes referred to as “rolling in.” This would keep the interest rate the same, but the payment would still be slightly higher because the loan balance is slightly higher. You’d also need to consider the fact that you’ll have more principal to pay off when it comes time to sell or refinance. Even then, this can sometimes be a more appealing option than raising the rate to cover the costs--especially if the upfront cost savings happens to be minimal between the quoted rate and the next rate higher (remember, they vary from rate to rate and lender to lender).<br />
                </div>
            </div>

            <RelatedPosts />

        </Layout>
    )
}

export default Mor102

const key = {
    fontWeight: "bold",
    fontSize: "1.5rem",
    alignSelf: "flex-start",
    padding: "1rem 0rem"
}

const container = {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    fontSize: "1.15rem"
}

const subcont = {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 0"
}