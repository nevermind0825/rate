import React from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { ReactIcon } from '../../common/ButtonRegular';
import FormForCalc from '../FormForCalc';


const result_fields = [
    {
        title:"Lender origination charge",
        name:"purchase_rate",
        sign:"$",
        value: 25000,
        type:"result",
        info_url:""
    },
    {
        title:"Charge for specific interest rate",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Your adjusted origination charges:",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Appraisal",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NonRAs2V5sGV8Z21DrEBxr2sNpmJvllc2onhEs21ycjEGeTpxdjY2onhEs21yczF2p2p2p2o@"
    },
    {
        title:"Credit report",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Flood Certification",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Tax Service",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Title services and lender's title insurance",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Owner's title insurance",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Survey",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Pest Inspection",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Government recording charges",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Transfer taxes",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Initial deposit for your escrow account",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NqmJ5tWh1sWNDqnh2rHZ1sGdCrHs2qnd*jWV_pDF1r1NlkCpxtXhCqmYBfjoId2UFcypxtXhCqmYCfmp2p2p2pw@@"
    },
    {
        title:"Daily interest charges",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NpWV5rX15r3h1s2lDtWd4onZ3pip5sGNcomJ3fml_nFljZ2VEtXZ5ozUNdzwGojkCZ2VEtXZ5ozYNp2p2p2p2"
    },
    {
        title:"Homeowner's insurance",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Charges for all other settlement services",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Total estimated settlement charges",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Principal and interest",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    {
        title:"Taxes and insurance",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NqmFArHl_pXc2qnd*jWV_pDF1r1NlkCpxtXhCqmYBfjoId2UFcypxtXhCqmYCfmp2p2p2pw@@"
    },
    {
        title:"Mortgage insurance",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NsWF5Z21DrEBxr2sNpmJvllc2onhEs21ycjEGeTpxdjY2onhEs21yczF2p2p2p2o@"
    },
    {
        title:"Total monthly payment",
        name:"",
        sign:"$",
        value: 475,
        type:"result",
        info_url:""
    },
    
]


const CalcResults = () => {
    // console.log(SlArrowLeft);
    return (
        <>
            <FormForCalc formFieldData={result_fields} isSubmitBtn={false} />
            <div className='my-3  d-flex justify-content-between'>
                <button className='d-flex align-items-center border-0 bg-transparent text-decoration-underline' style={{fontSize:"12px"}}>
                    <ReactIcon size={9} color='#000'>
                        <SlArrowLeft />
                    </ReactIcon>
                    <span className='ms-1'>
                        Go back
                    </span>
                </button>
                <button className='d-flex align-items-center border-0 bg-transparent text-decoration-underline' style={{fontSize:"12px"}}>
                    <span className='me-1'>View Help</span>
                    <ReactIcon size={9} color='#000'>
                        <SlArrowRight />
                    </ReactIcon>
                </button>
            </div>
        </>
    );
};

export default CalcResults;