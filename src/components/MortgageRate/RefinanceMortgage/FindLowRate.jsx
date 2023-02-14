import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';



const low_rate_QL = graphql`
    query low_rate_QL {
        low_rate_data: staticPagesJson {
        faqList {
            find_low_rate {
            title
            short_note
            paragraphs {
                urls {
                url
                name
                }
                text
            }
            id
            }
        }
        }
    }
`;


const FindLowRate = () => {
    const {low_rate_data:{faqList:{find_low_rate}}} = useStaticQuery(low_rate_QL);
    return (
        <section>
            <h2 className='my-3'>{find_low_rate.title}</h2>
            <div>
                {
                    find_low_rate.paragraphs.map((para,idx) => makeHyperLink(para.text,para.urls,idx,"linkSt",{maxWidth:"100%"}))
                }
            </div>
            <p style={{maxWidth:"100%"}}>Note: {find_low_rate.short_note}</p>
        </section>
    );
};

export default FindLowRate;