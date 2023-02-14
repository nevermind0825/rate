import React from 'react';
import {text_container, header_container, table_container} from "../styles.module.css"

const dataT = [
    {
        paymentDate:"Jul 2021",
        payment:"452",
        principle:"698",
        interest:"412",
        totalInterest:"456",
        balance:"14"
    },
    {
        paymentDate:"Jul 2022",
        payment:"652",
        principle:"658",
        interest:"432",
        totalInterest:"476",
        balance:"16"
    },
    {
        paymentDate:"Jul 2021",
        payment:"452",
        principle:"698",
        interest:"412",
        totalInterest:"456",
        balance:"14"
    },
]

const HowFixedLoanWork = () => {
    return (
        <section>
            <h2>How does a fixed rate loan work?</h2>
            <p className={text_container}>
                When you apply for a fixed rate mortgage, your lender will set an interest rate based on a wide variety of criteria — some of which is outside of your control. Treasury bond movement, mortgage lending industry trends and your personal finances (credit score, outstanding debt, income level, etc.) all factor into your interest rate. Once you’ve agreed to your loan terms, you won’t be able to change your interest rate unless you refinance your mortgage later.

            </p>

            <p className={text_container}>
                As noted above, one of the biggest benefits of a fixed rate mortgage is that your total monthly principal — i.e., the loan amount — and interest payments always stay the same. The only time you might see a fluctuation in your monthly housing costs would be to account for shifts in property taxes, homeowners insurance premiums or private mortgage insurance. Many people prefer a fixed rate mortgage loan because there are no unwelcome surprises. It’s truly the model of consistency.
            </p>

            <p className={text_container}>
                That doesn’t mean your mortgage payments will be divided between your principal and interest the same way every month, though. As your fixed interest rate mortgage amortizes, the amount of principal and interest you pay will change from month to month. A larger share of your mortgage payment may go to interest during the early days of your home loan, but over time, more of that money will be earmarked for the principal.
            </p>
            <p className={text_container}>
                Take a look at this hypothetical amortization schedule for a $165,000 home loan to see how your fixed rate mortgage payments evolve over time:
            </p>
            <div className={table_container}>
                <div className={header_container}>
                    <h6>Payment Date</h6>
                    <h6>Payment</h6>
                    <h6>Principal</h6>
                    <h6>Interest</h6>
                    <h6>Total Interest</h6>
                    <h6>Balance</h6>
                </div>
                <div>
                    {
                        dataT.map(amount => <div className={header_container} key={amount.balance}>
                            <p>{amount.paymentDate}</p>
                            <p>${amount.payment}</p>
                            <p>${amount.principle}</p>
                            <p>${amount.interest}</p>
                            <p>${amount.totalInterest}</p>
                            <p>${amount.balance}</p>
                        </div>)
                    }
                </div>
            </div>
            <p className={text_container}>
                As you can see, the total payment amount is the same each month, right down to the penny. But how that money is divided between the principal and interest steadily changes.
            </p>
            <p className={text_container}>
                That’s because you pay mortgage interest in arrears. In other words, the interest you owe in October is based on your loan balance in September, November is based on October’s loan balance, and so on. As your loan balance shrinks, the amount of interest you owe each month goes down as well until your mortgage is fully amortized.
            </p>
        </section>
    );
};

export default HowFixedLoanWork;