
import Layout from '../../components/Layout/layout'
import GoBackNav from '../../components/mortgageBasics/gobackNav'
import head from "../../images/mortgage_basics/credit/credit.png"
import RelatedPosts from '../../components/HomeComponents/RelatedPosts/RelatedPosts'
import React from 'react'
import { imageCont, image, subtitle, h3font, list, listCont, item, section, content, video, videoImage } from "./dontdo.module.css"
import play from "../../images/mortgage_basics/playbutton.png"
import ImageDiv from '../../components/mortgageBasics/imageDiv'

const tips = [
    "Here are things about your credit score to keep in mind while you're looking for a mortgage:",
    "Credit scores range from 300 to 850 points. The higher your credit score, the better.",
    "CAverage credit scores range between 660 and 720. A score above 680 will increase your chances of obtaining financing",
    "Your credit score can also affect your interest rate. The higher your score, the more likely you are to get a lower interest rate.",
    "Avoid multiple credit pulls. Having your credit pulled multiple times may result in a decreased credit score."
]

const CreditMeans = () => {
    return (
        <Layout>
            <ImageDiv src={head} />
            <GoBackNav />
            <div className={section}>
                <div className={content}>
                    <div className={subtitle}>
                        <h3 className={h3font}>YOUR CREDIT SCORE IS A NUMBER THAT REPRESENTS YOUR ABILITY TO PAY OFF YOUR DEBTS</h3>
                    </div>
                    <div className={listCont}>
                        <ul className={list}>
                            {tips.map(list => <li className={item}>{list}</li>)}
                        </ul>
                    </div>
                </div>
                <div className={video}>
                    <img className={videoImage} src={play}></img>
                </div>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default CreditMeans