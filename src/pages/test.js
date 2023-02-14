import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import CalculatorRegular from "../components/common/CalculatorRegular";



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
    info:"Get a sense of the costs of buying a home with our monthly mortgage calculator.",
    prices: {
    //     home: 300,
    //     downpay_1: 300,
    //     downpay_2: 400,
    //     interest_rate: 15,
  },
  loan_term: ["10","20","30"],
  disclosures: ["Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details.", "Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details. Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details. Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details."]
}


const TesUrl = <Link to="">ABC Link</Link>
const TesOpt = <select name="" id="">
  <option value="">A</option>
  <option value="">B</option>
  <option value="">C</option>
</select>


export default function Hero() {
  
  return (
    <>
      <CalculatorRegular calculator={calculatorData} OptionComponents={TesOpt} dataForGraph={dataForGraph} COLORSForGraph={COLORSForGraph}></CalculatorRegular>
    </>
  )
}