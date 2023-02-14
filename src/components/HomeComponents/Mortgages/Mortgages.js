import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ActiveServiceFlagIcon, CreditHistoryIcon, HomeBuyerIcon, HomeOwnerCashIcon } from '../../../utils/icons/HomePageIcons';



const mortgageData = {
    title: "Find a mortgage to fit your unique needs",
    viewBtn : "View all mortgage options",
    info:"Tell us about yourself.",
    mortgages: [
        {icon: "flag_us", title:"I am an active service member",url:"/va-loans"},
        {icon: "home_man", title:"I am a first-time home-buyer",url:"/buying-a-house"},
        {icon: "Credit_report", title:"I have a poor credit history",url:"/resources/buying-a-home-with-bad-credit"},
        {icon: "home_rotet", title:"I am a homeowner looking for cash",url:"/cash-out-refinance"},
    ]
}

const mortgages_QL = graphql`
    query mortgages_QL {
        mortgage_icons: allFile(filter: {name: {in: ["flag_us","home_man","Credit_report","home_rotet"]}}) {
            nodes {
            childImageSharp {
                gatsbyImageData
            }
            name
            }
        }
    }

`;

const Mortgages = () => {
    const {mortgage_icons:{nodes:mortgageIcons}} = useStaticQuery(mortgages_QL);
    // console.log(mortgageIcons);

    return (
        <section className="container my-5">
            <div className='d-flex flex-wrap justify-content-between my-4'>
                <div >
                    <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>{mortgageData.title}</h2>
                    <p style={{fontSize:"20px"}}>{mortgageData.info}</p>
                </div>
                    <Link className={"mt-3 text-decoration-none text-end"} style={{ color:"#6495ED", fontSize:"20px", fontWeight:600}} to='/'>{mortgageData.viewBtn}</Link>
            </div>

            <div className='row g-4'>
                {
                    mortgageData.mortgages.map((mortgage,idx) =>{
                        const img = mortgageIcons.find(iconEl => iconEl.name === mortgage.icon)?.childImageSharp;
                        return <div className='col-6 col-md-3'>
                            <Link className='linkSt text-decoration-none text-dark' to={mortgage.url}>
                                <div className='mortgage_card d-flex flex-column justify-content-center'>
                                    <div>
                                        <GatsbyImage image={getImage(img)} alt="" />
                                    </div>
                                    <div>
                                        <h4>{mortgage.title}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </section>
    );
};

export default Mortgages;