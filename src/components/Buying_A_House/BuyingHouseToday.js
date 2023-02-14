import React from 'react';

const buyingHouseInfo = {
    title: "Buying a house today",
    paragraphs:[
        "Let's be clear: There's no wrong time to buy a house. But market trends, interest rates and life events could all create the perfect homebuying conditions, whether it's your first house or your ultimate dream home.",
        "We have several tools to help you on your homebuying journey, including mortgage calculators, loan options and current rate charts. As always, our expert loan officers are here to help you make the best financial decision when applying for a mortgage and buying a house."
    ]
}

const BuyingHouseToday = () => {

    return (
        <section>
            <h2 className='my-4'>{buyingHouseInfo.title}</h2>
            <div>
                {
                    buyingHouseInfo.paragraphs.map((para,idx)=><p style={{maxWidth:"100%"}} key={`para${idx}`}>{para}</p>)
                }
            </div>
        </section>
    );
};

export default BuyingHouseToday;