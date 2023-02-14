import React from 'react';

const benefitList = [
    {
        title:"Consistency",
        text:"You can easily predict what your mortgage payments will be from month to month because your interest rate always stays the same."
    },
    {
        title:"Simplicity",
        text:"Unlike the complexity of an ARM home loan, with adjustable rates and interest caps, fixed rate mortgages are relatively straightforward to understand for any borrower."
    },
    {
        title:"Affordability",
        text:"Fixed rate loans, especially 30-year mortgages, offer some of the lowest interest rates you’ll find, making them an ideal financing option for many homebuyers."
    },
    {
        title:"Safety",
        text:"With a fixed rate mortgage, you don’t have to worry about your interest rates — and by extension, your monthly payments — increasing at any point in the future."
    },
]

const BenifitFixed = () => {
    return (
        <section>
            <h1>What are the benefits of fixed rate mortgages?</h1>
            <p>
             It’s no coincidence that most homebuyers turn to fixed rate mortgages to finance their real estate purchases. Fixed rate loans are reliable, affordable and about as simple a financing vehicle as you’ll find in the mortgage lending industry. Let’s review the major benefits that fixed rate mortgages have to offer:
            </p>
            <ul>
                {
                    benefitList.map((para,idx)=><li key={idx}>{para}</li>)
                }
            </ul>
        </section>
    );
};

export default BenifitFixed;