import React from 'react'
import head from '../../images/mortgage_basics/glossary/glossary.png'
import Layout from '../../components/Layout/layout'
import a from "../../images/mortgage_basics/glossary/a.png"
import c from "../../images/mortgage_basics/glossary/c.png"
import d from "../../images/mortgage_basics/glossary/d.png"
import e from "../../images/mortgage_basics/glossary/e.png"
import f from "../../images/mortgage_basics/glossary/f.png"
import g from "../../images/mortgage_basics/glossary/g.png"
import h from "../../images/mortgage_basics/glossary/h.png"
import i from "../../images/mortgage_basics/glossary/i.png"
import l from "../../images/mortgage_basics/glossary/l.png"
import m from "../../images/mortgage_basics/glossary/m.png"
import p from "../../images/mortgage_basics/glossary/p.png"
import r from "../../images/mortgage_basics/glossary/r.png"
import t from "../../images/mortgage_basics/glossary/t.png"
import u from "../../images/mortgage_basics/glossary/u.png"
import "./style.css"
import { navigate } from 'gatsby'
import RelatedPosts from '../../components/HomeComponents/RelatedPosts/RelatedPosts'
import GoBackNav from '../../components/mortgageBasics/gobackNav'
import ImageDiv from '../../components/mortgageBasics/imageDiv'


const data = [
  {
    image: a,
    phrase: [
      {
        key: "ADJUSTABLE RATE",
        value: "An interest rate that changes periodically according to an index."
      },
      {
        key: "AMORTIZATION",
        value: "A repayment schedule detailing how payments are applied to principal and interest."
      },
      {
        key: "APPRAISAL",
        value: "A written report of a property's current market value, based on recent sales information for similar properties. the current condition of the property and how the neighborhood might affect future property value."
      },
    ]
  },
  {
    image: c,
    phrase: [
      {
        key: "CLOSING COSTS",
        value: "Fees incurred in a real estate or mortgage transaction and paid by borrower and/or seller during a mortgage loan closing. These typically include a loan origination fee, discount points, attorney's fees, title insurance, appraisal, survey and any items that must be prepaid, such as taxes and insurance escrow payments. The cost of closing is usually about 2 to 5 percent of the mortgage amount. Closing costs vary based on property location."
      },
      {
        key: "CLOSING (OR SETTLEMENT)",
        value: "Meeting between the buyer, seller, and lender or their agents at which property and funds legally change hands."
      },
      {
        key: "CONVERTIBLE ARMS",
        value: "current"
      },
    ]
  },
  {
    image: d,
    phrase: [
      {
        key: "DEBT-TO-INCOME RATIO",
        value: "The ratio, expressed as a percentage, results when a borrower's monthly payment obligation on long-term debts is divided by gross monthly income."
      },
      {
        key: "DOWN PAYMENT",
        value: "Money paid for a house by the home buyer toward the purchaser's price. The down payment will be the difference between the purchase price and the mortgage amount."
      }
    ]
  },
  {
    image: e,
    phrase: [
      {
        key: "EQUITY ",
        value: "Value of ownership built in a home or property that represents the current market value less any remaining mortgage balance(s)."
      },
      {
        key: "ESCROW ",
        value: "The neutral third party that holds money and/or documents until the escrow instructions are fulfilled, escrow can be a title company or an attorney, depending on state regulations."
      }
    ]
  },
  {
    image: f,
    phrase: [
      {
        key: "FIXED-RATE MORTGAGE",
        value: "A mortgage with an interest rate that doesn't change for the life of the loan, guaranteeing fixed payments."
      }
    ]
  },
  {
    image: g,
    phrase: [
      {
        key: "GRACE PERIOD ",
        value: "Period of time during which a loan payment may be made after its due date without incurring a late penalty."
      }
    ]
  },
  {
    image: h,
    phrase: [
      {
        key: "HOME EQUITY LOAN",
        value: "A loan secured by equity in a property. These are sought for a variety of purposes, including home improvements, major purchases or expenses, and debt consolidation."
      }
    ]
  },
  {
    image: i,
    phrase: [
      {
        key: "INDEX",
        value: "A published rate used by lenders to calculate interest adjustments on ARMs (Index + Margin = Interest Rate). Some indices are more volatile than others."
      },
      {
        key: "INTEREST RATE",
        value: "The periodic charge, expressed as a percentage, for use of credit."
      }
    ]
  },
  {
    image: l,
    phrase: [
      {
        key: "LIEN",
        value: "A claim against a property by the bank or lender to secure repayment of the debt, typically in the form of a mortgage."
      },
      {
        key: "LOAN ORIGINATION FEE",
        value: "A fee a lender charges to process a mortgage, usually expressed as a percentage of the loan (or points), which pays for the work in evaluating and processing the loan."
      },
      {
        key: "LOCK OR LOCK-IN",
        value: "A lender's guarantee of an interest rate for a set period of time, usually between loan application and loan closing. This protects borrowers against rate increases during that time."
      },
    ]
  },
  {
    image: m,
    phrase: [
      {
        key: "MORTGAGE INSURANCE PREMIUM (MIP)",
        value: "Insurance required on an FHA mortgage to protect the lender in the event of default."
      },
      {
        key: "MORTGAGE",
        value: "A document that creates a lien on a property as security for the payment of a debt."
      }
    ]
  },
  {
    image: p,
    phrase: [
      {
        key: "PREQUALIFICATION",
        value: "The process of determining how much money a prospective homebuyer may borrow, prior to application for a loan."
      },
      {
        key: "PRINCIPAL",
        value: "The amount of debt, not counting interest, owed on a loan."
      },
      {
        key: "PRIVATE MORTGAGE INSURANCE (PMI)",
        value: "Insurance purchased by a buyer on a conventional loan when a down payment is less than 20 percent of the purchase price to protect the lender against default."
      },
    ]
  },
  {
    image: r,
    phrase: [
      {
        key: "REFINANCING",
        value: "The process of paying off one loan with the proceeds from a new loan secured by the same property."
      }
    ]
  },
  {
    image: t,
    phrase: [
      {
        key: "TERM",
        value: "The number of years until a loan is due to be paid in full."
      },
      {
        key: "TITLE/DEED",
        value: "A document that gives evidence of ownership of a property, as well as rights of ownership and possession."
      }
    ]
  },
  {
    image: u,
    phrase: [
      {
        key: "UNDERWRITING",
        value: "The process of verifying data and evaluating a loan application. The underwriter gives the final loan decision."
      },
    ]
  },
]


const Glossary = () => {
  return (
    <Layout>
      <ImageDiv src={head}/>
      <GoBackNav/>
      <div className='subtitle'>
        <h3 className="h3font">THINKING ABOUT BUYING YOUR FIRST HOME? THE MORTGAGE INDUSTRY IS FULL OF TERMS THAT CAN BE CONFUSING.
          BELOW IS A GLOSSARY OF TERMS TO HELP YOU UNDERSTAND MORTGAGES AND MAKE YOUR BUYING PROCESS EASIER.</h3>
      </div>
      <div>
        {
          data.map(item => {
            return (
              <div className='glossaryCont'>
                <img className='alphabets' src={item.image}></img>
                <div className='phrase'>
                  {
                    item.phrase.map(subitem =>
                      <div>
                        <span className='keys'>{subitem.key}</span>
                        <span className='values'> - {subitem.value}</span>)
                      </div>)
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <RelatedPosts/>
    </Layout>
  )
}

export default Glossary