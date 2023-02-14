import React from 'react';

import { content_list, link_item} from "./index.module.css";

const ContentList15 = () => {
    return (
        <section>
            <h2>Table of contents</h2>
            <div className={content_list}>
                <a className={link_item} href='#whatAfixedRate15'>What is a 15-year fixed rate mortgage?</a>

                <a className={link_item} href='#whatIsGood15Fixed'>What is a good 15-year fixed mortgage rate?</a>

                <a className={link_item} href='#average15yearRate'>Average 15-year mortgage rates since 2018</a>

                <a className={link_item} href='#howFindLow15Rate'>How to find the lowest 15-year mortgage rate</a>

                <a className={link_item} href='#advantage15YearData'>Advantages of 15-year mortgages</a>

                <a className={link_item} href='#disadvantage15YearData'>Disadvantages of 15-year mortgages</a>

                <a className={link_item} href='#mortgage_15vs30'>15-year mortgages vs. 30-year mortgages</a>

                <a className={link_item} href='#differenceFIxed_arm'>What is the difference between a fixed interest rates mortgage and ARM?</a>

                <a className={link_item} href='#refinancing_vs_purchase'>15-year refinancing vs. purchasing rates</a>

                <a className={link_item} href='#rightFixed15'>Is a 15-year fixed rate mortgage right for you?</a>

                <a className={link_item} href='#rightFixed15'>Guaranteed Rate’s 15-Year Mortgage</a>
            </div>
        </section>
    );
};

export default ContentList15;