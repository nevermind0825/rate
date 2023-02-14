import React from 'react';
import {text_container, list_container} from "../styles.module.css"

const drawbackList = [
    {
        title:"Inflexibility",
        text:"The drawback to a fixed rate mortgage’s steadfast consistency is that you may miss out on opportunities to take advantage of any future drop in mortgage rates. That is, unless you refinance your home loan."
    },
    {
        title:"Initial costs",
        text:"ARMs typically offer lower interest rates than fixed rate home loans during their initial fixed rate term. Now, that mortgage rate could go up or down afterward, but at least at the outset, you stand to pay more in interest on a fixed rate loan."
    },
]


const DrawbackFixRate = () => {
    return (
        <section>
         <h2>What are the drawbacks to fixed rate mortgages?</h2>
        <p className={text_container}>
            Fixed rate mortgages are great options for financing a home purchase, but they’re not perfect — no loan option is, really. We would be remiss if we didn’t address the potential disadvantages that a fixed rate mortgage presents:
        </p>
        <ul className={list_container}>
            {
                drawbackList.map((para,idx)=><li key={idx}><b>{para.title}</b> {para.text}</li>)
            }
        </ul>
    </section>
    );
};

export default DrawbackFixRate;