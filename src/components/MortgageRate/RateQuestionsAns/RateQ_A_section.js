import React from 'react';
import parse from 'html-react-parser';


const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;



const RateQ_A_section = ({qaSection}) => {
    return (
        <section className='my-5' id={qaSection.question}>
            <h2 className='my-3'>{qaSection.question}</h2>
            <div>
                {
                    qaSection.paragraphs?.map((answerPara, idx) => <p style={{maxWidth:"100%"}} key={`ansp_${idx}`}>{parse(answerPara)}</p>)
                }
            </div>
        </section>
    );
};

export default RateQ_A_section;