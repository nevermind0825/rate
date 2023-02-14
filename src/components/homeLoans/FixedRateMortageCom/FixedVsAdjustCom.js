import React from 'react';

import {text_container, list_container} from "../styles.module.css"

const paraList = [
    "Fixed rate mortgages stand tall in the lending industry, but adjustable rate mortgages (ARM) are no slouches either. An ARM loan handles interest very differently than a fixed rate loan, which homebuyers may find very appealing in some scenarios.",
    "Borrowers with ARM home loans will have the same interest rate for a set period of time — usually anywhere from 5 to 10 years. Once that fixed rate period ends, the lender will reassess the mortgage rate on a recurring basis. You’ll see ARM loans described as 7/6, 5/6, 7/6 and so on. The first number tells you how long that initial period is, while the second number tells you how often the interest rate will be reevaluated afterward.",
    "In the case of a 7/6 ARM, your mortgage would have a fixed interest rate for the first 7 years of the loan. After that, your lender would reassess the interest rate every six months until the loan is repaid.",
    "There are some advantages to an ARM, namely an often lower initial interest rate compared with fixed rate loans. Also, if mortgage rates go down in the future, you may be able to take advantage of lower interest rates once the fixed rate period ends.",
    "Of course, the opposite could be true as well: Your interest rate could increase down the road, exceeding current fixed mortgage rates. In that scenario, you might wind up paying more interest with an ARM than if you had gone the more conversative route with a fixed rate loan.",

]

const rightPara = [
    "Homebuyers have tons of home loan options to explore, and even choosing between broad loan categories like ARM vs. fixed rate mortgages can be tricky. Both financing options have their pros and cons to consider, and the right mortgage will often depend on your financial situation, what you prioritize most in a mortgage and what your risk appetite looks like.",
    "The truth is, there’s a fair amount of uncertainty that comes with an ARM home loan, especially compared with a fixed rate mortgage. You can’t say for sure what your interest rate will be 10 years from now, which means you won’t really know what your mortgage payments will look like down the road. Will you be financially prepared to shoulder higher housing costs a decade from now? It’s a worthwhile question to ask yourself when weighing your options.",
    "Because ARM interest rates are typically lower than comparable fixed rate loans — at least during the initial fixed term — it should come as no surprise that ARM loans are very popular for short-term homeowners. That may include people buying a starter home or newlyweds who plan to start a family sometime in the future but aren’t quite ready yet.",
    "You could come out pretty far ahead if everything breaks right with an ARM. You may land yourself in a situation where you enjoy a comparatively lower interest rate during your fixed rate period and then see mortgage rates drop when it’s time to reset your rate. Calling ARMs a gamble would be a bit of a stretch, but there’s certainly a risk/reward component that you need to consider.",
    "With a fixed rate loan, the only way to take advantage of lower mortgage rates would be to refinance. And a fixed rate mortgage refinance would involve paying additional fees and closing costs. Meanwhile, ARM users are not required to pay any lending fees or closing costs when interest rates are reassessed.",
    "Take an honest assessment of your future plans when deciding between a fixed or adjustable rate mortgage:"
]
const rateList = [
    "What will your finances look like?",
    "Do you plan to stay in one place for years to come?",
    "Are you willing to roll the dice that interest rates will go down over the next decade?",
]
const FixedVsAdjustCom = () => {
    return (
        <section>
            <h2>Fixed rate vs. adjustable rate mortgages</h2>
            <div className={text_container}>
                {
                    paraList.map((para,idx)=><p key={idx}>{para}</p>)
                }
            </div>
            <div>
                <h2>Fixed vs. adjustable rate mortgage: Which is right for you?</h2>
                <div className={text_container}>
                    {
                        rightPara.map((para,idx)=><p key={idx}>{para}</p>)
                    }
                    <ul className={list_container}>
                        {
                            rightPara.map((para,idx)=><li key={idx}>{para}</li>)
                        }
                    </ul>
                    <p>
                        Depending on how you answer these questions, either a fixed or adjustable rate mortgage could make the most sense.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FixedVsAdjustCom;