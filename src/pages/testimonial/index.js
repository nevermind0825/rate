import React from 'react'
import Layout from '../../components/Layout/layout'
import headImage from '../../images/testimonial/head.png'
import {Testimon} from "../../components/HomeComponents/Testiomonial/TestimonialBanner";
import ImageDiv from '../../components/mortgageBasics/imageDiv';


const Testimonial = () => {
    return (
        <Layout>
            <ImageDiv src={headImage}/>
            <Testimon></Testimon>
        </Layout>
    )
}

export default Testimonial

const imageCont = {
    display:"flex",
    justifyContent:"center",
    alignItems:"flex-end"
}

const image = {
    width:"75%"
}