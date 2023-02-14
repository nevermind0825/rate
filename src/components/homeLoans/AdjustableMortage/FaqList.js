import React from 'react';

import {list_container, list_item} from "./index.module.css"

const FAQLists = [
    "What is an adjustable rate mortgage?",
    "How does an ARM loan work?",
    "Types of adjustable rates mortgages",
    "Understanding indexes, margins and caps",
    "ARMs vs. fixed rate mortgages",
    "Who should consider an ARM loan?",
    "Who should consider a fixed rate loan (Not an ARM)?",
    "ARM pros and cons",
    "How to find the best mortgage rate?",
    "Knowledgeable loan officers are here to help"
]

const FaqList = () => {
    return (
        <section>
            <h2>Table of contents</h2>
            <ul className={list_container}>
                {
                    FAQLists.map(item => <li className={list_item} key={item}>{item}</li>)
                }
            </ul>
        </section>
    );
};

export default FaqList;

