import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';


const RecentMortgageArticle = ({recentMortgageArticle,recentArticle}) => {
    /*
    const recentArticle = useStaticQuery(graphql`
        query MortgageRecentArticle {
            article_img: file(relativePath: {eq: "mortgage_rate/jolly_session.jpg"}) {
            relativePath
            id
            name
            childImageSharp {
                id
                gatsbyImageData(layout: CONSTRAINED)
            }
            }
        }
    `)
    */
    return (
        <div className='col-12 col-lg-4'>
            <Link className='text-decoration-none text-dark fw-normal' to=''>
                <div className='px-1 px-md-2'>
                    <div>
                        <GatsbyImage 
                            image={getImage(recentArticle.article_img.childImageSharp)} 
                            alt="" 
                        />
                    </div>
                    <h6 className="card-title py-3">{recentMortgageArticle.title}</h6>
                    <div className="card-body">
                        <p className="card-text">{recentMortgageArticle.short_para}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RecentMortgageArticle;