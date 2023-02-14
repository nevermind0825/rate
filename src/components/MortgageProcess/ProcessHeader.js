import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { LinkRegular } from '../common/ButtonRegular';

const ProcessHeader = ({banner}) => {
    // console.log(banner);
    return (
        <section>
            <div style={{display:"grid"}}>
                <GatsbyImage style={{gridArea:"1/1"}} image={getImage(banner.img.childImageSharp)} alt="" />
                <div style={{gridArea:"1/1", position:"relative", display:"grid",placeItems:"center"}}>
                    <LinkRegular className='bg-white text-dark border-light' label={banner.button} url={banner.url} />
                </div>
            </div>
        </section>
    );
};

export default ProcessHeader;