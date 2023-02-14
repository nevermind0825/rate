import * as React from "react";
import "../styles/global.css";
import Calculator from "../components/HomeComponents/Calculator/Calculator";
import DigitalPersonal from "../components/HomeComponents/DigitalPersonal";
import Mortgages from "../components/HomeComponents/Mortgages/Mortgages";
import Pavings from "../components/HomeComponents/Pavings/Pavings";
import PurchaseWork from "../components/HomeComponents/PurchaseWork/PurchaseWork";
import Topics from "../components/HomeComponents/Topics/Topics";

import Layout from "../components/Layout/layout";
import Seo from "../components/seo";
import Banner from "../components/HomeComponents/Banner";
import BannerStatic from "../components/HomeComponents/BannerStatic";
import VisionRateSummary from "../components/HomeComponents/Vision_rate_summary/VisionRateSummary";
import BannerTwo from "../components/HomeComponents/BannerTwo/BannerTwo";
import RentVSBuy from "../components/HomeComponents/RentingVsBuying/RentVSBuy";
import RelatedPosts from "../components/HomeComponents/RelatedPosts/RelatedPosts";
import TestimonialBanner from "../components/HomeComponents/Testiomonial/TestimonialBanner";


const IndexPage = () => (
  <Layout>
      <BannerStatic />
      {/* <Banner /> */}
      <VisionRateSummary />
      <p className='container py-4 my-5 text-center fs-3 px-4'
        style={{ backgroundColor: "#eff4f5" }}>Leave your slow, old-school bank in the dust. Join the future of mortgages.
        <span>
          <a style={{ fontWeight: "600", textDecoration: "none", color: "#6495ED" }} href="https://www.rate.com/redirect?dest=https://apply.guaranteedrate.com/apply/loan-purpose&icid=stickybar:getrates">
            Get personalized rates</a>
        </span>
      </p>
      <BannerTwo />
      <RentVSBuy />
      <RelatedPosts />
      <TestimonialBanner/>
      {/* <p className='container py-4 my-5 text-center fs-3 px-4'
        style={{ backgroundColor: "#eff4f5" }}>
        Leave your slow, old-school bank in the dust. Join the future of mortgages.
        <span><a style={{ fontWeight: "600", textDecoration: "none", color: "#6495ED" }} href="https://www.rate.com/redirect?dest=https://apply.guaranteedrate.com/apply/loan-purpose&icid=stickybar:getrates">
          Get personalized rates</a></span></p>
      <Calculator />
      <PurchaseWork />
      <hr className='container mx-auto horizontal' />
      <DigitalPersonal />
      <hr className='container mx-auto horizontal' />
      <Mortgages />
      <hr className='container mx-auto horizontal' />
      <Topics />
      <hr className='container mx-auto horizontal' />
      <Pavings />
      <hr className='container mx-auto horizontal' /> */}
  </Layout>
)


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage;









