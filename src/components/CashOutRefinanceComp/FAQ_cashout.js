import { Link } from 'gatsby';
import React from 'react';
import { makeHyperLink } from '../../utils/makeHyperText';


const FAQ_cashoutList = {
    whatCashOut:{
        title:"What is a cash-out refinance?",
        details:[
            {
                text:`If you find yourself asking "what is a cash-out refinance," you're not alone. There are many reasons why homeowners might refinance a mortgage: take advantage of lower interest rates, switch to a different loan type, consolidate debt or shorten the length of the loan, for instance. A cash-out refinance can let you do all of that and more: it puts money in your pocket.`,
                urls:[]
            },
            {
                text:"A cash-out refinance is a special type of refinancing vehicle that provides borrowers with a lump sum payment in exchange for a larger mortgage. When you apply for a cash-out refinance, your lender will extend you a higher loan amount than your current mortgage, and pay you the difference in cash. Tapping into those extra funds can be very appealing to homeowners who want to cover unexpected expenses or consolidate debt or large-ticket items like college tuition.",
                urls:[
                    {
                        name:"apply for a cash-out refinance",
                        url:"https://apply.guaranteedrate.com/apply/express-loan?AdTrk=%7Cgnr%7Cguaranteedrate%7C%7C%7C%7C%7C%7C%7C%7Cdirect%7C%7C%7C%7C%7C"
                    }
                ]
            },
            {
                text:"Where does that extra money come from, exactly? The lender converts a large portion of the equity you’ve built up in your home — but never all of it, mind you — into cash. That home equity could be gained through monthly mortgage payments, an increase in your property’s market value or both.",
                urls:[
                    {
                        name:"monthly mortgage payments",
                        url:"https://www.rate.com/mortgage-calculators"
                    }
                ]
            },
        ]
    },
    debt:{
        title:"How can you consolidate debt with a cash-out refi?",
        details:[
            {
                text:"Debt consolidation is when you take one or more existing debts, such as personal loans or credit card bills, and pay them off using another line of credit. Ideally, this other line of credit is at a lower interest rate or brings other advantages with it. There's no secret to consolidating debt with a cash-out refinance, however. What you do with the cash from your refinance is up to you; once the money is in your account, you're free to consolidate those existing debts with it.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                text:"Why use a cash-out refinance for debt consolidation? For many homeowners, the main driver is the interest rate. While personal loans and credit cards are both options for debt consolidation, they are unsecured loans that often have a much higher interest rate than cash-out refinance rates. Using your home's equity to consolidate higher-interest debts can bring with it all the other advantages of refinancing your mortgage, too.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
        ]
    },
    howWork:{
        title:"How does a cash-out refinance work?",
        details:[
            {
                sub_title:"Trading in your old mortgage",
                sub_para:[
                    {
                        text:"So, how does a cash-out refinance work? When you use a cash-out refi, you’re essentially trading in your old mortgage for a new home loan that happens to have a larger total loan amount — or at least that’s how it’ll appear to you as the borrower. What really happens with a cash-out refi is the lender extends you a new, larger loan, pays off the balance of your original mortgage and pays out whatever’s leftover to you.",
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
                sub_title:"Turning home equity into cash",
                sub_para:[
                    {
                        text:"With that in mind, you want to have a clear view of your financial situation and the potential risks you’re taking on with a bigger mortgage. This isn’t free money; think of your lump-sum payment as an extension on a loan, because that’s basically what it is. You will need to repay that money to your lender, but it’ll be bundled into your new refinanced mortgage. As such, you should always approach a cash-out refi with an immediate purpose for your added funds.",
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
                sub_title:"You'll likely retain some equity",
                sub_para:[
                    {
                        text:"Lenders will require you to keep some equity in your home (some VA cash-out refis being a notable exception). Usually, you’ll need to maintain at least 20% equity in your property, but that figure will vary from lender to lender.",
                        urls:[
                            {
                                name:" equity in your home",
                                url:"https://www.rate.com/resources/what-is-home-equity"
                            }
                        ]
                    },
                    {
                        text:"Why can’t you use your full equity? Think of it this way: If you were allowed to extract the full difference in equity between your original mortgage and your new home loan, you would have no equity left in your home. That would put you in roughly the same financial situation as someone trying to apply for a mortgage without a down payment — i.e., a risky investment for the lender.",
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
                sub_title:"Cash-out refinance fees and closing costs",
                sub_para:[
                    {
                        text:"You could also be on the hook for lender fees and other closing costs when you use a cash-out refinance. That’s not unique to this type of refi option, though. Any time you refinance your mortgage, you’ll need to pay closing costs — again, because you’re taking out a new home loan, and originating a loan always costs the lender money. Factor in these extra expenses so you can accurately anticipate how much money you’ll be able to withdraw when you use a cash-out refi.",
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
                sub_title:"The length of your loan may change",
                sub_para:[
                    {
                        text:"Finally, keep in mind that with any mortgage refinance, you could very well extend the length of your home loan. Why? Because you’re replacing your old mortgage with a new one, which means you need to reset the clock on your amortization schedule. For instance, if you took out a 30-year mortgage, made payments on it for 5 years and then did a cash-out refi with a 30-year team, then you would be back to square one paying off your mortgage.",
                        urls:[
                            {
                                name:"mortgage refinance",
                                url:"https://www.rate.com/refinance-mortgage"
                            }
                        ]
                    },
                    {
                        text:"Depending on the exact terms of your cash-out refi, you may be able to select a shorter loan term — say, switching from a 30-year fixed rate mortgage to a 15-year loan. But in many cases, borrowers are more concerned with accessing those extra funds (and maybe lowering the mortgage rate, if possible) than changing up the terms of the home loan.",
                        urls:[
                            {
                                name:" 30-year fixed rate mortgage",
                                url:"https://www.rate.com/mortgage-rates/assumptions/30-year_fixed_conforming"
                            }
                        ]
                    },
                ],
            },
        ],
        cashout_example:{
            title:"Cash-out refinance example",
            para:[
                {
                    text:"Seeing a cash-out refi in action can help highlight the benefits of this mortgage vehicle while giving you a taste of the amount of money you could expect to gain. Let’s assume you have a $400,000 home loan and you’ve already paid off $100,000 of the principal with your down payment and ensuing monthly payments.",
                    amount: [
                        {
                            name:"Total loan amount",
                            price:"400,000"
                        },
                        {
                            name:"Principal left to be paid",
                            price:"300,000"
                        },
                        {
                            name:"Current market value of property",
                            price:"500,000"
                        },
                        {
                            name:"Total home equity",
                            price:"200,000"
                        },
                    ]
                },
                {
                    text:"Remember, lenders will never agree to use up your full amount of equity in a cash-out refi, so that $200,000 is just a starting point. You’ll probably need to maintain at least 20% of the new loan amount as equity. In this case, that’s $100,000, so we’ll subtract that from the home equity total.",
                    amount: [
                        {
                            name:"",
                            price:""
                        },
                    ]
                },
                {
                    text:"On top of that, we haven’t factored in closing costs yet, which can vary significantly from lender to lender. Let’s assume your closing costs are on the lower end and subtract another $5,000.",
                    amount: [
                        {
                            name:"Available home equity",
                            price:"100,000"
                        },
                        {
                            name:"Estimated closing costs",
                            price:"5,000"
                        },
                        {
                            name:"Cash-out payment",
                            price:"95,000"
                        },
                    ]
                },
                {
                    text:"You could then use that $95,000 for any purchase or expense you want: Buy a car, consolidate student loans, start a business, add a room to your home, upgrade your kitchen or even make a down payment on a vacation house. The sky’s the limit.",
                    amount: [
                        {
                            name:"",
                            price:""
                        },
                    ]
                },
            ],
        }
    },
    howRateWork:{
        title:"How do cash-out refinance rates work?",
        introduction:[
            "Lenders set interest rates on cash-out refis according to numerous economic factors, including inflation, treasury bond movement and housing market trends. The final piece of the puzzle is your financial situation: your existing debt, annual income and recurring expenses, among other considerations. As such, interest rates can be highly variable from borrower to borrower, no matter what cash-out refinance option you choose.",
            "Cash-out refi rates tend to run slightly higher than conventional loans, but for the most part they roughly align with their respective loan type. The most popular cash-out refi loans include:"
        ],
        short_urls:[
            {
                name:"30-year fixed rate mortgages",
                url:"https://www.rate.com/mortgage-rates/assumptions/30-year_fixed_conforming"
            },
            {
                name:"15-year fixed rate mortgages",
                url:"https://www.rate.com/mortgage-rates/assumptions/15-year_fixed_conforming"
            },
            {
                name:"10-year adjustable rate mortgages",
                url:"https://www.rate.com/mortgage-rates/assumptions/10-year_arm_conforming"
            },
            {
                name:"7-year adjustable rate mortgages",
                url:"https://www.rate.com/mortgage-rates/assumptions/7-year_arm_conforming"
            },
            {
                name:"5-year adjustable rate mortgages",
                url:"https://www.rate.com/mortgage-rates/assumptions/5-year_arm_conforming"
            },
            {
                name:"Jumbo fixed rate mortgages",
                url:"https://www.rate.com/home-loans/jumbo-mortgage"
            },
            {
                name:"FHA fixed rate mortgages",
                url:"https://www.rate.com/mortgage-rates/assumptions/fha_30-year_fixed_conforming"
            },
            {
                name:"VA fixed rate mortgages",
                url:"https://www.rate.com/mortgage-rates/assumptions/va_30-year_fixed_conforming"
            },
        ],
        parabody:[
            {
                sub_title:"Cash-out refinancing rates for fixed-rate mortgages",
                text:"Among those options, a cash-out refi on a 15-year fixed rate home loan will likely net you the lowest cash-out refinance mortgage rate on account of the shorter loan term. In comparison, a 30-year mortgage will likely come with a higher interest rate. Adjustable rate mortgages (ARMs) offer lower interest rates during their initial fixed rate term (possibly even rivaling a 15-year fixed rate loan), but could go either or up or down throughout the life of the loan.",
                urls:[
                    {
                        name:"Adjustable rate mortgages (ARMs)",
                        url:"https://www.rate.com/home-loans/adjustable-rate-mortgage-arm"
                    }
                ]
            },
            {
                sub_title:"Cash-out refinancing rates for jumbo mortgages",
                text:"Although many people assume that jumbo loans have higher interest rates than conventional loans, that’s often no longer the case. Depending on the length of the jumbo mortgage, you can expect your interest rates to line up roughly with a conventional counterpart.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                sub_title:"Cash-out refinancing rates for government loans",
                text:"Lastly, government home loans — like fixed rate mortgages supported by the Federal Housing Administration or Department of Veterans Affairs — often offer lower interest rates compared with conventional mortgages. That may not always be the case, though, so it’s important to compare rates for every available cash-out option — as well as other conditions like origination fees, loan terms and payout — before making a decision.",
                urls:[
                    {
                        name:"Federal Housing Administration",
                        url:"https://www.rate.com/resources/federal-housing-administration"
                    }
                ]
            },
            {
                sub_title:"Cash-out refinancing rates vs. mortgage rates",
                text:"Because cash-out refi rates don’t deviate too much from conventional interest rates, it’s usually easier to just refer to mortgage rates for the respective loan type to see what your cash-out refinance rate might look like. Check out the rate table at the top of this page to know what you can expect from cash-out refinance rates today.",
                urls:[
                    {
                        name:"mortgage rates",
                        url:"https://www.rate.com/mortgage-rates"
                    }
                ]
            },
        ]
    },
    whenCashOut:{
        title:"When does a cash-out mortgage refinance make sense?",
        introduction:"Cash-out refis can offer a major financial boon under the right conditions, but they’re not perfect fits for every scenario. To get the most value from a cash-out refinance loan, make sure you meet one — if not several — of the criteria below:",
        list:[
            "You’re overleveraged on your finances (credit card debt, auto loans, medical bills, etc.) and you need to open up more cash flow.",
            "You’ve emptied your emergency fund to pay for an unexpected expense (damage to your home, major car repairs, etc.) and need to replenish your coffers.",
            "You’ve accumulated a large stake of equity in your home (in 2021 alone, home values went up 24% to 25% year over year in certain markets).",
            "Your home’s market value has appreciated significantly since you bought it.",
            "Industry mortgage rates have dropped or at least stayed relatively flat since you took out your mortgage (you don’t want to pay more interest after refinancing).",
            "You have an immediate need for a large influx of money to cover expenses that you otherwise couldn’t afford or wish to use your home equity to upgrade your household or improve your cash flow by consolidating high-interest debt.",
            "You want to simplify your life and streamline your debt by rolling it all into a single monthly payment, rather than manage multiple debt payments each month.",
            "You want to improve your financial situation by paying off credit card balances and other outstanding debt to lower your DTI (Consolidating debt in this fashion could also net you a lower interest rate on a future refi.).",
            "You’d like to build wealth by freeing up some money for investments. The average annual return on the S&P 500 is 10% (around 7% after inflation) vs. an estimated 4% mortgage interest growth).",
            "You have two mortgages — a HELOC for instance — and would like to consolidate both into one loan with a lower monthly payment. HELOC interest rates are attached to the Primate Rate, which is usually higher than rates on the mortgage-backed securities market, so you may receive an overall reduced interest rate with a cash-out refi.",
            "You’re confident that your income stream will stay consistent or grow in the coming years so you can afford a larger home loan."
        ],
        conclusion:"As with any refinance, it’s always a good idea to run your numbers through a cash-out refinance calculator to see how much money you might stand to save** through lower interest rates, different lending terms and other changes to your mortgage. Better yet, speak to a qualified mortgage refinance professional who can assess your specific situation and help you find the right refi option to suit your needs."
    },
    howMuchMoney:{
        title:"How much money can you get from a cash-out refinance?",
        introduction:{
            text:"The total amount of money you can pull out from a cash-out refinance depends on multiple factors:",
            factors: [
                "The current market value of your home",
                "The amount of home equity you’ve built up",
                "The loan amount of your original mortgage",
                "How large of a home loan your lender is willing to extend"
            ]
        },
        paragraps:[
            {
                text:"As we outlined in our cash-out refinance example above, the market value of your property, your existing equity and your original loan amount determine what your maximum lump sum payment could look like. But that figure doesn’t account for either closing costs or the amount of equity you’re required to maintain in the property.",
                urls:[
                    {
                        name:"market value of your property",
                        url:"https://www.rate.com/resources/house-value"
                    }
                ]
            },
            {
                text:"One of the most important factors determining your cash-out refi payment is you, the borrower. Your lender will dissect your finances, review your income and assess existing debt obligations to generate a risk profile before approving your refinance. This process includes running a credit report, gathering bank statements and analyzing your debt-to-income (DTI) ratio.",
                urls:[
                    {
                        name:"debt-to-income (DTI) ratio",
                        url:"https://www.rate.com/resources/calculate-debt-to-income-ratio"
                    }
                ]
            },
            {
                text:"That risk profile will also inform the size of your lump sum payment because your lender will use that information to figure out how large of a loan you should be extended. The less risk you present, the larger a loan you may receive, which would translate into a bigger cash payment.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            }
        ]
    },
    taxesFees:{
        title:"Cash-out refinance taxes and fees",
        introduction:{
            text:"Every type of home loan, whether it’s a purchase or refi, requires the borrower to pay closing costs and lender fees. A cash-out refinance is no exception. As discussed earlier, homeowners typically spend anywhere from 2% to 5% of the total loan amount on closing costs.",
            urls:[
                {
                    name:"home loan",
                    url:"https://www.rate.com/home-loans"
                },
                {
                    name:"2% to 5% of the total loan amount",
                    url:"https://www.rate.com/resources/gr-investigates-closing-process"
                },
            ]
        },
        body:"The exact expenses you’ll need to cover to finalize your cash-out refi will vary from lender to lender, but these are most common closing costs and lender fees you may encounter:",
        costFees :[
            {
                name:"Origination fee",
                url:"https://www.rate.com/resources/mortgage-origination-fee"
            },
            {
                name:"Appraisal report",
                url:"https://www.rate.com/resources/appraisal-refinance"
            },
            {
                name:"Title insurance",
                url:"https://www.rate.com/resources/what-is-title-insurance"
            },
            {
                name:"Title search",
                url:"https://www.rate.com/resources/what-is-title-search"
            },
            {
                name:"Credit report",
                url:"https://www.rate.com/resources/what-is-on-a-credit-report"
            },
            {
                name:"Attorney fee",
                url:"https://www.rate.com/resources/real-estate-attorney"
            },
            {
                name:"Recording fee",
                url:""
            },
            {
                name:"Application fee",
                url:""
            },
            {
                name:"Additional underwriting fee",
                url:""
            },
        ],
        conclusion:"You may also choose to purchase mortgage points, which lower the interest rate on your refinanced home loan. Although it adds to your up-front financial burden, buying down the rate in this fashion could reduce the amount of interest you owe in the long run.",
        question:"Are cash-out refinances taxable?",
        answer:"You do not pay taxes on the money you receive from a cash-out refi. On the contrary, your mortgage interest may be tax deductible. If you’re carrying a lot of debt, you won’t be able to deduct interest on credit cards or personal loans from your taxes. Doing a cash-out refi and rolling all of that debt into your mortgage could shrink your tax footprint. For more information, be sure to consult a tax advisor who can guide you through the tax implications of a mortgage refinance.***"
    },
    VAcash:{
        title:"Are there VA cash-out refinance options?",
        details:[
            {
                text:"Cash-out refinance loans are not exclusive to conventional mortgages. You may find several refinancing options to consider through government loan programs. VA loans, in particular, could be useful for active or former service members in the armed forces.",
                urls:[
                    {
                        name:"VA loans",
                        url:"https://www.rate.com/va-loans"
                    }
                ]
            },
            {
                text:"A cash-out refinance VA loan functions in essentially the same manner as a conventional cash-out refi loan, but with the terms, eligibility requirements and fees you would expect from a VA mortgage. That could mean a lower interest rate on your refinanced home loan since VA cash out refinance rates often undercut conventional mortgage rates. And that, in turn, could lead to lower VA loan payments on your cash-out refi.",
                urls:[
                    {
                        name:"VA loan payments",
                        url:"https://www.rate.com/resources/va-loan-calculator"
                    }
                ]
            },
            {
                text:"You’ll still owe closing costs, as you would with any VA loan, including the VA funding fee. But borrowers can always roll that expense into your monthly mortgage payments. And while the VA itself may have more eligibility requirements when it comes to personal finances, debt-to-income (DTI) ratio and credit scores, your application will still need to meet the qualification benchmarks of a VA-approved lender.",
                urls:[
                    {
                        name:"VA funding fee",
                        url:"https://www.rate.com/resources/va-loan-funding-fee"
                    }
                ]
            },
            {
                text:"What if you have a conventional mortgage? No problem: You don’t need an existing VA loan to qualify for a cash-out refi VA mortgage. As long as you’re eligible, you can refinance your conventional mortgage into a VA loan and take advantage of cash-out options.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                text:"As of today, Guaranteed Rate is now offering up to 100% max LTV (loan-to-value ratio) options on VA cash-out refinances up to $1.5M. Many lenders and cash-out loans cap your LTV at 90% for VA loans, which means a smaller loan for you. However, a Guaranteed Rate VA loan offers cash-out refinances with an LTV option up to 100%, putting more money in your pocket.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
        ]
    },
    cashHeloc:{
        title:"Cash-out refinance vs. HELOC",
        text:[
            "Looking for other ways to open up some financial wiggle room without refinancing your mortgage? A home equity line of credit (HELOC) mortgage is a popular way to fund home improvement projects, pay other bills and cover unexpected costs.",
            "In both cases, you trade off of your home equity to open up new financial opportunities. But a HELOC mortgage doesn’t involve refinancing at all, so you retain all of the same loan terms in your existing mortgage. Also, rather than give you money all at once, your lender will open up a line of credit that you can draw from as needed.",
            "Above all else, remember this important distinction between the two loan options: HELOC mortgages require consumers to add a second lien to your home. Your HELOC loan will sit in the second lien position behind your original mortgage. But that means you’ll need to make two mortgage payments every month — one to pay down your first home loan and one to cover your HELOC mortgage.",
            "As you can no doubt see, these two financial vehicles differ in a few key ways, so be sure to review how they stack up against each other:"
        ],
        refi_list:[
            "Convert equity to cash",
            "One-time lump sum payment",
            "Replace existing mortgage with a new home loan",
            "Fixed rate or adjustable rate options available",
            "Closing costs required",
            "One mortgage payment"
        ],
        helocList:[
            "Convert equity to cash",
            "Open line of credit",
            "Retain your original mortgage and add a second lien",
            "Variable interest rates that could rise or fall",
            "No closing costs required",
            "Two mortgage payments",
        ]
    },
    cashVsPersonalLoan:{
        title:"Cash-out refinance vs. personal loan",
        details:[
            {
                text:"You might wonder why go through the complexity of a cash-out refinance when personal loans are widely available? A cash-out refi frequently beats a personal loan in three key areas: loan amount, interest rate and loan term.",
                urls:[
                    {
                        name:"personal loans",
                        url:""
                    }
                ]
            },
            {
                text:"Unlike mortgages, personal loans are unsecured loans — that is, there’s no collateral to back them up. As such, these kinds of lenders will offset risk by setting much higher interest rates, extending lower loan amounts and establishing shorter loan terms.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                text:"If you have a good amount of equity built up in your home, you could receive a significant payout through a cash-out refi (see our example above). In contrast, personal loan lenders may be hesitant to extend loan amounts that can stand toe-to-toe with a cash-out refi. Personal loans simply aren’t meant to distribute that much money in most cases.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                text:"Let’s say you do qualify for a personal loan totalling several tens of thousands of dollars, though. In that case, you’ll likely face a high interest rate — much higher than a cash-out refinance mortgage rate. That would mean paying more in interest over the life of your personal loan.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                text:"Speaking of the life of your loan, no personal loan lender will agree to an amortization schedule that spans 30 or even 15 years. With that kind of loan, you’ll be expected to repay the full amount, with interest, within a few years. As a result, your monthly payments could be very high, maybe even on par with your mortgage installments.",
                urls:[
                    {
                        name:"amortization schedule",
                        url:"https://www.rate.com/resources/amortization-schedule"
                    }
                ]
            },
            {
                text:"On the other hand, turnaround time is one area where personal loans have an undisputed edge. With a personal loan, you could have the money in your bank account within a few days. On average, it can take anywhere from 30-45 days to refinance your mortgage, possible even longer.",
                urls:[
                    {
                        name:" 30-45 days to refinance your mortgage",
                        url:"https://www.rate.com/resources/how-long-does-a-refinance-take"
                    }
                ]
            },
        ]
    },
    howRefiMoney:{
        title:"How can you use your cash-out refi money?",
        introduction:"Unlike some other loan options like home improvement loans, cash-out refis don’t restrict how you use your funds. Once the money’s in your hands, you can spend it any way you like. That being said, most homeowners gravitate toward cash-out refinance mortgages to cover certain expenses:",
        expenseList:[
            "Consolidate high-interest debt",
            "Renovate your home",
            "Cover expensive bills, like college tuition, car repairs or medical expenses",
            "Buy a new car",
            "Purchase a second property",
            "Make investments",
        ],
        conclusion:"These are just a few examples. With a potentially large payout and relatively low interest rate, you could use a cash-out refi for just about any expense and come out ahead."
    },
    WhoRefi:{
        title:"Who qualifies for a cash-out refi?",
        introduction:"As with any other type of home loan, your lender will insulate itself against risk as much as possible when you take out a cash-out refi. While specific eligibility guidelines will vary depending on a lender’s particular appetite for risk, there are some baseline cash-out refinance requirements that most will adhere to with this kind of loan:",
        laonList:[
            "Borrower must have 20% equity in the home, if not more.",
            "Your loan-to-value (LTV) ratio should be no higher than 80%.",
            "Your DTI ratio should be no higher than 43%.",
            "Your credit score should be no lower than 620.",
            "You must submit to a home appraisal to check your property’s current market value.",
        ],
        conclusion:"Arguably the most important requirement here is having 20% equity in your home. Since your cash-out refi converts equity to cash, that’s usually non-negotiable. Other criteria will vary on the lender and your financial situation. A sub-620 credit score, for instance, may not be a deal breaker if your income and payment history are strong enough to offset any concerns."
    },
    prosCorns:{
        title:"Cash-out refinance: Pros vs. cons",
        text:"A cash-out refi is undeniably useful, but it may not be the best financial tool at your disposal in every situation. Carefully weigh the pros and cons of this loan type before locking in your mortgage agreement.",
        prosList:[
            "Turn home equity into cash",
            "Potentially lower your mortgage rate",
            "Financing could be less expensive than personal loans and other options",
            "Lump sum payment is not considered taxable income",
            "May qualify for tax deductions when used for home renovations",
        ],
        corsList:[
            "Extend the length of your home loan",
            "Total loan amount will go up",
            "Must pay closing costs and lending fees",
            "Funds will not be immediately available",
        ]
    },
    bestRate:{
        title:"Find the best cash-out refinance rate",
        text:[
            "A cash-out refinance is more than a loan — it’s an opportunity to improve the terms of your mortgage while also accessing new funds to pay for any expenses that come your way. When weighing your refinance options, look beyond the lump sum payment itself and factor in every cost and savings opportunity.",
            "In particular, you want to get the best cash-out refinance rate possible so you pay less interest over the life of your loan. Doing so will also result in lower monthly mortgage installments, which could put even more money back into your bank account at the end of the day. A cash-out refi calculator will narrow the scope of your search a bit, but you’re best served by speaking with a refinance expert.",
            "A qualified and experienced loan officer can assess your financial situation, review your loan options and match you with the best refinance tool to meet your needs. Gain financial flexibility and competitive mortgage terms with a cash-out refinance from Guaranteed Rate."
        ]
    },
    
}



const FAQ_cashout = () => {
    const {whatCashOut,debt,howWork,howRateWork,whenCashOut,howMuchMoney,taxesFees,VAcash,cashHeloc,cashVsPersonalLoan,howRefiMoney,WhoRefi,prosCorns,bestRate} = FAQ_cashoutList
    return (
        <section>
            <h1 className='my-3'>Cash-out refinancing FAQ</h1>
            <section>
                {
                    Object.keys(FAQ_cashoutList).map(el =>(FAQ_cashoutList[el].title)).map(question => <a className='linkSt d-block my-2' href={`#${question}`} key={question}>{question}</a>)
                }
            </section>
            <section id={whatCashOut.title}>
                <h2 className='my-3'>{whatCashOut.title}</h2>
                <div>
                    {
                        whatCashOut.details.map((whatCash,idx) => makeHyperLink(whatCash.text,whatCash.urls,idx,"linkSt",{maxWidth:"100%"}))
                    }
                </div>
            </section>
            <section id={debt.title}>
                <h2>{debt.title}</h2>
                <div>
                    {
                        debt.details.map((whatCash,idx) => makeHyperLink(whatCash.text,whatCash.urls,idx,"linkSt",{maxWidth:"100%"}))
                    }
                </div>
            </section>
            <section id={howWork.title}>
                <h2>{howWork.title}</h2>
                <div>
                    {
                        howWork.details.map((detail,idx) => <div key={idx}>
                            <h3>{detail.sub_title}</h3>
                            {
                                detail.sub_para.map((para,idx)=>makeHyperLink(para.text,para.urls,idx,"linkSt",{maxWidth:"100%"}))
                            }
                            
                        </div>)
                    }
                </div>
                <div>
                    <h2>{howWork.cashout_example.title}</h2>
                    <div>
                        {
                            howWork.cashout_example.para.map(cashEx => <div>
                                <p>{cashEx.text}</p> 
                                <ul className='ms-5'>
                                    {
                                        cashEx.amount[0]?.name && cashEx.amount.map(amount => <li key={amount.name} >
                                            <b>{amount.name}: </b>
                                            <span>${amount.price}</span>
                                        </li>) 
                                    }
                                </ul>
                            </div>)
                        }
                    </div>
                </div>
            </section>
            <section id={howRateWork.title}>
                <h2>{howRateWork.title}</h2>
                <div>
                    {
                        howRateWork.introduction.map((para,idx) => <p style={{maxWidth:"100%"}} key={idx}>{para}</p>)
                    }
                </div>
                <div>
                    <div className='row ms-5 my-4'>
                        {
                            howRateWork.short_urls.map(link => <a className={`bullet_point linkSt col-12 col-md-6 my-2`} href={link.url} key={link.name}>{link.name}</a>)
                        }
                    </div>
                </div>
                {/* <div>
                    {
                        howRateWork.short_urls.map(link => <li key={link.name}>
                            <Link to={link.url}>{link.name}</Link>
                        </li>)
                    }
                </div> */}
                <div>
                    {
                        howRateWork.parabody.map((para,idx) =><div key={para.sub_title}>
                            <h3>{para.sub_title}</h3>
                            {
                                makeHyperLink(para.text,para.urls,idx,"linkSt",{maxWidth:"100%"})
                            }
                        </div>)
                    }
                </div>
            </section>
            <section id={whenCashOut.title}>
                <h2>{whenCashOut.title}</h2>
                <p style={{maxWidth:"100%"}}>{whenCashOut.introduction}</p>
                <ul>
                    {
                        whenCashOut.list.map((item,idx) => <li key={idx}>{item}</li>)
                    }
                </ul>
                <p>{whenCashOut.conclusion}</p>
            </section>
            <section id={howMuchMoney.title}>
                <h2 className='my-3'>{howMuchMoney.title}</h2>
                <div>
                    <p style={{maxWidth:"100%"}}>{howMuchMoney.introduction.text}</p>
                    <ul className='ms-5'>
                        {
                            howMuchMoney.introduction.factors.map(factor => <li className='my-1' key={factor}>{factor}</li>)
                        }
                    </ul>
                </div>
                <div>
                    {
                        howMuchMoney.paragraps.map((para,idx) =>makeHyperLink(para.text,para.urls,idx,"linkSt",{maxWidth:"100%"}))
                    }
                </div>
            </section>
            <section id={howMuchMoney.title}>
                <h2 className='my-3'>{taxesFees.title}</h2>
                <div>
                    {
                        makeHyperLink(taxesFees.introduction.text,taxesFees.introduction.urls,"idx","linkSt",{maxWidth:"100%"})
                    }
                    <p style={{maxWidth:"100%"}}>{taxesFees.body}</p>
                    <ul className='ms-5'>
                        {
                            taxesFees.costFees.map(fee =><li className='my-1'><Link className='linkSt' to={fee.url}>{fee.name}</Link></li>)
                        }
                    </ul>
                    <p className='my-3' style={{maxWidth:"100%"}}>{taxesFees.conclusion}</p>
                    <p className='my-3' style={{maxWidth:"100%"}}>{taxesFees.question}</p>
                    <p className='my-3' style={{maxWidth:"100%"}}>{taxesFees.answer}</p>
                </div>
            </section>
            <section id={VAcash.title}>
                <h2 className='my-3'>{VAcash.title}</h2>
                <div>
                    {
                        VAcash.details.map((textInfo,idx) => makeHyperLink(textInfo.text,textInfo.urls,idx,"linkSt",{maxWidth:"100%"}))
                    }
                </div>
            </section>
            <section id={cashHeloc.title}>
                <h2>{cashHeloc.title}</h2>
                <div>
                    {
                        cashHeloc.text.map(item => <p style={{maxWidth:"100%"}} key={item}>{item}</p>)
                    }
                </div>
                <div>
                    <h3 className='my-3'>Cash-out refi</h3>
                    <ul>
                        {
                            cashHeloc.refi_list.map(item => <li className='my-1 ms-4' key={item}>{item}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h3>HELOC</h3>
                    <ul className='my-3'>
                        {
                            cashHeloc.helocList.map(item => <li className='my-1 ms-4' key={item}>{item}</li>)
                        }
                    </ul>
                </div>
            </section>
            <section id={cashVsPersonalLoan.title}>
                <h2 className='my-3'>{cashVsPersonalLoan.title}</h2>
                <div>
                    {
                        cashVsPersonalLoan.details.map((textinfo,idx) =>makeHyperLink(textinfo.text,textinfo.urls,idx,"linkSt",{maxWidth:"100%"}))
                    }
                </div>
            </section>
            <section id={howRefiMoney.title}>
                <h2 className='my-3'>{howRefiMoney.title}</h2>
                <div>
                    <p style={{maxWidth:"100%"}}>{howRefiMoney.introduction}</p>
                    <ul className='ms-5'>
                        {
                            howRefiMoney.expenseList.map(item => <li className='my-0' key={item}>{item}</li>)
                        }
                    </ul>
                    <p style={{maxWidth:"100%"}}>{howRefiMoney.conclusion}</p>
                </div>
            </section>
            <section id={WhoRefi.title}>
                <h2 className='my-3'>{WhoRefi.title}</h2>
                <div>
                    <p style={{maxWidth:"100%"}}>{WhoRefi.introduction}</p>
                    <ul className='ms-5'>
                        {
                            WhoRefi.laonList.map(item => <li className='my-0' key={item}>{item}</li>)
                        }
                    </ul>
                    <p>{WhoRefi.conclusion}</p>
                </div>
            </section>
            <section id={prosCorns.title}>
                <h2 className='my-3'>{prosCorns.title}</h2>
                <div>
                    <p>{prosCorns.text}</p>
                    <h4 className='my-4'>Pros</h4>
                    <ul>
                        {
                            prosCorns.prosList.map(item => <li className='my-0' key={item}>{item}</li>)
                        }
                    </ul>
                    <h4 className='my-4'>Corns</h4>
                    <ul>
                        {
                            prosCorns.corsList.map(item => <li className='my-0' key={item}>{item}</li>)
                        }
                    </ul>
                </div>
            </section>
            <section>
                <h2 className='my-3'>{bestRate.title}</h2>
                {
                    bestRate.text.map((para,idx) =><p style={{maxWidth:"100%"}} key={idx}>{para}</p>)
                }
            </section>
        </section>
    );
};

export default FAQ_cashout;