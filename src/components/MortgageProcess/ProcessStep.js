import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import {mortgage_process_step,mortgage_process_img_box,mortgage_process_img_wrap,mortgage_process_para_box,process_para_wraper,process_para,process_title} from "./mortgage_process.module.css";


const satisfactionImg_QL = graphql`
    query satisfactionImg_QL {
            satisfaction_img: file(name: {eq: "satisfaction"}) {
            name
            size
            childImageSharp {
                gatsbyImageData
            }
        }
    }

`;

const ProcessStep = ({process, processNumber,imgList,percentImg}) => {
    const {satisfaction_img} = useStaticQuery(satisfactionImg_QL);
    const img = imgList.find(imgEl => imgEl.name === process.img)?.childImageSharp;
// console.log(satisfaction_img);
    console.log(imgList.length , processNumber);
    return (
        <div className={mortgage_process_step}>
            <div className={mortgage_process_img_box} style={{display:"grid"}}>
                <div className={mortgage_process_img_wrap} style={{gridArea:"1/1"}}>
                    <GatsbyImage  image={getImage(img)} alt='' />
                </div>
                <div style={{gridArea:"1/1", position:"relative"}}></div>
            </div>
            <div className={mortgage_process_para_box}>
                <div className={process_para_wraper}> 
                    <h4 className={process_title} data-processNo={processNumber+1}>{process.title}</h4>
                    <div className={process_para}>
                        {
                            process.details.map((para,idx) => <p key={`para_article_${idx}`}>{para}</p>)
                        }
                    </div>
                    { 
                        imgList.length === (processNumber + 1)  && <div className={`${process_para} d-flex align-items-center`}>
                            <div style={{width:"100px"}}>
                                <GatsbyImage image={getImage(satisfaction_img.childImageSharp)} alt="" />
                            </div>
                            <p className='m-0 ms-4'>100% satisfaction guaranteed, only from Guaranteed Rate. <Link className='linkSt' to=''> View details</Link></p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProcessStep;