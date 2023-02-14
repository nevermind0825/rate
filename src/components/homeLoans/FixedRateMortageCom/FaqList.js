import React from 'react';

import {list_container, list_item} from "../styles.module.css"

const FAQLists = [
    "What is a fixed rate mortgage?",
    "How does a fixed rate loan work?",
    "Fixed rate vs. adjustable rate mortgages",
    "What are the benefits of fixed rate mortgages?",
    "What are the drawbacks to fixed rate mortgages?",
    "Who should consider a fixed rate mortgage?",
    "What are your fixed rate loan term options?",
    "How can you find the right fixed rate mortgage for you?",
]

const FaqList = () => {
    return (
        <section>
            <h2>Fixed rate mortgages FAQ</h2>
            <ul className={list_container}>
                {
                    FAQLists.map(item => <li className={list_item} key={item}>{item}</li>)
                }
            </ul>
        </section>
    );
};

export default FaqList;

