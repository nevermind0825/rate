import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import {cachet_st, cachet_title} from "../powerbid.module.css";

const Cachet = ({cachet,imageList}) => {
    const img = imageList.find(el=>el.name === cachet.image)?.childImageSharp;

    return (
        <div className={`${cachet_st} text-center`}>
            <div>
                <GatsbyImage image={getImage(img.gatsbyImageData)} />
            </div>
            <h3 className={`${cachet_title}`}>{cachet.title}</h3>
            <p>{cachet.description}</p>
        </div>
    );
};

export default Cachet;