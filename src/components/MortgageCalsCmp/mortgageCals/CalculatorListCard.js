import { Link } from 'gatsby';
import React from 'react';


const calculatorList = [
    {
        name:"Mortgage calculator",
        url:"/mortgage-calculators"
    },
    {
        name:"Home affordability calculator",
        url:"/mortgage-calculators/how-much-home-can-i-buy-calculator"
    },
    {
        name:"Closing cost calculator",
        url:"/mortgage-calculators/closing-cost-calculator"
    },
    {
        name:"Extra payment calculator",
        url:"/mortgage-calculators/should-i-make-extra-payments-calculator"
    },
    {
        name:"Refinance calculator",
        url:"/mortgage-calculators/should-i-refinance-calculator"
    },
    {
        name:"Mortgage points calculator",
        url:"/mortgage-calculators/when-to-pay-points-to-lower-rate-calculator"
    },
]



const CalculatorListCard = () => {

    return (
        <section className='py-4 my-5'  style={{backgroundColor:"#eff4f5", borderRadius:"10px"}}>
            <h2 className='my-4 text-center'>Home loan calculators</h2>
            <div className={`m-auto`} style={{maxWidth:"600px"}}>
                <ul className='row list-unstyled'>
                    {
                        calculatorList.map(calculator=><li 
                            className='col-12 col-md-6 my-3' 
                            key={calculator.name}
                        >
                            <Link 
                                className='linkSt text-decoration-none fw-bold' 
                                style={{color:"#1885a9"}} 
                                to={calculator.url} 
                            >
                            {calculator.name}</Link>
                        </li>)
                    }        
                </ul>
            </div>
        </section>
    );
};

export default CalculatorListCard;