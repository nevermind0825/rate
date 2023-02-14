import { Link } from 'gatsby';
import React from 'react';
import { link_text_style } from "../mortgageCurrRate.module.css";

const contentList = [
    {
        title:"What is a mortgage rate?",
        url:"",
    },
    {
        title:"What is a good mortgage rate today?",
        url:"",
    },
    {
        title:"Average mortgage rates since 2019",
        url:"",
    },
    {
        title:"How to find a low mortgage rate",
        url:"",
    },
    {
        title:"How does the interest rate differ from the annual percentage rate (APR)?",
        url:"",
    },
    {
        title:"Mortgage rates for refinancing vs. purchasing",
        url:"",
    },
    {
        title:"When to lock or float your mortgage rate",
        url:"",
    },
    {
        title:"What are points?",
        url:"",
    },
    {
        title:"How credit scores affect your mortgage rate",
        url:"",
    },
    {
        title:"Different types of mortgages",
        url:"",
    },
    {
        title:"How much can you borrow?",
        url:"",
    },
    {
        title:"Are mortgage rates the only aspect to consider when choosing between lenders?",
        url:"",
    },
]

const TableOfContents = () => {
    return (
        <section>
            <h2>Table of contents</h2>
            <div>
                {
                    contentList.map(content => <a 
                        className={`${link_text_style} d-block py-2`} 
                        // to={content.url} 
                        href={`#${content.title}`} 
                        key={content.title}
                    >{content.title}</a>)
                }
            </div>
        </section>
    );
};

export default TableOfContents;