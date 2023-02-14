import React from 'react';

import {text_container} from "../styles.module.css"
import Chart from '../../Chart/Chart';

const ThirtyYearRate = () => {
    return (
        <section>
          <h1>30-year fixed rate mortgage</h1>

          <div className={text_container}>
            <Chart />
          </div>
        </section>
    );
};

export default ThirtyYearRate;