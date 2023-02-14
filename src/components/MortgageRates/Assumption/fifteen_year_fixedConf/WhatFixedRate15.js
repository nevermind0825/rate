import React from 'react';

const SimilarRenderer = ({data, idString}) => {
    return (
        <section id={idString}>
            <h2>{data.title}</h2>
            <div>
                {
                    data.list.map(item => <p key={item}>{item}</p>)
                }
            </div>
        </section>
    );
};

export default SimilarRenderer;