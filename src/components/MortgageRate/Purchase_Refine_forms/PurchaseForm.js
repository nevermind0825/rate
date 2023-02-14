import React, { useState } from 'react';
import { DownFullFillArrow } from '../../../utils/icons/Arrows';
import { purchase_refine_btns, purchase_refine_btn,personalRate_btn,purchase_field, purchase_label, purchase_input,purchase_select,} from "../mortgageCurrRate.module.css";



const purchaseFormFields = [
    {title:"Purchase Price", name:"purchase_price", value:"456", placeholder:"", type:"number", sign:"$"},
    {title:"Down Payment Total", name:"purchase_price", value:"456", placeholder:"", type:"number", sign:"$"},
    {title:"Down Payment Percent", name:"purchase_price", value:"20", placeholder:"", type:"number", sign:"%"},
    {title:"Zip Code", name:"purchase_price", value:"2", placeholder:"", type:"number", sign:""},
]
const purchaseFormOptions = [
    {title:"Credit Score", name:"credit_score", value:"456", options: ["708-96587","126-74596","459-78965"]},
    {title:"Property type", name:"property_type", value:"456", options: ["Single-family Home","Condominium","TownHome"]},
    {title:"Property use", name:"property_use", value:"20", options: ["Primary","Secondary","Rental"]},
    {title:"Millitary", name:"millitary", value:"2", options: ["Millitary","Non-Millitary"]},
]



const PurchaseForm = () => {
    const [advancedFields, setAdvancedFields] = useState([]);
    return (
        <div>
            <h5 className='text-center my-4'>Today's purchase average rates based on a $437,500 loan</h5>
            <div>
                <div className='row g-2'>
                    {
                        purchaseFormFields.map(field => <div className={`col-12 col-sm-6 col-md-3`} key={field.name}>
                            <div className={`${purchase_field} p-1 px-3 rounded`}>
                                <label className={`${purchase_label} d-block`}>{field.title}</label>
                                <span>{field.sign}</span>
                                <input className={`${purchase_input} border-0 `} type={field.type} value={field.value} placeholder={field.placeholder} />
                            </div>
                        </div>)
                    }
                    
                    {
                        advancedFields.map(fieldOption => <div className={`col-12 col-sm-6 col-md-3`} key={fieldOption.name}>
                            <div className={`${purchase_field} p-1 px-3 rounded`}>
                            <label className={`${purchase_label} ms-1 d-block`}>{fieldOption.title}</label>
                                <select className={`${purchase_input} ${purchase_select} selectpicker border-0 `}  name={fieldOption.name}>
                                    {
                                        fieldOption.options.map((option,idx) => <option value={option} key={`opt_${idx}`}>{option}</option>)
                                    }
                                </select>
                            </div>
                        </div>)
                    }
                </div>
                <button 
                    className='border-0 mx-auto mb-5 mt-4 d-block bg-transparent fs-6' 
                    style={{fontWeight:"600",}} 
                    onClick={()=>setAdvancedFields(advancedFields.length ? []: purchaseFormOptions)}
                >Advanced Options <DownFullFillArrow width={20} height={20} />  </button> 
            </div>
        </div>
    );
};

export default PurchaseForm;