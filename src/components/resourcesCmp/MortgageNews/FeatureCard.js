import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const FeatureCard = ({article,imageList}) => {
    const img = imageList?.find(el => el?.name === article?.image)?.childImageSharp;
    return (
        <article className={` my-2`}>
            <div >
                <Link className='linkSt text-decoration-none' style={{color:"#187a9a"}} to={article.url}>
                    <div>
                        <GatsbyImage image={getImage(img)} ></GatsbyImage>
                    </div>
                    <h4 className={"fs-5 fw-normal"}>{article.title}</h4>
                    <div className='d-flex' style={{fontSize:"12px",color:"#707070"}}>
                        <address>by {article.author}</address>
                        <span className='mx-1'>on</span>
                        <time>{article.publish_date}</time>
                    </div>
                    <div style={{color:"#4a4a4a"}}>
                        {
                            article.description?.map((para,idx) =><p key={idx+Date.now()}>{para}</p>)
                        }
                    </div>
                </Link>
            </div>
        </article>
    );
};

export default FeatureCard;