import React from 'react';
import { windoOpener } from '../../../utils/makeHyperText';
import { ReactIcon } from '../../common/ButtonRegular';
import { SlArrowLeft } from "react-icons/sl";
import { SubmitBtn } from '../FormForCalc';

const helpUrls = {
    settleCharge:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NsGlEtWB1rml_tWd4onZ3pnc2qnd*jWV_pDF1r1NlkCpxtXhCqmYBfjoId2UFcypxtXhCqmYCfmp2p2p2pw@@",
    originationCharge:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NrHZ5pGd4onZ3pmV9rHl_tSp5sGNcomJ3fml_nFljZ2VEtXZ5ozUNdzwGojkCZ2VEtXZ5ozYNp2p2p2p2",
    otherService:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NrHh4pnZDpnhErWl9pmJEsGlCt21zpnc2qnd*jWV_pDF1r1NlkCpxtXhCqmYBfjoId2UFcypxtXhCqmYCfmp2p2p2pw@@",
    pmi:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NsWF5Z21DrEBxr2sNpmJvllc2onhEs21ycjEGeTpxdjY2onhEs21yczF2p2p2p2o@"
}


const HelpClosingCalc = () => {
    return (
        <div className='my-3' style={{maxWidth:"500px"}}>
            <p>
                <small>
                    This tool calculates your mortgage 
                    <span 
                        className='text-primary text-decoration-underline' 
                        style={{cursor:"pointer"}} 
                        onClick={()=>windoOpener(helpUrls.settleCharge)}
                    >settlement charges</span> (or closing costs) for a given set of loan terms. The calculator lumps settlement charges into two categories: <span
                        className='text-primary text-decoration-underline' 
                        style={{cursor:"pointer"}} 
                        onClick={()=>windoOpener(helpUrls.originationCharge)}
                    >origination charges</span> and <span
                        className='text-primary text-decoration-underline' 
                        style={{cursor:"pointer"}} 
                        onClick={()=>windoOpener(helpUrls.otherService)}
                    >other settlement services</span>.
                </small>
            </p>
            <p>
                <small>
                    If you enter a loan amount that is more than 80% of the home's purchase price, the calculator estimates a monthly amount for private mortgage insurance (<span
                        className='text-primary text-decoration-underline' 
                        style={{cursor:"pointer"}} 
                        onClick={()=>windoOpener(helpUrls.pmi)}
                    >PMI</span>). Mortgage lenders generally require that you obtain mortgage insurance if your down payment is less than 20% of the home purchase price.
                </small>
            </p>
            <button 
                className='d-flex align-items-center border-0 bg-transparent text-decoration-underline' 
                style={{fontSize:"12px"}}
            >
                <ReactIcon size={9} color='#000'>
                    <SlArrowLeft />
                </ReactIcon>
                <span className='ms-1'>
                    Go back
                </span>
            </button>
            <SubmitBtn isSubmitBtn={false} />
        </div>
    );
};

export default HelpClosingCalc;