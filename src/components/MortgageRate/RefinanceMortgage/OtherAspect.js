import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';



const other_aspect_QL = graphql`
        query other_aspect_QL {
            otherAspectData: staticPagesJson {
                faqList {
                    other_aspect {
                        title
                        introduction {
                            sub_title
                            paragraphs {
                            urls {
                                url
                                name
                            }
                            text
                            }
                        }
                        id
                        cost_list
                        conclusion {
                            sub_title
                            paragraphs {
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


const OtherAspect = () => {
    const {otherAspectData:{faqList:{other_aspect}}} = useStaticQuery(other_aspect_QL);
    // console.log(other_aspect);
    return (
        <section className='' id={other_aspect.title}>
            <h2>{other_aspect.title}</h2>
            <div>
                {
                    other_aspect.introduction.map((para,idx) => <div key={idx}>
                        <h3>{para.sub_title}</h3>
                        <div>
                            {
                                para.paragraphs.map((textInfo,idx) =>makeHyperLink(textInfo.text,textInfo.urls,idx,"linkSt",{maxWidth:"100%"}))
                            }
                        </div>
                    </div>)
                }
            </div>
            <div>
                <div className='row ms-5 my-4'>
                    {
                        other_aspect.cost_list.map(list => <div className={`bullet_point col-12 col-md-6 my-2`} key={list}>{list}</div>)
                    }
                </div>
            </div>
            <div>
                {
                    other_aspect.conclusion.map((para,idx) => <div key={idx}>
                        <h3>{para.sub_title}</h3>
                        <div>
                            {
                                para.paragraphs.map((textInfo,idx) =>makeHyperLink(textInfo.text,textInfo.urls,idx,"linkSt",{maxWidth:"100%"}))
                            }
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default OtherAspect;