import React from 'react';
import {calc_title,cal_text,cal_Select_options} from "./common.module.css";


const calc_optionList = [
    {
        name:"Other calculators",
        url:""
    },
    {
        name:"Mortgage Payment",
        url:""
    },
    {
        name:"Closing cost",
        url:""
    },
    {
        name:"Refinance",
        url:""
    },
    {
        name:"Home Affordability",
        url:""
    },
    {
        name:"Extra payment",
        url:""
    },
    {
        name:"Mortgage points",
        url:""
    },
];

export const CalculatorList = () =><select className={cal_Select_options} name="" id="">
    {
        calc_optionList.map(optionEL => <option value={optionEL.url} key={optionEL.name}>{optionEL.name}</option>)
    }
</select>


const CalculatorPageTitle = ({title,info}) => {
    return (
        <div className='my-2'>
            <div className='d-md-flex justify-content-between align-items-center  g-2'>
                <h1 className={calc_title}>{title}</h1>
                <CalculatorList />
            </div>
            <p className={cal_text}>{info}</p>
        </div>
    );
};

export default CalculatorPageTitle;