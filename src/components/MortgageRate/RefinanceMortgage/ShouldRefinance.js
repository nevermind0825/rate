import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useState } from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';
import {shouldAccordian} from "./refineMortgage.module.css"



const should_freinance_QL = graphql`
    query should_freinance_QL {
        shouldRefinance: staticPagesJson {
            faqList {
              should_refinance {
                title
                id
                refinance_reasons {
                  list {
                    title
                    details {
                      urls {
                        url
                        name
                      }
                      text
                    }
                  }
                  intro
                }
                paragraphs {
                  sub_title
                  paras {
                    urls {
                      url
                      name
                    }
                    text
                  }
                }
              }
            }
          }
    }
`;


const ShouldRefinance = () => {
    const {shouldRefinance:{faqList:{should_refinance}}} = useStaticQuery(should_freinance_QL);
    const [shouldExpandAccordians,setShouldExpandAccordians] = useState([]);
    // console.log(should_refinance,"should_refinance");
    const accordianHandler = (indexNumber) =>{
      if (shouldExpandAccordians.includes(indexNumber)) {
        setShouldExpandAccordians(shouldExpandAccordians.filter(num => num !== indexNumber));
        
      }else{
        setShouldExpandAccordians([...shouldExpandAccordians,indexNumber]);
      }
    }
    return (
        <section className='my-4' id={should_refinance.title}>
            <h2>{should_refinance.title}</h2>
            <div>
                {
                    should_refinance.paragraphs.map((para,idx) => <div key={idx}>
                        <h4>{para.sub_title}</h4>
                        {
                            para.paras.map((textInfo,idx) => makeHyperLink(textInfo.text,textInfo.urls,idx,"linkSt",{maxWidth:"100%"}))
                        }
                    </div>)
                }
            </div>
            <div style={{borderBottom:"1px solid var(--color-marketing-8-lighter)"}}>
                <p>{should_refinance.refinance_reasons.intro}</p>
                {
                    should_refinance.refinance_reasons.list.map((para,accordianIdx) => <div  className={shouldAccordian} key={accordianIdx}>
                        <h4 style={{cursor:"pointer"}} onClick={()=>accordianHandler(accordianIdx)}>{para.title}</h4>
                        <div style={{display: shouldExpandAccordians.includes(accordianIdx)?"block":"none"}}>
                          {
                              para.details.map((textInfo,txtId) => <div key={txtId}>
                                  {makeHyperLink(textInfo.text,textInfo.urls,txtId,"linkSt",{maxWidth:"100%"})}
                              </div>)
                          }
                        </div>
                    </div>)
                }
            </div>
            
            {/* <div>
                <h3>{should_refinance.home_rate.title}</h3>
                {
                    should_refinance.home_rate.paragraphs.map(para => <div key={Math.random()}>
                       {makeHyperLink(para.text,para.urls)}
                    </div>)
                }
            </div> */}
        </section>
    );
};

export default ShouldRefinance;