import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout/layout';
import Cachets from '../components/PowerbidCmp/competeCachet/Cachets';
import FreeGuidBanner from '../components/PowerbidCmp/FreeGuidBanner';
import HowWorkBanner from '../components/PowerbidCmp/HowWorkBanner';
import PowerbidBanner from '../components/PowerbidCmp/PowerbidBanner';


const Powerbid = () => {
    return (
        <Layout>
            <PowerbidBanner />
            <Cachets />
            <HowWorkBanner />
            <FreeGuidBanner />
            <div className='container'>
                <p style={{fontSize:"12px", lineHeight:"20px", letterSpacing:"0"}}>* PowerBid Approval (the “Approval”) is contingent upon receipt of executed sales contract, an acceptable appraisal supporting value, valid hazard insurance policy, and a re-review of your financial condition. Guaranteed Rate, Inc. reserves the right to revoke this Approval at any time if there is a change in your financial condition or credit history which would impair your ability to repay this obligation and/or if any information contained your application is untrue, incomplete or inaccurate. Receipt of an application does not represent an approval for financing or interest rate guarantee. Not all applicants will be approved for financing. Restrictions may apply, contact Guaranteed Rate for current rates and for more information.</p>
            </div>
            <hr className='container horizontal my-5 mx-auto' />
        </Layout>
    );
};

export default Powerbid;