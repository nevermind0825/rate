import React, { useState } from 'react';
import ButtonRegular from '../../common/ButtonRegular';
import CalculatorNav from '../CalculatorNav';
import HelpClosingCalc from './HelpClosingCalc';
import InputClosingCost from './InputClosingCost';
import CalcResults from './ResultsCalc';


const closingNavList = ["inputs","results","help"];

const CalculatorClosingCost = () => {
    const [activeNav,setActiveNav] = useState(closingNavList[0]);

    return (
        <section style={{maxWidth:"fit-content",margin:"auto"}}>
            <CalculatorNav navList={closingNavList} activeNav={activeNav} setActiveNav={setActiveNav} />
            
            <div>
                {
                    activeNav === "inputs" && <InputClosingCost  />
                }
            </div>
            <div>
                {
                    activeNav === "results" && <CalcResults  />
                }
            </div>
            <div>
                {
                    activeNav === "help" && <HelpClosingCalc  />
                }
            </div>

            <div className='text-center'>
                <ButtonRegular className='border-0 text-white px-5 py-2 fs-5' label={"Apply now"} />
            </div>
        </section>
    );
};

export default CalculatorClosingCost;