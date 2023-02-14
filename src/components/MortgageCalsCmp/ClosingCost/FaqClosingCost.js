import React from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';
import { LinkRegular } from '../../common/ButtonRegular';
import CalculatorListCard from '../mortgageCals/CalculatorListCard';

const closeCostFAQ = {
    whatCC:{
        title:"What are closing costs?",
        details:[
            {
                text:"At the start of your mortgage loan application, your lender will provide a “official loan estimate”, laying out the expenses associated with processing and finalizing the loan. In addition to information about interest and monthly payment amounts, this loan estimate also includes a breakdown of the associated closing costs.",
                urls:[
                    {
                        name:"mortgage loan application",
                        url:""
                    }
                ]
            },
            {
                text:"Closing costs are the expenses paid at the very end of the homebuying process to finalize the real estate purchase. This collection of fees covers the expenses associated with underwriting the loan as well as the amount paid to any third party service providers that were involved in the sale.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
        ]
    },
    howCC:{
        title:"How do you calculate closing costs on a house?",
        details:[
            {
                text:"Throughout the home loan process, your lender will utilize a number of third-party services required to complete the sale. The charges and fees associated with these service providers are usually covered by the buyer as part of the home’s closing costs.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                text:"For a better understanding of how to calculate closing costs, we’ll need to take a closer look at each fee that is included in our closing costs calculator. Here’s what the some of the common closing costs would look like for a typical buyer and how each of these aspects will impact your mortgage:",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
        ],
        aspectList:[
            "Property appraisal", "Credit report","Flood certification","Tax services fee","Title services","Government recording charges","Transfer taxes"
        ],
        paraList:[
            {
                title:"Property appraisal closing costs",
                description:[
                    {
                        sub_title:"",
                        text:"When you finally decide on a new home, your lender will require an appraisal of the property. A home appraisal, conducted by an impartial third-party, involves a thorough examination of the home to determine the value of the property. The appraiser evaluates the home’s overall condition, amenities and local market outlook to come up with an appropriate sales price.",
                        urls:[
                            {
                                name:"A home appraisal",
                                url:"https://www.rate.com/resources/what-is-a-home-appraisal"
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"Appraisals ensure that the amount loaned is appropriate for the actual value of the home. If the appraised value is less than the seller’s asking price, you can choose to renegotiate with the seller for a lower price to match the estimated value. If the property goes into foreclosure at a later date, your lender can be confident that their losses will be covered by reselling the home back on the market.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"The fees associated with hiring an appraiser are covered by the borrower and usually amount to $300-$600. These fees are settled at the end of the mortgage process and are included in our closing cost estimator.",
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
                title:"Credit report closing costs",
                description:[
                    {
                        sub_title:"",
                        text:"Your credit reports provide a record of a mortgage borrower’s financial status and their history handling debts. These reports are required by lenders, who will conduct a thorough review of your financial background to determine your loan’s parameters and your borrowing eligibility.",
                        urls:[
                            {
                                name:"credit reports",
                                url:"https://www.rate.com/resources/what-is-on-a-credit-report"
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"Any history of closed loans, ongoing debts or credit applications will appear on this report, giving lenders an idea of the risk in providing you with financing, helping to establish an appropriate interest rate and repayment plan.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"Pulling these reports typically includes a fee. This charge is included in our closing cost calculator.",
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
                title:"Flood certification closing costs",
                description:[
                    {
                        sub_title:"",
                        text:"Lenders will want to know if the home purchase they’re financing is at risk of flooding. Flood damage isn’t typically covered by homeowners insurance, which can lead to very expensive problems for buyers and their lenders down the line.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"A flood certification protects against this risk by evaluating whether the home is prone to flooding. If it is, your lender might require you to purchase flood insurance.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"Flood certification is a mandatory mortgage step in certain locations and is included as part of the closing costs as an additional $15-$25 fee, according to LendingTree",
                        urls:[
                            {
                                name:"LendingTree",
                                url:"https://www.lendingtree.com/home/mortgage/understanding-mortgage-closing-costs/"
                            }
                        ]
                    },
                ]
            },
            {
                title:"Tax service fee closing costs",
                description:[
                    {
                        sub_title:"",
                        text:"Tax services are provided by third-party organizations that monitor your taxes and will alert your lender of any delinquent tax payments. This provides the lender with the certainty that all financial aspects of the home are covered and paid in a timely manner.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"The associated fee for tax services varies from lender to lender, and is covered by the buyer upon closing.",
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
                title:"Title service closing costs",
                description:[
                    {
                        sub_title:"",
                        text:"Title services provide all parties involved in the real estate deal with peace of mind that the ownership of the home can legally be transferred from one owner to the other.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"Before the sale of a new home can be finalized, a property title search will need to be conducted. Another individual who shares ownership of the property or a bank that has an ongoing lien on the home can upend the mortgage process, costing the buyer, seller and lender valuable time and money.",
                        urls:[
                            {
                                name:"property title search",
                                url:"https://www.rate.com/resources/what-is-title-search"
                            },
                            {
                                name:"lien on the home",
                                url:"https://www.rate.com/resources/what-is-a-lien-on-a-house"
                            },
                        ]
                    },
                    {
                        sub_title:"",
                        text:"Title services help guarantee that these issues will be uncovered prior to the sale and will not arise throughout the term of the mortgage.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"Title insurance closing costs for lender",
                        text:"Your lender will require their own title insurance policy in order to approve a mortgage. This policy protects your lender from any issues that can arise from an additional legal claim on the property.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"Although this policy only protects the lender against claims that impact the loan, the coverage is still paid for by the mortgage borrower. These costs are settled at closing and are part of our closing cost estimator.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"Title insurance closing costs for buyer",
                        text:"Your own title insurance policy, on the other hand, protects your claim to the property in the event that another individual comes forward with their own claim. Mortgage lenders might require the buyer to have their own title insurance policy.",
                        urls:[
                            {
                                name:"title insurance policy",
                                url:"https://www.rate.com/resources/what-is-a-title-company"
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"The buyer’s policy is customarily covered by the seller, but these details can vary and are settled in early negotiations for the home sale. It is possible for the new owner to pay for their own title insurance, so this factor is also included in our closing cost calculator for buyers.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    }
                ]
            },
            {
                title:"Government recording charge closing costs",
                description:[
                    {
                        sub_title:"",
                        text:"When a property’s title changes hands, government agencies will need to legally record the change in ownership and any documents related to your mortgage.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"Processing a home sale and filing your deed with your local government comes with a fee. This extra charge can be covered by either the buyer or seller, which is determined in the early phases of the home sale negotiations. This fee is paid at closing and the amount can vary widely from location to location.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"Before you agree to settle recording charges on your own, be sure to check with the local government to get an idea of what you can expect to pay.",
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
                title:"Transfer tax closing costs",
                description:[
                    {
                        sub_title:"",
                        text:"When ownership of a property is transferred from one individual to another, the city or state will charge a transfer tax. The amount paid in transfer taxes can vary between locations, but it’s usually calculated as a percentage of the home’s appraised value. Not every state, county or city has transfer taxes, so you’ll have to check local regulations to see if it’s customary.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                    {
                        sub_title:"",
                        text:"Depending on negotiations at the beginning of the real estate deal, transfer taxes can be covered by either the buyer or seller. These taxes are usually set as a percentage of the overall property value.",
                        urls:[
                            {
                                name:"",
                                url:""
                            }
                        ]
                    },
                ]
            },
        ]
    },
    howLCC:{
        title:"How do I lower closing costs?",
        details:[
            {
                sub_title:"",
                text:"There are a number of required services that can be chosen by the buyer, rather than the lender. If the estimated closing costs on your mortgage seems a little steep, shopping for the best deal on these services could help bring down the cost.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                sub_title:"Land survey closing costs",
                text:"Mortgage surveys involve a review of the property’s boundaries and building location to verify that everything is up to code and in accordance with local regulations. Land surveys are not customary in some locations and required in others.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                sub_title:"",
                text:"Most mortgage lenders will require a survey of the home to be conducted prior to providing financing. Without a proper survey, unexpected issues like fines related to zoning violations could interrupt the repayment process and cause complications down the line.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                sub_title:"",
                text:"As a buyer, you’ll be able to shop around for a licensed surveyor, giving you an opportunity to find the best deal. Be sure to verify they are a licensed land surveyor as well as an independent third-party to ensure your new property’s survey is compliant.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                sub_title:"Pest inspection closing costs",
                text:"Some lenders will also require their borrowers to schedule a pest inspection of the property before financing can be approved. Depending on the location of the home, a pest inspection might not be required.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                sub_title:"",
                text:"The size of the home and which pest control agency you choose will determine the cost of this inspection.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                sub_title:"Homeowners insurance closing costs",
                text:"Prior to issuing an approved mortgage loan, lenders will typically require the buyer to offer proof of homeowners insurance coverage. These insurance policies protect the homeowner against property damage or loss in the event of a fire or natural disaster.",
                urls:[
                    {
                        name:"homeowners insurance",
                        url:"https://www.rate.com/resources/what-is-homeowners-insurance"
                    }
                ]
            },
            {
                sub_title:"",
                text:"As a buyer, you’ll be able to choose between providing your own homeowners insurance or acquiring coverage through your lender via an affiliated insurance company. The the first year of coverage is paid for in full upon closing. Be sure to confer with your lender about the cost of acquiring homeowners insurance and its impact on how to estimate closing costs.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
        ]
    },
    CCbuyerSeller:{
        title:"Closing costs for buyer vs. seller",
        details:[
            {
                text:"When it comes time to settle closing costs, the seller covers fewer individual costs, but the total amount they pay can be more. Sellers will usually pay the commissions due to both their real estate agent, as well as the buyer’s. This amount negotiated by the seller when house is listed, and usually comes to about 6% of the home’s purchase price. This cost can vary widely across the county.",
                urls:[
                    {
                        name:"real estate agent",
                        url:"https://www.rate.com/resources/what-does-a-real-estate-agent-do"
                    }
                ]
            },
            {
                text:"Depending on negotiations at the start of the homebuying process, as well as what is customary in that market, the seller may also cover the buyer’s title insurance policy and property taxes if they have not already been paid for that year.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                text:"Escrow fees, are only applicable is certain states, are another cost that will need to be settled at the close of the sale. An escrow account acts as an impartial third party that provides a place to hold funds until a large purchase can be finalized. In real estate, the buyer and seller are required to hand over documentation and finances at different points throughout the homebuying process. These aspects of the mortgage deal are held in escrow, which distributes them accordingly when the deal reaches its conclusion.",
                urls:[
                    {
                        name:" An escrow account",
                        url:"https://www.rate.com/resources/what-is-escrow-account-mortgage"
                    }
                ]
            },
            {
                text:"The cost of escrow accounts is usually a flat rate and can cost up to a few thousand dollars. Since it’s used by both the buyer and seller, the fees associated with an escrow are usually split 50/50.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
        ]
    },
    moreCalc:{
        title:"More mortgage calculators",
        introduction:"For a more comprehensive look at all of the costs associated with buying, selling or refinancing a home, check out Rate.com’s other mortgage calculators:",
        details: [
            {
                sub_title:"After using our closing cost estimator",
                text:"Our closing cost calculator can help you understand all the expenditures that go into a home before applying for the mortgage. With a clear understanding of what is included in closing costs, you’ll be much more equipped to take on the financial hurdles that come with buying a home.",
                urls:[
                    {
                        name:"",
                        url:""
                    }
                ]
            },
            {
                sub_title:"",
                text:"If our closing cost calculator shows that you’re ready and able to take on a home purchase, start the mortgage application process today.",
                urls:[
                    {
                        name:"start the mortgage application process today",
                        url:"https://apply.guaranteedrate.com/apply/express-loan?AdTrk=%7Cgnr%7Cguaranteedrate%7C%7C%7C%7C%7C%7C%7C%7Cdirect%7C%7C%7C%7C%7C"
                    }
                ]
            },
        ]
    }
}

const SimpleFaqRenderer = ({full_para}) =>{
    return <section id={full_para.title}>
        <h1 className='mt-4 mb-3'>{full_para.title}</h1>
        {
            full_para.details.map((para,idx)=>makeHyperLink(para.text,para.urls,idx,"linkSt"))
        }
    </section>
}

const FaqClosingCost = () => {
    const {whatCC,howCC,howLCC,CCbuyerSeller,moreCalc} = closeCostFAQ;
    const titles = Object.entries(closeCostFAQ).map(faqEl=>faqEl[1]).map(faqEl=>faqEl.title);
    return (
        <section>
            <div>
                {
                    titles.map(title => <a className='d-block my-3 linkSt' href={`#${title}`}>{title}</a>)
                }
            </div>

            <SimpleFaqRenderer full_para={whatCC} />
            
            <section id={howCC.title}>
                <h1 className='mt-4 mb-3'>{howCC.title}</h1>
                {
                    howCC.details.map((para,idx)=>makeHyperLink(para.text,para.urls,idx,"linkSt"))
                }
                <ul>
                    {
                        howCC.aspectList.map(item => <li className='my-1' key={item}>{item}</li>)
                    }
                </ul>
                {
                    howCC.paraList.map((paraItem,idx)=><div key={idx}>
                        <h3>{paraItem.title}</h3>
                        {
                            paraItem.description.map((detailsInfo,detailIdx)=><div key={`detail-${detailIdx}`}>
                                {
                                    detailsInfo.sub_title && <h5>{detailsInfo.sub_title}</h5>
                                }
                                
                                {
                                    makeHyperLink(detailsInfo.text,detailsInfo.urls,`${idx}${detailIdx}`,"linkSt")
                                }
                            </div>)
                        }
                    </div>)
                }
            </section>

            <SimpleFaqRenderer full_para={howLCC} />
            <SimpleFaqRenderer full_para={CCbuyerSeller} />
            
            <section className='mb-5' id={moreCalc.title}>
                <h1 className='mt-4 mb-3'>{moreCalc.title}</h1>
                <p>{moreCalc.introduction}</p>
                <CalculatorListCard />
                <h1>After using our closing cost estimator</h1>
                {
                    moreCalc.details.map((para,idx)=>makeHyperLink(para.text,para.urls,idx,"linkSt"))
                }
                <div className='text-center '>
                    <LinkRegular className='my-4 bg-danger text-light' label={"Apply now"} url="" />
                </div>
            </section>
            <hr className='container mx-auto horizontal my-5' />
        </section>
    );
};

export default FaqClosingCost;