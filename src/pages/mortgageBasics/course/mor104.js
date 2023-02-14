import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'
import head from "../../../images/mortgage_basics/tutorial/part4.png"
import { KeyConcepts } from './mor102'


const con = [
    "Mortgage rates are driven by investor demand",
    "Investors view mortgages as similar to bonds (lower risk, more stable return)",
    "Unpredictable consumer behavior makes mortgages more risky than “guaranteed” bonds like US Treasuries",
    "Investors expect higher rates of return for riskier scenarios (i.e. lower credit scores = higher mortgage rates, etc)"
]

const Mor104 = () => {
    return (
        // money down
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav url={"../../"} />
            <div style={{ padding: "2rem 3rem", fontSize: "1.15rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "80%", display: "flex", flexDirection: "column", alignContent: "center" }}>
                    <KeyConcepts data={con} />
                    <div>
                        We’ve covered the building blocks of mortgage rates. Now let’s discuss where mortgage rates come from. How are they decided? Why can they change? Why can they be so different from person to person?

                        <br /><br />At their most basic level, mortgages are like bonds (fixed-income investments where an investor fronts a lump sum and is paid back over time with interest). There are many types of bonds in the bond market and those that are similar to each other tend to move in the same direction based on investor demand. Movement in the bond market generally translates to movement in mortgage rates.

                        <br /><br />From there, lenders make additional adjustments to rates based on things like credit scores, down-payment amounts and other risk factors. Those adjustments rarely change, so day to day movement in an individual rate quote is almost always determined solely by bond market movement (unless your credit score rapidly changes or you decide to put a different amount of money down).

                        <br /><br />As discussed in our “What is a Mortgage?” article, the existence of mortgage rates depends on investor demand. At the simplest level, someone with money has to be interested in giving it to you so you can buy or refi a home and pay them back with interest over time.

                        <br /><br />Given that the investor could buy other investments (stocks, bonds, currencies, etc.) something about your mortgage has to get their attention. There are several pros and cons of investing in mortgages, but the most important factor is that mortgages offer a competitive rate of return without much more risk, compared to similar investments.

                        <br /><br />When we talk about similar investments, a mortgage would be most similar to a bond. A bond is considered a “fixed-income” investment because an investor pays a lump sum upfront in exchange for a fixed schedule of payments over time. Payments could occur monthly, semi-annually, etc.

                        <br /><br />Unlike most fixed-income investments, the borrower in the case of mortgages is a consumer. Contrast this to the biggest category of fixed-income borrowers: entire countries! For example, when it comes to US Treasury notes and bonds the borrower is the United States Treasury.

                        <br /><br />While the US and other major borrowers make debt payments for a guaranteed amount of time, consumers have choices when it comes to their mortgage. Consumers can CHOOSE to refinance or sell. That means the investment is retired. The investor gets their initial principal back and perhaps some of the interest they’re entitled to for the current month, but no further monthly payments. This could happen weeks, months, or years into a mortgage.

                        <br /><br />Other situations like foreclosure or short sale also prematurely end a mortgage. In some cases, the investor could lose some of their initial principal, but due to the structure of the mortgage market, that’s a rare occurrence these days. The unpredictable nature of consumers selling or refinancing is a much bigger issue.

                        <br /><br />Why would an investor care about getting their principal back early? Simply put, the investor is counting on making their money by collecting interest over time. In fact, investors often pay a premium for the right to collect monthly payments on a mortgage. If something cuts those payments short, the investor could LOSE money.

                        <br /><br />Here’s a practical example showing why an investor wouldn’t want to be paid back early:

                        <br /><br />$100,000 = Mortgage Loan Amount (principal)

                        <br /><br />$104,000 = What an investor might pay a mortgage company to obtain the loan

                        <br /><br />In this example the principal balance is still $100k. The investor paid a premium to obtain $100k of principal because the interest rate was attractive relative to other investment opportunities. The investor could have paid nothing for a loan with a substantially lower rate, but this rarely happens in the modern mortgage lending environment. Naturally, any time before the total amount of interest in the above example reaches $4k, the lender would like the borrower to continue making payments.

                        <br /><br />It’s worth noting that most mortgage transactions don’t simply involve one investor buying one mortgage. Investors will either buy lots of mortgages (so they are more likely to have plenty of mortgages remaining even if a few of them are paid back early), or they will simply buy a chunk of the same sort of portfolio. When multiple, similar mortgages are grouped together and sold off in those “chunks,” it’s a process known as securitization.
                    </div>
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Mor104