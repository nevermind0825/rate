import React, { useState } from 'react';
import GrapgMortgage from '../HomeComponents/Calculator/GrapgMortgage';
import {boolet_style, disclosure_box, disclosure_icon} from "../../components/index.module.css";
import { LinkRegular } from './ButtonRegular';
import {calc_title,cal_text,pieChart_container,piechart_info} from "./common.module.css";
import { DownArrow } from '../../utils/icons/Arrows';

const CalculatorRegular = ({calculator,OptionComponents,dataForGraph,COLORSForGraph}) => {
    
    return (
        <section>
            <div className='my-2 d-md-flex justify-content-between align-items-center'>
                <div>
                    <h1 className={calc_title}>{calculator.title}</h1>
                    <p className={cal_text}>{calculator.info}</p>
                </div>
                {OptionComponents}
            </div>

            <div className='row m-0'>
                <aside className='col-12 col-lg-6'>

                    <div className='row m-md-4'>
                        <div className='col-6 my-2 my-md-3'>
                            <div className='calc_Input_wrapper px-2 px-md-3'>
                                <p style={{margin:0}}>Home Price</p>
                                <div className='d-flex'>
                                    $
                                    <input className='calc_input w-100'  type="number"  />
                                </div>
                            </div>
                        </div>

                        <div className='col-6 my-2 my-md-3'>
                            <div className='calc_Input_wrapper px-2 px-md-3'>
                                <p style={{margin:0}}>Down Payment %</p>
                                <div className='d-flex'> %
                                    <input className='calc_input  w-100' type="number" />
                                </div>
                            </div>
                        </div>

                        <div className='col-6  my-2 my-md-3'>
                            <div className='calc_Input_wrapper px-2 px-md-3'>
                                <p style={{margin:0}}>Down Payment $</p>
                                <div className='d-flex'> $
                                    <input className='calc_input  w-100' type="number" />
                                </div>
                            </div>
                        </div>

                        <div className='col-6 my-2 my-md-3'>
                            <div className='calc_Input_wrapper px-2 px-md-3'>
                                <p style={{margin:0}}>Loan term</p>
                                <select  className='calc_input  w-100' style={{width:"100%",}} name="" id="">
                                    {
                                        calculator.loan_term.map(term => <option value={term} key={term}>{term}</option>)
                                    }
                                </select>
                            </div>
                        </div>

                        <div className='col-6 my-2 my-md-3'>
                            <div className='calc_Input_wrapper px-2 px-md-3'>
                                <p style={{margin:0}}>Interest rate</p>
                                <div className='d-flex'>%
                                    <input className='calc_input  w-100' type="number" />
                                </div>
                            </div>
                        </div>

                        <div className='col-6 d-flex justify-content-center'>
                            <div className='d-flex align-items-center'>
                                <input type="checkbox" />
                                <p className='p-0 ps-2 m-0'>Military Veteran</p>
                            </div>
                        </div>

                        <div className='col d-none d-md-block'>
                            <div className=''>
                                <LinkRegular className='text-nowrap'  url='' label={"Apply now"} />
                                <div>
                                    <DisclosureCalc disclosures={calculator.disclosures} />
                                </div>
                            </div>
                        </div>

                    </div>
                </aside>

                
                <aside className='col-12 col-lg-6'>
                    <div className='m-auto my-2' 
                        style={{
                            border:"1px solid skyblue", 
                            borderRadius:"8px", 
                            // maxWidth:"750px"
                    }}
                    >
                        <div className='text-center m-md-4'>
                                <p>Your monthly payment would be</p>
                                <h2 style={{fontSize:"2.5rem", margin:0}}>$2500</h2>
                            </div>
                            <div className='d-md-flex d-lg-block d-xl-flex justify-content-center'>
                                <div>
                                    <div 
                                        className={`${pieChart_container} m-auto`}
                                        // style={{ minWidth:"250px", maxWidth:"350px",    height:"350px"}}
                                    >
                                        <GrapgMortgage graphData={dataForGraph} graphColors={COLORSForGraph}></GrapgMortgage>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='text-center'>Breakdown</h5>
                                    <div className='m-auto p-1' style={{width:"fit-content"}}>
                                        <div className={piechart_info} >
                                            <p className={`${boolet_style} m-2 ml-0`} style={{"--colordynamic":COLORSForGraph[0 % COLORSForGraph.length]}}>Principal and interest</p>
                                            <h5 style={{margin:"8px"}}>$3654</h5>
                                        </div>
                                        <div className={piechart_info}>
                                            <p className={`${boolet_style} m-2 ml-0`}  style={{"--colordynamic":COLORSForGraph[1 % COLORSForGraph.length]}} >PMI</p>
                                            <h5 style={{margin: "8px"}}>$223</h5>
                                        </div>
                                        <div className={piechart_info}>
                                            <p className={`${boolet_style} m-2 ml-0`}  style={{"--colordynamic":COLORSForGraph[2 % COLORSForGraph.length]}} >Property taxes</p>
                                            <div className='calc_Input_wrapper py-0'> $
                                                <input className='calc_input py-0 text-end' style={{width:"50px"}}  type="number" value={456} />
                                            </div>
                                        </div>
                                        <div className={piechart_info}>
                                            <p className={`${boolet_style} m-2 ml-0`}  style={{"--colordynamic":COLORSForGraph[3 % COLORSForGraph.length]}} >Insurance</p>
                                            <div className='calc_Input_wrapper py-0'> $
                                                <input className='calc_input py-0 text-end' style={{width:"50px"}}  type="number" value={126} />
                                            </div>
                                        </div>
                                        <div className={piechart_info}>
                                            <p className={`${boolet_style} m-2 ml-0`}  style={{"--colordynamic":COLORSForGraph[4 % COLORSForGraph.length]}} >HOA fees</p>
                                            <div className='calc_Input_wrapper py-0'> $
                                                <input className='calc_input py-0 text-end' style={{width:"50px"}}  type="number" value={56} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>

                </aside>

            </div>

            <div className='col d-block d-md-none mt-5'>
                <div className='text-center'>
                    <LinkRegular className='text-nowrap'  url='' label={"Apply now"} />
                    <div>
                        <DisclosureCalc disclosures={calculator.disclosures} />
                    </div>
                </div>
            </div>


        </section>
    );
};

export default CalculatorRegular;




const DisclosureCalc = ({disclosures}) => {
    const [isDisclosureOpen,setIsDIsclosureOpen] = useState(false);
    return <div 
                className={`${disclosure_box} p-3 my-2`}
                style={{
                    cursor:"pointer",
                    boxShadow: isDisclosureOpen? "0 0 1px 1px" : "",
                    "--disclose_box_height": isDisclosureOpen ? "100%":"55px"
                }} 
                onClick={()=>setIsDIsclosureOpen(!isDisclosureOpen)}
            >
            <p style={{color:"#6495ED", fontWeight:"700",position:"relative",}}>
                Legal Disclosures
                <span className='position-relative'>
                    <span 
                        className={`${disclosure_icon}`} 
                        style={{"--diclosureDegree": isDisclosureOpen ? "180deg":"0deg","--diclosureTopPos": isDisclosureOpen ? "5px":"0px"}}
                    >
                        <DownArrow width={15} height={15} />
                    </span>
                </span>
            </p>
            <div className=''>
                {
                    disclosures.map((para,idx) => <p key={idx}>{para}</p>)
                }
            </div>
        
    </div>
}