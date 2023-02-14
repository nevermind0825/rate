import { Link } from 'gatsby';
import React from 'react';

const Step = ({step,totalSteps}) => {
    return (
        <div className='col-12 col-md-6'>
            <p><strong>Step {step.number}/{totalSteps}</strong></p>
            <h2>{step.title}</h2>
            <p>{step.info}</p>
            <p><Link style={{color:"#6495ED", textDecoration:"none"}} href='/'>{step.question}</Link></p>
        </div>
    );
};

export default Step;