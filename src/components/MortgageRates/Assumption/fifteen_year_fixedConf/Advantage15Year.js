import React from 'react';

// import CustomAccordion from './CustomAccordion';
import CustomAccordion from '../../../CustomAccordion/Accordion';

const Advantage15Year = ({adDis_vantage, idString}) => {
    return (
        <section id={idString}>
            <h2>{adDis_vantage.title}</h2>
            <p>{adDis_vantage.introduction}</p>
            <div >
                {
                    adDis_vantage.terms.map((term,idx) =><div key={idx}>
                        <CustomAccordion 
                            title={term.title}
                            accordionIndex={idx}
                            content={term.answer.map((ans,index) =><p key={index+500}>{ans}</p>)}
                        />
                    </div>)
                }
            </div>

            <div style={{marginTop: "20px"}}>
                {adDis_vantage.conclusion.map((conc, idx) => <p key={idx}>{conc}</p>)}
            </div>
            <div style={{height: "30px"}}></div>
        </section>

    );
};

export default Advantage15Year;