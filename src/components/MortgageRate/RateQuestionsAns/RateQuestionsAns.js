import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import {link_text_style, mortgageTyles } from "../mortgageCurrRate.module.css";
import ButtonRegular from '../../common/ButtonRegular';
import RateQ_A_section from './RateQ_A_section';
import { HomeAffidabilityCalculatorIcon, ImproveFinanceIcon, ResearchIcon, WatchMarketIcon } from '../../../utils/icons/mixIcons';
import { DollarsIcon, HomeValueIcon } from '../../../utils/icons/HomePageIcons';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';



const mortgageRates = [
    {
        question: "What is a mortgage rate?",
        paragraphs: [
            `Mortgage interest rates, calculated as a percentage of the overall loan, describe how much you’ll pay to borrow money for a home purchase throughout the duration of the loan. When determining the cost of  future mortgage payments, home interest rates are a consequential factor for borrowers to consider.`,
            "For example, a $100,000 30-year fixed mortgage might come with an interest rate of 3%, requiring the borrower to pay an additional 3% on top of their principal loan balance*. After years of making regular payments, the amount paid in interest begins to stack up and can become one of the more burdensome costs associated with mortgages.",
            "A fraction of a difference in home mortgage rates could end up saving the borrower thousands of dollars by the end of the loan’s term, and a one percent difference in mortgage rates can equate to at least a 10% difference in the monthly mortgage payment on your house**. That’s why one of the most important aspects borrowers should review when choosing a lender is the interest attached to the loan.",
            "When paying off a mortgage, your mortgage interest compounds, meaning that if the borrower misses a mortgage installment, interest will be charged on top of the interest already accrued.",
        ],
    },
    {
        question: "What factors into a mortgage rate?",
        paragraphs: [
            "Mortgage interest rates are heavily influenced by external factors like inflation, the Federal Reserve, your lender’s specific fees and other economic trends. These monetary forces work together to establish market norms and standardize current mortgage rates for lenders to follow.",
            "Given the constant ebb and flow of the real estate economy, many buyers will wait for the timing to be perfect before pursuing a home purchase. Even borrowers who can afford a mortgage in the current market might hold off on their purchase if the external pressure of the economy is expected to bring down home mortgage rates even further."
        ],
    },
    {
        question: "What is a good mortgage rate today?",
        paragraphs: [
            "The many different ways mortgage loans can be structured all have an influence on the loan’s interest rate. Different fixed rate mortgages and adjustable rate mortgages all have their own norms and standards that lenders will use to come up with an appropriate home interest rate for your situation.",
            "A good mortgage rate will depend on what mortgage plan you move forward with, your personal financial background and which lender you chose. Once you’ve settled on the type of mortgage loan structure that works best for you, it’ll be much easier to narrow down an ideal mortgage rate.",
            "More generally, a low mortgage rate will be determined by when you decide to enter the real estate market. The cost of mortgage borrowing is constantly fluctuating, changing the prospects and borrowing limits for borrowers year over year.",
            "For a better understanding of typical mortgage interest rates and how they evolve over time, let’s take a closer look at average mortgage rates since 2019."
        ],
    },
    {
        question: "Average mortgage rates since 2019",
        paragraphs: [
            "Since 2019, the real estate market has seen historic changes that have had a significant impact on mortgage interest rates. While rates remained relatively steady throughout 2019, the coronavirus pandemic changed the living priorities for millions of people, resulting in a rush of prospective homebuyers looking for a new home.",
            "According to Freddie Mac, a typical mortgage rate for a 15-year fixed loan in 2019 came with a 3.5% interest rate, down a half percentage point from the year before. Throughout 2020, however, mortgage rates saw started dropping during the COVID-19 outbreak. By December of that year, the national average mortgage rate for a home purchase on a 15-year plan fell to 2.2%.",
            "That trend continued in the early weeks of 2021, but ended with a rise in mortgage rates toward the end of January. As you can see in the graph and chart above, current mortgage rates can heavily fluctuate from year to year.",
        ],
    },
]


const mortgageRates_middle = [
    {
        question: "How does the interest rate differ from the annual percentage rate (APR)?",
        paragraphs: [
            `Also calculated as a percentage of the overall sales price, APR tells the borrower what they’ll be paying for all aspects of the home loan, in addition to interest. Intended to reflect the actual cost of borrowing money, APR is provided to the borrower in their loan estimate when considering lenders.`,
            `Loan origination fees, private mortgage insurance, closing costs and other charges are all included in the APR estimation, which is provided by the lender when shopping for a loan. On the other hand, interest rate only describes what you’ll be paying in interest every month.`,
            `While interest is a significant cost when repaying a loan, it’s not the only expense associated with mortgages. APR is used to give the borrower a better picture of what they’ll actually be paying each month by incorporating the full scope of a mortgage’s repayment.`,
        ],
    },
    {
        question: "",
        paragraphs: [
            `Some homeowners who are looking to reduce their monthly interest payment might decide to refinance rather than purchase a new home. Refinancing could allow these homeowners to adopt a new payment plan and shorter amortization schedule, leading to significant savings in the long term.`,
            `While mortgage refinance rates typically have the same rates as purchasing property, specific lenders might discount offers differently to incentivize customers and drive in desired business. Lower home mortgage rates might indicate that it’s time to refinance, but always be sure to consult with a lender to be sure you're getting a great mortgage rate.`,
        ],
    },
    {
        question: "",
        paragraphs: [
            `Closing on a mortgage loan can sometimes take weeks, and the rates offered at the start of the application process can change before the closing of the loan. That’s why borrowers can decide to either lock or float their interest rate when they first agree to a mortgage contract.`,
            `Locking a mortgage interest rate means that the rate attached to your mortgage won’t change throughout the duration of your mortgage’s completion. Borrowers that opt for a mortgage rate lock won’t need to pay more if mortgage rates go up before closing.`,
            `Floating a mortgage rate might be a better option if rates are expected to drop. If the real estate market looks like it’s turning in the favor of buyers, borrowers might decide to float their mortgage rate in the hopes that they can get a better deal down the line.`,
        ],
    },
    {
        question: "What are points?",
        paragraphs: [
            `Also known as discount points, points on a mortgage are tradeoffs offered by the lender that allow the borrower some flexibility and additional options when paying off a mortgage. Opting for these discounts can lower your mortgage rate in exchange for an additional upfront fee.`,
            `Points allow you to reduce your monthly payments by making an extra upfront payment that can lower your overall loan balance. In relation to the loan’s principal, each point is calculated as one percent. For example, one point on a $100,000 mortgage would come to an extra $1,000 paid at closing. By paying this extra $1,000 upfront, you will have reduced the amount borrowed for the home loan. Since your mortgage rate is calculated as a percentage of the overall loan, paying points will bring down the amount paid in interest throughout the repayment period.`,
            `Loans with points from a specific lender will generally have better mortgage rates, potentially lower than the same loan with zero points attached. Some buyers will shop around for lenders who can offer a low mortgage rate and then pay points on top of the loan to try and lower their mortgage payments even further.`,
        ],
    },
    
]

const mortgageRates_credit_Upper = [
    {
        question: "How credit scores affect your mortgage rate",
        paragraphs: [
            `Credit scores are an immensely important aspect when lenders decide on a mortgage rate.`,
            `While the housing market can establish average mortgage rates across the economy, the specific rate attached to your mortgage will also depend on your personal financial situation.`,
            `The biggest factor that will impact your personal mortgage interest rate is your overall financial history, represented as a credit score. Credit scores, usually expressed as a number between 500 and 850, provide an overall summation of a borrower's history of debt management and repaying loans.`,
            `Before letting you borrow thousands of dollars to buy a home, lenders will want to make sure you’re willing and able to carry the hefty cost of closing and repaying a mortgage. A credit score helps complete the picture of a borrower’s financial background by taking the length of your debt history, payment patterns, types of credit and other financial factors into account. Creditors will always use your credit score to determine the eligibility of a mortgage application.`,
            `If a borrower has a history of mismanaged loans or suffocating credit card debt, their credit score would be lower as a result. On the other hand, potential borrowers who demonstrate solid debt management skills and always make payments in a timely manner will have those qualities reflected in a higher credit score.`,
            `Here’s a look at how lenders perceive credit scores and what ranges they prefer before financing a loan:`,
        ],
    },
]
const mortgageRates_credit_data = [
    {left:"Less than 580", right:"Poor"},
    {left:"580 - 669", right:"Fair"},
    {left:"670 - 739", right:"Good"},
    {left:"740-779", right:"Very good"},
    {left:"800-850", right:"Exceptional"},
]
const mortgageRates_credit_Lower = [
    {
        question: "", // no question here
        paragraphs: [
            `Credit borrowers who have established patterns of well-managed debts and a limited amount of borrowing in their past will typically have a good credit score, falling in the range of 670-739.`,
            `Not only do scores in this range help your case for mortgage approval, but a higher credit score will also be an important advantage when your lender determines appropriate mortgage interest rates.`,
            `A higher score, in your lender’s eyes, means you’re much more likely to repay the loan and not find yourself overwhelmed with the cost of closing the mortgage or settling monthly payments. By establishing a good pattern of debt management, lenders won’t view lending you money as a risky decision. As a result, the cost of borrowing money will be reduced via a lower monthly mortgage rate.`,
            `When it comes to specific mortgage rates today, reliable borrowers will find themselves with a lower amount due in interest each month***.`,
        ],
    },
    {
        question: "",
        paragraphs: [
            
        ],
    }
]

const mortgageTypes = {
    title:"Different types of mortgages",
    para:"The mortgage rate that comes with your home loan will depend on which loan structure you decide to pursue. Here’s a look at a variety of mortgage types that might best suit your needs:",
    types: [
        {
            title:"30-year fixed conforming page",
            url:""
        },
        {
            title:"15-year fixed conforming mortgage",
            url:""
        },
        {
            title:"5-year ARM conforming mortgage",
            url:""
        },
        {
            title:"7-year ARM conforming mortgage",
            url:""
        },
        {
            title:"10-year ARM conforming mortgage",
            url:""
        },
        {
            title:"Jumbo mortgage",
            url:""
        },
        {
            title:"FHA conforming mortgage",
            url:""
        },
        {
            title:"VA conforming mortgage",
            url:""
        },
        {
            title:"Interest only mortgage",
            url:""
        },
    ]
}

const browData = [
    {
        title:"Mortgage payment calculator",
        url:"",
        // icon: <DollarsIcon width={40} height={40} />
        icon:"Group291"
    },
    {
        title:"Home affordability calculator",
        url:"",
        // icon: <HomeValueIcon width={40} height={40} />
        icon:"Homevalue1"
    },
    {
        title:"Home refinance calculator",
        url:"",
        // icon: <HomeAffidabilityCalculatorIcon  width={40} height={40} />
        icon:"Group25Copy"
    },
]


const aspectLeaderQuestion = [
    {
        question: "Are mortgage rates the only aspect to consider when choosing between lenders?",
        paragraphs: [
            `A 4% mortgage rate versus a 3% mortgage rate may not seem like a huge difference, but that one-percentage point translates into a huge difference in the monthly mortgage payment. Although the rate and monthly payments are a large factor when choosing a mortgage, it’s also important to focus on the level of service that different lenders provide.`,
            `Take into consideration the level of expertise of the loan officer. Are they knowledgeable about new laws and regulations regarding home loans? Ask about the speed of the process before making a final decision. Consider the lender’s reputation, ability to provide guidance for a smooth transaction (especially for a first-time homebuyer), and other costs such as points and fees, and APR.`,
            `To see personalized home mortgage rate quotes, reach out to a loan officer near you today.`,
        ],
    },
]

const low_mortgage_rate = [
    { 
        // icon: <ImproveFinanceIcon />,
        icon:"Group16",
        title:"Improve finances",
        para:"Taking the necessary steps to improve your credit score or save for a substantial down payment will help you get a low mortgage rate when the timing is right to apply for a loan.",
    },
    { 
        // icon: <WatchMarketIcon />,
        icon:"Group1333",
        title:"Watch the market",
        para:"Once your credit and savings are ready to take on a home purchase, keep a close watch on the real estate market outlook and its predictions. This will help you recognize the best opportunity for a home purchase.",
    },
    { 
        // icon: <ResearchIcon />,
        icon:"Group23",
        title:"Research",
        para:"Meeting with multiple lenders and understanding the full scope of your borrowing limits will also help you understand average mortgage rates today and who can offer the best deal possible.",
    },
]

const rateQuestion_QL = graphql`
    query rateQuestion_QL {
        borrowImgs: allFile(filter: {name: {in: ["Group291","Group25Copy","Homevalue1"]}}) {
            nodes {
            childImageSharp {
                gatsbyImageData
            }
            name
            }
        }

        low_mortgage_rate_imgs: allFile(filter: {name: {in: ["Group16","Group1333","Group23"]}}) {
            nodes {
            childImageSharp {
                gatsbyImageData
            }
            name
            }
        }

    }
`;
const RateQuestionsAns = () => {
    const {borrowImgs:{nodes:borrow_imgList},low_mortgage_rate_imgs:{nodes:lowMrtgImgList}} = useStaticQuery(rateQuestion_QL);
    // console.log(borrow_imgList);
    return (
        <div>
            <div>
                {
                    mortgageRates.map((qaSection,idx) => <RateQ_A_section  qaSection={qaSection} key={`idx_${idx}`} />)
                }
            </div>
            <div className='d-flex justify-content-center my-5'>
                <ButtonRegular label={"Apply today"} className='border-0 text-light px-4 py-2' style={{borderRadius:"12px"}} rounded={false} />
            </div>
            <div>
                <h2 className='my-2'>How to find a low mortgage rate</h2>
                <p style={{maxWidth:"100%"}}>Getting a low mortgage rate requires a combination of timing and preparation. While external economic factors play a heavy role in what lenders can offer, improving your own financial situation before applying can go a long way in driving down interest rates.</p>
                <div>
                    {
                        low_mortgage_rate.map((lowRateInfo,idx) =>{
                            const img = lowMrtgImgList.find(imgEl => imgEl.name === lowRateInfo.icon)?.childImageSharp;
                            return <div className='d-flex align-items-center' key={idx}>
                            <div >
                                <div style={{minWidth:"50px"}}>
                                    {/* {lowRateInfo.icon} */}
                                    <GatsbyImage image={getImage(img)} alt='' />
                                </div>
                            </div>
                            <div className='ms-3'>
                                <h4 className='my-1'>{lowRateInfo.title}</h4>
                                <p style={{maxWidth:"100%"}}>{lowRateInfo.para}</p>
                            </div>
                        </div>})
                    }
                </div>
            </div>
            <div>
                {
                    mortgageRates_middle.map((qaSection,idx) => <RateQ_A_section  qaSection={qaSection} key={`idx_${idx}`} />)
                }
            </div>
            <div>
                {
                    mortgageRates_credit_Upper.map((qaSection,idx) => <RateQ_A_section  qaSection={qaSection} key={`idx_${idx}`} />)
                }
            </div>
            <div>
                <ul>
                    {
                        mortgageRates_credit_data.map(item => <li className='my-1' key={item.left}><span style={{fontWeight:600}}>{item.left}</span> = {item.right}</li>)
                    }
                </ul>
            </div>
            <div>
                {
                    mortgageRates_credit_Lower.map((qaSection,idx) => <RateQ_A_section  qaSection={qaSection} key={`idx_${idx}`} />)
                }
            </div>
            <div>
                <h2>{mortgageTypes.title}</h2>
                <p>{mortgageTypes.para}</p>
                <div>
                    <ul className={mortgageTyles}>
                        {
                            mortgageTypes.types.map(list => <li key={list.title}>
                                <Link className={link_text_style} to={list.url}>{list.title}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
            <div>
                <h2>How much can you borrow?</h2>
                <p>The amount you’ll be able to borrow depends heavily on your personal finances and credit history. Be sure to take a look at our mortgage calculators for a better idea of what you can expect to pay for a mortgage:</p>
                <div className='row g-3'>
                        {
                            browData.map(browInfo =>{
                                const img = borrow_imgList.find(imgEl => imgEl.name === browInfo.icon)?.childImageSharp;
                                return <div className='col-12 col-sm-6 d-flex' key={browInfo.title}>
                                    {/* <div>{browInfo.icon}</div> */}
                                    <div>
                                        <GatsbyImage image={getImage(img)} alt='' />
                                    </div>
                                    <div className='ms-3'>
                                        <Link className={link_text_style}  to={browInfo.url}>{browInfo.title}</Link>
                                    </div>
                                </div>
                            })
                        }
                </div>
            </div>
            <div>
                {
                    aspectLeaderQuestion.map((qaSection,idx) => <RateQ_A_section  qaSection={qaSection} key={`idx_${idx}`} />)
                }
            </div>
        </div>
    );
};

export default RateQuestionsAns;