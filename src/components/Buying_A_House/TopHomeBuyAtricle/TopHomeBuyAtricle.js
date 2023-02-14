import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const topArticles = [
    {
        title:"Where home prices are cooling off and where they aren’t",
        image:"home price  article",
        short_description:[
            "If there’s been one constant in the U.S. housing market over the past two and half years it would have to be the seemingly universal ascent of home prices. Mortgage rates have shifted dramatically (in both directions), buyer interest has alternately intensified and receded, but home prices have only known one direction: upward. "
        ],
        url:""
    },
    {
        title:"Hidden Costs of Buying/Owning a Home",
        image:"hidden cost article",
        short_description:[
            "There are few things more satisfying than buying your first home and staking a claim to the time-honored dream of American homeownership. More than a right of passage, it’s an investment in your future and a satisfying benchmark of arriving in adulthood."
        ],
        url:""
    },
    {
        title:"8 housing hacks for a low inventory market",
        image:"eight housing  article",
        short_description:[
            "If there's one commonality in the housing market these days, it's almost certainly a lack of inventory. There are just not enough houses available for sale to meet buyer demand. The resulting seller's market often leads to fierce bidding wars, quick turnarounds, and having to offer tens of thousands more on a bid just to be taken seriously by the seller."
        ],
        url:""
    },
]

const topArticle_QL = graphql`

    query topArticle_QL {
    topArticlesImg: allFile(filter: {name: {in: ["eight housing  article","hidden cost article","home price  article"]}}) {
        nodes {
        childImageSharp {
            gatsbyImageData
        }
        name
        size
        }
    }
    }


`;

const TopHomeBuyAtricle = () => {
    const {topArticlesImg:{nodes:topArticlesImgList}} = useStaticQuery(topArticle_QL);
    console.log(topArticlesImgList);
    return (
        <section>
            <h2 className='my-3 my-md-4'>Top homebuying articles</h2>
            <div className='row g-3'>
                {
                    topArticles.map(article => {
                        const img = topArticlesImgList.find(el => el.name === article.image)?.childImageSharp;
                        return <article className='col-12 col-md-4 p-3' key={article.title}>
                            <div>
                                <div>
                                    <GatsbyImage image={getImage(img)} />
                                </div>
                                <h5 className='my-4'>{article.title}</h5>
                                {
                                    article.short_description.map((para,idx) => <p key={`paraArtil_${idx}`}>{para}</p>)
                                }
                            </div>
                        </article>
                    })
                }
            </div>
        </section>
    );
};

export default TopHomeBuyAtricle;