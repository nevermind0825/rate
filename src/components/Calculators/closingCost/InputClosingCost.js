import React from 'react';
import FormForCalc from '../FormForCalc';



const fields = [
    {
        title:"Purchase price",
        name:"purchase_rate",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NonRAs2V5sGV8t2V8tmk2qnd*jWV_pDF1r1NlkCpxtXhCqmYBfjoId2UFcypxtXhCqmYCfmp2p2p2pw@@"
    },
    {
        title:"Loan amount",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Term (years)",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NtWlCrip5sGNcomJ3fml_nFljZ2VEtXZ5ozUNdzwGojkCZ2VEtXZ5ozYNp2p2p2p2"
    },
    {
        title:"Interest rate",
        name:"",
        type: 'number',
        sign:"%",
        value: 25000,
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NqmJEpnZ1sHhConh1Z21DrEBxr2sNpmJvllc2onhEs21ycjEGeTpxdjY2onhEs21yczF2p2p2p2o@"
    },
    {
        title:"Adjusted Origination Charges:",
        type:"para_title",
        info_url:""
    },
    {
        title:"Origination Charge",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NrHZ5pGd4onZ3pmV9rHl_tSp5sGNcomJ3fml_nFljZ2VEtXZ5ozUNdzwGojkCZ2VEtXZ5ozYNp2p2p2p2"
    },
    {
        title:"Charge For Specific Interest Rate",
        name:"",
        type: 'number',
        sign:"%",
        value: 25000,
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NsWN5r3hDZ21DrEBxr2sNpmJvllc2onhEs21ycjEGeTpxdjY2onhEs21yczF2p2p2p2o@"
    },
    {
        title:"Other Settlement Services",
        type:"para_title",
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NjHh4pnZjpnhErWl9pmJEkGlCt21zpnc2qnd*jWV_pDF1r1NlkCpxtXhCqmYBfjoId2UFcypxtXhCqmYCfmp2p2p2pw@@"
    },
    {
        title:"Required services selected by lender:",
        type:"para_title",
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0Nk2lBtm1CpmhjpnZGqmd1sFd1rWlztWl0g31cpmJ0pnY2qnd*jWV_pDF1r1NlkCpxtXhCqmYBfjoId2UFcypxtXhCqmYCfmp2p2p2pw@@"
    },
    {
        title:"Appraisal",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NonRAs2V5sGV8Z21DrEBxr2sNpmJvllc2onhEs21ycjEGeTpxdjY2onhEs21yczF2p2p2p2o@"
    },
    {
        title:"Credit report",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Flood Certification",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Tax Service",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Title services and lender's title insurance",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Owner's title insurance",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Government recording charges",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Transfer taxes",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Required Services You Can Shop For:",
        type:"para_title",
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0Nk2lBtm1CpmhjpnZGqmd1sF1*tkdxr1d4rHRWrHY2qnd*jWV_pDF1r1NlkCpxtXhCqmYBfjoId2UFcypxtXhCqmYCfmp2p2p2pw@@"
    },
    {
        title:"Survey",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Pest Inspection",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Yearly property tax",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NsXZ*sWlCtX1Eonw2qnd*jWV_pDF1r1NlkCpxtXhCqmYBfjoId2UFcypxtXhCqmYCfmp2p2p2pw@@"
    },
    {
        title:"Yearly property insurance",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NqWN9pmNHr2lCsG1_sHlComJzpip5sGNcomJ3fml_nFljZ2VEtXZ5ozUNdzwGojkCZ2VEtXZ5ozYNp2p2p2p2"
    },
    
]



const InputClosingCost = () => {
    return (
        <FormForCalc formFieldData={fields} />
    );
};


export default InputClosingCost;