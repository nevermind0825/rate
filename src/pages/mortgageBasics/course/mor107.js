import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/mortgage_basics/tutorial/part7.png"
import { KeyConcepts } from './mor102'
import ListULI from '../../../components/mortgageBasics/list'


const con = [
    "Understanding securitization (mortgages turn into bonds)",
    "Securitization makes rates lower and allows them to follow other bonds more closely",
]

const con2 = [
    "20 investors each buy 1 mortgage with a $200k principal balance",

    "1 of those loans will pay-off early and the investor will lose out on interest they would have otherwise collected (i.e. they’ll lose money)",

    "Conclusion: 19 investors made good money. 1 investor lost good money."
]

const con3 = [
    "The 20 loans are all evaluated based on a set of standards that ensures a certain level of similarity (i.e. loan amounts in a certain range, credit scores over a certain amount, all loans used to purchase a primary residence, all borrowers within a certain range of debt vs income).",

    "An agency that specializes in verifying all of the above stamps them with a seal of approval that allows them to go into 1 pool of mortgages.",

    "That pool is now like one big mortgage that allows investors to buy smaller chunks."
]

const Mor107 = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 3rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "80%", display: "flex", flexDirection: "column", alignContent: "center" }}>
                    <KeyConcepts data={con} />
                    <div>
                        There are a few ways investors could address the unpredictability problem associated with consumer behavior. They could either buy so many mortgages that their average loan lasts for an average amount of time OR the industry could create a standardized product that accomplishes the same goal and offers additional protections.

                        <br/><br/>Enter: Mortgage-Backed-Securities.

                        <br/><br/>Mortgage-Backed-Securities (or MBS) are what groups of similar loans turn into in order to be sold, bought, and traded. This process is known as “securitization.” To understand securitization, let’s consider a hypothetical scenario:

                        <br/><br/><ListULI data={con2}></ListULI>In that example, there was no in-between when it came to lender profitability, and no major differences between the 20 underlying loans. It was luck of the draw getting stuck with the one consumer who decided to sell or refinance. The other 19 investors are glad it didn’t happen to them, and they’d all be willing to give up a fraction of their profits in order to make sure it never happens to them. They’d love to have a way to equally share the risk--to have a 100% chance of small loss as opposed to a small chance of a big loss.

                        <br/><br/>Securitization makes this risk-sharing possible. Using the example above, here’s a simplification of how it works:
                        <br/><br/><ListULI data={con3}></ListULI>
                        If the average loan amount is $200k, then the same 20 investors could spend the same amount of money and buy the same 20 mortgages, only this time they’ll all share in the loss if 1 out of 20 loans pays off early, and they’ll all benefit from the high likelihood of 19 out of 20 remaining profitable. Moreover, by spreading the risk out and by using past precedent, they can reasonably estimate that 1 out of 20 will pay off early and adjust their purchase price accordingly.

                        <br/><br/>To understand why this is the case, imagine being offered a chance to buy one envelope that had a 95% chance of containing $100. How much would you pay given a 5% chance it would be empty? Now imagine 2nd envelope that had a 100% chance of containing of containing $95. Would you pay more?

                        <br/><br/>Naturally, most people (and most investors) would pay more for the 2nd envelope. By paying less for the first envelope, you’d be like a lender charging more money for additional uncertainty.

                        <br/><br/>The point is that the more certain lenders can be about risk and the more evenly it’s spread out, the less they have to charge to account for it. In this way, securitization helps rates stay lower than they otherwise would be.

                        <br/><br/>Securitization also makes for a more standardized product. This standardization means more investors are comfortable buying mortgages without personally evaluating each underlying loan. After all, those loans have had to pass through the same set of standards from an agency like Fannie Mae, Freddie Mac, The Federal Housing Administration, The Department of Veterans Affairs, etc.

                        <br/><br/>Imagine every tangerine at every grocery store being exactly the same. You’d have a really good idea of what you’d pay and what you could expect to get. You could even grab a whole bag of tangerines without having to check each one.

                        <br/><br/>A bag of tangerines in that example would be like a group of loans underlying a mortgage-backed-security (MBS). The price of tangerines would be like the price of MBS.

                        <br/><br/>If grocery stores had a surplus of tangerines , they might lower the price. Because you know exactly what you want to pay for tangerines, you’d see the good deal and take advantage of it. You’d be less likely to do so if you had to wonder how those tangerines tasted (maybe they’re on sale because they’d sub-par?!).

                        <br/><br/>Conversely, if there was a spike in demand for tangerines, prices might rise, and you might only buy them if you absolutely had to have them.

                        <br/><br/>But just like tangerines aren’t the only fruit in the produce aisle, MBS aren’t the only fixed-income investment in town. In fact, there’s an undisputed gold standard in the bond market: US Treasuries. Backed by the full faith and credit of the US Government, the US would have to be bankrupt in order for investors to not be paid back as expected. Treasuries are the regular old navel oranges of the bond market.

                        <br/><br/>Just like the supply and demand for tangerines could even be affected by the supply and demand for oranges, MBS prices are influenced by movement in Treasury prices.

                        <br/><br/>This relationship between US Treasuries and MBS is at the heart of interest rate levels and movement. The produce aisle would be like “the bond market.” Investors want to buy a certain amount of bonds for certain reasons just like grocery shoppers tend to buy a certain amount of produce. Sometimes it’s oranges. Sometimes it’s tangerines. Sometimes they’re just not in a citrus mood.

                        <br/><br/>So How Does Securitization Affect Mortgage Rates? Understanding securitization and MBS is important in understanding what moves mortgage rates for a few simple reasons. Securitization turns groups of mortgages into a commodity that can trade on the open market like other bonds. From an investor standpoint, these mortgage-backed securities (MBS) are very similar to other investment options in the bond market. Thus, whatever causes movement in broader bond markets tends to cause similar movement in MBS.

                        <br/><br/>As MBS prices rise, it means investors are willing to pay more to obtain mortgages. There’s an inverse relationship between price and rate. The more an investor pays, the lower a mortgage rate can be. If that’s confusing, just think of it like this: whether we’re looking at the beginning of a mortgage or the payments over time, there is CASH FLOW between the borrower and the investor. If the investor wants more money today than they did yesterday to do your mortgage, it means they’re either charging a higher interest rate, or paying your lender less upfront to buy the rights to the loan. By that same rationale, instead of paying more to buy the rights to the loan, the lender could instead lower the interest rate. Either way, there would be a decrease in cash flow to the lender.
                    </div>
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Mor107