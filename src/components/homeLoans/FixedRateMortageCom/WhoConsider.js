import React from 'react';
import {list_container} from "../styles.module.css"

const list = [
    "Homebuyers who plan to stay in their new house for a long time",
    "Borrowers who don’t want to run the risk of interest rates increasing",
    "People buying a home when interest rates are at historic lows",
    "Borrowers with a steady income stream that’s likely to keep flowing for the foreseeable future",
]

const WhoConsider = () => {
    return (
        <section>
            <h2>Who should consider a fixed rate mortgage?</h2>
            <div>
                <p>Given the various fixed rate mortgage pros and cons to consider, what kind of borrower would be best served with this type of home loan?</p>
                <ul className={list_container}>
                    {
                        list.map((para,idx)=><li key={idx}>{para}</li>)
                    }
                </ul>
                <p>Remember: Even if interest rates drop significantly at some point in the future, dipping well below fixed mortgage rates today, you’re not completely out of options. You could always refinance your mortgage to take advantage of more favorable loan terms, including a lower interest rate.</p>
            </div>
        </section>
    );
};

export default WhoConsider;