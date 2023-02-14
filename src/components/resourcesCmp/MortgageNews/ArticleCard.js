import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {news_article,news_article_wrapper} from "./mortgageNews.module.css";

const ArticleCard = ({article,imageList,titleCls=""}) => {
    const img = imageList?.find(el => el?.name === article?.image)?.childImageSharp;
    return (
        <article className={`${news_article_wrapper} my-2`}>
            <div className={news_article}>
                <Link className='linkSt text-decoration-none' style={{color:"#187a9a"}} to={article.url}>
                    <div>
                        <GatsbyImage image={getImage(img)} ></GatsbyImage>
                    </div>
                    <h4 className={titleCls}>{article.title}</h4>
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

export default ArticleCard;