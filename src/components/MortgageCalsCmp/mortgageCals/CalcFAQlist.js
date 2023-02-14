import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import {MdArrowBackIos} from "react-icons/md";
import { makeHyperLink } from '../../../utils/makeHyperText';
import { ReactIcon } from '../../common/ButtonRegular';
import {calculate_faq_title,faq_question,cal_faq_accordian, mortgageTopArticle,mortgageTopArticle_img_wraper,mortgageTopArticle_img} from "./mortgage_cacl.module.css";

const FAQ_calculator = {
    title:"Mortgage calculator FAQ",
    faq_list:[
        {   id:"0",
            title:"What our mortgage calculator tells you",
            url:"",
            description: [
                {
                    text:"As you begin examining properties online as part of your homebuying search, you’ll want to know more than just the asking price of the home. Most likely, you’ll want to determine right away if you can afford it, and if you can, what the monthly payments will be when all is said and done.",
                    urls:[
                        {
                            name:"your homebuying search",
                            url:"https://www.rate.com/buying-a-house"
                        }
                    ]
                },
                {
                    text:"While you can always hastily make a few back-of-the-envelope calculations, this isn’t exactly a modern, error-free way to estimate future mortgage payments. What borrowers need is something simple, straightforward and digital. Guaranteed Rate’s simple mortgage calculator is such a tool. The home loan calculator gives you instant, customized results that could have huge implications for your homebuying journey.",
                    urls:[
                        {
                            name:"",
                            url:""
                        }
                    ]
                },
                {
                    text:"The mortgage process is complex and fraught with many potential pitfalls; that’s why it’s prudent to comparison shop to make sure you’re getting the best deal. Part of this involves enlisting a trusted, reputable bank or mortgage lender to help guide you through the process of securing an affordable mortgage you can trust.",
                    urls:[
                        {
                            name:"The mortgage process",
                            url:"https://www.rate.com/mortgage-process"
                        },
                        {
                            name:"the process of securing an affordable mortgage",
                            url:"https://www.rate.com/mortgage-process"
                        },
                    ]
                },
                {
                    text:"Because today’s customers are technologically savvy and proactive, many of them particularly enjoy having access to a customizable mortgage payment calculator during the homebuying process. It can be instrumental in helping you gain confidence in your purchasing power, weed out unaffordable properties early on in the process and provide crucial insight into how different loan terms and interest rates affect monthly mortgage payments.",
                    urls:[
                        {
                            name:"",
                            url:""
                        }
                    ]
                },
                {
                    text:"A good home loan calculator such as the one offered by Guaranteed Rate will account for all the critical homebuying factors such as home price, down payment, interest rate, loan term, property taxes, mortgage insurance and HOA fees. What’s more, our monthly mortgage calculator with down payments provides the borrower with clear results, breaking down the loan and monthly payment into its constituent parts to make it easier to understand. The pie chart is also a nice way to visualize costs.",
                    urls:[
                        {
                            name:"",
                            url:""
                        }
                    ]
                },
                {
                    text:"Smart, digital tools like the mortgage rate estimator allow prospective homeowners to explore a variety of pricing and rate options, run different scenarios and really get a grasp on potential costs and payments. A good monthly home mortgage calculator tells individuals not only if they can afford a selected home, but what kind of factors might influence future payments. Especially with rates, even the most minute change can have a big impact on your estimated mortgage payments.",
                    urls:[
                        {
                            name:"",
                            url:""
                        }
                    ]
                },
            ]
        },
        {
            id:"1",
            title:"How to use Guaranteed Rate’s mortgage rate calculator",
            url:"",
            description:[
                {
                    title:"",
                    details:[
                        {
                            text:"The free mortgage calculator is a versatile tool, as useful to an individual casually researching properties as it is to someone on the cusp of making a purchase. Let’s take a moment to go through the various moving parts of the home loan calculator to get a better understanding of what future mortgage payments might be by providing information for the following fields:",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        
                    ]
                },
                {
                    title:"Home price",
                    details:[
                        {
                            text:"The total sale price of a property agreed upon between buyer and seller.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        
                    ]
                },
                {
                    title:"Down payment",
                    details:[
                        {
                            text:"The amount of money given to the seller by a buyer upon purchase. The remainder of the total home price will be covered by a mortgage. If a buyer makes a down payment of less than 20%, the lender typically requires them to purchase private mortgage insurance (PMI). PMI protects the lender in the event of foreclosure.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        
                    ]
                },
                {
                    title:"Principal",
                    details:[
                        {
                            text: "The principal is the balance of the home loan or mortgage to be paid off. It’s calculated as the home price minus the down payment. For example, a $400,000 home purchased with a 20% down payment of $80,000, will have a principal balance at the beginning of the mortgage of $320,000.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        
                    ]
                },
                {
                    title:"Interest rate",
                    details:[
                        {
                            text: "This is the cost of obtaining a loan from a lender expressed as a percent. Your exact interest rate will be determined by your lender after consideration of several factors including inflation, Federal Reserve rates, your credit score, lending fees and the duration of the mortgage you’re seeking. See what our current mortgage rates are today and use them in your home mortgage calculator input above.",
                            urls:[
                                {
                                    name:"current mortgage rates are today",
                                    url:"https://www.rate.com/mortgage-rates"
                                }
                            ]
                        },
                        
                    ]
                },
                {
                    title:"Loan term",
                    details:[
                        {
                            text: "This is the duration of the mortgage, or the length of time you’re given to pay off the home loan in full. If you’re unsure which term length is right for you, explore different home loan options before using the house payment calculator.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                    ]
                },
                {
                    title:"Property taxes",
                    details:[
                        {
                            text: "The annual tax levied by the government on your property. The nationwide average is about $2,470 annually or just over 1.2% of the home’s assessed value. However, property taxes can vary widely state by state.",
                            urls:[
                                {
                                    name:"property taxes can vary widely",
                                    url:"https://www.rate.com/resources/where-do-my-property-taxes-go"
                                }
                            ]
                        },
                        
                    ]
                },
                {
                    title:"Homeowners insurance",
                    details:[
                        {
                            text: "The typical insurance policy that covers damages to your property as well as your possessions kept in the insured home. The average annual cost of homeowners insurance is $1,445. Like taxes, though, homeowners insurance costs can greatly vary from state to state depending on a range of factors.",
                            urls:[
                                {
                                    name:"$1,516.",
                                    url:"https://www.valuepenguin.com/average-cost-of-homeowners-insurance"
                                },
                                {
                                    name:"homeowners insurance costs",
                                    url:"https://www.rate.com/resources/what-is-homeowners-insurance"
                                },
                            ]
                        },

                        
                    ]
                },
            ]
        },
        {
            id:"2",
            title:"Mortgage payment calculator formula",
            url:"",
            description:{
                introduction:["The basic industry formula for calculating mortgage payment is as follows:",],
                formula:{
                    rule: "M = P i(1 + i)^n / (1 + i)^n – 1",
                    variable_int:"The variables are defined below:",
                    notes:[
                        "M = monthly mortgage payment",
                        "P = the principal amount",
                        "i = monthly interest rate. Typically, lenders like to present interest rates on an annual basis, so you’ll need to divide the percentage by 12 to determine the monthly mortgage. For example, if your interest rate is 3%, then the monthly rate will look like this: 0.03/12 = 0.0025.",
                        "n = the number of payments over the lifetime of the loan. If you take out a 30-year fixed rate mortgage, this means: n = 30 years x 12 months per year, or 360 payments.",
                    ]
                },
                conclusion:[
                    "Our simple mortgage calculator with taxes and insurance makes it easy to calculate your mortgage payment without the headache of performing the tedious math yourself—or worse, “guesstimating” what the payments might be.",
                    "With several primary inputs as well as additional advanced fields that account for PMI, homeowner’s insurance, zip code/property taxes and homeowner association fees, Guaranteed Rate’s home mortgage calculator incorporates almost every conceivable variable that could affect your mortgage costs.The result is an estimate of future monthly mortgage payments that you can rely on.* Furthermore, you can use this information to come up with a loan amortization schedule, like the partial one below ($300,000 mortgage with 3% interest)."
                ]
            }
        },
        {
            id:"3",
            title:"Determine your desired monthly mortgage payments",
            url:"",
            description:[
                {
                    text: "Lenders always want to reduce the inherent risk of lending money by performing extensive credit checks on potential borrowers to ensure they are financially sound candidates likely to repay the loan in full and on time.",
                    urls:[
                        {
                            name:"",
                            url:""
                        }
                    ]
                },
                {
                    text: "One of the key metrics they use is an industry ratio called debt-to-income ratio or DTI. It’s a valuable resource for lenders but it can also be helpful to borrowers by indicating what is realistically affordable on a monthly basis. For example, most lenders like to see a DTI ratio of 43% or less for a conventional loan, although under some circumstances, lenders will tolerate a DTI up to 50%. When DTI is surging past 40%, it could be a sign that you need to increase your income or look for a more affordable home.",
                    urls:[
                        {
                            name:"",
                            url:""
                        }
                    ]
                },
                {
                    text: "Additionally, it’s important to note that when tabulating debt vs. income, lenders aren’t typically mindful of accounting for leftover monthly cash you will need for discretionary spending, emergency funds, retirement savings, etc. That’s where your comfort level comes into play. Most homeowners don’t want to just scrape by; they want to have excess funds at the end of each month. Always take this into account.",
                    urls:[
                        {
                            name:"",
                            url:""
                        }
                    ]
                },
                {
                    text: "It can often be helpful to consult an industry-leading affordability calculator to help with these considerations. Historically, many financial advisors have suggested adhering to the 28/36 rule, which says to not spend more than 28% of your gross monthly income on housing expenses and only 36% of your income on overall monthly recurring debt (including housing).",
                    urls:[
                        {
                            name:"industry-leading affordability calculator",
                            url:"https://www.rate.com/mortgage-calculators/how-much-home-can-I-buy-calculator"
                        },
                        {
                            name:"28/36 rule",
                            url:"https://www.fool.com/the-ascent/mortgages/28-36-rule/"
                        },
                    ]
                },
            ],
        },
        {
            id:"4",
            title:"How mortgage rates affect your mortgage payments",
            url:"",
            description:[
                {
                    title:"",
                    details:[
                        {
                            text: "Mortgage rates play an outsized role in determining what your estimate mortgage payment (monthly) will be. They can be fixed or adjustable and the rates themselves will vary based on how the duration of the loan is structured. For example, 15-year loans come with lower interest rates than 30-year loans.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        {
                            text: "When you see housing analysts opine on the news that “it’s a good time to buy a home,” what they are usually referring to is the trend of the prevailing interest rates. In other words, there is an historical trajectory of interest rates that can be observed and understood in a larger macroeconomic context. Simply put, interest rates fluctuate and you’ll want to time the market to take advantage of any downward shifts in interest rates.",
                            urls:[
                                {
                                    name:"an historical trajectory of interest rates",
                                    url:"https://www.rate.com/research/national-30-year-rate"
                                }
                            ]
                        },
                        ,
                        
                    ],
                },
                {
                    title:"Understanding mortgage rates",
                    details:[
                        {
                            text:"A mortgage rate is essentially the interest rate you pay on the principal (the loan) you are borrowing from the lender. As you zero in on the house you want to buy, you’ll likely become very aware of the various mortgage rates available, the fluctuations in rates from lender to lender, as well as how the term of the loan, home location and your own creditworthiness pool together to affect the rate offered.",
                            urls:[
                                {
                                    name:"various mortgage rates available",
                                    url:"https://www.rate.com/resources/first-time-homebuyer-part-3"
                                }
                            ]
                        },
                        {
                            text: "To lock in an optimal interest rate, it’s helpful to possess both patience and decisiveness. Savvy homebuyers realize it’s crucial to conduct methodical research and tap the assistance of a knowledgeable, experienced loan officer who understands the housing market and is prepared to go the extra mile to guide you through the process and secure the best mortgage rate available.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        ,
                        
                    ],
                },
                {
                    title:"Loan terms and interest rates",
                    details:[
                        {
                            text: "On the above house loan calculator, you can see that it allows you to select a loan term (length of loan) anywhere from 10 years all the way to 30 years. Most prospective borrowers choose either a 15-year mortgage or a 30-year mortgage. Both selections have a marked effect on the interest rate you are offered.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        {
                            text: "Typically, a 30-year mortgage is chosen because borrowers want to spread out the costs of repaying the principal over a long duration. However, because the lender is being paid back slowly over many years there is greater built-in risk and that risk must be accounted for. To reflect this risk, the resulting interest rate is usually higher than what it would be for a 15-year loan." ,
                            urls:[
                                {
                                    name:"30-year mortgage",
                                    url:"https://www.rate.com/mortgage-rates/assumptions/30-year_fixed_conforming"
                                }
                            ]
                        },
                        {
                            text: "A 15-year mortgage carries less risk and is less expensive for the lender; therefore, the interest charged is almost always lower than a loan spread out over twice the period. You can also build equity in your home more quickly. That’s the good news. Of course, because you're paying the entire loan back in only 15 years, your premiums will be higher, which is to say, your monthly payment will be higher. Your personal financial situation will always dictate what you can afford on a monthly basis.",
                            urls:[
                                {
                                    name:"15-year mortgage",
                                    url:"https://www.rate.com/mortgage-rates/assumptions/15-year_fixed_conforming"
                                }
                            ]
                        },
                        {
                            text: "It’s recommended that you test out scenarios on our home mortgage calculator to see how interest rate changes as you shift back and forth between different loan terms. A simple 1.0% difference in interest rate—or even 0.5%—can result in you paying thousands of more dollars in interest over the life of the loan.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        ,
                        ,
                        
                    ],
                },
                {
                    title:"Adjustable interest rates",
                    details:[
                        {
                            text: "So far, we’ve been talking mostly about loans with fixed interest rates. However, there is another kind of loan where the interest rate changes periodically. These are called adjustable rate mortgages or ARMs.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        {
                            text: "ARMs typically come with lower introductory rates, meaning that the first few years may be less expensive than a fixed loan. However, after a set time, the mortgage rate adjusts to the prevailing interest rate, which can be either good or bad depending on the trend. The gamble frequently pays off if you’re only going to be living in your home for a few years. ARMs become more of a gamble, however, once the fixed-rate period ends (usually after five years) and your mortgage rate becomes subject to the fluctuations of the housing market.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        
                        
                    ],
                },
                {
                    title:"Other factors that affect interest rates",
                    details:[
                        {
                            text: "As mentioned above, there are other factors such as location and creditworthiness in the form of your credit score that also affect interest rates.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        {
                            text: "The best mortgage rates go to those individuals with very good or excellent credit scores that start around 740 or so on the FICO rating system. Since a credit score is a highly valuable tool in determining a borrower’s likelihood to repay a loan on time and in full, it’s also influential in determining interest rates. To account for risk, a lower credit score will result in a higher interest rate.",
                            urls:[
                                {
                                    name:"very good or excellent credit scores",
                                    url:"https://www.rate.com/resources/credit-score-chart"
                                }
                            ]
                        },
                        {
                            text: "Location also plays a role, albeit not an overly significant one. Where your new home is physically situated—the state and locale—has an affect on the mortgage rate. There are several factors at work here, notably a state’s foreclosure laws that could make it difficult for a lender to assume ownership of a property in the event of default. Rates can also differ between urban and rural areas, and state to state.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        
                        
                        
                    ],
                },
            ],
        },
        {
            id:"5",
            title:"Using Our Free Mortgage Calculator",
            url:"",
            description:{
                introduction:["Whether you’re almost ready to commit to purchasing a new home or just starting to do your research, a mortgage calculator can be an extremely handy tool to help plan your future. Use this mortgage payment calculator to better understand how your mortgage and monthly payments might look according to changes in the following inputs:"],
                details:[
                    {
                        title:"Home Price",
                        text:"The total sale price of a property agreed upon between buyer and seller."
                    },
                    {
                        title:"Down Payment",
                        text:"The amount of money given to the seller by a buyer upon purchase. The remainder of the total home price will be covered by a mortgage. If a buyer makes a down payment of less than 20 percent, the lender typically requires them to purchase private mortgage insurance (PMI) ."
                    },
                    {
                        title:"Private Mortgage Insurance",
                        text:"Not to be confused with homeowners insurance, PMI protects the lender's investment in the event that the borrower defaults on their loan. This allows lenders to extend offers to homebuyers who may not have the traditional 20% down payment."
                    },
                    {
                        title:"Principal",
                        text:"The balance of the home loan or mortgage to be paid off. This is calculated as the home price less the down payment. For a $350,000 home bought with a 10 percent down payment of $35,000 the principal balance at the beginning of the mortgage will be $315,000."
                    },
                    {
                        title:"Interest Rate",
                        text:"The amount that the lender charges a buyer for the home loan. Your exact interest rate will be determined by your lender after consideration of several factors including inflation, Federal Reserve rates, your credit score, and lending fees. See what our current mortgage rates are today and use them in your mortgage calculator input above."
                    },
                    {
                        title:"Loan Term",
                        text:"The duration of the mortgage, or the time you will have to pay off the home loan in full. If you’re unsure which term length is right for you, explore different home loan options before using the mortgage payment calculator."
                    },
                    {
                        title:"Property Taxes",
                        text:"The annual tax levied by the government on your property, used to cover a range of local expenses . The nationwide average is about $3,000 annually, or just over 1.2 percent of the home’s assessed value. However, property taxes can vary widely by location."
                    },
                    {
                        title:"Homeowners Insurance",
                        text:"The typical insurance policy that covers damages to your property as well as your possessions kept in the insured home. The average annual cost of homeowners insurance is $1,083. Like taxes, though, homeowners insurance costs can greatly vary from place to place."
                    },
                ],
                conclusion:["There are a lot of moving parts when it comes to moving into a new home. The above mortgage payment calculator is just one of tools available from Guaranteed Rate to help you make the most informed decision about your home purchase."],
            },
        },
        {
            id:"6",
            title:"Current mortgage rates",
            url:"",
            description:{
                introduction:[
                    "Monthly mortgage payments all typically have four things in common: principal, interest, taxes and insurance (also known as PITI ).",
                    "Our mortgage calculator includes principal and interest based on your input and estimates property taxes and insurance, which you can update for a more accurate monthly mortgage payment estimate. While you'll find PITI on virtually all mortgage payment breakdowns, you may also have other expenses, like:"
                ],
                details:[
                    {
                        title:"Private mortgage insurance (PMI)",
                        text: "s separate from homeowners insurance (if you input a down payment of under 20% in our calculator, you'll have a PMI estimate as well)."
                    },
                    {
                        title:"Depending on the home,",
                        text: " you may also have condo association or homeowners association (HOA)dues , though these are paid separately from your monthly mortgage bill."
                    }
                ],
                calculateMonthly:{
                    introduction: "As you can see above, mortgage rates heavily affect your mortgage payments. As such, it pays to know current mortgage rates:",
                    linkList:[
                        {
                            title:"15-year fixed conforming mortgage",
                            url:""
                        },
                        {
                            title:"30-year fixed conforming mortgage",
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
                    ],
                    button:{
                        title:"Apply Now",
                        url:""
                    }
                },
                conclusion:[],
            },
        },
        {
            id:"7",
            title:"Typical costs within mortgage payments",
            url:"",
            introduction:"As is evident in the breakdown within Guaranteed Rate monthly mortgage payment calculator, there are several main components that comprise the costs within mortgage payments.",
            linkList:[
                {
                    title:"Monthly principal",
                    url:""
                },
                {
                    title:"Interest",
                    url:""
                },
                {
                    title:"PMI",
                    url:""
                },
                {
                    title:"Estimated property taxes",
                    url:""
                },
                {
                    title:"Estimated homeowner's insurance",
                    url:""
                },
                {
                    title:"HOA (homeowner’s association fees), if applicable",
                    url:""
                },
            ],
            conclusion:"Not every individual borrower has to pay every one of the above expenses, but these are the typical costs rolled into your monthly mortgage payments. Homeowners should see the breakdown on their monthly statements.",
            note: "The full cost of obtaining a mortgage includes other charges and fees not included as part of your estimated monthly mortgage payment. These other charges include origination fees, closing costs, discount point costs, title fees, etc. Inquire with your lender and ask about APR to find out more.",
            payPoints:[
                {
                    title:"Monthly principal",
                    text:[
                        {
                            text: "The monthly principal is determined by taking the entire principal and then dividing it by the term of the loan (30, 15, etc) and then further dividing that number by 12. For example, a fixed loan for $300,000 with a 30-year mortgage would result in monthly payments of $833.00 ($300,000 / 30 /12 = $833.33).",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        
                    ],
                },
                {
                    title:"Interest",
                    text:[
                        {
                            text: "This is the interest charged on your principal. The Guaranteed Rate home loan calculator combines interest rate and principal into one figure in the monthly mortgage payment breakdown. Together, these two costs comprise the bulk of your monthly estimated mortgage payment.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                    ],
                },
                {
                    title:"PMI",
                    text:[
                        {
                            text: "If you fail to put down the recommended 20% down payment when buying a home, in many cases you will be required to purchase private mortgage insurance or PMI. PMI is a lender’s insurance against a borrower defaulting on the loan. And it’s another component of a good free mortgage calculator.",
                            urls:[
                                {
                                    name:"private mortgage insurance or PMI",
                                    url:"https://www.rate.com/resources/what-is-private-mortgage-insurance"
                                }
                            ]
                        },
                        ],
                },
                {
                    title:"Estimated property taxes",
                    text:[
                        {
                            text: "The main reason home loan calculators ask for your zip code is so they can estimate your property taxes. Taxes vary by state and may change from year to year as new legislation is enacted. Regardless, taxes make up a significant part of your monthly mortgage payment.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        ],
                },
                {
                    title:"Estimated homeowner’s insurance",
                    text:[
                        {
                            text: "As a monthly cost, homeowner’s insurance can vary wildly state by state. The average cost is $120 per month.",
                            urls:[
                                {
                                    name:"average cost",
                                    url:"https://www.valuepenguin.com/average-cost-of-homeowners-insurance"
                                }
                            ]
                        },
                        ],
                },
                {
                    title:"HOA",
                    text:[
                        {
                            text: "HOA, or homeowners association fees, are dues collected by a homeowner’s association to cover property maintenance, repairs and certain amenities. These fees are not applicable in all neighborhood settings; they’re most common in the context of condominiums, co-ops and planned residential communities that put a premium on improving properties, keeping them clean and providing a cooperative spirit.",
                            urls:[
                                {
                                    name:"",
                                    url:""
                                }
                            ]
                        },
                        {
                            text: "HOA fees can run the gamut between $100 to $700 per month; on average, however, fees tend to be about $200. If applicable, they are rolled into your monthly mortgage payment as seen in our home loan calculator.",
                            urls:[
                                {
                                    name:"on average, however, fees tend to be about",
                                    url:"https://www.forbes.com/advisor/mortgages/hoa-fees/"
                                }
                            ]
                        },
                        
                        
                    ],
                },
            ],
        },
        {
            id:"8",
            title:"What does an amortization schedule show",
            url:"",
            introduction:"An amortization schedules shows all payments throughout your loan and how much goes towards the principal vs. interest. Below you'll see a partial example of what an amortization schedule might look like for a $165,000 loan.",
            tableData:{
                head:{
                    payment_date:"Payment Date",
                    payment:"Payment",
                    principal:"Principal",
                    interest:"Interest",
                    total_interest:"Total Interest",
                    balance:"Balance"
                },
                data:[
                    {
                        payment_date:"Jul 2021",
                        payment:"1,264.81",
                        principal:"514.81",
                        interest:"750.00",
                        total_interest:"750.00",
                        balance:"299,485.19"
                    },
                    {
                        payment_date:"Aug 2021",
                        payment:"1,264.81	",
                        principal:"516.10",
                        interest:"748.71",
                        total_interest:"1,498.71",
                        balance:"298,969.09"
                    },
                    {
                        payment_date:"Sep 2021",
                        payment:"1,264.81	",
                        principal:"517.39",
                        interest:"747.42",
                        total_interest:"2,246.14",
                        balance:"298,451.70"
                    },
                    {
                        payment_date:"Oct 2021",
                        payment:"1,264.81",
                        principal:"518.68",
                        interest:"746.13",
                        total_interest:"2,992.26",
                        balance:"297,933.02"
                    },
                    {
                        payment_date:"Nov 2021",
                        payment:"1,264.81",
                        principal:"519.98",
                        interest:"744.83",
                        total_interest:"3,737.10",
                        balance:"297,413.04"
                    },
                ],
            },
        },
        {
            id:"9",
            title:"How to reduce your future mortgage payments",
            url:"",
            description:[
                {
                    title:"",
                    text:[
                        "While a house payment calculator can crunch the numbers, run scenarios and provide an informed glimpse of many potential monthly costs, saving money on your future payments is up to you.",
                        "Once you’ve secured the loan from your lender of choice, there’s not a whole lot you can do to proactively reduce your monthly mortgage payment except patiently wait for an opportunity to refinance once interest rates plummet below your original locked-in rate. That said, there are some things you can do in the pre-purchase stage to ensure your mortgage payments are as low as possible.",
                    ]
                },
                {
                    title:"Select the right loan term",
                    text:[
                        "The great thing about the mortgage loan calculator is that you can plug in various conditions and observe how they affect your monthly mortgage payments. If you think the 15-year loan that you originally sought is too expensive now that you see the results, keep adjusting the terms. A longer-term loan agreement will provide lower monthly payments. One caveat: Lower monthly payments represented in a 30-year mortgage will be accompanied by higher interest rates and more interest rate payments overall."
                    ]
                },
                {
                    title:"Put the dream house on hold (for now)",
                    text:[
                        "Everybody wants to buy a dream home but dream homes are frequently more expensive, and more expensive homes mean higher monthly payments. Shop around. Go without some of your previously prioritized amenities and see if that doesn’t drastically reduce your payment. To be sure, use the mortgage calculator with taxes and insurance as a pricing tool."
                    ]
                },
                {
                    title:"Pony up the recommended down payment",
                    text:[
                        "One of the best ways to reduce your monthly payments is by avoiding the added expense of PMI. As explained above, you can accomplish this by providing a down payment to your lender that is 20% of the cost of your new home.",
                        "Of course, for many homebuyers in today’s increasingly expensive housing market, saving the required 20% is difficult, if not impossible. PMI makes it possible to buy at today's prices with a smaller downpayment and it can be cancelled later on as equity and value are built (typically once 22% of equity is established in your home)."
                    ]
                },
                {
                    title:"Get the best interest rate",
                    text:[
                        "While you’re not likely to affect your interest rate at the last moment with a slight uptick of your credit score (note: you need to work on that over a period of years), the aforementioned down payment can help you reduce monthly mortgage costs. The higher the down payment, the less principal there is to pay off; the less principal to pay off, the lower the risk to the lender. This reduction of risk is passed onto you in the form of lower mortgage rates."
                    ]
                },

            ],
        },
        {
            id:"10",
            title:"Other mortgage calculators",
            url:"",
            description:{
                introduction:[
                    "When it comes to purchasing a home, figuring out all the associated costs can put your math skills to a test. That’s why, in addition to the free mortgage calculator with down payments, Guaranteed Rate offers homebuyers a robust selection of other mortgage-related calculators to help borrowers evaluate financing and make smart decisions.",
                    "Use these innovative industry tools in combination with your own due diligence and the trusted advice from your loan officer."
                ],
                details:[
                    {
                        title:"Refinance calculator",
                        url:"",
                        text:" A refinance calculator can help guide you in your decision on whether to seek a refi or not. It allows you to input the terms and costs of the original loan alongside those of your proposed refinanced loan. It calculates savings on a monthly basis as well as at a predetermined time in the future when you might want to sell.",
                    },
                    {
                        title:"Home affordability calculator: ",
                        url:"",
                        text:"Rather than merely asking out loud, “What can I afford?” use the Guaranteed Rate home affordability calculator to determine the purchase price, down payment and monthly payment you’re comfortable paying.",
                    },
                    {
                        title:"Closing cost calculator:",
                        url:"",
                        text:"Closing costs can sneak up on a borrower. Use this tool to better estimate closing costs and associated charges that you will be expected to pay when buying a home or conducting a refinance.",
                    },
                    {
                        title:"Fixed rate mortgage calculator",
                        url:"",
                        text:"Homebuyers often seek additional clarity when choosing between a loan with lower monthly payments over a longer period of time and a loan with higher monthly payments but a shorter loan duration and a lower interest rate. This tool allows you to compare the pros and cons of both 15- and 30-year fixed rate mortgage loans.",
                    },
                    {
                        title:"Rent or buy calculator",
                        url:"",
                        text:"If you’re vexed by the question of “Should I buy now or should I rent?” then this calculator is for you. It helps you draw clear financial conclusions that enable you to decide between these two options.",
                    },
                    {
                        title:"Extra payments calculator",
                        url:"",
                        text:"The allure of extra payments is that you can pay off your home loan more quickly. However, these types of payments—either recurring or lump sum— don’t always have the intended effect. This tool provides insight into extra payments and whether or not the increased financial burden will enable you to save money and pay off your home loan faster.",
                    },
                    {
                        title:"Mortgage points calculator",
                        url:"",
                        text:" Those looking to buy a home or refinance are often held captive by the current interest rate environment, which can be high or low depending on broader economic factors. One way to take things into your own hands is to buy down the interest rate using discount points; in essence, pay a fee directly to the lender at closing in order to secure a more favorable interest rate. This calculator lets you know whether paying for points is worth the added cost.",
                    },
                ]
            },
        },
        {
            id:"11",
            title:"Calculate your mortgage payments today",
            url:"",
            description:[
                {
                    text:"The process of selecting your new home—and the mortgage that accompanies it—can be both an exhilarating and exhausting activity. Preparation is key. The momentous nature of a purchase of this magnitude means you don’t want to just have all your ducks in a row, but all your dollars and cents too. Fortunately, there’s a tool to help provide financial clarity.",
                    urls:[
                        {
                            name:"",
                            url:""
                        }
                    ]
                },
                {
                    text: "Our home mortgage calculator with PMI, taxes and insurance is an invaluable resource for prospective homeowners who want to compare different property prices, rates, terms, down payment, and more. Exploring different pricing scenarios and the effects they have on monthly payments is an important step in finding a loan that aligns with your financial situation. Once you have the necessary insight, be sure to contact an experienced, knowledgeable loan officer who can guide you toward a purchase.",
                    urls:[
                        {
                            name:"contact an experienced, knowledgeable loan officer",
                            url:"https://apply.guaranteedrate.com/apply/express-loan"
                        }
                    ]
                },
                
            ],
        }
    ]
}

const topCalculatorArticles = [
    {
        title:"What is homeowners insurance: The complete guide",
        url:"",
        image:"homeowners_insurance",
        publish_date:"3/11/2021",
        author:"Marty Arneberg",
        tags:["insurance", "homeownership"],
        text:["Homeowners insurance is your security blanket but it does a lot more. See what homeowners insurance covers, when it is required & how it can affect your taxes."]
    },
    {
        title:"What is an amortization schedule?",
        url:"",
        image:"amortization_schedule",
        publish_date:"2/11/2021",
        author:"Marty Arneberg ",
        tags:[],
        text:["Understanding your amortization schedule will help any borrower. Calculate your mortgage amortization to see how your amortization payments decrease over time."],
    },
    {
        title:"Checklist: Are you ready to buy a home?",
        url:"",
        image:"ready_buy_home",
        publish_date:"7/31/2020",
        author:"Andrew Leamon",
        tags:["first-time homebuyer", "buying a home", "before you buy home buying tips"],
        text:["You've got your eye on a home. Next up, it's time to shop and compare loan products and rates. If you're still unsure what to do here, we don't blame you."]
    },
]

/*
const calcFaq_QL = graphql`
    query calcFaq_QL {
    topArticleImgs: allFile(filter: {name: {in: ["homeowners_insurance","amortization_schedule","ready_buy_home"]}}) {
        nodes {
        name
        childImageSharp {
            gatsbyImageData
        }
        }
    }
    }

`;
*/
const calcFaq_QL = graphql`
    query calcFaq_QL {
    topArticleImgs: allFile(filter: {name: {in: ["homeowners_insurance","amortization_schedule","ready_buy_home"]}}) {
        nodes {
        name
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
        }
        }
    }
    }

`;
const CalcFAQlist = () => {
    const {topArticleImgs:{nodes:articleImgs}} = useStaticQuery(calcFaq_QL);
    console.log(articleImgs);
    const [calcAccordianOpen,setCalcAccordianOpen] = useState([]);
    const handleFaqAccordianOpen = (num) =>{
        const isExist = calcAccordianOpen.includes(num);
        if (isExist) {
            setCalcAccordianOpen(calcAccordianOpen.filter(el=>el!==num));
        }else{
            setCalcAccordianOpen([...calcAccordianOpen,num])
        }
    }

    const faqs = FAQ_calculator.faq_list.map(item=>{
        return {id:item.id,title:item.title,url:item.url}
    })

    return (
        <section>
            <h1 className={calculate_faq_title}>{FAQ_calculator.title}</h1>
            {/* 
            <section >
                {
                    faqs.map(faq=><Link to={faq.url} key={faq.id}>{faq.title}</Link>)
                }
            </section>
             */}

            <section className='border-top my-2'>
                <h4 
                    className={`${faq_question} p-2 m-0 `} 
                    onClick={()=>handleFaqAccordianOpen(0)}
                    style={{
                        backgroundColor: calcAccordianOpen.includes(0) ? "#eff4f5":"#fff",
                        color: calcAccordianOpen.includes(0) ? "#136a87":"#000",
                    }}
                >
                    {FAQ_calculator.faq_list[0].title}
                    <span style={{
                        transform: `rotate(${calcAccordianOpen.includes(0) ? "90deg":"-90deg"})`,
                        right: calcAccordianOpen.includes(0) ? "5px":"12px",
                        top: calcAccordianOpen.includes(0) ? "12px":"5px",
                    }}>
                        <ReactIcon ><MdArrowBackIos color='#136a87' /> </ReactIcon>
                    </span>
                </h4>
                <div 
                    className={`${cal_faq_accordian} px-2`} 
                    style={{["--cal_faq_accrdian_height"]: calcAccordianOpen.includes(0) ? "100%":"0px"}}
                >
                    {
                        FAQ_calculator.faq_list[0].description.map((para,idx)=>makeHyperLink(para.text,para.urls,idx,"linkSt"))
                    }
                </div>
            </section>

            <section className='border-top  my-2'>
                <h4 
                    className={`${faq_question} p-2 m-0 `} 
                    onClick={()=>handleFaqAccordianOpen(1)}
                    style={{
                        backgroundColor: calcAccordianOpen.includes(1) ? "#eff4f5":"#fff",
                        color: calcAccordianOpen.includes(1) ? "#136a87":"#000",
                    }}
                >
                    {FAQ_calculator.faq_list[1].title}
                    <span style={{
                        transform: `rotate(${calcAccordianOpen.includes(1) ? "90deg":"-90deg"})`,
                        right: calcAccordianOpen.includes(1) ? "5px":"12px",
                        top: calcAccordianOpen.includes(1) ? "12px":"5px",
                    }}>
                        <ReactIcon ><MdArrowBackIos color='#136a87' /> </ReactIcon>
                    </span>
                </h4>
                <div
                    className={`${cal_faq_accordian} px-2`} 
                    style={{["--cal_faq_accrdian_height"]: calcAccordianOpen.includes(1) ? "100%":"0px"}}
                >
                    {
                        FAQ_calculator.faq_list[1].description.map((para,idx)=><div key={`par${idx}`}>
                            <h4>{para.title}</h4>
                            {
                                para.details.map((sub_para,idx)=>makeHyperLink(sub_para.text,sub_para.urls,idx,"linkSt"))
                            }
                        </div>)
                    }
                </div>
            </section>

            <section className='border-top my-2'>
                <h4 
                    className={`${faq_question} p-2 m-0 `} 
                    onClick={()=>handleFaqAccordianOpen(2)}
                    style={{
                        backgroundColor: calcAccordianOpen.includes(2) ? "#eff4f5":"#fff",
                        color: calcAccordianOpen.includes(2) ? "#136a87":"#000",
                    }}
                >
                    {FAQ_calculator.faq_list[2].title}
                    <span style={{
                        transform: `rotate(${calcAccordianOpen.includes(2) ? "90deg":"-90deg"})`,
                        right: calcAccordianOpen.includes(2) ? "5px":"12px",
                        top: calcAccordianOpen.includes(2) ? "12px":"5px",
                    }}>
                        <ReactIcon ><MdArrowBackIos color='#136a87' /> </ReactIcon>
                    </span>
                </h4>
                <div
                    className={`${cal_faq_accordian} px-2`} 
                    style={{["--cal_faq_accrdian_height"]: calcAccordianOpen.includes(2) ? "100%":"0px"}}
                >
                    {
                        FAQ_calculator.faq_list[2].description.introduction.map((para,idx)=><p key={Date.now()*idx}>{para}</p>)
                    }
                    <h1 className='my-4'>{FAQ_calculator.faq_list[2].description.formula.rule}</h1>
                    <p className='my-3'>{FAQ_calculator.faq_list[2].description.formula.variable_int}</p>
                    <div>
                        <ul>
                            {
                                FAQ_calculator.faq_list[2].description.formula.notes.map(note=><li className='my-0' key={note}>{note}</li>)
                            }
                        </ul>
                    </div>
                    {
                        FAQ_calculator.faq_list[2].description.conclusion.map((para,idx)=><p key={Date.now()*idx}>{para}</p>)
                    }
                </div>
            </section>
            
            <section className='border-top my-2'>
                <h4 
                    className={`${faq_question} p-2 m-0 `} 
                    onClick={()=>handleFaqAccordianOpen(3)}
                    style={{
                        backgroundColor: calcAccordianOpen.includes(3) ? "#eff4f5":"#fff",
                        color: calcAccordianOpen.includes(3) ? "#136a87":"#000",
                    }}
                >
                    {FAQ_calculator.faq_list[3].title}
                    <span style={{
                        transform: `rotate(${calcAccordianOpen.includes(3) ? "90deg":"-90deg"})`,
                        right: calcAccordianOpen.includes(3) ? "5px":"12px",
                        top: calcAccordianOpen.includes(3) ? "12px":"5px",
                    }}>
                        <ReactIcon ><MdArrowBackIos color='#136a87' /> </ReactIcon>
                    </span>
                </h4>
                <div
                    className={`${cal_faq_accordian} px-2`} 
                    style={{["--cal_faq_accrdian_height"]: calcAccordianOpen.includes(3) ? "100%":"0px"}}
                >
                    {
                        FAQ_calculator.faq_list[3].description.map((para,idx)=>makeHyperLink(para.text,para.urls,idx,"linkSt"))
                    }
                </div>
            </section>

            <section className='border-top my-2'>
                <h4 
                    className={`${faq_question} p-2 m-0 `} 
                    onClick={()=>handleFaqAccordianOpen(4)}
                    style={{
                        backgroundColor: calcAccordianOpen.includes(4) ? "#eff4f5":"#fff",
                        color: calcAccordianOpen.includes(4) ? "#136a87":"#000",
                    }}
                >
                    {FAQ_calculator.faq_list[4].title}
                    <span style={{
                        transform: `rotate(${calcAccordianOpen.includes(4) ? "90deg":"-90deg"})`,
                        right: calcAccordianOpen.includes(4) ? "5px":"12px",
                        top: calcAccordianOpen.includes(4) ? "12px":"5px",
                    }}>
                        <ReactIcon ><MdArrowBackIos color='#136a87' /> </ReactIcon>
                    </span>
                </h4>
                <div
                    className={`${cal_faq_accordian} px-2`} 
                    style={{["--cal_faq_accrdian_height"]: calcAccordianOpen.includes(4) ? "100%":"0px"}}
                >
                    {
                        FAQ_calculator.faq_list[4].description.map((para,idx)=><div key={`par${idx}`}>
                           <h4>{para.title}</h4>
                           <div>
                            {
                                para.details.map((para,idx)=>makeHyperLink(para.text,para.urls,idx,"linkSt"))
                            }
                           </div>
                        </div>)
                    }
                </div>
            </section>

            <section className='border-top my-2'>
                <h4 
                    className={`${faq_question} p-2 m-0 `} 
                    onClick={()=>handleFaqAccordianOpen(5)}
                    style={{
                        backgroundColor: calcAccordianOpen.includes(5) ? "#eff4f5":"#fff",
                        color: calcAccordianOpen.includes(5) ? "#136a87":"#000",
                    }}
                >
                    {FAQ_calculator.faq_list[5].title}
                    <span style={{
                        transform: `rotate(${calcAccordianOpen.includes(5) ? "90deg":"-90deg"})`,
                        right: calcAccordianOpen.includes(5) ? "5px":"12px",
                        top: calcAccordianOpen.includes(5) ? "12px":"5px",
                    }}>
                        <ReactIcon ><MdArrowBackIos color='#136a87' /> </ReactIcon>
                    </span>
                </h4>
                <div
                    className={`${cal_faq_accordian} px-2`} 
                    style={{["--cal_faq_accrdian_height"]: calcAccordianOpen.includes(5) ? "100%":"0px"}}
                >
                    {
                        FAQ_calculator.faq_list[5].description.introduction.map(el=><p key={Date.now()-4587}>{el}</p>)
                    }
                    {
                        FAQ_calculator.faq_list[5].description.details.map((para,idx)=><div key={`par${idx}`}>
                           <h4>{para.title}</h4>
                           <p>{para.text}</p>
                        </div>)
                    }
                     {
                        FAQ_calculator.faq_list[5].description.conclusion.map(el=><p key={Date.now()-4587}>{el}</p>)
                    }
                </div>
            </section>

            <section className='border-top my-2'>
                <h4 
                    className={`${faq_question} p-2 m-0 `} 
                    onClick={()=>handleFaqAccordianOpen(6)}
                    style={{
                        backgroundColor: calcAccordianOpen.includes(6) ? "#eff4f5":"#fff",
                        color: calcAccordianOpen.includes(6) ? "#136a87":"#000",
                    }}
                >
                    {FAQ_calculator.faq_list[6].title}
                    <span style={{
                        transform: `rotate(${calcAccordianOpen.includes(6) ? "90deg":"-90deg"})`,
                        right: calcAccordianOpen.includes(6) ? "5px":"12px",
                        top: calcAccordianOpen.includes(6) ? "12px":"5px",
                    }}>
                        <ReactIcon ><MdArrowBackIos color='#136a87' /> </ReactIcon>
                    </span>
                </h4>
                <div
                    className={`${cal_faq_accordian} px-2`} 
                    style={{["--cal_faq_accrdian_height"]: calcAccordianOpen.includes(6) ? "100%":"0px"}}
                >
                    <h2 className='my-4'>What’s included in your monthly mortgage payment?</h2>
                    {
                        FAQ_calculator.faq_list[6].description.introduction.map((el,idx)=><p key={idx}>{el}</p>)
                    }
                    <ul>
                        {
                            FAQ_calculator.faq_list[6].description.details.map((para,idx)=><li key={`par${idx}`}><b>{para.title}</b>{para.text}</li>)
                        }
                    </ul>
                   <div>
                        <h2>Calculate your monthly mortgage payment with current loan rates</h2>
                        <p>{FAQ_calculator.faq_list[6].description.calculateMonthly.introduction}</p>
                        <div>
                            {
                                FAQ_calculator.faq_list[6].description.calculateMonthly.linkList.map(link => <Link className='linkSt fw-bold d-block my-2 ' style={{color:"#136a87"}} to={link.url} key={link.title}>{link.title}</Link>)
                            }
                        </div>
                   </div>
                   {/* <Link to={FAQ_calculator.faq_list[6].description.calculateMonthly.button.url}>{FAQ_calculator.faq_list[6].description.calculateMonthly.button.title}</Link> */}
                </div>
            </section>

            <section className='border-top my-2'>
                <h4 
                    className={`${faq_question} p-2 m-0 `} 
                    onClick={()=>handleFaqAccordianOpen(7)}
                    style={{
                        backgroundColor: calcAccordianOpen.includes(7) ? "#eff4f5":"#fff",
                        color: calcAccordianOpen.includes(7) ? "#136a87":"#000",
                    }}
                >
                    {FAQ_calculator.faq_list[7].title}
                    <span style={{
                        transform: `rotate(${calcAccordianOpen.includes(7) ? "90deg":"-90deg"})`,
                        right: calcAccordianOpen.includes(7) ? "5px":"12px",
                        top: calcAccordianOpen.includes(7) ? "12px":"5px",
                    }}>
                        <ReactIcon ><MdArrowBackIos color='#136a87' /> </ReactIcon>
                    </span>
                </h4>
                <div 
                    className={`${cal_faq_accordian} px-2`} 
                    style={{["--cal_faq_accrdian_height"]: calcAccordianOpen.includes(7) ? "100%":"0px"}}
                >
                    <p>{FAQ_calculator.faq_list[7].introduction}</p>
                    {/* <div>
                        {
                            FAQ_calculator.faq_list[7].linkList.map(link=><Link to={link.url} key={link.title}>{link.title}</Link>)
                        }
                    </div> */}
                    <p>{FAQ_calculator.faq_list[7].conclusion}</p>
                    <p><b>Note:</b> {FAQ_calculator.faq_list[7].note}</p>
                    <div>
                        {
                            FAQ_calculator.faq_list[7].payPoints.map(point =><div key={point.title}>
                                <h2>{point.title}</h2>
                                {
                                    point.text.map((para,idx)=>makeHyperLink(para.text,para.urls,idx,"linkSt"))
                                }
                            </div>)
                        }
                    </div>
                </div>
            </section>

            {/* <section>
                <h2>{FAQ_calculator.faq_list[8].title}</h2>
                <p>{FAQ_calculator.faq_list[8].introduction}</p>
                <div>
                    <div>
                        <b>{FAQ_calculator.faq_list[8].tableData.head.payment_date}</b>
                        <b>{FAQ_calculator.faq_list[8].tableData.head.payment}</b>
                        <b>{FAQ_calculator.faq_list[8].tableData.head.principal}</b>
                        <b>{FAQ_calculator.faq_list[8].tableData.head.interest}</b>
                        <b>{FAQ_calculator.faq_list[8].tableData.head.total_interest}</b>
                        <b>{FAQ_calculator.faq_list[8].tableData.head.balance}</b>
                    </div>
                    <div>
                        {
                            FAQ_calculator.faq_list[8].tableData.data.map(data=><div>
                                <output>{data.payment_date}</output>
                                <output>{data.payment}</output>
                                <output>{data.principal}</output>
                                <output>{data.interest}</output>
                                <output>{data.total_interest}</output>
                                <output>{data.balance}</output>
                            </div>)
                        }
                    </div>
                </div>
            </section> */}

            <section className='border-top my-2'>
                <h4 
                    className={`${faq_question} p-2 m-0 `} 
                    onClick={()=>handleFaqAccordianOpen(9)}
                    style={{
                        backgroundColor: calcAccordianOpen.includes(9) ? "#eff4f5":"#fff",
                        color: calcAccordianOpen.includes(9) ? "#136a87":"#000",
                    }}
                >
                    {FAQ_calculator.faq_list[9].title}
                    <span style={{
                        transform: `rotate(${calcAccordianOpen.includes(9) ? "90deg":"-90deg"})`,
                        right: calcAccordianOpen.includes(9) ? "5px":"12px",
                        top: calcAccordianOpen.includes(9) ? "12px":"5px",
                    }}>
                        <ReactIcon ><MdArrowBackIos color='#136a87' /> </ReactIcon>
                    </span>
                </h4>
                <div
                    className={`${cal_faq_accordian} px-2`} 
                    style={{["--cal_faq_accrdian_height"]: calcAccordianOpen.includes(9) ? "100%":"0px"}}
                >
                    {
                        FAQ_calculator.faq_list[9].description.map(el=><div>
                            <h3>{el.title}</h3>
                            {
                                el.text.map((para,idx)=><p key={idx}>{para}</p>)
                            }
                        </div>)
                    }
                </div>
            </section>

            <section className='border-top my-2'>
                <h4 
                    className={`${faq_question} p-2 m-0 `} 
                    onClick={()=>handleFaqAccordianOpen(10)}
                    style={{
                        backgroundColor: calcAccordianOpen.includes(10) ? "#eff4f5":"#fff",
                        color: calcAccordianOpen.includes(10) ? "#136a87":"#000",
                    }}
                >
                    {FAQ_calculator.faq_list[10].title}
                    <span style={{
                        transform: `rotate(${calcAccordianOpen.includes(10) ? "90deg":"-90deg"})`,
                        right: calcAccordianOpen.includes(10) ? "5px":"12px",
                        top: calcAccordianOpen.includes(10) ? "12px":"5px",
                    }}>
                        <ReactIcon ><MdArrowBackIos color='#136a87' /> </ReactIcon>
                    </span>
                </h4>
                <div 
                    className={`${cal_faq_accordian} px-2`} 
                    style={{["--cal_faq_accrdian_height"]: calcAccordianOpen.includes(10) ? "100%":"0px"}}
                >
                    <div>
                        {
                            FAQ_calculator.faq_list[10].description.introduction.map((el,elIdx)=><p key={elIdx}>{el}</p>)
                        }
                    </div>
                    <div>
                        <ul>
                            {
                                FAQ_calculator.faq_list[10].description.details.map(el=><li>
                                    <Link className='linkSt ' to={el.url} >{el.title}</Link>
                                    { el.text}
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <section className='border-top border-bottom my-2'>
                <h4 
                    className={`${faq_question} p-2 m-0 `} 
                    onClick={()=>handleFaqAccordianOpen(11)}
                    style={{
                        backgroundColor: calcAccordianOpen.includes(11) ? "#eff4f5":"#fff",
                        color: calcAccordianOpen.includes(11) ? "#136a87":"#000",
                    }}
                >
                    {FAQ_calculator.faq_list[11].title}
                    <span style={{
                        transform: `rotate(${calcAccordianOpen.includes(11) ? "90deg":"-90deg"})`,
                        right: calcAccordianOpen.includes(11) ? "5px":"12px",
                        top: calcAccordianOpen.includes(11) ? "12px":"5px",
                    }}>
                        <ReactIcon ><MdArrowBackIos color='#136a87' /> </ReactIcon>
                    </span>
                </h4>
                <div
                    className={`${cal_faq_accordian} px-2`} 
                    style={{["--cal_faq_accrdian_height"]: calcAccordianOpen.includes(11) ? "100%":"0px"}}
                >
                    {
                        FAQ_calculator.faq_list[11].description.map((para,idx)=>makeHyperLink(para.text,para.urls,idx,"linkSt"))
                    }
                </div>
            </section>
            <section className='row'>
                {
                    topCalculatorArticles.map(article =>{
                    const img = articleImgs.find(img_EL => img_EL.name === article.image)
                    return <article className={`${mortgageTopArticle} col-12 col-lg-4 my-2`}>
                        <Link className='text-decoration-none text-black' to={article.url}>
                            <div className={mortgageTopArticle_img_wraper}>
                                <GatsbyImage className={mortgageTopArticle_img} image={getImage(img?.childImageSharp)} alt='' />
                            </div>
                            <div>
                                <h4>{article.title}</h4>
                                {
                                    article.text.map((para,elIdx) => <p className='fw-normal' key={elIdx}>{para}</p>)
                                }
                            </div>
                        </Link>
                    </article>})
                }
            </section>
        </section>
    );
};

export default CalcFAQlist;