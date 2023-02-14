import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout/layout';
import {horizontal_width} from "../styles/mix_styles.module.css";
import {SlArrowRight,SlArrowLeft} from "react-icons/sl";
import { ReactIcon } from '../components/common/ButtonRegular';

const first_customer_text = [
    "When Guaranteed Rate began twenty two years ago, the mortgage industry was entirely set up for the lenders, at the expense of the people who were just trying to buy a home. It wasn’t right.",
    "So we flipped the industry on its head by putting the customer first, instead of the lender. For us, everything was, and still remains, all about providing a better experience for the customer. We are absolutely committed to delivering service so exceptional that our customers can’t wait to recommend us to their family and friends.",
    "Our Net Promoter Score – which is a simple indication of your happiness – is 88, which is more than 2x the industry average*. And while that’s fantastic, we’re always working to make it even better."
]
const deliverRate = [
    "Right from the start, Guaranteed Rate began by breaking apart the entire mortgage process and evaluating every single step. How can this be better, faster, easier? Where could technology make something better?",
    "We designed a unique “Proactive Mortgage Pod” model that surrounds each of our top-performing loan officers with his or her own team of highly-trained specialists, streamlining the process for customers through state-of-the-art data and communications technologies. Every loan moves faster. Every customer is happier.",
    "By simplifying the loan process, hiring only the best of the best employees, and developing cutting-edge tech, we can bring both low rates and the highest level of service to every customer."
]

const way_time_list = [
    {
        title:"GRaffordable",
        img_name:"CalculatorIcon",
        text:"Our mortgage calculator provides real-time rates and loan options, without having to provide contact info."
    },
    {
        title:"Apply online. Anywhere.",
        img_name:"Applyonlineanywhere",
        text:"We created the world’s first digital mortgage, so easy that an application takes less than 15 minutes."
    },
    {
        title:"Transfersafe",
        img_name:"Group10",
        text:"Our secure document portal lets you easily share financial documents in a secure environment and eliminates time-wasting paper-pushing."
    },
    {
        title:"Close the loan from home",
        img_name:"Closefromhome",
        text:"Never satisfied, we created FlashClose—award-winning technology that lets you close in minutes, from anywhere."
    },
]

const aboutUs_QL = graphql`
    query aboutUs_QL {
        way_img_list: allFile(filter: {relativeDirectory: {eq: "about_us"},name: {in: 
            ["Applyonlineanywhere","CalculatorIcon","Closefromhome","Group10"]}}) {
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


const AboutUs = () => {
    const {way_img_list:{nodes:about_icons}} = useStaticQuery(aboutUs_QL);
    // console.log(nodes);
    return (
        <Layout className='container'>
            <section>
                <em>Overview</em>
                <h1 className='mb-3'>We’re here to help you get your dream home.</h1>
                <p>Our perfect combination of technology and human touch provides unparalleled value.</p>

                <div className='position-relative my-4'>
                    <div>
                        <StaticImage src='../assets/static-images/about_us/about_us_banner.png'  alt='' loading='eager' objectFit='cover' layout='constrained' />     
                    </div>
                    <div  className='position-absolute  top-50 start-50 translate-middle'>
                        <div className='scaleHover'>
                            <Link 
                                className='bg-white px-5 py-2 fs-5 border-0 text-decoration-none' 
                                style={{
                                    zIndex:999, 
                                    translate:"scale(1.5)", 
                                    borderRadius:"var(--border-radius-medium)",
                                    color: "var(--color-primary-body-dark)",
                                    whiteSpace:"nowrap"
                                }}
                                to={""}
                            >Watch the video</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Put the customer first.</h2>
                <div>
                    {
                        first_customer_text.map((text,idx) => <p className='mb-3' key={idx}>{text}</p>)
                    }
                </div>
                <div className='text-center'>
                    <hr className={`container mx-auto horizontal ${horizontal_width} my-4`}  />
                    <h1 className='font-weight-bolder' style={{fontSize:"70px"}}>97%</h1>
                    <h5>of our customers would refer us to their friends and families.*</h5>
                    <hr className={`container mx-auto horizontal ${horizontal_width} my-4`}  />
                </div>
            </section>
            <section className='my-5'>
                <h1 className='my-4'>Deliver low, low rates with a streamlined process.</h1>
                <div>
                    {
                        deliverRate.map((text,idx) => <p key={idx}>{text}</p>)
                    }
                </div>
            </section>

            <section>
                <h1 className='mb-4'>Get your mortgage, your way, anytime, anywhere.</h1>
                <p>We understand that choosing a mortgage is the biggest financial decision of your life, and we’re committed to making the process as seamless, friendly and financially valuable to you as possible.</p>
                <div className='row'>
                    {
                        way_time_list.map(way => <div className='col-12 col-md-6 col-lg-3' key={way.title}>
                            <div >
                                <div className='border rounded text-center py-4'>
                                    <GatsbyImage image={getImage(about_icons.find(el => el.name === way.img_name?.trim())?.childImageSharp)} alt=""></GatsbyImage>
                                </div>
                                <div>
                                    <h5 className='my-3'>{way.title}</h5>
                                    <p>{way.text}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    <div className='d-flex justify-content-between'>
                        <Link className='linkSt text-decoration-none' style={{}} to=''>
                            <ReactIcon   size={12} >
                                <SlArrowLeft />
                            </ReactIcon>
                            <span className='ms-1'>
                                Careers
                            </span>
                        </Link>
                        <Link className='linkSt text-decoration-none' to=''>
                            <span className='me-1'>
                                Purpose
                            </span>
                            <ReactIcon   size={12} >
                                <SlArrowRight />
                            </ReactIcon>
                        </Link>
                    </div>
                    <div className='my-5 text-center'>
                        <small className=''>
                            *Data pulled from Guaranteed Rate’s Customer Satisfaction Surveys (2019 – 2020) and 
                            <Link 
                                className='linkSt'
                                to='https://www.retently.com/blog/good-net-promoter-score/'
                            > Retently’s </Link>
                            2020 NPS Benchmarks.
                        </small>
                    </div>
                </div>
                <hr className='container mx-auto horizontal' />
            </section>

        </Layout>
    );
};

export default AboutUs;