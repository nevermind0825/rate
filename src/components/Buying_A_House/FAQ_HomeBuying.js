import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { IconContext } from "react-icons";
import { ReactIcon } from '../common/ButtonRegular';
import { useState } from 'react';
import { handleAccordian } from '../../utils/accordianHandler';
// FcCheckmark

const FAQ_homeBuying = {
    title:"Homebuying FAQ",
    FAQ_list: [
        {
            id:"faq_1",
            question:"Why buying a house right now makes sense",
            answer: {
                introduction:[
                    "No matter what your living situation is, it's pretty common to feel like you need an upgrade to the old homestead. Whether you have your eye on extra bedrooms, a spacious lawn or more storage areas, everyone gets the urge to expand their living space every now and then. Here are just a few life events that might push you into a new home:"
                ],
                reasons: [
                    {
                        image:"Group15",
                        text:["ou’re young, single and just got a promotion. You’re ready to give up renting and build equity in a home of your own."]
                    },
                    {
                        image:"Group26",
                        text:["You just got married and want to move into a bigger home to give you both the space you’re accustomed to, including a dedicated home office."]
                    },
                    {
                        image:"Group9",
                        text:["Your family is growing and you need more bedrooms to give everyone their own personal space."]
                    },
                    {
                        image:"Group25",
                        text:["You had your first kid and need room to balance your family’s needs with your work-at-home responsibilities."]
                    },
                    {
                        image:"Group11",
                        text:["You’re an empty nester and you’re looking to downsize into a home that requires less daily upkeep."]
                    },
                ],
                conclution:[
                    "On top of all of those reasons to buy a house, keep in mind that, as of 2020-2021, mortgage lending rates are at or close to historic lows. There’s no telling when interest rates will go back up, so now’s a good time to take advantage of these buyer-friendly conditions."
                ]
            }
        },
        {
            id:"faq_2",
            question:"What you need to consider before buying a house",
            answer: {
                introduction:[
                    "Homeownership is a huge commitment, especially when it comes to your ongoing finances. You need to be prepared to consistently make your mortgage payments in full every month. There are additional costs to think about as well, including your homeowners insurance, property taxes and any homeowner’s association (HOA) fees you might need to pay. Not to mention, it’s always a good idea to keep a rainy day fund just in case you need to make repairs.",
                    "Before wading into the real estate market, take an honest assessment of your financial situation and ask yourself these questions:"
                ],
                reasons:[
                    {
                        image:"img url 2",
                        text:["Are my finances sufficient and stable enough to afford a monthly mortgage payment?"]
                    },
                    {
                        image:"img url 2",
                        text:["o I have enough saved up for a down payment? If not, have I explored any down payment assistance options that could be available to me?"]
                    },
                    {
                        image:"img url 2",
                        text:[" Do I have additional funds to cover closing costs and unforeseen repairs that may be needed after buying a house"]
                    },
                    {
                        image:"img url 2",
                        text:["Can I pay the extra recurring costs that come with homeownership, like routine maintenance, insurance and property taxes?"]
                    },
                    {
                        image:"img url 2",
                        text:["Have I reviewed my credit score? Do I know how it can affect my interest rate?"]
                    },
                    {
                        image:"img url 2",
                        text:["What is my debt-to-income (DTI) ratio? A low DTI shows a good balance between debt and income."]
                    },
                    {
                        image:"img url 2",
                        text:["Can I pay my monthly mortgage and have enough money left over to cover unexpected expenses like car repairs bills, child care and medical bills?"]
                    },
                ],
                conclution: [
                    "Not sure where to begin? Our handy home affordability calculator can help you figure out how much you can afford to spend on a new house. That includes both your monthly mortgage payments and your maximum housing budget.",
                    "Depending on where your finances are, it may not be the right time to buy a house — and that’s OK! If that’s the case, take the time to pay down existing debt, save up for a down payment and get your finances in order. Trust us, the housing market’s not going anywhere."
                ]
            }
        },
        {
            id:"faq_3",
            question:"How to buy a house today",
            answer: {
                introduction:[
                    "Don’t go into the homebuying process without educating yourself first. There’s a lot — and we mean a lot — that goes into buying a house. These are just a few of the items you should keep in mind as you begin your search:"
                ],
                reasons:[
                    {
                        image:"Group23",
                        title:"Your list of must-have features",
                        text:["Know what you absolutely need in a home to narrow down your options and direct your search toward the right locations and properties."]
                    },
                    {
                        image:"Group1333",
                        title:"State of the market",
                        text:["You need to act fast in hot housing markets and get an attractive offer on the table ahead of competing buyers."]
                    },
                    {
                        image:"DesktopIcon_newv2",
                        title:"Your loan options",
                        text:["There are a variety of loan options to choose from, including fixed rate, adjustable-rate and government-insured mortgages. Find the one that best meets your future ]plans and financial situation."]
                    },
                    {
                        image:"Group33",
                        title:"Current interest rates",
                        text:["Compare mortgage lending rates against historical trends to see how favorable your home loan conditions are. Keep in mind you may be able to refinance your mortgage ]later on to take advantage of a better interest rate."]
                    },
                    {
                        image:"Group12",
                        title:"Your budget",
                        text:["Figure out how much money you’re comfortable spending on a new house."]
                    },
                ],
                conclution:[]
            }
        },
        {
            id:"faq_4",
            question:"15 steps to buying a house",
            answer: {
                introduction:[
                    "Buying a house can seem daunting whether you’re a first-time homebuyer or you’ve gone through this song and dance before. What you need is a “buying a house checklist” so you don’t overlook anything. Follow these 15 steps to buying a house so you can be absolutely sure you have all of your bases covered:"
                ],
                reasons:[
                    {
                        title:"Decide if buying a house is right for you",
                        text:[
                            "Before you get too deep into the process of buying a house, you want to be certain you’re ready for homeownership. Given your financial circumstances, is now a good time to buy a house at this point in your life? If money’s tight or you don’t plan to stick around in one place for too long, it might make more sense to keep on renting."
                        ]
                    },
                    {
                        title:"Find out how much you can afford",
                        text:[
                            "Nothing’s more discouraging than finding the perfect home only to realize that the asking price is far more than you can afford. Set the right expectations for your house search by running the numbers in a home affordability calculator. Keep in mind, there can be a big difference between what you can afford and what you’re comfortable paying."
                        ]
                    },
                    {
                        title:"Set a homebuying budget",
                        text:[
                            "Give yourself a firm budget to stick to, with an absolute maximum amount you’re OK spending on a new house. Remember: In addition to the listing price, you should think about your budget in terms of the down payment and your ongoing mortgage payments. Those are the costs that are going to hit your bank account the hardest — both at the point of sale and on a monthly basis.",
                            "As a general rule of thumb, your total debt, including monthly housing payments, should not exceed 43% of your gross income. Use this guideline to adequately budget for your housing costs and avoid spending more than you’re comfortable each month."
                        ]
                    },
                    {
                        title:"Polish your loan application qualifications",
                        text:[
                            "You may feel ready at this point to go out and get pre-approved for a home loan, but it may be a good idea to take some time to improve your application credentials first. That’s especially true if you have a low credit score, high debt or low funds in your bank account. Those are some of the biggest factors lenders will weigh when assessing your mortgage worthiness. If you’re not in a huge hurry to buy a house, you may want to pay down some existing debt, boost your credit score and build up a fund for your down payment.*"
                        ]
                    },
                    {
                        title:"Shop around for the best mortgage rate",
                        text:[
                            "Thanks to digital mortgages, homebuyers have more options than ever to consider with their mortgage lenders. Reach out to different lenders to see which one will give you the best mortgage rate possible. A common misconception is that running multiple credit checks during the pre-approval process will badly hurt your credit score. While this may be true for other financial services, like applying for several credit cards at once, credit bureaus are pretty good about recognizing rate shopping as long as those inquiries fall within a short period of time. That being said, you should expect any inquiry to impact your credit score to some degree."
                        ]
                    },
                    {
                        title:"Choose a home loan type",
                        text:[
                            "A lot of homebuyers decide to go with the standard 30-year fixed rate mortgage, but there are plenty of other options to consider. For instance, you may want to cut the length of your home loan in half, and go with a 15-year fixed rate mortgage instead. You’ll be looking at a quicker timeline to pay back your home loan, but that also means you’ll own your home free and clear sooner.",
                            "Are you worried about putting down 20% for the down payment or having a low credit score affect your mortgage interest rate? Not a problem. Conventional financing offers many lower down payment options to consider. In addition, government-insured mortgages like FHA loans are designed to help people qualify even if they don’t meet the criteria that lenders typically look for in a low-risk borrower."
                        ]
                    },
                    {
                        title:"Get a pre-approval letter",
                        text:[
                            "Every step up to this point has been focused on preparing you for the mortgage process, but now you’re ready to get in touch with a lender and see what kind of home loan you qualify for. Assuming your finances and credit history are in good shape, your lender of choice will issue you a pre-approval letter that shows they’re willing to extend you a mortgage. Unless you’re buying a house with cash, sellers will want to see that you’ve been pre-approved for a mortgage so they know you're serious about buying a house. Keep in mind, pre-approvals come with an expiration date, usually 60 to 90 days after being issued.",
                            "When you find a lender you like, see if you can lock your rate in case mortgage rates increase during the sale process. Not all lenders will lock a loan that’s still under a pre-approval, but it’s worth asking your loan officer. Like pre-approval letters, your mortgage rate is only good for a certain amount of time. You can expect that locked rate to stand for anywhere from 15 to 60 days. The clock’s ticking, so get a move on with your house search!"
                        ]
                    },
                    {
                        title:"Find a real estate agent",
                        text:[
                            "You could, in theory, go solo with your house search. But by doing so, you’re probably going to put yourself at a disadvantage. Professional real estate agents understand the ins and outs of the housing market, including how much homes are really worth and even catching wind of new houses before they go on sale. Given the stakes at play here, you want all the help and guidance you can get. Having an agent in your corner to manage the transaction is a smart way to avoid potential risks during the sale process."
                        ]
                    },
                    {
                        title:"Decide what you need in a home",
                        text:[
                            "What matters most to you when buying a house? Location? School district? The size of the yard? A fully furnished kitchen? You should go into your house search with a clear idea of what you absolutely need in a new house vs. what you would like to have. Lay out what your deal-breakers are so you and your real estate agent are on the same page and can make the most of your time when looking at houses."
                        ]
                    },
                    {
                        title:"Hit the pavement and start your search",
                        text:[
                            "You’ve got your budget, your pre-approval letter, your real estate agent and your list of must-haves — now you’re ready to start checking out houses. It’s always a good idea to drive around areas you’re interested in to get a feel for the neighborhood and see what’s on the market. Better yet, take a walk around the block to see if the area’s a good fit for you.",
                            "If you can’t find what you’re looking for in the ideal location, you have two choices: expand your search to other areas or compromise on the quality of the house itself. Remember: You can always renovate a kitchen or bathroom, but you can’t move your dream house to a better location."
                        ]
                    },
                    {
                        title:"Submit your offer",
                        text:[
                            "Once you’ve found what you’re looking for in a house, don’t hesitate to put in your offer before someone else beats you to it. Work with your real estate agent to come up with a purchase price you think is fair. This is also the time to consider any additional contingencies you may want to tack onto your offer — but be aware that those contingencies may sour the deal for some sellers."
                        ]
                    },
                    {
                        title:"Conduct an inspection and appraisal",
                        text:[
                            "Just because the seller conditionally accepts your offer, that doesn’t make the sale a done deal. There could be any number of issues with the house that require your attention, from leaky pipes and broken laundry units to busted water heaters and out-of-code electrical wiring. The home inspection should bring any potential headaches to light, giving you a chance to negotiate the cost of repairs with the seller.",
                            "Meanwhile, your lender will schedule a home appraisal to ensure the property is sufficient collateral for the terms of your requested loan. If the appraisal comes back lower than the sale price, your lender may counter with new loan terms. That, in turn, may require the borrower to come up with a bigger down payment or renegotiate the price with the seller."
                        ]
                    },
                    {
                        title:"Work out any contingencies",
                        text: [
                            "So, you have an agreement in principle with the seller and both the inspection and appraisal came through with flying colors. But you’re not done yet if you attached contingencies to your offer. This is the time to sort those out. For instance, some offers are contingent on the buyer selling their current home and using the proceeds from that sale as a down payment. Depending on the exact nature of the contingency, it could make or break the deal you have on the table."
                        ]
                    },
                    {
                        title:"Secure your home loan",
                        text:[
                            "You’ve locked in your mortgage rate and received a pre-approval letter, but your mortgage application still needs to go through the underwriting process and get full approval to move forward with your home loan. That could mean more back-and-forth with your lender and even responding to additional requests for documentation or reviews of your financial statements. Don’t get discouraged if it seems like there are some last-minute curveballs being thrown your way. You’re in the final stretch, that home is almost yours."
                        ]
                    },
                    {
                        title:"Close on the house",
                        text:[
                            "This is it; that moment you’ve been waiting for! Hopefully, every little wrinkle has been ironed out and things will go smoothly from here. That being said, you may find that you need to do some final negotiating with the seller before deeds are signed and titles are transferred.",
                            "Get all of your ducks in a row — collecting necessary paperwork, selecting homeowners insurance, producing any financial documents that may be requested — to avoid any delays and close on your new house as quickly as you can.",
                            "No matter what happens, your loan officer and real estate agent are there to answer any questions and help you make the best decision possible. Just a few final hurdles and you’ll be a new homeowner, congratulations!"
                        ]
                    },
                ],
                conclution:[]
            }
        },
        {
            id:"faq_5",
            question:"Renting vs. buying a house",
            answer: {
                introduction:[
                    "Buying a house is pretty appealing if you’ve spent years dealing with landlords and spending a big portion of your income on rent. Both renting and buying a home have their merits, but these are the biggest considerations to weigh:"
                ],
                reasons:[
                    {
                        title:"Cost",
                        text:[
                            "You need to put more money up front when buying a house, but locking in a mortgage rate today means your monthly payments won’t necessarily be dictated by the whims of the housing market later on. Check out our rent vs. buy calculator to get an idea of how much money you might be able to save by buying a home of our own."
                        ],
                        img:"Group291"
                    },
                    {
                        title:"Equity",
                        text:[
                            "Rent is a sunk cost. Aside from maybe your security deposit, any money you give your landlord is gone for good. On the other hand, every mortgage payment you make builds equity in your home."
                        ],
                        img:"Group301"
                    },
                    {
                        title:"Taxes",
                        text:[
                            "Homeowners need to account for property taxes in their budgets. But keep in mind that renters may still feel the sting when property taxes go up, albeit indirectly, through rent increases. On the other hand, there may be tax incentives for you to take advantage of as a homeowner. Guaranteed Rate does not offer tax advice. Contact your tax advisor with all tax-related questions."
                        ],
                        img:"Group241"
                    },
                ],
                conclution:[]
            }
        },
        {
            id:"faq_6",
            question:"6 ways to save money when buying a house",
            answer: {
                introduction:[
                    "With your down payment, mortgage, homeowners insurance, closing costs and other expenses to consider, buying a house can be pretty pricey. At the same time, it’s a great way to build wealth, and it’s worth the investment. There are ways to save yourself some money** — not to mention headaches — as you go through the homebuying process. Look at these six ways to save money when you’re buying a house:"
                ],
                reasons:[
                    {
                        title:"Get the best mortgage rate",
                        text:[
                            "Shop around to make sure you get the lowest interest rate and best terms on your home loan. Boosting your credit score, lowering your DTI and taking other steps to improve your loan application will also help."
                        ]
                    },
                    {
                        title:"Stick with private mortgage insurance (PMI)",
                        text:[
                            "Borrowers who are unable to put down at least 20% of the home’s price as a down payment will almost assuredly need to pay for PMI. Conventional wisdom would say you should avoid PMI at all costs, but the tradeoff isn’t so bad. On the one hand, you could spend years saving up for a down payment, but you would only delay building equity in a new home. Real estate prices may go up during that time, forcing you to save even more money or settle for a less expensive house. Accumulating equity and wealth through homeownership as soon as possible generally outstrips the added cost of PMI over the long haul."
                        ]
                    },
                    {
                        title:"House hunt out of season",
                        text:[
                            "Housing markets run hot and cold depending on the time of year. The peak season for sellers typically starts in spring and runs through summer. You’re likely to see less competition in the fall and winter months, so you won’t face as much pressure to put the most competitive offer on the table."
                        ]
                    },
                    {
                        title:"Expand your house search",
                        text:[
                            "Everyone wants to live in a hot neighborhood that’s close to amenities, but a great location comes at a great cost. Consider expanding the scope of your search to cover other areas that can give you more space at a lower price."
                        ]
                    },
                    {
                        title:"Check out houses that need some TLC",
                        text:[
                            "You’re probably going to pay top dollar if you want a house that’s already fitted with the latest furnishings. Homes that need a little work and minor renovations can offer big discounts, and renovation loans like an FHA 203K, Freddie Mac CHOICERenovation® or Fannie Mae Homestyle® Renovation mortgage might help balance those additional costs. Just be sure to schedule a home inspection first, checking that any property you buy is in good, livable condition and won’t require major structural changes to the foundation or roof."
                        ]
                    },
                    {
                        title:"Explore all of your loan options",
                        text:[
                            "A 30-year fixed rate mortgage may be an industry standard, but that doesn’t mean it’s always the best option for every borrower. Review different types of home loans like ARMs, FHA and VA loans to see which one will net you the lowest cost."
                        ]
                    },
                ],
                conclution:[]
            }
        },
        {
            id:"faq_7",
            question:"How to find the lowest mortgage rate",
            answer: {
                introduction:[
                    "Buying a house is a huge financial commitment — one that you’ll need to continue making payments on for years to come. With that in mind, you want to be sure you’re getting the best mortgage rate possible so you can lower the total cost of your home. Shop around and see what offers different lenders are willing to put on the table.",
                    "Ready to buy a home you can truly call your own? Let our experienced mortgage lending team help you find the right loan option at the right interest rate to fit your budget. The journey to your dream home starts here."
                ],
                reasons:[],
                conclution:[
                    "*Guaranteed Rate does not provide credit repair or credit counseling services.",
                    "** Savings, if any, vary based on consumer’s credit profile, interest rate availability, and other factors. Contact Guaranteed Rate, Inc. for current rates. Restrictions apply.",
                    "Applicant subject to credit and underwriting approval. Not all applicants will be approved for financing. Receipt of application does not represent an approval for financing or interest rate guarantee. Restrictions may apply, contact Guaranteed Rate for current rates and for more information. All information provided in this publication is for informational and educational purposes only, and in no way is any of the content contained herein to be construed as financial, investment, or legal advice or instruction. Guaranteed Rate, Inc. does not guarantee the quality, accuracy, completeness or timelines of the information in this publication. While efforts are made to verify the information provided, the information should not be assumed to be error free. Some information in the publication may have been provided by third parties and has not necessarily been verified by Guaranteed Rate, Inc. Guaranteed Rate, Inc. its affiliates and subsidiaries do not assume any liability for the information contained herein, be it direct, indirect, consequential, special, or exemplary, or other damages whatsoever and howsoever caused, arising out of or in connection with the use of this publication or in reliance on the information, including any personal or pecuniary loss, whether the action is in contract, tort (including negligence) or other tortious action. Guaranteed Rate does not provide tax advice. Please contact your tax adviser for any tax related questions. Some loan products discussed in this article may not be available from or brokered by any of the Guaranteed Rate Companies."
                ]
            }
        },
    ]
}


const faq_StyleProvider = (idx) =>{
    switch (idx) {
        case 0:
            
            return {rowST:"row", colST:"col-12 col-md-6 d-flex align-items-center"}
    
        default:
            break;
    }
}

const faq_homebuy_QL = graphql`

    query faq_homebuy_QL {
        whybuynow:allFile(
        filter: {relativeDirectory: {eq: "refinance-mortgage"}, name: {in: ["Group11","Group9","Group15","Group25","Group26"]}}
    ) {
        nodes {
        name
        childImageSharp {
            gatsbyImageData
        }
        }
    }

    howBuyToday_imgs: allFile(filter: {name: {in: ["Group12", "Group1333","Group23","DesktopIcon_newv2","Group33"]}}) {
        nodes {
        childImageSharp {
            gatsbyImageData (width:50)
        }
        name
        size
        }
    }

    rentVsBuy: allFile(
    filter: {name: {in: ["Group291","Group241","Group301"]}}
  ) {
    nodes {
      childImageSharp {
        gatsbyImageData
      }
      name
      size
    }
  }


}

`

const FAQ_HomeBuying = () => {
    const {
        whybuynow:{nodes:whybuynow_imgs},
        howBuyToday_imgs:{nodes:howBuyHomeImgs},
        rentVsBuy:{nodes:rentVsBuyImg}
    } = useStaticQuery(faq_homebuy_QL);
    const [faq_15StepsAccordians,setFaq_15StepsAccordians] = useState([]);
    const [sixWaysSaveAccordians,setSixWaysSaveAccordians] = useState([]);
    // console.log(rentVsBuyImg,"rentVsBuyImg");
    
    return (
        <div>
            <h2>{FAQ_homeBuying.title}</h2>
            <div>
                {
                    FAQ_homeBuying.FAQ_list.map(faq=>faq.question).map((item,idx) =><Link className='linkSt d-block my-2' to={`#${item}`}  key={idx} >{item}</Link>)
                }
            </div>
            
            <section className='my-5'>
                <h2>{FAQ_homeBuying.FAQ_list[0].question}</h2>
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[0].answer.introduction.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
                <div className='row'>
                    {
                        FAQ_homeBuying.FAQ_list[0].answer.reasons.map((reason,idx)=>{
                                    const gatsImg = whybuynow_imgs.find(img=>img.name === reason.image)?.childImageSharp;
                                    // return <div className={`col-12 col-md-6 d-flex align-items-center`} key={`reason${idx}`}>
                                    return <div className={`col-12 col-md-6`} key={`reason${idx}`}>
                                        <div style={{display:"grid", gridTemplateColumns:"60px 1fr", alignItems:"center"}}>
                                            <div style={{minWidth:"60px",}}>
                                                <GatsbyImage image={getImage(gatsImg)} ></GatsbyImage>
                                            </div>
                                            <div className='ms-3'>
                                                <h4>{reason.title}</h4>
                                                {
                                                    reason.text.map(reasonPara => <p key={`reasonPara_${idx}`}>{reasonPara}</p>)
                                                }

                                            </div>
                                        </div>
                                    </div>
                                })
                    }
                </div>
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[0].answer.conclution.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
            </section>

            <section className='my-5'>
                <h2>{FAQ_homeBuying.FAQ_list[1].question}</h2> 
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[1].answer.introduction.map((para,idx)=><p className='my-3' style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
                <div className='row'>
                    {
                        FAQ_homeBuying.FAQ_list[1].answer.reasons.map((reason,idx)=>{
                                    const gatsImg = whybuynow_imgs.find(img=>img.name === reason.image)?.childImageSharp;
                                    return <div className={`d-flex align-items-center`} key={`reason${idx}`}>
                                        <div>
                                            <GatsbyImage image={getImage(gatsImg)} ></GatsbyImage>
                                            <ReactIcon >
                                                <FcCheckmark size={20}  />
                                            </ReactIcon>
                                        </div>
                                        <div className='ms-3'>
                                            <h4>{reason.title}</h4>
                                            {
                                                reason.text.map(reasonPara => <p className='my-2' style={{maxWidth:"100%"}} key={`reasonPara_${idx}`}>{reasonPara}</p>)
                                            }
                                        </div>
                                    </div>
                                })
                    }
                </div>
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[1].answer.conclution.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
            </section>
            <section className='my-5'>
                <h2 className='my-3'>{FAQ_homeBuying.FAQ_list[2].question}</h2>
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[2].answer.introduction.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
                <div className='row'>
                    {
                        FAQ_homeBuying.FAQ_list[2].answer.reasons.map((reason,idx)=>{
                            const gatsImg = howBuyHomeImgs.find(img=>img.name === reason.image)?.childImageSharp;
                            // return <div className={`col-12 col-md-6 d-flex align-items-center`} key={`reason${idx}`}>
                            return <div className={`col-12 col-md-6`} key={`reason${idx}`}>
                                <div style={{display:"grid", gridTemplateColumns:"50px 1fr", alignItems:"center"}}>
                                    <div style={{minWidth:"50px",}}>
                                        <GatsbyImage style={{maxWidth:"60px"}} image={getImage(gatsImg)} ></GatsbyImage>
                                    </div>
                                    <div className='ms-5'>
                                        <h4>{reason.title}</h4>
                                        {
                                            reason.text.map(reasonPara => <p key={`reasonPara_${idx}`}>{reasonPara}</p>)
                                        }

                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[2].answer.conclution.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
            </section>
            <section className='my-5'>
                <h2 className='my-3' >{FAQ_homeBuying.FAQ_list[3].question}</h2> 
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[3].answer.introduction.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
                <div className='row'>
                    {
                        FAQ_homeBuying.FAQ_list[3].answer.reasons.map((reason,idx)=><div className={``} key={`reason${idx}`}>
                                        <div className='border-bottom'>
                                            <h4 
                                                className='py-3 border-top' 
                                                style={{cursor:"pointer"}} 
                                                onClick={()=>handleAccordian(setFaq_15StepsAccordians,idx)}
                                            >
                                                <span className='text-danger me-3 mb-4'>{idx+1}</span>
                                                 {reason.title}
                                            </h4>
                                            <div style={{ height: faq_15StepsAccordians.includes(idx)? "auto":"0", overflow:"hidden",}} >
                                                {
                                                    reason.text.map((reasonPara,resParaidx) => <p style={{maxWidth:"100%"}} key={`reasonPara_${resParaidx}`}>{reasonPara}</p>)
                                                }
                                            </div>

                                        </div>
                                    </div>
                                )
                    }
                </div>
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[3].answer.conclution.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
            </section>
            <section className='my-5'>
                <h2>{FAQ_homeBuying.FAQ_list[4].question}</h2> 
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[4].answer.introduction.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
                <div className=''>
                    {
                        FAQ_homeBuying.FAQ_list[4].answer.reasons.map((reason,idx)=>{
                                    const gatsImg = rentVsBuyImg.find(img=>img.name === reason.img)?.childImageSharp;
                                    // return <div className={`d-flex align-items-center`} key={`reason${idx}`}>
                                    return <div style={{display:"grid", gridTemplateColumns:"50px 1fr", alignItems:"center"}} key={`reason${idx}`}>
                                        
                                            <div>
                                                <GatsbyImage image={getImage(gatsImg)} ></GatsbyImage>
                                            </div>
                                            <div className='ms-3'>
                                                <h4>{reason.title}</h4>
                                                {
                                                    reason.text.map(reasonPara => <p style={{maxWidth:"100%"}} key={`reasonPara_${idx}`}>{reasonPara}</p>)
                                                }
                                            </div>
                                        
                                    </div>
                                })
                    }
                </div>
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[4].answer.conclution.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
            </section>
            <section className='my-5'>
                <h2 className='my-3'>{FAQ_homeBuying.FAQ_list[5].question}</h2> 
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[5].answer.introduction.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
                <div className='border-top'>
                    {
                        FAQ_homeBuying.FAQ_list[5].answer.reasons.map((reason,idx)=>{
                                    const gatsImg = whybuynow_imgs.find(img=>img.name === reason.image)?.childImageSharp;
                                    return <div className={`d-flex align-items-center`} key={`reason${idx}`}>
                                        <div>
                                            <GatsbyImage image={getImage(gatsImg)} ></GatsbyImage>
                                        </div>
                                        <div className='border-bottom'>
                                            <h4
                                                className='py-3' 
                                                style={{cursor:"pointer"}} 
                                                onClick={()=>handleAccordian(setSixWaysSaveAccordians,idx)}
                                            >{reason.title}</h4> 
                                            <div style={{ height: sixWaysSaveAccordians.includes(idx)? "auto":"0", overflow:"hidden",}} >
                                                {
                                                    reason.text.map(reasonPara => <p key={`reasonPara_${idx}`}>{reasonPara}</p>)
                                                }
                                            </div>

                                        </div>
                                    </div>
                                })
                    }
                </div>
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[5].answer.conclution.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
            </section>
            <section className='my-5'>
                <h2>{FAQ_homeBuying.FAQ_list[6].question}</h2> 
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[6].answer.introduction.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
                <div className='row'>
                    {
                        FAQ_homeBuying.FAQ_list[6].answer.reasons.map((reason,idx)=>{
                                    const gatsImg = whybuynow_imgs.find(img=>img.name === reason.image)?.childImageSharp;
                                    return <div className={`col-12 col-md-6 d-flex align-items-center`} key={`reason${idx}`}>
                                        <div>
                                            <GatsbyImage image={getImage(gatsImg)} ></GatsbyImage>
                                        </div>
                                        <div className='ms-3'>
                                            <h4>{reason.title}</h4>
                                            {
                                                reason.text.map(reasonPara => <p key={`reasonPara_${idx}`}>{reasonPara}</p>)
                                            }

                                        </div>
                                    </div>
                                })
                    }
                </div>
                <div>
                    {
                        FAQ_homeBuying.FAQ_list[6].answer.conclution.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                    }
                </div>
            </section>

{/* 
            <div>
                {
                    FAQ_homeBuying.FAQ_list.map((faq,faqIdx) => <section className='my-5' id={faq.question} key={faq.id}>
                        <h2>{faq.question}</h2>
                        <div>
                            {
                                faq.answer.introduction.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para_${idx}`}>{para}</p>)
                            }
                        </div>
                        <div className={`${faq_StyleProvider(faqIdx)?.rowST}`}>
                            {
                                faq.answer.reasons.map((reason,idx)=>{
                                    const gatsImg = whybuynow_imgs.find(img=>img.name === reason.image)?.childImageSharp;
                                    return <div className={`${faq_StyleProvider(faqIdx)?.colST}`} key={`reason${idx}`}>
                                        <div>
                                            <GatsbyImage image={getImage(gatsImg)} ></GatsbyImage>
                                        </div>
                                        <div className='ms-3'>
                                            <h4>{reason.title}</h4>
                                            {
                                                reason.text.map(reasonPara => <p key={`reasonPara_${idx}`}>{reasonPara}</p>)
                                            }

                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div>
                            {
                                faq.answer.conclution.map((para,idx)=><p key={`para_${idx}`}>{para}</p>)
                            }
                        </div>
                    </section>)
                }
            </div> 
            */}

        </div>
    );
};

export default FAQ_HomeBuying;