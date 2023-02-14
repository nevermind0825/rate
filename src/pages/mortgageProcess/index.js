import React from 'react'
import Layout from '../../components/Layout/layout'
import "./style.css"

const MortgageProcess = () => {
    return (
        <Layout>
            <h3 className='banner'>PURCHASE MORTGAGE PROCESS</h3>
            <div className='subCont'>
                <div className='approve'>
                    Get Pre-Approved
                </div>
                <div className='preapprove'>
                    Getting pre-approved for a loan is a must. So, first, start and complete your loan application.
                    Next, turn in supporting documents: Credit, Income, and Assets. Our Loan Officer will then review
                    your information and determine how much you are qualified to borrow.
                </div>
            </div>
        </Layout>
    )
}

export default MortgageProcess