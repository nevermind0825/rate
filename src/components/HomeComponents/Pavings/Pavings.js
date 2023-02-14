import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { BadgeAwardIcon, BranchLocationIcon, DollarsIcon } from '../../../utils/icons/HomePageIcons';



const pavingsData = [
    {icon: "Group291", amount: 70, sign:"$", unit:"B", info:"unded loans in 2021",btn:"our story", url:"/"},
    {icon: "customer_satisfaction", amount: 96, sign:"", unit:"%", info:"Customer Satisfaction Score*",btn:"Why you’ll love us", url:"/"},
    {icon: "branch_location", amount: 500, sign:"$", unit:"+", info:"Branches serving all 50 states",btn:"Find a branch near you", url:"/"},
]


const paving_QL = graphql`
    query paving_QL {
        satisfactionImg: file(name: {eq: "satisfaction"}) {
            name
            childImageSharp {
                gatsbyImageData
            }
        }

        paving_icons: allFile(filter: {name: {in: ["Group291","customer_satisfaction","branch_location"]}}) {
            nodes {
            childImageSharp {
                gatsbyImageData
            }
            name
            }
        }

    }

`;


const Pavings = () => {
    const {satisfactionImg,paving_icons:{nodes:pavingIcons}} = useStaticQuery(paving_QL);
    // console.log(satisfactionImg);
    
    return (
        <section className="container my-5">
            <div>
                <h1 className='fs-1 my-5 text-center'>Paving the way since Y2K</h1>
                <div className='row g-3 my-5 text-center'>
                    {
                        // pavingsData.map((paving,idx) => <Paving paving={paving} idx={idx} key={paving.info}></Paving>)
                        pavingsData.map((paving,idx) => {
                            const img = pavingIcons.find(iconEl => iconEl.name === paving.icon)?.childImageSharp;
                            return <div className={`col-12 col-md-4 p-3 ${idx===1 && "pavingCard"}`} key={idx}>
                                <div>
                                    <div>
                                        <GatsbyImage style={{maxWidth:"40px"}} image={getImage(img)} alt="" />
                                    </div>
                                    <output style={{fontSize:"50px", fontWeight:700}}>
                                        <span>{paving.sign}</span>
                                        {paving.amount}
                                        <span>{paving.unit}</span>
                                    </output>
                                    <p style={{fontSize:"25px"}}>{paving.info}</p>
                                    <div>
                                        <Link style={{textDecoration:"none", color:"#6495ED", fontSize:"22px",fontWeight:700}} to={paving.url}>{paving.btn}</Link>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            
            
            <div className='d-md-flex align-items-center justify-content-center my-5 p-3'>
                <div className={"text-center my-3"}>
                        <GatsbyImage style={{maxWidth:"200px"}} image={getImage(satisfactionImg.childImageSharp)} alt='' />
                </div>
                <div className='ms-4'>
                    <p  style={{display:"inline", color:"grey"}}>100% satisfaction guaranteed, only from Guaranteed Rate. {" "}</p>
                    <Link className='text-decoration-none' style={{fontWeight:400}} style={{color:"grey"}} to="/">view details</Link>
                </div>
            </div>
            <p style={{fontSize:"14px"}}>*96% Customer Satisfaction: Data Source: Guaranteed Rate’s Client Satisfaction Surveys (Averaged 2021)</p>
        </section>
    );
};

export default Pavings;