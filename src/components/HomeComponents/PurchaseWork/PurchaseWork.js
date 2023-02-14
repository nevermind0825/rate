import { Link } from 'gatsby';
import React from 'react';
import useElementVisiable from '../../../hooks/useElementVisiable';
import { DownArrow } from '../../../utils/icons/Arrows';
import Step from './Step';
import {purchase_btn_hover} from "../../index.module.css";


const steps = [
    {
        number: 1,
        title: "Determine budget and save for a down payment",
        info:"Before you even start looking at homes for sale, it's important to determine your needs and budget. Then start saving up for that down payment.",
        question: "How much can I afford?"
    },
    {
        number: 2,
        title: "Determine budget and save for a down payment",
        info:"Before you even start looking at homes for sale, it's important to determine your needs and budget. Then start saving up for that down payment.",
        question: "How much can I afford?"
    },
    {
        number: 3,
        title: "Determine budget and save for a down payment",
        info:"Before you even start looking at homes for sale, it's important to determine your needs and budget. Then start saving up for that down payment.",
        question: "How much can I afford?"
    },
    {
        number: 4,
        title: "Determine budget and save for a down payment",
        info:"Before you even start looking at homes for sale, it's important to determine your needs and budget. Then start saving up for that down payment.",
        question: "How much can I afford?"
    },
]


const PurchaseWork = () => {
    const {elementRef,isVisiable,setIsVisiable,handleClickInSideElement} = useElementVisiable(false);

    return (
        <section className="container mt-5 pt-4">
            <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>
                How home {" "}
                <span className='position-relative'  ref={elementRef} onClick={handleClickInSideElement}>
                    <span style={{cursor:"pointer", color:"#6495ED"}}>purchases</span>
                    {
                        isVisiable &&  <span className='position-absolute w-100' style={{ fontSize:"18px", fontWeight:400,top:"65px", left:"0", lineHeight:"30px", border:"1px solid skyblue", borderRadius:"5px", backgroundColor:"#fff"}}>
                            <Link className={purchase_btn_hover} style={{display:"block", textDecoration:"none", padding:"8px"}} to={""} >Purchase</Link>
                            <Link className={purchase_btn_hover} style={{display:"block", textDecoration:"none", padding:"8px"}} to={""} >Refinance</Link>
                        </span>
                    }
                </span> 
                {" "}
                <span style={{position:"relative", width:"20px", height:"30px", display:"inline-block"}}>
                    <span style={{position:"absolute", top:"-28px"}}><DownArrow ></DownArrow></span>
                </span>
                {" "} work
            </h2>
            <div>
                <div className='row'>
                    {
                        steps.map(step =><Step step={step} totalSteps={steps.length} key={step.number}></Step>)
                    }
                </div>
            </div>
        </section>
    );
};

export default PurchaseWork;