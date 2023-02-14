import React from 'react';

const ProcessDiscalimer = ({disclaimer}) => {
    return (
        <section style={{fontSize:"14px",color:"rgb(86, 97, 108)"}}>
            <p className='my-3'><i>Disclaimer</i></p>
            {
                disclaimer.map((para,idx)=><p key={`idp_${idx}`}><i>{para}</i></p>)
            }
        </section>
    );
};

export default ProcessDiscalimer;