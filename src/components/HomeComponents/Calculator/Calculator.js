import React, { useEffect, useState } from 'react';
import { DownArrow } from '../../../utils/icons/Arrows';
import GrapgMortgage from './GrapgMortgage';
import {boolet_style, disclosure_box, disclosure_icon} from "../../index.module.css";
import CalculatorRegular from '../../common/CalculatorRegular';
import { Link } from 'gatsby';


const dataForGraph = [
    { name: 'Principal and Interest', value: 700 },
    { name: 'PMI', value: 300 },
    { name: 'Property taxes', value: 300 },
    { name: 'Insurance', value: 200 },
    { name: 'HOA fees', value: 50 },
  ];
  
  const COLORSForGraph = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',"#000"];
  
  

const calculatorData = {
    title: "Mortgage calculator",
    info:"Get a sense of the costs of buying a home with our monthly mortgage calculator.",
    loan_term: ["10","20","30"],
    disclosures: ["Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details.", "Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details. Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details. Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details."]
}


const Calculator = () => {
    const [isDisclosureOpen,setIsDIsclosureOpen] = useState(false);
    const [homePrice,setHomePrice] = useState(500000);
    const [downPayPercent,setDownPayPercent] = useState(10);
    const [downPay,setDownPay] = useState(0);
    const [termInMonth,setTermInMonth] = useState(0);
    const [interestRate,setInterestRate] = useState(0);
    const [isMilitaryVeteran,setIsMilitaryVeteran] = useState(0);

    

    useEffect(()=>{
        const loanAmount = homePrice - ((homePrice * downPayPercent)/100);
        // console.log(loanAmount);
    },[])

    const calculatorDetails_btn = <Link 
        className='linkSt text-decoration-none fw-bold' 
        style={{color:"rgb(24, 133, 169)"}} 
        to="/mortgage-calculators/"
    >View all mortgage calculators</Link>


    return (
        <section className='container'>
            <CalculatorRegular calculator={calculatorData} dataForGraph={dataForGraph} COLORSForGraph={COLORSForGraph} OptionComponents={calculatorDetails_btn} />
        </section>
    )
    

    /*
    return (
        <section className="container py-5">
            <h2 className='fs-1 lh-2 mb-3'>{calculatorData.title}</h2>
            <div className='row gx-5'>
                <div className='col-12 col-lg-6'>
                    <p className='fs-4 lh-1'>{calculatorData.info}</p>
                    <div className='container'>
                        <div className='row gy-2 gx-4'>
                            <div className=' col-12 col-md-6'>
                                <div className='calc_Input_wrapper'>
                                    <p style={{margin:0}}>Home Price</p>
                                    <div className='d-flex'>
                                        $
                                        <input className='calc_input w-100' onChange={e=>setHomePrice(parseFloat(e.target.value))} type="number" value={homePrice} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='calc_Input_wrapper'>
                                    <p style={{margin:0}}>Down Payment %</p>
                                    <div className='d-flex'> 
                                        %
                                        <input className='calc_input  w-100' onChange={e=>setDownPayPercent(parseFloat(e.target.value))} type="number" value={downPayPercent} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='calc_Input_wrapper'>
                                    <p style={{margin:0}}>Down Payment $</p>
                                    <div className='d-flex'>
                                        $
                                        <input className='calc_input  w-100' onChange={e=>setDownPay(parseFloat(e.target.value))} type="number" value={downPay} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='calc_Input_wrapper'>
                                    <p style={{margin:0}}>Loan term</p>
                                    <select  className='calc_input  w-100' style={{width:"100%",}} onChange={e=>setTermInMonth(parseFloat(e.target.value)*12)} name="" id="">
                                        {
                                            calculatorData.prices.loan_term.map(term => <option value={term} key={term}>{term}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='calc_Input_wrapper'>
                                    <p style={{margin:0}}>Interest rate</p>
                                    <div className='d-flex'>
                                        %
                                        <input className='calc_input  w-100' onChange={e=>setInterestRate(parseFloat(e.target.value))} type="number" value={interestRate} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 d-flex justify-content-center'>
                                <div className='d-flex align-items-center'>
                                    <input onChange={e=>setIsMilitaryVeteran(e.target.value)} type="checkbox" />
                                    <p className='p-0 ps-2 m-0'>Military Veteran</p>
                                </div>
                            </div>
                        </div>
                        <div className='banner_buttons mt-4'>
                            <button className='d-block mx-auto' style={{background:"transparent"}}>Apply now</button>
                        </div>
                    </div>
                    <div 
                        className={`${disclosure_box} p-3 my-2`}
                        style={{
                            cursor:"pointer",
                            boxShadow: isDisclosureOpen? "0 0 1px 1px" : "",
                            "--disclose_box_height": isDisclosureOpen ? "100%":"55px"
                        }} 
                        onClick={()=>setIsDIsclosureOpen(!isDisclosureOpen)}
                    >
                        <p style={{color:"#6495ED", fontWeight:"600",position:"relative",}}>
                            Legal Disclosures
                            <span className='position-relative'>
                                <span className={`${disclosure_icon}`} style={{"--diclosureDegree": isDisclosureOpen ? "180deg":"0deg","--diclosureTopPos": isDisclosureOpen ? "5px":"0px"}}>
                                    <DownArrow width={15} height={15} />
                                </span>
                            </span>
                        </p>
                        {
                            <div className=''>
                            {
                                calculatorData.disclosures.map((para,idx) => <p key={idx}>{para}</p>)
                            }
                        </div>
                        }
                        
                    </div>
                </div>
                <div className='col col-lg-6 p-4 m-lg-0 m-3' style={{border:"1px solid skyblue", borderRadius:"8px"}}>
                    <div className='text-center'>
                        <p>Your monthly payment would be</p>
                        <h2 style={{fontSize:"2.5rem", margin:0}}>$2500</h2>
                    </div>
                    <div className='d-md-flex justify-content-center'>
                        <div>
                            <div className='m-auto' style={{ minWidth:"250px", maxWidth:"250px",height:"300px"}}>
                                <GrapgMortgage graphData={dataForGraph} graphColors={COLORSForGraph}></GrapgMortgage>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-center'>Breakdown</h5>
                            <div className='m-auto' style={{width:"fit-content"}}>
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",gap:"2rem"}}>
                                    <p className={`${boolet_style} m-2 ml-0`} style={{"--colordynamic":COLORSForGraph[0 % COLORSForGraph.length]}}>Principal and interest</p>
                                    <h5 style={{margin:"8px"}}>$3654</h5>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",gap:"2rem"}}>
                                    <p className={`${boolet_style} m-2 ml-0`}  style={{"--colordynamic":COLORSForGraph[1 % COLORSForGraph.length]}} >PMI</p>
                                    <h5 style={{margin: "8px"}}>$223</h5>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",gap:"2rem"}}>
                                    <p className={`${boolet_style} m-2 ml-0`}  style={{"--colordynamic":COLORSForGraph[2 % COLORSForGraph.length]}} >Property taxes</p>
                                    <div className='calc_Input_wrapper py-0'> $
                                        <input className='calc_input py-0 text-end' style={{width:"50px"}}  type="number" value={456} />
                                    </div>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",gap:"2rem"}}>
                                    <p className={`${boolet_style} m-2 ml-0`}  style={{"--colordynamic":COLORSForGraph[3 % COLORSForGraph.length]}} >Insurance</p>
                                    <div className='calc_Input_wrapper py-0'> $
                                        <input className='calc_input py-0 text-end' style={{width:"50px"}}  type="number" value={126} />
                                    </div>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",gap:"2rem"}}>
                                    <p className={`${boolet_style} m-2 ml-0`}  style={{"--colordynamic":COLORSForGraph[4 % COLORSForGraph.length]}} >HOA fees</p>
                                    <div className='calc_Input_wrapper py-0'> $
                                        <input className='calc_input py-0 text-end' style={{width:"50px"}}  type="number" value={56} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
    */
};

export default Calculator;