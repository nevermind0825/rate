import React from 'react'
import Layout from '../../../components/Layout/layout'
import ImageDiv from '../../../components/mortgageBasics/imageDiv'
import head from "../../../images/mortgage_basics/tutorial/part1.png"
import GoBackNav from '../../../components/mortgageBasics/gobackNav'
import RelatedPosts from '../../../components/HomeComponents/RelatedPosts/RelatedPosts'


const Mor101 = () => {
    return (
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav url={"../../"} />
            <div style={content}>
                When people want to buy something now, but don’t have (or don’t wish to spend)
                the cash to buy it outright, they can instead use a loan (aka financing, borrowing, debt).
                This typically involves an agreement between the consumer and a lender. The lender provides the big chunk
                of money today (that big amount that the consumer didn’t want to, or couldn’t spend) and the consumer agrees
                to make payments back to the lender over time. An example of this that almost everyone will be familiar
                with is auto financing (i.e. car payments).<br />
                <br />
                A mortgage is simply the financing of a home.<br />
                <br />

                Like an auto loan, a mortgage allows the consumer to legally own the underlying asset (car, home).
                Like auto loan paperwork, mortgage paperwork allows the lender to take back or “repossess” the underlying
                asset (aka “collateral”) if the consumer doesn’t pay as agreed, although the process is much more complex and
                time consuming. The idea is that if a consumer isn’t willing or able to honor the agreement, the lender can recoup
                some or all of their initial investment by taking the collateral (i.e. home, car) back and selling it.<br />
                <br />

                What’s in it for the Lender?<br />
                <br />

                Lenders don’t tend to lend money simply because consumers want loans. Lenders make money by offering loans because there is typically an interest rate attached to the loan.*
                <div style={{ padding: "0 3rem", fontStyle: "italic" }}>
                    <br />
                    *0% auto financing is a notable exception, but that’s typically only offered via factory financing in order to sell more cars.
                    Also, as you’ll see in our article about upfront costs versus monthly payments, a 0% payment rate doesn’t necessarily mean a
                    consumer is being charged 0% interest overall. For instance, the auto buyer with the 0% loan may have had to choose that loan over,
                    say, a $1500 cash back incentive. In that case, the buyer effectively paid $1500 in interest upfront in exchange for paying less over time.
                </div>
                <br />
                Interest is additional money beyond amount borrowed that allows the lender to profit from the transaction. In the mortgage world especially,
                interest and interest rates are fairly complex topics. Other articles in this series will help you learn as much as you want to know about mortgage rates.
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default Mor101

const content = {
    padding: "2rem 7rem",
    fontSize: "1.2rem",
    fontWeight: "600"
}