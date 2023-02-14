import React from 'react';
import {list_container} from "../styles.module.css"

const list = [
    {
        title:"30-year fixed rate mortgages",
        text:"The de facto standard home loan, 30-year mortgages offer affordable monthly payments due to the long loan terms."
    },
    {
        title:"15-year fixed rate mortgages",
        text:"Cutting the length of your loan in half means you’ll pay off your mortgage quicker, gain equity in your home faster and pay less interest overall. But as a tradeoff, you’ll owe more each month until you repay your loan."
    },
    {
        title:"40-year fixed rate mortgages",
        text:"Far less common than 30- or 15-year options, 40-year loans promise some of the lowest monthly payments possible — assuming you can find one. Be aware that this type of mortgage is the slowest option when it comes to building home equity."
    },
    {
        title:"FHA fixed rate loans",
        text:"The Federal Housing Administration insures fixed rate mortgages delivered through approved lenders, making it easier for more people to qualify for a home loan. Some of the biggest perks of an FHA loan include flexible down payment options and more lenient borrower qualifications."
    },
    {
        title:"VA fixed rate loans",
        text:"Active or former service members may qualify for fixed rate home loans supported by the Department of Veterans Affairs, better known as VA loans. If eligible, you may receive flexible down payment and financing terms that exceed even the FHA’s loan offerings."
    },
    {
        title:"USDA fixed rate loans",
        text:"Homebuyers living in rural communities may be able to secure a mortgage through the U.S. Department of Agriculture. Similar to VA mortgages, USDA loans offer very competitive financing terms, especially when it comes to your down payment options and qualification requirements."
    },
    {
        title:"Jumbo home loans",
        text:" Need a home loan that exceeds conforming limits? A jumbo fixed rate mortgage may be right for you. Due to the higher loan amount, your lender will likely require more stringent eligibility requirements, including higher credit scores, lower debt-to-income ratios and less flexible down payment options."
    },
]

const OptionFixedRate = () => {
    return (
        <section>
            <h2>What are your fixed rate loan options?</h2>
            <p>Most prospective homebuyers are familiar with the conventional 30-year mortgage, but look a little deeper and you'll find plenty of fixed rate home loan options to explore. Not all lenders will offer these loan terms, though, so it’s a good idea to shop around to find the best fixed rate mortgage for you.</p>
            <div>
                <ul className={list_container}>
                    {
                        list.map((item,idx) => <li key={idx}> <b>{item.title}</b> {item.text}</li>)
                    }
                </ul>
            </div>
        </section>
    );
};

export default OptionFixedRate;