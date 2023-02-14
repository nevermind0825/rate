import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout/layout';

const contact_list = [
    {
        image_name:"Group14",
        title:"Loan servicing",
        text:"Assistance with an existing loan, making payments, taxes and insurance, and servicing transfers.",
        btn:{
            title:"Get started",
            url:"/contact-us/servicing/select"
        },
    },
    {
        image_name:"DesktopIcon_newv2",
        title:"Application questions & general information",
        text:"Assistance with a loan application and processing issues.",
        btn:{
            title:"Get support",
            url:"/contact-us/loan-applications"
        },
    },
    {
        image_name:"Homevaluation",
        title:"New loan",
        text:"Get started on a new loan application.",
        btn:{
            title:"Learn more",
            url:"/contact-us/new-loan"
        },
    },
    {
        image_name:"Underconstruction",
        title:"Corporate support",
        text:"Careers, employment verification, marketing and media.",
        btn:{
            title:"Get support",
            url:"/contact-us/corporate"
        },
    },
    {
        image_name:"Populartopic-First-timebuyer",
        title:"Partnerships",
        text:"Join our Appraisal Panel, Relocation Mortgage Programs, Corporate Discounts and more.",
        btn:{
            title:"Get support",
            url:"/contact-us/partnerships"
        },
    },
    {
        image_name:"Cancel",
        title:"Do not call",
        text:"To be added to the Do Not Call list please click the link below:",
        btn:{
            title:"Get support",
            url:"/contact-us/do-not-call"
        },
    },
]

const contact_QL = graphql`

    query contact_QL {
        contactData: allFile(filter: {name: {in: 
            ["Group14","DesktopIcon_newv2","Homevaluation","Underconstruction","Populartopic-First-timebuyer","Cancel","the-best"]
    }}) {
        nodes {
            id
            name
            childImageSharp {
                gatsbyImageData
            }
        }
        }
    }
`;


const ContactUs = () => {
    const {contactData:{nodes:helpImgs}} = useStaticQuery(contact_QL);
    
    return (
        <Layout className='container'>
            <h1 className='mb-2'>How can we help you today?</h1>
            <p className='mt-0 fs-5'>Please choose from the options below.</p>
            <div className='row g-3 my-4'>
                {
                    contact_list.map((contact,idx) => <div className='col-12 col-md-6 col-lg-4 my-4' key={idx}>
                        <div className='d-grid align-items-center mx-md-4' style={{gridTemplateColumns:"80px 1fr"}}>
                            <div>
                                <GatsbyImage image={getImage(helpImgs.find(el => el.name === contact.image_name?.trim())?.childImageSharp)} alt=""></GatsbyImage>
                            </div>
                            <div>
                                <h3>{contact.title}</h3>
                                <p className='mt-4 mb-3'>{contact.text}</p>
                                <Link 
                                    className='linkSt text-decoration-none' 
                                    style={{fontWeight:700, color:"#1885a9"}} 
                                    to={contact.btn.url}
                                >{contact.btn.title}</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='my-2'>
                <h1>Have a question? Ask Joy, our Guaranteed Rate Virtual Assistant.</h1>
                <div>
                    <iframe src="https://d3q7optkm4zx6c.cloudfront.net/index.html" width={"100%"} height={640} frameborder="0"></iframe>
                </div>
            </div>
            <div>
                <GatsbyImage image={getImage(helpImgs.find(el => el.name === "the-best"?.trim())?.childImageSharp)} alt=""></GatsbyImage>
            </div>
            <hr className='container mx-auto horizontal' />
        </Layout>
    );
};

export default ContactUs;