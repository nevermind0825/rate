import React from 'react';

import { content_list, link_item} from "./index.module.css";

const ContentList = ({title, data}) => {
    return (
        <section>
            <h2>{title}</h2>
            <div className={content_list}>
              {
                data.map((elem, idx) => (
                  <a key={idx} className={link_item} href={`#${elem.id}`}>{elem.topic}</a>
                ))
              }
            </div>
        </section>
    );
};

export default ContentList;