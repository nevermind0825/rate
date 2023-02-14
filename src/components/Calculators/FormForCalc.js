import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {calc_input} from "./calculators.module.css";
import { windoOpener } from '../../utils/makeHyperText';



const ElementRenderer = (elementInfo) =>{
    switch (elementInfo.type) {
        case "result":
            
            return <output>{elementInfo.value}</output>
    
        default:
            return <input className={calc_input} style={{width:"120px", padding:0}} type={elementInfo.type} name={elementInfo.name} defaultValue={elementInfo.value} />
    }
}



const cal_btn_Img = graphql`
    query cal_btn_Img {
        submit_btn: file(name: {eq: "submit_img"}) {
            childImageSharp {
            gatsbyImageData
            }
        }
        term_btn: file(name: {eq: "lead_fusion"}) {
            childImageSharp {
            gatsbyImageData
            }
        }
    }
`;




export const SubmitBtn = ({isSubmitBtn=true}) => { 
    const {submit_btn,term_btn} = useStaticQuery(cal_btn_Img);

    return <div className='my-4 d-flex flex-column align-items-end'>
        {
            isSubmitBtn && <GatsbyImage style={{cursor:"pointer"}} image={getImage(submit_btn.childImageSharp)} alt='' />
        }
        <div className='position-relative ms-auto my-3' style={{maxWidth:"fit-content"}}>
            <GatsbyImage image={getImage(term_btn.childImageSharp)} alt='' />
            <Link 
                style={{bottom:0,right:0, fontSize:"9px", opacity:0}}
                className='text-decoration-none position-absolute' 
                to='https://partners.leadfusion.com/tools/guaranteedrate/tools/view.fcs?param=p218pnRxtWwNpW1DoGBxqmF1syJ6sHQ2qnd*jWV_pDF1r1NlkCp5sGNcomJ3gGN0pjF1r1NlkCo2sG1Epk1UfmtFonZxr3h1pmhConh1' 
                target={"_blank"} 
            >terms of use</Link>
        </div>
        
    </div>
}



const FormForCalc = ({formFieldData,isSubmitBtn}) => {
    return (
        <form className='my-3' style={{color:"rgb(51,51,51)"}}>
            {
                formFieldData.map(field =><div className='d-flex justify-content-between'  style={{fontSize:"12px",}}>
                    {
                        field.type === "para_title"
                        ? <h6 style={{margin: "15px 0 4px 0"}}>{field.title}</h6>
                        : <>
                            <label htmlFor="" 
                                style={{
                                    color: field.info_url ? "blue" : "rgb(51,51,51)",
                                    textDecoration: field.info_url ? "underline" : "none",
                                    cursor: field.info_url ? "pointer" : "auto",
                                }} 
                                onClick={()=>windoOpener(field.info_url)}
                            >
                                {field.title}
                            </label>
                            <span>
                                {field.sign === "$" ? field.sign :  ""}
                                {
                                    ElementRenderer(field)
                                }
                                {field.sign === "%" ? field.sign : <span>&nbsp;&nbsp;&nbsp;</span>}
                            </span>
                        </>
                    }
                </div>)
            }
            <SubmitBtn isSubmitBtn={isSubmitBtn} />
        </form>
    );
};

export default FormForCalc;