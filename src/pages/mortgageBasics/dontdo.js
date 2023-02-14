import React from 'react'
import RelatedPosts from '../../components/HomeComponents/RelatedPosts/RelatedPosts'
import Layout from '../../components/Layout/layout'
import GoBackNav from '../../components/mortgageBasics/gobackNav'
import head from "../../images/mortgage_basics/dontdo/dontdo.png"
import { imageCont, image, subtitle, h3font, list, listCont, item } from "./dontdo.module.css"
import ImageDiv from '../../components/mortgageBasics/imageDiv'

const tips = [
    "Do not make major purchases like furniture, appliances, jewelry, vehicles or vacations.",
    "Don’t change or quit your job.",
    "Consult with your mortgage professional before withdrawing, depositing or moving large amounts of money in or out of your bank account.",
    "Do not pay off debts or collections (unless instructed to do so by a mortgage professional).",
    "Avoid using cash for a good faith deposit – cash is difficult to verify and could result in a closing delay.",
    "Don’t have your credit report pulled too many times – this can hurt your credit score."
]

const DontDo = () => {
    return (
        <Layout>
            <ImageDiv src={head}/>
            <GoBackNav />
            <div className={subtitle}>
                <h3 className={h3font}>WHEN LENDERS REVIEW YOUR APPLICATION, THEY LIKE TO SEE CONSISTENCY IN YOUR FINANCES</h3>
            </div>
            <div className={listCont}>
                <ul className={list}>
                    {tips.map(list => <li className={item}>{list}</li>)}
                </ul>
            </div>
            <RelatedPosts />
        </Layout>
    )
}

export default DontDo



