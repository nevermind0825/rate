import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';



const bottomFooterLinks = [
    {name:"Delaware Licensed Loan Officers", url:"/delaware-licensed-loan-officers"},
    {name:"Texas consumer", url:"/texas-consumers-how-to-file-complaint"},
    {name:" Do not sell my personal information", url:"/"},
]


const BottomFooter = () => {
    return (
        <div className='container my-5 pb-5'>
            <div style={{margin:"20px 0",}}>
                {
                    bottomFooterLinks.map((shortLink,idx) => <Link className='text-black text-decoration-none' style={{fontWeight:400}} to={shortLink.url} key={idx}>{shortLink.name}{idx !== bottomFooterLinks.length -1 ? " | ":""}</Link>)
                }
            </div>
            <p className='mw-100'>Please note that applications, legal disclosures, documents or other material related to Guaranteed Rate products or services promoted on this page are offered in English only. The Spanish translation of this page is for the convenience of our clients; however, not all pages are translated. If there is a discrepancy between the content of the translated page and the content of the same page in English, the English version will prevail.</p>
            <div style={{width:"120px"}}>
                {/* <StaticImage src='../../../images/Home_img/equalHousing.png' width={100} alt="granteeIcon" /> */}
            </div>
            <p className='my-2'> &copy; 2022 Guaranteed Rate, Inc. All rights reserved.</p>
            <p className='my-2 mw-100'>NMLS License #2611 - For licensing information, go to: <Link className='text-decoration-none' style={{fontWeight:400}} to={"www.nmlsconsumeraccess.org"}>www.nmlsconsumeraccess.org</Link>.</p>
            <p className='my-2 mw-100'>Arizona Mortgage Banker License #0907078</p>
            <p className='my-2 mw-100'>3940 N. Ravenswood Chicago, IL 60613 The company name, Guaranteed Rate, should not suggest to a consumer that Guaranteed Rate provides an interest rate guaranteed prior to an interest lock.</p>
        </div>
    );
};

export default BottomFooter;