import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../../../components/Layout/layout';

const ArticleDetails = (ctx) => {
    const {article_id,serverData:{article_data}} = ctx;
    
    
    if (!article_data?.data.id) {
        return <h1>Not Found</h1>
    }
    const article = article_data?.data;
    
    
    console.log(article);

    if (!article?.id) {
        return <h1 className='text-center'><i>Loading..........</i></h1>
    }

    return (
        <Layout className='container'>
            <article>
                <h1>{article?.attributes?.title}</h1>
                <small>By Craig Wales on {new Date(article?.attributes?.createdAt).toLocaleDateString()} Tags: market update industry news</small>
                <div>

                </div>
                <div>Image</div>
                <div style={{whiteSpace:"pre-wrap"}}>
                    {
                        article?.attributes?.description?.split("/n")?.map((text,idx) => <p key={idx}>{text}</p>)
                    }
                </div>
            </article>
        </Layout>
    );
};

export default ArticleDetails;


export async function getServerData(context) {
    const {params:{article_id}}  = context;
    

    try {
      const res = await fetch(`https://mortgage-strapi.herokuapp.com/api/articles/${article_id}`)
  
      if (!res.ok) {
        throw new Error(`Response failed`)
      }
  
      return {
        props:{
            article_data:  await res.json(),
        }
      }
    } catch (error) {
      return {
        status: 500,
        headers: {},
        props: {}
      }
    }
  }