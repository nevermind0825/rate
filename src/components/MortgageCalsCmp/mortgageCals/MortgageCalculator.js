import React from 'react';
import { CalculatorList } from '../../common/CalculatorPageTitle';
import CalculatorRegular from '../../common/CalculatorRegular';
import {cal_Select_options} from "./mortgage_cacl.module.css";


const dataForGraph = [
    { name: 'Principal and Interest', value: 700 },
    { name: 'PMI', value: 300 },
    { name: 'Property taxes', value: 300 },
    { name: 'Insurance', value: 200 },
    { name: 'HOA fees', value: 50 },
];
  
const COLORSForGraph = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',"#000"];
  
  

const calculatorData = {
    title: "Mortgage calculator",
    info:"To get a better sense of the total costs of buying a home, use our home mortgage calculator and figure out what your future mortgage payments might be.",
    loan_term: ["10","20","30"],
    disclosures: ["*This is not a commitment to lend. Consumers are advised to obtain a Loan Estimate. Rates are subject to change and are dependent on credit and underwriting criteria.","Your actual rate, payment and costs could be higher. Guaranteed Rate cannot predict where rates will be in the future. Sample rate provided for illustration purposes only and is not intended to provide mortgage or other financial advice specific to the circumstances of any individual and should not be relied upon in that regard. Guaranteed Rate cannot predict where rates will be in the future. Applicant subject to credit and underwriting approval. Not all applicants will be approved for financing. Receipt of application does not represent an approval for financing or interest rate guarantee. Restrictions may apply, contact Guaranteed Rate for current rates and for more information."]
}


const MortgageCalculator = () => {

    return (
        <section>
            <CalculatorRegular calculator={calculatorData} dataForGraph={dataForGraph} COLORSForGraph={COLORSForGraph} OptionComponents={<CalculatorList />} />
        </section>
    );
};

export default MortgageCalculator;