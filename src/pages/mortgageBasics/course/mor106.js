import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/mortgage_basics/tutorial/part6.png"
import { KeyConcepts } from './mor102'


const con = [
    "Mortgage rates are driven by investor demand",
    "Investors view mortgages as similar to bonds (lower risk, more stable return)",
    "Unpredictable consumer behavior makes mortgages more risky than “guaranteed” bonds like US Treasuries",
    "Investors expect higher rates of return for riskier scenarios (i.e. lower credit scores = higher mortgage rates, etc)"
]

const Mor106 = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 3rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "80%", display: "flex", flexDirection: "column", alignContent: "center" }}>
                    <div>
                        At some point during the mortgage process, the contract interest rate (the one that ends up on the Promissory Note--the most official document stipulating the terms of repayment) must be “locked.” This means that there is an agreement between the borrower and the lender regarding what the contract rate will be. The rate-lock will also specify a date by which the mortgage must be closed and funded.

                        <br /><br /> <span style={{fontSize:"1.3rem",color:"var(--color-prime)"}}>Lock Time Frames </span>

                        <br /><br />Rate lock time frames can vary. Historically, the most common time frame had been 30 days. The regulatory changes of the post-meltdown era caused slightly longer turn-times for the various steps in the mortgage process, resulting in an increased prevalence of 45 and 60-day lock times. There continue to be shorter and longer lock time frames as well, depending on the lender. These include, but are not limited to 10, 15, 21, and 90 days.

                        <br /><br />In some scenarios, or among certain lenders, the borrower doesn’t have any input as to when and for how long the rate will be locked. The borrower may either agree to the lender’s lock policy or take their business elsewhere. In most cases, however, there is a certain degree of liberty when it comes to choosing “when” and “for how long” to lock. In these cases, mortgage originators will help manage expectations as to how quickly the process can be completed, with the generally understood goal being to set a lock window that leaves plenty of time for the loan to fund, but that also isn’t unnecessarily long.

                        <br /><br /><span style={{fontSize:"1.3rem",color:"var(--color-prime)"}}>Cost Considerations</span>

                        <br /><br />Why wouldn’t we want a lock time-frame that’s unnecessarily long? Bottom line: the longer the lock window, the higher the cost. When it comes to the mortgage process, costs associated with your rate can take the form of changes to the rate itself or changes to the upfront cost (discount or rebate) associated with that rate. Locking the same rate for longer means that the discount cost will be higher or the rebate will be lower. The relationship between days of lock time and cost isn’t always exactly linear, so it can make sense to weigh the risk and reward of various time frames.

                        <br /><br /><span style={{fontSize:"1.3rem",color:"var(--color-prime)"}}>When to lock</span>

                        <br /><br />There’s no universally correct answer to the question: “should I lock or float.” It’s one of the most thought-provoking and complex topics in the world of mortgage origination. There are too many variables for one methodology to be applicable to every scenario. It goes without saying that locking as early in the process as possible will always be the safest option for the borrower. It’s also unequivocally true that it’s historically the least profitable option on the average day from 1980 on. That said, this is only the case because interest rates have generally been moving lower since 1980! Not only that, but there have also been many times since 1980 where rates have risen brutally, in spite of the longer-term trend. In many of those cases, borrowers that failed to lock early enough in the process were either forced to accept a higher rate or simply never completed the process.

                        <br /><br /><span style={{fontSize:"1.3rem",color:"var(--color-prime)"}}>Purchase and Refi Lock Considerations</span>

                        <br /><br />When we talk about “never completing the process,” this could naturally be a very big problem in some cases. For example, rates can rise quickly enough that many borrowers can no longer qualify for the monthly payment. If they’re not locked, they simply cannot complete the mortgage. In the case of purchases, that could mean they just lost their earnest money deposit--not to mention the opportunity to buy the house they wanted or needed. Even in the case of refinances, failing to complete the mortgage can mean the loss of significant monthly savings or in more dire cases, much-needed cash for any number of purposes.

                        <br /><br />Because of these potential pitfalls, it’s almost universally wise to heavily consider locking as soon as the monthly payment and lock time frame make sense for your scenario, and to only forego locking if you’re prepared for the increased costs associated with an unforeseen rise in rates. If such a rate rise would jeopardize your qualification for the mortgage or even your willingness to complete it, locking is the only option.

                        <br /><br /><span style={{fontSize:"1.3rem",color:"var(--color-prime)"}}>Lock Extensions and Expirations</span>

                        <br /><br />Despite the best intentions and diligent participation among all parties, some mortgage are destined to run past their initial lock time frame. While there is no universal policy, most lenders are able to extend the lock time frame based on certain conditions. Most of the time, this will involve a predetermined cost, and in many cases, this is simply the difference in cost between your original lock time frame and the next tier. For example, if there was a 0.125% change in the discount points in order to lock for 60 days instead of 45, and assuming you locked for 45 days only to find it wasn’t going to be long enough near the end of the process, extending to the 60 day lock could be as simple as adding the 0.125% to your upfront costs in order to extend the lock for 15 days.

                        <br /><br />In other cases and depending on the lender, the situation can be far more severe--especially if rates have moved significantly higher since you first locked. It can absolutely be the case that going over the originally-agreed-upon lock time frame means that your loan will now have “worst-case” pricing. This means that you have to pay whichever is higher between the original cost of the lock time frame needed to complete the loan or the current market rate. If we’re only talking about something like the 0.125% from the previous example, that’s not a big deal, but if rates had moved significantly higher, that cost increase could easily be over 1.0%--enough to make anyone wish they’d chosen the longer lock window upfront.
                    </div>
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Mor106