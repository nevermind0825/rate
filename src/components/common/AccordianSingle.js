import React, { useState } from 'react';
import { DownArrow } from '../../utils/icons/Arrows';
import {accordian_btn,accordian_btn_icon,accordian_btn_expand} from "./common.module.css";

const AccordianSingle = ({paragraphs=[""],label="", p_style={}, p_class="", btn_class=""}) => {
    const [isExpand,setIsExpand] = useState(false);
    return (
        <div>
            <button className={`${accordian_btn} ${isExpand && accordian_btn_expand} border-0 rounded bg-transparent ${btn_class}`} onClick={()=>setIsExpand(!isExpand)}>
                {label}
                <span className={`${accordian_btn_icon} ms-2`}><DownArrow width={12} height={12} /></span>
            </button>
            {
                !!isExpand && <div>
                    {
                        paragraphs.map((singlePara,idx) => <p className={p_class} key={`singlePara_${idx}`} style={{...p_style}}>{singlePara}</p>)
                    }
                </div>
            }
            
        </div>
    );
};

export default AccordianSingle;