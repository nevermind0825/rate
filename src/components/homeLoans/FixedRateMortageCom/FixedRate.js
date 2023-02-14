import React from 'react';
import { LinkRegular } from "../../common/ButtonRegular";

import {button_container, link_btn, link_text} from "../styles.module.css";

const FixedRate = () => {
    return (
        <section>
            <h1>Fixed rate mortgages</h1>
            <p>
                Fixed rate mortgages are the most common types of home loans you’ll come across, 
                delivering an appealing mix of affordability, simplicity and convenience. 
                Understanding how they work is essential if you want to accurately compare your mortgage 
                options and find the best fit before &nbsp;    
                <a className={link_text} href='https://apply.guaranteedrate.com/apply/express-loan?AdTrk=%7Cgnr%7Cguaranteedrate%7C%7C%7C%7C%7C%7C%7C%7Cdirect%7C%7C%7C%7C%7C' target="_blank" rel="noreferrer">applying for a home loan</a>.
            </p>
            
            <div className={button_container}>
                <LinkRegular 
                    label={"View Today's 30-Year Fixed Mortgage Rates"} 
                    url={"/mortgage-rates/assumptions/30-year_fixed_conforming"}  
                    className={link_btn}
                />

                <LinkRegular 
                    label={"View Today's 15-Year Fixed Mortgage Rates"} 
                    url={"/mortgage-rates/assumptions/15-year_fixed_conforming"}  
                    className={link_btn}
                />
            </div>
        </section>
    );
};

export default FixedRate;