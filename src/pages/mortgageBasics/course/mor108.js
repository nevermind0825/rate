import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/mortgage_basics/tutorial/part8.png"



const Mor108 = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 3rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "80%", display: "flex", flexDirection: "column", alignContent: "center" }}>
                    <div>
                        <br /><br />Mortgage rates begin with you. Either you don’t have or don’t want to spend the cash to buy a home outright, so you’ll need a loan. You could get other loans from other places (borrowing against a 401k or life insurance plan, for instance), but for vast majority of people, a mortgage is the only viable option.

                        <br /><br />You have now created demand in the mortgage marketplace. You are willing to take on debt and pay interest over time. You are what many investors are looking for!

                        <br /><br />“Investor” is a broad term. In fact, if you have any investments that are managed funds (like a 401k), and if those funds have a “fixed-income” component, it’s quite possible that a percentage of that fund is allocated to bonds that are backed by mortgages. In that sense, even you are part of the “investor” side of the equation. The important part is that there is “money” out there looking for a home where it can generate a return for investors.

                        <br /><br />Most mortgages become investments via the securitization process. A government agency (or government-sponsored enterprise, like Fannie Mae and Freddie Mac) sets certain standards for loans it will insure. The agency also provides a framework that mortgage companies can use to evaluate (or “underwrite”) your loan scenario. If your scenario makes it through the agency’s hoops, your eventual mortgage is eligible to become part of a pool of similarly eligible mortgages. Mortgages grouped together in this way are called Mortgage-Backed-Securities or MBS.

                        <br /><br />MBS carry guarantees from one of the agencies mentioned above. These guarantees protect the investor in the event the mortgage borrower doesn’t make payments for any reason, and ensure they’ll receive all the interest and principal they would have otherwise received for as long as the underlying mortgage exists.

                        <br /><br />A tomato soup analogy:

                        <br /><br />It takes more than 50 independent commercial tomato growers to fuel operations for Campbell’s main processing facility (which handles soup, pasta sauce, and V8, among other tomato-based products). Different tomatoes from different farms will ultimately end up mixed together and packed into the same product, provided they meet the standards of Campbell’s as well as the FDA. The price at which growers are willing to sell has an impact on what Campbell’s pays for the tomatoes. The level of demand on the tomato soup aisle is also a factor.

                        <br /><br />In this analogy, a tomato would be an individual mortgage. A grower would be like a mortgage lender who produces big groups of similar individual mortgages. If those tomatoes/mortgages meet certain standards, they can be sold to someone like Campbell’s or Heinz (analogous to a large mortgage investor like Wells Fargo or Chase). This business relationship creates a wholesale marketplace for “large quantities of a certain product that meets certain standards.” The big players expect a few tomatoes/loans will be better or worse than the others, but because such large quantities are mixed together, the final product remains very consistent and predictable. If several of the tomato plants from a farm that sells to Campbell’s had really awful-tasting tomatoes, you would never know it by the time it gets to your table.

                        <br /><br />Whether we’re talking about tomatoes or mortgage loans, the logic is the same. When we have a high number of individual units meeting the same standards--especially when those units are destined to be mixed together anyway--it’s easy to establish a standard price at any given time based on supply and demand. It’s this price that has the most direct effect on what you’ll pay for tomato soup and the interest rate you’ll pay on your mortgage.

                        <br /><br />This “going rate” that big investors are paying for pools of mortgages (or in analogy terms, what Campbell’s and Heinz are paying for a truckload of tomatoes) is quite simple the price of a certain category of mortgage-backed-securities. These are essentially bonds with either an explicit or implicit guarantee from the US government. That means MBS prices move up and down with a high degree of correlation to the price of other government bonds of similar lengths of time.

                        <br /><br />The catch is that the consumer mortgages underlying the mortgage securities can be paid off any time (selling, refinancing, foreclosure, short sale) so they provide less predictable cash flow for investors than US Treasuries which will keep paying the same amount throughout their lifespan. The implication is that the average life-span of a pool of 30yr fixed mortgages ends up being in the neighborhood of 6-11 years depending on the real estate market and whether or not rates drop enough to cause a surge in refinancing.

                        <br /><br />Investors aren’t willing to pay as much for loans with cash flow uncertainty. If I have $100 dollars to invest in Treasuries or MBS, I’m going to expect a slightly higher rate of return on the MBS, because if a fifth of the loans in that pool of MBS refi or sell, then I’m left collecting interest on only $80 whereas if I’d bought the Treasuries, I could be assured of a lower rate of interest for the entire term.

                        <br /><br />This brings us to the first core concept of what drives mortgage rates: they tend to move a lot like US Treasuries of similar durations. What an investor loses in utter cash flow certainty, they gain in a higher rate of return. If that rate of return looks like a good deal compared to Treasuries, demand for MBS increases, and the effective rate of return falls. Vice versa if MBS returns look weak compared to Treasuries.

                        <br /><br />While it varies over time, the gap between a 10yr US Treasury yield and the average top-tier 30yr fixed mortgage rate quote has maintained a range of 1.55-2.0% since September 2012. More than any other factor, this is the foundation of the first several percentage points of any mortgage interest rate (in other words, take the 10yr Treasury yield and add 1.5-2%). That’s it. That’s the baseline. From there, it’s really just fine-tuning based on variables pertaining to you and your lender.

                        <br /><br />Lenders vary somewhat with respect to what they can/will offer in terms of rates. This can be affected by profit margins, number of employees, advertising/legal costs, and other factors that affect overall efficiency. A lower rate isn’t necessarily a better deal if there’s a higher risk that something unexpected happens during the course of your transaction. Plenty of mortgage-seekers have had amazing experiences paying a rock bottom rate to a highly efficient operation without getting a ton of one-on-one time with their loan officer. Plenty have had amazing experiences paying higher rates because it afforded a higher level of customer service. To be sure, some companies are just better than others, as they represent a sweet spot that balances the many factors driving the final cost of the loan. It’s equally true that some loan officers are better than others even inside the same company.

                        <br /><br />There are several reasons you might end up getting a loan quote from any given mortgage company. Maybe you get several. During this process, keep in mind that the mortgage company can only control the rates and fees that it charges. There are other fees associated with a mortgage. Frustratingly, it’s up to the mortgage company to quote those other fees as well. Some of them are more careful about underpromising and overdelivering on affordability. Others will attempt to minimize the appearance of 3rd party fees (the stuff you’re going to pay no matter whom you choose to do your loan) in order to give the appearance of a more competitive quote. When it comes to hard numbers, the ONLY basis for a direct comparison of one company’s rate to another is the interest rate itself and the fees charged by the mortgage company itself. From there, it’s up to you to decide how much value to place on trust, customer service, and other non-monetary considerations.
                    </div>
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Mor108