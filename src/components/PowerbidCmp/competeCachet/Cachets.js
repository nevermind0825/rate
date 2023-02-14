import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Cachet from './Cachet';
import {cachets_st} from "../powerbid.module.css";


const cachets = [
    {
        image:"Stopwatch",
        title:"Fast",
        description:"Our priority turn times mean you can become a power buyer overnight."
    },
    {
        image:"Strong",
        title:"Strong",
        description:"Full-underwriting credit approval commands respect and helps you compete with cash buyers*."
    },
    {
        image:"Calendar",
        title:"Flexible",
        description:"Renewable and lasts for 90 days, giving you time to find the home right for you."
    },
]


const cachets_QL = graphql`
    query cachets_QL {
        cachet_img_list: allFile(filter: {name: {in: ["Calendar","Stopwatch","Strong"]}}) {
            nodes {
                childImageSharp {
                    gatsbyImageData
                }
                name
                size
                relativePath
            }
        }
    }
`;

const Cachets = () => {
    const {cachet_img_list:{nodes:cachet_imgs}} = useStaticQuery(cachets_QL);
    // console.log(cachet_imgs);
    return (
        <section className='container'>
            <h1 className='text-center my-5'>The cachet to compete with cash</h1>
            <div className={cachets_st}>
                {
                    cachets.map(cachet =><Cachet  cachet={cachet} imageList={cachet_imgs} key={cachet.title} /> )
                }
            </div>
        </section>
    );
};

export default Cachets;