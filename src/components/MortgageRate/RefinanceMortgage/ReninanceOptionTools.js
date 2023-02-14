import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import {toolOption} from "./refineMortgage.module.css";



const refinance_tools_QL = graphql`
    query refinance_tools {
        refinance_tools: staticPagesJson {
            tools_options {
                url
                title
                sub_title
                text
                options {
                    url
                    name
                    image_url
                }
                option_List {
                    text
                    name
                }
            }
        },
        tool_imgs: allFile(
            filter: {name: {in: ["DesktopIcon_newv2", "RatesIconBold", "CalculatorIconBold"]}}
        ) {
            nodes {
            childImageSharp {
                gatsbyImageData
            }
            relativePath
            name
            size
            }
        }
    }
`;
console.log(toolOption);
const ReninanceOptionTools = () => {
    const {refinance_tools:{tools_options},tool_imgs:{nodes:toolImgList}} = useStaticQuery(refinance_tools_QL);

    return (
        <section className='my-5'>
            <h2 className='text-center'>{tools_options.title}</h2>
            <div className='row'>
                {
                    tools_options.options.map(tool =>{
                        const imgUrl = toolImgList.find(el=>el.name === tool.image_url)?.childImageSharp;
                        return  <div className='col-12 col-md-4' key={tool.name}>
                            <Link className='scaleHover d-flex justify-content-center align-items-center py-4 my-4 border rounded border-dark text-decoration-none text-dark' to={tool.url}>
                                <div>
                                    <GatsbyImage image={getImage(imgUrl)} alt={""} />
                                </div>
                                <div className='ms-2'>
                                    <b>{tool.name}</b>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
            <div className='row my-3 g-4'>
                <div className='col-12 col-md-6'>
                    <div className='m-3 p-2'>
                        <h3>{tools_options.sub_title}</h3>
                        <p>{tools_options.text}</p>
                        <div className='scaleHover d-inline-block mt-5'>
                            <Link className=' text-danger text-decoration-none border border-danger px-5 py-3 mt-4' style={{borderRadius:"var(--border-radius-medium)"}} to={tools_options.url}>Let's refinance today</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='m-3 p-2'>
                        {
                            tools_options.option_List.map((tool,idx) =><div className={toolOption} key={`sd${idx}`}>
                                <h4>{tool.name}</h4>
                                <p>{tool.text}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default ReninanceOptionTools;